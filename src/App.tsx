import { OptionsCountry } from "./OptionsCountry";
import { OptionsCity } from "./OptionsCity";
import { Input } from "./Input";
import { inputs } from "./inputs";

export default function App() {
  window.onmousedown = function (e) {
    let el = e.target;
    if (
      el.tagName.toLowerCase() == "option" &&
      el.parentNode.hasAttribute("multiple")
    ) {
      e.preventDefault();

      if (el.hasAttribute("selected")) el.removeAttribute("selected");
      else el.setAttribute("selected", "");

      var select = el.parentNode.cloneNode(true);
      el.parentNode.parentNode.replaceChild(select, el.parentNode);
    }
  };

  return (
    <div className="w-full h-screen  flex flex-col items-center bg-[#3ea3af]">
      <p className="text-white text-4xl font-bold">Formulário de cadastro</p>
      <div className="bg-[#9fd9b3] rounded-lg h-full w-1/2 my-5 flex flex-col items-center py-16">
        <form className="w-full h-full flex flex-col justify-center items-center  gap-3">
          {inputs.map((input) => (
            <Input name={input.name} />
          ))}
          <div className=" flex flex-col w-full justify-center items-center gap-3">
            <label> Destinos de interesse </label>
            <select placeholder="País" multiple className="w-2/3 ">
              <OptionsCountry />/
            </select>
            <select placeholder="País" multiple className="w-2/3">
              <OptionsCity />
            </select>
          </div>
          <div className="container grid grid-cols-4 gap-16 mx-auto"></div>
          <button
            onClick={() => {}}
            className="py-2.5 px-5 mr-2 mb-2 bg-blue-500 rounded-lg text-white font-bold"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
