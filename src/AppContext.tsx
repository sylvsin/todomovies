import { AxiosInstance } from "axios";
import React from "react";

export interface AppConfig {
  api?: AxiosInstance;
}

export const AppContext = React.createContext<AppConfig>({});
