import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styled from 'styled-components'

const WRAPPER = styled.div`
  padding: 10px 50px;
`

const LIST = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const Comment = (comment) => {
  const [co, setCo] = useState('고양이 귀엽다');
  return (
    <>
      <WRAPPER>

        <LIST>
          <strong>고양이는 최고야</strong><span>2월 17일 발행</span>
        </LIST>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              placeholder="댓글 달기..."
              type="text"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            게시
          </Button>
        </Form>
      </WRAPPER>
    </>
  )
}

export default Comment