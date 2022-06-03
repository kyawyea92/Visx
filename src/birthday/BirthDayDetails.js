import * as React from 'react';
import Grid from '@mui/material/Grid';
import './BirthDayDetails.css'
import profile from '../images/img2.jpg';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import  Tab  from "@mui/material/Tab";
import RecordsDetail from './RecordsDetail';
import InfoDetails from './InfoDetail';

function TabPanel(props){
  const {children,value,index} = props;
  return(
   <div>
     {value === index && (<Typography component={'div'}>{children}</Typography>)}
   </div>
  );

}
export default function BirthDayDetails(){
  const [value,setValue] = React.useState(0);
  const tabChange = (event,newValue)=>{
    setValue(newValue)
    }
  
          return (
            <Grid container spacing={2}>
            <Grid item xs={6} className = 'my-3'>
            <img src={profile} alt='Profile' className='w-full h-3/4 rounded-lg shadow-lg'/>
            </Grid>
            <Grid item xs={6}>
              <Tabs value={value} onChange={tabChange} textColor="secondary" indicatorColor='secondary' aria-label="secondary tabs example">
                <Tab value={0} className='tabOne' label = "Info"/>
                <Tab value={1} className='tabOne' label = "Records"/>
              </Tabs>
              <TabPanel value={value} index = {0}>
              <InfoDetails/>
              </TabPanel>
              <TabPanel value={value} index = {1}>
                <RecordsDetail/>
              </TabPanel>
            </Grid>
            
          </Grid>
        );    
}