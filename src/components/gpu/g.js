import React from 'react';
import ReactDOM from 'react-dom';
import * as echarts from 'echarts';
import * as d3 from 'd3'
import { Menu ,Button } from 'antd';
import 'antd/dist/antd.css';
import Panelchart from './panel';




export default class App extends React.Component {
	constructor() {
		super()
		this.state= {
			num: '',
			time: '',
        	gpumes5: {
				usage: '',
				gpuname: '',
				gputem: '',
				gpumem: '',
				gputotalmem: '',
			},
			gpumes12: {
				usage1: '',
				gpuname1: '',
				gputem1: '',
				gpumem1: '',
				gputotalmem1: '',
				usage2: '',
				gpuname2: '',
				gputem2: '',
				gpumem2: '',
				gputotalmem2: '',
			},
			gpumes13: {
				usage1: '',
				gpuname1: '',
				gputem1: '',
				gpumem1: '',
				gputotalmem1: '',
				usage2: '',
				gpuname2: '',
				gputem2: '',
				gpumem2: '',
				gputotalmem2: '',
			},
			gpumes14: {
				usage1: '',
				gpuname1: '',
				gputem1: '',
				gpumem1: '',
				gputotalmem1: '',
				usage2: '',
				gpuname2: '',
				gputem2: '',
				gpumem2: '',
				gputotalmem2: '',
			},
			gpumes15: {
				usage1: '',
				gpuname1: '',
				gputem1: '',
				gpumem1: '',
				gputotalmem1: '',
				usage2: '',
				gpuname2: '',
				gputem2: '',
				gpumem2: '',
				gputotalmem2: '',
			},
			gpumes16: {
				usage1: '',
				gpuname1: '',
				gputem1: '',
				gpumem1: '',
				gputotalmem1: '',
				usage2: '',
				gpuname2: '',
				gputem2: '',
				gpumem2: '',
				gputotalmem2: '',
			},
			test1: 60,
			test2: 70,
			test3: 90
		}
	}

	handleClick = e => {
		// console.log('click ', e);
		this.setState({ num: e.key });
	  };

