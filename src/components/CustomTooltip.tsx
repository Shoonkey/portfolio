import { Tooltip, TooltipProps, useMediaQuery, useOutsideClick } from "@chakra-ui/react";
import { Children, ReactElement, ReactNode, cloneElement, useEffect, useRef, useState, RefObject } from "react";

import useThemeColor from "@/hooks/useThemeColor";

interface CustomTooltipProps {
  children: ReactNode;
  wrapsLink?: boolean;
}

// Renders a touch-friendly tooltip, that appears on hover on desktop and on touch hold on mobile
function CustomTooltip({
  children,
  wrapsLink = false,
  ...props
}: TooltipProps & CustomTooltipProps) {
  const bgColor = useThemeColor("bg.800");
  const borderColor = useThemeColor("border.500");
  const textColor = useThemeColor("text.500");

  const [open, setOpen] = useState(false);
  const [isTouch] = useMediaQuery("(pointer: coarse), (hover: none)");
  const itemRef = useRef<HTMLElement>() as RefObject<HTMLElement>;

  const child = Children.only(children) as ReactElement;
  
  const trigger = cloneElement(
    child,
    { ...child.props, ref: itemRef }
  );

  useOutsideClick({
    ref: itemRef,
    handler: () => setOpen(false)
  });

  useEffect(() => {
    const element = itemRef.current;

    if (!element)
      return;

    let firstTouch = true;

    if (isTouch) {
      const handleTouchStart = (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(firstTouch);
        firstTouch = !firstTouch;
      };
  
      element.addEventListener("touchstart", handleTouchStart);

      return () =>  element.removeEventListener("touchstart", handleTouchStart);
    } else {
      const handleMouseOver = () => setOpen(true);
      const handleMouseOut = () => setOpen(false);
      
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);

      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      }
    }
  }, [isTouch, itemRef]);

  return (
    <Tooltip
      isOpen={open}
      onClick={() => {
        if (itemRef.current && wrapsLink)
          itemRef.current.click();
      }}
      hasArrow
      arrowShadowColor={borderColor}
      bg={bgColor}
      color={textColor}
      textDecoration={wrapsLink ? "underline" : "inherit"}
      px={2}
      py={1}
      fontWeight="bold"
      borderRadius="8px"
      borderStyle="solid"
      borderWidth="2px"
      borderColor={borderColor}
      {...props}
    >
      {trigger}
    </Tooltip>
  );
}

export default CustomTooltip;
