import React from 'react'
import { useHistory } from 'react-router-dom'
import NowCount from '../components/NowCount';

export default function IndexPage() {
  const history=useHistory();
  return (
    <div className='index-page'>
      
      <NowCount></NowCount>
      <div className="card weather">
        <img className="weather_icon" src="./icon/weather.png"></img>
        <div className="weather_text">今日天气</div>
        <img className="weather_days" src="./icon/projectpromotion.png"></img>
      </div>
      <div className="card links-list">
        <div className="links-list_item" onClick={()=>{history.push('/mechine')}}>
          <img src="./icon/mymachine.png" className="links-list_item_icon" />
          <div className="links-list_item_text">我的机器</div>
        </div>
        <div className="links-list_item" onClick={()=>{history.push('/project')}}>
          <img src="./icon/projectpromotion.png" className="links-list_item_icon" />
          <div className="links-list_item_text">项目介绍</div>
        </div>
      </div>
    </div>
  )
}
