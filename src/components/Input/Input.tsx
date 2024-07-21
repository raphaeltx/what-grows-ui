import { IInput } from "./Input.interface";

export default function Input({ title, handleChange }: IInput) {
  return (
    <>
      <div id="user-input">
        <label>{title}</label>
        <input type="text" onChange={handleChange} />
      </div>
    </>
  )
}