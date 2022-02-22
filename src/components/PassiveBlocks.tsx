import {
  HStack,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";
import PassiveBlock from "./PassiveBlock";

function PassiveBlocks() {
  const {
    passives,
  } = useContext(WeaponsContext);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <HStack spacing=".5rem">
        {passives.map?.((passive, index) => (
          <PassiveBlock
            position={index}
            passive={passive}
            key={index} />
        ))}
      </HStack>
    </>
  );
}

export default PassiveBlocks;
