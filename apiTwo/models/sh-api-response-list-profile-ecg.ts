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
import { ProfileEcg } from './profile-ecg';

/**
 * 
 * @export
 * @interface ShApiResponseListProfileEcg
 */
export interface ShApiResponseListProfileEcg {
    /**
     * 
     * @type {ApiError}
     * @memberof ShApiResponseListProfileEcg
     */
    error?: ApiError;
    /**
     * 
     * @type {Array<ProfileEcg>}
     * @memberof ShApiResponseListProfileEcg
     */
    response?: Array<ProfileEcg>;
}


