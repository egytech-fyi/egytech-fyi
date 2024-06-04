export const HISTOGRAM_OPTIONS: Highcharts.Options = {
    chart: {
        type: "column",
        backgroundColor: "transparent",
    },
    title: {
        text: "Salary Range Distribution Among Participants",
        style: { color: "black" },
    },
    subtitle: {
        text: "Identify Your Position in the Salary Spectrum",
        style: { color: "black", fontSize: "14px" },
        useHTML: true,
    },
    xAxis: {
        type: "category",
        labels: {
            autoRotation: [-45, -90],
            style: {
                fontSize: "13px",
                color: "black",
                fontFamily: "Verdana, sans-serif",
            },
        },
        title: {
            text: "Total Monthly Net Salary in EGP (Basic + Bonus)",
            style: { color: "black" },
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: "Number of Participants",
            style: { color: "black" },
        },
        labels: { style: { color: "black" } },
    },
    legend: {
        enabled: false,
    },
    tooltip: {
        pointFormat: "Number of Participants: <b>{point.y}</b>",
    },
};

export const SERIES_STATIC_OPTIONS = {
    colorByPoint: true,
    groupPadding: 0,

    dataLabels: {
        enabled: true,
        color: "#FFFFFF",
        rotation: -90,
        inside: false,
        verticalAlign: "top",
        format: "{point.y}", // one decimal
        y: 10, // 10 pixels down from the top
        style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
        },
    },
};
