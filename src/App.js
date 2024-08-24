import React, { useState, useRef , useEffect,} from 'react';
import './App.css'; 
import AOS from "aos";
import "aos/dist/aos.css"; // AOS의 CSS 파일을 가져옵니다
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Autoplay, Pagination  } from 'swiper/modules';


import { Routes, Route, Link } from 'react-router-dom'
import About from './about/About';
import Menus from './menus/Menus';
import Story from './story/Story';
import Store from './store/Store';
import Footer from './footer/Footer'
import Per from './per/per'

// Routes와 Route 컴포넌트는 Navbar, SwiperSection01, PromotionSection02, MenuSection03, MdItem, StoreEDway, Footer 
// 컴포넌트와 같은 레벨에 있지 않으면 제대로 작동하지 않을 수 있습니다.

function App() {

  useEffect(() => {

    AOS.init({
      duration: 900, // 애니메이션 지속 시간
      offset: 10,    // 스크롤에 따른 애니메이션 트리거 지점 조정
      easing: 'ease-in-out', // 애니메이션의 이징 효과
      once: true // 애니메이션이 한 번만 실행되도록 설정
    });
  }, []);

  useEffect(() => {
    // 페이지가 로드될 때 스크롤을 최상단으로 이동
    window.scrollTo(0, 0);
  }, []); // 빈 배열을 의존성 배열로 사용하여 마운트 시 한 번만 실행


  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);
  



  return (
    <>
      {/* 피씨네브바 */}
      <header><Navbar /></header>

      {/* 모바일네브바 */}
      <MobileNavbar onMenuToggle={toggleMenu} />

      <div className="menu-wrapper">
        <div className={`menu-content ${isMenuOpen ? 'menu-visible' : ''}`}>
          <MobileMenu onClose={closeMenu} />
        </div>
      </div>
      
      
      <main className='overflow-hidden'>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/" element={<About />} />
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
      <Per />
      {/* <Per2 /> */}
      <Footer />
      
    </>
  );
}

function Navbar() {
  const headerRef = useRef(null);
  const linkRefs = useRef([]); // Link 태그를 참조하는 배열
  const contact01Refs = useRef(null); // li 태그를 참조하는 배열
  const contact02Refs = useRef(null); // li 태그를 참조하는 배열
  const contactBtnRef = useRef(null); // 가맹문의 버튼을 위한 ref

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;

      if (headerRef.current) {
        headerRef.current.style.backgroundColor = isScrolled ? '#243c84' : 'transparent';
      }

      linkRefs.current.forEach(link => {
        if (link) {
          link.style.color = isScrolled ? '#ffffff' : '#243c84';
        }
      });

      if (contact01Refs.current) {
        contact01Refs.current.style.color = isScrolled ? '#ffffff' : '#243c84';
      }
      if (contact02Refs.current) {
        contact02Refs.current.style.color = isScrolled ? '#d2d6e5' : '#d2d6e5';
      }

      if (contactBtnRef.current) {
        contactBtnRef.current.style.backgroundColor = isScrolled ? '#ffffff' : '#243c84';
        contactBtnRef.current.style.color = isScrolled ? '#243c84' : '#ffffff';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // 모바일일 경우 히든, 피씨는 on
    <>

      <div
        ref={headerRef}
        style={{transition: 'background-color 0.3s ease-in-out'}}
        className="hidden md:fixed z-[999] w-full h-[130px] md:flex items-center justify-center "
      >
        {/* 1200px 내용물공간 */}
        <div className="hidden  w-[1200px] h-full md:flex justify-between items-center">
          {/* 왼쪽: 로고와 메뉴, 수직정렬 */}
          <div className="flex items-center">
            {/* 로고 */}
            <Link to="/"><div className='cursor-pointer'><img src={`${process.env.PUBLIC_URL}/ediyalogo.png`} alt="ediyalogo"/></div></Link>
            {/* 메뉴 */}
            <div>
              <ul className="flex space-x-8 font-bold text-lg">
                <li ref={(el) => (linkRefs.current[0] = el)}>
                  <Link to="/">ABOUT</Link>
                </li>
                <li ref={(el) => (linkRefs.current[1] = el)}>
                  <Link to="/menus">MENU</Link>
                </li>
                <li ref={(el) => (linkRefs.current[2] = el)}>
                  <Link to="/story">STORY</Link>
                </li>
                <li ref={(el) => (linkRefs.current[3] = el)}>
                  <Link to="/store">STORE</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* 오른쪽: 콘택트 */}
          <div className="text-white">
            <div className="flex items-center gap-6">
              <ul className="flex space-x-4 font-bold">
                <li ref={contact01Refs} className="text-[#243c84] cursor-pointer">KR</li>
                <li ref={contact02Refs} className="text-[#d2d6e5] cursor-pointer">EN</li>
              </ul>
              <div
                ref={contactBtnRef}
                className="flex items-center justify-center rounded-full w-[114px] h-[40px] bg-[#243c84] cursor-pointer"
              >
                가맹문의
              </div>
            </div>
          </div>
        </div>
      </div>


    
    </>


    
  );
}

