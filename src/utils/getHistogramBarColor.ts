import {
    afterMidPointBarColor,
    beforeMidPointBarColor,
    defaultBarColor,
} from "@constants";

export function getHistogramBarColor(
    numberOFBars: number,
    barIndex: number,
    belongingBarIndex: number
) {
    if (barIndex === belongingBarIndex) {
        if (barIndex <= numberOFBars / 2) {
            return beforeMidPointBarColor;
        } else {
            return afterMidPointBarColor;
        }
    }

    return defaultBarColor;
}
