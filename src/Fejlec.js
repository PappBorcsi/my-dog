import Animals from './Animals'
import './Fejlec.css';


export default function Fejlec({ children }) {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./footer.png" />
        </div>    

        <ul className="nav-menu">
          
          <img src="./adoption.png" />
          <li><a href="#">Adoption</a></li>

          <img src="./donation.png" />
          <li><a href="#">Donation</a></li>
          <img src="./addPet.png" />
          <li><a href="#">Add pet</a></li>
          <img src="./favorites.png" />
          <li><a href="#">Favorites</a></li>
          <img src="./messages.png" />
          <li><a href="#">Messages</a></li>
          <img src="./ember.png" />
          <li><a href="#">Profile</a></li>
          <img src="./settings.png" />
          <li><a href="#">Settings | Log out</a></li>
        </ul>
      </nav>
    </div>
  )
}

/*
        <div className="cart-area">
          <span className="nav-icon">
            <img src="./img/search.svg" alt="kereseslogo" />
            <span className="cart-text">Keresés</span>
          </span>

          <span className="nav-icon">
            <img src="./img/adoption.png" alt="kosar" />
            <span className="crat-text">Kosár (0)</span>
          </span>
        </div>*/




/*
  return <div>
    {children}
    <footer className='footer'>

      <section className='selectionFooter'>
        <div className="container">

          <div className='item'>
             
            <img src='./img/adoption.png' alt='adopt'></img>
            <a href='#'>Adoption</a>
          </div>

          <div className='item'>
            <a href='#'>Donation</a>
          
          </div>

          <div className='item'>
            <a href='#'>Add_pet</a>
           
          
          </div>

          <div  className='item'>
            <a href='#' >Favorites</a>
          </div>

          <div  className='item'>
            <a href='#'>Messages</a>
          
          </div>

          <div  className='item'>
            <a href='#'>Profile</a>
          
          </div>

          <div  className='item' >
            <a href='#'> Settings|Logout</a>
         
          </div>
        </div>
      </section>
      
    </footer>
     
    </div>;
}

*/