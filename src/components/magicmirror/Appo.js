import React from 'react';
import { Calendar , Badge, DatePicker , TimePicker , Select ,Button,} from 'antd';
const { Option } = Select;
let tem_mon, tem_dat, tem_con;
let tem_tim, tem_rea;
let listData = [];

const { RangePicker } = TimePicker;

function getMonthData(value) {
    
}
function dateCellRender(value) {
    // console.log('日期',value.month())
    return (
      <ul className="events">
        {(listData || []).map(item => (
            item.date == value.date()  && item.month == value.month() + 1?
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li> : null  
        ))}
      </ul>
    );
}
function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
}

function onChange_date(date, dateString) {
    console.log(date, dateString);
    tem_mon = date.month() + 1;
    tem_dat = date.date();
    console.log('月份',tem_mon)
    console.log('日期',tem_dat)
}

function onChange_time(value) {
    // console.log(time, timeString);
    tem_tim = value;
    console.log('内容',tem_tim)
}

function handleChange(value) {
    console.log(`selected ${value}`);
    tem_rea = value;
    tem_con = tem_tim + " "+ tem_rea;
    console.log('最终内容',tem_con);
}



export default class Appo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flag: false,
            
        }
        if(localStorage.getItem("list")!=null){
            listData = JSON.parse(localStorage.getItem("list"))
        }else{
            localStorage.setItem("list",JSON.stringify(listData))
        }
    }
      

    onBtClick = e => {
        if (listData == null) {
            listData = [{month: tem_mon, date:tem_dat,type: 'success',content: tem_con }]
        }
        listData = [...listData, {month: tem_mon, date:tem_dat,type: 'success',content: tem_con }]
        this.setState({
            flag: true,
        })
        localStorage.setItem("list",JSON.stringify(listData))
    }

    Clickclear = e =>{
        this.setState({
            flag: false,
        })
        listData = []
        localStorage.setItem("list",JSON.stringify([]))
    }
    
    
    render() {

        return(
            <div style={{
            position: 'absolute',
            top: '0',
            left: '0%',
            width: '100%',
            height: '100%'}}> 
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    'transform': 'translate(-50%,-50%)',
                    'line-height': '2em',
                    'fontSize': '5em',
                }}>实验室预约日历</div>
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    width: '100%',
                }}>
                    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
                </div>
                <div style={{
                    position: 'absolute',
                    top: '69%',
                    left: '50%',
                    'transform': 'translate(-50%,-50%)',
                    'lineHeight': '2em',
                    'fontSize': '3em',
                }}>请选择预约时间及事项</div>
                <div style = {{
                    position: 'absolute',
                    top: '75%',
                    left: '0',
                }}>
                    <DatePicker 
                        onChange={onChange_date}
                        style={{
                            height:'40px',
                            width:'200px'
                        }} 
                    />
                </div>
                <div style = {{
                    position: 'absolute',
                    top: '75%',
                    left: '25%',
                    }}>
                    <Select  placeholder="请选择预约时间"  style={{ width: '200px'}}  size='large'  onChange={onChange_time}>
                        <Option value="上午">上午</Option>
                        <Option value="下午">下午</Option>
                        <Option value="晚上">晚上</Option>
                    </Select>
                </div>
                <div style = {{
                    position: 'absolute',
                    top: '75%',
                    left: '50%',
                    }}>
                    <Select  placeholder="请选择预约事项"  style={{ width: '200px'}}  size='large'  onChange={handleChange}>
                        <Option value="自行参观">自行参观</Option>
                        <Option value="交流学习">交流学习</Option>
                        <Option value="举办活动">举办活动</Option>
                        <Option value="其他">其他</Option>
                    </Select>
                </div>
                <div style = {{
                    position: 'absolute',
                    top: '75%',
                    left: '75%',
                    'fontWeight': 350,
                    }}>
                    <Button type="primary" size='large' onClick={this.onBtClick}> 提交预约</Button>
                </div>
                <div style = {{
                    position: 'absolute',
                    top: '75%',
                    left: '90%',
                    'fontWeight': 350,
                    }}>
                    <Button type="primary" size='large' onClick={this.Clickclear}> 清空预约信息</Button>
                </div>
            </div>
        )
    }
    
}