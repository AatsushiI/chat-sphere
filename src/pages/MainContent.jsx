import { Container, Typography } from "@mui/material";
import { spacing, styled } from "@mui/system";
import React, { Fragment, useState, useEffect } from "react";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const MainContent = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // データベースからデータを取得する。
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  console.log(posts);
  return (
    <Fragment>
      <MainContainer maxWidth="sm">
        <Title>MainContent</Title>
        {posts.map((post) => (
          <div key={post.title}>
            <Typography>{post.text}</Typography>
            <Typography>{post.title}</Typography>
          </div>
        ))}
        <Title>MainContent</Title>
      </MainContainer>
    </Fragment>
  );
};

const MainContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled(Typography)({
  marginTop: 32,
});
export default MainContent;
