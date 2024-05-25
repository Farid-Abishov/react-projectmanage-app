import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";

const Modal = forwardRef(function Modal({ children,buttonCaption },ref) {
    const dialog=useRef()
   useImperativeHandle(ref,()=>{
    return {
        open(){
         dialog.current.showModal();
        }
    }
   })
  return createPortal(
    <dialog className="backdrop:bg-stone-900/90 text-stone-800 p-8 rounded-md shadow-md" ref={dialog}>
        {children}
     <form method={dialog}>
        <button className="mt-4 bg-stone-900 text-stone-200 px-4 py-2 rounded-md">{buttonCaption}</button>
     </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
