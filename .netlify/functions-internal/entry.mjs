import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_c8a08173.mjs';

const _page0  = () => import('./chunks/generic_d4596cbe.mjs');
const _page1  = () => import('./chunks/index_fd7b29fd.mjs');
const _page2  = () => import('./chunks/index_95ff6ad7.mjs');
const _page3  = () => import('./chunks/index_9493118d.mjs');
const _page4  = () => import('./chunks/index_ba943dfc.mjs');
const _page5  = () => import('./chunks/index_6dea5582.mjs');
const _page6  = () => import('./chunks/_id__e7d96c3f.mjs');
const _page7  = () => import('./chunks/_id__dc411520.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/fragments/PersonDetails/index.astro", _page2],["src/pages/fragments/AnimeDetails/index.astro", _page3],["src/pages/fragments/PersonList/index.astro", _page4],["src/pages/fragments/AnimeList/index.astro", _page5],["src/pages/animes/[id].astro", _page6],["src/pages/people/[id].astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
