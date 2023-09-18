import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_9697a26d.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.152fb19a.js"}],"styles":[{"type":"inline","content":"header[data-astro-cid-3ef6ksr2]{position:fixed;width:100%;z-index:1}nav[data-astro-cid-3ef6ksr2]{border-bottom:1px #666 solid;padding:1rem 5rem;display:flex;justify-content:flex-start;gap:1em;align-items:center;background-color:#13151abb;backdrop-filter:blur(5px);& img[data-astro-cid-3ef6ksr2]{width:160px}}.nav-links[data-astro-cid-3ef6ksr2] ul[data-astro-cid-3ef6ksr2]{display:flex;gap:2em;list-style:none}.mobile-nav-menu[data-astro-cid-3ef6ksr2]{display:none}@media (width < 640px){.logo[data-astro-cid-3ef6ksr2]{& img[data-astro-cid-3ef6ksr2]{width:175px}}nav[data-astro-cid-3ef6ksr2]{padding:1em;justify-content:space-between}.nav-links[data-astro-cid-3ef6ksr2]{display:none}.mobile-nav-menu[data-astro-cid-3ef6ksr2]{display:flex;align-items:center;border:1px white solid;border-radius:.5em;width:30px;height:20px;padding:1.25em;cursor:pointer;& ul[data-astro-cid-3ef6ksr2]{display:none}&.active ul[data-astro-cid-3ef6ksr2]{display:flex;flex-direction:column;backdrop-filter:blur(5px);background-color:#112b;margin-top:0;font-size:1.5em;align-items:center;width:100%;list-style:none;padding-left:0;position:absolute;top:3.6em;left:0;height:100vh;overflow:hidden}&.active a[data-astro-cid-3ef6ksr2]{color:#fff}&.active li[data-astro-cid-3ef6ksr2]{padding:.4em 0}& span[data-astro-cid-3ef6ksr2]{background-color:#fff;width:100%;height:5px;transition:all .15s ease-in-out}& span[data-astro-cid-3ef6ksr2]:before{background-color:#fff;width:100%;height:5px;content:\"\";display:block;margin-top:-.8em;transition:all .15s ease-in-out}& span[data-astro-cid-3ef6ksr2]:after{background-color:#fff;width:100%;height:5px;content:\"\";display:block;margin-top:1.3em;transition:all .15s ease-in-out}&.active span[data-astro-cid-3ef6ksr2]{transform:rotate(-45deg)}&.active span[data-astro-cid-3ef6ksr2]:before{transform:rotate(90deg);margin-top:0}&.active span[data-astro-cid-3ef6ksr2]:after{transform:rotate(45deg);margin-top:0;opacity:0}}}footer[data-astro-cid-sz7xmlte]{border-top:1px #666 solid;padding:1em 0;display:flex;justify-content:center;color:#fff;& div[data-astro-cid-sz7xmlte]{align-items:center}& img[data-astro-cid-sz7xmlte]{width:16px}}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Regular.ttf);font-weight:500}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Bold.ttf);font-weight:600}@font-face{font-family:Outfit;src:url(/fonts/Outfit-ExtraBold.ttf);font-weight:700}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Black.ttf);font-weight:800}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%);user-select:none}html{font-family:Outfit,system-ui,sans-serif;background:#13151A;background-size:224px}body{margin:0}.no-scroll{overflow:hidden}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}h1,h2,h3,h4,h5,h6{line-height:1.15em;margin:.5em 0;color:#fff}h1{font-size:2rem}h2{font-size:1.75rem}h3{font-size:1.6rem}h4{font-size:1.5rem;font-weight:inherit}h5{font-size:1.4rem;font-weight:inherit}h6{font-size:1.25rem;font-weight:inherit}a,a:active,a:visited{text-decoration:none;color:#66f}p{margin:.25em 0}\n#anime-item[data-astro-cid-sqjv376q]{list-style:none;& img[data-astro-cid-sqjv376q]{height:240px;transition:all .5s ease-in-out}& img[data-astro-cid-sqjv376q]:hover{transform:scale(1.1)}}.score[data-astro-cid-sqjv376q]{font-size:15px;color:#fff}#lista-animes[data-astro-cid-j3jjp5bb]{display:grid;grid-template-columns:repeat(3,1fr);gap:5em;padding:10rem 3rem 3rem;width:1200px;max-width:calc(100% - 2rem);margin:auto}@media (width < 640px){#lista-animes[data-astro-cid-j3jjp5bb]{grid-template-columns:repeat(2,1fr);gap:2em}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"aside[data-astro-cid-6x7l5mp2]{transition:all .5s ease-in-out}.person-info[data-astro-cid-6x7l5mp2]{padding:10rem 5rem 5rem;color:#fff;display:flex;gap:2.5em}.roles[data-astro-cid-6x7l5mp2]{color:#fff;padding:1rem 5rem 5rem;& ul[data-astro-cid-6x7l5mp2]{margin:0}& li[data-astro-cid-6x7l5mp2]{padding:.5em 0}}.genre[data-astro-cid-6x7l5mp2]{padding:.25em .75em;border-radius:1em;background-color:#55f;margin:0 .5em;font-size:13px;letter-spacing:.1em}article[data-astro-cid-6x7l5mp2]{display:flex;flex-direction:column;gap:.5em}@media (width < 640px){.person-info[data-astro-cid-6x7l5mp2]{flex-direction:column;& img[data-astro-cid-6x7l5mp2]{width:100%}}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/fragments/persondetails","type":"page","pattern":"^\\/fragments\\/PersonDetails\\/?$","segments":[[{"content":"fragments","dynamic":false,"spread":false}],[{"content":"PersonDetails","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fragments/PersonDetails/index.astro","pathname":"/fragments/PersonDetails","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"aside[data-astro-cid-t2cc6qv5]{transition:all .5s ease-in-out}.anime-info[data-astro-cid-t2cc6qv5]{padding:10rem 5rem 5rem;color:#fff;display:flex;gap:2.5em}.characters[data-astro-cid-t2cc6qv5]{color:#fff;padding:1rem 5rem 5rem}.genre[data-astro-cid-t2cc6qv5]{padding:.25em .75em;border-radius:1em;background-color:#55f;margin:0 .5em;font-size:13px;letter-spacing:.1em}article[data-astro-cid-t2cc6qv5]{display:flex;flex-direction:column;gap:.5em}.trailer[data-astro-cid-t2cc6qv5]{padding:.25em .75em;border-radius:1em;background-color:#f55;font-size:13px;letter-spacing:.1em;color:#fff;display:flex;align-items:center;gap:.25em;width:fit-content;margin:1em 0;& svg[data-astro-cid-t2cc6qv5]{width:20px}}@media (width < 640px){.anime-info[data-astro-cid-t2cc6qv5]{flex-direction:column}aside[data-astro-cid-t2cc6qv5] img[data-astro-cid-t2cc6qv5]{width:100%}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/fragments/animedetails","type":"page","pattern":"^\\/fragments\\/AnimeDetails\\/?$","segments":[[{"content":"fragments","dynamic":false,"spread":false}],[{"content":"AnimeDetails","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fragments/AnimeDetails/index.astro","pathname":"/fragments/AnimeDetails","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"#character-item[data-astro-cid-ntfo2cdp]{list-style:none;& img[data-astro-cid-ntfo2cdp]{height:240px;transition:all .5s ease-in-out}& img[data-astro-cid-ntfo2cdp]:hover{box-shadow:0 0 1em #fff}& span[data-astro-cid-ntfo2cdp]{display:block}}#chara[data-astro-cid-56akn22l]{padding-top:2em;display:grid;grid-template-columns:repeat(5,1fr);gap:2.5em .5em}@media (width < 640px){#chara[data-astro-cid-56akn22l]{grid-template-columns:repeat(2,1fr);gap:2em}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/fragments/personlist","type":"page","pattern":"^\\/fragments\\/PersonList\\/?$","segments":[[{"content":"fragments","dynamic":false,"spread":false}],[{"content":"PersonList","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fragments/PersonList/index.astro","pathname":"/fragments/PersonList","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"#anime-item[data-astro-cid-sqjv376q]{list-style:none;& img[data-astro-cid-sqjv376q]{height:240px;transition:all .5s ease-in-out}& img[data-astro-cid-sqjv376q]:hover{transform:scale(1.1)}}.score[data-astro-cid-sqjv376q]{font-size:15px;color:#fff}#lista-animes[data-astro-cid-j3jjp5bb]{display:grid;grid-template-columns:repeat(3,1fr);gap:5em;padding:10rem 3rem 3rem;width:1200px;max-width:calc(100% - 2rem);margin:auto}@media (width < 640px){#lista-animes[data-astro-cid-j3jjp5bb]{grid-template-columns:repeat(2,1fr);gap:2em}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/fragments/animelist","type":"page","pattern":"^\\/fragments\\/AnimeList\\/?$","segments":[[{"content":"fragments","dynamic":false,"spread":false}],[{"content":"AnimeList","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fragments/AnimeList/index.astro","pathname":"/fragments/AnimeList","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.152fb19a.js"}],"styles":[{"type":"inline","content":"header[data-astro-cid-3ef6ksr2]{position:fixed;width:100%;z-index:1}nav[data-astro-cid-3ef6ksr2]{border-bottom:1px #666 solid;padding:1rem 5rem;display:flex;justify-content:flex-start;gap:1em;align-items:center;background-color:#13151abb;backdrop-filter:blur(5px);& img[data-astro-cid-3ef6ksr2]{width:160px}}.nav-links[data-astro-cid-3ef6ksr2] ul[data-astro-cid-3ef6ksr2]{display:flex;gap:2em;list-style:none}.mobile-nav-menu[data-astro-cid-3ef6ksr2]{display:none}@media (width < 640px){.logo[data-astro-cid-3ef6ksr2]{& img[data-astro-cid-3ef6ksr2]{width:175px}}nav[data-astro-cid-3ef6ksr2]{padding:1em;justify-content:space-between}.nav-links[data-astro-cid-3ef6ksr2]{display:none}.mobile-nav-menu[data-astro-cid-3ef6ksr2]{display:flex;align-items:center;border:1px white solid;border-radius:.5em;width:30px;height:20px;padding:1.25em;cursor:pointer;& ul[data-astro-cid-3ef6ksr2]{display:none}&.active ul[data-astro-cid-3ef6ksr2]{display:flex;flex-direction:column;backdrop-filter:blur(5px);background-color:#112b;margin-top:0;font-size:1.5em;align-items:center;width:100%;list-style:none;padding-left:0;position:absolute;top:3.6em;left:0;height:100vh;overflow:hidden}&.active a[data-astro-cid-3ef6ksr2]{color:#fff}&.active li[data-astro-cid-3ef6ksr2]{padding:.4em 0}& span[data-astro-cid-3ef6ksr2]{background-color:#fff;width:100%;height:5px;transition:all .15s ease-in-out}& span[data-astro-cid-3ef6ksr2]:before{background-color:#fff;width:100%;height:5px;content:\"\";display:block;margin-top:-.8em;transition:all .15s ease-in-out}& span[data-astro-cid-3ef6ksr2]:after{background-color:#fff;width:100%;height:5px;content:\"\";display:block;margin-top:1.3em;transition:all .15s ease-in-out}&.active span[data-astro-cid-3ef6ksr2]{transform:rotate(-45deg)}&.active span[data-astro-cid-3ef6ksr2]:before{transform:rotate(90deg);margin-top:0}&.active span[data-astro-cid-3ef6ksr2]:after{transform:rotate(45deg);margin-top:0;opacity:0}}}footer[data-astro-cid-sz7xmlte]{border-top:1px #666 solid;padding:1em 0;display:flex;justify-content:center;color:#fff;& div[data-astro-cid-sz7xmlte]{align-items:center}& img[data-astro-cid-sz7xmlte]{width:16px}}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Regular.ttf);font-weight:500}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Bold.ttf);font-weight:600}@font-face{font-family:Outfit;src:url(/fonts/Outfit-ExtraBold.ttf);font-weight:700}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Black.ttf);font-weight:800}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%);user-select:none}html{font-family:Outfit,system-ui,sans-serif;background:#13151A;background-size:224px}body{margin:0}.no-scroll{overflow:hidden}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}h1,h2,h3,h4,h5,h6{line-height:1.15em;margin:.5em 0;color:#fff}h1{font-size:2rem}h2{font-size:1.75rem}h3{font-size:1.6rem}h4{font-size:1.5rem;font-weight:inherit}h5{font-size:1.4rem;font-weight:inherit}h6{font-size:1.25rem;font-weight:inherit}a,a:active,a:visited{text-decoration:none;color:#66f}p{margin:.25em 0}\naside[data-astro-cid-t2cc6qv5]{transition:all .5s ease-in-out}.anime-info[data-astro-cid-t2cc6qv5]{padding:10rem 5rem 5rem;color:#fff;display:flex;gap:2.5em}.characters[data-astro-cid-t2cc6qv5]{color:#fff;padding:1rem 5rem 5rem}.genre[data-astro-cid-t2cc6qv5]{padding:.25em .75em;border-radius:1em;background-color:#55f;margin:0 .5em;font-size:13px;letter-spacing:.1em}article[data-astro-cid-t2cc6qv5]{display:flex;flex-direction:column;gap:.5em}.trailer[data-astro-cid-t2cc6qv5]{padding:.25em .75em;border-radius:1em;background-color:#f55;font-size:13px;letter-spacing:.1em;color:#fff;display:flex;align-items:center;gap:.25em;width:fit-content;margin:1em 0;& svg[data-astro-cid-t2cc6qv5]{width:20px}}@media (width < 640px){.anime-info[data-astro-cid-t2cc6qv5]{flex-direction:column}aside[data-astro-cid-t2cc6qv5] img[data-astro-cid-t2cc6qv5]{width:100%}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/animes/[id]","type":"page","pattern":"^\\/animes\\/([^/]+?)\\/?$","segments":[[{"content":"animes","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/animes/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.152fb19a.js"}],"styles":[{"type":"inline","content":"header[data-astro-cid-3ef6ksr2]{position:fixed;width:100%;z-index:1}nav[data-astro-cid-3ef6ksr2]{border-bottom:1px #666 solid;padding:1rem 5rem;display:flex;justify-content:flex-start;gap:1em;align-items:center;background-color:#13151abb;backdrop-filter:blur(5px);& img[data-astro-cid-3ef6ksr2]{width:160px}}.nav-links[data-astro-cid-3ef6ksr2] ul[data-astro-cid-3ef6ksr2]{display:flex;gap:2em;list-style:none}.mobile-nav-menu[data-astro-cid-3ef6ksr2]{display:none}@media (width < 640px){.logo[data-astro-cid-3ef6ksr2]{& img[data-astro-cid-3ef6ksr2]{width:175px}}nav[data-astro-cid-3ef6ksr2]{padding:1em;justify-content:space-between}.nav-links[data-astro-cid-3ef6ksr2]{display:none}.mobile-nav-menu[data-astro-cid-3ef6ksr2]{display:flex;align-items:center;border:1px white solid;border-radius:.5em;width:30px;height:20px;padding:1.25em;cursor:pointer;& ul[data-astro-cid-3ef6ksr2]{display:none}&.active ul[data-astro-cid-3ef6ksr2]{display:flex;flex-direction:column;backdrop-filter:blur(5px);background-color:#112b;margin-top:0;font-size:1.5em;align-items:center;width:100%;list-style:none;padding-left:0;position:absolute;top:3.6em;left:0;height:100vh;overflow:hidden}&.active a[data-astro-cid-3ef6ksr2]{color:#fff}&.active li[data-astro-cid-3ef6ksr2]{padding:.4em 0}& span[data-astro-cid-3ef6ksr2]{background-color:#fff;width:100%;height:5px;transition:all .15s ease-in-out}& span[data-astro-cid-3ef6ksr2]:before{background-color:#fff;width:100%;height:5px;content:\"\";display:block;margin-top:-.8em;transition:all .15s ease-in-out}& span[data-astro-cid-3ef6ksr2]:after{background-color:#fff;width:100%;height:5px;content:\"\";display:block;margin-top:1.3em;transition:all .15s ease-in-out}&.active span[data-astro-cid-3ef6ksr2]{transform:rotate(-45deg)}&.active span[data-astro-cid-3ef6ksr2]:before{transform:rotate(90deg);margin-top:0}&.active span[data-astro-cid-3ef6ksr2]:after{transform:rotate(45deg);margin-top:0;opacity:0}}}footer[data-astro-cid-sz7xmlte]{border-top:1px #666 solid;padding:1em 0;display:flex;justify-content:center;color:#fff;& div[data-astro-cid-sz7xmlte]{align-items:center}& img[data-astro-cid-sz7xmlte]{width:16px}}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Regular.ttf);font-weight:500}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Bold.ttf);font-weight:600}@font-face{font-family:Outfit;src:url(/fonts/Outfit-ExtraBold.ttf);font-weight:700}@font-face{font-family:Outfit;src:url(/fonts/Outfit-Black.ttf);font-weight:800}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient(45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60%);user-select:none}html{font-family:Outfit,system-ui,sans-serif;background:#13151A;background-size:224px}body{margin:0}.no-scroll{overflow:hidden}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}h1,h2,h3,h4,h5,h6{line-height:1.15em;margin:.5em 0;color:#fff}h1{font-size:2rem}h2{font-size:1.75rem}h3{font-size:1.6rem}h4{font-size:1.5rem;font-weight:inherit}h5{font-size:1.4rem;font-weight:inherit}h6{font-size:1.25rem;font-weight:inherit}a,a:active,a:visited{text-decoration:none;color:#66f}p{margin:.25em 0}\naside[data-astro-cid-6x7l5mp2]{transition:all .5s ease-in-out}.person-info[data-astro-cid-6x7l5mp2]{padding:10rem 5rem 5rem;color:#fff;display:flex;gap:2.5em}.roles[data-astro-cid-6x7l5mp2]{color:#fff;padding:1rem 5rem 5rem;& ul[data-astro-cid-6x7l5mp2]{margin:0}& li[data-astro-cid-6x7l5mp2]{padding:.5em 0}}.genre[data-astro-cid-6x7l5mp2]{padding:.25em .75em;border-radius:1em;background-color:#55f;margin:0 .5em;font-size:13px;letter-spacing:.1em}article[data-astro-cid-6x7l5mp2]{display:flex;flex-direction:column;gap:.5em}@media (width < 640px){.person-info[data-astro-cid-6x7l5mp2]{flex-direction:column;& img[data-astro-cid-6x7l5mp2]{width:100%}}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/people/[id]","type":"page","pattern":"^\\/people\\/([^/]+?)\\/?$","segments":[[{"content":"people","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/people/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"redirect","route":"/old-page","pattern":"^\\/old-page\\/?$","segments":[[{"content":"old-page","dynamic":false,"spread":false}]],"params":[],"component":"/old-page","pathname":"/old-page","prerender":false,"redirect":"/new-page","_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/animes/[id].astro",{"propagation":"in-tree","containsHead":true}],["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/people/[id].astro",{"propagation":"in-tree","containsHead":true}],["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/components/AnimeItem.astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/AnimeList/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fragments/AnimeList/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/PersonDetails/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/people/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fragments/PersonDetails/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/AnimeDetails/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/animes/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fragments/AnimeDetails/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/components/CharacterItem.astro",{"propagation":"in-tree","containsHead":false}],["/home/futuzor/Documentos/JS/Astro/AstroAnime/src/pages/fragments/PersonList/index.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fragments/PersonList/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-manifest":"manifest_be958e17.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_5a0e9e4d.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_e221611c.mjs","\u0000@astro-page:src/pages/fragments/PersonDetails/index@_@astro":"chunks/index_46ac0835.mjs","\u0000@astro-page:src/pages/fragments/AnimeDetails/index@_@astro":"chunks/index_d9059885.mjs","\u0000@astro-page:src/pages/fragments/PersonList/index@_@astro":"chunks/index_9b31b87b.mjs","\u0000@astro-page:src/pages/fragments/AnimeList/index@_@astro":"chunks/index_8d8d9ae8.mjs","\u0000@astro-page:src/pages/animes/[id]@_@astro":"chunks/_id__c97a3348.mjs","\u0000@astro-page:src/pages/people/[id]@_@astro":"chunks/_id__b353a0b5.mjs","/home/futuzor/Documentos/JS/Astro/AstroAnime/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_da118d72.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.152fb19a.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_id_.0705547f.css","/_astro/index.4d9c6cca.css","/_astro/index.cc063a92.css","/_astro/index.3c053c17.css","/_astro/index.8ecb4f02.css","/_astro/index.be2b602d.css","/favicon.svg","/logo.webp","/_astro/hoisted.152fb19a.js","/fonts/Outfit-Black.ttf","/fonts/Outfit-Bold.ttf","/fonts/Outfit-ExtraBold.ttf","/fonts/Outfit-Medium.ttf","/fonts/Outfit-Regular.ttf","/fonts/Outfit-SemiBold.ttf"]});

export { manifest };
