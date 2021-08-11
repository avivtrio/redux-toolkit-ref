/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig { }

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {
  axios: axiosStatic
};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}
//https://test.smartheartservice.com/api/v2.0
export const basePath = 'https://test.smartheartservice.com/api/v2.0';

export interface IList<T> extends Array<T> { }
export interface List<T> extends Array<T> { }
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> { }

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export interface ShApiResponse_List_Profile {
  /**  */
  error?: ApiError;

  /**  */
  response?: Profile[];
}

export interface ApiError {
  /**  */
  errorCode?: IApiErrorErrorCode;

  /**  */
  errorMessage?: string;
}

export interface Profile {
  /** The profile's unique identifier */
  profileId?: string;

  /** The profiles first name */
  firstName?: string;

  /** The profile's last name */
  lastName?: string;

  /** The profile's gender (Male/Female) */
  gender?: string;

  /** The profile's belt size (S/M/L/XL) */
  beltSize?: string;

  /** The profile's free-text reference */
  reference?: string;

  /** Indicates whether the profile has pacemaker installed */
  pacemaker?: boolean;

  /** The birth date of the profile */
  birthDate?: string;
}

export interface ShApiResponse_CreateProfilesResponse {
  /**  */
  error?: ApiError;

  /**  */
  response?: CreateProfilesResponse;
}

export interface CreateProfilesResponse {
  /** List of created profile ids */
  profileIDs?: string[];

  /** List of profiles that were NOT created */
  invalid?: Profile[];
}

export interface ShApiResponse_Profile {
  /**  */
  error?: ApiError;

  /**  */
  response?: Profile;
}

export interface ShApiResponse_Boolean {
  /**  */
  error?: ApiError;

  /**  */
  response?: boolean;
}

export interface ShApiResponse_List_ProfileEcg {
  /**  */
  error?: ApiError;

  /**  */
  response?: ProfileEcg[];
}

export interface ProfileEcg {
  /** The unique identifier of the ECG */
  ecgId?: string;

  /** The ECG date and time */
  ecgDateTime?: string;
}

export interface ShApiResponse_String {
  /**  */
  error?: ApiError;

  /**  */
  response?: string;
}

export interface ShApiResponse_Byte {
  /**  */
  error?: ApiError;

  /**  */
  response?: string;
}

export interface ShApiResponse_EcgMetaData {
  /**  */
  error?: ApiError;

  /**  */
  response?: EcgMetaData;
}

export interface EcgMetaData {
  /** The unique identifier of an ECG */
  ecgId?: string;

  /** The date/time of the ECG */
  ecgDateTime?: string;

  /** The request context of the ECG */
  requestContext?: string;

  /** The list of custom findings of the ECG */
  findings?: Finding[];

  /** Indicates whether the ECG measurements are confiremed or not */
  isConfirmedMeasurements?: boolean;

  /** The measurements of the ECG */
  measurements?: Measurements;
}

export interface Finding {
  /**  */
  name?: string;

  /**  */
  value?: string;
}

export interface Measurements {
  /** The rate (pulse) ECG measurement */
  rate?: string;

  /** The PR ECG measurement */
  pr?: string;

  /** The Qrs ECG measurement */
  qrs?: string;

  /** The QT ECG measurement */
  qt?: string;

  /** The QTcB ECG measurement */
  qtcb?: string;

  /** The QTcF ECG measurement */
  qtcf?: string;
}

export interface SendEcgRequest {
  /** The email recipient to send the ECG to */
  email?: string;
}

export interface ShApiResponse_EcgData {
  /**  */
  error?: ApiError;

  /**  */
  response?: EcgData;
}

export interface EcgData {
  /** The ECG Feedback text. Relevant for non-professional users and in case the ECG is 
completely not readable. */
  recommendations?: string;

  /** The severity of the ECG Recommendation (Feedback). Relevant for non-professional users 
and in case the ECG is completely not readable.
Possible values are: 
  (-1) - The ECG is not readable; 
  1 - "green" severity;
  2 - "yellow" severity;
  3 - "organe" severity;
  4 - "red" severity */
  severity?: number;

