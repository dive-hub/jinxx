import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Live from './pages/live';
import Discover from './pages/Discover'
import WatchHistory from './pages/WatchHistory';
import Best from './pages/category/girls/best';
import Recommended from './pages/category/girls/recommended';
import Favorites from './pages/Favorites';
import ProductPage from './pages/category/girls/product.page';
import About from './pages/About';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='live' element={<Live/>} />
          <Route path="discover" element={<Discover />} />
          <Route path="watchhistory" element={<WatchHistory />} />
          <Route path="/girls/best" element={<Best />} />
          <Route path="/girls/recommended" element={<Recommended />} />
          <Route path='/profile-id:name' element={<ProductPage />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;