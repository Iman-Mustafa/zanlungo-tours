export const SERVICE_IMAGES = {
  "znz-airport-transfer": "/images/card-transfer.webp",
  "stone-town-tour": "/images/IMG-20261017-WA0045.webp", // Stone town harbor crossing
  "spice-farm-tour": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
  "prison-island-tour": "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
  "nakupenda-sandbank": "/images/card-nakupenda.webp", // Real Nakupenda sandbank
  "safari-blue": "/images/card-safari-blue.webp", // Real Safari Blue dhow cruise
  "jozani-forest": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
  "rock-restaurant": "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
  "mtende-beach": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
  "salaam-cave": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  "nungwi-kendwa-beach": "/images/IMG-20261017-WA0044.webp", // Pristine Zanzibar shallow ocean
  "baraka-aquarium": "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
  "sunset-dhow-cruise": "/images/capitano-lungo-beach.webp", // Real Kendwa sunset with Capitano
  "village-tour": "/images/card-village.webp", // Real village & school visit
  "quad-adventure": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
  "kuza-cave": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
  "maalum-cave": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
  "selous-fly-in": "/images/IMG-20261017-WA0028.webp", // Real safari drive with pride of lions
  "mikumi-fly-in": "/images/card-flyin.webp", // Real Mikumi Hippo Pool
  "serengeti-ngorongoro-3d": "/images/card-serengeti.webp", // Real safari jeep with resting lions
  "tarangire-manyara-2d": "/images/IMG-20261017-WA0029.webp", // Real lion cubs by pool
  "serengeti-5d": "/images/IMG-20261017-WA0038.webp", // Real Dhow sailing excursion
};