  /** The current status of the ECG transmission. 
Possible values are:
  0 - The ECG is not readable;
  1 - The ECG is only partly ready. Relevant when the user has interpretation service and it was not given yet, but
    the ECG graph is already available.
  2 - The ECG is ready. */
  status?: number;

  /** The remarks the user has entered during the ECG transmission process. */
  remarks?: string;

  /** Technical instructions to improve the ECG quality. Given automatically based on the ECG quality and MC input. */
  technicalInstructions?: string;

  /** The status of the Smartheart electrodes during the ECG transmission */
  electrodesStatus?: ElectrodesStatus;

  /** The ECG measurements values. May be confirmed (done and saved by the MC, when there's a service) or unconfirmed (automatic, done
using an algorithm). */
  measurements?: EcgMeasurements;

  /** The list of ECG findings, with their respective categories. Relevant for professional users with service only. */
  findings?: EcgFinding[];

  /** The symptos the user has selected during the ECG transmissionn process. */
  symptoms?: Symptom[];

  /** The 12 leads graph png images encoded to a base64 string. */
  leads?: EcgLeads;

  /**  */
  comments?: EcgComment[];

  /**  */
  interpretation?: EcgInterpretation;
}

export interface ElectrodesStatus {
  /**  */
  ll?: boolean;

  /**  */
  la?: boolean;

  /**  */
  ra?: boolean;

  /**  */
  v1?: boolean;

  /**  */
  v2?: boolean;

  /**  */
  v3?: boolean;

  /**  */
  v4?: boolean;

  /**  */
  v5?: boolean;

  /**  */
  v6?: boolean;
}

export interface EcgMeasurements {
  /** Indicates whether the measurements are unconfirmed (automatic) or not */
  isUnconfirmed?: boolean;

  /** Indicates whether the measurements values units are in ms (or seconds). 
Note: The Rate (pulse) measurement is always in bpm */
  isMs?: boolean;

  /** The rate (pulse) ECG measurement */
  rate?: string;

  /** The PR ECG measurement */
  pr?: string;

  /** The Qrs ECG measurement */
  qrs?: string;

  /** The QT ECG measurement */
  qt?: string;

  /** The QTcB ECG measurement */
  qtcb?: string;

  /** The QTcF ECG measurement */
  qtcf?: string;
}

export interface EcgFinding {
  /** The Category of the finding */
  category?: string;

  /** The name of the finding */
  finding?: string;
}

export interface Symptom {
  /** The unique id of the symptom */
  symptomsId?: string;

  /** The descriptive name of the symptom */
  symptomName?: string;
}

export interface EcgLeads {
  /**  */
  rhythm?: string;

  /**  */
  l1?: string;

  /**  */
  l2?: string;

  /**  */
  l3?: string;

  /**  */
  avr?: string;

  /**  */
  avl?: string;

  /**  */
  avf?: string;

  /**  */
  v1?: string;

  /**  */
  v2?: string;

  /**  */
  v3?: string;

  /**  */
  v4?: string;

  /**  */
  v5?: string;

  /**  */
  v6?: string;
}

export interface EcgComment {
  /** The text of the comment */
  text?: string;

  /** The comment date and time */
  commentDate?: Date;

  /** The name of the commenter */
  commenter?: string;
}

export interface EcgInterpretation {
  /** The name of the interpreter who wrote the interpretation */
  interpreter?: string;

  /** The interpretation text */
  text?: string;

  /** The interpretation (local) date/time */
  interpretationDate?: Date;

  /** Indicates whether to send an email notification about the interpretation to the user or not */
  notifyUser?: boolean;
}

export interface EcgPortalInterpretation {
  /** The interpretation text */
  text?: string;

  /** The interpretation (local) date/time */
  interpretationDate?: Date;

  /** Indicates whether to send an email notification about the interpretation to the user or not */
  notifyUser?: boolean;
}

export interface LoginData {
  /**  */
  email?: string;

  /**  */
  password?: string;
}

export interface ShApiResponse_FullSmartheartUser {
  /**  */
  error?: ApiError;

  /**  */
  response?: FullSmartheartUser;
}

export interface FullSmartheartUser {
  /** The period to wait when a Smartheart device is rejected by the user until it will try to connect again */
  smartheartRejectionPeriod?: number;

