import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import useBreakpoints from "../../utils/useBreakPoints";
import FeaturedPosts from "../FeaturedPosts";
import Widget from "../Widget";

const Wraper = styled.aside`
  margin-top: ${({ path, isLg }) => (path !== "/" && isLg ? "-108px" : 0)};
  z-index: 0;
  position: relative;
  p {
    margin: 0;
  }
`;

const RightAside = styled.aside``;

const LeftAside = styled.aside`
  position: relative;
  .sidebar-container {
    background-color: ${({ theme }) => theme.primary};
    padding: 0.2rem 0.2rem;
    position: sticky;
    top: 110px;
  }
  .ad-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.secondary};
    margin-bottom: 1rem;
  }
  & a:hover {
    color: inherit;
  }
`;

const ScrollLayout = ({ children, match }) => {
  const { isLg } = useBreakpoints();
  return (
    <Wraper {...match} isLg={isLg} className="container">
      <div className="row">
        <RightAside className="right-side col-12 col-lg-8 py-3">
          <main id="right-side">{children}</main>
        </RightAside>
        <LeftAside className="left-site col-12 col-lg-4 py-3 rounded">
          <div className="sidebar-container rounded">
            <div className="ad">
              <div className="ad-item">ADS</div>
              <div className="ad-item">ADS</div>
              <div className="ad-item">ADS</div>
              <div className="ad-item">ADS</div>
              <div className="ad-item">ADS</div>
            </div>
            <div className="featured-posts">
              <FeaturedPosts />
            </div>
            <div className="widgets">
              <Widget />
            </div>
          </div>
        </LeftAside>
      </div>
    </Wraper>
  );
};

export default withRouter(ScrollLayout);
