// import {Scrubber} from "@mbostock/scrubber"

import * as d3 from 'd3'

let height=560;
let width=720;

let margin = ({top: 20, right: 20, bottom: 35, left: 40});

let y = d3.scaleLinear([14, 86], [height - margin.bottom, margin.top]);
let x = d3.scaleLog([200, 1e5], [margin.left, width - margin.right]);
let data=[]

let color = d3.scaleOrdinal(data.map(d => d.region), d3.schemeCategory10).unknown("black");
let radius = d3.scaleSqrt([0, 5e8], [0, width / 24]);

let yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Life expectancy (years)"));

let xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80, ","))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", width)
        .attr("y", margin.bottom - 4)
        .attr("fill", "currentColor")
        .attr("text-anchor", "end")
        .text("Income per capita (dollars) →"));




let bisectYear=d3.bisector(([year]) => year).left;






function valueAt(values,year){
    const i=bisectYear(values,year,0,values.length-1).right;
    const a = values[i];
    if (i > 0) {
        const b = values[i - 1];
        const t = (year - a[0]) / (b[0] - a[0]);
        return a[1] * (1 - t) + b[1] * t;
    }
    return a[1];
}


function dataAt(year) {
    return data.map(d => ({
        name: d.name,
        region: d.region,
        income: valueAt(d.income, year),
        population: valueAt(d.population, year),
        lifeExpectancy: valueAt(d.lifeExpectancy, year)
    }));
}



let grid = g => g
    .attr("stroke", "currentColor")
    .attr("stroke-opacity", 0.1)
    .call(g => g.append("g")
        .selectAll("line")
        .data(x.ticks())
        .join("line")
        .attr("x1", d => 0.5 + x(d))
        .attr("x2", d => 0.5 + x(d))
        .attr("y1", margin.top)
        .attr("y2", height - margin.bottom))
    .call(g => g.append("g")
        .selectAll("line")
        .data(y.ticks())
        .join("line")
        .attr("y1", d => 0.5 + y(d))
        .attr("y2", d => 0.5 + y(d))
        .attr("x1", margin.left)
        .attr("x2", width - margin.right));


export function getData() {
    d3.json('./nations.json').then(d=>{
        data=d;
    })

}


const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);

svg.append("g")
    .call(xAxis);

svg.append("g")
    .call(yAxis);

svg.append("g")
    .call(grid);

const circle = svg.append("g")
    .attr("stroke", "black")
    .selectAll("circle")
    .data(dataAt(1800), d => d.name)
    .join("circle")
    .sort((a, b) => d3.descending(a.population, b.population))
    .attr("cx", d => x(d.income))
    .attr("cy", d => y(d.lifeExpectancy))
    .attr("r", d => radius(d.population))
    .attr("fill", d => color(d.region))
    .call(circle => circle.append("title")
        .text(d => [d.name, d.region].join("\n")));

// return Object.assign(svg.node(), {
//     update(data) {
//         circle.data(data, d => d.name)
//             .sort((a, b) => d3.descending(a.population, b.population))
//             .attr("cx", d => x(d.income))
//             .attr("cy", d => y(d.lifeExpectancy))
//             .attr("r", d => radius(d.population));
//     }
// });