function MobileNavbar({ onMenuToggle }){
  return(
    <>
      {/* 모바일 nav바 452px = 모바일 탑 배너크기 */}
      <div className='absolute z-[999] block md:hidden w-full h-[452px]  '>
        <div className='flex justify-between items-center px-8 pt-8'>

          <div className='w-[100px] h-[100px]'>
            <img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/ediyalogo.png`} />
          </div>

          {/* 여기 햄버거 바를 눌렀을 경우 100vw 만큼 오른쪽에서 왼쪽으로 나오게끔. */}
          <div onClick={onMenuToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

        </div>
      </div>
    </>
  )
}

function MobileMenu({ onClose }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false); // Menu 섹션 열림/닫힘 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu 섹션 열림/닫힘 상태
  const [isStoryOpen, setIsStoryOpen] = useState(false); // Story 섹션 열림/닫힘 상태
  const [isStoreOpen, setIsStoreOpen] = useState(false); // Store 섹션 열림/닫힘 상태

  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleStory = () => setIsStoryOpen(!isStoryOpen);
  const toggleStore = () => setIsStoreOpen(!isStoreOpen);

  const handleAboutClick = () => {
    toggleAbout();
    onClose(); // 서브메뉴 클릭 시 메뉴 닫기
  };
  const handleMenuClick = () => {
    toggleMenu();
    onClose(); // 서브메뉴 클릭 시 메뉴 닫기
  };

  const handleStoryClick = () => {
    toggleStory();
    onClose(); // 서브메뉴 클릭 시 메뉴 닫기
  };

  const handleStoreClick = () => {
    toggleStore();
    onClose(); // 서브메뉴 클릭 시 메뉴 닫기
  };

  return (
    <>
      <div className="absolute w-full h-full z-[10] bg-white ">
        <div className="flex justify-between items-center px-4 ">
          <div className="w-[100px] h-[100px]">
            <img
              className="w-full h-full object-cover"
              src={`${process.env.PUBLIC_URL}/ediyalogo.png`}
              alt="Logo"
            />
          </div>

          <div onClick={onClose} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="flex gap-8 pl-8">
          <div className="w-[185px] h-[65px] bg-[#243c84] flex justify-center items-center rounded-full">
            <p className="text-[#fff] text-[24px]">로그인</p>
          </div>

          <div className="w-[185px] h-[65px] bg-[#192033] flex justify-center items-center rounded-full">
            <p className="text-[#fff] text-[24px]">회원가입</p>
          </div>
        </div>

        <ul className="w-full">
          {/* Menu 리스트 아이템 */}
          <li className="w-full px-8">
            {/* Menu 타이틀과 화살표 */}
            <div
              className="h-[150px] flex items-center justify-between cursor-pointer"
              onClick={toggleAbout} // 클릭 시 서브메뉴 열림/닫힘 토글
            >
              <h4 className="text-[36px] scoop-font">About</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className={`size-12 transform transition-transform duration-300 ease-in-out ${
                  isAboutOpen ? 'rotate-180' : 'rotate-0'
                }`} // 서브메뉴가 열리면 화살표를 180도 회전
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            {/* 서브메뉴 리스트 */}
            <ul
              className={`overflow-hidden transition-height duration-500 ease-in-out ${
                isAboutOpen ? 'h-[50px] opacity-100' : 'h-0 opacity-0'
              }`} // 서브메뉴가 열리면 height를 늘리고, 서서히 열리도록 애니메이션 적용
              onClick={handleAboutClick}
            >
              <Link to="/"><li className="text-[24px] py-2">About</li></Link>
            </ul>
          </li>

          {/* Menu 리스트 아이템 */}
          <li className="w-full px-8">
            {/* Menu 타이틀과 화살표 */}
            <div
              className="h-[150px] flex items-center justify-between cursor-pointer"
              onClick={toggleMenu} // 클릭 시 서브메뉴 열림/닫힘 토글
            >
              <h4 className="text-[36px] scoop-font">Menu</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className={`size-12 transform transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-180' : 'rotate-0'
                }`} // 서브메뉴가 열리면 화살표를 180도 회전
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            {/* 서브메뉴 리스트 */}
            <ul
              className={`overflow-hidden transition-height duration-500 ease-in-out ${
                isMenuOpen ? 'h-[200px] opacity-100' : 'h-0 opacity-0'
              }`
              
              } // 서브메뉴가 열리면 height를 늘리고, 서서히 열리도록 애니메이션 
              
              onClick={handleMenuClick}
            >
              <li className="text-[24px] py-2">커피메뉴</li>
              <li className="text-[24px] py-2">플랫치노</li>
              <li className="text-[24px] py-2">베이커리</li>
              <li className="text-[24px] py-2">빙수</li>
            </ul>
          </li>

          {/* Story 리스트 아이템 */}
          <li className="w-full px-8">
            {/* Story 타이틀과 화살표 */}
            <div
              className="h-[150px] flex items-center justify-between cursor-pointer"
              onClick={toggleStory} // 클릭 시 서브메뉴 열림/닫힘 토글
            >
              <h4 className="text-[36px] scoop-font">Story</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className={`size-12 transform transition-transform duration-300 ease-in-out ${
                  isStoryOpen ? 'rotate-180' : 'rotate-0'
                }`} // 서브메뉴가 열리면 화살표를 180도 회전
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            {/* 서브메뉴 리스트 */}
            <ul
              className={`overflow-hidden transition-height duration-500 ease-in-out ${
                isStoryOpen ? 'h-[50px] opacity-100' : 'h-0 opacity-0'
              }`} // 서브메뉴가 열리면 height를 늘리고, 서서히 열리도록 애니메이션 적용
              onClick={handleStoryClick}
            >
              <Link to="/story"><li className="text-[24px] py-2">Story</li></Link>
            </ul>
          </li>

          {/* Story 리스트 아이템 */}
          <li className="w-full px-8">
            {/* Story 타이틀과 화살표 */}
            <div
              className="h-[150px] flex items-center justify-between cursor-pointer"
              onClick={toggleStore} // 클릭 시 서브메뉴 열림/닫힘 토글
            >
              <h4 className="text-[36px] scoop-font">Store</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className={`size-12 transform transition-transform duration-300 ease-in-out ${
                  isStoreOpen ? 'rotate-180' : 'rotate-0'
                }`} // 서브메뉴가 열리면 화살표를 180도 회전
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            {/* 서브메뉴 리스트 */}
            <ul
              className={`overflow-hidden transition-height duration-500 ease-in-out ${
                isStoreOpen ? 'h-[50px] opacity-100' : 'h-0 opacity-0'
              }`} // 서브메뉴가 열리면 height를 늘리고, 서서히 열리도록 애니메이션 적용
              onClick={handleStoreClick}
            >
              <li className="text-[24px] py-2">가맹문의</li>
            </ul>
          </li>


        </ul>

        
        <div className="relative top-[100px] flex gap-8 text-[32px] pl-8">
          <div>
            <p>KOREAN</p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <p>ENGLISH</p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <p>가맹문의</p>
          </div>
        </div>

        <div className="flex relative top-[120px] items-center gap-8  pl-8">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/facebookMobile.png`}
              alt="Facebook"
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/instarMobile.png`}
              alt="Instagram"
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/youtubeMobile.png`}
              alt="YouTube"
            />
          </div>
        </div>

      </div>
      
    </>
  );
}




