"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, User, Key, BookOpen } from "lucide-react";

const projects = [
  /*
  {
    title: "SIDGEC",
    description:
      "A clinical record management system designed for psychology practices to digitize and organize patient information. It includes modules for managing clinical records, appointments, clinical notes, and user roles. Built with scalability and clean architecture principles in mind.",
    image: "/SIDGEC.png",
    tags: ["Angular", "Node.js", "MySQL", "PrismaORM", "AWS", "Jest"],
    demoUrl: "https://sidgec-demo.example.com",
    credentials: [
      {
        role: "Therapist",
        user: "therapistdemo@gmail.com",
        password: "therapistdemo",
      },
    ],
    roles: ["Therapist", "Admin"],
    instructions: `
  ## Getting Started
  1. Log in as **Therapist** using the credentials:  
     **user:** therapistdemo@gmail.com  
     **Password:** therapistdemo  
     You can manage patients, appointments, and clinical notes.

  ## Key Features
  - Patient and clinical record management (CRUD)
  - Appointment scheduling system
  - Clinical notes linked to patient records
  - User and role management
  - Scalable architecture with Prisma ORM
  - Automated testing with Jest
  - Initial version deployed on AWS EC2
  - Current version built with Clean Architecture and modern Angular 20
  `,
  },
  {
    title: "SIGR",
    description:
      "A web platform built for gated communities and condominiums to manage residents, guards, and administrators. It enables payment tracking, visitor access management, and transparent communication between the committee and residents.",
    image: "/SIGR.png",
    tags: ["Angular", "Node.js", "MySQL", "Socket.io", "AWS"],
    demoUrl: "https://sigr-demo.example.com",
    credentials: [
      {
        role: "Admin",
        user: "admin@gmail.com",
        password: "adminadmin",
      },
      {
        role: "Resident",
        user: "residentdemo@gmail.com",
        password: "residentdemo",
      },
      {
        role: "Guard",
        user: "guarddemo@gmail.com",
        password: "guarddemo",
      },
    ],
    roles: ["Admin", "Resident", "Guard"],
    instructions: `
  ## Getting Started
  1. Log in as **Admin** using the credentials above to manage users, payments, and announcements.
  2. Log in as **Resident** to view payments, schedule visits, and manage your household.
  3. Log in as **Guard** to verify visits using temporary access codes.

  ## Key Features
  - Role-based dashboards for Admin, Resident, and Guard
  - Visit management with expiring access codes
  - Payments and financial transparency reports
  - Notifications and real-time communication via WebSockets
  - Multi-module architecture (initially microservices, optimized into a monolith)
  - Deployed on AWS EC2 instances with manual setup and configuration
  `,
  },
  */
  {
    title: "SIDGDEP",
    description:
      "A complete management system for sports academies and gyms, allowing administrators to manage memberships, payments, merchandise, events, and instructor profit sharing. Designed to automate business operations for sports-related enterprises.",
    image: "/SIDGDEP.png",
    tags: ["Angular", "Node.js", "MySQL", "Socket.io", "WhatsApp Web JS"],
    demoUrl: "https://academies-demo-frontned.onrender.com",
    credentials: [
      {
        role: "Adminstrador",
        user: "admin@gmail.com",
        password: "adminadmin",
      },
      {
        role: "Agente",
        user: "agente@gmail.com",
        password: "agentedemo",
      },
    ],
    roles: ["Admin", "Instructor"],
    instructions: `
  ## Getting Started
  1. Log in as **Admin** to manage memberships, payments, and product sales.
  2. Log in as **Instructor** to view assigned classes and commissions.

  ## Key Features
  - Membership and payment management
  - Merchandise sales with POS module
  - Event and class creation with instructor percentage configuration
  - Promotion and discount management
  - Reports: sales by class, cash flow, most profitable classes
  - WhatsApp Web integration to send receipts and payment reminders
  - Real-time communication using Socket.io
  `,
  },
  {
    title: "BizFlow ERP",
    description:
      "A lightweight ERP system developed for a local grocery business to manage sales, inventory, and real-time pricing updates. It includes a POS integrated with a physical scale for automatic weight capture and real-time notifications between users.",
    image: "/BizFlow.png",
    tags: ["Angular", "Node.js", "MySQL", "Socket.io", "Railway"],
    demoUrl: "https://bizflow-frontend.onrender.com",
    credentials: [
      {
        role: "Admin",
        user: "1111111111",
        password: "adminadmin",
      },
      {
        role: "Seller",
        user: "1234567890",
        password: "vendedordemo",
      },
    ],
    roles: ["Admin", "Seller"],
    instructions: `
  ## Getting Started
  1. Log in as **Admin** to manage products, pricing, and user roles.
  2. Log in as **Seller** to perform sales and use the scale integration for weight-based products.

  ## Key Features
  - Real-time notifications using Socket.io
  - POS integrated with a physical scale via WebSockets
  - Barcode scanning and PDF label generation
  - Inventory and price management
  - Role-based permissions (Admin, Seller)
  - Built for accessibility and ease of use
  - Deployed using Railway for fast and cost-efficient hosting
  `,
  },
  {
    title: "SIDGDER",
    description:
      "A full-stack web system developed to manage restaurant operations, including sales, inventory, digital menus with QR codes, payroll, and financial reports. It features role-based access (Admin, Manager, Waiter) and a POS optimized for tablets to streamline day-to-day operations.",
    image: "/SIDGDER.png",
    tags: ["Angular", "Node.js", "MySQL", "AWS", "Railway"],
    demoUrl: "https://sdigder-frontend-example.onrender.com",
    credentials: [
      {
        role: "Admin",
        user: "admin@gmail.com",
        password: "adminadmin",
      },
      {
        role: "Waiter",
        user: "meserodemo@gmail.com",
        password: "meserodemo",
      },
    ],
    roles: ["Admin", "Manager", "Waiter"],
    instructions: `
  ## Getting Started
  1. Log in as **Admin** using the credentials:  
     **user:** admin@gmail.com  
     **Password:** adminadmin  
     The Admin role has full access to all modules and operations **except the Point of Sale (POS)** module.

  2. To access the POS module:
     - Go to **Cash Registers → Open Cash Register**
     - Select the user **meserodemo** and open their register.
     - Then log in as **Waiter** using the credentials:  
       **user:** meserodemo@gmail.com  
       **Password:** meserodemo  
       The Waiter role only has access to **Orders** and **Point of Sale** modules.

  ## Key Features
  - Role-based authentication (Admin, Manager, Waiter)
  - Point of Sale optimized for tablets
  - Cash register management and order tracking
  - Product and inventory control
  - Digital menu with public QR code access
  - Sales reports by dish, date, and user
  - Income and expense management
  - Payroll and service payment management
  - Exportable financial summaries (PDF/Excel)
  - Initially deployed on AWS (EC2, RDS, S3), later migrated to Railway for cost optimization
  `,
  },
  {
    title: "NeuroFile",
    description:
      "A clinical record management system for psychology and neuropsychology practices. It digitizes patient expedients (records) with structured fields for incident details, treatment demand, therapeutic focus, family mapping, and diagnostic impressions. It supports voice-based workflows: record conversations, transcribe audio via workers, and map transcriptions into expedient drafts. Includes roles for Admin and Therapist, appointment scheduling, clinical notes, symptoms, and therapeutic modalities.",
    image: "/NeuroFileLogo.png",
    tags: ["Node.js", "MySQL", "Prisma", "AWS", "Railway"],
    demoUrl: "https://neurofile-frontend-qa.up.railway.app",
    credentials: [
      {
        role: "Admin",
        user: "maria.garcia@neurofile.com",
        password: "NeuroFile2025",
      },
    ],
    roles: ["Admin", "Therapist"],
    instructions: `
  ## Getting Started
  1. Log in as **Admin** using the credentials:  
     **user:** maria.garcia@neurofile.com  
     **Password:** NeuroFile2025  
     The Admin role has full access to users, patients, appointments, and clinical records.

  ## Key Features
  - Role-based authentication (Admin, Therapist)
  - Patient and clinical record (expedient) management with structured clinical fields
  - Appointment scheduling and clinical notes linked to records
  - Symptoms, therapeutic modalities, and diagnostic impressions per record
  - Voice-to-expedient flow: record conversations, transcribe audio, and map to expedient drafts
  - Backend workers for transcription and processing (AWS S3, SQS)
  - Deployed on Railway (frontend QA environment)
  `,
  },
  {
    title: "Restify",
    description:
      "Serverless migration of a restaurant management system (from SIDGDER) to modern AWS architecture. It includes Stripe payments, real-time notifications via WebSockets, async processing with SQS, and event-driven flows with EventBridge. Built with Clean Architecture and SOLID principles, type-safe with TypeScript and Prisma. The frontend is a React app with Vite, TanStack Query, Zustand, Tailwind CSS, and Shadcn/ui.",
    image: "/RestifyLogo.png",
    tags: ["React", "TypeScript", "Node.js", "AWS Lambda", "Prisma", "Stripe"],
    demoUrl: "https://restify-qa.up.railway.app",
    credentials: [
      {
        role: "Admin",
        user: "admin@restify.com",
        password: "Restify123!",
      },
      {
        role: "Manager",
        user: "manager@restify.com",
        password: "Restify123!",
      },
      {
        role: "Waiter",
        user: "waiter@restify.com",
        password: "Restify123!",
      },

    ],
    roles: ["Admin", "Manager", "Waiter", "Chef"],
    instructions: `
  ## Getting Started
  1. Log in as **Admin** using the credentials:  
     **user:** admin@restify.com  
     **Password:** Restify123!  
     Full access to all modules.

  2. Other roles (same password **Restify123!**):  
     **Manager:** manager@restify.com  
     **Waiter:** waiter@restify.com  
     **Chef:** chef@restify.com  

  ## Key Features
  - Serverless architecture with AWS Lambda
  - Stripe payment integration and real-time WebSocket notifications
  - Async processing with SQS and event-driven design with EventBridge
  - Clean Architecture, SOLID, TypeScript, and Prisma
  - Restaurant operations: orders, tables, menu, inventory, expenses
  - Frontend: React 18, Vite, TanStack Query, Zustand, Tailwind, Shadcn/ui
  `,
  },
  {
    title: "GYF System",
    description:
      "A document and student management system for educational institutions. It centralizes documents (birth certificates, CURP, report cards, medical records, proof of address) by category, manages students and their grades, and links parents to students. Includes user and role management (Admin, Teacher, Parent), events, notifications, and company settings. Built with React, TypeScript, Vite, and Tailwind on the frontend; Express, TypeORM, MySQL, and S3-compatible storage on the backend.",
    image: "/GYFSystemLogo.png",
    tags: ["React", "TypeScript", "Node.js", "Express", "TypeORM", "MySQL", "Railway"],
    demoUrl: "https://gyfsystem-frontend-qa.up.railway.app",
    credentials: [
      {
        role: "Admin",
        user: "admin@filesmanager.com",
        password: "password123",
      },
      {
        role: "Teacher (Editor)",
        user: "maria@filesmanager.com",
        password: "password123",
      },
      {
        role: "Parent (Viewer)",
        user: "carlos@filesmanager.com",
        password: "password123",
      },
    ],
    roles: ["Admin", "Editor", "Viewer"],
    instructions: `
  ## Getting Started
  1. Log in as **Admin** using the credentials:  
     **user:** admin@filesmanager.com  
     **Password:** password123  
     Full access to users, students, documents, events, notifications, and company settings.

  2. Log in as **Teacher (Editor):**  
     **user:** maria@filesmanager.com  
     **Password:** password123  

  3. Log in as **Parent (Viewer):**  
     **user:** carlos@filesmanager.com or ana@filesmanager.com  
     **Password:** password123  
     Parents are linked to students and have viewer access.

  ## Key Features
  - Role-based access (Administrator, Teacher, Parent) with admin, editor, and viewer roles
  - Document management by category (birth certificate, CURP, report cards, medical, address, ID)
  - Student records with grade and status; parent–student linking
  - Events and notifications; company information
  - JWT authentication, Zod validation, S3-compatible file storage
  - Frontend: React 19, TypeScript, Vite, Tailwind; Backend: Express, TypeORM, MySQL
  - Deployed on Railway (QA environment)
  `,
  },
];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of projects that showcase my passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden group hover:border-primary/50 transition-all duration-700  hover:shadow-lg hover:shadow-primary/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-md"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-4 p-3 bg-muted/50 rounded-lg border border-border/50">
                  <div className="flex items-start gap-2 text-xs">
                    <User className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">
                        Roles:
                      </p>
                      <p className="text-muted-foreground">
                        {project.roles.join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-xs">
                    <Key className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="w-full">
                      <p className="font-semibold text-foreground mb-2">
                        Demo Credentials:
                      </p>
                      <div className="space-y-3">
                        {project.credentials.map((cred, credIndex) => (
                          <div
                            key={credIndex}
                            className="p-2 bg-background/50 rounded border border-border/30 space-y-1"
                          >
                            <p className="font-semibold text-primary text-xs">
                              {cred.role}
                            </p>
                            <div className="text-muted-foreground font-mono text-xs space-y-0.5">
                              <p className="break-all">{cred.user}</p>
                              <p>{cred.password}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1 group/btn bg-transparent"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Instructions
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription>
                          Complete guide to use this demo effectively
                        </DialogDescription>
                      </DialogHeader>
                      <div className="prose prose-sm dark:prose-invert max-w-none mt-4">
                        {project.instructions.split("\n").map((line, i) => {
                          if (line.trim().startsWith("##")) {
                            return (
                              <h3
                                key={i}
                                className="text-lg font-bold mt-6 mb-3 text-primary"
                              >
                                {line.replace("##", "").trim()}
                              </h3>
                            );
                          } else if (line.trim().startsWith("-")) {
                            return (
                              <li
                                key={i}
                                className="ml-4 text-muted-foreground"
                              >
                                {line.replace("-", "").trim()}
                              </li>
                            );
                          } else if (line.trim().match(/^\d+\./)) {
                            return (
                              <li
                                key={i}
                                className="ml-4 text-muted-foreground list-decimal"
                              >
                                {line.replace(/^\d+\./, "").trim()}
                              </li>
                            );
                          } else if (line.trim()) {
                            return (
                              <p key={i} className="text-muted-foreground mb-2">
                                {line.trim()}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    View Demo
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
