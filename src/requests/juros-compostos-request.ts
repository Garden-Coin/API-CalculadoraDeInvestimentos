import ProfitabilityType from '../enums/profitability-type';
import { Request } from 'express';

interface JurosCompostosRequestBody {
    startDate: Date,
    endDate: Date,
    profitability: number,
    profitabilityType: ProfitabilityType,
    initialValue: number
}

export interface JurosCompostosRequest extends Request{
    body: JurosCompostosRequestBody
}
