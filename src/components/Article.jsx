import React from "react";
import styled from "styled-components";
import Tooltip from "./shared/Tooltip";
import Icon from "./shared/Icon";
import useBreakpoints from "../utils/useBreakPoints";

const Wraper = styled.article`
  display: flex;
  padding: ${({ isSm }) => (isSm ? "1.5rem" : "0.5rem")};
  position: relative;
  height: 133px;
  box-sizing: content-box;
  & > a {
    display: block;
    position: relative;
    overflow: hidden;
    background: url("images/img3.jpg") no-repeat center center;
    background-size: cover;
    width: ${({ isSm }) => (isSm ? "27%" : "35%")};
    height: ${({ isSm }) => (isSm ? "100%" : "80%")};
    margin-left: ${({ isSm }) => (isSm ? "1.4rem" : "0.5rem")};
    border-radius: 0.3rem;
  }
  & > a::after {
    content: "";
    display: block;
    width: 200%;
    opacity: 0.3;
    background: #6587a0;
    padding-bottom: 200%;
    transform: rotate(-45deg);
    position: absolute;
    left: -200%;
    bottom: 70%;
    transition: all 0.2s linear;
  }
  & > a:hover::after {
    left: -50%;
    bottom: -50%;
  }
  .post-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${({ isSm }) => (isSm ? "" : "65%")};
  }
  .post-info h4 {
    position: ${({ isSm }) => (isSm ? "relative" : "")};
    margin-bottom: ${({ isSm }) => (isSm ? "" : 0)};
  }
  .post-info h4 span {
    font-size: 15px;
    cursor: pointer;
  }
  .post-info p {
    margin-bottom: 1rem;
  }
  .post-info a {
    font-size: ${({ isSm }) => (isSm ? "1.1rem" : "0.9rem")};
    transition: all 300ms ease-in-out;
  }
  .post-info a:hover {
    color: ${({ theme }) => theme.accent};
  }
  .subtitle {
    font-size: 0.9rem;
  }
  .meta-info {
    font-size: 0.8rem;
  }
  .meta-info > *:not(:last-child) {
    margin-left: 1rem;
  }
  .meta-info [class^="icon"] {
    margin-left: 0.5rem;
  }
  .tooltiptext {
    display: ${({ isSm }) => (isSm ? "flex" : "none")};
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
  }
  .tooltiptext::after {
    border-top-color: ${({ theme }) => theme.secondary};
  }
  .post-info h4 > div {
    position: absolute;
    left: ${({ isSm }) => (isSm ? "-10px" : "10px")};
    bottom: ${({ isSm }) => (isSm ? "" : "5px")};
    top: ${({ isSm }) => (isSm ? "10px" : "")};
    color: ${({ theme }) => theme.accent};
  }
`;

const Article = () => {
  const breakPoints = useBreakpoints();
  return (
    <Wraper {...breakPoints}>
      <a href="#"></a>
      <div className="post-info">
        <h4>
          <Tooltip Text="ذخیره مطلب">
            <span>
              <i className="far fa-bookmark"></i>
            </span>
          </Tooltip>
          <a href="">
            سی‌دی پراجکت رد بسته الحاقی رایگان Cyberpunk 2077 را کاملا فراموش
            کرده است
          </a>
        </h4>
        <p className="subtitle d-none d-lg-block">
          بد قولی دوباره سی دی پراجکت رد
        </p>
        <div className="meta-info d-flex d-lg-block flex-column">
          <span>
            <Icon className="icon" icon="user" size={14} />
            اشکان دولتی
          </span>
          <span>
            <Icon className="icon" icon="calendar" size={14} />۱ ساعت پیش
          </span>
          <span className="d-none d-lg-inline">
            <Icon className="icon" icon="comment" size={14} />3
          </span>
        </div>
      </div>
    </Wraper>
  );
};

export default Article;
