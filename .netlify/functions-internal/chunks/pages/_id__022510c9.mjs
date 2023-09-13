import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderHead, f as renderSlot, g as renderTransition, s as spreadAttributes, u as unescapeHTML, F as Fragment } from '../astro_82e5fc2f.mjs';
import 'clsx';
/* empty css                          *//* empty css                           */import { optimize } from 'svgo';
/* empty css                          *//* empty css                          */
const $$Astro$b = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2><nav data-astro-cid-3ef6ksr2><div class="logo" data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2><img src="/logo.webp" alt="logo" data-astro-cid-3ef6ksr2></a></div><div class="nav-links" data-astro-cid-3ef6ksr2><ul data-astro-cid-3ef6ksr2><li data-astro-cid-3ef6ksr2><a href="" data-astro-cid-3ef6ksr2>Trending anime</a></li><li data-astro-cid-3ef6ksr2><a href="" data-astro-cid-3ef6ksr2>Popular anime</a></li></ul></div><div class="mobile-nav-menu" data-astro-cid-3ef6ksr2><span data-astro-cid-3ef6ksr2></span><div class="mobile-nav-links" data-astro-cid-3ef6ksr2><ul data-astro-cid-3ef6ksr2><li data-astro-cid-3ef6ksr2><a href="" data-astro-cid-3ef6ksr2>Trending anime</a></li><li data-astro-cid-3ef6ksr2><a href="" data-astro-cid-3ef6ksr2>Popular anime</a></li></ul></div></div></nav></header>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/components/Header.astro", void 0);

const $$Astro$9 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte><div data-astro-cid-sz7xmlte>
Made by <a href="https://santos-alarcon.vercel.app" target="_blank" data-astro-cid-sz7xmlte><b data-astro-cid-sz7xmlte>Santos Alarcón</b></a> with 💗 for <b data-astro-cid-sz7xmlte>anime</b> and with <a href="https://astro.build" target="_blank" data-astro-cid-sz7xmlte><img src="/favicon.svg" data-astro-cid-sz7xmlte></a>.
</div></footer>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/components/Footer.astro", void 0);

const $$Astro$8 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none" })}${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/layouts/Layout.astro", void 0);

const invertJapanesePerson = (name) => {
  const nameArray = name.split(",");
  const newNameArray = [];
  newNameArray.push(nameArray[1]);
  newNameArray.push(nameArray[0]);
  return newNameArray.join(" ");
};

const $$Astro$7 = createAstro();
const $$CharacterItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CharacterItem;
  const { character } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="character-item"${addAttribute(character.voice_actors[0].person.mal_id, "key")} data-astro-cid-ntfo2cdp><a${addAttribute(`/people/${character.voice_actors[0].person.mal_id}`, "href")} data-astro-cid-ntfo2cdp><img${addAttribute(character.voice_actors[0].person.images.jpg.image_url, "src")} data-astro-cid-ntfo2cdp${addAttribute(renderTransition($$result, "x3uvqmoy", "", `people-${character.voice_actors[0].person.mal_id}`), "data-astro-transition-scope")}></a><span data-astro-cid-ntfo2cdp><b data-astro-cid-ntfo2cdp>${invertJapanesePerson(character.voice_actors[0].person.name)}</b></span><span data-astro-cid-ntfo2cdp>${invertJapanesePerson(character.character.name)}</span></div>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/components/CharacterItem.astro", "self");

