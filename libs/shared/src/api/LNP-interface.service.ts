import {
  LNPAssignRewardDto,
  LNPAuthenticateDto,
  LNPAuthenticateResponseDto,
  LNPCallbackRegistrationDto,
  LNPCustomersDto,
  LNPGetCustomers,
  LNPRegistrationDto,
  LNPRewardDto,
} from 'lib/shared/dto';
import { extractJWT, HttpClient } from 'lib/shared/helpers';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as moment from 'moment';
import { Logger } from '@nestjs/common';
import { Token } from 'lib/model/entities';
import * as https from 'https';
import { TokenFor } from 'lib/shared/types';

interface TokenLNP {
  sub: string;
  auth: string;
  exp: number;
}

export class LNPInterfaceService extends HttpClient {
  private token: string;
  private readonly privateInstance: AxiosInstance;
  private readonly username: string;
  private readonly password: string;

  public constructor(
    token: string,
    host: string,
    port: number,
    username: string,
    password: string,
  ) {
    super(`https://${host}:${port}`);
    this.token = token;
    this.username = username;
    this.password = password;
    this._initializeRequestInterceptor();

    // create new instance for get new token
    this.privateInstance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: `https://${host}:${port}`,
    });
    this.privateInstance.interceptors.response.use(
      ({ data }: AxiosResponse) => data,
    );
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  private _handleRequest = async (config: AxiosRequestConfig) => {
    await this._handleCheckToken();
    config.headers['Content-Type'] = 'application/json';
    config.timeout = 60000;
    config.headers.Authorization = `Bearer ${this.token}`;
    return config;
  };

  private _handleCheckToken = async () => {
    let isExpired: boolean;
    if (this.token) {
      const payload = extractJWT<TokenLNP>(this.token);
      isExpired = moment
        .unix(payload.exp)
        .subtract(15, 'days')
        .isBefore(moment());
    } else {
      isExpired = true;
    }

    if (isExpired) {
      try {
        const auth = await this.authenticate({
          username: this.username,
          password: this.password,
          rememberMe: true,
        });

        // set new token
        this.token = auth.id_token;

        let token = await Token.findOne({
          where: { tokenFor: TokenFor.LNP },
        });

        const payloadToken = extractJWT<TokenLNP>(auth.id_token);
        const expiryDate = moment.unix(payloadToken.exp).toDate();

        if (!token) {
          token = Token.create({
            idToken: auth.id_token,
            type: 'Bearer',
            tokenFor: TokenFor.LNP,
            expiryDate,
          });
          await Token.save(token);
        } else {
          token.idToken = auth.id_token;
          token.expiryDate = expiryDate;
          await Token.save(token);
        }
      } catch (e) {
        Logger.error(e.message, e.stack, '_handleCheckToken');
      }
    }
  };

  public checkMember = (memberId: string) =>
    this.instance.get(`/api/loyaltyMerchantPartners/${memberId}`);

  public customers = (payload: LNPGetCustomers) =>
    this.instance.get<LNPCustomersDto[]>(`/api/customers`, { params: payload });

  public checkUser = (phone: string) =>
    this.instance.get(`/api/customer-identifiers?searchText=${phone}`);

  public registration = (lnpRegistrationDto: LNPRegistrationDto) =>
    this.instance.post(`/api/customerRegistration`, lnpRegistrationDto);

  public callbackRegister = (
    lnpCallbackRegistrationDto: LNPCallbackRegistrationDto,
  ) => this.instance.put(`/api/customers`, lnpCallbackRegistrationDto);

  public listReward = (
    merchantPartnerId: number,
    page: number,
    limit: number,
  ) =>
    this.instance.get<LNPRewardDto[]>(
      `/api/coupon-types?merchantPartnerId=${merchantPartnerId}&page=${page}&size=${limit}&sort=id,asc`,
    );

  public detailReward = (id: string) =>
    this.instance.get<LNPRewardDto>(`/api/coupon-types/${id}`);

  public getLoyaltyMerchantPartnerId = (merchantId: string) =>
    this.instance.get<LNPRewardDto>(
      `/api/coupon-merchants?searchText=${merchantId}`,
    );

  public assignReward = (lnpAssignRewardDto: LNPAssignRewardDto) =>
    this.instance.put(`/api/coupons`, lnpAssignRewardDto);

  private authenticate = (loginDto: LNPAuthenticateDto) =>
    this.privateInstance.post<LNPAuthenticateResponseDto>(
      `/api/authenticate`,
      loginDto,
    );
}
