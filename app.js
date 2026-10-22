(function(){
  var DA={
    skip:'Hop til indhold',
    eyebrow:'Beredskab derhjemme &middot; Danmark',a2hs:'Tilføj til telefon',
    unit:'dages beredskab derhjemme',
    lead:'De danske myndigheder anbefaler, at alle hjem kan klare sig selv i 3 døgn i en krise. Det er hele planen. Resten af siden viser, hvad der skal til.',
    day:'Dag',water:'Vand',food:'Mad',nocook:'ingen madlavning',medicine:'Medicin',oneday:'1 dag',power:'Strøm',pbank:'powerbank',
    alone:'I er på egen hånd',alone2:'Hjælpen går først til dem, der har mest brug for den',
    yn:'Jeres tal',howmuch:'Hvor meget skal vi bruge?',people:'Personer i hjemmet',pets:'Kæledyr (hund eller kat) &middot; ca. 1 L vand om dagen hver',
    s1:'drikkevand til 3 døgn',s2:'måltider uden køleskab eller komfur',s3:'flasker à 1,5 L',threedays:'3 dage',s4:'medicin til hver person',
    example:'Eksempel: starter ved 2 personer. Flyt skyderen, så det passer til jer.',
    bottlehead:'Hver flaske er 1,5 L &middot; 6 flasker pr. person',
    yk:'Jeres beredskab',eight:'Ni ting at have hjemme',toneDog:'Labrador',toneMid:'Mor og far',toneNerd:'Nørd',
    ticks:'Flueben gemmes kun på denne enhed. Køb lidt ekstra, hver gang I handler, og brug af lageret løbende, så er det billigt og friskt.',
    whyE:'Hvorfor denne side findes',whyH:'Det er tirsdag. Strømmen er gået.',whyP:'<span class="m-stop">Opvaskemaskinen stopper midt i det hele</span>. Køleskabet <span class="m-odd">brummer mærkeligt, og så slet ikke</span>. <span class="m-dark">Lyset på routeren går ud</span>. Telefonen siger <span class="m-num">23 %</span>. I supermarkedet viser kortterminalen en fejl, og køen rører sig ikke. Ingen ved, om det varer en time eller en uge. Myndighederne beder om én ting: at hvert hjem kan klare sig selv i <span class="m-key">3 døgn</span>, så hjælpen kan gå først til sygehuset, plejehjemmet og dem, der virkelig har brug for den. Det er hele idéen bag denne side. Ikke bunkere. Ikke tårne af dåsemad. Lidt i skabet og en plan, du kan forklare din svigermor.',
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

  var TONE_TEXT={en:{dog:{lead:'WATER. FOOD. FRIENDS. The humans in charge say every home must manage alone for 3 days. That is the whole plan. Everything below is the list. Good list. Very good list.',whyH:'It is Tuesday. The humming stopped.',whyP:'The <span class="m-stop">food machine went quiet</span>. The <span class="m-dark">glowing box went dark</span>. The humans are poking their phones and the <span class="m-odd">phones are sad</span>. One human said the word \'shop\' and came back with nothing. Nobody knows if this lasts an hour or a week. The big humans in charge ask one thing: every home manages alone for <span class="m-key">3 days</span>, so help goes first to the old humans and the sick humans. That is this whole page. A few things in the cupboard. Water in the bowl. Everyone stays together. <span class="m-key">Good plan.</span>'},nerd:{lead:'Official guidance from the Danish Emergency Management Agency: every household should be self-sufficient for 72 hours in a crisis. No power, no water, no shops, no help. The list below is the full spec. Store, rotate, repeat.',whyH:'Scenario: grid failure, Tuesday 16:40.',whyP:'Within minutes: no routers, no card terminals, no mobile data once the cell towers drain their batteries, no water pressure above the second floor, <span class="m-dark">no heat in most homes</span>. <span class="m-odd">Duration: unknown.</span> The Danish Emergency Management Agency’s answer is a <span class="m-key">72-hour household buffer</span>, because the first three days are when emergency services are saturated and supply chains have not yet rerouted. That is the design constraint behind every list on this page. Not a bunker. <span class="m-key">A buffer.</span>'}},da:{dog:{lead:'VAND. MAD. VENNER. De voksne i Danmark siger, at hvert hjem skal kunne klare sig selv i 3 døgn. Det er hele planen. Resten er en liste. God liste. Meget god liste.',whyH:'Det er tirsdag. Brummen stoppede.',whyP:'<span class="m-stop">Madmaskinen blev stille</span>. <span class="m-dark">Den lysende kasse blev mørk</span>. Menneskene prikker til deres telefoner, og <span class="m-odd">telefonerne er kede af det</span>. Et menneske sagde ordet \'indkøb\' og kom tilbage med ingenting. Ingen ved, om det varer en time eller en uge. De store mennesker, der bestemmer, beder om én ting: at hvert hjem klarer sig selv i <span class="m-key">3 døgn</span>, så hjælpen først går til de gamle mennesker og de syge mennesker. Det er hele denne side. Lidt i skabet. Vand i skålen. Alle bliver sammen. <span class="m-key">God plan.</span>'},nerd:{lead:'Beredskabsstyrelsens anbefaling: hver husstand skal kunne klare sig selv i 72 timer i en krise. Ingen strøm, intet vand, ingen butikker, ingen hjælp. Listen herunder er hele specifikationen. Køb, rotér, gentag.',whyH:'Scenarie: strømsvigt, tirsdag kl. 16.40.',whyP:'Inden for få minutter: ingen routere, ingen kortterminaler, ingen mobildata, når mobilmasternes batterier løber tør, intet vandtryk over anden sal, <span class="m-dark">ingen varme i de fleste hjem</span>. <span class="m-odd">Varighed: ukendt.</span> Beredskabsstyrelsens svar er en <span class="m-key">buffer på 72 timer</span> i hver husstand, fordi de første tre døgn er dem, hvor beredskabet er overbelastet, og forsyningskæderne endnu ikke har fundet nye veje. Det er designkravet bag hver eneste liste på denne side. Ikke en bunker. <span class="m-key">En buffer.</span>'}}};
  var icons={
    water:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    food:'<path d="M4 11h16l-1.5 8h-13z"/><path d="M8 11c0-3 1.5-5 4-5s4 2 4 5"/>',
    med:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/>',
    hyg:'<path d="M7 3h10v4H7z"/><path d="M6 7h12v14H6z"/><path d="M10 12h4"/>',
    warm:'<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
    power:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    cash:'<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 15h4"/>',
    radio:'<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8l10-5"/><circle cx="9" cy="14" r="2.5"/><path d="M15 12h3M15 16h3"/>',
    pets:'<path d="M12 12.5c-3.2 0-5.5 2.6-5.5 5 0 1.6 1.2 2.7 2.7 2.7 1 0 1.9-.5 2.8-.5s1.8.5 2.8.5c1.5 0 2.7-1.1 2.7-2.7 0-2.4-2.3-5-5.5-5z"/><circle cx="6.5" cy="9.5" r="1.8"/><circle cx="17.5" cy="9.5" r="1.8"/><circle cx="9.5" cy="5.5" r="1.8"/><circle cx="14.5" cy="5.5" r="1.8"/>'
  };
  var cats=[
    {id:'water',c:'',en:{t:'Water',tag:'3 L per person per day',i:['9 L per person for 3 days','Bottled, or tap water in clean sealed food containers'],dog:['9 L per human for 3 days. That is many bowls.', 'Bottles, or tap water in clean closed tubs. Not the toilet. Never the toilet.'],nerd:['9 L per person for 3 days: 3 L × 3 days, drinking and cooking only', 'Sealed bottled water, or tap water in clean food-grade containers. Label with the fill date.']},
      da:{t:'Vand',tag:'3 L pr. person pr. dag',i:['9 L pr. person i 3 døgn','På flaske, eller postevand i rene, lukkede madbeholdere'],dog:['9 L pr. menneske i 3 døgn. Det er mange skåle.', 'Flasker, eller postevand i rene, lukkede bøtter. Ikke toilettet. Aldrig toilettet.'],nerd:['9 L pr. person i 3 døgn: 3 L × 3 døgn, kun til at drikke og lave mad', 'Lukkede flasker, eller postevand i rene beholdere, der er godkendt til mad. Skriv dato på.']}},
    {id:'food',c:'o',en:{t:'Food',tag:'3 days',i:['Food that keeps without a fridge','Needs no oven or hob (tins, crispbread)','Things your family already eats','A camping stove to boil water (outside only)'],dog:['Food that stays good without the cold box', 'Food you can eat with no oven, no hob, no waiting (tins, crispbread)', 'Food the pack already likes. New food makes tummies sad.', 'A camping stove to boil water. Outside only. Fire is not a toy.'],nerd:['Shelf-stable food, no refrigeration required', 'Ready to eat without an oven or hob: tins, crispbread, nut butter', 'Food your household already eats, so it rotates through normal meals', 'A camping stove to boil water. Outdoors only: carbon monoxide.']},
      da:{t:'Mad',tag:'3 dage',i:['Mad, der kan holde sig uden køleskab','Skal ikke varmes i ovn eller på komfur (dåsemad, knækbrød)','Mad, som familien allerede spiser','Et campingkomfur til at koge vand (kun udendørs)'],dog:['Mad, der holder sig uden den kolde kasse', 'Mad, der kan spises uden ovn, uden komfur, uden at vente (dåser, knækbrød)', 'Mad, flokken allerede kan lide. Ny mad giver ondt i maven.', 'Et campingkomfur til at koge vand. Kun udenfor. Ild er ikke legetøj.'],nerd:['Holdbar mad, der ikke kræver køleskab', 'Klar til at spise uden ovn eller komfur: dåser, knækbrød, nøddesmør', 'Mad, I allerede spiser, så lageret roterer gennem de almindelige måltider', 'Et campingkomfur til at koge vand. Kun udendørs: kulilte.']}},
    {id:'med',c:'r',en:{t:'Medicine and first aid',tag:'3 days',i:['3 days of regular medicine for everyone','Plasters, dressings, bandages','Wound cleaner and disinfectant','Iodine tablets (under 40, pregnant or breastfeeding)'],dog:['3 days of the pills your humans take every day', 'Plasters and bandages for paws and hands', 'Something to clean a scratch so it does not get itchy', 'Iodine tablets for humans under 40, and for the ones growing or feeding a puppy'],nerd:['3 days of all prescription medicine for every person, plus the prescription list', 'Plasters, sterile dressings, bandages, tape', 'Wound irrigation and a disinfectant', 'Potassium iodide tablets for people under 40, pregnant or breastfeeding. Nuclear incidents only, on official instruction.']},
      da:{t:'Medicin og førstehjælp',tag:'3 dage',i:['3 dages fast medicin til alle','Plastre, forbindinger, bandager','Sårrens og desinfektion','Jodtabletter (under 40 år, gravide eller ammende)'],dog:['3 dages piller til de mennesker, der tager piller hver dag', 'Plastre og bandager til poter og hænder', 'Noget at rense en rift med, så den ikke klør', 'Jodtabletter til mennesker under 40, og til dem, der venter eller ammer en hvalp'],nerd:['3 dages fast medicin til hver person, plus en liste over recepterne', 'Plastre, sterile forbindinger, bandager, tape', 'Sårskyl og desinfektionsmiddel', 'Jodtabletter til personer under 40, gravide og ammende. Kun ved atomulykke og kun på myndighedernes besked.']}},
    {id:'hyg',c:'',en:{t:'Hygiene',tag:'',i:['Toilet paper','Wet wipes and hand sanitiser','Sanitary products','Nappies, baby formula if needed'],dog:['Toilet paper. Not for chewing.', 'Wet wipes and hand gel for sticky humans', 'Pads and tampons for the humans who need them', 'Nappies and baby milk if there is a tiny human'],nerd:['Toilet paper, more than you think', 'Wet wipes and alcohol hand sanitiser when water is rationed', 'Sanitary products for 3 days plus margin', 'Nappies and formula if there is an infant, and extra water to mix it']},
      da:{t:'Hygiejne',tag:'',i:['Toiletpapir','Vådservietter og håndsprit','Menstruationsbeskyttelse','Bleer og modermælkserstatning, hvis det er nødvendigt'],dog:['Toiletpapir. Ikke til at tygge på.', 'Vådservietter og håndsprit til klistrede mennesker', 'Bind og tamponer til de mennesker, der skal bruge dem', 'Bleer og babymælk, hvis der er et lille menneske'],nerd:['Toiletpapir, mere end du tror', 'Vådservietter og håndsprit, når vandet skal rationeres', 'Menstruationsbeskyttelse til 3 døgn plus margin', 'Bleer og modermælkserstatning, hvis der er et spædbarn, og ekstra vand til at blande den']}},
    {id:'warm',c:'y',en:{t:'Warmth',tag:'',i:['Blankets and duvets','Warm clothes','Candles on a solid surface, away from curtains','Plan to stay mostly in one room'],dog:['Blankets and duvets. The big pile. Everyone in the pile.', 'Warm clothes with many layers', 'Candles on a hard flat thing, far from curtains and tails', 'Everyone stays in one room. One warm room. One happy pack.'],nerd:['Blankets, duvets, sleeping bags', 'Layered clothing: base layer, insulation, hat', 'Candles on a non-flammable surface, away from curtains. Never leave them burning unattended.', 'Heat one room and close the others. Smaller volume, warmer air.']},
      da:{t:'Varme',tag:'',i:['Tæpper og dyner','Varmt tøj','Stearinlys på et fast underlag, væk fra gardiner','Hold jer mest i ét rum'],dog:['Tæpper og dyner. Den store bunke. Alle i bunken.', 'Varmt tøj i mange lag', 'Stearinlys på noget hårdt og fladt, langt fra gardiner og haler', 'Alle bliver i ét rum. Ét varmt rum. Én glad flok.'],nerd:['Tæpper, dyner, soveposer', 'Tøj i lag: inderlag, isolering, hue', 'Stearinlys på et ubrændbart underlag, væk fra gardiner. Gå aldrig fra et tændt lys.', 'Varm ét rum op, og luk de andre. Mindre rum, varmere luft.']}},
    {id:'power',c:'y',en:{t:'Power and light',tag:'',i:['Power bank for phones','Torch','Spare batteries','Matches'],dog:['A power bank so the phone keeps working', 'A torch for finding the ball in the dark', 'Spare batteries for the torch', 'Matches. Humans only.'],nerd:['Power bank, 10,000 mAh or more, kept charged', 'Torch, ideally head-mounted so your hands are free', 'Spare batteries in the sizes your devices actually use', 'Matches or a lighter, stored dry']},
      da:{t:'Strøm og lys',tag:'',i:['Powerbank til mobiler','Lommelygte','Ekstra batterier','Tændstikker'],dog:['En powerbank, så telefonen bliver ved med at virke', 'En lommelygte til at finde bolden i mørket', 'Ekstra batterier til lygten', 'Tændstikker. Kun til mennesker.'],nerd:['Powerbank på mindst 10.000 mAh, altid opladet', 'Lommelygte, helst pandelampe, så hænderne er fri', 'Ekstra batterier i de størrelser, jeres ting faktisk bruger', 'Tændstikker eller en lighter, opbevaret tørt']}},
    {id:'cash',c:'o',en:{t:'Cash and cards',tag:'',i:['Some coins and small notes','A physical bank card','Know your PIN by heart','Key phone numbers on paper'],dog:['Coins and small notes. Paper money, not treats.', 'A real bank card, not just the phone', 'The PIN code in your head, not on the card', 'Important phone numbers on paper, in case the phone sleeps'],nerd:['Cash in small denominations: card terminals fail when the power does', 'A physical bank card as a fallback for mobile pay', 'PIN memorised, not stored on the phone', 'Key phone numbers written down: family, doctor, insurance, 1813 and 112']},
      da:{t:'Kontanter og kort',tag:'',i:['Lidt mønter og små sedler','Et fysisk betalingskort','Kend din pinkode udenad','Vigtige telefonnumre på papir'],dog:['Mønter og små sedler. Papirpenge, ikke godbidder.', 'Et rigtigt betalingskort, ikke kun telefonen', 'Pinkoden i hovedet, ikke på kortet', 'Vigtige telefonnumre på papir, hvis telefonen sover'],nerd:['Kontanter i små sedler: kortterminaler dør, når strømmen gør', 'Et fysisk betalingskort som backup for MobilePay', 'Pinkoden i hovedet, ikke gemt på telefonen', 'Vigtige numre på papir: familie, læge, forsikring, 1813 og 112']}},
    {id:'radio',c:'r',en:{t:'Radio and news',tag:'FM',i:['Battery, wind-up or solar FM radio (a car radio can work)','Plan to listen to DR or TV 2','Know where your nearest neighbours are'],dog:['A radio that works without the wall: batteries, a crank or the sun. The car has one too.', 'Listen to DR or TV 2. The humans on the radio know things.', 'Know the neighbours. Neighbours are pack.'],nerd:['FM radio on batteries, hand crank or solar. A car radio is a valid fallback.', 'DR and TV 2 carry official broadcasts when the internet is down', 'Know your nearest neighbours: shared resources, shared information']},
      da:{t:'Radio og nyheder',tag:'FM',i:['Radio med FM og batteri, håndsving eller solcelle (en bilradio kan også bruges)','Lyt til DR eller TV 2','Kend dine nærmeste naboer'],dog:['En radio, der virker uden væggen: batterier, et håndsving eller solen. Bilen har også en.', 'Lyt til DR eller TV 2. Menneskene i radioen ved ting.', 'Kend naboerne. Naboer er flok.'],nerd:['FM-radio på batterier, håndsving eller solceller. Bilradioen er en gyldig backup.', 'DR og TV 2 sender myndighedernes beskeder, når nettet er nede', 'Kend dine nærmeste naboer: delte ressourcer, delt information']}},
    {id:'pets',c:'o',en:{t:'Pets',tag:'3 days',i:['Pet food for 3 days','Water: about 1 L a day for a dog or cat','Any medicine your pet takes','Lead, carrier or cage, and a blanket','Litter or waste bags','Photo of the vaccination card and chip number on your phone'],dog:['Food for 3 days. For me. Three whole days.', 'Water: about 1 L a day for a dog or cat. My bowl. Full.', 'My pills, if I have pills', 'Lead, carrier or cage, and my blanket. The blanket matters.', 'Litter for the cat, bags for me', 'A photo of my vaccination card and my chip number on the phone'],nerd:['Pet food for 3 days, same brand as usual to avoid stomach upsets', 'Water: about 1 L a day for a dog or cat, on top of the human total', 'Any medicine the animal takes, plus the vet\'s number', 'Lead, carrier or cage, and a blanket for warmth and calm', 'Cat litter or waste bags: hygiene matters more indoors', 'Photo of the vaccination card and the chip number, in case you have to evacuate']},
      da:{t:'Kæledyr',tag:'3 dage',i:['Foder til 3 døgn','Vand: ca. 1 L om dagen til en hund eller kat','Medicin, dyret får fast','Snor, transportkasse eller bur og et tæppe','Kattegrus eller hundeposer','Foto af vaccinationskort og chipnummer på telefonen'],dog:['Foder til 3 døgn. Til mig. Tre hele døgn.', 'Vand: ca. 1 L om dagen til en hund eller kat. Min skål. Fuld.', 'Mine piller, hvis jeg har piller', 'Snor, transportkasse eller bur og mit tæppe. Tæppet er vigtigt.', 'Grus til katten, poser til mig', 'Et foto af mit vaccinationskort og mit chipnummer på telefonen'],nerd:['Foder til 3 døgn, samme mærke som altid, så maven ikke bliver sur', 'Vand: ca. 1 L om dagen til en hund eller kat, oven i menneskernes total', 'Den medicin, dyret får, plus dyrlægens nummer', 'Snor, transportkasse eller bur og et tæppe til varme og ro', 'Kattegrus eller hundeposer: hygiejne betyder mere indendørs', 'Foto af vaccinationskort og chipnummer, hvis I skal evakueres']}}
  ];
  var lang='en',store={},total=0,tone='mid';
  try{var st=localStorage.getItem('dk-ready-tone');if(st==='dog'||st==='nerd')tone=st;}catch(e){}
  try{store=JSON.parse(localStorage.getItem('dk-ready-kit')||'{}')||{}}catch(e){store={}}
  try{var sl=localStorage.getItem('dk-ready-lang');if(sl==='da'||sl==='en')lang=sl;else if((navigator.language||'').toLowerCase().indexOf('da')===0)lang='da';}catch(e){}

  var kit=document.getElementById('kit');
  function renderKit(){
    total=0;kit.innerHTML='';
    cats.forEach(function(c){
      var d=c[lang],hid='h-'+c.id,el=document.createElement('div');el.className='cat '+c.c;
      el.setAttribute('role','group');el.setAttribute('aria-labelledby',hid);
      var h='<header><div class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+icons[c.id]+'</svg></div><h3 id="'+hid+'">'+d.t+'</h3>'+(d.tag?'<span class="tag">'+d.tag+'</span>':'')+'</header><ul>';
      var items=(tone!=='mid'&&d[tone])?d[tone]:d.i;
      items.forEach(function(t,n){total++;var id='k-'+c.id+'-'+n;
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

  var range=document.getElementById('people'),pets=document.getElementById('pets');
  var bottleSvg='<svg viewBox="0 0 20 44" aria-hidden="true"><rect x="7" y="1" width="6" height="5" rx="1.5" fill="var(--muted)"/><path d="M6 8h8c2 2 3 4 3 7v24a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V15c0-3 1-5 3-7z" fill="var(--water-soft)" stroke="var(--water)" stroke-width="1.5"/><path d="M3.8 21h12.4v18a2 2 0 0 1-2 2H5.8a2 2 0 0 1-2-2z" fill="var(--water)"/></svg>';
  function calc(){
    var p=+range.value,q=+pets.value,L=p*9+q*3,b=Math.ceil(L/1.5),s='';
    document.getElementById('peopleOut').textContent=p;
    document.getElementById('petsOut').textContent=q;
    document.getElementById('litres').textContent=L+' L';
    document.getElementById('meals').textContent=p*9;
    document.getElementById('bottleN').textContent=b;
    for(var i=0;i<b;i++)s+='<span class="bottle">'+bottleSvg+'</span>';
    document.getElementById('bottles').innerHTML=s;
    var da=lang==='da';
    range.setAttribute('aria-valuetext',p+(da?(p===1?' person':' personer'):(p===1?' person':' people')));
    pets.setAttribute('aria-valuetext',q+(da?' kæledyr':(q===1?' pet':' pets')));
    var petPart=q?(da?' + '+q+' kæledyr × 1 L × 3 dage':' + '+q+(q===1?' pet':' pets')+' × 1 L × 3 days'):'';
    document.getElementById('bottleCap').textContent=da
      ? p+(p===1?' person':' personer')+' × 3 L × 3 dage'+petPart+' = '+L+' liter ('+b+' flasker).'
      : p+(p===1?' person':' people')+' × 3 L × 3 days'+petPart+' = '+L+' litres ('+b+' bottles).';
  }
  range.addEventListener('input',calc);
  pets.addEventListener('input',calc);

  var meta=document.querySelector('meta[name=description]');
  function setLang(l,save){
    lang=l;document.documentElement.lang=l;
    var dict=l==='da'?DA:EN;
    nodes.forEach(function(el){var k=el.getAttribute('data-t');if(dict[k]!=null)el.innerHTML=dict[k];});
    applyLead();
    document.getElementById('toneGroup').setAttribute('aria-label',l==='da'?'Tonen i teksten':'Tone of the text');
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
  var toneKeys=['lead','whyH','whyP'];
  function applyLead(){var dict=lang==='da'?DA:EN;toneKeys.forEach(function(k){var el=document.querySelector('[data-t='+k+']');el.innerHTML=tone==='mid'?dict[k]:TONE_TEXT[lang][tone][k];});}
  function setTone(t,save){
    tone=t;
    document.querySelectorAll('#toneGroup button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-tone')===t);});
    applyLead();renderKit();
    if(save){try{localStorage.setItem('dk-ready-tone',t)}catch(e){}}
  }
  document.querySelectorAll('#toneGroup button').forEach(function(b){
    b.addEventListener('click',function(){setTone(b.getAttribute('data-tone'),true);});
  });
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click',function(){setLang(b.getAttribute('data-l'),true);});
  });
  setTone(tone,false);setLang(lang,false);

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
