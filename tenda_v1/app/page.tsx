"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  PlayCircle, 
  Repeat, 
  MessageSquare, 
  TrendingUp, 
  Smartphone,
  CheckCircle
} from "lucide-react";

export default function LandingPage() {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-x-hidden">

      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-0 right-0 z-50 mx-auto max-w-5xl px-4"
      >
        <div className="flex h-14 items-center justify-between rounded-full bg-slate-900/80 px-6 shadow-2xl backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-8">
            <span className="text-lg font-extrabold tracking-tight text-white">TENDA</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </div>
          </div>
          <div className="flex gap-4">
             <Link href="/login" className="text-sm font-semibold text-white hover:text-slate-200 pt-2">Log in</Link>
             <Link href="/signup" className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-slate-900 hover:bg-slate-200 transition-colors">
               Sign up
             </Link>
          </div>
        </div>
      </motion.nav>

      {/* --- HERO SECTION (Fixed: Moved content Up) --- */}
      <section className="relative w-full bg-slate-900 overflow-hidden">
        
        {/* Adjusted Padding: 
            pt-32 (mobile) / lg:pt-40 (desktop) 
            This ensures it clears the navbar but sits high on the screen 
        */}
        <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 container mx-auto max-w-7xl relative z-10">
            
            {/* Background Gradients (Kept distinct) */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Text Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left mt-4 lg:mt-0"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-6 mx-auto lg:mx-0 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Live in Nigeria</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                Sell smarter. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Grow without stress.
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Tenda helps you manage customers, track sales, and spot who really makes you money—all in one simple dashboard accessible from any device.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/signup" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-500/25 transition-all active:scale-95">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-semibold text-lg border border-slate-700 transition-all">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Floating 3D Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Floating Animation Loop */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                   <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative group">
                      <Image 
                        src="/images/hero.jpeg" 
                        alt="Dashboard Preview" 
                        width={600} 
                        height={450} 
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      {/* Glow fallback */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <div className="w-20 h-20 rounded-full bg-blue-500/20 blur-xl"></div>
                      </div>
                   </div>
                </div>
              </motion.div>
              
              {/* Glow Effect behind image */}
              <div className="absolute inset-0 bg-blue-500/30 blur-[100px] -z-10 rounded-full transform translate-y-10"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">With Tenda you can...</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Everything you need to run your business like a pro, without the enterprise complexity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <FeatureCard 
              icon={<Repeat className="w-8 h-8 text-blue-600" />}
              title="Turn past customers into repeat buyers"
              desc="Spot repeat-purchase patterns and sell more to people who already trust you."
            />

            {/* Feature 2 */}
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8 text-purple-600" />}
              title="Smart, Non-Salesy Follow-ups"
              desc="Get ready-to-send messages based on customer status. It feels like service, not pressure."
            />

            {/* Feature 3 */}
            <FeatureCard 
              icon={<TrendingUp className="w-8 h-8 text-green-600" />}
              title="See What Actually Makes Money"
              desc="Track which products drive profit so you know what to push and what to drop."
            />

             {/* Feature 4 (Centered Span) */}
             <div className="md:col-span-3 max-w-4xl mx-auto w-full mt-8">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <Smartphone className="w-12 h-12 text-slate-900" />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Monitor your business from anywhere</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Built for owners on the go. Whether you're at the shop, at home, or traveling, 
                            your entire business is in your pocket. Tenda works offline and syncs when you're back online.
                        </p>
                    </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* --- DEV LINKS --- */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
            <p className="text-slate-500 text-sm mb-6">Developer Quick Access Links</p>
            <div className="flex flex-wrap justify-center gap-6">
                <FooterLink href="/dashboard">Dashboard</FooterLink>
                <FooterLink href="/sales">Sales Page</FooterLink>
                <FooterLink href="/customers">Customers</FooterLink>
                <FooterLink href="/customers/addCustomers">Add Customer</FooterLink>
            </div>
            <p className="text-slate-600 text-xs mt-12">© 2025 Tenda. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

// --- HELPER COMPONENTS ---

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all"
    >
      <div className="mb-6 p-3 bg-white w-fit rounded-xl border border-slate-100 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">
        {desc}
      </p>
    </motion.div>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
            {children}
        </Link>
    )
}