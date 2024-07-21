import Header from "./components/Header/Header"
import cat from './assets/cat.jpg'
import Body from "./components/Body/Body"

function App() {
  return (
    <>
      <Header title="W H A T G R O W S?" imageSource={cat} />
      <Body />
    </>
  )
}

export default App
