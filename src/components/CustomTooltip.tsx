import {
  Tooltip,
  TooltipProps,
  useMediaQuery,
  useOutsideClick,
} from "@chakra-ui/react";
import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  useEffect,
  useRef,
  useState,
  RefObject,
} from "react";

import useThemeColor from "@/hooks/useThemeColor";

interface CustomTooltipProps {
  children: ReactNode;
  touchFriendly?: boolean;
  wrapsLink?: boolean;
  wrapsClickable?: boolean;
}

const OPEN_TOOLTIP_MS = 300;

// - Renders a touch-friendly tooltip, that appears on hover on desktop and on touch hold on mobile
// - On touch devices the tooltip opens after a 300ms touchstart event uncancelled by touchmove or touchend
// - Set `wrapsClickable` to true to automatically run .click() on the touched element, if it wasn't
// touched for long enough to trigger the tooltip
function CustomTooltip({
  children,
  wrapsClickable = false,
  ...props
}: TooltipProps & CustomTooltipProps) {
  const bgColor = useThemeColor("bg.800");
  const borderColor = useThemeColor("border.500");
  const textColor = useThemeColor("text.500");

  const [open, setOpen] = useState(false);
  const [isTouch] = useMediaQuery("(pointer: coarse), (hover: none)");
  const itemRef = useRef<HTMLElement>() as RefObject<HTMLElement>;

  const child = Children.only(children) as ReactElement;

  const trigger = cloneElement(child, { ...child.props, ref: itemRef });

  useOutsideClick({
    ref: itemRef,
    handler: () => setOpen(false),
  });

  useEffect(() => {
    const element = itemRef.current;

    if (!element) return;

    if (isTouch) {
      let openTimeout: number | null = null;

      const startOpenTimeout = (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        openTimeout = window.setTimeout(() => {
          setOpen(true);
          openTimeout = null;
        }, OPEN_TOOLTIP_MS);
      };

      const stopOpenTimeout = (e: TouchEvent) => {
        if (openTimeout) {
          window.clearTimeout(openTimeout);
          openTimeout = null;

          if (e.target && wrapsClickable)
            (e.currentTarget as HTMLButtonElement)?.click();
        } else {
          setOpen(false);
        }
      };

      element.addEventListener("touchstart", startOpenTimeout);
      element.addEventListener("touchmove", stopOpenTimeout);
      element.addEventListener("touchend", stopOpenTimeout);

      return () => {
        element.removeEventListener("touchstart", startOpenTimeout);
        element.removeEventListener("touchmove", stopOpenTimeout);
        element.removeEventListener("touchend", stopOpenTimeout);

        if (openTimeout)
          window.clearTimeout(openTimeout);
      }
    } else {
      const handleMouseOver = () => setOpen(true);
      const handleMouseOut = () => setOpen(false);

      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);

      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [isTouch, itemRef, wrapsClickable]);

  return (
    <Tooltip
      isOpen={open}
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
      {trigger}
    </Tooltip>
  );
}

export default CustomTooltip;
