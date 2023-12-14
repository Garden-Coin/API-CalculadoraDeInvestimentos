import PeriodType from '@src/enums/period-type';
import { Request } from 'express';

export interface JurosCompostosRequestBody {
    period: number,
    periodType: PeriodType,
    profitability: number,
    profitabilityType: PeriodType,
    initialValue: number
}

export interface JurosCompostosRequest extends Request{
    body: JurosCompostosRequestBody
}
