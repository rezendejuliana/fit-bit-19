import logo from './logo.svg';
import './App.css';

import ProductData from './ProductData.js';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav className={classes.TopBar}>
         <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazon Logo"></img>
       </nav>
      </header>

      <div className={classes.MainContainer}>
      <div className={classes.ProductPreview}>
      <img src="https://imgur.com/iOeUBV7.png" alt="ProductPreview"></img>
      </div>

      <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle} >{ProductData.title}</h1>
        <p className={classes.ProductDescription}>{ProductData.description}</p>
        <h3 className={classes.SectionHeading}>Select Color</h3>
        <div>
        <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} 
        src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch"  />
        <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch" />
        <img className={classes.ProductImage}  src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch" />
        <img  className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch" />
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;