	getdata() {
		let list = ['5', '12', '13', '14', '15', '16']
		for(let i = 0; i < 6; i++) {
			d3.json('http://10.72.100.6:8889/'+list[i]).then(d=>{
			// console.log('num2:', d.gpu_usage1)
			// setTimeout(()=>{},2000)
			switch(i) {
				case 0:
					{
					// console.log("字符串的长度",d.gpu_usage.length)
					if(d.gpu_usage.length==2){
						d.gpu_usage = Number(d.gpu_usage[0])
					}else if(d.gpu_usage.length==3){
						d.gpu_usage = Number(d.gpu_usage[0])*10+Number(d.gpu_usage[1])
					}else{
						d.gpu_usage = Number(d.gpu_usage[0])*100+Number(d.gpu_usage[1])*10+Number(d.gpu_usage[2])
					}
					// console.log('之后的数值',d.gpu_usage)
					this.setState({
						gpumes5: {
							usage: d.gpu_usage,
							gpuname: d.gpu_name,
							gputem: d.gpu_tmp,
							gpumem: d.gpu_usedmem,
							gputotalmem: d.gpu_totmem,
						}
					});
					// console.log(this.state)
					return;
				}
				case 1:
					{
						if(d.gpu_usage1.length==2){
							d.gpu_usage1 = Number(d.gpu_usage1[0])
						}else if(d.gpu_usage1.length==3){
							d.gpu_usage1 = Number(d.gpu_usage1[0])*10+Number(d.gpu_usage1[1])
						}else{
							d.gpu_usage1 = Number(d.gpu_usage1[0])*100+Number(d.gpu_usage1[1])*10+Number(d.gpu_usage1[2])
						}
						if(d.gpu_usage2.length==2){
							d.gpu_usage2 = Number(d.gpu_usage2[0])
						}else if(d.gpu_usage2.length==3){
							d.gpu_usage2 = Number(d.gpu_usage2[0])*10+Number(d.gpu_usage2[1])
						}else{
							d.gpu_usage2 = Number(d.gpu_usage2[0])*100+Number(d.gpu_usage2[1])*10+Number(d.gpu_usage2[2])
						}
						// console.log('test',d.gpu_usage1)
						this.setState({
						time: d.time,
						gpumes12: {
							usage1: d.gpu_usage1,
							gpuname1: d.gpu_name1,
							gputem1: d.gpu_tmp1,
							gpumem1: d.gpu_usedmem1,
							gputotalmem1: d.gpu_totmem1,
							usage2: d.gpu_usage2,
							gpuname2: d.gpu_name2,
							gputem2: d.gpu_tmp2,
							gpumem2: d.gpu_usedmem2,
							gputotalmem2: d.gpu_totmem2,
						}
					});
					return;}
				case 2:
					{
						if(d.gpu_usage1.length==2){
							d.gpu_usage1 = Number(d.gpu_usage1[0])
						}else if(d.gpu_usage1.length==3){
							d.gpu_usage1 = Number(d.gpu_usage1[0])*10+Number(d.gpu_usage1[1])
						}else{
							d.gpu_usage1 = Number(d.gpu_usage1[0])*100+Number(d.gpu_usage1[1])*10+Number(d.gpu_usage1[2])
						}
						if(d.gpu_usage2.length==2){
							d.gpu_usage2 = Number(d.gpu_usage2[0])
						}else if(d.gpu_usage2.length==3){
							d.gpu_usage2 = Number(d.gpu_usage2[0])*10+Number(d.gpu_usage2[1])
						}else{
							d.gpu_usage2 = Number(d.gpu_usage2[0])*100+Number(d.gpu_usage2[1])*10+Number(d.gpu_usage2[2])
						}
						this.setState({
						gpumes13: {
							usage1: d.gpu_usage1,
							gpuname1: d.gpu_name1,
							gputem1: d.gpu_tmp1,
							gpumem1: d.gpu_usedmem1,
							gputotalmem1: d.gpu_totmem1,
							usage2: d.gpu_usage2,
							gpuname2: d.gpu_name2,
							gputem2: d.gpu_tmp2,
							gpumem2: d.gpu_usedmem2,
							gputotalmem2: d.gpu_totmem2,
						}
					});
					return;}
				case 3:
					{
						if(d.gpu_usage1.length==2){
							d.gpu_usage1 = Number(d.gpu_usage1[0])
						}else if(d.gpu_usage1.length==3){
							d.gpu_usage1 = Number(d.gpu_usage1[0])*10+Number(d.gpu_usage1[1])
						}else{
							d.gpu_usage1 = Number(d.gpu_usage1[0])*100+Number(d.gpu_usage1[1])*10+Number(d.gpu_usage1[2])
						}
						if(d.gpu_usage2.length==2){
							d.gpu_usage2 = Number(d.gpu_usage2[0])
						}else if(d.gpu_usage2.length==3){
							d.gpu_usage2 = Number(d.gpu_usage2[0])*10+Number(d.gpu_usage2[1])
						}else{
							d.gpu_usage2 = Number(d.gpu_usage2[0])*100+Number(d.gpu_usage2[1])*10+Number(d.gpu_usage2[2])
						}
						this.setState({
						gpumes14: {
							usage1: d.gpu_usage1,
							gpuname1: d.gpu_name1,
							gputem1: d.gpu_tmp1,
							gpumem1: d.gpu_usedmem1,
							gputotalmem1: d.gpu_totmem1,
							usage2: d.gpu_usage2,
							gpuname2: d.gpu_name2,
							gputem2: d.gpu_tmp2,
							gpumem2: d.gpu_usedmem2,
							gputotalmem2: d.gpu_totmem2,
						}
					});
					return;}
				case 4:
					{
						if(d.gpu_usage1.length==2){
							d.gpu_usage1 = Number(d.gpu_usage1[0])
						}else if(d.gpu_usage1.length==3){
							d.gpu_usage1 = Number(d.gpu_usage1[0])*10+Number(d.gpu_usage1[1])
						}else{
							d.gpu_usage1 = Number(d.gpu_usage1[0])*100+Number(d.gpu_usage1[1])*10+Number(d.gpu_usage1[2])
						}
						if(d.gpu_usage2.length==2){
							d.gpu_usage2 = Number(d.gpu_usage2[0])
						}else if(d.gpu_usage2.length==3){
							d.gpu_usage2 = Number(d.gpu_usage2[0])*10+Number(d.gpu_usage2[1])
						}else{
							d.gpu_usage2 = Number(d.gpu_usage2[0])*100+Number(d.gpu_usage2[1])*10+Number(d.gpu_usage2[2])
						}
						this.setState({
						gpumes15: {
							usage1: d.gpu_usage1,
							gpuname1: d.gpu_name1,
							gputem1: d.gpu_tmp1,
							gpumem1: d.gpu_usedmem1,
							gputotalmem1: d.gpu_totmem1,
							usage2: d.gpu_usage2,
							gpuname2: d.gpu_name2,
							gputem2: d.gpu_tmp2,
							gpumem2: d.gpu_usedmem2,
							gputotalmem2: d.gpu_totmem2,
						}
					});
					return;}
				case 5:
					{
						if(d.gpu_usage1.length==2){
							d.gpu_usage1 = Number(d.gpu_usage1[0])
						}else if(d.gpu_usage1.length==3){
							d.gpu_usage1 = Number(d.gpu_usage1[0])*10+Number(d.gpu_usage1[1])
						}else{
							d.gpu_usage1 = Number(d.gpu_usage1[0])*100+Number(d.gpu_usage1[1])*10+Number(d.gpu_usage1[2])
						}
						if(d.gpu_usage2.length==2){
							d.gpu_usage2 = Number(d.gpu_usage2[0])
						}else if(d.gpu_usage2.length==3){
							d.gpu_usage2 = Number(d.gpu_usage2[0])*10+Number(d.gpu_usage2[1])
						}else{
							d.gpu_usage2 = Number(d.gpu_usage2[0])*100+Number(d.gpu_usage2[1])*10+Number(d.gpu_usage2[2])
						}
						this.setState({
						gpumes16: {
							usage1: d.gpu_usage1,
							gpuname1: d.gpu_name1,
							gputem1: d.gpu_tmp1,
							gpumem1: d.gpu_usedmem1,
							gputotalmem1: d.gpu_totmem1,
							usage2: d.gpu_usage2,
							gpuname2: d.gpu_name2,
							gputem2: d.gpu_tmp2,
							gpumem2: d.gpu_usedmem2,
							gputotalmem2: d.gpu_totmem2,
						}
					});
					return;}
			}
			
		})
		console.log(this.state)
		}
	}

