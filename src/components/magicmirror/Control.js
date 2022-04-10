import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Space, Radio, Input} from 'antd';
import * as d3 from 'd3'
import $ from "jquery"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


let ip={}
let content={}
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function readipData(){
    return new Promise(resolve => {
        d3.csv('panel.csv').then(d=>{
                d.map(x=>{
                ip[x['no']]=x['ip']
            })
            let name=Object.keys(ip);
            // console.log(name)
            resolve(name)
            // console.log(ip)
        })
    })
}

function setK() {
    return new Promise(resolve => {
        d3.csv('content.csv').then(d=>{
            d.map(x=>{
                content[x['name']]=x['path']
            })
            // console.log(content)
            let k=Object.keys(content);
            // console.log('k',k)
            resolve(k)
        })
    })
}

let p=setK();
let p2=readipData()

export function Control() {
    const [value, setValue] = React.useState('MIC');
    const [ipValue,setIP]=React.useState('1号机(MIC)');

    const[keys,setKeys]=React.useState(['wait']);
    const[ipName,setName]=React.useState(['wait']);
    const classes = useStyles();
    p.then((result)=>{
        setKeys(result)
        // console.log("keys:",keys)
    });

    p2.then((result)=>{
        setName(result)
    })

    function handleChange(event) {
        setValue(event.target.value);
        console.log(event.target.value)
    }

    function handleIPChoese(event) {
        setIP(event.target.value);
    }

    function sendA(event) {

        // console.log(event.currentTarget.value)
        const http=new XMLHttpRequest();
        const url=ip[event.currentTarget.value]+'/url/'+value;
        console.log(url)
        http.open('GET',url)
        http.send()
    }

    function sendVolume(event){
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/volume/'+event.currentTarget.value;
        http.open('GET',url)
        http.send()
    }

    function sendScroll(event) {
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/scroll/'+event.currentTarget.value;
        http.open('GET',url)
        http.send()

    }
    function sendOpenChrome(event) {
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/openChrome';
        console.log(url)
        http.open('GET',url);
        http.send()
    }

    function shutdown() {
        let message=window.confirm('确定关闭'+ipValue+'吗？')
        if (message===true){
            const http=new XMLHttpRequest();
            const url=ip[ipValue]+'/shutdown';
            http.open('GET',url);
            http.send()
        }
        else return
    }

    function openAllChrome(){
        for(let prop in ip){
            if(ip[prop]){
                // console.log(ip[prop])
                const http=new XMLHttpRequest();
                const url=ip[prop]+'/openChrome';
                http.open('GET',url);
                http.send()
            }
        }
    }

    function updateService() {
        let message=window.confirm('确定更新'+ipValue+'服务吗？')
        if(message===true){
            const http=new XMLHttpRequest();
            const url=ip[ipValue]+'/update';
            http.open('GET',url);
            http.send()
        }
        else return
    }

    function updateMain(){
        let message=window.confirm('确定更新'+ipValue+'服务吗？')
        if(message===true){
            const http=new XMLHttpRequest();
            const url='http://192.168.0.161:5556'+'/updateMain';
            // $.post(url,"copy file////Mypassport/Storage/content.csv . /Y",text)
            http.open('GET',url);
            http.send()
        }
        else return
    }

    function openPotPlayer(){
        for(let prop in ip){
            if(ip[prop]){
                // console.log(ip[prop])
                const http=new XMLHttpRequest();
                const url=ip[prop]+'/openPotPlayer/'+document.getElementById('videoname').value;
                http.open('GET',url);
                http.send()
            }
        }
    }
    function closePotPlayer() {
        for(let prop in ip){
            if(ip[prop]){
                // console.log(ip[prop])
                const http=new XMLHttpRequest();
                const url=ip[prop]+'/closePotPlayer';
                http.open('GET',url);
                http.send()
            }
        }
    }
    //全景视频使用
    function dragLeft(){
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/dragLeft/'+document.getElementById('leftPix').value;
        http.open('GET',url);
        http.send()
    }

    function dragRight() {
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/dragLeft/'+document.getElementById('rightPix').value;
        http.open('GET',url);
        http.send();
    }
    function sendCommand(){
            const url=ip[ipValue]+'/cmd';
            $.post(url,{cmd:document.getElementById('command').value})

    }

    function flip(){
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/flip';
        http.open('GET',url);
        http.send()
    }

    function sendDownload(){
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/download/'+document.getElementById('downloadfile').value;
        console.log(url)
        http.open('GET',url);
        http.send()
    }

    function closePreview() {
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/closepreview';
        http.open('GET',url);
        http.send()
    }

    function openEdge(){
        const http=new XMLHttpRequest();
        const url=ip[ipValue]+'/openEdge';
        http.open('GET',url);
        http.send()
    }
    return (
            <div >
                <Button type="primary" size="large" onClick={openAllChrome} style={{
                    position: 'absolute',
                    top: '-5%',
                    left: '50%',
                    'transform': 'translate(-50%,-50%)',
                    }}>
                打开所有浏览器
                </Button>
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '20%',
                    width: "50%",
                    height: "30%",
                }}>
                    <Space direction="vertical">
                        <Button type="primary" shape="round" disabled style={{color: "white", backgroundColor: "#303f9f", borderColor: "#303f9f"}}>拼接屏内容</Button>
                        <Radio.Group name="abc" onChange={handleChange} value={value}>
                            <Space direction="vertical">
                                {
                                    keys.map((value,index)=>{
                                        // console.log('d',value);
                                        if(index>=0 && index <10){
                                            return(
                                                <Radio value={value} style={{color: "white", fontSize: "20px"}}>{value}</Radio>   
                                            )
                                        }
                                        
                                    })
                                }
                            </Space>
                        </Radio.Group>
                    </Space>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '70%',
                    width: "50%",
                    height: "30%",
                }}>
                    <Space direction="vertical">
                        <Button type="primary" shape="round" disabled style={{color: "white", backgroundColor: "#303f9f", borderColor: "#303f9f"}}>拼接屏内容</Button>
                        <Radio.Group name="abc" onChange={handleChange} value={value}>
                            <Space direction="vertical">
                                {
                                    keys.map((value,index)=>{
                                        // console.log('d',value);
                                        if(index>=10 && index <19){
                                            return(
                                                <Radio value={value} style={{color: "white", fontSize: "20px"}}>{value}</Radio>   
                                            )
                                        }
                                        
                                    })
                                }
                            </Space>
                        </Radio.Group>
                    </Space>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '32%',
                    left: '20%',
                    width: "50%",
                    height: "30%",
                }}>
                    <Space direction="vertical">
                        <Button type="primary" shape="round" disabled style={{color: "white", backgroundColor: "#303f9f", borderColor: "#303f9f"}}>拼接屏内容</Button>
                        <Radio.Group name="abc" onChange={handleChange} value={value}>
                            <Space direction="vertical">
                                {
                                    keys.map((value,index)=>{
                                        // console.log('d',value);
                                        if(index>=19 && index <24){
                                            return(
                                                <Radio value={value} style={{color: "white", fontSize: "20px"}}>{value}</Radio>   
                                            )
                                        }
                                        
                                    })
                                }
                            </Space>
                        </Radio.Group>
                    </Space>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '32%',
                    left: '70%',
                    width: "50%",
                    height: "30%",
                }}>
                    <Space direction="vertical">
                        <Button type="primary" shape="round" disabled style={{color: "white", backgroundColor: "#303f9f", borderColor: "#303f9f"}}>拼接屏内容</Button>
                        <Radio.Group name="abc" onChange={handleChange} value={value}>
                            <Space direction="vertical">
                                {
                                    keys.map((value,index)=>{
                                        // console.log('d',value);
                                        if(index>=24){
                                            return(
                                                <Radio value={value} style={{color: "white",fontSize: "20px"}}>{value}</Radio>   
                                            )
                                        }
                                    })
                                }
                            </Space>
                        </Radio.Group>
                    </Space>
                </div>
                <Space style={{
                    position: 'absolute',
                    top: '50%',
                    left: '3%',
                    width: "100%", 
                }}
                size="large"
                >
                    {
                        ipName.map(((value, index) => {
                            return(
                                <Button type="primary" value={value} onClick={sendA} >
                                    {value}
                                </Button>
                            )
                        }))
                    }
                </Space>
                <Radio.Group  value={ipValue} onChange={handleIPChoese} style={{
                    position: 'absolute',
                    top: '60%',
                    left: '3%',
                    width: "100%", 
                }}>
                    <Space direction="vertical">
                        {
                        ipName.map((value,index)=>{
                            // console.log('d',value);
                            return(
                                    <Radio value={value} style={{color: "white", fontSize: "20px"}}>{value}</Radio>
                            )
                        })
                        }
                    </Space>
                </Radio.Group>
                <div style={{
                    position: 'absolute',
                    top: '60%',
                    left: '32%',
                    width: "72%", 
                    height: "16%",
                    backgroundColor: "white"
                }}>
                    <Space size="large">
                        <Button type="primary" danger value={'up'} onClick={sendVolume}> 增大音量</Button>
                        <Button type="primary" danger value={'down'} onClick={sendVolume} > 减小音量</Button>
                    </Space>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '63%',
                    left: '32%',
                    width: "100%", 
                }}>
                    <Space size="large">
                        <Button type="primary" danger  value={'front'} onClick={sendScroll}> 向前滑动</Button>
                        <Button type="primary" danger  value={'back'} onClick={sendScroll} > 向后滑动</Button>
                    </Space>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '66%',
                    left: '32%',
                    width: "100%", 
                }}>
                    <Space size="large">
                        <Button type="primary" danger onClick={sendOpenChrome}> 打开浏览器</Button>
                        <Button type="primary" danger  onClick={shutdown}> 关机</Button>
                        <Button type="primary" danger onClick={openEdge}>打开Edge浏览器</Button>
                    </Space>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '69%',
                    left: '32%',
                    width: "100%", 
                }}>
                    <Space size="large">
                        <Button type="primary" danger onClick={updateService}> 更新服务</Button>
                        <Button type="primary" danger onClick={updateMain}> 从git上更新主服务</Button>
                    </Space>
                </div>
                <div className={classes.root} style={{
                    position: 'absolute',
                    top: '75%',
                    left: '32%',
                    width: "72%", 
                    height: "20%",
                    backgroundColor: "white"
                }}>
                    <TextField id="videoname" label="输入视频名称" variant="outlined" defaultValue="vr.webm"/>
                    <Button type="primary" danger onClick={openPotPlayer}> 打开全景视频</Button>
                    <Button type="primary" danger onClick={closePotPlayer}> 关闭全景视频</Button>
                    <Button type="primary" danger onClick={closePreview}> 关闭预览</Button>
                </div>
                <div className={classes.root} style={{
                    position: 'absolute',
                    top: '82%',
                    left: '32%',
                    width: "72%", 
                    backgroundColor: "white"
                }}>
                    <TextField id="leftPix" label="输入距离" variant="outlined" defaultValue={'50'}/>
                    <Button type="primary" danger onClick={dragLeft}> 向左调整</Button>
                    <TextField id="rightPix" label="输入距离" variant="outlined" defaultValue={'50'}/>
                    <Button type="primary" danger onClick={dragRight}> 向右调整</Button>
                    <Button type="primary" danger onClick={flip}> 视频左右翻转</Button>
                </div>
                <div className={classes.root} style={{
                    position: 'absolute',
                    top: '88%',
                    left: '32%',
                    width: "72%", 
                    backgroundColor: "white"
                }}>
                    <TextField id="command" label="输入指令" variant="outlined" defaultValue={"copy file////Mypassport/Storage/360video . /Y"}/>
                    <Button type="primary" danger onClick={sendCommand}> 发送指令</Button>
                </div>
                <div className={classes.root} style={{
                    position: 'absolute',
                    top: '94%',
                    left: '32%',
                    width: "72%", 
                    backgroundColor: "white"
                }}>
                    <TextField id="downloadfile" label="文件名" variant="outlined" defaultValue={"vr.webm"}/>
                    <Button type="primary" danger onClick={sendDownload}> 下载文件</Button>
                </div>
            </div>
        );
}