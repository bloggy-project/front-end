import authApi from './api/authApi';
import pageApi from './api/pageApi';

export const handlers = [...authApi, ...pageApi];
