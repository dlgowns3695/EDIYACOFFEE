import React from 'react'
import style from './story.module.css'
import Footer from '../footer/Footer'

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
function Ambition() {
  return (
    <div className="w-full h-[1885px] bg-white flex justify-center relative">
      <div className="absolute left-[950px] text-[#ebebeb] text-[220px] scoop-font whitespace-nowrap mt-[61px]">
        Ediya Coffee
      </div>

      <div className="w-[1200px] h-full bg-red-100">
        <div className="mt-[200px]">
          <h4 className="text-[52px] font-semibold">
            Always Beside You,<br />
            이디야커피는 언제나 당신 곁에 함께 합니다.
          </h4>
          <p className="text-black text-[30px] font-semibold mt-8 mb-[26px]">
            커피 한잔의 진심
          </p>
          <p className="text-[16px] text-black">
            해외에 로열티를 내지 않는 순수 국내 브랜드 이디야 커피,<br />
            품질 좋고 맛있는 커피를 합리적인 가격으로 소비자에게<br />
            제공하는 것을 우리의 진심이라 믿습니다. 더 맛있는<br />
            커피를 만들기 위해 2010년 커피연구소 설립을 시작으로<br />
            2016년 4월 '고객과 소통하는 커피연구소'를 테마로<br />
            [이디야커피랩]을 오픈하여 더 나은 커피를 위해<br />
            끊임없는 연구 개발을 진행하고 있습니다.
          </p>
        </div>

        <div className="flex justify-between mt-[50px]">
          <div className="text-black">
            <h4 className="text-[52px] text-[#243c84] font-semibold">
              함께 행복하기 위한 상생협력
            </h4>
            <p className="text-[16px] mt-4">
              이디야커피는 고객, 가맹점주, 협력사와의<br />
              상생협력을 무엇보다 소중하게 생각합니다.<br />
              이디야커피의 "상생협력"은 정직과 신뢰를<br />
              기반으로 장기적으로 구축되었습니다.<br />
              고객들에겐 우리의 진심을 제공하고,<br />
              가맹점주에게는 다양한 지원정책으로<br />
              미래의 행복으로 인도하며, 협력사와는<br />
              오랜 기간 쌓아온 굳건한 신뢰로<br />
              양질의 원부자재를 공급받고 있습니다.
            </p>
          </div>

          <img
            className="object-cover mt-[60px]"
            src={`${process.env.PUBLIC_URL}/humanBn.png`}
            alt="Human"
          />
        </div>
      </div>
    </div>
  );
}


