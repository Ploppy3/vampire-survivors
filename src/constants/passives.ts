export const PASSIVE_NAMES = [
  "Armor", "Attractorb", "Bracer", "Candelabrador", "Clover", "Crown", "Duplicator", "Empty Tome", "Hollow Heart", "Pummarola", "SpellBinder", "Spinach", "Stone Mask", "Tiragisú", "Wings",
];

export type Passive = {
  name: string;
  src: string;
}

export const PASSIVES: {[key:string]: Passive} = {
  Armor: {
    name: "Armor",
    src: "passives/armor.png",
  },
  Attractorb: {
    name: "Attractorb",
    src: "passives/attractorb.png",
  },
  Bracer: {
    name: "Bracer",
    src: "passives/bracer.png",
  },
  Candelabrador: {
    name: "Candelabrador",
    src: "passives/candelabrador.png",
  },
  Clover: {
    name: "Clover",
    src: "passives/clover.png",
  },
  Crown: {
    name: "Crown",
    src: "passives/crown.png",
  },
  Duplicator: {
    name: "Duplicator",
    src: "passives/duplicator.png",
  },
  EmptyTome: {
    name: "Empty Tome",
    src: "passives/empty-tome.png",
  },
  HollowHeart: {
    name: "Hollow Heart",
    src: "passives/hollow-heart.png",
  },
  Pummarola: {
    name: "Pummarola",
    src: "passives/pummarola.png",
  },
  SpellBinder: {
    name: "SpellBinder",
    src: "passives/spellbinder.png",
  },
  Spinach: {
    name: "Spinach",
    src: "passives/spinach.png",
  },
  StoneMask: {
    name: "Stone Mask",
    src: "passives/stone-mask.png",
  },
  Tiragisú: {
    name: "Tiragisú",
    src: "passives/tiragisu.png",
  },
  Wings: {
    name: "Wings",
    src: "passives/wings.png",
  },
};

export const PASSIVES_LIST = Object.values(PASSIVES);