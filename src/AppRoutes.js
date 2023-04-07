import { useRoutes } from "react-router-dom"
import Dashboard from "./component/dashboard/Dashboard"
import Feedback from "./component/feedback/Feedback"
import Login from "./component/Login"
import Resume from "./component/Resume/Resume"
import SignUp from "./component/SignUp"
import { useState } from "react"
import ResumeById from "./component/Resume/ResumeById"
import ParentComponent from "./component/Resume/exampleJS"

const AppRoutes = (props) => {

    const [loginStatus, setLoginStatus] = useState(props.loginStatus);
    const handleLogin = () =>{
        setLoginStatus(true)
        props.handleLoginStatus();
    }
    const testRoutes = [
        { path: '/', element: <Login loginStatus={loginStatus} handleLogin={handleLogin}/> },
        // { path: '/login', element: <Login /> },
        { path: '/resumebyid/:id', element: <ResumeById /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/example', element: <ParentComponent /> },
        { path: '/feedback', element: <Feedback /> },
        { path: '/signup', element: <SignUp /> },
        { path: '/resume', element: <Resume /> }
    ]
    const routes = useRoutes(testRoutes)
    return routes
}

export default AppRoutes;