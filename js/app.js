"use strict";
/* ================= VarahaCraft — static build =================
   All site content is embedded below. No server, no database,
   no network calls for content — the page renders entirely from
   this file plus the media files in assets/. */

var WA_NUM = "919911139009";
function waLink(message) {
  return "https://wa.me/" + WA_NUM + (message ? "?text=" + encodeURIComponent(message) : "");
}
var WA_DEFAULT = "Hi VarahaCraft! I want to discuss a project for my brand.";

var SERVICES = [
  { name: "Brand Identity", desc: "Identities engineered to be unforgettable — strategy-first logos, visual systems and brand worlds that hold their gravity across every touchpoint.", tags: ["LOGO SYSTEMS", "BRAND STRATEGY", "GUIDELINES", "NAMING", "ART DIRECTION"] },
  { name: "Graphic Design", desc: "Editorial, campaign and social design with a sharp eye — layouts that stop the scroll and compositions that make people feel something.", tags: ["CAMPAIGNS", "SOCIAL DESIGN", "EDITORIAL", "PACKAGING", "KEY VISUALS"] },
  { name: "Website Design", desc: "Digital worlds, not just web pages — immersive, animated, conversion-minded websites built with the same obsession we bring to film.", tags: ["WEB DESIGN", "UI / UX", "3D & WEBGL", "E-COMMERCE", "DEVELOPMENT"] },
  { name: "3D CGI Advertising", desc: "Photoreal CGI product films and visuals that defy physics and budgets alike — if you can imagine it, we can render it into orbit.", tags: ["PRODUCT FILMS", "CGI VISUALS", "3D ANIMATION", "VFX", "RENDERING"] },
  { name: "Motion Graphics", desc: "Brands in motion — idents, explainers, launch films and social loops with rhythm, weight and unmistakable style.", tags: ["BRAND FILMS", "EXPLAINERS", "SOCIAL LOOPS", "TITLE DESIGN", "2D / 3D MOTION"] },
  { name: "Print & Installation", desc: "Design you can touch — large-format print, environmental graphics and installations that turn physical spaces into brand experiences.", tags: ["LARGE FORMAT", "EXHIBITION", "SIGNAGE", "OOH", "PRINT PRODUCTION"] }
];

/* category: ugc | graphics | websites | motion | more
   aspect: std | tall | wide */
