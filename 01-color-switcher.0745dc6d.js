const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let r=null;t.addEventListener("click",(()=>{t.setAttribute("disabled",""),e.removeAttribute("disabled"),r=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{e.setAttribute("disabled",""),t.removeAttribute("disabled"),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.0745dc6d.js.map
