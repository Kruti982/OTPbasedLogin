import React, { useState } from 'react'
import Box from "@mui/material/Box";
import { TextField, IconButton, InputAdornment, Button, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";


export default function SignUpPage() {
  const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,}$/;
  const isPasswordValid = passwordValid.test(password);
  const doPasswordsMatch = password === confirmPassword;
  const allFieldsFilled = Object.values(form).every((val) => val.trim() !== '');
  const isFormValid = allFieldsFilled && isPasswordValid && doPasswordsMatch;
    

    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const passwordsMatch = password === confirmPassword;
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    const handleChange2 = (e) => {
        const input = e.target.value;
    
        // Remove non-digit characters
        const digitsOnly = input.replace(/\D/g, '').slice(0, 10);
    
        // Check if there are at least 10 digits
        setError(digitsOnly.length > 0 && digitsOnly.length < 10);
    
        setPhone(digitsOnly);
      };
      const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
      };
      const LoginPage = () =>{
        navigate("/");
      }
  return (
    <div className="register" style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" }, backgroundColor: '#8b7474', border: '2px solid black', boxShadow: '5px 5px 2px', borderRadius: '2%'}}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        id="input-with-icon-textfield"
        label="Name"
        name='name'
        value={form.name}
        onChange={handleChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />
      <TextField
        id="input-with-icon-textfield"
        label="lastName"
        name='lastName'
        value={form.lastName}
        onChange={handleChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />
        <TextField
      label="Phone"
      name='phone'
      multiline
      fullWidth
      variant="standard"
      value={phone}
      onChange={handleChange2}
      error={error}
      helperText={error ? "Phone number must be at least 10 digits." : ""}
    />

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            label="Password"
            name='password'
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
            variant="standard"
            fullWidth
            error={password.length > 0 && !isPasswordValid}
        helperText={
          password.length > 0 && !isPasswordValid
            ? 'Password must include uppercase, lowercase, number, and special character.'
            : ''
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

          <TextField
            label="Confirm Password"
            name='confirmPassword'
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
        fullWidth
        variant="standard"
        error={confirmPassword.length > 0 && !doPasswordsMatch}
        helperText={
          confirmPassword.length > 0 && !doPasswordsMatch
            ? 'Passwords do not match.'
            : ''
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton> */}
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div>

        
        <Button variant="contained" sx={{width: '20ch', margin: '1rem auto', display: 'block' }} onClick={LoginPage}>Submit</Button>
      
        </div>
      </div>
    </Box>
    </div>
  );
}
