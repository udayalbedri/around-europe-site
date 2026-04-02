const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const languageButtons = document.querySelectorAll(".language-button");
const heroPanels = document.querySelectorAll(".hero-panel");
const heroDots = document.querySelectorAll(".hero-dot");
const heroPrev = document.querySelector("[data-hero-prev]");
const heroNext = document.querySelector("[data-hero-next]");

const translations = {
  en: {
    meta: {
      title: "Around Europe B.V. | Logistics Across Europe",
      description:
        "Modern logistics company profile website proposal for Around Europe B.V., focused on European shipping, transport coordination, and dependable delivery.",
    },
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      directContact: "Direct contact",
    },
    hero: {
      slide1: {
        eyebrow: "Around Europe B.V.",
        titleLine1: "Fast, reliable and flexible transport",
        titleLine2: "in the Netherlands and across Europe",
        lead:
          "From urgent deliveries to complete transport solutions, we make sure your shipment arrives safely and on time.",
        point1: "Fast service, including urgent transport",
        point2: "Professional and experienced drivers",
        point3: "Transport tailored to every shipment size",
        point4: "Reliable partner for companies and private clients",
        ctaPrimary: "Request A Quote Today",
        ctaSecondary: "View Services",
        card1Title: "EU ROUTES",
        card1Text: "Planned freight lanes with fast response and clear coordination.",
        card2Title: "CLIENT PROFILE",
        card2Text: "Corporate presentation first, operational trust immediately visible.",
        card3Title: "TRANSPORT FLOW",
        card3Text:
          "Operational planning, shipment updates, and route visibility in one focused presentation layer.",
      },
    },
    services: {
      eyebrow: "Services",
      title: "Our Services",
      lead:
        "We provide professional transport with different types of vehicles.",
      card1Title: "Box Trucks (4 meter loading space)",
      card1Text: "Ideal for city distribution and fast deliveries.",
      card2Title: "Trucks (8 meter loading space - C license)",
      card2Text: "For medium-sized transport jobs.",
      card3Title: "Tractor-Trailer (trailers / trucks)",
      card3Text: "For large and international transport operations.",
      extraTitle: "Additional transport services",
      list1: "Transport within the Netherlands",
      list2: "International transport (EU)",
      list3: "Express transport (urgent delivery)",
      list4: "Distribution and pallet transport",
      list5: "Courier services",
    },
    fleet: {
      eyebrow: "Our Vehicles",
      title: "Our Vehicles",
      lead: "We operate a modern and versatile fleet for different transport needs.",
      card1Title: "4 meter box trucks",
      card1Text: "Fast and flexible for compact deliveries and agile transport work.",
      card2Title: "8 meter trucks",
      card2Text: "Efficient and powerful for medium-sized freight and daily logistics routes.",
      card3Title: "Large trailers",
      card3Text: "Built for heavy loads and international transport operations.",
      summary: "Always the right vehicle for your transport.",
    },
    about: {
      eyebrow: "About",
      title: "Around Europe B.V. is a professional transport company based in Tilburg.",
      text:
        "With years of experience in logistics and distribution, we provide reliable and flexible transport services within the Netherlands and across Europe. We work with a strong team of drivers and a modern fleet so that every assignment can be carried out quickly and efficiently.",
      quote:
        "Your cargo is in safe hands with us.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Company Contact Details",
      text:
        "Around Europe B.V. is available for all your transport requests.",
      point1: "Company name: Around Europe B.V.",
      point2: "KVK: 97004367",
      point3: "VAT: NL867871556B01",
      addressTitle: "Addresses:",
      point4: "Siriusstraat 100, 5015 BT Tilburg, Netherlands",
      point5: "Email: info@aroundeurope.nl",
      point6: "Phone: +31 6 16077858",
      point7: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch",
      point8: "Meerpal 8 E, 4904 SK Oosterhout",
      whatsapp: "WhatsApp Direct",
      call: "Call Direct",
      form: {
        name: "Full Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "name@company.com",
        company: "Company",
        companyPlaceholder: "Company name",
        service: "Transport Need",
        option1: "Road Freight",
        option2: "Cross-Border Planning",
        option3: "Business Partnership",
        message: "Project Details",
        messagePlaceholder: "Tell us about your routes, timing, or logistics needs",
        submit: "Send Request",
      },
    },
    offices: {
      eyebrow: "European Offices",
      title: "Regional presence visualized with office pins across Europe",
      groupTitle: "Our Addresses",
      tilburg: {
        city: "Tilburg",
        role: "Netherlands - Head Quarter",
        address: "Siriusstraat 100, 5015 BT Tilburg, Netherlands",
        kvk: "KVK: 97004367",
        vat: "VAT: NL867871556B01",
      },
      denbosch: {
        city: "'s-Hertogenbosch",
        role: "Netherlands - 's-Hertogenbosch",
        address: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch, Netherlands",
      },
      oosterhout: {
        city: "Oosterhout",
        role: "Netherlands - Oosterhout",
        address: "Meerpal 8 E, 4904 SK Oosterhout, Netherlands",
      },
      hamburg: {
        city: "Hamburg",
        role: "Germany",
        address: "Freight Terminal 8, HafenCity, Hamburg",
      },
      antwerp: {
        city: "Antwerp",
        role: "Belgium",
        address: "Dockside Road 21, Antwerp Gateway",
      },
      paris: {
        city: "Paris",
        role: "France",
        address: "Euro Freight Centre, Paris South Hub",
      },
    },
    footer: {
      title: "Fast. Reliable. Across Europe.",
      text: "Company profile proposal for shipping and transport services around Europe.",
    },
  },
  nl: {
    meta: {
      title: "Around Europe B.V. | Logistiek Door Europa",
      description:
        "Moderne bedrijfswebsite voor Around Europe B.V., gericht op Europese logistiek, transportcoordinatie en betrouwbare levering.",
    },
    nav: {
      home: "Home",
      services: "Diensten",
      about: "Over Ons",
      contact: "Contact",
      directContact: "Direct contact",
    },
    hero: {
      slide1: {
        eyebrow: "Around Europe B.V.",
        titleLine1: "Snel, betrouwbaar en flexibel transport",
        titleLine2: "in Nederland en heel Europa",
        lead:
          "Van spoedleveringen tot complete transportoplossingen - wij zorgen dat uw zending veilig en op tijd aankomt.",
        point1: "Snelle service - ook spoedtransport mogelijk",
        point2: "Professionele en ervaren chauffeurs",
        point3: "Transport op maat - van klein tot groot",
        point4: "Betrouwbare partner voor bedrijven en particulieren",
        ctaPrimary: "Vraag Vandaag Nog Een Offerte Aan",
        ctaSecondary: "Bekijk Diensten",
        card1Title: "EU ROUTES",
        card1Text: "Geplande vrachtroutes met snelle respons en duidelijke coordinatie.",
        card2Title: "BEDRIJFSPROFIEL",
        card2Text: "Eerst een sterke presentatie, direct zichtbaar operationeel vertrouwen.",
        card3Title: "TRANSPORTSTROOM",
        card3Text:
          "Operationele planning, zendingupdates en routezichtbaarheid in een gerichte presentatielaag.",
      },
    },
    services: {
      eyebrow: "Diensten",
      title: "Onze Diensten",
      lead:
        "Wij bieden professioneel transport met verschillende soorten voertuigen.",
      card1Title: "Bakwagens (4 meter laadruimte)",
      card1Text: "Ideaal voor stadsdistributie en snelle leveringen.",
      card2Title: "Vrachtwagens (8 meter laadruimte - C-rijbewijs)",
      card2Text: "Voor middelgrote transporten.",
      card3Title: "Trekker-oplegger (trailer / vrachtwagens)",
      card3Text: "Voor grote en internationale transporten.",
      extraTitle: "Daarnaast bieden wij",
      list1: "Transport binnen Nederland",
      list2: "Internationale transport (EU)",
      list3: "Spoedtransport (urgent levering)",
      list4: "Distributie en palletvervoer",
      list5: "Koeriersdiensten",
    },
    fleet: {
      eyebrow: "Onze Voertuigen",
      title: "Onze Voertuigen",
      lead: "Wij beschikken over een modern en veelzijdig wagenpark.",
      card1Title: "4 meter bakwagens",
      card1Text: "Snel en flexibel.",
      card2Title: "8 meter vrachtwagens",
      card2Text: "Efficient en krachtig.",
      card3Title: "Grote trailers",
      card3Text: "Voor zware en internationale ladingen.",
      summary: "Altijd het juiste voertuig voor uw transport.",
    },
    about: {
      eyebrow: "Over Ons",
      title: "Around Europe B.V. is een professioneel transportbedrijf gevestigd in Tilburg.",
      text:
        "Met jarenlange ervaring in logistiek en distributie bieden wij betrouwbare en flexibele transportdiensten binnen Nederland en Europa. Wij werken met een sterk team van chauffeurs en een modern wagenpark, zodat wij elke opdracht snel en efficient kunnen uitvoeren.",
      quote:
        "Uw lading is bij ons in veilige handen.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contactgegevens",
      text:
        "Wij zijn bereikbaar voor al uw transportaanvragen.",
      point1: "Bedrijfsnaam: Around Europe B.V.",
      point2: "KVK: 97004367",
      point3: "BTW: NL867871556B01",
      addressTitle: "Adressen:",
      point4: "Siriusstraat 100, 5015 BT Tilburg, Nederland",
      point5: "E-mail: info@aroundeurope.nl",
      point6: "Telefoon: +31 6 16077858",
      point7: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch",
      point8: "Meerpal 8 E, 4904 SK Oosterhout",
      whatsapp: "WhatsApp Direct",
      call: "Bel Direct",
      form: {
        name: "Volledige Naam",
        namePlaceholder: "Uw naam",
        email: "E-mail",
        emailPlaceholder: "naam@bedrijf.com",
        company: "Bedrijf",
        companyPlaceholder: "Bedrijfsnaam",
        service: "Transportbehoefte",
        option1: "Wegtransport",
        option2: "Grensoverschrijdende Planning",
        option3: "Zakelijke Samenwerking",
        message: "Projectdetails",
        messagePlaceholder: "Vertel ons over uw routes, timing of logistieke behoefte",
        submit: "Verstuur Aanvraag",
      },
    },
    offices: {
      eyebrow: "Europese Kantoren",
      title: "Regionale aanwezigheid zichtbaar gemaakt met kantoorlocaties in Europa",
      groupTitle: "Onze Adressen",
      tilburg: {
        city: "Tilburg",
        role: "Nederland - Hoofdkantoor",
        address: "Siriusstraat 100, 5015 BT Tilburg, Nederland",
        kvk: "KVK: 97004367",
        vat: "BTW: NL867871556B01",
      },
      denbosch: {
        city: "'s-Hertogenbosch",
        role: "Nederland - 's-Hertogenbosch",
        address: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch, Nederland",
      },
      oosterhout: {
        city: "Oosterhout",
        role: "Nederland - Oosterhout",
        address: "Meerpal 8 E, 4904 SK Oosterhout, Nederland",
      },
      hamburg: {
        city: "Hamburg",
        role: "Duitsland",
        address: "Freight Terminal 8, HafenCity, Hamburg",
      },
      antwerp: {
        city: "Antwerpen",
        role: "Belgie",
        address: "Dockside Road 21, Antwerp Gateway",
      },
      paris: {
        city: "Parijs",
        role: "Frankrijk",
        address: "Euro Freight Centre, Paris South Hub",
      },
    },
    footer: {
      title: "Snel. Betrouwbaar. Overal in Europa.",
      text: "Bedrijfswebsitevoorstel voor transport- en logistieke diensten door heel Europa.",
    },
  },
  de: {
    meta: {
      title: "Around Europe B.V. | Logistik Durch Europa",
      description:
        "Moderner Unternehmensauftritt fuer Around Europe B.V., fokussiert auf europaeische Logistik, Transportkoordination und zuverlaessige Lieferung.",
    },
    nav: {
      home: "Start",
      services: "Leistungen",
      about: "Ueber Uns",
      contact: "Kontakt",
      directContact: "Direkter Kontakt",
    },
    hero: {
      slide1: {
        eyebrow: "Around Europe B.V.",
        titleLine1: "Schneller, zuverlaessiger und flexibler Transport",
        titleLine2: "in den Niederlanden und in ganz Europa",
        lead:
          "Von Expresslieferungen bis zu kompletten Transportloesungen sorgen wir dafuer, dass Ihre Sendung sicher und puenktlich ankommt.",
        point1: "Schneller Service - auch Express-Transport moeglich",
        point2: "Professionelle und erfahrene Fahrer",
        point3: "Transport nach Mass - von klein bis gross",
        point4: "Zuverlaessiger Partner fuer Unternehmen und Privatkunden",
        ctaPrimary: "Fordern Sie Noch Heute Ein Angebot An",
        ctaSecondary: "Leistungen Ansehen",
        card1Title: "EU-ROUTEN",
        card1Text: "Geplante Frachtkorridore mit schneller Reaktion und klarer Koordination.",
        card2Title: "UNTERNEHMENSPROFIL",
        card2Text: "Eine starke Praesentation zuerst, operative Verlaesslichkeit sofort sichtbar.",
        card3Title: "TRANSPORTFLUSS",
        card3Text:
          "Operative Planung, Sendungsupdates und Routentransparenz in einer fokussierten Praesentationsebene.",
      },
    },
    services: {
      eyebrow: "Leistungen",
      title: "Unsere Leistungen",
      lead:
        "Wir bieten professionellen Transport mit verschiedenen Fahrzeugtypen.",
      card1Title: "Kastenwagen (4 Meter Laderaum)",
      card1Text: "Ideal fuer Stadtverteilung und schnelle Lieferungen.",
      card2Title: "Lkw (8 Meter Laderaum - Fuehrerschein C)",
      card2Text: "Fuer mittelgrosse Transporte.",
      card3Title: "Sattelzug (Trailer / Lkw)",
      card3Text: "Fuer grosse und internationale Transporte.",
      extraTitle: "Zusaetzlich bieten wir",
      list1: "Transport innerhalb der Niederlande",
      list2: "Internationaler Transport (EU)",
      list3: "Express-Transport (dringende Lieferung)",
      list4: "Distribution und Palettentransport",
      list5: "Kurierdienste",
    },
    fleet: {
      eyebrow: "Unsere Fahrzeuge",
      title: "Unsere Fahrzeuge",
      lead: "Wir verfuegen ueber einen modernen und vielseitigen Fuhrpark.",
      card1Title: "4-Meter-Kastenwagen",
      card1Text: "Schnell und flexibel.",
      card2Title: "8-Meter-Lkw",
      card2Text: "Effizient und leistungsstark.",
      card3Title: "Grosse Trailer",
      card3Text: "Fuer schwere und internationale Ladungen.",
      summary: "Immer das richtige Fahrzeug fuer Ihren Transport.",
    },
    about: {
      eyebrow: "Ueber Uns",
      title: "Around Europe B.V. ist ein professionelles Transportunternehmen mit Sitz in Tilburg.",
      text:
        "Mit jahrelanger Erfahrung in Logistik und Distribution bieten wir zuverlaessige und flexible Transportdienste in den Niederlanden und in ganz Europa. Wir arbeiten mit einem starken Fahrerteam und einem modernen Fuhrpark, damit wir jeden Auftrag schnell und effizient ausfuehren koennen.",
      quote:
        "Ihre Ladung ist bei uns in sicheren Haenden.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Kontaktangaben",
      text:
        "Wir sind fuer alle Ihre Transportanfragen erreichbar.",
      point1: "Firmenname: Around Europe B.V.",
      point2: "Handelsregister: 97004367",
      point3: "USt-IdNr.: NL867871556B01",
      addressTitle: "Adressen:",
      point4: "Siriusstraat 100, 5015 BT Tilburg, Niederlande",
      point5: "E-Mail: info@aroundeurope.nl",
      point6: "Telefon: +31 6 16077858",
      point7: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch",
      point8: "Meerpal 8 E, 4904 SK Oosterhout",
      whatsapp: "WhatsApp Direkt",
      call: "Direkt Anrufen",
      form: {
        name: "Vollstaendiger Name",
        namePlaceholder: "Ihr Name",
        email: "E-Mail",
        emailPlaceholder: "name@unternehmen.com",
        company: "Unternehmen",
        companyPlaceholder: "Unternehmensname",
        service: "Transportbedarf",
        option1: "Strassenfracht",
        option2: "Grenzueberschreitende Planung",
        option3: "Geschaeftspartnerschaft",
        message: "Projektdetails",
        messagePlaceholder: "Erzaehlen Sie uns von Ihren Routen, Terminen oder Logistikanforderungen",
        submit: "Anfrage Senden",
      },
    },
    offices: {
      eyebrow: "Europaeische Standorte",
      title: "Regionale Praesenz visualisiert mit Standort-Pins in ganz Europa",
      groupTitle: "Unsere Adressen",
      tilburg: {
        city: "Tilburg",
        role: "Niederlande - Hauptsitz",
        address: "Siriusstraat 100, 5015 BT Tilburg, Niederlande",
        kvk: "Handelsregister: 97004367",
        vat: "USt-IdNr.: NL867871556B01",
      },
      denbosch: {
        city: "'s-Hertogenbosch",
        role: "Niederlande - 's-Hertogenbosch",
        address: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch, Niederlande",
      },
      oosterhout: {
        city: "Oosterhout",
        role: "Niederlande - Oosterhout",
        address: "Meerpal 8 E, 4904 SK Oosterhout, Niederlande",
      },
      hamburg: {
        city: "Hamburg",
        role: "Deutschland",
        address: "Freight Terminal 8, HafenCity, Hamburg",
      },
      antwerp: {
        city: "Antwerpen",
        role: "Belgien",
        address: "Dockside Road 21, Antwerp Gateway",
      },
      paris: {
        city: "Paris",
        role: "Frankreich",
        address: "Euro Freight Centre, Paris South Hub",
      },
    },
    footer: {
      title: "Schnell. Zuverlaessig. In ganz Europa.",
      text: "Unternehmensprofil-Konzept fuer Versand- und Transportdienstleistungen in ganz Europa.",
    },
  },
};

