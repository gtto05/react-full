import { useEffect, useMemo } from "react";
import Weather from "./03.state/Weather";

function App() {
  const propsObj = {
    title:'weather',
    handleClick: () => {
      console.log('handleClick');
    }
  }
  useEffect(() => {
    setTimeout(() => {
      propsObj.title = 'hol!'
    },2000)
  }, [])
  return (
    <div className="App">
      App
      {/* <MyComponent /> */}
      <Weather name='xander' age="18" {...propsObj}/>
    </div>
  );
}

export default App;
