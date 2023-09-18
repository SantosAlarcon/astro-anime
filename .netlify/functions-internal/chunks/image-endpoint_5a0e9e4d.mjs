export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/image-endpoint_b4b7b481.mjs').then(n => n.i);

export { page };
