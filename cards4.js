// Page 4. Same format as cards.js.
// Image: { src, t: 0..1, fit: "cover" | "contain", ratio: optional card height (e.g. 2.45 for a tall image) }  Poem/text block: { lines: [] }  Button: { button, href }

const FEED = [
  { src: "images/page4-1.jpg", t: 0.3, fit: "contain" },
  { src: "images/page4-2.jpg", t: 0.85, fit: "contain" },
  { src: "images/page4-3.jpg", t: 0.2, fit: "contain" },
  { src: "images/page4-4.jpg", t: 0.8, fit: "contain" },
  { src: "images/page4-5.jpg", t: 0.15, fit: "contain" },
  { src: "images/page4-6.jpg", t: 0.75, fit: "contain" },
  { src: "images/page4-7.jpg", t: 0.25, fit: "contain" },
  { src: "images/page4-8.jpg", t: 0.85, fit: "contain" },
  { src: "images/page4-9.jpg", t: 0.3, fit: "contain" },
  { src: "images/page4-10.jpg", t: 0.85, fit: "contain" },
  { src: "images/page4-11.jpg", t: 0.2, fit: "contain" },
  { src: "images/page4-12.jpg", t: 0.8, fit: "contain" },
  { src: "images/page4-13.jpg", t: 0.15, fit: "contain" },
  { src: "images/page4-14.jpg", t: 0.75, fit: "contain" },
  { src: "images/page4-15.jpg", t: 0.25, fit: "contain" },
  { src: "images/page4-16.jpg", t: 0.85, fit: "contain" },
  { src: "images/page4-17.jpg", t: 0.3, fit: "contain" },
  { src: "images/page4-18.jpg", t: 0.85, fit: "contain" },
  { src: "images/page4-19.jpg", t: 0.2, fit: "contain" },
  { src: "images/page4-20.jpg", t: 0.8, fit: "contain" },
  { src: "images/page4-21.jpg", t: 0.15, fit: "contain" },
  { src: "images/page4-22.jpg", t: 0.75 },
  { src: "images/page4-23.jpg", t: 0.25 },
  { src: "images/page4-24.jpg", t: 0.85 },
  { src: "images/page4-25.jpg", t: 0.3 },
  { src: "images/page4-26.jpg", t: 0.85 },
  { src: "images/page4-27.jpg", t: 0.2, fit: "contain" },
  { src: "images/page4-28.jpg", t: 0.8 },
  { src: "images/page4-29.jpg", t: 0.15, fit: "contain", ratio: 2.45 },

  { lines: [
    "It’s always the forbidden that fills our beings,",
    "It’s the pursuit of art that consumes you as the artist,",
    "The ecstasy and dopamine rush is timed.",
    "You pick up the brush and become intoxicated",
    "by the colours you discover.",
    "It’s sad you never see how you stain your white shirt for the blank canvas...."
  ] },

  { buttons: [
    { label: "Back", href: "page-3.html", back: true },
    { label: "Next", href: "page-5.html" }
  ] }
];
