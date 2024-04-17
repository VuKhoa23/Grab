// import React from 'react'

import {
    Box, Stack, Paper, Typography, TextField, InputAdornment,
    Button
} from "@mui/material";
import { lightBlue, grey } from "@mui/material/colors";
import './Login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from "@emotion/react";


export default function Login() {
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
                            variant='h3'
                            sx={{
                                fontWeight: '',
                                width: '70%',
                                textAlign: "left",
                            }}>
                            Log In
                        </Typography>
                        <Stack direction={"column"} spacing={2} sx={{ width: '70%' }}>
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                color="primary" />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                autoComplete="current-password" />

                        </Stack>
                        <Stack direction={'row'} width={'70%'}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    height: '50px',
                                    fontWeight: 'bold',
                                    letterSpacing: '2px',
                                    fontSize: '20px',
                                }}
                                disableElevation>Log in</Button>

                        </Stack>


                    </Stack>
                </Stack>
            </Paper>


        </Box>
    )
}
