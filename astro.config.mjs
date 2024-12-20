import {defineConfig} from "astro/config";
import netlify from "@astrojs/netlify/functions"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
    output: "server",
    integrations: [icon()],
    adapter: netlify(),
    prefetch: false,
    redirects: {
        "/old-page": "/new-page",
    },
    integrations: [
	    icon()
    ]
});
