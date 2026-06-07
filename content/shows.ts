// ============================================================================
// SHOW DATA — the programmatic SEO engine for /shows/[slug]
// ----------------------------------------------------------------------------
// Each entry renders a full landing page. To add a show, append an object.
// DATES: keep body copy timeless ("annually each January"). Only set
// `nextEdition` + the ISO fields when a future edition is CONFIRMED — these
// drive the Event rich snippet. When an edition passes, update or clear them.
// Last date review: 2026-06 (CES/NAB/World of Concrete/JCK 2026 already held).
// ============================================================================

export interface ShowFaq {
  q: string;
  a: string;
}

export interface ShowChallenge {
  title: string;
  body: string;
}

export interface ShowService {
  label: string;
  href: string;
}

export interface Show {
  slug: string;
  name: string; // short, e.g. "CES"
  fullName: string; // "CES (Consumer Electronics Show)"
  tagline: string; // hero subtitle
  venueSlug: string; // links to /venues/<slug>
  venueName: string;
  industry: string;
  timing: string; // evergreen, e.g. "Annually, early January"
  nextEdition?: string; // human, e.g. "December 1–4, 2026" — only if confirmed
  nextEditionISO?: string; // "2026-12-01" — drives Event JSON-LD
  nextEditionEndISO?: string; // "2026-12-04"
  scale: string; // "~135,000 attendees · ~4,000 exhibitors"
  image: string;
  intro: string;
  challenges: ShowChallenge[];
  boothAdvice: string;
  recommendedServices: ShowService[];
  faqs: ShowFaq[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

const SVC = {
  custom: { label: "Custom Booth Design & Build", href: "/services/custom-trade-show-booths" },
  rental: { label: "Booth Rentals", href: "/services/trade-show-booth-rental" },
  modular: { label: "Modular Booths", href: "/services/modular-booths" },
  doubleDeck: { label: "Double-Deck Booths", href: "/services/double-deck-booths" },
  id: { label: "Installation & Dismantle", href: "/services/installation-and-dismantle-las-vegas" },
  graphics: { label: "Graphics & Printing", href: "/services/graphics-printing" },
  design: { label: "3D Design & Rendering", href: "/services/3d-design-rendering" },
  storage: { label: "Storage & Logistics", href: "/services/storage-logistics" },
} as const;

export const shows: Show[] = [
  {
    slug: "ces",
    name: "CES",
    fullName: "CES (Consumer Electronics Show)",
    tagline: "Booth design, build & I&D for the world's largest tech show at the LVCC and Venetian Expo.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Consumer Electronics & Technology",
    timing: "Annually, early January",
    scale: "~135,000 attendees · ~4,000+ exhibitors",
    image: "/images/shows/ces.jpg",
    intro:
      "CES is the biggest, most demanding exhibition on the Las Vegas calendar — spread across the LVCC, the Venetian Expo and multiple hotel venues. With the entire global tech industry on the floor, your booth has seconds to stand out, and the show's compressed January move-in is one of the toughest logistics windows of the year.",
    challenges: [
      {
        title: "Brutal move-in window",
        body: "CES install happens over the holidays into the first days of January, when crews, freight and drayage are all in peak demand. Booths that aren't designed for fast, predictable assembly lose hours — and money — on the floor.",
      },
      {
        title: "Eureka Park & startup density",
        body: "Smaller 10×10 and 10×20 exhibitors in Eureka Park need designs that punch above their footprint. Lightweight modular systems and bold backlit graphics win attention without blowing the budget.",
      },
      {
        title: "Power, rigging & union labor",
        body: "LVCC requires union (IATSE/Teamsters) labor and advance-ordered power and rigging. We pre-coordinate the paperwork so there are no surprise charges or move-in day delays.",
      },
    ],
    boothAdvice:
      "CES rewards height, light and motion. Hanging signs, LED walls and double-deck builds command the floor, while pre-fabricated modular kits keep first-time and Eureka Park exhibitors on budget. We design to your hall's ceiling height and rigging points from day one.",
    recommendedServices: [SVC.custom, SVC.doubleDeck, SVC.id],
    faqs: [
      {
        q: "How early should I book a CES booth in Las Vegas?",
        a: "For a custom CES build, reach out 12–16 weeks ahead. The January move-in and holiday production schedule make CES the tightest deadline of the year, and labor and freight book up fast.",
      },
      {
        q: "Do you handle CES union labor and drayage at the LVCC?",
        a: "Yes. We coordinate all IATSE/Teamster labor, advance warehouse drayage, power and rigging orders so your install and dismantle stay on schedule and on budget.",
      },
      {
        q: "Can you build a small Eureka Park startup booth?",
        a: "Absolutely. We build everything from 10×10 modular startup booths to large custom islands, with rental options to control cost for first-time CES exhibitors.",
      },
    ],
    seoTitle: "CES Booth Builder Las Vegas | Custom Exhibits & Rentals for CES",
    seoDescription:
      "Trade show booth design, build, rental and I&D for CES at the Las Vegas Convention Center & Venetian Expo. Local Vegas team handling union labor, drayage and tight January move-in.",
    keywords: [
      "CES booth builder",
      "CES booth rental Las Vegas",
      "CES trade show booth",
      "CES exhibit design",
      "Eureka Park booth",
    ],
  },
  {
    slug: "nab-show",
    name: "NAB Show",
    fullName: "NAB Show (National Association of Broadcasters)",
    tagline: "Custom and rental exhibits for the broadcast & media tech show at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Broadcast, Media & Entertainment Technology",
    timing: "Annually, April",
    scale: "~60,000 attendees · ~1,300 exhibitors",
    image: "/images/shows/nab-show.jpg",
    intro:
      "NAB Show brings the broadcast, film and media-technology world to the Las Vegas Convention Center every spring. Exhibits here are demo-driven — buyers expect to touch the gear — so booths must balance heavy AV, comfortable demo stations and clean sightlines.",
    challenges: [
      {
        title: "Demo-heavy, AV-intensive booths",
        body: "NAB attendees come to see equipment run. That means dedicated power, cable management and acoustically-considered demo pods — all of which need to be engineered into the design, not bolted on later.",
      },
      {
        title: "Central & North Hall logistics",
        body: "NAB spreads across multiple LVCC halls. Knowing your hall's docks, ceiling heights and rigging points lets us optimize freight routing and rigging orders before move-in.",
      },
      {
        title: "Meeting & private demo space",
        body: "Many NAB exhibitors need conference rooms and private demo areas. Double-deck and walled builds maximize that square footage without sacrificing floor presence.",
      },
    ],
    boothAdvice:
      "Plan for power and AV first. We design demo stations with built-in cable runs and storage, add semi-private meeting rooms where you need them, and use hanging signage to stay visible across NAB's large halls.",
    recommendedServices: [SVC.custom, SVC.doubleDeck, SVC.graphics],
    faqs: [
      {
        q: "Can you support heavy AV and live demos at NAB Show?",
        a: "Yes. We engineer power distribution, cable management and demo pods into the booth design, and coordinate LVCC electrical and rigging orders in advance.",
      },
      {
        q: "Do you build NAB booths with private meeting rooms?",
        a: "We design walled and double-deck NAB exhibits with conference rooms, demo suites and storage to make the most of your footprint.",
      },
    ],
    seoTitle: "NAB Show Booth Builder Las Vegas | Custom & Rental Exhibits",
    seoDescription:
      "Booth design, fabrication, rental and I&D for NAB Show at the Las Vegas Convention Center. AV-ready demo booths, meeting rooms and full union-coordinated install.",
    keywords: [
      "NAB Show booth builder",
      "NAB booth rental Las Vegas",
      "NAB Show exhibit design",
      "broadcast trade show booth",
    ],
  },
  {
    slug: "sema-show",
    name: "SEMA Show",
    fullName: "SEMA Show (Specialty Equipment Market Association)",
    tagline: "Vehicle-ready custom booths for the automotive aftermarket show at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Automotive Aftermarket & Specialty Equipment",
    timing: "Annually, early November",
    scale: "~160,000 attendees · ~2,400 exhibitors",
    image: "/images/shows/sema-show.jpg",
    intro:
      "SEMA is one of the largest and most visually competitive shows in Las Vegas, packing the LVCC and outdoor lots with vehicles, builds and product reveals. Booths often need to display cars, run reveals and survive massive foot traffic.",
    challenges: [
      {
        title: "Vehicle display & floor loading",
        body: "Putting cars or heavy equipment in your booth means engineered flooring, ramps and turntables, plus careful coordination of vehicle spotting during move-in.",
      },
      {
        title: "Standing out in a sea of builds",
        body: "SEMA exhibitors go big. Lighting, elevation and reveal moments matter — a flat 10×20 disappears. We design for sightlines and theatrical product reveals.",
      },
      {
        title: "Early-November freight crunch",
        body: "SEMA's late-fall date competes with year-end shipping. We lock freight, drayage and labor early so your build lands and installs on time.",
      },
    ],
    boothAdvice:
      "Think elevation and lighting. Turntables, ramps, raised platforms and bold overhead signage make vehicles and products the hero. We engineer flooring for vehicle loads and design reveals that draw a crowd.",
    recommendedServices: [SVC.custom, SVC.id, SVC.graphics],
    faqs: [
      {
        q: "Can you build a SEMA booth that displays vehicles?",
        a: "Yes. We engineer reinforced flooring, ramps and turntables for vehicle and heavy-equipment display, and coordinate vehicle spotting during LVCC move-in.",
      },
      {
        q: "How do I make my SEMA booth stand out?",
        a: "Elevation, lighting and reveal moments. We use raised platforms, dramatic lighting and large hanging signage to win attention on SEMA's crowded floor.",
      },
    ],
    seoTitle: "SEMA Show Booth Builder Las Vegas | Custom Automotive Exhibits",
    seoDescription:
      "Custom SEMA Show booths at the Las Vegas Convention Center — vehicle-ready flooring, product reveals, lighting and full I&D. Local Las Vegas exhibit builder.",
    keywords: [
      "SEMA Show booth builder",
      "SEMA booth rental Las Vegas",
      "SEMA exhibit design",
      "automotive trade show booth",
    ],
  },
  {
    slug: "world-of-concrete",
    name: "World of Concrete",
    fullName: "World of Concrete",
    tagline: "Heavy-duty indoor & outdoor exhibits for the construction trades at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Construction & Concrete Trades",
    timing: "Annually, January–February",
    scale: "~50,000 attendees · ~1,400 exhibitors",
    image: "/images/shows/world-of-concrete.jpg",
    intro:
      "World of Concrete is the construction industry's first big show of the year, filling the LVCC's indoor halls and sprawling outdoor lots. Many exhibitors run live equipment demos, which makes booth engineering and logistics the difference between a smooth show and an expensive scramble.",
    challenges: [
      {
        title: "Indoor + outdoor exhibits",
        body: "Outdoor lot booths face weather, uneven ground and heavy-machinery loads. We build weather-tolerant structures and coordinate the heavier rigging and forklift needs.",
      },
      {
        title: "Live equipment demos",
        body: "Running machinery in or near your booth requires engineered platforms, clearances and safety planning, plus tight coordination with show services.",
      },
      {
        title: "Back-to-back with the January crunch",
        body: "World of Concrete lands right after the CES rush, keeping Vegas labor and freight in high demand. Booking early protects your crew and your timeline.",
      },
    ],
    boothAdvice:
      "Durability first. We build rugged structures that handle heavy products and outdoor conditions, with clear product zones and signage tall enough to read across big halls and lots.",
    recommendedServices: [SVC.custom, SVC.id, SVC.storage],
    faqs: [
      {
        q: "Do you build outdoor lot booths for World of Concrete?",
        a: "Yes. We design weather-tolerant outdoor exhibits engineered for heavy equipment, and coordinate the rigging, forklift and labor needs that outdoor space requires.",
      },
      {
        q: "Can my World of Concrete booth include live demos?",
        a: "We engineer platforms, clearances and safety planning for live equipment demos and coordinate them with LVCC show services.",
      },
    ],
    seoTitle: "World of Concrete Booth Builder Las Vegas | Custom Exhibits",
    seoDescription:
      "Rugged indoor and outdoor booths for World of Concrete at the Las Vegas Convention Center. Heavy-equipment-ready builds, live demo support and full I&D.",
    keywords: [
      "World of Concrete booth builder",
      "World of Concrete exhibit",
      "construction trade show booth Las Vegas",
    ],
  },
  {
    slug: "mjbizcon",
    name: "MJBizCon",
    fullName: "MJBizCon (Marijuana Business Conference & Expo)",
    tagline: "Standout custom & rental booths for the cannabis industry's biggest show at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Cannabis & Hemp Business",
    timing: "Annually, early December",
    nextEdition: "December 1–4, 2026",
    nextEditionISO: "2026-12-01",
    nextEditionEndISO: "2026-12-04",
    scale: "~30,000 attendees · ~1,400 exhibitors",
    image: "/images/shows/mjbizcon.jpg",
    intro:
      "MJBizCon is the cannabis industry's flagship B2B event, closing out the trade show year at the Las Vegas Convention Center each December. The floor is crowded and brand-driven, so design, lighting and finish quality carry real weight with buyers.",
    challenges: [
      {
        title: "Brand-first, design-driven floor",
        body: "Cannabis brands compete hard on look and feel. Premium finishes, custom lighting and Instagrammable moments separate the booths buyers remember from the ones they walk past.",
      },
      {
        title: "Year-end production & freight",
        body: "An early-December date means production and shipping collide with the holiday rush. We schedule fabrication early so your booth ships and installs without last-minute premiums.",
      },
      {
        title: "Fast-growing, first-time exhibitors",
        body: "Many MJBizCon exhibitors are scaling fast and exhibiting for the first time. We offer rental and modular options that look custom while protecting cash flow.",
      },
    ],
    boothAdvice:
      "Lean into brand. Backlit logos, custom counters, lounge seating and warm lighting create the premium feel cannabis buyers expect. Rentals and modular systems deliver that look without a full custom budget.",
    recommendedServices: [SVC.custom, SVC.rental, SVC.graphics],
    faqs: [
      {
        q: "When is MJBizCon and where is it held?",
        a: "MJBizCon is held annually in early December at the Las Vegas Convention Center. The next edition is December 1–4, 2026.",
      },
      {
        q: "Can you build a premium-looking MJBizCon booth on a budget?",
        a: "Yes. Our rental and modular systems use backlit graphics, custom counters and lighting to deliver a high-end brand look while keeping costs controlled.",
      },
    ],
    seoTitle: "MJBizCon Booth Builder Las Vegas | Cannabis Trade Show Exhibits",
    seoDescription:
      "Custom and rental booths for MJBizCon at the Las Vegas Convention Center. Premium, brand-driven cannabis exhibits with graphics, lighting and full I&D. Next: Dec 1–4, 2026.",
    keywords: [
      "MJBizCon booth builder",
      "MJBizCon booth rental",
      "cannabis trade show booth Las Vegas",
      "MJBizCon exhibit design",
    ],
  },
  {
    slug: "jck-las-vegas",
    name: "JCK Las Vegas",
    fullName: "JCK Las Vegas",
    tagline: "Secure, premium jewelry exhibits at the Venetian Expo.",
    venueSlug: "venetian-expo-sands",
    venueName: "Venetian Expo",
    industry: "Jewelry & Watches",
    timing: "Annually, late May / early June",
    scale: "~20,000 attendees · ~2,300 exhibitors",
    image: "/images/shows/jck-las-vegas.jpg",
    intro:
      "JCK Las Vegas is the leading jewelry and watch trade event in North America, held at the Venetian Expo each spring. Exhibits here are about luxury presentation and security — lighting, showcases and lockable storage are non-negotiable.",
    challenges: [
      {
        title: "Security & lockable storage",
        body: "High-value inventory means lockable showcases, secure back rooms and controlled access have to be designed in. We build booths that protect product without feeling like a vault.",
      },
      {
        title: "Jewelry lighting",
        body: "Stones and metal live or die by lighting. We specify showcase and accent lighting that makes product sparkle and renders color accurately.",
      },
      {
        title: "Venetian Expo logistics",
        body: "The Venetian Expo has its own docks, freight rules and labor requirements. We coordinate them so your premium build installs cleanly.",
      },
    ],
    boothAdvice:
      "Luxury and light. Custom showcases, refined materials, comfortable seating for negotiations and precision lighting create the high-end environment JCK buyers expect — with security built into every showcase and back room.",
    recommendedServices: [SVC.custom, SVC.graphics, SVC.id],
    faqs: [
      {
        q: "Can you build secure jewelry showcases for JCK?",
        a: "Yes. We design lockable showcases, secure back rooms and controlled-access layouts so high-value inventory stays protected throughout the show.",
      },
      {
        q: "Where is JCK Las Vegas held?",
        a: "JCK Las Vegas is held annually at the Venetian Expo, typically in late May or early June.",
      },
    ],
    seoTitle: "JCK Las Vegas Booth Builder | Jewelry Show Exhibits (Venetian Expo)",
    seoDescription:
      "Premium, secure jewelry booths for JCK Las Vegas at the Venetian Expo. Lockable showcases, jewelry lighting, custom design and full I&D from a local Vegas team.",
    keywords: [
      "JCK Las Vegas booth builder",
      "JCK booth rental",
      "jewelry trade show booth Las Vegas",
      "Venetian Expo booth",
    ],
  },
  {
    slug: "asd-market-week",
    name: "ASD Market Week",
    fullName: "ASD Market Week",
    tagline: "Cost-smart custom & rental booths for the retail merchandise show at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Consumer Goods & Retail Merchandise",
    timing: "Twice yearly — March & August",
    nextEdition: "August 25–27, 2026",
    nextEditionISO: "2026-08-25",
    nextEditionEndISO: "2026-08-27",
    scale: "~45,000 attendees · ~1,800 exhibitors",
    image: "/images/shows/asd-market-week.jpg",
    intro:
      "ASD Market Week is a high-volume wholesale and retail merchandise show that runs twice a year at the Las Vegas Convention Center. With thousands of product-driven booths, clear merchandising and reusable, cost-efficient builds win.",
    challenges: [
      {
        title: "Product merchandising at scale",
        body: "ASD is about showing lots of SKUs cleanly. We design flexible shelving, slatwall and display systems that hold product without looking cluttered.",
      },
      {
        title: "Two shows a year",
        body: "Exhibiting in both March and August? A modular or owned system you reconfigure each edition beats paying for a fresh build twice. We store it between shows.",
      },
      {
        title: "Value-driven budgets",
        body: "ASD exhibitors watch cost closely. Rental and modular systems deliver a professional look at a fraction of full custom pricing.",
      },
    ],
    boothAdvice:
      "Maximize product visibility per dollar. Modular shelving, backlit headers and clean graphics let buyers scan your range fast — and a reusable system pays for itself across ASD's two annual editions.",
    recommendedServices: [SVC.modular, SVC.rental, SVC.storage],
    faqs: [
      {
        q: "How often is ASD Market Week held?",
        a: "ASD Market Week runs twice a year at the Las Vegas Convention Center — typically in March and August. The next edition is August 25–27, 2026.",
      },
      {
        q: "What's the most cost-effective ASD booth option?",
        a: "Modular and rental systems. They deliver a professional, product-forward look at lower cost, and a modular system can be reconfigured and reused across both annual ASD shows.",
      },
    ],
    seoTitle: "ASD Market Week Booth Builder Las Vegas | Custom & Rental Booths",
    seoDescription:
      "Cost-smart modular and rental booths for ASD Market Week at the Las Vegas Convention Center. Product-forward merchandising, storage between shows and full I&D.",
    keywords: [
      "ASD Market Week booth builder",
      "ASD booth rental Las Vegas",
      "retail trade show booth",
      "ASD exhibit design",
    ],
  },
  {
    slug: "cosmoprof-north-america",
    name: "Cosmoprof North America",
    fullName: "Cosmoprof North America (CPNA)",
    tagline: "Premium beauty-brand exhibits at the Mandalay Bay Convention Center.",
    venueSlug: "mandalay-bay-convention-center",
    venueName: "Mandalay Bay Convention Center",
    industry: "Beauty & Personal Care",
    timing: "Annually, July",
    nextEdition: "July 13–15, 2026",
    nextEditionISO: "2026-07-13",
    nextEditionEndISO: "2026-07-15",
    scale: "~25,000 attendees · ~1,100 brands",
    image: "/images/shows/cosmoprof-north-america.jpg",
    intro:
      "Cosmoprof North America is the leading B2B beauty trade show in the Americas, held at the Mandalay Bay Convention Center each July. It's a design-forward, brand-driven floor where finish quality and shelf presentation matter enormously.",
    challenges: [
      {
        title: "Beauty-brand aesthetics",
        body: "CPNA buyers expect retail-grade presentation. Clean lines, premium materials, product walls and considered lighting are the baseline, not the extra.",
      },
      {
        title: "Mandalay Bay logistics",
        body: "Mandalay Bay Convention Center has its own labor, docks and show-services rules. We coordinate them so your premium booth installs without friction.",
      },
      {
        title: "Product display & sampling",
        body: "Beauty booths need product walls, demo counters and sampling stations designed for flow and restocking — we build those in from the start.",
      },
    ],
    boothAdvice:
      "Retail-grade and bright. Backlit product walls, clean custom counters, accent lighting and a cohesive brand palette create the premium feel beauty buyers expect at Cosmoprof.",
    recommendedServices: [SVC.custom, SVC.graphics, SVC.design],
    faqs: [
      {
        q: "Where is Cosmoprof North America held?",
        a: "Cosmoprof North America (CPNA) is held annually at the Mandalay Bay Convention Center in Las Vegas, typically in July. The next edition is July 13–15, 2026.",
      },
      {
        q: "Can you build a retail-quality beauty booth for CPNA?",
        a: "Yes. We design retail-grade exhibits with backlit product walls, custom counters, sampling stations and precision lighting to showcase beauty brands.",
      },
    ],
    seoTitle: "Cosmoprof North America Booth Builder | Beauty Show Exhibits Las Vegas",
    seoDescription:
      "Premium beauty-brand booths for Cosmoprof North America at the Mandalay Bay Convention Center. Retail-grade product walls, lighting, custom design and full I&D. Next: July 13–15, 2026.",
    keywords: [
      "Cosmoprof North America booth builder",
      "CPNA booth rental",
      "beauty trade show booth Las Vegas",
      "Mandalay Bay booth",
    ],
  },
  {
    slug: "g2e",
    name: "G2E",
    fullName: "G2E (Global Gaming Expo)",
    tagline: "High-impact gaming & casino-tech exhibits at the Venetian Expo.",
    venueSlug: "venetian-expo-sands",
    venueName: "Venetian Expo",
    industry: "Casino Gaming & Hospitality Technology",
    timing: "Annually, October",
    nextEdition: "September 30 – October 2, 2026",
    nextEditionISO: "2026-09-30",
    nextEditionEndISO: "2026-10-02",
    scale: "~25,000 attendees · ~600 exhibitors",
    image: "/images/shows/g2e.jpg",
    intro:
      "G2E (Global Gaming Expo) is the premier event for the casino gaming and hospitality-technology industry, held at the Venetian Expo each fall. Booths are large, tech-heavy and experience-driven, often featuring live game demos and private meeting suites.",
    challenges: [
      {
        title: "Heavy machines & power",
        body: "Slot machines, kiosks and gaming hardware mean serious floor loading, power and cabling. We engineer for the weight and pre-order the electrical your demos need.",
      },
      {
        title: "Private meeting & demo suites",
        body: "G2E is a deal-making show. Walled meeting rooms, demo suites and hospitality areas — often on a second deck — maximize selling space.",
      },
      {
        title: "Experience-driven design",
        body: "Gaming buyers expect spectacle. Large LED, immersive lighting and bold architecture make your technology the center of attention.",
      },
    ],
    boothAdvice:
      "Go big and build up. Double-deck structures add private meeting and hospitality space above a demo-packed ground floor, while large LED and dramatic lighting create the experience G2E is known for.",
    recommendedServices: [SVC.custom, SVC.doubleDeck, SVC.id],
    faqs: [
      {
        q: "Where and when is G2E held?",
        a: "G2E (Global Gaming Expo) is held annually at the Venetian Expo in Las Vegas, typically late September into early October. The next edition is September 30 – October 2, 2026.",
      },
      {
        q: "Can you build a double-deck booth with meeting rooms for G2E?",
        a: "Yes. Double-deck G2E exhibits are popular — they add private meeting suites and hospitality space above a demo-focused ground floor. We handle the engineering and permits.",
      },
    ],
    seoTitle: "G2E Booth Builder Las Vegas | Global Gaming Expo Exhibits",
    seoDescription:
      "Custom and double-deck booths for G2E (Global Gaming Expo) at the Venetian Expo. Demo-ready power, private meeting suites, large LED and full I&D. Next: Sep 30 – Oct 2, 2026.",
    keywords: [
      "G2E booth builder",
      "Global Gaming Expo booth",
      "G2E booth rental Las Vegas",
      "gaming trade show booth",
    ],
  },
  {
    slug: "imex-america",
    name: "IMEX America",
    fullName: "IMEX America",
    tagline: "Destination & hospitality exhibits for the meetings industry at Mandalay Bay.",
    venueSlug: "mandalay-bay-convention-center",
    venueName: "Mandalay Bay Convention Center",
    industry: "Meetings, Events & Business Travel",
    timing: "Annually, October",
    scale: "~15,000 attendees · ~3,000+ exhibiting companies",
    image: "/images/shows/imex-america.jpg",
    intro:
      "IMEX America is the largest trade show for the global meetings, events and incentive-travel industry, held at the Mandalay Bay Convention Center each fall. Exhibitors are destinations, hotels and venues — so booths are hospitality-forward, with lots of meeting space and brand storytelling.",
    challenges: [
      {
        title: "Hospitality & meeting space",
        body: "IMEX runs on pre-booked appointments. Your booth needs comfortable, semi-private meeting pods and hospitality areas designed for back-to-back conversations.",
      },
      {
        title: "Destination branding",
        body: "Selling a place means immersive branding — large-format graphics, lighting and finishes that evoke your destination. We translate that brand into a built environment.",
      },
      {
        title: "Mandalay Bay coordination",
        body: "We handle Mandalay Bay Convention Center labor, docks and show-services so your hospitality build is ready before the first appointment.",
      },
    ],
    boothAdvice:
      "Comfort and brand. Plenty of meeting seating, warm hospitality touches and large-format destination graphics create the welcoming, on-brand environment IMEX buyers respond to.",
    recommendedServices: [SVC.custom, SVC.graphics, SVC.id],
    faqs: [
      {
        q: "Where is IMEX America held?",
        a: "IMEX America is held annually at the Mandalay Bay Convention Center in Las Vegas, typically in October.",
      },
      {
        q: "Can you design a booth with lots of meeting space for IMEX?",
        a: "Yes. We design hospitality-forward IMEX booths with multiple meeting pods, seating and destination branding built for an appointment-driven show.",
      },
    ],
    seoTitle: "IMEX America Booth Builder Las Vegas | Meetings Industry Exhibits",
    seoDescription:
      "Hospitality-forward booths for IMEX America at the Mandalay Bay Convention Center. Meeting pods, destination branding, large-format graphics and full I&D.",
    keywords: [
      "IMEX America booth builder",
      "IMEX booth rental Las Vegas",
      "meetings industry trade show booth",
      "Mandalay Bay booth",
    ],
  },
  {
    slug: "las-vegas-market",
    name: "Las Vegas Market",
    fullName: "Las Vegas Market",
    tagline: "Showroom-style exhibits for the home furnishings & gift market at World Market Center.",
    venueSlug: "world-market-center",
    venueName: "World Market Center",
    industry: "Home Furnishings, Gift & Décor",
    timing: "Twice yearly — winter & summer",
    scale: "~50,000 attendees · thousands of showrooms & exhibitors",
    image: "/images/shows/las-vegas-market.jpg",
    intro:
      "Las Vegas Market is the West Coast's premier home furnishings, gift and décor marketplace, held at World Market Center twice a year. It blends permanent showrooms with temporary exhibits, so presentation has to match a retail-buyer audience.",
    challenges: [
      {
        title: "Showroom-quality presentation",
        body: "Buyers here shop like retailers. Temporary booths and showroom spaces need retail-grade staging, lighting and merchandising to compete with permanent showrooms.",
      },
      {
        title: "Twice-yearly cadence",
        body: "With winter and summer editions, a reusable, easily-reconfigured build and reliable between-show storage keep costs down across both markets.",
      },
      {
        title: "World Market Center logistics",
        body: "WMC has its own building layout, freight and labor specifics. We know the venue and coordinate move-in so your space is staged on time.",
      },
    ],
    boothAdvice:
      "Stage it like a store. Warm lighting, lifestyle vignettes and clean product merchandising help buyers picture your line in their stores — and a reusable system carries you through both annual markets.",
    recommendedServices: [SVC.custom, SVC.modular, SVC.storage],
    faqs: [
      {
        q: "How often is Las Vegas Market held?",
        a: "Las Vegas Market is held twice a year at World Market Center — a winter edition and a summer edition.",
      },
      {
        q: "Can you create a showroom-style space for Las Vegas Market?",
        a: "Yes. We build retail-grade, showroom-quality exhibits with lifestyle staging, lighting and merchandising, plus storage and reconfiguration between the winter and summer markets.",
      },
    ],
    seoTitle: "Las Vegas Market Booth Builder | Home Furnishings Exhibits (WMC)",
    seoDescription:
      "Showroom-quality booths for Las Vegas Market at World Market Center. Retail-grade staging, lighting, merchandising, between-show storage and full I&D.",
    keywords: [
      "Las Vegas Market booth builder",
      "World Market Center booth",
      "home furnishings trade show booth",
      "Las Vegas Market exhibit",
    ],
  },
  {
    slug: "isc-west",
    name: "ISC West",
    fullName: "ISC West (International Security Conference & Exposition)",
    tagline: "Demo-ready security & surveillance booths at the Venetian Expo.",
    venueSlug: "venetian-expo-sands",
    venueName: "Venetian Expo",
    industry: "Physical Security & Surveillance Technology",
    timing: "Annually, late March",
    scale: "~30,000 attendees · ~1,000 exhibitors",
    image: "/images/shows/isc-west.jpg",
    intro:
      "ISC West is the largest converged security event in the U.S., held at the Venetian Expo each spring. Exhibitors show cameras, access control and integrated systems, so booths need working demo walls, power and clear product zones.",
    challenges: [
      {
        title: "Live demo walls & power",
        body: "Security hardware has to run on the floor. We engineer demo walls, monitor arrays and the power and cabling they need so your systems show flawlessly.",
      },
      {
        title: "Integration storytelling",
        body: "Buyers want to see how products work together. We design booths that walk visitors through an integrated system, not just a wall of SKUs.",
      },
      {
        title: "Venetian Expo logistics",
        body: "We handle the Venetian Expo's docks, labor and show-services rules so your tech-heavy build installs on schedule.",
      },
    ],
    boothAdvice:
      "Make the technology the demo. Live camera and monitor walls, clear integration zones and strong overhead branding turn a security booth into a working showroom buyers remember.",
    recommendedServices: [SVC.custom, SVC.graphics, SVC.id],
    faqs: [
      {
        q: "Where is ISC West held?",
        a: "ISC West is held annually at the Venetian Expo in Las Vegas, typically in late March.",
      },
      {
        q: "Can you build live demo walls for ISC West?",
        a: "Yes. We engineer monitor and camera demo walls with the power and cable management your security systems need to run live on the floor.",
      },
    ],
    seoTitle: "ISC West Booth Builder Las Vegas | Security Show Exhibits",
    seoDescription:
      "Demo-ready booths for ISC West at the Venetian Expo. Live monitor and camera walls, integration zones, custom design and full I&D from a local Las Vegas team.",
    keywords: [
      "ISC West booth builder",
      "ISC West booth rental Las Vegas",
      "security trade show booth",
      "Venetian Expo booth",
    ],
  },
  {
    slug: "money2020",
    name: "Money20/20",
    fullName: "Money20/20 USA",
    tagline: "Polished fintech & payments exhibits at the Venetian Expo.",
    venueSlug: "venetian-expo-sands",
    venueName: "Venetian Expo",
    industry: "Fintech, Payments & Financial Services",
    timing: "Annually, October",
    nextEdition: "October 18–21, 2026",
    nextEditionISO: "2026-10-18",
    nextEditionEndISO: "2026-10-21",
    scale: "~13,000 attendees · ~450 exhibitors",
    image: "/images/shows/money2020.jpg",
    intro:
      "Money20/20 is the premier fintech event in the U.S., held at the Venetian Expo each fall. It's a relationship- and brand-driven floor where polished design and private meeting space matter more than raw square footage.",
    challenges: [
      {
        title: "Meeting-driven layouts",
        body: "Money20/20 runs on conversations. Booths need comfortable, semi-private meeting space and demo pods designed for back-to-back partner meetings.",
      },
      {
        title: "Premium brand finish",
        body: "Fintech brands compete on polish. Clean architecture, quality materials and sharp lighting signal credibility to enterprise buyers.",
      },
      {
        title: "Software demos",
        body: "Most products are software. We design screen and demo stations with the power, connectivity and sightlines to show your platform clearly.",
      },
    ],
    boothAdvice:
      "Prioritize meetings and polish. Semi-private pods, a clean premium aesthetic and well-placed demo screens make a Money20/20 booth work as a deal-making space, not just a billboard.",
    recommendedServices: [SVC.custom, SVC.design, SVC.graphics],
    faqs: [
      {
        q: "Where and when is Money20/20 USA held?",
        a: "Money20/20 USA is held annually at the Venetian Expo in Las Vegas, typically in October. The next edition is October 18–21, 2026.",
      },
      {
        q: "Can you design a fintech booth with private meeting space?",
        a: "Yes. We design polished Money20/20 booths with semi-private meeting pods, demo stations and premium finishes built for an appointment-driven show.",
      },
    ],
    seoTitle: "Money20/20 Booth Builder Las Vegas | Fintech Show Exhibits",
    seoDescription:
      "Premium fintech booths for Money20/20 USA at the Venetian Expo. Private meeting pods, software demo stations, polished design and full I&D. Next: Oct 18–21, 2026.",
    keywords: [
      "Money20/20 booth builder",
      "Money2020 booth rental Las Vegas",
      "fintech trade show booth",
      "Venetian Expo booth",
    ],
  },
  {
    slug: "wswa-access-live",
    name: "WSWA Access LIVE",
    fullName: "WSWA Access LIVE (Wine & Spirits Wholesalers of America)",
    tagline: "Tasting-ready beverage exhibits at Caesars Forum.",
    venueSlug: "caesars-forum",
    venueName: "Caesars Forum",
    industry: "Wine, Spirits & Beverage",
    timing: "Annually, late winter",
    scale: "~4,000 attendees · hundreds of exhibiting brands",
    image: "/images/shows/wswa-access-live.jpg",
    intro:
      "WSWA Access LIVE is the wine and spirits industry's premier event, bringing all three tiers of the beverage business together at Caesars Forum. Booths here are about brand storytelling and tasting experiences.",
    challenges: [
      {
        title: "Tasting & bar service",
        body: "Pouring on the floor means built-in bars, back-bar storage, sinks where allowed and proper counters. We design tasting stations that handle a crowd.",
      },
      {
        title: "Brand storytelling",
        body: "Spirits sell on story and packaging. Custom shelving, backlit bottle displays and on-brand finishes make your portfolio the hero.",
      },
      {
        title: "Caesars Forum logistics",
        body: "Caesars Forum is one of the newest Vegas venues. We coordinate its labor, docks and show-services so your build is staged and ready before doors open.",
      },
    ],
    boothAdvice:
      "Build around the pour. A welcoming bar, backlit bottle displays, comfortable tasting space and strong brand finishes turn a WSWA booth into a destination on the floor.",
    recommendedServices: [SVC.custom, SVC.graphics, SVC.id],
    faqs: [
      {
        q: "Where is WSWA Access LIVE held?",
        a: "WSWA Access LIVE is held at Caesars Forum in Las Vegas, typically in late winter. It's the premier annual event for the wine and spirits industry.",
      },
      {
        q: "Can you build a booth with a tasting bar for WSWA?",
        a: "Yes. We design beverage booths with built-in bars, back-bar storage, bottle displays and tasting counters built to serve a steady crowd.",
      },
    ],
    seoTitle: "WSWA Access LIVE Booth Builder Las Vegas | Wine & Spirits Exhibits",
    seoDescription:
      "Tasting-ready beverage booths for WSWA Access LIVE at Caesars Forum. Built-in bars, bottle displays, brand-forward design and full I&D from a local Vegas team.",
    keywords: [
      "WSWA booth builder",
      "WSWA Access LIVE booth",
      "wine and spirits trade show booth Las Vegas",
      "Caesars Forum booth",
    ],
  },
  {
    slug: "hd-expo",
    name: "HD Expo",
    fullName: "HD Expo + Conference (Hospitality Design)",
    tagline: "Material-rich hospitality design exhibits at Mandalay Bay.",
    venueSlug: "mandalay-bay-convention-center",
    venueName: "Mandalay Bay Convention Center",
    industry: "Hospitality & Interior Design",
    timing: "Annually, May",
    scale: "~10,000 attendees · ~900 exhibitors",
    image: "/images/shows/hd-expo.jpg",
    intro:
      "HD Expo + Conference is the leading trade show for the hospitality design industry, held at the Mandalay Bay Convention Center each spring. The audience is designers and architects, so finish quality, materials and craft are everything.",
    challenges: [
      {
        title: "Design-literate audience",
        body: "Your booth is judged by professional designers. Material honesty, clean detailing and considered lighting aren't optional — they're the message.",
      },
      {
        title: "Material & finish showcases",
        body: "Exhibitors show surfaces, textiles, fixtures and finishes. We build display systems that let buyers touch and compare materials in good light.",
      },
      {
        title: "Mandalay Bay logistics",
        body: "We coordinate Mandalay Bay Convention Center labor, docks and show-services so your design-forward build installs cleanly.",
      },
    ],
    boothAdvice:
      "Let craft do the talking. Honest materials, precise detailing, tactile product displays and gallery-quality lighting earn respect from the designer audience HD Expo draws.",
    recommendedServices: [SVC.custom, SVC.design, SVC.graphics],
    faqs: [
      {
        q: "Where is HD Expo held?",
        a: "HD Expo + Conference is held annually at the Mandalay Bay Convention Center in Las Vegas, typically in May.",
      },
      {
        q: "Can you build a high-finish booth for HD Expo's designer audience?",
        a: "Yes. We build design-forward exhibits with honest materials, precise detailing and gallery-quality lighting to showcase finishes and fixtures.",
      },
    ],
    seoTitle: "HD Expo Booth Builder Las Vegas | Hospitality Design Exhibits",
    seoDescription:
      "Material-rich booths for HD Expo + Conference at the Mandalay Bay Convention Center. Finish showcases, gallery lighting, custom design and full I&D.",
    keywords: [
      "HD Expo booth builder",
      "Hospitality Design Expo booth",
      "HD Expo booth rental Las Vegas",
      "Mandalay Bay booth",
    ],
  },
  {
    slug: "magic-las-vegas",
    name: "MAGIC Las Vegas",
    fullName: "MAGIC Las Vegas",
    tagline: "Retail-grade fashion & apparel exhibits at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Fashion, Apparel & Footwear",
    timing: "Twice yearly — February & August",
    nextEdition: "August 10–12, 2026",
    nextEditionISO: "2026-08-10",
    nextEditionEndISO: "2026-08-12",
    scale: "Tens of thousands of buyers · thousands of brands",
    image: "/images/shows/magic-las-vegas.jpg",
    intro:
      "MAGIC is the largest fashion trade event in the U.S., held at the Las Vegas Convention Center twice a year. It's a fast, visual, merchandising-driven floor where apparel and footwear brands compete on presentation.",
    challenges: [
      {
        title: "Apparel merchandising",
        body: "Showing a collection means garment racks, shelving and mannequin staging that read as retail. We design flexible systems that show range without clutter.",
      },
      {
        title: "Two shows a year",
        body: "Exhibiting in both February and August? A reusable, reconfigurable system plus between-show storage beats paying for two fresh builds.",
      },
      {
        title: "Visual brand impact",
        body: "MAGIC moves fast. Bold graphics, lighting and a strong brand moment stop buyers as they scan thousands of brands.",
      },
    ],
    boothAdvice:
      "Merchandise like a store and brand like a billboard. Retail-grade racks and staging show the collection, while bold lighting and graphics stop traffic — and a reusable system carries you across both annual editions.",
    recommendedServices: [SVC.custom, SVC.modular, SVC.storage],
    faqs: [
      {
        q: "How often is MAGIC Las Vegas held?",
        a: "MAGIC Las Vegas runs twice a year at the Las Vegas Convention Center — typically in February and August. The next edition is August 10–12, 2026.",
      },
      {
        q: "Can you build a retail-style fashion booth for MAGIC?",
        a: "Yes. We build retail-grade apparel and footwear booths with flexible racks, shelving, mannequin staging and bold brand graphics — reusable across both annual shows.",
      },
    ],
    seoTitle: "MAGIC Las Vegas Booth Builder | Fashion Trade Show Exhibits",
    seoDescription:
      "Retail-grade fashion booths for MAGIC Las Vegas at the Las Vegas Convention Center. Apparel merchandising, bold graphics, storage between shows and full I&D. Next: Aug 10–12, 2026.",
    keywords: [
      "MAGIC Las Vegas booth builder",
      "MAGIC booth rental",
      "fashion trade show booth Las Vegas",
      "apparel trade show booth",
    ],
  },
  {
    slug: "bar-and-restaurant-expo",
    name: "Bar & Restaurant Expo",
    fullName: "Bar & Restaurant Expo (formerly Nightclub & Bar Show)",
    tagline: "Experiential hospitality & beverage booths at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Bar, Nightlife & Restaurant",
    timing: "Annually, late March",
    scale: "~10,000 attendees · ~400 exhibitors",
    image: "/images/shows/bar-and-restaurant-expo.jpg",
    intro:
      "Bar & Restaurant Expo (the former Nightclub & Bar Show) is the hospitality industry's headline event at the Las Vegas Convention Center each spring. Booths lean experiential — sampling, bars and product demos draw the crowd.",
    challenges: [
      {
        title: "Sampling & bar service",
        body: "Pouring and serving on the floor needs built-in bars, counters and storage. We design service stations that keep lines moving.",
      },
      {
        title: "Experiential draw",
        body: "Operators want to taste and feel products. Demo counters, lounge moments and energetic lighting turn your booth into a destination.",
      },
      {
        title: "Spring move-in",
        body: "A late-March date shares the calendar with other big Vegas shows. We lock labor and freight early so your build lands on time.",
      },
    ],
    boothAdvice:
      "Create an experience. A working bar or sampling counter, comfortable lounge moments and bold lighting make a Bar & Restaurant Expo booth the spot operators gather — and remember.",
    recommendedServices: [SVC.custom, SVC.graphics, SVC.rental],
    faqs: [
      {
        q: "Where is Bar & Restaurant Expo held?",
        a: "Bar & Restaurant Expo (formerly the Nightclub & Bar Show) is held annually at the Las Vegas Convention Center, typically in late March.",
      },
      {
        q: "Can you build a booth with a working bar for sampling?",
        a: "Yes. We design hospitality booths with built-in bars, sampling counters, storage and lounge space to keep a steady crowd engaged.",
      },
    ],
    seoTitle: "Bar & Restaurant Expo Booth Builder Las Vegas | Hospitality Exhibits",
    seoDescription:
      "Experiential booths for Bar & Restaurant Expo (Nightclub & Bar Show) at the Las Vegas Convention Center. Working bars, sampling counters, bold design and full I&D.",
    keywords: [
      "Bar and Restaurant Expo booth builder",
      "Nightclub Bar Show booth",
      "hospitality trade show booth Las Vegas",
    ],
  },
  {
    slug: "black-hat-usa",
    name: "Black Hat USA",
    fullName: "Black Hat USA",
    tagline: "Demo-driven cybersecurity exhibits at Mandalay Bay.",
    venueSlug: "mandalay-bay-convention-center",
    venueName: "Mandalay Bay Convention Center",
    industry: "Cybersecurity & Information Security",
    timing: "Annually, early August",
    nextEdition: "August 1–6, 2026",
    nextEditionISO: "2026-08-01",
    nextEditionEndISO: "2026-08-06",
    scale: "~20,000 attendees · ~450 Business Hall exhibitors",
    image: "/images/shows/black-hat-usa.jpg",
    intro:
      "Black Hat USA is the world's leading information-security event, held at the Mandalay Bay Convention Center each August. The Business Hall is technical and demo-heavy, with a sharp, security-savvy audience.",
    challenges: [
      {
        title: "Live product demos",
        body: "Security buyers want to see tools run. We design demo stations and theater space with the power, screens and connectivity your platform needs.",
      },
      {
        title: "Meeting & briefing space",
        body: "Deals and briefings happen in-booth. Semi-private meeting areas — sometimes on a second deck — keep sensitive conversations focused.",
      },
      {
        title: "Mandalay Bay logistics",
        body: "We coordinate Mandalay Bay Convention Center labor, docks and show-services so your tech build installs without friction.",
      },
    ],
    boothAdvice:
      "Speak to a technical crowd. Clean demo stations, a small theater for talks and private briefing space — credibility and clarity beat flash with the Black Hat audience.",
    recommendedServices: [SVC.custom, SVC.doubleDeck, SVC.id],
    faqs: [
      {
        q: "Where and when is Black Hat USA held?",
        a: "Black Hat USA is held annually at the Mandalay Bay Convention Center in Las Vegas, in early August. The next edition runs August 1–6, 2026.",
      },
      {
        q: "Can you build a demo-focused cybersecurity booth for Black Hat?",
        a: "Yes. We design Black Hat Business Hall booths with live demo stations, theater space and private briefing areas, with the power and connectivity your tools need.",
      },
    ],
    seoTitle: "Black Hat USA Booth Builder Las Vegas | Cybersecurity Exhibits",
    seoDescription:
      "Demo-driven booths for Black Hat USA at the Mandalay Bay Convention Center. Live demo stations, briefing space, double-deck options and full I&D. Next: Aug 1–6, 2026.",
    keywords: [
      "Black Hat USA booth builder",
      "Black Hat booth rental Las Vegas",
      "cybersecurity trade show booth",
      "Mandalay Bay booth",
    ],
  },
  {
    slug: "conexpo-con-agg",
    name: "CONEXPO-CON/AGG",
    fullName: "CONEXPO-CON/AGG",
    tagline: "Heavy-duty construction & aggregate exhibits at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Construction, Aggregates & Heavy Equipment",
    timing: "Every three years, March",
    nextEdition: "March 13–17, 2029",
    nextEditionISO: "2029-03-13",
    nextEditionEndISO: "2029-03-17",
    scale: "~140,000 attendees · ~2,000 exhibitors",
    image: "/images/shows/conexpo-con-agg.jpg",
    intro:
      "CONEXPO-CON/AGG is North America's largest construction trade show, filling the LVCC's indoor halls and vast outdoor lots once every three years. It's a heavy-equipment show, so engineering and logistics dominate the build.",
    challenges: [
      {
        title: "Heavy machinery & floor loads",
        body: "Putting equipment in your space demands engineered flooring, ramps and careful machine spotting during move-in. We plan the structure around the load.",
      },
      {
        title: "Indoor + outdoor exhibits",
        body: "Outdoor lots mean weather, ground conditions and heavier rigging. We build weather-tolerant structures and coordinate the forklift and crane needs.",
      },
      {
        title: "Triennial scale",
        body: "CONEXPO only happens every three years, so booths go big and demand peaks. Booking early protects your crew, freight and timeline.",
      },
    ],
    boothAdvice:
      "Engineer for the iron. Reinforced flooring, smart equipment staging, tall readable signage and weather-ready outdoor structures make a CONEXPO booth work at the scale this show demands.",
    recommendedServices: [SVC.custom, SVC.id, SVC.storage],
    faqs: [
      {
        q: "When is the next CONEXPO-CON/AGG?",
        a: "CONEXPO-CON/AGG is held every three years at the Las Vegas Convention Center. The next edition is March 13–17, 2029.",
      },
      {
        q: "Can you build a booth that displays heavy equipment?",
        a: "Yes. We engineer reinforced flooring, ramps and staging for heavy machinery, and coordinate the rigging, forklift and outdoor-lot logistics CONEXPO requires.",
      },
    ],
    seoTitle: "CONEXPO-CON/AGG Booth Builder Las Vegas | Construction Exhibits",
    seoDescription:
      "Heavy-duty indoor and outdoor booths for CONEXPO-CON/AGG at the Las Vegas Convention Center. Equipment-ready flooring, outdoor structures and full I&D. Next: March 13–17, 2029.",
    keywords: [
      "CONEXPO booth builder",
      "CON/AGG exhibit Las Vegas",
      "construction trade show booth",
      "heavy equipment booth",
    ],
  },
  {
    slug: "pack-expo-las-vegas",
    name: "PACK EXPO Las Vegas",
    fullName: "PACK EXPO Las Vegas",
    tagline: "Machinery-ready packaging & processing booths at the LVCC.",
    venueSlug: "las-vegas-convention-center",
    venueName: "Las Vegas Convention Center",
    industry: "Packaging & Processing",
    timing: "Biennially (even years), fall",
    scale: "~30,000 attendees · ~2,000 exhibitors",
    image: "/images/shows/pack-expo-las-vegas.jpg",
    intro:
      "PACK EXPO Las Vegas is a leading packaging and processing trade show, held at the Las Vegas Convention Center in even years. Exhibitors run live machinery, so power, floor loading and demo planning drive the design.",
    challenges: [
      {
        title: "Running machinery",
        body: "Live packaging lines need engineered platforms, three-phase power, clearances and safety planning. We design the booth around the equipment.",
      },
      {
        title: "Floor loading & rigging",
        body: "Heavy machines mean serious floor loads and rigging. We coordinate the structure, power orders and machine placement with LVCC show services.",
      },
      {
        title: "Demonstration sightlines",
        body: "Buyers come to watch lines run. We design clear viewing zones and signage so attendees can follow your process from across the aisle.",
      },
    ],
    boothAdvice:
      "Build for the machines and the demo. Engineered platforms, pre-ordered power, open sightlines to running equipment and tall signage make a PACK EXPO booth a working demonstration buyers stop for.",
    recommendedServices: [SVC.custom, SVC.id, SVC.storage],
    faqs: [
      {
        q: "When is PACK EXPO Las Vegas held?",
        a: "PACK EXPO Las Vegas is held in even-numbered years at the Las Vegas Convention Center, typically in the fall.",
      },
      {
        q: "Can you support live machinery demos at PACK EXPO?",
        a: "Yes. We engineer platforms, three-phase power, clearances and safety planning for running packaging lines, and coordinate rigging and floor loading with LVCC show services.",
      },
    ],
    seoTitle: "PACK EXPO Las Vegas Booth Builder | Packaging Show Exhibits",
    seoDescription:
      "Machinery-ready booths for PACK EXPO Las Vegas at the Las Vegas Convention Center. Engineered platforms, power, live-demo sightlines and full I&D from a local Vegas team.",
    keywords: [
      "PACK EXPO booth builder",
      "PACK EXPO Las Vegas booth",
      "packaging trade show booth",
      "processing trade show booth Las Vegas",
    ],
  },
];

export function getShow(slug: string): Show | undefined {
  return shows.find((s) => s.slug === slug);
}

export function relatedShows(show: Show): Show[] {
  return shows.filter((s) => s.venueSlug === show.venueSlug && s.slug !== show.slug);
}
