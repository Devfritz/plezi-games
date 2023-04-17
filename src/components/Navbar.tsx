import logo from "../assets/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorSwitch from "./ColorSwitch/ColorSwitch";
import Search from "./search/Search";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="50px" />
      {/* <Text as="b">PLEZI GAMES</Text> */}
      <Search />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