var PROJECTS = [
  { title: "Golden Glow", category: "ugc", tag: "UGC Ad Film · Vertical", blurb: "UGC ad film for a D2C skincare launch.", description: "Creator-led UGC ad for a skincare launch — one hook, one product, shot and edited for the feed. Built to feel like a friend's recommendation, not an advertisement.", kind: "video", media: "assets/work-ugc.mp4", poster: "assets/work-ugc-poster.webp", aspect: "tall", link: "", featured: false },
  { title: "Disrupt Series", category: "graphics", tag: "Graphic Design · Campaign", blurb: "Poster system for a social-first campaign.", description: "A black-and-gold poster system for a social-first campaign — bold type, geometric lines and zero subtlety. One visual language across posts, stories and print.", kind: "image", media: "assets/work-graphics.webp", poster: "", aspect: "std", link: "", featured: false },
  { title: "Evento Craft", category: "websites", tag: "Website · Events & Exhibitions", blurb: "Event management & exhibition stall design.", description: "Website for a Delhi-based event management and exhibition stall design company — services, a work portfolio and enquiry flow for corporate events and expos across India.", kind: "image", media: "assets/site-eventocraft.webp", poster: "", aspect: "std", link: "https://www.eventocraft.com", featured: false },
  { title: "The Expo Maker", category: "websites", tag: "Website · Exhibition Stalls", blurb: "Exhibition stall design & fabrication.", description: "Website for an exhibition stall design and fabrication studio — a gallery of built stalls, pan-India service pages and a quote-request flow for exhibitors.", kind: "image", media: "assets/site-expomaker.webp", poster: "", aspect: "std", link: "https://www.theexpomaker.com", featured: false },
  { title: "Bollywood Aero City Farms", category: "websites", tag: "Website · Real Estate", blurb: "Luxury farm estates near Jewar Airport.", description: "Website for luxury farm estates near Jewar Airport — gated plots from 1,000 sq. yards with an interactive size-and-price calculator, amenity stories and brochure downloads.", kind: "image", media: "assets/site-bollywoodfarms.webp", poster: "", aspect: "std", link: "https://www.bollywoodaerocityfarm.in", featured: false },
  { title: "Aurum Noir", category: "motion", tag: "3D CGI · Product Film", blurb: "Photoreal CGI film for a fragrance launch.", description: "Photoreal CGI product film for a luxury fragrance launch — golden light trails wrapped around glass, no camera required.", kind: "image", media: "assets/cgi-perfume.webp", poster: "", aspect: "std", link: "", featured: true },
  { title: "Golden Glow — Cutdowns", category: "ugc", tag: "UGC Ads · Paid Social", blurb: "Vertical UGC stills & hooks for paid social.", description: "A family of vertical cutdowns and stills from the same shoot — hooks, demos and testimonials cut for paid social, so one production day feeds a month of ads.", kind: "image", media: "assets/work-ugc-poster.webp", poster: "", aspect: "tall", link: "", featured: false },
  { title: "Nigra", category: "graphics", tag: "Graphics · Brand Identity", blurb: "Identity system — emblem to manifesto.", description: "Complete identity system — emblem, stationery and brand manifesto for a premium label that wanted to feel like a heirloom.", kind: "image", media: "assets/brand-identity.webp", poster: "", aspect: "std", link: "", featured: true },
  { title: "Studio Showreel — Vol. 01", category: "motion", tag: "Showreel · CGI & Motion", blurb: "CGI, motion and brand worlds in one cut.", description: "Sixty seconds inside the orbit — CGI, motion and brand worlds in one cut, built frame by frame in our own lab.", kind: "video", media: "assets/showreel.mp4", poster: "assets/hero-poster.webp", aspect: "wide", link: "", featured: false },
  { title: "LUXOTIC Infrastructure", category: "websites", tag: "Website · Real Estate", blurb: "Premium real estate — farmhouses & plots.", description: "Cinematic corporate website for a premium real-estate developer — farmhouses, plotted developments and residences presented with scroll-driven storytelling.", kind: "image", media: "assets/site-luxotic.webp", poster: "", aspect: "std", link: "https://www.luxoticinfrastructure.com", featured: true },
  { title: "Skyline Aero Homes", category: "websites", tag: "Website · Real Estate", blurb: "Approved residential plots near Jewar Airport.", description: "Website for approved residential plots near Jewar Airport — a 50-acre township with amenities, gallery, video tour and site-visit enquiries built in.", kind: "image", media: "assets/site-skyline.webp", poster: "", aspect: "wide", link: "https://www.skylineaerohomes.com", featured: false },
  { title: "Greenzone Nature Ayurveda", category: "websites", tag: "Website · E-Commerce", blurb: "Ayurvedic e-commerce store.", description: "Full e-commerce store for an Ayurvedic wellness brand — product catalogue, offers and expert consultation booking, designed for everyday online sales.", kind: "image", media: "assets/site-greenzone.webp", poster: "", aspect: "wide", link: "https://www.greenzonenatureayurveda.co.in", featured: false },
  { title: "Noir Packaging Suite", category: "graphics", tag: "Graphics · Packaging", blurb: "Packaging that looks expensive unopened.", description: "Matte black boxes and jars with gold-foil type — packaging designed to look expensive long before it is opened.", kind: "image", media: "assets/work-packaging.webp", poster: "", aspect: "std", link: "", featured: false },
  { title: "Orbital Forms", category: "motion", tag: "Motion Graphics · 3D", blurb: "Motion identity built from chrome & light.", description: "Motion identity and 3D brand film built from chrome, gold and light — a logo system that only fully exists in movement.", kind: "image", media: "assets/motion-3d.webp", poster: "", aspect: "std", link: "", featured: true },
  { title: "Midnight Billboard", category: "more", tag: "More · OOH & Print", blurb: "OOH built to own the night skyline.", description: "A black-and-gold billboard built to own the night skyline — readable from a kilometre, remembered for much longer.", kind: "image", media: "assets/work-ooh.webp", poster: "", aspect: "std", link: "", featured: false },
  { title: "The Golden Chamber", category: "more", tag: "More · Installation", blurb: "Immersive brand installation & experience.", description: "An immersive brand installation — glowing geometry and a hall that turns visitors into an audience.", kind: "image", media: "assets/work-install.webp", poster: "", aspect: "std", link: "", featured: false }
];

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function cardTag(p) {
  return p.link ? "LIVE SITE ↗" : p.tag.split("·")[0].trim().toUpperCase();
}
function cardMedia(p, hoverPlay, eager) {
  if (p.kind === "video") {
    return '<video src="' + p.media + '"' + (p.poster ? ' poster="' + p.poster + '"' : "") + ' muted loop playsinline preload="metadata" aria-label="' + esc(p.title) + '"' + (hoverPlay ? ' data-hoverplay="1"' : "") + "></video>";
  }
  /* Featured (home) cards load eagerly: lazy images deep in a long page
     can still be unloaded black boxes when a visitor scrolls fast. */
  return '<img src="' + p.media + '" alt="' + esc(p.title) + '"' + (eager ? ' loading="eager" fetchpriority="high"' : ' loading="lazy"') + " />";
}

