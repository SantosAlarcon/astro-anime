export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_bd3821b1.mjs').then(n => n.c);

export { page };
