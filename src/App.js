import Home from "./components/routes/home/home.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Navigation from "./components/routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom"; 

const Shop = () => {
  return <h1>I am the shopping page</h1>
}

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} /> {/**Set the index to true to show Home on the default page without navigating to it */}
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;