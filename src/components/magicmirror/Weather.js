import React from 'react'

export default class Weather extends React.Component {
    constructor() {
      super()
      this.state = {
        weather: null,
        icon: null,
        src: null
      }
    }
  
    getWeather = async (e) => {
      const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=hangzhou&appid=7328419133fa6fd44868e923b84869d1')
      const data = await api_call.json();
      console.log(data);
      const localWeather = data.weather[0].main;
      const icondata = data.weather[0].icon
      console.log(icondata)
      let localTemp = data.main.temp - 273.15;
      localTemp = Math.round(localTemp)
      console.log(localWeather)
      this.setState({
        weather: localTemp,
        icon: icondata,
        src: 'http://openweathermap.org/img/wn/' + icondata +'.png',
        localWeather: localWeather
      }) 
      // console.log(this.state.src)
      // console.log('图标',data.weather[0].icon)
    }
  
    componentDidMount() {
      this.getWeather()
      this.timerID = setInterval(() => this.getWeather(), 150000);
    }
  
    render() {
      return (
        <div>
          <div style={{
            'position': 'absolute',
            'left': '43%',
            'top': '5%',
          }}>
            <img src = {this.state.src}/>
          </div>
          <div style={{
            'position': 'absolute',
            'left': '35%',
            'top': '5%',
            color: "white",
            fontSize: "2em"
          }}>
            {this.state.localWeather}
          </div>
          <div style={{
            'position': 'absolute',
            'left': '35%',
            'top': '7%',
            color: "white",
            fontSize: "2em"
          }}>
            {this.state.weather+"°C"}
          </div>
        </div>
        // <div style={{
        //     'position': 'absolute',
        //     'right': '10%',
        //     'top': '5%',
        //   }}>
        //   <img src = {this.state.src}/>
        //   <div>{this.state.weather+"°C"}</div>
        // </div>
      )
    }
  
}



