import React,{Fragment}from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route,  Switch,Link } from 'react-router-dom'

import {City} from './components/city/city';
import RouteMap from "./components/routeMap";
import Covid from "./components/covid-19";
import AirQuality from "./components/airQuality";
import {StreamG} from "./components/streamgraph/main";
import {BarG} from "./components/Barchart/main";
import {Panel} from "./components/panel/control";
import LineChart from "./components/lineChart/main";
import './index.css';
import Ad from "./components/sliderexample"
import News from "./components/WorkFlow/news"
import Welcome from "./components/front_glass/welcome"
import Wallpaper from "./components/front_glass/wallpaper.js"
import Meetingwel from "./components/front_glass/meetingwel.js"
import Mirror from "./components/magicmirror/Mirror.js"
import Map from "./components/Map.js"
import A1 from "./rank/A1.js"
import A2 from "./rank/A2.js"
import A3 from "./rank/A3.js"
import A4 from "./rank/A4.js"
import A5 from "./rank/A5.js"
import P1 from "./new/p1.js"
import P2 from "./new/p2.js"
import P3 from "./new/p3.js"
import P4 from "./new/p4.js"
import P5 from "./new/p5.js"
import Cm from "./components/covid_music.js"
import Gpu from "./components/gpu/g.js"
import Olympic from "./components/olmpic.js"
import Covidmusic from "./components/covid_music.js"
const map = document.getElementById("map");

function Getpage(){
    return (
        <Router>
            <Route>
                <Route exact path="/">
                    <RouteMap />
                </Route>
                <Route path="/covid">
                    <Covid />
                </Route>
                <Route path="/airquality">
                    <AirQuality />
                </Route>
                <Route path="/bubble">
                    <City />
                </Route>
                <Route path="/stream">
                    <StreamG />
                </Route>
                <Route path="/bar">
                    <BarG />
                </Route>
                <Route path="/control">
                    <Panel/>
                </Route>
                <Route path={"/slider"}>
                    <Ad/>
                </Route>
                <Route path={"/news"}>
                    <News/>
                </Route>
                <Route path={"/news"}>
                    <News/>
                </Route>
                <Route path={"/welcome"}>
                    <Welcome/>
                </Route>
                <Route path={"/wallpaper"}>
                    <Wallpaper/>
                </Route>
		<Route path={"/meetingwel"}>
		    <Meetingwel/>
		</Route>
		<Route path="/magicmirror">
		    <Mirror/>
		</Route>
        <Route path="/map">
		    <Map />
		</Route>
		<Route path="/A1">
		    <A1 />
		</Route>
		<Route path="/A2">
		    <A2 />
		</Route>
		<Route path="/A3">
		    <A3 />
		</Route>
		<Route path="/A4">
		    <A4 />
		</Route>
		<Route path="/A5">
		    <A5 />
		</Route>
        <Route path="/P1">
		    <P1 />
		</Route>
		<Route path="/P2">
		    <P2 />
		</Route>
		<Route path="/P3">
		    <P3 />
		</Route>
		<Route path="/P4">
		    <P4 />
		</Route>
		<Route path="/P5">
		    <P5 />
		</Route>
		<Route path="/covid_music">
		    <Cm />
		</Route>
		<Route path="/gpu">
		    <Gpu />
		</Route>
		<Route path="/olympic">
		    <Olympic />
		</Route>
		<Route path="/covidmusic">
		    <Covidmusic />
		</Route>	
            </Route>
        </Router>
    )
}


// getData();

// ReactDOM.render(
//         <Map />,
//     map
// );

ReactDOM.render(
    <Getpage />,
    map
)

// ReactDOM.render(
//     <Getpage/>
//     ,map
// )
