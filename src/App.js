import React from 'react';
import './App.css'; 
import logo from './logo.svg'; // 로고 이미지 파일 경로
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { Routes, Route, Link } from 'react-router-dom'
import About from './about/About';
import Menus from './menus/Menus';
import Story from './story/Story';
import Store from './store/Store';
// import Home from './pages/Home';


// App 컴포넌트

// Routes와 Route 컴포넌트는 Navbar, SwiperSection01, PromotionSection02, MenuSection03, MdItem, StoreEDway, Footer 
// 컴포넌트와 같은 레벨에 있지 않으면 제대로 작동하지 않을 수 있습니다.

function App() {
  return (
    <>
      <header><Navbar /></header>
      
      <main>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/story" element={<Story />} />
          <Route path="/store" element={<Store />} />
          {/* 추가적인 Route는 필요에 따라 추가 */}
        </Routes>
      </main>
    </>
  );
}

// MainContent 컴포넌트 (기본 페이지 내용)
function MainContent() {
  return (
    <>
      <SwiperSection01 />
      <PromotionSection02 />
      <MenuSection03 />
      <MdItem />
      <StoreEDway />     
      <Footer />
    </>
  );
}

// Navbar 컴포넌트
function Navbar() {
  

  return (
    <>
      {/* 100% 부모 */}
      <div className="fixed z-10 w-full h-[130px] flex items-center justify-center">
        {/* 1200px 내용물공간 */}
        <div className="w-[1200px] h-full flex justify-between items-center">
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
        <img src={`${process.env.PUBLIC_URL}/ediyalogo.png`} alt="ediyalogo" />
        {/* <img src={logo} alt="Logo" className="w-16 h-16" /> */}
      </div>
    </>
  );
}
// Menu 컴포넌트
function Menu() {
  return (
    <>
      <div>
        <ul className="flex space-x-8 font-bold text-lg">
          <li className="text-[#243c84]"><Link to="/"> ABOUT </Link></li>
          <li className="text-[#243c84]"><Link to="/menus"> MENU </Link></li>
          <li className="text-[#243c84]"><Link to="/story"> STORY </Link></li>
          <li className="text-[#243c84]"><Link to="/store"> STORE </Link></li>
        </ul>
      </div>
    </>
  );
}
// Contact 컴포넌트
function Contact() {
  return (
    <>
      <div className="text-white ">
        <div className='flex items-center gap-6'>
          <ul className="flex space-x-4 font-bold">
            <li className='text-[#243c84]'>KR</li>
            <li className='text-[#d2d6e5]'>EN</li>
          </ul>
          <div className='flex items-center justify-center rounded-full w-[114px] h-[40px] bg-[#243c84]'>가맹문의</div>
        </div>
      </div>
    </>
  );
}

function SwiperSection01() {
  return (
    <>
      {/* 가운데 로고 부분 */}
      <div className='w-[277px] h-[105px] absolute z-10 top-[10.6%] left-[50%] translate-x-[-50%]'>
        <img src={`${process.env.PUBLIC_URL}/titlelogo.png`} alt="titlelogo" />
      </div>

      {/* 스와이퍼 섹션(뒷배경) 100vw, h-800px */}
      <div className='w-full'>
        <img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/section01BG.png`} alt="Background" />
        
        

        {/* <div className='relative left-0 top-0 z-40'>
            <div className='absolute left-0 top-0 w-[1200px] h-[615px]  border-8 border-[#182855] rounded-[150px] '></div>
            <div className='absolute left-0 top-0 w-[1210px] h-[625px]  border-8 border-[#ff0000] rounded-[150px] '></div>
        </div> */}
        {/* 실제 스와이퍼 들어갈 공간 */}
        <div className='absolute top-[16%] left-[50%] translate-x-[-50%] w-[1210px] h-[625px]  border-8 border-[#182855] rounded-[150px] overflow-hidden'>
          
          <div className='w-full h-full object-cover '>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-full">
              <SwiperSlide><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn01.png`} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn02.png`} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn03.png`} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}




