// Page 5. Same format as cards.js.
// Image: { src, t: 0..1, fit: "cover" | "contain", ratio: optional card height }  Poem/text block: { lines: [] }  Button: { button, href }

const FEED = [
  { src: "images/page5-1.jpg", t: 0.3 },
  { src: "images/page5-2.jpg", t: 0.85, fit: "contain" },
  { src: "images/page5-3.jpg", t: 0.2, fit: "contain" },
  { src: "images/page5-4.jpg", t: 0.8, fit: "contain" },
  { src: "images/page5-5.jpg", t: 0.15, fit: "contain" },
  { src: "images/page5-6.jpg", t: 0.75, fit: "contain" },
  { src: "images/page5-7.jpg", t: 0.25, fit: "contain" },
  { src: "images/page5-8.jpg", t: 0.85, fit: "contain" },
  { src: "images/page5-9.jpg", t: 0.3, fit: "contain" },
  { src: "images/page5-10.jpg", t: 0.85, fit: "contain" },
  { src: "images/page5-11.jpg", t: 0.2, fit: "contain" },
  { src: "images/page5-12.jpg", t: 0.8, fit: "contain" },
  { src: "images/page5-13.jpg", t: 0.15, fit: "contain" },
  { src: "images/page5-14.jpg", t: 0.75, fit: "contain" },
  { src: "images/page5-15.jpg", t: 0.25, fit: "contain" },
  { src: "images/page5-16.jpg", t: 0.85, fit: "contain" },
  { src: "images/page5-17.jpg", t: 0.3 },

  { buttons: [
    { label: "Back", href: "page-4.html", back: true },
    { label: "Next", href: "page-6.html" }
  ] }
];
