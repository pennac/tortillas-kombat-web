import { _ as __nuxt_component_0 } from "./nuxt-link-FTyZYjnF.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ufo/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/hookable/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/unctx/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/defu/dist/defu.mjs";
import "framesync";
import "popmotion";
import "style-value-types";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "aviso-legal",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Aviso Legal - Tortillas Kombat" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white text-zinc-900 pt-24 pb-12 px-6" }, _attrs))}><div class="max-w-3xl mx-auto">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "font-header text-zinc-900 hover:text-amber-600 mb-6 inline-block uppercase tracking-widest text-sm transition-colors border-b-2 border-zinc-900 hover:border-amber-600 pb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← VOLVER AL INICIO `);
          } else {
            return [
              createTextVNode(" ← VOLVER AL INICIO ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-white border-2 border-zinc-900 p-6 md:p-10 shadow-[8px_8px_0px_rgba(24,24,27,1)] relative"><h1 class="font-header text-4xl md:text-5xl mb-8 uppercase text-zinc-900 border-b-4 border-zinc-900 pb-4">Aviso Legal</h1><div class="space-y-6"><section><h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">1. Información General</h2><p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se reflejan los siguientes datos: el titular de dominio web es Tortillas Kombat (en adelante &quot;El Titular&quot;), con domicilio a estos efectos en Madrid.</p></section><section><h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">2. Propiedad Intelectual e Industrial</h2><p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">El Titular por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Todos los derechos reservados.</p></section><section><h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">3. Exclusión de Garantías y Responsabilidad</h2><p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">El Titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p></section><section><h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">4. Modificaciones</h2><p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">El Titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p></section></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aviso-legal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=aviso-legal-DiG0imWb.js.map
