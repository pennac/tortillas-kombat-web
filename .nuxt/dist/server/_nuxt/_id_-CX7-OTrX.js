import { u as useHead, _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/hookable/dist/index.mjs";
import { u as useAsyncData, q as queryContent } from "./query-CA-QbtpA.js";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/unctx/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/h3/dist/index.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/defu/dist/defu.mjs";
import "/Users/paolopennac/Desktop/Desktop - Paolo’s MacBook Air/TortillasKombat/Website/TKV2/node_modules/ufo/dist/index.mjs";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: chapter } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `comic-${route.params.id}`,
      () => queryContent(`/comics/${route.params.id}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    useHead({ title: chapter.value ? `${chapter.value.title} - Lettore` : "Lettore" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen bg-zinc-950 font-elite" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/comics/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CX7-OTrX.js.map
