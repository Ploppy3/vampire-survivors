import {
  createContext, useState,
} from "react";
import {
  Passive,
} from "../constants/passives";
import {
  Stage,
} from "../constants/stages";
import {
  Weapon, WEAPONS,
} from "../constants/weapons";

type WeaponsContextProps = {
  stage: Stage | null,
  weapons: (Weapon | null)[],
  passives: (Passive | null)[],
  missingPassives: Passive[],
  requiredWeapons: Weapon[],
  passivesInStage: Passive[],
  recommendedWeapons: Weapon[],
  reset: () => void,
  setStage: (stage: Stage | null) => void,
  setWeapon: (index: number, weapon: Weapon | null) => void,
  setPassive: (index: number, passive: Passive | null) => void,
  deletePassive: (index: number) => void,
  pushPassive: (passive: Passive) => void,
  pushWeapon: (weapon: Weapon) => void,
}

export const WeaponsContext = createContext<WeaponsContextProps>({
  stage: null,
  weapons: [],
  passives: [],
  missingPassives: [],
  requiredWeapons: [],
  passivesInStage: [],
  recommendedWeapons: [],
  reset: () => {},
  setStage: () => {},
  setWeapon: () => { },
  setPassive: () => { },
  deletePassive: () => { },
  pushPassive: () => { },
  pushWeapon: () => { },
});

type Props = {
  children: React.ReactNode;
}

function resolveMissingPassives(weapons: (Weapon | null)[], passives: (Passive | null)[]) {
  const missingPassives: Passive[] = [];
  weapons.forEach((weapon) => {
    weapon?.evolvedFrom?.forEach(passive => {
      if (!passives.includes(passive)) {
        missingPassives.push(passive);
      }
    });
  });

  return missingPassives;
}

function resolveRequiredWeapons(weapons: (Weapon | null)[]) {
  const requiredWeapons: Weapon[] = [];
  weapons.forEach((weapon) => {
    weapon?.unionFrom?.forEach(weapon => {
      if (!weapons.includes(weapon)) {
        requiredWeapons.push(weapon);
      }
    });
  });

  return requiredWeapons;
}

function resolveRecommendedWeapons(passives: (Passive | null)[], weapons: (Weapon | null)[]) {
  const recommendedWeapons: Weapon[] = [];
  Object.values(WEAPONS).forEach((weapon) => {
    if (weapon !== null) {
      if (!weapons.includes(weapon)) {
        if (weapon.evolvedFrom.length > 0) {
          if (weapon.evolvedFrom.every(p => passives.includes(p))) {
            recommendedWeapons.push(weapon);
          }
        }
      }
    }
  });

  return recommendedWeapons;
}

function WeaponsContextProvider({
  children,
}: Props) {
  const [stage, setStage] = useState<Stage | null>(null);
  const [weapons, setWeapons] = useState<(Weapon | null)[]>([null, null, null, null, null, null]);
  const [passives, setPassives] = useState<(Passive | null)[]>([null, null, null, null, null, null]);
  const [missingPassives, setMissingPassives] = useState<Passive[]>([]);
  const [requiredWeapons, setRequiredWeapons] = useState<Weapon[]>([]);
  const [passivesInStage, setPassivesInStage] = useState<Passive[]>([]);
  const [recommendedWeapons, setRecommendedWeapons] = useState<Weapon[]>([]);

  function updatePassives(newPassives: (Passive | null)[]) {
    setPassives(newPassives);
    setMissingPassives(resolveMissingPassives(weapons, newPassives));
    setRecommendedWeapons(resolveRecommendedWeapons(newPassives, weapons));
  }

  const weaponsContextValue:WeaponsContextProps = {
    stage,
    weapons,
    passives,
    missingPassives,
    requiredWeapons,
    passivesInStage,
    recommendedWeapons,
    reset: () => {
      setStage(null);
      setWeapons([null, null, null, null, null, null]);
      setPassives([null, null, null, null, null, null]);
      setMissingPassives([]);
      setRequiredWeapons([]);
      setPassivesInStage([]);
      setRecommendedWeapons([]);
    },
    setStage: (stage) => {
      setStage(stage);
      setPassivesInStage(stage?.passives ?? []);
    },
    setWeapon: (index: number, weapon: Weapon | null) => {
      const newWeapons = [...weapons];
      newWeapons[index] = weapon;
      setWeapons(newWeapons);
      setMissingPassives(resolveMissingPassives(newWeapons, passives));
      setRequiredWeapons(resolveRequiredWeapons(newWeapons));
      setRecommendedWeapons(resolveRecommendedWeapons(passives, newWeapons));
    },
    setPassive: (index: number, passive: Passive | null) => {
      const newPassives = [...passives];
      newPassives[index] = passive;
      updatePassives(newPassives);
    },
    deletePassive: (index: number) => {
      const newPassives = [...passives];
      newPassives.splice(index, 1);
      updatePassives(newPassives);
    },
    pushPassive: (passive: Passive) => {
      const newPassives = [...passives];
      const emptySlotIndex = passives.findIndex(p => p === null);
      if (emptySlotIndex !== -1) {
        newPassives[emptySlotIndex] = passive;
      } else {
        newPassives.push(passive);
      }
      updatePassives(newPassives);
    },
    pushWeapon: (newWeapon: Weapon) => {
      const newWeapons = [...weapons];
      for (let i = 0; i < newWeapons.length; i++) {
        const weapon = newWeapons[i];
        if (weapon === null) {
          newWeapons[i] = newWeapon;
          break;
        }
      }
      setWeapons(newWeapons);
      setRecommendedWeapons(resolveRecommendedWeapons(passives, newWeapons));
    },
  };

  return (
    <WeaponsContext.Provider value={weaponsContextValue}>
      {children}
    </WeaponsContext.Provider>
  );
}

export default WeaponsContextProvider;
