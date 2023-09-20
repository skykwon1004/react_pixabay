import React from 'react'
import { useParams } from 'react-router-dom';
import Comment from './Comment';

import styled from 'styled-components'

const INNER = styled.div`
  padding: 100px;
`
const IMG_WARPPER = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 50px 0;
`

const Detail = ({ photos, loading }) => {
  const { webformatURL } = useParams();

  return (
    <INNER>
      <IMG_WARPPER>
        <img src={decodeURIComponent(webformatURL)} alt="다운로드된 이미지" />
      </IMG_WARPPER>
      <Comment />
    </INNER>
  );
}

export default Detail