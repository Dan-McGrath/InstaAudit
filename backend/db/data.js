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
      { name: "Cummings-O'Reilly", roomCount: 79, revenue: 916.76 },
      { name: "Zemlak Group", roomCount: 84, revenue: 622.09 },
      { name: "Marquardt Inc", roomCount: 77, revenue: 886.88 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 17723.48, group: 1745.04, contract: 1331.0 },
    roomData: {
      total: 53,
      contract: 16,
      outOfOrder: 8,
      stayOver: 22,
      arrivals: 81,
      departures: 6,
    },
  },
  {
    groupData: [{ name: "Johnson-Skiles", roomCount: 83, revenue: 267.01 }],
    compRoomInfo: [
      {
        autorizedBy: "Delmor Edinboro",
        guestName: "Homere Jarley",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Stephenie Shingler",
        guestName: "Giuseppe Gudgen",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17615.36, group: 609.16, contract: 479.89 },
    roomData: {
      total: 74,
      contract: 13,
      outOfOrder: 8,
      stayOver: 29,
      arrivals: 25,
      departures: 74,
    },
  },
  {
    groupData: [
      { name: "Mann-Grimes", roomCount: 89, revenue: 503.11 },
      { name: "Dare-Goyette", roomCount: 92, revenue: 560.97 },
      { name: "Beatty-Romaguera", roomCount: 5, revenue: 186.72 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11273.5, group: 1240.23, contract: 248.12 },
    roomData: {
      total: 51,
      contract: 4,
      outOfOrder: 4,
      stayOver: 60,
      arrivals: 6,
      departures: 26,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Thor Gotliffe",
        guestName: "Halie Bonellie",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Alleen Kordt",
        guestName: "Daisey Blackeby",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7033.88, group: 1337.04, contract: 979.58 },
    roomData: {
      total: 54,
      contract: 5,
      outOfOrder: 2,
      stayOver: 77,
      arrivals: 38,
      departures: 11,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Dimitri Tommaseo",
        guestName: "Carena Millhouse",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Dana Stabbins",
        guestName: "Evvie De Maine",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8573.31, group: 1146.28, contract: 1580.37 },
    roomData: {
      total: 60,
      contract: 7,
      outOfOrder: 1,
      stayOver: 13,
      arrivals: 95,
      departures: 16,
    },
  },
  {
    groupData: [
      { name: "Konopelski-Kautzer", roomCount: 96, revenue: 864.21 },
      { name: "Green, Douglas and Muller", roomCount: 89, revenue: 911.03 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15879.47, group: 1152.04, contract: 563.91 },
    roomData: {
      total: 99,
      contract: 19,
      outOfOrder: 3,
      stayOver: 22,
      arrivals: 7,
      departures: 33,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Patrizius Gerdts",
        guestName: "Ardys Kaser",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Clive Totaro",
        guestName: "Shara Van Salzberger",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18878.79, group: 362.21, contract: 1949.3 },
    roomData: {
      total: 46,
      contract: 4,
      outOfOrder: 1,
      stayOver: 46,
      arrivals: 46,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Stehr Inc", roomCount: 86, revenue: 741.2 },
      { name: "Rippin-Morar", roomCount: 49, revenue: 753.52 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12764.34, group: 1142.09, contract: 156.86 },
    roomData: {
      total: 40,
      contract: 17,
      outOfOrder: 8,
      stayOver: 59,
      arrivals: 53,
      departures: 32,
    },
  },
  {
    groupData: [
      { name: "Johns-Tromp", roomCount: 28, revenue: 522.48 },
      { name: "Christiansen Inc", roomCount: 12, revenue: 210.82 },
      { name: "Price, Hettinger and Schroeder", roomCount: 6, revenue: 875.36 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 14824.26, group: 531.52, contract: 1472.83 },
    roomData: {
      total: 93,
      contract: 17,
      outOfOrder: 4,
      stayOver: 27,
      arrivals: 99,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Heathcote, King and Morissette", roomCount: 6, revenue: 815.02 },
      { name: "Breitenberg LLC", roomCount: 25, revenue: 678.5 },
      { name: "Daugherty, Stokes and Keebler", roomCount: 25, revenue: 686.64 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Reeba Torresi",
        guestName: "Jessamyn Sandlin",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13132.72, group: 771.24, contract: 987.57 },
    roomData: {
      total: 83,
      contract: 13,
      outOfOrder: 2,
      stayOver: 49,
      arrivals: 39,
      departures: 16,
    },
  },
  {
    groupData: [
      { name: "Kunde-Wilderman", roomCount: 9, revenue: 732.17 },
      {
        name: "Pfannerstill, Thompson and Reichel",
        roomCount: 50,
        revenue: 147.64,
      },
      { name: "MacGyver, Kshlerin and Feeney", roomCount: 69, revenue: 525.94 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Rochester Joskowicz",
        guestName: "Konstance Bowlands",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
      {
        autorizedBy: "Bunnie Fluin",
        guestName: "Meta Aggus",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11656.84, group: 1496.43, contract: 1746.27 },
    roomData: {
      total: 22,
      contract: 19,
      outOfOrder: 9,
      stayOver: 45,
      arrivals: 22,
      departures: 41,
    },
  },
  {
    groupData: [{ name: "Dare LLC", roomCount: 36, revenue: 444.92 }],
    compRoomInfo: [
      {
        autorizedBy: "Larine Shapira",
        guestName: "Torie Barens",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Justino Bernlin",
        guestName: "Ira Shapter",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10151.6, group: 1138.19, contract: 1541.78 },
    roomData: {
      total: 20,
      contract: 20,
      outOfOrder: 7,
      stayOver: 45,
      arrivals: 47,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Pollich LLC", roomCount: 76, revenue: 712.94 },
      { name: "Brakus, King and Marvin", roomCount: 19, revenue: 454.94 },
      { name: "Hudson-Stracke", roomCount: 102, revenue: 772.56 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Elmer Jaycock",
        guestName: "Clarance Ettles",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17753.38, group: 489.6, contract: 412.46 },
    roomData: {
      total: 33,
      contract: 13,
      outOfOrder: 6,
      stayOver: 39,
      arrivals: 29,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "Jacobson-Sporer", roomCount: 44, revenue: 495.19 },
      { name: "Schulist, Hilpert and Barton", roomCount: 6, revenue: 519.53 },
      { name: "Kshlerin-Jaskolski", roomCount: 22, revenue: 680.23 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Carley Beaulieu",
        guestName: "Emlynne Sute",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9547.89, group: 1585.62, contract: 1422.27 },
    roomData: {
      total: 62,
      contract: 3,
      outOfOrder: 1,
      stayOver: 21,
      arrivals: 95,
      departures: 55,
    },
  },
  {
    groupData: [{ name: "Jakubowski-Kub", roomCount: 66, revenue: 536.83 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15123.43, group: 1337.26, contract: 992.55 },
    roomData: {
      total: 34,
      contract: 4,
      outOfOrder: 9,
      stayOver: 54,
      arrivals: 1,
      departures: 35,
    },
  },
  {
    groupData: [
      { name: "Jaskolski, Bergnaum and Zieme", roomCount: 24, revenue: 943.02 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Silvio Phython",
        guestName: "Kayne Seivwright",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9159.85, group: 958.26, contract: 1783.88 },
    roomData: {
      total: 64,
      contract: 11,
      outOfOrder: 6,
      stayOver: 5,
      arrivals: 85,
      departures: 51,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19486.25, group: 1485.27, contract: 1322.53 },
    roomData: {
      total: 70,
      contract: 7,
      outOfOrder: 3,
      stayOver: 14,
      arrivals: 89,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Stark, Hettinger and Anderson", roomCount: 78, revenue: 327.04 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kerrin Stancliffe",
        guestName: "Collette Heineking",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13067.1, group: 1574.77, contract: 305.89 },
    roomData: {
      total: 67,
      contract: 9,
      outOfOrder: 1,
      stayOver: 57,
      arrivals: 94,
      departures: 59,
    },
  },
  {
    groupData: [
      { name: "Schuppe-Kessler", roomCount: 51, revenue: 722.24 },
      {
        name: "O'Connell, Gulgowski and Wolff",
        roomCount: 10,
        revenue: 762.03,
      },
      { name: "Yost LLC", roomCount: 72, revenue: 876.43 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ceciley Brave",
        guestName: "Denyse Tooher",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19434.72, group: 1488.39, contract: 895.86 },
    roomData: {
      total: 91,
      contract: 10,
      outOfOrder: 8,
      stayOver: 75,
      arrivals: 26,
      departures: 46,
    },
  },
  {
    groupData: [
      { name: "Brakus-Olson", roomCount: 94, revenue: 905.04 },
      { name: "Hamill-Purdy", roomCount: 67, revenue: 131.27 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19575.6, group: 1778.37, contract: 707.54 },
    roomData: {
      total: 23,
      contract: 2,
      outOfOrder: 5,
      stayOver: 10,
      arrivals: 27,
      departures: 37,
    },
  },
  {
    groupData: [{ name: "Lebsack Group", roomCount: 66, revenue: 254.34 }],
    compRoomInfo: [
      {
        autorizedBy: "Lynnett Choffin",
        guestName: "Faunie Stollmeier",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        autorizedBy: "Zeke McCooke",
        guestName: "Erhart Billington",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10748.08, group: 445.03, contract: 845.66 },
    roomData: {
      total: 31,
      contract: 6,
      outOfOrder: 6,
      stayOver: 9,
      arrivals: 53,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Bailey-Pfannerstill", roomCount: 71, revenue: 671.58 },
      { name: "Leffler-Hermann", roomCount: 73, revenue: 881.89 },
      { name: "Runte Inc", roomCount: 10, revenue: 467.99 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Robinett Kleinsinger",
        guestName: "Arda Sanzio",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12360.21, group: 631.55, contract: 1104.56 },
    roomData: {
      total: 44,
      contract: 7,
      outOfOrder: 6,
      stayOver: 38,
      arrivals: 7,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Willms Inc", roomCount: 36, revenue: 817.98 },
      { name: "Hilpert LLC", roomCount: 95, revenue: 606.54 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gearalt Dureden",
        guestName: "Annadiane Medeway",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        autorizedBy: "Francisca Farr",
        guestName: "Gennie De Roberto",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15539.88, group: 1383.7, contract: 588.17 },
    roomData: {
      total: 20,
      contract: 2,
      outOfOrder: 5,
      stayOver: 59,
      arrivals: 16,
      departures: 14,
    },
  },
  {
    groupData: [{ name: "VonRueden-Lockman", roomCount: 10, revenue: 832.11 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 13376.83, group: 972.61, contract: 714.87 },
    roomData: {
      total: 49,
      contract: 5,
      outOfOrder: 7,
      stayOver: 74,
      arrivals: 4,
      departures: 12,
    },
  },
  {
    groupData: [
      { name: "Ebert, Kiehn and Friesen", roomCount: 15, revenue: 343.0 },
      { name: "Schaefer Inc", roomCount: 24, revenue: 160.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Patric Slowley",
        guestName: "Kahlil Serotsky",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Kathryne Keely",
        guestName: "Bendix Bryett",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 17242.03, group: 901.69, contract: 258.13 },
    roomData: {
      total: 52,
      contract: 11,
      outOfOrder: 9,
      stayOver: 23,
      arrivals: 65,
      departures: 72,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ailsun Lynett",
        guestName: "Joy Ferronel",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Elna Clemenzi",
        guestName: "Fiorenze Sygrove",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5582.31, group: 1873.64, contract: 727.78 },
    roomData: {
      total: 46,
      contract: 11,
      outOfOrder: 1,
      stayOver: 34,
      arrivals: 55,
      departures: 13,
    },
  },
  {
    groupData: [
      { name: "Wehner Inc", roomCount: 78, revenue: 921.12 },
      { name: "Upton LLC", roomCount: 84, revenue: 406.07 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15661.65, group: 1659.74, contract: 995.79 },
    roomData: {
      total: 40,
      contract: 13,
      outOfOrder: 8,
      stayOver: 11,
      arrivals: 38,
      departures: 74,
    },
  },
  {
    groupData: [{ name: "Fisher Group", roomCount: 13, revenue: 485.25 }],
    compRoomInfo: [
      {
        autorizedBy: "Lisbeth Waring",
        guestName: "Sarene Bartkowiak",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        autorizedBy: "Lorry Keating",
        guestName: "Wake Krzyzanowski",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9996.01, group: 1908.08, contract: 458.16 },
    roomData: {
      total: 41,
      contract: 6,
      outOfOrder: 1,
      stayOver: 14,
      arrivals: 7,
      departures: 10,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7881.55, group: 1901.13, contract: 475.71 },
    roomData: {
      total: 52,
      contract: 14,
      outOfOrder: 6,
      stayOver: 7,
      arrivals: 32,
      departures: 15,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Kathryn Eustis",
        guestName: "Ase Rother",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18657.54, group: 1328.93, contract: 1990.56 },
    roomData: {
      total: 56,
      contract: 13,
      outOfOrder: 6,
      stayOver: 12,
      arrivals: 93,
      departures: 57,
    },
  },
  {
    groupData: [
      { name: "Walsh, Jacobs and Dickens", roomCount: 45, revenue: 379.72 },
      { name: "MacGyver-Hand", roomCount: 18, revenue: 556.96 },
      { name: "Hessel-Bernier", roomCount: 36, revenue: 817.53 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Tova Vegas",
        guestName: "Zenia Millgate",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7368.28, group: 218.54, contract: 1595.53 },
    roomData: {
      total: 82,
      contract: 9,
      outOfOrder: 4,
      stayOver: 56,
      arrivals: 14,
      departures: 7,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Frankie Littley",
        guestName: "Maia Stannis",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11550.53, group: 1007.79, contract: 1091.78 },
    roomData: {
      total: 33,
      contract: 1,
      outOfOrder: 7,
      stayOver: 61,
      arrivals: 65,
      departures: 8,
    },
  },
  {
    groupData: [
      { name: "McCullough, Reilly and Brakus", roomCount: 10, revenue: 554.55 },
      { name: "Schinner-Treutel", roomCount: 29, revenue: 153.13 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cleon Renison",
        guestName: "Jasun Hestrop",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9217.2, group: 1986.89, contract: 577.39 },
    roomData: {
      total: 51,
      contract: 2,
      outOfOrder: 3,
      stayOver: 49,
      arrivals: 32,
      departures: 25,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Sarette Parke",
        guestName: "Mab Mioni",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9110.8, group: 544.88, contract: 179.69 },
    roomData: {
      total: 58,
      contract: 1,
      outOfOrder: 0,
      stayOver: 74,
      arrivals: 12,
      departures: 57,
    },
  },
  {
    groupData: [
      { name: "McKenzie-Feeney", roomCount: 93, revenue: 383.94 },
      { name: "Hilll, Sipes and Fritsch", roomCount: 92, revenue: 182.53 },
      {
        name: "Legros, Baumbach and MacGyver",
        roomCount: 102,
        revenue: 617.21,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "June Byrom",
        guestName: "Aleda Echallie",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Bryn Allworthy",
        guestName: "Pierre Kidd",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5732.95, group: 735.5, contract: 1829.95 },
    roomData: {
      total: 76,
      contract: 3,
      outOfOrder: 3,
      stayOver: 1,
      arrivals: 2,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Windler-Watsica", roomCount: 9, revenue: 176.27 },
      { name: "Jenkins, Hagenes and Hauck", roomCount: 45, revenue: 651.91 },
      { name: "O'Kon, Morar and Emard", roomCount: 81, revenue: 606.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Morgan Begin",
        guestName: "Kelli Iacovo",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15792.41, group: 740.01, contract: 495.11 },
    roomData: {
      total: 23,
      contract: 4,
      outOfOrder: 5,
      stayOver: 57,
      arrivals: 70,
      departures: 14,
    },
  },
  {
    groupData: [
      { name: "Brekke Inc", roomCount: 102, revenue: 772.02 },
      { name: "Smitham Inc", roomCount: 47, revenue: 448.44 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Keen Lutman",
        guestName: "Tabbie Igo",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
      {
        autorizedBy: "Daisy Zelland",
        guestName: "Brittney Scandroot",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9697.4, group: 352.79, contract: 908.19 },
    roomData: {
      total: 76,
      contract: 1,
      outOfOrder: 9,
      stayOver: 22,
      arrivals: 40,
      departures: 8,
    },
  },
  {
    groupData: [
      { name: "Schroeder-O'Kon", roomCount: 37, revenue: 808.73 },
      { name: "Schumm-Gutmann", roomCount: 39, revenue: 569.72 },
      { name: "Kuhn-Heathcote", roomCount: 27, revenue: 946.63 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kati Boulstridge",
        guestName: "Kandy Dutteridge",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
      {
        autorizedBy: "Gweneth Helks",
        guestName: "Inga Markwick",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16737.41, group: 925.93, contract: 477.57 },
    roomData: {
      total: 76,
      contract: 18,
      outOfOrder: 5,
      stayOver: 36,
      arrivals: 29,
      departures: 3,
    },
  },
  {
    groupData: [
      { name: "Nikolaus, Bradtke and Ryan", roomCount: 52, revenue: 118.12 },
      { name: "Bartoletti-Durgan", roomCount: 80, revenue: 852.33 },
      { name: "Cassin-Vandervort", roomCount: 13, revenue: 756.89 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Udall Hebditch",
        guestName: "Ryann Gilbanks",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13542.01, group: 1550.33, contract: 1658.31 },
    roomData: {
      total: 38,
      contract: 15,
      outOfOrder: 0,
      stayOver: 78,
      arrivals: 72,
      departures: 18,
    },
  },
  {
    groupData: [{ name: "Baumbach LLC", roomCount: 66, revenue: 682.52 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 18577.86, group: 745.74, contract: 597.01 },
    roomData: {
      total: 94,
      contract: 1,
      outOfOrder: 5,
      stayOver: 38,
      arrivals: 80,
      departures: 12,
    },
  },
  {
    groupData: [
      { name: "Kihn and Sons", roomCount: 80, revenue: 895.18 },
      { name: "Beatty, Towne and Hudson", roomCount: 6, revenue: 904.88 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18155.19, group: 144.84, contract: 592.21 },
    roomData: {
      total: 93,
      contract: 5,
      outOfOrder: 5,
      stayOver: 65,
      arrivals: 86,
      departures: 28,
    },
  },
  {
    groupData: [
      { name: "Hauck LLC", roomCount: 17, revenue: 701.49 },
      { name: "Herman-Kris", roomCount: 10, revenue: 219.62 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Thaddus Enrique",
        guestName: "Isahella Turbefield",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5882.76, group: 649.74, contract: 974.96 },
    roomData: {
      total: 46,
      contract: 18,
      outOfOrder: 5,
      stayOver: 78,
      arrivals: 95,
      departures: 3,
    },
  },
  {
    groupData: [
      { name: "Bashirian, Kub and Schmitt", roomCount: 97, revenue: 979.24 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Melonie Ickov",
        guestName: "Luise Goody",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9776.82, group: 1500.11, contract: 1747.89 },
    roomData: {
      total: 93,
      contract: 18,
      outOfOrder: 3,
      stayOver: 30,
      arrivals: 98,
      departures: 23,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8210.87, group: 865.76, contract: 614.19 },
    roomData: {
      total: 81,
      contract: 7,
      outOfOrder: 5,
      stayOver: 77,
      arrivals: 59,
      departures: 61,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Renee Devenny",
        guestName: "Pip Stammers",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 5769.0, group: 427.97, contract: 782.16 },
    roomData: {
      total: 70,
      contract: 20,
      outOfOrder: 4,
      stayOver: 35,
      arrivals: 54,
      departures: 27,
    },
  },
  {
    groupData: [
      { name: "Hodkiewicz-Krajcik", roomCount: 100, revenue: 126.11 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17892.91, group: 692.35, contract: 1097.76 },
    roomData: {
      total: 71,
      contract: 18,
      outOfOrder: 9,
      stayOver: 54,
      arrivals: 6,
      departures: 22,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Adams Mackro",
        guestName: "Natassia Robertsson",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8747.1, group: 1821.06, contract: 1524.9 },
    roomData: {
      total: 27,
      contract: 19,
      outOfOrder: 9,
      stayOver: 5,
      arrivals: 47,
      departures: 65,
    },
  },
  {
    groupData: [{ name: "Von-Mraz", roomCount: 95, revenue: 491.23 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19560.75, group: 329.91, contract: 1688.96 },
    roomData: {
      total: 26,
      contract: 15,
      outOfOrder: 9,
      stayOver: 50,
      arrivals: 60,
      departures: 24,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11660.06, group: 707.77, contract: 107.59 },
    roomData: {
      total: 98,
      contract: 7,
      outOfOrder: 5,
      stayOver: 26,
      arrivals: 32,
      departures: 52,
    },
  },
  {
    groupData: [
      { name: "Murazik, Roberts and Wolf", roomCount: 90, revenue: 934.27 },
      { name: "Batz Inc", roomCount: 84, revenue: 950.04 },
      { name: "Ritchie LLC", roomCount: 4, revenue: 596.85 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14199.02, group: 776.15, contract: 1503.17 },
    roomData: {
      total: 38,
      contract: 13,
      outOfOrder: 2,
      stayOver: 2,
      arrivals: 74,
      departures: 2,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 18600.56, group: 400.54, contract: 1377.54 },
    roomData: {
      total: 41,
      contract: 20,
      outOfOrder: 7,
      stayOver: 25,
      arrivals: 94,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Ziemann Group", roomCount: 39, revenue: 639.83 },
      { name: "Champlin and Sons", roomCount: 45, revenue: 556.69 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kathlin Bunn",
        guestName: "Garland Hansell",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        autorizedBy: "Flss Kamiyama",
        guestName: "Kale Lovelace",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17869.36, group: 1820.23, contract: 1262.77 },
    roomData: {
      total: 25,
      contract: 2,
      outOfOrder: 6,
      stayOver: 30,
      arrivals: 20,
      departures: 37,
    },
  },
  {
    groupData: [
      { name: "Green-Hills", roomCount: 2, revenue: 124.51 },
      { name: "Ankunding-Strosin", roomCount: 45, revenue: 331.55 },
      { name: "Hoeger, Gorczany and Keeling", roomCount: 29, revenue: 691.18 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10503.61, group: 1059.96, contract: 1894.01 },
    roomData: {
      total: 43,
      contract: 8,
      outOfOrder: 3,
      stayOver: 77,
      arrivals: 96,
      departures: 77,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "May Kingdom",
        guestName: "Boyce Kemmett",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Amabel Farfolomeev",
        guestName: "Nicole Harrington",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16151.12, group: 336.87, contract: 163.17 },
    roomData: {
      total: 24,
      contract: 6,
      outOfOrder: 9,
      stayOver: 59,
      arrivals: 29,
      departures: 79,
    },
  },
  {
    groupData: [
      { name: "Haley-Bernhard", roomCount: 35, revenue: 895.67 },
      {
        name: "Lueilwitz, Hartmann and Simonis",
        roomCount: 40,
        revenue: 700.74,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ludovika Einchcombe",
        guestName: "Natalee Sessions",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6321.16, group: 241.43, contract: 749.73 },
    roomData: {
      total: 85,
      contract: 4,
      outOfOrder: 8,
      stayOver: 6,
      arrivals: 26,
      departures: 76,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Minni Surcomb",
        guestName: "Marjorie Shortan",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5779.23, group: 1098.69, contract: 1393.8 },
    roomData: {
      total: 67,
      contract: 17,
      outOfOrder: 4,
      stayOver: 64,
      arrivals: 0,
      departures: 7,
    },
  },
  {
    groupData: [
      { name: "Borer, Ullrich and McDermott", roomCount: 100, revenue: 364.72 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Corty Hartwright",
        guestName: "Elfrieda Kield",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15861.97, group: 1185.1, contract: 1806.24 },
    roomData: {
      total: 81,
      contract: 19,
      outOfOrder: 6,
      stayOver: 76,
      arrivals: 75,
      departures: 26,
    },
  },
  {
    groupData: [
      {
        name: "Breitenberg, Treutel and Kiehn",
        roomCount: 23,
        revenue: 897.68,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Junie Lind",
        guestName: "Judon Duetsche",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
      {
        autorizedBy: "Ginelle Van Giffen",
        guestName: "Lynelle Podbury",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19586.47, group: 1390.54, contract: 1168.79 },
    roomData: {
      total: 49,
      contract: 4,
      outOfOrder: 5,
      stayOver: 70,
      arrivals: 45,
      departures: 64,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jocelyne Barthrop",
        guestName: "Maridel Malshinger",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Birgitta Rosengren",
        guestName: "Sandy Murtell",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7857.74, group: 752.86, contract: 647.32 },
    roomData: {
      total: 101,
      contract: 2,
      outOfOrder: 9,
      stayOver: 25,
      arrivals: 88,
      departures: 63,
    },
  },
  {
    groupData: [
      { name: "Swift, Abernathy and Prosacco", roomCount: 62, revenue: 839.49 },
      { name: "Sauer and Sons", roomCount: 72, revenue: 921.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bethany Fewlass",
        guestName: "Cass Oakes",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6998.57, group: 1885.04, contract: 1424.15 },
    roomData: {
      total: 57,
      contract: 14,
      outOfOrder: 1,
      stayOver: 52,
      arrivals: 47,
      departures: 43,
    },
  },
  {
    groupData: [{ name: "Hauck LLC", roomCount: 33, revenue: 112.29 }],
    compRoomInfo: [
      {
        autorizedBy: "Sianna Pesticcio",
        guestName: "Farrell Darnborough",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12655.23, group: 367.28, contract: 701.38 },
    roomData: {
      total: 97,
      contract: 4,
      outOfOrder: 6,
      stayOver: 4,
      arrivals: 19,
      departures: 7,
    },
  },
  {
    groupData: [
      { name: "Nikolaus-Stracke", roomCount: 64, revenue: 113.16 },
      { name: "Olson and Sons", roomCount: 19, revenue: 980.58 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16614.99, group: 1332.09, contract: 1562.99 },
    roomData: {
      total: 76,
      contract: 5,
      outOfOrder: 6,
      stayOver: 57,
      arrivals: 35,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Rutherford, Parisian and Wolf", roomCount: 81, revenue: 125.61 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bathsheba Worrill",
        guestName: "Tomasine Kinze",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
      {
        autorizedBy: "Anneliese Applin",
        guestName: "Lammond Maier",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5057.0, group: 242.61, contract: 1894.29 },
    roomData: {
      total: 78,
      contract: 11,
      outOfOrder: 1,
      stayOver: 36,
      arrivals: 23,
      departures: 3,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Lovell Gabriely",
        guestName: "Maddalena Bodley",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8390.52, group: 679.35, contract: 1248.74 },
    roomData: {
      total: 62,
      contract: 19,
      outOfOrder: 8,
      stayOver: 75,
      arrivals: 28,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "DuBuque, Shields and Mertz", roomCount: 101, revenue: 429.94 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15089.9, group: 556.62, contract: 1844.63 },
    roomData: {
      total: 63,
      contract: 2,
      outOfOrder: 8,
      stayOver: 38,
      arrivals: 18,
      departures: 60,
    },
  },
  {
    groupData: [
      { name: "Littel-Buckridge", roomCount: 73, revenue: 692.23 },
      { name: "Gleichner Group", roomCount: 20, revenue: 798.9 },
      { name: "Wuckert, Moore and Hermiston", roomCount: 83, revenue: 355.91 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Buiron Camellini",
        guestName: "Alysa Fogel",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15597.3, group: 1946.31, contract: 1286.18 },
    roomData: {
      total: 68,
      contract: 13,
      outOfOrder: 6,
      stayOver: 73,
      arrivals: 91,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "Gutkowski-Schamberger", roomCount: 57, revenue: 711.41 },
      { name: "Corwin LLC", roomCount: 40, revenue: 589.27 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Brockie Streeter",
        guestName: "Melisande Hrynczyk",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Jill Beadell",
        guestName: "Renie Alcoran",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11736.32, group: 1489.38, contract: 728.66 },
    roomData: {
      total: 53,
      contract: 10,
      outOfOrder: 7,
      stayOver: 24,
      arrivals: 19,
      departures: 56,
    },
  },
  {
    groupData: [
      { name: "Kreiger LLC", roomCount: 92, revenue: 947.98 },
      { name: "Heathcote-Leuschke", roomCount: 61, revenue: 892.06 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Felike Hutcheon",
        guestName: "Gray Ebsworth",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 6106.53, group: 906.19, contract: 614.83 },
    roomData: {
      total: 81,
      contract: 20,
      outOfOrder: 1,
      stayOver: 56,
      arrivals: 57,
      departures: 15,
    },
  },
  {
    groupData: [
      { name: "Haley, Grimes and O'Reilly", roomCount: 11, revenue: 664.7 },
      { name: "Schamberger-Hessel", roomCount: 13, revenue: 159.86 },
      { name: "Larson Inc", roomCount: 23, revenue: 728.98 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 5201.82, group: 916.92, contract: 1181.98 },
    roomData: {
      total: 55,
      contract: 5,
      outOfOrder: 1,
      stayOver: 28,
      arrivals: 38,
      departures: 12,
    },
  },
  {
    groupData: [
      { name: "Schaden, Volkman and Daniel", roomCount: 62, revenue: 276.03 },
      { name: "Hagenes and Sons", roomCount: 53, revenue: 959.01 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kathi Wheeldon",
        guestName: "Elizabet Matessian",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
      {
        autorizedBy: "Wallie Heinsh",
        guestName: "Seth De Caroli",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13763.13, group: 280.77, contract: 402.76 },
    roomData: {
      total: 65,
      contract: 13,
      outOfOrder: 0,
      stayOver: 69,
      arrivals: 0,
      departures: 21,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11082.83, group: 1686.86, contract: 1414.95 },
    roomData: {
      total: 99,
      contract: 17,
      outOfOrder: 7,
      stayOver: 80,
      arrivals: 81,
      departures: 17,
    },
  },
  {
    groupData: [
      { name: "Collins, Schoen and Davis", roomCount: 48, revenue: 624.12 },
      { name: "Welch, Reinger and Labadie", roomCount: 81, revenue: 687.02 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kelley Marti",
        guestName: "Renie Montes",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 18463.08, group: 695.95, contract: 503.05 },
    roomData: {
      total: 39,
      contract: 18,
      outOfOrder: 8,
      stayOver: 43,
      arrivals: 21,
      departures: 74,
    },
  },
  {
    groupData: [
      { name: "Moen Group", roomCount: 33, revenue: 218.73 },
      { name: "Feeney, Kuhic and Ernser", roomCount: 59, revenue: 578.79 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13869.85, group: 1780.65, contract: 1569.3 },
    roomData: {
      total: 37,
      contract: 19,
      outOfOrder: 6,
      stayOver: 33,
      arrivals: 51,
      departures: 12,
    },
  },
  {
    groupData: [
      {
        name: "Koch, Denesik and Runolfsdottir",
        roomCount: 43,
        revenue: 222.27,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Debora Bartkowiak",
        guestName: "Egbert Markl",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19918.0, group: 1580.72, contract: 1478.84 },
    roomData: {
      total: 51,
      contract: 16,
      outOfOrder: 3,
      stayOver: 21,
      arrivals: 58,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Okuneva-Gottlieb", roomCount: 4, revenue: 838.74 },
      { name: "Hudson and Sons", roomCount: 70, revenue: 337.86 },
      { name: "Bergnaum-Heidenreich", roomCount: 27, revenue: 965.21 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6775.98, group: 192.5, contract: 1772.37 },
    roomData: {
      total: 54,
      contract: 20,
      outOfOrder: 8,
      stayOver: 74,
      arrivals: 92,
      departures: 15,
    },
  },
  {
    groupData: [
      { name: "Conroy, Homenick and Turner", roomCount: 34, revenue: 782.79 },
      { name: "Emard, McCullough and Howell", roomCount: 84, revenue: 321.55 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Danny Scotting",
        guestName: "Charin Pankhurst.",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
      {
        autorizedBy: "Clara Possa",
        guestName: "Arda Symmons",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11970.4, group: 467.29, contract: 1028.23 },
    roomData: {
      total: 26,
      contract: 6,
      outOfOrder: 9,
      stayOver: 48,
      arrivals: 2,
      departures: 32,
    },
  },
  {
    groupData: [
      { name: "Jacobs-Hilll", roomCount: 97, revenue: 781.02 },
      { name: "Skiles Inc", roomCount: 65, revenue: 841.99 },
      { name: "Schinner Group", roomCount: 86, revenue: 267.16 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Regine Hazlehurst",
        guestName: "Lindsey Minihane",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15455.35, group: 1894.13, contract: 1874.93 },
    roomData: {
      total: 87,
      contract: 7,
      outOfOrder: 8,
      stayOver: 21,
      arrivals: 32,
      departures: 59,
    },
  },
  {
    groupData: [
      { name: "Flatley, Kuhic and Reilly", roomCount: 75, revenue: 480.42 },
      { name: "Strosin-Mertz", roomCount: 43, revenue: 591.33 },
      { name: "Cruickshank LLC", roomCount: 60, revenue: 955.5 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Hoebart Quenby",
        guestName: "Rosalie Sayles",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
      {
        autorizedBy: "Frederigo Partlett",
        guestName: "Lalo Lemar",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10984.93, group: 306.21, contract: 274.95 },
    roomData: {
      total: 74,
      contract: 15,
      outOfOrder: 5,
      stayOver: 33,
      arrivals: 81,
      departures: 51,
    },
  },
  {
    groupData: [
      { name: "Moore-Olson", roomCount: 19, revenue: 640.93 },
      { name: "Turcotte-Kunde", roomCount: 11, revenue: 823.98 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Harris Capenor",
        guestName: "Nil Farnie",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
      {
        autorizedBy: "Wolfie Normand",
        guestName: "Valina Cavee",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18865.85, group: 1993.46, contract: 568.5 },
    roomData: {
      total: 48,
      contract: 20,
      outOfOrder: 4,
      stayOver: 17,
      arrivals: 93,
      departures: 29,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Marjy Queyos",
        guestName: "Bobine Larn",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18098.86, group: 948.08, contract: 1738.38 },
    roomData: {
      total: 57,
      contract: 15,
      outOfOrder: 3,
      stayOver: 27,
      arrivals: 84,
      departures: 76,
    },
  },
  {
    groupData: [
      { name: "Rau-Turcotte", roomCount: 72, revenue: 467.46 },
      { name: "Zboncak, Durgan and Shanahan", roomCount: 77, revenue: 491.69 },
      { name: "Halvorson LLC", roomCount: 101, revenue: 338.8 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5137.56, group: 173.7, contract: 1657.82 },
    roomData: {
      total: 98,
      contract: 9,
      outOfOrder: 8,
      stayOver: 66,
      arrivals: 64,
      departures: 79,
    },
  },
  {
    groupData: [
      { name: "Hyatt-Braun", roomCount: 3, revenue: 169.08 },
      { name: "Ebert-Batz", roomCount: 83, revenue: 449.52 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Amery Kay",
        guestName: "Yanaton Balogh",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16524.85, group: 1110.54, contract: 1816.26 },
    roomData: {
      total: 68,
      contract: 10,
      outOfOrder: 2,
      stayOver: 23,
      arrivals: 65,
      departures: 46,
    },
  },
  {
    groupData: [
      { name: "Stokes, Purdy and Ritchie", roomCount: 77, revenue: 181.15 },
      { name: "Bogisich Group", roomCount: 17, revenue: 925.4 },
      { name: "Keeling Group", roomCount: 35, revenue: 697.91 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Amargo Gert",
        guestName: "Guenevere Sercombe",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
      {
        autorizedBy: "Ivy Stellman",
        guestName: "Zachary Pettiford",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7492.89, group: 942.3, contract: 1219.12 },
    roomData: {
      total: 64,
      contract: 4,
      outOfOrder: 7,
      stayOver: 0,
      arrivals: 42,
      departures: 27,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Cindee Bandiera",
        guestName: "Vincenty Jirak",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14916.16, group: 1010.41, contract: 489.02 },
    roomData: {
      total: 20,
      contract: 7,
      outOfOrder: 2,
      stayOver: 46,
      arrivals: 21,
      departures: 75,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Katina Guiver",
        guestName: "Carol-jean Studdert",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Jayne Lambourn",
        guestName: "Gilberta Amori",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18605.75, group: 1163.02, contract: 1520.47 },
    roomData: {
      total: 45,
      contract: 20,
      outOfOrder: 4,
      stayOver: 80,
      arrivals: 30,
      departures: 44,
    },
  },
  {
    groupData: [
      { name: "Rice-Cremin", roomCount: 70, revenue: 311.28 },
      { name: "Bogisich-Dicki", roomCount: 81, revenue: 564.31 },
      { name: "Cummerata Group", roomCount: 17, revenue: 815.06 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Berti Minnock",
        guestName: "Felicle Brissard",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
      {
        autorizedBy: "Clemmie McComb",
        guestName: "Raye Wheeldon",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7610.85, group: 245.84, contract: 1665.73 },
    roomData: {
      total: 98,
      contract: 12,
      outOfOrder: 2,
      stayOver: 6,
      arrivals: 11,
      departures: 24,
    },
  },
  {
    groupData: [{ name: "Marquardt-Ryan", roomCount: 22, revenue: 740.0 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16999.03, group: 755.68, contract: 1206.23 },
    roomData: {
      total: 57,
      contract: 8,
      outOfOrder: 6,
      stayOver: 16,
      arrivals: 75,
      departures: 23,
    },
  },
  {
    groupData: [{ name: "Greenholt Group", roomCount: 99, revenue: 512.65 }],
    compRoomInfo: [
      {
        autorizedBy: "Doralynn Aldwick",
        guestName: "Ashlan Nutbrown",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15992.59, group: 983.98, contract: 700.07 },
    roomData: {
      total: 89,
      contract: 6,
      outOfOrder: 9,
      stayOver: 66,
      arrivals: 94,
      departures: 0,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Lon Bradman",
        guestName: "Raleigh Strickland",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Hew Pardew",
        guestName: "Wiley Caldroni",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9392.43, group: 624.76, contract: 216.31 },
    roomData: {
      total: 27,
      contract: 16,
      outOfOrder: 2,
      stayOver: 7,
      arrivals: 10,
      departures: 50,
    },
  },
  {
    groupData: [
      { name: "Torphy Group", roomCount: 15, revenue: 262.29 },
      { name: "Bradtke Inc", roomCount: 27, revenue: 600.88 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Trefor Alway",
        guestName: "Drucy Cathenod",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
      {
        autorizedBy: "Phyllida Nealy",
        guestName: "Trixi Kach",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19491.57, group: 371.04, contract: 1173.76 },
    roomData: {
      total: 81,
      contract: 1,
      outOfOrder: 2,
      stayOver: 44,
      arrivals: 27,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "Collier and Sons", roomCount: 82, revenue: 559.54 },
      { name: "Crona, Kessler and Kutch", roomCount: 49, revenue: 552.94 },
      { name: "Gleichner-Adams", roomCount: 50, revenue: 616.33 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Joly Grass",
        guestName: "Eduino Ousley",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
      {
        autorizedBy: "Templeton Hazleton",
        guestName: "Devonne Ellwand",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5193.65, group: 1939.38, contract: 1546.68 },
    roomData: {
      total: 40,
      contract: 5,
      outOfOrder: 7,
      stayOver: 31,
      arrivals: 26,
      departures: 22,
    },
  },
  {
    groupData: [
      {
        name: "Kuphal, Wintheiser and Connelly",
        roomCount: 38,
        revenue: 665.33,
      },
      { name: "Kovacek-Carroll", roomCount: 74, revenue: 221.71 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gabey Lucian",
        guestName: "Rodger Dowzell",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 8442.74, group: 1875.51, contract: 1318.1 },
    roomData: {
      total: 59,
      contract: 13,
      outOfOrder: 0,
      stayOver: 24,
      arrivals: 89,
      departures: 39,
    },
  },
  {
    groupData: [
      { name: "Mertz-Kertzmann", roomCount: 23, revenue: 802.01 },
      { name: "Wolf-Gleason", roomCount: 12, revenue: 565.87 },
      { name: "Lindgren and Sons", roomCount: 77, revenue: 704.91 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Pammy Lyddon",
        guestName: "Claire Colgan",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Jacklin Dunham",
        guestName: "Giulio Toderi",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12229.27, group: 628.17, contract: 1824.37 },
    roomData: {
      total: 72,
      contract: 2,
      outOfOrder: 3,
      stayOver: 50,
      arrivals: 48,
      departures: 40,
    },
  },
  {
    groupData: [{ name: "Beer-Wolff", roomCount: 41, revenue: 201.79 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13901.24, group: 1965.45, contract: 1486.23 },
    roomData: {
      total: 64,
      contract: 6,
      outOfOrder: 1,
      stayOver: 16,
      arrivals: 54,
      departures: 51,
    },
  },
  {
    groupData: [
      { name: "Spinka Inc", roomCount: 56, revenue: 135.87 },
      { name: "Bins-Ritchie", roomCount: 100, revenue: 540.99 },
      { name: "Ledner Inc", roomCount: 41, revenue: 108.9 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Augustus Hannant",
        guestName: "Aloisia Dunkerton",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
      {
        autorizedBy: "Virgie Plaskett",
        guestName: "Elisa Hallor",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 7882.33, group: 277.42, contract: 1811.19 },
    roomData: {
      total: 72,
      contract: 3,
      outOfOrder: 9,
      stayOver: 67,
      arrivals: 59,
      departures: 48,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Armstrong Flatley",
        guestName: "Rosana Baird",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Jaclyn Augar",
        guestName: "Graham Merck",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16892.69, group: 1119.68, contract: 1920.63 },
    roomData: {
      total: 76,
      contract: 1,
      outOfOrder: 7,
      stayOver: 12,
      arrivals: 47,
      departures: 21,
    },
  },
  {
    groupData: [
      { name: "Corkery and Sons", roomCount: 30, revenue: 424.65 },
      { name: "Donnelly-Beahan", roomCount: 34, revenue: 327.85 },
      { name: "Emmerich-Hartmann", roomCount: 15, revenue: 101.72 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Crystie Westfalen",
        guestName: "Desiree Guiet",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
      {
        autorizedBy: "Esma Shuttlewood",
        guestName: "Lilli Wike",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9259.31, group: 796.67, contract: 724.45 },
    roomData: {
      total: 88,
      contract: 9,
      outOfOrder: 7,
      stayOver: 46,
      arrivals: 64,
      departures: 14,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Olia Luis",
        guestName: "Sileas Pavlasek",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16127.33, group: 1788.4, contract: 534.0 },
    roomData: {
      total: 57,
      contract: 9,
      outOfOrder: 3,
      stayOver: 71,
      arrivals: 36,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Hagenes-Grimes", roomCount: 13, revenue: 309.81 },
      { name: "Aufderhar-Larkin", roomCount: 8, revenue: 164.6 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Karlyn Wedge",
        guestName: "Hayward Billinge",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5034.58, group: 172.28, contract: 1947.08 },
    roomData: {
      total: 100,
      contract: 10,
      outOfOrder: 2,
      stayOver: 77,
      arrivals: 70,
      departures: 80,
    },
  },
  {
    groupData: [
      { name: "Hegmann, Vandervort and Fay", roomCount: 13, revenue: 505.47 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Elmore Basindale",
        guestName: "Pepe Weeden",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17646.56, group: 341.34, contract: 488.15 },
    roomData: {
      total: 37,
      contract: 15,
      outOfOrder: 1,
      stayOver: 11,
      arrivals: 19,
      departures: 40,
    },
  },
  {
    groupData: [
      { name: "Zieme-Franecki", roomCount: 35, revenue: 449.25 },
      { name: "Howell-Schroeder", roomCount: 66, revenue: 195.91 },
      { name: "Langosh, Kulas and McDermott", roomCount: 90, revenue: 290.21 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11234.86, group: 659.81, contract: 457.41 },
    roomData: {
      total: 32,
      contract: 15,
      outOfOrder: 4,
      stayOver: 39,
      arrivals: 30,
      departures: 20,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Dolli Spitell",
        guestName: "Brucie Grevel",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
      {
        autorizedBy: "Nanni Shovlar",
        guestName: "Wanids Stothard",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10237.06, group: 1136.76, contract: 617.47 },
    roomData: {
      total: 30,
      contract: 16,
      outOfOrder: 1,
      stayOver: 35,
      arrivals: 66,
      departures: 36,
    },
  },
  {
    groupData: [
      { name: "McGlynn LLC", roomCount: 82, revenue: 416.24 },
      { name: "Willms, Casper and Roob", roomCount: 24, revenue: 369.67 },
      { name: "Sipes, Treutel and Grant", roomCount: 24, revenue: 871.34 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10992.9, group: 545.77, contract: 688.19 },
    roomData: {
      total: 26,
      contract: 13,
      outOfOrder: 2,
      stayOver: 50,
      arrivals: 65,
      departures: 20,
    },
  },
  {
    groupData: [
      { name: "Nienow-Rice", roomCount: 20, revenue: 726.46 },
      { name: "Cole, Renner and Marks", roomCount: 41, revenue: 791.97 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ferris D'Antoni",
        guestName: "Woodie Tomczak",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9377.02, group: 832.59, contract: 1420.11 },
    roomData: {
      total: 97,
      contract: 7,
      outOfOrder: 3,
      stayOver: 1,
      arrivals: 75,
      departures: 14,
    },
  },
  {
    groupData: [
      { name: "Kuphal-Leuschke", roomCount: 49, revenue: 385.58 },
      { name: "Deckow, Dickinson and Murazik", roomCount: 94, revenue: 262.19 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Simonne Klambt",
        guestName: "Mickey Okenden",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5291.57, group: 115.12, contract: 813.54 },
    roomData: {
      total: 45,
      contract: 6,
      outOfOrder: 0,
      stayOver: 43,
      arrivals: 21,
      departures: 45,
    },
  },
  {
    groupData: [{ name: "Kassulke Group", roomCount: 40, revenue: 544.39 }],
    compRoomInfo: [
      {
        autorizedBy: "Vanni Bettesworth",
        guestName: "Codi Fish",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Bambi Mosley",
        guestName: "Oralia Pohl",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16515.18, group: 1378.46, contract: 621.43 },
    roomData: {
      total: 35,
      contract: 4,
      outOfOrder: 9,
      stayOver: 49,
      arrivals: 63,
      departures: 69,
    },
  },
  {
    groupData: [
      { name: "Funk LLC", roomCount: 8, revenue: 732.26 },
      { name: "Skiles, Littel and Moore", roomCount: 88, revenue: 507.47 },
      { name: "Bergnaum, Welch and Langworth", roomCount: 29, revenue: 480.52 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9793.81, group: 1306.51, contract: 635.56 },
    roomData: {
      total: 51,
      contract: 4,
      outOfOrder: 3,
      stayOver: 42,
      arrivals: 16,
      departures: 75,
    },
  },
  {
    groupData: [
      {
        name: "Wilkinson, Gleichner and McLaughlin",
        roomCount: 37,
        revenue: 821.89,
      },
      { name: "Heaney Group", roomCount: 42, revenue: 551.49 },
      { name: "Carter, Hand and Spencer", roomCount: 51, revenue: 959.07 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jocko Dowsett",
        guestName: "Sergent Wickie",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15611.47, group: 1773.48, contract: 139.31 },
    roomData: {
      total: 30,
      contract: 10,
      outOfOrder: 0,
      stayOver: 78,
      arrivals: 72,
      departures: 46,
    },
  },
  {
    groupData: [{ name: "Heaney-Hessel", roomCount: 57, revenue: 134.93 }],
    compRoomInfo: [
      {
        autorizedBy: "Lucas Krammer",
        guestName: "Alexandre Ordish",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5849.73, group: 1720.71, contract: 664.61 },
    roomData: {
      total: 49,
      contract: 15,
      outOfOrder: 9,
      stayOver: 41,
      arrivals: 64,
      departures: 26,
    },
  },
  {
    groupData: [
      { name: "Larson, Parker and Bauch", roomCount: 14, revenue: 303.75 },
      { name: "Yundt-Krajcik", roomCount: 3, revenue: 563.75 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 17547.83, group: 1739.3, contract: 272.6 },
    roomData: {
      total: 44,
      contract: 4,
      outOfOrder: 5,
      stayOver: 43,
      arrivals: 79,
      departures: 1,
    },
  },
  {
    groupData: [
      { name: "Runolfsdottir LLC", roomCount: 12, revenue: 946.6 },
      { name: "Bahringer-Maggio", roomCount: 16, revenue: 173.65 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12153.35, group: 1797.92, contract: 1475.45 },
    roomData: {
      total: 63,
      contract: 16,
      outOfOrder: 5,
      stayOver: 54,
      arrivals: 86,
      departures: 22,
    },
  },
  {
    groupData: [
      { name: "King-Bernhard", roomCount: 17, revenue: 270.89 },
      { name: "Reichert, Hansen and Dicki", roomCount: 33, revenue: 715.36 },
      { name: "Gleason, Dickens and Upton", roomCount: 17, revenue: 965.21 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Nessi Dresse",
        guestName: "Had Jorczyk",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Billye Barehead",
        guestName: "Theadora Connealy",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 14539.16, group: 204.48, contract: 1615.62 },
    roomData: {
      total: 48,
      contract: 7,
      outOfOrder: 5,
      stayOver: 55,
      arrivals: 85,
      departures: 1,
    },
  },
  {
    groupData: [{ name: "Mayert-Graham", roomCount: 79, revenue: 504.09 }],
    compRoomInfo: [
      {
        autorizedBy: "Dehlia Whithorn",
        guestName: "Dyann Gillan",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Torin Inkles",
        guestName: "Anabal Humbert",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 11659.53, group: 1366.97, contract: 1632.5 },
    roomData: {
      total: 95,
      contract: 18,
      outOfOrder: 3,
      stayOver: 2,
      arrivals: 42,
      departures: 12,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Heda Springell",
        guestName: "Shanan Lowne",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Hope Laudham",
        guestName: "Fin Dodgshun",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8929.71, group: 1131.31, contract: 1251.44 },
    roomData: {
      total: 20,
      contract: 13,
      outOfOrder: 3,
      stayOver: 11,
      arrivals: 34,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Reynolds-Hagenes", roomCount: 37, revenue: 278.2 },
      { name: "Graham LLC", roomCount: 79, revenue: 974.08 },
      {
        name: "Roberts, O'Connell and Farrell",
        roomCount: 95,
        revenue: 293.45,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Pietra Fones",
        guestName: "Melania Zelley",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10099.46, group: 1641.33, contract: 707.71 },
    roomData: {
      total: 96,
      contract: 14,
      outOfOrder: 3,
      stayOver: 38,
      arrivals: 44,
      departures: 48,
    },
  },
  {
    groupData: [{ name: "Rutherford Inc", roomCount: 63, revenue: 425.66 }],
    compRoomInfo: [
      {
        autorizedBy: "Rosanna Pantling",
        guestName: "Misha Gosselin",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19995.64, group: 327.71, contract: 724.05 },
    roomData: {
      total: 52,
      contract: 15,
      outOfOrder: 6,
      stayOver: 47,
      arrivals: 35,
      departures: 14,
    },
  },
  {
    groupData: [{ name: "Gusikowski Group", roomCount: 91, revenue: 240.6 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19038.43, group: 1593.64, contract: 1571.31 },
    roomData: {
      total: 81,
      contract: 6,
      outOfOrder: 4,
      stayOver: 15,
      arrivals: 18,
      departures: 71,
    },
  },
  {
    groupData: [
      { name: "Grant, Carter and Brekke", roomCount: 83, revenue: 872.92 },
      { name: "Padberg LLC", roomCount: 50, revenue: 220.99 },
      {
        name: "Halvorson, Cartwright and Prohaska",
        roomCount: 90,
        revenue: 945.1,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sidney Meletti",
        guestName: "Bentley Kinloch",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7235.53, group: 714.92, contract: 750.81 },
    roomData: {
      total: 37,
      contract: 15,
      outOfOrder: 9,
      stayOver: 12,
      arrivals: 4,
      departures: 53,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jonah Isakson",
        guestName: "Lura Girardoni",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12056.13, group: 458.56, contract: 337.04 },
    roomData: {
      total: 58,
      contract: 11,
      outOfOrder: 6,
      stayOver: 34,
      arrivals: 73,
      departures: 58,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ned Reoch",
        guestName: "Bathsheba Narracott",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        autorizedBy: "Domeniga Braiden",
        guestName: "Karole Arrault",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18574.72, group: 1450.77, contract: 481.54 },
    roomData: {
      total: 89,
      contract: 20,
      outOfOrder: 7,
      stayOver: 8,
      arrivals: 31,
      departures: 28,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5538.71, group: 1047.58, contract: 984.32 },
    roomData: {
      total: 84,
      contract: 5,
      outOfOrder: 9,
      stayOver: 29,
      arrivals: 46,
      departures: 57,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13144.94, group: 1931.6, contract: 1665.76 },
    roomData: {
      total: 94,
      contract: 15,
      outOfOrder: 8,
      stayOver: 44,
      arrivals: 70,
      departures: 16,
    },
  },
  {
    groupData: [{ name: "Baumbach and Sons", roomCount: 92, revenue: 164.03 }],
    compRoomInfo: [
      {
        autorizedBy: "Marybeth Furby",
        guestName: "Dalila Wyleman",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
      {
        autorizedBy: "Gawen Franckton",
        guestName: "Genevra Noury",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 8613.98, group: 1621.56, contract: 700.0 },
    roomData: {
      total: 37,
      contract: 19,
      outOfOrder: 3,
      stayOver: 29,
      arrivals: 13,
      departures: 33,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13440.19, group: 774.96, contract: 269.83 },
    roomData: {
      total: 61,
      contract: 15,
      outOfOrder: 3,
      stayOver: 15,
      arrivals: 24,
      departures: 9,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5518.85, group: 205.7, contract: 282.4 },
    roomData: {
      total: 68,
      contract: 13,
      outOfOrder: 1,
      stayOver: 2,
      arrivals: 18,
      departures: 17,
    },
  },
  {
    groupData: [
      { name: "Farrell Inc", roomCount: 4, revenue: 323.12 },
      { name: "Rath LLC", roomCount: 29, revenue: 574.02 },
      { name: "Volkman LLC", roomCount: 2, revenue: 907.19 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ethel Hing",
        guestName: "Arvie Scudders",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 18365.56, group: 201.46, contract: 302.71 },
    roomData: {
      total: 80,
      contract: 7,
      outOfOrder: 0,
      stayOver: 35,
      arrivals: 52,
      departures: 46,
    },
  },
  {
    groupData: [
      { name: "Pouros, Fahey and Parker", roomCount: 100, revenue: 509.39 },
      { name: "Quigley Group", roomCount: 67, revenue: 230.71 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Erena Birt",
        guestName: "Curry Elton",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 7092.94, group: 866.9, contract: 215.11 },
    roomData: {
      total: 69,
      contract: 17,
      outOfOrder: 6,
      stayOver: 26,
      arrivals: 98,
      departures: 24,
    },
  },
  {
    groupData: [
      { name: "Boyle and Sons", roomCount: 43, revenue: 140.84 },
      { name: "Cremin, Schoen and Larson", roomCount: 91, revenue: 353.42 },
      { name: "Lang, Abshire and Kemmer", roomCount: 37, revenue: 110.07 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Trace Denerley",
        guestName: "Nicoli Lanahan",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Neville Capoun",
        guestName: "Fergus Stimson",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 13770.85, group: 220.36, contract: 453.82 },
    roomData: {
      total: 24,
      contract: 10,
      outOfOrder: 7,
      stayOver: 67,
      arrivals: 12,
      departures: 41,
    },
  },
  {
    groupData: [{ name: "Wisozk-Smitham", roomCount: 41, revenue: 204.33 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19747.49, group: 1030.79, contract: 1471.36 },
    roomData: {
      total: 85,
      contract: 16,
      outOfOrder: 3,
      stayOver: 60,
      arrivals: 43,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Mayer, Luettgen and Upton", roomCount: 49, revenue: 633.96 },
      { name: "Beier Group", roomCount: 57, revenue: 634.07 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18112.6, group: 1818.69, contract: 469.29 },
    roomData: {
      total: 30,
      contract: 20,
      outOfOrder: 2,
      stayOver: 2,
      arrivals: 87,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Watsica Group", roomCount: 80, revenue: 947.1 },
      { name: "Abshire, Ullrich and Kovacek", roomCount: 46, revenue: 986.74 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Koenraad Alldridge",
        guestName: "Cyndie Klosser",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16379.37, group: 1097.68, contract: 1059.36 },
    roomData: {
      total: 41,
      contract: 14,
      outOfOrder: 8,
      stayOver: 70,
      arrivals: 29,
      departures: 57,
    },
  },
  {
    groupData: [
      {
        name: "Gleichner, Dietrich and Fritsch",
        roomCount: 95,
        revenue: 189.81,
      },
      { name: "Reilly LLC", roomCount: 67, revenue: 727.44 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dewey Mation",
        guestName: "Conn Seacroft",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13521.18, group: 398.69, contract: 868.56 },
    roomData: {
      total: 58,
      contract: 1,
      outOfOrder: 5,
      stayOver: 70,
      arrivals: 53,
      departures: 47,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11397.5, group: 1209.79, contract: 1856.45 },
    roomData: {
      total: 73,
      contract: 0,
      outOfOrder: 1,
      stayOver: 61,
      arrivals: 64,
      departures: 7,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Gunther Beavis",
        guestName: "Stefanie Warboy",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
      {
        autorizedBy: "Tyne Weiser",
        guestName: "Stevena Bosworth",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12457.87, group: 541.41, contract: 1171.29 },
    roomData: {
      total: 77,
      contract: 8,
      outOfOrder: 9,
      stayOver: 71,
      arrivals: 73,
      departures: 57,
    },
  },
  {
    groupData: [
      { name: "Towne Inc", roomCount: 42, revenue: 642.75 },
      { name: "Gottlieb, Barton and Jacobson", roomCount: 58, revenue: 224.53 },
      { name: "Crooks, Cruickshank and Rowe", roomCount: 55, revenue: 236.55 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Husain Shorto",
        guestName: "Burk Arundell",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
      {
        autorizedBy: "Ky Reynoldson",
        guestName: "Berri Sorsbie",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17113.96, group: 211.59, contract: 887.47 },
    roomData: {
      total: 68,
      contract: 1,
      outOfOrder: 2,
      stayOver: 9,
      arrivals: 92,
      departures: 64,
    },
  },
  {
    groupData: [
      { name: "Lueilwitz Group", roomCount: 42, revenue: 739.17 },
      { name: "Cassin, Franecki and Mitchell", roomCount: 92, revenue: 825.82 },
      { name: "Zboncak-Gottlieb", roomCount: 56, revenue: 332.88 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9711.37, group: 1862.12, contract: 1305.37 },
    roomData: {
      total: 88,
      contract: 13,
      outOfOrder: 2,
      stayOver: 59,
      arrivals: 90,
      departures: 79,
    },
  },
  {
    groupData: [
      {
        name: "Mayert, Pacocha and Satterfield",
        roomCount: 19,
        revenue: 248.59,
      },
      { name: "Schaden-Adams", roomCount: 31, revenue: 105.61 },
      { name: "Morissette-Prosacco", roomCount: 68, revenue: 626.2 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lance Mottini",
        guestName: "Zoe Oels",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
      {
        autorizedBy: "Meredeth Boyson",
        guestName: "Murdock Patchett",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18218.68, group: 761.8, contract: 1636.4 },
    roomData: {
      total: 32,
      contract: 19,
      outOfOrder: 3,
      stayOver: 76,
      arrivals: 27,
      departures: 48,
    },
  },
  {
    groupData: [{ name: "Homenick LLC", roomCount: 37, revenue: 156.8 }],
    compRoomInfo: [
      {
        autorizedBy: "Micah Courcey",
        guestName: "Lucine Lackeye",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Dennie Pumphrey",
        guestName: "Shantee Lampard",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19217.75, group: 1784.02, contract: 1796.09 },
    roomData: {
      total: 72,
      contract: 0,
      outOfOrder: 9,
      stayOver: 78,
      arrivals: 58,
      departures: 41,
    },
  },
  {
    groupData: [
      { name: "Terry-Bergstrom", roomCount: 51, revenue: 947.42 },
      { name: "Hilll Inc", roomCount: 2, revenue: 710.01 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Frannie Clyant",
        guestName: "Eva Canas",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        autorizedBy: "Nikola Pellamonuten",
        guestName: "Martino Brugman",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17531.19, group: 1770.7, contract: 736.94 },
    roomData: {
      total: 86,
      contract: 13,
      outOfOrder: 0,
      stayOver: 10,
      arrivals: 94,
      departures: 22,
    },
  },
  {
    groupData: [{ name: "Emmerich-Cronin", roomCount: 58, revenue: 632.56 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8687.96, group: 1536.28, contract: 1403.4 },
    roomData: {
      total: 73,
      contract: 0,
      outOfOrder: 1,
      stayOver: 36,
      arrivals: 91,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Lehner, Wintheiser and Purdy", roomCount: 83, revenue: 819.2 },
      { name: "Luettgen-Runte", roomCount: 24, revenue: 942.83 },
      { name: "O'Hara, Kassulke and Rogahn", roomCount: 11, revenue: 786.42 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13784.56, group: 719.89, contract: 1374.45 },
    roomData: {
      total: 48,
      contract: 18,
      outOfOrder: 5,
      stayOver: 62,
      arrivals: 34,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Dicki and Sons", roomCount: 76, revenue: 381.5 },
      { name: "Klein-Price", roomCount: 2, revenue: 409.87 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Edmund Lockie",
        guestName: "Sibeal Stelfox",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
      {
        autorizedBy: "Devonna Antyshev",
        guestName: "Danielle Longwood",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9662.26, group: 1999.75, contract: 1199.76 },
    roomData: {
      total: 94,
      contract: 8,
      outOfOrder: 1,
      stayOver: 18,
      arrivals: 57,
      departures: 74,
    },
  },
  {
    groupData: [
      { name: "Wisozk-Lueilwitz", roomCount: 30, revenue: 722.45 },
      { name: "Braun, O'Conner and Towne", roomCount: 19, revenue: 785.26 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Aubree Grzeszczyk",
        guestName: "Velma MacArte",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Eli Batie",
        guestName: "Levi Rosencrantz",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10807.43, group: 401.38, contract: 1444.21 },
    roomData: {
      total: 29,
      contract: 7,
      outOfOrder: 3,
      stayOver: 27,
      arrivals: 62,
      departures: 19,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14709.65, group: 217.22, contract: 1126.33 },
    roomData: {
      total: 22,
      contract: 3,
      outOfOrder: 1,
      stayOver: 15,
      arrivals: 83,
      departures: 6,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Lanny Deighton",
        guestName: "Willabella Hannaford",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17716.12, group: 891.61, contract: 1170.53 },
    roomData: {
      total: 70,
      contract: 16,
      outOfOrder: 8,
      stayOver: 68,
      arrivals: 46,
      departures: 32,
    },
  },
  {
    groupData: [
      { name: "Effertz-Yundt", roomCount: 5, revenue: 109.8 },
      { name: "Herzog Group", roomCount: 39, revenue: 850.95 },
      { name: "Schumm Inc", roomCount: 75, revenue: 383.09 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17373.49, group: 365.44, contract: 966.85 },
    roomData: {
      total: 47,
      contract: 11,
      outOfOrder: 0,
      stayOver: 5,
      arrivals: 18,
      departures: 38,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16854.65, group: 1634.55, contract: 357.61 },
    roomData: {
      total: 35,
      contract: 6,
      outOfOrder: 3,
      stayOver: 21,
      arrivals: 40,
      departures: 46,
    },
  },
  {
    groupData: [
      { name: "Moore, Halvorson and Weber", roomCount: 54, revenue: 793.46 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17307.96, group: 1107.86, contract: 1844.9 },
    roomData: {
      total: 102,
      contract: 9,
      outOfOrder: 2,
      stayOver: 3,
      arrivals: 7,
      departures: 61,
    },
  },
  {
    groupData: [
      { name: "Monahan-Hoeger", roomCount: 13, revenue: 470.15 },
      { name: "Reichert, Fisher and Goldner", roomCount: 95, revenue: 495.78 },
      { name: "Reichert and Sons", roomCount: 14, revenue: 951.07 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Leoine Farbrace",
        guestName: "Dante Scobbie",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9620.82, group: 1856.5, contract: 472.2 },
    roomData: {
      total: 50,
      contract: 2,
      outOfOrder: 7,
      stayOver: 68,
      arrivals: 56,
      departures: 29,
    },
  },
  {
    groupData: [
      {
        name: "Kiehn, Armstrong and Bashirian",
        roomCount: 101,
        revenue: 959.63,
      },
      { name: "Wilderman LLC", roomCount: 101, revenue: 517.98 },
      { name: "Hand and Sons", roomCount: 37, revenue: 748.61 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Willdon Chelnam",
        guestName: "Merrily Ellgood",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14487.11, group: 678.67, contract: 639.86 },
    roomData: {
      total: 25,
      contract: 10,
      outOfOrder: 3,
      stayOver: 45,
      arrivals: 12,
      departures: 62,
    },
  },
  {
    groupData: [{ name: "Hudson LLC", roomCount: 47, revenue: 711.65 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18128.68, group: 1438.92, contract: 1067.17 },
    roomData: {
      total: 33,
      contract: 13,
      outOfOrder: 4,
      stayOver: 3,
      arrivals: 47,
      departures: 39,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Shanna Clemmett",
        guestName: "Allistir Foxley",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 17701.1, group: 1567.53, contract: 282.89 },
    roomData: {
      total: 70,
      contract: 12,
      outOfOrder: 7,
      stayOver: 19,
      arrivals: 52,
      departures: 50,
    },
  },
  {
    groupData: [
      { name: "Kutch, Gislason and Dickens", roomCount: 17, revenue: 397.52 },
      { name: "O'Conner-Reinger", roomCount: 90, revenue: 800.79 },
      { name: "Kutch and Sons", roomCount: 102, revenue: 749.0 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10574.64, group: 471.6, contract: 751.66 },
    roomData: {
      total: 38,
      contract: 18,
      outOfOrder: 4,
      stayOver: 73,
      arrivals: 88,
      departures: 10,
    },
  },
  {
    groupData: [
      { name: "Bernier and Sons", roomCount: 28, revenue: 330.34 },
      { name: "Nader Inc", roomCount: 66, revenue: 641.42 },
      { name: "Frami, Moore and Keeling", roomCount: 93, revenue: 244.93 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Audrye Risborough",
        guestName: "Parke Hayworth",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17992.09, group: 1253.61, contract: 751.42 },
    roomData: {
      total: 83,
      contract: 11,
      outOfOrder: 5,
      stayOver: 6,
      arrivals: 51,
      departures: 15,
    },
  },
  {
    groupData: [
      { name: "Romaguera-Hagenes", roomCount: 50, revenue: 491.16 },
      { name: "Kulas-Sanford", roomCount: 2, revenue: 121.54 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Zacharias Ickeringill",
        guestName: "Micky McMyler",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
      {
        autorizedBy: "Shoshana Lardner",
        guestName: "Bearnard Nanelli",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12954.28, group: 1131.53, contract: 344.12 },
    roomData: {
      total: 83,
      contract: 15,
      outOfOrder: 9,
      stayOver: 65,
      arrivals: 21,
      departures: 44,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Felisha Stucksbury",
        guestName: "Milzie Andriulis",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10023.34, group: 877.71, contract: 493.63 },
    roomData: {
      total: 57,
      contract: 7,
      outOfOrder: 8,
      stayOver: 65,
      arrivals: 86,
      departures: 46,
    },
  },
  {
    groupData: [
      { name: "Hintz Inc", roomCount: 14, revenue: 606.62 },
      { name: "Turcotte, Funk and Muller", roomCount: 57, revenue: 779.62 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Tootsie Jessup",
        guestName: "Odetta Bransdon",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 8907.95, group: 666.62, contract: 1371.44 },
    roomData: {
      total: 63,
      contract: 17,
      outOfOrder: 6,
      stayOver: 39,
      arrivals: 54,
      departures: 44,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9174.67, group: 1150.26, contract: 1849.79 },
    roomData: {
      total: 68,
      contract: 6,
      outOfOrder: 9,
      stayOver: 11,
      arrivals: 23,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "Jenkins, Hoppe and Mante", roomCount: 57, revenue: 601.57 },
      { name: "Bosco, Dooley and Hyatt", roomCount: 36, revenue: 351.68 },
      { name: "Hammes LLC", roomCount: 100, revenue: 828.47 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gian Mellhuish",
        guestName: "Kaleb Dalloway",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6519.04, group: 1590.52, contract: 1015.26 },
    roomData: {
      total: 72,
      contract: 18,
      outOfOrder: 8,
      stayOver: 53,
      arrivals: 84,
      departures: 58,
    },
  },
  {
    groupData: [
      { name: "Wintheiser and Sons", roomCount: 92, revenue: 699.84 },
      { name: "Willms Inc", roomCount: 100, revenue: 527.79 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Wilone Imesen",
        guestName: "Pavla Mathevon",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
      {
        autorizedBy: "Asher Revance",
        guestName: "Elsey O' Brian",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9376.19, group: 131.63, contract: 1968.24 },
    roomData: {
      total: 26,
      contract: 18,
      outOfOrder: 7,
      stayOver: 63,
      arrivals: 31,
      departures: 23,
    },
  },
  {
    groupData: [{ name: "MacGyver-Berge", roomCount: 8, revenue: 791.06 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6258.35, group: 624.86, contract: 258.75 },
    roomData: {
      total: 40,
      contract: 17,
      outOfOrder: 2,
      stayOver: 56,
      arrivals: 68,
      departures: 7,
    },
  },
  {
    groupData: [
      { name: "Flatley-Breitenberg", roomCount: 49, revenue: 431.58 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 16887.52, group: 900.63, contract: 770.6 },
    roomData: {
      total: 65,
      contract: 7,
      outOfOrder: 0,
      stayOver: 8,
      arrivals: 94,
      departures: 47,
    },
  },
  {
    groupData: [{ name: "Wyman-Zboncak", roomCount: 77, revenue: 931.85 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 12375.42, group: 1858.4, contract: 1794.3 },
    roomData: {
      total: 47,
      contract: 14,
      outOfOrder: 2,
      stayOver: 0,
      arrivals: 41,
      departures: 10,
    },
  },
  {
    groupData: [
      { name: "Prohaska, Ratke and Jacobson", roomCount: 19, revenue: 709.11 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Orrin Ziebart",
        guestName: "Ad Newark",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 17526.76, group: 130.62, contract: 692.78 },
    roomData: {
      total: 99,
      contract: 7,
      outOfOrder: 8,
      stayOver: 26,
      arrivals: 69,
      departures: 79,
    },
  },
  {
    groupData: [
      { name: "Bogan, Gleason and Lubowitz", roomCount: 83, revenue: 750.38 },
      { name: "Satterfield-Rippin", roomCount: 67, revenue: 574.89 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Zsazsa Armfirld",
        guestName: "Thorvald Cruttenden",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Aharon Flanagan",
        guestName: "Abbie Maffia",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6052.93, group: 1808.4, contract: 1126.19 },
    roomData: {
      total: 89,
      contract: 13,
      outOfOrder: 9,
      stayOver: 63,
      arrivals: 54,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Hoeger, Parker and Fisher", roomCount: 57, revenue: 503.38 },
      { name: "Schultz-Bednar", roomCount: 33, revenue: 556.03 },
      { name: "Kessler and Sons", roomCount: 13, revenue: 332.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Mohandas Badam",
        guestName: "Fraser Kentish",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
      {
        autorizedBy: "Hersh Sims",
        guestName: "Benjamen Mettericke",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13705.03, group: 1535.57, contract: 692.04 },
    roomData: {
      total: 33,
      contract: 16,
      outOfOrder: 8,
      stayOver: 60,
      arrivals: 60,
      departures: 17,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Latrena Stobart",
        guestName: "Kerrie Cotty",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5636.02, group: 916.28, contract: 1694.6 },
    roomData: {
      total: 45,
      contract: 7,
      outOfOrder: 0,
      stayOver: 47,
      arrivals: 22,
      departures: 2,
    },
  },
  {
    groupData: [
      { name: "Treutel Inc", roomCount: 38, revenue: 665.27 },
      { name: "Carroll Inc", roomCount: 45, revenue: 845.24 },
      { name: "Hansen and Sons", roomCount: 48, revenue: 223.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lotta Jenman",
        guestName: "Ailey Hoston",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9803.38, group: 875.32, contract: 1399.32 },
    roomData: {
      total: 63,
      contract: 19,
      outOfOrder: 8,
      stayOver: 11,
      arrivals: 80,
      departures: 63,
    },
  },
  {
    groupData: [
      { name: "Vandervort and Sons", roomCount: 5, revenue: 919.08 },
      { name: "Spinka-Mosciski", roomCount: 83, revenue: 423.44 },
      { name: "Halvorson, Walter and Bayer", roomCount: 20, revenue: 878.7 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12142.42, group: 317.88, contract: 711.3 },
    roomData: {
      total: 90,
      contract: 12,
      outOfOrder: 6,
      stayOver: 18,
      arrivals: 84,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Labadie, Larkin and Senger", roomCount: 15, revenue: 393.7 },
      { name: "Dicki, Swift and Bechtelar", roomCount: 100, revenue: 458.04 },
      { name: "Dicki, VonRueden and Jacobi", roomCount: 45, revenue: 432.7 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Pablo Molan",
        guestName: "Faulkner Falvey",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
      {
        autorizedBy: "Karl Gosforth",
        guestName: "Esra Rumin",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 19063.94, group: 498.5, contract: 901.04 },
    roomData: {
      total: 92,
      contract: 15,
      outOfOrder: 5,
      stayOver: 12,
      arrivals: 89,
      departures: 48,
    },
  },
  {
    groupData: [
      { name: "Gulgowski-Bailey", roomCount: 45, revenue: 478.31 },
      { name: "Stehr, Schneider and Adams", roomCount: 6, revenue: 434.21 },
      { name: "Labadie, Rempel and Sauer", roomCount: 86, revenue: 962.14 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Quinn Simcock",
        guestName: "Berke Guyan",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9051.93, group: 1702.37, contract: 101.91 },
    roomData: {
      total: 26,
      contract: 14,
      outOfOrder: 3,
      stayOver: 23,
      arrivals: 24,
      departures: 48,
    },
  },
  {
    groupData: [
      { name: "Schmidt and Sons", roomCount: 87, revenue: 731.66 },
      { name: "Hills, Bradtke and Boehm", roomCount: 16, revenue: 788.76 },
      { name: "Graham and Sons", roomCount: 49, revenue: 423.27 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7024.92, group: 1277.91, contract: 1529.66 },
    roomData: {
      total: 23,
      contract: 18,
      outOfOrder: 6,
      stayOver: 4,
      arrivals: 22,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "Hessel, Rempel and Turcotte", roomCount: 3, revenue: 109.32 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12014.24, group: 1732.7, contract: 1855.57 },
    roomData: {
      total: 63,
      contract: 20,
      outOfOrder: 0,
      stayOver: 22,
      arrivals: 44,
      departures: 67,
    },
  },
  {
    groupData: [
      { name: "Steuber LLC", roomCount: 55, revenue: 610.33 },
      { name: "Emmerich-Stamm", roomCount: 66, revenue: 814.56 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Randolph Domonkos",
        guestName: "Ajay Dunklee",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Amabel Banham",
        guestName: "Almeta Harwood",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17536.0, group: 1248.93, contract: 1038.13 },
    roomData: {
      total: 22,
      contract: 4,
      outOfOrder: 3,
      stayOver: 31,
      arrivals: 69,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Dickinson-Schmidt", roomCount: 34, revenue: 540.27 },
      { name: "Block-Johnson", roomCount: 78, revenue: 947.68 },
      { name: "Casper Group", roomCount: 43, revenue: 237.28 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Deena Algeo",
        guestName: "Danni Bertomieu",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14536.3, group: 1480.36, contract: 1152.75 },
    roomData: {
      total: 63,
      contract: 5,
      outOfOrder: 8,
      stayOver: 29,
      arrivals: 93,
      departures: 25,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 8447.27, group: 723.21, contract: 1639.04 },
    roomData: {
      total: 59,
      contract: 9,
      outOfOrder: 7,
      stayOver: 24,
      arrivals: 69,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "Brekke-Miller", roomCount: 91, revenue: 271.81 },
      { name: "Jast, Swift and Streich", roomCount: 31, revenue: 206.11 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Roy Lydden",
        guestName: "Urson Ramsbotham",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        autorizedBy: "Venita Sedgmond",
        guestName: "Arnie Cosens",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9362.72, group: 1098.49, contract: 1343.86 },
    roomData: {
      total: 26,
      contract: 2,
      outOfOrder: 9,
      stayOver: 43,
      arrivals: 29,
      departures: 74,
    },
  },
  {
    groupData: [
      { name: "Lowe, Huel and Sauer", roomCount: 96, revenue: 743.19 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Liam Guido",
        guestName: "Judas Wyke",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Lion Bearham",
        guestName: "Neille Callan",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 6359.58, group: 505.39, contract: 962.89 },
    roomData: {
      total: 96,
      contract: 10,
      outOfOrder: 6,
      stayOver: 43,
      arrivals: 38,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Rice, Welch and Hackett", roomCount: 42, revenue: 942.91 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Maridel Swate",
        guestName: "Quentin Riddel",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18713.18, group: 541.19, contract: 1042.0 },
    roomData: {
      total: 44,
      contract: 16,
      outOfOrder: 5,
      stayOver: 60,
      arrivals: 26,
      departures: 72,
    },
  },
  {
    groupData: [
      { name: "Keeling-Adams", roomCount: 99, revenue: 892.71 },
      { name: "Howell-Stark", roomCount: 80, revenue: 738.05 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Shandeigh Rizzi",
        guestName: "Evyn O'Nolan",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 18503.9, group: 1350.45, contract: 219.59 },
    roomData: {
      total: 92,
      contract: 14,
      outOfOrder: 5,
      stayOver: 52,
      arrivals: 94,
      departures: 77,
    },
  },
  {
    groupData: [{ name: "Kerluke Inc", roomCount: 22, revenue: 124.34 }],
    compRoomInfo: [
      {
        autorizedBy: "Petronilla Stainburn",
        guestName: "Jens Mullany",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
      {
        autorizedBy: "Patrice Gilderoy",
        guestName: "Dame Bunney",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 8221.19, group: 1736.74, contract: 1552.22 },
    roomData: {
      total: 36,
      contract: 6,
      outOfOrder: 0,
      stayOver: 17,
      arrivals: 9,
      departures: 21,
    },
  },
  {
    groupData: [
      { name: "Dickinson-Rutherford", roomCount: 58, revenue: 245.82 },
      {
        name: "Wisozk, Stoltenberg and MacGyver",
        roomCount: 56,
        revenue: 513.2,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13219.23, group: 500.78, contract: 514.23 },
    roomData: {
      total: 57,
      contract: 4,
      outOfOrder: 4,
      stayOver: 42,
      arrivals: 33,
      departures: 27,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Delly Iozefovich",
        guestName: "Vitoria Scrafton",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        autorizedBy: "Ina Feander",
        guestName: "Elora Bithany",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14088.4, group: 1497.47, contract: 658.29 },
    roomData: {
      total: 71,
      contract: 15,
      outOfOrder: 0,
      stayOver: 6,
      arrivals: 14,
      departures: 56,
    },
  },
  {
    groupData: [
      { name: "Casper-Hauck", roomCount: 80, revenue: 435.25 },
      { name: "Flatley-Bins", roomCount: 87, revenue: 475.04 },
      { name: "Langosh Inc", roomCount: 95, revenue: 536.6 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8929.69, group: 314.41, contract: 939.65 },
    roomData: {
      total: 38,
      contract: 13,
      outOfOrder: 1,
      stayOver: 49,
      arrivals: 25,
      departures: 44,
    },
  },
  {
    groupData: [
      { name: "Macejkovic, Denesik and Lemke", roomCount: 65, revenue: 509.24 },
      { name: "Rice Group", roomCount: 46, revenue: 317.3 },
      { name: "Bergnaum Inc", roomCount: 94, revenue: 743.52 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13492.74, group: 853.52, contract: 1532.62 },
    roomData: {
      total: 96,
      contract: 3,
      outOfOrder: 7,
      stayOver: 63,
      arrivals: 46,
      departures: 49,
    },
  },
  {
    groupData: [{ name: "Rice-Bernier", roomCount: 85, revenue: 774.01 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 15019.44, group: 1583.53, contract: 1035.12 },
    roomData: {
      total: 49,
      contract: 0,
      outOfOrder: 5,
      stayOver: 7,
      arrivals: 98,
      departures: 38,
    },
  },
  {
    groupData: [
      { name: "Goodwin-Powlowski", roomCount: 25, revenue: 122.52 },
      { name: "Batz and Sons", roomCount: 14, revenue: 208.76 },
      { name: "Blick-Schowalter", roomCount: 88, revenue: 647.99 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Nap O'Dooghaine",
        guestName: "Rolph Sonschein",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
      {
        autorizedBy: "Pennie Peddel",
        guestName: "Lilian Hilling",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16267.82, group: 1315.28, contract: 1807.47 },
    roomData: {
      total: 27,
      contract: 1,
      outOfOrder: 3,
      stayOver: 64,
      arrivals: 84,
      departures: 8,
    },
  },
  {
    groupData: [
      { name: "Boehm, Keebler and Nitzsche", roomCount: 42, revenue: 203.47 },
      { name: "Johnson Inc", roomCount: 63, revenue: 589.78 },
      { name: "Mitchell-O'Keefe", roomCount: 68, revenue: 708.24 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dallas Del Monte",
        guestName: "Smith Laba",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
      {
        autorizedBy: "Rich Hoolaghan",
        guestName: "Sascha Matthesius",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8898.2, group: 1492.82, contract: 1662.15 },
    roomData: {
      total: 79,
      contract: 11,
      outOfOrder: 2,
      stayOver: 3,
      arrivals: 73,
      departures: 49,
    },
  },
  {
    groupData: [
      { name: "Nikolaus Inc", roomCount: 35, revenue: 358.71 },
      { name: "Sporer-Hoppe", roomCount: 85, revenue: 615.9 },
      { name: "Morar, Dach and Shields", roomCount: 57, revenue: 153.25 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Guillema Kalinowsky",
        guestName: "Justino Vaudin",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Susanne Vasyutkin",
        guestName: "Ritchie Posselwhite",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15885.1, group: 1997.61, contract: 1187.88 },
    roomData: {
      total: 23,
      contract: 17,
      outOfOrder: 5,
      stayOver: 10,
      arrivals: 29,
      departures: 79,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Stefano Swanston",
        guestName: "Timotheus Coutts",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19686.63, group: 1715.11, contract: 1911.66 },
    roomData: {
      total: 48,
      contract: 19,
      outOfOrder: 9,
      stayOver: 41,
      arrivals: 60,
      departures: 40,
    },
  },
  {
    groupData: [
      { name: "Shanahan-McCullough", roomCount: 91, revenue: 656.9 },
      { name: "Nikolaus-Williamson", roomCount: 53, revenue: 935.42 },
      { name: "Ebert LLC", roomCount: 31, revenue: 518.14 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Clyve Cloney",
        guestName: "Sadye Parley",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        autorizedBy: "Dav MacBey",
        guestName: "Saraann Summerhayes",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17207.57, group: 1292.82, contract: 1944.74 },
    roomData: {
      total: 75,
      contract: 8,
      outOfOrder: 4,
      stayOver: 57,
      arrivals: 11,
      departures: 71,
    },
  },
  {
    groupData: [{ name: "Fadel-Greenholt", roomCount: 30, revenue: 485.04 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9800.79, group: 1425.58, contract: 131.08 },
    roomData: {
      total: 79,
      contract: 6,
      outOfOrder: 5,
      stayOver: 17,
      arrivals: 94,
      departures: 67,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Chic Mettrick",
        guestName: "Odilia Caswall",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Betti Snarr",
        guestName: "Sansone Aspole",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5301.79, group: 931.6, contract: 1212.81 },
    roomData: {
      total: 51,
      contract: 13,
      outOfOrder: 3,
      stayOver: 72,
      arrivals: 52,
      departures: 64,
    },
  },
  {
    groupData: [
      { name: "Schiller, Harris and Lowe", roomCount: 31, revenue: 505.78 },
      { name: "Gottlieb, Feil and Olson", roomCount: 68, revenue: 187.82 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gerick Hazeldene",
        guestName: "Cornelius Barbery",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12450.97, group: 1832.9, contract: 465.81 },
    roomData: {
      total: 42,
      contract: 1,
      outOfOrder: 3,
      stayOver: 51,
      arrivals: 94,
      departures: 11,
    },
  },
  {
    groupData: [
      { name: "Heaney, Hyatt and Labadie", roomCount: 75, revenue: 891.89 },
      { name: "Pouros-Considine", roomCount: 4, revenue: 414.38 },
      {
        name: "Schultz, Kautzer and Ankunding",
        roomCount: 62,
        revenue: 314.84,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16120.92, group: 1149.56, contract: 1387.35 },
    roomData: {
      total: 29,
      contract: 12,
      outOfOrder: 0,
      stayOver: 60,
      arrivals: 94,
      departures: 28,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jamey Harower",
        guestName: "Templeton Carette",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7223.14, group: 170.39, contract: 985.07 },
    roomData: {
      total: 30,
      contract: 5,
      outOfOrder: 1,
      stayOver: 14,
      arrivals: 80,
      departures: 55,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Tildi Rootes",
        guestName: "Orton Del Castello",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9770.86, group: 1459.03, contract: 655.17 },
    roomData: {
      total: 51,
      contract: 9,
      outOfOrder: 1,
      stayOver: 67,
      arrivals: 71,
      departures: 49,
    },
  },
  {
    groupData: [
      { name: "Jacobi-Kiehn", roomCount: 51, revenue: 855.65 },
      { name: "Feest-Olson", roomCount: 78, revenue: 131.3 },
      { name: "Wisoky-Bauch", roomCount: 4, revenue: 552.53 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Granger Parnaby",
        guestName: "Dotti Carloni",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Lennard Quiddinton",
        guestName: "Jessi Cotman",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18723.3, group: 542.67, contract: 1645.39 },
    roomData: {
      total: 65,
      contract: 15,
      outOfOrder: 0,
      stayOver: 62,
      arrivals: 87,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Morissette Group", roomCount: 90, revenue: 520.85 },
      { name: "Gutkowski, Walter and Becker", roomCount: 39, revenue: 605.13 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bastien Francklin",
        guestName: "Jammie O'Loughlin",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15017.35, group: 1529.52, contract: 486.5 },
    roomData: {
      total: 62,
      contract: 19,
      outOfOrder: 2,
      stayOver: 31,
      arrivals: 92,
      departures: 40,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Dill Keen",
        guestName: "Catrina Chazotte",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        autorizedBy: "Brianna Burdas",
        guestName: "Tab Foss",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11028.3, group: 1179.3, contract: 1938.37 },
    roomData: {
      total: 53,
      contract: 10,
      outOfOrder: 9,
      stayOver: 41,
      arrivals: 68,
      departures: 40,
    },
  },
  {
    groupData: [
      { name: "Gleason LLC", roomCount: 35, revenue: 323.76 },
      { name: "Dickinson-Bradtke", roomCount: 67, revenue: 593.83 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gary Callcott",
        guestName: "Lishe Hallan",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
      {
        autorizedBy: "Flin Reinbach",
        guestName: "Goraud Dalligan",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 6650.26, group: 891.27, contract: 1929.75 },
    roomData: {
      total: 81,
      contract: 16,
      outOfOrder: 0,
      stayOver: 35,
      arrivals: 7,
      departures: 79,
    },
  },
  {
    groupData: [
      { name: "Swaniawski-Wuckert", roomCount: 90, revenue: 701.22 },
      { name: "Windler-O'Conner", roomCount: 80, revenue: 522.45 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14070.29, group: 1597.11, contract: 169.79 },
    roomData: {
      total: 46,
      contract: 17,
      outOfOrder: 3,
      stayOver: 65,
      arrivals: 77,
      departures: 21,
    },
  },
  {
    groupData: [
      { name: "Hane Group", roomCount: 17, revenue: 461.39 },
      { name: "Williamson and Sons", roomCount: 94, revenue: 983.47 },
      { name: "Barrows, Dicki and Miller", roomCount: 91, revenue: 676.45 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13604.51, group: 1396.74, contract: 226.59 },
    roomData: {
      total: 90,
      contract: 12,
      outOfOrder: 1,
      stayOver: 54,
      arrivals: 79,
      departures: 27,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Fletch Cuffley",
        guestName: "Guido Millson",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14850.67, group: 1755.95, contract: 730.11 },
    roomData: {
      total: 47,
      contract: 2,
      outOfOrder: 1,
      stayOver: 59,
      arrivals: 30,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "Mayer-Hermann", roomCount: 6, revenue: 850.75 },
      { name: "Mraz, Parisian and Ondricka", roomCount: 56, revenue: 264.66 },
      { name: "Wiegand-Rempel", roomCount: 70, revenue: 963.4 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Axe Filyakov",
        guestName: "Bellanca Shitliffe",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
      {
        autorizedBy: "Waneta Hoopper",
        guestName: "Yvor Methley",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 14899.28, group: 740.93, contract: 1173.73 },
    roomData: {
      total: 38,
      contract: 12,
      outOfOrder: 2,
      stayOver: 51,
      arrivals: 63,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Rau Inc", roomCount: 2, revenue: 433.64 },
      { name: "Bernhard LLC", roomCount: 101, revenue: 629.36 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Rollie Berrey",
        guestName: "Gaylord Blowin",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
      {
        autorizedBy: "Alphard Gravatt",
        guestName: "Nikolos Staniford",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16367.4, group: 461.49, contract: 1490.18 },
    roomData: {
      total: 28,
      contract: 7,
      outOfOrder: 2,
      stayOver: 68,
      arrivals: 0,
      departures: 33,
    },
  },
  {
    groupData: [
      { name: "Fisher, Lueilwitz and Harber", roomCount: 5, revenue: 774.46 },
      { name: "Bogan-Funk", roomCount: 88, revenue: 786.37 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Engracia Goldhawk",
        guestName: "Ara Davys",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12385.96, group: 983.67, contract: 1614.87 },
    roomData: {
      total: 73,
      contract: 0,
      outOfOrder: 4,
      stayOver: 27,
      arrivals: 55,
      departures: 66,
    },
  },
  {
    groupData: [{ name: "O'Reilly-Hilpert", roomCount: 8, revenue: 282.59 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7986.48, group: 1067.81, contract: 129.64 },
    roomData: {
      total: 32,
      contract: 3,
      outOfOrder: 8,
      stayOver: 30,
      arrivals: 3,
      departures: 49,
    },
  },
  {
    groupData: [{ name: "Harvey Group", roomCount: 45, revenue: 909.16 }],
    compRoomInfo: [
      {
        autorizedBy: "Dillon Antusch",
        guestName: "Crawford Abeau",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 10336.24, group: 1616.57, contract: 1111.83 },
    roomData: {
      total: 42,
      contract: 6,
      outOfOrder: 0,
      stayOver: 74,
      arrivals: 95,
      departures: 24,
    },
  },
  {
    groupData: [
      { name: "Nienow, Stroman and Wolf", roomCount: 52, revenue: 452.57 },
      { name: "Sawayn-Dooley", roomCount: 31, revenue: 432.62 },
      { name: "Schimmel-Lubowitz", roomCount: 45, revenue: 418.72 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Consuelo Rawling",
        guestName: "Fernanda Hurich",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
      {
        autorizedBy: "Janeen Sadler",
        guestName: "Rivkah Steanyng",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16601.57, group: 270.76, contract: 927.26 },
    roomData: {
      total: 79,
      contract: 14,
      outOfOrder: 7,
      stayOver: 26,
      arrivals: 15,
      departures: 52,
    },
  },
  {
    groupData: [
      { name: "Kihn, Rau and Orn", roomCount: 99, revenue: 184.3 },
      { name: "Koelpin LLC", roomCount: 5, revenue: 104.16 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10361.75, group: 1083.85, contract: 447.57 },
    roomData: {
      total: 75,
      contract: 11,
      outOfOrder: 8,
      stayOver: 62,
      arrivals: 78,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Kreiger-Runolfsson", roomCount: 73, revenue: 742.02 },
      { name: "Baumbach, Thiel and Collins", roomCount: 55, revenue: 865.51 },
      { name: "Conn, Durgan and Dooley", roomCount: 73, revenue: 708.66 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Archy Linck",
        guestName: "Margareta Elix",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19105.52, group: 1724.27, contract: 1973.41 },
    roomData: {
      total: 67,
      contract: 0,
      outOfOrder: 3,
      stayOver: 19,
      arrivals: 97,
      departures: 29,
    },
  },
  {
    groupData: [{ name: "Williamson-Zboncak", roomCount: 58, revenue: 961.57 }],
    compRoomInfo: [
      {
        autorizedBy: "Nydia Dayly",
        guestName: "Prissie Leaves",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
      {
        autorizedBy: "Bear Demcik",
        guestName: "Welbie Dauncey",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5604.42, group: 1554.6, contract: 1337.15 },
    roomData: {
      total: 70,
      contract: 8,
      outOfOrder: 6,
      stayOver: 79,
      arrivals: 74,
      departures: 58,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Town Rafter",
        guestName: "Victoria Tripon",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Kirbee Bidewel",
        guestName: "Cob Aronstein",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15120.4, group: 680.31, contract: 687.61 },
    roomData: {
      total: 86,
      contract: 8,
      outOfOrder: 6,
      stayOver: 48,
      arrivals: 39,
      departures: 20,
    },
  },
  {
    groupData: [
      { name: "Rippin and Sons", roomCount: 55, revenue: 161.16 },
      { name: "Dietrich-Schumm", roomCount: 47, revenue: 873.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Yale Carlson",
        guestName: "Amabel Shackle",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
      {
        autorizedBy: "Brett Thonason",
        guestName: "Lilllie Asquez",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16836.04, group: 1350.16, contract: 1600.99 },
    roomData: {
      total: 32,
      contract: 14,
      outOfOrder: 2,
      stayOver: 16,
      arrivals: 46,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "Buckridge-Haag", roomCount: 32, revenue: 255.5 },
      { name: "Grimes Group", roomCount: 90, revenue: 256.79 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Magdaia Jemison",
        guestName: "Ferdy Bouts",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 18256.74, group: 1836.72, contract: 138.73 },
    roomData: {
      total: 59,
      contract: 2,
      outOfOrder: 8,
      stayOver: 51,
      arrivals: 59,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Cummings-Goyette", roomCount: 78, revenue: 961.21 },
      { name: "Nitzsche, Ward and Towne", roomCount: 87, revenue: 361.63 },
      { name: "Schmeler and Sons", roomCount: 48, revenue: 702.99 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cortney Ellwand",
        guestName: "Em De Gowe",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13128.45, group: 1446.36, contract: 1497.94 },
    roomData: {
      total: 52,
      contract: 7,
      outOfOrder: 0,
      stayOver: 2,
      arrivals: 55,
      departures: 65,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15333.03, group: 451.44, contract: 680.81 },
    roomData: {
      total: 39,
      contract: 0,
      outOfOrder: 7,
      stayOver: 30,
      arrivals: 18,
      departures: 56,
    },
  },
  {
    groupData: [
      { name: "Ebert-Greenholt", roomCount: 71, revenue: 703.16 },
      { name: "Schaefer-Sawayn", roomCount: 83, revenue: 786.64 },
      { name: "Treutel-Kling", roomCount: 90, revenue: 696.4 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Darnell Dybell",
        guestName: "Mannie McTerrelly",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13933.91, group: 486.84, contract: 789.49 },
    roomData: {
      total: 59,
      contract: 16,
      outOfOrder: 4,
      stayOver: 34,
      arrivals: 15,
      departures: 47,
    },
  },
  {
    groupData: [
      {
        name: "Christiansen, Halvorson and Kulas",
        roomCount: 75,
        revenue: 858.52,
      },
      { name: "Russel, Ferry and Stoltenberg", roomCount: 55, revenue: 777.65 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14443.21, group: 501.51, contract: 1330.87 },
    roomData: {
      total: 83,
      contract: 12,
      outOfOrder: 2,
      stayOver: 62,
      arrivals: 69,
      departures: 2,
    },
  },
  {
    groupData: [{ name: "Tillman and Sons", roomCount: 64, revenue: 848.72 }],
    compRoomInfo: [
      {
        autorizedBy: "Terry Cheesley",
        guestName: "Whit Lantuffe",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
      {
        autorizedBy: "Elwin Creese",
        guestName: "Milena Hodgins",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 16647.79, group: 1182.51, contract: 1198.51 },
    roomData: {
      total: 76,
      contract: 18,
      outOfOrder: 2,
      stayOver: 79,
      arrivals: 96,
      departures: 10,
    },
  },
  {
    groupData: [
      { name: "Schoen, Kulas and Koss", roomCount: 63, revenue: 736.46 },
      { name: "McKenzie-Ruecker", roomCount: 3, revenue: 402.81 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cheri Garratt",
        guestName: "Rakel Bruhnicke",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
      {
        autorizedBy: "Dillie Ashment",
        guestName: "Daniel Sprigg",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6181.45, group: 1675.31, contract: 1882.79 },
    roomData: {
      total: 34,
      contract: 10,
      outOfOrder: 2,
      stayOver: 8,
      arrivals: 53,
      departures: 79,
    },
  },
  {
    groupData: [
      { name: "Wunsch and Sons", roomCount: 66, revenue: 303.3 },
      { name: "Jast and Sons", roomCount: 30, revenue: 742.94 },
      { name: "Gleason-Tromp", roomCount: 2, revenue: 658.98 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9632.56, group: 1936.44, contract: 859.35 },
    roomData: {
      total: 30,
      contract: 19,
      outOfOrder: 7,
      stayOver: 22,
      arrivals: 12,
      departures: 2,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "La verne Mardling",
        guestName: "Anabelle Maskrey",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
      {
        autorizedBy: "Romeo Kays",
        guestName: "Colby Valasek",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18736.13, group: 1349.2, contract: 1186.98 },
    roomData: {
      total: 24,
      contract: 7,
      outOfOrder: 5,
      stayOver: 9,
      arrivals: 39,
      departures: 30,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Inga Rameaux",
        guestName: "Brady Goring",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Ignacius Blanchard",
        guestName: "Wendie Christoffels",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13543.1, group: 1827.25, contract: 714.23 },
    roomData: {
      total: 34,
      contract: 0,
      outOfOrder: 7,
      stayOver: 49,
      arrivals: 3,
      departures: 41,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16627.81, group: 1307.36, contract: 1183.54 },
    roomData: {
      total: 91,
      contract: 18,
      outOfOrder: 5,
      stayOver: 65,
      arrivals: 2,
      departures: 36,
    },
  },
  {
    groupData: [{ name: "Sauer and Sons", roomCount: 8, revenue: 961.92 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12404.32, group: 1197.59, contract: 774.33 },
    roomData: {
      total: 75,
      contract: 13,
      outOfOrder: 8,
      stayOver: 56,
      arrivals: 15,
      departures: 30,
    },
  },
  {
    groupData: [{ name: "Upton and Sons", roomCount: 100, revenue: 172.35 }],
    compRoomInfo: [
      {
        autorizedBy: "Tyson Rabjohn",
        guestName: "Caprice Bonsey",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Hilario Drummond",
        guestName: "Daisey Wheatland",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6862.87, group: 1787.81, contract: 1891.48 },
    roomData: {
      total: 80,
      contract: 18,
      outOfOrder: 1,
      stayOver: 29,
      arrivals: 55,
      departures: 59,
    },
  },
  {
    groupData: [
      { name: "Mohr, Bailey and Huel", roomCount: 11, revenue: 687.59 },
      { name: "O'Kon, Jakubowski and Daniel", roomCount: 4, revenue: 405.85 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Mack Bertomieu",
        guestName: "Lark Waldron",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
      {
        autorizedBy: "Dari Maffey",
        guestName: "Dore Kubera",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11267.3, group: 1866.58, contract: 1980.34 },
    roomData: {
      total: 82,
      contract: 15,
      outOfOrder: 8,
      stayOver: 39,
      arrivals: 56,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "Ritchie Group", roomCount: 29, revenue: 131.07 },
      { name: "Mitchell-Hayes", roomCount: 90, revenue: 684.14 },
      { name: "Purdy, Collier and Cartwright", roomCount: 68, revenue: 244.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Elissa Gibbs",
        guestName: "Rosie Bolsover",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11834.58, group: 1203.36, contract: 433.42 },
    roomData: {
      total: 34,
      contract: 1,
      outOfOrder: 3,
      stayOver: 71,
      arrivals: 99,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Muller, Hintz and Gibson", roomCount: 5, revenue: 752.26 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sonni Verlinde",
        guestName: "Mariejeanne Besse",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Uta Longhorne",
        guestName: "Cynde Kwietak",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9382.21, group: 985.05, contract: 1160.39 },
    roomData: {
      total: 83,
      contract: 5,
      outOfOrder: 2,
      stayOver: 12,
      arrivals: 58,
      departures: 4,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ericha Arlow",
        guestName: "Cross Littleton",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
      {
        autorizedBy: "Tully Kuhlmey",
        guestName: "Loren Durant",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9303.76, group: 1832.73, contract: 197.86 },
    roomData: {
      total: 65,
      contract: 3,
      outOfOrder: 1,
      stayOver: 60,
      arrivals: 17,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Marks and Sons", roomCount: 76, revenue: 882.81 },
      { name: "Paucek-Witting", roomCount: 10, revenue: 890.62 },
      { name: "Dach, Weissnat and Prosacco", roomCount: 14, revenue: 578.65 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Corly Kedward",
        guestName: "Fayth Coate",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        autorizedBy: "Roddie Longbottom",
        guestName: "Orin Bigley",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14001.74, group: 1327.37, contract: 1496.22 },
    roomData: {
      total: 94,
      contract: 2,
      outOfOrder: 5,
      stayOver: 38,
      arrivals: 29,
      departures: 7,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Claribel Conyers",
        guestName: "Lidia Toopin",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Corilla Foulstone",
        guestName: "Dedra Bagguley",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14355.56, group: 758.21, contract: 1575.42 },
    roomData: {
      total: 78,
      contract: 7,
      outOfOrder: 9,
      stayOver: 8,
      arrivals: 96,
      departures: 76,
    },
  },
  {
    groupData: [{ name: "Bernier Group", roomCount: 73, revenue: 649.42 }],
    compRoomInfo: [
      {
        autorizedBy: "Marylynne Reckus",
        guestName: "Cami Blaszczynski",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11777.38, group: 1634.45, contract: 1133.02 },
    roomData: {
      total: 31,
      contract: 3,
      outOfOrder: 5,
      stayOver: 78,
      arrivals: 9,
      departures: 13,
    },
  },
  {
    groupData: [
      { name: "Aufderhar Inc", roomCount: 22, revenue: 464.97 },
      { name: "Wolf Group", roomCount: 42, revenue: 511.48 },
      { name: "Hegmann Inc", roomCount: 9, revenue: 342.85 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dena Charrett",
        guestName: "Bink Oakland",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
      {
        autorizedBy: "Ambrosi Goldman",
        guestName: "Melisa Garbutt",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5741.98, group: 1140.63, contract: 933.34 },
    roomData: {
      total: 73,
      contract: 1,
      outOfOrder: 0,
      stayOver: 58,
      arrivals: 25,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Cronin, Wuckert and Yost", roomCount: 35, revenue: 177.26 },
      { name: "Daniel Inc", roomCount: 16, revenue: 364.72 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Eddi Epps",
        guestName: "Waite Goward",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Berk Kubecka",
        guestName: "Vinny McCritichie",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 19135.81, group: 1830.25, contract: 1695.92 },
    roomData: {
      total: 58,
      contract: 1,
      outOfOrder: 9,
      stayOver: 64,
      arrivals: 80,
      departures: 41,
    },
  },
  {
    groupData: [
      { name: "Bahringer Inc", roomCount: 42, revenue: 496.53 },
      { name: "Streich-Muller", roomCount: 44, revenue: 249.23 },
      { name: "Becker-Tremblay", roomCount: 64, revenue: 752.06 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jackelyn Bigmore",
        guestName: "Wallache Alsopp",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10291.26, group: 467.1, contract: 1770.16 },
    roomData: {
      total: 41,
      contract: 3,
      outOfOrder: 0,
      stayOver: 68,
      arrivals: 41,
      departures: 45,
    },
  },
  {
    groupData: [{ name: "Hilpert and Sons", roomCount: 18, revenue: 955.29 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11076.03, group: 1957.19, contract: 1637.79 },
    roomData: {
      total: 49,
      contract: 8,
      outOfOrder: 1,
      stayOver: 19,
      arrivals: 59,
      departures: 51,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Waldemar Adriaan",
        guestName: "Huntley Ogilvy",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13682.5, group: 1934.56, contract: 1914.78 },
    roomData: {
      total: 98,
      contract: 10,
      outOfOrder: 8,
      stayOver: 24,
      arrivals: 34,
      departures: 14,
    },
  },
  {
    groupData: [
      { name: "Nienow-Jerde", roomCount: 57, revenue: 114.33 },
      { name: "Swift, Hoppe and Wyman", roomCount: 46, revenue: 692.28 },
      {
        name: "Pollich, Donnelly and Emmerich",
        roomCount: 13,
        revenue: 968.95,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12364.4, group: 174.21, contract: 962.42 },
    roomData: {
      total: 95,
      contract: 20,
      outOfOrder: 3,
      stayOver: 14,
      arrivals: 54,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Rath, Wilderman and Prohaska", roomCount: 53, revenue: 118.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Alicea Dumelow",
        guestName: "Modestia Barniss",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        autorizedBy: "Sonnie Evill",
        guestName: "Electra Gummie",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7106.57, group: 1971.39, contract: 1585.58 },
    roomData: {
      total: 93,
      contract: 5,
      outOfOrder: 1,
      stayOver: 16,
      arrivals: 56,
      departures: 68,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Olimpia Tootin",
        guestName: "Ashely Heyworth",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
      {
        autorizedBy: "Montague Gonnelly",
        guestName: "Sasha Phillippo",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19968.75, group: 891.05, contract: 514.59 },
    roomData: {
      total: 63,
      contract: 1,
      outOfOrder: 0,
      stayOver: 22,
      arrivals: 72,
      departures: 21,
    },
  },
  {
    groupData: [{ name: "Willms-Kirlin", roomCount: 3, revenue: 875.84 }],
    compRoomInfo: [
      {
        autorizedBy: "Collin Iredale",
        guestName: "Rhetta Leadston",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Nicky Coulman",
        guestName: "Jarvis Apdell",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19539.65, group: 1901.9, contract: 828.62 },
    roomData: {
      total: 65,
      contract: 4,
      outOfOrder: 0,
      stayOver: 37,
      arrivals: 37,
      departures: 49,
    },
  },
  {
    groupData: [{ name: "Larkin-Mitchell", roomCount: 21, revenue: 557.22 }],
    compRoomInfo: [
      {
        autorizedBy: "Kris Gadie",
        guestName: "Peggi De Vaux",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17506.65, group: 1101.51, contract: 540.27 },
    roomData: {
      total: 59,
      contract: 14,
      outOfOrder: 3,
      stayOver: 26,
      arrivals: 7,
      departures: 51,
    },
  },
  {
    groupData: [
      { name: "Wuckert LLC", roomCount: 50, revenue: 489.89 },
      { name: "Hayes, Keebler and Walker", roomCount: 68, revenue: 285.98 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14358.52, group: 935.91, contract: 491.54 },
    roomData: {
      total: 48,
      contract: 2,
      outOfOrder: 5,
      stayOver: 8,
      arrivals: 78,
      departures: 5,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Adoree Sloyan",
        guestName: "Fredelia Handaside",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17497.44, group: 891.48, contract: 1176.71 },
    roomData: {
      total: 61,
      contract: 8,
      outOfOrder: 6,
      stayOver: 62,
      arrivals: 36,
      departures: 18,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Vi Grosier",
        guestName: "Kenny Raselles",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
      {
        autorizedBy: "Lilian Crew",
        guestName: "Marius Ludwell",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13081.31, group: 1786.01, contract: 1565.62 },
    roomData: {
      total: 70,
      contract: 3,
      outOfOrder: 0,
      stayOver: 36,
      arrivals: 25,
      departures: 46,
    },
  },
  {
    groupData: [
      { name: "O'Reilly Group", roomCount: 35, revenue: 177.07 },
      { name: "Lemke-Thiel", roomCount: 75, revenue: 472.39 },
      { name: "Kutch, Brown and Hintz", roomCount: 7, revenue: 501.66 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7949.72, group: 1766.99, contract: 808.08 },
    roomData: {
      total: 78,
      contract: 4,
      outOfOrder: 2,
      stayOver: 58,
      arrivals: 1,
      departures: 2,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ernaline Woollett",
        guestName: "Neille Joskowicz",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Tristan Rawstorn",
        guestName: "Dominik Ludwell",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19130.32, group: 601.38, contract: 1438.62 },
    roomData: {
      total: 92,
      contract: 4,
      outOfOrder: 9,
      stayOver: 1,
      arrivals: 90,
      departures: 18,
    },
  },
  {
    groupData: [
      { name: "Runte-Schamberger", roomCount: 43, revenue: 697.74 },
      { name: "Strosin Inc", roomCount: 100, revenue: 256.93 },
      { name: "Torphy-Cormier", roomCount: 25, revenue: 881.79 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Susanetta Knightsbridge",
        guestName: "Arluene Kilby",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
      {
        autorizedBy: "Keely Leppington",
        guestName: "Kleon Carl",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18637.03, group: 649.46, contract: 1258.33 },
    roomData: {
      total: 75,
      contract: 11,
      outOfOrder: 7,
      stayOver: 31,
      arrivals: 5,
      departures: 18,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Margaretta Lidbetter",
        guestName: "Barn Headington",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18214.52, group: 298.0, contract: 1236.31 },
    roomData: {
      total: 85,
      contract: 10,
      outOfOrder: 8,
      stayOver: 47,
      arrivals: 46,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Spinka-Pagac", roomCount: 85, revenue: 436.55 },
      { name: "Collier, Kohler and Purdy", roomCount: 86, revenue: 820.24 },
      { name: "Treutel, Gleason and Prohaska", roomCount: 30, revenue: 352.74 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Andre Parkinson",
        guestName: "Madelaine Applin",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19318.86, group: 1224.79, contract: 976.88 },
    roomData: {
      total: 45,
      contract: 1,
      outOfOrder: 0,
      stayOver: 74,
      arrivals: 84,
      departures: 76,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 19131.18, group: 1316.19, contract: 1722.43 },
    roomData: {
      total: 22,
      contract: 1,
      outOfOrder: 3,
      stayOver: 53,
      arrivals: 66,
      departures: 41,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Barbie Cerman",
        guestName: "Karina Densie",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8748.87, group: 1261.75, contract: 1845.81 },
    roomData: {
      total: 32,
      contract: 9,
      outOfOrder: 2,
      stayOver: 24,
      arrivals: 88,
      departures: 21,
    },
  },
  {
    groupData: [
      { name: "Braun-Prohaska", roomCount: 22, revenue: 606.43 },
      { name: "Nitzsche, Mante and Dibbert", roomCount: 29, revenue: 587.55 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Vickie Terrelly",
        guestName: "Duff De Filippi",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16926.73, group: 428.96, contract: 201.15 },
    roomData: {
      total: 62,
      contract: 1,
      outOfOrder: 4,
      stayOver: 21,
      arrivals: 11,
      departures: 14,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18023.1, group: 1566.89, contract: 1630.15 },
    roomData: {
      total: 86,
      contract: 20,
      outOfOrder: 3,
      stayOver: 2,
      arrivals: 81,
      departures: 60,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5310.05, group: 1929.75, contract: 465.94 },
    roomData: {
      total: 48,
      contract: 3,
      outOfOrder: 2,
      stayOver: 60,
      arrivals: 37,
      departures: 77,
    },
  },
  {
    groupData: [{ name: "Ferry and Sons", roomCount: 49, revenue: 927.82 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15638.9, group: 636.34, contract: 1298.08 },
    roomData: {
      total: 94,
      contract: 12,
      outOfOrder: 9,
      stayOver: 70,
      arrivals: 67,
      departures: 47,
    },
  },
  {
    groupData: [{ name: "Klein-Kreiger", roomCount: 70, revenue: 827.18 }],
    compRoomInfo: [
      {
        autorizedBy: "Patrizius Greschke",
        guestName: "Leroy Burkert",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
      {
        autorizedBy: "Ortensia Pestridge",
        guestName: "Herschel Dimnage",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7875.24, group: 1640.42, contract: 478.87 },
    roomData: {
      total: 64,
      contract: 6,
      outOfOrder: 5,
      stayOver: 77,
      arrivals: 59,
      departures: 49,
    },
  },
  {
    groupData: [
      { name: "Walker, Mertz and Bode", roomCount: 12, revenue: 968.13 },
      { name: "Ullrich-White", roomCount: 39, revenue: 775.23 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13706.62, group: 644.85, contract: 255.67 },
    roomData: {
      total: 27,
      contract: 9,
      outOfOrder: 0,
      stayOver: 28,
      arrivals: 20,
      departures: 46,
    },
  },
  {
    groupData: [
      {
        name: "Bergstrom, Turcotte and Langworth",
        roomCount: 92,
        revenue: 430.33,
      },
      {
        name: "Hodkiewicz, Collier and Cartwright",
        roomCount: 67,
        revenue: 517.73,
      },
      { name: "Keeling-Goldner", roomCount: 11, revenue: 336.54 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Yovonnda Giurio",
        guestName: "Errol Isitt",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
      {
        autorizedBy: "Hedi Popham",
        guestName: "Nomi Newart",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8928.72, group: 1252.71, contract: 1044.37 },
    roomData: {
      total: 48,
      contract: 16,
      outOfOrder: 0,
      stayOver: 46,
      arrivals: 21,
      departures: 35,
    },
  },
  {
    groupData: [
      { name: "Bogisich Group", roomCount: 67, revenue: 371.08 },
      { name: "Kirlin Inc", roomCount: 61, revenue: 839.84 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Reba Eagland",
        guestName: "Mill Kinforth",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11699.5, group: 713.21, contract: 510.01 },
    roomData: {
      total: 42,
      contract: 12,
      outOfOrder: 1,
      stayOver: 3,
      arrivals: 74,
      departures: 11,
    },
  },
  {
    groupData: [
      { name: "O'Conner-Jenkins", roomCount: 28, revenue: 828.94 },
      { name: "Lockman, Sanford and Koch", roomCount: 10, revenue: 657.14 },
      { name: "Torp-Jacobi", roomCount: 95, revenue: 208.75 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Rabbi Spore",
        guestName: "Dorris Rattray",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16623.79, group: 959.22, contract: 533.91 },
    roomData: {
      total: 88,
      contract: 12,
      outOfOrder: 5,
      stayOver: 47,
      arrivals: 37,
      departures: 52,
    },
  },
  {
    groupData: [
      { name: "Lakin, Conroy and Greenfelder", roomCount: 19, revenue: 764.27 },
      { name: "Veum, Mraz and Williamson", roomCount: 80, revenue: 957.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Giuseppe Durber",
        guestName: "Nat Bloxsome",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6427.6, group: 553.09, contract: 1065.89 },
    roomData: {
      total: 47,
      contract: 1,
      outOfOrder: 7,
      stayOver: 50,
      arrivals: 61,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Lakin Inc", roomCount: 64, revenue: 737.05 },
      { name: "Kulas Group", roomCount: 52, revenue: 943.52 },
      { name: "Hirthe Group", roomCount: 30, revenue: 870.46 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13193.81, group: 1581.92, contract: 665.17 },
    roomData: {
      total: 23,
      contract: 19,
      outOfOrder: 6,
      stayOver: 46,
      arrivals: 92,
      departures: 32,
    },
  },
  {
    groupData: [{ name: "Gleason Inc", roomCount: 36, revenue: 939.26 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16284.55, group: 1809.14, contract: 311.08 },
    roomData: {
      total: 36,
      contract: 19,
      outOfOrder: 7,
      stayOver: 32,
      arrivals: 97,
      departures: 16,
    },
  },
  {
    groupData: [
      { name: "Quitzon Inc", roomCount: 22, revenue: 356.57 },
      { name: "Runolfsdottir and Sons", roomCount: 60, revenue: 272.92 },
      { name: "Kozey-Blanda", roomCount: 31, revenue: 263.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Justus Paulot",
        guestName: "Myrtle Bahl",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15979.63, group: 897.42, contract: 1701.55 },
    roomData: {
      total: 76,
      contract: 9,
      outOfOrder: 3,
      stayOver: 49,
      arrivals: 87,
      departures: 14,
    },
  },
  {
    groupData: [
      { name: "Sipes-Mayert", roomCount: 70, revenue: 950.82 },
      { name: "Hand-Littel", roomCount: 5, revenue: 700.65 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9161.91, group: 224.43, contract: 1380.15 },
    roomData: {
      total: 53,
      contract: 2,
      outOfOrder: 7,
      stayOver: 44,
      arrivals: 55,
      departures: 12,
    },
  },
  {
    groupData: [
      { name: "Mosciski, Bartell and Klein", roomCount: 22, revenue: 731.42 },
      { name: "Maggio-Jacobson", roomCount: 62, revenue: 570.5 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Philipa Zuanelli",
        guestName: "Timmie Symondson",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
      {
        autorizedBy: "Angeli Benezeit",
        guestName: "Spike Mochan",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13259.39, group: 1398.05, contract: 1960.8 },
    roomData: {
      total: 80,
      contract: 1,
      outOfOrder: 8,
      stayOver: 21,
      arrivals: 22,
      departures: 0,
    },
  },
  {
    groupData: [
      { name: "Lockman, Erdman and Fritsch", roomCount: 74, revenue: 883.86 },
      { name: "Funk, Schinner and Green", roomCount: 10, revenue: 105.45 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18833.73, group: 1711.4, contract: 1539.5 },
    roomData: {
      total: 77,
      contract: 16,
      outOfOrder: 4,
      stayOver: 29,
      arrivals: 89,
      departures: 37,
    },
  },
  {
    groupData: [
      { name: "Schultz-McGlynn", roomCount: 89, revenue: 570.91 },
      { name: "Braun LLC", roomCount: 96, revenue: 838.45 },
      { name: "Heller LLC", roomCount: 67, revenue: 395.15 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Rosco Dunkerley",
        guestName: "Fifine Howley",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14714.35, group: 1925.62, contract: 868.68 },
    roomData: {
      total: 67,
      contract: 12,
      outOfOrder: 8,
      stayOver: 27,
      arrivals: 99,
      departures: 47,
    },
  },
  {
    groupData: [
      { name: "Bosco, Bartell and Schmitt", roomCount: 93, revenue: 906.33 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18337.81, group: 1584.64, contract: 1567.06 },
    roomData: {
      total: 73,
      contract: 7,
      outOfOrder: 8,
      stayOver: 12,
      arrivals: 11,
      departures: 71,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12934.6, group: 301.59, contract: 624.1 },
    roomData: {
      total: 47,
      contract: 12,
      outOfOrder: 3,
      stayOver: 16,
      arrivals: 1,
      departures: 33,
    },
  },
  {
    groupData: [
      { name: "Jacobs, Ritchie and Casper", roomCount: 56, revenue: 671.36 },
      { name: "Kassulke and Sons", roomCount: 58, revenue: 770.15 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Marti Warde",
        guestName: "Bennie Geall",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
      {
        autorizedBy: "Arlana Mundwell",
        guestName: "Cassaundra Laxton",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19098.05, group: 830.33, contract: 182.25 },
    roomData: {
      total: 66,
      contract: 8,
      outOfOrder: 5,
      stayOver: 52,
      arrivals: 96,
      departures: 20,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Amie Slaughter",
        guestName: "Andie Ciotti",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5050.66, group: 312.4, contract: 1357.43 },
    roomData: {
      total: 55,
      contract: 2,
      outOfOrder: 3,
      stayOver: 66,
      arrivals: 64,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "Cremin-Sawayn", roomCount: 7, revenue: 115.52 },
      { name: "Ruecker-Kreiger", roomCount: 95, revenue: 725.34 },
      { name: "D'Amore, Ruecker and Dare", roomCount: 88, revenue: 279.43 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Hugo Hanlin",
        guestName: "William MacVaugh",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
      {
        autorizedBy: "Maisie Hain",
        guestName: "Annemarie Tureville",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13525.56, group: 118.95, contract: 1300.59 },
    roomData: {
      total: 53,
      contract: 3,
      outOfOrder: 7,
      stayOver: 31,
      arrivals: 69,
      departures: 47,
    },
  },
  {
    groupData: [
      { name: "Pouros-Keeling", roomCount: 82, revenue: 414.16 },
      { name: "Cruickshank and Sons", roomCount: 7, revenue: 116.23 },
      { name: "Price-Schultz", roomCount: 34, revenue: 996.8 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Brenden Hawyes",
        guestName: "Allie Blevin",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15137.52, group: 1474.83, contract: 1905.67 },
    roomData: {
      total: 98,
      contract: 19,
      outOfOrder: 3,
      stayOver: 17,
      arrivals: 56,
      departures: 5,
    },
  },
  {
    groupData: [
      { name: "Kuhn, Yundt and Bergnaum", roomCount: 55, revenue: 152.72 },
      { name: "Lemke-Hauck", roomCount: 77, revenue: 919.3 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 13335.02, group: 198.36, contract: 784.1 },
    roomData: {
      total: 32,
      contract: 13,
      outOfOrder: 0,
      stayOver: 43,
      arrivals: 16,
      departures: 18,
    },
  },
  {
    groupData: [{ name: "Schowalter Group", roomCount: 75, revenue: 513.34 }],
    compRoomInfo: [
      {
        autorizedBy: "Urbano Dunderdale",
        guestName: "Baird Angrick",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Trudey Monteaux",
        guestName: "Alain Baskwell",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 12356.33, group: 1302.51, contract: 178.8 },
    roomData: {
      total: 33,
      contract: 17,
      outOfOrder: 0,
      stayOver: 69,
      arrivals: 84,
      departures: 20,
    },
  },
  {
    groupData: [
      { name: "Ratke and Sons", roomCount: 37, revenue: 681.25 },
      { name: "Daugherty, Senger and Larkin", roomCount: 96, revenue: 275.27 },
      { name: "Crooks-Bayer", roomCount: 24, revenue: 533.47 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Red Halligan",
        guestName: "Austin Latty",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        autorizedBy: "Pace Kadar",
        guestName: "Myca Lewis",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18619.2, group: 1047.02, contract: 1646.99 },
    roomData: {
      total: 72,
      contract: 19,
      outOfOrder: 1,
      stayOver: 15,
      arrivals: 89,
      departures: 4,
    },
  },
  {
    groupData: [{ name: "Koepp-Rath", roomCount: 67, revenue: 883.59 }],
    compRoomInfo: [
      {
        autorizedBy: "Darbie Lemary",
        guestName: "Margaretta Enric",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6646.1, group: 1818.34, contract: 1764.97 },
    roomData: {
      total: 62,
      contract: 9,
      outOfOrder: 2,
      stayOver: 19,
      arrivals: 26,
      departures: 52,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17965.26, group: 1231.43, contract: 1913.96 },
    roomData: {
      total: 61,
      contract: 7,
      outOfOrder: 4,
      stayOver: 50,
      arrivals: 82,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Davis-Crona", roomCount: 36, revenue: 797.16 },
      {
        name: "Bartoletti, Kulas and Parisian",
        roomCount: 99,
        revenue: 597.06,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11857.54, group: 958.66, contract: 1457.29 },
    roomData: {
      total: 42,
      contract: 16,
      outOfOrder: 3,
      stayOver: 38,
      arrivals: 28,
      departures: 35,
    },
  },
  {
    groupData: [{ name: "Walsh-Lynch", roomCount: 42, revenue: 199.57 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5644.01, group: 774.67, contract: 993.44 },
    roomData: {
      total: 99,
      contract: 5,
      outOfOrder: 4,
      stayOver: 43,
      arrivals: 87,
      departures: 58,
    },
  },
  {
    groupData: [
      { name: "Block-Steuber", roomCount: 2, revenue: 654.22 },
      { name: "Prosacco-Halvorson", roomCount: 3, revenue: 777.32 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jinny Meins",
        guestName: "Tomi Kinnach",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12412.7, group: 348.07, contract: 490.95 },
    roomData: {
      total: 74,
      contract: 10,
      outOfOrder: 7,
      stayOver: 61,
      arrivals: 76,
      departures: 76,
    },
  },
  {
    groupData: [
      { name: "Kutch LLC", roomCount: 39, revenue: 767.87 },
      { name: "Kling and Sons", roomCount: 63, revenue: 239.19 },
      { name: "White LLC", roomCount: 58, revenue: 967.74 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 12417.69, group: 1580.72, contract: 664.75 },
    roomData: {
      total: 26,
      contract: 20,
      outOfOrder: 4,
      stayOver: 79,
      arrivals: 49,
      departures: 27,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7492.12, group: 273.03, contract: 1244.4 },
    roomData: {
      total: 91,
      contract: 1,
      outOfOrder: 4,
      stayOver: 36,
      arrivals: 84,
      departures: 58,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 18767.95, group: 761.19, contract: 1072.97 },
    roomData: {
      total: 57,
      contract: 13,
      outOfOrder: 6,
      stayOver: 54,
      arrivals: 53,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Gleason Group", roomCount: 25, revenue: 251.35 },
      { name: "Treutel-Marquardt", roomCount: 99, revenue: 409.69 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16410.14, group: 1399.79, contract: 1892.1 },
    roomData: {
      total: 46,
      contract: 18,
      outOfOrder: 8,
      stayOver: 21,
      arrivals: 83,
      departures: 64,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Tucker Brosi",
        guestName: "Brittani Godball",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 17753.78, group: 1098.37, contract: 1080.62 },
    roomData: {
      total: 93,
      contract: 5,
      outOfOrder: 2,
      stayOver: 37,
      arrivals: 45,
      departures: 31,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Leicester Comport",
        guestName: "Kent Sweating",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        autorizedBy: "Blaire Corkel",
        guestName: "Thomas Shenfisch",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 12973.97, group: 139.31, contract: 749.49 },
    roomData: {
      total: 55,
      contract: 18,
      outOfOrder: 2,
      stayOver: 16,
      arrivals: 8,
      departures: 23,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ermina Rubes",
        guestName: "Gran Monget",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 5378.62, group: 804.06, contract: 925.77 },
    roomData: {
      total: 28,
      contract: 7,
      outOfOrder: 6,
      stayOver: 30,
      arrivals: 0,
      departures: 21,
    },
  },
  {
    groupData: [
      { name: "Beatty and Sons", roomCount: 89, revenue: 141.87 },
      { name: "Bernhard Inc", roomCount: 61, revenue: 123.87 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Harmonia Cuzen",
        guestName: "Ody Furmagier",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
      {
        autorizedBy: "Antonin Tale",
        guestName: "Ofilia Benam",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16049.1, group: 1505.62, contract: 157.58 },
    roomData: {
      total: 100,
      contract: 7,
      outOfOrder: 0,
      stayOver: 48,
      arrivals: 48,
      departures: 18,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16992.22, group: 1026.05, contract: 239.84 },
    roomData: {
      total: 28,
      contract: 19,
      outOfOrder: 7,
      stayOver: 61,
      arrivals: 43,
      departures: 50,
    },
  },
  {
    groupData: [
      { name: "Fritsch-Bailey", roomCount: 67, revenue: 378.08 },
      { name: "Kulas-Herzog", roomCount: 62, revenue: 797.59 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gilly Grassin",
        guestName: "Monro Anwell",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        autorizedBy: "Haley Winston",
        guestName: "Barney Celand",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12233.51, group: 1168.95, contract: 956.5 },
    roomData: {
      total: 64,
      contract: 14,
      outOfOrder: 9,
      stayOver: 71,
      arrivals: 7,
      departures: 13,
    },
  },
  {
    groupData: [
      { name: "Ebert-Roob", roomCount: 17, revenue: 799.87 },
      { name: "DuBuque, Legros and Bailey", roomCount: 66, revenue: 178.14 },
      { name: "Paucek Inc", roomCount: 17, revenue: 427.64 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sula Bigadike",
        guestName: "Jeno McPhillips",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12882.55, group: 1445.37, contract: 752.07 },
    roomData: {
      total: 27,
      contract: 20,
      outOfOrder: 3,
      stayOver: 48,
      arrivals: 31,
      departures: 27,
    },
  },
  {
    groupData: [{ name: "Steuber-Goodwin", roomCount: 59, revenue: 565.37 }],
    compRoomInfo: [
      {
        autorizedBy: "Antonina Houseley",
        guestName: "Sascha Axell",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9532.86, group: 1243.84, contract: 1708.78 },
    roomData: {
      total: 68,
      contract: 20,
      outOfOrder: 7,
      stayOver: 26,
      arrivals: 99,
      departures: 38,
    },
  },
  {
    groupData: [
      { name: "Koch-Langosh", roomCount: 28, revenue: 243.48 },
      { name: "Blick LLC", roomCount: 20, revenue: 728.71 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Tobin Ronan",
        guestName: "Filia Guerner",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7533.65, group: 777.6, contract: 812.64 },
    roomData: {
      total: 39,
      contract: 3,
      outOfOrder: 4,
      stayOver: 15,
      arrivals: 75,
      departures: 71,
    },
  },
  {
    groupData: [
      { name: "Roob-Hoeger", roomCount: 62, revenue: 661.43 },
      { name: "Rempel Inc", roomCount: 96, revenue: 190.97 },
      { name: "Kunde Inc", roomCount: 53, revenue: 189.97 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Madonna Paolillo",
        guestName: "Jelene Orrocks",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5773.82, group: 1054.04, contract: 134.7 },
    roomData: {
      total: 101,
      contract: 18,
      outOfOrder: 5,
      stayOver: 77,
      arrivals: 14,
      departures: 32,
    },
  },
  {
    groupData: [
      {
        name: "Zieme, Marquardt and Balistreri",
        roomCount: 47,
        revenue: 416.48,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 8872.66, group: 390.83, contract: 1399.27 },
    roomData: {
      total: 49,
      contract: 1,
      outOfOrder: 5,
      stayOver: 24,
      arrivals: 95,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Weber, Zemlak and Daniel", roomCount: 22, revenue: 316.11 },
      { name: "Harris-Ziemann", roomCount: 57, revenue: 198.5 },
      { name: "DuBuque Inc", roomCount: 61, revenue: 150.89 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Enriqueta Caine",
        guestName: "Drucill Rief",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Joellyn Forrestill",
        guestName: "Maury Frensch",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12515.59, group: 370.06, contract: 918.03 },
    roomData: {
      total: 31,
      contract: 0,
      outOfOrder: 1,
      stayOver: 33,
      arrivals: 93,
      departures: 31,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Minna De Ruel",
        guestName: "Phillipp Caistor",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 5906.4, group: 918.89, contract: 790.74 },
    roomData: {
      total: 33,
      contract: 1,
      outOfOrder: 7,
      stayOver: 69,
      arrivals: 11,
      departures: 62,
    },
  },
  {
    groupData: [
      { name: "Kerluke, Jacobson and Murray", roomCount: 97, revenue: 779.21 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jesse Lait",
        guestName: "Lonny Dickon",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7556.45, group: 1541.81, contract: 848.84 },
    roomData: {
      total: 26,
      contract: 15,
      outOfOrder: 3,
      stayOver: 25,
      arrivals: 10,
      departures: 17,
    },
  },
  {
    groupData: [
      {
        name: "Stokes, Aufderhar and Wilkinson",
        roomCount: 94,
        revenue: 608.24,
      },
      {
        name: "Schumm, Waelchi and Balistreri",
        roomCount: 82,
        revenue: 171.77,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Marjie Pulbrook",
        guestName: "Dean Paris",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
      {
        autorizedBy: "Rakel Toffolo",
        guestName: "Erl Rouchy",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5714.3, group: 1614.79, contract: 1406.2 },
    roomData: {
      total: 21,
      contract: 20,
      outOfOrder: 7,
      stayOver: 57,
      arrivals: 59,
      departures: 78,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Madella O' Connell",
        guestName: "Nikaniki Everex",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Berthe Swepson",
        guestName: "Nicolette Gomersal",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10637.41, group: 539.51, contract: 1487.27 },
    roomData: {
      total: 21,
      contract: 5,
      outOfOrder: 3,
      stayOver: 73,
      arrivals: 68,
      departures: 25,
    },
  },
  {
    groupData: [
      { name: "Kutch and Sons", roomCount: 44, revenue: 174.12 },
      { name: "Auer-Pfeffer", roomCount: 100, revenue: 669.7 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11344.46, group: 607.34, contract: 498.45 },
    roomData: {
      total: 102,
      contract: 7,
      outOfOrder: 9,
      stayOver: 55,
      arrivals: 87,
      departures: 22,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Angelico McCoish",
        guestName: "Muire Boatwright",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
      {
        autorizedBy: "Gaile McBrearty",
        guestName: "Brynna Farndon",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17026.59, group: 588.45, contract: 1734.29 },
    roomData: {
      total: 59,
      contract: 16,
      outOfOrder: 3,
      stayOver: 46,
      arrivals: 70,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "Stark Inc", roomCount: 7, revenue: 600.9 },
      { name: "Larkin LLC", roomCount: 48, revenue: 443.98 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Tann Puckinghorne",
        guestName: "Kim Biermatowicz",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19637.66, group: 1682.33, contract: 1807.01 },
    roomData: {
      total: 86,
      contract: 19,
      outOfOrder: 3,
      stayOver: 0,
      arrivals: 55,
      departures: 12,
    },
  },
  {
    groupData: [
      { name: "Feil and Sons", roomCount: 55, revenue: 692.1 },
      { name: "Friesen, Larson and Schuppe", roomCount: 50, revenue: 658.28 },
      { name: "Swift Inc", roomCount: 77, revenue: 793.64 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 7913.55, group: 1772.08, contract: 1785.86 },
    roomData: {
      total: 80,
      contract: 11,
      outOfOrder: 4,
      stayOver: 24,
      arrivals: 100,
      departures: 48,
    },
  },
  {
    groupData: [{ name: "Spinka-Kiehn", roomCount: 40, revenue: 165.35 }],
    compRoomInfo: [
      {
        autorizedBy: "Crin Pitcher",
        guestName: "Cooper Ronchetti",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17245.19, group: 833.58, contract: 1599.75 },
    roomData: {
      total: 52,
      contract: 12,
      outOfOrder: 9,
      stayOver: 56,
      arrivals: 47,
      departures: 17,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Georgie Gullivent",
        guestName: "Gwendolyn Bollard",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14818.33, group: 1890.0, contract: 1980.24 },
    roomData: {
      total: 76,
      contract: 10,
      outOfOrder: 3,
      stayOver: 15,
      arrivals: 24,
      departures: 29,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12890.59, group: 1206.79, contract: 1278.25 },
    roomData: {
      total: 55,
      contract: 0,
      outOfOrder: 1,
      stayOver: 19,
      arrivals: 57,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Klein-Hoeger", roomCount: 24, revenue: 696.15 },
      { name: "Mosciski-Crooks", roomCount: 23, revenue: 871.95 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17708.6, group: 1821.55, contract: 1584.47 },
    roomData: {
      total: 62,
      contract: 16,
      outOfOrder: 0,
      stayOver: 44,
      arrivals: 53,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Hickle, Rath and Turner", roomCount: 46, revenue: 132.06 },
      { name: "Jenkins-Kuphal", roomCount: 42, revenue: 984.46 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Zachariah Heningam",
        guestName: "Erda Dyzart",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19483.32, group: 1833.08, contract: 1086.64 },
    roomData: {
      total: 22,
      contract: 16,
      outOfOrder: 6,
      stayOver: 43,
      arrivals: 1,
      departures: 0,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17349.3, group: 166.75, contract: 800.65 },
    roomData: {
      total: 66,
      contract: 13,
      outOfOrder: 9,
      stayOver: 78,
      arrivals: 77,
      departures: 1,
    },
  },
  {
    groupData: [
      { name: "Carroll Group", roomCount: 63, revenue: 639.72 },
      { name: "Streich-Wiegand", roomCount: 69, revenue: 951.9 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15416.97, group: 1953.09, contract: 1817.53 },
    roomData: {
      total: 55,
      contract: 11,
      outOfOrder: 8,
      stayOver: 2,
      arrivals: 31,
      departures: 13,
    },
  },
  {
    groupData: [{ name: "Hoeger Group", roomCount: 2, revenue: 218.25 }],
    compRoomInfo: [
      {
        autorizedBy: "Mic Firebrace",
        guestName: "Mada Greenfield",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
      {
        autorizedBy: "Margalo Hardeman",
        guestName: "Seward Keuneke",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7118.63, group: 1911.73, contract: 1474.18 },
    roomData: {
      total: 83,
      contract: 0,
      outOfOrder: 8,
      stayOver: 60,
      arrivals: 66,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Murray, Bashirian and Wunsch", roomCount: 76, revenue: 133.41 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15084.48, group: 1240.58, contract: 1578.47 },
    roomData: {
      total: 75,
      contract: 0,
      outOfOrder: 6,
      stayOver: 47,
      arrivals: 10,
      departures: 46,
    },
  },
  {
    groupData: [
      { name: "Schmidt-Will", roomCount: 37, revenue: 843.77 },
      { name: "Torp, Nienow and Ankunding", roomCount: 20, revenue: 161.53 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Alexine Bucher",
        guestName: "Domenic Greathead",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15838.3, group: 242.68, contract: 1804.72 },
    roomData: {
      total: 67,
      contract: 15,
      outOfOrder: 0,
      stayOver: 64,
      arrivals: 85,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Kutch-Stark", roomCount: 101, revenue: 759.54 },
      { name: "Mraz LLC", roomCount: 84, revenue: 774.68 },
      {
        name: "Reynolds, Vandervort and Collins",
        roomCount: 15,
        revenue: 193.78,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Elora Duce",
        guestName: "Daloris Papierz",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        autorizedBy: "Wini Scyner",
        guestName: "Skell Tillerton",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 7398.81, group: 1783.56, contract: 1135.18 },
    roomData: {
      total: 58,
      contract: 18,
      outOfOrder: 6,
      stayOver: 20,
      arrivals: 94,
      departures: 34,
    },
  },
  {
    groupData: [
      { name: "Leannon, Marks and Ankunding", roomCount: 13, revenue: 719.68 },
      { name: "Haley Inc", roomCount: 98, revenue: 701.67 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14168.42, group: 1485.26, contract: 1504.44 },
    roomData: {
      total: 49,
      contract: 4,
      outOfOrder: 4,
      stayOver: 49,
      arrivals: 89,
      departures: 2,
    },
  },
  {
    groupData: [
      { name: "Breitenberg Group", roomCount: 73, revenue: 856.57 },
      { name: "Purdy Inc", roomCount: 10, revenue: 324.02 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7585.39, group: 899.52, contract: 956.33 },
    roomData: {
      total: 60,
      contract: 20,
      outOfOrder: 0,
      stayOver: 36,
      arrivals: 11,
      departures: 62,
    },
  },
  {
    groupData: [
      { name: "Considine and Sons", roomCount: 53, revenue: 445.52 },
      { name: "Douglas, Nikolaus and Moore", roomCount: 92, revenue: 783.22 },
      { name: "Ebert-Oberbrunner", roomCount: 72, revenue: 686.57 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dorine Hamerton",
        guestName: "Joeann Brumbie",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7580.92, group: 648.0, contract: 1757.58 },
    roomData: {
      total: 38,
      contract: 17,
      outOfOrder: 3,
      stayOver: 65,
      arrivals: 55,
      departures: 5,
    },
  },
  {
    groupData: [
      {
        name: "Trantow, Heathcote and Schmeler",
        roomCount: 8,
        revenue: 935.89,
      },
      { name: "Jacobs LLC", roomCount: 9, revenue: 319.87 },
      { name: "Hessel-Hegmann", roomCount: 56, revenue: 165.39 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15478.35, group: 1805.82, contract: 897.31 },
    roomData: {
      total: 28,
      contract: 8,
      outOfOrder: 5,
      stayOver: 3,
      arrivals: 82,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Rohan, Swaniawski and Lakin", roomCount: 87, revenue: 119.17 },
      { name: "Koss-Fadel", roomCount: 63, revenue: 689.26 },
      { name: "Spencer LLC", roomCount: 5, revenue: 537.45 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jewelle Crosby",
        guestName: "Dante Hinksen",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11012.76, group: 1798.8, contract: 1014.94 },
    roomData: {
      total: 52,
      contract: 15,
      outOfOrder: 7,
      stayOver: 60,
      arrivals: 55,
      departures: 16,
    },
  },
  {
    groupData: [
      { name: "Cruickshank-Fahey", roomCount: 76, revenue: 774.28 },
      { name: "Harris LLC", roomCount: 20, revenue: 621.72 },
      { name: "Mohr, Purdy and Padberg", roomCount: 101, revenue: 883.28 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Murielle Entwisle",
        guestName: "Michele Gilders",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
      {
        autorizedBy: "Weber McLinden",
        guestName: "Jaimie Geldard",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19534.11, group: 1929.67, contract: 319.62 },
    roomData: {
      total: 98,
      contract: 5,
      outOfOrder: 5,
      stayOver: 73,
      arrivals: 32,
      departures: 37,
    },
  },
  {
    groupData: [
      { name: "Deckow-Tromp", roomCount: 39, revenue: 687.11 },
      { name: "Hilpert Inc", roomCount: 22, revenue: 468.8 },
      { name: "Connelly and Sons", roomCount: 65, revenue: 229.3 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ingelbert Parnby",
        guestName: "Jandy Yearne",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        autorizedBy: "Mahalia Nolder",
        guestName: "Gracia Argrave",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15864.79, group: 279.17, contract: 742.36 },
    roomData: {
      total: 94,
      contract: 2,
      outOfOrder: 9,
      stayOver: 73,
      arrivals: 53,
      departures: 41,
    },
  },
  {
    groupData: [
      { name: "Christiansen, Metz and Hoppe", roomCount: 27, revenue: 516.92 },
      { name: "Deckow and Sons", roomCount: 70, revenue: 831.04 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Audrye Ruffli",
        guestName: "Jone Rowth",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5096.26, group: 592.99, contract: 1845.98 },
    roomData: {
      total: 52,
      contract: 19,
      outOfOrder: 9,
      stayOver: 56,
      arrivals: 71,
      departures: 18,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Darrin Gatman",
        guestName: "Oates Bennington",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10289.68, group: 1345.61, contract: 1706.26 },
    roomData: {
      total: 61,
      contract: 2,
      outOfOrder: 5,
      stayOver: 46,
      arrivals: 27,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Schuster, Boehm and Bartoletti", roomCount: 11, revenue: 194.9 },
      { name: "Kunze, Welch and Morar", roomCount: 91, revenue: 550.38 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Valaree Diglin",
        guestName: "Jacklyn Froome",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Keelia McBrady",
        guestName: "Bentley Raysdale",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14332.21, group: 1768.28, contract: 236.27 },
    roomData: {
      total: 73,
      contract: 20,
      outOfOrder: 9,
      stayOver: 1,
      arrivals: 90,
      departures: 28,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19553.99, group: 1598.48, contract: 972.07 },
    roomData: {
      total: 97,
      contract: 19,
      outOfOrder: 8,
      stayOver: 28,
      arrivals: 5,
      departures: 57,
    },
  },
  {
    groupData: [
      { name: "Hagenes LLC", roomCount: 95, revenue: 691.87 },
      { name: "Cormier-Harris", roomCount: 45, revenue: 945.65 },
      { name: "Nicolas, Roberts and Crooks", roomCount: 36, revenue: 693.41 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cynthy Cranefield",
        guestName: "Charissa Matisoff",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Rollins Yeulet",
        guestName: "Nicola Hansom",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 16409.33, group: 1220.29, contract: 854.1 },
    roomData: {
      total: 67,
      contract: 11,
      outOfOrder: 0,
      stayOver: 28,
      arrivals: 29,
      departures: 58,
    },
  },
  {
    groupData: [
      { name: "Collier, Pagac and Koepp", roomCount: 68, revenue: 327.27 },
      { name: "Ryan, Kuhlman and Deckow", roomCount: 67, revenue: 208.85 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12655.79, group: 796.32, contract: 856.02 },
    roomData: {
      total: 55,
      contract: 14,
      outOfOrder: 3,
      stayOver: 76,
      arrivals: 60,
      departures: 49,
    },
  },
  {
    groupData: [
      { name: "Koss-Hirthe", roomCount: 22, revenue: 500.34 },
      { name: "Marks-Denesik", roomCount: 102, revenue: 822.78 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Shari Diehn",
        guestName: "Morley Cancellieri",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18146.3, group: 1708.6, contract: 1193.72 },
    roomData: {
      total: 54,
      contract: 17,
      outOfOrder: 8,
      stayOver: 74,
      arrivals: 32,
      departures: 76,
    },
  },
  {
    groupData: [{ name: "Abshire Group", roomCount: 48, revenue: 187.05 }],
    compRoomInfo: [
      {
        autorizedBy: "Wrennie Arbuckle",
        guestName: "Paten Cleveley",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18194.72, group: 1199.64, contract: 1506.1 },
    roomData: {
      total: 27,
      contract: 7,
      outOfOrder: 5,
      stayOver: 17,
      arrivals: 40,
      departures: 53,
    },
  },
  {
    groupData: [{ name: "MacGyver LLC", roomCount: 91, revenue: 774.57 }],
    compRoomInfo: [
      {
        autorizedBy: "Elizabet Brownsey",
        guestName: "Filip Gregorio",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
      {
        autorizedBy: "Rad Priestnall",
        guestName: "Sutherland Dennison",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9402.78, group: 108.49, contract: 105.18 },
    roomData: {
      total: 41,
      contract: 13,
      outOfOrder: 4,
      stayOver: 73,
      arrivals: 0,
      departures: 65,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Yoshi Downham",
        guestName: "Vanny Berecloth",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
      {
        autorizedBy: "Chas O'Cannavan",
        guestName: "Ofilia Fosdike",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15447.09, group: 129.69, contract: 1353.47 },
    roomData: {
      total: 74,
      contract: 8,
      outOfOrder: 8,
      stayOver: 68,
      arrivals: 4,
      departures: 36,
    },
  },
  {
    groupData: [
      { name: "Kulas-Glover", roomCount: 16, revenue: 858.89 },
      { name: "Gibson-Lemke", roomCount: 73, revenue: 228.96 },
      { name: "Lueilwitz-Padberg", roomCount: 27, revenue: 392.83 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14889.12, group: 549.69, contract: 1818.07 },
    roomData: {
      total: 74,
      contract: 20,
      outOfOrder: 6,
      stayOver: 1,
      arrivals: 93,
      departures: 40,
    },
  },
  {
    groupData: [
      { name: "Hyatt, Murazik and O'Reilly", roomCount: 84, revenue: 270.64 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8831.81, group: 1169.7, contract: 105.0 },
    roomData: {
      total: 65,
      contract: 3,
      outOfOrder: 3,
      stayOver: 28,
      arrivals: 94,
      departures: 27,
    },
  },
  {
    groupData: [{ name: "Gulgowski Group", roomCount: 10, revenue: 230.44 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5643.4, group: 1856.17, contract: 778.8 },
    roomData: {
      total: 62,
      contract: 13,
      outOfOrder: 3,
      stayOver: 59,
      arrivals: 0,
      departures: 43,
    },
  },
  {
    groupData: [{ name: "Fisher-Doyle", roomCount: 19, revenue: 429.27 }],
    compRoomInfo: [
      {
        autorizedBy: "Dorelia Caspell",
        guestName: "Ben Catford",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
      {
        autorizedBy: "Brande Lightbody",
        guestName: "Marrissa Dwerryhouse",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 6617.28, group: 746.52, contract: 1248.06 },
    roomData: {
      total: 76,
      contract: 1,
      outOfOrder: 1,
      stayOver: 6,
      arrivals: 40,
      departures: 1,
    },
  },
  {
    groupData: [{ name: "Ernser-Schoen", roomCount: 92, revenue: 866.65 }],
    compRoomInfo: [
      {
        autorizedBy: "Ruthe Scirman",
        guestName: "Hope Kupec",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
      {
        autorizedBy: "Mohandis Dunbar",
        guestName: "Zara Batchley",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17249.2, group: 1196.68, contract: 917.63 },
    roomData: {
      total: 83,
      contract: 12,
      outOfOrder: 8,
      stayOver: 53,
      arrivals: 53,
      departures: 40,
    },
  },
  {
    groupData: [
      { name: "Connelly-Upton", roomCount: 29, revenue: 707.6 },
      { name: "Schinner-Kulas", roomCount: 35, revenue: 364.68 },
      { name: "Flatley-Kris", roomCount: 35, revenue: 638.45 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bobinette Heatlie",
        guestName: "Babita Bartlomieczak",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6960.45, group: 814.78, contract: 105.74 },
    roomData: {
      total: 72,
      contract: 5,
      outOfOrder: 0,
      stayOver: 21,
      arrivals: 5,
      departures: 66,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Judie Terrazzo",
        guestName: "Darius Hibling",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14832.61, group: 1018.83, contract: 846.24 },
    roomData: {
      total: 100,
      contract: 8,
      outOfOrder: 8,
      stayOver: 14,
      arrivals: 40,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Koch-Donnelly", roomCount: 34, revenue: 177.8 },
      { name: "Legros-Jast", roomCount: 65, revenue: 542.81 },
      { name: "Leffler Inc", roomCount: 6, revenue: 940.63 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Philippine Sehorsch",
        guestName: "Judd Libbis",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
      {
        autorizedBy: "Efrem Souster",
        guestName: "Inesita Casajuana",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15740.52, group: 537.04, contract: 1493.79 },
    roomData: {
      total: 88,
      contract: 4,
      outOfOrder: 9,
      stayOver: 28,
      arrivals: 88,
      departures: 72,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14091.57, group: 985.23, contract: 442.1 },
    roomData: {
      total: 59,
      contract: 7,
      outOfOrder: 6,
      stayOver: 32,
      arrivals: 37,
      departures: 67,
    },
  },
  {
    groupData: [
      { name: "Yundt, Wiegand and Ledner", roomCount: 60, revenue: 737.59 },
      { name: "Trantow LLC", roomCount: 100, revenue: 212.49 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Perle Jellett",
        guestName: "Laverna Salvadori",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Jakie Brownlow",
        guestName: "Son Free",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7152.27, group: 1486.77, contract: 177.72 },
    roomData: {
      total: 55,
      contract: 7,
      outOfOrder: 2,
      stayOver: 12,
      arrivals: 100,
      departures: 26,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19360.12, group: 970.83, contract: 280.91 },
    roomData: {
      total: 65,
      contract: 6,
      outOfOrder: 4,
      stayOver: 41,
      arrivals: 37,
      departures: 34,
    },
  },
  {
    groupData: [{ name: "Heidenreich-Beahan", roomCount: 99, revenue: 370.92 }],
    compRoomInfo: [
      {
        autorizedBy: "Phillipe Waddington",
        guestName: "Mercie Carwardine",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6343.98, group: 1028.49, contract: 1112.05 },
    roomData: {
      total: 88,
      contract: 12,
      outOfOrder: 7,
      stayOver: 55,
      arrivals: 10,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Schmitt, Pollich and Hoeger", roomCount: 66, revenue: 967.76 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jerald Fury",
        guestName: "Travis Broome",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19125.11, group: 307.11, contract: 1997.13 },
    roomData: {
      total: 74,
      contract: 8,
      outOfOrder: 8,
      stayOver: 55,
      arrivals: 89,
      departures: 23,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Magdaia Denys",
        guestName: "Lira Fey",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5150.29, group: 1029.26, contract: 1429.05 },
    roomData: {
      total: 93,
      contract: 6,
      outOfOrder: 4,
      stayOver: 17,
      arrivals: 64,
      departures: 32,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Cassie Creaney",
        guestName: "Calla Camoys",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8824.91, group: 1198.76, contract: 149.19 },
    roomData: {
      total: 79,
      contract: 9,
      outOfOrder: 5,
      stayOver: 72,
      arrivals: 31,
      departures: 2,
    },
  },
  {
    groupData: [
      { name: "Rodriguez-Bradtke", roomCount: 56, revenue: 610.18 },
      { name: "Haley-Roberts", roomCount: 18, revenue: 923.26 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Angelika Bramhill",
        guestName: "Delila Djurisic",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
      {
        autorizedBy: "Perry Kimbrough",
        guestName: "Broddy Extance",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16936.95, group: 841.55, contract: 509.4 },
    roomData: {
      total: 64,
      contract: 11,
      outOfOrder: 1,
      stayOver: 29,
      arrivals: 69,
      departures: 15,
    },
  },
  {
    groupData: [{ name: "Hyatt-Wisozk", roomCount: 24, revenue: 372.53 }],
    compRoomInfo: [
      {
        autorizedBy: "Marylinda Harkins",
        guestName: "Angus McQuaid",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
      {
        autorizedBy: "Meggy Koeppke",
        guestName: "Adrianne Curwen",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12376.03, group: 292.38, contract: 779.34 },
    roomData: {
      total: 101,
      contract: 3,
      outOfOrder: 8,
      stayOver: 46,
      arrivals: 18,
      departures: 48,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Zelig Bycraft",
        guestName: "Tersina Livesay",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11164.32, group: 1894.21, contract: 939.83 },
    roomData: {
      total: 50,
      contract: 5,
      outOfOrder: 2,
      stayOver: 71,
      arrivals: 61,
      departures: 23,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Eileen Hathaway",
        guestName: "Chic Djurevic",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11792.99, group: 892.15, contract: 430.46 },
    roomData: {
      total: 30,
      contract: 9,
      outOfOrder: 9,
      stayOver: 26,
      arrivals: 2,
      departures: 37,
    },
  },
  {
    groupData: [
      { name: "Lebsack Group", roomCount: 78, revenue: 787.43 },
      { name: "Smitham-Rippin", roomCount: 75, revenue: 961.16 },
      { name: "Kirlin, Carroll and Dickinson", roomCount: 50, revenue: 411.81 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gretal Woolcocks",
        guestName: "Minni Moehle",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10420.36, group: 612.16, contract: 208.1 },
    roomData: {
      total: 66,
      contract: 18,
      outOfOrder: 1,
      stayOver: 17,
      arrivals: 4,
      departures: 37,
    },
  },
  {
    groupData: [
      { name: "Gerhold, Schulist and Crist", roomCount: 84, revenue: 321.68 },
      { name: "Ondricka, Okuneva and Sanford", roomCount: 86, revenue: 227.68 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Aimil Dalgety",
        guestName: "Linea Wondraschek",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16920.17, group: 107.52, contract: 193.94 },
    roomData: {
      total: 30,
      contract: 1,
      outOfOrder: 5,
      stayOver: 1,
      arrivals: 40,
      departures: 36,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14727.01, group: 659.69, contract: 1566.21 },
    roomData: {
      total: 81,
      contract: 9,
      outOfOrder: 0,
      stayOver: 73,
      arrivals: 54,
      departures: 78,
    },
  },
  {
    groupData: [
      { name: "O'Reilly, Senger and Crooks", roomCount: 63, revenue: 623.11 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17879.64, group: 1323.5, contract: 659.57 },
    roomData: {
      total: 59,
      contract: 6,
      outOfOrder: 8,
      stayOver: 52,
      arrivals: 98,
      departures: 74,
    },
  },
  {
    groupData: [
      { name: "Brakus, Parisian and Howell", roomCount: 72, revenue: 886.59 },
      { name: "Kerluke Inc", roomCount: 65, revenue: 138.14 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16020.1, group: 1294.39, contract: 838.18 },
    roomData: {
      total: 94,
      contract: 17,
      outOfOrder: 9,
      stayOver: 65,
      arrivals: 0,
      departures: 70,
    },
  },
  {
    groupData: [
      { name: "Spencer and Sons", roomCount: 15, revenue: 968.82 },
      { name: "Herman LLC", roomCount: 96, revenue: 415.76 },
      { name: "Bernhard-Lynch", roomCount: 8, revenue: 988.26 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sari Macro",
        guestName: "Barde Shields",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
      {
        autorizedBy: "Giovanni Trunks",
        guestName: "Rivalee Burnhard",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6200.48, group: 1330.36, contract: 1109.49 },
    roomData: {
      total: 95,
      contract: 0,
      outOfOrder: 0,
      stayOver: 36,
      arrivals: 83,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Dickens-Weissnat", roomCount: 56, revenue: 778.36 },
      { name: "Ferry, Tremblay and Pouros", roomCount: 98, revenue: 513.78 },
      {
        name: "Cummerata, Cummings and Herzog",
        roomCount: 81,
        revenue: 903.79,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ferrell MacCaffrey",
        guestName: "Averill Levi",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
      {
        autorizedBy: "Flory Baylie",
        guestName: "Feodora Hanmore",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 8539.78, group: 603.41, contract: 1910.76 },
    roomData: {
      total: 81,
      contract: 8,
      outOfOrder: 3,
      stayOver: 20,
      arrivals: 94,
      departures: 68,
    },
  },
  {
    groupData: [{ name: "Heathcote and Sons", roomCount: 44, revenue: 755.58 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14912.46, group: 678.22, contract: 1116.21 },
    roomData: {
      total: 37,
      contract: 1,
      outOfOrder: 9,
      stayOver: 63,
      arrivals: 59,
      departures: 7,
    },
  },
  {
    groupData: [{ name: "Emmerich-Denesik", roomCount: 74, revenue: 859.21 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11344.59, group: 1996.87, contract: 520.3 },
    roomData: {
      total: 97,
      contract: 7,
      outOfOrder: 9,
      stayOver: 50,
      arrivals: 13,
      departures: 60,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Colan Jeaffreson",
        guestName: "Sal Downage",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
      {
        autorizedBy: "Tomasina Bigg",
        guestName: "Granthem Stainer",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6588.53, group: 884.31, contract: 910.02 },
    roomData: {
      total: 78,
      contract: 1,
      outOfOrder: 8,
      stayOver: 44,
      arrivals: 74,
      departures: 79,
    },
  },
  {
    groupData: [
      { name: "Hermiston-Effertz", roomCount: 69, revenue: 277.24 },
      { name: "Schaden, Donnelly and Marvin", roomCount: 49, revenue: 824.4 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Shirlee Leethem",
        guestName: "Nobe Seiler",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Jose Boules",
        guestName: "Hayes Leece",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15476.1, group: 913.93, contract: 758.39 },
    roomData: {
      total: 98,
      contract: 14,
      outOfOrder: 0,
      stayOver: 36,
      arrivals: 74,
      departures: 20,
    },
  },
  {
    groupData: [
      { name: "Beer, O'Hara and Harber", roomCount: 69, revenue: 847.74 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8561.73, group: 379.07, contract: 442.27 },
    roomData: {
      total: 94,
      contract: 2,
      outOfOrder: 7,
      stayOver: 48,
      arrivals: 89,
      departures: 20,
    },
  },
  {
    groupData: [
      { name: "Labadie-Kautzer", roomCount: 30, revenue: 314.96 },
      { name: "Beatty, Bahringer and McKenzie", roomCount: 26, revenue: 336.0 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bernadette Bouttell",
        guestName: "Antonetta Prisk",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
      {
        autorizedBy: "Gui Oxberry",
        guestName: "Caldwell Van Velde",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17802.87, group: 1265.57, contract: 244.62 },
    roomData: {
      total: 77,
      contract: 3,
      outOfOrder: 7,
      stayOver: 2,
      arrivals: 26,
      departures: 56,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Scott Rubroe",
        guestName: "Rob Geerling",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
      {
        autorizedBy: "Ainsley Sambidge",
        guestName: "Margy Amberger",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7612.37, group: 1806.47, contract: 162.05 },
    roomData: {
      total: 73,
      contract: 13,
      outOfOrder: 0,
      stayOver: 30,
      arrivals: 95,
      departures: 31,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Justus Balmadier",
        guestName: "Rudyard Kermannes",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
      {
        autorizedBy: "Mabelle Mifflin",
        guestName: "Brigg Goldston",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13575.04, group: 311.66, contract: 563.3 },
    roomData: {
      total: 101,
      contract: 20,
      outOfOrder: 9,
      stayOver: 26,
      arrivals: 81,
      departures: 14,
    },
  },
  {
    groupData: [
      { name: "Smitham, Waters and Klein", roomCount: 94, revenue: 298.65 },
      { name: "Gottlieb, Reichel and Morar", roomCount: 67, revenue: 251.85 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11143.55, group: 300.71, contract: 919.45 },
    roomData: {
      total: 69,
      contract: 3,
      outOfOrder: 0,
      stayOver: 68,
      arrivals: 77,
      departures: 41,
    },
  },
  {
    groupData: [
      { name: "Christiansen LLC", roomCount: 34, revenue: 333.58 },
      { name: "Lockman-Dickinson", roomCount: 56, revenue: 664.89 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Curtice Rulten",
        guestName: "Sam Izac",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18715.56, group: 1026.32, contract: 1627.62 },
    roomData: {
      total: 102,
      contract: 15,
      outOfOrder: 6,
      stayOver: 1,
      arrivals: 95,
      departures: 11,
    },
  },
  {
    groupData: [
      { name: "Gleason, Koss and Wilderman", roomCount: 100, revenue: 128.04 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14808.16, group: 907.77, contract: 1187.43 },
    roomData: {
      total: 38,
      contract: 2,
      outOfOrder: 4,
      stayOver: 9,
      arrivals: 60,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Schultz, Gutkowski and Blanda", roomCount: 2, revenue: 961.57 },
      { name: "Leuschke and Sons", roomCount: 34, revenue: 438.79 },
      { name: "McKenzie, Mosciski and Kohler", roomCount: 98, revenue: 920.88 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 5704.98, group: 1866.47, contract: 1536.97 },
    roomData: {
      total: 74,
      contract: 0,
      outOfOrder: 0,
      stayOver: 34,
      arrivals: 13,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Hane, Bashirian and Corwin", roomCount: 51, revenue: 987.58 },
      { name: "Blanda, Rolfson and Wilkinson", roomCount: 24, revenue: 559.14 },
      { name: "Fisher-Waters", roomCount: 76, revenue: 140.01 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Marianne Tollett",
        guestName: "Colleen Jelkes",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        autorizedBy: "Neron Kuhle",
        guestName: "Allison Bedburrow",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15548.37, group: 1842.17, contract: 1265.84 },
    roomData: {
      total: 41,
      contract: 0,
      outOfOrder: 0,
      stayOver: 15,
      arrivals: 82,
      departures: 67,
    },
  },
  {
    groupData: [
      { name: "Beier, Crooks and Harber", roomCount: 59, revenue: 214.62 },
      { name: "Wisozk, Heaney and Paucek", roomCount: 18, revenue: 532.55 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19402.68, group: 1585.9, contract: 303.08 },
    roomData: {
      total: 61,
      contract: 17,
      outOfOrder: 5,
      stayOver: 55,
      arrivals: 82,
      departures: 78,
    },
  },
  {
    groupData: [
      { name: "Miller-Brown", roomCount: 10, revenue: 150.68 },
      { name: "Fay Inc", roomCount: 37, revenue: 426.95 },
      { name: "Kunde Group", roomCount: 61, revenue: 190.52 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Chelsie O'Corhane",
        guestName: "Clemente Hedworth",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16995.03, group: 1319.02, contract: 913.09 },
    roomData: {
      total: 61,
      contract: 6,
      outOfOrder: 9,
      stayOver: 57,
      arrivals: 35,
      departures: 47,
    },
  },
  {
    groupData: [
      { name: "Blanda LLC", roomCount: 27, revenue: 342.59 },
      { name: "Dickinson-Von", roomCount: 53, revenue: 817.78 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Adora Jardin",
        guestName: "Honor Woodhall",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8834.01, group: 834.39, contract: 1413.84 },
    roomData: {
      total: 78,
      contract: 10,
      outOfOrder: 6,
      stayOver: 44,
      arrivals: 81,
      departures: 21,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Herby Ginsie",
        guestName: "Fanchette Kuban",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
      {
        autorizedBy: "Tobiah Van Castele",
        guestName: "Torrence Bruhnicke",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5475.76, group: 344.23, contract: 468.78 },
    roomData: {
      total: 84,
      contract: 0,
      outOfOrder: 5,
      stayOver: 11,
      arrivals: 38,
      departures: 55,
    },
  },
  {
    groupData: [
      { name: "Hintz-O'Conner", roomCount: 99, revenue: 978.54 },
      { name: "Gislason Inc", roomCount: 78, revenue: 313.55 },
      { name: "Huels, Stracke and Kilback", roomCount: 35, revenue: 149.77 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bartolomeo Johananov",
        guestName: "Si Monday",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
      {
        autorizedBy: "Cyrille Brimson",
        guestName: "Bell Harold",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10717.47, group: 655.17, contract: 508.78 },
    roomData: {
      total: 41,
      contract: 18,
      outOfOrder: 9,
      stayOver: 25,
      arrivals: 82,
      departures: 28,
    },
  },
  {
    groupData: [
      { name: "Emmerich, Simonis and Kub", roomCount: 25, revenue: 321.64 },
      { name: "Howe-Willms", roomCount: 21, revenue: 737.74 },
      { name: "Farrell LLC", roomCount: 84, revenue: 269.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Keir Beazleigh",
        guestName: "Muhammad Bergen",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10580.14, group: 1067.1, contract: 833.2 },
    roomData: {
      total: 94,
      contract: 8,
      outOfOrder: 3,
      stayOver: 48,
      arrivals: 81,
      departures: 44,
    },
  },
  {
    groupData: [
      {
        name: "Block, Mayer and Runolfsdottir",
        roomCount: 57,
        revenue: 595.87,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14316.26, group: 137.88, contract: 305.0 },
    roomData: {
      total: 60,
      contract: 1,
      outOfOrder: 4,
      stayOver: 7,
      arrivals: 70,
      departures: 28,
    },
  },
  {
    groupData: [{ name: "Schumm LLC", roomCount: 6, revenue: 705.31 }],
    compRoomInfo: [
      {
        autorizedBy: "Rodrick Oxbrow",
        guestName: "Katerine Caudray",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
      {
        autorizedBy: "Mahmoud Dukes",
        guestName: "Lebbie Rastrick",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19391.08, group: 1605.95, contract: 1339.19 },
    roomData: {
      total: 91,
      contract: 11,
      outOfOrder: 8,
      stayOver: 57,
      arrivals: 73,
      departures: 60,
    },
  },
  {
    groupData: [
      { name: "Conn-Schmitt", roomCount: 80, revenue: 861.23 },
      { name: "Kirlin-Bashirian", roomCount: 4, revenue: 799.78 },
      { name: "Bartell Group", roomCount: 84, revenue: 103.48 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Blanca Trevett",
        guestName: "Sergei Ashfield",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 10879.22, group: 1773.89, contract: 960.01 },
    roomData: {
      total: 92,
      contract: 17,
      outOfOrder: 2,
      stayOver: 2,
      arrivals: 97,
      departures: 65,
    },
  },
  {
    groupData: [
      { name: "Legros and Sons", roomCount: 88, revenue: 872.94 },
      { name: "Willms, Rippin and Johnson", roomCount: 17, revenue: 421.68 },
      { name: "Quigley, Emard and Murray", roomCount: 41, revenue: 406.04 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Alexandre Sharrock",
        guestName: "Cari Wrout",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14265.85, group: 307.72, contract: 870.69 },
    roomData: {
      total: 24,
      contract: 7,
      outOfOrder: 7,
      stayOver: 19,
      arrivals: 67,
      departures: 60,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Shani Scoyles",
        guestName: "Torin Praundlin",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19341.14, group: 253.56, contract: 688.26 },
    roomData: {
      total: 35,
      contract: 17,
      outOfOrder: 1,
      stayOver: 76,
      arrivals: 77,
      departures: 69,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Whitby Bridewell",
        guestName: "Baxie Czajkowska",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Sax Mathieson",
        guestName: "Brynna Sarle",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 14355.88, group: 1836.34, contract: 1406.71 },
    roomData: {
      total: 35,
      contract: 8,
      outOfOrder: 7,
      stayOver: 35,
      arrivals: 89,
      departures: 76,
    },
  },
  {
    groupData: [
      { name: "Mohr, Dare and Harber", roomCount: 7, revenue: 353.8 },
      { name: "Nader-Vandervort", roomCount: 47, revenue: 942.32 },
      { name: "Sawayn-Williamson", roomCount: 90, revenue: 901.36 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5058.08, group: 113.09, contract: 1132.78 },
    roomData: {
      total: 89,
      contract: 17,
      outOfOrder: 5,
      stayOver: 78,
      arrivals: 35,
      departures: 7,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Brianna Tegler",
        guestName: "Katrina Diggins",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
      {
        autorizedBy: "Cecily Osselton",
        guestName: "Alfie Hans",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12289.37, group: 1508.43, contract: 1681.44 },
    roomData: {
      total: 78,
      contract: 5,
      outOfOrder: 1,
      stayOver: 47,
      arrivals: 54,
      departures: 3,
    },
  },
  {
    groupData: [
      { name: "Beatty, Monahan and Watsica", roomCount: 72, revenue: 831.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Elna Giamitti",
        guestName: "Irvine Molden",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        autorizedBy: "Philomena Birtonshaw",
        guestName: "Stephi Dancey",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15188.4, group: 1114.62, contract: 1925.06 },
    roomData: {
      total: 77,
      contract: 7,
      outOfOrder: 6,
      stayOver: 59,
      arrivals: 15,
      departures: 10,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Kele Lunn",
        guestName: "Sauveur Prettyman",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Carmita Schutte",
        guestName: "Earle Lewsie",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17225.9, group: 124.13, contract: 307.03 },
    roomData: {
      total: 85,
      contract: 20,
      outOfOrder: 1,
      stayOver: 31,
      arrivals: 24,
      departures: 45,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5258.28, group: 498.51, contract: 1506.11 },
    roomData: {
      total: 39,
      contract: 13,
      outOfOrder: 1,
      stayOver: 8,
      arrivals: 0,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Schowalter-Stiedemann", roomCount: 93, revenue: 477.69 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Simeon Lean",
        guestName: "Gertie Goard",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14379.63, group: 1196.17, contract: 1939.03 },
    roomData: {
      total: 98,
      contract: 0,
      outOfOrder: 2,
      stayOver: 80,
      arrivals: 24,
      departures: 29,
    },
  },
  {
    groupData: [{ name: "Strosin-Hahn", roomCount: 43, revenue: 545.62 }],
    compRoomInfo: [
      {
        autorizedBy: "Clotilda Orum",
        guestName: "Tarah Sampey",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9416.26, group: 194.92, contract: 165.21 },
    roomData: {
      total: 30,
      contract: 6,
      outOfOrder: 6,
      stayOver: 27,
      arrivals: 29,
      departures: 7,
    },
  },
  {
    groupData: [
      { name: "Runolfsson-Bechtelar", roomCount: 8, revenue: 466.77 },
      { name: "O'Conner LLC", roomCount: 83, revenue: 701.69 },
      { name: "Carroll Group", roomCount: 47, revenue: 682.81 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gerrard Dybald",
        guestName: "Wilow Whanstall",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Ole Hollingsby",
        guestName: "Larry Kembrey",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6428.77, group: 1701.9, contract: 1568.8 },
    roomData: {
      total: 23,
      contract: 17,
      outOfOrder: 0,
      stayOver: 72,
      arrivals: 0,
      departures: 14,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8100.17, group: 1566.87, contract: 752.42 },
    roomData: {
      total: 40,
      contract: 3,
      outOfOrder: 3,
      stayOver: 35,
      arrivals: 48,
      departures: 16,
    },
  },
  {
    groupData: [
      { name: "Will-Jacobs", roomCount: 87, revenue: 995.74 },
      { name: "Howell-Kuhlman", roomCount: 43, revenue: 392.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Merline Brightey",
        guestName: "Julian Durtnell",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
      {
        autorizedBy: "Ives Dashwood",
        guestName: "Bernadette Gier",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19548.64, group: 226.82, contract: 221.78 },
    roomData: {
      total: 22,
      contract: 5,
      outOfOrder: 2,
      stayOver: 17,
      arrivals: 29,
      departures: 0,
    },
  },
  {
    groupData: [
      { name: "Casper LLC", roomCount: 87, revenue: 939.66 },
      { name: "Beahan, Stark and Gerhold", roomCount: 72, revenue: 258.36 },
      { name: "Bins-Bartoletti", roomCount: 81, revenue: 708.85 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Janene Perris",
        guestName: "Shaina Harrington",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        autorizedBy: "Chauncey Ivannikov",
        guestName: "Bowie Klewer",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19278.25, group: 391.73, contract: 1867.71 },
    roomData: {
      total: 50,
      contract: 17,
      outOfOrder: 6,
      stayOver: 18,
      arrivals: 72,
      departures: 9,
    },
  },
  {
    groupData: [
      { name: "Braun Group", roomCount: 9, revenue: 996.44 },
      { name: "Collins-Satterfield", roomCount: 46, revenue: 861.44 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Thatcher Bligh",
        guestName: "Shalne Kenefick",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
      {
        autorizedBy: "Irwin Tinto",
        guestName: "Babara Bredbury",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 14539.42, group: 1670.26, contract: 1651.62 },
    roomData: {
      total: 47,
      contract: 12,
      outOfOrder: 3,
      stayOver: 38,
      arrivals: 42,
      departures: 76,
    },
  },
  {
    groupData: [
      { name: "Hudson, Schroeder and Wolff", roomCount: 52, revenue: 470.68 },
      { name: "Torp, Koss and Witting", roomCount: 51, revenue: 651.75 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Merle McNerlin",
        guestName: "Mischa Barnewille",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 16962.65, group: 1860.77, contract: 1099.44 },
    roomData: {
      total: 41,
      contract: 14,
      outOfOrder: 9,
      stayOver: 47,
      arrivals: 92,
      departures: 20,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6402.95, group: 1513.1, contract: 1424.79 },
    roomData: {
      total: 78,
      contract: 0,
      outOfOrder: 0,
      stayOver: 10,
      arrivals: 22,
      departures: 73,
    },
  },
  {
    groupData: [{ name: "Hudson-Moen", roomCount: 69, revenue: 874.27 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16909.46, group: 388.39, contract: 1573.73 },
    roomData: {
      total: 67,
      contract: 13,
      outOfOrder: 9,
      stayOver: 14,
      arrivals: 14,
      departures: 18,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17610.6, group: 977.02, contract: 1154.84 },
    roomData: {
      total: 86,
      contract: 5,
      outOfOrder: 4,
      stayOver: 28,
      arrivals: 64,
      departures: 48,
    },
  },
  {
    groupData: [{ name: "Koss-Torp", roomCount: 64, revenue: 284.31 }],
    compRoomInfo: [
      {
        autorizedBy: "Dorothy Cockerham",
        guestName: "Briana Carrington",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Saxe Risbie",
        guestName: "Lebbie Clilverd",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10758.64, group: 747.18, contract: 423.26 },
    roomData: {
      total: 88,
      contract: 18,
      outOfOrder: 0,
      stayOver: 73,
      arrivals: 52,
      departures: 67,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Legra Readwing",
        guestName: "Waylan Grzegorczyk",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15849.07, group: 430.97, contract: 559.05 },
    roomData: {
      total: 96,
      contract: 17,
      outOfOrder: 3,
      stayOver: 38,
      arrivals: 0,
      departures: 13,
    },
  },
  {
    groupData: [
      { name: "Stark-Kuhn", roomCount: 28, revenue: 373.8 },
      { name: "Barton-Ryan", roomCount: 46, revenue: 901.28 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5524.03, group: 1777.48, contract: 1684.36 },
    roomData: {
      total: 59,
      contract: 8,
      outOfOrder: 8,
      stayOver: 75,
      arrivals: 13,
      departures: 69,
    },
  },
  {
    groupData: [
      { name: "Armstrong LLC", roomCount: 54, revenue: 871.24 },
      { name: "Rice, Schoen and Hansen", roomCount: 55, revenue: 589.59 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Elysia Hefferon",
        guestName: "Caryl Levett",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
      {
        autorizedBy: "Felizio Duffy",
        guestName: "Liane Mara",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 18755.22, group: 446.43, contract: 1366.11 },
    roomData: {
      total: 69,
      contract: 5,
      outOfOrder: 2,
      stayOver: 61,
      arrivals: 71,
      departures: 28,
    },
  },
  {
    groupData: [
      { name: "Dietrich-Jakubowski", roomCount: 11, revenue: 150.27 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10157.75, group: 980.42, contract: 641.44 },
    roomData: {
      total: 88,
      contract: 1,
      outOfOrder: 6,
      stayOver: 29,
      arrivals: 7,
      departures: 25,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Rollo Fould",
        guestName: "Stephani Ciciura",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Gracie Bauman",
        guestName: "Vasily Cruse",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18471.18, group: 459.37, contract: 1805.24 },
    roomData: {
      total: 89,
      contract: 11,
      outOfOrder: 6,
      stayOver: 54,
      arrivals: 64,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Cole, Glover and Heathcote", roomCount: 57, revenue: 347.02 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Eduino Houndsom",
        guestName: "Lonnie Salisbury",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Vivie Bubear",
        guestName: "Kory Hugnin",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 14500.35, group: 487.13, contract: 1672.29 },
    roomData: {
      total: 42,
      contract: 14,
      outOfOrder: 0,
      stayOver: 66,
      arrivals: 83,
      departures: 5,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Roseann Skeemor",
        guestName: "Alexine Dmych",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        autorizedBy: "Thom Christoffe",
        guestName: "Patrick McCaffrey",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5621.47, group: 210.78, contract: 425.06 },
    roomData: {
      total: 43,
      contract: 11,
      outOfOrder: 6,
      stayOver: 10,
      arrivals: 58,
      departures: 39,
    },
  },
  {
    groupData: [
      { name: "Brown LLC", roomCount: 24, revenue: 572.12 },
      { name: "Beier Inc", roomCount: 5, revenue: 397.84 },
      { name: "Rath, Gutmann and Mayer", roomCount: 67, revenue: 314.98 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kingsly Deekes",
        guestName: "Aubry Pretswell",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11772.41, group: 320.69, contract: 472.73 },
    roomData: {
      total: 27,
      contract: 0,
      outOfOrder: 4,
      stayOver: 34,
      arrivals: 23,
      departures: 73,
    },
  },
  {
    groupData: [{ name: "Kris LLC", roomCount: 29, revenue: 457.94 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10105.21, group: 1031.3, contract: 884.27 },
    roomData: {
      total: 64,
      contract: 13,
      outOfOrder: 0,
      stayOver: 58,
      arrivals: 63,
      departures: 37,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Hagen Kershaw",
        guestName: "Marga McGaugan",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6870.84, group: 1712.5, contract: 1894.72 },
    roomData: {
      total: 77,
      contract: 13,
      outOfOrder: 7,
      stayOver: 25,
      arrivals: 95,
      departures: 59,
    },
  },
  {
    groupData: [{ name: "Wisoky Group", roomCount: 20, revenue: 267.21 }],
    compRoomInfo: [
      {
        autorizedBy: "Darleen Fourmy",
        guestName: "Belle Crosscombe",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Scottie Tremontana",
        guestName: "Albertina Pendrid",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 7378.32, group: 1698.83, contract: 356.93 },
    roomData: {
      total: 40,
      contract: 6,
      outOfOrder: 9,
      stayOver: 48,
      arrivals: 21,
      departures: 73,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13342.93, group: 466.26, contract: 179.89 },
    roomData: {
      total: 36,
      contract: 2,
      outOfOrder: 8,
      stayOver: 75,
      arrivals: 78,
      departures: 5,
    },
  },
  {
    groupData: [{ name: "Trantow Inc", roomCount: 19, revenue: 354.88 }],
    compRoomInfo: [
      {
        autorizedBy: "Lorelle Durek",
        guestName: "Evvie Brechin",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10786.76, group: 1836.88, contract: 1966.39 },
    roomData: {
      total: 47,
      contract: 13,
      outOfOrder: 9,
      stayOver: 35,
      arrivals: 17,
      departures: 70,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12807.79, group: 867.7, contract: 1150.54 },
    roomData: {
      total: 48,
      contract: 17,
      outOfOrder: 3,
      stayOver: 24,
      arrivals: 59,
      departures: 62,
    },
  },
  {
    groupData: [
      { name: "Mosciski-Sanford", roomCount: 9, revenue: 738.69 },
      { name: "Walter-Reilly", roomCount: 74, revenue: 718.87 },
      { name: "Schulist and Sons", roomCount: 5, revenue: 993.63 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Boniface Castagne",
        guestName: "Julienne Tompkiss",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
      {
        autorizedBy: "Trista Eggers",
        guestName: "Bentlee Roles",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 6900.12, group: 204.9, contract: 867.69 },
    roomData: {
      total: 57,
      contract: 2,
      outOfOrder: 6,
      stayOver: 4,
      arrivals: 48,
      departures: 11,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Chicky Scholes",
        guestName: "Trula Medmore",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14729.2, group: 426.65, contract: 378.47 },
    roomData: {
      total: 40,
      contract: 19,
      outOfOrder: 8,
      stayOver: 45,
      arrivals: 82,
      departures: 78,
    },
  },
  {
    groupData: [
      { name: "Conn-Labadie", roomCount: 30, revenue: 129.83 },
      { name: "Hansen, Russel and Robel", roomCount: 27, revenue: 518.02 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Shani MacAne",
        guestName: "Dodie Redhead",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8364.93, group: 509.48, contract: 1015.25 },
    roomData: {
      total: 55,
      contract: 3,
      outOfOrder: 1,
      stayOver: 47,
      arrivals: 28,
      departures: 2,
    },
  },
  {
    groupData: [{ name: "Schamberger-Ward", roomCount: 100, revenue: 162.74 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8382.7, group: 530.42, contract: 1301.63 },
    roomData: {
      total: 82,
      contract: 20,
      outOfOrder: 7,
      stayOver: 53,
      arrivals: 91,
      departures: 12,
    },
  },
  {
    groupData: [
      { name: "Herzog, Koepp and Jaskolski", roomCount: 47, revenue: 278.17 },
      { name: "Kassulke Inc", roomCount: 74, revenue: 328.66 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Heidie Seamer",
        guestName: "Violante Antrobus",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
      {
        autorizedBy: "Eustacia Sambrook",
        guestName: "Juana Wemm",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18612.67, group: 173.34, contract: 1737.26 },
    roomData: {
      total: 67,
      contract: 11,
      outOfOrder: 5,
      stayOver: 21,
      arrivals: 8,
      departures: 45,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6193.84, group: 676.59, contract: 699.88 },
    roomData: {
      total: 22,
      contract: 7,
      outOfOrder: 3,
      stayOver: 15,
      arrivals: 27,
      departures: 29,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18942.24, group: 535.08, contract: 1486.46 },
    roomData: {
      total: 81,
      contract: 13,
      outOfOrder: 9,
      stayOver: 55,
      arrivals: 85,
      departures: 27,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Nolly Peffer",
        guestName: "Karlene Mathey",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9738.96, group: 1817.0, contract: 1774.03 },
    roomData: {
      total: 72,
      contract: 5,
      outOfOrder: 4,
      stayOver: 80,
      arrivals: 46,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "Bergnaum and Sons", roomCount: 91, revenue: 120.0 },
      { name: "Carter-Langworth", roomCount: 66, revenue: 135.94 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ronica Domenico",
        guestName: "Lenore Babbe",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        autorizedBy: "Roseanne Charlet",
        guestName: "Elisha Stocken",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13437.84, group: 982.19, contract: 1207.61 },
    roomData: {
      total: 66,
      contract: 4,
      outOfOrder: 8,
      stayOver: 29,
      arrivals: 85,
      departures: 51,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13982.34, group: 1665.23, contract: 653.35 },
    roomData: {
      total: 49,
      contract: 18,
      outOfOrder: 0,
      stayOver: 51,
      arrivals: 94,
      departures: 0,
    },
  },
  {
    groupData: [
      {
        name: "Daugherty, Bednar and Hettinger",
        roomCount: 90,
        revenue: 416.18,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17554.27, group: 556.14, contract: 1711.82 },
    roomData: {
      total: 47,
      contract: 20,
      outOfOrder: 4,
      stayOver: 0,
      arrivals: 45,
      departures: 69,
    },
  },
  {
    groupData: [
      { name: "O'Conner-Wunsch", roomCount: 98, revenue: 433.91 },
      { name: "Ritchie-Lebsack", roomCount: 38, revenue: 484.96 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lacee Hutson",
        guestName: "Dominick Garaway",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7490.29, group: 435.68, contract: 1647.59 },
    roomData: {
      total: 23,
      contract: 10,
      outOfOrder: 3,
      stayOver: 4,
      arrivals: 24,
      departures: 48,
    },
  },
  {
    groupData: [
      { name: "Marks, Baumbach and Terry", roomCount: 26, revenue: 519.34 },
      { name: "Klocko-Keeling", roomCount: 34, revenue: 662.2 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10899.08, group: 1095.95, contract: 114.85 },
    roomData: {
      total: 76,
      contract: 4,
      outOfOrder: 2,
      stayOver: 80,
      arrivals: 74,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Fisher, Murray and Grant", roomCount: 9, revenue: 966.07 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 6996.26, group: 552.81, contract: 1759.91 },
    roomData: {
      total: 98,
      contract: 11,
      outOfOrder: 4,
      stayOver: 59,
      arrivals: 4,
      departures: 6,
    },
  },
  {
    groupData: [
      { name: "Ritchie, Goyette and Robel", roomCount: 96, revenue: 100.16 },
      { name: "Turcotte, Lowe and Sanford", roomCount: 4, revenue: 538.49 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kaela Blackborough",
        guestName: "Nanny Britcher",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16451.05, group: 1457.63, contract: 737.67 },
    roomData: {
      total: 102,
      contract: 11,
      outOfOrder: 6,
      stayOver: 58,
      arrivals: 92,
      departures: 64,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Enrico Succamore",
        guestName: "Ignace Medland",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Eloise Flute",
        guestName: "Cordelie Ashfield",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10042.7, group: 1494.19, contract: 1051.76 },
    roomData: {
      total: 30,
      contract: 17,
      outOfOrder: 8,
      stayOver: 40,
      arrivals: 64,
      departures: 61,
    },
  },
  {
    groupData: [
      { name: "Gislason and Sons", roomCount: 25, revenue: 736.05 },
      { name: "Bergnaum-Heathcote", roomCount: 90, revenue: 328.81 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Blinnie Waldie",
        guestName: "Quinn Wain",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16681.75, group: 1807.03, contract: 790.16 },
    roomData: {
      total: 75,
      contract: 20,
      outOfOrder: 8,
      stayOver: 53,
      arrivals: 44,
      departures: 25,
    },
  },
  {
    groupData: [
      { name: "Harvey, Blanda and Hamill", roomCount: 14, revenue: 709.13 },
      { name: "Jast, Buckridge and Donnelly", roomCount: 24, revenue: 259.84 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 15074.58, group: 320.53, contract: 122.14 },
    roomData: {
      total: 34,
      contract: 2,
      outOfOrder: 0,
      stayOver: 49,
      arrivals: 95,
      departures: 73,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5161.88, group: 1779.65, contract: 907.78 },
    roomData: {
      total: 46,
      contract: 18,
      outOfOrder: 0,
      stayOver: 41,
      arrivals: 33,
      departures: 54,
    },
  },
  {
    groupData: [
      { name: "Leannon Inc", roomCount: 47, revenue: 664.96 },
      { name: "Herzog Group", roomCount: 34, revenue: 306.69 },
      { name: "Hyatt LLC", roomCount: 61, revenue: 798.6 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6541.64, group: 426.23, contract: 365.7 },
    roomData: {
      total: 41,
      contract: 17,
      outOfOrder: 3,
      stayOver: 66,
      arrivals: 88,
      departures: 73,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15698.45, group: 1798.27, contract: 1790.57 },
    roomData: {
      total: 20,
      contract: 18,
      outOfOrder: 6,
      stayOver: 52,
      arrivals: 3,
      departures: 80,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16165.38, group: 1641.53, contract: 1505.31 },
    roomData: {
      total: 72,
      contract: 20,
      outOfOrder: 7,
      stayOver: 61,
      arrivals: 14,
      departures: 30,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Trude Blamires",
        guestName: "Ambrosio Pudden",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        autorizedBy: "Mickey Bellanger",
        guestName: "Orel Oakhill",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6371.8, group: 1133.41, contract: 775.34 },
    roomData: {
      total: 84,
      contract: 10,
      outOfOrder: 4,
      stayOver: 35,
      arrivals: 92,
      departures: 33,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Nanny Guidera",
        guestName: "Khalil Blucher",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        autorizedBy: "Devonna Dallender",
        guestName: "Jonas Stirrup",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7974.6, group: 122.46, contract: 1360.22 },
    roomData: {
      total: 93,
      contract: 5,
      outOfOrder: 1,
      stayOver: 45,
      arrivals: 20,
      departures: 49,
    },
  },
  {
    groupData: [
      { name: "Gerhold, Smith and Bechtelar", roomCount: 35, revenue: 245.57 },
      { name: "Ledner-Olson", roomCount: 51, revenue: 198.62 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Nolan Dunkirk",
        guestName: "Mariel Janton",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
      {
        autorizedBy: "Rand Soall",
        guestName: "Harrison Owenson",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9119.81, group: 1275.23, contract: 1421.08 },
    roomData: {
      total: 77,
      contract: 4,
      outOfOrder: 3,
      stayOver: 63,
      arrivals: 77,
      departures: 58,
    },
  },
  {
    groupData: [{ name: "Franecki and Sons", roomCount: 100, revenue: 508.11 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 16806.17, group: 1105.58, contract: 1925.59 },
    roomData: {
      total: 57,
      contract: 20,
      outOfOrder: 3,
      stayOver: 65,
      arrivals: 0,
      departures: 35,
    },
  },
  {
    groupData: [{ name: "Casper LLC", roomCount: 95, revenue: 708.99 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18613.42, group: 568.24, contract: 949.05 },
    roomData: {
      total: 57,
      contract: 18,
      outOfOrder: 4,
      stayOver: 80,
      arrivals: 23,
      departures: 32,
    },
  },
  {
    groupData: [
      { name: "Greenfelder-Krajcik", roomCount: 102, revenue: 391.63 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Shara Ingyon",
        guestName: "Artemus McKevitt",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Ralina Meharg",
        guestName: "Cece Tipens",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18594.23, group: 1087.82, contract: 996.84 },
    roomData: {
      total: 27,
      contract: 7,
      outOfOrder: 3,
      stayOver: 26,
      arrivals: 66,
      departures: 28,
    },
  },
  {
    groupData: [
      { name: "Greenholt LLC", roomCount: 20, revenue: 761.35 },
      { name: "Abshire, Blanda and Bradtke", roomCount: 82, revenue: 285.88 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 6499.83, group: 1505.67, contract: 431.97 },
    roomData: {
      total: 42,
      contract: 11,
      outOfOrder: 0,
      stayOver: 23,
      arrivals: 60,
      departures: 46,
    },
  },
  {
    groupData: [{ name: "Kshlerin-Fadel", roomCount: 45, revenue: 641.33 }],
    compRoomInfo: [
      {
        autorizedBy: "Winnah Black",
        guestName: "Domenico Paiton",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Brandy Lehrahan",
        guestName: "Katee Cortez",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9840.71, group: 212.24, contract: 348.43 },
    roomData: {
      total: 72,
      contract: 1,
      outOfOrder: 7,
      stayOver: 65,
      arrivals: 6,
      departures: 63,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Linnell Phibb",
        guestName: "Daveta Shoobridge",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8749.0, group: 1432.27, contract: 1808.16 },
    roomData: {
      total: 80,
      contract: 19,
      outOfOrder: 3,
      stayOver: 9,
      arrivals: 88,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "Lakin-Heller", roomCount: 91, revenue: 816.8 },
      { name: "Schulist Group", roomCount: 51, revenue: 535.76 },
      { name: "Schimmel-Davis", roomCount: 33, revenue: 415.78 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10277.97, group: 626.72, contract: 497.81 },
    roomData: {
      total: 21,
      contract: 18,
      outOfOrder: 1,
      stayOver: 61,
      arrivals: 91,
      departures: 68,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Asa Jealous",
        guestName: "Edik Oliver",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8448.21, group: 886.47, contract: 584.09 },
    roomData: {
      total: 47,
      contract: 2,
      outOfOrder: 6,
      stayOver: 35,
      arrivals: 64,
      departures: 74,
    },
  },
  {
    groupData: [
      { name: "Stiedemann and Sons", roomCount: 91, revenue: 513.74 },
      { name: "Legros, Harvey and Cormier", roomCount: 67, revenue: 975.68 },
      { name: "Doyle, Steuber and Kuphal", roomCount: 90, revenue: 411.89 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Barbaraanne Stelfax",
        guestName: "Maggee Barnett",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6122.16, group: 1458.5, contract: 836.17 },
    roomData: {
      total: 84,
      contract: 4,
      outOfOrder: 5,
      stayOver: 63,
      arrivals: 19,
      departures: 21,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Lewes Feakins",
        guestName: "Weidar Ayerst",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16995.33, group: 543.59, contract: 312.66 },
    roomData: {
      total: 102,
      contract: 20,
      outOfOrder: 4,
      stayOver: 63,
      arrivals: 5,
      departures: 55,
    },
  },
  {
    groupData: [
      { name: "Bode, Herzog and Lebsack", roomCount: 36, revenue: 203.32 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 6087.8, group: 694.1, contract: 1496.28 },
    roomData: {
      total: 23,
      contract: 12,
      outOfOrder: 6,
      stayOver: 67,
      arrivals: 39,
      departures: 8,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11208.49, group: 342.28, contract: 143.11 },
    roomData: {
      total: 76,
      contract: 2,
      outOfOrder: 2,
      stayOver: 54,
      arrivals: 89,
      departures: 49,
    },
  },
  {
    groupData: [
      { name: "Hamill Inc", roomCount: 28, revenue: 421.76 },
      { name: "Johnston LLC", roomCount: 73, revenue: 363.79 },
      { name: "Armstrong-Schinner", roomCount: 21, revenue: 898.41 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10633.62, group: 251.38, contract: 1081.45 },
    roomData: {
      total: 78,
      contract: 15,
      outOfOrder: 9,
      stayOver: 9,
      arrivals: 75,
      departures: 31,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Alyssa Ridsdale",
        guestName: "Sammy Wintersgill",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        autorizedBy: "Noble Fransoni",
        guestName: "Sheena Podbury",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15180.7, group: 456.71, contract: 1606.28 },
    roomData: {
      total: 42,
      contract: 20,
      outOfOrder: 1,
      stayOver: 32,
      arrivals: 92,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "Spinka, Pollich and Bosco", roomCount: 64, revenue: 249.53 },
      { name: "Mante-Borer", roomCount: 7, revenue: 381.0 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14223.84, group: 234.97, contract: 517.13 },
    roomData: {
      total: 57,
      contract: 19,
      outOfOrder: 4,
      stayOver: 52,
      arrivals: 25,
      departures: 68,
    },
  },
  {
    groupData: [{ name: "Gibson LLC", roomCount: 94, revenue: 956.88 }],
    compRoomInfo: [
      {
        autorizedBy: "Say Aldred",
        guestName: "Gaylene Casajuana",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18018.35, group: 1576.62, contract: 1950.11 },
    roomData: {
      total: 74,
      contract: 10,
      outOfOrder: 9,
      stayOver: 24,
      arrivals: 25,
      departures: 6,
    },
  },
  {
    groupData: [
      { name: "Langworth Inc", roomCount: 71, revenue: 960.5 },
      { name: "Russel Inc", roomCount: 19, revenue: 682.94 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5248.07, group: 1654.88, contract: 612.24 },
    roomData: {
      total: 76,
      contract: 14,
      outOfOrder: 3,
      stayOver: 38,
      arrivals: 58,
      departures: 68,
    },
  },
  {
    groupData: [{ name: "Durgan-Ward", roomCount: 44, revenue: 954.92 }],
    compRoomInfo: [
      {
        autorizedBy: "Arlin Emmet",
        guestName: "Livvy Rearden",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
      {
        autorizedBy: "Libbey de Clercq",
        guestName: "Anneliese Wittman",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8053.51, group: 349.22, contract: 1752.05 },
    roomData: {
      total: 55,
      contract: 1,
      outOfOrder: 4,
      stayOver: 13,
      arrivals: 41,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Gusikowski-Swaniawski", roomCount: 53, revenue: 406.38 },
      { name: "Bauch LLC", roomCount: 19, revenue: 397.55 },
      { name: "Crooks and Sons", roomCount: 71, revenue: 348.05 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Selle Owbridge",
        guestName: "Clayborne Vamplew",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 6226.17, group: 218.57, contract: 537.02 },
    roomData: {
      total: 102,
      contract: 5,
      outOfOrder: 1,
      stayOver: 26,
      arrivals: 49,
      departures: 61,
    },
  },
  {
    groupData: [
      { name: "Mueller LLC", roomCount: 52, revenue: 980.97 },
      { name: "Ward, Goyette and Mohr", roomCount: 75, revenue: 696.5 },
      { name: "Wintheiser-Casper", roomCount: 75, revenue: 137.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Inga Ballentime",
        guestName: "Ealasaid Spinige",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 11721.33, group: 962.69, contract: 396.07 },
    roomData: {
      total: 45,
      contract: 11,
      outOfOrder: 4,
      stayOver: 9,
      arrivals: 8,
      departures: 57,
    },
  },
  {
    groupData: [
      { name: "Homenick, Dietrich and Wolff", roomCount: 32, revenue: 251.53 },
      { name: "Torphy Group", roomCount: 100, revenue: 328.84 },
      { name: "Krajcik, Boehm and Renner", roomCount: 98, revenue: 820.32 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Eliza McCart",
        guestName: "Pet Bygott",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
      {
        autorizedBy: "Kori Starsmeare",
        guestName: "Clywd Scotter",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12975.74, group: 1277.79, contract: 832.31 },
    roomData: {
      total: 51,
      contract: 9,
      outOfOrder: 0,
      stayOver: 63,
      arrivals: 84,
      departures: 34,
    },
  },
  {
    groupData: [
      { name: "Senger-Gislason", roomCount: 58, revenue: 214.87 },
      { name: "Greenfelder and Sons", roomCount: 65, revenue: 620.29 },
      { name: "Littel Group", roomCount: 78, revenue: 579.51 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Valerie Tolworth",
        guestName: "Sindee Bote",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17440.61, group: 284.08, contract: 465.06 },
    roomData: {
      total: 52,
      contract: 14,
      outOfOrder: 8,
      stayOver: 10,
      arrivals: 55,
      departures: 6,
    },
  },
  {
    groupData: [
      { name: "Boehm, Dickens and Watsica", roomCount: 63, revenue: 955.47 },
      { name: "Blanda and Sons", roomCount: 55, revenue: 774.24 },
      { name: "Runte-Morissette", roomCount: 102, revenue: 108.16 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7514.37, group: 363.19, contract: 556.03 },
    roomData: {
      total: 36,
      contract: 8,
      outOfOrder: 2,
      stayOver: 79,
      arrivals: 22,
      departures: 28,
    },
  },
  {
    groupData: [
      { name: "Fahey-Lindgren", roomCount: 46, revenue: 214.94 },
      { name: "Ritchie LLC", roomCount: 34, revenue: 289.6 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17121.84, group: 1278.89, contract: 245.65 },
    roomData: {
      total: 28,
      contract: 3,
      outOfOrder: 1,
      stayOver: 46,
      arrivals: 72,
      departures: 31,
    },
  },
  {
    groupData: [{ name: "Bernhard-Goyette", roomCount: 86, revenue: 233.14 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9988.62, group: 741.49, contract: 424.86 },
    roomData: {
      total: 77,
      contract: 2,
      outOfOrder: 3,
      stayOver: 79,
      arrivals: 29,
      departures: 19,
    },
  },
  {
    groupData: [
      {
        name: "Moore, Greenfelder and Dickinson",
        roomCount: 81,
        revenue: 959.25,
      },
      { name: "Nader-Lebsack", roomCount: 23, revenue: 688.63 },
      { name: "Bernier Inc", roomCount: 54, revenue: 971.45 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Corissa Ramshay",
        guestName: "Fernande Chicchelli",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
      {
        autorizedBy: "Rosalyn Faragan",
        guestName: "Lola Derby",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6523.35, group: 1835.63, contract: 1848.32 },
    roomData: {
      total: 94,
      contract: 20,
      outOfOrder: 8,
      stayOver: 70,
      arrivals: 4,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "D'Amore, Homenick and Olson", roomCount: 6, revenue: 970.91 },
      {
        name: "Breitenberg, Oberbrunner and Rippin",
        roomCount: 19,
        revenue: 833.93,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18873.49, group: 525.8, contract: 872.08 },
    roomData: {
      total: 99,
      contract: 15,
      outOfOrder: 1,
      stayOver: 26,
      arrivals: 28,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Farrell and Sons", roomCount: 96, revenue: 333.82 },
      { name: "Willms, Satterfield and Cole", roomCount: 92, revenue: 996.72 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Orella Ehlerding",
        guestName: "Viviene Tinghill",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6125.6, group: 529.2, contract: 117.4 },
    roomData: {
      total: 99,
      contract: 14,
      outOfOrder: 6,
      stayOver: 5,
      arrivals: 4,
      departures: 74,
    },
  },
  {
    groupData: [{ name: "Koepp-Botsford", roomCount: 2, revenue: 716.15 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5923.26, group: 1383.99, contract: 303.36 },
    roomData: {
      total: 71,
      contract: 10,
      outOfOrder: 3,
      stayOver: 30,
      arrivals: 55,
      departures: 2,
    },
  },
  {
    groupData: [
      {
        name: "Aufderhar, Rippin and Anderson",
        roomCount: 73,
        revenue: 600.51,
      },
      { name: "Herman-McDermott", roomCount: 74, revenue: 197.97 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5307.81, group: 1129.26, contract: 1943.98 },
    roomData: {
      total: 82,
      contract: 16,
      outOfOrder: 4,
      stayOver: 13,
      arrivals: 89,
      departures: 0,
    },
  },
  {
    groupData: [
      { name: "Osinski and Sons", roomCount: 19, revenue: 885.17 },
      { name: "McLaughlin Inc", roomCount: 51, revenue: 950.22 },
      { name: "Kertzmann LLC", roomCount: 77, revenue: 500.46 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gusty Deelay",
        guestName: "Judi Clegg",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10194.36, group: 582.91, contract: 1324.48 },
    roomData: {
      total: 91,
      contract: 7,
      outOfOrder: 9,
      stayOver: 43,
      arrivals: 94,
      departures: 37,
    },
  },
  {
    groupData: [
      { name: "Howell-Frami", roomCount: 89, revenue: 191.18 },
      { name: "Kerluke, Schulist and Koepp", roomCount: 91, revenue: 438.6 },
      { name: "Corwin-Moen", roomCount: 7, revenue: 947.71 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lily Poles",
        guestName: "Ardine Stirzaker",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
      {
        autorizedBy: "Ardelia Lewens",
        guestName: "Christiana Pierse",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 12781.37, group: 1244.97, contract: 264.84 },
    roomData: {
      total: 75,
      contract: 3,
      outOfOrder: 7,
      stayOver: 34,
      arrivals: 70,
      departures: 11,
    },
  },
  {
    groupData: [
      { name: "Veum-Heaney", roomCount: 46, revenue: 190.39 },
      { name: "Feest, Hauck and Lebsack", roomCount: 52, revenue: 203.7 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8220.83, group: 1602.49, contract: 1050.75 },
    roomData: {
      total: 62,
      contract: 9,
      outOfOrder: 6,
      stayOver: 9,
      arrivals: 93,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Gulgowski, Rath and Emard", roomCount: 93, revenue: 945.04 },
      { name: "Kohler-Schmitt", roomCount: 64, revenue: 862.37 },
      { name: "Hahn LLC", roomCount: 21, revenue: 293.5 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Artemis Wyllcocks",
        guestName: "Kelvin Cline",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 19499.93, group: 319.46, contract: 984.23 },
    roomData: {
      total: 34,
      contract: 17,
      outOfOrder: 7,
      stayOver: 44,
      arrivals: 14,
      departures: 64,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Cloris Giovannilli",
        guestName: "Ali Decent",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
      {
        autorizedBy: "Padget Persehouse",
        guestName: "Meghann Speachley",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18848.27, group: 597.17, contract: 1736.84 },
    roomData: {
      total: 22,
      contract: 2,
      outOfOrder: 3,
      stayOver: 54,
      arrivals: 90,
      departures: 20,
    },
  },
  {
    groupData: [
      { name: "Krajcik Inc", roomCount: 80, revenue: 830.51 },
      { name: "Vandervort-Langosh", roomCount: 2, revenue: 189.98 },
      { name: "Heathcote, Kovacek and Hand", roomCount: 68, revenue: 534.76 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Justine Basant",
        guestName: "Minnaminnie Breakey",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13249.25, group: 1678.76, contract: 530.68 },
    roomData: {
      total: 80,
      contract: 4,
      outOfOrder: 9,
      stayOver: 77,
      arrivals: 36,
      departures: 14,
    },
  },
  {
    groupData: [
      { name: "Bartoletti, Funk and Schinner", roomCount: 15, revenue: 995.97 },
      {
        name: "Hickle, Witting and Morissette",
        roomCount: 23,
        revenue: 145.22,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Berthe Deadman",
        guestName: "Meryl Roomes",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
      {
        autorizedBy: "Torey De Rye Barrett",
        guestName: "Pattie Jaskowicz",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 12886.46, group: 1797.37, contract: 1890.7 },
    roomData: {
      total: 53,
      contract: 8,
      outOfOrder: 3,
      stayOver: 39,
      arrivals: 48,
      departures: 36,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Dacey Windmill",
        guestName: "Nancie Stimson",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16975.3, group: 1779.74, contract: 163.92 },
    roomData: {
      total: 32,
      contract: 20,
      outOfOrder: 5,
      stayOver: 36,
      arrivals: 29,
      departures: 14,
    },
  },
  {
    groupData: [{ name: "Leannon Group", roomCount: 28, revenue: 409.59 }],
    compRoomInfo: [
      {
        autorizedBy: "Riannon McAllaster",
        guestName: "Adiana Anderton",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
      {
        autorizedBy: "Anny Danher",
        guestName: "Marcos Glander",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5886.81, group: 1462.42, contract: 195.32 },
    roomData: {
      total: 97,
      contract: 16,
      outOfOrder: 4,
      stayOver: 1,
      arrivals: 64,
      departures: 39,
    },
  },
  {
    groupData: [
      { name: "Grimes-Ferry", roomCount: 47, revenue: 602.88 },
      { name: "Wolff, Goodwin and Baumbach", roomCount: 28, revenue: 769.8 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Garrott Voce",
        guestName: "Nerti Blonfield",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Mathew Curtoys",
        guestName: "Kaine Bampton",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6302.47, group: 516.01, contract: 1878.09 },
    roomData: {
      total: 69,
      contract: 4,
      outOfOrder: 5,
      stayOver: 26,
      arrivals: 22,
      departures: 7,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Bobine Limb",
        guestName: "Carrol Andras",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Elfreda Hurdman",
        guestName: "Noelle Ruvel",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 16502.37, group: 1053.67, contract: 793.1 },
    roomData: {
      total: 98,
      contract: 7,
      outOfOrder: 3,
      stayOver: 22,
      arrivals: 51,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "O'Keefe-Swaniawski", roomCount: 98, revenue: 551.14 },
      { name: "Farrell-Powlowski", roomCount: 57, revenue: 406.52 },
      { name: "Crooks, Goyette and Sanford", roomCount: 13, revenue: 913.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lida MacKim",
        guestName: "Dinah Zolini",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9120.41, group: 1486.93, contract: 168.36 },
    roomData: {
      total: 55,
      contract: 13,
      outOfOrder: 2,
      stayOver: 64,
      arrivals: 6,
      departures: 71,
    },
  },
  {
    groupData: [
      { name: "Stokes, Bergstrom and Kunze", roomCount: 75, revenue: 813.87 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Conway Hamman",
        guestName: "Devonne Stoute",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7202.72, group: 934.88, contract: 1687.49 },
    roomData: {
      total: 66,
      contract: 15,
      outOfOrder: 2,
      stayOver: 56,
      arrivals: 78,
      departures: 27,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10807.15, group: 1225.57, contract: 1455.56 },
    roomData: {
      total: 61,
      contract: 20,
      outOfOrder: 9,
      stayOver: 54,
      arrivals: 91,
      departures: 38,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Drugi Godmar",
        guestName: "Danette Signori",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13821.12, group: 124.96, contract: 762.35 },
    roomData: {
      total: 72,
      contract: 13,
      outOfOrder: 5,
      stayOver: 38,
      arrivals: 73,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Larkin and Sons", roomCount: 9, revenue: 803.49 },
      { name: "Lang, Mills and Graham", roomCount: 51, revenue: 989.89 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Davin Beney",
        guestName: "Roma MacGillacolm",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17403.05, group: 807.41, contract: 1469.21 },
    roomData: {
      total: 44,
      contract: 13,
      outOfOrder: 8,
      stayOver: 38,
      arrivals: 28,
      departures: 1,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10128.39, group: 1440.75, contract: 648.52 },
    roomData: {
      total: 62,
      contract: 19,
      outOfOrder: 7,
      stayOver: 22,
      arrivals: 93,
      departures: 26,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15425.63, group: 647.74, contract: 1581.79 },
    roomData: {
      total: 38,
      contract: 20,
      outOfOrder: 5,
      stayOver: 41,
      arrivals: 76,
      departures: 17,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11415.2, group: 1964.84, contract: 125.05 },
    roomData: {
      total: 31,
      contract: 12,
      outOfOrder: 5,
      stayOver: 73,
      arrivals: 44,
      departures: 33,
    },
  },
  {
    groupData: [
      { name: "Kreiger, Ratke and Lakin", roomCount: 53, revenue: 281.01 },
      { name: "Macejkovic Group", roomCount: 85, revenue: 717.21 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cinda Bottby",
        guestName: "Stavros Leates",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Albertina Portlock",
        guestName: "Scottie Banham",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13259.29, group: 1571.57, contract: 547.87 },
    roomData: {
      total: 70,
      contract: 19,
      outOfOrder: 2,
      stayOver: 78,
      arrivals: 100,
      departures: 11,
    },
  },
  {
    groupData: [
      { name: "Abbott, Mosciski and Tillman", roomCount: 59, revenue: 648.71 },
      { name: "Block-Reichel", roomCount: 23, revenue: 673.01 },
      { name: "Wuckert and Sons", roomCount: 23, revenue: 213.43 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Katie Bumphrey",
        guestName: "Arte Dalliston",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6577.63, group: 1086.94, contract: 1582.87 },
    roomData: {
      total: 67,
      contract: 12,
      outOfOrder: 2,
      stayOver: 42,
      arrivals: 18,
      departures: 15,
    },
  },
  {
    groupData: [
      { name: "Stracke, Gleason and Marvin", roomCount: 63, revenue: 997.51 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7570.61, group: 1033.88, contract: 552.5 },
    roomData: {
      total: 79,
      contract: 5,
      outOfOrder: 5,
      stayOver: 4,
      arrivals: 11,
      departures: 22,
    },
  },
  {
    groupData: [
      {
        name: "Ullrich, McDermott and Schuppe",
        roomCount: 31,
        revenue: 555.57,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Faythe Greenless",
        guestName: "Janine MacCosto",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15336.39, group: 918.37, contract: 1008.83 },
    roomData: {
      total: 57,
      contract: 11,
      outOfOrder: 8,
      stayOver: 26,
      arrivals: 84,
      departures: 55,
    },
  },
  {
    groupData: [
      { name: "Hammes and Sons", roomCount: 72, revenue: 598.94 },
      { name: "Emard-Lesch", roomCount: 16, revenue: 225.89 },
      { name: "Zulauf-Schinner", roomCount: 97, revenue: 817.68 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10317.7, group: 253.42, contract: 1598.93 },
    roomData: {
      total: 65,
      contract: 9,
      outOfOrder: 6,
      stayOver: 54,
      arrivals: 48,
      departures: 60,
    },
  },
  {
    groupData: [{ name: "Wintheiser Inc", roomCount: 77, revenue: 279.95 }],
    compRoomInfo: [
      {
        autorizedBy: "Roxane Antushev",
        guestName: "Tedda Hrinchishin",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10522.76, group: 730.47, contract: 1185.66 },
    roomData: {
      total: 50,
      contract: 2,
      outOfOrder: 1,
      stayOver: 6,
      arrivals: 64,
      departures: 54,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ariel Tampion",
        guestName: "Marleen Scirman",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
      {
        autorizedBy: "Malchy MacTrustam",
        guestName: "Bent Badman",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 13258.23, group: 1317.73, contract: 1166.25 },
    roomData: {
      total: 47,
      contract: 5,
      outOfOrder: 5,
      stayOver: 20,
      arrivals: 90,
      departures: 75,
    },
  },
  {
    groupData: [
      {
        name: "Greenholt, McGlynn and McLaughlin",
        roomCount: 51,
        revenue: 540.45,
      },
      {
        name: "Balistreri, Boyer and Gislason",
        roomCount: 43,
        revenue: 327.65,
      },
      { name: "Stanton-Cole", roomCount: 70, revenue: 734.01 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17457.59, group: 382.62, contract: 177.48 },
    roomData: {
      total: 32,
      contract: 20,
      outOfOrder: 9,
      stayOver: 35,
      arrivals: 75,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Swift LLC", roomCount: 74, revenue: 526.0 },
      { name: "Ondricka, Willms and Kuhn", roomCount: 6, revenue: 760.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Larissa Craigs",
        guestName: "Norine Speers",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 13971.64, group: 1960.35, contract: 988.67 },
    roomData: {
      total: 75,
      contract: 11,
      outOfOrder: 0,
      stayOver: 45,
      arrivals: 36,
      departures: 10,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Veronike Catonne",
        guestName: "Nathanael Manie",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Aharon Stolle",
        guestName: "Merle Morrad",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11733.78, group: 383.48, contract: 1994.52 },
    roomData: {
      total: 62,
      contract: 1,
      outOfOrder: 0,
      stayOver: 55,
      arrivals: 0,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Jacobson LLC", roomCount: 59, revenue: 759.16 },
      { name: "Jakubowski Group", roomCount: 54, revenue: 236.48 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Benjy Tiner",
        guestName: "Cissiee Reinert",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
      {
        autorizedBy: "Alie Brand",
        guestName: "Warren Rottcher",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7385.0, group: 1428.5, contract: 1562.16 },
    roomData: {
      total: 37,
      contract: 6,
      outOfOrder: 8,
      stayOver: 45,
      arrivals: 67,
      departures: 64,
    },
  },
  {
    groupData: [
      { name: "Schmeler, Bashirian and Fay", roomCount: 49, revenue: 838.62 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Juliette Micheau",
        guestName: "Gaston Peascod",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5755.29, group: 653.81, contract: 1371.1 },
    roomData: {
      total: 38,
      contract: 20,
      outOfOrder: 5,
      stayOver: 2,
      arrivals: 63,
      departures: 69,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Phip Fernier",
        guestName: "Nonna McKeon",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
      {
        autorizedBy: "Mari Hambidge",
        guestName: "Robbi Benazet",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13125.16, group: 1952.08, contract: 1782.92 },
    roomData: {
      total: 73,
      contract: 15,
      outOfOrder: 2,
      stayOver: 75,
      arrivals: 87,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Dickinson Group", roomCount: 22, revenue: 732.16 },
      { name: "Ryan-Senger", roomCount: 99, revenue: 397.7 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kristal Arnaldi",
        guestName: "Marie-jeanne McLaine",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19133.89, group: 207.46, contract: 181.98 },
    roomData: {
      total: 83,
      contract: 17,
      outOfOrder: 3,
      stayOver: 58,
      arrivals: 21,
      departures: 20,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Katleen Whiten",
        guestName: "Sig Crawforth",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5095.98, group: 1235.59, contract: 1554.27 },
    roomData: {
      total: 62,
      contract: 18,
      outOfOrder: 0,
      stayOver: 22,
      arrivals: 79,
      departures: 65,
    },
  },
  {
    groupData: [
      { name: "Ferry-O'Hara", roomCount: 57, revenue: 113.14 },
      { name: "McGlynn, Reichert and Lemke", roomCount: 52, revenue: 322.98 },
      { name: "Heathcote-Klocko", roomCount: 23, revenue: 708.78 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Susette Ick",
        guestName: "Conroy Rechert",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
      {
        autorizedBy: "Lane Setchfield",
        guestName: "Cami Billham",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13646.99, group: 1047.1, contract: 929.3 },
    roomData: {
      total: 23,
      contract: 4,
      outOfOrder: 2,
      stayOver: 78,
      arrivals: 56,
      departures: 44,
    },
  },
  {
    groupData: [{ name: "Kemmer Inc", roomCount: 4, revenue: 562.74 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16183.09, group: 1540.38, contract: 1373.22 },
    roomData: {
      total: 71,
      contract: 18,
      outOfOrder: 0,
      stayOver: 61,
      arrivals: 18,
      departures: 71,
    },
  },
  {
    groupData: [
      { name: "Stiedemann-Gulgowski", roomCount: 17, revenue: 744.63 },
      { name: "Bruen Group", roomCount: 9, revenue: 487.0 },
      { name: "Zulauf-Kirlin", roomCount: 14, revenue: 200.3 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Opaline MacPhail",
        guestName: "Enrichetta Hedger",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14274.19, group: 1468.43, contract: 494.53 },
    roomData: {
      total: 29,
      contract: 15,
      outOfOrder: 3,
      stayOver: 12,
      arrivals: 60,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Kohler, Daniel and Kilback", roomCount: 52, revenue: 563.29 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Daron Yoakley",
        guestName: "Selina Lipmann",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17881.78, group: 141.6, contract: 1677.61 },
    roomData: {
      total: 92,
      contract: 18,
      outOfOrder: 0,
      stayOver: 45,
      arrivals: 10,
      departures: 39,
    },
  },
  {
    groupData: [
      {
        name: "Williamson, Nikolaus and Collins",
        roomCount: 69,
        revenue: 650.57,
      },
      { name: "Quigley Inc", roomCount: 49, revenue: 396.11 },
      { name: "Bruen-Mayer", roomCount: 32, revenue: 116.37 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Alyosha Adger",
        guestName: "Galvan Eckersall",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
      {
        autorizedBy: "Maribelle Shevill",
        guestName: "Bert Kolyagin",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11061.52, group: 246.51, contract: 1679.16 },
    roomData: {
      total: 22,
      contract: 8,
      outOfOrder: 8,
      stayOver: 19,
      arrivals: 82,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Hirthe, Ankunding and Treutel", roomCount: 33, revenue: 123.78 },
      { name: "Schiller LLC", roomCount: 47, revenue: 827.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Feodora Judron",
        guestName: "Noby Bennington",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Torey Kinghorn",
        guestName: "Helga Kensley",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19188.29, group: 382.8, contract: 1007.82 },
    roomData: {
      total: 32,
      contract: 10,
      outOfOrder: 8,
      stayOver: 65,
      arrivals: 49,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Spinka, Huels and Turner", roomCount: 51, revenue: 703.44 },
      { name: "Kautzer and Sons", roomCount: 16, revenue: 238.99 },
      { name: "Purdy, Morissette and Sporer", roomCount: 56, revenue: 854.93 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Hatti Dalyell",
        guestName: "Nicky Dyde",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 6642.34, group: 584.89, contract: 514.55 },
    roomData: {
      total: 89,
      contract: 1,
      outOfOrder: 8,
      stayOver: 49,
      arrivals: 87,
      departures: 42,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 11882.46, group: 359.79, contract: 912.08 },
    roomData: {
      total: 78,
      contract: 1,
      outOfOrder: 5,
      stayOver: 64,
      arrivals: 99,
      departures: 55,
    },
  },
  {
    groupData: [
      { name: "Will-Rice", roomCount: 73, revenue: 567.37 },
      { name: "Wyman-Gulgowski", roomCount: 50, revenue: 812.3 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Mina Olliffe",
        guestName: "Shelli Blaxeland",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Krystle Carling",
        guestName: "Rochell Nise",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12420.92, group: 1552.55, contract: 1933.59 },
    roomData: {
      total: 96,
      contract: 3,
      outOfOrder: 8,
      stayOver: 32,
      arrivals: 98,
      departures: 19,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19763.74, group: 1917.46, contract: 1193.7 },
    roomData: {
      total: 74,
      contract: 2,
      outOfOrder: 9,
      stayOver: 31,
      arrivals: 27,
      departures: 6,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jim Blakiston",
        guestName: "Town Rodgerson",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6612.75, group: 547.39, contract: 777.77 },
    roomData: {
      total: 67,
      contract: 7,
      outOfOrder: 7,
      stayOver: 44,
      arrivals: 32,
      departures: 55,
    },
  },
  {
    groupData: [
      { name: "Lehner, Dare and Wyman", roomCount: 31, revenue: 638.33 },
      { name: "Heidenreich Group", roomCount: 13, revenue: 616.89 },
      { name: "Hauck-Jones", roomCount: 20, revenue: 519.12 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Euell Windybank",
        guestName: "Giacinta Medway",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
      {
        autorizedBy: "Elberta Sunners",
        guestName: "Lauren Broadbere",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14244.15, group: 991.3, contract: 760.5 },
    roomData: {
      total: 89,
      contract: 15,
      outOfOrder: 5,
      stayOver: 6,
      arrivals: 12,
      departures: 24,
    },
  },
  {
    groupData: [{ name: "Little-Beahan", roomCount: 99, revenue: 541.05 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 12231.7, group: 667.39, contract: 519.27 },
    roomData: {
      total: 97,
      contract: 9,
      outOfOrder: 0,
      stayOver: 48,
      arrivals: 25,
      departures: 71,
    },
  },
  {
    groupData: [
      { name: "Veum, Grimes and Koepp", roomCount: 35, revenue: 426.49 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Asia Enderby",
        guestName: "Morten Becaris",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9690.61, group: 1771.74, contract: 1622.74 },
    roomData: {
      total: 57,
      contract: 12,
      outOfOrder: 5,
      stayOver: 50,
      arrivals: 57,
      departures: 43,
    },
  },
  {
    groupData: [{ name: "Jacobi Group", roomCount: 62, revenue: 936.65 }],
    compRoomInfo: [
      {
        autorizedBy: "Julina Whitlaw",
        guestName: "Annabal Decourt",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
      {
        autorizedBy: "Sydel Lippiatt",
        guestName: "Gare McLeoid",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19114.53, group: 409.34, contract: 1450.22 },
    roomData: {
      total: 74,
      contract: 13,
      outOfOrder: 8,
      stayOver: 59,
      arrivals: 59,
      departures: 47,
    },
  },
  {
    groupData: [
      { name: "Larson-Dietrich", roomCount: 76, revenue: 973.58 },
      { name: "Lind and Sons", roomCount: 62, revenue: 326.43 },
      {
        name: "Hamill, Ferry and Runolfsdottir",
        roomCount: 25,
        revenue: 274.0,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sly Checchetelli",
        guestName: "Jessamyn Cayley",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        autorizedBy: "Arthur Kite",
        guestName: "Rennie Coolbear",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7632.15, group: 285.62, contract: 1515.53 },
    roomData: {
      total: 20,
      contract: 0,
      outOfOrder: 7,
      stayOver: 9,
      arrivals: 42,
      departures: 17,
    },
  },
  {
    groupData: [
      { name: "Franecki, Bechtelar and Frami", roomCount: 72, revenue: 972.48 },
      { name: "Zieme and Sons", roomCount: 13, revenue: 712.62 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Isak Soigoux",
        guestName: "Charles Elias",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 19304.96, group: 1125.07, contract: 139.96 },
    roomData: {
      total: 49,
      contract: 0,
      outOfOrder: 8,
      stayOver: 33,
      arrivals: 71,
      departures: 14,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Hilarius Sturge",
        guestName: "Homerus Pirdy",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17062.8, group: 1181.99, contract: 930.91 },
    roomData: {
      total: 86,
      contract: 16,
      outOfOrder: 7,
      stayOver: 67,
      arrivals: 63,
      departures: 0,
    },
  },
  {
    groupData: [
      {
        name: "Mueller, Greenfelder and Stanton",
        roomCount: 79,
        revenue: 175.05,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Yvette Rippon",
        guestName: "Corliss Gunby",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        autorizedBy: "Augusto Christauffour",
        guestName: "Wilfrid Duiguid",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9624.39, group: 161.54, contract: 861.02 },
    roomData: {
      total: 32,
      contract: 15,
      outOfOrder: 8,
      stayOver: 73,
      arrivals: 8,
      departures: 13,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Sheff Maffin",
        guestName: "Vyky Casone",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        autorizedBy: "Vina Davidow",
        guestName: "Ivie Stollberg",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9288.18, group: 1835.54, contract: 477.8 },
    roomData: {
      total: 66,
      contract: 12,
      outOfOrder: 9,
      stayOver: 74,
      arrivals: 85,
      departures: 48,
    },
  },
  {
    groupData: [
      { name: "Doyle, Wolff and Abernathy", roomCount: 73, revenue: 462.55 },
      { name: "Roberts and Sons", roomCount: 56, revenue: 489.05 },
      { name: "Renner and Sons", roomCount: 33, revenue: 739.12 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Joceline Kenningham",
        guestName: "Merry Munslow",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
      {
        autorizedBy: "Marshal Spawell",
        guestName: "Durante Kilmurry",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18612.36, group: 204.16, contract: 1997.54 },
    roomData: {
      total: 30,
      contract: 7,
      outOfOrder: 6,
      stayOver: 27,
      arrivals: 94,
      departures: 52,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7187.45, group: 1035.39, contract: 355.3 },
    roomData: {
      total: 40,
      contract: 3,
      outOfOrder: 2,
      stayOver: 54,
      arrivals: 47,
      departures: 27,
    },
  },
  {
    groupData: [
      { name: "Pacocha-Jacobson", roomCount: 25, revenue: 229.17 },
      { name: "Wisoky, Streich and Grimes", roomCount: 29, revenue: 963.76 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dosi Jay",
        guestName: "Carlo Spilsbury",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11168.84, group: 1788.96, contract: 1587.74 },
    roomData: {
      total: 47,
      contract: 2,
      outOfOrder: 2,
      stayOver: 37,
      arrivals: 64,
      departures: 35,
    },
  },
  {
    groupData: [
      { name: "Upton, Hackett and Sipes", roomCount: 50, revenue: 437.05 },
      { name: "Reilly-Borer", roomCount: 47, revenue: 641.47 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Augie Draye",
        guestName: "Alard Dauney",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
      {
        autorizedBy: "Mikel Lamboll",
        guestName: "Evy Hulmes",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5358.38, group: 332.03, contract: 1276.33 },
    roomData: {
      total: 97,
      contract: 18,
      outOfOrder: 5,
      stayOver: 26,
      arrivals: 81,
      departures: 76,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Fey Abbyss",
        guestName: "Shelba Blackadder",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
      {
        autorizedBy: "Bab Daal",
        guestName: "Alicia Moral",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6729.82, group: 1633.49, contract: 262.73 },
    roomData: {
      total: 33,
      contract: 4,
      outOfOrder: 8,
      stayOver: 69,
      arrivals: 89,
      departures: 28,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Linoel Carlo",
        guestName: "Cherey Antoshin",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
      {
        autorizedBy: "Daisi Yakunin",
        guestName: "Stafani Wheater",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17892.28, group: 203.6, contract: 1864.05 },
    roomData: {
      total: 67,
      contract: 2,
      outOfOrder: 6,
      stayOver: 23,
      arrivals: 50,
      departures: 80,
    },
  },
  {
    groupData: [
      { name: "Feeney, Shields and Parker", roomCount: 72, revenue: 790.31 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Larine Itzcovich",
        guestName: "Fred Zapatero",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Friedrich Unwin",
        guestName: "Lance Becerra",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18259.57, group: 1479.67, contract: 565.15 },
    roomData: {
      total: 36,
      contract: 12,
      outOfOrder: 6,
      stayOver: 31,
      arrivals: 88,
      departures: 78,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Karylin Feild",
        guestName: "Morgun Hammon",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        autorizedBy: "Kittie Fryett",
        guestName: "Morgen Bearsmore",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 10366.65, group: 1897.88, contract: 132.75 },
    roomData: {
      total: 71,
      contract: 2,
      outOfOrder: 8,
      stayOver: 14,
      arrivals: 29,
      departures: 18,
    },
  },
  {
    groupData: [
      { name: "Kohler Inc", roomCount: 67, revenue: 715.76 },
      { name: "Ryan LLC", roomCount: 58, revenue: 192.65 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5686.85, group: 1204.88, contract: 909.31 },
    roomData: {
      total: 39,
      contract: 19,
      outOfOrder: 1,
      stayOver: 28,
      arrivals: 3,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "Orn-Kerluke", roomCount: 84, revenue: 353.07 },
      { name: "Grady and Sons", roomCount: 5, revenue: 266.01 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19820.54, group: 268.53, contract: 1693.18 },
    roomData: {
      total: 22,
      contract: 8,
      outOfOrder: 5,
      stayOver: 33,
      arrivals: 35,
      departures: 69,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 9263.4, group: 1401.11, contract: 1675.55 },
    roomData: {
      total: 24,
      contract: 20,
      outOfOrder: 5,
      stayOver: 8,
      arrivals: 14,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Sawayn-Pfeffer", roomCount: 38, revenue: 514.0 },
      { name: "Bernhard Group", roomCount: 47, revenue: 773.18 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Tamiko Patesel",
        guestName: "Osborne Vowles",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
      {
        autorizedBy: "Deeyn Jarred",
        guestName: "Latrena Burthom",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13235.33, group: 1537.27, contract: 115.92 },
    roomData: {
      total: 32,
      contract: 0,
      outOfOrder: 0,
      stayOver: 3,
      arrivals: 12,
      departures: 74,
    },
  },
  {
    groupData: [
      { name: "Hudson, Strosin and Gulgowski", roomCount: 48, revenue: 439.58 },
      { name: "Morissette LLC", roomCount: 99, revenue: 977.12 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Mahmoud Laver",
        guestName: "Cherri Gallone",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 5202.3, group: 1922.81, contract: 1214.93 },
    roomData: {
      total: 75,
      contract: 11,
      outOfOrder: 4,
      stayOver: 8,
      arrivals: 99,
      departures: 42,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Pavia Lettsom",
        guestName: "Malinda Wardel",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14494.66, group: 112.29, contract: 691.54 },
    roomData: {
      total: 34,
      contract: 20,
      outOfOrder: 1,
      stayOver: 63,
      arrivals: 51,
      departures: 46,
    },
  },
  {
    groupData: [
      { name: "Hintz-Watsica", roomCount: 84, revenue: 580.66 },
      { name: "Dare LLC", roomCount: 84, revenue: 787.25 },
      { name: "Bechtelar, Emard and Dach", roomCount: 15, revenue: 444.64 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lothario Hughs",
        guestName: "Sterne Boow",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        autorizedBy: "Addie Fladgate",
        guestName: "Roley Pocklington",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 8039.61, group: 243.31, contract: 807.04 },
    roomData: {
      total: 75,
      contract: 8,
      outOfOrder: 1,
      stayOver: 30,
      arrivals: 65,
      departures: 70,
    },
  },
  {
    groupData: [
      { name: "Schneider, Mohr and Ratke", roomCount: 94, revenue: 569.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Solomon Brecknall",
        guestName: "Kaia Temperton",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        autorizedBy: "Tine Pearsall",
        guestName: "Editha Hatton",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14848.28, group: 1740.31, contract: 539.48 },
    roomData: {
      total: 102,
      contract: 17,
      outOfOrder: 4,
      stayOver: 6,
      arrivals: 72,
      departures: 47,
    },
  },
  {
    groupData: [
      { name: "Mueller Group", roomCount: 35, revenue: 915.11 },
      { name: "Murphy-Koelpin", roomCount: 51, revenue: 413.52 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Madge Almack",
        guestName: "Stephan Longhirst",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        autorizedBy: "Felipe Burles",
        guestName: "Katerine Bradburne",
        reason:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12704.88, group: 1531.88, contract: 920.6 },
    roomData: {
      total: 36,
      contract: 9,
      outOfOrder: 3,
      stayOver: 7,
      arrivals: 73,
      departures: 41,
    },
  },
  {
    groupData: [
      { name: "Hirthe-Nader", roomCount: 102, revenue: 808.46 },
      { name: "DuBuque-Ziemann", roomCount: 97, revenue: 396.16 },
      { name: "Stoltenberg-Emard", roomCount: 68, revenue: 886.76 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bernete Fincham",
        guestName: "Lazare Derkes",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18094.78, group: 1905.79, contract: 1521.47 },
    roomData: {
      total: 29,
      contract: 15,
      outOfOrder: 7,
      stayOver: 57,
      arrivals: 78,
      departures: 28,
    },
  },
  {
    groupData: [
      { name: "Ankunding, Okuneva and Wehner", roomCount: 59, revenue: 779.77 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Aprilette Dukes",
        guestName: "Lyn Conachy",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
      {
        autorizedBy: "Lexine Lilleyman",
        guestName: "Biron Opy",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19875.38, group: 408.51, contract: 1080.16 },
    roomData: {
      total: 56,
      contract: 9,
      outOfOrder: 7,
      stayOver: 74,
      arrivals: 35,
      departures: 34,
    },
  },
  {
    groupData: [
      { name: "Gottlieb, Ward and Ratke", roomCount: 20, revenue: 165.11 },
      { name: "Anderson and Sons", roomCount: 63, revenue: 762.81 },
      { name: "Wunsch, Stokes and Skiles", roomCount: 6, revenue: 821.65 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Harcourt Vlasin",
        guestName: "Ellen Hincks",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
      {
        autorizedBy: "Stephannie Kinworthy",
        guestName: "Hildegaard Bauchop",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 5256.8, group: 791.5, contract: 343.5 },
    roomData: {
      total: 45,
      contract: 4,
      outOfOrder: 4,
      stayOver: 77,
      arrivals: 68,
      departures: 72,
    },
  },
  {
    groupData: [
      { name: "Legros LLC", roomCount: 74, revenue: 247.18 },
      { name: "Crona-Nolan", roomCount: 87, revenue: 477.33 },
      { name: "Price Group", roomCount: 95, revenue: 940.6 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ivan Ricca",
        guestName: "Anselm Larchiere",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10565.93, group: 1890.69, contract: 1953.01 },
    roomData: {
      total: 96,
      contract: 18,
      outOfOrder: 6,
      stayOver: 32,
      arrivals: 40,
      departures: 75,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ulysses O'Shaughnessy",
        guestName: "Galven Dafforne",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
      {
        autorizedBy: "Burke Paulot",
        guestName: "Tandie Kerley",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6759.79, group: 1285.01, contract: 313.89 },
    roomData: {
      total: 89,
      contract: 12,
      outOfOrder: 5,
      stayOver: 6,
      arrivals: 48,
      departures: 70,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Dalston Sanpere",
        guestName: "Flossie Huck",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
      {
        autorizedBy: "Chrotoem Pavlenkov",
        guestName: "Goldarina Clutterham",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6532.4, group: 1924.87, contract: 889.25 },
    roomData: {
      total: 38,
      contract: 0,
      outOfOrder: 9,
      stayOver: 21,
      arrivals: 3,
      departures: 11,
    },
  },
  {
    groupData: [
      { name: "Marvin-Mann", roomCount: 58, revenue: 758.09 },
      { name: "Littel-Hoppe", roomCount: 22, revenue: 769.85 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Joelie Davydkov",
        guestName: "Jane Laurand",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16506.74, group: 186.78, contract: 1624.46 },
    roomData: {
      total: 57,
      contract: 5,
      outOfOrder: 1,
      stayOver: 79,
      arrivals: 73,
      departures: 8,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Susette Styant",
        guestName: "Mylo Gislebert",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15762.86, group: 1716.17, contract: 951.84 },
    roomData: {
      total: 93,
      contract: 11,
      outOfOrder: 9,
      stayOver: 15,
      arrivals: 52,
      departures: 43,
    },
  },
  {
    groupData: [
      { name: "Hills and Sons", roomCount: 46, revenue: 132.84 },
      { name: "Reinger LLC", roomCount: 73, revenue: 210.26 },
      { name: "Schimmel LLC", roomCount: 27, revenue: 793.8 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Michaeline Rigate",
        guestName: "Linea Jacombs",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Amory Brundrett",
        guestName: "Patsy Mushet",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17780.87, group: 808.03, contract: 1982.26 },
    roomData: {
      total: 101,
      contract: 13,
      outOfOrder: 1,
      stayOver: 18,
      arrivals: 39,
      departures: 52,
    },
  },
  {
    groupData: [{ name: "Schowalter Group", roomCount: 6, revenue: 312.71 }],
    compRoomInfo: [
      {
        autorizedBy: "Brit Hattiff",
        guestName: "Antonie McGennis",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
      {
        autorizedBy: "Anett Randalston",
        guestName: "Iolande Espinheira",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16810.56, group: 1863.32, contract: 647.83 },
    roomData: {
      total: 37,
      contract: 8,
      outOfOrder: 1,
      stayOver: 46,
      arrivals: 56,
      departures: 10,
    },
  },
  {
    groupData: [{ name: "Kovacek-Smith", roomCount: 71, revenue: 325.36 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16816.06, group: 441.64, contract: 185.5 },
    roomData: {
      total: 20,
      contract: 15,
      outOfOrder: 8,
      stayOver: 79,
      arrivals: 28,
      departures: 13,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Letitia Vockings",
        guestName: "Rodney Flintiff",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
      {
        autorizedBy: "Rhianna Farbrother",
        guestName: "Tracy MacGragh",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15689.91, group: 1445.81, contract: 296.3 },
    roomData: {
      total: 88,
      contract: 17,
      outOfOrder: 4,
      stayOver: 76,
      arrivals: 27,
      departures: 51,
    },
  },
  {
    groupData: [{ name: "Windler-Ondricka", roomCount: 6, revenue: 265.14 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 19559.39, group: 708.77, contract: 1612.37 },
    roomData: {
      total: 23,
      contract: 15,
      outOfOrder: 2,
      stayOver: 15,
      arrivals: 36,
      departures: 43,
    },
  },
  {
    groupData: [{ name: "Daugherty-Carter", roomCount: 52, revenue: 605.7 }],
    compRoomInfo: [
      {
        autorizedBy: "Brooke Antyshev",
        guestName: "Cheryl Alebrooke",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
      {
        autorizedBy: "Bendick Gumary",
        guestName: "Mersey Sturton",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5948.96, group: 959.95, contract: 1626.13 },
    roomData: {
      total: 60,
      contract: 3,
      outOfOrder: 6,
      stayOver: 26,
      arrivals: 83,
      departures: 38,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Stevena Mersh",
        guestName: "Burnard Spight",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
      {
        autorizedBy: "Hyacinth Scrivinor",
        guestName: "Dav Tarpey",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5562.69, group: 165.11, contract: 1838.53 },
    roomData: {
      total: 95,
      contract: 6,
      outOfOrder: 0,
      stayOver: 55,
      arrivals: 16,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Harvey-Grimes", roomCount: 99, revenue: 813.67 },
      { name: "Harvey, Romaguera and Emard", roomCount: 92, revenue: 832.84 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18106.33, group: 998.55, contract: 1220.06 },
    roomData: {
      total: 47,
      contract: 6,
      outOfOrder: 6,
      stayOver: 35,
      arrivals: 74,
      departures: 74,
    },
  },
  {
    groupData: [
      {
        name: "Marvin, Rohan and Pfannerstill",
        roomCount: 100,
        revenue: 921.88,
      },
      {
        name: "Satterfield, Grimes and McGlynn",
        roomCount: 101,
        revenue: 148.76,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Archibald Woolfoot",
        guestName: "Diane Papaminas",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
      {
        autorizedBy: "Marji Fildery",
        guestName: "Haze Jiruca",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5511.6, group: 1354.22, contract: 1368.2 },
    roomData: {
      total: 46,
      contract: 16,
      outOfOrder: 8,
      stayOver: 37,
      arrivals: 66,
      departures: 28,
    },
  },
  {
    groupData: [{ name: "Kautzer-Heathcote", roomCount: 16, revenue: 913.46 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6993.93, group: 317.98, contract: 313.02 },
    roomData: {
      total: 35,
      contract: 6,
      outOfOrder: 5,
      stayOver: 80,
      arrivals: 53,
      departures: 24,
    },
  },
  {
    groupData: [
      { name: "Price, Wiegand and Gleichner", roomCount: 26, revenue: 234.48 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Eric Christofle",
        guestName: "Darbie Laytham",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
      {
        autorizedBy: "Bridget Bertson",
        guestName: "Cosme Frill",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11761.57, group: 1155.63, contract: 700.09 },
    roomData: {
      total: 88,
      contract: 20,
      outOfOrder: 2,
      stayOver: 51,
      arrivals: 4,
      departures: 23,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 14305.8, group: 820.64, contract: 100.24 },
    roomData: {
      total: 23,
      contract: 12,
      outOfOrder: 7,
      stayOver: 7,
      arrivals: 24,
      departures: 43,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Estelle Lieber",
        guestName: "Collin Smorthwaite",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 7575.74, group: 1832.78, contract: 978.64 },
    roomData: {
      total: 52,
      contract: 7,
      outOfOrder: 7,
      stayOver: 54,
      arrivals: 99,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "Rolfson-O'Conner", roomCount: 96, revenue: 360.32 },
      { name: "Koelpin LLC", roomCount: 52, revenue: 109.37 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15971.12, group: 701.69, contract: 175.37 },
    roomData: {
      total: 37,
      contract: 0,
      outOfOrder: 5,
      stayOver: 73,
      arrivals: 18,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Kihn, Heaney and Rohan", roomCount: 69, revenue: 557.45 },
      { name: "Jenkins-Nienow", roomCount: 37, revenue: 698.0 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Caesar Lamyman",
        guestName: "Vincenz Shields",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
      {
        autorizedBy: "Clim Kinghorn",
        guestName: "Jilleen Brusby",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 16697.06, group: 1675.44, contract: 370.08 },
    roomData: {
      total: 24,
      contract: 14,
      outOfOrder: 7,
      stayOver: 67,
      arrivals: 59,
      departures: 27,
    },
  },
  {
    groupData: [
      { name: "Harber, Leuschke and Beatty", roomCount: 18, revenue: 129.07 },
      { name: "Schulist and Sons", roomCount: 77, revenue: 379.9 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14663.45, group: 1240.43, contract: 1203.35 },
    roomData: {
      total: 24,
      contract: 10,
      outOfOrder: 3,
      stayOver: 77,
      arrivals: 98,
      departures: 35,
    },
  },
  {
    groupData: [
      { name: "Schulist LLC", roomCount: 8, revenue: 227.48 },
      {
        name: "Schumm, Bergnaum and Hermiston",
        roomCount: 70,
        revenue: 284.53,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5419.65, group: 1501.81, contract: 1652.86 },
    roomData: {
      total: 29,
      contract: 4,
      outOfOrder: 3,
      stayOver: 31,
      arrivals: 11,
      departures: 4,
    },
  },
  {
    groupData: [{ name: "Schneider-Pouros", roomCount: 67, revenue: 493.8 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15461.16, group: 558.61, contract: 394.78 },
    roomData: {
      total: 52,
      contract: 15,
      outOfOrder: 1,
      stayOver: 43,
      arrivals: 4,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Walsh-Gerhold", roomCount: 76, revenue: 110.89 },
      { name: "Schoen and Sons", roomCount: 95, revenue: 707.46 },
      { name: "Jacobi LLC", roomCount: 32, revenue: 956.19 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Millard Botcherby",
        guestName: "Cherianne Frie",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
      {
        autorizedBy: "Ethelbert Buckett",
        guestName: "Nicolais Lightoller",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19070.94, group: 1980.39, contract: 1254.46 },
    roomData: {
      total: 85,
      contract: 20,
      outOfOrder: 8,
      stayOver: 66,
      arrivals: 84,
      departures: 14,
    },
  },
  {
    groupData: [
      { name: "Goyette Inc", roomCount: 80, revenue: 223.65 },
      { name: "Crist-Muller", roomCount: 25, revenue: 750.28 },
      { name: "Tillman-Spencer", roomCount: 37, revenue: 340.04 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Anastasia Gallatly",
        guestName: "Karney Snar",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15431.07, group: 1162.1, contract: 913.21 },
    roomData: {
      total: 21,
      contract: 9,
      outOfOrder: 5,
      stayOver: 50,
      arrivals: 87,
      departures: 0,
    },
  },
  {
    groupData: [
      { name: "Sporer and Sons", roomCount: 79, revenue: 741.16 },
      { name: "Lebsack, Dicki and Walker", roomCount: 95, revenue: 304.19 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Remington McLewd",
        guestName: "Rickard Redan",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17824.38, group: 1220.82, contract: 459.32 },
    roomData: {
      total: 31,
      contract: 9,
      outOfOrder: 6,
      stayOver: 34,
      arrivals: 28,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "Bergnaum Inc", roomCount: 93, revenue: 782.89 },
      { name: "Cremin Group", roomCount: 59, revenue: 962.76 },
      { name: "Turner Inc", roomCount: 91, revenue: 363.81 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Pen Enoksson",
        guestName: "Kettie Nairne",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13638.83, group: 1260.39, contract: 1863.01 },
    roomData: {
      total: 37,
      contract: 12,
      outOfOrder: 7,
      stayOver: 49,
      arrivals: 10,
      departures: 2,
    },
  },
  {
    groupData: [
      { name: "Kautzer-Stanton", roomCount: 27, revenue: 911.42 },
      { name: "Upton, Schiller and Fritsch", roomCount: 19, revenue: 958.74 },
      { name: "Emmerich, Auer and Konopelski", roomCount: 42, revenue: 960.88 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Delmar Groveham",
        guestName: "Milissent Dibling",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15404.37, group: 1569.31, contract: 1666.95 },
    roomData: {
      total: 39,
      contract: 13,
      outOfOrder: 7,
      stayOver: 29,
      arrivals: 88,
      departures: 50,
    },
  },
  {
    groupData: [
      { name: "Balistreri Group", roomCount: 14, revenue: 327.54 },
      { name: "Hamill and Sons", roomCount: 88, revenue: 461.94 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 11128.83, group: 1944.57, contract: 680.82 },
    roomData: {
      total: 64,
      contract: 2,
      outOfOrder: 8,
      stayOver: 33,
      arrivals: 13,
      departures: 7,
    },
  },
  {
    groupData: [
      { name: "Hoppe Group", roomCount: 63, revenue: 477.12 },
      { name: "Keebler LLC", roomCount: 47, revenue: 681.55 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cyndi Clibbery",
        guestName: "Austine Padly",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
      {
        autorizedBy: "Phaidra Summersett",
        guestName: "Elnar Pittson",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11402.15, group: 1252.84, contract: 1934.54 },
    roomData: {
      total: 59,
      contract: 16,
      outOfOrder: 0,
      stayOver: 59,
      arrivals: 57,
      departures: 16,
    },
  },
  {
    groupData: [
      { name: "Swaniawski-Batz", roomCount: 100, revenue: 335.0 },
      { name: "Schaefer-Becker", roomCount: 56, revenue: 140.01 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Barbra Twigge",
        guestName: "Miquela Ferruzzi",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
      {
        autorizedBy: "Florie Columbine",
        guestName: "Anissa Burchatt",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10594.24, group: 1682.55, contract: 1516.04 },
    roomData: {
      total: 73,
      contract: 0,
      outOfOrder: 0,
      stayOver: 59,
      arrivals: 98,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Ankunding, Nicolas and Lemke", roomCount: 20, revenue: 772.55 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Demetri Boxell",
        guestName: "Justin McLafferty",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        autorizedBy: "Karie Coolahan",
        guestName: "Eduardo Stanlock",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16289.17, group: 1181.3, contract: 1319.16 },
    roomData: {
      total: 49,
      contract: 6,
      outOfOrder: 7,
      stayOver: 69,
      arrivals: 37,
      departures: 79,
    },
  },
  {
    groupData: [
      { name: "O'Kon, DuBuque and Corkery", roomCount: 15, revenue: 164.81 },
      { name: "Weimann-Abernathy", roomCount: 93, revenue: 106.57 },
      { name: "Davis-Schamberger", roomCount: 71, revenue: 924.88 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18050.17, group: 473.98, contract: 786.78 },
    roomData: {
      total: 43,
      contract: 17,
      outOfOrder: 8,
      stayOver: 49,
      arrivals: 75,
      departures: 58,
    },
  },
  {
    groupData: [
      { name: "Von, Friesen and Beatty", roomCount: 93, revenue: 731.24 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Nedi Janew",
        guestName: "Alana Bollands",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
      {
        autorizedBy: "Gratia Filmer",
        guestName: "Alli Ibbs",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14123.84, group: 1274.39, contract: 1672.1 },
    roomData: {
      total: 82,
      contract: 14,
      outOfOrder: 5,
      stayOver: 11,
      arrivals: 53,
      departures: 64,
    },
  },
  {
    groupData: [
      { name: "Swaniawski-Runolfsdottir", roomCount: 35, revenue: 232.45 },
      { name: "Murazik, O'Conner and Stark", roomCount: 35, revenue: 831.18 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 9352.83, group: 627.92, contract: 1118.41 },
    roomData: {
      total: 97,
      contract: 14,
      outOfOrder: 5,
      stayOver: 52,
      arrivals: 54,
      departures: 12,
    },
  },
  {
    groupData: [
      { name: "Hoppe Group", roomCount: 50, revenue: 859.49 },
      { name: "Goyette, Bode and Luettgen", roomCount: 74, revenue: 750.83 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9134.15, group: 1735.6, contract: 291.06 },
    roomData: {
      total: 85,
      contract: 10,
      outOfOrder: 9,
      stayOver: 52,
      arrivals: 88,
      departures: 60,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Zerk Pearcehouse",
        guestName: "Murvyn Garrish",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18384.75, group: 1647.83, contract: 1345.4 },
    roomData: {
      total: 101,
      contract: 18,
      outOfOrder: 1,
      stayOver: 4,
      arrivals: 43,
      departures: 40,
    },
  },
  {
    groupData: [
      { name: "Johnson, Sauer and Kshlerin", roomCount: 21, revenue: 232.39 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 12765.08, group: 1862.12, contract: 1985.61 },
    roomData: {
      total: 47,
      contract: 2,
      outOfOrder: 1,
      stayOver: 31,
      arrivals: 50,
      departures: 7,
    },
  },
  {
    groupData: [
      { name: "Lynch-Aufderhar", roomCount: 11, revenue: 338.04 },
      { name: "Harber-O'Kon", roomCount: 42, revenue: 407.85 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Livia Adao",
        guestName: "Iseabal Salmon",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        autorizedBy: "Cate Boxall",
        guestName: "Rosy Corstan",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17925.52, group: 1287.11, contract: 1321.1 },
    roomData: {
      total: 84,
      contract: 8,
      outOfOrder: 0,
      stayOver: 67,
      arrivals: 80,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Towne, Shanahan and Treutel", roomCount: 21, revenue: 109.85 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10500.62, group: 695.78, contract: 959.04 },
    roomData: {
      total: 98,
      contract: 12,
      outOfOrder: 6,
      stayOver: 74,
      arrivals: 56,
      departures: 66,
    },
  },
  {
    groupData: [{ name: "Hills-Simonis", roomCount: 81, revenue: 874.53 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8249.2, group: 138.78, contract: 1337.45 },
    roomData: {
      total: 96,
      contract: 2,
      outOfOrder: 8,
      stayOver: 59,
      arrivals: 45,
      departures: 31,
    },
  },
  {
    groupData: [{ name: "Green and Sons", roomCount: 58, revenue: 758.24 }],
    compRoomInfo: [
      {
        autorizedBy: "Berty Rust",
        guestName: "Rourke Scotney",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12912.8, group: 1096.7, contract: 1051.19 },
    roomData: {
      total: 49,
      contract: 12,
      outOfOrder: 0,
      stayOver: 51,
      arrivals: 47,
      departures: 60,
    },
  },
  {
    groupData: [
      { name: "Rowe, Morar and Swaniawski", roomCount: 62, revenue: 752.26 },
      { name: "Torphy and Sons", roomCount: 61, revenue: 964.61 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Osborne Brownsall",
        guestName: "Norry Littrik",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
      {
        autorizedBy: "Minnaminnie Dupoy",
        guestName: "Elwira Krabbe",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 14030.95, group: 1375.65, contract: 671.66 },
    roomData: {
      total: 37,
      contract: 15,
      outOfOrder: 0,
      stayOver: 62,
      arrivals: 10,
      departures: 71,
    },
  },
  {
    groupData: [
      { name: "Doyle-Wilkinson", roomCount: 13, revenue: 565.08 },
      { name: "Wuckert-Herman", roomCount: 86, revenue: 175.94 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Consuelo Ruzicka",
        guestName: "Drusy Tavner",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10349.2, group: 140.35, contract: 1538.08 },
    roomData: {
      total: 65,
      contract: 3,
      outOfOrder: 9,
      stayOver: 31,
      arrivals: 44,
      departures: 49,
    },
  },
  {
    groupData: [{ name: "Kuhn-Zboncak", roomCount: 37, revenue: 163.43 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9989.08, group: 1532.23, contract: 1120.24 },
    roomData: {
      total: 74,
      contract: 14,
      outOfOrder: 6,
      stayOver: 13,
      arrivals: 82,
      departures: 33,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Corella Girone",
        guestName: "Maxine Solland",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9454.4, group: 228.12, contract: 849.35 },
    roomData: {
      total: 57,
      contract: 4,
      outOfOrder: 6,
      stayOver: 25,
      arrivals: 27,
      departures: 52,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10469.7, group: 1323.6, contract: 1109.4 },
    roomData: {
      total: 50,
      contract: 11,
      outOfOrder: 4,
      stayOver: 33,
      arrivals: 57,
      departures: 15,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Grayce Liley",
        guestName: "Tresa Swinfon",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
      {
        autorizedBy: "Andreana McAneny",
        guestName: "Cal Littlejohn",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15132.47, group: 760.52, contract: 381.74 },
    roomData: {
      total: 90,
      contract: 9,
      outOfOrder: 4,
      stayOver: 6,
      arrivals: 87,
      departures: 63,
    },
  },
  {
    groupData: [
      { name: "Treutel and Sons", roomCount: 92, revenue: 301.46 },
      { name: "Schinner-Gislason", roomCount: 59, revenue: 365.46 },
      { name: "Hilll-Senger", roomCount: 21, revenue: 318.8 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15349.67, group: 1287.36, contract: 473.74 },
    roomData: {
      total: 97,
      contract: 4,
      outOfOrder: 9,
      stayOver: 50,
      arrivals: 84,
      departures: 48,
    },
  },
  {
    groupData: [
      { name: "Lakin, Kessler and Crooks", roomCount: 54, revenue: 931.27 },
      { name: "Yundt, Funk and Rice", roomCount: 100, revenue: 353.23 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sarina Huffer",
        guestName: "Maressa O'Suaird",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5818.57, group: 416.04, contract: 970.14 },
    roomData: {
      total: 22,
      contract: 15,
      outOfOrder: 7,
      stayOver: 66,
      arrivals: 16,
      departures: 10,
    },
  },
  {
    groupData: [
      { name: "Walsh Group", roomCount: 68, revenue: 744.76 },
      { name: "D'Amore, Streich and Smitham", roomCount: 81, revenue: 773.66 },
      { name: "Kuhic, Kozey and Dare", roomCount: 87, revenue: 492.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Pall Bonnavant",
        guestName: "Burty Gunn",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Paige Starsmore",
        guestName: "Arielle Farndon",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18545.24, group: 1768.41, contract: 1499.09 },
    roomData: {
      total: 58,
      contract: 11,
      outOfOrder: 4,
      stayOver: 34,
      arrivals: 82,
      departures: 9,
    },
  },
  {
    groupData: [{ name: "Maggio Group", roomCount: 102, revenue: 196.48 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18291.86, group: 1392.35, contract: 818.6 },
    roomData: {
      total: 96,
      contract: 17,
      outOfOrder: 2,
      stayOver: 24,
      arrivals: 32,
      departures: 39,
    },
  },
  {
    groupData: [
      { name: "Bauch-White", roomCount: 33, revenue: 152.66 },
      { name: "Kunde-Rau", roomCount: 102, revenue: 379.13 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Martyn Lardeur",
        guestName: "Dennie Fehely",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7266.37, group: 1414.54, contract: 1519.13 },
    roomData: {
      total: 61,
      contract: 15,
      outOfOrder: 5,
      stayOver: 47,
      arrivals: 38,
      departures: 69,
    },
  },
  {
    groupData: [{ name: "Balistreri LLC", roomCount: 80, revenue: 814.9 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16455.11, group: 536.64, contract: 1247.29 },
    roomData: {
      total: 91,
      contract: 1,
      outOfOrder: 0,
      stayOver: 14,
      arrivals: 30,
      departures: 15,
    },
  },
  {
    groupData: [
      { name: "Halvorson Group", roomCount: 17, revenue: 778.39 },
      { name: "Russel and Sons", roomCount: 51, revenue: 290.49 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Abba Perrett",
        guestName: "Thibaut Alexsandrev",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Shauna Threadgold",
        guestName: "Ambrosi Nickell",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16744.71, group: 1813.55, contract: 920.85 },
    roomData: {
      total: 84,
      contract: 3,
      outOfOrder: 7,
      stayOver: 19,
      arrivals: 59,
      departures: 51,
    },
  },
  {
    groupData: [{ name: "Hamill Group", roomCount: 17, revenue: 695.27 }],
    compRoomInfo: [
      {
        autorizedBy: "Ermengarde Baddiley",
        guestName: "Cherye Parnham",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12975.09, group: 1254.46, contract: 1496.29 },
    roomData: {
      total: 86,
      contract: 6,
      outOfOrder: 5,
      stayOver: 74,
      arrivals: 100,
      departures: 53,
    },
  },
  {
    groupData: [{ name: "Grimes-Towne", roomCount: 89, revenue: 565.79 }],
    compRoomInfo: [
      {
        autorizedBy: "Leopold Rounsivall",
        guestName: "Emmeline Asbury",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        autorizedBy: "Susana Suermeier",
        guestName: "Stacee O'Mullaney",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 14074.7, group: 612.3, contract: 192.81 },
    roomData: {
      total: 84,
      contract: 17,
      outOfOrder: 8,
      stayOver: 12,
      arrivals: 81,
      departures: 56,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8865.23, group: 1185.85, contract: 661.04 },
    roomData: {
      total: 71,
      contract: 20,
      outOfOrder: 7,
      stayOver: 29,
      arrivals: 81,
      departures: 38,
    },
  },
  {
    groupData: [
      { name: "McKenzie, Bruen and Hoppe", roomCount: 56, revenue: 217.81 },
      { name: "Harris, Kemmer and Medhurst", roomCount: 8, revenue: 960.47 },
      { name: "Rath Group", roomCount: 6, revenue: 783.27 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Irv Shoobridge",
        guestName: "Kirstyn Boules",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7308.19, group: 592.58, contract: 1501.51 },
    roomData: {
      total: 77,
      contract: 13,
      outOfOrder: 7,
      stayOver: 60,
      arrivals: 1,
      departures: 77,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Alyosha Bellard",
        guestName: "Marco Wearne",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6537.21, group: 1665.08, contract: 1373.55 },
    roomData: {
      total: 77,
      contract: 7,
      outOfOrder: 6,
      stayOver: 40,
      arrivals: 65,
      departures: 2,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Lou Novotni",
        guestName: "Brittni Baudrey",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14458.01, group: 1966.86, contract: 391.33 },
    roomData: {
      total: 27,
      contract: 6,
      outOfOrder: 4,
      stayOver: 18,
      arrivals: 98,
      departures: 71,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9875.91, group: 228.85, contract: 1382.45 },
    roomData: {
      total: 33,
      contract: 8,
      outOfOrder: 9,
      stayOver: 37,
      arrivals: 7,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "Corkery and Sons", roomCount: 14, revenue: 787.65 },
      { name: "Trantow-Jerde", roomCount: 57, revenue: 540.9 },
      { name: "Klocko and Sons", roomCount: 8, revenue: 192.76 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cordelie Hurford",
        guestName: "Ogdan Abrahams",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
      {
        autorizedBy: "Maddie McComish",
        guestName: "Efrem Nutting",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 19638.59, group: 1883.4, contract: 1092.6 },
    roomData: {
      total: 28,
      contract: 3,
      outOfOrder: 0,
      stayOver: 32,
      arrivals: 12,
      departures: 34,
    },
  },
  {
    groupData: [
      { name: "Halvorson LLC", roomCount: 73, revenue: 203.31 },
      { name: "Wyman, Welch and Upton", roomCount: 99, revenue: 480.27 },
      { name: "Kuhlman Group", roomCount: 36, revenue: 235.52 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Orren Praton",
        guestName: "Leta Rizzardo",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15713.91, group: 1765.66, contract: 705.78 },
    roomData: {
      total: 41,
      contract: 16,
      outOfOrder: 5,
      stayOver: 62,
      arrivals: 30,
      departures: 23,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8968.18, group: 709.01, contract: 1693.89 },
    roomData: {
      total: 53,
      contract: 13,
      outOfOrder: 1,
      stayOver: 51,
      arrivals: 33,
      departures: 40,
    },
  },
  {
    groupData: [
      { name: "Jacobson, Hoppe and Beer", roomCount: 75, revenue: 294.74 },
      { name: "Breitenberg LLC", roomCount: 16, revenue: 891.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Arturo Di Bartolommeo",
        guestName: "Addy Bellas",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 5158.68, group: 185.01, contract: 1662.18 },
    roomData: {
      total: 32,
      contract: 15,
      outOfOrder: 2,
      stayOver: 63,
      arrivals: 75,
      departures: 13,
    },
  },
  {
    groupData: [
      { name: "Kunde Group", roomCount: 69, revenue: 669.64 },
      { name: "Jenkins-Predovic", roomCount: 46, revenue: 406.46 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19080.36, group: 1014.56, contract: 1386.37 },
    roomData: {
      total: 39,
      contract: 9,
      outOfOrder: 6,
      stayOver: 7,
      arrivals: 68,
      departures: 17,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Egbert Denness",
        guestName: "Corey Hedman",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
      {
        autorizedBy: "Rubin Durrell",
        guestName: "Bridie Golton",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9524.71, group: 1124.02, contract: 1371.47 },
    roomData: {
      total: 42,
      contract: 1,
      outOfOrder: 1,
      stayOver: 80,
      arrivals: 70,
      departures: 36,
    },
  },
  {
    groupData: [{ name: "Ruecker Group", roomCount: 56, revenue: 445.95 }],
    compRoomInfo: [
      {
        autorizedBy: "Giovanna Bezarra",
        guestName: "Any Tunmore",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 16148.72, group: 642.57, contract: 1403.34 },
    roomData: {
      total: 53,
      contract: 4,
      outOfOrder: 1,
      stayOver: 45,
      arrivals: 54,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Schumm-Gorczany", roomCount: 91, revenue: 203.15 },
      { name: "Walker Inc", roomCount: 91, revenue: 751.01 },
      { name: "Yost Group", roomCount: 74, revenue: 952.12 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Archer Merton",
        guestName: "Isabelita Mileham",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7355.6, group: 359.72, contract: 1128.77 },
    roomData: {
      total: 100,
      contract: 16,
      outOfOrder: 1,
      stayOver: 27,
      arrivals: 15,
      departures: 63,
    },
  },
  {
    groupData: [{ name: "Wunsch-Deckow", roomCount: 78, revenue: 998.02 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15417.17, group: 649.85, contract: 328.56 },
    roomData: {
      total: 58,
      contract: 4,
      outOfOrder: 3,
      stayOver: 35,
      arrivals: 65,
      departures: 35,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6720.72, group: 1184.11, contract: 1775.67 },
    roomData: {
      total: 86,
      contract: 15,
      outOfOrder: 9,
      stayOver: 16,
      arrivals: 75,
      departures: 64,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Karlens Canham",
        guestName: "Shanta Treagus",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11795.21, group: 1349.16, contract: 628.1 },
    roomData: {
      total: 83,
      contract: 2,
      outOfOrder: 0,
      stayOver: 49,
      arrivals: 30,
      departures: 9,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Bink Sarjant",
        guestName: "Kippy Nono",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11607.22, group: 1833.66, contract: 1879.96 },
    roomData: {
      total: 28,
      contract: 8,
      outOfOrder: 9,
      stayOver: 55,
      arrivals: 25,
      departures: 61,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Sandie Crombie",
        guestName: "Aldis Dikes",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7689.62, group: 1739.57, contract: 1335.62 },
    roomData: {
      total: 93,
      contract: 18,
      outOfOrder: 5,
      stayOver: 47,
      arrivals: 11,
      departures: 64,
    },
  },
  {
    groupData: [
      { name: "Pacocha, Hammes and Kuphal", roomCount: 87, revenue: 510.66 },
      {
        name: "Daniel, Hodkiewicz and Goldner",
        roomCount: 10,
        revenue: 502.94,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Raimund Burling",
        guestName: "Shawn Milnthorpe",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
      {
        autorizedBy: "Calida Magill",
        guestName: "Bliss Nellies",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 17871.54, group: 1019.23, contract: 1312.51 },
    roomData: {
      total: 87,
      contract: 13,
      outOfOrder: 5,
      stayOver: 66,
      arrivals: 95,
      departures: 27,
    },
  },
  {
    groupData: [{ name: "Hermann Inc", roomCount: 68, revenue: 119.62 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10259.8, group: 1806.84, contract: 787.45 },
    roomData: {
      total: 30,
      contract: 2,
      outOfOrder: 9,
      stayOver: 27,
      arrivals: 7,
      departures: 13,
    },
  },
  {
    groupData: [{ name: "Nitzsche LLC", roomCount: 41, revenue: 595.71 }],
    compRoomInfo: [
      {
        autorizedBy: "Devinne Sievewright",
        guestName: "Arny Mation",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
      {
        autorizedBy: "Wilek Beldon",
        guestName: "Lethia Courtney",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11820.35, group: 574.45, contract: 512.94 },
    roomData: {
      total: 54,
      contract: 3,
      outOfOrder: 3,
      stayOver: 18,
      arrivals: 96,
      departures: 18,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ronda Filipowicz",
        guestName: "Lacee Henke",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        autorizedBy: "Berte Dhenin",
        guestName: "Lind Coldwell",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13595.09, group: 1488.03, contract: 331.9 },
    roomData: {
      total: 100,
      contract: 15,
      outOfOrder: 3,
      stayOver: 74,
      arrivals: 90,
      departures: 6,
    },
  },
  {
    groupData: [
      { name: "Russel-Metz", roomCount: 22, revenue: 808.18 },
      { name: "Boyer-Robel", roomCount: 93, revenue: 664.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Tabor Scawen",
        guestName: "Bendite Borrington",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
      {
        autorizedBy: "Palmer Mulchrone",
        guestName: "Nickie Heephy",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17382.57, group: 1440.73, contract: 1729.34 },
    roomData: {
      total: 76,
      contract: 10,
      outOfOrder: 4,
      stayOver: 21,
      arrivals: 100,
      departures: 0,
    },
  },
  {
    groupData: [{ name: "Reinger Group", roomCount: 84, revenue: 322.66 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17441.45, group: 1500.03, contract: 1033.74 },
    roomData: {
      total: 101,
      contract: 4,
      outOfOrder: 2,
      stayOver: 51,
      arrivals: 24,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Hansen and Sons", roomCount: 46, revenue: 735.24 },
      {
        name: "Langworth, Larkin and Leuschke",
        roomCount: 76,
        revenue: 440.28,
      },
      { name: "Corwin-Adams", roomCount: 54, revenue: 658.56 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Terrie Bromidge",
        guestName: "Stephanus Oldfield",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Ilsa Rainsbury",
        guestName: "Hedy Grevile",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19393.14, group: 126.93, contract: 958.05 },
    roomData: {
      total: 38,
      contract: 8,
      outOfOrder: 0,
      stayOver: 11,
      arrivals: 18,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "Harber LLC", roomCount: 41, revenue: 193.3 },
      { name: "Cormier Inc", roomCount: 17, revenue: 512.83 },
      { name: "Klocko Inc", roomCount: 42, revenue: 550.51 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Burr Pamphilon",
        guestName: "Gibbie Tripney",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
      {
        autorizedBy: "Goober Luckes",
        guestName: "Shana Reitenbach",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16786.24, group: 1838.74, contract: 1505.11 },
    roomData: {
      total: 77,
      contract: 11,
      outOfOrder: 8,
      stayOver: 62,
      arrivals: 55,
      departures: 37,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Rudolf Starkie",
        guestName: "Denna Autin",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13130.49, group: 1136.12, contract: 591.67 },
    roomData: {
      total: 73,
      contract: 17,
      outOfOrder: 7,
      stayOver: 68,
      arrivals: 46,
      departures: 32,
    },
  },
  {
    groupData: [{ name: "Orn-Littel", roomCount: 57, revenue: 570.68 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19394.49, group: 1773.28, contract: 1315.75 },
    roomData: {
      total: 60,
      contract: 6,
      outOfOrder: 0,
      stayOver: 19,
      arrivals: 26,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Schuppe, Kling and Herman", roomCount: 11, revenue: 665.23 },
      { name: "Kuhic Inc", roomCount: 24, revenue: 984.85 },
      { name: "Von-Gleason", roomCount: 71, revenue: 686.33 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Edeline Blackwell",
        guestName: "Dall Billin",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        autorizedBy: "Murry Abendroth",
        guestName: "Madonna McKernan",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7878.49, group: 115.33, contract: 1719.2 },
    roomData: {
      total: 47,
      contract: 0,
      outOfOrder: 9,
      stayOver: 43,
      arrivals: 28,
      departures: 9,
    },
  },
  {
    groupData: [
      { name: "Lueilwitz, Von and Mills", roomCount: 64, revenue: 835.38 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Karlotta Chismon",
        guestName: "Nevins Karet",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6669.83, group: 921.45, contract: 971.08 },
    roomData: {
      total: 94,
      contract: 16,
      outOfOrder: 9,
      stayOver: 43,
      arrivals: 94,
      departures: 21,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Hubey Chevalier",
        guestName: "Erek Rundle",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10060.53, group: 934.9, contract: 1192.49 },
    roomData: {
      total: 65,
      contract: 2,
      outOfOrder: 3,
      stayOver: 56,
      arrivals: 17,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Ryan-Rempel", roomCount: 2, revenue: 298.66 },
      { name: "Douglas-Fay", roomCount: 44, revenue: 552.52 },
      { name: "Mayer Group", roomCount: 35, revenue: 259.31 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sherri Baglow",
        guestName: "Kissie Spirritt",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10045.18, group: 283.81, contract: 609.86 },
    roomData: {
      total: 70,
      contract: 13,
      outOfOrder: 9,
      stayOver: 19,
      arrivals: 49,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Braun, Treutel and DuBuque", roomCount: 29, revenue: 606.22 },
      { name: "Oberbrunner and Sons", roomCount: 16, revenue: 987.92 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5102.55, group: 1993.98, contract: 511.49 },
    roomData: {
      total: 91,
      contract: 7,
      outOfOrder: 1,
      stayOver: 41,
      arrivals: 79,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Veum-Hartmann", roomCount: 10, revenue: 717.25 },
      { name: "Emard, Spencer and Larkin", roomCount: 52, revenue: 167.87 },
      { name: "Prohaska-Connelly", roomCount: 90, revenue: 656.33 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 8078.33, group: 1491.85, contract: 1494.71 },
    roomData: {
      total: 61,
      contract: 20,
      outOfOrder: 5,
      stayOver: 10,
      arrivals: 15,
      departures: 58,
    },
  },
  {
    groupData: [
      { name: "Goyette LLC", roomCount: 82, revenue: 582.24 },
      { name: "Thompson-Prohaska", roomCount: 56, revenue: 470.8 },
      { name: "Boehm Inc", roomCount: 89, revenue: 277.2 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Hillel Fittis",
        guestName: "Judas Hargerie",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Pam Neaves",
        guestName: "Carr Bolles",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13597.71, group: 1716.88, contract: 908.71 },
    roomData: {
      total: 82,
      contract: 18,
      outOfOrder: 2,
      stayOver: 74,
      arrivals: 27,
      departures: 69,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14270.59, group: 818.16, contract: 1548.93 },
    roomData: {
      total: 49,
      contract: 0,
      outOfOrder: 6,
      stayOver: 27,
      arrivals: 54,
      departures: 22,
    },
  },
  {
    groupData: [
      {
        name: "Breitenberg, Cruickshank and Raynor",
        roomCount: 97,
        revenue: 119.88,
      },
      { name: "Lynch Inc", roomCount: 7, revenue: 873.73 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19853.57, group: 229.8, contract: 814.24 },
    roomData: {
      total: 61,
      contract: 4,
      outOfOrder: 2,
      stayOver: 30,
      arrivals: 83,
      departures: 2,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16923.87, group: 395.5, contract: 580.77 },
    roomData: {
      total: 86,
      contract: 16,
      outOfOrder: 9,
      stayOver: 57,
      arrivals: 68,
      departures: 44,
    },
  },
  {
    groupData: [{ name: "Murphy Inc", roomCount: 26, revenue: 885.57 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16247.53, group: 1593.81, contract: 1030.18 },
    roomData: {
      total: 33,
      contract: 20,
      outOfOrder: 4,
      stayOver: 42,
      arrivals: 24,
      departures: 9,
    },
  },
  {
    groupData: [
      { name: "Hilpert, Trantow and Carroll", roomCount: 69, revenue: 346.49 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19014.26, group: 323.72, contract: 1191.6 },
    roomData: {
      total: 30,
      contract: 20,
      outOfOrder: 4,
      stayOver: 60,
      arrivals: 73,
      departures: 11,
    },
  },
  {
    groupData: [
      { name: "Mann-Aufderhar", roomCount: 89, revenue: 747.3 },
      { name: "Schuster-Feil", roomCount: 62, revenue: 524.05 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Blancha Arguile",
        guestName: "Estevan Wiltshear",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 12355.65, group: 591.87, contract: 1454.88 },
    roomData: {
      total: 44,
      contract: 1,
      outOfOrder: 2,
      stayOver: 72,
      arrivals: 42,
      departures: 51,
    },
  },
  {
    groupData: [{ name: "Carter Inc", roomCount: 72, revenue: 843.42 }],
    compRoomInfo: [
      {
        autorizedBy: "Fairlie Whitfeld",
        guestName: "Mab Rumney",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Collete Daldry",
        guestName: "Bartel Breitler",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5852.71, group: 1333.0, contract: 1817.69 },
    roomData: {
      total: 63,
      contract: 3,
      outOfOrder: 1,
      stayOver: 40,
      arrivals: 88,
      departures: 13,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Normy Lefley",
        guestName: "Demeter Chasier",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
      {
        autorizedBy: "Guillema Endacott",
        guestName: "Rayna Wolffers",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13247.67, group: 1624.36, contract: 1815.58 },
    roomData: {
      total: 49,
      contract: 7,
      outOfOrder: 1,
      stayOver: 57,
      arrivals: 39,
      departures: 58,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jayme Reasun",
        guestName: "Farly Suckling",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Thadeus Russilll",
        guestName: "Godfry Yurenin",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10543.32, group: 271.69, contract: 403.89 },
    roomData: {
      total: 35,
      contract: 14,
      outOfOrder: 5,
      stayOver: 65,
      arrivals: 16,
      departures: 15,
    },
  },
  {
    groupData: [
      { name: "Kshlerin and Sons", roomCount: 96, revenue: 132.2 },
      { name: "Abshire and Sons", roomCount: 65, revenue: 794.97 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Evaleen Hayes",
        guestName: "Woodie Ucceli",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13777.46, group: 1750.61, contract: 229.88 },
    roomData: {
      total: 60,
      contract: 20,
      outOfOrder: 6,
      stayOver: 74,
      arrivals: 57,
      departures: 27,
    },
  },
  {
    groupData: [
      { name: "Romaguera Inc", roomCount: 101, revenue: 532.71 },
      { name: "Ebert and Sons", roomCount: 30, revenue: 416.05 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Fianna Beecroft",
        guestName: "Mackenzie McNaught",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7164.53, group: 618.36, contract: 1433.39 },
    roomData: {
      total: 53,
      contract: 6,
      outOfOrder: 6,
      stayOver: 67,
      arrivals: 92,
      departures: 68,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9903.07, group: 1334.02, contract: 889.89 },
    roomData: {
      total: 53,
      contract: 12,
      outOfOrder: 8,
      stayOver: 13,
      arrivals: 99,
      departures: 38,
    },
  },
  {
    groupData: [
      { name: "Reinger, Greenholt and Hirthe", roomCount: 72, revenue: 427.82 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Raul Keigher",
        guestName: "Clemmie Thynne",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13170.49, group: 460.61, contract: 1359.82 },
    roomData: {
      total: 61,
      contract: 11,
      outOfOrder: 0,
      stayOver: 78,
      arrivals: 90,
      departures: 26,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Harmonia Nelm",
        guestName: "Kellby McLachlan",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Marchall Marien",
        guestName: "Pascal Baudon",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9874.65, group: 1225.8, contract: 1710.7 },
    roomData: {
      total: 62,
      contract: 9,
      outOfOrder: 8,
      stayOver: 29,
      arrivals: 82,
      departures: 16,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Teddie Jobe",
        guestName: "Gaven McTerry",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6134.33, group: 1235.47, contract: 1753.39 },
    roomData: {
      total: 40,
      contract: 9,
      outOfOrder: 3,
      stayOver: 4,
      arrivals: 95,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Cassin-Mitchell", roomCount: 86, revenue: 327.04 },
      { name: "Ondricka Inc", roomCount: 17, revenue: 608.01 },
      { name: "Durgan LLC", roomCount: 74, revenue: 589.94 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Selinda Gaddesby",
        guestName: "Adolphus Dubble",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13270.76, group: 1731.68, contract: 346.31 },
    roomData: {
      total: 88,
      contract: 15,
      outOfOrder: 5,
      stayOver: 71,
      arrivals: 85,
      departures: 42,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15311.07, group: 1055.39, contract: 565.54 },
    roomData: {
      total: 22,
      contract: 6,
      outOfOrder: 1,
      stayOver: 55,
      arrivals: 34,
      departures: 14,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Pete Ickowicz",
        guestName: "Fiann Biddy",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16436.73, group: 902.48, contract: 1116.59 },
    roomData: {
      total: 97,
      contract: 11,
      outOfOrder: 7,
      stayOver: 24,
      arrivals: 8,
      departures: 48,
    },
  },
  {
    groupData: [
      { name: "Baumbach, Swift and Nicolas", roomCount: 8, revenue: 424.59 },
      { name: "Johnson Group", roomCount: 21, revenue: 328.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Moishe Cosgreave",
        guestName: "Kelby Wildbore",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6472.24, group: 381.41, contract: 812.3 },
    roomData: {
      total: 55,
      contract: 8,
      outOfOrder: 5,
      stayOver: 62,
      arrivals: 25,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "Kessler, Labadie and Abbott", roomCount: 32, revenue: 921.31 },
      { name: "Farrell Inc", roomCount: 37, revenue: 383.28 },
      { name: "Maggio Inc", roomCount: 82, revenue: 323.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Danie Currom",
        guestName: "Melli Rissom",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
      {
        autorizedBy: "Jaquenette Cockin",
        guestName: "Carlita Liddiard",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8533.07, group: 503.87, contract: 379.89 },
    roomData: {
      total: 75,
      contract: 15,
      outOfOrder: 4,
      stayOver: 23,
      arrivals: 83,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "Zulauf, Heller and Abernathy", roomCount: 31, revenue: 685.15 },
      { name: "Shields and Sons", roomCount: 71, revenue: 960.63 },
      { name: "Spinka-Bins", roomCount: 39, revenue: 912.33 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17098.41, group: 561.99, contract: 1651.26 },
    roomData: {
      total: 74,
      contract: 20,
      outOfOrder: 4,
      stayOver: 24,
      arrivals: 54,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "O'Kon-Simonis", roomCount: 64, revenue: 788.58 },
      { name: "Marvin LLC", roomCount: 38, revenue: 563.83 },
      { name: "Spinka Inc", roomCount: 31, revenue: 687.88 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dudley Tynan",
        guestName: "Annie Calfe",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15727.77, group: 1292.79, contract: 1192.37 },
    roomData: {
      total: 85,
      contract: 6,
      outOfOrder: 9,
      stayOver: 57,
      arrivals: 44,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Christiansen and Sons", roomCount: 46, revenue: 244.43 },
      {
        name: "Abshire, Harber and Balistreri",
        roomCount: 74,
        revenue: 293.15,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Padriac O'Nion",
        guestName: "Joya Caldecott",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18835.03, group: 1083.86, contract: 160.06 },
    roomData: {
      total: 60,
      contract: 1,
      outOfOrder: 7,
      stayOver: 71,
      arrivals: 36,
      departures: 5,
    },
  },
  {
    groupData: [
      { name: "Bernier, McGlynn and Borer", roomCount: 76, revenue: 361.35 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lesya Yannikov",
        guestName: "Gerrard Beevens",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13133.85, group: 1137.82, contract: 1679.96 },
    roomData: {
      total: 58,
      contract: 19,
      outOfOrder: 9,
      stayOver: 50,
      arrivals: 34,
      departures: 15,
    },
  },
  {
    groupData: [
      { name: "Leuschke, Wilkinson and Kuhic", roomCount: 15, revenue: 417.56 },
      { name: "Muller Group", roomCount: 41, revenue: 895.4 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Xenia Mayoral",
        guestName: "Doria Sleeny",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12863.28, group: 139.32, contract: 1264.01 },
    roomData: {
      total: 44,
      contract: 4,
      outOfOrder: 9,
      stayOver: 75,
      arrivals: 58,
      departures: 20,
    },
  },
  {
    groupData: [
      { name: "Borer, Marks and Turner", roomCount: 95, revenue: 716.26 },
      { name: "Littel Group", roomCount: 7, revenue: 303.68 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sherwin Campkin",
        guestName: "Derrek Malpass",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6356.24, group: 887.9, contract: 298.55 },
    roomData: {
      total: 69,
      contract: 13,
      outOfOrder: 9,
      stayOver: 51,
      arrivals: 68,
      departures: 41,
    },
  },
  {
    groupData: [
      {
        name: "Cruickshank, Wilderman and Rau",
        roomCount: 65,
        revenue: 663.14,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 5857.41, group: 505.31, contract: 1963.94 },
    roomData: {
      total: 100,
      contract: 12,
      outOfOrder: 5,
      stayOver: 55,
      arrivals: 42,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "Blanda-Schaefer", roomCount: 21, revenue: 834.95 },
      { name: "Jerde, Kiehn and Okuneva", roomCount: 36, revenue: 394.22 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8522.28, group: 1354.23, contract: 1744.34 },
    roomData: {
      total: 41,
      contract: 15,
      outOfOrder: 7,
      stayOver: 53,
      arrivals: 72,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Thiel, Heaney and Keeling", roomCount: 36, revenue: 619.13 },
      { name: "Cronin LLC", roomCount: 41, revenue: 888.87 },
      { name: "Torp, Jast and Daugherty", roomCount: 77, revenue: 240.42 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13163.66, group: 385.63, contract: 291.92 },
    roomData: {
      total: 60,
      contract: 17,
      outOfOrder: 7,
      stayOver: 2,
      arrivals: 25,
      departures: 76,
    },
  },
  {
    groupData: [
      { name: "Weissnat Group", roomCount: 64, revenue: 466.03 },
      { name: "Nolan, Lowe and Funk", roomCount: 52, revenue: 191.01 },
      { name: "Swaniawski Group", roomCount: 24, revenue: 277.44 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Wally Fawks",
        guestName: "Jayne Gonnely",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
      {
        autorizedBy: "Rock Warrillow",
        guestName: "Devora Butter",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8964.25, group: 489.64, contract: 1193.06 },
    roomData: {
      total: 30,
      contract: 5,
      outOfOrder: 3,
      stayOver: 48,
      arrivals: 57,
      departures: 80,
    },
  },
  {
    groupData: [
      { name: "Stark, Wiza and Kshlerin", roomCount: 5, revenue: 702.67 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Vivianna Gimblett",
        guestName: "Arleyne Gemeau",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8922.98, group: 391.71, contract: 1669.73 },
    roomData: {
      total: 41,
      contract: 19,
      outOfOrder: 6,
      stayOver: 40,
      arrivals: 87,
      departures: 71,
    },
  },
  {
    groupData: [
      { name: "Morar, Hermiston and Okuneva", roomCount: 56, revenue: 905.59 },
      { name: "Kunde and Sons", roomCount: 64, revenue: 388.05 },
      { name: "O'Hara-Padberg", roomCount: 93, revenue: 898.41 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Roxanne Gosdin",
        guestName: "Michaeline Sutton",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18744.02, group: 970.85, contract: 452.26 },
    roomData: {
      total: 40,
      contract: 16,
      outOfOrder: 2,
      stayOver: 49,
      arrivals: 91,
      departures: 48,
    },
  },
  {
    groupData: [{ name: "Metz-O'Conner", roomCount: 29, revenue: 647.44 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15345.16, group: 1957.19, contract: 207.58 },
    roomData: {
      total: 61,
      contract: 17,
      outOfOrder: 0,
      stayOver: 14,
      arrivals: 11,
      departures: 14,
    },
  },
  {
    groupData: [
      { name: "Renner-Wisoky", roomCount: 100, revenue: 713.79 },
      { name: "Kulas, Berge and Funk", roomCount: 56, revenue: 789.54 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13572.97, group: 1033.33, contract: 1640.95 },
    roomData: {
      total: 91,
      contract: 15,
      outOfOrder: 3,
      stayOver: 38,
      arrivals: 8,
      departures: 54,
    },
  },
  {
    groupData: [
      { name: "Becker-Kub", roomCount: 75, revenue: 797.17 },
      { name: "Funk-Ullrich", roomCount: 93, revenue: 170.55 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 6426.96, group: 1727.97, contract: 231.98 },
    roomData: {
      total: 70,
      contract: 16,
      outOfOrder: 7,
      stayOver: 22,
      arrivals: 100,
      departures: 39,
    },
  },
  {
    groupData: [
      { name: "Lind, Kunde and Fritsch", roomCount: 87, revenue: 947.87 },
      { name: "Haag LLC", roomCount: 89, revenue: 880.6 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Keven Shinefield",
        guestName: "Jarad Collip",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14289.87, group: 919.49, contract: 100.74 },
    roomData: {
      total: 34,
      contract: 19,
      outOfOrder: 0,
      stayOver: 47,
      arrivals: 0,
      departures: 39,
    },
  },
  {
    groupData: [
      { name: "Vandervort-Koelpin", roomCount: 86, revenue: 293.32 },
      { name: "Fay-Ratke", roomCount: 27, revenue: 820.33 },
      { name: "Pfeffer and Sons", roomCount: 102, revenue: 425.96 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Roseann Pappin",
        guestName: "Dalila Thairs",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9929.05, group: 815.71, contract: 1742.39 },
    roomData: {
      total: 93,
      contract: 10,
      outOfOrder: 2,
      stayOver: 64,
      arrivals: 19,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "Prohaska, Hilpert and Haag", roomCount: 88, revenue: 798.65 },
      { name: "Schmidt-Franecki", roomCount: 13, revenue: 122.99 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Moselle Flowerden",
        guestName: "Glory Shaves",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13431.48, group: 1830.13, contract: 718.0 },
    roomData: {
      total: 23,
      contract: 7,
      outOfOrder: 4,
      stayOver: 72,
      arrivals: 18,
      departures: 67,
    },
  },
  {
    groupData: [
      { name: "Weimann-Rosenbaum", roomCount: 98, revenue: 202.61 },
      { name: "Schmeler Group", roomCount: 34, revenue: 418.1 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Hildagard Barlee",
        guestName: "Forrest Phorsby",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Steffi Ropkes",
        guestName: "Dorie Yarrall",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14993.5, group: 1243.92, contract: 1902.66 },
    roomData: {
      total: 25,
      contract: 11,
      outOfOrder: 1,
      stayOver: 44,
      arrivals: 100,
      departures: 26,
    },
  },
  {
    groupData: [
      { name: "Paucek, Halvorson and Waelchi", roomCount: 2, revenue: 454.17 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 14299.53, group: 224.69, contract: 702.82 },
    roomData: {
      total: 27,
      contract: 3,
      outOfOrder: 3,
      stayOver: 71,
      arrivals: 17,
      departures: 64,
    },
  },
  {
    groupData: [{ name: "McCullough Inc", roomCount: 25, revenue: 947.85 }],
    compRoomInfo: [
      {
        autorizedBy: "Nicolas Bruyett",
        guestName: "Putnem Jakubski",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        autorizedBy: "Dolley Heinonen",
        guestName: "Rad Blankley",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19136.24, group: 717.65, contract: 890.12 },
    roomData: {
      total: 36,
      contract: 18,
      outOfOrder: 9,
      stayOver: 79,
      arrivals: 99,
      departures: 36,
    },
  },
  {
    groupData: [
      {
        name: "Rutherford, Thompson and Wuckert",
        roomCount: 71,
        revenue: 871.1,
      },
      { name: "Glover and Sons", roomCount: 46, revenue: 394.3 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Alvis Pontefract",
        guestName: "Jena O'Doireidh",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Niccolo Adlem",
        guestName: "Bastian Bauman",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19609.58, group: 1638.18, contract: 1547.59 },
    roomData: {
      total: 63,
      contract: 18,
      outOfOrder: 6,
      stayOver: 24,
      arrivals: 84,
      departures: 41,
    },
  },
  {
    groupData: [{ name: "Lockman-Stamm", roomCount: 46, revenue: 443.32 }],
    compRoomInfo: [
      {
        autorizedBy: "Findley Battin",
        guestName: "Diane-marie Imlaw",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
      {
        autorizedBy: "Butch Carnegie",
        guestName: "Giorgi Lawleff",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6193.75, group: 1149.36, contract: 1307.12 },
    roomData: {
      total: 65,
      contract: 15,
      outOfOrder: 2,
      stayOver: 10,
      arrivals: 96,
      departures: 60,
    },
  },
  {
    groupData: [
      { name: "Abbott-Macejkovic", roomCount: 67, revenue: 824.69 },
      { name: "Lind, Tromp and Yost", roomCount: 60, revenue: 329.59 },
      { name: "Spencer-D'Amore", roomCount: 75, revenue: 618.2 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jamison Yole",
        guestName: "Dorella Middell",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
      {
        autorizedBy: "Trixi Van der Kruijs",
        guestName: "Cordy Gooderham",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5403.57, group: 694.39, contract: 1675.27 },
    roomData: {
      total: 37,
      contract: 19,
      outOfOrder: 0,
      stayOver: 52,
      arrivals: 65,
      departures: 24,
    },
  },
  {
    groupData: [
      { name: "Schaefer and Sons", roomCount: 62, revenue: 772.8 },
      { name: "Christiansen Inc", roomCount: 95, revenue: 286.02 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Tony Zanotti",
        guestName: "Yanaton Hanfrey",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Leona MacKenney",
        guestName: "Ruth Partleton",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6425.35, group: 1271.23, contract: 250.36 },
    roomData: {
      total: 23,
      contract: 12,
      outOfOrder: 0,
      stayOver: 64,
      arrivals: 16,
      departures: 78,
    },
  },
  {
    groupData: [
      { name: "Bins, Walter and Beatty", roomCount: 40, revenue: 446.57 },
      { name: "Blick, Kub and Hermiston", roomCount: 11, revenue: 926.21 },
      { name: "Kohler-Kovacek", roomCount: 99, revenue: 447.41 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7641.68, group: 1277.66, contract: 1138.77 },
    roomData: {
      total: 80,
      contract: 19,
      outOfOrder: 2,
      stayOver: 73,
      arrivals: 77,
      departures: 42,
    },
  },
  {
    groupData: [
      { name: "Ledner Inc", roomCount: 67, revenue: 766.15 },
      { name: "Hilll, Braun and Wilderman", roomCount: 42, revenue: 195.58 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Evelyn Albinson",
        guestName: "Collie Lowers",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
      {
        autorizedBy: "Paquito Garvie",
        guestName: "Tina MacMoyer",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11716.12, group: 1864.08, contract: 1996.23 },
    roomData: {
      total: 100,
      contract: 2,
      outOfOrder: 6,
      stayOver: 52,
      arrivals: 40,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Gibson Group", roomCount: 88, revenue: 999.27 },
      { name: "O'Hara, Hegmann and Lemke", roomCount: 25, revenue: 196.12 },
      { name: "Reichert, Gerlach and DuBuque", roomCount: 88, revenue: 447.04 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Reilly Harring",
        guestName: "Riobard Chastel",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8307.54, group: 808.8, contract: 1264.3 },
    roomData: {
      total: 73,
      contract: 18,
      outOfOrder: 2,
      stayOver: 74,
      arrivals: 20,
      departures: 56,
    },
  },
  {
    groupData: [
      { name: "Brakus, Fritsch and Torphy", roomCount: 32, revenue: 119.62 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 17058.54, group: 558.26, contract: 953.7 },
    roomData: {
      total: 41,
      contract: 20,
      outOfOrder: 3,
      stayOver: 58,
      arrivals: 64,
      departures: 51,
    },
  },
  {
    groupData: [
      { name: "Halvorson-Runte", roomCount: 94, revenue: 297.9 },
      { name: "Predovic-Altenwerth", roomCount: 95, revenue: 464.65 },
      { name: "Schuster-Heathcote", roomCount: 37, revenue: 927.04 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Rora Branchet",
        guestName: "Kimble Rontsch",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
      {
        autorizedBy: "Starlin Jelf",
        guestName: "Seumas Longhorne",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9443.03, group: 1895.34, contract: 1602.47 },
    roomData: {
      total: 59,
      contract: 14,
      outOfOrder: 4,
      stayOver: 53,
      arrivals: 43,
      departures: 65,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Laverna Siseland",
        guestName: "Kat Brade",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
      {
        autorizedBy: "Johna Pietersma",
        guestName: "Dietrich Beardwell",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5243.26, group: 1698.25, contract: 1740.55 },
    roomData: {
      total: 42,
      contract: 19,
      outOfOrder: 8,
      stayOver: 45,
      arrivals: 96,
      departures: 21,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Therine Simic",
        guestName: "Nedi Fife",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        autorizedBy: "Maybelle Ruller",
        guestName: "Florri Turnor",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15020.85, group: 911.17, contract: 309.11 },
    roomData: {
      total: 26,
      contract: 18,
      outOfOrder: 4,
      stayOver: 8,
      arrivals: 23,
      departures: 54,
    },
  },
  {
    groupData: [
      { name: "Hagenes Inc", roomCount: 84, revenue: 669.24 },
      { name: "Jacobi Inc", roomCount: 30, revenue: 479.17 },
      { name: "Steuber, Kovacek and White", roomCount: 41, revenue: 732.74 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Tansy Pickles",
        guestName: "Claude Nichol",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        autorizedBy: "Sibby Burfoot",
        guestName: "Almeta Cockill",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13853.06, group: 1336.19, contract: 504.85 },
    roomData: {
      total: 65,
      contract: 0,
      outOfOrder: 3,
      stayOver: 51,
      arrivals: 36,
      departures: 38,
    },
  },
  {
    groupData: [
      { name: "Jacobi, Rohan and Rolfson", roomCount: 84, revenue: 307.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Noella Kornilov",
        guestName: "Lea Bassilashvili",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17577.22, group: 1763.22, contract: 769.38 },
    roomData: {
      total: 74,
      contract: 9,
      outOfOrder: 9,
      stayOver: 62,
      arrivals: 88,
      departures: 78,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jessa Ciccotti",
        guestName: "Cordelia Sellman",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
      {
        autorizedBy: "Northrup Josovitz",
        guestName: "Lombard Bleakman",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7172.14, group: 1981.32, contract: 529.48 },
    roomData: {
      total: 58,
      contract: 15,
      outOfOrder: 8,
      stayOver: 70,
      arrivals: 28,
      departures: 6,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Bron Ahrenius",
        guestName: "Darcey McCarl",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
      {
        autorizedBy: "Jeanette Ellams",
        guestName: "Baillie Richardt",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13113.46, group: 606.92, contract: 1765.93 },
    roomData: {
      total: 38,
      contract: 15,
      outOfOrder: 9,
      stayOver: 33,
      arrivals: 13,
      departures: 1,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7635.19, group: 1925.9, contract: 380.52 },
    roomData: {
      total: 102,
      contract: 11,
      outOfOrder: 7,
      stayOver: 31,
      arrivals: 44,
      departures: 51,
    },
  },
  {
    groupData: [{ name: "Reichert and Sons", roomCount: 26, revenue: 865.2 }],
    compRoomInfo: [
      {
        autorizedBy: "Hamish Fussey",
        guestName: "Kliment Peschet",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
      {
        autorizedBy: "Kay Pollok",
        guestName: "Quinn Banfill",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12951.4, group: 1488.25, contract: 478.18 },
    roomData: {
      total: 60,
      contract: 2,
      outOfOrder: 5,
      stayOver: 26,
      arrivals: 84,
      departures: 55,
    },
  },
  {
    groupData: [{ name: "Fritsch-Cummerata", roomCount: 21, revenue: 409.44 }],
    compRoomInfo: [
      {
        autorizedBy: "Malvina Vaulkhard",
        guestName: "Brandy Baxstair",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19985.08, group: 827.11, contract: 1590.17 },
    roomData: {
      total: 49,
      contract: 18,
      outOfOrder: 3,
      stayOver: 64,
      arrivals: 58,
      departures: 22,
    },
  },
  {
    groupData: [
      { name: "Rowe, Powlowski and Mante", roomCount: 94, revenue: 480.15 },
      { name: "Effertz-Harvey", roomCount: 65, revenue: 548.5 },
      { name: "Russel Group", roomCount: 67, revenue: 499.23 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Morse Bowness",
        guestName: "Tab Swain",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8953.26, group: 1816.92, contract: 1856.97 },
    roomData: {
      total: 76,
      contract: 1,
      outOfOrder: 1,
      stayOver: 42,
      arrivals: 70,
      departures: 27,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Lowrance Straneo",
        guestName: "Molly Downs",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
      {
        autorizedBy: "Carolynn Cowap",
        guestName: "Don Dibble",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10605.02, group: 495.63, contract: 911.41 },
    roomData: {
      total: 34,
      contract: 20,
      outOfOrder: 0,
      stayOver: 76,
      arrivals: 82,
      departures: 33,
    },
  },
  {
    groupData: [
      { name: "Hartmann Group", roomCount: 89, revenue: 847.48 },
      {
        name: "Rempel, Pfannerstill and Ullrich",
        roomCount: 35,
        revenue: 914.14,
      },
      { name: "Klocko-Abshire", roomCount: 89, revenue: 496.36 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jenelle Llopis",
        guestName: "Rubia Durrance",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10697.41, group: 1388.48, contract: 1242.09 },
    roomData: {
      total: 94,
      contract: 14,
      outOfOrder: 3,
      stayOver: 60,
      arrivals: 59,
      departures: 38,
    },
  },
  {
    groupData: [
      { name: "Nolan-MacGyver", roomCount: 93, revenue: 271.94 },
      { name: "Greenholt-Koelpin", roomCount: 94, revenue: 344.19 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Greer Paireman",
        guestName: "Raven Blakeney",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11497.62, group: 1360.73, contract: 1497.49 },
    roomData: {
      total: 67,
      contract: 5,
      outOfOrder: 5,
      stayOver: 22,
      arrivals: 56,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "Dare and Sons", roomCount: 90, revenue: 295.48 },
      { name: "Harvey Inc", roomCount: 18, revenue: 370.75 },
      { name: "Rolfson, Walker and Kunze", roomCount: 31, revenue: 691.34 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Damaris Alecock",
        guestName: "Miguel Mackro",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15952.5, group: 335.57, contract: 964.44 },
    roomData: {
      total: 53,
      contract: 2,
      outOfOrder: 4,
      stayOver: 62,
      arrivals: 98,
      departures: 45,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5058.44, group: 1650.32, contract: 1480.15 },
    roomData: {
      total: 73,
      contract: 5,
      outOfOrder: 3,
      stayOver: 26,
      arrivals: 19,
      departures: 21,
    },
  },
  {
    groupData: [
      { name: "Rodriguez-Kunze", roomCount: 53, revenue: 749.26 },
      { name: "Boyle and Sons", roomCount: 48, revenue: 206.68 },
      { name: "White-Von", roomCount: 60, revenue: 316.74 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11241.04, group: 187.17, contract: 1460.71 },
    roomData: {
      total: 80,
      contract: 18,
      outOfOrder: 3,
      stayOver: 64,
      arrivals: 32,
      departures: 70,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Chester Dymick",
        guestName: "Marje Moncrefe",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5031.87, group: 131.63, contract: 427.39 },
    roomData: {
      total: 42,
      contract: 19,
      outOfOrder: 7,
      stayOver: 79,
      arrivals: 81,
      departures: 50,
    },
  },
  {
    groupData: [
      {
        name: "Nikolaus, Lubowitz and Oberbrunner",
        roomCount: 73,
        revenue: 125.23,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8979.23, group: 232.01, contract: 479.45 },
    roomData: {
      total: 53,
      contract: 0,
      outOfOrder: 0,
      stayOver: 75,
      arrivals: 43,
      departures: 2,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8238.29, group: 1120.97, contract: 1974.11 },
    roomData: {
      total: 24,
      contract: 18,
      outOfOrder: 0,
      stayOver: 41,
      arrivals: 27,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "Reynolds Inc", roomCount: 18, revenue: 500.79 },
      { name: "Jaskolski-Schroeder", roomCount: 20, revenue: 308.87 },
      { name: "Grady Inc", roomCount: 79, revenue: 243.09 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Eberto Mantione",
        guestName: "Ronnie Folshom",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11324.04, group: 309.27, contract: 773.8 },
    roomData: {
      total: 53,
      contract: 7,
      outOfOrder: 5,
      stayOver: 48,
      arrivals: 12,
      departures: 62,
    },
  },
  {
    groupData: [
      { name: "Schneider-Hegmann", roomCount: 93, revenue: 554.95 },
      { name: "O'Conner-Dickens", roomCount: 48, revenue: 911.5 },
      { name: "Murazik Inc", roomCount: 47, revenue: 220.37 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Devlen Berford",
        guestName: "Rogerio Pask",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8534.77, group: 1688.13, contract: 242.96 },
    roomData: {
      total: 28,
      contract: 16,
      outOfOrder: 1,
      stayOver: 49,
      arrivals: 57,
      departures: 62,
    },
  },
  {
    groupData: [
      { name: "Sanford LLC", roomCount: 28, revenue: 713.74 },
      { name: "Homenick-Daniel", roomCount: 48, revenue: 263.59 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Nell Barnaby",
        guestName: "Orion Merrett",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Dinny Beart",
        guestName: "Caye Paskell",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9673.19, group: 1421.05, contract: 315.54 },
    roomData: {
      total: 66,
      contract: 13,
      outOfOrder: 6,
      stayOver: 60,
      arrivals: 68,
      departures: 36,
    },
  },
  {
    groupData: [
      { name: "Koch, Muller and Crona", roomCount: 5, revenue: 560.68 },
      { name: "Walter, Rolfson and Crooks", roomCount: 91, revenue: 230.53 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Francis Gyde",
        guestName: "Cornie Matous",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
      {
        autorizedBy: "Malina Gaiford",
        guestName: "Rustin Lardnar",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18562.11, group: 392.7, contract: 105.16 },
    roomData: {
      total: 80,
      contract: 16,
      outOfOrder: 5,
      stayOver: 15,
      arrivals: 54,
      departures: 24,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Aurlie Lepope",
        guestName: "Roarke Latham",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
      {
        autorizedBy: "Bealle Muffen",
        guestName: "Kingsley Dowd",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19557.33, group: 431.1, contract: 1985.13 },
    roomData: {
      total: 52,
      contract: 7,
      outOfOrder: 2,
      stayOver: 48,
      arrivals: 70,
      departures: 0,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6256.39, group: 297.02, contract: 931.96 },
    roomData: {
      total: 87,
      contract: 0,
      outOfOrder: 8,
      stayOver: 6,
      arrivals: 93,
      departures: 61,
    },
  },
  {
    groupData: [
      { name: "Considine-Spinka", roomCount: 18, revenue: 828.27 },
      { name: "Rowe-Ankunding", roomCount: 32, revenue: 742.65 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Anjela Blaske",
        guestName: "Magdalen Whatley",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18013.13, group: 261.51, contract: 1214.76 },
    roomData: {
      total: 62,
      contract: 13,
      outOfOrder: 5,
      stayOver: 21,
      arrivals: 11,
      departures: 47,
    },
  },
  {
    groupData: [
      { name: "Boehm Inc", roomCount: 8, revenue: 152.5 },
      { name: "Bartoletti, Heaney and Sawayn", roomCount: 34, revenue: 694.55 },
      { name: "Nienow Group", roomCount: 10, revenue: 281.34 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Clio Burgoin",
        guestName: "Kristi Parsonson",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Myer Posnette",
        guestName: "Viviene O' Bee",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18733.92, group: 748.72, contract: 1335.89 },
    roomData: {
      total: 97,
      contract: 12,
      outOfOrder: 4,
      stayOver: 72,
      arrivals: 36,
      departures: 1,
    },
  },
  {
    groupData: [
      { name: "Durgan, Spencer and Casper", roomCount: 37, revenue: 135.87 },
      { name: "Kuhn and Sons", roomCount: 62, revenue: 424.68 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sayre Gimber",
        guestName: "Julieta Ticic",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
      {
        autorizedBy: "Micheil Mitchard",
        guestName: "Wallace Predohl",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 15938.85, group: 1603.78, contract: 1944.26 },
    roomData: {
      total: 30,
      contract: 13,
      outOfOrder: 3,
      stayOver: 18,
      arrivals: 26,
      departures: 68,
    },
  },
  {
    groupData: [
      { name: "Kassulke Inc", roomCount: 8, revenue: 459.89 },
      { name: "Simonis Group", roomCount: 76, revenue: 391.52 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15566.75, group: 1922.83, contract: 153.2 },
    roomData: {
      total: 32,
      contract: 17,
      outOfOrder: 9,
      stayOver: 51,
      arrivals: 62,
      departures: 35,
    },
  },
  {
    groupData: [
      { name: "Kris-Harber", roomCount: 2, revenue: 618.11 },
      { name: "Ernser, Runte and Hilpert", roomCount: 90, revenue: 747.24 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Merrill Turfitt",
        guestName: "Sissy Bolliver",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16117.04, group: 611.38, contract: 1278.06 },
    roomData: {
      total: 73,
      contract: 7,
      outOfOrder: 3,
      stayOver: 74,
      arrivals: 81,
      departures: 65,
    },
  },
  {
    groupData: [
      { name: "Brakus-Connelly", roomCount: 52, revenue: 418.88 },
      { name: "Nikolaus Inc", roomCount: 65, revenue: 428.42 },
      { name: "Harber Group", roomCount: 28, revenue: 914.71 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11049.84, group: 337.39, contract: 772.94 },
    roomData: {
      total: 41,
      contract: 6,
      outOfOrder: 2,
      stayOver: 75,
      arrivals: 4,
      departures: 71,
    },
  },
  {
    groupData: [
      { name: "Reynolds LLC", roomCount: 21, revenue: 653.4 },
      { name: "Herzog, Beahan and Wuckert", roomCount: 64, revenue: 753.61 },
      { name: "Hauck and Sons", roomCount: 78, revenue: 431.84 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Isis McKue",
        guestName: "Ralina Haeslier",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6420.54, group: 116.77, contract: 1906.53 },
    roomData: {
      total: 55,
      contract: 16,
      outOfOrder: 4,
      stayOver: 36,
      arrivals: 65,
      departures: 70,
    },
  },
  {
    groupData: [
      { name: "Fay, Kuhn and Stamm", roomCount: 74, revenue: 644.15 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Danielle Bertome",
        guestName: "Mal Sessuns",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 18451.88, group: 1995.85, contract: 1173.14 },
    roomData: {
      total: 53,
      contract: 3,
      outOfOrder: 2,
      stayOver: 69,
      arrivals: 28,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Borer LLC", roomCount: 50, revenue: 514.59 },
      { name: "Wolf-Jacobson", roomCount: 33, revenue: 941.06 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14659.58, group: 958.03, contract: 1954.94 },
    roomData: {
      total: 99,
      contract: 3,
      outOfOrder: 6,
      stayOver: 53,
      arrivals: 74,
      departures: 38,
    },
  },
  {
    groupData: [
      { name: "Wilkinson and Sons", roomCount: 64, revenue: 446.7 },
      { name: "Gibson, Von and Bernhard", roomCount: 58, revenue: 712.71 },
      { name: "Aufderhar, Ernser and Keebler", roomCount: 39, revenue: 119.76 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5533.79, group: 1640.01, contract: 733.91 },
    roomData: {
      total: 101,
      contract: 13,
      outOfOrder: 6,
      stayOver: 48,
      arrivals: 23,
      departures: 16,
    },
  },
  {
    groupData: [{ name: "Friesen Inc", roomCount: 90, revenue: 230.33 }],
    compRoomInfo: [
      {
        autorizedBy: "Mordy Giovannazzi",
        guestName: "Renato Spillman",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        autorizedBy: "Val Alban",
        guestName: "Wiatt Sneden",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10509.8, group: 1911.8, contract: 798.2 },
    roomData: {
      total: 102,
      contract: 12,
      outOfOrder: 6,
      stayOver: 62,
      arrivals: 29,
      departures: 37,
    },
  },
  {
    groupData: [
      { name: "Douglas LLC", roomCount: 83, revenue: 585.87 },
      { name: "Franecki LLC", roomCount: 93, revenue: 154.2 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Joshuah Knudsen",
        guestName: "Wandie Hawe",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Adolphe Lapham",
        guestName: "Bryna Byne",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6185.7, group: 611.19, contract: 854.31 },
    roomData: {
      total: 84,
      contract: 13,
      outOfOrder: 9,
      stayOver: 22,
      arrivals: 21,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Hessel, Ullrich and Renner", roomCount: 18, revenue: 422.85 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10714.48, group: 772.65, contract: 1958.99 },
    roomData: {
      total: 35,
      contract: 10,
      outOfOrder: 8,
      stayOver: 11,
      arrivals: 92,
      departures: 0,
    },
  },
  {
    groupData: [
      { name: "Braun, Mayer and Johnson", roomCount: 45, revenue: 497.28 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Mannie Lapenna",
        guestName: "Editha Rosindill",
        reason:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      },
      {
        autorizedBy: "Willem Luckie",
        guestName: "Correy Dobell",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8543.61, group: 419.49, contract: 1889.14 },
    roomData: {
      total: 35,
      contract: 8,
      outOfOrder: 7,
      stayOver: 75,
      arrivals: 1,
      departures: 41,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 11727.29, group: 833.84, contract: 1800.85 },
    roomData: {
      total: 99,
      contract: 17,
      outOfOrder: 0,
      stayOver: 45,
      arrivals: 98,
      departures: 5,
    },
  },
  {
    groupData: [
      { name: "Casper-Cronin", roomCount: 86, revenue: 586.68 },
      { name: "Rutherford Inc", roomCount: 97, revenue: 614.0 },
      { name: "Greenfelder-Murray", roomCount: 16, revenue: 488.29 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17231.96, group: 907.23, contract: 922.82 },
    roomData: {
      total: 34,
      contract: 20,
      outOfOrder: 9,
      stayOver: 26,
      arrivals: 94,
      departures: 38,
    },
  },
  {
    groupData: [
      { name: "Breitenberg-Dibbert", roomCount: 95, revenue: 987.72 },
      { name: "Kuhlman Group", roomCount: 75, revenue: 652.31 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Adriane Greenshiels",
        guestName: "Killy Zorer",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Melessa Rubel",
        guestName: "Brianne Vequaud",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19513.17, group: 181.36, contract: 553.62 },
    roomData: {
      total: 35,
      contract: 3,
      outOfOrder: 1,
      stayOver: 48,
      arrivals: 5,
      departures: 47,
    },
  },
  {
    groupData: [
      { name: "Ferry Inc", roomCount: 18, revenue: 984.01 },
      { name: "Johnston and Sons", roomCount: 86, revenue: 227.2 },
      { name: "Wisoky, Green and Gleason", roomCount: 85, revenue: 354.75 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bunnie Luter",
        guestName: "Drusy Hew",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11519.89, group: 1588.69, contract: 980.75 },
    roomData: {
      total: 27,
      contract: 10,
      outOfOrder: 7,
      stayOver: 46,
      arrivals: 86,
      departures: 66,
    },
  },
  {
    groupData: [
      {
        name: "Runolfsdottir, Gibson and Schmitt",
        roomCount: 80,
        revenue: 713.33,
      },
      { name: "Pollich Group", roomCount: 24, revenue: 504.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Durante Downs",
        guestName: "Caesar Taylorson",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12056.18, group: 973.19, contract: 1721.47 },
    roomData: {
      total: 64,
      contract: 6,
      outOfOrder: 4,
      stayOver: 21,
      arrivals: 25,
      departures: 51,
    },
  },
  {
    groupData: [
      { name: "Schulist-Bernier", roomCount: 101, revenue: 646.34 },
      { name: "Deckow, Harber and Funk", roomCount: 34, revenue: 616.08 },
      { name: "Batz-Weimann", roomCount: 66, revenue: 388.64 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ava Crees",
        guestName: "Dick Tiffney",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15639.29, group: 568.33, contract: 1365.55 },
    roomData: {
      total: 90,
      contract: 8,
      outOfOrder: 5,
      stayOver: 80,
      arrivals: 34,
      departures: 34,
    },
  },
  {
    groupData: [
      { name: "Labadie Inc", roomCount: 22, revenue: 120.69 },
      { name: "Nader, Johns and Bode", roomCount: 43, revenue: 270.53 },
      { name: "Spencer and Sons", roomCount: 25, revenue: 774.15 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Puff Vuitte",
        guestName: "Lorine Deaves",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
      {
        autorizedBy: "Valenka Blanpein",
        guestName: "Horatio De Filippi",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12001.35, group: 1585.31, contract: 1997.88 },
    roomData: {
      total: 56,
      contract: 9,
      outOfOrder: 5,
      stayOver: 73,
      arrivals: 7,
      departures: 54,
    },
  },
  {
    groupData: [
      { name: "Abbott-Hayes", roomCount: 33, revenue: 201.51 },
      { name: "Zieme, Kirlin and Harris", roomCount: 26, revenue: 674.13 },
      { name: "Turcotte-Greenholt", roomCount: 14, revenue: 859.62 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lanie Cottem",
        guestName: "Cammy Kurth",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8539.78, group: 248.69, contract: 330.88 },
    roomData: {
      total: 62,
      contract: 9,
      outOfOrder: 2,
      stayOver: 27,
      arrivals: 81,
      departures: 67,
    },
  },
  {
    groupData: [
      { name: "Brekke-Hane", roomCount: 60, revenue: 434.69 },
      { name: "Macejkovic-Jerde", roomCount: 13, revenue: 927.06 },
      { name: "Rau, Lockman and Krajcik", roomCount: 6, revenue: 305.63 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Maurise Pickthorne",
        guestName: "Rebekah Sillick",
        reason:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      },
      {
        autorizedBy: "Staci Panting",
        guestName: "Teddy Stook",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12843.36, group: 1882.72, contract: 1380.06 },
    roomData: {
      total: 79,
      contract: 16,
      outOfOrder: 7,
      stayOver: 75,
      arrivals: 18,
      departures: 47,
    },
  },
  {
    groupData: [
      { name: "Beatty Group", roomCount: 91, revenue: 307.78 },
      { name: "Conroy Inc", roomCount: 93, revenue: 169.13 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14926.59, group: 167.63, contract: 1417.94 },
    roomData: {
      total: 66,
      contract: 15,
      outOfOrder: 0,
      stayOver: 24,
      arrivals: 46,
      departures: 41,
    },
  },
  {
    groupData: [
      { name: "Walker LLC", roomCount: 23, revenue: 506.59 },
      { name: "Heller, Murazik and Jacobson", roomCount: 96, revenue: 673.54 },
      { name: "Kunze-Morissette", roomCount: 4, revenue: 258.56 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lorie Shapcott",
        guestName: "Barry Curedell",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5235.34, group: 811.92, contract: 1613.28 },
    roomData: {
      total: 86,
      contract: 2,
      outOfOrder: 3,
      stayOver: 72,
      arrivals: 85,
      departures: 64,
    },
  },
  {
    groupData: [
      { name: "Ullrich, Keebler and Cummings", roomCount: 63, revenue: 660.25 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 19106.07, group: 1850.88, contract: 658.71 },
    roomData: {
      total: 55,
      contract: 1,
      outOfOrder: 2,
      stayOver: 0,
      arrivals: 70,
      departures: 0,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Balduin Roch",
        guestName: "Luca Bowbrick",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
      {
        autorizedBy: "Viole Mewha",
        guestName: "Aigneis Westoll",
        reason:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17686.18, group: 1221.52, contract: 1607.66 },
    roomData: {
      total: 81,
      contract: 12,
      outOfOrder: 5,
      stayOver: 32,
      arrivals: 74,
      departures: 18,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Fabe Iggulden",
        guestName: "Catharina McNamara",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
      {
        autorizedBy: "Stavro Caltun",
        guestName: "Dalt Muscat",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15817.69, group: 101.97, contract: 686.28 },
    roomData: {
      total: 83,
      contract: 18,
      outOfOrder: 7,
      stayOver: 69,
      arrivals: 56,
      departures: 62,
    },
  },
  {
    groupData: [
      { name: "Bauch, Rowe and Metz", roomCount: 32, revenue: 153.35 },
      {
        name: "Halvorson, Gerlach and McClure",
        roomCount: 71,
        revenue: 529.69,
      },
      { name: "Pollich Inc", roomCount: 96, revenue: 681.57 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Sharline Attree",
        guestName: "Sibelle Gritland",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
      {
        autorizedBy: "Germain Kornyshev",
        guestName: "Rafa Fowley",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9546.18, group: 1089.5, contract: 1438.65 },
    roomData: {
      total: 44,
      contract: 0,
      outOfOrder: 7,
      stayOver: 67,
      arrivals: 72,
      departures: 12,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13796.85, group: 267.09, contract: 1165.91 },
    roomData: {
      total: 32,
      contract: 3,
      outOfOrder: 7,
      stayOver: 74,
      arrivals: 9,
      departures: 8,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17562.96, group: 1739.6, contract: 1232.1 },
    roomData: {
      total: 68,
      contract: 2,
      outOfOrder: 9,
      stayOver: 65,
      arrivals: 30,
      departures: 72,
    },
  },
  {
    groupData: [{ name: "Cummerata-Schultz", roomCount: 54, revenue: 827.75 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19130.74, group: 306.8, contract: 1516.89 },
    roomData: {
      total: 29,
      contract: 1,
      outOfOrder: 3,
      stayOver: 37,
      arrivals: 72,
      departures: 25,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6795.01, group: 1564.17, contract: 1767.98 },
    roomData: {
      total: 65,
      contract: 9,
      outOfOrder: 8,
      stayOver: 46,
      arrivals: 83,
      departures: 4,
    },
  },
  {
    groupData: [{ name: "Schultz Group", roomCount: 99, revenue: 415.71 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17981.64, group: 1513.67, contract: 1836.48 },
    roomData: {
      total: 38,
      contract: 7,
      outOfOrder: 8,
      stayOver: 45,
      arrivals: 74,
      departures: 8,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jeremie Gyurko",
        guestName: "Caitrin Spillane",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
      {
        autorizedBy: "Brady Bloor",
        guestName: "Wilmar Liebrecht",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8230.04, group: 1022.5, contract: 895.37 },
    roomData: {
      total: 79,
      contract: 0,
      outOfOrder: 2,
      stayOver: 71,
      arrivals: 73,
      departures: 29,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12467.21, group: 404.17, contract: 384.01 },
    roomData: {
      total: 22,
      contract: 20,
      outOfOrder: 3,
      stayOver: 21,
      arrivals: 47,
      departures: 17,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Dona Lesor",
        guestName: "Sheffy Gorries",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9891.22, group: 1228.78, contract: 444.99 },
    roomData: {
      total: 32,
      contract: 20,
      outOfOrder: 4,
      stayOver: 9,
      arrivals: 21,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Glover, Bechtelar and Schuster", roomCount: 86, revenue: 111.2 },
      { name: "Wiza-Barrows", roomCount: 72, revenue: 349.47 },
      { name: "Rutherford-Swift", roomCount: 100, revenue: 563.38 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Marshal Safell",
        guestName: "Orsola Samwaye",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Tirrell Whereat",
        guestName: "Cinnamon Zolini",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12996.44, group: 1676.25, contract: 515.99 },
    roomData: {
      total: 65,
      contract: 12,
      outOfOrder: 1,
      stayOver: 51,
      arrivals: 74,
      departures: 36,
    },
  },
  {
    groupData: [
      { name: "Schneider, Huel and Ledner", roomCount: 91, revenue: 181.28 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8628.13, group: 1953.88, contract: 1676.15 },
    roomData: {
      total: 94,
      contract: 12,
      outOfOrder: 0,
      stayOver: 63,
      arrivals: 97,
      departures: 50,
    },
  },
  {
    groupData: [
      { name: "Grady LLC", roomCount: 50, revenue: 656.9 },
      { name: "Weissnat, Gleichner and Rowe", roomCount: 24, revenue: 778.21 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Inigo Biddle",
        guestName: "Isabeau Eddie",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8359.68, group: 1954.72, contract: 323.24 },
    roomData: {
      total: 67,
      contract: 14,
      outOfOrder: 1,
      stayOver: 24,
      arrivals: 46,
      departures: 58,
    },
  },
  {
    groupData: [{ name: "Goodwin Group", roomCount: 80, revenue: 485.43 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5284.46, group: 486.51, contract: 1892.12 },
    roomData: {
      total: 33,
      contract: 3,
      outOfOrder: 3,
      stayOver: 24,
      arrivals: 91,
      departures: 9,
    },
  },
  {
    groupData: [
      { name: "Sawayn, Shields and Gutmann", roomCount: 31, revenue: 667.83 },
      { name: "Prosacco, Grant and Weber", roomCount: 55, revenue: 480.43 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kalvin Carvil",
        guestName: "Clay Ferrers",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18288.78, group: 872.32, contract: 154.77 },
    roomData: {
      total: 62,
      contract: 5,
      outOfOrder: 7,
      stayOver: 27,
      arrivals: 38,
      departures: 0,
    },
  },
  {
    groupData: [
      { name: "Zulauf and Sons", roomCount: 6, revenue: 831.75 },
      { name: "McCullough Group", roomCount: 96, revenue: 518.08 },
      { name: "Osinski-Howe", roomCount: 78, revenue: 900.85 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Conway Clilverd",
        guestName: "Aime Poulter",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5943.63, group: 1128.83, contract: 1287.99 },
    roomData: {
      total: 89,
      contract: 20,
      outOfOrder: 0,
      stayOver: 31,
      arrivals: 40,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Hessel, Torphy and Morar", roomCount: 44, revenue: 709.81 },
      { name: "Nienow, Spinka and Renner", roomCount: 46, revenue: 600.41 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7776.03, group: 1087.59, contract: 770.84 },
    roomData: {
      total: 78,
      contract: 20,
      outOfOrder: 2,
      stayOver: 5,
      arrivals: 65,
      departures: 36,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8516.08, group: 588.09, contract: 255.76 },
    roomData: {
      total: 27,
      contract: 17,
      outOfOrder: 2,
      stayOver: 62,
      arrivals: 78,
      departures: 74,
    },
  },
  {
    groupData: [
      { name: "Fritsch-McDermott", roomCount: 59, revenue: 366.93 },
      { name: "Grady-Luettgen", roomCount: 38, revenue: 812.51 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Celine Bysshe",
        guestName: "Abran Talbot",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15665.71, group: 1892.18, contract: 1824.59 },
    roomData: {
      total: 79,
      contract: 5,
      outOfOrder: 1,
      stayOver: 55,
      arrivals: 6,
      departures: 1,
    },
  },
  {
    groupData: [
      { name: "Schmeler, Lindgren and Kutch", roomCount: 25, revenue: 666.91 },
      { name: "Connelly Inc", roomCount: 59, revenue: 782.75 },
      { name: "Mills-Wintheiser", roomCount: 25, revenue: 128.41 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16024.1, group: 1992.31, contract: 1927.04 },
    roomData: {
      total: 55,
      contract: 16,
      outOfOrder: 8,
      stayOver: 49,
      arrivals: 53,
      departures: 60,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ilyse Paoloni",
        guestName: "Huntley Cisland",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
      {
        autorizedBy: "Rosalia Isakovic",
        guestName: "Kinna Krysztowczyk",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8986.36, group: 1951.16, contract: 547.95 },
    roomData: {
      total: 68,
      contract: 20,
      outOfOrder: 4,
      stayOver: 6,
      arrivals: 69,
      departures: 49,
    },
  },
  {
    groupData: [
      { name: "Denesik-Effertz", roomCount: 22, revenue: 639.72 },
      { name: "Padberg and Sons", roomCount: 17, revenue: 670.57 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cecile Stollen",
        guestName: "Amos Gabbotts",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
      {
        autorizedBy: "Tannie Carous",
        guestName: "Rolfe Ziebart",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11383.77, group: 533.81, contract: 394.6 },
    roomData: {
      total: 72,
      contract: 10,
      outOfOrder: 2,
      stayOver: 20,
      arrivals: 86,
      departures: 24,
    },
  },
  {
    groupData: [
      { name: "Stokes-Bartoletti", roomCount: 16, revenue: 618.38 },
      { name: "Langosh-Carter", roomCount: 92, revenue: 887.53 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6780.58, group: 164.58, contract: 686.22 },
    roomData: {
      total: 82,
      contract: 11,
      outOfOrder: 2,
      stayOver: 20,
      arrivals: 16,
      departures: 59,
    },
  },
  {
    groupData: [
      {
        name: "Flatley, Pfeffer and Hodkiewicz",
        roomCount: 19,
        revenue: 128.11,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Cal Tonner",
        guestName: "Ferguson Casajuana",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        autorizedBy: "Corney Dorber",
        guestName: "Amy Balsom",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8972.98, group: 928.63, contract: 605.57 },
    roomData: {
      total: 90,
      contract: 9,
      outOfOrder: 2,
      stayOver: 70,
      arrivals: 6,
      departures: 5,
    },
  },
  {
    groupData: [
      {
        name: "Kunde, Konopelski and Weissnat",
        roomCount: 15,
        revenue: 301.71,
      },
      { name: "Stanton-Hoppe", roomCount: 37, revenue: 568.84 },
      { name: "Hartmann-Hammes", roomCount: 35, revenue: 691.88 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Barrie Baff",
        guestName: "Kass Ritzman",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Olivette Blow",
        guestName: "Clarance Hegel",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11452.76, group: 622.1, contract: 159.54 },
    roomData: {
      total: 81,
      contract: 9,
      outOfOrder: 6,
      stayOver: 46,
      arrivals: 80,
      departures: 43,
    },
  },
  {
    groupData: [
      { name: "Gibson, Altenwerth and Kutch", roomCount: 28, revenue: 211.25 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18385.06, group: 1924.37, contract: 1752.7 },
    roomData: {
      total: 93,
      contract: 5,
      outOfOrder: 1,
      stayOver: 8,
      arrivals: 79,
      departures: 68,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Alisander Letty",
        guestName: "Chelsea Koppens",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9641.35, group: 934.14, contract: 1139.01 },
    roomData: {
      total: 94,
      contract: 1,
      outOfOrder: 6,
      stayOver: 30,
      arrivals: 73,
      departures: 13,
    },
  },
  {
    groupData: [
      { name: "Koss, Homenick and Stracke", roomCount: 59, revenue: 308.71 },
      { name: "Wolf Inc", roomCount: 55, revenue: 867.88 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14195.05, group: 1005.5, contract: 997.18 },
    roomData: {
      total: 20,
      contract: 1,
      outOfOrder: 0,
      stayOver: 71,
      arrivals: 16,
      departures: 67,
    },
  },
  {
    groupData: [
      { name: "Braun, Schmeler and Glover", roomCount: 20, revenue: 996.09 },
      { name: "Quigley-Langosh", roomCount: 75, revenue: 681.18 },
      { name: "Auer, Kuhn and Olson", roomCount: 33, revenue: 912.6 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Rayna Perritt",
        guestName: "Katherine Besemer",
        reason:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5591.62, group: 101.9, contract: 1292.81 },
    roomData: {
      total: 92,
      contract: 5,
      outOfOrder: 6,
      stayOver: 23,
      arrivals: 11,
      departures: 5,
    },
  },
  {
    groupData: [
      { name: "Larson-Schulist", roomCount: 55, revenue: 352.94 },
      { name: "Hermiston-Franecki", roomCount: 44, revenue: 997.32 },
      {
        name: "Roberts, Jenkins and Rodriguez",
        roomCount: 72,
        revenue: 107.75,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Courtenay Attiwill",
        guestName: "Carissa Boriston",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
      {
        autorizedBy: "Brew Tregear",
        guestName: "Mar Guare",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9077.39, group: 1427.87, contract: 590.16 },
    roomData: {
      total: 25,
      contract: 3,
      outOfOrder: 5,
      stayOver: 58,
      arrivals: 91,
      departures: 23,
    },
  },
  {
    groupData: [{ name: "Gutkowski-Schaden", roomCount: 41, revenue: 258.3 }],
    compRoomInfo: [
      {
        autorizedBy: "Kirsteni Course",
        guestName: "Matteo Ibbeson",
        reason:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      },
      {
        autorizedBy: "Harry Churly",
        guestName: "Ardith Jellman",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12811.38, group: 844.78, contract: 1422.98 },
    roomData: {
      total: 22,
      contract: 6,
      outOfOrder: 6,
      stayOver: 30,
      arrivals: 68,
      departures: 14,
    },
  },
  {
    groupData: [
      {
        name: "Armstrong, Kuphal and Lubowitz",
        roomCount: 18,
        revenue: 637.53,
      },
      { name: "Wilderman Inc", roomCount: 77, revenue: 637.79 },
      {
        name: "Zulauf, Schiller and Schroeder",
        roomCount: 94,
        revenue: 602.68,
      },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15087.43, group: 1787.83, contract: 588.03 },
    roomData: {
      total: 85,
      contract: 19,
      outOfOrder: 9,
      stayOver: 7,
      arrivals: 100,
      departures: 6,
    },
  },
  {
    groupData: [
      { name: "Corwin-Johnston", roomCount: 5, revenue: 533.19 },
      { name: "Lindgren-O'Reilly", roomCount: 19, revenue: 188.52 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6089.2, group: 867.09, contract: 118.47 },
    roomData: {
      total: 46,
      contract: 11,
      outOfOrder: 8,
      stayOver: 79,
      arrivals: 0,
      departures: 39,
    },
  },
  {
    groupData: [
      { name: "Lockman Inc", roomCount: 74, revenue: 214.12 },
      { name: "Hilpert-Kilback", roomCount: 87, revenue: 973.88 },
      { name: "Heaney-Lesch", roomCount: 101, revenue: 324.13 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14642.17, group: 1724.22, contract: 1319.93 },
    roomData: {
      total: 27,
      contract: 8,
      outOfOrder: 4,
      stayOver: 26,
      arrivals: 2,
      departures: 18,
    },
  },
  {
    groupData: [
      { name: "Goldner, Fisher and Mills", roomCount: 29, revenue: 358.91 },
      { name: "Harber, Schmidt and Borer", roomCount: 4, revenue: 200.84 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Julina Paradis",
        guestName: "Kathie Gettins",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
      {
        autorizedBy: "Janna Mowsdill",
        guestName: "Raeann Bazire",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19399.79, group: 933.71, contract: 1388.43 },
    roomData: {
      total: 47,
      contract: 1,
      outOfOrder: 2,
      stayOver: 35,
      arrivals: 1,
      departures: 50,
    },
  },
  {
    groupData: [{ name: "Glover-Hudson", roomCount: 96, revenue: 459.54 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15710.65, group: 1353.9, contract: 386.43 },
    roomData: {
      total: 100,
      contract: 20,
      outOfOrder: 7,
      stayOver: 44,
      arrivals: 21,
      departures: 10,
    },
  },
  {
    groupData: [
      { name: "Gerlach, Berge and O'Conner", roomCount: 66, revenue: 321.66 },
      { name: "Hartmann, Hirthe and Emard", roomCount: 57, revenue: 577.86 },
      { name: "Wilkinson and Sons", roomCount: 10, revenue: 791.12 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Susan Hatchman",
        guestName: "Effie Goburn",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10440.82, group: 1374.5, contract: 751.31 },
    roomData: {
      total: 100,
      contract: 0,
      outOfOrder: 2,
      stayOver: 2,
      arrivals: 58,
      departures: 21,
    },
  },
  {
    groupData: [
      { name: "Crona-Schmeler", roomCount: 96, revenue: 662.42 },
      { name: "Metz-Bauch", roomCount: 33, revenue: 672.92 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11167.59, group: 1076.35, contract: 188.08 },
    roomData: {
      total: 102,
      contract: 16,
      outOfOrder: 4,
      stayOver: 9,
      arrivals: 98,
      departures: 17,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jo-ann Taffe",
        guestName: "Arny Brade",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 6094.14, group: 1890.26, contract: 1423.49 },
    roomData: {
      total: 59,
      contract: 4,
      outOfOrder: 4,
      stayOver: 22,
      arrivals: 42,
      departures: 40,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Sarajane Jemmison",
        guestName: "Siouxie Bellam",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15113.08, group: 609.61, contract: 779.59 },
    roomData: {
      total: 60,
      contract: 11,
      outOfOrder: 3,
      stayOver: 68,
      arrivals: 40,
      departures: 18,
    },
  },
  {
    groupData: [
      { name: "Pagac, Pouros and Predovic", roomCount: 33, revenue: 327.69 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15991.29, group: 870.83, contract: 636.41 },
    roomData: {
      total: 89,
      contract: 16,
      outOfOrder: 3,
      stayOver: 30,
      arrivals: 92,
      departures: 43,
    },
  },
  {
    groupData: [
      { name: "Marquardt-Wuckert", roomCount: 14, revenue: 148.45 },
      { name: "Runolfsson Group", roomCount: 51, revenue: 909.28 },
      { name: "Grady, Raynor and Ledner", roomCount: 64, revenue: 249.92 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19688.16, group: 1061.0, contract: 1806.97 },
    roomData: {
      total: 22,
      contract: 5,
      outOfOrder: 7,
      stayOver: 10,
      arrivals: 39,
      departures: 64,
    },
  },
  {
    groupData: [
      { name: "Harris, Streich and Sipes", roomCount: 83, revenue: 925.62 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jeffrey Boshers",
        guestName: "Christine Rames",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10464.53, group: 1251.15, contract: 1490.74 },
    roomData: {
      total: 64,
      contract: 17,
      outOfOrder: 6,
      stayOver: 8,
      arrivals: 10,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Schiller and Sons", roomCount: 87, revenue: 465.89 },
      {
        name: "Waelchi, Dickens and Heidenreich",
        roomCount: 79,
        revenue: 213.1,
      },
      { name: "Conn-Ziemann", roomCount: 39, revenue: 222.52 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5926.96, group: 1845.17, contract: 1118.57 },
    roomData: {
      total: 96,
      contract: 19,
      outOfOrder: 3,
      stayOver: 73,
      arrivals: 43,
      departures: 52,
    },
  },
  {
    groupData: [
      { name: "Dooley LLC", roomCount: 12, revenue: 929.46 },
      { name: "Moen-McCullough", roomCount: 32, revenue: 520.96 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Stafford Evins",
        guestName: "Eryn Vasyunin",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Britt Lakenden",
        guestName: "Abel Dowber",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7108.04, group: 561.34, contract: 1931.55 },
    roomData: {
      total: 71,
      contract: 11,
      outOfOrder: 1,
      stayOver: 12,
      arrivals: 70,
      departures: 35,
    },
  },
  {
    groupData: [
      { name: "Mante-Smith", roomCount: 49, revenue: 764.04 },
      { name: "Renner-Romaguera", roomCount: 89, revenue: 383.2 },
      { name: "Braun Group", roomCount: 101, revenue: 107.9 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Agosto Hatchette",
        guestName: "Susy Scaddon",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
      {
        autorizedBy: "Steffi Macilhench",
        guestName: "Renato Hinksen",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13264.26, group: 1546.0, contract: 1105.48 },
    roomData: {
      total: 77,
      contract: 0,
      outOfOrder: 8,
      stayOver: 36,
      arrivals: 66,
      departures: 74,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ichabod Gall",
        guestName: "Gay McNickle",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15309.94, group: 985.69, contract: 827.03 },
    roomData: {
      total: 66,
      contract: 16,
      outOfOrder: 7,
      stayOver: 53,
      arrivals: 26,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "Stroman, Wintheiser and Turner", roomCount: 96, revenue: 886.0 },
      { name: "Dach, Kuhic and Durgan", roomCount: 37, revenue: 171.49 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10629.1, group: 811.95, contract: 957.75 },
    roomData: {
      total: 28,
      contract: 9,
      outOfOrder: 3,
      stayOver: 61,
      arrivals: 73,
      departures: 22,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19044.42, group: 1951.75, contract: 862.44 },
    roomData: {
      total: 36,
      contract: 11,
      outOfOrder: 4,
      stayOver: 28,
      arrivals: 90,
      departures: 54,
    },
  },
  {
    groupData: [
      { name: "Kiehn, Jones and Altenwerth", roomCount: 46, revenue: 763.27 },
      { name: "Dietrich-Mann", roomCount: 47, revenue: 193.1 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Alyssa Eisak",
        guestName: "Noelani Huxham",
        reason:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5080.46, group: 803.49, contract: 735.46 },
    roomData: {
      total: 57,
      contract: 17,
      outOfOrder: 5,
      stayOver: 10,
      arrivals: 30,
      departures: 61,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Davis Passler",
        guestName: "Kliment Barme",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8744.27, group: 1461.85, contract: 1996.76 },
    roomData: {
      total: 59,
      contract: 14,
      outOfOrder: 4,
      stayOver: 1,
      arrivals: 88,
      departures: 67,
    },
  },
  {
    groupData: [
      { name: "Hagenes LLC", roomCount: 30, revenue: 735.65 },
      { name: "Erdman, Prohaska and Fisher", roomCount: 11, revenue: 140.76 },
      { name: "Littel, Wolf and Daniel", roomCount: 64, revenue: 278.95 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Walker Pozzi",
        guestName: "Agnes Warlock",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15249.02, group: 290.25, contract: 1604.86 },
    roomData: {
      total: 94,
      contract: 5,
      outOfOrder: 8,
      stayOver: 66,
      arrivals: 58,
      departures: 27,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Cahra McCurry",
        guestName: "Shaylyn Haldenby",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 8384.97, group: 1821.99, contract: 282.42 },
    roomData: {
      total: 59,
      contract: 9,
      outOfOrder: 4,
      stayOver: 2,
      arrivals: 99,
      departures: 19,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14805.91, group: 363.58, contract: 1947.34 },
    roomData: {
      total: 85,
      contract: 5,
      outOfOrder: 7,
      stayOver: 73,
      arrivals: 25,
      departures: 65,
    },
  },
  {
    groupData: [
      { name: "Bruen, Jaskolski and Emard", roomCount: 37, revenue: 274.84 },
      { name: "Zieme-Zemlak", roomCount: 28, revenue: 509.05 },
      { name: "Hayes and Sons", roomCount: 6, revenue: 282.35 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dorolisa Jilkes",
        guestName: "Corney Lockett",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
      {
        autorizedBy: "Olivero Zoren",
        guestName: "Esdras Askin",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15360.99, group: 1552.67, contract: 415.37 },
    roomData: {
      total: 34,
      contract: 4,
      outOfOrder: 4,
      stayOver: 40,
      arrivals: 78,
      departures: 9,
    },
  },
  {
    groupData: [
      { name: "Vandervort-Koepp", roomCount: 50, revenue: 551.85 },
      { name: "Kuhic-Harber", roomCount: 32, revenue: 823.92 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Callida Natwick",
        guestName: "Jared Gerram",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16798.57, group: 1338.45, contract: 1773.22 },
    roomData: {
      total: 32,
      contract: 10,
      outOfOrder: 2,
      stayOver: 6,
      arrivals: 80,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Kiehn and Sons", roomCount: 47, revenue: 479.73 },
      { name: "Mohr-Ankunding", roomCount: 77, revenue: 138.63 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13364.56, group: 1108.7, contract: 1415.83 },
    roomData: {
      total: 84,
      contract: 15,
      outOfOrder: 1,
      stayOver: 41,
      arrivals: 100,
      departures: 67,
    },
  },
  {
    groupData: [
      { name: "Crooks, Rath and Weber", roomCount: 87, revenue: 741.88 },
      { name: "Klocko, Swift and Lehner", roomCount: 79, revenue: 738.87 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jeana Flinders",
        guestName: "Marris Rounsefull",
        reason:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10697.83, group: 125.53, contract: 1043.32 },
    roomData: {
      total: 62,
      contract: 18,
      outOfOrder: 0,
      stayOver: 77,
      arrivals: 53,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Kunde, Swift and Konopelski", roomCount: 81, revenue: 175.42 },
      { name: "Waelchi-Kreiger", roomCount: 58, revenue: 538.99 },
      { name: "Quigley-Lebsack", roomCount: 36, revenue: 754.45 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Wilfrid Lickess",
        guestName: "Madelon Wiszniewski",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
      {
        autorizedBy: "Ritchie Markie",
        guestName: "Diann Culy",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17040.81, group: 1221.06, contract: 538.02 },
    roomData: {
      total: 92,
      contract: 8,
      outOfOrder: 0,
      stayOver: 34,
      arrivals: 16,
      departures: 69,
    },
  },
  {
    groupData: [
      { name: "Koch, Kreiger and Klocko", roomCount: 91, revenue: 553.29 },
      { name: "Bode-Kunde", roomCount: 70, revenue: 290.5 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8530.37, group: 967.31, contract: 1751.73 },
    roomData: {
      total: 72,
      contract: 0,
      outOfOrder: 1,
      stayOver: 41,
      arrivals: 91,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Bode Inc", roomCount: 61, revenue: 560.32 },
      { name: "Ankunding, Nolan and Medhurst", roomCount: 36, revenue: 745.61 },
      { name: "Keebler, Greenholt and Kihn", roomCount: 6, revenue: 135.76 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10388.9, group: 856.32, contract: 988.57 },
    roomData: {
      total: 53,
      contract: 10,
      outOfOrder: 4,
      stayOver: 69,
      arrivals: 21,
      departures: 73,
    },
  },
  {
    groupData: [
      { name: "Nicolas, Kassulke and Homenick", roomCount: 7, revenue: 258.28 },
      { name: "Kuhic-White", roomCount: 71, revenue: 277.98 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11532.27, group: 1775.15, contract: 1113.96 },
    roomData: {
      total: 52,
      contract: 13,
      outOfOrder: 1,
      stayOver: 12,
      arrivals: 66,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "McLaughlin LLC", roomCount: 66, revenue: 989.64 },
      { name: "Hermann Group", roomCount: 52, revenue: 338.9 },
      { name: "Koepp-Grimes", roomCount: 43, revenue: 703.56 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7523.46, group: 1636.81, contract: 1767.38 },
    roomData: {
      total: 33,
      contract: 2,
      outOfOrder: 6,
      stayOver: 1,
      arrivals: 73,
      departures: 63,
    },
  },
  {
    groupData: [{ name: "Harber-Towne", roomCount: 14, revenue: 493.31 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18632.69, group: 1493.48, contract: 1566.55 },
    roomData: {
      total: 34,
      contract: 4,
      outOfOrder: 8,
      stayOver: 11,
      arrivals: 91,
      departures: 33,
    },
  },
  {
    groupData: [{ name: "Powlowski-Klein", roomCount: 2, revenue: 649.51 }],
    compRoomInfo: [
      {
        autorizedBy: "Dru Lidington",
        guestName: "Julita Thomasen",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Denver Mitchel",
        guestName: "Myrvyn Millsap",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11618.61, group: 492.54, contract: 1837.74 },
    roomData: {
      total: 61,
      contract: 8,
      outOfOrder: 4,
      stayOver: 5,
      arrivals: 92,
      departures: 16,
    },
  },
  {
    groupData: [
      { name: "Pacocha-Ruecker", roomCount: 94, revenue: 487.9 },
      { name: "Tremblay Group", roomCount: 40, revenue: 362.76 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18274.48, group: 696.94, contract: 1438.13 },
    roomData: {
      total: 92,
      contract: 13,
      outOfOrder: 1,
      stayOver: 55,
      arrivals: 77,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Hoppe-Shields", roomCount: 23, revenue: 441.99 },
      { name: "Hermiston, Kling and Labadie", roomCount: 69, revenue: 441.28 },
      { name: "Bechtelar-Mayer", roomCount: 99, revenue: 935.55 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Jabez Halgarth",
        guestName: "Rudd Bestman",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9240.45, group: 503.42, contract: 912.35 },
    roomData: {
      total: 72,
      contract: 10,
      outOfOrder: 6,
      stayOver: 78,
      arrivals: 27,
      departures: 3,
    },
  },
  {
    groupData: [
      { name: "Rowe Group", roomCount: 89, revenue: 347.06 },
      { name: "Crooks, Koss and Hintz", roomCount: 5, revenue: 555.59 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16036.51, group: 906.7, contract: 1001.18 },
    roomData: {
      total: 55,
      contract: 8,
      outOfOrder: 8,
      stayOver: 64,
      arrivals: 26,
      departures: 24,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5089.54, group: 432.71, contract: 1196.39 },
    roomData: {
      total: 64,
      contract: 16,
      outOfOrder: 5,
      stayOver: 40,
      arrivals: 95,
      departures: 41,
    },
  },
  {
    groupData: [
      { name: "Connelly, Casper and Hegmann", roomCount: 55, revenue: 845.67 },
      { name: "Mayert-Kreiger", roomCount: 47, revenue: 435.27 },
      { name: "Crist-Collier", roomCount: 91, revenue: 357.13 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Rani Speakman",
        guestName: "Jennee Earle",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        autorizedBy: "Danie Saenz",
        guestName: "Jaquenetta Prestner",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10835.03, group: 1030.18, contract: 1483.81 },
    roomData: {
      total: 78,
      contract: 19,
      outOfOrder: 0,
      stayOver: 70,
      arrivals: 23,
      departures: 6,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Jeromy McAtamney",
        guestName: "Aharon Sheard",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 19919.67, group: 194.05, contract: 1506.95 },
    roomData: {
      total: 49,
      contract: 6,
      outOfOrder: 4,
      stayOver: 11,
      arrivals: 22,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "Wolf-Ondricka", roomCount: 99, revenue: 552.59 },
      { name: "Spencer-Kassulke", roomCount: 60, revenue: 742.88 },
      { name: "Herzog LLC", roomCount: 63, revenue: 114.72 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16184.65, group: 600.12, contract: 767.79 },
    roomData: {
      total: 90,
      contract: 14,
      outOfOrder: 5,
      stayOver: 16,
      arrivals: 43,
      departures: 68,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Donella Joselevitch",
        guestName: "Ronnie Abramov",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
      {
        autorizedBy: "Atlanta Norman",
        guestName: "Dru Popham",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9693.96, group: 1583.72, contract: 422.68 },
    roomData: {
      total: 61,
      contract: 8,
      outOfOrder: 7,
      stayOver: 10,
      arrivals: 26,
      departures: 66,
    },
  },
  {
    groupData: [
      { name: "Zboncak and Sons", roomCount: 65, revenue: 885.21 },
      { name: "King Inc", roomCount: 84, revenue: 274.57 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dodi Besse",
        guestName: "Isabeau Osband",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10983.53, group: 559.9, contract: 1158.15 },
    roomData: {
      total: 38,
      contract: 13,
      outOfOrder: 7,
      stayOver: 68,
      arrivals: 38,
      departures: 53,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Inez Ridoutt",
        guestName: "Elvis Geere",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Jaquelin Forbear",
        guestName: "Carmella Guinan",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10732.37, group: 952.84, contract: 1701.86 },
    roomData: {
      total: 32,
      contract: 14,
      outOfOrder: 3,
      stayOver: 0,
      arrivals: 18,
      departures: 69,
    },
  },
  {
    groupData: [
      { name: "Wisoky LLC", roomCount: 51, revenue: 868.67 },
      { name: "Kautzer, Mann and Bergnaum", roomCount: 50, revenue: 166.64 },
      { name: "O'Hara Inc", roomCount: 63, revenue: 257.76 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Bryn Rucklesse",
        guestName: "Dinny Munks",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9277.07, group: 323.09, contract: 1920.83 },
    roomData: {
      total: 56,
      contract: 17,
      outOfOrder: 6,
      stayOver: 59,
      arrivals: 50,
      departures: 29,
    },
  },
  {
    groupData: [
      { name: "Vandervort, Corwin and Feeney", roomCount: 19, revenue: 139.13 },
      { name: "Graham LLC", roomCount: 18, revenue: 282.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Genovera Steane",
        guestName: "Jordanna Massel",
        reason:
          "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
      {
        autorizedBy: "Dorolice Seif",
        guestName: "Moore Szachniewicz",
        reason:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8121.17, group: 1657.37, contract: 1137.21 },
    roomData: {
      total: 23,
      contract: 6,
      outOfOrder: 1,
      stayOver: 3,
      arrivals: 15,
      departures: 32,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Waverley Terzi",
        guestName: "Nero Bell",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Jenn Artus",
        guestName: "Eachelle Casement",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9505.19, group: 1905.74, contract: 1739.88 },
    roomData: {
      total: 91,
      contract: 15,
      outOfOrder: 3,
      stayOver: 31,
      arrivals: 24,
      departures: 12,
    },
  },
  {
    groupData: [
      { name: "Ruecker LLC", roomCount: 75, revenue: 777.14 },
      { name: "Grady Group", roomCount: 76, revenue: 536.49 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dahlia Dundridge",
        guestName: "Robinia Basnett",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        autorizedBy: "Maud Rimer",
        guestName: "Ibrahim Muat",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10398.44, group: 1180.8, contract: 1710.93 },
    roomData: {
      total: 96,
      contract: 16,
      outOfOrder: 5,
      stayOver: 32,
      arrivals: 51,
      departures: 37,
    },
  },
  {
    groupData: [
      { name: "Yost Inc", roomCount: 95, revenue: 335.95 },
      { name: "Hills, Kunde and Mann", roomCount: 34, revenue: 335.72 },
      { name: "Rodriguez-Langosh", roomCount: 70, revenue: 126.8 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18363.45, group: 827.43, contract: 669.95 },
    roomData: {
      total: 67,
      contract: 7,
      outOfOrder: 1,
      stayOver: 30,
      arrivals: 26,
      departures: 22,
    },
  },
  {
    groupData: [
      {
        name: "Kirlin, Jaskolski and Vandervort",
        roomCount: 55,
        revenue: 859.1,
      },
      { name: "Hansen-Ebert", roomCount: 70, revenue: 376.19 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Phil Wellfare",
        guestName: "Janeva Mila",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12611.23, group: 1150.64, contract: 618.34 },
    roomData: {
      total: 73,
      contract: 9,
      outOfOrder: 1,
      stayOver: 65,
      arrivals: 84,
      departures: 77,
    },
  },
  {
    groupData: [
      { name: "Paucek LLC", roomCount: 21, revenue: 802.3 },
      { name: "Larkin, Krajcik and Volkman", roomCount: 17, revenue: 406.81 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16142.07, group: 1137.36, contract: 1726.78 },
    roomData: {
      total: 26,
      contract: 5,
      outOfOrder: 1,
      stayOver: 58,
      arrivals: 0,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Hoeger LLC", roomCount: 49, revenue: 849.37 },
      { name: "Schultz-Stark", roomCount: 66, revenue: 915.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kippy Ickovits",
        guestName: "Thorin Muino",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
      {
        autorizedBy: "Loralee Duxbury",
        guestName: "Fey Ortner",
        reason: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11868.54, group: 1545.8, contract: 231.62 },
    roomData: {
      total: 44,
      contract: 5,
      outOfOrder: 9,
      stayOver: 46,
      arrivals: 31,
      departures: 6,
    },
  },
  {
    groupData: [
      { name: "Koelpin, Sanford and Wuckert", roomCount: 43, revenue: 680.41 },
      { name: "Dickens and Sons", roomCount: 86, revenue: 929.9 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Guthrie Bragge",
        guestName: "Quinn Silcox",
        reason:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7760.14, group: 630.14, contract: 1589.02 },
    roomData: {
      total: 47,
      contract: 15,
      outOfOrder: 1,
      stayOver: 76,
      arrivals: 89,
      departures: 57,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Ingeberg Mallatratt",
        guestName: "Phaidra Helkin",
        reason:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5229.13, group: 1777.45, contract: 553.37 },
    roomData: {
      total: 46,
      contract: 9,
      outOfOrder: 1,
      stayOver: 62,
      arrivals: 85,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Toy-O'Conner", roomCount: 56, revenue: 981.48 },
      { name: "Kutch, Rosenbaum and Strosin", roomCount: 14, revenue: 314.61 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Dion Collidge",
        guestName: "Pincus Cannicott",
        reason:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        autorizedBy: "Opalina Lomasny",
        guestName: "Laurel Waterhowse",
        reason: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8651.17, group: 1665.52, contract: 814.88 },
    roomData: {
      total: 27,
      contract: 4,
      outOfOrder: 6,
      stayOver: 44,
      arrivals: 9,
      departures: 33,
    },
  },
  {
    groupData: [
      { name: "O'Kon Group", roomCount: 2, revenue: 101.32 },
      { name: "Torp, Ward and Sipes", roomCount: 27, revenue: 197.35 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Gerty Lacaze",
        guestName: "Katie Sugden",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        autorizedBy: "Keelby Ketts",
        guestName: "Yuma Velden",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8597.11, group: 1238.71, contract: 1916.6 },
    roomData: {
      total: 98,
      contract: 0,
      outOfOrder: 9,
      stayOver: 7,
      arrivals: 88,
      departures: 77,
    },
  },
  {
    groupData: [{ name: "Leannon Inc", roomCount: 91, revenue: 573.04 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14013.17, group: 1557.84, contract: 1419.44 },
    roomData: {
      total: 95,
      contract: 13,
      outOfOrder: 5,
      stayOver: 40,
      arrivals: 21,
      departures: 23,
    },
  },
  {
    groupData: [{ name: "Erdman-Russel", roomCount: 55, revenue: 856.71 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14187.46, group: 320.58, contract: 1677.8 },
    roomData: {
      total: 20,
      contract: 0,
      outOfOrder: 0,
      stayOver: 34,
      arrivals: 55,
      departures: 43,
    },
  },
  {
    groupData: [{ name: "Larson-Ruecker", roomCount: 40, revenue: 876.88 }],
    compRoomInfo: [
      {
        autorizedBy: "Nichole Bradnock",
        guestName: "Jarred Stoppe",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
      {
        autorizedBy: "Mandie Langshaw",
        guestName: "Orlando Acarson",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18417.55, group: 714.76, contract: 1010.98 },
    roomData: {
      total: 64,
      contract: 12,
      outOfOrder: 8,
      stayOver: 49,
      arrivals: 68,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Stracke, Kirlin and Considine", roomCount: 47, revenue: 322.31 },
      { name: "Koss-Rippin", roomCount: 8, revenue: 106.4 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Chandler Rymer",
        guestName: "Fredrick Hallyburton",
        reason:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
      {
        autorizedBy: "Eben Costar",
        guestName: "Currey Seel",
        reason:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7205.33, group: 1160.13, contract: 1747.31 },
    roomData: {
      total: 55,
      contract: 1,
      outOfOrder: 5,
      stayOver: 76,
      arrivals: 79,
      departures: 41,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Selie McComiskie",
        guestName: "Nance Banke",
        reason:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11566.57, group: 203.42, contract: 1353.34 },
    roomData: {
      total: 46,
      contract: 15,
      outOfOrder: 3,
      stayOver: 30,
      arrivals: 65,
      departures: 43,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 8920.4, group: 1077.7, contract: 363.47 },
    roomData: {
      total: 28,
      contract: 14,
      outOfOrder: 4,
      stayOver: 71,
      arrivals: 28,
      departures: 62,
    },
  },
  {
    groupData: [
      { name: "Schoen Inc", roomCount: 42, revenue: 823.1 },
      { name: "Bogisich-Feest", roomCount: 21, revenue: 197.42 },
      { name: "Sporer-Gislason", roomCount: 38, revenue: 159.92 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Basil Cisson",
        guestName: "Dean Kristufek",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14456.12, group: 340.36, contract: 539.55 },
    roomData: {
      total: 93,
      contract: 10,
      outOfOrder: 2,
      stayOver: 35,
      arrivals: 43,
      departures: 55,
    },
  },
  {
    groupData: [
      {
        name: "Breitenberg, Fritsch and Renner",
        roomCount: 92,
        revenue: 167.08,
      },
      { name: "Bernier, Rippin and Wiza", roomCount: 4, revenue: 709.81 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16887.34, group: 1371.27, contract: 157.52 },
    roomData: {
      total: 46,
      contract: 14,
      outOfOrder: 0,
      stayOver: 34,
      arrivals: 63,
      departures: 31,
    },
  },
  {
    groupData: [
      { name: "Schuster Group", roomCount: 13, revenue: 219.97 },
      { name: "Howe-Walker", roomCount: 25, revenue: 652.78 },
      { name: "Mante, Renner and Rau", roomCount: 14, revenue: 586.61 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Morlee Mariaud",
        guestName: "Ashely Tully",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19778.63, group: 907.5, contract: 1010.49 },
    roomData: {
      total: 22,
      contract: 2,
      outOfOrder: 4,
      stayOver: 71,
      arrivals: 74,
      departures: 65,
    },
  },
  {
    groupData: [
      { name: "Hansen-Purdy", roomCount: 99, revenue: 611.61 },
      { name: "Vandervort-Tillman", roomCount: 52, revenue: 491.42 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Kitty Langelay",
        guestName: "Kile Steutly",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
      {
        autorizedBy: "Francoise Wolfarth",
        guestName: "Haleigh Twells",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6838.39, group: 729.69, contract: 922.52 },
    roomData: {
      total: 93,
      contract: 7,
      outOfOrder: 3,
      stayOver: 16,
      arrivals: 32,
      departures: 51,
    },
  },
  {
    groupData: [{ name: "Ullrich Inc", roomCount: 19, revenue: 141.85 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 6318.1, group: 1069.04, contract: 1470.65 },
    roomData: {
      total: 34,
      contract: 1,
      outOfOrder: 3,
      stayOver: 2,
      arrivals: 81,
      departures: 27,
    },
  },
  {
    groupData: [
      { name: "Volkman and Sons", roomCount: 31, revenue: 198.64 },
      {
        name: "Farrell, O'Conner and Bergstrom",
        roomCount: 25,
        revenue: 990.53,
      },
      { name: "Hammes, Jaskolski and Beer", roomCount: 101, revenue: 207.08 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Estrellita Durran",
        guestName: "Hailey Hagger",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8975.18, group: 1711.92, contract: 1319.49 },
    roomData: {
      total: 84,
      contract: 15,
      outOfOrder: 0,
      stayOver: 64,
      arrivals: 45,
      departures: 76,
    },
  },
  {
    groupData: [
      { name: "Kemmer, Simonis and Harber", roomCount: 91, revenue: 701.61 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9382.86, group: 1266.79, contract: 296.56 },
    roomData: {
      total: 22,
      contract: 18,
      outOfOrder: 7,
      stayOver: 49,
      arrivals: 72,
      departures: 2,
    },
  },
  {
    groupData: [
      { name: "Glover-Schuppe", roomCount: 31, revenue: 320.94 },
      { name: "Hayes Group", roomCount: 99, revenue: 730.83 },
      { name: "Steuber Inc", roomCount: 7, revenue: 826.17 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Halette O'Meara",
        guestName: "Heall Brighouse",
        reason:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      },
      {
        autorizedBy: "Randee Mainwaring",
        guestName: "Lazare Lodwick",
        reason:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16126.2, group: 1864.01, contract: 184.63 },
    roomData: {
      total: 34,
      contract: 10,
      outOfOrder: 2,
      stayOver: 78,
      arrivals: 67,
      departures: 55,
    },
  },
  {
    groupData: [
      { name: "Kuhlman LLC", roomCount: 18, revenue: 357.45 },
      { name: "Gerhold LLC", roomCount: 79, revenue: 683.21 },
      { name: "Batz, Christiansen and Lesch", roomCount: 94, revenue: 276.32 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9074.75, group: 1510.09, contract: 1372.28 },
    roomData: {
      total: 46,
      contract: 10,
      outOfOrder: 3,
      stayOver: 43,
      arrivals: 85,
      departures: 16,
    },
  },
  {
    groupData: [{ name: "Brown-Bayer", roomCount: 18, revenue: 753.9 }],
    compRoomInfo: [
      {
        autorizedBy: "Gayle Kirkpatrick",
        guestName: "Courtenay Janek",
        reason: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 14198.49, group: 1112.46, contract: 386.37 },
    roomData: {
      total: 67,
      contract: 19,
      outOfOrder: 5,
      stayOver: 76,
      arrivals: 45,
      departures: 5,
    },
  },
  {
    groupData: [
      { name: "Daugherty, Rohan and Kulas", roomCount: 37, revenue: 536.33 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Rayner Redmond",
        guestName: "Tadeas MacVaugh",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5047.03, group: 856.48, contract: 1026.56 },
    roomData: {
      total: 84,
      contract: 3,
      outOfOrder: 0,
      stayOver: 56,
      arrivals: 17,
      departures: 79,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Lindi Raulstone",
        guestName: "Julieta Diggins",
        reason:
          "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      },
      {
        autorizedBy: "Lavena Biskupski",
        guestName: "Marianna Crutcher",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9109.74, group: 926.04, contract: 785.84 },
    roomData: {
      total: 96,
      contract: 4,
      outOfOrder: 8,
      stayOver: 73,
      arrivals: 0,
      departures: 7,
    },
  },
  {
    groupData: [
      { name: "Kuhn-Rogahn", roomCount: 14, revenue: 940.81 },
      { name: "Mertz-Steuber", roomCount: 51, revenue: 216.85 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8582.6, group: 1329.63, contract: 1875.76 },
    roomData: {
      total: 42,
      contract: 0,
      outOfOrder: 9,
      stayOver: 10,
      arrivals: 22,
      departures: 36,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 10077.96, group: 943.47, contract: 1948.66 },
    roomData: {
      total: 101,
      contract: 8,
      outOfOrder: 2,
      stayOver: 71,
      arrivals: 4,
      departures: 78,
    },
  },
  {
    groupData: [
      { name: "Mann, Emmerich and Hudson", roomCount: 60, revenue: 427.5 },
      { name: "Ward-Ankunding", roomCount: 88, revenue: 211.54 },
      { name: "Moen LLC", roomCount: 6, revenue: 828.16 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Smitty Adolfson",
        guestName: "Rey Grelka",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 11090.41, group: 678.06, contract: 1477.85 },
    roomData: {
      total: 102,
      contract: 10,
      outOfOrder: 3,
      stayOver: 4,
      arrivals: 41,
      departures: 8,
    },
  },
  {
    groupData: [
      { name: "Shields-Cummings", roomCount: 95, revenue: 798.72 },
      { name: "Toy Inc", roomCount: 76, revenue: 835.55 },
      { name: "Aufderhar, Grady and Fay", roomCount: 44, revenue: 734.75 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Brett Orrah",
        guestName: "Lesley Rountree",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
      {
        autorizedBy: "Paul Cowell",
        guestName: "Byran Aikett",
        reason:
          "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 11143.02, group: 1314.67, contract: 1823.21 },
    roomData: {
      total: 27,
      contract: 7,
      outOfOrder: 3,
      stayOver: 78,
      arrivals: 88,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Gerhold LLC", roomCount: 53, revenue: 369.78 },
      { name: "Greenholt, Casper and Kuphal", roomCount: 65, revenue: 192.06 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19309.56, group: 1621.16, contract: 1135.85 },
    roomData: {
      total: 26,
      contract: 19,
      outOfOrder: 4,
      stayOver: 54,
      arrivals: 90,
      departures: 35,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16752.91, group: 1072.94, contract: 1866.46 },
    roomData: {
      total: 76,
      contract: 14,
      outOfOrder: 6,
      stayOver: 20,
      arrivals: 70,
      departures: 10,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Adriena Stonhouse",
        guestName: "Genni Rawlin",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Kizzie Geertz",
        guestName: "Albrecht Povah",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 8750.45, group: 1894.36, contract: 760.81 },
    roomData: {
      total: 74,
      contract: 2,
      outOfOrder: 6,
      stayOver: 72,
      arrivals: 96,
      departures: 36,
    },
  },
  {
    groupData: [
      { name: "Wisozk-Kunde", roomCount: 90, revenue: 529.82 },
      { name: "Jerde and Sons", roomCount: 84, revenue: 714.36 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7179.04, group: 145.66, contract: 1130.38 },
    roomData: {
      total: 78,
      contract: 8,
      outOfOrder: 0,
      stayOver: 5,
      arrivals: 77,
      departures: 50,
    },
  },
  {
    groupData: [
      { name: "Zemlak Inc", roomCount: 32, revenue: 984.1 },
      {
        name: "Jacobs, Wintheiser and Okuneva",
        roomCount: 94,
        revenue: 152.94,
      },
      { name: "Towne-Wolff", roomCount: 90, revenue: 732.85 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Portia Enochsson",
        guestName: "Gerta Brisseau",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Hali Vannuchi",
        guestName: "Loretta Tolumello",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10369.21, group: 1978.57, contract: 1715.77 },
    roomData: {
      total: 40,
      contract: 7,
      outOfOrder: 4,
      stayOver: 6,
      arrivals: 88,
      departures: 80,
    },
  },
  {
    groupData: [{ name: "Shields Inc", roomCount: 72, revenue: 953.32 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11169.64, group: 516.3, contract: 514.14 },
    roomData: {
      total: 81,
      contract: 8,
      outOfOrder: 7,
      stayOver: 12,
      arrivals: 26,
      departures: 26,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Matilde Huddles",
        guestName: "Honor Chilvers",
        reason:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16635.44, group: 1878.28, contract: 1848.3 },
    roomData: {
      total: 29,
      contract: 17,
      outOfOrder: 7,
      stayOver: 70,
      arrivals: 81,
      departures: 16,
    },
  },
  {
    groupData: [
      { name: "Roob, Farrell and Keeling", roomCount: 51, revenue: 435.16 },
      { name: "Haley Inc", roomCount: 41, revenue: 186.7 },
      { name: "Mitchell, Mills and Schaefer", roomCount: 89, revenue: 857.82 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 5991.01, group: 954.82, contract: 1726.14 },
    roomData: {
      total: 69,
      contract: 3,
      outOfOrder: 1,
      stayOver: 29,
      arrivals: 49,
      departures: 74,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Zia Tanton",
        guestName: "Gram Vasyanin",
        reason:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      },
      {
        autorizedBy: "Barr Broz",
        guestName: "Sheila Beardwell",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 9817.03, group: 678.07, contract: 746.3 },
    roomData: {
      total: 91,
      contract: 18,
      outOfOrder: 8,
      stayOver: 24,
      arrivals: 99,
      departures: 17,
    },
  },
  {
    groupData: [
      { name: "Cole-Stokes", roomCount: 23, revenue: 446.11 },
      { name: "Toy-Treutel", roomCount: 82, revenue: 246.35 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15729.01, group: 276.11, contract: 516.56 },
    roomData: {
      total: 42,
      contract: 13,
      outOfOrder: 6,
      stayOver: 49,
      arrivals: 61,
      departures: 57,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Raynell Spawton",
        guestName: "Mildred Sacco",
        reason: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      },
      {
        autorizedBy: "Celeste Ainsworth",
        guestName: "Winny Furtado",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 5736.05, group: 1274.96, contract: 1412.21 },
    roomData: {
      total: 87,
      contract: 1,
      outOfOrder: 2,
      stayOver: 58,
      arrivals: 23,
      departures: 20,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Alastair Blackett",
        guestName: "Alejandra Ferryman",
        reason:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13411.6, group: 1397.01, contract: 980.93 },
    roomData: {
      total: 26,
      contract: 19,
      outOfOrder: 0,
      stayOver: 23,
      arrivals: 24,
      departures: 63,
    },
  },
  {
    groupData: [{ name: "Goodwin LLC", roomCount: 49, revenue: 813.82 }],
    compRoomInfo: [
      {
        autorizedBy: "Bat Trevers",
        guestName: "Valerie MacGovern",
        reason:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      },
      {
        autorizedBy: "Ferne Casoni",
        guestName: "Jorey Dairton",
        reason:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8777.4, group: 1039.32, contract: 1496.88 },
    roomData: {
      total: 57,
      contract: 14,
      outOfOrder: 6,
      stayOver: 49,
      arrivals: 26,
      departures: 6,
    },
  },
  {
    groupData: [
      { name: "Boehm-Witting", roomCount: 21, revenue: 102.34 },
      { name: "Mitchell Inc", roomCount: 17, revenue: 309.3 },
      { name: "Hoppe-Lesch", roomCount: 77, revenue: 914.84 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Shina Iacobetto",
        guestName: "Grange Monini",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17891.91, group: 942.9, contract: 804.68 },
    roomData: {
      total: 90,
      contract: 11,
      outOfOrder: 7,
      stayOver: 68,
      arrivals: 100,
      departures: 36,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Delcina Borgnet",
        guestName: "Ker Louca",
        reason:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 7681.98, group: 470.82, contract: 1013.59 },
    roomData: {
      total: 88,
      contract: 18,
      outOfOrder: 3,
      stayOver: 60,
      arrivals: 19,
      departures: 59,
    },
  },
  {
    groupData: [{ name: "Nader Group", roomCount: 89, revenue: 257.15 }],
    compRoomInfo: [
      {
        autorizedBy: "Giulietta Jeffcoat",
        guestName: "Ardisj Grewe",
        reason:
          "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      },
      {
        autorizedBy: "Bernetta McNeilly",
        guestName: "Jesus Liger",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15401.23, group: 1041.15, contract: 988.24 },
    roomData: {
      total: 28,
      contract: 11,
      outOfOrder: 5,
      stayOver: 51,
      arrivals: 34,
      departures: 73,
    },
  },
  {
    groupData: [
      {
        name: "Stiedemann, Lindgren and Treutel",
        roomCount: 85,
        revenue: 415.47,
      },
      { name: "Barrows, Ruecker and Kemmer", roomCount: 79, revenue: 546.59 },
      { name: "Block and Sons", roomCount: 18, revenue: 770.74 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16436.76, group: 1654.22, contract: 669.31 },
    roomData: {
      total: 53,
      contract: 18,
      outOfOrder: 7,
      stayOver: 4,
      arrivals: 87,
      departures: 45,
    },
  },
  {
    groupData: [
      { name: "Deckow-Hintz", roomCount: 87, revenue: 367.76 },
      { name: "Harris, Spencer and Walter", roomCount: 78, revenue: 387.23 },
      { name: "Howe, Medhurst and Tromp", roomCount: 19, revenue: 521.02 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 11959.82, group: 826.26, contract: 1098.07 },
    roomData: {
      total: 95,
      contract: 19,
      outOfOrder: 2,
      stayOver: 36,
      arrivals: 93,
      departures: 27,
    },
  },
  {
    groupData: [{ name: "Lebsack-Luettgen", roomCount: 99, revenue: 305.56 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10731.94, group: 1177.71, contract: 847.72 },
    roomData: {
      total: 23,
      contract: 10,
      outOfOrder: 4,
      stayOver: 69,
      arrivals: 67,
      departures: 53,
    },
  },
  {
    groupData: [
      { name: "Hills-Hayes", roomCount: 66, revenue: 649.58 },
      { name: "Dooley LLC", roomCount: 92, revenue: 547.56 },
      { name: "Sipes-O'Hara", roomCount: 39, revenue: 335.48 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 13919.41, group: 321.24, contract: 727.65 },
    roomData: {
      total: 40,
      contract: 0,
      outOfOrder: 7,
      stayOver: 42,
      arrivals: 90,
      departures: 25,
    },
  },
  {
    groupData: [
      { name: "Kunze, Swaniawski and Jenkins", roomCount: 7, revenue: 800.29 },
      { name: "Doyle, Lubowitz and Bergstrom", roomCount: 8, revenue: 407.32 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 10976.41, group: 1311.87, contract: 1947.48 },
    roomData: {
      total: 62,
      contract: 10,
      outOfOrder: 1,
      stayOver: 38,
      arrivals: 90,
      departures: 75,
    },
  },
  {
    groupData: [
      { name: "Legros-Schimmel", roomCount: 55, revenue: 709.83 },
      { name: "Dibbert LLC", roomCount: 60, revenue: 706.74 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8086.59, group: 1995.1, contract: 925.8 },
    roomData: {
      total: 70,
      contract: 4,
      outOfOrder: 5,
      stayOver: 61,
      arrivals: 83,
      departures: 61,
    },
  },
  {
    groupData: [],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11094.38, group: 854.87, contract: 504.81 },
    roomData: {
      total: 38,
      contract: 12,
      outOfOrder: 7,
      stayOver: 61,
      arrivals: 80,
      departures: 30,
    },
  },
  {
    groupData: [
      { name: "Hand-Hilll", roomCount: 76, revenue: 242.06 },
      { name: "Jerde-Hoeger", roomCount: 47, revenue: 911.38 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Des Snaddon",
        guestName: "Lukas Bielby",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
      {
        autorizedBy: "Joelly Louys",
        guestName: "Emogene Neachell",
        reason:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12829.32, group: 688.47, contract: 1291.26 },
    roomData: {
      total: 85,
      contract: 6,
      outOfOrder: 4,
      stayOver: 67,
      arrivals: 26,
      departures: 33,
    },
  },
  {
    groupData: [
      { name: "Murazik and Sons", roomCount: 92, revenue: 105.13 },
      { name: "Ziemann-Lueilwitz", roomCount: 98, revenue: 290.12 },
      { name: "Kunde-Sanford", roomCount: 33, revenue: 142.09 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Seward Chart",
        guestName: "Shela Arnke",
        reason:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      },
      {
        autorizedBy: "Buck Semken",
        guestName: "Charmane Handrik",
        reason:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 8801.41, group: 464.48, contract: 1791.79 },
    roomData: {
      total: 72,
      contract: 10,
      outOfOrder: 2,
      stayOver: 17,
      arrivals: 21,
      departures: 44,
    },
  },
  {
    groupData: [
      { name: "Roberts LLC", roomCount: 67, revenue: 553.51 },
      { name: "Hagenes-Corkery", roomCount: 49, revenue: 711.91 },
      { name: "Cartwright Group", roomCount: 39, revenue: 144.65 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Hiram Haggis",
        guestName: "Dalenna Joao",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 19689.32, group: 874.88, contract: 1045.59 },
    roomData: {
      total: 34,
      contract: 5,
      outOfOrder: 3,
      stayOver: 0,
      arrivals: 70,
      departures: 41,
    },
  },
  {
    groupData: [
      { name: "Schowalter LLC", roomCount: 6, revenue: 913.59 },
      { name: "Nitzsche, Rosenbaum and Huel", roomCount: 95, revenue: 959.77 },
      { name: "Ortiz-Dicki", roomCount: 12, revenue: 616.04 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lesya Fitzsymons",
        guestName: "Carmelia Snedden",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16866.46, group: 969.35, contract: 1938.23 },
    roomData: {
      total: 65,
      contract: 1,
      outOfOrder: 4,
      stayOver: 76,
      arrivals: 36,
      departures: 22,
    },
  },
  {
    groupData: [
      { name: "Roob, Daniel and Gerlach", roomCount: 88, revenue: 188.82 },
      { name: "Krajcik LLC", roomCount: 31, revenue: 156.76 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 12872.74, group: 321.04, contract: 117.09 },
    roomData: {
      total: 75,
      contract: 19,
      outOfOrder: 2,
      stayOver: 33,
      arrivals: 92,
      departures: 1,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Dinny Whale",
        guestName: "Sherill Wardle",
        reason:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13598.44, group: 1588.05, contract: 774.24 },
    roomData: {
      total: 96,
      contract: 14,
      outOfOrder: 0,
      stayOver: 2,
      arrivals: 19,
      departures: 65,
    },
  },
  {
    groupData: [
      { name: "Bashirian-Pfannerstill", roomCount: 83, revenue: 851.06 },
      { name: "Kunde, Goodwin and Mante", roomCount: 82, revenue: 244.5 },
      { name: "Romaguera, Fay and Thompson", roomCount: 11, revenue: 107.5 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Ryann Cutmore",
        guestName: "Wadsworth Redhead",
        reason:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 14037.35, group: 854.6, contract: 1954.87 },
    roomData: {
      total: 61,
      contract: 6,
      outOfOrder: 7,
      stayOver: 24,
      arrivals: 47,
      departures: 7,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Dinah Mickelwright",
        guestName: "Delbert Disdel",
        reason:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      },
      {
        autorizedBy: "Christos Puckinghorne",
        guestName: "Husain Crother",
        reason:
          "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 19434.62, group: 1969.08, contract: 243.53 },
    roomData: {
      total: 39,
      contract: 15,
      outOfOrder: 3,
      stayOver: 6,
      arrivals: 32,
      departures: 55,
    },
  },
  {
    groupData: [{ name: "Padberg-Corkery", roomCount: 59, revenue: 648.97 }],
    compRoomInfo: [],
    outOfOrderRooms: [],
    revenueData: { total: 5199.12, group: 1578.05, contract: 395.28 },
    roomData: {
      total: 64,
      contract: 1,
      outOfOrder: 4,
      stayOver: 68,
      arrivals: 43,
      departures: 51,
    },
  },
  {
    groupData: [
      { name: "Funk and Sons", roomCount: 77, revenue: 138.52 },
      { name: "Durgan LLC", roomCount: 36, revenue: 647.11 },
      { name: "Mertz and Sons", roomCount: 34, revenue: 457.27 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 17991.86, group: 921.81, contract: 933.11 },
    roomData: {
      total: 50,
      contract: 13,
      outOfOrder: 4,
      stayOver: 80,
      arrivals: 29,
      departures: 79,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Valene Duchesne",
        guestName: "Kermie McPartlin",
        reason:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      },
    ],
    outOfOrderRooms: [],
    revenueData: { total: 9498.1, group: 1026.35, contract: 1110.41 },
    roomData: {
      total: 97,
      contract: 11,
      outOfOrder: 7,
      stayOver: 16,
      arrivals: 3,
      departures: 78,
    },
  },
  {
    groupData: [
      { name: "Bins Group", roomCount: 17, revenue: 426.27 },
      { name: "Cormier-Tillman", roomCount: 66, revenue: 560.83 },
      { name: "Dibbert Group", roomCount: 74, revenue: 692.36 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Allyce Nineham",
        guestName: "Jermain Boost",
        reason:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10160.07, group: 825.06, contract: 708.23 },
    roomData: {
      total: 51,
      contract: 12,
      outOfOrder: 2,
      stayOver: 76,
      arrivals: 47,
      departures: 2,
    },
  },
  {
    groupData: [
      { name: "Runte-Fisher", roomCount: 58, revenue: 321.67 },
      { name: "Pouros-Jacobson", roomCount: 84, revenue: 209.42 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 6718.22, group: 895.66, contract: 1869.45 },
    roomData: {
      total: 62,
      contract: 11,
      outOfOrder: 2,
      stayOver: 15,
      arrivals: 39,
      departures: 36,
    },
  },
  {
    groupData: [
      { name: "Ortiz, Lakin and Graham", roomCount: 90, revenue: 737.3 },
      { name: "Schultz, Paucek and Keebler", roomCount: 36, revenue: 746.41 },
      { name: "Bergnaum Group", roomCount: 10, revenue: 887.31 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16505.74, group: 1496.25, contract: 1675.03 },
    roomData: {
      total: 90,
      contract: 1,
      outOfOrder: 7,
      stayOver: 63,
      arrivals: 33,
      departures: 52,
    },
  },
  {
    groupData: [
      {
        name: "Kovacek, Nitzsche and Franecki",
        roomCount: 26,
        revenue: 274.27,
      },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Lydon Monery",
        guestName: "Lindsay Mucci",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        autorizedBy: "Camella Cranch",
        guestName: "Gerrie Khristyukhin",
        reason:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16960.57, group: 1316.99, contract: 516.34 },
    roomData: {
      total: 33,
      contract: 14,
      outOfOrder: 1,
      stayOver: 27,
      arrivals: 86,
      departures: 23,
    },
  },
  {
    groupData: [
      { name: "Hand LLC", roomCount: 96, revenue: 899.49 },
      { name: "Ritchie, Yundt and Klocko", roomCount: 48, revenue: 555.72 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 8,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15150.22, group: 471.58, contract: 1873.51 },
    roomData: {
      total: 38,
      contract: 2,
      outOfOrder: 0,
      stayOver: 5,
      arrivals: 29,
      departures: 3,
    },
  },
  {
    groupData: [
      { name: "Schuster-Hauck", roomCount: 101, revenue: 675.16 },
      { name: "Deckow-Hettinger", roomCount: 34, revenue: 865.26 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Otho Pulley",
        guestName: "Cherish Willmot",
        reason:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13828.71, group: 1075.09, contract: 1852.52 },
    roomData: {
      total: 20,
      contract: 14,
      outOfOrder: 7,
      stayOver: 20,
      arrivals: 71,
      departures: 63,
    },
  },
  {
    groupData: [{ name: "White-Koepp", roomCount: 72, revenue: 816.29 }],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15247.43, group: 814.34, contract: 1017.81 },
    roomData: {
      total: 93,
      contract: 6,
      outOfOrder: 8,
      stayOver: 33,
      arrivals: 22,
      departures: 4,
    },
  },
  {
    groupData: [
      { name: "Sanford, O'Connell and Thiel", roomCount: 4, revenue: 777.72 },
      { name: "Hills, Koch and Thiel", roomCount: 73, revenue: 430.06 },
      { name: "Ryan-Bayer", roomCount: 90, revenue: 644.53 },
    ],
    compRoomInfo: [],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 10,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 7972.24, group: 1995.69, contract: 412.05 },
    roomData: {
      total: 84,
      contract: 1,
      outOfOrder: 8,
      stayOver: 39,
      arrivals: 39,
      departures: 0,
    },
  },
  {
    groupData: [{ name: "Keeling-Wiza", roomCount: 48, revenue: 907.56 }],
    compRoomInfo: [
      {
        autorizedBy: "Grantham Rottery",
        guestName: "Miles Ruppelin",
        reason:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      },
      {
        autorizedBy: "Lebbie Quinion",
        guestName: "Calli Mainland",
        reason:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 11,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 18620.91, group: 1112.17, contract: 216.58 },
    roomData: {
      total: 47,
      contract: 13,
      outOfOrder: 6,
      stayOver: 31,
      arrivals: 40,
      departures: 52,
    },
  },
  {
    groupData: [{ name: "O'Keefe-Ziemann", roomCount: 44, revenue: 952.01 }],
    compRoomInfo: [
      {
        autorizedBy: "Elenore Crean",
        guestName: "Bellina Gaskarth",
        reason:
          "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 10670.63, group: 806.44, contract: 1690.39 },
    roomData: {
      total: 77,
      contract: 13,
      outOfOrder: 6,
      stayOver: 49,
      arrivals: 96,
      departures: 70,
    },
  },
  {
    groupData: [],
    compRoomInfo: [
      {
        autorizedBy: "Arlin Roubottom",
        guestName: "Laurens McVaugh",
        reason:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 13,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 12,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 13770.71, group: 739.1, contract: 899.41 },
    roomData: {
      total: 33,
      contract: 2,
      outOfOrder: 0,
      stayOver: 27,
      arrivals: 69,
      departures: 8,
    },
  },
  {
    groupData: [
      { name: "Keeling, Kuphal and Kautzer", roomCount: 18, revenue: 125.44 },
      { name: "Hagenes-Hintz", roomCount: 20, revenue: 481.6 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Shaine Cosser",
        guestName: "Brady Sieve",
        reason:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 16218.54, group: 1227.45, contract: 288.54 },
    roomData: {
      total: 59,
      contract: 15,
      outOfOrder: 0,
      stayOver: 60,
      arrivals: 7,
      departures: 7,
    },
  },
  {
    groupData: [
      { name: "Schumm Inc", roomCount: 36, revenue: 157.75 },
      { name: "Hartmann-West", roomCount: 94, revenue: 694.3 },
      { name: "Lynch Group", roomCount: 45, revenue: 759.67 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Linzy Willshee",
        guestName: "Almire Toseland",
        reason:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 6,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 15045.14, group: 1789.93, contract: 326.56 },
    roomData: {
      total: 92,
      contract: 15,
      outOfOrder: 9,
      stayOver: 78,
      arrivals: 63,
      departures: 19,
    },
  },
  {
    groupData: [
      { name: "Welch-Von", roomCount: 8, revenue: 971.59 },
      { name: "Goyette LLC", roomCount: 43, revenue: 288.69 },
      { name: "Thiel-Pouros", roomCount: 21, revenue: 372.44 },
    ],
    compRoomInfo: [
      {
        autorizedBy: "Conrado Storrier",
        guestName: "Rolf Kensett",
        reason:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
      {
        autorizedBy: "Ron Hardstaff",
        guestName: "Ogdan Larmor",
        reason:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      },
    ],
    outOfOrderRooms: [
      {
        code: "C5",
        roomNumber: 4,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 7,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 9,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "C5",
        roomNumber: 14,
        details: "error: undefined method `/' for nil:NilClass",
      },
      {
        code: "HK",
        roomNumber: 5,
        details: "error: undefined method `/' for nil:NilClass",
      },
    ],
    revenueData: { total: 11289.95, group: 1960.66, contract: 1367.14 },
    roomData: {
      total: 53,
      contract: 7,
      outOfOrder: 1,
      stayOver: 59,
      arrivals: 52,
      departures: 5,
    },
  },
];

const data = addCreatedDate(sampleData);

module.exports = data;
