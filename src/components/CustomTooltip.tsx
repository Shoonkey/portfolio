import useThemeColor from "@/hooks/useThemeColor";
import { Tooltip, TooltipProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomTooltipProps {
  children: ReactNode;
}

function CustomTooltip({
  children,
  ...props
}: TooltipProps & CustomTooltipProps) {
  const bgColor = useThemeColor("bg.800");
  const borderColor = useThemeColor("border.500");
  const textColor = useThemeColor("text.500");

  return (
    <Tooltip
      hasArrow
      arrowShadowColor={borderColor}
      bg={bgColor}
      color={textColor}
      px={2}
      py={1}
      fontWeight="bold"
      borderRadius="8px"
      borderStyle="solid"
      borderWidth="2px"
      borderColor={borderColor}
      {...props}
    >
      {children}
    </Tooltip>
  );
}

export default CustomTooltip;
