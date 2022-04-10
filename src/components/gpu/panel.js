import React from 'react';
import ReactDOM from 'react-dom';
import * as echarts from 'echarts';

export default class Panelchart extends React.Component {
	constructor() {
		super()
		this.state={
			name:" ",
		}
	}
    render() {
        const {data} = this.props
        return(
            <div id={this.props.name} style={{position: 'absolute',left:'5%',top:'5%',width:'90%',height:'90%'}}>

            </div>
        )
    }

    componentDidMount() {
      	var chartDom = document.getElementById(this.props.name);
		var myChart = echarts.init(chartDom);
		var option;
		option = {
			tooltip: {
				formatter: '{a} <br/>{b} : {c}%'
			},
			series: [
				{
				name: 'Usage',
				type: 'gauge',
				min: 0,
				max: 100,
				progress: {
					show: true
				},
				detail: {
					valueAnimation: true,
					formatter: '{value}',
				},
				data: [
					{
					value: this.props.data,
					name: this.props.name + "号机占用率"
					}
				]
				}
			]
			};

		option && myChart.setOption(option);
    }
}