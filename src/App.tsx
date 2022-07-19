import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Main from "./Main";
export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/projects");
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Main />
    </>
  );
}
