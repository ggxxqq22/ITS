import React from 'react';
function loadStyle(code){
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(code));
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}

export default class Tem extends React.Component {
  constructor() {
    super() 
    this.state = {
      in : 1,
      m : 7
    }
  }
  componentDidMount() {
    var code=' html,body{margin:0;padding:0;overflow-y:hidden;overflow-x:hidden}\n' +
            '    li {\n' +
            '        list-style: none;\n' +
            '        float: left;\n' +
            '        width: 100%;\n' +
            '        height: 100%;\n' +
            '        margin: 0 ;\n' +
            '        overflow: hidden;/*超出隐藏*/\n' +
            '        font-size: 0;\n' +
            '\n' +
            '    }\n' +
            '    li img {\n' +
            '        width: 1920px;\n' +
            '        height: 1920px;\n' +
            '        overflow-x:hidden\n' +
            '        object-fit: fill;\n '  +
            '    }\n' +
            '    li video{\n' +
            '        width: 1920px;\n' +
            '        height: 1080px;\n' +
            '        overflow-x:hidden;\n' +
            
            '    }\n' +
            '    ul{\n' +
            '        margin:0;padding:0;\n' +
            '        overflow-x:hidden;\n' +
            '    } '
        loadStyle(code);
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
        <img src={'./tem/'+this.state.m+'_'+this.state.in+'.png'}/>
        <div style={{position: 'absolute', top: '50.5%', left: '0.5%', backgroundColor: 'white', width: '500px', height: '100px'}}></div>
        <div style={{position: 'absolute', top: '51%', left: '700px', backgroundColor: 'white', width: '600px', height: '200px'}}>
          <div style={{
              position: 'absolute',
              top: '45%',
              left: '30%',
              fontSize: '32px',
              fontWeight: '800',
              color: '#616161'
            }}>全国日平均温度</div>
          
          <div style={{
            position: 'absolute',
            top: '70%',
            left: '30%',
            fontSize: '32px',
            fontWeight: '800',
            color: '#616161'
          }}>{'2021/'+this.state.m+'/'+this.state.in}</div>
        </div>
       
      </div>
    )
  }

}



