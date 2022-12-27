import "./App.css";
import Hello from "./components/Hello.js";
// import 변수명 from '파일경로';

function App() {
  // APP() << APP이라는 태그가 됨
  return (
    <div>
      <Visual />
      <h1>리액트 APP</h1>
      <p>리액트 처음 시작합니다</p>
      <Hello />
    </div>
    // div 박스로 묶어야함 , 바로 h1,p 적용X / 한 줄(ex-h1)일 때는 div로 안묶어도 됨
  );
}

function Visual() {
  return (
    <div>
      <img src="http://placeimg.com/800/400/nature" alt="nature"></img>
    </div>
  );
}

export default App;
