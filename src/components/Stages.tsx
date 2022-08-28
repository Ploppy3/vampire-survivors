import {
  FormControl,
  FormLabel,
  HStack,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  STAGES,
} from "../constants/stages";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";
import ItemButton from "./ItemButton";

function Stages() {
  const {
    stage, setStage,
    passivesInStage,
    pushPassive,
    passives,
    missingPassives,
  } = useContext(WeaponsContext);

  const stageWeapons = (stage && STAGES[stage?.name]?.weapons) ?? [];

  return (
    <>
      <FormControl>
        <FormLabel>
          Stage:
        </FormLabel>

        <Select
          value={stage?.name ?? ""}
          onChange={(e) => {
            const stage = STAGES[e.target.value];
            stage ? setStage(stage) : setStage(null);
          }}
          maxH="45vh"
          overflowY="scroll"
          display="inline-block"
          width="auto">
          <option value="">
            -
          </option>

          {Object.values(STAGES).map((stage) => (
            <option
              value={stage.name}
              key={stage.name}>
              {stage.name}
            </option>
          ))}
        </Select>
      </FormControl>

      {passivesInStage.length > 0 && (
        <>
          <Text>
            Passives in stage:
          </Text>

          <HStack>
            {passivesInStage?.map((passive) => (
              <ItemButton
                src={passive.src}
                onClick={() => { pushPassive(passive); }}
                isDisabled={passives.includes(passive)}
                border={passivesInStage.includes(passive) ? undefined : "1px solid green"}
                key={passive.name} />
            ))}
          </HStack>
        </>
      )}

      {stageWeapons.length > 0 && (
        <>
          <Text>
            Weapons in stage:
          </Text>

          <HStack>
            {stageWeapons?.map((weapon) => (
              <Image
                width="1rem"
                src={weapon.src}
                key={weapon.name} />
            ))}
          </HStack>
        </>
      )}
    </>
  );
}

export default Stages;
