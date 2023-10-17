import { Link } from "react-router-dom";

const Register = () => {
    return ( 
        <div class="loginContainer">
            <h1>Inscription</h1>
            <form class="registerForm">
                <input type="text" placeholder="Nom d'utilisateur" />
                <input type="password" placeholder="Mot de passe" />
                <select>
                    <option value="" disabled selected>Choisissez votre pays</option>
                    <option value="france">France</option>
                    <option value="usa">États-Unis</option>
                    <option value="canada">Canada</option>
                </select>
                <input type="submit" value="S'inscrire" />
            </form>
            <div class="message">
            <p style={{textAlign : 'center', fontSize: '1.5rem'}} className="message">Déjà membre ? <Link className="link" to={"/login"}>Se connecter</Link></p>
            </div>
        </div>
    );
}
 
export default Register;