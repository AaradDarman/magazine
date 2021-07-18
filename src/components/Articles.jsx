import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { paginate } from "../utils/paginate";
import useBreakpoints from "../utils/useBreakPoints";
import Article from "./Article";
import { useSelector } from "react-redux";

const Wraper = styled.article`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.25rem;
  .pagination {
    direction: rtl;
    background-color: ${({ theme }) => theme.primary};
    padding: 0.5rem 0;
    justify-content: center;
  }
  .pagination li {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.secondary};
    width: 35px;
    height: 35px;
    border-radius: 100%;
    padding: 0;
    margin-right: 5px;
    box-shadow: 1px 2px 3px rgb(25 25 27 / 61%);
    transition: all 200ms ease-in-out;
  }
  li.disabled {
    display: none;
  }
  .pagination .active {
    background-color: ${({ theme }) => theme.accent};
    color: #fefefe;
  }
  .pagination a {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Articles = () => {
  const [perPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const { posts } = useSelector((state) => state);

  const totalItems = 140;

  const handlePageChange = (data) => {
    let selected = data.selected;
    setCurrentPage(selected + 1);
    // onPageChange(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   useEffect(() => {
  //     console.log("on match");
  //     setCurrentPage(1);
  //   }, [match.params.category]);

  const { isLg } = useBreakpoints();

  const articles = paginate(posts, currentPage, perPage);
  return (
    <Wraper>
      {articles.map((post) => (
        <Article post={post} />
      ))}
      <ReactPaginate
        previousLabel={<i class="fas fa-angle-double-right"></i>}
        nextLabel={<i class="fas fa-angle-double-left"></i>}
        breakLabel={"..."}
        forcePage={currentPage - 1}
        breakClassName={"break-me"}
        pageCount={Math.ceil(posts.length / perPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={isLg ? 7 : 2}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Wraper>
  );
};

export default Articles;
