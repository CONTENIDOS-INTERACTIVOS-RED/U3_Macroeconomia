<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Modelo del flujo circular'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/t1/1.png', alt='')
      .col-sm-12.col-lg-9
          p.mb-4 El modelo de flujo circular, es una herramienta en la macroeconomía, que permite representar, de manera simplificada, cómo se mueven los bienes, servicios y dinero, dentro de una economía. 
          p.mb-0 Los economistas utilizan modelos para construir teorías que expliquen cómo interactúan los diferentes actores en la economía, como los hogares, las empresas y el gobierno. Estos modelos suponen que las personas actúan de manera racional, tomando decisiones que buscan maximizar su bienestar económico (Zevallos Avilés, 2016). A través de este tipo de representaciones, se pueden identificar los principales factores que influyen en el comportamiento económico, ayudando a predecir el impacto de diversas variables, sobre el consumo, la inversión, y el ingreso.
    
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8
        .bg-2.px-5.py-5
          p.mb-0 El flujo circular de la economía, es un ejemplo de cómo, en un modelo económico, se simplifican las relaciones entre estos actores. Este modelo supone que los hogares, las empresas y el gobierno, interactúan en un ciclo continuo de producción, intercambio de bienes, y generación de ingresos.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/2.png', alt='')
    
    .bg-10.mb-5(data-aos='fade-up')
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/3.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Los modelos económicos, como el flujo circular, incluyen variables como la renta disponible, los precios de los bienes, y los tipos de interés, que son fundamentales para entender el comportamiento de los consumidores y las decisiones de inversión de las empresas (Zevallos Avilés, 2016).
    p.mb-5(data-aos='fade-up') En este tema, se profundiza en cómo estos actores se relacionan, cómo el flujo de recursos impacta la economía en su conjunto, y cómo factores como los salarios o las expectativas sobre el futuro, pueden influir en el comportamiento económico.

    #t_1_1.titulo-segundo(data-aos='fade-up')
      h2 #[span 1.1] Definición del modelo de flujo circular económico 
    p.mb-5(data-aos='fade-up') El modelo de flujo circular, es una representación básica de cómo circulan los bienes, los servicios y el dinero, dentro de una economía. En este modelo, se destacan las interacciones entre los tres actores principales: 
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          .custom-image-card__text.p-4
            .row.justify-content-center.mb-4
              .col-sm-6.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/t1/4.svg', alt='').mx-auto
            h4.mb-2.text-center Hogares
            p.mb-0.text-center Son los consumidores y proveedores de factores de producción, como el trabajo y el capital.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          .custom-image-card__text.p-4
            .row.justify-content-center.mb-4
              .col-sm-6.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/t1/5.svg', alt='').mx-auto
            h4.mb-2.text-center Empresas
            p.mb-0.text-center Son las encargadas de producir bienes y servicios, utilizando estos factores que los hogares ponen a su disposición.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          .custom-image-card__text.p-4
            .row.justify-content-center.mb-4
              .col-sm-6.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/t1/6.svg', alt='').mx-auto
            h4.mb-2.text-center Gobierno
            p.mb-0.text-center Interviene a través de la regulación de los mercados y el gasto público, redistribuyendo parte de los recursos obtenidos, mediante impuestos.


    .bg-2.p-4.mb-4(data-aos='fade-up')
      p.mb-0 El flujo de dinero y bienes, en este modelo, se mueve en dos direcciones: primero, los hogares ofrecen factores de producción a las empresas, y a cambio reciben ingresos (como salarios, rentas, y beneficios). Con esos ingresos, los hogares compran bienes y servicios de las empresas, lo que genera un flujo de dinero hacia ellas. De esta manera, los flujos de dinero (ingresos) y bienes (productos) se mantienen en constante circulación.
    p.mb-4(data-aos='fade-up') Adicional a estos elementos, el modelo de flujo circular, puede incluir variables económicas que afectan estos flujos. 
    .p-4.bg-4.mb-5(data-aos='fade-up')
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/7.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 Una #[b variable] es una magnitud que puede tomar diferentes valores a lo largo del tiempo, y es crucial para entender cómo se comporta una economía.
    .row.justify-content-center.mb-4(data-aos='fade-up')
      .col-sm-12.col-lg-8
          p.mb-0 Entre las variables más relevantes para el consumo de las familias, se encuentra la #[b renta disponible (Yd)], que es el ingreso neto que tienen las familias para consumir o ahorrar. Cuanto mayor es la renta disponible, más posibilidades tienen las familias de aumentar su consumo. Sin embargo, otras variables también influencian el comportamiento económico. Los precios de #[b bienes de consumo (PL)] tienen un impacto directo en la demanda de productos; a medida que los precios disminuyen, las familias tienden a consumir más bienes. Los #[b tipos de interés (r)] y la #[b riqueza real (RF)] de las familias, es decir, sus activos como propiedades o ahorros, pueden afectar su capacidad y disposición a consumir. Finalmente, las expectativas sobre el #[b futuro de las rentas], también juegan un papel importante. Si las familias esperan que sus ingresos disminuyan, es probable que ajusten y reduzcan su consumo.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/8.png', alt='')

    p.mb-4(data-aos='fade-up') Como señala Zevallos Avilés (2016), entender estas variables es importante para comprender las dinámicas del consumo y la producción dentro de una economía. La interacción entre estas variables permite modelar el comportamiento económico de manera más precisa y predecir cómo podrían comportarse los mercados frente a cambios en factores como la renta, los precios o las tasas de interés.
    .titulo-figura.mb-2(data-aos='fade-up')
      h5 Figura 1. 
      span Modelo flujo circular
    .row.justify-content-center.mb-5
       .col-sm-12.col-lg-7
         figure.mb-0
           img(src='@/assets/curso/t1/9.svg', alt='').mb-0

    #t_1_2.titulo-segundo(data-aos='fade-up')
      h2 #[span 1.2] Actores principales
    p.mb-4(data-aos='fade-up') En el modelo de flujo circular, los actores principales que participan en la economía, son los hogares, las empresas y el gobierno. Cada uno de estos actores tiene un papel en el funcionamiento del sistema económico, y sus interacciones generan el flujo continuo de bienes, servicios y dinero, lo que mantiene a la economía en movimiento. 
    p.mb-4(data-aos='fade-up') Para comprender mejor cómo operan, es necesario considerar no solo los roles que desempeñan, sino también las variables económicas que influyen en sus decisiones y comportamientos. Estas variables, como la renta, los precios, los tipos de interés y las expectativas, son determinantes en el modelo y afectan a todos los actores económicos, como se presenta a continuación:
    .row.justify-content-center.mb-5(data-aos='fade-up')
        .col-sm-12.col-lg-7
          AcordionA(tipo="b")
            div(titulo="Hogares")
              p.mb-4 Los hogares son los consumidores y proveedores de los factores de producción. A través del modelo de flujo circular, los hogares venden su trabajo y otros recursos, a las empresas, a cambio de ingresos (como salarios, rentas y beneficios).
              p.mb-4 Este ingreso, conocido como renta disponible (Yd), es una variable dentro del comportamiento del consumo. Cuanto mayor es la renta disponible de los hogares, más capacidad tienen para consumir bienes y servicios.
              p.mb-0 Sin embargo, el consumo no depende únicamente del nivel de ingresos. También influye el precio de los bienes (PL) que compran, dado que los hogares tienden a comprar más cuando los precios son bajos y menos cuando son altos. Además, factores como los tipos de interés (r) y las expectativas, también intervienen. Si las familias anticipan una disminución en sus ingresos futuros, sus expectativas (xyd) pueden llevarlas a reducir su consumo en el presente, aun si sus ingresos actuales son altos. Este comportamiento refleja cómo las variables interrelacionadas, afectan las decisiones de los hogares sobre su consumo (Zevallos, 2016).

            div(titulo="Empresas")
              p.mb-0 Las empresas son los productores de bienes y servicios que los hogares consumen. En el modelo de flujo circular, las empresas contratan factores de producción (trabajo, tierra, capital) a los hogares, para producir esos bienes y servicios. Las empresas, a cambio, pagan a los hogares salarios, rentas y beneficios. Además, las empresas pueden invertir en nuevas tecnologías y expandir su producción, lo cual tiene un impacto en la economía en general. El comportamiento de las empresas también depende de variables, como los tipos de interés (r) que afectan su costo de financiamiento, y las expectativas de demanda futura de productos, que pueden influir en sus decisiones de inversión. Si las empresas anticipan una disminución de la demanda, es posible que ajusten su producción o detengan nuevas inversiones.

            div(titulo="Gobierno")
              p.mb-4 El gobierno es un actor que influye significativamente en el flujo circular de la economía. Su papel incluye la recaudación de impuestos, la distribución de recursos y la implementación de políticas económicas.
              p.mb-0 El gobierno actúa como un intermediario entre los hogares y las empresas, recaudando impuestos a las empresas y los hogares, para financiar el gasto público, que incluye la infraestructura, la educación, la salud y las transferencias sociales. Además, las políticas gubernamentales pueden afectar directamente la renta disponible de los hogares (a través de cambios en impuestos y subsidios), o influir en la inversión de las empresas (a través de incentivos fiscales o regulaciones). Las expectativas del gobierno sobre la evolución económica también intervienen. Si el gobierno espera una desaceleración económica, puede implementar políticas fiscales y monetarias expansivas, para estimular la economía.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src="@/assets/curso/t1/10.png")

    h2.mb-3(data-aos='fade-up') La influencia de las variables en los actores principales
    p.mb-5(data-aos='fade-up') La interacción entre estos actores, no solo está determinada por las relaciones directas, sino también por las variables económicas que influyen en su comportamiento. Como se mencionó, la renta disponible (Yd) determina el consumo de los hogares. Los precios de los bienes y los tipos de interés (r) a su vez, son determinantes, puesto que afectan, tanto la decisión de compra de los hogares como la capacidad de las empresas para invertir en producción. Asimismo, las expectativas de los hogares y las empresas sobre el futuro, influyen en sus decisiones. Si las familias temen una caída en sus ingresos, podrían reducir su consumo, mientras que las empresas podrían frenar su inversión, ante expectativas negativas del mercado.
    .p-4.bg-1.mb-5(data-aos='fade-up')
      .row.align-items-center
        .col-lg
          p.mb-0 Como lo señala Zevallos Avilés (2016), las variables interrelacionadas, como la renta disponible, los precios y las expectativas, son básicas para comprender las dinámicas de consumo e inversión, dentro de la economía. 
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/11.svg', style='max-width: 90px').mx-auto

    #t_1_3.titulo-segundo(data-aos='fade-up')
      h2 #[span 1.3] Factores adicionales: la globalización y otras variables influyentes
    p.mb-4(data-aos='fade-up') Para estudiar esta temática, lo invitamos a ver el siguiente video:
    figure.mb-4(data-aos='fade-up')
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    p.mb-4(data-aos='fade-up') Otras variables influyentes en el modelo macroeconómico, son los tipos de interés (r), los precios de los bienes (PL) y expectativas del mercado, lo mismo que la política fiscal y monetaria de cada gobierno.
    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-8.bg-9.p-4
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle.icon-list
              span Los #[b tipos de interés] afectan la capacidad de las empresas para obtener financiación y, por lo tanto, su nivel de inversión y expansión. 
            li.d-flex
              i.fas.fa-circle.icon-list
              flex-column
                span Los #[b precios de los bienes] y las #[b expectativas económicas] de los actores, tanto de personas como empresas, si los consumidores esperan que sus ingresos disminuyan en el futuro, pueden reducir su consumo en el presente, lo que afectaría la demanda agregada. 
                span.mb-0 Igualmente, las empresas podrían frenar sus planes de expansión si consideran que la demanda futura será más baja. 
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/12.png', alt='')

    .row.justify-content-center.mb-5(data-aos='fade-up')
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t1/13.png', alt='')
      .col-sm-12.col-lg-8.bg-2.p-4
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle.icon-list
              span La #[b política fiscal y monetaria] implementada por el gobierno, pues las decisiones del gobierno en cuanto al gasto público, impuestos y tasas de interés tienen un impacto directo en el flujo de dinero en la economía. 

            li.d-flex
              i.fas.fa-circle.icon-list
              flex-column
                span #[b Por ejemplo:] una política fiscal expansiva, que involucra aumentar el gasto público o reducir impuestos, puede estimular la demanda agregada y aumentar la producción económica, lo que a su vez afecta a los hogares y las empresas.

    p.mb-4(data-aos='fade-up') Es importante comprender que todos estos factores están estrechamente relacionados. En un modelo económico simplificado, como el flujo circular, estas variables ayudan a explicar cómo las interacciones entre los hogares, las empresas y el gobierno pueden cambiar en función de los factores externos y las decisiones internas. 
    .bg-7.mb-5(data-aos='fade-up')
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Si hay #[b crisis económica global] que reduce la demanda de productos nacionales, las empresas pueden ver disminuidos sus ingreso, lo que afectará el nivel de salarios que pueden ofrecer a los hogares. A su vez, los hogares pueden reducir su consumo si enfrentan una disminución en sus ingresos, lo que afectaría la producción de las empresas y el comportamiento de la economía en general. 
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/14.png', alt='')

    p.mb-5(data-aos='fade-up') La interdependencia entre estos factores, resalta la complejidad de la economía moderna y subraya la necesidad de tener en cuenta, tanto las variables internas como externas, para comprender el comportamiento de los actores económicos.
    
    #t_1_4.titulo-segundo(data-aos='fade-up')
      h2 #[span 1.4] Cálculo del PIB
    p.mb-4(data-aos='fade-up') El Producto Interno Bruto (PIB), es un indicador utilizado para medir el rendimiento de una economía. Este indicador refleja el valor total de todos los bienes y servicios finales, producidos en un país, durante un período determinado, generalmente un año o un trimestre. 
    .p-4.bg-1.mb-5(data-aos='fade-up')
      .row.align-items-center
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/15.svg', style='max-width: 90px').mx-auto
        .col-lg
          p.mb-0 El #[b cálculo del PIB] permite entender la dinámica económica de un país, debido a que proporciona información sobre el nivel de actividad económica, la producción y la evolución del bienestar económico.

    .bg-full-width.bg-fondo-3.mb-0(data-aos='fade-up')
      .p-5
        p.mb-4 Existen tres enfoques principales para calcular el PIB: 
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
            figure.mb-0
              img(src='@/assets/curso/t1/16.png')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/17.svg')
                  p.mb-0.text-center Enfoque de la producción.
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/18.svg')
                  p.mb-0.text-center Enfoque  del ingreso.
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/19.svg')
                  p.mb-0.text-center Enfoque del gasto.


    p.mb-4(data-aos='fade-up') Todos ellos deben llevar al mismo resultado, porque el valor de la producción es igual al ingreso generado por esa producción y al gasto realizado en la compra de los bienes y servicios producidos. Ampliemos la información sobre cada uno de ellos.
    h2.mb-3(data-aos='fade-up') Enfoque del gasto
    p.mb-5(data-aos='fade-up') El enfoque del gasto es uno de los métodos más comunes para calcular el PIB. Este método se basa en sumar todos los gastos realizados en la compra de bienes y servicios finales dentro de una economía. Se considera que el gasto en la economía proviene de cuatro principales sectores:
    TabsC.color-terciario.mb-5
      .py-4.py-md-5.bg-11.p-5(titulo="Consumo (C)")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/20.png')
          .col-sm-12.col-lg-8
            h4 Consumo (C)
            p.mb-0 Es el gasto de los hogares en bienes y servicios, como alimentos, ropa, educación, salud, etc. El consumo privado representa la mayor parte del PIB, en la mayoría de las economías.

      .py-4.py-md-5.bg-11.p-5(titulo="Inversión (I)")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/21.png')
          .col-sm-12.col-lg-8
            h4 Inversión (I)
            p.mb-0 Incluye la inversión empresarial en bienes de capital, como maquinaria, instalaciones y nuevos proyectos de construcción. También incluye la inversión en inventarios por parte de las empresas y la inversión en vivienda, por parte de los hogares.

      .py-4.py-md-5.bg-11.p-5(titulo="Gasto público (G)")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/22.png')
          .col-sm-12.col-lg-8
            h4 Gasto público (G)
            p.mb-0 Es el gasto realizado por el gobierno en bienes y servicios públicos. Esto incluye desde salarios de funcionarios públicos, hasta gastos en infraestructura, educación y salud.

      .py-4.py-md-5.bg-11.p-5(titulo="Exportaciones netas (X – M)")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/23.png')
          .col-sm-12.col-lg-8
            h4 Exportaciones netas (X – M)
            p.mb-0 Las exportaciones representan los bienes y servicios vendidos al exterior, mientras que las importaciones son los bienes y servicios comprados a otros países. La diferencia entre exportaciones e importaciones, conocida como el saldo comercial, se suma al PIB.
            p.mt-3 La fórmula para calcular el PIB mediante el enfoque del gasto es:
            p.mb-0 PIB = C(Consumo) + I(Ingreso) + G(Gasto público) + (X−M) exportaciones netas.
            p.mb-0.fw-bold PIB = C + I + G + (X−M)


    h2.mb-3(data-aos='fade-up') Enfoque de la producción (o valor agregado)
    p.mb-4(data-aos='fade-up') El enfoque de la producción, también conocido como valor agregado, se basa en calcular el valor agregado en cada etapa de la producción de bienes y servicios, dentro de una economía.
    p.mb-5 Este planteamiento, se enfoca en la suma de los valores de producción en todos los sectores productivos de la economía, como la agricultura, la industria y los servicios.
    .p-4.bg-1.mb-5
      p.mb-0 El #[b valor agregado] es el valor de la producción de bienes y servicios en cada sector, descontando el valor de los insumos utilizados en la producción. Por ejemplo, si una empresa produce una mesa, el valor agregado será la diferencia entre el valor de la mesa y el costo de los materiales utilizados para fabricarla. 
    p.mb-5(data-aos='fade-up') Este enfoque permite evitar la doble contabilización, porque solo se cuentan los bienes y servicios finales.
    .bg-full-width.bg-fondo-3.mb-5(data-aos='fade-up')
      .px-5
        h2.mb-3 Enfoque del ingreso
        p.mb-5 El enfoque del ingreso se basa en calcular el PIB, sumando todos los ingresos generados por los factores de producción en la economía, como salarios, rentas, intereses y beneficios. Los principales componentes de este enfoque incluyen:
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
            figure.mb-0
              img(src='@/assets/curso/t1/16.png')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas="col-12 col-lg-6")
              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/25.svg')
                  h4.text-center Salarios (W)
                  p.mb-0.text-center Son los ingresos obtenidos por el trabajo, incluyendo sueldos y salarios de los empleados.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/26.svg')
                  h4.text-center Rentas I
                  p.mb-0.text-center Son los ingresos obtenidos por la propiedad de recursos productivos, como la tierra o el capital.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/27.svg')
                  h4.text-center Intereses (I)
                  p.mb-0.text-center Representan los ingresos obtenidos por los propietarios de capital.

              .row.py-4.px-3.h-100
                .col-sm-12.col-lg-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-6.col-md-4.mb-4
                      img(src='@/assets/curso/t1/28.svg')
                  h4.text-center Beneficios (B)
                  p.mb-0.text-center Son los ingresos obtenidos por las empresas después de pagar los costos de producción.
                  p.mt-3.text-center.fw-bold PIB = W+R+I+B


    .p-4.bg-2.mb-5(data-aos='fade-up')
      p.mb-0.text-center.fw-bold PIB = W+R+I+B
    .titulo-figura.mb-2(data-aos='fade-up')
      h5 Figura 2. 
      span Métodos medición PIB
    .row.justify-content-center.mb-5(data-aos='fade-up')
       .col-sm-12.col-lg-5
         figure.mb-5
           img(src='@/assets/curso/t1/29.svg', alt='').mb-0

    h2.mb-3(data-aos='fade-up') Limitaciones del PIB
    p.mb-5(data-aos='fade-up') Aunque el PIB es un indicador puntual de la actividad económica, tiene varias limitaciones. Entre ellas se destacan:

    .row.justify-content-center.mb-0(data-aos='fade-up')
        .col-sm-12.col-lg-7
          AcordionA(tipo="b")
            div(titulo="1. No mide el bienestar")
              p.mb-0 El PIB no captura aspectos como la distribución del ingreso, el bienestar de la población o la calidad de vida. Un aumento en el PIB no necesariamente implica una mejora en las condiciones de vida de todos los ciudadanos.

            div(titulo="2. Actividades informales")
              p.mb-0 Muchas actividades económicas que no se registran formalmente (como la economía informal), no son reflejadas en el cálculo del PIB.

            div(titulo="3. Externalidades")
              p.mb-0 El PIB no tiene en cuenta los efectos negativos de la producción, como la contaminación o el agotamiento de recursos naturales.

            div(titulo="4. PNB y PIB")
              p.mb-0 El Producto Interno Bruto y Producto Nacional Bruto, son dos indicadores utilizados para medir el valor de la producción de un país. Sin embargo, la elección entre uno u otro, depende de los criterios específicos de cada nación.

            div(titulo="5. Ejemplo PNB y PIB")
              p.mb-0 Ejemplo: #[b los países que tienen una significativa cantidad] de factores de producción, como el trabajo y el capital, que se trasladan al extranjero para su explotación, suelen preferir utilizar el #[b PNB] como medida de su actividad económica. Por el contrario, los países que reciben un volumen importante de factores de producción de propiedad extranjera tienden a optar por el #[b PIB], para medir el valor de su producción nacional (Zevallos Avilés, 2016).
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src="@/assets/curso/t1/30.png")



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style='{"max-width":"16px"}')
              a(href='https://doi.org/10.22267/rtend.222301.194' target='_blank' rel='noopener noreferrer') Nieves Mendoza, Leidy Milena, & Morales Cely, William Alonso. (2022). Una mirada a la brecha entre actitud y comportamiento del consumidor en la economía circular. Tendencias, 23(1), p.p. 372-394.
 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.banrep.gov.co/es' target='_blank' rel='noopener noreferrer') Banco de la República Colombia
 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.canva.com/' target='_blank' rel='noopener noreferrer') Canva
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://youtu.be/Rx3BNWEVBbw?si=z9RywXVe8ju1b9U' target='_blank' rel='noopener noreferrer') Sustraction h. (2016). Flujo circular de la renta (video). YouTube.

            
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