function SwiperSection01() {
  
  const swiperRef = useRef(null);              // 스와이퍼 인스턴스를 참조할 ref
  const imageRefs = useRef([]);                // 이미지 배열을 참조할 ref
  const [loaded, setLoaded] = useState(false); // 이미지 로드 여부를 관리하는 상태

  // 스와이퍼 슬라이드를 왼쪽으로 이동하는 함수
  const slidePrev = () => {
    swiperRef.current.swiper.slidePrev(); // 스와이퍼 인스턴스를 통해 이전 슬라이드로 이동
  };

  // 스와이퍼 슬라이드를 오른쪽으로 이동하는 함수
  const slideNext = () => {
    swiperRef.current.swiper.slideNext(); // 스와이퍼 인스턴스를 통해 다음 슬라이드로 이동
  };

  // 공통 스타일 클래스
  const borderStyles = 'absolute rounded-[4.5rem] md:rounded-[150px] border-4 ';

  // 이미지 로드 완료 후 호출되는 함수
  const handleImageLoad = () => {
    setLoaded(true); // 이미지를 로드한 후 상태를 true로 설정
  };


  useEffect(() => {
    if (loaded) {
      // 이미지가 로드되면 애니메이션을 시작합니다
      const images = imageRefs.current;

      // 첫 번째 이미지: 왼쪽으로 이동
      moveImage(images[0], 'left', 2); // 속도 조절

      // 두 번째 이미지: 오른쪽으로 이동
      moveImage(images[1], 'right', 3); // 속도 조절

      // 세 번째 이미지: 왼쪽으로 이동
      moveImage(images[2], 'left', 4); // 속도 조절
    }
  }, [loaded]); // 'loaded'가 true일 때만 애니메이션 시작

    // 이미지 애니메이션 함수
    const moveImage = (image, direction, speed) => {
      const animate = () => {
        const screenWidth = window.innerWidth; // 화면의 너비를 
        const imageWidth = image.offsetWidth;  // 이미지의 너비를 
        // 이미지의 현재 위치를 가져옵니다
        let currentPos = parseFloat(window.getComputedStyle(image).left);
       
  
        // 애니메이션 함수
        function updatePosition() {
          // 방향에 따라 이미지 위치를 업데이트합니다
          if (direction === 'left') {
            currentPos -= speed; // 왼쪽으로 이동
  
            // 이미지가 화면 왼쪽 바깥으로 나가면 오른쪽에서 다시 시작
            if (currentPos < -imageWidth) { // 위치가 -110px 이라면 (0번기준 완전히 감춰진)
              currentPos = screenWidth; // 화면 오른쪽 끝으로 이동
            }
          } else if (direction === 'right') {
            currentPos += speed; // 오른쪽으로 이동
  
            // 이미지가 화면 오른쪽 바깥으로 나가면 왼쪽에서 다시 시작
            if (currentPos > screenWidth + imageWidth) {
              currentPos = -imageWidth; // 화면 왼쪽 끝으로 이동
            }
          }
  
          // 이미지의 위치를 업데이트합니다
          image.style.left = `${currentPos}px`;
          // 다음 프레임을 요청합니다
          requestAnimationFrame(updatePosition);
        }
  
        updatePosition(); // 애니메이션 시작
      };
  
      animate(); // 애니메이션 함수 호출
    };

  useEffect(() => {
    // 윈도우 사이즈가 변경될 때 호출되는 함수
    const handleResize = () => {
      // 윈도우 사이즈가 변경될 때 애니메이션을 재설정합니다
      if (loaded) {
        const images = imageRefs.current;
        images.forEach((image, index) => {
          if (image) {
            // 각 이미지의 애니메이션 재설정
            const direction = index === 1 ? 'right' : 'left';
            const speed = index === 1 ? 3 : (index === 2 ? 4 : 2);
            moveImage(image, direction, speed);
          }
        });
      }
    };

    window.addEventListener('resize', handleResize); // 윈도우 리사이즈 이벤트 리스너 등록
    return () => window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 리스너 제거
  }, [loaded]);

  return (

    /**
     * 
                  <div className={`${borderStyles} w-[1200px] h-[620px] border-[#172650]`}></div>
            <div className={`${borderStyles} w-[1198px] h-[616px] border-[#243c84]`}></div>
            <div className={`${borderStyles.replace('border-4', 'border-8')} w-[1194px] h-[612px] border-[#203573]`}></div>
            <div className={`${borderStyles.replace('border-4', 'border-8')} w-[1188px] h-[604px] border-[#233b81]`}></div>
            <div className={`${borderStyles} w-[1180px] h-[596px] border-[#1f326c]`}></div>
            <div className={`${borderStyles} w-[1176px] h-[592px] border-[#182855]`}></div>
            <div className={`${borderStyles.replace('border-4', 'border-8')} w-[1174px] h-[589px] border-[#21387b]`}></div>
            
            <div className={`${borderStyles} w-[366px] h-[720px] border-[#172650]`}></div>
            <div className={`${borderStyles} w-[364px] h-[716px] border-[#243c84]`}></div>
            <div className={`${borderStyles.replace('border-4', 'border-8')} w-[360px] h-[712px] border-[#203573]`}></div>
            <div className={`${borderStyles.replace('border-4', 'border-8')} w-[364px] h-[704px] border-[#233b81]`}></div>
            <div className={`${borderStyles} w-[356px] h-[696px] border-[#1f326c]`}></div>
            <div className={`${borderStyles} w-[352px] h-[692px] border-[#182855]`}></div>
            <div className={`${borderStyles.replace('border-4', 'border-8')} w-[350px] h-[689px] border-[#21387b]`}></div>

            474 -> 400 74차이
     * 
     */



    <>
    {/* 모바일 위치 잡기 */}
      <div className='relative top-[000px] md:top-0'>
        {/* 가운데 로고 부분 */}
        <div className='w-[277px] h-[105px] absolute z-[250] top-[20%] md:top-[10%] left-[50%] transform -translate-x-1/2'>
          <img src={`${process.env.PUBLIC_URL}/titlelogo.png`} alt="titlelogo" />
        </div>

        {/* 스와이퍼 섹션 & 뒷배경 */}
        <div className='w-full relative h-[90vh] flex justify-center items-center bg-red-300' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/section01BG.png)` }}>
          
          <div className='relative md:top-0 top-[100px] w-[80vw] h-[70vh] md:w-[1200px] md:h-[620px] flex justify-center items-center overflow-hidden rounded-[4.5rem] md:rounded-[150px]'>
            <div className='md:hidden pointer-events-none absolute flex justify-center items-center z-[200]'>

            
              <div className={`pointer-events-none ${borderStyles.replace('border-4', 'border-[12px]')} w-[80vw] h-[70vh] border-[#172650]`}></div>
              <div className={`pointer-events-none ${borderStyles} w-[79.5vw] h-[69.5vh] border-[#243c84]`}></div>
              <div className={`pointer-events-none ${borderStyles.replace('border-4', 'border-8')} w-[79vw] h-[69vh] border-[#203573]`}></div>
              <div className={`pointer-events-none ${borderStyles.replace('border-4', 'border-8')} w-[78.5vw] h-[68.5vh] border-[#233b81]`}></div>
              <div className={`pointer-events-none ${borderStyles} w-[78vw] h-[68vh] border-[#1f326c]`}></div>
              <div className={`pointer-events-none ${borderStyles} w-[77.5vw] h-[67.5vh] border-[#182855]`}></div>
              <div className={`pointer-events-none ${borderStyles.replace('border-4', 'border-8')} w-[77vw] h-[67vh] border-[#21387b]`}></div>

            

            </div>
            
            <div className='hidden pointer-events-none absolute md:flex justify-center items-center z-[200]'>

            
              <div className={` ${borderStyles} w-[1200px] h-[620px] border-[#172650]`}></div>
              <div className={` ${borderStyles} w-[1198px] h-[616px] border-[#243c84]`}></div>
              <div className={` ${borderStyles.replace('border-4', 'border-8')} w-[1194px] h-[612px] border-[#203573]`}></div>
              <div className={` ${borderStyles.replace('border-4', 'border-8')} w-[1188px] h-[604px] border-[#233b81]`}></div>
              <div className={` ${borderStyles} w-[1180px] h-[596px] border-[#1f326c]`}></div>
              <div className={` ${borderStyles} w-[1176px] h-[592px] border-[#182855]`}></div>
              <div className={` ${borderStyles.replace('border-4', 'border-8')} w-[1174px] h-[589px] border-[#21387b]`}></div>
              

            </div>

            <div className='relative w-[75vw] h-[67vh] md:w-[1174px] md:h-[589px] border-[#172650] border-2 rounded-[4.5rem] md:rounded-[150px]'>
              <Swiper
                ref={swiperRef}
                navigation={false}
                className='w-full h-full'
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
              >
                <SwiperSlide><Link to="/story"><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn01.png`} alt="Slide 1" /></Link></SwiperSlide>
                <SwiperSlide><Link to="/story"><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn02.png`} alt="Slide 2" /></Link></SwiperSlide>
                <SwiperSlide><Link to="/story"><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn03.png`} alt="Slide 3" /></Link></SwiperSlide>
              </Swiper>
            </div>
          </div>



          {/* 버튼들 */}
          <div className='absolute w-[1200px] h-[610px] hidden  md:flex justify-between items-center  '>
            {/* 왼쪽 방향 버튼 */}
            <div
              className='relative left-[-40px]  w-[99px] h-[99px] bg-[#213779] rounded-full flex items-center justify-center cursor-pointer z-[250]'
              onClick={slidePrev}
            >
              <div className='absolute  w-[91px] h-[91px] bg-[#182855] rounded-full'></div>
              <div className='absolute  w-[83px] h-[83px] bg-[#1f326c] rounded-full'></div>
              <div className='absolute  w-[79px] h-[79px] bg-[#233b81] rounded-full'></div>
              <div className='absolute  w-[71px] h-[71px] bg-white rounded-full'></div>
              <div className='absolute  flex items-center justify-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="#21387b" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </div>

            </div>

            {/* 오른쪽 방향 버튼 */}
            <div
              className='relative left-[40px] w-[99px] h-[99px] bg-[#213779] rounded-full flex items-center justify-center cursor-pointer z-[250]'
              onClick={slideNext}
            >
              <div className='absolute  w-[91px] h-[91px] bg-[#182855] rounded-full'></div>
              <div className='absolute  w-[83px] h-[83px] bg-[#1f326c] rounded-full'></div>
              <div className='absolute  w-[79px] h-[79px] bg-[#233b81] rounded-full'></div>
              <div className='absolute  w-[71px] h-[71px] bg-white rounded-full'></div>
              <div className='absolute flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="#21387b" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>

            </div>

          </div>

          {/* 장식 이미지들 */}
          <img
            ref={el => imageRefs.current[0] = el}
            className='absolute top-[600px] left-[200px] z-2'
            src={`${process.env.PUBLIC_URL}/human01.png`}
            alt="human"
            onLoad={handleImageLoad}
          />
          <img
            ref={el => imageRefs.current[1] = el}
            className='absolute top-[630px] left-[400px] z-2'
            src={`${process.env.PUBLIC_URL}/middleHuman.png`}
            alt="middle human"
            onLoad={handleImageLoad}
          />
          <img
            ref={el => imageRefs.current[2] = el}
            className='absolute top-[700px] left-[1500px] z-[1000]'
            src={`${process.env.PUBLIC_URL}/car.png`}
            alt="car"
            onLoad={handleImageLoad}
          />
        </div>


      </div>

    </>
  );
}


/**
 * 


"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import Swiper styles
import "swiper/css";

import { Parallax, EffectFade, Pagination } from "swiper/modules";
import Title from "../title";

const BigSlideSection = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<img class='${className} !w-20 !h-20' style="background:none !important;" src="images/main/brand-list-logo${index + 1}.svg" alt="" />`;
            // return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <>
            <section>
                <Title
                    title="Our Brand"
                    text={[
                        "고객의 바른 건강을 생각하는 정관장의",
                        "다양한 브랜드를 소개합니다.",
                    ]}
                    className="my-60 font-bold"
                />
                <Swiper
                    pagination={pagination}
                    modules={[Parallax, EffectFade, Pagination]}
                    effect={"fade"}
                    className="mySwiper"
                    style={
                        {
                            "--swiper-pagination-bottom": "unset",
                            "--swiper-pagination-top": "0",
                            "--swiper-pagination-bullet-horizontal-gap": "2rem",
                        } as React.CSSProperties
                    }
                    onSlideChangeTransitionStart={(swiper) => {
                        // 모든 슬라이드의 이미지를 scale 1.1로 설정
                        swiper.slides.forEach((slide) => {
                            const img = slide.querySelector("img");
                            if (img) {
                                img.style.transform = "scale(1.05)";
                            }
                        });

                        // 활성화된 슬라이드의 이미지만 scale 1로 설정
                        const activeSlideImg =
                            swiper.slides[swiper.activeIndex].querySelector(
                                "img",
                            );
                        if (activeSlideImg) {
                            activeSlideImg.style.transition =
                                "transform 0.3s ease-in";
                            activeSlideImg.style.transform = "scale(1)";
                        }
                    }}
                    // onSlideChangeTransitionEnd={(swiper) => {
                    //     swiper.slides.forEach((slide) => {
                    //         const img = slide.querySelector("img");
                    //         if (img) {
                    //             img.style.transform = "scale(1.05)";
                    //         }
                    //     });
                    //     const activeSlideImg =
                    //         swiper.slides[swiper.activeIndex].querySelector("img");
                    //     if (activeSlideImg) {
                    //         activeSlideImg.style.transform = "scale(1)";
                    //     }
                    // }}
                >
                    <SwiperSlide>
                        <img
                            className="w-full scale-105"
                            style={{ width: "100%" }}
                            src="images/main/brand-bg1.jpg"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full scale-105"
                            src="images/main/brand-bg2.jpg"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full scale-105"
                            src="images/main/brand-bg3.jpg"
                        />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};








 * 
 */

