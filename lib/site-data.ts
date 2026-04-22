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
    titleLines: string[];
    lead: string;
    points: string[];
    trustItems: string[];
    introTitle: string;
    introText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTertiary: string;
    cards: { title: string; text: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
    whyTitle: string;
    whyItems: string[];
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
  coverage: {
    eyebrow: string;
    title: string;
    countries: string[];
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
    homeText: string;
    companyName: string;
    kvk: string;
    vat: string;
    addressTitle: string;
    addresses: string[];
    email: string;
    phone: string;
    whatsapp: string;
    call: string;
    quoteCta: string;
    contactCta: string;
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
      sending: string;
      success: string;
      error: string;
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

const fleetImagePaths = {
  furnitureTruck: Array.from(
    { length: 5 },
    (_, index) => `/cdn/images/cars/meubelwagens_4_meter/${index + 1}.jpeg`
  ),
  boxTruck: Array.from(
    { length: 14 },
    (_, index) => `/cdn/images/cars/bakwagen_7_meter/${index + 1}.jpeg`
  ),
  trailer: Array.from(
    { length: 7 },
    (_, index) => `/cdn/images/cars/trekker_met_oplegger/${index + 1}.jpeg`
  ),
} as const;

function toGallery(paths: readonly string[], alt: string): VehicleImage[] {
  return paths.map((src, index) => ({
    src,
    alt: index === 0 ? alt : `${alt} - ${index + 1}`,
  }));
}

function toCover(paths: readonly string[], alt: string): VehicleImage {
  return {
    src: paths[0],
    alt,
  };
}

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
    address: "Hambakenwetering 2A, 5231 DC\n's-Hertogenbosch, Nederland",
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
      allVehicles: "Bekijk ons wagenpark",
      getQuote: "Vraag direct een offerte aan",
      closeGallery: "Sluit fotovertoning",
    },
    hero: {
      eyebrow: "Around Europe B.V.",
      titleLines: ["Betrouwbaar transport", "door heel", "Nederland en Europa"],
      lead: "Snelle, veilige en flexibele logistieke oplossingen voor bedrijven",
      points: [
        "Snelle service - ook spoedtransport mogelijk",
        "Professionele en ervaren chauffeurs",
        "Transport op maat - van klein tot groot",
        "Betrouwbare partner voor bedrijven en particulieren",
      ],
      trustItems: [
        "24/7 beschikbaar",
        "Snelle levering",
        "Betrouwbare service",
        "Transport door heel Europa",
      ],
      introTitle: "Snel, betrouwbaar en flexibel transport",
      introText:
        "Wij bieden professioneel en betrouwbaar transport met diverse soorten voertuigen, gecombineerd met opslag en geintegreerde logistieke oplossingen. Of het nu gaat om spoedtransport of geplande distributie, wij zorgen ervoor dat uw goederen veilig en op tijd aankomen.",
      ctaPrimary: "Offerte aanvragen",
      ctaSecondary: "Contact opnemen",
      ctaTertiary: "WhatsApp",
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
      lead: "Betrouwbare transport-, opslag- en distributieoplossingen voor Nederland en Europa.",
      items: [
        {
          title: "Transport binnen Nederland",
          text: "Betrouwbare en efficiënte transportoplossingen voor dagelijkse distributie binnen Nederland.",
        },
        {
          title: "Internationaal transport (EU)",
          text: "Snelle en veilige leveringen door heel Europa met professionele planning en uitvoering.",
        },
        {
          title: "Spoedtransport",
          text: "Direct transport voor urgente zendingen, zonder vertraging.",
        },
        {
          title: "Opslag en distributie",
          text: "Flexibele opslagmogelijkheden gecombineerd met efficiënte distributie.",
        },
        {
          title: "Bakwagen transport (4m / 7m)",
          text: "Ideaal voor palletvervoer en flexibele leveringen.",
        },
      ],
      whyTitle: "Waarom kiezen voor ons",
      whyItems: [
        "Betrouwbare en ervaren chauffeurs",
        "Snelle en stipte levering",
        "Flexibele planning",
        "Professionele aanpak",
        "24/7 beschikbaarheid",
      ],
    },
    fleet: {
      eyebrow: "Wagenpark",
      title: "Ons wagenpark",
      lead: "Ons wagenpark bestaat uit moderne en goed onderhouden voertuigen, geschikt voor diverse transportbehoeften.",
      summary: "Altijd het juiste voertuig voor uw transport.",
      viewPhoto: "Bekijk Foto",
      vehicles: [
        {
          title: "Meubelwagens (4 meter)",
          text: "",
          image: toCover(fleetImagePaths.furnitureTruck, "Meubelwagens (4 meter)"),
          gallery: toGallery(fleetImagePaths.furnitureTruck, "Meubelwagens (4 meter)"),
        },
        {
          title: "Bakwagens (7 meter)",
          text: "",
          image: toCover(fleetImagePaths.boxTruck, "Bakwagens (7 meter)"),
          gallery: toGallery(fleetImagePaths.boxTruck, "Bakwagens (7 meter)"),
        },
        {
          title: "Trekkers met opleggers",
          text: "",
          image: toCover(fleetImagePaths.trailer, "Trekkers met opleggers"),
          gallery: toGallery(fleetImagePaths.trailer, "Trekkers met opleggers"),
        },
      ],
    },
    coverage: {
      eyebrow: "Werkgebied",
      title: "Wij zijn actief in:",
      countries: ["Nederland", "België", "Duitsland"],
    },
    about: {
      eyebrow: "Over Ons",
      title: "Over ons",
      text:
        "Around Europe B.V. is een professioneel transportbedrijf gevestigd in Nederland, gespecialiseerd in nationaal en internationaal transport, spoedleveringen en logistieke oplossingen.\n\nWij staan voor betrouwbaarheid, flexibiliteit en kwaliteit. Met onze ervaring en moderne voertuigen zorgen wij ervoor dat uw goederen veilig en op tijd worden geleverd.",
      quote: "Betrouwbaarheid, flexibiliteit en kwaliteit in elke zending.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      text: "Wij zijn bereikbaar voor al uw transportaanvragen.",
      homeText: "Heeft u vragen of wilt u een offerte aanvragen? Neem gerust contact met ons op.",
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
      quoteCta: "Vraag direct een offerte aan",
      contactCta: "Neem contact met ons op",
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
        sending: "Bezig met verzenden...",
        success: "Uw aanvraag is ontvangen. We nemen snel contact met u op.",
        error: "Er ging iets mis bij het verzenden. Probeer het opnieuw.",
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
      allVehicles: "View our fleet",
      getQuote: "Request a quote now",
      closeGallery: "Close photo preview",
    },
    hero: {
      eyebrow: "Around Europe B.V.",
      titleLines: ["Reliable transport", "across the", "Netherlands and Europe"],
      lead: "Fast, safe and flexible logistics solutions for businesses",
      points: [
        "Fast service, including urgent transport",
        "Professional and experienced drivers",
        "Transport tailored to every shipment size",
        "Reliable partner for companies and private clients",
      ],
      trustItems: [
        "24/7 availability",
        "Fast delivery",
        "Reliable service",
        "Transport across Europe",
      ],
      introTitle: "Fast, reliable and flexible transport",
      introText:
        "We provide professional and reliable transport with a wide range of vehicles, combined with storage and integrated logistics solutions. Whether it is urgent transport or planned distribution, we make sure your goods arrive safely and on time.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "Contact Us",
      ctaTertiary: "WhatsApp",
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
      lead: "Reliable transport, storage and distribution solutions across the Netherlands and Europe.",
      items: [
        {
          title: "Transport within the Netherlands",
          text: "Reliable and efficient transport solutions for daily distribution throughout the Netherlands.",
        },
        {
          title: "International transport (EU)",
          text: "Fast and secure deliveries across Europe with professional planning and execution.",
        },
        {
          title: "Express transport",
          text: "Direct transport for urgent shipments without delay.",
        },
        {
          title: "Storage and distribution",
          text: "Flexible storage options combined with efficient distribution.",
        },
        {
          title: "Box truck transport (4m / 7m)",
          text: "Ideal for pallet transport and flexible deliveries.",
        },
      ],
      whyTitle: "Why choose us",
      whyItems: [
        "Reliable and experienced drivers",
        "Fast and punctual delivery",
        "Flexible planning",
        "Professional approach",
        "24/7 availability",
      ],
    },
    fleet: {
      eyebrow: "Fleet",
      title: "Our fleet",
      lead: "Our fleet consists of modern and well-maintained vehicles, suitable for a wide range of transport needs.",
      summary: "Always the right vehicle for your transport.",
      viewPhoto: "View Photo",
      vehicles: [
        {
          title: "Furniture trucks (4 meter)",
          text: "",
          image: toCover(fleetImagePaths.furnitureTruck, "Furniture trucks (4 meter)"),
          gallery: toGallery(fleetImagePaths.furnitureTruck, "Furniture trucks (4 meter)"),
        },
        {
          title: "Box trucks (7 meter)",
          text: "",
          image: toCover(fleetImagePaths.boxTruck, "Box trucks (7 meter)"),
          gallery: toGallery(fleetImagePaths.boxTruck, "Box trucks (7 meter)"),
        },
        {
          title: "Tractors with trailers",
          text: "",
          image: toCover(fleetImagePaths.trailer, "Tractors with trailers"),
          gallery: toGallery(fleetImagePaths.trailer, "Tractors with trailers"),
        },
      ],
    },
    coverage: {
      eyebrow: "Coverage",
      title: "We are active in:",
      countries: ["The Netherlands", "Belgium", "Germany"],
    },
    about: {
      eyebrow: "About",
      title: "About us",
      text:
        "Around Europe B.V. is a professional transport company based in the Netherlands, specialized in national and international transport, urgent deliveries and logistics solutions.\n\nWe stand for reliability, flexibility and quality. With our experience and modern vehicles, we ensure that your goods are delivered safely and on time.",
      quote: "Reliability, flexibility and quality in every shipment.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact",
      text: "We are available for all your transport requests.",
      homeText: "Do you have questions or want to request a quote? Feel free to get in touch with us.",
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
      quoteCta: "Request a quote now",
      contactCta: "Contact us",
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
        sending: "Sending...",
        success: "Your request has been received. We will contact you soon.",
        error: "Something went wrong while sending your request. Please try again.",
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
      allVehicles: "Unseren Fuhrpark ansehen",
      getQuote: "Jetzt Angebot anfordern",
      closeGallery: "Fotovorschau schließen",
    },
    hero: {
      eyebrow: "Around Europe B.V.",
      titleLines: ["Zuverlässiger Transport", "in den Niederlanden", "und ganz Europa"],
      lead: "Schnelle, sichere und flexible Logistiklösungen für Unternehmen",
      points: [
        "Schneller Service - auch Express-Transport moeglich",
        "Professionelle und erfahrene Fahrer",
        "Transport nach Mass - von klein bis gross",
        "Zuverlaessiger Partner fuer Unternehmen und Privatkunden",
      ],
      trustItems: [
        "24/7 verfugbar",
        "Schnelle Lieferung",
        "Zuverlassiger Service",
        "Transport in ganz Europa",
      ],
      introTitle: "Schneller, zuverlässiger und flexibler Transport",
      introText:
        "Wir bieten professionellen und zuverlässigen Transport mit verschiedenen Fahrzeugtypen, kombiniert mit Lagerung und integrierten Logistiklösungen. Ob Express-Transport oder geplante Distribution, wir sorgen dafür, dass Ihre Güter sicher und pünktlich ankommen.",
      ctaPrimary: "Angebot anfordern",
      ctaSecondary: "Kontakt aufnehmen",
      ctaTertiary: "WhatsApp",
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
      lead: "Zuverlässige Transport-, Lager- und Distributionslösungen in den Niederlanden und Europa.",
      items: [
        {
          title: "Transport innerhalb der Niederlande",
          text: "Zuverlässige und effiziente Transportlösungen für die tägliche Distribution innerhalb der Niederlande.",
        },
        {
          title: "Internationaler Transport (EU)",
          text: "Schnelle und sichere Lieferungen in ganz Europa mit professioneller Planung und Ausführung.",
        },
        {
          title: "Express-Transport",
          text: "Direkter Transport für dringende Sendungen ohne Verzögerung.",
        },
        {
          title: "Lagerung und Distribution",
          text: "Flexible Lagermöglichkeiten kombiniert mit effizienter Distribution.",
        },
        {
          title: "Kastenwagen-Transport (4m / 7m)",
          text: "Ideal für Palettentransport und flexible Lieferungen.",
        },
      ],
      whyTitle: "Warum uns wählen",
      whyItems: [
        "Zuverlässige und erfahrene Fahrer",
        "Schnelle und pünktliche Lieferung",
        "Flexible Planung",
        "Professioneller Ansatz",
        "24/7 Verfügbarkeit",
      ],
    },
    fleet: {
      eyebrow: "Fuhrpark",
      title: "Unser Fuhrpark",
      lead: "Unser Fuhrpark besteht aus modernen und gut gewarteten Fahrzeugen für unterschiedliche Transportbedürfnisse.",
      summary: "Immer das richtige Fahrzeug fuer Ihren Transport.",
      viewPhoto: "Foto Ansehen",
      vehicles: [
        {
          title: "Möbelwagen (4 Meter)",
          text: "",
          image: toCover(fleetImagePaths.furnitureTruck, "Möbelwagen (4 Meter)"),
          gallery: toGallery(fleetImagePaths.furnitureTruck, "Möbelwagen (4 Meter)"),
        },
        {
          title: "Kastenwagen (7 Meter)",
          text: "",
          image: toCover(fleetImagePaths.boxTruck, "Kastenwagen (7 Meter)"),
          gallery: toGallery(fleetImagePaths.boxTruck, "Kastenwagen (7 Meter)"),
        },
        {
          title: "Sattelzugmaschinen mit Aufliegern",
          text: "",
          image: toCover(fleetImagePaths.trailer, "Sattelzugmaschinen mit Aufliegern"),
          gallery: toGallery(fleetImagePaths.trailer, "Sattelzugmaschinen mit Aufliegern"),
        },
      ],
    },
    coverage: {
      eyebrow: "Einsatzgebiet",
      title: "Wir sind aktiv in:",
      countries: ["Niederlande", "Belgien", "Deutschland"],
    },
    about: {
      eyebrow: "Ueber Uns",
      title: "Über uns",
      text:
        "Around Europe B.V. ist ein professionelles Transportunternehmen mit Sitz in den Niederlanden und spezialisiert auf nationale und internationale Transporte, Eillieferungen und Logistiklösungen.\n\nWir stehen für Zuverlässigkeit, Flexibilität und Qualität. Mit unserer Erfahrung und modernen Fahrzeugen sorgen wir dafür, dass Ihre Waren sicher und pünktlich geliefert werden.",
      quote: "Zuverlässigkeit, Flexibilität und Qualität bei jeder Sendung.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Kontakt",
      text: "Wir sind fuer alle Ihre Transportanfragen erreichbar.",
      homeText: "Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Kontaktieren Sie uns gerne.",
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
      quoteCta: "Jetzt Angebot anfordern",
      contactCta: "Kontakt aufnehmen",
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
        sending: "Wird gesendet...",
        success: "Ihre Anfrage wurde erhalten. Wir melden uns in Kürze bei Ihnen.",
        error: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
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
