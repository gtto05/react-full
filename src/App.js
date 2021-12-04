import MyInput from "./05.ref/MyInput";

function App() {
  // const propsObj = {
  //   name:'xander',
  //   age:'18',
  //   gender:'男'
  // }

  // 测试propsObj属性改变，会不会影响页面刷新 no!
  // useEffect(() => {
  //   setTimeout(() => {
  //     propsObj.name = 'holden'
  //   },2000)
  // }, [])
  return (
    <div className="App">
      App
      {/* <MyComponent /> */}
      {/* <Weather /> */}
      {/* <MyList {...propsObj}/> */}
      <MyInput />
    </div>
  );
}

export default App;
