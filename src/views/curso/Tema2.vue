<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Modelo de oferta y demanda agregada'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/1.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-0 El modelo de oferta y demanda agregada es una herramienta de aplicación en la macroeconomía, utilizada para analizar las fluctuaciones de la economía a corto plazo, tales como la producción y los precios. Este modelo permite comprender las fases recesivas y expansivas que atraviesa una economía dentro de su tendencia de crecimiento a largo plazo. Asimismo, facilita el análisis de los efectos de las políticas macroeconómicas, como las políticas monetaria y fiscal. En este modelo se integran las perspectivas de las teorías clásica y keynesiana para evaluar la efectividad de estas políticas, a través de supuestos sobre la flexibilidad de los precios y los salarios. La interpretación del modelo y las conclusiones varían según los supuestos utilizados, lo que influye directamente en el tipo de políticas económicas que se consideran eficaces en diferentes contextos.
   
    #t_2_1.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.1] Visión amplia de la microeconomía y la macroeconomía
    .bg-7.mb-5(data-aos='fade-up')
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Oferta agregada (OA), se refiere a la cantidad total de bienes y servicios que las empresas están dispuestas y son capaces de producir en una economía a diferentes niveles de precios, en un período determinado. Esta curva generalmente tiene una pendiente positiva, lo que implica que, cuando los precios suben, las empresas tienden a producir más, ya que obtienen mayores ingresos y pueden cubrir los costos de producción más altos.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/2.png', alt='')
    .titulo-figura.mb-2(data-aos='fade-up')
      h5 Figura 3. 
      span Oferta agregada
    .row.justify-content-center.mb-5
       .col-sm-12.col-lg-3
         figure(data-aos='fade-up').mb-5
           img(src='@/assets/curso/t2/3.svg', alt='').mb-0

    p.mb-4(data-aos='fade-up') Por otro lado, la demanda agregada (DA), es la cantidad total de bienes y servicios que los hogares, las empresas, el gobierno y el sector exterior, desean comprar a diferentes niveles de precios. 
    p.mb-4(data-aos='fade-up') La curva de demanda agregada tiene una pendiente negativa, lo que refleja que, a medida que los precios bajan, la cantidad demandada de bienes y servicios aumenta. Esta relación inversa entre el precio y la cantidad demandada se explica por diversos factores, como el efecto riqueza y el efecto tipo de interés (Sánchez Campillo, 2015).
    .titulo-figura.mb-2(data-aos='fade-up')
      h5 Figura 4. 
      span Demanda agregada
    .row.justify-content-center.mb-5
       .col-sm-12.col-lg-3
         figure(data-aos='fade-up').mb-5
           img(src='@/assets/curso/t2/4.svg', alt='').mb-0


    #t_2_2.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.2] Funcionamiento del modelo

    p.mb-4(data-aos='fade-up') En este modelo, el equilibrio se alcanza cuando la oferta agregada es igual a la demanda agregada, es decir, cuando la cantidad de bienes y servicios que las empresas están dispuestas a producir, coincide con la cantidad que los consumidores y el resto de los actores económicos desean comprar. Este punto de equilibrio determina el nivel de producción y los precios, en una economía.
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        .titulo-figura.mb-2
          h5 Figura 5. 
          span Equilibrio en la oferta y la demanda agregada
        figure(data-aos='fade-up').mb-5
           img(src='@/assets/curso/t2/5.svg', alt='').mb-0
    p.mb-4(data-aos='fade-up') El funcionamiento del modelo varía, según los supuestos utilizados, como se presenta a continuación:
    TabsC.color-terciario.mb-5(data-aos='fade-up')
      .py-4.py-md-5.bg-11.p-5(titulo="Modelo clásico")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/6.png')
          .col-sm-12.col-lg-8
            h4 Modelo clásico
            p.mb-0 En el modelo clásico, se supone que los mercados de bienes, servicios y factores productivos, son perfectamente competitivos y que los precios y salarios son completamente flexibles. Esto implica que la economía siempre se encuentra en un estado de pleno empleo, dado que cualquier desajuste en el mercado laboral o de bienes, es rápidamente corregido por los ajustes de precios y salarios. En este contexto, un aumento en la oferta monetaria, por ejemplo, no tendría efectos a largo plazo sobre la producción, puesto que el nivel de producción está determinado por los factores de producción disponibles (trabajo y capital), no por la cantidad de dinero en circulación; en contraste.

      .py-4.py-md-5.bg-11.p-5(titulo="Modelo keynesiano")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/7.png')
          .col-sm-12.col-lg-8
            h4 Modelo keynesiano
            p.mb-0 En el modelo keynesiano asume que los precios y salarios son rígidos a corto plazo, lo que puede dar lugar a situaciones de desempleo involuntario y producción inferior a su potencial. Bajo estos supuestos, las políticas monetarias y fiscales, pueden ser efectivas para estimular la economía, aumentando la demanda agregada y reduciendo el desempleo. En el modelo keynesiano, las fluctuaciones económicas son vistas como un resultado de insuficiencia en la demanda agregada, lo que puede ser corregido, mediante la intervención del gobierno o de la autoridad monetaria (Sánchez Campillo, 2015).

    .titulo-figura.mb-4
      h5 Figura 6. 
      span Comparativo de modelo clásico y keynesiano
    .row.justify-content-center.mb-5
       .col-sm-12.col-lg-6
         figure(data-aos='fade-up').mb-5
           img(src='@/assets/curso/t2/8.svg', alt='').mb-0

    #t_2_3.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.3] Factores que desplazan la curva de oferta y demanda agregada
    p.mb-4(data-aos='fade-up') El modelo de oferta y demanda agregada es clave para comprender cómo interactúan los factores económicos que determinan la producción y los precios. Este análisis permite evaluar el impacto de las políticas públicas y los cambios en el comportamiento de los agentes económicos.
    .bg-full-width.bg-3.mb-5(data-aos='fade-up')
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Factores que desplazan la curva de oferta y demanda agregada
             p.mb-4 En el análisis macroeconómico, el modelo de oferta y demanda agregada se presenta como una herramienta esencial para comprender las dinámicas de producción, precios y políticas económicas en una economía. Este modelo no solo facilita el entendimiento del equilibrio entre oferta y demanda, sino que también permite explorar cómo diversos factores, internos y externos, influyen en la actividad económica, impactando variables clave como la inflación, el empleo y el crecimiento. Este recurso teórico se convierte en un marco valioso para analizar las respuestas de los mercados frente a cambios en las políticas fiscales y monetarias, así como para prever las fluctuaciones económicas. En el PDF #[b Factores que desplazan la curva de oferta y demanda agregada], se profundizará en los factores que desplazan estas curvas, destacando su impacto en la economía y su relevancia en el diseño de políticas públicas.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/factores.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Factores que desplazan la curva de oferta y demanda agregada
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t2/9.svg', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style='{"max-width":"16px"}')
              a(href='https://core.ac.uk/download/pdf/235852065.pdf' target='_blank' rel='noopener noreferrer') Orjuela Arfunduaga, H. M. (2014). Una metodología de enseñanza de la teoría económica, aplicada al Modelo Macroeconómico de Oferta y Demanda Agregada.

            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.imf.org/es/Home' target='_blank' rel='noopener noreferrer') Fondo Monetario Internacional

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.coursehero.com/' target='_blank' rel='noopener noreferrer') CourseHero 
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/yblQRM7BGc?si=zDfccDci3cl-Fs28' target='_blank' rel='noopener noreferrer') SoloPapelyBoli. (2023). 2.1 Cálculo del PIB (video). YouTube.
 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
