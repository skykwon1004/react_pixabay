import React from "react";
import styled from "styled-components";

const Page = styled.div`
 width: 1280px;
 margin: 0 auto 100px auto;
`
const PageUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
`

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  border-radius: 5px;
  width: 50px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    // totalPots 200 / postsPerPage 8 = 25
    // Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
        //console.log(pageNumbers)
    }
    return (
        <Page>
            <nav>
                <PageUl className="pagination">
                    {pageNumbers.map((number,idx) => (
                        <PageLi key={number} className="page-item">
                            <PageSpan onClick={() => paginate(number)} className="page-link">
                                {number}
                            </PageSpan>
                        </PageLi>
                    ))}
                </PageUl>
            </nav>
        </Page>
    );
};

export default Pagination;