import { Response } from 'express';
import ProfitabilityType from '../enums/profitability-type';

export interface JurosCompostosResponseBody {
    period: number,
    periodType: ProfitabilityType,
    profitability: number,
    profitabilityType: ProfitabilityType,
    realProfitability: number,
    initialValue: number,
    finalValue: number
}

export interface JurosCompostosResponse extends Response<JurosCompostosResponseBody> {

}