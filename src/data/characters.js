const characters = [
  {
    id: 1,
    name: "Violet Sorrengail",
    age: 20,
    location: "Basgiath / Aretia",
    role: "Cadet → Rebel Leader",
    dragon: ["Tairneanach", "Andarnaurram"],
    occupation: ["Dragon Rider", "Scribe (formerly)", "Rebel"],
    status: "Alive",
    bio: [
      "Violet Sorrengail is the fierce and determined heroine of The Empyrean series, known for her resilience and sharp intellect. Born into a prestigious military family in the war-torn land of Navarre, Violet was initially expected to follow her mother’s path as a Scribe, a non-combat role suited to her fragile physique due to a chronic illness. However, after her father’s death, her mother, General Lilith Sorrengail, forces her to enter the deadly Riders Quadrant at Basgiath War College, where cadets bond with dragons—or die trying.",
      "Despite her physical limitations, Violet’s quick thinking and strategic brilliance help her survive the brutal training. She bonds with Tairn, a powerful and rare black dragon, and his rebellious former rider, Andarna, a feathertail with mysterious abilities. Alongside her childhood friend Dain Aetos and the enigmatic Xaden Riorson, Violet navigates political intrigue, dragon-bonded warfare, and her growing feelings for Xaden, whose secrets could change everything.",
      "As the series progresses, Violet uncovers shocking truths about Navarre’s wars, her family’s legacy, and her own unexpected power. Her journey is one of courage, sacrifice, and defiance, proving that strength comes in many forms.",
    ],
    signet: [
      {
        name: "Lightning Wielding",
        description:
          "Due to her bond with Tairneanach, Violet developed the signet of being able to wield lightning. She was one of the last of the first-years to start channelling power through her dragon and to manifest a signet. Her signet manifested during a War Games battle when she used it to kill Jack in a fit of rage. Her signet reacts with strong emotions and therefore is still learning to control and direct this power.",
      },
      {
        name: "Dream Walking",
        description:
          "Her bond with Andarna has given her the signet of dream walking, which makes her able to visit somebody’s dreams. It is a form of inntinnsic, and very dangerous because people cannot shield in their sleep. Therefore she has unlimited access to whoever’s dream she ends up in. So far, she has been in the dreams of Xaden and Maren.",
      },
    ],
    quotes: [
      {
        quote: "I will not die today.",
        book: "Fourth Wing",
      },
      {
        quote:
          "I am the sky and the power of every storm that has ever been. I am infinite.",
        book: "Fourth Wing",
      },
      {
        quote: "I've been defenseless, and now I'm a rider. Riders fight.",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879343/violet_yhbf5f.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Xaden Riorson",
        relationship: "Love interest",
      },
      {
        character: "Mira Sorrengail",
        relationship: "Sister",
      },
      {
        character: "Brennan Sorrengail",
        relationship: "Brother",
      },
      {
        character: "Lilith Sorrengail",
        relationship: "Mother",
      },
    ],
  },
  {
    id: 2,
    name: "Xaden Riorson",
    age: 23,
    location: "Aretia",
    role: "Wingleader → Rebel Leader",
    dragon: ["Sgaeyl"],
    occupation: ["Dragon Rider", "Revolutionary"],
    status: "Alive",
    bio: [
      "Xaden Riorson is a brooding, formidable figure in The Empyrean series, known for his lethal skill, sharp intellect, and complex loyalties. As the son of the executed revolutionary Fen Riorson, Xaden carries the weight of his father’s rebellion against Navarre’s oppressive regime. Forced into the Riders Quadrant at Basgiath War College as part of a fragile peace agreement, he and the other children of rebels are marked by rebellion relics—tattoos that track their every move.",
      "Despite his dangerous reputation, Xaden quickly proves himself as one of the most powerful riders, bonded to Sgaeyl, a fierce and ancient blue dragon. His commanding presence and strategic mind make him a natural leader, but his secrets run deep. When Violet Sorrengail—the daughter of his father’s greatest enemy—enters the quadrant, their fates intertwine in ways neither expects. Though their relationship begins with distrust, it evolves into a passionate, high-stakes romance fraught with danger and betrayal.",
      "Xaden harbors forbidden knowledge about Navarre’s true enemies, forcing him to walk a razor’s edge between loyalty and survival. As the series unfolds, his past, his bond with Violet, and his hidden agenda collide, revealing a man torn between love, duty, and vengeance. A master of shadows—both literally and figuratively—Xaden Riorson is as unpredictable as he is irresistible.",
    ],
    signet: [
      {
        name: "Shadow Summoning",
        description:
          "Due to his bond with Sgaeyl, Xaden developed the signet of being able to summon and wield shadows. He often uses his shadows to conceal himself, or solidifies them to use against opponents by choking or hold them in place.",
      },
      {
        name: "Intention Reading (Inntinnsic)",
        description:
          "Because Xaden's grandfather used to be Sgaeyl's rider, Xaden had a greater chance of manifesting two signets. His particular form of inntinnsic ability allows him to see other people's true intentions by reading their mind.",
      },
    ],
    quotes: [
      {
        quote:
          "There's nowhere in existence you could go that I wouldn't find you, Violence.",
        book: "Fourth Wing",
      },
      {
        quote:
          "The best leaders are the ones who never want the job. This is your mission because Andarna chose you. Tairn chose you.",
        book: "Onyx Storm",
      },
      {
        quote:
          "Hope is a fickle, dangerous thing. It steals your focus and aims it toward the possibilities instead of keeping it where it belongs—on the probabilities.",
        book: "Fourth Wing",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879342/xaden_kmncfl.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Violet Sorrengail",
        relationship: "Love interest",
      },
      {
        character: "Fen Riorson",
        relationship: "Father (deceased)",
      },
      {
        character: "Bodhi Durran",
        relationship: "Cousin",
      },
      {
        character: "Liam Mairi",
        relationship: "Best friend",
      },
    ],
  },
  {
    id: 3,
    name: "Bodhi Durran",
    age: 24,
    location: "Aretia",
    role: "Rebel",
    dragon: ["Cuir"],
    occupation: ["Dragon Rider"],
    status: "Alive",
    bio: "Bodhi Durran is a dragon rider and the cousin of Xaden Riorson. He was one of the one hundred and seven underage children of prominent leaders of the Tyrrish Rebellion at the time of the Apostasy, and bears a rebellion relic as a consequence of this. He has an active role in the rebellion alongside Xaden, Garrick Tavis, and Imogen Cardulo.",
    signet: [
      {
        name: "Countering Signets",
        description:
          "He's able to reduce or eliminate someone's ability to use their signet, though it's unclear yet if he could also increase someones signet and cause them to burn out.",
      },
    ],
    quotes: [
      {
        quote: "My signet is always the balance.",
        book: "Onyx Storm",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879341/bodhi_rlyrdm.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Xaden Riorson",
        relationship: "Cousin",
      },
      {
        character: "Fen Riorson",
        relationship: "Uncle (deceased)",
      },
    ],
  },
  {
    id: 4,
    name: "Liam Mairi",
    age: 22,
    location: "Aretia ",
    role: "Rebel Cadet",
    dragon: ["Deigh"],
    occupation: ["Dragon Rider"],
    status: "Deceased",
    bio: "Xaden's best friend and Violet's ally. Bonded to Deigh. Killed by Jack Barlowe in *Fourth Wing*.",
    signet: [
      {
        name: "Farsight",
        description:
          "Farsight, allows him to see very far in the distance and his pupils dilate when he uses his signet. It also allows him to see through things that others can't, like fog. This is demonstrated when he uses his Farsight signet to see the Venin in the fog near the end of Fourth Wing.",
      },
      {
        name: "Ice Wielding",
        description:
          "Liam has a second signet that was hidden from everyone, due to the fact that he was a family descendant of a previous rider of his dragon. However, he uses his ice wielding in the Battle of Resson. This was confirmed by Xaden to Violet and that some of the dragons intentionally bonded marked ones who were family descendants of previous riders to have more power.",
      },
    ],
    quotes: [
      {
        quote: "It's been. My honor.",
        book: "Fourth Wing",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879341/liam_x8tfqy.jpg",
    appearances: ["Fourth Wing"],
    relationships: [
      {
        character: "Sloane Mairi",
        relationship: "Sister",
      },
      {
        character: "Xaden Riorson",
        relationship: "Best friend",
      },
    ],
  },
  {
    id: 5,
    name: "Mira Sorrengail",
    age: 26,
    location: "Navarre's Front Lines",
    role: "Lieutenant",
    dragon: ["Teine"],
    occupation: ["Dragon Rider", "Officer"],
    status: "Alive",
    bio: "Violet's badass older sister. Bonded to Teine. Fiercely protective but often away on missions.",
    signet: [
      {
        name: "Ward Extension",
        description:
          "The ability to extend natural, existing, wards of Navarre to protect herself and fellow riders. She was able to create wards anomalously outside of the natural wards, in Cordyn during a fight against Venin alongside her siblings.",
      },
    ],
    quotes: [
      {
        quote:
          "Decide, Violet. Are you going to die a scribe? Or live as a rider?",
        book: "Fourth Wing",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879342/mira_brennan_coridv.jpg",
    appearances: ["Fourth Wing", "Iron Flame"],
    relationships: [
      {
        character: "Violet Sorrengail",
        relationship: "Sister",
      },
    ],
  },
  {
    id: 6,
    name: "Ridoc Gamlyn",
    age: 22,
    location: "Aretia",
    role: "Rebel Cadet",
    dragon: ["Aotrom"],
    occupation: ["Dragon Rider"],
    status: "Alive",
    bio: "A humorous cadet with a water signet. Bonded to Aotrom. Provides comic relief but is a skilled rider.",
    signet: [
      {
        name: "Ice Wielding",
        description:
          "He's capable of freezing water and wielding ice. He is one of the few ice wielders who can pull water out of the air and create walls of ice and can freeze water inside of things. He demonstrates this by freezing an orange inside the peel.",
      },
    ],
    quotes: [
      {
        quote: "I kept the inside thoughts inside.",
        book: "Onyx Storm",
      },
      {
        quote:
          "Oh, good. I was wondering when it was going to start getting dangerous around here again.",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879342/ridoc_jfrxgi.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 7,
    name: "Sawyer Henrick",
    age: 23,
    location: "Aretia",
    role: "Rebel Cadet",
    dragon: ["Sliseag"],
    occupation: ["Dragon Rider"],
    status: "Alive",
    bio: "Quiet but deadly. Bonded to Sliseag. Loses a leg in *Iron Flame* but continues fighting.",
    signet: [
      {
        name: "Metallurgist",
        description:
          "He's capable of manipulating any metal, making this a great signet for close combat due to the advantage of bending and warping blades. It also aids helps Sawyer craft a prothetic and regain his confidences after the events of Iron Flame.",
      },
    ],
    quotes: [
      {
        quote:
          "You're free to make your own choices, but you're not free from the consequences of that choice",
        book: "Onyx Storm",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879343/sawyer_mfp3jv.jpg",
    appearances: ["Fourth Wing", "Iron Flame"],
  },
  {
    id: 8,
    name: "Rhiannon Matthias",
    age: 21,
    location: "Basgiath",
    role: "Cadet",
    dragon: ["Feirge"],
    occupation: ["Dragon Rider", "Squad Leader"],
    status: "Alive",
    bio: "Violet's closest friend at Basgiath. Bonds with Feirge and joins the rebellion.",
    signet: [
      {
        name: "Object Summoning",
        description:
          "Rhiannon can teleport objects to herself. As of Iron Flame, she can retrieve items as big as a person[7] and can even summon objects through walls.",
      },
    ],
    quotes: [
      {
        quote: "We are the Iron Squad, and we’ll act like it",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879341/rhi_wovuy8.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 9,
    name: "Dain Aetos",
    age: 21,
    location: "Basgiath",
    role: "Squad Leader",
    dragon: ["Cath"],
    occupation: ["Dragon Rider", "Loyalist"],
    status: "Alive",
    bio: "Violet's childhood friend who prioritizes rules over rebellion. Uses his memory-reading signet on her.",
    signet: [
      {
        name: "Retrocognition",
        description:
          "The ability to read and feel someone's memories using touch, he can search someone's memories and narrow down his search by focusing on certain words. Due to the fact that it's limited to touch he's not considered a security risk, unlike inntinnsics. Due to the classified nature of his signet Dain expects the military to use him for intelligence. Though only a few leadership know about his ability, Dain confides in Violet when she asks about it. Vice Commandant Varrish mentors Dain to help him develop his ability. According to Dain he can channel a pretty significant about of magic through his dragon Cath, though at the beginning of Fourth Wing he admits he's not adept at it yet.",
      },
    ],
    quotes: [
      {
        quote:
          "The Riders Quadrant cuts away the bullshit and the niceties, revealing whoever you are at your core",
        book: "Fourth Wing",
      },
      {
        quote:
          "If you want to wear rider black, then you earn it! You earn it every single day!",
        book: "Fourth Wing",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879341/dain_va1gvj.jpg",
    relationships: [
      {
        character: "Colonel Aetos",
        relationship: "Father",
      },
    ],
  },
  {
    id: 10,
    name: "Brennan Sorrengail",
    age: 28,
    location: "Aretia",
    role: "Healer / Rebel",
    dragon: ["Marbh"],
    occupation: ["Dragon Rider", "Medic"],
    status: "Alive",
    bio: "Violet's older brother, presumed dead for years. Survived and joined the rebellion. Has a mending signet.",
    signet: [
      {
        name: "Mending",
        description:
          "The power to fix, restore, or return anything to its original state, from ripped cloth to pulverized bridges, including broken human bones. The limit to his signet is mending magic, which he can't do, and mending items that have been torn off (i.e. one of your fingers gets cut off), because it is impossible. He would have become the greatest known mender had he been able to continue to serve Navarre as a rider.",
      },
    ],
    quotes: [
      {
        quote:
          "I mean this with every fiber of my body. We deny your offer of peace and happily accept war, since it sounds like you won't survive another two weeks to fight it.",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879342/mira_brennan_coridv.jpg",
    appearances: ["Fourth WIng", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Violet Sorrengail",
        relationship: "Sister",
      },
      {
        character: "Mira Sorrengail",
        relationship: "Sister",
      },
      {
        character: "Naolin",
        relationship: "Former lover (implied)",
      },
    ],
  },
  {
    id: 11,
    name: "Jesinia Neilwart",
    age: 20,
    location: "Basgiath",
    role: "Scribe",
    occupation: ["Scribe", "Translator"],
    status: "Alive",
    bio: "Violet's friend from the Scribe Quadrant. Helps translate ancient texts critical to the rebellion.",
    signet: [],
    quotes: [
      {
        quote:
          "The tricky thing to capture the truth and not just an interpretation. Stories can change depending on who tells them.",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879341/jesinia_uhfrbw.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Violet Sorrengail",
        relationship: "Childhood friend",
      },
      {
        character: "Sawyer Henrick",
        relationship: "Love interest",
      },
    ],
  },
  {
    id: 12,
    name: "Jack Barlowe",
    age: 24,
    location: "Basgiath",
    role: "Cadet → Venin",
    dragon: ["Baide"],
    occupation: ["Venin"],
    status: "Alive",
    bio: "Sadistic cadet who turns Venin. Kills Liam and becomes a major antagonist.",
    signet: [
      {
        name: "Veninism",
        description:
          "The ability to use magic directly from the source rather than his dragon. The ability to force power into someone's body, causing them immense pain. It was originally thought to be his signet however Rebecca Yarros confirmed in an interview that it is in fact a venin ability.",
      },
    ],
    quotes: [
      {
        quote: "Do you understand how much power is beneath your feet?",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879342/jackbarlowe_shyn6c.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 13,
    name: "Imogen Cardulo",
    age: 22,
    location: "Aretia",
    role: "Rebel",
    dragon: ["Glane"],
    occupation: ["Dragon Rider"],
    status: "Alive",
    bio: "Imogen is one of the children of leaders of the rebellion led by Fen Riorson. She was around the age of 16 when she was marked with the rebellion relic and forced to watch the execution of her mother and older sister, both of whom took active roles in the Tyrrish Rebellion.",
    signet: [
      {
        name: "Veninism",
        description:
          "The ability to use magic directly from the source rather than his dragon. The ability to force power into someone's body, causing them immense pain. It was originally thought to be his signet however Rebecca Yarros confirmed in an interview that it is in fact a venin ability.",
      },
    ],
    quotes: [
      {
        quote: "Violet knew how to kill just fine on a scribe’s education",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879342/imogen_plt5iy.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Xaden Riorson",
        relationship: "Childhood friend",
      },
      {
        character: "Garrick Tavis",
        relationship: "Childhood friend",
      },
    ],
  },
  {
    id: 14,
    name: "Aaric Graycastle (Cam Tauri)",
    age: 22,
    location: "Basgiath",
    role: "Cadet",
    dragon: ["Molvic"],
    occupation: ["First year Cadet", "Prince of Navarre (secret)"],
    status: "Alive",
    bio: "Prince Camlaen Aaric Tauri, better known by his pseudonym Aaric Graycastle, King Tauri's third son and a first-year rider at Basgiath War College. Cam lies to his father, who believes that his son is on a tour across the whole kingdom to celebrate his twentieth birthday. Instead, Cam joins Basgiath, where he sees Violet Sorrengail, who instantly recognizes him as they were childhood friends.",
    signet: [
      {
        name: "Precog (true precognition).",
        description:
          "Aaric Greycastle's signet in the Onyx Storm series is precognition, the ability to see into the future. This signet allows him to glimpse potential future outcomes and paths, though it may not provide a complete or fully unbiased picture.",
      },
    ],
    quotes: [
      {
        quote: "I'll dismantle the family business before I rejoin it.",
        book: "Onyx Storm",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743929221/aaric_tkhtu6.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "King Tauri",
        relationship: "Father",
      },
    ],
  },
  {
    id: 15,
    name: "Sloane Mairi",
    age: 19,
    location: "Aretia",
    role: "Rebel",
    dragon: ["Thoirt"],
    occupation: ["First year Cadet"],
    status: "Alive",
    bio: "Sloane Mairi is the daughter of Isaac Mairi, a former Lord in Tyrrendor, and Colonel Mairi. After her mother, Colonel Mairi, was executed for his involvement in the rebellion, and her father was executed at their family home, Sloane was separated from her brother Liam Mairi and fostered by a different family.",
    signet: [
      {
        name: "Siphon",
        description:
          "The ability to absorb power from other sources (including dragons and other riders) and imbue it into something, or someone, else.",
      },
    ],
    quotes: [
      {
        quote:
          "You're Violet Sorrengail. I know what really happened. You got my brother killed. He died for you",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879342/sloane_u2tinr.jpg",
    appearances: ["Iron Flame", "Onyx Storm"],
    relationships: [
      {
        character: "Liam Mairi",
        relationship: "Brother",
      },
    ],
  },
  {
    id: 16,
    name: "Catriona Cordella",
    age: 22,
    location: "Basgiath",
    role: "Cadet",
    gryphon: "Kiralair",
    occupation: ["Gryphon flier"],
    status: "Alive",
    bio: "Catriona Cordella is a gryphon flier, the niece of King Tecarus, and the younger sister of Syrena Cordella . She was betrothed to Xaden Riorson for 9 months. She is currently second in line to the Poromish throne. She is bonded to the gryphon Kiralair.",
    signet: [
      {
        name: "Heightened Emotions",
        description:
          "Kiralair has gifted Catriona the power of heightening the emotions of people around her. She is not able to create, warp or sway emotions within a target; she can only amplify what a victim is already feeling. First seen in action as she makes Violet jealous and insecure for her behavior and remarks toward Xaden. She is noted to be exceptionally powerful.",
      },
    ],
    quotes: [
      {
        quote: "I'm going to war with you for a crown.",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743879341/cat_bzedu1.jpg",
    appearances: ["Fourth Wing", "Iron Flame", "Onyx Storm"],
  },
  {
    id: 17,
    name: "General Lilith Sorrengail",
    age: 50,
    location: "Basgiath",
    role: "General of Navarre",
    dragon: ["Aimsir"],
    occupation: ["Military Leader"],
    status: "Alive",
    bio: "General Lilith Sorrengail, Commander of Basgiath War College. She was married to Asher Sorrengail (né Daxton), who passed away prior to the events of Fourth Wing. She is the mother of Violet Sorrengail and her two older siblings, Brennan and Mira Sorrengail. While her husband was alive, she was softer and kinder around her family, but after his death she became colder and more distant. She is unyielding with her decisions. She's famous for her lack of mercy.[2] Despite her cold distant exterior, Lilith deeply loved her children, and proud of who they are, and willing to make sure they are safe.",
    signet: [
      {
        name: "Storm Wielding",
        description:
          "Lilith has the ability to manipulate storms in extent, however, it takes a lot of time to summon storms and it is mostly useful for area of effect against gryphon and dragon riders",
      },
    ],
    quotes: [
      {
        quote:
          "Most generals dream of dying in service to their kingdom. But you know me better than that, my love. When I fall it will be for one reason only: to protect our children.",
        book: "Iron Flame",
      },
    ],
    image_url:
      "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931666/lilith_pufxtm.webp",
    appearances: ["Fourth Wing", "Iron Flame"],
    relationships: [
      {
        character: "Violet Sorrengail",
        relationship: "Daughter",
      },
      {
        character: "Mira Sorrengail",
        relationship: "Daughter",
      },
      {
        character: "Brennan Sorrengail",
        relationship: "Son",
      },
    ]
  },
]
//   {
//     id: 10,
//     name: "Commandant Panchek",
//     age: 50,
//     location: "Basgiath",
//     role: "Commandant",
//     dragon: "Unknown",
//     occupation: ["Military Officer"],
//     status: "Alive",
//     bio: "Oversees the Rider's Quadrant. Opportunistic and politically savvy.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931666/panchek_ad112z.jpg",
//   },
//   {
//     id: 11,
//     name: "Fen Riorson",
//     age: "Deceased",
//     location: "Formerly Aretia",
//     role: "Revolutionary Leader",
//     dragon: "Unknown",
//     occupation: ["Dragon Rider"],
//     status: "Deceased",
//     bio: "Xaden's father, executed for leading a rebellion against Navarre.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931666/fenriorson_domhil.jpg",
//   },
//   {
//     id: 13,
//     name: "Professor Kaori",
//     age: 40,
//     location: "Basgiath",
//     role: "Professor",
//     occupation: ["Scribe"],
//     status: "Alive",
//     bio: "Teaches scribe history. Supports Violet's academic pursuits.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931665/kaori_ytgxwv.webp",
//   },
//   {
//     id: 14,
//     name: "Viscount Tecarus",
//     age: 60,
//     location: "Poromiel",
//     role: "Noble",
//     status: "Alive",
//     bio: "Poromish leader who negotiates with Violet and Xaden in *Iron Flame*.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931665/tecarus_jjhcaz.jpg",
//   },
//   {
//     id: 17,
//     name: "Burton Varrish",
//     age: 50,
//     location: "Basgiath",
//     role: "Vice Commandant",
//     dragon: "Unknown",
//     occupation: ["Navarre Officer"],
//     status: "Deceased",
//     bio: "Sadistic antagonist in *Iron Flame*. Tortures Violet under the guise of training. Killed by Xaden.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931670/varrish_xlxrig.jpg",
//     appearances: ["Iron Flame"],
//   },
//   {
//     id: 20,
//     name: "General Augustine Melgren",
//     age: 60,
//     location: "Navarre High Command",
//     role: "Supreme General",
//     dragon: "Unnamed (powerful)",
//     occupation: ["Military Strategist"],
//     status: "Alive",
//     bio: "The highest-ranking general in Navarre. Wields a foresight signet (with limitations). Opposes the rebellion.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931669/melgren_odl4g3.jpg",
//     appearances: ["Iron Flame"],
//   },
//   {
//     id: 22,
//     name: "King Tauri",
//     age: 60,
//     location: "Navarre Capital",
//     role: "Monarch",
//     dragon: "None",
//     occupation: ["King of Navarre"],
//     status: "Alive",
//     bio: "The ruler of Navarre. Father of Aaric (Cam), Halden, and Alic. Keeps the truth about venin a secret.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931668/kingtauri_l7il2e.jpg",
//     relationships: [
//       {
//         character: "Aaric Graycastle",
//         relationship: "Son",
//       },
//     ],
//   },
//   {
//     id: 25,
//     name: "Professor Devera",
//     age: 40,
//     location: "Basgiath",
//     role: "Combat Instructor",
//     dragon: "None",
//     occupation: ["Rider Quadrant Professor"],
//     status: "Alive",
//     bio: "Teaches hand-to-hand combat. Fair but no-nonsense. Respects Violet's adaptability.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931668/devera_fakwao.webp",
//     appearances: ["Fourth Wing"],
//   },
//   {
//     id: 26,
//     name: "Professor Emetterio",
//     age: 50,
//     location: "Basgiath",
//     role: "Tactics Instructor",
//     dragon: "None",
//     occupation: ["Rider Quadrant Professor"],
//     status: "Alive",
//     bio: "Teaches battle strategy. Known for his unorthodox methods.",
//     image_url:
//       "https://res.cloudinary.com/dxkccna0g/image/upload/v1743931667/emetterio_lgn4al.jpg",
//     appearances: ["Fourth Wing"],
//   },
// ];

module.exports = characters;