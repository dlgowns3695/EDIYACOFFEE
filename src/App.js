import React, { useState, useRef , useEffect,} from 'react';
import './App.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

import { Routes, Route, Link } from 'react-router-dom'
import About from './about/About';
import Menus from './menus/Menus';
import Story from './story/Story';
import Store from './store/Store';
import styles from './componentsCss/MenuSection03.global.css'; // CSS Modules로 가져오기
import Footer from './footer/Footer'

// import Home from './pages/Home';



// 스와이퍼들 버튼 수정하기
// Promotion섹션 작은 이미지 누를때 왼쪽 큰 사이즈로 넘어가기
// Menu섹션 스와이퍼시 메뉴 하나씩 넘어가기로, 무한대로

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
    <div
      ref={headerRef}
      style={{
        transition: 'background-color 0.3s ease-in-out',
      }}
      className="fixed z-[999] w-full h-[130px] flex items-center justify-center"
    >
      {/* 1200px 내용물공간 */}
      <div className="w-[1200px] h-full flex justify-between items-center">
        {/* 왼쪽: 로고와 메뉴, 수직정렬 */}
        <div className="flex items-center">
          {/* 로고 */}
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/ediyalogo.png`}
              alt="ediyalogo"
            />
          </div>
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
              <li ref={contact01Refs} className="text-[#243c84]">KR</li>
              <li ref={contact02Refs} className="text-[#d2d6e5]">EN</li>
            </ul>
            <div
              ref={contactBtnRef}
              className="flex items-center justify-center rounded-full w-[114px] h-[40px] bg-[#243c84]"
            >
              가맹문의
            </div>
          </div>
        </div>
      </div>
    </div>
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
  const buttonStyle = 'absolute z-10 w-[71px] h-[71px] bg-white rounded-full flex items-center justify-center cursor-pointer';
  const borderStyles = 'absolute rounded-[150px] border-4';

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
    <>
      {/* 가운데 로고 부분 */}
      <div className='w-[277px] h-[105px] absolute z-10 top-[8.5%] left-[50%] transform -translate-x-1/2'>
        <img src={`${process.env.PUBLIC_URL}/titlelogo.png`} alt="titlelogo" />
      </div>

      {/* 스와이퍼 섹션 */}
      <div className='w-full relative h-[800px]'>
        <img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/section01BG.png`} alt="Background" />

        <div className='absolute inset-0 top-[80px] flex items-center justify-center'>
          {/* 배경 보더 */}
          <div className={`${borderStyles} w-[1200px] h-[620px] border-[#172650]`}></div>
          <div className={`${borderStyles} w-[1198px] h-[616px] border-[#243c84]`}></div>
          <div className={`${borderStyles.replace('border-4', 'border-8')} w-[1194px] h-[612px] border-[#203573]`}></div>
          <div className={`${borderStyles.replace('border-4', 'border-8')} w-[1188px] h-[604px] border-[#233b81]`}></div>
          <div className={`${borderStyles} w-[1180px] h-[596px] border-[#1f326c]`}></div>
          <div className={`${borderStyles} w-[1176px] h-[592px] border-[#182855]`}></div>
          <div className={`${borderStyles.replace('border-4', 'border-8')} w-[1174px] h-[589px] border-[#21387b]`}></div>

          <div className='relative w-[1174px] h-[589px] border-4 border-[#2d3c72] rounded-[150px] overflow-hidden'>
            <Swiper
              ref={swiperRef} // 스와이퍼 인스턴스를 참조
              navigation={false} // 네비게이션 버튼 비활성화
              className='w-full h-full'
              modules={[Navigation, Autoplay]} // 네비게이션 모듈 사용
              loop={true} // 무한 루프 모드
              autoplay = {{delay: 2500,
              disableOnInteraction: false,
              }}
            >
              {/* 각 슬라이드 */}
              <SwiperSlide><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn01.png`} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn02.png`} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img className='w-full h-full object-cover' src={`${process.env.PUBLIC_URL}/bn03.png`} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </div>

          {/* 왼쪽 방향 버튼 */}
          <div
            className={`${buttonStyle} left-[320px]`}
            onClick={slidePrev} // 왼쪽 슬라이드 버튼 클릭 시 호출
          >
            <div className='absolute w-[99px] h-[99px] bg-[#213779] rounded-full'></div>
            <div className='absolute w-[91px] h-[91px] bg-[#182855] rounded-full'></div>
            <div className='absolute w-[83px] h-[83px] bg-[#1f326c] rounded-full'></div>
            <div className='absolute w-[79px] h-[79px] bg-[#233b81] rounded-full'></div>
            <div className='absolute w-[71px] h-[71px] bg-white rounded-full'></div>
            <div className='absolute inset-0 flex items-center justify-center z-[100]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="#21387b" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
          </div>

          {/* 오른쪽 방향 버튼 */}
          <div
            className={`${buttonStyle} left-[1510px]`}
            onClick={slideNext} // 오른쪽 슬라이드 버튼 클릭 시 호출
          >
            <div className='absolute w-[99px] h-[99px] bg-[#213779] rounded-full'></div>
            <div className='absolute w-[91px] h-[91px] bg-[#182855] rounded-full'></div>
            <div className='absolute w-[83px] h-[83px] bg-[#1f326c] rounded-full'></div>
            <div className='absolute w-[79px] h-[79px] bg-[#233b81] rounded-full'></div>
            <div className='absolute w-[71px] h-[71px] bg-white rounded-full'></div>
            <div className='absolute inset-0 flex items-center justify-center z-[100]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="#21387b" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>

          {/* 장식 이미지들 */}
          <img
            ref={el => imageRefs.current[0] = el} // 첫 번째 이미지 참조
            className='absolute top-[480px] left-[200px] z-10'
            src={`${process.env.PUBLIC_URL}/human01.png`}
            alt="human"
            onLoad={handleImageLoad} // 이미지가 로드되면 함수 호출
          />
          <img
            ref={el => imageRefs.current[1] = el} // 두 번째 이미지 참조
            className='absolute top-[550px] left-[400px] z-10'
            src={`${process.env.PUBLIC_URL}/middleHuman.png`}
            alt="middle human"
            onLoad={handleImageLoad} // 이미지가 로드되면 함수 호출
          />
          <img
            ref={el => imageRefs.current[2] = el} // 세 번째 이미지 참조
            className='absolute top-[600px] left-[1500px] z-10'
            src={`${process.env.PUBLIC_URL}/car.png`}
            alt="car"
            onLoad={handleImageLoad} // 이미지가 로드되면 함수 호출
          />
        </div>
      </div>
    </>
  );
}


