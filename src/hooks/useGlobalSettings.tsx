import { useContext } from "react";

import { GlobalSettingsContext } from "@/components/GlobalSettingsContext";

const useGlobalSettings = () => useContext(GlobalSettingsContext);

export default useGlobalSettings;