import "./App.css";
import React from "react"; //use state hook
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Work from "./pages/Work";
// import Navbar from "./components/Navbar";
// import Jumbotron from "./components/Jumbotron";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

// function App() {
//   const [page, setPage] = useState("about"); //page variable holds the word about
//   const PageRender = () => {
//     switch (page) {
//       case "about":
//         return <About />; //if the case has the work about in it it's going to return the component
//       case "contact":
//         return <Contact />;
//       case "work":
//         return <Work />;
//     }
//   };
//   return (
//     <div>
//       <Navbar page={page} setPage={setPage} />
//       {/* naming the prop page, but passing the value inside the state called page */}
//       <Jumbotron />
//       <PageRender />
//     </div>
//   );
// }

// export default App;

// // react will always monitor state. when state changes, then it will change everywhere
// // create a state that will hold what page to render

// //every time the page
