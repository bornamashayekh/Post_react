import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeaer";
import { useState } from "react"; // Importing useState to manage state, but not using it here
function App() {
      const [isModalOpen, setIsModalOpen] = useState(false); // Importing useState to manage state, but not using it here
      function closeModalHandler() {
        setIsModalOpen(false);
      }
      function openModalHandler() {
        setIsModalOpen(true);
    }
  return (
    <>
      <MainHeader onCreatePost={openModalHandler}/>
    <main>
      
    
        <PostsList isPosting={isModalOpen} onStopPosting={ closeModalHandler} />
     </main>
    </>);
}

export default App;