  /** Indicates whether the user can choose to skip the guidance screen */
  allowSkipGuidanceScreen?: boolean;

  /** Indicates whether the user password has expired */
  passwordExpired?: boolean;

  /** The ECG transmission channel times that should be passed to the Smartheart device */
  smartheartChannelsTimes?: number[];

  /** The ECG sampling rate that should be passed to the Smartheart device */
  smartheartSamplingRate?: number;

  /** The ECG Preview channel times that should be passed to the Smartheart device */
  smartheartPreviewChannelsTimes?: number[];

  /** The ECG Preview sampling rate that should be passed to the Smartheart device */
  smartheartPreviewSamplingRate?: number;

  /** The baseline timeout value that should be passed to the Smarthear device */
  smartheartBaselineTimeout?: number;

  /** The Preview threshold */
  smartheartPreviewThreshold?: number;

  /** Indicates whether the user should skip the symptoms screen */
  skipSymptoms?: boolean;

  /**  */
  backendUrl?: string;

  /** The total number of unviewed ECGs of the user */
  unviewedEcgs?: number;

  /** Indicates whether the user can add new profiles */
  canAddProfiles?: boolean;

  /** Indicates whether the user can delete existing profiles */
  canDeleteProfiles?: boolean;

  /** Indicates whether the Smartheart Preview is enabled for the user */
  smartheartPreviewEnabled?: boolean;

  /** Indicates whether the user is a professional user or not */
  isProfessionalUser?: boolean;

  /** The maximum number of profiles the user can add. Infinite if null. */
  maxProfiles?: number;

  /** Indicates whether the QtcF values should be displayed. Else, the QtcB value should be displayed. */
  useQtcF?: boolean;

  /** Indicates whether to show the automatic measurements of an ECG to the user or not. */
  showAutoMeasurements?: boolean;

  /** Indicates whether the user can create users or not. */
  canCreateUsers?: boolean;

  /** The organization the user belongs to. Null if the user doesn't belong to an organization. */
  organization?: Organization;

  /** Indicates whether the user is an organization admin user. */
  isOrganizationAdmin?: boolean;

  /** Indicates whether the user can create admin users. */
  canCreateAdminUsers?: boolean;

  /** Indicates whether the user can create professional users */
  canCreateProfessionalUsers?: boolean;

  /** The unique identifier of the user */
  id?: string;

  /** The first name of the user */
  firstName?: string;

  /** The last name of the user */
  lastName?: string;

  /** The salutation of the user */
  salutation?: string;

  /** The user name (email) of the user */
  userName?: string;

  /** The password of the user */
  password?: string;

  /** Indicates whether the user has ECG interpretation service or not */
  withService?: boolean;

  /** Indicates whether the user is enabled or not.
When creating an organization user, if set to false the created user is disabled and the proper 
activation process will be initialized. */
  enabled?: boolean;
}

export interface Organization {
  /** Thd unique identifier of the organization */
  organizationId?: number;

  /** The display name of the organization */
  organizationName?: string;
}

export interface ShApiResponse_IEnumerable_SmartheartUser {
  /**  */
  error?: ApiError;

  /**  */
  response?: SmartheartUser[];
}

export interface SmartheartUser {
  /** The unique identifier of the user */
  id?: string;

  /** The first name of the user */
  firstName?: string;

  /** The last name of the user */
  lastName?: string;

  /** The salutation of the user */
  salutation?: string;

  /** The user name (email) of the user */
  userName?: string;

  /** The password of the user */
  password?: string;

  /** Indicates whether the user has ECG interpretation service or not */
  withService?: boolean;

  /** Indicates whether the user is enabled or not.
When creating an organization user, if set to false the created user is disabled and the proper 
activation process will be initialized. */
  enabled?: boolean;
}

export interface BasicSmartheartUser {
  /** Indicates whether the user can add new profiles */
  canAddProfiles?: boolean;

  /** Indicates whether the user can delete existing profiles */
  canDeleteProfiles?: boolean;

  /** Indicates whether the Smartheart Preview is enabled for the user */
  smartheartPreviewEnabled?: boolean;

  /** Indicates whether the user is a professional user or not */
  isProfessionalUser?: boolean;

  /** The maximum number of profiles the user can add. Infinite if null. */
  maxProfiles?: number;

