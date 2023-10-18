import { Image } from "@chakra-ui/react";

import { TechLogoInstanceProps } from "@/shared/techs";

function DiscordJSLogo({ sizeBehavior, ...props }: TechLogoInstanceProps) {
  return (
    <Image
      src="/discordjs-logo.svg"
      alt="DiscordJS logo: 'Discord' written in purple followed by a dot and 'JS' in rainbow colors"
      w={sizeBehavior === "responsive" ? { base: "64px", md: "82px" } : "82px"}
      {...props}
    />
  );
}

export default DiscordJSLogo;
