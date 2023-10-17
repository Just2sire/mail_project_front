const Contact = ({horaire}) => {
    return (  
        <section class="contact" id="contact">

            <h1 class="heading"> 
                Nous<span> contacter</span>
            </h1>

            <div class="row">

                <div class="box-container">

                    <div class="box">
                        <h3>contact info</h3>
                        <p> <span class="fas fa-map"></span> Lomé-Togo </p>
                        <p> <span class="fas fa-envelope"></span> kossidesre@gmail.com </p>
                        <p> <span class="fas fa-phone"></span> +228 96209717</p>
                    </div>

                    <div class="box">
                        <h3>Heures d'ouverture</h3>
                        {
                            horaire ?
                            horaire.map(({day, hour}, id) => (
                                <p> 
                                    <span> {day} : </span> {hour}
                                </p>
                            )) : <h3 style={{ textAlign: 'center' }}>Loading...</h3>
                        }                   
                    </div>

                </div>

                <form action="">
                    <h3>Nous envoyer un message</h3>
                    <input type="text" placeholder="Nom..." class="input-box" required />
                    <input type="email" placeholder="Mail..." class="input-box" required />
                    <input type="number" placeholder="Numéro..." class="input-box" required />
                    <input type="text" placeholder="Sujet..." class="input-box" required />
                    <textarea name="" placeholder="Message..." class="input-box" required id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Envoyer" class="btn" />
                </form>

            </div>

        </section>
    );
}
 
export default Contact;