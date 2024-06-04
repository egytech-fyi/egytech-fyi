import { Divider, Button } from "antd";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BaseComment } from "@components";
import logo from "/symbol.svg";
import "@styles/LandingPage.styles.scss";
import "@styles/SharedComponents.styles.scss";

const CurrencySalariesChart = () => {
    const options: Highcharts.Options = {
        chart: {
            type: "column",
            backgroundColor: "transparent",
            spacing: [10, 10, 10, 10],
        },
        title: {
            text: "Average Engineering Salaries with 3-5 Years of Experience",
        },
        xAxis: {
            categories: ["2017", "2021", "2022", "2024"],
            crosshair: true,
        },
        yAxis: [
            {
                title: {
                    text: "Salary in Thousands (EGP)",
                },
                labels: {
                    format: "{value}K",
                },
            },
            {
                title: {
                    text: "USD/EGP Exchange Rate",
                },
                labels: {
                    format: "{value} EGP",
                },
                opposite: true,
            },
        ],
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: "Software Engineers",
                type: "column",
                data: [13.7, 17.3, 18.6, 53.1],
            },
            {
                name: "USD/EGP Exchange Rate",
                type: "line",
                yAxis: 1,
                data: [18, 15, 20, 48],
                tooltip: {
                    valueSuffix: " EGP",
                },
            },
        ],
    };

    return (
        <div style={{ width: "100%" }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export const LandingPage = () => {
    return (
        <div style={{ width: "100%", marginBottom: "10px", marginTop: "20px" }}>
            <br />
            <div className="header-text">
                <img src={logo} style={{ height: "6rem" }} alt="" />
                <h1>egytech.fyi</h1>
            </div>
            <div className="header-subtext">
                <h3>
                    Discover Everything Tech in Egypt 🚀 — Your Ultimate Insight
                    Hub!
                </h3>
            </div>
            <Divider />
            <div className="comment-container">
                <BaseComment>
                    Did you know that although tech salaries have risen, they
                    are barely keeping pace with the devaluation of the Egyptian
                    pound?
                    <br />
                    <Divider />
                    <CurrencySalariesChart />
                    <br />
                    <Link to="/report">
                        <Button type="default">Read Our Full Report 💡</Button>
                    </Link>
                </BaseComment>
            </div>
            <Divider />
            <div className="comment-container">
                <BaseComment>
                    Feeling underpaid because you lack accurate market data?
                    You're not alone. Without reliable salary information, it's
                    hard to negotiate fair compensation. But with access to
                    up-to-date data, you can confidently advocate for yourself
                    and secure the pay you deserve. Don't settle for less –
                    empower yourself with the knowledge to thrive in your tech
                    career.
                    <br />
                    <br />
                    <Link to="/dashboard">
                        <Button type="default">
                            Access Salary Dashboard 💸
                        </Button>
                    </Link>
                </BaseComment>
            </div>
            <Divider />
            <div className="comment-container">
                <BaseComment>
                    Do you feel we need more accurate data? If you haven't
                    already participated in the survey, now's the time to share
                    your insights. Your participation helps us gather
                    comprehensive data that drives meaningful change in the tech
                    industry.
                    <br />
                    <br />
                    <Button
                        type="default"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfBAjjgs14SQ9i3Dgo6BDPp-m7sxqHaUt4kFOghV-44knIUPg/viewform"
                        target="_blank"
                    >
                        Participate Now 🙌🏻
                    </Button>
                </BaseComment>
            </div>
            <Divider />
        </div>
    );
};
