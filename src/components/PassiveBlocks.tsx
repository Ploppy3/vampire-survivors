import {
  Button,
  HStack,
} from "@chakra-ui/react";
import {
  useCallback,
  useContext,
} from "react";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";
import PassiveBlock from "./PassiveBlock";

function PassiveBlocks() {
  const {
    passives,
    setPassive,
  } = useContext(WeaponsContext);

  const handleClickAddPassive = useCallback(() => {
    setPassive(passives.length, null);
  }, [passives.length, setPassive]);

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

        <Button onClick={handleClickAddPassive}>
          +
        </Button>
      </HStack>
    </>
  );
}

export default PassiveBlocks;
