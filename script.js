/* =====================
   TAB VISIBILITY TITLE
===================== */
document.addEventListener("visibilitychange", () => {
  document.title = document.hidden
    ? "Hey, come back! : ("
    : "CodeNinja ❤️";
});

/* =====================
   QUOTE OF THE DAY
===================== */
const quotes = [
  "It’s not the language I use, but the problems I solve that define me.",
  "I don’t rely on frameworks alone — I rely on logic.",
  "The code doesn’t make me powerful. Discipline does.",
  "Anyone can write code. Consistency makes an engineer.",
  "I debug in silence, so my solutions can speak.",
  "Fear is temporary. Clean logic is permanent.",
  "I became a developer the moment I refused to quit.",
  "I am not just a developer — I am inevitable.",
  "Sometimes you have to break the code… to rebuild it better.",
  "We don’t trade logic. We solve it.",
  "That’s my secret — I’m always debugging.",
  "If you’re nothing without problem-solving, you shouldn’t have the code.",
  "One bug, one fix, whatever it takes.",
  "Together we ship. Alone we debug."
];

const today = new Date().getDate();
const quoteEl = document.getElementById("daily-quote");
if (quoteEl) {
  quoteEl.textContent = `"${quotes[today % quotes.length]}"`;
}

/* =====================
   DARK MODE TOGGLE
===================== */
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

/* ===================== BACKGROUND MUSIC ===================== */
const bgMusic = document.getElementById("bg-music");
const musicDisc = document.querySelector(".music-disc");

bgMusic.volume = 0.15; // soft music
let isPlaying = false;
let clickTimer = null;

/* SINGLE CLICK → PLAY */
document.addEventListener("click", () => {
  if (clickTimer) return;

  clickTimer = setTimeout(() => {
    if (!isPlaying) {
      bgMusic.play().catch(() => {});
      isPlaying = true;

      if (musicDisc) {
        musicDisc.style.animationPlayState = "running";
      }
    }
    clickTimer = null;
  }, 250); // wait to detect double click
});

/* DOUBLE CLICK → STOP */
document.addEventListener("dblclick", () => {
  if (clickTimer) {
    clearTimeout(clickTimer);
    clickTimer = null;
  }

  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;

    if (musicDisc) {
      musicDisc.style.animationPlayState = "paused";
    }
  }
});