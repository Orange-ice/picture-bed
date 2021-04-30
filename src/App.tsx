import React, { Suspense, lazy } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const About = lazy(() => import('./pages/About'));

function App () {
  return (
    <div>
      <Header/>
      <Router>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/history" component={History} exact/>
            <Route path="/about" component={About} exact/>
          </Switch>
        </Suspense>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