/* ---------- render: services accordion ---------- */
(function renderServices() {
  var list = document.getElementById("svcList");
  list.innerHTML = SERVICES.map(function (svc, i) {
    var tags = svc.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    return '<article class="svc' + (i === 0 ? " open" : "") + '" data-rv>' +
      '<button class="svc-head" aria-expanded="' + (i === 0) + '" data-svc="' + i + '">' +
        '<span class="svc-num">/ 0' + (i + 1) + '</span>' +
        '<span class="svc-name">' + esc(svc.name) + '</span>' +
        '<span class="svc-toggle" aria-hidden="true">+</span>' +
      "</button>" +
      '<div class="svc-body"><div class="svc-body-in">' +
        '<span class="svc-num-spacer"></span>' +
        "<div><p>" + esc(svc.desc) + '</p><div class="tags">' + tags + "</div>" +
        '<a class="svc-wa" href="' + waLink("Hi VarahaCraft! I'm interested in your " + svc.name + " service. Please share details.") + '" target="_blank" rel="noopener noreferrer">ENQUIRE ON WHATSAPP →</a>' +
        "</div></div></div></article>";
  }).join("");
})();

/* ---------- render: featured work ---------- */
(function renderFeatured() {
  var grid = document.getElementById("featuredGrid");
  var featured = PROJECTS.filter(function (p) { return p.featured; }).slice(0, 4);
  grid.innerHTML = featured.map(function (p) {
    var idx = PROJECTS.indexOf(p);
    return '<button class="card" data-open="' + idx + '" aria-label="View project — ' + esc(p.title) + '" data-rv>' +
      '<div class="card-media">' + cardMedia(p, false, true) + "</div>" +
      '<div class="card-info"><div><h3>' + esc(p.title) + "</h3><p>" + esc(p.blurb) + '</p></div>' +
      '<span class="card-tag">' + esc(cardTag(p)) + "</span></div></button>";
  }).join("");
})();

