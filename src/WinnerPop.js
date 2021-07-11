import React, { useEffect,useState } from 'react'
import { Paper } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom'
import {db} from './Components/fire'

const paperStyle={padding:30 , height:'80vh',width:"80%", margin:"40px auto"}
const heading={textAlign: ' center'}
const link={ textDecoration:'none', color:'black'}

function WinnerPopup() {
// const [winnerData,getWinnerData] = React.useState([""])
const [bookerProductData, setBookerProductData] = useState([""]);
// const test = bookerProductData.map((data)=>{
//     console.log(data)
//     // console.log(data.role)
// })
  
    try {
        
        useEffect( async() => {
          
            await db
            .collection("Winner")
            .onSnapshot((snapshot) =>
               setBookerProductData(snapshot.docs.map((doc) => doc.data))
              // console.log( 'abcd',snapshot.docs.data)

            );
            
        }, [])
        console.log('abcd',bookerProductData)

    } catch (error) {
        console.log(error)
    }
   

    
    return (

        
       
      
            <Paper elevation={10} style={paperStyle}>
              <Link to='/Winner' style={link}> <ArrowBackIcon/></Link> 
           <h2 style={heading}>Showing the Winner People</h2>
         {
           bookerProductData.map(data=>(
             <h3 >{data}</h3>
             
           )) 
         }
            </Paper>
      
    )
}
export default WinnerPopup
