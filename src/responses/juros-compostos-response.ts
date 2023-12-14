import { Response } from 'express';
import PeriodType from '../enums/period-type';

export interface JurosCompostosResponseBody {
    period: number,
    periodType: PeriodType,
    profitability: number,
    profitabilityType: PeriodType,
    realProfitability: number,
    initialValue: number,
    finalValue: number
}

export interface JurosCompostosResponse extends Response<JurosCompostosResponseBody> {

}