export function Input({name}) {
  return <div className="w-2/3 flex flex-col justify-center items-center">
    <label htmlFor="" className="mr-auto text-green-400">{name}</label>
    <input
      type="text"
      placeholder={name}
      className="w-full border border-blue-500 rounded-lg py-2 px-3 text-white bg-green-400" />
  </div>;
}
