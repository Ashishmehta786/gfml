
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Navbar from './Components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const code=`print("hello")`;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  let var1=`<span class="material-symbols-outlined">expand_more
</span> `;
  const [isOpen,setOpen]=useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className={`backg1${darkMode? 'darkbackg1':''}`}>
        <div className="container">
        <span className="headcontent">Welcome to the <span className="clrchng"> simplest  </span>Machine Learning Documentation</span>
          {/* <p className="theory">Things Covered :</p>
          <div className="cover">
        <ul className="item" >
          <li>Deep Learning Framework : Tensorflow 
            (lower level apis)
          </li>
          <li>Essential Mathematics required for Deep and Machine learning</li>
        <li>Keras</li>
          <li>Numpy</li>
          <li>Pandas Basics</li>
          <li >Matplotlib,Seaborn</li>
          <li> MLops</li>
        </ul>
          </div>*/}
      
      </div>
        <div className="horizontal-line"></div>
        <div className="backg2">
        <div className="container">
        <span className="head2"> Why GraphFlow<span className="heading">.ml</span><span>  ?</span></span>
          <div className="container-item">
          <div className="ci"><div ><span className="material-symbols-outlined code">
code
</span></div><div className="item">Simple docs and code blocks which are easy to understand with good examples which give clarity about concepts</div></div><div className="ci"><div ><span className="material-symbols-outlined code ">
trending_up
</span></div><div className="item">From scratch to advanced concepts covered from starting of ANN to transformer architecture</div></div>
            <div className="ci"><div ><span className="material-symbols-outlined code">
            precision_manufacturing
            </span></div><div className="item">Production level optimization like low level apis for more performance boost</div></div>
            
            <div className="ci"><div ><span className="material-symbols-outlined code">
            psychology 
            </span></div><div className="item">Most algorithms covered like Linear, logistic regression, ANN , RNN , CNN ,  Transformer, Vision transformer</div></div>
            
          </div>
          
        </div></div>
        <div className="ts">
        <span className="tellme">Tech covered:</span><div className="techstack">
          <div >
          <div className="tsitem">
          <div onClick={toggleOpen}>Tensorflow</div><div onClick={toggleOpen}> {isOpen ? <span class="material-symbols-outlined">expand_more
</span>  : <span class="material-symbols-outlined">
expand_less
</span> } </div></div><div className={`mre${isOpen ? '':'show'}`}><span className="moore">
</span>
</div>
          <span></span></div></div></div></div></div>
        
        
  
    
  );
};

export default App;
