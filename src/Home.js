import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './lesp/App';
import Form from './lesp/Form';
import Typing from './Typing';


function Home() {
 return (
   <>
     <LearningList />
     <BrowserRouter>
       <Routes>
           <Route index element={<HomeContent />} />
           <Route path="todo" element={<App />} />
           <Route path="colr" element={<Wip/>}/>
           <Route path="form" element={<Form/>}/>
           <Route path="usrf" element={<Typing/>}/>
           {/* <Route path="excercise1" element={<Excercise1 />} /> */}
           <Route path="*" element={<NoPage />} />
       </Routes>
     </BrowserRouter>
   </>
 );
}


function HomeContent() {
 return (
   <div> Please click one of the excercise links to see them in action </div>
   );
}

function Wip() {
  return(
    <div> This page is still under construction. Try again [NEXT INTEREST SPIKE] </div>
  )
}


function NoPage() {
    return (
      <div>Invalid URL </div>
      );
   }
   

function LearningList() {
 return (
   <>
     <a href = "/">Home</a>
     <a href="todo">TodoList</a>
     <a href="colr">Text colors</a>
     <a href="form">Information Form</a>
     <a href="usrf">Typing</a>
     <hr />
   </>
 )
}


export default Home;
