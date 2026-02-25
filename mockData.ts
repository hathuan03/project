import { NewsCategory } from "/types.ts";
export const MOCK_NEWS = [
  {
    id: "news-cadre-2026",
    title: "TRUNG ĐOÀN 2, SƯ ĐOÀN 3 TRAO QUYẾT ĐỊNH CÔNG TÁC CÁN BỘ",
    excerpt: "Trong không khí vui tươi, phấn khởi của đất nước, đặc biệt hướng tới bầu cử đại biểu Quốc hội khoá XVI và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2026 - 2031, chiều ngày 24/02/2026 Trung đoàn 2 long trọng tổ chức Hội nghị trao quyết định công tác cán bộ cho 21 đồng chí. Đồng chí Thượng tá Bùi Anh Minh - BTĐU, Chính uỷ Trung đoàn đến dự và trao quyết định. Đây không chỉ là hoạt động thường xuyên trong công tác cán bộ mà còn là dấu mốc quan trọng, thể hiện sự trưởng thành, phát triển của đội ngũ cán bộ đơn vị trong giai đoạn mới.",
    category: NewsCategory.NEWS,
    date: "24/02/2026",
    imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop",
    author: "Ban Chính trị",
    isHot: true
  },
  {
    id: "news-tet-2026",
    title: "Tiểu đoàn 3, Trung đoàn 2, Sư đoàn 3 sôi nổi các hoạt động vui Xuân đón Tết Bính Ngọ 2026🧧",
    excerpt: "Những ngày đầu Xuân Bính Ngọ 2026, không khí tại Tiểu đoàn 3 rộn ràng, sôi nổi với nhiều hoạt động vui Xuân, đón Tết thiết thực, ý nghĩa. Điểm nhấn là các nội dung thi đấu thể thao như kéo co, bóng chuyền và trò chơi tiếp sức. Tiểu đoàn 3 đã xuất sắc giành giải Nhất môn kéo co và bóng chuyền, giải Nhì trò chơi tiếp sức và hội thi chấm cỗ Tết.",
    category: NewsCategory.NEWS,
    date: "15/02/2026",
    imageUrl: "https://images.unsplash.com/photo-1582213776866-6a50cf2e34ac?q=80&w=1000&auto=format&fit=crop",
    author: "Ban Chính trị",
    isHot: false
  },
  {
    id: "1",
    title: "Trung đoàn 2 hoàn thành xuất sắc nhiệm vụ diễn tập vòng tổng hợp 2024",
    excerpt: "Dưới cái nắng gay gắt của miền Trung, cán bộ chiến sĩ Đoàn An Lão đã hiệp đồng tác chiến chặt chẽ, tiêu diệt mục tiêu ngay từ loạt đạn đầu, khẳng định khả năng sẵn sàng chiến đấu cao.",
    category: NewsCategory.NEWS,
    date: "24/05/2024",
    imageUrl: "https://images.unsplash.com/photo-1590233464442-553fd349c81b?q=80&w=1000&auto=format&fit=crop",
    author: "Bùi Văn Nam",
    isHot: true
  },
  {
    id: "trad-1",
    title: "Lịch sử vẻ vang 62 năm xây dựng và trưởng thành của Đoàn An Lão Anh Hùng",
    excerpt: "Từ những ngày đầu thành lập, Trung đoàn 2 đã lập nên những chiến công lẫy lừng, bám đất bám dân, góp phần vào sự nghiệp giải phóng dân tộc.",
    category: NewsCategory.TRADITION,
    date: "08/05/2024",
    imageUrl: "https://images.unsplash.com/photo-1579546671170-434282b7516d?q=80&w=1000&auto=format&fit=crop",
    author: "Ban Chính trị"
  },
  {
    id: "model-1",
    title: "Mô hình 'Vườn rau thanh niên' giúp cải thiện đời sống bộ đội",
    excerpt: "Sáng kiến tận dụng đất trống quanh doanh trại để tăng gia sản xuất đã mang lại hiệu quả thiết thực cho bếp ăn đại đội, nâng cao sức khỏe bộ đội.",
    category: NewsCategory.MODELS,
    date: "22/05/2024",
    imageUrl: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000&auto=format&fit=crop",
    author: "Lê Minh"
  },
  {
    id: "story-1",
    title: "Chuyện người tiểu đội trưởng hết lòng vì chiến sĩ mới",
    excerpt: "Tại Đại đội 1, Tiểu đội trưởng Nguyễn Văn A không chỉ là người chỉ huy nghiêm túc trên thao trường mà còn là người anh sẻ chia tâm tình giờ nghỉ.",
    category: NewsCategory.COMPANY_STORIES,
    date: "21/05/2024",
    imageUrl: "https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?q=80&w=1000&auto=format&fit=crop",
    author: "Hoàng Quân"
  },
  {
    id: "law-1",
    title: "Mỗi tuần một điều luật: Tìm hiểu về Luật Nghĩa vụ quân sự sửa đổi",
    excerpt: "Chuyên mục cung cấp thông tin chi tiết về quyền lợi và nghĩa vụ của công dân khi tham gia nhập ngũ và các chế độ chính sách mới nhất.",
    category: NewsCategory.LAW_WEEKLY,
    date: "20/05/2024",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
    author: "Phòng Tư pháp"
  },
  {
    id: "skill-1",
    title: "Kỹ năng quản lý thời gian và sắp xếp trật tự nội vụ khoa học",
    excerpt: "Làm thế nào để duy trì sự ngăn nắp và thực hiện các chế độ trong ngày một cách khoa học nhất trong môi trường quân đội chính quy.",
    category: NewsCategory.LIFE_SKILLS,
    date: "19/05/2024",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    author: "Đại úy Trần Anh"
  },
  {
    id: "legal-1",
    title: "Câu chuyện pháp luật: Bài học từ sự chủ quan trong quản lý vũ khí",
    excerpt: "Thông qua các tình huống thực tế, chuyên mục giúp chiến sĩ hiểu rõ hơn về tính nghiêm minh của kỷ luật quân đội và pháp luật Nhà nước.",
    category: NewsCategory.LEGAL_STORIES,
    date: "23/05/2024",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
    author: "Ban Tuyên giáo"
  }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2tEYXRhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmV3c0l0ZW0sIE5ld3NDYXRlZ29yeSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IE1PQ0tfTkVXUzogTmV3c0l0ZW1bXSA9IFtcbiAge1xuICAgIGlkOiBcIm5ld3MtY2FkcmUtMjAyNlwiLFxuICAgIHRpdGxlOiBcIlRSVU5HIMSQT8OATiAyLCBTxq8gxJBPw4BOIDMgVFJBTyBRVVnhur5UIMSQ4buKTkggQ8OUTkcgVMOBQyBDw4FOIELhu5hcIixcbiAgICBleGNlcnB0OiBcIlRyb25nIGtow7RuZyBraMOtIHZ1aSB0xrDGoWksIHBo4bqlbiBraOG7n2kgY+G7p2EgxJHhuqV0IG7GsOG7m2MsIMSR4bq3YyBiaeG7h3QgaMaw4bubbmcgdOG7m2kgYuG6p3UgY+G7rSDEkeG6oWkgYmnhu4N1IFF14buRYyBo4buZaSBraG/DoSBYVkkgdsOgIMSR4bqhaSBiaeG7g3UgSOG7mWkgxJHhu5NuZyBuaMOibiBkw6JuIGPDoWMgY+G6pXAgbmhp4buHbSBr4buzIDIwMjYgLSAyMDMxLCBjaGnhu4F1IG5nw6B5IDI0LzAyLzIwMjYgVHJ1bmcgxJFvw6BuIDIgbG9uZyB0cuG7jW5nIHThu5UgY2jhu6ljIEjhu5lpIG5naOG7iyB0cmFvIHF1eeG6v3QgxJHhu4tuaCBjw7RuZyB0w6FjIGPDoW4gYuG7mSBjaG8gMjEgxJHhu5NuZyBjaMOtLiDEkOG7k25nIGNow60gVGjGsOG7o25nIHTDoSBCw7lpIEFuaCBNaW5oIC0gQlTEkFUsIENow61uaCB14bu3IFRydW5nIMSRb8OgbiDEkeG6v24gZOG7sSB2w6AgdHJhbyBxdXnhur90IMSR4buLbmguIMSQw6J5IGtow7RuZyBjaOG7iSBsw6AgaG/huqF0IMSR4buZbmcgdGjGsOG7nW5nIHh1ecOqbiB0cm9uZyBjw7RuZyB0w6FjIGPDoW4gYuG7mSBtw6AgY8OybiBsw6AgZOG6pXUgbeG7kWMgcXVhbiB0cuG7jW5nLCB0aOG7gyBoaeG7h24gc+G7sSB0csaw4bufbmcgdGjDoG5oLCBwaMOhdCB0cmnhu4NuIGPhu6dhIMSR4buZaSBuZ8WpIGPDoW4gYuG7mSDEkcahbiB24buLIHRyb25nIGdpYWkgxJFv4bqhbiBt4bubaS5cIixcbiAgICBjYXRlZ29yeTogTmV3c0NhdGVnb3J5Lk5FV1MsXG4gICAgZGF0ZTogXCIyNC8wMi8yMDI2XCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDQwMjc5OTMtMzdkYmZlNDM1NjJhP3E9ODAmdz0xMDAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wXCIsXG4gICAgYXV0aG9yOiBcIkJhbiBDaMOtbmggdHLhu4tcIixcbiAgICBpc0hvdDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IFwibmV3cy10ZXQtMjAyNlwiLFxuICAgIHRpdGxlOiBcIlRp4buDdSDEkW/DoG4gMywgVHJ1bmcgxJFvw6BuIDIsIFPGsCDEkW/DoG4gMyBzw7RpIG7hu5VpIGPDoWMgaG/huqF0IMSR4buZbmcgdnVpIFh1w6JuIMSRw7NuIFThur90IELDrW5oIE5n4buNIDIwMjbwn6enXCIsXG4gICAgZXhjZXJwdDogXCJOaOG7r25nIG5nw6B5IMSR4bqndSBYdcOibiBCw61uaCBOZ+G7jSAyMDI2LCBraMO0bmcga2jDrSB04bqhaSBUaeG7g3UgxJFvw6BuIDMgcuG7mW4gcsOgbmcsIHPDtGkgbuG7lWkgduG7m2kgbmhp4buBdSBob+G6oXQgxJHhu5luZyB2dWkgWHXDom4sIMSRw7NuIFThur90IHRoaeG6v3QgdGjhu7FjLCDDvSBuZ2jEqWEuIMSQaeG7g20gbmjhuqVuIGzDoCBjw6FjIG7hu5lpIGR1bmcgdGhpIMSR4bqldSB0aOG7gyB0aGFvIG5oxrAga8OpbyBjbywgYsOzbmcgY2h1eeG7gW4gdsOgIHRyw7IgY2jGoWkgdGnhur9wIHPhu6ljLiBUaeG7g3UgxJFvw6BuIDMgxJHDoyB4deG6pXQgc+G6r2MgZ2nDoG5oIGdp4bqjaSBOaOG6pXQgbcO0biBrw6lvIGNvIHbDoCBiw7NuZyBjaHV54buBbiwgZ2nhuqNpIE5ow6wgdHLDsiBjaMahaSB0aeG6v3Agc+G7qWMgdsOgIGjhu5lpIHRoaSBjaOG6pW0gY+G7lyBU4bq/dC5cIixcbiAgICBjYXRlZ29yeTogTmV3c0NhdGVnb3J5Lk5FV1MsXG4gICAgZGF0ZTogXCIxNS8wMi8yMDI2XCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODIyMTM3NzY4NjYtNmE1MGNmMmUzNGFjP3E9ODAmdz0xMDAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wXCIsXG4gICAgYXV0aG9yOiBcIkJhbiBDaMOtbmggdHLhu4tcIixcbiAgICBpc0hvdDogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiBcIjFcIixcbiAgICB0aXRsZTogXCJUcnVuZyDEkW/DoG4gMiBob8OgbiB0aMOgbmggeHXhuqV0IHPhuq9jIG5oaeG7h20gduG7pSBkaeG7hW4gdOG6rXAgdsOybmcgdOG7lW5nIGjhu6NwIDIwMjRcIixcbiAgICBleGNlcnB0OiBcIkTGsOG7m2kgY8OhaSBu4bqvbmcgZ2F5IGfhuq90IGPhu6dhIG1p4buBbiBUcnVuZywgY8OhbiBi4buZIGNoaeG6v24gc8SpIMSQb8OgbiBBbiBMw6NvIMSRw6MgaGnhu4dwIMSR4buTbmcgdMOhYyBjaGnhur9uIGNo4bq3dCBjaOG6vSwgdGnDqnUgZGnhu4d0IG3hu6VjIHRpw6p1IG5nYXkgdOG7qyBsb+G6oXQgxJHhuqFuIMSR4bqndSwga2jhurNuZyDEkeG7i25oIGto4bqjIG7Eg25nIHPhurVuIHPDoG5nIGNoaeG6v24gxJHhuqV1IGNhby5cIixcbiAgICBjYXRlZ29yeTogTmV3c0NhdGVnb3J5Lk5FV1MsXG4gICAgZGF0ZTogXCIyNC8wNS8yMDI0XCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTAyMzM0NjQ0NDItNTUzZmQzNDljODFiP3E9ODAmdz0xMDAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wXCIsXG4gICAgYXV0aG9yOiBcIkLDuWkgVsSDbiBOYW1cIixcbiAgICBpc0hvdDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IFwidHJhZC0xXCIsXG4gICAgdGl0bGU6IFwiTOG7i2NoIHPhu60gduG6uyB2YW5nIDYyIG7Eg20geMOieSBk4buxbmcgdsOgIHRyxrDhu59uZyB0aMOgbmggY+G7p2EgxJBvw6BuIEFuIEzDo28gQW5oIEjDuW5nXCIsXG4gICAgZXhjZXJwdDogXCJU4burIG5o4buvbmcgbmfDoHkgxJHhuqd1IHRow6BuaCBs4bqtcCwgVHJ1bmcgxJFvw6BuIDIgxJHDoyBs4bqtcCBuw6puIG5o4buvbmcgY2hp4bq/biBjw7RuZyBs4bqreSBs4burbmcsIGLDoW0gxJHhuqV0IGLDoW0gZMOibiwgZ8OzcCBwaOG6p24gdsOgbyBz4buxIG5naGnhu4dwIGdp4bqjaSBwaMOzbmcgZMOibiB04buZYy5cIixcbiAgICBjYXRlZ29yeTogTmV3c0NhdGVnb3J5LlRSQURJVElPTixcbiAgICBkYXRlOiBcIjA4LzA1LzIwMjRcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3OTU0NjY3MTE3MC00MzQyODJiNzUxNmQ/cT04MCZ3PTEwMDAmYXV0bz1mb3JtYXQmZml0PWNyb3BcIixcbiAgICBhdXRob3I6IFwiQmFuIENow61uaCB0cuG7i1wiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJtb2RlbC0xXCIsXG4gICAgdGl0bGU6IFwiTcO0IGjDrG5oICdWxrDhu51uIHJhdSB0aGFuaCBuacOqbicgZ2nDunAgY+G6o2kgdGhp4buHbiDEkeG7nWkgc+G7kW5nIGLhu5kgxJHhu5lpXCIsXG4gICAgZXhjZXJwdDogXCJTw6FuZyBraeG6v24gdOG6rW4gZOG7pW5nIMSR4bqldCB0cuG7kW5nIHF1YW5oIGRvYW5oIHRy4bqhaSDEkeG7gyB0xINuZyBnaWEgc+G6o24geHXhuqV0IMSRw6MgbWFuZyBs4bqhaSBoaeG7h3UgcXXhuqMgdGhp4bq/dCB0aOG7sWMgY2hvIGLhur9wIMSDbiDEkeG6oWkgxJHhu5lpLCBuw6JuZyBjYW8gc+G7qWMga2jhu49lIGLhu5kgxJHhu5lpLlwiLFxuICAgIGNhdGVnb3J5OiBOZXdzQ2F0ZWdvcnkuTU9ERUxTLFxuICAgIGRhdGU6IFwiMjIvMDUvMjAyNFwiLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkyNDE5MDQ0NzA2LTM5Nzk2ZDQwZjk4Yz9xPTgwJnc9MTAwMCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcFwiLFxuICAgIGF1dGhvcjogXCJMw6ogTWluaFwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzdG9yeS0xXCIsXG4gICAgdGl0bGU6IFwiQ2h1eeG7h24gbmfGsOG7nWkgdGnhu4N1IMSR4buZaSB0csaw4bufbmcgaOG6v3QgbMOybmcgdsOsIGNoaeG6v24gc8SpIG3hu5tpXCIsXG4gICAgZXhjZXJwdDogXCJU4bqhaSDEkOG6oWkgxJHhu5lpIDEsIFRp4buDdSDEkeG7mWkgdHLGsOG7n25nIE5ndXnhu4VuIFbEg24gQSBraMO0bmcgY2jhu4kgbMOgIG5nxrDhu51pIGNo4buJIGh1eSBuZ2hpw6ptIHTDumMgdHLDqm4gdGhhbyB0csaw4budbmcgbcOgIGPDsm4gbMOgIG5nxrDhu51pIGFuaCBz4bq7IGNoaWEgdMOibSB0w6xuaCBnaeG7nSBuZ2jhu4kuXCIsXG4gICAgY2F0ZWdvcnk6IE5ld3NDYXRlZ29yeS5DT01QQU5ZX1NUT1JJRVMsXG4gICAgZGF0ZTogXCIyMS8wNS8yMDI0XCIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDg2NzQ4NjE4NzItYTUxZTA2YzUwYzliP3E9ODAmdz0xMDAwJmF1dG89Zm9ybWF0JmZpdD1jcm9wXCIsXG4gICAgYXV0aG9yOiBcIkhvw6BuZyBRdcOiblwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJsYXctMVwiLFxuICAgIHRpdGxlOiBcIk3hu5dpIHR14bqnbiBt4buZdCDEkWnhu4F1IGx14bqtdDogVMOsbSBoaeG7g3UgduG7gSBMdeG6rXQgTmdoxKlhIHbhu6UgcXXDom4gc+G7sSBz4butYSDEkeG7lWlcIixcbiAgICBleGNlcnB0OiBcIkNodXnDqm4gbeG7pWMgY3VuZyBj4bqlcCB0aMO0bmcgdGluIGNoaSB0aeG6v3QgduG7gSBxdXnhu4FuIGzhu6NpIHbDoCBuZ2jEqWEgduG7pSBj4bunYSBjw7RuZyBkw6JuIGtoaSB0aGFtIGdpYSBuaOG6rXAgbmfFqSB2w6AgY8OhYyBjaOG6vyDEkeG7mSBjaMOtbmggc8OhY2ggbeG7m2kgbmjhuqV0LlwiLFxuICAgIGNhdGVnb3J5OiBOZXdzQ2F0ZWdvcnkuTEFXX1dFRUtMWSxcbiAgICBkYXRlOiBcIjIwLzA1LzIwMjRcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4OTgyOTU0NTg1Ni1kMTBkNTU3Y2Y5NWY/cT04MCZ3PTEwMDAmYXV0bz1mb3JtYXQmZml0PWNyb3BcIixcbiAgICBhdXRob3I6IFwiUGjDsm5nIFTGsCBwaMOhcFwiXG4gIH0sXG4gIHtcbiAgICBpZDogXCJza2lsbC0xXCIsXG4gICAgdGl0bGU6IFwiS+G7uSBuxINuZyBxdeG6o24gbMO9IHRo4budaSBnaWFuIHbDoCBz4bqvcCB44bq/cCB0cuG6rXQgdOG7sSBu4buZaSB24bulIGtob2EgaOG7jWNcIixcbiAgICBleGNlcnB0OiBcIkzDoG0gdGjhur8gbsOgbyDEkeG7gyBkdXkgdHLDrCBz4buxIG5nxINuIG7huq9wIHbDoCB0aOG7sWMgaGnhu4duIGPDoWMgY2jhur8gxJHhu5kgdHJvbmcgbmfDoHkgbeG7mXQgY8OhY2gga2hvYSBo4buNYyBuaOG6pXQgdHJvbmcgbcO0aSB0csaw4budbmcgcXXDom4gxJHhu5lpIGNow61uaCBxdXkuXCIsXG4gICAgY2F0ZWdvcnk6IE5ld3NDYXRlZ29yeS5MSUZFX1NLSUxMUyxcbiAgICBkYXRlOiBcIjE5LzA1LzIwMjRcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NDQ4MDk3NDY5My02Y2EwYTc4ZmIzNmI/cT04MCZ3PTEwMDAmYXV0bz1mb3JtYXQmZml0PWNyb3BcIixcbiAgICBhdXRob3I6IFwixJDhuqFpIMO6eSBUcuG6p24gQW5oXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcImxlZ2FsLTFcIixcbiAgICB0aXRsZTogXCJDw6J1IGNodXnhu4duIHBow6FwIGx14bqtdDogQsOgaSBo4buNYyB04burIHPhu7EgY2jhu6cgcXVhbiB0cm9uZyBxdeG6o24gbMO9IHbFqSBraMOtXCIsXG4gICAgZXhjZXJwdDogXCJUaMO0bmcgcXVhIGPDoWMgdMOsbmggaHXhu5FuZyB0aOG7sWMgdOG6vywgY2h1ecOqbiBt4bulYyBnacO6cCBjaGnhur9uIHPEqSBoaeG7g3UgcsO1IGjGoW4gduG7gSB0w61uaCBuZ2hpw6ptIG1pbmggY+G7p2Ega+G7tyBsdeG6rXQgcXXDom4gxJHhu5lpIHbDoCBwaMOhcCBsdeG6rXQgTmjDoCBuxrDhu5tjLlwiLFxuICAgIGNhdGVnb3J5OiBOZXdzQ2F0ZWdvcnkuTEVHQUxfU1RPUklFUyxcbiAgICBkYXRlOiBcIjIzLzA1LzIwMjRcIixcbiAgICBpbWFnZVVybDogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1MDEwMTQ5OTE2My1jODg0OGM2NmNhODU/cT04MCZ3PTEwMDAmYXV0bz1mb3JtYXQmZml0PWNyb3BcIixcbiAgICBhdXRob3I6IFwiQmFuIFR1ecOqbiBnacOhb1wiXG4gIH1cbl07XG4iXSwibWFwcGluZ3MiOiJBQUNBLFNBQW1CLG9CQUFvQjtBQUVoQyxhQUFNLFlBQXdCO0FBQUEsRUFDbkM7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFVBQVUsYUFBYTtBQUFBLElBQ3ZCLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVSxhQUFhO0FBQUEsSUFDdkIsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxVQUFVLGFBQWE7QUFBQSxJQUN2QixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFVBQVUsYUFBYTtBQUFBLElBQ3ZCLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVSxhQUFhO0FBQUEsSUFDdkIsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxVQUFVLGFBQWE7QUFBQSxJQUN2QixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFVBQVUsYUFBYTtBQUFBLElBQ3ZCLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsVUFBVSxhQUFhO0FBQUEsSUFDdkIsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxVQUFVLGFBQWE7QUFBQSxJQUN2QixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsRUFDVjtBQUNGOyIsIm5hbWVzIjpbXX0=