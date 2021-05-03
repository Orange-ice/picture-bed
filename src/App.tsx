import React, { Suspense, lazy } from 'react';
// import logo from './logo.svg';
import '@/App.css';
import 'antd/dist/antd.css';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

const Home = lazy(() => import('@/pages/Home'));
const History = lazy(() => import('@/pages/History'));
const About = lazy(() => import('@/pages/About'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));

function App () {
  return (
    <>
      <Header/>
      <Router>
        <main>
          <Suspense fallback={<Loading/>}>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/history" component={History} exact/>
              <Route path="/about" component={About} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/register" component={Register} exact/>
            </Switch>
          </Suspense>
        </main>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
