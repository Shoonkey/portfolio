import { useColorModeValue, Select, SelectProps } from "@chakra-ui/react";

import useThemeColor from "@/hooks/useThemeColor";

interface LanguageSelectProps extends SelectProps {
  language: string;
  onChangeLanguage: (lang: string) => void;
}

function LanguageSelect({
  language,
  onChangeLanguage,
  ...props
}: LanguageSelectProps) {
  const highlightColor = useThemeColor("primary.500");
  const borderColor = useColorModeValue("#2b2b2b", "#e2e2e2");

  return (
    <Select
      w="auto"
      gridArea="2 / 2"
      value={language}
      onChange={(e) => onChangeLanguage(e.target.value)}
      borderColor={borderColor}
      _hover={{ borderColor: highlightColor }}
      {...props}
    >
      <option value="en-US">en-US</option>
      <option value="pt-BR">pt-BR</option>
      <option value="es-ES">es-ES</option>
    </Select>
  );
}

export default LanguageSelect;
