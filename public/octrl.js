import React ,{Component} from 'react';
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import VideocamIcon from '@material-ui/icons/Videocam';
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SettingsIcon from '@material-ui/icons/Settings';
let con = ""
let ip = {
    '拼接屏1号机': 'http://192.168.0.161:7777',
    '拼接屏2号机': 'http://192.168.0.143:7777',
    '拼接屏3号机': 'http://192.168.0.165:7777',
    '拼接屏4号机': 'http://192.168.0.173:7777',
    '拼接屏5号机': 'http://192.168.0.197:7777',
    '弧形墙投影': 'http://192.168.0.147:7777',
    '外玻璃投影': 'http://192.168.0.119:7777',
    '窗户投影': 'http://192.168.0.148:7777'
}
let sendlist1 = ['http://192.168.0.161:7777/url/交通5号','http://192.168.0.143:7777/url/交通1号','http://192.168.0.165:7777/url/交通2号','http://192.168.0.173:7777/url/交通3号','http://192.168.0.197:7777/url/交通4号']
let sendlist2 = ['http://192.168.0.161:7777/url/conclustion','http://192.168.0.143:7777/url/MIC','http://192.168.0.165:7777/url/ML','http://192.168.0.173:7777/url/DTW','http://192.168.0.197:7777/url/news']
let sendlist3 = ['http://192.168.0.161:7777/url/A1','http://192.168.0.143:7777/url/A2','http://192.168.0.165:7777/url/A3','http://192.168.0.173:7777/url/A4','http://192.168.0.197:7777/url/A5']
let device = '拼接屏1号机';
const useStyles = makeStyles({
    bt1: {
      background: 'linear-gradient(80deg, #56ccf2 30%, #2f80ed 90%)',
      borderRadius: '25px',
      border: 0,
      color: 'white',
      height: 48,
      boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
      width: '20%',
      height: '18%',
      position: 'absolute',
      top: '23%',
      left: '1%',
      fontSize: '0.9em'
    },
    bt2: {
        background: 'linear-gradient(80deg, #56ccf2 30%, #2f80ed 90%)',
        borderRadius: '25px',
        border: 0,
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        width: '20%',
        height: '18%',
        position: 'absolute',
        top: '23%',
        left: '27%',
        fontSize: '0.9em'
      },
    bt3: {
        background: 'linear-gradient(80deg, #56ccf2 30%, #2f80ed 90%)',
        borderRadius: '25px',
        border: 0,
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        width: '20%',
        height: '18%',
        position: 'absolute',
        top: '23%',
        left: '53%',
        fontSize: '0.9em'
      },
    bt4: {
        background: 'linear-gradient(80deg, #56ccf2 30%, #2f80ed 90%)',
        borderRadius: '25px',
        border: 0,
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        width: '20%',
        height: '18%',
        position: 'absolute',
        top: '23%',
        left: '79%',
        fontSize: '0.9em'
      },
    bt5: {
        background: 'linear-gradient(80deg, #56ccf2 30%, #2f80ed 90%)',
        borderRadius: '25px',
        border: 0,
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        width: '20%',
        height: '18%',
        position: 'absolute',
        top: '65%',
        left: '1%',
        fontSize: '0.9em'
      }, 
    bt6: {
        background: 'linear-gradient(80deg, #56ccf2 30%, #2f80ed 90%)',
        borderRadius: '25px',
        border: 0,
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        width: '20%',
        height: '18%',
        position: 'absolute',
        top: '65%',
        left: '27%',
        fontSize: '0.9em'
      }, 
    bt7: {
        background: 'linear-gradient(80deg, #56ccf2 30%, #2f80ed 90%)',
        borderRadius: '25px',
        border: 0,
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        width: '20%',
        height: '18%',
        position: 'absolute',
        top: '65%',
        left: '53%',
        fontSize: '0.9em'
      },   
    bt8: {
        background: 'linear-gradient(80deg, #56ccf2 30%, #2f80ed 90%)',
        borderRadius: '25px',
        border: 0,
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        width: '20%',
        height: '18%',
        position: 'absolute',
        top: '65%',
        left: '79%',
        fontSize: '0.9em'
      }, 
    bt9: {
        backgroundColor: 'black',
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        position: 'absolute',
        top: '18%',
        left: '84%',
        fontSize: 'large'
      },
    bt10: {
        backgroundColor: 'black',
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        position: 'absolute',
        top: '18%',
        left: '90%',
        fontSize: 'large'
      }, 
    bt11: {
        backgroundColor: 'black',
        color: 'white',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)',
        position: 'absolute',
        top: '18%',
        left: '78%',
        fontSize: 'large'
    }, 
    card1: {
        position: 'absolute',
        top: '5%',
        left: '4%',
        width: '25%',
        height: '30%'
    },
    card2: {
        position: 'absolute',
        top: '5%',
        left: '37.5%',
        width: '25%',
        height: '30%'
    },
    card3: {
        position: 'absolute',
        top: '5%',
        left: '71%',
        width: '25%',
        height: '30%'
    },
    card4: {
        position: 'absolute',
        top: '48%',
        left: '4%',
        width: '25%',
        height: '30%'
    },
    card5: {
        position: 'absolute',
        top: '48%',
        left: '37.5%',
        width: '25%',
        height: '30%'
    },
    card6: {
        position: 'absolute',
        top: '48%',
        left: '71%',
        width: '25%',
        height: '30%'
    },
  });

