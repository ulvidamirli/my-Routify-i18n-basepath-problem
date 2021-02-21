<script>
	import '../public/style/style.css';
	import { Router } from "@roxi/routify";
	import { routes } from "./.routify/routes";

// accepted languages
  const langs = ["en", "ru"];

  // first url fragment.
  const fragment = location.pathname.split("/")[1];

  // if fragment is an accepted language, use it as a prefix.
  const lang = langs.includes(fragment) ? `/${fragment}` : "";

  const config = {
    urlTransform: {
      //add the language prefix for the browser
      apply: (url) => lang + url,
      //remove the language prefix for Routify
      remove: (url) => url.replace(lang, ""),
    },
  };
</script>

<Router {routes} {config} />