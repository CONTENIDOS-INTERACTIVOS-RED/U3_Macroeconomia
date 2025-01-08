<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      p.mb-4 La presente unidad tiene como objetivo exponer la interacción entre las políticas macroeconómicas y el contexto global, destacando la importancia de las decisiones económicas a nivel nacional y su impacto en el desarrollo de las economías. 
      .p-4.bg-4.mb-5
        .row.align-items-center
          .col-lg
            p.mb-0 La conexión económica entre países, impulsada por la expansión de los mercados internacionales, genera desafíos como oportunidades que deben ser comprendidos para formular políticas efectivas que respondan a las necesidades del entorno actual.
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/intro/1.svg', style='max-width: 90px').mx-auto

      p.mb-4 Al finalizar esta unidad, los estudiantes habrán alcanzado el siguiente resultado de aprendizaje: #[b “Evaluar las políticas macroeconómicas y proponer estrategias para abordar los desafíos económicos globales”], lo que les permitirá desarrollar un enfoque crítico para identificar y proponer soluciones frente a los problemas macroeconómicos contemporáneos.
      p.mb-4 La unidad se estructura en tres subtemas claves: 
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/intro/2.png')
        .col-sm-12.col-lg-7
          AcordionA(tipo='b')
            div(titulo='Políticas monetarias, fiscales y comerciales')
              p.mb-0 En este subtema, los estudiantes analizarán las estrategias utilizadas por los gobiernos, así como los objetivos y las herramientas empleadas para fomentar el crecimiento económico, controlar la inflación y garantizar la estabilidad financiera.
            div(titulo='Impacto de la globalización en las economías')
              p.mb-0 Se estudiará el efecto de la integración económica mundial tanto en las economías desarrolladas como en las emergentes, y cómo estas deben adaptarse a un contexto caracterizado por el cambio constante.
            div(titulo='Crisis económicas y su gestión')
              p.mb-0 Se profundizará en las causas que originan las crisis económicas, los diferentes tipos de crisis y su impacto, así como las estrategias e innovaciones necesarias para mitigarlas y gestionarlas, de manera efectiva.
    
      p.mb-4 Al finalizar esta unidad, se espera que los estudiantes sean capaces de evaluar críticamente las políticas macroeconómicas y estudiar estrategias innovadoras para enfrentar los desafíos derivados de la globalización y las crisis económicas. El conocimiento adquirido, les permitirá interpretar fenómenos económicos, anticipar sus consecuencias y revisar soluciones viables para mejorar el bienestar económico global.
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8.bg-1
          .p-4
            p.mb-0 Este módulo invita a los estudiantes a reflexionar sobre las actividades propuestas y aprovechar al máximo la temática estudiada. Al concluir la unidad, los estudiantes habrán adquirido una comprensión teórica sólida y desarrollarán la capacidad práctica necesaria para proponer soluciones que fomenten la estabilidad y el desarrollo económico.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/intro/3.png', alt='')






</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>
