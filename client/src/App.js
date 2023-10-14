import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import NotFound from "./pages/NotFound";
import { TodoListView } from "./pages/MobXCRUD";
import { store } from "./MobX/store";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="mob" element={<TodoListView todoList={store} />}/>
    </Routes>
  );
}

export default App;
