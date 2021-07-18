import React, { useEffect } from "react";
import styled from "styled-components";
import useBreakpoints from "../../utils/useBreakPoints";
import ScrollLayout from "../layouts/ScrollLayout";
import Article from "../post/Article";
import RecomendedPosts from "../post/RecomendedPosts";
import RelatedPosts from "../post/RelatedPosts";
import Icon from "../shared/Icon";
import Tooltip from "../shared/Tooltip";
import { setPost } from "../../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";

const PostBanner = ({ post }) => {
  const { isLg } = useBreakpoints();
  const Wraper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 40px;
    max-height: 800px;
    height: calc(100vh - 32px);
    .background::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 600px;
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
    .background {
      background-color: #000;
      background: url(/images/${post.banner}) no-repeat center center;
      background-size: cover;
      opacity: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      width: 100%;
      right: 0;
      left: 0;
      text-align: center;
      color: #fefefe;
    }
    .title {
      font-size: ${isLg ? "2.5rem" : "1.6rem"};
      margin: 100px auto 30px;
    }
    .subtitle {
      font-size: ${isLg ? "1rem" : "0.92rem"};
    }
    .meta-info {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      font-size: ${isLg ? "0.9rem" : "0.85rem"};
    }
    .meta-info > *:not(:last-child) {
      margin-left: 1rem;
    }
    .meta-info [class^="icon"] {
      margin-left: 0.5rem;
    }
    .meta-info > span {
      display: flex;
      align-items: center;
      line-height: 2;
    }
    .fa-star {
      color: gold;
    }
    .fa-bookmark {
      color: ${({ theme }) => theme.accent};
    }
    .tooltiptext {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.text};
    }
    .tooltiptext::after {
      border-top-color: ${({ theme }) => theme.secondary};
    }
  `;
  return (
    <Wraper>
      <div className="background"></div>
      <div className="container content">
        <h1 className="title">{post.title}</h1>
        <p className="subtitle">{post.subtitle}</p>
        <div className="meta-info">
          <span>
            <Icon className="icon" icon="user" size={14} />
            {post.author}
          </span>
          <span>
            <Icon className="icon" icon="calendar" size={14} />
            ۱۴ ساعت پیش
          </span>
          <Tooltip Text="امتیاز مطلب">
            <span>
              <i className="icon far fa-star"></i>
              {post.rate}
            </span>
          </Tooltip>
          <Tooltip Text="ذخیره مطلب">
            <span>
              <i className="icon far fa-bookmark"></i>
              ذخیره
            </span>
          </Tooltip>
        </div>
      </div>
    </Wraper>
  );
};

const Post = ({ match }) => {
  const { post, posts } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isLg } = useBreakpoints();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(setPost(match.params.id));
  }, []);

  const Space = styled.div`
    margin-top: ${isLg ? "16rem" : "8rem"};
  `;
  return (
    <>
      {post.banner != "" ? (
        <PostBanner post={post} />
      ) : (
        // <div style={{ marginTop: "16rem" }}></div>
        <Space />
      )}
      <ScrollLayout>
        <Article post={post} />
        <RecomendedPosts />
        <RelatedPosts />
      </ScrollLayout>
    </>
  );
};

export default Post;
