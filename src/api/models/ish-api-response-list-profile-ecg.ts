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


import { IApiError } from './iapi-error';
import { IProfileEcg } from './iprofile-ecg';

/**
 * 
 * @export
 * @interface IShApiResponseListProfileEcg
 */
export interface IShApiResponseListProfileEcg {
    /**
     * 
     * @type {IApiError}
     * @memberof IShApiResponseListProfileEcg
     */
    error?: IApiError;
    /**
     * 
     * @type {Array<IProfileEcg>}
     * @memberof IShApiResponseListProfileEcg
     */
    response?: Array<IProfileEcg>;
}


