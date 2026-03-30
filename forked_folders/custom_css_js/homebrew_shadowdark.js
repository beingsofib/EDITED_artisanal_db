/*

This work is licensed under a Creative Commons Attribution 4.0 International License available at:

https://creativecommons.org/licenses/by/4.0/

You are free to use this content in any manner permitted by that license as long as you include the following attribution statement in your own work:

This work includes material taken from the 5e Artisanal Database by Michael E. Shea of SlyFlourish.com, available under a Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/

*/

// Combined common generator data
// This file contains all shared data in the format expected by the generator system

// Create the common data text in the format expected by parseInput()
const homebrewshadowdarkGeneratorDataText = `

gear
  Torch
  Dagger
  Pole
  Shortbow and 5 arrows
  Rope, 60'
  Oil, flask
  Crowbar
  Iron spikes (10)
  Flint and steel
  Grappling hook
  Club
  Caltrops (one bag)

wizard_mishap
  Devastation! Roll twice and combine both effects (reroll any further 1s)
  Explosion! You take 1d8 damage
  Refraction! You target yourself with the spell
  Your hand slipped! You target a random ally with the spell
  Mind wound! You can't cast this spell again for a week
  Discorporation! One random piece of your gear disappears forever
  Spell worm! You lose the ability to cast a random spell on each of your turns until you pass a DC 12 Constitution check. You regain the ability to cast those spells after completing a rest
  Harmonic failure! You lose the ability to cast a random spell until you complete a rest
  Poof! You suppress all light within a near distance from you, including sunlight and magical light, for 10 rounds
  The horror! You scream uncontrollably for 3 rounds in Primordial, drawing lots of attention
  Energy surge! You glow bright purple for 10 rounds, granting enemies advantage on attacks against you
  Unstable conduit! You have disadvantage on casting spells of the same tier for 10 rounds

light_mishaps
  Dud. The light source (even a magical one) goes out and needs to be replaced or recast.
  Fire. The light source (even a magical one) flares and burns your hand. Take 1 damage. DC 18 DEX or drop it.
  Air. A rogue wind or pocket of thin air blows through. DC 15 DEX or the flames go out.
  Water. A sudden rain shower or dripping ceiling hits the light source. DC 15 DEX or the flames go out.
  Earth. Falling rocks, mud, leaves, or ash cover the light source. DC 12 DEX to protect it.
  Spark. If the light source is open flame, it sparks and catches on 1d4 flammable objects within close. DC 12 DEX to extinguish each one.

encounter_distance
  Close
  Near
  Far

encounter_activity
  Hunting
  Eating
  Building/ nesting
  Socializing/ playing
  Guarding
  Sleeping

encounter_reaction
  Hostile
  Suspicious
  Neutral
  Curious
  Friendly

encounter_treasure


trap_trap
  Crossbow
  Hail of needles
  Toxic gas
  Barbed net
  Rolling boulder
  Slicing blade
  Spiked pit
  Javelin
  Magical glyph
  Blast of fire
  Falling block
  Cursed statue

trap_trigger
  Tripwire
  Pressure plate
  Opening a door
  Switch or button
  False step on stairs
  Closing a door
  Breaking a light beam
  Pulling a lever
  A word is spoken
  Hook on a thread
  Removing an object
  Casting a spell

trap_damage
  1d6
  1d6/sleep
  1d6/paralyze
  1d6/blind
  2d8
  2d8/sleep
  2d8/paralyze
  2d8/confuse
  3d10
  3d10/paralyze
  3d10/unconscious
  3d10/petrify

hazards_movement
  Quicksand
  Caltrops
  Loose debris
  Tar field Lava
  Grasping vines
  Steep incline
  Slippery ice
  Rushing water
  Sticky webs
  Gale force wind
  Greased floor
  Illusory terrain

hazards_damage
  Acid pools
  Exploding rocks
  Icy water
  Acid rain
  Pummeling hail
  Steam vents
  Toxic mold
  Falling debris
  Curtain of fire
  Electrified field
  Gravity flux

hazards_weaken
  Blinding smoke
  Magnetic field
  Exhausting runes
  Antimagic zone
  Snuffs light sources
  Disorienting sound
  Magical silence
  Numbing cold
  Sickening smell
  Sleep-inducing spores
  Confusing reflections
  Memory-stealing

something_happens
  The ground shakes violently and a massive fissure opens
  An unseen foe leaps out of hiding at close range
  A horrible buzzing fills the air, growing louder and louder
  You catch the acrid smell of smoke and flame
  A bright star appears in the sky, visible even at midday
  You spot a half-open bag with gold coins glinting inside
  A man slips a note and an odd potion into your hand
  Someone observing you from afar steps out of sight
  A dwarf in a red hat hands you a rose, bows, and leaves
  A cowled stranger in a black cloak approaches you
  Someone tries to pick your pocket
  A strange ticking sound comes from inside your bag
  A frothing, frantic horse with a saddle but no rider appears
  A mound in the earth quickly burrows toward you
  You sense you are being magically scryed upon
  Someone tries to plant an object on your person
  You are filled with a strong sense of dread and danger
  A woman hands you a black cat and then runs away
  A small, woodland creature jumps out of a backpack
  You smell lilacs and hear faint, ghostly laughter
  A note wrapped around a thin dagger lands next to you
  A green-glowing meteor streaks through the sky
  Someone nearby is staring at you and mouthing words
  A pair of yellow eyes watches you from the darkness
  An orc with an arrow in her back crashes through a door
  You hear a beast cry out in pain just up ahead
  A huge swarm of bats crashes over you and swirls away
  A frail beggar whispers that he has a secret to tell you
  An object falls from above and barely misses your head
  A seagull lands on your head and coughs up an odd bottle
  The smell of ozone rises and electricity crackles in the air
  You spot a trail of tiny silver coins leading around a bend
  A wild-eyed man approaches with a holy book held high
  Every light source suddenly extinguishes
  A stampede of wild animals bursts into view
  An old woman points at you and yells, "There they are!"
  A passing stranger presses an ancient coin into your hand
  A chorus of howls echo in the distance
  Two pinching and slapping goblins tumble into sight
  You realize you are not alone; something is behind you
  The sudden sound of rushing water crashes toward you
  You hear an ear-splitting scream that nobody else hears
  A man slaps you with a glove and throws it at your feet
  A violent, windy storm kicks up without warning
  Lightning strikes close and leaves a glowing object behind
  A multicolored orb drifts up to you and then zips away
  A runaway wagon crashes toward you
  An NPC throws off their disguise, revealing an enemy
  A demon appears to you and presents a tempting offer
  A radiant being appears to you with a message of warning

rumours
  An armored beast the size of a ship is rampaging nearby
  A team of assassins is on its way to kill your group
  The local ruler has placed a 2,000 gp bounty on your heads
  The cult of Shune is planning a fiery coup at midnight
  An ancient, stone door has been found in the castle cellar
  Lizardfolk have been raiding caravans near the swamp
  Armored skeletons are roaming the misty graveyard
  An earthquake uncovered a ruin inside a deep rift
  A warband of orcs has taken over an abandoned keep
  There is a hall of golden statues underneath the well
  Those who survive the Trial of the Lotus gain a strange gift
  A Captain of the Guard has been taken hostage by thugs
  The Crystal Caves are home to a cult of psychic sorcerers
  A crocodile dragged a richly-laden mule into the sewers
  A fortune-telling witch speaks true omens and portents
  Every full moon, the Prancing Unicorn's larder is robbed
  A famous group of crawlers hasn't returned from a delve
  A glowing meteor crashed deep inside the marshlands
  Fire will not light or burn within sight of the Lion Fountain
  The lost Jewel of Barbalt is hidden in the Howling Caves
  A dwarven mining team has uncovered a tentacled statue
  The Red Owl tavern has a trapdoor to the Shadowdark
  2d12 viperians guard a shrine to a medusa in the jungle
  Three thieves just pulled off a gemstone heist nearby
  Harpies keep watch from the cliffs around Diridia's Tomb
  A gorgon stalks the ruins of the Underhill Halls
  Beneath the Red Abbey is the forgotten Barrow of Ur-Din
  A dying sage is calling for a mighty group of heroes
  A wizard accidentally let his trio of cockatrices escape
  A local lord has somehow been stranded atop a high roof
  Bartomeu the Pirate Prince will be hanged at noon
  Goblin spelunkers found an underground cathedral
  The Kytherian Mechanism sank into the sea near Myrkhos
  Rare and valuable mushrooms grow inside an old crypt
  The Church of St. Terragnis will pay for the return of a relic
  A volcanic eruption revealed tunnels in the caldera's walls
  The cyclopean ruins of Tal-Yool lie deep within the forest
  A famous gambler will bet a ruby on a Wizard Thief game
  The Moon Druids will bless a sword used to slay a werewolf
  Gravediggers found a chained coffin in an unmarked plot
  An abandoned wizard's tower is full of clockwork creatures
  The Thieves' Guild is about to attack a rival merchant lord
  Windstorms uncovered a stone monolith in the desert
  A rival group of crawlers found the map to Jiraal's Hoard
  A monstrosity called The Carver lurks below the university
  The Onyx Destrier is in Ekmara's Keep in the wasteland
  The princess has been kidnapped by a group of sorcerers
  A Chaos Knight's tomb has been found beneath a temple
  The fabled Library of Gehemna appeared outside the city
  The dragon Ixamir has awoken from her 200-year slumber

ancestry
  Human
  Elf
  Dwarf
  Halfling
  Half-orc
  Goblin

class
  Fighter
  Priest
  Thief
  Wizard

alignment
  Lawful
  Neutral
  Chaotic

renown
  Unknown
  Local known
  Widely recognized
  Extremely famous

secret
  Betrayed an oath
  False/stolen identities
  In debt to Thieves' Guild
  Map to major treasure
  Suffering a curse
  Has a powerful patron

wealth
  Poor
  Standard
  Wealthy
  Extravagant

districts
  Slums
  Low district
  Artisan district
  Market
  High District
  Temple district
  University district
  Castle district

temple_district
  Ruined temple
  Minor deity's chapel
  Forbidden shrine
  Major god's temple
  evered holy site

artisan_district
  Stocks and pillories
  Modest temple
  Standard tavern
  Wealthy shop

castle_district
  Royal bathhouse
  City Watch's garrison
  Theater or coliseum
  Royal castle

poor_shop
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
  Drug den

standard_shop
  Brewer
  Butcher
  Tailor
  Common blacksmith
  Adventuring gear
  Leatherworker
  Shipwright/carpenter
  Stonemason
  Herald/town crier
  Livestock

wealthy_shop
  Fine tailor
  Glassblower
  Jeweler
  Apothecary
  Artist
  Scribe
  Guildhall
  Goldsmith
  Master blacksmith
  Antiques and curios

shop_generator
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

shop_name
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

treasure_generator
  Bent, tin fork (1 cp)
  Muddy torch (2 cp)
  Bag of smooth pebbles (2 cp)
  10 cp in a greasy pouch
  Rusty lantern with shattered glass (1 gp)
  Silver tooth (1 gp)
  Dull dagger (1 gp)
  Two empty, glass vials (6 gp)
  60 sp in a rotten boot
  Cracked, handheld mirror (8 gp)
  Chipped greataxe (9 gp)
  10 gp in a moldy, wood box
  Chip of an emerald (10 gp)
  Longbow and bundle of 40 arrows (10 gp)
  Dusty, leather armor dyed black (10 gp)
  Scuffed, heavy shield (10 gp)
  Simple, well-made bastard sword (10 gp)
  12 gp in the pocket of a ripped cloak
  Wavy-bladed greatsword (12 gp)
  Pair of elf-forged shortswords (14 gp)
  Golden bowl (15 gp)
  Obsidian statuette of Shune the Vile (15 gp)
  Undersized pearl (20 gp)
  Jade-and-gold scarab pin (20 gp)
  Bag of 10 silver spikes (2 gp each)
  Mithral locket with a painting of a halfling (20 gp)
  Two finely forged dwarven shields (20 gp)
  Pair of silvered daggers (10 gp each)
  Copper-and-gold mead tankard (20 gp)
  Bundle of five red dragon scales (5 gp each)
  Light, warm cloak woven of spidersilk (25 gp)
  Fine set of ivory game pieces (25 gp)
  Half-finished suit of chainmail (30 gp)
  Matched trio of warhammers (10 gp each)
  Fragment of a sapphire (30 gp)
  Set of silk slippers and a robe (35 gp)
  Silver-and-gold circlet (40 gp)
  Radiant, polished pearl (40 gp)
  Mithral shield etched with soaring dragons (40 gp)
  Gold monkey idol with a ruby gripped in its teeth (60 gp)
  Fine suit of chainmail (60 gp)
  Cracked emerald (60 gp)
  Two lustrous pearls (40 gp each)
  1st-tier spell scroll (80 gp)
  Potion of Invisibility (80 gp)
  Magic wand, 2nd-tier spell (100 gp)
  Egg of The Cockatrice (100 gp)
  +1 armor (benefit, curse) (150 gp)
  Bag of Holding (virtue, flaw) (150 gp)
  +1 magic weapon (benefit) (200 gp)

artisan_district_encounters
  An angry efreeti rises out of a tarnished, brass lamp
  An assassin drops from above, mistaking a PC as a mark
  A glassblower accuses a PC of breaking a priceless vase
  A group of 2d6 thugs rush the stocks to free their leader
  1A fight breaks out between two groups of rival nobles
  An herbalist accidentally creates a toxic cloud of smoke
  Thieves' Guild goons pick pockets while posing as beggars
  1d6 bandits hold a vendor at knifepoint and demand coin
  Horses being shod break free and stampede in the street
  A cloaked figure defaces a shrine to Madeera and bolts
  An arrogant warrior on a warhorse tries to kick a PC aside
  Brightly dressed acrobats tumble by; a pick-pocket follows
  1d6 guards mistake a PC for Pliny the Swift, a criminal
  Gaunt, robed clergy offer "cleansing" (forcible conversion)
  1d6 breathless guards chase a pack of 2d4 mangy mastiffs
  A merchant hands a PC a gold goblet and screams, "thief!"
  A disoriented manticore crash-lands in a busy square
  A deep sinkhole falls open; a swift river rushes by far below
  1d6 thugs posing as guards demand the PCs pay a toll
  A woman falls to the ground, writhing, and rises a wererat
  An anvil being lifted by ropes plunges toward a bystander
  A blacksmith's red-hot hammer slips and flies toward a PC
  Three halflings in a long jacket sell "tonic" (sewer water)
  An angry customer smashes around inside a pottery shop
  2d6 Bywater Barons (thugs) jump a jeweler locking up
  Dissidents tip a tall statue of the Overlord toward a crowd
  A passing man falls dead to a poison dart meant for a PC
  An old, drunk noble challenges a PC to a duel to the death
  An open square hosts a contest of insult-slinging bards
  A bald, spectacled man watches the PCs and takes notes
  A jumpy woman palms a PC a note: "They're watching!"
  A shiny object (crocodile eye) glints inside a sewer grate
  neering onlookers throw tomatoes at a harried bard
  A woman in a cowled cloak pulls down wanted posters
  2d4 kobolds pop out of the sewers and raid a bakery
  Bounty Festival celebrants whip passers with bound reeds
  A bronze statue of Ord winks and points toward a tavern
  A street mime follows a PC, imitating their actions
  A beggar holds up a bowl; inside is a freshly severed finger
  A cobbler jigs out into the street in a pair of cursed boots
  A turkey roaster offers a free leg to the strongest wrestler
  A lone City Watch member tries to swipe a necklace
  A group of women chase a halfling carrying a pie
  A hushed voice calls to a PC from inside a dark well
  A ray of sun outlines a hidden door back in an empty alley
  Rival crawlers challenge the group to a drinking contest
  The Wandering Merchant appears with a potion for sale
  An appraisal reveals a PC's weapon is actually magical

castle_district
  2d20 guards surround the group, accusing a PC of murder
  Piercing horns sound an alarm inside the royal palace
  Prisoners on a chain revolt in unison against their escort
  A drunk noble swings an axe, yelling, "Off with 'er head!"
  Screaming, robed bathers stampede out of the bathhouse
  A visiting noble's honor guard chases a gray street cat
  A mounted group of knights charges down the busy street
  A condemned prisoner's noose breaks; he scampers away
  A fledgling gladiator takes offense at the garb a PC wears
  Overhead, a crumbling gargoyle breaks loose and falls
  A lion tears free from handlers leading it to the coliseum
  A wild-eyed playwright calls a PC an "unread cretin"
  Armed tax collectors stop each person to levy a war tax
  A venerable knight mistakes a PC for Targ the Betrayer
  Two holy orders of rival crusaders square off in the street
  A hooded man slips into a sewer grate near the theater
  An elephant dragging chains bursts from the coliseum
  Mercenaries push people aside ahead of a visiting prince
  The street crumbles, revealing a dry cistern full of tunnels
  The water from a fountain rises into a humanoid shape
  A gleaming knight parades a sickly captive to the garrison
  Robal Goodwin darts by hauling bags of stolen royal gold
  A 30' tall catapult in a military parade ignites in fast flames
  A PC spots a new wanted poster with their own face on it
  A golden horseshoe peeks from the gutter filth
  Two rival gladiators start a fist fight in a rollicking tavern
  A spooked horse crashes into fragile building construction
  A dripping sewer beast bursts from the bathhouse doors
  Drunk Sir Galvin gets thrown out of the Blue Mare again
  An explosion rocks the nearest City Watch garrison
  A foreign dignitary mistakes a PC for a horse groom
  Bleary-eyed dwarf miners tunnel up through the street
  Dungeon prisoners grab at ankles from the barred gutters
  Four figures throw their hoods off, revealing devil masks
  The lead actor on an open street stage falls dead mid-word
  Two rival bounty hunters fight to capture the same man
  The PCs spot a group of crawlers dressed exactly like them
  A sewer grate thumps and clangs loudly, then goes still
  A cowled figure subtly hands a scroll to a passing woman
  A crossbow bolt flies at the PCs from the rooftops
  The famed singer Branzolini insists he knows a character
  A strong gust blows a key out of a window flower box
  A brash guard falls to his knee before the disguised Duke
  Two nervous men rush by with an object tied in a sheet
  Smoke begins pouring from the theater's upper windows
  A magic sword appears in the hand of a gladiator statue
  The Overlord rides by with a heavily armed honor guard
  he Wandering Merchant scalps premium coliseum seats
  A visiting Duchess invites the PCs to attend a royal ball

high_district
  The Overlord levies a 500 gp "filth tax" on the PCs
  The Duke's son challenges a PC to a duel to the death
  The Overlord's Assassins leap out and demand explanation
  Crawlers with the Mercenaries' Guild confront the PCs
  A burglar disguised as a butler leads the PCs to an ambush
  Baron Clard's wife winks at a PC; he notices and is furious
  Three casks of fine wine break loose and careen at the PCs
  A noble's pet panther spooks and tears free of its leash
  A giant scorpion (a rare delicacy) escapes a fine restaurant
  An angrily thrown chamber pot flies down toward the PCs
  A drug-addled bard in a loincloth flails wildly at the PCs
  A bribed fortune-teller declares the PCs "future criminals"
  A skeptical City Watch patrol follows the group around
  An immaculately clean child tries to trip a PC as they go by
  Three finely dressed thugs extort a banker for "protection"
  Six thugs race from the Royal Jeweler with a fat bag in tow
  A bailiff and four guards assess the PCs for any owed taxes
  A gruff noble shoves past a PC, muttering "lowborn scum"
  A malfunctioning magical ward casts web on the PCs
  An unconvincing cry for help comes from behind a tavern
  A vendor of fine silks accuses a PC of tearing a costly scarf
  Duchess Gorvalt swoons near the edge of a high balcony
  Masked revelers crowd the streets; a dagger flies at a PC
  Lord Larvin chokes on his wine; it's been poisoned
  The City Watch rousts gutter-sleepers; one is a known NPC
  A City Watch patrol searches the PCs for suspicious items
  A teenaged heckler insults the characters' clothing
  A cowled woman beckons the PCs into the rose garden
  A child with magical power accidentally summons an imp
  One of Miss Fralk's etiquette students slips off into an alley
  A noble asks a PC to punch him and gets upset either way
  The PCs find a note: "Bring the poison to the Sapphire Sky"
  Through a dark window, the PCs spot 6 swaying ghouls
  A drunk socialite casually admits to killing her husband
  Rival crawlers brandish their new sheriff pins and writs
  1d6 City Watch are outclassed trying to catch an acrobat
  A PC recognizes a fraud posing as Sir Wyndos the Bold
  A brass monkey statue turns 1 cp into 1 gp 1% of the time
  A weeping bard playing tragic ballads follows the PCs
  The PCs commit a social gaffe against a visiting prince
  Jaunty old Sir Faust pulls a pearl out of a PC's ear as a gift
  A night hag posing as a baker hands out drugged tarts
  The PCs notice 1d4 well-preserved zombies blending in
  A political dissenter takes cover among the PCs and rants
  A Reverend Sister (acolyte) offers healing/blessing to a PC
  A formerly taxidermied basilisk charges out of a curio shop
  A real vampire stalks unnoticed among masqueraders
  The Wandering Merchant is selling loaded dice (5 gp)
  The Overlord is dining and invites the PCs to the meal

low_district
  3d6 zombies lurch out of a smoke-belching charnel house
  A reaver and 4 bandits look for weaklings to shake down
  2d6 pirates and 2d4 merchants (guards) fight on the docks
  A grizzled sailor spits at the PCs and sneers, "landlubbers"
  A half-orc is thrown through a tavern window into a PC
  1d6 shifty ruffians linger outside a butcher's shop
  A dyehouse dumps a boiling, toxic slurry into the street
  Children throw mud pies at sputtering men in the stocks
  A cloaked person sneaks between graveyard headstones
  A backed-up sewer grate geysers waste at passersby
  A man carts a thumping coffin toward the charnel house
  A woman whispers, "play along" and chats as guards pass
  Drunk sailors hang off the PCs and clumsily pick pockets
  Masons unseal an old well, releasing 2d6 giant centipedes
  Rival gangs of 2d4 dirt-streaked children bite and scratch
  Four thugs loom over a woman who unlocks a warehouse
  A wheezing beggar offers portents in exchange for coin
  Thieves' Guild footpads tail the PCs from 20 paces back
  The shell of a burned warehouse collapses into a tenement
  2d4 kobolds rain stones down from a warehouse's eaves
  Workers cart a yowling, caged tiger away from the docks
  A young gravedigger slips and falls into a deep grave
  Hidden thieves pull ropes up in a side alley to trip marks
  A shop owner whispers about "exotic goods" for sale
  1d6 Thieves' Guild toughs spoiling for a fight approach
  A brawl of 2d6 drunk commoners spills out of a tavern
  Clay shingles fall off the crumbling roof of a warehouse
  A smith flings still-hot horseshoes onto a pile near the PCs
  A blind old woman presents her "cat" (a vicious giant rat)
  A troupe of jugglers swig ale and wildly flip daggers
  A mercenary on a horse drags a lank man to debtor's court
  Two beggars slap and scratch over a burned rat-on-a-stick
  A pure spring bubbles up between cracked cobblestones
  A feeble beggar turns out to be 3 kobolds in a burlap sack
  A bailiff and four guards haul a struggling man along
  Two rival dog fighters lose control of their mastiffs
  Rival crawlers accuse the PCs of looting in "their territory"
  A kingdom of cats gathers beneath the docks or porches
  A wheedling torchbearer follows and begs for work
  A shrill scream erupts from a row of moldy storage sheds
  Lady Unwin asks the PCs directions to the seedy Red Rat
  Three thugs in hoods drag a large bag from a tenement
  A red-eyed being watches from a shadowed window
  2d6 Bywater Barons (thugs) mob a City Watch patrol
  A refinery discards a barrel of rancid blubber (10 oil vials)
  Old Esmerelda hands out cups of mulled wine (heals 1d4)
  A pox-marked beggar is actually the Duke in disguise
  The Wandering Merchant sells the deed to an old shop
  A dropped magic item glitters inside a filthy gutter

market
  Six chaos cultists throw burlap bags over the PCs' heads
  A drunk, wobbly knife-thrower hurls a blade toward a PC
  A runaway cart of lettuce heads crashes down the street
  A passing noble stumbles and blames it on a character
  Three scrawny children pluck at the PCs' gear and pockets
  A hooded hawk lashes out at a PC who passes too close
  An overladen dung pile collapses toward the group
  A glimpse into an alley reveals a few shadowy vendors
  The City Watch asks the PCs to "distract" a vendor's guards
  A firebreather gouts flames, 25% chance of misfire
  A woman stealthily sprinkles powder into a spice barrel
  A herd of goats clogs traffic; the goats chew on loose gear
  A red-faced fruit vendor accuses a woman of theft
  A vendor cuts open a fruit that smells like decaying flesh
  Two sorcerers having a psychic contest start to cause fires
  Smashing pottery and yells echo from a covered wagon
  A famous sword master (gladiator) drinks alone in a tent
  2d4 bored caravan guards try to provoke trouble
  A spooked horse rears up, threatening to throw its rider
  A dart with a note lands at a PC's feet: "meet at Liona's"
  Two shouting merchants brandish daggers at each other
  A tattoo artist offers a character a tattoo at half price (5 gp)
  A merchant under duress serves as bait for a cultist's trap
  A sword-swallower tries to use a PC's weapon for his show
  A visiting noble swaggers through with 6 pushy guards
  A small monkey in a vest and red cap steals people's gear
  A team of jugglers secretly picks onlookers' pockets
  A hulking berserker flips a table and starts a fist fight
  A man with a red-stained mouth offers addictive bloodroot
  A goblin runs by hauling four flapping chickens by the legs
  Four robed monks insist the PCs submit to an exorcism
  Rival crawlers toast around a still-bleeding troll head
  A chained brown bear tears loose and goes on a rampage
  A beggar offers to exchange a stolen signet ring for gold
  A crone in a smoky tent offers to curse enemies for a fee
  A street urchin steals a loaf of bread from a baker's stall
  The City Watch tries to arrest an outraged snake charmer
  A shining, red apple appears in a statue of Gede's hand
  1d6 "commoners" (guards) trail a lordling at a distance
  A hunched old woman whispers a portent while passing
  2d4 kobolds pop out of barrels and snatch at merchandise
  Religious mendicants place beads around the PCs' necks
  A burglar tries to plant a stolen ivory statuette on a PC
  A mossy centaur clops along, eliciting gasps; he seeks a PC
  Three angry camels begin spitting at anyone nearby
  An apothecary offers the PCs a sample of teas or tinctures
  An antique mirror shatters, releasing the wraith inside it
  The Wandering Merchant has a random scroll for sale
  The disguised Overlord pushes a diamond into a PC's hand

slums
  3d8 Bywater Barons (thugs) pour out of a dark tenement
  A press gang of 2d4 bandits tries to kidnap the PCs
  2d6 thugs surround two greenhorn City Watch guards
  A pox-ridden man clutches at the PCs, begging for food
  1d6 giant centipedes writhe out of a midden heap
  A pack of 2d4 rabid mastiffs begins stalking the group
  A burning shop groans and collapses into the street
  2d4 commoners clamor to get the butcher's offal scraps
  A dark shape (a hunting ghoul) slips along a rooftop
  1d4 cloaked chaos cultists slip into an abandoned temple
  1d4 giant dung beetles skitter up the side of a tavern
  2d4 thugs demand a toll; they let the PCs pass if paid
  3d6 nervous City Watch march toward the Bilge Pot tavern
  A dying man in a gutter begs to impart a dire secret
  2d4 street goons fight with bottle shards and clubs
  A dead body falls from a roof with a note: "Bywater scum"
  Residents cluster outside a tenement; screams echo inside
  A frantic, manacled man wriggles out of a cellar window
  A mob of begging children grows the more the PCs give
  Woeful Friar Hector rushes to the summons for last rites
  A towering thug bars the PCs' way: "Find another route"
  A rangy crone sells "love potions" (polymorph to newt)
  A snapped clothesline falls, entangling a character
  A body in an alley bears a note: "Pay in coin, or blood. -B.B."
  1d4 people chase a pig barreling through all obstacles
  3d4 Bywater Barons (thugs) tell the PCs to leave, "or else"
  d4 children lure a giant dung beetle into a large cage
  A dour mage and 1d4 apprentices lead a tense commoner
  A halfling at the well glances around and uncorks a vial
  Chanting emanates from an old, crumbling temple
  A young noble in spotless "lowborn rags" fails to blend in
  1d4 rabid, screeching rats spring from a midden pile
  A back-alley statue of Shune holds out stained hands
  A gaunt man sidles up and whispers, "Bloodroot, 3 silver"
  Workers lifting heavy crates slip; one gets trapped beneath
  A cheerful street peddler sells crispy rat-on-a-stick for 2 cp
  A rival crawling group warily prods at a bricked-up door
  Distant sobbing (a ghost) rises from a boarded-up building
  Crazy Davord challenges a PC to a game of "drop the boot"
  A grim team of 2d4 bounty hunters (soldiers) eye the PCs
  A goblin mage lurking on a roof offers a spell for a favor
  1d6 silent workers are actually zombies serving a sorcerer
  "Harmless" Uncle Istvold stalks the PCs while cackling
  A raging berserker stumbles out of a drug house
  A bent, old woman offers safe shelter inside from ruffians
  A loose flagstone conceals a box with 80 gp and a potion
  1d6 thugs throw bricks through a shop's windows
  The Wandering Merchant pays 5 gp per giant dung beetle
  A soiled parchment flutters to the ground; it's a spell scroll

tavern_district
  A cloaked man (vampire) at the door asks to be invited in
  2d6 Overlord's Assassins sweep in and scan the crowd
  3d6 patrons watching a tense dice game erupt in a brawl
  2d6 boorish sailors swarm in and hog the entire bar area
  A sour-faced patron buys a drink for everyone but the PCs
  A PC is mistakenly announced as the next pit fighter
  A drunk halfling swings on an ancient, creaking chandelier
  A woman stalks up and throws a drink in a PC's face
  A patron's lightly seared cobra order rears up, hissing
  A slippery puddle of foamy ale spreads over the floor
  A half-orc roars and lifts a full-sized table over his head
  A long, terrified scream comes from the kitchen
  A group of rival crawlers tell the PCs this is their tavern
  A slender man whispers, "Need poison? Best you can buy!"
  A smirking elf challenges a PC to dice; the dice are loaded
  A dour mage studies a book and glares at noisemakers
  A half-orc and halfling arm wrestle; the halfling is winning
  Two rival bards start an uproarious singing contest
  A sailor throws another onto the PCs' table, spilling drinks
  Five merry dwarves sing a shanty and headbutt each other
  1d6 patrons (chaos cultists) skulk into the back room
  An enraged, sprinting crocodile bursts out of the kitchen
  A hooded patron smashes a flask of flaming oil and runs
  A dwarf in clogs challenges a PC to a dancing contest
  Atticus Gnarl, a halfling wizard, stares unblinking at a PC
  Rival crawlers challenge the PCs to a drinking contest
  A halfling tries to stealthily tie the PCs' bootlaces together
  A man grabs a PC and shouts, "You know what you did!"
  Drunk dart throwers can hardly tell which way is up
  A woman flawlessly lifts a coin purse from a patron's belt
  Rival crawlers whisper over a book and point to passages
  2d6 City Watch guards tromp wearily through the door
  A landscape painting subtly changes when not observed
  A half-orc gulps a whole flagon and punches the server
  A woman in dark-blue leathers sips tea and observes
  A cloaked figure jumps the bar and goes for the coin box
  Rival crawlers try to pawn off a map nobody can decipher
  Everyone avoids the chained trapdoor of stone in the floor
  Four whispering commoners stop and glare at passersby
  A woman picks up a chair and smashes it on a man's head
  A sympathetic City Watch guard shares an inside rumor
  Violet Dorn, a widely renowned bard, walks into the tavern
  A weeping priest wobbles over and collapses on a PC
  At the sound of a nearby Watch whistle, 1d6 patrons bolt
  A well-heeled patron invites the PCs into a private booth
  The brass wolf's nose imparts good luck (5% for luck token)
  A patron slips a note to a PC: "You're surrounded by spies"
  The Wandering Merchant has a Van Dinkle flask (pg. 137)
  A die sits in a dusty corner; it's Brak's Cube of Perfection

temple_district
  2d6 chaos cultists begin a live sacrifice; it's a beloved NPC
  A routine exorcism expels a very non-routine erinyes
  An old man dumps a stream of gems into an alms box
  A stampede of religious pilgrims rushes down the street
  A crowd clamors to touch a holy relic carried on a platform
  A priest screams, "It's all a lie!" and turns into a bone naga
  A roof cistern collapses; water and stone crash down
  Three acolytes accuse the PCs of treading on a holy tomb
  Lashing tentacles erupt from the sleeves of a chaos cultist
  Frenzied Bloodletting celebrants crack whips at passersby
  Penitents in chains carry a litter bearing a high priest
  A cowled person leaves a basket at a chapel; it's an infant
  2d4 blindfolded pilgrims sit in a circle and block the street
  Two beggars conceal wavy daggers up their sleeves
  A man falls down in rapture and turns into a fire elemental
  Movement darts inside the boarded-up ruins of a church
  A priestess storms from a temple, flinging her holy symbol
  Whispering chaos cultists gather at a back-alley shrine
  A trapdoor in an alley falls open to the cellar of a temple
  1d6 skulking acolytes hunt for a lone beggar to kidnap
  A red-mouthed man says a new church has free bloodroot
  1d4 knights hold a public inquisition for an accused witch
  The Holy Bull Run commences with screams and gorings
  Four masked thugs disrupt an opulent funeral procession
  A man leaps up and shouts, "I object!" during a wedding
  A poxed beggar wanders around in a feverish delirium
  Mystics burn hallucinogenic incense in the street
  2d4 bandits pose as monks collecting alms for the poor
  A cultist in the shadows throws a poisoned dart at a PC
  A firebrand orator preaches to a growingly frenzied crowd
  A commoner's eyes turn white and she utters an augury
  Debauched cultists of Gede hand out endless cups of wine
  A priest with a forced smile offers 5 gp to new converts
  2d6 acolytes clash over a difference in text interpretation
  The Parade of the Nine draws onlookers and pickpockets
  A monk lights himself on fire and walks into a temple
  A rival group of crawlers exit a church, freshly baptized
  The City Watch drags flailing Baron Hallin out of a temple
  Mystics hold up cobras to be kissed; 10% of cobras lash out
  A priest flings holy water from a brush; it burns the chaotic
  A templar disguised as a commoner tends to a fallen leper
  A woman screams, "All will dissolve!" and throws acid
  1d6 City Watch try to subdue a man in a violent rapture
  A domini angel appears in a burst of light; it points to a PC
  A temple of St. Terragnis offers sanctuary to the unarmed
  The Font of Madeera has a 5% chance of ending a curse
  The Overlord enters a temple surrounded by 3d6 knights
  The Wandering Merchant sells lookalike priest's vestments
  A high priest selects a PC to receive a rare blessing

university_district
  A drunk apprentice wizard summons a furious marilith
  rabbing tentacles erupt through a sewer grate
  Two professors' long feud boils over into spell-slinging
  A woman furtively offers to pay for "recently dead bodies"
  A hit man jumps on stage where a philosopher speaks
  A teenager carrying a grimoire flees from a bookstore
  The sky rains yellow acid; a spell has gone very wrong
  An old tinker sells one-use confetti bombs and sparklers
  A cloud of 2d4 purple stingbats gout from a chimney
  City guards frantically cordon off a wide circle of blue fire
  A shifty man sells "cheap potions" (all are 2 mixed potions)
  A nearsighted professor insists a PC has an overdue paper
  Four bratty students flick copper pieces at people's heads
  Tavern-goers flee from a red light inside the Flying Snail
  Inhuman howling rises from one of the nearby apartments
  The school's wyvern statue, Old Rolf, animates in a frenzy
  A red-faced young noble tells a PC to "show proper regard"
  The school's Wizards & Thieves champion challenges a PC
  Burning ash rains down from a blown-out tower window
  A spectacled mage begins measuring and prodding a PC
  A magic cauldron appears, disgorging 1d6 giant rats
  A pale man locks eyes with a PC and mouths: "Help me!"
  A PC steps on a prank rune that glues their shoes down
  Two animated armor suits duel destructively in the street
  A meek student being grilled by a guard points to the PCs
  2d6 kobolds swarm from the sewers to steal bags
  A practicing wizard targets a PC with a charm person spell
  1d4 gargoyles swoop down from a facade to grab a PC
  Four thugs stalk the alleys, looking for an easy mark to rob
  A witch is telling fortunes from a makeshift stall for 1 gp
  A student asks to apprentice with one of the PCs
  A sorcerer (oni in disguise) drinks and watches the group
  An animated owl statue surreptitiously follows the PCs
  A mage tries to pull a PC into an alley to siphon off blood
  Crashing and bellowing erupts inside a library
  A spellbook flaps out of a window and tries to escape
  A professor summons a vrock but loses control of it
  Three loan collectors (thugs) surround a hapless student
  A wizard's pet cockatrice gets free inside a packed tavern
  Three overconfident apprentices pick a fight with the PCs
  An artist stops a PC and pleads to draw a charcoal portrait
  A nervous librarian hands a PC a strange book and flees
  Professor Krall snaps, leading 2d6 zombies into the streets
  Students from a rival university vandalize a revered statue
  A scholar offers a ruby as a prize for answering a riddle
  A clumsy wizard breaks a glass bottle housing a naga
  The PCs stumble into an occult ritual with 5 apprentices
  The Wandering Merchant sells caustic alchemical reagents
  An archmage entrusts a random magic item to the PCs
`;

// Function to add common data to existing dataText
function addCommonDataTo(existingDataText) {
    return existingDataText + '\n\n' + homebrewshadowdarkGeneratorDataText;
}

// Make functions available globally for generators
window.addCommonDataTo = addCommonDataTo;
window.homebrewshadowdarkGeneratorDataText = homebrewshadowdarkGeneratorDataText;
