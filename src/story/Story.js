import React, { useEffect } from 'react';
import style from './story.module.css';
import Footer from '../footer/Footer';
import '../App.css'; 
import AOS from "aos";
import "aos/dist/aos.css"; // AOS의 CSS 파일을 가져옵니다

const Story = () => {

  useEffect(() => {
    AOS.init({
      duration: 900, // 애니메이션 지속 시간
      // offset: 100,    // 스크롤에 따른 애니메이션 트리거 지점 조정
      easing: 'ease-in-out', // 애니메이션의 이징 효과
      once: true // 애니메이션이 한 번만 실행되도록 설정
    });
  }, []);

  

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
      {/* 모바일일때 히든, pc때 block */}
      <div className='w-full h-[431px] bg-cover hidden md:block' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/subtitleBG.png)` }}>
      </div>
      {/* 모바일일때 block , pc때 히든 */}
      <div className='w-full h-[452px] bg-cover md:hidden block ' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/subtitleMobileBG.png)` }}>
      </div>

    </>
  )
}

// 포부 첫번째 섹션
function Ambition() {
  return (
    <div className="w-full h-[3100px] md:h-[1885px] bg-white flex justify-center relative ">

      <div data-aos="fade-left" className="text-[130px] left-[10%]  absolute md:left-[50%] text-[#ebebeb] md:text-[220px] scoop-font whitespace-nowrap mt-[61px]">
        Ediya Coffee
      </div>

      <div className="relative w-[1200px] h-full">

        {/* Always Beside You */}
        <div className="mt-[386px]">
          <h4 data-aos="fade-up" className="text-[58px] leading-[82px] md:text-[52px] md:leading-20">
            Always Beside You,<br />
            <span className='font-semibold'>이디야커피는 언제나 당신 곁에 함께 합니다.</span> 
          </h4>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[40px] md:text-[#222222] md:text-[30px] font-semibold mt-[40px] mb-[20px]">
            커피 한잔의 진심
          </p>
          <p data-aos="fade-up" data-aos-delay="400" className="text-[24px] leading-[37px] text-[#222222]">
            해외에 로열티를 내지 않는 순수 국내 브랜드<br className='hidden md:block' />
            이디야 커피, 품질 좋고 맛있는 커피를 합리적인<br className='hidden md:block' />
            가격으로 소비자에게 제공하는 것을 우리의 진심이라<br className='hidden md:block' />
            믿습니다. 더 맛있는 커피를 만들기 위해 2010년<br className='hidden md:block' />
            커피연구소 설립을 시작으로 2016년 4월 '고객과<br className='hidden md:block' />
            소통하는 커피연구소'를 테마로 [이디야커피랩]을<br className='hidden md:block' />
            오픈하여 더 나은 커피를 위해 끊임없는 연구 개발을<br className='hidden md:block' />
            진행하고 있습니다.
          </p>
        </div>

        {/* 인물사진 */}
        <div data-aos="fade-left" className='hidden md:block absolute top-[940px] left-[600px]'>
          <img className="object-cover" src={`${process.env.PUBLIC_URL}/humanBn.png`} alt="Human"/> 
        </div>
        {/* 위치값 수정 0820 해야함 */}
        <div data-aos="fade-left" className='block md:hidden absolute top-[1110px] left-[180px]'>
          <img className="object-cover" src={`${process.env.PUBLIC_URL}/humanMobileBn.png`} alt="Human"/> 
        </div>

        {/* 상생협력 */}
        <div className="flex justify-between relative top-[1000px] md:top-0 md:mt-[282px]">
          <div className="text-[#222222]">

            <h4 data-aos="fade-up" className="text-[58px] leading-[82px] md:text-[52px] text-[#243c84] md:leading-[62px]">
              함께 행복하기<br />
              <span className='font-semibold'>위한 상생협력</span> 
            </h4>
            <p data-aos="fade-up" data-aos-delay="200" className="text-[32px] leading-[48px] md:text-[24px] md:leading-[39px] mt-[72px]">
              이디야커피는 고객, 가맹점주, 협력사와의<br className='hidden md:block' />
              상생협력을 무엇보다 소중하게 생각합니다.<br className='hidden md:block' />
              이디야커피의 "상생협력"은 정직과 신뢰를<br className='hidden md:block' />
              기반으로 장기적으로 구축되었습니다.<br className='hidden md:block' />
              고객들에겐 우리의 진심을 제공하고,<br className='hidden md:block' />
              가맹점주에게는 다양한 지원정책으로<br className='hidden md:block' />
              미래의 행복으로 인도하며, 협력사와는<br className='hidden md:block' />
              오랜 기간 쌓아온 굳건한 신뢰로<br className='hidden md:block' />
              양질의 원부자재를 공급받고 있습니다.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
}

//
function CoreValue() {
  return (
    <div className="w-full h-[1620px] md:h-[700px] bg-[#edeef2] flex justify-center">
      <div className="w-[1200px] h-full flex flex-col items-center">
        <div className="mt-[116px] text-center">
          <h4 data-aos="fade-up"  className="text-[58px]  md:text-[52px] mb-[12px]">이디야의 <span className='font-semibold'>핵심가치</span></h4>
          <p data-aos="fade-up"  className="text-[#3a4767] text-[32px] md:text-[24px] font-semibold">
            고객과 가맹점주, 협력사의 상생의 가치를 실천합니다.
          </p>
        </div>

        {/* flex-col 피씨 검토해보기 */}
        <div data-aos="fade-up"  className="mt-[110px] flex md:flex-row flex-col justify-center gap-32">
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
                <p key={i} className="text-[#222222] text-[36px] md:text-2xl">
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

// 아이콘 세로, 수정해야함 0802
function Management() {
  return (
    <div className="w-full h-[2600px] md:h-[2100px] flex justify-center relative">
      
      <div data-aos="fade-up"  className=" w-[1200px] relative  h-full ">
        {/* 이디야의 경영철학 */}
        <div className="flex justify-center mt-[156px] mb-[156px] md:mb-[0px] text-center">
          <h4 className="text-[58px] md:text-[52px]">
            이디야의 <span className="font-semibold">경영철학</span>
          </h4>
        </div>

        {/* 써클 */}
        <div className="hidden md:block relative top-[290px] md:flex justify-center items-center">
          <div className="absolute w-[474px] h-[474px] rounded-full bg-[#f8f8f8]"></div>
          <div className="absolute w-[362px] h-[362px] rounded-full bg-[#e5e5e5]"></div>
          <div className={`${style.bggradient} absolute w-[226px] h-[226px] rounded-full bg-white`}></div>
          <div className={`absolute w-[223px] h-[223px] rounded-full bg-white`}></div>
          <img className="absolute object-cover" src={`${process.env.PUBLIC_URL}/ediyaCirclelogo.png`} alt="Ediya Circle Logo" />
        </div>

        
        <div className='flex flex-col gap-[86px] md:flex-none '>
          {/* 아이콘1 */}
          <div className="relative top-[0] flex gap-[32px] md:gap-0 md:flex-none justify-center items-center md:items-start">
            <img className="hidden md:block absolute top-[115px] left-[314px] object-cover" src={`${process.env.PUBLIC_URL}/Philosophy01.png`} alt="Philosophy Icon 1" />
            <img className="block md:hidden object-cover" src={`${process.env.PUBLIC_URL}/Philosophy01Mobile.png`} alt="Philosophy Icon 1" />

            <img className='absolute top-[185px] left-[260px] hidden md:block' src={`${process.env.PUBLIC_URL}/line01.png`} alt="Line Decoration" />

            <div className="relative mt-4 md:mt-0 text-left md:absolute md:top-[170px] md:left-0 md:text-right">
              <h4 className="font-semibold text-[36px] md:text-[26px] text-[#222222] mb-[12px] md:mb-[50px]">
                기본을 지키는 정직한 기업
              </h4>
              <p className="text-[#222222] text-[28px] leading-[38px] md:text-[18px] md:leading-[26px]">
                고객에게 우수한 품질의 커피를<br />
                합리적인 가격에 제공하고,<br />
                가맹점주를 위해 매장 수익을<br />
                최우선하며, 협력업체와의<br />
                오랜 신뢰를 이어갑니다.
              </p>
            </div>
          </div>

          {/* 아이콘2 */}
          <div className="relative top-[0] md:left-[710px] flex gap-[32px] md:gap-0 md:flex-none justify-center items-center ">
            <img className="hidden md:block absolute z-10 top-[0] left-[0] object-cover " src={`${process.env.PUBLIC_URL}/Philosophy02.png`} alt="Philosophy Icon 2" />
            <img className="block md:hidden object-cover" src={`${process.env.PUBLIC_URL}/Philosophy02Mobile.png`} alt="Philosophy Icon 2" />
            
            <img className='absolute top-[60px] left-[140px] hidden md:block' src={`${process.env.PUBLIC_URL}/line02.png`} alt="Line Decoration" />
          
            {/* 모바일 버전 수정: 아이콘1과 같은 방식으로 적용 */}
            <div className="relative mt-4 md:mt-0 text-left md:absolute md:top-[40px] md:left-[235px] ">

              <h4 className="font-semibold text-[36px] md:text-[26px]  text-[#222222] mb-[12px] md:mb-[50px]">
                신나고 행복한 즐거운 기업
              </h4>
              <p className="text-[#222222] text-[28px] leading-[38px] md:text-[18px] md:leading-[26px]">
                수평적 소통이 이루어지는 젊은<br />
                기업문화 업계 최고 수준의<br />
                복지혜택을 통해 직원 모두가 즐겁게<br />
                일하는 기업을 만듭니다.
              </p>
            </div>


          </div>
          {/* 아이콘33 */}
          <div className="relative top-[0] md:top-[250px] md:left-[520px] flex gap-[32px] md:gap-0 md:flex-none justify-center items-center md:items-start">
            <img className="absolute top-[0px] left-[0] object-cover hidden md:block z-10" src={`${process.env.PUBLIC_URL}/Philosophy03.png`} alt="Philosophy Icon 3" />
            <img className="block md:hidden object-cover" src={`${process.env.PUBLIC_URL}/Philosophy03Mobile.png`} alt="Philosophy Icon 3" />

            <img className='absolute top-[85px] left-[-60px] hidden md:block' src={`${process.env.PUBLIC_URL}/line03.png`} alt="Line Decoration" />
          
            {/* 모바일 버전 수정: 아이콘1과 같은 방식으로 적용 */}
            <div className="relative mt-4 md:mt-0 text-left md:absolute md:top-[90px] md:left-[-350px] ">

            <h4 className="font-semibold text-[36px] md:text-[26px]  text-[#222222] mb-[12px] md:mb-[50px]">
                사람을 생각하는 따뜻한 기업
              </h4>
              <p className="text-[#222222] text-[28px] leading-[38px] md:text-[18px] md:leading-[26px]">
                늘 고객의 입장에서 먼저 생각하고,<br />
                가맹점주의 입장을 배려하며<br />
                사회와 함께하려고 노력합니다.
              </p>
            </div>


          </div>

          
          {/* <div className="relative md:top-[529px] md:left-[145px]">
          
            <div className="relative mt-4 md:mt-0 text-left md:absolute md:top-0 md:left-0 md:text-right">
              <h4 className="font-semibold text-[26px] md:text-[36px] text-[#222222]">
                사람을 생각하는 따뜻한 기업
              </h4>
              <p className="text-[#222222] text-[18px] leading-[26px] md:text-[28px] md:leading-[38px]">
                늘 고객의 입장에서 먼저 생각하고,<br />
                가맹점주의 입장을 배려하며<br />
                사회와 함께하려고 노력합니다.
              </p>
            </div>
          </div>

          <img className="absolute top-[658px] left-[524px] object-cover hidden md:block" src={`${process.env.PUBLIC_URL}/Philosophy03.png`} alt="Philosophy Icon 3" />
          <img className="block md:hidden object-cover" src={`${process.env.PUBLIC_URL}/Philosophy03Mobile.png`} alt="Philosophy Icon 3" />

          <img className='absolute top-[755px] left-[430px] hidden md:block' src={`${process.env.PUBLIC_URL}/line03.png`} alt="Line Decoration" />
         */}
        </div>











        <div className='w-full h-[auto] relative flex flex-col justify-center top-[100px] '>
          {/* 글로벌 생산성 1위 0821 top값 수정해야함 */}
          <div className="relative w-full flex flex-col items-center top-[0] md:top-[648px] text-center">
            <h4 data-aos="fade-up"className="text-[58px] leading-[74px] md:text-[52px] preten-font300">글로벌 생산성 1위 <br />
                <span className="font-semibold">커피 전문기업 이디야 커피</span>
            </h4>
            
            {/* 0820 폰트크기 체크 */}
            <p data-aos="fade-up"   className="text-[20px] text-[#222222] preten-font300 mt-[50px] hidden md:block ">
              이디야(EDIYA)는 커피의 발상지인 에티오피아의 부족명인 동시에 대륙의 유일한 황제라는 뜻을 갖고,<br />
              최고의 커피 브랜드를 추구하는 이디야의 비전을 상징합니다.<br />
              - 이디야의 CI는 메뉴얼에 의거한 규정사항을 준수해야 합니다.<br />
              - 지정된 컬러를 반드시 사용하고, CI의 무단적인 변형도 일체 불허합니다.
            </p>

          </div>


          {/* 로고, 메인컬러 */}
          <div data-aos="fade-up" className="flex md:flex-row flex-col items-center md:items-start justify-center gap-[47px] relative md:absolute top-[100px] md:top-[1050px]">
            {/* 왼쪽 */}
            <div className="border border-[#dcdddf]">
              <img className="object-cover" src={`${process.env.PUBLIC_URL}/ediyamainInfo.png`} alt="Ediya Main Info" />
            </div>
          
            <div className="flex flex-col gap-[20px] w-[560px] h-[420px] ">
              {[
                {
                  color: '#243c84',
                  title: 'Ediya Coffee Blue',
                  description: '품질에 대한 자신감',
                  hex: '#243c84 | R1, G47 B107',
                },
                {
                  color: '#dcdddf',
                  title: 'Ediya Coffee Gray',
                  description: '고객과의 소통',
                  hex: '#dcdddf | R220, G221 B223',
                },
                
              ].map((item, index) => (
                <div key={index} className={`${style.borderBox}`}>
                  <div className="w-[152px] h-[152px] ml-[24px]" style={{ backgroundColor: item.color }}></div>
                  <div>
                    <h4 className="text-[#222222] text-[27px] font-semibold">{item.title}</h4>
                    <p className="text-[#222222] text-[20px]">{item.description}</p>
                    <p 
                      className="text-[20px]" 
                      style={{ color: index === 0 ? '#243c84' : '#dcdddf' }}
                    >{item.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>





      </div>

    </div>
  );
}



export default Story