import { disableLog } from '../util';

export const DEBUG = process.env.NODE_ENV === 'development';

disableLog();
