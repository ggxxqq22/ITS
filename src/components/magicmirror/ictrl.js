import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SettingsIcon from '@material-ui/icons/Settings';
import WebIcon from '@material-ui/icons/Web';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import VideocamIcon from '@material-ui/icons/Videocam';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import { time } from "echarts";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import FormLabel from '@material-ui/core/FormLabel'
import clsx from 'clsx';
let ip = {
    '拼接屏1号机': 'http://192.168.0.161:7777',
    '拼接屏2号机': 'http://192.168.0.143:7777',
    '拼接屏3号机': 'http://192.168.0.165:7777',
    '拼接屏4号机': 'http://192.168.0.173:7777',
    '拼接屏5号机': 'http://192.168.0.197:7777',
    '弧形墙投影': 'http://192.168.0.147:7777',
    '外玻璃投影': 'http://192.168.0.118:7777',
    '窗户投影': 'http://192.168.0.148:7777',
}

let sendlist = ['http://192.168.0.161:7777/url/交通1号','http://192.168.0.143:7777/url/交通2号','http://192.168.0.165:7777/url/交通3号','http://192.168.0.173:7777/url/交通4号','http://192.168.0.197:7777/url/交通5号']
const imgpath = {
    "交通1号": './6.png',
    "交通2号": './7.png',
    "交通3号": './8.png',
    "交通4号": './9.png',
    "交通5号": './10.png',
    "MIC": './1.png',
    "ML": './2.png',
    "DTW": './3.png',
    "news": './4.png',
    "conclustion": './5.png',
    "P1": './p1.png',
    "P2": './p2.png',
    "P3": './p3.png',
    "P4": './p4.png',
    "P5": './p5.png',
    "welcome": './i1.png',
    "frontglass": './frontglass.png',
    "海报": './wallpaper.png',
    "ITS(融合2)": './i2.png',
    "音乐": './music.png',
    "疫情静态(融合3)": './i3.png',
    "疫情视频(融合4)": './covid.png',
    "Kmeans": './Kmeans.png',
    "NASA": './NASA.png',
    "窗户内容": './cmusic.png',
    "windmap": './windMap.png'
}
const useStyles = makeStyles((theme) => ({
    bt11: {
        background: '#1de9b6',
        borderRadius: '0 35px 0 35px',
        position: 'absolute',
        top: '0',
        left: '15%',
        width: '18%',
        height: '55%',
        letterSpacing: '12px'
    },
    bt12: {
        background: '#1de9b6',
        borderRadius: '0 35px 0 35px',
        position: 'absolute',
        top: '0',
        left: '41%',
        width: '18%',
        height: '55%',
        letterSpacing: '3px',
        fontSize: '0.9em'
    },
    bt13: {
        background: '#1de9b6',
        borderRadius: '0 35px 0 35px',
        position: 'absolute',
        top: '0',
        right: '15%',
        width: '18%',
        height: '55%',
        letterSpacing: '12px'
    },
    root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '& > *': {
            margin: theme.spacing(1),
          },
      },
      icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
    
  }));

  function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

 
