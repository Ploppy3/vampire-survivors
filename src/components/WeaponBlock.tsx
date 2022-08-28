import {
  Button, Image,
  Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  Weapon, WEAPONS_LIST_EVOLUTION,
  WEAPONS_LIST_NORMAL,
  WEAPONS_LIST_UNIONS,
} from "../constants/weapons";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";

type Props = {
  position: number,
  weapon: Weapon | null;
}

function WeaponBlock({
  position,
  weapon,
}: Props) {
  const {
    weapons,
    setWeapon,
    passives,
  } = useContext(WeaponsContext);

  return (
    <Menu
      closeOnBlur={true}
      isLazy={true}>
      <MenuButton
        as={Button}
        w="48px"
        h="48px"
        border={weapon?.evolvedFrom?.every(passive => passives.includes(passive)) ? "none": (weapon ? "1px solid red" : "none")}>
        {weapon && (
          <Image src={weapon?.src} />
        )}
      </MenuButton>

      <MenuList
        maxH="45vh"
        overflowY="scroll">
        <MenuItem onClick={() => {setWeapon(position, null);}}>
          -
        </MenuItem>

        <MenuGroup title="Evolutions">
          {WEAPONS_LIST_EVOLUTION.filter(weapon => !weapons.includes(weapon)).map((weapon) => (
            <MenuItem
              onClick={()=> {setWeapon(position, weapon);}}
              key={weapon.name}>
              <Image
                src={weapon.src}
                w="1rem"
                mr=".5rem" />

              {weapon.name}
            </MenuItem>
          ))}
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title="Unions">
          {WEAPONS_LIST_UNIONS.filter(weapon => !weapons.includes(weapon)).map((weapon) => (
            <MenuItem
              onClick={()=> {setWeapon(position, weapon);}}
              key={weapon.name}>
              <Image
                src={weapon.src}
                w="1rem"
                mr=".5rem" />

              {weapon.name}
            </MenuItem>
          ))}
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title="Normal">
          {WEAPONS_LIST_NORMAL.filter(weapon => !weapons.includes(weapon)).map((weapon) => (
            <MenuItem
              onClick={()=> {setWeapon(position, weapon);}}
              key={weapon.name}>
              <Image
                src={weapon.src}
                w="1rem"
                mr=".5rem" />

              {weapon.name}
            </MenuItem>
          ))}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default WeaponBlock;
