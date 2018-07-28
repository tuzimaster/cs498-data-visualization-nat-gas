﻿$(document).ready(function () {
    //SetUpResidentialAndCommercialPriceGraph();
    SetupProductionOfNiobaraBase();
    SetUpResidentialAndCommercialPriceGraph();
});

function SetUpResidentialAndCommercialPriceGraph() {
    console.log("Setup Residential/Commercial Graph");
    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // parse the date / time
    var parseTime = d3.timeParse("%m/%d/%Y");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#residentialCommercial")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // Get the data
    console.log("get the data from csv");
    d3.csv("/data/Natural_Gas_Prices_in_Colorado.csv",
        function (error, data) {
            console.log("Get the data");
            // format the data

            console.log(data);
            var mappedData = new Array(data.length);

            for (var i = 0; i < data.length; i++) {
                mappedData[i] = {
                    date: parseTime(data[i].date),
                    residentialPrice: Number(data[i].residentialPrice),
                    commercialPrice: Number(data[i].commercialPrice)
                };
            }

            console.log(mappedData);

            console.log("get the scales");
            // Scale the range of the data
            x.domain(d3.extent(mappedData, function (d) { return d.date; }));

            var maxCommercialPrice =  d3.max(mappedData, function (d) { return d.commercialPrice; });
            var maxResidentialPrice = d3.max(mappedData, function (d) { return d.residentialPrice; });

            var maxPrice = null;

            if (maxResidentialPrice >= maxCommercialPrice) {
                maxPrice = maxResidentialPrice;
            } else {
                maxPrice = maxCommercialPrice;
            }

            console.log("Max Price: " + maxPrice);

            y.domain([0, maxPrice]);

            console.log("add the line");
            // Add the valueline path.
            var residentialPriceLine = d3.line()
                .x(function (d) { return x(d.date); })
                .y(function (d) { return y(d.residentialPrice); });

            var commercialPriceLine = d3.line()
                .x(function (d) { return x(d.date); })
                .y(function (d) { return y(d.commercialPrice); });

            var lineGraph = svg.append("path")
                .attr("d", residentialPriceLine(mappedData))
                .attr("stroke", "blue")
                .attr("stroke-width", 2)
                .attr("fill", "none");

            var commercialLineGraph = svg.append("path")
                .attr("d", commercialPriceLine(mappedData))
                .attr("stroke", "red")
                .attr("stroke-width", 2)
                .attr("fill", "none");

            console.log("add the x axis");
            // Add the X Axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            console.log("add the y axis");
            // Add the Y Axis
            svg.append("g")
                .call(d3.axisLeft(y));
        });
}

function SetupProductionOfNiobaraBase() {
    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // parse the date / time
    var parseTime = d3.timeParse("%m/%d/%Y");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    
    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#niobaraProduction")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Get the data
    console.log("get the data from csv");
    d3.csv("/data/dpr-data_csv.csv",
        function(error, data) {
            console.log("Get the data");
            // format the data

            console.log(data);
            var mappedData = new Array(data.length);

            for (var i = 0; i < data.length; i++) {
                mappedData[i] = {
                    date: parseTime(data[i].date),
                    Total_Production: Number(data[i].Total_Production)
                };
            }

            console.log(mappedData);

            console.log("get the scales");
            // Scale the range of the data
            x.domain(d3.extent(mappedData, function (d) { return d.date; }));
            y.domain([0, d3.max(mappedData, function (d) { return d.Total_Production; })]);

            console.log("add the line");
            // Add the valueline path.
            var valueline = d3.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.Total_Production); });

            var lineGraph = svg.append("path")
                .attr("d", valueline(mappedData))
            .attr("stroke", "blue")
            .attr("stroke-width", 2)
            .attr("fill", "none");

            console.log("add the x axis");
            // Add the X Axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            console.log("add the y axis");
            // Add the Y Axis
            svg.append("g")
                .call(d3.axisLeft(y));
        });
}