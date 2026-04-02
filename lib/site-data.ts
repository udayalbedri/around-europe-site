import type { Locale, PageId } from "@/lib/i18n";

export type VehicleImage = {
  src: string;
  alt: string;
};

export type Office = {
  key: string;
  city: string;
  role: string;
  address: string;
  coords: [number, number];
};

type LocaleContent = {
  localeName: string;
  seo: {
    siteTitle: string;
    siteDescription: string;
    pages: Record<PageId, { title: string; description: string }>;
  };
  nav: {
    home: string;
    services: string;
    fleet: string;
    about: string;
    contact: string;
    directContact: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  common: {
    backToTop: string;
    readMore: string;
    allServices: string;
    allVehicles: string;
    getQuote: string;
    closeGallery: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    points: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    cards: { title: string; text: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
    extraTitle: string;
    extras: string[];
  };
  fleet: {
    eyebrow: string;
    title: string;
    lead: string;
    summary: string;
    viewPhoto: string;
    vehicles: {
      title: string;
      text: string;
      image: VehicleImage;
      gallery: VehicleImage[];
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    quote: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    companyName: string;
    kvk: string;
    vat: string;
    addressTitle: string;
    addresses: string[];
    email: string;
    phone: string;
    whatsapp: string;
    call: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      service: string;
      options: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  offices: {
    eyebrow: string;
    title: string;
    mapLabel: string;
    offices: Office[];
  };
  footer: {
    kicker: string;
    title: string;
  };
};

const vehicleGalleries = {
  boxTruck: [
    { src: "/hero-truck-warehouse.jpg", alt: "4 meter bakwagen" },
    { src: "/hero-truck-port.jpg", alt: "4 meter bakwagen bij terminal" },
    { src: "/hero-truck-europe.jpg", alt: "4 meter bakwagen onderweg in Europa" },
  ],
  truck: [
    { src: "/hero-truck-port.jpg", alt: "8 meter vrachtwagen" },
    { src: "/hero-truck-warehouse.jpg", alt: "8 meter vrachtwagen bij magazijn" },
    { src: "/hero-truck-europe.jpg", alt: "8 meter vrachtwagen op Europese route" },
  ],
  trailer: [
    { src: "/hero-truck-europe.jpg", alt: "grote trailer" },
    { src: "/hero-truck-port.jpg", alt: "grote trailer in havengebied" },
    { src: "/hero-truck-warehouse.jpg", alt: "grote trailer bij laadlocatie" },
  ],
} as const;

const offices: Office[] = [
  {
    key: "tilburg",
    city: "Tilburg",
    role: "Nederland - Hoofdkantoor",
    address: "Siriusstraat 100, 5015 BT Tilburg, Nederland",
    coords: [51.5555, 5.0913],
  },
  {
    key: "denbosch",
    city: "'s-Hertogenbosch",
    role: "Nederland - 's-Hertogenbosch",
    address: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch, Nederland",
    coords: [51.7178, 5.3037],
  },
  {
    key: "oosterhout",
    city: "Oosterhout",
    role: "Nederland - Oosterhout",
    address: "Meerpal 8 E, 4904 SK Oosterhout, Nederland",
    coords: [51.6418, 4.856],
  },
];

export const siteContent: Record<Locale, LocaleContent> = {
  nl: {
    localeName: "Nederlands",
    seo: {
      siteTitle: "Around Europe B.V. | Logistiek Door Europa",
      siteDescription:
        "Moderne bedrijfswebsite voor Around Europe B.V., gericht op Europese logistiek, transportcoordinatie en betrouwbare levering.",
      pages: {
        home: {
          title: "Around Europe B.V. | Logistiek Door Europa",
          description:
            "Snel, betrouwbaar en flexibel transport in Nederland en Europa met professionele chauffeurs en een modern wagenpark.",
        },
        services: {
          title: "Diensten | Around Europe B.V.",
          description:
            "Bekijk de transportdiensten van Around Europe B.V., van bakwagens en vrachtwagens tot internationale transporten en spoedleveringen.",
        },
        fleet: {
          title: "Onze Voertuigen | Around Europe B.V.",
          description:
            "Ontdek het moderne wagenpark van Around Europe B.V. met bakwagens, vrachtwagens en trailers voor elke transportopdracht.",
        },
        about: {
          title: "Over Ons | Around Europe B.V.",
          description:
            "Lees meer over Around Europe B.V., het transportbedrijf uit Tilburg met jarenlange ervaring in logistiek en distributie.",
        },
        contact: {
          title: "Contact | Around Europe B.V.",
          description:
            "Neem contact op met Around Europe B.V. voor transportaanvragen, offertes en logistieke ondersteuning in Nederland en Europa.",
        },
      },
    },
    nav: {
      home: "Home",
      services: "Diensten",
      fleet: "Onze Voertuigen",
      about: "Over Ons",
      contact: "Contact",
      directContact: "Direct contact",
      languageLabel: "Taalselectie",
      openMenu: "Navigatie openen",
      closeMenu: "Navigatie sluiten",
    },
    common: {
      backToTop: "Terug naar boven",
      readMore: "Meer lezen",
      allServices: "Bekijk alle diensten",
      allVehicles: "Bekijk alle voertuigen",
      getQuote: "Vraag direct een offerte aan",
      closeGallery: "Sluit fotovertoning",
    },
    hero: {
      eyebrow: "Around Europe B.V.",
      titleLine1: "Snel, betrouwbaar en flexibel transport",
      titleLine2: "in Nederland en heel Europa",
      lead:
        "Van spoedleveringen tot complete transportoplossingen - wij zorgen dat uw zending veilig en op tijd aankomt.",
      points: [
        "Snelle service - ook spoedtransport mogelijk",
        "Professionele en ervaren chauffeurs",
        "Transport op maat - van klein tot groot",
        "Betrouwbare partner voor bedrijven en particulieren",
      ],
      ctaPrimary: "Vraag Vandaag Nog Een Offerte Aan",
      ctaSecondary: "Bekijk Diensten",
      cards: [
        {
          title: "EU ROUTES",
          text: "Geplande vrachtroutes met snelle respons en duidelijke coordinatie.",
        },
        {
          title: "BEDRIJFSPROFIEL",
          text: "Eerst een sterke presentatie, direct zichtbaar operationeel vertrouwen.",
        },
        {
          title: "TRANSPORTSTROOM",
          text: "Operationele planning, zendingupdates en routezichtbaarheid in een gerichte presentatielaag.",
        },
      ],
    },
    services: {
      eyebrow: "Diensten",
      title: "Onze Diensten",
      lead: "Wij bieden professioneel transport met verschillende soorten voertuigen.",
      items: [
        {
          title: "Bakwagens (4 meter laadruimte)",
          text: "Ideaal voor stadsdistributie en snelle leveringen.",
        },
        {
          title: "Vrachtwagens (8 meter laadruimte - C-rijbewijs)",
          text: "Voor middelgrote transporten.",
        },
        {
          title: "Trekker-oplegger (trailer / vrachtwagens)",
          text: "Voor grote en internationale transporten.",
        },
      ],
      extraTitle: "Daarnaast bieden wij",
      extras: [
        "Transport binnen Nederland",
        "Internationale transport (EU)",
        "Spoedtransport (urgent levering)",
        "Distributie en palletvervoer",
        "Koeriersdiensten",
      ],
    },
    fleet: {
      eyebrow: "Onze Voertuigen",
      title: "Onze Voertuigen",
      lead: "Wij beschikken over een modern en veelzijdig wagenpark.",
      summary: "Altijd het juiste voertuig voor uw transport.",
      viewPhoto: "Bekijk Foto",
      vehicles: [
        {
          title: "4 meter bakwagens",
          text: "Snel en flexibel.",
          image: vehicleGalleries.boxTruck[0],
          gallery: [...vehicleGalleries.boxTruck],
        },
        {
          title: "8 meter vrachtwagens",
          text: "Efficient en krachtig.",
          image: vehicleGalleries.truck[0],
          gallery: [...vehicleGalleries.truck],
        },
        {
          title: "Grote trailers",
          text: "Voor zware en internationale ladingen.",
          image: vehicleGalleries.trailer[0],
          gallery: [...vehicleGalleries.trailer],
        },
      ],
    },
    about: {
      eyebrow: "Over Ons",
      title: "Around Europe B.V. is een professioneel transportbedrijf gevestigd in Tilburg.",
      text:
        "Met jarenlange ervaring in logistiek en distributie bieden wij betrouwbare en flexibele transportdiensten binnen Nederland en Europa. Wij werken met een sterk team van chauffeurs en een modern wagenpark, zodat wij elke opdracht snel en efficient kunnen uitvoeren.",
      quote: "Uw lading is bij ons in veilige handen.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contactgegevens",
      text: "Wij zijn bereikbaar voor al uw transportaanvragen.",
      companyName: "Bedrijfsnaam: Around Europe B.V.",
      kvk: "KVK: 97004367",
      vat: "BTW: NL867871556B01",
      addressTitle: "Adressen:",
      addresses: [
        "Siriusstraat 100, 5015 BT Tilburg, Nederland",
        "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch",
        "Meerpal 8 E, 4904 SK Oosterhout",
      ],
      email: "E-mail: info@aroundeurope.nl",
      phone: "Telefoon: +31 6 16077858",
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
        options: ["Wegtransport", "Grensoverschrijdende Planning", "Zakelijke Samenwerking"],
        message: "Projectdetails",
        messagePlaceholder: "Vertel ons over uw routes, timing of logistieke behoefte",
        submit: "Verstuur Aanvraag",
      },
    },
    offices: {
      eyebrow: "Europese Vestigingen",
      title: "Onze locaties en directe bereikbaarheid in Nederland",
      mapLabel: "Around Europe kaart met vestigingen",
      offices,
    },
    footer: {
      kicker: "Around Europe B.V.",
      title: "Snel. Betrouwbaar. Overal in Europa.",
    },
  },
  en: {
    localeName: "English",
    seo: {
      siteTitle: "Around Europe B.V. | Logistics Across Europe",
      siteDescription:
        "Modern logistics website for Around Europe B.V., focused on European transport coordination and dependable delivery.",
      pages: {
        home: {
          title: "Around Europe B.V. | Logistics Across Europe",
          description:
            "Fast, reliable and flexible transport across the Netherlands and Europe with professional drivers and a modern fleet.",
        },
        services: {
          title: "Services | Around Europe B.V.",
          description:
            "Explore the transport services of Around Europe B.V., from box trucks and heavy vehicles to urgent and international deliveries.",
        },
        fleet: {
          title: "Our Vehicles | Around Europe B.V.",
          description:
            "See the modern fleet of Around Europe B.V. with box trucks, rigid trucks and trailers for every transport requirement.",
        },
        about: {
          title: "About | Around Europe B.V.",
          description:
            "Learn more about Around Europe B.V., the Tilburg-based transport company with years of logistics and distribution experience.",
        },
        contact: {
          title: "Contact | Around Europe B.V.",
          description:
            "Contact Around Europe B.V. for transport requests, quotations and logistics support across the Netherlands and Europe.",
        },
      },
    },
    nav: {
      home: "Home",
      services: "Services",
      fleet: "Our Vehicles",
      about: "About",
      contact: "Contact",
      directContact: "Direct contact",
      languageLabel: "Language selector",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
    },
    common: {
      backToTop: "Back to top",
      readMore: "Read more",
      allServices: "View all services",
      allVehicles: "View all vehicles",
      getQuote: "Request a quote now",
      closeGallery: "Close photo preview",
    },
    hero: {
      eyebrow: "Around Europe B.V.",
      titleLine1: "Fast, reliable and flexible transport",
      titleLine2: "in the Netherlands and across Europe",
      lead:
        "From urgent deliveries to complete transport solutions, we make sure your shipment arrives safely and on time.",
      points: [
        "Fast service, including urgent transport",
        "Professional and experienced drivers",
        "Transport tailored to every shipment size",
        "Reliable partner for companies and private clients",
      ],
      ctaPrimary: "Request A Quote Today",
      ctaSecondary: "View Services",
      cards: [
        {
          title: "EU ROUTES",
          text: "Planned freight lanes with fast response and clear coordination.",
        },
        {
          title: "CLIENT PROFILE",
          text: "Corporate presentation first, operational trust immediately visible.",
        },
        {
          title: "TRANSPORT FLOW",
          text: "Operational planning, shipment updates, and route visibility in one focused presentation layer.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Our Services",
      lead: "We provide professional transport with different types of vehicles.",
      items: [
        {
          title: "Box Trucks (4 meter loading space)",
          text: "Ideal for city distribution and fast deliveries.",
        },
        {
          title: "Trucks (8 meter loading space - C license)",
          text: "For medium-sized transport jobs.",
        },
        {
          title: "Tractor-Trailer (trailers / trucks)",
          text: "For large and international transport operations.",
        },
      ],
      extraTitle: "Additional transport services",
      extras: [
        "Transport within the Netherlands",
        "International transport (EU)",
        "Express transport (urgent delivery)",
        "Distribution and pallet transport",
        "Courier services",
      ],
    },
    fleet: {
      eyebrow: "Our Vehicles",
      title: "Our Vehicles",
      lead: "We operate a modern and versatile fleet for different transport needs.",
      summary: "Always the right vehicle for your transport.",
      viewPhoto: "View Photo",
      vehicles: [
        {
          title: "4 meter box trucks",
          text: "Fast and flexible.",
          image: { src: "/hero-truck-warehouse.jpg", alt: "4 meter box truck" },
          gallery: [
            { src: "/hero-truck-warehouse.jpg", alt: "4 meter box truck" },
            { src: "/hero-truck-port.jpg", alt: "4 meter box truck near terminal" },
            { src: "/hero-truck-europe.jpg", alt: "4 meter box truck on European road" },
          ],
        },
        {
          title: "8 meter trucks",
          text: "Efficient and powerful.",
          image: { src: "/hero-truck-port.jpg", alt: "8 meter truck" },
          gallery: [
            { src: "/hero-truck-port.jpg", alt: "8 meter truck" },
            { src: "/hero-truck-warehouse.jpg", alt: "8 meter truck at warehouse" },
            { src: "/hero-truck-europe.jpg", alt: "8 meter truck on European route" },
          ],
        },
        {
          title: "Large trailers",
          text: "For heavy and international cargo.",
          image: { src: "/hero-truck-europe.jpg", alt: "large trailer" },
          gallery: [
            { src: "/hero-truck-europe.jpg", alt: "large trailer" },
            { src: "/hero-truck-port.jpg", alt: "large trailer in port area" },
            { src: "/hero-truck-warehouse.jpg", alt: "large trailer at loading site" },
          ],
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Around Europe B.V. is a professional transport company based in Tilburg.",
      text:
        "With years of experience in logistics and distribution, we provide reliable and flexible transport services within the Netherlands and across Europe. We work with a strong team of drivers and a modern fleet so that every assignment can be carried out quickly and efficiently.",
      quote: "Your cargo is in safe hands with us.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Details",
      text: "We are available for all your transport requests.",
      companyName: "Company name: Around Europe B.V.",
      kvk: "KVK: 97004367",
      vat: "VAT: NL867871556B01",
      addressTitle: "Addresses:",
      addresses: [
        "Siriusstraat 100, 5015 BT Tilburg, Netherlands",
        "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch",
        "Meerpal 8 E, 4904 SK Oosterhout",
      ],
      email: "Email: info@aroundeurope.nl",
      phone: "Phone: +31 6 16077858",
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
        options: ["Road Freight", "Cross-Border Planning", "Business Partnership"],
        message: "Project Details",
        messagePlaceholder: "Tell us about your routes, timing or logistics needs",
        submit: "Send Request",
      },
    },
    offices: {
      eyebrow: "Locations",
      title: "Our office and operating addresses in the Netherlands",
      mapLabel: "Around Europe office map",
      offices: [
        {
          key: "tilburg",
          city: "Tilburg",
          role: "Netherlands - Head Quarter",
          address: "Siriusstraat 100, 5015 BT Tilburg, Netherlands",
          coords: [51.5555, 5.0913],
        },
        {
          key: "denbosch",
          city: "'s-Hertogenbosch",
          role: "Netherlands - 's-Hertogenbosch",
          address: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch, Netherlands",
          coords: [51.7178, 5.3037],
        },
        {
          key: "oosterhout",
          city: "Oosterhout",
          role: "Netherlands - Oosterhout",
          address: "Meerpal 8 E, 4904 SK Oosterhout, Netherlands",
          coords: [51.6418, 4.856],
        },
      ],
    },
    footer: {
      kicker: "Around Europe B.V.",
      title: "Fast. Reliable. Across Europe.",
    },
  },
  de: {
    localeName: "Deutsch",
    seo: {
      siteTitle: "Around Europe B.V. | Logistik Durch Europa",
      siteDescription:
        "Moderner Unternehmensauftritt fuer Around Europe B.V., fokussiert auf europaeische Logistik, Transportkoordination und zuverlaessige Lieferung.",
      pages: {
        home: {
          title: "Around Europe B.V. | Logistik Durch Europa",
          description:
            "Schneller, zuverlaessiger und flexibler Transport in den Niederlanden und in ganz Europa mit professionellen Fahrern und modernem Fuhrpark.",
        },
        services: {
          title: "Leistungen | Around Europe B.V.",
          description:
            "Entdecken Sie die Transportleistungen von Around Europe B.V., von Kastenwagen und Lkw bis zu Express- und internationalen Transporten.",
        },
        fleet: {
          title: "Unsere Fahrzeuge | Around Europe B.V.",
          description:
            "Sehen Sie den modernen Fuhrpark von Around Europe B.V. mit Kastenwagen, Lkw und Trailern fuer jeden Transportbedarf.",
        },
        about: {
          title: "Ueber Uns | Around Europe B.V.",
          description:
            "Erfahren Sie mehr ueber Around Europe B.V., das Transportunternehmen aus Tilburg mit langjaehriger Erfahrung in Logistik und Distribution.",
        },
        contact: {
          title: "Kontakt | Around Europe B.V.",
          description:
            "Kontaktieren Sie Around Europe B.V. fuer Transportanfragen, Angebote und logistische Unterstuetzung in den Niederlanden und Europa.",
        },
      },
    },
    nav: {
      home: "Start",
      services: "Leistungen",
      fleet: "Unsere Fahrzeuge",
      about: "Ueber Uns",
      contact: "Kontakt",
      directContact: "Direkter Kontakt",
      languageLabel: "Sprachauswahl",
      openMenu: "Navigation öffnen",
      closeMenu: "Navigation schließen",
    },
    common: {
      backToTop: "Zurück nach oben",
      readMore: "Mehr erfahren",
      allServices: "Alle Leistungen ansehen",
      allVehicles: "Alle Fahrzeuge ansehen",
      getQuote: "Jetzt Angebot anfordern",
      closeGallery: "Fotovorschau schließen",
    },
    hero: {
      eyebrow: "Around Europe B.V.",
      titleLine1: "Schneller, zuverlaessiger und flexibler Transport",
      titleLine2: "in den Niederlanden und in ganz Europa",
      lead:
        "Von Expresslieferungen bis zu kompletten Transportloesungen sorgen wir dafuer, dass Ihre Sendung sicher und puenktlich ankommt.",
      points: [
        "Schneller Service - auch Express-Transport moeglich",
        "Professionelle und erfahrene Fahrer",
        "Transport nach Mass - von klein bis gross",
        "Zuverlaessiger Partner fuer Unternehmen und Privatkunden",
      ],
      ctaPrimary: "Fordern Sie Noch Heute Ein Angebot An",
      ctaSecondary: "Leistungen Ansehen",
      cards: [
        {
          title: "EU-ROUTEN",
          text: "Geplante Frachtkorridore mit schneller Reaktion und klarer Koordination.",
        },
        {
          title: "UNTERNEHMENSPROFIL",
          text: "Eine starke Praesentation zuerst, operative Verlaesslichkeit sofort sichtbar.",
        },
        {
          title: "TRANSPORTFLUSS",
          text: "Operative Planung, Sendungsupdates und Routentransparenz in einer fokussierten Praesentationsebene.",
        },
      ],
    },
    services: {
      eyebrow: "Leistungen",
      title: "Unsere Leistungen",
      lead: "Wir bieten professionellen Transport mit verschiedenen Fahrzeugtypen.",
      items: [
        {
          title: "Kastenwagen (4 Meter Laderaum)",
          text: "Ideal fuer Stadtverteilung und schnelle Lieferungen.",
        },
        {
          title: "Lkw (8 Meter Laderaum - Fuehrerschein C)",
          text: "Fuer mittelgrosse Transporte.",
        },
        {
          title: "Sattelzug (Trailer / Lkw)",
          text: "Fuer grosse und internationale Transporte.",
        },
      ],
      extraTitle: "Zusaetzlich bieten wir",
      extras: [
        "Transport innerhalb der Niederlande",
        "Internationaler Transport (EU)",
        "Express-Transport (dringende Lieferung)",
        "Distribution und Palettentransport",
        "Kurierdienste",
      ],
    },
    fleet: {
      eyebrow: "Unsere Fahrzeuge",
      title: "Unsere Fahrzeuge",
      lead: "Wir verfuegen ueber einen modernen und vielseitigen Fuhrpark.",
      summary: "Immer das richtige Fahrzeug fuer Ihren Transport.",
      viewPhoto: "Foto Ansehen",
      vehicles: [
        {
          title: "4-Meter-Kastenwagen",
          text: "Schnell und flexibel.",
          image: { src: "/hero-truck-warehouse.jpg", alt: "4-Meter-Kastenwagen" },
          gallery: [
            { src: "/hero-truck-warehouse.jpg", alt: "4-Meter-Kastenwagen" },
            { src: "/hero-truck-port.jpg", alt: "4-Meter-Kastenwagen am Terminal" },
            { src: "/hero-truck-europe.jpg", alt: "4-Meter-Kastenwagen auf Europastraße" },
          ],
        },
        {
          title: "8-Meter-Lkw",
          text: "Effizient und leistungsstark.",
          image: { src: "/hero-truck-port.jpg", alt: "8-Meter-Lkw" },
          gallery: [
            { src: "/hero-truck-port.jpg", alt: "8-Meter-Lkw" },
            { src: "/hero-truck-warehouse.jpg", alt: "8-Meter-Lkw am Lager" },
            { src: "/hero-truck-europe.jpg", alt: "8-Meter-Lkw auf Europa-Route" },
          ],
        },
        {
          title: "Grosse Trailer",
          text: "Fuer schwere und internationale Ladungen.",
          image: { src: "/hero-truck-europe.jpg", alt: "großer Trailer" },
          gallery: [
            { src: "/hero-truck-europe.jpg", alt: "großer Trailer" },
            { src: "/hero-truck-port.jpg", alt: "großer Trailer im Hafengebiet" },
            { src: "/hero-truck-warehouse.jpg", alt: "großer Trailer am Ladeplatz" },
          ],
        },
      ],
    },
    about: {
      eyebrow: "Ueber Uns",
      title: "Around Europe B.V. ist ein professionelles Transportunternehmen mit Sitz in Tilburg.",
      text:
        "Mit jahrelanger Erfahrung in Logistik und Distribution bieten wir zuverlaessige und flexible Transportdienste in den Niederlanden und in ganz Europa. Wir arbeiten mit einem starken Fahrerteam und einem modernen Fuhrpark, damit wir jeden Auftrag schnell und effizient ausfuehren koennen.",
      quote: "Ihre Ladung ist bei uns in sicheren Haenden.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Kontaktangaben",
      text: "Wir sind fuer alle Ihre Transportanfragen erreichbar.",
      companyName: "Firmenname: Around Europe B.V.",
      kvk: "Handelsregister: 97004367",
      vat: "USt-IdNr.: NL867871556B01",
      addressTitle: "Adressen:",
      addresses: [
        "Siriusstraat 100, 5015 BT Tilburg, Niederlande",
        "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch",
        "Meerpal 8 E, 4904 SK Oosterhout",
      ],
      email: "E-Mail: info@aroundeurope.nl",
      phone: "Telefon: +31 6 16077858",
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
        options: ["Strassenfracht", "Grenzueberschreitende Planung", "Geschaeftspartnerschaft"],
        message: "Projektdetails",
        messagePlaceholder: "Erzaehlen Sie uns von Ihren Routen, Terminen oder Logistikanforderungen",
        submit: "Anfrage Senden",
      },
    },
    offices: {
      eyebrow: "Standorte",
      title: "Unsere Buero- und Betriebsadressen in den Niederlanden",
      mapLabel: "Around Europe Karte mit Standorten",
      offices: [
        {
          key: "tilburg",
          city: "Tilburg",
          role: "Niederlande - Hauptsitz",
          address: "Siriusstraat 100, 5015 BT Tilburg, Niederlande",
          coords: [51.5555, 5.0913],
        },
        {
          key: "denbosch",
          city: "'s-Hertogenbosch",
          role: "Niederlande - 's-Hertogenbosch",
          address: "Hambakenwetering 2A, 5231 DC 's-Hertogenbosch, Niederlande",
          coords: [51.7178, 5.3037],
        },
        {
          key: "oosterhout",
          city: "Oosterhout",
          role: "Niederlande - Oosterhout",
          address: "Meerpal 8 E, 4904 SK Oosterhout, Niederlande",
          coords: [51.6418, 4.856],
        },
      ],
    },
    footer: {
      kicker: "Around Europe B.V.",
      title: "Schnell. Zuverlaessig. In ganz Europa.",
    },
  },
};

export function getLocaleContent(locale: Locale) {
  return siteContent[locale];
}
