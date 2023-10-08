import { Response } from 'express';
import ProfitabilityType from '../enums/profitability-type';

export interface JurosCompostosResponseBody {
    period: number,
    profitability: number,
    realProfitability: number,
    profitabilityType: ProfitabilityType,
    initialValue: number,
    finalValue: number
}

export interface JurosCompostosResponse extends Response<JurosCompostosResponseBody> {

}