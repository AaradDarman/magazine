import React from "react";
import styled from "styled-components";

const Wraper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  padding: 1rem;
  & .header {
    margin-bottom: 1rem;
  }
  & .ad-item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 162px;
    background-color: ${({ theme }) => theme.secondary};
    margin-bottom: 2rem;
  }
`;

const RecomendedPosts = () => {
  return (
    <Wraper>
      <div className="header ml-3">مطالب پیشنهادی</div>
      <div className="content row">
        <div className="col-6 col-lg-4">
          <div className="ad-item ">Ads</div>
        </div>
        <div className="col-6 col-lg-4">
          <div className="ad-item ">Ads</div>
        </div>
        <div className="col-6 col-lg-4">
          <div className="ad-item ">Ads</div>
        </div>
        <div className="col-6 col-lg-4">
          <div className="ad-item ">Ads</div>
        </div>
        <div className="col-6 col-lg-4">
          <div className="ad-item ">Ads</div>
        </div>
        <div className="col-6 col-lg-4">
          <div className="ad-item ">Ads</div>
        </div>
      </div>
    </Wraper>
  );
};

export default RecomendedPosts;
