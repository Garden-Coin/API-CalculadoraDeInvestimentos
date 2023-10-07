import { Response } from 'express';

type ResponseFactoryProps = {
    status?: (code: number) => Response;
    json?: (json: any) => Response;
};

export default function(props?: ResponseFactoryProps){
    const res = { } as Response;

    res.status =  props?.status ?? function(_){ return res; } 
    res.json = props?.json?? function(_){ return res; }
    
    return res;
}