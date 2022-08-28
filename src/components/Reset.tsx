import {
  Box, Button,
} from "@chakra-ui/react";
import {
  useContext,
} from "react";
import {
  WeaponsContext,
} from "../contexts/WeaponsContextProvider";

function ResetButton() {
  const {
    reset,
  } = useContext(WeaponsContext);

  return (
    <Box>
      <Button onClick={reset}>
        Reset
      </Button>
    </Box>
  );
}

export default ResetButton;