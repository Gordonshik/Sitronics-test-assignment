import './App.css';
import AuthPage from './components/AuthPage';
import Table from './components/Table'

function App() {

    const maxWidth = `${document.body.clientWidth}px`
    const maxHeight = `${document.body.clientHeight}px`

  return (
    <div
        className="App"
        style={{
            maxWidth,
            maxHeight,
            width: '100%',
            height: '100%'
        }}>
        <Table />
    </div>
  );
}

export default App;
