import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MAIN = styled.section`
padding: 100px 100px;
`
const CARD_WRAPPER = styled.div`
width: 1280px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 30px;
`

const Main = ({ photos, loading, total }) => {

    const [likes, setLikes] = useState([]); // 각 아이템의 좋아요 수를 저장하는 배열

    // 초기 좋아요 수를 설정
    useEffect(() => {
        const initialLikes = photos.map((photo) => photo.likes);
        setLikes(initialLikes);
    }, [photos]);

    // 해당 아이템의 좋아요 수를 증가시키는 함수
    const incrementLike = (idx) => {
        const newLikes = [...likes];
        newLikes[idx] += 1;
        setLikes(newLikes);
    };

    return (
        <MAIN>
            {loading && <div className='loading'>Loading...</div>}

            <h3 className='img_total'>총 이미지 개수 : {total}</h3>
            <CARD_WRAPPER>
                {
                    photos.map((it, idx) => {
                        return (
                            <Card style={{ width: '18rem' }} key={it.id}>
                                <Card.Img variant="top" src={it.largeImageURL} />
                                <Card.Body>
                                    <Card.Title>{it.tags}</Card.Title>
                                    <Card.Text>
                                        <span className="like" onClick={() => incrementLike(idx)}><b>❤</b> {likes[idx]}</span>
                                    </Card.Text>
                                    <Link to='/detail'>
                                        <Button variant="primary">Download</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </CARD_WRAPPER>
        </MAIN>
    )
}

export default Main