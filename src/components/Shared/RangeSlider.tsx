import { CaretUpOutlined } from "@ant-design/icons";
import "@styles/RangeSlider.styles.scss";

export const RangeSlider = ({
    range,
    value,
}: {
    range: [number, number];
    value: number;
}) => {
    const [min, max] = range;
    const distance = max - min;
    let position = 0;

    if (value < min) position = min;
    if (value > max) position = max;
    if (value >= min && value <= max) position = (value / distance) * 100;

    return (
        <>
            <div className="container">
                <CaretUpOutlined
                    className="pointer"
                    style={{ left: `${position}%` }}
                ></CaretUpOutlined>
            </div>
        </>
    );
};
