import React from 'react'
import { useParams, useLocation} from 'react-router-dom'

const ProjectPage = () => {
    const { projectId } = useParams()
    const location = useLocation()
    console.log(location);
    console.log(projectId);
  return (
    <div>ProjectPage {projectId}</div>
  )
}

export default ProjectPage