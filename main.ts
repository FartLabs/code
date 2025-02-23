const BASE_URL = "https://github.com/FartLabs";

export default {
  fetch(request) {
    const { pathname } = new URL(request.url);
    const redirectEndpoint = BASE_URL + pathname;
    return Response.redirect(redirectEndpoint, 302);
  },
} satisfies Deno.ServeDefaultExport;