    componentDidMount() {	
		this.getdata()
		// this.timerID = setInterval(()=>{
		// 	let m = this.state.num
		// 	this.getdata();

		// 	this.setState({num:'17'})
		// 	this.setState({num:m})
		// 	}, 30000)
	}

	handleSwitch = () =>{
		switch(this.state.num) {
			case "0":           //    最近更新时间  6台机器的显卡占比    
				return  (<div>  
							<div style={{position: 'absolute', top: '6%', left: '1%',width: '100%',height: '4%'}}> 最近更新时间:{this.state.time} </div> 
							<div style={{position: 'absolute', top: '12%', left: '1%',width: '100%',height: '4%'}}> 总体平均占用 </div> 
							<div style={{position: 'absolute', top: '10%', left: '2.5%',width: '30%',height: '45%'}}><Panelchart name={5} data={this.state.gpumes5.usage*1.0}/></div> 
							<div style={{position: 'absolute', top: '10%', left: '35%',width: '30%',height: '45%'}}><Panelchart name={12} data={this.state.gpumes12.usage1*0.5+this.state.gpumes12.usage2*0.5}/></div>
							<div style={{position: 'absolute', top: '10%', left: '67.5%',width: '30%',height: '45%'}}><Panelchart name={13} data={this.state.gpumes13.usage1*0.5+this.state.gpumes13.usage2*0.5}/></div>
							<div style={{position: 'absolute', top: '55%', left: '2.5%',width: '30%',height: '45%'}}><Panelchart name={14} data={this.state.gpumes14.usage1*0.5+this.state.gpumes14.usage2*0.5}/></div>
							<div style={{position: 'absolute', top: '55%', left: '35%',width: '30%',height: '45%'}}><Panelchart name={15} data={this.state.gpumes15.usage1*0.5+this.state.gpumes15.usage2*0.5}/></div>
							<div style={{position: 'absolute', top: '55%', left: '67.5%',width: '30%',height: '45%'}}><Panelchart name={16} data={this.state.gpumes16.usage1*0.5+this.state.gpumes16.usage2*0.5}/></div>
						</div>);      
			case "5":
				return (<div> 
							<div style={{position: 'absolute', top: '6%', left: '1%',width: '100%',height: '4%'}}> 5号机详情 </div> 
							<div style={{position: 'absolute', top: '12%', left: '1%',width: '100%',height: '4%'}}> 最近更新时间:{this.state.time} </div> 
							<div style={{position: 'absolute', top: '8%', left: '50%',width: '100%',height: '4%'}}> 内存占用： 32% </div> 
							<div style={{position: 'absolute', top: '14%', left: '50%',width: '100%',height: '4%'}}> 硬盘占用： 60% </div> 
							<div style={{position: 'absolute', top: '60%', left: '20%',width: '100%',height: '4%'}}> GPU型号:{this.state.gpumes5.gpuname} </div>
							<div style={{position: 'absolute', top: '70%', left: '20%',width: '100%',height: '4%'}}> GPU温度:{this.state.gpumes5.gputem} </div>
							<div style={{position: 'absolute', top: '80%', left: '20%',width: '100%',height: '4%'}}> GPU显存使用:{this.state.gpumes5.gpumem+'/'+this.state.gpumes5.gputotalmem} </div>
							<div style={{position: 'absolute', top: '20%', left: '10%',width: '35%',height: '45%'}}><Panelchart name={5.0} data={this.state.gpumes5.usage*1.0}/></div> 
					   </div>);
			case "12":
				return (<div> 
							<div style={{position: 'absolute', top: '6%', left: '1%',width: '100%',height: '4%'}}> 12号机详情 </div> 
							<div style={{position: 'absolute', top: '12%', left: '1%',width: '100%',height: '4%'}}> 最近更新时间:{this.state.time} </div> 
							<div style={{position: 'absolute', top: '8%', left: '50%',width: '100%',height: '4%'}}> 内存占用： 5% </div> 
							<div style={{position: 'absolute', top: '14%', left: '50%',width: '100%',height: '4%'}}> 硬盘占用： 17% </div> 
							<div style={{position: 'absolute', top: '60%', left: '20%',width: '100%',height: '4%'}}> GPU1型号:{this.state.gpumes12.gpuname1} </div>
							<div style={{position: 'absolute', top: '70%', left: '20%',width: '100%',height: '4%'}}> GPU1温度:{this.state.gpumes12.gputem1} </div>
							<div style={{position: 'absolute', top: '80%', left: '20%',width: '100%',height: '4%'}}> GPU1显存使用:{this.state.gpumes12.gpumem1+'/'+this.state.gpumes12.gputotalmem1} </div>
							<div style={{position: 'absolute', top: '20%', left: '10%',width: '35%',height: '45%'}}><Panelchart name={12.1} data={this.state.gpumes12.usage1*1.0}/></div> 
							<div style={{position: 'absolute', top: '60%', left: '70%',width: '100%',height: '4%'}}> GPU2型号:{this.state.gpumes12.gpuname2} </div>
							<div style={{position: 'absolute', top: '70%', left: '70%',width: '100%',height: '4%'}}> GPU2温度:{this.state.gpumes12.gputem2} </div>
							<div style={{position: 'absolute', top: '80%', left: '70%',width: '100%',height: '4%'}}> GPU2显存使用:{this.state.gpumes12.gpumem2+'/'+this.state.gpumes12.gputotalmem2} </div>
							<div style={{position: 'absolute', top: '20%', left: '60%',width: '35%',height: '45%'}}><Panelchart name={12.2} data={this.state.gpumes12.usage2*1.0}/></div> 
					   </div>);
			case "13":
				return (<div> 
							<div style={{position: 'absolute', top: '6%', left: '1%',width: '100%',height: '4%'}}> 13号机详情 </div> 
							<div style={{position: 'absolute', top: '12%', left: '1%',width: '100%',height: '4%'}}> 最近更新时间:{this.state.time} </div> 
							<div style={{position: 'absolute', top: '8%', left: '50%',width: '100%',height: '4%'}}> 内存占用： 7% </div> 
							<div style={{position: 'absolute', top: '14%', left: '50%',width: '100%',height: '4%'}}> 硬盘占用： 26% </div> 
							<div style={{position: 'absolute', top: '60%', left: '20%',width: '100%',height: '4%'}}> GPU1型号:{this.state.gpumes13.gpuname1} </div>
							<div style={{position: 'absolute', top: '70%', left: '20%',width: '100%',height: '4%'}}> GPU1温度:{this.state.gpumes13.gputem1} </div>
							<div style={{position: 'absolute', top: '80%', left: '20%',width: '100%',height: '4%'}}> GPU1显存使用:{this.state.gpumes13.gpumem1+'/'+this.state.gpumes13.gputotalmem1} </div>
							<div style={{position: 'absolute', top: '20%', left: '10%',width: '35%',height: '45%'}}><Panelchart name={13.1} data={this.state.gpumes13.usage1*1.0}/></div> 
							<div style={{position: 'absolute', top: '60%', left: '70%',width: '100%',height: '4%'}}> GPU2型号:{this.state.gpumes13.gpuname2} </div>
							<div style={{position: 'absolute', top: '70%', left: '70%',width: '100%',height: '4%'}}> GPU2温度:{this.state.gpumes13.gputem2} </div>
							<div style={{position: 'absolute', top: '80%', left: '70%',width: '100%',height: '4%'}}> GPU2显存使用:{this.state.gpumes13.gpumem2+'/'+this.state.gpumes13.gputotalmem2} </div>
							<div style={{position: 'absolute', top: '20%', left: '60%',width: '35%',height: '45%'}}><Panelchart name={13.2} data={this.state.gpumes13.usage2*1.0}/></div> 
					   </div>);
			case "14":
				return (<div>  
							<div style={{position: 'absolute', top: '6%', left: '1%',width: '100%',height: '4%'}}> 14号机详情 </div> 
							<div style={{position: 'absolute', top: '12%', left: '1%',width: '100%',height: '4%'}}> 最近更新时间:{this.state.time} </div> 
							<div style={{position: 'absolute', top: '8%', left: '50%',width: '100%',height: '4%'}}> 内存占用： 11% </div> 
							<div style={{position: 'absolute', top: '14%', left: '50%',width: '100%',height: '4%'}}> 硬盘占用： 72% </div> 
							<div style={{position: 'absolute', top: '60%', left: '20%',width: '100%',height: '4%'}}> GPU1型号:{this.state.gpumes14.gpuname1} </div>
							<div style={{position: 'absolute', top: '70%', left: '20%',width: '100%',height: '4%'}}> GPU1温度:{this.state.gpumes14.gputem1} </div>
							<div style={{position: 'absolute', top: '80%', left: '20%',width: '100%',height: '4%'}}> GPU1显存使用:{this.state.gpumes14.gpumem1+'/'+this.state.gpumes14.gputotalmem1} </div>
							<div style={{position: 'absolute', top: '20%', left: '10%',width: '35%',height: '45%'}}><Panelchart name={14.1} data={this.state.gpumes14.usage1*1.0}/></div> 
							<div style={{position: 'absolute', top: '60%', left: '70%',width: '100%',height: '4%'}}> GPU2型号:{this.state.gpumes14.gpuname2} </div>
							<div style={{position: 'absolute', top: '70%', left: '70%',width: '100%',height: '4%'}}> GPU2温度:{this.state.gpumes14.gputem2} </div>
							<div style={{position: 'absolute', top: '80%', left: '70%',width: '100%',height: '4%'}}> GPU2显存使用:{this.state.gpumes14.gpumem2+'/'+this.state.gpumes14.gputotalmem2} </div>
							<div style={{position: 'absolute', top: '20%', left: '60%',width: '35%',height: '45%'}}><Panelchart name={14.2} data={this.state.gpumes14.usage2*1.0}/></div>    
					</div>);
			case "15":
				return (<div> 
							<div style={{position: 'absolute', top: '6%', left: '1%',width: '100%',height: '4%'}}> 15号机详情 </div> 
							<div style={{position: 'absolute', top: '12%', left: '1%',width: '100%',height: '4%'}}> 最近更新时间:{this.state.time} </div> 
							<div style={{position: 'absolute', top: '8%', left: '50%',width: '100%',height: '4%'}}> 内存占用： 32% </div> 
							<div style={{position: 'absolute', top: '14%', left: '50%',width: '100%',height: '4%'}}> 硬盘占用： 42% </div> 
							<div style={{position: 'absolute', top: '60%', left: '20%',width: '100%',height: '4%'}}> GPU1型号:{this.state.gpumes15.gpuname1} </div>
							<div style={{position: 'absolute', top: '70%', left: '20%',width: '100%',height: '4%'}}> GPU1温度:{this.state.gpumes15.gputem1} </div>
							<div style={{position: 'absolute', top: '80%', left: '20%',width: '100%',height: '4%'}}> GPU1显存使用:{this.state.gpumes15.gpumem1+'/'+this.state.gpumes15.gputotalmem1} </div>
							<div style={{position: 'absolute', top: '20%', left: '10%',width: '35%',height: '45%'}}><Panelchart name={15.1} data={this.state.gpumes15.usage1*1.0}/></div> 
							<div style={{position: 'absolute', top: '60%', left: '70%',width: '100%',height: '4%'}}> GPU2型号:{this.state.gpumes15.gpuname2} </div>
							<div style={{position: 'absolute', top: '70%', left: '70%',width: '100%',height: '4%'}}> GPU2温度:{this.state.gpumes15.gputem2} </div>
							<div style={{position: 'absolute', top: '80%', left: '70%',width: '100%',height: '4%'}}> GPU2显存使用:{this.state.gpumes15.gpumem2+'/'+this.state.gpumes15.gputotalmem2} </div>
							<div style={{position: 'absolute', top: '20%', left: '60%',width: '35%',height: '45%'}}><Panelchart name={15.2} data={this.state.gpumes15.usage2*1.0}/></div> 
					</div>);
			case "16":
				return (<div>  
							<div style={{position: 'absolute', top: '6%', left: '1%',width: '100%',height: '4%'}}> 16号机详情 </div> 
							<div style={{position: 'absolute', top: '12%', left: '1%',width: '100%',height: '4%'}}> 最近更新时间:{this.state.time} </div> 
							<div style={{position: 'absolute', top: '8%', left: '50%',width: '100%',height: '4%'}}> 内存占用： 8% </div> 
							<div style={{position: 'absolute', top: '14%', left: '50%',width: '100%',height: '4%'}}> 硬盘占用： 60% </div> 
							<div style={{position: 'absolute', top: '60%', left: '20%',width: '100%',height: '4%'}}> GPU1型号:{this.state.gpumes16.gpuname1} </div>
							<div style={{position: 'absolute', top: '70%', left: '20%',width: '100%',height: '4%'}}> GPU1温度:{this.state.gpumes16.gputem1} </div>
							<div style={{position: 'absolute', top: '80%', left: '20%',width: '100%',height: '4%'}}> GPU1显存使用:{this.state.gpumes16.gpumem1+'/'+this.state.gpumes16.gputotalmem1} </div>
							<div style={{position: 'absolute', top: '20%', left: '10%',width: '35%',height: '45%'}}><Panelchart name={16.1} data={this.state.gpumes16.usage1*1.0}/></div> 
							<div style={{position: 'absolute', top: '60%', left: '70%',width: '100%',height: '4%'}}> GPU2型号:{this.state.gpumes16.gpuname2} </div>
							<div style={{position: 'absolute', top: '70%', left: '70%',width: '100%',height: '4%'}}> GPU2温度:{this.state.gpumes16.gputem2} </div>
							<div style={{position: 'absolute', top: '80%', left: '70%',width: '100%',height: '4%'}}> GPU2显存使用:{this.state.gpumes16.gpumem2+'/'+this.state.gpumes16.gputotalmem2} </div>
							<div style={{position: 'absolute', top: '20%', left: '60%',width: '35%',height: '45%'}}><Panelchart name={16.2} data={this.state.gpumes16.usage2*1.0}/></div> 
					   </div>);
			case "17":
				return <div> </div>;			
		}
	}

