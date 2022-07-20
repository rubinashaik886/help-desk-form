import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import HelpIcon from '@mui/icons-material/Help';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




function HelpForm () {

    const formStyle = {
        margin: "40px"
    }

    const iconStyle = {
        backgroundColor: "purple",
    }

    const textfield = {
        // display: "flex",
        justifyContent: "space-between",
        margin: "30 px",

    }

    const btnstyle = {
        margin: "8px 0"
    }

    return(
            <Grid>
                <Paper elevation={0} style={formStyle}>
                <Grid align="center">
                    <Avatar style={iconStyle}>
                        <HelpIcon></HelpIcon>
                    </Avatar>
                    <h1>Help Desk Form</h1>
                </Grid>
                <Grid>
                <TextField required label='First Name' placeholder='First Name' style={textfield} id="outlined-required"></TextField>
                <TextField label='Last Name' placeholder='Last Name' style={textfield}></TextField>
                <br></br>
                <br></br>
                <TextField label='Email' placeholder='Enter your email address'></TextField>
                <br></br>
                <br></br>
                <TextField label='Description' placeholder='Enter a description of your problem or issue.'></TextField>
                <br></br>
                <br></br>
                <br></br>
                </Grid>
                
                <Button type="submit" color="primary" variant="contained" style={btnstyle} fullwidth required>Submit</Button>

                </Paper>
                
             </Grid>
    );
}

export default HelpForm;