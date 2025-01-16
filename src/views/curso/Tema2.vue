<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Impacto de la globalización en las economías'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/1.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-4 La transición del comercio internacional al comercio global, ha sido uno de los desarrollos más significativos en la historia económica reciente. 
        p.mb-4 Este proceso de globalización se puede comparar con el paso de un modelo autárquico a un modelo de apertura comercial, como ocurrió en los siglos pasados. El comercio internacional, en sus primeras etapas, consistió principalmente en el intercambio de productos como especias, metales preciosos y piedras, impulsado por el transporte de mercancías y la presencia de mercaderes. 
        p.mb-0 Sin embargo, fue la Revolución Industrial la que marcó un cambio fundamental, pues con la invención del motor a vapor y la expansión de los medios de transporte y producción masiva, el comercio adquirió una escala continental e incluso intercontinental.
    .bg-1.p-4.mb-4(data-aos='fade-up')
      p.mb-0 Este salto tecnológico transformó no solo las estructuras económicas de los países, sino también sus sistemas de producción, las relaciones políticas, sociales y culturales entre las naciones. 

    p.mb-4(data-aos='fade-up') Es entonces como, el comercio internacional, dio lugar a mercados globales conectados, donde la especialización en sectores con ventajas comparativas, se convirtió en un principio fundamental de la economía global. Bajo esta lógica, cada nación se ha especializado en la producción de bienes y servicios en los que tiene una ventaja competitiva, lo que a su vez genera una interdependencia económica creciente entre los países.
    .p-4.bg-12.mb-5(data-aos='fade-up')
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t2/2.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 En este contexto, las naciones se centran en la producción interna, y cada vez están más integradas en un sistema económico global donde las decisiones de producción y distribución, están vinculadas a los mercados internacionales. 
    p.mb-4(data-aos='fade-up') La globalización económica, ha transformado profundamente las dinámicas de la economía mundial, abriendo nuevas oportunidades y desafíos para todos los actores involucrados.
    #t_2_1.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.1] Del comercio internacional al comercio global
    p.mb-4(data-aos='fade-up') El comercio internacional ha evolucionado significativamente con la globalización, transformándose en un sistema de comercio global que integra mercados, cadenas de suministro y capitales a nivel internacional.
    .bg-full-width.bg-4.mb-5(data-aos='fade-up')
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Del comercio internacional al comercio global 
             p.mb-4 En el PDF #[b Del comercio internacional al comercio global], se exploran los cambios históricos, desde la eliminación de barreras comerciales hasta la integración de economías emergentes, analizando cómo estos procesos han configurado la competitividad mundial y las redes de producción y consumo globalizadas.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/comercio_internacional_al_comercio_global.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Del comercio internacional al comercio global 
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t2/3.png', alt='')

    #t_2_2.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.2] Competitividad internacional: globalización de mercados financieros y de mano de obra
    p.mb-4(data-aos='fade-up') Para conocer sobre la temática, lo invitamos a escuchar el siguiente pódcast.
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-6
        TarjetaAudio.color-primario.mb-3(
          texto="Competitividad internacional: globalización de mercados financieros y de mano de obra"
          :audio="require('../../assets/componentes/audios/competitividad_internacional.mp3')"
        )

    #t_2_3.titulo-segundo(data-aos='fade-up')
      h2 #[span 2.3] Principales rutas comerciales en el mundo y principales grupos y productos que se comercian
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/4.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-0 El comercio internacional se ha transformado significativamente en las últimas décadas, debido a la globalización y al desarrollo de infraestructuras logísticas más eficientes. Las rutas comerciales han evolucionado y se han diversificado, creando un robusto sistema global de intercambio de bienes y servicios entre los países. Este proceso se ha visto facilitado por el avance de la tecnología de transporte, la mejora de la infraestructura portuaria y la liberalización del comercio a través de acuerdos internacionales.

    h2.mb-3(data-aos='fade-up') Principales rutas comerciales marítimas
    p.mb-5(data-aos='fade-up') Las rutas comerciales marítimas, son las arterias más importantes del comercio internacional, dado que aproximadamente el 90 % del comercio global de mercancías, se transporta por mar. Estas rutas conectan los principales centros económicos del mundo y permiten el traslado de productos a gran escala. Las principales rutas comerciales marítimas, son:
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Ruta del Pacífico')
            p.mb-0 Es una de las más vitales, conectando Asia con América del Norte y del Sur. Los puertos más relevantes son Shanghai (China), Los Angeles (EE.UU.), Vancouver (Canadá) y Sidney (Australia). China, en particular, es un actor dominante en esta ruta, porque es el mayor exportador mundial y un centro clave de manufactura.
          div(titulo='Ruta del Atlántico')
            p.mb-0 Conecta a Europa con América y África. Los puertos principales incluyen Rotterdam (Países Bajos), Hamburgo (Alemania), Barcelona (España), Miami (EE.UU.) y Santos (Brasil). Esta ruta es esencial para el comercio de bienes manufacturados, productos agrícolas y petróleo.
          div(titulo='Ruta del Mar del Norte y Báltico')
            p.mb-0 Esta ruta conecta a los países del norte de Europa, como Suecia, Noruega, Finlandia y Rusia, con el resto del mundo. Además de productos industriales, el petróleo y el gas natural desempeñan un papel clave en esta ruta, especialmente de Rusia hacia Europa y Asia.
          div(titulo='Ruta del Canal de Suez')
            p.mb-0 Conectando el Mar Mediterráneo con el Mar Rojo, esta ruta es crucial para el comercio entre Europa, Asia y África. El Canal de Suez permite una ruta más corta entre el Mediterráneo y el Océano Índico, evitando la necesidad de rodear el continente africano. Esta ruta es clave para el comercio de petróleo, productos electrónicos y maquinaria pesada.
          div(titulo='Ruta del Canal de Panamá')
            p.mb-0 Al igual que el Canal de Suez, el Canal de Panamá es crucial para el comercio entre los océanos Pacífico y Atlántico. Permite una ruta más corta para los buques que van de la costa oeste de América a Europa o Asia, facilitando el comercio de productos como alimentos procesados, maquinaria y productos electrónicos.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/5.png')


    h2.mb-3(data-aos='fade-up') Grupos comerciales y bloques económicos globales
    p.mb-5(data-aos='fade-up') La cooperación entre países, mediante bloques comerciales, es otro factor que ha favorecido el crecimiento del comercio internacional. Estos acuerdos reducen barreras arancelarias, facilitan el flujo de bienes, y abren oportunidades para sectores específicos. Los principales bloques comerciales incluyen:
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/6.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Unión Europea (UE)')
            p.mb-0 Uno de los bloques más importantes, la UE agrupa a 27 países de Europa, siendo Alemania, Italia y Francia, los mayores socios comerciales. La UE es conocida por su mercado único y la libre circulación de bienes, personas y capitales. Los productos más intercambiados dentro de la UE son los vehículos, productos farmacéuticos, maquinaria y equipo industrial.
          div(titulo='Mercado Común del Sur (Mercosur)')
            p.mb-0 Compuesto por países de América del Sur como Brasil, Argentina, Paraguay, Uruguay y Venezuela (en observación), el Mercosur facilita el comercio de productos agrícolas, soja, carne y minerales. Con su enfoque en la integración económica regional, este bloque busca aumentar el comercio entre los países miembros y con mercados externos.
          div(titulo='Tratado de Libre Comercio de América del Norte (TLCAN/T-MEC)')
            p.mb-0 Este acuerdo, que actualmente incluye a Canadá, México y Estados Unidos, forma uno de los bloques comerciales más poderosos del mundo. Los productos más comercializados son automóviles, petróleo y productos agrícolas, especialmente en el caso de México y Estados Unidos.
          div(titulo='Asociación de Naciones del Sudeste Asiático (ASEAN)')
            p.mb-0 Con países claves como China, Japón, Corea del Sur, Vietnam y Indonesia, ASEAN se ha convertido en un actor crucial en la producción y comercialización de bienes electrónicos, vehículos, productos textiles y productos químicos. Esta región ha experimentado un notable crecimiento en las últimas décadas, especialmente en sectores de manufactura.
          div(titulo='Acuerdo Integral y Progresivo de Asociación Transpacífico (CPTPP)')
            p.mb-0 Este bloque incluye a países del Pacífico como Australia, Japón, Canadá, México, Vietnam, entre otros. El CPTPP tiene como objetivo promover la cooperación económica y reducir barreras comerciales en sectores claves como tecnología, alimentos procesados, productos farmacéuticos y energía renovable.

    h2.mb-3(data-aos='fade-up') Productos más comercializados globalmente
    p.mb-5(data-aos='fade-up') Los productos que se comercializan a nivel mundial, son diversos y varían, según la región y la demanda global. Sin embargo, algunos productos claves se destacan en casi todas las rutas comerciales y grupos económicos:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos='fade-up')
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Petróleo y gas
              p.mb-0 El petróleo crudo y sus derivados, siguen siendo los productos más intercambiados en las rutas comerciales internacionales, especialmente entre Oriente Medio, América del Norte y Asia, Rusia, Arabia Saudita y Estados Unidos son los principales exportadores de petróleo, mientras que países como China e India son grandes importadores.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/7.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Electrónica y tecnología
              p.mb-0 La globalización de la producción ha hecho que productos como teléfonos inteligentes, computadoras y componentes electrónicos sean algunos de los más intercambiados. Países como China, Corea del Sur y Taiwán dominan la producción de estos productos, mientras que los mercados más grandes consumidores incluyen EE.UU., Unión Europea y Japón.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/8.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Productos agrícolas
              p.mb-0 Los granos (como el maíz, soja y trigo), carne, café y azúcar son fundamentales para el comercio global. Brasil, Argentina y EE.UU. son grandes exportadores de productos agrícolas, mientras que China y Unión Europea son grandes importadores.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/9.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Automóviles y partes automotrices
              p.mb-0 Los automóviles son una de las mercancías más comercializadas entre las grandes economías. Alemania, Japón y Estados Unidos son grandes productores de vehículos, mientras que mercados como México y China desempeñan un papel crucial en la producción de autopartes.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/10.png', alt='')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Productos farmacéuticos
              p.mb-0 Los medicamentos y productos farmacéuticos son esenciales en el comercio internacional, con países como Suiza, Alemania y EE.UU. dominando las exportaciones. La pandemia del COVID-19 ha acelerado aún más la globalización de la producción y distribución de medicamentos, vacunas y equipo médico.
            .col-lg-5.d-none.d-lg-block
                img(src='@/assets/curso/t2/11.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.imf.org/es/Home ' target='_blank' rel='noopener noreferrer') Fondo monetario internacional. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.coursehero.com/ ' target='_blank' rel='noopener noreferrer') Coursehero. 
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/c5GVmfTxyz0?si=JDFPDEiURLmmzdA8' target='_blank' rel='noopener noreferrer') Moconomy – Economía y Finanzas. (2023). Cómo se enriqueció China | El ascenso de china explicado | Documentación (video). YouTube. 
            
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
