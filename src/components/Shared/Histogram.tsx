import { useMemo, useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Annotations from "highcharts/modules/annotations";
import { getHistogramOptions } from "../../utils/getHistogramOptions";
import "@styles/chart.styles.scss";

Annotations(Highcharts);

export const Histogram = (
    props: HighchartsReact.Props & {
        data: [string, number][];
        salaryBucketIndex: number | undefined;
    }
) => {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const options = useMemo(
        () =>
            getHistogramOptions(
                props?.data || [],
                props.salaryBucketIndex ?? -1
            ),
        [props?.data, props.salaryBucketIndex]
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
