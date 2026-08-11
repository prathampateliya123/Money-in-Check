(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const W="modulepreload",J=function(o){return o},M={},V=function(e,n,t){let a=Promise.resolve();if(n&&n.length>0){let i=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),b=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=i(n.map(c=>{if(c=J(c),c in M)return;M[c]=!0;const m=c.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":W,m||(u.as="script"),u.crossOrigin="",u.href=c,b&&u.setAttribute("nonce",b),document.head.appendChild(u),m)return new Promise((y,w)=>{u.addEventListener("load",y),u.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return a.then(i=>{for(const s of i||[])s.status==="rejected"&&r(s.reason);return e().catch(r)})},Z="Money in Check",Y={"meta.title":"Money in Check — A novel by Óscar Pérez","meta.description":"Not a finance textbook. Not just a novel. A story that teaches you how money really works. Money in Check, a novel by Óscar Pérez.","meta.ogDescription":"Not a finance textbook. Not just a novel. A story that teaches you how money really works.",brand:Z,"header.edition":"2026 Edition","header.navIntro":"Intro","header.navBook":"The book","header.navAuthor":"About the Author","header.langLabel":"En","header.langAria":"Language: English","header.buy":"Buy it now!","header.price":"$9.99","hero.kicker":"The Invisible Rules of Wealth","hero.horseAlt":"Chess knight piece wrapped in a rolled dollar bill","hero.bylineLead":"A novel by","hero.bylineName":"Óscar Pérez","intro.metaTheme":"The Principles of Wealth.","intro.metaDate":"February 10, 2026, 11:31 PM","intro.metaPlace":"Boston, MA","intro.manifesto1":"{g}Most people enter {gif:2} adulthood as if they were sitting down at a chessboard for the first time, without knowing {gif:3} the rules, without recognizing which pieces truly matter, and believing that hard work alone will be enough to stay {gif:4} in the game.{/g}","intro.manifesto2":"{g}But money has its own logic, its own {gif:5} traps, its punishments, and its rewards. Money in Check is the story of a game learned the hard way, and an invitation to discover that true financial {gif:6} freedom is not about having more, but about living with margin and dignity, and being able to choose the life you truly want without fear.{/g}","book.metaPages":"Pages","book.metaCount":"(221)","book.metaLangs":"English, Spanish & France","book.metaTitle":"The Book","book.metaSubline":"5 Languages. 3 Formats. One Story.","book.coverAlt":"Money in Check book cover held in hand","book.slide1Alt":"Interior spread of the book, first chapter","book.slide2Alt":"Interior spread of the book with a chart","book.coverSrc":"/img/book-cover-EN.webp","book.slide1Src":"/img/book-1-EN.png","book.slide2Src":"/img/book-2-EN.png","book.prevAria":"Previous spread","book.nextAria":"Next spread","book.optionsHeader":"Formats","book.priceHeader":"Price (USD)","book.rowPrint":"Paperback","book.pricePrint":"$15.99","book.rowKindle":"Hardcover","book.priceKindle":"$22.99","book.rowPrintAudio":"Kindle Edition","book.pricePrintAudio":"$9.99","book.rowAudio":"Audiobook","book.priceAudio":"Soon","book.buyLabel":"Buy on Amazon","book.buyUrl":"https://www.amazon.com/dp/B0H9ZSPHP8/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6lt49SVRIrSPNFTeMZ1wKv-dXqhmYL0tGJGo70ep1g2Yy0GZDrTDbDQOEDAVcK-XYd0PVU5jnWbPErcArdFXnAcWUKOyJJ11BMnacO_ZcfpRje7qreXy29pPBK35mChq_szwoGO7dM4UflCc3pFXxm-x1-W-Hs5FgVJ_YpWlzdwy-Hi3aHJsAwhx198abHo1IyUWUZbGfH9QeOOynV2I_tS5ueGmJw9a0x8REIzkvkU.r4d2SLNqyOuFKdpcZUaLZbg5fJGJYwCKBHwTN9h2mHI&qid=1784786580&sr=1-1","book.kindleNote":"(*) Free with a Kindle Unlimited membership","book.claim":"Not a finance textbook.{br}Not just a novel.{br}A story that teaches you how{br}money really works.","book.synopsis1":"{em.book__em.book__em--name}Oliver Harper{/em} arrives at Harvard on a scholarship, with an oversized suitcase and the feeling that he is entering a world that was not designed for him. He comes from a family where money was always tight, financial mistakes came at a high price, and hope weighed as heavily as the bills.","book.synopsis2":"Having learned to see the world through the logic of a chessboard, {em.book__em}Oliver soon discovers that money, like chess, has invisible rules: the winner is not the one who appears wealthiest or moves fastest, but the one who understands the position before making the next move.{/em}","book.synopsis3":"Money in Check is a story about wealth, ambition, family, and freedom. It is not a manual, but a game played over the course of a lifetime: the story of a young man who learns, move by move, to stop merely surviving and start building a life of his own.","book.cta":"Read and listen to Chapter 1 for free","book.formLabel":"Your email","book.formPlaceholder":"Your email","book.formConsent":"(*) By subscribing, you agree to receive occasional updates about the book.","book.send":"Send","book.sending":"Sending…","author.photoAlt":"Portrait of Óscar Pérez","author.heading":"The Author","author.origin":"VLC, SPAIN. 1973","author.bio":"{em}Óscar Pérez{/em} has spent years moving between boardrooms, stages, and airports around the world as an {em}entrepreneur and technology CEO{/em}. He has organized international conferences in cities including New York, Los Angeles, San Francisco, Tokyo, Toronto, Amsterdam, London, Berlin, and Paris, and worked with companies such as {em}Google, Microsoft, and Adobe{/em}.{br}{br}Along the way, he gained something far more valuable than prestige or connections: {em}a firsthand understanding of how those who truly grasp the rules of money, success, and personal freedom think and make decisions{/em}, and of what separates lasting wealth from its mere appearance.","author.signatureAlt":"Óscar Pérez's signature","author.name":"ÓSCAR PÉREZ","author.role":"Founder & Former CEO of Awwwards","author.polaroid1Alt":"Awwwards trophy","author.caption1":"Awwwards Founder","author.caption1Date":"2006-2025","author.polaroid2Alt":"United Artists theatre marquee announcing the Awwwards Digital Thinkers Conference in Los Angeles","author.caption2":"Digital Thinkers Conference.","author.caption2Date":"2006-2025","author.polaroid3Alt":"Case Studies book editions on a table","author.caption3":"Case Studies / Digital Design","author.caption3Date":"2013","author.polaroid4Alt":"Open design magazines spread on a table","author.caption4":"Brain Food Book","author.caption4Date":"2015","author.polaroid5Alt":"Hot Right Now book cover","author.caption5":"Hot Right Now, Coauthor.","author.caption5Date":"2017-2020","author.polaroid6Alt":"Speaker on stage at an Awwwards conference","author.caption6":"Awwwards Conference.","author.caption6Date":"2006-2025","claim.lineA":"{words}Chess, life, and finance share one truth:{/words}","claim.lineB":"{words}everything changes when you understand the rules.{/words}","footer.navBook":"The Book","footer.navAuthor":"About the Author","footer.navBuy":"Buy Now","footer.helloAria":"Say Hello","footer.copyright":"© 2026 Óscar Pérez. All rights reserved.","footer.creditPre":"Site developed by","footer.followTitle":"Follow the author","lightbox.closeAria":"Close","lightbox.title":"Get Your Copy Of Money In Check","lightbox.subtitle":"The book is available at the following stores:","lightbox.sectionEn":"English version","lightbox.sectionEs":"Versión en español","lightbox.countryUS":"United States","lightbox.countryCanada":"Canada","lightbox.countryAustralia":"Australia","lightbox.countryIndia":"India","lightbox.countryOther":"Other countries","lightbox.countrySpain":"España","lightbox.countryMexico":"Mexico","lightbox.countryOtherEs":"Otros Paises","lightbox.distrib":"Interested in distributing the book?","lightbox.contact":"Get in touch with us here.","language.kicker":"Select your language","language.en":"English","language.es":"Spanish","language.fr":"France","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"Site developed by","book.sendThanks":"You’ll hear from us soon. Thanks!","book.sendError":"Try again","hero.titleLine1":"Money","hero.titleLine2":"in Check"},Q=!0,X="Jaque al dinero",ee={_draft:Q,"meta.title":"Jaque al dinero — Una novela de Óscar Pérez","meta.description":"No es un manual de finanzas. Tampoco es solo una novela. Una historia que te enseña cómo funciona de verdad el dinero. Jaque al dinero, una novela de Óscar Pérez.","meta.ogDescription":"No es un manual de finanzas. Tampoco es solo una novela. Una historia que te enseña cómo funciona de verdad el dinero.",brand:X,"header.edition":"Edición 2026","header.navIntro":"Intro","header.navBook":"El libro","header.navAuthor":"Sobre el autor","header.langLabel":"Es","header.langAria":"Idioma: Español","header.buy":"Comprar","header.price":"$9.99","hero.kicker":"Las reglas invisibles de la riqueza","hero.horseAlt":"Pieza de caballo de ajedrez envuelta en un billete de dólar enrollado","hero.bylineLead":"Una novela de","hero.bylineName":"Óscar Pérez","intro.metaTheme":"Los principios de la riqueza.","intro.metaDate":"10 de febrero de 2026, 11:31 PM","intro.metaPlace":"Boston, MA","intro.manifesto1":"{g}La mayoría de las personas entra en la vida {gif:2} adulta como quien se sienta por primera vez frente a un tablero de ajedrez, sin conocer {gif:3} las reglas, sin reconocer qué piezas importan de verdad y creyendo que trabajar duro bastará para mantenerse {gif:4} en la partida.{/g}","intro.manifesto2":"{g}Pero el dinero tiene su propia lógica, sus propias {gif:5} trampas, sus castigos y sus recompensas. Jaque al Dinero es la historia de una partida aprendida por las malas y una invitación a descubrir que la verdadera libertad financiera no consiste en tener más, sino en vivir con margen y dignidad, y en poder elegir sin miedo la vida que realmente quieres {gif:6} vivir.{/g}","book.metaPages":"Páginas","book.metaCount":"(221)","book.metaLangs":"Inglés, Español y Francés","book.metaTitle":"El libro","book.metaSubline":"5 idiomas. 3 formatos. Una historia.","book.coverAlt":"Portada del libro Jaque al dinero sostenida en la mano","book.slide1Alt":"Doble página interior del libro, primer capítulo","book.slide2Alt":"Doble página interior del libro con un gráfico","book.coverSrc":"/img/book-cover-ES.webp","book.slide1Src":"/img/book-1-ES.png","book.slide2Src":"/img/book-2-ES.png","book.prevAria":"Doble página anterior","book.nextAria":"Doble página siguiente","book.optionsHeader":"Formatos","book.priceHeader":"Precio (Euros)","book.rowPrint":"Tapa blanda","book.pricePrint":"15,29 €","book.rowKindle":"Tapa dura","book.priceKindle":"22,36 €","book.rowPrintAudio":"Edición Kindle","book.pricePrintAudio":"8,54 €","book.rowAudio":"Audiolibro","book.priceAudio":"Próximamente","book.buyLabel":"Comprar en Amazon","book.buyUrl":"https://www.amazon.es/dp/B0H8MN13Z5/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2N2SXWAN99D30&dib=eyJ2IjoiMSJ9.FnEVDIU76LeagM2lUPk6Bg.SBv2jJKoP4iSIZMnWBokWq1Of3x5Ct13vB1V3tfvV4Y&dib_tag=se&keywords=jaque+al+dinero&qid=1783932589&sprefix=jaque+al+dinero%2Caps%2C88&sr=8-1","book.kindleNote":"(*) Gratis con tu suscripción a Kindle Unlimited","book.claim":"No es un libro de finanzas al uso.{br}No es solo una novela.{br}Es una historia que enseña cómo{br}funciona realmente el dinero.","book.synopsis1":"{em.book__em.book__em--name}Oliver Harper{/em} llega a Harvard con una beca, una maleta demasiado grande y la sensación de estar entrando en un mundo que no fue diseñado para él. Viene de una familia donde el dinero siempre fue escaso, los errores financieros se pagaban caros y la esperanza pesaba tanto como las facturas.","book.synopsis2":"Después de aprender a ver el mundo a través de la lógica de un tablero de ajedrez, {em.book__em}Oliver descubre que el dinero, como el ajedrez, tiene reglas invisibles: no gana quien aparenta ser más rico ni quien mueve más rápido, sino quien entiende la posición antes de hacer la siguiente jugada.{/em}","book.synopsis3":"Jaque al Dinero es una historia sobre riqueza, ambición, familia y libertad. No es un manual, sino una partida jugada a lo largo de una vida: la historia de un joven que aprende, movimiento a movimiento, a dejar de sobrevivir y empezar a construir una vida propia.","book.cta":"Lee y escucha gratis el capítulo 1","book.formLabel":"Tu correo electrónico","book.formPlaceholder":"Tu correo electrónico","book.formConsent":"(*) Al suscribirte, aceptas recibir noticias ocasionales sobre el libro.","book.send":"Enviar","book.sending":"Enviando…","author.photoAlt":"Retrato de Óscar Pérez","author.heading":"El autor","author.origin":"VLC, ESPAÑA. 1973","author.bio":"{em}Óscar Pérez{/em} ha pasado años moviéndose entre salas de juntas, escenarios y aeropuertos de todo el mundo como {em}emprendedor y CEO tecnológico{/em}. Ha organizado conferencias internacionales en ciudades como Nueva York, Los Ángeles, San Francisco, Tokio, Toronto, Ámsterdam, Londres, Berlín y París, y ha trabajado con compañías como {em}Google, Microsoft y Adobe{/em}.{br}{br}En ese camino obtuvo algo mucho más valioso que el prestigio o los contactos: {em}una comprensión directa de cómo piensan y toman decisiones quienes entienden de verdad las reglas del dinero, el éxito y la libertad personal{/em}, y de qué separa la riqueza duradera de su simple apariencia.","author.signatureAlt":"Firma de Óscar Pérez","author.name":"ÓSCAR PÉREZ","author.role":"Fundador y ex-CEO de Awwwards","author.polaroid1Alt":"Trofeo Awwwards","author.caption1":"Fundador de Awwwards","author.caption1Date":"2006-2025","author.polaroid2Alt":"Marquesina del teatro United Artists anunciando la Awwwards Digital Thinkers Conference en Los Ángeles","author.caption2":"Digital Thinkers Conference.","author.caption2Date":"2006-2025","author.polaroid3Alt":"Ediciones del libro Case Studies sobre una mesa","author.caption3":"Case Studies / Diseño digital","author.caption3Date":"2013","author.polaroid4Alt":"Revistas de diseño abiertas sobre una mesa","author.caption4":"Brain Food Book","author.caption4Date":"2015","author.polaroid5Alt":"Portada del libro Hot Right Now","author.caption5":"Hot Right Now, coautor.","author.caption5Date":"2017-2020","author.polaroid6Alt":"Ponente en el escenario de una conferencia Awwwards","author.caption6":"Awwwards Conference.","author.caption6Date":"2006-2025","claim.lineA":"{words}El ajedrez, la vida y las finanzas comparten una verdad:{/words}","claim.lineB":"{words}todo cambia cuando entiendes las reglas.{/words}","footer.navBook":"El libro","footer.navAuthor":"Sobre el autor","footer.navBuy":"Comprar ahora","footer.helloAria":"Contacto","footer.copyright":"© 2026 Óscar Pérez. Todos los derechos reservados.","footer.creditPre":"Sitio desarrollado por","footer.followTitle":"Sigue al autor","lightbox.closeAria":"Cerrar","lightbox.title":"Consigue tu ejemplar de Jaque al dinero","lightbox.subtitle":"El libro está disponible en las siguientes tiendas:","lightbox.sectionEn":"Versión en inglés","lightbox.sectionEs":"Versión en español","lightbox.countryUS":"Estados Unidos","lightbox.countryCanada":"Canadá","lightbox.countryAustralia":"Australia","lightbox.countryIndia":"India","lightbox.countryOther":"Otros países","lightbox.countrySpain":"España","lightbox.countryMexico":"México","lightbox.countryOtherEs":"Otros países","lightbox.distrib":"¿Te interesa distribuir el libro?","lightbox.contact":"Ponte en contacto con nosotros aquí.","language.kicker":"Selecciona tu idioma","language.en":"English","language.es":"Spanish","language.fr":"France","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"Sitio desarrollado por","book.sendThanks":"Hasta pronto. ¡Gracias!","book.sendError":"Inténtalo de nuevo","hero.titleLine1":"Jaque","hero.titleLine2":"al dinero"},oe=!0,ne="Money in Check",ae={_draft:oe,"meta.title":"Money in Check — Un roman d’Óscar Pérez","meta.description":"Pas un manuel de finance. Pas seulement un roman. Une histoire qui vous apprend comment l’argent fonctionne vraiment. Money in Check, un roman d’Óscar Pérez.","meta.ogDescription":"Pas un manuel de finance. Pas seulement un roman. Une histoire qui vous apprend comment l’argent fonctionne vraiment.",brand:ne,"header.edition":"Édition 2026","header.navIntro":"Intro","header.navBook":"Le livre","header.navAuthor":"L’auteur","header.langLabel":"Fr","header.langAria":"Langue : Français","header.buy":"Achetez-le !","header.price":"$9.99","hero.kicker":"Les règles invisibles de la richesse","hero.horseAlt":"Pièce de cavalier d’échecs enveloppée dans un billet de dollar enroulé","hero.bylineLead":"Un roman signé","hero.bylineName":"Óscar Pérez","intro.metaTheme":"Les principes de la richesse.","intro.metaDate":"10 février 2026, 23 h 31","intro.metaPlace":"Boston, MA","intro.manifesto1":"{g}La plupart des gens entrent dans la vie {gif:2} adulte comme s’ils s’asseyaient pour la première fois devant un échiquier, sans connaître {gif:3} les règles, sans reconnaître quelles pièces comptent vraiment et en croyant que travailler dur suffira à rester {gif:4} dans la partie.{/g}","intro.manifesto2":"{g}Mais l’argent obéit à sa propre logique, avec ses {gif:5} pièges, ses sanctions et ses récompenses. Money in Check raconte l’histoire d’un jeu appris à la dure et invite à découvrir que la véritable liberté financière ne consiste pas à posséder davantage, mais à vivre avec une marge de manœuvre et de la dignité, tout en étant capable de choisir sans peur la vie que l’on souhaite réellement {gif:6} mener.{/g}","book.metaPages":"Pages","book.metaCount":"(221)","book.metaLangs":"Anglais, espagnol et français","book.metaTitle":"Le livre","book.metaSubline":"5 langues. 3 formats. Une histoire.","book.coverAlt":"Couverture du livre Money in Check tenue à la main","book.slide1Alt":"Double page intérieure du livre, premier chapitre","book.slide2Alt":"Double page intérieure du livre avec un graphique","book.coverSrc":"/img/book-cover-FR.webp","book.slide1Src":"/img/book-1-FR.png","book.slide2Src":"/img/book-2-FR.png","book.prevAria":"Double page précédente","book.nextAria":"Double page suivante","book.optionsHeader":"Formats","book.priceHeader":"Prix (USD)","book.rowPrint":"Livre broché","book.pricePrint":"15,99 $","book.rowKindle":"Édition Kindle","book.priceKindle":"9,99 $","book.rowPrintAudio":"Livre broché + livre audio","book.pricePrintAudio":"19,99 $","book.rowAudio":"Livre audio","book.priceAudio":"9,99 $","book.buyLabel":"Acheter sur Amazon","book.buyUrl":"https://www.amazon.com/dp/B0H9ZSPHP8/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6lt49SVRIrSPNFTeMZ1wKv-dXqhmYL0tGJGo70ep1g2Yy0GZDrTDbDQOEDAVcK-XYd0PVU5jnWbPErcArdFXnAcWUKOyJJ11BMnacO_ZcfpRje7qreXy29pPBK35mChq_szwoGO7dM4UflCc3pFXxm-x1-W-Hs5FgVJ_YpWlzdwy-Hi3aHJsAwhx198abHo1IyUWUZbGfH9QeOOynV2I_tS5ueGmJw9a0x8REIzkvkU.r4d2SLNqyOuFKdpcZUaLZbg5fJGJYwCKBHwTN9h2mHI&qid=1784786580&sr=1-1","book.kindleNote":"(*) Gratuit avec un abonnement Kindle Unlimited","book.claim":"Pas un manuel de finance.{br}Pas seulement un roman.{br}Une histoire qui vous apprend{br}la vraie logique de l’argent.","book.synopsis1":"{em.book__em.book__em--name}Oliver Harper{/em} arrive à Harvard grâce à une bourse, avec une valise trop grande et le sentiment d’entrer dans un monde qui n’a pas été conçu pour lui. Il vient d’une famille où l’argent a toujours manqué, où les erreurs financières se payaient cher et où l’espoir pesait aussi lourd que les factures.","book.synopsis2":"Ayant appris à voir le monde à travers la logique d’un échiquier, {em.book__em}Oliver découvre bientôt que l’argent, comme les échecs, obéit à des règles invisibles : le gagnant n’est pas celui qui paraît le plus riche ni celui qui joue le plus vite, mais celui qui comprend la position avant de faire le prochain mouvement.{/em}","book.synopsis3":"Money in Check est une histoire de richesse, d’ambition, de famille et de liberté. Ce n’est pas un manuel, mais une partie jouée tout au long d’une vie : l’histoire d’un jeune homme qui apprend, coup après coup, à cesser de simplement survivre et à commencer à construire une vie qui lui appartient.","book.cta":"Lisez et écoutez gratuitement le chapitre 1","book.formLabel":"Votre e-mail","book.formPlaceholder":"Votre e-mail","book.formConsent":"(*) En vous abonnant, vous acceptez de recevoir occasionnellement des nouvelles du livre.","book.send":"Envoyer","book.sending":"Envoi…","author.photoAlt":"Portrait d’Óscar Pérez","author.heading":"L’auteur","author.origin":"VLC, ESPAGNE. 1973","author.bio":"{em}Óscar Pérez{/em} a passé des années entre salles de conseil, scènes et aéroports du monde entier en tant qu’{em}entrepreneur et dirigeant dans le secteur technologique{/em}. Il a organisé des conférences internationales dans des villes comme New York, Los Angeles, San Francisco, Tokyo, Toronto, Amsterdam, Londres, Berlin et Paris, et a travaillé aux côtés d’entreprises telles que {em}Google, Microsoft et Adobe{/em}.{br}{br}Au fil de ce parcours, il a acquis quelque chose de bien plus précieux que le prestige ou les relations : {em}une compréhension directe de la manière dont pensent et prennent leurs décisions ceux qui maîtrisent réellement les règles de l’argent, de la réussite et de la liberté personnelle{/em}, ainsi que de ce qui distingue une richesse durable de sa simple apparence.","author.signatureAlt":"Signature d’Óscar Pérez","author.name":"ÓSCAR PÉREZ","author.role":"Fondateur et ancien CEO d’Awwwards","author.polaroid1Alt":"Trophée Awwwards","author.caption1":"Fondateur d’Awwwards","author.caption1Date":"2006-2025","author.polaroid2Alt":"Marquise du théâtre United Artists annonçant la Awwwards Digital Thinkers Conference à Los Angeles","author.caption2":"Digital Thinkers Conference.","author.caption2Date":"2006-2025","author.polaroid3Alt":"Éditions du livre Case Studies sur une table","author.caption3":"Case Studies / Design numérique","author.caption3Date":"2013","author.polaroid4Alt":"Magazines de design ouverts sur une table","author.caption4":"Brain Food Book","author.caption4Date":"2015","author.polaroid5Alt":"Couverture du livre Hot Right Now","author.caption5":"Hot Right Now, coauteur.","author.caption5Date":"2017-2020","author.polaroid6Alt":"Intervenant sur la scène d’une conférence Awwwards","author.caption6":"Conférence Awwwards.","author.caption6Date":"2006-2025","claim.lineA":"{words}Les échecs, la vie et la finance partagent une vérité :{/words}","claim.lineB":"{words}tout change quand on comprend les règles.{/words}","footer.navBook":"Le livre","footer.navAuthor":"L’auteur","footer.navBuy":"Acheter maintenant","footer.helloAria":"Nous contacter","footer.copyright":"© 2026 Óscar Pérez. Tous droits réservés.","footer.creditPre":"Site développé par","footer.followTitle":"Suivre l’auteur","lightbox.closeAria":"Fermer","lightbox.title":"Procurez-vous votre exemplaire de Money in Check","lightbox.subtitle":"Le livre est disponible dans les boutiques suivantes :","lightbox.sectionEn":"Version anglaise","lightbox.sectionEs":"Version espagnole","lightbox.countryUS":"États-Unis","lightbox.countryCanada":"Canada","lightbox.countryAustralia":"Australie","lightbox.countryIndia":"Inde","lightbox.countryOther":"Autres pays","lightbox.countrySpain":"Espagne","lightbox.countryMexico":"Mexique","lightbox.countryOtherEs":"Autres pays","lightbox.distrib":"Vous souhaitez distribuer le livre ?","lightbox.contact":"Contactez-nous ici.","language.kicker":"Choisissez votre langue","language.en":"English","language.es":"Spanish","language.fr":"France","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"Site développé par","book.sendThanks":"À bientôt. Merci !","book.sendError":"Réessayez","hero.titleLine1":"Money","hero.titleLine2":"in Check"},te={"meta.title":"Schach dem Geld — ein Roman von Óscar Pérez","meta.description":"Kein klassisches Finanzbuch. Nicht nur ein Roman. Eine Geschichte, die zeigt, wie Geld wirklich funktioniert.","meta.ogDescription":"Eine Geschichte, die zeigt, wie Geld wirklich funktioniert.","header.edition":"Ausgabe 2026","header.navIntro":"Einleitung","header.navBook":"Das Buch","header.navAuthor":"Über den Autor","header.langLabel":"De","header.langAria":"Sprache: Deutsch","header.buy":"Jetzt kaufen","header.price":"$9.99","hero.kicker":"Die unsichtbaren Regeln des Wohlstands","hero.horseAlt":"Eine Schachfigur, die in einen aufgerollten Dollarschein gewickelt ist","hero.bylineLead":"Ein Roman von","hero.bylineName":"Óscar Pérez","hero.titleLine1":"Schach","hero.titleLine2":"dem Geld","intro.metaTheme":"Die Prinzipien des Wohlstands.","intro.metaDate":"10. Februar 2026, 23:31 Uhr","intro.metaPlace":"Boston, MA","intro.manifesto1":"{g}Die meisten Menschen treten ins Erwachsenenleben, als würden sie sich zum ersten Mal an ein Schachbrett setzen: ohne die Regeln zu kennen, ohne zu erkennen, welche Figuren wirklich zählen, und in dem Glauben, harte Arbeit allein reiche aus, um im Spiel zu bleiben.{/g}","intro.manifesto2":"{g}Doch Geld folgt seiner eigenen Logik, mit seinen eigenen Fallen, seinen Strafen und seinen Belohnungen. Schach dem Geld erzählt die Geschichte einer Partie, deren Regeln auf die harte Tour erlernt werden, und lädt dazu ein, zu entdecken, dass wahre finanzielle Freiheit nicht darin besteht, mehr zu besitzen, sondern mit Spielraum und Würde zu leben und ohne Angst das Leben wählen zu können, das man wirklich führen möchte.{/g}","book.metaTitle":"Das Buch","book.metaSubline":"5 Sprachen. 3 Formate. Eine Geschichte.","book.coverAlt":"Buchcover von Schach dem Geld","book.slide1Alt":"Erste Innenseite des Buchs","book.slide2Alt":"Zweite Innenseite des Buchs","book.coverSrc":"/img/book-cover-DE.webp","book.slide1Src":"/img/book-1-DE.png","book.slide2Src":"/img/book-2-DE.png","book.prevAria":"Vorherige Doppelseite","book.nextAria":"Nächste Doppelseite","book.optionsHeader":"Formate","book.priceHeader":"Preis (USD)","book.rowPrint":"Taschenbuch","book.pricePrint":"15,99 $","book.rowKindle":"Kindle-Ausgabe","book.priceKindle":"9,99 $","book.rowPrintAudio":"Taschenbuch + Hörbuch","book.pricePrintAudio":"19,99 $","book.rowAudio":"Hörbuch","book.priceAudio":"9,99 $","book.buyLabel":"Bei Amazon kaufen","book.buyUrl":"https://www.amazon.com/dp/B0H9ZSPHP8/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6lt49SVRIrSPNFTeMZ1wKv-dXqhmYL0tGJGo70ep1g2Yy0GZDrTDbDQOEDAVcK-XYd0PVU5jnWbPErcArdFXnAcWUKOyJJ11BMnacO_ZcfpRje7qreXy29pPBK35mChq_szwoGO7dM4UflCc3pFXxm-x1-W-Hs5FgVJ_YpWlzdwy-Hi3aHJsAwhx198abHo1IyUWUZbGfH9QeOOynV2I_tS5ueGmJw9a0x8REIzkvkU.r4d2SLNqyOuFKdpcZUaLZbg5fJGJYwCKBHwTN9h2mHI&qid=1784786580&sr=1-1","book.kindleNote":"(*) Kostenlos mit Kindle Unlimited","book.claim":"Kein klassisches Finanzbuch.{br}Nicht nur ein Roman.{br}Eine Geschichte, die zeigt,{br}wie Geld wirklich funktioniert.","book.synopsis1":"{em.book__em.book__em--name}Oliver Harper{/em} kommt mit einem Stipendium nach Harvard, mit einem viel zu großen Koffer und dem Gefühl, eine Welt zu betreten, die nicht für ihn gemacht wurde. Er stammt aus einer Familie, in der Geld immer knapp war, finanzielle Fehler teuer bezahlt wurden und Hoffnung ebenso schwer wog wie die Rechnungen.","book.synopsis2":"Nachdem Oliver gelernt hat, die Welt durch die Logik eines Schachbretts zu betrachten, {em.book__em}erkennt er bald, dass Geld, genau wie Schach, unsichtbaren Regeln folgt: Es gewinnt nicht derjenige, der am reichsten wirkt oder am schnellsten zieht, sondern derjenige, der die Stellung versteht, bevor er den nächsten Zug macht.{/em}","book.synopsis3":"Schach dem Geld ist eine Geschichte über Reichtum, Ehrgeiz, Familie und Freiheit. Kein Handbuch, sondern eine Partie, die sich über ein ganzes Leben erstreckt: die Geschichte eines jungen Mannes, der Zug für Zug lernt, nicht länger nur zu überleben, sondern sich ein eigenes Leben aufzubauen.","book.cta":"Kapitel 1 kostenlos lesen und anhören","book.formLabel":"Ihre E-Mail-Adresse","book.formPlaceholder":"Ihre E-Mail-Adresse","book.send":"Senden","book.formConsent":"(*) Mit der Anmeldung erhalten Sie gelegentlich Neuigkeiten zum Buch.","book.sending":"Wird gesendet…","book.sendThanks":"Wir melden uns bald. Danke!","book.sendError":"Bitte erneut versuchen","author.photoAlt":"Porträt von Óscar Pérez","author.heading":"Der Autor","author.origin":"VALENCIA, SPANIEN · 1973","author.bio":"{em}Óscar Pérez{/em} hat viele Jahre zwischen Vorstandsräumen, Bühnen und Flughäfen auf der ganzen Welt verbracht – als {em}Unternehmer und CEO in der Technologiebranche{/em}. Er hat internationale Konferenzen in Städten wie New York, Los Angeles, San Francisco, Tokio, Toronto, Amsterdam, London, Berlin und Paris organisiert und mit Unternehmen wie {em}Google, Microsoft und Adobe{/em} zusammengearbeitet.{br}{br}Auf diesem Weg gewann er etwas weitaus Wertvolleres als Prestige oder Kontakte: {em}ein unmittelbares Verständnis dafür, wie jene denken und Entscheidungen treffen, die die Regeln von Geld, Erfolg und persönlicher Freiheit wirklich verstehen{/em}, und was nachhaltigen Reichtum von seinem bloßen Anschein unterscheidet.","author.signatureAlt":"Unterschrift von Óscar Pérez","author.name":"ÓSCAR PÉREZ","author.role":"Gründer und ehemaliger CEO von Awwwards","claim.lineA":"{words}Schach, Leben und Finanzen teilen eine Wahrheit:{/words}","claim.lineB":"{words}Alles verändert sich, wenn man die Regeln versteht.{/words}","footer.navBook":"Das Buch","footer.navAuthor":"Über den Autor","footer.navBuy":"Jetzt kaufen","footer.helloAria":"Kontakt","footer.copyright":"© 2026 Óscar Pérez. Alle Rechte vorbehalten.","footer.creditPre":"Website entwickelt von","footer.followTitle":"Dem Autor folgen","language.kicker":"Wählen Sie Ihre Sprache","language.en":"English","language.es":"Español","language.fr":"Français","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"Website entwickelt von"},re={"meta.title":"Money in Check — Óscar Pérez का उपन्यास","meta.description":"यह कोई पारंपरिक वित्तीय पुस्तक नहीं है। यह एक ऐसी कहानी है जो आपको दिखाती है कि धन वास्तव में कैसे काम करता है।","meta.ogDescription":"एक ऐसी कहानी जो आपको दिखाती है कि धन वास्तव में कैसे काम करता है।","header.edition":"2026 संस्करण","header.navIntro":"परिचय","header.navBook":"पुस्तक","header.navAuthor":"लेखक के बारे में","header.langLabel":"हि","header.langAria":"भाषा: हिन्दी","header.buy":"अभी खरीदें","header.price":"$9.99","hero.kicker":"समृद्धि के अदृश्य नियम","hero.horseAlt":"लिपटे हुए डॉलर नोट वाला शतरंज का घोड़ा","hero.bylineLead":"एक उपन्यास, लेखक","hero.bylineName":"Óscar Pérez","hero.titleLine1":"Money","hero.titleLine2":"in Check","intro.metaTheme":"समृद्धि के सिद्धांत।","intro.metaDate":"10 फ़रवरी 2026, 11:31 pm","intro.metaPlace":"बोस्टन, MA","intro.manifesto1":"{g}अधिकांश लोग वयस्क जीवन में ऐसे प्रवेश करते हैं, मानो वे पहली बार शतरंज की बिसात के सामने बैठे हों—नियमों को जाने बिना, यह पहचाने बिना कि कौन-सी गोटियाँ वास्तव में मायने रखती हैं, और यह मानते हुए कि केवल कड़ी मेहनत ही खेल में बने रहने के लिए पर्याप्त होगी।{/g}","intro.manifesto2":"{g}लेकिन धन की अपनी तर्क-व्यवस्था होती है, अपने जाल, अपनी सज़ाएँ और अपने पुरस्कार। Money in Check उस खेल की कहानी है जिसे कठिन अनुभवों से सीखा गया, और यह खोजने का निमंत्रण भी कि वास्तविक आर्थिक स्वतंत्रता का अर्थ अधिक धन होना नहीं, बल्कि गरिमा और पर्याप्त गुंजाइश के साथ जीना और बिना भय के वह जीवन चुन पाना है जिसे आप सचमुच जीना चाहते हैं।{/g}","book.metaTitle":"पुस्तक","book.metaSubline":"5 भाषाएँ। 3 प्रारूप। एक कहानी।","book.coverAlt":"Money in Check का कवर","book.slide1Alt":"पुस्तक का पहला आंतरिक पृष्ठ","book.slide2Alt":"पुस्तक का दूसरा आंतरिक पृष्ठ","book.coverSrc":"/img/book-cover-IN.webp","book.slide1Src":"/img/book-1-IN.png","book.slide2Src":"/img/book-2-IN.png","book.prevAria":"पिछला स्प्रेड","book.nextAria":"अगला स्प्रेड","book.optionsHeader":"प्रारूप","book.priceHeader":"मूल्य (USD)","book.rowPrint":"पेपरबैक","book.pricePrint":"$15.99","book.rowKindle":"किंडल संस्करण","book.priceKindle":"$9.99","book.rowPrintAudio":"पेपरबैक + ऑडियोबुक","book.pricePrintAudio":"$19.99","book.rowAudio":"ऑडियोबुक","book.priceAudio":"$9.99","book.buyLabel":"Amazon पर खरीदें","book.buyUrl":"https://www.amazon.com/dp/B0H9ZSPHP8/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6lt49SVRIrSPNFTeMZ1wKv-dXqhmYL0tGJGo70ep1g2Yy0GZDrTDbDQOEDAVcK-XYd0PVU5jnWbPErcArdFXnAcWUKOyJJ11BMnacO_ZcfpRje7qreXy29pPBK35mChq_szwoGO7dM4UflCc3pFXxm-x1-W-Hs5FgVJ_YpWlzdwy-Hi3aHJsAwhx198abHo1IyUWUZbGfH9QeOOynV2I_tS5ueGmJw9a0x8REIzkvkU.r4d2SLNqyOuFKdpcZUaLZbg5fJGJYwCKBHwTN9h2mHI&qid=1784786580&sr=1-1","book.kindleNote":"(*) Kindle Unlimited सदस्यता के साथ निःशुल्क","book.claim":"यह कोई पारंपरिक वित्तीय पुस्तक नहीं है।{br}यह केवल एक उपन्यास भी नहीं है।{br}यह एक ऐसी कहानी है जो आपको दिखाती है{br}कि धन वास्तव में कैसे काम करता है।","book.synopsis1":"{em.book__em.book__em--name}ओलिवर हार्पर{/em} छात्रवृत्ति के सहारे हार्वर्ड पहुँचता है, साथ में एक जरूरत से ज़्यादा बड़ा सूटकेस और यह एहसास कि वह ऐसी दुनिया में प्रवेश कर रहा है जो उसके लिए नहीं बनाई गई थी। वह ऐसे परिवार से आता है जहाँ धन हमेशा कम रहा, आर्थिक गलतियों की बड़ी कीमत चुकानी पड़ी और आशा का बोझ बिलों जितना ही भारी था।","book.synopsis2":"शतरंज की बिसात के तर्क से दुनिया को देखना सीखने के बाद, {em.book__em}ओलिवर जल्द ही समझ जाता है कि धन भी शतरंज की तरह अदृश्य नियमों से चलता है: जीत उस व्यक्ति की नहीं होती जो सबसे अमीर दिखाई देता है या सबसे तेज़ चाल चलता है, बल्कि उसकी होती है जो अगली चाल चलने से पहले स्थिति को समझता है।{/em}","book.synopsis3":"Money in Check धन, महत्वाकांक्षा, परिवार और स्वतंत्रता की कहानी है। यह कोई मार्गदर्शिका नहीं, बल्कि जीवन भर खेली जाने वाली एक बाज़ी है: एक ऐसे युवा की कहानी जो चाल-दर-चाल केवल जीवित रहना छोड़कर अपना स्वयं का जीवन बनाना सीखता है।","book.cta":"अध्याय 1 निःशुल्क पढ़ें और सुनें","book.formLabel":"आपका ईमेल","book.formPlaceholder":"आपका ईमेल","book.send":"भेजें","book.formConsent":"(*) सदस्यता लेने पर आप पुस्तक से संबंधित कभी-कभार अपडेट प्राप्त करने के लिए सहमत होते हैं।","book.sending":"भेजा जा रहा है…","book.sendThanks":"जल्द मिलेंगे। धन्यवाद!","book.sendError":"फिर से प्रयास करें","author.photoAlt":"Óscar Pérez का चित्र","author.heading":"लेखक","author.origin":"वेलेंसिया, स्पेन · 1973","author.bio":"{em}Óscar Pérez{/em} ने {em}एक उद्यमी और प्रौद्योगिकी क्षेत्र के सीईओ{/em} के रूप में दुनिया भर के बोर्डरूम, मंचों और हवाई अड्डों के बीच कई वर्ष बिताए हैं। उन्होंने न्यूयॉर्क, लॉस एंजिलिस, सैन फ्रांसिस्को, टोक्यो, टोरंटो, एम्स्टर्डम, लंदन, बर्लिन और पेरिस जैसे शहरों में अंतरराष्ट्रीय सम्मेलनों का आयोजन किया है और {em}Google, Microsoft तथा Adobe{/em} जैसी कंपनियों के साथ काम किया है।{br}{br}इस यात्रा में उन्हें प्रतिष्ठा या संपर्कों से कहीं अधिक मूल्यवान चीज़ मिली: {em}यह प्रत्यक्ष समझ कि धन, सफलता और व्यक्तिगत स्वतंत्रता के नियमों को वास्तव में समझने वाले लोग कैसे सोचते हैं और निर्णय लेते हैं{/em}, तथा स्थायी संपत्ति को उसके केवल बाहरी दिखावे से क्या अलग करता है।","author.signatureAlt":"Óscar Pérez के हस्ताक्षर","author.name":"ÓSCAR PÉREZ","author.role":"Awwwards के संस्थापक और पूर्व सीईओ","claim.lineA":"{words}शतरंज, जीवन और धन एक सत्य साझा करते हैं:{/words}","claim.lineB":"{words}जब आप नियम समझते हैं, तो सब कुछ बदल जाता है।{/words}","footer.navBook":"पुस्तक","footer.navAuthor":"लेखक के बारे में","footer.navBuy":"अभी खरीदें","footer.helloAria":"संपर्क करें","footer.copyright":"मानव शर्मा द्वारा हिंदी में अनुवादित","footer.copyrightUrl":"https://www.fiverr.com/s/2KXWWWV","footer.creditPre":"वेबसाइट","footer.followTitle":"लेखक को फ़ॉलो करें","language.kicker":"अपनी भाषा चुनें","language.en":"English","language.es":"Español","language.fr":"Français","language.de":"Deutsch","language.hi":"हिन्दी","language.creditPre":"वेबसाइट cloudstudio द्वारा विकसित"},C={en:Y,es:ee,fr:ae,de:te,hi:re},q=Object.keys(C);let z="en";const ie={2:"walk",3:"mountain",4:"boat",5:"hat",6:"bike"};function I(o){const e=ie[o];return`<video class="${e?`intro__doodle intro__doodle--${e}`:"intro__doodle"}" src="/video/doodle-${o}.mp4" autoplay muted loop playsinline aria-hidden="true"></video>`}function se(o){return z!=="zh"?o.split(/\s+/):o.match(/[\u3400-\u4DBF\u4E00-\u9FFF\u3000-\u303F\uFF00-\uFFEF]|[^\s\u3400-\u4DBF\u4E00-\u9FFF\u3000-\u303F\uFF00-\uFFEF]+/g)||[]}function P(o,e){return`<span class="${e?`word ${e}`:"word"}">${o}</span>`}function L(o){const e=[];for(const n of o.split(/(\{gif:\d+\}|\{w\.[\w.\-]+\|[^}]*\})/g)){if(!n)continue;let t;if(t=/^\{gif:(\d+)\}$/.exec(n))e.push(I(Number(t[1])));else if(t=/^\{w\.([\w.\-]+)\|([^}]*)\}$/.exec(n))e.push(P(t[2],t[1].split(".").filter(Boolean).join(" ")));else for(const a of se(n.trim()))a&&e.push(P(a))}return e.join(" ")}function le(o){const e=["intro__group"];if(o){const n=o.split(",").map(t=>t.trim());n.includes("dim")&&e.push("is-dim"),n.includes("em")&&e.push("is-em")}return e.join(" ")}function ce(o,e){let n=o.replace(/\{\{\s*([\w.]+)\s*\}\}/g,(t,a)=>Object.prototype.hasOwnProperty.call(e,a)?e[a]:(console.warn(`[i18n] missing key: ${a}`),""));return n=n.replace(/\{g(?::([a-z,]+))?\}([\s\S]*?)\{\/g\}/g,(t,a,r)=>`<span class="${le(a)}">${L(r)}</span>`),n=n.replace(/\{words\}([\s\S]*?)\{\/words\}/g,(t,a)=>L(a)),n=n.replace(/\{gif:(\d+)\}/g,(t,a)=>I(Number(a))),n=n.replace(/\{w\.([\w.\-]+)\|([^}]*)\}/g,(t,a,r)=>P(r,a.split(".").filter(Boolean).join(" "))),n=n.replace(/\{em((?:\.[\w\-]+)+)\}/g,(t,a)=>`<em class="${a.split(".").filter(Boolean).join(" ")}">`),n=n.replace(/\{em\}/g,"<em>"),n=n.replace(/\{\/em\}/g,"</em>"),n=n.replace(/\{br\}/g,"<br>"),n}function de(){let e=window.location.pathname;e.startsWith("/")&&(e=e.slice(1)),e=e.replace(/^\/+/,"");const n=e.split("/")[0];return z=q.includes(n)?n:"en",z}const he={en:"en-US",es:"es-ES",fr:"fr-FR",de:"de-DE",hi:"hi-IN"};function ue(o){try{const e=he[o]||"en-US",n=new Date,t=new Intl.DateTimeFormat(e,{year:"numeric",month:"long",day:"numeric"}).format(n),a=new Intl.DateTimeFormat(e,{hour:"numeric",minute:"2-digit"}).format(n);return`${t}, ${a}`}catch{return null}}function pe(o){const n={...C.en,...C[o]||{}};for(const a of q)n[`lang.${a}Href`]=a==="en"?"/":"/".endsWith("/")?`/${a}/`:`//${a}/`,n[`lang.${a}Active`]=o===a?"language__item--active":"language__item--ghost";const t=ue(o);return t&&(n["intro.metaDate"]=t),n}function me(o,e){document.documentElement.lang=o,e["meta.title"]&&(document.title=e["meta.title"]);const n=e["meta.ogDescription"]??e["meta.description"],t=(a,r)=>{if(r==null)return;const i=document.querySelector(a);i&&i.setAttribute("content",r)};t('meta[name="description"]',e["meta.description"]),t('meta[property="og:title"]',e["meta.title"]),t('meta[property="og:description"]',n),t('meta[name="twitter:title"]',e["meta.title"]),t('meta[name="twitter:description"]',n)}const ge=[{text:"e4",x:210,y:150,atf:!0},{text:"e5",x:391,y:228,atf:!0},{text:"Nf3",x:648,y:334,atf:!0},{text:"Nc6",x:1022,y:289,atf:!0},{text:"Bb5",x:1215,y:481,atf:!0},{text:"Nf6",x:1484,y:441,atf:!0},{text:"O-O",x:495,y:556,atf:!0},{text:"d4",x:639,y:715,atf:!0},{text:"Nd6",x:1098,y:727,atf:!0},{text:"Bxc6",x:478,y:891,atf:!0},{text:"dxc6",x:1254,y:935,atf:!0},{text:"dxe5",x:235,y:1030,atf:!0},{text:"hNf5",x:667,y:1091,atf:!0},{text:"Qxd8",x:1628,y:1069,atf:!0},{text:"Kxd8",x:989,y:1231},{text:"Nc3",x:600,y:1439},{text:"Ke8",x:1001,y:1686},{text:"e4",x:126,y:1686},{text:"e5",x:283,y:1861},{text:"Nf3",x:992,y:1957},{text:"Nc6",x:732,y:2080},{text:"Bb5",x:1607,y:1643},{text:"Nf6",x:1505,y:2205},{text:"O-O",x:495,y:2151},{text:"d4",x:800,y:2349},{text:"Nd6",x:1094,y:2192},{text:"Bxc6",x:280,y:2349},{text:"dxc6",x:1105,y:2599},{text:"dxe5",x:119,y:2633},{text:"hNf5",x:802,y:2739},{text:"Qxd8",x:1628,y:2664},{text:"Kxd8",x:1017,y:2865},{text:"Nc3",x:628,y:3e3},{text:"Ke8",x:1233,y:3161},{text:"e4",x:83,y:3251},{text:"e5",x:283,y:3361},{text:"Nf6",x:1610,y:3527},{text:"dxc6",x:1022,y:3343},{text:"Qxd8",x:673,y:3448},{text:"Nc3",x:1112,y:3543},{text:"dxc6",x:237,y:5051},{text:"Bg3",x:1258,y:5174},{text:"Qxa2",x:672,y:5266},{text:"e4",x:83,y:5384},{text:"e5",x:283,y:5494},{text:"dxc6",x:1017,y:5476},{text:"Qxd8",x:673,y:5581},{text:"Nf6",x:1612,y:5589},{text:"Nc3",x:1461,y:5971},{text:"dxc6",x:376,y:6852},{text:"Bg3",x:1393,y:6975},{text:"Qxa2",x:806,y:7067},{text:"e4",x:222,y:7185},{text:"Qxd8",x:1215,y:7250},{text:"dxc6",x:1452,y:7523},{text:"Bg3",x:64,y:7715},{text:"Qxf2",x:1468,y:8067},{text:"Nxd3",x:130,y:8104},{text:"Qf4",x:1403,y:8566},{text:"e7",x:410,y:8611},{text:"Be2",x:932,y:8832}],be=["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d3","d6","O-O","a6","a4","h6","Re1","O-O","h3","a5","Nbd2","Be6","Bb5","Na7","d4","ed4","cd4","Bb4","Bd3","d5","e5","Nd7","Re2","c5","Nf1","cd4","Bc2","Nc5","Nd4","Nc6","Ng3","Nd4","Qd4","f5","ef6","Qf6","Be3","Qd4","Bd4","Bd7","Rd1","Rae8","Re8","Be8","b3","b5","ab5","Bb5","Be3","Bc6","Nf5","Ne4","Nd4"],fe=ge.map((o,e)=>({...o,text:be[e]??o.text})),D=["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d3","d6","O-O","a6","a4","h6","Re1","O-O","h3","a5","Nbd2","Be6","Bb5","Na7","d4","ed4","cd4","Bb4","Bd3","d5","e5"],_e=[[-9.3,-16.6],[-11.7,-2.2],[-8,15.7],[-15.5,-9],[-13,8.5],[-5.5,-20]],ke=[[6.4,-13.7],[15.2,1.2],[9,14.5],[14.5,-8.5],[5.5,18],[16.5,-15.5]],T=[12.41,-4.96,8.16,-6.5,5,-8.16,3.5],v=[1,.85,.58,.48,.23],ye=170,we=2600,ve=4e3,xe=800,x=.665,A=.7;function Ae(){var N;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return Promise.resolve();const o=document.createElement("div");o.id="loader",o.setAttribute("aria-hidden","true"),o.innerHTML=`
    <div class="loader__grid"></div>
    <div class="loader__stage">
      <video class="loader__video" src="/video/loading.mp4" autoplay muted loop playsinline></video>
    </div>`,document.body.appendChild(o);const e=o.querySelector(".loader__video");e.muted=!0,e.playsInline=!0,(N=e.play)==null||N.call(e).catch(()=>{});const n=o.querySelector(".loader__stage");document.documentElement.style.overflow="hidden";const t=o.querySelector(".loader__grid");let a=x,r=A;function i(){const l=getComputedStyle(document.documentElement),f=parseFloat(l.getPropertyValue("--g-px"))||200,_=parseFloat(l.getPropertyValue("--g-py"))||f,p=parseFloat(l.getPropertyValue("--g-ox"))||0,d=parseFloat(l.getPropertyValue("--g-oy"))||0,g=window.innerWidth/2,k=window.innerHeight/2;t.style.backgroundSize=`${a*f}px ${r*_}px`,t.style.backgroundPosition=`${g+a*(p-g)}px ${k+r*(d-k)}px`}i();const s=()=>i();window.addEventListener("resize",s);let b=0,c=0,m=0;const h=[];function u(){const l=b%2===0,f=l?_e:ke,[_,p]=f[(l?c++:m++)%f.length],d=document.createElement("span");if(d.className="loader__move",d.textContent=D[b%D.length],d.style.setProperty("--mx",`${_}rem`),d.style.setProperty("--my",`${p}rem`),d.style.setProperty("--mr",`${T[b%T.length]}deg`),n.appendChild(d),b++,h.unshift(d),h.forEach((g,k)=>{k<v.length&&g.style.setProperty("--mo",v[k])}),h.length>v.length){const g=h.pop();g.classList.add("is-out"),setTimeout(()=>g.remove(),350)}requestAnimationFrame(()=>d.classList.add("is-in"))}let y=0,w=!1;const F=()=>{w||(w=!0,u(),y=setInterval(u,ye))};try{document.fonts.load('3.5rem "Liu Jian Mao Cao"').then(F)}catch{}setTimeout(F,400);let B;const G=new Promise(l=>B=l),R=new Promise(l=>setTimeout(l,we)),j=new Promise(l=>{e.readyState>=3?l():e.addEventListener("canplay",()=>l(),{once:!0})}),K=new Promise(l=>setTimeout(l,ve));Promise.race([Promise.all([R,j]),K]).then($);function $(){clearInterval(y),o.classList.add("is-leaving");const l=performance.now(),f=p=>p<.5?4*p*p*p:1-(-2*p+2)**3/2;function _(p){const d=Math.min(1,(p-l)/xe),g=f(d);if(a=x+(1-x)*g,r=A+(1-A)*g,i(),d<1){requestAnimationFrame(_);return}document.documentElement.style.overflow="",B(),o.classList.add("is-done"),setTimeout(()=>{window.removeEventListener("resize",s),o.remove()},450)}requestAnimationFrame(_)}return G}const Ce=`<!-- header — fixed top bar (excluded from flow slices) -->
<header id="header" class="section section--header">
  <a class="header__logo" href="#hero">{{brand}}</a>
  <span class="header__edition">{{header.edition}}</span>

  <div class="header__menu">
    <nav class="header__nav" aria-label="Main">
      <a class="header__link header__link--intro header__link--active" href="#intro">{{header.navIntro}}</a>
      <a class="header__link header__link--book" href="#book">{{header.navBook}}</a>
      <a class="header__link header__link--author" href="#author">{{header.navAuthor}}</a>
    </nav>

    <button class="header__lang" type="button" aria-label="{{header.langAria}}">
      <span class="header__lang-label">{{header.langLabel}}</span>
      <svg class="header__lang-caret" viewBox="0 0 8 7" aria-hidden="true" focusable="false">
        <path d="M1 1.5 4 5.5 7 1.5" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
      </svg>
    </button>
  </div>

  <div class="header__actions">
    <a class="header__buy" href="{{book.buyUrl}}" target="_blank" rel="noopener">{{header.buy}}</a>
    <span class="header__price">{{header.price}}</span>
  </div>
</header>
`,ze=`<!-- hero — Figma slice y 0–1150 -->
<section id="hero" class="section section--hero">
  <p class="hero__kicker">{{hero.kicker}}</p>

  <h1 class="hero__title">
    <span class="hero__title-line hero__title-line--1">{{hero.titleLine1}}</span>
    <span class="hero__title-line hero__title-line--2">{{hero.titleLine2}}</span>
  </h1>

  <img
    class="hero__horse"
    src="/img/horse.webp"
    alt="{{hero.horseAlt}}"
    fetchpriority="high"
    decoding="async"
  />

  <video
    class="hero__smoker"
    src="/video/doodle-1.mp4"
    autoplay
    muted
    loop
    playsinline
    aria-hidden="true"
  ></video>

  <p class="hero__byline">
    <em class="hero__byline-lead">{{hero.bylineLead}}</em>
    <span class="hero__byline-name">{{hero.bylineName}}</span>
  </p>

  <div class="hero__scroll" aria-hidden="true">
    <span class="hero__scroll-word">
      <span class="hero__scroll-letter">S</span>
      <span class="hero__scroll-letter">C</span>
      <span class="hero__scroll-letter">R</span>
      <span class="hero__scroll-letter">O</span>
      <span class="hero__scroll-letter">l</span>
      <span class="hero__scroll-letter">l</span>
    </span>
    <!-- lottie-web (light) mounts the animated mouse doodle here — anim/hero.js -->
    <div class="hero__scroll-mouse"></div>
  </div>

  <div class="hero__compass" aria-hidden="true">
    <span class="hero__compass-letter hero__compass-letter--n">N</span>
    <span class="hero__compass-line"></span>
    <span class="hero__compass-letter hero__compass-letter--s">S</span>
  </div>
</section>
`,Pe=`<!-- intro — magazine meta line + manifesto. Figma slice y1150–3593 (offset 1150, height 244.3rem) -->
<section id="intro" class="section section--intro">
  <p class="intro__meta">
    <span class="intro__meta-item intro__meta-item--brand">{{brand}}.</span>
    <span class="intro__meta-item intro__meta-item--theme">{{intro.metaTheme}}</span>
    <time class="intro__meta-item intro__meta-item--date" datetime="2026-02-10T23:31">{{intro.metaDate}}</time>
    <span class="intro__meta-item intro__meta-item--place">{{intro.metaPlace}}</span>
  </p>

  <!-- Manifesto copy + inline structure live in the locale files as the
       intro.manifesto1 / .manifesto2 token strings (groups, .word wrapping,
       {gif:N} doodles, the wide-after word). See src/js/i18n.js for the syntax.
       The reveal scrub still targets .word / img.intro__doodle in DOM order. -->
  <div class="intro__manifesto">
    <p class="intro__paragraph">{{intro.manifesto1}}</p>

    <p class="intro__paragraph">{{intro.manifesto2}}</p>
  </div>
</section>
`,Se=`<!-- book — cover, interior slider, pricing, claim, synopsis, email form -->
<section id="book" class="section section--book">
  <p class="book__meta">
    <span class="book__meta-title">{{book.metaTitle}}</span>
    <span class="book__meta-subline">{{book.metaSubline}}</span>
  </p>

  <!-- slider: ALL images are slides, cover included (client, 8 jul). At rest
       the track reproduces the design's static geometry — cover at its Figma
       spot, interior-1 in full, interior-3 peeking 9.8rem — and the arrows
       move the whole row so every slide can be brought fully into view.
       The wrapper clips overflow so the track never creates horizontal scroll. -->
  <div class="book__slider">
    <div class="book__track">
      <img
        class="book__slide book__slide--cover"
        src="{{book.coverSrc}}"
        alt="{{book.coverAlt}}"
        loading="lazy"
        decoding="async"
      />
      <img
        class="book__slide book__slide--1"
        src="{{book.slide1Src}}"
        alt="{{book.slide1Alt}}"
        loading="lazy"
        decoding="async"
      />
      <img
        class="book__slide book__slide--2"
        src="{{book.slide2Src}}"
        alt="{{book.slide2Alt}}"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>

  <div class="book__arrows">
    <button class="book__arrow book__arrow--prev" type="button" aria-label="{{book.prevAria}}">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M19 12H5m0 0l6-6m-6 6l6 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button class="book__arrow book__arrow--next" type="button" aria-label="{{book.nextAria}}">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12h14m0 0l-6-6m6 6l-6 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>

  <div class="book__pricing">
    <span class="book__pricing-header book__pricing-header--label">{{book.optionsHeader}}</span>
    <span class="book__pricing-header book__pricing-header--price">{{book.priceHeader}}</span>

    <div class="book__row book__row--1">
      <span class="book__row-label">{{book.rowPrint}}</span>
      <span class="book__row-price">{{book.pricePrint}}</span>
    </div>
    <div class="book__row book__row--2">
      <span class="book__row-label">{{book.rowKindle}}</span>
      <span class="book__row-price">{{book.priceKindle}}</span>
    </div>
    <div class="book__row book__row--3">
      <span class="book__row-label">{{book.rowPrintAudio}}</span>
      <span class="book__row-price">{{book.pricePrintAudio}}</span>
    </div>
    <div class="book__row book__row--4">
      <span class="book__row-label">{{book.rowAudio}}</span>
      <span class="book__row-price">{{book.priceAudio}}</span>
    </div>

    <span class="book__sep book__sep--1" aria-hidden="true"></span>
    <span class="book__sep book__sep--2" aria-hidden="true"></span>
    <span class="book__sep book__sep--3" aria-hidden="true"></span>

    <button class="book__buy" type="button">
      <span class="book__buy-label">{{book.buyLabel}}</span>
    </button>
  </div>

  <!-- Kindle note lives OUTSIDE the pricing box (client 14 jul: "va fuera de la
       caja, como en el diseño original"); the box's bottom margin is trimmed. -->
  <p class="book__kindle-note">{{book.kindleNote}}</p>

  <!-- This right-hand editorial column must stay in normal flow: translated
       claims can gain lines, and every following block needs to move with it. -->
  <div class="book__content">
    <!-- claim: line breaks are {br} tokens inside book.claim (locale files) -->
    <h2 class="book__claim">{{book.claim}}</h2>

    <!-- synopsis: fixed <p> slots; emphasis ({em.book__em…}) travels with the text -->
    <div class="book__synopsis">
      <p>{{book.synopsis1}}</p>
      <p>{{book.synopsis2}}</p>
      <p>{{book.synopsis3}}</p>
    </div>

    <!-- resolved vs hi-res ref: CTA is Regular (400) upright @2.3rem, underlined — no per-word italics
         (measured: ref text width 325px = Figma box, glyph band 25px; matches 400@23px exactly) -->
    <h3 class="book__cta">{{book.cta}}</h3>

    <form class="book__form" action="/api/newsletter.php" method="post">
      <input type="hidden" name="source" value="Money in Check newsletter" />
      <input class="book__honeypot" type="text" name="_honey" tabindex="-1" autocomplete="off" />
      <label class="book__form-label" for="book-email">{{book.formLabel}}</label>
      <input
        class="book__input"
        id="book-email"
        type="email"
        name="email"
        placeholder="{{book.formPlaceholder}}"
        autocomplete="email"
        aria-describedby="book-consent book-form-status"
        required
      />
      <span class="book__progress" aria-hidden="true"></span>
      <span class="book__email-copy book__email-copy--base" aria-hidden="true"></span>
      <span class="book__email-copy book__email-copy--filled" aria-hidden="true"></span>
      <button
        class="book__send"
        type="submit"
        data-sending="{{book.sending}}"
        data-thanks="{{book.sendThanks}}"
        data-error="{{book.sendError}}"
      >
        <span class="book__send-label">{{book.send}}</span>
      </button>
      <span class="book__spinner book__spinner--base" aria-hidden="true"></span>
      <span class="book__spinner-reveal" aria-hidden="true">
        <span class="book__spinner book__spinner--filled"></span>
      </span>
      <span class="book__status" id="book-form-status" role="status" aria-live="polite"></span>
    </form>
    <p class="book__consent" id="book-consent">{{book.formConsent}}</p>
  </div>
</section>
`,Ee=`<!-- author — About the Author section (Figma slice 5497–7255) -->
<section id="author" class="section section--author" aria-labelledby="author-heading">
  <img class="author__photo" src="/img/Oscar-photo.webp" alt="{{author.photoAlt}}" loading="lazy" decoding="async" />
  <h2 id="author-heading" class="author__heading">{{author.heading}}</h2>
  <p class="author__origin">{{author.origin}}</p>

  <!-- Bio copy lives in the locale files (author.bio). Emphasis is {em}…{/em}
       and the Figma line wraps are {br} tokens — both travel with the text
       (the EN draft keeps the exact reference wraps; ES reflows naturally).

       Bio + signature cluster share ONE flow column (the Figma text box:
       X 343, W 1044, top 5726) so the signature hangs off the END of the
       bio instead of a fixed Y. The Figma draft ran 17 lines; every shipped
       locale is shorter (EN/ES 12, FR/DE 14, HI 10), and with a pinned Y
       those missing lines opened a hole above the signature. -->
  <div class="author__col">
    <p class="author__bio">{{author.bio}}</p>

    <img class="author__signature" src="/img/signature.webp" alt="{{author.signatureAlt}}" loading="lazy" decoding="async" />
    <p class="author__name">{{author.name}}</p>
    <p class="author__role">{{author.role}}</p>
  </div>

  <!-- Polaroids: ghosted (grayscale + low opacity) per reference, except the
       marquee photo which is full color in the ref. Rotations are subtle.
       WAVE 3: wrapped in .author__polaroids (display:contents on desktop —
       layout-neutral; becomes a scroll-snap strip ≤1080px). tabindex makes
       each figure focusable so the wave-2 :focus-within color swap doubles
       as the touch/tap + keyboard equivalent of the hover. -->
  <div class="author__polaroids">
  <figure class="author__polaroid author__polaroid--1" tabindex="0">
    <img src="/img/author-images-1.webp" alt="{{author.polaroid1Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption1}}<span class="author__caption-date">{{author.caption1Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--2" tabindex="0">
    <img src="/img/author-images-2.webp" alt="{{author.polaroid2Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption2}}<span class="author__caption-date">{{author.caption2Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--3" tabindex="0">
    <img src="/img/author-images-3.webp" alt="{{author.polaroid3Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption3}}<span class="author__caption-date">{{author.caption3Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--4" tabindex="0">
    <img src="/img/author-images-4.webp" alt="{{author.polaroid4Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption4}}<span class="author__caption-date">{{author.caption4Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--5" tabindex="0">
    <img src="/img/author-images-5.webp" alt="{{author.polaroid5Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption5}}<span class="author__caption-date">{{author.caption5Date}}</span></figcaption>
  </figure>

  <figure class="author__polaroid author__polaroid--6" tabindex="0">
    <img src="/img/author-images-6.webp" alt="{{author.polaroid6Alt}}" loading="lazy" decoding="async" />
    <figcaption class="author__caption">{{author.caption6}}<span class="author__caption-date">{{author.caption6Date}}</span></figcaption>
  </figure>
  </div>
</section>
`,Fe=`<!-- claim: two giant serif statement lines (Figma 7255–8210) -->
<section id="claim" class="section section--claim" aria-labelledby="claim-title">
  <h2 id="claim-title" class="claim__line claim__line--a">{{claim.lineA}}</h2>
  <!-- Line B: outlined glyphs in the ref (scroll reveal fills them later).
       claim.lineB is a {words}…{/words} block → each word wrapped in .word
       for the animation wave. -->
  <p class="claim__line claim__line--b">{{claim.lineB}}</p>
</section>
`,Be=`<!-- strip: video band of hand-drawn queue, blends into page bg -->
<section id="strip" class="section section--strip" aria-hidden="true">
  <video
    class="strip__video"
    src="/video/footer.mp4"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-hidden="true"
  ></video>
</section>
`,Ne=`<!-- footer: nav column, copyright, credit, follow us (Figma 8630–8943) -->
<section id="footer" class="section section--footer" role="contentinfo" aria-label="Site footer">
  <p class="footer__brand">{{brand}}.</p>

  <nav class="footer__nav" aria-label="Footer">
    <ul class="footer__nav-list">
      <li><a class="footer__link" href="#book">{{footer.navBook}}</a></li>
      <li><a class="footer__link" href="#author">{{footer.navAuthor}}</a></li>
      <li><a class="footer__link" href="#book">{{footer.navBuy}}</a></li>
      <!-- "say hello" is hand-lettered script in the design — inline SVG tracing.
           TODO: client asset (hand-lettering artwork) -->
      <li>
        <a class="footer__hello" href="mailto:hi@moneyincheck.org" aria-label="{{footer.helloAria}}">
          <svg class="footer__hello-script" viewBox="0 0 78 36" fill="none" aria-hidden="true">
            <!-- say -->
            <path
              d="M7 14.4C5.2 12.6 2.2 13.4 2 15.6C1.9 17.4 4.4 18 5.6 19.6C6.7 21.1 5.3 23.3 3 22.8C2.1 22.6 1.5 22 1.2 21.3M15.2 15.4C12.6 13.6 9.6 15.2 9.3 18.4C9 21.4 11.6 23.4 13.7 21.6C15 20.4 15.4 17.8 15.4 15.2C15.3 18.3 15.5 21.5 16.7 23.1C17.4 24 18.4 23.8 19 23M20.2 15.4C19.5 18 19.3 20.6 20.1 22.4C20.8 23.9 22.7 23.7 23.7 22C24.6 20.5 25.1 17.6 25.3 15.2C25.1 19 24.9 24.4 23.9 28.6C23.3 31.4 21.5 33.6 19.7 32.6C18.1 31.7 18.9 28.8 21.1 26.8C23.1 25 25.7 23.8 27.7 23.4"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            <!-- hello -->
            <path
              d="M39.6 4.6C38.2 9.8 37 17 36.2 23.6C36.9 19.8 38.1 16.4 39.9 15.4C41.5 14.6 42.5 15.8 42.3 18C42.1 20 41.7 22 41.6 23.7M44.7 20.4C46.5 19.8 48.5 18.6 48.5 17C48.5 15.5 46.5 15.2 45.5 16.6C44.4 18.2 44.1 20.8 45 22.4C45.9 23.9 47.9 23.7 49.3 22.6M52.5 22.9C53.3 16.4 54.5 8.8 55.9 4.6C56.5 2.9 57.5 3.4 57.3 5C56.9 9.4 55.5 17 54.5 23.3C54.3 24.6 55.5 24.4 56.3 23.6M58.3 22.9C59.1 16.4 60.3 8.8 61.7 4.6C62.3 2.9 63.3 3.4 63.1 5C62.7 9.4 61.3 17 60.3 23.3C60.1 24.6 61.3 24.4 62.1 23.6M66.9 15.6C64.7 15.4 63.5 17.6 63.9 19.9C64.3 22.3 66.5 23.7 68.3 22.5C70.1 21.3 70.3 18.3 68.9 16.5C68.3 15.7 67.5 15.4 66.9 15.6C68.5 15.9 70.3 16.4 71.6 16.2"
              stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Waving-hand doodle right after "say hello" — Figma 124,8802 33×28 -->
  <!-- TODO: client asset (hand-drawn doodle) — inline SVG approximation of the ref -->
  <svg class="footer__mark" viewBox="0 0 33 28" fill="none" aria-hidden="true">
    <!-- fingers + palm outline -->
    <path
      d="M11.5 26C9.5 23.5 7 20 5.2 15.8C4.3 13.6 3.6 10.8 4.4 9.6C5.2 8.4 6.8 8.9 7.4 10.6C8.1 12.7 8.5 14.8 9.2 16.6C9.1 13.4 9.2 9.2 10.2 6C10.7 4.3 12.6 4.2 13.1 6C13.8 8.6 13.7 12 13.9 15C14.6 12 15.6 8.2 17.2 5.6C18.2 4 20 4.4 20 6.2C20 9 19 12.4 18.4 15.4C19.8 13.2 21.6 10.8 23.6 9.4C25.2 8.3 26.6 9.5 25.8 11.3C24.4 14.5 22.2 17.4 21.2 20.4C20.4 22.9 18.5 25.4 15.5 25.9C14 26.1 12.6 26.3 11.5 26Z"
      stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
    <!-- inner palm dashes -->
    <path d="M10.5 20.5C10.9 22 10.7 23.4 10 24.6M14 21C14.2 22.3 14 23.5 13.5 24.6"
      stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
    <!-- wave motion strokes -->
    <path d="M27.5 7C29 5.6 29.8 3.8 29.8 2M30.4 9.2C32 7.6 32.7 5.4 32.7 3.4"
      stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
  </svg>

  <p class="footer__copyright">{{footer.copyright}}</p>

  <p class="footer__credit">
    <span class="footer__credit-pre">{{footer.creditPre}}</span>
    <a class="footer__credit-name" href="https://cloudstudio.es" target="_blank" rel="noopener">
      cloudstudio
      <!-- hand-drawn subline — real client asset (320×30) -->
      <img class="footer__squiggle" src="/img/subline.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
    </a>
  </p>

  <div class="footer__follow">
    <p class="footer__follow-title">{{footer.followTitle}}</p>
    <ul class="footer__social">
      <li><a class="footer__link" href="https://www.linkedin.com/in/oscartv/" target="_blank" rel="noopener">Linkedin</a></li>
      <li><a class="footer__link" href="https://www.instagram.com/oscartv/" target="_blank" rel="noopener">Instagram</a></li>
      <li><a class="footer__link" href="https://x.com/oscartv/" target="_blank" rel="noopener">Twitter</a></li>
    </ul>
  </div>
</section>
`,Me=`<!-- decor: fixed stripe grid + page-absolute overlay (chess coords, bills, coins, compass, footer square) -->
<section id="decor" class="section section--decor" aria-hidden="true">
  <!-- fixed viewport grid, z:0 (behind everything) -->
  <div class="grid-bg"></div>

  <!-- N–S compass — CLIENT FEEDBACK: ONE FIXED element, vertically centered on
       the RIGHT viewport edge, acting as a scroll-progress indicator. The green
       fill is scaled top→down by src/js/anim/progress.js as you travel the page.
       (Replaces the two in-page static compasses: the old decor compass #2 that
       lived here, and the hero one — retired via override in decor.css.)
       position:fixed escapes #decor's overflow:clip (no transformed ancestor,
       same as .grid-bg above). -->
  <div class="decor__compass">
    <span class="decor__compass-letter decor__compass-letter--n">N</span>
    <span class="decor__compass-line"><span class="decor__compass-fill"></span></span>
    <span class="decor__compass-letter decor__compass-letter--s">S</span>
  </div>
  <!-- horizontal grid lines come from the fixed .grid-bg layer (orchestrator-owned).
       NOTE: hi-res ref shows a 200px horizontal period below y≈4429.5 (211.5 above);
       the fixed layer uses 211.5 everywhere — flagged in report, not duplicated here. -->

  <!-- static coins, z:0 (above grid, UNDER section text — the ref shows body
       copy printing over all four coins; deviates from the SPEC z-order line,
       escalated in the build report; falling-coin anims stay on top in wave 2) -->
  <div class="decor__under">
    <img class="decor__coin decor__coin--1" src="/img/coin.webp" alt="" width="222" height="222" loading="lazy" decoding="async" />
    <img class="decor__coin decor__coin--2" src="/img/coin.webp" alt="" width="222" height="222" loading="lazy" decoding="async" />
    <img class="decor__coin decor__coin--3" src="/img/coin.webp" alt="" width="222" height="222" loading="lazy" decoding="async" />
    <img class="decor__coin decor__coin--4" src="/img/coin.webp" alt="" width="222" height="222" loading="lazy" decoding="async" />
  </div>

  <!-- chess coordinates: positions are static; main.js supplies the approved
       move order from src/js/data/coordinates.js without moving any marker. -->
  <div id="coords" class="decor__coords">
    <span class="coord" data-atf style="left:21rem;top:15rem">e4</span>
    <span class="coord" data-atf style="left:39.1rem;top:22.8rem">e5</span>
    <span class="coord" data-atf style="left:64.8rem;top:33.4rem">Nf3</span>
    <span class="coord" data-atf style="left:102.2rem;top:28.9rem">Nc6</span>
    <span class="coord" data-atf style="left:121.5rem;top:48.1rem">Bb5</span>
    <span class="coord" data-atf style="left:148.4rem;top:44.1rem">Nf6</span>
    <span class="coord" data-atf style="left:49.5rem;top:55.6rem">O-O</span>
    <span class="coord" data-atf style="left:63.9rem;top:71.5rem">d4</span>
    <span class="coord" data-atf style="left:109.8rem;top:72.7rem">Nd6</span>
    <span class="coord" data-atf style="left:47.8rem;top:89.1rem">Bxc6</span>
    <span class="coord" data-atf style="left:125.4rem;top:93.5rem">dxc6</span>
    <span class="coord" data-atf style="left:23.5rem;top:103rem">dxe5</span>
    <span class="coord" data-atf style="left:66.7rem;top:109.1rem">hNf5</span>
    <span class="coord" data-atf style="left:162.8rem;top:106.9rem">Qxd8</span>
    <span class="coord" style="left:98.9rem;top:123.1rem">Kxd8</span>
    <span class="coord" style="left:60rem;top:143.9rem">Nc3</span>
    <span class="coord" style="left:100.1rem;top:168.6rem">Ke8</span>
    <span class="coord" style="left:12.6rem;top:168.6rem">e4</span>
    <span class="coord" style="left:28.3rem;top:186.1rem">e5</span>
    <span class="coord" style="left:99.2rem;top:195.7rem">Nf3</span>
    <span class="coord" style="left:73.2rem;top:208rem">Nc6</span>
    <span class="coord" style="left:160.7rem;top:164.3rem">Bb5</span>
    <span class="coord" style="left:150.5rem;top:220.5rem">Nf6</span>
    <span class="coord" style="left:49.5rem;top:215.1rem">O-O</span>
    <span class="coord" style="left:80rem;top:234.9rem">d4</span>
    <span class="coord" style="left:109.4rem;top:219.2rem">Nd6</span>
    <span class="coord" style="left:28rem;top:234.9rem">Bxc6</span>
    <span class="coord" style="left:110.5rem;top:259.9rem">dxc6</span>
    <span class="coord" style="left:11.9rem;top:263.3rem">dxe5</span>
    <span class="coord" style="left:80.2rem;top:273.9rem">hNf5</span>
    <span class="coord" style="left:162.8rem;top:266.4rem">Qxd8</span>
    <span class="coord" style="left:101.7rem;top:286.5rem">Kxd8</span>
    <span class="coord" style="left:62.8rem;top:300rem">Nc3</span>
    <span class="coord" style="left:123.3rem;top:316.1rem">Ke8</span>
    <span class="coord" style="left:8.3rem;top:325.1rem">e4</span>
    <span class="coord" style="left:28.3rem;top:336.1rem">e5</span>
    <span class="coord" style="left:161rem;top:352.7rem">Nf6</span>
    <span class="coord" style="left:102.2rem;top:334.3rem">dxc6</span>
    <span class="coord" style="left:67.3rem;top:344.8rem">Qxd8</span>
    <span class="coord" style="left:111.2rem;top:354.3rem">Nc3</span>
    <span class="coord" style="left:23.7rem;top:505.1rem">dxc6</span>
    <span class="coord" style="left:125.8rem;top:517.4rem">Bg3</span>
    <span class="coord" style="left:67.2rem;top:526.6rem">Qxa2</span>
    <span class="coord" style="left:8.3rem;top:538.4rem">e4</span>
    <span class="coord" style="left:28.3rem;top:549.4rem">e5</span>
    <span class="coord" style="left:101.7rem;top:547.6rem">dxc6</span>
    <span class="coord" style="left:67.3rem;top:558.1rem">Qxd8</span>
    <span class="coord" style="left:161.2rem;top:558.9rem">Nf6</span>
    <span class="coord" style="left:146.1rem;top:597.1rem">Nc3</span>
    <span class="coord" style="left:37.6rem;top:685.2rem">dxc6</span>
    <span class="coord" style="left:139.3rem;top:697.5rem">Bg3</span>
    <span class="coord" style="left:80.6rem;top:706.7rem">Qxa2</span>
    <span class="coord" style="left:22.2rem;top:718.5rem">e4</span>
    <span class="coord" style="left:121.5rem;top:725rem">Qxd8</span>
    <span class="coord" style="left:145.2rem;top:752.3rem">dxc6</span>
    <span class="coord" style="left:6.4rem;top:771.5rem">Bg3</span>
    <span class="coord" style="left:146.8rem;top:806.7rem">Qxf2</span>
    <span class="coord" style="left:13rem;top:810.4rem">Nxd3</span>
    <span class="coord" style="left:140.3rem;top:856.6rem">Qf4</span>
    <span class="coord" style="left:41rem;top:861.1rem">e7</span>
    <span class="coord" style="left:93.2rem;top:883.2rem">Be2</span>
  </div>

  <!-- bills / coins, z:3 -->
  <div class="decor__props">
    <!-- hero S-fold bill (rotation baked into asset, bbox 22,939 562x522) -->
    <img class="decor__bill decor__bill--hero" src="/img/bill-1.webp" alt="" width="1124" height="1044" loading="lazy" decoding="async" />
    <!-- wavy bill, intro (bbox 1164,2445 656x656) -->
    <img class="decor__bill decor__bill--intro" src="/img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />
    <!-- wavy bill at the intro/book boundary (Figma "large rect" zone 402,3473;
         ref ink ~370,3390 460x355) -->
    <img class="decor__bill decor__bill--boundary" src="/img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />
    <!-- wavy bill, author (bbox 288,5538 677x677) -->
    <img class="decor__bill decor__bill--author" src="/img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />
    <!-- wavy bill, claim (bbox 1025,7609 756x744) -->
    <img class="decor__bill decor__bill--claim" src="/img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />

    <!-- NOTE: the looping doodle GIFs live INLINE in hero.html / intro.html
         (they reveal with the text) — do not re-add them here. -->

    <!-- big cropped bill at footer (rect 130,8690 588x588, clipped by page end)
         — FINAL waypoint of the traveling bill's journey -->
    <div class="decor__square">
      <img class="decor__bill--footer" src="/img/bill-2.webp" alt="" width="1128" height="1313" loading="lazy" decoding="async" />
    </div>
  </div>
</section>
`,Le=`<!-- lightbox — purchase modal (design: spec/refs/lightbox.png, Figma node 0-268) -->
<!-- TODO: client — real store URLs (all links href="#" for now) -->
<div id="lightbox" class="lightbox" hidden>
  <div class="lightbox__backdrop"></div>
  <div class="lightbox__card" data-lenis-prevent role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
    <button class="lightbox__close" type="button" aria-label="{{lightbox.closeAria}}">
      <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
        <path d="M2.5 2.5l13 13M15.5 2.5l-13 13" stroke="#fff" stroke-width="2.6" stroke-linecap="round" />
      </svg>
    </button>

    <h2 class="lightbox__title" id="lightbox-title">{{lightbox.title}}</h2>
    <p class="lightbox__subtitle">{{lightbox.subtitle}}</p>

    <h3 class="lightbox__section">{{lightbox.sectionEn}}</h3>
    <ul class="lightbox__rows">
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryUS}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — United States">Amazon</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 814 1000" aria-hidden="true" focusable="false"><path fill="#000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
          <a href="#" aria-label="Apple Books — United States">Apple Books</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          <a href="#" aria-label="Google Books — United States">Google Books</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryCanada}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Canada">Amazon</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryAustralia}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Australia">Amazon</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryIndia}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — India">Amazon</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryOther}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Other countries">Amazon</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 814 1000" aria-hidden="true" focusable="false"><path fill="#000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
          <a href="#" aria-label="Apple Books — Other countries">Apple Books</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          <a href="#" aria-label="Google Books — Other countries">Google Books</a>
        </span>
      </li>
    </ul>

    <h3 class="lightbox__section">{{lightbox.sectionEs}}</h3>
    <ul class="lightbox__rows">
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countrySpain}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — España">Amazon</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 814 1000" aria-hidden="true" focusable="false"><path fill="#000" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
          <a href="#" aria-label="Applebooks — España">Applebooks</a>
        </span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          <a href="#" aria-label="Google Books — España">Google Books</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryMexico}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Mexico">Amazon</a>
        </span>
      </li>
      <li class="lightbox__row">
        <span class="lightbox__country">{{lightbox.countryOtherEs}}</span>
        <span class="lightbox__store">
          <svg class="lightbox__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><text x="10" y="15.5" font-family="Georgia, 'Times New Roman', serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">a</text><path d="M4.5 16.6c2.9 2.2 6.4 3.3 9.6 3.3 2.1 0 4.3-.5 6.2-1.4" fill="none" stroke="#FF9900" stroke-width="1.7" stroke-linecap="round"/><path d="M21.2 19.4l.8-2.2-2.3.5" fill="none" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <a href="#" aria-label="Amazon — Otros Paises">Amazon</a>
        </span>
      </li>
    </ul>

    <p class="lightbox__distrib">{{lightbox.distrib}}</p>
    <a class="lightbox__contact" href="#">{{lightbox.contact}}</a>
  </div>
