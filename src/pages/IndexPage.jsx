import React, { Component } from 'react'
import NowCount from '../components/NowCount';
import axios from 'axios';
import HoursReport from '../components/HoursReport';
import DaySmallCard from '../components/DaySmallCard'

export default class IndexPage extends Component {
  state = {
    now_data: { now: {} },
    now_air: { now: {} },
    days_report: { daily: [{ fxDate: '' }, { fxDate: '' }] },
    hours_report: { hourly: [] },
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
    this.getDaysReport();
    this.getHoursReport();
    //this.getNowAir();
  }
  render() {
    const history = this.props.history;
    return (
      <div className='index-page'>

        <NowCount></NowCount>
        {/* <div className="card weather">
        <img className="weather_icon" src="./icon/weather.png"></img>
        <div className="weather_text">今日天气</div>
        <img className="weather_days" src="./icon/projectpromotion.png"></img>
      </div> */}

        
        <div className="weather card">

          <DaySmallCard day_report={this.state.days_report.daily[0]}></DaySmallCard>
          <DaySmallCard day_report={this.state.days_report.daily[1]}></DaySmallCard>

        </div>
        <div className="charts card">
          <HoursReport hours_report={this.state.hours_report}></HoursReport>
        </div>
        <div className="links-list card">
          <div className="links-list_item card" onClick={() => { history.push('/mechine') }}>
            <img src="./icon/mymachine.png" className="links-list_item_icon" />
            <div className="links-list_item_text">我的机器</div>
          </div>
          <div className="links-list_item card" onClick={() => { history.push('/project') }}>
            <img src="./icon/projectpromotion.png" className="links-list_item_icon" />
            <div className="links-list_item_text">项目介绍</div>
          </div>
        </div>
      </div>
    )
  }
}
