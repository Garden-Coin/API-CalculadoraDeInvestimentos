import ProfitabilityType from '@src/enums/profitability-type';
import { Request } from 'express';

export interface JurosCompostosRequestBody {
    period: number,
    periodType: ProfitabilityType,
    profitability: number,
    profitabilityType: ProfitabilityType,
    initialValue: number
}

export interface JurosCompostosRequest extends Request{
    body: JurosCompostosRequestBody
}
