import { MercadoPagoConfig, Preference } from 'mercadopago';

import config from '../config.js';
const client = new MercadoPagoConfig({ accessToken: config.MP_ACCESS_TOKEN });

export const preference = new Preference(client);

