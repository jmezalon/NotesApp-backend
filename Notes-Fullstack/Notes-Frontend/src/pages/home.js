import { useState } from "react";
import Main from "../Components/Main";
import Sidebar from "../Components/Sidebar";

const Home = ({ notebooks, pro_url, onDeleteNotebook, setNotebooks, user }) => {
  const [activeNote, setActiveNote] = useState(false);
  const [forRender, setForRender] = useState(1);

  const onAddNotebook = (newNotebook) => {
    setNotebooks([newNotebook, ...notebooks]);
  };
  const [hideSidebar, setHideSidebar] = useState(false);
  return (
    <div className="App">
      <Sidebar
        notebooks={notebooks}
        setNotebooks={setNotebooks}
        user={user}
        hideSidebar={hideSidebar}
        setHideSidebar={setHideSidebar}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onAddNotebook={onAddNotebook}
        onDeleteNotebook={onDeleteNotebook}
        forRender={forRender}
        pro_url={pro_url}
      />
      <Main
        activeNote={activeNote}
        setForRender={setForRender}
        forRender={forRender}
        setHideSidebar={setHideSidebar}
        hideSidebar={hideSidebar}
        pro_url={pro_url}
      />
    </div>
  );
};

export default Home;
