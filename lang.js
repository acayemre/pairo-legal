// Shows the Turkish or English article: ?lang=tr|en, then the browser language.
(function(){var q=new URLSearchParams(location.search).get('lang');var l=q||((navigator.language||'en').toLowerCase().indexOf('tr')===0?'tr':'en');
function set(x){document.querySelectorAll('article[lang]').forEach(function(a){a.classList.toggle('show',a.getAttribute('lang')===x)});document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===x)});document.documentElement.lang=x}
document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){set(b.dataset.l)}});set(l)})();
