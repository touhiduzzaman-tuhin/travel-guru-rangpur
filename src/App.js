import { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import BookDetails from './components/BookingDetails/BookDetails';
import Finish from './components/Finish/Finish';
import Header from './components/Header/Header';
import Blog from './components/HeaderLink/Blog';
import Contact from './components/HeaderLink/Contact';
import Destination from './components/HeaderLink/Destination';
import News from './components/HeaderLink/News';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TourPlace from './components/TourPlace/TourPlace';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/tourPlace">
            <TourPlace></TourPlace>
          </Route>
          <PrivateRoute path="/bookingDetails">
            <BookDetails></BookDetails>
          </PrivateRoute>
          <Route path="/bookings">
            <Booking></Booking>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/finish">
            <Finish></Finish>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
