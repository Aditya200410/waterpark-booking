import { Stack, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("https://iic-backend-r3jg.onrender.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "/userDetails";
          setTimeout(() => {
            navigate('./userDetails');
          }, 500);
        }
      });
  }

  return (

    <div className="topmar">
   <Stack sx={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', background: "white", height: "fit-content" }}>
  <Stack sx={{ display: "flex", flexDirection: "row", width: { xs: "100%", sm: "90%", md: '80%' }, height: { xs: 'fit-content', md: '90dvh' }, borderRadius: '8px', border: { xs: "2px solid white", sm: "none" } }}>
    <Stack sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', flex: '1', background: `url(https://newdemo.rreda.in/wp-content/uploads/2023/04/cropped-Untitled-design-1.png)`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}>
    </Stack>
    <Stack sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flex: "1", height: 'inherit', borderTopRightRadius: '8px', borderBottomRightRadius: "8px", position: 'relative' }}>
      <Stack sx={{ background: `url(./iic_logo.png)`, height: '100%', display: 'flex', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', zIndex: '0', width: '100%', position: "absolute", opacity: '0.1', height: "fit-content" }}>
      </Stack>
      <form onSubmit={handleSubmit} style={{ width: '100%', padding: '1.5rem', height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px', zIndex: '0' }}>
        <AccountCircleIcon sx={{ fontSize: "6.25rem", color: 'black' }} />
        <Typography variant="h3" sx={{ color: 'black', fontWeight: 'bolder', fontFamily: 'Poppins, sans-serif', borderBottom: '4px solid black', paddingBottom: '0.25rem', borderRadius: '2px' }}>Sign In</Typography>
        <Stack sx={{ width: '100%' }}>
          <TextField
            required label="Email Address" name='email' type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} InputLabelProps={{ sx: { color: "black", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
              '& .MuiInputBase-input': {
                color: 'black',
                fontSize: { xs: "1.5rem", md: "16px" }
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: 'black',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: '#00CED1',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
              },
            }} variant="standard" />
        </Stack>

        <Stack sx={{ width: '100%' }}>
          <TextField
            required fullWidth id="outlined-required" label="Password" name='password' type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} InputLabelProps={{ sx: { color: "black", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
              '& .MuiInputBase-input': {
                color: 'black',
                fontSize: { xs: "1.5rem", md: "16px" }
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: 'black',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: '#00CED1',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
              },
            }} variant="standard" />
        </Stack>

        <Stack sx={{ width: '100%' }}>
          <Button variant="contained" sx={{
            background: "#00CED1", color: 'black', padding: '8px 0px', borderRadius: '.75rem', '&:hover': {
              transform: "scale(1.001)",
              background: 'white',
              color: "#00ced1",
              fontWeight: "500",
              border: ".125rem solid #00ced1"
            }
          }} type="submit" >
            Sign in
          </Button>
        </Stack>
        
      </form>
    </Stack>
  </Stack>
</Stack>

    </div>
  );
}