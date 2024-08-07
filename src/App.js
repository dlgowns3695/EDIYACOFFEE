import React from 'react';
import './App.css'; // Tailwind CSS가 이미 설정되어 있다고 가정합니다.
import logo from './logo.svg'; // 로고 이미지 파일 경로
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

// App 컴포넌트
function App() {
  return (
    <>
      <header><Navbar /></header>
  
      <SwiperSection01 />
      <PromotionSection02 />
      <MenuSection03/>
     
      
      
      
    </>
  );
}

// Navbar 컴포넌트
function Navbar() {
  return (
    <>
      {/* 100% 부모 */}
      <div className="bg-red-500 w-screen h-20 flex items-center justify-center">
        {/* 80% 내용물공간 */}
        <div className="bg-blue-500 w-4/5 h-full flex justify-between items-center">
          {/* 왼쪽: 로고와 메뉴, 수직정렬 */}
          <div className="flex items-center">
            <Logo />
            <Menu />
          </div>
          {/* 오른쪽: 콘택트 */}
          <div>
          <Contact />
          </div>
          
          
        </div>
      </div>
    </>
  );
}


// Logo 컴포넌트
function Logo() {
  return (
    <>
      <div>
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </div>
    </>
  );
}

// Menu 컴포넌트
function Menu() {
  return (
    <>
      <div>
        <ul className="bg-gray-500 flex space-x-8">
          <li className="text-white">ABOUT</li>
          <li className="text-white">MENU</li>
          <li className="text-white">STORY</li>
          <li className="text-white">STORE</li>
        </ul>
      </div>
    </>
  );
}

// Contact 컴포넌트
function Contact() {
  return (
    <>
      <div className="text-white">
        <div className='flex items-center gap-6'>
          <ul className="flex space-x-4 font-bold">
            <li className='text-blue-800'>KR</li>
            <li>EN</li>
          </ul>
          <div className='rounded-full bg-blue-800 py-2 px-4'>가맹문의</div>
        </div>
      </div>
    </>
  );
}

function SwiperSection01(){
  return(
    <>
    <div className='bg-blue-800 w-[100px] z-10 h-[50px] absolute top-[11%] left-[50%] translate-x-[-50%]'>EDIYA COFFEE</div>
    <div className='w-screen flex items-center justify-center bg-red-300 h-3/5'>
      <div className='w-4/5 h-3/5 overflow-hidden rounded-[4rem] border-8 border-indigo-600 m-10'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/bg1.jpg`} /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/bg2.jpg`} /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/bg3.jpg`} /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/bg4.jpg`} /></SwiperSlide>
          <SwiperSlide><img src={`${process.env.PUBLIC_URL}/bg5.jpg`} /></SwiperSlide>
        </Swiper>
      </div>
    </div>

    </>
  )
}

