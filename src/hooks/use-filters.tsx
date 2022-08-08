import React from "react";
import { FiltersContext } from "../contexts/filters-context";

export const useFilters = () => React.useContext(FiltersContext)