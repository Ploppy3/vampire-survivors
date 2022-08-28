import {
  Img,
  Text, Wrap,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";

function RequiredWeapons() {
  const {
    requiredWeapons,
  } = useContext(WeaponsContext);

  return requiredWeapons.length > 0 ? (
    <>
      <Text>
        Required weapons:
      </Text>

      <Wrap
        spacing=".5rem"
        overflow="visible">
        {requiredWeapons.map?.((weapon) => (
          <Img
            src={weapon.src}
            key={weapon?.name} />
        ))}
      </Wrap>
    </>
  ) : null;
}

export default RequiredWeapons;
