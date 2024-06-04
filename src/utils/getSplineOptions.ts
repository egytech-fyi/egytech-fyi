import { PointOptionsObject, SeriesOptionsType } from "highcharts";
import { SPLINE_OPTIONS } from "@constants";
import { getCategories } from "@functions";
import { generateHueSequence } from "./generateHueSequence";
import { getUniqueCategories } from "./getUniqueCategories";
export interface SplineDataType {
    name: string;
    className?: string;
    data: [string, number][];
}
export function getSplineOptions(data: SplineDataType[]): Highcharts.Options {
    const series: SeriesOptionsType[] = data.map((dataItem, index) => {
        const { categoriesMap } = getCategories(dataItem.data);

        return {
            type: "spline",
            name: dataItem.name,
            data: dataItem.data.map((item) => {
                const [bucket, value] = item;
                return {
                    id: bucket,
                    x: categoriesMap.get(bucket),
                    y: value,
                    marker: {},
                } as PointOptionsObject;
            }),
            legendSymbol: "lineMarker",
            legendIndex: 1,
            className: dataItem.className,
            color: generateHueSequence(data.length).getColor(index),
        };
    });

    return {
        ...SPLINE_OPTIONS,
        series,
        xAxis: {
            ...SPLINE_OPTIONS.xAxis,
            categories: getUniqueCategories(data),
        },
    };
}
