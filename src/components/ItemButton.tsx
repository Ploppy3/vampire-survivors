import {
  Button, Image,
} from "@chakra-ui/react";

interface Props {
  src: string,
  onClick?: () => void,
  isDisabled?: boolean,
  border?: string | undefined,
}

function ItemButton({
  src,
  onClick,
  isDisabled = false,
  border = undefined,
}: Props) {
  return (
    <Button
      as={Button}
      onClick={onClick}
      isDisabled={isDisabled}
      border={border}
      w="48px"
      h="48px">
      {src && (
        <Image src={src} />
      )}
    </Button>
  );
}

export default ItemButton;
