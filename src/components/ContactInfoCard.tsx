import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

import Surface from "./Surface";
import useThemeColor from "@/hooks/useThemeColor";

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  description: ReactNode | string;
}

function ContactInfoCard({ icon, title, description }: ContactInfoCardProps) {
  const iconColor = useThemeColor("primary.500");
  const textColor = useThemeColor("text.500");
  const borderColor = useThemeColor("border.500");

  return (
    <Surface
      py={4}
      px={8}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="16px"
      w="100%"
      transition="transform .4s"
      _hover={{ transform: "scale(0.97)" }}
      borderStyle="solid"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <Box color={iconColor}>{icon}</Box>
      <Heading as="h2" fontSize="md" color={textColor}>
        {title}
      </Heading>
      <Box textAlign="center" fontSize="sm" mt={2} lineHeight="1.5rem">
        {description}
      </Box>
    </Surface>
  );
}

export default ContactInfoCard;
