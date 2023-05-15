import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import {
  Router,
  Routes,
  Route,
  Link,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import ScrollToTop from "./scrollTop";

import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";
import Album from "./pages/Album/Album";
import FindUserInfo from "./pages/FindUserInfo/FindUserInfo";
import Intro from "./pages/Intro/Intro";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Community from "./pages/Community/Community";
import Notice from "./pages/Notice/Notice";
import NoticeDetail from "./pages/NoticeDetail/Notice";
import NoticeCreate from "./pages/NoticeCreate/Notice";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path="/notice/detail" element={<NoticeDetail />} />
          <Route path="/notice/create" element={<NoticeCreate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