/*
기존 코드 0818 18:00

function PromotionSection02() {
  // 왼쪽 이미지 초기 셋팅
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  // 이미지들 배열 0 1 2 3
  const images = [
    `${process.env.PUBLIC_URL}/section02Bn01.png`,
    `${process.env.PUBLIC_URL}/section02SubBn01.png`,
    `${process.env.PUBLIC_URL}/section02SubBn02.png`,
    `${process.env.PUBLIC_URL}/section02SubBn03.png`,
  ];

  // 오른쪽 이미지 초기 셋팅
  const [rightImages, setRightImages] = useState(images.slice(1, 4));

  // 자동 슬라이드 상태 관리
  const [isAutoSlideActive, setIsAutoSlideActive] = useState(true);

  // 이 함수가 실행되면 이미지 변경
  const handleImageClick = (clickedImage) => {
    const newLeftImageIndex = images.indexOf(clickedImage);
    const newRightImages = rightImages.map(img =>
      img === clickedImage ? images[leftImageIndex] : img
    );

    setLeftImageIndex(newLeftImageIndex);
    setRightImages(newRightImages);
  };

  // 윗 버튼 눌렀을 때
  const handleMoveUp = () => {
    const newLeftImageIndex = (leftImageIndex + 1) % images.length;
    const newRightImages = [
      images[(newLeftImageIndex + 1) % images.length],
      images[(newLeftImageIndex + 2) % images.length],
      images[(newLeftImageIndex + 3) % images.length],
    ];
    setLeftImageIndex(newLeftImageIndex);
    setRightImages(newRightImages);
  };

  // 아래 버튼 눌렀을 때
  const handleMoveDown = () => {
    const newLeftImageIndex = (leftImageIndex + images.length - 1) % images.length;
    const newRightImages = [
      images[(newLeftImageIndex + 1) % images.length],
      images[(newLeftImageIndex + 2) % images.length],
      images[(newLeftImageIndex + 3) % images.length],
    ];
    setLeftImageIndex(newLeftImageIndex);
    setRightImages(newRightImages);
  };

  // 5초마다 자동으로 이미지 변경 (isAutoSlideActive가 true일 때만)
  useEffect(() => {
    if (isAutoSlideActive) {
      const intervalId = setInterval(handleMoveUp, 5000);
      return () => clearInterval(intervalId);
    }
  }, [leftImageIndex, isAutoSlideActive]);

  // 자동 슬라이드 토글 함수
  const toggleAutoSlide = () => {
    setIsAutoSlideActive(!isAutoSlideActive);
  };

  // 공통 css
  const containerClass = "rounded-lg relative";
  const buttonClass = "bg-gray-200 w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer";
  const indicatorClass = "w-[7px] h-[7px] rounded-full";
  const activeIndicatorClass = "bg-gray-500";
  const inactiveIndicatorClass = "bg-gray-100";

  return (
    <>
     
      <div className="w-full flex items-center justify-center">
    
        <div className="w-[1200px]">
          <div className="text-center">
            <h1 className="text-[64px] scoop-font">Promotion</h1>
            <p className="text-2xl mt-2 font-semibold ">이디야의 다양한 혜택과 이벤트를 만나보세요.</p>

          
            <div className="flex mt-8 h-[486px] justify-between">
              
              <div className={`${containerClass} relative`}>
                <Link to="/">
                  <img className="w-[878px] h-[486px] object-cover" src={images[leftImageIndex]} />
                </Link>
              </div>

             
              <div className="flex flex-col justify-between">
                {rightImages.map((image, index) => (
                  <div
                    key={index}
                    className={`${containerClass} cursor-pointer image-slide`}
                    onClick={() => handleImageClick(image)}
                  >
                    <img className="w-[230px] h-[146px] object-cover" src={image} />
                  </div>
                ))}
              </div>

              <div className='h-full w-[35px] flex justify-center'>
                <div className='flex flex-col items-center justify-start gap-5'>
                 
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`${indicatorClass} ${index === leftImageIndex ? activeIndicatorClass : inactiveIndicatorClass}`}
                    ></div>
                  ))}
                 
                  <div className={buttonClass} onClick={handleMoveUp}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  </div>
                 
                  <div className={buttonClass} onClick={handleMoveDown}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                 
                  <div className={buttonClass} onClick={toggleAutoSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


*/

