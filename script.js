/* =====================
   CODE_NINJA_194 - ENHANCED INTERACTIVITY
===================== */

(function () {
  console.log("%cHey there, fellow coder!", "font-size: 20px; font-weight: bold; color: #667eea;");
  console.log("%cLooking for secrets? Try the Konami Code! (Up, Up, Down, Down, Left, Right, Left, Right, B, A)", "font-size: 14px; color: #764ba2;");

  const themeToggle = document.getElementById("themeToggle");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  const musicDiscButton = document.querySelector(".music-disc");
  const originalTitle = document.title;
  const openExternal = (url) => window.open(url, "_blank", "noopener,noreferrer");

  const toggleMusicPlayback = () => {
    const audio = document.getElementById("bg-music");
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {
        // Playback can fail without a user gesture. This keeps errors out of console noise.
      });
    } else {
      audio.pause();
    }
  };

  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "Hey, come back!" : originalTitle;
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (sunIcon) sunIcon.classList.add("hidden");
    if (moonIcon) moonIcon.classList.remove("hidden");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      if (sunIcon && moonIcon) {
        if (isDark) {
          sunIcon.classList.add("hidden");
          moonIcon.classList.remove("hidden");
        } else {
          moonIcon.classList.add("hidden");
          sunIcon.classList.remove("hidden");
        }
      }
    });
  }

  if (musicDiscButton) {
    musicDiscButton.addEventListener("click", toggleMusicPlayback);
  }

  const animatedItems = document.querySelectorAll(".profile-circle");
  if (animatedItems.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    animatedItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
      observer.observe(item);
    });
  }

  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.style.boxShadow = window.pageYOffset > 100 ? "0 4px 16px rgba(0, 0, 0, 0.1)" : "none";
    }
  });

  const profileCard = document.querySelector(".profile-image-container");
  if (profileCard) {
    window.addEventListener("mousemove", (event) => {
      const xPercent = (event.clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (event.clientY / window.innerHeight - 0.5) * 2;
      profileCard.style.transform = `perspective(1000px) rotateY(${xPercent * 2}deg) rotateX(${-yPercent * 2}deg)`;
    });

    profileCard.addEventListener("mouseleave", () => {
      profileCard.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    });
  }

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let konamiIndex = 0;

  document.addEventListener("keydown", (event) => {
    if (event.key === konamiCode[konamiIndex]) {
      konamiIndex += 1;
      if (konamiIndex === konamiCode.length) {
        const style = document.createElement("style");
        style.textContent = "@keyframes rainbow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }";
        document.head.appendChild(style);
        document.body.style.animation = "rainbow 2s linear infinite";
        setTimeout(() => {
          document.body.style.animation = "";
        }, 5000);
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    switch (event.key.toLowerCase()) {
      case "t":
        if (themeToggle) themeToggle.click();
        break;
      case "p":
        openExternal("https://prasadcodetech-194.vercel.app");
        break;
      case "l":
        openExternal("https://leetcode.com/Sri_Ram_194/");
        break;
      case ";":
        openExternal("https://leetcode.com/u/CT0375/");
        break;
      case "g":
        openExternal("https://auth.geeksforgeeks.org/user/sriramadusumilli98/practice");
        break;
      case "c":
        openExternal("https://www.codechef.com/users/code_ninja_194");
        break;
      case "o":
        openExternal("https://codeforces.com/profile/Sri_ram_Prasad_01");
        break;
      case "h":
        openExternal("https://github.com/Codeninja-194");
        break;
      case "m":
        toggleMusicPlayback();
        break;
      default:
        break;
    }
  });

  const quotes = [
    "It's not the language I use, but the problems I solve that define me.",
    "I don't rely on frameworks alone - I rely on logic.",
    "The code doesn't make me powerful. Discipline does.",
    "Anyone can write code. Consistency makes an engineer.",
    "I debug in silence, so my solutions can speak.",
    "Fear is temporary. Clean logic is permanent.",
    "I became a developer the moment I refused to quit.",
    "I am not just a developer - I am inevitable.",
    "Sometimes you have to break the code to rebuild it better.",
    "We don't trade logic. We solve it.",
    "That's my secret - I'm always debugging.",
    "If you're nothing without problem-solving, you shouldn't have the code.",
    "One bug, one fix, whatever it takes.",
    "Together we ship. Alone we debug.",
  ];

  const quoteElement = document.getElementById("daily-quote");
  if (quoteElement) {
    quoteElement.textContent = `"${quotes[new Date().getDate() % quotes.length]}"`;
  }
})();
