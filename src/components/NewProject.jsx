import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAdd}) {
  useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

   function handleSave(){
    const enteredTitle=title.current.value;
    const enteredDescription=description.current.value;
    const enteredDueDate=dueDate.current.value;
     
     onAdd({
        title:enteredTitle,
        description:enteredDescription,
        dueDate:enteredDueDate
     })
   }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button
          onClick={handleSave}
           className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} type="text" label="Title" textarea={false} />
        <Input ref={description} label="Description" textarea={true} />
        <Input ref={dueDate} type="date" label="Date" textarea={false} />
      </div>
    </div>
  );
}
