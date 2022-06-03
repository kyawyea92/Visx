import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../images/OIP.jpg'
import BirthDayDetails from './BirthDayDetails'
class BirthDayList extends React.Component{
   changeLink = () =>{
     console.log('Hello')
   }
   render(){
      return(
         <div className='m-10'>
             <Grid container spacing={2}>
                 <Grid item xs={3}>
                    <img src={profile} alt='Profile' className='w-full h-64 rounded-lg shadow-lg  opacity-90 dow-blue-500/50 hover:opacity-100'/>
                 </Grid>
                 <Grid item xs={3}>
                    <img src={profile} alt='Profile' className='w-full h-64 rounded-lg shadow-lg  opacity-90 dow-blue-500/50 hover:opacity-100'/>
                 </Grid>
                 <Grid item xs={3}>
                    <img src={profile} alt='Profile' className='w-full h-64 rounded-lg shadow-lg  opacity-90 dow-blue-500/50 hover:opacity-100' onClick={this.changeLink}/>
                 </Grid>
                 <Grid item xs={3}>
                    <img src={profile} alt='Profile' className='w-full h-64 rounded-lg shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-30 hover:scale-110 hover:bg-indigo-500 duration-300  opacity-90 dow-blue-500/50 hover:opacity-100'/>
                 </Grid>
             </Grid>
         </div>        
 ); 
   }
    
}
export default BirthDayList;