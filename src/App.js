import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './pages/Home/Service/Services';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home';
import Booking from './Booking/Booking/Booking';
import Login from './pages/Login/Login/login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Mybooking from './pages/Mybooking/Mybooking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route  exact path ='/'>
         <Home></Home>
      </Route>
     
       
       <Route path='/home'>
         <Home></Home>


       </Route>
       <Route path='/login'>
         <Login></Login>



       </Route>
       <Route path='/about'>
         <About></About>
         </Route>

         <Route path='/contact'>
         <Contact></Contact>
         </Route>

        

       <PrivateRoute path='/booking/:uid'>
         <Booking></Booking>
       </PrivateRoute>
       
       <PrivateRoute path='/mybooking'>
         <Mybooking></Mybooking>


       </PrivateRoute>
       


       <Route path='*'>
       <NotFound></NotFound>

       </Route>

     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
