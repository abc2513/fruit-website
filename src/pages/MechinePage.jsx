import React, { Component } from 'react'
import NowCount from '../components/NowCount';
import HoursReport from '../components/HoursReport2';
import axios from 'axios';

export default class MechinePage extends Component {
  state={
    now_data: { now: {} },
    now_air: { now: {} },
    days_report: { daily: [{ fxDate: '' }, { fxDate: '' }] },
    hours_report: {hourly: []},
  }
  getNowWeather(location = '126.64,45.74') {
    var url = 'api/v7/weather/now?location=' + location
    axios.get(url)
      .then((res) => {
        //console.log(res)
        this.setState({ now_data: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  getNowAir(location = '126.64,45.74') {
    var url = 'api/v7/air/now?location=' + location
    axios.get(url)
      .then((res) => {
        console.log(res)
        this.setState({ now_air: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  getDaysReport(location = '126.64,45.74') {
    var url = 'api/v7/weather/30d?location=' + location
    axios.get(url)
      .then((res) => {
        console.log(res)
        this.setState({ days_report: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  getHoursReport(location = '126.64,45.74') {
    var url = 'api/v7/weather/24h?location=' + location
    axios.get(url)
      .then((res) => {
        console.log(res)
        this.setState({ hours_report: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    //this.getNowWeather();
    //this.getDaysReport();
    //this.getHoursReport();
    //this.getNowAir();
  }
  render() {
    return (
      <div className='mechine-page'>
        <NowCount ></NowCount>
        <div className="recent-fruit card">
          <div className="recent-fruit_heading">近期投入水果</div>
          <div className="recent-fruit_icons">
            <img className="recent-fruit_icon" src='./icon/banana.png'></img>
            <img className="recent-fruit_icon" src='./icon/fruit.png'></img>
            <img className="recent-fruit_icon" src='./icon/orange.png'></img>
          </div>
          <div className="recent-fruit_info">产物有机酸较多<br />适合观赏花卉</div>
        </div>
        <div className="weather card">
          <div className="weather_t s-card">
            <img src="./icon/temperature.png" />
            <div className="weather_text">18<span className='weather_text_foot'>°C</span></div>
            {/* {this.state.now_data.now.temp} */}
          </div>
          <div className="weather_h s-card">
            <img src="./icon/humidity.png" />
            <div className="weather_text">46<span className='weather_text_foot'>%</span></div>
            {/* {this.state.now_data.now.humidity} */}
          </div>
        </div>
        <div className="charts card">
           <HoursReport hours_report={this.state.hours_report}></HoursReport>
        </div>
        <div className="data card">
          <div className="data-item s-card">
            <img className="data-item_icon" src="./icon/shovel.png"></img>
            <div className="data-item_content">
              <div className="data-item_heading">距上次加肥</div>
              <div className="data-item_data">15<span className='data-foot'>天</span></div>
            </div>
          </div>
          <div className="data-item s-card">
            <img className="data-item_icon" src="./icon/mymachine.png"></img>
            <div className="data-item_content">
              <div className="data-item_heading">距上次取肥</div>
              <div className="data-item_data">15<span className='data-foot'>天</span></div>
            </div>
          </div>
          <div className="data-item s-card">
            <img className="data-item_icon" src="./icon/fertilizer.png"></img>
            <div className="data-item_content">
              <div className="data-item_heading">现有甲烷</div>
              <div className="data-item_data">12<span className='data-foot'>g</span></div>
            </div>
          </div>
          <div className="data-item s-card">
            <img className="data-item_icon" src="./icon/methane.png"></img>
            <div className="data-item_content">
              <div className="data-item_heading">装置外甲烷浓度</div>
              <div className="data-item_data">正常<span className='data-foot'></span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
