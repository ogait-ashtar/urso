

import './App.css';

function App() {
  return (
    <div className="App">
     <header class="header">
     <a href="#home"><img className="log" src="logoyoutube.png" alt="logo"></img></a>
     <nav>
        <ul class="menu">
         <li><a href="#home">HOME</a></li>
         <li><a href="#profile">MÚSICOS</a></li>
         <li><a href="#downloads">DOWNLOADS</a></li>
         <li><a href="#agenda">AGENDA</a></li>
         <li><a href="#content">CONTATO</a></li>
        </ul>
     </nav>

     </header>
<img class="cabeca" src="capasite.jpg" alt="foto da banda"></img>

<article class="conteudo">
       <br></br>
  <h1>U.R.S.O - ( UNION RESISTENSE SATÂNIC ORGY )</h1>
   <p className="article">Site Oficial do projeto U.R.S.O ( Union Resistence Satanic Orgy ), divulgando agenda de shows, venda de produtos oficiais e postagem de fotos. 
         U.R.S.O é formado por antigos músicos do Heavy Metal de Curitiba, começando com Eduardo Urso (slammer)
         nos vocais, Caos (Thou Shall Not) guitarra solo, Tiagonha (Alma Negra) guitarra solo, Zema ( slammer )
         no Baixo e Búfalo ( Over12 ) na bateria.
         Seu 1° Álbum esta marcado para final do 2° semestre de 2021.Buscando Inspiração nos antigos donos de 
         nossa TERRA MÃE BRASIL os indígenas, o álbum debut conta a incrível historia que nois foi omitida nas
         escolas em nosso país, o como foi travada a guerra entre Índios e Portugueses, com capturas de ambos os 
         lados e seus rituais de canibalismo característicos desta época passada. O álbum  conta com 10 musicas
         compostas e produzidas pela própria banda, áudios, mixagem e masterização realizados por OGAIT ASHTAR - Kafofo Studio
         em Curitiba-pr.</p>
</article>

<h2>MÚSICOS</h2>   
  
<section className="profile">
 <div>
   <img src="ursoperfil.jpg" alt="foto urso"></img>
   <p>Eduardo Urso</p>
   <p>Vocalista da velha guarda do Metal Curitibano, Eduardo Urso vem destacando-se no cénario Brasileiro
     a frente da renomada banda de Metal Velóz SLAMMER, Com apresentações nos maiores festivais do Brasil e 
     na América Latina. 
     </p>
     <a href="http://www.facebook.com">Saiba mais...</a>
   </div> 

   <div>
   <img src="tiagoperfil.jpg" alt="foto tiago"></img>
   <p>Tiagonha</p>
   <p>Guitarrista ativo em diversas bandas da cena autoral e cover de curitiba, como ALMA NEGRA, SEM FUTURO E OUTRAS
     Tiagonha vem sendo destaque além de participar como músico também aventura-se na produção musical
     assinando alguns albuns como o destaque U.R.S.O em uma produção temática. 
     </p>
     <a href="http://www.facebook.com">Saiba mais...</a>
   </div> 

   <div>
   <img src="caosperfil.jpg" alt="foto caos"></img>
   <p>Eduardo Urso</p>
   <p>Vocalista da velha guarda do Metal Curitibano, Eduardo Urso vem destacando-se no cénario Brasileiro
     a frente da renomada banda de Metal Velóz SLAMMER, Com apresentações nos maiores festivais do Brasil e 
     na América Latina. 
     </p>
     <a href="http://www.facebook.com">Saiba mais...</a>
   </div> 

   <div>
   <img src="bufaloperfil.jpg" alt="foto bufalo"></img>
   <p>Eduardo Urso</p>
   <p>Vocalista da velha guarda do Metal Curitibano, Eduardo Urso vem destacando-se no cénario Brasileiro
     a frente da renomada banda de Metal Velóz SLAMMER, Com apresentações nos maiores festivais do Brasil e 
     na América Latina. 
     </p>
     <a href="http://www.facebook.com">Saiba mais...</a>
   </div> 

   <div>
   <img src="zeperfil.jpg" alt="foto zema"></img>
   <p>Eduardo Urso</p>
   <p>Vocalista da velha guarda do Metal Curitibano, Eduardo Urso vem destacando-se no cénario Brasileiro
     a frente da renomada banda de Metal Velóz SLAMMER, Com apresentações nos maiores festivais do Brasil e 
     na América Latina. 
     </p>
     <a href="http://www.facebook.com">Saiba mais...</a>
   </div> 

   </section>

   <h2>Faça seu Download</h2>
<section className="downloads">
   
<div> 
  <img src="logoyoutube.png" alt="foto logo"></img>
  <p id="cor"><a href="indio.mp3" target="_blank">U.R.S.O - IUKA CARI</a></p>
  </div>
  
  <div>
  <img src="logoyoutube.png" alt="foto logo"></img>
  <p><a href="indio.mp3" target="_blank">U.R.S.O - Spirit at War</a></p>
  </div>

  <div>
  <img src="logoyoutube.png" alt="foto logo"></img>
  <p><a href="indio.mp3" target="_blank">U.R.S.O - Caos</a></p>
  </div>

  
</section>

<section className="agenda">
<h2>Agenda de Shows</h2>
<p className="show">Ainda Nada, Mais vai rolar</p>
</section>

<section className="content">
  <div className="contato">
  <h2>FORMULÁRIO DE CONTATO</h2>
  <form className="form" method="POST" action="./email.php">
    <input className="field" name="Nome" placeholder="Nome"></input>
    <input className="field" name="email" placeholder="E-mail"></input>
    <textarea className="field" name="mesage" placeholder="Digitte sua mensagem aqui"></textarea>
    <input type="submit" value="Enviar"></input>
  </form>
    
  </div>
  
</section>

<footer className="pe">
  <p className="pe">Direitos Reservados Ogait Ashtar 2021</p>
  </footer>
    </div>
    
  );
}

export default App;
