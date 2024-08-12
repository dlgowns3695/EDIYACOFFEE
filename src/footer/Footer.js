import React from 'react';

function Footer() {
  return (
    <div className='w-full bg-[#182855] h-[460px] flex justify-center text-[#afafaf] text-xs'>
      <div className='w-[1200px] h-full'>
        <div className='flex justify-between mt-[110px]'>
          <h4 className='font-semibold text-2xl'>EDIYA COFFEE</h4>
          <div>
            <ul className='flex justify-center items-center gap-4'>
              <li><img src={`${process.env.PUBLIC_URL}/instar.png`} alt="Instagram" /></li>
              <li><img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Facebook" /></li>
              <li><img src={`${process.env.PUBLIC_URL}/youtube.png`} alt="YouTube" /></li>
              <li><img src={`${process.env.PUBLIC_URL}/wifi.png`} alt="Wi-Fi" /></li>
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
  );
}

export default Footer;
