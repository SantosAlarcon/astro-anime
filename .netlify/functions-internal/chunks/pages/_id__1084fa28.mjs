import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderHead, f as renderSlot } from '../astro_9697a26d.mjs';
import 'clsx';
import { $ as $$Index, a as $$Index$1 } from './index_c914521a.mjs';
/* empty css                          */
const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2><nav data-astro-cid-3ef6ksr2><div class="logo" data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2><img src="/logo.webp" alt="logo" data-astro-cid-3ef6ksr2></a></div><div class="nav-links" data-astro-cid-3ef6ksr2><ul data-astro-cid-3ef6ksr2><li data-astro-cid-3ef6ksr2><a href="" data-astro-cid-3ef6ksr2>Trending anime</a></li><li data-astro-cid-3ef6ksr2><a href="" data-astro-cid-3ef6ksr2>Popular anime</a></li></ul></div><div class="mobile-nav-menu" data-astro-cid-3ef6ksr2><span data-astro-cid-3ef6ksr2></span><div class="mobile-nav-links" data-astro-cid-3ef6ksr2><ul data-astro-cid-3ef6ksr2><li data-astro-cid-3ef6ksr2><a href="" data-astro-cid-3ef6ksr2>Trending anime</a></li><li data-astro-cid-3ef6ksr2><a href="" data-astro-cid-3ef6ksr2>Popular anime</a></li></ul></div></div></nav></header>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte><div data-astro-cid-sz7xmlte>
Made by <a href="https://santos-alarcon.vercel.app" target="_blank" data-astro-cid-sz7xmlte><b data-astro-cid-sz7xmlte>Santos Alarcón</b></a> with 💗 for <b data-astro-cid-sz7xmlte>anime</b> and with <a href="https://astro.build" target="_blank" data-astro-cid-sz7xmlte><img src="/favicon.svg" data-astro-cid-sz7xmlte></a>.
</div></footer>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none" })}${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const json = await response.json();
  const anime_info = json.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Astro Anime - ${anime_info.title}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AnimeDetails", $$Index, { "anime": anime_info })}` })}`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/animes/[id].astro", void 0);

const $$file$1 = "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/animes/[id].astro";
const $$url$1 = "/animes/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const response = await fetch(`https://api.jikan.moe/v4/people/${id}/full`).then((res) => res.json());
  const person_info = await response.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Astro Anime - ${person_info.name}` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PersonDetails", $$Index$1, { "person_info": person_info })}` })}`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/people/[id].astro", void 0);

const $$file = "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/people/[id].astro";
const $$url = "/people/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_$1 as _, _id_ as a };
