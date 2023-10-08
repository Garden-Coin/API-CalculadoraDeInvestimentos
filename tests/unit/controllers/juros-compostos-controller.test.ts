import JurosCompostosController from '@src/controllers/juros-compostos-controller';
import { JurosCompostosRequest } from '@src/requests/juros-compostos-request';
import responseFactory from '../factories/express/response-factory';
import jurosCompostosRequestBodyFactory from '../factories/requests/juros-compostos-request-body-factory';

describe('JurosCompostosController', () => {
    describe('calcular', () => {
        it('should return 200 status code', () => {
            const request = {
                body: jurosCompostosRequestBodyFactory()
            } as JurosCompostosRequest
            const response = responseFactory();
            jest.spyOn(response, "status");

            JurosCompostosController.calcular(request, response);

            expect(response.status).toBeCalledWith(200);
        });
        it('should return the same values from JurosCompostosRequest plus finalValue', () => {
            const requestBody = jurosCompostosRequestBodyFactory();
            const request = {
                body: requestBody
            } as JurosCompostosRequest

            const response = responseFactory();
            jest.spyOn(response, "json");
            const expectedResponseJson = {
                ...requestBody,
                realProfitability: requestBody.profitability,
                finalValue: requestBody.initialValue + (requestBody.initialValue * requestBody.profitability)
            };

            JurosCompostosController.calcular(request, response);

            expect(response.json).toBeCalledWith(expectedResponseJson);
        });
    });
})