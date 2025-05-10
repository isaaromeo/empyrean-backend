const dragons = [
  {
    id: 1,
    name: "Tairneanach",
    age: 100,
    location: "Basgiath",
    color: "Black",
    tail: "Morningstar tail",
    bonded_rider: "Violet Sorrengail",
    status: "Alive",
    bio: [
      "Tairneanach, most commonly known as Tairn, is the bonded dragon of Violet Sorrengail and mate of Sgaeyl. He is currently the second largest dragon in active service and the only other black dragon aside from Codagh.",
      "He is the child of Murtcuideam and Fiaclanfuil and descended from the cunning Dubhmadinn line. He's a little over a hundred years old, which makes him about middle aged. He's revered as a battle dragon among Dragonkind, and is accredited for the defeat of the Tyrrish Rebellion despite nearly dying during the Battle of Aretia when his only other previous rider Naolin burned out saving Brennan Sorrengail. Because of his rare color and breed of tail, Tairn is also considered one of the deadliest dragons in Navarre.",
    ],
    quotes: [
      {
        quote: "I know exactly who and what you are, Violet Sorrengail.",
        book: "Fourth Wing",
      },
      {
        quote: "Should I get the wingleader?",
        book: "Fourth Wing",
      },
      {
        quote:
          "You are not my next rider you are my last, should you fall I will follow.",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872472/tairn_jb4kic.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Sgaeyl",
        relationship: "Mate",
      },
      {
        character: "Andarna",
        relationship: "Protégé",
      },
    ],
  },
  {
    id: 2,
    name: "Andarna",
    age: 2,
    location: "Aretia",
    color: "Iridiscent",
    tail: "Feathertail",
    bonded_rider: "Violet Sorrengail",
    status: "Alive",
    bio: [
      "Andarnaurram, more commonly known as Andarna, is an adolescent scorpiontail dragon, from a previously unknown 7th breed, capable of changing the color of her scales. She bonded Violet Sorrengail as her rider.",
      "Andarna waited 650 years to hatch. She waited until Violet's 18th birthday, when she heard the elders talk about the weakling daughter of their general, the girl forecasted to become the head of the scribes, and she knew Violet would have the mind of a scribe and the heart of a rider. She knew then Violet would be hers. She was left behind by her breed to breathe fire for the wardstone, from what she can remember.",
    ],
    quotes: [
      {
        quote: "You are as unique as I am. We want the same things.",
        book: "Fourth Wing",
      },
      {
        quote: "We do not eat our allies",
        book: "Fourth Wing",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872470/andarna_pslsv8.webp",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Tairneanach",
        relationship: "Mentor",
      },
    ],
  },
  {
    id: 3,
    name: "Sgaeyl",
    age: 50,
    location: "Aretia",
    color: "Blue",
    tail: "Daggertail",
    bonded_rider: "Xaden Riorson",
    status: "Alive",
    bio: [
      "Sgaeyl is a blue daggertail, the rarest of the blues, ruthless doesn’t even begin to degin to describe her, nor does she abide by what we assume to be what the dragons consider law.",
      "Shes is is from the Gormfaileas Line of dragons. She was previous bonded to Xaden's grandfather. She did not bond for another fifty years until she bonded with Xaden during his Threshing.",
    ],
    quotes: [
      {
        quote:
          "You are an inconvenience for which there is no adequate measurement",
        book: "Fourth Wing",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872470/sgaeyl_mvrnub.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Tairneanach",
        relationship: "Mate",
      },
      {
        character: "Codagh",
        relationship: "Rival",
      },
    ],
  },
  {
    id: 4,
    name: "Feirge",
    age: 24,
    location: "Basgiath",
    color: "Green",
    tail: "Daggertail",
    bonded_rider: "Rhiannon Matthias",
    status: "Alive",
    bio: [
      "Feirge is a Green Daggertail dragon bonded to Rhiannon Matthias. She fights in the Battle of Draitus, helping to defend the civilians who navigate the Medaro Pass. In Scottish Gaelic, feirge means 'of anger' It is the genetive case of 'fearg' (anger).",
    ],
    quotes: [
      {
        quote: "Then let us be menaces",
        book: "Onyx Storm",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872467/feirge_mc4gym.webp",
    appearances: ["Fourth Wing", "Iron Flame"],
  },
  {
    id: 5,
    name: "Deigh",
    age: "58",
    location: "Deceased",
    color: "Red",
    tail: "Daggertail",
    bonded_rider: "Liam Mairi",
    status: "Deceased",
    bio: [
      "Liam's dragon. Deigh was considered large by red daggertail standards, according to Violet. He had golden eyes. Deigh was described by Xaden Riorson as an exceptionally strong red daggertail.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872463/deigh_a6j90u.jpg",
    appearances: ["Fourth Wing"],
  },
  {
    id: 6,
    name: "Teine",
    age: 67,
    location: "Navarre's Front Lines",
    color: "Green",
    tail: "Clubtail",
    bonded_rider: "Mira Sorrengail",
    status: "Alive",
    bio: [
      "Mira's battle-hardened dragon. Often stationed at the front lines. Mira uses Teine's scales to create the defensive vest Mira gives to Violet to provide her with extra protection.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872463/teine_rwumuf.jpg",
    appearances: ["Fourth Wing", "Iron Flame"],
  },
  {
    id: 7,
    name: "Aotrom",
    age: 22,
    location: "Basgiath",
    color: "Brown",
    tail: "Swordtail",
    bonded_rider: "Ridoc Gamlyn",
    status: "Alive",
    bio: [
      "Aotrom is a brown swordtail that bonds with Ridoc during Threshing in 633 AU. He is is twenty-two years old during the events of Onyx Storm. He's roughly the half the size of Tairn.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872477/aotrom_ixh3hs.webp",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 8,
    name: "Sliseag",
    age: 47,
    location: "Aretia",
    color: "Red",
    tail: "Swordtail",
    bonded_rider: "Sawyer Henrick",
    status: "Alive",
    bio: [
      "Sawyer's dragon. Survives the battle at Basgiath where Sawyer loses his leg.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872460/sliseag_hualkn.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 9,
    name: "Cath",
    age: 67,
    location: "Basgiath",
    color: "Red",
    tail: "Swordtail",
    bonded_rider: "Dain Aetos",
    status: "Alive",
    bio: [
      "Dain's dragon. Shares his rider's \"by the rules\" demeanor. Cath is on the ledge at the first formation of new cadets. He attempts to stop Solas from torching a cadet.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872464/cath_vopip3.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 10,
    name: "Codagh",
    age: 200,
    location: "Basgiath",
    color: "Black",
    tail: "Swordtail",
    bonded_rider: "General Melgren",
    status: "Alive",
    bio: [
      "General Melgren's dragon. One of the most feared dragons in Navarre. Codagh is the eldest of the black dragon den.[1] Codagh is the dragon who executed the leaders of the Tyrrish Rebellion six years before the events of Fourth Wing in Calldyr.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872459/codagh_smbgh3.jpg",
    relationships: [
      {
        character: "Tairn",
        relationship: "Rival",
      },
    ],
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 11,
    name: "Baide",
    age: 38,
    location: "Basgiath",
    color: "Orange",
    tail: "Scorpiontail",
    bonded_rider: "Jack Barlowe",
    status: "Deceased",
    bio: ["Jack's former dragon. Killed by Jack when he turned venin."],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872474/baide_amd9tm.png",
    appearances: ["Fourth Wing"],
  },
  {
    id: 12,
    name: "Cuir",
    age: 78,
    location: "Basgiath",
    color: "Green",
    tail: "Swordtail",
    bonded_rider: "Bodhi Durran",
    status: "Alive",
    bio: [
      "Cuir is a green dragon, which are known for their keen intellect and rational countenance.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872472/cuir_bojavd.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 13,
    name: "Marbh",
    age: 85,
    location: "Aretia",
    color: "Orange",
    tail: "Daggertail",
    bonded_rider: "Brennan Sorrengail",
    status: "Alive",
    bio: [
      "It is believed that Marbh and Brennan died in the Battle of Aretia. Brennan explains that after the Battle of Aretia he woke up on a cliffside not far from Riorson House. Marbh was wounded but still alive. Other dragons in Aretia helped hide Brennan and Marbh in a network of caves within the valley.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872473/marbh_juzhln.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 14,
    name: "Chradh",
    age: 36,
    location: "Basgiath / Aretia",
    color: "Brown",
    tail: "Scorpiontail",
    bonded_rider: "Garrick Tavis",
    status: "Alive",
    bio: [
      "Chradh  is a brown scorpiontail dragon who is bonded to Garrick Tavis. Chradh has the ability to sense runes and is remarkably sensitive to them. On October 1st, 631 AU, Chradh bonded Garrick. Professor Kaori's record did not reveal that Chradh had previously bonded Garrick's direct descendant; this gave Garrick two signets which they have kept secret from Navarrian leadership.",
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1746872471/chradh_jferzr.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
];

module.exports = dragons;