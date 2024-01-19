import useRouteElements from "./routes/useRouteElements";

function App() {
  const routesElements = useRouteElements()

  return (
    <>
      {routesElements}
    </>
  )
}

export default App
