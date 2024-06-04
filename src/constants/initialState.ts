import { StateType } from "@context";

export const initialMainFiltersState = {
    title: undefined,
    salary: undefined,
};

export const initialAdditionalFiltersState = {
    business_focus: undefined,
    business_line: undefined,
    business_market: undefined,
    business_size: undefined,
    cs_degree: undefined,
    gender: undefined,
    include_relocated: undefined,
    include_remote_abroad: undefined,
    level: undefined,
    yoe_from_included: undefined,
    yoe_to_excluded: undefined,
};

export const initialState: StateType = {
    ...initialMainFiltersState,
    ...initialAdditionalFiltersState,
};
