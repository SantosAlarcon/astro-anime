import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_be958e17.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_9697a26d.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_5a0e9e4d.mjs');
const _page1  = () => import('./chunks/index_e221611c.mjs');
const _page2  = () => import('./chunks/index_46ac0835.mjs');
const _page3  = () => import('./chunks/index_d9059885.mjs');
const _page4  = () => import('./chunks/index_9b31b87b.mjs');
const _page5  = () => import('./chunks/index_8d8d9ae8.mjs');
const _page6  = () => import('./chunks/_id__c97a3348.mjs');
const _page7  = () => import('./chunks/_id__b353a0b5.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/fragments/PersonDetails/index.astro", _page2],["src/pages/fragments/AnimeDetails/index.astro", _page3],["src/pages/fragments/PersonList/index.astro", _page4],["src/pages/fragments/AnimeList/index.astro", _page5],["src/pages/animes/[id].astro", _page6],["src/pages/people/[id].astro", _page7]]);
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
