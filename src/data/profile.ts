import type { Profile, Education, WorkExperience } from "@/types";

export const profile: Profile = {
  name: {
    en: "Nguyen Tran Linh Dat",
    vi: "Nguyễn Trần Lĩnh Đạt",
  },
  role: {
    en: "Frontend Developer Intern",
    vi: "Thực tập sinh Frontend ",
  },
  email: "datlinhnt.work@gmail.com",
  phone: "0363439477",
  dob: "20/10/2002",
  gender: {
    en: "Male",
    vi: "Nam",
  },
  location: {
    en: "An Lac, Binh Tan, Ho Chi Minh City",
    vi: "An Lạc, Bình Tân, TP. Hồ Chí Minh",
  },
  avatar: "/images/avatar.png",
  intro: {
    en: "Frontend Developer Intern passionate about building modern, responsive, and user-focused web applications.",
    vi: "Lập trình viên Frontend Intern đam mê xây dựng các ứng dụng web hiện đại, responsive và tập trung vào trải nghiệm người dùng.",
  },
  careerObjective: {
    en: "Short term: Try to study and complete the course to improve your knowledge and skills to create products that can be applied in practice. Practice skills to handle work efficiently, accurately, and quickly.\n\nLong-term: Becoming a bachelor with a lot of experience, able to serve the job, and bring benefits to the company. Have the opportunity to develop and become a senior employee at the company.",
    vi: "Mục tiêu ngắn hạn: Tiếp tục học hỏi để nâng cao kiến thức, kỹ năng, từ đó tạo ra các sản phẩm có tính ứng dụng thực tế. Rèn luyện các kỹ năng giải quyết công việc một cách hiệu quả, chính xác và nhanh chóng.\n\nMục tiêu dài hạn: Trở thành một cử nhân giàu kinh nghiệm, đáp ứng tốt yêu cầu công việc và đem lại nhiều giá trị cho công ty. Có cơ hội phát triển bản thân và thăng tiến thành nhân sự cấp cao tại doanh nghiệp.",
  },
};

export const education: Education[] = [
  {
    institution: {
      en: "VNUHCM – University of Information Technology (UIT)",
      vi: "ĐHQG TP.HCM – Trường Đại học Công nghệ Thông tin (UIT)",
    },
    degree: {
      en: "Japanese-oriented Information Technology",
      vi: "Công nghệ thông tin định hướng Nhật Bản",
    },
    startDate: "09/2020",
    endDate: "11/2025",
    gpa: "8.2 / 10",
  },
];

export const workExperience: WorkExperience[] = [
  {
    company: "VNNext",
    position: {
      en: "Frontend Developer",
      vi: "Lập trình viên Frontend",
    },
    startDate: "06/2024",
    endDate: "08/2024",
    description: {
      en: "Developed and maintained a piano e-commerce website using WordPress.",
      vi: "Phát triển và duy trì website thương mại điện tử đàn piano sử dụng WordPress.",
    },
    highlights: [
      {
        en: "Designed and improved website interfaces",
        vi: "Thiết kế và cải thiện giao diện website",
      },
      {
        en: "Managed and updated piano product information",
        vi: "Quản lý và cập nhật thông tin sản phẩm đàn piano",
      },
      {
        en: "Maintained website functionality and ensured smooth operation",
        vi: "Duy trì chức năng website và đảm bảo hoạt động ổn định",
      },
      {
        en: "Gained practical experience in WordPress, UI/UX, content management, website maintenance, and e-commerce operations",
        vi: "Đạt được kinh nghiệm thực tế về WordPress, UI/UX, quản lý nội dung, bảo trì website và vận hành thương mại điện tử",
      },
    ],
  },
];
