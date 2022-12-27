import logo from "./logo.svg";
import "./App.css";

function App() {
  // APP() << APP이라는 태그가 됨
  return (
    <div>
      <h1>리액트 APP</h1>
      <p>리액트 처음 시작합니다</p>
      <Hello></Hello>
    </div>
    // div 박스로 묶어야함 , 바로 h1,p 적용X / 한 줄(ex-h1)일 때는 div로 안묶어도 됨
  );
}

// Hello 함수(컴포넌트) => JSX 태그
function Hello() {
  return <h1>Hello</h1>;
} // hello가 컴포넌트가 된다 <hello></hello>
// 일반함수가 아니라 컴포넌트이다. 컴포넌트는 관례상 대문자, 다른 태그들은 소문자인데 리액트 컴포넌트(대문자)와 구분하기 위해 대문자로 사용하는 게 좋음.

export default App;
