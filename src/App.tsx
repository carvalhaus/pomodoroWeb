import "./App.css";
import Header from "./components/Header/Header";
import Session from "./components/Session/Session";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Header />

      <main className="content">
        <Session />

        <TodoList />
      </main>
    </>
  );
}

export default App;
