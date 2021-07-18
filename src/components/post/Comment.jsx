import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  padding-top: 30px;
  margin-bottom: 20px;
  .comment-header {
    display: flex;
  }
  .avatar {
    padding-left: 1rem;
  }
  .avatar img {
    width: 48px;
    height: 48px;
    border-bottom: 2px solid #00b38f;
  }
  .uinfo-top,
  .uinfo-bottom {
    display: flex;
    align-items: center;
  }
  .uinfo-top {
    font-size: 0.95rem;
  }
  .uinfo-top .comment-share {
    font-size: 0.8rem;
  }
  .uinfo-bottom {
    font-size: 0.75rem;
  }
  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .comment-text {
    font-size: 0.94rem;
  }
  .comment-footer {
    display: flex;
    align-items: center;
  }
  .dislike-result {
    direction: ltr;
    color: ${({ theme }) => theme.accent};
  }
  .like-result {
    color: green;
  }
  .dislike-result,
  .like-result {
    padding: 0 0.5rem;
  }
  .seperator {
    height: 11px;
    align-self: center;
    width: 1px;
    background-color: #ccc;
  }
  .dislike,
  .like {
    cursor: pointer;
  }
  @media (min-width: 993px) {
    .children {
      margin-right: 30px;
    }
  }
`;

const Comment = ({ children, item }) => {
  return (
    <Wraper className="comment">
      <div className="comment-header">
        <div className="avatar">
          <img src={`/images/${item.avatar}`} alt="avatar" />
        </div>
        <div className="user-info">
          <div className="uinfo-top">
            <div className="comment-author">{item.author}</div>
            <div className="comment-share">
              <i className="ml-3 fas fa-share-alt"></i>
            </div>
          </div>
          <div className="uinfo-bottom">
            <i className="mr-2 far fa-clock" aria-hidden="true"></i>
            20 ساعت پیش
          </div>
        </div>
        <div className="comment-link"></div>
      </div>
      <div className="comment-text my-2">{item.text}</div>
      <div className="comment-footer">
        <div className="like">
          <i className=" far fa-thumbs-up"></i>
        </div>
        <div className="like-result">{item.like}</div>
        <div className="seperator"></div>
        <div className="dislike-result">{`-${item.dislike}`}</div>
        <div className="dislike">
          <i className=" far fa-thumbs-down"></i>
        </div>
      </div>
      <div className="children">{children}</div>
    </Wraper>
  );
};

export default Comment;
