import { PrismaClient } from '@prisma/client';

export const get = async () => {
	const prisma = new PrismaClient();

	let response = {};
	try {
		prisma.$connect();
		response.status = 200;
		response.message = 'success';
	} catch (error) {
		response.status = 400;
		response.message = 'error';
		response.errorMessage = error;
	}
	return {
		body: { response }
	};
};
