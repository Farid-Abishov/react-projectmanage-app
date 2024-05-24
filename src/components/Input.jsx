import { forwardRef } from "react";

const Input=forwardRef(function Input({ label, textarea,...props},ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col mb-4 gap-1">
      <label className="uppercase font-bold text-sm text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
})
export default Input;