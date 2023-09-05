import axios from 'axios'
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

const Main = ({ photos, loading }) => {
    // console.log(photos)
    return (
        <MAIN>
            {loading && <div className='loading'>Loading...</div>}

            <h2>{photos.id}</h2>
            <CARD_WRAPPER>
                {
                    photos.map((it, idx) => {
                        return (
                            <Card style={{ width: '18rem' }} key={it.id}>
                                <Card.Img variant="top" src={it.largeImageURL} />
                                <Card.Body>
                                    <Card.Title>{it.tags}</Card.Title>
                                    <Card.Text>
                                        ❤ {it.likes}
                                    </Card.Text>
                                    <Link to={it.pageURL}>
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