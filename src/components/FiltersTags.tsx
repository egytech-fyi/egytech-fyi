import { CustomTag } from "@components";
import { StateType, useGlobalState } from "@context";
import { fieldKeyMap, keyValueMap } from "@constants";
import "@styles/FilterTags.styles.scss";

type StateKey = keyof StateType;

const colors = [
    "#DC143C",
    "#1434A4",
    "#097969",
    "#108ee9",
    "#702963",
    "#023020",
    "#C04000",
    "#770737",
    "#1B1212",
    "#5D3FD3",
    "#FA5F55",
    "#C04000",
];

export const FiltersTags = () => {
    const { state, dispatch } = useGlobalState();
    const blackListedStates = ["title", "salary"];

    const tags = Object.keys(state)
        .filter((key) => !blackListedStates.includes(key))
        .map((key, index) => {
            const value = state[key as StateKey];
            if (value) {
                return (
                    <CustomTag
                        key={key}
                        closable
                        onClose={() =>
                            dispatch({
                                type: key as never,
                                payload: undefined,
                            })
                        }
                        color={colors[index]}
                        fieldKey={fieldKeyMap[key]}
                        fieldValue={
                            typeof value !== "object" && (typeof value !== "boolean" && keyValueMap[value])
                                ? keyValueMap[value]
                                : value
                        }
                    />
                );
            }
        })
        .filter(Boolean);

    return <div className="filter-tags">{tags}</div>;
};
