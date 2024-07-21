import { IVegetable } from "../../http/request-what-grows-api/vegetable.interface";

export interface ICoordenates {
  handleVegetablesStateChange: (vegetables: IVegetable[]) => void;
}