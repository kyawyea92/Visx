import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import './BirthDayDetails.css'
import BirthDayInfoCardOne from './BirthDayInfoCardOne';
import Grid from '@mui/material/Grid'
import BirthDayInfoCardTwo from './BirthDayInfoCardTwo';
import SocialSkills from './SocialSkills';

function RecordsDetail() {
   
    return (
        <Box className='mt-2.5 mx-6'>
            <Card variant="outlined" className='my-3'>
                <React.Fragment>
                   <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <BirthDayInfoCardOne/>
                        </Grid>
                        <Grid item xs={6}>
                            <BirthDayInfoCardTwo/>
                        </Grid>
                        
                   </Grid>
                </React.Fragment>
            </Card>
            <Card variant='outlined'>
                <React.Fragment>
                    <Grid container>
                        <Grid item xs={12}>
                            <SocialSkills/>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </Card>
        </Box>
    );
}
export default RecordsDetail;