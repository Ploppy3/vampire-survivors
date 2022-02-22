import {
  HStack,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";
import WeaponBlock from "./WeaponBlock";

function WeaponBlocks() {
  const {
    weapons,
  } = useContext(WeaponsContext);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <HStack spacing=".5rem">
        {weapons.map?.((weapon, index) => (
          <WeaponBlock
            position={index}
            weapon={weapon}
            key={index} />
        ))}
      </HStack>
    </>
  );
}

export default WeaponBlocks;
