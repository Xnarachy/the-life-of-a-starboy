// Page 2. Same format as cards.js.
// Title: { title: "..." }  Image: { src, t: 0..1, fit }  Words: { text }  Button: { button, href }

const FEED = [
  { title: "Money Trees" },

  { src: "images/money-trees-1.jpg", t: 0.3 },
  { src: "images/money-trees-2.jpg", t: 0.85, fit: "contain" },
  { src: "images/money-trees-3.jpg", t: 0.2,  fit: "contain" },
  { src: "images/money-trees-4.jpg", t: 0.8,  fit: "contain" },
  { src: "images/money-trees-5.jpg", t: 0.15, fit: "contain" },
  { src: "images/money-trees-6.jpg", t: 0.75, fit: "contain" },
  { src: "images/money-trees-7.jpg", t: 0.25, fit: "contain" },
  { src: "images/money-trees-8.jpg", t: 0.85, fit: "contain" },

  { lines: [
    "What does money mean to you?",
    "Is it freedom, security, status or temptations?",
    "What would you be willing to do if money could change your entire life?"
  ] },

  { buttons: [
    { label: "Back", href: "index.html", back: true },
    { label: "Next", href: "page-3.html" }
  ] }
];
