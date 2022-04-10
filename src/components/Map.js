import React from 'react';
import ReactDOM from 'react-dom';
import Tem from './tem.js'
export default class Map extends React.Component {
  constructor() {
    super() 
    this.state = {
      in : 1,
      m : 7
    }
  }
  componentDidMount() {
    this.timer = setInterval(()=>{
      if(this.state.in == 31){
        this.setState({
          m: this.state.m + 1,
          in: 1
        });
      }else{
        this.setState({
          in: this.state.in + 1
        });
      }
        
        console.log(this.state.in);
        if(this.state.in == 9 && this.state.m == 8){
          clearInterval(this.timer)
        }
    },2000)
    
  }
  render() {
    return(
      <div>
        <ul>
          <li>
          <img src={'./rain/'+this.state.m+'_'+this.state.in+'.png'} style={{position: 'absolute', top: '0', left: '0', width: '1920px', height: '1080px'}}/>
        <div style={{position: 'absolute', top: '0.5%', left: '0.5%', backgroundColor: 'white', width: '500px', height: '100px'}}></div>
        <div style={{position: 'absolute', top: '1%', left: '700px', backgroundColor: 'white', width: '600px', height: '200px'}}>
          <div style={{
              position: 'absolute',
              top: '45%',
              left: '30%',
              fontSize: '32px',
              fontWeight: '800',
              color: '#616161'
            }}>全国日平均降雨量</div>
          
          <div style={{
            position: 'absolute',
            top: '70%',
            left: '30%',
            fontSize: '32px',
            fontWeight: '800',
            color: '#616161'
          }}>{'2021/'+this.state.m+'/'+this.state.in}</div>
        </div>
          </li>
          <li>
            <Tem />
          </li>
        </ul>
       
      </div>
    )
  }

}


