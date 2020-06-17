import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Switch, Route} from  'react-router-dom';
import {Menu, Container} from 'semantic-ui-react'
import Home from './components/Home';
import Planets from './components/Planets';
import People from './components/People';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);;

  useEffect(()=>{
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }
    async function fetchPlanet(){
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json()
      setPlanets(data.results);
    }
    fetchPeople();
    fetchPlanet();
  },[])
      console.log('people',people);
      console.log('planets',planets);
  return (
    <>
      <Router>
        <Navbar/>
          <Container>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/planets'>
                <Planets/>
              </Route>
              <Route exact path='/people'>
                <People/>
              </Route>
            </Switch>
          </Container>
      </Router>      
    </>
  );
}

export default App;
