import React from 'react';
import './App.css'; // Tailwind CSS가 이미 설정되어 있다고 가정합니다.
import logo from './logo.svg'; // 로고 이미지 파일 경로

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
          <Contact />
        </div>
      </div>
    </>
  );
}

// App 컴포넌트
function App() {
  return (
    <>
      <Navbar />
      {/* 다른 컴포넌트들 */}
    </>
  );
}

export default App;
