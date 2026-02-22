import { _ as __nuxt_component_0 } from "./nuxt-link-FTyZYjnF.js";
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-CA-QbtpA.js";
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
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/perfect-debounce/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ohash/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/klona/dist/index.mjs";
import "./preview-A8gZB0t-.js";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/destr/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Roster - Tortillas Kombat" });
    const { data: characters } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "lore",
      () => queryContent("/lore").find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative min-h-screen bg-zinc-950 px-4 py-8" }, _attrs))}><h1 class="font-rye text-4xl text-amber-500 text-center mb-2 mt-4">ROSTER</h1><p class="font-elite text-center text-zinc-500 text-xs mb-8 uppercase tracking-widest">Seleziona il tuo combattente</p><div class="grid grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(unref(characters), (char) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: char._path,
          to: char._path,
          class: "block relative aspect-square border-2 border-zinc-800 bg-zinc-900 group overflow-hidden transition-all hover:border-amber-500 hover:shadow-[0_0_15px_rgba(227,182,89,0.5)] cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", char.media?.portrait || "/img/placeholder-portrait.jpg")}${ssrRenderAttr("alt", char.name)} class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"${_scopeId}><div class="absolute bottom-0 inset-x-0 bg-zinc-950/80 p-2 text-center border-t border-zinc-800 group-hover:border-amber-500"${_scopeId}><span class="font-rye text-zinc-300 group-hover:text-amber-500 text-sm md:text-base transition-colors"${_scopeId}>${ssrInterpolate(char.name)}</span></div>`);
            } else {
              return [
                createVNode("img", {
                  src: char.media?.portrait || "/img/placeholder-portrait.jpg",
                  alt: char.name,
                  class: "w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute bottom-0 inset-x-0 bg-zinc-950/80 p-2 text-center border-t border-zinc-800 group-hover:border-amber-500" }, [
                  createVNode("span", { class: "font-rye text-zinc-300 group-hover:text-amber-500 text-sm md:text-base transition-colors" }, toDisplayString(char.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lore/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DCA97qFK.js.map
