import { server } from './node';
import { worker } from './browser';

async function initMocks() {
  if (typeof window === 'undefined') {
    server.listen();
  } else {
    if (process.env.NEXT_PUBLIC_MOCKING === 'development') {
      worker.start();
    }
  }
}

initMocks();

export {};
