import sveltePreprocess from "svelte-preprocess";
// to use sass
import * as sass from "sass";
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    sass: {
      sync: true,
      implementation: sass,
    },
  }),
};