const getTranslation = (language, key) =>
  key.split(".").reduce((value, segment) => value?.[segment], translations[language]);

const officeMapElement = document.querySelector("#office-map");
let officeMap;
let officeMarkers = [];
let activeHeroIndex = 0;
let heroInterval;
let heroAnimating = false;

const officeDirectory = [
  {
    key: "tilburg",
    email: "info@aroundeurope.nl",
    coords: [51.5555, 5.0913],
  },
  {
    key: "denbosch",
    email: "info@aroundeurope.nl",
    coords: [51.7178, 5.3037],
  },
  {
    key: "oosterhout",
    email: "info@aroundeurope.nl",
    coords: [51.6418, 4.8560],
  },
];

const renderOfficeMap = (language) => {
  if (!officeMap || typeof L === "undefined") {
    return;
  }

  officeMarkers.forEach((marker) => marker.remove());
  officeMarkers = [];

  const markerIcon = L.divIcon({
    className: "",
    html: '<span class="office-marker"></span>',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });

  officeDirectory.forEach((office) => {
    const translation = translations[language].offices[office.key];
    const marker = L.marker(office.coords, { icon: markerIcon })
      .addTo(officeMap)
      .bindPopup(
        `
            <div class="office-popup">
              <strong>${translation.role}</strong>
              <span>${translation.city}</span>
              <span>${translation.address}</span>
              ${translation.kvk ? `<span>${translation.kvk}</span>` : ""}
              ${translation.vat ? `<span>${translation.vat}</span>` : ""}
              ${office.phone ? `<span>${office.phone}</span>` : ""}
              <span>${office.email}</span>
            </div>
        `
      );

    officeMarkers.push(marker);
  });
};

