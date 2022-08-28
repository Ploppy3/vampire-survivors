import {
  Text, Wrap,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";
import ItemButton from "./ItemButton";

function MissingPassives() {
  const {
    missingPassives,
    pushPassive,
    passivesInStage,
  } = useContext(WeaponsContext);

  return missingPassives.length > 0 ? (
    <>
      <Text>
        Missing passives to complete build:
      </Text>

      <Wrap
        spacing=".5rem"
        overflow="visible">
        {missingPassives.map?.((passive) => (
          <ItemButton
            onClick={() => { pushPassive(passive); }}
            border={passivesInStage.includes(passive) ? "1px solid green" : undefined}
            src={passive.src}
            key={passive.name} />
        ))}
      </Wrap>
    </>
  ) : null;
}

export default MissingPassives;
