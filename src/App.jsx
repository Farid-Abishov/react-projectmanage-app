import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";
export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects:prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId)
      };
    });
  }
   
  const selectedProject=projectState.projects.find(project=>project.id === projectState.selectedProjectId)

  let content=<SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
  
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}
