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


import { IEcgComment } from './iecg-comment';
import { IEcgFinding } from './iecg-finding';
import { IEcgInterpretation } from './iecg-interpretation';
import { IEcgLeads } from './iecg-leads';
import { IEcgMeasurements } from './iecg-measurements';
import { IElectrodesStatus } from './ielectrodes-status';
import { ISymptom } from './isymptom';

/**
 * 
 * @export
 * @interface IEcgData
 */
export interface IEcgData {
    /**
     * The ECG Feedback text. Relevant for non-professional users and in case the ECG is   completely not readable.
     * @type {string}
     * @memberof IEcgData
     */
    recommendations?: string;
    /**
     * The severity of the ECG Recommendation (Feedback). Relevant for non-professional users   and in case the ECG is completely not readable.  Possible values are:    (-1) - The ECG is not readable;    1 - \"green\" severity;   2 - \"yellow\" severity;   3 - \"organe\" severity;   4 - \"red\" severity
     * @type {number}
     * @memberof IEcgData
     */
    severity?: number;
    /**
     * The current status of the ECG transmission.   Possible values are:   0 - The ECG is not readable;   1 - The ECG is only partly ready. Relevant when the user has interpretation service and it was not given yet, but    the ECG graph is already available.   2 - The ECG is ready.
     * @type {number}
     * @memberof IEcgData
     */
    status?: number;
    /**
     * The remarks the user has entered during the ECG transmission process.
     * @type {string}
     * @memberof IEcgData
     */
    remarks?: string;
    /**
     * Technical instructions to improve the ECG quality. Given automatically based on the ECG quality and MC input.
     * @type {string}
     * @memberof IEcgData
     */
    technicalInstructions?: string;
    /**
     * 
     * @type {IElectrodesStatus}
     * @memberof IEcgData
     */
    electrodesStatus?: IElectrodesStatus;
    /**
     * 
     * @type {IEcgMeasurements}
     * @memberof IEcgData
     */
    measurements?: IEcgMeasurements;
    /**
     * The list of ECG findings, with their respective categories. Relevant for professional users with service only.
     * @type {Array<IEcgFinding>}
     * @memberof IEcgData
     */
    findings?: Array<IEcgFinding>;
    /**
     * The symptos the user has selected during the ECG transmissionn process.
     * @type {Array<ISymptom>}
     * @memberof IEcgData
     */
    symptoms?: Array<ISymptom>;
    /**
     * 
     * @type {IEcgLeads}
     * @memberof IEcgData
     */
    leads?: IEcgLeads;
    /**
     * 
     * @type {Array<IEcgComment>}
     * @memberof IEcgData
     */
    comments?: Array<IEcgComment>;
    /**
     * 
     * @type {IEcgInterpretation}
     * @memberof IEcgData
     */
    interpretation?: IEcgInterpretation;
}


