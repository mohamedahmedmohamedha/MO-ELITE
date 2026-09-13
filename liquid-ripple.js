(function(){
  'use strict';
  if(window.__VortexLiquidRipple)return;
  window.__VortexLiquidRipple=true;
  const STYLE_ID='vortex-liquid-ripple-style';
  const TARGET='button,a,[role="button"],input[type="button"],input[type="submit"],[data-action]';
  function inject(){
    if(document.getElementById(STYLE_ID))return;
    const s=document.createElement('style');s.id=STYLE_ID;
    s.textContent=`
      .vortex-liquid-ripple{position:relative;overflow:hidden;isolation:isolate;-webkit-tap-highlight-color:transparent}
      .vortex-ripple{position:absolute;z-index:2;pointer-events:none;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.20) 0%,rgba(255,255,255,.10) 30%,transparent 68%);transform:translate(-50%,-50%) scale(0);animation:vortexRipple .30s ease-out forwards}
      @keyframes vortexRipple{0%{transform:translate(-50%,-50%) scale(0);opacity:.7}100%{transform:translate(-50%,-50%) scale(1);opacity:0}}
      @media(hover:hover){.vortex-liquid-ripple:active{transform:translateY(1px)}}
      @media(prefers-reduced-motion:reduce){.vortex-ripple{animation:none!important;opacity:0!important}}`;
    document.head.appendChild(s);
  }
  function create(el,e){
    if(!el||!el.isConnected||el.disabled||el.getAttribute('aria-disabled')==='true'||el.dataset.noRipple==='true')return;
    const rect=el.getBoundingClientRect();
    const size=Math.max(rect.width,rect.height)*1.10;
    const x=(e.clientX??(rect.left+rect.width/2))-rect.left;
    const y=(e.clientY??(rect.top+rect.height/2))-rect.top;
    el.classList.add('vortex-liquid-ripple');
    const r=document.createElement('span');
    r.className='vortex-ripple';r.style.width=size+'px';r.style.height=size+'px';r.style.left=x+'px';r.style.top=y+'px';
    el.appendChild(r);
    r.addEventListener('animationend',()=>r.remove(),{once:true});
  }
  function init(){
    inject();
    document.addEventListener('pointerdown',e=>{
      if(e.pointerType==='mouse'&&e.button!==0)return;
      const el=e.target.closest?.(TARGET);
      create(el,e);
    },{passive:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
