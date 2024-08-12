import React from 'react'
import style from './story.module.css'

const Story = () => {
  return (
    <>
      <TopBanner />
      <Ambition />
      <CoreValue />
      <Management />
      <Footer />
    </>

  )
}

function TopBanner(){
  return (
    <>
      <div className='w-full h-[561px] bg-cover' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/subtitleBG.png)` }}>

      </div>
    </>
  )
}

// 포부 첫번째 섹션
function Ambition(){
  return(
    <>
    {/* bg-white */}
    {/* <p className={`${style.txt} `}>안녕</p> */}
      <div className='w-full h-[1884px] bg-white flex  justify-center'>
        <div className='ca  absolute left-[950px] scoop-font text-[#ebebeb] text-[220px] whitespace-nowrap mt-[61px]'>
          Ediya Coffee
        </div>

        {/* bg-gray-400  */}
        <div className='w-[1200px] h-full relative '>
          <div className='mt-[391px]'>
            <h4 className='text-[52px] mt-[-16px]'>Always Beside You,</h4>
            <h4 className='text-[52px] font-semibold mb-[28px]'>이디야커피는 언제나 당신 곁에 함께 합니다.</h4>
            <p className='text-black text-[30px] font-semibold mt-8 mb-[26px]'>커피 한잔의 진심</p>
            <p className='text-black'>해외에 로열티를 내지 않는 순수 국내 브랜드 이디야 커피, 품질 좋고 맛있는 커피를 합리적인 가격으로</p>
            <p className='text-black'>소비자에게 제공하는 것을 우리의 진심이라 믿습니다. 더 맛있는 커피를 만들기 위해 2010년</p>
            <p className='text-black'>커피연구소 설립을 시작으로 2016년 4월 '고객과 소통하는 커피연구소'를 테마로 [이디야커피랩]을 오픈하여 더 나은</p>
            <p className='text-black'>커피를 위해 끊임없는 연구 개발을 진행하고 있습니다.</p>
          </div>


          <div className='flex justify-between mt-[110px]'>
            
            <div className='text-black'>
              <h4 className='text-[52px] text-[#243c84] mt-[186px] mb-[34px]'>함께 행복하기</h4>
              <h4 className='text-[52px] text-[#243c84] font-semibold mb-[86px]'>위한 상생협력</h4>
              <p className='font-[24px] '>이디야커피는 고객, 가맹점주, 협력사와의 상생협력을</p>
              <p className='font-[24px] '>무엇보다 소중하게 생각합니다.</p>
              <p className='font-[24px] '>이디야커피의 "상생협력"은 정직과 신뢰를</p>
              <p className='font-[24px] '>기반으로 장기적으로 구축되었습니다.</p>
              <p className='font-[24px] '>고객들에겐 우리의 진심을 제공하고,</p>
              <p className='font-[24px] '>가맹점주에게는 다양한 지원정책으로 미래의 행복으로</p>
              <p className='font-[24px] '>인도하며, 협력사와는 오랜긱간 쌓아온 굳건한</p>
              <p className='font-[24px] '>신뢰로 양질의 원부자재를 공급받고 있습니다.</p>
            </div>

            <div className='absolute top-[937px] left-[597px]'>
              <img className='object-cover'  src={`${process.env.PUBLIC_URL}/humanBn.png`}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function CoreValue(){
  return(
    <>  
    {/* #edeef2 */}
      <div className='w-full h-[700px] bg-gray-300 flex  justify-center'>
        <div className='w-[1200px] h-full'>
          <div className='flex flex-col items-center mt-[121px]'>
            <h4 className='text-[52px] font-semibold mb-[10px]'>이디야의 핵심가치</h4>
            <p className='text-black text-2xl'>고객과 가맹점주, 협력사의 상생의 가치를 실천합니다.</p>
          </div>

          <div className='mt-[120px] flex justify-center gap-32'>
            <div className='flex flex-col items-center '> 
              <div className='mb-[39px]'>
                <img className='object-cover'  src={`${process.env.PUBLIC_URL}/coffeeIcon.png`}/>
              </div>
              <p className='text-black text-2xl'>고객의 건강한 삶의 질을</p>
              <p className='text-black text-2xl'>향상시키겠습니다.</p>
            </div>
            <div className='flex flex-col items-center '> 
              <div className='mb-[39px]'>
                <img className='object-cover'  src={`${process.env.PUBLIC_URL}/hand.png`}/>
              </div>
              <p className='text-black text-2xl'>이웃과 더불어 건강한</p>
              <p className='text-black text-2xl'>사회를 만들겠습니다.</p>
            </div>
            <div className='flex flex-col items-center '> 
              <div className='mb-[39px]'>
                <img className='object-cover'  src={`${process.env.PUBLIC_URL}/grafe.png`}/>
              </div>
              <p className='text-black text-2xl'>미래를 위한 지속 가능한</p>
              <p className='text-black text-2xl'>환경을 유지하겠습니다.</p>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

function Management() {
  return (
    <>
    {/* bg-blue-300 */}
      <div className='w-full h-[2100px] flex justify-center '>

        {/* bg-gray-200 */}
        <div className='relative w-[1200px] h-full'>
          {/* 이디야의 경영철학 */}
          <div className='flex justify-center mt-[156px]'>
            <h4 className='text-[52px]'>이디야의 <span className='font-semibold'>경영철학</span></h4>
          </div>
          {/* 써클 */}
          <div className='relative top-[280px] flex justify-center items-center'>
            <div className='absolute w-[474px] h-[474px] rounded-full bg-[#f8f8f8]'></div>
            <div className='absolute w-[362px] h-[362px] rounded-full bg-[#e5e5e5]'></div>
            {/* <p className={`${style.txt} `}>안녕</p> */}
            <div className= {`${style.bggradient}`}></div>
            <div className='absolute w-[226px] h-[226px] rounded-full bg-white'></div>
            <div className='absolute'><img className='object-cover'src={`${process.env.PUBLIC_URL}/ediyaCirclelogo.png`}></img></div>
          </div>

          {/* 아이콘1 */}
          <div className='text-right relative top-[110px] left-[0]'>
            <div className='absolute top-[74px] left-0'>
              <h4 className='font-semibold text-[26px] text-black'>기본을 지키는 정직한 기업</h4>
              <p className='text-black text-[18px]'>고객에게 우수한 품질의 커피를</p>
              <p className='text-black text-[18px]'>합리적인 가격에 제공하고,</p>
              <p className='text-black text-[18px]'>가맹점주를 위해 매장 수익을</p>
              <p className='text-black text-[18px]'>최우선하며, 협력업체와의</p>
              <p className='text-black text-[18px]'>오랜 신뢰를 이어갑니다.</p>
            </div>

            <div className='absolute top-[2px] left-[314px]'><img className='object-cover'src={`${process.env.PUBLIC_URL}/Philosophy01.png`}></img></div>
          </div>

            {/* 아이콘2 */}
          <div className='text-right relative top-[164px] left-[963px]'>
            <div className='absolute top-0 left-[0px] text-left'>
              <h4 className='font-semibold text-[26px] text-black'>신나고 행복한 즐거운 기업</h4>
              <p className='text-black text-[18px]'>수평적 소통이 이러지는 젊은</p>
              <p className='text-black text-[18px]'>기업문화 업계 최고 수준의</p>
              <p className='text-black text-[18px]'>복지혜택을 통해 직원 모두가 즐겁게</p>
              <p className='text-black text-[18px]'>일하는 기업을 만듭니다.</p>
            </div>

            <div className='absolute top-[-33px] left-[-252px]'><img className='object-cover'src={`${process.env.PUBLIC_URL}/Philosophy02.png`}></img></div>
          </div>

            {/* 아이콘3 */}
          <div className='text-right relative top-[529px] left-[145px] bg-red-500'>
            <div className='absolute top-0 left-[0px]'>
              <h4 className='font-semibold text-[26px] text-black'>사람을 생각하는 따뜻한 기업</h4>
              <p className='text-black text-[18px]'>늘 고객의 입장에서 먼저 생각하고,</p>
              <p className='text-black text-[18px]'>가맹점주의 입장을 배려하며</p>
              <p className='text-black text-[18px]'>사회와 함께하려고 노력합니다.</p>
            </div>

            <div className='absolute top-[-113px] left-[371px]'><img className='object-cover'src={`${process.env.PUBLIC_URL}/Philosophy03.png`}></img></div>
          </div>

          {/* </div> */}

          {/* bg-red-300 글로벌 생산성 1위 */}
          <div className='w-full flex flex-col items-center  absolute top-[1080px]'>
            <h4 className='text-[32px]'>글로벌 생산성 1위</h4>
            <h4 className='text-[48px] font-semibold mb-8'>커피 전문기업 이디야 커피</h4>
            <p className='text-black'>이디야(EDIYA)는 커피의 발상지인 에티오피아의 부족명인 동시에 대륙의 유일한 황제라는 뜻을 갖고,</p>
            <p className='text-black'>최고의 커피 브랜드를 추구하는 이디야의 비전을 상징합니다.</p>
            <p className='text-black'>-이디야의 Cl는 메뉴얼에 의거한 규정사항을 준수해야 합니다.</p>
            <p className='text-black'>-지정된 컬러를 반드시 사용하고, Cl의 무단적인 변형도 일체 불허합니다.</p>
          </div>

          {/* 로고, 메인컬러 div */}
          <div className='flex justify-center gap-4 absolute top-[1485px]'>
            
            <div><img className='object-cover'  src={`${process.env.PUBLIC_URL}/ediyamainInfo.png`}></img></div>
            
            <div className='flex flex-col items-center gap-4 w-[591px] h-[419px]'>

              
              <div className={`${style.borderBox}`}>
                <div className='w-[150px] h-[150px] bg-[#243c84]'></div>
                <div>
                  <h4 className='text-black text-[24px] font-semibold'>Ediya Coffee Blue</h4>
                  <p className='text-black mb-4'>품질에 대한 자신감</p>
                  <p>#e70014 | R231, G0, B20</p>
                </div>

              </div>
              <div className={`${style.borderBox}`}>
                <div className='w-[150px] h-[150px] bg-[#dcdddf]'></div>
                <div>
                  <h4 className='text-black text-[24px] font-semibold'>Ediya Coffee Gray</h4>
                  <p className='text-black mb-4'>고객과의 소통</p>
                  <p>#e70014 | R231, G0, B20</p>
                </div>

              </div>

            </div>
          </div>
          
        </div>

      </div>
    
    </>
  )
} 

function Footer(){
  return (
    <>
    {/* 100% */}
      <div className='w-full bg-[#212530] h-[460px] flex  justify-center text-[#afafaf] text-xs'>
        {/* 1200px bg-red-200 */}
        <div className='w-[1200px] h-full '>
          <div className='flex justify-between mt-[110px]'>
            {/* 폰트 종류? */}
            <h4 className='font-semibold text-2xl'>EDIYA COFFEE</h4>

            <div>
              <ul className='flex justify-center items-center gap-4'>
                <li><img src={`${process.env.PUBLIC_URL}/instar.png`} /></li>
                <li><img src={`${process.env.PUBLIC_URL}/facebook.png`} /></li>
                <li><img src={`${process.env.PUBLIC_URL}/youtube.png`} /></li>
                <li><img src={`${process.env.PUBLIC_URL}/wifi.png`} /></li>
              </ul>
            </div>
          </div>
          <div className='mt-[80px]'>
            <p className='mb-[31px]'>개인정보처리 방침 | 이메일 무단 수집 거부</p>
            <p>이디야커피(주) | 대표이사 강태성 | 서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동 221-17) | TEL:02-543-6467</p>
            <p className='mb-[31px]'>FAX:02-543-7191 | 사업자등록번호:107-86-16302 | 통신판매업 신고:강남 제 002519호</p>
            <p>Copyright 이디야커피(주) All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default Story