import { useState } from "react";
import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { FiltersDrawer, FiltersTags, StepCard, CustomInput } from "@components";
import { useGlobalState } from "@context";
import { POSITIONS_OPTIONS } from "@constants";
import { useGetStats } from "@services";
import { getPositionOptions } from "@utils";
import "@styles/MainFilters.styles.scss";

export const MainFilters = () => {
    const [open, setOpen] = useState<boolean>(false);

    const { state, dispatch } = useGlobalState();

    const positionsOptions = getPositionOptions(POSITIONS_OPTIONS);

    const { status } = useGetStats(
        { ...state },
        { enabled: Boolean(state.title) && Boolean(state.salary) }
    );

    return (
        <StepCard>
            <span className="labelText">
                What is your Monthly Net Salary (Base+Bonus)*?
            </span>
            <div className="inputs-container">
                <CustomInput
                    mode="multiple"
                    type="search"
                    label="Title"
                    options={positionsOptions}
                    value={state.title}
                    onSelect={(payload) => dispatch({ type: "title", payload })}
                    placeholder="Select your current position"
                />
                <CustomInput
                    label="Salary"
                    type="number"
                    actionable
                    value={state.salary}
                    onChange={(payload) =>
                        dispatch({ type: "salary", payload })
                    }
                    onPressEnter={(e) => {
                        const payload = Number(
                            (e.target as HTMLInputElement).value
                        );
                        dispatch({ type: "salary", payload });
                    }}
                />
                {status !== "idle" ? (
                    <Button
                        className="submit-button"
                        icon={<FilterOutlined />}
                        onClick={() => setOpen(true)}
                    >
                        More Filters
                    </Button>
                ) : null}
                <FiltersDrawer open={open} onClose={() => setOpen(false)} />
            </div>
            <p className="disclaimer">
                * In case of yearly bonus, divide it by 12 then add to monthly
                base. <br />
                * Without RSUs or equity. <br />
                We do not keep your answer.
            </p>
            <FiltersTags />
            {status !== "idle" ? (
                <p className="disclaimer">
                    By default, we do not include relocated participants or
                    participants working remotely for companies outside Egypt.{" "}
                    <br />
                    You will need to choose to include them using the More
                    Filters option
                </p>
            ) : null}
        </StepCard>
    );
};
