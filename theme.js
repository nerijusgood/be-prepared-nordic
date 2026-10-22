/* Applies a saved light/dark choice before the page paints. Loaded in <head> on purpose. */
(function(){try{var t=localStorage.getItem('dk-ready-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