function PromotionSection02() {
  return (
    <>
      {/* 100% 섹션 bg-red-600 */}
      <div className="w-full flex items-center justify-center">
        {/* 80% */}
        <div className="w-[1200px]">
          <div className="text-center">
            <h1 className="text-[64px]">Promotion</h1>
            <p className="text-2xl mt-2">이디야의 다양한 혜택과 이벤트를 만나보세요.</p>

            {/* bg-red-200  */}
            <div className="flex mt-8 h-[486px] justify-between">
              {/* 왼쪽 이미지 공간 */}
              <div className="rounded-lg relative ">
                <img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/section02Bn01.png`}/>
              </div>

              {/* 오른쪽 이미지 공간 */}
              <div className="h-full flex flex-col justify-between mr-[50px] ">
                <div className="rounded-lg mb-[32px] relative overflow-hidden ">
                  <img className="w-full h-full object-cover" src={`${process.env.PUBLIC_URL}/section02SubBn01.png`}/>
                </div>
                <div className="rounded-lg mb-[32px] relative overflow-hidden ">
                  <img className="w-full h-full object-cover" src={`${process.env.PUBLIC_URL}/section02SubBn02.png`}/>
                </div>
                <div className="rounded-lg relative overflow-hidden ">
                  <img className="w-full h-full object-cover" src={`${process.env.PUBLIC_URL}/section02SubBn03.png`}/>
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
      <div className='w-full h-[752px] bg-[#edeef2] flex flex-col justify-center items-center mt-[150px]'>
        {/* 실제 컨탠츠 들어갈 공간 1200  bg-gray-400  */}
        <div className='w-[1200px] flex justify-center items-center flex-col'>

          {/* 타이틀 부분 */}
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[64px] font-bold'>Menu</h1>
            <p className='text-2xl mt-2 mb-12'>이디야의 신제품을 만나보세요.</p>
          </div>

          {/* 실제 스와이퍼 들어갈 공간  border-8 border-[#182855] rounded-[150px] */}
          <div className='w-[1200px]'>
            <div className='w-full h-full object-cover  '>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
                <SwiperSlide><Section03MenuUl/></SwiperSlide>
                <SwiperSlide><Section03MenuUl/></SwiperSlide>
                <SwiperSlide><Section03MenuUl/></SwiperSlide>
              </Swiper>
            </div>
          </div>

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
          <div className='w-[230px] h-[230px] flex justify-center items-center'>
            {/* 이미지 */}
            <img className='object-cover' src={`${process.env.PUBLIC_URL}/menu01.png`} alt="Hershey creamy chocolate"/>
          </div>
          {/* 음료 이름과 상태 */}
          <div className='text-center mt-2'>
            <p className='text-black font-semibold text-2xl'>허쉬 크리미 초콜릿</p>
            <div className='flex justify-center mt-1 space-x-1'>
              <div className='w-[40px] bg-[#243c84] rounded-2xl text-center text-xs text-white'>ICED</div>
              <div className='w-[40px] bg-[#9c1515] rounded-2xl text-center text-xs text-white'>HOT</div>
            </div>
          </div>
        </li>

        {/* 두 번째 메뉴 항목 */}
        <li className='flex flex-col items-center'>
          {/* 흰 사각형 */}
          <div className='w-[230px] h-[230px] flex justify-center items-center'>
            {/* 이미지 */}
            <img className='object-cover' src={`${process.env.PUBLIC_URL}/menu02.png`} alt="Drink Thumbnail 2"/>
          </div>
          {/* 음료 이름과 상태 */}
          <div className='text-center mt-2'>
            <p className='text-black font-semibold text-2xl'>바닐라 라떼</p>
            <div className='flex justify-center mt-1 space-x-1'>
              <div className='w-[40px] bg-[#243c84] rounded-2xl text-center text-xs text-white'>ICED</div>
              <div className='w-[40px] bg-[#9c1515] rounded-2xl text-center text-xs text-white'>HOT</div>
            </div>
          </div>
        </li>

        {/* 세 번째 메뉴 항목 */}
        <li className='flex flex-col items-center'>
          {/* 흰 사각형 */}
          <div className='w-[230px] h-[230px] flex justify-center items-center'>
            {/* 이미지 */}
            <img className='object-cover' src={`${process.env.PUBLIC_URL}/menu03.png`} alt="Drink Thumbnail 3"/>
          </div>
          {/* 음료 이름과 상태 */}
          <div className='text-center mt-2'>
            <p className='text-black font-semibold text-2xl'>카라멜 마끼아또</p>
            <div className='flex justify-center mt-1 space-x-1'>
              <div className='w-[40px] bg-[#243c84] rounded-2xl text-center text-xs text-white'>ICED</div>
              <div className='w-[40px] bg-[#9c1515] rounded-2xl text-center text-xs text-white'>HOT</div>
            </div>
          </div>
        </li>

        {/* 네 번째 메뉴 항목 */}
        <li className='flex flex-col items-center'>
          {/* 흰 사각형 */}
          <div className='w-[230px] h-[230px] flex justify-center items-center'>
            {/* 이미지 */}
            <img className='object-cover' src={`${process.env.PUBLIC_URL}/menu04.png`} alt="Drink Thumbnail 4"/>
          </div>
          {/* 음료 이름과 상태 */}
          <div className='text-center mt-2'>
            <p className='text-black font-semibold text-2xl'>초코 바나나 스무디</p>
            <div className='flex justify-center mt-1 space-x-1'>
              <div className='w-[40px] bg-[#243c84] rounded-2xl text-center text-xs text-white'>ICED</div>
              <div className='w-[40px] bg-[#9c1515] rounded-2xl text-center text-xs text-white'>HOT</div>
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
      <div className='w-full h-[1283px] bg-red-400'>
        {/* 인도네시아 나무 배경 */}
        <div className='w-full h-[355px] bg-cover' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/indonesia.png)` }}>
        </div>

        {/* 갈색배경 */}
        <div className='w-full h-[928px] bg-cover ' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/indonesiaBG.png)` }}>
          
          <div>
            {/* 타이틀 */}
            <div className='flex flex-col items-center mb-16'>
              <h1 className='text-[64px] font-bold mt-16 '>MD's Item</h1>
              <p>MD 추천 상품을 만나보세요.</p>
            </div>

            {/* MD상품 */}
            <div className='flex items-center justify-center gap-36'>
              {/* 텀블러 */}
              <div className='flex flex-col items-center'>
                {/* PSD에서 다시 정렬하고 가져와야할듯함. */}
                <div className='relative'>
                  <img src={`${process.env.PUBLIC_URL}/Tumbler.png`}/>
                  <img className='absolute top-[-10%] left-[-15%]' src={`${process.env.PUBLIC_URL}/New.png`}/>
                </div>
                <h4 className='font-semibold'>SUBSUB</h4>
                <p className='text-black'>스마일 텀블러</p>
              </div>
              {/* 파우치 */}
              <div className='flex flex-col items-center'>
                {/* PSD에서 다시 정렬하고 가져와야할듯함. */}
                <div className='relative'>
                  <img src={`${process.env.PUBLIC_URL}/Pouch.png`}/>
                  <img className='absolute top-[15%] left-[0%]' src={`${process.env.PUBLIC_URL}/Best.png`}/>
                </div>
                
                <h4 className='font-semibold'>SUBSUB</h4>
                <p className='text-black'>스마일 텀블러</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}


function StoreEDway(){
  return(
    <>
    {/* 100% */}
      <div className='w-full h-[594px] bg-white bg-cover ' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bottomImg.png)` }}>

      </div>  
    </>
  )
}


function Footer(){
  return (
    <>
    {/* 100% */}
      <div className='w-full bg-[#182855] h-[460px] flex  justify-center text-[#afafaf] text-xs'>
        {/* 1200px bg-red-200 */}
        <div className='w-[1200px] h-full '>
          <div className='flex justify-between mt-[110px]'>
            <h4 className='font-semibold text-2xl 	'>EDIYA COFFEE</h4>

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












export default App;
