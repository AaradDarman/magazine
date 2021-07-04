import React from "react";
import styled from "styled-components";

const Wraper = styled.aside`
  margin-top: -108px;
  z-index: 5;
  position: relative;
  p {
    margin: 0;
  }
`;

const RightAside = styled.aside`
  #right-side {
    background-color: ${({ theme }) => theme.primary};
  }
`;

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
  a:hover {
    color: inherit;
  }
`;

const ScrollLayout = ({ children }) => {
  return (
    <Wraper className="container">
      <div className="row">
        <RightAside className="right-side col-12 col-lg-8 py-3">
          <main id="right-side" className="rounded">
            {children}
          </main>
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
          </div>
        </LeftAside>
      </div>
    </Wraper>
  );
};

export default ScrollLayout;
