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
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import SettingsIcon from '@material-ui/icons/Settings';
let con = ""
let ip = {
    '拼接屏1号机': 'http://192.168.0.161:7777',
    '拼接屏2号机': 'http://192.168.0.143:7777',
    '拼接屏3号机': 'http://192.168.0.165:7777',
    '拼接屏4号机': 'http://192.168.0.173:7777',
    '拼接屏5号机': 'http://192.168.0.197:7777',
    '弧形墙投影': 'http://192.168.0.147:7777',
    '外玻璃投影': 'http://192.168.0.118:7777',
    '窗户投影': 'http://192.168.0.148:7777'
}
let sendlist1 = ['http://192.168.0.161:7777/url/交通1号','http://192.168.0.143:7777/url/交通2号','http://192.168.0.165:7777/url/交通3号','http://192.168.0.173:7777/url/交通4号','http://192.168.0.197:7777/url/交通5号']
let sendlist2 = ['http://192.168.0.161:7777/url/conclustion','http://192.168.0.143:7777/url/MIC','http://192.168.0.165:7777/url/ML','http://192.168.0.173:7777/url/DTW','http://192.168.0.197:7777/url/news']
let sendlist3 = ['http://192.168.0.161:7777/url/P1','http://192.168.0.143:7777/url/P2','http://192.168.0.165:7777/url/P3','http://192.168.0.173:7777/url/P4','http://192.168.0.197:7777/url/P5']
let device = '拼接屏1号机';
const kkey ={
    'ITS(融合2)': 'http://192.168.0.147:7777',
    '音乐': 'http://192.168.0.147:7777',
    '疫情静态(融合3)': 'http://192.168.0.147:7777',
    '疫情视频(融合4)': 'http://192.168.0.147:7777',
    'Kmeans': 'http://192.168.0.147:7777',
    'NASA': 'http://192.168.0.147:7777',
    'windmap': 'http://192.168.0.147:7777',
    'welcome': 'http://192.168.0.118:7777',
    'frontglass': 'http://192.168.0.118:7777',
    '海报': 'http://192.168.0.118:7777',
    '窗户内容': 'http://192.168.0.148:7777'
}
const useStyles = makeStyles({
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
    const url = kkey[value] + '/url/' + value;
    console.log('测试：', url);
    http.open('GET',url)
    http.send()
}

export function Octrl() {

    const classes = useStyles();
    const [deviceID,setID] = React.useState('拼接屏1号机');
    const [page,setpage] = React.useState(1);
    const [con, setcon] = React.useState("默认")
    const [dis, setDis] = React.useState('none')
    function f1(){
        for(let prop in sendlist1){
            const http=new XMLHttpRequest();
            console.log('测试3',sendlist1[prop])
            http.open('GET',sendlist1[prop]);
            http.send()
        }
        setDis('block')
        setTimeout(()=>{setDis('none')},1500)
    }
    
    function f2(){
        for(let prop in sendlist2){
            const http=new XMLHttpRequest();
            console.log('测试3',sendlist2[prop])
            http.open('GET',sendlist2[prop]);
            http.send()
        }
        setDis('block')
        setTimeout(()=>{setDis('none')},1500)
    }

    
    function f3(){
        for(let prop in sendlist3){
            const http=new XMLHttpRequest();
            console.log('测试3',sendlist3[prop])
            http.open('GET',sendlist3[prop]);
            http.send()
        }
        setDis('block')
        setTimeout(()=>{setDis('none')},1500)
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
                left: '10%',
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
                拼接屏展示内容切换<br></br>
                <div style={{position: 'absolute', top: '18%', left: '0', width: '100%', height: '100%', backgroundColor: 'black', lineHeight: '2.5em'}}>
                    <Button color="primary" onClick={f1} startIcon={<BorderAllIcon />} variant="contained" size="large">交通可视化项目</Button><br />
                    <Button color="primary" onClick={f2} startIcon={<BorderAllIcon />} variant="contained" size="large">城市幸福感项目</Button><br />
                    <Button color="primary" onClick={f3} startIcon={<BorderAllIcon />} variant="contained" size="large">项目ppt介绍</Button>
                </div>
            </div>
            <div style={{position: 'absolute', top: '9%', left: '36%', color:'white'}}>
                <CheckBoxTwoToneIcon style={{color: 'green',width: '50px',height:'50px',display: dis}}/>
            </div>
            <div style={{
            position: 'absolute',
            right: '8%',
            top: '-2%',
            height: '25%',
            width: '34%',
            }}>
                <div style={{textAlign: 'center',fontSize: '2em'}}>魔镜风格迁移</div>
            </div>
            {
                page === 1?<Panel4 />:<Panel6 />
            }
            
            <div style={{position: 'absolute', top: '54%', left: '36%', color:'white'}}>
               
                <Typography variant="body" gutterBottom color="textSecondary" style={{color:'white'}}>
                轻点卡片即可切换展示内容
                        </Typography>
            </div>
            
            {
                (page === 1)? 
                <Button variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                    color="primary"
                    style={{position: 'absolute', top: '54%', right: '0'}}
                    onClick={()=>{setpage(2)}}>
                        下一页
                    </Button>:(page === 2)?
                    <Button variant="contained"
                    endIcon={<KeyboardArrowLeftIcon />}
                    color="primary"
                    style={{position: 'absolute', top: '54%', left: '0'}}
                    onClick={()=>{setpage(1)}}>
                        上一页
            </Button>:<div />
            }
            
        </div>
    )
}







function Panel4() {
    const classes = useStyles();
    return (
        <div style={{
            position: 'absolute',
            left: '0',
            top: '24%',
            width: '100%',
            height: '74%',
            backgroundColor: 'black',
        }}>
            <Card className={classes.card1} variant="outlined">
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
            <Card className={classes.card2} variant="outlined">
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


function Panel6() {
    const classes = useStyles();
    return (
        <div style={{
            position: 'absolute',
            left: '0',
            top: '24%',
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
            <Card className={classes.card2} variant="outlined">
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
            <Card className={classes.card3} variant="outlined">
                <CardContent>
                    <img src="./frontglass.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '30%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            外墙展示轮播
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            外墙轮播内容
                        </Typography>
                    </div>
<button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('frontglass')}}>
</button>              
  </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('frontglass')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card4} variant="outlined">
                <CardContent>
                    <img src="./wallpaper.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '30%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            内墙展示
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            内墙投影
                        </Typography>
                    </div>
<button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('海报')}}>
</button>              
  </CardContent>
                <CardActions>
                    <IconButton size="large" onClick={()=>{send('海报')}} style={{position: 'absolute', top: '80%', right: '10%'}}>
                        <PlayCircleFilledIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card className={classes.card5} variant="outlined">
                <CardContent>
                    <img src="./cmusic.png" style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
                    <div style={{position: 'absolute', top: '75%', left: '10%', width: '60%',height: '20%', color: 'black'}}>
                        <Typography gutterBottom>
                            窗户内容
                        </Typography>
                        <Typography variant="body" gutterBottom color="textSecondary">
                            可视化与视频
                        </Typography>
                    </div>
<button style={{position: 'absolute', top: '0%', left: '0%', width: '100%',height: '100%', backgroundColor: 'rgba(0,0,0,0.0001)'}}  onClick={()=>{send('窗户内容')}}>

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
