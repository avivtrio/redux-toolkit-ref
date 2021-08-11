import {
  ShApiResponse_List_Profile,
  ApiError,
  IApiErrorErrorCode,
  Profile,
  ShApiResponse_CreateProfilesResponse,
  CreateProfilesResponse,
  ShApiResponse_Profile,
  ShApiResponse_Boolean,
  ShApiResponse_List_ProfileEcg,
  ProfileEcg,
  ShApiResponse_String,
  ShApiResponse_Byte,
  ShApiResponse_EcgMetaData,
  EcgMetaData,
  Finding,
  Measurements,
  SendEcgRequest,
  ShApiResponse_EcgData,
  EcgData,
  ElectrodesStatus,
  EcgMeasurements,
  EcgFinding,
  Symptom,
  EcgLeads,
  EcgComment,
  EcgInterpretation,
  EcgPortalInterpretation,
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

export class ProfilesApiService {
  /** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */

  /**
   * Get the authenticated user's profiles list
   */
  static profilesGetProfiles(options: IRequestOptions = {}): Promise<ShApiResponse_List_Profile> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Returns the profile list of the given user. Available for Api users only.
   */
  static profilesGetCustomerProfiles(
    params: {
      /** The unique identifier of the user whose profiles list to return */
      userId: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_List_Profile> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}/profiles';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Adds the given list of profiles to the
   */
  static profilesCreateProfiles(
    params: {
      /** The unique identifier of the user to add the profiles to */
      userId: string;
      /** The list of profiles to add */
      profiles: Profile[];
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_CreateProfilesResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{userId}/profiles';
      url = url.replace('{userId}', params['userId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['profiles'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Update the given profile
   */
  static profilesUpdateProfile(
    params: {
      /** The unique identifier of the profile */
      profileGuid: string;
      /** The profile data to update */
      prof: Profile;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Profile> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['prof'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Deletes the given profile from the profiles list
   */
  static profilesDeleteProfile(
    params: {
      /** The unique identifier of the profile to delete */
      profileGuid: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Return the list of ECGs of the given profile
   */
  static profilesGetProfileEcgs(
    params: {
      /** The unique identifier of the profile whose ECGs to return */
      profileGuid: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_List_ProfileEcg> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Transmits an ECG for the given profile id
   */
  static profilesTransmitProfileEcg(
    params: {
      /** The unique identifier of profile */
      profileGuid: string;
      /** The ECG data in xml format */
      ecgXml: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_String> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['ecgXml'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Returns the pdf report of the given profile's given ECG
   */
  static profilesGetProfileEcgPdf(
    params: {
      /** The unique identifier of profile */
      profileGuid: string;
      /** The unique identifier of the ECG */
      ecgId: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Byte> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs/{ecgId}/pdf';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');
      url = url.replace('{ecgId}', params['ecgId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Returns the xml report of the given profile's given ECG
   */
  static profilesGetProfileEcgXml(
    params: {
      /** The unique identifier of profile */
      profileGuid: string;
      /** The unique identifier of the ECG */
      ecgId: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Byte> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs/{ecgId}/xml';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');
      url = url.replace('{ecgId}', params['ecgId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Returns the metadata of the the given profile's given ECG
   */
  static profilesGetEcgMetaData(
    params: {
      /** The unique identifier of profile */
      profileGuid: string;
      /** The unique identifier of the ECG */
      ecgId: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_EcgMetaData> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs/{ecgId}/metadata';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');
      url = url.replace('{ecgId}', params['ecgId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Send the given profile's ecg to the given email recipients
   */
  static profilesSendProfileEcg(
    params: {
      /** The unique identifier of profile */
      profileGuid: string;
      /** The unique identifier of the ECG */
      ecgId: string;
      /** The email recipient to send the ECG to */
      req: SendEcgRequest;
      /** The language of the email, in .Net Culture Code format (e.g. "en-US") */
      lang?: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs/{ecgId}/send';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');
      url = url.replace('{ecgId}', params['ecgId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { lang: params['lang'] };
      let data = params['req'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Gets the data of a given ecg
   */
  static profilesGetEcgData(
    params: {
      /** The unique identifier of the profile the ECG was done for */
      profileGuid: string;
      /** The unique identifier of the ECG */
      ecgId: string;
      /** The unique id of the ECG to compare to */
      compareTo?: string;
      /** The culture code (e.g. "en-US") of the returned texts */
      lang?: string;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_EcgData> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs/{ecgId}';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');
      url = url.replace('{ecgId}', params['ecgId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { compareTo: params['compareTo'], lang: params['lang'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add an interpretation text to the given ecg
   */
  static profilesAddPortalInterpretation(
    params: {
      /** The unique identifier of the profile that the ECG was done for */
      profileGuid: string;
      /** The unique id of the ECG to add the interpretation to */
      ecgId: string;
      /** The interpretation data */
      interpretation: EcgPortalInterpretation;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs/{ecgId}/interpretation';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');
      url = url.replace('{ecgId}', params['ecgId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['interpretation'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a comment to the given ecg
   */
  static profilesAddPortalComment(
    params: {
      /** The unique identifier of the profile that the ECG was done for */
      profileGuid: string;
      /** The unique id of the ECG to add the interpretation to */
      ecgId: string;
      /** The comment data */
      comment: EcgComment;
      /** access token */
      authorization?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ShApiResponse_Boolean> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/profiles/{profileGuid}/ecgs/{ecgId}/comment';
      url = url.replace('{profileGuid}', params['profileGuid'] + '');
      url = url.replace('{ecgId}', params['ecgId'] + '');

      options.headers = { Authorization: params['authorization'], ...options.headers };
      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['comment'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
