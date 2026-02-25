import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/NewsGrid.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d6021253"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Clock, User, Share2 } from "/node_modules/.vite/deps/lucide-react.js?v=d6021253";
const NewsGrid = ({ news, title, category }) => {
  return /* @__PURE__ */ jsxDEV("section", { className: "max-w-7xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-2", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-extrabold text-[#1a3c1a] uppercase tracking-wider relative", children: [
        title,
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-[10px] left-0 w-24 h-[4px] bg-red-700" }, void 0, false, {
          fileName: "/app/applet/components/NewsGrid.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/NewsGrid.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-sm font-bold text-red-700 hover:underline flex items-center", children: "Xem tất cả ➔" }, void 0, false, {
        fileName: "/app/applet/components/NewsGrid.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/NewsGrid.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: news.map(
      (item) => /* @__PURE__ */ jsxDEV("article", { className: "bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden h-52", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: item.imageUrl,
              alt: item.title,
              className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/components/NewsGrid.tsx",
              lineNumber: 29,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-red-700 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest shadow-lg", children: item.category }, void 0, false, {
            fileName: "/app/applet/components/NewsGrid.tsx",
            lineNumber: 35,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/NewsGrid.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this),
          item.isHot && /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4 bg-yellow-400 text-red-700 p-1 rounded-full animate-pulse shadow-md", children: /* @__PURE__ */ jsxDEV(Share2, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/app/applet/components/NewsGrid.tsx",
            lineNumber: 41,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/NewsGrid.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/NewsGrid.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex flex-col flex-grow", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-700 transition", children: item.title }, void 0, false, {
            fileName: "/app/applet/components/NewsGrid.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed", children: item.excerpt }, void 0, false, {
            fileName: "/app/applet/components/NewsGrid.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pt-4 border-t border-gray-100 mt-auto", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-xs text-gray-500 space-x-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV(User, { className: "w-3 h-3 mr-1" }, void 0, false, {
                  fileName: "/app/applet/components/NewsGrid.tsx",
                  lineNumber: 57,
                  columnNumber: 21
                }, this),
                item.author
              ] }, void 0, true, {
                fileName: "/app/applet/components/NewsGrid.tsx",
                lineNumber: 56,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV(Clock, { className: "w-3 h-3 mr-1" }, void 0, false, {
                  fileName: "/app/applet/components/NewsGrid.tsx",
                  lineNumber: 61,
                  columnNumber: 21
                }, this),
                item.date
              ] }, void 0, true, {
                fileName: "/app/applet/components/NewsGrid.tsx",
                lineNumber: 60,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/components/NewsGrid.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "text-xs font-bold text-red-700 hover:bg-red-50 px-3 py-1 rounded transition border border-red-700", children: "Chi tiết" }, void 0, false, {
              fileName: "/app/applet/components/NewsGrid.tsx",
              lineNumber: 65,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/components/NewsGrid.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/NewsGrid.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, item.id, true, {
        fileName: "/app/applet/components/NewsGrid.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/app/applet/components/NewsGrid.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/components/NewsGrid.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};
_c = NewsGrid;
export default NewsGrid;
var _c;
$RefreshReg$(_c, "NewsGrid");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/applet/components/NewsGrid.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/applet/components/NewsGrid.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/app/applet/components/NewsGrid.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBWTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJDbG9jayIsIlVzZXIiLCJTaGFyZTIiLCJOZXdzR3JpZCIsIm5ld3MiLCJ0aXRsZSIsImNhdGVnb3J5IiwibWFwIiwiaXRlbSIsImltYWdlVXJsIiwiaXNIb3QiLCJleGNlcnB0IiwiYXV0aG9yIiwiZGF0ZSIsImlkIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmV3c0dyaWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5ld3NJdGVtLCBOZXdzQ2F0ZWdvcnkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBDbG9jaywgVXNlciwgU2hhcmUyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIE5ld3NHcmlkUHJvcHMge1xuICBuZXdzOiBOZXdzSXRlbVtdO1xuICB0aXRsZTogc3RyaW5nO1xuICBjYXRlZ29yeT86IE5ld3NDYXRlZ29yeTtcbn1cblxuY29uc3QgTmV3c0dyaWQ6IFJlYWN0LkZDPE5ld3NHcmlkUHJvcHM+ID0gKHsgbmV3cywgdGl0bGUsIGNhdGVnb3J5IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHB5LThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLTggYm9yZGVyLWItMiBib3JkZXItZ3JheS0yMDAgcGItMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1bIzFhM2MxYV0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tWzEwcHhdIGxlZnQtMCB3LTI0IGgtWzRweF0gYmctcmVkLTcwMFwiPjwvZGl2PlxuICAgICAgICA8L2gyPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtcmVkLTcwMCBob3Zlcjp1bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICBYZW0gdOG6pXQgY+G6oyDinpRcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICB7bmV3cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8YXJ0aWNsZSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCBncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gaC01MlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZVVybH0gXG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctcmVkLTcwMCB0ZXh0LXdoaXRlIHRleHQtWzEwcHhdIGZvbnQtYmxhY2sgcHgtMiBweS0xIHJvdW5kZWQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2l0ZW0uaXNIb3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgYmcteWVsbG93LTQwMCB0ZXh0LXJlZC03MDAgcC0xIHJvdW5kZWQtZnVsbCBhbmltYXRlLXB1bHNlIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNoYXJlMiBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGZsZXgtY29sIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0zIGxpbmUtY2xhbXAtMiBncm91cC1ob3Zlcjp0ZXh0LXJlZC03MDAgdHJhbnNpdGlvblwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItNCBsaW5lLWNsYW1wLTMgZmxleC1ncm93IGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmV4Y2VycHR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB0LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMTAwIG10LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdGV4dC1ncmF5LTUwMCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXIgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXJlZC03MDAgaG92ZXI6YmctcmVkLTUwIHB4LTMgcHktMSByb3VuZGVkIHRyYW5zaXRpb24gYm9yZGVyIGJvcmRlci1yZWQtNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIENoaSB0aeG6v3RcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c0dyaWQ7XG4iXSwiZmlsZSI6Ii9hcHAvYXBwbGV0L2NvbXBvbmVudHMvTmV3c0dyaWQudHN4In0=