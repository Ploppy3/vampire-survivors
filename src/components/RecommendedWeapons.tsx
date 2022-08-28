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
import ItemButton from "./ItemButton";

function RecommendedWeapons() {
  const {
    weapons,
    recommendedWeapons,
    pushWeapon,
  } = useContext(WeaponsContext);

  return recommendedWeapons.length > 0 ? (
    <>
      <Text>
        Recommended weapons:
      </Text>

      <Wrap
        spacing=".5rem"
        overflow="visible">
        {recommendedWeapons.map?.((weapon) => (
          <ItemButton
            onClick={() => { pushWeapon(weapon); }}
            isDisabled={weapons.every((weapon) => weapon !== null)}
            src={weapon.src}
            key={weapon.name} />
        ))}
      </Wrap>
    </>
  ) : null;
}

export default RecommendedWeapons;
