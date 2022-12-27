// Hello 함수(컴포넌트) => JSX 태그 / DOM이라고 보면 됨
function Hello() {
  return <h1>Hello</h1>;
} // hello가 컴포넌트가 된다 <Hello></Hello>
// ↑ 일반함수가 아니라 컴포넌트이다. 컴포넌트는 관례상 대문자, 다른 태그들은 소문자인데 리액트 컴포넌트(대문자)와 구분하기 위해 대문자로 사용하는 게 좋음.

export default Hello;
// Hello라는 함수를 변수로 export
