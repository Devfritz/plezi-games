import { HStack, Switch, useColorMode, Icon } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
const ColorSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon as={MdDarkMode} w={5} h={5} />
    </HStack>
  );
};

export default ColorSwitch;
