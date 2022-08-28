// export const PASSIVE_NAMES = [
//   "Spinach", "Armor", "Hollow Heart", "Pummarola", "Empty Tome", "Candelabrador", "Bracer", "Spellbinder", "Duplicator", "Wings", "Attractorb", "Clover", "Crown", "Stone Mask", "Tiragisú", "Skull O'Maniac", "Silver Ring", "Gold Ring", "Metaglio Left", "Metaglio Right", "Torrona's Box",
// ];

export type Passive = {
  name: string;
  src: string;
}

export const PASSIVES: {[key:string]: Passive} = {
  "Spinach": {
    name: "Spinach",
    src: "/passives/spinach.webp",
  },
  "Armor": {
    name: "Armor",
    src: "/passives/armor.webp",
  },
  "Hollow Heart": {
    name: "Hollow Heart",
    src: "/passives/hollow-heart.webp",
  },
  "Pummarola": {
    name: "Pummarola",
    src: "/passives/pummarola.webp",
  },
  "Empty Tome": {
    name: "Empty Tome",
    src: "/passives/empty-tome.webp",
  },
  "Candelabrador": {
    name: "Candelabrador",
    src: "/passives/candelabrador.webp",
  },
  "Bracer": {
    name: "Bracer",
    src: "/passives/bracer.webp",
  },
  "Spellbinder": {
    name: "Spellbinder",
    src: "/passives/spellbinder.webp",
  },
  "Duplicator": {
    name: "Duplicator",
    src: "/passives/duplicator.webp",
  },
  "Wings": {
    name: "Wings",
    src: "/passives/wings.webp",
  },
  "Attractorb": {
    name: "Attractorb",
    src: "/passives/attractorb.webp",
  },
  "Clover": {
    name: "Clover",
    src: "/passives/clover.webp",
  },
  "Crown": {
    name: "Crown",
    src: "/passives/crown.webp",
  },
  "Stone Mask": {
    name: "Stone Mask",
    src: "/passives/stone-mask.webp",
  },
  "Tiragisú": {
    name: "Tiragisú",
    src: "/passives/tiragisu.webp",
  },
  "Skull O'Maniac": {
    name: "Skull O'Maniac",
    src: "/passives/skull-o-maniac.webp",
  },
  "Silver Ring": {
    name: "Silver Ring",
    src: "/passives/silver-ring.webp",
  },
  "Gold Ring": {
    name: "Gold Ring",
    src: "/passives/gold-ring.webp",
  },
  "Metaglio Left": {
    name: "Metaglio Left",
    src: "/passives/metaglio-left.webp",
  },
  "Metaglio Right": {
    name: "Metaglio Right",
    src: "/passives/metaglio-right.webp",
  },
  "Torrona's Box": {
    name: "Torrona's Box",
    src: "/passives/torrona-s-box.webp",
  },
};

export const PASSIVES_LIST = Object.values(PASSIVES);