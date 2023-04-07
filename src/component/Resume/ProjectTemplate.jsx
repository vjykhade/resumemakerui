import { Grid, TextField } from '@mui/material'
import Responsibility from './Responsibility';
import React, { useState } from 'react'


export const ProjectTemplate = (props) => {
    const [childData, setChildData] = useState({
        projectName: "",
        proTech: "",
        description: "",
       
      });

      function handleChildDataChange(event) {
        const name = event.target.name
        const value = event.target.value
        setChildData(prevData => ({
            ...prevData,
            [name]: value
        }))
        //props.setData(childData);
        props.addChildData(childData);
      }

    return <>
        <Grid container spacing={2}  className='subprojectcls' >


            <Grid item xs={4} style={{ display: 'flex', alignItems: 'start' }}>
                <h3>Projects: </h3>
            </Grid>
            <Grid item xs={4} >
                <TextField
                    style={{ width: '100%' }}
                    Project Name
                    id="outlined-required"
                    label="Project Name"
                    placeholder="Enter Your Project Name"
                    required
                    name='projectName'
                    value={childData.projectName} 
                    onChange={handleChildDataChange}
                />
            </Grid>
            <Grid item xs={4} >
                <TextField
                    style={{ width: '100%' }}
                    Project Technology
                    id="outlined-required"
                    label="Project Technology"
                    placeholder="Enter your Project Technology"
                    required
                    name='proTech'
                    value={childData.proTech} 
                    onChange={handleChildDataChange}
                />
            </Grid>
            <Grid item xs={4} style={{ display: 'flex' }} >

            </Grid>

            <Grid item xs={8} >
                <TextField
                    style={{ width: '100%' }}
                    Description
                    id="outlined-required"
                    label="Project Description"
                    placeholder="Enter your project description"
                    required
                    name='description'
                    value={childData.description} 
                    onChange={handleChildDataChange}
                />
            </Grid>

            <Grid item xs={4} style={{ display: 'flex', alignItems: 'start' }}>

            </Grid>
            <Responsibility />
        
        </Grid>
    </>

}