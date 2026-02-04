/* =====================
   CODE_NINJA_194 - ENHANCED INTERACTIVITY
   Modern, smooth, and performant
===================== */

(function () {
  var _0x5f2e = "KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coIiVj8J+RiyBIZXkgdGhlcmUsIGZlbGxvdyBjb2RlciEg8J+agCIsICJmb250LXNpemU6IDIwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzY2N2VlYTsiKTsKICAgIGNvbnNvbGUubG9nKCIlY0xvb2tpbmcgZm9yIHNlY3JldHM/IFRyeSB0aGUgS29uYW1pIENvZGUhIOKshu+4j+Kshu+4j+Ksh++4j+Ksh++4j+Kshe+4j+Keoe+4j+Kshe+4j+Keoe+4jyBCIEEiLCAiZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzc2NGJhMjsiKTsKCiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJ2aXNpYmlsaXR5Y2hhbmdlIiwgKCkgPT4gewogICAgICAgIGRvY3VtZW50LnRpdGxlID0gZG9jdW1lbnQuaGlkZGVuID8gIkhleSwgY29tZSBiYWNrISDwn5GLIiA6ICJDb2RpbmcgUHJvZmlsZXMg4p2k77iPIjsKICAgIH0pOwoKICAgIGNvbnN0IHRoZW1lVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInRoZW1lVG9nZ2xlIik7CiAgICBjb25zdCBzdW5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiLnN1bi1pY29uIik7CiAgICBjb25zdCBtb29uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIi5tb29uLWljb24iKTsKCiAgICBjb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oInRoZW1lIik7CiAgICBpZiAoc2F2ZWRUaGVtZSA9PT0gImRhcmsiKSB7CiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCJkYXJrIik7CiAgICAgICAgaWYgKHN1bkljb24pIHN1bkljb24uY2xhc3NMaXN0LmFkZCgiaGlkZGVuIik7CiAgICAgICAgaWYgKG1vb25JY29uKSBtb29uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCJoaWRkZW4iKTsKICAgIH0KCiAgICBpZih0aGVtZVRvZ2dsZSkgewogICAgICAgIHRoZW1lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCkgPT4gewogICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoImRhcmsiKTsKICAgICAgICAgICAgY29uc3QgaXNEYXJrID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoImRhcmsiKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oInthoZW1lIiwgaXNEYXJrID8gImRhcmsiIDogImxpZ2h0Iik7CiAgICAgICAgICAgIGlmIChzdW5JY29uICYmIG1vb25JY29uKSB7CiAgICAgICAgICAgICAgICBpZiAoaXNEYXJrKSB7CiAgICAgICAgICAgICAgICAgICAgc3VuSWNvbi5jbGFzc0xpc3QuYWRkKCJoaWRkZW4iKTsKICAgICAgICAgICAgICAgICAgICBtb29uSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCJoaWRkZW4iKTsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgbW9vbkljb24uY2xhc3NMaXN0LmFkZCgiaGlkZGVuIik7CiAgICAgICAgICAgICAgICAgICAgc3VuSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCJoaWRkZW4iKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgfQoKICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7CiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHsKICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7CiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3R5bGUub3BhY2l0eSA9ICIxIjsKICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSAidHJhbnNsYXRlWSgwKSI7CiAgICAgICAgICAgIH0KICAgICAgICB9KTsKICAgIH0sIHsgdGhyZXNob2xkOiAwLjEsIHJvb3RNYXJnaW46ICIwcHggMHB4IC01MHB4IDBweCIgfSk7CgogICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigiRE9NQ29udGVudExvYWRlZCIsICgpID0+IHsKICAgICAgICBjb25zdCBwcm9maWxlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCIucHJvZmlsZS1saW5rIik7CiAgICAgICAgcHJvZmlsZUxpbmtzLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7CiAgICAgICAgICAgIGxpbmsuc3R5bGUub3BhY2l0eSA9ICIwIjsKICAgICAgICAgICAgbGluay5zdHlsZS50cmFuc2Zvcm0gPSAidHJhbnNsYXRlWSgyMHB4KSI7CiAgICAgICAgICAgIGxpbmsuc3R5bGUudHJhbnNpdGlvbiA9IGBvcGFjaXR5IDAuNXMgZWFzZSAke2luZGV4ICogMC4wNX1zLCB0cmFuc2Zvcm0gMC41cyBlYXNlICR7aW5kZXggKiAwLjA1fXNgOwogICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGxpbmspOwogICAgICAgIH0pOwogICAgfSk7CgogICAgLy8gTmF2YmFyIFNjcm9sbAogICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiLm5hdmJhciIpOwogICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInNjcm9sbCIsICgpID0+IHsKICAgICAgICBpZihuYXZiYXIpIHsKICAgICAgICAgICAgIG5hdmJhci5zdHlsZS5ib3hTaGFkb3cgPSB3aW5kb3cucGFnZVlPZmZzZXQgPiAxMDAgPyAiMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSkiIDogIm5vbmUiOwogICAgICAgIH0KICAgIH0pOwoKICAgIC8vIFBhcmFsbGF4CiAgICBjb25zdCBwcm9maWxlQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIi5wcm9maWxlLWNhcmQiKTsKICAgIGlmIChwcm9maWxlQ2FyZCkgewogICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJtb3VzZW1vdmUiLCAoZSkgPT4gewogICAgICAgICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGU7CiAgICAgICAgICAgIGNvbnN0IHhQZXJjZW50ID0gKGNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCAtIDAuNSkgKiAyOwogICAgICAgICAgICBjb25zdCB5UGVyY2VudCA9IChjbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0IC0gMC41KSAqIDI7CiAgICAgICAgICAgIHByb2ZpbGVDYXJkLnN0eWxlLnRyYW5zZm9ybSA9IGBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoJHt4UGVyY2VudCAqIDJ9ZGVnKSByb3RhdGVYKCR7LXlQZXJjZW50ICogMn1kZWcpYDsKICAgICAgICB9KTsKICAgICAgICBwcm9maWxlQ2FyZC5hZGRFdmVudExpc3RlbmVyKCJtb3VzZWxlYXZlIiwgKCkgPT4gewogICAgICAgICAgICBwcm9maWxlQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSAicGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVZKDBkZWcpIHJvdGF0ZVgoMGRlZykiOwogICAgICAgIH0pOwogICAgfQoKICAgIC8vIEtvbmFtaQogICAgY29uc3Qga29uYW1pQ29kZSA9IFsiQXJyb3dVcCIsICJBcnJvd1VwIiwgIkFycm93RG93biIsICJBcnJvd0Rvd24iLCAiQXJyb3dMZWZ0IiwgIkFycm93UmlnaHQiLCAiQXJyb3dMZWZ0IiwgIkFycm93UmlnaHQiLCAiYiIsICJhIl07CiAgICBsZXQga29uYW1pSW5kZXggPSAwOwogICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigia2V5ZG93biIsIChlKSA9PiB7CiAgICAgICAgaWYgKGUua2V5ID09PSBrb25hbWlDb2RlW2tvbmFtaUluZGV4XSkgewogICAgICAgICAgICBrb25hbWlJbmRleCsrOwogICAgICAgICAgICBpZiAoa29uYW1pSW5kZXggPT09IGtvbmFtaUNvZGUubGVuZ3RoKSB7CiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7CiAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBAa2V5ZnJhbWVzIHJhaW5ib3cgeyAwJSB7IGZpbHRlcjogaHVlLXJvdGF0ZSgwZGVnKTsgfSAxMDAlIHsgZmlsdGVyOiBodWUtcm90YXRlKDM2MGRlZyk7IH0gfWA7CiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTsKICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYW5pbWF0aW9uID0gInJhaW5ib3cgMnMgbGluZWFyIGluZmluaXRlIjsKICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuYm9keS5zdHlsZS5hbmltYXRpb24gPSAiIiwgNTAwMCk7CiAgICAgICAgICAgICAgICBrb25hbWlJbmRleCA9IDA7CiAgICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBrb25hbWlJbmRleCA9IDA7CiAgICAgICAgfQogICAgfSk7CgogICAgLy8gU2hvcnRjdXRzCiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsKICAgICAgICBpZiAoWydJTlBVVCcsICdURVhUQVJFQSddLmluY2x1ZGVzKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZSkpIHJldHVybjsKICAgICAgICAKICAgICAgICBzd2l0Y2goZS5rZXkudG9Mb3dlckNhc2UoKSkgewogICAgICAgICAgICBjYXNlICd0JzogCiAgICAgICAgICAgICAgICBpZih0aGVtZVRvZ2dsZSkgdGhlbWVUb2dnbGUuY2xpY2soKTsgCiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgY2FzZSAncCc6IHdpbmRvdy5vcGVuKCdodHRwczovL3ByYXNhZGNvZGV0ZWNoLTE5NC52ZXJjZWwuYXBwJywgJ19ibGFuaycpOyBicmVakcKICAgICAgICAgICAgY2FzZSAnbCc6IHdpbmRvdy5vcGVuKCdodHRwczovL2xlZXRjb2RlLmNvbS9TcmlfUmFtXzE5NC8nLCAnX2JsYW5rJyk7IGJyZWFrOwogICAgICAgICAgICBjYXNlICc7Jzogd2luZG93Lm9wZW4oJ2h0dHBzOi8vbGVldGNvZGUuY29tL3UvQ1QwMzc1LycsICdfYmxhbmsnKTsgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgJ2cnOiB3aW5kb3cub3BlbignaHR0cHM6Ly9hdXRoLmdlZWtzZm9yZ2Vla3Mub3JnL3VzZXIvc3JpcmFtYWR1c3VtaWxsaTk4L3ByYWN0aWNlJywgJ19ibGFuaycpOyBicmVhazsKICAgICAgICAgICAgY2FzZSAnYyc6IHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5jb2RlY2hlZi5jb20vdXNlcnMvY29kZV9uaW5qYV8xOTQnLCAnX2JsYW5rJyk7IGJyZWFrOwogICAgICAgICAgICBjYXNlICdvJzogd2luZG93Lm9wZW4oJ2h0dHBzOi8vY29kZWZvcmNlcy5jb20vcHJvZmlsZS9TcmlfcmFtX1ByYXNhZF8wMScsICdfYmxhbmsnKTsgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgJ2gnOiB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL0NvZGVuaW5qYS0xOTQnLCAnX2JsYW5rJyk7IGJyZWFrOwogICAgICAgICAgICBjYXNlICdtJzogCiAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1tdXNpYycpOwogICAgICAgICAgICAgICAgaWYoYXVkaW8pIGF1ZGlvLnBhdXNlZCA/IGF1ZGlvLnBsYXkoKSA6IGF1ZGlvLnBhdXNlKCk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICB9CiAgICB9KTsKCiAgICAvLyBRdW90ZXMKICAgIGNvbnN0IHF1b3RlcyA9IFsKICAgICAgIkl04oCZcyBub3QgdGhlIGxhbmd1YWdlIEkgdXNlLCBidXQgdGhlIHByb2JsZW1zIEkgc29sdmUgdGhhdCBkZWZpbmUgbWUuIiwKICAgICAgIkkgZG9u4oCZdCByZWx5IG9uIGZyYW1ld29ya3MgYWxvbmUg4oCUIEkgcmVseSBvbiBsb2dpYy4iLAogICAgICAiVGhlIGNvZGUgZG9lc27igJl0IG1ha2UgbWUgcG93ZXJmdWwuIERpc2NpcGxpbmUgZG9lcy4iLAogICAgICAiQW55b25lIGNhbiB3cml0ZSBjb2RlLiBDb25zaXN0ZW5jeSBtYWtlcyBhbiBlbmdpbmVlci4iLAogICAgICAiSSBkZWJ1ZyBpbiBzaWxlbmNlLCBzbyBteSBzb2x1dGlvbnMgY2FuIHNwZWFrLiIsCiAgICAgICJGZWFyIGlzIHRlbXBvcmFyeS4gQ2xlYW4gbG9naWMgaXMgcGVybWFuZW50LiIsCiAgICAgICJJIGJlY2FtZSBhIGRldmVsb3BlciB0aGUgbW9tZW50IEkgcmVmdXNlZCB0byBxdWl0LiIsCiAgICAgICJJIGFtIG5vdCBqdXN0IGEgZGV2ZWxvcGVyIOKAlCBJIGFtIGluZXZpdGFibGUuIiwKICAgICAgIlNvbWV0aW1lcyB5b3UgaGF2ZSB0byBicmVhayB0aGUgY29kZeKApiB0byByZWJ1aWxkIGl0IGJldHRlci4iLAogICAgICAiV2UgZG9u4oCZdCB0cmFkZSBsb2dpYy4gV2Ugc29sdmUgaXQuIiwKICAgICAgIlRoYXTigJlzIG15IHNlY3JldCDigJQgSeKAmW0gYWx3YXlzIGRlYnVnZ2luZy4iLAogICAgICAiSWYgeW914oCZcmUgbm90aGluZyB3aXRob3V0IHByb2JsZW0tc29sdmluZywgeW91IHNob3VsZG7igJl0IGhhdmUgdGhlIGNvZGUuIiwKICAgICAgIk9uZSBidWcsIG9uZSBmaXgsIHdoYXRldmVyIGl0IHRha2VzLiIsCiAgICAgICJUb2dldGhlciB3ZSBzaGlwLiBBbG9uZSB3ZSBkZWJ1Zy4iCiAgICBdOwogICAgY29uc3QgcXVvdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJkYWlseS1xdW90ZSIpOwogICAgaWYgKHF1b3RlRWwpIHsKICAgICAgICAgcXVvdGVFbC50ZXh0Q29udGVudCA9IGAiJHtxdW90ZXNbbmV3IERhdGUoKS5nZXREYXRlKCkgJSBxdW90ZXMubGVuZ3RoXX0iYDsKICAgIH0KfSkoKTs=";
  eval(decodeURIComponent(escape(window.atob(_0x5f2e))));
})();

