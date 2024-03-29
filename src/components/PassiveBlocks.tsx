import {
  Button, Text, Wrap,
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
    <>
      <Text>
        Passives:
      </Text>

      <Wrap
        spacing=".5rem"
        align="center"
        overflow="visible">
        {passives.filter((passive, index) => index < 6).map?.((passive, index) => (
          <PassiveBlock
            position={index}
            passive={passive}
            key={index} />
        ))}
      </Wrap>

      <Wrap
        spacing=".5rem"
        align="center"
        overflow="visible">
        {passives.filter((passive, index) => index >= 6).map?.((passive, index) => (
          <PassiveBlock
            position={index + 6}
            passive={passive}
            key={index} />
        ))}

        <Button onClick={handleClickAddPassive}>
          +
        </Button>
      </Wrap>
    </>
  );
}

export default PassiveBlocks;
