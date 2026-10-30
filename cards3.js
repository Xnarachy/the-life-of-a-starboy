// Page 3. Same format as cards.js.
// Image: { src, t: 0..1, fit: "cover" | "contain" }  Words: { text }  Poem: { lines: [] }  Button: { button, href }

const FEED = [
  { src: "images/page3-1.jpg",  t: 0.3 },
  { src: "images/page3-2.jpg",  t: 0.85 },
  { src: "images/page3-3.jpg",  t: 0.2 },
  { src: "images/page3-4.jpg",  t: 0.8,  fit: "contain" },
  { src: "images/page3-5.jpg",  t: 0.15, fit: "contain" },
  { src: "images/page3-6.jpg",  t: 0.75, fit: "contain" },
  { src: "images/page3-7.jpg",  t: 0.25, fit: "contain" },
  { src: "images/page3-8.jpg",  t: 0.85 },
  { src: "images/page3-9.jpg",  t: 0.2,  fit: "contain" },
  { src: "images/page3-10.png", t: 0.8,  fit: "contain" },
  { src: "images/page3-11.jpg", t: 0.2,  fit: "contain" },

  { buttons: [
    { label: "Back", href: "next-page.html", back: true },
    { label: "Next", href: "page-4.html" }
  ] }
];
