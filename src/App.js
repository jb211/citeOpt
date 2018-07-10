import React, { Component } from 'react';
import logo from './logo.svg';
import Papers from './components/Papers'
import './App.css'; 

class App extends Component { 
  constructor() {
    super()
    this.state = {
      papers: []
    }
  }

  

  componentWillMount() {
    var convert = require('xml-js')
    function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
  }

    let url = "http://export.arxiv.org/api/query?search_query=electron&sortBy=lastUpdatedDate&sortOrder=descending&max_results=10"
    httpGetAsync(url, function(response) {
      let json_papers = convert.xml2json(response)
      console.log(json_papers)
    })
    
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cite Opt</h1>
        </header>
        <p className="App">
         <Papers />
       </p>
      </div>
    );
  }
}

export default App;
