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
  setWeapon: (index: number, weapon: Weapon | null) => void,
  setPassive: (index: number, passive: Passive | null) => void,
}

export const WeaponsContext = createContext<WeaponsContextProps>({
  weapons: [],
  passives: [],
  setWeapon: (index, weapon) => { },
  setPassive: (index, passive) => { },
});

type Props = {
  children: React.ReactNode;
}

function WeaponsContextProvider({
  children,
}: Props) {
  const [weapons, setWeapons] = useState<(Weapon | null)[]>([null, null, null, null, null, null]);
  const [passives, setPassives] = useState<(Passive | null)[]>([null, null, null, null, null, null]);

  const weaponsContextValue = useMemo<WeaponsContextProps>(() => {
    return ({
      weapons,
      passives,
      setWeapon: (index: number, weapon: Weapon | null) => {
        const newWeapons = [...weapons];
        newWeapons[index] = weapon;
        setWeapons(newWeapons);
      },
      setPassive: (index: number, passive: Passive | null) => {
        const newPassives = [...passives];
        newPassives[index] = passive;
        setPassives(newPassives);
      },
    });
  }, [passives, weapons]);

  return (
    <WeaponsContext.Provider value={weaponsContextValue}>
      {children}
    </WeaponsContext.Provider>
  );
}

export default WeaponsContextProvider;
