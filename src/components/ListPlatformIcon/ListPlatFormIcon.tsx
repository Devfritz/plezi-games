import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../hooks/useGames";
import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaAndroid,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const ListPlatFormIcon = ({ platforms }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    mac: FaApple,
    android: FaAndroid,
    nintendo: BsNintendoSwitch,
    linux: FaLinux,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon as={icons[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default ListPlatFormIcon;
