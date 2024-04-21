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

          <p>以“节能、智能”为主基调，本项目组采用了产酸菌与甲烷菌协同厌氧发酵产甲烷，剩余物使用EM菌进行厌氧堆肥，全过程中控机通过深度强化学习与物联网工程进行智能检测控制，发明了一套腐烂水果综合利用装置，实现了腐烂水果一体化、智能化、资源化的全过程处理。项目已申请两项发明专利且已入选国家级大学生创新创业训练计划项目，目前已向ICCEG 2023投稿已审核通过，该论文同时将由IET Digital Library出版，并被收录于IEEE Xplore中，可由IET Inspec、Ei Compendex和Scopus检索。</p>

        </div>
      </div>
      <div className="post card">
        <div className="post_heading"></div>
        <img src="./media/poster.png" className="post_img" />
      </div>
      <div className="video card">
        <iframe src="https://player.bilibili.com/player.html?bvid=BV1C14y1Z7VY&high_quality=1&danmaku=0" border="0" framespacing="0" allowFullScreen={true} autoPlay={false}></iframe>
      </div>
    </div>
  )
}
