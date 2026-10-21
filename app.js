(function(){
  var DA={
    skip:'Hop til indhold',
    eyebrow:'Beredskab derhjemme &middot; Danmark',a2hs:'Tilføj til telefon',
    unit:'dages beredskab derhjemme',
    lead:'De danske myndigheder anbefaler, at alle hjem kan klare sig selv i 3 døgn i en krise. Det er hele planen. Resten af siden viser, hvad der skal til.',
    day:'Dag',water:'Vand',food:'Mad',nocook:'ingen madlavning',medicine:'Medicin',oneday:'1 dag',power:'Strøm',pbank:'powerbank',
    alone:'I er på egen hånd',alone2:'Hjælpen går først til dem, der har mest brug for den',
    yn:'Jeres tal',howmuch:'Hvor meget skal vi bruge?',people:'Personer i hjemmet (kæledyr skal også have vand)',
    s1:'drikkevand til 3 døgn',s2:'måltider uden køleskab eller komfur',s3:'flasker à 1,5 L',threedays:'3 dage',s4:'medicin til hver person',
    example:'Eksempel: starter ved 2 personer. Flyt skyderen, så det passer til jer.',
    bottlehead:'Hver flaske er 1,5 L &middot; 6 flasker pr. person',
    yk:'Jeres beredskab',eight:'Otte ting at have hjemme',
    ticks:'Flueben gemmes kun på denne enhed. Køb lidt ekstra, hver gang I handler, og brug af lageret løbende, så er det billigt og friskt.',
    ifhappens:'Hvis noget sker',siren:'Når sirenen lyder',step:'Trin',
    st1h:'Gå indendørs',st1p:'Kom indenfor og bliv inde. Luk vinduer og døre.',
    st2h:'Find information',st2p:'Lyt til nyhederne. En radio med batteri eller håndsving virker, også når internettet er nede.',
    st3h:'Følg rådene',st3p:'Gør, som myndighederne siger. Tjek kilden, før du deler nyheder, så rygter ikke spredes.',
    gtk:'Godt at vide',three:'Tre hurtige fakta',
    f1h:'Jodtabletter',f1b:'Under 40 år',f1p:'Også til gravide og ammende. Kun ved en atomulykke. Bliv indendørs og følg myndighedernes anvisninger.',f1n:'Aldersgrupper op til 40 år er markeret',
    f2h:'Madlavning uden strøm',f2b:'Kun udendørs',f2p:'Et campingkomfur eller en grill kan koge vand. Brug det aldrig indendørs eller i lukkede rum. Røg og kulilte er farligt.',
    f3h:'Ring 112',f3b:'Kun ved nødsituationer',f3p:'Hold linjen fri til livstruende opkald. Hvis 112 er nede, melder myndighederne andre numre ud.',
    foot:'Baseret på de officielle danske råd til husstande. Brug beregneren og tjeklisten på <a href="https://samsik.dk" target="_blank" rel="noopener">samsik.dk</a> til jeres præcise behov. Ikke medicinsk rådgivning.',
    src:'Kilder:',
    dT:'Tilføj til din telefon',dP:'Læg siden på din hjemmeskærm. Den åbner som en app og virker også uden internet.',
    i1:'Åbn siden i Safari.',
    i2:'Tryk på Del-knappen <svg class="inl" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Del"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M5 12v8h14v-8"/></svg> nederst eller øverst på skærmen.',
    i3:'Rul ned og tryk på <kbd>Føj til hjemmeskærm</kbd>.',i4:'Tryk på <kbd>Tilføj</kbd>.',
    a1:'Åbn siden i Chrome.',a2:'Tryk på menuen <kbd>⋮</kbd> øverst til højre.',
    a3:'Tryk på <kbd>Føj til startskærm</kbd> eller <kbd>Installer app</kbd>.',a4:'Tryk på <kbd>Installer</kbd> eller <kbd>Tilføj</kbd>.',
    coffeeH:'Kan du lide projektet?',coffeeP:'Så giv mig en kop kaffe. Siden er lavet på koffein, og dåsebønnerne var ikke gratis.',coffeeB:'Giv mig en kop kaffe',
    gearH:'Har du udstyr til dem, der har brug for det?',gearP:'Laver eller sælger du walkie-talkies, powerbanks eller solcelleopladere? Tilbyd rabat til folk i nød og skriv til mig. Jeg deler gerne gode tilbud her. Jeg sælger ikke noget på denne side.',gearB:'Kontakt mig',
    footContact:'Har du forslag? Leder du efter billigere overlevelsesudstyr? Kontakt',privacyLink:'Privatliv',
    cT:'Kontakt',cP:'Forslag, tips til udstyr og tilbud fra butikker og virksomheder er meget velkomne.',
    fSubject:'Hvad drejer det sig om?',optPick:'Vælg et emne',
    o1:'Forslag til forbedring',o2:'Hvor kan jeg købe overlevelsesudstyr billigere?',o3:'Jeg har et rabattilbud (butik eller mærke)',
    o4:'Jeg er en virksomhed og vil gerne bidrage',o5:'Rettelse til rådene',o6:'Privatlivsanmodning (se eller slet mine data)',o7:'Noget andet',
    fName:'Navn',optional:'(valgfrit)',fEmail:'Din e-mail (så jeg kan svare)',fMsg:'Besked',
    fConsent:'Jeg accepterer, at min besked og e-mail gemmes, så du kan svare mig.',privacyLink2:'Læs privatlivsoplysningerne',
    send:'Send',cOk:'Tak! Din besked er sendt.',
    e1:'For mange beskeder. Prøv igen senere.',e2:'Tjek formularen og prøv igen.',e3:'Beskeden kunne ikke sendes. Prøv igen senere.',e4:'Sender...',
    pT:'Privatlivsoplysninger',
    p1h:'Hvem jeg er',p1:'Jeg er Nerijus Gudas, en privatperson i Danmark. Siden er et personligt projekt. Du kan kontakte mig via kontaktformularen (emne: Privatlivsanmodning).',
    p2h:'Hvad jeg gemmer',p2:'Når du bruger formularen: emnet, dit navn (hvis du angiver det), din e-mail, din besked, sproget og tidspunktet for afsendelsen.',
    p3h:'Hvorfor, og på hvilket grundlag',p3:'For at læse din besked og svare dig. Grundlaget er dit samtykke (afkrydsningsfeltet). Du kan til enhver tid trække det tilbage.',
    p4h:'Hvor det opbevares',p4:'I et privat Google Sheet. Google behandler det for mig. Siden hostes hos Vercel, som kan se din IP-adresse i almindelige serverlogs.',
    p5h:'Hvor længe',p5:'Op til 12 måneder, derefter sletter jeg det. Før, hvis du beder om det.',
    p6h:'Dine rettigheder',p6:'Du kan bede om at se, rette eller slette dine data. Du kan også klage til Datatilsynet (datatilsynet.dk).',
    p7h:'På din enhed',p7:'Siden husker dit sprog og dine afkrydsninger kun på din egen enhed. Det sendes aldrig til mig. Der er ingen cookies, ingen statistik og ingen sporing. Skrifttyper hostes på denne side.',
    p8h:'Andre sider',p8:'Kaffeknappen åbner Buy Me a Coffee, en separat tjeneste med egne regler.',
    installNow:'Installer nu',close:'Luk'
  };
  var DESC={en:document.querySelector('meta[name=description]').getAttribute('content'),
    da:'Vær klar derhjemme i 3 døgn. En enkel guide til de officielle danske råd: vand, mad, medicin, strøm og hvad du gør, når sirenen lyder. På dansk og engelsk.'};
  var EN={},nodes=document.querySelectorAll('[data-t]');
  nodes.forEach(function(el){EN[el.getAttribute('data-t')]=el.innerHTML;});
  EN.e1='Too many messages. Please try again later.';EN.e2='Please check the form and try again.';EN.e3='Could not send your message. Please try again later.';EN.e4='Sending...';

  var icons={
    water:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    food:'<path d="M4 11h16l-1.5 8h-13z"/><path d="M8 11c0-3 1.5-5 4-5s4 2 4 5"/>',
    med:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/>',
    hyg:'<path d="M7 3h10v4H7z"/><path d="M6 7h12v14H6z"/><path d="M10 12h4"/>',
    warm:'<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
    power:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    cash:'<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 15h4"/>',
    radio:'<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8l10-5"/><circle cx="9" cy="14" r="2.5"/><path d="M15 12h3M15 16h3"/>'
  };
  var cats=[
    {id:'water',c:'',en:{t:'Water',tag:'3 L per person per day',i:['9 L per person for 3 days','Bottled, or tap water in clean sealed food containers','Water for pets']},
      da:{t:'Vand',tag:'3 L pr. person pr. dag',i:['9 L pr. person i 3 døgn','På flaske, eller postevand i rene, lukkede madbeholdere','Vand til kæledyr']}},
    {id:'food',c:'o',en:{t:'Food',tag:'3 days',i:['Food that keeps without a fridge','Needs no oven or hob (tins, crispbread)','Things your family already eats','A camping stove to boil water (outside only)']},
      da:{t:'Mad',tag:'3 dage',i:['Mad, der kan holde sig uden køleskab','Skal ikke varmes i ovn eller på komfur (dåsemad, knækbrød)','Mad, som familien allerede spiser','Et campingkomfur til at koge vand (kun udendørs)']}},
    {id:'med',c:'r',en:{t:'Medicine and first aid',tag:'3 days',i:['3 days of regular medicine for everyone','Plasters, dressings, bandages','Wound cleaner and disinfectant','Iodine tablets (under 40, pregnant or breastfeeding)']},
      da:{t:'Medicin og førstehjælp',tag:'3 dage',i:['3 dages fast medicin til alle','Plastre, forbindinger, bandager','Sårrens og desinfektion','Jodtabletter (under 40 år, gravide eller ammende)']}},
    {id:'hyg',c:'',en:{t:'Hygiene',tag:'',i:['Toilet paper','Wet wipes and hand sanitiser','Sanitary products','Nappies, baby formula if needed']},
      da:{t:'Hygiejne',tag:'',i:['Toiletpapir','Vådservietter og håndsprit','Menstruationsbeskyttelse','Bleer og modermælkserstatning, hvis det er nødvendigt']}},
    {id:'warm',c:'y',en:{t:'Warmth',tag:'',i:['Blankets and duvets','Warm clothes','Candles on a solid surface, away from curtains','Plan to stay mostly in one room']},
      da:{t:'Varme',tag:'',i:['Tæpper og dyner','Varmt tøj','Stearinlys på et fast underlag, væk fra gardiner','Hold jer mest i ét rum']}},
    {id:'power',c:'y',en:{t:'Power and light',tag:'',i:['Power bank for phones','Torch','Spare batteries','Matches']},
      da:{t:'Strøm og lys',tag:'',i:['Powerbank til mobiler','Lommelygte','Ekstra batterier','Tændstikker']}},
    {id:'cash',c:'o',en:{t:'Cash and cards',tag:'',i:['Some coins and small notes','A physical bank card','Know your PIN by heart','Key phone numbers on paper']},
      da:{t:'Kontanter og kort',tag:'',i:['Lidt mønter og små sedler','Et fysisk betalingskort','Kend din pinkode udenad','Vigtige telefonnumre på papir']}},
    {id:'radio',c:'r',en:{t:'Radio and news',tag:'FM',i:['Battery, wind-up or solar FM radio (a car radio can work)','Plan to listen to DR or TV 2','Know where your nearest neighbours are']},
      da:{t:'Radio og nyheder',tag:'FM',i:['Radio med FM og batteri, håndsving eller solcelle (en bilradio kan også bruges)','Lyt til DR eller TV 2','Kend dine nærmeste naboer']}}
  ];
  var lang='en',store={},total=0;
  try{store=JSON.parse(localStorage.getItem('dk-ready-kit')||'{}')||{}}catch(e){store={}}
  try{var sl=localStorage.getItem('dk-ready-lang');if(sl==='da'||sl==='en')lang=sl;else if((navigator.language||'').toLowerCase().indexOf('da')===0)lang='da';}catch(e){}

  var kit=document.getElementById('kit');
  function renderKit(){
    total=0;kit.innerHTML='';
    cats.forEach(function(c){
      var d=c[lang],hid='h-'+c.id,el=document.createElement('div');el.className='cat '+c.c;
      el.setAttribute('role','group');el.setAttribute('aria-labelledby',hid);
      var h='<header><div class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+icons[c.id]+'</svg></div><h3 id="'+hid+'">'+d.t+'</h3>'+(d.tag?'<span class="tag">'+d.tag+'</span>':'')+'</header><ul>';
      d.i.forEach(function(t,n){total++;var id='k-'+c.id+'-'+n;
        h+='<li><label><input type="checkbox" id="'+id+'"'+(store[id]?' checked':'')+'><span>'+t+'</span></label></li>';});
      el.innerHTML=h+'</ul>';kit.appendChild(el);
    });
    prog();
  }
  function prog(){
    var n=0;kit.querySelectorAll('input').forEach(function(b){if(b.checked)n++;});
    document.getElementById('progBar').style.width=(total?n/total*100:0)+'%';
    document.getElementById('progTxt').textContent=n+(lang==='da'?' af ':' of ')+total+(lang==='da'?' klar':' ready');
  }
  kit.addEventListener('change',function(e){
    if(e.target.type==='checkbox'){store[e.target.id]=e.target.checked;
      try{localStorage.setItem('dk-ready-kit',JSON.stringify(store))}catch(x){}
      prog();}
  });

  var range=document.getElementById('people');
  var bottleSvg='<svg viewBox="0 0 20 44" aria-hidden="true"><rect x="7" y="1" width="6" height="5" rx="1.5" fill="var(--muted)"/><path d="M6 8h8c2 2 3 4 3 7v24a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V15c0-3 1-5 3-7z" fill="var(--water-soft)" stroke="var(--water)" stroke-width="1.5"/><path d="M3.8 21h12.4v18a2 2 0 0 1-2 2H5.8a2 2 0 0 1-2-2z" fill="var(--water)"/></svg>';
  function calc(){
    var p=+range.value,L=p*9,b=Math.ceil(L/1.5),s='';
    document.getElementById('peopleOut').textContent=p;
    document.getElementById('litres').textContent=L+' L';
    document.getElementById('meals').textContent=p*9;
    document.getElementById('bottleN').textContent=b;
    for(var i=0;i<b;i++)s+='<span class="bottle">'+bottleSvg+'</span>';
    document.getElementById('bottles').innerHTML=s;
    var da=lang==='da';
    range.setAttribute('aria-valuetext',p+(da?(p===1?' person':' personer'):(p===1?' person':' people')));
    document.getElementById('bottleCap').textContent=da
      ? p+(p===1?' person':' personer')+' × 3 L × 3 dage = '+L+' liter ('+b+' flasker). Læg mere til for kæledyr.'
      : p+(p===1?' person':' people')+' × 3 L × 3 days = '+L+' litres ('+b+' bottles). Add more for pets.';
  }
  range.addEventListener('input',calc);

  var meta=document.querySelector('meta[name=description]');
  function setLang(l,save){
    lang=l;document.documentElement.lang=l;
    var dict=l==='da'?DA:EN;
    nodes.forEach(function(el){var k=el.getAttribute('data-t');if(dict[k]!=null)el.innerHTML=dict[k];});
    document.getElementById('b-da').setAttribute('aria-pressed',l==='da');
    document.getElementById('b-en').setAttribute('aria-pressed',l==='en');
    document.querySelector('.days').setAttribute('aria-label',l==='da'?'Hvad én person har brug for hver dag':'What one person needs each day');
    document.getElementById('a2hsX').setAttribute('aria-label',l==='da'?'Luk':'Close');
    ['cX','pX'].forEach(function(id){document.getElementById(id).setAttribute('aria-label',l==='da'?'Luk':'Close');});
    document.title=l==='da'?'Klar i Danmark':'Denmark Ready Kit';
    meta.setAttribute('content',DESC[l]);
    renderKit();calc();
    if(save){try{localStorage.setItem('dk-ready-lang',l)}catch(e){}}
  }
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click',function(){setLang(b.getAttribute('data-l'),true);});
  });
  setLang(lang,false);

  /* add to home screen */
  var dlg=document.getElementById('a2hs'),btn=document.getElementById('a2hsBtn'),inst=document.getElementById('installNow'),deferred=null;
  function openDlg(){ if(dlg.showModal){dlg.showModal();}else{dlg.setAttribute('open','');} }
  function closeDlg(){ if(dlg.close){dlg.close();}else{dlg.removeAttribute('open');} btn.focus(); }
  btn.addEventListener('click',openDlg);
  document.getElementById('a2hsX').addEventListener('click',closeDlg);
  document.getElementById('a2hsClose').addEventListener('click',closeDlg);
  dlg.addEventListener('click',function(e){if(e.target===dlg)closeDlg();});
  window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferred=e;inst.hidden=false;});
  inst.addEventListener('click',function(){
    if(!deferred)return;
    deferred.prompt();
    deferred.userChoice.then(function(){deferred=null;inst.hidden=true;closeDlg();});
  });
  window.addEventListener('appinstalled',function(){btn.hidden=true;});
  try{ if(window.matchMedia('(display-mode: standalone)').matches||navigator.standalone)btn.hidden=true; }catch(e){}


  /* contact + privacy dialogs */
  function T(k){return (lang==='da'?DA:EN)[k];}
  function openD(d){ if(d.showModal){d.showModal();}else{d.setAttribute('open','');} }
  function closeD(d){ if(d.close){d.close();}else{d.removeAttribute('open');} }
  var cDlg=document.getElementById('contactDlg'),pDlg=document.getElementById('privacyDlg'),cForm=document.getElementById('cForm');
  var cSubject=document.getElementById('cSubject'),cName=document.getElementById('cName'),cEmail=document.getElementById('cEmail'),
      cMsg=document.getElementById('cMsg'),cConsent=document.getElementById('cConsent'),cWebsite=document.getElementById('cWebsite'),
      cErr=document.getElementById('cErr'),cOk=document.getElementById('cOk'),cSend=document.getElementById('cSend'),cCount=document.getElementById('cCount');
  var openedAt=0;
  [cDlg,pDlg].forEach(function(d){d.addEventListener('click',function(e){if(e.target===d)closeD(d);});});
  function setErr(m){cErr.textContent=m||'';cErr.hidden=!m;}
  function openContact(subject){
    cForm.reset();setErr('');cOk.hidden=true;cSend.hidden=false;cSend.disabled=false;cCount.textContent='0 / 1500';
    if(subject)cSubject.value=subject;
    openedAt=Date.now();openD(cDlg);
  }
  document.getElementById('openContact').addEventListener('click',function(){openContact();});
  document.getElementById('gearContact').addEventListener('click',function(){openContact('offer');});
  document.getElementById('cX').addEventListener('click',function(){closeD(cDlg);});
  document.getElementById('cClose').addEventListener('click',function(){closeD(cDlg);});
  document.getElementById('openPrivacy').addEventListener('click',function(){openD(pDlg);});
  document.getElementById('cPriv').addEventListener('click',function(){openD(pDlg);});
  document.getElementById('pX').addEventListener('click',function(){closeD(pDlg);});
  document.getElementById('pClose').addEventListener('click',function(){closeD(pDlg);});
  cMsg.addEventListener('input',function(){cCount.textContent=cMsg.value.length+' / 1500';});
  cForm.addEventListener('submit',function(ev){
    ev.preventDefault();setErr('');
    if(!cForm.checkValidity()){cForm.reportValidity();return;}
    var payload={subject:cSubject.value,name:cName.value,email:cEmail.value,message:cMsg.value,consent:cConsent.checked,
      website:cWebsite.value,elapsed:Date.now()-openedAt,lang:lang};
    var label=cSend.firstElementChild;cSend.disabled=true;label.textContent=T('e4');
    fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
      .then(function(r){return r.json().catch(function(){return {};}).then(function(j){return {status:r.status,ok:!!(r.ok&&j&&j.ok)};});})
      .then(function(res){
        if(res.ok){cForm.reset();cCount.textContent='0 / 1500';cSend.hidden=true;cOk.hidden=false;cOk.setAttribute('tabindex','-1');cOk.focus();}
        else{setErr(res.status===429?T('e1'):(res.status===400?T('e2'):T('e3')));cSend.disabled=false;}
      })
      .catch(function(){setErr(T('e3'));cSend.disabled=false;})
      .then(function(){label.textContent=T('send');});
  });

  /* offline support */
  if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
    window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});
  }
})();
