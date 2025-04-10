import * as React from "react";
import Box from "@mui/material/Box";
import headback from "./headback.jpg";
import MyImage from "../MyImage.JPG";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function PfIntro() {
  const navigate = useNavigate();
  const handleRegister = () => {
    
    navigate("/registeration");


  }

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
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", color: "white" }}
              >
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
              opacity: "75%",
            }}
          >
            SignIn
            <TextField id="standard-basic" label="Email" variant="standard" />
            <div>
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
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
                  < span style={{ color: "#909dff" }} onClick={handleRegister} >
                    SignUp
                  </ span>{" "}
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
