/*
 ██╗  ██╗ █████╗  ██████╗ ███████╗
 ██║ ██╔╝██╔══██╗██╔════╝ ██╔════╝
 █████╔╝ ███████║██║  ███╗█████╗  
 ██╔═██╗ ██╔══██║██║   ██║██╔══╝  
 ██║  ██╗██║  ██║╚██████╔╝███████╗
 ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
*/

import { DM_Sans, Instrument_Serif, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});


export default function Home() {
  const [showManifesto, setShowManifesto] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kage Protocol",
              "alternateName": "Kage",
              "url": "https://kage.sh",
              "logo": "https://kage.sh/kage.png",
              "description": "The execution and verification layer for modern finance. Privacy protects your strategy. Proofs enforce your integrity.",
              "sameAs": [
                "https://x.com/kageprotocol",
                "https://discord.gg/J4buKj5dN3",
                "https://paragraph.com/@kageprotocol"
              ],
              "foundingDate": "2024",
              "founders": [{
                "@type": "Organization",
                "name": "90kb Labs"
              }],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            })
          }}
        />
      </Head>
      <main
        className={`${dmSans.variable} ${instrumentSerif.variable} ${spaceGrotesk.variable} h-screen w-full bg-black text-white overflow-hidden`}
      >
      <div className="grid h-screen grid-cols-1 md:grid-cols-[360px_1fr]">
        {/* Left rail */}
        <aside className="flex flex-col h-screen px-5 py-6 bg-black border-r md:px-8 border-white/10 font-apfel-grotezk">
          {/* Logo */}
          <div className="mb-8 -ml-5">
            <button
              onClick={() => {
                setShowManifesto(false);
                setShowProducts(false);
              }}
              className="transition-opacity hover:opacity-80"
              aria-label="Return to home"
            >
              <Image
                src="/kage.png"
                alt="Kage Protocol - Private Execution and Verification Layer"
                width={80}
                height={26}
                priority
                className=""
              />
            </button>
          </div>

          {/* Headline */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="mb-10"
          >
            <h1 className="text-3xl font-light leading-tight md:text-4xl font-instrument-serif">
              Kage is redefining how capital moves in crypto with privacy and verifiability by default.
            </h1>
          </motion.div>

          {/* Backed By */}
          {/* <section className="pt-4 mt-6 border-t border-white/10">
            <div className="mb-3 text-xs tracking-wide uppercase text-white/60">
              Backed By
            </div>
            <div className="flex items-center gap-6 text-white/80">
              <span className="text-xl">Euclid</span>
              <span className="text-xl">Wormhole</span>
            </div>
          </section> */}

          {/* Links */}
          <section id="links" className="pt-6 mt-6 border-t border-white/10">
            <div className="mb-4 text-xs tracking-wide uppercase text-white/60">
              Links
            </div>
            <div className="overflow-hidden border divide-y rounded-md divide-white/10 border-white/10">
              <button
                onClick={() => {
                  setShowManifesto(true);
                  setShowProducts(false);
                }}
                className="block w-full p-4 text-left hover:bg-white/5"
              >
                <div className="text-xs uppercase text-white/60">
                  Manifesto
                </div>
                <div className="mt-1 text-sm text-white/90">
                  Read the Kage scroll
                </div>
              </button>
              <button
                onClick={() => {
                  setShowProducts(true);
                  setShowManifesto(false);
                }}
                className="block w-full p-4 text-left hover:bg-white/5"
              >
                <div className="text-xs uppercase text-white/60">
                  Products
                </div>
                <div className="mt-1 text-sm text-white/90">
                  Private execution, cryptographic verification.
                </div>
              </button>
              <Link 
                href="https://paragraph.com/@kageprotocol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 hover:bg-white/5"
              >
                <div className="text-xs uppercase text-white/60">BLOG ↗</div>
                <div className="mt-1 text-sm text-white/90">
                  See our latest writing
                </div>
              </Link>
              <Link href="#" className="block p-4 hover:bg-white/5">
                <div className="text-xs uppercase text-white/60">
                  Documentation
                </div>
                <div className="mt-1 text-sm text-white/90">
                  Coming soon
                </div>
              </Link>
            </div>
          </section>

          {/* Social Icons */}
          <section className="pt-6 mt-6 border-t border-white/10">
            <div className="mb-4 text-xs tracking-wide uppercase text-white/60">
              Socials
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="https://x.com/kageprotocol" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-md hover:bg-white/5"
                aria-label="Follow us on X"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              
              <Link 
                href="https://discord.gg/J4buKj5dN3" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-md hover:bg-white/5"
                aria-label="Join our Discord"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </Link>
              
              <Link 
                href="#" 
                className="p-2 transition-colors rounded-md hover:bg-white/5"
                aria-label="Join our Telegram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>
              
              <Link 
                href="#" 
                className="p-2 transition-colors rounded-md hover:bg-white/5"
                aria-label="Read our blog on Paragraph"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white">
                  <path d="M13.5 2c-5.621 0-10.211 4.443-10.5 10H2c-.552 0-1 .447-1 1s.448 1 1 1h1c.289 5.557 4.879 10 10.5 10 .832 0 1.5-.672 1.5-1.504V14h2.343a5.645 5.645 0 005.657-5.657V2c0-1.104-.896-2-2-2h-7zM4 8h1.5c.827 0 1.5-.673 1.5-1.5S6.327 5 5.5 5H4c-.552 0-1 .447-1 1s.448 1 1 1v1zm8.5 13c-4.687 0-8.5-3.813-8.5-8.5S8.813 3 13.5 3H19v5.343a3.645 3.645 0 01-3.657 3.657H13v8.5c0 .276-.224.5-.5.5z"/>
                </svg>
              </Link>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-4 mt-auto text-xs text-white/60">
            © 90kb Labs,. 2025.
          </div>
        </aside>

        {/* Right area */}
        <section className="relative h-screen overflow-hidden bg-black">
          {!showManifesto && !showProducts ? (
            <>
              {/* Video Background */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none"
                  style={{ opacity: 0.6 }}
                >
                  <source src="/images/kagecity.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Blurred Red Gradient Orb - positioned top left */}
              <motion.div
                className="absolute w-[600px] h-[600px] rounded-full opacity-50 z-10"
                style={{
                  background: 'radial-gradient(circle, #fb2a26 0%, rgba(251, 42, 38, 0.6) 40%, transparent 70%)',
                  filter: 'blur(100px)',
                  left: '-100px',
                  top: '-200px',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />

              {/* Secondary Red Gradient Orb - positioned bottom right */}
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-40 z-10"
                style={{
                  background: 'radial-gradient(circle, #fb2a26 0%, rgba(251, 42, 38, 0.5) 50%, transparent 70%)',
                  filter: 'blur(120px)',
                  right: '-150px',
                  bottom: '-150px',
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1,
                }}
              />

              {/* Dark overlay for depth */}
              <div className="absolute inset-0 z-20 bg-gradient-to-br from-black/90 via-black/60 to-black/90" />

              {/* Hero Text - "kage." */}
              <div className="absolute inset-0 z-30 flex items-end justify-center px-8 overflow-hidden md:px-16">
                <motion.h2
                  initial={{ opacity: 0, scale: 1.5, x: -60, y: 0 }}
                  animate={{ opacity: 0.15, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="font-normal text-white pointer-events-none select-none whitespace-nowrap font-dm-sans"
                  style={{
                    fontWeight: 400,
                    lineHeight: '0.9em',
                    letterSpacing: '5px',
                    fontSize: 'clamp(9rem, 30vw, 35rem)',
                    position: 'relative',
                    bottom: '-10%',
                    width: 'fit-content',
                    mixBlendMode: 'screen',
                  }}
                >
                  kage.
                </motion.h2>
              </div>
            </>
          ) : showManifesto ? (
            /* Manifesto Content */
            <div className="h-full p-8 overflow-y-auto md:p-12">
              <div className="max-w-4xl mx-auto">
                <button 
                  onClick={() => setShowManifesto(false)}
                  className="mb-6 text-sm transition-colors text-white/60 hover:text-white"
                >
                  ← Back
                </button>
                
                <motion.article
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                  className="prose prose-lg prose-invert max-w-none"
                >
                  <h1 className="mb-8 text-4xl font-light md:text-5xl font-instrument-serif">
                    The Kage Protocol Manifesto: The Shadow's Work
                  </h1>
                  
                  <div className="space-y-6 leading-relaxed text-white/90">
                    <p className="text-lg">
                      A shadow moves silently, unseen, yet its presence is undeniable. It is the quiet protector, the veil under which freedom thrives. Shadows are not empty, they are where the unseen work of liberation begins. <strong>Kage no Shiwaza</strong>, or <strong>"The Work of the Shadow,"</strong> stands as a testament to the belief that privacy is the foundation of human dignity and sovereignty.
                    </p>
                    
                    <p>
                      In an era where surveillance masquerades as security and transparency is weaponized against the individual, <strong>Kage no Shiwaza</strong> is the invisible force reclaiming what was stolen: our right to privacy, autonomy, and freedom. 影の仕業
                    </p>
                    
                    <h2 className="mt-12 mb-6 text-3xl font-light font-instrument-serif">A New Dawn for Privacy</h2>
                    
                    <p>
                      We live in a world consumed by visibility. Every click, every conversation, every transaction feeds into systems that monetize identity and exploit trust. Privacy is not just at risk—it is being erased. But we believe in the power of shadows, where the unseen cultivates strength, creativity, and resistance.
                    </p>
                    
                    <p>
                      To work in the shadow is to embrace privacy as a tool for liberation, not isolation. It is to build systems that preserve confidentiality without sacrificing connection. It is to ensure that even in the harshest light, freedom flourishes unbound by the chains of surveillance.
                    </p>
                    
                    <h2 className="mt-12 mb-6 text-3xl font-light font-instrument-serif">The Shadow's Creed</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="mb-3 text-xl font-semibold">I. Privacy is Power</h3>
                        <p>Power does not come from control but from choice. Privacy is not about hiding; it is about deciding what to reveal, to whom, and under what terms. Privacy empowers individuals to live authentically without fear of observation or coercion.</p>
                      </div>
                      
                      <div>
                        <h3 className="mb-3 text-xl font-semibold">II. Confidentiality is Freedom</h3>
                        <p>Without the right to confidentiality, there can be no autonomy. Financial privacy is especially critical—it is the backbone of sovereignty. <strong>Kage no Shiwaza</strong> creates tools to restore financial freedom, ensuring transactions remain invisible to all but their participants.</p>
                      </div>
                      
                      <div>
                        <h3 className="mb-3 text-xl font-semibold">III. Shadows Resist Control</h3>
                        <p>Surveillance systems thrive on centralization. Shadows, by nature, resist centralization, dispersing power back to the individual. By utilizing cryptographic proofs and privacy-enhancing technologies, we shift the balance of power away from those who seek to watch and control.</p>
                      </div>
                      
                      <div>
                        <h3 className="mb-3 text-xl font-semibold">IV. Code is Liberation</h3>
                        <p>Cryptography is our language, decentralization our canvas, and privacy-enhancing protocols our brush. Through code, we build a world where control no longer flows from the top down but emanates from the individual.</p>
                      </div>
                    </div>
                    
                    <h2 className="mt-12 mb-6 text-3xl font-light font-instrument-serif">Our Mission: The Shadow's Work</h2>
                    
                    <p>
                      <strong>Kage no Shiwaza</strong> is not just a project; it is a movement. It is an unrelenting push for a future where:
                    </p>
                    
                    <ul className="ml-6 space-y-3 list-disc">
                      <li><strong>Private Payments Become the Norm</strong>: No observer, or third party should have visibility into a financial transaction unless explicitly permitted. Through tools like zero-knowledge proofs and stealth addresses, payments and transfers will belong only to those directly involved.</li>
                      <li><strong>Confidential Systems Empower the Individual</strong>: Privacy is not a privilege but a human right. We build systems that allow individuals to transact, communicate, and operate free from invasive scrutiny.</li>
                      <li><strong>Transparency Exists Without Exposure</strong>: Privacy and transparency are not opposites. By using non-prohibition proofs, <strong>Kage no Shiwaza</strong> proves compliance without compromising confidentiality.</li>
                    </ul>
                    
                    <h2 className="mt-12 mb-6 text-3xl font-light font-instrument-serif">The Shadow's Resistance</h2>
                    
                    <p>
                      We reject the narrative that privacy is a threat. To the powerful, privacy may be inconvenient; to the free, privacy is survival. The systems of surveillance tell us, "If you have nothing to hide, you have nothing to fear." We reject this falsehood. Privacy is not about hiding. It is about refusing to be stripped of dignity.
                    </p>
                    
                    <p>
                      Our work lies in the shadow, where the light of truth cannot be manipulated to oppress. By embracing cryptographic privacy and decentralized systems, we shield individuals from exploitation, ensuring their power remains their own.
                    </p>
                  </div>
                </motion.article>
              </div>
            </div>
          ) : showProducts ? (
            /* Products Content */
            <div className="h-full overflow-y-auto bg-black">
              {/* Hero Section */}
              <div className="relative min-h-screen px-8 py-16 md:px-16 lg:px-24">
                {/* Background gradient effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute w-[652px] h-[652px] rounded-full opacity-20"
                    style={{
                      background: 'radial-gradient(circle, #fb2a26 0%, transparent 70%)',
                      filter: 'blur(100px)',
                      left: '50%',
                      top: '20%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </div>

                <button
                  onClick={() => setShowProducts(false)}
                  className="relative z-10 mb-12 text-sm transition-colors text-white/60 hover:text-white"
                >
                  ← Back
                </button>

                {/* Hero Content */}
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                  className="relative z-10 max-w-5xl mx-auto space-y-16"
                >
                  {/* Main Heading */}
                  <div className="space-y-6">
                    <h1 className="text-5xl font-normal leading-tight md:text-7xl lg:text-8xl font-apfel-grotezk">
                      Products
                    </h1>
                    <div className="max-w-2xl space-y-3">
                      <p className="text-base leading-relaxed md:text-lg text-white/70">
                        Kage is the execution and verification layer for modern finance built to make crypto markets trustworthy at size. Privacy protects your strategy. Proofs enforce your integrity.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/10" />

                  {/* Product Cards */}
                  <div className="space-y-12">
                    {/* Card 1 */}
                    <div className="p-8 transition-colors border rounded-lg md:p-12 border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <h2 className="text-3xl font-normal md:text-4xl font-apfel-grotezk">
                            Kurō
                          </h2>
                          <span className="px-3 py-1 text-xs tracking-wider uppercase border rounded-full text-white/60 border-white/20">
                            Dark Pool
                          </span>
                        </div>
                        <p className="text-lg leading-relaxed text-white/70">
                        Kurō executes block-trades, RFQs and OTC trades fully encrypted until settlement with zero price impact, eliminating frontrunning, copy-trading and protecting your strategies.
                        </p>
                        <div className="grid gap-3 pt-4 md:grid-cols-2">
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#fb2a26]" />
                            <span className="text-sm text-white/60">Zero MEV</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#fb2a26]" />
                            <span className="text-sm text-white/60">Encrypted Intent Execution</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#fb2a26]" />
                            <span className="text-sm text-white/60">Opt-In Compliance</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#fb2a26]" />
                            <span className="text-sm text-white/60">Cross-chain privacy</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 transition-colors border rounded-lg md:p-12 border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <h2 className="text-3xl font-normal md:text-4xl font-apfel-grotezk">
                            Covenants
                          </h2>
                          <span className="px-3 py-1 text-xs tracking-wider uppercase border rounded-full text-white/60 border-white/20">
                            Credit
                          </span>
                        </div>
                        <p className="text-lg leading-relaxed text-white/70">
                        Covenants make counterparty quality provable in real time with live, cryptographic attestations of solvency, leverage, and exposure.
                        A primitive that powers undercollateralized credit, compliant vaults, and controlled market access.</p>
                        <div className="grid gap-3 pt-4 md:grid-cols-2">
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#fb2a26]" />
                            <span className="text-sm text-white/60">Programmable policies</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#fb2a26]" />
                            <span className="text-sm text-white/60">Interoperable verification layer</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#fb2a26]" />
                            <span className="text-sm text-white/60">Verifiable computations</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#fb2a26]" />
                            <span className="text-sm text-white/60">Live, cryptographic attestations</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 transition-colors border rounded-lg md:p-12 border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <h2 className="text-3xl font-normal md:text-4xl font-apfel-grotezk">
                            Kage Terminal
                          </h2>
                          <span className="px-3 py-1 text-xs tracking-wider uppercase border rounded-full text-white/60 border-white/20">
                          Coming Soon
                          </span>
                        </div>
                        <p className="text-lg leading-relaxed text-white/70">
                          Kage Terminal is the command center for private liquidity operations.
                          It gives funds, traders, committees, and treasuries a real-time view of their counterparties, covenant states, and trade anchors without ever revealing sensitive data or strategies.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Divider */}
                  <div className="w-full h-px bg-white/10" />

                  {/* Footer Note */}
                  <div className="pb-16 text-center">
                    <p className="text-sm text-white/40">
                      More products and integrations coming soon
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </main>
    </>
  );
}
