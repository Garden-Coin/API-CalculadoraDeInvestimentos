import { describe, it } from 'node:test';

describe(
    "juros compostos request validator",
    {
        concurrency: false,
        skip: false,
        timeout: Infinity,
        todo: true
    },
    ()=>{
        describe(
            "period",
            ()=>{
                it(
                    "should be bigger than zero",
                    ()=>{}
                );
            }
        );
        describe(
            "profitability",
            ()=>{
                it(
                    "should be zero or bigger",
                    ()=>{}
                );
                it(
                    "should be one or smaller",
                    ()=>{}
                );
            }
        );
        describe(
            "profitabilityType",
            ()=>{
                it(
                    "should be an valid ProfitabilityType enum",
                    ()=>{}
                );
            }
        );
        describe(
            "initialValue",
            ()=>{
                it(
                    "should be bigger than zero",
                    ()=>{}
                );
            }
        );
    }
)