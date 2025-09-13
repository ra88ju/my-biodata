import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      title: "AI Chat Assistant",
      description: "Advanced AI-powered chat assistant with natural language processing and context awareness.",
      image: "/projects/ai-chat.png",
      tags: ["Python", "TensorFlow", "OpenAI"]
    },
    {
      title: "AI Image Generator",
      description: "Stable Diffusion-based image generation platform with advanced customization options.",
      image: "/projects/ai-image.png",
      tags: ["React", "Python", "Stable Diffusion"]
    },
    {
      title: "AI Video Editor",
      description: "Automated video editing platform with AI-powered scene detection and enhancement.",
      image: "/projects/ai-video.png",
      tags: ["Python", "OpenCV", "TensorFlow"]
    }
  ]);
} 