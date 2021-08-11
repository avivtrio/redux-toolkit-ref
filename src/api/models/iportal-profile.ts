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



/**
 * 
 * @export
 * @interface IPortalProfile
 */
export interface IPortalProfile {
    /**
     * Number of the profile\'s unviewed interpretation in the protal
     * @type {number}
     * @memberof IPortalProfile
     */
    unviewedInterpretations?: number;
    /**
     * Number of the profile\'s unviewed ECGs in the protal
     * @type {number}
     * @memberof IPortalProfile
     */
    unviewedEcgsInPortal?: number;
    /**
     * The date/time of the last ECG of the profile
     * @type {string}
     * @memberof IPortalProfile
     */
    lastEcgDate?: string;
    /**
     * The profile\'s unique identifier
     * @type {string}
     * @memberof IPortalProfile
     */
    profileId?: string;
    /**
     * The profiles first name
     * @type {string}
     * @memberof IPortalProfile
     */
    firstName?: string;
    /**
     * The profile\'s last name
     * @type {string}
     * @memberof IPortalProfile
     */
    lastName?: string;
    /**
     * The profile\'s gender (Male/Female)
     * @type {string}
     * @memberof IPortalProfile
     */
    gender?: string;
    /**
     * The profile\'s belt size (S/M/L/XL)
     * @type {string}
     * @memberof IPortalProfile
     */
    beltSize?: string;
    /**
     * The profile\'s free-text reference
     * @type {string}
     * @memberof IPortalProfile
     */
    reference?: string;
    /**
     * Indicates whether the profile has pacemaker installed
     * @type {boolean}
     * @memberof IPortalProfile
     */
    pacemaker?: boolean;
    /**
     * The birth date of the profile
     * @type {string}
     * @memberof IPortalProfile
     */
    birthDate?: string;
}


