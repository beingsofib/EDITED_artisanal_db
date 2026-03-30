/*

This work is licensed under a Creative Commons Attribution 4.0 International License available at:

https://creativecommons.org/licenses/by/4.0/

You are free to use this content in any manner permitted by that license as long as you include the following attribution statement in your own work:

This work includes material taken from the 5e Artisanal Database by Michael E. Shea of SlyFlourish.com, available under a Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/

*/

// Combined common generator data
// This file contains all shared data in the format expected by the generator system
//
// DEPENDENCY NOTE (update-resilience):
//   This file is loaded by pages in custom_generators/ alongside:
//     ../css_js/generator.js          — pinned copy in forked_folders/css_js/
//     ../css_js/common_generator_data.js — pinned copy in forked_folders/css_js/
//   These are PINNED copies, not the upstream root css_js/ files.
//   Before updating forked_folders/css_js/ from upstream, verify the
//   addCommonDataTo() API and parseInput() API have not changed.
//
// Last audited: 2026-03-29 — tested against generator.js (286 lines, CC0)

// Create the common data text in the format expected by parseInput()
const homebrewGeneratorDataText = `

valuable_item
  a {gem} worth [[10-70]] gp
  a {material} {trinket}
  a vial of {potion_type}
  a spell scroll for {spell}
  a small locked box with no visible keyhole
  a {material} figurine of an unknown deity
  a folded letter sealed with an unfamiliar crest
  a pouch containing [[3-18]] silver coins and a single gold coin
  a set of loaded dice carved from {material}
  a compass that points somewhere other than north
  a {gem} set into a {material} pendant on a thin chain




magic_shop
  <p><strong>Potions:</strong> {potion_type}, {potion_type}<br><strong>Common:</strong> {common_magic}, {common_magic}, {common_magic}, {common_magic}, {common_magic}, {common_magic}, {common_magic}<br><strong>Uncommon:</strong> {uncommon_magic}, {uncommon_magic}, {uncommon_magic}<br><strong>Rare:</strong> {rare_magic}, {rare_magic}, {rare_magic}<br><strong>Very Rare:</strong> {very_rare_magic}, {very_rare_magic}<br><strong>Magic Books:</strong> {magic_item}, {magic_book}, {magic_book}</p>{shopping}{shopping}

magic_item
  {material} {item_type} of {property} that {magical_effect}

village_market
    {market_stalls1}, {market_stalls1}, {market_stalls1}, {market_stalls1}, {market_stalls1}, {market_stalls1}, {market_stalls1}, {market_stalls1},

town_market
    {market_stalls2}, {market_stalls2}, {market_stalls2}, {market_stalls2}, {market_stalls2}, {market_stalls2}, {market_stalls2}, {market_stalls2},

city_market
    {market_stalls3}, {market_stalls3}, {market_stalls3}, {market_stalls3}, {market_stalls3}, {market_stalls3}, {market_stalls3}, {market_stalls3}.

pub
    <p><strong>{pub_names}</strong> — {inn_type}<br>{shop_appearance}, that smells of {shop_smells}<br>Run by {shop_npc}<br>Beers: {pub_beer}, {pub_beer}, {pub_beer}<br>Food: {pub_food}, {pub_food}, {pub_food}<br>Patrons: {shop_npc} | {shop_npc}</p>

town_shops
    <p><strong>{shop_type2}</strong><br>{shop_appearance}<br>Run by {shop_npc}</p>





squalid_district
  <p><strong>{squalid_district_name}</strong></p><p>Shops: {squalid_shop}, {squalid_shop}, {squalid_shop}, {squalid_shop}, {squalid_shop}, {squalid_shop}<br><strong>By Day:</strong> {squalid_encounter_day}<br><strong>By Night:</strong> {squalid_encounter_night}<br><strong>Atmosphere:</strong> {squalid_sounds}</p><hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr><p><strong>Tavern</strong></p>{city_squalid_pub}

low_district
  <p><strong>{low_district_name}</strong></p><p>Shops: {squalid_shop}, {low_shop}, {low_shop}, {squalid_shop}, {low_shop}, {low_shop}<br><strong>By Day:</strong> {low_district_encounter_day}<br><strong>By Night:</strong> {low_district_encounter_night}<br><strong>Rumours:</strong> {low_district_rumour}<br><strong>Atmosphere:</strong> {low_sounds}</p><hr>{city_squalid_shops}<hr>{city_low_shops}<hr>{city_low_shops}<hr>{city_low_shops}<hr>{city_low_shops}<hr><p><strong>Tavern</strong></p>{city_squalid_pub}

artisan_district
  <p><strong>{artisan_district_name}</strong></p><p>Shops: {artisan_shop}, {artisan_shop}, {low_shop}, {artisan_shop}, {artisan_shop}, {high_shop}<br><strong>By Day:</strong> {encounter_day}<br><strong>By Night:</strong> {encounter_night}<br><strong>Atmosphere:</strong> {artisan_sounds}</p><hr>{city_artisan_shops}<hr>{city_high_shops}<hr>{city_artisan_shops}<hr>{city_artisan_shops}<hr>{city_high_shops}<hr>{city_artisan_shops}<hr>{city_artisan_shops}<hr><p><strong>Tavern</strong></p>{city_artisan_pub}

market_district
  <p><strong>{market_district_name}</strong></p><p>Stalls: {market_stalls1}, {market_stalls1}, {market_stalls3}, {market_stalls2}, {market_stalls2}, {market_stalls3}<br><strong>By Day:</strong> {market_encounter_day}<br><strong>By Night:</strong> {market_encounter_night}<br><strong>Atmosphere:</strong> {market_sounds}</p><hr>{city_market_shops}<hr>{city_market_shops}<hr>{city_market_shops}<hr>{city_market_shops}<hr>{city_market_shops}<hr><p><strong>Other market stalls:</strong> {town_market}, {town_market}</p><hr><p><strong>Taverns</strong></p>{city_general_pub}{city_low_pub}

high_district
  <p><strong>{high_district_name}</strong></p><p>Shops: {high_shop}, {high_shop}, {high_shop}, {artisan_shop}, {high_shop}, {high_shop}<br><strong>By Day:</strong> {high_district_encounter_day}<br><strong>By Night:</strong> {high_encounter_night}<br><strong>Rumours:</strong> {high_rumour}<br><strong>Atmosphere:</strong> {high_sounds}</p><hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr><p><strong>Tavern</strong></p>{city_high_pub}

fishing_district
  <p><strong>{fishing_district_name}</strong></p><p>Shops: {fish_shop}, {squalid_shop}, {fish_shop}, {low_shop}, {fish_shop}, {squalid_shop}<br><strong>By Day:</strong> {encounter_day}<br><strong>By Night:</strong> {encounter_night}<br><strong>Atmosphere:</strong> {fish_sounds}</p><hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr><p><strong>Tavern</strong></p>{city_squalid_pub}

temple_district
  <p><strong>{temple_district_name}</strong></p><p>Shops: {temple_shop}, {temple_shop}, {university_shop}, {high_shop}, {high_shop}, {temple_shop}<br><strong>By Day:</strong> {encounter_day}<br><strong>By Night:</strong> {encounter_night}<br><strong>Atmosphere:</strong> {temple_sounds}</p><hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr><p><strong>Tavern</strong></p>{city_high_pub}

castle_district
  <p><strong>{castle_district_name}</strong></p><p>Shops: {castle_shop}, {squalid_shop}, {squalid_shop}, {squalid_shop}, {squalid_shop}, {squalid_shop}<br><strong>By Day:</strong> {encounters_day}<br><strong>By Night:</strong> {encounters_night}<br><strong>Atmosphere:</strong> {castle_sounds}</p><hr>{city_castle_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_castle_shops}<hr>{city_high_shops}<hr><p><strong>Tavern</strong></p>{city_high_pub}

dock_district
  <p><strong>{docks_district_name}</strong></p><p>Shops: {dock_shop}, {low_shop}, {dock_shop}, {fish_shop}, {low_shop}, {squalid_shop}, {dock_shop}<br><strong>By Day:</strong> {encounter_day}<br><strong>By Night:</strong> {dock_encounter_night}<br><strong>Atmosphere:</strong> {dock_sounds}</p><hr>{city_squalid_shops}<hr>{city_squalid_shops}<hr>{city_low_shops}<hr>{city_squalid_shops}<hr>{city_low_shops}<hr><p><strong>Taverns</strong></p>{city_low_pub}{city_squalid_pub}

university_district
  <p><strong>{university_district_name}</strong></p><p>Shops: {university_shop}, {squalid_shop}, {high_shop}, {university_shop}, {artisan_shop}, {university_shop}<br><strong>By Day:</strong> {encounter_day}<br><strong>By Night:</strong> {encounter_night}<br><strong>Atmosphere:</strong> {university_sounds}</p><hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr>{city_high_shops}<hr><p><strong>Tavern</strong></p>{city_high_pub}







city_squalid_shops
  <p><strong>{name} {shop_name_suffix}</strong> — {squalid_shop}<br>{shop_appearance}. {shop_known}<br>Run by {shop_npc}</p>

city_low_shops
  <p><strong>{name} {shop_name_suffix}</strong> — {low_shop}<br>{shop_appearance}. {shop_known}<br>Run by {shop_npc}</p>

city_artisan_shops
  <p><strong>{name} {shop_name_suffix}</strong> — {artisan_shop}<br>{shop_appearance}. {shop_known}<br>Run by {shop_npc}</p>


city_high_shops
  <p><strong>{shop_generator_prefix} {shop_name_suffix}</strong> — {high_shop}<br>{shop_appearance}. {shop_known}<br>Run by {shop_npc}</p>

city_market_shops
  <p><strong>{name} {shop_name_suffix}</strong> — {artisan_shop}<br>{shop_appearance}. {shop_known}<br>Run by {shop_npc}</p>

city_castle_shops
  <p><strong>{shop_generator_prefix} {shop_name_suffix}</strong> — {castle_shop}<br>{shop_appearance}. {shop_known}<br>Run by {shop_npc}</p>


city_squalid_pub
  <p><strong>{pub_names}</strong> <em>(squalid, 3cp/7cp)</em><br>{shop_appearance}, that smells of {shop_smells}<br>Run by {shop_npc}<br>Beers: {pub_beer}, {pub_beer}, {pub_beer}<br>Food: {bar_food}, {bar_food}<br>Patrons: {shop_npc} | {shop_npc}</p>

city_low_pub
  <p><strong>{pub_names}</strong> <em>(poor, 6cp/1sp)</em><br>{shop_appearance}, that smells of {shop_smells}<br>Run by {shop_npc}<br>Beers: {pub_beer}, {pub_beer}, {pub_beer}<br>Food: {bar_food}, {pub_snack}<br>Patrons: {shop_npc} | {shop_npc}</p>

city_artisan_pub
  <p><strong>{pub_names}</strong> <em>(poor, 6cp/1sp)</em><br>{shop_appearance}, that smells of {shop_smells}<br>Run by {shop_npc}<br>Beers: {pub_beer}, {pub_beer}, {pub_beer}<br>Food: {bar_food}, {pub_snack}<br>Patrons: {shop_npc} | {shop_npc}</p>

city_general_pub
  <p><strong>{pub_names}</strong> <em>(modest, 3sp/5sp)</em><br>{shop_appearance}, that smells of {shop_smells}<br>Run by {shop_npc}<br>Beers: {pub_beer}, {pub_beer}, {pub_beer}<br>Food: {bar_food}, {pub_food}<br>Patrons: {shop_npc} | {shop_npc}</p>

city_high_pub
  <p><strong>{pub_names}</strong> <em>(wealthy, 12sp/2gp)</em><br>{shop_appearance}, that smells of {shop_smells}<br>Run by {shop_npc}<br>Beers: {pub_beer}, {pub_beer}, {pub_beer}<br>Food: {pub_food}, {pub_food}<br>Patrons: {shop_npc} | {shop_npc}</p>



shopping
  <p>{armour_interest}<br>{jewellery_interest}<br>{clothing_interest}<br>{art_interest}<br>{oddities_interest}<br>{weapon_interest} {potion_interest}</p>

shop_npc
    <strong>{name} {surname_first}{surname_last}</strong> — {species_trait} {npc_type}: {speech} voice, {hair} hair, {facial_features}, {visual_characteristics}, {trait}, {dress}, holding {simple_item}



pub_food
  Roast {meat} and {hearty_veg} in a {sauce} sauce with {drink}
  Roast {meat} and {vegetable} with {bread} and {drink} to drink
  {fruit} roast {meat} with {bread} and {drink} to drink
  {fruit} roast {hearty_veg} with {bread} and {drink} to drink
  Roast {meat} and {fruit} with {vegetable} and {drink} to drink
  {soup} with {bread} and {drink} ^3
  Grilled {meat} with {vegetable} in a {sauce} sauce and {drink}
  Grilled {meat} with {vegetable} and {fruit} and {drink}
  Grilled {hearty_veg}, {vegetable}, and {vegetable} with {bread} and {drink} to drink
  {bar_snack} and {bar_snack}
  {dessert} with {drink}
  {dessert} and {dessert}





urban_creature
  <p><strong>Urban Creatures:</strong> {any_habitat}, {any_habitat}, {any_habitat} and {urban_habitat}, {urban_habitat}, {urban_habitat}</p>

grass_creature
  <p><strong>Grassland Creatures:</strong> {any_habitat}, {any_habitat}, {any_habitat} and {grass_habitat}, {grass_habitat}, {grass_habitat}</p>

mountain_creature
  <p><strong>Mountain Creatures:</strong> {any_habitat}, {any_habitat}, {any_habitat} and {mountain_habitat}, {mountain_habitat}, {mountain_habitat}</p>

hill_creature
  <p><strong>Hill Creatures:</strong> {any_habitat}, {any_habitat}, {any_habitat} and {hill_habitat}, {hill_habitat}, {hill_habitat}</p>








waterdeep_factions
  Adventurers Treasure seekers looking to make their names in the big city.
  Black Boar Tribe Barbaric Dock Ward gangsters who serve as bodyguards and bouncers.
  Bregan D’aerthe Drow mercenaries who pledge loyalty to Jarlaxle Baenre.
  Bull Elk Tribe Dock Ward gang who run protection rackets on ships passing through customs.
  Church of Bane Worshipers of the god of fear, hatred, and tyranny.
  Church of Cyric Worshipers of the god of strife and lies.
  Church of Loviator Worshipers of the goddess of agony.
  Church of Shar Worshipers of the goddess of darkness.
  Church of Talos Worshipers of the god of storms and destruction.
  Church of Umberlee Worshipers of the cruel sea goddess.
  City Watch Members of the Waterdeep constabulary. ^2
  Cult of Entropy Cultists who worship a distant deity of annihilation.
  Cult of the Black Earth Cultists who worship Ogrémoch, the Prince of Elemental Evil Earth.
  Cult of the Crushing Wave Cultists who worship Olhydra, the Princess of Elemental Evil Water.
  Cult of the Dragon Cultists who venerate evil dragons.
  Cult of the Eternal Flame Cultists who worship Imix, the Prince of Elemental Evil Flame.
  Cult of the Howling Hatred Cultists who worship Yan-C-Bin, the Prince of Elemental Evil Air.
  Emerald Enclave Alliance of druids and rangers sworn to defend the wilds from evil.
  Enclave of Red Magic Thayan mages who often smuggle slaves into Skullport.
  Fangshields League of good-aligned monsters and lycanthropes sworn to fight evil.
  Fists of Hextor Brutal mercenaries who often sell their services to despots and villains.
  Force Grey League of heroes sworn to protect Waterdeep.
  Griffon Cavalry Elite company of the City Guard who patrol from the air. ^2
  Halaster’s Heirs Dark arcanists trained at a hidden academy within Undermountain
  Harpers Undercover organization sworn to defy tyranny and evil.
  House Cassalanter Agents of the devil-corrupted Cassalanter noble house.
  Iluskan Ship Bravos from one of Luskan’s major gangs (or “ships”).
  Knights of the Shield Knowledge brokers who seek wealth and power by manipulating information.
  Lords’ Alliance Coalition of nobles across the North who are sworn to unite against evil.
  Luminous Lightning League Cabal of wild mages.
  Mercenaries One of many mercenary companies that ply their trade in Waterdeep. ^2
  Order of the Gauntlet Tight-knit group of clerics and paladins united by religious zeal to crush evil.
  People of the Black Blood Widespread league of lycanthrope Malar worshipers.
  Pirates Lawless sea scavengers who return to port to spend their booty on grog.
  Plague Rats League of wererat thieves active throughout the Western Heartlands.
  Red Sashes Undercover vigilantes who seek to enact justice where the city authorities fail.
  Savants of the Dark Tide Enslaved humanoids used as tools by aboleths hiding out in the city’s sewers.
  Sewer Snakes Goblin gangsters who sneak up from Skullport to rob and murder city folk.
  Shadow Thieves Powerful criminal cartel attempting to reestablish control in Waterdeep.
  Tel Teukiira (“The Moonstars”) Undercover agents who serve the Blackstaff by rooting out corruption and evil.
  The Kraken Society Shadowy group of thieves and mages who serve a kraken master.
  The Unseen Consortium of shapeshifter thieves and assassins.
  Thralls of Artor Morlin Thralls of the Waterdhavian vampire Artor Morlin, the Baron of Blood.
  Underdark Anarchists’ Fellowship Anarchic rebels sworn to smash the tyrannical status quo of the Underdark.
  Wharf Rats Kobold gang active in the Dock Ward slums.
  Servants of The Hidden engaged in thievery, extortion, and slavery.
  The Hallowed Company unscrupulous mercenary network caught up in street war with the Xanathar Guild.





species_trait
  human ^10
  elf ^2
  dwarf ^2
  halfling
  gnome ^2
  dragonborn
  orc
  goblin
  kobold
  tiefling
  bugbear

personality
  surly
  cautious
  brash
  elitist
  suspicious
  carefree
  loyal
  opportunistic
  wide-eyed
  humorous
  drunken
  optimistic
  ignorant
  obnoxious
  brazen
  loving
  ambitious
  greedy
  eagle-eyed
  lovestruck
  sinister
  foulmouthed
  pious

speech
  accented
  breathless
  fast
  crisp
  halting
  guttural
  lisps
  husky
  loud
  low-pitched
  nervous
  nasal
  slow
  raspy
  squeaky
  slurs
  wheezy
  stutters
  whispery
  whiny

hair
  bald
  braided
  curly
  dreadlocks
  frazzled
  greasy
  limp
  long
  messy
  strange hairstyle
  pony-tail
  short
  straight
  streaked
  thick
  thinning
  very long
  wavy
  well groomed
  wiry

facial_features
  acne
  beard
  buck-toothed
  bushy eyebrows
  chiseled
  doe-eyed
  distinctive nose
  gap-toothed
  goatee
  grizzled
  missing ear
  missing eye
  missing teeth
  moustache
  pierced
  pock-marked
  sideburns
  squinty
  stained teeth
  weather-beaten

visual_characteristics
  birthmark on {location}
  body piercings on {location}
  chew tobacco
  scarred on {location}
  smokes
  tattooed on {location}
  arrive late
  gives vaguest possible answers
  has something in hands
  wears as little as possible
  wears expensive clothes
  wears same color
  wears tattered clothes
  answers questions with questions
  aversion to certain kind of food
  bad breath or strong body odor
  bad/loud/annoying/shrill laugh
  bad with money
  bites fingernails
  bites lips
  black eye
  bleeding nose
  blinks constantly
  bruises easily
  burps
  burn scar on {location}
  chews with mouth open
  chortles
  clicks tongue
  collects teeth/hair/claws of slain opponents
  constantly asks for divine advice
  covered in sores, boils, or a rash
  cracks knuckles
  dandruff
  dirty
  distinctive jewellery
  distracted easily during conversations
  double-checks everything
  drones on and on while talking
  easily confused
  enjoys own body odor
  exaggerates
  excessive body hair
  fidgets
  finishes others’ sentences
  flatulent
  flips a coin
  sweats profusely
  permanent grimace
  fidgets with anything
  dribbles
  bulbous goiter
  youthful
  whistling voice
  one dense eyebrow
  deep, booming voice
  extraordinarily crooked nose
  almost bald
  splayed-wide nostrilled nose
  slouches and spits
  sheds clouds of dust
  missing limb
  narrow face
  blind in one eye
  ragged sail-like ears
  one black tooth
  deep-sunk, lidded eyes
  concave forehead
  hooked, dribbling nose
  dotted with warts
  mouth-breathing
  coated head to toe in muck
  has a silent partner
  speckled with sores
  wiry-haired
  old burn scars
  ferocious squint
  deaf in one ear
  furious eyes
  feverish
  rheumy, raw eyes
  horn-like carbuncle
  sheds fleas and lice
  bandy-legged
  slow-witted
  bafflingly beautiful
  long, winding scar
  lopsided body
  stiff as a board
  yellow stump teeth
  large mouth, like a fish
  facial abscess
  pale, cracked skin
  fair-skinned
  foams at mouth when excited/angry
  freckled
  gesticulates wildly
  giggles
  grins evilly
  hands shake
  hacking cough
  has nightmares
  hates animals
  hates children
  hates quiet pauses in conversations
  hiccups
  hook for a hand
  if unable to recall word, stops conversation and will not give up until can finally remember it
  imaginary friend
  interrupts others
  jumps conversation topics
  laughs at own jokes
  lazy eyed
  leers
  likes to arm wrestle
  limps
  loves animals
  loves children
  loves the sea and ships
  makes up words
  mispronounces names
  missing finger
  mutters
  needs story before sleeping
  nervous cough
  nervous eye twitch
  nervous muscle twitch
  paces
  peg-legged
  perfumed
  picks fights
  picks at fingernails
  picks nose
  picks scabs
  picks at teeth
  plays practical jokes
  plays with hair
  plays with own jewelry
  pokes/taps others with finger
  predilection for certain kind of food
  prefers to be called by last name
  puts garlic on all food
  reads constantly, especially when inappropriate
  refuses to let anyone walk behind them
  refuses to sit in chairs
  repeats same phrase over and over
  rolls eyes when bored/annoyed
  scratches
  sharpens weapon
  shivers
  sings
  sleeps late
  sleeps nude
  smiles when angry/annoyed
  sneers
  sneezes
  sniffles
  spits
  squeamish
  stands very close
  stares
  sucks teeth
  sun-burned
  swears profusely
  sweaty
  talks about self in third-person
  talks to inanimate objects
  talks to self
  talks with food in mouth
  taps feet
  drools
  excessively clean
  facial tic
  taps fingers
  taunts foes
  thinks they are very lucky
  vein-coated neck
  thin, pale lips
  back bent like a hoop
  haggard and hunted
  pig-like nose
  cross-eyed
  long, skeletal fingers
  blubber lips
  mismatched arms
  vaguely suggestive comments
  long-necked
  wipes nose constantly
  dented head
  flicking tongue, cracked lips
  unusually large head
  irregular, grey teeth
  phlegm-spraying cough
  bird sits on shoulder
  flat, pancake face
  tufts of irregular hair
  slab-faced
  extraordinarily compressed
  hissing, rasping voice
  sunken head and short limbs
  twitches and jerks
  thunderous flatulence
  stump-fingered
  small, tightly pursed mouth
  cannot make eye contact
  crooked back
  loose skin
  remarkably small head
  little goggling eyes
  spindly, knob-jointed limbs
  no chin whatsoever
  bloated stomach
  languid, calm speech
  terrifying laugh
  widely set eyes
  turnip-shaped nose
  astonishingly old
  hideous grin and winking eyes
  left eye much larger than right
  half-asleep
  missing fingers
  waddling gait
  stutter
  sagging lips
  wild, tangled hair
  prominent mole or boil
  thinks they can speak a language they can’t
  tone-deaf
  touches people while talking to them
  turns every conversation into story about self
  unable to figure out which color clothes match
  unable to let a joke die
  unable to remember names
  unexplained dislike for certain organization
  urinates frequently
  uses wrong word and refuses to acknowledge correct word
  warts
  wears flamboyant or outlandish clothes
  wears hat or hood
  wears only jewelry of one type of metal
  wets bed
  whistles

trait
  wild hair
  a scarred cheek
  body tattoos
  a smoking pipe
  gold teeth
  a limp
  a missing eye
  unusual eyes
  big earrings
  a missing hand
  a bad habit of spitting
  shifty eyes
  uneven teeth
  a snort
  facial tattoos
  an unusual nose
  a missing tooth
  a shaved head
  false lashes
  heavy makeup

location
  head
  face
  neck
  chest
  back
  stomach
  waist
  right arm
  left arm
  right leg
  left leg

dress
  plainly
  in dirty clothes
  in pristine clothes
  in crumpled clothes
  in coordinated clothes
  in well-decorated clothes
  in mended clothes
  ragged clothes
  in colorful clothes
  in drab clothes
  in oversized clothes
  in mismatched clothes
  in a uniform
  in embroidered clothes
  in armor
  in faded clothes
  too tightly
  in patched clothes
  in gilded clothes
  in flattering clothes

goal
  get rich
  impress their crush
  get revenge
  clear their name
  reunite with their love
  get a job
  solve a mystery
  impress the boss
  outshine their rival
  trick someone
  return home at last
  be left alone
  prove themself
  leave a bad scene
  avoid their enemy
  defeat their enemy
  topple a local leader
  prove a theory
  turn over a new leaf
  honor someone

quest
  find an item
  kill a villain
  rescue an NPC
  uncover a secret
  clear out monsters
  protect a monument
  protect an NPC
  steal an item
  return an item
  close a gate
  open a gate
  activate a monument
  disable an artifact
  recover an item
  convince an NPC
  awaken a monster
  put a monster to sleep
  bury a secret
  discover a monument
  dig up an artifact

npc_type
  bandit
  cultist
  scout
  thug
  spy
  berserker
  cult fanatic
  druid
  priest
  knight
  veteran
  mage
  assassin
  caravanner
  circusfolk
  collegiate
  cosmopolitan
  imperial
  itinerant
  lone wanderer
  nomad
  settler
  villager
  wildling
  acolyte
  artisan
  charlatan
  criminal
  entertainer
  exile
  farmer
  folk hero
  gambler
  guard
  guildmember
  hermit
  marauder
  noble
  outlander
  sage
  sailor
  soldier
  trader
  urchin











coin_type
  copper ^3
  silver ^3
  gold
  platinum

simple_item
  A quill and some ink
  A bundle of reeds
  3 chickens
  A piece of rye bread with dripping
  A mouldy cheese
  A bundle of rags
  A dead goat
  A rude book of poetry
  A bunch of violets
  A raw honeycomb
  A bolt of fabric
  A pair of fine boots
  A small pot of glue
  Some iron scraps
  3 clay pots
  A ball of string and a silver needle. The items are magical and once per day can be used to restore 6 (1d4 + 4) hit points if used to sew up a wound.
  A stale crust of bread and a bit of moldy cheese.
  One large iron key with an ornate skull and 4 crossbones at the head.
  A velvet purse containing three faceted deep green gemstones (10 gp each).
  A piece of half-eaten candy wrapped in paper.
  A vial of potion.
  A clothespin, a metal ring and a thimble. The thimble is magical and can be activated once per day to add +1 to the owner's armor class as a reaction.
  A small, bright blue egg
  A round metal token stamped with the image of a dragon.
  A dirty sock.
  A pair of glasses with dark lenses. These glasses are magical and can be used to cast comprehend languages once per day.
  A lump of silver (5 gp).
  Two dried mushroom caps that smell like mint and honey. Each of these caps will bestow 3 (1d6) temporary hit points to the person who eats them.
  A small pen knife that has a concealed set of folding lockpicks.
  A small earhorn and a smoking pipe carved from glimmering red stone in the shape of a bearded dwarf (20 gp).
  A letter sealed with black wax stamped with a flying raven. The parchment inside the envelope is blank.
  Three glittering purple geodes the size of robin's eggs (15 gp each).
  A small piece of parchment that has the crest of a local moneylender at the top and a 10-digit code scrawled in a hasty hand.
  A silvered straight razor with a scrimshaw mammoth ivory handle (75 gp).
  A magnifying glass with a bronze frame (30 gp).
  A small leather journal. A random 2nd-level spell scroll is tucked inside the pages.
  A round glass jar that has a vibrant purple slime inside. The slime makes the sound of aggressive flatulence when the jar is opened.
  Golden nugget (15 gp) encased in blood red wax.
  A box of gold-edged tarot cards (8 gp).
  A picture of a man covering a vial of poison. (Ingested, DC 15 Constitution saving throw or take 17 (5d6) poison damage. Half-damage on a success.)
  A quill made of solid silver and featuring a bright purple feather (25 gp).
  A blue velvet bag containing four bright red candies that will grant a new saving throw against contracting a disease in the event of a failure.
  A small homespun sack that contains 55 gp worth of foreign currency.
  A small box made of ivory, inside of which is a miniature scroll containing religious litanies (6 gp).
  A lock of silver-white hair bound in a blue thread.
  A nearly empty pouch of smoking tobacco.
  A silver flask that contains very good brandy.
  The holy symbol of a neutral god.
  A nearly burned piece of parchment that has directions to a nearby tavern.
  A leather waterskin full of stagnant water. Drinking the water will expose the drinker to illness.
  A red leather book full of steamy love poems.
  An empty metal can that has the sound of crashing waves and the scent of sea air coming from the small opening in the top.
  Handful of delicious dried berries and nuts.
  A piece of blue quartz (10 gp).
  A broken locket with a picture of a pig (15 gp).
  A stale dog biscuit and a bent metal tag that has the name "Bear" engraved on it.
  A large medallion inlaid in gold with the image of a wingless dragon with a large lion's mane (50 gp).
  Four lumps of charcoal and several folded pieces of parchment with very bad drawings on them.
  Three glass buttons engraved with smiling faces. The buttons sing jaunty sea shanties when exposed to alcohol.
  Six very large blue-green scales (5 gp each) belonging to an unknown creature.
  A glass jar of 2 (1d4) doses of minty unguent that soothes sore muscles. If applied before a short rest, you regain an additional 4 (1d4 + 2) hit points.
  A set of six hematite eight-sided dice engraved with strange symbols (5 gp each).
  101 sp, all of which are fake.
  A small wooden statue of a goose with a small crack in it. A small amount of diamond dust (125 gp) is hidden inside the statue.
  A stuffed toy lion that makes quiet growling noises when squeezed.
  A note that reads "To steal from me is to steal from The Prince of Illusions."
  A black pouch containing a fine glittering powder. The glitter gets everywhere and is impossible to get rid of. For 5 (1d10) days you take a -2 penalty to Dexterity (Stealth) checks but gain a +2 bonus to Charisma (Persuasion and Performance) checks.
  A pair of small shears and a small sprig of pine.
  A burlap pouch of pebbles, market price.
  A green silk handkerchief embroidered with pure gold thread (15 gp).
  A small silver cylinder the size of a pencil containing a single dose of purple worm poison.
  A single gold coin mysteriously engraved with the name of the person holding it.
  A crystal bottle of exotic perfume (75 gp).
  A glass dagger (+3). It only make 5 (1d6 + 3 + mod) attacks before it breaks. The attack that breaks it deals an additional 10 (4d4) slashing damage.
  5 gp and an IOU that reads "475 gold pieces. On my wife's life. —Greg the Lesser"
  two small pieces of jasper (60 gp each).
  A very used handkerchief.
  A mummified goblin hand
  A small vial of very strong clear liquor. Anyone who consumes it must make a DC 16 Constitution saving throw or take 1 (2d10) poison damage and gain the poisoned condition for 6 (1d12) hours.
  A tangled ball of twine. It can be untied with a successful DC 30 Intelligence (Investigation) and DC 25 Dexterity (Sleight of Hand) check.
  60 gp and an all-you-can-eat-and-drink pass for the local tavern.
  Playing cards with an astronomical theme. Every full moon there is a 25 percent chance that it will turn into a deck of many things.
  A set of rune-carved bones that can be used as a spell-casting focus.
  A large cursed diamond (3,000 gp).
  Anyone who sees the diamond believes it is just a smooth rock. The person who touches it becomes charmed by it and refuses to get rid of it. If they lose the diamond, they will be at disadvantage on all rolls for 24 hours.
  A shoe that appears to be for a baby.
  A bent pewter spoon that makes any food eaten with it taste like a gourmet feast.
  An overtly fancy (and fake) necklace that is most assuredly cursed
  Copper coin and a small metal tin that contains five sugary sweets.
  A small roll of parchment. Anyone who reads it is insulted by magical script that appears and writes incredibly personal insults about them in the air over their head.
  Two cheesy garlic biscuits. They taste very good.
  A silver bracelet set with green crystals (85 gp).
  A container of fine cigars (10 gp).
  A silk pouch that contains three pieces of amethyst (100 gp each). The stones are drawn together by a strong gravitational force. They refuse to be separated.
  A small flute that attracts pigeons when played.
  A golden bell with a missing clapper. It rings with a tone much louder than expected.
  A live frog who can speak common.
  A small jar full of 13 (2d12) fireflies that turn into gold pieces after one week.
  A miniature model of an armored knight that animates and walks around. It is a child's toy worth 55 gp to the right buyer.
  A bag of beans in a bag that looks like a clown.
  A broken padlock. The padlock can be repaired with a DC 25 Dexterity (Tinker's Tools) check. Once repaired, the lock cannot be picked and can only be opened with a small drop of the owner's blood.
  A small emerald (800 gp).
  A mirrored sphere about 1 inch in diameter. Breaking the sphere reveals a blue spinel (500 gp).
  A ring of incredible (mis)fortune. Allows the wearer to cast wish once. The ring then becomes non-magical and the wearer takes 78 (12d12) force damage.
  A piece of crystal that faintly glows in the moonlight
  A gold coin minted in an unknown land
  A diary written in a language you don’t know
  A brass ring that never tarnishes
  An old chess piece made from glass
  A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips
  A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it
  A rope necklace from which dangles four mummified elf fingers
  The deed for a parcel of land in a realm unknown to you
  A 1-ounce block made from an unknown material
  A small cloth doll skewered with needles
  A tooth from an unknown beast
  An enormous scale, perhaps from a dragon
  A bright green feather
  An old divination card bearing your likeness
  A glass orb filled with moving smoke
  A 1-pound egg with a bright red shell
  A pipe that blows bubbles
  A glass jar containing a weird bit of flesh floating in pickling fluid
  A tiny gnome-crafted music box that plays a song you dimly remember from your childhood
  A small wooden statuette of a smug halfling
  A brass orb etched with strange runes
  A multicolored stone disk
  A tiny silver icon of a raven
  A bag containing forty-seven humanoid teeth, one of which is rotten
  A shard of obsidian that always feels warm to the touch
  A dragon's bony talon hanging from a plain leather necklace
  A pair of old socks
  A blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking
  A silver badge in the shape of a five-pointed star
  A knife that belonged to a relative
  A glass vial filled with nail clippings
  A rectangular metal device with two tiny metal cups on one end that throws sparks when wet
  A white, sequined glove sized for a human
  A vest with one hundred tiny pockets
  A small, weightless stone block
  A tiny sketch portrait of a goblin
  An empty glass vial that smells of perfume when opened
  A gemstone that looks like a lump of coal when examined by anyone but you
  A scrap of cloth from an old banner
  A rank insignia from a lost legionnaire
  A tiny silver bell without a clapper
  A mechanical canary inside a gnome-crafted lamp
  A tiny chest carved to look like it has numerous feet on the bottom
  A dead sprite inside a clear glass bottle
  A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)
  A glass orb filled with water, in which swims a clockwork goldfish
  A silver spoon with an M engraved on the handle
  A whistle made from gold-colored wood
  A dead scarab beetle the size of your hand
  Two toy soldiers, one with a missing head
  A small box filled with different-sized buttons
  A candle that can’t be lit
  A tiny cage with no door
  An old key
  An indecipherable treasure map
  A hilt from a broken sword
  A rabbit’s foot
  A glass eye
  A cameo carved in the likeness of a hideous person
  A silver skull the size of a coin
  An alabaster mask
  A pyramid of sticky black incense that smells very bad
  A nightcap that, when worn, gives you pleasant dreams
  A single caltrop made from bone
  A gold monocle frame without the lens
  A 1-inch cube, each side painted a different color
  A crystal knob from a door
  A small packet filled with pink dust
  A fragment of a beautiful song, written as musical notes on two pieces of parchment
  A silver teardrop earring made from a real teardrop
  The shell of an egg painted with scenes of human misery in disturbing detail
  A fan that, when unfolded, shows a sleeping cat
  A set of bone pipes
  A four-leaf clover pressed inside a book discussing manners and etiquette
  A sheet of parchment upon which is drawn a complex mechanical contraption
  An ornate scabbard that fits no blade you have found so far
  An invitation to a party where a murder happened
  A bronze pentacle with an etching of a rat's head in its center
  A purple handkerchief embroidered with the name of a powerful archmage
  Half of a floorplan for a temple, castle, or some other structure
  A bit of folded cloth that, when unfolded, turns into a stylish cap
  A receipt of deposit at a bank in a far-flung city
  A diary with seven missing pages
  An empty silver snuffbox bearing an inscription on the surface that says “dreams”
  An iron holy symbol devoted to an unknown god
  A book that tells the story of a legendary hero's rise and fall, with the last chapter missing
  A vial of dragon blood
  An ancient arrow of elven design
  A needle that never bends
  An ornate brooch of dwarven design
  An empty wine bottle bearing a pretty label that says, “The Wizard of Wines Winery, Red Dragon Crush, 331422-W”
  A mosaic tile with a multicolored, glazed surface
  A petrified mouse
  A black pirate flag adorned with a dragon's skull and crossbones
  A tiny mechanical crab or spider that moves about when it’s not being observed
  A glass jar containing lard with a label that reads, “Griffon Grease”
  A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body
  A metal urn containing the ashes of a hero






material
  silver
  crystal
  obsidian
  bone
  iron
  gold
  jade
  amber
  ivory
  mahogany
  mithral
  darkwood
  petrified wood
  dragon scale

trinket
  ring
  amulet
  medallion
  necklace
  earring
  bracelet

item_type
  cloak
  dagger
  staff
  wand
  ring
  amulet
  helm
  shield
  boots
  bracers
  belt
  gauntlets
  circlet
  quiver

property
  protection
  speed
  wisdom
  strength
  stealth
  endurance
  agility
  intelligence
  charisma
  true sight
  fire resistance
  shadow walking
  spell storing
  feather falling

magical_effect
  glows when enemies are near
  grants advantage on stealth
  allows casting {spell} once per day
  provides resistance to {damage_type}
  whispers the last words spoken in the room when touched
  turns invisible in darkness
  grows uncomfortably warm near undead
  hums faintly when pointed north
  causes nearby flames to burn a deep violet
  grants the ability to speak with small animals
  leaves no footprints when worn
  casts a faint shadow in the shape of a different creature

potion_type
  healing
  strength
  invisibility
  fire resistance
  greater healing
  speed
  water breathing
  animal friendship
  clairvoyance
  diminution
  gaseous form
  giant strength
  mind reading
  poison
  resistance
  vitality

spell
  light
  detect magic
  cure wounds
  shield
  misty step
  thunderwave
  hold person
  darkness
  faerie fire
  charm person
  speak with dead
  fly
  suggestion
  counterspell

gem
  ruby
  emerald
  sapphire
  diamond
  amethyst
  topaz
  opal
  pearl
  garnet
  onyx
  bloodstone
  moonstone
  star ruby
  black pearl

damage_type
  fire
  cold
  lightning
  acid
  poison
  necrotic
  radiant
  thunder
  psychic
  force
  bludgeoning
  piercing
  slashing

swords
  longsword
  shortsword
  rapier
  scimitar
  greatsword
  broadsword
  cutlass
  falchion
  saber
  hand crossbow
  elven thinblade
  bastard sword
  gladius

blunt_weapons
  mace
  club
  warhammer
  flail
  morningstar
  maul
  quarterstaff
  greatclub
  light hammer
  sling
  war pick
  trident

book
  Gold, Lead and the Shapers of Reality: A Treatise on Alchemy
  The Properties of Inverse Spell Formulary and its Effect on Transmutive Magic
  The Tale of the Fifth Sister, an epic and allegorical high adventure story of redemption
  Bellnoch's Guide to the Wilds of the Fey
  Fire, Oil and Steel: The Ways of the Forge and Smith
  Ally's Journey to the Magic Castle, a children's tale of adventure
  Under the Storied Moon, a love story between a bard and werewolf
  Mimm's Extraplanar Codex: A Guide to Things That Live Beyond Our Reality
  Untraceable Poisons and Their Alternative Uses
  The Songs of the Warbling Dragon, a book of absolutely terrible sonnets
  Under the Mountain: A Comprehensive History of the Dwarves
  Why Are Goblins Green?, a cautionary children's tale
  Codexi Spiritus: The Ghost Hunter's Lexicon
  Fireballs Unlimited: Make a Big Bang and Become the Talk of the Town
  The 10,000 Essential Prophecies of Rupert the Tiny
  Social Uses of Necromancy: Why Find Friends When You Can Make Them?
  Ungrid Ironhand's Complete Guide to Arms and Armor
  The Telemetry and Physical Constraints of Intraplanar Instantaneous Transmission
  Why Warlocks? A Deep Dive Into Those Who Bind Their Souls
  Blips, Clicks and Hums: Nero Slipworthy's Beginner's Guide to Clockwork Construction
  Not Today, a satirical book written as a guide for the lazy bard
  No Bones About It: The Bones Know; Understanding the Future Through Osteomancy
  Are You There, Xorlack? It's Me, You: Empathic Connections With Extraplanar Beings
  Bang, Zap and Schwing: An Explosive Guide to Evocation
  The Owlbear and the Satyr, a feel good story of a garrulous fey and his favorite pet
  Knives in the Knight, a gripping tale of betrayal, redemption and stabbing through heavy armor
  Is the Astral Sea for Me?: A Travel Guide for the Suicidally Adventurous
  The Things You Never Wanted to Know: A History of the World's Worst Moments
  Secret Places of the Ancient Arcanists
  Secrets of Secret Cults: A Revealing Look At What They Don't Want You To Know
  The Cart After the Horse: A Guide to Advancements in Autonomous Wagons
  Gaffs & Gags: How to Use Cantrips in Practical Jokes
  Angelicus Totalis: A Personal Journal of Journeys Through the Heavens
  Gitrug and Clarg: Brothers to the End, a harrowing biography of an orc and his adopted goblin brother
  Never Do What I Did: Billingsly Nertfarthing's Guide to Teleportation Mishaps
  Fire and Ice: A Comparative Treatise on Evocative Spell Construction
  Demigods and Avatars: How to Rise to the Top in Three Easy Steps, which seems like a pyramid scheme
  A Dark Guide to Forbidden Love Potions
  The End of All Things: An Examination Into How the Wish Spell is Going to Destroy the Universe
  That's a Big Nope: Murkat Gobstoppas Guide to Poisonous Insects
  Of Gods and Celestial Beings: Are They Really There or Just a Myth?
  All You Will Ever Need To Learn About Taverns, Ales and Alcohols, a seminal work by J. Majors
  Controlling the Outcome Through Enchantment and Illusion: A Guide to Clouding the Mind
  Librum Arcanum Geographica, an atlas of ley lines and magically significant locations
  Boogeymen and Other Mythical Terrors: From Baba Yaga to the Jabberwock of the Talion Plains
  An Alliance of Fools, a fictional work of political intrigue that seems to closely mirror the present
  Rain of the Heavens: The Day the Angels Fell
  Marl's Penultimate Cookbook: From Cabbage Soup to Duck a l'Orange, Tavern Floor to King's Table
  Prolific Cloners or Immortal Beings: The Truth About Elves Revealed
  The Book: Inside Are All the Answers, a 400-page tome whose pages are completely empty
  Meritrope Amberleaf's Trove of Indoor Horticulture: Information on growing all sorts of houseplants.
  Filgrave's Guide to Rocks: Topics include identifying gemstones and other rocks, and general geology.
  The Book of Fire: Misleading title refers to the many forms of chilli plants found.
  Belim's Botanical Biblos: Complete guide to identifying a huge array of wild-growing plants.
  The Explorer's Bestiary: An extensive bestiary of non-humanoid creatures and animals.
  Vonangil's Essential Guide to Non-Human Races of the West: A concise book detailing all the better-known nonhuman races of the western continent.
  Hats, Hats, Hats: Written by R.B. Holondaise, details the history, style, and manufacture of all sorts of popular hats.
  The Candle Maker and His Craft: Written by Ira C. Bingeworthy, details of the entire process of candle making, tools, and materials.
  The Way to Control a Canine: A complete dog training programme, including general care and feeding.
  Tailoring Made Easy: Beginner's guide to fine clothing making, showing detailed steps.
  Ye Properties of Clay: An anonymous guide to pottery and pottery manufacture with a very detailed section on types of clay.
  All Forms of the Dead: By A. Ventrik. A guide to identifying most types of corporeal undead creatures.
  Tuttle's Turtle Tome: Contains information on virtually every type of turtle in existence.
  Crenger's World Atlas: An atlas of your own game world.
  The Locksmith's Encyclopaedia: Complete guide to locksmithing from start to finish.
  Gonchana's Shoe and Boot Guide: Teaches how to make shoes and boots of the latest popular designs.
  Smithing Made Easy: By A. Smith. Teaches all aspects of smithing everyday items.
  Jerri Ness' Glass Blowing Guide: The art of glass blowing as told by expert and legendary glass blower and craftsman, Jerri Ness.
  Mama Bertrand's Pudding Compendium: Recipe book, dedicated to puddings.
  Manual of Solar Navigation: Information about using the sun to navigate over all terrain using its position.
  Ye Healing of the Bones: Old book pertaining to all things to do with bone growth, healing, and skeletal anatomy.
  The Egbad Guide to the Lute: Teach yourself to play the lute, by popular bard and celebrity musician Egbad.
  The Egbad Guide to the Flute: Teach yourself to play the flute, by popular bard and celebrity musician Egbad.
  Traditional Hobbit Cookery Book: By Endina Spoonfist. All traditional Hobbit recipes for the initiated.
  Simple Campfire Cookery: Great simple camp cookery for the explorer and outdoors types.
  Bintibba's Brewing Handbook: Beer and wine making handbook, easy to follow instructions, and tons of recipes.
  The Year Moon Almanac: Details all the times, phases, and positions of the moon.
  Legendary Kings and Queens of the West: History, myth, and legend stretching back several thousand years.
  Making Soups, Stews, and Casseroles: By Amphora Mongoose. Recipes, methods, and tips for creating culinary creations.
  Sharper Swords for All: Ways and methods of weapon care for the warrior.
  Masks of Life: A full treatise on the art of disguise and trickery.
  Heraldic Coats of Arms of the Noble Houses: Full details on most of the noble houses of the continent.
  Discussions on the Orc Race: A detailed set of essays on the Orc, laying out the ecology, tribal setup, and languages they use.
  Teach Yourself Orc: Full common Orc language course.
  How to Speak Elven and Its Dialects: Full language course for all main Elven languages.
  Legends of the Dwarven Kings: Old legends of the Dwarven kings translated directly from old Dwarvish.
  Interviews with the Halflings: Tales of the author's first meetings with Halflings and their ways.
  Arrakil's Animal Guide: A general animal guide to common creatures.
  Written Scripts of the Ancient Dragons: Translated legends direct from ancient hieroglyphs.
  Cooking with Rats: A cookery book detailing recipes using rats.
  Popular Hairstyles of the Landed Gentry: Tells of how to style hair in the latest fashions of the rich.
  Balms, Poultices & Healing Salves: A detailed guide to making such herbal balms and remedies.
  Topher's Spirit Guide: A tome that classifies most common types of ghosts and spirits.

magic_book
  A dog-eared guide to alchemy. By following its instructions one can turn 1 pound of lead into 2 pounds of gold over a period of 3 months.
  A very large tome containing the last 500 years of history of the area. By taking 10 minutes to consult this volume, you gain advantage on Intelligence (History) checks that pertain to regional events.
  This tome was the spellbook of a wizard obsessed with summoning pink ooze. As an action, twice per 3 day the owner of this book can summon 2 (1d4) black puddings, vibrant pink in color. At GM discretion, these oozes adhere to conjure elementals rules.
  This jade tome functions as a +1 spellbook. It has 14 (4d6) spells already copied within. Roll on the Spell Scroll tables on pg. 153 to generate the spells inside.
  This nondescript, well-worn book contains formulary and mathematics for the creation of a variety of useful magical items. Consulting it reduces crafting time for any magic item by half.
  This book is full of fell rituals and blood rites to extend one's life. The notes in the margins suggest the previous owner was aspiring toward lichdom.
  A history of the creation of the world. The first creature to read this book gains the ability to cast guidance at will with a range of 30 feet. This benefit can only be granted once every 100 years.
  Bound in gutstring with bones for its cover, this book contains anatomical drawings of dragons. Any creature who studies this book for 12 hours or more gains advantage on Intelligence (Arcana) checks to recall knowledge about dragons and any Intelligence (History) checks related to the history of dragons.
  A fragile volume containing folk tales about interactions with the fey. Reading it for more than 1 hour opens a portal to the fey wild, which sucks in the reader on a failed DC 18 Wisdom saving throw.
  Contained in the heavy slate pages of this book of stone bound with iron rings are the instructions to summon and bind a shield guardian. Reading it for 90 days grants you access to a shield guardian of your very own, as well as its amulet.
  This heavy-looking volume is lighter than air and contains calculations and formulae for travel to the elemental plane of air. By reading this book, you gain the ability to cast the following spells at will once per day: gust of wind, fly, conjure elemental (air only).
  The writing in this book is gibberish and has no meaning. However, it contains the trapped soul of a deceased person. At GM discretion, roll on the Object Occupants table on pg. 170 to learn more about this creature's personality.
  This ancient volume is disconcerting to touch, as if it's not quite there. It contains methods for entering the ethereal plane (though it does not recommend it). While in possession of this tome, a creature can cast the dream spell at will.
  This book contains ancient rites and ritual prayers to the gods in thin pages of parchment. Reading this tome for the first time, a creature must make a DC 16 Wisdom saving throw or suffer a form of short-term madness. On a save, the creature's Wisdom score increases by 2, to a max of 22.
  This very thin volume has a single page inside, upon which is written a series of numbers. Reading these numbers burns them into your mind, allowing you to consult them as a form of divination. You can cast divination once per long rest.
  What first appears as lists of spell components and alchemical compounds is actually the cookbook of famed arcane chef Duval Dupris. Reading it cover to cover grants expertise with cook's utensils.
  This journal is bound in what seems like skin from a man's screaming face. At GM discretion, reading this journal detailing a trip to the nine hells grants advantage on checks related to the hells.
  An ancient dusty volume that discusses the history of the undead and how each type was created. The pages themselves seem to scream and moan as they are turned. A creature who possesses this book has advantage on any Intelligence (Religion) checks to recall knowledge of the undead, as well as advantage to avoid undead spell effects.
  The ornate cover of this old and dusty volume belies the true nature of its contents. Once a spellbook of considerable power, it appears to have been handed from bard to bard, each adding their own tawdry tales of love and conquest in the margins. This tome can be used as a +2 spell focus (requires attunement).
  This grimoire is written in a runic language no longer spoken. Should a creature be able to translate the text in some manner, they learn a method to cast polymorph on themselves twice per day.









inn_type
  squalid 3cp/7cp
  poor 6cp/1sp
  modest 3sp/5sp
  comfortable 5sp/8sp
  wealthy 12sp/2gp
  aristocratic 2p/4gp

shop_type2
  Butchers shop ^8
  Slaughterhouse
  Smokehouse
  Brewer ^4
  Bakery ^8
  Apothecary ^4
  Carpenter ^8
  Fishmonger
  Tannery ^4
  Candle maker ^6
  Iron monger ^8
  Lodging house ^8
  Coach house ^4
  Jail house
  Militia post ^3
  Livestock dealer
  Small inn ^8
  Potter ^4
  Brothel
  Gambling den
  Barber ^8
  Town hall ^4
  Eatery ^8
  Accountant
  Cheese maker ^4
  Clothes shop ^8
  Bath house ^4
  Grocer ^8
  Livery stables ^4
  Messenger post
  Rat catcher
  Dairy
  Small temple

shop_type3
  Pastry shop ^8
  Communal oven
  Tobacconist
  Assay office ^8
  Jeweller ^8
  Large inn ^8
  Work house
  Orphanage
  Militia HQ
  Militia barracks ^8
  Council office ^8
  Tax house ^8
  Counting house
  Money lender ^8
  Auction house
  Horse dealer/breeder
  Exotic livestock breeder
  Riding school
  Animal feed retailer
  Prison
  Theatre
  Toy maker
  Herbalist
  Adventurer's post ^8
  Weapon smith ^8
  School
  Fighting school
  Slaver
  Mercenary guild
  Thieves guild
  Assassins guild
  Mage's guild
  College of music
  College of sorcery
  Academy of higher learning
  Law court
  Administration office
  Attorney of law
  Casino
  Bookshop ^8
  Enchanted item store ^4
  Potion vendor ^2
  Scribe
  Bookbinder ^3
  Library
  Enchanter
  Eatery (high end establishment)
  Diviner/Fortune teller ^5
  Arena
  Courier
  Antique/Curiosity shop
  Translator ^8
  Coal/firewood merchant
  Debt collector
  Large temple ^8
  Fire house
  Smelter
  Parchment/paper maker
  Mining guild
  Hunter's lodge
  Merchants guild
  Lord's residence ^8
  Artists shop
  Art gallery
  Museum

market_stalls1
  Dried fruit
  Fresh local fruit ^8
  Local produce ^8
  Live poultry ^3
  Fresh bread
  Roasted meat on wooden sticks ^2
  Woven baskets
  Fish
  Jars of honey ^3
  Jams and preserves
  Candles
  Cheese and milk ^4
  Farm tools
  Small cages and hunting traps
  Blacksmithing
  Soap
  Egg ^8
  Nuts

market_stalls2
  Clay pots and pitchers ^8
  Second hand furniture
  Wooden carvings
  Cheap jewellery fashioned with garnets and pearls
  Grains
  Small trained animals ^8
  Horses
  Leather and hide armour ^3
  Iron weapons
  Iron cooking supplies ^3
  Lanterns and oil
  Ropes and nets
  Cooking oils
  Animal feed ^4
  Fertiliser
  Bows and arrows ^3
  Cobbler ^2
  Wheels and rods for carts
  Cattle, pigs and goats ^5
  Butchered animals
  Kegs of ale ^2
  Silversmith
  Wooden toys ^2
  Wool ^7
  Reams of cloth
  Patched clothing
  Travel clothes and hats
  Fortune teller
  Lace and embroidery ^4
  Barrels and crates
  Furs
  Potions and oils ^2
  Minor enchantments
  Wooden staffs and simple weapons
  Seeds
  Healing herbs ^5
  Painted holy idols
  Leather and canvas bags ^3
  Dyes
  Messenger services ^2

market_stalls3
  Steel armour and shields ^2
  Silver holy symbols and idols
  Green bubbling beverages that ease aches
  Fresh flowers
  Raw gemstones
  Fine jewellery in a range of prices ^4
  Makeup
  Alchemical items
  Exotic fruit from neighbouring kingdoms ^3
  Spices
  Paper, ink and scroll cases
  Information
  Poison
  Acids and solvent
  Instruments ^4
  Travel gear
  Slaves
  Religious guidance
  Water clocks
  Fine instruments of copper
  Glass bottles and bowls ^3
  Odd arcane reagents
  Books and scrolls
  Locks and keys
  Money changing
  Chains and manacles
  Carts and wagons
  Random pieces of used armour ^4
  Rugs
  Woven tapestries ^3
  Taxidermy
  Holy water
  Fine perfume
  Scribe services ^3
  Fine knives ^4
  Fine clothes ^4
  Tobacco and smoking weed
  Fanciful pastries ^8
  Coffee and tea ^8
  Crabs, clams and oysters
  Banners of different guilds, adventuring parties and noble houses
  Exotic mounts

shop_appearance
  Clean.
  Newly built
  Stunningly decorated
  Well insulated
  Welcoming ^3
  Being renovated
  Newly re-roofed
  Beautiful stained glass windows
  Very clean windows
  Ornate architectural details
  Reinforced build
  Well secured
  Guarded by dogs
  Protected by guards
  Gold gilded details
  Ornate wood carvings
  Fences & gates
  Dirty
  Run down
  Abandoned
  Fire damaged
  Poorly decorated
  Needing repair
  Covered in dirt
  Damp
  Broken windows
  Boarded up
  Under construction
  Undergoing repairs
  Graffiti
  Structural problems
  Hole in the roof
  Painted in an awful colour
  Severe woodworm
  Subsidence
  Severe wood rot
  Bad water damage
  Broken door
  Missing door
  Missing sign
  Defaced sign
  Broken or missing knocker
  Missing doorknob
  Missing window bolt
  Splitting wood
  Shattered wood
  Missing beams or supports
  Chipped or crumbling bricks
  Missing bricks
  Rusty gate or fence
  Broken or missing gate door
  Overgrown lawn
  Overgrown hedges
  Ivy or vine overgrowth
  Brier overgrowth
  Overgrown tree
  Fallen tree
  Rotten fruit
  Rodent nests, burrows or warrens
  Bird nests or warrens
  Fire damage (minor, exterior)
  Fire damage (minor, interior)
  Fire damage (major)
  Flood damage
  Standing water
  Widespread mould
  Rotting structures
  Termite infestation damage
  Wasp bolt-hole
  Rust infestation
  Combat damage
  Destroyed furniture
  Broken interior walls
  Crumbling ceiling
  Collapsed ceiling
  Spongy floors
  Holes in floor
  Collapsed floor
  Fallen chandelier
  Tattered curtains
  Faded tapestries
  Rotten rugs
  Burned rugs
  Waterlogged rugs
  Interior plant overgrowth
  Fungal growth
  Persistent draught
  Howling draught
  Flooded cellar
  Layer of mud on floor and/or walls
  Silt deposits
  Faded silhouettes of stolen objects
  Defaced paintings/portraits
  Blood stains
  Corpse or skeleton
  Scrap metal
  Metal slag
  Scattered glass
  Spilled chemicals
  Persistent water leak
  Building sways with the wind
  Building lists toward one direction
  Collapsed room
  Collapsed chimney and/or fireplace
  Collapsed level/story
  Boarded windows
  Boarded doorways
  Chained doorways
  Recent footprints (humanoid)
  Recent footprints (animal)
  Squatters (beggars)
  Squatters (hostile)
  Squatters (indifferent/oblivious)
  Lingering scent {shop_smells}
  Fallen or missing shingles
  Fallen wall
  Entire wing is missing
  Sunken roof
  Hole(s) in roof
  Collapsed roof
  Sunken foundations
  Cracked or crumbling foundations
  Fallen tower
  Ruined magical/alchemical equipment
  Imploded wall
  Explosion imprint
  Burned silhouettes on walls
  Bizarre lights and/or movement
  Lingering wild magic field

shop_smells
  Perfume
  Incense
  Sweet pastries
  Fresh bread
  Smoked meat
  Roast meat
  Soup
  Fine ale
  Yeast
  Good wine
  Fruit
  Fresh fish
  Chestnuts
  Anointing oils
  Wax
  Flowers
  Sweet tobacco
  Spices
  Herbal scent
  Cinnamon
  Wet dog
  Sweat
  Cat urine
  Human urine
  Excrement
  Vomit
  Sickly tobacco
  Smelly feet
  Rotten fish
  Rotten fruit/veg
  Mould
  Smoke
  Earth/mud
  Rotten egg
  Cheap beer
  Vinegar
  Livestock
  Sewage
  Rotting meat

pub_names
  The Pungent Squelch.
  The Dog's Bollocks.
  The Journeyman's Rest.
  The Fly on the Wall.
  The Virulent Strain.
  The Bread of Life.
  The Silvered Arrow.
  The Cat's Eye.
  The Blacksmith's Anvil.
  The Breaded Ham.
  The Pheasant Plucker.
  The Golden Leaf.
  The Warriors' Way.
  The Olde Soldier.
  The Frog and Flute.
  The Rat and Razor.
  The Cat and Mouse.
  The Black Goat.
  The Bad Apple.
  The Black Dog.
  The Queen's Legs.
  The Book and Quill.
  The Flatulent Frog.
  The Dragon's Breath.
  The Leper's Arms.
  The Bloodied Stump.
  The Jaded Past.
  The Open Book.
  The Judge's Wig.
  The Serpent's Fang.
  The Jewelled Sceptre.
  The Poison Toad.
  The Strange Brew.
  The Wyrd of the Web.
  The Way of the Dragon.
  The Spellcaster.
  The Blackened Cauldron.
  The Warty Witch.
  The Armoured Knight.
  The Purple Lotus.
  The Gilded Rose.
  The Knacker's Yard.
  The Dove and Thorn.
  The Fat Hen.
  The Pork Sword.
  The Sword in the Stone.
  The Orc and Shield.
  The Headless Horseman.
  The Sutured Wound.
  The Kiss of the Scorpion.
  The Yellow Fever.
  The Brass Crab.
  The Giant's Arms.
  The Cobblers' Rest.
  The Brass Monkeys.
  The Evil Twin.
  The Petulant Parrot.
  The Hooded Man.
  The Turbulent Parsnip.
  The Angry Pup.
  The Arrogant Peacock.
  The Cheese and Pickle.
  The Severed Head.
  The Valiant Returns.
  The Darker Half.
  The Red Duck.
  The King of Woe.
  The Prince of Thieves.
  The Druids' Rite.
  The Oracle.
  The Burned Ember.
  The Ham Fist.
  The Roasted Sow.
  The Flute and Helmet.
  The Bolted Door.
  The Queen of Laughter.
  The Toad in the Hole.
  The Chicken in the Egg.
  The Rosy Glow.
  The Pie of Kings.
  The Winged Wonder.
  The Herbal Talon.
  The Lex Talionis.
  The Tanned Hide.
  The Pit of Skulls.
  The Prince of Darkness.
  The Last of Days.
  The Lost Hope.
  The Ghost Ship.
  The Itchy Mantle.
  The Greasy Scalp.
  The Enraged Squirrel.
  The Salty Cow.
  The Stinky Mongrel.
  The Dirty Fingernail.
  The Elven Spire.
  The Cowardly Hedgehog.
  The Lazy Dwarf.
  The Singing Cleric.
  The Grinning Skull.
  The Nag's Head.
  The Red Lion.
  The Masons' Arms.
  The Staff of Life.
  The Plough.
  The Horse and Groom.
  The Black Bull.
  The Woolpack.
  The King's Head.
  The Horse and Jockey.
  The Green Man.
  The Crown.
  The Rose and Crown.
  The Wheatsheaf.
  The White Horse.
  The White Hart.
  The Angel.
  The Fox and Hounds.
  The White Lion.
  The Castle.
  The Anchor.
  The Rising Sun.
  The Cross Keys.
  The Hare and Hounds.
  The Bell.
  The Black Swan.
  The Bay Horse.
  The Three Horseshoes.
  The Windmill.
  The Bull's Head.
  The Moon.
  The Green Dragon.
  The Stag.
  The Falcon.
  The Vine.
  The Grapes.
  The Butchers' Arms.
  The Travellers' Rest.
  The Bird in Hand.
  The Beehive.
  The Cherry Tree.
  The Unicorn.
  The Halfway House.
  The Six Bells.
  The Spread Eagle.
  The Malt Shovel.
  The Shoulder of Mutton.
  The Dog and Partridge.
  The Golden Fleece.
  The Punch Bowl.
  The Boar's Head.
  The Riverside.
  The Yew Tree.
  The Three Crowns.
  The Hope and Anchor.
  The Royal Standard.
  The Holly Bush.
  The Jolly Sailor.
  The Raven.
  The Coach House.
  The Old Crown.
  The Feathers.
  The Joiner's Arms.
  The Volunteer.
  The Stag's Head.
  The Highwayman.
  The Red Cow.
  The Old Mill.
  The Brewers' Arms.
  The White Bear.
  The Last Orders.
  The Priory.
  The Star and Garter.
  The Pack Horse.
  The Boathouse.
  The Two Brewers.
  The Crooked Billet.
  The Plume of Feathers.
  The Huntsman.
  The Salutation.
  The Blue Anchor.
  The Victory.
  The Elm Tree.
  The Waterfront.
  The Grey Horse.
  The Hop Pole.
  The Fox and Goose.
  The Brewery Tap.
  The Kingfisher.
  The Lamb and Flag.
  The Mermaid.
  The Manor.
  The Waterside.
  The Smugglers' Rest.
  The Tut and Shive.
  The Frog and Whistle.
  The Compass.
  The Queen's Head.
  The Blue Boar.
  The Oak.

pub_beer
  Dark Lager
  Longhouse Rye Beer
  Steam Beer
  Sour Beer
  Elven Summer Ale
  Lager
  Winter Beer
  Elven Pale Ale
  Strong Ale
  Amber Ale
  Brown Beer
  Foreign Extra Stout
  Oatmeal Stout
  Cream Ale
  Dortmunder Export
  Imperial Stout
  Robust Porter
  Dwarven Steam Beer
  Barley Wine
  Best Bitter
  Strong Pale Ale
  Pale Lager
  Black Lager
  Special Bitter
  Sweet Stout
  Blonde Ale
  Light Ale
  Koraduo Brown Beer
  Dunkel
  Cask Ale
  Fallwen Porter
  Elven White Lager
  Pale Mild Ale
  Dark Mild Ale
  Cocoa Beer
  Barrel-Aged Pale Beer
  Selonna Sugar Beer
  Porter
  Wheat beer
  Smoke Porter
  Dwarven Barrel-Aged Strong Beer
  Dunkles Bock
  Squash Beer
  Spice Beer
  Vegetable beer
  Stout
  Brown Porter
  Chili Pepper Beer
  Premium Pale Lager
  Red Ale
  Ale
  Imperial Red Ale
  Gnome Strong Pale Ale
  Rye Beer
  Malt Liquor
  Summer Ale
  Halfling Cask Ale
  Fruit Beer
  Golden Ale
  Brown Ale
  Old Ale
  Helles Bock
  Smoked Beer
  Strong Bitter
  Riker's Bock
  Pale Ale
  Dwarven Dark Malt Liquor
  Imperial Porter
  Dry Stout
  Barris Grain beer
  Field Beer
  Autumn Beer
  Extra Special Bitter
  Red Imperial Porter
  Low Town Bitter
  Session Pale Ale
  Sour Ale
  Halfling Lambic
  Coffee Beer
  Wood-aged Gnome Beer
  Cream Stout
  Pumpkin Spice Beer
  Barrel-Aged Strong Beer
  Elven Ordinary Bitter
  Sweet Summer Ale
  Honey beer
  Barrel-Aged Dark Beer
  Fruit Lambic
  Wild Beer
  Dark Helles Beer
  Barley Wine Ale
  Barrel-Aged Sour Beer
  Rogue's Doppelbock
  Dwarven Dark Lager
  Imperial Double Pale Ale
  Barrel-Aged Amber Beer
  Double Red Ale
  Dwarven Red Ale

boats_ships
  The Island Hopper
  The Singing Cricket
  The Leaky Teapot
  Honey Wicket
  The Witches Broom
  Gonzola
  Leaky Barrel
  The Salty Bird
  The Visiting Vision
  Red Storm
  Monday’s Lunch
  Henral
  The Ahoy
  The Billowing Leaf
  Father’s Pride
  The Smoking Betty
  The Missing Mate
  Angry Androf
  The Trash Barge
  The Slightly Intoxicated Mermaid
  The Water Wax
  The Young Maid
  The Sea Zipper
  Cloud Chaser
  Mountain’s Envy
  The River Arrow
  Green Guardian
  Black Bolt
  The River Bride
  The Minnow
  The Broken Pearl
  The Lost Devil
  The Angry Peacock
  Prestige
  The Shipwreck
  The Surly Lass
  The Dusty Porter
  The Yellow Tailed Falcon
  Goblin Breath
  The Falconer’s Wife
  The Underhanded Barmaid
  The Crusty Halfling
  The Great Swan
  Slim Shot
  The Ugly Gosling
  Island Breeze
  Blue Mess
  Veron Stars
  Dart
  Jumping Jerl
  Wave Quick
  Maggot
  Oak Lightning
  The Timely Teakettle
  The Musical Gale
  The Clean Spicket
  Silence
  The Blue Monkey
  The Gray Ghost
  The Fighting Crab
  The Unknown
  Old Lady
  The Albatross
  The Original Lightning
  The Dire Ostrich
  Lightning VII
  The Rusty Kraken
  Melody
  The Snap Crackle
  The Once and Future
  The Red Boot
  Aching Loganne
  The Archer
  The Pirate’s Niece
  The Abolitionist
  The Ugly Parrot
  The Wooden Lung
  The Captain’s Boyfriend
  The Poppy Biscuit
  The Acorn Tree
  The Seaweed Cutter
  The Backwards Breeze
  The Spiked Dragon
  The Royal Care
  The Trapped Muse
  The Czar
  The Magic Decanter
  Haunted Limb
  Uncle Sealegs
  Wave Crest
  The Seal
  The Greasy Shark
  The Indescribable Horror
  The Royal Madame
  The Friendly Fireball
  Sapphire of the Sea
  The Seasoned Cannibal


city_name
  Lancaut
  Exton
  Holt
  Gilston
  Wykenham
  Carswell
  Radley
  Gartree
  Monkton
  Kingsthorpe
  Grimston Hill
  Dunwich
  Kinwick
  Winwick
  Oston

location_name
  Dallington
  Oakham
  Bucklebury
  Osgodby
  Tidemills
  Hill End
  Clopton
  Denchworth
  Boxbury
  Doddington Thorpe
  Thorpe
  Tubney
  Oswaldbeck
  Sulby
  Yester
  Knave Hill
  Foston
  Little Lavington
  Fawcliff
  Moor Green
  Edenham
  Foscote
  Windridge
  Little Creaton
  Toxall
  Lowton
  Chilstone
  South Heighton
  Hewland
  Bilby
  Eye Kettleby
  Brickendon
  Endloss Ditton
  Mawsley
  Twyford
  Leesthorpe
  Childwick
  Thrupp
  Meering
  East Compton
  Worlingham
  Sauvey
  Holdenby
  Whitwell
  Oxwich
  Willaston
  Chilton
  Skinnand
  Over Colwick
  Shorne
  Pipewell
  Little Cowarne
  Broadmead
  Lower Bullingham
  Wyld Court
  Keythorpe
  Kinoulton
  North Cadeby
  Barrowby
  Lower Catesby
  Wakeley
  Betterton
  Falcutt
  Dylife
  Wistow
  Inglewood
  Willows
  Sudwelle
  Freake’s Ground
  Dembleby
  East Stoke
  Emberton
  Wickham
  Moorhouse
  Appletree
  Great Purston
  Papley
  Nether Catesby
  Torpel
  Little Gringley
  Falconhurst
  Easington
  Fleet Marston
  Woodcoates
  Wintringham
  Lubenham
  Wellbury
  Bricewold
  Dode
  Calme
  Swanston
  Midley
  Tiscott
  Wothorpe
  Elmesthorpe
  Hale
  Pendley
  Fairhurst
  Warby
  Imber
  Hound Tor
  Dodyngton
  Shalford
  Wain Wood
  East Lothian
  Lewarewich
  Mirabel
  Wootton
  Duns
  Bigging
  Hanstead
  Cestersover
  Wyck
  Bockenfield
  Newsells
  Swinbrook
  Faxton
  Alswick
  Winterborne
  Farringdon
  Bockhampton
  Woburn
  Garendon
  Tomley
  Bradgate
  Serlby
  Barpham
  Little Oxendon
  Alsthope
  Weston
  Danethorpe
  Flexmere
  Sempringham
  Shelthorpe
  Binderton
  Colsterworth
  Silsworth
  Woodcroft
  Alnesbourne
  Astwick
  West Burton
  Boughton
  Allhallows
  Tyninghame
  Widford
  Wheatfield
  Kingswood
  Hanby
  East Tanfield
  Thorney
  Shouldercoates
  East Wykeham
  Wyfordby
  Wansley
  North Rauceby
  Cold Newton
  Aspenden
  Hungarton
  Brockhall
  Bromkinsthorpe
  Winkerfield
  Wythmail
  Dengemarsh
  Avethorpe
  Plashes
  Milnthorpe
  Maydencroft
  Carlbury
  Mistwell
  Wolferlow
  Betlow
  Beesthorpe
  Medbourne
  Rayton
  Glendon
  Ingarsby
  Croscroft
  Cotton Mallows
  Slaughden
  Lolham
  Willesley
  Rempstone

squalid_district_name
  The Shambles
  The Rookery
  The Shades
  The Slums
  Shanty-town
  The Rat-Hole
  The Dens
  Devil's Acre
  The Piggeries
  The Warrens
  Dregs
  Hovel Quarter
  The Stink

low_district_name
  The Commons
  The Slopes
  The Old Town
  The Lower City
  The Old Quarter
  The Lower District
  The Old Borough
  The Old Ward
  The Old City
  The Old District

high_district_name
  The Heights
  The Spires
  The Gilded District
  The Noble Quarter
  The Upper City
  The Golden Mile
  The Royal District
  The High Street
  The Grand Avenue
  The Aristocrat's Row
  The Palatial Mile

artisan_district_name
  The Artisan's Quarter
  The Craftsmen's District
  The Guilds
  The Workshop District
  The Artisans' Row
  The Crafters' Lane
  The Makers' District

fishing_district_name
  The Docks
  The Waterfront
  The Fishermen's Wharf
  The Harbor District
  The Maritime Quarter
  The Coastal District

market_district_name
  The Market Square
  The Bazaar
  The Grand Market
  The Merchant's Row
  The Trading District
  The Commerce Quarter
  The Marketplace

temple_district_name
  The Sacred Quarter
  The Divine District
  The Holy District
  The Temple Row
  The Shrine District
  The Pilgrim's Quarter

university_district_name
  The University Quarter
  The Scholars' District
  The Collegiate District
  The Learned Quarter
  The Sages' District

castle_district_name
  The Castle District
  The Royal Quarter
  The King's Court
  The Palace District
  The Fortress District
  The Citadel
  The Keep
  The Royal Enclave

docks_district_name
  The Quayside
  The Harbour
  The Wharves
  The Portside
  The Landing
  The Anchorage
  The Stanchion
  The Watergate

shop_generator_prefix
  Fink &
  Imperial
  The Stout
  Rose's
  The King's
  Fox &
  Noble
  Sylvia's
  Sunrise
  The Corner
  Grigor's
  Royal Keep
  Crown &
  Ralina's
  The Village
  Golden Wares
  Boot &
  Marvolo's
  The Merry
  The Jade

shop_name_suffix
  Sons
  Toad
  Hammer
  Commodities
  Daughters
  Sundries
  Castle
  Finery
  Oddments
  Beetle
  Storehouse
  Coins
  Hearth
  Wheel
  Market
  Lantern
  Vendibles
  Stocks

squalid_shop
  Drug den
  Pawn shop/fence ^2
  Moneylender
  Gambling house
  Seedy flophouse ^2
  Criminal safehouse
  Witch/warlock's hovel
  Butchers shop
  Slaughterhouse
  Smokehouse
  Brewer
  Tannery ^2
  Livestock dealer
  Potter
  Brothel
  Gambling den
  Lodging house ^2
  Rat catcher
  Small temple
  Loan Shark
  Fence
  Pawn Shop ^4

low_shop
  Filthy bakery
  Used adventuring gear
  Dead body collector
  Pawn shop/fence
  Moneylender
  Manure collector
  Tannery
  Back-alley chirurgeon
  Ratcatcher
  Fishmonger
  Gambling house
  Graveyard
  Stocks and pillories
  Warehouses/sheds
  Barber ^2
  Eatery ^8
  Grocer ^4
  Livery stables ^2
  Dairy
  Work house
  Prison
  Scribe
  Loan Shark
  Fence
  Cheese maker
  Clothes shop ^4
  Bath house
  Pastry shop ^2
  Communal oven
  Money lender ^2
  Pawn Shop ^4
  Orphanage
  Tobacconist
  Coal/firewood merchant
  Fire house
  Smelter

artisan_shop
  Fine tailor
  Glassblower
  Jeweller
  Apothecary
  Artist
  Scribe
  Guildhall
  Goldsmith
  Master blacksmith
  Antiques and curios
  Modest temple
  Town hall ^8
  Accountant
  Cheese maker ^8
  Clothes shop ^8
  Bath house ^8
  Messenger post
  Assay office ^8
  Jeweller ^8
  Large inn ^8
  Auction house
  Horse dealer/breeder
  Exotic livestock breeder
  Riding school
  Animal feed retailer
  Theatre
  School
  Adventurer's post ^8
  Weapon smith ^8
  Toy maker
  Militia HQ
  Militia barracks ^8
  Council office ^8
  Tax house ^8
  Counting house
  Herbalist
  Artists shop
  Mercenary guild
  Thieves guild
  Assassins guild
  Mage's guild
  Merchants guild
  Parchment/paper maker
  Mining guild
  Hunter's lodge

market_shop
  Dried fruit
  Fresh local fruit ^8
  Local produce ^8
  Live poultry ^3
  Fresh bread
  Roasted meat on wooden sticks ^2
  Woven baskets
  Fish
  Jars of honey ^3
  Jams and preserves
  Candles
  Cheese and milk ^4
  Farm tools
  Small cages and hunting traps
  Blacksmithing
  Soap
  Egg ^8
  Nuts
  Clay pots and pitchers ^8
  Second hand furniture
  Wooden carvings
  Cheap jewellery fashioned with garnets and pearls
  Grains
  Small trained animals ^8
  Horses
  Leather and hide armour ^3
  Iron weapons
  Iron cooking supplies ^3
  Lanterns and oil
  Ropes and nets
  Cooking oils
  Animal feed ^4
  Fertiliser
  Bows and arrows ^3
  Cobbler ^2
  Wheels and rods for carts
  Cattle, pigs and goats ^5
  Butchered animals
  Kegs of ale ^2
  Silversmith
  Wooden toys ^2
  Wool ^7
  Reams of cloth
  Patched clothing
  Travel clothes and hats
  Fortune teller
  Lace and embroidery ^4
  Barrels and crates
  Furs
  Potions and oils ^2
  Minor enchantments
  Wooden staffs and simple weapons
  Seeds
  Healing herbs ^5
  Painted holy idols
  Leather and canvas bags ^3
  Dyes
  Messenger services ^2
  Steel armour and shields ^2
  Silver holy symbols and idols
  Green bubbling beverages that ease aches
  Fresh flowers
  Raw gemstones
  Fine jewellery in a range of prices ^4
  Makeup
  Alchemical items
  Exotic fruit from neighbouring kingdoms ^3
  Spices
  Paper, ink and scroll cases
  Information
  Poison
  Acids and solvent
  Instruments ^4
  Travel gear
  Slaves
  Religious guidance
  Water clocks
  Fine instruments of copper
  Glass bottles and bowls ^3
  Odd arcane reagents
  Books and scrolls
  Locks and keys
  Money changing
  Chains and manacles
  Carts and wagons
  Random pieces of used armour ^4
  Rugs
  Woven tapestries ^3
  Taxidermy
  Holy water
  Fine perfume
  Scribe services ^3
  Fine knives ^4
  Fine clothes ^4
  Tobacco and smoking weed
  Fanciful pastries ^8
  Coffee and tea ^8
  Crabs, clams and oysters
  Banners of different guilds, adventuring parties and noble houses
  Exotic mounts

high_shop
  High-end tailor
  Master jeweller
  Renowned apothecary
  Famous artist
  Scribe to the nobility
  Guildhall of the most prestigious guild in town
  Goldsmith to the royal family
  Master blacksmith with a royal warrant
  Wealthy tavern
  Manor house
  Wealthy shop
  City Watch outpost
  Fighting school
  Administration office
  Attorney of law
  Casino
  Bookshop ^2
  Enchanted item store ^2
  Potion vendor ^2
  Bookbinder ^3
  Library
  Enchanter
  Eatery (high end establishment)
  Antique/Curiosity shop
  Translator ^8
  Large temple ^8
  Lord's residence ^8
  Art gallery
  Museum

fish_shop
  Pawn shop/fence
  Seedy flophouse
  Criminal safehouse
  Witch/warlock's hovel
  Slaughterhouse
  Smokehouse
  Tannery ^4
  Brothel
  Lodging house ^4
  Rat catcher
  Small temple ^8
  Pawn Shop ^6

temple_shop
  High-end tailor
  Renowned apothecary
  Famous artist
  Scribe to the nobility
  Wealthy tavern
  Manor house
  Wealthy shop
  Attorney of law
  Bookshop ^8
  Enchanted item store ^2
  Potion vendor ^2
  Bookbinder ^3
  Library
  Eatery (high end establishment)
  Translator ^8
  Large temple ^8

castle_shop
  High-end tailor
  Master jeweller
  Scribe to the nobility
  Goldsmith to the royal family
  Wealthy tavern
  Manor house
  City Watch outpost
  Fighting school
  Enchanted item store ^2
  Potion vendor ^2
  Eatery (high end establishment)
  Antique/Curiosity shop
  Large temple ^8
  Lord's residence ^8
  Art gallery
  Museum

dock_shop
  Drug den
  Pawn shop/fence
  Moneylender
  Gambling house
  Seedy flophouse
  Criminal safehouse
  Potter ^4
  Brothel
  Gambling den
  Warehousing ^8
  Lodging house ^8
  Rat catcher
  Small temple ^8
  Loan Shark
  Fence
  Pawn Shop ^6

university_shop
  High-end tailor
  Renowned apothecary
  Famous artist
  Scribe to the nobility
  Wealthy tavern
  Manor house
  Wealthy shop
  Attorney of law
  Bookshop ^8
  Enchanted item store ^2
  Potion vendor ^2
  Bookbinder ^3
  Library
  Eatery (high end establishment)
  Translator ^8
  Large temple ^8

shop_known
  Ancient, beloved owner
  Buying anything of value
  Charging non-regulars extra
  Being a Thieves' Guild front
  Resident cat, Crumpet
  Password required to enter
  Free ale with a purchase
  Heavily armed bodyguards
  Paying top coin for curios
  Secret room behind shelf
  Fencing illicit goods
  Ringing a gong at every sale
  Goods from distant lands
  Shoddy and cheap items
  Accusing customers of theft
  All goods are dyed blue
  Owner's talking parrot
  Famous bronze imp statue
  Being haunted
  Aggressive rodent problem
  Shouting at customers to buy more
  Offering discounts to attractive customers







road_encounter
  A passing mail-courier’s horse gets spooked and throws courier. The courier dies in the fall, and the mail bag has the seal of the King’s Head of Intelligence.
  A travelling blade-sharpener offers a special deal to the PCs to improve their magic weapons, but later the PCs discover the magic in the blades seems to be gone.
  On a large road, a ship on wheels manned by eccentric road-pirates assaults the party.
  The group comes across a three-way traffic jam at a fork in the road, and three arguing wagon masters refusing to give way.
  A desperate man offers to sell the group a “magic” acorn for a pittance. If the PCs buy it, the man runs away laughing madly, shouting “I’m free! Free at last! You poor fools!”
  After sleeping on the roadside, the party wakes to find their entire camp surrounded by dew-spangled spider webs, yet they are unharmed.
  The road surface starts to buck and writhe, trying to throw the group off. Is it an earthquake or a territorial elemental?
  Very small kobold/goblin/not-really-threatening humanoid wearing an old carpet as a cape leaps into the path and demands tribute as King of the Road.
  An enormous dragon lands on the road in front of the group. It asks for directions to the capital, gives them a generous tip and then flies off with a loud proclamation of intending to raze it to the ground.
  The group passes an old farmer and his nag heading toward the same town the PCs are heading toward. He gives them a wave and a gap-toothed smile. A little while later they pass him again. And then again….
  Flowers by the roadside turn their heads to follow the party, and they’re getting larger.
  A white stone road cuts neatly through a festering swamp. The stones are carved with protective sigils and regular dire warnings not to leave the path. Then in the middle of the swamp the road ends, the stones shattered and blackened.
  A winding path through a swamp leads repeatedly to stinking black pools and treacherous mud-pits.
  On an icy slope, someone has poured water down the trail turning it into a near-frictionless slide into a gulch/chasm/pit/cavern.
  In a mountain pass, someone has built a high wall across the path the party was following, forcing them instead into the mouth of a nearby cave.
  Fog across the road hides a sudden drop into a chasm.
  A huge nest has fallen from a tree on the side of the road, and the strange-looking eggs within seem on the verge of hatching.
  An earthquake drops the group and a large section of road into a sinkhole or chasm.
  The group comes to a wilderness trading post on the trail. The cantankerous old-timer who runs it offers a bounty for scalps.
  An otherwise empty stretch of highway, with two rival taverns facing each other across the road. The publicans try to outdo each other loudly on the discounts and benefits of their respective establishments to the party. Both seem desperate for customers.
  A robed figure on a runaway contraption, yelling for help.
  A wayfarer’s tavern with the windows and doors boarded up from the inside and horrible claw-marks on the outside.
  A huge road sign at a crossroad giving distances and directions to hundreds of places, some the party has never heard of.
  In dense wilderness where only the road is passable, the group finds the trail covered in increasingly thick slime. The PCs eventually find themselves stuck behind an enormous and slow-moving snail.
  A knight bearing the crest of a local lord is found rusted into his armour, in an uncomfortable position, by the side of the road.
  A belligerent drunk wanders into the group’s path demanding alcohol, money and to marry their horse.
  A meteorite crashes to earth in the middle of the road.
  The party find a child at the base of a tree trying to rescue a cat caught high in the branches. While the party’s attention is diverted upward the little pickpocket goes to work.
  A pleasant and polite gentleman in a smart carriage stops the party for directions and news of the road. But in the trunk lashed to the back the party hear children crying.
  A group of bandits arguing and blaming each other over the chest of something useless they just stole (feather dusters, mouse-traps, fishing weights).
  A prison work-gang and their guards are rebuilding part of the road. The convicts use the arrival of the party as an opportunity for escape.
  A cave next to a mountain trail has a merry fire crackling and a pot of stew bubbling away, but no sign of occupants.
  The party find a trail of gold coins leading off the path.
  A majestic elk sprints past with something golden caught in its antlers.
  On a wooded trail, just around a turn in the road, a rope has been strung between two trees high enough to catch a mounted rider. A horse, still saddled, grazes nearby and there’s blood smeared on a nearby tree.
  The party starts finding neatly severed body parts discarded on the road. An ear, then a finger, then a tongue.
  A table on the roadside holds a large basket of fresh vegetables. A sign reads “1 copper a bunch: honesty is a virtue!”
  On a desert trail, an oasis appears with several recently-dead animals lying around the water hole.
  At a river with slightly submerged ford, a sign reads “Ware the Greenteeth.”
  At a rushing river, a ferry can be seen midstream with a vicious battle happening on deck.
  At a river, a sign reads “Bridge out” but the bridge is still there and seems intact.
  In an area of volcanic springs, clouds of venting steam and jets of boiling sulfurous water burst from the ground.
  When at the bottom of a steep sloping road, there is a rumble and a large boulder comes rushing toward the PCs. When the rock finally stops, the group spots old bloodstains and a kill-score carved into the side.
  After camping for the night on the roadside, the party wakes to find a field of sweet-smelling flowers has grown up around them.
  A mud slide threatens to sweep the party into a swollen river.
  A sudden rain of fish, frogs, worms or other creature.
  A young dog or other creature decides to playfully follow the party.
  A large, iron-banded chest lies half buried in mud, as if it fell off the back of a wagon.
  A small group of kneeling, lifelike statues, frozen in fear or supplication.
  A toll-booth with guard and an official Inspector who wants to confiscate something strange or valuable.
  A sign says, “Kittens: Free to Good Home” with a box beneath. There is one kitten left.
  A row of severed heads on spikes and a warning sign claiming, “Dis Rode Belong Garg”
  A stand-off between a squad of soldiers and a band of political rebels.
  A band of children, hungry and footsore, who earnestly claim to be on a crusade to the Holy Land.
  Unusually verdant and overgrown patch of road, with bandits wrapped up in vines begging to be let free.
  The road is filled with giant potholes. Sounds of scratching and scuffling come from one of the pits.
  A roc/dragon/flying carpet speeds overhead and drops something glinting into the wilderness near the road.
  A dancing cloud of will-o-the-wisps or fireflies leads a hypnotized traveller.
  An old woodsman, with a broken axe nearby and a hastily bandaged and bleeding leg, slumps against a tree trunk.
  A travelling salesman and his gaudy cart, complete with fast-talking snake-oil offers and a dancing monkey.
  A large chunk of ornate (and possibly foreign) masonry blocks the road, with signs it recently fell out of the sky.
  A new sign pointing down a narrow path off the road saying, “Fresh Berries – Pick Your Own.”
  A wagon bogged in the mud, with a cursing merchant and harried teamsters.
  The road forks around a monolith, statue or war memorial. The stone has been recently daubed with occult symbols in fresh blood.
  A pile of discarded clothing and equipment on the verge, and laughter coming from the trees nearby.
  A lost child cries on the side of the road.
  A pack of starving wolves fights over the body of a lone traveller.
  A band of lepers or plague-carriers on their way to a nearby spring with supposed healing properties.
  A widow/widower and children planting a tree/flowers for their loved one, who died on the road.
  A group of drunk young noblemen pass the PCs, racing their expensive horses.
  A group of {species} pilgrims travel to a holy site.
  A memorial avenue of trees commemorates a long-forgotten war.
  A burnt-out toll-station, with the murdered bodies of the toll inspectors still scattered around.
  A fallen-tree bridge over a stream turns out, while the group is halfway across, to be a mired treant.
  The group meet an uncannily similar party of adventurers going the opposite way.
  The group is followed from the last town by a band of children who want to go on adventures with them.
  A battle-scarred and seasoned warrior crashes from the undergrowth and screams, “Run! For the love of the Gods! They’re coming!” and races terrified down the road.
  A zombie or other mindless undead is stuck in a hole on the side of the road. It is wearing the signet ring and other identifying equipment of a nearby ruler’s only child the party knew and liked.
  After defeating a large but perfectly mundane animal on the road, the corpse hisses steam and opens up and a rather sweaty and oil-streaked gnome crawls out.
  A paved road recently rebuilt with stone from nearby ruins. The group notices some stones are carved with odd patterns. Put together, the patterns make up a mural showing the location of a valuable treasure/dungeon/great monster.
  The road widens at the top of a hill into a large, paved plaza covered with stone statues. Two nearby giants ask the group if they’d mind stopping for a while and being a part of their chess game, as they’re missing some pieces.
  A surly man with a crossbow sits at the mouth of a covered bridge, the only river crossing for miles. He offers to guide the group safely through the short, straight, empty tunnel of the bridge for a fee.
  A ranger stops by the group’s camp one night and gives them advice on the trail ahead, places to camp and a tavern where they can get good rates if they mention his name. All his advice is good, but when they mention his name at the tavern, they’re told he died years ago on that very road.
  A pompous noble stands in the road, flogging and shouting at his injured horse.
  The party see a mass of crows circling above a known safe haven/tavern/camping spot that lies just ahead, and the smell of smoke and roast meat hangs in the air.
  A tall rock overlooks the road. As the group passes, a filthy hermit babble prophecies and throws rotten food at them.
  An elderly woman wanders the verge of the road, bent double and carrying a basket of foraged produce. She asks the party for a ride on their wagon to ease her tired feet.
  A pay-wagon heading for a nearby army trundles past, with not quite enough guards to challenge the party.
  A rider stops to ask for hurried directions. The rider thanks them and races ahead. When the PCs reach the next town, fresh Wanted posters are being nailed up with the group’s faces sketched on and accusations of heinous crimes in the last town back. The locals all stare at the PCs.
  The group arrives late at night at a tiny village straddling the road. They secure accommodation and food from the friendly locals and fall asleep. In the morning the village is empty and ruined, as if abandoned years ago.
  The group leaves a town they’ve helped/saved/rescued and head off down the road. Just out of town the grateful locals jump out and surprise them with an unexpected picnic celebration.
  A voice from the bushes by the road shouts, “We have you surrounded, Torvik! Your villainy ends here!” But who’s Torvik?
  A young woman with a crying baby wrapped in a shawl is hotly pursued by a band of rough-looking men.
  The group comes upon the scene of a recent grisly carriage accident, or witnesses it ahead of them on the road.
  After one of the group treads in something sticky, animals start following the character with curious interest.
  A beehive buzzes angrily on a branch overhanging the road, and beneath it a figure lies gasping and puffy with dozens of stings.
  A band of foreigners/non-humans in garb the group don’t recognise halt the PCs and ask urgent questions in a language nobody understands.
  A member of a hostile race flags down the group with a white cloth and offers to surrender to them and reveal secrets in exchange for protection from its own people.
  Someone has scattered caltrops across the road.
  The road is rigged with an obvious and clumsily/hastily made trap. The PCs can hear drunken giggling from the undergrowth.






encounter_day
  A wagon rumbles along the street, splattering mud onto the legs of those it passes.
  A gaggle of children play in the streets. Their joyous shouts rise above the general hubbub of daily life.
  Two servants stagger past, carrying a heavy crate between them.
  A flock of sparrows swoops and wheels overhead. The shouts of shopkeepers and artisans hawking their wares reach the party’s ears.
  A bleary-eyed reveller—clearly hungover and worse for wear—stumbles along the street. They may be going home, or they may be looking for their next drink.
  Light rain falls over the town.
  A small knot of townsfolk stands in a rough circle, chatting about local events. As the characters draw near, the townsfolk fall silent.
  A skinny and filthy dog—probably a stray—lollops down the street.
  A farmer’s son pushes a wheelbarrow crammed full with vegetables along the street. The food is destined for a nearby tavern.
  Four guards wander along the street. They seem slightly “rumpled” and unmotivated.
  A wagon piled high with boxes and barrels rumbles along the street. Four mercenary guards—tired by their demeanour—flank the wagon and its merchant driver.
  A hawk soars high above the town. As it swoops down, the other birds in the sky scatter.
  The clamour of bells ringing at one of Dunstone’s churches rises over the usual street noises.
  Five dirty and dishevelled human adventurers stagger into town, having spent a harrowing few days north of the Selka in the Mottled Spire. They do not want to talk about their experiences.
  An urchin tugs at one of the character’s sleeves and tries to entice them into a nearby tavern. (The boy gets a copper for every customer lured inside).
  Two townsfolk snigger as the characters pass. Keen-eared characters hear one of them mutter about the “Scions of Delthur”.
  Roll twice on this table and combine the results.
  A brash man stands outside a shop shouting at the merchant inside. It is obvious the two disagree about the quality of the shop’s wares.
  Dark clouds pregnant with rain hang above the town, casting everything into gloom. The gloom seems to affect the townfolks’ moods.
  A street trader pushes a barrow holding a barrel along the road. He is selling weak ale by the mug and is happy to talk to his customers while they drink. He knows several rumours. The cries of traders hawking their wares at the distant Trade Market are softened almost into melody by the time they reach the characters.
  A character overhears a snatch of conversation between two townsfolk. They clearly hear the phrases “demon worshippers” and “Rekolas”.
  The street is crowded with folk, and going is slow.
  A priest of Conn strides swiftly through the crowd—they clearly have important business somewhere.
  A patrol of six mounted warriors heads south to patrol the Great South Road, connecting the town to the rest of the duchy.
  An ornate coach pulled by two beautiful horses rolls past. The coach has a driver and a guard. Curtained windows hide the identity of whoever rides within.
  A small crowd has congregated on a street corner to listen to an itinerant preacher. The dishevelled man seems obsessed with the “lurking shadows that plot our doom.” Many of the crowd are openly tittering at him.
  A cat carrying a dead rat stalks from an alleyway.
  An old man totters slowly along the street. He leans heavily on a stick and stops often.
  Three townsfolk are deep in conversation and oblivious to the obstruction they are causing on the street.
  A broken barrel lies on its side, oozing the dregs of its contents into the street.
  The clang of metal on metal—blacksmiths and so on at work—drowns out most other sounds.
  Three large crows perch on a nearby roof and watch the townsfolk going about their business.
  A wagon has got one of its wheels stuck in a deep pothole. It blocks the street, and the anger of the folk stuck behind it is palpable.
  Three children play with a large hound. It is hard to say who is having more fun.
  An old, one-legged man leans heavily on wooden crutches as he makes his way along the road.
  Wooden scaffolding festoons the front of a building. Several labourers swarm over the scaffold while an older, fatter man directs them from below.
  A ragged beggar sits by the road, mumbling to himself. A few coppers gleam in his begging bowl.
  Wan sunshine glimmers on Dunstone’s roofs.
  Two stray dogs nose their way along the street.
  The heady aromas of cooking, sweat, and excrement— the normal smells of town life—fill the air.
  The sound of sobbing comes from a nearby window.
  A mother attempts to herd her three young, exuberant children as she goes about her chores.
  A wagon piled high with rubbish makes its way slowly down the street. Occasionally, it stops, and townsfolk add more junk to the load.
  An itinerant trader—pack bulging with goods—knocks on a nearby door.
  Cries of “Stop Thief!” fill the air.
  A pack of grubby urchins begging for coins surround a well-dressed merchant.
  A pack of grubby urchins begging for coins surrounds the characters, latching onto them and refusing to be easily shaken off.
  Open barrels filled with rainwater stand under the eaves of nearby houses.
  A shepherd herds six sheep toward their doom.
  Two men stare at the party as they pass.
  Bright sunlight bathes the town.
  Voices suddenly raised in anger herald the start of an argument between two street traders.
  Deep ruts line the earthen street.
  A sudden gust of wind pushes leaves and rubbish down the street.
  An old woman stands in the middle of the street, shaking her fist at the sky. She seems angry and not a little mad.
  An obvious newcomer to town stops the party to ask for directions to the Gilded Swan.
  A wanted poster nailed to a wall—depicting a scowling dwarf—flutters in the breeze.
  A street urchin unsubtly watches the characters. They could be fascinated by adventurers, or they could be the lookout for a pickpocket gang.
  A wagon carrying several dressed stone blocks scores deep ruts in the muddy road.
  Four members of the watch push through the crowd.
  A mounted warrior—obviously wealthy and important— trots along the road accompanied by six well-armed and alert guards. Townsfolk get out of their way.
  The weather alternates between periods of bright sun and rain, much to the annoyance of many.
  Four women carrying baskets filled with clothes make their way toward the Selka River.
  A man, pushing a barrow piled high with firewood, staggers past the party.
  Two hunters, carrying a deer slung on a pole, make their way to the nearest butcher shop.
  A servant dashes through the crowd.
  A dog lies motionless in the mouth of a shadowy alley.
  Sunlight glimmers off the puddles left by a heavy bout of overnight rain.
  A caged wagon rolls past. The cage holds several despondent men.
  Heavy rain lashes the streets, quickly turning them into muddy morasses.
  An elderly couple help each other along the street.
  An old woman slips and falls. She cuts her head on a stone, and a small crowd quickly gathers to help.
  A child—her face streaked with tears—sits on the side of the road.
  Laughter and cheers come from a crowd surrounding a street acrobat. She’s good but not earning much coin.
  A worn statue of a warrior stands on a small plinth at the side of the road. Children play at its base.
  Softly jangling wind chimes dangle from a nearby porch.
  A woman tries to sell wood carvings from a small handcart. The carvings are exquisite, and some depict imaginative, fantastical creatures.
  Large brown rats scavenge amid a pile of rubbish.
  Wisps of smoke drift across the street.
  A priest of Conn—in full regalia—strides along the road, trying to avoid any puddles or muddy spots.
  The sun emerges from behind a cloud to bathe the town in brilliant, warming light.
  A pile of charred timbers show where a fire raged at some point. The adjacent building looks like it has been recently repaired.
  A street crier loudly proclaims that cheap ale can be had at the Delthur’s Folly tavern.
  A church bell tolls to mark the time.
  The houses and businesses here seem particularly well looked after.
  The buildings here look old and tired. A character thinks they catch a fleeting glimpse of an old friend among the crowd.
  A wagon runs over a distracted man who crosses the street at the worst time. Without immediate care, the man will die.
  Oblivious townsfolk gossip about recent events. The characters learn one rumour.
  The street is busy, and the characters must weave their way through the crowd.
  The harsh crash of blade on blade breaks out. Everyone nearby freezes and then moves rapidly away from the sound of battle.
  One of the characters suddenly gets the distinct feeling that they are being watched.


squalid_encounter_day
  Rain and Mud: It begins to rain heavily. After an hour or so, the Shambles’ alleys and streets are transformed into stretches of cloying, churned-up mud.
  Screaming: As the characters pass a dark alleyway, a scream erupts from its dingy depths. A mugging (or worse) could be taking place, or this could be a ploy to lure do-gooders into an ambush. Nearby townsfolk studiously ignore the screams.
  Leaping Thief: One of the characters looks up, just as a thief leaps from roof to roof across the alleyway. Seconds later, another figure—maybe anccomplice or the thief’s victim—takes the same leap.
  Ragged Children: A pack of rag-clad, mischievous children runs through the streets, playing a game of tag. The children shout, laugh and caper. They could just be having fun, or they could be using the game as cover for a spot of light thievery.
  Stray Dogs: Three mongrel stray dogs nose among the rubbish and filth for scraps of food. All three are thin and hungry. They happily eat from the characters’ hands.
  Dogs and Rats: Rats scurry about in the shadow of an alleyway, looking for food. Suddenly, a stray dog bursts into the alleyway barking viciously. It darts after the rats, which scatter. Chaos ensues as the barking dog chases the fleeing rats through the crowd.
  Bloody and Bruised: A young man—Hilppa Viljakka (NG male human guard)—staggers from an alleyway. He has been stripped naked and beaten. He explains he was hunting for  when he was set upon. Hilppa is the son of the wealthy merchant Pirkko Viljakka, who would be grateful for her son’s safe, and discrete, return.
  Cowardly Thief: A cowardly thief—Mauno Toiva (NE male human spy)—attempts to lift a character’s coin purse. If spotted, he immediately flees. If caught, he surrenders immediately and begs for mercy. Mauno could possess information the characters need, and he gladly exchanges it for his freedom.
  Fire: Smoke billows from the window of a tenement building—a cooking fire has got out of control. As some people flee the building, other folk rush to help extinguish the blaze before it spreads. This might be nothing more than an accidental fire, or it could be part of a nefarious scheme.
  Fight: As the characters pass a seedy tavern, its door bangs open and two dirty, leather-clad patrons burst forth, thrown into the street by a hulking, balding man wearing a dirty apron. The man shouts, “And stay out”, before slamming the door shut. A wave of faint laughter comes from the tavern.
  Street Walker: A scantily clad, beautiful woman—Rekiina Rautia (CN female human commoner)—beckons to a character from the mouth of a shadowy alley. She offers company for only 1 silver coin. Her offer could be genuine or she could be trying to lure a naive mark into the alley, wherein lurk her burly associates.
  Daytime Drinking: Four unemployed labourers sit against a wall, passing a flask of sour wine between them. They laugh coarsely as the characters pass—whether at the party or at some crude joke is hard to say.
  Refreshments: A burly man pushes a handcart through the throng; this is Villi Ampuja (N middle-aged male human commoner). He sells weak ale for a copper a cup and rumours for a silver apiece.
  Band of Toughs: Four dirty men, clad in leather armour and carrying swords at their belts, swagger along the street. Other pedestrians get out of their way; they are surprised if the characters do not act in a similar fashion.
  Argument: Two men stand on a corner arguing furiously about some personal slight. The two are exceptionally agitated and come to blows just as the characters pass by; one of the pair falls into the party after the other punches him. Is this a genuine argument or a distraction?
  Dark Clouds: Dark clouds loom over the city, casting the Shambles’ lanes and alleyways into even deeper gloom.
  Stuck Wagon: A wagon has got stuck at a narrow point in the road and the carter is failing to manoeuvre it clear. As he swears and curses, the horses sense his anger and get increasingly agitated. All the while, a smattering of beggars, street children and petty thieves drift closer, ready to pinch whatever is in the cart.
  Two Men and a Chest: Two men carry a chest draped in a blanket along the street. The two are moving swiftly and with purpose, but a perceptive character may detect that they are nervous. Their burden seems heavy; almost anything—gold, silver or even a body—could fill the chest.
  Black Crows: Three jet-black crows squat upon the roof and seem to be watching the pedestrians below with great intensity. They take particular interest in anyone carrying or wearing shiny things such as metal armour.
  The Stench of the Slums: The smell of unwashed bodies, excrement, cooking and other, unidentifiable smells hangs heavily in the air. The locals pay no mind to it, but visitors find the stench almost overwhelming.

low_district_encounter_day
  The Crush: The streets are filled with people. In some places, the crush is intense, and the party’s progress slows to a crawl. Many of the other people on the street are distracted or irate.
  Curse the Wind: A strong, northerly wind whistles through the streets, blowing up dust, leaves and rubbish. It tears at folks’ clothes, and the temperature drops precipitously. Dark clouds, pregnant with rain, on the horizon rush toward Languard.
  Woman, Accosted: An attractive woman, Lusia Vesivalo (CN female human commoner), wearing revealing clothes, lounges casually against a wall opposite a tavern. A drunk man staggers out of the tavern and across the road. She smiles widely at his approach, but he grabs her roughly by the arm before dragging her into an alley.
  Dogs: Two stray dogs nose about in the mouth of a shadowy alley. Suddenly, both bolt into the busy street. A character wise in nature’s ways can tell that something in the alley scared the dogs.
  The Watch, Aboard: Four members of the watch patrol the street. Their equipment is threadbare, and their morale is low. Here to act as a deterrent, they only make the minimum effort to stop thievery and the like. None will risk their lives.
  Manure Cart: A cart piled high with manure edges its way along the street. Anyone who can gives the foul-smelling, filthy cart a wide berth.
  Broken Wagon: A wagon blocks the street; it is missing one wheel, and traffic is snarled up both behind and in front. The teamster, Esko Toivio (N middle-aged male human commoner), is vainly trying to reattach the wheel but cannot do it on his own. He is grateful for any help the characters give him and relates one rumour from "Whispers & Rumours” in thanks.
  Stop, Thief: Cries of “Stop Thief!” precede the sudden arrival of a skinny urchin clutching a loaf of bread. The young boy, Heikki Vaania (CN young male human spy), rushes past the party. Two members of the watch are in lacklustre pursuit.
  Drunken Warrior: A drunken warrior, Joosef Uljas (N male human veteran), staggers into a character. He then vomits copiously. Joosef is morose. Just yesterday, a rival stole a treasure map from him. The map shows the location of a hidden hoard buried on one of Hard Bay’s many nameless isles. If the characters seem sympathetic, Joosef offers to split the hoard with them if they help retrieve the map and find the treasure.
  To the Moaning Halls: A street urchin, Edvard Ihamuoto (N young male human commoner), approaches the party. He works for Marja Sianio, who owns Marja’s House of Sighs (location L8). Edvard gets a copper for every customer he lures to the establishment. His knowledge of “adult matters” is surprisingly comprehensive, and his language is foul.
  Beggars: Realising the characters are adventurers and, therefore, wealthy beyond the norm, a ragtag group of beggars gather about the party and follow them around, begging for aid and spare coins.
  Rakes: Three men lounge outside a low-class tavern, swilling ale. All wear light armour and bear a rapier or short sword. They watch the passing townsfolk intensely. Perhaps they are bored, or perhaps they are waiting for their next victim to present themselves.
  Hustle and Bustle: The street is alive with folk going about their business. Several street vendor hawk their wares filling handcarts, while beggars reach out their hands imploringly for spare coins. A few stray dogs dart about while, here and there, street children play in the mud and the shadows.
  Laughing Children: Two laughing children, clad in ragged clothes, chase a mud-splattered mongrel through the streets.
  Staggering Labourers: Two men stagger along carrying a large, battered and obviously empty barrel between them. They are swearing and cursing at each other, and other passersby must dodge out of their way.
  Odd-Looking Mud: The reddish brown mud at the mouth of a narrow alley is slippery and viscous. Examination reveals that it is actually a mixture of blood, mud, and animal entrails.
  Dishevelled Cryer: A middle-aged man wearing a rumpled tunic and carrying a handbell moves through the throng, shouting that the “famed and incomparable” halfling bard Dricolen Nimblefinger is playing at the Scythe tonight (location H9).
  Cart Unloading: A cart is drawn up outside a shop, and workers are offloading heavy boxes and crates. The cart part-blocks the road.
  Dark Clouds: A bank of dark clouds passes over the city, plunging the area into cold, deep shade.
  Chamberpot: Without warning, someone empties a chamber pot into the street from a third-storey window. They aren’t looking at what they are doing, and one of the characters could be deluged in foul-smelling waste.

artisan_encounter_day
  The Runaway Apprentice: A leather aproned teenager bolts past the party, clutching a wrapped bundle. Moments later, a furious blacksmith barrels after them, shouting about stolen work. The bundle contains a beautifully forged dagger… bearing a noble’s crest.
  The Dye Disaster: A vat of expensive imported dye has been sabotaged—turned a sickly brown. The dyer swears a rival guild is responsible. Tensions are rising; a street brawl could ignite between cloth-workers and fullers.
  A Guild Inspection Day: Officials in bright sashes move shop to shop, measuring weights, testing craftsmanship, and collecting dues. One inspector quietly asks the party to accompany them—someone tipped them off about counterfeit guild seals.
  The Broken Bell: The district’s watch-bell rope snaps during a small warehouse fire. A carpenter insists the rope was cut. Was it arson meant to destroy records? Or to cover a theft?
  The Masterpiece Reveal; A crowd gathers as a renowned artisan unveils a commissioned statue or weapon. Just as the cloth is pulled away, a flaw is revealed—sabotage or curse?
  Smuggled Steel; A cart marked as firewood hides contraband weapons beneath split logs. The driver claims ignorance. The weapons bear markings from a rival kingdom.
  The Silent Workshopl: A usually noisy bronze-caster’s shop is eerily quiet. Inside: tools abandoned mid-task, metal half-poured, but no sign of workers—except strange sigils chalked near the furnace.
  Counterfeit Coin Mold: A tinsmith’s apprentice offers to sell the party a coin mold “for a price.” The design matches the local mint exactly.
  The Guild Feud: The cobblers accuse the leatherworkers of withholding treated hides. Threats escalate toward violence unless neutral mediators intervene.
  The Possessed Puppet: In a toymaker’s stall, a marionette moves on its own at night, whispering warnings about “the fire beneath the stone.”
  Living Mosaic: A mosaicist unveils a floor piece whose figures subtly change positions when no one looks directly at them.
  The Singing Anvil: A blacksmith’s anvil hums at dusk, resonating with a tone that attracts stray cats—and something else watching from the rooftops.
  Alchemical Spill: A glassblower working with an alchemist has an accident. Strange fumes cause temporary magical effects: levitation, reversed speech, glowing footprints.
  The Patron’s Displeasure: A minor noble arrives furious that their commissioned armor is late. The artisan swears the metal shipment never arrived—yet records show it was delivered.
  Strike of the Apprentices: Young workers gather with handmade placards demanding better treatment. Masters fear production halting before a royal festival.
  The Foreign Craftsman: A master artisan from a distant land arrives with unfamiliar techniques. The guild debates whether to allow them membership—or drive them out.

market_encounter_day
  Exceptionally Busy: The marketplace is packed; crowds of shoppers make the going slow.
  Town Cryer: A cryer walks the market, calling out various messages paid for by client stalls; perhaps a message is exactly what the characters want to hear.
  Patrolling Watch: A four-strong watch patrol makes a slow sweep of the market. If the characters seem nefarious, they follow the party for a while.
  Beggars Begging: Beggars and urchins roam the market looking for charity; any character giving a coin away is immediately surrounded by a crowd of noisy, desperate folk.
  Thief! Thief! A skinny urchin, clad in clothes little better than rags, darts through the crowd, clutching a loaf of bread. A baker’s apprentice, armed with a stout cudgel, chases the boy.
  Slow Cart: A cart, drawn by a single draft horse, moves slowly through the crowds. A stray dog, spooked by the huge animal, starts barking loudly. If the carter is unlucky, the horse gets spooked and rears up, flailing its heavy hooves at nearby shoppers.
  Patrolling Watch: A four-strong watch patrol makes a slow sweep of the market. If the characters seem nefarious, they unsubtly—as a deterrent—follow the party while they are in High Market.
  Exceptionally Busy: The marketplace is packed; crowds of well-to-do shoppers, their servants and porters, and occasionally guards, make the going slow.
  Priest of Abarin: Lyyli Mieho (LN female human acolyte [Abarin]) wanders the market. As the characters watch, she arbitrates several disputes between stallholders. She is friendly and pleasant, but she is busy and has little time to spare for adventurers.
  Unwanted Beggar: A patrol of the watch is dragging a beggar out of High Market. The beggar is shouting and screeching at the top of his lungs. Most folk in the vicinity pretend nothing is happening.
  Finely Dressed Woman: A finely dressed half-elf woman, flanked by four grim-faced, plate-clad guards, wanders the market. Other shoppers keep a respectable distance—for she is clearly important.
  Boom! A long boom (one of Castle Languard’s cannons) startles the chatting crowds to silence for a moment.

high_district_encounter_day
  Capering Jester: Kosti Urho (N male human commoner) dances down the street. Clad in bright robes of mind-boggling design, he has been hired to spread the word about an upcoming event at the Emerald Medusa (location H12).
  Clattering Coach: An ornate coach drawn by two white horses rattles along the street. Two mounted guards precede the coach, and another two follow in its wake. The guards are alert and well-equipped. Clearly, whoever is in the coach is wealthy, important and in a hurry.
  Patrolling Watch: A six-strong patrol of the watch marches along the street. Its members are well turned out, and the officer’s breastplate gleams in the sunlight. The officer also wears an impressive plumed helm, which nods and sways as she leads her men onward.
  The Bells: Bells ring out from Watcher’s Spire (location T4). At dawn and dusk, the bells call the faithful to worship. They could be rung at other times as a tribute to a fallen follower or as a warning if pirates—or some other threat—approach the city.
  Rain: Hard, heavy rain falls over the city. Folk seek shelter in nearby taverns, inns and shops—whose owners are delighted at the captive customers the weather has provided them.
  Nobles on the Hunt: A hunting party trots toward Duke’s Gate (location G4). Several half-elves clad in the finest hunting leathers lead a small group of men-at-arms, servants and hunting hounds; some of the Nenonens are on the hunt—but for what?
  Stumbling Servant: A tall, miserable man, laden with bundles, trips and falls in the street. He drops his burden. If the characters help him, he introduces himself as Lalli Vaino (N male human commoner)—servant to master clothier Kerttu Neuvo. He offers to put in a good word for the party with his mistress.
  Well-Dressed Rakes: A group of young men, clad in the latest fashions and armed with fine rapiers, lounge outside an upmarket tavern. At the sight of the characters, they start loudly commenting and laughing about “upstart adventurers” and a “lack of breeding”. They are full of the brashness and invincibility of youth.
  Wandering Priest: Akatius Tornio (LN male human acolyte [Conn]) wanders High City, seeking donations to aid the poor folk of the Shambles. He knows adventurers often have spare coin and politely intercepts them. He is insistent and doesn’t take no for an answer.
  Beggar: A brave beggar, Joakim Tulo (N old male human commoner), has snuck into High City. The city watch has spotted him, though, and is in the process of teaching him a lesson through the medium of a clenched fist (or two). He is helpless and not resisting.
  Strange Companions: If one of the characters has a strange animal companion or mount, a watch patrol stops them to “suggest” the creature be billeted at Miya’s Stables (location H7).
  An Invitation: The characters receive an invitation from Vilutar Pakkanen (“Folk out and About”) to dine with her at the Dragonheart Tavern (location H9). She may have a specific job for them or may just be feeling them out for the future.
  Barking Dogs: The sound of incessant barking comes from inside one of the house fronting onto the street.
  Cart Unloading: A cart is drawn up outside a shop, and workers are offloading heavy boxes and crates.
  Labourers Labouring: A gang of labourers work to repair the sagging wall of a well-to-do house. Wooden scaffolding covers the front of the building, and a cart of building materials stands nearby under the watchful eye of an older man.
  Careless Riders: Two men riding beautiful, but travel-stained, destriers canter along the street. The two wear fine suits of studded leather armour, and their horses are similarly barded. The two are in high spirits, they have enjoyed a good hunt, and are clearly not paying much attention to any pedestrians in their way.
  Cryer: A cryer moves through the throng, shouting loudly about the amazing food and drink to be had at the Dragonheart Tavern (location H9).
  Busy Street: Two carts have got tangled up on the road ahead, causing pedestrians and other carts and coaches to snarl up behind them. The characters can force their way through, find a side road or wait patiently.
  Sounds from Below: Strange sounds emanate from below the street. This section of High City is well-served with sewers, and the characters have caught a snatch of sound made by a band of sewer workers clearing a blockage (or effecting a repair). Alternatively, the sounds could have been made by a band of thieves, a pack of wererats or something worse.
  Prison Wagon: A wagon outfitted with a cage moves slowly through the throng. The cage is crammed with sad-looking folks on the way to Castle Languard’s (location H1) dungeon or the courts at the Father’s Hall (location T2). Most of the folk look dejected and defeated; a few look defiant, and one fellow has a curious smile on his face. Six guards escort the wagon.

fish_encounter_day
  Busy Day: The cries of fishermen bringing in their catch add to the general hubbub of industry rising above Fishshambles. When the wind blows in from the docks, the heady scent of salt and fish is strong in the air.
  Basket of Fish: A stout woman carries a basket filled with fresh fish on her shoulder. Seagulls wheel and swoop in the air above her. Sometimes, brave birds swoop to claim a prize from her basket. The woman is vigilant and quick, however, and few birds succeed in stealing a fish.
  Fish Pies for Sale: Samuli Kokko (N male human commoner) pushes a battered handcart from which he sells cold fish pies and the like for 1 cp each. Samuli hears much, and for a 1 sp relates one rumour to a customer.
  Loaded Wagon: Two horses pull an overloaded wagon toward the docks. Provisions for an extended voyage fill the wagon—someone is clearly planning a notable and lengthy expedition.
  Net Fixing: Two boys—Laaus and Niilo—(both CN young male human commoner) sit in the doorway of their home, attempting to repair a fishing net. Neither is skilled at the task, and both are people watching. If the characters are looking for someone, the pair may have seen them.
  Argument: Two drunk sailors are arguing loudly about a dolphin that one of them thought they saw fighting a shark near the Svart’s mouth. The argument is becoming increasingly heated; a brawl may ensue.
  Boat for Sale: A street urchin wanders the street calling out about a fishing boat for sale. The boat is called Weejas, and its owner wants 250 gp for it. The boat is in good condition
  Lost: A well-dressed woman—Mateli Janakka (LG female human merchant)—stands at an intersection. Lost, she is trying to get her bearings. Several seedy, nautical-looking folk are watching her with a keen intensity that speaks of nefarious intent. Mateli is grateful for the characters’ assistance if they escort her to safety.
  Crew Wanted: Lauri Salme (LN male human commoner) bangs a small drum and shouts the details of his patron’s offer as he moves through Fishshambles. The merchant Vilutar Pakkanen (see Wreck of the Sea Sprite for more information) requires brave crewmen for a voyage to the far-off Coral Sea. Prospective crew should report to Captain Liekko Arpia aboard Star Chaser (docked in High City) for an interview.
  Laina’s Missing Friend: The news that the fisherwoman Laina Eronen is searching for her missing friend Jalmari Lemmäs is on many people’s lips. She has offered to sail any adventurers helping her find her friend across the bay to Gloamhold. She often drinks at the Drunken Sailor (location F2).
  Smugglers: Smugglers are a perennial problem for Duke Nenonen as they deprive him of his rightful share of goods flowing through Fishshambles. Occasionally, the watch sends many patrols into Fishshambles, and this is one of those days.
  Old Toivottu Abroad: The news that Old Toivottu Vilja— the hideous, death-dealing witch—has once again been seen on dismal, flood-prone Water Lane is all about the Fishshambles, and many folk are talking about it. People avoid Water Lane at the best of times—few will willingly go there now.
  Thronged Thoroughfares: Fishshambles’s streets and lanes are thronged with people going about their business, and the crowds slow the characters’ journey.
  Lone Gull: A monstrously large seagull perches atop a low roof and watches the crowds go by. It is waiting for someone to pass with a basket of fish. When likely prey appears, it swoops down to claim its prize.
  The Stench: The heady and cloying stench of fish fills the air, reaching a level of peculiar intensity; even some of the locals gag at its overwhelming strength.
  Laughing Children: Two laughing children, clad in ragged clothes, chase a mud-splattered mongrel through the streets.
  Stray Dogs: Two skinny stray dogs nose about in the mouth of a shadowy alley.
  Flock of Gulls: A flock of gulls swirls about in the air above Fishshambles; their coarse cries mingle with the general hubbub of the streets.
  Dark Clouds: A bank of dark clouds passes over the city, plunging the street into cold, deep shade.
  Chamberpot: Without warning, someone empties a chamber pot into the street from a third-storey window. They aren’t looking at what they are doing, and one of the characters could be deluged in foul-smelling waste.

temple_encounter_day
  The Procession of Ash: Robed penitents march barefoot through the streets, chanting hymns. One collapses at the party’s feet—clutching a sealed scroll meant for the High Priest.
  Disputed Miracle: A crowd gathers at a shrine where a statue appears to weep. Clergy argue whether it is divine intervention or fraud. A skeptic scholar requests discreet help investigating.
  Pilgrim’s Lost Relic: A travel-worn pilgrim claims their holy relic was stolen while bathing at the public fountain. Without it, they cannot complete their vow.
  Bell Tower Mishap: The great temple bells ring at the wrong hour—an omen of ill fortune. The bell-ringer swears he never touched the rope.
  Rival Sects: Priests from two temples argue theology in the street. The dispute escalates when one accuses the other of heresy. The city guard is hesitant to intervene.
  The Tithe Dispute: Merchants refuse to pay increased temple taxes. A delegation asks the party to mediate before the bishop calls for sanctions.
  Sanctuary Claimed: A wounded fugitive flees into a temple, invoking sacred right of sanctuary. City officials demand entry.
  Election of a New Abbot: Factions quietly court support. Rumors spread of bribery, forged visions, or dark omens influencing the vote.
  Whispers in the Crypt: Monks report chanting beneath the floor at night. The catacombs may hold restless spirits—or something worse.
  The Relic That Burns: A sacred artifact begins emitting heat when brought near a particular individual.
  Unanswered Prayers: Clergy notice their spells faltering. Sacred flames sputter out. Has the deity withdrawn favor—or been silenced?
  Angel or Impostor: A radiant figure appears in the square delivering prophecies. Some call it divine; others whisper of illusion or fiendish trickery.
  Confession Interrupted: While one character seeks counsel, a terrified acolyte bursts in claiming someone is poisoning the holy wine.
  The Illuminator’s Secret: A monk illuminating manuscripts hides forbidden texts beneath official scriptures.
  The Gardener’s Warning: The elderly caretaker of the temple garden speaks cryptically about “roots choking the stone.”
  The Funeral Without a Body: A memorial service is held for someone whose body was never recovered. During the rites, a veiled stranger begins to laugh.

castle_encounter_day
  The Procession of Black Sashes: Clerks in mourning bands march silently through the courtyard carrying sealed document tubes. One collapses at the party’s feet—clutching a scroll meant for the Chancellor.
  The Disputed Decree: A proclamation posted at the gate bears the royal seal—but several councilors claim it’s fraudulent.
  The Envoy’s Lost Writ: A travel-worn foreign envoy claims their letter of safe conduct was stolen at the public fountain. Without it, they risk arrest as a spy.
  The Bell of Assembly: The great administrative tower bell rings at an unscheduled hour—signaling emergency council. The bell-ringer swears he never pulled it.
  Rival Ministries: Two state offices publicly argue over jurisdiction—Finance vs. War, Archives vs. Intelligence. The argument escalates, leaving someone needed to mediate—or quietly gather leverage.
  The Tax Levy Dispute: Merchants refuse a newly imposed wartime tax. They claim it exceeds authority.
  Sanctuary of Law: A wounded fugitive flees into the Hall of Records, invoking ancient legal immunity granted within the archive chambers. City officials demand entry.
  Election of the Lord Chancellor: Factions quietly campaign inside the castle.
  Whispers in the Vault: Archivists report murmuring beneath the treasury floor at night.
  The Seal That Burns: The Royal Signet begins heating whenever brought near a particular individual.
  The Failing Mandate: Official decrees fail to carry their usual magical authority. Oaths don’t bind. Royal commands don’t compel.
  Herald or Impostor: A radiant figure appears in the main square proclaiming new royal policies. Some claim divine mandate. Others suspect illusion magic. If false, who benefits from public confusion?
  Private Audience Interrupted: While a PC meets an official, a terrified page bursts in claiming someone is poisoning the council’s wine.
  The Archivist’s Secret: A royal scribe hides forbidden treaties beneath official volumes. The hidden documents may reveal a secret alliance, prove illegal land seizure, or contain clauses that could dismantle noble power.
  The Gardener of the Inner Courtyard: The elderly groundskeeper speaks cryptically: “Roots are cracking the foundation.”
  Funeral Without a Body: A state memorial is held for a missing general presumed dead. During the ceremony, a veiled stranger begins laughing.

dock_encounter_day
  The Late Tide: A ship limps into harbor at the wrong hour, sails torn. The crew refuses to speak of what damaged them—but they’re unloading cargo at triple speed.
  Dockside Auction: Confiscated goods are being sold off by harbor officials. A sealed crate draws intense, quiet bidding from rival merchants.
  Runaway Net: A fishing net tangles around a character’s boots—dragging behind it a waterlogged chest that wasn’t meant to be found.
  The Missing Stevedore: Dockworkers mutter about a laborer who vanished between ships. His tools remain neatly stacked at the pier’s edge.
  Smugglers’ Lantern Code: Lanterns flicker in a pattern from a warehouse window to a ship offshore. The signal stops abruptly when someone notices the party watching.
  Protection Racket: A gang demands coin from fishermen unloading their catch. A boat captain quietly asks for help ending it.
  Counterfeit Cargo: Barrels marked as salted fish actually contain weapons—or bodies.
  The Ship With No Crew: A vessel drifts in on the tide, dock lines snapping against the hull. No one aboard. The galley fire still warm.
  Embargoed Goods: Officials search a foreign vessel suspected of violating a trade ban. The captain insists the manifest is forged.
  Quarantine Flag: A ship flies a yellow banner. Rumors of plague spread faster than truth. Someone wants the panic.
  Guild Strike: Dockworkers refuse to unload ships until wages rise. Merchants threaten to hire outside labor, risking violence.
  Royal Inspection: A noble entourage arrives to audit port taxes. Several ledgers have gone mysteriously missing.
  Fog That Listens: A sudden unnatural mist rolls in. Voices echo wrong. Footsteps don’t match shadows.
  The Drowned Choir: Fishermen claim to hear singing beneath the piers at night.
  Barnacle Idol: A strange encrusted statue is hauled up in a net. Anyone touching it dreams of deep water and distant bells.
  Tide That Won’t Recede: The water remains unnaturally high, lapping at warehouses. Something offshore churns beneath the surface.
  Letter From Afar: A courier arrives with a sea-stained letter from a distant port—delayed months, perhaps years.
  Old Shipmate: Someone recognizes a character from past voyages—though they were believed dead.
  Stowaway Child: A frightened child begs not to be returned to a particular ship.
  The Retired Captain: An aging mariner offers a map to a “safe harbor” that doesn’t appear on any chart.

university_encounter_day
  Public Disputation: Two renowned scholars argue theology or natural philosophy before a packed hall. The debate turns heated when one produces a “forbidden” manuscript as evidence.
  The Missing Thesis: A nervous student begs for help—his final manuscript has vanished the night before examination. He suspects sabotage from a rival.
  Bell of Lecture: The lecture bell rings at the wrong hour, disrupting classes across the district. The bell tower door is locked from the inside.
  Ink Riot: Students spill into the street after a grading dispute escalates into thrown inkpots and broken desks.
  Forbidden Book List: A secret list circulates of texts banned by the university chancellor. Copies are being quietly traded at night.
  The Foreign Scholar: A visiting lecturer from a distant land introduces controversial ideas about astronomy or medicine, splitting the faculty.
  Election of the Rector: Senior masters campaign subtly, buying drinks and promising reforms. Rumors swirl of bribery or blackmail.
  Plagiarism Accusation: A celebrated professor is accused of stealing a dead scholar’s work. The original manuscript might still exist—somewhere in the archives.
  Animated Margins: Illuminations in several manuscripts begin moving subtly—pointing toward a particular page no one remembers writing.
  The Whispering Lecture Hall: A particular chamber echoes back words not spoken aloud.
  Experiment Gone Wrong: An alchemical or natural philosophy experiment explodes, leaving strange side effects: reversed gravity in a stairwell, accelerated plant growth in the courtyard, or time seeming to “skip” seconds.
  Ghost of the Founder: Students claim to see the university’s long-dead founder pacing the cloister at dusk.
  Town vs. Gown: Local residents accuse students of vandalism and unpaid tavern debts. Tensions threaten open street fighting.
  Secret Society: A masked academic society recruits only the “most promising minds.” Their initiation rituals may be harmless—or deeply dangerous.
  Debt Collector: A moneylender waits outside dormitories, demanding repayment from impoverished scholars.
  Disguised Noble: A highborn individual studies incognito. Their identity is at risk of exposure.
  The Poisoned Well of Knowledge: Several students fall ill after studying in the archives. Mold? Poisoned candles? Deliberate attack?
  Stolen Instruments: Astrolabes, surgical tools, or surveying equipment vanish from locked cabinets.
  Ciphered Correspondence: Letters between professors contain coded references to something buried beneath the oldest building.
  The Underground Printshop: Pamphlets criticizing church or crown appear overnight across the district walls.

encounter_night
  Flickering lights from nearby windows throw weird, dancing shadows into the street.
  Faint sounds—perhaps moaning and the like—come from the mouth of a dark alley.
  It is a clear and cool cloudless night, and the stars blaze brightly overhead.
  Sounds of revelry—singing and laughter—issue from a nearby tavern.
  A heavily cloaked and cowled figure makes its way along the street. Whoever it is, they are engaged in discrete (or nefarious) business.
  The soft clomp of hooves heralds the approach of a rider. A mail-clad woman rides a fatigued warhorse into town. She slumps in the saddle—she is obviously as tired as her horse.
  Bats—abroad from their attic lairs—flutter about town in search of food.
  Four young men—ruddy-faced and eager—quickly make their way to a nearby tavern. Tonight is—apparently—going to be “epic”.
  Four guards wander along the street. They seem slightly “rumpled” and unmotivated. They make little attempt to investigate strange sounds or dark alleys.
  This stretch of road is in almost complete darkness. Dark shadows gather against the adjacent buildings.
  The sounds of a shouted argument carry on the night air from some nearby but unknown place.
  Sounds of a scuffle come from around a corner. This could be a mugging, two townfolk settling their differences or something more sinister.
  Two townsfolk—arm in arm—stroll along the street, taking in the evening air.
  Two townsfolk—arm in arm—stroll along the street, taking in the evening air, but a heavily cloaked and cowled figure—perhaps a thief or assassin—surreptitiously follows the pair (who are oblivious to their shadow).
  Lights flare brightly on Castle Dunstone’s battlements. The dim silhouettes of a few patrolling guardsmen are just visible.
  A well-dressed couple are on their way to the Gilded Swan. Two servants—each carrying a lantern and a club at their belts—escort the pair.
  The street is almost empty; few people are abroad.
  Clouds scud across the sky, periodically obscuring the moon from view.
  Roll twice on this table and combine the results.
  The glimmer of a distant fire is visible to anyone gazing northwards toward the Mottled Spire.
  A wagon moves slowly along the road. Every now and then, it stops as its driver pauses to pick up dung littering the street. The wagon and the driver stink.
  With no warning, the still-warm contents of a chamberpot are hurled into the street from a second-storey window.
  A perceptive character spots a dark shadow crossing their own. Looking up, they catch a glimmer of movement atop a roof.
  An urchin approaches the characters and tries to convince them to drink at Delthur’s Folly. He gets a copper for each customer he brings to the tavern.
  Flickering light from a high window silhouettes two people locked in a passionate embrace.
  The distant sound of music reaches the characters’ ears. Following the sound leads to one of Dunstone’s many taverns. It is busy within.
  Muffled sounds of a violent struggle come from a shadowed alley.
  A lady of the night accosts the character with the lowest Charisma and makes certain improper suggestions.
  One of the characters suddenly realises they are missing their coin pouch. It could have simply fallen from their belt, or—even now—a pickpocket could be laughing at their misfortune.
  A drunk man swigs from a jack as he staggers along the road. He is happy and tries to share his drink with a character. He knows a rumour.
  A well-dressed man carrying a lantern strolls confidently along the street. The man wishes the characters a good evening as he passes.
  A woman storms down the street—a look of thunder on her face. A man hurries behind her, beseeching her to wait and let him explain.
  Three tired warriors plod into town after a long journey. The trio are looking for a cheap inn for the night; can the characters make a recommendation (and perhaps even make some new friends?)
  Two watchmen drag an unconscious man along the street. Two other watchmen, carrying clubs, follow them.
  Wooden scaffolding festoons the front of a building. The upper levels of the scaffold store piles of building materials and tools overnight, ready for the next day’s work. A watchman snoozes on the scaffold.
  A sudden gust of wind pushes leaves and rubbish along the street.
  Pale moonlight bathes Dunstone but also creates areas of deep shadow.
  A dagger—blood on its blade—lies discarded on the road. No one is around.
  The door of a nearby tavern opens, and a pair of drunk patrons stagger into the street.
  Roll twice on this table and combine the results; the characters get involved somehow.
  A servant dashes along the street on some late errand for their employer. Three hard-looking men conspiratorially mutter to each other. As the characters approach, they retreat into a side street.
  For a few moments, it is blissfully quiet.
  Heavy clouds obscure the moon and the stars, casting the town into darkness.
  A street crier loudly proclaims the cheap ale to be had at the Delthur’s Folly tavern.
  A church bell tolls to mark the time.
  A faint mist hangs over the Selka.
  A noisy gang of youths laugh and joke as they stroll toward their next drinks.
  Curled under several blankets, ragged cloaks and the like, a beggar sleeps in a doorway.
  A young boy sits on a low wall, whistling softly to himself as he watches passersby.
  Distinctly human snoring sounds waft from a stables abutting a tavern.
  Thick mist rises from the Selka River and slowly oozes into town.
  A street urchin unsubtly watches the characters. They could be fascinated by adventurers, or they could be the lookout for a gang of muggers.
  The steady glow of magical light glimmers from a closed garret window.
  Shouts of “Fire! Fire!” shatter the quiet.
  Two men stare at the party as they pass.
  A sad-looking man examines the seemingly sparse contents of his pouch before turning away from a tavern’s door.
  A cloaked figure makes a (perhaps) suspiciously late-night delivery to a nearby house.
  Light rain falls over the town.
  Four members of the watch rush down the road.
  The screeching of two cats heralds the start of a territorial fight.
  Somewhere, a dog howls mournfully.
  The sound of sobbing comes from a nearby building.
  Comically loud snoring drifts from an open second-storey window.
  A sudden frenzy of barking shatters the relatively quiet night. Quickly, other nearby dogs join in.
  A muscular warrior strides past, his hand resting lightly on his sword’s hilt. The man’s eyes rove from side to side; he is alert for trouble.
  Rats quest for food among the refuse lining the road; squeaks and rustlings betray their presence.
  Furtive sounds of movement from the depths of a dark alley may concern paranoid characters. A few moments later, a small stray dog emerges from the darkness carrying a dead rat in its mouth.
  A peasant dumps a bucket of rubbish in the street before returning to their home.
  Four rough and ready men stalk along the street. They are street toughs and have no intention of taking on armed adventurers. They give the party a wide berth.
  Four rough and ready men stalk along the street. They are street toughs and have no intention of taking on armed adventurers. They give the party a wide berth, but one of the men looks the characters up and down before muttering, “Not them lads” to his mates.
  Cries of “Thief, Thief” break the relative quiet of the night. Someone has just been burgled.
  A priest of Conn wanders the streets, searching for anyone who should need her attention or help.
  A short, stocky man with a shock of black hair and a drooping moustache eyes the party thoughtfully.
  A dwarf staggers down the road, arm in arm with an equally jolly gnome. Both sing loudly—sadly, they are singing different songs.
  Roll thrice on this table and combine the results.
  A watchman stands in a deep, shadowy doorway, watching passersby.
  Heavy rain pummels the streets, quickly turning them into muddy morasses.
  With a squeal and the drum of hooves, a large pig trots along the street. Moments later, a running man chasing the pig dashes past.
  Soft giggling, followed by a contented sigh, comes from an open window.
  A shop—a money changer and pawnbroker—remains open late for its customers. A bored guard sits outside on a stool.
  The drum of hoofbeats announces the rapid approach of a rider (who is in a hurry).
  A short, fat man dressed in fine robes and escorted by two young ladies and a mercenary guard strolls along the street.
  A skinny man wearing only a loincloth—fear or embarrassment on his face— dashes past.
  Distant fires glimmer evilly atop the northern hills. The door to a building stands open; it is dark within. A tile from a nearby roof falls to the ground and shatters.
  A flash of light passes across the horizon.
  The harsh clamour of blade and blade shatters the night. Anyone nearby freezes before moving rapidly away from the sound.
  The street is empty of people, but several stray dogs poke about looking for food.
  Rats scuttle from a side alley and stream across the road in front of the party.
  One of the characters suddenly gets the distinct feeling that they are being watched.
  The suggestion of movement comes from the mouth of a nearby dark alley or street. If the characters investigate, they find nothing.
  A large black cat silently stalks across the party’s path. It haughtily ignores them.
  The most paranoid character hears soft chuckling, filled with sinister undertones, coming from an alleyway.

squalid_encounter_night
  Vilimzair’s Heroics: Loud music and laughter float down the street from a nearby tavern. A bard leads the throng in a cheerful rendition of _Vilimzair and the Mad Kraken_, and the drunken crowd seems in good spirits. The tavern is a good place to lose a tail or gather information.
  Street Performer: A street performer tells the tale of the epically unlucky Balasar. Balasar was a strange half-dragon, half-human adventurer plagued by terrible luck. The small crowd gathered around the performer seems to find Balasar’s countless misfortunes—including his ignoble fiery death at the “hands” of a hungry, irate red dragon—hilarious.
  It’s Raining Night Soil: Without warning, someone empties a bucket of night soil from a high window. Several of the characters are struck by “falling debris”, which likely puts them in a foul mood. Any complaints are met with laughter from above.
  Arpia’s: This dark, warehouse-style shop is seemingly locked up tight when the characters pass by. However, a perceptive character may spot the faint glimmer of a candle through the building’s poorly fitting shutters. Does a burglar lurk within, or is some shadowy colloquy in progress?
  Cloaked in Shadow: A heavily cloaked and cowled figure moves furtively along the street. Perceptive characters note the figure avoids light and other folk. Is the figure a thief? Are they about on other discreet business, or is there some other explanation for their suspicious behaviour?
  Dark Night: Dark clouds crowd the sky, blotting out the moon. It is a good time for sinister doings.
  Watch About: An eight-strong patrol of the watch makes their way through the Shambles. They carry clubs and lanterns, and keep an eye out for illicit doings. If the characters are heavily armed and armoured (or acting suspiciously), the patrol stops and questions them.
  Moaning: Faint moaning issues from a dark alley. Investigation reveals the moans come from around a steep bend, and the cause is invisible from the street. The moaning could be anything—a mugging victim coming round, a ruse to lure a do-gooder into the alley or two lovers snatching a few minutes of privacy.
  Crying: The sound of soft sobbing—perhaps that of a child’s—issues from a shadowy alley. Just within the alley, a ragged figure sits atop a broken box.
  Come Hither: As the party pass a decrepit tenement building, a door creaks open soundlessly, and an arm emerges from the gloom to beckon them inside. This could be a trap, a case of mistaken identity or a potential patron attempting to hire them discreetly.
  Screaming Fall: A short scream presages a body landing on the street not ten feet from the party. The now dead man is wearing dark clothes, has two daggers in his belt and a pouch of thieves’ tools. Another pouch holds a scrap of parchment with the words “house with a blue door” and a curious, worn bronze idol of a faintly magical, squat toad-thing recently looted from a nearby house. Will the characters try to return the idol to it owner, or will they keep it?
  Stray Dog: A half-starved stray dog emerges from an alleyway and sniffs about the party. If they treat it well, offering it food and petting, it follows them. This could cause a problem if the characters are trying to be stealthy. However, the dog’s powerful sense of smell and hearing might warn the party of lurking dangers before they strike.
  Argumentative Drunk: An exceptionally drunk man— Vilhelm Hellikki (CN male human commoner)—staggers along the street. He’s had a bad (or perhaps good) night and can barely see. If the party don’t get out of his way, he attacks them. He is obviously no threat to the party.
  Empty Street: The street or alley the characters traverse is curiously empty of other pedestrians. This could be a coincidence, or the locals could have detected approaching danger and made themselves scarce.
  Band of Toughs: Four dirty men, clad in leather armour and carrying swords at their belts, swagger along the street. Other pedestrians get out of their way; they are surprised if the characters do not act in a similar fashion.
  Giant Rat: A huge rat emerges from the shadows of an alleyway. It sniffs the air, and its black, glittering eyes follow the characters hungrily. It flees into the alley if attacked, unless more of its gigantic brethren lurk therein.
  Friend Street Walker: A woman, Fruen Ahokas (N female human commoner), leaning in a doorway, smiles invitingly at the character with the lowest charisma. She is a prostitute and sees the characters as a potential goldmine—everyone knows adventurers have loads of gold. She is friendly and knows a great deal about the Shambles and its folk; she could be a useful friend.
  Bats Are About: Bats flutter about the alleys and streets, searching for food.
  Sudden Scream: A sudden scream, coming from inside a nearby building, splits the relative quiet of the evening; no one bothers to investigate.
  Bare-Chested Barbarian: A mighty warrior, wearing little but a loincloth and belt, strides fearlessly through the Shambles. The breadth of his shoulders and the size of his muscles—not to mention the greatsword slung carelessly over his shoulder—all conspire to keep those with nefarious intent at bay.

low_district_encounter_night
  Busy: The street is busy with folk engaged in nocturnal activities. Pickpockets work the area, and the characters may be targeted if they appear wealthy, gullible, or naive. Such crimes are opportunistic, and none of the local thieves wants to fight the characters.
  Shouted Argument: The sounds of a shouted argument filter onto the street through an upper-storey window of a nearby house. A man and a woman seem to be arguing, and the sounds of things breaking and smashing soon join the shouting match.
  The Watch: A large watch patrol—eight strong—drags a battered and bruised manacled man along the street. Dried blood mats the man’s scalp and dirty leather armour. He is barely conscious.
  Stray Dog: A mongrel puppy scavenges among the filth at the mouth of an alley. The dog is hungry and eagerly accepts any scraps of food. If treated well, it follows the party around.
  Lady of the Night: A scantily clad woman leans against the wall at the mouth of an alley. She has a welcoming smile, but a closer look reveals her eyes are strangely glazed over. Nearby, a burly leather-clad tough keeps an eye on her.
  Suddenly Quiet: The street is suddenly empty, as if Low City’s denizens have sensed the presence of impending danger and made themselves scarce.
  Weird Lights: The flickering lights of candles or lamps fill most nearby windows. One narrow garret window, however, is different. From within, strange flashes and swirls of muted colour leak into the night air. Clearly, some sorcery is afoot within the cramped attic.
  Band of Toughs & Rakes: A small group of hard-looking men and women stand on a street corner. They talk in low voices and watch passersby. Several of the group are drinking from wine flasks; all are armed with rapier, short sword or the like.
  Beggars Begging: Two cloaked figures slump against the wall. They hold out wooden bowls and beg passersby for spare coin. The beggars could be nothing more than they seem, informants for the Shadow Masks or the lookouts for a gang engaged in nearby criminal activity.
  On the Roof: A dark shadow flits along the roofline overlooking the street. A perceptive character spots the figure leap across an alleyway. The figure slips and drops the bag they are carrying. It lands in the alley with a muted clatter. Characters investigating the bag find the thieves’ loot—a few choice items could even set the heroes on the path to their next adventure.
  Strange Sounds: A thumping sound followed by a groan and a clatter issues from a shadow-shrouded alley. Other passersby ignore the sound. This could be the sound of a mugging, or it could be a trap to lure a do-gooder into the shadowy alley.
  Hidden Horror: A scantily clad woman leans against the wall at the mouth of an alley. She has a welcoming smile, but a closer look reveals her eyes are strangely glazed over—and there is no nearby tough keeping watch. In fact, the woman is dead: her body is an empty shell controlled by an intellect devourer seeking a more desirable host.
  Performing Bard. A bard stands in a small circle of candles. He has a good voice and is singing softly to the crowd of folk gathered around him. A perceptive character spots several pickpockets working the crowd.
  Howling Dog. The mournful howl of a dog reaches the characters’ ears. The howling is coming from the depths of a nearby shadowy alleyway.
  Staggering Drunk: A drunk, wearing filthy clothing, staggers along, singing quietly to himself. The man is a merry drunk, but one drink short of unconsciousness; he is essentially incoherent if engaged in conversation.
  Homeward Bound: A weary peasant wends his way home through the murk. He carries a small sack over one shoulder. A stray dog sniffs through a pile of discarded rubbish nearby.
  Deep Shadows: Here, the shadows are deep and dark - the buildings on either side of the alley practically touch their opposite number high above the street.
  Lurking Figures: Shadowy figures lurk in the mouth of a nearby alley. If the characters obviously spot them, the lurkers slip away into the alley’s deeper recesses. Any character observing the trio can easily determine that they are “lurking with intent”.
  Desperate Fight: A scream, followed by the brief clatter of blade on blade, echoes from a narrow and dingy side alley. If the characters investigate, they find a leather-clad man bleeding to death on the ground. The man’s pouch is missing, and without help, he will surely die. (Depending on the man’s identity and what the thieves stole from him, this could be the hook into the characters’ next adventure.)
  Chamberpot: Without warning, someone empties a chamber pot into the street from a third-storey window. They aren’t looking at what they are doing, and one of the characters could be deluged in foul-smelling waste.

artisan_encounter_night
  Closing Up Shop: A craftsman double-checks the shutters on his workshop, tests the lock three times, and pauses to look up and down the street before walking away. He seems more anxious than the nightly routine warrants.
  Late Light: A faint candle burns in a garret window above a darkened workshop. The silhouette of someone bent over a workbench is visible against the glass—working through the night, for reasons of dedication, deadline, or desperation.
  Cooling Forges: The district's forges have banked down for the night. The smell of coal, hot iron, and sawdust lingers in the cool air, and the cobblestones around the smiths' quarter still radiate a faint warmth underfoot.
  Night Delivery: A covered cart makes its slow way through the district's back alleys. The driver refuses eye contact and takes deliberate care to avoid the few lamplit stretches of street. Muffled sounds come from beneath the canvas cover.
  Watchman's Round: A single guild watchman—Paivo Karo (N male human guard)—patrols the district with a lantern and cudgel, greeting every locked door by name. He notices the characters immediately and is politely but thoroughly curious about their business after dark.
  Arguments Through the Wall: Two voices—one clearly a master craftsman—argue furiously from inside a closed workshop. The second voice is too muffled to identify, but the craftsman's replies are loud enough to rattle the shutters.
  The Abandoned Tools: A fine set of leatherworking tools lies scattered in the middle of the street, as if dropped suddenly. A trail of footprints pressed into a thin dusting of sawdust leads to the mouth of a nearby alley and does not return.
  The Nervous Apprentice: A young apprentice hurries past carrying a wrapped bundle, clearly following urgent instructions and clearly frightened. They give a mumbled excuse to any question and quicken their pace.
  Sleeping Guard Dog: A heavy hound chained to a workshop gate is dozing peacefully. As the characters pass, its head snaps up and its ears go flat—it stares past them into the darkness and growls softly at something it can smell but they cannot.
  Sign of a Trade: The guild symbol above a prominent workshop has been scored through with a deep knife cut, left sometime tonight. Someone is making a statement. The guild will not take it lightly.
  Strange Smoke: A thin curl of smoke rises from the chimney of a workshop that should be cold and empty—and the smoke is an unusual color.
  Footsteps Above: The characters hear two sets of footsteps moving quickly across the upper floor of a closed building, then stopping. A brief silence, and a shutter cracks open overhead. A face peers down into the street.
  Journeyman Home Late: A craftsperson—still in a leather apron stained with dye—hurries through the empty street. She keeps glancing behind her without breaking stride, whether out of habit or genuine concern is hard to say.
  New Lock: A workshop recently struck by burglars has a heavy new padlock on its door and fresh iron bar brackets. Someone has also scratched a protective rune into the wood beside the frame, whether or not they know any magic.
  The Masterwork's Shadow: Outside one workshop, a cloth-draped shape stands on a low platform—a commissioned piece waiting for morning delivery. As the characters pass, the cloth shifts despite there being no wind.

market_encounter_night
  Empty: The marketplace seems deserted; conditions are perfect for nefarious activity.
  Thick Clouds, Deep Shadows: Thick clouds obscure the moon and stars, plunging the marketplace into darkness. Deep shadows gather between the stalls.
  Lone Watchman: Employed by several stall holders, a watchman maintains a lonely vigil over a row of stalls. He is bored and happily chats with seemingly trustworthy people. The man, Untamo Kaivas (LN male human guard), won’t give his life to protect the stalls. A sip of wine would brighten his evening.
  Skulking Beggars: A few beggars skulk about the market looking for discarded food, useful items and more. They aren’t violent, but they could create a noisy distraction or draw unwanted attention to the characters unless they are placated with coin.
  Patrolling Watch: A four-strong watch patrol, equipped with lanterns, makes a slow sweep of the marketplace.
  Amorous Couple: A young couple have snuck into a tented stall for some alone time. They are audible from some distance, but utterly oblivious to all but each other.
  Perching Owl: A large tawny owl perches on, or perhaps guards, a fortuneteller’s tent. It silently glares at anyone getting too close to the tent. It flies away (perhaps to warn its mistress) if anyone attacks it or enters the tent.
  Hooded Figure: A hooded figure, clutching a small sack, flits through the deserted market. It keeps to the shadows, but a beam of moonlight catches it, allowing the characters to see it.
  Nefarious Apprentice: Tasked with guarding his master’s stall, Aake Mietti (NE young male human thief) instead sells minor items to his underworld friends. A deal is going on as the characters approach. If they intervene, two hooded figures flee; Aake brazens it out and admits no wrongdoing.

high_encounter_night
  Merchant Abroad: A richly dressed woman, attended by a servant and two armed, vigilant bodyguards, imperiously walks the street. The woman exudes wealth and privilege.
  The Watch: An eight-strong patrol of the watch marches along the street. They are vigilant but mainly here to deter petty crimes—muggings, burglaries, and the like. Each watchman carries a whistle to summon reinforcements in the event of serious trouble.
  Manure Shoveler: Two men shovel horse manure into a nearby cart. They work quickly and industriously. The two could be nothing more than honest workers, or they could be something more. Laukkanen’s Collectors (location L7) uses street cleaning as a cover to move stolen goods around the city; the two workers could be on their way to meet a wealthy client.
  Careless Riders: Two men riding beautiful destriers canter along the street. The two wear fine suits of studded leather armour, and their horses are similarly barded. The two are in high spirits, they have enjoyed their ride, and are clearly not paying much attention to any pedestrians in their way.
  Busy Street: The seasonal weather is particularly agreeable, and many of High City’s denizens are taking a turn in the evening air. Couples walk the street—many accompanied by servants or bodyguards—while groups of revellers make their way to and from their taverns of choice. The atmosphere is pleasant and relaxed.
  Merriment Aboard: Sounds of laughter, drunken singing and general merriment reach the characters’ ears. Moments later, a crowd of monied young folk—sons and daughters of wealthy merchants—fill the street. They are in irritatingly high spirits but do not want any trouble.
  Lurker on the Scaffold: Wooden scaffolding covers a fine building fronting onto the street. A nightwatchman snores gently on a chair by the house’s front door. Perceptive characters spot a small figure creeping along the scaffolding by an upper window. (The figure might be a thief or could be a youth sneaking out to meet friends).
  The Watch Watching: A patrol of the watch takes an interest in the characters. Perhaps they just look shifty, or one of the party vaguely resembles (or is) a known troublemaker. In any event, the patrol stops the characters and enquires (politely) after their business in High City.
  Sounds from Below: Strange sounds emanate from below the street. This section of High City is well-served with sewers, and the characters have caught a snatch of sound made by a band of sewer workers clearing a blockage (or effecting a repair). Alternatively, the sounds could have been made by a band of thieves, a pack of wererats or something worse.
  Annoying Merchant: Simo Kekko (LN male human merchant) has pretensions of greatness and is wrapped up in his own importance. While deep in a slightly drunken conversation of great import with a friend, he stumbles into the group. Of course, he is too important to apologise and becomes angry if the characters do not get out of his way.
  Help! Help!: The characters hear the sounds of a scuffle in a nearby side street and someone calling for aid. This could be a rich merchant beating a servant, a (rare) mugging or something else entirely. (This is a good way for the characters to meet their next patron.)
  Ornate Coach: An ornate coach rattles along the street, drawn by two beautiful horses. A driver and two footmen (really disguised bodyguards) are visible riding on the coach, but the cabin’s curtains are drawn. As the coach comes alongside the characters, it slows and comes to a halt. The door opens, and a hand beckons one of the characters inside.
  Barking Guard Dog: The deep, echoing bark of a guard dog shatters the relative quiet.
  Drunk Rakes: A group of young men, clad in the latest fashions and armed with fine rapiers, stagger along the street; several clutch wineskins from which they enthusiastically swig.
  Cowled Pedestrian: A heavily cowled figure moves purposefully along the street, holding a part-shuttered lantern to light their way. The figure could be a servant about their master’s business or someone on the way to a discreet meeting. Either way, they do not want to stop and chat.
  Bats!: Bats swirl and swoop in the air above the party’s heads. The bats are searching for food and have just come from the attic of a nearby house. A perceptive character may spot the last few bats fluttering forth.
  Lights Burning Bright: The windows of a well-to-house blaze with light, and the sounds of conversation and laughter come from within. A liveried servant stands by the front door.
  Empty Street: Suddenly, the street is empty. Paranoid characters may wonder why…
  Drunk: A drunk man wanders along the street singing quietly to himself. He is jolly and wishes the characters a good evening.
  Dark Clouds: Dark clouds scud across the moon, plunging the street into near-total darkness—except for the lights shining from the nearby houses.

fish_encounter_night
  Drunken Singing: Sounds of revelry and drunken singing curl through Fishshambles’s dim streets. The day’s catch has been good, and the fisherfolk are celebrating the best way they know how—with ale, companionship and song.
  Quiet Streets: Heavy rain falls on Languard, and the gloomy streets empty. Only those with pressing business are aboard this night.
  Drunken Sailors: A trio of drunken sailors stagger down the road, deep in loud (and incomprehensible) conversation. They don’t see the party, and blunder into the characters. Their reaction depends on how the characters deal with their mistake.
  Ladies of the Night: Prostitutes linger in the deep shadows cast by the looming buildings bounding the street. They call out enticingly to passersby, to drum up trade. Some may be honest, while others have nefarious intentions. Those with hidden motives could work in league with press gangs, muggers or worse.
  Fish Slops: As the characters pass a shop or tenement building, someone throws a bucket of fish guts and bones into the street. The foul slurry splashes a character’s boots.
  Arguing Couple: Two peasants—a fisherman and his wife —argue loudly in the street. It seems one has “drunk all the money”, and both are angry. The two are drunk, and the argument is confused. It’s not immediately clear which of the two has “drunk all the money”.
  Fight in the Dark: The unmistakable sounds of combat reach the characters’ ears from a nearby dark court. If the party investigate, they discover two rival fishing boat crews locked in a brawl.
  Furtive Cart: A teamster drives a small cart through Fishshambles. He—Brusi Niera (CN male human spy)— avoids busy or well-lit areas. Perceptive characters notice his horse’s hooves are muffled and that the teamster wears dark, nonde
  Rotting Fish: Elias Ora (N male human spy) pushes a noisome handcart down the street. Ostentatiously trying to sell fish, he is, in fact, the lookout for a gang of thieves robbing a nearby business. He tries to sell the characters obviously rotten fish for an outrageous price, hoping they will quickly move on. Elias prides himself on how annoying he can be when “in character”.
  Falling Tile: A roof tile falls from a nearby building and shatters on the ground inches away from a character. Was the falling tile an accident, attempted murder or the result of a thief about their nocturnal rooftop doings?
  Mugging: A group of muggers decides a character, or the entire group, is a good target for a quick, profitable mugging. One of them follows the target for a short while, and the character likely notices the interest. If it becomes obvious the thieves are about to make a terrible mistake, they retreat. Otherwise, they launch their ill-advised attempt when the target reaches a quiet spot.
  Rolling Bottle: An empty wine bottle rolls slowly out of a shadowy alley and comes to rest against a character’s foot. A faint moan issues from the alley.
  Empty Thoroughfares: Fishshambles’ streets and lanes are virtually empty of other people. Lights glimmer wanly in nearby windows, and the sound of revelry from nearby taverns is audible, but few people are abroad this night, at least where the characters are.
  Stray Dog: A mongrel puppy scavenges among the filth at the mouth of an alley. The dog is hungry and eagerly accepts any scraps of food. If treated well, it follows the party around.
  Band of Toughs & Rakes: A small group of hard-looking men and women stand on a street corner. They talk in low voices and watch passersby. Several of the group are drinking from wine flasks; all are armed with rapier, short sword or the like.
  The Stench: The heady and cloying stench of fish fills the air, reaching a level of peculiar intensity; even some of the locals gag at its overwhelming strength.
  Staggering Drunk: A drunk, wearing filthy clothing, staggers along, singing quietly to himself. The man is a merry drunk, but one drink short of unconsciousness; he is essentially incoherent if engaged in conversation.
  Homeward Bound: A weary peasant wends his way home through the murk. He carries a small sack over one shoulder. A stray dog sniffs through a pile of discarded rubbish nearby, smells something interesting in the sack and begins to follow the man. He, in turn, tries to kick the dog away; this might raise the characters’ suspicions; just what is in the sack?
  Chamberpot: Without warning, someone empties a chamber pot into the street from a high window. They aren’t looking at what they are doing, and one of the characters could be deluged in foul-smelling waste.
  Furtive Sounds: Furtive sounds suggestive of an attempt at stealth issue from the mouth of a dark alleyway.

temple_encounter_night
  Midnight Candles: A lone priest moves slowly between the shrine-niches lining the street, relighting votive candles guttered by the evening wind. He nods to the characters but does not speak; the hour is for silence.
  The Bells Disagree: A temple bell marks the hour with a deep resonant toll. A moment later, a second bell from a different temple answers—at a slightly different count. The two faiths have, apparently, been unable to agree on the time for years.
  Night Pilgrim: A travel-stained pilgrim kneels before a street-side shrine, head bowed, lips moving soundlessly. She has clearly been traveling for days and does not notice the characters until they are very close. She flinches badly when she realizes they are there.
  Strange Light: A steady, sourceless white glow emanates from behind the sealed doors of one of the smaller temples. There is no sound from within. The light is nothing like candlelight and doesn't flicker.
  The Crying Acolyte: A young acolyte sits alone on the temple steps, weeping quietly. He startles when approached, says everything is fine, and will not meet anyone's eyes. He is a poor liar and clearly frightened.
  Procession of Penitents: A column of robed figures processes through the dark street in absolute silence, walking barefoot in single file, heads bowed. They part around the characters without acknowledgement and continue on their way.
  The Guarded Crypt: A temple guard—armed and visibly alert, unlike the usual ceremonial post—stands at the crypt entrance of a prominent temple. He declines to explain why extra precautions have been taken tonight.
  Chanting from Below: A rhythmic, monotonous chant, barely audible, seems to be rising from beneath the street. The nearest building is a large temple whose services ended hours ago.
  Desecrated Shrine: A small street-side shrine has been vandalized—the icon overturned, offerings scattered, something daubed on the stone in a dark substance that is still wet. The Watch hasn't been notified yet.
  The Following Dog: A large, clean, well-fed dog with no apparent owner falls into step with the characters as they move through the temple district. It needs no food, shows no aggression, and shows intense interest in the door of one specific building—sitting down in front of it and refusing to move.
  Lights at the Healing House: Lamps burn in the windows of a temple's physic hall, and two breathless acolytes hurry inside carrying someone on a canvas stretcher. A third acolyte bars the door firmly behind them and doesn't respond to questions.
  The Motionless Watcher: A hooded figure stands absolutely still outside the gate of the district's largest temple, facing the building. Dew has already settled on their shoulders. They do not react to any approach, but they are unambiguously alive.
  Soft Music: A single instrument—possibly a small harp—plays a melody somewhere in the temple district. The music is beautiful and profoundly melancholy, and its source is impossible to locate; it seems to come from every direction at once.
  Warding Runes: Fresh chalk runes have been drawn across the threshold of a temple that is normally left open. The symbols are unusual even by clerical standards—the attending priest, if found, refuses to explain them.
  The Late Confession: An elderly man kneels in the street before a sealed shrine, speaking in a low and urgent voice. He doesn't acknowledge the characters. Whatever he is confessing, it has clearly been weighing on him for a long time.

castle_encounter_night
  The Guard Change: The watch changes at the castle gate with precise, practiced efficiency. The outgoing guards look exhausted; the incoming ones have clearly been briefed on something that has them tense and alert.
  Sealed Orders: A dispatch rider dismounts at an official building, hands a sealed envelope to the duty officer, and is back in the saddle and departing before the officer has finished reading it.
  The Prisoner Wagon: An iron-barred wagon rolls quietly through the district at an unusual hour. Six guards escort it in silence. The cage appears empty—but one of the guards keeps stealing glances at it as if he isn't quite sure.
  Lights in the Archive: The record hall's windows blaze with lamplight long past the hour of any official business. Silhouettes move inside with urgency, and at least one appears to be pulling files from shelves with some force.
  Hard Questions at the Gate: A guard patrol steps from the shadows and challenges the characters the moment they enter the district. The questioning is polite but thorough—names, purpose, destination, and who vouches for them.
  Officials Arguing: Two city officials in nightclothes argue in hushed, furious tones in the shadow of an administrative building. They fall completely silent and move apart the moment they realize anyone has seen them.
  The Empty Post: A guard post that is never left unstaffed is unmanned. The lantern burns, the chair is warm, the guard's half-eaten supper is on the table. There is no note.
  The Anonymous Coach: A lacquered coach with no markings draws up to a side entrance of the keep. Two passengers disembark, hooded against recognition, and are admitted without challenge. The coach turns and leaves immediately.
  Sound from Below: A low, resonant rumble—like a heavy stone door turning on its pivot—rises from a grate in the street for a moment, then cuts off sharply. Whatever is moving in the tunnels below the castle district is not a sewer worker.
  The Nervous Courier: A young man in unfamiliar livery hurries through the district clutching a leather satchel to his chest. He takes elaborate and mostly ineffective precautions against being followed, doubling back twice on streets he can clearly see are empty.
  Fresh Warrant: A new notice has been pinned to the public board so recently that the ink is still slightly wet. The name and description on it will mean something to anyone with knowledge of local affairs.
  The Lamp Goes Out: The street lamp nearest the keep's main gate abruptly extinguishes. Two guards move to investigate. One returns promptly; the other takes several minutes longer than expected, and when he does appear, he has mud on his boots and says nothing.
  Quietly Dismissed: A servant hurries from a side door of an official building carrying a bundle of personal belongings. She was clearly not expecting to be dismissed tonight. She won't explain, but she looks frightened rather than merely upset.
  Watching from the Walls: A single sentry on the keep's wall is not walking his patrol route. He stands motionless at a particular point on the battlements, looking down at a specific street below. He doesn't move for as long as the characters are in sight.

dock_encounter_night
  Night Cargo: Dockhands work by lantern light, loading or unloading a vessel that arrived with the evening tide. The cargo is unmarked, the workers are unfamiliar, and they stop talking the moment they notice the characters. The dock master is nowhere to be seen.
  The Tavern's Spill: Laughter and shouting pour from a dockside tavern. Two sailors have already been thrown out and sit against the wall arguing with quiet intensity. One has a fresh cut on his face he hasn't yet noticed.
  Something in the Water: A splash in the dark harbor—too large for a fish, too quiet for a dropped crate. Ripples spread outward from a point midway between two moored vessels. Nothing surfaces, and nothing else moves.
  Press Gang: A group of five rough-looking men moves through the dock streets with the practiced ease of people who know the Watch won't interfere tonight. They study the characters carefully before deciding to move on. For now.
  The Reluctant Witness: A dockhand moves past the characters very quickly, head down. He stops when addressed, takes a single glance back at a darkened warehouse, and tells the characters to keep walking and not look at anything. Then he walks away briskly.
  Harbor Fog: Dense fog has rolled off the water, reducing visibility to thirty feet and distorting sound unpredictably. A ship's bell rings somewhere nearby—closer than any vessel that should be at anchor.
  Argument at the Gangplank: A dockside official and a ship's mate are in a heated standoff at the foot of a gangplank. The mate is physically blocking access to the vessel. Neither is willing to back down, and both have their hands near weapons.
  The Waiting Boat: A small rowing boat is tied at a dock ladder, unattended, with two sets of oars and no sign of its owner. It's been there long enough to collect a film of harbor scum, but not so long that it wasn't left this very evening.
  Offshore Lights: Lights move in the darkness offshore—too low and too slow to be a ship's running lanterns. They drift parallel to the waterfront, pause, and go dark all at once.
  Sleeping Customs Officer: The customs post at the main pier is unmanned. The officer is asleep in the back room with his head on the desk, his ledger swept to the floor, and a half-empty cup of something cold beside him. He is extremely difficult to wake.
  Furtive Exchange: Two figures in deep hoods swap a package in the shadow of a warehouse wall. A third figure—clearly posted as lookout—scans the street. All three freeze simultaneously when they spot the characters.
  Sailor Overboard: A shout, a splash, and a volley of creative cursing. A drunk sailor has toppled off a gangplank into the harbor. The water is cold and the tide is moving. His crewmates are too drunk to help quickly or effectively.
  Under the Pier: A lantern hanging at the end of a pier swings in the sea wind. Each time it arcs toward the water, it illuminates the underside of the dock for a moment—long enough to show that something is clinging to the pilings below the waterline. It moves when the light hits it.
  Rowing in Silence: A small boat crosses the harbor without a sound—oars wrapped in cloth, no lantern, rowing steadily toward a ship anchored in the outer roads. No one on the docks appears to notice.
  Crimson Tide: The water around a particular berth has an odd reddish tint visible in the lantern light. It could be discharged dye from a textile ship. The berth itself is empty, and the mooring lines have been cut rather than untied.

university_encounter_night
  Late Study: Nearly every window in the student residences blazes with candlelight—examinations are tomorrow. Anxious faces stare down from upper floors, and the smell of burning candle wax is thick in the night air.
  The Escaped Experiment: A shattered glass container lies in the street outside a research building. Whatever was inside is no longer there. A note pinned to the door in hasty handwriting reads: "If found: do not approach. Do not attempt to capture alone. Return to Room 14."
  The Arcane Argument: Two voices argue with fierce intensity through an open upper window—the debate concerns something called "inverted sympathetic resonance," and both parties are clearly on the edge of losing their composure entirely.
  Magical Weather: The air above one building in the district feels wrong—warmer than it should be, with a faint charge that raises the hair on the neck. Nearby leaves and scraps of parchment float an inch above the ground without stirring.
  The Ink-Stained Professor: A professor emerges from a building at a deeply unreasonable hour—fingers stained, hair chaotic—and blinks at the characters as though he has forgotten the world outside his office exists. He tries to ask them a question about planar geometry before realizing they aren't students and retreating back inside.
  The Rooftop Astronomer: A student sits on a flat section of roof with a brass telescope, charting the night sky and apparently unconcerned by either the hour or the height. She waves cheerfully at the characters below. Whether her roof access is authorized is an open question.
  Rhythmic Sounds from the Lab: The research hall emits a sequence—deep thud, hiss of steam, silence—on an almost mechanical cycle, once every three minutes, all through the night. The front entrance is locked.
  The Lost Lectern: A heavy wooden lectern from one of the main halls has been dragged into the central square and positioned facing the fountain. A bundle of lecture notes is clipped to it, written in a language no one in the party recognizes.
  The Wandering Delivery: A small wooden box enchanted to deliver itself to a specific address sits in the middle of the street, slowly spinning in place as though confused. It nudges hopefully toward anyone who stops to look at it.
  The Keyhole Light: A vivid blue light shines from the keyhole of a locked laboratory, fanning across the corridor floor in a sharp wedge. It pulses slowly, in a rhythm that is uncomfortably close to breathing.
  The Night Porter: Old Matto Tark (N male human commoner), who has held the university's night porter position for forty years, does his rounds with a lantern and a pleasant manner. He knows every locked door, every faculty member's habits, and every strange thing that has happened in this building since before most of the faculty were born. He is happy to talk at length.
  Tracked: One of the characters notices—only just—that a small, quick figure has been following the group since they entered the district, keeping to doorways and moving only when they move. When confronted, she turns out to be a sociology student conducting observational research on "the behavior of non-academic visitors in academic spaces after dark." She has been making notes on a small pad and is completely unashamed.
  The Oath in the Dark: A student stops the characters unprompted and, with the manner of someone who has been building to this for some time, tells them a long and clearly personal story about betraying someone they admired. He stops abruptly in the middle of a sentence and walks away without another word.
  Summoning Gone Sideways: The faint smell of sulfur drifts from a cracked-open window, accompanied by the sound of urgent whispered arguing and something that sounds like a large, annoyed creature shifting its weight. A chalk circle is just barely visible on the floor of the room through the gap in the curtain.
  The Empty Chair: In the main lecture hall, visible through a large window from the street, a single candle burns on the lectern. Every chair in the hall is occupied—each one pulled slightly out from its row, angled toward the front, as if an audience had recently sat there. The hall is empty of people.




squalid_rumour
  Need to Hide: The Dagger and Ferret (Locales of Interest #1) is a good place to hide from the watch. Its owner, Serafia Janakka, will hide anyone for enough coin—and will also betray anyone for enough coin.
  Whatever You Want: Almost anything can be procured in the Shambles, if you know where to look and who to see. The Shadow Masks control much of the Shambles, and it’s not difficult to meet a guild thief. The Shambles is a much safer place to do such business than the Wrecks. In the Wrecks, you’d be lucky to escape with your life!
  A Goblin: A goblin was seen last night in the Shambles. It was heavily disguised, but a drunk adventurer swears shesaw the creature talking with several unsavoury types.
  Crackdown: The duke is planning to crack down on the lawlessness in the Shambles (again) by sending in the watch to scour away the Shadow Masks’ influence. Trouble is inevitable.
  High Stakes: If you feel lucky, and want to gamble, the Old Tower (Locales of Interest #3) is the place to go. Become a regular and you’ll get invited to the nightly high-stakes game held in the tavern's cellar.
  Giant Man-Eating Rats: Giant man-eating rats have been seen in the worst part of the Shambles near Water Lane. Dogs, cats and even children have gone missing lately.
  Sell Your Loot: If you’ve got loot to sell, get yourself to Raisa’s Curios (location S1) on Cheap Street. Raisa buys almost anything and has many interesting things on her shelves. Sometimes she even hosts auctions of wondrous items of magical power, on behalf of her clients!
  Get Lost: If you want to get lost in Languard, the Shambles is the place to go. The watch rarely enters the Shambles after dark, and its innumerable cramped buildings and apartments offer many excellent hiding places. The Shadow Masks have their base in the Shambles and can spirit folk out of the city, for a price.
  Hive of Thievery: Few honest folk go to the Shambles after dark, but if you are looking to hire a thief, the Shambles is the place to go.
  Meet the Shadow Masks: If you seek the Shadow Masks, the Bloody Eagle (location S2 on the City of Languard map) is a good place to start. The landlady, Fruen the Unlucky, is less than welcoming to strangers, but has many contacts among the Shambles’ denizens.
  Information for Sale: If you need information, Saren the Ear (location S13) is the person to see. Be careful, though: some people think Saren is one of the undead! It would be wise not to anger one such as herself.
  Watch out for Takolen: On dark nights, the Takolen sneak forth from the Wrecks to prey upon the vulnerable folk of the Shambles (and Fishshambles). On such nights, people sometimes go missing, and the Takolen are
  universally blamed. Some say they worship dark powers of depraved and unknown origin.
  Orcs, Goblins and Worse: Evil humanoids are aboard in the Shambles. Some say they are allies of the pirates dwelling in the Picaroon Peninsula; others claim they have other foul goals. Whatever the reason, they are here and can sometimes be found at night, creeping around the Shambles’ darkest, foulest alleyways.
  Murder Most Wealthy: Rahvu Rantanen claims to have had many wealthy wives (but they all left Languard never to return). Everybody knows he killed them and uses their gold to live a decadent life at his home, Martyrn Manor (location S15). There, he gives extravagant parties for his wealthy friends from High City.
  Cheap Clothes: The clothes are so cheap at Veera’s Corpsewears (location S3) because Veera takes them from the dead. She makes no secret about it, and many think she is more than a touch ghoulish. That said, her prices are impossible to beat, and if you are short on coin, her shop is the place to go.
  Something Terrible Lurks: Something terrible lurks in Mongrel Alley (location S8). Some street folk and beggars have begun to avoid the area, and several people have commented on the lack of rats in the area.
  Wishes Come True: At the Well of Wishes (location S12), wishes come true! Everyone knows the story of the person who needed gold and threw their last silver into the well. Days later, they found a bag filled with 30 gold coins, and their problems were solved!
  Wondrous Auctions: As well as being a junk shop, Raisa’s Curios (location S1) on Cheap Street is famed for the occasional auctions of wondrous items that happen at the shop. The auctions are always by invitation only. Some say Raisa is a fence and that she gets the pieces for her auctions from the Shadow Masks.
  Cursed Scribe: Kaino Perspoika (location S7) is cursed or. very badly ill. He was a good scribe once, but now he is always late in finishing his work. If you need work done quickly, get someone else to do it.
  Dangerous After Dark: The Shambles is dangerous after dark, and goodly folk don’t venture there. Many thieves, footpads and thugs lurk therein, waiting for easy marks to blunder into their realm.

low_rumour
  Bats: Great swarms of bats have been seen flying over Low City of late. The common folk whisper of vampires or other dark, sorcerous doings, attracting the nocturnal hunters and wonder what this portends for their families.
  Low Market is the Place: If you are looking for a bargain, Low Market (location L1) is the place. Overlooked treasures can sometimes be found among the market’s bric-a-brac stalls. Every month or so, an adventurer claims to have found a minor magical item, treasure map or the like at the market.
  Haunted Bridge: Vonya’s Span (location L2) is haunted by the alcoholic spirit of the dwarf who built it long ago. Thrill-seekers and the like often hang around the bridge at night in hopes of catching sight of Vonya’s spirit. Many theories circulate about why her spirit haunts the span; some—inevitably—speak of hidden passages in the bridge’s piers and structure and of the lost, glittering treasures hidden therein.
  The Famed Dricolen Nimblefingers: Dricolen Nimblefinger (N male middle-aged halfling wandering bard) plays mid-week at the Scythe (location L3). There is no better singer in all Languard! (This is a controversial view—one held exclusively by the Scythe’s regulars, who are bafflingly loyal to their beloved diminutive singer.)
  The Orc’s Head: Adventurers visit the Orc’s Head (location L6) to meet more of their ilk. The place’s proprietor is a retired adventurer who can tell his fair share of Gloamhold stories. The Orc’s Head is a cheap, raucous place. Here, brawls are relatively commonplace— but rarely deadly.
  Executions: One day every month, the normal commerce of Low Market is interrupted for Execution Day. Many see Execution Day as a public holiday, and hundreds converge on Low Market to witness the prisoners’ final gruesome moments—pedlars sell their wares, beggars beg for coin, and an almost carnival-like atmosphere fills the air. It’s a great day out!
  Missing Beggars: There are fewer beggars about than normal. Some think this is a good thing, others wonder at their disappearance and worry about what it portends.
  Looking Forward to Execution Day: Execution day this month should be a cracker. Adventurers have been busy, and captured several bandits who will meet their gruesome fate as entertainment for—and a warning to— the commonfolk. The adventurer Iisak Asikka (NE male human knight) will also meet his doom. He killed two members of the watch, resisting arrest after a barroom brawl at the Orc’s Head (location L6). The best place to watch the executions is from the porch of the Last Chance tavern (location L10).
  Sell Your Stones: If you’ve got poor-quality jewellery or gems to sell, Arlo Itkonen at Arlo’s Stones (location L4) is the person to see. He’s tight and generally untrusting of others, but his gold is good.
  Strange Rituals: Sometimes, the Esoteric Fellowship (location 12) enact strange and dramatic rituals atop their “tower”. No one knows what this wizard’s guild is up to, but their rituals are certainly a spectacle!
  Joining the Mixing Pot: If you can find it and get in, the subterranean Mixing Pot (location L5) is a great place to drink and meet people from every walk of life. You have to be a member, though.
  Discreet Relaxation: Marja’s House of Sighs (location L8), also known as the Moaning Halls, is a fabulous, discreet place to relax. Many pleasures, legal and illegal, can be had therein.
  Brave Sailors: Adventurers seeking a brave fisherfolk or sailor to transport them across Hard Bay to the ruins of Greystone village or Gloamhold’s benighted depths often visit the Fane of the Waves Eternal (location T1) or the Fishshamble’s Drunken Sailor tavern (location F2).
  Avoid the House of Healing: If you value your health and life, avoid the House of Healing (location L9). Its owner, Hannu Aalto, is as likely to make matters worse as to heal you. Either way, he charges up front!
  Missing Bodies: After an execution day, Traitor’s Gate (location G3) is festooned with the remains of those punished for their crimes and those doomed to linger in agony until their vitality fails. Sometimes, body parts—or entire bodies—go missing. Some gossips blame macabre souvenir hunters, while others suspect necromancers or their minions.
  Easily-Bribed Guards: Most of the guards at Low Gate (location G1) are easily bribed to look the other way. If you’ve got contraband to bring into the city, Low Gate is the best gate to use—unless its strict sergeant-at-arms is about; then, avoid the place like the plague!
  Plague: Many people are looking unwell and coughing a lot at the moment. The plague might be in Languard, and if it is, Low City, Shambles and Fishshambles are the places it will savage the most.
  Shadow Masks are Everywhere: Watch where and to whom you display your wealth in the Low City. The Shadow Masks have many agents and informants in the area. Many adventurers have had their possessions stolen —some are mugged after one too many ales, while others find their rooms ransacked after returning from a carouse.
  Getting Lost: The Low City is somewhere you can easily lose yourself. It’s also a dangerous place, but not as dangerous as the Shambles or the Wrecks.
  Ailing Stormlord: Stormlord Taneli Eronen grows increasingly old and frail. He hasn’t been seen outside the Fane of the Waves Eternal (location T1) for months. Rumour is that he’ll soon take his last voyage.


artisan_rumour
  Guild Dues Rising Again: The guild masters have raised membership dues for the third time this year. Several younger craftspeople are quietly talking about working outside the guild—a dangerous idea that could see them run out of the district entirely.
  Stolen Design: A pattern stolen from a local tailor has turned up in a foreign merchant's stock, sold openly in the market. The tailor is furious, the guild is supposedly investigating, and everyone suspects a workshop apprentice of selling the design.
  The Unlicensed Craftsman: There is an unlicensed craftsman somewhere in the district producing work as fine as any guild-approved piece—at half the price. The guilds want this person found and made an example of. Their customers want them left alone.
  Death in the Dye Vat: An apprentice was found dead in a dye vat last week, ruled an accident by the Watch. But the apprentice had loudly accused their master of adulterating materials the week before, and some colleagues don't believe it was an accident.
  The Wandering Tool: A peculiar tool of unknown origin has been quietly passing between workshops for the past month. Every craftsperson who borrows it produces their finest work—then the tool vanishes to the next owner. No one can explain it, and no one has managed to keep it.
  The Inferior Guild Mark: A respected master craftsman is secretly stamping inferior work with a full guild seal. The guild inspectors are coming next month, and word is that someone has already sent them an anonymous tip.
  The Apprentices' Whisper: The apprentices in several workshops have started meeting after hours. Whether it's an unauthorized social club, the beginning of a strike, or something more sinister depends on whom you ask.
  Feud in the Glass Quarter: Two master glassblowers—once close friends—are refusing to share the district's only high-heat kiln. Work for both shops has slowed to a crawl, and they've begun hiring heavies to stand outside their respective premises.
  The Locked Workshop: The most skilled smith in the district hasn't opened his shop in four days. His neighbours say they hear hammering at odd hours—always stopping the moment anyone knocks—and the smell from the chimney is wrong.
  Sabotage at the Kiln: Someone smashed the bellows of a prominent forge three nights ago. The owner blames a rival guild; the rival guild blames a dissatisfied customer. The Watch considers it a civil matter.
  Cursed Commission: A sculptor was commissioned for a grand piece by an anonymous wealthy patron. The work is nearly complete, but the sculptor has become convinced the piece is watching him. He refuses to finish it and has taken to sleeping in the street.
  A Masterwork for Sale: The finest piece of work anyone in the district has ever produced is currently sitting in a lockbox at the guild hall—the maker died before collecting payment, and no one knows who commissioned it. The guild is quietly debating whether to sell it themselves.


market_rumour
  The Stranger's Wares: A merchant arrived three days ago with a wagon full of strange, beautiful objects and no name anyone can remember. The goods are unlike anything from the known trade routes, and several buyers have reported odd dreams after purchasing something.
  Tampered Scales: The weights at several stalls along the south row have been tampered with. Someone is making a quiet profit on every transaction. The market master is aware but hasn't acted, which is itself suspicious.
  The Pickpocket Guild: The ring of pickpockets working the market is more organized than anyone realized. Reports suggest they operate in shifts, have lookouts on the rooftops, and split earnings at a fixed percentage. Someone is running them like a proper business.
  Buying Up the East Row: A foreign trading house has been quietly buying out stall leases along the entire east side of the market. The sellers were offered good prices and told nothing about the buyer's intentions. Everyone who asks is referred to a lawyer.
  The Merchant's Secret: The most successful merchant in the market has never once had a deal go wrong. Not a bad shipment, not a stolen delivery, not a single late payment. People say her luck is unnatural, and some of them mean it literally.
  Counterfeit Coin: Someone is flooding the market with counterfeit coins. The forgeries are excellent—many traders have accepted them without noticing. The money changers are refusing to guarantee transactions until the source is found.
  Bottled Wishes: A merchant near the north entrance is selling small sealed bottles, each containing, he claims, a single wish. He has sold out twice and is on his third stock. Nobody has confirmed the wishes work, but nobody who bought one will discuss what they wished for.
  The Missing Spice Shipment: A full wagon of valuable imported spices vanished between the city gate and the market warehouse—a journey of three streets. The merchant who lost it is convinced it was taken with inside knowledge of the route.
  The Market Master's Meetings: The market master has been holding private meetings with members of a family known to deal in smuggled goods. He claims they're negotiating a legitimate stall license. Most people don't believe him.
  Price War: Two rival cloth merchants have been engaged in a ruinous price war for nearly a month. Both are selling below cost, and everyone is waiting to see who breaks first. Rumour says one of them is being secretly subsidized by an outside investor with an interest in seeing the other destroyed.
  Lights Above the Warehouse: Strange lights—pale blue, perfectly silent—were seen moving above the market's warehouse district two nights ago. By morning, an entire crate of high-value goods had vanished from a locked storeroom.
  The Informant: Someone in the market is feeding information to the city watch about traders dealing in restricted goods. Three stalls have been raided in the past month, and the community is paranoid about who it might be.


high_rumour
  Noble Woman Abroad: Elina Vuolle, ruler of the dismal village of Coldwater, is in the city. The word is that her title and lands are for sale, but that no one is buying.
  Thieves in High Market: High Market (location H2) has suffered a sudden spate of thefts and pickpocketing. The market’s owner, Eleonora Pasanen, is said to be enraged at the thieves’ brazen actions.
  Sea Sprite Returned: Thought lost at sea a year ago, Sea Sprite has been sighted floundering off the Mottled Spire. The vessel is one of Vilutar Pakkanen’s (“Folk Out and About in High City”) and was on a long voyage to the Coral Sea. Someone will soon board the wreck to loot its cargo. (Refer to Wreck of the Sea Sprite for more details.)
  Black Swan Manor: There is something odd about Black Swan Manor (“Minor Locales in High City”). The owner no longer rents the building to adventurers after several strange, unspecified incidents resulted in extensive repairs to the cellar.
  Monstrous Hides Wanted: Kristiina Vaania at Boots and Laces (“Minor Locales in High City”) will purchase the hides of strange or outlandish monsters.
  Weird and Wonderful Food: If you want to try weird and wonderful food, the Ruby Plate (location H14) is the place to go. You may or may not be disappointed.
  Ancient Oaks: The oaks on Abbey Road are ancient and the home of nature spirits who were old when Languard was merely a village of crude huts. Damaging the oaks brings down their wrath on the perpetrators. Sometimes, lone folk go missing near the oaks.
  High Market: Many of the most skilled and in-demand artisans pitch stalls at High Market to showcase their creations. If you are looking for something special and expensive, High Market is likely the place to find it.
  Trouble in the Catacombs: Things are not right in the catacombs below the Father’s Hall. Rumours speak of tombs broken open and missing bodies. Some priests report feeling the malign presence of some unseen force lurking in the endless shadows of the place.
  Cannon: Work has started on another mighty cannon for Castle Languard’s ramparts. This weapon will be even more powerful than the duke’s current cannons. Rumour has it that the duke is planning to mount cannons on one of his ships as well, but such an undertaking would be extremely expensive. Perhaps taxes will soon rise.
  Missing Thieves: Thieves working in High City sometimes disappear. The watch isn’t concerned about missing thieves in High City—and the general consensus is that bodyguards or traps do away with the thieves. Given the influence of the folk involved, no one seems keen to investigate.
  Caves Under High City: Caves riddle the ground under High City. Some are said to connect to Castle Languard’s dungeons and—perhaps—even deeper locales. The watch maintains a small force (the Dark Wardens) to watch over the caves.
  Lights in the Chapel: Faint lights and strange sounds have been reported coming from the Chapel of the Maiden of Death (location H20) on Abbey Road. Some people say the knights interred in the chapel’s crypts have risen from the dead!
  The Vampire’s Lair: Tenhunen Mansion (location H21) was once the home of the master vampire Kaarlo Tenhunen. His home was said to be opulent beyond belief but also a charnel house. He hunted in the city for decades before being driven away. His home has lain empty since then; no one goes anywhere near it.
  Magic Potions and Tasty Pastries: Old Mother Grumm’s (location H10) sells some of the best pastries in the city. You can also sometimes buy magic potions there as well!
  The Wealthy Old Woman: Eleonora Pasanen owns the land High Market (location H2) stands on and is said to be the richest commoner in all of Ashlar. She is a shrewd merchant, and few people boast that they have gotten the best of her. Her family’s mansion is heavily guarded.
  Unspecified Foul Doings: Odd and terrible things happen at the Screaming Halls (location H15), Languard’s only asylum for the insane. Passersby often hear screaming coming from the building and its cellars. Many folk believe those given into the asylum’s care are doomed never to be seen again and that the staff are corrupt and uncaring.
  Special Books in a Special Collection: The Dreaming Spire’s (location H4) Sequestered Hall holds the greatest collection of books in Languard and the second-greatest collection in all of Ashlar. However, the Dreaming Spires has a second, restricted collection—the so-called Special Collection—which contains books filled with forbidden, restricted or troublesome content.
  Whatever You Want: The Dark Market (location H18) offers the wealthy illicit and exotic things from far-off lands. If you go there, though, watch out for the Dark Guard—a band of intensely loyal mercenaries charged with keeping trouble out of the market.
  Odd, Old Urmas: Urmas Aalto (location H3) is an old, cantankerous fellow. A wizard in his youth, he explored some of Gloamhold before retiring to live off the proceeds of his adventures. He is the city’s foremost authority on Gloamhold’s doom-drenched halls but is a difficult man to like. Some say his time “across the water" changed him.


fishing_rumour
  Bad Catches: Many of the fisherfolk complain of bad catches, of late. Some catch only small fish while others pull up mostly diseased or dead fish. Some mutter of foul sorcery or the actions of a depraved cult.
  Storms: The clergy at the Fane of the Waves Eternal (location T1) have predicted a savage storm will strike Languard during the next full moon. Some low-lying areas are bound to flood, and most fisherfolk are preparing for a few days in port. The price of fish will likely soon rise.
  Pirates Ahoy: Talk of pirates is rife. Several merchantmen report an increase in pirates cruising the nearby waters. Some of the pirate ships may hail from Deksport, as goblins and orcs have been reported among the crews.
  A New Fishing Tax: The fisherfolk are incensed that the duke is considering a new tax on their catches. (This may be true or could be a false rumour spread to spread discontent or discredit the duke for some reason.)
  Getting to Gloamhold: Adventurers without sailing skills or a boat often hire a brave sailor to convey them across Hard Bay. The best place to find such folk is the Drunken Sailor (location F2)—a popular dockside tavern.
  Floating Body: A body was found floating by the docks yesterday morning. The creature was man-like, but hideously ugly and covered in barely visible grey scales.
  Things in the Water: Several fisherfolk have reported seeing dark shadows underwater near the Svart’s mouth. Some describe the shadows as “wriggling”, while others say they were akin to humanoid octopuses!
  Old Mother Toivottu: Old Mother Toivottu has been seen abroad on Water Lane. Sightings of the incredibly ugly old hag always presage disappearances and woe among Fishshambles’s residents. Avoid Water Lane at night or when the thick sea mists roll in to blanket the area if you value your life.
  Missing Fisherman: Samuli Ilma was last seen sailing out to Hard Bay three days ago. He’s a skilled fisherman, and his friends and family fear the worst, even though the weather has not been inclement.
  1The Drunken Sailor: The Drunken Sailor (location F2) is the tavern to visit if you seek brave fisherfolk willing to sail across Hard Bay to Gloamhold’s benighted depths.
  Old Tunnels: Old tunnels crisscross the waterfront. Used by smugglers and thieves alike, some have flooded and are unusable. Some people believe they connect to even deeper, older tunnels, but most honest folk discount such wild rumours.
  Rumours of Dark Worship: Persistent rumours speak of odd cults among the fisherfolk. Said to meet in the dead of night, the cults venerate certain ancient sea gods. In return, the worshippers enjoy excellent catches, good weather and fine winds—even when their fellows do not.
  Merciless Sandu: Sandu, owner of Sandu’s Grog and Grub (location F11), is a merciless pirate. Long retired from such doings, he is still dangerous and has killed several folk just for annoying him or for saying bad things about his cooking.
  The Bizarre Bazaar: Strange things are for sale at the Arches Bazaar (location F10). Some of the things for sale there are merely odd; others are downright illegal. It’s not somewhere decent folk go to shop.
  Pirates! Smugglers! Slavers! The docks are a dangerous place to be at night. Sometimes, on the darkest nights of the new moon, smugglers, slaves, and pirates come ashore to ply their terrible trades. Some of the fouler folk of Fishshambles willingly work with these groups. Be wary of whom you trust in Fishshambles.
  Title: Strange folk dwell in the rotting hulk of a ship driven ashore below the Fane of the Waves Eternal (location T1). Those dwelling there have haggard, grey looks and are watched over by the old and quite mad Father Ukko.
  Buried Treasures of Water Lane: Water Lane is the haunt of beggars, lepers and those with nowhere else to go. Its northern stretch is often flooded by the Svart, and consequently, the tottering houses’ cellars are filled with silt and mud. Some of them also hold buried treasure!
  Almshouse of Despair: Chancellor Nalias Boferg at the House of Sighs (location F1), Fishshambles’s almshouse, is a nasty piece of work. He only cares about lining his own pockets. He cares nothing for the folk in his care. The people who live there are wretched folk who have nowhere else to go.
  Lying Low: If you want to hide from the watch, debtor or angry spouse, the Molley’s Bearded Lady inn (location F6) is the place to visit. Its odd owner, Mugwort “Molley’ Zinthra, will look after you.
  In League with the Takolen: Some of the roughest and worst denizens of the Fishshambles are in league with the Takolen. Such folk are no better than the Takolen with whom they consort.

temple_rumour
  The Missing High Priest: The head of one of the district's prominent temples has not been seen in public in over two weeks. His subordinates offer different explanations each time they're asked, none of them convincing.
  Lights in the Crypts: Strange lights were seen moving in the temple crypts three nights in a row. The priests decline to comment and have stationed a guard at the crypt entrance, which they had never done before.
  The Disputed Relic: A holy relic believed stolen years ago has resurfaced—and two temples each claim it as their own sacred property. The legal dispute is escalating into something that may require divine arbitration.
  The Wandering Pilgrim: A pilgrim passed through last week and, apparently at random, cured a child of an illness the district healers had given up on. The pilgrim refused payment and left before anyone thought to ask their name or their god's.
  Paid Blessings: One of the newer temples has been quietly offering paid blessings—a tiered service, with more expensive rituals guaranteeing better outcomes. The older and more established faiths are outraged, and the argument has become very public.
  The Silenced Acolyte: An acolyte recently claimed to have received a vivid prophetic vision of disaster coming to the city. Within a day, they were relocated to a different posting and are no longer available to speak with anyone. The senior clergy insist it was a routine reassignment.
  Disturbed Sleep: Everyone who lives within two streets of a particular temple has been reporting strange dreams for the past fortnight—vivid, unsettling, and always featuring the same figure standing in darkness. The temple denies any connection.
  The Empty Donation Chest: One of the smaller shrines was found with its locked donation chest completely empty and no sign of forced entry. The priests believe it was an inside job. The watch believes the priests are covering for someone.
  Tunnels Below the Temple: The catacombs beneath the temple district run much deeper and further than any official map shows. At least two acolytes have gotten lost down there and had to be retrieved. Some of the older passages predate the temple above them by centuries.
  The Cursed Merchant: A wealthy merchant publicly refused to pay a temple tithe and insulted the clergy doing the collecting. A week later, his storehouse burned down. The clergy say they had nothing to do with it. Nobody quite believes them.
  Rival Faiths: Two of the district's faiths have been in open competition for new worshippers, and it has turned ugly. Congregants are being harassed in the street, and someone defaced the entrance to one of the temples last night.
  Something Sacred Has Changed: The oldest shrine in the district has been behaving oddly. The eternal flame has changed colour, the offerings left overnight are being moved, and the statue at its center—which has stood unchanged for generations—has a new expression on its face.


castle_rumour
  The Lord's Absence: The lord has not made a public appearance in over a week. Different servants give different explanations when asked. The guard rotation has been quietly doubled, and visitors to the keep are being turned away with unusual frequency.
  The Dismissed Officer: A senior guard officer was relieved of duty without explanation two days ago. His colleagues won't discuss it, and he himself has not been seen in the district since. The watch is actively discouraging questions about the matter.
  New Construction Below: Workers have been seen entering the keep's lower levels at odd hours. The construction is quiet and clearly deliberate—no one is talking about what is being built. The workers were brought in from out of town and are housed within the keep.
  The Sealed Warrant: A legal warrant was issued from the keep three days ago and sealed in black wax—the kind reserved for arrests of significant persons. The name on it has not been made public. Several notable families in the city are extremely anxious.
  Missing Records: The tax and census records for the past two years have gone missing from the keep's administrative archive. The official explanation is misfiling. The unofficial explanation varies, but involves the word "corruption" more often than not.
  Strange Company in the Barracks: A mercenary company has taken up quarters in the castle's outer barracks. The regular garrison doesn't know why they're here and has been told not to ask. The mercenaries keep to themselves and speak a dialect that few in the city recognize.
  Poison in the Kitchen: Someone tried to poison a senior official's meal last month. The incident was hushed up completely—the affected person recovered, and no arrest has been announced. The kitchen staff are quietly terrified, and several have given notice.
  Foreign Guests: A foreign delegation has been lodged in the keep for four days of private meetings. No agenda has been announced, no attendees named, and the guards are under orders to ensure no one approaches the east wing without an appointment.
  The Crumbling Wall: A section of the keep's outer wall, on the less-visible northern side, has developed a suspicious crack. Engineers were brought in, looked pale, and have been working ever since. Unofficially, the structural problems may run much deeper than the surface damage suggests.
  A Favor Called In: Word has reached certain ears that a powerful noble family is calling in an old debt from the lord himself. No one knows the nature of the original favor, but people who know both parties are suddenly finding reasons to be elsewhere.
  Lights in the Archive Tower: The lights in the keep's archive tower have been burning through the night for a week. Scholars brought in under discreet cover are searching for something specific in the historical records. They are not finding it quickly.
  Unannounced Inspection: City officials conducted an unannounced inspection of the district's merchants and traders yesterday, confiscating records and ledgers from several established businesses. No explanation was offered and no receipts were given. The affected merchants are furious and frightened.


dock_rumour
  The Crewless Ship: A vessel docked at the east pier two nights ago with no crew visible on deck. The harbor watch boarded it and found the hold full of cargo, the lanterns lit, food still warm on the captain's table, and not a living soul aboard.
  The Night Workers: Someone is paying triple the normal rate for dock labor on the south pier, nights only, cash in hand, no questions asked. Several workers have taken the job. None of them will talk about what they moved or where it went.
  The Bribed Harbor Master: The harbor master waves certain ships through without inspection and signs off their manifests without looking. Everyone on the docks knows which ships receive this treatment. Nobody knows—or will say—what those ships are carrying.
  Something in the Water: The fishing boats working the southern approaches have been pulling up empty nets for a week. Those who go out and come back describe a deep cold patch in the water—unnatural, perfectly circular—where no fish will go. Two boats that sailed directly over it did not return.
  Contraband Weapons: A cache of weapons stamped with a foreign military mark was found hidden in a waterfront warehouse. The weapons are military-grade and numerous. The Watch has sealed the building and is talking to no one about it.
  The Undead Crew: A privateer vessel arrived for repairs six days ago. Those who've gotten a look at the crew say they move wrong, don't eat, don't sleep, and never come ashore. The captain—very much alive—handles all port business personally and pays in gold without bargaining.
  Bodies on the South Shore: Unusual bodies have been washing up on the south shore—not drowned sailors, but something stranger. The Watch stopped publicly reporting the findings a week ago, which has done nothing to stop the rumors.
  The Sealed Ship: A merchant vessel has been docked and sealed—no one on or off—for four days. The ship flies a legitimate flag, the harbor fees are paid, and the crew simply stare back at anyone who approaches the gangway.
  Missing Customs Officer: A customs official who flagged a suspicious cargo manifest on a wealthy merchant's ship has not reported for duty since. The official explanation is unexpected personal leave. His family hasn't heard from him either.
  Smugglers' Tunnel: There is an old tunnel connecting one of the waterfront warehouses to a building two streets back, pre-dating the current district entirely. Smugglers use it regularly. Several dock workers know which warehouse, but won't say, fearing retribution.
  Pirate Sighting: Two fishing vessels and a trade cutter reported a pirate ship flying no flag operating within a day's sail of the harbor. The vessel was described as unusually fast and seemed to appear and disappear from clear water. The harbor master is officially unconcerned.
  Cursed Cargo: A shipment of crates arrived last week and has been sitting unclaimed in a bonded warehouse ever since. The longshoremen who unloaded it refuse to go near it again—three of them fell ill the same night—and the shipping company denies the cargo exists.


university_rumour
  The East Tower Incident: An experiment in the east tower produced a flash of light visible across the entire district. The university has issued no statement. Three students who were present that night have been quietly relocated to different accommodation, and the floor of the tower where it occurred is sealed.
  The Missing Student: A second-year student has been missing for eight days. Her classmates say she was close to a significant breakthrough in her thesis research—on a topic her supervisor had repeatedly told her to abandon. Her notes are also gone.
  The Long-Overdue Book: A library text has been checked out for forty-three years. The borrower's name in the register doesn't match any current faculty or alumni record. The book—a treatise on practical planar theory—is listed as irreplaceable.
  The Broken-Into Archive: The restricted archive in the lower library was entered without authorization last month. The university insists nothing was taken. Three senior scholars have since resigned without explanation and left the city.
  The Unknown Cantrip: A young student claims to have discovered a previously unknown cantrip entirely by accident. She's demonstrated it for several peers, who confirm it does something—though they disagree on what. The faculty is split between dismissing her and suppressing her findings.
  The Locked Hall: Strange sounds come from a sealed lecture hall every night at approximately the same hour—crying, whispering, and occasional laughter. The hall has been officially closed for renovation for six months. No renovation work is visible.
  The Ancient Student: The university quietly enrolled a new student this term who appears, by all outward signs, to be at least two hundred years old. Faculty are told not to ask about their background. Fellow students report that the ancient student attends every lecture and takes meticulous notes but never speaks.
  Inconvenient History: Artifacts recovered from a recently excavated tomb near the city directly contradict several accepted points of scholarly history on the region. The university has the artifacts. Certain faculty members are very anxious for the findings to remain unpublished.
  The Anonymous Warnings: Someone has been leaving handwritten notes in students' rooms, warning them away from a specific area of the library's lower stacks—describing it as "watched." The notes are always gone by morning, and no one has caught the writer. The area in question is accessible but officially unmapped.
  Dangerous Research: A senior wizard on the faculty has been conducting prohibited experiments in the sub-basement of the research hall. Two colleagues know about it, have said nothing, and are beginning to regret that decision as the results grow harder to conceal.
  The Rivals' Duel: Two faculty members have taken an academic disagreement to its logical conclusion and challenged each other to a formal magical duel—to be held in the practice courtyard at dawn, witnessed by their respective departments. The university's administration has declined to intervene.
  Forbidden Purchase: A rare and extensively annotated spellbook recently appeared at the market, offered by an estate seller with no knowledge of what they were selling. Three faculty members bid against each other and against several private buyers. The winner has not shown the book to anyone and has locked their office door for a week.











squalid_sounds
  The distant baying of a dog that has been barking for so long no one hears it anymore
  Raised voices from behind a shuttered window—argument or grief, it's impossible to say
  The skitter of rats in the gutter and the slow drip from a broken eave
  Flies thick around a pile of refuse at the mouth of an alley
  A child crying somewhere unseen, not answered
  The stench of middens and standing water pooled between crooked cobbles
  Crows picking over scraps on a rooftop, quarrelling in hoarse bursts
  A drunk propped in a doorway, muttering at nothing in particular
  Smoke from cheap tallow candles seeping under a dozen ill-fitting doors
  The sound of something—or someone—moving quickly in the dark between buildings
  The smell of old boiled cabbage and cheaper things from the cook-shops
  A beggar's cup tapping a slow rhythm on the stones: two coins, no more
  Laundry stretched overhead like wet flags, dripping onto the alley below
  The creak of a tenement stair bearing more weight than it was built for

low_sounds
  The cry of a pieman working the street, voice hoarse from a day's worth of it
  Raised voices from a tavern spilling out through a propped-open door
  The sounds of animals—a pig loose in the lane, someone chasing it without urgency
  Two neighbours leaning from adjacent windows, conducting an argument across the gap
  The clatter of a dropped pot from an upper floor, then silence, then cursing
  The smell of sawdust, tallow, and yesterday's stew mingled together
  A street preacher on the corner with a small crowd and a large voice
  Children playing a game in the gutter with broken crockery for pieces
  Dogs at a dispute in an alley: brief, loud, then nothing
  The squeak of a poorly-hung sign in the wind, swinging above a shuttered shop
  A nightsoil cart making slow progress against the foot traffic
  Someone practicing a tune badly on a fiddle through a thin wall
  The smell of tanneries and fuller's earth drifting from a side street
  The market bell from a district away, still audible if the wind is right


artisan_sounds
  Constant hammering rhythm like a heartbeat of the district
  Multicolored laundry strung overhead, dripping dye
  Sparks drifting into twilight: The smell of tanned leather, hot iron, and wet wool
  Apprentices carrying messages between guild halls
  Chalk sigils marking completed commissions
  The hiss of hot metal plunged into a quench barrel
  The rasp of a hand plane and the scent of fresh sawdust
  A journeyman whistling steadily while they work, oblivious to everything else
  The creak and rumble of a heavy delivery cart navigating a narrow lane
  Bolts of undyed cloth being measured, folded, and argued over in a doorway
  Smoke from a dye-house chimney settling low and acrid over the street
  The tap of a cobbler's hammer from an open window—steady, unhurried, relentless
  The smell of linseed oil, sizing, and something mineral from the glassblowers' quarter
  Two guild masters talking loudly outside a hall, neither willing to be the one to leave first

market_sounds
  Hawkers crying prices above the noise of the crowd
  The clatter of coin on wooden counters and the ring of scales being set
  The smell of spice stalls: pepper, cinnamon, and something sharp and unidentifiable
  Colorful awnings snapping and billowing in the wind
  A dispute being adjudicated loudly at the corner of two stalls
  Children darting between adults' legs on errands real and invented
  Dogs nose-down beneath the stall-legs, searching for dropped scraps
  The squeal of heavily loaded cart axles on the cobblestones
  A town crier repeating the same announcement to anyone who slows down
  The thump and scrape of sacks being stacked, counted, and restacked
  Beggars and urchins at every entrance and exit
  The smell of roasting meat and frying dough from the food stalls
  A cartwheel cracks on the cobbles under an overloaded wagon
  A performing musician trying to be heard over the general roar of trade
  Two merchants haggling in a language neither fully speaks, aided by gesture and exasperation

high_sounds
  Clipped hooves on well-maintained cobblestones
  The rustle of fine fabrics and the discreet clink of quality jewelry
  Perfume and pomander competing with the scent of private garden hedges
  A private musical recital audible from an upper-storey window
  Servants moving briskly on errands, eyes down, not meeting anyone's gaze
  A philosophical debate conducted in the street with elaborate civility
  The creak of a well-oiled gate and the measured tread of a liveried guard
  A fountain playing in a walled garden just out of sight
  Lacquered carriage wheels on smooth stone: someone important arriving
  The careful, economical conversation of people who know they may be overheard
  A dinner bell ringing from inside a private estate
  The distant sound of a fencing lesson from a courtyard: footfalls and the ring of practice blades

fish_sounds
  The slap of wet fish on wooden counters
  Seagulls screaming overhead in constant, wheeling circuits
  The creak and drip of nets hung out to dry on their frames
  The smell of salt, fish, and something on the turn
  Fishwives calling prices in voices that carry a quarter mile without effort
  The thump of boat hulls against dock pilings as the tide moves
  Children and dogs competing for scraps around the stalls
  Smoke from the curing houses drifting low across the rooftops
  The groan of ropes under tension, wood under load
  Scales glittering like scattered coin in the morning light
  A fisherman mending nets with practiced, absent fingers and a faraway look
  Ice being broken and shoveled into boxes, rattling like gravel
  The constant wet undertone of water: dripping, lapping, running beneath the boards
  The hollow boom of a cask being rolled across a dock
  A gull lands on a stall and immediately takes flight with something in its beak

temple_sounds
  Incense thick as fog drifting through cloisters
  Stone courtyards echoing with chanted psalms
  Beggars clustered near alms houses
  Wax-dripped candles flickering in alcoves
  Pigeons roosting in high arches
  Processional banners snapping in the wind

castle_sounds
  The measured tramp of a guard patrol, regular as a clock
  The scratch of a quill in a clerk's office, window open to the street
  A sealed document changing hands without eye contact or acknowledgment
  A petitioner arguing their case to a gatehouse guard with diminishing confidence
  An official proclamation being read from a high step to a thin crowd
  A banner snapping against its pole in the wind above the keep's gate
  The distant sound of soldiers drilling in a courtyard: boots, commands, repetition
  An iron gate closing and being barred from within
  The smell of sealing wax and official ink
  The creak of an overloaded archive shelf somewhere behind a closed door
  A dignitary's lacquered coach on polished stone: the horses' breath in the cold air
  The economical silence of guards who have learned not to speak unless spoken to

dock_sounds
  The air is heavy with the tang of salt and the curses of sailors.
  Two sailors snatch a minute’s rest with a wine flask while swapping lies about their previous voyages.
  Sea gulls and other birds wheel and turn overhead.
  Sailors are painting the hull of a docked ship.
  Boxes and barrels are stacked haphazardly at the foot of a gangplank leading to a large cog.
  A plank cracks under a PC’s weight.
  A peasant stands in a rowboat beneath the dock busily filling several bags with seaweed.
  A large pile of vomit covers the dock; several dogs lick greedily at it.
  Tar buckets bubbling beside repair docks
  Gulls screaming over discarded fish guts
  Rope coils stacked like sleeping serpents
  Tavern doors slamming in the sea wind
  Foreign sailors speaking in half-understood tongues
  The constant groan of wood against wood
  Several folk sit at the end of the pier, fishing rods in hand.
  Four drunk sailors stagger along the dock; one slips and almost falls into the water.
  The smell of fresh fish is heavy in the air.
  An old sailor sits on a box while singing a lusty sea shanty and drinking heavily.
  A small gang of thuggish men loiter on the dock; the threat of violence hangs over them.
  Small children dart in and out of the press of sailors and porters.
  A fist fight suddenly breaks out between rival crews over some imagined slight.
  A half-dozen porters stagger down the dock carrying matching sea chests.
  A seasick passenger staggers off a ship, drops to the ground and kisses the dock.
  Curses and shouts in a half-dozen languages fill the air.
  Buckets of sand – ready in case of fire – are positioned at strategic places along the docks
  A large splash followed by a shout announces the fall of a heavy box into the sea.
  A sailor is busy swabbing the dock – he appears to be trying to remove a large bloodstain.
  A sinister fin cuts the water near the docks.
  The smell of tar and paint permeate the air.
  A sea captain argues loudly with a city official.
  Sea birds wheel and dart above a large ship as its cook throws food scraps into the harbour.
  Two sailors drag an unconscious fellow down the dock. They are both drunk and laughing uncontrollably.
  Children laugh and shout as they dive into the harbour from the dock.
  Broken wood, scraps of food and other rubbish float on the water surrounding the dock.
  A pile of ballast stones almost blocks the dock.
  A sailor – shouting loudly that his vessel needs new crewmen – walks up and down the dock.
  A scream is followed by a loud splash as a sailor falls from the rigging of a docked ship.
  Several people are swimming in the water of the harbour. Suddenly, one of them is pulled beneath the surface.
  A patrol of four watchmen surrounding an official of some sort push through the press.
  Two mangy dogs dart through the press; one has a string of sausages in its mouth.
  The sounds of a violent argument emanate from a docked vessel.
  A waterman tries to sell his wares to thirsty sailors.
  An artist sits sketching nearby vessels.
  A performing bard strolls up and down the dock calling out the local news to new arrivals.
  A sailor – a parrot on each shoulder and a heavy bag in each hand – walks away from a large ship.
  Four watchmen march down the dock dragging a badly beaten prisoner with them.
  The dock shivers as a large vessel, badly steered, thuds into its side.
  A sailor strolls up and down the dock shouting that his vessel is available for hire.
  A sailor charges down the dock chasing a small child who carries a small sack.
  Sharp-eyed PCs can notice a figure lurking in the shadowy water under the dock.
  Boxes and barrels are stacked neatly along the dock.
  Cries of alarm and fear, and the sight of smoke rising from a docked ship, spark a general panic on the dock
  A rowing boat bobs next to the dock and the occupant shouts before throwing the PCs a line to tie off.

university_sounds
  Ink-stained fingers and wax-sealed letters
  Bookbinders hammering spines in narrow workshops
  Students debating loudly in courtyards
  Cloister gardens full of medicinal herbs
  Bells marking canonical hours
  Drafty dormitories cluttered with parchment and candles








armour_interest
  <strong>Engraved Breastplate (600 gp)</strong>: Painted with a gold wash and wrought to depict a heavily muscled male torso, this breastplate suits a vain wearer.
  <strong>Plate Armour (1,800 gp)</strong>: Crafted by a master armourer, this plate armour features a snarling dragon’s face on its breastplate. The price includes fitting.
  <strong>Heavy Steel Shield (50 gp)</strong>: Polished to a high sheen and protected by a bleached leather cover, this shield is unadorned—ready for the wielder’s device.
  <strong>Plate Armour (1,700 gp)</strong>: Forged by a master dwarf craftsman, this armour provides more protection than that given by a normal suit. The price includes fitting.
  <strong>Elven Chain (3,500 gp)</strong>: Polished to an intense gleam, this chain armour, forged of lightweight silvery metal, weighs virtually nothing.
  <strong>Angel Helm (50 gp)</strong>: Wrought in the likeness of an angel, this white steel helm offers excellent protection.
  <strong>Heavy Wooden Shield (5 gp)</strong>: The red paint on this heavy shield is flaking away, but the shield is in good condition. It comes with a leather shield cover. A single word, “Forward”, is inscribed on the back of the shield.
  <strong>Supple Leather Armour (6 gp)</strong>: Some of the straps on this armour need attention, but it is otherwise in good condition. It has two concealed pockets at the waist, big enough for lockpicks and the like.
  <strong>Studded Leather Armour (35 gp)</strong>: Replete with black studs, this suit of armour looks to be in good repair. The studs are actually silver, painted black to disguise them the previous owner liked to carry her wealth with her. This deception becomes obvious once the wearer has been injured in combat several times.
  <strong>Light-Weight Buckler (5 gp)</strong>: This thin buckler is made of beaten steel; several tiny dents mar its face.
  <strong>Cloak of Mail (20 gp)</strong>: This heavy, fur-lined cloak has a layer of thin mail stitched into its lining.
  <strong>Minotaur Helm (20 gp)</strong>: Of black iron, this helm is wrought to depict a bestial minotaur’s head.
  <strong>Dog Barding (25 gp)</strong>: This studded leather barding fits a large dog or wolf, and it is in good condition.

jewellery_interest
  <strong>Golden Torc (500 gp)</strong>: Wrought of gold and highly polished, this thin torc is a thing of beauty. It is so exquisite, it could form the base of a magic item.
  <strong>Platinum Dragon Ring (1,000 gp)</strong>: This gleaming ring has a dragon’s claw-shaped setting that holds a ruby. Draconic script on the inside of the band wishes the wearer a dragon’s bravery and fortitude.
  <strong>Bejewelled Necklace (1,500 gp)</strong>: Pregnant with a myriad of tiny cut gems, this golden necklace catches the light and glows with iridescent colours. This is not a subtle piece; it is a statement of wealth and power.
  <strong>Platinum Circlet (2,000 gp)</strong>: Beautiful and complex scrollwork decorates this slender, highly polished circlet.
  <strong>Malachite Ring (1,000 gp)</strong>: Large, lustrous green stones (malachites) fill this silver ring’s settings. Arcane sigils, protection against divination magics, are etched into the stones.
  <strong>Golden Monocle (500 gp)</strong>: With a delicate golden band, this monocle depends from a slender golden chain and comprises magically hardened glass.
  <strong>Bronze Armband (1 gp)</strong>: Dented and covered in verdigris, this armband’s carving depicts a stretch of nearby coast and comprises a map to an ancient warrior’s hidden burial crypt.
  <strong>Tentacle Ring (5 gp)</strong>: This tarnished but delicate silver ring is wrought in the shape of four intertwined tentacles. It needs a good clean. Close examination reveals it to be of olden elven craft.
  <strong>Charm Necklace (5 gp)</strong>: Once owned by a druid, tiny silver charms depicting various forest animals hang from this lightweight silver necklace. The necklace is tarnished, and some of the charms are damaged.
  <strong>Gold Hoop Earring (1 gp)</strong>: Overly large, this golden hoop earring is sized for a giant. It is dented, but could serve as a bangle for a halfling, gnome or child.
  <strong>Silver Locket (5 gp)</strong>: This silver locket holds no miniature painting; instead, minuscule particles of dust coat its inside.
  <strong>Gold Ring (8 gp)</strong>: This heavy gold signet ring bears a scratched fishing net sigil.

clothing_interest
  <strong>Dirty Cloak (1 gp)</strong>: This dirty scarlet cloak has a frayed hem. It once belonged to a wizard and has a secret pocket containing his diary.
  <strong>Yellow Cape (2 gp)</strong>: Edged with white fur, which has seen better days, this yellow cape is grimy.
  <strong>Wizard’s Hat (5 gp)</strong>: This battered archetypal blue pointy wizard’s hat is replete with silver star decorations. It looks like nothing special, but close examination reveals it is of exceptional quality. Someone trying it on discovers it automatically resizes to fit their head; what other powers may lurk within?
  <strong>Black Gloves (4 gp)</strong>: Of supple leather, these elbow-length gloves have gold stitching that looks like leaping flames around their cuffs.
  <strong>Knee-High Boots (3 gp)</strong>: These dirty boots each conceal a dagger sheath (but no daggers).
  <strong>Thick Girdle (2 gp)</strong>: This black leather girdle has three hidden pouches sized for coins or other tiny items.
  <strong>Blacked Hooded Cloak (1 gp)</strong>: Dried mud splatters the frayed hem of this jet-black velvet cloak. The cloak has a deep cowl, perfect for those who value privacy or wish to project a mysterious or sinister appearance.

art_interest
  <strong>Wind-Up Dragon (150 gp)</strong>: Painted a lurid scarlet hue, this puppy-sized wind-up red dragon is an intricate work of genius. When activated, it toddles along, flaps its wings and even opens its mouth.
  <strong>Fine Rug (500 gp)</strong>: Depicting a stylised (accurate) map of Gloamhold, this six-foot square rug is a beautiful and supremely useful object. To walk on it would be to denigrate the artisan’s incredible skill.
  <strong>Perfume Bottle (20 gp)</strong>: Of glimmering blueish crystal, this tiny bottle could serve as a potion vial.
  <strong>Walking Stick (350 gp)</strong>: This mahogany walking stick has a thick silver tip and conceals a needle-thin rapier.
  <strong>Silver Hunting Horn (100 gp)</strong>: Of elven craft, this silver horn features elaborate scrollwork and hangs on a thin black leather strap. It emits a beautiful, wavering sound.
  <strong>Gem-Encrusted Coffer (700 gp)</strong>: Encrusted with many minor gemstones, this lead-lined coffer has an incredibly complicated puzzle lock.
  <strong>Fire-Damaged Rug (2 gp)</strong>: Emblazoned with a stylised map of Ashlar, this ragged rug is large and heavy. The part depicting the Forest of Gray Spires is scorched.
  <strong>Golden Figurine (10 gp)</strong>: Covered in fading yellow and red paint, this small golden figurine is badly damaged—a deep crack cuts down along the lion’s back. This was once a figurine of wondrous power; perhaps it could be repaired by a skilled artificer.
  <strong>Broken Pipe (3 gp)</strong>: Optimistically priced, this broken ivory pipe has beautiful, but disturbing engravings of hideous, deformed humans running joyfully into the sea.
  <strong>Banded Wooden Coffer (5 gp)</strong>: Designed to fit into a backpack, this coffer, lined with lead to defeat detect magic and the like, is lockable, but the key is missing.
  <strong>Odd Statuette (3 gp)</strong>: Of bronze, this small statuette depicts a horrible squatting humanoid octopus thing. It is old, tarnished, and disturbing.
  <strong>Potion Vial (5 gp)</strong>: This hollowed fang from some unidentifiable creature is large enough to hold a potion.
  <strong>Dragon Painting (100 gp)</strong>: In an ornate frame, this large oil painting of a red dragon emerging from its lair is breathtakingly executed; the painting also shows a ruined monastery amid a tree-choked range of hills.

oddities_interest
  <strong>Wolf Cub (50 gp)</strong>: Growling at all who come near, this jet black wolf cub is terrified of the hubbub and nips anyone trying to pet it.
  <strong>Used Parchments (5 gp)</strong>: A sheaf of used parchments fills an old box. The bundle could contain the fragment of an adventurer’s diary, an old map and so on. Any of these could propel the party into its next adventure.
  <strong>Figurine of Conn (300 gp)</strong>: Depicting Conn in idealised male form, this golden statuette has his tenets: rulership, law, family and community engraved upon its base.
  <strong>Large Egg (20 gp)</strong>: The size of a human’s head, this speckled egg nestles in a small coffer; the seller does not know what lies within.
  <strong>Deeds to a Castle (5,000 gp)</strong>: These deeds, on an old, cracked parchment, bestow ownership of a castle far to the east on the border of the Grim Lands.
  <strong>Book of Holding (600 gp)</strong>: The covers of this thin book function as a bag of holding; each can hold 50 lbs
  <strong>Iron Marbles (5 gp)</strong>: The large marbles filling this small bag are numerous enough to fill a ten-foot-square area.
  <strong>Taxidermied Troll Head (10 gp)</strong>: This gruesome decoration gathers dust on a shelf. Its mouth is open in a grimace—something small could be hidden at the back of its throat.
  <strong>Ornate Locked Coffer (50 gp)</strong>: Protected by a fiendishly complex lock (for which the key is lost), this lead-lined chest is offered with contents unseen. (The coffer could contain anything: a magic item, spellbook, treasure map, expensive spell components or the hook to the characters’ next adventure.)

weapon_interest
  <strong>Bronze Dagger (1 gp)</strong>: Covered in verdigris, this bronze dagger is obviously of ancient design. A wavy, snake-like pattern decorates the weapon’s blade. The dagger holds the trapped spirit of the mad wizard Sangasu Kuara (who tries to dominate the weapon’s owner).
  <strong>Silvered Longsword (400 gp)</strong>: This beautiful blade is no mere accoutrement. Wickedly sharp and perfectly balanced, it is the weapon of a (noble) warrior.
  <strong>Ceremonial Heavy Mace (500 gp)</strong>: With a head of polished steel deeply incised with geometric grooves, scenes of war and heroism decorate this mace’s steel shaft. A large black gem (a flawless jet) caps its haft.
  <strong>Greatsword (600 gp)</strong>: Almost six feet long but perfectly balanced, this sword, forged by a master weaponsmith, has been sharpened to a razor’s edge. Its overly large pommel is bare, and the price includes an engraving of the buyer’s choice.
  <strong>Fiery Longsword (450 gp)</strong>: Engraved with beautiful carvings of writhing fire, this beautiful longsword was once destined to be enchanted as a flame tongue, but the wizard died before he could enscroll the blade.
  <strong>Rapier (400 gp)</strong>: Needle-thin and finished with an elaborate gold and silver hand guard, the weapon is beautiful and lethal.
  <strong>Heavy Dagger (1 gp)</strong>: This thick, heavy dagger is seemingly made of dark grey steel. Seemingly, a crude, unremarkable weapon, it is actually adamantine! It fills an old, nondescript sheath. (If the characters decide to buy this, someone else [roll on “Interesting Fork”] arrives on the scene, realises what the dagger is, and a bidding war—that could turn violent—ensues).
  <strong>Ash Spear (3 gp)</strong>: With a haft of strong, thick ash, this spear has hunting scenes engraved on its heavy point.
  <strong>Blacksmith’s Hammer (2 gp)</strong>: Dented through much use, this heavy hammer has engravings of lightning bolts on its head.
  <strong>Quarterstaff (3 gp)</strong>: Of thick and heavy oak, this stout staff has been “blessed by the archdruid herself.” The seller has no way of proving this claim.
  <strong>Stiletto (6 gp)</strong>: A thief’s or assassin’s blade, this slender weapon is lightweight and easily hidden.
  <strong>Iron Sling Bullets (3 gp)</strong>: A small pouch holds 15 iron sling bullets; they are reusable.
  <strong>Silvered Dagger (90 gp)</strong>: Wickedly sharp, this slender, gleaming poniard is perfectly balanced but has never been used in combat. The weapon comes in a plain leather scabbard.

potion_interest
  <strong>Potion of Growth (100 gp)</strong>: Held in a tiny steel vial, this transparent, viscous liquid smells slightly of gingerbread. The arcane symbols for “magic” and “giant” are etched into the vial.
  <strong>Potion of Greater Healing (250 gp)</strong>: Flecks of dried blood dot this small iron vial. Tiny motes of gold glimmer in the deep red potion.
  <strong>Vial of Holy Water (30 gp)</strong>: This heavy iron vial holds concentrated holy water. The water was created with special blessed celestial silver of extraplanar origin and is twice as effective as normal holy water.
  <strong>Mis-Identified Potion (250 gp)</strong>: Kardagg thinks this small clay vial contains a potion of greater-healing. Sadly, it doesn’t; he was fooled by a charismatic scoundrel into paying good money for a normal potion of healing. The scarlet liquid inside the vial is thick and gloopy.








common_magic
    Mithral armor
    Potion of climbing
    Potion of healing
    Spell scroll (cantrip)
    Spell scroll (1st level)
    Bag of holding
    Cloak of elvenkind
    Boots of striding and springing
    Goggles of night
    Hat of disguise
    Lantern of revealing
    Rope of climbing
    Sending stones
    Helm of comprehending languages
    Ring of feather falling
    Wand of magic detection
    Alchemy jug
    Immovable rod

uncommon_magic
    Adamantine armor
    Alchemy jug
    Ammunition +1
    Amulet of proof against detection and location
    Bag of holding
    Bag of tricks
    Boots of elvenkind
    Boots of striding and springing
    Boots of the winterlands
    Bracers of archery
    Brooch of shielding
    Broom of flying
    Cap of water breathing
    Circlet of blasting
    Cloak of elvenkind
    Cloak of protection
    Cloak of the manta ray
    Decanter of endless water
    Deck of illusions
    Driftglobe
    Dust of disappearance
    Dust of dryness
    Dust of sneezing and choking
    Elemental gem
    Eversmoking bottle
    Eyes of charming
    Eyes of minute seeing
    Eyes of the eagle
    Figurine of wondrous power (silver raven)
    Gauntlets of ogre power
    Gem of brightness
    Gloves of missile snaring
    Gloves of swimming and climbing
    Gloves of thievery
    Goggles of night
    Hat of disguise
    Headband of intellect
    Helm of comprehending languages
    Helm of telepathy
    Immovable rod
    Instrument of the bard (Doss lute)
    Instrument of the bard (Fochlucan bandore)
    Instrument of the bard (Mac-Fuirmidh cittern)
    Javelin of lightning
    Keoghtom's ointment
    Lantern of revealing
    Mariner's armor
    Medallion of thoughts
    Necklace of adaptation
    Oil of slipperiness
    Pearl of power
    Periapt of health
    Periapt of wound closure
    Philter of love
    Pipes of haunting
    Pipes of the sewers
    Potion of animal friendship
    Potion of fire breath
    Potion of giant strength (hill giant)
    Potion of greater healing
    Potion of growth
    Potion of poison
    Potion of resistance
    Potion of water breathing
    Quiver of Ehlonna
    Ring of jumping
    Ring of mind shielding
    Ring of swimming
    Ring of warmth
    Ring of water walking
    Robe of useful items
    Rod of the pact keeper +1
    Rope of climbing
    Saddle of the cavalier
    Sending stones
    Sentinel shield
    Shield +1
    Slippers of spider climbing
    Spell scroll (2nd level)
    Spell scroll (3rd level)
    Staff of the adder
    Staff of the python
    Stone of good luck (luckstone)
    Sword of vengeance
    Trident of fish command
    Wand of magic detection
    Wand of magic missiles
    Wand of secrets
    Wand of the war mage +1
    Wand of web
    Weapon +1
    Weapon of warning
    Wind fan
    Winged boots

rare_magic
    Ammunition +2
    Amulet of health
    Armor +1
    Armor of resistance
    Armor of vulnerability
    Arrow-catching shield
    Bag of beans
    Bead of force
    Belt of dwarvenkind
    Belt of giant strength (hill giant)
    Berserker axe
    Boots of levitation
    Boots of speed
    Bowl of commanding water elementals
    Bracers of defense
    Brazier of commanding fire elementals
    Cape of the mountebank
    Censer of controlling air elementals
    Chime of opening
    Cloak of displacement
    Cloak of the bat
    Cube of force
    Daern's instant fortress
    Dagger of venom
    Dimensional shackles
    Dragon slayer
    Elixir of health
    Elven chain
    Figurine of wondrous power (bronze griffon)
    Figurine of wondrous power (ebony fly)
    Figurine of wondrous power (golden lions)
    Figurine of wondrous power (ivory goats)
    Figurine of wondrous power (marble elephant)
    Figurine of wondrous power (onyx dog)
    Figurine of wondrous power (serpentine owl)
    Flame tongue
    Folding boat
    Gem of seeing
    Giant slayer
    Glamoured studded leather
    Helm of teleportation
    Heward's handy haversack
    Horn of blasting
    Horn of valhalla (silver or brass)
    Horseshoes of speed
    Instrument of the bard (Canaith mandolin)
    Instrument of the bard (Cli lyre)
    Ioun stone (awareness)
    Ioun stone (protection)
    Ioun stone (reserve)
    Ioun stone (sustenance)
    Iron bands of bilarro
    Mace of disruption
    Mace of smiting
    Mace of terror
    Mantle of spell resistance
    Necklace of fireballs
    Necklace of prayer beads
    Oil of etherealness
    Periapt of proof against poison
    Portable hole
    Potion of clairvoyance
    Potion of diminution
    Potion of gaseous form
    Potion of giant strength (fire giant)
    Potion of giant strength (frost or stone giant)
    Potion of heroism
    Potion of invulnerability
    Potion of mind reading
    Potion of superior healing
    Quaal's feather token
    Ring of animal influence
    Ring of evasion
    Ring of feather falling
    Ring of free action
    Ring of protection
    Ring of resistance
    Ring of spell storing
    Ring of the ram
    Ring of x-ray vision
    Robe of eyes
    Rod of rulership
    Rod of the pact keeper +2
    Rope of entanglement
    Scroll of protection
    Shield +2
    Shield of missile attraction
    Spell scroll (4th level)
    Spell scroll (5th level)
    Staff of charming
    Staff of healing
    Staff of swarming insects
    Staff of the woodlands
    Staff of withering
    Stone of controlling earth elementals
    Sun blade
    Sword of life stealing
    Sword of wounding
    Tentacle rod
    Vicious weapon
    Wand of binding
    Wand of enemy detection
    Wand of fear
    Wand of fireballs
    Wand of lightning bolts
    Wand of paralysis
    Wand of the war mage +2
    Wand of wonder
    Weapon +2
    Wings of flying

very_rare_magic
    Ammunition +3
    Amulet of the planes
    Animated shield
    Armor +2
    Arrow of slaying
    Bag of devouring
    Belt of giant strength (fire giant)
    Belt of giant strength (frost or stone giant)
    Candle of invocation
    Carpet of flying
    Cloak of arachnida
    Crystal ball
    Dancing sword
    Demon armor
    Dragon scale mail
    Dwarven plate
    Dwarven thrower
    Efreeti bottle
    Figurine of wondrous power (obsidian steed)
    Frost brand
    Helm of brilliance
    Horn of valhalla (bronze)
    Horseshoes of a zephyr
    Instrument of the bard (Anstruth harp)
    Ioun stone (absorption)
    Ioun stone (agility)
    Ioun stone (fortitude)
    Ioun stone (insight)
    Ioun stone (intellect)
    Ioun stone (leadership)
    Ioun stone (strength)
    Manual of bodily health
    Manual of gainful exercise
    Manual of golems
    Manual of quickness of action
    Mirror of life trapping
    Nine lives stealer
    Nolzur's marvelous pigments
    Oathbow
    Oil of sharpness
    Potion of flying
    Potion of giant strength (cloud giant)
    Potion of invisibility
    Potion of longevity
    Potion of speed
    Potion of supreme healing
    Potion of vitality
    Ring of regeneration
    Ring of shooting stars
    Ring of telekinesis
    Robe of scintillating colors
    Robe of stars
    Rod of absorption
    Rod of alertness
    Rod of security
    Rod of the pact keeper +3
    Scimitar of speed
    Shield +3
    Spell scroll (6th level)
    Spell scroll (7th level)
    Spell scroll (8th level)
    Spellguard shield
    Staff of fire
    Staff of frost
    Staff of power
    Staff of striking
    Staff of thunder and lightning
    Sword of sharpness
    Tome of clear thought
    Tome of leadership and influence
    Tome of understanding
    Wand of polymorph
    Wand of the war mage +3
    Weapon +3

legendary_magic
    Apparatus of Kwalish
    Armor +3
    Armor of invulnerability
    Belt of giant strength (cloud giant)
    Belt of giant strength (storm giant)
    Cloak of invisibility
    Crystal ball
    Cubic gate
    Deck of many things
    Defender
    Efreeti chain
    Hammer of thunderbolts
    Holy avenger
    Horn of valhalla (iron)
    Instrument of the bard (Ollamh harp)
    Ioun stone (greater absorption)
    Ioun stone (mastery)
    Ioun stone (regeneration)
    Iron flask
    Luck blade
    Plate armor of etherealness
    Potion of giant strength (storm giant)
    Ring of djinni summoning
    Ring of elemental command
    Ring of invisibility
    Ring of spell turning
    Ring of three wishes
    Robe of the archmagi
    Rod of lordly might
    Rod of resurrection
    Scarab of protection
    Sovereign glue
    Spell scroll (9th level)
    Sphere of annihilation
    Staff of the magi
    Sword of answering
    Talisman of pure good
    Talisman of the sphere
    Talisman of ultimate evil
    Tome of the stilled tongue
    Universal solvent
    Vorpal sword
    Well of many worlds

sentient_magic
    Blackrazor
    Moonblade
    Wave
    Whelm
    Hazirawn
    Ironsong
    Dawnbringer
    Shatterspike
    Fragarach
    Oathbow (bound to a forgotten cause)
    Sword of Answering
    Risky Whisper (a dagger that offers bargains)
    The Blade of Broken Vows
    Whisperwind (a shortsword that speaks only in rhyme)

artifacts_magic
    Axe of the Dwarvish Lords
    Book of Exalted Deeds
    Book of Vile Darkness
    Eye and Hand of Vecna
    Orb of Dragonkind
    Sword of Kas
    Wand of Orcus













bar_food
  Stew ^2
  Roast {meat} ^2
  Bread and cheese ^4
  Soup {vegetable} ^2
  Cold {meat}s
  Fresh {fish}
  Game pie
  Salad
  Fruit
  Vegetables
  Pastries
  Porridge ^2
  Eggs and bacon
  Pancakes
  Sausages
  Mushrooms on toast
  Meat pies ^2
  Cheese board
  Cured meats

bar_snack
  Salted nuts
  Pickled eggs
  Hard cheese and crackers
  Dried meat strips
  Pickled vegetables
  Bread and dripping
  Bowl of olives
  Smoked fish scraps
  Crusts with salt

pub_snack
  Bread and butter ^2
  Cheese and pickle
  Cold {meat} slices
  Small bowl of {soup}
  Pie slice
  Potted {meat}
  Boiled egg and bread
  Smoked {fish} on bread

meat
  pork
  chicken
  lamb
  rothé ^3
  goat
  deer
  boar
  rabbit
  {hearty_veg}
  {fish}

hearty_veg
  acorn truffle mushroom
  black bean
  white bean
  ripplebark
  zurkhwood spore
  trillimac mushroom
  browncap mushroom

vegetable
  potato
  leek
  carrot
  parsnip
  tomato
  pumpkin
  squash
  green bean
  broccoli
  pea
  yam
  radish
  corn
  artichoke
  beetroot
  cabbage
  eggplant
  fire lichen ^2

soup
  bluecap mushroom spore and {vegetable} porridge
  dwarven browncap mushroom and {vegetable} porridge
  {fish} and {vegetable} soup
  {meat} and {vegetable} stew
  {hearty_veg}, {vegetable}, and {herb} soup
  {hearty_veg}, {vegetable}, {vegetable}, and {herb}-{fruit} stew

fish
  salmon
  halibut
  sardine
  mackerel
  trout
  crab
  oysters

sauce
  cream
  brown
  tomato
  curry
  garlic
  chili
  lemon pepper
  {herb}

herb
  sweet basil
  dill
  tarragon
  chive
  mint
  lemon grass
  lavender
  garlic
  fire lichen ^2

fruit
  apple
  plum
  cherry
  peach
  strawberry
  fig
  orange
  pear
  tangerine
  blackberry
  rhubarb

bread
  bluecap spore mushroom roll ^2
  zurkhwood spore mushroom cracker ^2
  wheat bread
  halfling millet biscuit
  rye dwarven muffin
  sourdough bread
  elven pumpernickel biscuit
  hardtack cracker
  mixed grain roll

drink
  mug of ale ^2
  tankard of cider ^2
  mug of mead ^2
  cup of spiced wine
  cup of mulled wine
  {special_drink}

special_drink
  cup of watered down {fruit} brandy
  tankard of dwarven {fruit} ale
  mug of halfling {fruit} cider and ale mix
  cup of elven {herb} and {fruit} wine
  bottle of gnomish sparkling {fruit} mead
  flask of orcish black ferment, strong enough to strip varnish
  clay cup of warm spiced {herb} tea, the halfling innkeeper's own recipe
  goblet of deep red {fruit} wine from somewhere that doesn't trade here anymore
  small cask-tap measure of rough {fruit} spirit, the house specialty
  mug of something dark and thick that the barkeep calls "porter" and won't elaborate on
  horn of cold mountain {fruit} beer, brought down by the last caravan through the pass

dessert
  {fruit} cobbler
  {fruit} pie
  {fruit} handpie
  {fruit} bread
  {fruit} and {fruit} cobbler
  {fruit} and {fruit} pie
  {fruit} and {fruit} handpie
  {fruit} and {fruit} bread
  {fruit}-{herb} roll
  {fruit}-{herb} pudding
  {fruit}-{herb} handpie
  {fruit}-{herb} biscuit









any_habitat
  Commoner,
  Crawling Claw,
  Homunculus,
  Bandit,
  Cultist,
  Guard,
  Noble,
  Warrior,
  Infantry,
  Priest,
  Acolyte
  Performer,
  Scout,
  Tough
  Empyrean Iota,
  Imp,
  Pirate,
  Spy,
  Bandit Captain,
  Berserker,
  Cultist Fanatic,
  Druid,
  Mage Apprentice,
  Priest
  Knight,
  Scout Captain,
  Swarm of Crawling Claws,
  Warrior Veteran
  Banshee,
  Guard Captain,
  Helmed Horror,
  Tough Boss
  Cambion,
  Flesh Golem,
  Gladiator,
  Half-Dragon
  Mage,
  Performer Maestro,
  Pirate Captain
  Bandit Deceiver
  Aberrant Cultist,
  Assassin,
  Berserker Commander,
  Death Cultist,
  Elemental Cultist,
  Fiend Cultist
  Cultist Hierophant,
  Noble Prodigy,
  Performer Legend,
  Spy Master,
  Stone Golem,
  Warrior Commander
  Bandit Crime Lord,
  Death Knight Aspirant
  Archmage,
  Archpriest,
  Pirate Admiral,
  Questing Knight
  Iron Golem
  Death Knight,
  Dracolich
  Demilich
  Arch-hag, Lich
  Blob of Annihilation,
  Empyrean,
  Colossus,

hill_habitat
  Baboon,
  Eagle, Goat,
  Hawk,
  Hyena,
  Owl,
  Raven,
  Vulture,
  Weasel,
  Blood Hawk,
  Giant Weasel,
  Goblin Minion,
  Kobold Warrior,
  Mastiff,
  Mule,
  Stirge,
  Venomous Snake,
  Axe Beak,
  Boar,
  Elk,
  Giant Owl,
  Giant Venomous Snake,
  Giant Wolf Spider,
  Goblin Warrior,
  Panther,
  Pseudodragon,
  Swarm of Ravens,
  Winged Kobold,
  Wolf,
  Giant Goat,
  Gnoll Warrior,
  Hobgoblin Warrior,
  Swarm of Insects,
  Worg,
  Brown Bear,
  Copper Dragon Wyrmling,
  Dire Wolf,
  Giant Eagle,
  Giant Hyena,
  Giant Vulture,
  Goblin Boss,
  Harpy,
  Hippogriff,
  Lion,
  Ogrillon Ogre,
  Bulette Pup,
  Giant Boar,
  Giant Elk,
  Gnoll Pack Lord,
  Griffon,
  Ogre,
  Pegasus,
  Peryton,
  Saber-Toothed Tiger,
  Swarm of Stirges,
  Swarm of Venomous Snakes,
  Goblin Hexer,
  Green Hag,
  Hobgoblin Captain,
  Manticore,
  Phase Spider,
  Werewolf
  Ettin,
  Gnoll Fang of Yeenoghu,
  Red Dragon Wyrmling,
  Wereboar,
  Bulette,
  Giant Axe Beak,
  Gorgon,
  Hill Giant,
  Troll,
  Werebear,
  Chimera,
  Cyclops Sentry,
  Galeb Duhr,
  Hobgoblin Warlord, Wyvern,
  Stone Giant,
  Young Copper Dragon,
  Gnoll Demoniac,
  Brazen Gorgon,
  Cyclops Oracle,
  Dire Worg,
  Young Red Dragon,
  Roc,
  Adult Copper Dragon,
  Adult Red Dragon,
  Ancient Copper Dragon,
  Ancient Red Dragon,

mountain_habitat
  Bat,
  Eagle,
  Goat,
  Hawk
  Blood Hawk,
  Kobold Warrior,
  Stirge
  Aarakocra Skirmisher,
  Giant Bat,
  Pseudodragon,
  Pteranodon,
  Swarm of Bats,
  Winged Kobold
  Giant Goat,
  Hobgoblin Warrior
  Giant Eagle,
  Harpy,
  Hippogriff,
  Lion,
  Ogrillon Ogre
  Azer Sentinel,
  Bulette Pup,
  Griffon,
  Ogre,
  Peryton,
  Saber-Toothed Tiger,
  Silver Dragon Wyrmling,
  Swarm of Stirges
  Basilisk,
  Hell Hound,
  Hobgoblin Captain,
  Manticore
  Aarakocra Aeromancer,
  Ettin,
  Red Dragon Wyrmling
  Air Elemental,
  Bulette,
  Earth Elemental,
  Troll
  Azer Pyromancer,
  Chimera,
  Cyclops Sentry,
  Galeb Duhr,
  Hobgoblin Warlord,
  Wyvern
  Stone Giant
  Frost Giant
  Cloud Giant,
  Fire Giant,
  Young Silver Dragon
  Cyclops Oracle,
  Young Red Dragon
  Roc
  Adult Silver Dragon
  Adult Red Dragon
  Ancient Silver Dragon
  Ancient Red Dragon


grass_habitat
  Cat,
  Deer,
  Eagle,
  Goat,
  Hawk,
  Hyena,
  Jackal,
  Vulture,
  Weasel
  Blood Hawk,
  Flying Snake,
  Giant Weasel,
  Goblin Minion,
  Pony,
  Stirge,
  Venomous Snake
  Axe Beak,
  Boar,
  Elk,
  Giant Venomous Snake,
  Giant Wolf Spider,
  Goblin Warrior,
  Panther,
  Pteranodon,
  Riding Horse,
  Wolf
  Cockatrice,
  Giant Goat,
  Giant Wasp,
  Gnoll Warrior,
  Hobgoblin Warrior,
  Jackalwere,
  Swarm of Insects,
  Worg
  Bugbear Warrior,
  Giant Eagle,
  Giant Hyena,
  Giant Vulture,
  Goblin Boss,
  Hippogriff,
  Lion,
  Ogrillon Ogre,
  Scarecrow,
  Thri-kreen Marauder,
  Tiger
  Allosaurus,
  Ankheg,
  Bulette Pup,
  Centaur Trooper,
  Giant Boar,
  Giant Elk,
  Gnoll Pack Lord,
  Griffon,
  Ogre,
  Pegasus,
  Rhinoceros,
  Swarm of Stirges,
  Swarm of Venomous Snakes
  Ankylosaurus,
  Bugbear Stalker,
  Goblin Hexer,
  Gold Dragon Wyrmling,
  Hobgoblin Captain, Manticore,
  Phase Spider
  Couatl,
  Elephant,
  Gnoll Fang of Yeenoghu,
  Hippopotamus,
  Wereboar,
  Weretiger
  Bulette,
  Giant Axe Beak,
  Gorgon,
  Triceratops
  Chimera,
  Cyclops Sentry,
  Hobgoblin Warlord
  Centaur Warden
  Cockatrice Regent,
  Gnoll Demoniac,
  Thri-kreen Psion,
  Tyrannosaurus Rex
  Brazen Gorgon
  Cyclops Oracle,
  Dire Worg,
  Young Gold Dragon
  Adult Gold Dragon
  Ancient Gold Dragon

urban_habitat
  Bat,
  Cat,
  Goat,
  Rat,
  Raven,
  Spider
  Giant Rat,
  Kobold Warrior,
  Mastiff,
  Mule,
  Pony,
  Stirge
  Animated Broom,
  Animated Flying Sword,
  Draft Horse,
  Giant Centipede,
  Kenku,
  Pseudodragon,
  Riding Horse,
  Skeleton,
  Swarm of Bats,
  Swarm of Rats,
  Swarm of Ravens,
  Winged Kobold,
  Zombie
  Crocodile,
  Giant Wasp,
  Shadow,
  Swarm of Insects,
  Warhorse,
  Warhorse Skeleton
  Animated Armor,
  Ghoul,
  Giant Spider,
  Lacedon Ghoul,
  Specter,
  Yuan-ti Infiltrator
  Animated Rug of Smothering,
  Carrion Crawler,
  Gargoyle,
  Ghast,
  Mimic,
  Minotaur Skeleton,
  Ogre Zombie,
  Poltergeist,
  Silver Dragon Wyrmling,
  Swarm of Stirges,
  Wererat,
  Will-o'-Wisp
  Doppelganger,
  Flaming Skeleton,
  Phase Spider,
  Vampire Familiar,
  Water Weird,
  Wight,
  Yuan-ti Malison (Type 1)/Yuan-ti Malison (Type 2)/Yuan-ti Malison (Type 3)
  Couatl, Ghost,
  Incubus,
  Succubus
  Beholder Zombie,
  Revenant,
  Vampire Spawn
  Ghast Gravecaller,
  Invisible Stalker
  Graveyard Revenant,
  Oni, Shield Guardian,
  Yuan-ti Abomination
  Vampire Nightbringer
  Clay Golem,
  Young Silver Dragon
  Haunting Revenant
  Rakshasa, Vampire
  Vampire Umbral Lord
  Adult Silver Dragon
  Ancient Silver Dragon
  Tarrasque









name
  Abbeville
  Abbot
  Abelard
  Abercorn
  Aberdour
  Abernethy
  Abigail
  Abraham
  Acacia
  Achaios
  Acis
  Ackroyd
  Acorn
  Acuba
  Ada
  Adalyn
  Adam
  Adderley
  Addison
  Adela
  Adelaide
  Adelina
  Adeline
  Aden
  Admiranda
  Ado
  Adonis
  Adrian
  Adwait
  Aeditha
  Aegipan
  Aelina
  Aeris
  Affilo
  Agathe
  Agne
  Agnys
  Ahmet
  Aiden
  Aigis
  Aigyptos
  Ainger
  Ainsley
  Aiolides
  Aion
  Airy
  Aisa
  Aisakos
  Aislibie
  Aithilla
  Aithon
  Aitken
  Aitne
  Akakos
  Akerman
  Akers
  Alaina
  Alainne
  Alaire
  Albert
  Alberta
  Albin
  Albion
  Alburg
  Albury
  Aldebert
  Aldebrand
  Aldeburgh
  Aldenham
  Alderney
  Aldford
  Aldous
  Aldred
  Aldworth
  Alekos
  Alesta
  Aletha
  Alexander
  Alexandra
  Alexis
  Aleyn
  Alfred
  Alianore
  Alice
  Aliki
  Alison
  Alistair
  Alkmene
  Alkmenos
  Allas
  Allcroft
  Alleyn
  Allison
  Allsop
  Alma
  Almeric
  Alobeth
  Alora
  Alperton
  Alsace
  Alvar
  Alwyne
  Alyne
  Alys
  Alyssa
  Amabel
  Amann
  Amathe
  Ambrose
  Ambrosia
  Ame
  Amelia
  Ames
  Amhurst
  Amias
  Amice
  Amott
  Ampelos
  Amphelice
  Ampton
  Anaxibia
  Ancelot
  Ancona
  Andover
  Anerley
  Angelet
  Angle
  Angrave
  Ann
  Anna
  Annabel
  Annabelle
  Anne
  Anning
  Ansdell
  Anselm
  Anthoinette
  Anthony
  Antigone
  Antrim
  Apemosyne
  Apsley
  Apto
  Arabella
  Aran
  Arbour
  Archedios
  Ardlui
  Argo
  Argon
  Argyle
  Aria
  Arianna
  Ariel
  Arissa
  Arkeisios
  Arlette
  Arlington
  Armada
  Armagh
  Arnald
  Arneway
  Arno
  Arnott
  Arnside
  Arpley
  Arragon
  Arthur
  Arthurdon
  Artizan
  Arundel
  Ascalon
  Ash
  Ashbrook
  Ashburn
  Asher
  Ashford
  Ashington
  Ashland
  Ashmole
  Ashness
  Ashwin
  Askalabos
  Aske
  Askew
  Asmara
  Aspen
  Assam
  Aster
  Astoria
  Asylum
  Atagone
  Atherford
  Athoz
  Atilda
  Atlas
  Atropos
  Atys
  Aubert
  Aubrey
  Aubrey Walk
  Audolyn
  Audre
  Audrye
  Augeias
  Augustina
  Augustine
  Aulay
  Aulton
  Auson
  Austin
  Autumn
  Ava
  Avalon
  Avelin
  Avelyn
  Averil
  Avery
  Avonmore
  Avonmouth
  Avra
  Aybrook
  Aylesbury
  Ayleth
  Aylmer
  Aylton
  Ayrsome
  Aysgarth
  Azeby
  Azenby
  Bacchus
  Bache's
  Baderon
  Baggally
  Bagshot
  Baildon
  Bailey
  Baird
  Baker
  Bakis
  Balcombe
  Balcorne
  Baldric
  Baldwin
  Balfour
  Balham
  Balmore
  Balthazar
  Bamborough
  Bamvros
  Banister
  Banner
  Banning
  Bar
  Bar's
  Baragon
  Barbel
  Bardolf
  Bardolph
  Barfett
  Baring
  Barlow
  Barnabas
  Barnardo
  Barnby
  Barnsbury
  Baron
  Baroness
  Barry
  Barter
  Bartholomew
  Bartram
  Basarios
  Basil
  Basnett
  Bastwick
  Bate
  Baterich
  Bathsua
  Batley
  Batson
  Battersea
  Battle
  Bawtree
  Bayard
  Bayer
  Bayford
  Bayham
  Bayley
  Baylin
  Bazon
  Beachcroft
  Beacon
  Beagle
  Beatrix
  Beauchamp
  Beauclerc
  Beaufort
  Beccles
  Becklow
  Becmead
  Becondale
  Bective
  Beddome
  Bedford
  Beech
  Beechdale
  Beehive
  Beet
  Belath
  Belford
  Belitha
  Bella
  Bellamy
  Bellevue
  Bellinda
  Belmont
  Belos
  Belshaw
  Belsize
  Belvoir
  Ben
  Benbow
  Benedict
  Beneger
  Bennet
  Benworth
  Berekyntia
  Beresford
  Bermondsey
  Bernaith
  Bernard
  Bernays
  Berndan
  Berner
  Berners
  Berry
  Bertana
  Berte
  Bertram
  Bertrand
  Bess
  Besson
  Bessy
  Beth
  Bethel
  Bethnal
  Betterton
  Bevan
  Bevil
  Bevington
  Bewlys
  Bhurst
  Bidborough
  Billington
  Bingham
  Birch
  Bird-in-bush
  Birkbeck
  Biscay
  Blackburn
  Blackheath
  Blackstock
  Blackwall
  Blagdon
  Blake
  Blakesley
  Blanche
  Blandfield
  Blanmerle
  Blavier
  Blenheim
  Bley
  Blomfield
  Blondin
  Bloomfield
  Bloomsbury
  Blows
  Blue Anchor
  Boathouse walk
  Bodney
  Bognor
  Bohn
  Boleyn
  Bolney
  Bomore
  Bomsey
  Boniface
  Bonner
  Bonny
  Boones
  Borland
  Bormos
  Borse
  Boss
  Bostall
  Boston
  Bothery
  Bouchard
  Bourdon
  Bowland
  Bowyer
  Boxall
  Boxmoor
  Boyce
  Boyle
  Boyton's
  Bozzri
  Bracey
  Brackenbury
  Bradbury
  Braddyll
  Brady
  Braham
  Bramerton
  Bramford
  Brampton
  Bramshot
  Bran
  Brandreth
  Brangwine
  Branstone
  Branwen
  Brasted
  Bratley
  Bratton
  Braulios
  Bravington
  Bray
  Braya
  Brayden
  Breccan
  Brecknock
  Bremen
  Brendon
  Brentyn
  Brewer
  Brewery
  Briardale
  Brice
  Brick
  Bride
  Bridgewater
  Bridson
  Brien
  Brigone
  Brisbane
  Bristol
  Brixton
  Brockham
  Brockley
  Brodia
  Brody
  Brom
  Bromley
  Brontes
  Bronze
  Brook
  Brookdene
  Brooklands
  Brookmill
  Brookside
  Broomhouse
  Brougham
  Broughton
  Bruce
  Brunel
  Brunhild
  Brunswick
  Brusce
  Bruton
  Bryce
  Bryde
  Bryguz
  Brynda
  Buckingham
  Buckland
  Buckler
  Bucknall
  Budaur
  Bude
  Bukolos
  Bullace
  Bungay
  Bunyan
  Burdett
  Burford
  Burgon
  Burlington
  Burnard
  Burns
  Burnsall
  Burnt ash
  Burrell
  Burslem
  Burton
  Busby
  Bush
  Bushell
  Busk
  Buxton
  Bysseus
  Bywell
  Cable
  Cadell
  Caden
  Cadet
  Cadogan
  Caesaria
  Caffyn
  Cage
  Caia
  Cain
  Caird
  Caithness
  Calaphe
  Caldew
  Cale
  Caleb
  Callie
  Callow
  Calloway
  Calmington
  Calsen
  Calthorpe
  Calton
  Calvert
  Cambridge
  Camden
  Cameron
  Camers
  Camilla
  Campden
  Campion
  Camps
  Canadian
  Canal bank
  Candahar
  Cannon
  Canonbury
  Canrobert
  Cantire
  Capella
  Caplan
  Capland
  Cared
  Carey
  Carlisle
  Carlos
  Carlow
  Carlsbad
  Carlton
  Carlyle
  Carmen
  Carmine
  Carna
  Caroline
  Carr
  Carrol
  Carroun
  Carson
  Carter
  Carteret
  Carton
  Cartwright
  Carville
  Casandra
  Cashel
  Casimir
  Caslon
  Caspar
  Caspian
  Casslee
  Castle
  Castlemain
  Catesby
  Cathay
  Cathedral
  Catherine
  Catillus
  Cator
  Caulfield
  Cavan
  Caxton
  Cayton
  Ceadda
  Cecilia
  Cecily
  Celeste
  Celestia
  Celestine
  Celestria
  Cenota
  Cenwood
  Cephas
  Cetos
  Chadbourn
  Chadwick
  Chagford
  Chalcot
  Challoner
  Chalmers
  Chamberlain
  Chambord
  Champion
  Chance
  Chancel
  Chancellors
  Chancelot
  Chandler
  Chantrey
  Chapel
  Chara
  Charing
  Charis
  Charlbert
  Charlecote
  Charles
  Charleston
  Charlesworth
  Charleville circus
  Charlotte
  Charlton
  Charlwood
  Charlys
  Charsley
  Chartain
  Charterhouse
  Charteris
  Chartfield
  Chase
  Chaston
  Chatham
  Chatto
  Cheam
  Chelmer
  Chenies mews
  Chepstow
  Cherry
  Chesham
  Chesholm
  Chesias
  Chesil
  Chester
  Chester gate
  Chestnut
  Chetwynd
  Cheval
  Cheyne
  Chilcot
  Childers
  Chilton
  Chilworth
  Chitty
  Chloe
  Choumert
  Christabel
  Christchurch
  Christian
  Christopher
  Chryses
  Chryssel
  Chubworthy
  Chulisa
  Church
  Churchway
  Cicely
  Circe
  Circular
  Circus
  Clack
  Claire
  Clancy
  Clapham
  Clare
  Claremont mews
  Clarence
  Clarendon
  Clarens
  Clareville
  Clarimond
  Clarissa
  Clark
  Clarkson
  Claude
  Claudia
  Claudien
  Clave
  Claybrook
  Claylands
  Cleghorn
  Clemence
  Clementina
  Clenham
  Clerkenwell
  Clevedon
  Cleveland
  Clifden
  Clifton
  Clio
  Clissold
  Clitheroe
  Clive
  Clock
  Clonbrook
  Clorane
  Clothier
  Cloudesley
  Clough
  Clove
  Cloyne
  Club
  Cluny
  Clutton
  Clyston
  Cobb
  Cobham
  Cobourg
  Cochrane mews
  Coin
  Coke
  Cole
  Coleman
  Colestown
  Colin
  Colinette
  Coliston
  Colling
  Collingbourne
  Collyer
  Collys
  Colombo
  Colonnade
  Colson
  Colton
  Columbia
  Colvestone
  Colville
  Colwick
  Colyton
  Comber
  Comet
  Compton
  Concanon
  Concessa
  Conder
  Conewood
  Congreve
  Connaught
  Connigham
  Connor
  Conphas
  Constance
  Coomer
  Cope
  Copeland
  Copleston
  Coplestone
  Copperas
  Copthall
  Corbet
  Corbett's
  Corea
  Corisande
  Corliss
  Cormont
  Corn
  Cornelia
  Cornell
  Cornwall
  Coronet
  Corsham
  Corston
  Cortayne
  Cory
  Cosbycote
  Cosmo
  Coster
  Cotall
  Cotford
  Cottesmore
  Cottington
  Cowan
  Cowcross
  Cowdry
  Cox's
  Coxson
  Crab Tree
  Crail
  Crampton
  Cranbourn
  Cranbrook
  Cranmore
  Cranworth
  Craven
  Crawford
  Crediton
  Creechurch
  Creeland
  Crellin
  Cresford
  Cresswell
  crest
  Crestian
  Creswick
  Crinan
  Cristiana
  Croft
  Crombie
  Cromer
  Cromwell
  Crondall
  Cronin
  Cross
  Crossett
  Crossfield
  Crossford
  Crosslet
  Crossway
  Croxted
  Crumpsall
  Cubitt
  Cudworth
  Culford
  Cullive
  Culmore
  Culmstock
  Culross
  Cumberland
  Cumming
  Cunard
  Cunovin
  Curwen
  Curzon
  Cusack
  Cutbert
  Cuthbert
  Cwengyth
  Cybele
  Cyndra
  Cynewyn
  Cynthia
  Cyriac
  Cyrus
  D'Arblay
  Dafni
  Dagnall
  Dahomey
  Daimbert
  Dalbiac
  Daley
  Dalkey
  Dalling
  Dalmas
  Damaris
  Dametta
  Damia
  Danae
  Dane
  Danehurst
  Dantzic
  Danyell
  Dardanos
  Darenth
  Darien
  Dartford
  Dartmouth
  Darwin
  Datchelor
  Daubeney
  Dauid
  Davey
  Davisville
  Davyd
  Dawson
  Day
  De Morgan
  De Vere
  Deacon
  Dean
  Dean Farrar
  Dean Stanley
  Deauville
  Debnams
  Decima
  Declan
  Deianeira
  Deidameia
  Deimachos
  Deimos
  Deitrich
  Dekelos
  Dela
  Deloraine
  Deloys
  Delphos
  Delta
  Delverton
  Demne
  Dempsey
  Denbigh
  Denston
  Denyer
  Denys
  Deodar
  Deonen
  Depot
  Dereham
  Dericote
  Derkynos
  Derry
  Derwin
  Deryk
  Desmond
  Devas
  Dhazdoro
  Diadem
  Diamanda
  Dibden
  Dieppe
  Digby
  Digswell
  Dimi
  Dinsmore
  Dionisia
  Diss
  Distaff
  Dixon
  Dockhead
  Doctor
  Dodona
  Dolland
  Dolly
  Dominic
  Domino
  Dominy
  Donald
  Donne
  Donner
  Doon
  Dora
  Dorcas
  Dorncliffe
  Dorothe
  Dorset
  Douglas
  Down
  Downes
  Downs
  Doxia
  Drake
  Drakefell
  Draper
  Drasus
  Draycott
  Dreadnought
  Drew
  Drewstead
  Drewton
  Drummond
  Dryope
  Drysdale
  Drystan
  Duckett
  Dugald
  Dugdale
  Duncan
  Dunkeld
  Dunkirk
  Dunloe
  Dunlop
  Dunmow
  Dunn
  Dunsley
  Dunstable
  Dupont
  Durham
  Durilda
  Durward
  Dutton
  Dwynn
  Dwyvaer
  Dyana
  Dylan
  Dyott
  Dysart
  Dysaules
  Eadbert
  Ealdwine
  Eamont
  Eastbrook
  Eastcastle
  Eastcheap
  Eastfield
  Eastney
  Eaton
  Ebenezer
  Ebury
  Ecate
  Eccles
  Ecclesbourne
  Echetlos
  Echo
  Edelinne
  Eden
  Edenhurst
  Edge
  Edithe
  Edmund
  Edward
  Edwyn
  Effort
  Egerton
  Eglinton
  Eidothea
  Eilonwy
  Eirini
  Elaine
  Elaisse
  Elatus
  Eldon
  Eldred
  Ele
  Eleanor
  Eleazar
  Electra
  Electric
  Elena
  Elephant
  Elewys
  Elgar
  Eli
  Eliana
  Elijah
  Ella
  Ellerdale
  Ellerete
  Ellerslie
  Ellie
  Ellington
  Elliot
  Elm
  Elmington
  Elmore
  Elpenor
  Elpida
  Elsa
  Elsebee
  Elspeth
  Elsted
  Elthome
  Elton
  Elverton
  Elwood
  Elyn
  Elynor
  Elystan
  Elyzabeth
  Emanuel
  Emblyn
  Emeline
  Emeny
  Emeria
  Emerick
  Emery
  Emilie
  Emlinie
  Emma
  Emmanuel
  Emmet
  Empress
  Empson
  Endive
  Engate
  Enipeus
  Ennismore
  Entick
  Epigonoi
  Epione
  Epsom
  Erasmus
  Erato
  Erebos
  Eremoz
  Eric
  Erik
  Erinimachis
  Eriz
  Eschina
  Eschiva
  Esdeline
  Esmenet
  Esmond
  Esmour
  Esperaunce
  Est
  Esther
  Estienne
  Estrild
  Etgar
  Ethan
  Ethelbert
  Ethelburga
  Ethelia
  Ethelm
  Ethelred
  Eton
  Euadne
  Euchenor
  Euenos
  Eugenia
  Eunomos
  Eupalamos
  Euphorbos
  Europe
  Eustace
  Eustacia
  Euston
  Eva
  Evan
  Evandale
  Eve's
  Evelina
  Evelyn
  Everett
  Evering
  Everleigh
  Eversleigh
  Eversley
  Everthorpe
  Ewart
  Ewell
  Exton
  Ezra
  Fair
  Fairclough
  Fairfax
  Fairfeld
  Fairhazel
  Fairiop
  Fairlop
  Fairmount
  Falka
  Falkirk
  Falkland
  Falmouth
  Fames
  Fane
  Fann
  Farm
  Farmer's
  Farncombe
  Farndon
  Farringdon
  Fauna
  Faversham
  Favonia
  Fawe
  Fawkes
  Fawnbrake
  Federica
  Feleta
  Felice
  Fellbrigg
  Fellows
  Felma
  Fenchurch
  Fenelon
  Fenham
  Fenning
  Fenwick
  Fergus
  Ferncliff
  Fernhead
  Fernsbury
  Fernshaw
  Fiebras
  field
  Fieldgate
  Fieldhouse
  Filippos
  Filmer
  Finchley
  Finck
  Finola
  Finsbury
  Fitzjohn
  Fitzroy
  Flambard
  Flaxman
  Fleur
  Fleur-de-lis
  Flodden
  Flora
  Florens
  Florida
  Floyd
  Folke
  Follett
  Foote's
  Footscray
  Ford
  Forester
  Forset
  Fortess
  Forthbridge
  Fotiyinos
  Foubert's
  Fournier
  Foxe
  Foxlow
  Frances
  Francis
  Francisca
  Franny
  Frederick
  Frederyk
  Free
  Frideswide
  Fridgia
  Fritton
  Frome
  Fulford
  Fulke
  Fulwood
  Furlong
  Furness
  Furnival
  Gabriel
  Gage
  Gairloch
  Galain
  Galateia
  Galaukus
  Galen
  Galena
  Galeos
  Galfrid
  Galiton
  Galley
  Galway
  Gambole
  Ganelon
  Ganton
  Gard
  Garden
  Gared
  Garlick
  Garrett
  Garrick
  Gaskell
  Gate
  Gateforth
  Gateshead
  Gauwyn
  Gavin
  Gembert
  Genneth
  Geoffrey
  George
  Gerald
  Gerbold
  Gerhardt
  Gerland
  Germainne
  Gerrard
  Gerridge
  Gethrude
  Ghalantzo
  Gianna
  Gibbon
  Gildea
  Gildersome
  Gilham's
  Gillian
  Gipsy
  Giselle
  Gladstone
  Glasgow
  Glass
  Glasshouse
  Glauke
  Glebe
  Glenda
  Glenton
  Glentworth
  Globe
  Gloriana
  Gloucester
  Glyn
  Glyndon
  Gnorcys
  Goda
  Goddard
  Godebert
  Godfrey
  Godliman
  Golbome
  Golborne
  Gold
  Goldhawk
  Goldie
  Goldsmith
  Gonson
  Gooch
  Goode
  Goodge
  Goodwood
  Goodyear
  Gordon
  Goring
  Gorioz
  Gorleston
  Goschen
  Gossage
  Gosset
  Gotha
  Govan
  Grace
  Grafton
  Gragonde
  Graham
  Grainger
  Granby
  Grantbridge
  Grantham
  Gray
  Grayson
  Grazebrook
  Green
  Greencoat
  Greenlaw
  Greenside
  Greenwood
  Gregory
  Gressenhall
  Greville
  Grexes
  Greycoat
  Greyfriars
  Griffith
  Grimbald
  Grindal
  Grosvenor
  Grundy
  Grups
  Gryffen
  Guilford
  Guinevere
  Gundulf
  Gurney
  Guston
  Guthrie
  Gwayne
  Gyes
  Gygas
  Gylbart
  Gylda
  Gyles
  Habreham
  Hackney
  Hadleigh
  Hadrian
  Hailey
  Haimirich
  Halafoti
  Halafotios
  Halcomb
  Halia
  Haliday
  Halisera
  Halla
  Hallam
  Halley
  Halli
  Halpin
  Halsmere
  Halstead
  Halstein
  Halton
  Hamilton
  Hamish
  Hammersmith
  Hamon
  Hampden
  Hampshire
  Hanbury
  Hankey
  Hannah
  Hans
  Hanway
  Har
  Hard
  Harford
  Harling
  Harmood
  Harmsworth
  Harper
  Harris
  Hart
  Hartington
  Harton
  Harvey
  Hassard
  Hatchard
  Hatteraick
  Havynn
  Hawker
  Haycroft
  Haymerle
  Hayne
  Healey
  Hearn
  Heatherley
  Heavitree
  Hebir
  Heckford
  Hector
  Heddon
  Heinlein
  Heiron
  Helena
  Helenor
  Helias
  Helios
  Helix
  Hellings
  Helmet
  Helvynya
  Hemans
  Hemithea
  Hemming
  Hemp
  Hendre
  Henrietta
  Henry
  Henshall
  Henson
  Hepaklos
  Herbrand
  Hercules
  Hereford
  Herkyna
  Hermit
  Heron
  Hersee
  Hervey
  Hessel
  Hester
  Hetherington
  Hewling
  Hewrey
  Heygate
  Hichisson
  Highbury
  Hil
  Hilcot
  Hilda
  Hildegard
  Hilith
  Hilton
  Hind
  Hindrey
  Hippotes
  Hira
  Hixus
  Hobbs'
  Holbeck
  Holcroft
  Holker
  Holland
  Holmbrook
  holme
  Holmes
  Holtham
  Homerton
  Hone parade
  Honiton
  Honor Oak
  Honora
  Hopewell
  Hopladamos
  Hopton
  Horatio
  Hornby
  Hornsey
  Hornton
  Horseferry
  Horselydown
  Horsman
  Hoskins
  Hothfield
  house
  Houston
  Hove
  Howards
  Howick
  Huaina
  Hudson
  Huguenot
  Humphrey
  Hunter
  Huntley
  Hurlock
  hurst
  Hutchings
  Hyde
  Hylas
  Hypatia
  Iadma
  Iadorna
  Iamos
  Ian
  Ianthe
  Ida
  Idmiston
  Ierick
  Iffley
  Ifield
  Ilbert
  Ilias
  Ilminster
  Ilos
  Imedia
  Inferi
  Ingestre
  Ingham
  Ingleby
  Ingleside
  Ingram
  Inigo
  Innis
  Instow
  Inuus
  Inverness
  Iobes
  Ione
  Iphis
  Irae
  Irini
  Irongate wharf
  Ironmonger
  Irus
  Irwell
  Irwin
  Isaac
  Isabella
  Isabelle
  Ischys
  Isemeine
  Isledon
  Isleton
  Ismay
  Ismenia
  Isolde
  Isyrion
  Ivan
  Ivy
  Ixworth
  Jaane
  Jacinta
  Jack
  Jackson
  Jacob
  Jacobin
  Jacquette
  Jaffray
  Jago
  Jakys
  Jamaica
  James
  Janbert
  Janet
  Janeway
  Janus
  Jardine
  Jasmine
  Jason
  Jayce
  Jayden
  Jeanne
  Jedediah
  Jeger
  Jellion
  Jemime
  Jenet
  Jeniel
  Jenlyns
  Jenni
  Jenyfer
  Jephtha
  Jerdan
  Jerome
  Jerrold
  Jersey
  Jervis
  Jessamine
  Jestan
  Jewel
  Jezebel
  Jillian
  Jocea
  Jocelyn
  Johanna
  Johannes
  John Penn
  John's mew
  Johnson
  Joleicia
  Jolline
  Jonathas
  Jordan
  Jordyn
  Joseph
  Josephine
  Josiah
  Josian
  Josiane
  Josias
  Jotham
  Joyce
  Joyse
  Judithe
  Judkin
  Judye
  Julian
  Juliana
  Julyan
  June
  Juniper
  Jupiter
  Justina
  Justitia
  Juxon
  Kadelon
  Kaelyn
  Kain
  Kaiti
  Kaitlyn
  Kaliaros
  Kalogeros
  Kambala
  Kampe
  Kanlos
  Kapys
  Karl
  Katelyn
  Kath
  Katherine
  Katrine
  Kaukon
  Kaunos
  Kavenscroft
  Kayla
  Kaylee
  Keats
  Keeley
  Keira
  Keith
  Kell
  Kellerton
  Kelly
  Kelmis
  Kelross
  Kelsey
  Kelvin
  Kemble
  Kenessos
  Kenmure
  Kennard
  Kennet
  Kenning
  Kenninghall
  Kenrick
  Kensington
  Kenton
  Kenway
  Kephalos
  Kerania
  Keranios
  Kerfield
  Kermit
  Kerrich
  Kerrison
  Key
  Keystone
  Keyworth
  Khama
  Khellus
  Kibworth
  Kidbrooke
  Kidd
  Kidderpore
  Kiernan
  Kilburn
  Kilgour
  Kilix
  Killowen
  Kilravock
  Kimball
  Kimberley
  Kimpton
  Kinborow
  Kinburn
  Kinghorn
  Kinglake
  Kingly
  Kingsbury
  Kingscote
  Kingsdown
  Kingsgate
  Kingsland
  Kingsman
  Kingston
  Kinnison
  Kipling
  Kirby
  Kirkwall
  Kirkwood
  Kitson
  Klaros
  Kleobis
  Kleon
  Knaresborough
  Knightland
  Knightrider
  Knightsbridge
  Knott
  Knowles
  Knox
  Koila
  Kranaos
  Kurtz
  Kyknos
  Kyley
  Kylie
  Kynance mews
  Kynaston
  Kyriakos
  Kytheon
  Kyzikos
  Laburnum
  Lacy
  Ladbroke
  Ladislas
  Ladywell
  Lafone
  Lagos
  Laios
  Laird
  Lake
  Lakedale
  Lamb's
  Lambert
  Lambeth
  Lamble
  Lambolle
  Lambton
  Lamerton
  Lamington
  Lamlash
  Lamont
  Lamp Mead
  Lampetos
  Lamprell
  Lanathos
  Lancaster
  Lancell
  Landon
  Landor
  lands
  Landseer
  Lanfrey
  Langdale
  Langdon
  Lansdowne
  Laodameia
  Laodike
  Lapford
  Lapithes
  Larden
  Larnaca
  Larpent
  Lars
  Lassell
  Latchmere
  Latimer
  Latinos
  Latisha
  Latona
  Laud
  Lauda
  Launcelot
  Lauren
  Laurence
  Laurentius
  Lausanne
  Lausus
  Lavender
  Laverna
  Lavers
  Law
  Lawford
  Lawrie
  Laycock
  Layla
  Le May
  Lea
  Leader
  Leage
  Leah
  Leamore
  Leamouth
  Leander
  Leavold
  Lebanon
  Ledbury
  Lee
  Leeke
  Lefwyne
  Leigham
  Leimone
  Leinster
  Leipephile
  Leitrim
  Leman
  Lennard
  Lennox
  Lenthall
  Leo
  Leofwen
  Leofwynn
  Leonard
  Leonie
  Leopold
  Leroy
  Lesly
  Letita
  Lettice
  Lettsom
  Leuke
  Leukippe
  Leukon
  Leurybia
  Levant
  Leverton
  Levi
  Lewisham
  Lexham
  Lexington
  Leylang
  Leyton
  Lia
  Liam
  Library
  Lidia
  Lila
  Lilac
  Liliana
  Lillian
  Lillie
  Lillieshall
  Lilou
  Lily
  Limburg
  Lime
  Limerston
  Limes
  Linda
  Lindale
  Linden
  Lindley
  Lindore
  Lindos
  Lindsell
  Linette
  Linford
  Lingham
  Link
  Linnet
  Linos
  Linton
  Linyeve
  Lisford
  Lisson
  Litlington
  Littlejohn
  Lityerses
  Livonia
  Llama
  Llawran
  Lloyd
  Loampit
  Loanda
  Lochaber
  Lockside
  Locksley
  Lockyer
  Loder
  Lodwicke
  Loftie
  Lofting
  Loftus
  Logan
  Loman
  Lombard
  Lomond
  Long
  Longbeach
  Longford
  Longhedge
  Longton
  Lora
  Lorcan
  Lordship
  Lothrop
  Lots
  Lotus
  Loudoun
  Loughborough
  Lovat
  Lovelace
  Lowell
  Lowther
  Lucas
  Lucienne
  Lucy
  Ludgate
  Ludlow
  Ludwick
  Lufton
  Luke
  Lundy
  Luphea
  Luttrell
  Lux
  Lydbrook
  Lyford
  Lykeios
  Lykomedes
  Lykophron
  Lykurgos
  Lyme
  Lyndhurst
  Lynedoch
  Lynkos
  Lynn
  Lynton
  Lyon's
  Lyric
  Lysia
  Lysippe
  Lytton
  Macclesfield
  Mace
  Machaon
  Mackay
  Mackenzie
  Macklin
  Macoma
  Maddeline
  Madelyn
  Madison
  Madrid
  Maerwynn
  Magdalen
  Maguire
  Maiandros
  Maida
  Maidstone
  Mainfroi
  Maisenta
  Maismore
  Major
  Makaria
  Makayla
  Malabar
  Malachy
  Malbrook
  Maley
  Malin
  Malling
  Mallow
  Malmesbury
  Malmsey
  Maltby
  Malvern
  Malyons
  Mancroft
  Mander
  Manilla
  Manisty
  Manningtree
  Manor
  Manse
  Mansel
  Mansell
  Mansfield
  Mansion
  Manstone
  Manter
  Manthorp
  Maple
  Mapledene
  Marchant
  Mardale
  Mare
  Maresfield
  Margarete
  Margate
  Margeria
  Margomestra
  Margry
  Maria
  Marjore
  Mark
  Market
  Marlow
  Marmont
  Marne
  Marner
  Marnock
  Maronne
  Maroon
  Marquis
  Marryat
  Mars
  Marsden
  Marsilia
  Mart
  Martin
  Martine
  Martineau
  Marvels
  Marylebone
  Masboro'
  Mason
  Massinger
  Masters
  Mateo
  Mathild
  Mathye
  Maundy
  Mavors
  Maxey
  Maxfield
  May
  Maya
  Mayfleld
  Mayola
  Maze
  Maze yard
  McLeod
  Meard's
  Medland
  Medlar
  Megareus
  Meggs
  Melaineus
  Melampus
  Melas
  Melodie
  Melon
  Melrose
  Melusine
  Memphis
  Mendora
  Menestheus
  Menetavro
  Menotti
  Mentone
  Mepham
  Mer
  Meredithe
  Merewyn
  Merilda
  Merops
  Mersey
  Meryell
  Mestor
  Metaneira
  Metis
  Metope
  Meymott
  Mia
  Micah
  Midland
  Mila
  Milan
  Milborne
  Mildmay
  Miles
  Milford
  Mill
  Millbank
  Millfields
  Millicent
  Millman
  Milman's
  Milner
  Milson
  Milton
  Milward
  Mineral
  Minerva
  Miniver
  Minnow
  Minor
  Minos
  Mintern
  Minyas
  Mirabelle
  Miranda
  Misericordia
  Mitcham
  Mitchell
  Mitevra
  Mnestra
  Modbury
  Molossos
  Monkton
  Monmouth
  Monson
  Montagu
  Montem
  Montford
  Montolieu
  Montpelier
  Monument
  Moody
  Moore
  Moorfields
  Moorgate
  Moray
  Morecombe
  Moreland
  Moreton
  Morgan
  Morgant
  Morgayne
  Mornington
  Morpheus
  Morris
  Morshead
  Mortimer
  Morton
  Morys
  Moye
  Moyser
  Muirkirk
  Mulciber
  Mulgrave
  Muriel
  Murienne
  Murphy
  Murton
  Musa
  Muscatel
  Musgrave
  Mydrede
  Mykenai
  Myles
  Myrine
  Myrtle
  Myrto
  Namur
  Nant
  Nantes
  Napier
  Nassington
  Natal
  Natalie
  Nathan
  Nathaniel
  Nausithos
  Nautes
  Navarre
  Naylor
  Neaira
  Neal
  Neale
  Neate
  Neath
  Nebraska
  Neckinger
  Neilos
  Nell
  Nelson
  Nemea
  Neofytos
  Nepaul
  Neptune
  Nereones
  Nessos
  Nesta
  Netherhall
  Nettlefold
  Nevem
  Nevern
  Neville
  New
  Newburn
  Newbury
  Newcombe
  Newcomen
  Newlands
  Newling
  Newnham
  Newton
  Nicholas
  Nicholina
  Nicia
  Nicolaa
  Nightingale
  Nikavros
  Niki
  Nile
  Nimrod
  Nireus
  Noah
  Noes
  Nolan
  Nomios
  Nora
  Norman
  Normand
  Normandy
  Norris
  North
  Northall
  Northam
  Northampton
  Northwold
  Norval
  Norwich
  Norwood
  Notley
  Novello
  Nuding
  Nutbourne
  Nutt
  Nuttall
  Nyklos
  Nymosyne
  Nyx
  Oak
  Oakbury
  Oakley
  Oberon
  Odexes
  Offord
  Ogaphos
  Ogden
  Oglander
  Ogygos
  Oiax
  Oibalos
  Oinomaos
  Oldbury
  Oleia
  Olexa
  Oliphant
  Oliver
  Olivia
  Olyffe
  Olympia
  Olyver
  Omiros
  Ondine
  Onslow
  Onslow houses
  Ontario
  Opal
  Ophellia
  Ophis
  Oramne
  Oran
  Orange
  Orb
  Oriz
  Orleans
  Orme
  Ormiston
  Ormond gat
  Ormsby
  Orrick
  Orsett
  Orson
  Orthaia
  Orvist
  Orwen
  Osborne
  Oscar
  Osnaburgh
  Osprey
  Osric
  Ostend
  Oswald
  Oswin
  Oswyn
  Oswyth
  Ottilia
  Otto
  Overn
  Ovington
  Owen
  Owyne
  Oxford
  Oxley
  Oxylos
  Ozias
  Padstow
  Paige
  Paignton
  Palace
  Palamon
  Palfrey
  Pallene
  Palmer
  Pancras
  Pantelis
  Paradise
  Paragon
  Parbury
  Parker
  Parnell
  Parnella
  Parolles
  Parsifal
  Parton
  Pasiphae
  Paternoster
  Patmos
  Patrick
  Patriot
  Paul
  Paul's
  Paulin
  Paultons
  Pavilion
  Paxton
  Paz
  Peach
  Peary
  Peckham
  Pedasos
  Pedley
  Peerless
  Pegwell
  Peirene
  Pelham
  Pelias
  Pelinne
  Pelton
  Pemberton
  Pembridge
  Penarth
  Penates
  Penberth
  Penda
  Pendennis
  Penelope
  Penia
  Penn
  Penrose
  Penryn
  Penthesileia
  Penton
  Pentonville
  Penwith
  Penzance
  Pepys
  Perceval
  Percival
  Percy
  Peripanos
  Perrers
  Persephone
  Perseus
  Peter
  Peto
  Petronilla
  Petworth
  Phanes
  Pheraia
  Philip
  Philippe
  Philoprodis
  Philyra
  Phipp
  Phipps
  Phlegrai
  Phobos
  Phœbe
  Phœnix
  Phrasios
  Phrixos
  Phrogas
  Phthonos
  Pickworth
  Picton
  Pier
  Pieria
  Piermont
  Piers
  Pike
  Pilcher
  Pilgrim
  Pilgrimage
  Pilkington
  Pimore mews
  Pine
  Pinto
  Pippa
  Pisos
  Pitane
  Pitman
  Pitney
  Pitsea
  Pitt
  Pittheus
  Pixley
  Placencia
  Plantain
  Playford
  Plimsoll
  Plough
  Plumstead High
  Poine
  Polybos
  Polydamna
  Polykaon
  Polyxene
  Polyxo
  Pond
  Pontreus
  Popham
  Porchester
  Porlock
  Portheus
  Portland
  Portman
  Portsdown
  Potitii
  Pottery
  Pound's
  Powell
  Powis
  Powle
  Poyser
  Praed
  Prebend
  Prescott
  President
  Prested
  Preston's
  Priamos
  Prima
  Princelet
  Princeton
  Priory
  Priscilla
  Pritchard's
  Prittlewell
  Prodos
  Prokne
  Prokoios
  Prokris
  Prospect
  Proteus
  Prothoos
  Provost
  Prudence
  Prusom
  Psemilla
  Pulmia
  Pulross
  Purbrook
  Purcell
  Purnell
  Purvis
  Pym
  Pyxathor
  Quaker
  Queensbury
  Quentin
  Quill
  Radcliffe
  Radolf
  Raffe
  Railton
  Raine
  Rakleia
  Ralph
  Ramillies
  Ramsgate
  Randall
  Randwulf
  Ranelagh
  Ransom
  Ranston
  Ranulf
  Ranwell
  Raoul
  Ratcliff
  Rauffe
  Raulin
  Ravens
  Ravey
  Rawlings
  Rayner
  Reagan
  Rebeccah
  Rectory
  Red
  Redan
  Redcar
  Redman's
  Redmead
  Redmond
  Redriff
  Redwald
  Reedham
  Reeve
  Regency
  Regent
  Regent's
  Regia
  Reginald
  Reinholdt
  Remnus
  Reona
  Reothine
  Rephidim
  Repton
  Revesby
  Rex
  Reynard
  Reyner
  Reynfred
  Reynolds
  Rhadamanthys
  Rhadine
  Rhakios
  Rhea
  Rheteus
  Rhexenor
  Rhodes
  Rhodesia
  Rhordon
  Rhyl
  Rianna
  Ricard
  Richarde
  Richenda
  Richmond
  Rickeman
  Ridel
  Ridgmount
  Ridler
  Rigden
  Riley
  Ripley
  Ripple
  Risborough
  Risdon
  Rising
  Ristos
  Ritson
  River
  River way
  Rivington
  Roan
  Robert
  Robert Raikes
  Robsart
  Robson
  Roby
  Robyn
  Rochester
  Rochford
  Rockbourne
  Rockingham
  Rockley
  Rodney
  Rodsley
  Roger
  Roland
  Rolfe
  Rolls
  Roman
  Romer
  Romulus
  Ronald
  Roney
  Rook
  Rookley
  Ropley
  Rosa
  Rosalind
  Rosamund
  Roscoe
  Rose
  Rosebery
  Rosemary
  Roseneath
  Rosewell
  Rosmead
  Rossett
  Rother
  Rotherhithe
  Rothery
  Roundelph
  Rowland
  Roxburgh
  Roysia
  Ruby
  Rudyard
  Rufford
  Rufus
  Rupack
  Rush
  Rushcroft
  Russell
  Ruston
  Rutland
  Ryan
  Rychyld
  Ryder
  Rye
  Rylston
  Sabra
  Sadie
  Saffron
  Sage
  Salamis
  Salios
  Salisbury
  Saltdean
  Samantha
  Samathe
  Samson
  Samuel
  Sanche
  Sancroft
  Sand
  Sandall
  Sander
  Sandgate
  Sandingham
  Sandison
  Sandland
  Sandown
  Sandre
  Sanford
  Saphiro
  Sarra
  Saskia
  Satyros
  Saul
  Savannah
  Savoy
  Sawyer
  Saxby
  Scandrett
  Scarborough
  Scarlet
  Scarlett
  Scawfell
  Sceptre
  Sclater
  Scotswood
  Scrutton
  Scylla
  Seaforth
  Seaham
  Sears
  Sebastian
  Secker
  Seldi
  Selphina
  Semele
  Sence
  Senrab
  Serendipity
  Serge
  Seth
  Seville
  Sevington
  Sevrin
  Seymour
  Seza
  Shadwell
  Shand
  Shandy
  Shap
  Shardusa
  Shelburne
  Shelton
  Shenfield
  Sheridan
  Sherwin
  Ship
  Shipman
  Shipton
  Shirbutt
  Shoreham
  Sibyl
  Sidcup
  Siddons
  Sidford
  Sighard
  Sigurdh
  Sikyon
  Silvanus
  Silver
  Silvester
  Simond
  Simpson
  Sinead
  Singleton
  Sinope
  Sithon
  Skalk
  Skidmore
  Skyler
  sleigh
  Slingsby
  Sloane
  Sly
  Smedley
  Smith
  Smyrks
  Snow
  Snowdon
  Soho
  Sol
  Solander
  Solyeuse
  Somerford
  Somerhild
  Sonning
  Sophia
  Sophie
  Sophronia
  Southmead
  Southwood
  Sparta
  Spearman
  Speedwell
  Spelman
  Spenlow
  Spenser
  Splidts
  Spring
  Springbank
  Springdale
  Spurstowe
  Spyro
  Sreda
  Stamp
  Stanhope
  Stanlake
  Stannard
  Stanton
  Stanworth
  Stella
  Stellan
  Stewart
  Stirling
  Stockmar
  Stockwell
  Stokes
  Stoney
  Straightsmouth
  Strath
  Strathmore
  Strathnairn
  Streatfield
  Streatley
  Strewan
  Studdridge
  Sturt
  Styman
  Sugden
  Sulen
  Summerstown
  Sumner
  Sun
  Sunfields
  Sunningdale
  Sunny
  Sunwell
  Surat
  Surrendale
  Sussex
  Sutherland
  Sutton
  Swale
  Swan
  Swanley
  Swedenborg
  Swift
  Swindon
  Swinford
  Sybaris
  Sybell
  Sydenham
  Sydnee
  Sydney
  Sylphie
  Sylvia
  Syme
  Symon
  Symond
  Symons
  Synagogue
  Syndony
  Sysley
  Systeleley
  Tabard
  Tagg
  Tait
  Takis
  Talaos
  Talavera
  Talbot
  Talwin
  Tamar
  Tamsin
  Tanah
  Tanaquil
  Tankerville
  Tanner's
  Tansa
  Tanswell
  Tansy
  Tantalos
  Taplow
  Taran
  Tarn
  Tarver
  Tarvorwen
  Tasia
  Tasso
  Tatius
  Tavistock
  Tavromiki
  Tavrostenes
  Taybridge
  Taylor
  Tbridge
  Teather
  Telephassa
  Telephone
  Temeraire
  Temperance
  Templeton
  Tenes
  Teoz
  Teraklos
  Tethene
  Teukros
  Thaeox
  Thamyris
  Theaneia
  Thearden
  Thectra
  Theda
  Theed
  Thelxion
  Theobalds
  Theodore
  Theophane
  Theresa
  Thespis
  Thirza
  Thoas
  Thomas
  Thomasine
  Thomasyn
  Thora
  Thornham
  Thornton
  Thornville
  Thorpe
  Thrasios
  Thrush
  Thrydwulf
  Thurlow
  Thyia
  Thyrogog
  Tiberius
  Tikaia
  Tillman
  Timothy
  Tindal
  Tinman
  Tintagel
  Tiphina
  Tisdall
  Tobago
  Tobiah
  Tonbridge
  Tooke
  Tooting Bec
  Tooting High
  Topaz
  Torbay
  Toril
  Torquay
  Torrens
  Torrington
  Tot
  Tottenham
  Toulmin
  Toulon
  Townley
  Trahorn
  Tranby
  Tranquil
  Tranton
  Treby
  Tredegar
  Tregenna
  Tresham
  Tress
  Tressillian
  Trevor
  Tristan
  Tristana
  Tritton
  Troon
  Troughton
  Truman's
  Tryon
  Tudor
  Tufton
  Tulip
  Tulse
  Tunnel
  Turin
  Turnill
  Turstin
  Tuscan
  Tuskar
  Tustin
  Tyche
  Tyers
  Tyler
  Typhon
  Ufford
  Ullin
  Ulric
  Umberston
  Underwood
  Uranos
  Uremides
  Ursula
  Vala
  Valentine
  Valentyne
  Vallance
  Vanbruch
  Vanbrugh
  Vancouver
  Vandon
  Vane
  Vanguard
  Vannes
  Vanston
  Varden
  Vaughan
  Vauxhall
  Venables
  Venice
  Ventnor
  Verena
  Verenes
  Vernon
  Vesey
  Vesta
  Viaduct
  Vian
  Vicarage
  Vicca
  Viceroy
  Victor
  Victoria
  Villette
  Vine
  Violet
  Virginia
  Vita
  Vivian
  Vorlan
  Vorley
  Voyce
  Vrsela
  Vyncent
  Vyner
  Wadard
  Wadeson
  Wagner
  Wake
  Wakeham
  Walbrook
  Walden
  Walerand
  Waley
  Wall
  Walmer
  Walsham
  Walter
  Walton
  Walworth
  Wanless
  Ward
  Wardle
  Wardour
  Warford
  Warham
  Warin
  Warneford
  Warner
  Warren
  Warwick
  Wastdale
  Watergate
  Waterloo
  Waterlow
  Watney
  Watts
  Wauter
  Waverley
  Wavertree
  Wear
  Weaver
  Webber
  Webster
  Wedmore
  Weedington
  Weimar
  Welbury
  Welford
  Welland
  Wellesley
  Wellington
  Wells
  Wenlock
  Wentworth
  Wenyld
  Werner
  Werter
  Wescombe
  Wesley
  Wesson
  Westbourne
  Westcombe
  Westcott
  Westdale
  Westerdale
  Westferry Road
  Westmoreland
  Westmount
  Weston
  Westville
  Westwell
  Westwick
  Weybridge
  Whidbourne
  Whiston
  Whitby Street
  Whitcomb
  White Horse
  Whitecross
  Whitfield
  Whitman
  Whitmore
  Whitstable
  Whittlesey
  Wick
  Wickersley
  Wickford
  Wickham
  Wicklow
  Wigmore
  Wigton
  Wilfred
  Wilfrid
  Wilham
  Wilkes
  Willard
  William
  Willielmus
  Willis
  Willmott
  Wilmount
  Wilna yard
  Wilton
  Wiltshire
  Win
  Winchester
  Wincott
  Windus
  Wineburg
  Winforton
  Wingham
  Winslow
  Winston
  Winthrop
  Wolcot
  Wolfington
  Wolfstan
  Wolseley
  Wood
  Woodfall
  Woodfield
  Woodland
  Woodman
  Wooler
  Woolwich
  Worlidge
  Wormald
  Worship
  Wrotham
  Wulfhilda
  Wyatt
  Wybert
  Wymon
  Wymond
  Wynefreede
  Wystan
  Wythburn
  Xavier
  Xemnon
  Xeni
  Xior
  Yalford
  Yanna
  Yedythe
  Yeovil
  York
  Ypoudoris
  Ysabel
  Ysmeina
  Ywain
  Zachary
  Zacheus
  Zell
  Zenon
  Zephyrus
  Zerig
  Ziore
  Zoar
  Zoe
  Zoi

surname_first
  Angel
  Anvil
  Arrow
  Bear
  Beast
  Blue
  Bright
  Broad
  Bronze
  Bull
  Cat
  Cloud
  Copper
  Crow
  Dark
  Dawn
  Dirt
  Dog
  Doom
  Dragon
  Drake
  Drum
  Dusk
  Dust
  Eagle
  Earth
  Ebon
  Emerald
  Faerie
  Fel
  Fire
  Flame
  Flower
  Foe
  Forge
  Fox
  Free
  Frost
  Gem
  Gentle
  Ghost
  Ghoul
  Giant
  Glass
  Gloom
  Glory
  Goblin
  Gold
  Goose
  Grass
  Grave
  Gravel
  Gray
  Green
  Gust
  Hair
  Half
  Harp
  Hawk
  Hero
  Hill
  Holly
  Ice
  Iron
  Jewel
  Kill
  King
  Knife
  Late
  Law
  Leaf
  Light
  Lion
  Long
  Mace
  Mill
  Monster
  Moon
  Mountain
  Mud
  Needle
  Night
  North
  Oak
  Ox
  Quick
  Rain
  Rat
  Red
  Riddle
  Scale
  Shadow
  Sharp
  Shield
  Siege
  Silver
  Smile
  Song
  Spell
  Spider
  Spine
  Spirit
  Spring
  Stale
  Star
  Stone
  Storm
  Strife
  Swift
  Sword
  Tall
  Thorn
  Tiger
  Titan
  Trail
  Tree
  White
  Willow
  Wise
  Wolf
  Worm
  Wyrm

surname_last
  bane
  beard
  belly
  blade
  blood
  board
  bond
  boot
  born
  bottom
  bound
  bright
  brissle
  brood
  brow
  buckle
  caller
  carol
  caster
  change
  chaser
  chest
  chewer
  chuckle
  claw
  cleaver
  cloak
  cloud
  cowl
  crippler
  cry
  cutter
  dance
  dancer
  dazer
  ear
  fall
  fang
  finger
  flinger
  forger
  gaze
  giver
  glacier
  glove
  gust
  hair
  hammer
  hand
  harp
  heart
  helm
  hide
  hood
  hoof
  hound
  house
  howler
  hunter
  kick
  kin
  kiss
  knee
  knocker
  laugher
  lover
  maker
  master
  maul
  rain
  razor
  rend
  river
  rock
  runner
  sail
  seeker
  sharp
  singer
  slicer
  smasher
  smile
  son
  song
  soother
  sorcerer
  soul
  spear
  spur
  stalker
  star
  steel
  stinger
  stone
  storm
  talker
  teeth
  thumb
  toes
  tongue
  tooth
  touch
  trail
  traveler
  tromp
  valley
  viper
  walker
  watcher
  whisker
  whisper
  willow
  wind
  wing



waterdeep_encounter
  Angry Mob: 1d4 thugs lead 2d12 commoners chanting slogans—vandalizing storefronts, harassing masked figures, or protesting guild levies. Roll d4: Guild of Butchers punishing a halfling pie-maker, Carters protesting dray carriages, anti-Door Levy storekeepers, or youthful agitators tearing masks from passers-by.
  Assassination: A cloaked figure drives a blade into a passerby's back and flees. The victim could be a disputed estate heir, a prosecuted gangster's lawyer, a geas-compelled killer's target, or a random mark of a sadistic cambion.
  Awakened Tree: A magical apple tree laden with fruit in any season bears a "Please pick an apple" sign. Takers must make a DC 10 Wisdom save or compulsively leave a possession behind and forget they owned it. Trying to take items already left gets you walloped.
  Beer Tide: A brewery fermenter bursts, flooding the street with hundreds of gallons of beer. A child is swept toward a manhole, a criminal escapes confused guards, an old woman's flower cart overturns, or the characters themselves must make a DC 9 Str/Dex save or take 1d6 bludgeoning and end up sticky and soaked.
  Beggar: A lightfoot halfling wererat named Larca Shineforth begs for coin while secretly sizing up halflings for the Shard Shunners gang. She waits to speak with a halfling alone—then transforms into hybrid form and bites, attempting to infect with lycanthropy.
  Book Keeper: A half-elf apprentice wizard named Linden Tallowick staggers in front of a horse under a teetering pile of books and is knocked prone. If helped, he can arrange an introduction to Vajra Safahr, the Blackstaff, who is always hiring adventurers.
  Book Thief: A thief fresh from Waterdeep's Font of Knowledge library hurries past. They may be a lovelorn acolyte with stolen romance novels, a kenku obsessed with flight, an apprentice wizard who eats pages to "consume knowledge," or a halfling hawking a fake "Spellbook of Halaster Blackcloak" for 50 gp.
  Broadsheet Reporter: Kelia Wintersbane, a sun elf spy and reporter for The Targe broadsheet, begins shadowing the characters. Her notes spin events to make adventurers look as bad as possible; if confronted, she reframes it as a "human-interest piece."
  Celebrating Hero: A ward competition champion is carried aloft on the crowd's shoulders toward the House of Heroes. Characters who show interest learn the date of the next competition and how to register.
  Chamber Pot: A homeowner empties a chamber pot from a second-story window without looking (DC 10 Dex save or be splattered). The culprit is an abusive lawyer's vengeful maid, a smirking Xanathar Guild spy, an absent-minded toymaker who apologizes and offers a clockwork toy, or a kenku Red Sashes member who offers to clean up and recruit the party.
  City Watch: A patrol of five guards and a veteran officer (passive Insight 10) marches down the street. Criminals must make an opposed group Charisma (Deception) check; law-abiding characters still have a 1-in-4 chance of being stopped for questioning.
  Crashed Carriage: A carriage has crashed. Possible causes: overloaded local guides seeking a 25 gp escort for their visiting authors, Xanathar hobgoblins robbing nobles inside (1d6 hobgoblins + sergeant), or a fleeing goblin getaway driver who knows the Guild's hideout if convinced to share.
  Cultists: Six cultists of Loviatar, Bhaal, Malar, or Talona perform a rite over a slain cat in the City of the Dead. If confronted they flee; if captured, they bite out their own tongues rather than betray their faith.
  Demon Worshipers: A warlock of the fiend (Arronal) and a cloaked babau have abducted a young man named Bol for sacrifice to Baphomet, with golden candlesticks worth 10 gp each on a makeshift altar. If the ritual completes, 2d6 maw demons pour from an Abyssal rift into the ward.
  Drunken Troublemakers: Two thoroughly drunk Black Boar Tribe berserkers take offense when bumped. The offended character makes a DC 15 Charisma (Intimidation or Persuasion) check—failure means a sucker-punch. Offering to buy a round grants advantage.
  Ensorcelled Child: Ten-year-old Benji Tormson dashes into the characters twitching and gibbering, his panicked parents calling for help. A primal spirit possesses him when frightened; DC 15 Charisma (Persuasion) calms it, or a remove curse spell drives it out (300 gp at a temple if the characters can't cast it themselves).
  Fallen Money Pouch: A coin pouch in the gutter holds 1d6 gp and a note reading "Now we're even," an angry poisonous snake, fresh horse dung, a gnome trickster's stink-bomb prank (she's watching from a doorway), pebbles masking assassin Black Pidden's ambush, or a fake map to the legendary Vault of Dragons planted as a tavern publicity stunt.
  Festival Parade: A raucous parade slows street progress to a crawl. Options: a violent silver-ball ward game (DC 15 Str/Athletics × 4 to win), a burning festival float with performers on the roof, or costumed dancers who invite the group to join—a DC 15 Charisma (Performance) check impresses a talent scout for Zardoz Zord's Sea Maiden's Faire.
  Fleeing Cutpurse: A spy slips a stolen gem worth 50 gp into a character's pocket. Moments later, four City Watch guards arrive hunting the thief. Proving innocence requires surrendering the gem plus a DC 13 Charisma (Deception or Persuasion) check—or surrender the gem and pay a 50 gp fine.
  Funeral: A funeral in the City of the Dead draws a crowd. It could be for a City Watch officer killed by a drunken adventurer (the crowd is openly hostile to adventurers), gangsters posing as mourners to exhume a buried treasure map and 100 gp ring, or the adventuring company Sons of the North toasting a fallen comrade with bottles of wine.
  Gang War: Two rival factions are about to come to blows—roll twice on {waterdeep_factions} for who's involved (reroll unlikely pairings). Groups number 2d4 members each: acolytes, bandits, bandit captains, cultists, druids, goblins, guards, kobolds, nobles, priests, scouts, spies, thugs, or wererats as appropriate.
  Ghost: In the City of the Dead, the ghost of a young child wanders the cemetery speaking archaic Chondathan, crying for its mother "Shafkii." It is oblivious to being dead, vanishes after an hour, and no official record anywhere contains the name.
  Gridlock: An overturned wagon blocks the street; fixing it requires a DC 11 Wisdom (Land Vehicles) check. The driver offers a reward from the Random Goods table for help. Why it crashed: villain's trap (thugs + spy + apprentice wizard ambush), Dungsweepers' Guild revenge (shovel-hurling thugs), rival gang sabotage, or plain bad luck.
  Griffon Cavalry: A griffon cavalry rider is active overhead. They may be circling in pursuit of a fugitive, studying festival traffic flow and offering 5 gp for a fast ward-crossing errand, or desperately needing a lavatory and asking the characters to prevent their griffon from eating a passing horse (DC 13 group Wisdom/Animal Handling).
  Groundskeeper: Elderly groundskeeper Melvyn Wake of the City of the Dead begs the characters to investigate a reeking muddy patch radiating necromantic magic. Excavating reveals: a mass grave of 20 children bearing Asmodeus's infernal brand, a sarcophagus with a wraith-triggering tin tiara, an unknown sealed crypt with a perfectly preserved Chultan woman, or a black stone orb that inflicts drowning nightmares (DC 11 Wisdom save each morning or gain a short-term madness).
  Guide: A city guide offers to lead the group to one of six locations for 1 sp: Tower of Luck (Sea Ward), New Olamn's Academy of Music (Castle Ward), House of Heroes (Sea Ward), Shrines to Nature (Sea Ward), Jade Dancer (Southern Ward), or the Court of the White Bull (Trades Ward). Each has its own notable encounter waiting.
  Guild War: Two rival Waterdeep guilds have come to blows in the street; roll twice on the Random Guilds table to determine who's fighting. 2d8 commoners per side brawl furiously while guild representatives shout at each other from a safe distance.
  Halfling Thief: Wents, a halfling master thief, claims a candle of the invocation (neutral good) belongs to his sick mother and offers it for 500 gp—willing to drop to 75 gp. He stole it from a nearby house. Five City Watch guards arrive shortly after, searching for the stolen candle.
  Haywire Experiment: A creation from the House of Inspired Hands rampages through the streets, chased by 1d4 acolytes. Roll d4: a white-hot helmed horror (touching it in melee deals 1d6 fire), a shield guardian marching in a straight line through everything with a broken control amulet, four drop-and-cackle gargoyles, or a rug of smothering on a frantic hoarding spree.
  High Stakes Gamblers: Two berserkers and a gladiator play a dice game where the round's lowest scorer must chop off their left hand (the gladiator has a potion of greater healing ready). Characters who join but later balk at the punishment face all three as enemies. If rerolled, all three are now missing their hands and playing for their feet.
  Hue and Cry: A community mob hunts a criminal by shouting, banging drums, and sweeping the streets. Characters joining the search make a DC 12 group Intelligence (Investigation) check to locate the quarry; 2d10 furious commoners back them in any confrontation. Use Wanted Criminal for the quarry's identity.
  Illegal Duel: Two nobles prepare to fight in the street. Cause: competing for a maiden's heart (she watches in horror), a dispute over dice-game rules, a father dueling his bandit son for the estate inheritance, or a deliberate trap—three veterans step from shadows to attack whoever intervenes while the nobles bet on the outcome.
  Lost Pet: A well-cared-for but frightened small animal is alone in the street. DC 10 Intelligence (Investigation) finds the owner: homeless teen Nix (no coin, but eager to run errands and care for mounts), furious half-orc Lug Toothbreaker who assumes theft and calls three thug friends, joyful bard Alixian who composes an embarrassingly heroic ballad about the rescuers, or noblewoman Amanthea Silverstar who gives a potion of healing in thanks.
  Luck Seeker: A hapless adventurer stops the characters to ask directions to the Tower of Luck—a natural hook for introducing a new NPC, faction contact, or replacement character.
  Magister: A Waterdeep city magistrate moves through the ward on official business, adjudicating disputes on the street or quietly seeking witnesses to a recent crime.
  Masked Lord: One of Waterdeep's anonymous masked rulers passes incognito through the street. They may test the characters with a discreet errand or dispatch three thugs if they suspect they're being followed.
  Mistaken Identity: A character is mistaken for someone else. Roll d6: the deadbeat son of an angry mother, the double of a wanted criminal, a missing guild member, a noble family's runaway heir, a famed duelist, or a spy's overdue handler.
  Muggers: Bandits or thugs move to surround and rob the characters—or are mid-robbery on another victim nearby. They may be opportunists or working for a specific faction. They retreat if reduced below half their number.
  Murder Victim: A fresh corpse is discovered in the street or an alley, still warm. Investigation reveals faction markings, a stolen item on the body, or a clue pointing to an ongoing criminal conspiracy.
  Newsprint Seller: A broadsheet vendor hawks the latest edition of The Targe, The Waterdeep Vigilant, or another city paper. Headlines include local gossip, faction news, reward notices, and Waterdeep rumors. One headline is directly relevant to the current adventure.
  Nimblewright: A humanoid mechanical construct moves through the street acting strangely—malfunctioning, fleeing a master, or urgently delivering a sealed message to a destination it refuses to share.
  Noble and Retinue: A noble flanked by guards and trailed by servants moves through the street with purpose. They may commission the characters for a task, comment loudly on their lack of breeding, or become a future patron—or antagonist.
  Orc (with Pie): A well-dressed, cheerful orc in the Field Ward carries a freshly baked pie and offers a warm slice to anyone who politely asks. The pie is excellent.
  Otyugh: An otyugh has escaped from the Field Ward sewers and is rampaging through refuse piles, terrifying locals, and ignoring Watch commands. Someone needs to deal with it.
  Peddler: A traveling merchant with an unusual cart of exotic wares offers goods at inflated prices—roll on the Random Goods table to determine what's available. The peddler knows three rumors and is willing to trade one for a good price on their wares.
  Pickpocket: A skilled pickpocket attempts to lift a coin pouch (DC 13 passive Perception to notice). If caught, they may try to bargain with information, bolt into the crowd, or blow a whistle to summon backup from a nearby gang.
  Pilgrims: A group of pilgrims traveling to a Waterdeep temple sings hymns as they process through the streets. They may request escort and carry news from distant lands or smaller cities.
  Plague Carrier: A feverish, visibly ill figure staggers through the street. Whether the sickness is mundane or magical is unclear; the City Watch is looking for this person and approaches to quarantine them.
  Rat Swarm: A swarm of rats pours from a sewer grate, panicking horses, overturning stalls, and scattering pedestrians. Could be natural displacement—or a sign of something far more disturbing in the sewers below.
  Refugees: A small, exhausted group of displaced people, recently arrived in Waterdeep, wanders the streets looking for food and shelter. They carry news from outside the city or are fleeing a specific threat they are reluctant to name.
  Religious Procession: Priests and worshippers of one of Waterdeep's many deities parade through the streets with chanting, incense, and music. Characters may be invited to show respect, participate in a brief ritual, or receive a minor blessing.
  Robbery in Progress: The characters witness a holdup—a store being threatened or a pedestrian surrounded by armed figures. Intervening earns goodwill and the Watch's appreciation; inaction earns the Watch's scrutiny when they arrive late.
  Runaway Cart: An unattended cart rolls downhill, scattering pedestrians and market stalls. DC 13 Strength or Dexterity check to stop it before it crashes into something—or someone—important.
  Sea Spawn: One or more sea spawn have pulled themselves from the harbor into the Dock Ward, confused and thrashing. City Watch officers are struggling to contain them while panicked dockworkers flee.
  Seer: A street seer offers to read the characters' fortunes for a few coins. One specific piece of information in the reading is eerily accurate and genuinely useful to the adventure ahead; the rest is theatrical embellishment.
  Seized Ship: City Watch officers and harbor officials board a docked vessel amid shouted protests from its crew. The reason—smuggling exotic beasts, suspected piracy, or unpaid harbor taxes—may be worth investigating. The captain looks directly at the characters as if weighing something.
  Sewer Backup: A sewer grate erupts, flooding the street with foul water. Characters wading through make a DC 12 Constitution save or contract a mild illness (disadvantage on Constitution checks for 24 hours). Everyone is also thoroughly disgusting until they find a bathhouse.
  Ship Crimp: A smooth-talking unlicensed recruiter in the Dock Ward—backed by two large associates—tries to pressure the characters into signing on to a dubious vessel, or offers suspiciously generous coin to "just help load cargo tonight."
  Sink Hole: The street suddenly collapses beneath a section of cobblestones, dropping into an ancient cellar or the sewer tunnels below. Everyone within 10 feet makes a DC 12 Dexterity save or falls in (2d6 bludgeoning damage).
  Smugglers: Shady figures move carefully through the streets carrying wrapped bundles—contraband weapons, caged exotic beasts, or stolen noble art. They avoid all eye contact and take sudden turns to check for pursuit.
  Snake Oil Salesman: An enthusiastic merchant peddles "Waterdeep's Amazing Curative Tonic" from an ornate painted cart. The tonic is mostly harmless and worthless; one bottle in ten actually contains something mildly useful (DM's discretion—minor healing potion or similar).
  Solicitor: A lawyer or guild representative intercepts the characters, claiming they are owed an inheritance, a disputed payment, or are named as defendants in a legal case they had no idea existed.
  Strange Feelings: One character experiences a sudden, overwhelming premonition—dread, unexpected joy, or crushing déjà vu—with no obvious source. Something significant happened in this exact spot, or is about to.
  Street Performer: An acrobat, fire-breather, illusionist, or musician holds a crowd captive. They may be a faction spy using the crowd as cover, an informant for hire, or a genuinely talented performer scouting for wealthy patrons willing to sponsor their next show.
  Street Race: Two or more competitors race through the ward's streets, scattering pedestrians and overturning stalls. Characters may enter the next heat (DC 15 Athletics or Acrobatics to place) for a prize of 2d10 gp and the admiration of onlookers.
  Street Food Vendor: A food stall offers the ward's local specialty dish at fair prices. The vendor knows who has passed through the area recently and freely trades gossip with paying customers.
  Stumbling Figure: A cloaked figure staggers into the characters and collapses. They may be drunk, badly injured, under a magical compulsion, or carrying something in a sealed satchel that someone very dangerous desperately wants back.
  Supernatural Mists: Unnatural fog rolls through the street from no visible source, cutting visibility to 10 feet and muffling sound. Soft footsteps move within the mist. Whatever is there, it has not yet decided whether to approach.
  Tax Collectors: Harried city tax collectors with two guard escorts go door to door collecting dues. They may mistake the characters for residents of a nearby property and demand immediate payment with bureaucratic certainty.
  Traffic Warden: A City Watch traffic warden argues loudly with a cart driver blocking the street, blowing their whistle repeatedly and gesturing dramatically. The driver is equally heated. Bystanders are taking sides. It's about to get physical.
  Undercover City Watch: A plainclothes Watch officer—convincingly posing as a merchant, street beggar, or day laborer—surveils the area. They may approach the characters for information, or accidentally blow their cover at the worst moment.
  Unearthed Evil: Gravediggers in the City of the Dead have uncovered something that should have stayed buried: a sealed crypt covered in warning runes, a chained iron sarcophagus, or a smooth black artifact that pulses faintly with malevolent energy.
  Unholy Invitation: The characters find—or receive from a silent courier—a sealed black envelope written in blood-red ink and smelling faintly of sulfur, inviting them to a midnight gathering at an unmarked address in a neighboring ward.
  Wanted Criminal: A figure matching a City Watch wanted poster moves through the crowd with practiced casualness. Capture earns a reward of 2d10 × 10 gp—but they are protected by 1d4 thugs moving as escort, and they will not come quietly.
  Wild Animal: A dangerous creature has escaped into the streets—a bear from a traveling menagerie, a pair of worgs from an overturned cage wagon, or something stranger pulled from the harbor docks. Locals scatter; the characters may be the only ones equipped to help.



waterdeep_encounter_night
  Griffon Cavalry Patrol: A griffon cavalry rider circles low overhead, the beast's wings almost silent, a lantern attached to the saddle casting moving light across the rooftops. The rider scans the darkened streets for fugitives.
  Lamplighter's Rounds: A lamplighter makes their nightly circuit, igniting Waterdeep's magical street lamps one by one. They pause often, glancing over their shoulder, and flinch at unfamiliar sounds.
  City Watch Night Patrol: A six-guard City Watch patrol marches with lanterns raised, stopping anyone moving quickly, keeping to shadows, or acting evasive. The veteran officer is alert and unhurried.
  Masked Lord's Carriage: An unmarked black carriage with drawn curtains and no insignia rolls silently through the street. Six mounted guards wearing no identifying livery escort it without a word.
  Demon Worshipers' Ritual: The sound of chanting drifts from a nearby alley. A faint reddish pulse of light beats at its far end—a demonic ritual is underway, and the participants have not noticed the characters yet.
  Supernatural Mists: Thick, unnatural fog rolls in from the harbor, dropping visibility to 10 feet. Sounds distort strangely. Soft, deliberate footsteps follow the characters from just beyond sight.
  Cultists at the Crossroads: Six hooded figures leave black candles burning at a street junction and melt into the shadows. The candles do not gutter in the wind. Whatever they've marked here, the air feels wrong until dawn.
  Gang War After Dark: Two rival factions settle a score in the lightless street. Lanterns have been smashed. There are no witnesses—or so the gangs assume as they reach for their weapons.
  Nimblewright Sighting: A humanoid construct moves through the dark with mechanical precision, heading somewhere with urgent purpose, ignoring every person it passes. Something important has gone wrong in a nearby household.
  Unholy Invitation Delivered: A courier in dark, unmarked livery hands one character a sealed black envelope—blood-red ink, faint sulfur smell—then steps into an alley and vanishes without a sound.
  The Prowling Ghost: A pale drifting light moves between the headstones of the City of the Dead. The ghost of a young child murmurs in archaic Chondathan, calling for a mother it will never find again. It does not notice the characters.
  Murder, Still Fresh: A body lies sprawled in the street, still warm, blood pooling on the cobblestones. The killer is likely still within a block. The City Watch is minutes away at best.
  Wanted Criminal's Escape: A figure matching a City Watch wanted poster sprints through a dark alley nearby, two thugs running interference to slow any pursuit, cutting between buildings.
  Muggers After Dark: Three or four thugs detach from the shadows to surround the characters, confident the empty street and darkness make witnesses unlikely. They are not entirely wrong.
  Hunted by the Xanathar: A terrified young man grabs a character's arm and begs to be hidden. The Xanathar Guild's agents—a spy and two thugs—round a corner only moments behind him.
  Illegal Duel by Moonlight: Two nobles face each other by lantern light, their seconds standing aside. The Watch is not expected—but three veteran bodyguards lurk in the shadows, betting on who wins.
  Ship Crimp at the Docks: A smooth-talking man with two large associates approaches the characters near the waterfront, offering suspiciously well-paying "ship work" with an unconvincing smile and a hand resting near a cudgel.
  Seer's Midnight Reading: An elderly woman turns tarot cards by candlelight at a deserted street corner. She looks up as the characters approach and says simply, "I've been expecting someone. Sit."
  Strange Feelings After Dark: One character feels they are being watched from the shadows—not with hostility, but with desperate, silent pleading. Nothing is visible. But the feeling does not go away.
  Smugglers' Transfer: At the darkened docks, cloaked figures pass wrapped bundles from a small boat to a waiting cart, working fast with deliberately dim lanterns. They freeze when they realize they're not alone.



encounters_day
  A senior city official's secretary moves through the street with a sealed dispatch and an armed escort, making no eye contact with anyone.
  A squad of Force Grey agents jogs past in tight formation, responding to an urgent summons from the Blackstaff Tower.
  City Watch officers perform an official inspection of a nearby building, questioning everyone who enters or exits with unhurried thoroughness.
  A noble's mounted herald cries official announcements through the ward—new ordinances, noble appointments, and decrees from the Lords of Waterdeep.
  Griffon cavalry riders perform aerial maneuvers above the Castle Ward, their mounts banking between towers and battlements as part of their morning training.
  A Waterdeep city magister holds an impromptu outdoor court, arbitrating a noisy merchant dispute with dry patience and a short quill.
  A group of Blackstaff apprentices moves in a tight cluster, carrying wrapped magical equipment and politely but firmly refusing to discuss their errand.
  City Guard soldiers escort a shackled prisoner toward the Palace courts, the prisoner shouting their innocence to anyone who will listen.
  A clutch of ambitious nobles loudly debate city politics outside the Palace gates, each vying to be seen by anyone of importance passing by.
  Official decree-writers nail fresh notices to the ward's public boards: new laws, missing persons, bounty postings, and official announcements from the Lords.
  A tax magistrate flanked by two guards goes building to building collecting the monthly ward tithe, ledger in hand, and tolerating no excuses.
  A clerk from the Scriveners', Scribes', and Clerks' Guild approaches the characters, insisting they cannot conduct business in this ward without the correct licensing papers.



encounters_night
  The Castle Ward's streets are nearly empty; only City Watch patrols and armored City Guard soldiers move through the lantern-lit avenues with quiet authority.
  A cloaked figure slips from a little-known side entrance to the Palace of Waterdeep, pausing to confirm they are unobserved before moving off with purpose.
  Two City Guard soldiers argue in urgent, hushed tones at a checkpoint. They fall immediately silent the moment they notice the characters watching.
  A Force Grey operative passes swiftly through the ward, nodding once in acknowledgment but offering no explanation for their late-night errand.
  The sound of heated argument carries faintly from within the Palace of Waterdeep. Something has the Lords of Waterdeep deeply displeased tonight.
  A griffon cavalry patrol circles overhead even at this hour, their lantern-equipped mounts watching the Castle Ward from above without pause.
  A sealed carriage with curtained windows and no insignia arrives at the Palace's private entrance. The guards wave it through without question or inspection.
  A Masked Lord's bodyguards—six of them, hand-picked and grim—escort their charge through the quiet streets toward a destination that will not be shared.
  A suspicious flicker of fire appears briefly in a window near the Palace. It is extinguished within moments, but the Watch is already moving toward the building.
  The Castle Ward falls eerily silent; even the usual night sounds have stopped. Something has frightened every bird from their rooftop perches.
  A clerk hurries through the darkened street clutching a scroll case, muttering the contents under their breath as though memorizing something that cannot be written down.
  Lanterns throughout the ward flicker and dim simultaneously for three full seconds, then return to normal. No one on the street mentions it.



low_district_rumour
  "Word is the Xanathar's moving a big shipment through the Dock Ward this tenday. Nobody knows what's in the crates, but the Dungsweepers won't go near that street."
  "They found a body behind the Bent Nail last night. No wounds. Just dead, sitting up against the wall. Watch said nothing's wrong. Nobody believes 'em."
  "Prices at the Dungsweepers' Guild have doubled. Something's blocking the main sewers under the Field Ward and they won't say what."
  "There's a Red Sashes checkpoint two streets over. They're asking questions about the murder near the harbor. Quietly. No uniforms."
  "Someone's been paying triple wages to dockhands willing to work night shifts on the east piers—no questions asked. Generous. Too generous."
  "The Zhentarim and Xanathar Guild nearly came to blows in the Trades Ward two days ago. Kept it quiet, but everyone on the street saw it."
  "There's a woman going house to house asking about her missing child. Been at it four days. City Watch hasn't done a thing."
  "A City Watch officer was seen taking a heavy coin purse from a man in the alley behind the market. Third time someone's said the same about him."
  "The sickness that swept the Dock Ward last month? A healer at a Castle Ward temple says it didn't spread like any natural plague she's ever seen."
  "One of those constructs from the House of Inspired Hands got loose again last night. Third time this season. They say this one talked before it ran."
  "A Masked Lord was spotted arguing—openly, without the mask—with a merchant near the harbor. Everyone who saw it is keeping quiet about who it was."
  "The Sewer Snakes have been completely silent for two weeks. No robberies, no sightings, nothing. That's always worse than when they're making noise."
  "A nimblewright's been living in the walls somewhere near the Dock Ward for months. Nobody's been able to catch it, and now it's started leaving notes."
  "A ship from Luskan arrived with six fewer crew than it left with. The captain paid the harbor tax without a word and hasn't been seen since."
  "City Watch found cages of exotic animals—tressym, pseudodragons, something with too many tentacles—locked in a Field Ward warehouse. Nobody's claimed them."
  "A priest of Siamorphe was seen visiting the Xanathar Guild's known front business in the Trades Ward. Twice. Nobody knows if she was a prisoner or a guest."



`;


// Function to add common data to existing dataText
function addCommonDataTo(existingDataText) {
    return existingDataText + '\n\n' + homebrewGeneratorDataText;
}

// Make functions available globally for generators
window.addCommonDataTo = addCommonDataTo;
window.homebrewGeneratorDataText = homebrewGeneratorDataText;