const $$Astro$6 = createAstro();
const $$ListOfCharacters = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ListOfCharacters;
  const { id } = Astro2.props;
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
  const jsonData = await response.json();
  const charaList = jsonData.data;
  return renderTemplate`${maybeRenderHead()}<div id="chara" data-astro-cid-gd2nxwai>${charaList.map((character) => renderTemplate`${renderComponent($$result, "CharacterItem", $$CharacterItem, { "character": character, "data-astro-cid-gd2nxwai": true })}`)}</div>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/components/ListOfCharacters.astro", void 0);

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

const $$Astro$5 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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
}, "/home/futuzor/Documentos/JS/AstroAnime/node_modules/astro-icon/lib/Icon.astro", void 0);

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

const $$Astro$4 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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
}, "/home/futuzor/Documentos/JS/AstroAnime/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$3 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/home/futuzor/Documentos/JS/AstroAnime/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/home/futuzor/Documentos/JS/AstroAnime/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`).then((res) => res.json());
  const anime_info = await response.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Astro Anime - ${anime_info.title}`, "data-astro-cid-hx56qnhs": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="anime-info" data-astro-cid-hx56qnhs><aside data-astro-cid-hx56qnhs><img${addAttribute(anime_info.images.webp.large_image_url, "src")} data-astro-cid-hx56qnhs${addAttribute(renderTransition($$result2, "njbu42ud", "", `poster-${anime_info.mal_id}`), "data-astro-transition-scope")}></aside><article data-astro-cid-hx56qnhs${addAttribute(renderTransition($$result2, "e2wm2nk5", "slide", ""), "data-astro-transition-scope")}><h1 data-astro-cid-hx56qnhs>${anime_info.title}</h1><p data-astro-cid-hx56qnhs><b data-astro-cid-hx56qnhs>Studio: </b>${anime_info.studios[0].name}</p><p data-astro-cid-hx56qnhs><b data-astro-cid-hx56qnhs>Year: </b>${anime_info.year}</p><p data-astro-cid-hx56qnhs><b data-astro-cid-hx56qnhs>Genres: </b>${anime_info.genres.map((genre) => renderTemplate`<span class="genre" data-astro-cid-hx56qnhs>${genre.name}</span>`)}</p><p data-astro-cid-hx56qnhs><b data-astro-cid-hx56qnhs>Demographics: </b>${anime_info.demographics[0]?.name}</p><p data-astro-cid-hx56qnhs><b data-astro-cid-hx56qnhs>Score: </b>${anime_info.score}</p><p data-astro-cid-hx56qnhs><b data-astro-cid-hx56qnhs>Synopsis: </b>${anime_info.synopsis}</p><a class="trailer"${addAttribute(anime_info.trailer.url, "href")} target="_blank" data-astro-cid-hx56qnhs>${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:play", "data-astro-cid-hx56qnhs": true })} Trailer
</a></article></main><main class="characters" data-astro-cid-hx56qnhs${addAttribute(renderTransition($$result2, "pc6ojrox", "slide", ""), "data-astro-transition-scope")}><h2 data-astro-cid-hx56qnhs>Characters</h2>${renderComponent($$result2, "ListOfCharacters", $$ListOfCharacters, { "id": anime_info.mal_id, "data-astro-cid-hx56qnhs": true })}</main>` })}`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/pages/animes/[id].astro", "self");

const $$file$1 = "/home/futuzor/Documentos/JS/AstroAnime/src/pages/animes/[id].astro";
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Astro Anime - ${person_info.name}`, "data-astro-cid-lwrtzrqi": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="person-info" data-astro-cid-lwrtzrqi><aside data-astro-cid-lwrtzrqi><img${addAttribute(person_info.images.jpg.image_url, "src")} data-astro-cid-lwrtzrqi${addAttribute(renderTransition($$result2, "xppmesiv", "", `people-${person_info.mal_id}`), "data-astro-transition-scope")}></aside><article data-astro-cid-lwrtzrqi${addAttribute(renderTransition($$result2, "rumdg7ez", "slide", ""), "data-astro-transition-scope")}><h1 data-astro-cid-lwrtzrqi>${person_info.name} - (${person_info.family_name})</h1><p data-astro-cid-lwrtzrqi>${person_info.about}</p><!--<a class="trailer" href={anime_info.trailer.url} target="_blank">
                <Icon name="mdi:play" /> Trailer
            </a>-->º
</article></main><main class="roles" data-astro-cid-lwrtzrqi${addAttribute(renderTransition($$result2, "r4meeo43", "slide", ""), "data-astro-transition-scope")}><h2 data-astro-cid-lwrtzrqi>Roles</h2><ul data-astro-cid-lwrtzrqi>${person_info.voices.map((role) => renderTemplate`<li data-astro-cid-lwrtzrqi><b data-astro-cid-lwrtzrqi>${invertJapanesePerson(role.character.name)}</b> in
<a${addAttribute(`/animes/${role.anime.mal_id}`, "href")} data-astro-cid-lwrtzrqi><b data-astro-cid-lwrtzrqi>${role.anime.title}</b></a></li>`)}</ul></main>` })}`;
}, "/home/futuzor/Documentos/JS/AstroAnime/src/pages/people/[id].astro", "self");

const $$file = "/home/futuzor/Documentos/JS/AstroAnime/src/pages/people/[id].astro";
const $$url = "/people/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_$1 as _, _id_ as a };
