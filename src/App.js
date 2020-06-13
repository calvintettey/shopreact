  import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './shopreact.css';
import Side from './components/side-component';
import Header from './components/header_component';
import ItemList from './components/itemlist_component';


function App() {
  return (
    <div className="App">
      <div class="container">
		<div class="row">

			<div class="col-md-2 side" >
        <Side/>
			</div>


			<div class="col-md-10 main">

				<Header/>

				<ItemList/>

			</div>


		</div>
	</div>
    </div>
  );
}

export default App;