const setLanguage = (language) => {
  const content = translations[language];
  if (!content) {
    return;
  }

  document.documentElement.lang = language;
  document.title = content.meta.title;

  const metaDescription = document.querySelector("#meta-description");
  if (metaDescription) {
    metaDescription.setAttribute("content", content.meta.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getTranslation(language, element.dataset.i18nPlaceholder);
    if (typeof value === "string") {
      element.setAttribute("placeholder", value);
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  localStorage.setItem("site-language", language);
  renderOfficeMap(language);
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

const showHeroSlide = (index) => {
  if (!heroPanels.length || heroAnimating) {
    return;
  }

  heroAnimating = true;
  activeHeroIndex = (index + heroPanels.length) % heroPanels.length;

  heroPanels.forEach((panel, panelIndex) => {
    panel.classList.toggle("is-active", panelIndex === activeHeroIndex);
  });

  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeHeroIndex);
  });

  window.setTimeout(() => {
    heroAnimating = false;
  }, 820);
};

const restartHeroInterval = () => {
  if (heroInterval) {
    clearInterval(heroInterval);
  }

  if (heroPanels.length > 1) {
    heroInterval = setInterval(() => {
      showHeroSlide(activeHeroIndex + 1);
    }, 5600);
  }
};

heroDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showHeroSlide(Number(dot.dataset.heroDot));
    restartHeroInterval();
  });
});

if (heroPrev) {
  heroPrev.addEventListener("click", () => {
    showHeroSlide(activeHeroIndex - 1);
    restartHeroInterval();
  });
}

if (heroNext) {
  heroNext.addEventListener("click", () => {
    showHeroSlide(activeHeroIndex + 1);
    restartHeroInterval();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

if (officeMapElement && typeof L !== "undefined") {
  officeMap = L.map(officeMapElement, {
    scrollWheelZoom: false,
    zoomControl: false,
  }).setView([51.628, 5.084], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(officeMap);
}

const initialLanguage = localStorage.getItem("site-language") || "nl";
setLanguage(initialLanguage);
showHeroSlide(0);
restartHeroInterval();
