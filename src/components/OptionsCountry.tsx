import axios from "axios";
import { useEffect, useState } from "react";

export function OptionsCountry() {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://amazon-api.sellead.com/country");
    setCountries(response.data);
  };
  getData();

  return (
    <>
      {countries.map((pais) => (
        <>
          <option
            value=""
            key={pais.name}
            className={
              "border border-slate-500 rounded w-full py-2 px-3 text-white text-base "
            }
          >
            {pais.name}
          </option>
        </>
      ))}
    </>
  );
}
