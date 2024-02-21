import logo from './logo.svg';
import './App.css';

let name = "Priyanka";

    function App(){
      return(
        <>
        <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </nav>
        <div className="container">
          <h1>Hello {name}</h1>
          <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates deserunt q
            uibusdam nisi voluptatibus placeat voluptas nobis ut suscipit, quo impedit quod voluptatum dicta neque beatae quos sed earum? Maiores, autem!</h2>
        </div>

        </>
  );
}

export default App;
