import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Responsibility from './Responsibility';
//import { ProjectTemplate } from './ProjectTemplate';
import { fontSize, fontWeight } from '@mui/system';

function Projects() {
    const [childComponents, setChildComponents] = useState([]);
    //const [projects, setProjects] = useState([ProjectTemplate()]);
    const [childDataList, setChildDataList] = useState([]);
  
    function addChildComponent() {
        setChildComponents([...childComponents, <ProjectTemplate key={childComponents.length} addChildData={addChildData} RemoveProject = {RemoveProject} />]);
      }
    const handleOpenContainer = () => {
       //setProjects([...projects, ProjectTemplate()])
        addChildComponent()
        
    }
    function addChildData(childData) {
        setChildDataList([...childDataList, childData]);
        console.log("projects"+ JSON.stringify(childDataList))
      }

      const RemoveProject = (ele) => {
        if (window.confirm(`Are you sure you want to remove?`)) {
          const newItems = [...childComponents];
          newItems.splice(ele, 1);
          childComponents(newItems);
          }
      };


    return (
        <>
            {/* {childDataList.map(project => {
                return <> 
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: "15px" ,  marginRight: "5px" }}>
                <button style={{width: "30px", height: "30px", backgroundColor: "red", color: "white",cursor: "pointer", borderRadius: "5px",border: "none",fontSize:"25px", fontWeight:"bold"}}  >X</button>
                </Grid>
             {project} 
             </>
              
            })} */}
          
            {childComponents}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '20px'}}>
                <Button variant="contained" onClick={handleOpenContainer}>Add Projects</Button>
            </Grid>
        </>
    )
}
export default Projects

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
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: "15px" ,  marginRight: "5px" }}>
             <button style={{width: "30px", height: "30px", backgroundColor: "red", color: "white",cursor: "pointer", borderRadius: "5px",border: "none",fontSize:"25px", fontWeight:"bold"}} onClick={props.RemoveProject} >X</button>
             </Grid>

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

