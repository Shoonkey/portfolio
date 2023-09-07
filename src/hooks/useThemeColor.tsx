import { useColorMode } from "@chakra-ui/react"

type CustomThemeColor =
  | "bg.500"
  | "bg.800"
  | "primary.300"
  | "primary.500"
  | "text.500"
  | "text.800"
  | "border.500"

interface CustomColorDefinition {
  dark: string
  light: string
}

const colors: Record<CustomThemeColor, CustomColorDefinition> = {
  'bg.500': { dark: "#1a202c", light: "#d7d7d7"},
  'bg.800': { dark: "#0e1625", light: "#F3F3F3" },
  'primary.300': { dark: "#ff9999", light: "#fa6168" },
  'primary.500': { dark: "#ff8080", light: "#f93943" },
  'text.500': { dark: "#e2e2e2", light: "#363636" },
  'text.800': { dark: "#818181", light: "#090302" },
  'border.500': { dark:  "#5A5A5A", light: "#2b2b2b" }
}

// This abstraction was necessary because ChakraUI does not allow for creating
// theme colors that change based on color mode built in.
// So to prevent using their color mode hooks on literally every component that uses
// colors that change based on color mode, we call this function which centralizes the logic
function useThemeColor(colorName: CustomThemeColor) {
  const { colorMode: mode } = useColorMode()
  return colors[colorName][mode]
}

export default useThemeColor;