/* ---------- render: work grid + filters ---------- */
var currentFilter = "all";
function renderWork() {
  var grid = document.getElementById("wpGrid");
  var shown = PROJECTS.filter(function (p) { return currentFilter === "all" || p.category === currentFilter; });
  document.getElementById("wpCount").textContent = "SHOWING " + shown.length + " OF " + PROJECTS.length + " PROJECTS";
  grid.innerHTML = shown.map(function (p, i) {
    var idx = PROJECTS.indexOf(p);
    return '<button class="wcard" style="animation-delay:' + Math.min(i, 8) * 60 + 'ms" data-open="' + idx + '" aria-label="View project — ' + esc(p.title) + '">' +
      '<div class="wcard-media ar-' + p.aspect + '">' + cardMedia(p, true) +
      (p.kind === "video" ? '<span class="play-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3.8v16.4c0 .8.9 1.3 1.6.9l12.6-8.2c.6-.4.6-1.4 0-1.8L7.6 2.9C6.9 2.5 6 3 6 3.8z" /></svg></span>' : "") +
      "</div>" +
      '<div class="card-info"><div><h3>' + esc(p.title) + "</h3><p>" + esc(p.blurb) + '</p></div>' +
      '<span class="card-tag">' + esc(cardTag(p)) + "</span></div></button>";
  }).join("");
  bindHoverPlay(grid);
}
function bindHoverPlay(scope) {
  scope.querySelectorAll("video[data-hoverplay]").forEach(function (v) {
    v.addEventListener("mouseenter", function () { var pr = v.play(); if (pr) pr.catch(function () {}); });
    v.addEventListener("mouseleave", function () { v.pause(); });
  });
}
document.getElementById("filters").addEventListener("click", function (e) {
  var btn = e.target.closest("[data-filter]");
  if (!btn) return;
  currentFilter = btn.getAttribute("data-filter");
  this.querySelectorAll(".filter-btn").forEach(function (b) {
    var on = b === btn;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  renderWork();
});
renderWork();

/* ---------- services accordion ---------- */
var openSvc = 0;
document.getElementById("svcList").addEventListener("click", function (e) {
  var btn = e.target.closest("[data-svc]");
  if (!btn) return;
  var i = parseInt(btn.getAttribute("data-svc"), 10);
  var opening = openSvc !== i;
  openSvc = opening ? i : -1;
  this.querySelectorAll(".svc").forEach(function (art, j) {
    art.classList.toggle("open", j === openSvc);
    art.querySelector(".svc-head").setAttribute("aria-expanded", j === openSvc ? "true" : "false");
  });
  if (!opening) return;
  /* Opening a service collapses the previously open one above it, which
     shifts the clicked row up the page — if it ends up tucked under the
     fixed header once the animation settles, ease it back into view so
     the service the user tapped never seems to vanish. */
  var article = btn.closest("article");
  window.setTimeout(function () {
    if (article && article.getBoundingClientRect().top < 96) {
      article.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 620);
});

/* ---------- lightbox ---------- */
var lightbox = document.getElementById("lightbox");
function openProject(idx) {
  var p = PROJECTS[idx];
  if (!p) return;
  var media = document.getElementById("lbMedia");
  if (p.kind === "video") {
    media.innerHTML = '<video src="' + p.media + '"' + (p.poster ? ' poster="' + p.poster + '"' : "") + ' controls autoplay muted loop playsinline aria-label="' + esc(p.title) + '"></video>';
  } else {
    media.innerHTML = '<img src="' + p.media + '" alt="' + esc(p.title) + '" />';
  }
  document.getElementById("lbTag").textContent = p.tag;
  document.getElementById("lbTitle").textContent = p.title;
  document.getElementById("lbDesc").textContent = p.description || p.blurb;
  var live = document.getElementById("lbLive");
  if (p.link) { live.hidden = false; live.href = p.link; } else { live.hidden = true; }
  document.getElementById("lbWa").href = waLink('Hi VarahaCraft! I saw "' + p.title + '" on your site and want something like it for my brand.');
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeProject() {
  lightbox.classList.remove("open");
  document.getElementById("lbMedia").innerHTML = "";
  document.body.style.overflow = "";
}
document.addEventListener("click", function (e) {
  var card = e.target.closest("[data-open]");
  if (card) openProject(parseInt(card.getAttribute("data-open"), 10));
});
document.getElementById("lbClose").addEventListener("click", closeProject);
document.getElementById("lbBackdrop").addEventListener("click", closeProject);
window.addEventListener("keydown", function (e) { if (e.key === "Escape") closeProject(); });

/* ---------- reveal on scroll ---------- */
var revealIO = null;
function initReveal() {
  var els = Array.prototype.slice.call(document.querySelectorAll("[data-rv]:not(.rv-in)"));
  function mark(el) { el.classList.add("rv-in"); }
  if (!("IntersectionObserver" in window)) { els.forEach(mark); return; }
  if (revealIO) revealIO.disconnect();
  revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { mark(en.target); revealIO.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { revealIO.observe(el); });
  /* Failsafe: content is never trapped invisible below the fold. */
  window.setTimeout(function () {
    document.querySelectorAll("[data-rv]:not(.rv-in)").forEach(mark);
  }, 800);
}

/* ---------- scroll chrome: progress bar + header ---------- */
(function scrollChrome() {
  var bar = document.getElementById("progress");
  var head = document.getElementById("siteHeader");
  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    head.classList.toggle("scrolled", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---------- custom gold cursor (fine pointers only) ---------- */
(function cursor() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  var dot = document.getElementById("cursorDot");
  var ring = document.getElementById("cursorRing");
  var rx = -100, ry = -100, tx = -100, ty = -100, raf = 0;
  window.addEventListener("mousemove", function (e) {
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = "translate(" + tx + "px," + ty + "px) translate(-50%,-50%)";
    var t = e.target;
    ring.classList.toggle("is-hover", !!(t && t.closest && t.closest("a,button,[data-hover],input,select,textarea,label")));
  }, { passive: true });
  (function loop() {
    rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
    ring.style.left = rx + "px"; ring.style.top = ry + "px";
    ring.style.transform = "translate(-50%,-50%)";
    raf = requestAnimationFrame(loop);
  })();
})();

/* ---------- orbit canvas over the hero ---------- */
(function orbitCanvas() {
  var canvas = document.getElementById("gl");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  if (!ctx) return;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var w = 0, h = 0, raf = 0, t = 0, mx = 0.5, my = 0.42;
  var particles = [];
  for (var i = 0; i < 90; i++) {
    particles.push({
      a: (i / 90) * Math.PI * 2,
      r: 0.32 + ((i * 37) % 40) / 100,
      s: 0.4 + ((i * 13) % 10) / 14,
      size: ((i * 7) % 3) + 0.6
    });
  }
  function resize() {
    var rect = canvas.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("mousemove", function (e) {
    var rect = canvas.getBoundingClientRect();
    mx = (e.clientX - rect.left) / Math.max(rect.width, 1);
    my = (e.clientY - rect.top) / Math.max(rect.height, 1);
  }, { passive: true });
  function draw() {
    t += 0.0035;
    ctx.clearRect(0, 0, w, h);
    var cx = w * (0.5 + (mx - 0.5) * 0.04);
    var cy = h * (0.42 + (my - 0.5) * 0.04);
    var R = Math.min(w, h) * 0.42;
    for (var ring = 0; ring < 3; ring++) {
      ctx.beginPath();
      ctx.ellipse(cx, cy, R * (0.72 + ring * 0.22), R * (0.3 + ring * 0.09), -0.32, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(217,164,65," + (0.16 - ring * 0.04) + ")";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    particles.forEach(function (p) {
      var ang = p.a + t * p.s;
      var x = cx + Math.cos(ang) * R * (0.55 + p.r * 0.75);
      var y = cy + Math.sin(ang) * R * (0.24 + p.r * 0.3);
      ctx.beginPath();
      ctx.arc(x, y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(232,195,118,0.75)";
      ctx.fill();
    });
    if (!reduced && route === "home") raf = requestAnimationFrame(draw);
  }
  resize(); draw();
  window.addEventListener("resize", function () { resize(); if (!raf && route === "home") draw(); });
  window.__orbitResume = function () { cancelAnimationFrame(raf); raf = 0; resize(); draw(); };
  window.__orbitStop = function () { cancelAnimationFrame(raf); raf = 0; };
})();

/* ---------- hero video: poster first, video on idle ---------- */
(function heroVideo() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var started = false;
  function start() {
    if (started) return;
    started = true;
    var v = document.getElementById("heroVideo");
    if (!v) return;
    var src = document.createElement("source");
    src.src = "assets/showreel.mp4";
    src.type = "video/mp4";
    v.appendChild(src);
    v.preload = "auto";
    v.load();
    var pr = v.play();
    if (pr) pr.catch(function () {});
    v.addEventListener("playing", function () {
      var poster = document.getElementById("heroPoster");
      if (poster) poster.style.opacity = "0";
    });
  }
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(start, { timeout: 2500 });
  } else {
    window.setTimeout(start, 1200);
  }
})();

/* ---------- showreel play / pause ---------- */
(function reel() {
  var v = document.getElementById("reelVideo");
  var btn = document.getElementById("reelBtn");
  if (!v || !btn) return;
  var ICON_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 3.8v16.4c0 .8.9 1.3 1.6.9l12.6-8.2c.6-.4.6-1.4 0-1.8L7.6 2.9C6.9 2.5 6 3 6 3.8z" /></svg>';
  var ICON_PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z" /></svg>';
  function sync() {
    var playing = !v.paused;
    btn.classList.toggle("is-playing", playing);
    btn.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
    btn.setAttribute("aria-label", playing ? "Pause showreel video" : "Play showreel video");
  }
  btn.addEventListener("click", function () {
    if (v.paused) { var pr = v.play(); if (pr) pr.catch(function () {}); } else { v.pause(); }
    sync();
  });
  v.addEventListener("pause", sync);
  v.addEventListener("play", sync);
})();

/* ================= routing with animated transitions ================= */
var route = "home";
var anchorPending = false;
var leaveTimer = null;
var pageView = document.getElementById("pageView");

function scrollers() {
  var list = [window];
  var a = document.querySelector("[data-generated-space-root]");
  var b = document.querySelector("[data-hatch-space-root]");
  if (a) list.push(a);
  if (b && b !== a) list.push(b);
  return list;
}
/* Jump to the very top, instantly. The stylesheet's smooth scroll-behavior
   would turn a plain scrollTo into a long animated scroll that the page
   swap strands mid-way, so "instant" overrides it for this jump only; a
   still-focused footer button is blurred first so the browser does not
   scroll it back into view. */
function scrollTopNow() {
  var active = document.activeElement;
  if (active && active !== document.body && active.blur) active.blur();
  var opts = { top: 0, behavior: "instant" };
  scrollers().forEach(function (s) { try { s.scrollTo(opts); } catch (e) { s.scrollTo(0, 0); } });
}
/* Animated glide to the very top — used when the logo is clicked while
   already on Home, so the return to the hero is a smooth scroll instead
   of a teleport. Reduced-motion users get the instant jump. */
function scrollTopSmooth() {
  var active = document.activeElement;
  if (active && active !== document.body && active.blur) active.blur();
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var opts = { top: 0, behavior: reduced ? "instant" : "smooth" };
  scrollers().forEach(function (s) { try { s.scrollTo(opts); } catch (e) { s.scrollTo(0, 0); } });
}
function routeFromHash() {
  var h = window.location.hash.replace(/^#\/?/, "");
  return h.indexOf("work") === 0 ? "work" : "home";
}
function render(r) {
  document.getElementById("page-home").hidden = r !== "home";
  document.getElementById("page-work").hidden = r !== "work";
  document.getElementById("navWork").classList.toggle("active", r === "work");
  if (r === "home" && window.__orbitResume) window.__orbitResume();
  if (r !== "home" && window.__orbitStop) window.__orbitStop();
  initReveal();
}
function afterRouteTop() {
  if (anchorPending) return;
  scrollTopNow();
  requestAnimationFrame(scrollTopNow);
  window.setTimeout(scrollTopNow, 140);
  window.setTimeout(scrollTopNow, 500);
}
function setHash(target) {
  if (window.location.hash !== target) {
    try { window.history.pushState(null, "", target); } catch (e) { window.location.hash = target; }
  }
}
function go(r, anchor) {
  var target = r === "work" ? "#/work" : "#/";
  if (anchor) {
    setHash(target);
    anchorPending = true;
    var changed = route !== r;
    route = r;
    if (changed) render(r);
    window.setTimeout(function () {
      var el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      anchorPending = false;
    }, changed ? 120 : 60);
    return;
  }
  anchorPending = false;
  if (r === route) {
    /* Already on this page — e.g. the logo clicked while on Home. Glide
       back up to the hero with an animated scroll, never a hard jump. */
    setHash(target);
    scrollTopSmooth();
    return;
  }
  /* Animated page transition: the current page eases out first, then the
     route swaps — the new page starts at the very top while it is still
     fading in, and .page-view replays its entrance animation. */
  if (leaveTimer) window.clearTimeout(leaveTimer);
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  pageView.classList.add("is-leaving");
  leaveTimer = window.setTimeout(function () {
    setHash(target);
    route = r;
    render(r);
    afterRouteTop();
    pageView.classList.remove("is-leaving");
    pageView.style.animation = "none";
    void pageView.offsetWidth;
    pageView.style.animation = "";
    leaveTimer = null;
  }, reduced ? 0 : 300);
}
window.addEventListener("hashchange", function () {
  var r = routeFromHash();
  if (r !== route) { route = r; render(r); afterRouteTop(); }
});
if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";

/* ---------- nav wiring ---------- */
document.querySelectorAll("[data-nav]").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    closeMenu();
    var key = el.getAttribute("data-nav");
    if (key === "work") go("work");
    else if (key === "contact") go("home", "contact");
    else go("home", key);
  });
});
document.querySelectorAll("[data-goto]").forEach(function (el) {
  el.addEventListener("click", function () { go(el.getAttribute("data-goto")); });
});
document.querySelectorAll("[data-scrollto]").forEach(function (el) {
  el.addEventListener("click", function () {
    var target = document.getElementById(el.getAttribute("data-scrollto"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
document.getElementById("logoBtn").addEventListener("click", function () { closeMenu(); go("home"); });
document.getElementById("footLogoBtn").addEventListener("click", function () { go("home"); });

/* ---------- mobile menu ---------- */
var menuOpen = false;
var burger = document.getElementById("burger");
var mobileMenu = document.getElementById("mobileMenu");
function closeMenu() {
  menuOpen = false;
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Open menu");
  burger.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h12" /></svg>';
}
burger.addEventListener("click", function () {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("open", menuOpen);
  mobileMenu.setAttribute("aria-hidden", menuOpen ? "false" : "true");
  burger.setAttribute("aria-expanded", menuOpen ? "true" : "false");
  burger.setAttribute("aria-label", menuOpen ? "Close menu" : "Open menu");
  burger.innerHTML = menuOpen
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h12" /></svg>';
});

/* ---------- contact form → mailto ---------- */
(function contactForm() {
  var form = document.getElementById("contactForm");
  var ok = document.getElementById("formOk");
  var err = document.getElementById("formErr");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("cf-name").value.trim();
    var phone = document.getElementById("cf-phone").value.trim();
    var email = document.getElementById("cf-email").value.trim();
    var service = document.getElementById("cf-service").value;
    var message = document.getElementById("cf-message").value.trim();
    var honeypot = document.getElementById("cf-website").value;
    /* Bots that fill the honeypot get a quiet success screen and no email
       is ever composed. (No elapsed-time check: with mailto there is no
       server to protect, and a fast human must never be blocked.) */
    if (honeypot) {
      form.hidden = true; ok.hidden = false;
      return;
    }
    if (!name || !message) {
      err.hidden = false;
      ( !name ? document.getElementById("cf-name") : document.getElementById("cf-message") ).focus();
      return;
    }
    err.hidden = true;
    var lines = [
      "Name: " + name,
      phone ? "Phone / WhatsApp: " + phone : null,
      email ? "Email: " + email : null,
      service ? "Service needed: " + service : null,
      "",
      message
    ].filter(function (x) { return x !== null; });
    var href = "mailto:info@varahacraft.in" +
      "?subject=" + encodeURIComponent("New project enquiry — " + name + (service ? " (" + service + ")" : "")) +
      "&body=" + encodeURIComponent(lines.join("\n"));
    window.location.href = href;
    document.getElementById("formOkText").textContent =
      "Thanks, " + (name.split(" ")[0] || "friend") + " — your email app is opening with the enquiry ready to send to info@varahacraft.in. Just press send there. In a hurry? WhatsApp is fastest.";
    form.hidden = true; ok.hidden = false;
  });
})();

/* ---------- boot ---------- */
route = routeFromHash();
render(route);
if (route === "work") afterRouteTop();
window.addEventListener("load", function () {
  window.setTimeout(function () {
    document.getElementById("preloader").classList.add("done");
  }, 500);
});
/* Preloader never traps the page, even if a resource hangs. */
window.setTimeout(function () {
  document.getElementById("preloader").classList.add("done");
}, 2600);
initReveal();