function PromotionSection02() {
  // 초기 이미지 인덱스와 이미지 리스트
  const [currentIndex, setCurrentIndex] = useState(0);
  // 자동 슬라이드 상태 관리
  const [isAutoSlideActive, setIsAutoSlideActive] = useState(true);

  const images = [
    `${process.env.PUBLIC_URL}/section02Bn01.png`,
    `${process.env.PUBLIC_URL}/section02SubBn01.png`,
    `${process.env.PUBLIC_URL}/section02SubBn02.png`,
    `${process.env.PUBLIC_URL}/section02SubBn03.png`,
  ];

  // 자동 슬라이드 효과
  useEffect(() => {
    if (isAutoSlideActive) {
      const slideInterval = setInterval(() => {
        handleMoveUp();
      }, 5000); // 5초마다 슬라이드 이동

      return () => clearInterval(slideInterval); // 클린업
    }
  }, [isAutoSlideActive]);

  // 위로 이동
  const handleMoveUp = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  // 아래로 이동
  const handleMoveDown = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  // 자동 슬라이드 토글
  const toggleAutoSlide = () => {
    setIsAutoSlideActive((prev) => !prev); // 상태 토글
  };

  // 버튼 클래스
  const buttonClass = "bg-gray-200 w-[25px] h-[25px] rounded-full flex justify-center items-center cursor-pointer";

  return (
    <>
      {/* 100% 섹션 */}
      <div className="w-full flex items-center justify-center">
        {/* 80% */}
        <div className="w-[1200px]">
          <div className="text-center">
            <h1 className="text-[64px] scoop-font">Promotion</h1>
            <p className="text-2xl mt-2 font-semibold">이디야의 다양한 혜택과 이벤트를 만나보세요.</p>

            {/* 이미지 컨테이너 */}
            <div className="flex mt-8 h-[486px] justify-between">
              {/* 왼쪽 이미지 공간 */}
              <div className="rounded-lg relative">
                <Link to="/">
                  <img className="w-[878px] h-[486px] object-cover" src={images[currentIndex]} alt="Main Promotion" />
                </Link>
              </div>

              {/* 오른쪽 이미지 공간 */}
              <div className="relative h-[486px] w-[230px] overflow-hidden">
                {/* 이미지 컨테이너 */}
                <div className="flex flex-col justify-center gap-[24px] absolute top-0 left-0 w-full transition-transform duration-500" style={{ transform: `translateY(-${currentIndex * 170}px)` }}>
                  {images.map((image, index) => (
                    <div key={index} className="rounded-lg relative cursor-pointer image-slide">
                      <img className="w-full h-[146px] object-cover" src={image} alt={`Sub Promotion ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className='h-full w-[35px] flex justify-center'>
                <div className='flex flex-col items-center justify-start gap-5'>
                  {/* Indicator circles */}
                  <div className={`w-[7px] h-[7px] rounded-full ${currentIndex === 0 ? 'bg-gray-500' : 'bg-gray-100'}`}></div>
                  <div className={`w-[7px] h-[7px] rounded-full ${currentIndex === 1 ? 'bg-gray-500' : 'bg-gray-100'}`}></div>
                  <div className={`w-[7px] h-[7px] rounded-full ${currentIndex === 2 ? 'bg-gray-500' : 'bg-gray-100'}`}></div>
                  <div className={`w-[7px] h-[7px] rounded-full ${currentIndex === 3 ? 'bg-gray-500' : 'bg-gray-100'}`}></div>

                  {/* 윗 버튼 */}
                  <div className={buttonClass} onClick={handleMoveUp}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  </div>

                  {/* 아래 버튼 */}
                  <div className={buttonClass} onClick={handleMoveDown}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>

                  {/* = 버튼 */}
                  <div className={buttonClass} onClick={toggleAutoSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                  </div>
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
          {/* 100% 섹션 */}
          <div className='w-full h-[752px] bg-[#edeef2] flex flex-col justify-center items-center mt-[150px]'>
              {/* 실제 컨탠츠 들어갈 공간 */}
              <div className='relative w-[1200px] flex justify-center items-center flex-col'>

                  {/* 타이틀 부분 */}
                  <div className='flex flex-col justify-center items-center'>
                      <h1 className='text-[64px] scoop-font'>Menu</h1>
                      <p className='text-2xl mt-2 mb-12 font-semibold '>이디야의 신제품을 만나보세요.</p>
                  </div>

                  {/* 실제 스와이퍼 들어갈 공간 */}
                  <div className='relative w-[1200px]'>
                      <Swiper
                          ref={swiperRef2}
                          
                          className="mySwiper w-full h-full"
                          modules={[Navigation, Autoplay]} // 네비게이션 모듈 사용
                          loop={true} // 무한 루프 모드
                          autoplay = {{delay: 2500,
                          disableOnInteraction: false,
                          }}
                          slidesPerView={4}  // 한 번에 4개의 슬라이드 표시
                          

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
                      <div className='absolute inset-0 flex items-center justify-center z-[100]'>
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
      <ul className='flex justify-center items-center gap-4'>
          <li className='flex flex-col items-center'>
              <div className='w-[230px] h-[230px] flex justify-center items-center'>
                  <img className='object-cover' src={`${process.env.PUBLIC_URL}/${menuItems[index].image}`} alt={menuItems[index].name} />
              </div>
              <div className='text-center mt-2'>
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
      <div className='w-full h-[1283px] bg-red-400'>
        {/* 인도네시아 나무 배경 */}
        <Link to="/"><div className='w-full h-[355px] bg-cover' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/indonesia.png)` }}></div></Link> 

        {/* 갈색배경 */}
        <div className='w-full h-[928px] bg-cover ' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/indonesiaBG.png)` }}>
          
          <div>
            {/* 타이틀 */}
            <div className='flex flex-col items-center mb-16'>
              <h1 className='text-[64px] scoop-font mt-[130px] '>MD's Item</h1>
              <p className='text-2xl mt-[-6px]'>MD 추천 상품을 만나보세요.</p>
            </div>

            {/* MD상품 */}
            <div className='flex items-center justify-center gap-36'>
              {/* 텀블러 */}
              <div className='flex flex-col items-center'>
                {/* PSD에서 다시 정렬하고 가져와야할듯함. */}
                <div className='relative'>
                  <img src={`${process.env.PUBLIC_URL}/Tumbler.png`}/>
                  <img className='absolute top-[-10%] left-[-10%]' src={`${process.env.PUBLIC_URL}/New.png`}/>
                </div>
                <h4 className='font-semibold text-[36px] mt-[-68px]'>SUBSUB</h4>
                <p className='text-black text-[36px] mt-[-20px]'>스마일 텀블러</p>
              </div>
              {/* 파우치 */}
              <div className='flex flex-col items-center'>
                {/* PSD에서 다시 정렬하고 가져와야할듯함. */}
                <div className='relative'>
                  <img src={`${process.env.PUBLIC_URL}/Pouch.png`}/>
                  <img className='absolute top-[15%] left-[8%]' src={`${process.env.PUBLIC_URL}/Best.png`}/>
                </div>
                
                <h4 className='font-semibold text-[36px] mt-[-74px]'>SUBSUB</h4>
                <p className='text-black text-[36px] mt-[-20px]'>몽글파우치세트</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

function StoreEDway() {
  const imageRefs = useRef([]);                // 이미지 배열을 참조할 ref
  const [loaded, setLoaded] = useState(false); // 이미지 로드 여부를 관리하는 상태

  // 이미지 로드 완료 후 호출되는 함수
  const handleImageLoad = () => {
    setLoaded(true); // 이미지를 로드한 후 상태를 true로 설정
  };

  // 이미지 애니메이션 함수
  const moveImage = (image, direction, speed) => {
    const animate = () => {
      const screenWidth = window.innerWidth; // 화면의 너비
      const imageWidth = image.offsetWidth;  // 이미지의 너비

      // 이미지의 현재 위치를 가져옴
      let currentPos = parseFloat(window.getComputedStyle(image).left);

      const updatePosition = () => {
        // 방향에 따라 이미지 위치 업데이트
        if (direction === 'left') {
          currentPos -= speed; // 왼쪽으로 이동

          if (currentPos < -imageWidth) { // 이미지가 왼쪽 화면 밖으로 나가면
            currentPos = screenWidth + imageWidth; // 화면 오른쪽 끝으로 이동
            console.log(-imageWidth)
            console.log(currentPos)
            console.log(screenWidth)
          }
        } else if (direction === 'right') {
          currentPos += speed; // 오른쪽으로 이동

          if (currentPos > screenWidth) { // 이미지가 오른쪽 화면 밖으로 나가면
            currentPos = -imageWidth; // 화면 왼쪽 끝으로 이동
          }
        }

        // 이미지의 위치를 업데이트
        image.style.left = `${currentPos}px`;

        // 다음 프레임을 요청
        requestAnimationFrame(updatePosition);
      };

      updatePosition(); // 애니메이션 시작
    };

    animate(); // 애니메이션 함수 호출
  };

  useEffect(() => {
    if (loaded) {
      // 이미지가 로드되면 애니메이션을 시작합니다
      const images = imageRefs.current;
      moveImage(images[0], 'left', 0.3); // 첫 번째 이미지: 왼쪽으로 이동
      moveImage(images[1], 'left', 0.5); // 두 번째 이미지: 왼쪽으로 이동
    }
  }, [loaded]);

  useEffect(() => {
    // 윈도우 사이즈가 변경될 때 애니메이션을 재설정합니다
    const handleResize = () => {
      const images = imageRefs.current;
      images.forEach((image, index) => {
        if (image) {
          const direction = index === 0 ? 'left' : 'left'; // 모든 이미지 왼쪽으로 이동
          const speed = index === 0 ? 0.3 : 0.5; // 속도 조절
          moveImage(image, direction, speed);
        }
      });
    };

    window.addEventListener('resize', handleResize); // 윈도우 리사이즈 이벤트 리스너 등록
    return () => window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 리스너 제거
  }, []);

  return (
    <div className='relative w-full h-[594px] flex justify-center'>
      <div className='w-[1200px] h-full'>
        <div className='flex justify-center mt-[120px] gap-[96px]'>
          <div className='relative'>
            <h4 className='scoop-font text-[64px]'>Store</h4>
            <p className='text-[24px] mb-[20px]'>내 주변 가까운 이디야 매장을 찾아보세요</p>
            <div>
              <img src={`${process.env.PUBLIC_URL}/store_map.png`} alt="Store Map" />
            </div>
            <div className='ping absolute top-[145px] left-[230px]'>
              <img src={`${process.env.PUBLIC_URL}/ping.png`} alt="Ping" />
            </div>
          </div>
          <div>
            <h4 className='scoop-font text-[64px]'>ED way</h4>
            <p className='text-[24px] mb-[20px]'>오랜 시간 우리 곁에 함께한 이디야 커피</p>
            <div className='relative'>
              <img className='bg-cover' src={`${process.env.PUBLIC_URL}/circle.png`} alt="Circle" />
              <div className='absolute top-[50%] translate-y-[-50%] left-[10px]'>
                <img className='bg-cover' src={`${process.env.PUBLIC_URL}/ediyalogo.png`} alt="Ediya Logo" />
              </div>
              <div className='absolute top-[-50px] left-[150px]'>
                <img className='bg-cover' src={`${process.env.PUBLIC_URL}/picture.png`} alt="Picture" />
              </div>
            </div>
          </div>
        </div>
        {/* 구름 */}
        
          <img ref={el => imageRefs.current[0] = el} className='absolute top-[300px] left-[100px] bg-cover'  src={`${process.env.PUBLIC_URL}/cloud01.png`} alt="Cloud 01" onLoad={handleImageLoad} />
        
        
          <img ref={el => imageRefs.current[1] = el} className='absolute top-[380px] left-[580px] bg-cover'  src={`${process.env.PUBLIC_URL}/cloud02.png`} alt="Cloud 02" onLoad={handleImageLoad} />
        
      </div>
    </div>
  );
}











export default App;
