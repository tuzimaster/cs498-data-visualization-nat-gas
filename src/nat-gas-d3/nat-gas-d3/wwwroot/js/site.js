$(document).ready(function () {
    //SetUpResidentialAndCommercialPriceGraph();
    SetupProductionOfNiobaraBase();
    SetUpResidentialAndCommercialPriceGraph(1,1);
});

$("#btnViewAbout").click(function() {
    $("#about").addClass("graph-hidden");
    $("#start").removeClass("graph-hidden");
    $("#aboutthevisualization").removeClass("graph-hidden");
});

//btnGoToAboutBack
$("#btnGoToAboutBack").click(function () {
    $("#about").removeClass("graph-hidden");
    $("#start").addClass("graph-hidden");
    $("#aboutthevisualization").addClass("graph-hidden");
});

$("#btnStart").click(function() {
    $("#start").addClass("graph-hidden");
    $("#rescomm").removeClass("graph-hidden");
    $("#residentialCommercialGraphBlock").removeClass("graph-hidden");
    $("#aboutthevisualization").addClass("graph-hidden");
});

$("#btnGoToStart").click(function () {
    $("#start").removeClass("graph-hidden");
    $("#rescomm").addClass("graph-hidden");
    $("#residentialCommercialGraphBlock").addClass("graph-hidden");
    $("#aboutthevisualization").removeClass("graph-hidden");
});

$("#btnGoToNiobara").click(function () {
    $("#nioblock").removeClass("graph-hidden");
    $("#rescomm").addClass("graph-hidden");
    $("#residentialCommercialGraphBlock").addClass("graph-hidden");
    $("#niobaraProductionGraphBlock").removeClass("graph-hidden");
});

//btnGoToResCom
$("#btnGoToResCom").click(function () {
    $("#nioblock").addClass("graph-hidden");
    $("#rescomm").removeClass("graph-hidden");
    $("#residentialCommercialGraphBlock").removeClass("graph-hidden");
    $("#niobaraProductionGraphBlock").addClass("graph-hidden");
});

$("#Residential_Price").change(function () {
    var residential = 0;
    var commercial = 0;

    if ($('#Residential_Price').is(":checked")) {
        residential = 1;
    }

    if ($('#Commercial_Price').is(":checked")) {
        commercial = 1;
    }

    d3.select("#residentialCommercial").selectAll("path").remove();
    SetUpResidentialAndCommercialPriceGraph(residential, commercial);
});

$("#Commercial_Price").change(function () {
    var residential = 0;
    var commercial = 0;

    if ($('#Residential_Price').is(":checked")) {
        residential = 1;
    }

    if ($('#Commercial_Price').is(":checked")) {
        commercial = 1;
    }

    d3.select("#residentialCommercial").selectAll("path").remove();
    SetUpResidentialAndCommercialPriceGraph(residential, commercial);
});


function SetUpResidentialAndCommercialPriceGraph(setupResidential, setupCommercial) {
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

            if (setupResidential === 1) {
                var lineGraph = svg.append("path")
                    .attr("d", residentialPriceLine(mappedData))
                    .attr("stroke", "blue")
                    .attr("stroke-width", 2)
                    .attr("fill", "none");    
            }
            
            if (setupCommercial === 1) {
                var commercialLineGraph = svg.append("path")
                    .attr("d", commercialPriceLine(mappedData))
                    .attr("stroke", "red")
                    .attr("stroke-width", 2)
                    .attr("fill", "none");
            }

            console.log("add the x axis");
            // Add the X Axis
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            console.log("add the y axis");
            // Add the Y Axis
            svg.append("g")
                .call(d3.axisLeft(y));

            var legend_keys = [{ label: "Residential", color: "blue" }, { label: "Commercial", color: "red" }];

            var lineLegend = svg.selectAll(".lineLegend").data(legend_keys)
                .enter().append("g")
                .attr("class", "lineLegend")
                .attr("transform", function (d, i) {
                    return "translate(" + width + "," + (i * 20) + ")";
                });

            lineLegend.append("text").text(function (d) { return d.label; })
                .attr("transform", "translate(15,9)"); //align texts with boxes

            lineLegend.append("rect")
                .attr("fill", function (d, i) { return d.color; })
                .attr("width", 10).attr("height", 10);

            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Residential Price: USD per Thousand Cubic Feet");  

            svg.append("text")
                .attr("transform",
                    "translate(" + (width / 2) + " ," +
                    (height + margin.top + 20) + ")")
                .style("text-anchor", "middle")
                .text("Date");
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

            var legend_keys = ["Production"];

            var lineLegend = svg.selectAll(".lineLegend").data(legend_keys)
                .enter().append("g")
                .attr("class", "lineLegend")
                .attr("transform", function (d, i) {
                    return "translate(" + width + "," + (i * 20) + ")";
                });

            lineLegend.append("text").text(function (d) { return d; })
                .attr("transform", "translate(15,9)"); //align texts with boxes

            lineLegend.append("rect")
                .attr("fill", function (d, i) { return "blue"; })
                .attr("width", 10).attr("height", 10);

            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left - 25)
                .attr("x", 0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Total production in Mcf");

            svg.append("text")
                .attr("transform",
                    "translate(" + (width / 2) + " ," +
                    (height + margin.top + 20) + ")")
                .style("text-anchor", "middle")
                .text("Date");
        });
}

