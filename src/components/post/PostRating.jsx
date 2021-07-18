import React from "react";
import Rating from "react-rating";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 30%;
  .dotted {
    border-bottom: 1px dotted #999999;
    flex-grow: 1;
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .rating-value {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    border: 1px dashed #777777;
    height: 60px;
    width: 60px;
    text-align: center;
    border-radius: 50%;
    font-size: 24px;
  }
  .rating-value .count,
  .rating-value .count + span {
    display: none;
  }
  .rating-value .count + span {
    font-size: 10px;
    font-weight: bold;
  }
  .rating-value .count {
    line-height: 1;
  }
  .rating-value:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.secondary};
  }
  .rating-value:hover .value {
    display: none;
  }
  .rating-value:hover .count,
  .rating-value:hover .count + span {
    display: inline;
  }
`;
const CRating = styled(Rating)`
  font-size: 0.5rem;
  color: #ffd700;
`;

const PostRating = () => {
  const { post } = useSelector((state) => state);
  return (
    <Wraper>
      <div className="dotted"></div>
      <div className="main">
        <div className="rating-value">
          <span className="value">{post.rate}</span>
          <span className="count">{post.voters}</span>
          <span>امتیاز ها</span>
        </div>
        <div className="rating-title my-1">امتیاز مطلب</div>
        <CRating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
        />
      </div>
      <div className="dotted"></div>
    </Wraper>
  );
};

export default PostRating;
