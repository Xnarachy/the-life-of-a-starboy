// Page 9. Same format as cards.js.
// Each frame's ratio matches its image's shape so nothing is cropped.
// Image: { src, t: 0..1, fit: "cover" | "contain", ratio: card height }  Poem/text block: { lines: [] }  Button: { button, href }

const FEED = [
  { src: "images/page9-1.jpg", t: 0.3, ratio: 1.54 },
  { src: "images/page9-2.jpg", t: 0.85, ratio: 1.64 },
  { src: "images/page9-3.jpg", t: 0.2, ratio: 1.62 },
  { src: "images/page9-4.jpg", t: 0.8, ratio: 1.54 },
  { src: "images/page9-5.jpg", t: 0.15, ratio: 1.65 },
  { src: "images/page9-6.jpg", t: 0.75, ratio: 1.23 },

  { buttons: [
    { label: "Back", href: "page-8.html", back: true },
    { label: "Next", href: "page-10.html" }
  ] }
];
