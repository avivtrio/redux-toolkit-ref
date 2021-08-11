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
 * @interface Ecg
 */
export interface Ecg {
    /**
     * The ECG user unique identifier
     * @type {string}
     * @memberof Ecg
     */
    userId?: string;
    /**
     * The ECG user first bane
     * @type {string}
     * @memberof Ecg
     */
    firstName?: string;
    /**
     * The ECG user last name
     * @type {string}
     * @memberof Ecg
     */
    lastName?: string;
    /**
     * 
     * @type {Organization}
     * @memberof Ecg
     */
    organization?: Organization;
    /**
     * The ECG profile unique identifier
     * @type {string}
     * @memberof Ecg
     */
    profileId?: string;
    /**
     * The ECG profile first name
     * @type {string}
     * @memberof Ecg
     */
    profileFirstName?: string;
    /**
     * The ECG profile last name
     * @type {string}
     * @memberof Ecg
     */
    profileLastName?: string;
    /**
     * The ECG unique identifier
     * @type {string}
     * @memberof Ecg
     */
    ecgId?: string;
    /**
     * The ECG date/time
     * @type {string}
     * @memberof Ecg
     */
    ecgDateTime?: string;
    /**
     * Indicates whether the ECG is yet unviewed in the portal
     * @type {boolean}
     * @memberof Ecg
     */
    unviewedInPortal?: boolean;
    /**
     * Indicates whether the ECG interpretation is yet unviewed in the portal
     * @type {boolean}
     * @memberof Ecg
     */
    interpretationUnviewedInPortal?: boolean;
}


