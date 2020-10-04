import axios from 'axios';

const BASE_URL = 'https://api.behance.net/v2';
const CLIENT_ID = 'APIKEYHERE';

axios.defaults.mode = 'no-cors';
axios.defaults.headers = {
	'Access-Control-Allow-Origin': '*',
};

export async function getProjects() {
	return await axios.get(`${BASE_URL}/projects`, {
		params: {
			client_id: CLIENT_ID,
		},
	});
}

export default { BehanceClient: { getProjects } };
