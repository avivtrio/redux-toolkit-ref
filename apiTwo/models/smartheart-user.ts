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
 * @interface SmartheartUser
 */
export interface SmartheartUser {
    /**
     * The unique identifier of the user
     * @type {string}
     * @memberof SmartheartUser
     */
    id?: string;
    /**
     * The first name of the user
     * @type {string}
     * @memberof SmartheartUser
     */
    firstName?: string;
    /**
     * The last name of the user
     * @type {string}
     * @memberof SmartheartUser
     */
    lastName?: string;
    /**
     * The salutation of the user
     * @type {string}
     * @memberof SmartheartUser
     */
    salutation?: string;
    /**
     * The user name (email) of the user
     * @type {string}
     * @memberof SmartheartUser
     */
    userName?: string;
    /**
     * The password of the user
     * @type {string}
     * @memberof SmartheartUser
     */
    password?: string;
    /**
     * Indicates whether the user has ECG interpretation service or not
     * @type {boolean}
     * @memberof SmartheartUser
     */
    withService?: boolean;
    /**
     * Indicates whether the user is enabled or not.  When creating an organization user, if set to false the created user is disabled and the proper   activation process will be initialized.
     * @type {boolean}
     * @memberof SmartheartUser
     */
    enabled?: boolean;
}


