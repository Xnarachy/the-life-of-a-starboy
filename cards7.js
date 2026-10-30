// Page 7. Same format as cards.js.
// Each frame's ratio matches its photo's shape so nothing is cropped.
// Image: { src, t: 0..1, fit: "cover" | "contain", ratio: card height }  Poem/text block: { lines: [] }  Button: { button, href }

const FEED = [
  { src: "images/page7-1.jpg", t: 0.3, ratio: 1.84 },
  { src: "images/page7-2.jpg", t: 0.85, ratio: 1.6 },
  { src: "images/page7-3.jpg", t: 0.2, ratio: 1.64 },
  { src: "images/page7-4.jpg", t: 0.8, ratio: 1.23 },
  { src: "images/page7-5.jpg", t: 0.15, ratio: 1.52 },
  { src: "images/page7-6.jpg", t: 0.75, ratio: 1.54 },
  { src: "images/page7-7.jpg", t: 0.25, ratio: 1.2 },
  { src: "images/page7-8.jpg", t: 0.85, ratio: 1.54 },
  { src: "images/page7-9.jpg", t: 0.3, ratio: 1.85 },
  { src: "images/page7-10.jpg", t: 0.85, ratio: 1.39 },
  { src: "images/page7-11.jpg", t: 0.2, ratio: 1.54 },
  { src: "images/page7-12.jpg", t: 0.8, ratio: 1.8 },
  { src: "images/page7-13.jpg", t: 0.15, ratio: 2.19 },
  { src: "images/page7-14.jpg", t: 0.75, ratio: 1.23 },
  { src: "images/page7-15.jpg", t: 0.25, ratio: 2.19 },
  { src: "images/page7-16.jpg", t: 0.85, ratio: 1.54 },
  { src: "images/page7-17.jpg", t: 0.3, ratio: 2.19 },
  { src: "images/page7-18.jpg", t: 0.85, ratio: 1.64 },
  { src: "images/page7-19.jpg", t: 0.2, ratio: 2.2 },
  { src: "images/page7-20.jpg", t: 0.8, ratio: 1.54 },

  { buttons: [
    { label: "Back", href: "page-6.html", back: true },
    { label: "Next", href: "page-8.html" }
  ] }
];
