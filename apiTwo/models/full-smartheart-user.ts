/* tslint:disable */
/* eslint-disable */
/**
 * Smartheart Rest API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Organization } from './organization';

/**
 * 
 * @export
 * @interface FullSmartheartUser
 */
export interface FullSmartheartUser {
    /**
     * The period to wait when a Smartheart device is rejected by the user until it will try to connect again
     * @type {number}
     * @memberof FullSmartheartUser
     */
    smartheartRejectionPeriod?: number;
    /**
     * Indicates whether the user can choose to skip the guidance screen
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    allowSkipGuidanceScreen?: boolean;
    /**
     * Indicates whether the user password has expired
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    passwordExpired?: boolean;
    /**
     * The ECG transmission channel times that should be passed to the Smartheart device
     * @type {Array<number>}
     * @memberof FullSmartheartUser
     */
    smartheartChannelsTimes?: Array<number>;
    /**
     * The ECG sampling rate that should be passed to the Smartheart device
     * @type {number}
     * @memberof FullSmartheartUser
     */
    smartheartSamplingRate?: number;
    /**
     * The ECG Preview channel times that should be passed to the Smartheart device
     * @type {Array<number>}
     * @memberof FullSmartheartUser
     */
    smartheartPreviewChannelsTimes?: Array<number>;
    /**
     * The ECG Preview sampling rate that should be passed to the Smartheart device
     * @type {number}
     * @memberof FullSmartheartUser
     */
    smartheartPreviewSamplingRate?: number;
    /**
     * The baseline timeout value that should be passed to the Smarthear device
     * @type {number}
     * @memberof FullSmartheartUser
     */
    smartheartBaselineTimeout?: number;
    /**
     * The Preview threshold
     * @type {number}
     * @memberof FullSmartheartUser
     */
    smartheartPreviewThreshold?: number;
    /**
     * Indicates whether the user should skip the symptoms screen
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    skipSymptoms?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FullSmartheartUser
     */
    backendUrl?: string;
    /**
     * The total number of unviewed ECGs of the user
     * @type {number}
     * @memberof FullSmartheartUser
     */
    unviewedEcgs?: number;
    /**
     * Indicates whether the user can add new profiles
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    canAddProfiles?: boolean;
    /**
     * Indicates whether the user can delete existing profiles
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    canDeleteProfiles?: boolean;
    /**
     * Indicates whether the Smartheart Preview is enabled for the user
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    smartheartPreviewEnabled?: boolean;
    /**
     * Indicates whether the user is a professional user or not
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    isProfessionalUser?: boolean;
    /**
     * The maximum number of profiles the user can add. Infinite if null.
     * @type {number}
     * @memberof FullSmartheartUser
     */
    maxProfiles?: number;
    /**
     * Indicates whether the QtcF values should be displayed. Else, the QtcB value should be displayed.
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    useQtcF?: boolean;
    /**
     * Indicates whether to show the automatic measurements of an ECG to the user or not.
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    showAutoMeasurements?: boolean;
    /**
     * Indicates whether the user can create users or not.
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    canCreateUsers?: boolean;
    /**
     * 
     * @type {Organization}
     * @memberof FullSmartheartUser
     */
    organization?: Organization;
    /**
     * Indicates whether the user is an organization admin user.
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    isOrganizationAdmin?: boolean;
    /**
     * Indicates whether the user can create admin users.
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    canCreateAdminUsers?: boolean;
    /**
     * Indicates whether the user can create professional users
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    canCreateProfessionalUsers?: boolean;
    /**
     * The unique identifier of the user
     * @type {string}
     * @memberof FullSmartheartUser
     */
    id?: string;
    /**
     * The first name of the user
     * @type {string}
     * @memberof FullSmartheartUser
     */
    firstName?: string;
    /**
     * The last name of the user
     * @type {string}
     * @memberof FullSmartheartUser
     */
    lastName?: string;
    /**
     * The salutation of the user
     * @type {string}
     * @memberof FullSmartheartUser
     */
    salutation?: string;
    /**
     * The user name (email) of the user
     * @type {string}
     * @memberof FullSmartheartUser
     */
    userName?: string;
    /**
     * The password of the user
     * @type {string}
     * @memberof FullSmartheartUser
     */
    password?: string;
    /**
     * Indicates whether the user has ECG interpretation service or not
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    withService?: boolean;
    /**
     * Indicates whether the user is enabled or not.  When creating an organization user, if set to false the created user is disabled and the proper   activation process will be initialized.
     * @type {boolean}
     * @memberof FullSmartheartUser
     */
    enabled?: boolean;
}

