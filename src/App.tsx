import { useState } from "react";

import { OptionsCountry } from "./components/OptionsCountry";
import { OptionsCity } from "./components/OptionsCity";
import { Input } from "./components/Input";
import { inputs } from "./components/inputs";
import { Title } from "./components/Title";
import { ButtonForm } from "./components/ButtonForm";

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
    <div className="w-full h-screen  flex flex-col items-center bg-slate-600">
      <Title />
      <div className=" rounded-lg h-full w-full ">
        <form className="w-full h-full flex  ">
          <div className="w-1/2 flex flex-col items-center justify-center gap-2">
            <p className="font-bold text-2xl text-green-400">Dados pessoais</p>
            {inputs.map((input) => (
              <Input name={input.name}/>
            ))}
          </div>
          <div className=" flex flex-col  justify-center items-center gap-3">
            <p className="font-bold text-2xl text-green-400">Destinos de interesse</p>
            <select placeholder="País" multiple className="w-2/3 bg-slate-600" >
              <OptionsCountry />/
            </select>
            <select placeholder="País" multiple className="w-2/3 bg-slate-600 " >
              <OptionsCity />
            </select>
          </div>
        </form>
        <ButtonForm />
      </div>
    </div>
  );
}
