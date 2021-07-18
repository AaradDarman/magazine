import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { hexToRGBA } from "../utils/colorHelper";

const Wraper = styled.section`
  color: #fefefe;
  .featured-posts-title {
    background-color: ${({ theme }) => theme.accent};
    padding: 0.5rem 0.7rem;
    margin-bottom: 1rem;
    border-radius: 0.2rem;
  }
  .info {
    z-index: 7;
    position: absolute;
    bottom: 0;
  }
  .info h3 {
    font-size: 1.1rem;
    background-color: ${({ theme }) => hexToRGBA(theme.accent, 0.8)};
    transition: all 300ms ease-in-out;
  }
  .info p {
    font-size: 0.9rem;
  }
  .info h3,
  p {
    padding: 8px 16px 8px 8px;
  }
  a:hover .info h3 {
    background-color: ${({ theme }) => hexToRGBA(theme.accent, 1)};
  }
`;

const FeaturedPosts = () => {
  const { featuredPosts } = useSelector((state) => state);

  const Item = styled.div`
    margin-bottom: 1rem;
    position: relative;
    &::before {
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
    & a {
      display: block;
      width: 100%;
      height: 300px;
      background: url(/images/${({ imageUrl }) => imageUrl}) no-repeat center
        center;
      background-size: cover;
      position: relative;
      min-height: 50px;
      border-radius: 0.2rem;
    }
  `;
  return (
    <Wraper>
      <div className="featured-posts-title">انتخاب سردبیر</div>
      {featuredPosts.map((post) => (
        <Item imageUrl={post.postThumbnail} className="featured-posts-item">
          <a href="#">
            <div class="info w-100">
              <h3 class="title mb-0">{post.title}</h3>
              <p class="sub-title">{post.subtitle}</p>
            </div>
          </a>
        </Item>
      ))}
    </Wraper>
  );
};

export default FeaturedPosts;
