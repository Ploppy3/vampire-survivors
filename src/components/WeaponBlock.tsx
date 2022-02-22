import {
  Button, Image,
  Menu, MenuButton, MenuItem, MenuList,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  Weapon,
  WEAPONS_LIST,
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
    setWeapon,
  } = useContext(WeaponsContext);

  return (
    <Menu
      closeOnBlur={true}>
      <MenuButton
        as={Button}
        w="48px"
        h="48px">
        {weapon && (
          <Image src={weapon?.src} />
        )}
      </MenuButton>

      <MenuList
        maxH="75vh"
        overflowY="scroll">
        <MenuItem onClick={() => {setWeapon(position, null);}}>
          -
        </MenuItem>

        {WEAPONS_LIST.map?.((weapon) => (
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
      </MenuList>
    </Menu>
  );
}

export default WeaponBlock;