function PromotionSection02() {
  const images = [
    `${process.env.PUBLIC_URL}/section02SubBn01.png`,
    `${process.env.PUBLIC_URL}/section02SubBn02.png`,
    `${process.env.PUBLIC_URL}/section02SubBn03.png`,
    `${process.env.PUBLIC_URL}/section02Bn01.png`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // 왼쪽 이미지 인덱스
  const [imgRealIndex, setImgRealIndex] = useState(0); // 오른쪽 이미지 인덱스
  const [isAutoplay, setIsAutoplay] = useState(true); // 자동 슬라이드 상태
  const swiperRef = useRef(null); // Swiper 인스턴스를 참조하기 위한 ref
  const [direction, setDirection] = useState('vertical'); // 스와이퍼 초기 디렉션

  // 왼쪽 이미지 인덱스 업데이트
  const updateIndex = (realIndex) => {
    const newIndex = (realIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  // 슬라이드 변경 시 왼쪽 이미지 인덱스 업데이트
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    updateIndex(realIndex);
    setImgRealIndex(realIndex);
  };

  // 위로 이동 버튼 클릭 핸들러
  const handleMoveUp = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // 위로 이동
    }
  };

  // 아래로 이동 버튼 클릭 핸들러
  const handleMoveDown = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // 아래로 이동
    }
  };

  // 자동 슬라이드 토글 핸들러
  const handleAutoplayToggle = () => {
    if (swiperRef.current) {
      if (isAutoplay) {
        swiperRef.current.autoplay.stop();
        setIsAutoplay(false); // 상태 업데이트
      } else {
        setIsAutoplay(true);
        setTimeout(() => {
          swiperRef.current.autoplay.start(); // 즉시 시작 (내부 딜레이 적용 (3초))
        }); 
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setDirection(window.innerWidth < 1200 ? 'horizontal' : 'vertical');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full custom1200:w-[1200px]">
        <div className="text-center">
          <div>
            <h1 className="text-5xl md:text-[64px] scoop-font">Promotion</h1>
            <p className="text-xl md:text-2xl mt-2 font-semibold">이디야의 다양한 혜택과 이벤트를 만나보세요.</p>
          </div>

          {/* 이미지 전체 섹션   */}
          <div className="flex gap-6 custom1200:gap-0 flex-col custom1200:flex-row mt-8 h-[486px] items-center custom1200:items-start  custom1200:justify-between">
            {/* 왼쪽 큰 이미지 영역 left-[50%] translate-x-[-50%] */}
            <div className="rounded-lg relative w-[80%] ">
              <img 
                className="w-[878px] h-[486px] object-cover" 
                src={images[currentIndex]} 
                alt="Main Promotion" 
              />
            </div>

            {/* 오른쪽 서브 이미지 슬라이드 영역 */}
            <div className="px-6 w-full custom1200:w-[20%] h-full flex flex-row custom1200:flex-col justify-between">
              <Swiper
                direction={direction}
                loop={true}
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={24}
                className="h-full"
                onSlideChange={handleSlideChange}
                autoplay={isAutoplay ? {
                  delay: 3000, // 3초마다 자동 슬라이드
                  disableOnInteraction: false, // 사용자 상호작용 시 자동 슬라이드 비활성화 방지
                } : false}
                modules={[Autoplay, Pagination]}
                onSwiper={(swiper) => { swiperRef.current = swiper; }} // Swiper 인스턴스를 참조
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={image} 
                      alt={`Small ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 네비게이션 및 버튼 섹션 */}
            <div className='h-full w-[35px] custom1200:flex justify-center hidden '>
              <div className='flex flex-col items-center justify-start gap-5'>
                {images.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-[7px] h-[7px] rounded-full ${index === imgRealIndex ? 'bg-gray-500' : 'bg-gray-100'}`}
                  ></div>
                ))}

                {/* 위로 이동 버튼 */}
                <div 
                  className="bg-gray-200 w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer" 
                  onClick={handleMoveUp}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>

                {/* 아래로 이동 버튼 */}
                <div 
                  className="bg-gray-200 w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer" 
                  onClick={handleMoveDown}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>

                {/* 자동 슬라이드 토글 버튼 */}
                <div 
                  className={`bg-gray-200 w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer ${isAutoplay ? 'text-gray-500' : 'text-gray-100'}`}
                  onClick={handleAutoplayToggle}
                >
                  {isAutoplay ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5 text-[#222222]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5 text-[#222222]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Per2() {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    `${process.env.PUBLIC_URL}/section02Bn01.png`,
    `${process.env.PUBLIC_URL}/section02SubBn01.png`,
    `${process.env.PUBLIC_URL}/section02SubBn02.png`,
    `${process.env.PUBLIC_URL}/section02SubBn03.png`,
  ];

  // 슬라이드 변경 시 활성화된 슬라이드 인덱스를 콘솔에 출력하는 함수
  const handleSlideChange = (swiper) => {
    // realIndex를 사용하여 실제 활성화된 슬라이드 인덱스를 확인
    const newIndex = swiper.realIndex;
    setActiveSlide(newIndex);
    console.log('현재 활성화된 슬라이드 인덱스:', newIndex);
  };

  return (
    <div className="w-[1200px] h-[600px] mx-auto flex">
      {/* 왼쪽 큰 이미지 영역 */}
      <div className="w-[80%] h-full bg-gray-300">
        {/* 큰 이미지 */}
        <img 
          src={images[activeSlide]} 
          alt="Large" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 오른쪽 작은 이미지들 슬라이드 영역 */}
      <div className="w-[20%] h-full flex flex-col justify-center">
        <Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={handleSlideChange}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={10}
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={image} 
                alt={`Small ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}





function MenuSection03() {
  // 스와이퍼 인스턴스를 참조할 ref
  const swiperRef2 = useRef(null);

  // 슬라이드를 왼쪽으로 이동하는 함수 // 방향 체크 해보기 0818
  const slidePrev2 = () => {
      if (swiperRef2.current && swiperRef2.current.swiper) {
          swiperRef2.current.swiper.slidePrev();
      }
  };

  // 슬라이드를 오른쪽으로 이동하는 함수
  const slideNext2 = () => {
      if (swiperRef2.current && swiperRef2.current.swiper) {
          swiperRef2.current.swiper.slideNext();
      }
  };

  return (
      <>
          {/* 100% 섹션  */}
          <div className='w-full h-[752px] bg-[#edeef2] flex flex-col justify-center items-center mt-[150px]'>
              {/* 실제 컨탠츠 들어갈 공간 */}
              <div className='relative bg-red-300 w-full md:w-[1200px] flex justify-center items-center flex-col'>

                  {/* 타이틀 부분 */}
                  <div className=' flex flex-col justify-center items-center bg-red-200'>
                      <h1 className='text-5xl md:text-[64px] scoop-font'>Menu</h1>
                      <p className='text-xl md:text-2xl mt-2 mb-12  '>이디야의 신제품을 만나보세요.</p>
                  </div>

                  {/* 실제 스와이퍼 들어갈 공간 */}
                  <div className='relative w-[1200px]'>
                      <Swiper
                          ref={swiperRef2}
                          
                          className="mySwiper w-full h-full "
                          modules={[Navigation, Autoplay]} // 네비게이션 모듈 사용
                          loop={true} // 무한 루프 모드
                          autoplay = {{delay: 2500,
                          disableOnInteraction: false,
                          }}
                          slidesPerView={3}  // 한 번에 4개의 슬라이드 표시
                          

                      >
                          <SwiperSlide><Section03MenuUl index={0} /></SwiperSlide>
                          <SwiperSlide><Section03MenuUl index={1} /></SwiperSlide>
                          <SwiperSlide><Section03MenuUl index={2} /></SwiperSlide>
                          <SwiperSlide><Section03MenuUl index={3} /></SwiperSlide>
                          <SwiperSlide><Section03MenuUl index={4} /></SwiperSlide>
                          <SwiperSlide><Section03MenuUl index={5} /></SwiperSlide>
                          <SwiperSlide><Section03MenuUl index={6} /></SwiperSlide>
                          <SwiperSlide><Section03MenuUl index={7} /></SwiperSlide>

                      </Swiper>
                  </div>

                  {/* 왼쪽방향버튼 */}
                  <div
                      className='absolute z-10 top-[290px] left-[-30px] w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer'
                      onClick={slidePrev2}
                  >
                      <div className='absolute w-[30px] h-[30px] bg-gray-400 rounded-full'></div>
                      <div className='absolute inset-0 flex items-center justify-center z-[100]'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" className="size-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                          </svg>
                      </div>
                  </div>

                  {/* 오른쪽방향버튼 */}
                  <div
                      className='absolute z-10 top-[290px] left-[1200px] w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer'
                      onClick={slideNext2}
                  >
                      <div className='absolute w-[30px] h-[30px] bg-gray-400 rounded-full'></div>
                      <div className='absolute inset-0 flex items-center justify-center z-[100] '>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" className="size-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                      </div>
                  </div>

              </div>

          </div>
      </>
  );
}

function Section03MenuUl({ index }) {
  const menuItems = [
      {
          name: '허쉬 크리미 초콜릿',
          image: 'menu01.png'
      },
      {
          name: '바닐라 라떼',
          image: 'menu02.png'
      },
      {
          name: '카라멜 마끼아또',
          image: 'menu03.png'
      },
      {
          name: '초코 바나나 스무디',
          image: 'menu04.png'
      },
      {
          name: '허쉬 크리미 초콜릿',
          image: 'menu01.png'
      },
      {
          name: '바닐라 라떼',
          image: 'menu02.png'
      },
      {
          name: '카라멜 마끼아또',
          image: 'menu03.png'
      },
      {
          name: '초코 바나나 스무디',
          image: 'menu04.png'
      }
  ];

  return (
      <ul className='flex justify-center items-center gap-4  '>
          <li className='flex flex-col items-center  '>
              <div className='w-[230px] h-[230px]  flex justify-center items-center  '>
                  <img className='object-cover ' src={`${process.env.PUBLIC_URL}/${menuItems[index].image}`} alt={menuItems[index].name} />
              </div>
              {/* 텍스트 */}
              <div className='text-center mt-2  '>
                  <p className='text-black font-semibold text-2xl'>{menuItems[index].name}</p>
                  <div className='flex justify-center mt-1 space-x-1'>
                      <div className='w-[40px] bg-[#243c84] rounded-2xl text-center text-xs text-white'>ICED</div>
                      <div className='w-[40px] bg-[#9c1515] rounded-2xl text-center text-xs text-white'>HOT</div>
                  </div>
              </div>
          </li>
      </ul>
  );
}

function MdItem(){
  return(
    <>
    {/* 100% */}
      <div className='w-full h-auto md:h-[1283px] bg-red-400'>
        {/* 인도네시아 나무 배경 */}
        <Link to="/"><div className='w-full h-[355px] bg-cover' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/indonesia.png)` }}></div></Link> 

        {/* 갈색배경 */}
        <div className='w-full h-[871px] bg-cover ' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/indonesiaBG.png)` }}>
          
          <div>
            {/* 타이틀 */}
            <div className='flex flex-col items-center mb-16'>
              <h1 className='text-5xl md:text-[64px] scoop-font mt-[130px] '>MD's Item</h1>
              <p className='text-xl md:text-2xl mt-[-6px]'>MD 추천 상품을 만나보세요.</p>
            </div>

            {/* MD상품 */}
            <div className='flex items-center justify-center gap-12 md:gap-36'>

              {/* 텀블러 */}
              <div data-aos="fade-up" className='flex flex-col items-center'>
                
                <div className='relative'>
                  <img className='w-[150px] h-[345px] md:w-auto md:h-auto' src={`${process.env.PUBLIC_URL}/Tumbler.png`}/>
                  <img className='w-[70px] h-[70px] md:w-auto md:h-auto absolute top-[-10%] md:left-[-10%]' src={`${process.env.PUBLIC_URL}/New.png`}/>
                </div>
                <h4 className='font-semibold text-3xl md:text-[36px] mt-[-68px]'>SUBSUB</h4>
                <p className='text-black text-2xl md:text-[36px] mt-0 md:mt-[-20px]'>스마일 텀블러</p>
              </div>
              {/* 파우치 */}
              <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col items-center'>
                
                <div className='relative top-[5.5rem]'>
                  <img className='w-[150px] h-[225px] md:w-auto md:h-auto' src={`${process.env.PUBLIC_URL}/Pouch.png`}/>
                  <img className='w-[70px] h-[70px] md:w-auto md:h-auto absolute top-[15%] left-[8%]' src={`${process.env.PUBLIC_URL}/Best.png`}/>
                </div>
                
                <div className='mt-[50px] md:mt-0'>
                  <h4 className='font-semibold text-3xl md:text-[36px] mt-0 md:mt-[-74px]'>SUBSUB</h4>
                  <p className='text-black text-2xl md:text-[36px] mt-0 md:mt-[-20px]'>몽글파우치세트</p>
                

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
// custom1200 --> 1200 미만일때 
function StoreEDway() {
  return (
    <div className='relative w-full h-[1400px] md:h-[1000px] custom1200:h-[594px] flex justify-center'>

      <div className='w-full  md:w-[1200px] h-full'>

        <div className='flex flex-col items-center custom1200:flex-row justify-center mt-[120px] gap-[250px] md:gap-[96px]'>

          <div className='relative w-full md:w-[580px] text-center'>

            <h4 className='scoop-font  text-5xl md:text-[64px]'>Store</h4>
            <p className='text-xl md:text-[24px] mb-[20px]'>내 주변 가까운 이디야 매장을 찾아보세요</p>
            
            <div className='block md:hidden px-4'>
              <img  src={`${process.env.PUBLIC_URL}/StoreMobileMap.png`}/>
            </div>

            <div className='relative w-auto md:w-[580px] hidden md:block'>
              <img src={`${process.env.PUBLIC_URL}/store_map.png`} alt="Store Map" />

              <div className='ping absolute top-0 left-[40%]'>
                <img src={`${process.env.PUBLIC_URL}/ping.png`} alt="Ping" />
              </div>
            </div>
            

            {/* 구름 */}
        
            <div className='absolute top-[130px] left-[0px] cloud1Ani'>          
              <img  className=' bg-cover'  src={`${process.env.PUBLIC_URL}/cloud01.png`} alt="Cloud 01"  />
            </div>

            <div className='absolute top-[250px] left-[200px] cloud2Ani'>         
              <img  className=' bg-cover'  src={`${process.env.PUBLIC_URL}/cloud02.png`} alt="Cloud 02"  />
            </div>

          </div>

          <div className=' text-center'>
            <h4 className='scoop-font  text-5xl md:text-[64px]'>ED way</h4>
            <p className='text-[24px] mb-[20px]'>오랜 시간 우리 곁에 함께한 이디야 커피</p>
            <div className='relative flex justify-center'>

              <div className='hidden md:block bg-[#f8f1e7] w-[350px] h-[300px] md:w-[480px] md:h-[171px] rounded-[50px]  md:rounded-full'></div>
              <div className='block md:hidden'><img src={`${process.env.PUBLIC_URL}/EDway.png`} alt="EDway" /></div> {/* <img className='bg-cover' src={`${process.env.PUBLIC_URL}/circle.png`} alt="Circle" /> */}

              <div className='hidden md:block absolute top-[50%] translate-y-[-50%] left-[10px]'>
                <img className='bg-cover' src={`${process.env.PUBLIC_URL}/ediyalogo.png`} alt="Ediya Logo" />
              </div>
              <div className='hidden md:block absolute top-0 md:top-[-50px] left-[150px]'>
                <img className='bg-cover' src={`${process.env.PUBLIC_URL}/picture.png`} alt="Picture" />
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
}











export default App;
