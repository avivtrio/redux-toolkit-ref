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
import { Profile } from './profile';

/**
 * 
 * @export
 * @interface ShApiResponseProfile
 */
export interface ShApiResponseProfile {
    /**
     * 
     * @type {ApiError}
     * @memberof ShApiResponseProfile
     */
    error?: ApiError;
    /**
     * 
     * @type {Profile}
     * @memberof ShApiResponseProfile
     */
    response?: Profile;
}

