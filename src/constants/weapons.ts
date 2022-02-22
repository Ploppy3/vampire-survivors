export type Weapon = {
  name: string,
  src: string,
}

// const WEAPON_NAMES = ["WHIP, Bloody Tear", "Magic Wand", "Holy Wand", "Knife", "Thousand Edge", "Axe", "Death Spiral", "Cross", "Heaven Sword", "King Bible", "Unholy Vespers", "Fire Wand", "Hellfire", "Garlic", "Soul Eater", "Peachone", "Ebony Wings", "Vandalier", "Santa Water", "La Borra", "Lightning Ring", "Thunder Loop", "Runetracer", "Pentagram", "Clock Lancet", "Laurel", "Bone"];

export const WEAPONS: { [key:string]: Weapon} = {
  "Whip": {
    name: "Whip",
    src: "/weapons/whip.png",
  },
  "Bloody Tear": {
    name: "Bloody Tear",
    src: "/weapons/bloody-tear.png",
  },
  "Magic Wand": {
    name: "Magic Wand",
    src: "/weapons/magic-wand.png",
  },
  "Holy Wand": {
    name: "Holy Wand",
    src: "/weapons/holy-wand.png",
  },
  "Knife": {
    name: "Knife",
    src: "/weapons/knife.png",
  },
  "Thousand Edge": {
    name: "Thousand Edge",
    src: "/weapons/thousand-edge.png",
  },
  "Axe": {
    name: "Axe",
    src: "/weapons/axe.png",
  },
  "Death Spiral": {
    name: "Death Spiral",
    src: "/weapons/death-spiral.png",
  },
  "Cross": {
    name: "Cross",
    src: "/weapons/cross.png",
  },
  "Heaven Sword": {
    name: "Heaven Sword",
    src: "/weapons/heaven-sword.png",
  },
  "King Bible": {
    name: "King Bible",
    src: "/weapons/king-bible.png",
  },
  "Unholy Vespers": {
    name: "Unholy Vespers",
    src: "/weapons/unholy-vespers.png",
  },
  "Fire Wand": {
    name: "Fire Wand",
    src: "/weapons/fire-wand.png",
  },
  "Hellfire": {
    name: "Hellfire",
    src: "/weapons/hellfire.png",
  },
  "Garlic": {
    name: "Garlic",
    src: "/weapons/garlic.png",
  },
  "Soul Eater": {
    name: "Soul Eater",
    src: "/weapons/soul-eater.png",
  },
  "Peachone": {
    name: "Peachone",
    src: "/weapons/peachone.png",
  },
  "Ebony Wings": {
    name: "Ebony Wings",
    src: "/weapons/ebony-wings.png",
  },
  "Vandalier": {
    name: "Vandalier",
    src: "/weapons/vandalier.png",
  },
  "Santa Water": {
    name: "Santa Water",
    src: "/weapons/santa-water.png",
  },
  "La Borra": {
    name: "La Borra",
    src: "/weapons/la-borra.png",
  },
  "Lightning Ring": {
    name: "Lightning Ring",
    src: "/weapons/lightning-ring.png",
  },
  "Thunder Loop": {
    name: "Thunder Loop",
    src: "/weapons/thunder-loop.png",
  },
  "Runetracer": {
    name: "Runetracer",
    src: "/weapons/runetracer.png",
  },
  "Pentagram": {
    name: "Pentagram",
    src: "/weapons/pentagram.png",
  },
  "Clock Lancet": {
    name: "Clock Lancet",
    src: "/weapons/clock-lancet.png",
  },
  "Laurel": {
    name: "Laurel",
    src: "/weapons/laurel.png",
  },
  "Bone": {
    name: "Bone",
    src: "/weapons/bone.png",
  },
};

export const WEAPONS_LIST = Object.values(WEAPONS);