function CoreValue() {
  return (
    <div className="w-full h-[700px] bg-gray-300 flex justify-center">
      <div className="w-[1200px] h-full flex flex-col items-center">
        <div className="mt-[121px] text-center">
          <h4 className="text-[52px] font-semibold mb-[10px]">이디야의 핵심가치</h4>
          <p className="text-black text-2xl">
            고객과 가맹점주, 협력사의<br />
            상생의 가치를 실천합니다.
          </p>
        </div>

        <div className="mt-[120px] flex justify-center gap-32">
          {[
            {
              imgSrc: "/coffeeIcon.png",
              text: ["고객의 건강한 삶의 질을", "향상시키겠습니다."],
            },
            {
              imgSrc: "/hand.png",
              text: ["이웃과 더불어 건강한", "사회를 만들겠습니다."],
            },
            {
              imgSrc: "/grafe.png",
              text: ["미래를 위한 지속 가능한", "환경을 유지하겠습니다."],
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                className="mb-[39px] object-cover"
                src={`${process.env.PUBLIC_URL}${item.imgSrc}`}
                alt="Core Value Icon"
              />
              {item.text.map((line, i) => (
                <p key={i} className="text-black text-2xl">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function Management() {
  return (
    <div className="w-full h-[2100px] flex justify-center relative">
      {/* 이디야의 경영철학 */}
      <div className="w-[1200px] h-full">
        <div className="flex justify-center mt-[156px] text-center">
          <h4 className="text-[52px]">
            이디야의 <span className="font-semibold">경영철학</span>
          </h4>
        </div>

        {/* 써클 */}
        <div className="relative top-[280px] flex justify-center items-center">
          <div className="absolute w-[474px] h-[474px] rounded-full bg-[#f8f8f8]"></div>
          <div className="absolute w-[362px] h-[362px] rounded-full bg-[#e5e5e5]"></div>
          <div className={`${style.bggradient} absolute w-[226px] h-[226px] rounded-full bg-white`}></div>
          <div className={`absolute w-[223px] h-[223px] rounded-full bg-white`}></div>
          <img className="absolute object-cover" src={`${process.env.PUBLIC_URL}/ediyaCirclelogo.png`} alt="Ediya Circle Logo" />
        </div>

        {/* 아이콘1 */}
        <div className="relative top-[110px]">
          <div className="absolute top-[74px] left-0 text-right">
            <h4 className="font-semibold text-[26px] text-black">
              기본을 지키는 정직한 기업
            </h4>
            <p className="text-black text-[18px]">
              고객에게 우수한 품질의 커피를<br />
              합리적인 가격에 제공하고,<br />
              가맹점주를 위해 매장 수익을<br />
              최우선하며, 협력업체와의<br />
              오랜 신뢰를 이어갑니다.
            </p>
          </div>
          <img className="absolute top-[2px] left-[314px] object-cover" src={`${process.env.PUBLIC_URL}/Philosophy01.png`} alt="Philosophy Icon 1" />
        </div>

        {/* 아이콘2 */}
        <div className="relative top-[164px] left-[963px] text-right">
          <div className="absolute top-0 left-0 text-left">
            <h4 className="font-semibold text-[26px] text-black">
              신나고 행복한 즐거운 기업
            </h4>
            <p className="text-black text-[18px]">
              수평적 소통이 이루어지는 젊은<br />
              기업문화 업계 최고 수준의<br />
              복지혜택을 통해 직원 모두가 즐겁게<br />
              일하는 기업을 만듭니다.
            </p>
          </div>
          <img className="absolute top-[-33px] left-[-252px] object-cover" src={`${process.env.PUBLIC_URL}/Philosophy02.png`} alt="Philosophy Icon 2" />
        </div>

        {/* 아이콘3 */}
        <div className="relative top-[529px] left-[145px] text-right bg-red-500">
          <div className="absolute top-0 left-0">
            <h4 className="font-semibold text-[26px] text-black">
              사람을 생각하는 따뜻한 기업
            </h4>
            <p className="text-black text-[18px]">
              늘 고객의 입장에서 먼저 생각하고,<br />
              가맹점주의 입장을 배려하며<br />
              사회와 함께하려고 노력합니다.
            </p>
          </div>
          <img className="absolute top-[-113px] left-[371px] object-cover" src={`${process.env.PUBLIC_URL}/Philosophy03.png`} alt="Philosophy Icon 3" />
        </div>

        {/* 글로벌 생산성 1위 */}
        <div className="w-full flex flex-col items-center absolute top-[1080px] text-center">
          <h4 className="text-[32px]">글로벌 생산성 1위</h4>
          <h4 className="text-[48px] font-semibold mb-8">커피 전문기업 이디야 커피</h4>
          <p className="text-black">
            이디야(EDIYA)는 커피의 발상지인 에티오피아의 부족명인 동시에 대륙의 유일한 황제라는 뜻을 갖고,<br />
            최고의 커피 브랜드를 추구하는 이디야의 비전을 상징합니다.
          </p>
          <p className="text-black">
            - 이디야의 CI는 메뉴얼에 의거한 규정사항을 준수해야 합니다.<br />
            - 지정된 컬러를 반드시 사용하고, CI의 무단적인 변형도 일체 불허합니다.
          </p>
        </div>

        {/* 로고, 메인컬러 */}
        <div className="flex justify-center gap-4 absolute top-[1485px]">
          <div className="border border-[#dcdddf]">
            <img className="object-cover" src={`${process.env.PUBLIC_URL}/ediyamainInfo.png`} alt="Ediya Main Info" />
          </div>
          <div className="flex flex-col items-center gap-4 w-[591px] h-[419px]">
            {[
              {
                color: '#243c84',
                title: 'Ediya Coffee Blue',
                description: '품질에 대한 자신감',
                hex: '#243c84',
              },
              {
                color: '#dcdddf',
                title: 'Ediya Coffee Gray',
                description: '고객과의 소통',
                hex: '#dcdddf',
              },
            ].map((item, index) => (
              <div key={index} className={`${style.borderBox}`}>
                <div className="w-[150px] h-[150px]" style={{ backgroundColor: item.color }}></div>
                <div>
                  <h4 className="text-black text-[24px] font-semibold">{item.title}</h4>
                  <p className="text-black mb-4">{item.description}</p>
                  <p>{item.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Story