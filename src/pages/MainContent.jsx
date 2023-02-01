import { Button, Container, Typography, Box } from "@mui/material";
import { spacing, styled } from "@mui/system";
import React, { Fragment, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

const MainContent = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // データベースからデータを取得する。
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  } else {
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
          <Box>
            <Button onClick={handleLogout}>ログアウト</Button>
          </Box>
        </MainContainer>
      </Fragment>
    );
  }
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
