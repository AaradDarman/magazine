import React from "react";
import styled from "styled-components";
import { hexToRGBA } from "../utils/colorHelper";
import useBreakpoints from "../utils/useBreakPoints";

const Article = styled.article`
  background-color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  padding: 1rem;
  h4,
  h5 {
    margin-bottom: 0;
  }
  .article-title {
    display: flex;
    background-color: ${({ theme }) => theme.accent};
    padding: 0.6rem 1rem;
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    color: #fefefe;
  }
  .article-title h4 {
    font-size: ${({ isSm }) => (isSm ? "1.2rem" : "0.95rem")};
  }
  .article-title a {
    display: flex;
    align-items: center;
    font-size: ${({ isSm }) => (isSm ? "1.2rem" : "0.95rem")};
    margin-right: auto;
  }
  .article-title a:hover {
    color: inherit;
  }
  .article-title a::after {
    content: "";
    background-color: #fefefe;
    mask: url("images/down-arrow.svg");
    display: block;
    width: 11px;
    height: 11px;
    margin-right: 5px;
    transform: rotate(90deg);
  }
  .item-large .cover {
    position: relative;
    overflow: hidden;
    background: url("images/banner-2.jpg") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 364px;
    min-height: 350px;
    border-radius: 0.2rem;
    color: #fefefe;
  }
  .item-large .cover::before {
    z-index: 6;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 200px;
    width: 100%;
    transition: 0.3s;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      #000000 70%
    );
    opacity: 0.85;
    pointer-events: none;
  }
  .item-large .cover::after,
  .item > a::after {
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
  .item-large .info {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 7;
  }
  .item-large .info h5 {
    font-size: ${({ isSm }) => (isSm ? "1.3rem" : "0.95rem")};
    line-height: 35px;
    background-color: ${({ theme }) => hexToRGBA(theme.accent, 0.8)};
    padding: 8px 16px 8px 8px;
    transition: all 300ms ease-in-out;
  }
  .item-large .info span {
    display: block;
    font-size: 0.9rem;
    padding: 8px 16px 8px 8px;
    text-shadow: 1px 1px #e31e2e;
    margin-bottom: 1rem;
  }
  .item-large:hover .info {
    color: inherit;
  }
  .item-large:hover .cover::after,
  .item > a:hover::after {
    left: -50%;
    bottom: -50%;
  }
  .item-large:hover .info h5 {
    background-color: ${({ theme }) => hexToRGBA(theme.accent, 1)};
  }
  .item {
    display: flex;
    flex-grow: 1;
  }
  .item:not(:last-child) {
    margin-bottom: 2rem;
  }
  .item > a {
    display: block;
    position: relative;
    overflow: hidden;
    background: url("images/banner.jpg") no-repeat center center;
    background-size: cover;
    width: 27%;
    height: 100%;
    min-height: 90px;
    margin-left: 1rem;
    border-radius: 0.2rem;
  }
  .item .info h5 {
    font-size: ${({ isSm }) => (isSm ? "1rem" : "0.9rem")};
    line-height: 30px;
    transition: all 300ms ease-in-out;
    margin-bottom: 0.5rem;
  }
  .item .info h5 a:hover {
    color: ${({ theme }) => theme.accent};
    transition: all 300ms ease-in-out;
  }
  .item .info span {
    display: block;
    color: #444444;
    font-size: ${({ isSm }) => (isSm ? "1rem" : "0.8rem")};
    margin-bottom: 0.5rem;
  }
  .more {
    color: ${({ theme }) => theme.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ isSm }) => (isSm ? "1.3rem" : "0.95rem")};
    letter-spacing: 1px;
    margin: 1rem 0 0;
  }
  .more a:hover {
    color: inherit;
  }
  .more i {
    color: ${({ theme }) => theme.text};
    margin-left: 1rem;
  }
`;
const UpdatedCategory = () => {
  const breakPoints = useBreakpoints();
  return (
    <Article {...breakPoints}>
      <div className="article-title">
        <h4>آخرین مطالب سرگرمی</h4>
        <a className="d-none d-lg-flex" href="#">
          تمام مطالب
        </a>
      </div>
      <div className="row">
        <div className="col-12 col-lg-8">
          <article className="item-large mb-4 mb-lg-0">
            <div className="cover">
              <a href="#"></a>
              <div className="info">
                <h5 className="title">
                  معرفی تسک‌مستر – تقلید کننده تمام سبک‌های مبارزه
                </h5>
                <span className="subtitle d-none d-lg-flex">تماشا کنید</span>
              </div>
            </div>
          </article>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column">
          <article className="item">
            <a href="#"></a>
            <div className="info">
              <h5 className="title">
                <a href="#">معرفی آیرون میدن – رقیب حسود بلک ویدو</a>
              </h5>
              <span className="subtitle d-none d-lg-flex">
                ویژگی‌هایی که فراموش نشدند
              </span>
            </div>
          </article>
          <article className="item">
            <a href="#"></a>
            <div className="info">
              <h5 className="title">
                <a href="#">معرفی آیرون میدن – رقیب حسود بلک ویدو</a>
              </h5>
              <span className="subtitle d-none d-lg-flex">
                ویژگی‌هایی که فراموش نشدند
              </span>
            </div>
          </article>
          <article className="item">
            <a href="#"></a>
            <div className="info">
              <h5 className="title">
                <a href="#">معرفی آیرون میدن – رقیب حسود بلک ویدو</a>
              </h5>
              <span className="subtitle d-none d-lg-flex">
                ویژگی‌هایی که فراموش نشدند
              </span>
            </div>
          </article>
        </div>
      </div>
      <div className="d-flex d-lg-none more">
        <a href="#">
          <i className="fas fa-chevron-left"></i>نوشته های سرگرمی
        </a>
      </div>
    </Article>
  );
};

export default UpdatedCategory;
