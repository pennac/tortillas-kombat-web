import { a as useGtag, _ as __nuxt_component_0, u as useHead } from "../server.mjs";
import { defineComponent, ref, useSSRContext, mergeProps } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ofetch/dist/node.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/hookable/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/unctx/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/h3/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/defu/dist/defu.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ufo/dist/index.mjs";
import "framesync";
import "popmotion";
import "style-value-types";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SocialGate",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    useRouter();
    useGtag();
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialGate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/bg1.mp4");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Inicio - Tortillas Kombat" });
    const isModalGateOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SocialGate = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative bg-white min-h-screen pb-12" }, _attrs))}><section class="relative h-[70vh] w-full flex items-center justify-center overflow-hidden border-b-4 border-zinc-900 bg-zinc-100"><div class="absolute inset-0 z-0"><video${ssrRenderAttr("src", _imports_0)} autoplay loop muted playsinline class="w-full h-full object-cover"></video></div></section><section class="relative min-h-[30vh] w-full flex flex-col items-center justify-start overflow-hidden py-12"><div class="relative z-10 text-center px-4 w-full"><h1 class="font-header font-black text-5xl md:text-6xl text-zinc-900 mb-6 tracking-tight" style="${ssrRenderStyle({ "text-shadow": "2px 2px 0 #fff, -1px -1px 0 #fff" })}"> TORTILLAS KOMBAT </h1><div class="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0_rgba(24,24,27,1)] mb-10 relative"><p class="font-body text-zinc-800 text-sm leading-relaxed font-medium"> En un futuro distópico y grasiento, la ciudad de Sartenópolis vive bajo el yugo del tirano Huovo Frito, quien ha prohibido el sabor y la mezcla de ingredientes. Patato-Pan, un viejo ronin tubérculo con un pasado doloroso, regresa del exilio. Junto a su pequeña aprendiz Aceituna, deberá viajar por las Tierras del Ayuno, aprender las 7 Técnicas Maestras y enfrentarse a su propio hermano, el General Roto, en el brutal torneo &quot;Tortillas Kombat&quot;. No es solo una lucha por el poder; es una batalla por el derecho a ser delicioso. </p></div><button class="bg-white text-zinc-900 border-2 border-zinc-900 font-header text-xl py-4 px-8 hover:bg-zinc-900 hover:text-white transition-colors uppercase tracking-widest cursor-pointer mt-8 shadow-[4px_4px_0_rgba(24,24,27,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"> DESBLOQUEAR ARCHIVOS </button>`);
      if (isModalGateOpen.value) {
        _push(ssrRenderComponent(_component_SocialGate, {
          onClose: ($event) => isModalGateOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CiLs6pf6.js.map
