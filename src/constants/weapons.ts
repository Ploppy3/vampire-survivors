import {
  Passive, PASSIVES,
} from "./passives";

export type Weapon = {
  name: string,
  evolvedFrom: Passive | null,
  src: string,
}

// const WEAPON_NAMES = ["WHIP, Bloody Tear", "Magic Wand", "Holy Wand", "Knife", "Thousand Edge", "Axe", "Death Spiral", "Cross", "Heaven Sword", "King Bible", "Unholy Vespers", "Fire Wand", "Hellfire", "Garlic", "Soul Eater", "Peachone", "Ebony Wings", "Vandalier", "Santa Water", "La Borra", "Lightning Ring", "Thunder Loop", "Runetracer", "Pentagram", "Clock Lancet", "Laurel", "Bone"];

export const WEAPONS: { [key:string]: Weapon} = {
  "Whip": {
    name: "Whip",
    evolvedFrom: null,
    src: "/weapons/whip.png",
  },
  "Bloody Tear": {
    name: "Bloody Tear",
    evolvedFrom: PASSIVES["Hollow Heart"],
    src: "/weapons/bloody-tear.png",
  },
  "Magic Wand": {
    name: "Magic Wand",
    evolvedFrom: null,
    src: "/weapons/magic-wand.png",
  },
  "Holy Wand": {
    name: "Holy Wand",
    evolvedFrom: PASSIVES["Empty Tome"],
    src: "/weapons/holy-wand.png",
  },
  "Knife": {
    name: "Knife",
    evolvedFrom: null,
    src: "/weapons/knife.png",
  },
  "Thousand Edge": {
    name: "Thousand Edge",
    evolvedFrom: PASSIVES["Bracer"],
    src: "/weapons/thousand-edge.png",
  },
  "Axe": {
    name: "Axe",
    evolvedFrom: null,
    src: "/weapons/axe.png",
  },
  "Death Spiral": {
    name: "Death Spiral",
    evolvedFrom: PASSIVES["Candelabrador"],
    src: "/weapons/death-spiral.png",
  },
  "Cross": {
    name: "Cross",
    evolvedFrom: null,
    src: "/weapons/cross.png",
  },
  "Heaven Sword": {
    name: "Heaven Sword",
    evolvedFrom: PASSIVES["Clover"],
    src: "/weapons/heaven-sword.png",
  },
  "King Bible": {
    name: "King Bible",
    evolvedFrom: null,
    src: "/weapons/king-bible.png",
  },
  "Unholy Vespers": {
    name: "Unholy Vespers",
    evolvedFrom: PASSIVES["SpellBinder"],
    src: "/weapons/unholy-vespers.png",
  },
  "Fire Wand": {
    name: "Fire Wand",
    evolvedFrom: null,
    src: "/weapons/fire-wand.png",
  },
  "Hellfire": {
    name: "Hellfire",
    evolvedFrom: PASSIVES["Spinach"],
    src: "/weapons/hellfire.png",
  },
  "Garlic": {
    name: "Garlic",
    evolvedFrom: null,
    src: "/weapons/garlic.png",
  },
  "Soul Eater": {
    name: "Soul Eater",
    evolvedFrom: PASSIVES["Pummarola"],
    src: "/weapons/soul-eater.png",
  },
  "Peachone": {
    name: "Peachone",
    evolvedFrom: null,
    src: "/weapons/peachone.png",
  },
  "Ebony Wings": {
    name: "Ebony Wings",
    evolvedFrom: null,
    src: "/weapons/ebony-wings.png",
  },
  "Vandalier": {
    name: "Vandalier",
    evolvedFrom: null,
    src: "/weapons/vandalier.png",
  },
  "Santa Water": {
    name: "Santa Water",
    evolvedFrom: null,
    src: "/weapons/santa-water.png",
  },
  "La Borra": {
    name: "La Borra",
    evolvedFrom: PASSIVES["Attractorb"],
    src: "/weapons/la-borra.png",
  },
  "Lightning Ring": {
    name: "Lightning Ring",
    evolvedFrom: null,
    src: "/weapons/lightning-ring.png",
  },
  "Thunder Loop": {
    name: "Thunder Loop",
    evolvedFrom: PASSIVES["Duplicator"],
    src: "/weapons/thunder-loop.png",
  },
  "Runetracer": {
    name: "Runetracer",
    evolvedFrom: null,
    src: "/weapons/runetracer.png",
  },
  "Pentagram": {
    name: "Pentagram",
    evolvedFrom: null,
    src: "/weapons/pentagram.png",
  },
  "Clock Lancet": {
    name: "Clock Lancet",
    evolvedFrom: null,
    src: "/weapons/clock-lancet.png",
  },
  "Laurel": {
    name: "Laurel",
    evolvedFrom: null,
    src: "/weapons/laurel.png",
  },
  "Bone": {
    name: "Bone",
    evolvedFrom: null,
    src: "/weapons/bone.png",
  },
};

export const WEAPONS_LIST = Object.values(WEAPONS);
export const WEAPONS_LIST_NORMAL = WEAPONS_LIST.filter(weapon => weapon.evolvedFrom === null);
export const WEAPONS_LIST_EVOLUTION = WEAPONS_LIST.filter(weapon => weapon.evolvedFrom !== null);