function send(value) {
    const http = new XMLHttpRequest();
    const url = ip[device] + '/url/' + value;
    console.log('测试：', url);
    http.open('GET',url)
    http.send()
}

export function Octrl() {

    const classes = useStyles();
    const [deviceID,setID] = React.useState('拼接屏1号机');
    const [page,setpage] = React.useState(1);
    const [con, setcon] = React.useState("默认")
    function f1(){
        for(let prop in sendlist1){
            const http=new XMLHttpRequest();
            console.log('测试3',sendlist1[prop])
            http.open('GET',sendlist1[prop]);
            http.send()
        }
    }
    function f2(){
        for(let prop in sendlist2){
            const http=new XMLHttpRequest();
            console.log('测试3',sendlist2[prop])
            http.open('GET',sendlist2[prop]);
            http.send()
        }
    }

    
    function f3(){
        for(let prop in sendlist3){
            const http=new XMLHttpRequest();
            console.log('测试3',sendlist3[prop])
            http.open('GET',sendlist3[prop]);
            http.send()
        }
    }
    function openAllChrome(){
        for(let prop in ip){
            if(ip[prop]){
                // console.log(ip[prop])
                const http=new XMLHttpRequest();
                const url=ip[prop]+'/openChrome';
                console.log('测试2',url)
                http.open('GET',url);
                http.send()
            }
        }
    }
    function sendVolumedown(){
        const http=new XMLHttpRequest();
        const url=ip[deviceID]+'/volume/down';
        console.log('测试:',url)
        http.open('GET',url)
        http.send()
    }
    function sendVolumeup(){
        const http=new XMLHttpRequest();
        const url=ip[deviceID]+'/volume/up';
        console.log('测试:',url)
        http.open('GET',url)
        http.send()
    }
    function sendOpenChrome(event) {
        const http=new XMLHttpRequest();
        const url=ip[deviceID]+'/openChrome';
        console.log(url)
        http.open('GET',url);
        http.send()
    }
    return (
        <div style={{
            position: 'absolute',
            left: '3%',
            top: '0',
            height: '100%',
            width: '94%',
            backgroundColor: 'black'
            }}>
            <div style={{
                position: 'absolute',
                left: '1%',
                top: '-5%',
                width: '27%',
                height: '15%',
                backgroundColor: 'black',
                margin: '10% 0',
                color: 'white',
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                wordBreak: 'break-all',
                lineHeight: '200%',
                fontSize: '1.8em',
                textAlign: 'center'
            }}>
                拼接屏展示<br></br>
                <div style={{position: 'absolute', top: '18%', left: '0', width: '100%', height: '100%', backgroundColor: 'black', lineHeight: '2.5em'}}>
                    <Button color="primary" onClick={f1} startIcon={<BorderAllIcon />} variant="contained" size="large">交通可视化项目</Button><br />
                    <Button color="primary" onClick={f2} startIcon={<BorderAllIcon />} variant="contained" size="large">城市幸福感项目</Button><br />
                    <Button color="primary" onClick={f3} startIcon={<BorderAllIcon />} variant="contained" size="large">各省数据排名可视化</Button>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                left: '30%',
                top: '2%',
                width: '65%',
                height: '16%',
                backgroundColor: 'black',
            }}>
                <div style={{position: 'absolute', top: '1%',left: '15%', textAlign: 'center', fontSize: '1.3em'}}>实验室由如下设备构成，在这里你可以选择你希望控制的设备</div>
                <Button variant="contained" className={classes.bt1} startIcon={<BorderAllIcon />} onClick={()=> {setID('拼接屏1号机');device='拼接屏1号机'}}>拼接屏1号机</Button>
                <Button variant="contained" className={classes.bt2} startIcon={<BorderAllIcon />} onClick={()=> {setID('拼接屏2号机');device='拼接屏2号机'}}>拼接屏2号机</Button>
                <Button variant="contained" className={classes.bt3} startIcon={<BorderAllIcon />} onClick={()=> {setID('拼接屏3号机');device='拼接屏3号机'}}>拼接屏3号机</Button>
                <Button variant="contained" className={classes.bt4} startIcon={<BorderAllIcon />} onClick={()=> {setID('拼接屏4号机');device='拼接屏4号机'}}>拼接屏4号机</Button>
                <Button variant="contained" className={classes.bt5} startIcon={<BorderAllIcon />} onClick={()=> {setID('拼接屏5号机');device='拼接屏5号机'}}>拼接屏5号机</Button>
                <Button variant="contained" className={classes.bt6} startIcon={<VideocamIcon />} onClick={()=> {setID('弧形墙投影');device='弧形墙投影'}}>弧形墙投影</Button>
                <Button variant="contained" className={classes.bt7} startIcon={<VideocamIcon />} onClick={()=> {setID('外玻璃投影');device='外玻璃投影'}}>外玻璃投影</Button>
                <Button variant="contained" className={classes.bt8} startIcon={<VideocamIcon />} onClick={()=> {setID('窗户投影');device='窗户投影'}}>窗户投影</Button>
            </div>
            <IconButton aria-label='down' className={classes.bt9} onClick={()=>{sendVolumedown()}}>
                <VolumeDownIcon />
            </IconButton>
            <IconButton aria-label='up' className={classes.bt10} onClick={()=>{sendVolumeup()}}>
                <VolumeUpIcon />
            </IconButton>
            <IconButton aria-label='web' className={classes.bt11} onClick={sendOpenChrome}>
                <BorderAllIcon />
            </IconButton>
            {
                (deviceID === '弧形墙投影' && page ===1)? <Panel4 />:
                (deviceID === '弧形墙投影' && page ===2)? <Panel6 />:
                deviceID === '外玻璃投影'? <Panel3 />:
                deviceID === '窗户投影'? <Panel5 />:
                page === 1?<Panel1 />: <Panel2 />
            }
            <div style={{position: 'absolute', top: '23%', left: '5%'}}>
                <Typography style={{fontFamily: 'myfont'}}>
                    你当前选择的设备为：{deviceID} 
                </Typography>
            </div>
            {/* <div style={{position: 'absolute', top: '23%', left: '5%'}}>
                <Typography style={{fontFamily: 'myfont'}}>
                    当前设备展示内容为：{con} 
                </Typography>
            </div> */}
            <div style={{position: 'absolute', top: '56%', left: '41%', color:'white'}}>
               
                <Typography variant="body" gutterBottom color="textSecondary" style={{color:'white'}}>
                轻点卡片即可切换展示内容
                        </Typography>
            </div>
            {
                (deviceID != '外玻璃投影' && deviceID != '窗户投影' && page === 1)? 
                <Button variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                    color="primary"
                    style={{position: 'absolute', top: '56%', right: '0'}}
                    onClick={()=>{setpage(2)}}>
                        下一页
                    </Button>:(deviceID != '外玻璃投影' && deviceID != '窗户投影' && page === 2)?
                    <Button variant="contained"
                    endIcon={<KeyboardArrowLeftIcon />}
                    color="primary"
                    style={{position: 'absolute', top: '56%', left: '0'}}
                    onClick={()=>{setpage(1)}}>
                        上一页
            </Button>:<div />
            }
            
        </div>
    )
}



