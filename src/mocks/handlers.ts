import authApi from './api/authApi';
import pageApi from './api/pagetApi';

export const handlers = [...authApi, ...pageApi];
