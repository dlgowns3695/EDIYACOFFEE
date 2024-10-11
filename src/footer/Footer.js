import React from 'react';

function Footer() {
  return (
    <div className='w-full bg-[#212530] md:h-[460px] flex justify-center text-[#afafaf] text-xs'>
      {/* flex justify-center << 모바일, 구조 수정하기  */}
      <div className='w-full md:w-4/5 custom1200:w-[1200px] h-full '>

        {/* 피씨 EDIYA COFFEE, ul, li */}
        <div className='hidden md:block'>

          <div className=' md:flex justify-between mt-[110px]'>  
            <h4 className='font-semibold text-[27px] mt-69px mb-58px md:mt-0 md:mb-0 md:text-2xl'>EDIYA COFFEE</h4>
            
            {/* ul li */}
            <div>
              <ul className='flex justify-center items-center gap-4 '>
                <li><img src={`${process.env.PUBLIC_URL}/instar.png`} alt="Instagram" /></li>
                <li><img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Facebook" /></li>
                <li><img src={`${process.env.PUBLIC_URL}/youtube.png`} alt="YouTube" /></li>
                <li><img src={`${process.env.PUBLIC_URL}/wifi.png`} alt="Wi-Fi" /></li>
              </ul>

            </div>

            
          </div>

        {/* 아래 문구 */}
        <div className='mt-[80px] hidden md:block text-[16px] tracking-[-0.0025rem]'>
          <p className='mb-[31px]'>개인정보처리 방침 | 이메일 무단 수집 거부</p>
          <p className='mb-[14px]'>이디야커피(주) | 대표이사 강태성 | 서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동 221-17) | TEL:02-543-6467</p>
          <p className='mb-[31px]'>FAX:02-543-7191 | 사업자등록번호:107-86-16302 | 통신판매업 신고:강남 제 002519호</p>
          <p>Copyright 이디야커피(주) All Rights Reserved.</p>
        </div>

        </div>

        
        {/* 아래 문구 */}
        <div className='px-8 w-full h-full  flex justify-center md:hidden '>

          <div className='my-20 leading-[2.3] text-base md:text-[24px] w-[600px]'>
            <h4 className='font-black text-4xl pb-8'>EDIYA COFFEE</h4>
            <p >
            사업자등록번호 : 107-86-16302<br/>
            이디야커피(주) 대표이사 강태성<br/>
            서울특별시 강남구 논현로 636 이디야빌딩<br/>
            TEL : 02-543-6467<br/>
            개인정보처리방침 | 이메일 무단 수집거부<br/>
            </p>

            <ul className='flex   items-center gap-16 md:hidden w-[300px] mt-20 mb-8'>
                <li><img className='w-[34px]' src={`${process.env.PUBLIC_URL}/instarMobile.png`} alt="Instagram" /></li>
                <li><img className='w-[34px]' src={`${process.env.PUBLIC_URL}/facebookMobile.png`} alt="Facebook" /></li>
                <li><img className='w-[34px]' src={`${process.env.PUBLIC_URL}/youtubeMobile.png`} alt="YouTube" /></li>
            </ul>

            <p >
              Copyright 이디야커피(주) All Rights Reserved.
            </p>
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default Footer;
