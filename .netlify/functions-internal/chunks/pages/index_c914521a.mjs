import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, i as renderTransition, d as renderComponent, s as spreadAttributes, u as unescapeHTML, F as Fragment } from '../astro_9697a26d.mjs';
import 'clsx';
import { $ as $$Layout } from './_id__1084fa28.mjs';
/* empty css                           *//* empty css                           *//* empty css                           */import { optimize } from 'svgo';
/* empty css                           *//* empty css                           */
const $$Astro$a = createAstro();
const $$AnimeItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AnimeItem;
  const { anime } = Astro2.props;
  const { mal_id, title, images, year, studios, score } = anime;
  return renderTemplate`${maybeRenderHead()}<div id="anime-item" data-astro-cid-sqjv376q><a${addAttribute(`/animes/${mal_id}`, "href")}${addAttribute(title, "title")} data-astro-cid-sqjv376q><img${addAttribute(images.webp.image_url, "src")}${addAttribute(title, "alt")} data-astro-cid-sqjv376q${addAttribute(renderTransition($$result, "lanmdkwg", "", `poster-${mal_id}`), "data-astro-transition-scope")}></a><h3 data-astro-cid-sqjv376q>${title}</h3><h6 data-astro-cid-sqjv376q>${year} - ${studios[0].name}</h6><div class="score" data-astro-cid-sqjv376q>
⭐ ${score}</div></div>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/components/AnimeItem.astro", "self");

const $$Astro$9 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$4;
  const response = await fetch("https://api.jikan.moe/v4/seasons/now");
  const jsonData = await response.json();
  const airing_animes = jsonData.data;
  return renderTemplate`${maybeRenderHead()}<div id="lista-animes" data-astro-cid-j3jjp5bb>${airing_animes.map((anime) => renderTemplate`${renderComponent($$result, "AnimeItem", $$AnimeItem, { "anime": anime, "data-astro-cid-j3jjp5bb": true })}`)}</div>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/AnimeList/index.astro", void 0);

const $$file$4 = "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/AnimeList/index.astro";
const $$url$4 = "/fragments/AnimeList";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro Anime - Airing Animes" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AnimeList", $$Index$4, {})}` })}`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/index.astro", void 0);

const $$file$3 = "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/index.astro";
const $$url$3 = "";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const invertJapanesePerson = async (name) => {
  const nameArray = name.split(",");
  const newNameArray = [];
  newNameArray.push(nameArray[1]);
  newNameArray.push(nameArray[0]);
  return newNameArray.join(" ");
};

const $$Astro$7 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { person_info } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-6x7l5mp2><main class="person-info" data-astro-cid-6x7l5mp2><aside data-astro-cid-6x7l5mp2><img${addAttribute(person_info.images.jpg.image_url, "src")} data-astro-cid-6x7l5mp2${addAttribute(renderTransition($$result, "bdq5bxx2", "", `people-${person_info.mal_id}`), "data-astro-transition-scope")}></aside><article data-astro-cid-6x7l5mp2${addAttribute(renderTransition($$result, "2lwbv6ua", "slide", ""), "data-astro-transition-scope")}><h1 data-astro-cid-6x7l5mp2>${person_info.name} - (${person_info.family_name})</h1><p data-astro-cid-6x7l5mp2>${person_info.about}</p></article></main><main class="roles" data-astro-cid-6x7l5mp2${addAttribute(renderTransition($$result, "frtudtfy", "slide", ""), "data-astro-transition-scope")}><h2 data-astro-cid-6x7l5mp2>Roles</h2><ul data-astro-cid-6x7l5mp2>${person_info.voices.map((role) => renderTemplate`<li data-astro-cid-6x7l5mp2><b data-astro-cid-6x7l5mp2>${invertJapanesePerson(role.character.name)}</b> in
<a${addAttribute(`/animes/${role.anime.mal_id}`, "href")} data-astro-cid-6x7l5mp2><b data-astro-cid-6x7l5mp2>${role.anime.title}</b></a></li>`)}</ul></main></section>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/PersonDetails/index.astro", "self");

