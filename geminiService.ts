import { GoogleGenAI } from "/node_modules/.vite/deps/@google_genai.js?v=d6021253";
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
export const getAiSummary = async (content) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tóm tắt bản tin sau đây một cách ngắn gọn, súc tích dành cho cán bộ, chiến sĩ Trung đoàn 2: ${content}`,
      config: {
        temperature: 0.7,
        topP: 0.95
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI summary:", error);
    return "Không thể khởi tạo tóm tắt AI lúc này.";
  }
};
export const chatWithAssistant = async (message, history) => {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "Bạn là trợ lý ảo thông minh của Trung đoàn 2 - Đoàn An Lão Anh hùng. Hãy trả lời các câu hỏi về tin tức đơn vị, truyền thống Trung đoàn, lịch sử quân đội và kiến thức quốc phòng một cách trang trọng, chính xác và trung thành với điều lệnh."
      }
    });
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "Rất tiếc, tôi đang gặp sự cố kết nối.";
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbWluaVNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5cbi8vIEZpeGVkOiBDb3JyZWN0IGluaXRpYWxpemF0aW9uIHdpdGggbmFtZWQgcGFyYW1ldGVyIGFuZCByZW1vdmVkIHVubmVjZXNzYXJ5IGZhbGxiYWNrXG5jb25zdCBhaSA9IG5ldyBHb29nbGVHZW5BSSh7IGFwaUtleTogcHJvY2Vzcy5lbnYuQVBJX0tFWSB9KTtcblxuZXhwb3J0IGNvbnN0IGdldEFpU3VtbWFyeSA9IGFzeW5jIChjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMy1mbGFzaC1wcmV2aWV3JyxcbiAgICAgIGNvbnRlbnRzOiBgVMOzbSB04bqvdCBi4bqjbiB0aW4gc2F1IMSRw6J5IG3hu5l0IGPDoWNoIG5n4bqvbiBn4buNbiwgc8O6YyB0w61jaCBkw6BuaCBjaG8gY8OhbiBi4buZLCBjaGnhur9uIHPEqSBUcnVuZyDEkW/DoG4gMjogJHtjb250ZW50fWAsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgICAgICAgdG9wUDogMC45NSxcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBGaXhlZDogQ29ycmVjdCBwcm9wZXJ0eSBhY2Nlc3MgZm9yIGV4dHJhY3RlZCB0ZXh0XG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIEFJIHN1bW1hcnk6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gXCJLaMO0bmcgdGjhu4Mga2jhu59pIHThuqFvIHTDs20gdOG6r3QgQUkgbMO6YyBuw6B5LlwiO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2hhdFdpdGhBc3Npc3RhbnQgPSBhc3luYyAobWVzc2FnZTogc3RyaW5nLCBoaXN0b3J5OiB7IHJvbGU6IHN0cmluZywgcGFydHM6IHN0cmluZyB9W10pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjaGF0ID0gYWkuY2hhdHMuY3JlYXRlKHtcbiAgICAgIG1vZGVsOiAnZ2VtaW5pLTMtZmxhc2gtcHJldmlldycsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IFwiQuG6oW4gbMOgIHRy4bujIGzDvSDhuqNvIHRow7RuZyBtaW5oIGPhu6dhIFRydW5nIMSRb8OgbiAyIC0gxJBvw6BuIEFuIEzDo28gQW5oIGjDuW5nLiBIw6N5IHRy4bqjIGzhu51pIGPDoWMgY8OidSBo4buPaSB24buBIHRpbiB04bupYyDEkcahbiB24buLLCB0cnV54buBbiB0aOG7kW5nIFRydW5nIMSRb8OgbiwgbOG7i2NoIHPhu60gcXXDom4gxJHhu5lpIHbDoCBraeG6v24gdGjhu6ljIHF14buRYyBwaMOybmcgbeG7mXQgY8OhY2ggdHJhbmcgdHLhu41uZywgY2jDrW5oIHjDoWMgdsOgIHRydW5nIHRow6BuaCB24bubaSDEkWnhu4F1IGzhu4duaC5cIixcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvLyBGaXhlZDogVXNlIGNoYXQuc2VuZE1lc3NhZ2UgdG8gbWFpbnRhaW4gY2hhdCBzdGF0ZSBjb3JyZWN0bHkgYXMgcGVyIFNESyBndWlkZWxpbmVzXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaGF0LnNlbmRNZXNzYWdlKHsgbWVzc2FnZTogbWVzc2FnZSB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UudGV4dDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQ2hhdCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBcIlLhuqV0IHRp4bq/YywgdMO0aSDEkWFuZyBn4bq3cCBz4buxIGPhu5Ega+G6v3QgbuG7kWkuXCI7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMsbUJBQW1CO0FBRzVCLE1BQU0sS0FBSyxJQUFJLFlBQVksRUFBRSxRQUFRLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFFbkQsYUFBTSxlQUFlLE9BQU8sWUFBb0I7QUFDckQsTUFBSTtBQUNGLFVBQU0sV0FBVyxNQUFNLEdBQUcsT0FBTyxnQkFBZ0I7QUFBQSxNQUMvQyxPQUFPO0FBQUEsTUFDUCxVQUFVLCtGQUErRixPQUFPO0FBQUEsTUFDaEgsUUFBUTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGLENBQUM7QUFFRCxXQUFPLFNBQVM7QUFBQSxFQUNsQixTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sOEJBQThCLEtBQUs7QUFDakQsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVPLGFBQU0sb0JBQW9CLE9BQU8sU0FBaUIsWUFBK0M7QUFDdEcsTUFBSTtBQUNGLFVBQU0sT0FBTyxHQUFHLE1BQU0sT0FBTztBQUFBLE1BQzNCLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRixDQUFDO0FBR0QsVUFBTSxXQUFXLE1BQU0sS0FBSyxZQUFZLEVBQUUsUUFBaUIsQ0FBQztBQUM1RCxXQUFPLFNBQVM7QUFBQSxFQUNsQixTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sZUFBZSxLQUFLO0FBQ2xDLFdBQU87QUFBQSxFQUNUO0FBQ0Y7IiwibmFtZXMiOltdfQ==