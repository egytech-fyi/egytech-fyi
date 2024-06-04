import { useMemo, useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SplineDataType, getSplineOptions } from "../../utils/getSplineOptions";
import "@styles/chart.styles.scss";

export const Spline = (
    props: HighchartsReact.Props & {
        data: SplineDataType[];
        salaryBucketIndex: number | undefined;
    }
) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const options = useMemo(
        () => getSplineOptions(props?.data || []),
        [props?.data]
    );

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
            {...props}
        />
    );
};
