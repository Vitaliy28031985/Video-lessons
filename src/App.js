
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import s from './style/Style.module.css';

import { Container} from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import {Footer} from './components/Footer/Footer';

const Home = lazy(() => import('./components/Home/Home' /* webpackChunkName: "Home" */));
const VideoPage = lazy(() => import('./components/VideoPage/VideoPage' /* webpackChunkName: "VideoPage" */));



function App() {
  return (
  <div className={s.wrapper}> 
  <Container>
    <Navigation/>
      <Suspense fallback={<p>Loader...</p>}>
      <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/video" element={<VideoPage/>}/>
      </Routes>
    </Suspense>
    <Footer/>
  </Container>
   </div>);
};

export default App;
