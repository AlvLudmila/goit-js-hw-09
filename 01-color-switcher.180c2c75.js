const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;t.addEventListener("click",(function(){n=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.querySelector("body").style.backgroundColor=t}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.180c2c75.js.map
