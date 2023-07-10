import { AiFillFacebook } from "react-icons/Ai";

export function Inicio() {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./src/img/mujer-sosteniendo-pesas-cerca-pesas.jpg"
              alt="Image 1"
              className="d-block w-100 custom-img-size img-fluid"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/img/mujer-atletica-mediana-edad-pelo-corto-haciendo-ejercicios-piernas-tiras-suspension-trx-gimnasio.jpg"
              alt="Image 2"
              className="d-block w-100 custom-img-size img-fluid"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/img/culturista-femenina-entrenando-biceps-mancuernas.jpg"
              alt="Image 3"
              className="d-block w-100 custom-img-size img-fluid"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <img
                className="img-fluid img-hover-effect"
                src="./src/img/atletico-hombre-mujer-pesas.jpg"
                alt="Imagen 1"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img
                className="img-fluid img-hover-effect"
                src="./src/img/modelo-fitness-masculino-joven-camisa-atletico-sostiene-pesa-luz-aislada-sobre-fondo-oscuro.jpg"
                alt="Imagen 2"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img
                className="img-fluid img-hover-effect"
                src="./src/img/mujer-abdominales-visibles-haciendo-fitness.jpg"
                alt="Imagen 3"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="foter">redes sociales</h1>
         <div className="icon-redes"><AiFillFacebook /></div> 
         <img src=" https://icons8.com/icon/Xy10Jcu1L2Su/instagram" alt="imagen4" />
        
         
      </div>
    </div>
  );
}
