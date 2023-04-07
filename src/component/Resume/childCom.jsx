import { useState, useEffect } from 'react';

function ChildComponent(props) {
    const [childData, setChildData] = useState({
      projectName: "",
      jobRole: "",
      periodFrom: "",
      periodTo: ""
    });
  
    function handleChildDataChange(event) {
      const name = event.target.name
      const value = event.target.value
      setChildData(prevData => ({
          ...prevData,
          [name]: value
      }))
    }
  
    useEffect(() => {
      props.setData(childData);
    }, [childData, props]);
  
    return (
      <div>
        <h2>Child Component</h2>
        <input type="text" value={childData.projectName} name='projectName' onChange={handleChildDataChange} />
        <input type="text" value={childData.jobRole} name='jobRole' onChange={handleChildDataChange} />
        <input type="text" value={childData.periodFrom} name='periodFrom' onChange={handleChildDataChange} />
        <input type="text" value={childData.periodTo} name='periodTo' onChange={handleChildDataChange} />
        <p>Child Data:</p>
        <ul>
          <li>Project Name: {childData.projectName}</li>
          <li>Job Role: {childData.jobRole}</li>
          <li>Period From: {childData.periodFrom}</li>
          <li>Period To: {childData.periodTo}</li>
        </ul>
      </div>
    );
  }
  

  export default ChildComponent