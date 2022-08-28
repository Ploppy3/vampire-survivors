import {
  Box,
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
    deletePassive,
    passivesInStage,
  } = useContext(WeaponsContext);

  return (
    <Menu
      closeOnBlur={true}
      isLazy={true}>
      <Box
        position="relative">
        <MenuButton
          as={Button}
          w="48px"
          h="48px"
          border={position > 5 ? "1px solid #000": (passive && passivesInStage.includes(passive) ? "1px solid orange" : "none")}>
          {passive && (
            <Image src={passive?.src} />
          )}
        </MenuButton>

        {passives.length > 6 && (
          <Button
            onClick={() => {
              deletePassive(position);
            }}
            size="xs"
            position="absolute"
            top="0"
            right="0"
            transform="translate(50%, -50%)"
            colorScheme="red"
            variant="ghost"
            borderRadius="full">
            x
          </Button>
        )}
      </Box>

      <MenuList
        maxH="45vh"
        overflowY="scroll">
        <MenuItem
          onClick={() => {setPassive(position, null);}}>
          -
        </MenuItem>

        {PASSIVES_LIST.filter(passive => !passives.includes(passive)).map((passive) => (
          <MenuItem
            onClick={() => { setPassive(position, passive); }}
            opacity={position < 6 && passivesInStage.includes(passive) ? 0.25 : 1}
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
