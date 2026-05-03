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
    "htmlLink": "./custom/index.html?file=pota/feathergale-knight.js"
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
    "name": "Mind Flayer",
    "ac": 15,
    "hp": 71,
    "init": 1,
    "cr": 7,
    "type": "Medium aberration",
    "source": "2014 Moster Manual",
    "htmlLink": "./custom/index.html?file=2014_mm/mind-flayer.js"
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
  {
    "name": "Gazer",
    "ac": 13,
    "hp": 13,
    "init": 3,
    "cr": 0.5,
    "type": "Tiny Aberration",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/gazer-vgm.js"
  },
  {
    "name": "Abyssal Chicken",
    "ac": 13,
    "hp": 10,
    "init": 2,
    "cr": 0.25,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/abyssal-chicken-bgdia.js"
  },
  {
    "name": "Amrik Vanthampur",
    "ac": 17,
    "hp": 66,
    "init": 4,
    "cr": 3,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/amrik-vanthampur-bgdia.js"
  },
  {
    "name": "Archduke Zariel of Avernus",
    "ac": 21,
    "hp": 580,
    "init": 7,
    "cr": 26,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/archduke-zariel-of-avernus-bgdia.js"
  },
  {
    "name": "Arkhan the Cruel",
    "ac": 23,
    "hp": 221,
    "init": 1,
    "cr": 16,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/arkhan-the-cruel-bgdia.js"
  },
  {
    "name": "Bel",
    "ac": 19,
    "hp": 364,
    "init": 2,
    "cr": 25,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/bel-bgdia.js"
  },
  {
    "name": "Bitter Breath",
    "ac": 18,
    "hp": 178,
    "init": 3,
    "cr": 11,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/bitter-breath-bgdia.js"
  },
  {
    "name": "Black Gauntlet of Bane",
    "ac": 16,
    "hp": 51,
    "init": 0,
    "cr": 6,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/black-gauntlet-of-bane-bgdia.js"
  },
  {
    "name": "Bone Whelk",
    "ac": 12,
    "hp": 27,
    "init": -3,
    "cr": 0.25,
    "type": "monstrosity",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/bone-whelk-bgdia.js"
  },
  {
    "name": "Burney the Barber",
    "ac": 21,
    "hp": 350,
    "init": 1,
    "cr": 21,
    "type": "dragon",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/burney-the-barber-bgdia.js"
  },
  {
    "name": "Chukka",
    "ac": 13,
    "hp": 13,
    "init": 3,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/chukka-bgdia.js"
  },
  {
    "name": "Clonk",
    "ac": 13,
    "hp": 13,
    "init": 3,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/clonk-bgdia.js"
  },
  {
    "name": "Crokek'toeck",
    "ac": 15,
    "hp": 297,
    "init": 0,
    "cr": 14,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/crokektoeck-bgdia.js"
  },
  {
    "name": "Death's Head of Bhaal",
    "ac": 15,
    "hp": 76,
    "init": 5,
    "cr": 5,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/deaths-head-of-bhaal-bgdia.js"
  },
  {
    "name": "Dryad Spirit",
    "ac": 12,
    "hp": 58,
    "init": 2,
    "cr": 4,
    "type": "undead",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/dryad-spirit-bgdia.js"
  },
  {
    "name": "Duke Thalamra Vanthampur",
    "ac": 10,
    "hp": 78,
    "init": 0,
    "cr": 4,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/duke-thalamra-vanthampur-bgdia.js"
  },
  {
    "name": "Elliach",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/elliach-bgdia.js"
  },
  {
    "name": "Feonor",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/feonor-bgdia.js"
  },
  {
    "name": "Fiendish Flesh Golem",
    "ac": 12,
    "hp": 210,
    "init": -1,
    "cr": 8,
    "type": "construct",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/fiendish-flesh-golem-bgdia.js"
  },
  {
    "name": "Fist of Bane",
    "ac": 18,
    "hp": 22,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/fist-of-bane-bgdia.js"
  },
  {
    "name": "Flying Dagger",
    "ac": 17,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "construct",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/flying-dagger-bgdia.js"
  },
  {
    "name": "Gideon Lightward",
    "ac": 11,
    "hp": 136,
    "init": 1,
    "cr": 6,
    "type": "undead",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/gideon-lightward-bgdia.js"
  },
  {
    "name": "Harkina Hunt",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/harkina-hunt-bgdia.js"
  },
  {
    "name": "Hellwasp",
    "ac": 19,
    "hp": 52,
    "init": 2,
    "cr": 5,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/hellwasp-bgdia.js"
  },
  {
    "name": "Hellwasp Grub",
    "ac": 13,
    "hp": 4,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/hellwasp-grub-bgdia.js"
  },
  {
    "name": "Hollyphant",
    "ac": 18,
    "hp": 36,
    "init": 0,
    "cr": 5,
    "type": "celestial",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/hollyphant-bgdia.js"
  },
  {
    "name": "Iron Consul",
    "ac": 16,
    "hp": 45,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/iron-consul-bgdia.js"
  },
  {
    "name": "Kostchtchie",
    "ac": 16,
    "hp": 243,
    "init": 1,
    "cr": 25,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/kostchtchie-bgdia.js"
  },
  {
    "name": "Krull",
    "ac": 17,
    "hp": 117,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/krull-bgdia.js"
  },
  {
    "name": "Lulu",
    "ac": 18,
    "hp": 36,
    "init": 0,
    "cr": 5,
    "type": "celestial",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/lulu-bgdia.js"
  },
  {
    "name": "Mad Maggie",
    "ac": 17,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/mad-maggie-bgdia.js"
  },
  {
    "name": "Mahadi the Rakshasa",
    "ac": 17,
    "hp": 195,
    "init": 4,
    "cr": 14,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/mahadi-the-rakshasa-bgdia.js"
  },
  {
    "name": "Master of Souls",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 4,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/master-of-souls-bgdia.js"
  },
  {
    "name": "Mortlock Vanthampur",
    "ac": 12,
    "hp": 90,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/mortlock-vanthampur-bgdia.js"
  },
  {
    "name": "Necromite of Myrkul",
    "ac": 11,
    "hp": 13,
    "init": 1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/necromite-of-myrkul-bgdia.js"
  },
  {
    "name": "Necrotic Centipede",
    "ac": 17,
    "hp": 195,
    "init": 1,
    "cr": 11,
    "type": "monstrosity",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/necrotic-centipede-bgdia.js"
  },
  {
    "name": "Night Blade",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/night-blade-bgdia.js"
  },
  {
    "name": "Nine-Fingers Keene",
    "ac": 15,
    "hp": 84,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/nine-fingers-keene-bgdia.js"
  },
  {
    "name": "Peacock",
    "ac": 10,
    "hp": 5,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/peacock-bgdia.js"
  },
  {
    "name": "Princeps Kovik",
    "ac": 16,
    "hp": 85,
    "init": 2,
    "cr": 8,
    "type": "fiend",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/princeps-kovik-bgdia.js"
  },
  {
    "name": "Raggadragga",
    "ac": 10,
    "hp": 120,
    "init": 0,
    "cr": 4,
    "type": "humanoid (human",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/raggadragga-bgdia.js"
  },
  {
    "name": "Reaper of Bhaal",
    "ac": 15,
    "hp": 27,
    "init": 5,
    "cr": 2,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/reaper-of-bhaal-bgdia.js"
  },
  {
    "name": "Rilsa Rael",
    "ac": 15,
    "hp": 52,
    "init": 4,
    "cr": 3,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/rilsa-rael-bgdia.js"
  },
  {
    "name": "Skeletal Rats",
    "ac": 10,
    "hp": 24,
    "init": 0,
    "cr": 0.25,
    "type": "undead",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/skeletal-rats-bgdia.js"
  },
  {
    "name": "Skull Lasher of Myrkul",
    "ac": 12,
    "hp": 32,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/skull-lasher-of-myrkul-bgdia.js"
  },
  {
    "name": "Smiler the Defiler",
    "ac": 18,
    "hp": 165,
    "init": 5,
    "cr": 7,
    "type": "fey",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/smiler-the-defiler-bgdia.js"
  },
  {
    "name": "Sylvira Savikas",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/sylvira-savikas-bgdia.js"
  },
  {
    "name": "Thavius Kreeg",
    "ac": 10,
    "hp": 40,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/thavius-kreeg-bgdia.js"
  },
  {
    "name": "Thurstwell Vanthampur",
    "ac": 9,
    "hp": 5,
    "init": -1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/thurstwell-vanthampur-bgdia.js"
  },
  {
    "name": "Torogar Steelfist",
    "ac": 17,
    "hp": 168,
    "init": 3,
    "cr": 11,
    "type": "monstrosity",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/torogar-steelfist-bgdia.js"
  },
  {
    "name": "Traxigor",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "beast",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/traxigor-bgdia.js"
  },
  {
    "name": "Tressym",
    "ac": 12,
    "hp": 5,
    "init": 2,
    "cr": 0,
    "type": "monstrosity",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/tressym-bgdia.js"
  },
  {
    "name": "Ulder Ravengard",
    "ac": 20,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/ulder-ravengard-bgdia.js"
  },
  {
    "name": "Undead Tree",
    "ac": 16,
    "hp": 138,
    "init": -1,
    "cr": 9,
    "type": "undead",
    "source": "Baldur's Gate: Descent into Avernus",
    "htmlLink": "./custom/index.html?file=bgdia/undead-tree-bgdia.js"
  },
  {
    "name": "Aerosaur",
    "ac": 14,
    "hp": 155,
    "init": 0,
    "cr": 10,
    "type": "monstrosity",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/aerosaur-bgg.js"
  },
  {
    "name": "Altisaur",
    "ac": 15,
    "hp": 198,
    "init": -2,
    "cr": 13,
    "type": "monstrosity",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/altisaur-bgg.js"
  },
  {
    "name": "Bag Jelly",
    "ac": 8,
    "hp": 42,
    "init": -2,
    "cr": 1,
    "type": "ooze",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/bag-jelly-bgg.js"
  },
  {
    "name": "Barrowghast",
    "ac": 12,
    "hp": 138,
    "init": -1,
    "cr": 7,
    "type": "undead",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/barrowghast-bgg.js"
  },
  {
    "name": "Cairnwight",
    "ac": 19,
    "hp": 138,
    "init": 0,
    "cr": 9,
    "type": "undead",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cairnwight-bgg.js"
  },
  {
    "name": "Ceratops",
    "ac": 16,
    "hp": 139,
    "init": -1,
    "cr": 9,
    "type": "monstrosity",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/ceratops-bgg.js"
  },
  {
    "name": "Cinder Hulk",
    "ac": 16,
    "hp": 84,
    "init": 1,
    "cr": 7,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cinder-hulk-bgg.js"
  },
  {
    "name": "Cloud Giant Destiny Gambler",
    "ac": 15,
    "hp": 337,
    "init": 1,
    "cr": 19,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cloud-giant-destiny-gambler-bgg.js"
  },
  {
    "name": "Cloud Giant of Evil Air",
    "ac": 14,
    "hp": 200,
    "init": 0,
    "cr": 12,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cloud-giant-of-evil-air-bgg.js"
  },
  {
    "name": "Cradle of the Cloud Scion",
    "ac": 19,
    "hp": 624,
    "init": 5,
    "cr": 26,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cradle-of-the-cloud-scion-bgg.js"
  },
  {
    "name": "Cradle of the Fire Scion",
    "ac": 20,
    "hp": 555,
    "init": 1,
    "cr": 25,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cradle-of-the-fire-scion-bgg.js"
  },
  {
    "name": "Cradle of the Frost Scion",
    "ac": 20,
    "hp": 499,
    "init": 2,
    "cr": 24,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cradle-of-the-frost-scion-bgg.js"
  },
  {
    "name": "Cradle of the Hill Scion",
    "ac": 19,
    "hp": 402,
    "init": 0,
    "cr": 22,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cradle-of-the-hill-scion-bgg.js"
  },
  {
    "name": "Cradle of the Stone Scion",
    "ac": 20,
    "hp": 455,
    "init": 2,
    "cr": 23,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cradle-of-the-stone-scion-bgg.js"
  },
  {
    "name": "Cradle of the Storm Scion",
    "ac": 19,
    "hp": 682,
    "init": 2,
    "cr": 27,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/cradle-of-the-storm-scion-bgg.js"
  },
  {
    "name": "Death Giant Reaper",
    "ac": 18,
    "hp": 172,
    "init": 2,
    "cr": 12,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/death-giant-reaper-bgg.js"
  },
  {
    "name": "Death Giant Shrouded One",
    "ac": 12,
    "hp": 195,
    "init": 2,
    "cr": 15,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/death-giant-shrouded-one-bgg.js"
  },
  {
    "name": "Dust Hulk",
    "ac": 16,
    "hp": 68,
    "init": 4,
    "cr": 5,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/dust-hulk-bgg.js"
  },
  {
    "name": "Echo of Demogorgon",
    "ac": 14,
    "hp": 85,
    "init": 0,
    "cr": 6,
    "type": "fiend",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/echo-of-demogorgon-bgg.js"
  },
  {
    "name": "Ettin Ceremorph",
    "ac": 15,
    "hp": 104,
    "init": 2,
    "cr": 8,
    "type": "aberration",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/ettin-ceremorph-bgg.js"
  },
  {
    "name": "Fensir Devourer",
    "ac": 17,
    "hp": 138,
    "init": 0,
    "cr": 8,
    "type": "celestial",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fensir-devourer-bgg.js"
  },
  {
    "name": "Fensir Skirmisher",
    "ac": 15,
    "hp": 94,
    "init": 2,
    "cr": 6,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fensir-skirmisher-bgg.js"
  },
  {
    "name": "Firbolg Primeval Warden",
    "ac": 16,
    "hp": 65,
    "init": 2,
    "cr": 4,
    "type": "humanoid",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/firbolg-primeval-warden-bgg.js"
  },
  {
    "name": "Firbolg Wanderer",
    "ac": 16,
    "hp": 90,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/firbolg-wanderer-bgg.js"
  },
  {
    "name": "Fire Giant Forgecaller",
    "ac": 18,
    "hp": 312,
    "init": 0,
    "cr": 18,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fire-giant-forgecaller-bgg.js"
  },
  {
    "name": "Fire Giant of Evil Fire",
    "ac": 18,
    "hp": 150,
    "init": -1,
    "cr": 10,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fire-giant-of-evil-fire-bgg.js"
  },
  {
    "name": "Fire Hellion",
    "ac": 18,
    "hp": 175,
    "init": 0,
    "cr": 11,
    "type": "fiend",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fire-hellion-bgg.js"
  },
  {
    "name": "Firegaunt",
    "ac": 15,
    "hp": 175,
    "init": -2,
    "cr": 11,
    "type": "undead",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/firegaunt-bgg.js"
  },
  {
    "name": "Flesh Colossus",
    "ac": 14,
    "hp": 280,
    "init": -1,
    "cr": 20,
    "type": "construct",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/flesh-colossus-bgg.js"
  },
  {
    "name": "Fomorian Deep Crawler",
    "ac": 14,
    "hp": 184,
    "init": 2,
    "cr": 10,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fomorian-deep-crawler-bgg.js"
  },
  {
    "name": "Fomorian Noble",
    "ac": 14,
    "hp": 253,
    "init": 4,
    "cr": 15,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fomorian-noble-bgg.js"
  },
  {
    "name": "Fomorian Warlock of the Dark",
    "ac": 15,
    "hp": 207,
    "init": 1,
    "cr": 12,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fomorian-warlock-of-the-dark-bgg.js"
  },
  {
    "name": "Frost Giant Ice Shaper",
    "ac": 16,
    "hp": 310,
    "init": 0,
    "cr": 17,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/frost-giant-ice-shaper-bgg.js"
  },
  {
    "name": "Frost Giant of Evil Water",
    "ac": 16,
    "hp": 172,
    "init": 3,
    "cr": 11,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/frost-giant-of-evil-water-bgg.js"
  },
  {
    "name": "Frostmourn",
    "ac": 13,
    "hp": 195,
    "init": -1,
    "cr": 10,
    "type": "undead",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/frostmourn-bgg.js"
  },
  {
    "name": "Fury of Kostchtchie",
    "ac": 16,
    "hp": 216,
    "init": 0,
    "cr": 14,
    "type": "fiend",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/fury-of-kostchtchie-bgg.js"
  },
  {
    "name": "Gargantua",
    "ac": 17,
    "hp": 388,
    "init": 0,
    "cr": 21,
    "type": "aberration",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/gargantua-bgg.js"
  },
  {
    "name": "Giant Child",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/giant-child-bgg.js"
  },
  {
    "name": "Giant Goose",
    "ac": 13,
    "hp": 60,
    "init": 3,
    "cr": 3,
    "type": "fey",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/giant-goose-bgg.js"
  },
  {
    "name": "Giant Lynx",
    "ac": 14,
    "hp": 22,
    "init": 4,
    "cr": 0.5,
    "type": "fey",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/giant-lynx-bgg.js"
  },
  {
    "name": "Giant Ox",
    "ac": 12,
    "hp": 105,
    "init": 0,
    "cr": 3,
    "type": "fey",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/giant-ox-bgg.js"
  },
  {
    "name": "Giant Ram",
    "ac": 13,
    "hp": 28,
    "init": 1,
    "cr": 1,
    "type": "fey",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/giant-ram-bgg.js"
  },
  {
    "name": "Giant Tick",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "monstrosity",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/giant-tick-bgg.js"
  },
  {
    "name": "Gigant",
    "ac": 17,
    "hp": 325,
    "init": 2,
    "cr": 20,
    "type": "monstrosity",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/gigant-bgg.js"
  },
  {
    "name": "Goliath Giant-Kin",
    "ac": 18,
    "hp": 67,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/goliath-giant-kin-bgg.js"
  },
  {
    "name": "Grinning Cat",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 1,
    "type": "fey",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/grinning-cat-bgg.js"
  },
  {
    "name": "Hill Giant Avalancher",
    "ac": 15,
    "hp": 220,
    "init": -1,
    "cr": 12,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/hill-giant-avalancher-bgg.js"
  },
  {
    "name": "Lightning Hulk",
    "ac": 15,
    "hp": 102,
    "init": 5,
    "cr": 9,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/lightning-hulk-bgg.js"
  },
  {
    "name": "Maw of Yeenoghu",
    "ac": 15,
    "hp": 161,
    "init": 0,
    "cr": 10,
    "type": "fiend",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/maw-of-yeenoghu-bgg.js"
  },
  {
    "name": "Mist Hulk",
    "ac": 15,
    "hp": 94,
    "init": 5,
    "cr": 6,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/mist-hulk-bgg.js"
  },
  {
    "name": "Mud Hulk",
    "ac": 13,
    "hp": 68,
    "init": -1,
    "cr": 3,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/mud-hulk-bgg.js"
  },
  {
    "name": "Regisaur",
    "ac": 17,
    "hp": 181,
    "init": -1,
    "cr": 14,
    "type": "monstrosity",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/regisaur-bgg.js"
  },
  {
    "name": "Rime Hulk",
    "ac": 15,
    "hp": 85,
    "init": 0,
    "cr": 5,
    "type": "elemental",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/rime-hulk-bgg.js"
  },
  {
    "name": "Runic Colossus",
    "ac": 20,
    "hp": 315,
    "init": -1,
    "cr": 21,
    "type": "construct",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/runic-colossus-bgg.js"
  },
  {
    "name": "Spectral Cloud",
    "ac": 11,
    "hp": 189,
    "init": 1,
    "cr": 13,
    "type": "undead",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/spectral-cloud-bgg.js"
  },
  {
    "name": "Spotted Lion",
    "ac": 15,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "beast",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/spotted-lion-bgg.js"
  },
  {
    "name": "Stalker of Baphomet",
    "ac": 17,
    "hp": 200,
    "init": 3,
    "cr": 12,
    "type": "fiend",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/stalker-of-baphomet-bgg.js"
  },
  {
    "name": "Stone Giant of Evil Earth",
    "ac": 20,
    "hp": 137,
    "init": 1,
    "cr": 9,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/stone-giant-of-evil-earth-bgg.js"
  },
  {
    "name": "Stone Giant Rockspeaker",
    "ac": 19,
    "hp": 276,
    "init": 2,
    "cr": 16,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/stone-giant-rockspeaker-bgg.js"
  },
  {
    "name": "Storm Crab",
    "ac": 18,
    "hp": 155,
    "init": 0,
    "cr": 11,
    "type": "monstrosity",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/storm-crab-bgg.js"
  },
  {
    "name": "Storm Giant Tempest Caller",
    "ac": 17,
    "hp": 310,
    "init": 2,
    "cr": 20,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/storm-giant-tempest-caller-bgg.js"
  },
  {
    "name": "Storm Herald",
    "ac": 16,
    "hp": 287,
    "init": 2,
    "cr": 17,
    "type": "aberration",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/storm-herald-bgg.js"
  },
  {
    "name": "Tempest Spirit",
    "ac": 12,
    "hp": 195,
    "init": 2,
    "cr": 15,
    "type": "undead",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/tempest-spirit-bgg.js"
  },
  {
    "name": "Titanothere",
    "ac": 16,
    "hp": 136,
    "init": 0,
    "cr": 5,
    "type": "beast",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/titanothere-bgg.js"
  },
  {
    "name": "Troll Amalgam",
    "ac": 15,
    "hp": 217,
    "init": 2,
    "cr": 17,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/troll-amalgam-bgg.js"
  },
  {
    "name": "Troll Mutate",
    "ac": 16,
    "hp": 95,
    "init": 1,
    "cr": 7,
    "type": "giant",
    "source": "Bigby Presents: Glory of the Giants",
    "htmlLink": "./custom/index.html?file=bgg/troll-mutate-bgg.js"
  },
  {
    "name": "Bugbear Chief",
    "ac": 17,
    "hp": 65,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Chief (Supplement)",
    "htmlLink": "./custom/index.html?file=chief/bugbear-chief.js"
  },
  {
    "name": "Animated Chained Library",
    "ac": 14,
    "hp": 45,
    "init": -1,
    "cr": 1,
    "type": "construct",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/animated-chained-library-cm.js"
  },
  {
    "name": "Arrant Quill",
    "ac": 14,
    "hp": 135,
    "init": 4,
    "cr": 11,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/arrant-quill-cm.js"
  },
  {
    "name": "Bak Mei",
    "ac": 17,
    "hp": 102,
    "init": 4,
    "cr": 13,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/bak-mei-cm.js"
  },
  {
    "name": "Canopic Golem",
    "ac": 17,
    "hp": 252,
    "init": 0,
    "cr": 13,
    "type": "construct",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/canopic-golem-cm.js"
  },
  {
    "name": "Chwinga",
    "ac": 15,
    "hp": 5,
    "init": 5,
    "cr": 0,
    "type": "elemental",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/chwinga-cm.js"
  },
  {
    "name": "Cloud Giant Ghost",
    "ac": 15,
    "hp": 104,
    "init": 0,
    "cr": 9,
    "type": "undead",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/cloud-giant-ghost-cm.js"
  },
  {
    "name": "Constructed Commoner",
    "ac": 15,
    "hp": 6,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/constructed-commoner-cm.js"
  },
  {
    "name": "Corrupted Avatar of Lurue",
    "ac": 14,
    "hp": 90,
    "init": 2,
    "cr": 8,
    "type": "monstrosity",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/corrupted-avatar-of-lurue-cm.js"
  },
  {
    "name": "Dragon Tortoise",
    "ac": 20,
    "hp": 341,
    "init": 0,
    "cr": 17,
    "type": "dragon",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/dragon-tortoise-cm.js"
  },
  {
    "name": "Faerl",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/faerl-cm.js"
  },
  {
    "name": "Fungal Servant",
    "ac": 17,
    "hp": 97,
    "init": 0,
    "cr": 15,
    "type": "undead",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/fungal-servant-cm.js"
  },
  {
    "name": "Gingwatzim",
    "ac": 12,
    "hp": 39,
    "init": 2,
    "cr": 2,
    "type": "aberration",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/gingwatzim-cm.js"
  },
  {
    "name": "Grippli Warrior",
    "ac": 12,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/grippli-warrior-cm.js"
  },
  {
    "name": "Hag of the Fetid Gaze",
    "ac": 17,
    "hp": 82,
    "init": 1,
    "cr": 3,
    "type": "fey",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/hag-of-the-fetid-gaze-cm.js"
  },
  {
    "name": "Immortal Lotus Monk",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 5,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/immortal-lotus-monk-cm.js"
  },
  {
    "name": "Jade Tigress",
    "ac": 15,
    "hp": 71,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/jade-tigress-cm.js"
  },
  {
    "name": "Kharbek",
    "ac": 13,
    "hp": 1,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/kharbek-cm.js"
  },
  {
    "name": "Kiddywidget",
    "ac": 16,
    "hp": 15,
    "init": 2,
    "cr": 0.5,
    "type": "construct",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/kiddywidget-cm.js"
  },
  {
    "name": "K'Tulah",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/ktulah-cm.js"
  },
  {
    "name": "Lightning Golem",
    "ac": 9,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "construct",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/lightning-golem-cm.js"
  },
  {
    "name": "Master Sage",
    "ac": 10,
    "hp": 54,
    "init": 0,
    "cr": 5,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/master-sage-cm.js"
  },
  {
    "name": "Miirym",
    "ac": 10,
    "hp": 262,
    "init": 0,
    "cr": 22,
    "type": "undead",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/miirym-cm.js"
  },
  {
    "name": "Mimic Chair",
    "ac": 12,
    "hp": 30,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/mimic-chair-cm.js"
  },
  {
    "name": "Naiad",
    "ac": 15,
    "hp": 31,
    "init": 3,
    "cr": 2,
    "type": "fey",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/naiad-cm.js"
  },
  {
    "name": "Nintra Siotta",
    "ac": 17,
    "hp": 306,
    "init": 7,
    "cr": 16,
    "type": "fey",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/nintra-siotta-cm.js"
  },
  {
    "name": "Ogruhl",
    "ac": 20,
    "hp": 341,
    "init": 0,
    "cr": 17,
    "type": "dragon",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/ogruhl-cm.js"
  },
  {
    "name": "Parasite-infested Behir",
    "ac": 17,
    "hp": 168,
    "init": 3,
    "cr": 11,
    "type": "undead",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/parasite-infested-behir-cm.js"
  },
  {
    "name": "Ram Sugar",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/ram-sugar-cm.js"
  },
  {
    "name": "Sage",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/sage-cm.js"
  },
  {
    "name": "Sapphire Sentinel",
    "ac": 17,
    "hp": 178,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/sapphire-sentinel-cm.js"
  },
  {
    "name": "Shemshime",
    "ac": 13,
    "hp": 31,
    "init": 3,
    "cr": 4,
    "type": "undead",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/shemshime-cm.js"
  },
  {
    "name": "Skitterwidget",
    "ac": 18,
    "hp": 85,
    "init": 2,
    "cr": 5,
    "type": "construct",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/skitterwidget-cm.js"
  },
  {
    "name": "Steel Crane",
    "ac": 17,
    "hp": 76,
    "init": 4,
    "cr": 8,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/steel-crane-cm.js"
  },
  {
    "name": "Storm Giant Skeleton",
    "ac": 13,
    "hp": 204,
    "init": 2,
    "cr": 16,
    "type": "undead",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/storm-giant-skeleton-cm.js"
  },
  {
    "name": "Swarm of Animated Books",
    "ac": 12,
    "hp": 22,
    "init": 1,
    "cr": 0.25,
    "type": "construct",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/swarm-of-animated-books-cm.js"
  },
  {
    "name": "Valin Sarnaster",
    "ac": 17,
    "hp": 97,
    "init": 0,
    "cr": 16,
    "type": "undead",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/valin-sarnaster-cm.js"
  },
  {
    "name": "Varnyr",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/varnyr-cm.js"
  },
  {
    "name": "Wood Elf Wizard",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 7,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/wood-elf-wizard-cm.js"
  },
  {
    "name": "Zikran",
    "ac": 12,
    "hp": 144,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/zikran-cm.js"
  },
  {
    "name": "Zikzokrishka",
    "ac": 19,
    "hp": 225,
    "init": 0,
    "cr": 17,
    "type": "undead",
    "source": "Candlekeep Mysteries",
    "htmlLink": "./custom/index.html?file=cm/zikzokrishka-cm.js"
  },
  {
    "name": "Amber Golem",
    "ac": 17,
    "hp": 178,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/amber-golem-cos.js"
  },
  {
    "name": "Anastrasya Karelova",
    "ac": 15,
    "hp": 82,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/anastrasya-karelova-cos.js"
  },
  {
    "name": "Animated Halberd",
    "ac": 15,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/animated-halberd-cos.js"
  },
  {
    "name": "Arabelle",
    "ac": 10,
    "hp": 2,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/arabelle-cos.js"
  },
  {
    "name": "Armored Saber-Toothed Tiger",
    "ac": 17,
    "hp": 84,
    "init": 2,
    "cr": 3,
    "type": "beast",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/armored-saber-toothed-tiger-cos.js"
  },
  {
    "name": "Arrigal",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/arrigal-cos.js"
  },
  {
    "name": "Baba Lysaga",
    "ac": 15,
    "hp": 120,
    "init": 0,
    "cr": 11,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/baba-lysaga-cos.js"
  },
  {
    "name": "Baba Lysaga's Creeping Hut",
    "ac": 16,
    "hp": 263,
    "init": -2,
    "cr": 11,
    "type": "construct",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/baba-lysagas-creeping-hut-cos.js"
  },
  {
    "name": "Baron Vargas Vallakovich",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/baron-vargas-vallakovich-cos.js"
  },
  {
    "name": "Barovian Commoner",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/barovian-commoner-cos.js"
  },
  {
    "name": "Barovian Scout",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/barovian-scout-cos.js"
  },
  {
    "name": "Barovian Witch",
    "ac": 10,
    "hp": 16,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/barovian-witch-cos.js"
  },
  {
    "name": "Beucephalus",
    "ac": 13,
    "hp": 104,
    "init": 2,
    "cr": 3,
    "type": "fiend",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/beucephalus-cos.js"
  },
  {
    "name": "Bluto Krogarov",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/bluto-krogarov-cos.js"
  },
  {
    "name": "Bray Martikov",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/bray-martikov-cos.js"
  },
  {
    "name": "Brom Martikov",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/brom-martikov-cos.js"
  },
  {
    "name": "Broom of Animated Attack",
    "ac": 15,
    "hp": 17,
    "init": 3,
    "cr": 0.25,
    "type": "construct",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/broom-of-animated-attack-cos.js"
  },
  {
    "name": "Cat Skeleton",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/cat-skeleton-cos.js"
  },
  {
    "name": "Clovin Belview",
    "ac": 11,
    "hp": 26,
    "init": -1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/clovin-belview-cos.js"
  },
  {
    "name": "Cyrus Belview",
    "ac": 11,
    "hp": 26,
    "init": -1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/cyrus-belview-cos.js"
  },
  {
    "name": "Danika Dorakova",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/danika-dorakova-cos.js"
  },
  {
    "name": "Davian Martikov",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/davian-martikov-cos.js"
  },
  {
    "name": "Distended Corpse",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/distended-corpse-cos.js"
  },
  {
    "name": "Donavich",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/donavich-cos.js"
  },
  {
    "name": "Doru",
    "ac": 15,
    "hp": 82,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/doru-cos.js"
  },
  {
    "name": "Emil Toranescu",
    "ac": 11,
    "hp": 72,
    "init": 1,
    "cr": 3,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/emil-toranescu-cos.js"
  },
  {
    "name": "Escher",
    "ac": 15,
    "hp": 82,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/escher-cos.js"
  },
  {
    "name": "Exethanter",
    "ac": 17,
    "hp": 99,
    "init": 3,
    "cr": 10,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/exethanter-cos.js"
  },
  {
    "name": "Ezmerelda d'Avenir",
    "ac": 17,
    "hp": 82,
    "init": 4,
    "cr": 8,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/ezmerelda-davenir-cos.js"
  },
  {
    "name": "Gadof Blinsky",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/gadof-blinsky-cos.js"
  },
  {
    "name": "Gertruda",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/gertruda-cos.js"
  },
  {
    "name": "Guardian Portrait",
    "ac": 5,
    "hp": 22,
    "init": -5,
    "cr": 1,
    "type": "construct",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/guardian-portrait-cos.js"
  },
  {
    "name": "Helga Ruvak",
    "ac": 15,
    "hp": 82,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/helga-ruvak-cos.js"
  },
  {
    "name": "Henrik van der Voort",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/henrik-van-der-voort-cos.js"
  },
  {
    "name": "Ireena Kolyana",
    "ac": 15,
    "hp": 14,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/ireena-kolyana-cos.js"
  },
  {
    "name": "Ismark Kolyanovich",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/ismark-kolyanovich-cos.js"
  },
  {
    "name": "Izek Strazni",
    "ac": 14,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/izek-strazni-cos.js"
  },
  {
    "name": "Kasimir Velikov",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/kasimir-velikov-cos.js"
  },
  {
    "name": "Kiril Stoyanovich",
    "ac": 11,
    "hp": 90,
    "init": 1,
    "cr": 3,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/kiril-stoyanovich-cos.js"
  },
  {
    "name": "Knight of the Order",
    "ac": 13,
    "hp": 136,
    "init": 2,
    "cr": 5,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/knight-of-the-order-cos.js"
  },
  {
    "name": "Lady Fiona Wachter",
    "ac": 10,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/lady-fiona-wachter-cos.js"
  },
  {
    "name": "Lady Lydia Petrovna",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/lady-lydia-petrovna-cos.js"
  },
  {
    "name": "Lief Lipsiege",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/lief-lipsiege-cos.js"
  },
  {
    "name": "Ludmilla Vilisevic",
    "ac": 15,
    "hp": 82,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/ludmilla-vilisevic-cos.js"
  },
  {
    "name": "Luvash",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/luvash-cos.js"
  },
  {
    "name": "Mad Mary",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/mad-mary-cos.js"
  },
  {
    "name": "Madam Eva",
    "ac": 10,
    "hp": 88,
    "init": 0,
    "cr": 10,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/madam-eva-cos.js"
  },
  {
    "name": "Majesto",
    "ac": 13,
    "hp": 10,
    "init": 3,
    "cr": 1,
    "type": "fiend",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/majesto-cos.js"
  },
  {
    "name": "Marzena Belview",
    "ac": 11,
    "hp": 26,
    "init": -1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/marzena-belview-cos.js"
  },
  {
    "name": "Milivoj",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/milivoj-cos.js"
  },
  {
    "name": "Mishka Belview",
    "ac": 11,
    "hp": 26,
    "init": -1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/mishka-belview-cos.js"
  },
  {
    "name": "Mongrelfolk",
    "ac": 11,
    "hp": 26,
    "init": -1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/mongrelfolk-cos.js"
  },
  {
    "name": "Morgantha",
    "ac": 17,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "fiend",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/morgantha-cos.js"
  },
  {
    "name": "Nikolai Wachter",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/nikolai-wachter-cos.js"
  },
  {
    "name": "Otto Belview",
    "ac": 11,
    "hp": 26,
    "init": -1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/otto-belview-cos.js"
  },
  {
    "name": "Parriwimple",
    "ac": 14,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/parriwimple-cos.js"
  },
  {
    "name": "Patrina Velikovna",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/patrina-velikovna-cos.js"
  },
  {
    "name": "Phantom Warrior (Archer)",
    "ac": 16,
    "hp": 45,
    "init": 0,
    "cr": 3,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/phantom-warrior-archer-cos.js"
  },
  {
    "name": "Phantom Warrior",
    "ac": 16,
    "hp": 45,
    "init": 0,
    "cr": 3,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/phantom-warrior-cos.js"
  },
  {
    "name": "Piccolo",
    "ac": 12,
    "hp": 3,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/piccolo-cos.js"
  },
  {
    "name": "Pidlwick II",
    "ac": 14,
    "hp": 10,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/pidlwick-ii-cos.js"
  },
  {
    "name": "Rahadin",
    "ac": 18,
    "hp": 135,
    "init": 6,
    "cr": 10,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/rahadin-cos.js"
  },
  {
    "name": "Rictavio",
    "ac": 12,
    "hp": 77,
    "init": 1,
    "cr": 5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/rictavio-cos.js"
  },
  {
    "name": "Rosavalda \"Rose\" Durst",
    "ac": 11,
    "hp": 35,
    "init": 1,
    "cr": 3,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/rosavalda-rose-durst-cos.js"
  },
  {
    "name": "Sangzor",
    "ac": 11,
    "hp": 33,
    "init": 0,
    "cr": 1,
    "type": "beast",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/sangzor-cos.js"
  },
  {
    "name": "Savid",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/savid-cos.js"
  },
  {
    "name": "Sir Godfrey Gwilym",
    "ac": 13,
    "hp": 136,
    "init": 2,
    "cr": 6,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/sir-godfrey-gwilym-cos.js"
  },
  {
    "name": "Snow Maiden",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/snow-maiden-cos.js"
  },
  {
    "name": "Stanimir",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/stanimir-cos.js"
  },
  {
    "name": "Stella Wachter",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/stella-wachter-cos.js"
  },
  {
    "name": "Strahd von Zarovich",
    "ac": 16,
    "hp": 144,
    "init": 4,
    "cr": 15,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/strahd-von-zarovich-cos.js"
  },
  {
    "name": "Strahd Zombie",
    "ac": 8,
    "hp": 30,
    "init": -2,
    "cr": 1,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/strahd-zombie-cos.js"
  },
  {
    "name": "Strahd's Animated Armor",
    "ac": 21,
    "hp": 112,
    "init": 1,
    "cr": 6,
    "type": "construct",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/strahds-animated-armor-cos.js"
  },
  {
    "name": "Szoldar Szoldarovich",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/szoldar-szoldarovich-cos.js"
  },
  {
    "name": "The Abbot",
    "ac": 17,
    "hp": 136,
    "init": 4,
    "cr": 10,
    "type": "celestial",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/the-abbot-cos.js"
  },
  {
    "name": "The Mad Mage of Mount Baratok",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/the-mad-mage-of-mount-baratok-cos.js"
  },
  {
    "name": "Thornboldt \"Thorn\" Durst",
    "ac": 11,
    "hp": 35,
    "init": 1,
    "cr": 3,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/thornboldt-thorn-durst-cos.js"
  },
  {
    "name": "Urwin Martikov",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/urwin-martikov-cos.js"
  },
  {
    "name": "Vasilka",
    "ac": 9,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "construct",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vasilka-cos.js"
  },
  {
    "name": "Victor Vallakovich",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/victor-vallakovich-cos.js"
  },
  {
    "name": "Vilnius",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vilnius-cos.js"
  },
  {
    "name": "Vistana Assassin",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vistana-assassin-cos.js"
  },
  {
    "name": "Vistana Bandit Captain",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vistana-bandit-captain-cos.js"
  },
  {
    "name": "Vistana Bandit",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vistana-bandit-cos.js"
  },
  {
    "name": "Vistana Commoner",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vistana-commoner-cos.js"
  },
  {
    "name": "Vistana Guard",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vistana-guard-cos.js"
  },
  {
    "name": "Vistana Spy",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vistana-spy-cos.js"
  },
  {
    "name": "Vistana Thug",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vistana-thug-cos.js"
  },
  {
    "name": "Vladimir Horngaard",
    "ac": 17,
    "hp": 192,
    "init": 2,
    "cr": 7,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/vladimir-horngaard-cos.js"
  },
  {
    "name": "Volenta Popofsky",
    "ac": 15,
    "hp": 82,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/volenta-popofsky-cos.js"
  },
  {
    "name": "Walking Corpse",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/walking-corpse-cos.js"
  },
  {
    "name": "Yevgeni Krushkin",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/yevgeni-krushkin-cos.js"
  },
  {
    "name": "Young Wereraven",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/young-wereraven-cos.js"
  },
  {
    "name": "Zuleika Toranescu",
    "ac": 11,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid (human",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/zuleika-toranescu-cos.js"
  },
  {
    "name": "Zygfrek Belview",
    "ac": 11,
    "hp": 26,
    "init": -1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Curse of Strahd",
    "htmlLink": "./custom/index.html?file=cos/zygfrek-belview-cos.js"
  },
  {
    "name": "Anchorite of Talos",
    "ac": 13,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid (half-orc",
    "source": "Dragon of Icespire Peak",
    "htmlLink": "./custom/index.html?file=dip/anchorite-of-talos-dip.js"
  },
  {
    "name": "Don-Jon Raskin",
    "ac": 10,
    "hp": 44,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Dragon of Icespire Peak",
    "htmlLink": "./custom/index.html?file=dip/don-jon-raskin-dip.js"
  },
  {
    "name": "Falcon the Hunter",
    "ac": 14,
    "hp": 112,
    "init": 2,
    "cr": 4,
    "type": "humanoid",
    "source": "Dragon of Icespire Peak",
    "htmlLink": "./custom/index.html?file=dip/falcon-the-hunter-dip.js"
  },
  {
    "name": "Gorthok the Thunder Boar",
    "ac": 15,
    "hp": 73,
    "init": 0,
    "cr": 6,
    "type": "monstrosity",
    "source": "Dragon of Icespire Peak",
    "htmlLink": "./custom/index.html?file=dip/gorthok-the-thunder-boar-dip.js"
  },
  {
    "name": "Rock Gnome Recluse",
    "ac": 10,
    "hp": 7,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Dragon of Icespire Peak",
    "htmlLink": "./custom/index.html?file=dip/rock-gnome-recluse-dip.js"
  },
  {
    "name": "Skeletal Riding Horse",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "undead",
    "source": "Dragon of Icespire Peak",
    "htmlLink": "./custom/index.html?file=dip/skeletal-riding-horse-dip.js"
  },
  {
    "name": "Fume Drake",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 0.25,
    "type": "elemental",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/fume-drake-dosi.js"
  },
  {
    "name": "Kobold Tinkerer",
    "ac": 12,
    "hp": 10,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/kobold-tinkerer-dosi.js"
  },
  {
    "name": "Merrow Extortionist",
    "ac": 13,
    "hp": 30,
    "init": 0,
    "cr": 1,
    "type": "monstrosity",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/merrow-extortionist-dosi.js"
  },
  {
    "name": "Myla",
    "ac": 12,
    "hp": 10,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/myla-dosi.js"
  },
  {
    "name": "Runara",
    "ac": 19,
    "hp": 212,
    "init": 0,
    "cr": 13,
    "type": "dragon",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/runara-dosi.js"
  },
  {
    "name": "Sinensa",
    "ac": 13,
    "hp": 60,
    "init": 0,
    "cr": 2,
    "type": "plant",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/sinensa-dosi.js"
  },
  {
    "name": "Spore Servant Octopus",
    "ac": 11,
    "hp": 52,
    "init": 1,
    "cr": 1,
    "type": "plant",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/spore-servant-octopus-dosi.js"
  },
  {
    "name": "Tarak",
    "ac": 13,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/tarak-dosi.js"
  },
  {
    "name": "Varnoth",
    "ac": 11,
    "hp": 39,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/varnoth-dosi.js"
  },
  {
    "name": "Violet Fungus",
    "ac": 5,
    "hp": 18,
    "init": -5,
    "cr": 0.25,
    "type": "plant",
    "source": "Dragons of Stormwreck Isle",
    "htmlLink": "./custom/index.html?file=dosi/violet-fungus-dosi.js"
  },
  {
    "name": "Boromar Smuggler",
    "ac": 13,
    "hp": 27,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/boromar-smuggler-efa.js"
  },
  {
    "name": "Boromar Underboss",
    "ac": 16,
    "hp": 104,
    "init": 4,
    "cr": 8,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/boromar-underboss-efa.js"
  },
  {
    "name": "Cannith Artificer",
    "ac": 16,
    "hp": 71,
    "init": 1,
    "cr": 4,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/cannith-artificer-efa.js"
  },
  {
    "name": "Daask Bruiser",
    "ac": 17,
    "hp": 150,
    "init": 1,
    "cr": 9,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/daask-bruiser-efa.js"
  },
  {
    "name": "Daask Raider",
    "ac": 15,
    "hp": 33,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/daask-raider-efa.js"
  },
  {
    "name": "Dreaming Dark Infiltrator",
    "ac": 15,
    "hp": 104,
    "init": 3,
    "cr": 7,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/dreaming-dark-infiltrator-efa.js"
  },
  {
    "name": "Dreaming Dark Mindkiller",
    "ac": 19,
    "hp": 180,
    "init": 4,
    "cr": 11,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/dreaming-dark-mindkiller-efa.js"
  },
  {
    "name": "Emerald Claw Commander",
    "ac": 20,
    "hp": 78,
    "init": 0,
    "cr": 4,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/emerald-claw-commander-efa.js"
  },
  {
    "name": "Emerald Claw Knight",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/emerald-claw-knight-efa.js"
  },
  {
    "name": "Ghallanda Troubleshooter",
    "ac": 14,
    "hp": 78,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/ghallanda-troubleshooter-efa.js"
  },
  {
    "name": "Homunculus Servant",
    "ac": 13,
    "hp": 5,
    "init": 2,
    "cr": 0,
    "type": "construct",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/homunculus-servant-efa.js"
  },
  {
    "name": "Jorasco Medic",
    "ac": 16,
    "hp": 58,
    "init": 2,
    "cr": 4,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/jorasco-medic-efa.js"
  },
  {
    "name": "Kundarak Warden",
    "ac": 14,
    "hp": 82,
    "init": 1,
    "cr": 5,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/kundarak-warden-efa.js"
  },
  {
    "name": "Lyrandar Scion",
    "ac": 13,
    "hp": 60,
    "init": 3,
    "cr": 4,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/lyrandar-scion-efa.js"
  },
  {
    "name": "Medani Inquisitive",
    "ac": 14,
    "hp": 45,
    "init": 0,
    "cr": 3,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/medani-inquisitive-efa.js"
  },
  {
    "name": "Orien Enforcer",
    "ac": 16,
    "hp": 55,
    "init": 4,
    "cr": 4,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/orien-enforcer-efa.js"
  },
  {
    "name": "Sentinel Marshal",
    "ac": 16,
    "hp": 110,
    "init": 4,
    "cr": 6,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/sentinel-marshal-efa.js"
  },
  {
    "name": "Shadow-Marked Agent",
    "ac": 17,
    "hp": 132,
    "init": 5,
    "cr": 7,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/shadow-marked-agent-efa.js"
  },
  {
    "name": "Sivis Scribe",
    "ac": 15,
    "hp": 56,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/sivis-scribe-efa.js"
  },
  {
    "name": "Steel Defender",
    "ac": null,
    "hp": 5,
    "init": 1,
    "cr": 0,
    "type": "construct",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/steel-defender-efa.js"
  },
  {
    "name": "Tarkanan Marauder",
    "ac": 16,
    "hp": 247,
    "init": 3,
    "cr": 11,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/tarkanan-marauder-efa.js"
  },
  {
    "name": "Tarkanan Ruffian",
    "ac": 13,
    "hp": 32,
    "init": 1,
    "cr": 1,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/tarkanan-ruffian-efa.js"
  },
  {
    "name": "Tharashk Hunter",
    "ac": 16,
    "hp": 97,
    "init": 4,
    "cr": 6,
    "type": "or Medium humanoid (human",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/tharashk-hunter-efa.js"
  },
  {
    "name": "Umbragen Shadow Walker",
    "ac": 14,
    "hp": 162,
    "init": 4,
    "cr": 9,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/umbragen-shadow-walker-efa.js"
  },
  {
    "name": "Vadalis Heir",
    "ac": 14,
    "hp": 52,
    "init": 3,
    "cr": 4,
    "type": "or Medium humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/vadalis-heir-efa.js"
  },
  {
    "name": "Vulkoori Stingblade",
    "ac": 14,
    "hp": 27,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/vulkoori-stingblade-efa.js"
  },
  {
    "name": "Vulkoori Venom Priest",
    "ac": 15,
    "hp": 44,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Explorer's Guide to Wildemount",
    "htmlLink": "./custom/index.html?file=efa/vulkoori-venom-priest-efa.js"
  },
  {
    "name": "Belashyrra",
    "ac": 19,
    "hp": 304,
    "init": 5,
    "cr": 22,
    "type": "aberration",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/belashyrra-erlw.js"
  },
  {
    "name": "Bone Knight",
    "ac": 20,
    "hp": 84,
    "init": 1,
    "cr": 5,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/bone-knight-erlw.js"
  },
  {
    "name": "Changeling",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid (changeling",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/changeling-erlw.js"
  },
  {
    "name": "Clawfoot",
    "ac": 13,
    "hp": 19,
    "init": 3,
    "cr": 1,
    "type": "beast",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/clawfoot-erlw.js"
  },
  {
    "name": "Corrin Delmaco",
    "ac": 12,
    "hp": 21,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/corrin-delmaco-erlw.js"
  },
  {
    "name": "Dolgaunt",
    "ac": 16,
    "hp": 33,
    "init": 4,
    "cr": 3,
    "type": "aberration",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/dolgaunt-erlw.js"
  },
  {
    "name": "Dolgrim",
    "ac": 15,
    "hp": 13,
    "init": 2,
    "cr": 0.5,
    "type": "aberration",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/dolgrim-erlw.js"
  },
  {
    "name": "Dusk Hag",
    "ac": 17,
    "hp": 82,
    "init": 2,
    "cr": 6,
    "type": "fey",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/dusk-hag-erlw.js"
  },
  {
    "name": "Dyrrn",
    "ac": 21,
    "hp": 325,
    "init": 5,
    "cr": 24,
    "type": "aberration",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/dyrrn-erlw.js"
  },
  {
    "name": "Expeditious Messenger",
    "ac": 13,
    "hp": 7,
    "init": 3,
    "cr": 0.125,
    "type": "construct",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/expeditious-messenger-erlw.js"
  },
  {
    "name": "Fastieth",
    "ac": 14,
    "hp": 9,
    "init": 4,
    "cr": 0.25,
    "type": "beast",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/fastieth-erlw.js"
  },
  {
    "name": "Garra",
    "ac": 12,
    "hp": 30,
    "init": 0,
    "cr": 1,
    "type": "giant",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/garra-erlw.js"
  },
  {
    "name": "Hashalaq Quori",
    "ac": 17,
    "hp": 99,
    "init": 2,
    "cr": 9,
    "type": "aberration",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/hashalaq-quori-erlw.js"
  },
  {
    "name": "Inspired",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/inspired-erlw.js"
  },
  {
    "name": "Iron Defender",
    "ac": 17,
    "hp": 30,
    "init": 2,
    "cr": 1,
    "type": "construct",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/iron-defender-erlw.js"
  },
  {
    "name": "Kalaraq Quori",
    "ac": 18,
    "hp": 161,
    "init": 5,
    "cr": 19,
    "type": "aberration",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/kalaraq-quori-erlw.js"
  },
  {
    "name": "Kalashtar",
    "ac": 12,
    "hp": 16,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/kalashtar-erlw.js"
  },
  {
    "name": "Karrnathi Undead Soldier",
    "ac": 17,
    "hp": 52,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/karrnathi-undead-soldier-erlw.js"
  },
  {
    "name": "Lady Illmarrow",
    "ac": 19,
    "hp": 199,
    "init": 3,
    "cr": 22,
    "type": "undead",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/lady-illmarrow-erlw.js"
  },
  {
    "name": "Living Burning Hands",
    "ac": 15,
    "hp": 15,
    "init": 1,
    "cr": 1,
    "type": "construct",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/living-burning-hands-erlw.js"
  },
  {
    "name": "Living Cloudkill",
    "ac": 15,
    "hp": 73,
    "init": 2,
    "cr": 7,
    "type": "construct",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/living-cloudkill-erlw.js"
  },
  {
    "name": "Living Lightning Bolt",
    "ac": 15,
    "hp": 57,
    "init": 2,
    "cr": 5,
    "type": "construct",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/living-lightning-bolt-erlw.js"
  },
  {
    "name": "Magewright",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/magewright-erlw.js"
  },
  {
    "name": "Mordakhesh",
    "ac": 18,
    "hp": 170,
    "init": 3,
    "cr": 15,
    "type": "fiend",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/mordakhesh-erlw.js"
  },
  {
    "name": "Radiant Idol",
    "ac": 18,
    "hp": 142,
    "init": 4,
    "cr": 11,
    "type": "celestial",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/radiant-idol-erlw.js"
  },
  {
    "name": "Rak Tulkhesh",
    "ac": 23,
    "hp": 478,
    "init": 4,
    "cr": 28,
    "type": "fiend",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/rak-tulkhesh-erlw.js"
  },
  {
    "name": "Sergeant",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/sergeant-erlw.js"
  },
  {
    "name": "Shifter",
    "ac": 14,
    "hp": 19,
    "init": 3,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/shifter-erlw.js"
  },
  {
    "name": "Sul Khatesh",
    "ac": 22,
    "hp": 475,
    "init": 5,
    "cr": 28,
    "type": "fiend",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/sul-khatesh-erlw.js"
  },
  {
    "name": "Tarkanan Assassin",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/tarkanan-assassin-erlw.js"
  },
  {
    "name": "The Lord of Blades",
    "ac": 19,
    "hp": 195,
    "init": 2,
    "cr": 18,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/the-lord-of-blades-erlw.js"
  },
  {
    "name": "Tsucora Quori",
    "ac": 16,
    "hp": 68,
    "init": 2,
    "cr": 7,
    "type": "aberration",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/tsucora-quori-erlw.js"
  },
  {
    "name": "Undying Councilor",
    "ac": 17,
    "hp": 104,
    "init": 0,
    "cr": 10,
    "type": "undead",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/undying-councilor-erlw.js"
  },
  {
    "name": "Undying Soldier",
    "ac": 17,
    "hp": 26,
    "init": 1,
    "cr": 2,
    "type": "undead",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/undying-soldier-erlw.js"
  },
  {
    "name": "Valenar Hawk",
    "ac": 14,
    "hp": 10,
    "init": 4,
    "cr": 0.125,
    "type": "fey",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/valenar-hawk-erlw.js"
  },
  {
    "name": "Valenar Hound",
    "ac": 14,
    "hp": 19,
    "init": 2,
    "cr": 0.5,
    "type": "fey",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/valenar-hound-erlw.js"
  },
  {
    "name": "Valenar Steed",
    "ac": 13,
    "hp": 22,
    "init": 3,
    "cr": 0.5,
    "type": "fey",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/valenar-steed-erlw.js"
  },
  {
    "name": "Warforged Colossus",
    "ac": 23,
    "hp": 410,
    "init": 0,
    "cr": 25,
    "type": "construct",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/warforged-colossus-erlw.js"
  },
  {
    "name": "Warforged Soldier",
    "ac": 16,
    "hp": 30,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/warforged-soldier-erlw.js"
  },
  {
    "name": "Warforged Titan",
    "ac": 20,
    "hp": 125,
    "init": -1,
    "cr": 8,
    "type": "construct",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/warforged-titan-erlw.js"
  },
  {
    "name": "Zakya Rakshasa",
    "ac": 18,
    "hp": 59,
    "init": 2,
    "cr": 5,
    "type": "fiend",
    "source": "Eberron: Rising from the Last War",
    "htmlLink": "./custom/index.html?file=erlw/zakya-rakshasa-erlw.js"
  },
  {
    "name": "Adult Deep Dragon",
    "ac": 17,
    "hp": 161,
    "init": 2,
    "cr": 11,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/adult-deep-dragon-fraif.js"
  },
  {
    "name": "Adult Spirit Dragon",
    "ac": 18,
    "hp": 207,
    "init": 2,
    "cr": 15,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/adult-spirit-dragon-fraif.js"
  },
  {
    "name": "Ancient Deep Dragon",
    "ac": 20,
    "hp": 247,
    "init": 3,
    "cr": 18,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/ancient-deep-dragon-fraif.js"
  },
  {
    "name": "Ancient Spirit Dragon",
    "ac": 21,
    "hp": 420,
    "init": 2,
    "cr": 22,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/ancient-spirit-dragon-fraif.js"
  },
  {
    "name": "Aranea",
    "ac": 14,
    "hp": 66,
    "init": 3,
    "cr": 2,
    "type": "monstrosity",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/aranea-fraif.js"
  },
  {
    "name": "Beast of Malar",
    "ac": 17,
    "hp": 168,
    "init": 3,
    "cr": 11,
    "type": "monstrosity",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/beast-of-malar-fraif.js"
  },
  {
    "name": "Biha Babir",
    "ac": 17,
    "hp": 229,
    "init": 1,
    "cr": 12,
    "type": "elemental",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/biha-babir-fraif.js"
  },
  {
    "name": "Cultist of Bane",
    "ac": 16,
    "hp": 142,
    "init": 2,
    "cr": 9,
    "type": "or Medium humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/cultist-of-bane-fraif.js"
  },
  {
    "name": "Cultist of Bhaal",
    "ac": 16,
    "hp": 144,
    "init": 4,
    "cr": 7,
    "type": "or Medium humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/cultist-of-bhaal-fraif.js"
  },
  {
    "name": "Cultist of Myrkul",
    "ac": 16,
    "hp": 204,
    "init": 2,
    "cr": 11,
    "type": "or Medium humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/cultist-of-myrkul-fraif.js"
  },
  {
    "name": "Dead Three Scion",
    "ac": 17,
    "hp": 221,
    "init": 2,
    "cr": 16,
    "type": "or Medium humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/dead-three-scion-fraif.js"
  },
  {
    "name": "Deep Dragon Wyrmling",
    "ac": 15,
    "hp": 27,
    "init": 0,
    "cr": 1,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/deep-dragon-wyrmling-fraif.js"
  },
  {
    "name": "Domestic Wonder",
    "ac": 9,
    "hp": 5,
    "init": -1,
    "cr": 0,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/domestic-wonder-fraif.js"
  },
  {
    "name": "Drow Elite Warrior of Lolth",
    "ac": 18,
    "hp": 71,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/drow-elite-warrior-of-lolth-fraif.js"
  },
  {
    "name": "Drow Mage of Lolth",
    "ac": 15,
    "hp": 81,
    "init": 2,
    "cr": 7,
    "type": "humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/drow-mage-of-lolth-fraif.js"
  },
  {
    "name": "Drow of Lolth",
    "ac": 15,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/drow-of-lolth-fraif.js"
  },
  {
    "name": "Drow Priestess of Lolth",
    "ac": 16,
    "hp": 99,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/drow-priestess-of-lolth-fraif.js"
  },
  {
    "name": "Flying Wonder",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/flying-wonder-fraif.js"
  },
  {
    "name": "Karas Chembryl",
    "ac": 17,
    "hp": 104,
    "init": 5,
    "cr": 8,
    "type": "humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/karas-chembryl-fraif.js"
  },
  {
    "name": "Manshoon",
    "ac": 15,
    "hp": 214,
    "init": 2,
    "cr": 13,
    "type": "humanoid (human",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/manshoon-fraif.js"
  },
  {
    "name": "Nimblewright Guard",
    "ac": 16,
    "hp": 67,
    "init": 4,
    "cr": 3,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/nimblewright-guard-fraif.js"
  },
  {
    "name": "Nimblewright Hulk",
    "ac": 18,
    "hp": 104,
    "init": 4,
    "cr": 7,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/nimblewright-hulk-fraif.js"
  },
  {
    "name": "Nimblewright Steed",
    "ac": 16,
    "hp": 47,
    "init": 4,
    "cr": 2,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/nimblewright-steed-fraif.js"
  },
  {
    "name": "Phaerimm Agent",
    "ac": 15,
    "hp": 123,
    "init": 4,
    "cr": 8,
    "type": "aberration",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/phaerimm-agent-fraif.js"
  },
  {
    "name": "Phaerimm Hatchling",
    "ac": 12,
    "hp": 13,
    "init": 1,
    "cr": 0.25,
    "type": "aberration",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/phaerimm-hatchling-fraif.js"
  },
  {
    "name": "Polar Serpent",
    "ac": 14,
    "hp": 58,
    "init": 4,
    "cr": 3,
    "type": "elemental",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/polar-serpent-fraif.js"
  },
  {
    "name": "Queen Forfallen",
    "ac": 16,
    "hp": 153,
    "init": 2,
    "cr": 10,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/queen-forfallen-fraif.js"
  },
  {
    "name": "Rusted Behemoth",
    "ac": 18,
    "hp": 157,
    "init": 0,
    "cr": 9,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/rusted-behemoth-fraif.js"
  },
  {
    "name": "Rusted Berserker",
    "ac": 16,
    "hp": 82,
    "init": 2,
    "cr": 4,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/rusted-berserker-fraif.js"
  },
  {
    "name": "Rusted Wyrm",
    "ac": 20,
    "hp": 231,
    "init": 1,
    "cr": 14,
    "type": "construct",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/rusted-wyrm-fraif.js"
  },
  {
    "name": "Sammaster (Dracolich Form)",
    "ac": 20,
    "hp": 276,
    "init": 0,
    "cr": 22,
    "type": "undead",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/sammaster-dracolich-form-fraif.js"
  },
  {
    "name": "Sammaster (Lich Form)",
    "ac": 18,
    "hp": 322,
    "init": 2,
    "cr": 22,
    "type": "undead",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/sammaster-lich-form-fraif.js"
  },
  {
    "name": "Spirit Dragon Wyrmling",
    "ac": 16,
    "hp": 52,
    "init": 1,
    "cr": 2,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/spirit-dragon-wyrmling-fraif.js"
  },
  {
    "name": "Spore of Moander",
    "ac": 19,
    "hp": 230,
    "init": -1,
    "cr": 12,
    "type": "plant",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/spore-of-moander-fraif.js"
  },
  {
    "name": "Swanmay",
    "ac": 14,
    "hp": 71,
    "init": 4,
    "cr": 3,
    "type": "fey",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/swanmay-fraif.js"
  },
  {
    "name": "Valindra Shadowmantle",
    "ac": 20,
    "hp": 315,
    "init": 3,
    "cr": 21,
    "type": "undead",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/valindra-shadowmantle-fraif.js"
  },
  {
    "name": "Werewyvern",
    "ac": 16,
    "hp": 152,
    "init": 2,
    "cr": 8,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/werewyvern-fraif.js"
  },
  {
    "name": "Young Deep Dragon",
    "ac": 16,
    "hp": 93,
    "init": 1,
    "cr": 5,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/young-deep-dragon-fraif.js"
  },
  {
    "name": "Young Spirit Dragon",
    "ac": 17,
    "hp": 152,
    "init": 1,
    "cr": 8,
    "type": "dragon",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/young-spirit-dragon-fraif.js"
  },
  {
    "name": "Zhentilar Paladin of Bane",
    "ac": 18,
    "hp": 58,
    "init": 0,
    "cr": 4,
    "type": "or Medium humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/zhentilar-paladin-of-bane-fraif.js"
  },
  {
    "name": "Zhentilar Soldier",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "or Medium humanoid",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/zhentilar-soldier-fraif.js"
  },
  {
    "name": "Zlan",
    "ac": 18,
    "hp": 199,
    "init": 1,
    "cr": 18,
    "type": "undead",
    "source": "Frozen Sick (Adventures)",
    "htmlLink": "./custom/index.html?file=fraif/zlan-fraif.js"
  },
  {
    "name": "Adult Amethyst Dragon",
    "ac": 19,
    "hp": 229,
    "init": 2,
    "cr": 16,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/adult-amethyst-dragon-ftd.js"
  },
  {
    "name": "Adult Crystal Dragon",
    "ac": 16,
    "hp": 172,
    "init": 1,
    "cr": 12,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/adult-crystal-dragon-ftd.js"
  },
  {
    "name": "Adult Emerald Dragon",
    "ac": 18,
    "hp": 207,
    "init": 1,
    "cr": 14,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/adult-emerald-dragon-ftd.js"
  },
  {
    "name": "Adult Moonstone Dragon",
    "ac": 19,
    "hp": 195,
    "init": 4,
    "cr": 15,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/adult-moonstone-dragon-ftd.js"
  },
  {
    "name": "Adult Sapphire Dragon",
    "ac": 18,
    "hp": 225,
    "init": 2,
    "cr": 15,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/adult-sapphire-dragon-ftd.js"
  },
  {
    "name": "Adult Topaz Dragon",
    "ac": 18,
    "hp": 210,
    "init": 1,
    "cr": 13,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/adult-topaz-dragon-ftd.js"
  },
  {
    "name": "Amethyst Dragon Wyrmling",
    "ac": 17,
    "hp": 75,
    "init": 0,
    "cr": 4,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/amethyst-dragon-wyrmling-ftd.js"
  },
  {
    "name": "Amethyst Greatwyrm",
    "ac": 21,
    "hp": 507,
    "init": 2,
    "cr": 26,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/amethyst-greatwyrm-ftd.js"
  },
  {
    "name": "Ancient Amethyst Dragon",
    "ac": 20,
    "hp": 444,
    "init": 2,
    "cr": 23,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ancient-amethyst-dragon-ftd.js"
  },
  {
    "name": "Ancient Crystal Dragon",
    "ac": 20,
    "hp": 222,
    "init": 1,
    "cr": 19,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ancient-crystal-dragon-ftd.js"
  },
  {
    "name": "Ancient Dragon Turtle",
    "ac": 22,
    "hp": 409,
    "init": 1,
    "cr": 24,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ancient-dragon-turtle-ftd.js"
  },
  {
    "name": "Ancient Emerald Dragon",
    "ac": 20,
    "hp": 332,
    "init": 1,
    "cr": 21,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ancient-emerald-dragon-ftd.js"
  },
  {
    "name": "Ancient Moonstone Dragon",
    "ac": 20,
    "hp": 330,
    "init": 4,
    "cr": 21,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ancient-moonstone-dragon-ftd.js"
  },
  {
    "name": "Ancient Sapphire Dragon",
    "ac": 20,
    "hp": 370,
    "init": 2,
    "cr": 22,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ancient-sapphire-dragon-ftd.js"
  },
  {
    "name": "Ancient Sea Serpent",
    "ac": 17,
    "hp": 170,
    "init": 2,
    "cr": 14,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ancient-sea-serpent-ftd.js"
  },
  {
    "name": "Ancient Topaz Dragon",
    "ac": 20,
    "hp": 280,
    "init": 1,
    "cr": 20,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ancient-topaz-dragon-ftd.js"
  },
  {
    "name": "Animated Breath",
    "ac": 15,
    "hp": 95,
    "init": 0,
    "cr": 6,
    "type": "elemental",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/animated-breath-ftd.js"
  },
  {
    "name": "Aspect of Bahamut",
    "ac": 23,
    "hp": 585,
    "init": 4,
    "cr": 30,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/aspect-of-bahamut-ftd.js"
  },
  {
    "name": "Aspect of Tiamat",
    "ac": 23,
    "hp": 574,
    "init": 2,
    "cr": 30,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/aspect-of-tiamat-ftd.js"
  },
  {
    "name": "Black Greatwyrm",
    "ac": 22,
    "hp": 533,
    "init": 2,
    "cr": 27,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/black-greatwyrm-ftd.js"
  },
  {
    "name": "Blue Greatwyrm",
    "ac": 22,
    "hp": 533,
    "init": 2,
    "cr": 27,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/blue-greatwyrm-ftd.js"
  },
  {
    "name": "Brass Greatwyrm",
    "ac": 22,
    "hp": 565,
    "init": 3,
    "cr": 28,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/brass-greatwyrm-ftd.js"
  },
  {
    "name": "Bronze Greatwyrm",
    "ac": 22,
    "hp": 565,
    "init": 3,
    "cr": 28,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/bronze-greatwyrm-ftd.js"
  },
  {
    "name": "Copper Greatwyrm",
    "ac": 22,
    "hp": 565,
    "init": 3,
    "cr": 28,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/copper-greatwyrm-ftd.js"
  },
  {
    "name": "Crystal Dragon Wyrmling",
    "ac": 14,
    "hp": 32,
    "init": 1,
    "cr": 2,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/crystal-dragon-wyrmling-ftd.js"
  },
  {
    "name": "Crystal Greatwyrm",
    "ac": 21,
    "hp": 507,
    "init": 2,
    "cr": 26,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/crystal-greatwyrm-ftd.js"
  },
  {
    "name": "Dracohydra",
    "ac": 17,
    "hp": 218,
    "init": 1,
    "cr": 11,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dracohydra-ftd.js"
  },
  {
    "name": "Draconian Dreadnought",
    "ac": 16,
    "hp": 57,
    "init": 0,
    "cr": 4,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/draconian-dreadnought-ftd.js"
  },
  {
    "name": "Draconian Foot Soldier",
    "ac": 14,
    "hp": 22,
    "init": 0,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/draconian-foot-soldier-ftd.js"
  },
  {
    "name": "Draconian Infiltrator",
    "ac": 15,
    "hp": 39,
    "init": 3,
    "cr": 3,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/draconian-infiltrator-ftd.js"
  },
  {
    "name": "Draconian Mage",
    "ac": 15,
    "hp": 40,
    "init": 0,
    "cr": 2,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/draconian-mage-ftd.js"
  },
  {
    "name": "Draconian Mastermind",
    "ac": 17,
    "hp": 67,
    "init": 2,
    "cr": 6,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/draconian-mastermind-ftd.js"
  },
  {
    "name": "Draconic Shard",
    "ac": 17,
    "hp": 168,
    "init": 1,
    "cr": 17,
    "type": "undead",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/draconic-shard-ftd.js"
  },
  {
    "name": "Dragon Blessed",
    "ac": 14,
    "hp": 75,
    "init": 0,
    "cr": 5,
    "type": "humanoid",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragon-blessed-ftd.js"
  },
  {
    "name": "Dragon Chosen",
    "ac": 17,
    "hp": 45,
    "init": 4,
    "cr": 3,
    "type": "humanoid",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragon-chosen-ftd.js"
  },
  {
    "name": "Dragon Speaker",
    "ac": 13,
    "hp": 36,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragon-speaker-ftd.js"
  },
  {
    "name": "Dragon Turtle Wyrmling",
    "ac": 18,
    "hp": 90,
    "init": 0,
    "cr": 4,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragon-turtle-wyrmling-ftd.js"
  },
  {
    "name": "Dragonblood Ooze",
    "ac": 14,
    "hp": 68,
    "init": -2,
    "cr": 5,
    "type": "ooze",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragonblood-ooze-ftd.js"
  },
  {
    "name": "Dragonbone Golem",
    "ac": 17,
    "hp": 161,
    "init": 0,
    "cr": 11,
    "type": "construct",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragonbone-golem-ftd.js"
  },
  {
    "name": "Dragonborn of Bahamut",
    "ac": 18,
    "hp": 93,
    "init": 1,
    "cr": 8,
    "type": "humanoid",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragonborn-of-bahamut-ftd.js"
  },
  {
    "name": "Dragonborn of Sardior",
    "ac": 17,
    "hp": 75,
    "init": 3,
    "cr": 6,
    "type": "humanoid",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragonborn-of-sardior-ftd.js"
  },
  {
    "name": "Dragonborn of Tiamat",
    "ac": 18,
    "hp": 85,
    "init": 0,
    "cr": 7,
    "type": "humanoid",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragonborn-of-tiamat-ftd.js"
  },
  {
    "name": "Dragonflesh Abomination",
    "ac": 15,
    "hp": 66,
    "init": 2,
    "cr": 6,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragonflesh-abomination-ftd.js"
  },
  {
    "name": "Dragonflesh Grafter",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragonflesh-grafter-ftd.js"
  },
  {
    "name": "Dragonnel",
    "ac": 13,
    "hp": 58,
    "init": 2,
    "cr": 2,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/dragonnel-ftd.js"
  },
  {
    "name": "Drake Companion",
    "ac": null,
    "hp": 5,
    "init": 1,
    "cr": 0,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/drake-companion-ftd.js"
  },
  {
    "name": "Egg Hunter Adult",
    "ac": 16,
    "hp": 52,
    "init": 5,
    "cr": 5,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/egg-hunter-adult-ftd.js"
  },
  {
    "name": "Egg Hunter Hatchling",
    "ac": 14,
    "hp": 28,
    "init": 3,
    "cr": 2,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/egg-hunter-hatchling-ftd.js"
  },
  {
    "name": "Elder Brain Dragon",
    "ac": 17,
    "hp": 350,
    "init": 1,
    "cr": 22,
    "type": "aberration",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/elder-brain-dragon-ftd.js"
  },
  {
    "name": "Emerald Dragon Wyrmling",
    "ac": 16,
    "hp": 39,
    "init": 1,
    "cr": 2,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/emerald-dragon-wyrmling-ftd.js"
  },
  {
    "name": "Emerald Greatwyrm",
    "ac": 21,
    "hp": 507,
    "init": 2,
    "cr": 26,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/emerald-greatwyrm-ftd.js"
  },
  {
    "name": "Eyedrake",
    "ac": 16,
    "hp": 119,
    "init": 0,
    "cr": 8,
    "type": "aberration",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/eyedrake-ftd.js"
  },
  {
    "name": "Gem Stalker",
    "ac": 17,
    "hp": 67,
    "init": 2,
    "cr": 5,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/gem-stalker-ftd.js"
  },
  {
    "name": "Ghost Dragon",
    "ac": 10,
    "hp": 324,
    "init": 0,
    "cr": 17,
    "type": "undead",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/ghost-dragon-ftd.js"
  },
  {
    "name": "Giant Canary",
    "ac": 12,
    "hp": 26,
    "init": 2,
    "cr": 0.5,
    "type": "beast",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/giant-canary-ftd.js"
  },
  {
    "name": "Gold Greatwyrm",
    "ac": 22,
    "hp": 565,
    "init": 3,
    "cr": 28,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/gold-greatwyrm-ftd.js"
  },
  {
    "name": "Green Greatwyrm",
    "ac": 22,
    "hp": 533,
    "init": 2,
    "cr": 27,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/green-greatwyrm-ftd.js"
  },
  {
    "name": "Hoard Mimic",
    "ac": 14,
    "hp": 123,
    "init": 1,
    "cr": 8,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/hoard-mimic-ftd.js"
  },
  {
    "name": "Hoard Scarab",
    "ac": 14,
    "hp": 7,
    "init": 3,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/hoard-scarab-ftd.js"
  },
  {
    "name": "Hollow Dragon",
    "ac": 19,
    "hp": 241,
    "init": 1,
    "cr": 18,
    "type": "undead",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/hollow-dragon-ftd.js"
  },
  {
    "name": "Liondrake",
    "ac": 16,
    "hp": 119,
    "init": 2,
    "cr": 7,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/liondrake-ftd.js"
  },
  {
    "name": "Metallic Peacekeeper",
    "ac": 17,
    "hp": 68,
    "init": 0,
    "cr": 4,
    "type": "construct",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/metallic-peacekeeper-ftd.js"
  },
  {
    "name": "Metallic Warbler",
    "ac": 14,
    "hp": 14,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/metallic-warbler-ftd.js"
  },
  {
    "name": "Moonstone Dragon Wyrmling",
    "ac": 17,
    "hp": 39,
    "init": 2,
    "cr": 2,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/moonstone-dragon-wyrmling-ftd.js"
  },
  {
    "name": "Red Greatwyrm",
    "ac": 22,
    "hp": 533,
    "init": 2,
    "cr": 27,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/red-greatwyrm-ftd.js"
  },
  {
    "name": "Sapphire Dragon Wyrmling",
    "ac": 16,
    "hp": 45,
    "init": 2,
    "cr": 3,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/sapphire-dragon-wyrmling-ftd.js"
  },
  {
    "name": "Sapphire Greatwyrm",
    "ac": 21,
    "hp": 507,
    "init": 2,
    "cr": 26,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/sapphire-greatwyrm-ftd.js"
  },
  {
    "name": "Silver Greatwyrm",
    "ac": 22,
    "hp": 565,
    "init": 3,
    "cr": 28,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/silver-greatwyrm-ftd.js"
  },
  {
    "name": "Swarm of Hoard Scarabs",
    "ac": 14,
    "hp": 31,
    "init": 3,
    "cr": 2,
    "type": "monstrosity",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/swarm-of-hoard-scarabs-ftd.js"
  },
  {
    "name": "Topaz Dragon Wyrmling",
    "ac": 16,
    "hp": 33,
    "init": 1,
    "cr": 2,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/topaz-dragon-wyrmling-ftd.js"
  },
  {
    "name": "Topaz Greatwyrm",
    "ac": 21,
    "hp": 507,
    "init": 2,
    "cr": 26,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/topaz-greatwyrm-ftd.js"
  },
  {
    "name": "White Greatwyrm",
    "ac": 22,
    "hp": 533,
    "init": 2,
    "cr": 27,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/white-greatwyrm-ftd.js"
  },
  {
    "name": "Young Amethyst Dragon",
    "ac": 18,
    "hp": 168,
    "init": 1,
    "cr": 9,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/young-amethyst-dragon-ftd.js"
  },
  {
    "name": "Young Crystal Dragon",
    "ac": 15,
    "hp": 95,
    "init": 1,
    "cr": 5,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/young-crystal-dragon-ftd.js"
  },
  {
    "name": "Young Dragon Turtle",
    "ac": 19,
    "hp": 178,
    "init": 0,
    "cr": 10,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/young-dragon-turtle-ftd.js"
  },
  {
    "name": "Young Emerald Dragon",
    "ac": 17,
    "hp": 142,
    "init": 1,
    "cr": 8,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/young-emerald-dragon-ftd.js"
  },
  {
    "name": "Young Moonstone Dragon",
    "ac": 18,
    "hp": 144,
    "init": 3,
    "cr": 8,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/young-moonstone-dragon-ftd.js"
  },
  {
    "name": "Young Sapphire Dragon",
    "ac": 17,
    "hp": 157,
    "init": 2,
    "cr": 9,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/young-sapphire-dragon-ftd.js"
  },
  {
    "name": "Young Sea Serpent",
    "ac": 16,
    "hp": 123,
    "init": 1,
    "cr": 8,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/young-sea-serpent-ftd.js"
  },
  {
    "name": "Young Topaz Dragon",
    "ac": 17,
    "hp": 127,
    "init": 1,
    "cr": 7,
    "type": "dragon",
    "source": "Fizban's Treasury of Dragons",
    "htmlLink": "./custom/index.html?file=ftd/young-topaz-dragon-ftd.js"
  },
  {
    "name": "Amphisbaena",
    "ac": 14,
    "hp": 11,
    "init": 4,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/amphisbaena-gos.js"
  },
  {
    "name": "Barnacle Bess",
    "ac": 15,
    "hp": 13,
    "init": 2,
    "cr": 0.125,
    "type": "beast",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/barnacle-bess-gos.js"
  },
  {
    "name": "Bullywug Croaker",
    "ac": 15,
    "hp": 33,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/bullywug-croaker-gos.js"
  },
  {
    "name": "Bullywug Royal",
    "ac": 15,
    "hp": 52,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/bullywug-royal-gos.js"
  },
  {
    "name": "Captain Xendros",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/captain-xendros-gos.js"
  },
  {
    "name": "Drowned Ascetic",
    "ac": 13,
    "hp": 75,
    "init": 3,
    "cr": 3,
    "type": "undead",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/drowned-ascetic-gos.js"
  },
  {
    "name": "Drowned Assassin",
    "ac": 14,
    "hp": 67,
    "init": 3,
    "cr": 4,
    "type": "undead",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/drowned-assassin-gos.js"
  },
  {
    "name": "Drowned Blade",
    "ac": 10,
    "hp": 45,
    "init": -1,
    "cr": 2,
    "type": "undead",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/drowned-blade-gos.js"
  },
  {
    "name": "Drowned Master",
    "ac": 14,
    "hp": 157,
    "init": 1,
    "cr": 9,
    "type": "undead",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/drowned-master-gos.js"
  },
  {
    "name": "Fish",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/fish-gos.js"
  },
  {
    "name": "Giant Coral Snake",
    "ac": 13,
    "hp": 90,
    "init": 3,
    "cr": 4,
    "type": "beast",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/giant-coral-snake-gos.js"
  },
  {
    "name": "Giant Sea Eel",
    "ac": 14,
    "hp": 19,
    "init": 2,
    "cr": 0.5,
    "type": "beast",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/giant-sea-eel-gos.js"
  },
  {
    "name": "Giant White Moray Eel",
    "ac": 12,
    "hp": 60,
    "init": 2,
    "cr": 2,
    "type": "beast",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/giant-white-moray-eel-gos.js"
  },
  {
    "name": "Harpy Matriarch",
    "ac": 14,
    "hp": 88,
    "init": 3,
    "cr": 5,
    "type": "monstrosity",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/harpy-matriarch-gos.js"
  },
  {
    "name": "Juvenile Kraken",
    "ac": 16,
    "hp": 207,
    "init": 0,
    "cr": 14,
    "type": "monstrosity",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/juvenile-kraken-gos.js"
  },
  {
    "name": "Koalinth",
    "ac": 14,
    "hp": 16,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/koalinth-gos.js"
  },
  {
    "name": "Koalinth Sergeant",
    "ac": 14,
    "hp": 33,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/koalinth-sergeant-gos.js"
  },
  {
    "name": "Krell Grohlg",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/krell-grohlg-gos.js"
  },
  {
    "name": "Kysh",
    "ac": 13,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/kysh-gos.js"
  },
  {
    "name": "Living Iron Statue",
    "ac": 16,
    "hp": 102,
    "init": 2,
    "cr": 5,
    "type": "construct",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/living-iron-statue-gos.js"
  },
  {
    "name": "Lizardfolk Commoner",
    "ac": 13,
    "hp": 16,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/lizardfolk-commoner-gos.js"
  },
  {
    "name": "Lizardfolk Render",
    "ac": 15,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/lizardfolk-render-gos.js"
  },
  {
    "name": "Lizardfolk Scaleshield",
    "ac": 16,
    "hp": 32,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/lizardfolk-scaleshield-gos.js"
  },
  {
    "name": "Lizardfolk Subchief",
    "ac": 14,
    "hp": 52,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/lizardfolk-subchief-gos.js"
  },
  {
    "name": "Locathah",
    "ac": 13,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/locathah-gos.js"
  },
  {
    "name": "Locathah Hunter",
    "ac": 14,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/locathah-hunter-gos.js"
  },
  {
    "name": "Master Refrum",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/master-refrum-gos.js"
  },
  {
    "name": "Maw of Sekolah",
    "ac": 12,
    "hp": 114,
    "init": 1,
    "cr": 7,
    "type": "monstrosity",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/maw-of-sekolah-gos.js"
  },
  {
    "name": "Merfolk Salvager",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/merfolk-salvager-gos.js"
  },
  {
    "name": "Merfolk Scout",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/merfolk-scout-gos.js"
  },
  {
    "name": "Minotaur Living Crystal Statue",
    "ac": 15,
    "hp": 136,
    "init": -1,
    "cr": 6,
    "type": "construct",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/minotaur-living-crystal-statue-gos.js"
  },
  {
    "name": "Monstrous Peryton",
    "ac": 14,
    "hp": 144,
    "init": 2,
    "cr": 11,
    "type": "monstrosity",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/monstrous-peryton-gos.js"
  },
  {
    "name": "Mr. Dory",
    "ac": 18,
    "hp": 170,
    "init": 5,
    "cr": 10,
    "type": "aberration",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/mr-dory-gos.js"
  },
  {
    "name": "Oceanus",
    "ac": 12,
    "hp": 30,
    "init": 1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/oceanus-gos.js"
  },
  {
    "name": "Othokent",
    "ac": 15,
    "hp": 78,
    "init": 1,
    "cr": 4,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/othokent-gos.js"
  },
  {
    "name": "Pirate Bosun",
    "ac": 12,
    "hp": 27,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/pirate-bosun-gos.js"
  },
  {
    "name": "Pirate Deck Wizard",
    "ac": 12,
    "hp": 32,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/pirate-deck-wizard-gos.js"
  },
  {
    "name": "Pirate First Mate",
    "ac": 16,
    "hp": 26,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/pirate-first-mate-gos.js"
  },
  {
    "name": "Rip Tide Priest",
    "ac": 13,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/rip-tide-priest-gos.js"
  },
  {
    "name": "Sahuagin Blademaster",
    "ac": 20,
    "hp": 97,
    "init": 1,
    "cr": 6,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sahuagin-blademaster-gos.js"
  },
  {
    "name": "Sahuagin Champion",
    "ac": 16,
    "hp": 71,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sahuagin-champion-gos.js"
  },
  {
    "name": "Sahuagin Coral Smasher",
    "ac": 14,
    "hp": 33,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sahuagin-coral-smasher-gos.js"
  },
  {
    "name": "Sahuagin Deep Diver",
    "ac": 15,
    "hp": 91,
    "init": 3,
    "cr": 4,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sahuagin-deep-diver-gos.js"
  },
  {
    "name": "Sahuagin Hatchling Swarm",
    "ac": 14,
    "hp": 52,
    "init": 4,
    "cr": 3,
    "type": "beast",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sahuagin-hatchling-swarm-gos.js"
  },
  {
    "name": "Sahuagin High Priestess",
    "ac": 14,
    "hp": 71,
    "init": 1,
    "cr": 5,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sahuagin-high-priestess-gos.js"
  },
  {
    "name": "Sahuagin Wave Shaper",
    "ac": 14,
    "hp": 60,
    "init": 1,
    "cr": 5,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sahuagin-wave-shaper-gos.js"
  },
  {
    "name": "Sanbalet",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sanbalet-gos.js"
  },
  {
    "name": "Sauriv",
    "ac": 13,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/sauriv-gos.js"
  },
  {
    "name": "Shell Shark",
    "ac": 18,
    "hp": 32,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/shell-shark-gos.js"
  },
  {
    "name": "Skeletal Alchemist",
    "ac": 11,
    "hp": 32,
    "init": 1,
    "cr": 0.5,
    "type": "undead",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/skeletal-alchemist-gos.js"
  },
  {
    "name": "Skeletal Juggernaut",
    "ac": 13,
    "hp": 142,
    "init": 2,
    "cr": 5,
    "type": "undead",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/skeletal-juggernaut-gos.js"
  },
  {
    "name": "Skeletal Swarm",
    "ac": 13,
    "hp": 60,
    "init": 2,
    "cr": 2,
    "type": "undead",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/skeletal-swarm-gos.js"
  },
  {
    "name": "Skum",
    "ac": 14,
    "hp": 93,
    "init": 0,
    "cr": 5,
    "type": "aberration",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/skum-gos.js"
  },
  {
    "name": "Thousand Teeth",
    "ac": 12,
    "hp": 93,
    "init": 0,
    "cr": 6,
    "type": "monstrosity",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/thousand-teeth-gos.js"
  },
  {
    "name": "Vampiric Jade Statue",
    "ac": 14,
    "hp": 114,
    "init": 2,
    "cr": 8,
    "type": "construct",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/vampiric-jade-statue-gos.js"
  },
  {
    "name": "Yalaga Maladwyn",
    "ac": 16,
    "hp": 71,
    "init": 2,
    "cr": 8,
    "type": "undead",
    "source": "Ghosts of Saltmarsh",
    "htmlLink": "./custom/index.html?file=gos/yalaga-maladwyn-gos.js"
  },
  {
    "name": "Curate",
    "ac": 12,
    "hp": 97,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/curate-hotb.js"
  },
  {
    "name": "Gray Ooze Glob",
    "ac": 9,
    "hp": 19,
    "init": -2,
    "cr": 0.5,
    "type": "ooze",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/gray-ooze-glob-hotb.js"
  },
  {
    "name": "Ivlis",
    "ac": 13,
    "hp": 49,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/ivlis-hotb.js"
  },
  {
    "name": "Jacko",
    "ac": 13,
    "hp": 22,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/jacko-hotb.js"
  },
  {
    "name": "Kuo-toa Marauder",
    "ac": 12,
    "hp": 22,
    "init": 0,
    "cr": 0.5,
    "type": "aberration",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/kuo-toa-marauder-hotb.js"
  },
  {
    "name": "Lizardfolk Warden",
    "ac": 15,
    "hp": 32,
    "init": 1,
    "cr": 1,
    "type": "elemental",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/lizardfolk-warden-hotb.js"
  },
  {
    "name": "Narthus",
    "ac": 13,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/narthus-hotb.js"
  },
  {
    "name": "Pral",
    "ac": 14,
    "hp": 52,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/pral-hotb.js"
  },
  {
    "name": "Sprite Skirmisher",
    "ac": 15,
    "hp": 10,
    "init": 4,
    "cr": 0.25,
    "type": "fey",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/sprite-skirmisher-hotb.js"
  },
  {
    "name": "Vinx",
    "ac": 13,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/vinx-hotb.js"
  },
  {
    "name": "Wight Lifedrinker",
    "ac": 14,
    "hp": 82,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Heroes of the Borderlands",
    "htmlLink": "./custom/index.html?file=hotb/wight-lifedrinker-hotb.js"
  },
  {
    "name": "Ambush Drake",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "dragon",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/ambush-drake-hotdq.js"
  },
  {
    "name": "Azbara Jos",
    "ac": 13,
    "hp": 39,
    "init": 3,
    "cr": 4,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/azbara-jos-hotdq.js"
  },
  {
    "name": "Blagothkus",
    "ac": 17,
    "hp": 138,
    "init": 1,
    "cr": 9,
    "type": "giant",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/blagothkus-hotdq.js"
  },
  {
    "name": "Captain Othelstan",
    "ac": 19,
    "hp": 93,
    "init": 0,
    "cr": 5,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/captain-othelstan-hotdq.js"
  },
  {
    "name": "Dragonclaw",
    "ac": 14,
    "hp": 16,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/dragonclaw-hotdq.js"
  },
  {
    "name": "Dragonwing",
    "ac": 14,
    "hp": 33,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/dragonwing-hotdq.js"
  },
  {
    "name": "Dralmorrer Borngray",
    "ac": 16,
    "hp": 52,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/dralmorrer-borngray-hotdq.js"
  },
  {
    "name": "Four-Armed Troll",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 6,
    "type": "giant",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/four-armed-troll-hotdq.js"
  },
  {
    "name": "Frulam Mondath",
    "ac": 16,
    "hp": 44,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/frulam-mondath-hotdq.js"
  },
  {
    "name": "Golden Stag",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/golden-stag-hotdq.js"
  },
  {
    "name": "Jamna Gleamsilver",
    "ac": 15,
    "hp": 22,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/jamna-gleamsilver-hotdq.js"
  },
  {
    "name": "Langdedrosa Cyanwrath",
    "ac": 17,
    "hp": 57,
    "init": 1,
    "cr": 4,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/langdedrosa-cyanwrath-hotdq.js"
  },
  {
    "name": "Leosin Erlanthar",
    "ac": 16,
    "hp": 60,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/leosin-erlanthar-hotdq.js"
  },
  {
    "name": "Linan Swift",
    "ac": 10,
    "hp": 8,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/linan-swift-hotdq.js"
  },
  {
    "name": "Ontharr Frume",
    "ac": 18,
    "hp": 117,
    "init": 0,
    "cr": 9,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/ontharr-frume-hotdq.js"
  },
  {
    "name": "Pharblex Spattergoo",
    "ac": 15,
    "hp": 59,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/pharblex-spattergoo-hotdq.js"
  },
  {
    "name": "Raggnar Redtooth",
    "ac": 11,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/raggnar-redtooth-hotdq.js"
  },
  {
    "name": "Rath Modar",
    "ac": 13,
    "hp": 71,
    "init": 3,
    "cr": 6,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/rath-modar-hotdq.js"
  },
  {
    "name": "Rezmir",
    "ac": 13,
    "hp": 90,
    "init": 3,
    "cr": 7,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/rezmir-hotdq.js"
  },
  {
    "name": "Sandesyl Morgia",
    "ac": 16,
    "hp": 144,
    "init": 4,
    "cr": 13,
    "type": "undead",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/sandesyl-morgia-hotdq.js"
  },
  {
    "name": "Talis the White",
    "ac": 18,
    "hp": 58,
    "init": 1,
    "cr": 5,
    "type": "humanoid",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/talis-the-white-hotdq.js"
  },
  {
    "name": "Trepsin",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 6,
    "type": "giant",
    "source": "Hoard of the Dragon Queen",
    "htmlLink": "./custom/index.html?file=hotdq/trepsin-hotdq.js"
  },
  {
    "name": "Aruk Thundercaller Thuunlakalaga",
    "ac": 12,
    "hp": 67,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/aruk-thundercaller-thuunlakalaga-idrotf.js"
  },
  {
    "name": "Arveiaturace",
    "ac": 20,
    "hp": 333,
    "init": 0,
    "cr": 20,
    "type": "dragon",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/arveiaturace-idrotf.js"
  },
  {
    "name": "Auril (First Form)",
    "ac": 13,
    "hp": 95,
    "init": 3,
    "cr": 9,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/auril-first-form-idrotf.js"
  },
  {
    "name": "Auril (Second Form)",
    "ac": 16,
    "hp": 136,
    "init": 3,
    "cr": 10,
    "type": "elemental",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/auril-second-form-idrotf.js"
  },
  {
    "name": "Auril (Third Form)",
    "ac": 19,
    "hp": 136,
    "init": 1,
    "cr": 11,
    "type": "elemental",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/auril-third-form-idrotf.js"
  },
  {
    "name": "Avarice",
    "ac": 13,
    "hp": 84,
    "init": 3,
    "cr": 7,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/avarice-idrotf.js"
  },
  {
    "name": "Awakened White Moose",
    "ac": 11,
    "hp": 68,
    "init": 0,
    "cr": 3,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/awakened-white-moose-idrotf.js"
  },
  {
    "name": "Battlehammer Dwarf",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/battlehammer-dwarf-idrotf.js"
  },
  {
    "name": "Bjornhild Solvigsdottir",
    "ac": 12,
    "hp": 102,
    "init": 0,
    "cr": 5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/bjornhild-solvigsdottir-idrotf.js"
  },
  {
    "name": "Chardalyn Berserker",
    "ac": 13,
    "hp": 90,
    "init": 1,
    "cr": 4,
    "type": "fiend",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chardalyn-berserker-idrotf.js"
  },
  {
    "name": "Chardalyn Dragon",
    "ac": 17,
    "hp": 147,
    "init": 0,
    "cr": 11,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chardalyn-dragon-idrotf.js"
  },
  {
    "name": "Chimeric Baboon",
    "ac": 12,
    "hp": 3,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chimeric-baboon-idrotf.js"
  },
  {
    "name": "Chimeric Cat",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chimeric-cat-idrotf.js"
  },
  {
    "name": "Chimeric Fox",
    "ac": 13,
    "hp": 2,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chimeric-fox-idrotf.js"
  },
  {
    "name": "Chimeric Hare",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chimeric-hare-idrotf.js"
  },
  {
    "name": "Chimeric Rat",
    "ac": 10,
    "hp": 1,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chimeric-rat-idrotf.js"
  },
  {
    "name": "Chimeric Weasel",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chimeric-weasel-idrotf.js"
  },
  {
    "name": "Chwinga",
    "ac": 15,
    "hp": 5,
    "init": 5,
    "cr": 0,
    "type": "elemental",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/chwinga-idrotf.js"
  },
  {
    "name": "Coldlight Walker",
    "ac": 13,
    "hp": 82,
    "init": 0,
    "cr": 5,
    "type": "undead",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/coldlight-walker-idrotf.js"
  },
  {
    "name": "Demos Magen",
    "ac": 16,
    "hp": 51,
    "init": 2,
    "cr": 2,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/demos-magen-idrotf.js"
  },
  {
    "name": "Dzaan",
    "ac": 10,
    "hp": 49,
    "init": 0,
    "cr": 4,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/dzaan-idrotf.js"
  },
  {
    "name": "Dzaan's Simulacrum",
    "ac": 10,
    "hp": 24,
    "init": 0,
    "cr": 1,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/dzaans-simulacrum-idrotf.js"
  },
  {
    "name": "Fox",
    "ac": 13,
    "hp": 2,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/fox-idrotf.js"
  },
  {
    "name": "Frost Druid",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/frost-druid-idrotf.js"
  },
  {
    "name": "Frost Giant Skeleton",
    "ac": 14,
    "hp": 102,
    "init": -1,
    "cr": 6,
    "type": "undead",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/frost-giant-skeleton-idrotf.js"
  },
  {
    "name": "F'yorl",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0,
    "type": "aberration",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/fyorl-idrotf.js"
  },
  {
    "name": "Galvan Magen",
    "ac": 14,
    "hp": 68,
    "init": 4,
    "cr": 3,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/galvan-magen-idrotf.js"
  },
  {
    "name": "Giant Walrus",
    "ac": 9,
    "hp": 85,
    "init": -1,
    "cr": 4,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/giant-walrus-idrotf.js"
  },
  {
    "name": "Gnoll Vampire",
    "ac": 17,
    "hp": 93,
    "init": 4,
    "cr": 8,
    "type": "undead",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/gnoll-vampire-idrotf.js"
  },
  {
    "name": "Gnome Ceremorph",
    "ac": 16,
    "hp": 58,
    "init": 2,
    "cr": 5,
    "type": "aberration",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/gnome-ceremorph-idrotf.js"
  },
  {
    "name": "Gnome Squidling",
    "ac": 8,
    "hp": 10,
    "init": -2,
    "cr": 0.5,
    "type": "aberration",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/gnome-squidling-idrotf.js"
  },
  {
    "name": "Goliath Warrior",
    "ac": 12,
    "hp": 67,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/goliath-warrior-idrotf.js"
  },
  {
    "name": "Goliath Werebear",
    "ac": 10,
    "hp": 161,
    "init": 0,
    "cr": 8,
    "type": "humanoid (goliath",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/goliath-werebear-idrotf.js"
  },
  {
    "name": "Grandolpha Muzgardt",
    "ac": 9,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/grandolpha-muzgardt-idrotf.js"
  },
  {
    "name": "Gunvald Halraggson",
    "ac": 13,
    "hp": 76,
    "init": -1,
    "cr": 5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/gunvald-halraggson-idrotf.js"
  },
  {
    "name": "Hare",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/hare-idrotf.js"
  },
  {
    "name": "Headless Iron Golem",
    "ac": 20,
    "hp": 150,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/headless-iron-golem-idrotf.js"
  },
  {
    "name": "Hengar Aesnvaard",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/hengar-aesnvaard-idrotf.js"
  },
  {
    "name": "Hypnos Magen",
    "ac": 12,
    "hp": 34,
    "init": 2,
    "cr": 1,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/hypnos-magen-idrotf.js"
  },
  {
    "name": "Ice Piercer",
    "ac": 15,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/ice-piercer-idrotf.js"
  },
  {
    "name": "Ice Troll",
    "ac": 16,
    "hp": 115,
    "init": -1,
    "cr": 8,
    "type": "giant",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/ice-troll-idrotf.js"
  },
  {
    "name": "Icewind Kobold",
    "ac": 14,
    "hp": 9,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/icewind-kobold-idrotf.js"
  },
  {
    "name": "Icewind Kobold Zombie",
    "ac": 9,
    "hp": 19,
    "init": -2,
    "cr": 0.125,
    "type": "undead",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/icewind-kobold-zombie-idrotf.js"
  },
  {
    "name": "Isarr Kronenstrom",
    "ac": 15,
    "hp": 117,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/isarr-kronenstrom-idrotf.js"
  },
  {
    "name": "Jarund Elkhardt",
    "ac": 14,
    "hp": 104,
    "init": 0,
    "cr": 5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/jarund-elkhardt-idrotf.js"
  },
  {
    "name": "Kadroth",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/kadroth-idrotf.js"
  },
  {
    "name": "Kingsport",
    "ac": 11,
    "hp": 5,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/kingsport-idrotf.js"
  },
  {
    "name": "Knight of the Black Sword",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/knight-of-the-black-sword-idrotf.js"
  },
  {
    "name": "Knucklehead Trout",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/knucklehead-trout-idrotf.js"
  },
  {
    "name": "Kobold Vampire Spawn",
    "ac": 14,
    "hp": 39,
    "init": 4,
    "cr": 3,
    "type": "undead",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/kobold-vampire-spawn-idrotf.js"
  },
  {
    "name": "Living Bigby's Hand",
    "ac": 20,
    "hp": 52,
    "init": 0,
    "cr": 4,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/living-bigbys-hand-idrotf.js"
  },
  {
    "name": "Living Blade of Disaster",
    "ac": 14,
    "hp": 67,
    "init": 3,
    "cr": 8,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/living-blade-of-disaster-idrotf.js"
  },
  {
    "name": "Living Demiplane",
    "ac": 10,
    "hp": 31,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/living-demiplane-idrotf.js"
  },
  {
    "name": "Lonelywood Banshee",
    "ac": 12,
    "hp": 58,
    "init": 2,
    "cr": 4,
    "type": "undead",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/lonelywood-banshee-idrotf.js"
  },
  {
    "name": "Mjenir",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/mjenir-idrotf.js"
  },
  {
    "name": "Mountain Goat",
    "ac": 11,
    "hp": 13,
    "init": 1,
    "cr": 0.125,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/mountain-goat-idrotf.js"
  },
  {
    "name": "Nass Lantomir's Ghost",
    "ac": 11,
    "hp": 45,
    "init": 1,
    "cr": 6,
    "type": "undead",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/nass-lantomirs-ghost-idrotf.js"
  },
  {
    "name": "Prisoner 237",
    "ac": 11,
    "hp": 32,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/prisoner-237-idrotf.js"
  },
  {
    "name": "Reghed Chieftain",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/reghed-chieftain-idrotf.js"
  },
  {
    "name": "Reghed Great Warrior",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/reghed-great-warrior-idrotf.js"
  },
  {
    "name": "Reghed Shaman",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/reghed-shaman-idrotf.js"
  },
  {
    "name": "Reghed Warrior",
    "ac": 12,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/reghed-warrior-idrotf.js"
  },
  {
    "name": "Reindeer",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/reindeer-idrotf.js"
  },
  {
    "name": "Seal",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/seal-idrotf.js"
  },
  {
    "name": "Sephek Kaltro",
    "ac": 12,
    "hp": 75,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/sephek-kaltro-idrotf.js"
  },
  {
    "name": "Snow Golem",
    "ac": 8,
    "hp": 39,
    "init": -2,
    "cr": 3,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/snow-golem-idrotf.js"
  },
  {
    "name": "Snowy Owlbear",
    "ac": 13,
    "hp": 59,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/snowy-owlbear-idrotf.js"
  },
  {
    "name": "Spellix Romwod",
    "ac": 14,
    "hp": 33,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/spellix-romwod-idrotf.js"
  },
  {
    "name": "Sperm Whale",
    "ac": 13,
    "hp": 189,
    "init": -1,
    "cr": 8,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/sperm-whale-idrotf.js"
  },
  {
    "name": "Spitting Mimic",
    "ac": 14,
    "hp": 85,
    "init": 1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/spitting-mimic-idrotf.js"
  },
  {
    "name": "Telepathic Pentacle",
    "ac": 15,
    "hp": 172,
    "init": 1,
    "cr": 8,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/telepathic-pentacle-idrotf.js"
  },
  {
    "name": "Tomb Tapper",
    "ac": 17,
    "hp": 207,
    "init": 0,
    "cr": 10,
    "type": "construct",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/tomb-tapper-idrotf.js"
  },
  {
    "name": "Tribal Warrior Spore Servant",
    "ac": 12,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "plant",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/tribal-warrior-spore-servant-idrotf.js"
  },
  {
    "name": "Vellynne Harpell",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 4,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/vellynne-harpell-idrotf.js"
  },
  {
    "name": "Verbeeg Longstrider",
    "ac": 14,
    "hp": 119,
    "init": 2,
    "cr": 5,
    "type": "giant",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/verbeeg-longstrider-idrotf.js"
  },
  {
    "name": "Verbeeg Marauder",
    "ac": 14,
    "hp": 85,
    "init": 0,
    "cr": 4,
    "type": "giant",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/verbeeg-marauder-idrotf.js"
  },
  {
    "name": "Walrus",
    "ac": 9,
    "hp": 22,
    "init": -1,
    "cr": 0.25,
    "type": "beast",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/walrus-idrotf.js"
  },
  {
    "name": "Xardorok Sunblight",
    "ac": 16,
    "hp": 93,
    "init": 0,
    "cr": 5,
    "type": "humanoid",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/xardorok-sunblight-idrotf.js"
  },
  {
    "name": "Yeti Tyke",
    "ac": 11,
    "hp": 9,
    "init": 0,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/yeti-tyke-idrotf.js"
  },
  {
    "name": "Young Griffon (Medium)",
    "ac": 12,
    "hp": 32,
    "init": 2,
    "cr": 1,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/young-griffon-medium-idrotf.js"
  },
  {
    "name": "Young Griffon (Small)",
    "ac": 12,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/young-griffon-small-idrotf.js"
  },
  {
    "name": "Young Griffon (Tiny)",
    "ac": 12,
    "hp": 5,
    "init": 2,
    "cr": 0,
    "type": "monstrosity",
    "source": "Icewind Dale: Rime of the Frostmaiden",
    "htmlLink": "./custom/index.html?file=idrotf/young-griffon-tiny-idrotf.js"
  },
  {
    "name": "Afsoun Ghorbani",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/afsoun-ghorbani-jttrc.js"
  },
  {
    "name": "Amanisha Manivarshi",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/amanisha-manivarshi-jttrc.js"
  },
  {
    "name": "Ameyali",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/ameyali-jttrc.js"
  },
  {
    "name": "Ashen Heir Anarchist",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/ashen-heir-anarchist-jttrc.js"
  },
  {
    "name": "Ashen Heir Assassin",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/ashen-heir-assassin-jttrc.js"
  },
  {
    "name": "Ashen Heir Mage",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/ashen-heir-mage-jttrc.js"
  },
  {
    "name": "Ashen Heir Veteran",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/ashen-heir-veteran-jttrc.js"
  },
  {
    "name": "Atash",
    "ac": 21,
    "hp": 243,
    "init": 6,
    "cr": 21,
    "type": "celestial",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/atash-jttrc.js"
  },
  {
    "name": "Atiba-Pa",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/atiba-pa-jttrc.js"
  },
  {
    "name": "Aunt Dellie",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/aunt-dellie-jttrc.js"
  },
  {
    "name": "Aurumvorax Den Leader",
    "ac": 16,
    "hp": 52,
    "init": 2,
    "cr": 4,
    "type": "monstrosity",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/aurumvorax-den-leader-jttrc.js"
  },
  {
    "name": "Aurumvorax",
    "ac": 15,
    "hp": 36,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/aurumvorax-jttrc.js"
  },
  {
    "name": "Awa",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/awa-jttrc.js"
  },
  {
    "name": "Azra Nir",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/azra-nir-jttrc.js"
  },
  {
    "name": "Bakunawa",
    "ac": 15,
    "hp": 150,
    "init": 1,
    "cr": 12,
    "type": "dragon",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/bakunawa-jttrc.js"
  },
  {
    "name": "Brother Broumane",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/brother-broumane-jttrc.js"
  },
  {
    "name": "Dinosaur Skeleton",
    "ac": 13,
    "hp": 51,
    "init": 1,
    "cr": 2,
    "type": "undead",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/dinosaur-skeleton-jttrc.js"
  },
  {
    "name": "Diva",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/diva-jttrc.js"
  },
  {
    "name": "Diva Luma",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/diva-luma-jttrc.js"
  },
  {
    "name": "Djeneba",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/djeneba-jttrc.js"
  },
  {
    "name": "Dragon Hunter",
    "ac": 13,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/dragon-hunter-jttrc.js"
  },
  {
    "name": "Dukha Bhatiyali",
    "ac": 12,
    "hp": 120,
    "init": 2,
    "cr": 4,
    "type": "humanoid (human",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/dukha-bhatiyali-jttrc.js"
  },
  {
    "name": "Farmer",
    "ac": 12,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/farmer-jttrc.js"
  },
  {
    "name": "Gammon Xungoon",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/gammon-xungoon-jttrc.js"
  },
  {
    "name": "Haint",
    "ac": 12,
    "hp": 75,
    "init": 2,
    "cr": 7,
    "type": "undead",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/haint-jttrc.js"
  },
  {
    "name": "Jade Statue",
    "ac": 17,
    "hp": 178,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/jade-statue-jttrc.js"
  },
  {
    "name": "Jijibisha Manivarshi",
    "ac": 19,
    "hp": 153,
    "init": 3,
    "cr": 13,
    "type": "fiend",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/jijibisha-manivarshi-jttrc.js"
  },
  {
    "name": "Kala Mabarin",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/kala-mabarin-jttrc.js"
  },
  {
    "name": "Kasem Aroon",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/kasem-aroon-jttrc.js"
  },
  {
    "name": "Kedjou Kamal",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/kedjou-kamal-jttrc.js"
  },
  {
    "name": "Kianna",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/kianna-jttrc.js"
  },
  {
    "name": "Koi Prawn",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "beast",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/koi-prawn-jttrc.js"
  },
  {
    "name": "Kun Ahn-Jun",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/kun-ahn-jun-jttrc.js"
  },
  {
    "name": "Kusa Xungoon",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/kusa-xungoon-jttrc.js"
  },
  {
    "name": "Lady Dre",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/lady-dre-jttrc.js"
  },
  {
    "name": "Laleh Ghorbani",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/laleh-ghorbani-jttrc.js"
  },
  {
    "name": "Lamai Tyenmo",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/lamai-tyenmo-jttrc.js"
  },
  {
    "name": "Lu Zhong Yin",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/lu-zhong-yin-jttrc.js"
  },
  {
    "name": "Lungtian",
    "ac": 11,
    "hp": 22,
    "init": 1,
    "cr": 1,
    "type": "fey",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/lungtian-jttrc.js"
  },
  {
    "name": "Madam Kulp",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/madam-kulp-jttrc.js"
  },
  {
    "name": "Myx Nargis Ruba",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/myx-nargis-ruba-jttrc.js"
  },
  {
    "name": "Navid",
    "ac": 17,
    "hp": 200,
    "init": 1,
    "cr": 11,
    "type": "elemental",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/navid-jttrc.js"
  },
  {
    "name": "Nene",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "fey",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/nene-jttrc.js"
  },
  {
    "name": "Nightsea Chil-liren",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/nightsea-chil-liren-jttrc.js"
  },
  {
    "name": "Nimuel",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/nimuel-jttrc.js"
  },
  {
    "name": "Ollin",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/ollin-jttrc.js"
  },
  {
    "name": "Paloma",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/paloma-jttrc.js"
  },
  {
    "name": "Paolo Maykapal",
    "ac": 13,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/paolo-maykapal-jttrc.js"
  },
  {
    "name": "Pari",
    "ac": 16,
    "hp": 180,
    "init": 5,
    "cr": 13,
    "type": "celestial",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/pari-jttrc.js"
  },
  {
    "name": "Prince Kirina",
    "ac": 11,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/prince-kirina-jttrc.js"
  },
  {
    "name": "Prince Simbon",
    "ac": 11,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/prince-simbon-jttrc.js"
  },
  {
    "name": "Rooster",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/rooster-jttrc.js"
  },
  {
    "name": "Samira Arah",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/samira-arah-jttrc.js"
  },
  {
    "name": "Serapio",
    "ac": 13,
    "hp": 78,
    "init": 3,
    "cr": 5,
    "type": "fiend",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/serapio-jttrc.js"
  },
  {
    "name": "Sholeh",
    "ac": 20,
    "hp": 297,
    "init": 0,
    "cr": 20,
    "type": "dragon",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/sholeh-jttrc.js"
  },
  {
    "name": "Soul Shaker",
    "ac": 13,
    "hp": 76,
    "init": -1,
    "cr": 4,
    "type": "undead",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/soul-shaker-jttrc.js"
  },
  {
    "name": "Tlacatecolo",
    "ac": 13,
    "hp": 78,
    "init": 3,
    "cr": 5,
    "type": "fiend",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/tlacatecolo-jttrc.js"
  },
  {
    "name": "Tlexolotl",
    "ac": 15,
    "hp": 104,
    "init": 0,
    "cr": 10,
    "type": "elemental",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/tlexolotl-jttrc.js"
  },
  {
    "name": "Tonalli",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/tonalli-jttrc.js"
  },
  {
    "name": "Tungsten Ward",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/tungsten-ward-jttrc.js"
  },
  {
    "name": "Uzoma Baten",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/uzoma-baten-jttrc.js"
  },
  {
    "name": "Vi Aroon",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/vi-aroon-jttrc.js"
  },
  {
    "name": "Wei Feng Ying",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/wei-feng-ying-jttrc.js"
  },
  {
    "name": "Whistler",
    "ac": 15,
    "hp": 180,
    "init": 3,
    "cr": 9,
    "type": "aberration",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/whistler-jttrc.js"
  },
  {
    "name": "White Jade Emperor",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/white-jade-emperor-jttrc.js"
  },
  {
    "name": "Wynling",
    "ac": 15,
    "hp": 21,
    "init": 5,
    "cr": 0.5,
    "type": "fey",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/wynling-jttrc.js"
  },
  {
    "name": "Xocopol",
    "ac": 18,
    "hp": 162,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/xocopol-jttrc.js"
  },
  {
    "name": "Yarana",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/yarana-jttrc.js"
  },
  {
    "name": "Young-Gi",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/young-gi-jttrc.js"
  },
  {
    "name": "Zisatta",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Journeys through the Radiant Citadel",
    "htmlLink": "./custom/index.html?file=jttrc/zisatta-jttrc.js"
  },
  {
    "name": "Animatronic Allosaurus",
    "ac": 13,
    "hp": 51,
    "init": 1,
    "cr": 2,
    "type": "construct",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/animatronic-allosaurus-kftgv.js"
  },
  {
    "name": "Arlo Kettletoe (Levels 1-4)",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/arlo-kettletoe-levels-1-4-kftgv.js"
  },
  {
    "name": "Arlo Kettletoe (Levels 5-8)",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/arlo-kettletoe-levels-5-8-kftgv.js"
  },
  {
    "name": "Arlo Kettletoe (Levels 9-11)",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/arlo-kettletoe-levels-9-11-kftgv.js"
  },
  {
    "name": "Ashen Animated Armor",
    "ac": 18,
    "hp": 33,
    "init": 0,
    "cr": 1,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/ashen-animated-armor-kftgv.js"
  },
  {
    "name": "Ashen Flying Sword",
    "ac": 17,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/ashen-flying-sword-kftgv.js"
  },
  {
    "name": "Ashen Knight",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/ashen-knight-kftgv.js"
  },
  {
    "name": "Ashen Shambling Mound",
    "ac": 15,
    "hp": 136,
    "init": -1,
    "cr": 5,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/ashen-shambling-mound-kftgv.js"
  },
  {
    "name": "Ashen Veteran",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/ashen-veteran-kftgv.js"
  },
  {
    "name": "Ashen Warhorse",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/ashen-warhorse-kftgv.js"
  },
  {
    "name": "Charmayne Daymore",
    "ac": 12,
    "hp": 123,
    "init": 2,
    "cr": 10,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/charmayne-daymore-kftgv.js"
  },
  {
    "name": "Clockwork Defender",
    "ac": 17,
    "hp": 42,
    "init": 2,
    "cr": 1,
    "type": "construct",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/clockwork-defender-kftgv.js"
  },
  {
    "name": "Clockwork Observer",
    "ac": 14,
    "hp": 7,
    "init": 3,
    "cr": 0,
    "type": "construct",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/clockwork-observer-kftgv.js"
  },
  {
    "name": "Conservatory Student",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/conservatory-student-kftgv.js"
  },
  {
    "name": "Crimson Helmed Horror",
    "ac": 20,
    "hp": 60,
    "init": 1,
    "cr": 4,
    "type": "construct",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/crimson-helmed-horror-kftgv.js"
  },
  {
    "name": "Dr. Cassee Dannell",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/dr-cassee-dannell-kftgv.js"
  },
  {
    "name": "Eldritch Horror Hatchling",
    "ac": 14,
    "hp": 39,
    "init": 0,
    "cr": 2,
    "type": "monstrosity",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/eldritch-horror-hatchling-kftgv.js"
  },
  {
    "name": "Eliphas Adulare",
    "ac": 10,
    "hp": 135,
    "init": 0,
    "cr": 5,
    "type": "humanoid (human",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/eliphas-adulare-kftgv.js"
  },
  {
    "name": "Enna Galakiir (Levels 1-4)",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/enna-galakiir-levels-1-4-kftgv.js"
  },
  {
    "name": "Enna Galakiir (Levels 5-8)",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/enna-galakiir-levels-5-8-kftgv.js"
  },
  {
    "name": "Enna Galakiir (Levels 9-11)",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/enna-galakiir-levels-9-11-kftgv.js"
  },
  {
    "name": "Fragment of Krokulmar",
    "ac": 13,
    "hp": 10,
    "init": 3,
    "cr": 0,
    "type": "aberration",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/fragment-of-krokulmar-kftgv.js"
  },
  {
    "name": "Frody Dartwild",
    "ac": 8,
    "hp": 22,
    "init": -2,
    "cr": 0.25,
    "type": "undead",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/frody-dartwild-kftgv.js"
  },
  {
    "name": "Gregir Fendelsohn (Levels 1-4)",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/gregir-fendelsohn-levels-1-4-kftgv.js"
  },
  {
    "name": "Gregir Fendelsohn (Levels 5-8)",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/gregir-fendelsohn-levels-5-8-kftgv.js"
  },
  {
    "name": "Gregir Fendelsohn (Levels 9-11)",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/gregir-fendelsohn-levels-9-11-kftgv.js"
  },
  {
    "name": "Headless Body",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/headless-body-kftgv.js"
  },
  {
    "name": "Ignatius Inkblot",
    "ac": 15,
    "hp": 71,
    "init": 1,
    "cr": 7,
    "type": "aberration",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/ignatius-inkblot-kftgv.js"
  },
  {
    "name": "Jalynvyr Nir'Thinn",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 0.25,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/jalynvyr-nirthinn-kftgv.js"
  },
  {
    "name": "Jarazoun",
    "ac": 17,
    "hp": 200,
    "init": 1,
    "cr": 11,
    "type": "elemental",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/jarazoun-kftgv.js"
  },
  {
    "name": "Joster Mareet",
    "ac": 15,
    "hp": 66,
    "init": 3,
    "cr": 4,
    "type": "fiend",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/joster-mareet-kftgv.js"
  },
  {
    "name": "Juvenile Eldritch Horror",
    "ac": 17,
    "hp": 168,
    "init": 3,
    "cr": 11,
    "type": "monstrosity",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/juvenile-eldritch-horror-kftgv.js"
  },
  {
    "name": "Kavoda",
    "ac": 12,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/kavoda-kftgv.js"
  },
  {
    "name": "King Jhaeros",
    "ac": 14,
    "hp": 133,
    "init": -1,
    "cr": 9,
    "type": "construct",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/king-jhaeros-kftgv.js"
  },
  {
    "name": "Markos Delphi",
    "ac": 12,
    "hp": 44,
    "init": 2,
    "cr": 3,
    "type": "humanoid (human",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/markos-delphi-kftgv.js"
  },
  {
    "name": "Meera Raheer",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/meera-raheer-kftgv.js"
  },
  {
    "name": "Naevys Tharesso",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/naevys-tharesso-kftgv.js"
  },
  {
    "name": "Nixylanna Vidorant",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/nixylanna-vidorant-kftgv.js"
  },
  {
    "name": "Prisoner 13",
    "ac": 17,
    "hp": 102,
    "init": 3,
    "cr": 5,
    "type": "humanoid (dwarf",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/prisoner-13-kftgv.js"
  },
  {
    "name": "Rilago",
    "ac": 11,
    "hp": 45,
    "init": 1,
    "cr": 4,
    "type": "undead",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/rilago-kftgv.js"
  },
  {
    "name": "Sabrina Kilgore (Levels 1-4)",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/sabrina-kilgore-levels-1-4-kftgv.js"
  },
  {
    "name": "Sabrina Kilgore (Levels 5-8)",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/sabrina-kilgore-levels-5-8-kftgv.js"
  },
  {
    "name": "Sabrina Kilgore (Levels 9-11)",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/sabrina-kilgore-levels-9-11-kftgv.js"
  },
  {
    "name": "Sythian Skalderang",
    "ac": 15,
    "hp": 99,
    "init": 2,
    "cr": 7,
    "type": "humanoid (bard",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/sythian-skalderang-kftgv.js"
  },
  {
    "name": "The Stranger",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/the-stranger-kftgv.js"
  },
  {
    "name": "Tiefling Acrobat",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/tiefling-acrobat-kftgv.js"
  },
  {
    "name": "Tixie Tockworth",
    "ac": 17,
    "hp": 75,
    "init": 1,
    "cr": 7,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/tixie-tockworth-kftgv.js"
  },
  {
    "name": "Tixie's Shield Guardian",
    "ac": 17,
    "hp": 142,
    "init": -1,
    "cr": 7,
    "type": "construct",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/tixies-shield-guardian-kftgv.js"
  },
  {
    "name": "Torgja Stonecrusher (Levels 1-4)",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/torgja-stonecrusher-levels-1-4-kftgv.js"
  },
  {
    "name": "Torgja Stonecrusher (Levels 5-8)",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/torgja-stonecrusher-levels-5-8-kftgv.js"
  },
  {
    "name": "Torgja Stonecrusher (Levels 9-11)",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/torgja-stonecrusher-levels-9-11-kftgv.js"
  },
  {
    "name": "Tosh Starling (Levels 1-4)",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/tosh-starling-levels-1-4-kftgv.js"
  },
  {
    "name": "Tosh Starling (Levels 5-8)",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/tosh-starling-levels-5-8-kftgv.js"
  },
  {
    "name": "Tosh Starling (Levels 9-11)",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/tosh-starling-levels-9-11-kftgv.js"
  },
  {
    "name": "Zala Morphus",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 2,
    "type": "aberration",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/zala-morphus-kftgv.js"
  },
  {
    "name": "Zorhanna Adulare",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/zorhanna-adulare-kftgv.js"
  },
  {
    "name": "Zorhanna's Simulacrum",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "construct",
    "source": "Keys from the Golden Vault",
    "htmlLink": "./custom/index.html?file=kftgv/zorhannas-simulacrum-kftgv.js"
  },
  {
    "name": "Evil Mage",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Lost Mine of Phandelver",
    "htmlLink": "./custom/index.html?file=lmop/evil-mage-lmop.js"
  },
  {
    "name": "Venomfang",
    "ac": 18,
    "hp": 136,
    "init": 1,
    "cr": 8,
    "type": "dragon",
    "source": "Lost Mine of Phandelver",
    "htmlLink": "./custom/index.html?file=lmop/venomfang-lmop.js"
  },
  {
    "name": "Asteroid Spider",
    "ac": 17,
    "hp": 348,
    "init": 0,
    "cr": 15,
    "type": "monstrosity",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/asteroid-spider-mcv1sc.js"
  },
  {
    "name": "Clockwork Horror",
    "ac": 18,
    "hp": 60,
    "init": 2,
    "cr": 2,
    "type": "construct",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/clockwork-horror-mcv1sc.js"
  },
  {
    "name": "Eldritch Lich",
    "ac": 17,
    "hp": 165,
    "init": 4,
    "cr": 15,
    "type": "undead",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/eldritch-lich-mcv1sc.js"
  },
  {
    "name": "Fractine",
    "ac": 14,
    "hp": 110,
    "init": 1,
    "cr": 9,
    "type": "construct",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/fractine-mcv1sc.js"
  },
  {
    "name": "Gadabout",
    "ac": 11,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "plant",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/gadabout-mcv1sc.js"
  },
  {
    "name": "Goon Balloon",
    "ac": 10,
    "hp": 6,
    "init": 0,
    "cr": 0.125,
    "type": "aberration",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/goon-balloon-mcv1sc.js"
  },
  {
    "name": "Nightmare Beast",
    "ac": 17,
    "hp": 232,
    "init": 0,
    "cr": 16,
    "type": "monstrosity",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/nightmare-beast-mcv1sc.js"
  },
  {
    "name": "Puppeteer Parasite",
    "ac": 15,
    "hp": 71,
    "init": 2,
    "cr": 3,
    "type": "aberration",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/puppeteer-parasite-mcv1sc.js"
  },
  {
    "name": "Star Lancer",
    "ac": 15,
    "hp": 60,
    "init": 2,
    "cr": 2,
    "type": "celestial",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/star-lancer-mcv1sc.js"
  },
  {
    "name": "Yggdrasti",
    "ac": 15,
    "hp": 112,
    "init": 0,
    "cr": 7,
    "type": "plant",
    "source": "Monstrous Compendium Vol. 1",
    "htmlLink": "./custom/index.html?file=mcv1sc/yggdrasti-mcv1sc.js"
  },
  {
    "name": "Assassin Bug",
    "ac": 14,
    "hp": 55,
    "init": 2,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/assassin-bug-mff.js"
  },
  {
    "name": "Blindheim",
    "ac": 14,
    "hp": 26,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/blindheim-mff.js"
  },
  {
    "name": "Crab Folk",
    "ac": 16,
    "hp": 68,
    "init": 0,
    "cr": 3,
    "type": "giant",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/crab-folk-mff.js"
  },
  {
    "name": "Dire Corby",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/dire-corby-mff.js"
  },
  {
    "name": "Eye of Fear and Flame",
    "ac": 15,
    "hp": 136,
    "init": 2,
    "cr": 9,
    "type": "undead",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/eye-of-fear-and-flame-mff.js"
  },
  {
    "name": "Fog Giant",
    "ac": 16,
    "hp": 200,
    "init": 0,
    "cr": 11,
    "type": "giant",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/fog-giant-mff.js"
  },
  {
    "name": "Forlarren",
    "ac": 16,
    "hp": 45,
    "init": 3,
    "cr": 3,
    "type": "fey",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/forlarren-mff.js"
  },
  {
    "name": "Jermlaine",
    "ac": 11,
    "hp": 3,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/jermlaine-mff.js"
  },
  {
    "name": "Khargra",
    "ac": 20,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "elemental",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/khargra-mff.js"
  },
  {
    "name": "Killmoulis",
    "ac": 14,
    "hp": 7,
    "init": 4,
    "cr": 0,
    "type": "fey",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/killmoulis-mff.js"
  },
  {
    "name": "Mite",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.25,
    "type": "fey",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/mite-mff.js"
  },
  {
    "name": "Needle Lord",
    "ac": 15,
    "hp": 45,
    "init": 0,
    "cr": 3,
    "type": "plant",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/needle-lord-mff.js"
  },
  {
    "name": "Needle Spawn",
    "ac": 13,
    "hp": 16,
    "init": 3,
    "cr": 0.5,
    "type": "plant",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/needle-spawn-mff.js"
  },
  {
    "name": "Norker",
    "ac": 17,
    "hp": 16,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/norker-mff.js"
  },
  {
    "name": "Norker War Leader",
    "ac": 17,
    "hp": 39,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/norker-war-leader-mff.js"
  },
  {
    "name": "Screaming Devilkin",
    "ac": 17,
    "hp": 18,
    "init": 3,
    "cr": 1,
    "type": "fey",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/screaming-devilkin-mff.js"
  },
  {
    "name": "Xill",
    "ac": 16,
    "hp": 33,
    "init": 4,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/xill-mff.js"
  },
  {
    "name": "Ygorl, Lord of Entropy",
    "ac": 20,
    "hp": 325,
    "init": 4,
    "cr": 23,
    "type": "aberration",
    "source": "Mordenkainen's Fiendish Folio",
    "htmlLink": "./custom/index.html?file=mff/ygorl-lord-of-entropy-mff.js"
  },
  {
    "name": "Abhorrent Overlord",
    "ac": 16,
    "hp": 136,
    "init": 4,
    "cr": 9,
    "type": "fiend",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/abhorrent-overlord-mot.js"
  },
  {
    "name": "Akroan Hoplite",
    "ac": 18,
    "hp": 52,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/akroan-hoplite-mot.js"
  },
  {
    "name": "Alseid",
    "ac": 15,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "fey",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/alseid-mot.js"
  },
  {
    "name": "Anvilwrought Raptor",
    "ac": 14,
    "hp": 18,
    "init": 3,
    "cr": 0.5,
    "type": "construct",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/anvilwrought-raptor-mot.js"
  },
  {
    "name": "Aphemia",
    "ac": 15,
    "hp": 52,
    "init": 3,
    "cr": 5,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/aphemia-mot.js"
  },
  {
    "name": "Arasta",
    "ac": 19,
    "hp": 300,
    "init": 3,
    "cr": 21,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/arasta-mot.js"
  },
  {
    "name": "Archon of Falling Stars",
    "ac": 18,
    "hp": 144,
    "init": 2,
    "cr": 12,
    "type": "celestial",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/archon-of-falling-stars-mot.js"
  },
  {
    "name": "Ashen Rider",
    "ac": 18,
    "hp": 178,
    "init": 3,
    "cr": 16,
    "type": "celestial",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/ashen-rider-mot.js"
  },
  {
    "name": "Blood-Toll Harpy",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/blood-toll-harpy-mot.js"
  },
  {
    "name": "Broken King Antigonos",
    "ac": 14,
    "hp": 38,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/broken-king-antigonos-mot.js"
  },
  {
    "name": "Bronze Sable",
    "ac": 15,
    "hp": 32,
    "init": 3,
    "cr": 1,
    "type": "construct",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/bronze-sable-mot.js"
  },
  {
    "name": "Burnished Hart",
    "ac": 14,
    "hp": 45,
    "init": 2,
    "cr": 2,
    "type": "construct",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/burnished-hart-mot.js"
  },
  {
    "name": "Colossus of Akros",
    "ac": 21,
    "hp": 350,
    "init": 0,
    "cr": 23,
    "type": "construct",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/colossus-of-akros-mot.js"
  },
  {
    "name": "Doomwake Giant",
    "ac": 15,
    "hp": 162,
    "init": 1,
    "cr": 11,
    "type": "giant",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/doomwake-giant-mot.js"
  },
  {
    "name": "Eater of Hope",
    "ac": 17,
    "hp": 90,
    "init": 3,
    "cr": 6,
    "type": "fiend",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/eater-of-hope-mot.js"
  },
  {
    "name": "Fleecemane Lion",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/fleecemane-lion-mot.js"
  },
  {
    "name": "Flitterstep Eidolon",
    "ac": 14,
    "hp": 44,
    "init": 4,
    "cr": 3,
    "type": "undead",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/flitterstep-eidolon-mot.js"
  },
  {
    "name": "Ghostblade Eidolon",
    "ac": 12,
    "hp": 55,
    "init": 2,
    "cr": 5,
    "type": "undead",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/ghostblade-eidolon-mot.js"
  },
  {
    "name": "Gold-Forged Sentinel",
    "ac": 16,
    "hp": 76,
    "init": 1,
    "cr": 5,
    "type": "construct",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/gold-forged-sentinel-mot.js"
  },
  {
    "name": "Hippocamp",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/hippocamp-mot.js"
  },
  {
    "name": "Hundred-Handed One",
    "ac": 15,
    "hp": 243,
    "init": 2,
    "cr": 15,
    "type": "giant",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/hundred-handed-one-mot.js"
  },
  {
    "name": "Hythonia",
    "ac": 17,
    "hp": 199,
    "init": 3,
    "cr": 17,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/hythonia-mot.js"
  },
  {
    "name": "Ironscale Hydra",
    "ac": 17,
    "hp": 181,
    "init": 0,
    "cr": 12,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/ironscale-hydra-mot.js"
  },
  {
    "name": "Lampad",
    "ac": 15,
    "hp": 52,
    "init": 1,
    "cr": 3,
    "type": "fey",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/lampad-mot.js"
  },
  {
    "name": "Leonin Iconoclast",
    "ac": 17,
    "hp": 67,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/leonin-iconoclast-mot.js"
  },
  {
    "name": "Medusa",
    "ac": 15,
    "hp": 127,
    "init": 2,
    "cr": 6,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/medusa-mot.js"
  },
  {
    "name": "Meletian Hoplite",
    "ac": 18,
    "hp": 49,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/meletian-hoplite-mot.js"
  },
  {
    "name": "Naiad",
    "ac": 15,
    "hp": 31,
    "init": 3,
    "cr": 2,
    "type": "fey",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/naiad-mot.js"
  },
  {
    "name": "Nightmare Shepherd",
    "ac": 18,
    "hp": 133,
    "init": 2,
    "cr": 11,
    "type": "fiend",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/nightmare-shepherd-mot.js"
  },
  {
    "name": "Nyx-Fleece Ram",
    "ac": 14,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/nyx-fleece-ram-mot.js"
  },
  {
    "name": "Oracle",
    "ac": 15,
    "hp": 44,
    "init": 2,
    "cr": 4,
    "type": "humanoid",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/oracle-mot.js"
  },
  {
    "name": "Oread",
    "ac": 16,
    "hp": 49,
    "init": 2,
    "cr": 4,
    "type": "fey",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/oread-mot.js"
  },
  {
    "name": "Phylaskia",
    "ac": 18,
    "hp": 104,
    "init": 2,
    "cr": 9,
    "type": "undead",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/phylaskia-mot.js"
  },
  {
    "name": "Polukranos",
    "ac": 17,
    "hp": 232,
    "init": 2,
    "cr": 19,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/polukranos-mot.js"
  },
  {
    "name": "Returned Drifter",
    "ac": 13,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "undead",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/returned-drifter-mot.js"
  },
  {
    "name": "Returned Kakomantis",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 4,
    "type": "undead",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/returned-kakomantis-mot.js"
  },
  {
    "name": "Returned Palamnite",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 4,
    "type": "undead",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/returned-palamnite-mot.js"
  },
  {
    "name": "Returned Sentry",
    "ac": 15,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "undead",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/returned-sentry-mot.js"
  },
  {
    "name": "Satyr Reveler",
    "ac": 13,
    "hp": 33,
    "init": 3,
    "cr": 1,
    "type": "fey",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/satyr-reveler-mot.js"
  },
  {
    "name": "Satyr Thornbearer",
    "ac": 15,
    "hp": 38,
    "init": 4,
    "cr": 2,
    "type": "fey",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/satyr-thornbearer-mot.js"
  },
  {
    "name": "Setessan Hoplite",
    "ac": 16,
    "hp": 58,
    "init": 3,
    "cr": 4,
    "type": "humanoid",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/setessan-hoplite-mot.js"
  },
  {
    "name": "Theran Chimera",
    "ac": 15,
    "hp": 95,
    "init": 1,
    "cr": 7,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/theran-chimera-mot.js"
  },
  {
    "name": "Triton Master of Waves",
    "ac": 15,
    "hp": 105,
    "init": 0,
    "cr": 8,
    "type": "humanoid",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/triton-master-of-waves-mot.js"
  },
  {
    "name": "Triton Shorestalker",
    "ac": 13,
    "hp": 32,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/triton-shorestalker-mot.js"
  },
  {
    "name": "Tromokratis",
    "ac": 22,
    "hp": 409,
    "init": 0,
    "cr": 26,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/tromokratis-mot.js"
  },
  {
    "name": "Two-Headed Cerberus",
    "ac": 12,
    "hp": 39,
    "init": 2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/two-headed-cerberus-mot.js"
  },
  {
    "name": "Typhon",
    "ac": 17,
    "hp": 195,
    "init": 0,
    "cr": 15,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/typhon-mot.js"
  },
  {
    "name": "Underworld Cerberus",
    "ac": 16,
    "hp": 104,
    "init": 1,
    "cr": 6,
    "type": "monstrosity",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/underworld-cerberus-mot.js"
  },
  {
    "name": "Winged Bull",
    "ac": 12,
    "hp": 95,
    "init": 2,
    "cr": 4,
    "type": "celestial",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/winged-bull-mot.js"
  },
  {
    "name": "Winged Lion",
    "ac": 13,
    "hp": 114,
    "init": 3,
    "cr": 4,
    "type": "celestial",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/winged-lion-mot.js"
  },
  {
    "name": "Woe Strider",
    "ac": 17,
    "hp": 110,
    "init": 2,
    "cr": 7,
    "type": "aberration",
    "source": "Mythic Odysseys of Theros",
    "htmlLink": "./custom/index.html?file=mot/woe-strider-mot.js"
  },
  {
    "name": "Abjurer Wizard",
    "ac": 12,
    "hp": 104,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/abjurer-wizard-mpmm.js"
  },
  {
    "name": "Adult Kruthik",
    "ac": 18,
    "hp": 39,
    "init": 3,
    "cr": 2,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/adult-kruthik-mpmm.js"
  },
  {
    "name": "Adult Oblex",
    "ac": 14,
    "hp": 75,
    "init": 4,
    "cr": 5,
    "type": "ooze",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/adult-oblex-mpmm.js"
  },
  {
    "name": "Air Elemental Myrmidon",
    "ac": 18,
    "hp": 117,
    "init": 2,
    "cr": 7,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/air-elemental-myrmidon-mpmm.js"
  },
  {
    "name": "Alhoon",
    "ac": 15,
    "hp": 150,
    "init": 1,
    "cr": 10,
    "type": "undead (mind flayer",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/alhoon-mpmm.js"
  },
  {
    "name": "Alkilith",
    "ac": 17,
    "hp": 168,
    "init": 4,
    "cr": 11,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/alkilith-mpmm.js"
  },
  {
    "name": "Allip",
    "ac": 13,
    "hp": 40,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/allip-mpmm.js"
  },
  {
    "name": "Amnizu",
    "ac": 21,
    "hp": 202,
    "init": 1,
    "cr": 18,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/amnizu-mpmm.js"
  },
  {
    "name": "Angry Sorrowsworn",
    "ac": 18,
    "hp": 255,
    "init": 0,
    "cr": 13,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/angry-sorrowsworn-mpmm.js"
  },
  {
    "name": "Annis Hag",
    "ac": 17,
    "hp": 90,
    "init": 1,
    "cr": 6,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/annis-hag-mpmm.js"
  },
  {
    "name": "Apprentice Wizard",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/apprentice-wizard-mpmm.js"
  },
  {
    "name": "Archdruid",
    "ac": 14,
    "hp": 154,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/archdruid-mpmm.js"
  },
  {
    "name": "Archer",
    "ac": 16,
    "hp": 75,
    "init": 4,
    "cr": 3,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/archer-mpmm.js"
  },
  {
    "name": "Armanite",
    "ac": 16,
    "hp": 94,
    "init": 4,
    "cr": 7,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/armanite-mpmm.js"
  },
  {
    "name": "Astral Dreadnought",
    "ac": 20,
    "hp": 297,
    "init": -2,
    "cr": 21,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/astral-dreadnought-mpmm.js"
  },
  {
    "name": "Aurochs",
    "ac": 11,
    "hp": 38,
    "init": 0,
    "cr": 2,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/aurochs-mpmm.js"
  },
  {
    "name": "Autumn Eladrin",
    "ac": 19,
    "hp": 165,
    "init": 3,
    "cr": 10,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/autumn-eladrin-mpmm.js"
  },
  {
    "name": "Babau",
    "ac": 16,
    "hp": 82,
    "init": 3,
    "cr": 4,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/babau-mpmm.js"
  },
  {
    "name": "Bael",
    "ac": 18,
    "hp": 189,
    "init": 3,
    "cr": 19,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/bael-mpmm.js"
  },
  {
    "name": "Banderhobb",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/banderhobb-mpmm.js"
  },
  {
    "name": "Baphomet",
    "ac": 22,
    "hp": 319,
    "init": 2,
    "cr": 23,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/baphomet-mpmm.js"
  },
  {
    "name": "Bard",
    "ac": 15,
    "hp": 44,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/bard-mpmm.js"
  },
  {
    "name": "Barghest",
    "ac": 17,
    "hp": 60,
    "init": 2,
    "cr": 4,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/barghest-mpmm.js"
  },
  {
    "name": "Berbalang",
    "ac": 14,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/berbalang-mpmm.js"
  },
  {
    "name": "Bheur Hag",
    "ac": 17,
    "hp": 91,
    "init": 3,
    "cr": 7,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/bheur-hag-mpmm.js"
  },
  {
    "name": "Black Abishai",
    "ac": 15,
    "hp": 58,
    "init": 3,
    "cr": 7,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/black-abishai-mpmm.js"
  },
  {
    "name": "Blackguard",
    "ac": 18,
    "hp": 119,
    "init": 0,
    "cr": 8,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/blackguard-mpmm.js"
  },
  {
    "name": "Blue Abishai",
    "ac": 19,
    "hp": 202,
    "init": 2,
    "cr": 17,
    "type": "fiend (devil",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/blue-abishai-mpmm.js"
  },
  {
    "name": "Bodak",
    "ac": 15,
    "hp": 58,
    "init": 3,
    "cr": 6,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/bodak-mpmm.js"
  },
  {
    "name": "Boggle",
    "ac": 14,
    "hp": 18,
    "init": 4,
    "cr": 0.125,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/boggle-mpmm.js"
  },
  {
    "name": "Boneclaw",
    "ac": 16,
    "hp": 150,
    "init": 3,
    "cr": 12,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/boneclaw-mpmm.js"
  },
  {
    "name": "Brontosaurus",
    "ac": 15,
    "hp": 121,
    "init": -1,
    "cr": 5,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/brontosaurus-mpmm.js"
  },
  {
    "name": "Bulezau",
    "ac": 14,
    "hp": 52,
    "init": 2,
    "cr": 3,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/bulezau-mpmm.js"
  },
  {
    "name": "Cadaver Collector",
    "ac": 17,
    "hp": 189,
    "init": 2,
    "cr": 14,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/cadaver-collector-mpmm.js"
  },
  {
    "name": "Canoloth",
    "ac": 16,
    "hp": 120,
    "init": 0,
    "cr": 8,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/canoloth-mpmm.js"
  },
  {
    "name": "Catoblepas",
    "ac": 14,
    "hp": 84,
    "init": 1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/catoblepas-mpmm.js"
  },
  {
    "name": "Cave Fisher",
    "ac": 16,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/cave-fisher-mpmm.js"
  },
  {
    "name": "Champion",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/champion-mpmm.js"
  },
  {
    "name": "Chitine",
    "ac": 14,
    "hp": 18,
    "init": 2,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/chitine-mpmm.js"
  },
  {
    "name": "Choker",
    "ac": 16,
    "hp": 13,
    "init": 2,
    "cr": 1,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/choker-mpmm.js"
  },
  {
    "name": "Choldrith",
    "ac": 15,
    "hp": 66,
    "init": 3,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/choldrith-mpmm.js"
  },
  {
    "name": "Clockwork Bronze Scout",
    "ac": 13,
    "hp": 36,
    "init": 3,
    "cr": 1,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/clockwork-bronze-scout-mpmm.js"
  },
  {
    "name": "Clockwork Iron Cobra",
    "ac": 13,
    "hp": 91,
    "init": 3,
    "cr": 4,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/clockwork-iron-cobra-mpmm.js"
  },
  {
    "name": "Clockwork Oaken Bolter",
    "ac": 16,
    "hp": 117,
    "init": 4,
    "cr": 5,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/clockwork-oaken-bolter-mpmm.js"
  },
  {
    "name": "Clockwork Stone Defender",
    "ac": 16,
    "hp": 105,
    "init": 0,
    "cr": 4,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/clockwork-stone-defender-mpmm.js"
  },
  {
    "name": "Cloud Giant Smiling One",
    "ac": 15,
    "hp": 250,
    "init": 1,
    "cr": 11,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/cloud-giant-smiling-one-mpmm.js"
  },
  {
    "name": "Conjurer Wizard",
    "ac": 12,
    "hp": 58,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/conjurer-wizard-mpmm.js"
  },
  {
    "name": "Corpse Flower",
    "ac": 12,
    "hp": 127,
    "init": 2,
    "cr": 8,
    "type": "plant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/corpse-flower-mpmm.js"
  },
  {
    "name": "Cranium Rat",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/cranium-rat-mpmm.js"
  },
  {
    "name": "Darkling Elder",
    "ac": 15,
    "hp": 27,
    "init": 3,
    "cr": 2,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/darkling-elder-mpmm.js"
  },
  {
    "name": "Darkling",
    "ac": 14,
    "hp": 13,
    "init": 3,
    "cr": 0.5,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/darkling-mpmm.js"
  },
  {
    "name": "Death Kiss",
    "ac": 15,
    "hp": 142,
    "init": 2,
    "cr": 10,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/death-kiss-mpmm.js"
  },
  {
    "name": "Deathlock Mastermind",
    "ac": 13,
    "hp": 110,
    "init": 3,
    "cr": 8,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/deathlock-mastermind-mpmm.js"
  },
  {
    "name": "Deathlock",
    "ac": 12,
    "hp": 36,
    "init": 2,
    "cr": 4,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/deathlock-mpmm.js"
  },
  {
    "name": "Deathlock Wight",
    "ac": 12,
    "hp": 37,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/deathlock-wight-mpmm.js"
  },
  {
    "name": "Deep Roth\u00e9",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/deep-rothe-mpmm.js"
  },
  {
    "name": "Deep Scion",
    "ac": 11,
    "hp": 67,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/deep-scion-mpmm.js"
  },
  {
    "name": "Deinonychus",
    "ac": 13,
    "hp": 26,
    "init": 2,
    "cr": 1,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/deinonychus-mpmm.js"
  },
  {
    "name": "Demogorgon",
    "ac": 22,
    "hp": 464,
    "init": 2,
    "cr": 26,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/demogorgon-mpmm.js"
  },
  {
    "name": "Derro",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/derro-mpmm.js"
  },
  {
    "name": "Derro Savant",
    "ac": 13,
    "hp": 36,
    "init": 2,
    "cr": 3,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/derro-savant-mpmm.js"
  },
  {
    "name": "Devourer",
    "ac": 16,
    "hp": 189,
    "init": 1,
    "cr": 13,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/devourer-mpmm.js"
  },
  {
    "name": "Dhergoloth",
    "ac": 15,
    "hp": 119,
    "init": 0,
    "cr": 7,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/dhergoloth-mpmm.js"
  },
  {
    "name": "Dimetrodon",
    "ac": 12,
    "hp": 19,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/dimetrodon-mpmm.js"
  },
  {
    "name": "Dire Troll",
    "ac": 15,
    "hp": 172,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/dire-troll-mpmm.js"
  },
  {
    "name": "Diviner Wizard",
    "ac": 12,
    "hp": 90,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/diviner-wizard-mpmm.js"
  },
  {
    "name": "Dolphin Delighter",
    "ac": 14,
    "hp": 27,
    "init": 1,
    "cr": 3,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/dolphin-delighter-mpmm.js"
  },
  {
    "name": "Dolphin",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/dolphin-mpmm.js"
  },
  {
    "name": "Draegloth",
    "ac": 15,
    "hp": 123,
    "init": 2,
    "cr": 7,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/draegloth-mpmm.js"
  },
  {
    "name": "Drow Arachnomancer",
    "ac": 15,
    "hp": 162,
    "init": 3,
    "cr": 13,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/drow-arachnomancer-mpmm.js"
  },
  {
    "name": "Drow Favored Consort",
    "ac": 15,
    "hp": 240,
    "init": 5,
    "cr": 18,
    "type": "humanoid (Drow elf",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/drow-favored-consort-mpmm.js"
  },
  {
    "name": "Drow House Captain",
    "ac": 16,
    "hp": 162,
    "init": 4,
    "cr": 9,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/drow-house-captain-mpmm.js"
  },
  {
    "name": "Drow Inquisitor",
    "ac": 16,
    "hp": 149,
    "init": 2,
    "cr": 14,
    "type": "humanoid (cleric",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/drow-inquisitor-mpmm.js"
  },
  {
    "name": "Drow Matron Mother",
    "ac": 17,
    "hp": 247,
    "init": 4,
    "cr": 20,
    "type": "humanoid (cleric",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/drow-matron-mother-mpmm 2.js"
  },
  {
    "name": "Drow Matron Mother",
    "ac": 17,
    "hp": 247,
    "init": 4,
    "cr": 20,
    "type": "humanoid (cleric",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/drow-matron-mother-mpmm.js"
  },
  {
    "name": "Drow Shadowblade",
    "ac": 17,
    "hp": 150,
    "init": 5,
    "cr": 11,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/drow-shadowblade-mpmm.js"
  },
  {
    "name": "Duergar Despot",
    "ac": 21,
    "hp": 119,
    "init": -3,
    "cr": 12,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-despot-mpmm.js"
  },
  {
    "name": "Duergar Hammerer",
    "ac": 17,
    "hp": 33,
    "init": -2,
    "cr": 2,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-hammerer-mpmm.js"
  },
  {
    "name": "Duergar Kavalrachni",
    "ac": 16,
    "hp": 26,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-kavalrachni-mpmm.js"
  },
  {
    "name": "Duergar Mind Master",
    "ac": 14,
    "hp": 39,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-mind-master-mpmm.js"
  },
  {
    "name": "Duergar Screamer",
    "ac": 15,
    "hp": 38,
    "init": -2,
    "cr": 3,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-screamer-mpmm.js"
  },
  {
    "name": "Duergar Soulblade",
    "ac": 14,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-soulblade-mpmm.js"
  },
  {
    "name": "Duergar Stone Guard",
    "ac": 18,
    "hp": 39,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-stone-guard-mpmm.js"
  },
  {
    "name": "Duergar Warlord",
    "ac": 20,
    "hp": 75,
    "init": 0,
    "cr": 6,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-warlord-mpmm.js"
  },
  {
    "name": "Duergar Xarrorn",
    "ac": 18,
    "hp": 26,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/duergar-xarrorn-mpmm.js"
  },
  {
    "name": "Dybbuk",
    "ac": 14,
    "hp": 37,
    "init": 4,
    "cr": 4,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/dybbuk-mpmm.js"
  },
  {
    "name": "Earth Elemental Myrmidon",
    "ac": 18,
    "hp": 127,
    "init": 0,
    "cr": 7,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/earth-elemental-myrmidon-mpmm.js"
  },
  {
    "name": "Eidolon",
    "ac": 9,
    "hp": 63,
    "init": -1,
    "cr": 12,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/eidolon-mpmm.js"
  },
  {
    "name": "Elder Oblex",
    "ac": 16,
    "hp": 115,
    "init": 3,
    "cr": 10,
    "type": "ooze",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/elder-oblex-mpmm.js"
  },
  {
    "name": "Elder Tempest",
    "ac": 19,
    "hp": 264,
    "init": 9,
    "cr": 23,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/elder-tempest-mpmm.js"
  },
  {
    "name": "Enchanter Wizard",
    "ac": 12,
    "hp": 49,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/enchanter-wizard-mpmm.js"
  },
  {
    "name": "Evoker Wizard",
    "ac": 12,
    "hp": 121,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/evoker-wizard-mpmm.js"
  },
  {
    "name": "Female Steeder",
    "ac": 14,
    "hp": 30,
    "init": 3,
    "cr": 1,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/female-steeder-mpmm.js"
  },
  {
    "name": "Fire Elemental Myrmidon",
    "ac": 18,
    "hp": 123,
    "init": 4,
    "cr": 7,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/fire-elemental-myrmidon-mpmm.js"
  },
  {
    "name": "Fire Giant Dreadnought",
    "ac": 21,
    "hp": 187,
    "init": -1,
    "cr": 14,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/fire-giant-dreadnought-mpmm.js"
  },
  {
    "name": "Firenewt Warlock of Imix",
    "ac": 10,
    "hp": 33,
    "init": 0,
    "cr": 1,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/firenewt-warlock-of-imix-mpmm.js"
  },
  {
    "name": "Firenewt Warrior",
    "ac": 13,
    "hp": 27,
    "init": 1,
    "cr": 0.5,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/firenewt-warrior-mpmm.js"
  },
  {
    "name": "Flail Snail",
    "ac": 16,
    "hp": 52,
    "init": -3,
    "cr": 3,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/flail-snail-mpmm.js"
  },
  {
    "name": "Flind",
    "ac": 16,
    "hp": 127,
    "init": 2,
    "cr": 9,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/flind-mpmm.js"
  },
  {
    "name": "Fraz-Urb'luu",
    "ac": 18,
    "hp": 337,
    "init": 1,
    "cr": 23,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/fraz-urbluu-mpmm.js"
  },
  {
    "name": "Froghemoth",
    "ac": 14,
    "hp": 161,
    "init": 1,
    "cr": 10,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/froghemoth-mpmm.js"
  },
  {
    "name": "Frost Giant Everlasting One",
    "ac": 15,
    "hp": 189,
    "init": -1,
    "cr": 12,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/frost-giant-everlasting-one-mpmm.js"
  },
  {
    "name": "Frost Salamander",
    "ac": 17,
    "hp": 168,
    "init": 1,
    "cr": 9,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/frost-salamander-mpmm.js"
  },
  {
    "name": "Gauth",
    "ac": 15,
    "hp": 52,
    "init": 2,
    "cr": 6,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/gauth-mpmm.js"
  },
  {
    "name": "Gazer",
    "ac": 13,
    "hp": 13,
    "init": 3,
    "cr": 0.5,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/gazer-mpmm.js"
  },
  {
    "name": "Geryon",
    "ac": 19,
    "hp": 300,
    "init": 3,
    "cr": 22,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/geryon-mpmm.js"
  },
  {
    "name": "Giant Strider",
    "ac": 14,
    "hp": 22,
    "init": 1,
    "cr": 1,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/giant-strider-mpmm.js"
  },
  {
    "name": "Giff",
    "ac": 16,
    "hp": 60,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/giff-mpmm.js"
  },
  {
    "name": "Girallon",
    "ac": 13,
    "hp": 59,
    "init": 3,
    "cr": 4,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/girallon-mpmm.js"
  },
  {
    "name": "Githyanki Gish",
    "ac": 17,
    "hp": 130,
    "init": 2,
    "cr": 10,
    "type": "humanoid (gith",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/githyanki-gish-mpmm.js"
  },
  {
    "name": "Githyanki Kith'rak",
    "ac": 18,
    "hp": 180,
    "init": 3,
    "cr": 12,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/githyanki-kithrak-mpmm.js"
  },
  {
    "name": "Githyanki Supreme Commander",
    "ac": 18,
    "hp": 187,
    "init": 3,
    "cr": 14,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/githyanki-supreme-commander-mpmm.js"
  },
  {
    "name": "Githzerai Anarch",
    "ac": 20,
    "hp": 144,
    "init": 5,
    "cr": 16,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/githzerai-anarch-mpmm.js"
  },
  {
    "name": "Githzerai Enlightened",
    "ac": 18,
    "hp": 112,
    "init": 4,
    "cr": 10,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/githzerai-enlightened-mpmm.js"
  },
  {
    "name": "Gnoll Flesh Gnawer",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/gnoll-flesh-gnawer-mpmm.js"
  },
  {
    "name": "Gnoll Hunter",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/gnoll-hunter-mpmm.js"
  },
  {
    "name": "Gnoll Witherling",
    "ac": 12,
    "hp": 11,
    "init": -1,
    "cr": 0.25,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/gnoll-witherling-mpmm.js"
  },
  {
    "name": "Gray Render",
    "ac": 19,
    "hp": 189,
    "init": 1,
    "cr": 12,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/gray-render-mpmm.js"
  },
  {
    "name": "Graz'zt",
    "ac": 20,
    "hp": 346,
    "init": 2,
    "cr": 24,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grazzt-mpmm.js"
  },
  {
    "name": "Green Abishai",
    "ac": 18,
    "hp": 195,
    "init": 3,
    "cr": 15,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/green-abishai-mpmm.js"
  },
  {
    "name": "Grung (Blue)",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-blue-mpmm.js"
  },
  {
    "name": "Grung Elite Warrior (Blue)",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-elite-warrior-blue-mpmm.js"
  },
  {
    "name": "Grung Elite Warrior (Gold)",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-elite-warrior-gold-mpmm.js"
  },
  {
    "name": "Grung Elite Warrior (Green)",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-elite-warrior-green-mpmm.js"
  },
  {
    "name": "Grung Elite Warrior",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-elite-warrior-mpmm.js"
  },
  {
    "name": "Grung Elite Warrior (Orange)",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-elite-warrior-orange-mpmm.js"
  },
  {
    "name": "Grung Elite Warrior (Purple)",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-elite-warrior-purple-mpmm.js"
  },
  {
    "name": "Grung Elite Warrior (Red)",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-elite-warrior-red-mpmm.js"
  },
  {
    "name": "Grung (Gold)",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-gold-mpmm.js"
  },
  {
    "name": "Grung (Green)",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-green-mpmm.js"
  },
  {
    "name": "Grung",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-mpmm.js"
  },
  {
    "name": "Grung (Orange)",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-orange-mpmm.js"
  },
  {
    "name": "Grung (Purple)",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-purple-mpmm.js"
  },
  {
    "name": "Grung (Red)",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-red-mpmm.js"
  },
  {
    "name": "Grung Wildling (Blue)",
    "ac": 16,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-wildling-blue-mpmm.js"
  },
  {
    "name": "Grung Wildling (Gold)",
    "ac": 16,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-wildling-gold-mpmm.js"
  },
  {
    "name": "Grung Wildling (Green)",
    "ac": 16,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-wildling-green-mpmm.js"
  },
  {
    "name": "Grung Wildling",
    "ac": 16,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-wildling-mpmm.js"
  },
  {
    "name": "Grung Wildling (Orange)",
    "ac": 16,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-wildling-orange-mpmm.js"
  },
  {
    "name": "Grung Wildling (Purple)",
    "ac": 16,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-wildling-purple-mpmm.js"
  },
  {
    "name": "Grung Wildling (Red)",
    "ac": 16,
    "hp": 27,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/grung-wildling-red-mpmm.js"
  },
  {
    "name": "Guard Drake (Black)",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/guard-drake-black-mpmm.js"
  },
  {
    "name": "Guard Drake (Blue)",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/guard-drake-blue-mpmm.js"
  },
  {
    "name": "Guard Drake (Green)",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/guard-drake-green-mpmm.js"
  },
  {
    "name": "Guard Drake",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/guard-drake-mpmm.js"
  },
  {
    "name": "Guard Drake (Red)",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/guard-drake-red-mpmm.js"
  },
  {
    "name": "Guard Drake (White)",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/guard-drake-white-mpmm.js"
  },
  {
    "name": "Hadrosaurus",
    "ac": 11,
    "hp": 19,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/hadrosaurus-mpmm.js"
  },
  {
    "name": "Hellfire Engine",
    "ac": 18,
    "hp": 216,
    "init": 3,
    "cr": 16,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/hellfire-engine-mpmm.js"
  },
  {
    "name": "Hobgoblin Devastator",
    "ac": 13,
    "hp": 45,
    "init": 1,
    "cr": 4,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/hobgoblin-devastator-mpmm.js"
  },
  {
    "name": "Hobgoblin Iron Shadow",
    "ac": 15,
    "hp": 32,
    "init": 3,
    "cr": 2,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/hobgoblin-iron-shadow-mpmm.js"
  },
  {
    "name": "Howler",
    "ac": 16,
    "hp": 90,
    "init": 3,
    "cr": 8,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/howler-mpmm.js"
  },
  {
    "name": "Hungry Sorrowsworn",
    "ac": 17,
    "hp": 225,
    "init": 0,
    "cr": 11,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/hungry-sorrowsworn-mpmm.js"
  },
  {
    "name": "Hutijin",
    "ac": 19,
    "hp": 200,
    "init": 2,
    "cr": 21,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/hutijin-mpmm.js"
  },
  {
    "name": "Hydroloth",
    "ac": 15,
    "hp": 135,
    "init": 5,
    "cr": 9,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/hydroloth-mpmm.js"
  },
  {
    "name": "Illusionist Wizard",
    "ac": 12,
    "hp": 44,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/illusionist-wizard-mpmm.js"
  },
  {
    "name": "Juiblex",
    "ac": 18,
    "hp": 350,
    "init": 0,
    "cr": 23,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/juiblex-mpmm.js"
  },
  {
    "name": "Ki-rin",
    "ac": 20,
    "hp": 153,
    "init": 3,
    "cr": 12,
    "type": "celestial",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/ki-rin-mpmm 2.js"
  },
  {
    "name": "Ki-rin",
    "ac": 20,
    "hp": 153,
    "init": 3,
    "cr": 12,
    "type": "celestial",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/ki-rin-mpmm.js"
  },
  {
    "name": "Kobold Dragonshield",
    "ac": 15,
    "hp": 44,
    "init": 2,
    "cr": 1,
    "type": "dragon",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/kobold-dragonshield-mpmm.js"
  },
  {
    "name": "Kobold Inventor",
    "ac": 12,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/kobold-inventor-mpmm.js"
  },
  {
    "name": "Kobold Scale Sorcerer",
    "ac": 15,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/kobold-scale-sorcerer-mpmm.js"
  },
  {
    "name": "Korred",
    "ac": 17,
    "hp": 93,
    "init": 2,
    "cr": 7,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/korred-mpmm.js"
  },
  {
    "name": "Kraken Priest",
    "ac": 15,
    "hp": 75,
    "init": 0,
    "cr": 5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/kraken-priest-mpmm.js"
  },
  {
    "name": "Kruthik Hive Lord",
    "ac": 20,
    "hp": 102,
    "init": 3,
    "cr": 5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/kruthik-hive-lord-mpmm.js"
  },
  {
    "name": "Leucrotta",
    "ac": 14,
    "hp": 67,
    "init": 2,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/leucrotta-mpmm.js"
  },
  {
    "name": "Leviathan",
    "ac": 17,
    "hp": 328,
    "init": 7,
    "cr": 20,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/leviathan-mpmm.js"
  },
  {
    "name": "Lonely Sorrowsworn",
    "ac": 16,
    "hp": 112,
    "init": 1,
    "cr": 9,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/lonely-sorrowsworn-mpmm.js"
  },
  {
    "name": "Lost Sorrowsworn",
    "ac": 15,
    "hp": 78,
    "init": 1,
    "cr": 7,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/lost-sorrowsworn-mpmm.js"
  },
  {
    "name": "Male Steeder",
    "ac": 12,
    "hp": 13,
    "init": 1,
    "cr": 0.25,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/male-steeder-mpmm.js"
  },
  {
    "name": "Martial Arts Adept",
    "ac": 16,
    "hp": 60,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/martial-arts-adept-mpmm.js"
  },
  {
    "name": "Marut",
    "ac": 22,
    "hp": 432,
    "init": 1,
    "cr": 25,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/marut-mpmm.js"
  },
  {
    "name": "Master Thief",
    "ac": 16,
    "hp": 84,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/master-thief-mpmm.js"
  },
  {
    "name": "Maurezhi",
    "ac": 15,
    "hp": 88,
    "init": 3,
    "cr": 7,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/maurezhi-mpmm.js"
  },
  {
    "name": "Maw Demon",
    "ac": 13,
    "hp": 33,
    "init": -1,
    "cr": 1,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/maw-demon-mpmm.js"
  },
  {
    "name": "Meazel",
    "ac": 13,
    "hp": 35,
    "init": 3,
    "cr": 1,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/meazel-mpmm.js"
  },
  {
    "name": "Meenlock",
    "ac": 15,
    "hp": 31,
    "init": 2,
    "cr": 2,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/meenlock-mpmm.js"
  },
  {
    "name": "Merregon",
    "ac": 16,
    "hp": 45,
    "init": 2,
    "cr": 4,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/merregon-mpmm.js"
  },
  {
    "name": "Mindwitness",
    "ac": 15,
    "hp": 75,
    "init": 2,
    "cr": 5,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/mindwitness-mpmm.js"
  },
  {
    "name": "Moloch",
    "ac": 19,
    "hp": 253,
    "init": 4,
    "cr": 21,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/moloch-mpmm.js"
  },
  {
    "name": "Molydeus",
    "ac": 19,
    "hp": 216,
    "init": 6,
    "cr": 21,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/molydeus-mpmm.js"
  },
  {
    "name": "Mouth of Grolantor",
    "ac": 14,
    "hp": 105,
    "init": 0,
    "cr": 6,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/mouth-of-grolantor-mpmm.js"
  },
  {
    "name": "Nabassu",
    "ac": 18,
    "hp": 190,
    "init": 2,
    "cr": 15,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/nabassu-mpmm.js"
  },
  {
    "name": "Nagpa",
    "ac": 19,
    "hp": 203,
    "init": 2,
    "cr": 17,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/nagpa-mpmm.js"
  },
  {
    "name": "Narzugon",
    "ac": 20,
    "hp": 112,
    "init": 0,
    "cr": 13,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/narzugon-mpmm.js"
  },
  {
    "name": "Necromancer Wizard",
    "ac": 12,
    "hp": 110,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/necromancer-wizard-mpmm.js"
  },
  {
    "name": "Neogi Hatchling",
    "ac": 11,
    "hp": 7,
    "init": 1,
    "cr": 0.125,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/neogi-hatchling-mpmm.js"
  },
  {
    "name": "Neogi Master",
    "ac": 15,
    "hp": 71,
    "init": 3,
    "cr": 4,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/neogi-master-mpmm.js"
  },
  {
    "name": "Neogi",
    "ac": 15,
    "hp": 33,
    "init": 3,
    "cr": 3,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/neogi-mpmm.js"
  },
  {
    "name": "Neothelid",
    "ac": 16,
    "hp": 232,
    "init": -2,
    "cr": 13,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/neothelid-mpmm.js"
  },
  {
    "name": "Nightwalker",
    "ac": 14,
    "hp": 337,
    "init": 4,
    "cr": 20,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/nightwalker-mpmm.js"
  },
  {
    "name": "Nilbog",
    "ac": 13,
    "hp": 7,
    "init": 2,
    "cr": 1,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/nilbog-mpmm.js"
  },
  {
    "name": "Nupperibo",
    "ac": 13,
    "hp": 11,
    "init": 0,
    "cr": 0.5,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/nupperibo-mpmm.js"
  },
  {
    "name": "Oblex Spawn",
    "ac": 13,
    "hp": 18,
    "init": 3,
    "cr": 0.25,
    "type": "ooze",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/oblex-spawn-mpmm.js"
  },
  {
    "name": "Ogre Battering Ram",
    "ac": 11,
    "hp": 76,
    "init": -1,
    "cr": 4,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/ogre-battering-ram-mpmm.js"
  },
  {
    "name": "Ogre Bolt Launcher",
    "ac": 13,
    "hp": 59,
    "init": 1,
    "cr": 2,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/ogre-bolt-launcher-mpmm.js"
  },
  {
    "name": "Ogre Chain Brute",
    "ac": 11,
    "hp": 59,
    "init": -1,
    "cr": 3,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/ogre-chain-brute-mpmm.js"
  },
  {
    "name": "Ogre Howdah",
    "ac": 15,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/ogre-howdah-mpmm.js"
  },
  {
    "name": "Oinoloth",
    "ac": 17,
    "hp": 119,
    "init": 3,
    "cr": 12,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/oinoloth-mpmm.js"
  },
  {
    "name": "Orcus",
    "ac": 17,
    "hp": 405,
    "init": 2,
    "cr": 26,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/orcus-mpmm.js"
  },
  {
    "name": "Orthon",
    "ac": 17,
    "hp": 105,
    "init": 3,
    "cr": 10,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/orthon-mpmm.js"
  },
  {
    "name": "Ox",
    "ac": 10,
    "hp": 15,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/ox-mpmm.js"
  },
  {
    "name": "Phoenix",
    "ac": 18,
    "hp": 175,
    "init": 8,
    "cr": 16,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/phoenix-mpmm.js"
  },
  {
    "name": "Quetzalcoatlus",
    "ac": 13,
    "hp": 30,
    "init": 1,
    "cr": 2,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/quetzalcoatlus-mpmm.js"
  },
  {
    "name": "Quickling",
    "ac": 16,
    "hp": 10,
    "init": 6,
    "cr": 1,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/quickling-mpmm.js"
  },
  {
    "name": "Red Abishai",
    "ac": 22,
    "hp": 289,
    "init": 3,
    "cr": 19,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/red-abishai-mpmm.js"
  },
  {
    "name": "Redcap",
    "ac": 14,
    "hp": 45,
    "init": 1,
    "cr": 3,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/redcap-mpmm.js"
  },
  {
    "name": "Retriever",
    "ac": 19,
    "hp": 210,
    "init": 3,
    "cr": 14,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/retriever-mpmm.js"
  },
  {
    "name": "Rot Troll",
    "ac": 16,
    "hp": 138,
    "init": 1,
    "cr": 9,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/rot-troll-mpmm.js"
  },
  {
    "name": "Rutterkin",
    "ac": 12,
    "hp": 37,
    "init": 2,
    "cr": 2,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/rutterkin-mpmm.js"
  },
  {
    "name": "Sacred Statue",
    "ac": 19,
    "hp": 95,
    "init": -1,
    "cr": 0,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/sacred-statue-mpmm.js"
  },
  {
    "name": "Sea Spawn",
    "ac": 11,
    "hp": 32,
    "init": -1,
    "cr": 1,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/sea-spawn-mpmm.js"
  },
  {
    "name": "Shadar-kai Gloom Weaver",
    "ac": 14,
    "hp": 104,
    "init": 4,
    "cr": 9,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/shadar-kai-gloom-weaver-mpmm.js"
  },
  {
    "name": "Shadar-kai Shadow Dancer",
    "ac": 15,
    "hp": 71,
    "init": 3,
    "cr": 7,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/shadar-kai-shadow-dancer-mpmm.js"
  },
  {
    "name": "Shadar-kai Soul Monger",
    "ac": 15,
    "hp": 136,
    "init": 3,
    "cr": 11,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/shadar-kai-soul-monger-mpmm.js"
  },
  {
    "name": "Shadow Mastiff Alpha",
    "ac": 12,
    "hp": 44,
    "init": 2,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/shadow-mastiff-alpha-mpmm.js"
  },
  {
    "name": "Shadow Mastiff",
    "ac": 12,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/shadow-mastiff-mpmm.js"
  },
  {
    "name": "Shoosuva",
    "ac": 14,
    "hp": 136,
    "init": 1,
    "cr": 8,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/shoosuva-mpmm.js"
  },
  {
    "name": "Sibriex",
    "ac": 19,
    "hp": 150,
    "init": -4,
    "cr": 18,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/sibriex-mpmm.js"
  },
  {
    "name": "Skulk",
    "ac": 14,
    "hp": 18,
    "init": 4,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/skulk-mpmm.js"
  },
  {
    "name": "Skull Lord",
    "ac": 18,
    "hp": 112,
    "init": 3,
    "cr": 15,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/skull-lord-mpmm.js"
  },
  {
    "name": "Slithering Tracker",
    "ac": 14,
    "hp": 39,
    "init": 4,
    "cr": 3,
    "type": "ooze",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/slithering-tracker-mpmm.js"
  },
  {
    "name": "Spawn of Kyuss",
    "ac": 10,
    "hp": 76,
    "init": 0,
    "cr": 5,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/spawn-of-kyuss-mpmm.js"
  },
  {
    "name": "Spirit Troll",
    "ac": 17,
    "hp": 130,
    "init": 3,
    "cr": 11,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/spirit-troll-mpmm.js"
  },
  {
    "name": "Spring Eladrin",
    "ac": 19,
    "hp": 165,
    "init": 3,
    "cr": 10,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/spring-eladrin-mpmm.js"
  },
  {
    "name": "Star Spawn Grue",
    "ac": 11,
    "hp": 17,
    "init": 1,
    "cr": 0.25,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/star-spawn-grue-mpmm.js"
  },
  {
    "name": "Star Spawn Hulk",
    "ac": 16,
    "hp": 136,
    "init": -1,
    "cr": 10,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/star-spawn-hulk-mpmm.js"
  },
  {
    "name": "Star Spawn Larva Mage",
    "ac": 16,
    "hp": 168,
    "init": 1,
    "cr": 16,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/star-spawn-larva-mage-mpmm.js"
  },
  {
    "name": "Star Spawn Mangler",
    "ac": 14,
    "hp": 71,
    "init": 4,
    "cr": 5,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/star-spawn-mangler-mpmm.js"
  },
  {
    "name": "Star Spawn Seer",
    "ac": 17,
    "hp": 153,
    "init": 1,
    "cr": 13,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/star-spawn-seer-mpmm.js"
  },
  {
    "name": "Steel Predator",
    "ac": 20,
    "hp": 207,
    "init": 3,
    "cr": 16,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/steel-predator-mpmm.js"
  },
  {
    "name": "Stegosaurus",
    "ac": 13,
    "hp": 76,
    "init": -1,
    "cr": 4,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/stegosaurus-mpmm.js"
  },
  {
    "name": "Stench Kow",
    "ac": 10,
    "hp": 15,
    "init": 0,
    "cr": 0.5,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/stench-kow-mpmm.js"
  },
  {
    "name": "Stone Cursed",
    "ac": 17,
    "hp": 19,
    "init": -3,
    "cr": 1,
    "type": "construct",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/stone-cursed-mpmm.js"
  },
  {
    "name": "Stone Giant Dreamwalker",
    "ac": 18,
    "hp": 161,
    "init": 2,
    "cr": 10,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/stone-giant-dreamwalker-mpmm.js"
  },
  {
    "name": "Summer Eladrin",
    "ac": 19,
    "hp": 165,
    "init": 5,
    "cr": 10,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/summer-eladrin-mpmm.js"
  },
  {
    "name": "Swarm of Cranium Rats",
    "ac": 12,
    "hp": 76,
    "init": 2,
    "cr": 5,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/swarm-of-cranium-rats-mpmm.js"
  },
  {
    "name": "Swarm of Rot Grubs",
    "ac": 8,
    "hp": 22,
    "init": -2,
    "cr": 0.5,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/swarm-of-rot-grubs-mpmm.js"
  },
  {
    "name": "Swashbuckler",
    "ac": 17,
    "hp": 66,
    "init": 4,
    "cr": 3,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/swashbuckler-mpmm.js"
  },
  {
    "name": "Sword Wraith Commander",
    "ac": 18,
    "hp": 127,
    "init": 2,
    "cr": 8,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/sword-wraith-commander-mpmm.js"
  },
  {
    "name": "Sword Wraith Warrior",
    "ac": 16,
    "hp": 45,
    "init": 1,
    "cr": 3,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/sword-wraith-warrior-mpmm.js"
  },
  {
    "name": "Tanarukk",
    "ac": 14,
    "hp": 95,
    "init": 1,
    "cr": 5,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/tanarukk-mpmm.js"
  },
  {
    "name": "Thorny Vegepygmy",
    "ac": 14,
    "hp": 27,
    "init": 1,
    "cr": 1,
    "type": "plant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/thorny-vegepygmy-mpmm.js"
  },
  {
    "name": "Titivilus",
    "ac": 20,
    "hp": 150,
    "init": 6,
    "cr": 16,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/titivilus-mpmm.js"
  },
  {
    "name": "Tlincalli",
    "ac": 15,
    "hp": 85,
    "init": 1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/tlincalli-mpmm.js"
  },
  {
    "name": "Tortle Druid",
    "ac": 17,
    "hp": 33,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/tortle-druid-mpmm.js"
  },
  {
    "name": "Tortle",
    "ac": 17,
    "hp": 22,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/tortle-mpmm.js"
  },
  {
    "name": "Transmuter Wizard",
    "ac": 12,
    "hp": 49,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/transmuter-wizard-mpmm.js"
  },
  {
    "name": "Trapper",
    "ac": 13,
    "hp": 68,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/trapper-mpmm.js"
  },
  {
    "name": "Ulitharid",
    "ac": 15,
    "hp": 127,
    "init": 1,
    "cr": 9,
    "type": "aberration",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/ulitharid-mpmm.js"
  },
  {
    "name": "Vampiric Mist",
    "ac": 13,
    "hp": 30,
    "init": 3,
    "cr": 3,
    "type": "undead",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/vampiric-mist-mpmm.js"
  },
  {
    "name": "Vargouille",
    "ac": 12,
    "hp": 18,
    "init": 2,
    "cr": 1,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/vargouille-mpmm.js"
  },
  {
    "name": "Vegepygmy Chief",
    "ac": 14,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "plant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/vegepygmy-chief-mpmm.js"
  },
  {
    "name": "Vegepygmy",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "plant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/vegepygmy-mpmm.js"
  },
  {
    "name": "Velociraptor",
    "ac": 13,
    "hp": 10,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/velociraptor-mpmm.js"
  },
  {
    "name": "Venom Troll",
    "ac": 15,
    "hp": 94,
    "init": 1,
    "cr": 7,
    "type": "giant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/venom-troll-mpmm.js"
  },
  {
    "name": "War Priest",
    "ac": 18,
    "hp": 117,
    "init": 0,
    "cr": 9,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/war-priest-mpmm.js"
  },
  {
    "name": "Warlock of the Archfey",
    "ac": 13,
    "hp": 67,
    "init": 3,
    "cr": 4,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/warlock-of-the-archfey-mpmm.js"
  },
  {
    "name": "Warlock of the Fiend",
    "ac": 13,
    "hp": 78,
    "init": 3,
    "cr": 7,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/warlock-of-the-fiend-mpmm.js"
  },
  {
    "name": "Warlock of the Great Old One",
    "ac": 13,
    "hp": 91,
    "init": 3,
    "cr": 6,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/warlock-of-the-great-old-one-mpmm.js"
  },
  {
    "name": "Warlord",
    "ac": 18,
    "hp": 229,
    "init": 3,
    "cr": 12,
    "type": "humanoid",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/warlord-mpmm.js"
  },
  {
    "name": "Wastrilith",
    "ac": 18,
    "hp": 157,
    "init": 4,
    "cr": 13,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/wastrilith-mpmm.js"
  },
  {
    "name": "Water Elemental Myrmidon",
    "ac": 18,
    "hp": 127,
    "init": 2,
    "cr": 7,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/water-elemental-myrmidon-mpmm.js"
  },
  {
    "name": "White Abishai",
    "ac": 15,
    "hp": 68,
    "init": 0,
    "cr": 6,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/white-abishai-mpmm.js"
  },
  {
    "name": "Winter Eladrin",
    "ac": 19,
    "hp": 165,
    "init": 3,
    "cr": 10,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/winter-eladrin-mpmm.js"
  },
  {
    "name": "Wood Woad",
    "ac": 18,
    "hp": 75,
    "init": 1,
    "cr": 5,
    "type": "plant",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/wood-woad-mpmm.js"
  },
  {
    "name": "Wretched Sorrowsworn",
    "ac": 15,
    "hp": 10,
    "init": 1,
    "cr": 0.25,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/wretched-sorrowsworn-mpmm.js"
  },
  {
    "name": "Xvart",
    "ac": 13,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/xvart-mpmm.js"
  },
  {
    "name": "Xvart Warlock of Raxivort",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/xvart-warlock-of-raxivort-mpmm.js"
  },
  {
    "name": "Yagnoloth",
    "ac": 17,
    "hp": 147,
    "init": 2,
    "cr": 11,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/yagnoloth-mpmm.js"
  },
  {
    "name": "Yeenoghu",
    "ac": 20,
    "hp": 333,
    "init": 3,
    "cr": 24,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/yeenoghu-mpmm.js"
  },
  {
    "name": "Yeth Hound",
    "ac": 14,
    "hp": 51,
    "init": 3,
    "cr": 4,
    "type": "fey",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/yeth-hound-mpmm.js"
  },
  {
    "name": "Young Kruthik",
    "ac": 16,
    "hp": 9,
    "init": 3,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/young-kruthik-mpmm.js"
  },
  {
    "name": "Yuan-ti Anathema",
    "ac": 16,
    "hp": 189,
    "init": 1,
    "cr": 12,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/yuan-ti-anathema-mpmm.js"
  },
  {
    "name": "Yuan-ti Broodguard",
    "ac": 14,
    "hp": 45,
    "init": 2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/yuan-ti-broodguard-mpmm.js"
  },
  {
    "name": "Yuan-ti Mind Whisperer",
    "ac": 14,
    "hp": 71,
    "init": 2,
    "cr": 4,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/yuan-ti-mind-whisperer-mpmm.js"
  },
  {
    "name": "Yuan-ti Nightmare Speaker",
    "ac": 14,
    "hp": 71,
    "init": 2,
    "cr": 4,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/yuan-ti-nightmare-speaker-mpmm.js"
  },
  {
    "name": "Yuan-ti Pit Master",
    "ac": 14,
    "hp": 88,
    "init": 2,
    "cr": 5,
    "type": "monstrosity",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/yuan-ti-pit-master-mpmm.js"
  },
  {
    "name": "Zaratan",
    "ac": 21,
    "hp": 307,
    "init": 0,
    "cr": 22,
    "type": "elemental",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/zaratan-mpmm.js"
  },
  {
    "name": "Zariel",
    "ac": 21,
    "hp": 420,
    "init": 7,
    "cr": 26,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/zariel-mpmm.js"
  },
  {
    "name": "Zuggtmoy",
    "ac": 18,
    "hp": 304,
    "init": 2,
    "cr": 23,
    "type": "fiend",
    "source": "Mordenkainen Presents: Monsters of the Multiverse",
    "htmlLink": "./custom/index.html?file=mpmm/zuggtmoy-mpmm.js"
  },
  {
    "name": "Abyssal Wretch",
    "ac": 11,
    "hp": 18,
    "init": 1,
    "cr": 0.25,
    "type": "fiend",
    "source": "Mordenkainen's Tome of Foes",
    "htmlLink": "./custom/index.html?file=mtf/abyssal-wretch-mtf.js"
  },
  {
    "name": "Aljanor Keenblade",
    "ac": 10,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/aljanor-keenblade-oota.js"
  },
  {
    "name": "Amarith Coppervein",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/amarith-coppervein-oota.js"
  },
  {
    "name": "Animated Drow Statue",
    "ac": 18,
    "hp": 33,
    "init": 0,
    "cr": 1,
    "type": "elemental",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/animated-drow-statue-oota.js"
  },
  {
    "name": "Asha Vandree",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/asha-vandree-oota.js"
  },
  {
    "name": "Awakened Zurkhwood",
    "ac": 13,
    "hp": 59,
    "init": -2,
    "cr": 2,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/awakened-zurkhwood-oota.js"
  },
  {
    "name": "Blurg",
    "ac": 18,
    "hp": 42,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/blurg-oota.js"
  },
  {
    "name": "Bridesmaid of Zuggtmoy",
    "ac": 13,
    "hp": 22,
    "init": 0,
    "cr": 0.125,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/bridesmaid-of-zuggtmoy-oota.js"
  },
  {
    "name": "Buppido",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/buppido-oota.js"
  },
  {
    "name": "Cave Badger",
    "ac": 12,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/cave-badger-oota.js"
  },
  {
    "name": "Chamberlain of Zuggtmoy",
    "ac": 13,
    "hp": 45,
    "init": -2,
    "cr": 2,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/chamberlain-of-zuggtmoy-oota.js"
  },
  {
    "name": "Chuul Spore Servant",
    "ac": 16,
    "hp": 93,
    "init": 0,
    "cr": 4,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/chuul-spore-servant-oota.js"
  },
  {
    "name": "Deepking Horgar Steelshadow V",
    "ac": 20,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/deepking-horgar-steelshadow-v-oota.js"
  },
  {
    "name": "Droki",
    "ac": 15,
    "hp": 31,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/droki-oota.js"
  },
  {
    "name": "Drow Acolyte",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-acolyte-oota.js"
  },
  {
    "name": "Drow Assassin",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-assassin-oota.js"
  },
  {
    "name": "Drow Bandit",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-bandit-oota.js"
  },
  {
    "name": "Drow Commoner",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-commoner-oota.js"
  },
  {
    "name": "Drow Cultist",
    "ac": 12,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-cultist-oota.js"
  },
  {
    "name": "Drow Guard",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-guard-oota.js"
  },
  {
    "name": "Drow Noble",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-noble-oota.js"
  },
  {
    "name": "Drow Scout",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-scout-oota.js"
  },
  {
    "name": "Drow Spore Servant",
    "ac": 15,
    "hp": 13,
    "init": 2,
    "cr": 0.125,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-spore-servant-oota.js"
  },
  {
    "name": "Drow Spy",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/drow-spy-oota.js"
  },
  {
    "name": "Duergar Alchemist",
    "ac": 16,
    "hp": 26,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/duergar-alchemist-oota.js"
  },
  {
    "name": "Duergar Darkhaft",
    "ac": 16,
    "hp": 26,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/duergar-darkhaft-oota.js"
  },
  {
    "name": "Duergar Keeper of the Flame",
    "ac": 16,
    "hp": 26,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/duergar-keeper-of-the-flame-oota.js"
  },
  {
    "name": "Duergar Spore Servant",
    "ac": 16,
    "hp": 26,
    "init": 0,
    "cr": 0.5,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/duergar-spore-servant-oota.js"
  },
  {
    "name": "Eldeth Feldrun",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/eldeth-feldrun-oota.js"
  },
  {
    "name": "Emerald Enclave Scout",
    "ac": 16,
    "hp": 19,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/emerald-enclave-scout-oota.js"
  },
  {
    "name": "Fiendish Giant Spider",
    "ac": 13,
    "hp": 11,
    "init": 3,
    "cr": 0.5,
    "type": "beast",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/fiendish-giant-spider-oota.js"
  },
  {
    "name": "Four-Armed Statue",
    "ac": 17,
    "hp": 178,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/four-armed-statue-oota.js"
  },
  {
    "name": "Gash",
    "ac": 15,
    "hp": 11,
    "init": 1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/gash-oota.js"
  },
  {
    "name": "Ghazrim DuLoc",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/ghazrim-duloc-oota.js"
  },
  {
    "name": "Giant Riding Lizard",
    "ac": 12,
    "hp": 19,
    "init": 1,
    "cr": 0.25,
    "type": "beast",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/giant-riding-lizard-oota.js"
  },
  {
    "name": "Giant Rocktopus",
    "ac": 11,
    "hp": 52,
    "init": 1,
    "cr": 1,
    "type": "beast",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/giant-rocktopus-oota.js"
  },
  {
    "name": "Glabbagool",
    "ac": 6,
    "hp": 84,
    "init": -4,
    "cr": 2,
    "type": "ooze",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/glabbagool-oota.js"
  },
  {
    "name": "Glyphic Shroomlight",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/glyphic-shroomlight-oota.js"
  },
  {
    "name": "Grazilaxx",
    "ac": 15,
    "hp": 71,
    "init": 1,
    "cr": 7,
    "type": "aberration",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/grazilaxx-oota.js"
  },
  {
    "name": "Grisha",
    "ac": 18,
    "hp": 33,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/grisha-oota.js"
  },
  {
    "name": "Hanne Hallen",
    "ac": 12,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/hanne-hallen-oota.js"
  },
  {
    "name": "Hook Horror Spore Servant",
    "ac": 15,
    "hp": 75,
    "init": 0,
    "cr": 3,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/hook-horror-spore-servant-oota.js"
  },
  {
    "name": "Ilvara Mizzrym",
    "ac": 16,
    "hp": 71,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/ilvara-mizzrym-oota.js"
  },
  {
    "name": "Infant Basilisk",
    "ac": 11,
    "hp": 4,
    "init": -1,
    "cr": 0,
    "type": "monstrosity",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/infant-basilisk-oota.js"
  },
  {
    "name": "Infant Hook Horror",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "monstrosity",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/infant-hook-horror-oota.js"
  },
  {
    "name": "Ixitxachitl Cleric",
    "ac": 15,
    "hp": 18,
    "init": 3,
    "cr": 0.25,
    "type": "aberration",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/ixitxachitl-cleric-oota.js"
  },
  {
    "name": "Ixitxachitl",
    "ac": 15,
    "hp": 18,
    "init": 3,
    "cr": 0.25,
    "type": "aberration",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/ixitxachitl-oota.js"
  },
  {
    "name": "Jade Giant Spider",
    "ac": 17,
    "hp": 250,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/jade-giant-spider-oota.js"
  },
  {
    "name": "Jimjar",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/jimjar-oota.js"
  },
  {
    "name": "Juvenile Hook Horror",
    "ac": 13,
    "hp": 39,
    "init": 0,
    "cr": 2,
    "type": "monstrosity",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/juvenile-hook-horror-oota.js"
  },
  {
    "name": "Khalessa Draga",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/khalessa-draga-oota.js"
  },
  {
    "name": "Kinyel Druu'giir",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/kinyel-druugiir-oota.js"
  },
  {
    "name": "Kurr",
    "ac": 14,
    "hp": 65,
    "init": 2,
    "cr": 4,
    "type": "fiend",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/kurr-oota.js"
  },
  {
    "name": "Lords' Alliance Guard",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/lords-alliance-guard-oota.js"
  },
  {
    "name": "Lords' Alliance Spy",
    "ac": 13,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/lords-alliance-spy-oota.js"
  },
  {
    "name": "Lorthuun",
    "ac": 18,
    "hp": 180,
    "init": 2,
    "cr": 9,
    "type": "aberration",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/lorthuun-oota.js"
  },
  {
    "name": "Mev Flintknapper",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/mev-flintknapper-oota.js"
  },
  {
    "name": "Narrak",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/narrak-oota.js"
  },
  {
    "name": "Ougalop",
    "ac": 13,
    "hp": 18,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/ougalop-oota.js"
  },
  {
    "name": "Peebles",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/peebles-oota.js"
  },
  {
    "name": "Prince Derendil",
    "ac": 13,
    "hp": 45,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/prince-derendil-oota.js"
  },
  {
    "name": "Princess Ebonmire",
    "ac": 7,
    "hp": 85,
    "init": -3,
    "cr": 4,
    "type": "ooze",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/princess-ebonmire-oota.js"
  },
  {
    "name": "Quenthel Baenre",
    "ac": 19,
    "hp": 132,
    "init": 2,
    "cr": 22,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/quenthel-baenre-oota.js"
  },
  {
    "name": "Regenerating Black Pudding",
    "ac": 7,
    "hp": 85,
    "init": -3,
    "cr": 5,
    "type": "ooze",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/regenerating-black-pudding-oota.js"
  },
  {
    "name": "Rihuud",
    "ac": 17,
    "hp": 126,
    "init": 2,
    "cr": 7,
    "type": "giant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/rihuud-oota.js"
  },
  {
    "name": "Ront",
    "ac": 13,
    "hp": 15,
    "init": 1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/ront-oota.js"
  },
  {
    "name": "Rumpadump",
    "ac": 10,
    "hp": 7,
    "init": 0,
    "cr": 0,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/rumpadump-oota.js"
  },
  {
    "name": "Rystia Zav",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/rystia-zav-oota.js"
  },
  {
    "name": "Sarith Kzekarit",
    "ac": 15,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/sarith-kzekarit-oota.js"
  },
  {
    "name": "Shedrak of the Eyes",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/shedrak-of-the-eyes-oota.js"
  },
  {
    "name": "Shuushar the Awakened",
    "ac": 13,
    "hp": 18,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/shuushar-the-awakened-oota.js"
  },
  {
    "name": "Skriss",
    "ac": 11,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/skriss-oota.js"
  },
  {
    "name": "Sladis Vadir",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/sladis-vadir-oota.js"
  },
  {
    "name": "Sloopidoop",
    "ac": 13,
    "hp": 97,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/sloopidoop-oota.js"
  },
  {
    "name": "Sovereign Basidia",
    "ac": 13,
    "hp": 60,
    "init": 0,
    "cr": 2,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/sovereign-basidia-oota.js"
  },
  {
    "name": "Spider King",
    "ac": 14,
    "hp": 44,
    "init": 3,
    "cr": 1,
    "type": "beast",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/spider-king-oota.js"
  },
  {
    "name": "Spiderbait",
    "ac": 15,
    "hp": 7,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/spiderbait-oota.js"
  },
  {
    "name": "Stool",
    "ac": 10,
    "hp": 7,
    "init": 0,
    "cr": 0,
    "type": "plant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/stool-oota.js"
  },
  {
    "name": "Svirfneblin Wererat",
    "ac": 12,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/svirfneblin-wererat-oota.js"
  },
  {
    "name": "The Pudding King",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 4,
    "type": "humanoid (gnome",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/the-pudding-king-oota.js"
  },
  {
    "name": "Themberchaud",
    "ac": 19,
    "hp": 256,
    "init": 0,
    "cr": 17,
    "type": "dragon",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/themberchaud-oota.js"
  },
  {
    "name": "Topsy",
    "ac": 12,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/topsy-oota.js"
  },
  {
    "name": "Troglodyte Champion of Laogzed",
    "ac": 14,
    "hp": 59,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/troglodyte-champion-of-laogzed-oota.js"
  },
  {
    "name": "Turvy",
    "ac": 12,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/turvy-oota.js"
  },
  {
    "name": "Two-Headed Troll",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 5,
    "type": "giant",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/two-headed-troll-oota.js"
  },
  {
    "name": "Vampiric Ixitxachitl Cleric",
    "ac": 16,
    "hp": 44,
    "init": 4,
    "cr": 2,
    "type": "aberration",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/vampiric-ixitxachitl-cleric-oota.js"
  },
  {
    "name": "Vampiric Ixitxachitl",
    "ac": 16,
    "hp": 44,
    "init": 4,
    "cr": 2,
    "type": "aberration",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/vampiric-ixitxachitl-oota.js"
  },
  {
    "name": "Veldyskar",
    "ac": 15,
    "hp": 52,
    "init": -1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/veldyskar-oota.js"
  },
  {
    "name": "Veteran of the Gauntlet",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/veteran-of-the-gauntlet-oota.js"
  },
  {
    "name": "Viln Tirin",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 5,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/viln-tirin-oota.js"
  },
  {
    "name": "Vizeran DeVir",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/vizeran-devir-oota.js"
  },
  {
    "name": "Xazax the Eyemonger",
    "ac": 18,
    "hp": 180,
    "init": 2,
    "cr": 13,
    "type": "aberration",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/xazax-the-eyemonger-oota.js"
  },
  {
    "name": "Y",
    "ac": 13,
    "hp": 49,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/y-oota.js"
  },
  {
    "name": "Yantha Coaxrock",
    "ac": 15,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/yantha-coaxrock-oota.js"
  },
  {
    "name": "Yestabrod",
    "ac": 15,
    "hp": 75,
    "init": 0,
    "cr": 4,
    "type": "monstrosity",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/yestabrod-oota.js"
  },
  {
    "name": "Young Basilisk",
    "ac": 13,
    "hp": 22,
    "init": -1,
    "cr": 1,
    "type": "monstrosity",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/young-basilisk-oota.js"
  },
  {
    "name": "Young Hook Horror",
    "ac": 11,
    "hp": 11,
    "init": 0,
    "cr": 0.25,
    "type": "monstrosity",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/young-hook-horror-oota.js"
  },
  {
    "name": "Yuk Yuk",
    "ac": 15,
    "hp": 7,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/yuk-yuk-oota.js"
  },
  {
    "name": "Zhentarim Thug",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/zhentarim-thug-oota.js"
  },
  {
    "name": "Zilchyn Q'Leptin",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 7,
    "type": "humanoid",
    "source": "Out of the Abyss",
    "htmlLink": "./custom/index.html?file=oota/zilchyn-qleptin-oota.js"
  },
  {
    "name": "Aberrant Zealot",
    "ac": 16,
    "hp": 93,
    "init": 4,
    "cr": 8,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/aberrant-zealot-pabtso.js"
  },
  {
    "name": "Aberrant Zealot (Tentacled)",
    "ac": 16,
    "hp": 93,
    "init": 4,
    "cr": 8,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/aberrant-zealot-tentacled-pabtso.js"
  },
  {
    "name": "Ash Zombie",
    "ac": 8,
    "hp": 22,
    "init": -2,
    "cr": 0.25,
    "type": "undead",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/ash-zombie-pabtso.js"
  },
  {
    "name": "Brain Breaker",
    "ac": 14,
    "hp": 189,
    "init": 0,
    "cr": 12,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/brain-breaker-pabtso.js"
  },
  {
    "name": "Chishinix' Head",
    "ac": 14,
    "hp": 54,
    "init": 4,
    "cr": 3,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/chishinix-head-pabtso.js"
  },
  {
    "name": "Chishinix",
    "ac": 15,
    "hp": 156,
    "init": 1,
    "cr": 11,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/chishinix-pabtso.js"
  },
  {
    "name": "Cloaker Mutate",
    "ac": 14,
    "hp": 143,
    "init": 2,
    "cr": 10,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/cloaker-mutate-pabtso.js"
  },
  {
    "name": "Dwarf Skeleton",
    "ac": 13,
    "hp": 26,
    "init": 0,
    "cr": 0.5,
    "type": "undead",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/dwarf-skeleton-pabtso.js"
  },
  {
    "name": "Encephalon Cluster",
    "ac": 13,
    "hp": 110,
    "init": 0,
    "cr": 10,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/encephalon-cluster-pabtso.js"
  },
  {
    "name": "Encephalon Gemmule",
    "ac": 14,
    "hp": 54,
    "init": 4,
    "cr": 3,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/encephalon-gemmule-pabtso.js"
  },
  {
    "name": "Feral Ashenwight",
    "ac": 16,
    "hp": 65,
    "init": 1,
    "cr": 5,
    "type": "undead",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/feral-ashenwight-pabtso.js"
  },
  {
    "name": "Fiendish Auger",
    "ac": 15,
    "hp": 85,
    "init": 0,
    "cr": 5,
    "type": "construct",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/fiendish-auger-pabtso.js"
  },
  {
    "name": "Flesh Meld",
    "ac": 12,
    "hp": 95,
    "init": 2,
    "cr": 7,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/flesh-meld-pabtso.js"
  },
  {
    "name": "Goblin Boss Archer",
    "ac": 17,
    "hp": 21,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/goblin-boss-archer-pabtso.js"
  },
  {
    "name": "Goblin Psi Brawler",
    "ac": 15,
    "hp": 31,
    "init": 3,
    "cr": 2,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/goblin-psi-brawler-pabtso.js"
  },
  {
    "name": "Goblin Psi Commander",
    "ac": 16,
    "hp": 58,
    "init": 4,
    "cr": 4,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/goblin-psi-commander-pabtso.js"
  },
  {
    "name": "Grandlejaw",
    "ac": 15,
    "hp": 172,
    "init": 1,
    "cr": 8,
    "type": "monstrosity",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/grandlejaw-pabtso.js"
  },
  {
    "name": "Grell Psychic",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 4,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/grell-psychic-pabtso.js"
  },
  {
    "name": "Gundren Rockseeker",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/gundren-rockseeker-pabtso.js"
  },
  {
    "name": "Gwyn Oresong",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/gwyn-oresong-pabtso.js"
  },
  {
    "name": "Hashutu",
    "ac": 15,
    "hp": 156,
    "init": 1,
    "cr": 11,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/hashutu-pabtso.js"
  },
  {
    "name": "Hjoldak Hollowhelm",
    "ac": 16,
    "hp": 78,
    "init": 1,
    "cr": 7,
    "type": "undead",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/hjoldak-hollowhelm-pabtso.js"
  },
  {
    "name": "Honna",
    "ac": 15,
    "hp": 127,
    "init": 2,
    "cr": 6,
    "type": "monstrosity",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/honna-pabtso.js"
  },
  {
    "name": "Humanoid Mutate",
    "ac": 14,
    "hp": 65,
    "init": 4,
    "cr": 4,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/humanoid-mutate-pabtso.js"
  },
  {
    "name": "Iarno \"Glasstaff\" Albrek",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "humanoid (human",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/iarno-glasstaff-albrek-pabtso.js"
  },
  {
    "name": "Infected Elder Brain",
    "ac": 10,
    "hp": 189,
    "init": 0,
    "cr": 11,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/infected-elder-brain-pabtso.js"
  },
  {
    "name": "Infected Townsperson",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/infected-townsperson-pabtso.js"
  },
  {
    "name": "Intellect Snare",
    "ac": 14,
    "hp": 99,
    "init": 4,
    "cr": 8,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/intellect-snare-pabtso.js"
  },
  {
    "name": "Kellikilli",
    "ac": 13,
    "hp": 58,
    "init": 3,
    "cr": 3,
    "type": "elemental",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/kellikilli-pabtso.js"
  },
  {
    "name": "Lowarnizel",
    "ac": 18,
    "hp": 168,
    "init": 1,
    "cr": 9,
    "type": "dragon",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/lowarnizel-pabtso.js"
  },
  {
    "name": "Malinia",
    "ac": 14,
    "hp": 65,
    "init": 4,
    "cr": 4,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/malinia-pabtso.js"
  },
  {
    "name": "Mind Flayer Clairvoyant",
    "ac": 15,
    "hp": 156,
    "init": 1,
    "cr": 11,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/mind-flayer-clairvoyant-pabtso.js"
  },
  {
    "name": "Mind Flayer Nothic",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 2,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/mind-flayer-nothic-pabtso.js"
  },
  {
    "name": "Mind Flayer Prophet",
    "ac": 17,
    "hp": 97,
    "init": 2,
    "cr": 8,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/mind-flayer-prophet-pabtso.js"
  },
  {
    "name": "Mormesk the Wraith",
    "ac": 13,
    "hp": 67,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/mormesk-the-wraith-pabtso.js"
  },
  {
    "name": "Nellik",
    "ac": 18,
    "hp": 123,
    "init": 0,
    "cr": 9,
    "type": "fiend",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/nellik-pabtso.js"
  },
  {
    "name": "Nezznar the Spider",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid (elf",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/nezznar-the-spider-pabtso.js"
  },
  {
    "name": "Nundro Rockseeker",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/nundro-rockseeker-pabtso.js"
  },
  {
    "name": "Nythalyn Henlifel",
    "ac": 18,
    "hp": 71,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/nythalyn-henlifel-pabtso.js"
  },
  {
    "name": "Oculorb",
    "ac": 13,
    "hp": 127,
    "init": 0,
    "cr": 9,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/oculorb-pabtso.js"
  },
  {
    "name": "Ontharyx",
    "ac": 14,
    "hp": 65,
    "init": 4,
    "cr": 4,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/ontharyx-pabtso.js"
  },
  {
    "name": "Oshundo the Alhoon",
    "ac": 15,
    "hp": 150,
    "init": 1,
    "cr": 10,
    "type": "undead (mind flayer",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/oshundo-the-alhoon-pabtso.js"
  },
  {
    "name": "Otyugh Mutate",
    "ac": 16,
    "hp": 76,
    "init": 0,
    "cr": 6,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/otyugh-mutate-pabtso.js"
  },
  {
    "name": "Psionic Ashenwight",
    "ac": 16,
    "hp": 78,
    "init": 1,
    "cr": 7,
    "type": "undead",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/psionic-ashenwight-pabtso.js"
  },
  {
    "name": "Psionic Shambling Mound",
    "ac": 15,
    "hp": 136,
    "init": -1,
    "cr": 5,
    "type": "plant",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/psionic-shambling-mound-pabtso.js"
  },
  {
    "name": "Qunbraxel",
    "ac": 12,
    "hp": 112,
    "init": 2,
    "cr": 9,
    "type": "aberration (mind flayer",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/qunbraxel-pabtso.js"
  },
  {
    "name": "Redbrand Ruffian",
    "ac": 11,
    "hp": 16,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/redbrand-ruffian-pabtso.js"
  },
  {
    "name": "Refraction of Ilvaash",
    "ac": 11,
    "hp": 199,
    "init": 0,
    "cr": 15,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/refraction-of-ilvaash-pabtso.js"
  },
  {
    "name": "Rivibiddel",
    "ac": 15,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/rivibiddel-pabtso.js"
  },
  {
    "name": "Ruxithid the Chosen",
    "ac": 15,
    "hp": 88,
    "init": 4,
    "cr": 5,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/ruxithid-the-chosen-pabtso.js"
  },
  {
    "name": "Shalfi Lewin",
    "ac": 16,
    "hp": 93,
    "init": 4,
    "cr": 8,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/shalfi-lewin-pabtso.js"
  },
  {
    "name": "Sildar Hallwinter",
    "ac": 16,
    "hp": 27,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/sildar-hallwinter-pabtso.js"
  },
  {
    "name": "Varakkta",
    "ac": 18,
    "hp": 91,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/varakkta-pabtso.js"
  },
  {
    "name": "Voalsh",
    "ac": 15,
    "hp": 156,
    "init": 1,
    "cr": 11,
    "type": "aberration",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/voalsh-pabtso.js"
  },
  {
    "name": "Yanthdel Henlifel",
    "ac": 18,
    "hp": 71,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/yanthdel-henlifel-pabtso.js"
  },
  {
    "name": "Zeond",
    "ac": 13,
    "hp": 7,
    "init": 3,
    "cr": 1,
    "type": "fiend",
    "source": "Phandelver and Below: The Shattered Obelisk",
    "htmlLink": "./custom/index.html?file=pabtso/zeond-pabtso.js"
  },
  {
    "name": "Aerisi Kalinoth",
    "ac": 13,
    "hp": 66,
    "init": 3,
    "cr": 7,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/aerisi-kalinoth-pota.js"
  },
  {
    "name": "Aquatic Ghoul",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "undead",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/aquatic-ghoul-pota.js"
  },
  {
    "name": "Bastian Thermandar",
    "ac": 12,
    "hp": 78,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/bastian-thermandar-pota.js"
  },
  {
    "name": "Black Earth Guard",
    "ac": 18,
    "hp": 39,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/black-earth-guard-pota.js"
  },
  {
    "name": "Black Earth Priest",
    "ac": 17,
    "hp": 45,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/black-earth-priest-pota.js"
  },
  {
    "name": "Braelen Hatherhand",
    "ac": 10,
    "hp": 2,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/braelen-hatherhand-pota.js"
  },
  {
    "name": "Bronzefume",
    "ac": 20,
    "hp": 220,
    "init": 0,
    "cr": 13,
    "type": "dragon",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/bronzefume-pota.js"
  },
  {
    "name": "Burrowshark",
    "ac": 18,
    "hp": 82,
    "init": 1,
    "cr": 4,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/burrowshark-pota.js"
  },
  {
    "name": "Cavil Zaltobar",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/cavil-zaltobar-pota.js"
  },
  {
    "name": "Crushing Wave Priest",
    "ac": 13,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/crushing-wave-priest-pota.js"
  },
  {
    "name": "Crushing Wave Reaver",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/crushing-wave-reaver-pota.js"
  },
  {
    "name": "Darathra Shendrel",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/darathra-shendrel-pota.js"
  },
  {
    "name": "Dark Tide Knight",
    "ac": 13,
    "hp": 58,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/dark-tide-knight-pota.js"
  },
  {
    "name": "Deseyna Majarra",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/deseyna-majarra-pota.js"
  },
  {
    "name": "Drannin Splithelm",
    "ac": 18,
    "hp": 93,
    "init": 0,
    "cr": 7,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/drannin-splithelm-pota.js"
  },
  {
    "name": "Elizar Dryflagon",
    "ac": 14,
    "hp": 71,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/elizar-dryflagon-pota.js"
  },
  {
    "name": "Emberhorn Minotaur",
    "ac": 14,
    "hp": 76,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/emberhorn-minotaur-pota.js"
  },
  {
    "name": "Eternal Flame Guardian",
    "ac": 17,
    "hp": 45,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/eternal-flame-guardian-pota.js"
  },
  {
    "name": "Eternal Flame Priest",
    "ac": 12,
    "hp": 52,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/eternal-flame-priest-pota.js"
  },
  {
    "name": "Fathomer",
    "ac": 10,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/fathomer-pota.js"
  },
  {
    "name": "Feathergale Knight",
    "ac": 16,
    "hp": 33,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/feathergale-knight-pota.js"
  },
  {
    "name": "Fennor",
    "ac": 14,
    "hp": 67,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/fennor-pota.js"
  },
  {
    "name": "Flamewrath",
    "ac": 12,
    "hp": 105,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/flamewrath-pota.js"
  },
  {
    "name": "Gar Shatterkeel",
    "ac": 16,
    "hp": 97,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/gar-shatterkeel-pota.js"
  },
  {
    "name": "Ghald",
    "ac": 15,
    "hp": 102,
    "init": 3,
    "cr": 7,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/ghald-pota.js"
  },
  {
    "name": "Grumink the Renegade",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/grumink-the-renegade-pota.js"
  },
  {
    "name": "Hellenrae",
    "ac": 16,
    "hp": 78,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/hellenrae-pota.js"
  },
  {
    "name": "Howling Hatred Initiate",
    "ac": 13,
    "hp": 9,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/howling-hatred-initiate-pota.js"
  },
  {
    "name": "Howling Hatred Priest",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/howling-hatred-priest-pota.js"
  },
  {
    "name": "Hurricane",
    "ac": 14,
    "hp": 33,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/hurricane-pota.js"
  },
  {
    "name": "Imix",
    "ac": 17,
    "hp": 325,
    "init": 7,
    "cr": 19,
    "type": "elemental",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/imix-pota.js"
  },
  {
    "name": "Lyzandra \"Lyzzie\" Calderos",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/lyzandra-lyzzie-calderos-pota.js"
  },
  {
    "name": "Maegla Tarnlar",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/maegla-tarnlar-pota.js"
  },
  {
    "name": "Marlos Urnrayle",
    "ac": 15,
    "hp": 136,
    "init": 0,
    "cr": 8,
    "type": "monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/marlos-urnrayle-pota.js"
  },
  {
    "name": "Miraj Vizann",
    "ac": 10,
    "hp": 82,
    "init": 0,
    "cr": 6,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/miraj-vizann-pota.js"
  },
  {
    "name": "Molten Magma Roper",
    "ac": 20,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/molten-magma-roper-pota.js"
  },
  {
    "name": "Nurvureem, The Dark Lady",
    "ac": 19,
    "hp": 195,
    "init": 2,
    "cr": 14,
    "type": "dragon",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/nurvureem-the-dark-lady-pota.js"
  },
  {
    "name": "Ogr\u00e9moch",
    "ac": 20,
    "hp": 526,
    "init": 0,
    "cr": 20,
    "type": "elemental",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/ogremoch-pota.js"
  },
  {
    "name": "Olhydra",
    "ac": 18,
    "hp": 324,
    "init": 6,
    "cr": 18,
    "type": "elemental",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/olhydra-pota.js"
  },
  {
    "name": "One-Eyed Shiver",
    "ac": 12,
    "hp": 49,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/one-eyed-shiver-pota.js"
  },
  {
    "name": "Oreioth",
    "ac": 11,
    "hp": 39,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/oreioth-pota.js"
  },
  {
    "name": "Padraich",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/padraich-pota.js"
  },
  {
    "name": "Razerblast",
    "ac": 17,
    "hp": 112,
    "init": 0,
    "cr": 5,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/razerblast-pota.js"
  },
  {
    "name": "Renwick",
    "ac": 17,
    "hp": 135,
    "init": 3,
    "cr": 21,
    "type": "undead",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/renwick-pota.js"
  },
  {
    "name": "Rhundorth",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/rhundorth-pota.js"
  },
  {
    "name": "Sacred Stone Monk",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/sacred-stone-monk-pota.js"
  },
  {
    "name": "Shoalar Quanderil",
    "ac": 10,
    "hp": 60,
    "init": 1,
    "cr": 4,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/shoalar-quanderil-pota.js"
  },
  {
    "name": "Skyweaver",
    "ac": 12,
    "hp": 44,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/skyweaver-pota.js"
  },
  {
    "name": "Stone Warrior",
    "ac": 17,
    "hp": 102,
    "init": -1,
    "cr": 4,
    "type": "construct",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/stone-warrior-pota.js"
  },
  {
    "name": "Stonemelder",
    "ac": 17,
    "hp": 75,
    "init": 0,
    "cr": 4,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/stonemelder-pota.js"
  },
  {
    "name": "Thurl Merosska",
    "ac": 16,
    "hp": 71,
    "init": 2,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/thurl-merosska-pota.js"
  },
  {
    "name": "Tornscale",
    "ac": 15,
    "hp": 36,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/tornscale-pota.js"
  },
  {
    "name": "Vanifer",
    "ac": 15,
    "hp": 112,
    "init": 3,
    "cr": 9,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/vanifer-pota.js"
  },
  {
    "name": "Wiggan Nettlebee",
    "ac": 11,
    "hp": 36,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/wiggan-nettlebee-pota.js"
  },
  {
    "name": "Windharrow",
    "ac": 15,
    "hp": 55,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/windharrow-pota.js"
  },
  {
    "name": "Yan-C-Bin",
    "ac": 22,
    "hp": 283,
    "init": 7,
    "cr": 18,
    "type": "elemental",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/yan-c-bin-pota.js"
  },
  {
    "name": "Young Bulette",
    "ac": 11,
    "hp": 45,
    "init": -1,
    "cr": 2,
    "type": "beast",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/young-bulette-pota.js"
  },
  {
    "name": "Young Purple Worm",
    "ac": 18,
    "hp": 184,
    "init": -2,
    "cr": 13,
    "type": "monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/young-purple-worm-pota.js"
  },
  {
    "name": "Zegdar",
    "ac": 16,
    "hp": 117,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Princes of the Apocalypse",
    "htmlLink": "./custom/index.html?file=pota/zegdar-pota.js"
  },
  {
    "name": "Amun Sa",
    "ac": 11,
    "hp": 45,
    "init": 1,
    "cr": 4,
    "type": "undead",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/amun-sa-qftis.js"
  },
  {
    "name": "Android Aerialist",
    "ac": 15,
    "hp": 91,
    "init": 4,
    "cr": 5,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/android-aerialist-qftis.js"
  },
  {
    "name": "Android Diplomat",
    "ac": 15,
    "hp": 91,
    "init": 4,
    "cr": 5,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/android-diplomat-qftis.js"
  },
  {
    "name": "Android Diver",
    "ac": 15,
    "hp": 91,
    "init": 4,
    "cr": 5,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/android-diver-qftis.js"
  },
  {
    "name": "Android Duelist",
    "ac": 15,
    "hp": 91,
    "init": 4,
    "cr": 5,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/android-duelist-qftis.js"
  },
  {
    "name": "Android Medic",
    "ac": 15,
    "hp": 91,
    "init": 4,
    "cr": 5,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/android-medic-qftis.js"
  },
  {
    "name": "Android",
    "ac": 15,
    "hp": 91,
    "init": 4,
    "cr": 5,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/android-qftis.js"
  },
  {
    "name": "Android Sentry",
    "ac": 15,
    "hp": 91,
    "init": 4,
    "cr": 5,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/android-sentry-qftis.js"
  },
  {
    "name": "Barkburr",
    "ac": 16,
    "hp": 52,
    "init": -2,
    "cr": 3,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/barkburr-qftis.js"
  },
  {
    "name": "Champion of Gorm",
    "ac": 19,
    "hp": 33,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/champion-of-gorm-qftis.js"
  },
  {
    "name": "Champion of Madarua",
    "ac": 13,
    "hp": 39,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/champion-of-madarua-qftis.js"
  },
  {
    "name": "Champion of Usamigaras",
    "ac": 12,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/champion-of-usamigaras-qftis.js"
  },
  {
    "name": "Cipolla",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/cipolla-qftis.js"
  },
  {
    "name": "Combat Robot",
    "ac": 15,
    "hp": 112,
    "init": 2,
    "cr": 6,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/combat-robot-qftis.js"
  },
  {
    "name": "Derro Apprentice",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "aberration",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/derro-apprentice-qftis.js"
  },
  {
    "name": "Derro Raider",
    "ac": 12,
    "hp": 16,
    "init": 1,
    "cr": 0.25,
    "type": "aberration",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/derro-raider-qftis.js"
  },
  {
    "name": "Derwyth",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/derwyth-qftis.js"
  },
  {
    "name": "Drelnza",
    "ac": 18,
    "hp": 187,
    "init": 4,
    "cr": 15,
    "type": "undead",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/drelnza-qftis.js"
  },
  {
    "name": "Gibberling",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0,
    "type": "fiend",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/gibberling-qftis.js"
  },
  {
    "name": "Grisdelfawr",
    "ac": 18,
    "hp": 178,
    "init": 0,
    "cr": 10,
    "type": "dragon",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/grisdelfawr-qftis.js"
  },
  {
    "name": "Guardian of Gorm",
    "ac": 16,
    "hp": 9,
    "init": 0,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/guardian-of-gorm-qftis.js"
  },
  {
    "name": "Horrid Plant Dew Drinker",
    "ac": 6,
    "hp": 42,
    "init": -4,
    "cr": 4,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/horrid-plant-dew-drinker-qftis.js"
  },
  {
    "name": "Horrid Plant Purple Blossom",
    "ac": 6,
    "hp": 42,
    "init": -4,
    "cr": 4,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/horrid-plant-purple-blossom-qftis.js"
  },
  {
    "name": "Horrid Plant",
    "ac": 6,
    "hp": 42,
    "init": -4,
    "cr": 4,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/horrid-plant-qftis.js"
  },
  {
    "name": "Horrid Plant Snapper Saw",
    "ac": 6,
    "hp": 42,
    "init": -4,
    "cr": 4,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/horrid-plant-snapper-saw-qftis.js"
  },
  {
    "name": "Iaseda",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/iaseda-qftis.js"
  },
  {
    "name": "Isabela Folcarae",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/isabela-folcarae-qftis.js"
  },
  {
    "name": "Juliana",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/juliana-qftis.js"
  },
  {
    "name": "Leprechaun",
    "ac": 13,
    "hp": 52,
    "init": 3,
    "cr": 4,
    "type": "fey",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/leprechaun-qftis.js"
  },
  {
    "name": "Mage of Usamigaras",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/mage-of-usamigaras-qftis.js"
  },
  {
    "name": "Maschin-i-Bozorg",
    "ac": 17,
    "hp": 94,
    "init": 3,
    "cr": 8,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/maschin-i-bozorg-qftis.js"
  },
  {
    "name": "Memory Web",
    "ac": 14,
    "hp": 39,
    "init": 4,
    "cr": 4,
    "type": "aberration",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/memory-web-qftis.js"
  },
  {
    "name": "Nafas",
    "ac": 19,
    "hp": 350,
    "init": 4,
    "cr": 23,
    "type": "elemental",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/nafas-qftis.js"
  },
  {
    "name": "Nafik",
    "ac": 13,
    "hp": 82,
    "init": 0,
    "cr": 6,
    "type": "undead",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/nafik-qftis.js"
  },
  {
    "name": "Orlando",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/orlando-qftis.js"
  },
  {
    "name": "Pech",
    "ac": 17,
    "hp": 82,
    "init": 0,
    "cr": 4,
    "type": "elemental",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/pech-qftis.js"
  },
  {
    "name": "Piyarz",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/piyarz-qftis.js"
  },
  {
    "name": "Porro",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/porro-qftis.js"
  },
  {
    "name": "Queen Zanobis",
    "ac": 14,
    "hp": 45,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/queen-zanobis-qftis.js"
  },
  {
    "name": "Shalfey",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/shalfey-qftis.js"
  },
  {
    "name": "Silverlily",
    "ac": 12,
    "hp": 67,
    "init": 2,
    "cr": 5,
    "type": "celestial",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/silverlily-qftis.js"
  },
  {
    "name": "Sion",
    "ac": 12,
    "hp": 49,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/sion-qftis.js"
  },
  {
    "name": "Spirit of Hunger",
    "ac": 13,
    "hp": 67,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/spirit-of-hunger-qftis.js"
  },
  {
    "name": "Stargleam",
    "ac": 12,
    "hp": 67,
    "init": 2,
    "cr": 5,
    "type": "celestial",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/stargleam-qftis.js"
  },
  {
    "name": "Swarm of Gibberlings",
    "ac": 12,
    "hp": 38,
    "init": 2,
    "cr": 3,
    "type": "fiend",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/swarm-of-gibberlings-qftis.js"
  },
  {
    "name": "The Gardener",
    "ac": 17,
    "hp": 209,
    "init": 3,
    "cr": 12,
    "type": "fey (archfey",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/the-gardener-qftis.js"
  },
  {
    "name": "Tower Hand",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/tower-hand-qftis.js"
  },
  {
    "name": "Tower Sage",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/tower-sage-qftis.js"
  },
  {
    "name": "Uma",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/uma-qftis.js"
  },
  {
    "name": "Vegepygmy Moldmaker",
    "ac": 15,
    "hp": 44,
    "init": 2,
    "cr": 3,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/vegepygmy-moldmaker-qftis.js"
  },
  {
    "name": "Vegepygmy Scavenger",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/vegepygmy-scavenger-qftis.js"
  },
  {
    "name": "Vegepygmy Thorny Hunter",
    "ac": 14,
    "hp": 27,
    "init": 2,
    "cr": 2,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/vegepygmy-thorny-hunter-qftis.js"
  },
  {
    "name": "Vuuthramis",
    "ac": 18,
    "hp": 142,
    "init": 0,
    "cr": 8,
    "type": "dragon",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/vuuthramis-qftis.js"
  },
  {
    "name": "Warrior of Madarua",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/warrior-of-madarua-qftis.js"
  },
  {
    "name": "Wolf-in-Sheep's-Clothing",
    "ac": 16,
    "hp": 112,
    "init": -1,
    "cr": 7,
    "type": "plant",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/wolf-in-sheeps-clothing-qftis.js"
  },
  {
    "name": "Worker Robot",
    "ac": 13,
    "hp": 75,
    "init": -1,
    "cr": 3,
    "type": "construct",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/worker-robot-qftis.js"
  },
  {
    "name": "Zargon the Returner",
    "ac": 18,
    "hp": 253,
    "init": 0,
    "cr": 17,
    "type": "aberration",
    "source": "Quests from the Infinite Staircase",
    "htmlLink": "./custom/index.html?file=qftis/zargon-the-returner-qftis.js"
  },
  {
    "name": "Animated Tile Chimera",
    "ac": 14,
    "hp": 114,
    "init": 0,
    "cr": 6,
    "type": "monstrosity",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/animated-tile-chimera-rot.js"
  },
  {
    "name": "Aquatic Troll",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 5,
    "type": "giant",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/aquatic-troll-rot.js"
  },
  {
    "name": "Carnivorous Flower",
    "ac": 14,
    "hp": 114,
    "init": 0,
    "cr": 5,
    "type": "plant",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/carnivorous-flower-rot.js"
  },
  {
    "name": "Diderius",
    "ac": 17,
    "hp": 97,
    "init": 0,
    "cr": 15,
    "type": "undead",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/diderius-rot.js"
  },
  {
    "name": "Dragonfang",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 5,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/dragonfang-rot.js"
  },
  {
    "name": "Dragonsoul",
    "ac": 16,
    "hp": 110,
    "init": 4,
    "cr": 7,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/dragonsoul-rot.js"
  },
  {
    "name": "Galvan",
    "ac": 16,
    "hp": 110,
    "init": 4,
    "cr": 7,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/galvan-rot.js"
  },
  {
    "name": "Half-Blue Dragon Gladiator",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/half-blue-dragon-gladiator-rot.js"
  },
  {
    "name": "Half-Green Dragon Assassin",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/half-green-dragon-assassin-rot.js"
  },
  {
    "name": "Half-Red Dragon Gladiator",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/half-red-dragon-gladiator-rot.js"
  },
  {
    "name": "Ice Toad",
    "ac": 12,
    "hp": 32,
    "init": 0,
    "cr": 1,
    "type": "monstrosity",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/ice-toad-rot.js"
  },
  {
    "name": "Ice Troll",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 5,
    "type": "giant",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/ice-troll-rot.js"
  },
  {
    "name": "Iskander",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/iskander-rot.js"
  },
  {
    "name": "Maccath the Crimson",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/maccath-the-crimson-rot.js"
  },
  {
    "name": "Marfulb",
    "ac": 12,
    "hp": 32,
    "init": 0,
    "cr": 1,
    "type": "monstrosity",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/marfulb-rot.js"
  },
  {
    "name": "Mend-nets",
    "ac": 12,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/mend-nets-rot.js"
  },
  {
    "name": "Naergoth Bladelord",
    "ac": 18,
    "hp": 135,
    "init": 1,
    "cr": 11,
    "type": "undead",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/naergoth-bladelord-rot.js"
  },
  {
    "name": "Neronvain",
    "ac": 17,
    "hp": 117,
    "init": 3,
    "cr": 9,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/neronvain-rot.js"
  },
  {
    "name": "Paper Whirlwind",
    "ac": 12,
    "hp": 24,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/paper-whirlwind-rot.js"
  },
  {
    "name": "Red Wizard",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/red-wizard-rot.js"
  },
  {
    "name": "Severin",
    "ac": 16,
    "hp": 150,
    "init": 1,
    "cr": 11,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/severin-rot.js"
  },
  {
    "name": "Sled Dog",
    "ac": 13,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/sled-dog-rot.js"
  },
  {
    "name": "Snake Horror",
    "ac": 20,
    "hp": 60,
    "init": 1,
    "cr": 4,
    "type": "construct",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/snake-horror-rot.js"
  },
  {
    "name": "Tiamat",
    "ac": 25,
    "hp": 615,
    "init": 0,
    "cr": 30,
    "type": "fiend",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/tiamat-rot.js"
  },
  {
    "name": "Varram",
    "ac": 16,
    "hp": 110,
    "init": 4,
    "cr": 7,
    "type": "humanoid",
    "source": "Rise of Tiamat",
    "htmlLink": "./custom/index.html?file=rot/varram-rot.js"
  },
  {
    "name": "Aarakocra Simulacrum",
    "ac": 12,
    "hp": 6,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/aarakocra-simulacrum-skt.js"
  },
  {
    "name": "Alastrah",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/alastrah-skt.js"
  },
  {
    "name": "Augrek Brighthelm",
    "ac": 15,
    "hp": 13,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/augrek-brighthelm-skt.js"
  },
  {
    "name": "Axe of Mirabar Soldier",
    "ac": 18,
    "hp": 67,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/axe-of-mirabar-soldier-skt.js"
  },
  {
    "name": "Beldora",
    "ac": 12,
    "hp": 18,
    "init": 2,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/beldora-skt.js"
  },
  {
    "name": "Braxow",
    "ac": 17,
    "hp": 126,
    "init": 2,
    "cr": 7,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/braxow-skt.js"
  },
  {
    "name": "Chief Guh",
    "ac": 9,
    "hp": 160,
    "init": -5,
    "cr": 5,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/chief-guh-skt.js"
  },
  {
    "name": "Chief Kartha-Kaya",
    "ac": 11,
    "hp": 70,
    "init": 0,
    "cr": 4,
    "type": "monstrosity",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/chief-kartha-kaya-skt.js"
  },
  {
    "name": "Cinderhild",
    "ac": 9,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/cinderhild-skt.js"
  },
  {
    "name": "Claugiyliamatar",
    "ac": 21,
    "hp": 385,
    "init": 1,
    "cr": 22,
    "type": "dragon",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/claugiyliamatar-skt.js"
  },
  {
    "name": "Clockwork Mule",
    "ac": 10,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "construct",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/clockwork-mule-skt.js"
  },
  {
    "name": "Cog",
    "ac": 15,
    "hp": 105,
    "init": -1,
    "cr": 5,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/cog-skt.js"
  },
  {
    "name": "Count Thullen",
    "ac": 14,
    "hp": 200,
    "init": 0,
    "cr": 10,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/count-thullen-skt.js"
  },
  {
    "name": "Countess Sansuri",
    "ac": 14,
    "hp": 200,
    "init": 0,
    "cr": 11,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/countess-sansuri-skt.js"
  },
  {
    "name": "Crag Cat",
    "ac": 13,
    "hp": 34,
    "init": 3,
    "cr": 1,
    "type": "monstrosity",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/crag-cat-skt.js"
  },
  {
    "name": "Cressaro",
    "ac": 16,
    "hp": 200,
    "init": 0,
    "cr": 9,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/cressaro-skt.js"
  },
  {
    "name": "Cryovain",
    "ac": 18,
    "hp": 200,
    "init": 0,
    "cr": 13,
    "type": "dragon",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/cryovain-skt.js"
  },
  {
    "name": "Darathra Shendrel",
    "ac": 14,
    "hp": 52,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/darathra-shendrel-skt.js"
  },
  {
    "name": "Darz Helgar",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/darz-helgar-skt.js"
  },
  {
    "name": "Deadstone Cleft Stone Giant",
    "ac": 17,
    "hp": 126,
    "init": 2,
    "cr": 7,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/deadstone-cleft-stone-giant-skt.js"
  },
  {
    "name": "Duchess Brimskarda",
    "ac": 16,
    "hp": 162,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/duchess-brimskarda-skt.js"
  },
  {
    "name": "Duke Zalto",
    "ac": 18,
    "hp": 221,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/duke-zalto-skt.js"
  },
  {
    "name": "Duvessa Shane",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/duvessa-shane-skt.js"
  },
  {
    "name": "Eigeron's Ghost",
    "ac": 11,
    "hp": 65,
    "init": 1,
    "cr": 4,
    "type": "undead",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/eigerons-ghost-skt.js"
  },
  {
    "name": "Elister",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/elister-skt.js"
  },
  {
    "name": "Felbarren Dwarf",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/felbarren-dwarf-skt.js"
  },
  {
    "name": "Felgolos",
    "ac": 19,
    "hp": 212,
    "init": 0,
    "cr": 15,
    "type": "dragon",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/felgolos-skt.js"
  },
  {
    "name": "Ghelryn Foehammer",
    "ac": 14,
    "hp": 30,
    "init": -2,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/ghelryn-foehammer-skt.js"
  },
  {
    "name": "Giant Raven",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "beast",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/giant-raven-skt.js"
  },
  {
    "name": "Great Chief Halric Bonesnapper",
    "ac": 13,
    "hp": 99,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/great-chief-halric-bonesnapper-skt.js"
  },
  {
    "name": "Harshnag",
    "ac": 21,
    "hp": 204,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/harshnag-skt.js"
  },
  {
    "name": "Hellenhild",
    "ac": 15,
    "hp": 138,
    "init": -1,
    "cr": 8,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/hellenhild-skt.js"
  },
  {
    "name": "Huge Stone Golem",
    "ac": 17,
    "hp": 195,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/huge-stone-golem-skt.js"
  },
  {
    "name": "Hulking Crab",
    "ac": 17,
    "hp": 76,
    "init": -1,
    "cr": 5,
    "type": "beast",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/hulking-crab-skt.js"
  },
  {
    "name": "Hydia Moonmusk",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/hydia-moonmusk-skt.js"
  },
  {
    "name": "Ice Spider Queen",
    "ac": 14,
    "hp": 44,
    "init": 3,
    "cr": 2,
    "type": "beast",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/ice-spider-queen-skt.js"
  },
  {
    "name": "Ice Spider",
    "ac": 14,
    "hp": 26,
    "init": 3,
    "cr": 1,
    "type": "beast",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/ice-spider-skt.js"
  },
  {
    "name": "Imperator Uthor",
    "ac": 16,
    "hp": 272,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/imperator-uthor-skt.js"
  },
  {
    "name": "Isendraug",
    "ac": 18,
    "hp": 200,
    "init": 0,
    "cr": 13,
    "type": "dragon",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/isendraug-skt.js"
  },
  {
    "name": "Iymrith",
    "ac": 22,
    "hp": 481,
    "init": 0,
    "cr": 23,
    "type": "dragon",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/iymrith-skt.js"
  },
  {
    "name": "Jarl Storvald",
    "ac": 15,
    "hp": 189,
    "init": -1,
    "cr": 8,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/jarl-storvald-skt.js"
  },
  {
    "name": "Jasper Dimmerchasm",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/jasper-dimmerchasm-skt.js"
  },
  {
    "name": "Kaaltar",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/kaaltar-skt.js"
  },
  {
    "name": "Kella Darkhope",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/kella-darkhope-skt.js"
  },
  {
    "name": "Khaspere Drylund",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/khaspere-drylund-skt.js"
  },
  {
    "name": "King Hekaton",
    "ac": 16,
    "hp": 330,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/king-hekaton-skt.js"
  },
  {
    "name": "Klauth",
    "ac": 22,
    "hp": 546,
    "init": 0,
    "cr": 25,
    "type": "dragon",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/klauth-skt.js"
  },
  {
    "name": "Knight of the Mithral Shield",
    "ac": 20,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/knight-of-the-mithral-shield-skt.js"
  },
  {
    "name": "Lifferlas",
    "ac": 13,
    "hp": 59,
    "init": -2,
    "cr": 0,
    "type": "plant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/lifferlas-skt.js"
  },
  {
    "name": "Maegera the Dawn Titan",
    "ac": 16,
    "hp": 341,
    "init": 6,
    "cr": 23,
    "type": "elemental",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/maegera-the-dawn-titan-skt.js"
  },
  {
    "name": "Markham Southwell",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/markham-southwell-skt.js"
  },
  {
    "name": "Miros Xelbrin",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/miros-xelbrin-skt.js"
  },
  {
    "name": "Mirran",
    "ac": 12,
    "hp": 230,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/mirran-skt.js"
  },
  {
    "name": "Morak Ur'gray",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/morak-urgray-skt.js"
  },
  {
    "name": "Narbeck Horn",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/narbeck-horn-skt.js"
  },
  {
    "name": "Narth Tezrin",
    "ac": 12,
    "hp": 18,
    "init": 2,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/narth-tezrin-skt.js"
  },
  {
    "name": "Naxene Drathkala",
    "ac": 10,
    "hp": 27,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/naxene-drathkala-skt.js"
  },
  {
    "name": "Nimir",
    "ac": 16,
    "hp": 230,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/nimir-skt.js"
  },
  {
    "name": "Noori",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/noori-skt.js"
  },
  {
    "name": "Nym",
    "ac": 12,
    "hp": 230,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/nym-skt.js"
  },
  {
    "name": "Ogre Goblin Hucker",
    "ac": 11,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/ogre-goblin-hucker-skt.js"
  },
  {
    "name": "Oren Yogilvy",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/oren-yogilvy-skt.js"
  },
  {
    "name": "Orlekto",
    "ac": 16,
    "hp": 230,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/orlekto-skt.js"
  },
  {
    "name": "Orok",
    "ac": 12,
    "hp": 5,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/orok-skt.js"
  },
  {
    "name": "Othovir",
    "ac": 10,
    "hp": 16,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/othovir-skt.js"
  },
  {
    "name": "Pig",
    "ac": 11,
    "hp": 5,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/pig-skt.js"
  },
  {
    "name": "Pow Ming",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/pow-ming-skt.js"
  },
  {
    "name": "Princess Serissa",
    "ac": 14,
    "hp": 200,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/princess-serissa-skt.js"
  },
  {
    "name": "Purple Wormling",
    "ac": 12,
    "hp": 42,
    "init": -2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/purple-wormling-skt.js"
  },
  {
    "name": "Rool",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/rool-skt.js"
  },
  {
    "name": "Sea Elf",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/sea-elf-skt.js"
  },
  {
    "name": "Shaldoor",
    "ac": 16,
    "hp": 230,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/shaldoor-skt.js"
  },
  {
    "name": "Shalvus Martholio",
    "ac": 13,
    "hp": 27,
    "init": 2,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/shalvus-martholio-skt.js"
  },
  {
    "name": "Sharda",
    "ac": 16,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/sharda-skt.js"
  },
  {
    "name": "Sheep",
    "ac": 10,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/sheep-skt.js"
  },
  {
    "name": "Shield Dwarf Guard",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/shield-dwarf-guard-skt.js"
  },
  {
    "name": "Shield Dwarf Noble",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/shield-dwarf-noble-skt.js"
  },
  {
    "name": "Sir Baric Nylef",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/sir-baric-nylef-skt.js"
  },
  {
    "name": "Sirac of Suzail",
    "ac": 14,
    "hp": 22,
    "init": 3,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/sirac-of-suzail-skt.js"
  },
  {
    "name": "Slarkrethel",
    "ac": 18,
    "hp": 472,
    "init": 0,
    "cr": 25,
    "type": "monstrosity",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/slarkrethel-skt.js"
  },
  {
    "name": "Stone Giant Statue",
    "ac": 17,
    "hp": 195,
    "init": -1,
    "cr": 0,
    "type": "construct",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/stone-giant-statue-skt.js"
  },
  {
    "name": "Tartha",
    "ac": 18,
    "hp": 162,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/tartha-skt.js"
  },
  {
    "name": "Tau",
    "ac": 16,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/tau-skt.js"
  },
  {
    "name": "Thane Kayalithica",
    "ac": 17,
    "hp": 170,
    "init": 2,
    "cr": 7,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/thane-kayalithica-skt.js"
  },
  {
    "name": "The Weevil",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/the-weevil-skt.js"
  },
  {
    "name": "Tholtz Daggerdark",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/tholtz-daggerdark-skt.js"
  },
  {
    "name": "Thunderbeast Skeleton",
    "ac": 15,
    "hp": 68,
    "init": 0,
    "cr": 3,
    "type": "undead",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/thunderbeast-skeleton-skt.js"
  },
  {
    "name": "Tressym",
    "ac": 12,
    "hp": 5,
    "init": 2,
    "cr": 0,
    "type": "monstrosity",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/tressym-skt.js"
  },
  {
    "name": "Tug",
    "ac": 15,
    "hp": 105,
    "init": -1,
    "cr": 5,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/tug-skt.js"
  },
  {
    "name": "Turlang",
    "ac": 16,
    "hp": 200,
    "init": -1,
    "cr": 9,
    "type": "plant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/turlang-skt.js"
  },
  {
    "name": "Urgala Meltimer",
    "ac": 12,
    "hp": 58,
    "init": 1,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/urgala-meltimer-skt.js"
  },
  {
    "name": "Uthgardt Barbarian Leader",
    "ac": 14,
    "hp": 67,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-barbarian-leader-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Black Lion)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-black-lion-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Black Raven)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-black-raven-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Blue Bear)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-blue-bear-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Elk)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-elk-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Gray Wolf)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-gray-wolf-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Great Worm)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-great-worm-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Griffon)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-griffon-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Red Tiger)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-red-tiger-skt.js"
  },
  {
    "name": "Uthgardt Shaman",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Sky Pony)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-sky-pony-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Thunderbeast)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-thunderbeast-skt.js"
  },
  {
    "name": "Uthgardt Shaman (Tree Ghost)",
    "ac": 13,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/uthgardt-shaman-tree-ghost-skt.js"
  },
  {
    "name": "Vaal",
    "ac": 14,
    "hp": 200,
    "init": 0,
    "cr": 9,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/vaal-skt.js"
  },
  {
    "name": "Vaasha",
    "ac": 16,
    "hp": 230,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/vaasha-skt.js"
  },
  {
    "name": "Wiri Fleagol",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/wiri-fleagol-skt.js"
  },
  {
    "name": "Wood Elf",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/wood-elf-skt.js"
  },
  {
    "name": "Xolkin Alassandar",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/xolkin-alassandar-skt.js"
  },
  {
    "name": "Yak",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/yak-skt.js"
  },
  {
    "name": "Yakfolk Priest",
    "ac": 12,
    "hp": 52,
    "init": 0,
    "cr": 4,
    "type": "monstrosity",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/yakfolk-priest-skt.js"
  },
  {
    "name": "Yakfolk Warrior",
    "ac": 11,
    "hp": 60,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/yakfolk-warrior-skt.js"
  },
  {
    "name": "Young Cloud Giant",
    "ac": 13,
    "hp": 105,
    "init": -1,
    "cr": 5,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/young-cloud-giant-skt.js"
  },
  {
    "name": "Zaltember",
    "ac": 13,
    "hp": 30,
    "init": 0,
    "cr": 1,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/zaltember-skt.js"
  },
  {
    "name": "Zephyros",
    "ac": 14,
    "hp": 200,
    "init": 0,
    "cr": 13,
    "type": "giant",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/zephyros-skt.js"
  },
  {
    "name": "Zi Liang",
    "ac": 15,
    "hp": 22,
    "init": 2,
    "cr": 0,
    "type": "humanoid",
    "source": "Storm King's Thunder",
    "htmlLink": "./custom/index.html?file=skt/zi-liang-skt.js"
  },
  {
    "name": "Expert",
    "ac": 15,
    "hp": 44,
    "init": 3,
    "cr": 0,
    "type": "humanoid",
    "source": "Sleeping Dragon's Wake",
    "htmlLink": "./custom/index.html?file=slw/expert-slw.js"
  },
  {
    "name": "Skull Flier",
    "ac": 16,
    "hp": 24,
    "init": 2,
    "cr": 0.5,
    "type": "construct",
    "source": "Sleeping Dragon's Wake",
    "htmlLink": "./custom/index.html?file=slw/skull-flier-slw.js"
  },
  {
    "name": "Spellcaster (Healer)",
    "ac": 13,
    "hp": 36,
    "init": 1,
    "cr": 0,
    "type": "humanoid",
    "source": "Sleeping Dragon's Wake",
    "htmlLink": "./custom/index.html?file=slw/spellcaster-healer-slw.js"
  },
  {
    "name": "Spellcaster (Mage)",
    "ac": 13,
    "hp": 36,
    "init": 1,
    "cr": 0,
    "type": "humanoid",
    "source": "Sleeping Dragon's Wake",
    "htmlLink": "./custom/index.html?file=slw/spellcaster-mage-slw.js"
  },
  {
    "name": "Statue of Talos",
    "ac": 17,
    "hp": 147,
    "init": 0,
    "cr": 10,
    "type": "elemental",
    "source": "Sleeping Dragon's Wake",
    "htmlLink": "./custom/index.html?file=slw/statue-of-talos-slw.js"
  },
  {
    "name": "Tooth-N-Claw",
    "ac": 15,
    "hp": 45,
    "init": 1,
    "cr": 3,
    "type": "fiend",
    "source": "Sleeping Dragon's Wake",
    "htmlLink": "./custom/index.html?file=slw/tooth-n-claw-slw.js"
  },
  {
    "name": "Warrior",
    "ac": 20,
    "hp": 52,
    "init": 2,
    "cr": 0,
    "type": "humanoid",
    "source": "Sleeping Dragon's Wake",
    "htmlLink": "./custom/index.html?file=slw/warrior-slw.js"
  },
  {
    "name": "Adult Red Dracolich",
    "ac": 19,
    "hp": 256,
    "init": 0,
    "cr": 17,
    "type": "dragon",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/adult-red-dracolich-tce.js"
  },
  {
    "name": "Dancing Item",
    "ac": 16,
    "hp": 10,
    "init": 2,
    "cr": 0,
    "type": "construct",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/dancing-item-tce.js"
  },
  {
    "name": "Juvenile Mimic",
    "ac": 11,
    "hp": 7,
    "init": 1,
    "cr": 0,
    "type": "monstrosity",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/juvenile-mimic-tce.js"
  },
  {
    "name": "Mighty Servant of Leuk-o",
    "ac": 22,
    "hp": 310,
    "init": 2,
    "cr": 0,
    "type": "construct",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/mighty-servant-of-leuk-o-tce.js"
  },
  {
    "name": "Reflection",
    "ac": 12,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "fey",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/reflection-tce.js"
  },
  {
    "name": "Shadow Spirit (Despair)",
    "ac": null,
    "hp": 35,
    "init": 3,
    "cr": 0,
    "type": "monstrosity",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/shadow-spirit-despair-tce.js"
  },
  {
    "name": "Shadow Spirit (Fear)",
    "ac": null,
    "hp": 35,
    "init": 3,
    "cr": 0,
    "type": "monstrosity",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/shadow-spirit-fear-tce.js"
  },
  {
    "name": "Shadow Spirit (Fury)",
    "ac": null,
    "hp": 35,
    "init": 3,
    "cr": 0,
    "type": "monstrosity",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/shadow-spirit-fury-tce.js"
  },
  {
    "name": "Shadow Spirit",
    "ac": null,
    "hp": 35,
    "init": 3,
    "cr": 0,
    "type": "monstrosity",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/shadow-spirit-tce.js"
  },
  {
    "name": "Wildfire Spirit",
    "ac": 13,
    "hp": 5,
    "init": 2,
    "cr": 0,
    "type": "elemental",
    "source": "Tasha's Cauldron of Everything",
    "htmlLink": "./custom/index.html?file=tce/wildfire-spirit-tce.js"
  },
  {
    "name": "Amphisbaena",
    "ac": 12,
    "hp": 60,
    "init": 2,
    "cr": 3,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/amphisbaena-tftyp.js"
  },
  {
    "name": "Animated Table",
    "ac": 15,
    "hp": 39,
    "init": -1,
    "cr": 2,
    "type": "construct",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/animated-table-tftyp.js"
  },
  {
    "name": "Ashdra",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/ashdra-tftyp.js"
  },
  {
    "name": "Bandagh",
    "ac": 13,
    "hp": 15,
    "init": 1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/bandagh-tftyp.js"
  },
  {
    "name": "Belak the Outcast",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/belak-the-outcast-tftyp.js"
  },
  {
    "name": "Bugbear Gardener",
    "ac": 16,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/bugbear-gardener-tftyp.js"
  },
  {
    "name": "Bugbear Lieutenant",
    "ac": 16,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/bugbear-lieutenant-tftyp.js"
  },
  {
    "name": "Calcryx",
    "ac": 16,
    "hp": 32,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/calcryx-tftyp.js"
  },
  {
    "name": "Centaur Mummy",
    "ac": 13,
    "hp": 85,
    "init": 1,
    "cr": 6,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/centaur-mummy-tftyp.js"
  },
  {
    "name": "Chief Nosnra",
    "ac": 17,
    "hp": 138,
    "init": -1,
    "cr": 8,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/chief-nosnra-tftyp.js"
  },
  {
    "name": "Cloud Giant Noble",
    "ac": 16,
    "hp": 200,
    "init": 0,
    "cr": 9,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/cloud-giant-noble-tftyp.js"
  },
  {
    "name": "Curran Corvalin",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/curran-corvalin-tftyp.js"
  },
  {
    "name": "Dragonpriest",
    "ac": 15,
    "hp": 30,
    "init": 1,
    "cr": 5,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/dragonpriest-tftyp.js"
  },
  {
    "name": "Dread Warrior",
    "ac": 18,
    "hp": 37,
    "init": 0,
    "cr": 1,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/dread-warrior-tftyp.js"
  },
  {
    "name": "Drevin",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/drevin-tftyp.js"
  },
  {
    "name": "Drow Commander",
    "ac": 18,
    "hp": 110,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/drow-commander-tftyp.js"
  },
  {
    "name": "Duergar Spy",
    "ac": 15,
    "hp": 33,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/duergar-spy-tftyp.js"
  },
  {
    "name": "Durnn",
    "ac": 19,
    "hp": 18,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/durnn-tftyp.js"
  },
  {
    "name": "Eira",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/eira-tftyp.js"
  },
  {
    "name": "Elder Black Pudding",
    "ac": 7,
    "hp": 130,
    "init": -3,
    "cr": 4,
    "type": "ooze",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/elder-black-pudding-tftyp.js"
  },
  {
    "name": "Elder Giant Lizard",
    "ac": 14,
    "hp": 85,
    "init": -1,
    "cr": 5,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/elder-giant-lizard-tftyp.js"
  },
  {
    "name": "Erky Timbers",
    "ac": 10,
    "hp": 17,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/erky-timbers-tftyp.js"
  },
  {
    "name": "Estia",
    "ac": 14,
    "hp": 200,
    "init": 0,
    "cr": 9,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/estia-tftyp.js"
  },
  {
    "name": "Fire Giant Royal Headsman",
    "ac": 18,
    "hp": 162,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/fire-giant-royal-headsman-tftyp.js"
  },
  {
    "name": "Fire Giant Servant",
    "ac": 13,
    "hp": 105,
    "init": -1,
    "cr": 5,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/fire-giant-servant-tftyp.js"
  },
  {
    "name": "Flying Shield",
    "ac": 17,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/flying-shield-tftyp.js"
  },
  {
    "name": "Four-Armed Gargoyle",
    "ac": 15,
    "hp": 63,
    "init": 0,
    "cr": 2,
    "type": "elemental",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/four-armed-gargoyle-tftyp.js"
  },
  {
    "name": "Frost Giant Servant",
    "ac": 13,
    "hp": 105,
    "init": -1,
    "cr": 5,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/frost-giant-servant-tftyp.js"
  },
  {
    "name": "Gargantuan Rug of Smothering",
    "ac": 12,
    "hp": 63,
    "init": 2,
    "cr": 2,
    "type": "construct",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/gargantuan-rug-of-smothering-tftyp.js"
  },
  {
    "name": "Giant Crayfish",
    "ac": 15,
    "hp": 45,
    "init": 1,
    "cr": 2,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/giant-crayfish-tftyp.js"
  },
  {
    "name": "Giant Ice Toad",
    "ac": 14,
    "hp": 52,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/giant-ice-toad-tftyp.js"
  },
  {
    "name": "Giant Lightning Eel",
    "ac": 13,
    "hp": 42,
    "init": 3,
    "cr": 3,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/giant-lightning-eel-tftyp.js"
  },
  {
    "name": "Giant Skeleton",
    "ac": 17,
    "hp": 115,
    "init": 0,
    "cr": 7,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/giant-skeleton-tftyp.js"
  },
  {
    "name": "Giant Subterranean Lizard",
    "ac": 14,
    "hp": 66,
    "init": -1,
    "cr": 4,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/giant-subterranean-lizard-tftyp.js"
  },
  {
    "name": "Goblin Commoner",
    "ac": 10,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/goblin-commoner-tftyp.js"
  },
  {
    "name": "Gorvan Ironheart",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/gorvan-ironheart-tftyp.js"
  },
  {
    "name": "Great Ulfe",
    "ac": 11,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/great-ulfe-tftyp.js"
  },
  {
    "name": "Greater Zombie",
    "ac": 15,
    "hp": 97,
    "init": 0,
    "cr": 5,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/greater-zombie-tftyp.js"
  },
  {
    "name": "Grenl",
    "ac": 15,
    "hp": 10,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/grenl-tftyp.js"
  },
  {
    "name": "Grutha",
    "ac": 13,
    "hp": 105,
    "init": -1,
    "cr": 5,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/grutha-tftyp.js"
  },
  {
    "name": "Guthash",
    "ac": 12,
    "hp": 16,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/guthash-tftyp.js"
  },
  {
    "name": "Hedrun Arnsfirth",
    "ac": 12,
    "hp": 37,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/hedrun-arnsfirth-tftyp.js"
  },
  {
    "name": "Hill Giant Sergeant",
    "ac": 16,
    "hp": 115,
    "init": -1,
    "cr": 5,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/hill-giant-sergeant-tftyp.js"
  },
  {
    "name": "Hill Giant Servant",
    "ac": 11,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/hill-giant-servant-tftyp.js"
  },
  {
    "name": "Hill Giant Subchief",
    "ac": 17,
    "hp": 126,
    "init": 2,
    "cr": 7,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/hill-giant-subchief-tftyp.js"
  },
  {
    "name": "Huge Giant Crab",
    "ac": 15,
    "hp": 161,
    "init": 2,
    "cr": 8,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/huge-giant-crab-tftyp.js"
  },
  {
    "name": "Huge Ochre Jelly",
    "ac": 8,
    "hp": 51,
    "init": -2,
    "cr": 2,
    "type": "ooze",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/huge-ochre-jelly-tftyp.js"
  },
  {
    "name": "Huge Polar Bear",
    "ac": 12,
    "hp": 65,
    "init": 0,
    "cr": 2,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/huge-polar-bear-tftyp.js"
  },
  {
    "name": "Irisoth",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/irisoth-tftyp.js"
  },
  {
    "name": "Jarl Grugnur",
    "ac": 18,
    "hp": 200,
    "init": 0,
    "cr": 9,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/jarl-grugnur-tftyp.js"
  },
  {
    "name": "Jot",
    "ac": 13,
    "hp": 7,
    "init": 3,
    "cr": 1,
    "type": "fiend",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/jot-tftyp.js"
  },
  {
    "name": "Kaarghaz",
    "ac": 13,
    "hp": 39,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/kaarghaz-tftyp.js"
  },
  {
    "name": "Kalka-Kylla",
    "ac": 15,
    "hp": 85,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/kalka-kylla-tftyp.js"
  },
  {
    "name": "Kelpie",
    "ac": 14,
    "hp": 67,
    "init": 2,
    "cr": 4,
    "type": "plant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/kelpie-tftyp.js"
  },
  {
    "name": "Kelson Darktreader",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/kelson-darktreader-tftyp.js"
  },
  {
    "name": "Kieren",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/kieren-tftyp.js"
  },
  {
    "name": "King Snurre",
    "ac": 18,
    "hp": 187,
    "init": -1,
    "cr": 11,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/king-snurre-tftyp.js"
  },
  {
    "name": "Kobold Commoner",
    "ac": 10,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/kobold-commoner-tftyp.js"
  },
  {
    "name": "Kobold Elite",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/kobold-elite-tftyp.js"
  },
  {
    "name": "Lacedon",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/lacedon-tftyp.js"
  },
  {
    "name": "Lahnis",
    "ac": 13,
    "hp": 66,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/lahnis-tftyp.js"
  },
  {
    "name": "Lesser Mummy Lord",
    "ac": 17,
    "hp": 97,
    "init": 0,
    "cr": 15,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/lesser-mummy-lord-tftyp.js"
  },
  {
    "name": "Lumalia",
    "ac": 17,
    "hp": 136,
    "init": 4,
    "cr": 10,
    "type": "celestial",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/lumalia-tftyp.js"
  },
  {
    "name": "Malformed Kraken",
    "ac": 17,
    "hp": 172,
    "init": 0,
    "cr": 10,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/malformed-kraken-tftyp.js"
  },
  {
    "name": "Mennek Ariz",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/mennek-ariz-tftyp.js"
  },
  {
    "name": "Nahual",
    "ac": 14,
    "hp": 52,
    "init": 4,
    "cr": 3,
    "type": "fiend",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/nahual-tftyp.js"
  },
  {
    "name": "Nedylene",
    "ac": 16,
    "hp": 71,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/nedylene-tftyp.js"
  },
  {
    "name": "Nereid",
    "ac": 13,
    "hp": 44,
    "init": 3,
    "cr": 2,
    "type": "fey",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/nereid-tftyp.js"
  },
  {
    "name": "Nimira",
    "ac": 17,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/nimira-tftyp.js"
  },
  {
    "name": "Obmi",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/obmi-tftyp.js"
  },
  {
    "name": "Ogre Skeleton",
    "ac": 11,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/ogre-skeleton-tftyp.js"
  },
  {
    "name": "Ooze Master",
    "ac": 9,
    "hp": 138,
    "init": -5,
    "cr": 10,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/ooze-master-tftyp.js"
  },
  {
    "name": "Orc Commoner",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/orc-commoner-tftyp.js"
  },
  {
    "name": "Oussa",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "monstrosity (shapechanger",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/oussa-tftyp.js"
  },
  {
    "name": "Phaia",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/phaia-tftyp.js"
  },
  {
    "name": "Reduced-Threat Aboleth",
    "ac": 17,
    "hp": 67,
    "init": -1,
    "cr": 10,
    "type": "aberration",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-aboleth-tftyp.js"
  },
  {
    "name": "Reduced-Threat Basilisk",
    "ac": 15,
    "hp": 26,
    "init": -1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-basilisk-tftyp.js"
  },
  {
    "name": "Reduced-Threat Behir",
    "ac": 17,
    "hp": 84,
    "init": 3,
    "cr": 11,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-behir-tftyp.js"
  },
  {
    "name": "Reduced-Threat Beholder",
    "ac": 18,
    "hp": 90,
    "init": 2,
    "cr": 13,
    "type": "aberration",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-beholder-tftyp.js"
  },
  {
    "name": "Reduced-Threat Black Pudding",
    "ac": 7,
    "hp": 42,
    "init": -3,
    "cr": 4,
    "type": "ooze",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-black-pudding-tftyp.js"
  },
  {
    "name": "Reduced-Threat Carrion Crawler",
    "ac": 13,
    "hp": 25,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-carrion-crawler-tftyp.js"
  },
  {
    "name": "Reduced-Threat Clay Golem",
    "ac": 14,
    "hp": 66,
    "init": -1,
    "cr": 9,
    "type": "construct",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-clay-golem-tftyp.js"
  },
  {
    "name": "Reduced-Threat Darkmantle",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-darkmantle-tftyp.js"
  },
  {
    "name": "Reduced-Threat Displacer Beast",
    "ac": 13,
    "hp": 42,
    "init": 2,
    "cr": 3,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-displacer-beast-tftyp.js"
  },
  {
    "name": "Reduced-Threat Dragon Turtle",
    "ac": 20,
    "hp": 170,
    "init": 0,
    "cr": 17,
    "type": "dragon",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-dragon-turtle-tftyp.js"
  },
  {
    "name": "Reduced-Threat Ettercap",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-ettercap-tftyp.js"
  },
  {
    "name": "Reduced-Threat Flesh Golem",
    "ac": 9,
    "hp": 46,
    "init": -1,
    "cr": 5,
    "type": "construct",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-flesh-golem-tftyp.js"
  },
  {
    "name": "Reduced-Threat Glabrezu",
    "ac": 17,
    "hp": 78,
    "init": 2,
    "cr": 9,
    "type": "fiend",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-glabrezu-tftyp.js"
  },
  {
    "name": "Reduced-Threat Gray Ooze",
    "ac": 8,
    "hp": 11,
    "init": -2,
    "cr": 0.5,
    "type": "ooze",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-gray-ooze-tftyp.js"
  },
  {
    "name": "Reduced-Threat Helmed Horror",
    "ac": 20,
    "hp": 30,
    "init": 1,
    "cr": 4,
    "type": "construct",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-helmed-horror-tftyp.js"
  },
  {
    "name": "Reduced-Threat Hezrou",
    "ac": 16,
    "hp": 68,
    "init": 3,
    "cr": 8,
    "type": "fiend",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-hezrou-tftyp.js"
  },
  {
    "name": "Reduced-Threat Hook Horror",
    "ac": 15,
    "hp": 37,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-hook-horror-tftyp.js"
  },
  {
    "name": "Reduced-Threat Ochre Jelly",
    "ac": 8,
    "hp": 22,
    "init": -2,
    "cr": 2,
    "type": "ooze",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-ochre-jelly-tftyp.js"
  },
  {
    "name": "Reduced-Threat Otyugh",
    "ac": 14,
    "hp": 57,
    "init": 0,
    "cr": 5,
    "type": "aberration",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-otyugh-tftyp.js"
  },
  {
    "name": "Reduced-Threat Owlbear",
    "ac": 13,
    "hp": 29,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-owlbear-tftyp.js"
  },
  {
    "name": "Reduced-Threat Peryton",
    "ac": 13,
    "hp": 16,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-peryton-tftyp.js"
  },
  {
    "name": "Reduced-Threat Remorhaz",
    "ac": 17,
    "hp": 97,
    "init": 1,
    "cr": 11,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-remorhaz-tftyp.js"
  },
  {
    "name": "Reduced-Threat Stone Golem",
    "ac": 17,
    "hp": 89,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-stone-golem-tftyp.js"
  },
  {
    "name": "Reduced-Threat Vrock",
    "ac": 15,
    "hp": 52,
    "init": 2,
    "cr": 6,
    "type": "fiend",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-vrock-tftyp.js"
  },
  {
    "name": "Reduced-Threat Wight",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-wight-tftyp.js"
  },
  {
    "name": "Reduced-Threat Wyvern",
    "ac": 13,
    "hp": 55,
    "init": 0,
    "cr": 6,
    "type": "dragon",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/reduced-threat-wyvern-tftyp.js"
  },
  {
    "name": "Scrag",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 5,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/scrag-tftyp.js"
  },
  {
    "name": "Sea Lion",
    "ac": 15,
    "hp": 90,
    "init": 2,
    "cr": 5,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/sea-lion-tftyp.js"
  },
  {
    "name": "Sentient Gray Ooze",
    "ac": 8,
    "hp": 22,
    "init": -2,
    "cr": 0.5,
    "type": "ooze",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/sentient-gray-ooze-tftyp.js"
  },
  {
    "name": "Sentient Ochre Jelly",
    "ac": 8,
    "hp": 45,
    "init": -2,
    "cr": 2,
    "type": "ooze",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/sentient-ochre-jelly-tftyp.js"
  },
  {
    "name": "Shalendra Floshin",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/shalendra-floshin-tftyp.js"
  },
  {
    "name": "Sharwyn Hucrele",
    "ac": 16,
    "hp": 13,
    "init": 1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/sharwyn-hucrele-tftyp.js"
  },
  {
    "name": "Sir Braford",
    "ac": 18,
    "hp": 19,
    "init": -1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/sir-braford-tftyp.js"
  },
  {
    "name": "Siren",
    "ac": 14,
    "hp": 38,
    "init": 4,
    "cr": 3,
    "type": "fey",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/siren-tftyp.js"
  },
  {
    "name": "Snarla",
    "ac": 11,
    "hp": 58,
    "init": 1,
    "cr": 5,
    "type": "humanoid (human",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/snarla-tftyp.js"
  },
  {
    "name": "Snow Leopard",
    "ac": 12,
    "hp": 37,
    "init": 2,
    "cr": 1,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/snow-leopard-tftyp.js"
  },
  {
    "name": "Snurrevin",
    "ac": 16,
    "hp": 45,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/snurrevin-tftyp.js"
  },
  {
    "name": "Stone Dragon Statue",
    "ac": 17,
    "hp": 178,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/stone-dragon-statue-tftyp.js"
  },
  {
    "name": "Tarul Var",
    "ac": 16,
    "hp": 105,
    "init": 3,
    "cr": 13,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/tarul-var-tftyp.js"
  },
  {
    "name": "Tecuziztecatl",
    "ac": 13,
    "hp": 102,
    "init": 0,
    "cr": 4,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/tecuziztecatl-tftyp.js"
  },
  {
    "name": "Thayan Apprentice",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/thayan-apprentice-tftyp.js"
  },
  {
    "name": "Thayan Warrior",
    "ac": 16,
    "hp": 52,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/thayan-warrior-tftyp.js"
  },
  {
    "name": "The Keeper",
    "ac": 17,
    "hp": 126,
    "init": 2,
    "cr": 7,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/the-keeper-tftyp.js"
  },
  {
    "name": "Therzt",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/therzt-tftyp.js"
  },
  {
    "name": "Thorn Slinger",
    "ac": 11,
    "hp": 32,
    "init": 1,
    "cr": 0.5,
    "type": "plant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/thorn-slinger-tftyp.js"
  },
  {
    "name": "Tloques-Popolocas",
    "ac": 15,
    "hp": 82,
    "init": 3,
    "cr": 5,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/tloques-popolocas-tftyp.js"
  },
  {
    "name": "Torlin Silvershield",
    "ac": 14,
    "hp": 45,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/torlin-silvershield-tftyp.js"
  },
  {
    "name": "Werejaguar",
    "ac": 12,
    "hp": 120,
    "init": 2,
    "cr": 4,
    "type": "humanoid (human",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/werejaguar-tftyp.js"
  },
  {
    "name": "White Maw",
    "ac": 5,
    "hp": 217,
    "init": -5,
    "cr": 10,
    "type": "ooze",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/white-maw-tftyp.js"
  },
  {
    "name": "Xilonen",
    "ac": 20,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/xilonen-tftyp.js"
  },
  {
    "name": "Yeti Leader",
    "ac": 12,
    "hp": 51,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/yeti-leader-tftyp.js"
  },
  {
    "name": "Young Fire Giant",
    "ac": 11,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/young-fire-giant-tftyp.js"
  },
  {
    "name": "Young Frost Giant",
    "ac": 11,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/young-frost-giant-tftyp.js"
  },
  {
    "name": "Young Hill Giant",
    "ac": 13,
    "hp": 15,
    "init": 1,
    "cr": 0.5,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/young-hill-giant-tftyp.js"
  },
  {
    "name": "Young Ogre Servant",
    "ac": 13,
    "hp": 15,
    "init": 1,
    "cr": 0.5,
    "type": "giant",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/young-ogre-servant-tftyp.js"
  },
  {
    "name": "Young Troglodyte",
    "ac": 12,
    "hp": 5,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/young-troglodyte-tftyp.js"
  },
  {
    "name": "Young Winter Wolf",
    "ac": 14,
    "hp": 37,
    "init": 2,
    "cr": 1,
    "type": "beast",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/young-winter-wolf-tftyp.js"
  },
  {
    "name": "Yusdrayl",
    "ac": 12,
    "hp": 16,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Tales from the Yawning Portal",
    "htmlLink": "./custom/index.html?file=tftyp/yusdrayl-tftyp.js"
  },
  {
    "name": "Acererak",
    "ac": 21,
    "hp": 285,
    "init": 3,
    "cr": 23,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/acererak-toa.js"
  },
  {
    "name": "Albino Dwarf Spirit Warrior",
    "ac": 13,
    "hp": 30,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/albino-dwarf-spirit-warrior-toa.js"
  },
  {
    "name": "Albino Dwarf Warrior",
    "ac": 13,
    "hp": 30,
    "init": 1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/albino-dwarf-warrior-toa.js"
  },
  {
    "name": "Aldani (Lobsterfolk)",
    "ac": 14,
    "hp": 49,
    "init": -1,
    "cr": 1,
    "type": "monstrosity",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/aldani-lobsterfolk-toa.js"
  },
  {
    "name": "Almiraj",
    "ac": 13,
    "hp": 3,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/almiraj-toa.js"
  },
  {
    "name": "Ankylosaurus Zombie",
    "ac": 14,
    "hp": 68,
    "init": -1,
    "cr": 3,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/ankylosaurus-zombie-toa.js"
  },
  {
    "name": "Artus Cimber",
    "ac": 14,
    "hp": 82,
    "init": 2,
    "cr": 7,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/artus-cimber-toa.js"
  },
  {
    "name": "Asharra",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/asharra-toa.js"
  },
  {
    "name": "Assassin Vine",
    "ac": 13,
    "hp": 85,
    "init": 0,
    "cr": 3,
    "type": "plant",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/assassin-vine-toa.js"
  },
  {
    "name": "Atropal",
    "ac": 7,
    "hp": 225,
    "init": -3,
    "cr": 13,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/atropal-toa.js"
  },
  {
    "name": "Azaka Stormfang",
    "ac": 12,
    "hp": 120,
    "init": 2,
    "cr": 4,
    "type": "humanoid (human",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/azaka-stormfang-toa.js"
  },
  {
    "name": "Bag of Nails",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/bag-of-nails-toa.js"
  },
  {
    "name": "Blind Artist",
    "ac": 8,
    "hp": 22,
    "init": -2,
    "cr": 0,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/blind-artist-toa.js"
  },
  {
    "name": "Bosco Daggerhand",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/bosco-daggerhand-toa.js"
  },
  {
    "name": "Chwinga",
    "ac": 15,
    "hp": 5,
    "init": 5,
    "cr": 0,
    "type": "elemental",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/chwinga-toa.js"
  },
  {
    "name": "Clay Gladiator",
    "ac": 17,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "construct",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/clay-gladiator-toa.js"
  },
  {
    "name": "Dragonbait",
    "ac": 17,
    "hp": 120,
    "init": 1,
    "cr": 5,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/dragonbait-toa.js"
  },
  {
    "name": "Drufi",
    "ac": 15,
    "hp": 138,
    "init": -1,
    "cr": 8,
    "type": "giant",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/drufi-toa.js"
  },
  {
    "name": "Eblis",
    "ac": 13,
    "hp": 26,
    "init": 3,
    "cr": 1,
    "type": "monstrosity",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/eblis-toa.js"
  },
  {
    "name": "Ekene-Afa",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/ekene-afa-toa.js"
  },
  {
    "name": "Eku",
    "ac": 19,
    "hp": 97,
    "init": 5,
    "cr": 4,
    "type": "celestial",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/eku-toa.js"
  },
  {
    "name": "Elok Jaharwon",
    "ac": 10,
    "hp": 78,
    "init": 0,
    "cr": 4,
    "type": "humanoid (human",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/elok-jaharwon-toa.js"
  },
  {
    "name": "Faroul",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/faroul-toa.js"
  },
  {
    "name": "Fenthaza",
    "ac": 14,
    "hp": 71,
    "init": 2,
    "cr": 4,
    "type": "monstrosity (shapechanger",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/fenthaza-toa.js"
  },
  {
    "name": "Flask of Wine",
    "ac": 14,
    "hp": 40,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/flask-of-wine-toa.js"
  },
  {
    "name": "Flying Monkey",
    "ac": 12,
    "hp": 3,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/flying-monkey-toa.js"
  },
  {
    "name": "Giant Four-Armed Gargoyle",
    "ac": 17,
    "hp": 147,
    "init": 0,
    "cr": 10,
    "type": "elemental",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/giant-four-armed-gargoyle-toa.js"
  },
  {
    "name": "Giant Snapping Turtle",
    "ac": 17,
    "hp": 75,
    "init": 0,
    "cr": 3,
    "type": "beast",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/giant-snapping-turtle-toa.js"
  },
  {
    "name": "Girallon Zombie",
    "ac": 11,
    "hp": 59,
    "init": 1,
    "cr": 3,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/girallon-zombie-toa.js"
  },
  {
    "name": "Gondolo",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/gondolo-toa.js"
  },
  {
    "name": "Grabstab",
    "ac": 17,
    "hp": 21,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/grabstab-toa.js"
  },
  {
    "name": "Grandfather Zitembe",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/grandfather-zitembe-toa.js"
  },
  {
    "name": "Hew Hackinstone",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/hew-hackinstone-toa.js"
  },
  {
    "name": "Ifan Talro'a",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/ifan-talroa-toa.js"
  },
  {
    "name": "Jaculi",
    "ac": 14,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "beast",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/jaculi-toa.js"
  },
  {
    "name": "Jessamine",
    "ac": 15,
    "hp": 58,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/jessamine-toa.js"
  },
  {
    "name": "Jobal",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/jobal-toa.js"
  },
  {
    "name": "Kamadan",
    "ac": 13,
    "hp": 67,
    "init": 3,
    "cr": 4,
    "type": "monstrosity",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/kamadan-toa.js"
  },
  {
    "name": "King of Feathers",
    "ac": 13,
    "hp": 200,
    "init": 0,
    "cr": 8,
    "type": "monstrosity",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/king-of-feathers-toa.js"
  },
  {
    "name": "Kupalu\u00e9",
    "ac": 13,
    "hp": 9,
    "init": 2,
    "cr": 0.25,
    "type": "plant",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/kupalue-toa.js"
  },
  {
    "name": "Kwayoth\u00e9",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/kwayothe-toa.js"
  },
  {
    "name": "Laskilar",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/laskilar-toa.js"
  },
  {
    "name": "Liara Portyr",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 4,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/liara-portyr-toa.js"
  },
  {
    "name": "Mantrap",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 1,
    "type": "plant",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/mantrap-toa.js"
  },
  {
    "name": "Mister Threadneedle",
    "ac": 11,
    "hp": 36,
    "init": 1,
    "cr": 1,
    "type": "construct",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/mister-threadneedle-toa.js"
  },
  {
    "name": "Musharib",
    "ac": 13,
    "hp": 30,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/musharib-toa.js"
  },
  {
    "name": "Mwaxanar\u00e9",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/mwaxanare-toa.js"
  },
  {
    "name": "Na",
    "ac": 10,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/na-toa.js"
  },
  {
    "name": "Nanny Pu'pu",
    "ac": 17,
    "hp": 82,
    "init": 1,
    "cr": 3,
    "type": "fey",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/nanny-pupu-toa.js"
  },
  {
    "name": "Nepartak",
    "ac": 13,
    "hp": 40,
    "init": 3,
    "cr": 4,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/nepartak-toa.js"
  },
  {
    "name": "Niles Breakbone",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/niles-breakbone-toa.js"
  },
  {
    "name": "Ortimay Swift and Dark",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/ortimay-swift-and-dark-toa.js"
  },
  {
    "name": "Orvex Ocrammas",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/orvex-ocrammas-toa.js"
  },
  {
    "name": "Pterafolk",
    "ac": 12,
    "hp": 26,
    "init": 1,
    "cr": 1,
    "type": "monstrosity",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/pterafolk-toa.js"
  },
  {
    "name": "Qawasha",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/qawasha-toa.js"
  },
  {
    "name": "Ras Nsi",
    "ac": 15,
    "hp": 127,
    "init": 3,
    "cr": 7,
    "type": "monstrosity (shapechanger",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/ras-nsi-toa.js"
  },
  {
    "name": "River Mist",
    "ac": 14,
    "hp": 40,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/river-mist-toa.js"
  },
  {
    "name": "Salida",
    "ac": 11,
    "hp": 40,
    "init": 1,
    "cr": 1,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/salida-toa.js"
  },
  {
    "name": "Sekelok",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/sekelok-toa.js"
  },
  {
    "name": "Shago",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/shago-toa.js"
  },
  {
    "name": "Skeleton Key",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/skeleton-key-toa.js"
  },
  {
    "name": "Spiked Tomb Guardian",
    "ac": 17,
    "hp": 93,
    "init": -1,
    "cr": 6,
    "type": "construct",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/spiked-tomb-guardian-toa.js"
  },
  {
    "name": "Stone Juggernaut",
    "ac": 15,
    "hp": 157,
    "init": 1,
    "cr": 12,
    "type": "construct",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/stone-juggernaut-toa.js"
  },
  {
    "name": "Su-monster",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "monstrosity",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/su-monster-toa.js"
  },
  {
    "name": "Syndra Silvane",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/syndra-silvane-toa.js"
  },
  {
    "name": "Tabaxi Hunter",
    "ac": 14,
    "hp": 40,
    "init": 3,
    "cr": 1,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/tabaxi-hunter-toa.js"
  },
  {
    "name": "Tabaxi Minstrel",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/tabaxi-minstrel-toa.js"
  },
  {
    "name": "Terracotta Warrior",
    "ac": 18,
    "hp": 33,
    "init": 0,
    "cr": 1,
    "type": "construct",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/terracotta-warrior-toa.js"
  },
  {
    "name": "Tomb Dwarf",
    "ac": 14,
    "hp": 45,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/tomb-dwarf-toa.js"
  },
  {
    "name": "Tomb Guardian",
    "ac": 17,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "construct",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/tomb-guardian-toa.js"
  },
  {
    "name": "Tri-flower Frond",
    "ac": 10,
    "hp": 11,
    "init": 2,
    "cr": 0.5,
    "type": "plant",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/tri-flower-frond-toa.js"
  },
  {
    "name": "Tyrannosaurus Zombie",
    "ac": 11,
    "hp": 136,
    "init": -2,
    "cr": 8,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/tyrannosaurus-zombie-toa.js"
  },
  {
    "name": "Volothamp \"Volo\" Geddarm",
    "ac": 11,
    "hp": 31,
    "init": 1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/volothamp-volo-geddarm-toa.js"
  },
  {
    "name": "Wakanga O'tamu",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/wakanga-otamu-toa.js"
  },
  {
    "name": "Wild Dog",
    "ac": 12,
    "hp": 3,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/wild-dog-toa.js"
  },
  {
    "name": "Wine Weird",
    "ac": 13,
    "hp": 58,
    "init": 3,
    "cr": 3,
    "type": "elemental",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/wine-weird-toa.js"
  },
  {
    "name": "Withers",
    "ac": 14,
    "hp": 45,
    "init": 2,
    "cr": 4,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/withers-toa.js"
  },
  {
    "name": "Xandala",
    "ac": 13,
    "hp": 71,
    "init": 0,
    "cr": 7,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/xandala-toa.js"
  },
  {
    "name": "Yellow Musk Creeper",
    "ac": 6,
    "hp": 60,
    "init": -4,
    "cr": 2,
    "type": "plant",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/yellow-musk-creeper-toa.js"
  },
  {
    "name": "Yellow Musk Zombie",
    "ac": 9,
    "hp": 33,
    "init": -1,
    "cr": 0.25,
    "type": "undead",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/yellow-musk-zombie-toa.js"
  },
  {
    "name": "Yorb",
    "ac": 13,
    "hp": 49,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/yorb-toa.js"
  },
  {
    "name": "Yuan-ti Priest",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "monstrosity (shapechanger",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/yuan-ti-priest-toa.js"
  },
  {
    "name": "Zalkor\u00e9",
    "ac": 15,
    "hp": 127,
    "init": 2,
    "cr": 6,
    "type": "monstrosity",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/zalkore-toa.js"
  },
  {
    "name": "Zaroum Al-Saryak",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/zaroum-al-saryak-toa.js"
  },
  {
    "name": "Zebra",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/zebra-toa.js"
  },
  {
    "name": "Zhanthi",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/zhanthi-toa.js"
  },
  {
    "name": "Zindar",
    "ac": 13,
    "hp": 110,
    "init": 0,
    "cr": 8,
    "type": "humanoid",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/zindar-toa.js"
  },
  {
    "name": "Zorbo",
    "ac": 10,
    "hp": 27,
    "init": 0,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Tomb of Annihilation",
    "htmlLink": "./custom/index.html?file=toa/zorbo-toa.js"
  },
  {
    "name": "Vecna the Archlich",
    "ac": 18,
    "hp": 272,
    "init": 3,
    "cr": 26,
    "type": "undead",
    "source": "Verdant Doom",
    "htmlLink": "./custom/index.html?file=vd/vecna-the-archlich-vd.js"
  },
  {
    "name": "Alustriel Silverhand",
    "ac": 15,
    "hp": 272,
    "init": 5,
    "cr": 21,
    "type": "humanoid (human",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/alustriel-silverhand-veor.js"
  },
  {
    "name": "Argentia Skywright",
    "ac": 11,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid (human",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/argentia-skywright-veor.js"
  },
  {
    "name": "Black Rose Bearer",
    "ac": 11,
    "hp": 110,
    "init": -2,
    "cr": 6,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/black-rose-bearer-veor.js"
  },
  {
    "name": "Blade Lieutenant",
    "ac": 16,
    "hp": 153,
    "init": 1,
    "cr": 9,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/blade-lieutenant-veor.js"
  },
  {
    "name": "Blade Scout",
    "ac": 18,
    "hp": 105,
    "init": 5,
    "cr": 7,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/blade-scout-veor.js"
  },
  {
    "name": "Blazebear",
    "ac": 14,
    "hp": 189,
    "init": 3,
    "cr": 12,
    "type": "monstrosity",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/blazebear-veor.js"
  },
  {
    "name": "Bone Roc",
    "ac": 15,
    "hp": 133,
    "init": 5,
    "cr": 8,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/bone-roc-veor.js"
  },
  {
    "name": "Borthak",
    "ac": 16,
    "hp": 200,
    "init": 3,
    "cr": 15,
    "type": "monstrosity",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/borthak-veor.js"
  },
  {
    "name": "Camlash",
    "ac": 19,
    "hp": 325,
    "init": 2,
    "cr": 19,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/camlash-veor.js"
  },
  {
    "name": "Citadel Spider",
    "ac": 18,
    "hp": 310,
    "init": 0,
    "cr": 18,
    "type": "monstrosity",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/citadel-spider-veor.js"
  },
  {
    "name": "Crunch",
    "ac": 18,
    "hp": 105,
    "init": 5,
    "cr": 7,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/crunch-veor.js"
  },
  {
    "name": "Deadbark Dryad",
    "ac": 16,
    "hp": 187,
    "init": 3,
    "cr": 13,
    "type": "fey",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/deadbark-dryad-veor.js"
  },
  {
    "name": "Deathwolf",
    "ac": 15,
    "hp": 153,
    "init": 3,
    "cr": 15,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/deathwolf-veor.js"
  },
  {
    "name": "Degloth",
    "ac": 18,
    "hp": 133,
    "init": 3,
    "cr": 11,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/degloth-veor.js"
  },
  {
    "name": "Eldon Keyward",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/eldon-keyward-veor.js"
  },
  {
    "name": "False Lich",
    "ac": 18,
    "hp": 199,
    "init": 3,
    "cr": 21,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/false-lich-veor.js"
  },
  {
    "name": "Fernitha",
    "ac": 18,
    "hp": 153,
    "init": 3,
    "cr": 12,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/fernitha-veor.js"
  },
  {
    "name": "Figaro",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/figaro-veor.js"
  },
  {
    "name": "Glaive",
    "ac": 16,
    "hp": 187,
    "init": 3,
    "cr": 11,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/glaive-veor.js"
  },
  {
    "name": "Granite Juggernaut",
    "ac": 14,
    "hp": 157,
    "init": -5,
    "cr": 12,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/granite-juggernaut-veor.js"
  },
  {
    "name": "Grottenelle Stonecutter",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/grottenelle-stonecutter-veor.js"
  },
  {
    "name": "Hazvongel",
    "ac": 17,
    "hp": 237,
    "init": 5,
    "cr": 14,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/hazvongel-veor.js"
  },
  {
    "name": "Hertilod",
    "ac": 14,
    "hp": 241,
    "init": 4,
    "cr": 17,
    "type": "monstrosity",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/hertilod-veor.js"
  },
  {
    "name": "Inda Malayuri",
    "ac": 17,
    "hp": 136,
    "init": 4,
    "cr": 10,
    "type": "celestial",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/inda-malayuri-veor.js"
  },
  {
    "name": "Indrina Lamsensettle",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/indrina-lamsensettle-veor.js"
  },
  {
    "name": "Jerot Galgin",
    "ac": 12,
    "hp": 110,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/jerot-galgin-veor.js"
  },
  {
    "name": "Kakkuu Spyder-Fiend",
    "ac": 15,
    "hp": 91,
    "init": 2,
    "cr": 5,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/kakkuu-spyder-fiend-veor.js"
  },
  {
    "name": "Kas the Betrayer",
    "ac": 18,
    "hp": 315,
    "init": 5,
    "cr": 23,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/kas-the-betrayer-veor.js"
  },
  {
    "name": "Kaylan Renaudon",
    "ac": 16,
    "hp": 144,
    "init": 4,
    "cr": 13,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/kaylan-renaudon-veor.js"
  },
  {
    "name": "Ker-arach",
    "ac": 17,
    "hp": 152,
    "init": 4,
    "cr": 11,
    "type": "monstrosity",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/ker-arach-veor.js"
  },
  {
    "name": "Kevetta Dolindar",
    "ac": 16,
    "hp": 112,
    "init": 1,
    "cr": 9,
    "type": "monstrosity",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/kevetta-dolindar-veor.js"
  },
  {
    "name": "Khai Kiroth",
    "ac": 22,
    "hp": 289,
    "init": 3,
    "cr": 19,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/khai-kiroth-veor.js"
  },
  {
    "name": "Laysa Matulin",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/laysa-matulin-veor.js"
  },
  {
    "name": "Lysan",
    "ac": 18,
    "hp": 91,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/lysan-veor.js"
  },
  {
    "name": "Malaina van Talstiv",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/malaina-van-talstiv-veor.js"
  },
  {
    "name": "Mirror Shade",
    "ac": 13,
    "hp": 91,
    "init": 3,
    "cr": 10,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/mirror-shade-veor.js"
  },
  {
    "name": "Miska the Wolf-Spider",
    "ac": 21,
    "hp": 399,
    "init": 4,
    "cr": 24,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/miska-the-wolf-spider-veor.js"
  },
  {
    "name": "Moonlight Guardian",
    "ac": 16,
    "hp": 105,
    "init": -1,
    "cr": 6,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/moonlight-guardian-veor.js"
  },
  {
    "name": "Naxa",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 7,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/naxa-veor.js"
  },
  {
    "name": "Nyssa Otellion",
    "ac": 19,
    "hp": 202,
    "init": 2,
    "cr": 17,
    "type": "fiend (devil",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/nyssa-otellion-veor.js"
  },
  {
    "name": "Orinix",
    "ac": 17,
    "hp": 172,
    "init": 1,
    "cr": 13,
    "type": "dragon",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/orinix-veor.js"
  },
  {
    "name": "Phisarazu Spyder-Fiend",
    "ac": 17,
    "hp": 170,
    "init": 2,
    "cr": 13,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/phisarazu-spyder-fiend-veor.js"
  },
  {
    "name": "Quavilithku Spyder-Fiend",
    "ac": 19,
    "hp": 256,
    "init": 3,
    "cr": 17,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/quavilithku-spyder-fiend-veor.js"
  },
  {
    "name": "Rack",
    "ac": 18,
    "hp": 105,
    "init": 5,
    "cr": 7,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/rack-veor.js"
  },
  {
    "name": "Raklupis Spyder-Fiend",
    "ac": 19,
    "hp": 210,
    "init": 5,
    "cr": 19,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/raklupis-spyder-fiend-veor.js"
  },
  {
    "name": "Redbud",
    "ac": 16,
    "hp": 138,
    "init": -1,
    "cr": 9,
    "type": "plant",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/redbud-veor.js"
  },
  {
    "name": "Relentless Impaler",
    "ac": 16,
    "hp": 184,
    "init": 3,
    "cr": 15,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/relentless-impaler-veor.js"
  },
  {
    "name": "Rerak",
    "ac": 18,
    "hp": 199,
    "init": 3,
    "cr": 21,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/rerak-veor.js"
  },
  {
    "name": "Rezran \"Snake Eyes\" Agrodro",
    "ac": 18,
    "hp": 195,
    "init": 3,
    "cr": 15,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/rezran-snake-eyes-agrodro-veor.js"
  },
  {
    "name": "Riffel",
    "ac": 11,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid (human",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/riffel-veor.js"
  },
  {
    "name": "Sangora",
    "ac": 16,
    "hp": 144,
    "init": 4,
    "cr": 13,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/sangora-veor.js"
  },
  {
    "name": "Sarcelle Malinosh",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/sarcelle-malinosh-veor.js"
  },
  {
    "name": "Sarusanda Allester",
    "ac": 11,
    "hp": 77,
    "init": 1,
    "cr": 8,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/sarusanda-allester-veor.js"
  },
  {
    "name": "Shanzezim",
    "ac": 17,
    "hp": 229,
    "init": 1,
    "cr": 11,
    "type": "elemental",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/shanzezim-veor.js"
  },
  {
    "name": "Spiderdragon",
    "ac": 17,
    "hp": 152,
    "init": 4,
    "cr": 11,
    "type": "monstrosity",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/spiderdragon-veor.js"
  },
  {
    "name": "Star Angler",
    "ac": 15,
    "hp": 119,
    "init": 2,
    "cr": 8,
    "type": "monstrosity",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/star-angler-veor.js"
  },
  {
    "name": "Strahd, Master of Death House",
    "ac": 16,
    "hp": 136,
    "init": 4,
    "cr": 15,
    "type": "undead (vampire",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/strahd-master-of-death-house-veor.js"
  },
  {
    "name": "Tasha the Witch",
    "ac": 19,
    "hp": 210,
    "init": 4,
    "cr": 19,
    "type": "humanoid (human",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/tasha-the-witch-veor.js"
  },
  {
    "name": "Teremini Nightsedge",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/teremini-nightsedge-veor.js"
  },
  {
    "name": "Umberto Noblin",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/umberto-noblin-veor.js"
  },
  {
    "name": "Uvashar",
    "ac": 16,
    "hp": 110,
    "init": 3,
    "cr": 13,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/uvashar-veor.js"
  },
  {
    "name": "Vaeve",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 7,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/vaeve-veor.js"
  },
  {
    "name": "Valendar",
    "ac": 11,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid (human",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/valendar-veor.js"
  },
  {
    "name": "Vecna the Archlich",
    "ac": 18,
    "hp": 272,
    "init": 3,
    "cr": 26,
    "type": "undead",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/vecna-the-archlich-veor.js"
  },
  {
    "name": "Vlazok",
    "ac": 17,
    "hp": 136,
    "init": 4,
    "cr": 11,
    "type": "fiend",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/vlazok-veor.js"
  },
  {
    "name": "Warforged Warrior",
    "ac": 16,
    "hp": 30,
    "init": 1,
    "cr": 1,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/warforged-warrior-veor.js"
  },
  {
    "name": "Whirling Chandelier",
    "ac": 13,
    "hp": 105,
    "init": 2,
    "cr": 7,
    "type": "construct",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/whirling-chandelier-veor.js"
  },
  {
    "name": "Windfall",
    "ac": 19,
    "hp": 323,
    "init": 7,
    "cr": 23,
    "type": "humanoid (bard",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/windfall-veor.js"
  },
  {
    "name": "Zastra",
    "ac": 18,
    "hp": 91,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Vecna: Eve of Ruin",
    "htmlLink": "./custom/index.html?file=veor/zastra-veor.js"
  },
  {
    "name": "Booyahg Booyahg Booyahg",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/booyahg-booyahg-booyahg-vgm.js"
  },
  {
    "name": "Booyahg Caster",
    "ac": 15,
    "hp": 7,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/booyahg-caster-vgm.js"
  },
  {
    "name": "Booyahg Slave of the Archfey",
    "ac": 11,
    "hp": 49,
    "init": 1,
    "cr": 4,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/booyahg-slave-of-the-archfey-vgm.js"
  },
  {
    "name": "Booyahg Slave of the Fiend",
    "ac": 12,
    "hp": 78,
    "init": 2,
    "cr": 7,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/booyahg-slave-of-the-fiend-vgm.js"
  },
  {
    "name": "Booyahg Slave of the Great Old One",
    "ac": 12,
    "hp": 91,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/booyahg-slave-of-the-great-old-one-vgm.js"
  },
  {
    "name": "Booyahg Whip",
    "ac": 15,
    "hp": 7,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/booyahg-whip-vgm.js"
  },
  {
    "name": "Booyahg Wielder",
    "ac": 15,
    "hp": 7,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/booyahg-wielder-vgm.js"
  },
  {
    "name": "Cow",
    "ac": 10,
    "hp": 15,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/cow-vgm.js"
  },
  {
    "name": "Mind Flayer Psion",
    "ac": 15,
    "hp": 71,
    "init": 1,
    "cr": 8,
    "type": "aberration",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/mind-flayer-psion-vgm.js"
  },
  {
    "name": "Orc Blade of Ilneval",
    "ac": 18,
    "hp": 60,
    "init": 0,
    "cr": 4,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/orc-blade-of-ilneval-vgm.js"
  },
  {
    "name": "Orc Claw of Luthic",
    "ac": 14,
    "hp": 45,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/orc-claw-of-luthic-vgm.js"
  },
  {
    "name": "Orc Hand of Yurtrus",
    "ac": 12,
    "hp": 30,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/orc-hand-of-yurtrus-vgm.js"
  },
  {
    "name": "Orc Nurtured One of Yurtrus",
    "ac": 9,
    "hp": 30,
    "init": -1,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/orc-nurtured-one-of-yurtrus-vgm.js"
  },
  {
    "name": "Orc Red Fang of Shargaas",
    "ac": 15,
    "hp": 52,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/orc-red-fang-of-shargaas-vgm.js"
  },
  {
    "name": "Roth\u00e9",
    "ac": 10,
    "hp": 15,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/rothe-vgm.js"
  },
  {
    "name": "Xvart Speaker",
    "ac": 13,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/xvart-speaker-vgm.js"
  },
  {
    "name": "Yuan-ti Malison (Type 4)",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "monstrosity (shapechanger",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/yuan-ti-malison-type-4-vgm.js"
  },
  {
    "name": "Yuan-ti Malison (Type 5)",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "monstrosity (shapechanger",
    "source": "Volos Guide to Monsters",
    "htmlLink": "./custom/index.html?file=vgm/yuan-ti-malison-type-5-vgm.js"
  },
  {
    "name": "Bodytaker Plant",
    "ac": 16,
    "hp": 92,
    "init": -1,
    "cr": 7,
    "type": "plant",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/bodytaker-plant-vrgr.js"
  },
  {
    "name": "Boneless",
    "ac": 12,
    "hp": 26,
    "init": 2,
    "cr": 1,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/boneless-vrgr.js"
  },
  {
    "name": "Brain in a Jar",
    "ac": 11,
    "hp": 55,
    "init": -4,
    "cr": 3,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/brain-in-a-jar-vrgr.js"
  },
  {
    "name": "Carrion Stalker",
    "ac": 14,
    "hp": 35,
    "init": 3,
    "cr": 3,
    "type": "monstrosity",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/carrion-stalker-vrgr.js"
  },
  {
    "name": "Carrionette",
    "ac": 15,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "construct",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/carrionette-vrgr.js"
  },
  {
    "name": "Death's Head",
    "ac": 16,
    "hp": 17,
    "init": 1,
    "cr": 0.5,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/deaths-head-vrgr.js"
  },
  {
    "name": "Dullahan",
    "ac": 16,
    "hp": 135,
    "init": 2,
    "cr": 10,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/dullahan-vrgr.js"
  },
  {
    "name": "Elise",
    "ac": 9,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "construct",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/elise-vrgr.js"
  },
  {
    "name": "Gallows Speaker",
    "ac": 12,
    "hp": 85,
    "init": 2,
    "cr": 6,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/gallows-speaker-vrgr.js"
  },
  {
    "name": "Greater Star Spawn Emissary",
    "ac": 15,
    "hp": 290,
    "init": 1,
    "cr": 21,
    "type": "aberration",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/greater-star-spawn-emissary-vrgr.js"
  },
  {
    "name": "Gremishka",
    "ac": 12,
    "hp": 10,
    "init": 2,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/gremishka-vrgr.js"
  },
  {
    "name": "Inquisitor of the Mind Fire",
    "ac": 16,
    "hp": 77,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/inquisitor-of-the-mind-fire-vrgr.js"
  },
  {
    "name": "Inquisitor of the Sword",
    "ac": 16,
    "hp": 91,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/inquisitor-of-the-sword-vrgr.js"
  },
  {
    "name": "Inquisitor of the Tome",
    "ac": 11,
    "hp": 77,
    "init": 1,
    "cr": 8,
    "type": "humanoid",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/inquisitor-of-the-tome-vrgr.js"
  },
  {
    "name": "Isolde",
    "ac": 19,
    "hp": 82,
    "init": 4,
    "cr": 5,
    "type": "fey",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/isolde-vrgr.js"
  },
  {
    "name": "Jiangshi",
    "ac": 16,
    "hp": 119,
    "init": -4,
    "cr": 9,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/jiangshi-vrgr.js"
  },
  {
    "name": "Lesser Star Spawn Emissary",
    "ac": 19,
    "hp": 241,
    "init": 4,
    "cr": 19,
    "type": "aberration",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/lesser-star-spawn-emissary-vrgr.js"
  },
  {
    "name": "Loup Garou",
    "ac": 16,
    "hp": 170,
    "init": 4,
    "cr": 13,
    "type": "monstrosity",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/loup-garou-vrgr.js"
  },
  {
    "name": "Necrichor",
    "ac": 12,
    "hp": 67,
    "init": 2,
    "cr": 7,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/necrichor-vrgr.js"
  },
  {
    "name": "Nosferatu",
    "ac": 17,
    "hp": 85,
    "init": 4,
    "cr": 8,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/nosferatu-vrgr.js"
  },
  {
    "name": "Podling",
    "ac": 10,
    "hp": 26,
    "init": 0,
    "cr": 0.5,
    "type": "plant",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/podling-vrgr.js"
  },
  {
    "name": "Priest of Osybus (Blazing Boon)",
    "ac": 14,
    "hp": 60,
    "init": 2,
    "cr": 6,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/priest-of-osybus-blazing-boon-vrgr.js"
  },
  {
    "name": "Priest of Osybus (Deathly Boon)",
    "ac": 14,
    "hp": 60,
    "init": 2,
    "cr": 7,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/priest-of-osybus-deathly-boon-vrgr.js"
  },
  {
    "name": "Priest of Osybus (Dread Boon)",
    "ac": 14,
    "hp": 60,
    "init": 2,
    "cr": 6,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/priest-of-osybus-dread-boon-vrgr.js"
  },
  {
    "name": "Priest of Osybus (Ectoplasmic Boon)",
    "ac": 14,
    "hp": 60,
    "init": 2,
    "cr": 6,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/priest-of-osybus-ectoplasmic-boon-vrgr.js"
  },
  {
    "name": "Priest of Osybus (Spectral Boon)",
    "ac": 14,
    "hp": 60,
    "init": 2,
    "cr": 6,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/priest-of-osybus-spectral-boon-vrgr.js"
  },
  {
    "name": "Priest of Osybus (Vampiric Boon)",
    "ac": 14,
    "hp": 60,
    "init": 2,
    "cr": 6,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/priest-of-osybus-vampiric-boon-vrgr.js"
  },
  {
    "name": "Priest of Osybus",
    "ac": 14,
    "hp": 60,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/priest-of-osybus-vrgr.js"
  },
  {
    "name": "Relentless Juggernaut",
    "ac": 17,
    "hp": 161,
    "init": 1,
    "cr": 12,
    "type": "fiend",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/relentless-juggernaut-vrgr.js"
  },
  {
    "name": "Relentless Slasher",
    "ac": 15,
    "hp": 84,
    "init": 4,
    "cr": 8,
    "type": "fiend",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/relentless-slasher-vrgr.js"
  },
  {
    "name": "Strigoi",
    "ac": 16,
    "hp": 52,
    "init": 2,
    "cr": 4,
    "type": "monstrosity",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/strigoi-vrgr.js"
  },
  {
    "name": "Swarm of Gremishkas",
    "ac": 12,
    "hp": 24,
    "init": 2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/swarm-of-gremishkas-vrgr.js"
  },
  {
    "name": "Swarm of Maggots",
    "ac": 11,
    "hp": 22,
    "init": 1,
    "cr": 2,
    "type": "beast",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/swarm-of-maggots-vrgr.js"
  },
  {
    "name": "Swarm of Scarabs",
    "ac": 13,
    "hp": 27,
    "init": 2,
    "cr": 3,
    "type": "beast",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/swarm-of-scarabs-vrgr.js"
  },
  {
    "name": "Swarm of Zombie Limbs",
    "ac": 10,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/swarm-of-zombie-limbs-vrgr.js"
  },
  {
    "name": "The Bagman",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 5,
    "type": "giant",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/the-bagman-vrgr.js"
  },
  {
    "name": "Unspeakable Horror",
    "ac": 15,
    "hp": 95,
    "init": 1,
    "cr": 8,
    "type": "monstrosity",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/unspeakable-horror-vrgr.js"
  },
  {
    "name": "Vampiric Mind Flayer",
    "ac": 15,
    "hp": 85,
    "init": 4,
    "cr": 5,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/vampiric-mind-flayer-vrgr.js"
  },
  {
    "name": "Wereraven",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 2,
    "type": "humanoid (human",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/wereraven-vrgr.js"
  },
  {
    "name": "Zombie Clot",
    "ac": 12,
    "hp": 104,
    "init": 0,
    "cr": 6,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/zombie-clot-vrgr.js"
  },
  {
    "name": "Zombie Plague Spreader",
    "ac": 10,
    "hp": 78,
    "init": 0,
    "cr": 4,
    "type": "undead",
    "source": "Van Richten's Guide to Ravenloft",
    "htmlLink": "./custom/index.html?file=vrgr/zombie-plague-spreader-vrgr.js"
  },
  {
    "name": "Agdon Longscarf",
    "ac": 19,
    "hp": 36,
    "init": 5,
    "cr": 2,
    "type": "fey",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/agdon-longscarf-wbtw.js"
  },
  {
    "name": "Alagarthas",
    "ac": 10,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/alagarthas-wbtw.js"
  },
  {
    "name": "Amidor the Dandelion",
    "ac": 12,
    "hp": 28,
    "init": 2,
    "cr": 0.5,
    "type": "plant",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/amidor-the-dandelion-wbtw.js"
  },
  {
    "name": "Bavlorna Blightstraw",
    "ac": 15,
    "hp": 110,
    "init": 0,
    "cr": 7,
    "type": "fey",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/bavlorna-blightstraw-wbtw.js"
  },
  {
    "name": "Brigganock",
    "ac": 12,
    "hp": 9,
    "init": 2,
    "cr": 0.125,
    "type": "fey",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/brigganock-wbtw.js"
  },
  {
    "name": "Bullywug Knight",
    "ac": 18,
    "hp": 66,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/bullywug-knight-wbtw.js"
  },
  {
    "name": "Campestri",
    "ac": 12,
    "hp": 2,
    "init": -2,
    "cr": 0,
    "type": "plant",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/campestri-wbtw.js"
  },
  {
    "name": "Clapperclaw the Scarecrow",
    "ac": 12,
    "hp": 14,
    "init": 1,
    "cr": 0.5,
    "type": "construct",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/clapperclaw-the-scarecrow-wbtw.js"
  },
  {
    "name": "Detached Shadow",
    "ac": 12,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "fey",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/detached-shadow-wbtw.js"
  },
  {
    "name": "Displacer Beast Kitten",
    "ac": 12,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/displacer-beast-kitten-wbtw.js"
  },
  {
    "name": "Elkhorn",
    "ac": 18,
    "hp": 52,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/elkhorn-wbtw.js"
  },
  {
    "name": "Endelyn Moongrave",
    "ac": 17,
    "hp": 114,
    "init": 1,
    "cr": 6,
    "type": "fey",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/endelyn-moongrave-wbtw.js"
  },
  {
    "name": "Envy",
    "ac": 19,
    "hp": 114,
    "init": 0,
    "cr": 5,
    "type": "monstrosity",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/envy-wbtw.js"
  },
  {
    "name": "Flying Rocking Horse",
    "ac": 15,
    "hp": 22,
    "init": 0,
    "cr": 0.125,
    "type": "construct",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/flying-rocking-horse-wbtw.js"
  },
  {
    "name": "Giant Dragonfly",
    "ac": 16,
    "hp": 22,
    "init": 4,
    "cr": 0.5,
    "type": "beast",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/giant-dragonfly-wbtw.js"
  },
  {
    "name": "Giant Snail",
    "ac": 11,
    "hp": 22,
    "init": -4,
    "cr": 0.25,
    "type": "beast",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/giant-snail-wbtw.js"
  },
  {
    "name": "Giant Swan",
    "ac": 13,
    "hp": 26,
    "init": 3,
    "cr": 1,
    "type": "beast",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/giant-swan-wbtw.js"
  },
  {
    "name": "Glass Pegasus",
    "ac": 15,
    "hp": 59,
    "init": 2,
    "cr": 2,
    "type": "construct",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/glass-pegasus-wbtw.js"
  },
  {
    "name": "Glasswork Golem",
    "ac": 13,
    "hp": 36,
    "init": 0,
    "cr": 2,
    "type": "construct",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/glasswork-golem-wbtw.js"
  },
  {
    "name": "Gloam",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "undead",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/gloam-wbtw.js"
  },
  {
    "name": "Harengon Brigand",
    "ac": 14,
    "hp": 9,
    "init": 3,
    "cr": 0.125,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/harengon-brigand-wbtw.js"
  },
  {
    "name": "Harengon Sniper",
    "ac": 14,
    "hp": 9,
    "init": 3,
    "cr": 0.25,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/harengon-sniper-wbtw.js"
  },
  {
    "name": "Iggwilv the Witch Queen",
    "ac": 19,
    "hp": 255,
    "init": 4,
    "cr": 20,
    "type": "fey",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/iggwilv-the-witch-queen-wbtw.js"
  },
  {
    "name": "Jabberwock",
    "ac": 18,
    "hp": 115,
    "init": 1,
    "cr": 13,
    "type": "dragon",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/jabberwock-wbtw.js"
  },
  {
    "name": "Jingle Jangle",
    "ac": 15,
    "hp": 7,
    "init": 2,
    "cr": 0.25,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/jingle-jangle-wbtw.js"
  },
  {
    "name": "Kelek",
    "ac": 12,
    "hp": 45,
    "init": 0,
    "cr": 5,
    "type": "humanoid (human",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/kelek-wbtw.js"
  },
  {
    "name": "Kettlesteam the Kenku",
    "ac": 13,
    "hp": 22,
    "init": 3,
    "cr": 1,
    "type": "humanoid (kenku",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/kettlesteam-the-kenku-wbtw.js"
  },
  {
    "name": "Living Doll",
    "ac": 11,
    "hp": 28,
    "init": 0,
    "cr": 2,
    "type": "construct",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/living-doll-wbtw.js"
  },
  {
    "name": "Mercion",
    "ac": 19,
    "hp": 31,
    "init": 0,
    "cr": 3,
    "type": "humanoid (cleric",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/mercion-wbtw.js"
  },
  {
    "name": "Mister Light",
    "ac": 13,
    "hp": 77,
    "init": 3,
    "cr": 3,
    "type": "humanoid (elf",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/mister-light-wbtw.js"
  },
  {
    "name": "Mister Witch",
    "ac": 10,
    "hp": 82,
    "init": 0,
    "cr": 3,
    "type": "humanoid (elf",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/mister-witch-wbtw.js"
  },
  {
    "name": "Molliver",
    "ac": 15,
    "hp": 60,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/molliver-wbtw.js"
  },
  {
    "name": "Paper Bird",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "construct",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/paper-bird-wbtw.js"
  },
  {
    "name": "Pollenella the Honeybee",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/pollenella-the-honeybee-wbtw.js"
  },
  {
    "name": "Raezil",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/raezil-wbtw.js"
  },
  {
    "name": "Ringlerun",
    "ac": 12,
    "hp": 42,
    "init": 0,
    "cr": 5,
    "type": "humanoid (human",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/ringlerun-wbtw.js"
  },
  {
    "name": "Selenelion Twin",
    "ac": 14,
    "hp": 33,
    "init": 4,
    "cr": 2,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/selenelion-twin-wbtw.js"
  },
  {
    "name": "Sir Talavar",
    "ac": 15,
    "hp": 14,
    "init": 5,
    "cr": 2,
    "type": "dragon",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/sir-talavar-wbtw.js"
  },
  {
    "name": "Skabatha Nightshade",
    "ac": 16,
    "hp": 150,
    "init": -1,
    "cr": 8,
    "type": "fey",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/skabatha-nightshade-wbtw.js"
  },
  {
    "name": "Skylla",
    "ac": 10,
    "hp": 39,
    "init": 0,
    "cr": 2,
    "type": "humanoid (human",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/skylla-wbtw.js"
  },
  {
    "name": "Squirt the Oilcan",
    "ac": 15,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/squirt-the-oilcan-wbtw.js"
  },
  {
    "name": "Strongheart",
    "ac": 20,
    "hp": 55,
    "init": 1,
    "cr": 4,
    "type": "humanoid (human",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/strongheart-wbtw.js"
  },
  {
    "name": "Swarm of Campestris",
    "ac": 12,
    "hp": 27,
    "init": -2,
    "cr": 1,
    "type": "plant",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/swarm-of-campestris-wbtw.js"
  },
  {
    "name": "Thinnings",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "fey",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/thinnings-wbtw.js"
  },
  {
    "name": "Tin Soldier",
    "ac": 18,
    "hp": 27,
    "init": 0,
    "cr": 1,
    "type": "construct",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/tin-soldier-wbtw.js"
  },
  {
    "name": "Treant Sapling",
    "ac": 14,
    "hp": 45,
    "init": -1,
    "cr": 2,
    "type": "plant",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/treant-sapling-wbtw.js"
  },
  {
    "name": "Warduke",
    "ac": 17,
    "hp": 78,
    "init": 0,
    "cr": 5,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/warduke-wbtw.js"
  },
  {
    "name": "Will-o'-Wells",
    "ac": 19,
    "hp": 22,
    "init": 9,
    "cr": 2,
    "type": "undead",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/will-o-wells-wbtw.js"
  },
  {
    "name": "Witchlight Hand (Medium)",
    "ac": 12,
    "hp": 9,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/witchlight-hand-medium-wbtw.js"
  },
  {
    "name": "Witchlight Hand (Small)",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/witchlight-hand-small-wbtw.js"
  },
  {
    "name": "Zarak",
    "ac": 14,
    "hp": 37,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/zarak-wbtw.js"
  },
  {
    "name": "Zargash",
    "ac": 13,
    "hp": 45,
    "init": 0,
    "cr": 3,
    "type": "humanoid (cleric",
    "source": "The Wild Beyond the Witchlight",
    "htmlLink": "./custom/index.html?file=wbtw/zargash-wbtw.js"
  },
  {
    "name": "Ahmaergo",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/ahmaergo-wdh.js"
  },
  {
    "name": "Ammalia Cassalanter",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/ammalia-cassalanter-wdh.js"
  },
  {
    "name": "Aurinax",
    "ac": 19,
    "hp": 256,
    "init": 2,
    "cr": 17,
    "type": "dragon",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/aurinax-wdh.js"
  },
  {
    "name": "Avi",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/avi-wdh.js"
  },
  {
    "name": "Awakened Rat",
    "ac": 10,
    "hp": 1,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/awakened-rat-wdh.js"
  },
  {
    "name": "Barnibus Blastwind",
    "ac": 10,
    "hp": 24,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/barnibus-blastwind-wdh.js"
  },
  {
    "name": "Bepis Honeymaker",
    "ac": 10,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/bepis-honeymaker-wdh.js"
  },
  {
    "name": "Black Viper",
    "ac": 16,
    "hp": 84,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/black-viper-wdh.js"
  },
  {
    "name": "Blinded Troll",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 4,
    "type": "giant",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/blinded-troll-wdh.js"
  },
  {
    "name": "Bonnie",
    "ac": 14,
    "hp": 52,
    "init": 4,
    "cr": 4,
    "type": "monstrosity",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/bonnie-wdh.js"
  },
  {
    "name": "Davil Starsong",
    "ac": 15,
    "hp": 82,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/davil-starsong-wdh.js"
  },
  {
    "name": "Diatryma",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0.25,
    "type": "beast",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/diatryma-wdh.js"
  },
  {
    "name": "Dining Table Mimic",
    "ac": 12,
    "hp": 75,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/dining-table-mimic-wdh.js"
  },
  {
    "name": "Drow Gunslinger",
    "ac": 18,
    "hp": 84,
    "init": 4,
    "cr": 4,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/drow-gunslinger-wdh.js"
  },
  {
    "name": "Durnan",
    "ac": 16,
    "hp": 144,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/durnan-wdh.js"
  },
  {
    "name": "Elzerina Cassalanter",
    "ac": null,
    "hp": null,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/elzerina-cassalanter-wdh.js"
  },
  {
    "name": "Embric",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/embric-wdh.js"
  },
  {
    "name": "Emmek Frewn",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/emmek-frewn-wdh.js"
  },
  {
    "name": "Engineer",
    "ac": 10,
    "hp": 7,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/engineer-wdh.js"
  },
  {
    "name": "Fala Lefaliir",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/fala-lefaliir-wdh.js"
  },
  {
    "name": "Falcon",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/falcon-wdh.js"
  },
  {
    "name": "Fel'rekt Lafeen",
    "ac": 18,
    "hp": 84,
    "init": 4,
    "cr": 4,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/felrekt-lafeen-wdh.js"
  },
  {
    "name": "Floon Blagmaar",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/floon-blagmaar-wdh.js"
  },
  {
    "name": "Flying Staff",
    "ac": 17,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/flying-staff-wdh.js"
  },
  {
    "name": "Griffon Cavalry Rider",
    "ac": 17,
    "hp": 58,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/griffon-cavalry-rider-wdh.js"
  },
  {
    "name": "Grinda Garloth",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/grinda-garloth-wdh.js"
  },
  {
    "name": "Grum'shar",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/grumshar-wdh.js"
  },
  {
    "name": "Hester Barch",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/hester-barch-wdh.js"
  },
  {
    "name": "Hlam",
    "ac": 22,
    "hp": 137,
    "init": 7,
    "cr": 16,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/hlam-wdh.js"
  },
  {
    "name": "Hrabbaz",
    "ac": 12,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/hrabbaz-wdh.js"
  },
  {
    "name": "Istrid Horn",
    "ac": 18,
    "hp": 117,
    "init": 0,
    "cr": 8,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/istrid-horn-wdh.js"
  },
  {
    "name": "Jalester Silvermane",
    "ac": 18,
    "hp": 71,
    "init": 2,
    "cr": 4,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/jalester-silvermane-wdh.js"
  },
  {
    "name": "Jandar Chergoba",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/jandar-chergoba-wdh.js"
  },
  {
    "name": "Jarlaxle Baenre",
    "ac": 24,
    "hp": 123,
    "init": 6,
    "cr": 15,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/jarlaxle-baenre-wdh.js"
  },
  {
    "name": "Jenks",
    "ac": null,
    "hp": null,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/jenks-wdh.js"
  },
  {
    "name": "Kaevja Cynavern",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/kaevja-cynavern-wdh.js"
  },
  {
    "name": "Kalain",
    "ac": 15,
    "hp": 44,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/kalain-wdh.js"
  },
  {
    "name": "Krebbyg Masq'il'yr",
    "ac": 18,
    "hp": 84,
    "init": 4,
    "cr": 4,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/krebbyg-masqilyr-wdh.js"
  },
  {
    "name": "Lady Gondafrey",
    "ac": 15,
    "hp": 52,
    "init": 0,
    "cr": 2,
    "type": "elemental",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/lady-gondafrey-wdh.js"
  },
  {
    "name": "Laeral Silverhand",
    "ac": 18,
    "hp": 228,
    "init": 3,
    "cr": 17,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/laeral-silverhand-wdh.js"
  },
  {
    "name": "Laiba \"Nana\" Rosse",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/laiba-nana-rosse-wdh.js"
  },
  {
    "name": "Losser Mirklav",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/losser-mirklav-wdh.js"
  },
  {
    "name": "Magister Umbero Zastro",
    "ac": 11,
    "hp": 9,
    "init": 1,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/magister-umbero-zastro-wdh.js"
  },
  {
    "name": "Manafret Cherryport",
    "ac": 12,
    "hp": 31,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/manafret-cherryport-wdh.js"
  },
  {
    "name": "Manshoon Simulacrum",
    "ac": 12,
    "hp": 126,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/manshoon-simulacrum-wdh.js"
  },
  {
    "name": "Mattrim \"Threestrings\" Mereg",
    "ac": 15,
    "hp": 44,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/mattrim-threestrings-mereg-wdh.js"
  },
  {
    "name": "Maxeene",
    "ac": 10,
    "hp": 19,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/maxeene-wdh.js"
  },
  {
    "name": "Mechanical Bird",
    "ac": 15,
    "hp": 1,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/mechanical-bird-wdh.js"
  },
  {
    "name": "Melannor Fellbranch",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/melannor-fellbranch-wdh.js"
  },
  {
    "name": "Meloon Wardragon",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/meloon-wardragon-wdh.js"
  },
  {
    "name": "Mirt",
    "ac": 16,
    "hp": 153,
    "init": 4,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/mirt-wdh.js"
  },
  {
    "name": "Nar'l Xibrindas",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 7,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/narl-xibrindas-wdh.js"
  },
  {
    "name": "Nat",
    "ac": null,
    "hp": null,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/nat-wdh.js"
  },
  {
    "name": "Nihiloor",
    "ac": 15,
    "hp": 71,
    "init": 1,
    "cr": 7,
    "type": "aberration",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/nihiloor-wdh.js"
  },
  {
    "name": "Nimblewright",
    "ac": 18,
    "hp": 45,
    "init": 4,
    "cr": 4,
    "type": "construct",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/nimblewright-wdh.js"
  },
  {
    "name": "Noska Ur'gray",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/noska-urgray-wdh.js"
  },
  {
    "name": "Obaya Uday",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/obaya-uday-wdh.js"
  },
  {
    "name": "Obliteros",
    "ac": 13,
    "hp": 126,
    "init": 0,
    "cr": 5,
    "type": "beast",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/obliteros-wdh.js"
  },
  {
    "name": "Orond Gralhund",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/orond-gralhund-wdh.js"
  },
  {
    "name": "Osvaldo Cassalanter",
    "ac": 16,
    "hp": 85,
    "init": 2,
    "cr": 8,
    "type": "fiend",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/osvaldo-cassalanter-wdh.js"
  },
  {
    "name": "Ott Steeltoes",
    "ac": 12,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/ott-steeltoes-wdh.js"
  },
  {
    "name": "Panopticus Wizard",
    "ac": 10,
    "hp": 9,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/panopticus-wizard-wdh.js"
  },
  {
    "name": "Remallia Haventree",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/remallia-haventree-wdh.js"
  },
  {
    "name": "Renaer Neverember",
    "ac": 17,
    "hp": 66,
    "init": 4,
    "cr": 3,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/renaer-neverember-wdh.js"
  },
  {
    "name": "Rishaal the Page-Turner",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/rishaal-the-page-turner-wdh.js"
  },
  {
    "name": "Saeth Cromley",
    "ac": 17,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/saeth-cromley-wdh.js"
  },
  {
    "name": "Samara Strongbones",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/samara-strongbones-wdh.js"
  },
  {
    "name": "Sergeant",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/sergeant-wdh.js"
  },
  {
    "name": "Shard Shunner",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 2,
    "type": "humanoid (halfling",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/shard-shunner-wdh.js"
  },
  {
    "name": "Skeemo Weirdbottle",
    "ac": 12,
    "hp": 72,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/skeemo-weirdbottle-wdh.js"
  },
  {
    "name": "Soluun Xibrindas",
    "ac": 18,
    "hp": 84,
    "init": 4,
    "cr": 4,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/soluun-xibrindas-wdh.js"
  },
  {
    "name": "Squiddly",
    "ac": null,
    "hp": null,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/squiddly-wdh.js"
  },
  {
    "name": "Swarm of Books",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/swarm-of-books-wdh.js"
  },
  {
    "name": "Swarm of Mechanical Spiders",
    "ac": 12,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "construct",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/swarm-of-mechanical-spiders-wdh.js"
  },
  {
    "name": "Sylgar",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/sylgar-wdh.js"
  },
  {
    "name": "Talisolvanar \"Tally\" Fellbranch",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/talisolvanar-tally-fellbranch-wdh.js"
  },
  {
    "name": "Tashlyn Yafeera",
    "ac": 18,
    "hp": 149,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/tashlyn-yafeera-wdh.js"
  },
  {
    "name": "Terenzio Cassalanter",
    "ac": null,
    "hp": null,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/terenzio-cassalanter-wdh.js"
  },
  {
    "name": "Thorvin Twinbeard",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/thorvin-twinbeard-wdh.js"
  },
  {
    "name": "Thrakkus",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/thrakkus-wdh.js"
  },
  {
    "name": "Tissina Khyret",
    "ac": 13,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/tissina-khyret-wdh.js"
  },
  {
    "name": "Urstul Floxin",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/urstul-floxin-wdh.js"
  },
  {
    "name": "Vajra Safahr",
    "ac": 14,
    "hp": 126,
    "init": 2,
    "cr": 13,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/vajra-safahr-wdh.js"
  },
  {
    "name": "Valetta",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/valetta-wdh.js"
  },
  {
    "name": "Victoro Cassalanter",
    "ac": 15,
    "hp": 97,
    "init": 1,
    "cr": 10,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/victoro-cassalanter-wdh.js"
  },
  {
    "name": "Vincent Trench",
    "ac": 16,
    "hp": 110,
    "init": 3,
    "cr": 13,
    "type": "fiend",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/vincent-trench-wdh.js"
  },
  {
    "name": "Walking Statue of Waterdeep",
    "ac": 17,
    "hp": 314,
    "init": -1,
    "cr": 18,
    "type": "construct",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/walking-statue-of-waterdeep-wdh.js"
  },
  {
    "name": "Willifort Crowelle",
    "ac": 14,
    "hp": 52,
    "init": 4,
    "cr": 3,
    "type": "monstrosity",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/willifort-crowelle-wdh.js"
  },
  {
    "name": "Xanathar",
    "ac": 18,
    "hp": 180,
    "init": 2,
    "cr": 13,
    "type": "aberration",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/xanathar-wdh.js"
  },
  {
    "name": "Yagra Stonefist",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/yagra-stonefist-wdh.js"
  },
  {
    "name": "Yalah Gralhund",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/yalah-gralhund-wdh.js"
  },
  {
    "name": "Yorn",
    "ac": 11,
    "hp": 32,
    "init": 0,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/yorn-wdh.js"
  },
  {
    "name": "Zhent Martial Arts Adept",
    "ac": 16,
    "hp": 49,
    "init": 3,
    "cr": 3,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/zhent-martial-arts-adept-wdh.js"
  },
  {
    "name": "Ziraj the Hunter",
    "ac": 17,
    "hp": 153,
    "init": 4,
    "cr": 8,
    "type": "humanoid",
    "source": "Waterdeep: Dragon Heist",
    "htmlLink": "./custom/index.html?file=wdh/ziraj-the-hunter-wdh.js"
  },
  {
    "name": "Al'chaia",
    "ac": 18,
    "hp": 140,
    "init": 2,
    "cr": 8,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/alchaia-wdmm.js"
  },
  {
    "name": "Animated Ballista",
    "ac": 15,
    "hp": 50,
    "init": 0,
    "cr": 2,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/animated-ballista-wdmm.js"
  },
  {
    "name": "Animated Jade Serpent",
    "ac": 14,
    "hp": 11,
    "init": 4,
    "cr": 0.25,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/animated-jade-serpent-wdmm.js"
  },
  {
    "name": "Animated Staff",
    "ac": 17,
    "hp": 40,
    "init": 1,
    "cr": 0,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/animated-staff-wdmm.js"
  },
  {
    "name": "Animated Statue of Lolth",
    "ac": 17,
    "hp": 230,
    "init": -1,
    "cr": 11,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/animated-statue-of-lolth-wdmm.js"
  },
  {
    "name": "Animated Stove",
    "ac": 17,
    "hp": 50,
    "init": 0,
    "cr": 3,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/animated-stove-wdmm.js"
  },
  {
    "name": "Animated Wand",
    "ac": 18,
    "hp": 20,
    "init": 4,
    "cr": 0,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/animated-wand-wdmm.js"
  },
  {
    "name": "Arcturia",
    "ac": 17,
    "hp": 135,
    "init": 3,
    "cr": 21,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/arcturia-wdmm.js"
  },
  {
    "name": "Ashtyrranthor",
    "ac": 19,
    "hp": 256,
    "init": 0,
    "cr": 17,
    "type": "dragon",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/ashtyrranthor-wdmm.js"
  },
  {
    "name": "Awakened Brown Bear",
    "ac": 11,
    "hp": 34,
    "init": 0,
    "cr": 1,
    "type": "beast",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/awakened-brown-bear-wdmm.js"
  },
  {
    "name": "Awakened Elk",
    "ac": 10,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/awakened-elk-wdmm.js"
  },
  {
    "name": "Awakened Giant Wasp",
    "ac": 12,
    "hp": 13,
    "init": 2,
    "cr": 0.5,
    "type": "beast",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/awakened-giant-wasp-wdmm.js"
  },
  {
    "name": "Azal",
    "ac": 17,
    "hp": 84,
    "init": 4,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/azal-wdmm.js"
  },
  {
    "name": "Berlain Shadowdusk",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "aberration",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/berlain-shadowdusk-wdmm.js"
  },
  {
    "name": "Big Xorn",
    "ac": 19,
    "hp": 103,
    "init": 0,
    "cr": 8,
    "type": "elemental",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/big-xorn-wdmm.js"
  },
  {
    "name": "Blacktongue Bullywug",
    "ac": 15,
    "hp": 11,
    "init": 1,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/blacktongue-bullywug-wdmm.js"
  },
  {
    "name": "Bore Worm",
    "ac": 18,
    "hp": 247,
    "init": -2,
    "cr": 16,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/bore-worm-wdmm.js"
  },
  {
    "name": "Captain N'ghathrod",
    "ac": 15,
    "hp": 111,
    "init": 1,
    "cr": 8,
    "type": "aberration",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/captain-nghathrod-wdmm.js"
  },
  {
    "name": "Carrion Ogre",
    "ac": 11,
    "hp": 59,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/carrion-ogre-wdmm.js"
  },
  {
    "name": "Cassiok Shadowdusk",
    "ac": 14,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "aberration",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/cassiok-shadowdusk-wdmm.js"
  },
  {
    "name": "Copper Stormforge",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/copper-stormforge-wdmm.js"
  },
  {
    "name": "Crow",
    "ac": 12,
    "hp": 1,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/crow-wdmm.js"
  },
  {
    "name": "Crystal Battleaxe",
    "ac": 17,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/crystal-battleaxe-wdmm.js"
  },
  {
    "name": "Crystal Golem",
    "ac": 17,
    "hp": 178,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/crystal-golem-wdmm.js"
  },
  {
    "name": "Crystal Helm Nothic",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 2,
    "type": "aberration",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/crystal-helm-nothic-wdmm.js"
  },
  {
    "name": "Deformed Duergar",
    "ac": 16,
    "hp": 40,
    "init": 0,
    "cr": 1,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/deformed-duergar-wdmm.js"
  },
  {
    "name": "Dezmyr Shadowdusk",
    "ac": 20,
    "hp": 180,
    "init": 0,
    "cr": 17,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/dezmyr-shadowdusk-wdmm.js"
  },
  {
    "name": "Drivvin Freth",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/drivvin-freth-wdmm.js"
  },
  {
    "name": "Emberosa",
    "ac": 18,
    "hp": 221,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/emberosa-wdmm.js"
  },
  {
    "name": "Ezzat",
    "ac": 17,
    "hp": 135,
    "init": 3,
    "cr": 21,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/ezzat-wdmm.js"
  },
  {
    "name": "Fazrian",
    "ac": 19,
    "hp": 200,
    "init": 5,
    "cr": 16,
    "type": "celestial",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/fazrian-wdmm.js"
  },
  {
    "name": "Fidelio",
    "ac": 11,
    "hp": 80,
    "init": 1,
    "cr": 4,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/fidelio-wdmm.js"
  },
  {
    "name": "Five-Armed Troll",
    "ac": 15,
    "hp": 84,
    "init": 1,
    "cr": 8,
    "type": "giant",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/five-armed-troll-wdmm.js"
  },
  {
    "name": "Flying Trident",
    "ac": 17,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/flying-trident-wdmm.js"
  },
  {
    "name": "Flying Wand",
    "ac": 17,
    "hp": 17,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/flying-wand-wdmm.js"
  },
  {
    "name": "Giant Flying Spider",
    "ac": 14,
    "hp": 26,
    "init": 3,
    "cr": 1,
    "type": "beast",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/giant-flying-spider-wdmm.js"
  },
  {
    "name": "Glyster",
    "ac": 19,
    "hp": 212,
    "init": 0,
    "cr": 15,
    "type": "dragon",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/glyster-wdmm.js"
  },
  {
    "name": "Gorka Tharn",
    "ac": 17,
    "hp": 97,
    "init": 0,
    "cr": 15,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/gorka-tharn-wdmm.js"
  },
  {
    "name": "Gorzil's Gang Troglodyte",
    "ac": 14,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/gorzils-gang-troglodyte-wdmm.js"
  },
  {
    "name": "Halaster Blackcloak",
    "ac": 14,
    "hp": 246,
    "init": 4,
    "cr": 23,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/halaster-blackcloak-wdmm.js"
  },
  {
    "name": "Halaster Horror",
    "ac": 20,
    "hp": 60,
    "init": 1,
    "cr": 4,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/halaster-horror-wdmm.js"
  },
  {
    "name": "Halaster Puppet",
    "ac": 10,
    "hp": 8,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/halaster-puppet-wdmm.js"
  },
  {
    "name": "Haungharassk",
    "ac": 6,
    "hp": 52,
    "init": -4,
    "cr": 0,
    "type": "beast",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/haungharassk-wdmm.js"
  },
  {
    "name": "Horned Sister",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/horned-sister-wdmm.js"
  },
  {
    "name": "Hrossk",
    "ac": 18,
    "hp": 162,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/hrossk-wdmm.js"
  },
  {
    "name": "Huge Gray Ooze",
    "ac": 8,
    "hp": 152,
    "init": -2,
    "cr": 8,
    "type": "ooze",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/huge-gray-ooze-wdmm.js"
  },
  {
    "name": "Intelligent Black Pudding",
    "ac": 7,
    "hp": 85,
    "init": -3,
    "cr": 4,
    "type": "ooze",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/intelligent-black-pudding-wdmm.js"
  },
  {
    "name": "Iron Spider",
    "ac": 19,
    "hp": 80,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/iron-spider-wdmm.js"
  },
  {
    "name": "Junior Drow Priestess of Lolth",
    "ac": 13,
    "hp": 27,
    "init": 0,
    "cr": 2,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/junior-drow-priestess-of-lolth-wdmm.js"
  },
  {
    "name": "Kavil Mereshanter",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/kavil-mereshanter-wdmm.js"
  },
  {
    "name": "Keresta Delvingstone",
    "ac": 16,
    "hp": 144,
    "init": 4,
    "cr": 13,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/keresta-delvingstone-wdmm.js"
  },
  {
    "name": "Kol'daan",
    "ac": 11,
    "hp": 20,
    "init": 0,
    "cr": 0.25,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/koldaan-wdmm.js"
  },
  {
    "name": "Large Mimic",
    "ac": 12,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/large-mimic-wdmm.js"
  },
  {
    "name": "Lava Child",
    "ac": 11,
    "hp": 60,
    "init": 1,
    "cr": 3,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/lava-child-wdmm.js"
  },
  {
    "name": "Left Hand of Manshoon",
    "ac": 12,
    "hp": 63,
    "init": 2,
    "cr": 12,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/left-hand-of-manshoon-wdmm.js"
  },
  {
    "name": "Living Unseen Servant",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/living-unseen-servant-wdmm.js"
  },
  {
    "name": "Mad Golem",
    "ac": 17,
    "hp": 264,
    "init": -1,
    "cr": 12,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/mad-golem-wdmm.js"
  },
  {
    "name": "Maddgoth's Homunculus",
    "ac": 13,
    "hp": 55,
    "init": 2,
    "cr": 2,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/maddgoths-homunculus-wdmm.js"
  },
  {
    "name": "Marta Moonshadow",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/marta-moonshadow-wdmm.js"
  },
  {
    "name": "Melissara Shadowdusk",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/melissara-shadowdusk-wdmm.js"
  },
  {
    "name": "Metal Wasp",
    "ac": 16,
    "hp": 24,
    "init": 2,
    "cr": 0.5,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/metal-wasp-wdmm.js"
  },
  {
    "name": "Mobar",
    "ac": 13,
    "hp": 42,
    "init": 3,
    "cr": 2,
    "type": "humanoid (goblinoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/mobar-wdmm.js"
  },
  {
    "name": "Muiral",
    "ac": 16,
    "hp": 195,
    "init": 0,
    "cr": 13,
    "type": "monstrosity",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/muiral-wdmm.js"
  },
  {
    "name": "Mutated Drow",
    "ac": 14,
    "hp": 200,
    "init": 0,
    "cr": 9,
    "type": "giant",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/mutated-drow-wdmm.js"
  },
  {
    "name": "Nerozar the Defeated",
    "ac": 15,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/nerozar-the-defeated-wdmm.js"
  },
  {
    "name": "Nester",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/nester-wdmm.js"
  },
  {
    "name": "Old Troglodyte",
    "ac": 11,
    "hp": 13,
    "init": 0,
    "cr": 0.125,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/old-troglodyte-wdmm.js"
  },
  {
    "name": "Otto",
    "ac": 15,
    "hp": 104,
    "init": 5,
    "cr": 3,
    "type": "dragon",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/otto-wdmm.js"
  },
  {
    "name": "Play-by-Play Generator",
    "ac": 16,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/play-by-play-generator-wdmm.js"
  },
  {
    "name": "Poison Weird",
    "ac": 13,
    "hp": 58,
    "init": 3,
    "cr": 4,
    "type": "elemental",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/poison-weird-wdmm.js"
  },
  {
    "name": "Portia Dzuth",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/portia-dzuth-wdmm.js"
  },
  {
    "name": "Preeta Kreepa",
    "ac": 12,
    "hp": 40,
    "init": 2,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/preeta-kreepa-wdmm.js"
  },
  {
    "name": "Rabbithead",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/rabbithead-wdmm.js"
  },
  {
    "name": "Rishindar",
    "ac": 17,
    "hp": 84,
    "init": 4,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/rishindar-wdmm.js"
  },
  {
    "name": "Rowboat Mimic",
    "ac": 12,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/rowboat-mimic-wdmm.js"
  },
  {
    "name": "Runed Behir",
    "ac": 17,
    "hp": 168,
    "init": 3,
    "cr": 11,
    "type": "monstrosity",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/runed-behir-wdmm.js"
  },
  {
    "name": "Scaladar",
    "ac": 19,
    "hp": 94,
    "init": 0,
    "cr": 8,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/scaladar-wdmm.js"
  },
  {
    "name": "Shadow Assassin",
    "ac": 14,
    "hp": 78,
    "init": 4,
    "cr": 9,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/shadow-assassin-wdmm.js"
  },
  {
    "name": "Shapechanged Roper",
    "ac": 20,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/shapechanged-roper-wdmm.js"
  },
  {
    "name": "Shockerstomper",
    "ac": 18,
    "hp": 300,
    "init": 0,
    "cr": 14,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/shockerstomper-wdmm.js"
  },
  {
    "name": "Shunn Shurreth",
    "ac": 18,
    "hp": 71,
    "init": 4,
    "cr": 5,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/shunn-shurreth-wdmm.js"
  },
  {
    "name": "Sing-Along",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/sing-along-wdmm.js"
  },
  {
    "name": "Space Hamster",
    "ac": 10,
    "hp": 1,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/space-hamster-wdmm.js"
  },
  {
    "name": "Stalagma Steelshadow",
    "ac": 19,
    "hp": 243,
    "init": 0,
    "cr": 16,
    "type": "dragon",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/stalagma-steelshadow-wdmm.js"
  },
  {
    "name": "Statue of Vergadain",
    "ac": 17,
    "hp": 178,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/statue-of-vergadain-wdmm.js"
  },
  {
    "name": "Stonecloak",
    "ac": 17,
    "hp": 178,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/stonecloak-wdmm.js"
  },
  {
    "name": "Sundeth",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "giant",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/sundeth-wdmm.js"
  },
  {
    "name": "Thwad Underbrew",
    "ac": 18,
    "hp": 143,
    "init": 2,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/thwad-underbrew-wdmm.js"
  },
  {
    "name": "Torbit",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/torbit-wdmm.js"
  },
  {
    "name": "Trenzia",
    "ac": 13,
    "hp": 40,
    "init": 3,
    "cr": 4,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/trenzia-wdmm.js"
  },
  {
    "name": "Trobriand",
    "ac": 20,
    "hp": 210,
    "init": -1,
    "cr": 22,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/trobriand-wdmm.js"
  },
  {
    "name": "Umbraxakar",
    "ac": 19,
    "hp": 212,
    "init": 0,
    "cr": 15,
    "type": "dragon",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/umbraxakar-wdmm.js"
  },
  {
    "name": "Undead Bulette",
    "ac": 17,
    "hp": 125,
    "init": 0,
    "cr": 5,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/undead-bulette-wdmm.js"
  },
  {
    "name": "Undead Shambling Mound",
    "ac": 15,
    "hp": 136,
    "init": -1,
    "cr": 5,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/undead-shambling-mound-wdmm.js"
  },
  {
    "name": "Valtagar Steelshadow",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/valtagar-steelshadow-wdmm.js"
  },
  {
    "name": "Vertrand Shadowdusk",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/vertrand-shadowdusk-wdmm.js"
  },
  {
    "name": "Vond",
    "ac": 17,
    "hp": 84,
    "init": 4,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/vond-wdmm.js"
  },
  {
    "name": "Werebat",
    "ac": 13,
    "hp": 24,
    "init": 3,
    "cr": 2,
    "type": "humanoid (goblinoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/werebat-wdmm.js"
  },
  {
    "name": "Wooden Donkey",
    "ac": 10,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "construct",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/wooden-donkey-wdmm.js"
  },
  {
    "name": "Wyllow",
    "ac": 16,
    "hp": 132,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/wyllow-wdmm.js"
  },
  {
    "name": "Xarann A'Daragon",
    "ac": 15,
    "hp": 78,
    "init": 3,
    "cr": 8,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/xarann-adaragon-wdmm.js"
  },
  {
    "name": "Xorta",
    "ac": 17,
    "hp": 126,
    "init": 2,
    "cr": 7,
    "type": "giant",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/xorta-wdmm.js"
  },
  {
    "name": "Yrlakka",
    "ac": 17,
    "hp": 84,
    "init": 4,
    "cr": 6,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/yrlakka-wdmm.js"
  },
  {
    "name": "Zalthar Shadowdusk",
    "ac": 20,
    "hp": 180,
    "init": 0,
    "cr": 17,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/zalthar-shadowdusk-wdmm.js"
  },
  {
    "name": "Zorak Lightdrinker",
    "ac": 18,
    "hp": 144,
    "init": 4,
    "cr": 14,
    "type": "undead",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/zorak-lightdrinker-wdmm.js"
  },
  {
    "name": "Zox Clammersham",
    "ac": 12,
    "hp": 99,
    "init": 2,
    "cr": 12,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/zox-clammersham-wdmm.js"
  },
  {
    "name": "Zress Orlezziir",
    "ac": 18,
    "hp": 162,
    "init": 4,
    "cr": 9,
    "type": "humanoid",
    "source": "Waterdeep: Dungeon of the Mad Mage",
    "htmlLink": "./custom/index.html?file=wdmm/zress-orlezziir-wdmm.js"
  },
  {
    "name": "Avatar of Death",
    "ac": 20,
    "hp": null,
    "init": 3,
    "cr": 0,
    "type": "undead",
    "source": "Dungeon Master's Guide (2024)",
    "htmlLink": "./custom/index.html?file=xdmg/avatar-of-death-xdmg.js"
  },
  {
    "name": "Giant Fly",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Dungeon Master's Guide (2024)",
    "htmlLink": "./custom/index.html?file=xdmg/giant-fly-xdmg.js"
  },
  {
    "name": "Hound of Ill Omen",
    "ac": 14,
    "hp": 37,
    "init": 2,
    "cr": 1,
    "type": "monstrosity",
    "source": "Xanathar's Guide to Everything",
    "htmlLink": "./custom/index.html?file=xge/hound-of-ill-omen-xge.js"
  },
  {
    "name": "Tiny Servant",
    "ac": 15,
    "hp": 10,
    "init": 3,
    "cr": 0,
    "type": "construct",
    "source": "Xanathar's Guide to Everything",
    "htmlLink": "./custom/index.html?file=xge/tiny-servant-xge.js"
  },
  {
    "name": "Aarakocra Aeromancer",
    "ac": 16,
    "hp": 66,
    "init": 3,
    "cr": 4,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/aarakocra-aeromancer-xmm.js"
  },
  {
    "name": "Aarakocra Skirmisher",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/aarakocra-skirmisher-xmm.js"
  },
  {
    "name": "Aberrant Cultist",
    "ac": 14,
    "hp": 137,
    "init": 4,
    "cr": 8,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/aberrant-cultist-xmm.js"
  },
  {
    "name": "Abominable Yeti",
    "ac": 15,
    "hp": 137,
    "init": 0,
    "cr": 9,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/abominable-yeti-xmm.js"
  },
  {
    "name": "Adult Black Dragon",
    "ac": 19,
    "hp": 195,
    "init": 2,
    "cr": 14,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-black-dragon-xmm.js"
  },
  {
    "name": "Adult Blue Dragon",
    "ac": 19,
    "hp": 212,
    "init": 0,
    "cr": 16,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-blue-dragon-xmm.js"
  },
  {
    "name": "Adult Brass Dragon",
    "ac": 18,
    "hp": 172,
    "init": 0,
    "cr": 13,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-brass-dragon-xmm.js"
  },
  {
    "name": "Adult Bronze Dragon",
    "ac": 18,
    "hp": 212,
    "init": 0,
    "cr": 15,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-bronze-dragon-xmm.js"
  },
  {
    "name": "Adult Copper Dragon",
    "ac": 18,
    "hp": 184,
    "init": 1,
    "cr": 14,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-copper-dragon-xmm.js"
  },
  {
    "name": "Adult Gold Dragon",
    "ac": 19,
    "hp": 243,
    "init": 2,
    "cr": 17,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-gold-dragon-xmm.js"
  },
  {
    "name": "Adult Green Dragon",
    "ac": 19,
    "hp": 207,
    "init": 1,
    "cr": 15,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-green-dragon-xmm.js"
  },
  {
    "name": "Adult Red Dragon",
    "ac": 19,
    "hp": 256,
    "init": 0,
    "cr": 17,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-red-dragon-xmm.js"
  },
  {
    "name": "Adult Silver Dragon",
    "ac": 19,
    "hp": 216,
    "init": 0,
    "cr": 16,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-silver-dragon-xmm.js"
  },
  {
    "name": "Adult White Dragon",
    "ac": 18,
    "hp": 200,
    "init": 0,
    "cr": 13,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/adult-white-dragon-xmm.js"
  },
  {
    "name": "Air Elemental",
    "ac": 15,
    "hp": 90,
    "init": 5,
    "cr": 5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/air-elemental-xmm.js"
  },
  {
    "name": "Allosaurus",
    "ac": 13,
    "hp": 51,
    "init": 1,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/allosaurus-xmm.js"
  },
  {
    "name": "Ancient Black Dragon",
    "ac": 22,
    "hp": 367,
    "init": 2,
    "cr": 21,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-black-dragon-xmm.js"
  },
  {
    "name": "Ancient Blue Dragon",
    "ac": 22,
    "hp": 481,
    "init": 0,
    "cr": 23,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-blue-dragon-xmm.js"
  },
  {
    "name": "Ancient Brass Dragon",
    "ac": 20,
    "hp": 332,
    "init": 0,
    "cr": 20,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-brass-dragon-xmm.js"
  },
  {
    "name": "Ancient Bronze Dragon",
    "ac": 22,
    "hp": 444,
    "init": 0,
    "cr": 22,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-bronze-dragon-xmm.js"
  },
  {
    "name": "Ancient Copper Dragon",
    "ac": 21,
    "hp": 367,
    "init": 1,
    "cr": 21,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-copper-dragon-xmm.js"
  },
  {
    "name": "Ancient Gold Dragon",
    "ac": 22,
    "hp": 546,
    "init": 2,
    "cr": 24,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-gold-dragon-xmm.js"
  },
  {
    "name": "Ancient Green Dragon",
    "ac": 21,
    "hp": 402,
    "init": 1,
    "cr": 22,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-green-dragon-xmm.js"
  },
  {
    "name": "Ancient Red Dragon",
    "ac": 22,
    "hp": 507,
    "init": 0,
    "cr": 24,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-red-dragon-xmm.js"
  },
  {
    "name": "Ancient Silver Dragon",
    "ac": 22,
    "hp": 468,
    "init": 0,
    "cr": 23,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-silver-dragon-xmm.js"
  },
  {
    "name": "Ancient White Dragon",
    "ac": 20,
    "hp": 333,
    "init": 0,
    "cr": 20,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ancient-white-dragon-xmm.js"
  },
  {
    "name": "Animal Lord; Forager",
    "ac": 19,
    "hp": 323,
    "init": 7,
    "cr": 20,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/animal-lord-forager-xmm.js"
  },
  {
    "name": "Animal Lord; Hunter",
    "ac": 19,
    "hp": 323,
    "init": 7,
    "cr": 20,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/animal-lord-hunter-xmm.js"
  },
  {
    "name": "Animal Lord; Sage",
    "ac": 19,
    "hp": 323,
    "init": 7,
    "cr": 20,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/animal-lord-sage-xmm.js"
  },
  {
    "name": "Animal Lord",
    "ac": 19,
    "hp": 323,
    "init": 7,
    "cr": 20,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/animal-lord-xmm.js"
  },
  {
    "name": "Animated Armor",
    "ac": 18,
    "hp": 33,
    "init": 0,
    "cr": 1,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/animated-armor-xmm.js"
  },
  {
    "name": "Animated Broom",
    "ac": 15,
    "hp": 14,
    "init": 3,
    "cr": 0.25,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/animated-broom-xmm.js"
  },
  {
    "name": "Animated Flying Sword",
    "ac": 17,
    "hp": 14,
    "init": 2,
    "cr": 0.25,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/animated-flying-sword-xmm.js"
  },
  {
    "name": "Animated Rug of Smothering",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 2,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/animated-rug-of-smothering-xmm.js"
  },
  {
    "name": "Ankheg",
    "ac": 14,
    "hp": 45,
    "init": 0,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ankheg-xmm.js"
  },
  {
    "name": "Ankylosaurus",
    "ac": 15,
    "hp": 68,
    "init": 0,
    "cr": 3,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ankylosaurus-xmm.js"
  },
  {
    "name": "Ape",
    "ac": 12,
    "hp": 19,
    "init": 2,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ape-xmm.js"
  },
  {
    "name": "Arcanaloth",
    "ac": 18,
    "hp": 175,
    "init": 1,
    "cr": 12,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/arcanaloth-xmm.js"
  },
  {
    "name": "Archelon",
    "ac": 17,
    "hp": 90,
    "init": 3,
    "cr": 4,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/archelon-xmm.js"
  },
  {
    "name": "Archmage",
    "ac": 17,
    "hp": 170,
    "init": 2,
    "cr": 12,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/archmage-xmm.js"
  },
  {
    "name": "Archpriest",
    "ac": 16,
    "hp": 240,
    "init": 1,
    "cr": 12,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/archpriest-xmm.js"
  },
  {
    "name": "Assassin",
    "ac": 16,
    "hp": 97,
    "init": 4,
    "cr": 8,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/assassin-xmm.js"
  },
  {
    "name": "Awakened Shrub",
    "ac": 9,
    "hp": 10,
    "init": -1,
    "cr": 0,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/awakened-shrub-xmm.js"
  },
  {
    "name": "Awakened Tree",
    "ac": 13,
    "hp": 59,
    "init": -2,
    "cr": 2,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/awakened-tree-xmm.js"
  },
  {
    "name": "Axe Beak",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0.25,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/axe-beak-xmm.js"
  },
  {
    "name": "Azer Pyromancer",
    "ac": 18,
    "hp": 97,
    "init": 2,
    "cr": 6,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/azer-pyromancer-xmm.js"
  },
  {
    "name": "Azer Sentinel",
    "ac": 17,
    "hp": 39,
    "init": 1,
    "cr": 2,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/azer-sentinel-xmm.js"
  },
  {
    "name": "Baboon",
    "ac": 12,
    "hp": 3,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/baboon-xmm.js"
  },
  {
    "name": "Badger",
    "ac": 11,
    "hp": 5,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/badger-xmm.js"
  },
  {
    "name": "Balor",
    "ac": 19,
    "hp": 287,
    "init": 2,
    "cr": 19,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/balor-xmm.js"
  },
  {
    "name": "Bandit Captain",
    "ac": 15,
    "hp": 52,
    "init": 3,
    "cr": 2,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bandit-captain-xmm.js"
  },
  {
    "name": "Bandit Crime Lord",
    "ac": 17,
    "hp": 169,
    "init": 5,
    "cr": 11,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bandit-crime-lord-xmm.js"
  },
  {
    "name": "Bandit Deceiver",
    "ac": 16,
    "hp": 130,
    "init": 3,
    "cr": 7,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bandit-deceiver-xmm.js"
  },
  {
    "name": "Bandit",
    "ac": 12,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bandit-xmm.js"
  },
  {
    "name": "Banshee",
    "ac": 12,
    "hp": 54,
    "init": 2,
    "cr": 4,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/banshee-xmm.js"
  },
  {
    "name": "Barbed Devil",
    "ac": 15,
    "hp": 110,
    "init": 3,
    "cr": 5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/barbed-devil-xmm.js"
  },
  {
    "name": "Barlgura",
    "ac": 15,
    "hp": 85,
    "init": 2,
    "cr": 5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/barlgura-xmm.js"
  },
  {
    "name": "Basilisk",
    "ac": 15,
    "hp": 52,
    "init": -1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/basilisk-xmm.js"
  },
  {
    "name": "Bat",
    "ac": 12,
    "hp": 1,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bat-xmm.js"
  },
  {
    "name": "Bearded Devil",
    "ac": 13,
    "hp": 58,
    "init": 2,
    "cr": 3,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bearded-devil-xmm.js"
  },
  {
    "name": "Behir",
    "ac": 17,
    "hp": 168,
    "init": 3,
    "cr": 11,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/behir-xmm.js"
  },
  {
    "name": "Beholder Zombie",
    "ac": 15,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/beholder-zombie-xmm.js"
  },
  {
    "name": "Berserker Commander",
    "ac": 16,
    "hp": 136,
    "init": 2,
    "cr": 8,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/berserker-commander-xmm.js"
  },
  {
    "name": "Berserker",
    "ac": 13,
    "hp": 67,
    "init": 1,
    "cr": 2,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/berserker-xmm.js"
  },
  {
    "name": "Black Bear",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/black-bear-xmm.js"
  },
  {
    "name": "Black Dragon Wyrmling",
    "ac": 17,
    "hp": 33,
    "init": 2,
    "cr": 2,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/black-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Black Pudding",
    "ac": 7,
    "hp": 68,
    "init": -3,
    "cr": 4,
    "type": "ooze",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/black-pudding-xmm.js"
  },
  {
    "name": "Blink Dog",
    "ac": 13,
    "hp": 22,
    "init": 3,
    "cr": 0.25,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/blink-dog-xmm.js"
  },
  {
    "name": "Blob of Annihilation",
    "ac": 18,
    "hp": 448,
    "init": 2,
    "cr": 23,
    "type": "ooze",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/blob-of-annihilation-xmm.js"
  },
  {
    "name": "Blood Hawk",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/blood-hawk-xmm.js"
  },
  {
    "name": "Blue Dragon Wyrmling",
    "ac": 17,
    "hp": 65,
    "init": 0,
    "cr": 3,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/blue-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Blue Slaad",
    "ac": 15,
    "hp": 133,
    "init": 2,
    "cr": 7,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/blue-slaad-xmm.js"
  },
  {
    "name": "Boar",
    "ac": 11,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/boar-xmm.js"
  },
  {
    "name": "Bone Devil",
    "ac": 16,
    "hp": 161,
    "init": 3,
    "cr": 9,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bone-devil-xmm.js"
  },
  {
    "name": "Bone Naga",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 4,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bone-naga-xmm.js"
  },
  {
    "name": "Brass Dragon Wyrmling",
    "ac": 15,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/brass-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Brazen Gorgon",
    "ac": 19,
    "hp": 161,
    "init": 2,
    "cr": 9,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/brazen-gorgon-xmm.js"
  },
  {
    "name": "Bronze Dragon Wyrmling",
    "ac": 15,
    "hp": 39,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bronze-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Brown Bear",
    "ac": 11,
    "hp": 22,
    "init": 1,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/brown-bear-xmm.js"
  },
  {
    "name": "Bugbear Stalker",
    "ac": 15,
    "hp": 65,
    "init": 2,
    "cr": 3,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bugbear-stalker-xmm.js"
  },
  {
    "name": "Bugbear Warrior",
    "ac": 14,
    "hp": 33,
    "init": 2,
    "cr": 1,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bugbear-warrior-xmm.js"
  },
  {
    "name": "Bulette Pup",
    "ac": 16,
    "hp": 45,
    "init": -1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bulette-pup-xmm.js"
  },
  {
    "name": "Bulette",
    "ac": 17,
    "hp": 94,
    "init": 0,
    "cr": 5,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bulette-xmm.js"
  },
  {
    "name": "Bullywug Bog Sage",
    "ac": 16,
    "hp": 52,
    "init": 3,
    "cr": 4,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bullywug-bog-sage-xmm.js"
  },
  {
    "name": "Bullywug Warrior",
    "ac": 15,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/bullywug-warrior-xmm.js"
  },
  {
    "name": "Cambion",
    "ac": 19,
    "hp": 105,
    "init": 4,
    "cr": 5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cambion-xmm.js"
  },
  {
    "name": "Camel",
    "ac": 10,
    "hp": 17,
    "init": -1,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/camel-xmm.js"
  },
  {
    "name": "Carrion Crawler",
    "ac": 13,
    "hp": 51,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/carrion-crawler-xmm.js"
  },
  {
    "name": "Cat",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cat-xmm.js"
  },
  {
    "name": "Centaur Trooper",
    "ac": 16,
    "hp": 45,
    "init": 2,
    "cr": 2,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/centaur-trooper-xmm.js"
  },
  {
    "name": "Centaur Warden",
    "ac": 16,
    "hp": 105,
    "init": 2,
    "cr": 7,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/centaur-warden-xmm.js"
  },
  {
    "name": "Chain Devil",
    "ac": 15,
    "hp": 85,
    "init": 2,
    "cr": 8,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/chain-devil-xmm.js"
  },
  {
    "name": "Chasme",
    "ac": 15,
    "hp": 78,
    "init": 2,
    "cr": 6,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/chasme-xmm.js"
  },
  {
    "name": "Chimera",
    "ac": 14,
    "hp": 114,
    "init": 0,
    "cr": 6,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/chimera-xmm.js"
  },
  {
    "name": "Chuul",
    "ac": 16,
    "hp": 76,
    "init": 0,
    "cr": 4,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/chuul-xmm.js"
  },
  {
    "name": "Clay Golem",
    "ac": 14,
    "hp": 123,
    "init": -1,
    "cr": 9,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/clay-golem-xmm.js"
  },
  {
    "name": "Cloaker",
    "ac": 14,
    "hp": 91,
    "init": 2,
    "cr": 8,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cloaker-xmm.js"
  },
  {
    "name": "Cloud Giant",
    "ac": 14,
    "hp": 200,
    "init": 0,
    "cr": 9,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cloud-giant-xmm.js"
  },
  {
    "name": "Cockatrice Regent",
    "ac": 15,
    "hp": 136,
    "init": 2,
    "cr": 8,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cockatrice-regent-xmm.js"
  },
  {
    "name": "Cockatrice",
    "ac": 11,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cockatrice-xmm.js"
  },
  {
    "name": "Colossus",
    "ac": 23,
    "hp": 553,
    "init": 0,
    "cr": 25,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/colossus-xmm.js"
  },
  {
    "name": "Commoner",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/commoner-xmm.js"
  },
  {
    "name": "Constrictor Snake",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/constrictor-snake-xmm.js"
  },
  {
    "name": "Copper Dragon Wyrmling",
    "ac": 16,
    "hp": 22,
    "init": 1,
    "cr": 1,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/copper-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Couatl",
    "ac": 19,
    "hp": 60,
    "init": 5,
    "cr": 4,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/couatl-xmm.js"
  },
  {
    "name": "Crab",
    "ac": 11,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/crab-xmm.js"
  },
  {
    "name": "Crawling Claw",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/crawling-claw-xmm.js"
  },
  {
    "name": "Crocodile",
    "ac": 12,
    "hp": 13,
    "init": 0,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/crocodile-xmm.js"
  },
  {
    "name": "Cultist Fanatic",
    "ac": 13,
    "hp": 44,
    "init": 2,
    "cr": 2,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cultist-fanatic-xmm.js"
  },
  {
    "name": "Cultist Hierophant",
    "ac": 16,
    "hp": 144,
    "init": 4,
    "cr": 10,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cultist-hierophant-xmm.js"
  },
  {
    "name": "Cultist",
    "ac": 12,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cultist-xmm.js"
  },
  {
    "name": "Cyclops Oracle",
    "ac": 16,
    "hp": 207,
    "init": 0,
    "cr": 10,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cyclops-oracle-xmm.js"
  },
  {
    "name": "Cyclops Sentry",
    "ac": 14,
    "hp": 138,
    "init": 0,
    "cr": 6,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/cyclops-sentry-xmm.js"
  },
  {
    "name": "Dao",
    "ac": 18,
    "hp": 200,
    "init": 1,
    "cr": 11,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/dao-xmm.js"
  },
  {
    "name": "Darkmantle",
    "ac": 11,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/darkmantle-xmm.js"
  },
  {
    "name": "Death Cultist",
    "ac": 17,
    "hp": 127,
    "init": 1,
    "cr": 8,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/death-cultist-xmm.js"
  },
  {
    "name": "Death Dog",
    "ac": 12,
    "hp": 39,
    "init": 2,
    "cr": 1,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/death-dog-xmm.js"
  },
  {
    "name": "Death Knight Aspirant",
    "ac": 20,
    "hp": 178,
    "init": 0,
    "cr": 11,
    "type": "or Medium undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/death-knight-aspirant-xmm.js"
  },
  {
    "name": "Death Knight",
    "ac": 20,
    "hp": 199,
    "init": 0,
    "cr": 17,
    "type": "or Medium undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/death-knight-xmm.js"
  },
  {
    "name": "Death Slaad",
    "ac": 18,
    "hp": 178,
    "init": 2,
    "cr": 10,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/death-slaad-xmm.js"
  },
  {
    "name": "Deer",
    "ac": 13,
    "hp": 4,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/deer-xmm.js"
  },
  {
    "name": "Deva",
    "ac": 17,
    "hp": 229,
    "init": 4,
    "cr": 10,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/deva-xmm.js"
  },
  {
    "name": "Dire Wolf",
    "ac": 14,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/dire-wolf-xmm.js"
  },
  {
    "name": "Dire Worg",
    "ac": 16,
    "hp": 147,
    "init": 2,
    "cr": 10,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/dire-worg-xmm.js"
  },
  {
    "name": "Displacer Beast",
    "ac": 13,
    "hp": 76,
    "init": 2,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/displacer-beast-xmm.js"
  },
  {
    "name": "Djinni",
    "ac": 17,
    "hp": 218,
    "init": 2,
    "cr": 11,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/djinni-xmm.js"
  },
  {
    "name": "Doppelganger",
    "ac": 14,
    "hp": 52,
    "init": 4,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/doppelganger-xmm.js"
  },
  {
    "name": "Draft Horse",
    "ac": 10,
    "hp": 15,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/draft-horse-xmm.js"
  },
  {
    "name": "Dragon Turtle",
    "ac": 20,
    "hp": 356,
    "init": 0,
    "cr": 17,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/dragon-turtle-xmm.js"
  },
  {
    "name": "Dretch",
    "ac": 11,
    "hp": 18,
    "init": 0,
    "cr": 0.25,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/dretch-xmm.js"
  },
  {
    "name": "Drider",
    "ac": 19,
    "hp": 123,
    "init": 4,
    "cr": 6,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/drider-xmm.js"
  },
  {
    "name": "Druid",
    "ac": 13,
    "hp": 44,
    "init": 1,
    "cr": 2,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/druid-xmm.js"
  },
  {
    "name": "Dryad",
    "ac": 16,
    "hp": 22,
    "init": 1,
    "cr": 1,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/dryad-xmm.js"
  },
  {
    "name": "Dust Mephit",
    "ac": 12,
    "hp": 17,
    "init": 2,
    "cr": 0.5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/dust-mephit-xmm.js"
  },
  {
    "name": "Eagle",
    "ac": 12,
    "hp": 4,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/eagle-xmm.js"
  },
  {
    "name": "Earth Elemental",
    "ac": 17,
    "hp": 147,
    "init": -1,
    "cr": 5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/earth-elemental-xmm.js"
  },
  {
    "name": "Efreeti",
    "ac": 17,
    "hp": 212,
    "init": 1,
    "cr": 11,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/efreeti-xmm.js"
  },
  {
    "name": "Elemental Cataclysm",
    "ac": 20,
    "hp": 370,
    "init": 4,
    "cr": 22,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/elemental-cataclysm-xmm.js"
  },
  {
    "name": "Elemental Cultist",
    "ac": 16,
    "hp": 135,
    "init": 1,
    "cr": 8,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/elemental-cultist-xmm.js"
  },
  {
    "name": "Elephant",
    "ac": 12,
    "hp": 76,
    "init": -1,
    "cr": 4,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/elephant-xmm.js"
  },
  {
    "name": "Elk",
    "ac": 10,
    "hp": 11,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/elk-xmm.js"
  },
  {
    "name": "Empyrean Iota",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "Medium",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/empyrean-iota-xmm.js"
  },
  {
    "name": "Empyrean",
    "ac": 22,
    "hp": 346,
    "init": 5,
    "cr": 23,
    "type": "Huge",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/empyrean-xmm.js"
  },
  {
    "name": "Erinyes",
    "ac": 18,
    "hp": 178,
    "init": 3,
    "cr": 12,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/erinyes-xmm.js"
  },
  {
    "name": "Ettercap",
    "ac": 13,
    "hp": 44,
    "init": 2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ettercap-xmm.js"
  },
  {
    "name": "Ettin",
    "ac": 12,
    "hp": 85,
    "init": -1,
    "cr": 4,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ettin-xmm.js"
  },
  {
    "name": "Faerie Dragon Adult",
    "ac": 15,
    "hp": 35,
    "init": 5,
    "cr": 2,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/faerie-dragon-adult-xmm.js"
  },
  {
    "name": "Faerie Dragon Youth",
    "ac": 13,
    "hp": 21,
    "init": 3,
    "cr": 1,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/faerie-dragon-youth-xmm.js"
  },
  {
    "name": "Fiend Cultist",
    "ac": 16,
    "hp": 127,
    "init": 2,
    "cr": 8,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/fiend-cultist-xmm.js"
  },
  {
    "name": "Fire Elemental",
    "ac": 13,
    "hp": 93,
    "init": 3,
    "cr": 5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/fire-elemental-xmm.js"
  },
  {
    "name": "Fire Giant",
    "ac": 18,
    "hp": 162,
    "init": -1,
    "cr": 9,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/fire-giant-xmm.js"
  },
  {
    "name": "Flameskull",
    "ac": 13,
    "hp": 40,
    "init": 3,
    "cr": 4,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/flameskull-xmm.js"
  },
  {
    "name": "Flaming Skeleton",
    "ac": 15,
    "hp": 65,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/flaming-skeleton-xmm.js"
  },
  {
    "name": "Flesh Golem",
    "ac": 9,
    "hp": 127,
    "init": -1,
    "cr": 5,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/flesh-golem-xmm.js"
  },
  {
    "name": "Flumph",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/flumph-xmm.js"
  },
  {
    "name": "Flying Snake",
    "ac": 14,
    "hp": 5,
    "init": 2,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/flying-snake-xmm.js"
  },
  {
    "name": "Fomorian",
    "ac": 14,
    "hp": 172,
    "init": 0,
    "cr": 8,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/fomorian-xmm.js"
  },
  {
    "name": "Frog",
    "ac": 11,
    "hp": 1,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/frog-xmm.js"
  },
  {
    "name": "Frost Giant",
    "ac": 15,
    "hp": 149,
    "init": -1,
    "cr": 8,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/frost-giant-xmm.js"
  },
  {
    "name": "Galeb Duhr",
    "ac": 16,
    "hp": 123,
    "init": 2,
    "cr": 6,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/galeb-duhr-xmm.js"
  },
  {
    "name": "Gargoyle",
    "ac": 15,
    "hp": 67,
    "init": 0,
    "cr": 2,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gargoyle-xmm.js"
  },
  {
    "name": "Gas Spore Fungus",
    "ac": 8,
    "hp": 13,
    "init": -5,
    "cr": 0.5,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gas-spore-fungus-xmm.js"
  },
  {
    "name": "Gelatinous Cube",
    "ac": 6,
    "hp": 63,
    "init": -4,
    "cr": 2,
    "type": "ooze",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gelatinous-cube-xmm.js"
  },
  {
    "name": "Ghast Gravecaller",
    "ac": 16,
    "hp": 97,
    "init": 3,
    "cr": 6,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ghast-gravecaller-xmm.js"
  },
  {
    "name": "Ghast",
    "ac": 13,
    "hp": 36,
    "init": 3,
    "cr": 2,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ghast-xmm.js"
  },
  {
    "name": "Ghost",
    "ac": 11,
    "hp": 45,
    "init": 1,
    "cr": 4,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ghost-xmm.js"
  },
  {
    "name": "Ghoul",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ghoul-xmm.js"
  },
  {
    "name": "Giant Ape",
    "ac": 12,
    "hp": 168,
    "init": 2,
    "cr": 7,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-ape-xmm.js"
  },
  {
    "name": "Giant Axe Beak",
    "ac": 15,
    "hp": 84,
    "init": 2,
    "cr": 5,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-axe-beak-xmm.js"
  },
  {
    "name": "Giant Badger",
    "ac": 13,
    "hp": 15,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-badger-xmm.js"
  },
  {
    "name": "Giant Bat",
    "ac": 13,
    "hp": 22,
    "init": 3,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-bat-xmm.js"
  },
  {
    "name": "Giant Boar",
    "ac": 13,
    "hp": 42,
    "init": 0,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-boar-xmm.js"
  },
  {
    "name": "Giant Centipede",
    "ac": 14,
    "hp": 9,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-centipede-xmm.js"
  },
  {
    "name": "Giant Constrictor Snake",
    "ac": 12,
    "hp": 60,
    "init": 2,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-constrictor-snake-xmm.js"
  },
  {
    "name": "Giant Crab",
    "ac": 15,
    "hp": 13,
    "init": 1,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-crab-xmm.js"
  },
  {
    "name": "Giant Crocodile",
    "ac": 14,
    "hp": 85,
    "init": -1,
    "cr": 5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-crocodile-xmm.js"
  },
  {
    "name": "Giant Eagle",
    "ac": 13,
    "hp": 26,
    "init": 3,
    "cr": 1,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-eagle-xmm.js"
  },
  {
    "name": "Giant Elk",
    "ac": 14,
    "hp": 42,
    "init": 4,
    "cr": 2,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-elk-xmm.js"
  },
  {
    "name": "Giant Fire Beetle",
    "ac": 13,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-fire-beetle-xmm.js"
  },
  {
    "name": "Giant Frog",
    "ac": 11,
    "hp": 18,
    "init": 1,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-frog-xmm.js"
  },
  {
    "name": "Giant Goat",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-goat-xmm.js"
  },
  {
    "name": "Giant Hyena",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-hyena-xmm.js"
  },
  {
    "name": "Giant Lizard",
    "ac": 12,
    "hp": 19,
    "init": 1,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-lizard-xmm.js"
  },
  {
    "name": "Giant Octopus",
    "ac": 11,
    "hp": 45,
    "init": 1,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-octopus-xmm.js"
  },
  {
    "name": "Giant Owl",
    "ac": 12,
    "hp": 19,
    "init": 2,
    "cr": 0.25,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-owl-xmm.js"
  },
  {
    "name": "Giant Rat",
    "ac": 13,
    "hp": 7,
    "init": 3,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-rat-xmm.js"
  },
  {
    "name": "Giant Scorpion",
    "ac": 15,
    "hp": 52,
    "init": 1,
    "cr": 3,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-scorpion-xmm.js"
  },
  {
    "name": "Giant Seahorse",
    "ac": 14,
    "hp": 16,
    "init": 1,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-seahorse-xmm.js"
  },
  {
    "name": "Giant Shark",
    "ac": 13,
    "hp": 92,
    "init": 0,
    "cr": 5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-shark-xmm.js"
  },
  {
    "name": "Giant Spider",
    "ac": 14,
    "hp": 26,
    "init": 3,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-spider-xmm.js"
  },
  {
    "name": "Giant Squid",
    "ac": 12,
    "hp": 120,
    "init": 2,
    "cr": 6,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-squid-xmm.js"
  },
  {
    "name": "Giant Toad",
    "ac": 11,
    "hp": 39,
    "init": 1,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-toad-xmm.js"
  },
  {
    "name": "Giant Venomous Snake",
    "ac": 14,
    "hp": 11,
    "init": 4,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-venomous-snake-xmm.js"
  },
  {
    "name": "Giant Vulture",
    "ac": 10,
    "hp": 25,
    "init": 0,
    "cr": 1,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-vulture-xmm.js"
  },
  {
    "name": "Giant Wasp",
    "ac": 13,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-wasp-xmm.js"
  },
  {
    "name": "Giant Weasel",
    "ac": 13,
    "hp": 9,
    "init": 3,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-weasel-xmm.js"
  },
  {
    "name": "Giant Wolf Spider",
    "ac": 13,
    "hp": 11,
    "init": 3,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/giant-wolf-spider-xmm.js"
  },
  {
    "name": "Gibbering Mouther",
    "ac": 9,
    "hp": 52,
    "init": -1,
    "cr": 2,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gibbering-mouther-xmm.js"
  },
  {
    "name": "Githyanki Dracomancer",
    "ac": 18,
    "hp": 255,
    "init": 3,
    "cr": 16,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/githyanki-dracomancer-xmm.js"
  },
  {
    "name": "Githyanki Knight",
    "ac": 18,
    "hp": 117,
    "init": 2,
    "cr": 8,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/githyanki-knight-xmm.js"
  },
  {
    "name": "Githyanki Warrior",
    "ac": 17,
    "hp": 49,
    "init": 2,
    "cr": 3,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/githyanki-warrior-xmm.js"
  },
  {
    "name": "Githzerai Monk",
    "ac": 14,
    "hp": 38,
    "init": 2,
    "cr": 2,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/githzerai-monk-xmm.js"
  },
  {
    "name": "Githzerai Psion",
    "ac": 18,
    "hp": 169,
    "init": 4,
    "cr": 12,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/githzerai-psion-xmm.js"
  },
  {
    "name": "Githzerai Zerth",
    "ac": 17,
    "hp": 84,
    "init": 4,
    "cr": 6,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/githzerai-zerth-xmm.js"
  },
  {
    "name": "Glabrezu",
    "ac": 17,
    "hp": 189,
    "init": 2,
    "cr": 9,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/glabrezu-xmm.js"
  },
  {
    "name": "Gladiator",
    "ac": 16,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gladiator-xmm.js"
  },
  {
    "name": "Gnoll Demoniac",
    "ac": 16,
    "hp": 135,
    "init": 1,
    "cr": 8,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gnoll-demoniac-xmm.js"
  },
  {
    "name": "Gnoll Fang of Yeenoghu",
    "ac": 14,
    "hp": 71,
    "init": 2,
    "cr": 4,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gnoll-fang-of-yeenoghu-xmm.js"
  },
  {
    "name": "Gnoll Pack Lord",
    "ac": 15,
    "hp": 49,
    "init": 2,
    "cr": 2,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gnoll-pack-lord-xmm.js"
  },
  {
    "name": "Gnoll Warrior",
    "ac": 15,
    "hp": 27,
    "init": 1,
    "cr": 0.5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gnoll-warrior-xmm.js"
  },
  {
    "name": "Goat",
    "ac": 10,
    "hp": 4,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/goat-xmm.js"
  },
  {
    "name": "Goblin Boss",
    "ac": 17,
    "hp": 21,
    "init": 2,
    "cr": 1,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/goblin-boss-xmm.js"
  },
  {
    "name": "Goblin Hexer",
    "ac": 13,
    "hp": 45,
    "init": 3,
    "cr": 3,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/goblin-hexer-xmm.js"
  },
  {
    "name": "Goblin Minion",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/goblin-minion-xmm.js"
  },
  {
    "name": "Goblin Warrior",
    "ac": 15,
    "hp": 10,
    "init": 2,
    "cr": 0.25,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/goblin-warrior-xmm.js"
  },
  {
    "name": "Gold Dragon Wyrmling",
    "ac": 17,
    "hp": 60,
    "init": 2,
    "cr": 3,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gold-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Gorgon",
    "ac": 19,
    "hp": 114,
    "init": 0,
    "cr": 5,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gorgon-xmm.js"
  },
  {
    "name": "Goristro",
    "ac": 19,
    "hp": 310,
    "init": 0,
    "cr": 17,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/goristro-xmm.js"
  },
  {
    "name": "Graveyard Revenant",
    "ac": 14,
    "hp": 161,
    "init": 2,
    "cr": 7,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/graveyard-revenant-xmm.js"
  },
  {
    "name": "Gray Ooze",
    "ac": 9,
    "hp": 22,
    "init": -2,
    "cr": 0.5,
    "type": "ooze",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gray-ooze-xmm.js"
  },
  {
    "name": "Gray Slaad",
    "ac": 18,
    "hp": 150,
    "init": 3,
    "cr": 9,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gray-slaad-xmm.js"
  },
  {
    "name": "Green Dragon Wyrmling",
    "ac": 17,
    "hp": 38,
    "init": 1,
    "cr": 2,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/green-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Green Hag",
    "ac": 17,
    "hp": 82,
    "init": 1,
    "cr": 3,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/green-hag-xmm.js"
  },
  {
    "name": "Green Slaad",
    "ac": 16,
    "hp": 144,
    "init": 2,
    "cr": 8,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/green-slaad-xmm.js"
  },
  {
    "name": "Grell",
    "ac": 12,
    "hp": 55,
    "init": 2,
    "cr": 3,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/grell-xmm.js"
  },
  {
    "name": "Grick Ancient",
    "ac": 18,
    "hp": 135,
    "init": 3,
    "cr": 7,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/grick-ancient-xmm.js"
  },
  {
    "name": "Grick",
    "ac": 14,
    "hp": 54,
    "init": 2,
    "cr": 2,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/grick-xmm.js"
  },
  {
    "name": "Griffon",
    "ac": 12,
    "hp": 59,
    "init": 2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/griffon-xmm.js"
  },
  {
    "name": "Grimlock",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.25,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/grimlock-xmm.js"
  },
  {
    "name": "Guard Captain",
    "ac": 18,
    "hp": 75,
    "init": 2,
    "cr": 4,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/guard-captain-xmm.js"
  },
  {
    "name": "Guard",
    "ac": 16,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/guard-xmm.js"
  },
  {
    "name": "Guardian Naga",
    "ac": 18,
    "hp": 136,
    "init": 4,
    "cr": 10,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/guardian-naga-xmm.js"
  },
  {
    "name": "Gulthias Blight",
    "ac": 20,
    "hp": 264,
    "init": 0,
    "cr": 16,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/gulthias-blight-xmm.js"
  },
  {
    "name": "Half-Dragon",
    "ac": 18,
    "hp": 105,
    "init": 2,
    "cr": 5,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/half-dragon-xmm.js"
  },
  {
    "name": "Harpy",
    "ac": 11,
    "hp": 38,
    "init": 1,
    "cr": 1,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/harpy-xmm.js"
  },
  {
    "name": "Haunting Revenant",
    "ac": 20,
    "hp": 203,
    "init": 1,
    "cr": 10,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/haunting-revenant-xmm.js"
  },
  {
    "name": "Hawk",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hawk-xmm.js"
  },
  {
    "name": "Hell Hound",
    "ac": 15,
    "hp": 58,
    "init": 1,
    "cr": 3,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hell-hound-xmm.js"
  },
  {
    "name": "Helmed Horror",
    "ac": 20,
    "hp": 67,
    "init": 1,
    "cr": 4,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/helmed-horror-xmm.js"
  },
  {
    "name": "Hezrou",
    "ac": 18,
    "hp": 157,
    "init": 3,
    "cr": 8,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hezrou-xmm.js"
  },
  {
    "name": "Hill Giant",
    "ac": 13,
    "hp": 105,
    "init": -1,
    "cr": 5,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hill-giant-xmm.js"
  },
  {
    "name": "Hippogriff",
    "ac": 11,
    "hp": 26,
    "init": 1,
    "cr": 1,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hippogriff-xmm.js"
  },
  {
    "name": "Hippopotamus",
    "ac": 14,
    "hp": 82,
    "init": -2,
    "cr": 4,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hippopotamus-xmm.js"
  },
  {
    "name": "Hobgoblin Captain",
    "ac": 17,
    "hp": 58,
    "init": 2,
    "cr": 3,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hobgoblin-captain-xmm.js"
  },
  {
    "name": "Hobgoblin Warlord",
    "ac": 20,
    "hp": 112,
    "init": 2,
    "cr": 6,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hobgoblin-warlord-xmm.js"
  },
  {
    "name": "Hobgoblin Warrior",
    "ac": 18,
    "hp": 11,
    "init": 1,
    "cr": 0.5,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hobgoblin-warrior-xmm.js"
  },
  {
    "name": "Homunculus",
    "ac": 13,
    "hp": 4,
    "init": 2,
    "cr": 0,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/homunculus-xmm.js"
  },
  {
    "name": "Hook Horror",
    "ac": 15,
    "hp": 75,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hook-horror-xmm.js"
  },
  {
    "name": "Horned Devil",
    "ac": 18,
    "hp": 199,
    "init": 3,
    "cr": 11,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/horned-devil-xmm.js"
  },
  {
    "name": "Hunter Shark",
    "ac": 12,
    "hp": 45,
    "init": 2,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hunter-shark-xmm.js"
  },
  {
    "name": "Hydra",
    "ac": 15,
    "hp": 184,
    "init": 1,
    "cr": 8,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hydra-xmm.js"
  },
  {
    "name": "Hyena",
    "ac": 11,
    "hp": 5,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/hyena-xmm.js"
  },
  {
    "name": "Ice Devil",
    "ac": 18,
    "hp": 228,
    "init": 2,
    "cr": 14,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ice-devil-xmm.js"
  },
  {
    "name": "Ice Mephit",
    "ac": 11,
    "hp": 21,
    "init": 1,
    "cr": 0.5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ice-mephit-xmm.js"
  },
  {
    "name": "Imp",
    "ac": 13,
    "hp": 21,
    "init": 3,
    "cr": 1,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/imp-xmm.js"
  },
  {
    "name": "Incubus",
    "ac": 15,
    "hp": 66,
    "init": 3,
    "cr": 4,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/incubus-xmm.js"
  },
  {
    "name": "Intellect Devourer",
    "ac": 12,
    "hp": 28,
    "init": 2,
    "cr": 2,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/intellect-devourer-xmm.js"
  },
  {
    "name": "Invisible Stalker",
    "ac": 14,
    "hp": 97,
    "init": 4,
    "cr": 6,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/invisible-stalker-xmm.js"
  },
  {
    "name": "Iron Golem",
    "ac": 20,
    "hp": 252,
    "init": -1,
    "cr": 16,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/iron-golem-xmm.js"
  },
  {
    "name": "Jackal",
    "ac": 12,
    "hp": 3,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/jackal-xmm.js"
  },
  {
    "name": "Jackalwere",
    "ac": 12,
    "hp": 18,
    "init": 2,
    "cr": 0.5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/jackalwere-xmm.js"
  },
  {
    "name": "Juvenile Shadow Dragon",
    "ac": 15,
    "hp": 45,
    "init": 2,
    "cr": 4,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/juvenile-shadow-dragon-xmm.js"
  },
  {
    "name": "Kenku",
    "ac": 13,
    "hp": 13,
    "init": 3,
    "cr": 0.25,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/kenku-xmm.js"
  },
  {
    "name": "Killer Whale",
    "ac": 12,
    "hp": 90,
    "init": 2,
    "cr": 3,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/killer-whale-xmm.js"
  },
  {
    "name": "Knight",
    "ac": 18,
    "hp": 52,
    "init": 0,
    "cr": 3,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/knight-xmm.js"
  },
  {
    "name": "Kobold Warrior",
    "ac": 14,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/kobold-warrior-xmm.js"
  },
  {
    "name": "Kuo-toa Archpriest",
    "ac": 13,
    "hp": 105,
    "init": 2,
    "cr": 6,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/kuo-toa-archpriest-xmm.js"
  },
  {
    "name": "Kuo-toa Monitor",
    "ac": 13,
    "hp": 65,
    "init": 0,
    "cr": 3,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/kuo-toa-monitor-xmm.js"
  },
  {
    "name": "Kuo-toa Whip",
    "ac": 11,
    "hp": 45,
    "init": 0,
    "cr": 1,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/kuo-toa-whip-xmm.js"
  },
  {
    "name": "Kuo-toa",
    "ac": 13,
    "hp": 18,
    "init": 0,
    "cr": 0.25,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/kuo-toa-xmm.js"
  },
  {
    "name": "Lacedon Ghoul",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/lacedon-ghoul-xmm.js"
  },
  {
    "name": "Lamia",
    "ac": 13,
    "hp": 97,
    "init": 1,
    "cr": 4,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/lamia-xmm.js"
  },
  {
    "name": "Larva",
    "ac": 9,
    "hp": 9,
    "init": -1,
    "cr": 0,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/larva-xmm.js"
  },
  {
    "name": "Lemure",
    "ac": 9,
    "hp": 9,
    "init": -3,
    "cr": 0,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/lemure-xmm.js"
  },
  {
    "name": "Lion",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/lion-xmm.js"
  },
  {
    "name": "Lizard",
    "ac": 10,
    "hp": 2,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/lizard-xmm.js"
  },
  {
    "name": "Lizardfolk Geomancer",
    "ac": 13,
    "hp": 33,
    "init": 0,
    "cr": 2,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/lizardfolk-geomancer-xmm.js"
  },
  {
    "name": "Lizardfolk Sovereign",
    "ac": 15,
    "hp": 78,
    "init": 1,
    "cr": 4,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/lizardfolk-sovereign-xmm.js"
  },
  {
    "name": "Mage Apprentice",
    "ac": 15,
    "hp": 49,
    "init": 2,
    "cr": 2,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mage-apprentice-xmm.js"
  },
  {
    "name": "Mage",
    "ac": 15,
    "hp": 81,
    "init": 2,
    "cr": 6,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mage-xmm.js"
  },
  {
    "name": "Magma Mephit",
    "ac": 11,
    "hp": 18,
    "init": 1,
    "cr": 0.5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/magma-mephit-xmm.js"
  },
  {
    "name": "Magmin",
    "ac": 14,
    "hp": 13,
    "init": 2,
    "cr": 0.5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/magmin-xmm.js"
  },
  {
    "name": "Mammoth",
    "ac": 13,
    "hp": 126,
    "init": -1,
    "cr": 6,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mammoth-xmm.js"
  },
  {
    "name": "Manes Vaporspawn",
    "ac": 13,
    "hp": 19,
    "init": 1,
    "cr": 1,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/manes-vaporspawn-xmm.js"
  },
  {
    "name": "Manes",
    "ac": 9,
    "hp": 9,
    "init": -1,
    "cr": 0.125,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/manes-xmm.js"
  },
  {
    "name": "Manticore",
    "ac": 14,
    "hp": 68,
    "init": 3,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/manticore-xmm.js"
  },
  {
    "name": "Marid",
    "ac": 17,
    "hp": 229,
    "init": 1,
    "cr": 11,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/marid-xmm.js"
  },
  {
    "name": "Marilith",
    "ac": 16,
    "hp": 220,
    "init": 5,
    "cr": 16,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/marilith-xmm.js"
  },
  {
    "name": "Mastiff",
    "ac": 12,
    "hp": 5,
    "init": 2,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mastiff-xmm.js"
  },
  {
    "name": "Medusa",
    "ac": 15,
    "hp": 127,
    "init": 3,
    "cr": 6,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/medusa-xmm.js"
  },
  {
    "name": "Merfolk Skirmisher",
    "ac": 11,
    "hp": 11,
    "init": 1,
    "cr": 0.125,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/merfolk-skirmisher-xmm.js"
  },
  {
    "name": "Merfolk Wavebender",
    "ac": 14,
    "hp": 97,
    "init": 4,
    "cr": 6,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/merfolk-wavebender-xmm.js"
  },
  {
    "name": "Merrow",
    "ac": 13,
    "hp": 45,
    "init": 2,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/merrow-xmm.js"
  },
  {
    "name": "Mezzoloth",
    "ac": 18,
    "hp": 75,
    "init": 0,
    "cr": 5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mezzoloth-xmm.js"
  },
  {
    "name": "Mimic",
    "ac": 12,
    "hp": 58,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mimic-xmm.js"
  },
  {
    "name": "Mind Flayer Arcanist",
    "ac": 16,
    "hp": 143,
    "init": 2,
    "cr": 11,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mind-flayer-arcanist-xmm.js"
  },
  {
    "name": "Mind Flayer",
    "ac": 15,
    "hp": 99,
    "init": 1,
    "cr": 7,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mind-flayer-xmm.js"
  },
  {
    "name": "Minotaur of Baphomet",
    "ac": 14,
    "hp": 85,
    "init": 0,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/minotaur-of-baphomet-xmm.js"
  },
  {
    "name": "Minotaur Skeleton",
    "ac": 12,
    "hp": 45,
    "init": 0,
    "cr": 2,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/minotaur-skeleton-xmm.js"
  },
  {
    "name": "Modron Duodrone",
    "ac": 15,
    "hp": 11,
    "init": 1,
    "cr": 0.25,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/modron-duodrone-xmm.js"
  },
  {
    "name": "Modron Monodrone",
    "ac": 15,
    "hp": 5,
    "init": 2,
    "cr": 0.125,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/modron-monodrone-xmm.js"
  },
  {
    "name": "Modron Pentadrone",
    "ac": 16,
    "hp": 32,
    "init": 2,
    "cr": 2,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/modron-pentadrone-xmm.js"
  },
  {
    "name": "Modron Quadrone",
    "ac": 16,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/modron-quadrone-xmm.js"
  },
  {
    "name": "Modron Tridrone",
    "ac": 15,
    "hp": 16,
    "init": 1,
    "cr": 0.5,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/modron-tridrone-xmm.js"
  },
  {
    "name": "Mud Mephit",
    "ac": 11,
    "hp": 13,
    "init": 1,
    "cr": 0.25,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mud-mephit-xmm.js"
  },
  {
    "name": "Mule",
    "ac": 10,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mule-xmm.js"
  },
  {
    "name": "Mummy",
    "ac": 11,
    "hp": 58,
    "init": -1,
    "cr": 3,
    "type": "or Medium undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/mummy-xmm.js"
  },
  {
    "name": "Myconid Adult",
    "ac": 12,
    "hp": 16,
    "init": 0,
    "cr": 0.5,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/myconid-adult-xmm.js"
  },
  {
    "name": "Myconid Sovereign",
    "ac": 13,
    "hp": 45,
    "init": 0,
    "cr": 2,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/myconid-sovereign-xmm.js"
  },
  {
    "name": "Myconid Spore Servant",
    "ac": 13,
    "hp": 37,
    "init": 1,
    "cr": 1,
    "type": "or Medium plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/myconid-spore-servant-xmm.js"
  },
  {
    "name": "Myconid Sprout",
    "ac": 10,
    "hp": 3,
    "init": 0,
    "cr": 0,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/myconid-sprout-xmm.js"
  },
  {
    "name": "Nalfeshnee",
    "ac": 18,
    "hp": 184,
    "init": 0,
    "cr": 13,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/nalfeshnee-xmm.js"
  },
  {
    "name": "Needle Blight",
    "ac": 12,
    "hp": 16,
    "init": 1,
    "cr": 0.25,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/needle-blight-xmm.js"
  },
  {
    "name": "Night Hag",
    "ac": 17,
    "hp": 112,
    "init": 2,
    "cr": 5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/night-hag-xmm.js"
  },
  {
    "name": "Nightmare",
    "ac": 13,
    "hp": 68,
    "init": 2,
    "cr": 3,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/nightmare-xmm.js"
  },
  {
    "name": "Noble Prodigy",
    "ac": 16,
    "hp": 148,
    "init": 3,
    "cr": 10,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/noble-prodigy-xmm.js"
  },
  {
    "name": "Noble",
    "ac": 15,
    "hp": 9,
    "init": 1,
    "cr": 0.125,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/noble-xmm.js"
  },
  {
    "name": "Nothic",
    "ac": 15,
    "hp": 45,
    "init": 3,
    "cr": 2,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/nothic-xmm.js"
  },
  {
    "name": "Nycaloth",
    "ac": 18,
    "hp": 152,
    "init": 0,
    "cr": 9,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/nycaloth-xmm.js"
  },
  {
    "name": "Ochre Jelly",
    "ac": 8,
    "hp": 52,
    "init": -2,
    "cr": 2,
    "type": "ooze",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ochre-jelly-xmm.js"
  },
  {
    "name": "Octopus",
    "ac": 12,
    "hp": 3,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/octopus-xmm.js"
  },
  {
    "name": "Ogre",
    "ac": 11,
    "hp": 68,
    "init": -1,
    "cr": 2,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ogre-xmm.js"
  },
  {
    "name": "Ogre Zombie",
    "ac": 8,
    "hp": 85,
    "init": -2,
    "cr": 2,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ogre-zombie-xmm.js"
  },
  {
    "name": "Ogrillon Ogre",
    "ac": 12,
    "hp": 52,
    "init": 0,
    "cr": 1,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ogrillon-ogre-xmm.js"
  },
  {
    "name": "Oni",
    "ac": 17,
    "hp": 119,
    "init": 0,
    "cr": 7,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/oni-xmm.js"
  },
  {
    "name": "Otyugh",
    "ac": 14,
    "hp": 104,
    "init": 0,
    "cr": 5,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/otyugh-xmm.js"
  },
  {
    "name": "Owl",
    "ac": 11,
    "hp": 1,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/owl-xmm.js"
  },
  {
    "name": "Owlbear",
    "ac": 13,
    "hp": 59,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/owlbear-xmm.js"
  },
  {
    "name": "Panther",
    "ac": 13,
    "hp": 13,
    "init": 3,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/panther-xmm.js"
  },
  {
    "name": "Pegasus",
    "ac": 12,
    "hp": 59,
    "init": 2,
    "cr": 2,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pegasus-xmm.js"
  },
  {
    "name": "Performer Legend",
    "ac": 20,
    "hp": 162,
    "init": 5,
    "cr": 10,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/performer-legend-xmm.js"
  },
  {
    "name": "Performer Maestro",
    "ac": 18,
    "hp": 110,
    "init": 4,
    "cr": 6,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/performer-maestro-xmm.js"
  },
  {
    "name": "Performer",
    "ac": 13,
    "hp": 27,
    "init": 3,
    "cr": 0.5,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/performer-xmm.js"
  },
  {
    "name": "Peryton",
    "ac": 13,
    "hp": 33,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/peryton-xmm.js"
  },
  {
    "name": "Phase Spider",
    "ac": 14,
    "hp": 45,
    "init": 3,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/phase-spider-xmm.js"
  },
  {
    "name": "Piercer",
    "ac": 15,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/piercer-xmm.js"
  },
  {
    "name": "Piranha",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/piranha-xmm.js"
  },
  {
    "name": "Pirate Admiral",
    "ac": 20,
    "hp": 182,
    "init": 6,
    "cr": 12,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pirate-admiral-xmm.js"
  },
  {
    "name": "Pirate Captain",
    "ac": 17,
    "hp": 84,
    "init": 4,
    "cr": 6,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pirate-captain-xmm.js"
  },
  {
    "name": "Pirate",
    "ac": 14,
    "hp": 33,
    "init": 3,
    "cr": 1,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pirate-xmm.js"
  },
  {
    "name": "Pit Fiend",
    "ac": 21,
    "hp": 337,
    "init": 2,
    "cr": 20,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pit-fiend-xmm.js"
  },
  {
    "name": "Pixie Wonderbringer",
    "ac": 15,
    "hp": 60,
    "init": 5,
    "cr": 5,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pixie-wonderbringer-xmm.js"
  },
  {
    "name": "Pixie",
    "ac": 15,
    "hp": 9,
    "init": 5,
    "cr": 0.25,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pixie-xmm.js"
  },
  {
    "name": "Planetar",
    "ac": 19,
    "hp": 262,
    "init": 5,
    "cr": 16,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/planetar-xmm.js"
  },
  {
    "name": "Plesiosaurus",
    "ac": 13,
    "hp": 68,
    "init": 2,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/plesiosaurus-xmm.js"
  },
  {
    "name": "Polar Bear",
    "ac": 12,
    "hp": 42,
    "init": 2,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/polar-bear-xmm.js"
  },
  {
    "name": "Poltergeist",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 2,
    "type": "or Medium undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/poltergeist-xmm.js"
  },
  {
    "name": "Pony",
    "ac": 10,
    "hp": 11,
    "init": 0,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pony-xmm.js"
  },
  {
    "name": "Priest Acolyte",
    "ac": 13,
    "hp": 11,
    "init": 0,
    "cr": 0.25,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/priest-acolyte-xmm.js"
  },
  {
    "name": "Priest",
    "ac": 13,
    "hp": 38,
    "init": 0,
    "cr": 2,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/priest-xmm.js"
  },
  {
    "name": "Primeval Owlbear",
    "ac": 16,
    "hp": 126,
    "init": 2,
    "cr": 7,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/primeval-owlbear-xmm.js"
  },
  {
    "name": "Pseudodragon",
    "ac": 14,
    "hp": 10,
    "init": 2,
    "cr": 0.25,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pseudodragon-xmm.js"
  },
  {
    "name": "Psychic Gray Ooze",
    "ac": 9,
    "hp": 37,
    "init": -1,
    "cr": 1,
    "type": "ooze",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/psychic-gray-ooze-xmm.js"
  },
  {
    "name": "Pteranodon",
    "ac": 13,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/pteranodon-xmm.js"
  },
  {
    "name": "Purple Worm",
    "ac": 18,
    "hp": 247,
    "init": -2,
    "cr": 15,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/purple-worm-xmm.js"
  },
  {
    "name": "Quaggoth Thonot",
    "ac": 15,
    "hp": 67,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/quaggoth-thonot-xmm.js"
  },
  {
    "name": "Quaggoth",
    "ac": 13,
    "hp": 45,
    "init": 1,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/quaggoth-xmm.js"
  },
  {
    "name": "Quasit",
    "ac": 13,
    "hp": 25,
    "init": 3,
    "cr": 1,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/quasit-xmm.js"
  },
  {
    "name": "Questing Knight",
    "ac": 18,
    "hp": 202,
    "init": 3,
    "cr": 12,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/questing-knight-xmm.js"
  },
  {
    "name": "Rakshasa",
    "ac": 17,
    "hp": 221,
    "init": 3,
    "cr": 13,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/rakshasa-xmm.js"
  },
  {
    "name": "Rat",
    "ac": 10,
    "hp": 1,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/rat-xmm.js"
  },
  {
    "name": "Raven",
    "ac": 12,
    "hp": 2,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/raven-xmm.js"
  },
  {
    "name": "Red Dragon Wyrmling",
    "ac": 17,
    "hp": 75,
    "init": 0,
    "cr": 4,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/red-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Red Slaad",
    "ac": 14,
    "hp": 93,
    "init": 1,
    "cr": 5,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/red-slaad-xmm.js"
  },
  {
    "name": "Reef Shark",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/reef-shark-xmm.js"
  },
  {
    "name": "Remorhaz",
    "ac": 17,
    "hp": 195,
    "init": 1,
    "cr": 11,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/remorhaz-xmm.js"
  },
  {
    "name": "Revenant",
    "ac": 13,
    "hp": 127,
    "init": 2,
    "cr": 5,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/revenant-xmm.js"
  },
  {
    "name": "Rhinoceros",
    "ac": 13,
    "hp": 45,
    "init": -1,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/rhinoceros-xmm.js"
  },
  {
    "name": "Riding Horse",
    "ac": 11,
    "hp": 13,
    "init": 1,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/riding-horse-xmm.js"
  },
  {
    "name": "Roc",
    "ac": 15,
    "hp": 248,
    "init": 0,
    "cr": 11,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/roc-xmm.js"
  },
  {
    "name": "Roper",
    "ac": 20,
    "hp": 93,
    "init": -1,
    "cr": 5,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/roper-xmm.js"
  },
  {
    "name": "Rust Monster",
    "ac": 14,
    "hp": 33,
    "init": 1,
    "cr": 0.5,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/rust-monster-xmm.js"
  },
  {
    "name": "Saber-Toothed Tiger",
    "ac": 13,
    "hp": 52,
    "init": 3,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/saber-toothed-tiger-xmm.js"
  },
  {
    "name": "Sahuagin Baron",
    "ac": 16,
    "hp": 76,
    "init": 2,
    "cr": 5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sahuagin-baron-xmm.js"
  },
  {
    "name": "Sahuagin Priest",
    "ac": 12,
    "hp": 38,
    "init": 0,
    "cr": 2,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sahuagin-priest-xmm.js"
  },
  {
    "name": "Sahuagin Warrior",
    "ac": 12,
    "hp": 22,
    "init": 0,
    "cr": 0.5,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sahuagin-warrior-xmm.js"
  },
  {
    "name": "Salamander Fire Snake",
    "ac": 14,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/salamander-fire-snake-xmm.js"
  },
  {
    "name": "Salamander Inferno Master",
    "ac": 18,
    "hp": 256,
    "init": 3,
    "cr": 15,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/salamander-inferno-master-xmm.js"
  },
  {
    "name": "Salamander",
    "ac": 15,
    "hp": 90,
    "init": 2,
    "cr": 5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/salamander-xmm.js"
  },
  {
    "name": "Satyr Revelmaster",
    "ac": 17,
    "hp": 82,
    "init": 4,
    "cr": 6,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/satyr-revelmaster-xmm.js"
  },
  {
    "name": "Satyr",
    "ac": 13,
    "hp": 31,
    "init": 3,
    "cr": 0.5,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/satyr-xmm.js"
  },
  {
    "name": "Scarecrow",
    "ac": 11,
    "hp": 27,
    "init": 1,
    "cr": 1,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/scarecrow-xmm.js"
  },
  {
    "name": "Scorpion",
    "ac": 11,
    "hp": 1,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/scorpion-xmm.js"
  },
  {
    "name": "Scout Captain",
    "ac": 15,
    "hp": 66,
    "init": 3,
    "cr": 3,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/scout-captain-xmm.js"
  },
  {
    "name": "Scout",
    "ac": 13,
    "hp": 16,
    "init": 2,
    "cr": 0.5,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/scout-xmm.js"
  },
  {
    "name": "Sea Hag",
    "ac": 14,
    "hp": 52,
    "init": 1,
    "cr": 2,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sea-hag-xmm.js"
  },
  {
    "name": "Seahorse",
    "ac": 12,
    "hp": 1,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/seahorse-xmm.js"
  },
  {
    "name": "Shadow Demon",
    "ac": 14,
    "hp": 66,
    "init": 3,
    "cr": 4,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/shadow-demon-xmm.js"
  },
  {
    "name": "Shadow Dragon",
    "ac": 16,
    "hp": 189,
    "init": 4,
    "cr": 13,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/shadow-dragon-xmm.js"
  },
  {
    "name": "Shadow",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 0.5,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/shadow-xmm.js"
  },
  {
    "name": "Shambling Mound",
    "ac": 15,
    "hp": 110,
    "init": -1,
    "cr": 5,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/shambling-mound-xmm.js"
  },
  {
    "name": "Shield Guardian",
    "ac": 17,
    "hp": 142,
    "init": -1,
    "cr": 7,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/shield-guardian-xmm.js"
  },
  {
    "name": "Shrieker Fungus",
    "ac": 5,
    "hp": 13,
    "init": -5,
    "cr": 0,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/shrieker-fungus-xmm.js"
  },
  {
    "name": "Silver Dragon Wyrmling",
    "ac": 17,
    "hp": 45,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/silver-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Skeleton",
    "ac": 14,
    "hp": 13,
    "init": 3,
    "cr": 0.25,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/skeleton-xmm.js"
  },
  {
    "name": "Slaad Tadpole",
    "ac": 12,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/slaad-tadpole-xmm.js"
  },
  {
    "name": "Smoke Mephit",
    "ac": 12,
    "hp": 13,
    "init": 2,
    "cr": 0.25,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/smoke-mephit-xmm.js"
  },
  {
    "name": "Solar",
    "ac": 21,
    "hp": 297,
    "init": 6,
    "cr": 21,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/solar-xmm.js"
  },
  {
    "name": "Spectator",
    "ac": 14,
    "hp": 45,
    "init": 2,
    "cr": 3,
    "type": "aberration",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/spectator-xmm.js"
  },
  {
    "name": "Specter",
    "ac": 12,
    "hp": 22,
    "init": 2,
    "cr": 1,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/specter-xmm.js"
  },
  {
    "name": "Sphinx of Lore",
    "ac": 17,
    "hp": 170,
    "init": 2,
    "cr": 11,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sphinx-of-lore-xmm.js"
  },
  {
    "name": "Sphinx of Secrets",
    "ac": 16,
    "hp": 136,
    "init": 2,
    "cr": 8,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sphinx-of-secrets-xmm.js"
  },
  {
    "name": "Sphinx of Valor",
    "ac": 17,
    "hp": 199,
    "init": 0,
    "cr": 17,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sphinx-of-valor-xmm.js"
  },
  {
    "name": "Sphinx of Wonder",
    "ac": 13,
    "hp": 24,
    "init": 3,
    "cr": 1,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sphinx-of-wonder-xmm.js"
  },
  {
    "name": "Spider",
    "ac": 12,
    "hp": 1,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/spider-xmm.js"
  },
  {
    "name": "Spined Devil",
    "ac": 13,
    "hp": 45,
    "init": 2,
    "cr": 2,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/spined-devil-xmm.js"
  },
  {
    "name": "Spirit Naga",
    "ac": 17,
    "hp": 135,
    "init": 3,
    "cr": 8,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/spirit-naga-xmm.js"
  },
  {
    "name": "Sprite",
    "ac": 15,
    "hp": 10,
    "init": 4,
    "cr": 0.25,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/sprite-xmm.js"
  },
  {
    "name": "Spy Master",
    "ac": 19,
    "hp": 137,
    "init": 5,
    "cr": 10,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/spy-master-xmm.js"
  },
  {
    "name": "Spy",
    "ac": 12,
    "hp": 27,
    "init": 2,
    "cr": 1,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/spy-xmm.js"
  },
  {
    "name": "Steam Mephit",
    "ac": 10,
    "hp": 17,
    "init": 0,
    "cr": 0.25,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/steam-mephit-xmm.js"
  },
  {
    "name": "Stirge",
    "ac": 13,
    "hp": 5,
    "init": 3,
    "cr": 0.125,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/stirge-xmm.js"
  },
  {
    "name": "Stone Giant",
    "ac": 17,
    "hp": 126,
    "init": 2,
    "cr": 7,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/stone-giant-xmm.js"
  },
  {
    "name": "Stone Golem",
    "ac": 18,
    "hp": 220,
    "init": -1,
    "cr": 10,
    "type": "construct",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/stone-golem-xmm.js"
  },
  {
    "name": "Storm Giant",
    "ac": 16,
    "hp": 230,
    "init": 2,
    "cr": 13,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/storm-giant-xmm.js"
  },
  {
    "name": "Succubus",
    "ac": 15,
    "hp": 71,
    "init": 3,
    "cr": 4,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/succubus-xmm.js"
  },
  {
    "name": "Swarm of Bats",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-bats-xmm.js"
  },
  {
    "name": "Swarm of Crawling Claws",
    "ac": 12,
    "hp": 49,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-crawling-claws-xmm.js"
  },
  {
    "name": "Swarm of Dretches",
    "ac": 12,
    "hp": 45,
    "init": 0,
    "cr": 4,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-dretches-xmm.js"
  },
  {
    "name": "Swarm of Insects",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-insects-xmm.js"
  },
  {
    "name": "Swarm of Larvae",
    "ac": 13,
    "hp": 22,
    "init": 0,
    "cr": 1,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-larvae-xmm.js"
  },
  {
    "name": "Swarm of Lemures",
    "ac": 12,
    "hp": 45,
    "init": -2,
    "cr": 3,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-lemures-xmm.js"
  },
  {
    "name": "Swarm of Piranhas",
    "ac": 13,
    "hp": 28,
    "init": 3,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-piranhas-xmm.js"
  },
  {
    "name": "Swarm of Rats",
    "ac": 10,
    "hp": 14,
    "init": 0,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-rats-xmm.js"
  },
  {
    "name": "Swarm of Ravens",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-ravens-xmm.js"
  },
  {
    "name": "Swarm of Stirges",
    "ac": 14,
    "hp": 36,
    "init": 3,
    "cr": 2,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-stirges-xmm.js"
  },
  {
    "name": "Swarm of Venomous Snakes",
    "ac": 14,
    "hp": 36,
    "init": 4,
    "cr": 2,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/swarm-of-venomous-snakes-xmm.js"
  },
  {
    "name": "Tarrasque",
    "ac": 25,
    "hp": 697,
    "init": 0,
    "cr": 30,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/tarrasque-xmm.js"
  },
  {
    "name": "Thri-kreen Marauder",
    "ac": 15,
    "hp": 33,
    "init": 2,
    "cr": 1,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/thri-kreen-marauder-xmm.js"
  },
  {
    "name": "Thri-kreen Psion",
    "ac": 16,
    "hp": 149,
    "init": 2,
    "cr": 8,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/thri-kreen-psion-xmm.js"
  },
  {
    "name": "Tiger",
    "ac": 13,
    "hp": 30,
    "init": 3,
    "cr": 1,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/tiger-xmm.js"
  },
  {
    "name": "Tough Boss",
    "ac": 16,
    "hp": 82,
    "init": 2,
    "cr": 4,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/tough-boss-xmm.js"
  },
  {
    "name": "Tough",
    "ac": 12,
    "hp": 32,
    "init": 1,
    "cr": 0.5,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/tough-xmm.js"
  },
  {
    "name": "Treant",
    "ac": 16,
    "hp": 138,
    "init": -1,
    "cr": 9,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/treant-xmm.js"
  },
  {
    "name": "Tree Blight",
    "ac": 15,
    "hp": 115,
    "init": 0,
    "cr": 7,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/tree-blight-xmm.js"
  },
  {
    "name": "Triceratops",
    "ac": 14,
    "hp": 114,
    "init": -1,
    "cr": 5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/triceratops-xmm.js"
  },
  {
    "name": "Troglodyte",
    "ac": 11,
    "hp": 13,
    "init": 0,
    "cr": 0.25,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/troglodyte-xmm.js"
  },
  {
    "name": "Troll Limb",
    "ac": 13,
    "hp": 14,
    "init": 1,
    "cr": 0.5,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/troll-limb-xmm.js"
  },
  {
    "name": "Troll",
    "ac": 15,
    "hp": 94,
    "init": 1,
    "cr": 5,
    "type": "giant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/troll-xmm.js"
  },
  {
    "name": "Twig Blight",
    "ac": 14,
    "hp": 7,
    "init": 2,
    "cr": 0.125,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/twig-blight-xmm.js"
  },
  {
    "name": "Tyrannosaurus Rex",
    "ac": 13,
    "hp": 136,
    "init": 0,
    "cr": 8,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/tyrannosaurus-rex-xmm.js"
  },
  {
    "name": "Ultroloth",
    "ac": 19,
    "hp": 221,
    "init": 3,
    "cr": 13,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/ultroloth-xmm.js"
  },
  {
    "name": "Umber Hulk",
    "ac": 18,
    "hp": 93,
    "init": 1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/umber-hulk-xmm.js"
  },
  {
    "name": "Unicorn",
    "ac": 12,
    "hp": 97,
    "init": 2,
    "cr": 5,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/unicorn-xmm 2.js"
  },
  {
    "name": "Unicorn",
    "ac": 12,
    "hp": 97,
    "init": 2,
    "cr": 5,
    "type": "celestial",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/unicorn-xmm.js"
  },
  {
    "name": "Vampire Familiar",
    "ac": 15,
    "hp": 65,
    "init": 3,
    "cr": 3,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/vampire-familiar-xmm.js"
  },
  {
    "name": "Vampire Nightbringer",
    "ac": 16,
    "hp": 142,
    "init": 4,
    "cr": 8,
    "type": "or Medium undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/vampire-nightbringer-xmm.js"
  },
  {
    "name": "Vampire Spawn",
    "ac": 16,
    "hp": 90,
    "init": 3,
    "cr": 5,
    "type": "or Medium undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/vampire-spawn-xmm.js"
  },
  {
    "name": "Vampire Umbral Lord",
    "ac": 16,
    "hp": 187,
    "init": 4,
    "cr": 15,
    "type": "or Medium undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/vampire-umbral-lord-xmm.js"
  },
  {
    "name": "Venomous Snake",
    "ac": 12,
    "hp": 5,
    "init": 2,
    "cr": 0.125,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/venomous-snake-xmm.js"
  },
  {
    "name": "Vine Blight",
    "ac": 12,
    "hp": 19,
    "init": -1,
    "cr": 0.5,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/vine-blight-xmm.js"
  },
  {
    "name": "Violet Fungus Necrohulk",
    "ac": 17,
    "hp": 123,
    "init": 1,
    "cr": 7,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/violet-fungus-necrohulk-xmm.js"
  },
  {
    "name": "Violet Fungus",
    "ac": 5,
    "hp": 18,
    "init": -5,
    "cr": 0.25,
    "type": "plant",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/violet-fungus-xmm.js"
  },
  {
    "name": "Vrock",
    "ac": 15,
    "hp": 152,
    "init": 2,
    "cr": 6,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/vrock-xmm.js"
  },
  {
    "name": "Vulture",
    "ac": 10,
    "hp": 5,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/vulture-xmm.js"
  },
  {
    "name": "Warhorse Skeleton",
    "ac": 13,
    "hp": 22,
    "init": 1,
    "cr": 0.5,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/warhorse-skeleton-xmm.js"
  },
  {
    "name": "Warhorse",
    "ac": 11,
    "hp": 19,
    "init": 1,
    "cr": 0.5,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/warhorse-xmm.js"
  },
  {
    "name": "Warrior Commander",
    "ac": 18,
    "hp": 161,
    "init": 5,
    "cr": 10,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/warrior-commander-xmm.js"
  },
  {
    "name": "Warrior Infantry",
    "ac": 13,
    "hp": 9,
    "init": 0,
    "cr": 0.125,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/warrior-infantry-xmm.js"
  },
  {
    "name": "Warrior Veteran",
    "ac": 17,
    "hp": 65,
    "init": 1,
    "cr": 3,
    "type": "or Medium humanoid",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/warrior-veteran-xmm.js"
  },
  {
    "name": "Water Elemental",
    "ac": 14,
    "hp": 114,
    "init": 2,
    "cr": 5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/water-elemental-xmm.js"
  },
  {
    "name": "Water Weird",
    "ac": 13,
    "hp": 65,
    "init": 3,
    "cr": 3,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/water-weird-xmm.js"
  },
  {
    "name": "Weasel",
    "ac": 13,
    "hp": 1,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/weasel-xmm.js"
  },
  {
    "name": "Werebear",
    "ac": 15,
    "hp": 135,
    "init": 0,
    "cr": 5,
    "type": "or Medium monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/werebear-xmm.js"
  },
  {
    "name": "Wereboar",
    "ac": 15,
    "hp": 97,
    "init": 0,
    "cr": 4,
    "type": "or Medium monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/wereboar-xmm.js"
  },
  {
    "name": "Wererat",
    "ac": 13,
    "hp": 60,
    "init": 3,
    "cr": 2,
    "type": "or Medium monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/wererat-xmm.js"
  },
  {
    "name": "Weretiger",
    "ac": 12,
    "hp": 120,
    "init": 2,
    "cr": 4,
    "type": "or Medium monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/weretiger-xmm.js"
  },
  {
    "name": "Werewolf",
    "ac": 15,
    "hp": 71,
    "init": 2,
    "cr": 3,
    "type": "or Medium monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/werewolf-xmm.js"
  },
  {
    "name": "White Dragon Wyrmling",
    "ac": 16,
    "hp": 32,
    "init": 0,
    "cr": 2,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/white-dragon-wyrmling-xmm.js"
  },
  {
    "name": "Wight",
    "ac": 14,
    "hp": 82,
    "init": 2,
    "cr": 3,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/wight-xmm.js"
  },
  {
    "name": "Will-o'-Wisp",
    "ac": 19,
    "hp": 27,
    "init": 9,
    "cr": 2,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/will-o-wisp-xmm.js"
  },
  {
    "name": "Winged Kobold",
    "ac": 15,
    "hp": 10,
    "init": 3,
    "cr": 0.25,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/winged-kobold-xmm.js"
  },
  {
    "name": "Winter Wolf",
    "ac": 13,
    "hp": 75,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/winter-wolf-xmm.js"
  },
  {
    "name": "Wolf",
    "ac": 12,
    "hp": 11,
    "init": 2,
    "cr": 0.25,
    "type": "beast",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/wolf-xmm.js"
  },
  {
    "name": "Worg",
    "ac": 13,
    "hp": 26,
    "init": 1,
    "cr": 0.5,
    "type": "fey",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/worg-xmm.js"
  },
  {
    "name": "Wraith",
    "ac": 13,
    "hp": 67,
    "init": 3,
    "cr": 5,
    "type": "or Medium undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/wraith-xmm.js"
  },
  {
    "name": "Wyvern",
    "ac": 14,
    "hp": 127,
    "init": 0,
    "cr": 6,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/wyvern-xmm.js"
  },
  {
    "name": "Xorn",
    "ac": 19,
    "hp": 84,
    "init": 0,
    "cr": 5,
    "type": "elemental",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/xorn-xmm.js"
  },
  {
    "name": "Yeti",
    "ac": 12,
    "hp": 51,
    "init": 1,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/yeti-xmm.js"
  },
  {
    "name": "Yochlol",
    "ac": 15,
    "hp": 153,
    "init": 4,
    "cr": 10,
    "type": "fiend",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/yochlol-xmm.js"
  },
  {
    "name": "Young Black Dragon",
    "ac": 18,
    "hp": 127,
    "init": 2,
    "cr": 7,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-black-dragon-xmm.js"
  },
  {
    "name": "Young Blue Dragon",
    "ac": 18,
    "hp": 152,
    "init": 0,
    "cr": 9,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-blue-dragon-xmm.js"
  },
  {
    "name": "Young Brass Dragon",
    "ac": 17,
    "hp": 110,
    "init": 0,
    "cr": 6,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-brass-dragon-xmm.js"
  },
  {
    "name": "Young Bronze Dragon",
    "ac": 17,
    "hp": 142,
    "init": 0,
    "cr": 8,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-bronze-dragon-xmm.js"
  },
  {
    "name": "Young Copper Dragon",
    "ac": 17,
    "hp": 119,
    "init": 1,
    "cr": 7,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-copper-dragon-xmm.js"
  },
  {
    "name": "Young Gold Dragon",
    "ac": 18,
    "hp": 178,
    "init": 2,
    "cr": 10,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-gold-dragon-xmm.js"
  },
  {
    "name": "Young Green Dragon",
    "ac": 18,
    "hp": 136,
    "init": 1,
    "cr": 8,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-green-dragon-xmm.js"
  },
  {
    "name": "Young Red Dragon",
    "ac": 18,
    "hp": 178,
    "init": 0,
    "cr": 10,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-red-dragon-xmm.js"
  },
  {
    "name": "Young Remorhaz",
    "ac": 14,
    "hp": 93,
    "init": 1,
    "cr": 5,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-remorhaz-xmm.js"
  },
  {
    "name": "Young Silver Dragon",
    "ac": 18,
    "hp": 168,
    "init": 0,
    "cr": 9,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-silver-dragon-xmm.js"
  },
  {
    "name": "Young White Dragon",
    "ac": 17,
    "hp": 123,
    "init": 0,
    "cr": 6,
    "type": "dragon",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/young-white-dragon-xmm.js"
  },
  {
    "name": "Yuan-ti Abomination",
    "ac": 15,
    "hp": 127,
    "init": 3,
    "cr": 7,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/yuan-ti-abomination-xmm.js"
  },
  {
    "name": "Yuan-ti Infiltrator",
    "ac": 11,
    "hp": 40,
    "init": 1,
    "cr": 1,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/yuan-ti-infiltrator-xmm.js"
  },
  {
    "name": "Yuan-ti Malison (Type 1)",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/yuan-ti-malison-type-1-xmm.js"
  },
  {
    "name": "Yuan-ti Malison (Type 2)",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/yuan-ti-malison-type-2-xmm.js"
  },
  {
    "name": "Yuan-ti Malison (Type 3)",
    "ac": 12,
    "hp": 66,
    "init": 2,
    "cr": 3,
    "type": "monstrosity",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/yuan-ti-malison-type-3-xmm.js"
  },
  {
    "name": "Zombie",
    "ac": 8,
    "hp": 15,
    "init": -2,
    "cr": 0.25,
    "type": "undead",
    "source": "Monster Manual (2024)",
    "htmlLink": "./custom/index.html?file=xmm/zombie-xmm.js"
  },
  {
    "name": "Aberrant Spirit (Beholderkin)",
    "ac": null,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "aberration",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/aberrant-spirit-beholderkin-xphb.js"
  },
  {
    "name": "Aberrant Spirit (Slaad)",
    "ac": null,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "aberration",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/aberrant-spirit-slaad-xphb.js"
  },
  {
    "name": "Aberrant Spirit (Star Spawn)",
    "ac": null,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "aberration",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/aberrant-spirit-star-spawn-xphb.js"
  },
  {
    "name": "Aberrant Spirit",
    "ac": null,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "aberration",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/aberrant-spirit-xphb.js"
  },
  {
    "name": "Animated Object (Huge)",
    "ac": 15,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/animated-object-huge-xphb.js"
  },
  {
    "name": "Animated Object (Large)",
    "ac": 15,
    "hp": 20,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/animated-object-large-xphb.js"
  },
  {
    "name": "Animated Object (Medium or Smaller)",
    "ac": 15,
    "hp": 10,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/animated-object-medium-or-smaller-xphb.js"
  },
  {
    "name": "Animated Object",
    "ac": 15,
    "hp": 10,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/animated-object-xphb.js"
  },
  {
    "name": "Beast of the Land",
    "ac": null,
    "hp": 5,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/beast-of-the-land-xphb.js"
  },
  {
    "name": "Beast of the Sea",
    "ac": null,
    "hp": 5,
    "init": 2,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/beast-of-the-sea-xphb.js"
  },
  {
    "name": "Beast of the Sky",
    "ac": null,
    "hp": 4,
    "init": 3,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/beast-of-the-sky-xphb.js"
  },
  {
    "name": "Bestial Spirit (Air)",
    "ac": null,
    "hp": 20,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/bestial-spirit-air-xphb.js"
  },
  {
    "name": "Bestial Spirit (Land)",
    "ac": null,
    "hp": 30,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/bestial-spirit-land-xphb.js"
  },
  {
    "name": "Bestial Spirit (Water)",
    "ac": null,
    "hp": 30,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/bestial-spirit-water-xphb.js"
  },
  {
    "name": "Bestial Spirit",
    "ac": null,
    "hp": 20,
    "init": 0,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/bestial-spirit-xphb.js"
  },
  {
    "name": "Celestial Spirit (Avenger)",
    "ac": null,
    "hp": 40,
    "init": 2,
    "cr": 0,
    "type": "celestial",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/celestial-spirit-avenger-xphb.js"
  },
  {
    "name": "Celestial Spirit (Defender)",
    "ac": null,
    "hp": 40,
    "init": 2,
    "cr": 0,
    "type": "celestial",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/celestial-spirit-defender-xphb.js"
  },
  {
    "name": "Celestial Spirit",
    "ac": null,
    "hp": 40,
    "init": 2,
    "cr": 0,
    "type": "celestial",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/celestial-spirit-xphb.js"
  },
  {
    "name": "Construct Spirit (Clay)",
    "ac": null,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/construct-spirit-clay-xphb.js"
  },
  {
    "name": "Construct Spirit (Metal)",
    "ac": null,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/construct-spirit-metal-xphb.js"
  },
  {
    "name": "Construct Spirit (Stone)",
    "ac": null,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/construct-spirit-stone-xphb.js"
  },
  {
    "name": "Construct Spirit",
    "ac": null,
    "hp": 40,
    "init": 0,
    "cr": 0,
    "type": "construct",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/construct-spirit-xphb.js"
  },
  {
    "name": "Draconic Spirit (Acid)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "dragon",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/draconic-spirit-acid-xphb.js"
  },
  {
    "name": "Draconic Spirit (Cold)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "dragon",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/draconic-spirit-cold-xphb.js"
  },
  {
    "name": "Draconic Spirit (Fire)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "dragon",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/draconic-spirit-fire-xphb.js"
  },
  {
    "name": "Draconic Spirit (Lightning)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "dragon",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/draconic-spirit-lightning-xphb.js"
  },
  {
    "name": "Draconic Spirit (Poison)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "dragon",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/draconic-spirit-poison-xphb.js"
  },
  {
    "name": "Draconic Spirit",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "dragon",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/draconic-spirit-xphb.js"
  },
  {
    "name": "Elemental Spirit (Air)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "elemental",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/elemental-spirit-air-xphb.js"
  },
  {
    "name": "Elemental Spirit (Earth)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "elemental",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/elemental-spirit-earth-xphb.js"
  },
  {
    "name": "Elemental Spirit (Fire)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "elemental",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/elemental-spirit-fire-xphb.js"
  },
  {
    "name": "Elemental Spirit (Water)",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "elemental",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/elemental-spirit-water-xphb.js"
  },
  {
    "name": "Elemental Spirit",
    "ac": null,
    "hp": 50,
    "init": 2,
    "cr": 0,
    "type": "elemental",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/elemental-spirit-xphb.js"
  },
  {
    "name": "Fey Spirit (Fuming)",
    "ac": null,
    "hp": 30,
    "init": 3,
    "cr": 0,
    "type": "fey",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/fey-spirit-fuming-xphb.js"
  },
  {
    "name": "Fey Spirit (Mirthful)",
    "ac": null,
    "hp": 30,
    "init": 3,
    "cr": 0,
    "type": "fey",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/fey-spirit-mirthful-xphb.js"
  },
  {
    "name": "Fey Spirit (Tricksy)",
    "ac": null,
    "hp": 30,
    "init": 3,
    "cr": 0,
    "type": "fey",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/fey-spirit-tricksy-xphb.js"
  },
  {
    "name": "Fey Spirit",
    "ac": null,
    "hp": 30,
    "init": 3,
    "cr": 0,
    "type": "fey",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/fey-spirit-xphb.js"
  },
  {
    "name": "Fiendish Spirit (Demon)",
    "ac": null,
    "hp": 50,
    "init": 3,
    "cr": 0,
    "type": "fiend",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/fiendish-spirit-demon-xphb.js"
  },
  {
    "name": "Fiendish Spirit (Devil)",
    "ac": null,
    "hp": 40,
    "init": 3,
    "cr": 0,
    "type": "fiend",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/fiendish-spirit-devil-xphb.js"
  },
  {
    "name": "Fiendish Spirit",
    "ac": null,
    "hp": 50,
    "init": 3,
    "cr": 0,
    "type": "fiend",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/fiendish-spirit-xphb.js"
  },
  {
    "name": "Fiendish Spirit (Yugoloth)",
    "ac": null,
    "hp": 60,
    "init": 3,
    "cr": 0,
    "type": "fiend",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/fiendish-spirit-yugoloth-xphb.js"
  },
  {
    "name": "Giant Insect (Centipede)",
    "ac": null,
    "hp": 30,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/giant-insect-centipede-xphb.js"
  },
  {
    "name": "Giant Insect (Spider)",
    "ac": null,
    "hp": 30,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/giant-insect-spider-xphb.js"
  },
  {
    "name": "Giant Insect (Wasp)",
    "ac": null,
    "hp": 30,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/giant-insect-wasp-xphb.js"
  },
  {
    "name": "Giant Insect",
    "ac": null,
    "hp": 30,
    "init": 1,
    "cr": 0,
    "type": "beast",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/giant-insect-xphb.js"
  },
  {
    "name": "Otherworldly Steed (Celestial)",
    "ac": null,
    "hp": 5,
    "init": 1,
    "cr": 0,
    "type": "celestial",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/otherworldly-steed-celestial-xphb.js"
  },
  {
    "name": "Otherworldly Steed (Fey)",
    "ac": null,
    "hp": 5,
    "init": 1,
    "cr": 0,
    "type": "fey",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/otherworldly-steed-fey-xphb.js"
  },
  {
    "name": "Otherworldly Steed (Fiend)",
    "ac": null,
    "hp": 5,
    "init": 1,
    "cr": 0,
    "type": "fiend",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/otherworldly-steed-fiend-xphb.js"
  },
  {
    "name": "Otherworldly Steed",
    "ac": null,
    "hp": 5,
    "init": 1,
    "cr": 0,
    "type": "Large",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/otherworldly-steed-xphb.js"
  },
  {
    "name": "Undead Spirit (Ghostly)",
    "ac": null,
    "hp": 30,
    "init": 3,
    "cr": 0,
    "type": "undead",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/undead-spirit-ghostly-xphb.js"
  },
  {
    "name": "Undead Spirit (Putrid)",
    "ac": null,
    "hp": 30,
    "init": 3,
    "cr": 0,
    "type": "undead",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/undead-spirit-putrid-xphb.js"
  },
  {
    "name": "Undead Spirit (Skeletal)",
    "ac": null,
    "hp": 20,
    "init": 3,
    "cr": 0,
    "type": "undead",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/undead-spirit-skeletal-xphb.js"
  },
  {
    "name": "Undead Spirit",
    "ac": null,
    "hp": 30,
    "init": 3,
    "cr": 0,
    "type": "undead",
    "source": "Player's Handbook (2024)",
    "htmlLink": "./custom/index.html?file=xphb/undead-spirit-xphb.js"
  }
];