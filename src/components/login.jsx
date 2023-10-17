import { Link } from "react-router-dom";

const Login = () => {
    return (  
        
        <div className="loginContainer">
            <h1>Connexion</h1>
            <form className="myForm">
                <input type="text" placeholder="Nom d'utilisateur" />
                <input type="password" placeholder="Mot de passe" />
                <input type="submit" value="Se connecter" />
            </form>
            <p  style={{textAlign : 'center', fontSize: '1.5rem'}} className="message">Pas encore inscrit ? <Link className="link" to={"/register"}>Créer un compte</Link></p>
        </div>
    );
}
 
export default Login;