const $$file$2 = "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/PersonDetails/index.astro";
const $$url$2 = "/fragments/PersonDetails";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$6 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$5 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$4 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$3 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { anime } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="anime-info" data-astro-cid-t2cc6qv5><aside data-astro-cid-t2cc6qv5><img${addAttribute(anime.images.webp.large_image_url, "src")} data-astro-cid-t2cc6qv5${addAttribute(renderTransition($$result, "6ldh2bwz", "", `poster-${anime.mal_id}`), "data-astro-transition-scope")}></aside><article data-astro-cid-t2cc6qv5${addAttribute(renderTransition($$result, "q6etrjvo", "slide", ""), "data-astro-transition-scope")}><h1 data-astro-cid-t2cc6qv5>${anime.title}</h1><p data-astro-cid-t2cc6qv5><b data-astro-cid-t2cc6qv5>Studio: </b>${anime.studios[0].name}</p><p data-astro-cid-t2cc6qv5><b data-astro-cid-t2cc6qv5>Year: </b>${anime.year}</p><p data-astro-cid-t2cc6qv5><b data-astro-cid-t2cc6qv5>Genres: </b>${anime.genres.map((genre) => renderTemplate`<span class="genre" data-astro-cid-t2cc6qv5>${genre.name}</span>`)}</p><p data-astro-cid-t2cc6qv5><b data-astro-cid-t2cc6qv5>Demographics: </b>${anime.demographics[0]?.name}</p><p data-astro-cid-t2cc6qv5><b data-astro-cid-t2cc6qv5>Score: </b>${anime.score}</p><p data-astro-cid-t2cc6qv5><b data-astro-cid-t2cc6qv5>Synopsis: </b>${anime.synopsis}</p><a class="trailer"${addAttribute(anime.trailer.url, "href")} target="_blank" data-astro-cid-t2cc6qv5>${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:play", "data-astro-cid-t2cc6qv5": true })} Trailer
</a></article></main><main class="characters" data-astro-cid-t2cc6qv5${addAttribute(renderTransition($$result, "mlw432tw", "slide", ""), "data-astro-transition-scope")}><h2 data-astro-cid-t2cc6qv5>Seiyuu and characters</h2><!--<PersonList id={anime.mal_id} />--></main>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/AnimeDetails/index.astro", "self");

const $$file$1 = "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/AnimeDetails/index.astro";
const $$url$1 = "/fragments/AnimeDetails";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$CharacterItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CharacterItem;
  const { character } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="character-item"${addAttribute(character.voice_actors[0].person.mal_id, "key")} data-astro-cid-ntfo2cdp><a${addAttribute(`/people/${character.voice_actors[0].person.mal_id}`, "href")} data-astro-cid-ntfo2cdp><img${addAttribute(character.voice_actors[0].person.images.jpg.image_url, "src")} data-astro-cid-ntfo2cdp${addAttribute(renderTransition($$result, "x3uvqmoy", "", `people-${character.voice_actors[0].person.mal_id}`), "data-astro-transition-scope")}></a><span data-astro-cid-ntfo2cdp><b data-astro-cid-ntfo2cdp>${await invertJapanesePerson(character.voice_actors[0].person.name)}</b></span><span data-astro-cid-ntfo2cdp>${await invertJapanesePerson(character.character.name)}</span></div>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/components/CharacterItem.astro", "self");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { id } = Astro2.props;
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
  const jsonData = await response.json();
  const charaList = jsonData.data;
  return renderTemplate`${maybeRenderHead()}<div id="chara" data-astro-cid-56akn22l>${charaList.map((character) => renderTemplate`${renderComponent($$result, "CharacterItem", $$CharacterItem, { "character": character, "data-astro-cid-56akn22l": true })}`)}</div>`;
}, "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/PersonList/index.astro", void 0);

const $$file = "/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/PersonList/index.astro";
const $$url = "/fragments/PersonList";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index$1 as $, $$Index$2 as a, index$3 as b, index$2 as c, index$1 as d, index as e, index$4 as i };
