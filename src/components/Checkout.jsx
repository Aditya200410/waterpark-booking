import React, { useState } from "react";
import { Stack, Button, Typography, TextField, } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [fname, setFname] = useState("");
    const [pnum, setPnum] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(fname, pnum,  email, password);
        fetch("https://iic-backend-r3jg.onrender.com/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                email,
                pnum,
               
               
                password,

            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status === "ok") {
                    alert("Registration Successful");
                    setTimeout(() => {
                      navigate('/sign-in');
                    }, 500);
                } else {
                    alert("Something went wrong");
                }
            });
    };

    return (
      <div className="topmar">
        <Stack sx={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', height: "100dvh",background:"#021E30", height:"fit-content" }}>
            <Stack sx={{ display: "flex", flexDirection: "row", width: { xs: '100%', sm: '85%', md: '80%' }, height: { xs: "fit-content", sm: "90dvh", md: '90dvh' }, boxShadow: "1px 1px 10px 8px #00000048", borderRadius: '8px', border: { xs: "2px solid white", sm: "none" } }}>
                <Stack sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', flex: '1', background: `url(https://newdemo.rreda.in/wp-content/uploads/2023/04/cropped-Untitled-design-1.png)`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover', borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" }}>
                </Stack>
                <Stack sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flex: "1", height: 'inherit', borderTopRightRadius: '8px', borderBottomRightRadius: "8px", position: 'relative' }}>
                    <Stack sx={{ background: `url(./iic_logo.png)`, height: '100%', display: 'flex', backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', zIndex: '-1', width: '100%', position: "absolute", opacity: '0.2', height:"fit-content" }}>
                    </Stack>
                    <form onSubmit={handleSubmit} style={{ width: '100%', padding: '1.5rem', height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '8px', zIndex: '2', }}>
                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bolder', fontFamily: 'Poppins, sans-serif', borderBottom: '4px solid white', paddingBottom: '0.25rem', borderRadius: '2px', }}>Sign Up</Typography>
                        <Stack sx={{ width: '100%', }}>
                            <TextField
                                required  label="Full Name" name='full name' type='text' placeholder='Enter full name' onChange={(e) => setFname(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" },
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    
                                }} variant="standard" />
                        </Stack>

                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Email Address" name='email' type='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" }
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'whitesmoke',
                                    },
                                }} variant="standard" />
                        </Stack>

                        <Stack gap={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Phone Number" name='Phno' type='number' placeholder='Enter Phone number' onChange={(e) => setPnum(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" }
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'whitesmoke',
                                    },
                                }} variant="standard" />

                           
                        </Stack>

                        

                        <Stack sx={{ width: '100%' }}>
                            <TextField
                                required fullWidth id="outlined-required" label="Password" name='password' type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} InputLabelProps={{ sx: { color: "whitesmoke", fontSize: { xs: "1.5rem", md: "16px" } } }} sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'whitesmoke',
                                        fontSize: { xs: "1.5rem", md: "16px" }
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: '#00CED1',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'whitesmoke',
                                    },
                                }} variant="standard" />
                        </Stack>
                        <Stack sx={{ width: '100%' }}>
                            <Button variant="contained" sx={{ background: "#00CED1", color: '#021E30', padding: '8px 0px', borderRadius: '.75rem', fontSize: { xs: "1.15rem", md: "16px" },'&:hover': {
                                transform: "scale(1.001)",
                                background:'white',
                                color:"#00ced1",
                                fontWeight:"500",
                                border:".125rem solid #00ced1"
                            } }} type="submit">
                                Sign Up
                            </Button>
                        </Stack>
                        <Typography sx={{ color: 'whitesmoke', textAlign: 'center' }}>
                            Returing Customer ! <NavLink to="/sign-in" style={{ color: '#00CED1' }} >sign in?</NavLink>
                        </Typography>
                    </form>
                </Stack>
            </Stack>
        </Stack>
        </div>
    );
}