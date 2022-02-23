import {
  Button, Image,
  Menu, MenuButton, MenuItem, MenuList,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  Passive,
  PASSIVES_LIST,
} from "../constants/passives";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";

type Props = {
  position: number,
  passive: Passive | null,
}

function PassiveBlock({
  position, passive,
}: Props) {
  const {
    passives,
    setPassive,
  } = useContext(WeaponsContext);

  return (
    <Menu
      closeOnBlur={true}>
      <MenuButton
        as={Button}
        w="48px"
        h="48px">
        {passive && (
          <Image src={passive?.src} />
        )}
      </MenuButton>

      <MenuList
        maxH="45vh"
        overflowY="scroll">
        <MenuItem
          onClick={() => {setPassive(position, null);}}>
          -
        </MenuItem>

        {PASSIVES_LIST.filter(passive => !passives.includes(passive)).map((passive) => (
          <MenuItem
            onClick={() => {setPassive(position, passive);}}
            key={passive.name}>
            <Image
              src={passive.src}
              w="1rem"
              mr=".5rem" />

            {passive.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PassiveBlock;
