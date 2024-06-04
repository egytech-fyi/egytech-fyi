import { Divider } from "antd";
import Highcharts, {
    SeriesOptionsType,
    TooltipFormatterContextObject,
    AxisLabelsFormatterContextObject,
} from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HCMore from "highcharts/highcharts-more";
import { StepCard, BaseComment } from "@components";
import "@styles/MainContainer.styles.scss";

// Initialize the additional modules
HCMore(Highcharts);

const TechnologyPackedChart = () => {
    const tech = [
        {
            name: "Programming Languages",
            data: [
                {
                    name: "C#",
                    value: 16.9,
                },
                {
                    name: "Java",
                    value: 18.2,
                },
                {
                    name: "PHP",
                    value: 8.6,
                },
                {
                    name: "JavaScript",
                    value: 43.2,
                },
                {
                    name: "Python",
                    value: 30.2,
                },
                {
                    name: "Go",
                    value: 4.9,
                },
                {
                    name: "Rust",
                    value: 0.4,
                },
                {
                    name: "Ruby",
                    value: 3.1,
                },
                {
                    name: "C/C++",
                    value: 6.6,
                },
                {
                    name: "TypeScript",
                    value: 31.4,
                },
                {
                    name: "Scala",
                    value: 0.4,
                },
                {
                    name: "Kotlin",
                    value: 4.2,
                },
                {
                    name: "Swift",
                    value: 3.5,
                },
                {
                    name: "R",
                    value: 0.6,
                },
                {
                    name: "Dart",
                    value: 2.3,
                },
            ],
        },
        {
            name: "Backend",
            data: [
                {
                    name: "ASP.Net",
                    value: 17.9,
                },
                {
                    name: "Express",
                    value: 12.1,
                },
                {
                    name: "Spring",
                    value: 11.6,
                },
                {
                    name: "Laravel",
                    value: 7.9,
                },
                {
                    name: "Django",
                    value: 6.4,
                },
                {
                    name: "FastAPI",
                    value: 6,
                },
                {
                    name: "Flask",
                    value: 5.6,
                },
                {
                    name: "RoR",
                    value: 3.7,
                },
                {
                    name: "Nest.js",
                    value: 7.5,
                },
            ],
        },
        {
            name: "Frontend",
            data: [
                {
                    name: "ReactJS",
                    value: 26.9,
                },
                {
                    name: "Angular",
                    value: 16.4,
                },
                {
                    name: "Next.js",
                    value: 7.8,
                },
                {
                    name: "Vue.js",
                    value: 7.6,
                },
                {
                    name: "JQuery",
                    value: 5.5,
                },
            ],
        },
        {
            name: "Databases",
            data: [
                {
                    name: "Postgres",
                    value: 36.5,
                },
                {
                    name: "MySQL",
                    value: 36.4,
                },
                {
                    name: "SQLite",
                    value: 8.3,
                },
                {
                    name: "MongoDB",
                    value: 25.1,
                },
                {
                    name: "SQL Server",
                    value: 26.4,
                },
                {
                    name: "Redis",
                    value: 14.7,
                },
                {
                    name: "ElasticSearch",
                    value: 10.3,
                },
                {
                    name: "Oracle",
                    value: 10.7,
                },
                {
                    name: "Firebase",
                    value: 7.6,
                },
            ],
        },
        {
            name: "Cloud Providers",
            data: [
                {
                    name: "AWS",
                    value: 50.7,
                },
                {
                    name: "GCP",
                    value: 11.2,
                },
                {
                    name: "Azure",
                    value: 28.1,
                },
                {
                    name: "Cloudflare❤️",
                    value: 4.4,
                },
                {
                    name: "Firebase ",
                    value: 12.4,
                },
                {
                    name: "Self-hosted",
                    value: 23,
                },
            ],
        },
    ];

    const options: Highcharts.Options = {
        chart: {
            type: "packedbubble",
            height: "100%",
            backgroundColor: "transparent",
        },
        title: {
            text: "",
        },
        tooltip: {
            useHTML: true,
            pointFormat: "<b>{point.name}:</b> {point.value}% of responses",
        },
        plotOptions: {
            packedbubble: {
                minSize: "2%",
                maxSize: "100%",
                layoutAlgorithm: {
                    splitSeries: true,
                    seriesInteraction: false,
                    dragBetweenSeries: true,
                    parentNodeLimit: false,
                },
                dataLabels: {
                    enabled: true,
                    filter: {
                        property: "y",
                        operator: ">",
                        value: 4,
                    },
                    format: "{point.name}",
                    style: {
                        color: "black",
                        textOutline: "none",
                        fontWeight: "normal",
                    },
                },
            },
        },
        series: tech as SeriesOptionsType[],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const ProductBarChart = () => {
    const options = {
        chart: {
            type: "bar",
            height: 400,
        },
        title: {
            text: "",
        },
        xAxis: {
            categories: [
                "Notion",
                "Jira",
                "Figma",
                "Trello",
                "Miro",
                "Hotjar",
                "Confluence",
                "Looker",
                "Power BI",
                "Amplitude",
                "ProductBoard",
                "Aha",
                "Tableau",
                "SurveyMonkey",
                "Typeform",
                "ClickUp",
                "Adobe XD",
            ],
        },
        yAxis: {
            title: {
                text: "Percentages",
            },
            labels: {
                formatter: function (
                    this: AxisLabelsFormatterContextObject
                ): string {
                    return this.value + "%";
                },
            },
        },
        tooltip: {
            formatter: function (this: TooltipFormatterContextObject): string {
                return (
                    "<b>" +
                    this.x +
                    "</b>: Mentioned " +
                    this.y +
                    "% by the participants"
                );
            },
        },
        series: [
            {
                name: "Percentages",
                data: [
                    24.1, 75.9, 63, 24.1, 48.1, 13, 29.6, 7, 4, 16.7, 11.1, 5.6,
                    5.6, 11.1, 5.6, 5.6, 7.4,
                ],
            },
        ] as SeriesOptionsType[],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const PricingPieChart = () => {
    const titleData = [
        {
            name: "Product Managers",
            y: 12.2,
        },
        {
            name: "Executives",
            y: 34.7,
        },
        {
            name: "Sales & Marketing",
            y: 28.6,
        },
        {
            name: "RevOps",
            y: 4.1,
        },
    ];

    const options: Highcharts.Options = {
        chart: {
            type: "pie",
            backgroundColor: "transparent", // Make chart background transparent
            spacing: [10, 10, 10, 10], // Add spacing around the chart
        },
        title: {
            text: "",
        },
        tooltip: {
            formatter: function () {
                return (
                    "<b>" +
                    this.point.name +
                    "</b>: " +
                    Highcharts.numberFormat(this.percentage, 1) +
                    "%"
                );
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                },
                showInLegend: true,
            },
        },
        series: [
            {
                type: "pie", // Explicitly define the type as 'pie'
                name: "Pricing",
                data: titleData,
            },
        ] as SeriesOptionsType[],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

const ProductAnalysisPieChart = () => {
    const titleData = [
        {
            name: "Sheets/Excel",
            y: 56.8,
        },
        {
            name: "SQL",
            y: 20.5,
        },
        {
            name: "Programming",
            y: 9.1,
        },
        {
            name: "Others",
            y: 13.1,
        },
    ];

    const options: Highcharts.Options = {
        chart: {
            type: "pie",
            backgroundColor: "transparent", // Make chart background transparent
            spacing: [10, 10, 10, 10], // Add spacing around the chart
        },
        title: {
            text: "",
        },
        tooltip: {
            formatter: function () {
                return (
                    "<b>" +
                    this.point.name +
                    "</b>: " +
                    Highcharts.numberFormat(this.percentage, 1) +
                    "%"
                );
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                },
                showInLegend: true,
            },
        },
        series: [
            {
                type: "pie", // Explicitly define the type as 'pie'
                name: "Pricing",
                data: titleData,
            },
        ] as SeriesOptionsType[],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export const Technology = () => {
    return (
        <div>
            <div id="trends" style={{ width: "100%", marginBottom: "10px" }}>
                <div className="header-subtext">
                    <h2>
                        {" "}
                        <b>Trends 🚀</b>{" "}
                    </h2>
                </div>

                <div className="salary-comment-container">
                    <BaseComment>
                        This year we collected insights about popular
                        programming languages, frameworks, infrstructure and
                        tools <br />
                    </BaseComment>
                </div>
            </div>
            <Divider />
            <div
                id="technology"
                style={{ width: "100%", marginBottom: "10px" }}
            >
                <StepCard>
                    <div className="salary-comment-container">
                        <BaseComment>
                            JavaScript, TypeScript and Python were mentioned by
                            the majority in most used programming languages
                            &lt;/&gt;
                        </BaseComment>
                    </div>
                    <div className="salary-comment-container">
                        <BaseComment>
                            AWS is still by far the winner between cloud
                            providers ☁️
                        </BaseComment>
                    </div>
                    <div className="salary-comment-container">
                        <BaseComment>
                            SQL Databases are still the go-to database solutions
                            🛢
                        </BaseComment>
                    </div>
                    <Divider />
                    <div className="salary-comment-container">
                        <BaseComment>
                            React is the most used Frontend framework 🖥️
                        </BaseComment>
                    </div>
                    <div className="salary-comment-container">
                        <BaseComment>
                            Express has ascended in rankings since 2022, now
                            claiming the second position, following ASP.Net, in
                            comparison to Spring. ⚙️
                        </BaseComment>
                    </div>
                    <Divider />
                    <TechnologyPackedChart />
                </StepCard>
            </div>
            <Divider />
            <div
                id="product-tools"
                style={{ width: "100%", marginBottom: "10px" }}
            >
                <div className="salary-comment-container">
                    <BaseComment>
                        Let's dive deeper and find out which tools are most
                        popular between Product pros. <br />
                    </BaseComment>
                </div>
            </div>
            <div style={{ width: "100%", marginBottom: "10px" }}>
                <StepCard>
                    <div className="salary-comment-container">
                        <BaseComment>
                            Jira, Figma and Miro were mentioned most by Product
                            Managers, Designers and Owners 💡
                        </BaseComment>
                    </div>
                    <ProductBarChart />
                </StepCard>
            </div>
            <Divider />
            <div
                id="product-decision-making"
                style={{ width: "100%", marginBottom: "10px" }}
            >
                <div className="salary-comment-container">
                    <BaseComment>
                        I've long been intrigued by the decision-making process
                        behind pricing and packaging, so I asked product folks.{" "}
                        <br />
                    </BaseComment>
                </div>
            </div>
            <div style={{ width: "100%", marginBottom: "10px" }}>
                <StepCard>
                    <div className="salary-comment-container">
                        <BaseComment>
                            Product Managers were responsible of packaging and
                            pricing only 15.3% of the time 📦
                        </BaseComment>
                    </div>
                    <PricingPieChart />
                </StepCard>
            </div>
            <Divider />
            <div
                id="product-data-analysis"
                style={{ width: "100%", marginBottom: "10px" }}
            >
                <div className="salary-comment-container">
                    <BaseComment>
                        Product pros. typically dedicate a substantial amount of
                        time to analyzing metrics and data, We were keen to
                        discover the tools they rely on for this task. 🔍 <br />
                    </BaseComment>
                </div>
            </div>
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <StepCard>
                    <ProductAnalysisPieChart />
                </StepCard>
            </div>
            <Divider />
        </div>
    );
};
