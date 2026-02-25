import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/components/AIAssistant.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d6021253"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=d6021253"; const useState = __vite__cjsImport1_react["useState"]; const useRef = __vite__cjsImport1_react["useRef"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import { Send, X, ShieldCheck, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=d6021253";
import { chatWithAssistant } from "/services/geminiService.ts";
const AIAssistant = () => {
  _s();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(
    [
      { role: "ai", text: "Xin chào đồng chí! Tôi là Trợ lý ảo của Trung đoàn 2 - Đoàn An Lão. Tôi có thể giúp gì cho đồng chí về thông tin đơn vị, truyền thống hay kiến thức quân sự?" }
    ]
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);
    try {
      const aiResponse = await chatWithAssistant(userMessage, []);
      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "Xin lỗi, tôi gặp sự cố kết nối. Hãy thử lại sau." }]);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed bottom-6 right-6 z-[100]", children: isOpen ? /* @__PURE__ */ jsxDEV("div", { className: "bg-white w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1a3c1a] text-white p-4 flex justify-between items-center shadow-md", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(ShieldCheck, { className: "w-5 h-5 text-[#1a3c1a]" }, void 0, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-sm", children: "Trợ lý ảo Trung đoàn 2" }, void 0, false, {
            fileName: "/app/applet/components/AIAssistant.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-[10px] text-green-300", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" }, void 0, false, {
              fileName: "/app/applet/components/AIAssistant.tsx",
              lineNumber: 54,
              columnNumber: 21
            }, this),
            "Sẵn sàng hỗ trợ"
          ] }, void 0, true, {
            fileName: "/app/applet/components/AIAssistant.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/AIAssistant.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("button", { onClick: () => setIsOpen(false), className: "hover:bg-white/20 p-1 rounded transition", children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
        fileName: "/app/applet/components/AIAssistant.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/app/applet/components/AIAssistant.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/AIAssistant.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50", children: [
      messages.map(
        (m, i) => /* @__PURE__ */ jsxDEV("div", { className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxDEV("div", { className: `max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${m.role === "user" ? "bg-red-700 text-white rounded-tr-none" : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"}`, children: m.text }, void 0, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this) }, i, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ),
      isLoading && /* @__PURE__ */ jsxDEV("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 flex items-center space-x-2", children: /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-1", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 bg-gray-300 rounded-full animate-bounce" }, void 0, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 81,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75" }, void 0, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150" }, void 0, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/components/AIAssistant.tsx",
        lineNumber: 80,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "/app/applet/components/AIAssistant.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/app/applet/components/AIAssistant.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { ref: messagesEndRef }, void 0, false, {
        fileName: "/app/applet/components/AIAssistant.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/components/AIAssistant.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "p-4 border-t bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "text",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyPress: (e) => e.key === "Enter" && handleSend(),
          placeholder: "Hỏi về truyền thống Trung đoàn...",
          className: "flex-grow bg-gray-100 border-none rounded-full py-2 px-4 text-sm focus:ring-2 focus:ring-red-700 outline-none transition-all"
        },
        void 0,
        false,
        {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 94,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: handleSend,
          disabled: isLoading || !input.trim(),
          className: "bg-red-700 hover:bg-red-800 text-white p-2 rounded-full disabled:opacity-50 transition shadow-lg",
          children: /* @__PURE__ */ jsxDEV(Send, { className: "w-5 h-5" }, void 0, false, {
            fileName: "/app/applet/components/AIAssistant.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 102,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/components/AIAssistant.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/app/applet/components/AIAssistant.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/components/AIAssistant.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV(
    "button",
    {
      onClick: () => setIsOpen(true),
      className: "army-gradient text-white p-4 rounded-full shadow-2xl hover:scale-110 transition active:scale-95 group relative",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-1 -right-1 bg-red-600 text-[10px] font-bold px-1 rounded animate-bounce", children: "AI" }, void 0, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-8 h-8 group-hover:rotate-12 transition" }, void 0, false, {
          fileName: "/app/applet/components/AIAssistant.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/components/AIAssistant.tsx",
      lineNumber: 113,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/app/applet/components/AIAssistant.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
};
_s(AIAssistant, "V6MTK0BdfRcBGTzXU4e+NCrwzDY=");
_c = AIAssistant;
export default AIAssistant;
var _c;
$RefreshReg$(_c, "AIAssistant");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/applet/components/AIAssistant.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/applet/components/AIAssistant.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/app/applet/components/AIAssistant.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBQTtBQUFBLFFBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTTBJO0FBQUEsTUFFMUk7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLFNBQVNBO0FBQUFBLFVBQ1QsVUFBVVAsYUFBYSxDQUFDRixNQUFNVSxLQUFLO0FBQUEsVUFDbkMsV0FBVTtBQUFBLFVBRVYsaUNBQUMsUUFBSyxXQUFVLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXlCO0FBQUE7QUFBQSxRQUwzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNQTtBQUFBLFNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWdCQSxLQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBa0JBO0FBQUEsT0FsRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQW1FQSxJQUVBO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxTQUFTLE1BQU1mLFVBQVUsSUFBSTtBQUFBLE1BQzdCLFdBQVU7QUFBQSxNQUVWO0FBQUEsK0JBQUMsU0FBSSxXQUFVLHlGQUF3RixrQkFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF5RztBQUFBLFFBQ3pHLHVCQUFDLFlBQVMsV0FBVSw4Q0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE4RDtBQUFBO0FBQUE7QUFBQSxJQUxoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxLQTdFSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBK0VBO0FBRUo7QUFBRUYsR0FySElELGFBQXFCO0FBQUEsS0FBckJBO0FBdUhOLGVBQWVBO0FBQVksSUFBQThCO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiU2VuZCIsIlgiLCJTaGllbGRDaGVjayIsIlNwYXJrbGVzIiwiY2hhdFdpdGhBc3Npc3RhbnQiLCJBSUFzc2lzdGFudCIsIl9zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInJvbGUiLCJ0ZXh0IiwiaW5wdXQiLCJzZXRJbnB1dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2VzRW5kUmVmIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhhbmRsZVNlbmQiLCJ0cmltIiwidXNlck1lc3NhZ2UiLCJwcmV2IiwiYWlSZXNwb25zZSIsImVycm9yIiwibWFwIiwibSIsImkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJrZXkiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBSUFzc2lzdGFudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVzc2FnZVNxdWFyZSwgU2VuZCwgWCwgQm90LCBTaGllbGRDaGVjaywgU3BhcmtsZXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgY2hhdFdpdGhBc3Npc3RhbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9nZW1pbmlTZXJ2aWNlJztcblxuY29uc3QgQUlBc3Npc3RhbnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPHsgcm9sZTogJ3VzZXInIHwgJ2FpJzsgdGV4dDogc3RyaW5nIH1bXT4oW1xuICAgIHsgcm9sZTogJ2FpJywgdGV4dDogJ1hpbiBjaMOgbyDEkeG7k25nIGNow60hIFTDtGkgbMOgIFRy4bujIGzDvSDhuqNvIGPhu6dhIFRydW5nIMSRb8OgbiAyIC0gxJBvw6BuIEFuIEzDo28uIFTDtGkgY8OzIHRo4buDIGdpw7pwIGfDrCBjaG8gxJHhu5NuZyBjaMOtIHbhu4EgdGjDtG5nIHRpbiDEkcahbiB24buLLCB0cnV54buBbiB0aOG7kW5nIGhheSBraeG6v24gdGjhu6ljIHF1w6JuIHPhu7E/JyB9XG4gIF0pO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbWVzc2FnZXNFbmRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfSwgW21lc3NhZ2VzXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VuZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWlucHV0LnRyaW0oKSB8fCBpc0xvYWRpbmcpIHJldHVybjtcblxuICAgIGNvbnN0IHVzZXJNZXNzYWdlID0gaW5wdXQ7XG4gICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwgeyByb2xlOiAndXNlcicsIHRleHQ6IHVzZXJNZXNzYWdlIH1dKTtcbiAgICBzZXRJbnB1dCgnJyk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFpUmVzcG9uc2UgPSBhd2FpdCBjaGF0V2l0aEFzc2lzdGFudCh1c2VyTWVzc2FnZSwgW10pO1xuICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwgeyByb2xlOiAnYWknLCB0ZXh0OiBhaVJlc3BvbnNlIH1dKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwgeyByb2xlOiAnYWknLCB0ZXh0OiAnWGluIGzhu5dpLCB0w7RpIGfhurdwIHPhu7EgY+G7kSBr4bq/dCBu4buRaS4gSMOjeSB0aOG7rSBs4bqhaSBzYXUuJyB9XSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNiByaWdodC02IHotWzEwMF1cIj5cbiAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1bMzUwcHhdIG1kOnctWzQwMHB4XSBoLVs1MDBweF0gcm91bmRlZC0yeGwgc2hhZG93LTJ4bCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIGFuaW1hdGUtaW4gc2xpZGUtaW4tZnJvbS1ib3R0b20tNVwiPlxuICAgICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzFhM2MxYV0gdGV4dC13aGl0ZSBwLTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IGJnLXllbGxvdy00MDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFNoaWVsZENoZWNrIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1bIzFhM2MxYV1cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc21cIj5UcuG7oyBsw70g4bqjbyBUcnVuZyDEkW/DoG4gMjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LVsxMHB4XSB0ZXh0LWdyZWVuLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTIgaC0yIGJnLWdyZWVuLTUwMCByb3VuZGVkLWZ1bGwgbXItMSBhbmltYXRlLXB1bHNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBT4bq1biBzw6BuZyBo4buXIHRy4bujXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cImhvdmVyOmJnLXdoaXRlLzIwIHAtMSByb3VuZGVkIHRyYW5zaXRpb25cIj5cbiAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBNZXNzYWdlcyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG8gcC00IHNwYWNlLXktNCBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2BmbGV4ICR7bS5yb2xlID09PSAndXNlcicgPyAnanVzdGlmeS1lbmQnIDogJ2p1c3RpZnktc3RhcnQnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWF4LXctWzgwJV0gcC0zIHJvdW5kZWQtMnhsIHRleHQtc20gc2hhZG93LXNtICR7XG4gICAgICAgICAgICAgICAgICBtLnJvbGUgPT09ICd1c2VyJyBcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctcmVkLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtdHItbm9uZScgXG4gICAgICAgICAgICAgICAgICAgIDogJ2JnLXdoaXRlIHRleHQtZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLXRsLW5vbmUnXG4gICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgICAge20udGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0zIHJvdW5kZWQtMnhsIHJvdW5kZWQtdGwtbm9uZSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMiBoLTIgYmctZ3JheS0zMDAgcm91bmRlZC1mdWxsIGFuaW1hdGUtYm91bmNlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiBiZy1ncmF5LTMwMCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1ib3VuY2UgZGVsYXktNzVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIGJnLWdyYXktMzAwIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZSBkZWxheS0xNTBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogSW5wdXQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXQgYmctd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IGUua2V5ID09PSAnRW50ZXInICYmIGhhbmRsZVNlbmQoKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkjhu49pIHbhu4EgdHJ1eeG7gW4gdGjhu5FuZyBUcnVuZyDEkW/DoG4uLi5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBiZy1ncmF5LTEwMCBib3JkZXItbm9uZSByb3VuZGVkLWZ1bGwgcHktMiBweC00IHRleHQtc20gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmVkLTcwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCAhaW5wdXQudHJpbSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC03MDAgaG92ZXI6YmctcmVkLTgwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkLWZ1bGwgZGlzYWJsZWQ6b3BhY2l0eS01MCB0cmFuc2l0aW9uIHNoYWRvdy1sZ1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2VuZCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFybXktZ3JhZGllbnQgdGV4dC13aGl0ZSBwLTQgcm91bmRlZC1mdWxsIHNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24gYWN0aXZlOnNjYWxlLTk1IGdyb3VwIHJlbGF0aXZlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xIC1yaWdodC0xIGJnLXJlZC02MDAgdGV4dC1bMTBweF0gZm9udC1ib2xkIHB4LTEgcm91bmRlZCBhbmltYXRlLWJvdW5jZVwiPkFJPC9kaXY+XG4gICAgICAgICAgPFNwYXJrbGVzIGNsYXNzTmFtZT1cInctOCBoLTggZ3JvdXAtaG92ZXI6cm90YXRlLTEyIHRyYW5zaXRpb25cIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBSUFzc2lzdGFudDtcbiJdLCJmaWxlIjoiL2FwcC9hcHBsZXQvY29tcG9uZW50cy9BSUFzc2lzdGFudC50c3gifQ==