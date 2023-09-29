import { describe, it } from 'node:test';

describe(
    "error handling",
    {
        concurrency: false,
        skip: false,
        timeout: Infinity,
        todo: true
    },
    ()=>{
        describe(
            "validation error",
            ()=>{
                it(
                    "should return validation errors",
                    ()=>{
        
                    }
                );
                it(
                    "should return http 404 not found",
                    ()=>{
        
                    }
                );
            }
        );
        describe(
            "unmapped error",
            ()=>{
                it(
                    "should return only the error message",
                    ()=>{
        
                    }
                );
                it(
                    "should return http 500 internal error",
                    ()=>{
        
                    }
                );
            }
        );
    }
);