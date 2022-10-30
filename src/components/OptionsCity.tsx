import axios from "axios";
import { useEffect, useState } from "react";

export function OptionsCity() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://amazon-api.sellead.com/city"
      );
      setCountries(response.data);
    };
    getData();
  }, [countries]);

  return (
    <>
      {countries.map((pais) => (
        <>
          <option value="" key={pais.name} className="border border-slate-500 text-white rounded py-2 px-3 text-base ">
            {pais.name}
          </option>
        </>
      ))}
    </>
  );
}
