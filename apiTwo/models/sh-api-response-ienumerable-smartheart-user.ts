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


import { ApiError } from './api-error';
import { SmartheartUser } from './smartheart-user';

/**
 * 
 * @export
 * @interface ShApiResponseIEnumerableSmartheartUser
 */
export interface ShApiResponseIEnumerableSmartheartUser {
    /**
     * 
     * @type {ApiError}
     * @memberof ShApiResponseIEnumerableSmartheartUser
     */
    error?: ApiError;
    /**
     * 
     * @type {Array<SmartheartUser>}
     * @memberof ShApiResponseIEnumerableSmartheartUser
     */
    response?: Array<SmartheartUser>;
}

