// Shared renderer: reads FEED (defined in the page's cards file) and builds the page.
const feed = document.getElementById("feed");
let n = 0;

// Lazy loading: a picture is only requested when its card is about to come into view,
// and each card eases in as it arrives.
const hasIO = "IntersectionObserver" in window;
const loader = hasIO ? new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target._load(); obs.unobserve(e.target); }
  });
}, { rootMargin: "500px 0px" }) : null;
const reveal = hasIO ? new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
  });
}, { threshold: 0.25 }) : null;
FEED.forEach(item => {
  const row = document.createElement("li");
  row.className = "row";
  if (item.title) {
    row.className = "page-title";
    row.textContent = item.title;
  } else if (item.lines) {
    row.classList.add("words", "poem");
    item.lines.forEach(l => {
      const d = document.createElement("div");
      d.textContent = l;
      row.appendChild(d);
    });
  } else if (item.text) {
    row.classList.add("words");
    row.textContent = item.text;
  } else if (item.buttons) {
    row.classList.add("next-row");
    item.buttons.forEach(b => {
      const a = document.createElement("a");
      a.className = "next-btn" + (b.back ? " back-btn" : "");
      a.href = b.href;
      a.textContent = b.label;
      row.appendChild(a);
    });
  } else if (item.button) {
    row.classList.add("next-row");
    const a = document.createElement("a");
    a.className = "next-btn";
    a.href = item.href;
    a.textContent = item.button;
    row.appendChild(a);
  } else {
    if (n === 0) row.classList.add("first-card");
    row.classList.add("pic");
    row.style.setProperty("--t", item.t);
    if (n % 3 === 1) {
      const orb = document.createElement("div");
      orb.className = "orb";
      orb.style[item.t < 0.5 ? "right" : "left"] = "-14%";
      orb.style.top = "50%";
      row.appendChild(orb);
    }
    const card = document.createElement("div");
    card.className = "card";
    if (item.ratio) card.style.aspectRatio = "1 / " + item.ratio;
    const shot = document.createElement("div");
    shot.className = "shot";
    shot.textContent = item.src;           // shows the file name until the image exists
    const img = new Image();
    img.alt = "";
    img.style.objectFit = item.fit || "cover";
    img.onload = () => {
      shot.textContent = "";
      shot.appendChild(img);
      requestAnimationFrame(() => img.classList.add("ready"));
    };
    card._load = () => { img.src = item.src; };
    card.appendChild(shot);
    row.appendChild(card);
    if (hasIO) { loader.observe(card); reveal.observe(card); }
    else { card._load(); card.classList.add("in"); }
    n++;
  }
  feed.appendChild(row);
});