  /** Indicates whether the QtcF values should be displayed. Else, the QtcB value should be displayed. */
  useQtcF?: boolean;

  /** Indicates whether to show the automatic measurements of an ECG to the user or not. */
  showAutoMeasurements?: boolean;

  /** Indicates whether the user can create users or not. */
  canCreateUsers?: boolean;

  /** The organization the user belongs to. Null if the user doesn't belong to an organization. */
  organization?: Organization;

  /** Indicates whether the user is an organization admin user. */
  isOrganizationAdmin?: boolean;

  /** Indicates whether the user can create admin users. */
  canCreateAdminUsers?: boolean;

  /** Indicates whether the user can create professional users */
  canCreateProfessionalUsers?: boolean;

  /** The unique identifier of the user */
  id?: string;

  /** The first name of the user */
  firstName?: string;

  /** The last name of the user */
  lastName?: string;

  /** The salutation of the user */
  salutation?: string;

  /** The user name (email) of the user */
  userName?: string;

  /** The password of the user */
  password?: string;

  /** Indicates whether the user has ECG interpretation service or not */
  withService?: boolean;

  /** Indicates whether the user is enabled or not.
When creating an organization user, if set to false the created user is disabled and the proper 
activation process will be initialized. */
  enabled?: boolean;
}

export interface ShApiResponse_BasicSmartheartUser {
  /**  */
  error?: ApiError;

  /**  */
  response?: BasicSmartheartUser;
}

export interface UserActivationData {
  /** The activation token of the user to be activated */
  activationToken?: string;

  /** The password to be set for the activated user */
  password?: string;
}

export interface ShApiResponse_List_PortalPermission {
  /**  */
  error?: ApiError;

  /**  */
  response?: PortalPermission[];
}

export interface PortalPermission {
  /** The unique user id of the user */
  userId?: string;

  /** The first name of the user */
  firstName?: string;

  /** The last name of the user */
  lastName?: string;

  /** The date and time of the last ECG the user has done */
  lastEcgDate?: Date;

  /** The number of the user's unviewed interpretation in the portal */
  unviewedInterpretations?: number;

  /** The number of the user's unviewed ECGs in the portal */
  unviewedEcgsInPortal?: number;

  /** The list of profiles of the user */
  profiles?: PortalProfile[];
}

export interface PortalProfile {
  /** Number of the profile's unviewed interpretation in the protal */
  unviewedInterpretations?: number;

  /** Number of the profile's unviewed ECGs in the protal */
  unviewedEcgsInPortal?: number;

  /** The date/time of the last ECG of the profile */
  lastEcgDate?: Date;

  /** The profile's unique identifier */
  profileId?: string;

  /** The profiles first name */
  firstName?: string;

  /** The profile's last name */
  lastName?: string;

  /** The profile's gender (Male/Female) */
  gender?: string;

  /** The profile's belt size (S/M/L/XL) */
  beltSize?: string;

  /** The profile's free-text reference */
  reference?: string;

  /** Indicates whether the profile has pacemaker installed */
  pacemaker?: boolean;

  /** The birth date of the profile */
  birthDate?: string;
}

export interface ShApiResponse_List_Ecg {
  /**  */
  error?: ApiError;

  /**  */
  response?: Ecg[];
}

export interface Ecg {
  /** The ECG user unique identifier */
  userId?: string;

  /** The ECG user first bane */
  firstName?: string;

  /** The ECG user last name */
  lastName?: string;

  /** The organization details of the ECG user */
  organization?: Organization;

  /** The ECG profile unique identifier */
  profileId?: string;

  /** The ECG profile first name */
  profileFirstName?: string;

  /** The ECG profile last name */
  profileLastName?: string;

  /** The ECG unique identifier */
  ecgId?: string;

  /** The ECG date/time */
  ecgDateTime?: Date;

  /** Indicates whether the ECG is yet unviewed in the portal */
  unviewedInPortal?: boolean;

  /** Indicates whether the ECG interpretation is yet unviewed in the portal */
  interpretationUnviewedInPortal?: boolean;
}

export interface Recipient {
  /**  */
  email?: string;
}

export type IApiErrorErrorCode = 400 | 401 | 500;
