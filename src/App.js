
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import About from './About';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import ErrorPage from './ErrorPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Temp from './Temp'


function App() {

  const theme = {
    colors: {
      primaryBg: "#000",
      secondaryBg: "#80808014",
      heading: "blue",
      buttonColor: "#0000ffc9",
      textColor: "#0000009e",

    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
     
        <BrowserRouter>
        <Navbar/>
          <GlobalStyle />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<ErrorPage />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
