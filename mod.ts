const BASE_URL = "https://github.com/FartLabs";

addEventListener("fetch", (event) => {
  const { request, respondWith } = event;
  const { pathname } = new URL(request.url);
  const redirectEndpoint = BASE_URL + pathname;
  respondWith(Response.redirect(redirectEndpoint, 302));
});
