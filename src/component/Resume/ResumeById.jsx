import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getResumeData} from '../../services/resumemaker-services'

const token = localStorage.getItem("token")

const config = {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

const ResumeById = () => {
    const { id } = useParams();
    console.log("resumeId", id)

    const [resume, setResume] = useState([]);
  
useEffect(() => {
    if (id !== null) {
      getResumeData(config, id).then((res)=>{
        console.log(res);
        setResume(res)
    })
         .catch(error => {
         console.log(error);
        });
    }
    
  }, [id]);

  console.log("Data received: ",JSON.stringify(resume));
  return (
    <div>
     {JSON.stringify(resume)}
     
    </div>
  )
}

export default ResumeById
