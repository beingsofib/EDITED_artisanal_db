window.monsterMarkdown = `
# Monster Name
<!-- Required. The creature's name. -->

Size Type (Subtype), Alignment
<!-- Required. e.g. "Medium Humanoid (Cleric), Neutral Evil"  -->
<!-- Size: Tiny / Small / Medium / Large / Huge / Gargantuan -->
<!-- Type: Aberration / Beast / Celestial / Construct / Dragon / Elemental / Fey / Fiend / Giant / Humanoid / Monstrosity / Ooze / Plant / Undead -->
<!-- Subtype (optional): e.g. (Demon), (Cleric), (Shapechanger) -->
<!-- Alignment: Lawful/Neutral/Chaotic + Good/Neutral/Evil, or Unaligned -->

- **Armor Class** 13 (leather armor)
<!-- Required. Add armor source in parentheses: natural armor, chain mail, bracers of defense, etc. -->
- **Hit Points** 45 (7d8 + 14)
<!-- Required. Format: average (hit dice + con modifier total) -->
- **Speed** 30 ft.
<!-- Required. Add extra movement types as needed: fly 60 ft., swim 30 ft., burrow 20 ft., climb 30 ft., fly 30 ft. (hover) -->
- **Source** Source Book Name
<!-- Optional. Include if from a published source (e.g. "Forge of Foes", "City of Arches") -->

| STR     | DEX     | CON     | INT     | WIS     | CHA     |
| ------- | ------- | ------- | ------- | ------- | ------- |
| 10 (+0) | 10 (+0) | 10 (+0) | 10 (+0) | 10 (+0) | 10 (+0) |
<!-- Required. Format: score (modifier). Modifier = floor((score - 10) / 2) -->

- **Saving Throws** Str +X, Dex +X, Con +X, Int +X, Wis +X, Cha +X
<!-- Optional. Only list saves the creature is proficient in. Remove line if none. -->
- **Skills** Perception +X, Stealth +X, Arcana +X
<!-- Optional. Only list proficient skills. Remove line if none. -->
- **Damage Vulnerabilities** fire, radiant
<!-- Optional. Remove line if none. -->
- **Damage Resistances** cold, lightning; bludgeoning, piercing, and slashing from nonmagical attacks
<!-- Optional. Remove line if none. -->
- **Damage Immunities** poison, necrotic
<!-- Optional. Remove line if none. -->
- **Condition Immunities** charmed, frightened, paralyzed, poisoned
<!-- Optional. Remove line if none. -->
- **Senses** darkvision 60 ft., truesight 30 ft., passive Perception 12
<!-- Required. Always include passive Perception. Add special senses as needed. -->
- **Languages** Common, plus any others
<!-- Optional. Remove line if none (use "—" if creature has no languages). -->
- **Challenge** 1 (200 XP) **Proficiency Bonus** +2
<!-- Required. CR → XP reference: 0=10, 1/8=25, 1/4=50, 1/2=100, 1=200, 2=450, 3=700, 4=1100, 5=1800, 6=2300, 7=2900, 8=3900, 9=5000, 10=5900 -->
<!-- Proficiency Bonus: CR 0-4 = +2, CR 5-8 = +3, CR 9-12 = +4, CR 13-16 = +5, CR 17-20 = +6, CR 21-24 = +7, CR 25-28 = +8, CR 29-30 = +9 -->

---
<!-- TRAITS (passive abilities, always active) -->
<!-- Delete this section if the creature has no traits. -->

***Trait Name.*** Description of the passive ability. Keep it concise.

***Legendary Resistance (X/Day).*** If [Name] fails a saving throw, it can choose to succeed instead.
<!-- Include only for legendary creatures. Typical values: 3/Day for CR 15–20, more for higher CR. -->

***Spellcasting.*** [Name] casts one of the following spells, using [Ability] as the spellcasting ability (spell save DC X, +X to hit with spell attacks):

At will: *cantrip, cantrip*
X/day each: *spell, spell, spell*
<!-- Alternatively use the full prepared-caster block if needed. -->

## Actions

***Multiattack.*** [Name] makes X attacks.
<!-- Include if the creature attacks more than once per action. -->

***Attack Name.*** *Melee Weapon Attack:* +X to hit, reach 5 ft., one target. *Hit:* X (XdY + Z) damage type damage.
<!-- Template options: -->
<!-- Melee Weapon Attack / Ranged Weapon Attack / Melee or Ranged Weapon Attack -->
<!-- Melee Spell Attack / Ranged Spell Attack -->
<!-- Common reach: 5 ft. (normal), 10 ft. (polearm/large), 15 ft. (very large), 60 ft. (huge) -->
<!-- Common range: range 30/120 ft. (thrown), range 80/320 ft. (longbow) -->

***Area Effect Name (Recharge X–6).*** Each creature in a X-foot-[radius/cone/line] [centered on/originating from] [Name] must make a DC X [Ability] saving throw, taking X (XdY) damage type damage on a failed save, or half as much on a successful one.
<!-- Recharge: "Recharge 5–6" means it recharges on a 5 or 6 on a d6 at the start of turn. -->

## Bonus Actions
<!-- Optional section. Delete entirely if not needed. -->

***Bonus Action Name.*** Description.

## Reactions
<!-- Optional section. Delete entirely if not needed. -->

***Reaction Name.*** *Trigger:* Description of trigger. *Response:* Description of response.

## Legendary Actions
<!-- Optional section. Only for legendary creatures. Delete entirely if not needed. -->

[Name] can take X legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. [Name] regains spent legendary actions at the start of its turn.

**Action Name.** Description. (1 action cost is implied if not stated)

**Action Name (Costs 2 Actions).** Description.

**Action Name (Costs 3 Actions).** Description.

## Lair Actions
<!-- Optional section. For legendary creatures with a lair. Delete entirely if not needed. -->

On initiative count 20 (losing initiative ties), [Name] takes a lair action to cause one of the following effects:

- Lair action description.
- Lair action description.
- Lair action description.

---
<!-- FLAVOR / DESCRIPTION (optional) -->
<!-- Short paragraph describing the creature's role, behavior, or origin. -->
<!-- See brute.js, soldier.js, etc. for examples. -->

---
<!-- LICENSING (optional) -->
<!-- Include if the stat block is from a licensed third-party source. -->

#### Licensing

This stat block comes from the *[Source Title](URL)* copyright YEAR by Author Name. This stat block is released under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.
`;