function Panel1() {
    const classes = useStyles();
    const [pageNum,setpage] = React.useState(1)
    return (
        <div style={{
            position: 'absolute',
            left: '0',
            top: '26%',
            width: '100%',
            height: '74%',
            backgroundColor: 'black',
        }}>
            <Card className={classes.card1} variant="outlined">
                <CardContent>
                    <img src="./1.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            MIC
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            城市幸福感项目MIC
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('MIC')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" style={{position: 'absolute', top: '80%', right: '10%'}}
                                onClick={()=>{send('MIC')}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card2} variant="outlined">
                <CardContent>
                    <img src="./2.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            ML
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            城市幸福感项目ML
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('ML')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large"  onClick={()=>{send('ML')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card3} variant="outlined">
                <CardContent>
                    <img src="./3.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            DTW
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            城市幸福感项目DTW
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('DTW')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('DTW')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card4} variant="outlined">
                <CardContent>
                    <img src="./4.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            news
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            城市幸福感项目news
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('news')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('news')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card5} variant="outlined">
                <CardContent>
                    <img src="./5.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            conclustion
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            城市幸福感项目conclustion
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('conclustion')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('conclustion')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card6} variant="outlined">
                <CardContent>
                    <img src="./6.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            交通1号
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            交通可视化项目
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('交通1号')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('交通1号')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
        </div>
        
    )
}