</div>
`,De=`<!-- language — full-screen language overlay (opens from the header "En ▾" pill) -->
<div id="language" class="language" data-lenis-prevent hidden role="dialog" aria-modal="true" aria-labelledby="language-kicker">
  <div class="language__canvas">
    <!-- decorative rotated bill, left of the list -->
    <img class="language__bill" src="/img/bill-2.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />

    <p id="language-kicker" class="language__kicker">{{language.kicker}}</p>

    <!-- All five published language paths are functional locale links. -->
    <ul class="language__list">
      <li class="language__row">
        <a class="language__item {{lang.enActive}}" href="{{lang.enHref}}" lang="en" data-lang="en">{{language.en}}</a>
      </li>
      <li class="language__row">
        <a class="language__item {{lang.esActive}}" href="{{lang.esHref}}" lang="es" data-lang="es">{{language.es}}</a>
      </li>
      <li class="language__row">
        <a class="language__item {{lang.frActive}}" href="{{lang.frHref}}" lang="fr" data-lang="fr">{{language.fr}}</a>
      </li>
      <li class="language__row">
        <a class="language__item {{lang.deActive}}" href="{{lang.deHref}}" lang="de" data-lang="de">{{language.de}}</a>
      </li>
      <li class="language__row">
        <a class="language__item {{lang.hiActive}}" href="{{lang.hiHref}}" lang="hi" data-lang="hi">{{language.hi}}</a>
      </li>
    </ul>

    <p class="language__credit">
      <span class="language__credit-pre">{{language.creditPre}}</span>
      <a class="language__credit-name" href="https://cloudstudio.es" target="_blank" rel="noopener">
        cloudstudio
        <!-- hand-drawn subline — real client asset (320×30) -->
        <img class="language__squiggle" src="/img/subline.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </a>
    </p>
  </div>
