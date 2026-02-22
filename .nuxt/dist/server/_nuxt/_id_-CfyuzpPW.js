import { _ as __nuxt_component_0 } from "./nuxt-link-FTyZYjnF.js";
import { u as useHead, _ as __nuxt_component_0$1 } from "../server.mjs";
import { defineComponent, withAsyncContext, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { useRoute } from "vue-router";
import { u as useAsyncData, q as queryContent } from "./query-CA-QbtpA.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ufo/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ofetch/dist/node.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/hookable/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/unctx/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/h3/dist/index.mjs";
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
const _imports_0 = publicAssetsURL("/capitoli/capitulo1/Cover.jpeg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: character } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `lore-${route.params.id}`,
      () => queryContent(`/lore/${route.params.id}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: character.value ? `${character.value.name} - Roster` : "Roster" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      if (unref(character)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-[100dvh] w-full bg-zinc-950 overflow-hidden" }, _attrs))} data-v-19003706><div class="absolute inset-0 z-0" data-v-19003706>`);
        if (unref(character).media?.videoIdle) {
          _push(`<video${ssrRenderAttr("src", unref(character).media?.videoIdle)} autoplay loop muted playsinline class="w-full h-full object-cover opacity-40" data-v-19003706></video>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover opacity-30 sepia" data-v-19003706>`);
        }
        _push(`<div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" data-v-19003706></div></div><div class="relative z-10 px-6 py-12 flex flex-col h-full justify-end min-h-[100dvh] pb-24" data-v-19003706>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lore",
          class: "absolute top-20 left-6 font-elite text-amber-500 text-xs hover:text-amber-400 bg-zinc-950/50 px-2 py-1 backdrop-blur-sm border border-amber-900"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ← Torna al Roster `);
            } else {
              return [
                createTextVNode(" ← Torna al Roster ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="font-rye text-5xl text-amber-500 mb-2 drop-shadow-lg" data-v-19003706>${ssrInterpolate(unref(character).name)}</h1><p class="font-elite text-zinc-400 text-sm italic mb-8 border-l-2 border-red-800 pl-3" data-v-19003706> &quot;${ssrInterpolate(unref(character).quote || "Il vapore mi guida.")}&quot; </p>`);
        if (unref(character).stats) {
          _push(`<div class="mb-8 grid grid-cols-1 gap-3 max-w-sm" data-v-19003706><!--[-->`);
          ssrRenderList(unref(character).stats, (val, stat) => {
            _push(`<div class="flex items-center gap-4" data-v-19003706><span class="font-elite text-amber-600 text-xs w-16 uppercase" data-v-19003706>${ssrInterpolate(stat)}</span><div class="flex-grow h-2 bg-zinc-900 border border-zinc-800" data-v-19003706><div class="h-full bg-red-800 transition-all duration-1000 ease-out" style="${ssrRenderStyle({ width: `${val * 10}%` })}" data-v-19003706></div></div><span class="font-elite text-zinc-300 text-xs w-6 text-right" data-v-19003706>${ssrInterpolate(val)}/10</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="bg-zinc-900/80 backdrop-blur-md border border-amber-900/50 p-6 shadow-2xl" data-v-19003706>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex items-center justify-center font-elite text-amber-500" }, _attrs))} data-v-19003706> Combattente non trovato. </div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lore/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-19003706"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CfyuzpPW.js.map
