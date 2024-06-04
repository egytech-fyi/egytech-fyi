import { useState } from "react";
import { Button, Drawer } from "antd";
import { CustomInput } from "@components";
import { transformOptions } from "@utils";
import { StateType, useGlobalState } from "@context";
import {
    initialAdditionalFiltersState,
    businessFocusMap,
    businessLineMap,
    businessMarketMap,
    businessSizeMap,
    degreeMap,
    genderMap,
    levelMap,
    programmingLanguageMap,
} from "@constants";
import "@styles/Filters.styles.scss";

interface FiltersDrawerProps {
    open: boolean;
    onClose: () => void;
}

export const FiltersDrawer = ({ open, onClose }: FiltersDrawerProps) => {
    const { state, dispatch } = useGlobalState();

    const [filters, setFilters] = useState<StateType>(state);

    function handleClose() {
        setFilters({ ...initialAdditionalFiltersState, ...state });
        onClose();
    }

    // current workaround, the drawback is the removed filters will take a second to disappear
    // after the drawer is opened, but can work for now
    function handleOpen() {
        setFilters({ ...initialAdditionalFiltersState, ...state });
    }

    return (
        <Drawer afterOpenChange={handleOpen} open={open} onClose={handleClose}>
            <div className="filters-drawer">
                <div className="filters-container">
                    <CustomInput
                        type="checkbox"
                        checked={filters?.include_relocated}
                        label="Include Relocated Participants"
                        onChange={(value) => {
                            const payload = value.target.checked;
                            setFilters((prev) => ({
                                ...prev,
                                include_relocated: payload,
                            }));
                        }}
                    />
                    <CustomInput
                        type="checkbox"
                        checked={filters?.include_remote_abroad}
                        label="Include Participants Working Remotely for non-egyptian companies"
                        onChange={(value) => {
                            const payload = value.target.checked;
                            setFilters((prev) => ({
                                ...prev,
                                include_remote_abroad: payload,
                            }));
                        }}
                    />
                    <CustomInput
                        type="number"
                        label="Min years of experience"
                        placeholder="Minimum Years of Experience >="
                        value={filters?.yoe_from_included}
                        inputLabel1="YoE"
                        onChange={(yoe_from_included) =>
                            setFilters((prev) => ({
                                ...prev,
                                yoe_from_included,
                            }))
                        }
                    />
                    <CustomInput
                        type="number"
                        label="Max years of experience"
                        placeholder="Maximum Years of Experience <"
                        value={filters?.yoe_to_excluded}
                        inputLabel1="YoE"
                        onChange={(yoe_to_excluded) =>
                            setFilters((prev) => ({ ...prev, yoe_to_excluded }))
                        }
                    />
                    <CustomInput
                        type="select"
                        label="Level"
                        placeholder="Select your Current Level"
                        value={filters?.level}
                        options={transformOptions(levelMap)}
                        onSelect={(level) =>
                            setFilters((prev) => ({ ...prev, level }))
                        }
                    />
                    <CustomInput
                        type="select"
                        label="Gender"
                        placeholder="Select your Gender"
                        value={filters?.gender}
                        options={transformOptions(genderMap)}
                        onSelect={(gender) =>
                            setFilters((prev) => ({ ...prev, gender }))
                        }
                    />
                    <CustomInput
                        type="select"
                        label="CS Major"
                        placeholder="Are you a CS Major?"
                        value={filters?.cs_degree}
                        options={transformOptions(degreeMap)}
                        onSelect={(cs_degree) =>
                            setFilters((prev) => ({ ...prev, cs_degree }))
                        }
                    />
                    <CustomInput
                        type="select"
                        label="Programming Language"
                        placeholder="Programming Language?"
                        value={filters?.programming_language}
                        options={transformOptions(programmingLanguageMap)}
                        onSelect={(programming_language) =>
                            setFilters((prev) => ({
                                ...prev,
                                programming_language,
                            }))
                        }
                    />
                    <CustomInput
                        type="select"
                        label="Business Line"
                        placeholder="Company's business Lines?"
                        value={filters?.business_line}
                        options={transformOptions(businessLineMap)}
                        onSelect={(business_line) =>
                            setFilters((prev) => ({ ...prev, business_line }))
                        }
                    />
                    <CustomInput
                        type="select"
                        label="Business Focus"
                        placeholder="Company's business focus?"
                        value={filters?.business_focus}
                        options={transformOptions(businessFocusMap)}
                        onSelect={(business_focus) =>
                            setFilters((prev) => ({ ...prev, business_focus }))
                        }
                    />
                    <CustomInput
                        type="select"
                        label="Business Size"
                        placeholder="Company's maturity?"
                        value={filters?.business_size}
                        options={transformOptions(businessSizeMap)}
                        onSelect={(business_size) =>
                            setFilters((prev) => ({ ...prev, business_size }))
                        }
                    />
                    <CustomInput
                        type="select"
                        label="Business Market"
                        placeholder="Company's markets?"
                        value={filters?.business_market}
                        options={transformOptions(businessMarketMap)}
                        onSelect={(business_market) =>
                            setFilters((prev) => ({ ...prev, business_market }))
                        }
                    />
                </div>
                <Button
                    type="primary"
                    className="filters-cta"
                    onClick={() => {
                        dispatch({
                            type: "filters",
                            payload: filters,
                        });
                        handleClose();
                    }}
                >
                    Apply Filters
                </Button>
            </div>
        </Drawer>
    );
};
