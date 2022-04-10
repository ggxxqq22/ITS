import React from 'react';
import 'antd/dist/antd.css';
import Clock from './Clock'
// import Navi from './Navi'
import Weather from './Weather'
import {SettingOutlined, CalendarOutlined, EllipsisOutlined,RadiusSettingOutlined} from '@ant-design/icons';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import TuneIcon from '@material-ui/icons/Tune'
import { Octrl } from './octrl';
import { Ictrl } from './ictrl';

class Mirror extends React.Component {
  state = {
    current: 0
  };
  handleClick = e => {
    // console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (	
    //   <div style={{
    //     background: 'white',
    //     color: 'black',
    //     height: '100%',
    //     width: '100%',
    //     overflow: 'hidden'
    //   }}>

        /* <Weather />
        <Clock /> */
        
        
        
    //   </div>
	<div style={{
		width:"100%",
		height: "100%",
		backgroundColor: "black",
		color: "white"
	}}>
		<BottomNavigation 
        value={this.state.current} 
        onChange={(event, newValue) => this.setState({current: newValue})}
        showLabels
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          backgroundColor: 'black',
          borderLeftColor: 'black',
          borderRightColor: 'black',
          borderTopColor: 'black',
          borderStyle: 'solid',
          borderWidth: '3px',
          borderBottomColor: '#0277bd' ,
          width: '100%',
          height: '3%',
          color: 'white'
        }}>
          <BottomNavigationAction style={{color: 'white' }} label="实验室控制" icon={<SettingsIcon />} />
          <BottomNavigationAction style={{color: 'white' }} label="更多控制" icon={<TuneIcon />} />
    </BottomNavigation>
		<Clock />
		<Weather />
		<div style={{
                position: 'absolute',
                top: '10%',
                left: '0',
                width: '100%',
                height: '80%'
        }}>
			<div style = {{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                }}>
                    {
                        this.state.current == "screenSaver"?
                                (<div></div>)
                            :this.state.current == "0"?<Octrl />:<Ictrl />         
                    }
        	</div>
		</div>
    
    <div  style={{
      position: 'absolute',
      left: '0',
      bottom: '0',
      width: '100%',
      height: '15%',
      backgroundImage: 'url("./background.png")',
      backgroundSize: '100% 100%'
    }}>
          <div style={{
          'position': 'absolute',
          'top': '35%',
          'right': '5%',
          'line-height': '1.5em',
          'font-size': '3em',
        }}>
          计算社会科学研究中心<br></br>欢迎您!
    </div>
    </div>
	</div>
    )
  }
}

export default Mirror;