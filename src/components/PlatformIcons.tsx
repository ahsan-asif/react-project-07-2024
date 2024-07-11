import { Icon, Text, HStack } from "@chakra-ui/react";
import {
  FaAndroid,
  FaXbox,
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  // icons map using slug

  const IconMap: { [key: string]: IconType } = {
    web: BsGlobe,
    android: FaAndroid,
    linux: FaLinux,
    ios: FaApple,
    xbox: FaXbox,
    nintendo: SiNintendo,
    iphone: MdPhoneIphone,
    pc: FaWindows,
    plastation: FaPlaystation,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={IconMap[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
