import { useEffect, useState } from "react";
import { GetVegetables } from "../../http/request-what-grows-api/http-what-grows-api";
import Input from "../Input/Input";
import { ICoordenates } from "./Coordenates.interface";
import { IVegetable } from "../../http/request-what-grows-api/vegetable.interface";

export default function Coordenates({ handleVegetablesStateChange }: ICoordenates) {
  const [vegetables, setVegetables] = useState<IVegetable[]>([{
    name: '',
    description: '',
    soil_humidity: '',
  }]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    handleVegetablesStateChange(vegetables);
  }, [vegetables]);

  function handleLatitudeChange(event: any) {
    setLatitude(event.target.value)
  }

  function handleLongitudeChange(event: any) {
    setLongitude(event.target.value)
  }

  async function handleClick() {
    const response = await GetVegetables({
      latitude,
      longitude
    });

    setVegetables(response);
  }

  return (
    <>
      <div className="input-group">
        <Input title="Latitude" handleChange={(event: any) => handleLatitudeChange(event)} />
        <Input title="Longitude" handleChange={(event) => handleLongitudeChange(event)} />
      </div>

      <div className="center">
        <button className="coordenate-button" onClick={handleClick}>Get it!</button>
      </div>
    </>
  )
}