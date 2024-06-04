import { useState } from "react";
import {
    Checkbox,
    InputNumber,
    InputNumberProps,
    Select,
    Space,
    Typography,
} from "antd";
import type { CheckboxProps, SelectProps } from "antd";
import Icon from "@ant-design/icons";
import { CustomButton, FloatLabel } from "@components";
import "@styles/FormComponents.styles.scss";

interface CommonProps {
    show?: boolean;
    label: string;
}

interface CustomInputNumberProps
    extends CommonProps,
        Omit<InputNumberProps, "onChange"> {
    type: "number";
    actionable?: boolean;
    inputLabel1?: string;
    onChange?: (value: number) => void;
    placeholder?: string;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value?: number | undefined;
}
interface CustomSearchInputProps extends CommonProps, SelectProps {
    type: "search";
}
interface CustomSelectInputProps extends CommonProps, SelectProps {
    type: "select";
}
interface CustomCheckBoxInput extends CommonProps, CheckboxProps {
    type: "checkbox";
}

type CustomInputProps =
    | CustomInputNumberProps
    | CustomSearchInputProps
    | CustomSelectInputProps
    | CustomCheckBoxInput;

export const CustomInput = (props: CustomInputProps) => {
    switch (props.type) {
        case "number":
            return <CustomNumberInput {...props} />;
        case "search":
            return <CustomSearchInput {...props} />;
        case "select":
            return <CustomSelectInput {...props} />;
        case "checkbox":
            return <CustomCheckBoxInput {...props} />;
        default:
            return null;
    }
};

const CustomNumberInput: React.FC<CustomInputNumberProps> = ({
    actionable = false,
    onChange,
    label,
    placeholder,
    show = true,
    inputLabel1 = "EGP",
    onPressEnter,
    value,
}: CustomInputNumberProps) => {
    const [number, setNumber] = useState<number | undefined>(value);
    if (!show) return null;

    return (
        <FloatLabel
            label={label}
            placeholder={placeholder as string}
            value={number !== undefined ? `${number}` : undefined}
            extraLeft
        >
            <InputNumber<number>
                className="input number-input"
                addonBefore={
                    <span style={{ paddingInline: "10px" }}>{inputLabel1}</span>
                }
                value={number}
                inputMode="tel"
                pattern="[0-9]*"
                onChange={(value) => {
                    setNumber(value ?? 0);
                    !actionable && onChange?.(value as number);
                }}
                status={number === 0 || (number && number < 0) ? "error" : ""}
                addonAfter={
                    actionable ? (
                        <CustomButton
                            type="primary"
                            style={{ backgroundColor: "#007646" }}
                            disabled={number ? number <= 0 : false}
                            onClick={() => onChange?.(number ?? 0)}
                        >
                            <Typography.Text strong style={{ color: "white" }}>
                                💸 Compare
                            </Typography.Text>
                        </CustomButton>
                    ) : null
                }
                onPressEnter={(e) => onPressEnter?.(e)}
            />
        </FloatLabel>
    );
};
const CustomSearchInput = ({
    options,
    onSelect,
    label,
    placeholder,
    value,
    show = true,
    ...props
}: CustomSearchInputProps) => {
    if (!show) return null;

    return (
        <FloatLabel
            label={label}
            placeholder={placeholder as string}
            value={value}
        >
            <Select
                className="search-input"
                showSearch
                filterOption={(input, option) =>
                    (
                        (option?.label as string).toLocaleLowerCase() ?? ""
                    ).includes(input.toLocaleLowerCase())
                }
                onChange={onSelect}
                options={options}
                optionRender={(option) => (
                    <Space direction="horizontal">
                        <Icon component={option.data.icon} />
                        <span style={{ whiteSpace: "normal" }}>
                            {option.label}
                        </span>
                    </Space>
                )}
                value={value}
                {...props}
            />
        </FloatLabel>
    );
};

const CustomSelectInput = ({
    options,
    onSelect,
    placeholder,
    label,
    value,
    show = true,
    ...props
}: CustomSelectInputProps) => {
    if (!show) return null;

    return (
        <FloatLabel
            label={label}
            placeholder={placeholder as string}
            value={value}
        >
            <Select
                className="select-input"
                onSelect={onSelect}
                options={options}
                value={value}
                {...props}
            />
        </FloatLabel>
    );
};
const CustomCheckBoxInput = ({
    label,
    onChange,
    show = true,
    ...props
}: CustomCheckBoxInput) => {
    if (!show) return null;

    return (
        <Checkbox onChange={onChange} {...props}>
            {label}
        </Checkbox>
    );
};
