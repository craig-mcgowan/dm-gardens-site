import projects from "../public/projectData";
export default function Projects(props) {
  
  return (
    <>
      {projects.map(project => (
        <div>
          <h3>{project.address}</h3>
          <p>{project.description}</p>
        </div>
      ))}    
    </>
  );
}
