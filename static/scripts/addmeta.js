// Adding custom head fields is not supported by Duckquill theme,
// so this is a kind of dirty hack to add a link.
// TODO: log a feature request on this.
(function () {
  // https://developer.mozilla.org/ru/docs/Web/Progressive_web_apps/Manifest
  let linkTag = document.createElement("link");

  linkTag.rel = "manifest";
  linkTag.href = "/manifest.webmanifest";

  document.head.appendChild(linkTag);
})();
