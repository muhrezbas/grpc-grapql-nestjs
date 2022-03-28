import { HttpClient } from 'lib/shared/helpers';
import { SendSMSDto, SMSConfig } from 'lib/shared/dto';
import { AxiosRequestConfig } from 'axios';

export class SMSInterfaceService extends HttpClient {
  private readonly userid;
  private readonly masking;
  private readonly password;
  private readonly refno;

  public constructor(config: SMSConfig) {
    super(`${config.url}`);
    this.userid = config.userid;
    this.masking = config.masking;
    this.password = config.password;
    this.refno = config.refno;
    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    config.headers['Content-Type'] = 'application/json';
    config.timeout = 60000;
    // config.timeout = 5000;
    return config;
  };

  public sendSMS = (payload: SendSMSDto) =>
    this.instance.post(
      `/sendsms`,
      {},
      {
        params: {
          ...payload,
          refno: this.refno,
          password: this.password,
          masking: this.masking,
          userid: this.userid,
        } as SMSConfig,
      },
    );
}
