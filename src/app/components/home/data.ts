/* eslint-disable */
export class Data {
  private dataInterbank: string =
    ' 1.- La etiqueta en HTML5 se utiliza para marcar el contenido principal o central de una página web. Esta etiqueta representa el área principal de contenido de la página, y generalmente contiene información que es esencial para comprender o interactuar con el sitio web. De acuerdo con las recomendaciones de accesibilidad web, cada página debe tener exactamente un elementos';
  private dataCoppel: string =
    "2.- La etiqueta en HTML5 se utiliza para marcar el contenido principal o central de una página web. Esta etiqueta representa el área principal de contenido de la página, y generalmente contiene información que es esencial para comprender o interactuar con el sitio web. De acuerdo con las recomendaciones de accesibilidad web, cada página debe tener exactamente un elemento'";
  private dataCencosud: string =
    ' 3.- La etiqueta en HTML5 se utiliza para marcar el contenido principal o central de una página web. Esta etiqueta representa el área principal de contenido de la página, y generalmente contiene información que es esencial para comprender o interactuar con el sitio web. De acuerdo con las recomendaciones de accesibilidad web, cada página debe tener exactamente un elementos';


  public resumeAbouMe = `Soy un joven autodidacta apasionado por el aprendizaje y la programación. Comencé mi viaje en el mundo de la programación a los 16 años y desde entonces he adquirido diversas habilidades y conocimientos centrados en el desarrollo de software, haciendo uso de tecnologías de diseño y programación web, entre otras. Además de mi amor por la tecnología, soy un apasionado de la música y el deporte, los cuales disfruto practicando en mis días libres`;



  private resumeCoppelArray: String[] = [
    "Como desarrollador fullstack, lideré proyectos que abarcaban tanto el backend como el frontend de la plataforma de comercio electrónico de Coppel. Utilicé tecnologías avanzadas, incluyendo Java, Spring, jQuery, Ajax y DB2, para implementar soluciones personalizadas que mejoraron la funcionalidad y la experiencia del usuario.",
    "Realicé pruebas exhaustivas de las APIs utilizando herramientas como Postman y SoapUI. Esto no solo garantizó la confiabilidad de las interfaces de programación de aplicaciones, sino que también contribuyó a la detección y resolución temprana de posibles problemas.",
    "Formé parte activa de un equipo de desarrollo ágil Scrum, participando en reuniones diarias, retrospectivas y planificación de sprints. Esta metodología ágil permitió entregas incrementales y adaptabilidad a los requisitos cambiantes.",
  ]


  private resumeInterbankArray: String[] = [
    "Colaboré en el desarrollo y mantenimiento de aplicaciones web para el banco Interbank, utilizando tecnologías como Angular, Java y base de datos SQL Server.",
    "Participé en el análisis de requisitos y diseño de soluciones técnicas para proyectos de desarrollo de software.",
    "Desarrollé y probé funcionalidades clave de aplicaciones web, asegurando su correcto funcionamiento y cumplimiento de los estándares de calidad.",
    "Trabajé en estrecha colaboración con equipos multidisciplinarios, incluyendo diseñadores, analistas de negocio y otros desarrolladores, para garantizar la entrega exitosa de proyectos."
  ]


  objIterbank: Object = { name: "Interbank", rol: "Software  Engineer", date: "" };
  objCoppeL: Object = { name: "Cooppel", rol: "Software  Engineer", date: "" };
  objAvatar: Object = { name: "Cop", rol: "Software  Engineer", date: "" };

  private detailIbk: String[] = [
    "IBK - Colaboré en el desarrollo y mantenimiento de aplicaciones web para el banco Interbank, utilizando tecnologías como Angular, Java y base de datos SQL Server.",
    "Participé en el análisis de requisitos y diseño de soluciones técnicas para proyectos de desarrollo de software.",
    "Desarrollé y probé funcionalidades clave de aplicaciones web, asegurando su correcto funcionamiento y cumplimiento de los estándares de calidad.",
    "Trabajé en estrecha colaboración con equipos multidisciplinarios, incluyendo diseñadores, analistas de negocio y otros desarrolladores, para garantizar la entrega exitosa de proyectos."
  ]

