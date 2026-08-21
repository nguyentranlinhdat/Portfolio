import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "hoo-interior",
    title: {
      en: "HOO Interior E-commerce",
      vi: "HOO Interior E-commerce",
    },
    description: {
      en: "AI-powered interior e-commerce platform featuring real-time content updates and an AI shopping assistant. Built with Next.js, TypeScript, Zustand, and Tailwind CSS, with Sanity CMS, Clerk authentication, and Stripe payment integration.",
      vi: "Nền tảng thương mại điện tử nội thất AI với cập nhật nội dung thời gian thực và trợ lý mua hàng AI. Xây dựng bằng Next.js, TypeScript, Zustand và Tailwind CSS, tích hợp Sanity CMS, xác thực Clerk và thanh toán Stripe.",
    },
    image: "/images/project-1.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Sanity",
      "Clerk",
      "Stripe",
    ],
    githubUrl: "https://github.com/nguyentranlinhdat/hoo-interior-ecommerce",
    category: ["nextjs", "typescript", "ecommerce"],
  },
  {
    id: "l2-keyboards",
    title: {
      en: "L2 Keyboards E-commerce",
      vi: "L2 Keyboards E-commerce",
    },
    description: {
      en: "Modern e-commerce website for mechanical keyboards with interactive 3D experiences using Three.js and React Three Fiber. Built with Next.js, TypeScript, and GSAP animations, with Prismic CMS and Stripe payment integration.",
      vi: "Website thương mại điện tử bàn phím cơ hiện đại với trải nghiệm 3D tương tác sử dụng Three.js và React Three Fiber. Xây dựng bằng Next.js, TypeScript và GSAP animations, tích hợp Prismic CMS và thanh toán Stripe.",
    },
    image: "/images/project-2.webp",
    tags: [
      "Next.js",
      "Three.js",
      "React",
      "TypeScript",
      "GSAP",
      "Prismic CMS",
      "Stripe",
    ],
    githubUrl:
      "https://github.com/nguyentranlinhdat/-L2studio-Keyboards-Ecommerce-Website",
    category: ["nextjs", "react", "typescript", "ecommerce", "3d"],
  },
  {
    id: "ai-voice-app",
    title: {
      en: "AI Voice App",
      vi: "AI Voice App",
    },
    description: {
      en: "Full-stack AI Voice Studio SaaS platform for AI-powered text-to-speech generation, real-time audio playback, and project management. The frontend uses Next.js, TypeScript, and Tailwind CSS, with a Python backend running on Modal for serverless AI voice processing.",
      vi: "Nền tảng SaaS AI Voice Studio full-stack cho tạo giọng nói AI từ văn bản, phát âm thanh thời gian thực và quản lý dự án. Frontend sử dụng Next.js, TypeScript và Tailwind CSS, với backend Python chạy trên Modal cho xử lý giọng nói AI serverless.",
    },
    image: "/images/project-3.webp",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Prisma",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/nguyentranlinhdat/ai-voice-app",
    demoUrl: "https://ai-voice-app-one.vercel.app/",
    category: ["nextjs", "react", "typescript", "ai"],
  },
];
