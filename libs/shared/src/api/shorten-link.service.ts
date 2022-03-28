import { ShortenLinkDto, ShortenLinkResponseDto } from 'lib/shared/dto';
import { HttpClient } from 'lib/shared/helpers';
import { AxiosRequestConfig } from 'axios';

export class ShortenLinkService extends HttpClient {
  public constructor(config: ShortenLinkDto) {
    super(`${config.url}`);
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

  public generateLink = (url: string) =>
    this.instance.get<ShortenLinkResponseDto>(`/api/newLink?url=${url}`);
}
