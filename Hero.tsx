import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/Hero.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d6021253"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { PlayCircle } from "/node_modules/.vite/deps/lucide-react.js?v=d6021253";
const Hero = ({ mainNews, secondaryNews }) => {
  return /* @__PURE__ */ jsxDEV("section", { className: "max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl", children: [
      /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: mainNews.imageUrl,
          alt: mainNews.title,
          className: "w-full h-[400px] md:h-[500px] object-cover transition duration-700 group-hover:scale-105"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 16,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" }, void 0, false, {
        fileName: "/app/applet/components/Hero.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 p-6 md:p-10 w-full", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-sm mb-4 inline-block uppercase tracking-wider shadow-lg", children: "Tin tiêu điểm" }, void 0, false, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight group-hover:text-yellow-400 transition", children: mainNews.title }, void 0, false, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-200 line-clamp-2 md:text-lg mb-4 max-w-2xl font-medium", children: mainNews.excerpt }, void 0, false, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-white text-sm font-semibold", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "mr-4", children: mainNews.author }, void 0, false, {
            fileName: "/app/applet/components/Hero.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: mainNews.date }, void 0, false, {
            fileName: "/app/applet/components/Hero.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Hero.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/Hero.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-[#1a3c1a] border-l-4 border-red-700 pl-3 uppercase tracking-tight", children: "Đọc nhiều nhất" }, void 0, false, {
        fileName: "/app/applet/components/Hero.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      secondaryNews.map(
        (news) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4 group cursor-pointer", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg shadow-md", children: /* @__PURE__ */ jsxDEV("img", { src: news.imageUrl, alt: news.title, className: "w-full h-full object-cover group-hover:scale-110 transition" }, void 0, false, {
            fileName: "/app/applet/components/Hero.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Hero.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-bold text-red-700 uppercase mb-1", children: news.category }, void 0, false, {
              fileName: "/app/applet/components/Hero.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-sm md:text-base leading-snug group-hover:text-blue-700 transition line-clamp-2", children: news.title }, void 0, false, {
              fileName: "/app/applet/components/Hero.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-gray-500 mt-1", children: news.date }, void 0, false, {
              fileName: "/app/applet/components/Hero.tsx",
              lineNumber: 50,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/components/Hero.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, news.id, true, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4 bg-[#1a3c1a] rounded-xl p-6 text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -right-10 -bottom-10 opacity-10", children: /* @__PURE__ */ jsxDEV(PlayCircle, { className: "w-48 h-48" }, void 0, false, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 58,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold mb-4 flex items-center", children: [
          /* @__PURE__ */ jsxDEV(PlayCircle, { className: "w-5 h-5 mr-2 text-red-500" }, void 0, false, {
            fileName: "/app/applet/components/Hero.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this),
          "VIDEO ĐẶC SẮC"
        ] }, void 0, true, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative group cursor-pointer border border-white/20", children: [
          /* @__PURE__ */ jsxDEV("img", { src: "https://picsum.photos/seed/vid1/400/225", className: "w-full h-full object-cover opacity-60 rounded-lg", alt: "Video thumbnail" }, void 0, false, {
            fileName: "/app/applet/components/Hero.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(PlayCircle, { className: "w-12 h-12 absolute text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition" }, void 0, false, {
            fileName: "/app/applet/components/Hero.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-sm font-semibold line-clamp-2", children: "Nhìn lại lịch sử hào hùng của quân chủng Hải Quân qua các thời kỳ" }, void 0, false, {
          fileName: "/app/applet/components/Hero.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Hero.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/Hero.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/components/Hero.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};
_c = Hero;
export default Hero;
var _c;
$RefreshReg$(_c, "Hero");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/applet/components/Hero.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/applet/components/Hero.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/app/applet/components/Hero.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBLGlDQUFDLFNBQUksS0FBSSwyQ0FBMEMsV0FBVSxvREFBbUQsS0FBSSxxQkFBcEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBcUk7QUFBQSxVQUNySSx1QkFBQyxjQUFXLFdBQVUsdUdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXlIO0FBQUEsYUFGN0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUdBO0FBQUEsUUFDQSx1QkFBQyxPQUFFLFdBQVUsMkNBQTBDLGlGQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXdIO0FBQUEsV0FaNUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWFBO0FBQUEsU0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWdDQTtBQUFBLE9BekRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EwREE7QUFFSjtBQUFFQyxLQTlESVo7QUFnRU4sZUFBZUE7QUFBSyxJQUFBWTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJQbGF5Q2lyY2xlIiwiSGVybyIsIm1haW5OZXdzIiwic2Vjb25kYXJ5TmV3cyIsImltYWdlVXJsIiwidGl0bGUiLCJleGNlcnB0IiwiYXV0aG9yIiwiZGF0ZSIsIm1hcCIsIm5ld3MiLCJjYXRlZ29yeSIsImlkIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSGVyby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV3c0l0ZW0gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBDaGV2cm9uUmlnaHQsIFBsYXlDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgSGVyb1Byb3BzIHtcbiAgbWFpbk5ld3M6IE5ld3NJdGVtO1xuICBzZWNvbmRhcnlOZXdzOiBOZXdzSXRlbVtdO1xufVxuXG5jb25zdCBIZXJvOiBSZWFjdC5GQzxIZXJvUHJvcHM+ID0gKHsgbWFpbk5ld3MsIHNlY29uZGFyeU5ld3MgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgcHktOCBncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICB7LyogTWFpbiBTcG90bGlnaHQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTIgcmVsYXRpdmUgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQteGwgc2hhZG93LTJ4bFwiPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIHNyYz17bWFpbk5ld3MuaW1hZ2VVcmx9IFxuICAgICAgICAgIGFsdD17bWFpbk5ld3MudGl0bGV9IFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVs0MDBweF0gbWQ6aC1bNTAwcHhdIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrIHZpYS10cmFuc3BhcmVudCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTkwXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHAtNiBtZDpwLTEwIHctZnVsbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXJlZC03MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBweC0zIHB5LTEgcm91bmRlZC1zbSBtYi00IGlubGluZS1ibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgc2hhZG93LWxnXCI+VGluIHRpw6p1IMSRaeG7g208L3NwYW4+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgbWItNCBsZWFkaW5nLXRpZ2h0IGdyb3VwLWhvdmVyOnRleHQteWVsbG93LTQwMCB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICB7bWFpbk5ld3MudGl0bGV9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMjAwIGxpbmUtY2xhbXAtMiBtZDp0ZXh0LWxnIG1iLTQgbWF4LXctMnhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICB7bWFpbk5ld3MuZXhjZXJwdH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItNFwiPnttYWluTmV3cy5hdXRob3J9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e21haW5OZXdzLmRhdGV9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU2lkZSBOZXdzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjMWEzYzFhXSBib3JkZXItbC00IGJvcmRlci1yZWQtNzAwIHBsLTMgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0XCI+xJDhu41jIG5oaeG7gXUgbmjhuqV0PC9oMz5cbiAgICAgICAge3NlY29uZGFyeU5ld3MubWFwKChuZXdzKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e25ld3MuaWR9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTI0IGZsZXgtc2hyaW5rLTAgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtuZXdzLmltYWdlVXJsfSBhbHQ9e25ld3MudGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LXJlZC03MDAgdXBwZXJjYXNlIG1iLTFcIj57bmV3cy5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbSBtZDp0ZXh0LWJhc2UgbGVhZGluZy1zbnVnIGdyb3VwLWhvdmVyOnRleHQtYmx1ZS03MDAgdHJhbnNpdGlvbiBsaW5lLWNsYW1wLTJcIj5cbiAgICAgICAgICAgICAgICB7bmV3cy50aXRsZX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIG10LTFcIj57bmV3cy5kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cblxuICAgICAgICB7LyogTXVsdGltZWRpYSBIaWdobGlnaHQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBiZy1bIzFhM2MxYV0gcm91bmRlZC14bCBwLTYgdGV4dC13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXJpZ2h0LTEwIC1ib3R0b20tMTAgb3BhY2l0eS0xMFwiPlxuICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlIGNsYXNzTmFtZT1cInctNDggaC00OFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBtYi00IGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFBsYXlDaXJjbGUgY2xhc3NOYW1lPVwidy01IGgtNSBtci0yIHRleHQtcmVkLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgVklERU8gxJDhurZDIFPhuq5DXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtdmlkZW8gYmctZ3JheS04MDAgcm91bmRlZC1sZyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBncm91cCBjdXJzb3ItcG9pbnRlciBib3JkZXIgYm9yZGVyLXdoaXRlLzIwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC92aWQxLzQwMC8yMjVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBvcGFjaXR5LTYwIHJvdW5kZWQtbGdcIiBhbHQ9XCJWaWRlbyB0aHVtYm5haWxcIiAvPlxuICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlIGNsYXNzTmFtZT1cInctMTIgaC0xMiBhYnNvbHV0ZSB0ZXh0LXdoaXRlIG9wYWNpdHktODAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb25cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtc20gZm9udC1zZW1pYm9sZCBsaW5lLWNsYW1wLTJcIj5OaMOsbiBs4bqhaSBs4buLY2ggc+G7rSBow6BvIGjDuW5nIGPhu6dhIHF1w6JuIGNo4bunbmcgSOG6o2kgUXXDom4gcXVhIGPDoWMgdGjhu51pIGvhu7M8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdLCJmaWxlIjoiL2FwcC9hcHBsZXQvY29tcG9uZW50cy9IZXJvLnRzeCJ9