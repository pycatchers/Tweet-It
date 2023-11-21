function App() {

  useRef - useState

  const [value, setValue] = useState(0);

  setValue(value + 1)

  return(
    <div>{value}</div>
  )
}


export default App;