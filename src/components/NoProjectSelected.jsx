import noProjectImage from '../assets/no-projects.png';
import Button from './Button';
export default function NoProjectSelected({onStartAddProject}){
    return <div className="mt-24 text-center w-2/3"> 
       <img src={noProjectImage} alt="no project image" className='w-16 h-16 object-contain mx-auto' /> 
       <h2 className='h2 text-stone-500 my-4 font-bold'>No Project Selected</h2>
       <p className='text-stone-400 mb-4'>Select a project  or get started with a new one</p>
       <p>
        <Button onClick={onStartAddProject}>
            Create new project
        </Button>
       </p>
    </div>
}