function Panel2() {
    const classes = useStyles();
    const [pageNum,setpage] = React.useState(1)
    return (
        <div style={{
            position: 'absolute',
            left: '0',
            top: '26%',
            width: '100%',
            height: '74%',
            backgroundColor: 'black',
        }}>
            <Card className={classes.card1} variant="outlined">
                <CardContent>
                    <img src="./7.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            交通2号
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            交通可视化项目
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('交通2号')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('交通2号')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card2} variant="outlined">
                <CardContent>
                    <img src="./8.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            交通3号
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            交通可视化项目
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('交通3号')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('交通3号')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card3} variant="outlined">
                <CardContent>
                    <img src="./9.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            交通4号
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            交通可视化项目
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('交通4号')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('交通4号')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card4} variant="outlined">
                <CardContent>
                    <img src="./10.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            交通5号
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            交通可视化项目
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('交通5号')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large"  onClick={()=>{send('交通5号')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card5} variant="outlined">
                <CardContent>
                    <img src="./oly.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            奥运会数据可视化
                        </Typography>   
                        <Typography variant="body" gutterBottom color="textSecondary">
                            
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('oly')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large"  onClick={()=>{send('oly')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
        </div>
    )
}

function Panel3() {
    const classes = useStyles();
    return (
        <div style={{
            position: 'absolute',
            left: '0',
            top: '26%',
            width: '100%',
            height: '74%',
            backgroundColor: 'black',
        }}>
            <Card className={classes.card1} variant="outlined">
                <CardContent>
                    <img src="./i1.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            welcome
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            外玻璃欢迎界面
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('welcome')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('welcome')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card2} variant="outlined">
                <CardContent>
                    <img src="./frontglass.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            外墙展示
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            外墙展示内容
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('frontglass')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

function Panel4() {
    const classes = useStyles();
    return (
        <div style={{
            position: 'absolute',
            left: '0',
            top: '26%',
            width: '100%',
            height: '74%',
            backgroundColor: 'black',
        }}>
            <Card className={classes.card1} variant="outlined">
                <CardContent>
                    <img src="./music.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            音乐
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            音乐可视化
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('音乐')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('音乐')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card2} variant="outlined">
                <CardContent>
                    <img src="./i2.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            ITS(融合2)
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            城市网约车可视化
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('ITS(融合2)')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('ITS(融合2)')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card3} variant="outlined">
                <CardContent>
                    <img src="./i3.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            疫情静态(融合3)
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            疫情数据可视化
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('疫情静态(融合3)')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('疫情静态(融合3)')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card4} variant="outlined">
                <CardContent>
                    <img src="./covid.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            疫情视频(融合4)
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            疫情数据可视化
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('疫情视频(融合4)')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('疫情视频(融合4)')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card5} variant="outlined">
                <CardContent>
                    <img src="./Kmeans.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            Kmeans
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            Kmeans可视化
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('Kmeans')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('Kmeans')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card6} variant="outlined">
                <CardContent>
                    <img src="./NASA.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%', height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            NASA
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            NASA发布的宇宙可视化视频
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('NASA')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('NASA')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}







function Panel5() {
    const classes = useStyles();
    return (
        <div style={{
            position: 'absolute',
            left: '0',
            top: '26%',
            width: '100%',
            height: '74%',
            backgroundColor: 'black',
        }}>
            <Card className={classes.card1} variant="outlined">
                <CardContent>
                    <img src="./cmusic.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            疫情音乐可视化
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            将疫情数量以音乐的方式进行可视化
                        </Typography>
                    </div>
<button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('covid')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('窗户内容')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

function Panel6() {
    const classes = useStyles();
    return (
        <div style={{
            position: 'absolute',
            left: '0',
            top: '26%',
            width: '100%',
            height: '74%',
            backgroundColor: 'black',
        }}>
            <Card className={classes.card1} variant="outlined">
                <CardContent>
                    <img src="./windMap.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            风向图
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            风向可视化
                        </Typography>
                    </div>
                    <button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('windmap')}}>

                    </button>
                </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('windmap')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}
