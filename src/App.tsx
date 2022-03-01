import {
  Stack,
} from "@chakra-ui/react";
import MissingPassives from "./components/MissingPassives";
import PassiveBlocks from "./components/PassiveBlocks";
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
        <WeaponBlocks />

        <PassiveBlocks />

        <MissingPassives />
      </Stack>
    </WeaponsContextProvider>
  );
}

export default App;
