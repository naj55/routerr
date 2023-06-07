import './App.css';
import About from './components/aboutUs'
import PNF from './components/pageNot'
import Books from './components/Books'
import BookList from './components/BooksList'
import { Routes, Route, } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {


  return (
    <>
      <Link to="/AboutUs"> About</Link>
      <Link to="/Books"> Books</Link>

      <Routes>
        <Route exact path="/" element={<h1>helllo world</h1>}></Route>
        <Route path="/AboutUs" element={<About />}></Route>
        <Route path="/Books" element={<BookList />}></Route>
        <Route path="/Book/:Id" element={<Books />} />
        <Route path="/*" element={< PNF />} />

      </Routes>
    </>
  )
}

export default App
