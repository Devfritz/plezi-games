import logo from "../assets/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorSwitch from "./ColorSwitch/ColorSwitch";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="50px" />
      {/* <Text as="b">PLEZI GAMES</Text> */}
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
