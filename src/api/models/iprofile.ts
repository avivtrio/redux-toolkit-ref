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
 * @interface IProfile
 */
export interface IProfile {
    /**
     * The profile\'s unique identifier
     * @type {string}
     * @memberof IProfile
     */
    profileId?: string;
    /**
     * The profiles first name
     * @type {string}
     * @memberof IProfile
     */
    firstName?: string;
    /**
     * The profile\'s last name
     * @type {string}
     * @memberof IProfile
     */
    lastName?: string;
    /**
     * The profile\'s gender (Male/Female)
     * @type {string}
     * @memberof IProfile
     */
    gender?: string;
    /**
     * The profile\'s belt size (S/M/L/XL)
     * @type {string}
     * @memberof IProfile
     */
    beltSize?: string;
    /**
     * The profile\'s free-text reference
     * @type {string}
     * @memberof IProfile
     */
    reference?: string;
    /**
     * Indicates whether the profile has pacemaker installed
     * @type {boolean}
     * @memberof IProfile
     */
    pacemaker?: boolean;
    /**
     * The birth date of the profile
     * @type {string}
     * @memberof IProfile
     */
    birthDate?: string;
}