export const servicesData = {
  en: {
    transfers: [
      {
        id: "znz-airport-transfer",
        image: SERVICE_IMAGES["znz-airport-transfer"],
        icon: "🚐",
        name: "Zanzibar Airport (ZNZ) & Ferry Port Shuttles",
        duration: "Flexible",
        highlights: [
          "Air-conditioned private vehicles",
          "Professional English-speaking drivers",
          "Flight delay & schedule tracking",
          "All hotels across Zanzibar covered"
        ],
        included: ["Private vehicle", "Luggage handling", "Bottled mineral water", "Hotel pickup/dropoff"],
        excluded: ["Gratuities / Tips to the driver"]
      }
    ],
    zanzibarTours: [
      {
        id: "stone-town-tour",
        image: SERVICE_IMAGES["stone-town-tour"],
        icon: "🏛️",
        name: "Stone Town Historical Walking Tour",
        duration: "Half Day",
        highlights: ["Explore UNESCO-listed Stone Town", "Visit the Old Fort & Slave Market", "Wander narrow streets of the old medina"],
        included: ["Licensed guide", "Entrance fees", "Hotel pickup/dropoff"],
        excluded: ["Personal purchases", "Tips"]
      },
      {
        id: "spice-farm-tour",
        image: SERVICE_IMAGES["spice-farm-tour"],
        icon: "🌿",
        name: "Spice Farm Tour",
        duration: "Half Day",
        highlights: ["Visit a working spice plantation", "Taste & smell fresh cloves, vanilla, cardamom", "Tropical fruit tasting"],
        included: ["Farm entrance fee", "Tasting experience", "Local guide", "Hotel pickup/dropoff"],
        excluded: ["Spice purchases", "Tips"]
      },
      {
        id: "prison-island-tour",
        image: SERVICE_IMAGES["prison-island-tour"],
        icon: "🐢",
        name: "Prison Island (Changuu Island) Tour",
        duration: "Half Day",
        highlights: ["Boat ride to Prison Island", "Meet giant Aldabra tortoises", "Snorkeling in crystal-clear waters"],
        included: ["Boat transfer", "Island entry fee", "Snorkeling gear", "Hotel pickup/dropoff"],
        excluded: ["Tips", "Personal drinks"]
      },
      {
        id: "nakupenda-sandbank",
        image: SERVICE_IMAGES["nakupenda-sandbank"],
        icon: "🏝️",
        name: "Nakupenda Sandbank Day Trip",
        duration: "Full Day",
        highlights: ["Boat to Nakupenda's pristine sandbar", "Snorkeling at the reef", "Relaxing beach picnic"],
        included: ["Boat trip", "Snorkeling gear", "Picnic lunch", "Hotel pickup/dropoff"],
        excluded: ["Extra alcoholic beverages", "Tips"]
      },
      {
        id: "safari-blue",
        image: SERVICE_IMAGES["safari-blue"],
        icon: "⛵",
        name: "Safari Blue Marine Excursion",
        duration: "Full Day",
        highlights: ["Sailing on a traditional dhow boat", "Snorkeling at Menai Bay marine conservation", "Seafood buffet feast on the sandbank"],
        included: ["Boat cruise", "Snorkeling gear", "Seafood buffet lunch", "Hotel pickup/dropoff"],
        excluded: ["Premium alcoholic drinks", "Tips"]
      },
      {
        id: "jozani-forest",
        image: SERVICE_IMAGES["jozani-forest"],
        icon: "🐒",
        name: "Jozani Forest & Red Colobus Monkeys",
        duration: "Half Day",
        highlights: ["Spot rare Red Colobus monkeys", "Walk through mangrove boardwalk", "Guided nature trail"],
        included: ["Park entrance fees", "Forest tour guide", "Private air-conditioned transport"],
        excluded: ["Tips", "Personal snacks"]
      },
      {
        id: "rock-restaurant",
        image: SERVICE_IMAGES["rock-restaurant"],
        icon: "🍽️",
        name: "The Rock Restaurant Photo Trip",
        duration: "Half Day",
        highlights: ["Iconic photo stop at The Rock", "Combine with Jozani Forest", "Scenic east coast drive"],
        included: ["Transport", "Jozani entrance fees", "Guide"],
        excluded: ["Meals & drinks at The Rock Restaurant"]
      },
      {
        id: "mtende-beach",
        image: SERVICE_IMAGES["mtende-beach"],
        icon: "🌊",
        name: "Mtende Beach Day Trip",
        duration: "Full Day",
        highlights: ["Remote south-east beach escape", "Kite surfing and beach activities", "Relaxed, crowd-free atmosphere"],
        included: ["Private transport", "Bottled water", "Hotel pickup/dropoff"],
        excluded: ["Meals at beach restaurants", "Water sports fees", "Tips"]
      },
      {
        id: "salaam-cave",
        image: SERVICE_IMAGES["salaam-cave"],
        icon: "🕌",
        name: "Salaam Cave Tour",
        duration: "Half Day",
        highlights: ["Ancient coral cave system", "Cultural village visit", "Local storytelling and history"],
        included: ["Guide", "Cave entry fee", "Transport"],
        excluded: ["Personal purchases", "Tips"]
      },
      {
        id: "nungwi-kendwa-beach",
        image: SERVICE_IMAGES["nungwi-kendwa-beach"],
        icon: "🌅",
        name: "Nungwi & Kendwa Beach Day Tour",
        duration: "Full Day",
        highlights: ["Swim at Nungwi's famous white-sand beach", "Visit the Mnarani Marine Turtle Sanctuary", "Relax at Kendwa beach bars"],
        included: ["Private transport", "Turtle sanctuary entry", "Bottled water", "Hotel pickup/dropoff"],
        excluded: ["Meals & drinks", "Tips"]
      },
      {
        id: "baraka-aquarium",
        image: SERVICE_IMAGES["baraka-aquarium"],
        icon: "🐠",
        name: "Baraka Natural Aquarium & Nungwi",
        duration: "Full Day",
        highlights: ["Swim with sea turtles at Baraka", "Natural tidal pool aquarium experience", "Combine with Nungwi beach"],
        included: ["Transport", "Aquarium entry fee", "Hotel pickup/dropoff"],
        excluded: ["Personal meals", "Tips"]
      },
      {
        id: "sunset-dhow-cruise",
        image: SERVICE_IMAGES["sunset-dhow-cruise"],
        icon: "🌇",
        name: "Sunset Dhow Cruise",
        duration: "2–3 Hours",
        highlights: ["Romantic sail at sunset", "Light snacks & drinks onboard", "Live traditional Taarab music"],
        included: ["Dhow boat", "Snacks & soft drinks", "Live music", "Hotel pickup/dropoff"],
        excluded: ["Premium alcoholic drinks", "Tips"]
      },
      {
        id: "village-tour",
        image: SERVICE_IMAGES["village-tour"],
        icon: "🏘️",
        name: "Local Village Cultural Tour",
        duration: "Half Day",
        highlights: ["Visit authentic Swahili village", "Meet local families", "Traditional cooking demonstration"],
        included: ["Local guide", "Transport", "Cultural activities"],
        excluded: ["Personal purchases", "Tips"]
      },
      {
        id: "quad-adventure",
        image: SERVICE_IMAGES["quad-adventure"],
        icon: "🏍️",
        name: "Quad Bike Adventure Tour",
        duration: "2–3 Hours",
        highlights: ["Ride through forests, beaches & villages", "Guided off-road route", "Suitable for beginners"],
        included: ["Quad bike rental", "Safety gear & helmet", "Qualified guide"],
        excluded: ["Personal fuel damage insurance", "Tips"]
      },
      {
        id: "kuza-cave",
        image: SERVICE_IMAGES["kuza-cave"],
        icon: "🦇",
        name: "Kuza Cave & Cultural Experience",
        duration: "Half Day",
        highlights: ["Explore an ancient underwater cave", "Swim inside the cave pool", "Village cultural meeting"],
        included: ["Cave entry fee", "Guide", "Transport"],
        excluded: ["Personal snacks", "Tips"]
      },
      {
        id: "maalum-cave",
        image: SERVICE_IMAGES["maalum-cave"],
        icon: "💧",
        name: "Maalum Cave Natural Pool",
        duration: "Half Day",
        highlights: ["Natural freshwater cave pool", "Peaceful forest surroundings", "Unique swimming experience"],
        included: ["Entry fee", "Guide", "Transport"],
        excluded: ["Personal snacks", "Tips"]
      }
    ],
    flyInSafaris: [
      {
        id: "selous-fly-in",
        image: SERVICE_IMAGES["selous-fly-in"],
        icon: "✈️",
        name: "Nyerere National Park (Selous) Same-Day Fly-In",
        duration: "1 Day Return",
        highlights: ["Scenic domestic flight from Zanzibar", "Full day open 4x4 safari cruiser game drive", "Authentic bush lunch experience"],
        included: ["Return flights (ZNZ–Selous–ZNZ)", "All park conservation fees", "Game drive safari", "Lunch & water"],
        excluded: ["Premium drinks", "Tips / Gratuities"]
      },
      {
        id: "mikumi-fly-in",
        image: SERVICE_IMAGES["mikumi-fly-in"],
        icon: "✈️",
        name: "Mikumi National Park Same-Day Fly-In Safari",
        duration: "1 Day Return",
        highlights: ["Early morning flight from ZNZ", "Spot lions, elephants, giraffes & zebras", "Perfect for tight holiday schedules"],
        included: ["Return domestic flights", "Park entry permits", "Professional safari driver-guide", "Lunch"],
        excluded: ["Personal items", "Tips"]
      }
    ],
    multiDaySafaris: [
      {
        id: "serengeti-ngorongoro-3d",
        image: SERVICE_IMAGES["serengeti-ngorongoro-3d"],
        icon: "🦁",
        name: "Classic Serengeti & Ngorongoro Crater Expedition",
        duration: "3 Days / 2 Nights",
        highlights: ["Track the spectacular Great Migration", "Descent into the iconic Ngorongoro Crater floor", "Overnight stay in luxury tented camps"],
        included: ["All national park fees", "4x4 Safari Land Cruiser with pop-up roof", "Full board meals", "Professional wildlife guide"],
        excluded: ["International flights", "Tanzanian entry visas", "Tips"]
      },
      {
        id: "tarangire-manyara-2d",
        image: SERVICE_IMAGES["tarangire-manyara-2d"],
        icon: "🐘",
        name: "Tarangire & Lake Manyara Safari",
        duration: "2 Days / 1 Night",
        highlights: ["Tarangire's legendary elephant herds", "Tree-climbing lions at Lake Manyara", "Flamingos on the soda lake"],
        included: ["All park fees", "4x4 Safari vehicle", "Full board accommodation", "Guide"],
        excluded: ["Flights from Zanzibar", "Visas", "Tips"]
      },
      {
        id: "serengeti-5d",
        image: SERVICE_IMAGES["serengeti-5d"],
        icon: "🌍",
        name: "Extended Serengeti, Ngorongoro & Tarangire",
        duration: "5 Days / 4 Nights",
        highlights: ["Comprehensive northern Tanzania safari circuit", "Multiple ecosystem game drives", "Luxury lodge & tented camp nights"],
        included: ["All park fees", "4x4 Safari Land Cruiser", "Full board meals", "Expert naturalist guide"],
        excluded: ["International / domestic flights", "Visas", "Tips"]
      }
    ]
  },
  it: {
    transfers: [
      {
        id: "znz-airport-transfer",
        image: SERVICE_IMAGES["znz-airport-transfer"],
        icon: "🚐",
        name: "Navetta Privata Aeroporto (ZNZ) e Porto di Zanzibar",
        duration: "Flessibile",
        highlights: [
          "Veicoli privati con aria condizionata",
          "Autisti professionisti di lingua inglese",
          "Monitoraggio ritardi voli",
          "Tutti gli hotel di Zanzibar coperti"
        ],
        included: ["Veicolo privato", "Gestione bagagli", "Acqua minerale in bottiglia", "Pick-up/drop-off in hotel"],
        excluded: ["Mance all'autista"]
      }
    ],
    zanzibarTours: [
      {
        id: "stone-town-tour",
        image: SERVICE_IMAGES["stone-town-tour"],
        icon: "🏛️",
        name: "Tour Storico a Piedi di Stone Town",
        duration: "Mezza Giornata",
        highlights: ["Esplora la Stone Town patrimonio UNESCO", "Visita il Vecchio Forte e il Mercato degli Schiavi", "Passeggia nei vicoli storici"],
        included: ["Guida autorizzata", "Biglietti d'ingresso", "Pick-up/drop-off hotel"],
        excluded: ["Acquisti personali", "Mance"]
      },
      {
        id: "spice-farm-tour",
        image: SERVICE_IMAGES["spice-farm-tour"],
        icon: "🌿",
        name: "Tour della Fattoria delle Spezie",
        duration: "Mezza Giornata",
        highlights: ["Visita una piantagione di spezie attiva", "Assaggia chiodi di garofano, vaniglia e cardamomo", "Degustazione di frutta tropicale"],
        included: ["Biglietto ingresso", "Esperienza di degustazione", "Guida locale", "Pick-up/drop-off"],
        excluded: ["Acquisto spezie", "Mance"]
      },
      {
        id: "prison-island-tour",
        image: SERVICE_IMAGES["prison-island-tour"],
        icon: "🐢",
        name: "Tour di Prison Island (Changuu)",
        duration: "Mezza Giornata",
        highlights: ["Gita in barca a Prison Island", "Incontra le tartarughe giganti di Aldabra", "Snorkeling in acque cristalline"],
        included: ["Trasferimento in barca", "Biglietto isola", "Attrezzatura da snorkeling", "Pick-up hotel"],
        excluded: ["Mance", "Bevande personali"]
      },
      {
        id: "nakupenda-sandbank",
        image: SERVICE_IMAGES["nakupenda-sandbank"],
        icon: "🏝️",
        name: "Gita alla Lingua di Sabbia di Nakupenda",
        duration: "Intera Giornata",
        highlights: ["Barca alla pristina lingua di sabbia", "Snorkeling alla barriera corallina", "Picnic rilassante in spiaggia"],
        included: ["Gita in barca", "Attrezzatura snorkeling", "Pranzo al sacco", "Pick-up hotel"],
        excluded: ["Bevande alcoliche extra", "Mance"]
      },
      {
        id: "safari-blue",
        image: SERVICE_IMAGES["safari-blue"],
        icon: "⛵",
        name: "Escursione Marina Safari Blue",
        duration: "Intera Giornata",
        highlights: ["Navigazione su un dhow tradizionale", "Snorkeling nell'area protetta di Menai Bay", "Pranzo a base di pesce sulla lingua di sabbia"],
        included: ["Crociera in barca", "Attrezzatura snorkeling", "Pranzo a buffet di pesce", "Pick-up hotel"],
        excluded: ["Bevande alcoliche premium", "Mance"]
      },
      {
        id: "jozani-forest",
        image: SERVICE_IMAGES["jozani-forest"],
        icon: "🐒",
        name: "Foresta di Jozani e Colobus Rossi",
        duration: "Mezza Giornata",
        highlights: ["Avvista i rari scimmioni Colobus Rossi", "Passeggia sulla passerella delle mangrovie", "Sentiero naturalistico guidato"],
        included: ["Biglietti d'ingresso al parco", "Guida forestale", "Trasporto privato climatizzato"],
        excluded: ["Mance", "Spuntini personali"]
      },
      {
        id: "rock-restaurant",
        image: SERVICE_IMAGES["rock-restaurant"],
        icon: "🍽️",
        name: "Foto al The Rock Restaurant",
        duration: "Mezza Giornata",
        highlights: ["Foto iconica al The Rock", "Combinato con Foresta di Jozani", "Panoramica strada della costa est"],
        included: ["Trasporto", "Biglietti Jozani", "Guida"],
        excluded: ["Pasti e bevande al The Rock"]
      },
      {
        id: "mtende-beach",
        image: SERVICE_IMAGES["mtende-beach"],
        icon: "🌊",
        name: "Gita Giornaliera alla Spiaggia di Mtende",
        duration: "Intera Giornata",
        highlights: ["Fuga remota nel sud-est", "Kitesurf e attività balneari", "Atmosfera rilassata e poco affollata"],
        included: ["Trasporto privato", "Acqua in bottiglia", "Pick-up hotel"],
        excluded: ["Pasti ai ristoranti", "Sport acquatici", "Mance"]
      },
      {
        id: "salaam-cave",
        image: SERVICE_IMAGES["salaam-cave"],
        icon: "🕌",
        name: "Tour della Grotta di Salaam",
        duration: "Mezza Giornata",
        highlights: ["Antico sistema di grotte coralline", "Visita a un villaggio locale", "Narrazione culturale e storia"],
        included: ["Guida", "Biglietto grotta", "Trasporto"],
        excluded: ["Acquisti personali", "Mance"]
      },
      {
        id: "nungwi-kendwa-beach",
        image: SERVICE_IMAGES["nungwi-kendwa-beach"],
        icon: "🌅",
        name: "Tour Giornaliero alle Spiagge di Nungwi & Kendwa",
        duration: "Intera Giornata",
        highlights: ["Nuota sulla famosa spiaggia di Nungwi", "Visita il santuario marino delle tartarughe", "Relax ai beach bar di Kendwa"],
        included: ["Trasporto privato", "Ingresso santuario tartarughe", "Acqua in bottiglia", "Pick-up hotel"],
        excluded: ["Pasti e bevande", "Mance"]
      },
      {
        id: "baraka-aquarium",
        image: SERVICE_IMAGES["baraka-aquarium"],
        icon: "🐠",
        name: "Acquario Naturale di Baraka & Nungwi",
        duration: "Intera Giornata",
        highlights: ["Nuota con le tartarughe marine a Baraka", "Esperienza nell'acquario in piscine tidali naturali", "Combinato con spiaggia di Nungwi"],
        included: ["Trasporto", "Biglietto acquario", "Pick-up hotel"],
        excluded: ["Pasti personali", "Mance"]
      },
      {
        id: "sunset-dhow-cruise",
        image: SERVICE_IMAGES["sunset-dhow-cruise"],
        icon: "🌇",
        name: "Crociera al Tramonto su Dhow",
        duration: "2–3 Ore",
        highlights: ["Vela romantica al tramonto", "Spuntini e bevande a bordo", "Musica tradizionale Taarab dal vivo"],
        included: ["Barca dhow", "Spuntini e bevande analcoliche", "Musica dal vivo", "Pick-up hotel"],
        excluded: ["Bevande alcoliche premium", "Mance"]
      },
      {
        id: "village-tour",
        image: SERVICE_IMAGES["village-tour"],
        icon: "🏘️",
        name: "Tour Culturale del Villaggio Locale",
        duration: "Mezza Giornata",
        highlights: ["Visita un autentico villaggio Swahili", "Incontra famiglie locali", "Dimostrazione di cucina tradizionale"],
        included: ["Guida locale", "Trasporto", "Attività culturali"],
        excluded: ["Acquisti personali", "Mance"]
      },
      {
        id: "quad-adventure",
        image: SERVICE_IMAGES["quad-adventure"],
        icon: "🏍️",
        name: "Tour Avventura in Quad",
        duration: "2–3 Ore",
        highlights: ["Guida tra foreste, spiagge e villaggi", "Percorso fuoristrada guidato", "Adatto per principianti"],
        included: ["Noleggio quad", "Attrezzatura di sicurezza e casco", "Guida qualificata"],
        excluded: ["Assicurazione danni carburante", "Mance"]
      },
      {
        id: "kuza-cave",
        image: SERVICE_IMAGES["kuza-cave"],
        icon: "🦇",
        name: "Grotta di Kuza ed Esperienza Culturale",
        duration: "Mezza Giornata",
        highlights: ["Esplora un'antica grotta subacquea", "Nuota nella piscina della grotta", "Incontro culturale nel villaggio"],
        included: ["Biglietto grotta", "Guida", "Trasporto"],
        excluded: ["Spuntini personali", "Mance"]
      },
      {
        id: "maalum-cave",
        image: SERVICE_IMAGES["maalum-cave"],
        icon: "💧",
        name: "Piscina Naturale della Grotta di Maalum",
        duration: "Mezza Giornata",
        highlights: ["Piscina naturale d'acqua dolce nella grotta", "Bosco tranquillo intorno", "Esperienza di nuoto unica"],
        included: ["Biglietto d'ingresso", "Guida", "Trasporto"],
        excluded: ["Spuntini personali", "Mance"]
      }
    ],
    flyInSafaris: [
      {
        id: "selous-fly-in",
        image: SERVICE_IMAGES["selous-fly-in"],
        icon: "✈️",
        name: "Safari in Volo in Giornata al Parco Nyerere (Selous)",
        duration: "1 Giorno (Ritorno)",
        highlights: ["Volo panoramico da Zanzibar", "Safari in jeep 4x4 aperta per tutto il giorno", "Pranzo autentico nella savana (Bush Lunch)"],
        included: ["Voli andata/ritorno (ZNZ–Selous–ZNZ)", "Tasse parco", "Safari guidato", "Pranzo e acqua"],
        excluded: ["Bevande premium", "Mance"]
      },
      {
        id: "mikumi-fly-in",
        image: SERVICE_IMAGES["mikumi-fly-in"],
        icon: "✈️",
        name: "Safari in Volo al Parco Nazionale di Mikumi",
        duration: "1 Giorno (Ritorno)",
        highlights: ["Volo mattutino da ZNZ", "Avvista leoni, elefanti, giraffe e zebre", "Perfetto per itinerari serrati"],
        included: ["Voli domestici andata/ritorno", "Permessi d'ingresso al parco", "Guida-autista safari professionale", "Pranzo"],
        excluded: ["Articoli personali", "Mance"]
      }
    ],
    multiDaySafaris: [
      {
        id: "serengeti-ngorongoro-3d",
        image: SERVICE_IMAGES["serengeti-ngorongoro-3d"],
        icon: "🦁",
        name: "Spedizione Classica Serengeti & Cratere di Ngorongoro",
        duration: "3 Giorni / 2 Notti",
        highlights: ["Segui la Grande Migrazione", "Discesa nel famoso Cratere di Ngorongoro", "Pernottamento in campi tendati di lusso"],
        included: ["Tutte le tasse parco", "Jeep Safari 4x4 con tetto apribile", "Pensione completa", "Guida naturalista professionista"],
        excluded: ["Voli internazionali", "Visto d'ingresso", "Mance"]
      },
      {
        id: "tarangire-manyara-2d",
        image: SERVICE_IMAGES["tarangire-manyara-2d"],
        icon: "🐘",
        name: "Safari Tarangire & Lago Manyara",
        duration: "2 Giorni / 1 Notte",
        highlights: ["Leggendari branchi di elefanti del Tarangire", "Leoni che salgono sugli alberi al Lago Manyara", "Fenicotteri sul lago soda"],
        included: ["Tutte le tasse parco", "Veicolo safari 4x4", "Alloggio con pensione completa", "Guida"],
        excluded: ["Voli da Zanzibar", "Visto", "Mance"]
      },
      {
        id: "serengeti-5d",
        image: SERVICE_IMAGES["serengeti-5d"],
        icon: "🌍",
        name: "Serengeti Esteso, Ngorongoro e Tarangire",
        duration: "5 Giorni / 4 Notti",
        highlights: ["Circuito safari completo della Tanzania settentrionale", "Game drive in più ecosistemi", "Notti in lodge di lusso e campi tendati"],
        included: ["Tutte le tasse parco", "Jeep Safari 4x4", "Pensione completa", "Guida naturalista esperto"],
        excluded: ["Voli internazionali/domestici", "Visto", "Mance"]
      }
    ]
  }
};
