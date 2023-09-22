import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styled from "styled-components";

const WRAPPER = styled.div`
  padding: 10px 50px;

  button {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 14px;
  }
`;

const LIST = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #bbb;
  margin: 0 0 30px 0;

  em {
    cursor: pointer;
  }

  .right {
    display: flex;
    flex-direction: column;
    /* outline: 1px solid red; */
  }

  .date {
    display: block;
    margin: 0 0 10px 0;
  }
`;

const Comment = () => {
  const today = new Date();
  // 현재 날짜를 가져옵니다.
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  // 원하는 형식으로 날짜를 설정합니다.

  const [co, setCo] = useState(["고양이 귀엽다", "알럽캣", "난 짱이다 고양이"]);
  // console.log(co)

  const [like, setLike] = useState(0);

  function 함수() {
    setLike(like + 1);
  }

  const [입력값, set입력값변경] = useState("");

  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault(); // 새로고침 방지
    let copy = [...co];
    copy.push(입력값);
    setCo(copy);
    set입력값변경("");
  };

  return (
    <>
      <WRAPPER>
        <button
          onClick={() => {
            // console.log(co.sort())
            let copy = [...co];
            setCo(copy.sort());
          }}
        >
          가나다순 정렬
        </button>

        <div>
          {co.map((item, index) => (
            <div key={index}>
              {editIndex === index ? (
                // Render an input field when editing
                <div>
                  <input
                    type="text"
                    value={co[index]}
                    onChange={(e) => {
                      let copy = [...co];
                      copy[index] = e.target.value;
                      setCo(copy);
                    }}
                  />
                  <button onClick={() => setEditIndex(-1)}>저장</button>
                </div>
              ) : (
                // Render the comment text and edit button
                <div>
                  <strong>
                    {item} <em onClick={함수}>❤</em> {like}
                  </strong>
                  <div className="right">
                    {/* ... */}
                    <button
                      onClick={() => {
                        setEditIndex(index);
                      }}
                      style={{ marginBottom: "10px" }}
                    >
                      수정
                    </button>
                    <button
                      onClick={() => {
                        let copy = [...co];
                        copy.splice(index, 1);
                        setCo(copy);
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              placeholder="댓글 달기..."
              type="text"
              onChange={(e) => {
                set입력값변경(e.target.value);
                //console.log(입력값);
              }}
            />
            {/* input에서 입력한 값 가져오는 법 */}
            {/* e.target 은 이벤트 발생한 html 태그 */}
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              let copy = [...co];
              copy.push(입력값);
              setCo(copy);
              //console.log(copy);
            }}
          >
            게시
          </Button>
        </Form>
      </WRAPPER>
    </>
  );
};

export default Comment;