function PromotionSection02() {
  return (
    <>
      {/* 100% 섹션 */}
      <div className="w-screen h-3/5 flex items-center justify-center">
        {/* 80% */}
        <div className="w-4/5 mt-16">
          <div className="text-center">
            <h1 className="text-5xl">Promotion</h1>
            <p className="text-sm mt-2">이디야의 다양한 혜택과 이벤트를 만나보세요.</p>

            <div className="flex mt-8 h-[500px] bg-red-200">
              {/* 왼쪽 이미지 공간 */}
              <div className="w-[80%] h-full bg-green-200 mr-4 rounded-lg relative overflow-hidden">
                <img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bg1.jpg`}/>
              </div>

              {/* 오른쪽 이미지 공간 */}
              <div className="w-[20%] h-full flex flex-col justify-between">
                <div className="bg-green-600 h-[33%]  relative overflow-hidden ">
                  <img className="w-full h-full object-cover" src={`${process.env.PUBLIC_URL}/bg2.jpg`}/>
                </div>
                <div className="bg-green-600 h-[33%]  relative overflow-hidden ">
                  <img className="w-full h-full object-cover" src={`${process.env.PUBLIC_URL}/bg3.jpg`}/>
                </div>
                <div className="bg-green-600 h-[33%]  relative overflow-hidden ">
                  <img className="w-full h-full object-cover" src={`${process.env.PUBLIC_URL}/bg1.jpg`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuSection03() {
  return (
    <>
      {/* 100% 섹션 */}
      <div className='w-screen h-3/5 bg-gray-200 flex flex-col justify-center items-center mt-16'>
        <div className='w-4/5 h-full bg-gray-400'>

          <div className='text-center mt-8'>
            <h1 className='text-5xl'>Menu</h1>
            <p className='text-sm mt-2 mb-12'>이디야의 신제품을 만나보세요.</p>
          </div>
          

          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <Section03MenuUl/>
            </SwiperSlide>
            <SwiperSlide>
              <Section03MenuUl/>
            </SwiperSlide>
         </Swiper>


        </div>


        <div className='mt-12 relative w-full h-[250px]'>
          <img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/nav.png`} />
        </div>
      </div>
    </>
  );
}
function Section03MenuUl(){
  return(
    <>
      
      <ul className='flex justify-center items-center gap-4'>
        {/* 첫 번째 메뉴 항목 */}
        <li className='flex flex-col items-center'>
          {/* 흰 사각형 */}
          <div className='w-[250px] h-[250px] bg-blue-200 rounded-2xl flex justify-center items-center'>
            {/* 이미지 */}
            <img className='w-[80%] h-[80%] object-cover' src={`${process.env.PUBLIC_URL}/thumb1.jpg`} alt="Drink Thumbnail 1"/>
          </div>
          {/* 음료 이름과 상태 */}
          <div className='text-center mt-2'>
            <p className='text-sm'>허쉬 크리미 초콜릿</p>
            <div className='flex justify-center mt-1 space-x-1'>
              <div className='w-[40px] bg-blue-500 rounded-2xl text-center text-xs text-white'>ICED</div>
              <div className='w-[40px] bg-red-500 rounded-2xl text-center text-xs text-white'>HOT</div>
            </div>
          </div>
        </li>

        {/* 두 번째 메뉴 항목 */}
        <li className='flex flex-col items-center'>
          {/* 흰 사각형 */}
          <div className='w-[250px] h-[250px] bg-blue-200 rounded-2xl flex justify-center items-center'>
            {/* 이미지 */}
            <img className='w-[80%] h-[80%] object-cover' src={`${process.env.PUBLIC_URL}/thumb2.jpg`} alt="Drink Thumbnail 2"/>
          </div>
          {/* 음료 이름과 상태 */}
          <div className='text-center mt-2'>
            <p className='text-sm'>바닐라 라떼</p>
            <div className='flex justify-center mt-1 space-x-1'>
              <div className='w-[40px] bg-blue-500 rounded-2xl text-center text-xs text-white'>ICED</div>
              <div className='w-[40px] bg-red-500 rounded-2xl text-center text-xs text-white'>HOT</div>
            </div>
          </div>
        </li>

        {/* 세 번째 메뉴 항목 */}
        <li className='flex flex-col items-center'>
          {/* 흰 사각형 */}
          <div className='w-[250px] h-[250px] bg-blue-200 rounded-2xl flex justify-center items-center'>
            {/* 이미지 */}
            <img className='w-[80%] h-[80%] object-cover' src={`${process.env.PUBLIC_URL}/thumb3.jpg`} alt="Drink Thumbnail 3"/>
          </div>
          {/* 음료 이름과 상태 */}
          <div className='text-center mt-2'>
            <p className='text-sm'>카라멜 마끼아또</p>
            <div className='flex justify-center mt-1 space-x-1'>
              <div className='w-[40px] bg-blue-500 rounded-2xl text-center text-xs text-white'>ICED</div>
              <div className='w-[40px] bg-red-500 rounded-2xl text-center text-xs text-white'>HOT</div>
            </div>
          </div>
        </li>

        {/* 네 번째 메뉴 항목 */}
        <li className='flex flex-col items-center'>
          {/* 흰 사각형 */}
          <div className='w-[250px] h-[250px] bg-blue-200 rounded-2xl flex justify-center items-center'>
            {/* 이미지 */}
            <img className='w-[80%] h-[80%] object-cover' src={`${process.env.PUBLIC_URL}/thumb4.jpg`} alt="Drink Thumbnail 4"/>
          </div>
          {/* 음료 이름과 상태 */}
          <div className='text-center mt-2'>
            <p className='text-sm'>초코 바나나 스무디</p>
            <div className='flex justify-center mt-1 space-x-1'>
              <div className='w-[40px] bg-blue-500 rounded-2xl text-center text-xs text-white'>ICED</div>
              <div className='w-[40px] bg-red-500 rounded-2xl text-center text-xs text-white'>HOT</div>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}

function MdItem(){
  return(
    <>
    {/* 100% */}
      <div>

      </div>
    </>
  )
}













export default App;
