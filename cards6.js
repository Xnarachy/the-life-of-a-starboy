// Page 6. Same format as cards.js.
// Image: { src, t: 0..1, fit: "cover" | "contain", ratio: optional card height }  Poem/text block: { lines: [] }  Button: { button, href }

const FEED = [
  { src: "images/page6-1.jpg", t: 0.3, fit: "contain" },
  { src: "images/page6-2.jpg", t: 0.85 },
  { src: "images/page6-3.jpg", t: 0.2, fit: "contain" },
  { src: "images/page6-4.jpg", t: 0.8, fit: "contain" },
  { src: "images/page6-5.jpg", t: 0.15, fit: "contain" },
  { src: "images/page6-6.jpg", t: 0.75, fit: "contain" },
  { src: "images/page6-7.jpg", t: 0.25, fit: "contain" },
  { src: "images/page6-8.jpg", t: 0.85, fit: "contain" },
  { src: "images/page6-9.jpg", t: 0.3, fit: "contain" },
  { src: "images/page6-10.jpg", t: 0.85, fit: "contain" },
  { src: "images/page6-11.jpg", t: 0.2, fit: "contain" },

  { buttons: [
    { label: "Back", href: "page-5.html", back: true },
    { label: "Next", href: "page-7.html" }
  ] }
];
