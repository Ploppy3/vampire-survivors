import {
  Passive, PASSIVES,
} from "./passives";

export type Weapon = {
  name: string,
  src: string,
  evolvedFrom: Passive[],
  unionFrom: Weapon[],
}

const _WEAPONS: { [key:string]: Weapon} = {
  "Whip": {
    name: "Whip",
    src: "/weapons/whip.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Magic Wand": {
    name: "Magic Wand",
    src: "/weapons/magic-wand.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Knife": {
    name: "Knife",
    src: "/weapons/knife.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Axe": {
    name: "Axe",
    src: "/weapons/axe.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Cross": {
    name: "Cross",
    src: "/weapons/cross.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "King Bible": {
    name: "King Bible",
    src: "/weapons/king-bible.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Fire Wand": {
    name: "Fire Wand",
    src: "/weapons/fire-wand.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Garlic": {
    name: "Garlic",
    src: "/weapons/garlic.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Santa Water": {
    name: "Santa Water",
    src: "/weapons/santa-water.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Runetracer": {
    name: "Runetracer",
    src: "/weapons/runetracer.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Lightning Ring": {
    name: "Lightning Ring",
    src: "/weapons/lightning-ring.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Pentagram": {
    name: "Pentagram",
    src: "/weapons/pentagram.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Peachone": {
    name: "Peachone",
    src: "/weapons/peachone.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Ebony Wings": {
    name: "Ebony Wings",
    src: "/weapons/ebony-wings.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Phiera Der Tuphello": {
    name: "Phiera Der Tuphello",
    src: "/weapons/phiera-der-tuphello.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Eight The Sparrow": {
    name: "Eight The Sparrow",
    src: "/weapons/eight-the-sparrow.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Gatti Amari": {
    name: "Gatti Amari",
    src: "/weapons/gatti-amari.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Song of Mana": {
    name: "Song of Mana",
    src: "/weapons/song-of-mana.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Shadow Pinion": {
    name: "Shadow Pinion",
    src: "/weapons/shadow-pinion.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Clock Lancet": {
    name: "Clock Lancet",
    src: "/weapons/clock-lancet.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Laurel": {
    name: "Laurel",
    src: "/weapons/laurel.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Vento Sacro": {
    name: "Vento Sacro",
    src: "/weapons/vento-sacro.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Bone": {
    name: "Bone",
    src: "/weapons/bone.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Cherry Bomb": {
    name: "Cherry Bomb",
    src: "/weapons/cherry-bomb.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Carréllo": {
    name: "Carréllo",
    src: "/weapons/carrello.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Celestial Dusting": {
    name: "Celestial Dusting",
    src: "/weapons/celestial-dusting.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "La Robba": {
    name: "La Robba",
    src: "/weapons/la-robba.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Candybox": {
    name: "Candybox",
    src: "/weapons/candybox.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Bracelet": {
    name: "Bracelet",
    src: "/weapons/bracelet.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Victory Sword": {
    name: "Victory Sword",
    src: "/weapons/victory-sword.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  // Evolutions
  "Bloody Tear": {
    name: "Bloody Tear",
    src: "/weapons/bloody-tear.webp",
    evolvedFrom: [PASSIVES["Hollow Heart"]],
    unionFrom: [],
  },
  "Holy Wand": {
    name: "Holy Wand",
    src: "/weapons/holy-wand.webp",
    evolvedFrom: [PASSIVES["Empty Tome"]],
    unionFrom: [],
  },
  "Thousand Edge": {
    name: "Thousand Edge",
    src: "/weapons/thousand-edge.webp",
    evolvedFrom: [PASSIVES["Bracer"]],
    unionFrom: [],
  },
  "Death Spiral": {
    name: "Death Spiral",
    src: "/weapons/death-spiral.webp",
    evolvedFrom: [PASSIVES["Candelabrador"]],
    unionFrom: [],
  },
  "Heaven Sword": {
    name: "Heaven Sword",
    src: "/weapons/heaven-sword.webp",
    evolvedFrom: [PASSIVES["Clover"]],
    unionFrom: [],
  },
  "Unholy Vespers": {
    name: "Unholy Vespers",
    src: "/weapons/unholy-vespers.webp",
    evolvedFrom: [PASSIVES["Spellbinder"]],
    unionFrom: [],
  },
  "Hellfire": {
    name: "Hellfire",
    src: "/weapons/hellfire.webp",
    evolvedFrom: [PASSIVES["Spinach"]],
    unionFrom: [],
  },
  "Soul Eater": {
    name: "Soul Eater",
    src: "/weapons/soul-eater.webp",
    evolvedFrom: [PASSIVES["Pummarola"]],
    unionFrom: [],
  },
  "La Borra": {
    name: "La Borra",
    src: "/weapons/la-borra.webp",
    evolvedFrom: [PASSIVES["Attractorb"]],
    unionFrom: [],
  },
  "NO FUTURE": {
    name: "NO FUTURE",
    src: "/weapons/no-future.webp",
    evolvedFrom: [PASSIVES["Armor"]],
    unionFrom: [],
  },
  "Thunder Loop": {
    name: "Thunder Loop",
    src: "/weapons/thunder-loop.webp",
    evolvedFrom: [PASSIVES["Duplicator"]],
    unionFrom: [],
  },
  "Gorgeous Moon": {
    name: "Gorgeous Moon",
    src: "/weapons/gorgeous-moon.webp",
    evolvedFrom: [PASSIVES["Crown"]],
    unionFrom: [],
  },
  "Vicious Hunger": {
    name: "Vicious Hunger",
    src: "/weapons/vicious-hunger.webp",
    evolvedFrom: [PASSIVES["Stone Mask"]],
    unionFrom: [],
  },
  "Mannajja": {
    name: "Mannajja",
    src: "/weapons/mannajja.webp",
    evolvedFrom: [PASSIVES["Skull O'Maniac"]],
    unionFrom: [],
  },
  "Valkyrie Turner": {
    name: "Valkyrie Turner",
    src: "/weapons/valkyrie-turner.webp",
    evolvedFrom: [PASSIVES["Wings"]],
    unionFrom: [],
  },
  "Infinite Corridor": {
    name: "Infinite Corridor",
    src: "/weapons/infinite-corridor.webp",
    evolvedFrom: [PASSIVES["Silver Ring"], PASSIVES["Gold Ring"]],
    unionFrom: [],
  },
  "Crimson Shroud": {
    name: "Crimson Shroud",
    src: "/weapons/crimson-shroud.webp",
    evolvedFrom: [PASSIVES["Metaglio Left"], PASSIVES["Metaglio Right"]],
    unionFrom: [],
  },
  "Bi-Bracelet": {
    name: "Bi-Bracelet",
    src: "/weapons/bi-bracelet.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
  "Tri-Bracelet": {
    name: "Tri-Bracelet",
    src: "/weapons/tri-bracelet.webp",
    evolvedFrom: [],
    unionFrom: [],
  },
};
// Unions
_WEAPONS["Vandalier"] = {
  name: "Vandalier",
  src: "/weapons/vandalier.webp",
  evolvedFrom: [],
  unionFrom: [_WEAPONS["Peachone"], _WEAPONS["Ebony Wings"]],
};
_WEAPONS["Phieraggi"] = {
  name: "Phieraggi",
  src: "/weapons/phieraggi.webp",
  evolvedFrom: [],
  unionFrom: [_WEAPONS["Tiragisú"], _WEAPONS["Phiera Der Tuphello"], _WEAPONS["Eight The Sparrow"]],
};
_WEAPONS["Fuwalafuwaloo"] = {
  name: "Fuwalafuwaloo",
  src: "/weapons/fuwalafuwaloo.webp",
  evolvedFrom: [],
  unionFrom: [_WEAPONS["Vento Sacro"], _WEAPONS["Bloody Tear"]],
};
_WEAPONS["Sole Solution"] = {
  name: "Sole Solution",
  src: "/weapons/sole-solution.webp",
  evolvedFrom: [PASSIVES["Torrona's Box"]],
  unionFrom: [_WEAPONS["Victory Sword"]],
};

export const WEAPONS = _WEAPONS;
export const WEAPONS_LIST = Object.values(_WEAPONS);
export const WEAPONS_LIST_NORMAL = WEAPONS_LIST.filter(weapon => weapon.evolvedFrom.length === 0 && weapon.unionFrom.length === 0);
export const WEAPONS_LIST_EVOLUTION = WEAPONS_LIST.filter(weapon => weapon.evolvedFrom.length > 0);
export const WEAPONS_LIST_UNIONS = WEAPONS_LIST.filter(weapon => weapon.unionFrom.length > 0);