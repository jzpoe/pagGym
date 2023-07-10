import { Link } from "react-router-dom";


export function AcercaNosotros() {
  return (
    
      <div className="about">
        <h2>Acerca de nosotros</h2>
        <p>
          En [nombre del gimnasio], nos enorgullece ofrecer un gimnasio de primera clase con una amplia variedad de máquinas y equipos para ayudarte a alcanzar tus metas de acondicionamiento físico. Nuestro objetivo es brindarte una experiencia excepcional y asequible para que puedas obtener un magnífico cuerpo y una buena salud.
        </p>
        <p>
          Contamos con un equipo de instructores altamente capacitados y amigables que estarán encantados de asesorarte y guiarte en tu viaje de acondicionamiento físico. Nuestras instalaciones están diseñadas para adaptarse a todo tipo de rutinas de entrenamiento, desde principiantes hasta atletas experimentados.
        </p>
        <p>
          En nuestro gimnasio, encontrarás una amplia gama de máquinas y equipos de última generación, incluyendo:
        </p>
        <ul>
          <li>Máquinas de cardio de última generación</li>
          <li>Pesas libres y máquinas de fuerza</li>
          <li>Zonas de entrenamiento funcional</li>
          <li>Áreas dedicadas para clases de grupo</li>
          <li>Piscina y spa</li>
          <li>Áreas de descanso y recuperación</li>
        </ul>
        <p>
          Además de nuestras excelentes instalaciones, nos enorgullece ofrecer los mejores precios del mercado. Creemos que el acceso a un gimnasio de calidad no debería ser una barrera para nadie, por lo que nos esforzamos por brindar opciones de membresía asequibles sin comprometer la calidad y el servicio.
        </p>
        <p>
          ¡Ven y únete a nuestra comunidad de entusiastas del fitness y descubre todo lo que [nombre del gimnasio] tiene para ofrecerte!
        </p>
        <div className="cta-button">
          <Link to="/contact">Contáctanos</Link>
        </div>
      </div>
    );
  }