import React, { useState } from "react";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SignUpPage from "../SignUpPage";
import "../SignUpPage.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import PhoneLogin from "../PhoneLogIn/PhoneLogin";
import "../SignUpPage.css";
// import { useMediaQuery } from 'react-responsive'
// import MediaQuery from 'react-responsive'
import useMediaQuery from "@mui/material/useMediaQuery";

// import BackImage from "../BackImage.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      sx={{
        width: {
          xs: "100%", // Extra small: mobile
          sm: "75%", // Small devices
          md: "50%", // Medium and up
        },
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FrontPage() {
  const matches = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box className="register">
        <Box>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="SignUp with Phone" {...a11yProps(0)} />
              <Tab label="SignIn with Email" {...a11yProps(1)} />
              <Tab label="SignUp with Google" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <PhoneLogin />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Box sx={{ display: "block", width: "50vw", margin: "auto" }}>
              <Box
                sx={{
                  padding: "5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  backgroundColor: "#424242",
                  // height: "50vh",
                  // width: "50vw",
                  opacity: "80%",
                }}
              >
                SignIn
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  sx={{ fontWeight: "bold" }}
                />
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
                        style={{
                          color: "#909dff",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={SignUpPage}
                      >
                        SignUp
                      </span>{" "}
                      here!!
                    </p>
                  </div>
                </div>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <GoogleSignIn />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
