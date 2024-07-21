export default function Header({ title, imageSource }: any) {
  return (
    <header id="header" className="center">
      <h1>{title}</h1>
      <img src={imageSource}/>
    </header>
  )
}