import meh from "../../assets/meh.webp";
import bull from "../../assets/bulls-eye.webp";
import thumbs from "../../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiNumber: { [Key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbs, alt: "reccommanded" },
    5: { src: bull, alt: "exceptionnel" },
  };

  return <Image {...emojiNumber[rating]} boxSize="25px" />;
};

export default Emoji;
