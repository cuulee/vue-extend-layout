function layouts(){var a=require.context('@/layouts',!1,/^\.\/.*\.vue$/);return a.keys().map(a)}var OPTIONS={loader:null,layoutDefault:'default',prefix:'layout'},_extends=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},_Vue={},_options={},_hasLoaded=!1;function VueExtendLayout(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_Vue=a;_options=_extends({},OPTIONS,b);layouts().forEach(function(b){b=b.default||b;a.component(_options.prefix+'-'+b.name,b)})}function layoutCompile(a){return _Vue.compile('<'+_options.prefix+'-'+a+' />')}function layoutRender(a,b){this.$options.render=a.render;this.$options.staticRenderFns=a.staticRenderFns;b&&(this.$forceUpdate(),_hasLoaded=!0)}var layout={beforeCreate:function a(){var b=this;if(!_options.loader)return;setTimeout(function(){layoutRender.call(b,layoutCompile(_options.loader),!_hasLoaded)},2000)},watch:{'$route':function a(){layoutRender.call(this,layoutCompile(this.$route.meta.layout||_options.layoutDefault),!0)}}};export { VueExtendLayout, layout }
