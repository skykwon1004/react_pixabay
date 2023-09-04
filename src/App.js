// warning 안뜨게 하기
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from './components/Main';
import Detail from './components/Detail';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  //1. api를 담을 변수 준비
  //2. 변수에 api get
  //3. 데이터 담기 완료
  //4. useEffect로 api get (한번만 실행되게)

  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const love = 'love';

  const getPhotos = async () => {
    // const photos = await axios.get('https://pixabay.com/api/?key=7526224-b607b4b30dee443650033bd9e&q=yellow+flowers&image_type=photo');
    const r = await axios.get(`https://pixabay.com/api/?key=7526224-b607b4b30dee443650033bd9e&q=${search}`);
    setPhotos(r.data.hits);
    console.log(r);
    // console.log(photos.data.hits);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout photos={photos}/>} >
          <Route index element={<Main photos={photos} />} />
          <Route path='/detail:id' element={<Detail />} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App;
