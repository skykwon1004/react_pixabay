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

  //총 이미지 개수
  const [total, setTotal] = useState([]);

  //검색기능
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');

  // 로딩중 표시
  const [loading, setLoading] = useState(false);

  //페이지네이션 구현
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      const r = await axios.get(`https://pixabay.com/api/?key=7526224-b607b4b30dee443650033bd9e&q=${search}&per_page=200`);
      setPhotos(r.data.hits);
      //console.log(r);
      // console.log(r.data.hits);
      setTotal(r.data.total);
      setLoading(false);
    }
    getPhotos();

  }, [search]);

  //console.log(total)
  console.log(photos)


  //페이지네이션 구현
  /* pagination */
  // currentPage = 1;
  // postsPerPage = 8;
  // indexOfLast = 8;
  // indexOfFirst = 0;
  const indexOfLast = currentPage * postsPerPage; //8
  const indexOfFirst = indexOfLast - postsPerPage; //0
  const currentPosts = (photos) => {
    let currentPosts = 0;
    // currentPosts = photos.slice(0, 8); //0~7까지 잘라라
    currentPosts = photos.slice(indexOfFirst, indexOfLast);
    // console.log(currentPosts);
    return currentPosts;
  };




  return (
    <>
      <Header search={search} setSearch={setSearch} input={input} setInput={setInput} />

      <Routes>
        <Route index element={<Main photos={currentPosts(photos)} loading={loading} total={total}/>} />
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/detail/cat' element={<div>고양이가 우주를 지배한다</div>} />
      </Routes>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={photos.length}
        paginate={setCurrentPage}
      ></Pagination>
      <Footer />
    </>
  )
}

export default App;
