// Page 8. Same format as cards.js.
// Each frame's ratio matches its image's shape so nothing is cropped.
// Image: { src, t: 0..1, fit: "cover" | "contain", ratio: card height }  Poem/text block: { lines: [] }  Button: { button, href }

const FEED = [
  { src: "images/page8-1.jpg", t: 0.3, ratio: 1.64 },
  { src: "images/page8-2.jpg", t: 0.85, ratio: 1.64 },
  { src: "images/page8-3.jpg", t: 0.2, ratio: 1.23 },
  { src: "images/page8-4.jpg", t: 0.8, ratio: 1.54 },
  { src: "images/page8-5.jpg", t: 0.15, ratio: 1.3 },
  { src: "images/page8-6.jpg", t: 0.75, ratio: 1.23 },
  { src: "images/page8-7.jpg", t: 0.25, ratio: 1.27 },
  { src: "images/page8-8.jpg", t: 0.85, ratio: 1.22 },
  { src: "images/page8-9.jpg", t: 0.3, ratio: 1.25 },
  { src: "images/page8-10.jpg", t: 0.85, ratio: 1.26 },
  { src: "images/page8-11.jpg", t: 0.2, ratio: 1.23 },

  { buttons: [
    { label: "Back", href: "page-7.html", back: true },
    { label: "Next", href: "page-9.html" }
  ] }
];
