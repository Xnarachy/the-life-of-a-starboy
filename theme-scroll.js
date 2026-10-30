// theme-scroll.js
// Scroll-triggered background colour transitions ("scroll theming").
// Self-contained: it injects its own CSS, adds its own fixed background layers,
// and only READS from your page (FEED + #feed). It does not change style.css,
// feed.js or any cards file. Remove the <script> tag and everything goes back
// to exactly how it was.
//
// HOW COLOURS ARE CHOSEN
//   Default (no setup): every GROUP image cards, the background eases to the next
//   palette in ORDER. The first group is "home", which is your existing
//   charcoal / forest / crimson background, so the top of every page looks
//   exactly as before.
//
//   Manual control: put theme on any item in a cards file, e.g.
//     { src: "images/x.jpg", t: 0.3, theme: "amber" }
//     { text: "...", theme: "slate" }
//   That theme then applies to that item and everything after it until the
//   next item that names a theme. If a page has any theme set, auto mode is off
//   for that page.
//
//   Switch it off for one page: add  <script>window.THEME_SCROLL = false</script>
//   above the theme-scroll.js tag.
//
// It also sets the CSS variable --ac (accent colour) on :root for the active
// theme. Nothing in style.css uses it yet; use it for anything new, e.g.
//   .something { color: var(--ac); }

(function () {
  "use strict";

  // ---- settings you can edit -------------------------------------------------
  var GROUP = 2;                                         // image cards per colour change
  var FADE = "1.5s";                                     // how slowly colours blend
  var ORDER = ["home", "amber", "slate", "sage", "violet"];
  var THEMES = {
    // a = top colour, b = bottom colour, g = glow colour, ac = accent
    home:   { ac: "#d03a2f" },                           // your current look (no layer drawn)
    amber:  { a: "#5b4632", b: "#140d07", g: "rgba(244,217,160,.34)", ac: "#f4d9a0" },
    slate:  { a: "#06141b", b: "#253745", g: "rgba(155,168,171,.36)", ac: "#ccd0cf" },
    sage:   { a: "#2b1d13", b: "#101a0e", g: "rgba(213,133,31,.38)",  ac: "#a9c78a" },
    violet: { a: "#050505", b: "#3b0a6b", g: "rgba(0,229,255,.30)",   ac: "#00e5ff" }
  };
  // ----------------------------------------------------------------------------

  var feed = document.getElementById("feed");
  if (!feed || typeof FEED === "undefined" || window.THEME_SCROLL === false) return;
  var rows = Array.prototype.slice.call(feed.children);
  if (rows.length !== FEED.length) return;               // feed.js builds one row per item; bail if not

  // 1. Work out which theme each row belongs to
  var manual = FEED.some(function (it) { return it.theme; });
  var themeOf = [], cur = manual ? "home" : ORDER[0], cards = 0;
  FEED.forEach(function (it, i) {
    if (manual) {
      if (it.theme && THEMES[it.theme]) cur = it.theme;
    } else if (it.src) {
      cur = ORDER[Math.floor(cards / GROUP) % ORDER.length];
      cards++;
    }
    themeOf[i] = cur;
  });

  // 2. Build the background layers (one per theme except "home")
  var css = document.createElement("style");
  css.textContent =
    "#theme-scroll{position:fixed;inset:0;z-index:-1;pointer-events:none}" +
    "#theme-scroll div{position:absolute;inset:0;opacity:0;transition:opacity " + FADE + " ease}" +
    "#theme-scroll div.on{opacity:1}" +
    "@media (prefers-reduced-motion:reduce){#theme-scroll div{transition:none}}";
  document.head.appendChild(css);

  var wrap = document.createElement("div");
  wrap.id = "theme-scroll";
  wrap.setAttribute("aria-hidden", "true");
  var layers = {};
  Object.keys(THEMES).forEach(function (k) {
    var t = THEMES[k];
    if (!t.a) return;
    var d = document.createElement("div");
    d.style.background =
      "radial-gradient(70% 45% at 88% 6%," + t.g + ",transparent 70%)," +
      "radial-gradient(65% 40% at 8% 96%," + t.g + ",transparent 70%)," +
      "linear-gradient(165deg," + t.a + "," + t.b + ")";
    wrap.appendChild(d);
    layers[k] = d;
  });
  document.body.insertBefore(wrap, document.body.firstChild);

  // 3. Switch themes as the row at the middle of the screen changes
  var active = "";
  function setTheme(k) {
    if (k === active || !THEMES[k]) return;
    active = k;
    Object.keys(layers).forEach(function (n) { layers[n].classList.toggle("on", n === k); });
    document.documentElement.style.setProperty("--ac", THEMES[k].ac);
  }

  var ticking = false;
  function pick() {
    ticking = false;
    var mid = window.innerHeight / 2, idx = 0;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].getBoundingClientRect().top <= mid) idx = i; else break;
    }
    setTheme(themeOf[idx]);
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(pick); } }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("load", pick);
  pick();
})();
