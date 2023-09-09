import React from 'react';
import './App.css'; // Import your CSS styles
import Header from './common/Header'; // Import your Header component
import Footer from './common/Footer'; // Import your Footer component
import ItemList from './items/ItemList'; // Import your ItemList component

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ItemList />
        {/* Add other components here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
