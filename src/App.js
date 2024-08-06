import logo from './logo.svg';
import './App.css';
// 이디야 작업 시작
function App() {
  return (
    <>
      {/* 100% */}
      <div className="bg-red-500">
        {/* 80% */}
        <div className="p-4">
          {/* logo */}
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </div>
          {/* 서브메뉴 */}
          <div className="mt-4">
            <ul className="list-disc pl-5">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
          {/* 가맹문의 */}
          <div className="mt-4">
            {/* Content here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
