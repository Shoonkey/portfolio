import { Box, BoxProps } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";

function Surface(props: BoxProps, ref: ForwardedRef<HTMLDivElement>) {
  return <Box ref={ref} bg="bg.800" {...props} />;
}

export default forwardRef<HTMLDivElement, BoxProps>(Surface);
