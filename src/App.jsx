import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
function App() {
  return (
    <div className="main">
      <Box1>
        <Box2>
          <Box3>
            <Box4></Box4>
            <Box4></Box4>
          </Box3>
        </Box2>
      </Box1>
    </div>
  );
}

export default App;
