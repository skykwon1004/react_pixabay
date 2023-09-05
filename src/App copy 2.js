// warning 안뜨게 하기
/* eslint-disable */

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Pagination from './components/Pagination';

function App() {

  //1. api를 담을 변수 준비
  //2. 변수에 api get
  //3. 데이터 담기 완료
  //4. useEffect로 api get (한번만 실행되게)

  const [photos, setPhotos] = useState([]);


  //검색기능
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');


  // pagination 구현

  const getPhotos = async () => {
    const r = await axios.get(`https://pixabay.com/api/?key=7526224-b607b4b30dee443650033bd9e&q=${search}&per_page=50`);
    setPhotos(r.data.hits);
    //console.log(r);
    // console.log(photos.data.hits);
  }

  useEffect(() => {
    getPhotos();
  }, [search]);



  return (
    // <>
    //   <Routes>
    //     <Route path='/' element={<Layout photos={photos}/>} >
    //       <Route index element={<Main photos={photos} />} />
    //       <Route path='/detail:id' element={<Detail />} />

    //     </Route>
    //   </Routes>
    // </>
    <>
      <Header search={search} setSearch={setSearch} input={input} setInput={setInput} />

      <Routes>
        <Route index element={<Main photos={photos} />} />
        <Route path='/detail' element={<Detail />}>
          <Route path='/detail/01' element={<Detail />} />
        </Route>
      </Routes>
      <Pagination
      ></Pagination>
      <Footer />
    </>
  )
}

export default App;

