export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Políticas macroeconómicas y contexto global',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Políticas monetarias, fiscales y comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Política monetaria',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Política fiscal',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Política comercial',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Zevallos Avilés, G. (2016). Macroeconomía fundamental I. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://ellibro.net/es/lc/tecnologicadeloriente/titulos/49174',
    },
    {
      referencia:
        'Tavera Camacho, I. (2020). Panorámica de la macroeconomía. Grupo Editorial Éxodo.',
      link: 'https://ellibro.net/es/lc/tecnologicadeloriente/titulos/130333',
    },
    {
      referencia:
        'Rozo, M. (2006). El papel del gobierno en la política fiscal.',
      link:
        'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/guia3_el_papel_del_gobierno.pdf',
    },
    {
      referencia:
        'Sánchez Campillo, J. (2015). Macroeconomía: cuestiones y ejercicios. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://ellibro.net/es/lc/tecnologicadeloriente/titulos/49019',
    },
    {
      referencia:
        'Eggers, F. G. (2016). Elementos de micro y macroeconomía. Editorial Maipue.',
      link: 'https://ellibro.net/es/lc/tecnologicadeloriente/titulos/77331',
    },
    {
      referencia:
        'Organización de los Estados Americanos. (s.f.). Impacto de la globalización en las economías.',
      link: 'https://www.oas.org/dsd/publications/unit/oea33s/ch32.htm',
    },
    {
      referencia:
        'Torres Chacón, J. (2016). Apuntes de macroeconomía avanzada. Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga.',
      link: 'https://ellibro.net/es/lc/tecnologicadeloriente/titulos/60697',
    },
    {
      referencia:
        'Rodríguez Galván, J. Y. (2023). Macroeconomía: teoría y ejercicios. Grupo Editorial Éxodo.',
      link: 'https://ellibro.net/es/lc/tecnologicadeloriente/titulos/234711',
    },
  ],
  glosario: [
    {
      termino: 'Crisis de deuda',
      significado:
        'Situación en la que un país no puede cumplir con sus obligaciones financieras, como el pago de deudas externas o internas. Estas crisis pueden llevar a un incumplimiento de pagos o default.',
    },
    {
      termino: 'Crisis económica',
      significado:
        'Periodo de declive económico significativo, generalmente caracterizado por una caída en la producción, el empleo y la inversión, acompañada de una recesión económica.',
    },
    {
      termino: 'Crisis financiera',
      significado:
        'Colapso en el sistema financiero, marcado por la quiebra de bancos, la caída de los mercados bursátiles y la pérdida de confianza en las instituciones financieras.',
    },
    {
      termino: 'Devaluación',
      significado:
        'Reducción en el valor de la moneda de un país respecto a otras divisas extranjeras, que puede ser provocada por políticas gubernamentales o choques externos.',
    },
    {
      termino: 'FMI (Fondo Monetario Internacional)',
      significado:
        'Organismo internacional que promueve la cooperación monetaria global, la estabilidad financiera y el crecimiento económico. Ofrece asistencia financiera a los países en crisis económicas.',
    },
    {
      termino: 'Inflación',
      significado:
        'Aumento generalizado y sostenido de los precios de bienes y servicios en una economía, lo que reduce el poder adquisitivo de la moneda.',
    },
    {
      termino: 'Recesión',
      significado:
        'Periodo prolongado de disminución de la actividad económica, con una caída en el Producto Interno Bruto (PIB), el empleo y la inversión',
    },
    {
      termino: 'TLC (Tratado de Libre Comercio)',
      significado:
        'Acuerdo entre dos o más países para reducir o eliminar barreras arancelarias y fomentar el intercambio de bienes y servicios entre ellos.',
    },
  ],
  complementario: [],
}
