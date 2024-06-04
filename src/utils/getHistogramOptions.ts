import { SeriesOptionsType } from "highcharts";
import { HISTOGRAM_OPTIONS, SERIES_STATIC_OPTIONS } from "@constants";
import { getCategories } from "@functions";
import { getHistogramBarColor } from "./getHistogramBarColor";

export function getHistogramOptions(
    data: [string, number][],
    salaryBucketIndex: number
): Highcharts.Options {
    const { categoriesMap, categoriesArray } = getCategories(data);
    const series: SeriesOptionsType[] = [
        {
            ...SERIES_STATIC_OPTIONS,
            type: "column",
            data: data.map((item, index) => {
                const [bucket, value] = item;
                return {
                    id: bucket,
                    x: categoriesMap.get(bucket),
                    y: value,
                    color: getHistogramBarColor(
                        data.length,
                        index,
                        salaryBucketIndex
                    ),
                };
            }),
        },
    ];

    return {
        ...HISTOGRAM_OPTIONS,
        xAxis: {
            ...HISTOGRAM_OPTIONS.xAxis,
            categories: categoriesArray,
        },
        series,
        annotations: [
            {
                labels: [
                    {
                        point: {
                            xAxis: 0,
                            yAxis: 0,
                            x: salaryBucketIndex,
                            y: data[salaryBucketIndex][1],
                        },
                        text: "You're here",
                        verticalAlign: "bottom",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        padding: 6,
                        style: {
                            opacity: 1,
                            fontSize: "16px",
                            color: "#000",
                            fontWeight: "600",
                        },
                    },
                ],
            },
        ],
    };
}
