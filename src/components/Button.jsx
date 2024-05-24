export default function Button({children,...props}) {
  return (
    <button className="px-4 py-2 rounded-md text-xs md:text-base bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-stone-100" {...props}>
      {children}
    </button>
  );
}
