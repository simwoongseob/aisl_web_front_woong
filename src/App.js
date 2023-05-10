import logo from "./logo.svg";
import "./App.css";

import {
  Router,
  Routes,
  Route,
  Link,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";
import Album from "./pages/Album/Album";
import FindUserInfo from "./pages/FindUserInfo/FindUserInfo";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Community from "./pages/Community/Community";
import Notice from "./pages/Notice/Notice";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/album" element={<Album />} />
          <Route path="/finduserinfo" element={<FindUserInfo />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
