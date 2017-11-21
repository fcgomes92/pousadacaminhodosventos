import {disableLog} from '../util';

import RemoteInstance from '../assets/js/directus';

export const DEBUG = process.env.NODE_ENV === 'development';

const DIRECTUS_TOKEN = "AM9Omvb1egkzDCajMpE9CINnhAO3xMS4";
export const DIRECTUS_URL = "https://directus.pousadacaminhodosventos.com";
export const directusClient = new RemoteInstance({url: `${DIRECTUS_URL}/api/1.1/`, accessToken: DIRECTUS_TOKEN});

disableLog();