/* =====================
   ADVANCED VISUAL EFFECTS LOGIC
===================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Preloader Removal
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
      }, 800);
    });
  }

  // 2. Custom Cursor Stalker
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Small dot follows mouse exactly
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Large outline follows with a slight smooth delay
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: 'forwards' });
    });

    // Hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .profile-circle, .music-disc, .social-icon, .hire-badge, #terminalInput');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // 3. Scroll Progress Bar
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }
});

/* =====================
   TERMINAL COMMANDS LOGIC
===================== */

const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.querySelector('.terminal-output');
const terminalBody = document.getElementById('terminalBody');

if (terminalInput) {
  const commands = {
    help: "Available commands: [about, skills, projects, contact, clear, date, whoami]",
    about: "Sri Ram Prasad Adusumilli: A Technical Educator & Developer passionate about solving complex logic and building clean MERN stack apps.",
    skills: "Frontend: React, Next.js, CSS3 | Backend: Node.js, Express, MongoDB | Languages: JavaScript, Python, C++, Java.",
    projects: "Current Project: CodeArena (Online Compiler). Check out more at: https://prasadcodetech-194.vercel.app",
    contact: "Email: sriramadusumilli98@gmail.com | LinkedIn: /in/sri-ram-prasad-adusumilli",
    whoami: "guest@codeninja-194: You are a curious developer exploring the CodeNinja OS.",
    date: new Date().toString(),
    clear: "clear"
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const input = terminalInput.value.trim().toLowerCase();
      terminalInput.value = '';

      if (input === '') return;

      // Echo command
      const echo = document.createElement('p');
      echo.className = 'cmd-echo';
      echo.innerHTML = `<span class="prompt">guest@codeninja-194:~$</span> ${input}`;
      terminalOutput.appendChild(echo);

      const response = document.createElement('p');
      response.className = 'cmd-response';

      if (commands[input]) {
        if (input === 'clear') {
          terminalOutput.innerHTML = '';
        } else {
          response.textContent = commands[input];
          terminalOutput.appendChild(response);
        }
      } else {
        response.className = 'cmd-error';
        response.textContent = `Command not found: ${input}. Type 'help' for assistance.`;
        terminalOutput.appendChild(response);
      }

      // Scroll to bottom
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });

  // Focus input when clicking terminal
  terminalBody.addEventListener('click', () => {
    terminalInput.focus();
  });

  // Minimize functionality
  const minimizeBtn = document.querySelector('.btn-dot.minimize');
  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', () => {
      terminalBody.style.display = terminalBody.style.display === 'none' ? 'block' : 'none';
      if (terminalBody.style.display === 'block') {
        terminalInput.focus();
      }
    });
  }
}