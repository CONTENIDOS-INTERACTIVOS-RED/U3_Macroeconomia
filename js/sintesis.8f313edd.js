(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis","chunk-4e410830"],{"0666":function(e,t,n){},"13f0":function(e,t,n){"use strict";n("450b")},"159b":function(e,t,n){var a=n("da84"),s=n("fdbc"),r=n("17c2"),o=n("9112");for(var i in s){var c=a[i],l=c&&c.prototype;if(l&&l.forEach!==r)try{o(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(e,t,n){"use strict";var a=n("b727").forEach,s=n("a640"),r=s("forEach");e.exports=r?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},3079:function(e,t,n){"use strict";n("0666")},"335e":function(e,t,n){e.exports=n.p+"img/sintesis.6367dd84.svg"},"3cd8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo"}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[n("h3",{staticClass:"text-uppercase",domProps:{innerHTML:e._s("Unidad "+e.globalData.numeroUnidad+". "+e.globalData.tituloUnidad)}}),n("h2",{staticClass:"mb-0 text-uppercase",domProps:{innerHTML:e._s(e.subTitulo)}})])])])},s=[],r={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=r,i=(n("8385"),n("2877")),c=Object(i["a"])(o,a,s,!1,null,null,null);t["default"]=c.exports},"450b":function(e,t,n){},"52e5":function(e,t,n){e.exports=n.p+"img/cc.58a75e32.svg"},"60c7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{subTitulo:"SÍNTESIS"}}),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("p",{staticClass:"mb-4 mb-md-5"},[e._v("La Unidad 3: Políticas macroeconómicas y contexto global, explora las principales estrategias económicas a nivel global, destacando las políticas monetarias, fiscales y comerciales, y su impacto en el desarrollo económico. Además, analiza el efecto de la globalización en las economías y la gestión de crisis económicas. Este enfoque integral permite a los estudiantes adquirir una visión crítica de las interacciones económicas globales, capacitándolos para evaluar y proponer soluciones frente a los desafíos macroeconómicos contemporáneos.")]),a("figure",[a("img",{attrs:{src:n("335e"),alt:"Texto que describa la imagen"}})])])}],r=(n("d3b7"),n("159b"),n("3cd8")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-auto mb-2 mb-sm-0"},[a("img",{attrs:{src:n("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},l=c,u=(n("13f0"),n("2877")),d=Object(u["a"])(l,o,i,!1,null,null,null),f=d.exports,p={name:"Creditos",components:{BannerInterno:r["default"],Footer:f},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(e){var t="";return Array.isArray(e)?e.forEach((function(e,n){t+=(n?"<br/>":"")+e})):t+=e,t}}},m=p,b=(n("3079"),Object(u["a"])(m,a,s,!1,null,null,null));t["default"]=b.exports},"65f0":function(e,t,n){var a=n("861d"),s=n("e8b5"),r=n("b622"),o=r("species");e.exports=function(e,t){var n;return s(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},8385:function(e,t,n){"use strict";n("d36b")},a640:function(e,t,n){"use strict";var a=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&a((function(){n.call(null,t||function(){throw 1},1)}))}},b727:function(e,t,n){var a=n("0366"),s=n("44ad"),r=n("7b0b"),o=n("50c4"),i=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,d=6==e,f=7==e,p=5==e||d;return function(m,b,v,g){for(var E,h,y=r(m),_=s(y),C=a(b,v,3),x=o(_.length),S=0,I=g||i,O=t?I(m,x):n||f?I(m,0):void 0;x>S;S++)if((p||S in _)&&(E=_[S],h=C(E,S,y),e))if(t)O[S]=h;else if(h)switch(e){case 3:return!0;case 5:return E;case 6:return S;case 2:c.call(O,E)}else switch(e){case 4:return!1;case 7:c.call(O,E)}return d?-1:l||u?u:O}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d36b:function(e,t,n){},e8b5:function(e,t,n){var a=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=sintesis.8f313edd.js.map