export function Ictrl(){
    const classes = useStyles();
    const [deviceID,setID] = React.useState('拼接屏1号机')
    const [page,setpage] = React.useState(1);
    const [dis, setDis] = React.useState('none')
    const [imgsrc, setsrc] = React.useState("./6.png")

    const handleChange1 = (event) => {
        setID(event.target.value)
    }

    const handleChange2 = (event) => {
        setpage(event.target.value)
        setsrc(imgpath[event.target.value])
    }
    

    function sendOpenChrome(event) {
        const http=new XMLHttpRequest();
        const url=ip[deviceID]+'/openChrome';
        console.log(url)
        http.open('GET',url);
        http.send()
    }

    function sendVolumeup(){
        const http=new XMLHttpRequest();
        const url=ip[deviceID]+'/volume/up';
        console.log('测试:',url)
        http.open('GET',url)
        http.send()
    }

    function sendVolumedown(){
        const http=new XMLHttpRequest();
        const url=ip[deviceID]+'/volume/down';
        console.log('测试:',url)
        http.open('GET',url)
        http.send()
    }

    function sendVolumemute(){
        const http=new XMLHttpRequest();
        const url=ip[deviceID]+'/volume/mute';
        console.log('测试:',url)
        http.open('GET',url)
        http.send()
    }
    function sendSpace(){
        const http=new XMLHttpRequest();
        const url='http://192.168.0.118:7777/music';
        console.log('测试:',url)
        http.open('GET',url)
        http.send()
    }
    function openAll(){
        openAllChrome();
        setTimeout(() => {
            for(let prop in sendlist){
                const http=new XMLHttpRequest();
                console.log('测试3',sendlist[prop])
                http.open('GET',sendlist[prop]);
                http.send()
            }
        }, 5000);
        
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

    function send() {
        const http = new XMLHttpRequest();
        const url = ip[deviceID] + '/url/' + page;
        console.log('测试：', url);
        http.open('GET',url)
        http.send()
        setDis('block')
        setTimeout(()=>{setDis('none')},1500)
    }
    function test() {
        const http = new XMLHttpRequest();
        const url = 'http://192.168.0.147:7777/url/ccc';
        console.log('测试：', url);
        http.open('GET',url)
        http.send()
        setDis('block')
        setTimeout(()=>{setDis('none')},1500)
    }
    function updateService() {
        let message=window.confirm('确定更新'+deviceID+'服务吗？')
        if(message===true){
            const http=new XMLHttpRequest();
            const url=ip[deviceID]+'/update';
            http.open('GET',url);
            http.send()
        }
        else return
    }

    return (
        <div style={{
            position: 'absolute',
            top: '0',
            left: '3%',
            width: '94%',
            height: '100%',
            backgroundColor: 'black'
        }}> 
            <div style={{
            position: 'absolute',
            left: '3%',
            top: '3%',
            width: '94%',
            height: '8%',
            backgroundColor: 'black',
        }}>
                <Button onClick={openAll} startIcon={<SettingsIcon />} className={classes.bt11} variant="contained" >
                    一键部署
                </Button>
                <Button onClick={openAllChrome} startIcon={<WebIcon />} className={classes.bt12} variant="contained">
                    打开所有浏览器
                </Button>
                <Button  startIcon={<PowerSettingsNewIcon />} className={classes.bt13} variant="contained">
                    一键重启
                </Button>
            </div>
            <FormControl component="fieldset" style={{
                color: 'white',
                position: 'absolute',
                left: '33%',
                top: '13%',
                width: '15%',
                height: '10%',
                background: 'black',
            }} >
                <FormLabel component="legend" style={{color: 'white',fontSize: '1.5em'}}>设备选择</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={deviceID} onChange={handleChange1} style={{color: 'white'}}>
                    <FormControlLabel value="拼接屏1号机" control={<StyledRadio />} label="拼接屏1号机"/>
                    <FormControlLabel value="拼接屏2号机" control={<StyledRadio />} label="拼接屏2号机"/>
                    <FormControlLabel value="拼接屏3号机" control={<StyledRadio />} label="拼接屏3号机"/>
                    <FormControlLabel value="拼接屏4号机" control={<StyledRadio />} label="拼接屏4号机"/>
                    <FormControlLabel value="拼接屏5号机" control={<StyledRadio />} label="拼接屏5号机"/>
                    <FormControlLabel value="弧形墙投影" control={<StyledRadio />} label="弧形墙投影" />
                    <FormControlLabel value="外玻璃投影" control={<StyledRadio />} label="外玻璃投影" />
                    <FormControlLabel value="窗户投影" control={<StyledRadio />} label="窗户投影" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" style={{
                color: 'white',
                position: 'absolute',
                left: '3%',
                top: '13%',
                width: '25%',
                height: '35%',
                background: 'black',
            }} >
                <FormLabel component="legend" style={{color: 'white',fontSize: '1.5em'}}>页面选择</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={page} onChange={handleChange2} style={{color: 'white'}}>
                    <FormControlLabel value="交通1号" control={<StyledRadio />} label="交通1号"/>
                    <FormControlLabel value="交通2号" control={<StyledRadio />} label="交通2号"/>
                    <FormControlLabel value="交通3号" control={<StyledRadio />} label="交通3号"/>
                    <FormControlLabel value="交通4号" control={<StyledRadio />} label="交通4号"/>
                    <FormControlLabel value="交通5号" control={<StyledRadio />} label="交通5号"/>
                    <FormControlLabel value="P1" control={<StyledRadio />} label="成果展示1号"/>
                    <FormControlLabel value="P2" control={<StyledRadio />} label="成果展示2号"/>
                    <FormControlLabel value="P3" control={<StyledRadio />} label="成果展示3号"/>
                    <FormControlLabel value="P4" control={<StyledRadio />} label="成果展示4号"/>
                    <FormControlLabel value="P5" control={<StyledRadio />} label="成果展示5号"/>
                    <FormControlLabel value="MIC" control={<StyledRadio />} label="MIC" />
                    <FormControlLabel value="ML" control={<StyledRadio />} label="ML" />
                    <FormControlLabel value="DTW" control={<StyledRadio />} label="DTW" />
                    <FormControlLabel value="news" control={<StyledRadio />} label="news" />
                    <FormControlLabel value="conclustion" control={<StyledRadio />} label="conclustion" />
                    <FormControlLabel value="ITS(融合2)" control={<StyledRadio />} label="ITS(融合2)" />
                    <FormControlLabel value="疫情静态(融合3)" control={<StyledRadio />} label="疫情静态(融合3)" />
                    <FormControlLabel value="疫情视频(融合4)" control={<StyledRadio />} label="疫情视频(融合4)" />
                    <FormControlLabel value="Kmeans" control={<StyledRadio />} label="Kmeans" />
                    <FormControlLabel value="NASA" control={<StyledRadio />} label="NASA" />
                    <FormControlLabel value="windmap" control={<StyledRadio />} label="风向图" />
                    <FormControlLabel value="窗户内容" control={<StyledRadio />} label="窗户内容" />
                    <FormControlLabel value="海报" control={<StyledRadio />} label="海报" />
                    <FormControlLabel value="welcome" control={<StyledRadio />} label="welcome" />
                    <FormControlLabel value="frontglass" control={<StyledRadio />} label="外墙轮播" />
                </RadioGroup>
            </FormControl>
            <div style={{position: 'absolute', top: '43%', left: '40%', color:'white'}}>
                <CheckBoxTwoToneIcon style={{color: 'green',width: '40px',height:'40px',display: dis}}/>
            </div>
            <div className={classes.root} style={{
                color: 'white',
                position: 'absolute',
                left: '37%',
                top: '45%',
                width: '65%',
                height: '35%',
                background: 'black',
            }}>
                
                <Button variant="contained" size="large" color="primary" onClick={send}>
                    发送内容
                </Button>
                <Button variant="contained" size="large" color="primary" onClick={sendOpenChrome}>
                    打开浏览器
                </Button>
                <Button variant="contained" size="large" color="primary">
                    重启
                </Button>
                <Button variant="contained" size="large" color="primary" onClick={test}>
                    更新服务
                </Button>
                
            </div>
            <div className={classes.root} style={{
                color: 'white',
                position: 'absolute',
                left: '37%',
                top: '50%',
                width: '65%',
                height: '10%',
                background: 'black',
            }}>
                
                <Button variant="contained" size="large" color="primary" onClick={sendVolumeup}>
                    增大音量
                </Button>
                <Button variant="contained" size="large" color="primary" onClick={sendVolumedown}>
                    减小音量
                </Button>
                <Button variant="contained" size="large" color="primary" onClick={sendVolumemute}>
                    静音
                </Button>
                <Button variant="contained" size="large" color="primary" onClick={sendSpace}>
                    背景音乐暂停/播放
                </Button>
                
            </div>
            <div  style={{
                color: 'white',
                position: 'absolute',
                left: '45%',
                top: '68%',
                width: '40%',
                height: '25%',
            }}>
                <img src={imgsrc} style={{position: 'absolute', top: '3%', left: '5%', width: '90%',height: '70%'}}/>
            </div>
        </div>
    )
}