	render() {
		const { current } = this.state;
		// console.log(this.state.gpumes12.usage1[0])
		// console.log(this.state.gpumes12.usage1[1])
		// this.timerID = setInterval(()=>this.getdata(), 100000)
		return(
			<div style={{fontSize: '2em'}}>
				{/* <Menu style={{position: "absolute", top: '0%', left:'0%',height:'5%',width:'100%'}}onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
					<Menu.Item key="0" >
						总体概览
					</Menu.Item>
					<Menu.Item key="5">
						5号机详情
					</Menu.Item>
					<Menu.Item key="12">
						12号机详情
					</Menu.Item>
					<Menu.Item key="13">
						13号机详情
					</Menu.Item>
					<Menu.Item key="14">
						14号机详情
					</Menu.Item>
					<Menu.Item key="15">
						15号机详情
					</Menu.Item>
					<Menu.Item key="16">
						16号机详情
					</Menu.Item>
				</Menu> */}
				<Button style={{position: 'absolute', top: '0', left: '0', height: '4%',width: '8%',color: 'black',backgroundColor: 'white'}}type="primary" onClick={()=>{this.setState({num: "17"});this.setState({num: "0"});}}>
					总体占用概览
				</Button>
				<Button style={{position: 'absolute', top: '0', left: '8%', height: '4%',width: '8%',color: 'black',backgroundColor: 'white'}}type="primary" onClick={()=>{this.setState({num: "17"});this.setState({num: "5"});}}>
					5号机详情
				</Button>
				<Button style={{position: 'absolute', top: '0', left: '16%', height: '4%',width: '8%',color: 'black',backgroundColor: 'white'}}type="primary" onClick={()=>{this.setState({num: "17"});this.setState({num: "12"});}}>
					12号机详情
				</Button>
				<Button style={{position: 'absolute', top: '0', left: '24%', height: '4%',width: '8%',color: 'black',backgroundColor: 'white'}}type="primary" onClick={()=>{this.setState({num: "17"});this.setState({num: "13"});}}>
					13号机详情
				</Button>
				<Button style={{position: 'absolute', top: '0', left: '32%', height: '4%',width: '8%',color: 'black',backgroundColor: 'white'}}type="primary" onClick={()=>{this.setState({num: "17"});this.setState({num: "14"});}}>
					14号机详情
				</Button>
				<Button style={{position: 'absolute', top: '0', left: '40%', height: '4%',width: '8%',color: 'black',backgroundColor: 'white'}}type="primary" onClick={()=>{this.setState({num: "17"});this.setState({num: "15"});}}>
					15号机详情
				</Button>
				<Button style={{position: 'absolute', top: '0', left: '48%', height: '4%',width: '8%',color: 'black',backgroundColor: 'white'}}type="primary" onClick={()=>{this.setState({num: "17"});this.setState({num: "16"});}}>
					16号机详情
				</Button>
				<div>
					{
						this.handleSwitch()
					}
				</div>
			</div>
		)
	}
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

