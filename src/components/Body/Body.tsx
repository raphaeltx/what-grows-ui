import { useState } from "react";
import Coordenates from "../Coordenates/Coordenates";
import Vegetables from "../Vegetables/Vegetables";
import { IVegetable } from "../../http/request-what-grows-api/vegetable.interface";

export default function Body() {
  const [vegetables, setVegetables] = useState<IVegetable[]>([{
    name: '',
    description: '',
    soil_humidity: '',
  }])

  const handleVegetablesStateChange = (newState: any) => {
    setVegetables(newState);
  };

  return (
    <>
      <Coordenates handleVegetablesStateChange={handleVegetablesStateChange} />
      {vegetables.length > 0 && vegetables[0].name !== '' ? <Vegetables data={vegetables} /> : null}
    </>
  )
}