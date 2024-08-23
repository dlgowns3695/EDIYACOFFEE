import React, { useEffect, useRef } from 'react';
import style from './story.module.css';
import Footer from '../footer/Footer';
import '../App.css'; 
import AOS from "aos";
import "aos/dist/aos.css"; // AOS의 CSS 파일을 가져옵니다

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


/*
 메뉴바
 닫기 버튼 64 64

 로그인 버튼 185 65

 각 메뉴들 650 150 양옆 패딩 50
 > 메뉴, 화살표는 양끝으로 flex

 하단 아이콘 3개는 58 58

 h-pull w-pull

*/


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
      {/* 콘텐츠 부분에 일괄적으로 패딩 px-8 적용 */}
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
      <div className='w-full h-[320px] bg-cover md:hidden block ' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/subtitleMobileBG.png)` }}>
      </div>

    </>
  )
}

// 포부 첫번째 섹션
function Ambition() {
  gsap.registerPlugin(ScrollTrigger);
  const triggerRef = useRef(null);
  const imgPcRef = useRef(null);
  const imgMobileRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
        scrollTrigger : {
            trigger : triggerRef.current, // 스크롤트리거 대상 : 어떤 요소를 만났을때 재생
            start : 'top center', // 시작점 'top 90%' : 트리거 대상.con02 ul의 top 부분과 브라우저의 90% 부터 애니메이션 시작 'center center'으로 바꾸기
            // end : '20% 0%', // 끝점 '20% 100%' : 트리거 대상.con02 ul의 20%와 브라우저의 100%가 만날때 애니메이션 종료 '20% 20%'으로 바꾸기
            // scrub : 1, // 스크롤 이벤트는 스크롤 사용될때만 재생되도록 만들어주는 속성, 부드럽게 되감기 1 : 애니메이션 좀 빠름, 10 : 부드러움  // 잔상
            // markers:true,
        }
    })
    .to(imgPcRef.current, {y:'400px', duration:1.5 ,ease:'ease-in-out'}) 
},[]);

  useEffect(() => {
    gsap.timeline({
        scrollTrigger : {
            trigger : triggerRef.current,
            start : 'top 10%', 
            // markers:true,
        }
    })
    .to(imgMobileRef.current, {y:'450px', duration:2 ,ease:'ease-in-out'}) 
},[]);


  return (
    <div className="w-full h-[2100px] px-6 md:h-[1885px] bg-white flex justify-center relative overflow-hidden ">

      <div data-aos="fade-left" className="text-[130px] left-[30%]  absolute md:left-[50%] text-[#ebebeb] md:text-[220px] scoop-font whitespace-nowrap mt-[36px] md:mt-[61px]">
        Ediya Coffee
      </div>

      <div className="relative w-[1200px] h-full">

        {/* Always Beside You */}
        <div className="mt-[210px] md:mt-[386px] ">
          <h4 data-aos="fade-up" className="text-4xl leading-[1.3]   md:text-[52px] md:leading-20">
            Always Beside You,<br />
            <span className='font-semibold'>이디야커피는 언제나<br className='block md:hidden'/>
              당신 곁에<br className='block md:hidden'/>
              함께 합니다.</span> 
          </h4>
          <p data-aos="fade-up" data-aos-delay="200" ref={triggerRef} className="text-3xl text-[#222222] md:text-[30px] font-semibold mt-[40px] mb-10">
            커피 한잔의 진심
          </p>
          <p data-aos="fade-up" data-aos-delay="400" className="text-xl leading-[1.5] text-[#222222]">
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

        {/* 인물사진 위에서 아래로 gsap */}
        {/* 인물사진 */}
        <div ref={imgPcRef} className='hidden md:block absolute top-[1340px] right-[0px] w-[405px] custom1200:w-[605px] h-[777px]'>
          <img className="object-cover" src={`${process.env.PUBLIC_URL}/humanBn.png`} alt="Human"/> 
        </div>

        {/* 위치값 수정 0820 해야함, 현재위치에서 gsap로 위로 올리기 글자랑 간격 180px, 현재 1330*/} 
        <div data-aos="fade-left" className='block md:hidden absolute top-[950px] left-[3rem]'>
          <img className="w-full h-full object-cover" src={`${process.env.PUBLIC_URL}/humanMobileBn.png`} alt="Human"/> 
        </div>

        {/* 상생협력 */}
        <div className="flex justify-between mt-[37px] relative top-[700px] pl-[3rem] md:pl-0  md:top-[282px] md:left-0 md:mt-0 ">
         
          <div className="text-[#222222]">

            <h4 data-aos="fade-up" className="text-4xl leading-[1.3] md:text-[52px] text-[#243c84] md:leading-[62px]">
              함께 행복하기<br />
              <span className='font-semibold'>위한 상생협력</span> 
            </h4>
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl leading-[1.5] mt-[57px] md:text-[24px] md:leading-[39px] md:mt-[72px]">
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
    <div className="w-full h-[1320px] md:h-[700px] bg-[#edeef2] flex justify-center">
      <div className="w-[1200px] h-full flex flex-col items-center">
        <div className="mt-[116px] text-center">
          <h4 data-aos="fade-up"  className="text-4xl  md:text-[52px] mb-[12px]">이디야의 <span className='font-semibold'>핵심가치</span></h4>
          <p data-aos="fade-up"  className="text-xl md:text-[24px] ">
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
                <p key={i} className="text-[#222222] text-2xl">
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
    // 1200px 이상은 2100px 모바일은 2600px + 70(푸터메뉴)
    <div className="w-full h-[2200px] px-6 custom1200:h-[2100px]  flex justify-center ">
      
      <div data-aos="fade-up"  className="w-full md:w-[1200px] h-full ">
        {/* 이디야의 경영철학 */}
        <div className="flex justify-center mt-[156px] mb-[100px]  md:mb-[0px] text-center">
          <h4 className="text-4xl leading-[1.3] md:text-[52px]">
            이디야의 <span className="font-semibold">경영철학</span>
          </h4>
        </div>

        {/* 써클 */}
        <div className="hidden  relative top-[50px] md:flex justify-center items-center">
          {/* 맨 바깥 써클  */}
          <div className="relative w-[474px] h-[474px] rounded-full bg-[#f8f8f8]">

            {/* 아이콘1 */}
            <div className=" z-10 top-[0] left-[0] flex gap-[32px] md:gap-0 custom1200:absolute  justify-center items-center md:items-start">
              <img className="hidden md:block absolute z-10 top-[60px] left-[-30px] object-cover" src={`${process.env.PUBLIC_URL}/Philosophy01.png`} alt="Philosophy Icon 1" />
              <img className="block md:hidden object-cover" src={`${process.env.PUBLIC_URL}/Philosophy01Mobile.png`} alt="Philosophy Icon 1" />

              <img className='absolute top-[135px] left-[-80px] hidden custom1200:block' src={`${process.env.PUBLIC_URL}/line01.png`} alt="Line Decoration" />

              <div className="hidden custom1200:block relative mt-4 md:mt-0 text-right  md:top-[120px] md:left-[-350px] ">
                <h4 className="font-semibold text-[36px] md:text-[26px]  text-[#222222] mb-[12px] md:mb-[50px]">
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
            <div className=" z-10 top-[0] left-[0] flex gap-[32px] md:gap-0 custom1200:absolute  justify-center items-center md:items-start">
              <img className="hidden md:block absolute z-10 top-[60px] left-[345px] object-cover" src={`${process.env.PUBLIC_URL}/Philosophy02.png`} alt="Philosophy Icon 1" />
              <img className="block md:hidden object-cover" src={`${process.env.PUBLIC_URL}/Philosophy02Mobile.png`} alt="Philosophy Icon 2" />

              <img className='absolute top-[135px] left-[470px] hidden custom1200:block' src={`${process.env.PUBLIC_URL}/line02.png`} alt="Line Decoration" />

              <div className="hidden custom1200:block relative mt-4 md:mt-0 text-left  md:top-[120px] md:left-[570px] ">
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

            
            {/* 아이콘3 */}
            <div className=" z-10 top-[0] left-[0] flex gap-[32px] md:gap-0 custom1200:absolute  justify-center items-center md:items-start">
              <img className="hidden md:block absolute z-10 top-[370px] left-[155px] object-cover" src={`${process.env.PUBLIC_URL}/Philosophy03.png`} alt="Philosophy Icon 1" />
              <img className="block md:hidden object-cover" src={`${process.env.PUBLIC_URL}/Philosophy03Mobile.png`} alt="Philosophy Icon 3" />

              <img className='absolute top-[445px] left-[100px] hidden custom1200:block' src={`${process.env.PUBLIC_URL}/line03.png`} alt="Line Decoration" />

              <div className="hidden custom1200:block relative mt-4 md:mt-0 text-right  md:top-[450px] md:left-[-190px] ">
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

          </div>
          <div className="absolute w-[362px] h-[362px] rounded-full bg-[#e5e5e5]"></div>
          <div className={`${style.bggradient} absolute w-[226px] h-[226px] rounded-full bg-white`}></div>
          <div className={`absolute w-[223px] h-[223px] rounded-full bg-white`}></div>
          <img className="absolute object-cover" src={`${process.env.PUBLIC_URL}/ediyaCirclelogo.png`} alt="Ediya Circle Logo" />
        </div>

        {/* 1200 미만일때 문구3개 flex하기 위해 만든 */}
        <div className='hidden  px-6 w-full h-[auto] relative top-[180px] md:flex custom1200:hidden justify-center gap-16 '>

          <div className="relative mt-4 md:mt-0 text-left  md:top-[0] md:left-0 md:text-center">
            <h4 className="font-semibold text-[36px] md:text-[32px] md:text-center text-[#222222] mb-3 md:mb-4">
            기본을 지키는<br/>정직한 기업
            </h4>
            <p className="text-[#222222] text-[28px] leading-[38px] md:text-[16px] md:leading-[26px]">
            고객에게 우수한 품질의 커피를<br />
            합리적인 가격에 제공하고,<br />
            가맹점주를 위해 매장 수익을<br />
            최우선하며, 협력업체와의<br />
            오랜 신뢰를 이어갑니다.
            </p>
          </div>

          <div className="relative mt-4 md:mt-0 text-left  md:top-[0] md:left-0 md:text-center">
            <h4 className="font-semibold text-[36px] md:text-[32px] md:text-center text-[#222222] mb-3 md:mb-4">
            신나고 행복한<br/>즐거운 기업
            </h4>
            <p className="text-[#222222] text-[28px] leading-[38px] md:text-[16px] md:leading-[26px]">
            수평적 소통이 이루어지는 젊은<br />
            기업문화 업계 최고 수준의<br />
            복지혜택을 통해 직원 모두가 즐겁게<br />
            일하는 기업을 만듭니다.
            </p>
          </div>

          <div className="relative mt-4 md:mt-0 text-left  md:top-[0] md:left-0 md:text-center">
            <h4 className="font-semibold text-[36px] md:text-[32px] md:text-center text-[#222222] mb-3 md:mb-4">
            사람을 생각하는<br/>따뜻한 기업
            </h4>
            <p className="text-[#222222] text-[28px] leading-[38px] md:text-[16px] md:leading-[26px]">
            늘 고객의 입장에서 먼저 생각하고,<br />
            가맹점주의 입장을 배려하며<br />
            사회와 함께하려고 노력합니다.
            </p>
          </div>

        </div>


        {/* 모바일 아이콘 flex col */}
        <div className='w-full md:hidden '>

          {/* 모바일 아이콘1 */}
          <div className='flex items-center mb-24 gap-4'>
            <img className="w-[120px]" src={`${process.env.PUBLIC_URL}/Philosophy01Mobile.png`} alt="Philosophy Icon 1" />
            <div>
              <h4 className="font-semibold text-2xl  text-[#222222] mb-[12px]">
                기본을 지키는 정직한 기업
              </h4>
              <p className="text-[#222222] text-xl leading-[1.5]">
                고객에게 우수한 품질의 커피를 
                합리적인 가격에 제공하고, 
                가맹점주를 위해 매장 수익을 
                최우선하며, 협력업체와의 
                오랜 신뢰를 이어갑니다.
              </p>
            </div>
          </div>
          {/* 모바일 아이콘2 */}
          <div className='flex items-center mb-24 gap-4'>
            <img className="w-[120px]" src={`${process.env.PUBLIC_URL}/Philosophy02Mobile.png`} alt="Philosophy Icon 2" />
            <div>
              <h4 className="font-semibold text-2xl  text-[#222222] mb-[12px]">
              신나고 행복한 즐거운 기업
              </h4>
              <p className="text-[#222222] text-xl leading-[1.5]">
                수평적 소통이 이루어지는 젊은 
                기업문화 업계 최고 수준의
                복지혜택을 통해 직원 모두가 즐겁게 
                일하는 기업을 만듭니다.
              </p>
            </div>
          </div>
          {/* 모바일 아이콘3 */}
          <div className='flex items-center mb-24 gap-4'>
            <img className="w-[120px]" src={`${process.env.PUBLIC_URL}/Philosophy03Mobile.png`} alt="Philosophy Icon 3" />
            <div>
              <h4 className="font-semibold text-2xl  text-[#222222] mb-[12px]">
                사람을 생각하는 따뜻한 기업
              </h4>
              <p className="text-[#222222] text-xl leading-[1.5]">
                늘 고객의 입장에서 먼저 
                생각하고, 가맹점주의 입장을
                배려하며 사회와 함께하려고
                노력합니다.
              </p>
            </div>
          </div>

        </div>



        <div className='w-full h-[auto] relative flex flex-col justify-center top-[140px] md:top-[440px]  '>
          {/* 글로벌 생산성 1위 0821 top값 수정해야함 */}
          <div className="relative w-full flex flex-col items-center top-[-100px] custom1200:top-[0px] text-center">
            <h4 data-aos="fade-up"className="text-4xl leading-[1.3] md:text-[52px] preten-font300">글로벌 생산성 1위 <br />
                <span className="font-semibold">커피 전문기업 이디야 커피</span>
            </h4>
            
            <p data-aos="fade-up"   className="text-[20px] text-[#222222] preten-font300 mt-[50px] hidden md:block ">
              이디야(EDIYA)는 커피의 발상지인 에티오피아의 부족명인 동시에 대륙의 유일한 황제라는 뜻을 갖고,<br />
              최고의 커피 브랜드를 추구하는 이디야의 비전을 상징합니다.<br />
              - 이디야의 CI는 메뉴얼에 의거한 규정사항을 준수해야 합니다.<br />
              - 지정된 컬러를 반드시 사용하고, CI의 무단적인 변형도 일체 불허합니다.
            </p>

          </div>

          {/* 아래 이미지 2개 크기조절 */}

          {/* 로고, 메인컬러 */}
          <div data-aos="fade-up" className="flex custom1200:flex-row flex-col items-center custom1200:items-start justify-center gap-[47px] relative custom1200:absolute   top-[0px] custom1200:top-[400px]">
            {/* 왼쪽 */}
            <div className="border border-[#dcdddf] w-11/12 ">
              <img className="object-cover" src={`${process.env.PUBLIC_URL}/ediyamainInfo.png`} alt="Ediya Main Info" />
            </div>
          
            <div className="flex flex-col gap-[20px] w-11/12 ">
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
                <div key={index} className="px-2 py-2 w-full h-full md:w-[591px] md:h-[210px] border-[#dcdddf] border-[1px] flex gap-4 items-center">
                  <div className="w-[120px] h-[120px] " style={{ backgroundColor: item.color }}></div>
                  <div>
                    <h4 className="text-[#222222] text-xl font-semibold">{item.title}</h4>
                    <p className="text-[#222222] text-xl">{item.description}</p>
                    <p 
                      className="text-xl" 
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