  private detailAvatar: String[] = [
    "aVATAR - Colaboré en el desarrollo y mantenimiento de aplicaciones web para el banco Interbank, utilizando tecnologías como Angular, Java y base de datos SQL Server.",
    "Participé en el análisis de requisitos y diseño de soluciones técnicas para proyectos de desarrollo de software.",
    "Desarrollé y probé funcionalidades clave de aplicaciones web, asegurando su correcto funcionamiento y cumplimiento de los estándares de calidad.",
    "Trabajé en estrecha colaboración con equipos multidisciplinarios, incluyendo diseñadores, analistas de negocio y otros desarrolladores, para garantizar la entrega exitosa de proyectos."
  ]

  private detailCoppel: String[] = [
    "Copel - Colaboré en el desarrollo y mantenimiento de aplicaciones web para el banco Interbank, utilizando tecnologías como Angular, Java y base de datos SQL Server.",
    "Participé en el análisis de requisitos y diseño de soluciones técnicas para proyectos de desarrollo de software.",
    "Desarrollé y probé funcionalidades clave de aplicaciones web, asegurando su correcto funcionamiento y cumplimiento de los estándares de calidad.",
    "Trabajé en estrecha colaboración con equipos multidisciplinarios, incluyendo diseñadores, analistas de negocio y otros desarrolladores, para garantizar la entrega exitosa de proyectos."
  ]


  private arrayEmpresas: any[] = [{ icon: "/assets/interbank.png", name: "Interbank", rol: "Software  Engineer", date: "2022-2024", detail: this.detailIbk },
  { icon: "/assets/avatar.jpg", name: "Avatar", rol: "Software  Engineer", date: "2021", detail: this.detailAvatar },
  { icon: "/assets/coppel.jpg", name: "Coppel-Mx", rol: "Software  Engineer", date: "2020", detail: this.detailCoppel }]


  ////////////////////////////////////////////////// MY SKILLS ///////////////////////////////////////////////////


  private detailDevWeb: String[] = [
    "Desarrollo web con HTML, CSS y JavaScript, JQuery, Angular",
    "Desarrollo backend con Java11, JavaEE y Spring.",
    "Desarrollo backend con Java11, JavaEE y Spring."
  ]

  private detailDataBase: String[] = [
    "Gestión de bases de datos con Oracle, MySQL, SQL Server y MongoDB.",

  ]


  private mySkills: any[] = [{ id:"DEVWEB",icon:"bi bi-terminal",name: "Desarrollo web", description: "Implementación de aplicaciones web fullstack", detail: this.detailDevWeb },
                             { id:"DEVDB",icon:"bi bi-database",name: "Implementación BD", description: "Diseño e implementación de bases de datos SQL", detail: this.detailDataBase }
  ]


  public dataSkills: any = {
    arraySkills: this.mySkills
  };


  public dataEmpresas: any = {
    arrayData: this.arrayEmpresas
  }


  public objCoopel: any = {
    name: 'Coopel México',
    DateLocation: '2021-2022',
    position: 'Software Developer',
    detail: this.dataCoppel,
    resumeArray: this.resumeCoppelArray
  };

  public objInterbank: any = {
    name: 'Interbank',
    DateLocation: '2022-2023',
    position: 'Software Developer',
    detail: this.dataInterbank,
    resumeArray: this.resumeInterbankArray
  };

  public objCencosud: any = {
    name: 'Cencosud',
    DateLocation: '2020-2021',
    position: 'Software Developer',
    detail: this.dataCencosud,
  };

///////////////////////////// MY HABILITIES //////////////////////


public webTecnologi =[
"Desarrollo web con HTML, CSS y JavaScript, JQuery, Angular",
"Desarrollo backend con Java11, JavaEE y Spring.",
"Gestión de bases de datos con Oracle, MySQL, SQL Server y MongoDB.",
"Metodología Scrum en el desarrollo de software.",
"Manejo de Herramientas de diseño y multimedia, incluyendo Figma, Photoshop y Adobe Premiere.",
"Planificación y ejecución de pruebas de aplicaciones con Postman y JMeter.",
]


  getEmpresas() {
    return this.dataEmpresas;
  }

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
