import React from 'react'
import { Paper } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom'


const paperStyle={padding:30 , height:'80vh',width:"80%", margin:"40px auto"}
const heading={textAlign: ' center'}
const link={ textDecoration:'none', color:'black'}
export default function LivePopup() {
    return (
        <div>
            <Paper elevation={10} style={paperStyle}>
              <Link to='/Winner' style={link}> <ArrowBackIcon/></Link> 
           <h2 style={heading}>Showing the Live People</h2>
            </Paper>
        </div>
    )
}

