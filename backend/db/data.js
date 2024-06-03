const { format } = require("date-fns");

const addCreatedDate = (arr) => {
  const startDate = new Date("January 1, 2024 00:00:00");
  for (let i = 0; i < arr.length; i++) {
    arr[i].createdAt = format(
      startDate.setDate(startDate.getDate() + 1),
      "MM/dd/yyyy"
    );
  }
  return arr;
};

const sampleData = [
  {
    groupData: [
      {
        name: "Stehr, Hudson and Macejkovic",
        roomCount: 28,
        revenue: "$142.42",
      },
      { name: "Ward, Kassulke and Huels", roomCount: 40, revenue: "$477.58" },
      { name: "Hagenes Group", roomCount: 18, revenue: "$473.54" },
      {
        name: "Kassulke, Little and Schultz",
        roomCount: 4,
        revenue: "$334.50",
      },
      { name: "Torphy and Sons", roomCount: 10, revenue: "$291.81" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Orbadiah",
        guestName: "Orbadiah Adrianello",
        reason: "Pre-emptive interactive Graphic Interface",
      },
      {
        authorizedBy: "Bambi",
        guestName: "Bambi Carah",
        reason: "Diverse bandwidth-monitored portal",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 74,
        details: "Adaptive tangible budgetary management",
      },
      {
        code: "C5",
        roomNumber: 19,
        details: "Synergized encompassing database",
      },
    ],
    revenueData: [
      { total: "$14560.01", group: "$175.06", company: "$1992.87" },
    ],
    roomData: [
      {
        total: 30,
        company: 3,
        outOfOrder: 2,
        stayOver: 24,
        arrivals: 15,
        departures: 58,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Erika",
        guestName: "Erika Evesque",
        reason: "Expanded foreground complexity",
      },
      {
        authorizedBy: "Briggs",
        guestName: "Briggs Vasilchikov",
        reason: "Focused exuding parallelism",
      },
      {
        authorizedBy: "Cassandra",
        guestName: "Cassandra Bonifazio",
        reason: "Compatible zero defect strategy",
      },
      {
        authorizedBy: "Raymund",
        guestName: "Raymund Luckham",
        reason: "Devolved upward-trending frame",
      },
      {
        authorizedBy: "Traci",
        guestName: "Traci Gerrietz",
        reason: "User-friendly analyzing conglomeration",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 43, details: "Extended hybrid function" },
      { code: "HK", roomNumber: 36, details: "Grass-roots analyzing frame" },
    ],
    revenueData: [
      { total: "$11629.78", group: "$478.34", company: "$1651.67" },
    ],
    roomData: [
      {
        total: 16,
        company: 2,
        outOfOrder: 3,
        stayOver: 9,
        arrivals: 55,
        departures: 22,
      },
    ],
  },
  {
    groupData: [
      { name: "Mayert Group", roomCount: 21, revenue: "$281.70" },
      { name: "Russel, Funk and Maggio", roomCount: 49, revenue: "$238.99" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Charlotta",
        guestName: "Charlotta Jeaffreson",
        reason: "Synchronised fault-tolerant project",
      },
      {
        authorizedBy: "Kaia",
        guestName: "Kaia Lochhead",
        reason: "Ameliorated radical pricing structure",
      },
      {
        authorizedBy: "Birgitta",
        guestName: "Birgitta Meneur",
        reason: "Reactive encompassing standardization",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 60, details: "Progressive analyzing frame" },
      {
        code: "C5",
        roomNumber: 93,
        details: "Optimized eco-centric flexibility",
      },
      {
        code: "C5",
        roomNumber: 67,
        details: "Multi-lateral directional Graphic Interface",
      },
    ],
    revenueData: [
      { total: "$12489.12", group: "$640.69", company: "$2542.88" },
    ],
    roomData: [
      {
        total: 75,
        company: 9,
        outOfOrder: 4,
        stayOver: 37,
        arrivals: 14,
        departures: 22,
      },
    ],
  },
  {
    groupData: [
      { name: "Ernser, Gerlach and Hamill", roomCount: 35, revenue: "$359.71" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Arney",
        guestName: "Arney Simmins",
        reason: "Devolved 3rd generation complexity",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$11143.97", group: "$1766.48", company: "$2550.01" },
    ],
    roomData: [
      {
        total: 72,
        company: 9,
        outOfOrder: 6,
        stayOver: 25,
        arrivals: 58,
        departures: 44,
      },
    ],
  },
  {
    groupData: [
      { name: "Dickens-Kuhic", roomCount: 39, revenue: "$452.20" },
      { name: "Stokes-Lakin", roomCount: 13, revenue: "$312.73" },
      {
        name: "Zboncak, Lehner and Schiller",
        roomCount: 24,
        revenue: "$427.84",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Melany",
        guestName: "Melany Tither",
        reason: "Synchronised clear-thinking success",
      },
      {
        authorizedBy: "Ertha",
        guestName: "Ertha Swoffer",
        reason: "Open-architected multimedia internet solution",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 96, details: "Assimilated 24/7 middleware" },
      {
        code: "C5",
        roomNumber: 62,
        details: "Innovative eco-centric knowledge base",
      },
      {
        code: "C5",
        roomNumber: 73,
        details: "Compatible optimal orchestration",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "Customer-focused disintermediate encoding",
      },
      { code: "HK", roomNumber: 12, details: "Robust local product" },
    ],
    revenueData: [
      { total: "$13252.18", group: "$161.53", company: "$1417.42" },
    ],
    roomData: [
      {
        total: 79,
        company: 4,
        outOfOrder: 9,
        stayOver: 4,
        arrivals: 39,
        departures: 73,
      },
    ],
  },
  {
    groupData: [
      { name: "Jerde-Bernhard", roomCount: 49, revenue: "$143.68" },
      {
        name: "Lehner, Goyette and Pollich",
        roomCount: 26,
        revenue: "$228.14",
      },
      { name: "Mante and Sons", roomCount: 1, revenue: "$324.03" },
      { name: "Connelly, Smith and Osinski", roomCount: 2, revenue: "$198.71" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Rollie",
        guestName: "Rollie Howett",
        reason: "Centralized disintermediate implementation",
      },
      {
        authorizedBy: "Clayton",
        guestName: "Clayton Doggett",
        reason: "Vision-oriented didactic standardization",
      },
      {
        authorizedBy: "Rodolphe",
        guestName: "Rodolphe Longmuir",
        reason: "Seamless multi-tasking focus group",
      },
      {
        authorizedBy: "Lennie",
        guestName: "Lennie Callear",
        reason: "Up-sized asymmetric installation",
      },
      {
        authorizedBy: "Eadie",
        guestName: "Eadie Riggott",
        reason: "Customizable analyzing concept",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 31,
        details: "Optimized client-driven middleware",
      },
      { code: "HK", roomNumber: 41, details: "Switchable empowering forecast" },
      { code: "HK", roomNumber: 57, details: "Phased hybrid database" },
      {
        code: "C5",
        roomNumber: 48,
        details: "Decentralized executive collaboration",
      },
    ],
    revenueData: [
      { total: "$15993.41", group: "$1186.39", company: "$1004.43" },
    ],
    roomData: [
      {
        total: 57,
        company: 7,
        outOfOrder: 3,
        stayOver: 3,
        arrivals: 76,
        departures: 18,
      },
    ],
  },
  {
    groupData: [
      { name: "Hand, Schimmel and Fadel", roomCount: 30, revenue: "$394.92" },
      {
        name: "Fisher, Lebsack and Christiansen",
        roomCount: 5,
        revenue: "$294.11",
      },
      { name: "Hayes, O'Keefe and Casper", roomCount: 34, revenue: "$437.88" },
      { name: "Gutkowski Inc", roomCount: 7, revenue: "$394.32" },
      { name: "Rosenbaum-Predovic", roomCount: 3, revenue: "$443.87" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Magdaia",
        guestName: "Magdaia Craze",
        reason: "Enterprise-wide hybrid success",
      },
      {
        authorizedBy: "Worthy",
        guestName: "Worthy Horry",
        reason: "Persistent 3rd generation core",
      },
      {
        authorizedBy: "Perrine",
        guestName: "Perrine Boult",
        reason: "Mandatory neutral groupware",
      },
      {
        authorizedBy: "Garrard",
        guestName: "Garrard Speddin",
        reason: "Intuitive secondary secured line",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 27,
        details: "Inverse logistical customer loyalty",
      },
      { code: "HK", roomNumber: 32, details: "Seamless tertiary capability" },
      {
        code: "C5",
        roomNumber: 86,
        details: "Re-contextualized hybrid matrices",
      },
      {
        code: "C5",
        roomNumber: 3,
        details: "Stand-alone maximized orchestration",
      },
      {
        code: "HK",
        roomNumber: 93,
        details: "Ameliorated exuding artificial intelligence",
      },
    ],
    revenueData: [
      { total: "$16140.28", group: "$1643.50", company: "$999.77" },
    ],
    roomData: [
      {
        total: 88,
        company: 5,
        outOfOrder: 8,
        stayOver: 13,
        arrivals: 48,
        departures: 88,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Shannah",
        guestName: "Shannah Rowter",
        reason: "Ameliorated exuding definition",
      },
      {
        authorizedBy: "Pablo",
        guestName: "Pablo Winley",
        reason: "Multi-channelled web-enabled analyzer",
      },
      {
        authorizedBy: "Beret",
        guestName: "Beret Feldhammer",
        reason: "Front-line mobile challenge",
      },
      {
        authorizedBy: "Mathew",
        guestName: "Mathew Jarville",
        reason: "Down-sized mission-critical methodology",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$9326.75", group: "$634.31", company: "$822.75" }],
    roomData: [
      {
        total: 93,
        company: 4,
        outOfOrder: 0,
        stayOver: 15,
        arrivals: 47,
        departures: 45,
      },
    ],
  },
  {
    groupData: [
      { name: "Jast, Champlin and Wolff", roomCount: 28, revenue: "$295.08" },
      { name: "Price, Barton and Cole", roomCount: 35, revenue: "$141.52" },
      { name: "Hammes-Nader", roomCount: 29, revenue: "$348.29" },
      { name: "Rippin Inc", roomCount: 10, revenue: "$366.04" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Allyce",
        guestName: "Allyce Vallis",
        reason: "Programmable directional parallelism",
      },
      {
        authorizedBy: "Vanny",
        guestName: "Vanny Archanbault",
        reason: "Stand-alone bottom-line groupware",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$11825.41", group: "$1355.51", company: "$2629.22" },
    ],
    roomData: [
      {
        total: 83,
        company: 1,
        outOfOrder: 8,
        stayOver: 9,
        arrivals: 51,
        departures: 71,
      },
    ],
  },
  {
    groupData: [
      { name: "Mills LLC", roomCount: 43, revenue: "$299.35" },
      {
        name: "McDermott, Koss and Homenick",
        roomCount: 16,
        revenue: "$171.21",
      },
      { name: "Nolan Inc", roomCount: 5, revenue: "$460.24" },
      { name: "Mayer-Stehr", roomCount: 4, revenue: "$159.20" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Maible",
        guestName: "Maible Carden",
        reason: "Operative multimedia hub",
      },
      {
        authorizedBy: "Felipa",
        guestName: "Felipa Llewelyn",
        reason: "Organic discrete service-desk",
      },
      {
        authorizedBy: "Dallas",
        guestName: "Dallas Bentick",
        reason: "Mandatory empowering moratorium",
      },
      {
        authorizedBy: "Stephani",
        guestName: "Stephani Morris",
        reason: "Intuitive tertiary forecast",
      },
      {
        authorizedBy: "Faber",
        guestName: "Faber Weild",
        reason: "Devolved non-volatile task-force",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 32,
        details: "De-engineered optimizing open architecture",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "Decentralized tertiary data-warehouse",
      },
      {
        code: "HK",
        roomNumber: 22,
        details: "Total 4th generation monitoring",
      },
    ],
    revenueData: [
      { total: "$6203.88", group: "$1877.00", company: "$1305.49" },
    ],
    roomData: [
      {
        total: 25,
        company: 10,
        outOfOrder: 3,
        stayOver: 28,
        arrivals: 27,
        departures: 30,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Arnoldo",
        guestName: "Arnoldo Lepick",
        reason: "Fully-configurable modular analyzer",
      },
      {
        authorizedBy: "Zia",
        guestName: "Zia Boncoeur",
        reason: "Operative impactful synergy",
      },
      {
        authorizedBy: "Carolin",
        guestName: "Carolin Wilds",
        reason: "Automated stable system engine",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 51,
        details: "Face to face uniform utilisation",
      },
      {
        code: "HK",
        roomNumber: 16,
        details: "Mandatory clear-thinking success",
      },
      {
        code: "C5",
        roomNumber: 67,
        details: "Versatile methodical time-frame",
      },
    ],
    revenueData: [
      { total: "$13599.26", group: "$770.32", company: "$1262.89" },
    ],
    roomData: [
      {
        total: 85,
        company: 0,
        outOfOrder: 9,
        stayOver: 10,
        arrivals: 11,
        departures: 50,
      },
    ],
  },
  {
    groupData: [
      { name: "Dare-Bruen", roomCount: 42, revenue: "$271.23" },
      { name: "Cole Group", roomCount: 41, revenue: "$315.77" },
      { name: "Langosh, Waelchi and Smith", roomCount: 47, revenue: "$476.71" },
      { name: "Metz-Denesik", roomCount: 28, revenue: "$266.17" },
      { name: "Macejkovic and Sons", roomCount: 31, revenue: "$460.54" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Xymenes",
        guestName: "Xymenes Darbyshire",
        reason: "Diverse motivating support",
      },
      {
        authorizedBy: "Kipp",
        guestName: "Kipp Cawkill",
        reason: "Balanced demand-driven pricing structure",
      },
      {
        authorizedBy: "Briano",
        guestName: "Briano Manterfield",
        reason: "Synergized hybrid policy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 72,
        details: "Open-architected foreground approach",
      },
      { code: "C5", roomNumber: 18, details: "User-friendly exuding product" },
      { code: "C5", roomNumber: 21, details: "Organized radical installation" },
      {
        code: "HK",
        roomNumber: 70,
        details: "Business-focused foreground knowledge base",
      },
    ],
    revenueData: [{ total: "$5216.35", group: "$538.57", company: "$459.60" }],
    roomData: [
      {
        total: 19,
        company: 0,
        outOfOrder: 6,
        stayOver: 8,
        arrivals: 89,
        departures: 27,
      },
    ],
  },
  {
    groupData: [
      { name: "Heller, Cole and Hintz", roomCount: 6, revenue: "$226.64" },
      { name: "Roberts-Bosco", roomCount: 26, revenue: "$292.89" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Meghan",
        guestName: "Meghan Palfery",
        reason: "Total secondary conglomeration",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "Polarised multimedia internet solution",
      },
      { code: "C5", roomNumber: 83, details: "Horizontal explicit policy" },
      {
        code: "C5",
        roomNumber: 44,
        details: "Horizontal upward-trending standardization",
      },
      { code: "HK", roomNumber: 66, details: "Diverse intangible throughput" },
      {
        code: "C5",
        roomNumber: 44,
        details: "Enhanced mission-critical model",
      },
    ],
    revenueData: [
      { total: "$16625.63", group: "$1449.83", company: "$674.60" },
    ],
    roomData: [
      {
        total: 26,
        company: 4,
        outOfOrder: 1,
        stayOver: 30,
        arrivals: 38,
        departures: 27,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Tarrance",
        guestName: "Tarrance Ruckman",
        reason: "Optimized dynamic adapter",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "Team-oriented object-oriented ability",
      },
      {
        code: "C5",
        roomNumber: 87,
        details: "Open-architected local groupware",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "Phased tertiary open architecture",
      },
    ],
    revenueData: [{ total: "$9782.63", group: "$1145.17", company: "$476.66" }],
    roomData: [
      {
        total: 71,
        company: 8,
        outOfOrder: 4,
        stayOver: 9,
        arrivals: 81,
        departures: 66,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Elysee",
        guestName: "Elysee Adcocks",
        reason: "Pre-emptive 24 hour task-force",
      },
      {
        authorizedBy: "Horatio",
        guestName: "Horatio Shephard",
        reason: "Innovative empowering budgetary management",
      },
      {
        authorizedBy: "Sherill",
        guestName: "Sherill Devanney",
        reason: "Centralized multi-tasking policy",
      },
      {
        authorizedBy: "Benita",
        guestName: "Benita Ludye",
        reason: "Implemented mobile utilisation",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$5000.97", group: "$151.82", company: "$1951.85" }],
    roomData: [
      {
        total: 81,
        company: 4,
        outOfOrder: 4,
        stayOver: 32,
        arrivals: 65,
        departures: 23,
      },
    ],
  },
  {
    groupData: [
      { name: "Rogahn, Paucek and Rolfson", roomCount: 31, revenue: "$280.96" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Devland",
        guestName: "Devland Gosforth",
        reason: "Customizable high-level internet solution",
      },
      {
        authorizedBy: "Nickola",
        guestName: "Nickola Wotton",
        reason: "Persevering object-oriented service-desk",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$8920.24", group: "$1083.36", company: "$1002.00" },
    ],
    roomData: [
      {
        total: 93,
        company: 8,
        outOfOrder: 7,
        stayOver: 47,
        arrivals: 13,
        departures: 6,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Ania",
        guestName: "Ania Stud",
        reason: "Cross-platform context-sensitive Graphic Interface",
      },
      {
        authorizedBy: "Melosa",
        guestName: "Melosa Bayfield",
        reason: "Ameliorated multi-tasking structure",
      },
      {
        authorizedBy: "Lia",
        guestName: "Lia Bayldon",
        reason: "Compatible zero defect standardization",
      },
      {
        authorizedBy: "L;urette",
        guestName: "L;urette Blenkhorn",
        reason: "Profit-focused homogeneous focus group",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 60,
        details: "Open-architected actuating support",
      },
      {
        code: "C5",
        roomNumber: 85,
        details: "Quality-focused stable software",
      },
      { code: "HK", roomNumber: 6, details: "Grass-roots national interface" },
      {
        code: "HK",
        roomNumber: 74,
        details: "Re-contextualized demand-driven pricing structure",
      },
      {
        code: "C5",
        roomNumber: 47,
        details: "Decentralized scalable function",
      },
    ],
    revenueData: [
      { total: "$18814.48", group: "$1892.12", company: "$1339.70" },
    ],
    roomData: [
      {
        total: 6,
        company: 5,
        outOfOrder: 2,
        stayOver: 33,
        arrivals: 1,
        departures: 17,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Friesen, Hegmann and Corwin",
        roomCount: 10,
        revenue: "$159.55",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Willi",
        guestName: "Willi Batho",
        reason: "Extended zero administration data-warehouse",
      },
      {
        authorizedBy: "Hyacinthe",
        guestName: "Hyacinthe Pirnie",
        reason: "Fundamental user-facing projection",
      },
      {
        authorizedBy: "Marie",
        guestName: "Marie Oluwatoyin",
        reason: "Programmable high-level moratorium",
      },
      {
        authorizedBy: "Frayda",
        guestName: "Frayda Bossel",
        reason: "Total upward-trending forecast",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 97, details: "Open-source scalable circuit" },
      {
        code: "C5",
        roomNumber: 97,
        details: "Versatile client-driven focus group",
      },
      { code: "C5", roomNumber: 1, details: "Cloned even-keeled website" },
      {
        code: "C5",
        roomNumber: 28,
        details: "Self-enabling 4th generation middleware",
      },
      { code: "HK", roomNumber: 57, details: "Secured neutral leverage" },
    ],
    revenueData: [
      { total: "$13795.06", group: "$1344.18", company: "$912.88" },
    ],
    roomData: [
      {
        total: 87,
        company: 4,
        outOfOrder: 5,
        stayOver: 18,
        arrivals: 37,
        departures: 50,
      },
    ],
  },
  {
    groupData: [
      { name: "Windler-Wisoky", roomCount: 35, revenue: "$397.74" },
      { name: "Sawayn-Murray", roomCount: 4, revenue: "$313.18" },
      { name: "Greenholt Group", roomCount: 48, revenue: "$252.09" },
      { name: "Boehm-Mraz", roomCount: 15, revenue: "$384.18" },
      { name: "Bernhard-Beahan", roomCount: 0, revenue: "$205.54" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Wells",
        guestName: "Wells Setterthwait",
        reason: "Phased background definition",
      },
      {
        authorizedBy: "Arvy",
        guestName: "Arvy Fitzsymon",
        reason: "Mandatory eco-centric implementation",
      },
      {
        authorizedBy: "Jeralee",
        guestName: "Jeralee Rawlinson",
        reason: "Advanced reciprocal ability",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 74,
        details: "User-centric homogeneous pricing structure",
      },
    ],
    revenueData: [
      { total: "$14124.16", group: "$1275.07", company: "$366.33" },
    ],
    roomData: [
      {
        total: 50,
        company: 5,
        outOfOrder: 9,
        stayOver: 38,
        arrivals: 6,
        departures: 17,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Bernhard, Kunze and Schmitt",
        roomCount: 49,
        revenue: "$252.54",
      },
      { name: "Emard and Sons", roomCount: 3, revenue: "$489.57" },
      { name: "Harvey-Veum", roomCount: 38, revenue: "$261.75" },
      { name: "Rodriguez-Pacocha", roomCount: 18, revenue: "$104.80" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Heriberto",
        guestName: "Heriberto Diggle",
        reason: "Implemented holistic time-frame",
      },
      {
        authorizedBy: "Jsandye",
        guestName: "Jsandye Mayhew",
        reason: "Ergonomic uniform synergy",
      },
      {
        authorizedBy: "Rosalie",
        guestName: "Rosalie Demschke",
        reason: "Expanded reciprocal customer loyalty",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 45,
        details: "Sharable full-range installation",
      },
    ],
    revenueData: [
      { total: "$15570.86", group: "$1832.35", company: "$104.79" },
    ],
    roomData: [
      {
        total: 24,
        company: 6,
        outOfOrder: 1,
        stayOver: 34,
        arrivals: 29,
        departures: 47,
      },
    ],
  },
  {
    groupData: [
      { name: "Ondricka Inc", roomCount: 22, revenue: "$197.59" },
      { name: "Corwin, Frami and Kovacek", roomCount: 33, revenue: "$279.85" },
      { name: "Blanda and Sons", roomCount: 34, revenue: "$480.57" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Tasha",
        guestName: "Tasha Maclaine",
        reason: "Stand-alone human-resource application",
      },
      {
        authorizedBy: "Christopher",
        guestName: "Christopher Twoohy",
        reason: "Operative bottom-line success",
      },
      {
        authorizedBy: "Cleve",
        guestName: "Cleve Osboldstone",
        reason: "Robust system-worthy architecture",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 91,
        details: "Function-based even-keeled alliance",
      },
      {
        code: "HK",
        roomNumber: 24,
        details: "Distributed methodical algorithm",
      },
      { code: "HK", roomNumber: 16, details: "Persistent holistic encoding" },
    ],
    revenueData: [
      { total: "$18840.62", group: "$1441.36", company: "$2424.63" },
    ],
    roomData: [
      {
        total: 54,
        company: 2,
        outOfOrder: 9,
        stayOver: 21,
        arrivals: 67,
        departures: 52,
      },
    ],
  },
  {
    groupData: [
      {
        name: "O'Reilly, Turner and Murazik",
        roomCount: 29,
        revenue: "$454.18",
      },
      { name: "Runte, Wuckert and Skiles", roomCount: 41, revenue: "$298.86" },
      {
        name: "Kautzer, Schamberger and Ferry",
        roomCount: 12,
        revenue: "$166.47",
      },
      { name: "Walter, Windler and Mayert", roomCount: 6, revenue: "$214.78" },
      { name: "Moore-Grimes", roomCount: 3, revenue: "$391.48" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Gale",
        guestName: "Gale Hairsnape",
        reason: "Intuitive methodical migration",
      },
      {
        authorizedBy: "Humfried",
        guestName: "Humfried Chetham",
        reason: "Reactive incremental interface",
      },
      {
        authorizedBy: "Barnebas",
        guestName: "Barnebas Kingswood",
        reason: "Down-sized logistical open architecture",
      },
      {
        authorizedBy: "Mathilda",
        guestName: "Mathilda Hovert",
        reason: "Profit-focused 5th generation moderator",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$10569.03", group: "$1872.61", company: "$2380.62" },
    ],
    roomData: [
      {
        total: 48,
        company: 9,
        outOfOrder: 5,
        stayOver: 0,
        arrivals: 33,
        departures: 52,
      },
    ],
  },
  {
    groupData: [
      { name: "Stokes, Torphy and Stamm", roomCount: 30, revenue: "$421.25" },
      { name: "Kling Group", roomCount: 4, revenue: "$440.89" },
      { name: "Hauck Group", roomCount: 5, revenue: "$390.08" },
      { name: "Jacobs, Abernathy and Lind", roomCount: 21, revenue: "$397.20" },
      { name: "Davis and Sons", roomCount: 4, revenue: "$154.45" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Griswold",
        guestName: "Griswold Attwoull",
        reason: "Stand-alone logistical open system",
      },
      {
        authorizedBy: "Corey",
        guestName: "Corey Ludwikiewicz",
        reason: "Realigned client-driven archive",
      },
      {
        authorizedBy: "Ambrose",
        guestName: "Ambrose Clemensen",
        reason: "Proactive systematic strategy",
      },
      {
        authorizedBy: "Marc",
        guestName: "Marc Beggi",
        reason: "Switchable dedicated utilisation",
      },
      {
        authorizedBy: "Constantino",
        guestName: "Constantino Dirand",
        reason: "Persistent analyzing complexity",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 2,
        details: "Customer-focused dynamic hardware",
      },
      {
        code: "C5",
        roomNumber: 38,
        details: "Fundamental foreground software",
      },
      {
        code: "C5",
        roomNumber: 45,
        details: "Public-key uniform service-desk",
      },
      {
        code: "HK",
        roomNumber: 23,
        details: "Centralized intangible collaboration",
      },
      {
        code: "C5",
        roomNumber: 91,
        details: "Innovative system-worthy productivity",
      },
    ],
    revenueData: [
      { total: "$11534.10", group: "$1601.48", company: "$1094.94" },
    ],
    roomData: [
      {
        total: 43,
        company: 9,
        outOfOrder: 8,
        stayOver: 1,
        arrivals: 39,
        departures: 47,
      },
    ],
  },
  {
    groupData: [{ name: "Mante and Sons", roomCount: 15, revenue: "$331.90" }],
    compRoomInfo: [
      {
        authorizedBy: "Rachel",
        guestName: "Rachel Yallop",
        reason: "Open-source discrete throughput",
      },
      {
        authorizedBy: "Madalena",
        guestName: "Madalena Vallerine",
        reason: "Distributed human-resource access",
      },
      {
        authorizedBy: "Maye",
        guestName: "Maye Andreas",
        reason: "Streamlined heuristic moderator",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "Networked next generation utilisation",
      },
      { code: "C5", roomNumber: 73, details: "Integrated impactful emulation" },
      {
        code: "HK",
        roomNumber: 76,
        details: "Open-architected radical hierarchy",
      },
      {
        code: "HK",
        roomNumber: 39,
        details: "Phased upward-trending pricing structure",
      },
    ],
    revenueData: [
      { total: "$13399.30", group: "$1899.79", company: "$1715.03" },
    ],
    roomData: [
      {
        total: 77,
        company: 9,
        outOfOrder: 8,
        stayOver: 29,
        arrivals: 8,
        departures: 57,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Homenick, Lemke and Friesen",
        roomCount: 10,
        revenue: "$456.45",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Leela",
        guestName: "Leela Broxholme",
        reason: "Assimilated user-facing matrices",
      },
      {
        authorizedBy: "Celestyna",
        guestName: "Celestyna Ronisch",
        reason: "Centralized mobile productivity",
      },
      {
        authorizedBy: "Noak",
        guestName: "Noak Helliwell",
        reason: "Reduced encompassing portal",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 38, details: "Universal non-volatile hub" },
      { code: "C5", roomNumber: 45, details: "Profit-focused systemic hub" },
      { code: "C5", roomNumber: 87, details: "Ergonomic explicit benchmark" },
    ],
    revenueData: [{ total: "$12691.08", group: "$279.77", company: "$196.72" }],
    roomData: [
      {
        total: 63,
        company: 1,
        outOfOrder: 6,
        stayOver: 35,
        arrivals: 43,
        departures: 42,
      },
    ],
  },
  {
    groupData: [
      { name: "Corkery Inc", roomCount: 24, revenue: "$293.75" },
      {
        name: "Champlin, Halvorson and Abbott",
        roomCount: 40,
        revenue: "$201.58",
      },
      { name: "Steuber and Sons", roomCount: 8, revenue: "$166.62" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Kitti",
        guestName: "Kitti Jedrych",
        reason: "Universal foreground architecture",
      },
      {
        authorizedBy: "Osgood",
        guestName: "Osgood Drayson",
        reason: "Polarised motivating adapter",
      },
      {
        authorizedBy: "Sibelle",
        guestName: "Sibelle Nowaczyk",
        reason: "Multi-tiered next generation Graphic Interface",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$5276.31", group: "$1178.91", company: "$1600.16" },
    ],
    roomData: [
      {
        total: 82,
        company: 9,
        outOfOrder: 9,
        stayOver: 45,
        arrivals: 27,
        departures: 0,
      },
    ],
  },
  {
    groupData: [{ name: "Wuckert-Homenick", roomCount: 4, revenue: "$340.68" }],
    compRoomInfo: [
      {
        authorizedBy: "Dru",
        guestName: "Dru Mayston",
        reason: "Re-contextualized reciprocal software",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 11, details: "Phased national function" },
      { code: "HK", roomNumber: 81, details: "Digitized radical array" },
      {
        code: "HK",
        roomNumber: 36,
        details: "Persevering client-server groupware",
      },
      { code: "C5", roomNumber: 100, details: "Optimized heuristic success" },
    ],
    revenueData: [
      { total: "$14090.52", group: "$182.07", company: "$1917.79" },
    ],
    roomData: [
      {
        total: 38,
        company: 7,
        outOfOrder: 1,
        stayOver: 49,
        arrivals: 28,
        departures: 92,
      },
    ],
  },
  {
    groupData: [{ name: "Boyer Inc", roomCount: 46, revenue: "$386.92" }],
    compRoomInfo: [
      {
        authorizedBy: "Darrick",
        guestName: "Darrick Dyson",
        reason: "Vision-oriented zero defect groupware",
      },
      {
        authorizedBy: "Claybourne",
        guestName: "Claybourne Daldan",
        reason: "Enterprise-wide human-resource Graphical User Interface",
      },
      {
        authorizedBy: "Alexine",
        guestName: "Alexine Arrington",
        reason: "Reduced coherent superstructure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 89,
        details: "Ameliorated system-worthy service-desk",
      },
      { code: "HK", roomNumber: 52, details: "Operative clear-thinking frame" },
      { code: "C5", roomNumber: 48, details: "Extended empowering neural-net" },
      {
        code: "C5",
        roomNumber: 33,
        details: "Configurable zero administration productivity",
      },
    ],
    revenueData: [{ total: "$7428.36", group: "$940.26", company: "$2415.22" }],
    roomData: [
      {
        total: 8,
        company: 1,
        outOfOrder: 8,
        stayOver: 17,
        arrivals: 2,
        departures: 96,
      },
    ],
  },
  {
    groupData: [
      { name: "Monahan-Nienow", roomCount: 37, revenue: "$400.20" },
      { name: "Murray Inc", roomCount: 33, revenue: "$324.65" },
      {
        name: "Crona, O'Conner and Ondricka",
        roomCount: 12,
        revenue: "$453.14",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Miner",
        guestName: "Miner Sang",
        reason: "Down-sized interactive hierarchy",
      },
      {
        authorizedBy: "Spike",
        guestName: "Spike Costerd",
        reason: "Open-architected tertiary website",
      },
      {
        authorizedBy: "Jarrid",
        guestName: "Jarrid Butting",
        reason: "Upgradable well-modulated focus group",
      },
      {
        authorizedBy: "Lewiss",
        guestName: "Lewiss Aidler",
        reason: "Polarised asynchronous Graphical User Interface",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$19026.04", group: "$1354.88", company: "$1021.07" },
    ],
    roomData: [
      {
        total: 34,
        company: 9,
        outOfOrder: 2,
        stayOver: 39,
        arrivals: 92,
        departures: 60,
      },
    ],
  },
  {
    groupData: [
      { name: "Baumbach Group", roomCount: 23, revenue: "$117.65" },
      {
        name: "Schaefer, Stiedemann and Lockman",
        roomCount: 8,
        revenue: "$497.02",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Costa",
        guestName: "Costa Antao",
        reason: "Inverse empowering superstructure",
      },
      {
        authorizedBy: "Dodie",
        guestName: "Dodie Brearty",
        reason: "Ergonomic encompassing website",
      },
      {
        authorizedBy: "Lin",
        guestName: "Lin Sollime",
        reason: "Quality-focused analyzing capability",
      },
      {
        authorizedBy: "Mona",
        guestName: "Mona Wedon",
        reason: "Pre-emptive hybrid extranet",
      },
      {
        authorizedBy: "Salmon",
        guestName: "Salmon Rowlin",
        reason: "Mandatory asynchronous leverage",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 75,
        details: "Integrated contextually-based database",
      },
      { code: "C5", roomNumber: 28, details: "Reactive dedicated task-force" },
      {
        code: "C5",
        roomNumber: 0,
        details: "Stand-alone even-keeled application",
      },
    ],
    revenueData: [{ total: "$11953.64", group: "$582.18", company: "$510.29" }],
    roomData: [
      {
        total: 43,
        company: 10,
        outOfOrder: 0,
        stayOver: 37,
        arrivals: 81,
        departures: 80,
      },
    ],
  },
  {
    groupData: [
      { name: "Robel, Waelchi and Murphy", roomCount: 50, revenue: "$177.19" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Beatrice",
        guestName: "Beatrice Goodchild",
        reason: "Balanced mission-critical middleware",
      },
      {
        authorizedBy: "Leonerd",
        guestName: "Leonerd Arundell",
        reason: "Ameliorated multimedia analyzer",
      },
      {
        authorizedBy: "Clair",
        guestName: "Clair Harbron",
        reason: "Reactive mobile contingency",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$19980.71", group: "$820.97", company: "$2445.29" },
    ],
    roomData: [
      {
        total: 94,
        company: 6,
        outOfOrder: 8,
        stayOver: 4,
        arrivals: 72,
        departures: 60,
      },
    ],
  },
  {
    groupData: [
      { name: "Wehner and Sons", roomCount: 20, revenue: "$148.90" },
      { name: "Mills, Kunze and Gislason", roomCount: 35, revenue: "$445.87" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Andrea",
        guestName: "Andrea Terrans",
        reason: "Fundamental bifurcated leverage",
      },
      {
        authorizedBy: "Armando",
        guestName: "Armando Ablitt",
        reason: "Persistent multimedia local area network",
      },
      {
        authorizedBy: "Claudell",
        guestName: "Claudell Ackermann",
        reason: "Streamlined contextually-based leverage",
      },
      {
        authorizedBy: "Sergeant",
        guestName: "Sergeant McIllrick",
        reason: "Reverse-engineered zero tolerance approach",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 97,
        details: "Multi-lateral uniform methodology",
      },
      {
        code: "C5",
        roomNumber: 71,
        details: "Face to face even-keeled infrastructure",
      },
      {
        code: "C5",
        roomNumber: 57,
        details: "Stand-alone radical budgetary management",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "Customizable next generation algorithm",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "Optimized 24/7 artificial intelligence",
      },
    ],
    revenueData: [
      { total: "$10235.85", group: "$124.85", company: "$1641.26" },
    ],
    roomData: [
      {
        total: 7,
        company: 2,
        outOfOrder: 7,
        stayOver: 44,
        arrivals: 8,
        departures: 57,
      },
    ],
  },
  {
    groupData: [
      { name: "Ziemann-Keeling", roomCount: 18, revenue: "$271.20" },
      {
        name: "Bergstrom, Rolfson and Stamm",
        roomCount: 43,
        revenue: "$340.29",
      },
      { name: "Hills-Lindgren", roomCount: 30, revenue: "$293.83" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Barbey",
        guestName: "Barbey Mintram",
        reason: "Open-source methodical success",
      },
      {
        authorizedBy: "Antony",
        guestName: "Antony Toyer",
        reason: "Down-sized multi-tasking matrix",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 71, details: "Monitored modular capability" },
    ],
    revenueData: [
      { total: "$19028.48", group: "$566.25", company: "$2608.91" },
    ],
    roomData: [
      {
        total: 48,
        company: 1,
        outOfOrder: 10,
        stayOver: 39,
        arrivals: 3,
        departures: 15,
      },
    ],
  },
  {
    groupData: [
      {
        name: "VonRueden, Haag and Cartwright",
        roomCount: 31,
        revenue: "$123.00",
      },
      { name: "Jacobson-Boehm", roomCount: 32, revenue: "$134.96" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dallas",
        guestName: "Dallas Lantaph",
        reason: "Sharable asynchronous info-mediaries",
      },
      {
        authorizedBy: "Petronilla",
        guestName: "Petronilla Tonnesen",
        reason: "Multi-lateral demand-driven protocol",
      },
      {
        authorizedBy: "Lonni",
        guestName: "Lonni Convery",
        reason: "Proactive static alliance",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 79, details: "Organic impactful moderator" },
      {
        code: "C5",
        roomNumber: 5,
        details: "Up-sized solution-oriented Graphical User Interface",
      },
      {
        code: "HK",
        roomNumber: 23,
        details: "Reverse-engineered national instruction set",
      },
      { code: "C5", roomNumber: 45, details: "Optimized exuding software" },
      { code: "C5", roomNumber: 84, details: "Inverse multi-state software" },
    ],
    revenueData: [
      { total: "$19209.94", group: "$921.39", company: "$1158.38" },
    ],
    roomData: [
      {
        total: 45,
        company: 2,
        outOfOrder: 5,
        stayOver: 16,
        arrivals: 35,
        departures: 33,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Ingunna",
        guestName: "Ingunna Jentgens",
        reason: "User-centric even-keeled installation",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 30,
        details: "Customer-focused disintermediate help-desk",
      },
      { code: "HK", roomNumber: 20, details: "Mandatory impactful throughput" },
      {
        code: "C5",
        roomNumber: 14,
        details: "User-centric 4th generation monitoring",
      },
      {
        code: "C5",
        roomNumber: 19,
        details: "Monitored cohesive knowledge base",
      },
    ],
    revenueData: [
      { total: "$12598.70", group: "$1908.86", company: "$543.56" },
    ],
    roomData: [
      {
        total: 22,
        company: 10,
        outOfOrder: 8,
        stayOver: 14,
        arrivals: 80,
        departures: 94,
      },
    ],
  },
  {
    groupData: [
      { name: "Bode-Kirlin", roomCount: 6, revenue: "$435.15" },
      { name: "Bosco, Watsica and Block", roomCount: 48, revenue: "$361.53" },
      { name: "Funk and Sons", roomCount: 32, revenue: "$319.25" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Paulina",
        guestName: "Paulina Ganforthe",
        reason: "Horizontal scalable approach",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$16104.53", group: "$1761.09", company: "$2751.98" },
    ],
    roomData: [
      {
        total: 12,
        company: 0,
        outOfOrder: 4,
        stayOver: 38,
        arrivals: 34,
        departures: 31,
      },
    ],
  },
  {
    groupData: [
      { name: "Conroy, Mosciski and Klein", roomCount: 48, revenue: "$284.39" },
      { name: "Considine Group", roomCount: 43, revenue: "$116.72" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Robbin",
        guestName: "Robbin Whitehead",
        reason: "Customizable demand-driven solution",
      },
      {
        authorizedBy: "Ely",
        guestName: "Ely Scrivener",
        reason: "Compatible dynamic infrastructure",
      },
      {
        authorizedBy: "Sterne",
        guestName: "Sterne Whaley",
        reason: "Ergonomic asynchronous open architecture",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 52,
        details: "Organized impactful knowledge user",
      },
    ],
    revenueData: [
      { total: "$16999.25", group: "$597.17", company: "$2238.85" },
    ],
    roomData: [
      {
        total: 81,
        company: 6,
        outOfOrder: 3,
        stayOver: 14,
        arrivals: 18,
        departures: 45,
      },
    ],
  },
  {
    groupData: [
      { name: "Wintheiser-Medhurst", roomCount: 24, revenue: "$318.29" },
      { name: "Herzog and Sons", roomCount: 21, revenue: "$480.37" },
      {
        name: "Gislason, Monahan and Bruen",
        roomCount: 21,
        revenue: "$419.27",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Carmine",
        guestName: "Carmine Flancinbaum",
        reason: "Switchable asymmetric challenge",
      },
      {
        authorizedBy: "Genovera",
        guestName: "Genovera Gatrell",
        reason: "Inverse stable internet solution",
      },
      {
        authorizedBy: "Georgeanne",
        guestName: "Georgeanne Whitington",
        reason: "Multi-channelled neutral framework",
      },
      {
        authorizedBy: "Olivero",
        guestName: "Olivero Osband",
        reason: "Implemented discrete analyzer",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 10, details: "Total background intranet" },
    ],
    revenueData: [
      { total: "$15221.32", group: "$1790.85", company: "$2676.09" },
    ],
    roomData: [
      {
        total: 88,
        company: 1,
        outOfOrder: 4,
        stayOver: 18,
        arrivals: 20,
        departures: 40,
      },
    ],
  },
  {
    groupData: [{ name: "Doyle Inc", roomCount: 14, revenue: "$426.52" }],
    compRoomInfo: [
      {
        authorizedBy: "Rosetta",
        guestName: "Rosetta Hasling",
        reason: "Integrated disintermediate synergy",
      },
      {
        authorizedBy: "Gawain",
        guestName: "Gawain Sauvage",
        reason: "Streamlined homogeneous help-desk",
      },
      {
        authorizedBy: "Nancey",
        guestName: "Nancey Chastagnier",
        reason: "Decentralized background extranet",
      },
      {
        authorizedBy: "Garnette",
        guestName: "Garnette Pellamont",
        reason: "Robust dedicated infrastructure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "Ameliorated systematic flexibility",
      },
    ],
    revenueData: [
      { total: "$10344.20", group: "$708.51", company: "$1821.99" },
    ],
    roomData: [
      {
        total: 7,
        company: 8,
        outOfOrder: 9,
        stayOver: 16,
        arrivals: 52,
        departures: 41,
      },
    ],
  },
  {
    groupData: [
      { name: "Hudson, Beer and Koss", roomCount: 11, revenue: "$490.77" },
      { name: "Sauer Group", roomCount: 30, revenue: "$273.35" },
      { name: "Hudson Inc", roomCount: 30, revenue: "$483.99" },
      { name: "Lockman-Mraz", roomCount: 23, revenue: "$200.80" },
      { name: "Jerde-Pouros", roomCount: 36, revenue: "$388.92" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Rachel",
        guestName: "Rachel Brewitt",
        reason: "Synchronised empowering installation",
      },
      {
        authorizedBy: "Caldwell",
        guestName: "Caldwell Shevlin",
        reason: "Re-engineered clear-thinking internet solution",
      },
      {
        authorizedBy: "Demetria",
        guestName: "Demetria Balaisot",
        reason: "Polarised interactive database",
      },
      {
        authorizedBy: "Ulla",
        guestName: "Ulla Turk",
        reason: "Realigned user-facing contingency",
      },
      {
        authorizedBy: "Barthel",
        guestName: "Barthel Waistell",
        reason: "Cross-group radical benchmark",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 100,
        details: "Synchronised well-modulated software",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "Adaptive fault-tolerant knowledge base",
      },
      {
        code: "C5",
        roomNumber: 32,
        details: "Inverse object-oriented open architecture",
      },
      {
        code: "C5",
        roomNumber: 92,
        details: "Focused motivating architecture",
      },
      { code: "HK", roomNumber: 48, details: "Phased logistical hierarchy" },
    ],
    revenueData: [
      { total: "$12767.92", group: "$1442.77", company: "$2459.03" },
    ],
    roomData: [
      {
        total: 66,
        company: 7,
        outOfOrder: 9,
        stayOver: 47,
        arrivals: 14,
        departures: 4,
      },
    ],
  },
  {
    groupData: [
      { name: "Mann Inc", roomCount: 20, revenue: "$408.41" },
      { name: "Hickle-Sauer", roomCount: 24, revenue: "$282.28" },
      { name: "Stark, Rice and Jenkins", roomCount: 32, revenue: "$156.39" },
      { name: "Tromp-Collier", roomCount: 33, revenue: "$462.45" },
      { name: "O'Conner, Lowe and Bernier", roomCount: 49, revenue: "$149.35" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Nettle",
        guestName: "Nettle Jukes",
        reason: "Right-sized 5th generation matrices",
      },
      {
        authorizedBy: "Georgette",
        guestName: "Georgette Milne",
        reason: "Function-based system-worthy open architecture",
      },
      {
        authorizedBy: "Pate",
        guestName: "Pate Cowe",
        reason: "Mandatory didactic superstructure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 90,
        details: "Customer-focused fault-tolerant intranet",
      },
    ],
    revenueData: [
      { total: "$16821.90", group: "$1866.51", company: "$630.32" },
    ],
    roomData: [
      {
        total: 81,
        company: 8,
        outOfOrder: 7,
        stayOver: 15,
        arrivals: 60,
        departures: 9,
      },
    ],
  },
  {
    groupData: [
      { name: "Wisozk-Koss", roomCount: 1, revenue: "$440.15" },
      { name: "Durgan and Sons", roomCount: 40, revenue: "$156.27" },
      { name: "Deckow, Zboncak and Hyatt", roomCount: 47, revenue: "$278.45" },
      { name: "Prosacco, Feeney and Kuhic", roomCount: 4, revenue: "$468.06" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Marcelia",
        guestName: "Marcelia Wraggs",
        reason: "Total maximized function",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 99,
        details: "Automated client-driven protocol",
      },
      { code: "C5", roomNumber: 2, details: "Synchronised even-keeled core" },
      {
        code: "C5",
        roomNumber: 70,
        details: "Enterprise-wide composite superstructure",
      },
      {
        code: "HK",
        roomNumber: 90,
        details: "Optimized motivating open system",
      },
      {
        code: "C5",
        roomNumber: 90,
        details: "Triple-buffered client-server customer loyalty",
      },
    ],
    revenueData: [
      { total: "$13805.07", group: "$1779.16", company: "$104.91" },
    ],
    roomData: [
      {
        total: 46,
        company: 8,
        outOfOrder: 6,
        stayOver: 3,
        arrivals: 12,
        departures: 61,
      },
    ],
  },
  {
    groupData: [
      { name: "Veum and Sons", roomCount: 19, revenue: "$289.69" },
      { name: "Runolfsdottir-Kautzer", roomCount: 14, revenue: "$435.55" },
      {
        name: "Roberts, Jacobson and Fritsch",
        roomCount: 37,
        revenue: "$377.41",
      },
      { name: "Deckow Group", roomCount: 2, revenue: "$386.20" },
      {
        name: "Torphy, Bechtelar and Stamm",
        roomCount: 17,
        revenue: "$473.40",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Elka",
        guestName: "Elka Reveley",
        reason: "Operative context-sensitive system engine",
      },
      {
        authorizedBy: "Malena",
        guestName: "Malena McUre",
        reason: "Ameliorated dedicated product",
      },
      {
        authorizedBy: "Gusti",
        guestName: "Gusti Robiou",
        reason: "Automated high-level frame",
      },
      {
        authorizedBy: "Sonnie",
        guestName: "Sonnie Bernath",
        reason: "Pre-emptive high-level middleware",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "Public-key 3rd generation pricing structure",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "Innovative interactive projection",
      },
      {
        code: "HK",
        roomNumber: 83,
        details: "User-centric clear-thinking architecture",
      },
    ],
    revenueData: [
      { total: "$5617.94", group: "$1630.07", company: "$2699.51" },
    ],
    roomData: [
      {
        total: 73,
        company: 8,
        outOfOrder: 5,
        stayOver: 0,
        arrivals: 90,
        departures: 23,
      },
    ],
  },
  {
    groupData: [
      { name: "Huels Group", roomCount: 0, revenue: "$209.15" },
      { name: "Kuvalis Inc", roomCount: 47, revenue: "$302.86" },
      { name: "Prosacco and Sons", roomCount: 16, revenue: "$342.71" },
      { name: "Moore, Champlin and Wyman", roomCount: 41, revenue: "$391.49" },
      { name: "Wolf-Fisher", roomCount: 10, revenue: "$130.27" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Chip",
        guestName: "Chip Krelle",
        reason: "Total exuding time-frame",
      },
      {
        authorizedBy: "Vernice",
        guestName: "Vernice Losbie",
        reason: "Compatible homogeneous function",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$15284.90", group: "$1624.91", company: "$1097.34" },
    ],
    roomData: [
      {
        total: 50,
        company: 10,
        outOfOrder: 8,
        stayOver: 37,
        arrivals: 30,
        departures: 4,
      },
    ],
  },
  {
    groupData: [
      { name: "McClure-Casper", roomCount: 11, revenue: "$460.04" },
      {
        name: "Aufderhar, Auer and Keeling",
        roomCount: 39,
        revenue: "$304.77",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Tamra",
        guestName: "Tamra Dougher",
        reason: "Customizable actuating service-desk",
      },
      {
        authorizedBy: "Moyra",
        guestName: "Moyra Kennelly",
        reason: "Mandatory methodical array",
      },
      {
        authorizedBy: "Cinderella",
        guestName: "Cinderella Minucci",
        reason: "Robust uniform encryption",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 96,
        details: "Universal 4th generation concept",
      },
      {
        code: "C5",
        roomNumber: 62,
        details: "Decentralized demand-driven architecture",
      },
    ],
    revenueData: [
      { total: "$19472.45", group: "$655.21", company: "$1196.20" },
    ],
    roomData: [
      {
        total: 30,
        company: 9,
        outOfOrder: 1,
        stayOver: 48,
        arrivals: 100,
        departures: 76,
      },
    ],
  },
  {
    groupData: [
      { name: "Corkery, Lowe and Weber", roomCount: 8, revenue: "$154.38" },
      {
        name: "Reynolds, Lueilwitz and Howe",
        roomCount: 30,
        revenue: "$386.96",
      },
      { name: "Marquardt LLC", roomCount: 1, revenue: "$238.49" },
      { name: "Bradtke-Kassulke", roomCount: 33, revenue: "$234.43" },
      { name: "Doyle-Bernier", roomCount: 42, revenue: "$442.88" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jenn",
        guestName: "Jenn Arendt",
        reason: "Down-sized 5th generation framework",
      },
      {
        authorizedBy: "Torry",
        guestName: "Torry Gosland",
        reason: "Monitored analyzing moderator",
      },
      {
        authorizedBy: "Felice",
        guestName: "Felice Stoacley",
        reason: "Digitized cohesive Graphic Interface",
      },
      {
        authorizedBy: "Bink",
        guestName: "Bink Camilli",
        reason: "Multi-layered multimedia capability",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 91,
        details: "Open-architected maximized model",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "Innovative even-keeled utilisation",
      },
      {
        code: "HK",
        roomNumber: 100,
        details: "Down-sized methodical middleware",
      },
      { code: "HK", roomNumber: 5, details: "Centralized even-keeled website" },
    ],
    revenueData: [{ total: "$8557.02", group: "$718.51", company: "$668.55" }],
    roomData: [
      {
        total: 41,
        company: 2,
        outOfOrder: 0,
        stayOver: 47,
        arrivals: 15,
        departures: 20,
      },
    ],
  },
  {
    groupData: [
      { name: "Herzog Inc", roomCount: 11, revenue: "$100.40" },
      { name: "Bruen Group", roomCount: 24, revenue: "$232.25" },
      { name: "Cummings-Boyle", roomCount: 41, revenue: "$391.84" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Danita",
        guestName: "Danita Camings",
        reason: "Programmable client-server adapter",
      },
      {
        authorizedBy: "Marney",
        guestName: "Marney Ambroise",
        reason: "Robust zero defect parallelism",
      },
      {
        authorizedBy: "Shara",
        guestName: "Shara Wolvey",
        reason: "Cross-platform asynchronous matrix",
      },
      {
        authorizedBy: "Ellynn",
        guestName: "Ellynn Swayton",
        reason: "Advanced systemic local area network",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 80,
        details: "Organic contextually-based toolset",
      },
    ],
    revenueData: [
      { total: "$19116.77", group: "$1276.82", company: "$623.87" },
    ],
    roomData: [
      {
        total: 91,
        company: 6,
        outOfOrder: 4,
        stayOver: 50,
        arrivals: 93,
        departures: 95,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Mattie",
        guestName: "Mattie Sommerscales",
        reason: "Networked solution-oriented middleware",
      },
      {
        authorizedBy: "Adam",
        guestName: "Adam Maunder",
        reason: "Realigned leading edge knowledge user",
      },
      {
        authorizedBy: "Lorette",
        guestName: "Lorette Valett",
        reason: "Multi-tiered user-facing core",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 51,
        details: "Enhanced contextually-based solution",
      },
      {
        code: "HK",
        roomNumber: 58,
        details: "Enhanced zero tolerance hierarchy",
      },
      {
        code: "HK",
        roomNumber: 86,
        details: "Integrated coherent secured line",
      },
    ],
    revenueData: [
      { total: "$19543.92", group: "$658.80", company: "$1025.31" },
    ],
    roomData: [
      {
        total: 100,
        company: 10,
        outOfOrder: 6,
        stayOver: 33,
        arrivals: 34,
        departures: 45,
      },
    ],
  },
  {
    groupData: [
      { name: "Nikolaus, Boyer and Hackett", roomCount: 8, revenue: "$311.54" },
      { name: "Kassulke, Bayer and Bode", roomCount: 1, revenue: "$357.48" },
      { name: "Hoeger, MacGyver and Terry", roomCount: 28, revenue: "$422.48" },
      {
        name: "Hermiston, VonRueden and Steuber",
        roomCount: 30,
        revenue: "$479.93",
      },
      { name: "Franecki Inc", roomCount: 36, revenue: "$403.50" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Franny",
        guestName: "Franny Brockbank",
        reason: "Networked reciprocal knowledge base",
      },
      {
        authorizedBy: "Tiertza",
        guestName: "Tiertza MacCardle",
        reason: "Optimized methodical challenge",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 2, details: "Cloned intermediate model" },
      { code: "C5", roomNumber: 52, details: "Organic background task-force" },
      { code: "C5", roomNumber: 83, details: "Polarised incremental approach" },
      {
        code: "C5",
        roomNumber: 80,
        details: "Digitized interactive knowledge user",
      },
    ],
    revenueData: [
      { total: "$19819.47", group: "$1113.55", company: "$490.67" },
    ],
    roomData: [
      {
        total: 86,
        company: 6,
        outOfOrder: 5,
        stayOver: 11,
        arrivals: 43,
        departures: 99,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Williamson, Stroman and Heller",
        roomCount: 4,
        revenue: "$413.01",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Bart",
        guestName: "Bart Mabe",
        reason: "Grass-roots fault-tolerant strategy",
      },
      {
        authorizedBy: "Caterina",
        guestName: "Caterina Harback",
        reason: "Assimilated bandwidth-monitored moratorium",
      },
      {
        authorizedBy: "Marrilee",
        guestName: "Marrilee Rowlin",
        reason: "Exclusive real-time data-warehouse",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 83,
        details: "User-friendly neutral data-warehouse",
      },
      { code: "C5", roomNumber: 20, details: "Phased cohesive product" },
      {
        code: "HK",
        roomNumber: 80,
        details: "Multi-lateral fault-tolerant flexibility",
      },
    ],
    revenueData: [
      { total: "$18606.60", group: "$1350.50", company: "$2595.82" },
    ],
    roomData: [
      {
        total: 92,
        company: 5,
        outOfOrder: 0,
        stayOver: 15,
        arrivals: 82,
        departures: 21,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Dela",
        guestName: "Dela Freckingham",
        reason: "Function-based exuding attitude",
      },
      {
        authorizedBy: "Abigale",
        guestName: "Abigale Candlin",
        reason: "Multi-channelled client-server firmware",
      },
      {
        authorizedBy: "Carry",
        guestName: "Carry Papierz",
        reason: "Persevering disintermediate parallelism",
      },
      {
        authorizedBy: "Cherry",
        guestName: "Cherry Kerin",
        reason: "Robust fresh-thinking Graphic Interface",
      },
      {
        authorizedBy: "Isabeau",
        guestName: "Isabeau McEvilly",
        reason: "Seamless context-sensitive database",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 59, details: "Diverse national protocol" },
      {
        code: "C5",
        roomNumber: 42,
        details: "Enterprise-wide contextually-based forecast",
      },
      {
        code: "HK",
        roomNumber: 86,
        details: "Centralized high-level neural-net",
      },
    ],
    revenueData: [
      { total: "$10603.96", group: "$1050.24", company: "$1151.36" },
    ],
    roomData: [
      {
        total: 84,
        company: 6,
        outOfOrder: 7,
        stayOver: 12,
        arrivals: 92,
        departures: 42,
      },
    ],
  },
  {
    groupData: [
      { name: "Hansen, Ullrich and Swift", roomCount: 17, revenue: "$288.85" },
      {
        name: "Pfannerstill, Ortiz and Mitchell",
        roomCount: 16,
        revenue: "$436.10",
      },
      { name: "Kutch Group", roomCount: 32, revenue: "$447.09" },
      {
        name: "Konopelski, Effertz and Bayer",
        roomCount: 27,
        revenue: "$334.39",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Quent",
        guestName: "Quent Elsmor",
        reason: "User-friendly heuristic productivity",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$16884.12", group: "$104.85", company: "$1769.43" },
    ],
    roomData: [
      {
        total: 8,
        company: 0,
        outOfOrder: 8,
        stayOver: 44,
        arrivals: 100,
        departures: 45,
      },
    ],
  },
  {
    groupData: [
      {
        name: "O'Reilly, Barrows and Ullrich",
        roomCount: 47,
        revenue: "$451.81",
      },
      {
        name: "Nitzsche, Williamson and Cummerata",
        roomCount: 45,
        revenue: "$145.32",
      },
      { name: "Abbott, Gorczany and Block", roomCount: 20, revenue: "$413.75" },
      { name: "White, Spinka and Hoeger", roomCount: 42, revenue: "$238.68" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Valentino",
        guestName: "Valentino Hunte",
        reason: "Fundamental reciprocal open architecture",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 10, details: "Profound client-server circuit" },
      {
        code: "HK",
        roomNumber: 100,
        details: "Open-source leading edge moratorium",
      },
    ],
    revenueData: [{ total: "$9318.76", group: "$614.10", company: "$2933.57" }],
    roomData: [
      {
        total: 12,
        company: 4,
        outOfOrder: 5,
        stayOver: 7,
        arrivals: 0,
        departures: 98,
      },
    ],
  },
  {
    groupData: [
      { name: "Grady-Runolfsson", roomCount: 7, revenue: "$258.19" },
      { name: "Morissette Inc", roomCount: 38, revenue: "$160.25" },
      { name: "Harvey Inc", roomCount: 43, revenue: "$225.24" },
      { name: "Jenkins, Sipes and Braun", roomCount: 5, revenue: "$256.25" },
      { name: "Brekke-Mohr", roomCount: 17, revenue: "$239.83" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Darrelle",
        guestName: "Darrelle Rebanks",
        reason: "Synergistic analyzing standardization",
      },
      {
        authorizedBy: "Christiana",
        guestName: "Christiana Daughtrey",
        reason: "Stand-alone system-worthy parallelism",
      },
      {
        authorizedBy: "Amabelle",
        guestName: "Amabelle Blues",
        reason: "Compatible needs-based focus group",
      },
      {
        authorizedBy: "Arvy",
        guestName: "Arvy Vicarey",
        reason: "Universal zero tolerance help-desk",
      },
      {
        authorizedBy: "Petronilla",
        guestName: "Petronilla Souster",
        reason: "Polarised reciprocal paradigm",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 86,
        details: "Down-sized stable customer loyalty",
      },
      { code: "C5", roomNumber: 68, details: "Up-sized background product" },
      { code: "HK", roomNumber: 83, details: "Organic composite matrix" },
      {
        code: "C5",
        roomNumber: 26,
        details: "Configurable homogeneous database",
      },
      {
        code: "HK",
        roomNumber: 25,
        details: "Assimilated exuding architecture",
      },
    ],
    revenueData: [
      { total: "$14768.01", group: "$844.20", company: "$2948.26" },
    ],
    roomData: [
      {
        total: 46,
        company: 3,
        outOfOrder: 8,
        stayOver: 27,
        arrivals: 70,
        departures: 21,
      },
    ],
  },
  {
    groupData: [{ name: "Ritchie-Littel", roomCount: 40, revenue: "$332.52" }],
    compRoomInfo: [
      {
        authorizedBy: "Charmane",
        guestName: "Charmane Vivers",
        reason: "Realigned bi-directional local area network",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 7, details: "Object-based 24 hour capacity" },
    ],
    revenueData: [
      { total: "$15349.22", group: "$1474.51", company: "$781.46" },
    ],
    roomData: [
      {
        total: 29,
        company: 4,
        outOfOrder: 6,
        stayOver: 44,
        arrivals: 13,
        departures: 72,
      },
    ],
  },
  {
    groupData: [
      { name: "Doyle Inc", roomCount: 49, revenue: "$297.12" },
      {
        name: "Schaden, Rosenbaum and Kuvalis",
        roomCount: 39,
        revenue: "$391.57",
      },
      { name: "Wilkinson-Wilkinson", roomCount: 14, revenue: "$264.38" },
      {
        name: "Champlin, Bergstrom and Hirthe",
        roomCount: 13,
        revenue: "$365.26",
      },
      {
        name: "Strosin, Lueilwitz and Abbott",
        roomCount: 12,
        revenue: "$222.42",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Joy",
        guestName: "Joy Goldthorpe",
        reason: "Devolved disintermediate project",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 33,
        details: "Visionary transitional encryption",
      },
      {
        code: "C5",
        roomNumber: 22,
        details: "Customizable human-resource knowledge base",
      },
      { code: "C5", roomNumber: 50, details: "Advanced background policy" },
      {
        code: "C5",
        roomNumber: 62,
        details: "Synergistic demand-driven workforce",
      },
      {
        code: "HK",
        roomNumber: 33,
        details: "Horizontal intermediate software",
      },
    ],
    revenueData: [
      { total: "$19687.35", group: "$1873.55", company: "$624.93" },
    ],
    roomData: [
      {
        total: 92,
        company: 3,
        outOfOrder: 3,
        stayOver: 22,
        arrivals: 26,
        departures: 80,
      },
    ],
  },
  {
    groupData: [
      { name: "Lesch, Kohler and Luettgen", roomCount: 44, revenue: "$372.15" },
      { name: "Zieme and Sons", roomCount: 41, revenue: "$307.10" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Nye",
        guestName: "Nye Ewins",
        reason: "Robust zero administration help-desk",
      },
      {
        authorizedBy: "Catlin",
        guestName: "Catlin Broune",
        reason: "Organized executive solution",
      },
      {
        authorizedBy: "Teodora",
        guestName: "Teodora O' Hanvey",
        reason: "Robust directional throughput",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 36,
        details: "Managed tangible budgetary management",
      },
      {
        code: "HK",
        roomNumber: 60,
        details: "Programmable regional internet solution",
      },
      {
        code: "HK",
        roomNumber: 28,
        details: "Optimized asynchronous secured line",
      },
      {
        code: "C5",
        roomNumber: 72,
        details: "Multi-lateral systematic neural-net",
      },
    ],
    revenueData: [{ total: "$6533.84", group: "$663.45", company: "$804.95" }],
    roomData: [
      {
        total: 43,
        company: 6,
        outOfOrder: 10,
        stayOver: 33,
        arrivals: 7,
        departures: 42,
      },
    ],
  },
  {
    groupData: [
      { name: "Baumbach-Reinger", roomCount: 26, revenue: "$177.93" },
      { name: "Kshlerin, Toy and Hickle", roomCount: 16, revenue: "$298.66" },
      { name: "Mraz, Connelly and Mertz", roomCount: 49, revenue: "$381.12" },
      { name: "Satterfield Group", roomCount: 23, revenue: "$109.64" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Shirleen",
        guestName: "Shirleen Heeran",
        reason: "Fully-configurable content-based local area network",
      },
      {
        authorizedBy: "Benoit",
        guestName: "Benoit Leaman",
        reason: "Synchronised asymmetric Graphical User Interface",
      },
      {
        authorizedBy: "Ebba",
        guestName: "Ebba Beaton",
        reason: "Self-enabling value-added middleware",
      },
      {
        authorizedBy: "Chris",
        guestName: "Chris Hughs",
        reason: "Switchable disintermediate intranet",
      },
      {
        authorizedBy: "Christie",
        guestName: "Christie Rogeron",
        reason: "Distributed bottom-line database",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 24, details: "Realigned multi-tasking policy" },
      {
        code: "C5",
        roomNumber: 60,
        details: "Quality-focused system-worthy Graphic Interface",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "Persistent leading edge concept",
      },
    ],
    revenueData: [
      { total: "$18504.69", group: "$1953.04", company: "$1131.69" },
    ],
    roomData: [
      {
        total: 53,
        company: 2,
        outOfOrder: 2,
        stayOver: 23,
        arrivals: 24,
        departures: 16,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Bergstrom, Wyman and Ondricka",
        roomCount: 12,
        revenue: "$131.35",
      },
      {
        name: "Oberbrunner, Koch and Jaskolski",
        roomCount: 40,
        revenue: "$328.83",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Heddi",
        guestName: "Heddi Millsom",
        reason: "Advanced mission-critical synergy",
      },
      {
        authorizedBy: "Rab",
        guestName: "Rab Martill",
        reason: "Networked systematic focus group",
      },
      {
        authorizedBy: "Bartram",
        guestName: "Bartram Pleasance",
        reason: "Focused bifurcated collaboration",
      },
      {
        authorizedBy: "Harald",
        guestName: "Harald Renhard",
        reason: "Reactive 5th generation firmware",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 23,
        details: "Synergized actuating superstructure",
      },
      {
        code: "HK",
        roomNumber: 61,
        details: "Open-architected intermediate complexity",
      },
      {
        code: "C5",
        roomNumber: 98,
        details: "Visionary analyzing superstructure",
      },
    ],
    revenueData: [
      { total: "$18734.84", group: "$202.45", company: "$2654.87" },
    ],
    roomData: [
      {
        total: 79,
        company: 9,
        outOfOrder: 1,
        stayOver: 8,
        arrivals: 63,
        departures: 92,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Karen",
        guestName: "Karen Faireclough",
        reason: "Digitized bandwidth-monitored ability",
      },
      {
        authorizedBy: "Audre",
        guestName: "Audre East",
        reason: "Cloned secondary Graphic Interface",
      },
      {
        authorizedBy: "Sherry",
        guestName: "Sherry Woolaston",
        reason: "Assimilated stable time-frame",
      },
      {
        authorizedBy: "Storm",
        guestName: "Storm Bicker",
        reason: "User-friendly bandwidth-monitored pricing structure",
      },
      {
        authorizedBy: "Arny",
        guestName: "Arny Matissoff",
        reason: "Multi-channelled optimizing superstructure",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 34, details: "Exclusive systemic database" },
      {
        code: "HK",
        roomNumber: 36,
        details: "Business-focused static focus group",
      },
      {
        code: "HK",
        roomNumber: 90,
        details: "Digitized discrete knowledge base",
      },
      {
        code: "HK",
        roomNumber: 23,
        details: "Profound content-based intranet",
      },
      {
        code: "C5",
        roomNumber: 25,
        details: "Object-based bandwidth-monitored protocol",
      },
    ],
    revenueData: [{ total: "$9722.60", group: "$578.60", company: "$2550.90" }],
    roomData: [
      {
        total: 32,
        company: 3,
        outOfOrder: 9,
        stayOver: 26,
        arrivals: 14,
        departures: 56,
      },
    ],
  },
  {
    groupData: [
      { name: "Aufderhar-Jerde", roomCount: 24, revenue: "$472.42" },
      { name: "Blanda, Will and VonRueden", roomCount: 16, revenue: "$121.79" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Amandy",
        guestName: "Amandy Boriston",
        reason: "Team-oriented asymmetric workforce",
      },
      {
        authorizedBy: "Rheta",
        guestName: "Rheta Huddles",
        reason: "Multi-layered radical functionalities",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 100,
        details: "Re-engineered cohesive Graphic Interface",
      },
      {
        code: "C5",
        roomNumber: 15,
        details: "Triple-buffered impactful architecture",
      },
      { code: "C5", roomNumber: 56, details: "Right-sized incremental array" },
      {
        code: "C5",
        roomNumber: 49,
        details: "Organized coherent artificial intelligence",
      },
    ],
    revenueData: [
      { total: "$15162.83", group: "$1695.29", company: "$2267.03" },
    ],
    roomData: [
      {
        total: 34,
        company: 10,
        outOfOrder: 10,
        stayOver: 25,
        arrivals: 34,
        departures: 45,
      },
    ],
  },
  {
    groupData: [
      { name: "Emard, Haag and Franecki", roomCount: 40, revenue: "$334.07" },
      { name: "Bergstrom-Prohaska", roomCount: 31, revenue: "$375.54" },
      { name: "Carroll, Lubowitz and Hahn", roomCount: 17, revenue: "$347.38" },
      { name: "Orn Group", roomCount: 15, revenue: "$367.51" },
      { name: "Keebler and Sons", roomCount: 6, revenue: "$382.34" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Mindy",
        guestName: "Mindy Scoggin",
        reason: "Re-contextualized incremental functionalities",
      },
      {
        authorizedBy: "Gothart",
        guestName: "Gothart de Broke",
        reason: "Down-sized foreground methodology",
      },
      {
        authorizedBy: "Rodolphe",
        guestName: "Rodolphe Ardley",
        reason: "Triple-buffered local benchmark",
      },
      {
        authorizedBy: "Jessey",
        guestName: "Jessey Osinin",
        reason: "Sharable bottom-line local area network",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 72,
        details: "Organic multi-tasking open architecture",
      },
    ],
    revenueData: [
      { total: "$10605.08", group: "$542.12", company: "$1070.16" },
    ],
    roomData: [
      {
        total: 28,
        company: 6,
        outOfOrder: 2,
        stayOver: 28,
        arrivals: 30,
        departures: 63,
      },
    ],
  },
  {
    groupData: [
      { name: "Emard LLC", roomCount: 39, revenue: "$439.48" },
      { name: "McClure-Kessler", roomCount: 17, revenue: "$241.48" },
      { name: "Schneider, Mohr and Graham", roomCount: 25, revenue: "$479.04" },
      {
        name: "Wiegand, Champlin and Hermiston",
        roomCount: 6,
        revenue: "$342.02",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Hillie",
        guestName: "Hillie Lightman",
        reason: "Future-proofed zero defect database",
      },
      {
        authorizedBy: "Zebulon",
        guestName: "Zebulon Longstreeth",
        reason: "Switchable actuating access",
      },
      {
        authorizedBy: "Cybil",
        guestName: "Cybil Spinella",
        reason: "Diverse client-driven secured line",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "Cross-platform reciprocal budgetary management",
      },
      {
        code: "C5",
        roomNumber: 61,
        details: "Horizontal fresh-thinking throughput",
      },
      {
        code: "HK",
        roomNumber: 78,
        details: "Operative fresh-thinking orchestration",
      },
      {
        code: "HK",
        roomNumber: 50,
        details: "Customer-focused non-volatile contingency",
      },
    ],
    revenueData: [
      { total: "$14469.92", group: "$457.23", company: "$2172.12" },
    ],
    roomData: [
      {
        total: 87,
        company: 5,
        outOfOrder: 5,
        stayOver: 47,
        arrivals: 47,
        departures: 25,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Benjie",
        guestName: "Benjie Ragge",
        reason: "Grass-roots contextually-based infrastructure",
      },
      {
        authorizedBy: "Anne-marie",
        guestName: "Anne-marie Cordet",
        reason: "Horizontal zero administration superstructure",
      },
      {
        authorizedBy: "Birgitta",
        guestName: "Birgitta Silby",
        reason: "Ergonomic real-time concept",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 99,
        details: "Monitored composite system engine",
      },
      {
        code: "C5",
        roomNumber: 42,
        details: "Assimilated well-modulated complexity",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "Front-line radical collaboration",
      },
    ],
    revenueData: [
      { total: "$11200.35", group: "$938.54", company: "$2588.30" },
    ],
    roomData: [
      {
        total: 3,
        company: 8,
        outOfOrder: 4,
        stayOver: 22,
        arrivals: 2,
        departures: 20,
      },
    ],
  },
  {
    groupData: [
      { name: "Reinger and Sons", roomCount: 1, revenue: "$197.77" },
      { name: "Lemke Group", roomCount: 34, revenue: "$142.94" },
      { name: "Christiansen and Sons", roomCount: 12, revenue: "$316.21" },
      { name: "Larkin and Sons", roomCount: 12, revenue: "$286.87" },
      { name: "Wisoky-Weber", roomCount: 49, revenue: "$200.95" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Beaufort",
        guestName: "Beaufort Mithun",
        reason: "Universal web-enabled success",
      },
      {
        authorizedBy: "Suellen",
        guestName: "Suellen Flintiff",
        reason: "Integrated systematic policy",
      },
      {
        authorizedBy: "Cheri",
        guestName: "Cheri Foulger",
        reason: "Intuitive maximized intranet",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 44,
        details: "Grass-roots intermediate initiative",
      },
      {
        code: "HK",
        roomNumber: 61,
        details: "Decentralized contextually-based collaboration",
      },
      { code: "C5", roomNumber: 91, details: "Diverse content-based attitude" },
      {
        code: "HK",
        roomNumber: 75,
        details: "Re-engineered well-modulated support",
      },
    ],
    revenueData: [
      { total: "$17157.86", group: "$1677.48", company: "$2085.00" },
    ],
    roomData: [
      {
        total: 47,
        company: 4,
        outOfOrder: 5,
        stayOver: 46,
        arrivals: 43,
        departures: 24,
      },
    ],
  },
  {
    groupData: [
      { name: "Quigley-Osinski", roomCount: 25, revenue: "$357.62" },
      { name: "Borer LLC", roomCount: 34, revenue: "$113.13" },
      { name: "Doyle-Mante", roomCount: 11, revenue: "$388.72" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Austen",
        guestName: "Austen Naris",
        reason: "Polarised hybrid encryption",
      },
      {
        authorizedBy: "Aida",
        guestName: "Aida Castangia",
        reason: "Open-architected client-server focus group",
      },
      {
        authorizedBy: "Tanney",
        guestName: "Tanney Moutray Read",
        reason: "Horizontal system-worthy functionalities",
      },
      {
        authorizedBy: "Blakeley",
        guestName: "Blakeley MacDwyer",
        reason: "Advanced grid-enabled function",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "Monitored fault-tolerant open system",
      },
    ],
    revenueData: [{ total: "$17593.88", group: "$762.07", company: "$429.70" }],
    roomData: [
      {
        total: 23,
        company: 3,
        outOfOrder: 8,
        stayOver: 23,
        arrivals: 22,
        departures: 68,
      },
    ],
  },
  {
    groupData: [
      { name: "Dicki LLC", roomCount: 24, revenue: "$270.69" },
      { name: "Bartell, Abshire and Fadel", roomCount: 42, revenue: "$395.88" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ethel",
        guestName: "Ethel Chessil",
        reason: "Innovative dedicated service-desk",
      },
      {
        authorizedBy: "Ross",
        guestName: "Ross Yanin",
        reason: "Seamless multimedia migration",
      },
      {
        authorizedBy: "Sutherlan",
        guestName: "Sutherlan Sans",
        reason: "Compatible dynamic instruction set",
      },
      {
        authorizedBy: "Danyette",
        guestName: "Danyette Gave",
        reason: "Progressive tertiary budgetary management",
      },
      {
        authorizedBy: "Carolynn",
        guestName: "Carolynn Halse",
        reason: "Profound foreground secured line",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "Profound disintermediate adapter",
      },
      { code: "C5", roomNumber: 87, details: "Down-sized regional firmware" },
      {
        code: "HK",
        roomNumber: 37,
        details: "Implemented grid-enabled access",
      },
    ],
    revenueData: [
      { total: "$6094.23", group: "$1075.98", company: "$2640.15" },
    ],
    roomData: [
      {
        total: 16,
        company: 7,
        outOfOrder: 3,
        stayOver: 0,
        arrivals: 24,
        departures: 14,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Melonie",
        guestName: "Melonie Seward",
        reason: "User-friendly holistic function",
      },
      {
        authorizedBy: "Tammi",
        guestName: "Tammi Filde",
        reason: "Mandatory 3rd generation functionalities",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "Re-contextualized 4th generation flexibility",
      },
      {
        code: "C5",
        roomNumber: 38,
        details: "Assimilated disintermediate collaboration",
      },
    ],
    revenueData: [
      { total: "$17778.99", group: "$1464.10", company: "$356.41" },
    ],
    roomData: [
      {
        total: 12,
        company: 0,
        outOfOrder: 0,
        stayOver: 5,
        arrivals: 90,
        departures: 97,
      },
    ],
  },
  {
    groupData: [
      { name: "Waelchi-O'Hara", roomCount: 18, revenue: "$455.66" },
      { name: "Collier, Baumbach and Batz", roomCount: 7, revenue: "$269.73" },
      { name: "Weissnat LLC", roomCount: 44, revenue: "$129.04" },
      { name: "Ankunding-Nader", roomCount: 36, revenue: "$146.90" },
      { name: "Gorczany-Lind", roomCount: 4, revenue: "$384.22" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Delilah",
        guestName: "Delilah Woolpert",
        reason: "Intuitive value-added utilisation",
      },
      {
        authorizedBy: "Malvina",
        guestName: "Malvina Ludee",
        reason: "Balanced non-volatile projection",
      },
      {
        authorizedBy: "Northrup",
        guestName: "Northrup Wyne",
        reason: "Devolved multi-tasking projection",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 53,
        details: "Synergistic scalable throughput",
      },
      {
        code: "C5",
        roomNumber: 71,
        details: "Distributed user-facing service-desk",
      },
      { code: "C5", roomNumber: 56, details: "Assimilated dedicated solution" },
    ],
    revenueData: [{ total: "$7740.78", group: "$580.74", company: "$345.64" }],
    roomData: [
      {
        total: 67,
        company: 6,
        outOfOrder: 9,
        stayOver: 13,
        arrivals: 36,
        departures: 39,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Wolff, Jakubowski and Hilpert",
        roomCount: 26,
        revenue: "$411.35",
      },
      {
        name: "Swaniawski, Murray and Roberts",
        roomCount: 32,
        revenue: "$305.08",
      },
      {
        name: "Reynolds, Bergnaum and Morar",
        roomCount: 32,
        revenue: "$185.07",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Lynn",
        guestName: "Lynn Adamov",
        reason: "Proactive bottom-line forecast",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "Digitized bi-directional benchmark",
      },
      { code: "C5", roomNumber: 66, details: "Up-sized grid-enabled hardware" },
      {
        code: "C5",
        roomNumber: 40,
        details: "Open-source mission-critical access",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "Seamless value-added conglomeration",
      },
    ],
    revenueData: [{ total: "$8137.21", group: "$578.68", company: "$2191.56" }],
    roomData: [
      {
        total: 91,
        company: 8,
        outOfOrder: 8,
        stayOver: 20,
        arrivals: 100,
        departures: 65,
      },
    ],
  },
  {
    groupData: [
      { name: "Borer Inc", roomCount: 17, revenue: "$271.21" },
      { name: "Okuneva, Rath and Marks", roomCount: 4, revenue: "$126.44" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Nathanial",
        guestName: "Nathanial Foro",
        reason: "Cross-platform even-keeled extranet",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 76,
        details: "Profit-focused optimizing initiative",
      },
      {
        code: "HK",
        roomNumber: 56,
        details: "User-centric clear-thinking Graphical User Interface",
      },
      {
        code: "C5",
        roomNumber: 38,
        details: "Enterprise-wide system-worthy extranet",
      },
      {
        code: "C5",
        roomNumber: 21,
        details: "Compatible demand-driven concept",
      },
    ],
    revenueData: [
      { total: "$19209.44", group: "$368.07", company: "$2228.53" },
    ],
    roomData: [
      {
        total: 61,
        company: 9,
        outOfOrder: 5,
        stayOver: 19,
        arrivals: 42,
        departures: 52,
      },
    ],
  },
  {
    groupData: [
      { name: "Bradtke-Luettgen", roomCount: 8, revenue: "$143.19" },
      { name: "Bartoletti-Swift", roomCount: 14, revenue: "$344.83" },
      { name: "Kuhn LLC", roomCount: 20, revenue: "$189.79" },
      { name: "Konopelski and Sons", roomCount: 43, revenue: "$439.96" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Igor",
        guestName: "Igor Dacca",
        reason: "Focused system-worthy service-desk",
      },
      {
        authorizedBy: "Clarabelle",
        guestName: "Clarabelle Lankester",
        reason: "Synergistic background open architecture",
      },
      {
        authorizedBy: "Afton",
        guestName: "Afton Gibbs",
        reason: "De-engineered web-enabled implementation",
      },
      {
        authorizedBy: "Kaylil",
        guestName: "Kaylil Murr",
        reason: "Configurable upward-trending internet solution",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$17648.89", group: "$1248.22", company: "$1745.23" },
    ],
    roomData: [
      {
        total: 22,
        company: 1,
        outOfOrder: 10,
        stayOver: 48,
        arrivals: 98,
        departures: 41,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Arie",
        guestName: "Arie Mecchi",
        reason: "Multi-lateral full-range intranet",
      },
      {
        authorizedBy: "Darryl",
        guestName: "Darryl Stare",
        reason: "Progressive didactic structure",
      },
      {
        authorizedBy: "Guendolen",
        guestName: "Guendolen Berns",
        reason: "Decentralized 5th generation open architecture",
      },
      {
        authorizedBy: "Hymie",
        guestName: "Hymie Dennitts",
        reason: "Synergistic intermediate encryption",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "Horizontal incremental structure",
      },
      { code: "HK", roomNumber: 53, details: "Robust secondary time-frame" },
      {
        code: "HK",
        roomNumber: 73,
        details: "Cloned explicit functionalities",
      },
    ],
    revenueData: [
      { total: "$13606.33", group: "$998.22", company: "$2941.29" },
    ],
    roomData: [
      {
        total: 11,
        company: 5,
        outOfOrder: 6,
        stayOver: 10,
        arrivals: 56,
        departures: 12,
      },
    ],
  },
  {
    groupData: [
      { name: "McDermott-Mayert", roomCount: 14, revenue: "$355.59" },
      { name: "Lindgren-Wintheiser", roomCount: 47, revenue: "$331.52" },
      { name: "Ortiz LLC", roomCount: 24, revenue: "$473.44" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Milzie",
        guestName: "Milzie Hapgood",
        reason: "Down-sized real-time definition",
      },
      {
        authorizedBy: "Opal",
        guestName: "Opal Edinboro",
        reason: "Secured transitional capability",
      },
      {
        authorizedBy: "Brand",
        guestName: "Brand Cahalan",
        reason: "Operative zero tolerance standardization",
      },
      {
        authorizedBy: "Caspar",
        guestName: "Caspar Enders",
        reason: "Decentralized responsive complexity",
      },
      {
        authorizedBy: "Ernest",
        guestName: "Ernest Burgill",
        reason: "Cross-platform methodical capability",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 0,
        details: "Re-engineered clear-thinking instruction set",
      },
      {
        code: "C5",
        roomNumber: 39,
        details: "Right-sized context-sensitive ability",
      },
      {
        code: "C5",
        roomNumber: 52,
        details: "Future-proofed zero defect service-desk",
      },
    ],
    revenueData: [{ total: "$6732.53", group: "$116.54", company: "$849.89" }],
    roomData: [
      {
        total: 65,
        company: 8,
        outOfOrder: 4,
        stayOver: 14,
        arrivals: 41,
        departures: 80,
      },
    ],
  },
  {
    groupData: [
      { name: "Schmitt-Kulas", roomCount: 15, revenue: "$123.36" },
      { name: "Stokes, Jacobson and Lehner", roomCount: 0, revenue: "$177.16" },
      { name: "Weber, Bogisich and Erdman", roomCount: 7, revenue: "$474.32" },
      { name: "Osinski-Brown", roomCount: 1, revenue: "$142.58" },
      { name: "Bradtke-Harber", roomCount: 12, revenue: "$417.78" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Oliy",
        guestName: "Oliy Deeves",
        reason: "Team-oriented uniform hardware",
      },
      {
        authorizedBy: "Cori",
        guestName: "Cori Reville",
        reason: "Visionary optimizing product",
      },
      {
        authorizedBy: "Penni",
        guestName: "Penni Tottie",
        reason: "Grass-roots interactive superstructure",
      },
      {
        authorizedBy: "Reese",
        guestName: "Reese Pietrowski",
        reason: "Cloned bottom-line interface",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$10600.01", group: "$701.69", company: "$2061.24" },
    ],
    roomData: [
      {
        total: 94,
        company: 8,
        outOfOrder: 1,
        stayOver: 26,
        arrivals: 60,
        departures: 28,
      },
    ],
  },
  {
    groupData: [
      { name: "Von LLC", roomCount: 0, revenue: "$116.36" },
      {
        name: "Bernier, Mosciski and Gottlieb",
        roomCount: 39,
        revenue: "$406.46",
      },
      { name: "Cremin Group", roomCount: 50, revenue: "$203.96" },
      { name: "Lakin-Bruen", roomCount: 30, revenue: "$243.23" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Elliot",
        guestName: "Elliot Kleinert",
        reason: "Fully-configurable mission-critical extranet",
      },
      {
        authorizedBy: "Dru",
        guestName: "Dru Denford",
        reason: "Upgradable tertiary intranet",
      },
      {
        authorizedBy: "Orbadiah",
        guestName: "Orbadiah Gomar",
        reason: "Cloned fresh-thinking product",
      },
      {
        authorizedBy: "Ida",
        guestName: "Ida Povah",
        reason: "Focused uniform matrices",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "Re-engineered mission-critical workforce",
      },
    ],
    revenueData: [
      { total: "$15437.58", group: "$1843.78", company: "$1713.29" },
    ],
    roomData: [
      {
        total: 63,
        company: 8,
        outOfOrder: 5,
        stayOver: 24,
        arrivals: 57,
        departures: 56,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Ondricka, Botsford and Dicki",
        roomCount: 23,
        revenue: "$376.30",
      },
      { name: "Willms and Sons", roomCount: 19, revenue: "$467.88" },
      { name: "Wuckert-Quigley", roomCount: 32, revenue: "$298.33" },
      { name: "Dare, Auer and Wyman", roomCount: 50, revenue: "$133.97" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Corena",
        guestName: "Corena Maroney",
        reason: "Re-engineered national concept",
      },
      {
        authorizedBy: "Charlean",
        guestName: "Charlean Bevar",
        reason: "Operative logistical task-force",
      },
      {
        authorizedBy: "Nancey",
        guestName: "Nancey Mougeot",
        reason: "Face to face motivating time-frame",
      },
      {
        authorizedBy: "Elicia",
        guestName: "Elicia Scurrer",
        reason: "Multi-tiered exuding flexibility",
      },
      {
        authorizedBy: "Wilburt",
        guestName: "Wilburt Attenborough",
        reason: "Distributed explicit installation",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$16902.29", group: "$1495.52", company: "$1703.09" },
    ],
    roomData: [
      {
        total: 5,
        company: 4,
        outOfOrder: 7,
        stayOver: 21,
        arrivals: 59,
        departures: 81,
      },
    ],
  },
  {
    groupData: [
      { name: "Heaney-Kris", roomCount: 50, revenue: "$296.91" },
      { name: "Dare-Pouros", roomCount: 33, revenue: "$353.21" },
      { name: "Prohaska, Pagac and Torphy", roomCount: 9, revenue: "$291.40" },
      { name: "Hessel-Mann", roomCount: 20, revenue: "$394.12" },
      { name: "Kovacek, Frami and Smitham", roomCount: 49, revenue: "$482.09" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Mozelle",
        guestName: "Mozelle Nacci",
        reason: "Mandatory 5th generation local area network",
      },
      {
        authorizedBy: "Joel",
        guestName: "Joel Bockler",
        reason: "Synchronised discrete secured line",
      },
      {
        authorizedBy: "Christean",
        guestName: "Christean Clemmens",
        reason: "Vision-oriented client-driven matrices",
      },
      {
        authorizedBy: "Loren",
        guestName: "Loren Furmonger",
        reason: "Digitized zero tolerance function",
      },
      {
        authorizedBy: "Jennie",
        guestName: "Jennie Hamsson",
        reason: "Reactive reciprocal benchmark",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 28,
        details: "Visionary 3rd generation contingency",
      },
      {
        code: "HK",
        roomNumber: 91,
        details: "Organic modular artificial intelligence",
      },
      { code: "HK", roomNumber: 31, details: "Adaptive interactive framework" },
      { code: "HK", roomNumber: 89, details: "Mandatory scalable emulation" },
    ],
    revenueData: [
      { total: "$11814.73", group: "$663.69", company: "$1631.15" },
    ],
    roomData: [
      {
        total: 90,
        company: 7,
        outOfOrder: 4,
        stayOver: 33,
        arrivals: 96,
        departures: 84,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Schowalter, Hoppe and Kozey",
        roomCount: 40,
        revenue: "$224.37",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Cindelyn",
        guestName: "Cindelyn Rittmeyer",
        reason: "Enterprise-wide upward-trending emulation",
      },
      {
        authorizedBy: "Wolf",
        guestName: "Wolf Grinishin",
        reason: "Integrated dynamic capacity",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$14421.23", group: "$161.27", company: "$192.64" }],
    roomData: [
      {
        total: 27,
        company: 10,
        outOfOrder: 6,
        stayOver: 6,
        arrivals: 49,
        departures: 80,
      },
    ],
  },
  {
    groupData: [
      { name: "Hahn, Daugherty and Hoppe", roomCount: 28, revenue: "$302.19" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Mariam",
        guestName: "Mariam Fausch",
        reason: "Operative zero tolerance productivity",
      },
      {
        authorizedBy: "Hamilton",
        guestName: "Hamilton Messer",
        reason: "Multi-layered scalable productivity",
      },
      {
        authorizedBy: "Adrienne",
        guestName: "Adrienne Birkenhead",
        reason: "Mandatory tangible focus group",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 85, details: "Focused fresh-thinking adapter" },
    ],
    revenueData: [
      { total: "$14517.24", group: "$517.68", company: "$1821.08" },
    ],
    roomData: [
      {
        total: 87,
        company: 2,
        outOfOrder: 7,
        stayOver: 20,
        arrivals: 28,
        departures: 91,
      },
    ],
  },
  {
    groupData: [
      { name: "Cummings, Howe and Ritchie", roomCount: 32, revenue: "$100.69" },
      { name: "Durgan, Ruecker and Fadel", roomCount: 29, revenue: "$158.42" },
      {
        name: "Muller, Jacobson and Larson",
        roomCount: 17,
        revenue: "$249.24",
      },
      { name: "Romaguera LLC", roomCount: 38, revenue: "$104.70" },
      { name: "Senger-Schaden", roomCount: 41, revenue: "$499.74" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Opalina",
        guestName: "Opalina Naptin",
        reason: "Enhanced methodical help-desk",
      },
      {
        authorizedBy: "Boothe",
        guestName: "Boothe Honatsch",
        reason: "Stand-alone object-oriented parallelism",
      },
      {
        authorizedBy: "Rockey",
        guestName: "Rockey Barents",
        reason: "Implemented high-level encryption",
      },
      {
        authorizedBy: "Karlis",
        guestName: "Karlis Bettlestone",
        reason: "Innovative static hub",
      },
      {
        authorizedBy: "Jeana",
        guestName: "Jeana Gleadhall",
        reason: "Down-sized impactful data-warehouse",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 65,
        details: "Customer-focused analyzing data-warehouse",
      },
      { code: "C5", roomNumber: 92, details: "Intuitive asynchronous core" },
      {
        code: "HK",
        roomNumber: 54,
        details: "Digitized disintermediate algorithm",
      },
      { code: "HK", roomNumber: 11, details: "Public-key real-time support" },
    ],
    revenueData: [
      { total: "$7756.81", group: "$1470.49", company: "$1444.59" },
    ],
    roomData: [
      {
        total: 15,
        company: 4,
        outOfOrder: 10,
        stayOver: 29,
        arrivals: 35,
        departures: 37,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Sheryl",
        guestName: "Sheryl Handlin",
        reason: "Realigned content-based hierarchy",
      },
      {
        authorizedBy: "Mariam",
        guestName: "Mariam Limpenny",
        reason: "Networked next generation projection",
      },
      {
        authorizedBy: "Adelina",
        guestName: "Adelina Grundle",
        reason: "Mandatory stable architecture",
      },
      {
        authorizedBy: "Hebert",
        guestName: "Hebert Wilkerson",
        reason: "Multi-tiered didactic product",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 79, details: "Ergonomic discrete emulation" },
      { code: "HK", roomNumber: 51, details: "Total clear-thinking success" },
      { code: "C5", roomNumber: 9, details: "Centralized heuristic workforce" },
      {
        code: "C5",
        roomNumber: 43,
        details: "Organic system-worthy system engine",
      },
    ],
    revenueData: [
      { total: "$7833.63", group: "$1193.69", company: "$1647.19" },
    ],
    roomData: [
      {
        total: 76,
        company: 6,
        outOfOrder: 2,
        stayOver: 47,
        arrivals: 8,
        departures: 92,
      },
    ],
  },
  {
    groupData: [
      { name: "Rogahn, Grimes and Veum", roomCount: 15, revenue: "$126.77" },
      { name: "Corwin LLC", roomCount: 7, revenue: "$424.25" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Rancell",
        guestName: "Rancell Scollick",
        reason: "Right-sized client-driven capacity",
      },
      {
        authorizedBy: "Dale",
        guestName: "Dale Peck",
        reason: "Enterprise-wide actuating synergy",
      },
      {
        authorizedBy: "Kelila",
        guestName: "Kelila Bane",
        reason: "Function-based neutral ability",
      },
      {
        authorizedBy: "Syman",
        guestName: "Syman Grishkov",
        reason: "Compatible incremental capacity",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 70,
        details: "De-engineered optimizing architecture",
      },
      {
        code: "HK",
        roomNumber: 58,
        details: "Synergistic client-driven middleware",
      },
      {
        code: "C5",
        roomNumber: 74,
        details: "Quality-focused composite system engine",
      },
      {
        code: "HK",
        roomNumber: 57,
        details: "Grass-roots multi-tasking migration",
      },
    ],
    revenueData: [
      { total: "$11538.09", group: "$1478.09", company: "$1560.74" },
    ],
    roomData: [
      {
        total: 58,
        company: 7,
        outOfOrder: 0,
        stayOver: 4,
        arrivals: 61,
        departures: 74,
      },
    ],
  },
  {
    groupData: [
      { name: "Schowalter Inc", roomCount: 27, revenue: "$436.76" },
      { name: "Hamill, Crooks and Krajcik", roomCount: 7, revenue: "$425.83" },
      { name: "Bogisich LLC", roomCount: 11, revenue: "$469.86" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Bird",
        guestName: "Bird Roebottom",
        reason: "Public-key grid-enabled encoding",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 78,
        details: "Multi-channelled maximized strategy",
      },
      {
        code: "HK",
        roomNumber: 100,
        details: "Synergized actuating open architecture",
      },
      {
        code: "C5",
        roomNumber: 77,
        details: "Inverse exuding internet solution",
      },
    ],
    revenueData: [
      { total: "$10732.28", group: "$1159.22", company: "$1920.23" },
    ],
    roomData: [
      {
        total: 3,
        company: 2,
        outOfOrder: 1,
        stayOver: 48,
        arrivals: 19,
        departures: 36,
      },
    ],
  },
  {
    groupData: [
      { name: "Boyer-Prosacco", roomCount: 6, revenue: "$396.60" },
      { name: "Waters LLC", roomCount: 46, revenue: "$207.52" },
      { name: "Fritsch Inc", roomCount: 19, revenue: "$363.29" },
      { name: "Skiles, Ferry and Moen", roomCount: 21, revenue: "$157.16" },
      { name: "Vandervort Group", roomCount: 29, revenue: "$261.56" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jens",
        guestName: "Jens Mudge",
        reason: "Progressive 6th generation ability",
      },
      {
        authorizedBy: "Angelika",
        guestName: "Angelika Shearman",
        reason: "Seamless responsive throughput",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 99, details: "Switchable cohesive hardware" },
      {
        code: "C5",
        roomNumber: 94,
        details: "Face to face non-volatile matrix",
      },
      {
        code: "C5",
        roomNumber: 74,
        details: "Mandatory zero tolerance groupware",
      },
    ],
    revenueData: [{ total: "$17318.66", group: "$290.03", company: "$236.96" }],
    roomData: [
      {
        total: 86,
        company: 10,
        outOfOrder: 2,
        stayOver: 4,
        arrivals: 36,
        departures: 25,
      },
    ],
  },
  {
    groupData: [
      { name: "Hoppe Inc", roomCount: 26, revenue: "$182.51" },
      { name: "Moen Group", roomCount: 47, revenue: "$476.47" },
      { name: "Fisher, Torphy and Douglas", roomCount: 22, revenue: "$282.19" },
      { name: "Gislason-Klein", roomCount: 29, revenue: "$188.61" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Valentia",
        guestName: "Valentia Grady",
        reason: "Versatile regional groupware",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 26, details: "Stand-alone systemic algorithm" },
    ],
    revenueData: [
      { total: "$17545.31", group: "$1088.83", company: "$814.01" },
    ],
    roomData: [
      {
        total: 89,
        company: 10,
        outOfOrder: 6,
        stayOver: 16,
        arrivals: 79,
        departures: 54,
      },
    ],
  },
  {
    groupData: [
      { name: "Gleason-Jones", roomCount: 2, revenue: "$143.91" },
      { name: "Conn, Adams and Collier", roomCount: 21, revenue: "$370.39" },
      { name: "Corwin, Goyette and Cole", roomCount: 31, revenue: "$309.87" },
      { name: "Haley-Davis", roomCount: 28, revenue: "$228.77" },
      { name: "Jaskolski Inc", roomCount: 26, revenue: "$206.20" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Mada",
        guestName: "Mada Delaney",
        reason: "Seamless stable analyzer",
      },
      {
        authorizedBy: "Bevon",
        guestName: "Bevon Hedgecock",
        reason: "Upgradable encompassing emulation",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "Triple-buffered radical emulation",
      },
      {
        code: "HK",
        roomNumber: 32,
        details: "Fully-configurable context-sensitive leverage",
      },
    ],
    revenueData: [
      { total: "$15389.07", group: "$1186.53", company: "$2465.98" },
    ],
    roomData: [
      {
        total: 86,
        company: 0,
        outOfOrder: 4,
        stayOver: 12,
        arrivals: 73,
        departures: 51,
      },
    ],
  },
  {
    groupData: [{ name: "Purdy Group", roomCount: 34, revenue: "$389.56" }],
    compRoomInfo: [
      {
        authorizedBy: "Matti",
        guestName: "Matti Gorghetto",
        reason: "Persistent user-facing customer loyalty",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 80,
        details: "Synchronised asymmetric process improvement",
      },
      {
        code: "HK",
        roomNumber: 28,
        details: "Multi-tiered disintermediate productivity",
      },
      { code: "HK", roomNumber: 42, details: "Advanced client-server access" },
      {
        code: "C5",
        roomNumber: 63,
        details: "Enterprise-wide real-time encryption",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "Stand-alone leading edge standardization",
      },
    ],
    revenueData: [
      { total: "$17426.99", group: "$1710.12", company: "$1775.48" },
    ],
    roomData: [
      {
        total: 61,
        company: 9,
        outOfOrder: 5,
        stayOver: 29,
        arrivals: 37,
        departures: 95,
      },
    ],
  },
  {
    groupData: [{ name: "Batz-Schuster", roomCount: 18, revenue: "$382.74" }],
    compRoomInfo: [
      {
        authorizedBy: "Gwenny",
        guestName: "Gwenny Stiff",
        reason: "Cross-platform 3rd generation concept",
      },
      {
        authorizedBy: "Joya",
        guestName: "Joya Boar",
        reason: "Profit-focused uniform knowledge base",
      },
      {
        authorizedBy: "Torrie",
        guestName: "Torrie Shoutt",
        reason: "Secured composite moderator",
      },
      {
        authorizedBy: "Hildy",
        guestName: "Hildy Doncom",
        reason: "Re-engineered bandwidth-monitored data-warehouse",
      },
      {
        authorizedBy: "Clarabelle",
        guestName: "Clarabelle Tolhurst",
        reason: "User-friendly motivating installation",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$9205.83", group: "$919.61", company: "$2716.55" }],
    roomData: [
      {
        total: 6,
        company: 8,
        outOfOrder: 2,
        stayOver: 45,
        arrivals: 8,
        departures: 9,
      },
    ],
  },
  {
    groupData: [
      { name: "Green, Brekke and Herzog", roomCount: 35, revenue: "$146.29" },
      { name: "Hermann Group", roomCount: 42, revenue: "$146.31" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Kimmie",
        guestName: "Kimmie Janas",
        reason: "Assimilated hybrid forecast",
      },
      {
        authorizedBy: "Koo",
        guestName: "Koo Iacoviello",
        reason: "Extended exuding artificial intelligence",
      },
      {
        authorizedBy: "Dotti",
        guestName: "Dotti Harflete",
        reason: "Optional demand-driven open architecture",
      },
      {
        authorizedBy: "Jacquelynn",
        guestName: "Jacquelynn Laing",
        reason: "Multi-tiered contextually-based toolset",
      },
      {
        authorizedBy: "Sarita",
        guestName: "Sarita McKeon",
        reason: "Pre-emptive uniform synergy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 91,
        details: "Realigned zero administration paradigm",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "Decentralized intermediate matrices",
      },
      { code: "HK", roomNumber: 84, details: "Synergized analyzing database" },
      {
        code: "C5",
        roomNumber: 2,
        details: "Versatile upward-trending standardization",
      },
      { code: "HK", roomNumber: 81, details: "Virtual 24/7 standardization" },
    ],
    revenueData: [{ total: "$5629.77", group: "$429.34", company: "$2596.21" }],
    roomData: [
      {
        total: 74,
        company: 7,
        outOfOrder: 5,
        stayOver: 14,
        arrivals: 1,
        departures: 40,
      },
    ],
  },
  {
    groupData: [
      { name: "West Group", roomCount: 20, revenue: "$115.55" },
      { name: "Champlin-Mertz", roomCount: 38, revenue: "$209.21" },
      { name: "Halvorson-Hermiston", roomCount: 26, revenue: "$482.96" },
      { name: "Gerlach-Dicki", roomCount: 17, revenue: "$178.80" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Taryn",
        guestName: "Taryn Cray",
        reason: "Fundamental exuding policy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 16,
        details: "Extended demand-driven extranet",
      },
      {
        code: "C5",
        roomNumber: 90,
        details: "Multi-layered maximized standardization",
      },
    ],
    revenueData: [
      { total: "$18204.33", group: "$453.67", company: "$1830.33" },
    ],
    roomData: [
      {
        total: 54,
        company: 7,
        outOfOrder: 8,
        stayOver: 16,
        arrivals: 36,
        departures: 10,
      },
    ],
  },
  {
    groupData: [
      { name: "Ullrich LLC", roomCount: 8, revenue: "$495.88" },
      { name: "Hermiston-Torphy", roomCount: 14, revenue: "$181.33" },
      {
        name: "VonRueden, Langworth and Sauer",
        roomCount: 39,
        revenue: "$178.42",
      },
      { name: "Waelchi LLC", roomCount: 30, revenue: "$209.38" },
      { name: "Hills, Funk and Kuhn", roomCount: 17, revenue: "$225.82" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Al",
        guestName: "Al Spitaro",
        reason: "Organized regional interface",
      },
      {
        authorizedBy: "Booth",
        guestName: "Booth McGillivray",
        reason: "Stand-alone 5th generation hierarchy",
      },
      {
        authorizedBy: "Ilsa",
        guestName: "Ilsa Venour",
        reason: "Digitized web-enabled product",
      },
      {
        authorizedBy: "Theodora",
        guestName: "Theodora Windle",
        reason: "Implemented context-sensitive interface",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 80,
        details: "Down-sized bifurcated functionalities",
      },
      { code: "HK", roomNumber: 68, details: "Reactive stable hardware" },
      { code: "HK", roomNumber: 40, details: "Monitored scalable portal" },
    ],
    revenueData: [
      { total: "$10315.46", group: "$1753.99", company: "$1724.56" },
    ],
    roomData: [
      {
        total: 58,
        company: 6,
        outOfOrder: 0,
        stayOver: 15,
        arrivals: 46,
        departures: 81,
      },
    ],
  },
  {
    groupData: [
      { name: "Dach-Predovic", roomCount: 11, revenue: "$425.21" },
      { name: "Kub-Johns", roomCount: 12, revenue: "$485.76" },
      {
        name: "Runolfsson, Gerlach and Mohr",
        roomCount: 10,
        revenue: "$281.26",
      },
      {
        name: "Lakin, Daniel and Heidenreich",
        roomCount: 46,
        revenue: "$450.22",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Rainer",
        guestName: "Rainer Choules",
        reason: "Intuitive bi-directional time-frame",
      },
      {
        authorizedBy: "Una",
        guestName: "Una McIlherran",
        reason: "Expanded well-modulated workforce",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 61,
        details: "Persistent intangible knowledge user",
      },
      { code: "HK", roomNumber: 5, details: "Intuitive even-keeled matrix" },
    ],
    revenueData: [{ total: "$14966.47", group: "$410.87", company: "$157.48" }],
    roomData: [
      {
        total: 27,
        company: 0,
        outOfOrder: 8,
        stayOver: 42,
        arrivals: 98,
        departures: 66,
      },
    ],
  },
  {
    groupData: [
      { name: "Schamberger-Brakus", roomCount: 2, revenue: "$258.28" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Tristam",
        guestName: "Tristam Scotcher",
        reason: "Vision-oriented mission-critical intranet",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 52,
        details: "Grass-roots grid-enabled orchestration",
      },
    ],
    revenueData: [{ total: "$18303.93", group: "$155.27", company: "$838.15" }],
    roomData: [
      {
        total: 84,
        company: 10,
        outOfOrder: 3,
        stayOver: 30,
        arrivals: 74,
        departures: 22,
      },
    ],
  },
  {
    groupData: [
      { name: "Renner and Sons", roomCount: 17, revenue: "$159.97" },
      { name: "Hettinger-Cormier", roomCount: 31, revenue: "$194.53" },
      {
        name: "Bogisich, Braun and Schulist",
        roomCount: 28,
        revenue: "$290.35",
      },
      { name: "Romaguera, Kihn and Kuhlman", roomCount: 7, revenue: "$138.65" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Merrily",
        guestName: "Merrily Hovard",
        reason: "Robust analyzing orchestration",
      },
      {
        authorizedBy: "Ax",
        guestName: "Ax Witherby",
        reason: "Proactive bifurcated matrices",
      },
      {
        authorizedBy: "Steffie",
        guestName: "Steffie Stephenson",
        reason: "Polarised dynamic encryption",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$16172.11", group: "$1943.24", company: "$1820.07" },
    ],
    roomData: [
      {
        total: 40,
        company: 3,
        outOfOrder: 4,
        stayOver: 9,
        arrivals: 100,
        departures: 3,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Mia",
        guestName: "Mia Kinkead",
        reason: "Seamless clear-thinking capacity",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$15641.75", group: "$1624.72", company: "$476.36" },
    ],
    roomData: [
      {
        total: 100,
        company: 10,
        outOfOrder: 4,
        stayOver: 36,
        arrivals: 99,
        departures: 16,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Nitzsche, Prohaska and Stracke",
        roomCount: 21,
        revenue: "$276.51",
      },
      { name: "Wyman-Hahn", roomCount: 47, revenue: "$450.40" },
      { name: "Johnson, Zieme and Mertz", roomCount: 22, revenue: "$167.31" },
      { name: "Price-Hyatt", roomCount: 20, revenue: "$251.78" },
      {
        name: "Gislason, Mayert and Morissette",
        roomCount: 0,
        revenue: "$145.91",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Geoff",
        guestName: "Geoff Bilbrooke",
        reason: "Assimilated intermediate local area network",
      },
      {
        authorizedBy: "Raeann",
        guestName: "Raeann Bryan",
        reason: "Monitored cohesive concept",
      },
      {
        authorizedBy: "Roslyn",
        guestName: "Roslyn Franca",
        reason: "Pre-emptive composite intranet",
      },
      {
        authorizedBy: "Yetty",
        guestName: "Yetty Yukhov",
        reason: "Re-contextualized didactic access",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 39, details: "Advanced radical paradigm" },
      { code: "HK", roomNumber: 73, details: "Optional leading edge capacity" },
      { code: "C5", roomNumber: 43, details: "Grass-roots systemic analyzer" },
      { code: "HK", roomNumber: 16, details: "Implemented 24/7 extranet" },
      {
        code: "HK",
        roomNumber: 77,
        details: "Inverse attitude-oriented productivity",
      },
    ],
    revenueData: [{ total: "$15224.38", group: "$601.67", company: "$912.54" }],
    roomData: [
      {
        total: 61,
        company: 0,
        outOfOrder: 7,
        stayOver: 42,
        arrivals: 90,
        departures: 75,
      },
    ],
  },
  {
    groupData: [
      { name: "Kreiger-Rempel", roomCount: 30, revenue: "$480.79" },
      { name: "Greenholt LLC", roomCount: 23, revenue: "$158.10" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Carley",
        guestName: "Carley Larose",
        reason: "Virtual 3rd generation moratorium",
      },
      {
        authorizedBy: "Virgie",
        guestName: "Virgie Niles",
        reason: "Proactive dedicated challenge",
      },
      {
        authorizedBy: "Nevins",
        guestName: "Nevins McGrady",
        reason: "Optional tertiary moderator",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 19,
        details: "Switchable foreground middleware",
      },
      {
        code: "HK",
        roomNumber: 77,
        details: "Function-based methodical conglomeration",
      },
    ],
    revenueData: [{ total: "$9620.17", group: "$386.95", company: "$2269.12" }],
    roomData: [
      {
        total: 14,
        company: 10,
        outOfOrder: 1,
        stayOver: 10,
        arrivals: 5,
        departures: 63,
      },
    ],
  },
  {
    groupData: [
      { name: "Russel-Miller", roomCount: 32, revenue: "$345.20" },
      {
        name: "Lindgren, Gerhold and Beatty",
        roomCount: 39,
        revenue: "$484.24",
      },
      { name: "Robel and Sons", roomCount: 13, revenue: "$166.23" },
      { name: "Douglas-Stark", roomCount: 1, revenue: "$319.58" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Tersina",
        guestName: "Tersina Friday",
        reason: "Multi-channelled local interface",
      },
      {
        authorizedBy: "Tomi",
        guestName: "Tomi Hemphrey",
        reason: "Optional upward-trending paradigm",
      },
      {
        authorizedBy: "Alis",
        guestName: "Alis Calcott",
        reason: "Synchronised incremental Graphical User Interface",
      },
      {
        authorizedBy: "Ricki",
        guestName: "Ricki Culverhouse",
        reason: "User-friendly impactful model",
      },
      {
        authorizedBy: "Eloise",
        guestName: "Eloise Mortlock",
        reason: "Expanded dynamic benchmark",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 3, details: "Persistent radical secured line" },
      {
        code: "HK",
        roomNumber: 65,
        details: "Automated context-sensitive parallelism",
      },
      {
        code: "C5",
        roomNumber: 48,
        details: "Virtual bottom-line budgetary management",
      },
      { code: "C5", roomNumber: 5, details: "Digitized regional migration" },
    ],
    revenueData: [
      { total: "$12903.01", group: "$643.43", company: "$2788.62" },
    ],
    roomData: [
      {
        total: 49,
        company: 3,
        outOfOrder: 6,
        stayOver: 9,
        arrivals: 0,
        departures: 88,
      },
    ],
  },
  {
    groupData: [
      { name: "Will-Paucek", roomCount: 12, revenue: "$463.35" },
      { name: "Flatley-Howell", roomCount: 28, revenue: "$389.19" },
      { name: "Heller, Langosh and Ebert", roomCount: 16, revenue: "$401.72" },
      {
        name: "Kertzmann, Mitchell and Pouros",
        roomCount: 22,
        revenue: "$271.95",
      },
      { name: "Olson, Moore and Reichert", roomCount: 22, revenue: "$495.01" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Alair",
        guestName: "Alair Fredson",
        reason: "Sharable incremental hierarchy",
      },
      {
        authorizedBy: "Coleen",
        guestName: "Coleen Cruce",
        reason: "Adaptive discrete collaboration",
      },
      {
        authorizedBy: "Stillmann",
        guestName: "Stillmann Leneve",
        reason: "Mandatory systemic capability",
      },
      {
        authorizedBy: "Carla",
        guestName: "Carla Shearmur",
        reason: "Assimilated multi-state software",
      },
      {
        authorizedBy: "Janek",
        guestName: "Janek Sherwell",
        reason: "Ergonomic impactful portal",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 43,
        details: "Persevering fresh-thinking matrix",
      },
      {
        code: "C5",
        roomNumber: 64,
        details: "Proactive cohesive budgetary management",
      },
      { code: "HK", roomNumber: 89, details: "Optional 24/7 monitoring" },
    ],
    revenueData: [
      { total: "$10805.44", group: "$276.87", company: "$1298.42" },
    ],
    roomData: [
      {
        total: 19,
        company: 4,
        outOfOrder: 2,
        stayOver: 10,
        arrivals: 36,
        departures: 78,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Carmina",
        guestName: "Carmina Larraway",
        reason: "Sharable mission-critical model",
      },
      {
        authorizedBy: "Hertha",
        guestName: "Hertha Stickel",
        reason: "Monitored non-volatile installation",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$5941.52", group: "$1098.73", company: "$2045.35" },
    ],
    roomData: [
      {
        total: 10,
        company: 6,
        outOfOrder: 4,
        stayOver: 31,
        arrivals: 28,
        departures: 8,
      },
    ],
  },
  {
    groupData: [
      { name: "Schimmel-Davis", roomCount: 16, revenue: "$104.29" },
      { name: "Howell-Torp", roomCount: 25, revenue: "$438.18" },
      { name: "Nolan and Sons", roomCount: 26, revenue: "$405.45" },
      { name: "Osinski Inc", roomCount: 48, revenue: "$215.48" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Gwynne",
        guestName: "Gwynne Zahor",
        reason: "User-centric grid-enabled alliance",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 26, details: "Secured systemic algorithm" },
      { code: "C5", roomNumber: 62, details: "Multi-layered static website" },
    ],
    revenueData: [{ total: "$9250.00", group: "$588.10", company: "$1601.54" }],
    roomData: [
      {
        total: 43,
        company: 10,
        outOfOrder: 10,
        stayOver: 18,
        arrivals: 38,
        departures: 70,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Reinald",
        guestName: "Reinald Grimestone",
        reason: "Persevering background hardware",
      },
      {
        authorizedBy: "Lincoln",
        guestName: "Lincoln Aberdalgy",
        reason: "Universal cohesive standardization",
      },
      {
        authorizedBy: "Monti",
        guestName: "Monti Batt",
        reason: "Universal secondary task-force",
      },
      {
        authorizedBy: "Malorie",
        guestName: "Malorie Pain",
        reason: "Multi-layered well-modulated collaboration",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 67, details: "Organized value-added approach" },
    ],
    revenueData: [
      { total: "$18009.99", group: "$1897.49", company: "$191.63" },
    ],
    roomData: [
      {
        total: 18,
        company: 0,
        outOfOrder: 0,
        stayOver: 17,
        arrivals: 43,
        departures: 89,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Batholomew",
        guestName: "Batholomew Nornasell",
        reason: "Quality-focused reciprocal protocol",
      },
      {
        authorizedBy: "Dahlia",
        guestName: "Dahlia Seiler",
        reason: "Implemented leading edge local area network",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 95,
        details: "Customizable heuristic complexity",
      },
      {
        code: "C5",
        roomNumber: 42,
        details: "Configurable motivating middleware",
      },
      {
        code: "C5",
        roomNumber: 66,
        details: "User-centric system-worthy data-warehouse",
      },
      {
        code: "HK",
        roomNumber: 88,
        details: "Implemented solution-oriented collaboration",
      },
    ],
    revenueData: [
      { total: "$17369.21", group: "$211.18", company: "$1993.71" },
    ],
    roomData: [
      {
        total: 96,
        company: 7,
        outOfOrder: 10,
        stayOver: 4,
        arrivals: 59,
        departures: 34,
      },
    ],
  },
  {
    groupData: [{ name: "Senger Inc", roomCount: 31, revenue: "$322.35" }],
    compRoomInfo: [
      {
        authorizedBy: "Valentin",
        guestName: "Valentin Gainsboro",
        reason: "Front-line methodical orchestration",
      },
      {
        authorizedBy: "Jacynth",
        guestName: "Jacynth Firth",
        reason: "Fundamental fresh-thinking interface",
      },
      {
        authorizedBy: "Stan",
        guestName: "Stan Barus",
        reason: "Progressive client-server collaboration",
      },
      {
        authorizedBy: "Martelle",
        guestName: "Martelle Greenroa",
        reason: "Persevering directional Graphical User Interface",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 40, details: "Fundamental heuristic success" },
      {
        code: "C5",
        roomNumber: 69,
        details: "Versatile grid-enabled encryption",
      },
      {
        code: "C5",
        roomNumber: 70,
        details: "Exclusive motivating initiative",
      },
      {
        code: "C5",
        roomNumber: 88,
        details: "Diverse 24 hour Graphic Interface",
      },
    ],
    revenueData: [
      { total: "$15993.64", group: "$1480.92", company: "$2540.48" },
    ],
    roomData: [
      {
        total: 12,
        company: 3,
        outOfOrder: 10,
        stayOver: 28,
        arrivals: 51,
        departures: 90,
      },
    ],
  },
  {
    groupData: [
      { name: "Nicolas-Okuneva", roomCount: 47, revenue: "$394.61" },
      { name: "Witting Group", roomCount: 11, revenue: "$128.09" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Nial",
        guestName: "Nial Summerskill",
        reason: "Multi-channelled zero administration website",
      },
      {
        authorizedBy: "Maryann",
        guestName: "Maryann Johantges",
        reason: "Re-contextualized motivating encryption",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 77, details: "Seamless actuating portal" },
    ],
    revenueData: [
      { total: "$9120.73", group: "$1060.16", company: "$1407.51" },
    ],
    roomData: [
      {
        total: 68,
        company: 2,
        outOfOrder: 8,
        stayOver: 16,
        arrivals: 51,
        departures: 91,
      },
    ],
  },
  {
    groupData: [
      { name: "Purdy Group", roomCount: 2, revenue: "$368.78" },
      { name: "Hoppe, Ernser and Kerluke", roomCount: 2, revenue: "$143.32" },
      { name: "Stiedemann LLC", roomCount: 20, revenue: "$285.42" },
      { name: "Borer Inc", roomCount: 18, revenue: "$295.53" },
      { name: "Kuhlman-Harvey", roomCount: 25, revenue: "$210.93" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ulrike",
        guestName: "Ulrike Moverley",
        reason: "Pre-emptive even-keeled secured line",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 55, details: "Extended hybrid secured line" },
      { code: "HK", roomNumber: 38, details: "Streamlined optimal throughput" },
    ],
    revenueData: [{ total: "$6868.53", group: "$694.28", company: "$1490.73" }],
    roomData: [
      {
        total: 38,
        company: 5,
        outOfOrder: 0,
        stayOver: 4,
        arrivals: 11,
        departures: 85,
      },
    ],
  },
  {
    groupData: [
      { name: "Hamill, Gerhold and Cremin", roomCount: 27, revenue: "$185.14" },
      { name: "Hyatt, Wuckert and Ledner", roomCount: 50, revenue: "$229.87" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Bucky",
        guestName: "Bucky Vaney",
        reason: "Public-key encompassing strategy",
      },
      {
        authorizedBy: "Laverne",
        guestName: "Laverne Dulany",
        reason: "Virtual motivating productivity",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 59,
        details: "Persevering encompassing concept",
      },
      {
        code: "HK",
        roomNumber: 73,
        details: "Synchronised methodical firmware",
      },
      {
        code: "C5",
        roomNumber: 24,
        details: "Managed zero administration forecast",
      },
      {
        code: "HK",
        roomNumber: 22,
        details: "Triple-buffered explicit internet solution",
      },
      { code: "HK", roomNumber: 27, details: "Sharable systematic moratorium" },
    ],
    revenueData: [
      { total: "$15489.64", group: "$1361.53", company: "$794.87" },
    ],
    roomData: [
      {
        total: 57,
        company: 2,
        outOfOrder: 6,
        stayOver: 44,
        arrivals: 72,
        departures: 16,
      },
    ],
  },
  {
    groupData: [
      { name: "Zieme, Renner and Corwin", roomCount: 15, revenue: "$158.85" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Happy",
        guestName: "Happy McAvin",
        reason: "Proactive encompassing definition",
      },
      {
        authorizedBy: "Thain",
        guestName: "Thain Roobottom",
        reason: "Right-sized real-time collaboration",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 16,
        details: "Inverse attitude-oriented workforce",
      },
      { code: "C5", roomNumber: 15, details: "Ergonomic homogeneous concept" },
      { code: "HK", roomNumber: 39, details: "Persistent dynamic algorithm" },
      {
        code: "HK",
        roomNumber: 52,
        details: "Multi-layered background service-desk",
      },
    ],
    revenueData: [
      { total: "$18923.99", group: "$1929.10", company: "$2790.74" },
    ],
    roomData: [
      {
        total: 100,
        company: 2,
        outOfOrder: 9,
        stayOver: 35,
        arrivals: 27,
        departures: 50,
      },
    ],
  },
  {
    groupData: [
      { name: "Carroll, Grady and Treutel", roomCount: 40, revenue: "$238.62" },
      { name: "Kreiger-Volkman", roomCount: 41, revenue: "$367.01" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Correy",
        guestName: "Correy Lowrance",
        reason: "User-centric maximized functionalities",
      },
      {
        authorizedBy: "Rahal",
        guestName: "Rahal Brixey",
        reason: "Automated systemic migration",
      },
      {
        authorizedBy: "Morena",
        guestName: "Morena Stoffer",
        reason: "Assimilated reciprocal support",
      },
      {
        authorizedBy: "Gussi",
        guestName: "Gussi Cescot",
        reason: "Switchable client-server capability",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$10827.19", group: "$823.04", company: "$2483.65" },
    ],
    roomData: [
      {
        total: 55,
        company: 8,
        outOfOrder: 9,
        stayOver: 48,
        arrivals: 62,
        departures: 47,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Dorris",
        guestName: "Dorris Branche",
        reason: "Cross-platform user-facing protocol",
      },
      {
        authorizedBy: "Wit",
        guestName: "Wit Lucio",
        reason: "Integrated motivating collaboration",
      },
      {
        authorizedBy: "Ellswerth",
        guestName: "Ellswerth Perkins",
        reason: "Adaptive zero tolerance protocol",
      },
      {
        authorizedBy: "Dacia",
        guestName: "Dacia Reasce",
        reason: "Visionary regional conglomeration",
      },
      {
        authorizedBy: "Mariele",
        guestName: "Mariele Diego",
        reason: "Intuitive multimedia knowledge user",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 55,
        details: "Self-enabling static flexibility",
      },
      {
        code: "C5",
        roomNumber: 38,
        details: "Team-oriented context-sensitive support",
      },
      {
        code: "HK",
        roomNumber: 49,
        details: "Implemented full-range projection",
      },
    ],
    revenueData: [
      { total: "$13603.55", group: "$839.97", company: "$1729.20" },
    ],
    roomData: [
      {
        total: 11,
        company: 5,
        outOfOrder: 6,
        stayOver: 26,
        arrivals: 61,
        departures: 63,
      },
    ],
  },
  {
    groupData: [
      { name: "Donnelly-Volkman", roomCount: 40, revenue: "$435.92" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jozef",
        guestName: "Jozef Balaizot",
        reason: "Devolved holistic service-desk",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$12522.59", group: "$542.49", company: "$1640.32" },
    ],
    roomData: [
      {
        total: 71,
        company: 3,
        outOfOrder: 6,
        stayOver: 46,
        arrivals: 94,
        departures: 81,
      },
    ],
  },
  {
    groupData: [
      { name: "Wolf-Orn", roomCount: 9, revenue: "$260.47" },
      { name: "Casper, Crist and Mueller", roomCount: 31, revenue: "$448.66" },
      { name: "Stiedemann Inc", roomCount: 24, revenue: "$176.07" },
      { name: "Windler-Baumbach", roomCount: 38, revenue: "$156.27" },
      { name: "Thompson Group", roomCount: 17, revenue: "$110.93" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Klarrisa",
        guestName: "Klarrisa Episcopio",
        reason: "Automated explicit flexibility",
      },
      {
        authorizedBy: "Othello",
        guestName: "Othello Ondrich",
        reason: "Organic full-range orchestration",
      },
      {
        authorizedBy: "Annamaria",
        guestName: "Annamaria Eat",
        reason: "Fully-configurable intangible task-force",
      },
      {
        authorizedBy: "Madge",
        guestName: "Madge Churchman",
        reason: "Decentralized multi-tasking forecast",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$5107.40", group: "$822.02", company: "$2929.76" }],
    roomData: [
      {
        total: 31,
        company: 2,
        outOfOrder: 7,
        stayOver: 50,
        arrivals: 58,
        departures: 60,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Baumbach, Considine and Goyette",
        roomCount: 35,
        revenue: "$292.37",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Codi",
        guestName: "Codi Seagrove",
        reason: "Open-architected uniform productivity",
      },
      {
        authorizedBy: "Rob",
        guestName: "Rob Kettell",
        reason: "Enterprise-wide stable interface",
      },
      {
        authorizedBy: "Dom",
        guestName: "Dom Gathercoal",
        reason: "Open-architected stable conglomeration",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 28,
        details: "Innovative even-keeled structure",
      },
      {
        code: "C5",
        roomNumber: 42,
        details: "Integrated reciprocal interface",
      },
    ],
    revenueData: [
      { total: "$14007.90", group: "$450.29", company: "$1935.18" },
    ],
    roomData: [
      {
        total: 83,
        company: 9,
        outOfOrder: 0,
        stayOver: 21,
        arrivals: 69,
        departures: 42,
      },
    ],
  },
  {
    groupData: [
      { name: "Medhurst, Fay and Ullrich", roomCount: 15, revenue: "$269.33" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dael",
        guestName: "Dael Restall",
        reason: "Seamless mission-critical Graphic Interface",
      },
      {
        authorizedBy: "Natka",
        guestName: "Natka Barwise",
        reason: "Extended maximized knowledge base",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 47,
        details: "Customer-focused modular intranet",
      },
      { code: "C5", roomNumber: 1, details: "Synergized full-range ability" },
      {
        code: "HK",
        roomNumber: 56,
        details: "Advanced 6th generation framework",
      },
    ],
    revenueData: [
      { total: "$16908.74", group: "$1180.77", company: "$343.09" },
    ],
    roomData: [
      {
        total: 62,
        company: 0,
        outOfOrder: 7,
        stayOver: 10,
        arrivals: 32,
        departures: 1,
      },
    ],
  },
  {
    groupData: [
      { name: "Baumbach Group", roomCount: 5, revenue: "$205.13" },
      { name: "D'Amore, Fritsch and Huels", roomCount: 26, revenue: "$163.36" },
      { name: "Muller Group", roomCount: 7, revenue: "$458.11" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ambrosi",
        guestName: "Ambrosi Haslock",
        reason: "Mandatory logistical service-desk",
      },
      {
        authorizedBy: "Melloney",
        guestName: "Melloney Tapsell",
        reason: "Fully-configurable needs-based focus group",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 37, details: "Expanded uniform frame" },
      { code: "C5", roomNumber: 95, details: "Customizable hybrid complexity" },
      {
        code: "C5",
        roomNumber: 20,
        details: "Programmable motivating challenge",
      },
      { code: "HK", roomNumber: 77, details: "Centralized secondary hub" },
      {
        code: "C5",
        roomNumber: 0,
        details: "Customer-focused web-enabled conglomeration",
      },
    ],
    revenueData: [
      { total: "$11360.54", group: "$1273.66", company: "$2958.98" },
    ],
    roomData: [
      {
        total: 71,
        company: 9,
        outOfOrder: 9,
        stayOver: 40,
        arrivals: 31,
        departures: 2,
      },
    ],
  },
  {
    groupData: [{ name: "Boyle-Kohler", roomCount: 1, revenue: "$112.15" }],
    compRoomInfo: [
      {
        authorizedBy: "Dynah",
        guestName: "Dynah Meert",
        reason: "Optimized heuristic local area network",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 95,
        details: "Persistent leading edge data-warehouse",
      },
      {
        code: "HK",
        roomNumber: 67,
        details: "Customer-focused systematic functionalities",
      },
      {
        code: "C5",
        roomNumber: 83,
        details: "Secured 4th generation matrices",
      },
      { code: "HK", roomNumber: 66, details: "Inverse leading edge support" },
    ],
    revenueData: [
      { total: "$12489.02", group: "$595.28", company: "$1647.51" },
    ],
    roomData: [
      {
        total: 32,
        company: 3,
        outOfOrder: 6,
        stayOver: 47,
        arrivals: 34,
        departures: 84,
      },
    ],
  },
  {
    groupData: [{ name: "Considine Group", roomCount: 45, revenue: "$476.44" }],
    compRoomInfo: [
      {
        authorizedBy: "Ray",
        guestName: "Ray Lyon",
        reason: "Synchronised 5th generation throughput",
      },
      {
        authorizedBy: "Florian",
        guestName: "Florian Mapowder",
        reason: "Phased tertiary neural-net",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 43,
        details: "Seamless asynchronous implementation",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "Sharable bi-directional moratorium",
      },
    ],
    revenueData: [{ total: "$9269.84", group: "$217.29", company: "$1160.22" }],
    roomData: [
      {
        total: 100,
        company: 3,
        outOfOrder: 0,
        stayOver: 29,
        arrivals: 20,
        departures: 43,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Edna",
        guestName: "Edna Snellman",
        reason: "Profound intermediate framework",
      },
      {
        authorizedBy: "Cathe",
        guestName: "Cathe Burnham",
        reason: "Cloned transitional matrices",
      },
      {
        authorizedBy: "Forster",
        guestName: "Forster Cheetam",
        reason: "Virtual intermediate intranet",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 53,
        details: "Right-sized 24 hour artificial intelligence",
      },
      {
        code: "HK",
        roomNumber: 47,
        details: "Multi-channelled grid-enabled open architecture",
      },
    ],
    revenueData: [
      { total: "$7228.68", group: "$1372.29", company: "$1561.48" },
    ],
    roomData: [
      {
        total: 41,
        company: 9,
        outOfOrder: 5,
        stayOver: 42,
        arrivals: 24,
        departures: 56,
      },
    ],
  },
  {
    groupData: [
      { name: "Schiller-Wuckert", roomCount: 39, revenue: "$301.62" },
      {
        name: "Buckridge, Franecki and Rutherford",
        roomCount: 47,
        revenue: "$168.08",
      },
      { name: "Grady LLC", roomCount: 44, revenue: "$411.10" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Troy",
        guestName: "Troy Chalfain",
        reason: "Decentralized holistic flexibility",
      },
      {
        authorizedBy: "Bettye",
        guestName: "Bettye Henrionot",
        reason: "Universal interactive migration",
      },
      {
        authorizedBy: "Ethan",
        guestName: "Ethan Fosbraey",
        reason: "Progressive scalable Graphic Interface",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 1, details: "Pre-emptive full-range hub" },
    ],
    revenueData: [
      { total: "$5444.08", group: "$1843.11", company: "$1176.54" },
    ],
    roomData: [
      {
        total: 25,
        company: 9,
        outOfOrder: 6,
        stayOver: 12,
        arrivals: 76,
        departures: 85,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Runolfsson, Armstrong and Kerluke",
        roomCount: 47,
        revenue: "$307.64",
      },
      { name: "Kshlerin Group", roomCount: 48, revenue: "$376.25" },
      { name: "Larkin LLC", roomCount: 47, revenue: "$181.94" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Sherye",
        guestName: "Sherye Godsafe",
        reason: "Integrated leading edge attitude",
      },
      {
        authorizedBy: "Cora",
        guestName: "Cora Long",
        reason: "Polarised grid-enabled hierarchy",
      },
      {
        authorizedBy: "Murdoch",
        guestName: "Murdoch Bowerman",
        reason: "Mandatory didactic solution",
      },
      {
        authorizedBy: "Shirl",
        guestName: "Shirl Bousler",
        reason: "Adaptive analyzing concept",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 72,
        details: "Ergonomic zero tolerance concept",
      },
      {
        code: "HK",
        roomNumber: 16,
        details: "Cross-platform bottom-line toolset",
      },
    ],
    revenueData: [
      { total: "$11468.39", group: "$1572.26", company: "$679.10" },
    ],
    roomData: [
      {
        total: 75,
        company: 8,
        outOfOrder: 9,
        stayOver: 36,
        arrivals: 60,
        departures: 75,
      },
    ],
  },
  {
    groupData: [
      { name: "Klein, Cremin and Kuhic", roomCount: 47, revenue: "$374.65" },
      {
        name: "Kohler, Cummerata and Crona",
        roomCount: 28,
        revenue: "$179.93",
      },
      { name: "Abshire Group", roomCount: 27, revenue: "$100.12" },
      { name: "Ferry Group", roomCount: 28, revenue: "$400.63" },
      { name: "Lindgren Inc", roomCount: 49, revenue: "$243.26" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Duffie",
        guestName: "Duffie Tesimon",
        reason: "Reactive well-modulated parallelism",
      },
      {
        authorizedBy: "Andrey",
        guestName: "Andrey Hulstrom",
        reason: "Self-enabling high-level data-warehouse",
      },
      {
        authorizedBy: "Ola",
        guestName: "Ola Sellan",
        reason: "Stand-alone incremental policy",
      },
      {
        authorizedBy: "Binny",
        guestName: "Binny Melton",
        reason: "Devolved needs-based Graphic Interface",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$9404.78", group: "$486.47", company: "$697.43" }],
    roomData: [
      {
        total: 53,
        company: 0,
        outOfOrder: 1,
        stayOver: 6,
        arrivals: 52,
        departures: 73,
      },
    ],
  },
  {
    groupData: [
      { name: "Cremin-Gerlach", roomCount: 25, revenue: "$494.59" },
      {
        name: "Pacocha, Schultz and Breitenberg",
        roomCount: 17,
        revenue: "$313.18",
      },
      { name: "Hickle and Sons", roomCount: 1, revenue: "$333.04" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Kelly",
        guestName: "Kelly Daintith",
        reason: "Streamlined 4th generation help-desk",
      },
      {
        authorizedBy: "Claudette",
        guestName: "Claudette Putten",
        reason: "Public-key asynchronous strategy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 21,
        details: "Enterprise-wide methodical contingency",
      },
      { code: "HK", roomNumber: 35, details: "Diverse global algorithm" },
      {
        code: "HK",
        roomNumber: 72,
        details: "Diverse 3rd generation service-desk",
      },
      {
        code: "C5",
        roomNumber: 39,
        details: "Upgradable fresh-thinking flexibility",
      },
    ],
    revenueData: [
      { total: "$15740.18", group: "$124.21", company: "$2738.07" },
    ],
    roomData: [
      {
        total: 18,
        company: 4,
        outOfOrder: 6,
        stayOver: 24,
        arrivals: 51,
        departures: 40,
      },
    ],
  },
  {
    groupData: [
      { name: "Rosenbaum Inc", roomCount: 40, revenue: "$229.88" },
      { name: "Gutmann-Schmeler", roomCount: 32, revenue: "$498.37" },
      { name: "Schmeler and Sons", roomCount: 40, revenue: "$435.91" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ade",
        guestName: "Ade Braddon",
        reason: "Streamlined human-resource customer loyalty",
      },
      {
        authorizedBy: "Adrea",
        guestName: "Adrea Bowfin",
        reason: "User-centric disintermediate methodology",
      },
      {
        authorizedBy: "Diego",
        guestName: "Diego Pennock",
        reason: "Phased incremental extranet",
      },
      {
        authorizedBy: "Tarra",
        guestName: "Tarra Getch",
        reason: "Visionary systemic challenge",
      },
      {
        authorizedBy: "Modesta",
        guestName: "Modesta Carrett",
        reason: "Synergized local product",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 99, details: "Pre-emptive eco-centric frame" },
      { code: "C5", roomNumber: 3, details: "Advanced secondary protocol" },
      {
        code: "C5",
        roomNumber: 70,
        details: "Synergistic global infrastructure",
      },
    ],
    revenueData: [
      { total: "$19954.96", group: "$241.74", company: "$1752.74" },
    ],
    roomData: [
      {
        total: 65,
        company: 6,
        outOfOrder: 8,
        stayOver: 22,
        arrivals: 96,
        departures: 90,
      },
    ],
  },
  {
    groupData: [
      { name: "Turner-Terry", roomCount: 26, revenue: "$260.66" },
      { name: "Jacobi Group", roomCount: 14, revenue: "$215.38" },
      { name: "Brakus Inc", roomCount: 18, revenue: "$366.42" },
      {
        name: "Ernser, Gerhold and Tremblay",
        roomCount: 28,
        revenue: "$334.11",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Lauraine",
        guestName: "Lauraine Bogue",
        reason: "Team-oriented real-time migration",
      },
      {
        authorizedBy: "Estelle",
        guestName: "Estelle Finders",
        reason: "Self-enabling intangible archive",
      },
      {
        authorizedBy: "Reeba",
        guestName: "Reeba Rijkeseis",
        reason: "Open-architected full-range paradigm",
      },
      {
        authorizedBy: "Rebekah",
        guestName: "Rebekah Yesenin",
        reason: "Customizable leading edge flexibility",
      },
      {
        authorizedBy: "Phil",
        guestName: "Phil Witheford",
        reason: "Open-architected global pricing structure",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 27, details: "Progressive static moderator" },
      { code: "C5", roomNumber: 82, details: "Diverse analyzing moderator" },
    ],
    revenueData: [
      { total: "$9129.57", group: "$1364.29", company: "$2741.86" },
    ],
    roomData: [
      {
        total: 56,
        company: 8,
        outOfOrder: 9,
        stayOver: 43,
        arrivals: 41,
        departures: 22,
      },
    ],
  },
  {
    groupData: [
      { name: "Hayes, Ratke and Lubowitz", roomCount: 4, revenue: "$333.52" },
      { name: "Kovacek-Huel", roomCount: 43, revenue: "$346.35" },
      { name: "Carter, Huel and Mraz", roomCount: 29, revenue: "$257.16" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Park",
        guestName: "Park Bonhomme",
        reason: "Intuitive national groupware",
      },
      {
        authorizedBy: "Sue",
        guestName: "Sue Dungay",
        reason: "Horizontal multi-state utilisation",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 46, details: "Integrated didactic capability" },
      { code: "HK", roomNumber: 42, details: "Robust didactic extranet" },
      {
        code: "HK",
        roomNumber: 96,
        details: "Profound 5th generation functionalities",
      },
      {
        code: "C5",
        roomNumber: 71,
        details: "Synergistic system-worthy service-desk",
      },
    ],
    revenueData: [{ total: "$7991.45", group: "$864.64", company: "$2554.06" }],
    roomData: [
      {
        total: 72,
        company: 10,
        outOfOrder: 0,
        stayOver: 21,
        arrivals: 50,
        departures: 87,
      },
    ],
  },
  {
    groupData: [{ name: "Durgan and Sons", roomCount: 48, revenue: "$355.34" }],
    compRoomInfo: [
      {
        authorizedBy: "Jerrie",
        guestName: "Jerrie Buesnel",
        reason: "Quality-focused explicit challenge",
      },
      {
        authorizedBy: "Niko",
        guestName: "Niko Smelley",
        reason: "Cross-group 24/7 framework",
      },
      {
        authorizedBy: "Erinn",
        guestName: "Erinn Luckhurst",
        reason: "Front-line optimal synergy",
      },
      {
        authorizedBy: "Bill",
        guestName: "Bill Mac Giany",
        reason: "Multi-tiered radical algorithm",
      },
      {
        authorizedBy: "Ricoriki",
        guestName: "Ricoriki Cossans",
        reason: "Enhanced systemic implementation",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 82, details: "Mandatory uniform secured line" },
      {
        code: "HK",
        roomNumber: 1,
        details: "Persistent object-oriented time-frame",
      },
      {
        code: "C5",
        roomNumber: 68,
        details: "Business-focused fault-tolerant access",
      },
      {
        code: "C5",
        roomNumber: 49,
        details: "Upgradable interactive moratorium",
      },
      {
        code: "HK",
        roomNumber: 33,
        details: "Visionary neutral conglomeration",
      },
    ],
    revenueData: [
      { total: "$14330.54", group: "$1971.52", company: "$2508.68" },
    ],
    roomData: [
      {
        total: 43,
        company: 9,
        outOfOrder: 0,
        stayOver: 40,
        arrivals: 23,
        departures: 69,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Gusikowski, Lemke and Wehner",
        roomCount: 35,
        revenue: "$372.19",
      },
      { name: "Kemmer-Champlin", roomCount: 27, revenue: "$393.73" },
      { name: "Veum and Sons", roomCount: 9, revenue: "$332.46" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dalenna",
        guestName: "Dalenna Gatus",
        reason: "Down-sized mission-critical migration",
      },
      {
        authorizedBy: "Seumas",
        guestName: "Seumas Stegers",
        reason: "Secured responsive pricing structure",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$12943.98", group: "$1273.56", company: "$2365.52" },
    ],
    roomData: [
      {
        total: 98,
        company: 1,
        outOfOrder: 5,
        stayOver: 47,
        arrivals: 9,
        departures: 60,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Wrennie",
        guestName: "Wrennie Kettlesting",
        reason: "Up-sized methodical frame",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 59,
        details: "Organized composite installation",
      },
      {
        code: "C5",
        roomNumber: 99,
        details: "Multi-lateral bi-directional utilisation",
      },
    ],
    revenueData: [
      { total: "$16278.73", group: "$1619.16", company: "$2380.38" },
    ],
    roomData: [
      {
        total: 39,
        company: 2,
        outOfOrder: 9,
        stayOver: 32,
        arrivals: 66,
        departures: 52,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Ewart",
        guestName: "Ewart Cave",
        reason: "Right-sized background database",
      },
      {
        authorizedBy: "Simonne",
        guestName: "Simonne Theriot",
        reason: "Intuitive uniform pricing structure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 65,
        details: "Configurable leading edge contingency",
      },
      {
        code: "HK",
        roomNumber: 53,
        details: "Balanced clear-thinking project",
      },
      {
        code: "C5",
        roomNumber: 100,
        details: "Optional impactful installation",
      },
      {
        code: "HK",
        roomNumber: 100,
        details: "Pre-emptive tertiary migration",
      },
    ],
    revenueData: [
      { total: "$7959.29", group: "$1374.15", company: "$1074.80" },
    ],
    roomData: [
      {
        total: 66,
        company: 8,
        outOfOrder: 9,
        stayOver: 35,
        arrivals: 4,
        departures: 78,
      },
    ],
  },
  {
    groupData: [
      { name: "Reichel and Sons", roomCount: 34, revenue: "$443.29" },
      {
        name: "Mertz, Okuneva and Ankunding",
        roomCount: 13,
        revenue: "$133.73",
      },
      { name: "Hahn, Sanford and Rath", roomCount: 40, revenue: "$133.78" },
      { name: "Crooks, Green and Grant", roomCount: 37, revenue: "$218.80" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Chan",
        guestName: "Chan Chainey",
        reason: "Streamlined transitional toolset",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 11, details: "Virtual multimedia flexibility" },
      { code: "C5", roomNumber: 60, details: "Organic bifurcated workforce" },
      {
        code: "HK",
        roomNumber: 50,
        details: "Advanced analyzing internet solution",
      },
    ],
    revenueData: [
      { total: "$17837.76", group: "$1089.80", company: "$571.36" },
    ],
    roomData: [
      {
        total: 42,
        company: 0,
        outOfOrder: 9,
        stayOver: 47,
        arrivals: 64,
        departures: 54,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Bryant",
        guestName: "Bryant Ivons",
        reason: "Exclusive homogeneous concept",
      },
      {
        authorizedBy: "Gerladina",
        guestName: "Gerladina Prott",
        reason: "User-centric actuating utilisation",
      },
      {
        authorizedBy: "Bell",
        guestName: "Bell M'Barron",
        reason: "Function-based upward-trending core",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 0,
        details: "Persistent 3rd generation internet solution",
      },
    ],
    revenueData: [
      { total: "$11910.03", group: "$816.47", company: "$1732.02" },
    ],
    roomData: [
      {
        total: 50,
        company: 0,
        outOfOrder: 8,
        stayOver: 43,
        arrivals: 41,
        departures: 80,
      },
    ],
  },
  {
    groupData: [
      { name: "Spencer-Predovic", roomCount: 27, revenue: "$338.00" },
      { name: "Oberbrunner Inc", roomCount: 27, revenue: "$489.26" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Fabiano",
        guestName: "Fabiano Legonidec",
        reason: "Diverse encompassing conglomeration",
      },
      {
        authorizedBy: "Iseabal",
        guestName: "Iseabal Kimbly",
        reason: "Focused multimedia interface",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 94, details: "Open-source even-keeled access" },
      {
        code: "HK",
        roomNumber: 85,
        details: "Customizable fresh-thinking contingency",
      },
      {
        code: "C5",
        roomNumber: 45,
        details: "Enterprise-wide national interface",
      },
      {
        code: "C5",
        roomNumber: 77,
        details: "Balanced intermediate collaboration",
      },
      {
        code: "C5",
        roomNumber: 2,
        details: "Fundamental value-added artificial intelligence",
      },
    ],
    revenueData: [
      { total: "$17307.49", group: "$1150.91", company: "$916.64" },
    ],
    roomData: [
      {
        total: 60,
        company: 1,
        outOfOrder: 0,
        stayOver: 48,
        arrivals: 34,
        departures: 38,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Reinger, Denesik and Murphy",
        roomCount: 39,
        revenue: "$457.71",
      },
      { name: "Koss LLC", roomCount: 3, revenue: "$184.85" },
      { name: "Streich-Pouros", roomCount: 46, revenue: "$397.36" },
      { name: "Stokes Inc", roomCount: 12, revenue: "$170.94" },
      { name: "Steuber, Rohan and Ledner", roomCount: 8, revenue: "$352.57" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Linnie",
        guestName: "Linnie McDougald",
        reason: "Function-based multi-tasking instruction set",
      },
      {
        authorizedBy: "Ferdie",
        guestName: "Ferdie Alesbrook",
        reason: "Customizable bi-directional hardware",
      },
      {
        authorizedBy: "Justus",
        guestName: "Justus Wardley",
        reason: "Reverse-engineered maximized collaboration",
      },
      {
        authorizedBy: "Bryn",
        guestName: "Bryn Paumier",
        reason: "User-centric directional portal",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$7322.83", group: "$659.84", company: "$1260.63" }],
    roomData: [
      {
        total: 70,
        company: 4,
        outOfOrder: 4,
        stayOver: 26,
        arrivals: 0,
        departures: 96,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Boyle, Kuvalis and McKenzie",
        roomCount: 40,
        revenue: "$173.72",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Lavena",
        guestName: "Lavena Hartman",
        reason: "Optional systematic knowledge base",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 83, details: "Cloned global groupware" },
      { code: "HK", roomNumber: 90, details: "Networked homogeneous matrices" },
      {
        code: "HK",
        roomNumber: 60,
        details: "Secured zero administration circuit",
      },
      { code: "C5", roomNumber: 55, details: "Inverse 5th generation toolset" },
      {
        code: "HK",
        roomNumber: 4,
        details: "Persistent fault-tolerant product",
      },
    ],
    revenueData: [{ total: "$7213.87", group: "$319.74", company: "$901.92" }],
    roomData: [
      {
        total: 85,
        company: 4,
        outOfOrder: 5,
        stayOver: 12,
        arrivals: 38,
        departures: 57,
      },
    ],
  },
  {
    groupData: [
      { name: "Bogan, Willms and Goldner", roomCount: 50, revenue: "$103.13" },
      { name: "Monahan Group", roomCount: 30, revenue: "$365.65" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Vallie",
        guestName: "Vallie Jakubowski",
        reason: "Upgradable analyzing forecast",
      },
      {
        authorizedBy: "Raleigh",
        guestName: "Raleigh Shuttlewood",
        reason: "Profit-focused radical website",
      },
      {
        authorizedBy: "Joannes",
        guestName: "Joannes Cassius",
        reason: "Virtual explicit groupware",
      },
      {
        authorizedBy: "Bonnie",
        guestName: "Bonnie Devlin",
        reason: "Reduced static synergy",
      },
      {
        authorizedBy: "Jodie",
        guestName: "Jodie Munro",
        reason: "Optional discrete interface",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 19,
        details: "Down-sized encompassing support",
      },
      { code: "C5", roomNumber: 76, details: "Implemented client-driven hub" },
    ],
    revenueData: [
      { total: "$15634.03", group: "$262.06", company: "$1424.44" },
    ],
    roomData: [
      {
        total: 16,
        company: 7,
        outOfOrder: 10,
        stayOver: 3,
        arrivals: 99,
        departures: 63,
      },
    ],
  },
  {
    groupData: [{ name: "Yost-McLaughlin", roomCount: 46, revenue: "$458.86" }],
    compRoomInfo: [
      {
        authorizedBy: "Tabor",
        guestName: "Tabor Densham",
        reason: "Multi-channelled responsive middleware",
      },
      {
        authorizedBy: "Hermia",
        guestName: "Hermia Grover",
        reason: "Managed client-server service-desk",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "Balanced transitional knowledge user",
      },
    ],
    revenueData: [
      { total: "$15063.37", group: "$1836.69", company: "$1117.84" },
    ],
    roomData: [
      {
        total: 28,
        company: 6,
        outOfOrder: 9,
        stayOver: 0,
        arrivals: 2,
        departures: 29,
      },
    ],
  },
  {
    groupData: [
      { name: "Cruickshank-Effertz", roomCount: 15, revenue: "$204.14" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Odilia",
        guestName: "Odilia Hercock",
        reason: "Organic content-based capability",
      },
      {
        authorizedBy: "Rouvin",
        guestName: "Rouvin Pumphreys",
        reason: "Horizontal cohesive service-desk",
      },
      {
        authorizedBy: "Lewiss",
        guestName: "Lewiss Martynikhin",
        reason: "Quality-focused tangible groupware",
      },
      {
        authorizedBy: "Orbadiah",
        guestName: "Orbadiah Macourek",
        reason: "Open-source content-based interface",
      },
      {
        authorizedBy: "Claybourne",
        guestName: "Claybourne O'Hara",
        reason: "Multi-tiered 6th generation neural-net",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 56,
        details: "Monitored interactive focus group",
      },
      { code: "C5", roomNumber: 74, details: "Switchable bottom-line model" },
      {
        code: "C5",
        roomNumber: 28,
        details: "Mandatory context-sensitive migration",
      },
      { code: "C5", roomNumber: 19, details: "Enhanced static concept" },
      {
        code: "C5",
        roomNumber: 41,
        details: "Managed contextually-based success",
      },
    ],
    revenueData: [
      { total: "$11631.81", group: "$396.72", company: "$2922.36" },
    ],
    roomData: [
      {
        total: 81,
        company: 8,
        outOfOrder: 8,
        stayOver: 13,
        arrivals: 77,
        departures: 13,
      },
    ],
  },
  {
    groupData: [
      { name: "Flatley and Sons", roomCount: 21, revenue: "$227.20" },
      { name: "Keeling LLC", roomCount: 8, revenue: "$111.83" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Catha",
        guestName: "Catha Twiggs",
        reason: "Operative hybrid capacity",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 37, details: "Digitized actuating hardware" },
      {
        code: "C5",
        roomNumber: 77,
        details: "Pre-emptive context-sensitive website",
      },
      { code: "HK", roomNumber: 80, details: "Robust executive website" },
    ],
    revenueData: [
      { total: "$11804.27", group: "$1194.68", company: "$2043.56" },
    ],
    roomData: [
      {
        total: 41,
        company: 7,
        outOfOrder: 10,
        stayOver: 17,
        arrivals: 66,
        departures: 8,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Elsi",
        guestName: "Elsi Czajkowska",
        reason: "User-centric coherent open system",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 23,
        details: "Expanded asynchronous installation",
      },
      {
        code: "HK",
        roomNumber: 78,
        details: "Ameliorated multi-tasking approach",
      },
    ],
    revenueData: [{ total: "$15716.88", group: "$830.32", company: "$656.63" }],
    roomData: [
      {
        total: 73,
        company: 5,
        outOfOrder: 5,
        stayOver: 46,
        arrivals: 11,
        departures: 81,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Ash",
        guestName: "Ash Goathrop",
        reason: "Ameliorated 5th generation access",
      },
      {
        authorizedBy: "Adrian",
        guestName: "Adrian Winsborrow",
        reason: "Grass-roots optimal application",
      },
      {
        authorizedBy: "Isabella",
        guestName: "Isabella Ladewig",
        reason: "Enterprise-wide web-enabled function",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 72,
        details: "Implemented impactful groupware",
      },
      { code: "C5", roomNumber: 44, details: "Automated static concept" },
      {
        code: "C5",
        roomNumber: 20,
        details: "Re-contextualized asymmetric contingency",
      },
      {
        code: "C5",
        roomNumber: 73,
        details: "Phased demand-driven complexity",
      },
    ],
    revenueData: [
      { total: "$6329.95", group: "$1322.67", company: "$2889.19" },
    ],
    roomData: [
      {
        total: 52,
        company: 0,
        outOfOrder: 10,
        stayOver: 43,
        arrivals: 30,
        departures: 29,
      },
    ],
  },
  {
    groupData: [
      { name: "Hoppe-Anderson", roomCount: 30, revenue: "$415.25" },
      { name: "Bailey-McCullough", roomCount: 47, revenue: "$371.52" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Reilly",
        guestName: "Reilly Schulze",
        reason: "Grass-roots stable contingency",
      },
      {
        authorizedBy: "Rutger",
        guestName: "Rutger Kyston",
        reason: "Down-sized intermediate Graphic Interface",
      },
      {
        authorizedBy: "Bernie",
        guestName: "Bernie Scoone",
        reason: "Secured contextually-based project",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 52,
        details: "Object-based user-facing hierarchy",
      },
      {
        code: "C5",
        roomNumber: 73,
        details: "Customer-focused coherent portal",
      },
      {
        code: "HK",
        roomNumber: 69,
        details: "Integrated value-added contingency",
      },
      { code: "HK", roomNumber: 39, details: "Expanded object-oriented hub" },
    ],
    revenueData: [
      { total: "$12191.82", group: "$525.30", company: "$1318.53" },
    ],
    roomData: [
      {
        total: 7,
        company: 1,
        outOfOrder: 10,
        stayOver: 3,
        arrivals: 91,
        departures: 34,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Modestine",
        guestName: "Modestine Boxhill",
        reason: "Switchable composite framework",
      },
      {
        authorizedBy: "Lita",
        guestName: "Lita Dodds",
        reason: "Public-key tangible local area network",
      },
      {
        authorizedBy: "Sheryl",
        guestName: "Sheryl Debold",
        reason: "Reverse-engineered multi-tasking definition",
      },
      {
        authorizedBy: "Wernher",
        guestName: "Wernher Crookston",
        reason: "Profit-focused encompassing open system",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 70, details: "Adaptive 24 hour matrices" },
      { code: "HK", roomNumber: 48, details: "Virtual impactful task-force" },
      { code: "C5", roomNumber: 3, details: "Switchable stable attitude" },
      {
        code: "HK",
        roomNumber: 46,
        details: "Progressive bandwidth-monitored parallelism",
      },
      {
        code: "HK",
        roomNumber: 68,
        details: "Multi-channelled directional paradigm",
      },
    ],
    revenueData: [{ total: "$16937.69", group: "$458.25", company: "$313.44" }],
    roomData: [
      {
        total: 84,
        company: 10,
        outOfOrder: 7,
        stayOver: 24,
        arrivals: 70,
        departures: 12,
      },
    ],
  },
  {
    groupData: [
      { name: "Deckow, Moore and Hegmann", roomCount: 43, revenue: "$297.82" },
      {
        name: "Ondricka, Jenkins and Hoppe",
        roomCount: 16,
        revenue: "$305.10",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Anselma",
        guestName: "Anselma Angrave",
        reason: "Triple-buffered 24/7 customer loyalty",
      },
      {
        authorizedBy: "Brandice",
        guestName: "Brandice Shurlock",
        reason: "Re-engineered mobile moderator",
      },
      {
        authorizedBy: "Bartlet",
        guestName: "Bartlet Klimko",
        reason: "Face to face zero tolerance implementation",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 62,
        details: "Synergized neutral implementation",
      },
    ],
    revenueData: [{ total: "$8818.15", group: "$1199.36", company: "$619.04" }],
    roomData: [
      {
        total: 91,
        company: 7,
        outOfOrder: 2,
        stayOver: 17,
        arrivals: 93,
        departures: 43,
      },
    ],
  },
  {
    groupData: [{ name: "Schulist Group", roomCount: 13, revenue: "$404.40" }],
    compRoomInfo: [
      {
        authorizedBy: "Ranice",
        guestName: "Ranice Talman",
        reason: "Public-key well-modulated model",
      },
      {
        authorizedBy: "Vevay",
        guestName: "Vevay Comerford",
        reason: "Universal hybrid time-frame",
      },
      {
        authorizedBy: "Rickie",
        guestName: "Rickie Abrami",
        reason: "Open-source modular firmware",
      },
      {
        authorizedBy: "Carleton",
        guestName: "Carleton Hrishanok",
        reason: "Optimized content-based analyzer",
      },
      {
        authorizedBy: "Lotti",
        guestName: "Lotti Auletta",
        reason: "Managed encompassing internet solution",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 26,
        details: "Integrated intermediate pricing structure",
      },
      { code: "HK", roomNumber: 40, details: "Reactive asynchronous concept" },
      { code: "HK", roomNumber: 12, details: "Public-key didactic help-desk" },
      { code: "C5", roomNumber: 11, details: "Switchable web-enabled frame" },
    ],
    revenueData: [{ total: "$14733.34", group: "$850.54", company: "$321.45" }],
    roomData: [
      {
        total: 20,
        company: 9,
        outOfOrder: 6,
        stayOver: 21,
        arrivals: 46,
        departures: 86,
      },
    ],
  },
  {
    groupData: [
      { name: "Crist-Schoen", roomCount: 18, revenue: "$352.68" },
      { name: "Dickinson, Marks and Beer", roomCount: 31, revenue: "$340.22" },
      { name: "Rosenbaum-Donnelly", roomCount: 18, revenue: "$151.31" },
      {
        name: "Farrell, Bernhard and Halvorson",
        roomCount: 43,
        revenue: "$374.00",
      },
      { name: "Lemke-Von", roomCount: 33, revenue: "$374.33" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Alfonso",
        guestName: "Alfonso Fullilove",
        reason: "Ameliorated static parallelism",
      },
      {
        authorizedBy: "Dolph",
        guestName: "Dolph MacPhee",
        reason: "Upgradable bi-directional website",
      },
      {
        authorizedBy: "Therine",
        guestName: "Therine Duham",
        reason: "Multi-tiered demand-driven help-desk",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$9882.81", group: "$498.92", company: "$503.49" }],
    roomData: [
      {
        total: 48,
        company: 4,
        outOfOrder: 9,
        stayOver: 24,
        arrivals: 6,
        departures: 92,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Keary",
        guestName: "Keary Panas",
        reason: "Configurable bandwidth-monitored matrices",
      },
      {
        authorizedBy: "Payton",
        guestName: "Payton Gillebert",
        reason: "Customer-focused attitude-oriented monitoring",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 20,
        details: "Compatible fresh-thinking hierarchy",
      },
      {
        code: "HK",
        roomNumber: 15,
        details: "Intuitive fault-tolerant middleware",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "Front-line reciprocal instruction set",
      },
      {
        code: "C5",
        roomNumber: 0,
        details: "Horizontal solution-oriented software",
      },
      {
        code: "C5",
        roomNumber: 21,
        details: "Universal object-oriented function",
      },
    ],
    revenueData: [
      { total: "$12719.36", group: "$587.66", company: "$1003.07" },
    ],
    roomData: [
      {
        total: 7,
        company: 4,
        outOfOrder: 7,
        stayOver: 15,
        arrivals: 36,
        departures: 28,
      },
    ],
  },
  {
    groupData: [
      { name: "Bauch-Sanford", roomCount: 46, revenue: "$436.72" },
      { name: "Reynolds, Jast and Auer", roomCount: 15, revenue: "$360.25" },
      { name: "Rippin LLC", roomCount: 25, revenue: "$491.57" },
      {
        name: "Graham, Labadie and Rosenbaum",
        roomCount: 42,
        revenue: "$192.28",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dyna",
        guestName: "Dyna Anderson",
        reason: "Visionary multi-tasking attitude",
      },
      {
        authorizedBy: "Claus",
        guestName: "Claus O'Carran",
        reason: "Polarised value-added pricing structure",
      },
      {
        authorizedBy: "Xena",
        guestName: "Xena Tosney",
        reason: "Reactive executive service-desk",
      },
      {
        authorizedBy: "Jeddy",
        guestName: "Jeddy Fyldes",
        reason: "Multi-channelled optimizing policy",
      },
      {
        authorizedBy: "Hildy",
        guestName: "Hildy Groundwater",
        reason: "Diverse bottom-line capacity",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 97,
        details: "Exclusive intermediate alliance",
      },
      {
        code: "HK",
        roomNumber: 30,
        details: "Business-focused fault-tolerant initiative",
      },
    ],
    revenueData: [{ total: "$9312.96", group: "$1234.85", company: "$212.88" }],
    roomData: [
      {
        total: 23,
        company: 6,
        outOfOrder: 3,
        stayOver: 33,
        arrivals: 6,
        departures: 7,
      },
    ],
  },
  {
    groupData: [{ name: "Wunsch LLC", roomCount: 31, revenue: "$441.33" }],
    compRoomInfo: [
      {
        authorizedBy: "Jessie",
        guestName: "Jessie McAlinden",
        reason: "Pre-emptive empowering time-frame",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 52,
        details: "Proactive leading edge process improvement",
      },
      {
        code: "C5",
        roomNumber: 53,
        details: "Multi-tiered client-driven product",
      },
      {
        code: "C5",
        roomNumber: 50,
        details: "Extended high-level artificial intelligence",
      },
    ],
    revenueData: [
      { total: "$10063.20", group: "$1272.78", company: "$242.42" },
    ],
    roomData: [
      {
        total: 59,
        company: 4,
        outOfOrder: 9,
        stayOver: 41,
        arrivals: 98,
        departures: 93,
      },
    ],
  },
  {
    groupData: [
      { name: "Hessel Inc", roomCount: 20, revenue: "$393.76" },
      { name: "Murray-Koch", roomCount: 37, revenue: "$474.78" },
      {
        name: "Hodkiewicz, Herman and Lueilwitz",
        roomCount: 22,
        revenue: "$314.18",
      },
      { name: "Zboncak, Jast and Prosacco", roomCount: 34, revenue: "$428.71" },
      { name: "Senger Group", roomCount: 18, revenue: "$175.40" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Rebecka",
        guestName: "Rebecka Haggas",
        reason: "Programmable bifurcated middleware",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 62,
        details: "Re-contextualized transitional capability",
      },
      {
        code: "C5",
        roomNumber: 63,
        details: "Multi-lateral next generation protocol",
      },
      {
        code: "C5",
        roomNumber: 97,
        details: "Organized fresh-thinking time-frame",
      },
      {
        code: "C5",
        roomNumber: 78,
        details: "Multi-tiered incremental methodology",
      },
    ],
    revenueData: [{ total: "$7479.53", group: "$551.61", company: "$2820.24" }],
    roomData: [
      {
        total: 60,
        company: 7,
        outOfOrder: 0,
        stayOver: 13,
        arrivals: 6,
        departures: 56,
      },
    ],
  },
  {
    groupData: [
      { name: "Farrell, Ledner and Crooks", roomCount: 18, revenue: "$123.73" },
      {
        name: "Gusikowski, Cruickshank and Jast",
        roomCount: 49,
        revenue: "$312.78",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Tonya",
        guestName: "Tonya Fairn",
        reason: "Integrated encompassing application",
      },
      {
        authorizedBy: "Merrie",
        guestName: "Merrie Haine",
        reason: "Enterprise-wide user-facing orchestration",
      },
      {
        authorizedBy: "Nobe",
        guestName: "Nobe Doeg",
        reason: "Multi-tiered methodical structure",
      },
      {
        authorizedBy: "Jazmin",
        guestName: "Jazmin Vogele",
        reason: "Profound intangible website",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$18839.43", group: "$1454.28", company: "$1425.62" },
    ],
    roomData: [
      {
        total: 11,
        company: 0,
        outOfOrder: 5,
        stayOver: 50,
        arrivals: 25,
        departures: 82,
      },
    ],
  },
  {
    groupData: [
      { name: "Prohaska Inc", roomCount: 27, revenue: "$451.23" },
      { name: "Boyer-Cartwright", roomCount: 22, revenue: "$160.98" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Elbertine",
        guestName: "Elbertine Eastbury",
        reason: "Cross-group tertiary protocol",
      },
      {
        authorizedBy: "Lexine",
        guestName: "Lexine Blatchford",
        reason: "Inverse global matrix",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 64, details: "Multi-tiered actuating core" },
      {
        code: "HK",
        roomNumber: 6,
        details: "Seamless methodical secured line",
      },
    ],
    revenueData: [
      { total: "$6119.59", group: "$1071.62", company: "$2963.50" },
    ],
    roomData: [
      {
        total: 83,
        company: 4,
        outOfOrder: 0,
        stayOver: 48,
        arrivals: 54,
        departures: 92,
      },
    ],
  },
  {
    groupData: [
      { name: "Lind-Kshlerin", roomCount: 2, revenue: "$335.57" },
      { name: "Brekke Group", roomCount: 7, revenue: "$333.96" },
      { name: "Kassulke, Mayer and Larkin", roomCount: 24, revenue: "$466.98" },
      { name: "Towne-Crona", roomCount: 50, revenue: "$498.84" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Andra",
        guestName: "Andra Valeri",
        reason: "Mandatory impactful flexibility",
      },
      {
        authorizedBy: "Moselle",
        guestName: "Moselle Kynastone",
        reason: "Persevering high-level protocol",
      },
      {
        authorizedBy: "Nisse",
        guestName: "Nisse Woodson",
        reason: "Switchable 24 hour matrix",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 31,
        details: "Streamlined 24 hour productivity",
      },
      {
        code: "C5",
        roomNumber: 95,
        details: "Multi-channelled content-based complexity",
      },
      { code: "C5", roomNumber: 4, details: "Phased multimedia leverage" },
      { code: "HK", roomNumber: 37, details: "Pre-emptive discrete intranet" },
    ],
    revenueData: [{ total: "$7451.99", group: "$1888.61", company: "$963.88" }],
    roomData: [
      {
        total: 54,
        company: 0,
        outOfOrder: 6,
        stayOver: 39,
        arrivals: 54,
        departures: 57,
      },
    ],
  },
  {
    groupData: [{ name: "Romaguera LLC", roomCount: 28, revenue: "$275.02" }],
    compRoomInfo: [
      {
        authorizedBy: "Arlina",
        guestName: "Arlina Rolf",
        reason: "Configurable hybrid capability",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 62,
        details: "Ameliorated multi-state ability",
      },
      {
        code: "HK",
        roomNumber: 2,
        details: "Fundamental fault-tolerant collaboration",
      },
      {
        code: "HK",
        roomNumber: 3,
        details: "Face to face directional productivity",
      },
    ],
    revenueData: [
      { total: "$10537.46", group: "$736.18", company: "$2845.65" },
    ],
    roomData: [
      {
        total: 98,
        company: 8,
        outOfOrder: 3,
        stayOver: 32,
        arrivals: 76,
        departures: 83,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Ronald",
        guestName: "Ronald Giberd",
        reason: "Function-based context-sensitive migration",
      },
      {
        authorizedBy: "Cass",
        guestName: "Cass Ramsted",
        reason: "Quality-focused systematic policy",
      },
      {
        authorizedBy: "Claudetta",
        guestName: "Claudetta Orneblow",
        reason: "Programmable optimizing superstructure",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$16714.89", group: "$363.34", company: "$1896.97" },
    ],
    roomData: [
      {
        total: 17,
        company: 3,
        outOfOrder: 7,
        stayOver: 15,
        arrivals: 81,
        departures: 65,
      },
    ],
  },
  {
    groupData: [
      { name: "Kessler-Gorczany", roomCount: 48, revenue: "$224.16" },
      {
        name: "Ondricka, Funk and Gulgowski",
        roomCount: 17,
        revenue: "$325.60",
      },
      { name: "Tremblay Inc", roomCount: 23, revenue: "$352.76" },
      { name: "Walsh, Leannon and Schuppe", roomCount: 6, revenue: "$340.14" },
      { name: "Hayes, O'Kon and Dibbert", roomCount: 37, revenue: "$424.30" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Juieta",
        guestName: "Juieta Cabble",
        reason: "Quality-focused bi-directional neural-net",
      },
      {
        authorizedBy: "Ingelbert",
        guestName: "Ingelbert Fairfoot",
        reason: "Right-sized 4th generation utilisation",
      },
      {
        authorizedBy: "Andrus",
        guestName: "Andrus Walbridge",
        reason: "Reverse-engineered didactic framework",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$16056.04", group: "$1821.92", company: "$536.24" },
    ],
    roomData: [
      {
        total: 74,
        company: 4,
        outOfOrder: 8,
        stayOver: 48,
        arrivals: 51,
        departures: 94,
      },
    ],
  },
  {
    groupData: [{ name: "Boyle-Harvey", roomCount: 12, revenue: "$267.58" }],
    compRoomInfo: [
      {
        authorizedBy: "Kristien",
        guestName: "Kristien Pittoli",
        reason: "Open-source secondary circuit",
      },
      {
        authorizedBy: "Starla",
        guestName: "Starla Staig",
        reason: "Open-architected content-based secured line",
      },
      {
        authorizedBy: "Christie",
        guestName: "Christie Scothern",
        reason: "Streamlined needs-based projection",
      },
      {
        authorizedBy: "Demetra",
        guestName: "Demetra Slaten",
        reason: "Grass-roots static workforce",
      },
      {
        authorizedBy: "Galven",
        guestName: "Galven Trillow",
        reason: "Reactive multi-state core",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 59,
        details: "Object-based analyzing middleware",
      },
      {
        code: "C5",
        roomNumber: 64,
        details: "Synergistic 4th generation product",
      },
      {
        code: "HK",
        roomNumber: 84,
        details: "User-centric intermediate encoding",
      },
      {
        code: "C5",
        roomNumber: 93,
        details: "Extended non-volatile pricing structure",
      },
      {
        code: "HK",
        roomNumber: 75,
        details: "Monitored 4th generation alliance",
      },
    ],
    revenueData: [{ total: "$7898.41", group: "$254.14", company: "$2205.94" }],
    roomData: [
      {
        total: 77,
        company: 7,
        outOfOrder: 8,
        stayOver: 9,
        arrivals: 14,
        departures: 28,
      },
    ],
  },
  {
    groupData: [
      { name: "Prohaska and Sons", roomCount: 22, revenue: "$249.68" },
      { name: "Hyatt Group", roomCount: 35, revenue: "$134.24" },
      { name: "Kertzmann-Schimmel", roomCount: 48, revenue: "$454.04" },
      { name: "Cole-Considine", roomCount: 40, revenue: "$328.78" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Mathilda",
        guestName: "Mathilda Merryman",
        reason: "Multi-layered motivating leverage",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 23, details: "Future-proofed tertiary hub" },
      {
        code: "C5",
        roomNumber: 43,
        details: "Cross-platform optimizing access",
      },
      {
        code: "HK",
        roomNumber: 17,
        details: "Enterprise-wide background hardware",
      },
      {
        code: "C5",
        roomNumber: 32,
        details: "Implemented intangible algorithm",
      },
      {
        code: "C5",
        roomNumber: 61,
        details: "Synchronised even-keeled flexibility",
      },
    ],
    revenueData: [
      { total: "$14137.48", group: "$745.97", company: "$1782.35" },
    ],
    roomData: [
      {
        total: 59,
        company: 3,
        outOfOrder: 7,
        stayOver: 28,
        arrivals: 11,
        departures: 23,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Grange",
        guestName: "Grange Bidmead",
        reason: "Open-architected clear-thinking secured line",
      },
      {
        authorizedBy: "Janeen",
        guestName: "Janeen Skitch",
        reason: "Decentralized explicit firmware",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 7, details: "Enhanced hybrid portal" },
      { code: "C5", roomNumber: 32, details: "Realigned asymmetric array" },
      {
        code: "HK",
        roomNumber: 43,
        details: "Configurable 24/7 process improvement",
      },
    ],
    revenueData: [
      { total: "$12690.29", group: "$1884.92", company: "$297.95" },
    ],
    roomData: [
      {
        total: 32,
        company: 7,
        outOfOrder: 9,
        stayOver: 47,
        arrivals: 74,
        departures: 6,
      },
    ],
  },
  {
    groupData: [
      { name: "Ratke and Sons", roomCount: 49, revenue: "$118.45" },
      { name: "Moore-Walker", roomCount: 34, revenue: "$187.89" },
      { name: "Mraz-Treutel", roomCount: 16, revenue: "$325.70" },
      { name: "Fisher Inc", roomCount: 32, revenue: "$480.32" },
      { name: "Feil, Wiegand and Hyatt", roomCount: 21, revenue: "$149.06" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Liz",
        guestName: "Liz Redmile",
        reason: "Upgradable bottom-line database",
      },
      {
        authorizedBy: "Padraig",
        guestName: "Padraig Dust",
        reason: "Focused impactful customer loyalty",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$8475.45", group: "$213.31", company: "$1313.40" }],
    roomData: [
      {
        total: 17,
        company: 3,
        outOfOrder: 5,
        stayOver: 24,
        arrivals: 3,
        departures: 97,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Ruthy",
        guestName: "Ruthy Hedgecock",
        reason: "Persevering systemic contingency",
      },
      {
        authorizedBy: "Abbie",
        guestName: "Abbie Tombleson",
        reason: "Organic heuristic definition",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 98,
        details: "Reactive asynchronous superstructure",
      },
      { code: "C5", roomNumber: 29, details: "Innovative neutral software" },
    ],
    revenueData: [
      { total: "$12945.84", group: "$336.91", company: "$2018.56" },
    ],
    roomData: [
      {
        total: 84,
        company: 1,
        outOfOrder: 0,
        stayOver: 49,
        arrivals: 11,
        departures: 83,
      },
    ],
  },
  {
    groupData: [
      { name: "Lemke-Bahringer", roomCount: 20, revenue: "$449.51" },
      { name: "Kuhlman and Sons", roomCount: 25, revenue: "$226.31" },
      {
        name: "Raynor, Wisozk and Runolfsson",
        roomCount: 39,
        revenue: "$276.10",
      },
      { name: "Auer Group", roomCount: 5, revenue: "$403.47" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Shauna",
        guestName: "Shauna Slany",
        reason: "Multi-channelled regional knowledge user",
      },
      {
        authorizedBy: "Alvis",
        guestName: "Alvis Nealy",
        reason: "Stand-alone well-modulated matrices",
      },
      {
        authorizedBy: "Nathaniel",
        guestName: "Nathaniel Kerswill",
        reason: "Cross-platform next generation focus group",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 18, details: "Profound high-level archive" },
      { code: "C5", roomNumber: 96, details: "Optional human-resource portal" },
      {
        code: "C5",
        roomNumber: 100,
        details: "Innovative dynamic flexibility",
      },
      {
        code: "HK",
        roomNumber: 18,
        details: "Horizontal contextually-based open system",
      },
    ],
    revenueData: [{ total: "$9014.57", group: "$476.78", company: "$161.15" }],
    roomData: [
      {
        total: 30,
        company: 8,
        outOfOrder: 1,
        stayOver: 49,
        arrivals: 27,
        departures: 41,
      },
    ],
  },
  {
    groupData: [
      { name: "Bartoletti Inc", roomCount: 23, revenue: "$169.61" },
      { name: "Littel-Grimes", roomCount: 1, revenue: "$199.99" },
      { name: "Sipes-Heller", roomCount: 9, revenue: "$142.94" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Odessa",
        guestName: "Odessa Deverose",
        reason: "Re-engineered optimal forecast",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$15013.53", group: "$847.87", company: "$1953.34" },
    ],
    roomData: [
      {
        total: 36,
        company: 8,
        outOfOrder: 10,
        stayOver: 31,
        arrivals: 1,
        departures: 17,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Bab",
        guestName: "Bab Steljes",
        reason: "User-friendly multi-tasking access",
      },
      {
        authorizedBy: "Noah",
        guestName: "Noah Massy",
        reason: "Optimized next generation benchmark",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 26, details: "Universal tertiary parallelism" },
      {
        code: "C5",
        roomNumber: 37,
        details: "Pre-emptive content-based intranet",
      },
      {
        code: "C5",
        roomNumber: 36,
        details: "Stand-alone solution-oriented infrastructure",
      },
      {
        code: "HK",
        roomNumber: 76,
        details: "Object-based real-time workforce",
      },
    ],
    revenueData: [{ total: "$15727.92", group: "$426.65", company: "$865.46" }],
    roomData: [
      {
        total: 95,
        company: 2,
        outOfOrder: 3,
        stayOver: 6,
        arrivals: 40,
        departures: 69,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Yuri",
        guestName: "Yuri De Benedictis",
        reason: "Quality-focused optimal protocol",
      },
      {
        authorizedBy: "Fancy",
        guestName: "Fancy Pyecroft",
        reason: "Cross-platform zero administration complexity",
      },
      {
        authorizedBy: "Katinka",
        guestName: "Katinka Lowing",
        reason: "Stand-alone encompassing portal",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$7131.47", group: "$1246.89", company: "$2356.07" },
    ],
    roomData: [
      {
        total: 93,
        company: 3,
        outOfOrder: 9,
        stayOver: 33,
        arrivals: 28,
        departures: 34,
      },
    ],
  },
  {
    groupData: [{ name: "Rowe-Quitzon", roomCount: 3, revenue: "$238.37" }],
    compRoomInfo: [
      {
        authorizedBy: "Melina",
        guestName: "Melina Isaacson",
        reason: "Sharable logistical superstructure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 75,
        details: "Monitored next generation installation",
      },
      { code: "C5", roomNumber: 67, details: "Horizontal tangible array" },
      {
        code: "HK",
        roomNumber: 61,
        details: "Proactive client-driven forecast",
      },
      { code: "HK", roomNumber: 41, details: "Realigned dedicated analyzer" },
      { code: "HK", roomNumber: 92, details: "Programmable national hardware" },
    ],
    revenueData: [{ total: "$9699.88", group: "$923.88", company: "$807.81" }],
    roomData: [
      {
        total: 95,
        company: 2,
        outOfOrder: 2,
        stayOver: 2,
        arrivals: 90,
        departures: 81,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Huntlee",
        guestName: "Huntlee MacNeilley",
        reason: "Synergistic 24 hour internet solution",
      },
      {
        authorizedBy: "Bordy",
        guestName: "Bordy Perschke",
        reason: "Ameliorated bi-directional functionalities",
      },
      {
        authorizedBy: "Dacy",
        guestName: "Dacy Bautiste",
        reason: "Ameliorated value-added strategy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 49,
        details: "Configurable responsive leverage",
      },
      {
        code: "HK",
        roomNumber: 20,
        details: "Re-contextualized asymmetric workforce",
      },
      { code: "C5", roomNumber: 99, details: "Centralized bifurcated hub" },
      {
        code: "C5",
        roomNumber: 28,
        details: "Cross-platform dynamic artificial intelligence",
      },
    ],
    revenueData: [
      { total: "$10857.55", group: "$967.10", company: "$2126.06" },
    ],
    roomData: [
      {
        total: 93,
        company: 5,
        outOfOrder: 7,
        stayOver: 34,
        arrivals: 41,
        departures: 73,
      },
    ],
  },
  {
    groupData: [{ name: "Crona-Larkin", roomCount: 5, revenue: "$271.23" }],
    compRoomInfo: [
      {
        authorizedBy: "Nikos",
        guestName: "Nikos Ceci",
        reason: "Digitized maximized matrices",
      },
      {
        authorizedBy: "Jolie",
        guestName: "Jolie Brockelsby",
        reason: "Focused systemic Graphic Interface",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 55,
        details: "User-friendly regional contingency",
      },
    ],
    revenueData: [
      { total: "$13254.32", group: "$1563.77", company: "$777.77" },
    ],
    roomData: [
      {
        total: 14,
        company: 6,
        outOfOrder: 7,
        stayOver: 26,
        arrivals: 26,
        departures: 63,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Cassi",
        guestName: "Cassi Sainsbury-Brown",
        reason: "Enterprise-wide bifurcated adapter",
      },
      {
        authorizedBy: "Philly",
        guestName: "Philly Minthorpe",
        reason: "Virtual logistical open system",
      },
      {
        authorizedBy: "Pamella",
        guestName: "Pamella Gonnin",
        reason: "Upgradable composite Graphic Interface",
      },
      {
        authorizedBy: "Gabbey",
        guestName: "Gabbey Bucknill",
        reason: "Phased regional complexity",
      },
      {
        authorizedBy: "Leyla",
        guestName: "Leyla O'Dempsey",
        reason: "Networked zero defect secured line",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$19794.19", group: "$1008.41", company: "$2357.46" },
    ],
    roomData: [
      {
        total: 9,
        company: 3,
        outOfOrder: 4,
        stayOver: 26,
        arrivals: 28,
        departures: 62,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Benedetta",
        guestName: "Benedetta Shilleto",
        reason: "User-centric radical archive",
      },
      {
        authorizedBy: "Nicoline",
        guestName: "Nicoline Huyton",
        reason: "Virtual zero defect system engine",
      },
      {
        authorizedBy: "Tonya",
        guestName: "Tonya Cisco",
        reason: "Organic didactic projection",
      },
      {
        authorizedBy: "Roby",
        guestName: "Roby Todari",
        reason: "Optimized zero tolerance knowledge base",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 29,
        details: "Re-engineered interactive alliance",
      },
      { code: "C5", roomNumber: 65, details: "Future-proofed 24 hour success" },
    ],
    revenueData: [
      { total: "$16863.24", group: "$1983.40", company: "$2804.19" },
    ],
    roomData: [
      {
        total: 0,
        company: 7,
        outOfOrder: 9,
        stayOver: 39,
        arrivals: 99,
        departures: 89,
      },
    ],
  },
  {
    groupData: [
      { name: "Hahn-Stroman", roomCount: 50, revenue: "$221.79" },
      { name: "Kris, Wolff and Leuschke", roomCount: 22, revenue: "$449.08" },
      { name: "Vandervort-Brakus", roomCount: 35, revenue: "$189.56" },
      { name: "Gorczany and Sons", roomCount: 31, revenue: "$111.69" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Stepha",
        guestName: "Stepha Edworthie",
        reason: "Grass-roots 3rd generation attitude",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 76,
        details: "Customer-focused tangible adapter",
      },
      { code: "HK", roomNumber: 12, details: "Total mobile function" },
    ],
    revenueData: [
      { total: "$12529.09", group: "$1843.14", company: "$884.37" },
    ],
    roomData: [
      {
        total: 70,
        company: 10,
        outOfOrder: 4,
        stayOver: 11,
        arrivals: 86,
        departures: 81,
      },
    ],
  },
  {
    groupData: [{ name: "Hand and Sons", roomCount: 26, revenue: "$413.98" }],
    compRoomInfo: [
      {
        authorizedBy: "Billi",
        guestName: "Billi McFeat",
        reason: "Operative intangible workforce",
      },
      {
        authorizedBy: "Kathye",
        guestName: "Kathye Rouf",
        reason: "Quality-focused eco-centric productivity",
      },
      {
        authorizedBy: "Catrina",
        guestName: "Catrina Kowalik",
        reason: "Reverse-engineered 24 hour application",
      },
      {
        authorizedBy: "Isidore",
        guestName: "Isidore Weightman",
        reason: "Extended dedicated database",
      },
      {
        authorizedBy: "Valentina",
        guestName: "Valentina Stitle",
        reason: "Business-focused non-volatile database",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 29,
        details: "Universal bottom-line standardization",
      },
      {
        code: "C5",
        roomNumber: 77,
        details: "Universal needs-based middleware",
      },
      {
        code: "C5",
        roomNumber: 22,
        details: "Operative web-enabled Graphic Interface",
      },
      {
        code: "HK",
        roomNumber: 64,
        details: "Organized even-keeled time-frame",
      },
      { code: "C5", roomNumber: 48, details: "Realigned static analyzer" },
    ],
    revenueData: [
      { total: "$19222.48", group: "$1106.32", company: "$1644.50" },
    ],
    roomData: [
      {
        total: 89,
        company: 0,
        outOfOrder: 10,
        stayOver: 40,
        arrivals: 80,
        departures: 13,
      },
    ],
  },
  {
    groupData: [{ name: "Rau LLC", roomCount: 2, revenue: "$260.75" }],
    compRoomInfo: [
      {
        authorizedBy: "Emmie",
        guestName: "Emmie Erbain",
        reason: "Focused hybrid internet solution",
      },
      {
        authorizedBy: "James",
        guestName: "James Bugge",
        reason: "User-centric full-range flexibility",
      },
      {
        authorizedBy: "Huey",
        guestName: "Huey Jime",
        reason: "Operative global adapter",
      },
      {
        authorizedBy: "Sammy",
        guestName: "Sammy Lethardy",
        reason: "Synchronised composite adapter",
      },
      {
        authorizedBy: "Estella",
        guestName: "Estella Lyttle",
        reason: "Reduced object-oriented workforce",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 20,
        details: "Face to face heuristic secured line",
      },
    ],
    revenueData: [
      { total: "$12221.61", group: "$797.84", company: "$1887.57" },
    ],
    roomData: [
      {
        total: 51,
        company: 6,
        outOfOrder: 3,
        stayOver: 43,
        arrivals: 76,
        departures: 25,
      },
    ],
  },
  {
    groupData: [
      { name: "Mertz-West", roomCount: 46, revenue: "$160.36" },
      {
        name: "Gottlieb, Morissette and Wintheiser",
        roomCount: 35,
        revenue: "$495.93",
      },
      { name: "Maggio-Prosacco", roomCount: 4, revenue: "$211.64" },
      { name: "Hackett-Quigley", roomCount: 14, revenue: "$342.24" },
      { name: "Walter, Beer and Wisoky", roomCount: 38, revenue: "$197.24" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Rebeka",
        guestName: "Rebeka Junkinson",
        reason: "Polarised client-driven access",
      },
      {
        authorizedBy: "Rufus",
        guestName: "Rufus Rayson",
        reason: "Sharable zero defect attitude",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 19,
        details: "Sharable content-based hardware",
      },
      {
        code: "C5",
        roomNumber: 19,
        details: "Upgradable responsive internet solution",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "Profit-focused logistical open architecture",
      },
      {
        code: "HK",
        roomNumber: 1,
        details: "Public-key next generation circuit",
      },
      {
        code: "C5",
        roomNumber: 71,
        details: "User-centric intangible function",
      },
    ],
    revenueData: [{ total: "$10768.06", group: "$675.75", company: "$803.52" }],
    roomData: [
      {
        total: 32,
        company: 4,
        outOfOrder: 8,
        stayOver: 11,
        arrivals: 8,
        departures: 83,
      },
    ],
  },
  {
    groupData: [{ name: "Keebler-Zemlak", roomCount: 28, revenue: "$117.54" }],
    compRoomInfo: [
      {
        authorizedBy: "Cyndi",
        guestName: "Cyndi Spendlove",
        reason: "Integrated mission-critical flexibility",
      },
      {
        authorizedBy: "Dina",
        guestName: "Dina Tyre",
        reason: "User-centric didactic portal",
      },
      {
        authorizedBy: "Leora",
        guestName: "Leora Carr",
        reason: "Down-sized holistic local area network",
      },
      {
        authorizedBy: "Clo",
        guestName: "Clo Dyter",
        reason: "Multi-tiered dynamic paradigm",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 38,
        details: "User-centric upward-trending info-mediaries",
      },
      {
        code: "C5",
        roomNumber: 18,
        details: "Multi-tiered content-based challenge",
      },
    ],
    revenueData: [
      { total: "$17777.65", group: "$1322.51", company: "$471.66" },
    ],
    roomData: [
      {
        total: 68,
        company: 4,
        outOfOrder: 7,
        stayOver: 16,
        arrivals: 45,
        departures: 21,
      },
    ],
  },
  {
    groupData: [
      { name: "Cruickshank Group", roomCount: 1, revenue: "$416.51" },
      { name: "Ullrich-Corkery", roomCount: 37, revenue: "$328.51" },
      { name: "Upton, D'Amore and Yundt", roomCount: 1, revenue: "$264.89" },
      { name: "Hermann and Sons", roomCount: 42, revenue: "$418.44" },
      { name: "Hammes Inc", roomCount: 30, revenue: "$221.66" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ferris",
        guestName: "Ferris Duker",
        reason: "Horizontal user-facing database",
      },
      {
        authorizedBy: "Stanislaus",
        guestName: "Stanislaus Monkhouse",
        reason: "Compatible zero administration time-frame",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 52,
        details: "Vision-oriented dedicated service-desk",
      },
      {
        code: "C5",
        roomNumber: 68,
        details: "Persistent upward-trending initiative",
      },
      {
        code: "C5",
        roomNumber: 31,
        details: "Customer-focused didactic Graphic Interface",
      },
    ],
    revenueData: [
      { total: "$13372.64", group: "$553.23", company: "$2608.01" },
    ],
    roomData: [
      {
        total: 85,
        company: 3,
        outOfOrder: 9,
        stayOver: 4,
        arrivals: 57,
        departures: 31,
      },
    ],
  },
  {
    groupData: [
      { name: "Cartwright-Hackett", roomCount: 48, revenue: "$138.86" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Trude",
        guestName: "Trude Ciciari",
        reason: "Enhanced optimal toolset",
      },
      {
        authorizedBy: "Sadye",
        guestName: "Sadye Kirkness",
        reason: "Proactive radical strategy",
      },
      {
        authorizedBy: "Lynn",
        guestName: "Lynn Cankett",
        reason: "Total dynamic open architecture",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 87,
        details: "Devolved encompassing capability",
      },
      {
        code: "HK",
        roomNumber: 51,
        details: "Centralized optimizing flexibility",
      },
      {
        code: "C5",
        roomNumber: 61,
        details: "Team-oriented motivating moderator",
      },
    ],
    revenueData: [
      { total: "$17887.80", group: "$1012.19", company: "$2787.77" },
    ],
    roomData: [
      {
        total: 79,
        company: 6,
        outOfOrder: 10,
        stayOver: 42,
        arrivals: 6,
        departures: 67,
      },
    ],
  },
  {
    groupData: [
      { name: "Morar Group", roomCount: 8, revenue: "$183.24" },
      { name: "Conn, Shields and Homenick", roomCount: 35, revenue: "$327.77" },
      { name: "Boehm Inc", roomCount: 28, revenue: "$178.42" },
      { name: "McLaughlin LLC", roomCount: 46, revenue: "$398.32" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Maxy",
        guestName: "Maxy Malham",
        reason: "Ameliorated disintermediate service-desk",
      },
      {
        authorizedBy: "Eberhard",
        guestName: "Eberhard Goddert.sf",
        reason: "Managed asynchronous policy",
      },
      {
        authorizedBy: "Ivie",
        guestName: "Ivie Gianullo",
        reason: "Mandatory contextually-based model",
      },
      {
        authorizedBy: "Kaylil",
        guestName: "Kaylil Kohrsen",
        reason: "Phased eco-centric policy",
      },
      {
        authorizedBy: "Violet",
        guestName: "Violet Lagde",
        reason: "Multi-channelled clear-thinking info-mediaries",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 68, details: "Optional client-driven hub" },
      {
        code: "HK",
        roomNumber: 93,
        details: "Realigned solution-oriented initiative",
      },
      { code: "C5", roomNumber: 16, details: "Managed coherent approach" },
    ],
    revenueData: [{ total: "$6460.08", group: "$1684.81", company: "$369.53" }],
    roomData: [
      {
        total: 59,
        company: 1,
        outOfOrder: 9,
        stayOver: 40,
        arrivals: 9,
        departures: 5,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Ruecker, Vandervort and Stark",
        roomCount: 24,
        revenue: "$177.62",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Flossi",
        guestName: "Flossi Adamiec",
        reason: "User-centric value-added website",
      },
      {
        authorizedBy: "Byrle",
        guestName: "Byrle Skehens",
        reason: "Public-key modular extranet",
      },
      {
        authorizedBy: "Lyle",
        guestName: "Lyle Kennon",
        reason: "Ergonomic 24 hour concept",
      },
      {
        authorizedBy: "Ninetta",
        guestName: "Ninetta Causton",
        reason: "Managed bi-directional knowledge base",
      },
      {
        authorizedBy: "Kathe",
        guestName: "Kathe Holby",
        reason: "Fundamental coherent contingency",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$5229.40", group: "$1349.76", company: "$2742.02" },
    ],
    roomData: [
      {
        total: 98,
        company: 3,
        outOfOrder: 7,
        stayOver: 37,
        arrivals: 34,
        departures: 98,
      },
    ],
  },
  {
    groupData: [{ name: "Reilly Group", roomCount: 28, revenue: "$427.89" }],
    compRoomInfo: [
      {
        authorizedBy: "Giacinta",
        guestName: "Giacinta Curedale",
        reason: "Cross-group directional local area network",
      },
      {
        authorizedBy: "Arlinda",
        guestName: "Arlinda Krook",
        reason: "Synergistic bi-directional ability",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 98,
        details: "Re-contextualized intermediate structure",
      },
    ],
    revenueData: [
      { total: "$17553.77", group: "$1490.21", company: "$2012.47" },
    ],
    roomData: [
      {
        total: 35,
        company: 4,
        outOfOrder: 2,
        stayOver: 4,
        arrivals: 4,
        departures: 48,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Christabel",
        guestName: "Christabel Abel",
        reason: "Fully-configurable background firmware",
      },
      {
        authorizedBy: "Katharine",
        guestName: "Katharine Ducker",
        reason: "Open-source even-keeled approach",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 67,
        details: "Operative system-worthy forecast",
      },
      {
        code: "C5",
        roomNumber: 62,
        details: "Fully-configurable composite moratorium",
      },
      { code: "HK", roomNumber: 65, details: "Universal national encryption" },
    ],
    revenueData: [
      { total: "$13625.64", group: "$710.43", company: "$1684.23" },
    ],
    roomData: [
      {
        total: 54,
        company: 1,
        outOfOrder: 7,
        stayOver: 28,
        arrivals: 58,
        departures: 99,
      },
    ],
  },
  {
    groupData: [
      { name: "Klein, Hammes and West", roomCount: 17, revenue: "$457.24" },
      {
        name: "Howe, Schaefer and Marquardt",
        roomCount: 19,
        revenue: "$205.33",
      },
      { name: "Abernathy-Osinski", roomCount: 34, revenue: "$434.48" },
      { name: "Mraz, Kerluke and Huel", roomCount: 21, revenue: "$413.13" },
      { name: "Cummerata-Maggio", roomCount: 50, revenue: "$364.20" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Yance",
        guestName: "Yance Fillary",
        reason: "Programmable holistic process improvement",
      },
      {
        authorizedBy: "Rozanna",
        guestName: "Rozanna Sarten",
        reason: "Implemented even-keeled open system",
      },
      {
        authorizedBy: "Rahel",
        guestName: "Rahel Maskall",
        reason: "Up-sized optimal projection",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$6020.87", group: "$317.00", company: "$1701.94" }],
    roomData: [
      {
        total: 95,
        company: 4,
        outOfOrder: 9,
        stayOver: 24,
        arrivals: 60,
        departures: 90,
      },
    ],
  },
  {
    groupData: [
      { name: "Lind LLC", roomCount: 3, revenue: "$209.93" },
      { name: "Schiller and Sons", roomCount: 30, revenue: "$164.08" },
      { name: "Wunsch, Mills and Bernhard", roomCount: 49, revenue: "$436.46" },
      { name: "Zemlak, Rau and Hessel", roomCount: 48, revenue: "$305.41" },
      { name: "Brakus-McKenzie", roomCount: 21, revenue: "$142.58" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dev",
        guestName: "Dev Hentze",
        reason: "Decentralized optimal service-desk",
      },
      {
        authorizedBy: "Elysee",
        guestName: "Elysee MacGinlay",
        reason: "Reduced object-oriented synergy",
      },
      {
        authorizedBy: "Etheline",
        guestName: "Etheline Braunston",
        reason: "Pre-emptive user-facing core",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 96, details: "Intuitive cohesive policy" },
      {
        code: "C5",
        roomNumber: 22,
        details: "Monitored client-driven open system",
      },
    ],
    revenueData: [{ total: "$14018.27", group: "$214.97", company: "$649.06" }],
    roomData: [
      {
        total: 68,
        company: 2,
        outOfOrder: 6,
        stayOver: 38,
        arrivals: 83,
        departures: 36,
      },
    ],
  },
  {
    groupData: [
      { name: "Corwin-Hamill", roomCount: 6, revenue: "$381.94" },
      {
        name: "Bogan, Lockman and Gottlieb",
        roomCount: 23,
        revenue: "$238.75",
      },
      { name: "Prohaska Inc", roomCount: 26, revenue: "$304.01" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Pepito",
        guestName: "Pepito Brampton",
        reason: "Expanded reciprocal help-desk",
      },
      {
        authorizedBy: "Karleen",
        guestName: "Karleen Attwater",
        reason: "Cross-platform fresh-thinking secured line",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "Enterprise-wide background initiative",
      },
    ],
    revenueData: [{ total: "$6530.34", group: "$119.62", company: "$2184.31" }],
    roomData: [
      {
        total: 92,
        company: 2,
        outOfOrder: 3,
        stayOver: 28,
        arrivals: 17,
        departures: 61,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Krisha",
        guestName: "Krisha Batt",
        reason: "Intuitive responsive attitude",
      },
      {
        authorizedBy: "Julieta",
        guestName: "Julieta Chataignier",
        reason: "Front-line discrete encryption",
      },
      {
        authorizedBy: "Ekaterina",
        guestName: "Ekaterina Shivell",
        reason: "Quality-focused even-keeled support",
      },
      {
        authorizedBy: "Vonnie",
        guestName: "Vonnie Briscow",
        reason: "Reduced multi-state matrices",
      },
      {
        authorizedBy: "Felice",
        guestName: "Felice Winslett",
        reason: "Devolved intangible knowledge base",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 1,
        details: "Horizontal 4th generation superstructure",
      },
      {
        code: "C5",
        roomNumber: 87,
        details: "Optimized mission-critical monitoring",
      },
    ],
    revenueData: [
      { total: "$14481.05", group: "$1271.51", company: "$1082.10" },
    ],
    roomData: [
      {
        total: 61,
        company: 6,
        outOfOrder: 5,
        stayOver: 31,
        arrivals: 53,
        departures: 20,
      },
    ],
  },
  {
    groupData: [
      { name: "Weissnat, Dicki and Bailey", roomCount: 0, revenue: "$267.33" },
      { name: "Larkin-Simonis", roomCount: 5, revenue: "$243.04" },
      { name: "Koss and Sons", roomCount: 28, revenue: "$459.66" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "La verne",
        guestName: "La verne Arrigucci",
        reason: "Switchable even-keeled system engine",
      },
      {
        authorizedBy: "Calypso",
        guestName: "Calypso Gethin",
        reason: "Optional interactive complexity",
      },
      {
        authorizedBy: "Daile",
        guestName: "Daile Twelvetrees",
        reason: "Business-focused system-worthy database",
      },
      {
        authorizedBy: "Jess",
        guestName: "Jess Pickerill",
        reason: "User-friendly needs-based definition",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 25,
        details: "Multi-layered eco-centric concept",
      },
      {
        code: "HK",
        roomNumber: 80,
        details: "Persevering attitude-oriented framework",
      },
      {
        code: "C5",
        roomNumber: 66,
        details: "Team-oriented zero defect contingency",
      },
    ],
    revenueData: [{ total: "$16329.46", group: "$132.41", company: "$885.36" }],
    roomData: [
      {
        total: 74,
        company: 10,
        outOfOrder: 2,
        stayOver: 34,
        arrivals: 82,
        departures: 77,
      },
    ],
  },
  {
    groupData: [
      { name: "Dooley Inc", roomCount: 24, revenue: "$460.81" },
      { name: "Dietrich-Fisher", roomCount: 28, revenue: "$343.24" },
      { name: "Abshire, Metz and Dooley", roomCount: 30, revenue: "$319.89" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Morton",
        guestName: "Morton Aitcheson",
        reason: "Centralized system-worthy portal",
      },
      {
        authorizedBy: "Mathilda",
        guestName: "Mathilda Brumham",
        reason: "Optimized web-enabled Graphical User Interface",
      },
      {
        authorizedBy: "Lauri",
        guestName: "Lauri Lownds",
        reason: "Multi-tiered coherent structure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 68,
        details: "Visionary attitude-oriented hub",
      },
      { code: "C5", roomNumber: 92, details: "Public-key 24 hour help-desk" },
      {
        code: "C5",
        roomNumber: 51,
        details: "Organized homogeneous service-desk",
      },
    ],
    revenueData: [{ total: "$5271.86", group: "$238.22", company: "$2099.18" }],
    roomData: [
      {
        total: 95,
        company: 8,
        outOfOrder: 6,
        stayOver: 10,
        arrivals: 77,
        departures: 81,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Hane, Franecki and Breitenberg",
        roomCount: 12,
        revenue: "$152.39",
      },
      { name: "Roob, Stroman and Rau", roomCount: 19, revenue: "$407.62" },
      { name: "O'Conner-Dietrich", roomCount: 49, revenue: "$155.07" },
      { name: "Cole, Kunze and Lebsack", roomCount: 4, revenue: "$335.88" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Caryl",
        guestName: "Caryl Bussey",
        reason: "Progressive tangible time-frame",
      },
      {
        authorizedBy: "See",
        guestName: "See Foran",
        reason: "Ergonomic scalable task-force",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 54, details: "Robust intangible secured line" },
      {
        code: "HK",
        roomNumber: 15,
        details: "Multi-layered asymmetric capacity",
      },
      { code: "C5", roomNumber: 64, details: "Polarised uniform task-force" },
      { code: "C5", roomNumber: 47, details: "Mandatory static throughput" },
      { code: "C5", roomNumber: 11, details: "Universal dynamic projection" },
    ],
    revenueData: [
      { total: "$11464.07", group: "$901.37", company: "$1609.39" },
    ],
    roomData: [
      {
        total: 82,
        company: 1,
        outOfOrder: 4,
        stayOver: 8,
        arrivals: 50,
        departures: 59,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Goldner, Morissette and Lesch",
        roomCount: 42,
        revenue: "$158.33",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Nerta",
        guestName: "Nerta Eglington",
        reason: "Exclusive reciprocal hub",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 78,
        details: "Ergonomic logistical open architecture",
      },
      {
        code: "HK",
        roomNumber: 60,
        details: "Quality-focused context-sensitive alliance",
      },
    ],
    revenueData: [
      { total: "$17595.36", group: "$1197.71", company: "$2250.58" },
    ],
    roomData: [
      {
        total: 9,
        company: 4,
        outOfOrder: 5,
        stayOver: 11,
        arrivals: 29,
        departures: 98,
      },
    ],
  },
  {
    groupData: [
      { name: "Kirlin Inc", roomCount: 7, revenue: "$460.83" },
      { name: "Keeling-Gutkowski", roomCount: 36, revenue: "$455.81" },
      { name: "Stoltenberg Inc", roomCount: 3, revenue: "$221.79" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Page",
        guestName: "Page Minard",
        reason: "Managed systematic extranet",
      },
      {
        authorizedBy: "Budd",
        guestName: "Budd Cassell",
        reason: "Profound reciprocal array",
      },
      {
        authorizedBy: "Dorey",
        guestName: "Dorey McWhirter",
        reason: "Organic background matrix",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 87,
        details: "Re-engineered national moderator",
      },
    ],
    revenueData: [
      { total: "$9594.71", group: "$1337.93", company: "$2479.21" },
    ],
    roomData: [
      {
        total: 76,
        company: 1,
        outOfOrder: 9,
        stayOver: 19,
        arrivals: 73,
        departures: 19,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Shell",
        guestName: "Shell Kopje",
        reason: "Digitized multi-state infrastructure",
      },
      {
        authorizedBy: "Ferris",
        guestName: "Ferris Combes",
        reason: "Networked value-added portal",
      },
      {
        authorizedBy: "Nevile",
        guestName: "Nevile Laste",
        reason: "Function-based full-range access",
      },
      {
        authorizedBy: "Tamas",
        guestName: "Tamas Yoxall",
        reason: "Up-sized attitude-oriented attitude",
      },
      {
        authorizedBy: "Anet",
        guestName: "Anet Mamwell",
        reason: "Seamless intermediate synergy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 42,
        details: "Advanced mission-critical toolset",
      },
      { code: "HK", roomNumber: 15, details: "Exclusive zero defect matrices" },
      {
        code: "HK",
        roomNumber: 28,
        details: "Proactive content-based intranet",
      },
      { code: "HK", roomNumber: 43, details: "Profound eco-centric portal" },
    ],
    revenueData: [
      { total: "$18463.67", group: "$756.39", company: "$2038.16" },
    ],
    roomData: [
      {
        total: 85,
        company: 2,
        outOfOrder: 2,
        stayOver: 7,
        arrivals: 83,
        departures: 52,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Dagny",
        guestName: "Dagny Klebes",
        reason: "Function-based executive paradigm",
      },
      {
        authorizedBy: "Dagny",
        guestName: "Dagny Pannaman",
        reason: "Enterprise-wide national frame",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$7870.53", group: "$767.55", company: "$1810.70" }],
    roomData: [
      {
        total: 55,
        company: 1,
        outOfOrder: 6,
        stayOver: 25,
        arrivals: 20,
        departures: 46,
      },
    ],
  },
  {
    groupData: [
      { name: "Koelpin-Konopelski", roomCount: 50, revenue: "$324.73" },
      {
        name: "Hintz, Bechtelar and Ruecker",
        roomCount: 8,
        revenue: "$326.68",
      },
      { name: "O'Connell-Ullrich", roomCount: 31, revenue: "$214.15" },
      { name: "Howe-Crist", roomCount: 5, revenue: "$275.44" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Caldwell",
        guestName: "Caldwell Poizer",
        reason: "Multi-tiered non-volatile intranet",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 48,
        details: "Mandatory multi-tasking toolset",
      },
      {
        code: "HK",
        roomNumber: 50,
        details: "Ergonomic multi-state methodology",
      },
    ],
    revenueData: [
      { total: "$18948.07", group: "$601.00", company: "$1734.36" },
    ],
    roomData: [
      {
        total: 69,
        company: 0,
        outOfOrder: 5,
        stayOver: 4,
        arrivals: 39,
        departures: 43,
      },
    ],
  },
  {
    groupData: [
      { name: "Lebsack, Maggio and Maggio", roomCount: 44, revenue: "$105.33" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Carlina",
        guestName: "Carlina Dillinton",
        reason: "Secured composite infrastructure",
      },
      {
        authorizedBy: "Lek",
        guestName: "Lek Beattie",
        reason: "Digitized uniform flexibility",
      },
      {
        authorizedBy: "Ardys",
        guestName: "Ardys McGeouch",
        reason: "Cross-group systematic approach",
      },
      {
        authorizedBy: "Elinor",
        guestName: "Elinor MacMenamin",
        reason: "Persevering stable initiative",
      },
      {
        authorizedBy: "Lothaire",
        guestName: "Lothaire Keme",
        reason: "Fully-configurable full-range groupware",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 92,
        details: "User-centric attitude-oriented initiative",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "Balanced mobile Graphical User Interface",
      },
    ],
    revenueData: [
      { total: "$9695.21", group: "$1801.38", company: "$2906.02" },
    ],
    roomData: [
      {
        total: 1,
        company: 0,
        outOfOrder: 9,
        stayOver: 24,
        arrivals: 65,
        departures: 16,
      },
    ],
  },
  {
    groupData: [
      { name: "Cruickshank LLC", roomCount: 2, revenue: "$152.94" },
      { name: "Tromp-Boehm", roomCount: 10, revenue: "$485.10" },
      { name: "Boyle LLC", roomCount: 25, revenue: "$217.24" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Theressa",
        guestName: "Theressa Whenman",
        reason: "Re-contextualized maximized time-frame",
      },
      {
        authorizedBy: "Sebastiano",
        guestName: "Sebastiano Bisp",
        reason: "Public-key interactive implementation",
      },
      {
        authorizedBy: "Merna",
        guestName: "Merna Croan",
        reason: "Devolved disintermediate capacity",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 64, details: "Inverse systemic leverage" },
      {
        code: "HK",
        roomNumber: 9,
        details: "Ergonomic 6th generation collaboration",
      },
      {
        code: "C5",
        roomNumber: 22,
        details: "User-friendly logistical policy",
      },
    ],
    revenueData: [
      { total: "$19337.27", group: "$1270.87", company: "$1752.13" },
    ],
    roomData: [
      {
        total: 13,
        company: 3,
        outOfOrder: 0,
        stayOver: 5,
        arrivals: 13,
        departures: 55,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Titus",
        guestName: "Titus Candelin",
        reason: "Team-oriented global access",
      },
      {
        authorizedBy: "Loralyn",
        guestName: "Loralyn Surmeyer",
        reason: "Diverse incremental groupware",
      },
      {
        authorizedBy: "Hi",
        guestName: "Hi Paulusch",
        reason: "User-friendly full-range hub",
      },
      {
        authorizedBy: "Janene",
        guestName: "Janene Petrillo",
        reason: "User-centric empowering extranet",
      },
      {
        authorizedBy: "Kenon",
        guestName: "Kenon Longina",
        reason: "Implemented client-driven strategy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 64,
        details: "Synergized intermediate capacity",
      },
      {
        code: "C5",
        roomNumber: 27,
        details: "Object-based zero tolerance complexity",
      },
      {
        code: "C5",
        roomNumber: 26,
        details: "Team-oriented disintermediate matrix",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "Implemented client-driven product",
      },
    ],
    revenueData: [
      { total: "$7207.19", group: "$1837.71", company: "$2248.38" },
    ],
    roomData: [
      {
        total: 29,
        company: 4,
        outOfOrder: 2,
        stayOver: 33,
        arrivals: 25,
        departures: 92,
      },
    ],
  },
  {
    groupData: [
      { name: "Kreiger-Cremin", roomCount: 3, revenue: "$205.84" },
      {
        name: "Gusikowski, Morar and Runolfsson",
        roomCount: 34,
        revenue: "$320.17",
      },
      { name: "Haley, Borer and Johnson", roomCount: 46, revenue: "$200.33" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Terrye",
        guestName: "Terrye Weightman",
        reason: "Inverse heuristic projection",
      },
      {
        authorizedBy: "Egan",
        guestName: "Egan Gartsyde",
        reason: "Profound disintermediate infrastructure",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 7, details: "Devolved actuating approach" },
      {
        code: "HK",
        roomNumber: 89,
        details: "Face to face non-volatile middleware",
      },
      {
        code: "HK",
        roomNumber: 41,
        details: "Grass-roots fault-tolerant policy",
      },
      { code: "C5", roomNumber: 19, details: "Up-sized 24 hour policy" },
    ],
    revenueData: [
      { total: "$5453.59", group: "$1483.63", company: "$2411.42" },
    ],
    roomData: [
      {
        total: 51,
        company: 10,
        outOfOrder: 9,
        stayOver: 7,
        arrivals: 74,
        departures: 16,
      },
    ],
  },
  {
    groupData: [{ name: "Bayer-Bailey", roomCount: 6, revenue: "$328.67" }],
    compRoomInfo: [
      {
        authorizedBy: "Udell",
        guestName: "Udell Klimpke",
        reason: "Enterprise-wide client-driven parallelism",
      },
      {
        authorizedBy: "Dasi",
        guestName: "Dasi Toffel",
        reason: "Persistent upward-trending success",
      },
      {
        authorizedBy: "Valentina",
        guestName: "Valentina Durrell",
        reason: "Profit-focused impactful internet solution",
      },
      {
        authorizedBy: "Krystyna",
        guestName: "Krystyna Evetts",
        reason: "User-centric disintermediate support",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 39, details: "Cross-group foreground product" },
      { code: "C5", roomNumber: 10, details: "Switchable directional website" },
      { code: "C5", roomNumber: 55, details: "Universal didactic open system" },
      {
        code: "HK",
        roomNumber: 61,
        details: "Vision-oriented modular migration",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "Monitored fault-tolerant algorithm",
      },
    ],
    revenueData: [
      { total: "$9705.73", group: "$1841.38", company: "$1464.64" },
    ],
    roomData: [
      {
        total: 61,
        company: 9,
        outOfOrder: 1,
        stayOver: 23,
        arrivals: 55,
        departures: 27,
      },
    ],
  },
  {
    groupData: [
      { name: "Deckow Inc", roomCount: 38, revenue: "$364.59" },
      {
        name: "Morissette, Yundt and Kulas",
        roomCount: 32,
        revenue: "$176.65",
      },
      {
        name: "Heller, Paucek and Swaniawski",
        roomCount: 24,
        revenue: "$442.92",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ashlin",
        guestName: "Ashlin Guerri",
        reason: "Customizable even-keeled pricing structure",
      },
      {
        authorizedBy: "Joshia",
        guestName: "Joshia Deval",
        reason: "Streamlined radical frame",
      },
      {
        authorizedBy: "Hagan",
        guestName: "Hagan Shatford",
        reason: "Monitored holistic circuit",
      },
      {
        authorizedBy: "Darren",
        guestName: "Darren Silbermann",
        reason: "Mandatory scalable core",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 81,
        details: "Expanded client-server monitoring",
      },
      { code: "HK", roomNumber: 45, details: "Adaptive stable alliance" },
      {
        code: "HK",
        roomNumber: 22,
        details: "Intuitive 3rd generation protocol",
      },
      {
        code: "C5",
        roomNumber: 79,
        details: "Implemented 24 hour architecture",
      },
      {
        code: "HK",
        roomNumber: 77,
        details: "Realigned 3rd generation time-frame",
      },
    ],
    revenueData: [{ total: "$18541.51", group: "$671.79", company: "$933.54" }],
    roomData: [
      {
        total: 8,
        company: 6,
        outOfOrder: 8,
        stayOver: 13,
        arrivals: 38,
        departures: 37,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Parisian, Boyle and McLaughlin",
        roomCount: 29,
        revenue: "$468.71",
      },
      {
        name: "Zulauf, Hermiston and Mayer",
        roomCount: 38,
        revenue: "$281.46",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ettie",
        guestName: "Ettie Mabley",
        reason: "Polarised multi-state array",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 77,
        details: "Reduced solution-oriented instruction set",
      },
      {
        code: "HK",
        roomNumber: 27,
        details: "Reverse-engineered 6th generation task-force",
      },
      {
        code: "C5",
        roomNumber: 62,
        details: "Devolved dedicated knowledge user",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "Pre-emptive system-worthy secured line",
      },
    ],
    revenueData: [{ total: "$8649.93", group: "$455.01", company: "$2669.97" }],
    roomData: [
      {
        total: 54,
        company: 4,
        outOfOrder: 3,
        stayOver: 11,
        arrivals: 9,
        departures: 79,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Macejkovic, Kling and Gleason",
        roomCount: 24,
        revenue: "$436.31",
      },
      {
        name: "Ullrich, Barton and Stoltenberg",
        roomCount: 0,
        revenue: "$490.05",
      },
      { name: "Kirlin and Sons", roomCount: 38, revenue: "$246.07" },
      { name: "Kirlin LLC", roomCount: 10, revenue: "$339.85" },
      {
        name: "Hermiston, Frami and Schamberger",
        roomCount: 6,
        revenue: "$484.99",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dorri",
        guestName: "Dorri Ollive",
        reason: "Persistent object-oriented adapter",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 1,
        details: "Enterprise-wide zero defect concept",
      },
      {
        code: "HK",
        roomNumber: 21,
        details: "Business-focused contextually-based functionalities",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "Cross-platform homogeneous functionalities",
      },
      {
        code: "HK",
        roomNumber: 1,
        details: "Fundamental demand-driven matrices",
      },
    ],
    revenueData: [
      { total: "$19929.65", group: "$1772.39", company: "$992.74" },
    ],
    roomData: [
      {
        total: 59,
        company: 5,
        outOfOrder: 1,
        stayOver: 16,
        arrivals: 19,
        departures: 81,
      },
    ],
  },
  {
    groupData: [
      { name: "Baumbach-Hermann", roomCount: 46, revenue: "$296.22" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Allene",
        guestName: "Allene Bignold",
        reason: "Customizable explicit matrix",
      },
      {
        authorizedBy: "Kent",
        guestName: "Kent Finnimore",
        reason: "Expanded mission-critical hub",
      },
      {
        authorizedBy: "Sandra",
        guestName: "Sandra Dobie",
        reason: "Universal bandwidth-monitored complexity",
      },
      {
        authorizedBy: "Jethro",
        guestName: "Jethro Channer",
        reason: "Up-sized holistic Graphic Interface",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$5876.36", group: "$1026.41", company: "$787.92" }],
    roomData: [
      {
        total: 63,
        company: 2,
        outOfOrder: 5,
        stayOver: 44,
        arrivals: 6,
        departures: 16,
      },
    ],
  },
  {
    groupData: [
      { name: "Leffler-Stark", roomCount: 21, revenue: "$110.41" },
      { name: "Runte and Sons", roomCount: 5, revenue: "$185.16" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Skipper",
        guestName: "Skipper Massel",
        reason: "Public-key modular open system",
      },
      {
        authorizedBy: "Trista",
        guestName: "Trista Chatburn",
        reason: "Vision-oriented value-added initiative",
      },
      {
        authorizedBy: "Marabel",
        guestName: "Marabel Andrichuk",
        reason: "Reduced mission-critical database",
      },
      {
        authorizedBy: "Starlin",
        guestName: "Starlin Youtead",
        reason: "Reactive tertiary task-force",
      },
      {
        authorizedBy: "Wyndham",
        guestName: "Wyndham Worge",
        reason: "Monitored fresh-thinking initiative",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 49,
        details: "Persevering didactic service-desk",
      },
      { code: "C5", roomNumber: 20, details: "Realigned radical success" },
    ],
    revenueData: [
      { total: "$5358.67", group: "$1457.58", company: "$1823.72" },
    ],
    roomData: [
      {
        total: 90,
        company: 7,
        outOfOrder: 7,
        stayOver: 43,
        arrivals: 6,
        departures: 52,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Stehr, Runolfsson and Kuvalis",
        roomCount: 28,
        revenue: "$383.76",
      },
      { name: "Schamberger-Satterfield", roomCount: 27, revenue: "$176.46" },
      {
        name: "Abbott, Prohaska and Cassin",
        roomCount: 25,
        revenue: "$391.05",
      },
      {
        name: "Jakubowski, Hane and Gusikowski",
        roomCount: 20,
        revenue: "$429.13",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Myer",
        guestName: "Myer Baddeley",
        reason: "Switchable leading edge leverage",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 34, details: "Compatible analyzing hub" },
      { code: "HK", roomNumber: 5, details: "Robust optimizing groupware" },
      {
        code: "HK",
        roomNumber: 68,
        details: "Progressive empowering database",
      },
      { code: "HK", roomNumber: 39, details: "Up-sized modular migration" },
      {
        code: "HK",
        roomNumber: 33,
        details: "Down-sized dynamic conglomeration",
      },
    ],
    revenueData: [
      { total: "$13253.84", group: "$1446.54", company: "$2977.10" },
    ],
    roomData: [
      {
        total: 42,
        company: 4,
        outOfOrder: 10,
        stayOver: 43,
        arrivals: 78,
        departures: 80,
      },
    ],
  },
  {
    groupData: [
      { name: "Bartoletti-Hoppe", roomCount: 49, revenue: "$287.44" },
      { name: "Wolf LLC", roomCount: 43, revenue: "$153.67" },
      { name: "Torp-Lang", roomCount: 9, revenue: "$266.64" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Shalne",
        guestName: "Shalne Curtois",
        reason: "Function-based systemic adapter",
      },
      {
        authorizedBy: "Krissie",
        guestName: "Krissie Godwin",
        reason: "Profound cohesive parallelism",
      },
      {
        authorizedBy: "Amabel",
        guestName: "Amabel Batterbee",
        reason: "Synergistic modular framework",
      },
      {
        authorizedBy: "Chrystal",
        guestName: "Chrystal Trouncer",
        reason: "Synergistic eco-centric methodology",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 21,
        details: "Realigned fault-tolerant conglomeration",
      },
      {
        code: "C5",
        roomNumber: 85,
        details: "Phased dedicated standardization",
      },
      {
        code: "C5",
        roomNumber: 34,
        details: "Profit-focused intangible budgetary management",
      },
      {
        code: "HK",
        roomNumber: 33,
        details: "Distributed zero tolerance alliance",
      },
      {
        code: "HK",
        roomNumber: 78,
        details: "Vision-oriented system-worthy project",
      },
    ],
    revenueData: [
      { total: "$8107.75", group: "$1709.00", company: "$1396.37" },
    ],
    roomData: [
      {
        total: 8,
        company: 8,
        outOfOrder: 6,
        stayOver: 16,
        arrivals: 64,
        departures: 76,
      },
    ],
  },
  {
    groupData: [{ name: "Turner-Fay", roomCount: 35, revenue: "$380.60" }],
    compRoomInfo: [
      {
        authorizedBy: "Nevil",
        guestName: "Nevil Goodrum",
        reason: "Cloned 24 hour moderator",
      },
      {
        authorizedBy: "Giulio",
        guestName: "Giulio Merrydew",
        reason: "Organized bifurcated structure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 22,
        details: "Balanced actuating info-mediaries",
      },
      { code: "HK", roomNumber: 65, details: "Enhanced bifurcated matrices" },
      {
        code: "HK",
        roomNumber: 35,
        details: "Total mission-critical contingency",
      },
    ],
    revenueData: [
      { total: "$5420.35", group: "$1074.49", company: "$1886.43" },
    ],
    roomData: [
      {
        total: 51,
        company: 6,
        outOfOrder: 3,
        stayOver: 23,
        arrivals: 68,
        departures: 0,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Ruperto",
        guestName: "Ruperto Docwra",
        reason: "Right-sized web-enabled installation",
      },
      {
        authorizedBy: "Sella",
        guestName: "Sella Vassar",
        reason: "Customizable 5th generation flexibility",
      },
      {
        authorizedBy: "Boy",
        guestName: "Boy Steptowe",
        reason: "Reduced bi-directional approach",
      },
      {
        authorizedBy: "Wilbur",
        guestName: "Wilbur Lord",
        reason: "Public-key 24 hour orchestration",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 87, details: "Ergonomic didactic website" },
    ],
    revenueData: [
      { total: "$17837.86", group: "$1161.53", company: "$453.57" },
    ],
    roomData: [
      {
        total: 46,
        company: 10,
        outOfOrder: 0,
        stayOver: 49,
        arrivals: 25,
        departures: 15,
      },
    ],
  },
  {
    groupData: [
      { name: "Mertz-Hackett", roomCount: 13, revenue: "$243.65" },
      { name: "Schulist-Boehm", roomCount: 41, revenue: "$286.54" },
      { name: "Deckow-Gutkowski", roomCount: 37, revenue: "$475.22" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Torry",
        guestName: "Torry Jukubczak",
        reason: "Streamlined responsive time-frame",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 62,
        details: "Cloned 3rd generation definition",
      },
      {
        code: "HK",
        roomNumber: 74,
        details: "Re-contextualized zero defect hub",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "Profit-focused maximized adapter",
      },
      {
        code: "C5",
        roomNumber: 85,
        details: "Function-based 24/7 application",
      },
    ],
    revenueData: [
      { total: "$10633.12", group: "$1353.38", company: "$1213.41" },
    ],
    roomData: [
      {
        total: 17,
        company: 8,
        outOfOrder: 9,
        stayOver: 44,
        arrivals: 22,
        departures: 41,
      },
    ],
  },
  {
    groupData: [{ name: "Pacocha-Wisoky", roomCount: 33, revenue: "$244.34" }],
    compRoomInfo: [
      {
        authorizedBy: "Vernice",
        guestName: "Vernice McCurtin",
        reason: "Balanced 24/7 solution",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 65,
        details: "Programmable background secured line",
      },
    ],
    revenueData: [{ total: "$7451.39", group: "$722.05", company: "$1645.66" }],
    roomData: [
      {
        total: 11,
        company: 9,
        outOfOrder: 0,
        stayOver: 13,
        arrivals: 84,
        departures: 9,
      },
    ],
  },
  {
    groupData: [
      { name: "Wolf Inc", roomCount: 15, revenue: "$170.25" },
      { name: "Considine and Sons", roomCount: 28, revenue: "$243.64" },
      { name: "Strosin-Johnston", roomCount: 9, revenue: "$367.88" },
      { name: "Little Inc", roomCount: 15, revenue: "$486.85" },
      { name: "Steuber-Sauer", roomCount: 21, revenue: "$353.09" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Maurie",
        guestName: "Maurie Liff",
        reason: "Down-sized zero administration installation",
      },
      {
        authorizedBy: "Colette",
        guestName: "Colette Malham",
        reason: "Diverse web-enabled policy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 22,
        details: "Balanced solution-oriented middleware",
      },
      {
        code: "C5",
        roomNumber: 17,
        details: "Compatible leading edge productivity",
      },
      {
        code: "HK",
        roomNumber: 56,
        details: "Monitored full-range service-desk",
      },
    ],
    revenueData: [
      { total: "$5962.62", group: "$1261.56", company: "$2345.75" },
    ],
    roomData: [
      {
        total: 47,
        company: 3,
        outOfOrder: 0,
        stayOver: 33,
        arrivals: 89,
        departures: 61,
      },
    ],
  },
  {
    groupData: [
      { name: "Nitzsche-Franecki", roomCount: 19, revenue: "$379.73" },
      { name: "Rath LLC", roomCount: 42, revenue: "$101.53" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ulric",
        guestName: "Ulric Rushforth",
        reason: "Proactive didactic database",
      },
      {
        authorizedBy: "Kalindi",
        guestName: "Kalindi Roddick",
        reason: "Open-source stable complexity",
      },
      {
        authorizedBy: "Laney",
        guestName: "Laney Molan",
        reason: "Right-sized 6th generation knowledge base",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 64, details: "Realigned even-keeled hub" },
      {
        code: "HK",
        roomNumber: 96,
        details: "Organic bandwidth-monitored budgetary management",
      },
    ],
    revenueData: [{ total: "$16297.41", group: "$194.97", company: "$402.40" }],
    roomData: [
      {
        total: 8,
        company: 1,
        outOfOrder: 3,
        stayOver: 50,
        arrivals: 75,
        departures: 51,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Leslie",
        guestName: "Leslie Durkin",
        reason: "Visionary transitional toolset",
      },
      {
        authorizedBy: "Darleen",
        guestName: "Darleen Blaver",
        reason: "Expanded context-sensitive migration",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 64,
        details: "Triple-buffered intermediate archive",
      },
    ],
    revenueData: [
      { total: "$12994.16", group: "$932.90", company: "$1433.08" },
    ],
    roomData: [
      {
        total: 95,
        company: 7,
        outOfOrder: 3,
        stayOver: 22,
        arrivals: 43,
        departures: 52,
      },
    ],
  },
  {
    groupData: [
      { name: "Corwin Group", roomCount: 38, revenue: "$361.75" },
      { name: "Kuvalis-Hegmann", roomCount: 36, revenue: "$305.92" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Gerianne",
        guestName: "Gerianne Natalie",
        reason: "Diverse heuristic architecture",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$9572.59", group: "$261.09", company: "$1210.38" }],
    roomData: [
      {
        total: 98,
        company: 6,
        outOfOrder: 7,
        stayOver: 23,
        arrivals: 96,
        departures: 90,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Lucie",
        guestName: "Lucie Averall",
        reason: "Streamlined upward-trending Graphical User Interface",
      },
      {
        authorizedBy: "Ilaire",
        guestName: "Ilaire Worsam",
        reason: "De-engineered attitude-oriented challenge",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "Decentralized regional conglomeration",
      },
      {
        code: "HK",
        roomNumber: 100,
        details: "Re-contextualized zero administration emulation",
      },
    ],
    revenueData: [{ total: "$6110.84", group: "$1137.88", company: "$110.54" }],
    roomData: [
      {
        total: 6,
        company: 1,
        outOfOrder: 9,
        stayOver: 39,
        arrivals: 84,
        departures: 82,
      },
    ],
  },
  {
    groupData: [{ name: "Crooks and Sons", roomCount: 29, revenue: "$443.52" }],
    compRoomInfo: [
      {
        authorizedBy: "Hurlee",
        guestName: "Hurlee Yallowley",
        reason: "Team-oriented explicit task-force",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 59,
        details: "Innovative systematic productivity",
      },
      {
        code: "C5",
        roomNumber: 1,
        details: "Right-sized attitude-oriented standardization",
      },
      {
        code: "HK",
        roomNumber: 37,
        details: "Open-architected full-range capacity",
      },
      {
        code: "C5",
        roomNumber: 71,
        details: "Digitized systemic orchestration",
      },
      { code: "C5", roomNumber: 56, details: "Switchable full-range website" },
    ],
    revenueData: [
      { total: "$16558.13", group: "$1876.27", company: "$2468.00" },
    ],
    roomData: [
      {
        total: 75,
        company: 0,
        outOfOrder: 5,
        stayOver: 23,
        arrivals: 97,
        departures: 55,
      },
    ],
  },
  {
    groupData: [
      { name: "Beier-Schmidt", roomCount: 28, revenue: "$443.95" },
      { name: "Gleason LLC", roomCount: 3, revenue: "$282.06" },
      { name: "Krajcik and Sons", roomCount: 10, revenue: "$353.29" },
      { name: "Crist, Nitzsche and Lowe", roomCount: 13, revenue: "$314.35" },
      { name: "Senger, Blick and Haley", roomCount: 13, revenue: "$105.89" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Wenona",
        guestName: "Wenona Tschirschky",
        reason: "Polarised directional middleware",
      },
      {
        authorizedBy: "Charita",
        guestName: "Charita Nayshe",
        reason: "User-friendly directional attitude",
      },
      {
        authorizedBy: "Nadia",
        guestName: "Nadia Wearn",
        reason: "Horizontal multi-tasking contingency",
      },
      {
        authorizedBy: "Oralia",
        guestName: "Oralia McKag",
        reason: "Seamless attitude-oriented adapter",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 20,
        details: "Self-enabling bottom-line product",
      },
      {
        code: "C5",
        roomNumber: 78,
        details: "Open-source bifurcated interface",
      },
      {
        code: "C5",
        roomNumber: 62,
        details: "Business-focused systematic leverage",
      },
      {
        code: "HK",
        roomNumber: 67,
        details: "Monitored bandwidth-monitored standardization",
      },
      {
        code: "HK",
        roomNumber: 59,
        details: "Networked homogeneous internet solution",
      },
    ],
    revenueData: [
      { total: "$9640.41", group: "$1907.13", company: "$1453.34" },
    ],
    roomData: [
      {
        total: 84,
        company: 9,
        outOfOrder: 9,
        stayOver: 38,
        arrivals: 47,
        departures: 24,
      },
    ],
  },
  {
    groupData: [
      { name: "Mohr, Reinger and Dickens", roomCount: 1, revenue: "$197.76" },
      { name: "Satterfield and Sons", roomCount: 26, revenue: "$358.23" },
      {
        name: "Nitzsche, Herzog and Dibbert",
        roomCount: 21,
        revenue: "$120.70",
      },
      { name: "Corwin Inc", roomCount: 13, revenue: "$218.00" },
      { name: "Beahan LLC", roomCount: 24, revenue: "$105.28" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Erna",
        guestName: "Erna Kighly",
        reason: "Seamless logistical ability",
      },
      {
        authorizedBy: "Gael",
        guestName: "Gael Troke",
        reason: "Ergonomic high-level capability",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 11, details: "Focused hybrid intranet" },
    ],
    revenueData: [
      { total: "$6104.98", group: "$1194.66", company: "$2476.27" },
    ],
    roomData: [
      {
        total: 27,
        company: 2,
        outOfOrder: 7,
        stayOver: 12,
        arrivals: 44,
        departures: 84,
      },
    ],
  },
  {
    groupData: [
      { name: "Gleichner Group", roomCount: 39, revenue: "$315.68" },
      { name: "Tillman-Pouros", roomCount: 0, revenue: "$444.02" },
      { name: "Gleichner Group", roomCount: 4, revenue: "$134.78" },
      { name: "Stoltenberg LLC", roomCount: 35, revenue: "$493.79" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Perl",
        guestName: "Perl Fingleton",
        reason: "Optimized high-level forecast",
      },
      {
        authorizedBy: "Caresa",
        guestName: "Caresa Vickar",
        reason: "Business-focused neutral budgetary management",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 25, details: "Down-sized scalable model" },
    ],
    revenueData: [
      { total: "$12502.03", group: "$247.08", company: "$2955.74" },
    ],
    roomData: [
      {
        total: 68,
        company: 5,
        outOfOrder: 3,
        stayOver: 28,
        arrivals: 1,
        departures: 30,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Ernser, Kassulke and Hoeger",
        roomCount: 47,
        revenue: "$324.59",
      },
      { name: "Ledner, Marks and Dietrich", roomCount: 37, revenue: "$328.12" },
      { name: "Brown-Heathcote", roomCount: 48, revenue: "$188.42" },
      { name: "Mraz Inc", roomCount: 25, revenue: "$256.34" },
      { name: "MacGyver-Friesen", roomCount: 28, revenue: "$139.56" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ramsey",
        guestName: "Ramsey McConnal",
        reason: "Up-sized system-worthy emulation",
      },
      {
        authorizedBy: "Saunderson",
        guestName: "Saunderson Morphet",
        reason: "Switchable well-modulated workforce",
      },
      {
        authorizedBy: "Dyann",
        guestName: "Dyann Demeza",
        reason: "Triple-buffered mobile installation",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 95, details: "Focused radical circuit" },
      {
        code: "HK",
        roomNumber: 20,
        details: "Down-sized client-server paradigm",
      },
    ],
    revenueData: [
      { total: "$5965.56", group: "$1023.87", company: "$1446.90" },
    ],
    roomData: [
      {
        total: 36,
        company: 1,
        outOfOrder: 1,
        stayOver: 1,
        arrivals: 0,
        departures: 100,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Sid",
        guestName: "Sid Meese",
        reason: "Multi-channelled systemic circuit",
      },
      {
        authorizedBy: "Bee",
        guestName: "Bee Vieyra",
        reason: "Profound static software",
      },
      {
        authorizedBy: "Jodie",
        guestName: "Jodie Gozzard",
        reason: "Pre-emptive logistical archive",
      },
      {
        authorizedBy: "Nicola",
        guestName: "Nicola Colbertson",
        reason: "Implemented methodical circuit",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 24,
        details: "Robust client-driven instruction set",
      },
      {
        code: "C5",
        roomNumber: 24,
        details: "Business-focused modular portal",
      },
      {
        code: "HK",
        roomNumber: 32,
        details: "Enhanced bottom-line utilisation",
      },
    ],
    revenueData: [
      { total: "$6012.14", group: "$1873.62", company: "$1915.12" },
    ],
    roomData: [
      {
        total: 33,
        company: 7,
        outOfOrder: 4,
        stayOver: 28,
        arrivals: 67,
        departures: 18,
      },
    ],
  },
  {
    groupData: [
      { name: "Schoen-Mann", roomCount: 12, revenue: "$331.57" },
      { name: "Pfannerstill and Sons", roomCount: 8, revenue: "$221.76" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Lianna",
        guestName: "Lianna Whitear",
        reason: "Expanded multi-tasking groupware",
      },
      {
        authorizedBy: "Benedicta",
        guestName: "Benedicta Seeds",
        reason: "Implemented value-added Graphical User Interface",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$16440.66", group: "$1883.67", company: "$821.03" },
    ],
    roomData: [
      {
        total: 52,
        company: 4,
        outOfOrder: 0,
        stayOver: 42,
        arrivals: 5,
        departures: 54,
      },
    ],
  },
  {
    groupData: [
      { name: "Dach, Hoppe and Gusikowski", roomCount: 23, revenue: "$402.40" },
      {
        name: "Kohler, Kirlin and Schulist",
        roomCount: 48,
        revenue: "$146.13",
      },
      { name: "Oberbrunner LLC", roomCount: 7, revenue: "$167.03" },
      { name: "Bednar Inc", roomCount: 26, revenue: "$241.65" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Hamnet",
        guestName: "Hamnet Newvill",
        reason: "Decentralized bandwidth-monitored emulation",
      },
      {
        authorizedBy: "Juanita",
        guestName: "Juanita MacHoste",
        reason: "Front-line maximized functionalities",
      },
      {
        authorizedBy: "Lucie",
        guestName: "Lucie Winyard",
        reason: "Optimized encompassing instruction set",
      },
      {
        authorizedBy: "Nickola",
        guestName: "Nickola Riddington",
        reason: "Multi-tiered systemic throughput",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 98,
        details: "Universal web-enabled moratorium",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "Open-architected didactic structure",
      },
      {
        code: "HK",
        roomNumber: 76,
        details: "Optimized interactive conglomeration",
      },
    ],
    revenueData: [{ total: "$7905.25", group: "$1351.38", company: "$935.53" }],
    roomData: [
      {
        total: 45,
        company: 4,
        outOfOrder: 3,
        stayOver: 18,
        arrivals: 80,
        departures: 99,
      },
    ],
  },
  {
    groupData: [
      { name: "Gorczany-Rodriguez", roomCount: 15, revenue: "$257.35" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Karita",
        guestName: "Karita Lamas",
        reason: "Streamlined grid-enabled hardware",
      },
      {
        authorizedBy: "Natalee",
        guestName: "Natalee Macari",
        reason: "Robust non-volatile hardware",
      },
      {
        authorizedBy: "Shayne",
        guestName: "Shayne Labon",
        reason: "Re-engineered web-enabled ability",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 35,
        details: "Versatile incremental process improvement",
      },
      { code: "HK", roomNumber: 17, details: "Multi-lateral reciprocal array" },
      {
        code: "C5",
        roomNumber: 14,
        details: "Fully-configurable holistic task-force",
      },
      {
        code: "C5",
        roomNumber: 27,
        details: "Reactive non-volatile instruction set",
      },
    ],
    revenueData: [
      { total: "$6120.54", group: "$1128.64", company: "$2704.50" },
    ],
    roomData: [
      {
        total: 21,
        company: 2,
        outOfOrder: 6,
        stayOver: 50,
        arrivals: 17,
        departures: 62,
      },
    ],
  },
  {
    groupData: [
      { name: "Block, Towne and Collins", roomCount: 8, revenue: "$408.05" },
      {
        name: "Hartmann, Lakin and Wuckert",
        roomCount: 16,
        revenue: "$166.73",
      },
      { name: "Zulauf and Sons", roomCount: 38, revenue: "$310.00" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Vanya",
        guestName: "Vanya Wyllis",
        reason: "Synchronised modular solution",
      },
      {
        authorizedBy: "Harlie",
        guestName: "Harlie Dobbison",
        reason: "Synergistic tangible internet solution",
      },
      {
        authorizedBy: "Elbertina",
        guestName: "Elbertina Grebert",
        reason: "Balanced executive process improvement",
      },
      {
        authorizedBy: "Rosina",
        guestName: "Rosina Redler",
        reason: "Expanded fault-tolerant access",
      },
      {
        authorizedBy: "Sissie",
        guestName: "Sissie Wethey",
        reason: "Customer-focused bandwidth-monitored archive",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$5565.01", group: "$626.97", company: "$1926.35" }],
    roomData: [
      {
        total: 4,
        company: 7,
        outOfOrder: 5,
        stayOver: 31,
        arrivals: 4,
        departures: 48,
      },
    ],
  },
  {
    groupData: [
      { name: "Hammes Group", roomCount: 48, revenue: "$183.58" },
      { name: "King-Champlin", roomCount: 37, revenue: "$461.20" },
      { name: "Purdy and Sons", roomCount: 2, revenue: "$186.29" },
      { name: "Hoeger, Marvin and Ritchie", roomCount: 34, revenue: "$320.62" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Kim",
        guestName: "Kim Kerwick",
        reason: "Cloned hybrid matrices",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 68,
        details: "Down-sized mission-critical process improvement",
      },
      {
        code: "C5",
        roomNumber: 24,
        details: "Reverse-engineered fresh-thinking moratorium",
      },
      {
        code: "C5",
        roomNumber: 37,
        details: "Self-enabling uniform architecture",
      },
      {
        code: "HK",
        roomNumber: 63,
        details: "Realigned multi-tasking concept",
      },
    ],
    revenueData: [
      { total: "$15693.57", group: "$1089.11", company: "$1210.43" },
    ],
    roomData: [
      {
        total: 45,
        company: 10,
        outOfOrder: 3,
        stayOver: 19,
        arrivals: 54,
        departures: 11,
      },
    ],
  },
  {
    groupData: [{ name: "Pollich-Adams", roomCount: 42, revenue: "$259.97" }],
    compRoomInfo: [
      {
        authorizedBy: "Giacobo",
        guestName: "Giacobo Copcott",
        reason: "Multi-lateral scalable instruction set",
      },
      {
        authorizedBy: "Ellissa",
        guestName: "Ellissa Vitall",
        reason: "Focused clear-thinking function",
      },
      {
        authorizedBy: "Meta",
        guestName: "Meta Hun",
        reason: "Horizontal disintermediate policy",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$12598.79", group: "$1878.08", company: "$2943.97" },
    ],
    roomData: [
      {
        total: 48,
        company: 2,
        outOfOrder: 3,
        stayOver: 21,
        arrivals: 75,
        departures: 71,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Marylynne",
        guestName: "Marylynne Guillou",
        reason: "Distributed multi-state knowledge user",
      },
      {
        authorizedBy: "Jens",
        guestName: "Jens Phillott",
        reason: "Innovative incremental hub",
      },
      {
        authorizedBy: "Saudra",
        guestName: "Saudra Forde",
        reason: "Business-focused actuating projection",
      },
      {
        authorizedBy: "Emilie",
        guestName: "Emilie Fattorini",
        reason: "Synchronised tangible application",
      },
      {
        authorizedBy: "Othelia",
        guestName: "Othelia Fittis",
        reason: "User-centric bandwidth-monitored application",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 90,
        details: "Open-architected web-enabled groupware",
      },
      { code: "C5", roomNumber: 43, details: "Exclusive full-range emulation" },
      { code: "C5", roomNumber: 53, details: "Horizontal zero defect archive" },
    ],
    revenueData: [{ total: "$8799.78", group: "$1757.40", company: "$317.35" }],
    roomData: [
      {
        total: 63,
        company: 0,
        outOfOrder: 10,
        stayOver: 11,
        arrivals: 2,
        departures: 75,
      },
    ],
  },
  {
    groupData: [{ name: "Schaefer-Mills", roomCount: 9, revenue: "$106.96" }],
    compRoomInfo: [
      {
        authorizedBy: "Stevy",
        guestName: "Stevy Bear",
        reason: "Cross-platform holistic moderator",
      },
      {
        authorizedBy: "Garrek",
        guestName: "Garrek Armor",
        reason: "Re-engineered systemic Graphical User Interface",
      },
      {
        authorizedBy: "Anastasie",
        guestName: "Anastasie Docksey",
        reason: "Progressive systematic forecast",
      },
      {
        authorizedBy: "Irving",
        guestName: "Irving Keough",
        reason: "Focused upward-trending implementation",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 15,
        details: "User-centric motivating capacity",
      },
      { code: "C5", roomNumber: 18, details: "Up-sized executive initiative" },
    ],
    revenueData: [
      { total: "$15079.29", group: "$1781.40", company: "$2790.00" },
    ],
    roomData: [
      {
        total: 28,
        company: 3,
        outOfOrder: 1,
        stayOver: 15,
        arrivals: 4,
        departures: 26,
      },
    ],
  },
  {
    groupData: [
      { name: "Klein, Leannon and Hirthe", roomCount: 18, revenue: "$430.11" },
      { name: "Mann Inc", roomCount: 47, revenue: "$324.09" },
      { name: "Shields-Gorczany", roomCount: 25, revenue: "$494.88" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Monah",
        guestName: "Monah Blackie",
        reason: "Synergistic leading edge intranet",
      },
      {
        authorizedBy: "Lorrie",
        guestName: "Lorrie Hayland",
        reason: "Quality-focused upward-trending portal",
      },
      {
        authorizedBy: "Quincey",
        guestName: "Quincey Birkmyre",
        reason: "Innovative dedicated analyzer",
      },
      {
        authorizedBy: "Shanon",
        guestName: "Shanon Knee",
        reason: "Universal systemic approach",
      },
      {
        authorizedBy: "Rahal",
        guestName: "Rahal McAlinden",
        reason: "Implemented mission-critical contingency",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 81,
        details: "Integrated homogeneous monitoring",
      },
      { code: "C5", roomNumber: 94, details: "Organized systemic toolset" },
      {
        code: "HK",
        roomNumber: 35,
        details: "Multi-channelled discrete knowledge user",
      },
      {
        code: "HK",
        roomNumber: 87,
        details: "Configurable global methodology",
      },
      { code: "HK", roomNumber: 30, details: "Upgradable dynamic hardware" },
    ],
    revenueData: [
      { total: "$18233.01", group: "$1772.68", company: "$2854.60" },
    ],
    roomData: [
      {
        total: 21,
        company: 3,
        outOfOrder: 9,
        stayOver: 3,
        arrivals: 35,
        departures: 17,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Daryl",
        guestName: "Daryl Cahn",
        reason: "Operative user-facing array",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$5664.03", group: "$903.37", company: "$2717.26" }],
    roomData: [
      {
        total: 99,
        company: 2,
        outOfOrder: 5,
        stayOver: 49,
        arrivals: 3,
        departures: 77,
      },
    ],
  },
  {
    groupData: [
      { name: "Walsh, Cummings and Blick", roomCount: 7, revenue: "$224.81" },
      { name: "Pollich Inc", roomCount: 17, revenue: "$368.95" },
      { name: "Parker Group", roomCount: 27, revenue: "$162.50" },
      { name: "Tromp LLC", roomCount: 9, revenue: "$256.55" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Panchito",
        guestName: "Panchito Kuschke",
        reason: "Down-sized discrete intranet",
      },
      {
        authorizedBy: "Dara",
        guestName: "Dara Blagdon",
        reason: "Progressive tertiary attitude",
      },
      {
        authorizedBy: "Conchita",
        guestName: "Conchita Blundell",
        reason: "Right-sized transitional model",
      },
      {
        authorizedBy: "Sauncho",
        guestName: "Sauncho Sheldrake",
        reason: "Triple-buffered holistic groupware",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 2, details: "Profound reciprocal utilisation" },
      {
        code: "HK",
        roomNumber: 80,
        details: "Implemented 6th generation task-force",
      },
    ],
    revenueData: [
      { total: "$17890.58", group: "$1239.95", company: "$1187.06" },
    ],
    roomData: [
      {
        total: 37,
        company: 9,
        outOfOrder: 0,
        stayOver: 25,
        arrivals: 6,
        departures: 97,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Miner",
        guestName: "Miner Elfe",
        reason: "Multi-lateral motivating structure",
      },
      {
        authorizedBy: "Dot",
        guestName: "Dot Jewkes",
        reason: "Total uniform toolset",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 60, details: "Progressive neutral core" },
      {
        code: "C5",
        roomNumber: 67,
        details: "Intuitive object-oriented alliance",
      },
      { code: "C5", roomNumber: 10, details: "Profit-focused global matrix" },
      {
        code: "C5",
        roomNumber: 23,
        details: "Face to face contextually-based capacity",
      },
    ],
    revenueData: [
      { total: "$11550.66", group: "$1546.87", company: "$663.41" },
    ],
    roomData: [
      {
        total: 87,
        company: 3,
        outOfOrder: 7,
        stayOver: 15,
        arrivals: 23,
        departures: 46,
      },
    ],
  },
  {
    groupData: [
      { name: "Smitham, Franecki and Feil", roomCount: 12, revenue: "$354.33" },
      { name: "Pollich and Sons", roomCount: 9, revenue: "$323.11" },
      { name: "Haley-Daugherty", roomCount: 6, revenue: "$318.02" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Elwood",
        guestName: "Elwood Arrault",
        reason: "Function-based disintermediate capability",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 39, details: "Enhanced regional framework" },
      { code: "HK", roomNumber: 32, details: "Total even-keeled help-desk" },
      {
        code: "HK",
        roomNumber: 54,
        details: "Decentralized 5th generation benchmark",
      },
      {
        code: "HK",
        roomNumber: 46,
        details: "Programmable 24/7 local area network",
      },
      {
        code: "HK",
        roomNumber: 1,
        details: "Synergized systematic secured line",
      },
    ],
    revenueData: [
      { total: "$16509.45", group: "$1525.79", company: "$1432.34" },
    ],
    roomData: [
      {
        total: 41,
        company: 10,
        outOfOrder: 4,
        stayOver: 21,
        arrivals: 22,
        departures: 52,
      },
    ],
  },
  {
    groupData: [{ name: "Jakubowski LLC", roomCount: 5, revenue: "$192.37" }],
    compRoomInfo: [
      {
        authorizedBy: "Jamill",
        guestName: "Jamill Otter",
        reason: "Focused holistic encryption",
      },
      {
        authorizedBy: "Ailee",
        guestName: "Ailee Casaccio",
        reason: "Compatible web-enabled parallelism",
      },
      {
        authorizedBy: "Doretta",
        guestName: "Doretta Thamelt",
        reason: "Multi-channelled context-sensitive hierarchy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 52,
        details: "Organic demand-driven info-mediaries",
      },
      {
        code: "HK",
        roomNumber: 64,
        details: "Triple-buffered clear-thinking flexibility",
      },
      { code: "HK", roomNumber: 2, details: "Distributed asymmetric alliance" },
      { code: "HK", roomNumber: 5, details: "Reduced grid-enabled matrices" },
    ],
    revenueData: [{ total: "$6567.05", group: "$1089.77", company: "$174.11" }],
    roomData: [
      {
        total: 93,
        company: 4,
        outOfOrder: 6,
        stayOver: 13,
        arrivals: 88,
        departures: 98,
      },
    ],
  },
  {
    groupData: [
      { name: "Nikolaus, Wyman and Moore", roomCount: 23, revenue: "$475.07" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Lester",
        guestName: "Lester Wethers",
        reason: "Enterprise-wide homogeneous paradigm",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 88,
        details: "Multi-tiered discrete neural-net",
      },
      {
        code: "C5",
        roomNumber: 83,
        details: "Self-enabling system-worthy conglomeration",
      },
    ],
    revenueData: [{ total: "$6717.21", group: "$1534.56", company: "$416.88" }],
    roomData: [
      {
        total: 21,
        company: 0,
        outOfOrder: 10,
        stayOver: 13,
        arrivals: 48,
        departures: 12,
      },
    ],
  },
  {
    groupData: [
      { name: "Beatty LLC", roomCount: 44, revenue: "$165.07" },
      { name: "Frami, Ernser and Miller", roomCount: 49, revenue: "$112.34" },
      {
        name: "Herman, Tremblay and McClure",
        roomCount: 7,
        revenue: "$244.09",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Greer",
        guestName: "Greer Lockney",
        reason: "Up-sized high-level orchestration",
      },
      {
        authorizedBy: "Salem",
        guestName: "Salem Leving",
        reason: "Realigned hybrid complexity",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$12205.53", group: "$1845.74", company: "$1613.14" },
    ],
    roomData: [
      {
        total: 54,
        company: 10,
        outOfOrder: 6,
        stayOver: 27,
        arrivals: 39,
        departures: 96,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Robinet",
        guestName: "Robinet Cattel",
        reason: "Upgradable 6th generation hardware",
      },
      {
        authorizedBy: "Matthus",
        guestName: "Matthus Ten Broek",
        reason: "Secured stable customer loyalty",
      },
      {
        authorizedBy: "Beverlee",
        guestName: "Beverlee Barwood",
        reason: "Centralized bifurcated productivity",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 86,
        details: "Multi-tiered executive Graphical User Interface",
      },
      {
        code: "HK",
        roomNumber: 35,
        details: "Exclusive intangible infrastructure",
      },
      { code: "HK", roomNumber: 86, details: "Exclusive explicit forecast" },
      {
        code: "HK",
        roomNumber: 24,
        details: "Persevering zero defect strategy",
      },
    ],
    revenueData: [
      { total: "$10846.46", group: "$1922.33", company: "$2300.08" },
    ],
    roomData: [
      {
        total: 72,
        company: 5,
        outOfOrder: 9,
        stayOver: 21,
        arrivals: 51,
        departures: 83,
      },
    ],
  },
  {
    groupData: [
      { name: "Hilll, Berge and Bruen", roomCount: 35, revenue: "$337.03" },
      { name: "O'Kon, Bauch and Dare", roomCount: 48, revenue: "$427.48" },
      { name: "Langworth, Mohr and Upton", roomCount: 19, revenue: "$165.49" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Aggie",
        guestName: "Aggie Van Son",
        reason: "Upgradable user-facing structure",
      },
      {
        authorizedBy: "Jedd",
        guestName: "Jedd Miner",
        reason: "Fundamental 3rd generation time-frame",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$6201.92", group: "$1040.32", company: "$2486.37" },
    ],
    roomData: [
      {
        total: 23,
        company: 7,
        outOfOrder: 9,
        stayOver: 4,
        arrivals: 26,
        departures: 100,
      },
    ],
  },
  {
    groupData: [{ name: "Lynch-Bednar", roomCount: 33, revenue: "$243.30" }],
    compRoomInfo: [
      {
        authorizedBy: "Lizzie",
        guestName: "Lizzie Schouthede",
        reason: "Fully-configurable regional service-desk",
      },
      {
        authorizedBy: "Nannette",
        guestName: "Nannette Bottrill",
        reason: "Multi-channelled systemic extranet",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 83, details: "Ergonomic regional portal" },
    ],
    revenueData: [
      { total: "$12309.38", group: "$1196.93", company: "$2772.06" },
    ],
    roomData: [
      {
        total: 41,
        company: 6,
        outOfOrder: 0,
        stayOver: 29,
        arrivals: 48,
        departures: 2,
      },
    ],
  },
  {
    groupData: [{ name: "Heaney-Bernier", roomCount: 48, revenue: "$324.17" }],
    compRoomInfo: [
      {
        authorizedBy: "Feliks",
        guestName: "Feliks Bowstead",
        reason: "Streamlined even-keeled core",
      },
      {
        authorizedBy: "Paulie",
        guestName: "Paulie Ridding",
        reason: "Stand-alone demand-driven support",
      },
      {
        authorizedBy: "Sula",
        guestName: "Sula Zielinski",
        reason: "Automated homogeneous orchestration",
      },
      {
        authorizedBy: "Marcello",
        guestName: "Marcello Dugood",
        reason: "Adaptive 4th generation concept",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 31, details: "Synergized logistical array" },
      {
        code: "C5",
        roomNumber: 60,
        details: "Digitized holistic infrastructure",
      },
      {
        code: "HK",
        roomNumber: 15,
        details: "Automated web-enabled collaboration",
      },
      { code: "C5", roomNumber: 22, details: "Seamless high-level hierarchy" },
      { code: "HK", roomNumber: 100, details: "Advanced didactic hierarchy" },
    ],
    revenueData: [{ total: "$17788.14", group: "$156.67", company: "$612.71" }],
    roomData: [
      {
        total: 17,
        company: 8,
        outOfOrder: 6,
        stayOver: 40,
        arrivals: 13,
        departures: 80,
      },
    ],
  },
  {
    groupData: [
      { name: "Abernathy-Ullrich", roomCount: 0, revenue: "$362.81" },
      { name: "Mante Inc", roomCount: 37, revenue: "$476.38" },
      { name: "Gutmann, Towne and Bayer", roomCount: 13, revenue: "$130.93" },
      { name: "Heathcote Group", roomCount: 27, revenue: "$361.41" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Clark",
        guestName: "Clark Clemett",
        reason: "Expanded tertiary info-mediaries",
      },
      {
        authorizedBy: "Zacharia",
        guestName: "Zacharia Doodson",
        reason: "Centralized upward-trending software",
      },
      {
        authorizedBy: "Christi",
        guestName: "Christi Dotson",
        reason: "Intuitive next generation throughput",
      },
      {
        authorizedBy: "Courtney",
        guestName: "Courtney Simoni",
        reason: "Automated logistical local area network",
      },
      {
        authorizedBy: "Freida",
        guestName: "Freida Wile",
        reason: "Right-sized next generation help-desk",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 25,
        details: "Horizontal fault-tolerant moratorium",
      },
      {
        code: "HK",
        roomNumber: 73,
        details: "Configurable zero administration capability",
      },
      { code: "C5", roomNumber: 85, details: "Upgradable impactful function" },
      {
        code: "C5",
        roomNumber: 93,
        details: "Automated real-time open architecture",
      },
    ],
    revenueData: [
      { total: "$14540.64", group: "$1186.15", company: "$1542.78" },
    ],
    roomData: [
      {
        total: 86,
        company: 3,
        outOfOrder: 2,
        stayOver: 3,
        arrivals: 31,
        departures: 88,
      },
    ],
  },
  {
    groupData: [
      { name: "Olson-Kulas", roomCount: 40, revenue: "$376.72" },
      { name: "Sauer, Stiedemann and Kiehn", roomCount: 3, revenue: "$175.92" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Martha",
        guestName: "Martha Harrington",
        reason: "Optimized mission-critical artificial intelligence",
      },
      {
        authorizedBy: "Hendrika",
        guestName: "Hendrika Castell",
        reason: "Cloned bottom-line service-desk",
      },
      {
        authorizedBy: "Amabelle",
        guestName: "Amabelle Lawie",
        reason: "Up-sized systematic productivity",
      },
      {
        authorizedBy: "Danika",
        guestName: "Danika Zarfati",
        reason: "Synergized disintermediate productivity",
      },
      {
        authorizedBy: "Peirce",
        guestName: "Peirce Flescher",
        reason: "Synergistic foreground superstructure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "Organized 6th generation algorithm",
      },
      {
        code: "C5",
        roomNumber: 49,
        details: "Streamlined zero administration approach",
      },
      {
        code: "C5",
        roomNumber: 71,
        details: "Compatible background productivity",
      },
      {
        code: "HK",
        roomNumber: 45,
        details: "Front-line 6th generation protocol",
      },
    ],
    revenueData: [
      { total: "$13586.94", group: "$997.33", company: "$2767.93" },
    ],
    roomData: [
      {
        total: 95,
        company: 6,
        outOfOrder: 3,
        stayOver: 20,
        arrivals: 55,
        departures: 2,
      },
    ],
  },
  {
    groupData: [
      { name: "Kassulke-Glover", roomCount: 16, revenue: "$175.98" },
      { name: "Kuvalis Inc", roomCount: 0, revenue: "$103.31" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Rochester",
        guestName: "Rochester Buckle",
        reason: "Object-based dedicated budgetary management",
      },
      {
        authorizedBy: "Patti",
        guestName: "Patti Sines",
        reason: "Polarised background system engine",
      },
      {
        authorizedBy: "Maggy",
        guestName: "Maggy Jenks",
        reason: "Reduced exuding secured line",
      },
      {
        authorizedBy: "Fee",
        guestName: "Fee Patridge",
        reason: "Function-based tangible monitoring",
      },
      {
        authorizedBy: "Stevana",
        guestName: "Stevana Roddam",
        reason: "Extended well-modulated challenge",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$12687.49", group: "$1493.37", company: "$1916.13" },
    ],
    roomData: [
      {
        total: 57,
        company: 3,
        outOfOrder: 6,
        stayOver: 12,
        arrivals: 99,
        departures: 49,
      },
    ],
  },
  {
    groupData: [
      { name: "Volkman Group", roomCount: 31, revenue: "$298.06" },
      { name: "Lynch, Berge and Bartoletti", roomCount: 2, revenue: "$214.74" },
      {
        name: "D'Amore, Christiansen and Waters",
        roomCount: 0,
        revenue: "$378.75",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Christy",
        guestName: "Christy Woodstock",
        reason: "Inverse scalable collaboration",
      },
      {
        authorizedBy: "Norina",
        guestName: "Norina Cardenosa",
        reason: "Public-key motivating flexibility",
      },
      {
        authorizedBy: "Boy",
        guestName: "Boy Rihosek",
        reason: "Implemented scalable open system",
      },
      {
        authorizedBy: "Birgitta",
        guestName: "Birgitta Maymand",
        reason: "Synchronised heuristic definition",
      },
      {
        authorizedBy: "Ermanno",
        guestName: "Ermanno Sawter",
        reason: "Persevering didactic contingency",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 86,
        details: "Right-sized well-modulated pricing structure",
      },
      {
        code: "C5",
        roomNumber: 23,
        details: "Grass-roots even-keeled interface",
      },
    ],
    revenueData: [{ total: "$7807.93", group: "$523.71", company: "$2521.69" }],
    roomData: [
      {
        total: 40,
        company: 10,
        outOfOrder: 7,
        stayOver: 29,
        arrivals: 97,
        departures: 76,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Joseito",
        guestName: "Joseito Jirieck",
        reason: "Pre-emptive upward-trending process improvement",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 98, details: "Managed bifurcated complexity" },
      {
        code: "C5",
        roomNumber: 29,
        details: "Polarised mission-critical orchestration",
      },
    ],
    revenueData: [{ total: "$11384.88", group: "$667.38", company: "$477.34" }],
    roomData: [
      {
        total: 13,
        company: 3,
        outOfOrder: 5,
        stayOver: 33,
        arrivals: 82,
        departures: 9,
      },
    ],
  },
  {
    groupData: [
      { name: "Bahringer and Sons", roomCount: 26, revenue: "$416.48" },
      { name: "Feil-Flatley", roomCount: 4, revenue: "$376.53" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Kelly",
        guestName: "Kelly McAuslan",
        reason: "Polarised modular open system",
      },
      {
        authorizedBy: "Maybelle",
        guestName: "Maybelle Shackell",
        reason: "Diverse multimedia analyzer",
      },
      {
        authorizedBy: "Donnie",
        guestName: "Donnie Slym",
        reason: "Visionary cohesive capability",
      },
      {
        authorizedBy: "Nick",
        guestName: "Nick Vargas",
        reason: "Distributed fault-tolerant capability",
      },
      {
        authorizedBy: "Aland",
        guestName: "Aland Friett",
        reason: "Managed intermediate help-desk",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 39, details: "Switchable neutral analyzer" },
    ],
    revenueData: [
      { total: "$5515.29", group: "$1285.23", company: "$2827.17" },
    ],
    roomData: [
      {
        total: 76,
        company: 0,
        outOfOrder: 4,
        stayOver: 21,
        arrivals: 57,
        departures: 89,
      },
    ],
  },
  {
    groupData: [
      { name: "Baumbach-Stoltenberg", roomCount: 26, revenue: "$452.60" },
      {
        name: "Greenfelder, Green and Waelchi",
        roomCount: 27,
        revenue: "$390.22",
      },
      {
        name: "Turner, Turcotte and Reichert",
        roomCount: 35,
        revenue: "$403.73",
      },
      { name: "Cassin-Lesch", roomCount: 21, revenue: "$436.99" },
      {
        name: "Schaefer, Weimann and Dooley",
        roomCount: 22,
        revenue: "$179.08",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Laraine",
        guestName: "Laraine Dwyer",
        reason: "Secured full-range moderator",
      },
      {
        authorizedBy: "Carter",
        guestName: "Carter Brammall",
        reason: "Seamless optimal encoding",
      },
      {
        authorizedBy: "Riki",
        guestName: "Riki Fouracres",
        reason: "Open-architected holistic task-force",
      },
      {
        authorizedBy: "Temple",
        guestName: "Temple Quilkin",
        reason: "Triple-buffered 5th generation matrices",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 77, details: "Down-sized local secured line" },
      {
        code: "C5",
        roomNumber: 72,
        details: "Robust asynchronous instruction set",
      },
    ],
    revenueData: [{ total: "$16589.55", group: "$696.09", company: "$645.01" }],
    roomData: [
      {
        total: 86,
        company: 3,
        outOfOrder: 6,
        stayOver: 10,
        arrivals: 22,
        departures: 92,
      },
    ],
  },
  {
    groupData: [
      { name: "Stamm-Veum", roomCount: 4, revenue: "$169.17" },
      { name: "Windler-Reynolds", roomCount: 37, revenue: "$441.50" },
      { name: "Kirlin, Kilback and Monahan", roomCount: 3, revenue: "$171.32" },
      { name: "Farrell LLC", roomCount: 6, revenue: "$195.10" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Beitris",
        guestName: "Beitris Christoffe",
        reason: "Progressive bi-directional standardization",
      },
      {
        authorizedBy: "Forrest",
        guestName: "Forrest Lindelof",
        reason: "Synchronised contextually-based application",
      },
      {
        authorizedBy: "Donnamarie",
        guestName: "Donnamarie MacAnulty",
        reason: "Exclusive bottom-line customer loyalty",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 46,
        details: "Business-focused fault-tolerant utilisation",
      },
      { code: "C5", roomNumber: 5, details: "Devolved methodical database" },
    ],
    revenueData: [
      { total: "$11182.00", group: "$1452.84", company: "$2751.72" },
    ],
    roomData: [
      {
        total: 75,
        company: 8,
        outOfOrder: 3,
        stayOver: 14,
        arrivals: 26,
        departures: 54,
      },
    ],
  },
  {
    groupData: [
      { name: "McKenzie-Rohan", roomCount: 39, revenue: "$392.12" },
      { name: "Howe-Nicolas", roomCount: 10, revenue: "$154.78" },
      { name: "McClure LLC", roomCount: 31, revenue: "$401.71" },
      { name: "Fadel, Dickens and Doyle", roomCount: 12, revenue: "$194.44" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ronica",
        guestName: "Ronica Spikings",
        reason: "Face to face 3rd generation installation",
      },
      {
        authorizedBy: "Duffie",
        guestName: "Duffie Orring",
        reason: "Synergistic transitional implementation",
      },
      {
        authorizedBy: "Morley",
        guestName: "Morley Munby",
        reason: "Digitized executive encoding",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 61,
        details: "Multi-channelled clear-thinking focus group",
      },
      {
        code: "HK",
        roomNumber: 27,
        details: "Vision-oriented high-level data-warehouse",
      },
      {
        code: "C5",
        roomNumber: 16,
        details: "Streamlined impactful data-warehouse",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "Monitored national conglomeration",
      },
      {
        code: "HK",
        roomNumber: 75,
        details: "Object-based directional matrices",
      },
    ],
    revenueData: [{ total: "$7367.43", group: "$1833.87", company: "$857.49" }],
    roomData: [
      {
        total: 15,
        company: 4,
        outOfOrder: 7,
        stayOver: 45,
        arrivals: 93,
        departures: 18,
      },
    ],
  },
  {
    groupData: [
      { name: "Turner-Stracke", roomCount: 24, revenue: "$346.51" },
      { name: "Runolfsson-Lind", roomCount: 12, revenue: "$244.15" },
      { name: "Watsica and Sons", roomCount: 24, revenue: "$286.83" },
      { name: "Weimann-Lindgren", roomCount: 32, revenue: "$160.72" },
      {
        name: "Bahringer, Huel and Watsica",
        roomCount: 28,
        revenue: "$273.52",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Luis",
        guestName: "Luis Trorey",
        reason: "Optional even-keeled customer loyalty",
      },
      {
        authorizedBy: "Shina",
        guestName: "Shina Gonthier",
        reason: "Enhanced web-enabled open system",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 83, details: "Extended leading edge extranet" },
    ],
    revenueData: [{ total: "$8939.42", group: "$1711.94", company: "$622.83" }],
    roomData: [
      {
        total: 60,
        company: 10,
        outOfOrder: 9,
        stayOver: 38,
        arrivals: 71,
        departures: 100,
      },
    ],
  },
  {
    groupData: [
      {
        name: "McKenzie, Terry and Schimmel",
        roomCount: 39,
        revenue: "$236.45",
      },
      { name: "Stark and Sons", roomCount: 41, revenue: "$305.83" },
      { name: "Halvorson-Welch", roomCount: 30, revenue: "$134.80" },
      { name: "Lubowitz-Bailey", roomCount: 2, revenue: "$439.59" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Bat",
        guestName: "Bat Hinder",
        reason: "Phased coherent intranet",
      },
      {
        authorizedBy: "Katlin",
        guestName: "Katlin Illsley",
        reason: "Reactive leading edge hub",
      },
      {
        authorizedBy: "Ernest",
        guestName: "Ernest Brennon",
        reason: "Assimilated high-level pricing structure",
      },
      {
        authorizedBy: "Humphrey",
        guestName: "Humphrey Grindrod",
        reason: "Optimized executive approach",
      },
      {
        authorizedBy: "Carol-jean",
        guestName: "Carol-jean Gawne",
        reason: "Switchable motivating process improvement",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$10264.11", group: "$1712.87", company: "$2226.05" },
    ],
    roomData: [
      {
        total: 85,
        company: 4,
        outOfOrder: 6,
        stayOver: 25,
        arrivals: 98,
        departures: 96,
      },
    ],
  },
  {
    groupData: [{ name: "Kling-Huels", roomCount: 38, revenue: "$483.92" }],
    compRoomInfo: [
      {
        authorizedBy: "Anjanette",
        guestName: "Anjanette Scrivener",
        reason: "Digitized zero defect middleware",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 36,
        details: "Devolved well-modulated service-desk",
      },
      {
        code: "HK",
        roomNumber: 87,
        details: "Automated needs-based customer loyalty",
      },
      {
        code: "HK",
        roomNumber: 17,
        details: "Decentralized explicit approach",
      },
      {
        code: "HK",
        roomNumber: 83,
        details: "Networked real-time data-warehouse",
      },
    ],
    revenueData: [{ total: "$6857.93", group: "$1853.77", company: "$703.55" }],
    roomData: [
      {
        total: 12,
        company: 10,
        outOfOrder: 8,
        stayOver: 33,
        arrivals: 83,
        departures: 79,
      },
    ],
  },
  {
    groupData: [
      { name: "Fritsch-Reynolds", roomCount: 30, revenue: "$231.46" },
      { name: "Leuschke-Okuneva", roomCount: 31, revenue: "$276.72" },
      { name: "Cassin Group", roomCount: 15, revenue: "$213.96" },
      { name: "Ledner Inc", roomCount: 16, revenue: "$198.08" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dannel",
        guestName: "Dannel Jandl",
        reason: "De-engineered methodical archive",
      },
      {
        authorizedBy: "Emily",
        guestName: "Emily Yaus",
        reason: "Networked upward-trending firmware",
      },
      {
        authorizedBy: "Krissy",
        guestName: "Krissy Forst",
        reason: "Multi-layered logistical alliance",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 83,
        details: "Triple-buffered exuding strategy",
      },
      {
        code: "C5",
        roomNumber: 63,
        details: "Re-engineered multi-tasking capability",
      },
    ],
    revenueData: [
      { total: "$17845.38", group: "$868.20", company: "$1670.36" },
    ],
    roomData: [
      {
        total: 77,
        company: 7,
        outOfOrder: 8,
        stayOver: 19,
        arrivals: 54,
        departures: 63,
      },
    ],
  },
  {
    groupData: [
      { name: "Ruecker-Hegmann", roomCount: 35, revenue: "$326.57" },
      { name: "Ondricka-Kunze", roomCount: 40, revenue: "$301.65" },
      { name: "Vandervort-Sipes", roomCount: 28, revenue: "$219.79" },
      { name: "Cronin, Fahey and Gorczany", roomCount: 34, revenue: "$441.93" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Pooh",
        guestName: "Pooh Philcott",
        reason: "Synchronised 24 hour capability",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 24,
        details: "Face to face real-time hierarchy",
      },
    ],
    revenueData: [{ total: "$14759.66", group: "$888.19", company: "$456.05" }],
    roomData: [
      {
        total: 71,
        company: 7,
        outOfOrder: 4,
        stayOver: 36,
        arrivals: 80,
        departures: 32,
      },
    ],
  },
  {
    groupData: [{ name: "Jerde Inc", roomCount: 40, revenue: "$328.32" }],
    compRoomInfo: [
      {
        authorizedBy: "Ethelda",
        guestName: "Ethelda Bertolin",
        reason: "Universal neutral monitoring",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 77,
        details: "Extended tertiary process improvement",
      },
      {
        code: "HK",
        roomNumber: 53,
        details: "Persevering homogeneous ability",
      },
    ],
    revenueData: [{ total: "$8003.09", group: "$893.59", company: "$369.37" }],
    roomData: [
      {
        total: 36,
        company: 8,
        outOfOrder: 9,
        stayOver: 36,
        arrivals: 84,
        departures: 45,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Cosette",
        guestName: "Cosette Dubois",
        reason: "Reduced 4th generation toolset",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 75,
        details: "Proactive user-facing emulation",
      },
    ],
    revenueData: [
      { total: "$9871.74", group: "$1143.74", company: "$1804.84" },
    ],
    roomData: [
      {
        total: 37,
        company: 3,
        outOfOrder: 2,
        stayOver: 32,
        arrivals: 67,
        departures: 68,
      },
    ],
  },
  {
    groupData: [{ name: "Feil-Aufderhar", roomCount: 44, revenue: "$325.08" }],
    compRoomInfo: [
      {
        authorizedBy: "Jori",
        guestName: "Jori Whitemarsh",
        reason: "Re-contextualized needs-based installation",
      },
      {
        authorizedBy: "West",
        guestName: "West Davenport",
        reason: "Exclusive secondary info-mediaries",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 47,
        details: "Implemented empowering monitoring",
      },
      {
        code: "HK",
        roomNumber: 24,
        details: "Programmable intangible function",
      },
      {
        code: "HK",
        roomNumber: 0,
        details: "Triple-buffered explicit protocol",
      },
    ],
    revenueData: [
      { total: "$7576.45", group: "$1545.17", company: "$2470.09" },
    ],
    roomData: [
      {
        total: 78,
        company: 1,
        outOfOrder: 8,
        stayOver: 47,
        arrivals: 74,
        departures: 23,
      },
    ],
  },
  {
    groupData: [
      { name: "Gutmann and Sons", roomCount: 5, revenue: "$164.32" },
      {
        name: "Donnelly, Cartwright and McGlynn",
        roomCount: 45,
        revenue: "$307.36",
      },
      { name: "Lehner-Douglas", roomCount: 2, revenue: "$357.90" },
      { name: "Baumbach LLC", roomCount: 26, revenue: "$173.88" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Marjie",
        guestName: "Marjie Delmage",
        reason: "Managed heuristic synergy",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$17939.50", group: "$1413.04", company: "$420.60" },
    ],
    roomData: [
      {
        total: 31,
        company: 7,
        outOfOrder: 2,
        stayOver: 15,
        arrivals: 51,
        departures: 79,
      },
    ],
  },
  {
    groupData: [{ name: "Koch LLC", roomCount: 5, revenue: "$140.44" }],
    compRoomInfo: [
      {
        authorizedBy: "Oby",
        guestName: "Oby Androletti",
        reason: "Future-proofed cohesive project",
      },
      {
        authorizedBy: "Perrine",
        guestName: "Perrine Joseland",
        reason: "Decentralized systematic core",
      },
      {
        authorizedBy: "Maggie",
        guestName: "Maggie Mulliss",
        reason: "User-centric 5th generation complexity",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$11711.14", group: "$955.14", company: "$692.51" }],
    roomData: [
      {
        total: 47,
        company: 5,
        outOfOrder: 3,
        stayOver: 50,
        arrivals: 82,
        departures: 66,
      },
    ],
  },
  {
    groupData: [
      { name: "Blanda and Sons", roomCount: 3, revenue: "$233.49" },
      { name: "Purdy-Feeney", roomCount: 34, revenue: "$423.00" },
      { name: "Swaniawski Inc", roomCount: 3, revenue: "$189.05" },
      {
        name: "Thiel, Satterfield and Mayer",
        roomCount: 28,
        revenue: "$225.00",
      },
      { name: "Breitenberg Inc", roomCount: 49, revenue: "$168.83" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Gwennie",
        guestName: "Gwennie Stucke",
        reason: "Balanced discrete orchestration",
      },
      {
        authorizedBy: "Alyse",
        guestName: "Alyse Depke",
        reason: "Diverse radical neural-net",
      },
      {
        authorizedBy: "Tabbitha",
        guestName: "Tabbitha Sheldon",
        reason: "Proactive non-volatile implementation",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 39, details: "Intuitive high-level model" },
      {
        code: "C5",
        roomNumber: 69,
        details: "Integrated content-based artificial intelligence",
      },
      {
        code: "C5",
        roomNumber: 83,
        details: "Upgradable 5th generation framework",
      },
      {
        code: "HK",
        roomNumber: 51,
        details: "Proactive context-sensitive complexity",
      },
    ],
    revenueData: [
      { total: "$19828.81", group: "$1002.16", company: "$2694.75" },
    ],
    roomData: [
      {
        total: 69,
        company: 7,
        outOfOrder: 0,
        stayOver: 17,
        arrivals: 84,
        departures: 8,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Rolando",
        guestName: "Rolando Ducker",
        reason: "Devolved even-keeled infrastructure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 51,
        details: "Versatile content-based contingency",
      },
      { code: "HK", roomNumber: 56, details: "Organic uniform flexibility" },
      {
        code: "C5",
        roomNumber: 85,
        details: "Stand-alone empowering internet solution",
      },
      {
        code: "HK",
        roomNumber: 74,
        details: "Customizable object-oriented paradigm",
      },
    ],
    revenueData: [
      { total: "$14173.15", group: "$1257.58", company: "$1911.61" },
    ],
    roomData: [
      {
        total: 38,
        company: 6,
        outOfOrder: 4,
        stayOver: 22,
        arrivals: 80,
        departures: 94,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Smitham, Runolfsdottir and Ullrich",
        roomCount: 43,
        revenue: "$231.77",
      },
      { name: "Nienow-Kreiger", roomCount: 11, revenue: "$182.53" },
      { name: "Ebert Group", roomCount: 20, revenue: "$288.58" },
      { name: "Hintz, Pagac and Parisian", roomCount: 21, revenue: "$141.74" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Giavani",
        guestName: "Giavani Gatman",
        reason: "Down-sized bottom-line flexibility",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$14107.38", group: "$352.28", company: "$2793.30" },
    ],
    roomData: [
      {
        total: 45,
        company: 5,
        outOfOrder: 4,
        stayOver: 27,
        arrivals: 25,
        departures: 57,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Linda",
        guestName: "Linda Gass",
        reason: "Synergistic clear-thinking ability",
      },
      {
        authorizedBy: "Land",
        guestName: "Land Sandes",
        reason: "Devolved tangible productivity",
      },
      {
        authorizedBy: "Martita",
        guestName: "Martita Cyseley",
        reason: "Open-architected incremental service-desk",
      },
      {
        authorizedBy: "Stacey",
        guestName: "Stacey McOnie",
        reason: "Progressive actuating toolset",
      },
      {
        authorizedBy: "Ramonda",
        guestName: "Ramonda Sichardt",
        reason: "Mandatory asymmetric emulation",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 77,
        details: "Distributed intermediate flexibility",
      },
      {
        code: "C5",
        roomNumber: 3,
        details: "Reverse-engineered user-facing open architecture",
      },
      { code: "C5", roomNumber: 73, details: "Multi-tiered 24 hour protocol" },
    ],
    revenueData: [
      { total: "$16052.98", group: "$1672.51", company: "$1990.37" },
    ],
    roomData: [
      {
        total: 61,
        company: 10,
        outOfOrder: 1,
        stayOver: 9,
        arrivals: 91,
        departures: 93,
      },
    ],
  },
  {
    groupData: [
      { name: "Wunsch Inc", roomCount: 20, revenue: "$118.04" },
      { name: "Nienow Group", roomCount: 10, revenue: "$101.39" },
      { name: "Davis-Lindgren", roomCount: 42, revenue: "$110.53" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Isidore",
        guestName: "Isidore Bernolet",
        reason: "Multi-channelled contextually-based productivity",
      },
      {
        authorizedBy: "Jazmin",
        guestName: "Jazmin Dews",
        reason: "Universal multi-tasking website",
      },
      {
        authorizedBy: "Agnesse",
        guestName: "Agnesse Balasini",
        reason: "Universal optimizing utilisation",
      },
      {
        authorizedBy: "Christopher",
        guestName: "Christopher Carillo",
        reason: "Ergonomic homogeneous contingency",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$12217.77", group: "$1540.14", company: "$636.12" },
    ],
    roomData: [
      {
        total: 31,
        company: 7,
        outOfOrder: 6,
        stayOver: 21,
        arrivals: 100,
        departures: 24,
      },
    ],
  },
  {
    groupData: [{ name: "Daniel and Sons", roomCount: 9, revenue: "$485.70" }],
    compRoomInfo: [
      {
        authorizedBy: "Ardeen",
        guestName: "Ardeen Bremner",
        reason: "Visionary 5th generation internet solution",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 27,
        details: "Programmable non-volatile help-desk",
      },
      {
        code: "HK",
        roomNumber: 88,
        details: "Vision-oriented 24 hour success",
      },
      {
        code: "HK",
        roomNumber: 91,
        details: "Visionary attitude-oriented policy",
      },
      {
        code: "HK",
        roomNumber: 85,
        details: "Realigned zero administration service-desk",
      },
    ],
    revenueData: [
      { total: "$16561.00", group: "$758.54", company: "$1527.46" },
    ],
    roomData: [
      {
        total: 91,
        company: 7,
        outOfOrder: 10,
        stayOver: 28,
        arrivals: 20,
        departures: 32,
      },
    ],
  },
  {
    groupData: [
      { name: "Hayes-Johns", roomCount: 4, revenue: "$490.09" },
      { name: "Pacocha Group", roomCount: 36, revenue: "$388.61" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jonah",
        guestName: "Jonah Pashan",
        reason: "Future-proofed 6th generation array",
      },
      {
        authorizedBy: "Giff",
        guestName: "Giff De Bruyne",
        reason: "Team-oriented disintermediate knowledge base",
      },
      {
        authorizedBy: "Rosana",
        guestName: "Rosana Boadby",
        reason: "Extended regional contingency",
      },
      {
        authorizedBy: "Aurelea",
        guestName: "Aurelea Mogford",
        reason: "Integrated 6th generation portal",
      },
      {
        authorizedBy: "Enrique",
        guestName: "Enrique Moehler",
        reason: "Versatile intermediate groupware",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 33,
        details: "Seamless 3rd generation budgetary management",
      },
      {
        code: "C5",
        roomNumber: 79,
        details: "Centralized context-sensitive parallelism",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "Self-enabling bi-directional flexibility",
      },
      {
        code: "C5",
        roomNumber: 38,
        details: "Future-proofed didactic encryption",
      },
    ],
    revenueData: [{ total: "$6115.62", group: "$915.37", company: "$1476.30" }],
    roomData: [
      {
        total: 80,
        company: 1,
        outOfOrder: 6,
        stayOver: 1,
        arrivals: 51,
        departures: 53,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Bahringer, Kshlerin and Skiles",
        roomCount: 17,
        revenue: "$429.67",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Tessa",
        guestName: "Tessa Montacute",
        reason: "Intuitive dedicated system engine",
      },
      {
        authorizedBy: "Rip",
        guestName: "Rip Bulbeck",
        reason: "Adaptive modular open system",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 1,
        details: "Adaptive actuating info-mediaries",
      },
      {
        code: "HK",
        roomNumber: 18,
        details: "Customizable value-added encryption",
      },
      {
        code: "HK",
        roomNumber: 40,
        details: "Progressive multimedia groupware",
      },
    ],
    revenueData: [
      { total: "$14479.26", group: "$859.76", company: "$1273.56" },
    ],
    roomData: [
      {
        total: 54,
        company: 5,
        outOfOrder: 0,
        stayOver: 19,
        arrivals: 89,
        departures: 58,
      },
    ],
  },
  {
    groupData: [{ name: "Gorczany-Kiehn", roomCount: 5, revenue: "$422.80" }],
    compRoomInfo: [
      {
        authorizedBy: "Carmelita",
        guestName: "Carmelita Parnell",
        reason: "Pre-emptive fault-tolerant methodology",
      },
      {
        authorizedBy: "Sophie",
        guestName: "Sophie McAndie",
        reason: "Operative directional internet solution",
      },
      {
        authorizedBy: "Alanson",
        guestName: "Alanson Hain",
        reason: "Assimilated composite model",
      },
      {
        authorizedBy: "Alysia",
        guestName: "Alysia Zupo",
        reason: "Robust modular local area network",
      },
      {
        authorizedBy: "Burnaby",
        guestName: "Burnaby Jonson",
        reason: "Operative discrete conglomeration",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 30,
        details: "Configurable zero administration infrastructure",
      },
      {
        code: "HK",
        roomNumber: 95,
        details: "Face to face interactive database",
      },
      {
        code: "C5",
        roomNumber: 18,
        details: "Compatible attitude-oriented knowledge base",
      },
    ],
    revenueData: [
      { total: "$12597.40", group: "$1977.69", company: "$1340.77" },
    ],
    roomData: [
      {
        total: 83,
        company: 10,
        outOfOrder: 10,
        stayOver: 4,
        arrivals: 66,
        departures: 6,
      },
    ],
  },
  {
    groupData: [
      { name: "Schamberger-Walker", roomCount: 0, revenue: "$310.42" },
      { name: "Wolff Inc", roomCount: 48, revenue: "$451.68" },
      { name: "Walsh, Zboncak and Shields", roomCount: 7, revenue: "$459.10" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Maria",
        guestName: "Maria Kiddy",
        reason: "Open-architected analyzing toolset",
      },
      {
        authorizedBy: "Glynis",
        guestName: "Glynis Lightbowne",
        reason: "Implemented multi-state service-desk",
      },
      {
        authorizedBy: "Arlina",
        guestName: "Arlina Blay",
        reason: "Organic value-added website",
      },
      {
        authorizedBy: "Amie",
        guestName: "Amie Kimbling",
        reason: "Cloned bottom-line capacity",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 34,
        details: "Seamless human-resource firmware",
      },
      {
        code: "HK",
        roomNumber: 48,
        details: "Down-sized value-added intranet",
      },
      { code: "C5", roomNumber: 85, details: "Reactive full-range hierarchy" },
      { code: "C5", roomNumber: 86, details: "Object-based explicit analyzer" },
      {
        code: "C5",
        roomNumber: 85,
        details: "Fully-configurable analyzing utilisation",
      },
    ],
    revenueData: [{ total: "$9715.08", group: "$467.71", company: "$1442.19" }],
    roomData: [
      {
        total: 11,
        company: 2,
        outOfOrder: 5,
        stayOver: 44,
        arrivals: 28,
        departures: 22,
      },
    ],
  },
  {
    groupData: [
      { name: "Bailey-Rosenbaum", roomCount: 36, revenue: "$144.94" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Harper",
        guestName: "Harper Morgan",
        reason: "Enhanced background neural-net",
      },
      {
        authorizedBy: "Otes",
        guestName: "Otes Tonbye",
        reason: "Sharable demand-driven moderator",
      },
      {
        authorizedBy: "Ky",
        guestName: "Ky Labeuil",
        reason: "Balanced upward-trending protocol",
      },
      {
        authorizedBy: "Philly",
        guestName: "Philly Prandy",
        reason: "Polarised client-server local area network",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 43,
        details: "Object-based methodical hardware",
      },
    ],
    revenueData: [{ total: "$13936.22", group: "$810.93", company: "$642.82" }],
    roomData: [
      {
        total: 79,
        company: 7,
        outOfOrder: 2,
        stayOver: 23,
        arrivals: 70,
        departures: 26,
      },
    ],
  },
  {
    groupData: [
      { name: "Smith Inc", roomCount: 11, revenue: "$259.17" },
      {
        name: "Schaefer, Macejkovic and Okuneva",
        roomCount: 37,
        revenue: "$440.01",
      },
      { name: "Rau and Sons", roomCount: 41, revenue: "$470.59" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Emelita",
        guestName: "Emelita McTavy",
        reason: "Ameliorated next generation interface",
      },
      {
        authorizedBy: "Kingsley",
        guestName: "Kingsley Dominy",
        reason: "Managed logistical instruction set",
      },
      {
        authorizedBy: "Emlyn",
        guestName: "Emlyn Gasticke",
        reason: "User-centric optimal alliance",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 61,
        details: "Universal system-worthy instruction set",
      },
    ],
    revenueData: [
      { total: "$10437.69", group: "$1287.58", company: "$359.08" },
    ],
    roomData: [
      {
        total: 5,
        company: 6,
        outOfOrder: 6,
        stayOver: 37,
        arrivals: 61,
        departures: 49,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Satterfield, Heaney and Torp",
        roomCount: 32,
        revenue: "$122.06",
      },
      { name: "Keeling LLC", roomCount: 38, revenue: "$477.76" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Glyn",
        guestName: "Glyn Zimek",
        reason: "Compatible local toolset",
      },
      {
        authorizedBy: "Dani",
        guestName: "Dani Emmison",
        reason: "Open-architected bandwidth-monitored extranet",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 47,
        details: "Multi-lateral background benchmark",
      },
      { code: "HK", roomNumber: 72, details: "Team-oriented mobile frame" },
      {
        code: "C5",
        roomNumber: 17,
        details: "Focused user-facing contingency",
      },
    ],
    revenueData: [
      { total: "$11974.69", group: "$1254.54", company: "$127.32" },
    ],
    roomData: [
      {
        total: 83,
        company: 5,
        outOfOrder: 8,
        stayOver: 12,
        arrivals: 33,
        departures: 42,
      },
    ],
  },
  {
    groupData: [
      { name: "Rice, Kub and Steuber", roomCount: 27, revenue: "$470.31" },
      { name: "Huels Inc", roomCount: 37, revenue: "$426.64" },
      { name: "Leffler LLC", roomCount: 43, revenue: "$309.11" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Staci",
        guestName: "Staci Kilban",
        reason: "Self-enabling systematic array",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 78, details: "Robust optimizing groupware" },
    ],
    revenueData: [
      { total: "$19345.65", group: "$1200.87", company: "$1796.25" },
    ],
    roomData: [
      {
        total: 33,
        company: 7,
        outOfOrder: 6,
        stayOver: 36,
        arrivals: 98,
        departures: 5,
      },
    ],
  },
  {
    groupData: [
      { name: "Paucek-Ward", roomCount: 40, revenue: "$231.10" },
      { name: "White LLC", roomCount: 2, revenue: "$373.66" },
      { name: "Simonis and Sons", roomCount: 37, revenue: "$327.22" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Stesha",
        guestName: "Stesha Treamayne",
        reason: "Profit-focused human-resource array",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 62, details: "Assimilated secondary matrix" },
      { code: "HK", roomNumber: 90, details: "Up-sized user-facing hierarchy" },
      { code: "C5", roomNumber: 85, details: "Intuitive grid-enabled policy" },
    ],
    revenueData: [{ total: "$11965.55", group: "$404.74", company: "$680.25" }],
    roomData: [
      {
        total: 13,
        company: 7,
        outOfOrder: 3,
        stayOver: 14,
        arrivals: 20,
        departures: 80,
      },
    ],
  },
  {
    groupData: [
      { name: "Murphy and Sons", roomCount: 42, revenue: "$410.19" },
      { name: "Carter-Bartoletti", roomCount: 29, revenue: "$263.30" },
      { name: "Kirlin-Hayes", roomCount: 47, revenue: "$271.31" },
      { name: "Grant LLC", roomCount: 36, revenue: "$313.09" },
      {
        name: "Conn, Jakubowski and Prosacco",
        roomCount: 20,
        revenue: "$293.94",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jaine",
        guestName: "Jaine O'Tierney",
        reason: "Advanced radical collaboration",
      },
      {
        authorizedBy: "Christabella",
        guestName: "Christabella Pirrey",
        reason: "Integrated directional product",
      },
      {
        authorizedBy: "Ruperta",
        guestName: "Ruperta Cadwell",
        reason: "Compatible static emulation",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 76, details: "Visionary empowering database" },
      {
        code: "C5",
        roomNumber: 98,
        details: "Versatile demand-driven capability",
      },
      {
        code: "HK",
        roomNumber: 27,
        details: "Intuitive asynchronous data-warehouse",
      },
      {
        code: "C5",
        roomNumber: 75,
        details: "Self-enabling multi-state architecture",
      },
    ],
    revenueData: [
      { total: "$11165.30", group: "$1768.75", company: "$529.11" },
    ],
    roomData: [
      {
        total: 2,
        company: 0,
        outOfOrder: 10,
        stayOver: 12,
        arrivals: 39,
        departures: 61,
      },
    ],
  },
  {
    groupData: [
      { name: "Witting-Bruen", roomCount: 1, revenue: "$355.66" },
      {
        name: "Considine, O'Connell and Baumbach",
        roomCount: 34,
        revenue: "$218.14",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Valerie",
        guestName: "Valerie Kissack",
        reason: "Intuitive zero tolerance task-force",
      },
      {
        authorizedBy: "Jody",
        guestName: "Jody Hendriksen",
        reason: "Function-based bi-directional emulation",
      },
      {
        authorizedBy: "Torr",
        guestName: "Torr Gabler",
        reason: "Secured real-time project",
      },
      {
        authorizedBy: "Morris",
        guestName: "Morris Crocker",
        reason: "Monitored multimedia pricing structure",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$19530.27", group: "$1130.77", company: "$2941.15" },
    ],
    roomData: [
      {
        total: 84,
        company: 7,
        outOfOrder: 1,
        stayOver: 44,
        arrivals: 11,
        departures: 93,
      },
    ],
  },
  {
    groupData: [
      { name: "Cremin, Koepp and Parisian", roomCount: 20, revenue: "$208.85" },
      { name: "Veum, Reilly and Shanahan", roomCount: 6, revenue: "$212.50" },
      { name: "Schmeler-Romaguera", roomCount: 24, revenue: "$181.92" },
      { name: "Ledner-Romaguera", roomCount: 23, revenue: "$252.72" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Lethia",
        guestName: "Lethia Preshaw",
        reason: "Monitored 4th generation protocol",
      },
      {
        authorizedBy: "Clarabelle",
        guestName: "Clarabelle Learmonth",
        reason: "Quality-focused national policy",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$6719.38", group: "$983.95", company: "$1945.83" }],
    roomData: [
      {
        total: 10,
        company: 8,
        outOfOrder: 4,
        stayOver: 16,
        arrivals: 30,
        departures: 56,
      },
    ],
  },
  {
    groupData: [
      { name: "Klocko Inc", roomCount: 15, revenue: "$192.74" },
      { name: "Deckow Group", roomCount: 17, revenue: "$433.06" },
      { name: "Schoen-Satterfield", roomCount: 42, revenue: "$124.08" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Afton",
        guestName: "Afton Ashborne",
        reason: "Assimilated coherent functionalities",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 44,
        details: "Synergized solution-oriented framework",
      },
      { code: "C5", roomNumber: 36, details: "Optional full-range encryption" },
      { code: "C5", roomNumber: 82, details: "Ergonomic neutral service-desk" },
    ],
    revenueData: [{ total: "$11721.77", group: "$967.60", company: "$188.63" }],
    roomData: [
      {
        total: 43,
        company: 8,
        outOfOrder: 1,
        stayOver: 4,
        arrivals: 14,
        departures: 79,
      },
    ],
  },
  {
    groupData: [
      { name: "Bruen-Konopelski", roomCount: 39, revenue: "$493.59" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Aldin",
        guestName: "Aldin Arter",
        reason: "Diverse asynchronous moratorium",
      },
      {
        authorizedBy: "Bevin",
        guestName: "Bevin Rogier",
        reason: "Cross-group systematic array",
      },
      {
        authorizedBy: "Hyacinthe",
        guestName: "Hyacinthe MacLice",
        reason: "Object-based interactive installation",
      },
      {
        authorizedBy: "Elisabeth",
        guestName: "Elisabeth Harrald",
        reason: "Fully-configurable secondary installation",
      },
      {
        authorizedBy: "Neile",
        guestName: "Neile Tixall",
        reason: "Reduced composite open architecture",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 75,
        details: "Proactive content-based system engine",
      },
      {
        code: "HK",
        roomNumber: 87,
        details: "Assimilated system-worthy workforce",
      },
      { code: "C5", roomNumber: 57, details: "Assimilated optimizing circuit" },
    ],
    revenueData: [{ total: "$6427.36", group: "$497.40", company: "$754.62" }],
    roomData: [
      {
        total: 50,
        company: 0,
        outOfOrder: 3,
        stayOver: 36,
        arrivals: 34,
        departures: 60,
      },
    ],
  },
  {
    groupData: [
      { name: "Stokes and Sons", roomCount: 40, revenue: "$490.81" },
      { name: "Lockman Group", roomCount: 12, revenue: "$125.32" },
      { name: "Hessel and Sons", roomCount: 46, revenue: "$156.45" },
      { name: "Grady-Jones", roomCount: 45, revenue: "$493.33" },
      { name: "Spinka, Bechtelar and Mann", roomCount: 42, revenue: "$209.02" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Augustina",
        guestName: "Augustina Jeal",
        reason: "Distributed scalable utilisation",
      },
      {
        authorizedBy: "Daphene",
        guestName: "Daphene Spikings",
        reason: "Pre-emptive leading edge website",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 23,
        details: "Self-enabling motivating workforce",
      },
      { code: "C5", roomNumber: 39, details: "Integrated maximized firmware" },
      {
        code: "HK",
        roomNumber: 39,
        details: "Cross-group fresh-thinking encryption",
      },
    ],
    revenueData: [
      { total: "$18363.13", group: "$1211.02", company: "$2104.22" },
    ],
    roomData: [
      {
        total: 18,
        company: 4,
        outOfOrder: 10,
        stayOver: 10,
        arrivals: 75,
        departures: 7,
      },
    ],
  },
  {
    groupData: [{ name: "Yost Group", roomCount: 45, revenue: "$411.30" }],
    compRoomInfo: [
      {
        authorizedBy: "Cynthie",
        guestName: "Cynthie Greiswood",
        reason: "Fundamental needs-based interface",
      },
      {
        authorizedBy: "Miles",
        guestName: "Miles Umney",
        reason: "Multi-layered next generation superstructure",
      },
      {
        authorizedBy: "Darrelle",
        guestName: "Darrelle Jakubovics",
        reason: "Versatile system-worthy capability",
      },
      {
        authorizedBy: "Beverlie",
        guestName: "Beverlie Bardwell",
        reason: "User-centric coherent leverage",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 18,
        details: "Grass-roots well-modulated superstructure",
      },
    ],
    revenueData: [
      { total: "$9485.10", group: "$1782.91", company: "$1055.96" },
    ],
    roomData: [
      {
        total: 23,
        company: 4,
        outOfOrder: 5,
        stayOver: 47,
        arrivals: 87,
        departures: 81,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Ullrich, Fisher and Mitchell",
        roomCount: 37,
        revenue: "$484.29",
      },
      { name: "Schuppe Inc", roomCount: 34, revenue: "$192.72" },
      { name: "Boyle-Murazik", roomCount: 9, revenue: "$442.06" },
      { name: "Mosciski LLC", roomCount: 36, revenue: "$135.79" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Noel",
        guestName: "Noel Maunsell",
        reason: "Implemented upward-trending synergy",
      },
      {
        authorizedBy: "Huntley",
        guestName: "Huntley Loker",
        reason: "Switchable empowering utilisation",
      },
      {
        authorizedBy: "Zachery",
        guestName: "Zachery Joselevitz",
        reason: "Devolved 6th generation protocol",
      },
      {
        authorizedBy: "Cacilia",
        guestName: "Cacilia Pearsall",
        reason: "Mandatory eco-centric productivity",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 59,
        details: "Fully-configurable content-based utilisation",
      },
    ],
    revenueData: [{ total: "$9416.76", group: "$511.46", company: "$2092.97" }],
    roomData: [
      {
        total: 58,
        company: 0,
        outOfOrder: 8,
        stayOver: 40,
        arrivals: 49,
        departures: 96,
      },
    ],
  },
  {
    groupData: [
      { name: "Senger, Bogan and Jast", roomCount: 41, revenue: "$475.85" },
      {
        name: "Sauer, Walker and Macejkovic",
        roomCount: 16,
        revenue: "$407.81",
      },
      { name: "D'Amore Inc", roomCount: 44, revenue: "$154.20" },
      { name: "Casper Inc", roomCount: 49, revenue: "$485.84" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Malissia",
        guestName: "Malissia Ayree",
        reason: "Up-sized context-sensitive model",
      },
      {
        authorizedBy: "Meade",
        guestName: "Meade Dionisii",
        reason: "Monitored radical pricing structure",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 43, details: "Public-key holistic time-frame" },
      {
        code: "HK",
        roomNumber: 34,
        details: "Streamlined system-worthy budgetary management",
      },
    ],
    revenueData: [
      { total: "$5187.41", group: "$1802.22", company: "$2234.54" },
    ],
    roomData: [
      {
        total: 4,
        company: 1,
        outOfOrder: 8,
        stayOver: 6,
        arrivals: 64,
        departures: 82,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Base",
        guestName: "Base Haxley",
        reason: "Face to face national superstructure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 50,
        details: "Automated user-facing challenge",
      },
      { code: "C5", roomNumber: 29, details: "Profound empowering algorithm" },
    ],
    revenueData: [
      { total: "$13856.62", group: "$1994.83", company: "$1469.72" },
    ],
    roomData: [
      {
        total: 41,
        company: 9,
        outOfOrder: 1,
        stayOver: 2,
        arrivals: 26,
        departures: 75,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Glenine",
        guestName: "Glenine Margetts",
        reason: "Triple-buffered dynamic array",
      },
      {
        authorizedBy: "Abramo",
        guestName: "Abramo Fishbourne",
        reason: "Virtual zero administration analyzer",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 72,
        details: "Customizable bandwidth-monitored synergy",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "Customer-focused fresh-thinking Graphical User Interface",
      },
      { code: "C5", roomNumber: 48, details: "Extended needs-based portal" },
      {
        code: "HK",
        roomNumber: 50,
        details: "Synchronised 6th generation attitude",
      },
    ],
    revenueData: [
      { total: "$5523.93", group: "$1540.52", company: "$2416.59" },
    ],
    roomData: [
      {
        total: 59,
        company: 9,
        outOfOrder: 10,
        stayOver: 15,
        arrivals: 66,
        departures: 40,
      },
    ],
  },
  {
    groupData: [
      { name: "Rempel and Sons", roomCount: 44, revenue: "$349.37" },
      {
        name: "D'Amore, Kirlin and Morissette",
        roomCount: 49,
        revenue: "$235.02",
      },
      { name: "Donnelly-O'Hara", roomCount: 23, revenue: "$367.76" },
      { name: "Bailey-Herzog", roomCount: 50, revenue: "$105.66" },
      { name: "Rice-Green", roomCount: 42, revenue: "$299.13" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Mignon",
        guestName: "Mignon Baden",
        reason: "Realigned national benchmark",
      },
      {
        authorizedBy: "Sylvester",
        guestName: "Sylvester Norgan",
        reason: "Front-line tangible pricing structure",
      },
      {
        authorizedBy: "Elane",
        guestName: "Elane Strowger",
        reason: "Profit-focused 4th generation adapter",
      },
      {
        authorizedBy: "Spenser",
        guestName: "Spenser Rowcastle",
        reason: "Open-source composite project",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 76,
        details: "Front-line bi-directional portal",
      },
    ],
    revenueData: [
      { total: "$19285.04", group: "$1945.86", company: "$2176.90" },
    ],
    roomData: [
      {
        total: 11,
        company: 0,
        outOfOrder: 2,
        stayOver: 9,
        arrivals: 42,
        departures: 2,
      },
    ],
  },
  {
    groupData: [
      { name: "Mann, Hettinger and Lang", roomCount: 27, revenue: "$313.21" },
      { name: "Muller LLC", roomCount: 41, revenue: "$371.68" },
      { name: "Herzog LLC", roomCount: 42, revenue: "$137.51" },
      { name: "Willms-Johnson", roomCount: 15, revenue: "$392.56" },
      { name: "Kohler LLC", roomCount: 27, revenue: "$212.91" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Beauregard",
        guestName: "Beauregard Caldicot",
        reason: "Optional motivating challenge",
      },
      {
        authorizedBy: "Lisha",
        guestName: "Lisha Vidineev",
        reason: "Distributed bottom-line frame",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 63, details: "Visionary actuating alliance" },
      {
        code: "HK",
        roomNumber: 43,
        details: "Innovative directional paradigm",
      },
      { code: "C5", roomNumber: 72, details: "Managed neutral groupware" },
      {
        code: "C5",
        roomNumber: 45,
        details: "Function-based mission-critical implementation",
      },
    ],
    revenueData: [
      { total: "$19339.54", group: "$964.56", company: "$1939.15" },
    ],
    roomData: [
      {
        total: 88,
        company: 5,
        outOfOrder: 7,
        stayOver: 18,
        arrivals: 0,
        departures: 52,
      },
    ],
  },
  {
    groupData: [
      { name: "McKenzie-O'Reilly", roomCount: 30, revenue: "$450.51" },
      { name: "Schumm and Sons", roomCount: 13, revenue: "$457.70" },
      { name: "Ratke-Breitenberg", roomCount: 31, revenue: "$428.76" },
      { name: "Cassin, Runte and Kulas", roomCount: 5, revenue: "$267.35" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Clara",
        guestName: "Clara Sabin",
        reason: "Programmable non-volatile functionalities",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 100,
        details: "Sharable full-range capability",
      },
    ],
    revenueData: [{ total: "$7062.03", group: "$885.33", company: "$907.13" }],
    roomData: [
      {
        total: 19,
        company: 9,
        outOfOrder: 0,
        stayOver: 9,
        arrivals: 76,
        departures: 99,
      },
    ],
  },
  {
    groupData: [
      { name: "Feeney, Harris and Roberts", roomCount: 15, revenue: "$253.43" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Mellisent",
        guestName: "Mellisent Wilcher",
        reason: "Reactive 24/7 paradigm",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 18, details: "Virtual neutral frame" },
    ],
    revenueData: [
      { total: "$8750.69", group: "$1169.00", company: "$1510.93" },
    ],
    roomData: [
      {
        total: 76,
        company: 7,
        outOfOrder: 10,
        stayOver: 37,
        arrivals: 17,
        departures: 89,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Quigley, Klein and Mitchell",
        roomCount: 24,
        revenue: "$429.28",
      },
      { name: "Greenholt LLC", roomCount: 16, revenue: "$138.21" },
      { name: "Koelpin-Langosh", roomCount: 35, revenue: "$220.36" },
      { name: "Batz, Kihn and Graham", roomCount: 24, revenue: "$343.79" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Pen",
        guestName: "Pen Magenny",
        reason: "Mandatory user-facing matrix",
      },
      {
        authorizedBy: "Dorey",
        guestName: "Dorey Straffon",
        reason: "Optional bandwidth-monitored product",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 56,
        details: "Streamlined impactful workforce",
      },
      {
        code: "C5",
        roomNumber: 46,
        details: "Automated static open architecture",
      },
      {
        code: "HK",
        roomNumber: 64,
        details: "Self-enabling 3rd generation function",
      },
      { code: "HK", roomNumber: 30, details: "Balanced didactic matrices" },
    ],
    revenueData: [
      { total: "$8664.77", group: "$1222.40", company: "$2039.71" },
    ],
    roomData: [
      {
        total: 5,
        company: 2,
        outOfOrder: 7,
        stayOver: 4,
        arrivals: 48,
        departures: 59,
      },
    ],
  },
  {
    groupData: [
      { name: "Dare Group", roomCount: 49, revenue: "$199.19" },
      { name: "O'Hara and Sons", roomCount: 17, revenue: "$415.20" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Nettle",
        guestName: "Nettle Fontel",
        reason: "Compatible static contingency",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 66, details: "Secured even-keeled moratorium" },
      {
        code: "C5",
        roomNumber: 25,
        details: "Extended context-sensitive emulation",
      },
    ],
    revenueData: [
      { total: "$10348.25", group: "$1126.67", company: "$1719.04" },
    ],
    roomData: [
      {
        total: 24,
        company: 7,
        outOfOrder: 9,
        stayOver: 34,
        arrivals: 19,
        departures: 47,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Camel",
        guestName: "Camel Senton",
        reason: "Balanced real-time superstructure",
      },
      {
        authorizedBy: "Brynna",
        guestName: "Brynna Twentyman",
        reason: "Progressive interactive standardization",
      },
      {
        authorizedBy: "Lamont",
        guestName: "Lamont Stoneham",
        reason: "Synergized zero administration toolset",
      },
      {
        authorizedBy: "Sibella",
        guestName: "Sibella Kyte",
        reason: "Front-line mission-critical alliance",
      },
      {
        authorizedBy: "Abey",
        guestName: "Abey Ashborn",
        reason: "Enhanced methodical array",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$6781.83", group: "$1482.34", company: "$2438.45" },
    ],
    roomData: [
      {
        total: 16,
        company: 1,
        outOfOrder: 5,
        stayOver: 49,
        arrivals: 6,
        departures: 66,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Ninette",
        guestName: "Ninette Toman",
        reason: "Fully-configurable value-added orchestration",
      },
      {
        authorizedBy: "Jehanna",
        guestName: "Jehanna Kulver",
        reason: "Synergized analyzing service-desk",
      },
      {
        authorizedBy: "Chlo",
        guestName: "Chlo Fumagalli",
        reason: "Function-based client-driven hierarchy",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 19, details: "Mandatory executive archive" },
    ],
    revenueData: [
      { total: "$17672.55", group: "$995.52", company: "$2611.18" },
    ],
    roomData: [
      {
        total: 64,
        company: 0,
        outOfOrder: 1,
        stayOver: 41,
        arrivals: 45,
        departures: 30,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Connie",
        guestName: "Connie Lanbertoni",
        reason: "Ameliorated logistical productivity",
      },
      {
        authorizedBy: "Frederic",
        guestName: "Frederic Burleton",
        reason: "Sharable bifurcated intranet",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 54, details: "Customer-focused 24/7 circuit" },
      { code: "HK", roomNumber: 49, details: "Robust background archive" },
      {
        code: "C5",
        roomNumber: 54,
        details: "Open-architected background migration",
      },
      {
        code: "HK",
        roomNumber: 85,
        details: "Upgradable bandwidth-monitored adapter",
      },
    ],
    revenueData: [{ total: "$7546.98", group: "$1626.00", company: "$482.48" }],
    roomData: [
      {
        total: 95,
        company: 2,
        outOfOrder: 2,
        stayOver: 30,
        arrivals: 86,
        departures: 3,
      },
    ],
  },
  {
    groupData: [
      { name: "D'Amore-Nader", roomCount: 36, revenue: "$483.38" },
      { name: "Gutkowski-Moore", roomCount: 8, revenue: "$176.87" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ogden",
        guestName: "Ogden Caudrey",
        reason: "Triple-buffered upward-trending analyzer",
      },
      {
        authorizedBy: "Sheelagh",
        guestName: "Sheelagh Skewes",
        reason: "Cloned high-level product",
      },
      {
        authorizedBy: "Woodie",
        guestName: "Woodie Guilliatt",
        reason: "Synergistic holistic hub",
      },
      {
        authorizedBy: "Yank",
        guestName: "Yank Ruddom",
        reason: "Ameliorated web-enabled interface",
      },
      {
        authorizedBy: "Barry",
        guestName: "Barry Douse",
        reason: "Synchronised disintermediate website",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 41,
        details: "Reverse-engineered logistical implementation",
      },
      {
        code: "C5",
        roomNumber: 80,
        details: "Future-proofed directional conglomeration",
      },
      {
        code: "HK",
        roomNumber: 93,
        details: "Phased solution-oriented task-force",
      },
      {
        code: "HK",
        roomNumber: 62,
        details: "Streamlined 4th generation array",
      },
      {
        code: "C5",
        roomNumber: 83,
        details: "Fundamental 3rd generation groupware",
      },
    ],
    revenueData: [
      { total: "$19146.50", group: "$1414.15", company: "$288.41" },
    ],
    roomData: [
      {
        total: 28,
        company: 3,
        outOfOrder: 10,
        stayOver: 0,
        arrivals: 87,
        departures: 72,
      },
    ],
  },
  {
    groupData: [
      { name: "Hayes-Kozey", roomCount: 38, revenue: "$147.75" },
      {
        name: "Simonis, Marquardt and Kunde",
        roomCount: 6,
        revenue: "$229.05",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Brana",
        guestName: "Brana Tuohy",
        reason: "Business-focused contextually-based benchmark",
      },
      {
        authorizedBy: "Jobi",
        guestName: "Jobi Cornelius",
        reason: "Pre-emptive object-oriented standardization",
      },
      {
        authorizedBy: "Eddi",
        guestName: "Eddi Rosingdall",
        reason: "Customer-focused fault-tolerant projection",
      },
      {
        authorizedBy: "Heall",
        guestName: "Heall Befroy",
        reason: "Multi-layered user-facing complexity",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$10063.17", group: "$1665.86", company: "$616.12" },
    ],
    roomData: [
      {
        total: 30,
        company: 7,
        outOfOrder: 1,
        stayOver: 12,
        arrivals: 71,
        departures: 46,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Medhurst, Kozey and Aufderhar",
        roomCount: 50,
        revenue: "$180.27",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Almire",
        guestName: "Almire Keogh",
        reason: "Quality-focused 24/7 moderator",
      },
      {
        authorizedBy: "Papagena",
        guestName: "Papagena Romushkin",
        reason: "Programmable stable model",
      },
      {
        authorizedBy: "Giselle",
        guestName: "Giselle Velden",
        reason: "Profit-focused analyzing monitoring",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 61,
        details: "Up-sized grid-enabled complexity",
      },
      {
        code: "C5",
        roomNumber: 97,
        details: "Ameliorated 6th generation array",
      },
      {
        code: "HK",
        roomNumber: 64,
        details: "Configurable maximized knowledge base",
      },
      {
        code: "C5",
        roomNumber: 27,
        details: "Polarised background pricing structure",
      },
    ],
    revenueData: [
      { total: "$14926.04", group: "$1818.07", company: "$2113.22" },
    ],
    roomData: [
      {
        total: 28,
        company: 10,
        outOfOrder: 4,
        stayOver: 1,
        arrivals: 91,
        departures: 1,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Giacopo",
        guestName: "Giacopo Gatsby",
        reason: "Assimilated upward-trending artificial intelligence",
      },
      {
        authorizedBy: "Lisabeth",
        guestName: "Lisabeth Hartlebury",
        reason: "Reduced intangible ability",
      },
      {
        authorizedBy: "Bayard",
        guestName: "Bayard Bortolotti",
        reason: "Enhanced cohesive core",
      },
      {
        authorizedBy: "Reggi",
        guestName: "Reggi Veysey",
        reason: "Diverse background matrices",
      },
      {
        authorizedBy: "Carolee",
        guestName: "Carolee Hudspeth",
        reason: "Balanced radical migration",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 25, details: "Robust secondary frame" },
      { code: "HK", roomNumber: 80, details: "Object-based local neural-net" },
      {
        code: "C5",
        roomNumber: 65,
        details: "Quality-focused 6th generation capacity",
      },
      {
        code: "C5",
        roomNumber: 71,
        details: "Future-proofed discrete database",
      },
      {
        code: "C5",
        roomNumber: 34,
        details: "Public-key real-time service-desk",
      },
    ],
    revenueData: [
      { total: "$11692.89", group: "$1956.12", company: "$131.63" },
    ],
    roomData: [
      {
        total: 9,
        company: 5,
        outOfOrder: 6,
        stayOver: 14,
        arrivals: 5,
        departures: 96,
      },
    ],
  },
  {
    groupData: [
      { name: "Stoltenberg-Murazik", roomCount: 7, revenue: "$347.98" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Beilul",
        guestName: "Beilul Bartolacci",
        reason: "Cross-group foreground initiative",
      },
      {
        authorizedBy: "Ammamaria",
        guestName: "Ammamaria Starcks",
        reason: "Customer-focused systematic frame",
      },
      {
        authorizedBy: "Lindie",
        guestName: "Lindie Fosher",
        reason: "Assimilated object-oriented synergy",
      },
      {
        authorizedBy: "Christel",
        guestName: "Christel Crenage",
        reason: "Reactive executive portal",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$13433.64", group: "$751.53", company: "$2696.10" },
    ],
    roomData: [
      {
        total: 19,
        company: 4,
        outOfOrder: 8,
        stayOver: 1,
        arrivals: 69,
        departures: 92,
      },
    ],
  },
  {
    groupData: [
      { name: "Dickinson-Jenkins", roomCount: 25, revenue: "$368.03" },
      { name: "Beier-Skiles", roomCount: 46, revenue: "$475.29" },
      { name: "Donnelly and Sons", roomCount: 48, revenue: "$162.18" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dilly",
        guestName: "Dilly Halladey",
        reason: "Robust client-server info-mediaries",
      },
      {
        authorizedBy: "Aubry",
        guestName: "Aubry Campo",
        reason: "Compatible grid-enabled neural-net",
      },
      {
        authorizedBy: "Newton",
        guestName: "Newton Skokoe",
        reason: "Reduced 4th generation architecture",
      },
      {
        authorizedBy: "Valentijn",
        guestName: "Valentijn Snaden",
        reason: "De-engineered clear-thinking superstructure",
      },
      {
        authorizedBy: "Shayla",
        guestName: "Shayla Luciani",
        reason: "Virtual fresh-thinking matrix",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 91, details: "Future-proofed tertiary array" },
      { code: "C5", roomNumber: 30, details: "Reduced scalable function" },
      { code: "C5", roomNumber: 85, details: "Progressive explicit intranet" },
    ],
    revenueData: [{ total: "$8729.24", group: "$1919.38", company: "$158.35" }],
    roomData: [
      {
        total: 40,
        company: 4,
        outOfOrder: 3,
        stayOver: 12,
        arrivals: 79,
        departures: 66,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Garrik",
        guestName: "Garrik Bannerman",
        reason: "Programmable eco-centric complexity",
      },
      {
        authorizedBy: "Isidoro",
        guestName: "Isidoro Kirkbride",
        reason: "Implemented static intranet",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 84,
        details: "Configurable fresh-thinking intranet",
      },
      {
        code: "C5",
        roomNumber: 65,
        details: "Synergistic multi-state monitoring",
      },
      {
        code: "C5",
        roomNumber: 100,
        details: "Public-key value-added installation",
      },
      {
        code: "C5",
        roomNumber: 39,
        details: "Persistent eco-centric workforce",
      },
    ],
    revenueData: [
      { total: "$13267.95", group: "$1068.72", company: "$1484.14" },
    ],
    roomData: [
      {
        total: 100,
        company: 5,
        outOfOrder: 7,
        stayOver: 24,
        arrivals: 59,
        departures: 22,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Thibaud",
        guestName: "Thibaud Pinchen",
        reason: "Triple-buffered explicit productivity",
      },
      {
        authorizedBy: "Tootsie",
        guestName: "Tootsie Bruckenthal",
        reason: "Programmable 4th generation productivity",
      },
      {
        authorizedBy: "Marcelo",
        guestName: "Marcelo Jirsa",
        reason: "Synergistic optimizing Graphic Interface",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$19239.66", group: "$815.25", company: "$1449.61" },
    ],
    roomData: [
      {
        total: 17,
        company: 2,
        outOfOrder: 1,
        stayOver: 31,
        arrivals: 75,
        departures: 89,
      },
    ],
  },
  {
    groupData: [
      { name: "Feil, Runte and Cummings", roomCount: 5, revenue: "$304.74" },
      { name: "Okuneva-Hoeger", roomCount: 30, revenue: "$282.29" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Magdalena",
        guestName: "Magdalena Cheetam",
        reason: "Seamless heuristic complexity",
      },
      {
        authorizedBy: "Pierson",
        guestName: "Pierson Proud",
        reason: "Stand-alone object-oriented architecture",
      },
      {
        authorizedBy: "Amby",
        guestName: "Amby Sarten",
        reason: "Quality-focused national toolset",
      },
      {
        authorizedBy: "Miriam",
        guestName: "Miriam MacCole",
        reason: "Ergonomic disintermediate website",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$6414.48", group: "$1065.40", company: "$294.38" }],
    roomData: [
      {
        total: 62,
        company: 0,
        outOfOrder: 7,
        stayOver: 26,
        arrivals: 82,
        departures: 65,
      },
    ],
  },
  {
    groupData: [
      { name: "Considine, Von and Kovacek", roomCount: 45, revenue: "$302.07" },
      { name: "Rutherford Group", roomCount: 23, revenue: "$336.02" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Cosette",
        guestName: "Cosette Landa",
        reason: "Seamless modular customer loyalty",
      },
      {
        authorizedBy: "Olly",
        guestName: "Olly Felkin",
        reason: "Function-based upward-trending application",
      },
      {
        authorizedBy: "Lavinia",
        guestName: "Lavinia Rebeiro",
        reason: "User-friendly interactive local area network",
      },
      {
        authorizedBy: "Tootsie",
        guestName: "Tootsie Basford",
        reason: "Sharable grid-enabled knowledge base",
      },
      {
        authorizedBy: "Algernon",
        guestName: "Algernon Swatton",
        reason: "Synchronised systemic leverage",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 20,
        details: "Future-proofed maximized task-force",
      },
      {
        code: "HK",
        roomNumber: 1,
        details: "Organized 3rd generation toolset",
      },
      {
        code: "HK",
        roomNumber: 3,
        details: "Decentralized full-range local area network",
      },
      {
        code: "HK",
        roomNumber: 36,
        details: "Persevering contextually-based instruction set",
      },
    ],
    revenueData: [
      { total: "$6360.76", group: "$1562.76", company: "$1965.54" },
    ],
    roomData: [
      {
        total: 100,
        company: 2,
        outOfOrder: 5,
        stayOver: 33,
        arrivals: 46,
        departures: 15,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Leffler, Reichel and Armstrong",
        roomCount: 7,
        revenue: "$344.33",
      },
      { name: "Pouros-Bayer", roomCount: 2, revenue: "$406.85" },
      {
        name: "Kuphal, Greenfelder and Nitzsche",
        roomCount: 2,
        revenue: "$312.44",
      },
      { name: "Rohan Group", roomCount: 12, revenue: "$167.45" },
      { name: "McLaughlin Group", roomCount: 30, revenue: "$313.14" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Janith",
        guestName: "Janith Kopman",
        reason: "Distributed upward-trending challenge",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 39,
        details: "Distributed foreground middleware",
      },
      {
        code: "C5",
        roomNumber: 52,
        details: "Decentralized secondary encryption",
      },
    ],
    revenueData: [
      { total: "$7476.29", group: "$1422.00", company: "$1883.92" },
    ],
    roomData: [
      {
        total: 59,
        company: 10,
        outOfOrder: 5,
        stayOver: 2,
        arrivals: 16,
        departures: 62,
      },
    ],
  },
  {
    groupData: [
      { name: "Abbott, Hand and Reichel", roomCount: 23, revenue: "$109.17" },
      {
        name: "Armstrong, Runolfsdottir and Rosenbaum",
        roomCount: 19,
        revenue: "$410.18",
      },
      { name: "Turner Inc", roomCount: 14, revenue: "$198.90" },
      { name: "Gutmann LLC", roomCount: 13, revenue: "$483.24" },
      { name: "Daniel-McKenzie", roomCount: 27, revenue: "$229.08" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Craggy",
        guestName: "Craggy Baugh",
        reason: "Profit-focused coherent help-desk",
      },
      {
        authorizedBy: "Eleni",
        guestName: "Eleni Pearsey",
        reason: "Ameliorated 6th generation hierarchy",
      },
      {
        authorizedBy: "Stevie",
        guestName: "Stevie Jojic",
        reason: "Assimilated tertiary focus group",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 81,
        details: "De-engineered user-facing artificial intelligence",
      },
      { code: "C5", roomNumber: 74, details: "Diverse mobile interface" },
      { code: "C5", roomNumber: 82, details: "Total client-driven product" },
    ],
    revenueData: [
      { total: "$15414.19", group: "$1334.17", company: "$900.87" },
    ],
    roomData: [
      {
        total: 1,
        company: 1,
        outOfOrder: 3,
        stayOver: 8,
        arrivals: 60,
        departures: 56,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Herbert",
        guestName: "Herbert Briscow",
        reason: "Multi-layered tangible moderator",
      },
      {
        authorizedBy: "Alexandrina",
        guestName: "Alexandrina Whenman",
        reason: "Grass-roots tertiary task-force",
      },
      {
        authorizedBy: "Zilvia",
        guestName: "Zilvia Duckett",
        reason: "Devolved content-based migration",
      },
      {
        authorizedBy: "Katusha",
        guestName: "Katusha Cases",
        reason: "Adaptive non-volatile architecture",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$17540.25", group: "$1501.69", company: "$2073.56" },
    ],
    roomData: [
      {
        total: 36,
        company: 2,
        outOfOrder: 8,
        stayOver: 17,
        arrivals: 80,
        departures: 68,
      },
    ],
  },
  {
    groupData: [
      { name: "Miller-Schinner", roomCount: 18, revenue: "$241.88" },
      { name: "Fadel, Watsica and Mayert", roomCount: 37, revenue: "$119.19" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Nikolai",
        guestName: "Nikolai Attree",
        reason: "Universal real-time array",
      },
      {
        authorizedBy: "Bridie",
        guestName: "Bridie Farnsworth",
        reason: "Cloned mission-critical utilisation",
      },
      {
        authorizedBy: "Thedric",
        guestName: "Thedric Cattellion",
        reason: "Integrated 4th generation model",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 31, details: "De-engineered 24/7 utilisation" },
    ],
    revenueData: [
      { total: "$15976.55", group: "$1998.16", company: "$2526.80" },
    ],
    roomData: [
      {
        total: 49,
        company: 1,
        outOfOrder: 8,
        stayOver: 37,
        arrivals: 68,
        departures: 29,
      },
    ],
  },
  {
    groupData: [
      { name: "Doyle and Sons", roomCount: 6, revenue: "$271.75" },
      { name: "Kunze, Rogahn and Jacobson", roomCount: 45, revenue: "$477.55" },
      { name: "Denesik-Murazik", roomCount: 16, revenue: "$434.86" },
      { name: "Ullrich-Bernier", roomCount: 17, revenue: "$460.07" },
      { name: "Hills, Auer and Brakus", roomCount: 3, revenue: "$472.69" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Ted",
        guestName: "Ted Bruin",
        reason: "Object-based dedicated concept",
      },
      {
        authorizedBy: "Matti",
        guestName: "Matti Hustler",
        reason: "Self-enabling optimizing encoding",
      },
      {
        authorizedBy: "Bartholomeus",
        guestName: "Bartholomeus Balharrie",
        reason: "Open-source client-driven open system",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 82, details: "Visionary national analyzer" },
      {
        code: "C5",
        roomNumber: 93,
        details: "Object-based mission-critical alliance",
      },
      {
        code: "HK",
        roomNumber: 94,
        details: "Self-enabling analyzing middleware",
      },
      { code: "HK", roomNumber: 10, details: "Switchable static middleware" },
    ],
    revenueData: [{ total: "$5162.99", group: "$794.90", company: "$131.62" }],
    roomData: [
      {
        total: 25,
        company: 6,
        outOfOrder: 1,
        stayOver: 26,
        arrivals: 76,
        departures: 4,
      },
    ],
  },
  {
    groupData: [
      { name: "Johns, Kuhn and Hane", roomCount: 25, revenue: "$378.72" },
      { name: "Walsh and Sons", roomCount: 13, revenue: "$402.72" },
      { name: "Rempel-Kutch", roomCount: 37, revenue: "$316.27" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Corri",
        guestName: "Corri Danter",
        reason: "Virtual demand-driven emulation",
      },
      {
        authorizedBy: "Tandi",
        guestName: "Tandi Imeson",
        reason: "Digitized 6th generation info-mediaries",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$6048.60", group: "$1739.13", company: "$2084.24" },
    ],
    roomData: [
      {
        total: 5,
        company: 2,
        outOfOrder: 2,
        stayOver: 25,
        arrivals: 25,
        departures: 100,
      },
    ],
  },
  {
    groupData: [
      { name: "Greenholt LLC", roomCount: 4, revenue: "$167.16" },
      { name: "Anderson and Sons", roomCount: 9, revenue: "$303.30" },
      { name: "Kertzmann Inc", roomCount: 4, revenue: "$362.47" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Minnie",
        guestName: "Minnie Jaffrey",
        reason: "Ameliorated interactive solution",
      },
      {
        authorizedBy: "Claresta",
        guestName: "Claresta Baudain",
        reason: "Persistent multimedia support",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "Multi-tiered methodical projection",
      },
      {
        code: "C5",
        roomNumber: 39,
        details: "Polarised context-sensitive hardware",
      },
    ],
    revenueData: [{ total: "$5452.94", group: "$343.66", company: "$2324.17" }],
    roomData: [
      {
        total: 82,
        company: 0,
        outOfOrder: 8,
        stayOver: 27,
        arrivals: 19,
        departures: 31,
      },
    ],
  },
  {
    groupData: [
      { name: "Runte, Thiel and Klocko", roomCount: 39, revenue: "$164.36" },
      { name: "Lakin-Daugherty", roomCount: 37, revenue: "$167.28" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Robinet",
        guestName: "Robinet Blaydes",
        reason: "Cloned executive success",
      },
      {
        authorizedBy: "Carce",
        guestName: "Carce Gerrad",
        reason: "Exclusive composite time-frame",
      },
      {
        authorizedBy: "Elliott",
        guestName: "Elliott Landrean",
        reason: "Streamlined 24/7 monitoring",
      },
      {
        authorizedBy: "Roderic",
        guestName: "Roderic Giorgi",
        reason: "Customer-focused responsive implementation",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 74, details: "Configurable radical attitude" },
      { code: "HK", roomNumber: 50, details: "Upgradable dynamic moratorium" },
      { code: "HK", roomNumber: 15, details: "Persistent radical product" },
    ],
    revenueData: [
      { total: "$14484.87", group: "$1917.47", company: "$2685.58" },
    ],
    roomData: [
      {
        total: 89,
        company: 1,
        outOfOrder: 10,
        stayOver: 26,
        arrivals: 44,
        departures: 97,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Lyssa",
        guestName: "Lyssa Steptow",
        reason: "Balanced leading edge archive",
      },
      {
        authorizedBy: "Ronnie",
        guestName: "Ronnie Orwell",
        reason: "Switchable coherent moderator",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 93,
        details: "Devolved client-driven hierarchy",
      },
      {
        code: "C5",
        roomNumber: 70,
        details: "Assimilated static implementation",
      },
      {
        code: "HK",
        roomNumber: 0,
        details: "User-friendly full-range capability",
      },
      {
        code: "C5",
        roomNumber: 66,
        details: "Synchronised foreground data-warehouse",
      },
    ],
    revenueData: [{ total: "$18266.60", group: "$226.21", company: "$447.30" }],
    roomData: [
      {
        total: 59,
        company: 4,
        outOfOrder: 5,
        stayOver: 32,
        arrivals: 57,
        departures: 70,
      },
    ],
  },
  {
    groupData: [
      { name: "Kessler-O'Conner", roomCount: 34, revenue: "$443.21" },
      { name: "Gusikowski and Sons", roomCount: 31, revenue: "$438.31" },
      { name: "Keeling-Graham", roomCount: 17, revenue: "$216.28" },
      { name: "Goldner, Brown and Leuschke", roomCount: 5, revenue: "$228.40" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Eldredge",
        guestName: "Eldredge Bontein",
        reason: "Object-based zero administration info-mediaries",
      },
      {
        authorizedBy: "Amalle",
        guestName: "Amalle McDonagh",
        reason: "Team-oriented asynchronous instruction set",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 17,
        details: "User-friendly explicit initiative",
      },
    ],
    revenueData: [
      { total: "$13555.26", group: "$446.43", company: "$2051.36" },
    ],
    roomData: [
      {
        total: 11,
        company: 2,
        outOfOrder: 0,
        stayOver: 22,
        arrivals: 5,
        departures: 31,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Noam",
        guestName: "Noam Reeder",
        reason: "Profit-focused uniform capacity",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$11235.46", group: "$1730.54", company: "$1428.67" },
    ],
    roomData: [
      {
        total: 9,
        company: 5,
        outOfOrder: 9,
        stayOver: 7,
        arrivals: 33,
        departures: 24,
      },
    ],
  },
  {
    groupData: [
      { name: "Dickinson LLC", roomCount: 27, revenue: "$139.10" },
      { name: "Harris-Cole", roomCount: 31, revenue: "$326.76" },
      { name: "Gulgowski and Sons", roomCount: 1, revenue: "$163.87" },
      { name: "Kulas-Moen", roomCount: 40, revenue: "$480.54" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Hi",
        guestName: "Hi Keymar",
        reason: "Proactive human-resource migration",
      },
      {
        authorizedBy: "Olly",
        guestName: "Olly Raveau",
        reason: "Robust even-keeled complexity",
      },
      {
        authorizedBy: "Fidelia",
        guestName: "Fidelia Alejandre",
        reason: "Cloned maximized adapter",
      },
      {
        authorizedBy: "Chloe",
        guestName: "Chloe Peltz",
        reason: "Managed executive moratorium",
      },
      {
        authorizedBy: "Carmelle",
        guestName: "Carmelle McNeish",
        reason: "Right-sized contextually-based collaboration",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 74,
        details: "Implemented user-facing benchmark",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "Stand-alone client-driven time-frame",
      },
      { code: "C5", roomNumber: 94, details: "Devolved stable algorithm" },
      {
        code: "C5",
        roomNumber: 43,
        details: "Reduced holistic data-warehouse",
      },
      {
        code: "HK",
        roomNumber: 97,
        details: "Vision-oriented exuding protocol",
      },
    ],
    revenueData: [
      { total: "$12244.82", group: "$558.94", company: "$2378.88" },
    ],
    roomData: [
      {
        total: 83,
        company: 7,
        outOfOrder: 7,
        stayOver: 38,
        arrivals: 4,
        departures: 65,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Wilkinson, Schmitt and Lueilwitz",
        roomCount: 33,
        revenue: "$369.38",
      },
      {
        name: "Romaguera, Langworth and Effertz",
        roomCount: 12,
        revenue: "$243.89",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Evered",
        guestName: "Evered Durand",
        reason: "Intuitive 3rd generation circuit",
      },
      {
        authorizedBy: "Kenneth",
        guestName: "Kenneth Beasley",
        reason: "Horizontal intangible info-mediaries",
      },
      {
        authorizedBy: "Hubie",
        guestName: "Hubie Dufore",
        reason: "Programmable actuating model",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 74,
        details: "Enterprise-wide dynamic open system",
      },
      {
        code: "HK",
        roomNumber: 60,
        details: "Multi-lateral full-range migration",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "Automated disintermediate info-mediaries",
      },
    ],
    revenueData: [
      { total: "$13168.26", group: "$1028.84", company: "$2606.44" },
    ],
    roomData: [
      {
        total: 47,
        company: 2,
        outOfOrder: 2,
        stayOver: 2,
        arrivals: 57,
        departures: 50,
      },
    ],
  },
  {
    groupData: [
      { name: "Keebler LLC", roomCount: 31, revenue: "$154.89" },
      { name: "Gorczany Inc", roomCount: 22, revenue: "$494.15" },
      { name: "Schuppe and Sons", roomCount: 28, revenue: "$170.21" },
      { name: "Dickinson LLC", roomCount: 10, revenue: "$121.98" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dianne",
        guestName: "Dianne Clissell",
        reason: "Universal grid-enabled alliance",
      },
      {
        authorizedBy: "Carlyn",
        guestName: "Carlyn Scotchbrook",
        reason: "Compatible regional knowledge user",
      },
      {
        authorizedBy: "Atlanta",
        guestName: "Atlanta Foard",
        reason: "Visionary executive matrices",
      },
      {
        authorizedBy: "Clim",
        guestName: "Clim Hardi",
        reason: "Profound tangible access",
      },
      {
        authorizedBy: "Noah",
        guestName: "Noah Kirby",
        reason: "Assimilated upward-trending paradigm",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$14797.00", group: "$147.25", company: "$1291.89" },
    ],
    roomData: [
      {
        total: 61,
        company: 4,
        outOfOrder: 2,
        stayOver: 42,
        arrivals: 95,
        departures: 47,
      },
    ],
  },
  {
    groupData: [{ name: "Lubowitz Inc", roomCount: 29, revenue: "$164.88" }],
    compRoomInfo: [
      {
        authorizedBy: "Elicia",
        guestName: "Elicia Stowers",
        reason: "Programmable 24/7 array",
      },
      {
        authorizedBy: "Gabriellia",
        guestName: "Gabriellia Belf",
        reason: "Sharable optimal pricing structure",
      },
      {
        authorizedBy: "Vyky",
        guestName: "Vyky Felmingham",
        reason: "Enhanced intangible Graphical User Interface",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 32,
        details: "Persistent eco-centric artificial intelligence",
      },
    ],
    revenueData: [{ total: "$5119.51", group: "$709.88", company: "$2402.51" }],
    roomData: [
      {
        total: 97,
        company: 8,
        outOfOrder: 0,
        stayOver: 41,
        arrivals: 53,
        departures: 17,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Finlay",
        guestName: "Finlay Pimerick",
        reason: "Reduced client-server process improvement",
      },
      {
        authorizedBy: "Reagan",
        guestName: "Reagan Gladeche",
        reason: "Fully-configurable modular pricing structure",
      },
      {
        authorizedBy: "Hewet",
        guestName: "Hewet Whisby",
        reason: "Multi-channelled 5th generation service-desk",
      },
      {
        authorizedBy: "Clemmie",
        guestName: "Clemmie Brekonridge",
        reason: "Open-architected executive strategy",
      },
      {
        authorizedBy: "Sigvard",
        guestName: "Sigvard Bantham",
        reason: "Automated neutral moderator",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 26,
        details: "Re-engineered non-volatile parallelism",
      },
    ],
    revenueData: [
      { total: "$10103.19", group: "$1123.44", company: "$1352.13" },
    ],
    roomData: [
      {
        total: 69,
        company: 8,
        outOfOrder: 1,
        stayOver: 14,
        arrivals: 59,
        departures: 83,
      },
    ],
  },
  {
    groupData: [
      { name: "Mueller LLC", roomCount: 38, revenue: "$126.93" },
      {
        name: "Lindgren, Schuppe and Jerde",
        roomCount: 11,
        revenue: "$239.62",
      },
      { name: "Crooks LLC", roomCount: 38, revenue: "$206.59" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Minnnie",
        guestName: "Minnnie Gye",
        reason: "Vision-oriented directional budgetary management",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 79,
        details: "User-friendly full-range moratorium",
      },
      {
        code: "HK",
        roomNumber: 32,
        details: "Enterprise-wide 6th generation monitoring",
      },
      {
        code: "HK",
        roomNumber: 1,
        details: "Monitored non-volatile orchestration",
      },
    ],
    revenueData: [
      { total: "$17575.97", group: "$1039.90", company: "$628.31" },
    ],
    roomData: [
      {
        total: 66,
        company: 7,
        outOfOrder: 9,
        stayOver: 12,
        arrivals: 74,
        departures: 28,
      },
    ],
  },
  {
    groupData: [
      { name: "Doyle, Corkery and Wolff", roomCount: 23, revenue: "$276.25" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Wayne",
        guestName: "Wayne Caruth",
        reason: "Organized radical framework",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 62,
        details: "Up-sized solution-oriented leverage",
      },
    ],
    revenueData: [
      { total: "$19631.80", group: "$517.80", company: "$2314.43" },
    ],
    roomData: [
      {
        total: 64,
        company: 4,
        outOfOrder: 2,
        stayOver: 18,
        arrivals: 74,
        departures: 23,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Rem",
        guestName: "Rem Middleweek",
        reason: "Reverse-engineered multimedia monitoring",
      },
      {
        authorizedBy: "Ives",
        guestName: "Ives Iffe",
        reason: "Progressive coherent forecast",
      },
      {
        authorizedBy: "Bradan",
        guestName: "Bradan Stockow",
        reason: "Extended grid-enabled benchmark",
      },
      {
        authorizedBy: "Murial",
        guestName: "Murial Rawsen",
        reason: "Integrated maximized methodology",
      },
      {
        authorizedBy: "Malorie",
        guestName: "Malorie Malecky",
        reason: "Mandatory hybrid project",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 15, details: "Reactive tangible definition" },
      {
        code: "C5",
        roomNumber: 49,
        details: "Implemented interactive architecture",
      },
      {
        code: "HK",
        roomNumber: 43,
        details: "Re-engineered contextually-based implementation",
      },
    ],
    revenueData: [
      { total: "$6024.87", group: "$1498.97", company: "$1937.33" },
    ],
    roomData: [
      {
        total: 25,
        company: 5,
        outOfOrder: 3,
        stayOver: 25,
        arrivals: 48,
        departures: 24,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Flatley, Heidenreich and Corwin",
        roomCount: 16,
        revenue: "$435.87",
      },
      { name: "Conn-Rippin", roomCount: 40, revenue: "$423.12" },
      { name: "Macejkovic-Skiles", roomCount: 23, revenue: "$398.34" },
      { name: "Abernathy LLC", roomCount: 20, revenue: "$143.13" },
      { name: "Kerluke LLC", roomCount: 47, revenue: "$342.63" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Cate",
        guestName: "Cate Facher",
        reason: "Monitored fresh-thinking concept",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 69, details: "Pre-emptive national approach" },
      { code: "HK", roomNumber: 88, details: "Operative asymmetric workforce" },
      {
        code: "HK",
        roomNumber: 40,
        details: "Organized mission-critical success",
      },
    ],
    revenueData: [{ total: "$5365.59", group: "$427.45", company: "$1510.29" }],
    roomData: [
      {
        total: 7,
        company: 7,
        outOfOrder: 6,
        stayOver: 27,
        arrivals: 48,
        departures: 16,
      },
    ],
  },
  {
    groupData: [
      { name: "Huel-Bayer", roomCount: 26, revenue: "$157.29" },
      { name: "Cummerata Group", roomCount: 13, revenue: "$388.00" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Antin",
        guestName: "Antin Martygin",
        reason: "Progressive bandwidth-monitored implementation",
      },
      {
        authorizedBy: "Joseito",
        guestName: "Joseito Brandoni",
        reason: "Progressive exuding help-desk",
      },
      {
        authorizedBy: "Hestia",
        guestName: "Hestia McMeanma",
        reason: "Re-engineered executive infrastructure",
      },
      {
        authorizedBy: "Idelle",
        guestName: "Idelle Gaskill",
        reason: "Streamlined responsive matrix",
      },
      {
        authorizedBy: "Rebbecca",
        guestName: "Rebbecca Connochie",
        reason: "Networked incremental leverage",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 96,
        details: "Synergistic value-added functionalities",
      },
      { code: "C5", roomNumber: 69, details: "Operative scalable hardware" },
      {
        code: "C5",
        roomNumber: 98,
        details: "User-centric human-resource secured line",
      },
      {
        code: "C5",
        roomNumber: 69,
        details: "User-centric 6th generation open system",
      },
    ],
    revenueData: [
      { total: "$12422.11", group: "$1353.52", company: "$2163.09" },
    ],
    roomData: [
      {
        total: 85,
        company: 5,
        outOfOrder: 2,
        stayOver: 15,
        arrivals: 89,
        departures: 99,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Labadie, Mayert and Predovic",
        roomCount: 34,
        revenue: "$439.12",
      },
      { name: "Okuneva-Leffler", roomCount: 49, revenue: "$445.98" },
      { name: "Turner-Johnson", roomCount: 11, revenue: "$346.85" },
      { name: "Trantow-Rempel", roomCount: 50, revenue: "$241.77" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Peg",
        guestName: "Peg Humbatch",
        reason: "Multi-lateral modular focus group",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 65, details: "Extended reciprocal adapter" },
      {
        code: "HK",
        roomNumber: 81,
        details: "Persistent client-driven project",
      },
      {
        code: "C5",
        roomNumber: 67,
        details: "Cross-platform tertiary productivity",
      },
      {
        code: "HK",
        roomNumber: 62,
        details: "Adaptive non-volatile budgetary management",
      },
    ],
    revenueData: [
      { total: "$15279.67", group: "$1499.28", company: "$1642.00" },
    ],
    roomData: [
      {
        total: 19,
        company: 10,
        outOfOrder: 7,
        stayOver: 22,
        arrivals: 72,
        departures: 32,
      },
    ],
  },
  {
    groupData: [
      { name: "Shanahan-McCullough", roomCount: 16, revenue: "$338.04" },
      { name: "Farrell-Stoltenberg", roomCount: 6, revenue: "$398.42" },
      { name: "Hane, Kemmer and Dicki", roomCount: 43, revenue: "$139.62" },
      { name: "Deckow Inc", roomCount: 45, revenue: "$293.50" },
      {
        name: "O'Reilly, Marks and Shanahan",
        roomCount: 41,
        revenue: "$135.68",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Rozelle",
        guestName: "Rozelle Hoy",
        reason: "Public-key client-server firmware",
      },
      {
        authorizedBy: "Haslett",
        guestName: "Haslett Mattocks",
        reason: "Compatible modular system engine",
      },
      {
        authorizedBy: "Axel",
        guestName: "Axel Polson",
        reason: "Ergonomic analyzing flexibility",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 50,
        details: "Advanced transitional methodology",
      },
      {
        code: "C5",
        roomNumber: 59,
        details: "Persevering encompassing structure",
      },
    ],
    revenueData: [
      { total: "$13169.60", group: "$346.19", company: "$2666.90" },
    ],
    roomData: [
      {
        total: 66,
        company: 2,
        outOfOrder: 2,
        stayOver: 39,
        arrivals: 19,
        departures: 23,
      },
    ],
  },
  {
    groupData: [
      { name: "McClure-Kub", roomCount: 44, revenue: "$304.57" },
      { name: "Klocko-Torp", roomCount: 24, revenue: "$440.00" },
      { name: "Pfannerstill-Stoltenberg", roomCount: 47, revenue: "$324.18" },
      { name: "Sanford LLC", roomCount: 45, revenue: "$280.89" },
      { name: "Graham Group", roomCount: 6, revenue: "$340.27" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Titos",
        guestName: "Titos Kenton",
        reason: "Innovative needs-based attitude",
      },
      {
        authorizedBy: "Roddie",
        guestName: "Roddie Piecha",
        reason: "Virtual intermediate flexibility",
      },
      {
        authorizedBy: "Garold",
        guestName: "Garold Patillo",
        reason: "Assimilated responsive model",
      },
      {
        authorizedBy: "Adelina",
        guestName: "Adelina Lindro",
        reason: "Operative multi-state matrix",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 49,
        details: "Centralized methodical algorithm",
      },
      { code: "HK", roomNumber: 87, details: "Cloned systemic emulation" },
      {
        code: "HK",
        roomNumber: 79,
        details: "Object-based encompassing Graphic Interface",
      },
    ],
    revenueData: [{ total: "$14466.56", group: "$384.90", company: "$181.75" }],
    roomData: [
      {
        total: 2,
        company: 3,
        outOfOrder: 7,
        stayOver: 28,
        arrivals: 98,
        departures: 90,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Haag, Franecki and O'Conner",
        roomCount: 50,
        revenue: "$284.73",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Elane",
        guestName: "Elane Glynne",
        reason: "Focused needs-based budgetary management",
      },
      {
        authorizedBy: "Jacques",
        guestName: "Jacques Sanderson",
        reason: "Managed bifurcated collaboration",
      },
      {
        authorizedBy: "Laural",
        guestName: "Laural Westrey",
        reason: "Assimilated tertiary array",
      },
      {
        authorizedBy: "Dwayne",
        guestName: "Dwayne Jacke",
        reason: "Open-architected secondary forecast",
      },
      {
        authorizedBy: "Ulberto",
        guestName: "Ulberto Ortells",
        reason: "Centralized solution-oriented local area network",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 79,
        details: "Streamlined zero tolerance array",
      },
      {
        code: "C5",
        roomNumber: 24,
        details: "Fully-configurable secondary implementation",
      },
      {
        code: "HK",
        roomNumber: 75,
        details: "Optional 5th generation pricing structure",
      },
      {
        code: "C5",
        roomNumber: 43,
        details: "Cross-group foreground flexibility",
      },
      {
        code: "C5",
        roomNumber: 56,
        details: "Cross-platform object-oriented approach",
      },
    ],
    revenueData: [{ total: "$5979.29", group: "$659.62", company: "$2650.13" }],
    roomData: [
      {
        total: 18,
        company: 10,
        outOfOrder: 10,
        stayOver: 23,
        arrivals: 73,
        departures: 30,
      },
    ],
  },
  {
    groupData: [{ name: "Cremin-Weissnat", roomCount: 41, revenue: "$216.33" }],
    compRoomInfo: [
      {
        authorizedBy: "Vera",
        guestName: "Vera O'Hagirtie",
        reason: "Implemented discrete standardization",
      },
      {
        authorizedBy: "Elspeth",
        guestName: "Elspeth Folbigg",
        reason: "Robust grid-enabled leverage",
      },
      {
        authorizedBy: "Gina",
        guestName: "Gina Simoneau",
        reason: "User-friendly zero administration customer loyalty",
      },
      {
        authorizedBy: "Rici",
        guestName: "Rici De Blasi",
        reason: "Operative well-modulated time-frame",
      },
      {
        authorizedBy: "Tiff",
        guestName: "Tiff Beddon",
        reason: "Future-proofed context-sensitive core",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "Synergistic bandwidth-monitored interface",
      },
    ],
    revenueData: [
      { total: "$14133.82", group: "$813.32", company: "$1224.68" },
    ],
    roomData: [
      {
        total: 73,
        company: 3,
        outOfOrder: 4,
        stayOver: 37,
        arrivals: 16,
        departures: 27,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Donna",
        guestName: "Donna Huggins",
        reason: "Universal object-oriented infrastructure",
      },
      {
        authorizedBy: "Carney",
        guestName: "Carney Fealey",
        reason: "Cross-group optimizing monitoring",
      },
      {
        authorizedBy: "Clarey",
        guestName: "Clarey Mizen",
        reason: "Face to face clear-thinking support",
      },
      {
        authorizedBy: "Cassey",
        guestName: "Cassey Hissett",
        reason: "Optional value-added model",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 7, details: "Ameliorated radical analyzer" },
      { code: "C5", roomNumber: 79, details: "Cross-group holistic access" },
      {
        code: "C5",
        roomNumber: 71,
        details: "Function-based systematic budgetary management",
      },
    ],
    revenueData: [{ total: "$5747.16", group: "$1582.54", company: "$166.76" }],
    roomData: [
      {
        total: 95,
        company: 1,
        outOfOrder: 9,
        stayOver: 33,
        arrivals: 95,
        departures: 11,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Lorrayne",
        guestName: "Lorrayne Maleby",
        reason: "Persevering 24 hour knowledge base",
      },
      {
        authorizedBy: "Aaron",
        guestName: "Aaron Nodin",
        reason: "User-friendly zero administration support",
      },
      {
        authorizedBy: "Peder",
        guestName: "Peder Burland",
        reason: "Quality-focused exuding projection",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 40,
        details: "Operative reciprocal pricing structure",
      },
      {
        code: "C5",
        roomNumber: 52,
        details: "Business-focused solution-oriented extranet",
      },
      { code: "C5", roomNumber: 97, details: "Organized 24 hour benchmark" },
    ],
    revenueData: [
      { total: "$13582.96", group: "$1817.68", company: "$451.87" },
    ],
    roomData: [
      {
        total: 4,
        company: 3,
        outOfOrder: 7,
        stayOver: 17,
        arrivals: 68,
        departures: 27,
      },
    ],
  },
  {
    groupData: [
      { name: "Brakus-Beatty", roomCount: 36, revenue: "$493.65" },
      { name: "O'Conner Inc", roomCount: 8, revenue: "$395.58" },
      { name: "Howe, Nolan and Ankunding", roomCount: 8, revenue: "$138.52" },
      { name: "White-Bogisich", roomCount: 48, revenue: "$264.08" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Merline",
        guestName: "Merline Tremmil",
        reason: "Devolved asymmetric throughput",
      },
      {
        authorizedBy: "Alix",
        guestName: "Alix Rewcassell",
        reason: "Horizontal fresh-thinking core",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 21,
        details: "Face to face clear-thinking paradigm",
      },
      { code: "C5", roomNumber: 16, details: "Operative cohesive solution" },
    ],
    revenueData: [
      { total: "$14893.20", group: "$452.20", company: "$2832.59" },
    ],
    roomData: [
      {
        total: 7,
        company: 4,
        outOfOrder: 9,
        stayOver: 4,
        arrivals: 82,
        departures: 86,
      },
    ],
  },
  {
    groupData: [
      { name: "Welch, Turner and Johnston", roomCount: 11, revenue: "$395.23" },
      { name: "Marvin-Kling", roomCount: 5, revenue: "$232.47" },
      { name: "Spencer-Cassin", roomCount: 31, revenue: "$191.87" },
      { name: "Williamson and Sons", roomCount: 9, revenue: "$311.87" },
      { name: "Hackett Group", roomCount: 8, revenue: "$143.71" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jourdan",
        guestName: "Jourdan Bougen",
        reason: "Cross-group actuating orchestration",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 100,
        details: "Fundamental secondary task-force",
      },
      {
        code: "C5",
        roomNumber: 61,
        details: "Cross-group disintermediate functionalities",
      },
    ],
    revenueData: [
      { total: "$18528.01", group: "$1092.58", company: "$851.09" },
    ],
    roomData: [
      {
        total: 76,
        company: 10,
        outOfOrder: 1,
        stayOver: 46,
        arrivals: 80,
        departures: 53,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Frasquito",
        guestName: "Frasquito Staddon",
        reason: "Stand-alone multi-tasking function",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 88,
        details: "Implemented tertiary Graphical User Interface",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "Down-sized grid-enabled methodology",
      },
    ],
    revenueData: [
      { total: "$7469.08", group: "$1742.95", company: "$1401.93" },
    ],
    roomData: [
      {
        total: 21,
        company: 8,
        outOfOrder: 2,
        stayOver: 31,
        arrivals: 40,
        departures: 65,
      },
    ],
  },
  {
    groupData: [{ name: "Ryan Inc", roomCount: 34, revenue: "$180.98" }],
    compRoomInfo: [
      {
        authorizedBy: "Oona",
        guestName: "Oona Hayter",
        reason: "Digitized client-driven collaboration",
      },
      {
        authorizedBy: "Darby",
        guestName: "Darby Ruffles",
        reason: "Digitized multi-state customer loyalty",
      },
      {
        authorizedBy: "Michelina",
        guestName: "Michelina Melanaphy",
        reason: "Managed leading edge hierarchy",
      },
      {
        authorizedBy: "Kassandra",
        guestName: "Kassandra Gagan",
        reason: "Profound regional structure",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 62, details: "Multi-tiered 24/7 neural-net" },
      {
        code: "C5",
        roomNumber: 55,
        details: "User-centric intermediate protocol",
      },
      {
        code: "C5",
        roomNumber: 99,
        details: "Innovative interactive implementation",
      },
      { code: "HK", roomNumber: 18, details: "Polarised mobile matrices" },
    ],
    revenueData: [
      { total: "$14709.67", group: "$190.83", company: "$2972.23" },
    ],
    roomData: [
      {
        total: 99,
        company: 8,
        outOfOrder: 10,
        stayOver: 12,
        arrivals: 18,
        departures: 70,
      },
    ],
  },
  {
    groupData: [
      { name: "Torphy Inc", roomCount: 41, revenue: "$393.98" },
      { name: "Orn, Koch and McCullough", roomCount: 17, revenue: "$179.71" },
      { name: "Howe, Price and Terry", roomCount: 0, revenue: "$178.07" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Thea",
        guestName: "Thea Hammerton",
        reason: "Robust static time-frame",
      },
      {
        authorizedBy: "Adelaida",
        guestName: "Adelaida Rodnight",
        reason: "Right-sized dynamic array",
      },
      {
        authorizedBy: "Aidan",
        guestName: "Aidan Cawthron",
        reason: "De-engineered solution-oriented database",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 23, details: "Cross-group stable moderator" },
      {
        code: "C5",
        roomNumber: 51,
        details: "Optional well-modulated Graphic Interface",
      },
    ],
    revenueData: [
      { total: "$19089.60", group: "$1023.79", company: "$1679.16" },
    ],
    roomData: [
      {
        total: 18,
        company: 9,
        outOfOrder: 10,
        stayOver: 12,
        arrivals: 14,
        departures: 26,
      },
    ],
  },
  {
    groupData: [{ name: "Grimes Group", roomCount: 21, revenue: "$209.88" }],
    compRoomInfo: [
      {
        authorizedBy: "Sonny",
        guestName: "Sonny Aasaf",
        reason: "Managed actuating array",
      },
      {
        authorizedBy: "Quintana",
        guestName: "Quintana Hiddersley",
        reason: "Right-sized empowering circuit",
      },
      {
        authorizedBy: "Norrie",
        guestName: "Norrie Simson",
        reason: "Organic disintermediate neural-net",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 96,
        details: "Reverse-engineered clear-thinking matrices",
      },
      { code: "HK", roomNumber: 74, details: "Enhanced interactive structure" },
    ],
    revenueData: [
      { total: "$11625.40", group: "$993.54", company: "$2624.84" },
    ],
    roomData: [
      {
        total: 13,
        company: 4,
        outOfOrder: 9,
        stayOver: 2,
        arrivals: 65,
        departures: 35,
      },
    ],
  },
  {
    groupData: [{ name: "Schulist LLC", roomCount: 31, revenue: "$116.32" }],
    compRoomInfo: [
      {
        authorizedBy: "Tasha",
        guestName: "Tasha Scuffham",
        reason: "Polarised system-worthy pricing structure",
      },
      {
        authorizedBy: "Melita",
        guestName: "Melita Clipston",
        reason: "Business-focused homogeneous monitoring",
      },
      {
        authorizedBy: "Frank",
        guestName: "Frank Antwis",
        reason: "Programmable even-keeled matrices",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 35, details: "Monitored client-server policy" },
      { code: "HK", roomNumber: 87, details: "Down-sized scalable approach" },
    ],
    revenueData: [{ total: "$5070.73", group: "$443.35", company: "$2666.83" }],
    roomData: [
      {
        total: 73,
        company: 2,
        outOfOrder: 3,
        stayOver: 5,
        arrivals: 66,
        departures: 91,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Bernhard, McKenzie and O'Connell",
        roomCount: 9,
        revenue: "$336.86",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Marshal",
        guestName: "Marshal Reggio",
        reason: "Cross-group static capability",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$11410.95", group: "$1700.78", company: "$1902.07" },
    ],
    roomData: [
      {
        total: 85,
        company: 0,
        outOfOrder: 7,
        stayOver: 27,
        arrivals: 90,
        departures: 45,
      },
    ],
  },
  {
    groupData: [
      { name: "Emmerich, Mraz and Marvin", roomCount: 35, revenue: "$479.13" },
      { name: "Bode-Boehm", roomCount: 19, revenue: "$121.20" },
      { name: "Boehm LLC", roomCount: 8, revenue: "$431.57" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jocelyne",
        guestName: "Jocelyne Foot",
        reason: "Fully-configurable bi-directional open system",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$17153.21", group: "$1485.43", company: "$1237.76" },
    ],
    roomData: [
      {
        total: 46,
        company: 9,
        outOfOrder: 3,
        stayOver: 48,
        arrivals: 35,
        departures: 59,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Kass",
        guestName: "Kass Lapslie",
        reason: "Cross-group asynchronous system engine",
      },
      {
        authorizedBy: "Maxy",
        guestName: "Maxy Northfield",
        reason: "Persistent 6th generation framework",
      },
      {
        authorizedBy: "Cecil",
        guestName: "Cecil Miner",
        reason: "Ergonomic exuding paradigm",
      },
      {
        authorizedBy: "Weider",
        guestName: "Weider Halsho",
        reason: "User-centric 5th generation hub",
      },
    ],
    outOfOrderRooms: [
      { code: "HK", roomNumber: 9, details: "Virtual holistic archive" },
      {
        code: "C5",
        roomNumber: 50,
        details: "Business-focused leading edge standardization",
      },
    ],
    revenueData: [
      { total: "$13562.04", group: "$522.23", company: "$1359.92" },
    ],
    roomData: [
      {
        total: 75,
        company: 0,
        outOfOrder: 2,
        stayOver: 9,
        arrivals: 37,
        departures: 66,
      },
    ],
  },
  {
    groupData: [{ name: "Ryan-Emard", roomCount: 30, revenue: "$347.44" }],
    compRoomInfo: [
      {
        authorizedBy: "Rosabel",
        guestName: "Rosabel Harral",
        reason: "Proactive dynamic support",
      },
      {
        authorizedBy: "Dodi",
        guestName: "Dodi Capper",
        reason: "User-centric radical knowledge user",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 0, details: "Versatile incremental interface" },
    ],
    revenueData: [{ total: "$11233.11", group: "$889.59", company: "$107.10" }],
    roomData: [
      {
        total: 41,
        company: 4,
        outOfOrder: 9,
        stayOver: 3,
        arrivals: 86,
        departures: 41,
      },
    ],
  },
  {
    groupData: [
      { name: "Schroeder-Becker", roomCount: 22, revenue: "$349.77" },
      { name: "Johnston-Stroman", roomCount: 8, revenue: "$126.39" },
      { name: "Ondricka-McCullough", roomCount: 44, revenue: "$296.82" },
      { name: "Roob, Mohr and Muller", roomCount: 19, revenue: "$346.27" },
      { name: "Stracke Group", roomCount: 20, revenue: "$359.46" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Wendie",
        guestName: "Wendie Cayet",
        reason: "Self-enabling local attitude",
      },
      {
        authorizedBy: "Lucille",
        guestName: "Lucille Maciocia",
        reason: "User-centric client-server definition",
      },
      {
        authorizedBy: "Teddie",
        guestName: "Teddie Brogini",
        reason: "Expanded directional firmware",
      },
      {
        authorizedBy: "Giacobo",
        guestName: "Giacobo Dietmar",
        reason: "Cross-platform zero defect database",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "Future-proofed value-added knowledge base",
      },
      { code: "HK", roomNumber: 68, details: "Streamlined explicit success" },
      { code: "HK", roomNumber: 35, details: "Versatile static task-force" },
      { code: "HK", roomNumber: 79, details: "Universal full-range solution" },
    ],
    revenueData: [
      { total: "$13816.22", group: "$1981.44", company: "$960.52" },
    ],
    roomData: [
      {
        total: 74,
        company: 3,
        outOfOrder: 4,
        stayOver: 6,
        arrivals: 72,
        departures: 46,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Bergstrom, Schowalter and Lind",
        roomCount: 50,
        revenue: "$395.66",
      },
      { name: "Marvin LLC", roomCount: 9, revenue: "$364.98" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Donica",
        guestName: "Donica Cordall",
        reason: "Reactive homogeneous solution",
      },
      {
        authorizedBy: "Dania",
        guestName: "Dania Tyler",
        reason: "Total holistic hub",
      },
      {
        authorizedBy: "Doria",
        guestName: "Doria Mably",
        reason: "Sharable homogeneous capacity",
      },
      {
        authorizedBy: "Guntar",
        guestName: "Guntar Binnes",
        reason: "Reverse-engineered non-volatile success",
      },
      {
        authorizedBy: "Morlee",
        guestName: "Morlee Furmedge",
        reason: "Operative context-sensitive customer loyalty",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$18257.33", group: "$179.45", company: "$1249.12" },
    ],
    roomData: [
      {
        total: 65,
        company: 9,
        outOfOrder: 10,
        stayOver: 11,
        arrivals: 92,
        departures: 93,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Jermain",
        guestName: "Jermain Whitechurch",
        reason: "Enhanced systematic benchmark",
      },
      {
        authorizedBy: "Trudie",
        guestName: "Trudie Bazoge",
        reason: "Advanced fresh-thinking encoding",
      },
      {
        authorizedBy: "Brynna",
        guestName: "Brynna Kleinpeltz",
        reason: "Centralized tangible productivity",
      },
      {
        authorizedBy: "Jodi",
        guestName: "Jodi Ullett",
        reason: "Open-architected eco-centric system engine",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$10063.61", group: "$325.73", company: "$1040.39" },
    ],
    roomData: [
      {
        total: 45,
        company: 0,
        outOfOrder: 4,
        stayOver: 2,
        arrivals: 19,
        departures: 50,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Kshlerin, Senger and Spinka",
        roomCount: 15,
        revenue: "$268.34",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Harriot",
        guestName: "Harriot Mariault",
        reason: "Ameliorated didactic parallelism",
      },
      {
        authorizedBy: "Xerxes",
        guestName: "Xerxes Aldus",
        reason: "Self-enabling solution-oriented complexity",
      },
      {
        authorizedBy: "Gabriel",
        guestName: "Gabriel Orknay",
        reason: "Enterprise-wide national service-desk",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 69,
        details: "Multi-lateral incremental interface",
      },
      {
        code: "C5",
        roomNumber: 78,
        details: "Digitized fault-tolerant implementation",
      },
      {
        code: "HK",
        roomNumber: 73,
        details: "Horizontal impactful standardization",
      },
    ],
    revenueData: [{ total: "$8229.97", group: "$153.59", company: "$1129.44" }],
    roomData: [
      {
        total: 21,
        company: 9,
        outOfOrder: 1,
        stayOver: 27,
        arrivals: 27,
        departures: 77,
      },
    ],
  },
  {
    groupData: [
      { name: "Bernhard and Sons", roomCount: 3, revenue: "$274.20" },
      { name: "Bradtke, Barrows and Hand", roomCount: 32, revenue: "$485.17" },
      { name: "Heidenreich-Monahan", roomCount: 49, revenue: "$250.79" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Estel",
        guestName: "Estel Sweeten",
        reason: "Fundamental uniform Graphical User Interface",
      },
      {
        authorizedBy: "Lennie",
        guestName: "Lennie Rubra",
        reason: "Synchronised empowering productivity",
      },
      {
        authorizedBy: "Johannah",
        guestName: "Johannah Braiden",
        reason: "Cross-platform scalable synergy",
      },
    ],
    outOfOrderRooms: [
      { code: "C5", roomNumber: 94, details: "Profound secondary firmware" },
      {
        code: "HK",
        roomNumber: 41,
        details: "Implemented discrete application",
      },
      {
        code: "HK",
        roomNumber: 88,
        details: "Switchable 3rd generation service-desk",
      },
    ],
    revenueData: [
      { total: "$17151.45", group: "$1820.02", company: "$1721.84" },
    ],
    roomData: [
      {
        total: 92,
        company: 9,
        outOfOrder: 3,
        stayOver: 36,
        arrivals: 33,
        departures: 39,
      },
    ],
  },
  {
    groupData: [
      { name: "Ziemann and Sons", roomCount: 15, revenue: "$231.20" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Farand",
        guestName: "Farand Higgan",
        reason: "Intuitive zero defect process improvement",
      },
      {
        authorizedBy: "Darrick",
        guestName: "Darrick Duigenan",
        reason: "Horizontal impactful neural-net",
      },
      {
        authorizedBy: "Tome",
        guestName: "Tome Yuryichev",
        reason: "Persevering upward-trending adapter",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 98,
        details: "Horizontal discrete implementation",
      },
      { code: "C5", roomNumber: 23, details: "Devolved heuristic hub" },
      {
        code: "C5",
        roomNumber: 76,
        details: "Cross-group client-server projection",
      },
      {
        code: "C5",
        roomNumber: 54,
        details: "Intuitive asynchronous function",
      },
    ],
    revenueData: [
      { total: "$16528.02", group: "$577.37", company: "$1906.35" },
    ],
    roomData: [
      {
        total: 30,
        company: 4,
        outOfOrder: 9,
        stayOver: 0,
        arrivals: 92,
        departures: 41,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Itch",
        guestName: "Itch Perrot",
        reason: "Optimized executive structure",
      },
      {
        authorizedBy: "Imelda",
        guestName: "Imelda Croxford",
        reason: "Enterprise-wide intangible policy",
      },
      {
        authorizedBy: "Meredith",
        guestName: "Meredith Barbour",
        reason: "Monitored intangible secured line",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 54,
        details: "Balanced zero administration application",
      },
      {
        code: "C5",
        roomNumber: 38,
        details: "Customizable eco-centric encoding",
      },
    ],
    revenueData: [
      { total: "$16527.39", group: "$1204.70", company: "$1568.60" },
    ],
    roomData: [
      {
        total: 94,
        company: 7,
        outOfOrder: 8,
        stayOver: 15,
        arrivals: 69,
        departures: 86,
      },
    ],
  },
  {
    groupData: [
      { name: "Smith, Hand and Kshlerin", roomCount: 4, revenue: "$222.20" },
      {
        name: "Heidenreich, Cremin and O'Keefe",
        roomCount: 45,
        revenue: "$488.67",
      },
      {
        name: "Rogahn, Hagenes and Emmerich",
        roomCount: 18,
        revenue: "$380.63",
      },
      {
        name: "Abbott, Kertzmann and Dibbert",
        roomCount: 2,
        revenue: "$425.84",
      },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Andre",
        guestName: "Andre Mulgrew",
        reason: "Virtual hybrid pricing structure",
      },
      {
        authorizedBy: "Lee",
        guestName: "Lee Spinks",
        reason: "Secured cohesive Graphic Interface",
      },
      {
        authorizedBy: "Benedetta",
        guestName: "Benedetta Harring",
        reason: "Profound asymmetric array",
      },
      {
        authorizedBy: "Ludovico",
        guestName: "Ludovico Crumbleholme",
        reason: "Automated homogeneous info-mediaries",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 1,
        details: "Networked impactful knowledge user",
      },
      {
        code: "HK",
        roomNumber: 96,
        details: "Function-based real-time throughput",
      },
    ],
    revenueData: [{ total: "$11025.05", group: "$742.71", company: "$922.59" }],
    roomData: [
      {
        total: 82,
        company: 5,
        outOfOrder: 3,
        stayOver: 45,
        arrivals: 100,
        departures: 22,
      },
    ],
  },
  {
    groupData: [
      { name: "Ankunding Inc", roomCount: 10, revenue: "$252.59" },
      { name: "Mante-Ullrich", roomCount: 15, revenue: "$205.41" },
      { name: "Fahey and Sons", roomCount: 7, revenue: "$471.49" },
      { name: "Dicki-Schowalter", roomCount: 24, revenue: "$238.23" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Lorianna",
        guestName: "Lorianna Pawden",
        reason: "Right-sized discrete knowledge base",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 26,
        details: "Object-based mobile superstructure",
      },
      { code: "C5", roomNumber: 4, details: "Sharable tangible approach" },
      { code: "C5", roomNumber: 60, details: "Switchable stable support" },
    ],
    revenueData: [
      { total: "$18138.98", group: "$1119.56", company: "$1537.20" },
    ],
    roomData: [
      {
        total: 90,
        company: 0,
        outOfOrder: 3,
        stayOver: 50,
        arrivals: 61,
        departures: 52,
      },
    ],
  },
  {
    groupData: [
      { name: "Raynor, Kshlerin and Rice", roomCount: 14, revenue: "$474.13" },
      { name: "Kuvalis Group", roomCount: 12, revenue: "$257.17" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Kit",
        guestName: "Kit Zollner",
        reason: "Advanced explicit middleware",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 28,
        details: "Pre-emptive 24 hour open system",
      },
      {
        code: "HK",
        roomNumber: 30,
        details: "Re-engineered interactive array",
      },
      {
        code: "C5",
        roomNumber: 26,
        details: "Seamless scalable infrastructure",
      },
      { code: "HK", roomNumber: 74, details: "Profound didactic support" },
    ],
    revenueData: [
      { total: "$12078.47", group: "$1031.98", company: "$1223.66" },
    ],
    roomData: [
      {
        total: 21,
        company: 2,
        outOfOrder: 4,
        stayOver: 5,
        arrivals: 21,
        departures: 73,
      },
    ],
  },
  {
    groupData: [
      { name: "Schmitt and Sons", roomCount: 16, revenue: "$283.62" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jerry",
        guestName: "Jerry Kier",
        reason: "Realigned modular emulation",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 98,
        details: "Fundamental coherent conglomeration",
      },
    ],
    revenueData: [
      { total: "$19251.90", group: "$1854.19", company: "$1505.72" },
    ],
    roomData: [
      {
        total: 4,
        company: 5,
        outOfOrder: 3,
        stayOver: 49,
        arrivals: 80,
        departures: 94,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Darrell",
        guestName: "Darrell Crottagh",
        reason: "Programmable zero defect complexity",
      },
      {
        authorizedBy: "Anders",
        guestName: "Anders Paff",
        reason: "Networked client-server application",
      },
      {
        authorizedBy: "Casey",
        guestName: "Casey Brekonridge",
        reason: "Universal cohesive concept",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 46,
        details: "Mandatory context-sensitive archive",
      },
      {
        code: "HK",
        roomNumber: 33,
        details: "Synchronised didactic benchmark",
      },
      {
        code: "C5",
        roomNumber: 81,
        details: "Public-key homogeneous challenge",
      },
    ],
    revenueData: [{ total: "$5406.50", group: "$1363.77", company: "$338.13" }],
    roomData: [
      {
        total: 40,
        company: 2,
        outOfOrder: 9,
        stayOver: 5,
        arrivals: 72,
        departures: 54,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Georgetta",
        guestName: "Georgetta Simounet",
        reason: "Self-enabling reciprocal open architecture",
      },
      {
        authorizedBy: "Kass",
        guestName: "Kass Scarbarrow",
        reason: "Operative context-sensitive middleware",
      },
      {
        authorizedBy: "Milton",
        guestName: "Milton Limpricht",
        reason: "Multi-layered radical flexibility",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 78,
        details: "Public-key next generation data-warehouse",
      },
      {
        code: "HK",
        roomNumber: 61,
        details: "Re-engineered even-keeled matrix",
      },
      {
        code: "C5",
        roomNumber: 62,
        details: "Team-oriented mission-critical middleware",
      },
    ],
    revenueData: [{ total: "$10799.16", group: "$517.62", company: "$936.68" }],
    roomData: [
      {
        total: 57,
        company: 1,
        outOfOrder: 2,
        stayOver: 18,
        arrivals: 67,
        departures: 83,
      },
    ],
  },
  {
    groupData: [
      { name: "Bode Group", roomCount: 36, revenue: "$438.93" },
      { name: "Kuphal-Padberg", roomCount: 35, revenue: "$130.53" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Caria",
        guestName: "Caria Blindt",
        reason: "Diverse clear-thinking paradigm",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$5040.39", group: "$342.85", company: "$633.74" }],
    roomData: [
      {
        total: 51,
        company: 8,
        outOfOrder: 2,
        stayOver: 31,
        arrivals: 47,
        departures: 10,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Whitman",
        guestName: "Whitman Capin",
        reason: "Stand-alone zero administration paradigm",
      },
      {
        authorizedBy: "Osmund",
        guestName: "Osmund Birdall",
        reason: "Re-contextualized incremental Graphic Interface",
      },
      {
        authorizedBy: "Shayna",
        guestName: "Shayna Shafier",
        reason: "Reduced context-sensitive flexibility",
      },
      {
        authorizedBy: "Jelene",
        guestName: "Jelene Cridlon",
        reason: "Triple-buffered fault-tolerant frame",
      },
      {
        authorizedBy: "Alair",
        guestName: "Alair Tchir",
        reason: "Horizontal bandwidth-monitored functionalities",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 21,
        details: "Right-sized user-facing focus group",
      },
      { code: "C5", roomNumber: 64, details: "Extended methodical array" },
      {
        code: "C5",
        roomNumber: 67,
        details: "Re-contextualized context-sensitive frame",
      },
      {
        code: "HK",
        roomNumber: 48,
        details: "Public-key interactive capacity",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "Up-sized zero administration algorithm",
      },
    ],
    revenueData: [
      { total: "$15187.16", group: "$854.65", company: "$1519.11" },
    ],
    roomData: [
      {
        total: 70,
        company: 0,
        outOfOrder: 5,
        stayOver: 5,
        arrivals: 45,
        departures: 51,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Berge, Daugherty and Weissnat",
        roomCount: 24,
        revenue: "$108.40",
      },
      { name: "D'Amore-Kuhn", roomCount: 10, revenue: "$449.41" },
      { name: "Ward-Beatty", roomCount: 49, revenue: "$375.79" },
      { name: "Bergstrom LLC", roomCount: 35, revenue: "$225.33" },
      { name: "Berge Group", roomCount: 47, revenue: "$374.94" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Bethina",
        guestName: "Bethina Wyper",
        reason: "Organic methodical synergy",
      },
      {
        authorizedBy: "Witty",
        guestName: "Witty Baldinotti",
        reason: "Compatible context-sensitive capacity",
      },
      {
        authorizedBy: "Fernando",
        guestName: "Fernando Cornew",
        reason: "Upgradable reciprocal attitude",
      },
      {
        authorizedBy: "Cindelyn",
        guestName: "Cindelyn Antowski",
        reason: "Operative responsive hierarchy",
      },
      {
        authorizedBy: "Vittorio",
        guestName: "Vittorio Giacovazzo",
        reason: "Inverse maximized superstructure",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 78,
        details: "Vision-oriented grid-enabled time-frame",
      },
      {
        code: "C5",
        roomNumber: 48,
        details: "Progressive object-oriented artificial intelligence",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "Realigned object-oriented info-mediaries",
      },
    ],
    revenueData: [
      { total: "$11202.16", group: "$977.11", company: "$2452.55" },
    ],
    roomData: [
      {
        total: 64,
        company: 0,
        outOfOrder: 10,
        stayOver: 41,
        arrivals: 81,
        departures: 60,
      },
    ],
  },
  {
    groupData: [
      { name: "Tillman LLC", roomCount: 8, revenue: "$150.42" },
      { name: "Kunde-Rolfson", roomCount: 20, revenue: "$397.89" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Dewitt",
        guestName: "Dewitt Freeland",
        reason: "Re-contextualized fault-tolerant toolset",
      },
      {
        authorizedBy: "Lilias",
        guestName: "Lilias Haylett",
        reason: "Fundamental reciprocal policy",
      },
      {
        authorizedBy: "Reube",
        guestName: "Reube Trevers",
        reason: "Up-sized multi-tasking concept",
      },
      {
        authorizedBy: "Minda",
        guestName: "Minda Lipyeat",
        reason: "Ameliorated solution-oriented encryption",
      },
      {
        authorizedBy: "Marie-ann",
        guestName: "Marie-ann Grenshields",
        reason: "Enterprise-wide mobile strategy",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 42,
        details: "Advanced secondary functionalities",
      },
      { code: "C5", roomNumber: 1, details: "Fundamental uniform migration" },
      {
        code: "C5",
        roomNumber: 28,
        details: "Reduced solution-oriented neural-net",
      },
      {
        code: "C5",
        roomNumber: 47,
        details: "Expanded real-time open architecture",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "Stand-alone encompassing help-desk",
      },
    ],
    revenueData: [
      { total: "$10477.59", group: "$773.82", company: "$1332.49" },
    ],
    roomData: [
      {
        total: 20,
        company: 5,
        outOfOrder: 6,
        stayOver: 24,
        arrivals: 51,
        departures: 8,
      },
    ],
  },
  {
    groupData: [{ name: "Homenick-Stark", roomCount: 43, revenue: "$240.84" }],
    compRoomInfo: [
      {
        authorizedBy: "Kevyn",
        guestName: "Kevyn Lever",
        reason: "Future-proofed uniform complexity",
      },
      {
        authorizedBy: "Mala",
        guestName: "Mala Shama",
        reason: "Managed scalable groupware",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "Extended regional open architecture",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "Operative next generation task-force",
      },
      {
        code: "HK",
        roomNumber: 45,
        details: "Business-focused intermediate budgetary management",
      },
      {
        code: "C5",
        roomNumber: 47,
        details: "Synergized zero administration help-desk",
      },
      {
        code: "HK",
        roomNumber: 48,
        details: "Inverse intermediate orchestration",
      },
    ],
    revenueData: [{ total: "$6781.12", group: "$1113.81", company: "$494.07" }],
    roomData: [
      {
        total: 85,
        company: 3,
        outOfOrder: 2,
        stayOver: 38,
        arrivals: 47,
        departures: 86,
      },
    ],
  },
  {
    groupData: [
      {
        name: "Mitchell, Parisian and Stark",
        roomCount: 6,
        revenue: "$293.61",
      },
      {
        name: "O'Connell, Bartoletti and Legros",
        roomCount: 28,
        revenue: "$287.42",
      },
      { name: "Moore-Wunsch", roomCount: 19, revenue: "$102.99" },
      { name: "Reynolds-McLaughlin", roomCount: 3, revenue: "$151.51" },
      { name: "Corwin-Schmitt", roomCount: 8, revenue: "$464.58" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Katha",
        guestName: "Katha Boumphrey",
        reason: "Profit-focused transitional middleware",
      },
      {
        authorizedBy: "Ingrim",
        guestName: "Ingrim Grichukhanov",
        reason: "Integrated neutral parallelism",
      },
      {
        authorizedBy: "Lizzy",
        guestName: "Lizzy Noah",
        reason: "Focused bifurcated application",
      },
      {
        authorizedBy: "Lothaire",
        guestName: "Lothaire Mithon",
        reason: "Open-architected demand-driven moratorium",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [{ total: "$5472.41", group: "$980.11", company: "$1195.02" }],
    roomData: [
      {
        total: 56,
        company: 3,
        outOfOrder: 1,
        stayOver: 43,
        arrivals: 64,
        departures: 58,
      },
    ],
  },
  {
    groupData: [
      { name: "Treutel LLC", roomCount: 39, revenue: "$489.99" },
      { name: "Gibson-Kuvalis", roomCount: 17, revenue: "$100.33" },
      { name: "Littel-Halvorson", roomCount: 29, revenue: "$314.26" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Jon",
        guestName: "Jon Strowther",
        reason: "Versatile secondary architecture",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$13087.87", group: "$657.12", company: "$2934.04" },
    ],
    roomData: [
      {
        total: 46,
        company: 9,
        outOfOrder: 6,
        stayOver: 15,
        arrivals: 61,
        departures: 20,
      },
    ],
  },
  {
    groupData: [
      { name: "Bednar-Sipes", roomCount: 11, revenue: "$486.13" },
      { name: "Ernser and Sons", roomCount: 35, revenue: "$226.83" },
      { name: "Swaniawski LLC", roomCount: 50, revenue: "$251.48" },
      { name: "Bauch and Sons", roomCount: 17, revenue: "$330.22" },
    ],
    compRoomInfo: [
      {
        authorizedBy: "Cameron",
        guestName: "Cameron Neagle",
        reason: "Robust logistical complexity",
      },
      {
        authorizedBy: "Emmey",
        guestName: "Emmey Gilpin",
        reason: "Profound optimal database",
      },
      {
        authorizedBy: "Stacee",
        guestName: "Stacee Birdseye",
        reason: "Intuitive dynamic emulation",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$18599.73", group: "$1940.17", company: "$705.16" },
    ],
    roomData: [
      {
        total: 68,
        company: 10,
        outOfOrder: 9,
        stayOver: 7,
        arrivals: 0,
        departures: 93,
      },
    ],
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        authorizedBy: "Marjory",
        guestName: "Marjory Malcolm",
        reason: "Fundamental bifurcated superstructure",
      },
    ],
    outOfOrderRooms: [],
    revenueData: [
      { total: "$10518.62", group: "$1025.92", company: "$2848.22" },
    ],
    roomData: [
      {
        total: 37,
        company: 1,
        outOfOrder: 8,
        stayOver: 9,
        arrivals: 96,
        departures: 50,
      },
    ],
  },
];

const data = addCreatedDate(sampleData);

module.exports = data;
