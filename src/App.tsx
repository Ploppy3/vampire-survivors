import {
  Stack,
} from "@chakra-ui/react";
import MissingPassives from "./components/MissingPassives";
import PassiveBlocks from "./components/PassiveBlocks";
import RecommendedWeapons from "./components/RecommendedWeapons";
import RequiredWeapons from "./components/RequiredWeapons";
import ResetButton from "./components/Reset";
import Stages from "./components/Stages";
import WeaponBlocks from "./components/WeaponBlocks";
import WeaponsContextProvider from "./contexts/WeaponsContextProvider";
import "./styles/global.css";

function App() {
  return (
    <WeaponsContextProvider>
      <Stack
        height="100%"
        spacing="1rem"
        p="1rem">

        <ResetButton />

        <Stages />

        <WeaponBlocks />

        <PassiveBlocks />

        <MissingPassives />

        <RequiredWeapons />

        <RecommendedWeapons />
      </Stack>
    </WeaponsContextProvider>
  );
}

export default App;
