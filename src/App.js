import './App.css';

function App() {
  return (
    <div className="App">
<div className="container-fluid mt-3" id='HeaderID'>
          <div className="row">
            <div className="col-sm-3 p-3 bg-primary text-white">LOGO</div>
            <div className="col-sm-9 p-3 bg-dark text-white">
              <div className="row">
                <div className="col-sm-7 p-3 bg-primary text-white">Search</div>
                <div className="col-sm-5 p-3 bg-dark text-white">
                  <div className="row">
                    <div className="col-sm-6 p-3 bg-dark text-white">Sign In</div>
                    <div className="col-sm-6 p-3 bg-dark text-white">
                      <div className="row">
                        <div className="col-lg-3 p-3 bg-dark text-white">icon1</div>
                        <div className="col-lg-3 p-3 bg-dark text-white">icon2</div>
                        <div className="col-lg-3 p-3 bg-dark text-white">icon3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                  <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>

                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-3" id='BodyID'>
          <div className='row'>
            <div className='col'>
              <div className="card">
                <img className="card-img" src="logo512.png" alt="Card image" width="100" height="300" />
                <div className="card-img-overlay">
                  <p className="card-text">I'm text that has a background image!</p>
                </div>
              </div>
              <div className='col'>
            </div>
            <div className="card">
              <img className="card-img" src="logo512.png" alt="Card image" width="100" height="300" />
              <div className="card-img-overlay">
                <p className="card-text">I'm text that has a background image!</p>
              </div>
            </div>
          </div>
        </div>

    </div>
    </div>
  );
}

export default App;
