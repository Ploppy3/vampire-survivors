import {
  createContext, useMemo, useState,
} from "react";
import {
  Passive,
} from "../constants/passives";
import {
  Weapon,
} from "../constants/weapons";

type WeaponsContextProps = {
  weapons: (Weapon | null)[],
  passives: (Passive | null)[],
  missingPassives: Passive[],
  setWeapon: (index: number, weapon: Weapon | null) => void,
  setPassive: (index: number, passive: Passive | null) => void,
  deletePassive: (index: number) => void,
  pushPassive: (passive: Passive) => void,
}

export const WeaponsContext = createContext<WeaponsContextProps>({
  weapons: [],
  passives: [],
  missingPassives: [],
  setWeapon: () => { },
  setPassive: () => { },
  deletePassive: () => { },
  pushPassive: () => { },
});

type Props = {
  children: React.ReactNode;
}

function resolveMissingPassives(weapons: (Weapon | null)[], passives: (Passive | null)[]) {
  const missingPassives: Passive[] = [];
  console.log({
    weapons,
  });
  weapons.forEach((weapon) => {
    console.log(weapon?.evolvedFrom);
    if (weapon?.evolvedFrom && !passives.includes(weapon.evolvedFrom)) {
      missingPassives.push(weapon.evolvedFrom);
    }
  });

  return missingPassives;
}

function WeaponsContextProvider({
  children,
}: Props) {
  const [weapons, setWeapons] = useState<(Weapon | null)[]>([null, null, null, null, null, null]);
  const [passives, setPassives] = useState<(Passive | null)[]>([null, null, null, null, null, null]);
  const [missingPassives, setMissingPassives] = useState<Passive[]>([]);

  const weaponsContextValue = useMemo<WeaponsContextProps>(() => {
    return ({
      weapons,
      passives,
      missingPassives,
      setWeapon: (index: number, weapon: Weapon | null) => {
        const newWeapons = [...weapons];
        newWeapons[index] = weapon;
        setWeapons(newWeapons);
        setMissingPassives(resolveMissingPassives(newWeapons, passives));
      },
      setPassive: (index: number, passive: Passive | null) => {
        const newPassives = [...passives];
        newPassives[index] = passive;
        setPassives(newPassives);
        setMissingPassives(resolveMissingPassives(weapons, newPassives));
      },
      deletePassive: (index: number) => {
        const newPassives = [...passives];
        newPassives.splice(index, 1);
        setPassives(newPassives);
        setMissingPassives(resolveMissingPassives(weapons, newPassives));
      },
      pushPassive: (passive: Passive) => {
        const newPassives = [...passives];
        const emptySlotIndex = passives.findIndex(p => p === null);
        if (emptySlotIndex !== -1) {
          newPassives[emptySlotIndex] = passive;
        } else {
          newPassives.push(passive);
        }
        setPassives(newPassives);
        setMissingPassives(resolveMissingPassives(weapons, newPassives));
      },
    });
  }, [missingPassives, passives, weapons]);

  return (
    <WeaponsContext.Provider value={weaponsContextValue}>
      {children}
    </WeaponsContext.Provider>
  );
}

export default WeaponsContextProvider;
