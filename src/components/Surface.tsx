import { Box, BoxProps } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";

import useThemeColor from "@/hooks/useThemeColor";

function Surface(
  { bg, transition, ...props }: BoxProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const bgColor = useThemeColor("bg.800");
  return (
    <Box
      {...props}
      ref={ref}
      bg={bg || bgColor}
      transition={`background .2s, ${transition}`}
    />
  );
}

export default forwardRef<HTMLDivElement, BoxProps>(Surface);
