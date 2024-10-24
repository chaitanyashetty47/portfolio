import { Card, CardContent } from "@/components/ui/card"
import { FileText, Globe} from "lucide-react"
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Navigation from "@/Navigation"
import { useState } from 'react'
import { motion } from 'framer-motion'
import article from "./assets/article.png";
import turf from "./assets/turflogo.jpg";
import turfbg from "./assets/turfbg.png";
import bloglogo from "./assets/bloglogo.png";
import react from "./assets/react.svg";
import next from "./assets/next.png";
import express from "./assets/express.svg";
import typescript from "./assets/typescript.svg";
import tailwind from "./assets/tailwind.svg";
import postgres from "./assets/postgresql.svg";
import gmail from "./assets/gmail.png";
import discord from "./assets/discord.png";

import elearning from "./assets/learning.jpg"
import courshala from "./assets/courshala.jpg"


interface ProjectCardProps {
  title: string
  description: string
  logoSrc: string
  thumbnailSrc: string
  link: string
}

export function ProjectCard({ title, description, logoSrc, thumbnailSrc, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card 
        className="w-72 h-96 overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0 h-full relative">
          <motion.div
            className="w-full h-full"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={thumbnailSrc}
              alt={`${title} thumbnail`}
              style={{ width: '100%', height: '100%', objectFit: "contain" }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <div className="flex items-center mb-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden mr-3">
                <img
                  src={logoSrc}
                  alt={`${title} logo`}
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p className="text-sm opacity-80">{description}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">chaiCoder</h1>
        <Navigation/>
        <div className="flex space-x-3">
          <a href="https://x.com/thechaicoder" target="_blank" rel="noopener noreferrer"><FaTwitter className="h-6 w-6"/></a>
          <a href="https://www.linkedin.com/in/chaitanya-shetty-3a894a206" target="_blank" rel="noopener noreferrer"><FaLinkedin className="h-6 w-6" /></a>
          <a href="https://github.com/chaitanyashetty47" target="_blank" rel="noopener noreferrer"><FaGithub className="h-6 w-6"/></a>
        </div>
      </header>

      <main className="container mx-auto ">
      <motion.div 
          className="w-full text-center py-20 bg-gradient-to-b from-gray-900 via-orange-950 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-100 to-orange-200 text-transparent bg-clip-text">
                Transforming Ideas
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text">
                into Digital Reality
              </span>
            </h2>
            <p className="text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
                From crafting stunning landing pages to developing robust web applications, 
                I bring your ideas to life<br/> <span className="font-semibold text-orange-300"> in WEEKS, not MONTHS</span>
          </p>

          </div>
        </motion.div>

      

        <section id ="projects" className="mx-auto px-4 py-12">
          <h3 className="text-3xl font-bold text-center mb-10">Some Of My Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* lg:grid-cols-3 */}

          <ProjectCard
              title="E-Learning Website"
              description="An application where can choose to enroll as either a USER or a TUTOR. As a USER, they can enroll in various courses, while TUTORS have the ability to upload instructional videos and manage course content."
              logoSrc={elearning}
              thumbnailSrc={courshala}
              link="https://strentor-frontend.vercel.app/"
            />

          <ProjectCard
              title="Turf Booking"
              description="An application where you can book turfs for various sports and have a good time with your friends"
              logoSrc={turf}
              thumbnailSrc={turfbg}
              link="https://repro.thechaicoder.com/"
            />

          <ProjectCard
              title="Blogs"
              description="An application where you can write articles and share your thoughts with the world and engage"
              logoSrc={article}
              thumbnailSrc={bloglogo}
              link="https://blogs.thechaicoder.com/"
            />
            
            
          </div>
        </section>

        <section id="tech" className="text-center mt-10">
          <h3 className="text-3xl font-bold mb-10">Tech Stack</h3>
          <div className="flex justify-center space-x-20">
            <img src={react} alt="React" width={48} height={48} />
            <img src={next} alt="Next" width={48} height={48} />
            <img src={express} alt="Express" width={48} height={48} />
            <img src={typescript} alt="Typescript" width={48} height={48} />
            <img src={tailwind} alt="Tailwind" width={48} height={48} />
            <img src={postgres} alt="Postgres" width={48} height={48} />
          </div>
        </section>

        
        <section id ="services" className="mt-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-10">Services</h3>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FileText className="w-12 h-12 text-orange-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-orange-500">Landing Page</h4>
              <p className="text-gray-300">
                Get a high-converting landing page delivered with precise and concise copy writing in 14-21 days
              </p>
            </div>
          </div>
          <div className="flex-1 flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Globe className="w-12 h-12 text-orange-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-orange-500">Websites</h4>
              <p className="text-gray-300">
                Get your MVP ready to ship within 4-5 weeks. Also deploy it at a domain of your choice.
              </p>
            </div>
          </div>
        </div>
        </section>

        <section id="contact" className="text-center py-20">
          <h3 className="text-3xl font-bold mb-10">Contact Me</h3>
          <div className="flex justify-center space-x-8">
            <a href="mailto:chaitanyashetty47@gmail.com"><img src={gmail} alt="Gmail" width={48} height={48} /></a>
            <a href="https://discord.com/users/chaicoder47" target="_blank" rel="noopener noreferrer">
               <img src={discord} alt="Discord" width={48} height={48} />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}