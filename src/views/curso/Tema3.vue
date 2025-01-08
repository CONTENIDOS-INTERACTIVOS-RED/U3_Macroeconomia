<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Crisis económicas y su gestión'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade-up") Las crisis económicas son eventos cíclicos que han afectado a las economías de todo el mundo a lo largo de la historia. Estas situaciones se caracterizan por un colapso significativo en el sistema económico, que puede manifestarse en diversas formas, desde recesiones y depresiones económicas, hasta crisis financieras y de deuda. 
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/1.png', alt='')
      .col-sm-12.col-lg-8.bg-10
        .p-4
          p.mb-0 Las crisis tienen un impacto considerable en la vida de las personas, en las políticas públicas y en la estabilidad de los sistemas económicos internacionales. Son fenómenos complejos que pueden surgir por una variedad de factores, incluyendo políticas económicas inapropiadas, desequilibrios financieros, shocks externos o incluso desastres naturales.

    p.mb-5(data-aos="fade-up") El análisis de las crisis económicas, sus tipos, sus causas y los métodos para gestionarlas, es crucial para comprender cómo los gobiernos, las organizaciones internacionales y las empresas, pueden mitigar sus efectos y, en última instancia, evitar que se repitan en el futuro. En este contexto, el Fondo Monetario Internacional (FMI), el Banco Mundial y otros organismos internacionales juegan un papel fundamental en la formulación de políticas y estrategias para la gestión de crisis a nivel global.
    #t_3_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.1] Concepto de crisis económica
    p.mb-4(data-aos="fade-up") Una crisis económica puede definirse como un período de declive significativo en la actividad económica de un país o región. Este colapso se manifiesta en una caída de la producción, el empleo, el comercio y las inversiones, lo que genera un ambiente de incertidumbre, pérdida de confianza y un aumento de la pobreza. 
    .p-4.bg-7.mb-5(data-aos="fade-up")
      .row.align-items-center
        .col-lg
          p.mb-0 Las crisis pueden ser desencadenadas por una variedad de factores, como la mala gestión económica, el colapso del sistema financiero, o incluso crisis políticas o sociales que afectan el funcionamiento del mercado.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t3/2.svg', style='max-width: 90px').mx-auto

    p.mb-4(data-aos="fade-up") Conozcamos algunos ejemplos históricos de crisis económicas internacionales:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/3.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='La Gran Depresión (1929-1939)') 
            p La Gran Depresión es probablemente la crisis económica más conocida en la historia del capitalismo. Comenzó con la caída de la Bolsa de Valores de Nueva York en octubre de 1929, y rápidamente se propagó a otras partes del mundo. Los efectos fueron devastadores: el desempleo alcanzó cifras récord, la producción industrial se desplomó y miles de bancos colapsaron. Esta crisis se extendió por casi una década, provocando una grave recesión global y alterando por completo el sistema económico mundial. A raíz de esta crisis, se implementaron reformas económicas significativas, incluidas políticas keynesianas, que buscaban estabilizar las economías mediante la intervención del Estado.

          div(numero='2' titulo='Crisis del Petróleo (1973-1974)') 
            p A raíz del embargo petrolero impuesto por los países árabes de la OPEP (Organización de Países Exportadores de Petróleo), los precios del petróleo aumentaron drásticamente en 1973, lo que desestabilizó las economías industriales. El aumento en los costos del petróleo afectó a sectores claves como el transporte, la producción y la manufactura. Los países occidentales, que dependían en gran medida de las importaciones de petróleo, experimentaron una alta inflación y un estancamiento económico. Esta crisis se combinó con una alta tasa de desempleo, un fenómeno conocido como estanflación.

          div(numero='3' titulo='Crisis Financiera Asiática (1997-1998)')
            p Esta crisis comenzó en Tailandia, cuando el baht tailandés sufrió una devaluación significativa debido a la falta de confianza en la política fiscal y la acumulación de deuda externa. A partir de ahí, se extendió a otros países asiáticos como Indonesia, Malasia, Corea del Sur y Filipinas. La crisis fue desencadenada por una combinación de una elevada deuda externa, políticas económicas inadecuadas y una excesiva dependencia de los inversores extranjeros. Los efectos fueron devastadores, con caídas en las bolsas, una drástica reducción de los precios de los activos, y un colapso en las monedas locales.

          div(numero='4' titulo='Crisis Financiera Global del 2008')
            p La crisis financiera global del 2008, es una de las más recientes y una de las más devastadoras para las economías globales. Fue causada por el colapso del mercado de hipotecas subprime en Estados Unidos, lo que generó un efecto dominó en los mercados financieros internacionales. Bancos e instituciones financieras globales, como Lehman Brothers, colapsaron, y los gobiernos de todo el mundo tuvieron que intervenir con paquetes de rescate masivos. La crisis resultó en una profunda recesión económica global, con altos niveles de desempleo, caída de la producción y estancamiento en el crecimiento económico.

         
    #t_3_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.2] Tipos de crisis económicas
    p.mb-4(data-aos="fade-up") Las crisis económicas pueden clasificarse de diversas formas, dependiendo de sus causas y las áreas de la economía que afectan. A continuación, se describen los principales tipos de crisis económicas:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Crisis financieras
              p.mb-4 Las crisis financieras ocurren cuando los sistemas bancarios y los mercados de capital colapsan, debido a la insolvencia de bancos o a la caída de activos financieros. Estas crisis suelen estar vinculadas a la especulación financiera excesiva, la acumulación de deudas impagables y la falta de regulación.
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 #[strong Causas.] Exceso de deuda, especulación, falta de supervisión regulatoria.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 #[strong Consecuencias.] Quiebras bancarias, pérdida de valor de los activos, crisis de liquidez.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/4.png', alt='Imagen representativa de crisis financiera')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Crisis de deuda
              p.mb-4 Las crisis de deuda ocurren cuando un país o una empresa no puede pagar sus obligaciones financieras. Este tipo de crisis puede ser interna (como la crisis de deuda soberana de Grecia) o externa (como la crisis de deuda de América Latina en los años 80). Cuando los gobiernos o empresas se endeudan excesivamente, a menudo en moneda extranjera, y no pueden hacer frente a sus pagos, la crisis se desencadena.
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 #[strong Causas.] Excesivo endeudamiento público o privado, políticas fiscales inadecuadas, volatilidad de los tipos de cambio.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 #[strong Consecuencias.] Austeridad fiscal, recesión económica, pérdidas para los inversores.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/5.png', alt='Imagen representativa de crisis de deuda')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Crisis económicas causadas por factores externos
              p.mb-4 Este tipo de crisis ocurre cuando factores externos, como un aumento inesperado de los precios de las materias primas, guerras o desastres naturales, afectan de forma negativa la economía de un país. Un ejemplo de este tipo de crisis es la Crisis del Petróleo de 1973, donde el aumento de los precios del petróleo afectó a las economías mundiales.
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 #[strong Causas.] Aumento de precios de insumos claves, shocks geopolíticos, desastres naturales.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 #[strong Consecuencias.] Aumento de costos de producción, inflación, caída de la inversión.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/6.png', alt='Imagen representativa de crisis por factores externos')
          
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Crisis de inestabilidad macroeconómica
              p.mb-4 Este tipo de crisis incluye situaciones en las que las economías sufren un colapso debido a desequilibrios macroeconómicos internos, como alta inflación, alto desempleo y desequilibrios fiscales. 
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 #[strong Causas.] Políticas fiscales y monetarias irresponsables, déficit público elevado, inestabilidad política.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 #[strong Consecuencias.] Pérdida de valor de la moneda, aumento del desempleo, caída de la confianza en la economía.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/7.png', alt='Imagen representativa de crisis por factores externos')


    #t_3_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.3] Gestión de las crisis económicas (efectos y desafíos)
    p.mb-4(data-aos="fade-up") La gestión de una crisis económica requiere un enfoque coordinado y bien estructurado tanto a nivel nacional como internacional. Las medidas adoptadas dependen de la naturaleza de la crisis, pero en general, la intervención estatal, los programas de rescate y las reformas estructurales son fundamentales para la estabilización económica.
    p.mb-4(data-aos="fade-up") Las estrategias comunes para la gestión de crisis, son:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/8.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Políticas monetarias expansivas') 
            p.mb-0 En momentos de crisis, los bancos centrales suelen adoptar políticas monetarias expansivas, que incluyen la reducción de las tasas de interés y la inyección de liquidez en el sistema bancario. Esto se hizo, por ejemplo, durante la Crisis Financiera Global del 2008, cuando la Reserva Federal de EE.UU. recortó las tasas de interés y comenzó un programa de flexibilización cuantitativa.

          div(numero='2' titulo='Programas de rescate y estímulo fiscal') 
            p.mb-0 Los gobiernos suelen implementar paquetes de estímulo económico para aumentar la demanda agregada y estabilizar la economía. En la crisis del 2008, se implementaron planes de rescate como el TARP (Troubled Asset Relief Program) en los Estados Unidos, que consistió en inyecciones de capital a bancos y empresas automotrices.

          div(numero='3' titulo='Reformas estructurales y ajustes fiscales') 
            p.mb-0 En algunos casos, especialmente en países con crisis de deuda, se implementan reformas estructurales bajo la supervisión de organismos como el FMI. Estas reformas incluyen la privatización de empresas estatales, la reforma del sistema fiscal y la liberalización del mercado laboral.

    h2.mb-3(data-aos="fade-up") Desafíos en la gestión de crisis
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        p.mb-4 La gestión de una crisis económica no está exenta de desafíos. Uno de los mayores problemas es la falta de confianza. Las crisis, con frecuencia desestabilizan las expectativas de los consumidores y las empresas, lo que dificulta la recuperación económica. Otro desafío es la coordinación internacional, especialmente cuando las crisis tienen dimensiones globales, como la Crisis Financiera Global del 2008, que requirió una intervención coordinada de múltiples gobiernos y organismos internacionales.
        .bg-9.p-4.mb-4
          p.mb-0 En última instancia, las crisis económicas son un recordatorio de la interconexión global y de la importancia de mantener sistemas económicos resilientes y sostenibles. 
        p.mb-0 La experiencia de estas crisis debería servir como base para evitar futuros colapsos y para mejorar las políticas económicas tanto a nivel nacional como internacional, promoviendo una mayor estabilidad, cooperación y crecimiento económico a largo plazo.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/9.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://datos.bancomundial.org/indicador' target='_blank' rel='noopener noreferrer') Banco mundial. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://www.perplexity.ai/' target='_blank' rel='noopener noreferrer') Perplexity. 
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/9yWam8pPE9c?si=FGmkD08aEVE1tZxR' target='_blank' rel='noopener noreferrer') History Latinoamérica. (2020). 20 AÑOS DE HISTORIA – 2008, se cae la economía (video). YouTube. 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


    .bg-full-width.border-top.actividad.ctn-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario='cuestionario'/>