</div>
`,H=de(),S=pe(H);me(H,S);const U=o=>ce(o,S);(()=>{const __a=document.querySelector("#app");if(__a)__a.innerHTML=[Me,Ce,ze,Pe,Se,Ee,Fe,Be,Ne].map(U).join(`
`);})();const O=S["footer.copyrightUrl"];if(O){const o=document.querySelector(".footer__copyright"),e=document.createElement("a");e.href=O,e.target="_blank",e.rel="noopener",e.textContent=o.textContent,o.replaceChildren(e)}document.querySelectorAll(".coord").forEach((o,e)=>{var t;const n=(t=fe[e])==null?void 0:t.text;n&&(o.textContent=n)});document.body.insertAdjacentHTML("beforeend",[Le,De].map(U).join(`
`));if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const o=Array.from(document.querySelectorAll("video")),e=new Set,n=new IntersectionObserver(t=>{t.forEach(a=>{const r=a.target;a.isIntersecting?(e.add(r),r.paused&&r.play().catch(()=>{})):(e.delete(r),r.paused||r.pause())})},{rootMargin:"20% 0px"});o.forEach(t=>{t.muted=!0,t.playsInline=!0,n.observe(t)}),window.addEventListener("touchstart",()=>e.forEach(t=>t.paused&&t.play().catch(()=>{})),{once:!0,passive:!0})}function E(){const o=document.documentElement,e=Math.round((window.devicePixelRatio||1)*100)/100||1,n=h=>Math.round(Math.round(h*e)/e*1e3)/1e3,t=parseFloat(getComputedStyle(document.documentElement).fontSize)||10,a=window.matchMedia("(max-width: 1080px)").matches,r=n(a?window.innerWidth*.25:20*t),i=r,s=Math.min(window.innerWidth,172.8*t),b=n(a?window.innerWidth*.125:(window.innerWidth-s)/2+16.4*t),c=n(r/2),m=n(Math.max(1,Math.round(e))/e);o.style.setProperty("--g-px",`${r}px`),o.style.setProperty("--g-py",`${i}px`),o.style.setProperty("--g-ox",`${b}px`),o.style.setProperty("--g-oy",`${c}px`),o.style.setProperty("--g-line",`${m}px`)}E();window.addEventListener("resize",E);(function o(){var e,n;(n=(e=matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`)).addEventListener)==null||n.call(e,"change",()=>{E(),o()},{once:!0})})();window.__loaderDone=Ae();V(()=>import("./index-Cyc007zT.js"),[]).then(o=>{var e;return(e=o.init)==null?void 0:e.call(o)});export{V as _};
