import { Typography } from "antd";
import { Stats as StatsType } from "@types";
import "@styles/Stats.styles.scss";

interface StatsContainerProps extends StatsType {}

function formatNumber(num: number | undefined): string {
    if (!num) return "";
    if (num < 1000) {
        return num.toString();
    } else if (num < 1000000) {
        return Math.floor(num / 1000) + "K";
    } else {
        return Math.floor(num / 1000000) + "M";
    }
}
function formatNumberWithCommas(num: number | undefined): string {
    if (!num) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const StatsContainer = (props: StatsContainerProps) => {
    const {
        totalCount,
        median,
        p20Compensation,
        p75Compensation,
        p90Compensation,
    } = props;
    const currency = "EGP";

    return (
        <div className="stats-outer-container">
            <div className="stats-inner-container median">
                {median ? (
                    <div className="stat">
                        <Typography.Text className="stat-value median">
                            {currency} {formatNumberWithCommas(median)}
                        </Typography.Text>
                        <Typography.Text className="stat-label">
                            Median
                        </Typography.Text>
                    </div>
                ) : null}
                {totalCount ? (
                    <div className="stat mobile">
                        <Typography.Text className="stat-value">
                            {totalCount}
                        </Typography.Text>
                        <Typography.Text className="stat-label">
                            Participants
                        </Typography.Text>
                    </div>
                ) : null}
            </div>
            <div className="stats-inner-container percentile-container">
                {p20Compensation ? (
                    <div className="stat">
                        <div className="indicator p20"></div>
                        <Typography.Text className="stat-value">
                            {currency} {formatNumber(p20Compensation)}
                        </Typography.Text>
                        <Typography.Text className="stat-label">
                            20TH%
                        </Typography.Text>
                    </div>
                ) : null}
                {p75Compensation ? (
                    <div className="stat">
                        <div className="indicator p75"></div>
                        <Typography.Text className="stat-value">
                            {currency} {formatNumber(p75Compensation)}
                        </Typography.Text>
                        <Typography.Text className="stat-label">
                            75TH%
                        </Typography.Text>
                    </div>
                ) : null}
                {p90Compensation ? (
                    <div className="stat">
                        <div className="indicator p90"></div>
                        <Typography.Text className="stat-value">
                            {currency} {formatNumber(p90Compensation)}
                        </Typography.Text>
                        <Typography.Text className="stat-label">
                            90TH%
                        </Typography.Text>
                    </div>
                ) : null}
                {totalCount ? (
                    <div className="stat laptop">
                        <Typography.Text className="stat-value">
                            {totalCount}
                        </Typography.Text>
                        <Typography.Text className="stat-label">
                            Participants
                        </Typography.Text>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