</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Crisis económicas y su gestión',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de la política monetaria bien gestionada?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La estabilidad macroeconómica y control de precios',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El aumento de las exportaciones',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La reducción de la deuda pública',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El control del tipo de cambio',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La estabilidad macroeconómica y el control de precios son fundamentales para una política monetaria efectiva.',
          mensaje_incorrecto:
            'No es correcto. Revisa los objetivos principales de la política monetaria.',
        },
        {
          id: 2,
          texto:
            'Durante la crisis financiera asiática de 1997-1998, ¿dónde se originó inicialmente la crisis?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indonesia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tailandia',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Malasia',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Corea del Sur',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La crisis asiática comenzó en Tailandia con la devaluación del baht tailandés.',
          mensaje_incorrecto:
            'No es correcto. La crisis asiática se originó en Tailandia.',
        },
        {
          id: 3,
          texto:
            '¿Qué porcentaje aproximado del comercio global de mercancías se transporta por mar?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '70%',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '80%',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '90%',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '95%',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Aproximadamente el 90% del comercio global se realiza por vía marítima.',
          mensaje_incorrecto: 'No es correcto. El porcentaje es del 90%.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes NO es un tipo principal de crisis económica?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crisis financiera',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crisis de deuda',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crisis tecnológica',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Crisis de inestabilidad macroeconómica',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La crisis tecnológica no es uno de los tipos principales de crisis económica.',
          mensaje_incorrecto:
            'No es correcto. La crisis tecnológica no es un tipo principal de crisis económica.',
        },
        {
          id: 5,
          texto:
            'En el contexto de política fiscal, ¿qué medida suelen implementar los gobiernos durante una crisis?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar las tasas de interés',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Programas de estímulo económico',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el gasto público',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar los impuestos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los programas de estímulo económico son una medida común durante las crisis.',
          mensaje_incorrecto:
            'No es correcto. Los gobiernos suelen implementar programas de estímulo económico.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Has demostrado un buen entendimiento de las crisis económicas y su gestión.',
      mensaje_final_reprobado:
        'Te recomendamos repasar el contenido sobre crisis económicas y sus diferentes aspectos.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
