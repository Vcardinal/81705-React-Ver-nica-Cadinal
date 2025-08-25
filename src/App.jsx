import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer saludo="Bienvenid@ a Delicakes, nuestra pastelería online 🎂" />
      </main>
    </>
  )
}

export default App;




