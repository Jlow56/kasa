import React from 'react';
// Routes
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// Pages templates
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import HousingPage from '../pages/Housing';
import ErrorPage from '../pages/Error';
// Layouts
import Header from '../layouts/Header';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';

function StaticLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />  
    </>
  );
}

const AppRouter = () => 
  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StaticLayout/>}>
          <Route  index element={<HomePage/>} />
          <Route path="About" element={<AboutPage/>} />
          <Route path="Housing/:id" element={<HousingPage />} />
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

export default AppRouter;

