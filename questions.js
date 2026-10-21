const fullQuestions = [
    {
    id: 1,
    q: "Thời gian thực dân Pháp tiến hành khai thác thuộc địa lần thứ nhất ở Việt Nam khi nào?",
    a: ["1858-1884", "1884-1896", "1897-1914", "1914-1918"],
    c: 2
  },
  {
    id: 2,
    q: "Trong đợt khai thác thuộc địa lần thứ nhất của thực dân Pháp ở nước ta có giai cấp mới nào được hình thành?",
    a: ["Giai cấp tư sản", "Giai cấp tư sản và công nhân", "Giai cấp công nhân", "Giai cấp tiểu tư sản"],
    c: 2
  },
  {
    id: 3,
    q: "Trước Chiến tranh thế giới thứ nhất, ở Việt Nam có những giai cấp nào?",
    a: [
      "Địa chủ phong kiến và nông dân",
      "Địa chủ phong kiến, nông dân, tư sản, tiểu tư sản và công nhân",
      "Địa chủ phong kiến, nông dân và công nhân",
      "Địa chủ phong kiến, nông dân và tiểu tư sản"
    ],
    c: 2
  },
  {
    id: 4,
    q: "Dưới chế độ thực dân phong kiến, giai cấp nông dân Việt Nam có yêu cầu bức thiết nhất là gì?",
    a: [
      "Độc lập dân tộc",
      "Ruộng đất",
      "Quyền bình đẳng nam, nữ",
      "Được giảm tô, giảm tức"
    ],
    c: 0
  },
  {
    id: 5,
    q: "Mâu thuẫn cơ bản và chủ yếu ở Việt Nam đầu thế kỷ XX là mâu thuẫn nào?",
    a: [
      "Mâu thuẫn giữa giai cấp nông dân với giai cấp địa chủ phong kiến",
      "Mâu thuẫn giữa giai cấp công nhân với giai cấp tư sản",
      "Mâu thuẫn giữa công nhân và nông dân với đế quốc và phong kiến",
      "Mâu thuẫn giữa dân tộc Việt Nam với đế quốc xâm lược và tay sai của chúng"
    ],
    c: 3
  },
  {
    id: 6,
    q: "Đặc điểm ra đời của giai cấp công nhân Việt Nam như thế nào?",
    a: [
      "Ra đời trước giai cấp tư sản, trong cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp.",
      "Phần lớn xuất thân từ nông dân.",
      "Chịu sự áp bức và bóc lột của đế quốc, phong kiến và tư sản",
      "Cả a, b và c"
    ],
    c: 1
  },
  {
    id: 7,
    q: "Những giai cấp bị trị ở Việt Nam dưới chế độ thuộc địa của đế quốc Pháp là:",
    a: [
      "Công nhân và nông dân",
      "Công nhân, nông dân, tiểu tư sản",
      "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc",
      "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc, địa chủ vừa và nhỏ"
    ],
    c: 3
  },
  {
    id: 8,
    q: "Khi nào phong trào công nhân Việt Nam hoàn toàn trở thành một phong trào tự giác?",
    a: [
      "Năm 1920 (tổ chức công hội ở Sài Gòn được thành lập)",
      "Năm 1925 (cuộc bãi công Ba Son)",
      "Năm 1929 (sự ra đời ba tổ chức cộng sản)",
      "Năm 1930 (Đảng Cộng sản Việt Nam ra đời)"
    ],
    c: 3
  },
  {
    id: 9,
    q: "Nguyễn ái Quốc lựa chọn con đường giải phóng dân tộc theo khuynh hướng chính trị vô sản vào thời gian nào?",
    a: ["1917", "1918", "1919", "1920"],
    c: 3
  },
  {
    id: 10,
    q: "Báo Đời sống công nhân là của tổ chức nào?",
    a: [
      "Đảng Xã hội Pháp",
      "Đảng Cộng sản Pháp",
      "Tổng Liên đoàn Lao động Pháp",
      "Hội Liên hiệp thuộc địa"
    ],
    c: 2
  },
  {
    id: 11,
    q: "Hội Liên hiệp thuộc địa được thành lập vào năm nào?",
    a: ["1920", "1921", "1923", "1924"],
    c: 1
  },
  {
    id: 12,
    q: "Nguyễn ái Quốc đã đọc Sơ thảo lần thứ nhất Luận cương về vấn đề dân tộc và vấn đề thuộc địa khi nào? ở đâu?",
    a: [
      "7/ 1920 - Liên Xô",
      "7/ 1920 - Pháp",
      "7/1920 - Quảng Châu (Trung Quốc)",
      "8/1920 - Trung Quốc"
    ],
    c: 1
  },
  {
    id: 13,
    q: "Sự kiện nào được Nguyễn ái Quốc đánh giá \"như chim én nhỏ báo hiệu mùa Xuân\"?",
    a: [
      "Cách mạng tháng Mười Nga bùng nổ và thắng lợi",
      "Sự thành lập Đảng Cộng sản Pháp",
      "Vụ mưu sát tên toàn quyền Méclanh của Phạm Hồng Thái",
      "Sự thành lập Hội Việt Nam cách mạng thanh niên"
    ],
    c: 2
  },
  {
    id: 14,
    q: "Phong trào đòi trả tự do cho cụ Phan Bội Châu diễn ra sôi nổi năm nào?",
    a: ["1924", "1925", "1926", "1927"],
    c: 1
  },
  {
    id: 15,
    q: "Nguyễn ái Quốc từ Liên Xô về Quảng Châu (Trung Quốc) vào thời gian nào?",
    a: ["12/1924", "12/1925", "11/1924", "10/1924"],
    c: 0
  },
  {
    id: 16,
    q: "Hội Việt Nam Cách mạng Thanh niên thực hiện chủ trương \"vô sản hoá\" khi nào?",
    a: [
      "Cuối năm 1926 đầu năm 1927",
      "Cuối năm 1927 đầu năm 1928",
      "Cuối năm 1928 đầu năm 1929",
      "Cuối năm 1929 đầu năm 1930"
    ],
    c: 2
  },
  {
    id: 17,
    q: "Tên chính thức của tổ chức này được đặt tại Đại hội lần thứ nhất ở Quảng Châu (tháng 5-1929) là gì?",
    a: [
      "Việt Nam Thanh niên cách mạng đồng chí Hội",
      "Hội Việt Nam cách mạng đồng minh",
      "Hội Việt Nam độc lập đồng minh",
      "Hội Việt Nam Cách mạng Thanh niên"
    ],
    c: 3
  },
  {
    id: 18,
    q: "Việt Nam Quốc dân Đảng được thành lập vào thời gian nào?",
    a: ["12/1927", "11/1926", "8/1925", "7/1925"],
    c: 0
  },
  {
    id: 19,
    q: "Ai là người đã tham gia sáng lập Việt Nam Quốc dân Đảng 1927?",
    a: ["Tôn Quang Phiệt", "Trần Huy Liệu", "Phạm Tuấn Tài", "Nguyễn Thái Học"],
    c: 2
  },
  {
    id: 20,
    q: "Khởi nghĩa Yên Bái nổ ra vào thời gian nào?",
    a: [
      "9-2-1930",
      "9-3-1930",
      "3-2-1930",
      "9-3-1931"
    ],
    c: 0
  },
  {
    id: 21,
    q: "Tổ chức cộng sản nào ra đời đầu tiên ở Việt Nam?",
    a: [
      "Hội Việt Nam cách mạng thanh niên",
      "Đông Dương cộng sản Đảng",
      "An Nam cộng sản Đảng",
      "Đông Dương cộng sản liên đoàn"
    ],
    c: 1
  },
  {
    id: 22,
    q: "Chi bộ cộng sản đầu tiên ở Việt Nam được thành lập khi nào?",
    a: ["Cuối tháng 3/1929", "Đầu tháng 3/1929", "4/1929", "5/1929"],
    c: 0
  },
  {
    id: 23,
    q: "Chi bộ cộng sản đầu tiên gồm mấy đảng viên? Ai làm bí thư chi bộ?",
    a: [
      "5 đảng viên - Bí thư Trịnh Đình Cửu",
      "6 đảng viên - Bí thư Ngô Gia Tự",
      "7 đảng viên - Bí thư Trịnh Đình Cửu",
      "7 đảng viên - Bí thư Trần Văn Cung"
    ],
    c: 3
  },
  {
    id: 24,
    q: "Đông Dương Cộng sản Đảng và An nam Cộng sản Đảng được ra đời từ tổ chức tiền thân nào?",
    a: [
      "Tân Việt cách mạng Đảng",
      "Hội Việt Nam cách mạng Thanh niên",
      "Việt Nam cách mạng đồng chí Hội",
      "Cả a, b và c"
    ],
    c: 1
  },
  {
    id: 25,
    q: "Đông Dương cộng sản liên đoàn hợp nhất vào Đảng Cộng sản Việt Nam khi nào?",
    a: ["22/2/1930", "24/2/1930", "24/2/1931", "20/2/1931"],
    c: 1
  },
  {
    id: 26,
    q: "Tổ chức Đông Dương Cộng sản Đảng được thành lập vào thời gian nào?",
    a: ["6/1927", "6/1928", "6/1929", "5/1929"],
    c: 2
  },
  {
    id: 27,
    q: "Tổ chức An Nam Cộng sản Đảng được thành lập vào thời gian nào?",
    a: ["6/1927", "6/1928", "8/1929", "7/1929"],
    c: 2
  },
  {
    id: 28,
    q: "Tổ chức Đông Dương Cộng sản liên Đoàn được thành lập vào thời gian nào?",
    a: ["7/1927", "1/1930", "2/1930", "3/1930"],
    c: 1
  },
  {
    id: 29,
    q: "Thời gian ra bản Tuyên đạt nêu rõ việc thành lập Đông Dương Cộng sản Liên đoàn?",
    a: ["7-1929", "9-1929", "10-1929", "1-1930"],
    c: 1
  },
  {
    id: 30,
    q: "Ban Thường vụ Trung ương Đảng ra Quyết nghị chấp nhận Đông Dương cộng sản liên đoàn là một bộ phận của Đảng Cộng sản Việt Nam vào thời gian nào?",
    a: ["22-2-1930", "20-2-1930", "24-2-1930", "22-3-1930"],
    c: 2
  },
  {
    id: 31,
    q: "Do đâu Nguyễn ái Quốc đã triệu tập và chủ trì Hội nghị thành lập Đảng đầu năm 1930?",
    a: [
      "Được sự uỷ nhiệm của Quốc tế Cộng sản",
      "Nhận được chỉ thị của Quốc tế Cộng sản",
      "Sự chủ động của Nguyễn Ái Quốc",
      "Các tổ chức cộng sản trong nước đề nghị"
    ],
    c: 2
  },
  {
    id: 32,
    q: "Đại biểu các tổ chức cộng sản nào đã tham dự Hội nghị thành lập Đảng đầu năm 1930?",
    a: [
      "Đông Dương cộng sản Đảng, An Nam cộng sản Đảng và Đông Dương cộng sản liên đoàn",
      "Đông Dương cộng sản Đảng và An Nam cộng sản Đảng",
      "An Nam cộng sản Đảng và Đông Dương cộng sản liên đoàn",
      "Đông Dương cộng sản Đảng và Đông Dương cộng sản liên đoàn"
    ],
    c: 1
  },
  {
    id: 33,
    q: "Hội nghị thành lập Đảng Cộng sản Việt Nam đã thông qua mấy văn kiện?",
    a: ["3 văn kiện", "4 văn kiện", "5 văn kiện", "6 văn kiện"],
    c: 3
  },
  {
    id: 34,
    q: "Hội nghị Hợp nhất thành lập Đảng CSVN (3/2/1930) thông qua các văn kiện nào sau đây:",
    a: [
      "Chánh cương vắn tắt",
      "Sách lược vắn tắt",
      "Điều lệ vắn tắt và Chương trình vắn tắt",
      "Cả 3 đáp án còn lại"
    ],
    c: 3
  },
  {
    id: 35,
    q: "Nội dung nào sau đây nằm trong Cương lĩnh đầu tiên của Đảng?",
    a: [
      "Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến, làm cho nước Nam hoàn toàn độc lập.",
      "Tư sản dân quyền cách mạng là thời kỳ dự bị để làm xã hội cách mạng.",
      "Chỉ có giải phóng giai cấp vô sản thì mới giải phóng được dân tộc.",
      "Đảng có vững cách mạng mới thành công"
    ],
    c: 1
  },
  {
    id: 36,
    q: "Cương lĩnh đầu tiên của Đảng đã xác định mục tiêu chiến lược của cách mạng Việt Nam là gì?",
    a: [
      "Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.",
      "Xây dựng một nước Việt Nam dân giầu nước mạnh xã hội công bằng, dân chủ và văn minh.",
      "Cách mạng tư sản dân quyền - phản đế và điền địa - lập chính quyền của công nông bằng hình thức Xô viết, để dự bị điều kiện đi tới cách mạng xã hội chủ nghĩa.",
      "Cả 3 đáp án còn lại."
    ],
    c: 0
  },
  {
    id: 37,
    q: "Sau Hội nghị thành lập Đảng, Ban chấp hành Trung ương lâm thời của Đảng được thành lập do ai đứng đầu?",
    a: ["Hà Huy Tập", "Trần Phú", "Lê Hồng Phong", "Trịnh Đình Cửu"],
    c: 3
  },
  {
    id: 38,
    q: "Vào thời điểm nào Nguyễn ái Quốc gửi Quốc tế Cộng sản bản Báo cáo về việc thành lập Đảng Cộng sản Việt Nam?",
    a: ["ngày 8-2-1930", "Ngày 10-2-1920", "Ngày 18-2-1930", "Ngày 28-2-1930"],
    c: 2
  },
  {
    id: 39,
    q: "Văn kiện nào của Đảng đặt nhiệm vụ chống đế quốc lên hàng đầu?",
    a: [
      "Chính cương vắn tắt, Sách lược vắn tắt do Hội nghị thành lập Đảng thông qua",
      "Luận cương chính trị tháng 10-1930 (Dự án cương lĩnh để thảo luận trong Đảng)",
      "Thư của Trung ương gửi cho các cấp đảng bộ (12-1930)",
      "Nghị quyết Đại hội lần thứ nhất của Đảng (3-1935)"
    ],
    c: 0
  },
  {
    id: 40,
    q: "Trong các điểm sau, chỉ rõ điểm khác nhau giữa Cương lĩnh chính trị đầu tiên của Đảng và Luận cương chính trị tháng 10-1930 là:",
    a: [
      "Phương hướng chiến lược của cách mạng.",
      "Chủ trương tập hợp lực lượng cách mạng.",
      "Vai trò lãnh đạo cách mạng.",
      "Phương pháp cách mạng."
    ],
    c: 1
  },
  {
    id: 41,
    q: "Văn kiện nào của Đảng nhấn mạnh \"vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền\"?",
    a: [
      "Chính cương vắn tắt, Sách lược vắn tắt.",
      "Chỉ thị thành lập Hội phản đế đồng minh (18-11-1930).",
      "Luận cương chính trị tháng 10-1930.",
      "Chung quanh vấn đề chiến sách mới của Đảng (10-1936)."
    ],
    c: 2
  },
  {
    id: 42,
    q: "Lần đầu tiên nhân dân Việt Nam kỷ niệm ngày Quốc tế lao động vào năm nào?",
    a: ["1930", "1931", "1936", "1938"],
    c: 0
  },
  {
    id: 43,
    q: "Cao trào cách mạng Việt Nam năm 1930 bắt đầu bị đế quốc Pháp đàn áp khốc liệt từ khi nào?",
    a: [
      "Đầu năm 1930",
      "Cuối năm 1930",
      "Đầu năm 1931",
      "Cuối năm 1931"
    ],
    c: 1
  },
  {
    id: 44,
    q: "Tên của lực lượng vũ trang được thành lập ở Nghệ Tĩnh trong cao trào cách mạng năm 1930 là gì?",
    a: ["Du kích", "Tự vệ", "Tự vệ đỏ", "Tự vệ chiến đấu"],
    c: 2
  },
  {
    id: 45,
    q: "Chính quyền Xô viết ở một số vùng nông thôn Nghệ - Tĩnh được thành lập trong khoảng thời gian nào?",
    a: [
      "Đầu năm 1930",
      "Cuối năm 1930",
      "Đầu năm 1931",
      "Cuối năm 1931"
    ],
    c: 1
  },
  {
  id: 46,
  q: "Nguyên nhân chủ yếu và có ý nghĩa quyết định sự bùng nổ và phát triển của cao trào cách mạng Việt Nam năm 1930?",
  a: [
    "Tác động tiêu cực của cuộc khủng hoảng kinh tế 1929-1933",
    "Chính sách khủng bố trắng của đế quốc Pháp",
    "Chính sách tăng cường vơ vét bóc lột của đế quốc Pháp",
    "Sự lãnh đạo của Đảng Cộng sản Việt Nam"
  ],
  c: 3
},
  {
    id: 47,
    q: "Luận cương Chính trị do đồng chí Trần Phú khởi thảo ra đời vào thời gian nào?",
    a: ["2-1930", "10-1930", "9-1930", "8-1930"],
    c: 1
  },
  {
    id: 48,
    q: "Hội nghị lần thứ nhất Ban chấp hành Trung ương 10/1930 do ai chủ trì?",
    a: ["Hồ Chí Minh", "Lê Duẩn", "Trường Chinh", "Trần Phú"],
    c: 3
  },
  {
    id: 49,
    q: "Hội nghị Ban chấp hành TƯ tháng 10 năm 1930 đã cử ra bao nhiêu uỷ viên?",
    a: ["4 uỷ viên", "5 uỷ viên", "6 uỷ viên", "7 uỷ viên"],
    c: 2
  },
  {
    id: 50,
    q: "Ai là Tổng Bí thư đầu tiên của Đảng?",
    a: ["Hồ Chí Minh", "Trần Văn Cung", "Trần Phú", "Lê Hồng Phong"],
    c: 2
  },
  {
    id: 51,
    q: "Đại hội lần thứ VII Quốc tế Cộng sản họp ở Matxcơva vào thời gian nào?",
    a: [
      "25-7 đến ngày 20-8-1935",
      "25-7 đến ngày 25-8-1935",
      "20-7 đến ngày 20-8-1935",
      "10-7 đến ngày 20-7-1935"
    ],
    c: 0
  },
  {
    id: 52,
    q: "Được sự chỉ đạo của Quốc tế Cộng sản, ban lãnh đạo của Đảng ở nước ngoài được thành lập vào năm nào?",
    a: ["Năm 1933", "Năm 1934", "Năm 1935", "Năm 1932"],
    c: 1
  },
  {
    id: 53,
    q: "Được sự chỉ đạo của Quốc tế Cộng sản, ban lãnh đạo của Đảng ở nước ngoài do ai đứng đầu?",
    a: ["Hà Huy Tập", "Nguyễn Văn Cừ", "Trường Chinh", "Lê Hồng Phong"],
    c: 3
  },
  {
    id: 54,
    q: "Được sự giúp đỡ của Quốc tế Cộng sản, Đảng ta đã kịp thời công bố chương trình hành động của Đảng Cộng sản Đông Dương vào thời gian nào?",
    a: [
      "Tháng 5 năm 1932",
      "Tháng 6 năm 1932",
      "Tháng 7 năm 1932",
      "Tháng 8 năm 1932"
    ],
    c: 1
  },
  {
    id: 55,
    q: "Quốc tế Cộng sản họp Đại hội lần thứ 7 ở đâu khi nào?",
    a: [
      "Tháng 7 năm 1935, ở Béc lin.",
      "Tháng 7 năm 1935, ở Pa ri",
      "Tháng 7 năm 1935, ở Luân Đôn",
      "Tháng 7 năm 1935, ở Matxcova"
    ],
    c: 3
  },
  {
    id: 56,
    q: "Hội nghị nào của Ban chấp hành Trung ương Đảng chủ trương tạm gác các khẩu hiệu \"độc lập dân tộc\" và \"cách mạng ruộng đất\"",
    a: [
      "Hội nghị họp tháng 10-1930",
      "Hội nghị họp tháng 7-1936",
      "Hội nghị họp tháng 11-1939",
      "Hội nghị họp tháng 5-1941"
    ],
    c: 1
  },
  {
    id: 57,
    q: "Mục tiêu cụ thể trước mắt của cao trào cách mạng 1936-1939 là gì?",
    a: [
      "Độc lập dân tộc.",
      "Các quyền dân chủ đơn sơ.",
      "Ruộng đất cho dân cày.",
      "Tất cả các mục tiêu trên."
    ],
    c: 1
  },
  {
    id: 58,
    q: "Cho biết đối tượng của cách mạng trong giai đoạn 1936-1939",
    a: [
      "Bọn đế quốc xâm lược.",
      "Địa chủ phong kiến.",
      "Đế quốc và phong kiến.",
      "Một bộ phận đế quốc xâm lược và tay sai."
    ],
    c: 3
  },
  {
    id: 59,
    q: "Phong trào Đông Dương Đại hội sôi nổi nhất năm nào?",
    a: ["1936", "1937", "1938", "1939"],
    c: 0
  },
  {
    id: 60,
    q: "Trong cao trào dân chủ 1936-1939 Đảng chủ trương tập hợp những lực lượng nào nào?",
    a: [
      "Công nhân và nông dân.",
      "Cả dân tộc Việt Nam.",
      "Công nhân, nông dân, tiểu tư sản, tư sản, địa chủ.",
      "Mọi lực lượng dân tộc và một bộ phận người Pháp ở Đông Dương."
    ],
    c: 3
  },
  {
    id: 61,
    q: "Hội nghị Ban chấp hành Trung ương Đảng họp tháng 7-1936 chủ trương thành lập mặt trận nào?",
    a: [
      "Mặt trận dân chủ Đông Dương.",
      "Mặt trận nhân dân phản đế Đông Dương.",
      "Mặt trận dân tộc thống nhất phản đế Đông Dương.",
      "Mặt trận phản đế đồng minh Đông Dương."
    ],
    c: 1
  },
  {
    id: 62,
    q: "Cho biết hình thức tổ chức và đấu tranh trong giai đoạn 1936-1939?",
    a: [
      "Công khai, hợp pháp.",
      "Nửa công khai, nửa hợp pháp.",
      "Bí mật, bất hợp pháp.",
      "Tất cả các hình thức."
    ],
    c: 3
  },
  {
    id: 63,
    q: "Điều kiện nào tạo ra khả năng đấu tranh công khai hợp pháp cho phong trào cách mạng Đông Dương giai đoạn 1936-1939?",
    a: [
      "Sự xuất hiện chủ nghĩa phát xít và nguy cơ chiến tranh thế giới",
      "Chủ trương chuyển hướng chiến lược cách mạng thế giới của Quốc tế Cộng sản",
      "Mặt trận nhân dân Pháp lên cầm quyền",
      "Tất cả các điều kiện trên"
    ],
    c: 2
  },
  {
    id: 64,
    q: "Ai là người viết tác phẩm \"Tự chỉ trích\"?",
    a: ["Nguyễn Văn Cừ", "Lê Hồng Phong", "Hà Huy Tập", "Phan Đăng Lưu"],
    c: 0
  },
  {
    id: 65,
    q: "Chiến tranh thế giới II bùng nổ vào thời gian nào?",
    a: ["1937", "1938", "1939", "1940"],
    c: 2
  },
  {
    id: 66,
    q: "Chủ trương điều chỉnh chiến lược cách mạng của Đảng được bắt đầu từ Hội nghị Trung ương nào?",
    a: [
      "Hội nghị Trung ương 6",
      "Hội nghị Trung ương 7",
      "Hội nghị Trung ương 8",
      "Hội nghị Trung ương 9"
    ],
    c: 0
  },
  {
    id: 67,
    q: "Hội nghị Trung ương 6 (11-1939) họp tại đâu?",
    a: [
      "Tân Trào (Tuyên Quang)",
      "Bà Điểm (Gia Định)",
      "Đình Bảng (Bắc Ninh)",
      "Thái Nguyên"
    ],
    c: 1
  },
  {
    id: 68,
    q: "Quân đội phát xít Nhật vào xâm lược nước ta tháng, năm nào?",
    a: ["9- 1939", "9- 1940", "3- 1941", "2 -1940"],
    c: 1
  },
  {
    id: 69,
    q: "Cuộc khởi nghĩa Bắc Sơn nổ ra ngày nào?",
    a: ["22/9/1940", "27/9/1940", "23/11/1940", "20/11/1940"],
    c: 1
  },
  {
    id: 70,
    q: "Ngày Nam Kỳ khởi nghĩa là ngày nào?",
    a: ["27-9-1940", "23-11-1940", "13-1-1941", "10-1-1941"],
    c: 1
  },
  {
    id: 71,
    q: "Hội nghị Trung ương lần thứ 7 của Đảng họp tại Đình Bảng (Bắc Ninh) vào thời gian nào?",
    a: ["11-1939", "11-1940", "5-1941", "4-1941"],
    c: 1
  },
  {
    id: 72,
    q: "Mặt trận Việt Nam độc lập đồng minh (Việt Minh) được thành lập năm nào?",
    a: ["1940", "1941", "1942", "1943"],
    c: 1
  },
  {
    id: 73,
    q: "Bạn hãy cho biết tên gọi của các tổ chức quần chúng trong mặt trận Việt Minh?",
    a: ["Dân chủ", "Cứu quốc", "Phản đế", "Giải phóng"],
    c: 1
  },
  {
  id: 74,
  q: "Mặt trận Việt Minh ra Tuyên ngôn về sự ra đời của Mặt trận vào thời gian nào?",
  a: [
    "Tháng 5-1941",
    "Tháng 6-1941",
    "Tháng 10-1941",
    "Tháng 11-1941"
  ],
    c: 2
    },
  {
    id: 75,
    q: "Hội nghị nào của Ban chấp hành Trung ương Đảng nhấn mạnh giải phóng dân tộc là nhiệm vụ bức thiết nhất",
    a: [
      "Hội nghị họp tháng 10-1930",
      "Hội nghị họp tháng 11-1939",
      "Hội nghị họp tháng 11-1940",
      "Hội nghị họp tháng 5-1941"
    ],
    c: 3
  },
  {
    id: 76,
    q: "Lần đầu tiên Ban chấp hành Trung ương Đảng chủ trương thành lập chính quyền nhà nước với hình thức cộng hoà dân chủ tại Hội nghị nào?",
    a: [
      "Hội nghị họp tháng 10-1930",
      "Hội nghị họp tháng 11-1939",
      "Hội nghị họp tháng 11-1940",
      "Hội nghị họp tháng 5-1941"
    ],
    c: 1
  },
  {
    id: 77,
    q: "Ai chủ trì Hội nghị Ban Chấp hành Trung ương Đảng tháng 11/1940?",
    a: [
      "Nguyễn ái Quốc",
      "Nguyễn Văn Cừ",
      "Trường Chinh",
      "Lê Hồng Phong"
    ],
    c: 2
  },
  {
    id: 78,
    q: "Hội nghị Ban Chấp hành TƯ Đảng 5/1941 họp ở đâu? Do ai chủ trì ?",
    a: [
      "Cao Bằng. Nguyễn ái Quốc",
      "Cao Bằng. Trường Chinh",
      "Bắc Cạn. Trường Chinh",
      "Tuyên Quang. Nguyễn ái Quốc"
    ],
    c: 0
  },
  {
    id: 79,
    q: "Ban chấp hành Trung ương Đảng xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm tại Hội nghị nào?",
    a: [
      "Hội nghị họp tháng 10-1930",
      "Hội nghị họp tháng 11-1939",
      "Hội nghị họp tháng 11-1940",
      "Hội nghị họp tháng 5-1941"
    ],
    c: 3
  },
  {
    id: 80,
    q: "Mặt trận dân tộc thống nhất phản đế Đông Dương được quyết định thành lập tại Hội nghị nào của Ban chấp hành Trung ương Đảng?",
    a: [
      "Hội nghị họp tháng 10-1930",
      "Hội nghị họp tháng 11-1939",
      "Hội nghị họp tháng 11-1940",
      "Hội nghị họp tháng 5-1941"
    ],
    c: 1
  },
  {
    id: 81,
    q: "Ban chấp hành Trung ương Đảng chủ trương thành lập nước Việt Nam dân chủ cộng hoà tại Hội nghị nào?",
    a: [
      "Hội nghị họp tháng 10-1930",
      "Hội nghị họp tháng 11-1939",
      "Hội nghị họp tháng 11-1940",
      "Hội nghị họp tháng 5-1941"
    ],
    c: 3
  },
  {
    id: 82,
    q: "Ban chấp hành Trung ương Đảng chủ trương giải quyết vấn đề dân tộc trong khuôn khổ từng nước ở Đông Dương vào thời gian nào?",
    a: [
      "Tháng 10-1930",
      "Tháng 11-1939",
      "Tháng 11-1940",
      "Tháng 5-1941"
    ],
    c: 3
  },
  {
    id: 83,
    q: "Hội nghị lần thứ Tám của Ban chấp hành Trung ương Đảng (5-1941) cử ai làm Tổng bí thư?",
    a: [
      "Nguyễn ái Quốc",
      "Võ Văn Tần",
      "Trường Chinh",
      "Lê Duẩn"
    ],
    c: 2
  },
  {
    id: 84,
    q: "Một đội vũ trang nhỏ được thành lập ở Cao Bằng gồm 12 chiến sĩ được thành lập vào thời gian nào?",
    a: [
      "Đầu năm 1941",
      "Cuối năm 1941",
      "Đầu năm 1944",
      "Cuối năm 1944"
    ],
    c: 1
  },
  {
    id: 85,
    q: "Tổng bộ Việt Minh ra chỉ thị \"Sửa soạn khởi nghĩa\" vào thời gian nào?",
    a: [
      "5-1944",
      "3-1945",
      "8-1945",
      "6-1945"
    ],
    c: 0
  },
  {
    id: 86,
    q: "Việt Nam Tuyên truyền giải phóng quân được thành lập khi nào?",
    a: [
      "22-12-1944",
      "19-12-1946",
      "15-5-1945",
      "10-5-1945"
    ],
    c: 0
  },
  {
    id: 87,
    q: "Đội Việt Nam tuyên truyền giải phóng quân lúc đầu được thành lập có bao nhiêu chiến sĩ?",
    a: [
      "33",
      "34",
      "35",
      "36"
    ],
    c: 1
  },
  {
    id: 88,
    q: "Việt Nam Giải phóng quân được thành lập vào thời gian nào?",
    a: [
      "tháng 9-1940",
      "tháng 12-1941",
      "tháng 12-1944",
      "tháng 5-1945"
    ],
    c: 3
  },
  {
    id: 89,
    q: "Tài liệu nào sau đây được đánh giá như một văn kiện mang tính chất cương lĩnh quân sự đầu tiên của Đảng?",
    a: [
      "Đường cách mạng",
      "Cách đánh du kích",
      "Con đường giải phóng",
      "Chỉ thị thành lập đội Việt Nam tuyên truyền giải phóng quân"
    ],
    c: 3
  },
  {
    id: 90,
    q: "Chỉ thị \"Nhật - Pháp bắn nhau và hành động của chúng ta\" ra đời khi nào?",
    a: [
      "9/3/1945",
      "12/3/1945",
      "10/3/1846",
      "12/3/1946"
    ],
    c: 1
  },
  {
    id: 50,
    q: "Bản Chỉ thị Nhật, Pháp bắn nhau và hành động của chúng ta phản ánh nội dung của Hội nghị nào?",
    a: [
      "Hội nghị Ban chấp hành Trung ương Đảng họp tháng 5-1941",
      "Hội nghị Ban Thường vụ Trung ương Đảng họp tháng 2-1943",
      "Hội nghị Ban Thường vụ Trung ương Đảng họp tháng 3-1945",
      "Hội nghị quân sự cách mạng Bắc kỳ họp tháng 4-1945"
    ],
    c: 2
  },
  {
    id: 91,
    q: "Hội văn hoá cứu quốc được thành lập vào thời gian nào?",
    a: [
      "năm 1941",
      "năm 1943",
      "năm 1944",
      "năm 1945"
    ],
    c: 1
  },
  {
    id: 92,
    q: "Trong cao trào vận động cứu nước 1939-1945, chiến khu cách mạng được xây dựng ở vùng Chí Linh - Đông Triều có tên là gì?",
    a: [
      "Trần Hưng Đạo",
      "Hoàng Hoa Thám",
      "Lê Lợi",
      "Quang Trung"
    ],
    c: 0
  },
  {
  id: 93,
  q: "Chiến khu Hoà - Ninh - Thanh còn có tên là gì?",
  a: [
    "Trần Hưng Đạo",
    "Hoàng Hoa Thám",
    "Lê Lợi",
    "Quang Trung"
  ],
  c: 3
},
  {
    id: 94,
    q: "Chiến khu cách mạng nào được gọi là Đệ tứ chiến khu",
    a: [
      "Trần Hưng Đạo",
      "Hoàng Hoa Thám",
      "Lê Lợi",
      "Quang Trung"
    ],
    c: 0
  },
  {
    id: 95,
    q: "Hội nghị quân sự cách mạng Bắc Kỳ chủ trương thành lập chiến khu cách mạng nào ở Nam Kỳ?",
    a: [
      "Trưng Trắc",
      "Phan Đình Phùng",
      "Nguyễn Tri Phương",
      "Hoàng Hoa Thám"
    ],
    c: 2
  },
  {
    id: 96,
    q: "Khẩu hiệu nào sau được nêu ra trong Cao trào kháng Nhật cứu nước?",
    a: [
      "Đánh đuổi phát xít Nhật- Pháp",
      "Đánh đuổi phát xít Nhật",
      "Giải quyết nạn đói",
      "Chống nhổ lúa trồng đay"
    ],
    c: 0
  },
  {
    id: 97,
    q: "Cao trào kháng Nhật cứu nước đã diễn ra ở vùng rừng núi và trung du Bắc kỳ với hình thức nào là chủ yếu?",
    a: [
      "khởi nghĩa từng phần",
      "vũ trang tuyên truyền",
      "chiến tranh du kích cục bộ",
      "đấu tranh báo chí"
    ],
    c: 2
  },
  {
    id: 98,
    q: "Trong cao trào kháng Nhật cứu nước, phong trào \"Phá kho thóc của Nhật để giải quyết nạn đói\" đã diễn ra mạnh mẽ ở đâu?",
    a: [
      "Đồng bằng Nam Bộ",
      "Đồng bằng Bắc Bộ và Bắc Trung Bộ",
      "Đồng bằng Bắc Bộ",
      "Đồng bằng Trung Bộ"
    ],
    c: 1
  },
  {
    id: 99,
    q: "Hình thức hoạt động chủ yếu ở các đô thị trong cao trào kháng Nhật cứu nước là gì?",
    a: [
      "vũ trang tuyên truyền",
      "diệt ác trừ gian",
      "vũ trang tuyên truyền và diệt ác trừ gian",
      "đấu tranh báo chí và đấu tranh nghị trường"
    ],
    c: 2
  },
  {
  id: 100,
  q: "Hội nghị quân sự cách mạng Bắc kỳ họp vào thời gian nào?",
  a: [
    "tháng 3-1945",
    "tháng 4-1945",
    "tháng 5-1945",
    "tháng 6-1945"
  ],
  c: 1
},

  {
    id: 101,
    q: "Hội nghị quân sự cách mạng Bắc kỳ do ai triệu tập?",
    a: [
      "Ban Thường vụ Trung ương Đảng",
      "Tổng bộ Việt Minh",
      "Ban chấp hành Trung ương Đảng",
      "Xứ uỷ Bắc Kỳ"
    ],
    c: 0
  },
  {
    id: 102,
    q: "Tổ chức nào triệu tập Đại hội quốc dân họp tại Tân Trào?",
    a: [
      "Ban Thường vụ Trung ương Đảng",
      "Ban chấp hành Trung ương Đảng",
      "Tổng bộ Việt Minh",
      "Uỷ ban khởi nghĩa"
    ],
    c: 2
  },
  {
    id: 103,
    q: "Hội nghị toàn quốc của Đảng Cộng sản Đông Dương họp ở Tân Trào trong thời gian nào?",
    a: [
      "15 - 19/8/1941",
      "13 - 15/8/1945",
      "15 - 19/8/1945"
    ],
    c: 1
  },
  {
    id: 104,
    q: "Uỷ ban dân tộc giải phóng do ai làm chủ tịch?",
    a: [
      "Hồ Chí Minh",
      "Trường Chinh",
      "Phạm Văn Đồng",
      "Võ Nguyên Giáp"
    ],
    c: 0
  },
  {
    id: 105,
    q: "Quốc dân Đại hội Tân trào họp tháng 8-1945 ở huyện nào?",
    a: [
      "Chiêm Hoá (Tuyên Quang)",
      "Định hoá ( Thái nguyên)",
      "Sơn Dương (Tuyên Quang)",
      "Đại Từ (Thái Nguyên)"
    ],
    c: 2
  },
  {
    id: 106,
    q: "Quốc dân Đại hội Tân trào tháng 8-1945 đã không quyết định những nội dung nào dưới đây:",
    a: [
      "Quyết định Tổng khởi nghĩa",
      "10 Chính sách của Việt Minh.",
      "Quyết định thành lập Uỷ ban giải phóng ở Hà Nội.",
      "Quyết định thành lập Uỷ ban giải phóng dân tộc, quy định Quốc kỳ, Quốc ca."
    ],
    c: 2
  },
  {
    id: 107,
    q: "Hội nghị nào đã quyết định phát động toàn dân nổi dậy tổng khởi nghĩa giành chính quyền?",
    a: [
      "Hội nghị Ban chấp hành Trung ương Đảng",
      "Hội nghị Ban thường vụ Trung ương Đảng",
      "Hội nghị toàn quốc của Đảng",
      "Hội nghị Tổng bộ Việt Minh"
    ],
    c: 2
  },
  {
    id: 108,
    q: "Nhân dân ta phải tiến hành tổng khởi nghĩa giành chính quyền trước khi quân Đồng minh vào Đông Dương vì:",
    a: [
      "đó là lúc so sánh lực lượng có lợi nhất đối với cách mạng",
      "đó là lúc kẻ thù cũ đã ngã gục nhưng kẻ thù mới chưa kịp đến",
      "quân Đồng minh có thể dựng ra một chính quyền trái với ý chí và nguyện vọng của nhân dân ta",
      "tất cả các lý do còn lại"
    ],
    c: 3
  },
  {
    id: 109,
    q: "Tình hình đất nước ta sau cách mạng tháng Tám năm 1945 được ví như hình ảnh:",
    a: [
      "Nước sôi lửa nóng",
      "Nước sôi lửa bỏng",
      "Ngàn cân treo sợi tóc",
      "Trứng nước"
    ],
    c: 2
  },
  {
    id: 110,
    q: "Những khó khăn, thách thức đối với Việt Nam sau cách mạng tháng Tám - 1945:",
    a: [
      "Các thế lực đế quốc, phản động bao vây, chống phá",
      "Kinh tế kiệt quệ và nạn đói hoành hành",
      "Hơn 90% dân số không biết chữ",
      "Tất cả các phương án còn lại"
    ],
    c: 3
  },
  {
    id: 111,
    q: "Những thuận lợi căn bản của đất nước sau cách mạng tháng Tám - 1945",
    a: [
      "Cách mạng thế giới phát triển mạnh mẽ",
      "Hệ thống chính quyền cách mạng nhân dân được thiết lập",
      "Nhân dân có quyết tâm bảo vệ chế độ mới",
      "Tất cả các phương án trên"
    ],
    c: 3
  },
  {
    id: 112,
    q: "Kẻ thù chính của cách mạng Việt Nam ngay sau Cách mạng 8- 1945?",
    a: [
      "Thực dân Pháp xâm lược.",
      "Tưởng Giới Thạch và tay sai",
      "Thực dân Anh xâm lược",
      "Giặc đói và giặc dốt."
    ],
    c: 0
  },
  {
    id: 113,
    q: "Sau ngày tuyên bố độc lập Chính phủ lâm thời đã xác định các nhiệm vụ cấp bách cần giải quyết:",
    a: [
      "Chống ngoại xâm",
      "Chống ngoại xâm và nội phản",
      "Diệt giặc đói, giặc dốt và giặc ngoại xâm",
      "Cả ba phương án còn lại"
    ],
    c: 2
  },
  {
    id: 114,
    q: "Chỉ thị kháng chiến kiến quốc ra đời ngày, tháng, năm nào?",
    a: [
      "25/11/1945",
      "26/11/1945",
      "25/11/1946",
      "26/11/1946"
    ],
    c: 0
  },
  {
    id: 115,
    q: "Chỉ thị Kháng chiến kiến quốc của Trung ương Đảng ngày 25/11/1945, xác định nhiệm vụ nào là trung tâm, bao trùm nhất?",
    a: [
      "Củng cố, bảo vệ chính quyền cách mạng",
      "Chống thực dân Pháp xâm lược",
      "Cải thiện đời sống nhân dân",
      "Cả 3 đáp án còn lại"
    ],
    c: 0
  },
  {
    id: 116,
    q: "Chỉ thị kháng chiến, kiến quốc đã xác định khẩu hiệu cách mạng Việt Nam sau cách mạng tháng Tám -1945:",
    a: [
      "Dân tộc giải phóng",
      "Thành lập chính quyền cách mạng",
      "Dân tộc trên hết, Tổ quốc trên hết",
      "Đoàn kết dân tộc và thế giới"
    ],
    c: 2
  },
  {
    id: 117,
    q: "Chủ trương và sách lược của Trung ương Đảng trong việc đối phó với các lực lượng đế quốc sau cách mạng tháng Tám-1945:",
    a: [
      "Thêm bạn bớt thù",
      "Hoa -Việt thân thiện",
      "Độc lập về chính trị, nhân nhượng về kinh tế đối với Pháp",
      "Cả ba phương án kể còn lại"
    ],
    c: 3
  },
  {
    id: 118,
    q: "Những thành tựu căn bản của cách mạng Việt Nam trong việc xây dựng và củng cố chính quyền cách mạng sau 1945 :",
    a: [
      "Tổ chức tổng tuyển cử và ban hành Hiến pháp",
      "Củng cố và mở rộng mặt trận Việt Minh",
      "Xây dựng và phát triển các lực lượng vũ trang nhân dân",
      "Tất cả các phương án còn lại"
    ],
    c: 3
  },
  {
    id: 119,
    q: "Phong trào mà Đảng đã vận động nhân dân chống nạn mù chữ diễn ra sau cách mạng tháng Tám -1945",
    a: [
      "Xây dựng nếp sống văn hoá mới",
      "Bình dân học vụ",
      "Bài trừ các tệ nạn xã hội",
      "Xoá bỏ văn hoá thực dân nô dịch phản động"
    ],
    c: 1
  },
  {
    id: 120,
    q: "Nhân dân Nam bộ đứng lên kháng chiến chống thực dân Pháp xâm lược bảo vệ chính quyền cách mạng vào ngày nào?",
    a: [
      "23-9-1945",
      "23-11-1945",
      "19-12-1946",
      "10-12-1946"
    ],
    c: 0
  },
  {
    id: 121,
    q: "Đảng ta đã phát động phong trào gì để ủng hộ nhân lực cho Nam Bộ kháng chiến chống Pháp từ ngày 23-9-1945",
    a: [
      "Vì miền Nam \"thành đồng Tổ quốc\"",
      "Hướng về miền Nam ruột thịt",
      "Nam tiến",
      "Cả ba phương án còn lại"
    ],
    c: 2
  },
  {
    id: 122,
    q: "Quốc hội đầu tiên của nước Việt Nam dân chủ cộng hoà được bầu khi nào?",
    a: [
      "4/1/1946",
      "5/1/1946",
      "6/1/1946",
      "7/1/1946"
    ],
    c: 2
  },
  {
    id: 123,
    q: "Kỳ họp Quốc hội thứ nhất thành lập chính phủ đầu tiên của nước Việt Nam dân chủ cộng hoà khi nào?",
    a: [
      "3/2/1946",
      "2/3/1946",
      "3/4/1946",
      "3/3/1945"
    ],
    c: 1
  },
  {
    id: 124,
    q: "Hiến pháp đầu tiên của nước Việt Nam dân chủ cộng hoà được thông qua vào ngày tháng năm nào?",
    a: [
      "9/11/1945",
      "10/10/1946",
      "9/11/1946",
      "9/11/1947"
    ],
    c: 2
  },
  {
    id: 125,
    q: "Hà Nội được xác định là thủ đô của nước Việt Nam dân chủ cộng hoà vào năm nào?",
    a: [
      "Năm 1945",
      "Năm 1946",
      "Năm 1954",
      "Năm 1930"
    ],
    c: 1
  },
  {
    id: 126,
    q: "Để gạt mũi nhọn tiến công kẻ thù, Đảng ta đã tuyên bố tự giải tán vào ngày tháng năm nào và lấy tên gọi là gì?",
    a: [
      "2.9.1945- Đảng Cộng sản Đông Dương",
      "25-11-1945- Hội nghiên cứu Chủ nghĩa Mác-Lênin",
      "3-2-1946- Đảng Lao động Việt Nam",
      "11-11-1945- Hội nghiên cứu Chủ nghĩa Mác ở Đông Dương"
    ],
    c: 3
  },
  {
    id: 127,
    q: "Những sách lược nhân nhượng của Đảng ta với quân Tưởng và tay sai ở miền Bắc sau cách mạng tháng Tám",
    a: [
      "Cho Việt Quốc, Việt Cách tham gia Quốc hội và Chính phủ",
      "Cung cấp lương thực thực phẩm cho quân đội Tưởng",
      "Chấp nhận cho quân Tưởng tiêu tiền Quan kin, Quốc tệ",
      "Cả ba phương án còn lại"
    ],
    c: 3
  },
  {
    id: 128,
    q: "Để quân Tưởng và tay sai khỏi kiếm cớ sách nhiễu, Đảng chủ trương:",
    a: [
      "Dĩ hoà vi quý",
      "Hoa Việt thân thiện",
      "Biến xung đột lớn thành xung đột nhỏ, biến xung đột nhỏ thành không có xung đột",
      "Cả 3 phương án còn lại"
    ],
    c: 2
  },
  {
    id: 129,
    q: "Đảng ta đã lựa chọn giải pháp gì trong mối quan hệ với thực dân Pháp sau ngày Pháp và Tưởng ký hiệp ước Trùng Khánh (28-2-1946)",
    a: [
      "Thương lượng và hoà hoãn với Pháp",
      "Kháng chiến chống thực dân Pháp",
      "Nhân nhượng với quân đội Tưởng",
      "Chống cả quân đội Tưởng và Pháp"
    ],
    c: 0
  },
  {
    id: 130,
    q: "Tại sao Đảng lại lựa chọn giải pháp thương lượng với Pháp",
    a: [
      "Chấm dứt cuộc kháng chiến ở Nam Bộ",
      "Buộc quân Tưởng phải rút ngay về nước, tránh được tình trạng cùng một lúc phải đối phó với nhiều kẻ thù",
      "Phối hợp với Pháp tấn công Tưởng.",
      "Cả 3 đáp án còn lại"
    ],
    c: 3
  },
  {
    id: 131,
    q: "Sự kiện mở đầu cho sự hoà hoãn giữa Việt Nam và Pháp",
    a: [
      "Pháp ngừng bắn ở miền Nam",
      "Việt Nam với Pháp nhân nhượng quyền lợi ở miền Bắc",
      "Ký kết hiệp định Sơ bộ 6-3-1946 giữa Việt Nam với Pháp",
      "Pháp và Tưởng ký hiệp ước Trùng Khánh trao đổi quyền lợi cho nhau"
    ],
    c: 2
  },
  {
    id: 132,
    q: "Sau khi ký bản Hiệp định Sơ bộ, ngày 9-3-1946, Ban thường vụ Trung ương Đảng đã ra",
    a: [
      "Chỉ thị kháng chiến kiến quốc",
      "Chỉ thị Hoà để tiến",
      "Chỉ thị Toàn quốc kháng chiến",
      "Tất cả các phương án còn lại"
    ],
    c: 1
  },
  {
    id: 133,
    q: "Sau bản Hiệp định sơ bộ, ngày 14-9 Chủ tịch Hồ Chí Minh đã thay mặt Chính phủ ký bản Tạm ước với Chính phủ Pháp với nội dung:",
    a: [
      "Pháp thừa nhận các quyền dân tộc cơ bản của nước Việt Nam",
      "Chấm dứt chiến tranh ở Việt Nam.",
      "Đình chỉ xung đột ở miền Nam và sẽ tiếp tục đàm phán vào 1-1947",
      "Tất cả các đáp án"
    ],
    c: 3
  },
  {
    id: 134,
    q: "Cuối năm 1946, thực dân Pháp đã bội ước, liên tục tăng cường khiêu khích và lấn chiếm thêm một số địa điểm như:",
    a: [
      "Thành phố Hải Phòng, thị xã Lạng Sơn",
      "Đà Nẵng, Sài Gòn",
      "Hải Phòng, Hải Dương, Lào Cai, Yên Bái",
      "Thành phố Hải phòng, thị xã Lạng Sơn, Đà Nẵng, Hà Nội"
    ],
    c: 3
  },
  {
    id: 135,
    q: "Hiệp ước Hoa - Pháp được ký kết ở đâu?",
    a: [
      "Pari",
      "Trùng Khánh",
      "Hương Cảng",
      "Ma Cao"
    ],
    c: 1
  },
  {
    id: 67,
    q: "Quân đội của Tưởng Giới Thạch đã rút hết khỏi miền Bắc nước ta vào thời gian nào?",
    a: [
      "Cuối tháng 8/1946",
      "Đầu tháng 8/1946",
      "Đầu tháng 9/1946",
      "Cuối tháng 9/1946"
    ],
    c: 3
  },
  {
    id: 136,
    q: "Hiệp định Sơ bộ được Hồ Chí Minh ký với G. Sanhtơny vào thời gian nào?",
    a: [
      "6-3-1946",
      "14-9-1946",
      "19-12-1946",
      "10-12-1946"
    ],
    c: 0
  },
  {
    id: 137,
    q: "Hội nghị Phôngtennơblô diễn ra vào thời gian nào?",
    a: [
      "Từ 10/5 - 20/8/1945",
      "Từ 15/6 - 25/9/1946",
      "6/7 - 10/9/1946",
      "12/8 - 30/10/1946"
    ],
    c: 2
  },
  {
    id: 138,
    q: "Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến vào thời điểm nào",
    a: [
      "Đêm ngày 18-9-1946",
      "Đêm ngày 19-12-1946",
      "Ngày 20-12-1946",
      "Cả ba phương án đều sai"
    ],
    c: 1
  },
  {
    id: 139,
    q: "Hội nghị Ban thường vụ Trung Đảng họp mở rộng quyết định phát động cuộc kháng chiến toàn quốc họp vào thời gian nào?",
    a: [
      "Ngày 18-12-1946",
      "Ngày 19-12-1946",
      "Ngày 20-12-1946",
      "Ngày 22-12-1946"
    ],
    c: 1
  },
  {
    id: 140,
    q: "Cuộc tổng giao chiến lịch sử mở đầu của kháng chiến chống thực dân Pháp của quân và dân ta ở Hà Nội đã diễn ra trong",
    a: [
      "60 ngày đêm",
      "30 ngày đêm",
      "12 ngày đêm",
      "90 ngày đêm"
    ],
    c: 1
  },
  {
    id: 141,
    q: "Những văn kiện nào dưới đây được coi như Cương lĩnh kháng chiến của Đảng ta:",
    a: [
      "Lời kêu gọi toàn quốc kháng chiến của chủ tịch Hồ Chí Minh",
      "Chỉ thị toàn dân kháng chiến của Trung ương Đảng",
      "Tác phẩm \"Kháng chiến nhất định thắng lợi\" của Tổng Bí thư Trường Chinh",
      "Cả ba phương án còn lại"
    ],
    c: 3
  },
  {
    id: 142,
    q: "nhiệm vụ hàng đầu của nhân dân ta trong quá trình kháng chiến chống thực dân Pháp:",
    a: [
      "Chống đế quốc giành độc lập dân tộc",
      "Xoá bỏ những tàn tích phong kiến đem lại ruộng đất cho nông dân",
      "Xây dựng chế độ dân chủ mới",
      "Cả ba phương án trên"
    ],
    c: 0
  },
  {
    id: 143,
    q: "Phương châm chiến lược của cuộc kháng chiến chống Pháp là:",
    a: [
      "Toàn dân",
      "Toàn diện",
      "Lâu dài và dựa vào sức mình là chính",
      "Cả ba phương án trên đều sai."
    ],
    c: 2
  },
  {
    id: 144,
    q: "Tác phẩm \"Kháng chiến nhất định thắng lợi\" được phát hành khi nào?",
    a: [
      "6/ 1946",
      "7/ 1946",
      "7/ 1947",
      "9/1947"
    ],
    c: 3
  },
  {
    id: 145,
    q: "Tác giả tác phẩm Kháng chiến nhất định thắng lợi là ai?",
    a: [
      "Hồ Chí Minh",
      "Lê Duẩn",
      "Trường Chinh",
      "Phạm Văn Đồng"
    ],
    c: 2
  },
  {
    id: 146,
    q: "Đâu là nơi được coi là căn cứ địa cách mạng của cả nước trong kháng chiến chống Pháp?",
    a: [
      "Tây Bắc",
      "Việt Bắc",
      "Hà Nội",
      "Điện Biên Phủ"
    ],
    c: 1
  },
  {
    id: 147,
    q: "Chiến thắng nào đã căn bản đánh bại âm mưu đánh nhanh, thắng nhanh của thực dân Pháp?",
    a: [
      "Việt Bắc",
      "Trung Du",
      "Biên Giới",
      "Hà Nam Ninh"
    ],
    c: 0
  },
  {
    id: 148,
    q: "Khi bắt đầu tiến hành xâm lược Việt Nam, thực dân Pháp đã thực hiện chiến lược:",
    a: [
      "Dùng người Việt đánh người Việt",
      "Lấy chiến tranh nuôi chiến tranh",
      "Đánh nhanh thắng nhanh",
      "Cả 3 phương án còn lại"
    ],
    c: 2
  },
  {
    id: 149,
    q: "Ngày 15-10-1947, để đối phó với cuộc tấn công của thực dân Pháp lên căn cứ địa Việt Bắc, Ban thường vụ Trung ương Đảng đã đề ra",
    a: [
      "Chỉ thị kháng chiến, kiến quốc",
      "Chỉ thị \"Phá tan cuộc tấn công mùa Đông của giặc Pháp\"",
      "Chủ trương tiến công quân Pháp ở vùng sau lưng chúng",
      "Lời kêu gọi đánh tan cuộc tấn công lên Việt Bắc của thực dân Pháp"
    ],
    c: 1
  },
  {
    id: 150,
    q: "Một số thành quả tiêu biểu của chiến dịch Việt Bắc Thu Đông 1947",
    a: [
      "Tiêu diệt 7000 tên địch, phá huỷ hàng trăm xe, đánh chìm 16 ca nô và nhiều phương tiện chiến tranh khác",
      "Bảo vệ vững chắc cơ quan đầu não và căn cứ địa kháng chiến",
      "Lực lượng vũ trang ta được tôi luyện và trưởng thành",
      "Cả 3 phương án trên"
    ],
    c: 3
  },
  {
    id: 151,
    q: "Sau chiến thắng Việt Bắc Thu Đông 1947 những chuyển biến lớn của tình hình thế giới ảnh hưởng đến cách mạng Việt Nam",
    a: [
      "Sự thắng lợi và phát triển mạnh mẽ của Liên Xô, các nước dân chủ nhân dân á - Âu và Phong trào giải phóng dân tộc trên thế giới",
      "Đế quốc Mỹ thực hiện âm mưu vừa vực dậy vừa khống chế các nước Tây Âu",
      "Thực dân Pháp vấp phải những khó khăn về kinh tế, chính trị và phong trào phản chiến ở nước Pháp phát triển",
      "Tất cả các phương án trên"
    ],
    c: 3
  },
  {
    id: 152,
    q: "Để thúc đẩy cuộc kháng chiến tiến lên, theo sáng kiến của Chủ tịch Hồ Chí Minh, ngày 27-3-1948, Ban Thường vụ TW Đảng ra chỉ thị",
    a: [
      "Chống lại âm mưu thâm độc dùng người Việt đánh người Việt",
      "Phát động phong trào thi đua ái quốc",
      "Tiến hành chiến tranh du kích trên cả nước",
      "Tất cả các phương án trên"
    ],
    c: 1
  },
  {
    id: 153,
    q: "Chiến dịch nào còn có tên là chiến dịch Hoàng Hoa Thám?",
    a: [
      "Trung Du",
      "Đường 18",
      "Hà Nam Ninh",
      "Biên giới"
    ],
    c: 1
  },
  {
    id: 154,
    q: "Hội nghị văn hoá toàn quốc lần thứ hai diễn ra khi nào?",
    a: [
      "6/1948",
      "7/1948",
      "7/1949",
      "8/1949"
    ],
    c: 1
  },
  {
    id: 155,
    q: "Đại hội văn hoá toàn quốc lần thứ hai xác định phương châm xây dựng nền văn hoá mới:",
    a: [
      "Dân tộc hoá",
      "Đại chúng hoá",
      "Khoa học hoá",
      "Cả ba phương án trên"
    ],
    c: 3
  },
  {
    id: 156,
    q: "Đầu năm 1948, TW Đảng đã đề ra cách thức thực hiện cách mạng ruộng đất theo đường lối riêng biệt của cách mạng Việt Nam, đó là:",
    a: [
      "Cải cách ruộng đất",
      "Cải cách từng bước để dần dần thu hẹp phạm vi bóc lột của địa chủ",
      "Sửa đổi chế độ ruộng đất trong phạm vi không có hại cho nông dân.",
      "Cả A, B và C"
    ],
    c: 3
  },
  {
    id: 157,
    q: "Ban Thường vụ TƯ Đảng đã ra chỉ thị phát động phong trào thi đua ái quốc vào thời gian nào?",
    a: [
      "27/3/1946",
      "28/3/1946",
      "27/3/1948",
      "28/4/1949"
    ],
    c: 2
  },
  {
    id: 158,
    q: "Trong thời kỳ kháng chiến chống Pháp, khẩu hiệu \"Tích cực cầm cự và chuẩn bị tổng phản công\" được nêu ra khi nào?",
    a: [
      "1948",
      "1949",
      "1950",
      "1951"
    ],
    c: 1
  },
  {
    id: 159,
    q: "Trong kháng chiến chống Pháp, Đảng đã chủ trương mở rộng khối đại đoàn kết dân tộc với việc",
    a: [
      "Thống nhất Việt Minh và Liên Việt",
      "Thành lập Mặt trận Liên Việt",
      "Mở rộng Mặt trận Việt Minh",
      "Cả 3 phương án trên"
    ],
    c: 0
  },
  {
    id: 160,
    q: "Đại hội thống nhất Mặt trận Việt Minh và Liên Việt được tổ chức vào thời gian nào?",
    a: [
      "3/1951",
      "2/1952",
      "3/1953",
      "1/1953"
    ],
    c: 0
  },
  {
    id: 161,
    q: "Tháng 3-1951, Đại Hội thống nhất Việt Minh và Liên Việt thành",
    a: [
      "Mặt trận Việt Nam cách mạng thanh niên",
      "Mặt trận Việt Minh",
      "Mặt trận Tổ Quốc",
      "Mặt trận Liên hiệp quốc dân Việt Nam (Liên Việt)"
    ],
    c: 3
  },
  {
    id: 162,
    q: "Việt Nam đã bắt đầu đặt quan hệ ngoại giao với Trung Quốc, Liên Xô và một số nước khác vào thời điểm nào?",
    a: [
      "Năm 1945",
      "Năm 1948",
      "Năm 1950",
      "Năm 1953"
    ],
    c: 2
  },
  {
    id: 163,
    q: "Để phá thế bao vây cô lập, phát triển lực lượng và giành thế chủ động, tháng 6-1950, lần đầu tiên TW Đảng đã chủ trương mở chiến dịch tiến công quy mô lớn. Đó là:",
    a: [
      "Chiến dịch Việt Bắc",
      "Chiến dịch Tây Bắc",
      "Chiến dịch Biên Giới",
      "Chiến dịch Thượng Lào"
    ],
    c: 2
  },
  {
    id: 164,
    q: "ý nghĩa của chiến thắng Biên Giới Thu - Đông đối với cách mạng Việt Nam",
    a: [
      "Giáng một đòn nặng nề vào ý chí xâm lược của địch, đập tan tuyến phòng thủ và giải phóng hoàn toàn khu vực biên giới, nối liền Việt Nam với thế giới",
      "Đánh dấu sự trưởng thành vượt bậc về trình độ chiến đấu của quân đội Việt Nam",
      "Quân ta đã giành được thế chủ động chiến lược trên chiến trường chính Bắc Bộ, tạo bước chuyển biến lớn của kháng chiến vào giai đoạn mới",
      "Tất cả các phương án trên"
    ],
    c: 3
  },
  {
    id: 165,
    q: "Sau 16 năm lãnh đạo cách mạng Việt Nam, lần đầu tiên Đảng đã tuyên bố ra hoạt động công khai và tiến hành. Đó là Đại hội lần thứ mấy?",
    a: [
      "Đại hội Đại hội Đảng toàn quốc lần thứ nhất",
      "Đại hội Đại hội Đảng toàn quốc lần thứ hai",
      "Đại hội Đại hội Đảng toàn quốc lần thứ ba",
      "Cả ba phương án đều sai"
    ],
    c: 1
  },
  {
    id: 166,
    q: "Thời gian và địa điểm diễn ra Đại hội Đảng toàn quốc lần thứ hai",
    a: [
      "Tháng 3-1935, tại Ma Cao, Trung Quốc",
      "Tháng 2-1950, tại Tân Trào, Tuyên Quang",
      "Tháng 2-1951, tại Vinh Quang, Chiêm Hoá, Tuyên Quang",
      "Tháng 3-1951, tại Việt Bắc"
    ],
    c: 2
  },
  {
    id: 167,
    q: "Tại Đại hội đại biểu toàn quốc lần thứ hai, Đảng quyết định đổi tên thành",
    a: [
      "Đảng Cộng sản Đông Dương",
      "Đảng Cộng sản Việt Nam",
      "Hội nghiên cứu Chủ nghĩa Mác",
      "Đảng Lao Động Việt Nam"
    ],
    c: 3
  },
  {
    id: 168,
    q: "Đại hội Đảng toàn quốc lần thứ hai của Đảng Lao Động Việt Nam đã thông qua một văn kiện mang tính chất cương lĩnh. Đó là:",
    a: [
      "Cương lĩnh cách mạng Việt Nam.",
      "Chính cương của Đảng Lao động Việt Nam",
      "Luận cương về cách mạng Việt Nam",
      "Cương lĩnh của Đảng Lao Động Việt Nam"
    ],
    c: 1
  },
  {
    id: 169,
    q: "Chính cương Đảng Lao Động Việt Nam tháng 2-1951 đã nêu ra các tính chất của xã hội Việt Nam",
    a: [
      "Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến",
      "Dân chủ và dân tộc",
      "Thuộc địa nửa phong kiến",
      "Dân tộc và dân chủ mới"
    ],
    c: 0
  },
  {
    id: 170,
    q: "Hai đối tượng của cách mạng Việt Nam được nêu ra tại Chính cương Đảng Lao Động Việt Nam",
    a: [
      "Đối tượng chính là chủ nghĩa đế quốc xâm lược, cụ thể là thực dân Pháp",
      "Đối tượng phụ là phong kiến, cụ thể là phong kiến phản động",
      "Cả hai phương án A và B",
      "Đế quốc và phong kiến Việt Nam"
    ],
    c: 3
  },
  {
    id: 171,
    q: "Chính cương Đảng Lao Động Việt Nam đã nêu ra các nhiệm vụ cơ bản của cách mạng Việt Nam:",
    a: [
      "Đánh đuổi đế quốc xâm lược, giành độc lập và thống nhất thật sự cho dân tộc",
      "Xoá bỏ những di tích phong kiến và nửa phong kiến, làm cho người cày có ruộng",
      "Phát triển chế độ dân chủ nhân dân, gây cơ sở cho CNXH",
      "Cả 3 phương án trên"
    ],
    c: 0
  },
  {
    id: 172,
    q: "Lực lượng tạo nên động lực cho cách mạng Việt Nam được nêu ra trong Chính cương Đảng Lao Động Việt Nam",
    a: [
      "Công nhân, nông dân, tiểu tư sản, tư sản dân tộc, địa chủ yêu nước (nhân dân)",
      "Công nhân, nông dân, lao động trí thức",
      "Công nhân, tri thức, tư sản dân tộc",
      "Nhân dân, địa chủ, tư sản dân tộc"
    ],
    c: 0
  },
  {
    id: 173,
    q: "Nền tảng của khối đại đoàn kết dân tộc được đảng Lao Động Việt Nam xác định tại Đại hội II",
    a: [
      "Công nhân và nông dân",
      "Công nhân, nông dân và tư sản dân tộc",
      "Công nhân, nông dân, lao động trí thức",
      "Công nhân, nông dân và tiểu tư sản"
    ],
    c: 2
  },
  {
    id: 174,
    q: "Các giai đoạn của cuộc cách mạng dân tộc dân chủ nhân dân ở Việt Nam được Đảng xác định trong Cương lĩnh thứ ba (1951)",
    a: [
      "Giai đoạn thứ nhất chủ yếu là hoàn thành giải phóng dân tộc",
      "Giai đoạn thứ hai chủ yếu là xoá bỏ di tích phong kiến và nửa phong kiến, triệt để thực hiện người cày có ruộng",
      "Giai đoạn thứ ba là chủ yếu xây dựng cơ sở cho CNXH",
      "Cả ba phương án trên"
    ],
    c: 3
  },
  {
    id: 175,
    q: "Điều lệ mới của Đảng Lao Động đã xác định Đảng đại diện cho quyền lợi của",
    a: [
      "Giai cấp công nhân Việt Nam.",
      "Nhân dân Việt Nam.",
      "Dân tộc Việt Nam.",
      "Giai cấp công nhân và nhân dân lao động Việt Nam"
    ],
    c: 3
  },
  {
  id: 176,
  q: "Nền tảng tư tưởng và kim chỉ nam được Đảng ta xác định tại Đại hội II là:",
  a: [
    "Chủ nghĩa Mác Lênin",
    "Tư tưởng Hồ Chí Minh",
    "Truyền thống dân tộc",
    "Cả ba phương án trên"
  ],
  c: 0
},
  {
    id: 177,
    q: "Đại hội Đảng toàn quốc lần thứ hai đã bầu ai làm Tổng Bí thư đảng Lao Động Việt Nam?",
    a: [
      "Hồ Chí Minh",
      "Trần Phú",
      "Trường Chinh",
      "Lê Duẩn"
    ],
    c: 2
  },
  {
    id: 178,
    q: "Hôm nay buổi sáng tháng ba\nMừng ngày thắng lợi Đảng ta ra đời\nHai câu thơ trên nói đến sự kiện gì",
    a: [
      "Hội nghị thành lập Đảng",
      "Đại hội toàn quốc thống nhất Việt Minh và Liên Việt",
      "Đại hội Đảng toàn quốc lần II",
      "Cả ba phương án đều sai"
    ],
    c: 1
  },
  {
    id: 179,
    q: "Trong tiến trình hình thành và phát triển từ năm 1930-1951, Đảng Cộng sản Việt Nam đã đề ra bao nhiêu Cương lĩnh chính trị và vào thời điểm nào",
    a: [
      "Cương lĩnh năm 1930",
      "2 cương lĩnh vào năm 1930 và 1945",
      "3 cương lĩnh vào năm 1930, 1945, 1951",
      "3 cương lĩnh vào năm 1930, 1951 (năm 1930 ra đời 2 cương lĩnh)"
    ],
    c: 3
  },
  {
    id: 180,
    q: "Trong cương lĩnh thứ ba (2-1951), Đảng ta đã khẳng định nhận thức của mình về con đường cách mạng Việt Nam. Đó là:",
    a: [
      "Con đường cách mạng vô sản",
      "Con đường cách mạng tư sản dân quyền và thổ địa cách mạng",
      "Con đường cách mạng tư sản dân quyền",
      "Con đường cách mạng dân tộc, dân chủ, nhân dân"
    ],
    c: 3
  },
  {
    id: 181,
    q: "Đến năm 1951, Đảng ta đã tiến hành bao nhiêu kỳ Đại hội và trong khoảng thời gian nào?",
    a: [
      "1 kỳ Đại hội vào năm 1930",
      "2 kỳ Đại hội vào tháng 3-1935 và tháng 2-1951",
      "3 kỳ Đại hội vào tháng 2-1930, 3-1935, 2-1951",
      "4 kỳ Đại hội và tháng 2-1930, 10-1930, 3-1935, 2-1951"
    ],
    c: 1
  },
  {
    id: 182,
    q: "Trong Cương lĩnh thứ 3 được thông qua tại Đại Hội Đảng toàn quốc lần thứ hai (2-1951), Đảng ta đã phát triển và hoàn thiện nhận thức về lực lượng cách mạng không chỉ là công nhân và nông dân mà bao gồm nhiều lực lượng dân tộc khác. Các lực lượng đó được gọi chung là:",
    a: [
      "Dân tộc",
      "Nhân dân",
      "Dân chủ",
      "Vô Sản"
    ],
    c: 1
  },
  {
    id: 183,
    q: "Đại hội nào của Đảng đã quyết định tách 3 Đảng bộ Đảng Cộng sản ở 3 nước Việt Nam, Lào và Cam pu chia?",
    a: [
      "Đại hội I",
      "Đại hội II",
      "Đại hội III",
      "Đại hội IV"
    ],
    c: 1
  },
  {
    id: 184,
    q: "Khối liên minh nhân dân 3 nước Việt Nam - Lào và Campuchia được thành lập khi nào?",
    a: [
      "2/1951",
      "3/1951",
      "4/1951",
      "5/1951"
    ],
    c: 1
  },
  {
    id: 185,
    q: "Đại hội Chiến sĩ thi đua và Cán bộ gương mẫu toàn quốc lần thứ nhất họp năm nào?",
    a: [
      "1950",
      "1951",
      "1952",
      "1953"
    ],
    c: 2
  },
  {
    id: 186,
    q: "Đại đoàn quân chủ lực đầu tiên của quân đội nhân dân Việt Nam (đại đoàn 308) được thành lập khi nào?",
    a: [
      "Năm 1945",
      "Năm 1947",
      "Năm 1949",
      "Năm 1950"
    ],
    c: 2
  },
  {
    id: 187,
    q: "Đến cuối năm 1952, với sự phát triển mạnh mẽ, lực lượng vũ trang nhân dân Việt Nam đã hình thành bao nhiêu đại đoàn quân chủ lực",
    a: [
      "2 đại đoàn bộ binh",
      "5 đại đoàn bộ binh và công binh",
      "6 đại đoàn bộ binh và 1 đại đoàn công binh-pháo binh",
      "7 đại đoàn bộ binh"
    ],
    c: 2
  },
  {
  id: 188,
  q: "Đại đoàn quân tiên phong là đại đoàn nào?",
  a: [
    "Đại đoàn 308",
    "Đại đoàn 304",
    "Đại đoàn 316",
    "Đại đoàn 325"
  ],
  c: 0
},
  {
    id: 189,
    q: "3 vùng tự do là hậu phương chủ yếu trong kháng chiến chống Pháp của cách mạng Việt Nam:",
    a: [
      "Việt Bắc, Thanh- Nghệ- Tĩnh, Liên khu V",
      "Việt Bắc, Thanh- Nghệ - Tĩnh,",
      "Liên khu V, Nam Bộ, Thừa Thiên Huế",
      "Liên khu III, Liên khu IV, Liên khu V"
    ],
    c: 0
  },
  {
    id: 190,
    q: "Trong giai đoạn cuối cuộc kháng chiến chống Pháp, nhằm thực hiện nhiệm vụ dân chủ, Đảng ta đã chủ trương thực hiện một số giải pháp. Phương án nào sau đây không phải chủ trương của Đảng ta lúc đó:",
    a: [
      "Cải cách ruộng đất",
      "Triệt để giảm tô, giảm tức",
      "Thí điểm và cải cách ruộng đất",
      "Cả hai phương án B và C"
    ],
    c: 3
  },
  {
    id: 191,
    q: "Nhằm đẩy mạnh thực hiện khẩu hiệu \"người cày có ruộng\", tháng 11-1953, Hội Nghị BCH TW lần thứ V đã thông qua",
    a: [
      "Cương lĩnh ruộng đất",
      "Chỉ thị giảm tô, giảm tức",
      "Chính sách cải cách ruộng đất",
      "Tất cả phương án trên"
    ],
    c: 0
  },
  {
    id: 192,
    q: "ý nghĩa của quá trình thực hiện khẩu hiệu \"người cày có ruộng\" đối với cuộc kháng chiến chống Pháp",
    a: [
      "Huy động mạnh mẽ nguồn lực con người vật chất cho kháng chiến",
      "Thúc đẩy mạnh mẽ tinh thần chiến đấu của quân và dân ta",
      "Chi viện trực tiếp cho chiến dịch Điện Biên Phủ",
      "Tất cả các phương án trên"
    ],
    c: 3
  },
  {
    id: 193,
    q: "Một số hạn chế trong chính sách ruộng đất của Đảng ta từ 1953-1954",
    a: [
      "Không thấy hết được thực tiễn chuyển biến mới của sở hữu ruộng đất trong nông thôn Việt Nam trước 1953",
      "Không kế thừa kinh nghiệm của quá trình cải cách từng phần",
      "Học tập giáo điều kinh nghiệm cải cách ruộng đất của nước ngoài",
      "Tất cả các phương án trên"
    ],
    c: 3
  },
  {
    id: 194,
    q: "Từ những năm 1950 trở đi, đế quốc Mỹ đã can thiệp ngày càng sâu vào cuộc chiến tranh ở Đông Dương. Theo đó đến năm 1954, viện trợ của Mỹ cho Pháp đã tăng bao nhiêu % trong ngân sách chiến tranh ở Đông Dương:",
    a: [
      "50%",
      "60%",
      "73%",
      "80%"
    ],
    c: 3
  },
  {
    id: 195,
    q: "Với thế chủ động trên chiến trường, từ cuối 1950 đến đầu 1953 quân ta đã tổ chức nhiều chiến dịch tiêu diệt, tiêu hao sinh lực địch. Đó là:",
    a: [
      "Chiến dịch Trung Du, chiến dịch Đường 18, chiến dịch Hà Nam Ninh",
      "Chiến dịch Hoà Bình, chiến dịch Tây Bắc, chiến dịch Thượng Lào",
      "Chiến dịch Trung Lào, chiến dịch Tây Nguyên, chiến dịch Điện Biên Phủ",
      "Cả hai phương án A và B"
    ],
    c: 3
  },
  {
    id: 196,
    q: "Đầu năm 1953, nhằm cứu vãn tình thế ngày càng sa lầy và tìm kiếm giải pháp chính trị có \"danh dự\", Pháp và Mỹ đã đưa một viên tướng Pháp sang làm Tổng chỉ huy quân đội Pháp ở Đông Dương và lập kế hoạch quân sự mang tên:",
    a: [
      "Rove",
      "Nava",
      "Pháp - Mỹ",
      "Cả 3 phương án đều sai"
    ],
    c: 1
  },
  {
    id: 197,
    q: "Điểm mạnh của kế hoạch Nava của Pháp Mỹ trên chiến trường Đông Dương",
    a: [
      "Tập trung một đội quân cơ động mạnh nhất và phương tiện chiến tranh nhiều nhất",
      "Phân tán và giải đều lực lượng ra khắp các chiến trường",
      "Tập trung tối đa lực lượng chủ lực ở đồng bằng Bắc Bộ",
      "Tất cả các phương án trên"
    ],
    c: 0
  },
  {
    id: 198,
    q: "Trên cơ sở nắm bắt những chuyển biến của tình hình, BCH TW đã đề ra chủ trương quân sự trong Đông Xuân 1953-1954:",
    a: [
      "Tăng cường chiến tranh du kích ở vùng sau lưng địch nhằm phân tán chủ lực địch",
      "Quân chủ lực của ta tập trung tiêu diệt sinh lực địch ở những vùng chiến lược quan trọng mà địch tương đối yếu, tranh thủ tiêu diệt địch ở những hướng địch đánh ra",
      "Thực hiện phương châm \"tích cực, chủ động, cơ động linh hoạt\"",
      "Tất cả các phương án trên"
    ],
    c: 3
  },
  {
    id: 199,
    q: "Trong chiến cuộc Đông Xuân 1953-1954, những hướng tiến công chiến lược của quân và dân ta:",
    a: [
      "Tiến công ở Lai Châu, Trung Lào",
      "Tiến công ở Hạ Lào và Đông Campuchia",
      "Tiến công ở Tây Nguyên",
      "Cả ba phương án trên"
    ],
    c: 3
  },
  {
  id: 200,
  q: "Ngày 20-11-1953, giữa lúc quân ta tiến quân lên Tây Bắc, Nava với vàng phản tán lực lượng cho quân nhảy dù, tập trung một khối lực mạnh ở",
  a: [
    "Lai Châu",
    "Điện Biên Phủ",
    "Thượng Lào",
    "Hạ Lào và Đông Bắc Campuchia"
  ],
  c: 1
},
  {
    id: 201,
    q: "Nava đã đưa tổng số binh lực lên Điện Biên Phủ lúc cao nhất là 16.200 quân; bố trí thành 3 phân khu, 49 cứ điểm. Mục đích là nhằm biến Điện Biên Phủ thành",
    a: [
      "Một tập đoàn cứ điểm mạnh nhất Đông Dương",
      "Một nơi tập trung đông nhất khối quân chủ lực",
      "Căn cứ quân sự phòng thủ Đông Dương",
      "Tất cả các phương án trên"
    ],
    c: 0
  },
  {
    id: 202,
    q: "Bộ Chính trị đã thông qua phương án mở chiến dịch Điện Biên Phủ vào thời gian nào:",
    a: [
      "20-11-1953",
      "3-12-1953",
      "6-12-1953",
      "25-1-1954"
    ],
    c: 2
  },
  {
    id: 203,
    q: "Ngay sau khi quyết định chọn chiến dịch Điện Biên Phủ là trận quyết chiến, chiến lược, ban đầu TW Đảng đã xác định phương châm:",
    a: [
      "Đánh chắc, tiến chắc",
      "Đánh nhanh, thắng nhanh",
      "Chắc thắng mới đánh, không chắc thắng không đánh",
      "Tất cả các phuong án đều sai"
    ],
    c: 1
  },
  {
    id: 204,
    q: "Ai đã được cử làm Tư lệnh kiêm Bí thư Đảng uỷ chiến dịch Điện Biên Phủ",
    a: [
      "Hoàng Văn Thái",
      "Văn Tiến Dũng",
      "Phạm Văn Đồng",
      "Võ Nguyên Giáp"
    ],
    c: 3
  },
  {
    id: 205,
    q: "Trên cơ sở theo dõi tình hình địch ở Điện Biên Phủ, Đại tướng Võ Nguyên Giáp đã quyết định thay đổi để thực hiện phương châm:",
    a: [
      "Đánh nhanh, thắng nhanh",
      "Chắc thắng mới đánh, không chắc thắng không đánh",
      "Đánh chắc, tiến chắc",
      "Cơ động, chủ động, linh hoạt"
    ],
    c: 2
  },
  {
  id: 206,
  q: "Chiến dịch Điện Biên Phủ đã diễn ra trong ba đợt và trong khoảng thời gian nào:",
  a: [
    "6-12-1953 - 25-1-1954",
    "25-11-1953 - 15-3-1954",
    "15-3-1954 - 21-7-1954",
    "13-3-1954 - 7-5-1954"
  ],
  c: 3
},
  {
    id: 207,
    q: "Chiến dịch lịch sử Điện Biên Phủ diễn ra trong bao nhiêu ngày?",
    a: [
      "54",
      "55",
      "56",
      "59"
    ],
    c: 2
  },
  {
    id: 208,
    q: "Lá cờ \"Quyết chiến, quyết thắng\" trong chiến dịch Điện Biên Phủ được trao cho đơn vị nào?",
    a: [
      "Đại đoàn 308",
      "Đại đoàn 312",
      "Đại đoàn 316",
      "Đại đoàn 320."
    ],
    c: 1
  },
  {
    id: 209,
    q: "Kết thúc chiến dịch Điện Biên Phủ, quân và dân ta giành nhiều thắng lợi to lớn. Kết quả đã:",
    a: [
      "Tiêu diệt và bắt sống 16.200 tên địch, trong đó có viên tổng chỉ huy Đờ Catxtơri",
      "Thu toàn bộ vũ khí, cơ sở vật chất của địch ở Điện Biên Phủ",
      "Thủ tiêu toàn bộ vũ khí, phương tiện chiến tranh và bắt sống toàn bộ quân địch",
      "Cả hai phương án A và B"
    ],
    c: 3
  },
  {
    id: 210,
    q: "Đối với cách mạng Việt Nam, chiến thắng Điện Biên Phủ đã có ý nghĩa hết sức to lớn. Đó là:",
    a: [
      "Thắng lợi lớn nhất của cuộc đọ sức toàn diện và quyết liệt của quân dân Việt Nam với thực dân Pháp",
      "Chiến công đi vào lịch sử dân tộc như một Bạch Đằng, một Chi Lăng hay một Đống Đa trong thế kỷ XX",
      "Thắng lợi này đã giải phóng hoàn toàn miền Bắc, chấm dứt gần 1 thế kỷ ách thống trị của thực dân Pháp, đưa cách mạng Việt Nam chuyển sang xây dựng XHCN và giành độc lập, thống nhất hoàn toàn",
      "Tất cả các phương án trên"
    ],
    c: 3
  },
  {
  id: 211,
  q: "Đối với cách mạng thế giới, thắng lợi của quân và dân ta trong kháng chiến chống Pháp và can thiệp Mỹ, đặc biệt là chiến thắng Điện Biên Phủ đã:",
  a: [
    "Góp phần làm sụp đổ hoàn toàn hệ thống thực dân kiểu cũ trên thế giới",
    "Cổ vũ mạnh mẽ nhân dân các dân tộc bị áp bức trên thế giới vùng lên đấu tranh giành độc lập",
    "Lần đầu tiên trong lịch sử một nước thuộc địa nhỏ yếu đã đánh thắng một nước thực dân hùng mạnh, đó là thắng lợi của các lực lượng hoà bình, dân chủ và XHCN trên toàn thế giới",
    "Cả ba phương án trên"
  ],
  c: 3
},
  {
    id: 212,
    q: "Nêu một số nguyên nhân thắng lợi của cuộc kháng chiến chống thực dân Pháp của Việt Nam:",
    a: [
      "Nhân dân Việt Nam giàu truyền thống yêu nước; được sự lãnh đạo tài tình của Đảng Cộng sản Việt Nam",
      "Có lực lượng đại đoàn kết toàn dân tộc, có chính quyền cách mạng dân chủ nhân dân và hậu phương kháng chiến vững chắc",
      "Sự liên minh chiến đấu của 3 nước Đông Dương, sự giúp đỡ của các nước Trung Quốc, Liên Xô, các nước XHCN",
      "Cả 3 phương án trên"
    ],
    c: 3
  },
  {
    id: 213,
    q: "Ngay sau khi chiến dịch Điện Biên Phủ kết thúc, Hội nghị quốc tế về chấm dứt chiến tranh Đông Dương đã diễn ra tại:",
    a: [
      "Pari",
      "Giơnevơ",
      "Postdam",
      "New York"
    ],
    c: 1
  },
  {
    id: 214,
    q: "Ngày 8-5-1954, Hội nghị Giơnevơ bàn về chấm dứt cuộc chiến tranh ở Đông Dương khai mạc và kết thúc ngày:",
    a: [
      "19-7-1954",
      "20-7-1954",
      "21-7-1954",
      "22-7-1954"
    ],
    c: 2
  },
  {
    id: 215,
    q: "Hiệp định Giơnevơ về chấm dứt chiến tranh, lập lại hoà bình ở Đông Dương đã quy định:",
    a: [
      "Các nước tham dự Hội nghị cam kết tôn trọng các quyền dân tộc cơ bản là độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của nhân dân Việt Nam và nhân dân Lào, Campuchia",
      "Pháp rút quân ra khỏi 3 nước Đông Dương, vĩ tuyến 17 là giới tuyến quân sự tạm thời ở Việt Nam và sẽ tổng tuyển cử thống nhất đất nước vào tháng 7-1956",
      "Pháp tuyên bố công nhận Việt Nam là một nước tự do",
      "Cả hai phương án A và B"
    ],
    c: 3
  },
  {
    id: 216,
    q: "Giải pháp ký kết hiệp định Giơnevơ, lập lại hoà bình ở Đông Dương (21-7-1954) đã thể hiện rằng:",
    a: [
      "Tương quan so sánh lực lượng giữa ta và địch là chênh lệch lớn",
      "Việt Nam là một nước nhỏ, lại phải đương đầu với các nước đế quốc xâm lược lớn trong bối cảnh quan hệ quốc tế vô cùng phức tạp",
      "Cuộc đấu tranh giành độc lập dân tộc và tự do của Việt Nam là lâu dài, gian khổ, quanh co, giành thắng lợi từng bước là vấn đề có tính chất quy luật",
      "Cả hai phương án B và C"
    ],
    c: 3
  },
  {
    id: 217,
    q: "Cuộc kháng chiến chống thực dân Pháp kéo dài bao nhiêu năm?",
    a: [
      "7 năm",
      "8 năm",
      "9 năm",
      "10 năm"
    ],
    c: 2
  },
  {
    id: 218,
    q: "Trong chiến tranh xâm lược Việt Nam (1945 - 1954) quân đội Pháp ở Đông Dương đã mấy lần thay đổi Tổng chỉ huy?",
    a: [
      "7",
      "8",
      "9",
      "10"
    ],
    c: 0
  },
  {
    id: 219,
    q: "Trong chiến tranh xâm lược Việt Nam (1945 - 1954) nước Pháp đã phải thay đổi bao nhiêu cao uỷ Pháp ở Đông Dương?",
    a: [
      "7",
      "8",
      "9",
      "10"
    ],
    c: 0
  },
  {
    id: 220,
    q: "Quân ta vào tiếp quản Thủ đô Hà Nội ngày nào?",
    a: [
      "10-10-1954",
      "10-10-1955",
      "10-10-1956",
      "1-10-1954"
    ],
    c: 0
  },
  {
    id: 221,
    q: "Quân viễn chinh Pháp rút hết khỏi miền Bắc nước ta vào thời gian nào? ở đâu?",
    a: [
      "15/5/1954",
      "16/5/1955",
      "16/5/1956"
    ],
    c: 1
  },
  {
    id: 222,
    q: "Nghị quyết về đường lối cách mạng miền Nam được thông qua tại Hội nghị TƯ, Đại hội nào?",
    a: [
      "Đại hội II",
      "Hội nghị TƯ 15 khoá II",
      "Đại hội III",
      "Hội nghị TƯ 15 khoá III"
    ],
    c: 1
  },
  {
    id: 223,
    q: "Khi nào phong trào công nhân Việt Nam trở thành một phong trào tự giác?",
    a: [
      "Năm 1920.",
      "Năm 1925.",
      "Năm 1929.",
      "Năm 1930."
    ],
    c: 3
  },
  {
    id: 224,
    q: "Hội nghị Ban chấp hành Trung ương Đảng họp tháng 7 năm 1936 chủ trương thành lập mặt trận nào?",
    a: [
      "Mặt trận thống nhất nhân dân phản đế Đông Dương.",
      "Mặt trận nhân dân phản đế Đông Dương.",
      "Mặt trận dân tộc thống nhất phản đế Đông Dương.",
      "Mặt trận phản để đồng minh Đông Dương."
    ],
    c: 0
  },
  {
    id: 225,
    q: "Những khó khăn, thách thức đối với cách mạng Việt Nam sau cách mạng Tháng Tám năm 1945 là gì?",
    a: [
      "Các thế lực đế quốc, phản động bao vây, chống phá.",
      "Kinh tế, tài chính kiệt quệ và nạn đói hoành hành.",
      "Hơn 90% dân số không biết chữ.",
      "Cả ba đáp án trên."
    ],
    c: 3
  },
  {
    id: 226,
    q: "Tiến Quân ca - Bài hát được sử dụng làm Quốc ca Việt Nam do nhạc sĩ nào sáng tác, vào năm nào?",
    a: [
      "Nhạc sĩ Lưu Hữu Phước, năm 1942.",
      "Nhạc sĩ Đỗ Nhuận, năm 1943.",
      "Nhạc sĩ Văn Cao, năm 1944.",
      "Nhạc sĩ Trần Hoàn, năm 1945."
    ],
    c: 2
  },
  {
    id: 227,
    q: "Hiến pháp đầu tiên của Nước Việt Nam Dân chủ Cộng hòa được Quốc hội khóa I thông qua vào ngày, tháng, năm nào?",
    a: [
      "11/11/1945.",
      "02/3/1946.",
      "09/11/1946.",
      "19/12/1947."
    ],
    c: 2
  },
  {
    id: 228,
    q: "Chiến thắng nào đã căn bản đánh bại âm mưu “đánh nhanh, thắng nhanh” của thực dân Pháp?",
    a: [
      "Việt Bắc Thu Đông 1947.",
      "Trung Du 1950.",
      "Biên Giới 1950.",
      "Hà Nam Ninh 1951."
    ],
    c: 0
  },
  {
    id: 229,
    q: "Chiến dịch Điện Biên Phủ diễn ra trong khoảng thời gian nào?",
    a: [
      "06/12/1953 - 25/1/1954.",
      "25/11/1953 - 15/3/1954.",
      "15/3/1954 - 21/7/1954.",
      "13/3/1954 - 07/5/1954."
    ],
    c: 3
  },
  {
    id: 230,
    q: "Sau khi ký Hiệp định sơ bộ (06/3/1946), ngày 09 tháng 3 năm 1946, Ban Thường vụ Trung ương Đảng ra Chỉ thị nào?",
    a: [
      "Chỉ thị Kháng chiến kiến quốc.",
      "Chỉ thị Hòa để tiến.",
      "Chỉ thị Toàn quốc kháng chiến.",
      "Chỉ thị Kháng chiến toàn dân."
    ],
    c: 1
  },
  {
    id: 231,
    q: "“Chỉ thị Toàn dân kháng chiến” của Ban Thường vụ Trung ương Đảng được ban hành ngày, tháng, năm nào?",
    a: [
      "19/12/1945.",
      "12/12/1946.",
      "19/12/1946.",
      "22/12/1946."
    ],
    c: 1
  },
  {
    id: 232,
    q: "Hội nghị nào của Ban chấp hành Trung ương Đảng (khoá II) đã thông qua Nghị quyết Về Đường lối Cách mạng miền Nam?",
    a: [
      "Hội nghị lần thứ 15.",
      "Hội nghị lần thứ 16.",
      "Hội nghị lần thứ 17.",
      "Hội nghị lần thứ 18."
    ],
    c: 0
  },
  {
    id: 233,
    q: "Để đối phó với cuộc tấn công của thực dân Pháp lên căn cứ địa Việt Bắc, ngày 15 tháng 10 năm 1947, Ban thường vụ Trung ương Đảng đã đề ra?",
    a: [
      "Chỉ thị kháng chiến, kiến quốc.",
      "Chỉ thị “Phá tan cuộc tấn công mùa Đông của giặc Pháp”.",
      "Chủ trương tiến công quân Pháp ở vùng sau lưng chúng.",
      "Lời kêu gọi đánh tan cuộc tấn công lên Việt Bắc của thực dân Pháp."
    ],
    c: 1
  },
  {
    id: 234,
    q: "Để thúc đẩy cuộc kháng chiến tiến lên, theo sáng kiến của Chủ tịch Hồ Chí Minh, ngày 27 tháng 3 năm 1948, Ban Thường vụ Trung ương Đảng đã ra Chỉ thị nào?",
    a: [
      "Chống lại âm mưu thâm độc dùng người Việt đánh người Việt.",
      "Phát động phong trào thi đua ái quốc.",
      "Tiến hành chiến tranh du kích trên cả nước.",
      "Cả ba phương án trên."
    ],
    c: 1
  },
  {
    id: 235,
    q: "Tính chất xã hội Việt Nam được nêu trong Chính cương của Đảng Lao Động Việt Nam (2/1951) là gì?",
    a: [
      "Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến.",
      "Dân chủ và dân tộc.",
      "Thuộc địa nửa phong kiến.",
      "Dân tộc và dân chủ mới."
    ],
    c: 0
  },
  {
    id: 236,
    q: "Đường lối tiến hành đồng thời hai chiến lược cách mạng: Cách mạng xã hội chủ nghĩa ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam được xác định tại đại hội nào?",
    a: [
      "Đại hội I, 1935.",
      "Đại hội II, 1951.",
      "Đại hội III, 1960.",
      "Đại hội IV, 1976."
    ],
    c: 2
  },
  {
    id: 237,
    q: "Ban Thường vụ Trung ương Đảng khóa I đã ra “Chỉ thị phát động phong trào thi đua ái quốc” vào thời gian nào?",
    a: [
      "27/3/1946.",
      "23/7/1946.",
      "27/3/1948.",
      "23/7/1948."
    ],
    c: 2
  },
  {
    id: 238,
    q: "Trong lịch sử báo chí Cách mạng Việt Nam, Báo Việt Nam Độc lập là cơ quan ngôn luận của tổ chức nào?",
    a: [
      "Mặt trận dân chủ Đông Dương.",
      "Mặt trận dân tộc thống nhất phản đế Đông Dương.",
      "Mặt trận Việt Minh.",
      "Mặt trận Liên Việt."
    ],
    c: 2
  },
  {
    id: 239,
    q: "Đế quốc Mỹ đã đưa quân viễn chinh trực tiếp tham chiến ở miền Nam Việt Nam vào năm nào?",
    a: [
      "1963.",
      "1964.",
      "1965.",
      "1966."
    ],
    c: 2
  },
  {
    id: 240,
    q: "Hội nghị nào của Đảng đã quyết định mở cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968?",
    a: [
      "Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 13, Khoá III (01/1967).",
      "Hội nghị Bộ Chính trị (5/1967).",
      "Hội nghị Bộ Chính trị (12/1967).",
      "Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 14, Khóa III (01/1968)."
    ],
    c: 3
  },
  {
    id: 241,
    q: "Hội nghị nào của Đảng ra quyết định lịch sử: Giải phóng hoàn toàn miền Nam?",
    a: [
      "Hội nghị Trung ương Đảng lần thứ 21, Khoá III (7/1973).",
      "Hội nghị Bộ Chính trị (10/1974).",
      "Hội nghị Trung ương Đảng lần thứ 23, Khoá III (12/1974).",
      "Hội nghị Bộ Chính trị (01/1975)."
    ],
    c: 3
  },
  {
    id: 242,
    q: "Đại hội đại biểu toàn quốc lần thứ II của Đảng đã thông qua một văn kiện mang tính chất cương lĩnh. Đó là:",
    a: [
      "Cương lĩnh Cách mạng Việt Nam.",
      "Chính Cương của Đảng Lao động Việt Nam.",
      "Luận cương về Cách mạng Việt Nam.",
      "Cương lĩnh của Đảng Lao động Việt Nam."
    ],
    c: 1
  },
  {
    id: 243,
    q: "Hội nghị lần thứ 11 của Ban Chấp hành Quốc tế Cộng sản đã quyết định công nhận Đảng ta là một chi bộ độc lập thuộc Quốc tế Cộng sản vào thời gian nào?",
    a: [
      "10/4/1930.",
      "11/11/1930.",
      "10/11/1931.",
      "11/4/1931."
    ],
    c: 3
  },
  {
    id: 244,
    q: "Ban Chấp hành lãnh đạo của Đảng ở nước ngoài (Ban Chỉ huy Hải ngoại) được thành lập vào năm nào, Bí thư là ai?",
    a: [
      "Năm 1933, Hà Huy Tập.",
      "Năm 1934, Lê Hồng Phong.",
      "Năm 1935, Nguyễn Văn Cừ.",
      "Năm 1936, Trường Chinh."
    ],
    c: 1
  },
  {
    id: 245,
    q: "Đại hội lần thứ nhất của Đảng ta họp ở đâu? Có bao nhiêu đại biểu tham dự?",
    a: [
      "Hương Cảng, Trung Quốc; 10 đại biểu.",
      "Quảng Tây, Trung Quốc; 11 đại biểu.",
      "Quảng Đông, Trung Quốc; 12 đại biểu.",
      "Ma Cao, Trung Quốc, 13 đại biểu."
    ],
    c: 3
  },
  {
    id: 246,
    q: "Hội nghị Trung ương lần thứ 6, Khóa I của Đảng diễn ra ở đâu? Vào thời gian nào?",
    a: [
      "Tháng 10 năm 1939, Tuyên Quang.",
      "Tháng 11 năm 1939, Bà Điểm (Hóc Môn, Gia Định).",
      "Tháng 11 năm 1940, Đình Bảng (Từ Sơn, Bắc Ninh).",
      "Tháng 5 năm 1941, Pắc Bó (Hà Quảng, Cao Bằng)."
    ],
    c: 1
  },
  {
    id: 247,
    q: "Hội nghị Trung ương lần thứ 8 của Đảng họp vào thời gian nào? Ở đâu?",
    a: [
      "Tháng 5 năm 1940; Định Hóa, Thái Nguyên.",
      "Tháng 11 năm 1949; Bà Điểm, Hóc Môn, Gia Định.",
      "Tháng 11 năm 1941; Đình Bảng, Từ Sơn, Bắc Ninh.",
      "Tháng 5 năm 1941; Pắc Bó, Hà Quảng, Cao Bằng."
    ],
    c: 3
  },
  {
    id: 248,
    q: "Đại hội IV của Đảng (12/1976) đã đề ra đường lối gì?",
    a: [
      "Đường lối cách mạng XHCN ở nước ta.",
      "Đường lối chung cách mạng XHCN ở nước ta.",
      "Đường lối công nghiệp hóa XHCN ở nước ta.",
      "Đường lối công nghiệp hóa, hiện đại hóa ở nước ta."
    ],
    c: 1
  },
  {
    id: 249,
    q: "Đại hội IV xác định điều kiện nào quyết định trước tiên sự toàn thắng của chủ nghĩa xã hội ở nước ta?",
    a: [
      "Nắm vững chuyên chính vô sản, phát huy quyền làm chủ tập thể của nhân dân lao động.",
      "Nền sản xuất lớn xã hội chủ nghĩa.",
      "Nền văn hóa mới xã hội chủ nghĩa.",
      "Con người mới xã hội chủ nghĩa."
    ],
    c: 0
  },
  {
    id: 250,
    q: "Tư tưởng nổi bật của Nghị quyết Trung ương 6 khóa IV (8/1979) là gì?",
    a: [
      "Làm cho sản xuất bung ra.",
      "Cải tiến công tác phân phối lưu thông.",
      "Khoán sản phẩm đến nhóm và người lao động trong HTX nông nghiệp.",
      "Quyền chủ động sản xuất kinh doanh của các xí nghiệp quốc doanh."
    ],
    c: 0
  },
  {
    id: 251,
    q: "Chỉ thị 100 của Ban Bí thư (13/1/1981) quyết định vấn đề gì?",
    a: [
      "Làm cho sản xuất bung ra.",
      "Cải tiến công tác phân phối lưu thông.",
      "Khoán sản phẩm đến nhóm và người lao động trong HTX nông nghiệp.",
      "Quyền chủ động sản xuất kinh doanh của các xí nghiệp quốc doanh."
    ],
    c: 2
  },
  {
    id: 252,
    q: "Đại hội V xác định mặt trận hàng đầu của nền kinh tế nước ta trong chặng đường đầu tiên thời kỳ quá độ là gì?",
    a: [
      "Công nghiệp.",
      "Công nghiệp nặng.",
      "Thủ công nghiệp.",
      "Nông nghiệp."
    ],
    c: 3
  },
  {
    id: 31,
    q: "Hội nghị nào của BCHTƯ khóa V đánh dấu bước đột phá xóa bỏ cơ chế quản lý quan liêu bao cấp ở nước ta?",
    a: [
      "Hội nghị Trung ương 6 khóa V (7/1984).",
      "Hội nghị Trung ương 7 khóa V (12/1984).",
      "Hội nghị Trung ương 8 khóa V (6/1985).",
      "Hội nghị Trung ương 9 khóa V (12/1985)."
    ],
    c: 2
  },
  {
    id: 253,
    q: "Đại hội VI xác định nhiệm vụ chủ yếu của chặng đường đầu tiên của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta là gì?",
    a: [
      "Xây dựng những tiền đề cần thiết cho công nghiệp hóa xã hội chủ nghĩa.",
      "Công nghiệp hóa xã hội chủ nghĩa.",
      "Phát triển công nghiệp nặng.",
      "Phát triển nền nông nghiệp sản xuất lớn xã hội chủ nghĩa."
    ],
    c: 0
  },
  {
    id: 254,
    q: "Thực chất của quan điểm: Đổi mới phải có hình thức, bước đi và cách làm phù hợp do Đại hội VI xác định là gì?",
    a: [
      "Đổi mới trên các lĩnh vực như nhau.",
      "Tập trung sức làm tốt đổi mới kinh tế.",
      "Tập trung sức đổi mới chính trị.",
      "Giải quyết đúng đắn mối quan hệ đổi mới trên các lĩnh vực."
    ],
    c: 3
  },
  {
    id: 255,
    q: "Đại hội VI xác định lĩnh vực nào là trọng tâm trong quá trình đổi mới?",
    a: [
      "Chính trị.",
      "Kinh tế.",
      "Văn hóa.",
      "Quốc phòng, an ninh."
    ],
    c: 1
  },
  {
    id: 256,
    q: "Nội dung chủ trương đổi mới kinh tế của Đại hội VI bao gồm những vấn đề gì?",
    a: [
      "Đổi mới cơ cấu kinh tế.",
      "Đổi mới trong cải tạo và xây dựng QHSX.",
      "Đổi mới cơ chế quản lý kinh tế",
      "Cả 3 phương án trên"
    ],
    c: 3
  },
  {
    id: 257,
    q: "Đại hội nào, lần đầu tiên Đảng ta quyết định lấy chủ nghĩa Mác- Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng của mình?",
    a: [
      "Đại hội lần thứ VI.",
      "Đại hội lần thứ VII.",
      "Đại hội lần thứ VIII.",
      "Đại hội lần thứ IX."
    ],
    c: 1
  },
  {
    id: 258,
    q: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội được thông qua ở Đại hội mấy của Đảng, Đại hội nào bổ sung phát triển?",
    a: [
      "Thông qua ở Đại hội VI, bổ sung, phát triển ở Đại hội VII.",
      "Thông qua ở Đại hội VII, bổ sung, phát triển ở Đại hội VIII.",
      "Thông qua ở Đại hội VIII, bổ sung, phát triển ở Đại hội X.",
      "Thông qua ở Đại hội VII, bổ sung, phát triển ở Đại hội XI."
    ],
    c: 3
  },
  {
    id: 259,
    q: "Lần đầu tiên Đảng ta xác định “tư tưởng chỉ đạo” công tác đối ngoại tại Hội nghị lần thứ mấy BCHTW khoá VII ?",
    a: [
      "Hội nghị lần thứ ba BCHTW khóa VII (6/1992).",
      "Hội nghị lần thứ bốn BCHTW khóa VII (1/1993).",
      "Hội nghị lần thứ năm BCHTW khóa VII (7/1993).",
      "Hội nghị lần thứ sáu BCHTW khóa VII (12/1993)."
    ],
    c: 0
  },
  {
    id: 260,
    q: "Đảng ta đưa ra khái niệm công nghiệp hóa, hiện đại hóa ở hội nghị trung ương nào?",
    a: [
      "Hội nghị Trung ương bảy khóa VII.",
      "Hội nghị Trung ương tám khóa VII.",
      "Hội nghị Trung ương chín khóa VII.",
      "Hội nghị Trung ương mười khóa VII."
    ],
    c: 0
  },
  {
    id: 261,
    q: "Quan điểm: Cùng với giáo dục - đào tạo, khoa học và công nghệ là quốc sách hàng đầu, do HNTW nào Khoá VIII của Đảng xác định?",
    a: [
      "HNTW 2 khoá VIII (12/1996).",
      "HNTW 3 khoá VIII (6/1997).",
      "HNTW 4 khoá VIII (12/1997).",
      "HNTW 5 khoá VIII (7/1998)"
    ],
    c: 0
  },
  {
    id: 262,
    q: "Đại hội lần thứ mấy của Đảng chủ trương sự nghiệp công nghiệp hóa, hiện đại hóa ở nước ta phải gắn với phát triển kinh tế tri thức?",
    a: [
      "Đại hội lần thứ VIII.",
      "Đại hội lần thứ IX.",
      "Đại hội lần thứ X.",
      "Đại hội lần thứ XI"
    ],
    c: 2
  }
];