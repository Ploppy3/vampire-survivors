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
  } = useContext(WeaponsContext);

  return missingPassives.length > 0 ? (
    <>
      <Text>
        Missing passives
      </Text>

      <Wrap spacing=".5rem">
        {missingPassives.map?.((passive, index) => (
          <ItemButton
            onClick={()=>{pushPassive(passive);}}
            src={passive.src}
            key={passive.name} />
        ))}
      </Wrap>
    </>
  ) : null;
}

export default MissingPassives;
