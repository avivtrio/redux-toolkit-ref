import {
  LoginData,
  ShApiResponse_FullSmartheartUser,
  ApiError,
  IApiErrorErrorCode,
  FullSmartheartUser,
  Organization,
  ShApiResponse_IEnumerable_SmartheartUser,
  SmartheartUser,
  BasicSmartheartUser,
  ShApiResponse_BasicSmartheartUser,
  UserActivationData,
  ShApiResponse_Boolean,
  ShApiResponse_List_PortalPermission,
  PortalPermission,
  PortalProfile,
  ShApiResponse_List_Ecg,
  Ecg,
  Recipient,
  IList,
  List,
  IListResult,
  ListResultDto,
  IPagedResult,
  PagedResultDto,
  Dictionary,
  IDictionary,
  IRequestOptions,
  IRequestConfig,
  getConfigs,
  axios,
  basePath
} from './index.defs';

export class UsersApiService {
  /** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */

  /**
   * Authenticates a user
   */
  static usersLogin(
    params: {
      /** The username (email) and password of the user to authenticate */
      credentials: LoginData;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_FullSmartheartUser> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/login';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['credentials'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
 * Gets the list of users in the logged api user organization. 
Requires Api User role authorization.
 */
  static usersGetUsers(options: IRequestOptions = {}): Promise<ShApiResponse_IEnumerable_SmartheartUser> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Creates a new user
   */
  static usersCreateUser(
    params: {
      /** The user object to add */
      user: FullSmartheartUser;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_FullSmartheartUser> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      let data = params['user'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Creates a new user for an organization. The created user needs to be validated and/or activated
   */
  static usersCreateOrganizationUser(
    params: {
      /** The user object to add */
      user: BasicSmartheartUser;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_BasicSmartheartUser> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/organization';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['user'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Activates a given user based on a valid activation token and sets the given password to the activated user.
   */
  static usersActivateUser(
    params: {
      /**  */
      activationData: UserActivationData;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/activate';

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['activationData'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Enables a user
   */
  static usersEnableUser(
    params: {
      /** The unique identifier of the user to enable */
      userId: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}/status';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Disables the given user
   */
  static usersDisableUser(
    params: {
      /** The unique identifier of the user */
      userId: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}/status';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Updates the given user
   */
  static usersUpdateUser(
    params: {
      /** The unique identifier of the user to update */
      userId: string;
      /** The user data to update */
      user: FullSmartheartUser;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_FullSmartheartUser> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['user'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Gets the list of Smartheart accounts the user has permissions to view in the Smartheart Portal.
   */
  static usersGetPortalPermissions(
    params: {
      /** The unique identifier of the user whose permissions should be returned */
      userId: string;
      /** The results "page" number to return */
      page?: number;
      /** The number of result in each "page" */
      pageSize?: number;
      /** How to sort the returned permissions list ("name" - by the account name; "last-ecg" - by last ecg date/time */
      sort?: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_List_PortalPermission> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}/permissions';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { page: params['page'], pageSize: params['pageSize'], sort: params['sort'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Gets the list of ECGs to be viewed in the portal in a given date range of the permissions of the authenticated user.
   */
  static usersGetPortalEcgList(
    params: {
      /** The unique identifier of the user whose portal ecg list should be returned */
      userId: string;
      /** The results "page" number to return */
      page?: number;
      /** The number of result in each "page" */
      pageSize?: number;
      /** The date from which to return the ECGs (yyyy-MM-dd) */
      fromDate?: string;
      /** The date until which to return the ECGs (yyyy-MM-dd) */
      toDate?: string;
      /** How to sort the returned ecgs list ("name" - by the account name, ascending; "last-ecg" - by the ecg date/time, descending */
      sort?: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_List_Ecg> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}/ecgs';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        page: params['page'],
        pageSize: params['pageSize'],
        fromDate: params['fromDate'],
        toDate: params['toDate'],
        sort: params['sort']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Adds an additional email recipient for new ECG notifications
   */
  static usersAddRecipients(
    params: {
      /** The unique identifier of the user to add an additional recipient to */
      userId: string;
      /** The recipient email address */
      recipient: Recipient;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}/recipients';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['recipient'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Removes an email recipient for new ECG notifications
   */
  static usersDeleteRecipient(
    params: {
      /** The unique identifier of the user to remove the recipient from */
      userId: string;
      /** The recipient email address to remove */
      recipient: Recipient;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}/recipients';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params['recipient'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
