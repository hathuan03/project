import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/Header.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d6021253"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Search, Bell, Calendar, CloudSun, ShieldCheck } from "/node_modules/.vite/deps/lucide-react.js?v=d6021253";
const Header = () => {
  const categories = ["Giới thiệu", "Tin tức", "Truyện ở đại đội", "Câu chuyện pháp luật", "Mỗi tuần một điều luật"];
  return /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 bg-white shadow-lg border-b-4 border-red-700", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1a3c1a] text-white py-1.5 px-4 flex justify-between items-center text-[10px] md:text-xs font-semibold", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV(Calendar, { className: "w-3 h-3 mr-1 text-yellow-400" }, void 0, false, {
            fileName: "/app/applet/components/Header.tsx",
            lineNumber: 15,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Thứ Sáu, 24/05/2024" }, void 0, false, {
            fileName: "/app/applet/components/Header.tsx",
            lineNumber: 16,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden sm:flex items-center", children: [
          /* @__PURE__ */ jsxDEV(CloudSun, { className: "w-3 h-3 mr-1 text-yellow-400" }, void 0, false, {
            fileName: "/app/applet/components/Header.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Thời tiết: 28°C - Nắng đẹp" }, void 0, false, {
            fileName: "/app/applet/components/Header.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4 uppercase tracking-wider", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition", children: "Góp ý" }, void 0, false, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-gray-500", children: "|" }, void 0, false, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition", children: "Đường dây nóng" }, void 0, false, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/Header.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-xl md:text-3xl font-black text-[#1a3c1a] leading-none uppercase tracking-tighter", children: "TRUNG ĐOÀN 2" }, void 0, false, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs md:text-lg font-bold text-red-700 tracking-[0.15em] uppercase mt-1", children: "Đoàn An Lão Anh Hùng" }, void 0, false, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center mt-1 text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em]", children: [
          /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-3 h-3 mr-1 text-green-700" }, void 0, false, {
            fileName: "/app/applet/components/Header.tsx",
            lineNumber: 38,
            columnNumber: 19
          }, this),
          "Sư đoàn 3 - Quân khu 1"
        ] }, void 0, true, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 34,
        columnNumber: 14
      }, this) }, void 0, false, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative hidden xl:block", children: [
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "text",
              placeholder: "Tìm kiếm nội dung...",
              className: "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-[#1a3c1a] w-64 transition-all text-xs font-medium"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/components/Header.tsx",
              lineNumber: 47,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(Search, { className: "absolute left-3 top-2 w-4 h-4 text-gray-400" }, void 0, false, {
            fileName: "/app/applet/components/Header.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "p-2 bg-gray-100 hover:bg-red-50 rounded-full text-red-700 transition relative", children: [
          /* @__PURE__ */ jsxDEV(Bell, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/components/Header.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "absolute top-1 right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white" }, void 0, false, {
            fileName: "/app/applet/components/Header.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/Header.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("nav", { className: "bg-[#1a3c1a] text-white overflow-x-auto no-scrollbar", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxDEV("ul", { className: "flex items-center min-w-max", children: [
      /* @__PURE__ */ jsxDEV("li", { className: "py-3 px-4 border-b-4 border-yellow-400 font-black text-xs uppercase bg-white/10 flex-shrink-0", children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "block", children: "Trang chủ" }, void 0, false, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      categories.map(
        (cat) => /* @__PURE__ */ jsxDEV("li", { className: "py-3 px-4 border-b-4 border-transparent hover:border-yellow-400 hover:bg-white/5 transition cursor-pointer font-bold text-[11px] uppercase tracking-tighter text-center whitespace-nowrap flex-shrink-0", children: /* @__PURE__ */ jsxDEV("a", { href: `#${cat.toLowerCase().replace(/\s+/g, "-")}`, className: "block", children: cat }, void 0, false, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this) }, cat, false, {
          fileName: "/app/applet/components/Header.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      )
    ] }, void 0, true, {
      fileName: "/app/applet/components/Header.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/components/Header.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/components/Header.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "bg-red-50 border-t border-b border-red-100 py-2.5 overflow-hidden whitespace-nowrap", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto flex items-center px-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-red-700 text-white text-[10px] font-black px-3 py-1 mr-6 rounded-sm flex-shrink-0 shadow-sm uppercase italic", children: "Truyền thống vẻ vang:" }, void 0, false, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "animate-marquee inline-block text-sm md:text-lg font-black text-red-800 uppercase tracking-widest", children: "“Bám đất bám dân, càng đánh càng mạnh càng đánh càng trưởng thành”" }, void 0, false, {
        fileName: "/app/applet/components/Header.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/Header.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/components/Header.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("style", { children: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-180%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      ` }, void 0, false, {
      fileName: "/app/applet/components/Header.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/components/Header.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};
_c = Header;
export default Header;
var _c;
$RefreshReg$(_c, "Header");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/applet/components/Header.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/applet/components/Header.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/app/applet/components/Header.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBZUU7QUFBQSxPQWxHSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbUdBO0FBRUo7QUFBRUcsS0F6R0lOO0FBMkdOLGVBQWVBO0FBQU8sSUFBQU07QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiU2VhcmNoIiwiQmVsbCIsIkNhbGVuZGFyIiwiQ2xvdWRTdW4iLCJTaGllbGRDaGVjayIsIkhlYWRlciIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXQiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlYXJjaCwgQmVsbCwgQ2FsZW5kYXIsIENsb3VkU3VuLCBTaGllbGRDaGVjayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBOZXdzQ2F0ZWdvcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJHaeG7m2kgdGhp4buHdVwiLCBcIlRpbiB04bupY1wiLCBcIlRydXnhu4duIOG7nyDEkeG6oWkgxJHhu5lpXCIsIFwiQ8OidSBjaHV54buHbiBwaMOhcCBsdeG6rXRcIiwgXCJN4buXaSB0deG6p24gbeG7mXQgxJFp4buBdSBsdeG6rXRcIl07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTUwIGJnLXdoaXRlIHNoYWRvdy1sZyBib3JkZXItYi00IGJvcmRlci1yZWQtNzAwXCI+XG4gICAgICB7LyogVGhhbmggdHLhuqFuZyB0aMOhaSB0csOqbiBjw7luZyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxYTNjMWFdIHRleHQtd2hpdGUgcHktMS41IHB4LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtWzEwcHhdIG1kOnRleHQteHMgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTEgdGV4dC15ZWxsb3ctNDAwXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPlRo4bupIFPDoXUsIDI0LzA1LzIwMjQ8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206ZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxDbG91ZFN1biBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTEgdGV4dC15ZWxsb3ctNDAwXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPlRo4budaSB0aeG6v3Q6IDI4wrBDIC0gTuG6r25nIMSR4bq5cDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC15ZWxsb3ctNDAwIHRyYW5zaXRpb25cIj5Hw7NwIMO9PC9hPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj58PC9zcGFuPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC15ZWxsb3ctNDAwIHRyYW5zaXRpb25cIj7EkMaw4budbmcgZMOieSBuw7NuZzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFBo4bqnbiBCcmFuZGluZyBjaMOtbmggKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgcHktMyBtZDpweS00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTN4bCBmb250LWJsYWNrIHRleHQtWyMxYTNjMWFdIGxlYWRpbmctbm9uZSB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPlRSVU5HIMSQT8OATiAyPC9oMT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14cyBtZDp0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXJlZC03MDAgdHJhY2tpbmctWzAuMTVlbV0gdXBwZXJjYXNlIG10LTFcIj7EkG/DoG4gQW4gTMOjbyBBbmggSMO5bmc8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIG10LTEgdGV4dC1bOXB4XSB0ZXh0LWdyYXktNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXVwiPlxuICAgICAgICAgICAgICAgICAgPFNoaWVsZENoZWNrIGNsYXNzTmFtZT1cInctMyBoLTMgbXItMSB0ZXh0LWdyZWVuLTcwMFwiIC8+XG4gICAgICAgICAgICAgICAgICBTxrAgxJFvw6BuIDMgLSBRdcOibiBraHUgMVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaGlkZGVuIHhsOmJsb2NrXCI+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVMOsbSBraeG6v20gbuG7mWkgZHVuZy4uLlwiIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBweS0yIHB4LTQgcGwtMTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLVsjMWEzYzFhXSB3LTY0IHRyYW5zaXRpb24tYWxsIHRleHQteHMgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0yIHctNCBoLTQgdGV4dC1ncmF5LTQwMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgYmctZ3JheS0xMDAgaG92ZXI6YmctcmVkLTUwIHJvdW5kZWQtZnVsbCB0ZXh0LXJlZC03MDAgdHJhbnNpdGlvbiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPEJlbGwgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMSByaWdodC0xIHctMi41IGgtMi41IGJnLXJlZC02MDAgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci13aGl0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1lbnUgxJFp4buBdSBoxrDhu5tuZyBjaMOtbmggKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLVsjMWEzYzFhXSB0ZXh0LXdoaXRlIG92ZXJmbG93LXgtYXV0byBuby1zY3JvbGxiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1pbi13LW1heFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB5LTMgcHgtNCBib3JkZXItYi00IGJvcmRlci15ZWxsb3ctNDAwIGZvbnQtYmxhY2sgdGV4dC14cyB1cHBlcmNhc2UgYmctd2hpdGUvMTAgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrXCI+VHJhbmcgY2jhu6c8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXQpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17Y2F0fSBjbGFzc05hbWU9XCJweS0zIHB4LTQgYm9yZGVyLWItNCBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXllbGxvdy00MDAgaG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyIGZvbnQtYm9sZCB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlciB0ZXh0LWNlbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2NhdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJy0nKX1gfSBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgICAgICAge2NhdH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICB7LyogS2jhuql1IGhp4buHdSBjaOG6oXkgLSBNYXJxdWVlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLXJlZC0xMDAgcHktMi41IG92ZXJmbG93LWhpZGRlbiB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC03MDAgdGV4dC13aGl0ZSB0ZXh0LVsxMHB4XSBmb250LWJsYWNrIHB4LTMgcHktMSBtci02IHJvdW5kZWQtc20gZmxleC1zaHJpbmstMCBzaGFkb3ctc20gdXBwZXJjYXNlIGl0YWxpY1wiPlxuICAgICAgICAgICAgVHJ1eeG7gW4gdGjhu5FuZyB24bq7IHZhbmc6XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLW1hcnF1ZWUgaW5saW5lLWJsb2NrIHRleHQtc20gbWQ6dGV4dC1sZyBmb250LWJsYWNrIHRleHQtcmVkLTgwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICDigJxCw6FtIMSR4bqldCBiw6FtIGTDom4sIGPDoG5nIMSRw6FuaCBjw6BuZyBt4bqhbmggY8OgbmcgxJHDoW5oIGPDoG5nIHRyxrDhu59uZyB0aMOgbmjigJ1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIE1vYmlsZSBNZW51IHJlbW92ZWQgLSBob3Jpem9udGFsIG5hdiBpcyBub3cgYWx3YXlzIHZpc2libGUgKi99XG5cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICBAa2V5ZnJhbWVzIG1hcnF1ZWUge1xuICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG4gICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTgwJSk7IH1cbiAgICAgICAgfVxuICAgICAgICAuYW5pbWF0ZS1tYXJxdWVlIHtcbiAgICAgICAgICBhbmltYXRpb246IG1hcnF1ZWUgMjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAubm8tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubm8tc2Nyb2xsYmFyIHtcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwiZmlsZSI6Ii9hcHAvYXBwbGV0L2NvbXBvbmVudHMvSGVhZGVyLnRzeCJ9