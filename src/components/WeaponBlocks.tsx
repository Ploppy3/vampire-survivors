import {
  Text,
  Wrap,
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
    <>
      <Text>
        Weapons
      </Text>

      <Wrap spacing=".5rem">
        {weapons.map?.((weapon, index) => (
          <WeaponBlock
            position={index}
            weapon={weapon}
            key={index} />
        ))}
      </Wrap>
    </>
  );
}

export default WeaponBlocks;
