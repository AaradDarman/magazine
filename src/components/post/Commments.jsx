import { Button, Menu, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import React, { useState } from "react";
import styled from "styled-components";
import PostRating from "./PostRating";
import Tooltip from "../shared/Tooltip";
import Comment from "./Comment";

const Wraper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.25rem;
  padding: 1rem;
  & > h5 {
    font-size: 1.5rem;
  }
  .comments-head {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #cccccc;
  }
  .comments-head > span:first-child {
    border-bottom: 2px solid #00b38f;
    margin-bottom: -2px;
    padding: 5px 10px;
  }
  .most-reaction {
    margin-right: auto;
    color: #ffd700;
    border-bottom: 2px solid #ffd700;
    margin-bottom: -2px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .most-favorite {
    color: #fc5844;
    border-bottom: 2px solid #fc5844;
    margin-bottom: -2px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .bp3-popover2-target {
    border-bottom: 2px solid #999999;
    margin-bottom: -4px;
  }
  .bp3-popover2-target button {
    display: flex;
    align-items: center;
    background: transparent;
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 5px 10px;
    font-size: 0.9rem;
    min-width: 80px;
    box-sizing: content-box;
  }
  .bp3-popover2-target button i,
  .tooltiptext {
    font-size: 0.8rem;
  }
`;

const Commments = ({ post }) => {
  const [dropdownSelectedItem, setDropdownSelectedItem] = useState("جدیدترین");
  return (
    <Wraper>
      <h5>نظرات{post.comments && post.comments.length}</h5>
      <div className="row justify-content-center">
        <PostRating />
      </div>
      <h6 className="text-center my-3">برای ثبت دیدگاه لطفا وارد شوید</h6>
      <div className="comments-head">
        <span>
          {post.comments && post.comments != ""
            ? `${post.comments.length}دیدگاه`
            : `بدون دیدگاه`}
        </span>
        <Tooltip className="ml-auto" Text="بیشترین واکنش">
          <span className="most-reaction">
            <i className="fas fa-bolt"></i>
          </span>
        </Tooltip>
        <Tooltip Text="پر طرفدارترین">
          <span className="most-favorite">
            <i className="fas fa-fire"></i>
          </span>
        </Tooltip>
        <Popover2
          content={
            <Menu>
              <MenuItem
                onClick={() => setDropdownSelectedItem("جدیدترین")}
                text="جدیدترین"
              />
              <MenuItem
                onClick={() => setDropdownSelectedItem("قدیمی ترین")}
                text="قدیمی ترین"
              />
            </Menu>
          }
          placement="top"
        >
          <button>
            {dropdownSelectedItem}
            <i className="ml-1 fas fa-chevron-down"></i>
          </button>
        </Popover2>
      </div>
      {post.comments &&
        post.comments.map((comment) => <Comment item={comment} />)}
    </Wraper>
  );
};

export default Commments;
