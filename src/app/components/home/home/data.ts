export class Data {
  private dataInterbank: string =
    ' 1.- La etiqueta en HTML5 se utiliza para marcar el contenido principal o central de una página web. Esta etiqueta representa el área principal de contenido de la página, y generalmente contiene información que es esencial para comprender o interactuar con el sitio web. De acuerdo con las recomendaciones de accesibilidad web, cada página debe tener exactamente un elementos';
  private dataCoppel: string =
    "2.- La etiqueta en HTML5 se utiliza para marcar el contenido principal o central de una página web. Esta etiqueta representa el área principal de contenido de la página, y generalmente contiene información que es esencial para comprender o interactuar con el sitio web. De acuerdo con las recomendaciones de accesibilidad web, cada página debe tener exactamente un elemento'";
  private dataCencosud: string =
    ' 3.- La etiqueta en HTML5 se utiliza para marcar el contenido principal o central de una página web. Esta etiqueta representa el área principal de contenido de la página, y generalmente contiene información que es esencial para comprender o interactuar con el sitio web. De acuerdo con las recomendaciones de accesibilidad web, cada página debe tener exactamente un elementos';


  public resumeAbouMe = `Soy un joven autodidacta apasionado por el aprendizaje y la programación. Comencé mi viaje en el mundo de la programación a los 16 años y desde entonces he adquirido diversas habilidades y conocimientos centrados en el desarrollo de software, haciendo uso de tecnologías de diseño y programación web, entre otras. Además de mi amor por la tecnología, soy un apasionado de la música y el deporte, los cuales disfruto practicando en mis días libres`;



 private resumeCoppelArray:String[]=[
 "Colaboré en el desarrollo y mantenimiento de aplicaciones web para el banco Interbank, utilizando tecnologías como Angular, Java y base de datos SQL Server.",
 "Participé en el análisis de requisitos y diseño de soluciones técnicas para proyectos de desarrollo de software.",
 "Desarrollé y probé funcionalidades clave de aplicaciones web, asegurando su correcto funcionamiento y cumplimiento de los estándares de calidad.",
 "Trabajé en estrecha colaboración con equipos multidisciplinarios, incluyendo diseñadores, analistas de negocio y otros desarrolladores, para garantizar la entrega exitosa de proyectos."
  ]

  public objCoopel: any = {
    name: 'Coopel México',
    DateLocation: '2021-2022',
    position: 'Software Developer',
    detail: this.dataCoppel,
    resumeArray:this.resumeCoppelArray
  };

  public objInterbank: any = {
    name: 'Interbank',
    DateLocation: '2022-2023',
    position: 'Software Developer',
    detail: this.dataInterbank,
  };

  public objCencosud: any = {
    name: 'Cencosud',
    DateLocation: '2020-2021',
    position: 'Software Developer',
    detail: this.dataCencosud,
  };

  getCoppel() {
    return this.dataCoppel;
  }

  getInterbank() {
    return this.dataInterbank;
  }

  getCencosud() {
    return this.dataCencosud;
  }

  getIbk() {
    return this.objInterbank;
  }

  getLocation() {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('laitud' + latitude, 'longitud' + longitude);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
