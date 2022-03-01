import {
  Button, Image,
} from "@chakra-ui/react";

interface Props {
  src: string
  onClick: () => void,
}

function ItemButton({
  src,
  onClick,
}: Props) {
  return (
    <Button
      as={Button}
      onClick={onClick}
      w="48px"
      h="48px">
      {src && (
        <Image src={src} />
      )}
    </Button>
  );
}

export default ItemButton;
