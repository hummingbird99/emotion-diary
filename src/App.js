import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"Left"} onClick={() => alert("왼쪽 클릭")} />
          }
          rightChild={
            <MyButton text={"Right"} onClick={() => alert("오른쪽 클릭")} />
          }
        />
        <h2>App.js 글씨체</h2>

        <MyButton
          text={"Button"}
          onClick={() => alert("Click the button")}
          type={"positive"}
        />
        <MyButton
          text={"Button"}
          onClick={() => alert("Click the button")}
          type={"negative"}
        />
        <MyButton text={"Button"} onClick={() => alert("Click the button")} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
