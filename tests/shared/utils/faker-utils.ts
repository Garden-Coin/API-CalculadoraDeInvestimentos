import { faker } from '@faker-js/faker';

export function randomFloat(min = 0.0, max = 1.0, precision = 1){
	return faker.number.float({min, max, precision});
}

export function randomInt(min: number, max: number){
	return faker.number.int({min, max});
}