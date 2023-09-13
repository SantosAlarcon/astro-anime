import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, g as renderTransition, d as renderComponent } from '../astro_82e5fc2f.mjs';
import 'clsx';
import { $ as $$Layout } from './_id__022510c9.mjs';
/* empty css                           *//* empty css                           */import 'html-escaper';
/* empty css                          */import 'svgo';
/* empty css                          *//* empty css                          */
const $$Astro$2 = createAstro();
const $$AnimeItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AnimeItem;
  const { anime } = Astro2.props;
  const { mal_id, title, images, year, studios, score } = anime;
  return renderTemplate`${maybeRenderHead()}<div id="anime-item"${addAttribute(mal_id, "key")} data-astro-cid-sqjv376q><a${addAttribute(`/animes/${mal_id}`, "href")}${addAttribute(title, "title")} data-astro-cid-sqjv376q><img${addAttribute(images.webp.image_url, "src")}${addAttribute(title, "alt")} data-astro-cid-sqjv376q${addAttribute(renderTransition($$result, "lanmdkwg", "", `poster-${mal_id}`), "data-astro-transition-scope")}></a><h3 data-astro-cid-sqjv376q>${title}</h3><h6 data-astro-cid-sqjv376q>${year} - ${studios[0].name}</h6><div class="score" data-astro-cid-sqjv376q>
⭐ ${score}</div></div>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/components/AnimeItem.astro", "self");

const $$Astro$1 = createAstro();
const $$ListOfAnimes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfAnimes;
  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
  const jsonData = await response.json();
  const airing_animes = jsonData.data;
  return renderTemplate`${maybeRenderHead()}<div id="lista-animes" data-astro-cid-nl4kcljl>${airing_animes.map((anime) => renderTemplate`${renderComponent($$result, "AnimeItem", $$AnimeItem, { "anime": anime, "data-astro-cid-nl4kcljl": true })}`)}</div>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/components/ListOfAnimes.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro Anime", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6>${renderComponent($$result2, "ListOfAnimes", $$ListOfAnimes, { "data-astro-cid-j7pv25f6": true })}</main>` })}`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/pages/index.astro", void 0);

const $$file = "/home/futuzor/Documentos/JS/AstroAnime/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
