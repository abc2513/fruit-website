import React from 'react'

export default function ProjectPage() {
  return (
    <div className='project-page'>
      <div className="achive card">
        {/* <div className="bg-video">
          <video className="bg-video-content" autoPlay={true} muted loop>
            <source src="./media/video2.mp4" type="video/mp4" />
            你的浏览器不支持视频背景！
          </video>
        </div> */}
        <div className="achive_heading">项目成果</div>
        <div className="achive_text">

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum molestias maxime dolores sit quis officia quas fugit dolorem odio aliquid, consequatur autem eligendi, totam consectetur pariatur mollitia. Maiores, veniam magnam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur quo id, ullam deleniti incidunt excepturi aut odio repellat quibusdam reiciendis. Enim dolorem earum modi quas debitis facilis totam sint.</p>
        </div>
      </div>
      <div className="post card">
        <div className="post_heading"></div>
        <img src="./media/poster.png" className="post_img" />
      </div>
      <div className="video card">
        <iframe src="https://player.bilibili.com/player.html?bvid=BV1HG4y1X7qQ&high_quality=1&danmaku=0" border="0" framespacing="0" allowFullScreen={true} autoPlay={false}></iframe>
      </div>
    </div>
  )
}
