import { useState } from 'react'
import './App.css'
import TopNav from './topnav/topnav';
import Docs from './doc/doc';
import Formm from './form/form';
import Main from './main/main';

function App() {
  const [count, setCount] = useState(0)


  const [toggle, setToggle] = useState(false);

  const showModal = ()=>{
    setToggle(true);
  };

  const hideModal = ()=> setToggle(false);

  const modalToggler = ()=>{
    setToggle(toggle=> !toggle)
  };

  const stop_propagate = e=> e.stopPropagation();


  return (
    <>
        <div className="App">
      <TopNav />

      <section style={{
        display:'flex'
      }}>
        <Main />

        <article className='aaabbb'>
          <Docs showModal={showModal} modalToggler={modalToggler}/>
        </article>
      </section>
      
      { toggle ? <Formm stop_propagate={stop_propagate} hideModal={hideModal} /> : null }

    </div>
    </>
  )
}

export default App;
