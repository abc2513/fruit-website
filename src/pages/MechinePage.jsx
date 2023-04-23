import React from 'react'
import NowCount from '../components/NowCount';

export default function MechinePage() {
  return (
    <div className='mechine-page'>
      <NowCount></NowCount>
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
          <div className="weather_text">26<span className='weather_text_foot'>°C</span></div>
        </div>
        <div className="weather_h s-card">
          <img src="./icon/humidity.png" />
          <div className="weather_text">63<span className='weather_text_foot'>%</span></div>
        </div>
      </div>
      <div className="charts card">
        <img className="data-item_icon" src="./icon/projectpromotion.png"></img>
        <img className="data-item_icon" src="./icon/projectpromotion.png"></img>
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
