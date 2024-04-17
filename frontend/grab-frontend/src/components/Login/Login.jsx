// import React from 'react'

import {
    Box, Stack, Paper, Typography, TextField, InputAdornment,
    Button, Link
} from "@mui/material";
import { lightBlue, grey } from "@mui/material/colors";
import './Login.css'
import { useTheme } from "@emotion/react";
import { useState } from "react";


export default function Login() {
    const theme = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (username.trim() === '') {
            errors.username = '(*) Please enter your username';
        }
        if (password.trim() === '') {
            errors.password = '(*) Please enter your password';
        }
        setErrors(errors);
    }
    return (
        <Box sx={{ paddingTop: '100px', margin: '0px', boxSizing: 'border-box', width: '100%', height: '90vh' }}>
            <Paper
                elevation={6}
                sx={{
                    width: '1200px',
                    padding: '',
                    margin: '0 auto',
                    bgcolor: lightBlue[50],
                    borderRadius: '20px',
                }}>
                <Stack direction={"row"}>
                    <img id="grab_login_image" src="login_image.jpg" alt="" />
                    <Stack
                        padding={3}
                        flexGrow={1}
                        direction={'column'}
                        alignItems={"center"}
                        spacing={3}>
                        <Typography
                            variant='h4'
                            sx={{
                                fontWeight: 'bold',
                                width: '70%',
                                textAlign: "left",
                                color: "#31363F"
                            }}>
                            Log In
                        </Typography>
                        <Stack direction={"column"} spacing={2} sx={{ width: '70%' }}>
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                color="primary"
                                size="small"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                error={!!errors.username}
                                helperText={errors.username} />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                autoComplete="current-password"
                                size="small"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                error={!!errors.password}
                                helperText={errors.password} />

                        </Stack>
                        <Stack direction={'column'} width={'70%'}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    height: '50px',
                                    fontWeight: 'bold',
                                    letterSpacing: '2px',
                                    fontSize: '20px',
                                }}
                                disableElevation
                                onClick={handleSubmit} >
                                Log in
                            </Button>
                            <Typography variant="h6" marginTop={2}>
                                Does not have an account ?
                                <Link href="/signup" underline="hover">
                                    {'     Sign up !'}
                                </Link>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Paper>


        </Box>
    )
}
