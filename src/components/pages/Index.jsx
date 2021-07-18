import React from "react";
import { useSelector } from "react-redux";
import Article from "../Article";
import Articles from "../Articles";
import GamesTab from "../GamesTab";
import HomeCarousel from "../HomeCarousel";
import ScrollLayout from "../layouts/ScrollLayout";
import UpdatedCategory from "../UpdatedCategory";

const Index = () => {
  const { latestPosts } = useSelector((state) => state);
  return (
    <>
      <div style={{ marginTop: "40px" }}>
        <HomeCarousel />
      </div>
      <ScrollLayout>
        <Articles />
      </ScrollLayout>
      <GamesTab />
      {latestPosts.map((posts) => (
        <UpdatedCategory posts={posts} />
      ))}
    </>
  );
};

export default Index;
