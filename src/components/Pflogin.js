import React, { useState } from 'react'
import Box from "@mui/material/Box";
import headback from "./headback.jpg";
import MyImage from "../MyImage.JPG";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./SignUpPage.css";
// import SignUpPage from './SignUpPage'
import { useNavigate } from "react-router-dom";


export default function PfIntro() {
    const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const SignUpPage = (e) => {
    // console.log("SignUp clicked");
    e.preventDefault();
    navigate("/signup");
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div
        style={{
          marginTop: "-19px",
          backgroundImage: `url(${headback}`,
          opacity: "80%",
          boxSizing: "border-box",
          width: "100%",
          height: "80vh",
          backgroundRepeat: "no-rpeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            padding: "12rem",
            backgroundColor: "black",
            opacity: "50%",
          }}
        >
          Senior Web Developer
        </h1>
      </div>
      <div>
        <Box
          sx={{
            backgroundColor: "black",
            height: "100%",
            opacity: "75%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            "& > :not(style)": {
              m: 1,
            },
          }}
        >
          <Card
            sx={{ maxWidth: 345, opacity: "80%", backgroundColor: "black" }}
          >
            <CardMedia sx={{ height: 250 }} image={MyImage} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: "white",
                  alignItems: "center",
                }}
              >
                Senior Web Developer
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                Experienced in building scalable, user-friendly web applications
                with modern technologies. Passionate about clean code,
                responsive design, and delivering seamless user experiences.
              </Typography>
            </CardContent>
          </Card>
          <div
            style={{
              padding: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              backgroundColor: "#424242",
              height: "50vh",
              width: "50vw",
            //   opacity: "40%",
            }}
          >
            SignIn
            <TextField id="standard-basic" label="Email" variant="standard" sx={{fontWeight: 'bold'}}/>
            <div>
              <TextField
                          label="Password"
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          variant="standard"
                          fullWidth
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleTogglePasswordVisibility}
                                  edge="end"
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
            </div>
            <div>
              <Button
                variant="contained"
                sx={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Proceed
              </Button>
              <div>
                <p>
                  Do not have an account?{" "}
                  <span
                    href="/"
                    style={{ color: "#909dff", cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={SignUpPage}
                  >
                    SignUp
                  </span>{" "}
                  here!!
                </p>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
