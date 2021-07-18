import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  .section-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .item a:first-child {
    display: block;
    position: relative;
    overflow: hidden;
    background: url("/images/watchdogs.jpg") no-repeat center center;
    background-size: cover;
    height: 150px;
    border-radius: 0.2rem;
    margin-bottom: 1rem;
  }
  .item > a:first-child::after {
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
  .title h6 {
    font-size: 1rem;
    line-height: 1.7;
    transition: all 0.3s ease-in-out;
  }
  .item:hover a:first-child::after {
    left: -50%;
    bottom: -50%;
  }
  .item:hover .title h6 {
    color: ${({ theme }) => theme.accent};
  }
`;

const RelatedPosts = () => {
  return (
    <Wraper className="related-posts">
      <h5 className="section-title">مطالب مرتبط</h5>
      <div className="row">
        <div className="col-12 col-lg-6 item">
          <a href="#"></a>
          <a className="title" href="#">
            <h6>
              به تماشاگران رویداد یوبی‌سافت فوروارد یک نسخه رایگان از بازی Watch
              Dogs 2 داده خواهد شد
            </h6>
          </a>
        </div>
        <div className="col-12 col-lg-6 item">
          <a href="#"></a>
          <a className="title" href="#">
            <h6>
              به تماشاگران رویداد یوبی‌سافت فوروارد یک نسخه رایگان از بازی Watch
              Dogs 2 داده خواهد شد
            </h6>
          </a>
        </div>
      </div>
    </Wraper>
  );
};

export default RelatedPosts;
