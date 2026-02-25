import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/Footer.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d6021253"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin, Shield, Download } from "/node_modules/.vite/deps/lucide-react.js?v=d6021253";
import { downloadFullCode } from "/services/downloadService.ts";
const Footer = () => {
  return /* @__PURE__ */ jsxDEV("footer", { className: "bg-[#1a3c1a] text-white pt-20 pb-10", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-1 rounded-full shadow-lg", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: "https://files.catbox.moe/978v0f.png",
              alt: "Logo Trung đoàn 2",
              className: "w-16 h-16 object-contain"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 14,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 13,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-black uppercase tracking-tighter", children: "TRUNG ĐOÀN 2" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 21,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-yellow-400 font-bold tracking-widest", children: "ĐOÀN AN LÃO ANH HÙNG" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 22,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 20,
            columnNumber: 14
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-green-100/60 text-sm leading-relaxed font-medium", children: "Đơn vị hai lần Anh hùng lực lượng vũ trang nhân dân. Kiên định mục tiêu: Bám đất bám dân, càng đánh càng mạnh càng đánh càng trưởng thành." }, void 0, false, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-3", children: [Facebook, Twitter, Youtube].map(
          (Icon, idx) => /* @__PURE__ */ jsxDEV("a", { href: "#", className: "bg-white/5 p-3 rounded-xl hover:bg-red-700 transition border border-white/5 hover:border-red-500 shadow-sm", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 31,
            columnNumber: 21
          }, this) }, idx, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Footer.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "lg:pl-8", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-black mb-8 border-l-4 border-yellow-400 pl-4 uppercase tracking-tight", children: "Hệ thống Module" }, void 0, false, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 text-green-100/70 text-sm font-bold uppercase tracking-tighter", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Shield, { className: "w-3 h-3 mr-2 text-yellow-500" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 41,
              columnNumber: 92
            }, this),
            " Tin tức đơn vị"
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Shield, { className: "w-3 h-3 mr-2 text-yellow-500" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 42,
              columnNumber: 92
            }, this),
            " Truyền thống Đoàn"
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 42,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Shield, { className: "w-3 h-3 mr-2 text-yellow-500" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 43,
              columnNumber: 92
            }, this),
            " Tủ sách pháp luật"
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Shield, { className: "w-3 h-3 mr-2 text-yellow-500" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 44,
              columnNumber: 92
            }, this),
            " Chuyện đại đội"
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 44,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Shield, { className: "w-3 h-3 mr-2 text-yellow-500" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 45,
              columnNumber: 92
            }, this),
            " Kỹ năng sống"
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Footer.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-black mb-8 border-l-4 border-yellow-400 pl-4 uppercase tracking-tight", children: "Liên kết nội bộ" }, void 0, false, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 text-green-100/70 text-sm font-bold uppercase tracking-tighter", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition", children: "Học viện Quốc phòng" }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition", children: "Cổng TTĐT Bộ Quốc phòng" }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition", children: "Báo Quân đội nhân dân" }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition", children: "Truyền hình Quốc phòng" }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 56,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Footer.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-black mb-8 border-l-4 border-yellow-400 pl-4 uppercase tracking-tight", children: "Thông tin sở chỉ huy" }, void 0, false, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-6 text-green-100/70 text-sm font-medium", children: [
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 mr-4 text-yellow-400 shrink-0" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Thôn Việt Hương, Xã Kép, Tỉnh Bắc Ninh." }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 mr-4 text-yellow-400 shrink-0" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-mono", children: "0976363808 (Trực ban 24/7)" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 mr-4 text-yellow-400 shrink-0" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "thongtin@anlao.army.vn" }, void 0, false, {
              fileName: "/app/applet/components/Footer.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Footer.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/Footer.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-green-100/40 uppercase tracking-[0.2em] font-black", children: [
      /* @__PURE__ */ jsxDEV("p", { children: "© 2024 CỔNG THÔNG TIN TRUNG ĐOÀN 2 - ĐOÀN AN LÃO ANH HÙNG. ALL RIGHTS RESERVED." }, void 0, false, {
        fileName: "/app/applet/components/Footer.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4 md:mt-0 flex space-x-6 items-center", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: downloadFullCode,
            className: "flex items-center space-x-2 bg-yellow-400 text-[#1a3c1a] px-4 py-2 rounded-lg hover:bg-white transition shadow-lg group",
            children: [
              /* @__PURE__ */ jsxDEV(Download, { className: "w-4 h-4 group-hover:bounce" }, void 0, false, {
                fileName: "/app/applet/components/Footer.tsx",
                lineNumber: 87,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "Tải Full Code" }, void 0, false, {
                fileName: "/app/applet/components/Footer.tsx",
                lineNumber: 88,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/components/Footer.tsx",
            lineNumber: 83,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition", children: "Điều lệnh cổng" }, void 0, false, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#", className: "hover:text-yellow-400 transition", children: "Bản đồ trang" }, void 0, false, {
          fileName: "/app/applet/components/Footer.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/Footer.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/Footer.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/components/Footer.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
_c = Footer;
export default Footer;
var _c;
$RefreshReg$(_c, "Footer");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/applet/components/Footer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/applet/components/Footer.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/app/applet/components/Footer.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFJLFdBQVUseUxBQ2I7QUFBQSw2QkFBQyxPQUFFLCtGQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBa0Y7QUFBQSxNQUNsRix1QkFBQyxTQUFJLFdBQVUsNENBQ1g7QUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsU0FBU0o7QUFBQUEsWUFDVCxXQUFVO0FBQUEsWUFFVjtBQUFBLHFDQUFDLFlBQVMsV0FBVSxnQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0Q7QUFBQSxjQUNoRCx1QkFBQyxVQUFLLDZCQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW1CO0FBQUE7QUFBQTtBQUFBLFVBTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1BO0FBQUEsUUFDQSx1QkFBQyxPQUFFLE1BQUssS0FBSSxXQUFVLG9DQUFtQyw4QkFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF1RTtBQUFBLFFBQ3ZFLHVCQUFDLE9BQUUsTUFBSyxLQUFJLFdBQVUsb0NBQW1DLDRCQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXFFO0FBQUEsV0FUekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVVBO0FBQUEsU0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBYUE7QUFBQSxPQXJGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBc0ZBO0FBRUo7QUFBRUssS0ExRklKO0FBNEZOLGVBQWVBO0FBQU8sSUFBQUk7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiRmFjZWJvb2siLCJUd2l0dGVyIiwiWW91dHViZSIsIk1haWwiLCJQaG9uZSIsIk1hcFBpbiIsIlNoaWVsZCIsIkRvd25sb2FkIiwiZG93bmxvYWRGdWxsQ29kZSIsIkZvb3RlciIsIm1hcCIsIkljb24iLCJpZHgiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJGb290ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhY2Vib29rLCBUd2l0dGVyLCBZb3V0dWJlLCBNYWlsLCBQaG9uZSwgTWFwUGluLCBTaGllbGQsIERvd25sb2FkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGRvd25sb2FkRnVsbENvZGUgfSBmcm9tICcuLi9zZXJ2aWNlcy9kb3dubG9hZFNlcnZpY2UnO1xuXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctWyMxYTNjMWFdIHRleHQtd2hpdGUgcHQtMjAgcGItMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC0xMlwiPlxuICAgICAgICB7LyogQnJhbmQgJiBNaXNzaW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTEgcm91bmRlZC1mdWxsIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ZpbGVzLmNhdGJveC5tb2UvOTc4djBmLnBuZ1wiIFxuICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nbyBUcnVuZyDEkW/DoG4gMlwiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPlRSVU5HIMSQT8OATiAyPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQteWVsbG93LTQwMCBmb250LWJvbGQgdHJhY2tpbmctd2lkZXN0XCI+xJBPw4BOIEFOIEzDg08gQU5IIEjDmU5HPC9wPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tMTAwLzYwIHRleHQtc20gbGVhZGluZy1yZWxheGVkIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICDEkMahbiB24buLIGhhaSBs4bqnbiBBbmggaMO5bmcgbOG7sWMgbMaw4bujbmcgdsWpIHRyYW5nIG5ow6JuIGTDom4uIEtpw6puIMSR4buLbmggbeG7pWMgdGnDqnU6IELDoW0gxJHhuqV0IGLDoW0gZMOibiwgY8OgbmcgxJHDoW5oIGPDoG5nIG3huqFuaCBjw6BuZyDEkcOhbmggY8OgbmcgdHLGsOG7n25nIHRow6BuaC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAge1tGYWNlYm9vaywgVHdpdHRlciwgWW91dHViZV0ubWFwKChJY29uLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8YSBrZXk9e2lkeH0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJiZy13aGl0ZS81IHAtMyByb3VuZGVkLXhsIGhvdmVyOmJnLXJlZC03MDAgdHJhbnNpdGlvbiBib3JkZXIgYm9yZGVyLXdoaXRlLzUgaG92ZXI6Ym9yZGVyLXJlZC01MDAgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2F0ZWdvcmllcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpwbC04XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ibGFjayBtYi04IGJvcmRlci1sLTQgYm9yZGVyLXllbGxvdy00MDAgcGwtNCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRcIj5I4buHIHRo4buRbmcgTW9kdWxlPC9oMz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtZ3JlZW4tMTAwLzcwIHRleHQtc20gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvdy00MDAgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlclwiPjxTaGllbGQgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0yIHRleHQteWVsbG93LTUwMFwiIC8+IFRpbiB04bupYyDEkcahbiB24buLPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvdy00MDAgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlclwiPjxTaGllbGQgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0yIHRleHQteWVsbG93LTUwMFwiIC8+IFRydXnhu4FuIHRo4buRbmcgxJBvw6BuPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvdy00MDAgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlclwiPjxTaGllbGQgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0yIHRleHQteWVsbG93LTUwMFwiIC8+IFThu6cgc8OhY2ggcGjDoXAgbHXhuq10PC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvdy00MDAgdHJhbnNpdGlvbiBmbGV4IGl0ZW1zLWNlbnRlclwiPjxTaGllbGQgY2xhc3NOYW1lPVwidy0zIGgtMyBtci0yIHRleHQteWVsbG93LTUwMFwiIC8+IENodXnhu4duIMSR4bqhaSDEkeG7mWk8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQteWVsbG93LTQwMCB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyXCI+PFNoaWVsZCBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTIgdGV4dC15ZWxsb3ctNTAwXCIgLz4gS+G7uSBuxINuZyBz4buRbmc8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTGlua3MgKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ibGFjayBtYi04IGJvcmRlci1sLTQgYm9yZGVyLXllbGxvdy00MDAgcGwtNCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRcIj5MacOqbiBr4bq/dCBu4buZaSBi4buZPC9oMz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtZ3JlZW4tMTAwLzcwIHRleHQtc20gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy10aWdodGVyXCI+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvdy00MDAgdHJhbnNpdGlvblwiPkjhu41jIHZp4buHbiBRdeG7kWMgcGjDsm5nPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvdy00MDAgdHJhbnNpdGlvblwiPkPhu5VuZyBUVMSQVCBC4buZIFF14buRYyBwaMOybmc8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQteWVsbG93LTQwMCB0cmFuc2l0aW9uXCI+QsOhbyBRdcOibiDEkeG7mWkgbmjDom4gZMOibjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC15ZWxsb3ctNDAwIHRyYW5zaXRpb25cIj5UcnV54buBbiBow6xuaCBRdeG7kWMgcGjDsm5nPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENvbnRhY3QgKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ibGFjayBtYi04IGJvcmRlci1sLTQgYm9yZGVyLXllbGxvdy00MDAgcGwtNCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRcIj5UaMO0bmcgdGluIHPhu58gY2jhu4kgaHV5PC9oMz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS02IHRleHQtZ3JlZW4tMTAwLzcwIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy01IGgtNSBtci00IHRleHQteWVsbG93LTQwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPlRow7RuIFZp4buHdCBIxrDGoW5nLCBYw6MgS8OpcCwgVOG7iW5oIELhuq9jIE5pbmguPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy01IGgtNSBtci00IHRleHQteWVsbG93LTQwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ub1wiPjA5NzYzNjM4MDggKFRy4buxYyBiYW4gMjQvNyk8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxNYWlsIGNsYXNzTmFtZT1cInctNSBoLTUgbXItNCB0ZXh0LXllbGxvdy00MDAgc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj50aG9uZ3RpbkBhbmxhby5hcm15LnZuPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgbXQtMjAgcHQtMTAgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzUgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtWzEwcHhdIHRleHQtZ3JlZW4tMTAwLzQwIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIGZvbnQtYmxhY2tcIj5cbiAgICAgICAgPHA+wqkgMjAyNCBD4buUTkcgVEjDlE5HIFRJTiBUUlVORyDEkE/DgE4gMiAtIMSQT8OATiBBTiBMw4NPIEFOSCBIw5lORy4gQUxMIFJJR0hUUyBSRVNFUlZFRC48L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBtZDptdC0wIGZsZXggc3BhY2UteC02IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgb25DbGljaz17ZG93bmxvYWRGdWxsQ29kZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGJnLXllbGxvdy00MDAgdGV4dC1bIzFhM2MxYV0gcHgtNCBweS0yIHJvdW5kZWQtbGcgaG92ZXI6Ymctd2hpdGUgdHJhbnNpdGlvbiBzaGFkb3ctbGcgZ3JvdXBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNCBncm91cC1ob3Zlcjpib3VuY2VcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5U4bqjaSBGdWxsIENvZGU8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC15ZWxsb3ctNDAwIHRyYW5zaXRpb25cIj7EkGnhu4F1IGzhu4duaCBj4buVbmc8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQteWVsbG93LTQwMCB0cmFuc2l0aW9uXCI+QuG6o24gxJHhu5MgdHJhbmc8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwiZmlsZSI6Ii9hcHAvYXBwbGV0L2NvbXBvbmVudHMvRm9vdGVyLnRzeCJ9