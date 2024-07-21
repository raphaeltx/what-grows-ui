import axios, { AxiosInstance } from 'axios';
import { IVegetable } from './vegetable.interface';
import { ICoordenate } from './coordenate.interface';

export function GetVegetables(coordenate: ICoordenate): Promise<IVegetable[]> {
  const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  });

  return new Promise(async (resolve, reject) => {
    try {
      const response = await apiClient.post<IVegetable[]>('/it-grows', coordenate);

      resolve(response.data)
    } catch (error) {
      console.log(error)
      reject()
    }
  });
}