import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Гайд Git</h1>
      <p>Eсли не подгрузились все ветки:</p>
      <div className="console">
        <p>git remote set-branches origin '*'</p>
        <p>git fetch -v --depth=1</p>
      </div>
      <p>Если слишком большой репозиторий:</p>
      <div className="console">
        <p>git config --global http.postBuffer 524288000</p>
        <p>git config --global core.compression 0</p>
        <p>git clone --depth=1 {'<url>'}</p>
        <p>cd {'<shallow cloned project dir>'}</p>
        <p>git fetch --depth=4</p>
        <p>git fetch --depth=100</p>
        <p>git fetch --unshallow </p>
      </div>
    </div>
  )
}

export default App
