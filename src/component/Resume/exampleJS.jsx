import { useState } from 'react';

function ParentComponent() {
  const [childComponents, setChildComponents] = useState([]);
  const [parentData, setParentData] = useState('Default Parent Data');
  const [childDataList, setChildDataList] = useState([]);

  function addChildComponent() {
    setChildComponents([...childComponents, <ChildComponent key={childComponents.length} addChildData={addChildData} setData={setParentData} />]);
  }

  function addChildData(childData) {
    setChildDataList([...childDataList, childData]);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      {childDataList.map((childData, index) => (
  <div key={index}>
    <p>Project Name: {childData.projectName}</p>
    <p>Job Role: {childData.jobRole}</p>
    <p>Period From: {childData.periodFrom}</p>
    <p>Period To: {childData.periodTo}</p>
  </div>
))}
      <button onClick={addChildComponent}>Add Child Component</button>
      {childComponents}
    </div>
  );
}

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
    props.addChildData(childData);
  }

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

export default ParentComponent;