<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Políticas monetarias, fiscales y comerciales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p.mb-4(data-aos="fade-up") Las políticas macroeconómicas son herramientas utilizadas por los gobiernos y las instituciones financieras, para influir en el comportamiento económico de un país. 
    .p-4.bg-4.mb-4(data-aos="fade-up")
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/1.svg', style='max-width: 90px').mx-auto 
        .col-lg
          p.mb-0 Entre las principales políticas se encuentran la #[b política monetaria], la #[b política fiscal] y la #[b política comercial], cada una con objetivos y mecanismos específicos para regular la economía. 
    p.mb-5(data-aos="fade-up") Estas políticas se aplican en momentos puntuales para garantizar el crecimiento económico, la estabilidad financiera y el bienestar social; siendo necesarias para enfrentar situaciones de crisis o desequilibrios en la economía.
    #t_1_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.1] Política monetaria
    p.mb-4(data-aos="fade-up") La política monetaria es un instrumento fundamental en la gestión económica de un país, utilizado por los bancos centrales para regular la oferta de dinero y las tasas de interés con el fin de alcanzar objetivos clave como la estabilidad de precios, el control de la inflación y el crecimiento económico sostenible.
    .bg-full-width.bg-4.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Política monetaria 
             p.mb-4 En el PDF #[b Política monetaria], se abordan conceptos esenciales, ejemplos prácticos y el papel de instituciones como el Fondo Monetario Internacional, brindando un panorama claro sobre cómo estas decisiones impactan los mercados financieros y el bienestar económico general.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Política monetaria 
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/2.png', alt='')

    p.mb-4(data-aos="fade-up") A continuación, se profundiza en los principales factores que se ven influenciados por la política monetaria:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/3.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Estructura del mercado financiero')
            p.mb-0 Las decisiones sobre política monetaria, afectan la estructura del mercado financiero porque pueden influir en el comportamiento de los inversores y las instituciones financieras. Por ejemplo, en un entorno de política monetaria expansiva (con tasas de interés bajas), los bancos pueden estar más dispuestos a prestar dinero, lo que podría fomentar el crecimiento de nuevos sectores financieros, incluyendo mercados de crédito y productos derivados. Esto puede llevar a una mayor competencia entre las instituciones financieras, cambios en las estrategias de inversión y un aumento en la liquidez disponible en los mercados.

          div(numero='2' titulo='Límites a la usura')
            p.mb-0 Otro aspecto relevante es que la política monetaria influye en las tasas de interés que los prestamistas cobran por los créditos. En este sentido, los bancos centrales suelen intervenir para establecer límites a la usura, entendida como el cobro excesivo de intereses. Si bien la política monetaria puede ajustar las tasas de interés de referencia, para fomentar el préstamo o la inversión, también tiene efectos sobre los márgenes de interés y los riesgos asociados al crédito. En períodos de alta inflación, por ejemplo, las tasas de interés pueden aumentar para evitar la especulación y el sobreendeudamiento de los consumidores y empresas. De esta forma, la política monetaria se utiliza para controlar el nivel general de los precios, y a su vez para proteger a los prestatarios de condiciones de usura que puedan ser insostenibles.

          div(numero='3' titulo='Evaluación del riesgo de crédito')
            p.mb-0 La política monetaria influye en la evaluación del riesgo de crédito, tanto para los prestamistas como para los prestatarios. Cuando el banco central ajusta las tasas de interés, afecta la disponibilidad y el costo del crédito, lo que cambia la manera en que las instituciones financieras evalúan los riesgos asociados con la concesión de préstamos. Las tasas de interés altas pueden aumentar el riesgo de impago de los deudores, lo que lleva a los prestamistas a ser más cautelosos y exigir garantías más estrictas. Por otro lado, en un ambiente de tasas de interés bajas, los prestamistas pueden estar más dispuestos a asumir riesgos mayores, lo que podría aumentar la disponibilidad de crédito, pero también podría generar riesgos adicionales si no se evalúan adecuadamente las capacidades de pago de los deudores.

          div(numero='4' titulo='Evaluación del riesgo del sector económico')
            p.mb-0 Además de evaluar el riesgo de cada deudor individual, los bancos también consideran el sector económico al que pertenece el prestatario. La política monetaria influye en este aspecto, puesto que un entorno de altas tasas de interés, puede afectar de manera diferente, a sectores como la construcción, la tecnología, o la industria, dependiendo de su dependencia del financiamiento externo. Por ejemplo, en una situación de política monetaria restrictiva, los sectores más sensibles a las tasas de interés, como la construcción o el consumo de bienes duraderos, pueden ver disminuida su demanda, mientras que otros sectores más estables, como la energía o los bienes básicos, podrían estar menos afectados. De esta forma, los cambios en la política monetaria pueden modificar la evaluación del riesgo sectorial y, por lo tanto, influir en las decisiones de inversión y préstamo en estos sectores.

          div(numero='5' titulo='Expectativas de precios y actividad económica')
            p.mb-0 Los bancos centrales, a través de sus decisiones, intentan influir en las expectativas de inflación y de crecimiento económico, las cuales a su vez afectan el comportamiento de los consumidores, inversores y prestamistas. Cuando los agentes económicos perciben que los precios serán estables en el futuro, tienden a consumir más y a invertir con mayor confianza. Por el contrario, si existe incertidumbre sobre el futuro de los precios, los consumidores podrían posponer decisiones de compra, y las empresas podrían reducir la inversión. En este sentido, la política monetaria influye en las expectativas inflacionarias, ayudando a mantener un equilibrio entre la oferta y la demanda de bienes y servicios, y evitando los excesos de inflación o deflación que puedan desestabilizar la economía.

          div(numero='6' titulo='Entorno internacional')
            p.mb-0 Finalmente, el entorno internacional juega un papel importante en la política monetaria, especialmente en una economía abierta. Las decisiones de política monetaria afectan a la economía nacional, y la manera en que los inversores y prestamistas perciben a un país en comparación con otros mercados.

    .bg-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Las políticas monetarias expansivas o restrictivas, pueden modificar el valor de la moneda nacional, afectar las tasas de cambio y alterar el flujo de capitales internacionales. Por ejemplo, si un banco central de un país adopta una política monetaria expansiva, como la reducción de tasas de interés, puede resultar en una depreciación de la moneda, lo que afecta la competitividad de las exportaciones e importaciones.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/4.png', alt='')

    p.mb-5(data-aos="fade-up") De igual forma, las políticas monetarias de otros países pueden influir en las decisiones económicas nacionales, como ocurre con las tasas de interés de la Reserva Federal de EE.UU. y su impacto sobre los mercados financieros globales.
    #t_1_2.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.2] Política fiscal
    p.mb-4(data-aos="fade-up") La política fiscal es una herramienta clave para la gestión económica de los países, utilizada para influir en la demanda agregada, estabilizar el crecimiento y mitigar los efectos de las fluctuaciones cíclicas.
    .bg-full-width.bg-4.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Política fiscal 
             p.mb-4 En el PDF #[b Política fiscal], se presentan conceptos fundamentales, ejemplos prácticos y análisis de su impacto en aspectos como el ahorro, el consumo y la interacción con la política monetaria, proporcionando una visión integral sobre su papel en la economía nacional e internacional.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Política fiscal 
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/5.png', alt='')

    #t_1_3.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.3] Política comercial
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/6.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-5 La política comercial, es el conjunto de estrategias y medidas adoptadas por los gobiernos para regular el comercio internacional, con el objetivo de influir en el flujo de exportaciones e importaciones, fomentando la integración de las economías nacionales, en el mercado global.
        .bg-2.p-3
          p.mb-0 Las políticas comerciales buscan maximizar los beneficios del comercio internacional, y proteger las industrias nacionales, frente a los efectos adversos de la competencia extranjera. De esta manera, cada país adapta sus políticas comerciales, según sus necesidades económicas, sus recursos disponibles y sus objetivos de desarrollo. Para comprender el contexto de la política comercial, se explica y profundiza en los siguientes conceptos: 

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Definición de comercio internacional')
            p.mb-4 El comercio internacional se refiere al intercambio de bienes, servicios y capitales entre países. A lo largo de la historia, este comercio ha sido un motor fundamental para el crecimiento económico global, al permitir que los países se especialicen en sectores en los que tienen ventajas comparativas.
            p.mb-0 La política comercial representa un desempeño fundamental en este proceso, al establecer las reglas bajo las cuales se realiza este intercambio.

          div(titulo='Tratados de libre comercio')
            p.mb-0 Los tratados de libre comercio son #[b acuerdos bilaterales o multilaterales] entre países, cuyo objetivo es reducir o eliminar las barreras arancelarias y no arancelarias que limitan el intercambio comercial. Estos acuerdos buscan promover la competitividad de las industrias nacionales, abriendo mercados internacionales a los productos de los países firmantes.

      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/7.png')



    p.mb-4(data-aos="fade-up") Los acuerdos más conocidos en la actualidad, son:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/8.png' alt='')
          .custom-image-card__text.p-4
            p.mb-0.text-center Tratado de Libre Comercio de América del Norte (TLCAN), ahora reemplazado por el Tratado entre México, Estados Unidos y Canadá (T-MEC).
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/9.png' alt='')
          .custom-image-card__text.p-4
            p.mb-0.text-center Tratado de Libre Comercio de la Unión Europea (UE), que permite la libre circulación de bienes, servicios, personas y capitales entre los países miembros.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/10.png' alt='')
          .custom-image-card__text.p-4
            p.mb-0.text-center Acuerdo Integral y Progresivo de Asociación Transpacífico (CPTPP), que involucra a países de la región del Pacífico.

    p.mb-4(data-aos="fade-up") Cada uno de estos acuerdos, tiene como objetivo facilitar el comercio, mejorar la competitividad y promover el desarrollo económico, de las naciones involucradas.
    .bg-2.p-4.mb-4(data-aos="fade-up")
      p.mb-0 Para el caso de Colombia, la red comercial ha favorecido el aprovechamiento de diversas oportunidades para los empresarios nacionales, al tiempo que ha impulsado el incremento del comercio internacional. Entre las ventajas que ofrecen estas oportunidades, se destacan el acceso directo a mercados claves, aranceles reducidos, una competencia equitativa y un marco legal claramente establecido.
    p.mb-4(data-aos="fade-up") Colombia ha firmado acuerdos de libre comercio con una variedad de países y bloques económicos, incluyendo Estados Unidos, la Unión Europea, México, el Triángulo Norte de Centroamérica (El Salvador, Guatemala y Honduras), la Comunidad del Caribe (CARICOM), la Comunidad Andina, el Mercado Común del Sur (MERCOSUR), Chile, Canadá, la Asociación Europea de Libre Comercio (AELC), Suiza, Liechtenstein y Venezuela. Además, se han concretado conversaciones con Panamá, Cuba e Israel, mientras que la Alianza del Pacífico mantiene actualmente negociaciones con Japón y otros acuerdos complementarios.
    h2.mb-3(data-aos="fade-up") Instituciones internacionales en la política comercial
    p.mb-5(data-aos="fade-up") Existen diversas instituciones internacionales que juegan un papel clave en la regulación y promoción del comercio internacional:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Organización Mundial del Comercio (OMC)
              p.mb-0 Es la institución global que establece las reglas para el comercio mundial, supervisando la implementación de acuerdos y resolviendo disputas comerciales entre países miembros (Eggers, 2016).
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/11.png', alt='Logo OMC')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Fondo Monetario Internacional (FMI)
              p.mb-0 Aunque su enfoque principal es la estabilidad financiera global, el FMI también influye en las políticas comerciales al asesorar a los países sobre la liberalización del comercio y sus efectos económicos (Sánchez Campillo, 2015).
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/12.png', alt='Logo FMI')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Banco Mundial
              p.mb-0 Proporciona financiamiento y asesoría para proyectos que facilitan el acceso de los países a los mercados internacionales, especialmente en el caso de países en vías de desarrollo.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/13.png', alt='Logo Banco Mundial')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5 Unión Europea (UE)
              p.mb-0 A través de sus políticas y acuerdos comerciales, la UE promueve un comercio libre y justo entre los países miembros y con el resto del mundo.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/14.png', alt='Bandera UE')


    h2.mb-3(data-aos="fade-up") Instrumentos de política comercial
    p.mb-5(data-aos="fade-up") Los instrumentos de política comercial, son herramientas utilizadas por los gobiernos para regular el comercio internacional y proteger sus economías. Los principales instrumentos incluyen:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/15.png')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Medidas arancelarias')
            p.mb-4 Las medidas arancelarias, son impuestos aplicados a los productos importados para hacerlos menos competitivos frente a los productos nacionales. Existen varios tipos de aranceles:
            p.mb-0 #[b Arancel ad-valorem.] Se aplica como un porcentaje del valor de la mercancía importada. 
            p.mb-0 #[b Arancel específico.] Se aplica como una cantidad fija por unidad de producto importado (por ejemplo, por cada tonelada de acero). 
            p.mb-0 #[b Arancel mixto.] Combinación de un arancel ad-valorem y específico.

          div(numero='2' titulo='Medidas no arancelarias')
            p.mb-4 Son barreras comerciales que no implican la aplicación de aranceles, pero que restringen o dificultan el comercio. Estas incluyen: 
            p.mb-0 #[b Cuotas de importación.] Limitan la cantidad de productos que se pueden importar durante un período determinado. 
            p.mb-0 #[b Subsidios a la exportación.] Apoyo financiero o fiscal que el gobierno otorga a las empresas nacionales para que sus productos sean más competitivos en los mercados internacionales. 
            p.mb-0 #[b Normas técnicas.] Requerimientos específicos de calidad, etiquetado o composición que deben cumplir los productos importados. 
            p.mb-0 #[b Medidas sanitarias y fitosanitarias.] Regulaciones que buscan proteger la salud humana, animal y vegetal, y que pueden ser utilizadas como barreras al comercio.

          div(numero='3' titulo='Medidas no permitidas')
            p.mb-4 A nivel internacional, existen ciertas medidas que están prohibidas o restringidas por las reglas de comercio, especialmente las que se consideran prácticas comerciales desleales: 
            p.mb-0 #[b Dumping.] Práctica de vender productos en mercados internacionales a precios inferiores a los de producción, lo que puede perjudicar a las industrias locales. 
            p.mb-0 #[b Subsidios prohibidos.] Subsidios a la exportación que distorsionan el comercio según la OMC.

    h2.mb-3(data-aos="fade-up") Intereses de los grupos poblacionales
    p.mb-5(data-aos="fade-up") Es importante destacar que la política comercial no afecta por igual a todos los sectores de la población, pues los intereses de los distintos grupos, pueden ser opuestos:
    .bg-full-width.bg-fondo-4.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-10
            img(src='@/assets/curso/t1/16.svg', alt='')

    .titulo-figura.mb-2.d-d-flex(data-aos="fade-up")
      p.mb-0 #[b Tabla 1.] Tabla comparativa de los principales instrumentos de las políticas comerciales
    .tabla-a.color-acento-botones.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th.w-25 Instrumento
            th Descripción
            th Impacto
            th Ejemplos específicos
        tbody
          tr
            td.fw-bold Aranceles
            td Son impuestos o tarifas que los gobiernos aplican a los productos importados. Los aranceles aumentan el costo de los bienes extranjeros, protegiendo las industrias nacionales.
            td Pueden reducir las importaciones, protegen a los productores nacionales, pero elevan los precios para los consumidores.
            td 
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0  Aranceles a productos agrícolas como la carne o el maíz, en diversos países.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Aranceles a productos electrónicos en EE.UU. contra China.
          tr
            td.fw-bold Cuotas de importación (no arancelarios)
            td Son límites cuantitativos sobre la cantidad de un producto que puede ser importado durante un periodo determinado.
            td Limitan la competencia extranjera, asegurando un espacio para la producción nacional, pero pueden generar escasez y precios más altos para los consumidores.
            td 
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Cuotas a la importación de textiles en países como India y China.
                ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Cuotas de importación de autos en Brasil.
          tr
            td.fw-bold Subsidios a la exportación (no arancelarios)
            td Son ayudas financieras que los gobiernos otorgan a las empresas nacionales para facilitar la exportación de productos, mejorando la competitividad internacional.
            td Fomentan las exportaciones y pueden ayudar a las empresas nacionales a ganar cuota de mercado en el exterior, pero pueden generar distorsiones comerciales.
            td 
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Subsidios agrícolas en la UE para exportaciones de cereales.
                ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Subsidios a la exportación de productos electrónicos en China.
          tr
            td.fw-bold #[i Antidumping] (no permitidas)
            td Son medidas que se aplican cuando un país exporta productos a precios por debajo de su costo de producción para obtener cuota de mercado, afectando a las industrias locales.
            td Protegen a los productores nacionales de la competencia desleal, pero pueden desencadenar represalias comerciales.
            td 
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Impuestos antidumping aplicados a las importaciones de acero chino en Estados Unidos.
                ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Medidas antidumping contra textiles chinos en Europa.
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/book.svg' :style='{"max-width":"16px"}')
              a(href='https://www.imf.org/es/About/Factsheets/Sheets/2023/monetary-policy-and-central-banking' target='_blank' rel='noopener noreferrer') Fondo Monetario Internacional. (s.f.). ¿Qué es la política monetaria y por qué es importante?
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.banrep.gov.co/es' target='_blank' rel='noopener noreferrer') Banco de la República 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.canva.com/' target='_blank' rel='noopener noreferrer') Canva 
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/p62ocXNnXzk?si=J914jqMsc7bFo1nM' target='_blank' rel='noopener noreferrer') Finanzas Simples Para Todos. (2024). ¿Por Qué Todo es Más Caro? El Impacto de los Aranceles en tu Bolsillo (video). YouTube. 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
