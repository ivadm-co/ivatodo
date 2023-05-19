import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';


function Home() {
 return (
   <>
     <LearningList />
     <BrowserRouter>
       <Routes>
           <Route index element={<HomeContent />} />
           <Route path="les1" element={<App />} />
           <Route path="les2" element={null}/>
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


function NoPage() {
    return (
      <div>Invalid URL </div>
      );
   }
   

function LearningList() {
 return (
   <>
     <a href = "/">Home</a>
     <a href="les1">Lesson 1</a>
     <a href="les2">Lesson 2</a>
     <hr />
   </>
 )
}


export default Home;
