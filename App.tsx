import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d6021253"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import Header from "/components/Header.tsx";
import Hero from "/components/Hero.tsx";
import Footer from "/components/Footer.tsx";
import AIAssistant from "/components/AIAssistant.tsx";
import AboutUnit from "/components/AboutUnit.tsx";
import { MOCK_NEWS } from "/data/mockData.ts";
import { NewsCategory } from "/types.ts";
import { BookOpen, Users, User, Scale, Star, Zap, Shield } from "/node_modules/.vite/deps/lucide-react.js?v=d6021253";
const App = () => {
  const mainSpotlight = MOCK_NEWS[0];
  const sideHighlights = MOCK_NEWS.slice(1, 4);
  const newsItems = MOCK_NEWS.filter((n) => n.category === NewsCategory.NEWS);
  const traditionItems = MOCK_NEWS.filter((n) => n.category === NewsCategory.TRADITION);
  const companyStories = MOCK_NEWS.filter((n) => n.category === NewsCategory.COMPANY_STORIES);
  const legalNews = MOCK_NEWS.filter((n) => n.category === NewsCategory.LAW_WEEKLY || n.category === NewsCategory.LEGAL_STORIES);
  const skillsNews = MOCK_NEWS.filter((n) => n.category === NewsCategory.LIFE_SKILLS);
  const modelItems = MOCK_NEWS.filter((n) => n.category === NewsCategory.MODELS);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col selection:bg-red-700 selection:text-white bg-white", children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/app/applet/App.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-grow", children: [
      /* @__PURE__ */ jsxDEV(AboutUnit, {}, void 0, false, {
        fileName: "/app/applet/App.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Hero, { mainNews: mainSpotlight, secondaryNews: sideHighlights }, void 0, false, {
        fileName: "/app/applet/App.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 py-16", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-2", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-extrabold text-[#1a3c1a] uppercase tracking-wider relative", children: [
              "Hoạt động nổi bật",
              /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-[10px] left-0 w-24 h-[4px] bg-red-700" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 43,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-sm font-bold text-red-700 hover:underline flex items-center", children: "Xem tất cả ➔" }, void 0, false, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 45,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: newsItems.map(
            (item) => /* @__PURE__ */ jsxDEV("article", { className: "bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden h-48", children: [
                /* @__PURE__ */ jsxDEV("img", { src: item.imageUrl, alt: item.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 53,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxDEV("span", { className: "bg-red-700 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest shadow-lg", children: item.category }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 55,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 54,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 52,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex flex-col flex-grow", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-700 transition", children: item.title }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 59,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed", children: item.excerpt }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 60,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pt-4 border-t border-gray-100 mt-auto", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest", children: item.date }, void 0, false, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 62,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("button", { className: "text-xs font-bold text-red-700", children: "Chi tiết" }, void 0, false, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 63,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 61,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 58,
                columnNumber: 21
              }, this)
            ] }, item.id, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this)
          ) }, void 0, false, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/App.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-1 space-y-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 mb-8 border-b-2 border-green-700 pb-2", children: [
            /* @__PURE__ */ jsxDEV(Star, { className: "text-yellow-500 fill-current w-6 h-6" }, void 0, false, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 74,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-black text-[#1a3c1a] uppercase", children: "Mô Hình Tiêu Biểu" }, void 0, false, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 75,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: modelItems.length > 0 ? modelItems.map(
            (item, idx) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition group flex gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden", children: /* @__PURE__ */ jsxDEV("img", { src: item.imageUrl, className: "w-full h-full object-cover group-hover:scale-105 transition duration-500", alt: item.title }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 81,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 80,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-[#1a3c1a] text-xs leading-snug line-clamp-2", children: item.title }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 84,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-2 flex items-center text-[9px] font-black text-green-700 uppercase", children: [
                  /* @__PURE__ */ jsxDEV(Zap, { className: "w-3 h-3 mr-1" }, void 0, false, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 86,
                    columnNumber: 31
                  }, this),
                  "Mô hình điểm sáng"
                ] }, void 0, true, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 85,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 83,
                columnNumber: 27
              }, this)
            ] }, idx, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 79,
              columnNumber: 17
            }, this)
          ) : /* @__PURE__ */ jsxDEV("p", { className: "text-center text-gray-400 italic text-sm", children: "Đang cập nhật..." }, void 0, false, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#1a3c1a] to-[#2d5a27] p-6 rounded-2xl text-white shadow-lg", children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "font-black uppercase text-sm mb-4 border-b border-white/20 pb-2", children: "Thông báo nhanh" }, void 0, false, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3 text-xs", children: [
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1 shrink-0" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 101,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "opacity-80", children: "Kế hoạch huấn luyện tháng 3 đã được cập nhật tại Ban Tham mưu." }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 102,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 100,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1 shrink-0" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 105,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "opacity-80", children: 'Thông báo về việc đăng ký thi đua "Quyết thắng" đợt 2.' }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 106,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 104,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/App.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/App.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/App.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-[#1a3c1a] text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-5 pointer-events-none", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" }, void 0, false, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full translate-x-1/3 translate-y-1/3" }, void 0, false, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/App.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-yellow-400 rounded-2xl text-[#1a3c1a]", children: /* @__PURE__ */ jsxDEV(Users, { className: "w-8 h-8" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 126,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 125,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-black uppercase tracking-tight", children: "Chuyện ở Đại Đội" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 129,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-green-200 text-sm font-medium", children: "Góc nhìn chân thực về đời sống, tâm tư của cán bộ, chiến sĩ" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 130,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full border border-white/20 text-sm font-bold transition uppercase tracking-widest", children: "Gửi câu chuyện của bạn" }, void 0, false, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: companyStories.length > 0 ? companyStories.map(
            (item) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition group backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400", children: "Tâm tình chiến sĩ" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 141,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 140,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold mb-4 group-hover:text-yellow-400 transition leading-tight", children: item.title }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 143,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-gray-300 text-sm line-clamp-4 mb-6 leading-relaxed opacity-80 italic", children: [
                '"',
                item.excerpt,
                '"'
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 144,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center pt-6 border-t border-white/10 text-[10px] font-bold uppercase tracking-widest text-green-400", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsxDEV(User, { className: "w-3 h-3 mr-1" }, void 0, false, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 147,
                    columnNumber: 65
                  }, this),
                  " ",
                  item.author
                ] }, void 0, true, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 147,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: item.date }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 148,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 145,
                columnNumber: 25
              }, this)
            ] }, item.id, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 139,
              columnNumber: 15
            }, this)
          ) : /* @__PURE__ */ jsxDEV("div", { className: "col-span-full text-center py-10 opacity-50 italic", children: "Đang cập nhật câu chuyện mới..." }, void 0, false, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/App.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/App.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 border-b-4 border-red-700 pb-4", children: [
            /* @__PURE__ */ jsxDEV(Scale, { className: "w-8 h-8 text-red-700" }, void 0, false, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 165,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-black text-[#1a3c1a] uppercase tracking-tighter", children: "Tủ sách Pháp Luật" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 167,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 font-bold uppercase tracking-widest mt-1", children: "Nâng cao nhận thức, thượng tôn pháp luật" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 168,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 166,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 164,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 rounded-3xl p-8 shadow-inner border border-gray-100", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-red-700 text-white p-6 rounded-2xl mb-8 shadow-xl relative overflow-hidden group", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition duration-700", children: /* @__PURE__ */ jsxDEV(Scale, { className: "w-32 h-32" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 175,
                columnNumber: 30
              }, this) }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 174,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-4 relative z-10", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "bg-yellow-400 text-red-900 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm", children: "Hot" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 178,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV(Zap, { className: "w-5 h-5 text-yellow-400" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 179,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 177,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-black uppercase relative z-10", children: "Điều 10: Nghĩa vụ của quân nhân" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 181,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm mt-3 opacity-90 line-clamp-2 relative z-10 font-medium", children: "Tìm hiểu các quy định cụ thể về trách nhiệm và nghĩa vụ của quân nhân đối với Tổ quốc và kỷ luật quân đội..." }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 182,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "mt-6 text-xs font-black uppercase tracking-widest bg-white text-red-700 px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition", children: "Xem chi tiết" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 183,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 173,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-8", children: legalNews.map(
              (item) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-6 group cursor-pointer items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-24 h-24 bg-gray-200 rounded-2xl flex-shrink-0 overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxDEV("img", { src: item.imageUrl, className: "w-full h-full object-cover group-hover:scale-110 transition duration-500", alt: "" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 190,
                  columnNumber: 37
                }, this) }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 189,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex-grow", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-black text-red-600 uppercase tracking-widest", children: item.category }, void 0, false, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 193,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-gray-900 group-hover:text-red-700 transition leading-tight mt-1 text-base", children: item.title }, void 0, false, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 194,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 mt-2 font-medium", children: [
                    item.date,
                    " • Ban Chính trị"
                  ] }, void 0, true, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 195,
                    columnNumber: 37
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 192,
                  columnNumber: 33
                }, this)
              ] }, item.id, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 188,
                columnNumber: 19
              }, this)
            ) }, void 0, false, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 186,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/App.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 border-b-4 border-blue-700 pb-4", children: [
            /* @__PURE__ */ jsxDEV(BookOpen, { className: "w-8 h-8 text-blue-700" }, void 0, false, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 206,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-black text-[#1a3c1a] uppercase tracking-tighter", children: "Bồi dưỡng kỹ năng sống" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 208,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500 font-bold uppercase tracking-widest mt-1", children: "Rèn luyện bản lĩnh, kỹ năng quân nhân" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 209,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-8", children: [
            skillsNews.map(
              (item) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all flex flex-col md:flex-row gap-8", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "md:w-2/5 aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxDEV("img", { src: item.imageUrl, className: "w-full h-full object-cover", alt: "" }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 216,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 215,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "md:w-3/5", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2 text-blue-700 mb-2", children: [
                    /* @__PURE__ */ jsxDEV(Shield, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/App.tsx",
                      lineNumber: 220,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "Kỹ năng quân nhân chính quy" }, void 0, false, {
                      fileName: "/app/applet/App.tsx",
                      lineNumber: 221,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 219,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-gray-900 mt-1 mb-3 leading-tight group-hover:text-blue-700 transition", children: item.title }, void 0, false, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 223,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 line-clamp-2 mb-6 leading-relaxed font-medium", children: item.excerpt }, void 0, false, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 224,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV("button", { className: "text-xs font-black text-blue-700 hover:text-blue-900 flex items-center group uppercase tracking-widest", children: [
                    "Bắt đầu bài học",
                    /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition" }, void 0, false, {
                      fileName: "/app/applet/App.tsx",
                      lineNumber: 227,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/App.tsx",
                    lineNumber: 225,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/App.tsx",
                  lineNumber: 218,
                  columnNumber: 29
                }, this)
              ] }, item.id, true, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 214,
                columnNumber: 17
              }, this)
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-10 text-white text-center relative overflow-hidden shadow-2xl group", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:rotate-0 transition duration-1000", children: /* @__PURE__ */ jsxDEV(Users, { className: "w-48 h-48" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 234,
                columnNumber: 30
              }, this) }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 233,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("h4", { className: "text-2xl font-black mb-3 uppercase tracking-tight", children: "Hỏi đáp trực tuyến" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 236,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-blue-100 text-sm mb-8 max-w-md mx-auto leading-relaxed", children: "Mọi thắc mắc về chế độ chính sách và kỹ năng sống sẽ được tổ tư vấn giải đáp nhanh nhất." }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 237,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "bg-yellow-400 text-blue-900 font-black py-4 px-10 rounded-full shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition uppercase tracking-[0.2em] text-xs", children: "Gửi câu hỏi của đồng chí" }, void 0, false, {
                fileName: "/app/applet/App.tsx",
                lineNumber: 238,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/App.tsx",
              lineNumber: 232,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/App.tsx",
            lineNumber: 212,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/App.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/App.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/applet/App.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/App.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/app/applet/App.tsx",
      lineNumber: 249,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AIAssistant, {}, void 0, false, {
      fileName: "/app/applet/App.tsx",
      lineNumber: 250,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/App.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};
_c = App;
const ChevronRight = ({ className }) => /* @__PURE__ */ jsxDEV("svg", { className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "9 5l7 7-7 7" }, void 0, false, {
  fileName: "/app/applet/App.tsx",
  lineNumber: 258,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "/app/applet/App.tsx",
  lineNumber: 257,
  columnNumber: 1
}, this);
_c2 = ChevronRight;
export default App;
var _c, _c2;
$RefreshReg$(_c, "App");
$RefreshReg$(_c2, "ChevronRight");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/applet/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/applet/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/app/applet/App.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFtUE4sTUFBTStCLGVBQWVBLENBQUMsRUFBRUMsVUFBa0MsTUFDeEQsdUJBQUMsU0FBSSxXQUFzQixNQUFLLFFBQU8sU0FBUSxhQUFZLFFBQU8sZ0JBQ2hFLGlDQUFDLFVBQUssZUFBYyxTQUFRLGdCQUFlLFNBQVEsYUFBYSxHQUFHLEdBQUUsaUJBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0YsS0FEcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVBO0FBQ0FDLE1BSklGO0FBTU4sZUFBZS9CO0FBQUksSUFBQThCLElBQUFHO0FBQUEsYUFBQUgsSUFBQTtBQUFBLGFBQUFHLEtBQUEiLCJuYW1lcyI6WyJIZWFkZXIiLCJIZXJvIiwiRm9vdGVyIiwiQUlBc3Npc3RhbnQiLCJBYm91dFVuaXQiLCJNT0NLX05FV1MiLCJOZXdzQ2F0ZWdvcnkiLCJCb29rT3BlbiIsIlVzZXJzIiwiVXNlciIsIlNjYWxlIiwiU3RhciIsIlphcCIsIlNoaWVsZCIsIkFwcCIsIm1haW5TcG90bGlnaHQiLCJzaWRlSGlnaGxpZ2h0cyIsInNsaWNlIiwibmV3c0l0ZW1zIiwiZmlsdGVyIiwibiIsImNhdGVnb3J5IiwiTkVXUyIsInRyYWRpdGlvbkl0ZW1zIiwiVFJBRElUSU9OIiwiY29tcGFueVN0b3JpZXMiLCJDT01QQU5ZX1NUT1JJRVMiLCJsZWdhbE5ld3MiLCJMQVdfV0VFS0xZIiwiTEVHQUxfU1RPUklFUyIsInNraWxsc05ld3MiLCJMSUZFX1NLSUxMUyIsIm1vZGVsSXRlbXMiLCJNT0RFTFMiLCJtYXAiLCJpdGVtIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsImV4Y2VycHQiLCJkYXRlIiwiaWQiLCJsZW5ndGgiLCJpZHgiLCJhdXRob3IiLCJfYyIsIkNoZXZyb25SaWdodCIsImNsYXNzTmFtZSIsIl9jMiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgSGVybyBmcm9tICcuL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgTmV3c0dyaWQgZnJvbSAnLi9jb21wb25lbnRzL05ld3NHcmlkJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgQUlBc3Npc3RhbnQgZnJvbSAnLi9jb21wb25lbnRzL0FJQXNzaXN0YW50JztcbmltcG9ydCBBYm91dFVuaXQgZnJvbSAnLi9jb21wb25lbnRzL0Fib3V0VW5pdCc7XG5pbXBvcnQgeyBNT0NLX05FV1MgfSBmcm9tICcuL2RhdGEvbW9ja0RhdGEnO1xuaW1wb3J0IHsgTmV3c0NhdGVnb3J5IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBCb29rT3BlbiwgVXNlcnMsIFVzZXIsIFNjYWxlLCBTdGFyLCBaYXAsIFNoaWVsZCwgRmxhZywgQXdhcmQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBtYWluU3BvdGxpZ2h0ID0gTU9DS19ORVdTWzBdO1xuICBjb25zdCBzaWRlSGlnaGxpZ2h0cyA9IE1PQ0tfTkVXUy5zbGljZSgxLCA0KTtcbiAgXG4gIGNvbnN0IG5ld3NJdGVtcyA9IE1PQ0tfTkVXUy5maWx0ZXIobiA9PiBuLmNhdGVnb3J5ID09PSBOZXdzQ2F0ZWdvcnkuTkVXUyk7XG4gIGNvbnN0IHRyYWRpdGlvbkl0ZW1zID0gTU9DS19ORVdTLmZpbHRlcihuID0+IG4uY2F0ZWdvcnkgPT09IE5ld3NDYXRlZ29yeS5UUkFESVRJT04pO1xuICBjb25zdCBjb21wYW55U3RvcmllcyA9IE1PQ0tfTkVXUy5maWx0ZXIobiA9PiBuLmNhdGVnb3J5ID09PSBOZXdzQ2F0ZWdvcnkuQ09NUEFOWV9TVE9SSUVTKTtcbiAgY29uc3QgbGVnYWxOZXdzID0gTU9DS19ORVdTLmZpbHRlcihuID0+IG4uY2F0ZWdvcnkgPT09IE5ld3NDYXRlZ29yeS5MQVdfV0VFS0xZIHx8IG4uY2F0ZWdvcnkgPT09IE5ld3NDYXRlZ29yeS5MRUdBTF9TVE9SSUVTKTtcbiAgY29uc3Qgc2tpbGxzTmV3cyA9IE1PQ0tfTkVXUy5maWx0ZXIobiA9PiBuLmNhdGVnb3J5ID09PSBOZXdzQ2F0ZWdvcnkuTElGRV9TS0lMTFMpO1xuICBjb25zdCBtb2RlbEl0ZW1zID0gTU9DS19ORVdTLmZpbHRlcihuID0+IG4uY2F0ZWdvcnkgPT09IE5ld3NDYXRlZ29yeS5NT0RFTFMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBzZWxlY3Rpb246YmctcmVkLTcwMCBzZWxlY3Rpb246dGV4dC13aGl0ZSBiZy13aGl0ZVwiPlxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cbiAgICAgICAgey8qIFBo4bqnbiBHaeG7m2kgdGhp4buHdSBUcnVuZyDEkW/DoG4gQ2hpIHRp4bq/dCAqL31cbiAgICAgICAgPEFib3V0VW5pdCAvPlxuXG4gICAgICAgIHsvKiBUacOqdSDEkWnhu4NtIHRpbiB04bupYyAqL31cbiAgICAgICAgPEhlcm8gbWFpbk5ld3M9e21haW5TcG90bGlnaHR9IHNlY29uZGFyeU5ld3M9e3NpZGVIaWdobGlnaHRzfSAvPlxuXG4gICAgICAgIHsvKiBNb2R1bGU6IFRpbiB04bupYyAmIEPDoWMgbcO0IGjDrG5oICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcHktMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtMTJcIj5cbiAgICAgICAgICAgIHsvKiBD4buZdCBjaMOtbmggYsOqbiB0csOhaTogVGluIHThu6ljICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtZW5kIG1iLTggYm9yZGVyLWItMiBib3JkZXItZ3JheS0yMDAgcGItMlwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LVsjMWEzYzFhXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgSG/huqF0IMSR4buZbmcgbuG7lWkgYuG6rXRcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLVsxMHB4XSBsZWZ0LTAgdy0yNCBoLVs0cHhdIGJnLXJlZC03MDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1yZWQtNzAwIGhvdmVyOnVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgWGVtIHThuqV0IGPhuqMg4p6UXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICAgICAgICAgICAge25ld3NJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBib3JkZXIgYm9yZGVyLWdyYXktMTAwIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGgtNDhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlVXJsfSBhbHQ9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1yZWQtNzAwIHRleHQtd2hpdGUgdGV4dC1bMTBweF0gZm9udC1ibGFjayBweC0yIHB5LTEgcm91bmRlZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHNoYWRvdy1sZ1wiPntpdGVtLmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0zIGxpbmUtY2xhbXAtMiBncm91cC1ob3Zlcjp0ZXh0LXJlZC03MDAgdHJhbnNpdGlvblwiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG1iLTQgbGluZS1jbGFtcC0yIGxlYWRpbmctcmVsYXhlZFwiPntpdGVtLmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB0LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMTAwIG10LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3RcIj57aXRlbS5kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1yZWQtNzAwXCI+Q2hpIHRp4bq/dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEPhu5l0IHBo4bulIGLDqm4gcGjhuqNpOiBDw6FjIG3DtCBow6xuaCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMSBzcGFjZS15LThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgbWItOCBib3JkZXItYi0yIGJvcmRlci1ncmVlbi03MDAgcGItMlwiPlxuICAgICAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIGZpbGwtY3VycmVudCB3LTYgaC02XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYmxhY2sgdGV4dC1bIzFhM2MxYV0gdXBwZXJjYXNlXCI+TcO0IEjDrG5oIFRpw6p1IEJp4buDdTwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAge21vZGVsSXRlbXMubGVuZ3RoID4gMCA/IG1vZGVsSXRlbXMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC14bCBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvbiBncm91cCBmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwIGJnLWdyYXktMjAwIHJvdW5kZWQtbGcgZmxleC1zaHJpbmstMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlVXJsfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIiBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzFhM2MxYV0gdGV4dC14cyBsZWFkaW5nLXNudWcgbGluZS1jbGFtcC0yXCI+e2l0ZW0udGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1bOXB4XSBmb250LWJsYWNrIHRleHQtZ3JlZW4tNzAwIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFphcCBjbGFzc05hbWU9XCJ3LTMgaC0zIG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTcO0IGjDrG5oIMSRaeG7g20gc8OhbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTQwMCBpdGFsaWMgdGV4dC1zbVwiPsSQYW5nIGPhuq1wIG5o4bqtdC4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgey8qIFRow6ptIG3hu5l0IG1vZHVsZSBwaOG7pSDhu58gxJHDonkgY2hvIGPDom4gxJHhu5FpICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMxYTNjMWFdIHRvLVsjMmQ1YTI3XSBwLTYgcm91bmRlZC0yeGwgdGV4dC13aGl0ZSBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ibGFjayB1cHBlcmNhc2UgdGV4dC1zbSBtYi00IGJvcmRlci1iIGJvcmRlci13aGl0ZS8yMCBwYi0yXCI+VGjDtG5nIGLDoW8gbmhhbmg8L2g0PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTMgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEuNSBoLTEuNSByb3VuZGVkLWZ1bGwgYmcteWVsbG93LTQwMCBtdC0xIHNocmluay0wXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktODBcIj5L4bq/IGhv4bqhY2ggaHXhuqVuIGx1eeG7h24gdGjDoW5nIDMgxJHDoyDEkcaw4bujYyBj4bqtcCBuaOG6rXQgdOG6oWkgQmFuIFRoYW0gbcawdS48L3A+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEuNSBoLTEuNSByb3VuZGVkLWZ1bGwgYmcteWVsbG93LTQwMCBtdC0xIHNocmluay0wXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktODBcIj5UaMO0bmcgYsOhbyB24buBIHZp4buHYyDEkcSDbmcga8O9IHRoaSDEkXVhIFwiUXV54bq/dCB0aOG6r25nXCIgxJHhu6N0IDIuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9kdWxlOiBDaHV54buHbiDhu58gxJHhuqFpIMSR4buZaSAoVMOibSB0w6xuaCBjaGnhur9uIHPEqSkgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTIwIGJnLVsjMWEzYzFhXSB0ZXh0LXdoaXRlIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIHBhdHRlcm4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktNSBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LTY0IGgtNjQgYmctd2hpdGUgcm91bmRlZC1mdWxsIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHctOTYgaC05NiBiZy15ZWxsb3ctNDAwIHJvdW5kZWQtZnVsbCB0cmFuc2xhdGUteC0xLzMgdHJhbnNsYXRlLXktMS8zXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gbWItMTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy15ZWxsb3ctNDAwIHJvdW5kZWQtMnhsIHRleHQtWyMxYTNjMWFdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwidy04IGgtOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0XCI+Q2h1eeG7h24g4bufIMSQ4bqhaSDEkOG7mWk8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi0yMDAgdGV4dC1zbSBmb250LW1lZGl1bVwiPkfDs2MgbmjDrG4gY2jDom4gdGjhu7FjIHbhu4EgxJHhu51pIHPhu5FuZywgdMOibSB0xrAgY+G7p2EgY8OhbiBi4buZLCBjaGnhur9uIHPEqTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8yMCBweC02IHB5LTIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMjAgdGV4dC1zbSBmb250LWJvbGQgdHJhbnNpdGlvbiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICAgICAgICBH4butaSBjw6J1IGNodXnhu4duIGPhu6dhIGLhuqFuXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIHtjb21wYW55U3Rvcmllcy5sZW5ndGggPiAwID8gY29tcGFueVN0b3JpZXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHAtOCByb3VuZGVkLTN4bCBob3ZlcjpiZy13aGl0ZS8xMCB0cmFuc2l0aW9uIGdyb3VwIGJhY2tkcm9wLWJsdXItc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC15ZWxsb3ctNDAwXCI+VMOibSB0w6xuaCBjaGnhur9uIHPEqTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTQgZ3JvdXAtaG92ZXI6dGV4dC15ZWxsb3ctNDAwIHRyYW5zaXRpb24gbGVhZGluZy10aWdodFwiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQtc20gbGluZS1jbGFtcC00IG1iLTYgbGVhZGluZy1yZWxheGVkIG9wYWNpdHktODAgaXRhbGljXCI+XCJ7aXRlbS5leGNlcnB0fVwiPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHQtNiBib3JkZXItdCBib3JkZXItd2hpdGUvMTAgdGV4dC1bMTBweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1ncmVlbi00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRml4ZWQ6IFVzZWQgVXNlciBjb21wb25lbnQgYWZ0ZXIgcHJvcGVyIGltcG9ydCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPjxVc2VyIGNsYXNzTmFtZT1cInctMyBoLTMgbXItMVwiIC8+IHtpdGVtLmF1dGhvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tZnVsbCB0ZXh0LWNlbnRlciBweS0xMCBvcGFjaXR5LTUwIGl0YWxpY1wiPsSQYW5nIGPhuq1wIG5o4bqtdCBjw6J1IGNodXnhu4duIG3hu5tpLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIE1vZHVsZTogUGjDoXAgbHXhuq10ICYgS+G7uSBuxINuZyBz4buRbmcgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMjQgYmctd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtMjBcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIFThu6cgc8OhY2ggcGjDoXAgbHXhuq10IC8gTeG7l2kgdHXhuqduIG3hu5l0IMSRaeG7gXUgbHXhuq10IC8gQ8OidSBjaHV54buHbiBwaMOhcCBsdeG6rXQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBib3JkZXItYi00IGJvcmRlci1yZWQtNzAwIHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNjYWxlIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1yZWQtNzAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ibGFjayB0ZXh0LVsjMWEzYzFhXSB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRlclwiPlThu6cgc8OhY2ggUGjDoXAgTHXhuq10PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgbXQtMVwiPk7Dom5nIGNhbyBuaOG6rW4gdGjhu6ljLCB0aMaw4bujbmcgdMO0biBwaMOhcCBsdeG6rXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCByb3VuZGVkLTN4bCBwLTggc2hhZG93LWlubmVyIGJvcmRlciBib3JkZXItZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNzAwIHRleHQtd2hpdGUgcC02IHJvdW5kZWQtMnhsIG1iLTggc2hhZG93LXhsIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHAtNCBvcGFjaXR5LTEwIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2NhbGUgY2xhc3NOYW1lPVwidy0zMiBoLTMyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNCByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmcteWVsbG93LTQwMCB0ZXh0LXJlZC05MDAgdGV4dC1bMTBweF0gZm9udC1ibGFjayB1cHBlcmNhc2UgcHgtMiBweS0wLjUgcm91bmRlZCBzaGFkb3ctc21cIj5Ib3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFphcCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQteWVsbG93LTQwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHJlbGF0aXZlIHotMTBcIj7EkGnhu4F1IDEwOiBOZ2jEqWEgduG7pSBj4bunYSBxdcOibiBuaMOibjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG10LTMgb3BhY2l0eS05MCBsaW5lLWNsYW1wLTIgcmVsYXRpdmUgei0xMCBmb250LW1lZGl1bVwiPlTDrG0gaGnhu4N1IGPDoWMgcXV5IMSR4buLbmggY+G7pSB0aOG7gyB24buBIHRyw6FjaCBuaGnhu4dtIHbDoCBuZ2jEqWEgduG7pSBj4bunYSBxdcOibiBuaMOibiDEkeG7kWkgduG7m2kgVOG7lSBxdeG7kWMgdsOgIGvhu7cgbHXhuq10IHF1w6JuIMSR4buZaS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNiB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBiZy13aGl0ZSB0ZXh0LXJlZC03MDAgcHgtNCBweS0yIHJvdW5kZWQtbGcgc2hhZG93LW1kIGhvdmVyOmJnLXllbGxvdy00MDAgdHJhbnNpdGlvblwiPlhlbSBjaGkgdGnhur90PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsZWdhbE5ld3MubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJmbGV4IGdhcC02IGdyb3VwIGN1cnNvci1wb2ludGVyIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTI0IGJnLWdyYXktMjAwIHJvdW5kZWQtMnhsIGZsZXgtc2hyaW5rLTAgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VVcmx9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ibGFjayB0ZXh0LXJlZC02MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPntpdGVtLmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBncm91cC1ob3Zlcjp0ZXh0LXJlZC03MDAgdHJhbnNpdGlvbiBsZWFkaW5nLXRpZ2h0IG10LTEgdGV4dC1iYXNlXCI+e2l0ZW0udGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtdC0yIGZvbnQtbWVkaXVtXCI+e2l0ZW0uZGF0ZX0g4oCiIEJhbiBDaMOtbmggdHLhu4s8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBC4buTaSBkxrDhu6FuZyBr4bu5IG7Eg25nIHPhu5FuZyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIGJvcmRlci1iLTQgYm9yZGVyLWJsdWUtNzAwIHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJvb2tPcGVuIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1ibHVlLTcwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYmxhY2sgdGV4dC1bIzFhM2MxYV0gdXBwZXJjYXNlIHRyYWNraW5nLXRpZ2h0ZXJcIj5C4buTaSBkxrDhu6FuZyBr4bu5IG7Eg25nIHPhu5FuZzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IG10LTFcIj5Sw6huIGx1eeG7h24gYuG6o24gbMSpbmgsIGvhu7kgbsSDbmcgcXXDom4gbmjDom48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2tpbGxzTmV3cy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtM3hsIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGhvdmVyOmJvcmRlci1ibHVlLTIwMCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0yLzUgYXNwZWN0LVs0LzNdIGJnLWdyYXktMTAwIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VVcmx9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMy81XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHRleHQtYmx1ZS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGllbGQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0XCI+S+G7uSBuxINuZyBxdcOibiBuaMOibiBjaMOtbmggcXV5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbXQtMSBtYi0zIGxlYWRpbmctdGlnaHQgZ3JvdXAtaG92ZXI6dGV4dC1ibHVlLTcwMCB0cmFuc2l0aW9uXCI+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwIGxpbmUtY2xhbXAtMiBtYi02IGxlYWRpbmctcmVsYXhlZCBmb250LW1lZGl1bVwiPntpdGVtLmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ibGFjayB0ZXh0LWJsdWUtNzAwIGhvdmVyOnRleHQtYmx1ZS05MDAgZmxleCBpdGVtcy1jZW50ZXIgZ3JvdXAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIELhuq90IMSR4bqndSBiw6BpIGjhu41jIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0xIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgdHJhbnNpdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tYmx1ZS05MDAgdG8tYmx1ZS03MDAgcm91bmRlZC0zeGwgcC0xMCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcC00IG9wYWNpdHktMTAgcm90YXRlLTEyIGdyb3VwLWhvdmVyOnJvdGF0ZS0wIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwidy00OCBoLTQ4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYmxhY2sgbWItMyB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHRcIj5I4buPaSDEkcOhcCB0cuG7sWMgdHV54bq/bjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtMTAwIHRleHQtc20gbWItOCBtYXgtdy1tZCBteC1hdXRvIGxlYWRpbmctcmVsYXhlZFwiPk3hu41pIHRo4bqvYyBt4bqvYyB24buBIGNo4bq/IMSR4buZIGNow61uaCBzw6FjaCB2w6Aga+G7uSBuxINuZyBz4buRbmcgc+G6vSDEkcaw4bujYyB04buVIHTGsCB24bqlbiBnaeG6o2kgxJHDoXAgbmhhbmggbmjhuqV0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmcteWVsbG93LTQwMCB0ZXh0LWJsdWUtOTAwIGZvbnQtYmxhY2sgcHktNCBweC0xMCByb3VuZGVkLWZ1bGwgc2hhZG93LWxnIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnNjYWxlLTEwNSBhY3RpdmU6c2NhbGUtOTUgdHJhbnNpdGlvbiB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR+G7rWkgY8OidSBo4buPaSBj4bunYSDEkeG7k25nIGNow61cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8QUlBc3Npc3RhbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIENvbXBvbmVudCBjb24gaOG7lyB0cuG7oyBpY29uXG5jb25zdCBDaGV2cm9uUmlnaHQgPSAoeyBjbGFzc05hbWUgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcgfSkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cbiAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezN9IGQ9XCI5IDVsNyA3LTcgN1wiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sImZpbGUiOiIvYXBwL2FwcGxldC9BcHAudHN4In0=