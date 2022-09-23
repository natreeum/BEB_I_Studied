import logo from "./logo.svg";
import "./App.css";

function App() {
  const proverbs = ["좌절감으로 배움을 늦추지 마라.", "Stay hungry", "I am Hungry"];

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>src/App.js 파일을 고치고 저장하면 새로운 명언을 볼 수 있습니다.</p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
