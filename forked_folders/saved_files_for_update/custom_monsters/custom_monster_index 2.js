// Custom Monster Index for Encounter Calculator and Combat Tracker
// Contains AC, HP, initiative, CR, type, source, and HTML links for custom monsters
// Format matches monster_combat_stats.js for compatibility/

const customMonsterCombatStats = [
  {
    "name": "Minion",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "Humanoid",
    "source": "Forge of Foes",
    "htmlLink": "./custom/index.html?file=minion.js"
  },
  {
    "name": "Soldier",
    "ac": 12,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "Humanoid",
    "source": "Forge of Foes",
    "htmlLink": "./custom/index.html?file=soldier.js"
  },
  {
    "name": "Brute",
    "ac": 13,
    "hp": 45,
    "init": 1,
    "cr": 2.0,
    "type": "Humanoid",
    "source": "Forge of Foes",
    "htmlLink": "./custom/index.html?file=brute.js"
  },
  {
    "name": "Specialist",
    "ac": 14,
    "hp": 84,
    "init": 4,
    "cr": 4.0,
    "type": "Humanoid",
    "source": "Forge of Foes",
    "htmlLink": "./custom/index.html?file=specialist.js"
  },
  {
    "name": "Myrmidon",
    "ac": 15,
    "hp": 130,
    "init": 2,
    "cr": 7.0,
    "type": "Humanoid",
    "source": "Forge of Foes",
    "htmlLink": "./custom/index.html?file=myrmidon.js"
  },
  {
    "name": "Sentinel",
    "ac": 17,
    "hp": 165,
    "init": 3,
    "cr": 11.0,
    "type": "Humanoid",
    "source": "Forge of Foes",
    "htmlLink": "./custom/index.html?file=sentinel.js"
  },
  {
    "name": "Champion",
    "ac": 19,
    "hp": 212,
    "init": 1,
    "cr": 15.0,
    "type": "Humanoid",
    "source": "Forge of Foes",
    "htmlLink": "./custom/index.html?file=champion.js"
  },
  {
    "name": "The Nameless King",
    "ac": 24,
    "hp": 561,
    "init": 12,
    "cr": 26,
    "type": "Undead",
    "source": "City of Arches",
    "htmlLink": "./custom/index.html?file=nameless_king.js"
  },
  {
    "name": "Ibraxus of Choul",
    "ac": 24,
    "hp": 666,
    "init": 12,
    "cr": 30,
    "type": "Fiend",
    "source": "City of Arches",
    "htmlLink": "./custom/index.html?file=ibraxus.js"
  },
  {
    "name": "Brother Cavel",
    "ac": 16,
    "hp": 195,
    "init": 14,
    "cr": 9,
    "type": "Humanoid",
    "source": "City of Arches",
    "htmlLink": "./custom/index.html?file=ibraxus.js"
  },
  {
    "name": "Aerisi Kalinoth",
    "ac": 13,
    "hp": 66,
    "init": 3,
    "cr": 7,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/aerisi-kalinoth-pota.js"
  },
  {
    "name": "Aquatic Ghoul",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/aquatic-ghoul-pota.js"
  },
  {
    "name": "Bastian Thermandar",
    "ac": 12,
    "hp": 78,
    "init": 2,
    "cr": 8,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/bastian-thermandar-pota.js"
  },
  {
    "name": "Black Earth Guard",
    "ac": 18,
    "hp": 39,
    "init": 0,
    "cr": 2,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/black-earth-guard-pota.js"
  },
  {
    "name": "Black Earth Priest",
    "ac": 17,
    "hp": 45,
    "init": 0,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/black-earth-priest-pota.js"
  },
  {
    "name": "Braelen Hatherhand",
    "ac": 10,
    "hp": 2,
    "init": 0,
    "cr": 0,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/braelen-hatherhand-pota.js"
  },
  {
    "name": "Bronzefume",
    "ac": 20,
    "hp": 220,
    "init": 0,
    "cr": 13,
    "type": "Argantuan dragon",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/bronzefume-pota.js"
  },
  {
    "name": "Burrowshark",
    "ac": 18,
    "hp": 82,
    "init": 1,
    "cr":4,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/burrowshark-pota.js"
  },
  {
    "name": "Cavil Zaltobar",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/cavil-zaltobar-pota.js"
  },
  {
    "name": "Crushing Wave Priest",
    "ac": 13,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/crushing-wave-priest-pota.js"
  },
  {
    "name": "Crushing Wave Reaver",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/crushing-wave-reaver-pota.js"
  },
  {
    "name": "Darathra Shendrel",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/darathra-shendrel-pota.js"
  },
  {
    "name": "Dark Tide Knight",
    "ac": 13,
    "hp": 58,
    "init": 3,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/dark-tide-knight-pota.js"
  },
  {
    "name": "Deseyna Majarra",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/deseyna-majarra-pota.js"
  },
  {
    "name": "Drannin Splithelm",
    "ac": 18,
    "hp": 93,
    "init": 0,
    "cr": 7,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/drannin-splithelm-pota.js"
  },
  {
    "name": "Elizar Dryflagon",
    "ac": 14,
    "hp": 71,
    "init": 2,
    "cr": 5,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/elizar-dryflagon-pota.js"
  },
  {
    "name": "Emberhorn Minotaur",
    "ac": 14,
    "hp": 76,
    "init": 0,
    "cr": 3,
    "type": "Large Monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/emberhorn-minotaur-pota.js"
  },
  {
    "name": "Eternal Flame Guardian",
    "ac": 17,
    "hp": 45,
    "init": 1,
    "cr": 2,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/eternal-flame-guardian-pota.js"
  },
  {
    "name": "Eternal Flame Priest",
    "ac": 12,
    "hp": 52,
    "init": 2,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/eternal-flame-priest-pota.js"
  },
  {
    "name": "Fathomer",
    "ac": 10,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/fathomer-pota.js"
  },
  {
    "name": "Feathergale Knight",
    "ac": 16,
    "hp": 33,
    "init": 2,
    "cr": 1,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/feathergale-knight-pota.js"
  },
  {
    "name": "Fennor",
    "ac": 14,
    "hp": 67,
    "init": 1,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/fennor-pota.js"
  },
  {
    "name": "Flamewrath",
    "ac": 12,
    "hp": 105,
    "init": 2,
    "cr": 6,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/flamewrath-pota.js"
  },
  {
    "name": "Gar Shatterkeel",
    "ac": 16,
    "hp": 97,
    "init": 2,
    "cr": 9,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/gar-shatterkeel-pota.js"
  },
  {
    "name": "Ghald",
    "ac": 15,
    "hp": 102,
    "init": 3,
    "cr": 7,
    "type": "Large Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/ghald-pota.js"
  },
  {
    "name": "Grumink the Renegade",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/grumink-the-renegade-pota.js"
  },
  {
    "name": "Hellenrae",
    "ac": 16,
    "hp": 78,
    "init": 4,
    "cr": 5,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/hellenrae-pota.js"
  },
  {
    "name": "Howling Hatred Initiate",
    "ac": 13,
    "hp": 9,
    "init": 2,
    "cr": 0.125,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/howling-hatred-initiate-pota.js"
  },
  {
    "name": "Howling Hatred Priest",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 2,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/howling-hatred-priest-pota.js"
  },
    {
    "name": "Hurricane",
    "ac": 14,
    "hp": 33,
    "init": 3,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/hurricane.js"
  },
  {
    "name": "Imix",
    "ac": 17,
    "hp": 325,
    "init": 7,
    "cr": 19,
    "type": "Huge elemental",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/imix-pota.js"
  },
  {
    "name": "Lyzandra Lyzzie Calderos",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/lyzandra-lyzzie-calderos-pota.js"
  },
  {
    "name": "Maegla Tarnlar",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/maegla-tarnlar-pota.js"
  },
  {
    "name": "Marlos Urnrayle",
    "ac": 15,
    "hp": 136,
    "init": 0,
    "cr": 8,
    "type": "Medium monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/marlos-urnrayle-pota.js"
  },
  {
    "name": "Miraj Vizann",
    "ac": 10,
    "hp": 82,
    "init": 0,
    "cr": 6,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/miraj-vizann-pota.js"
  },
  {
    "name": "Magma Roper",
    "ac": 20,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "Large monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/molten-magma-roper-pota.js"
  },
  {
    "name": "Nurvureem the Dark Lady",
    "ac": 19,
    "hp": 195,
    "init": 2,
    "cr": 14,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/nurvureem-the-dark-lady-pota.js"
  },
  {
    "name": "Ogremoch",
    "ac": 20,
    "hp": 526,
    "init": 0,
    "cr": 20,
    "type": "Gargantuan elemental",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/ogremoch-pota.js"
  },
  {
    "name": "Olhydra",
    "ac": 18,
    "hp": 324,
    "init": 6,
    "cr": 18,
    "type": "Huge elemental",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/olhydra-pota.js"
  },
  {
    "name": "One-eyed Shiver",
    "ac": 12,
    "hp": 49,
    "init": 2,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/one-eyed-shiver-pota.js"
  },
  {
    "name": "Oreioth",
    "ac": 11,
    "hp": 39,
    "init": 1,
    "cr": 2,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/oreioth-pota.js"
  },
  {
    "name": "Padraich",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/padraich-pota.js"
  },
  {
    "name": "Razerblast",
    "ac": 17,
    "hp": 112,
    "init": 0,
    "cr": 5,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/razerblast-pota.js"
  },
  {
    "name": "Renwick",
    "ac": 17,
    "hp": 135,
    "init": 3,
    "cr": 21,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/renwick-pota.js"
  },
  {
    "name": "Rhundorth",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/rhundorth-pota.js"
  },
  {
    "name": "Sacred Stone Monk",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/sacred-stone-monk-pota.js"
  },
  {
    "name": "Shoalar Quanderil",
    "ac": 10,
    "hp": 60,
    "init": 1,
    "cr": 4,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/shoalar-quanderil-pota.js"
  },
  {
    "name": "Skyweaver",
    "ac": 12,
    "hp": 44,
    "init": 2,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/skyweaver-pota.js"
  },
  {
    "name": "Stone Warrior",
    "ac": 17,
    "hp": 102,
    "init": -1,
    "cr": 4,
    "type": "Large construct",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/stone-warrior-pota.js"
  },
  {
    "name": "Stonemelder",
    "ac": 17,
    "hp": 75,
    "init": 0,
    "cr": 4,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/stonemelder-pota.js"
  },
  {
    "name": "Thurl Merosska",
    "ac": 16,
    "hp": 71,
    "init": 2,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/thurl-merosska-pota.js"
  },
  {
    "name": "Tornscale",
    "ac": 15,
    "hp": 36,
    "init": 0,
    "cr": 0.5,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/tornscale-pota.js"
  },
  {
    "name": "Vanifer",
    "ac": 15,
    "hp": 112,
    "init": 3,
    "cr": 9,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/vanifer-pota.js"
  },
  {
    "name": "Wiggan Notettlebee",
    "ac": 11,
    "hp": 36,
    "init": 1,
    "cr": 2,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/wiggan-nettlebee-pota.js"
  },
  {
    "name": "Windharrow",
    "ac": 15,
    "hp": 55,
    "init": 3,
    "cr": 3,
    "type": "Humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/windharrow-pota.js"
  },
  {
    "name": "Yan-c-bin",
    "ac": 22,
    "hp": 283,
    "init": 7,
    "cr": 18,
    "type": "Huge elemental",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/yan-c-bin-pota.js"
  },
  {
    "name": "Young Purple Worm",
    "ac": 18,
    "hp": 184,
    "init": -2,
    "cr": 13,
    "type": "Gargantuan monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/young-purple-worm-pota.js"
  },
  {
    "name": "Zegdar",
    "ac": 16,
    "hp": 117,
    "init": 0,
    "cr": 3,
    "type": "Large monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/zegdar-pota.js"
  },
  {
    "name": "Aarakocra",
    "ac": 12,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/aarakocra.js"
  },
  {
    "name": "Abominable Yeti",
    "ac": 15,
    "hp": 137,
    "init": 0,
    "cr": 9,
    "type": "Huge monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/abominable-yeti.js"
  },
  {
    "name": "Allosaurus",
    "ac": 13,
    "hp": 51,
    "init": 1,
    "cr": 2,
    "type": "Large beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/allosaurus.js"
  },
  {
    "name": "Ankylosaurus",
    "ac": 15,
    "hp": 68,
    "init": 0,
    "cr": 3,
    "type": "Huge beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/ankylosaurus.js"
  },
  {
    "name": "Arcanaloth",
    "ac": 17,
    "hp": 104,
    "init": 1,
    "cr": 12,
    "type": "Medium fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/arcanaloth.js"
  },
  {
    "name": "Banshee",
    "ac": 12,
    "hp": 58,
    "init": 2,
    "cr": 4,
    "type": "Medium undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/banshee.js"
  },
  {
    "name": "Barlgura",
    "ac": 15,
    "hp": 68,
    "init": 2,
    "cr": 5,
    "type": "Large fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/barlgura.js"
  },
  {
    "name": "Beholder Zombie",
    "ac": 15,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "Large undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/beholder-zombie.js"
  },
  {
    "name": "Beholder",
    "ac": 18,
    "hp": 180,
    "init": 2,
    "cr": 13,
    "type": "Large aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/beholder.js"
  },
  {
    "name": "Blue Slaad",
    "ac": 15,
    "hp": 123,
    "init": 2,
    "cr": 7,
    "type": "Large aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/blue-slaad.js"
  },
  {
    "name": "Bone Naga Guardian",
    "ac": 15,
    "hp": 58,
    "init": 3,
    "cr": 4,
    "type": "Lareg undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/bone-naga-guardian.js"
  },
  {
    "name": "Bone Naga Spirit",
    "ac": 15,
    "hp": 58,
    "init": 3,
    "cr": 4,
    "type": "Lareg undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/bone-naga-spirit.js"
  },
  {
    "name": "Bugbear Chief",
    "ac": 17,
    "hp": 65,
    "init": 2,
    "cr": 3,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/bugbear-chief.js"
  },
  {
    "name": "Bullywug",
    "ac": 15,
    "hp": 11,
    "init": 1,
    "cr": 0.25,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/bullywug.js"
  },
  {
    "name": "Cambion",
    "ac": 19,
    "hp": 82,
    "init": 4,
    "cr": 5,
    "type": "Medium fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/cambion.js"
  },
  {
    "name": "Carrion Crawler",
    "ac": 13,
    "hp": 51,
    "init": 1,
    "cr": 2,
    "type": "Large monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/carrion-crawler.js"
  },
  {
    "name": "Cyclops",
    "ac": 14,
    "hp": 138,
    "init": 0,
    "cr": 6,
    "type": "Huge giant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/cyclops.js"
  },
  {
    "name": "Dao Disguises",
    "ac": 18,
    "hp": 187,
    "init": 1,
    "cr": 11,
    "type": "Large elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/dao-disguises.js"
  },
  {
    "name": "Dao Wishes",
    "ac": 18,
    "hp": 187,
    "init": 1,
    "cr": 11,
    "type": "Large elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/dao-wishes.js"
  },
  {
    "name": "Dao",
    "ac": 18,
    "hp": 187,
    "init": 1,
    "cr": 11,
    "type": "Large elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/dao.js"
  },
  {
    "name": "Death Knight",
    "ac": 20,
    "hp": 180,
    "init": 0,
    "cr": 17,
    "type": "Medium undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/death-knight.js"
  },
  {
    "name": "Death Tyrant",
    "ac": 0,
    "hp": 0,
    "init": 0,
    "cr": 0,
    "type": "Medium undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/death-tyrant.js"
  },
  {
    "name": "Demilich",
    "ac": 20,
    "hp": 80,
    "init": 5,
    "cr": 18,
    "type": "Tiny undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/demilich.js"
  },
  {
    "name": "Displacer Beast",
    "ac": 13,
    "hp": 85,
    "init": 2,
    "cr": 3,
    "type": "Large monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/displacer-beast.js"
  },
  {
    "name": "Djinni",
    "ac": 17,
    "hp": 161,
    "init": 2,
    "cr": 11,
    "type": "Large elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/djinni.js"
  },
  {
    "name": "Drow Elite Warrior Magic Equipment",
    "ac": 20,
    "hp": 71,
    "init": 4,
    "cr": 5,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/drow-elite-warrior-magic-equipment.js"
  },
  {
    "name": "Drow Mage",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 7,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/drow-mage.js"
  },
  {
    "name": "Drow Magic Equipment",
    "ac": 16,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/drow-magic-equipment.js"
  },
  {
    "name": "Drow Priestess of Lolth Magic Equipment",
    "ac": 19,
    "hp": 71,
    "init": 2,
    "cr": 8,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/drow-priestess-of-lolth-magic-equipment.js"
  },
  {
    "name": "Drow Priestess of Lolth",
    "ac": 16,
    "hp": 71,
    "init": 2,
    "cr": 8,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/drow-priestess-of-lolth.js"
  },
  {
    "name": "Duodrone",
    "ac": 15,
    "hp": 11,
    "init": 1,
    "cr": 0.25,
    "type": "Medium construct",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/duodrone.js"
  },
  {
    "name": "Efreeti",
    "ac": 17,
    "hp": 200,
    "init": 1,
    "cr": 11,
    "type": "Large elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/efreeti.js"
  },
  {
    "name": "Empyrean",
    "ac": 22,
    "hp": 313,
    "init": 5,
    "cr": 23,
    "type": "Huge celestial",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/empyrean.js"
  },
  {
    "name": "Fareie Dragon Blue",
    "ac": 15,
    "hp": 14,
    "init": 5,
    "cr": 2,
    "type": "Tiny dragon",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/faerie-dragon-blue.js"
  },
  {
    "name": "Faerie Dragon Green",
    "ac": 15,
    "hp": 14,
    "init": 5,
    "cr": 2,
    "type": "Tiny dragon",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/faerie-dragon-green.js"
  },
  {
    "name": "Fareie Dragon Indigo",
    "ac": 15,
    "hp": 14,
    "init": 5,
    "cr": 2,
    "type": "Tiny dragon",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/faerie-dragon-indigo.js"
  },
  {
    "name": "Faerie Dragon Orange",
    "ac": 15,
    "hp": 14,
    "init": 5,
    "cr": 1,
    "type": "Tiny dragon",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/faerie-dragon-orange.js"
  },
  {
    "name": "Faerie Dragon Red",
    "ac": 15,
    "hp": 14,
    "init": 5,
    "cr": 1,
    "type": "Tiny dragon",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/faerie-dragon-red.js"
  },
  {
    "name": "Faerie Dragon Violet",
     "ac": 15,
    "hp": 14,
    "init": 5,
    "cr": 2,
    "type": "Tiny dragon",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/faerie-dragon-violet.js"
  },
  {
    "name": "Faerie Dragon Yellow",
    "ac": 15,
    "hp": 14,
    "init": 5,
    "cr": 1,
    "type": "Tiny dragon",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/faerie-dragon-yellow.js"
  },
  {
    "name": "Firesnake",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "Medium elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/fire-snake.js"
  },
  {
    "name": "Flameskull",
    "ac": 13,
    "hp": 40,
    "init": 3,
    "cr": 4,
    "type": "Tiny undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/flameskull.js"
  },
  {
    "name": "Flumph",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "Small aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/flumph.js"
  },
  {
    "name": "Formorian",
    "ac": 14,
    "hp": 149,
    "init": 0,
    "cr": 8,
    "type": "Huge giant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/fomorian.js"
  },
   {
    "name": "Galeb Duhr",
    "ac": 16,
    "hp": 85,
    "init": 2,
    "cr": 6,
    "type": "Medium elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/galeb-duhr.js"
  },
  {
    "name": "Gas Spore",
    "ac": 5,
    "hp": 1,
    "init": -5,
    "cr": 0.5,
    "type": "Large plant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/gas-spore.js"
  },
  {
    "name": "Githyanki Knight",
    "ac": 18,
    "hp": 91,
    "init": 2,
    "cr": 8,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/githyanki-knight.js"
  },
  {
    "name": "Githyanki Warrior",
    "ac": 17,
    "hp": 49,
    "init": 2,
    "cr": 3,
    "type": "Medium Humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/githyanki-warrior.js"
  },
  {
    "name": "Githzerai monk",
    "ac": 14,
    "hp": 38,
    "init": 2,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/githzerai-monk.js"
  },
  {
    "name": "Githzerai Zerth",
    "ac": 17,
    "hp": 84,
    "init": 4,
    "cr": 6,
    "type": "Medium humoanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/githzerai-zerth.js"
  },
  {
    "name": "Gnoll Fang of Yeenoghu",
    "ac": 14,
    "hp": 65,
    "init": 2,
    "cr": 4,
    "type": "Medium fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/gnoll-fang-of-yeenoghu.js"
  },
  {
    "name": "Gnoll Pack Lord",
    "ac": 15,
    "hp": 49,
    "init": 2,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/gnoll-pack-lord.js"
  },
  {
    "name": "Goblin Boss",
    "ac": 17,
    "hp": 21,
    "init": 2,
    "cr": 1,
    "type": "Small humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/goblin-boss.js"
  },
  {
    "name": "Goristro",
    "ac": 19,
    "hp": 310,
    "init": 0,
    "cr": 17,
    "type": "Huge fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/goristro.js"
  },
  {
    "name": "Gray slaad",
    "ac": 18,
    "hp": 127,
    "init": 3,
    "cr": 9,
    "type": "Medium aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/gray-slaad.js"
  },
  {
    "name": "Grell",
    "ac": 12,
    "hp": 55,
    "init": 2,
    "cr": 3,
    "type": "Medium aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/grell.js"
  },
  {
    "name": "Grick Alpha",
    "ac": 18,
    "hp": 75,
    "init": 3,
    "cr": 7,
    "type": "Large monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/grick-alpha.js"
  },
  {
    "name": "Half-Ogre Ogrillon",
    "ac": 12,
    "hp": 30,
    "init": 0,
    "cr": 1,
    "type": "Large giant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/half-ogre-ogrillon.js"
  },
  {
    "name": "Helmed Horror",
    "ac": 20,
    "hp": 60,
    "init": 1,
    "cr": 4,
    "type": "Medium Construct",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/helmed-horror.js"
  },
  {
    "name": "Hobgoblin Captain",
    "ac": 17,
    "hp": 39,
    "init": 2,
    "cr": 3,
    "type": "Medium Humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/hobgoblin-captain.js"
  },
  {
    "name": "Hobgoblin Warlord",
    "ac": 20,
    "hp": 97,
    "init": 2,
    "cr": 6,
    "type": "Medium Humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/hobgoblin-warlord.js"
  },
  {
    "name": "Hook Horror",
    "ac": 15,
    "hp": 75,
    "init": 0,
    "cr": 3,
    "type": "Large monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/hook-horror.js"
  },
  {
    "name": "Intellect Devourer",
    "ac": 12,
    "hp": 21,
    "init": 2,
    "cr": 2,
    "type": "Tiny aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/intellect-devourer.js"
  },
   {
    "name": "Jackalwere",
    "ac": 12,
    "hp": 18,
    "init": 2,
    "cr": 0.5,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/jackalwere.js"
  },
  {
    "name": "Kenku",
    "ac": 13,
    "hp": 13,
    "init": 3,
    "cr": 3,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/kenku.js"
  },
  {
    "name": "Kuo-Toa Archpriest",
    "ac": 13,
    "hp": 97,
    "init": 2,
    "cr": 6,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/kuo-toa-archpriest.js"
  },
  {
    "name": "Kuo-Toa Whip",
    "ac": 11,
    "hp": 65,
    "init": 0,
    "cr": 1,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/kuo-toa-whip.js"
  },
  {
    "name": "lizard-king",
    "ac": 15,
    "hp": 78,
    "init": 1,
    "cr": 4,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/lizard-king.js"
  },
  {
    "name": "Lizrd Queen",
    "ac": 15,
    "hp": 78,
    "init": 1,
    "cr": 4,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/lizard-queen.js"
  },
  {
    "name": "Lizardfolk Shaman",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/lizardfolk-shaman.js"
  },
  {
    "name": "Lizardfolk",
    "ac": 15,
    "hp": 22,
    "init": 0,
    "cr": 0.5,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/lizardfolk.js"
  },
  {
    "name": "Manes",
    "ac": 9,
    "hp": 9,
    "init": -1,
    "cr": 0.125,
    "type": "Small fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/manes.js"
  },
  {
    "name": "Marid",
    "ac": 17,
    "hp": 229,
    "init": 1,
    "cr": 11,
    "type": "Large elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/marid.js"
  },
  {
    "name": "Mezzoloth",
    "ac": 18,
    "hp": 75,
    "init": 0,
    "cr": 5,
    "type": "Medium friend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/mezzoloth.js"
  },
  {
    "name": "Monodrone",
    "ac": 15,
    "hp": 5,
    "init": 1,
    "cr": 0.125,
    "type": "Medium construct",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/monodrone.js"
  },
  {
    "name": "Mud Mephit",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 0.25,
    "type": "Small elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/mud-mephit.js"
  },
  {
    "name": "Mycondid Adult",
    "ac": 12,
    "hp": 22,
    "init": 0,
    "cr": 0.5,
    "type": "Medium plant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/myconid-adult.js"
  },
  {
    "name": "Myconid sovereign",
    "ac": 13,
    "hp": 60,
    "init": 0,
    "cr": 2,
    "type": "Large plant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/myconid-sovereign.js"
  },
  {
    "name": "Myconid Sprout",
    "ac": 10,
    "hp": 7,
    "init": 0,
    "cr": 0,
    "type": "Small plant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/myconid-sprout.js"
  },
  {
    "name": "Needle Blight",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": .25,
    "type": "Medium plant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/needle-blight.js"
  },
  {
    "name": "Nothic",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 2,
    "type": "Medium aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/nothic.js"
  },
  {
    "name": "Nycaloth",
    "ac": 18,
    "hp": 123,
    "init": 0,
    "cr": 9,
    "type": "Large fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/nycaloth.js"
  },
  {
    "name": "Orc Eye of Gruumsh",
    "ac": 16,
    "hp": 45,
    "init": 1,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/orc-eye-of-gruumsh.js"
  },
  {
    "name": "Orc War Chief",
    "ac": 16,
    "hp": 93,
    "init": 1,
    "cr": 4,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/orc-war-chief.js"
  },
  {
    "name": "Orog",
    "ac": 18,
    "hp": 42,
    "init": 1,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/orog.js"
  },
  {
    "name": "Pentadrone",
    "ac": 16,
    "hp": 32,
    "init": 2,
    "cr": 2,
    "type": "Large construct",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/pentadrone.js"
  },
  {
    "name": "Peryton",
    "ac": 13,
    "hp": 33,
    "init": 1,
    "cr": 2,
    "type": "Medium monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/peryton.js"
  },
  {
    "name": "Piercer",
    "ac": 15,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "Medium monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/piercer.js"
  },
  {
    "name": "Peteranodon",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "Medium beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/pteranodon.js"
  },
  {
    "name": "Quadrone",
    "ac": 16,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "Medium construct",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/quadrone.js"
  },
  {
    "name": "Quaggoth",
    "ac": 13,
    "hp": 45,
    "init": 1,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/quaggoth.js"
  },
  {
    "name": "Red Slaad",
    "ac": 14,
    "hp": 93,
    "init": 1,
    "cr": 5,
    "type": "Large aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/red-slaad.js"
  },
  {
    "name": "Revanant",
    "ac": 13,
    "hp": 136,
    "init": 2,
    "cr": 5,
    "type": "Medium undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/revenant.js"
  },
  {
    "name": "Saughain Baron",
    "ac": 16,
    "hp": 76,
    "init": 2,
    "cr": 5,
    "type": "Large humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/sahuagin-baron.js"
  },
  {
     "name": "Saughain Baron",
    "ac": 12,
    "hp": 33,
    "init": 0,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/sahuagin-priestess.js"
  },
  {
    "name": "Scarecrow",
    "ac": 11,
    "hp": 36,
    "init": 1,
    "cr": 1,
    "type": "Medium construct",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/scarecrow.js"
  },
  {
    "name": "Shadow Demon",
    "ac": 13,
    "hp": 66,
    "init": 3,
    "cr": 4,
    "type": "Medium fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/shadow-demon.js"
  },
  {
    "name": "Smoke Mephit",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 0.25,
    "type": "Small elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/smoke-mephit.js"
  },
  {
    "name": "Spectator",
    "ac": 14,
    "hp": 39,
    "init": 2,
    "cr": 3,
    "type": "Medium aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/spectator.js"
  },
  {
    "name": "Spined Devil",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 2,
    "type": "Small fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/spined-devil.js"
  },
  {
    "name": "Thri-kreen",
    "ac": 15,
    "hp": 33,
    "init": 2,
    "cr": 1,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/thri-kreen.js"
  },
  {
    "name": "Tridrone",
    "ac": 15,
    "hp": 16,
    "init": 1,
    "cr": 0.5,
    "type": "Medium construct",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/tridrone.js"
  },
  {
    "name": "Troglodyte",
    "ac": 11,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/troglodyte.js"
  },
  {
    "name": "Twig Blight",
    "ac": 13,
    "hp": 4,
    "init": 1,
    "cr": 0.125,
    "type": "Small plant",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/twig-blight.js"
  },
  {
    "name": "Ultroloth",
    "ac": 19,
    "hp": 153,
    "init": 3,
    "cr": 13,
    "type": "Medium fiend",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/ultroloth.js"
  },
  {
    "name": "Umber Hulk",
    "ac": 18,
    "hp": 93,
    "init": 1,
    "cr": 5,
    "type": "Large monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/umber-hulk.js"
  },
  {
    "name": "Water Weird",
    "ac": 13,
    "hp": 58,
    "init": 3,
    "cr": 3,
    "type": "Large elemental",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/water-weird.js"
  },
  {
    "name": "Winged Kobold",
    "ac": 13,
    "hp": 7,
    "init": 3,
    "cr": 0.25,
    "type": "Small humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/winged-kobold.js"
  },
  {
    "name": "Yeti",
    "ac": 12,
    "hp": 51,
    "init": 1,
    "cr": 3,
    "type": "Large monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/yeti.js"
  },
  {
    "name": "Young Remorhaz",
    "ac": 14,
    "hp": 93,
    "init": 1,
    "cr": 5,
    "type": "Large monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/young-remorhaz.js"
  },
  {
    "name": "Yuan-ti Abomination",
    "ac": 15,
    "hp": 127,
    "init": 3,
    "cr": 7,
    "type": "Large monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/yuan-ti-abomination.js"
  },
  {
    "name": "Yuan-ti Malison Type 1",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "Medium monstrosity",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/yuan-ti-malison-type-1.js"
  },
  {
    "name": "Yuan-ti Pureblood",
    "ac": 11,
    "hp": 40,
    "init": 1,
    "cr": 1,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/yuan-ti-pureblood.js"
  },
  {
    "name": "Black Bear",
    "ac": 11,
    "hp": 19,
    "init": 0,
    "cr": 0.5,
    "type": "Medium beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/black-bear.js"
  },
  {
    "name": "Mage Familiar",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "Medium humanoid",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/mage-familiar.js"
  },
  {
    "name": "Crawling Claw",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "Tiny undead",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/crawling-claw.js"
  },
  {
    "name": "Blood Hawk",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "Small beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/blood-hawk-xmm.js"
  },
  {
    "name": "Warhorse Ring Mail Barding",
    "ac": 14,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "Large beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/warhorse-ring-mail-barding.js"
  },
  {
    "name": "Warhorse Chain Mail Barding",
    "ac": 16,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "Large beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/warhorse-chain-mail-barding.js"
  },
  {
    "name": "Warhorse Leather Barding",
    "ac": 12,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "Large beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/warhorse-leather-barding.js"
  },
  {
    "name": "Warhorse Plate Barding",
    "ac": 18,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "Large beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/warhorse-plate-barding.js"
  },
  {
    "name": "Warhorse Scale Mail Barding",
    "ac": 15,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "Large beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/warhorse-scale-mail-barding.js"
  },
  {
    "name": "Warhorse Studded Leather Barding",
    "ac": 13,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "Large beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/warhorse-studded-leather-barding.js"
  },
  {
    "name": "Warhorse Splint Barding",
    "ac": 17,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "Large beast",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/warhorse-splint-barding.js"
  },
  {
    "name": "Ammalia Cassalanter",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 5,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/ammalia-cassalanter-wdh.js"
  },
  {
    "name": "Aurinax",
    "ac": 19,
    "hp": 256,
    "init": 2,
    "cr": 17,
    "type": "Huge dragon",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/aurinax-wdh.js"
  },
  {
    "name": "Avi",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/avi-wdh.js"
  },
  {
    "name": "Awakened Rat",
    "ac": 10,
    "hp": 1,
    "init": 0,
    "cr": 0,
    "type": "Tiny beast",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/awakened-rat-wdh.js"
  },
  {
    "name": "Barnibus Blastwind",
    "ac": 10,
    "hp": 25,
    "init": 0,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/barnibus-blastwind-wdh.js"
  },
  {
    "name": "Bepis Honeymaker",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/bepis-honeymaker-wdh.js"
  },
  {
    "name": "Black Viper",
    "ac": 16,
    "hp": 84,
    "init": 4,
    "cr": 5,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/black-viper-wdh.js"
  },
  {
    "name": "Blinded Troll",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 4,
    "type": "Large giant",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/blinded-troll-wdh.js"
  },
  {
    "name": "Noska Ur'gray",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "Mediumm humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/noska-urgray-wdh.js"
  },
  {
    "name": "Obaya Uday",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/obaya-uday-wdh.js"
  },
  {
    "name": "Obliteros",
    "ac": 13,
    "hp": 126,
    "init": 0,
    "cr": 5,
    "type": "Huge beast",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/obliteros-wdh.js"
  },
  {
    "name": "Orond Gralhund",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/orond-gralhund-wdh.js"
  },
  {
    "name": "Osvaldo Cassalanter",
    "ac": 16,
    "hp": 85,
    "init": 2,
    "cr": 8,
    "type": "Medium fiend",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/osvaldo-cassalanter-wdh.js"
  },
  {
    "name": "Ott Steeltoes",
    "ac": 12,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/ott-steeltoes-wdh.js"
  },
  {
    "name": "Panopticus Wizard",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/panopticus-wizard-wdh.js"
  },
  {
    "name": "Remallia Haventree",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 9,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/remallia-haventree-wdh.js"
  },
  {
    "name": "Renaer Neverember",
    "ac": 17,
    "hp": 66,
    "init": 4,
    "cr": 3,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/renaer-neverember-wdh.js"
  },
  {
    "name": "Rishaal the Page-Turner",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/rishaal-the-page-turner-wdh.js"
  },
  {
    "name": "Saeth Cromley",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/saeth-cromley-wdh.js"
  },
  {
    "name": "Samara Strongbones",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/samara-strongbones-wdh.js"
  },
  {
    "name": "Waterdeep Sergeant",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/sergeant-wdh.js"
  },
  {
    "name": "Shard Shunner",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 2,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/shard-shunner-wdh.js"
  },
  {
    "name": "Skeemo Weirdbottle",
    "ac": 12,
    "hp": 72,
    "init": 2,
    "cr": 6,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/skeemo-weirdbottle-wdh.js"
  },
  {
    "name": "Soluun Xibrindas",
    "ac": 18,
    "hp": 84,
    "init": 4,
    "cr": 4,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/soluun-xibrindas-wdh.js"
  },
  {
    "name": "Squiddly",
    "ac": 9,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/squiddly-wdh.js"
  },
  {
    "name": "Swarm of Books",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 0.25,
    "type": "HuMedium construct",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/swarm-of-books-wdh.js"
  },
  {
    "name": "Swarm of Mechanical Spiders",
    "ac": 12,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "Medium construct",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/swarm-of-mechanical-spiders-wdh.js"
  },
  {
    "name": "Sylgar",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "Tiny beast",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/sylgar-wdh.js"
  },
  {
    "name": "Talisolvanar (Tally) Fellbranch",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/talisolvanar-tally-fellbranch-wdh.js"
  },
  {
    "name": "Tashlyn Yafeera",
    "ac": 18,
    "hp": 149,
    "init": 2,
    "cr": 9,
    "type": "Medium Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/tashlyn-yafeera-wdh.js"
  },
  {
    "name": "Terenzio Cassalanter",
    "ac": 9,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/terenzio-cassalanter-wdh.js"
  },
  {
    "name": "Thorvin Twinbeard",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/thorvin-twinbeard-wdh.js"
  },
  {
    "name": "Thrakkus",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/thrakkus-wdh.js"
  },
  {
    "name": "Tissina Khyret",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "Medium Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/tissina-khyret-wdh.js"
  },
  {
    "name": "Urstul Floxin",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/urstul-floxin-wdh.js"
  },
  {
    "name": "Vajra Safahr",
    "ac": 17,
    "hp": 126,
    "init": 2,
    "cr": 13,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/vajra-safahr-wdh.js"
  },
  {
    "name": "Valetta",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/valetta-wdh.js"
  },
  {
    "name": "Victoro Cassalanter",
    "ac": 15,
    "hp": 97,
    "init": 1,
    "cr": 10,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/victoro-cassalanter-wdh.js"
  },
  {
    "name": "Vincent Trench",
    "ac": 16,
    "hp": 110,
    "init": 3,
    "cr": 13,
    "type": "Medium fiend",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/vincent-trench-wdh.js"
  },
  {
    "name": "Walking Statue of Waterdeep",
    "ac": 17,
    "hp": 314,
    "init": -1,
    "cr": 18,
    "type": "Gargantuan construct",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/walking-statue-of-waterdeep-wdh.js"
  },
  {
    "name": "Willifort Crowelle",
    "ac": 14,
    "hp": 52,
    "init": 4,
    "cr": 3,
    "type": "Medium Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/willifort-crowelle-wdh.js"
  },
  {
    "name": "Xanathar",
    "ac": 18,
    "hp": 180,
    "init": 2,
    "cr": 13,
    "type": "Large Aberration",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/xanathar-wdh.js"
  },
  {
    "name": "Yagra Stonefist",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "Medium Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/yagra-stonefist-wdh.js"
  },
  {
    "name": "Yalah Gralhund",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "Medium Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/yalah-gralhund-wdh.js"
  },
  {
    "name": "Yorn",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "Medium Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/yorn-wdh.js"
  },
  {
    "name": "Zhent Martial Arts Adept",
    "ac": 15,
    "hp": 49,
    "init": 3,
    "cr": 3,
    "type": "Small Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/zhent-martial-arts-adept-wdh.js"
  },
  {
    "name": "Ziraj the Hunter",
    "ac": 17,
    "hp": 153,
    "init": 4,
    "cr": 8,
    "type": "Medium Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/ziraj-the-hunter-wdh.js"
  },


    {
    "name": "Elzerina Cassalanter",
    "ac": 9,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "Small Humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/elzerina-cassalanter-wdh.js"
  },
  {
    "name": "Bonnie",
    "ac": 14,
    "hp": 52,
    "init": 4,
    "cr": 4,
    "type": "Medium monstrosity",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/bonnie-wdh.js"
  },
  {
    "name": "Davil Starsong",
    "ac": 15,
    "hp": 82,
    "init": 2,
    "cr": 6,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/davil-starsong-wdh.js"
  },
  {
    "name": "Diatryma",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0.25,
    "type": "Large beast",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/diatryma-wdh.js"
  },
  {
    "name": "Dining Table Mimic",
    "ac": 12,
    "hp": 75,
    "init": 1,
    "cr": 3,
    "type": "Large monstrosity",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/dining-table-mimic-wdh.js"
  },
  {
    "name": "Drow Gunslinger",
    "ac": 18,
    "hp": 84,
    "init": 4,
    "cr": 4,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/drow-gunslinger-wdh.js"
  },
  {
    "name": "Durnan",
    "ac": 16,
    "hp": 144,
    "init": 2,
    "cr": 9,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/durnan-wdh.js"
  },
  {
    "name": "Embric",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/embric-wdh.js"
  },
  {
    "name": "Emmek Frewn",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/emmek-frewn-wdh.js"
  },
  {
    "name": "Engineer",
    "ac": 10,
    "hp": 7,
    "init": 0,
    "cr": 0.25,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/engineer-wdh.js"
  },
  {
    "name": "Fala Lefaliir",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/fala-lefaliir-wdh.js"
  },
  {
    "name": "Falcon",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "Tiny beast",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/falcon-wdh.js"
  },
  {
    "name": "Fel'rekt Lafeen",
    "ac": 18,
    "hp": 84,
    "init": 4,
    "cr": 4,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/felrekt-lafeen-wdh.js"
  },
  {
    "name": "Floon Blagmaar",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/floon-blagmaar-wdh.js"
  },
  {
    "name": "Flying Staff",
    "ac": 17,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "Small construct",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/flying-staff-wdh.js"
  },
  {
    "name": "Griffon Cavalry Rider",
    "ac": 17,
    "hp": 58,
    "init": 2,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/griffon-cavalry-rider-wdh.js"
  },
  {
    "name": "Grinda Garloth",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/grinda-garloth-wdh.js"
  },
  {
    "name": "Grum'shar",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/grumshar-wdh.js"
  },
  {
    "name": "Hester Barch",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/hester-barch-wdh.js"
  },
  {
    "name": "Hlam",
    "ac": 22,
    "hp": 137,
    "init": 7,
    "cr": 16,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/hlam-wdh.js"
  },
  {
    "name": "Hrabbaz",
    "ac": 12,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/hrabbaz-wdh.js"
  },
  {
    "name": "Istrid Horn",
    "ac": 18,
    "hp": 117,
    "init": 0,
    "cr": 8,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/istrid-horn-wdh.js"
  },
  {
    "name": "Jalester Silvermane",
    "ac": 18,
    "hp": 71,
    "init": 2,
    "cr": 4,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/jalester-silvermane-wdh.js"
  },
  {
    "name": "Jandar Chergoba",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/jandar-chergoba-wdh.js"
  },
  {
    "name": "Jarlaxle Baenre",
    "ac": 24,
    "hp": 123,
    "init": 6,
    "cr": 15,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/jarlaxle-baenre-wdh.js"
  },
  {
    "name": "Jenks",
    "ac": 9,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/jenks-wdh.js"
  },
  {
    "name": "Kaevja Cynavern",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/kaevja-cynavern-wdh.js"
  },
  {
    "name": "Kalain",
    "ac": 15,
    "hp": 44,
    "init": 2,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/kalain-wdh.js"
  },
  {
    "name": "Krebbyg Masq'il'yr",
    "ac": 18,
    "hp": 84,
    "init": 4,
    "cr": 4,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/krebbyg-masqilyr-wdh.js"
  },
  {
    "name": "Lady Gondafrey",
    "ac": 15,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "Medium elemental",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/lady-gondafrey-wdh.js"
  },
  {
    "name": "Laeral Silverhand",
    "ac": 18,
    "hp": 228,
    "init": 3,
    "cr": 17,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/laeral-silverhand-wdh.js"
  },
  {
    "name": "Laiba (Nana) Rosse",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/laiba-nana-rosse-wdh.js"
  },
  {
    "name": "Losser Mirklav",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 6,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/losser-mirklav-wdh.js"
  },
  {
    "name": "Magister Umbero Zastro",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/magister-umbero-zastro-wdh.js"
  },
  {
    "name": "Manafret Cherryport",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 6,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/manafret-cherryport-wdh.js"
  },
  {
    "name": "Manshoon Simulacrum",
    "ac": 12,
    "hp": 126,
    "init": 2,
    "cr": 8,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/manshoon-simulacrum-wdh.js"
  },
  {
    "name": "Manshoon",
    "ac": 19,
    "hp": 126,
    "init": 2,
    "cr": 13,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/manshoon-wdh.js"
  },
  {
    "name": "Mattrim (Threestrings) Mereg",
    "ac": 15,
    "hp": 44,
    "init": 2,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/mattrim-threestrings-mereg-wdh.js"
  },
  {
    "name": "Maxeene",
    "ac": 10,
    "hp": 19,
    "init": 0,
    "cr": 0.25,
    "type": "Large beast",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/maxeene-wdh.js"
  },
  {
    "name": "Mechanical Bird",
    "ac": 15,
    "hp": 1,
    "init": 0,
    "cr": 0,
    "type": "Tiny construct",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/mechanical-bird-wdh.js"
  },
  {
    "name": "Melannor Fellbranch",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/melannor-fellbranch-wdh.js"
  },
  {
    "name": "Meloon Wardragon",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "Medium humanoid ",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/meloon-wardragon-wdh.js"
  },
  {
    "name": "Mirt",
    "ac": 16,
    "hp": 153,
    "init": 4,
    "cr": 9,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/mirt-wdh.js"
  },
  {
    "name": "Nar'l Xibrindas",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 7,
    "type": "Medium humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/narl-xibrindas-wdh.js"
  },
  {
    "name": "Nat",
    "ac": 9,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "Small humanoid",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/nat-wdh.js"
  },
  {
    "name": "Nihiloor",
    "ac": 15,
    "hp": 71,
    "init": 1,
    "cr": 7,
    "type": "Medium aberration",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/nihiloor-wdh.js"
  },
  {
    "name": "Nimblewright",
    "ac": 18,
    "hp": 45,
    "init": 4,
    "cr": 4,
    "type": "Medium construct",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/nimblewright-wdh.js"
  },
  {
    "name": "Ahmaergo",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "Large beast",
    "source": "Waterdeep Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/ahmaergo-wdh.js"
  },
];
