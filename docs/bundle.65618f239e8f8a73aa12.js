(()=>{"use strict";const e=document.getElementById("input"),t=document.getElementById("imagenes"),n=document.getElementById("no-resultados"),o=async()=>{const o=await(async()=>{t.innerHTML="";try{const t=e.value,s=await fetch((o=t,d="c_Xw0L2bBiZsQ4clEbqPue-JQPcBy-jSxRM6VPfsSZo",`https://api.unsplash.com/search/photos?query=${o}&per_page=30&client_id=${d}`));if(!s.ok)throw"No se ha podido realizar la conexión con el servidor";const{results:a}=await s.json();return 0===a.length?n.classList.remove("hidden"):n.classList.add("hidden"),e.value="",a}catch(e){console.log(e)}var o,d})(),d=[];o.forEach(((e,t)=>{d[t]=document.createElement("div"),d[t].classList.add("img"),d[t].style.backgroundImage=`url( ${e.urls.small} )`,d[t].addEventListener("dblclick",(()=>{window.open(e.links.download,"_blank")})),imagenes.appendChild(d[t])}))},d=document.getElementById("lupa");window.addEventListener("load",(()=>{const e=(new Date).getHours();e>7&&e<20?(document.body.style.backgroundColor="#fff",document.body.style.color="#121212"):(document.body.style.backgroundColor="#121212",document.body.style.color="#fff")})),input.addEventListener("keyup",(e=>{"Enter"===e.key&&o()})),d.addEventListener("click",(()=>{o()}))})();
//# sourceMappingURL=bundle.65618f239e8f8a73aa12.js.map