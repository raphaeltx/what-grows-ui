import { IVegetable } from "../../http/request-what-grows-api/vegetable.interface";
import { IVegetables } from "./Vegetables.interface";

export default function Vegetables({ data }: IVegetables) {
  return (
    <>
      <div id="vegetable-container">
        <div id="vegetables-content">
          <ul className="vegetables-list">
            {data.map((res: IVegetable, index: number) =>
              <li key={index}>
                <p>Name: {res.name}</p>
                <p>Description: {res.description}</p>
                <p>Soil Humidity: {res.soil_humidity}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}