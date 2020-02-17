const cities = [
  {
    "name": "Bangkok",
    "country": "TH",
    "region": "SE Asia",
    "cost": 1380,
    "currency": "USD",
    "temp": 302.03888888888895,
    "humidity": 78,
    "internetSpeed": 20
  },
  {
    "name": "Chiang Mai",
    "country": "TH",
    "region": "SE Asia",
    "cost": 654,
    "currency": "USD",
    "temp": 299.8166666666667,
    "humidity": 83,
    "internetSpeed": 20
  },
  {
    "name": "Pattaya",
    "country": "TH",
    "region": "SE Asia",
    "cost": 1183,
    "currency": "USD",
    "temp": 301.48333333333335,
    "humidity": 88,
    "internetSpeed": 20
  },
  {
    "name": "Phuket",
    "country": "TH",
    "region": "SE Asia",
    "cost": 1040,
    "currency": "USD",
    "temp": 302.03888888888895,
    "humidity": 74,
    "internetSpeed": 20
  },
  {
    "name": "Hoi An",
    "country": "VN",
    "region": "SE Asia",
    "cost": 1083,
    "currency": "USD",
    "temp": 299.2611111111112,
    "humidity": 83,
    "internetSpeed": 20
  },
  {
    "name": "Prague",
    "country": "CZ",
    "region": "Europe",
    "cost": 1191,
    "currency": "USD",
    "temp": 292.03888888888895,
    "humidity": 77,
    "internetSpeed": 40
  },
  {
    "name": "Phnom Penh",
    "country": "KH",
    "region": "SE Asia",
    "cost": 936,
    "currency": "USD",
    "temp": 301.48333333333335,
    "humidity": 78,
    "internetSpeed": 10
  },
  {
    "name": "Sofia",
    "country": "BG",
    "region": "Europe",
    "cost": 1490,
    "currency": "USD",
    "temp": 296.48333333333335,
    "humidity": 69,
    "internetSpeed": 40
  },
  {
    "name": "Riga",
    "country": "LV",
    "region": "Europe",
    "cost": 1417,
    "currency": "USD",
    "temp": 286.48333333333335,
    "humidity": 82,
    "internetSpeed": 40
  },
  {
    "name": "Ho Chi Minh City",
    "country": "VN",
    "region": "SE Asia",
    "cost": 1329,
    "currency": "USD",
    "temp": 296.48333333333335,
    "humidity": 97,
    "internetSpeed": 20
  },
  {
    "name": "Penang",
    "country": "MY",
    "region": "SE Asia",
    "cost": 1065,
    "currency": "USD",
    "temp": 301.48333333333335,
    "humidity": 83,
    "internetSpeed": 10
  },
  {
    "name": "Budapest",
    "country": "HU",
    "region": "Europe",
    "cost": 2166,
    "currency": "USD",
    "temp": 298.15000000000003,
    "humidity": 53,
    "internetSpeed": 30
  },
  {
    "name": "Kuala Lumpur",
    "country": "MY",
    "region": "SE Asia",
    "cost": 1206,
    "currency": "USD",
    "temp": 299.2611111111112,
    "humidity": 83,
    "internetSpeed": 10
  },
  {
    "name": "Brasov",
    "country": "RO",
    "region": "Europe",
    "cost": 1824,
    "currency": "USD",
    "temp": 294.2611111111112,
    "humidity": 57,
    "internetSpeed": 80
  },
  {
    "name": "Bratislava",
    "country": "SK",
    "region": "Europe",
    "cost": 1551,
    "currency": "USD",
    "temp": 294.2611111111112,
    "humidity": 82,
    "internetSpeed": 20
  },
  {
    "name": "Kosice",
    "country": "SK",
    "region": "Europe",
    "cost": 1466,
    "currency": "USD",
    "temp": 292.03888888888895,
    "humidity": 72,
    "internetSpeed": 30
  },
  {
    "name": "Belgrade",
    "country": "RS",
    "region": "Europe",
    "cost": 1358,
    "currency": "USD",
    "temp": 293.15000000000003,
    "humidity": 93,
    "internetSpeed": 10
  },
  {
    "name": "Wroclaw",
    "country": "PL",
    "region": "Europe",
    "cost": 1764,
    "currency": "USD",
    "temp": 294.2611111111112,
    "humidity": 68,
    "internetSpeed": 20
  },
  {
    "name": "Davao",
    "country": "PH",
    "region": "SE Asia",
    "cost": 1054,
    "currency": "USD",
    "temp": 294.8166666666667,
    "humidity": 100,
    "internetSpeed": 5
  },
  {
    "name": "Timisoara",
    "country": "RO",
    "region": "Europe",
    "cost": 1999,
    "currency": "USD",
    "temp": 294.2611111111112,
    "humidity": 94,
    "internetSpeed": 60
  },
  {
    "name": "Ubud",
    "country": "ID",
    "region": "SE Asia",
    "cost": 1185,
    "currency": "USD",
    "temp": 298.15000000000003,
    "humidity": 83,
    "internetSpeed": 5
  },
  {
    "name": "Ljubljana",
    "country": "SI",
    "region": "Europe",
    "cost": 2162,
    "currency": "USD",
    "temp": 293.15000000000003,
    "humidity": 77,
    "internetSpeed": 20
  },
  {
    "name": "Warsaw",
    "country": "PL",
    "region": "Europe",
    "cost": 1987,
    "currency": "USD",
    "temp": 291.48333333333335,
    "humidity": 63,
    "internetSpeed": 30
  },
  {
    "name": "Zagreb",
    "country": "HR",
    "region": "Europe",
    "cost": 1539,
    "currency": "USD",
    "temp": 295.37222222222226,
    "humidity": 82,
    "internetSpeed": 10
  },
  {
    "name": "Shanghai",
    "country": "CN",
    "region": "East Asia",
    "cost": 1656,
    "currency": "USD",
    "temp": 298.15000000000003,
    "humidity": 83,
    "internetSpeed": 20
  },
  {
    "name": "San Juan",
    "country": "US",
    "region": "Central America",
    "cost": 2164,
    "currency": "USD",
    "temp": 297.03888888888895,
    "humidity": 94,
    "internetSpeed": 10
  },
  {
    "name": "Cochabamba",
    "country": "BO",
    "region": "South America",
    "cost": 829,
    "currency": "USD",
    "temp": 297.03888888888895,
    "humidity": 25,
    "internetSpeed": 5
  },
  {
    "name": "Taipei",
    "country": "TW",
    "region": "East Asia",
    "cost": 2137,
    "currency": "USD",
    "temp": 304.8166666666667,
    "humidity": 69,
    "internetSpeed": 40
  },
  {
    "name": "Montreal",
    "country": "CA",
    "region": "North America",
    "cost": 2305,
    "currency": "USD",
    "temp": 297.5944444444445,
    "humidity": 57,
    "internetSpeed": 20
  },
  {
    "name": "Las Vegas",
    "country": "US",
    "region": "North America",
    "cost": 2148,
    "currency": "USD",
    "temp": 307.5944444444445,
    "humidity": 20,
    "internetSpeed": 40
  },
  {
    "name": "Lima",
    "country": "PE",
    "region": "South America",
    "cost": 1099,
    "currency": "USD",
    "temp": 292.03888888888895,
    "humidity": 72,
    "internetSpeed": 10
  },
  {
    "name": "Curitiba",
    "country": "BR",
    "region": "South America",
    "cost": 2145,
    "currency": "USD",
    "temp": 299.8166666666667,
    "humidity": 60,
    "internetSpeed": 30
  },
  {
    "name": "Siem Reap",
    "country": "KH",
    "region": "SE Asia",
    "cost": 1045,
    "currency": "USD",
    "temp": 299.2611111111112,
    "humidity": 78,
    "internetSpeed": 10
  },
  {
    "name": "Austin",
    "country": "US",
    "region": "North America",
    "cost": 2541,
    "currency": "USD",
    "temp": 299.2611111111112,
    "humidity": 73,
    "internetSpeed": 60
  },
  {
    "name": "Beijing",
    "country": "CN",
    "region": "East Asia",
    "cost": 1565,
    "currency": "USD",
    "temp": 300.9277777777778,
    "humidity": 93,
    "internetSpeed": 30
  },
  {
    "name": "Cairo",
    "country": "EG",
    "region": "Africa",
    "cost": 917,
    "currency": "USD",
    "temp": 305.37222222222226,
    "humidity": 38,
    "internetSpeed": 5
  },
  {
    "name": "Dallas",
    "country": "US",
    "region": "North America",
    "cost": 2265,
    "currency": "USD",
    "temp": 306.48333333333335,
    "humidity": 55,
    "internetSpeed": 20
  },
  {
    "name": "Park City",
    "country": "US",
    "region": "North America",
    "cost": 2862,
    "currency": "USD",
    "temp": 302.03888888888895,
    "humidity": 21,
    "internetSpeed": 40
  },
  {
    "name": "Lisbon",
    "country": "PT",
    "region": "Europe",
    "cost": 2455,
    "currency": "USD",
    "temp": 300.37222222222226,
    "humidity": 64,
    "internetSpeed": 30
  },
  {
    "name": "Santa Monica",
    "country": "US",
    "region": "North America",
    "cost": 2601,
    "currency": "USD",
    "temp": 302.03888888888895,
    "humidity": 69,
    "internetSpeed": 40
  },
  {
    "name": "Singapore",
    "country": "SG",
    "region": "SE Asia",
    "cost": 2678,
    "currency": "USD",
    "temp": 298.15000000000003,
    "humidity": 94,
    "internetSpeed": 80
  },
  {
    "name": "Medellin",
    "country": "CO",
    "region": "South America",
    "cost": 1296,
    "currency": "USD",
    "temp": 294.2611111111112,
    "humidity": 52,
    "internetSpeed": 10
  },
  {
    "name": "Toronto",
    "country": "CA",
    "region": "North America",
    "cost": 2825,
    "currency": "USD",
    "temp": 300.37222222222226,
    "humidity": 69,
    "internetSpeed": 20
  },
  {
    "name": "Tokyo",
    "country": "JP",
    "region": "East Asia",
    "cost": 2392,
    "currency": "USD",
    "temp": 298.15000000000003,
    "humidity": 83,
    "internetSpeed": 30
  },
  {
    "name": "Porto",
    "country": "PT",
    "region": "Europe",
    "cost": 2686,
    "currency": "USD",
    "temp": 299.2611111111112,
    "humidity": 99,
    "internetSpeed": 30
  },
  {
    "name": "Tucson",
    "country": "US",
    "region": "North America",
    "cost": 2882,
    "currency": "USD",
    "temp": 309.8166666666667,
    "humidity": 31,
    "internetSpeed": 30
  },
  {
    "name": "Palawan",
    "country": "PH",
    "region": "SE Asia",
    "cost": 1255,
    "currency": "USD",
    "temp": 295.9277777777778,
    "humidity": 96,
    "internetSpeed": 5
  },
  {
    "name": "Hong Kong",
    "country": "HK",
    "region": "East Asia",
    "cost": 2634,
    "currency": "USD",
    "temp": 304.8166666666667,
    "humidity": 79,
    "internetSpeed": 90
  },
  {
    "name": "Playa del Carmen",
    "country": "MX",
    "region": "North America",
    "cost": 1887,
    "currency": "USD",
    "temp": 303.7055555555556,
    "humidity": 70,
    "internetSpeed": 10
  },
  {
    "name": "Manchester",
    "country": "UK",
    "region": "Europe",
    "cost": 2641,
    "currency": "USD",
    "temp": 294.2611111111112,
    "humidity": 64,
    "internetSpeed": 30
  },
  {
    "name": "Tel Aviv",
    "country": "IL",
    "region": "Europe",
    "cost": 2519,
    "currency": "USD",
    "temp": 301.48333333333335,
    "humidity": 61,
    "internetSpeed": 20
  },
  {
    "name": "Bucharest",
    "country": "RO",
    "region": "Europe",
    "cost": 2064,
    "currency": "USD",
    "temp": 295.37222222222226,
    "humidity": 77,
    "internetSpeed": 80
  },
  {
    "name": "Vancouver",
    "country": "CA",
    "region": "North America",
    "cost": 2843,
    "currency": "USD",
    "temp": 292.5944444444445,
    "humidity": 87,
    "internetSpeed": 40
  },
  {
    "name": "Bordeaux",
    "country": "FR",
    "region": "Europe",
    "cost": 3077,
    "currency": "USD",
    "temp": 300.9277777777778,
    "humidity": 36,
    "internetSpeed": 30
  },
  {
    "name": "Buenos Aires",
    "country": "AR",
    "region": "South America",
    "cost": 1724,
    "currency": "USD",
    "temp": 291.48333333333335,
    "humidity": 88,
    "internetSpeed": 10
  },
  {
    "name": "Detroit",
    "country": "US",
    "region": "North America",
    "cost": 2301,
    "currency": "USD",
    "temp": 300.37222222222226,
    "humidity": 44,
    "internetSpeed": 30
  },
  {
    "name": "Seoul",
    "country": "KR",
    "region": "East Asia",
    "cost": 2934,
    "currency": "USD",
    "temp": 293.15000000000003,
    "humidity": 82,
    "internetSpeed": 60
  },
  {
    "name": "Cebu",
    "country": "PH",
    "region": "SE Asia",
    "cost": 1808,
    "currency": "USD",
    "temp": 299.2611111111112,
    "humidity": 88,
    "internetSpeed": 5
  },
  {
    "name": "Tallinn",
    "country": "EE",
    "region": "Europe",
    "cost": 3161,
    "currency": "USD",
    "temp": 289.2611111111112,
    "humidity": 82,
    "internetSpeed": 40
  },
  {
    "name": "Boulder",
    "country": "US",
    "region": "North America",
    "cost": 3070,
    "currency": "USD",
    "temp": 307.5944444444445,
    "humidity": 20,
    "internetSpeed": 20
  },
  {
    "name": "Salzburg",
    "country": "AT",
    "region": "Europe",
    "cost": 2748,
    "currency": "USD",
    "temp": 290.9277777777778,
    "humidity": 82,
    "internetSpeed": 20
  },
  {
    "name": "Madrid",
    "country": "ES",
    "region": "Europe",
    "cost": 2798,
    "currency": "USD",
    "temp": 308.15000000000003,
    "humidity": 17,
    "internetSpeed": 30
  },
  {
    "name": "Vienna",
    "country": "AT",
    "region": "Europe",
    "cost": 3096,
    "currency": "USD",
    "temp": 292.5944444444445,
    "humidity": 82,
    "internetSpeed": 20
  },
  {
    "name": "Manila",
    "country": "PH",
    "region": "SE Asia",
    "cost": 1371,
    "currency": "USD",
    "temp": 298.15000000000003,
    "humidity": 100,
    "internetSpeed": 5
  },
  {
    "name": "Dubai",
    "country": "AE",
    "region": "Middle East",
    "cost": 3233,
    "currency": "USD",
    "temp": 309.2611111111112,
    "humidity": 37,
    "internetSpeed": 30
  },
  {
    "name": "Recife",
    "country": "BR",
    "region": "South America",
    "cost": 1994,
    "currency": "USD",
    "temp": 299.2611111111112,
    "humidity": 97,
    "internetSpeed": 20
  },
  {
    "name": "Saint Petersburg",
    "country": "RU",
    "region": "Europe",
    "cost": 2124,
    "currency": "USD",
    "temp": 289.2611111111112,
    "humidity": 63,
    "internetSpeed": 20
  },
  {
    "name": "Orlando",
    "country": "US",
    "region": "North America",
    "cost": 2436,
    "currency": "USD",
    "temp": 306.48333333333335,
    "humidity": 55,
    "internetSpeed": 20
  },
  {
    "name": "Seattle",
    "country": "US",
    "region": "North America",
    "cost": 3254,
    "currency": "USD",
    "temp": 292.03888888888895,
    "humidity": 72,
    "internetSpeed": 30
  },
  {
    "name": "Salt Lake City",
    "country": "US",
    "region": "North America",
    "cost": 3729,
    "currency": "USD",
    "temp": 301.48333333333335,
    "humidity": 20,
    "internetSpeed": 30
  },
  {
    "name": "Berlin",
    "country": "DE",
    "region": "Europe",
    "cost": 3508,
    "currency": "USD",
    "temp": 293.7055555555556,
    "humidity": 49,
    "internetSpeed": 30
  },
  {
    "name": "Wellington",
    "country": "NZ",
    "region": "Oceania",
    "cost": 3539,
    "currency": "USD",
    "temp": 284.2611111111111,
    "humidity": 87,
    "internetSpeed": 30
  },
  {
    "name": "Cambridge",
    "country": "UK",
    "region": "Europe",
    "cost": 3270,
    "currency": "USD",
    "temp": 295.37222222222226,
    "humidity": 49,
    "internetSpeed": 30
  },
  {
    "name": "Portland",
    "country": "US",
    "region": "North America",
    "cost": 3266,
    "currency": "USD",
    "temp": 289.8166666666667,
    "humidity": 62,
    "internetSpeed": 20
  },
  {
    "name": "Granada",
    "country": "ES",
    "region": "Europe",
    "cost": 2855,
    "currency": "USD",
    "temp": 301.48333333333335,
    "humidity": 25,
    "internetSpeed": 30
  },
  {
    "name": "Barcelona",
    "country": "ES",
    "region": "Europe",
    "cost": 3431,
    "currency": "USD",
    "temp": 298.15000000000003,
    "humidity": 60,
    "internetSpeed": 30
  },
  {
    "name": "Dublin",
    "country": "IE",
    "region": "Europe",
    "cost": 3214,
    "currency": "USD",
    "temp": 290.37222222222226,
    "humidity": 82,
    "internetSpeed": 30
  },
  {
    "name": "Auckland",
    "country": "NZ",
    "region": "Oceania",
    "cost": 2869,
    "currency": "USD",
    "temp": 284.8166666666667,
    "humidity": 100,
    "internetSpeed": 20
  },
  {
    "name": "Stockholm",
    "country": "SE",
    "region": "Europe",
    "cost": 3714,
    "currency": "USD",
    "temp": 295.37222222222226,
    "humidity": 68,
    "internetSpeed": 50
  },
  {
    "name": "Denver",
    "country": "US",
    "region": "North America",
    "cost": 3229,
    "currency": "USD",
    "temp": 307.5944444444445,
    "humidity": 20,
    "internetSpeed": 30
  },
  {
    "name": "Basel",
    "country": "CH",
    "region": "Europe",
    "cost": 3795,
    "currency": "USD",
    "temp": 291.48333333333335,
    "humidity": 82,
    "internetSpeed": 40
  },
  {
    "name": "Amsterdam",
    "country": "NL",
    "region": "Europe",
    "cost": 3772,
    "currency": "USD",
    "temp": 293.7055555555556,
    "humidity": 68,
    "internetSpeed": 40
  },
  {
    "name": "Johannesburg",
    "country": "ZA",
    "region": "Africa",
    "cost": 2072,
    "currency": "USD",
    "temp": 293.15000000000003,
    "humidity": 12,
    "internetSpeed": 10
  },
  {
    "name": "Lyon",
    "country": "FR",
    "region": "Europe",
    "cost": 3680,
    "currency": "USD",
    "temp": 295.37222222222226,
    "humidity": 49,
    "internetSpeed": 50
  },
  {
    "name": "Rome",
    "country": "IT",
    "region": "Europe",
    "cost": 3250,
    "currency": "USD",
    "temp": 297.03888888888895,
    "humidity": 88,
    "internetSpeed": 10
  },
  {
    "name": "Copenhagen",
    "country": "DK",
    "region": "Europe",
    "cost": 3514,
    "currency": "USD",
    "temp": 292.03888888888895,
    "humidity": 77,
    "internetSpeed": 40
  },
  {
    "name": "Los Angeles",
    "country": "US",
    "region": "North America",
    "cost": 4178,
    "currency": "USD",
    "temp": 301.48333333333335,
    "humidity": 73,
    "internetSpeed": 30
  },
  {
    "name": "Cape Town",
    "country": "ZA",
    "region": "Africa",
    "cost": 2564,
    "currency": "USD",
    "temp": 288.7055555555556,
    "humidity": 84,
    "internetSpeed": 10
  },
  {
    "name": "Rotterdam",
    "country": "NL",
    "region": "Europe",
    "cost": 3736,
    "currency": "USD",
    "temp": 293.15000000000003,
    "humidity": 63,
    "internetSpeed": 50
  },
  {
    "name": "Oslo",
    "country": "NO",
    "region": "Europe",
    "cost": 4294,
    "currency": "USD",
    "temp": 293.15000000000003,
    "humidity": 59,
    "internetSpeed": 30
  },
  {
    "name": "Columbus",
    "country": "US",
    "region": "North America",
    "cost": 4208,
    "currency": "USD",
    "temp": 301.48333333333335,
    "humidity": 65,
    "internetSpeed": 20
  },
  {
    "name": "Dusseldorf",
    "country": "DE",
    "region": "Europe",
    "cost": 3910,
    "currency": "USD",
    "temp": 295.9277777777778,
    "humidity": 68,
    "internetSpeed": 30
  },
  {
    "name": "Philadelphia",
    "country": "US",
    "region": "North America",
    "cost": 4358,
    "currency": "USD",
    "temp": 303.15000000000003,
    "humidity": 45,
    "internetSpeed": 30
  },
  {
    "name": "Minneapolis",
    "country": "US",
    "region": "North America",
    "cost": 3724,
    "currency": "USD",
    "temp": 293.15000000000003,
    "humidity": 82,
    "internetSpeed": 20
  },
  {
    "name": "New York City",
    "country": "US",
    "region": "North America",
    "cost": 4674,
    "currency": "USD",
    "temp": 302.03888888888895,
    "humidity": 35,
    "internetSpeed": 40
  },
  {
    "name": "Chicago",
    "country": "US",
    "region": "North America",
    "cost": 3911,
    "currency": "USD",
    "temp": 300.9277777777778,
    "humidity": 50,
    "internetSpeed": 30
  },
  {
    "name": "Paris",
    "country": "FR",
    "region": "Europe",
    "cost": 4656,
    "currency": "USD",
    "temp": 296.48333333333335,
    "humidity": 49,
    "internetSpeed": 70
  },
  {
    "name": "Miami",
    "country": "US",
    "region": "North America",
    "cost": 4119,
    "currency": "USD",
    "temp": 304.2611111111112,
    "humidity": 74,
    "internetSpeed": 30
  },
  {
    "name": "San Francisco",
    "country": "US",
    "region": "North America",
    "cost": 4854,
    "currency": "USD",
    "temp": 295.37222222222226,
    "humidity": 82,
    "internetSpeed": 30
  },
  {
    "name": "London",
    "country": "UK",
    "region": "Europe",
    "cost": 4504,
    "currency": "USD",
    "temp": 295.37222222222226,
    "humidity": 60,
    "internetSpeed": 30
  }
]

module.exports = cities;