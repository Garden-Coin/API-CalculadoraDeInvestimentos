import { Response } from 'express';
import ProfitabilityType from '../enums/profitability-type';

interface JurosCompostosResponseBody {
    startDate: Date,
    endDate: Date,
    profitability: number,
    realProfitability: number,
    profitabilityType: ProfitabilityType,
    initialValue: number,
    finalValue: number
}

export interface JurosCompostosResponse extends Response<JurosCompostosResponseBody> {

}