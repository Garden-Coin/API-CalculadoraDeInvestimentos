import ProfitabilityType from '@src/enums/profitability-type';
import { Request } from 'express';

interface JurosCompostosRequestBody {
    period: number,
    profitability: number,
    profitabilityType: ProfitabilityType,
    initialValue: number
}

export interface JurosCompostosRequest extends Request{
    body: JurosCompostosRequestBody
}
