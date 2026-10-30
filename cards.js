// Edit this list to change the feed.
// Image card: { src: "images/file.jpg", t: 0..1, fit: "cover" | "contain" }
//   t   = how far across the screen the card sits (0 = far left, 1 = far right)
//   fit = optional; "contain" shows the whole picture, default "cover" fills the card
// Words: { text: "Your words here" }
// Button: { button: "Label", href: "page.html" }

const FEED = [
  { src: "images/here-we-go-again.jpg",  t: 0.3 },
  { src: "images/parental-advisory.jpg", t: 0.85 },
  { src: "images/written-directed.jpg",  t: 0.2 },
  { src: "images/true-story.jpg",        t: 0.75, fit: "contain" },
  { src: "images/life-of-a-starboy.png", t: 0.15 },
  { src: "images/2007.jpg",              t: 0.8 },
  { src: "images/crown.jpg",             t: 0.3 },
  { src: "images/diamond.jpg",           t: 0.85, fit: "contain" },

  { text: "For what is life but a fleeting moment, a chance to see it all, feel it all, but never to know it all. A minute under the sun, a second with loved ones..." },

  { button: "Next", href: "next-page.html" }
];
