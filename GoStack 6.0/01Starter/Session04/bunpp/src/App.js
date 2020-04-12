import React from 'react';

//Components
import TopBar from './components/topbar';
import Footer from './components/footer';
//Components


function App() {
  return (
  <div className="raiz">

    <TopBar/>

    <div className="container-fluid">

      <div className="row">

        <div class="col-6">
          <div class="card">
            <div class="card-body">
              This is some text within a card body.
              <a class="card-link">Card link</a>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a class="card-link">Card link</a>
              <a class="card-link">Another link</a>
            </div>
          </div>
        </div>

      </div>

    <Footer />

    </div>
    </div>
  );
}

export default App;
