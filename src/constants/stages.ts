import {
  Passive, PASSIVES,
} from "./passives";
import {
  Weapon,
} from "./weapons";

export interface Stage {
  name: string;
  passives: Passive[];
  weapons: Weapon[];
}

const COMMON_PASSIVES = [
  PASSIVES["Silver Ring"], PASSIVES["Gold Ring"], PASSIVES["Metaglio Left"], PASSIVES["Metaglio Right"],
];

export const STAGES: {[key:string]: Stage} = {
  "Stage 1": {
    name: "Stage 1",
    passives: [PASSIVES["Spinach"], PASSIVES["Clover"], PASSIVES["Hollow Heart"], PASSIVES["Pummarola"], PASSIVES["Skull O'Maniac"], ...COMMON_PASSIVES],
    weapons: [],
  },
  "Stage 2": {
    name: "Stage 2",
    passives: [PASSIVES["Stone Mask"], PASSIVES["Empty Tome"], ...COMMON_PASSIVES],
    weapons: [],
  },
  "Stage 3": {
    name: "Stage 3",
    passives: [PASSIVES["Attractorb"], PASSIVES["Candelabrador"], PASSIVES["Wings"], PASSIVES["Armor"], ...COMMON_PASSIVES],
    weapons: [
      // WEAPONS["Dairy Cart"],
    ],
  },
  "Stage 4": {
    name: "Stage 4",
    passives: [PASSIVES["Bracer"], PASSIVES["Spellbinder"], ...COMMON_PASSIVES],
    weapons: [],
  },
  "Stage 5": {
    name: "Stage 5",
    passives: [PASSIVES["Crown"], PASSIVES["Tiragisú"], PASSIVES["Duplicator"], ...COMMON_PASSIVES],
    weapons: [
      // WEAPONS["Stained Glass"],
    ],
  },
  "Bonus - Il Molise": {
    name: "Bonus - Il Molise",
    passives: [...COMMON_PASSIVES],
    weapons: [],
  },
  "Bonus - Moongolow": {
    name: "Bonus - Moongolow",
    passives: [...COMMON_PASSIVES],
    weapons: [],
  },
  "Challenge - Green Acres": {
    name: "Challenge - Green Acres",
    passives: [...COMMON_PASSIVES],
    weapons: [],
  },
  "Challenge - The Bone Zone": {
    name: "Challenge - The Bone Zone",
    passives: [...COMMON_PASSIVES],
    weapons: [],
  },
  "Challenge - Boss Rash": {
    name: "Challenge - Boss Rash",
    passives: [...COMMON_PASSIVES],
    weapons: [],
  },
};