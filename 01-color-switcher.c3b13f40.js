!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");var n=null;t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.c3b13f40.js.map
