import React from 'react';
import moment from 'moment';
import { Row } from 'antd';

const styles = {

    container: {
      position: 'absolute',
      top: '5%',
      left: '5%'
    },
    clock: {
      color: 'white',
      fontSize: '2.6em',
      lineHeight: 1.5,
      lineWidth: 1,
    },
    clockSeconds: {
      color: 'white',
      fontSize: '0.8em',
      verticalAlign: 'top',
      paddingLeft: 1,
      textAlign: 'left',
    },
    smallText: {
      color: 'white',
      fontSize: '2.0em',
    },
};

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new moment(),
        };
    }

    tick() {
        this.setState({
          date: new moment(),
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    render() {

        let day = this.state.date.format('dddd, LL');
        day = day.charAt(0).toUpperCase() + day.slice(1);
    
        return (
          <div style={styles.container}>
            <Row>
              <div style={styles.smallText}> {day}</div>
            </Row>
            <Row>
              <div style={styles.clock}>
                {this.state.date.format('HH:mm')}
                <span style={styles.clockSeconds}>{this.state.date.format('ss')}</span>
              </div>
            </Row>
          </div>
        );
    }
}

