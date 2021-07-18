import React from "react";
import styled from "styled-components";
import { LightenDarkenColor } from "../../utils/colorHelper";
import useBreakpoints from "../../utils/useBreakPoints";
import Icon from "../shared/Icon";
import Tooltip from "../shared/Tooltip";

const Wraper = styled.article`
  padding: 2rem;
  background-color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  & p {
    margin-bottom: 1rem;
  }
  .title {
    font-size: ${({ isLg }) => (isLg ? "1.7rem" : "1.2rem")};
  }
  .title {
    margin-bottom: 1rem;
  }
  .meta-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.8rem;
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
  .post-thumbnail {
    margin: 1rem 0;
    border-radius: 0.3rem;
    overflow: hidden;
  }
  .comma-sep a:hover,
  .source a:hover {
    color: ${({ theme }) => theme.accent};
    transition: all 0.3s ease-out;
  }
  .comma-sep a:not(:last-child):after {
    content: "،";
    margin-left: 5px;
  }
  .comma-sep i {
    font-size: 15px;
  }
  .source + .meta-info {
    margin: 4rem 0 2rem;
  }
  .source + .meta-info [class^="icon"] {
    color: ${({ theme }) => theme.accent};
  }
  .tags a {
    display: inline-block;
    border: 1px solid #dee2e6;
    color: ${({ theme }) => theme.accent};
    padding: 0.3rem 0.9rem;
    margin-bottom: 10px;
    font-size: 0.8462rem;
    font-weight: 500;
    transition: all 0.3s ease-out;
  }
  .tags a:hover {
    color: #fefefe;
    background-color: ${({ theme }) => theme.accent};
  }
  .tags a:not(:last-child) {
    margin-left: 10px;
  }
  .article-footer {
    display: flex;
    justify-content: space-between;
  }
  .social-box ul {
    display: flex;
    justify-content: space-between;
  }
  .social-box .social-item {
    list-style: none;
    width: 36px;
    height: 36px;
    margin-left: 8px;
    transition: all 0.3s ease-out;
    border-radius: 0.2rem;
  }
  .social-box .social-item a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
  }
  .social-box .social-item a:hover {
    color: #fefefe;
  }
  .social-box .social-item.whatsapp:hover {
    background-color: #075e54;
  }
  .social-box .social-item.telegram:hover {
    background-color: #08c;
  }
  .social-box .social-item.facebook:hover {
    background-color: #3b5998;
  }
  .social-box .social-item.linkdein:hover {
    background-color: #0077b5;
  }
  .social-box .social-item.twitter:hover {
    background-color: #38a1f3;
  }
  .more-subjects {
    padding-right: 2rem;
    color: ${({ theme }) => theme.accent};
    transition: all 0.3s ease-out;
  }
  .more-subjects a:hover {
    color: ${({ theme }) => LightenDarkenColor(theme.accent, -70)};
  }
  .content h2 {
    font-size: ${({ isLg }) => (isLg ? "1.7rem" : "1.2rem")};
  }
`;

const Article = ({ post }) => {
  const { isLg } = useBreakpoints();

  return (
    <Wraper isLg={isLg}>
      {post.banner ? null : (
        <>
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
        </>
      )}
      <div className="content">
        {post.content &&
          post.content.map((c) => {
            switch (c.type) {
              case "title":
                return <h2>{c.text}</h2>;
              case "text":
                return <p>{c.text}</p>;
              case "image":
                return (
                  <div class="post-thumbnail">
                    <img
                      className="w-100 h-100"
                      src={`/images/${c.url}`}
                      alt={c.url}
                    />
                  </div>
                );
              default:
                break;
            }
          })}
      </div>
      <div className="source">
        {post.source ? "منبع:" : null}
        <a href="#" target="_blank" rel="nofollow">
          <strong>{post.source}</strong>
        </a>
      </div>
      <div className="meta-info">
        <span>
          <Icon className="icon" icon="comment" size={14} />
          {post.comments && post.comments != ""
            ? `${post.comments.length}دیدگاه`
            : `بدون دیدگاه`}
        </span>
        <span className="comma-sep">
          <i className="icon far fa-folder"></i>
          {post.category &&
            post.category.map((c) => <a href={c.link}>{c.title}</a>)}
        </span>
        <span>
          <Icon className="icon" icon="calendar" size={14} />
          ۱۴ ساعت پیش
        </span>
      </div>
      <div className="tags">
        <span class="mr-2">برچسب‌ها</span>
        {post.tags &&
          post.tags.map((tag) => <a href={`/t/${tag.link}`}>{tag.title}</a>)}
      </div>
      <div className="article-footer my-4">
        <div className="social-box">
          <ul className="mb-3 mb-lg-0">
            <li className="social-item twitter">
              <a href="#">
                <Icon icon="twitter" size={20} />
              </a>
            </li>
            <li className="social-item linkdein">
              <a href="#">
                <Icon icon="linkedin" size={20} />
              </a>
            </li>
            <li className="social-item facebook">
              <a href="#">
                <Icon icon="facebook" size={20} />
              </a>
            </li>
            <li className="social-item telegram">
              <a href="#">
                <Icon icon="telegram" size={20} />
              </a>
            </li>
            <li className="social-item whatsapp">
              <a href="#">
                <Icon icon="whatsapp" size={20} />
              </a>
            </li>
          </ul>
        </div>
        <div className="share-link"></div>
      </div>
    </Wraper>
  );
};

export default Article;
