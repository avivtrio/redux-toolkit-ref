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
import { FullSmartheartUser } from './full-smartheart-user';

/**
 * 
 * @export
 * @interface ShApiResponseFullSmartheartUser
 */
export interface ShApiResponseFullSmartheartUser {
    /**
     * 
     * @type {ApiError}
     * @memberof ShApiResponseFullSmartheartUser
     */
    error?: ApiError;
    /**
     * 
     * @type {FullSmartheartUser}
     * @memberof ShApiResponseFullSmartheartUser
     */
    response?: FullSmartheartUser;
}

