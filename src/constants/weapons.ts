export type Weapon = {
  name: string,
  isEvolution: boolean,
  src: string,
}

// const WEAPON_NAMES = ["WHIP, Bloody Tear", "Magic Wand", "Holy Wand", "Knife", "Thousand Edge", "Axe", "Death Spiral", "Cross", "Heaven Sword", "King Bible", "Unholy Vespers", "Fire Wand", "Hellfire", "Garlic", "Soul Eater", "Peachone", "Ebony Wings", "Vandalier", "Santa Water", "La Borra", "Lightning Ring", "Thunder Loop", "Runetracer", "Pentagram", "Clock Lancet", "Laurel", "Bone"];

export const WEAPONS: { [key:string]: Weapon} = {
  "Whip": {
    name: "Whip",
    isEvolution: false,
    src: "/weapons/whip.png",
  },
  "Bloody Tear": {
    name: "Bloody Tear",
    isEvolution: true,
    src: "/weapons/bloody-tear.png",
  },
  "Magic Wand": {
    name: "Magic Wand",
    isEvolution: false,
    src: "/weapons/magic-wand.png",
  },
  "Holy Wand": {
    name: "Holy Wand",
    isEvolution: true,
    src: "/weapons/holy-wand.png",
  },
  "Knife": {
    name: "Knife",
    isEvolution: false,
    src: "/weapons/knife.png",
  },
  "Thousand Edge": {
    name: "Thousand Edge",
    isEvolution: true,
    src: "/weapons/thousand-edge.png",
  },
  "Axe": {
    name: "Axe",
    isEvolution: false,
    src: "/weapons/axe.png",
  },
  "Death Spiral": {
    name: "Death Spiral",
    isEvolution: true,
    src: "/weapons/death-spiral.png",
  },
  "Cross": {
    name: "Cross",
    isEvolution: false,
    src: "/weapons/cross.png",
  },
  "Heaven Sword": {
    name: "Heaven Sword",
    isEvolution: true,
    src: "/weapons/heaven-sword.png",
  },
  "King Bible": {
    name: "King Bible",
    isEvolution: false,
    src: "/weapons/king-bible.png",
  },
  "Unholy Vespers": {
    name: "Unholy Vespers",
    isEvolution: true,
    src: "/weapons/unholy-vespers.png",
  },
  "Fire Wand": {
    name: "Fire Wand",
    isEvolution: false,
    src: "/weapons/fire-wand.png",
  },
  "Hellfire": {
    name: "Hellfire",
    isEvolution: true,
    src: "/weapons/hellfire.png",
  },
  "Garlic": {
    name: "Garlic",
    isEvolution: false,
    src: "/weapons/garlic.png",
  },
  "Soul Eater": {
    name: "Soul Eater",
    isEvolution: true,
    src: "/weapons/soul-eater.png",
  },
  "Peachone": {
    name: "Peachone",
    isEvolution: false,
    src: "/weapons/peachone.png",
  },
  "Ebony Wings": {
    name: "Ebony Wings",
    isEvolution: false,
    src: "/weapons/ebony-wings.png",
  },
  "Vandalier": {
    name: "Vandalier",
    isEvolution: true,
    src: "/weapons/vandalier.png",
  },
  "Santa Water": {
    name: "Santa Water",
    isEvolution: false,
    src: "/weapons/santa-water.png",
  },
  "La Borra": {
    name: "La Borra",
    isEvolution: true,
    src: "/weapons/la-borra.png",
  },
  "Lightning Ring": {
    name: "Lightning Ring",
    isEvolution: false,
    src: "/weapons/lightning-ring.png",
  },
  "Thunder Loop": {
    name: "Thunder Loop",
    isEvolution: true,
    src: "/weapons/thunder-loop.png",
  },
  "Runetracer": {
    name: "Runetracer",
    isEvolution: false,
    src: "/weapons/runetracer.png",
  },
  "Pentagram": {
    name: "Pentagram",
    isEvolution: false,
    src: "/weapons/pentagram.png",
  },
  "Clock Lancet": {
    name: "Clock Lancet",
    isEvolution: false,
    src: "/weapons/clock-lancet.png",
  },
  "Laurel": {
    name: "Laurel",
    isEvolution: false,
    src: "/weapons/laurel.png",
  },
  "Bone": {
    name: "Bone",
    isEvolution: false,
    src: "/weapons/bone.png",
  },
};

export const WEAPONS_LIST = Object.values(WEAPONS);
export const WEAPONS_LIST_NORMAL = WEAPONS_LIST.filter(weapon => !weapon.isEvolution);
export const WEAPONS_LIST_EVOLUTION = WEAPONS_LIST.filter(weapon => weapon.isEvolution);