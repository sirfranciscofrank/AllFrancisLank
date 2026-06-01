import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const C = ['#ffffff','#f0f0f0','#e8e8e8','#d4d4d4','#c0c0c0','#f5f5f5','#ebebeb','#dcdcdc']

const CODE_ITEMS = [
  { text: 'const',        left:  2, size: '0.75rem', dur: 18, delay:  0,  color: C[0] },
  { text: '=>',           left:  7, size: '1rem',    dur: 22, delay:  3,  color: C[1] },
  { text: '{}',           left: 12, size: '1.2rem',  dur: 16, delay:  7,  color: C[2] },
  { text: 'import',       left: 17, size: '0.7rem',  dur: 25, delay:  1,  color: C[3] },
  { text: '()',           left: 22, size: '0.9rem',  dur: 20, delay:  9,  color: C[4] },
  { text: 'async',        left: 27, size: '0.75rem', dur: 23, delay:  4,  color: C[5] },
  { text: '[]',           left: 32, size: '1.1rem',  dur: 17, delay: 12,  color: C[6] },
  { text: 'function',     left: 37, size: '0.65rem', dur: 26, delay:  2,  color: C[7] },
  { text: 'return',       left: 42, size: '0.8rem',  dur: 19, delay:  6,  color: C[0] },
  { text: 'export',       left: 47, size: '0.7rem',  dur: 21, delay: 14,  color: C[1] },
  { text: '===',          left: 52, size: '1rem',    dur: 15, delay:  5,  color: C[2] },
  { text: 'await',        left: 57, size: '0.75rem', dur: 24, delay: 10,  color: C[3] },
  { text: '??',           left: 62, size: '1.1rem',  dur: 18, delay:  8,  color: C[4] },
  { text: '.map()',       left: 67, size: '0.7rem',  dur: 22, delay: 16,  color: C[5] },
  { text: 'null',         left: 72, size: '0.8rem',  dur: 20, delay:  3,  color: C[6] },
  { text: '...',          left: 77, size: '1.2rem',  dur: 16, delay: 11,  color: C[7] },
  { text: 'useState',     left: 82, size: '0.65rem', dur: 27, delay:  7,  color: C[0] },
  { text: '&&',           left: 87, size: '1rem',    dur: 19, delay: 20,  color: C[1] },
  { text: 'class',        left: 92, size: '0.75rem', dur: 24, delay: 18,  color: C[2] },
  { text: '</>',          left:  5, size: '0.9rem',  dur: 21, delay: 22,  color: C[3] },
  { text: '||',           left: 10, size: '1rem',    dur: 17, delay: 25,  color: C[4] },
  { text: 'let',          left: 15, size: '0.85rem', dur: 23, delay: 19,  color: C[5] },
  { text: '?.',           left: 20, size: '1.1rem',  dur: 18, delay: 27,  color: C[6] },
  { text: 'npm i',        left: 25, size: '0.7rem',  dur: 25, delay: 13,  color: C[7] },
  { text: '//todo',       left: 30, size: '0.65rem', dur: 29, delay: 30,  color: C[0] },
  { text: '0x1F',         left: 35, size: '0.8rem',  dur: 20, delay: 33,  color: C[1] },
  { text: 'git push',     left: 40, size: '0.65rem', dur: 26, delay:  0,  color: C[2] },
  { text: 'while()',      left: 45, size: '0.7rem',  dur: 22, delay:  8,  color: C[3] },
  { text: '#root',        left: 50, size: '0.75rem', dur: 18, delay: 15,  color: C[4] },
  { text: 'props',        left: 55, size: '0.7rem',  dur: 23, delay:  4,  color: C[5] },
  { text: 'try {}',       left: 60, size: '0.65rem', dur: 21, delay: 17,  color: C[6] },
  { text: 'catch(e)',     left: 65, size: '0.65rem', dur: 24, delay: 21,  color: C[7] },
  { text: 'typeof',       left: 70, size: '0.75rem', dur: 19, delay:  9,  color: C[0] },
  { text: '=>{}',         left: 75, size: '0.9rem',  dur: 16, delay: 26,  color: C[1] },
  { text: 'new Map()',    left: 80, size: '0.65rem', dur: 28, delay: 11,  color: C[2] },
  { text: 'interface',    left: 85, size: '0.65rem', dur: 22, delay: 35,  color: C[3] },
  { text: 'T extends',    left: 90, size: '0.6rem',  dur: 27, delay: 38,  color: C[4] },
  { text: '01101',        left:  3, size: '0.8rem',  dur: 20, delay: 41,  color: C[5] },
  { text: '<T>',          left: 48, size: '0.9rem',  dur: 17, delay: 44,  color: C[6] },
  { text: 'void',         left: 94, size: '0.75rem', dur: 21, delay: 29,  color: C[7] },
]

const SHAPES = [
  { type: 'circle',   left:  3, size: 16, dur: 22, delay:  0, filled: false },
  { type: 'square',   left:  8, size: 12, dur: 28, delay:  5, filled: true  },
  { type: 'triangle', left: 14, size: 18, dur: 19, delay: 11, filled: false },
  { type: 'diamond',  left: 19, size: 14, dur: 24, delay:  2, filled: true  },
  { type: 'circle',   left: 24, size: 10, dur: 20, delay: 15, filled: true  },
  { type: 'hexagon',  left: 29, size: 20, dur: 26, delay:  7, filled: false },
  { type: 'square',   left: 34, size: 16, dur: 18, delay: 20, filled: false },
  { type: 'triangle', left: 39, size: 12, dur: 23, delay:  3, filled: true  },
  { type: 'diamond',  left: 44, size: 22, dur: 21, delay: 13, filled: false },
  { type: 'circle',   left: 49, size: 14, dur: 27, delay:  8, filled: false },
  { type: 'hexagon',  left: 54, size: 12, dur: 17, delay: 18, filled: true  },
  { type: 'square',   left: 59, size: 18, dur: 25, delay:  1, filled: false },
  { type: 'triangle', left: 64, size: 16, dur: 22, delay: 23, filled: false },
  { type: 'circle',   left: 69, size: 20, dur: 19, delay: 10, filled: true  },
  { type: 'diamond',  left: 74, size: 12, dur: 24, delay: 28, filled: false },
  { type: 'hexagon',  left: 79, size: 18, dur: 20, delay:  6, filled: false },
  { type: 'square',   left: 84, size: 10, dur: 29, delay: 16, filled: true  },
  { type: 'triangle', left: 89, size: 22, dur: 16, delay: 32, filled: false },
  { type: 'circle',   left: 94, size: 16, dur: 23, delay: 14, filled: false },
  { type: 'diamond',  left:  6, size: 18, dur: 21, delay: 25, filled: false },
  { type: 'hexagon',  left: 46, size: 14, dur: 26, delay: 36, filled: false },
  { type: 'square',   left: 71, size: 12, dur: 18, delay: 40, filled: true  },
  { type: 'triangle', left: 36, size: 10, dur: 24, delay: 44, filled: false },
  { type: 'circle',   left: 56, size: 22, dur: 30, delay: 48, filled: false },
]

function shapeContent(type, filled) {
  const fill = filled ? 'currentColor' : 'none'
  const sw = filled ? 0 : 1.5
  switch (type) {
    case 'circle':
      return <circle cx="10" cy="10" r="8.5" fill={fill} stroke="currentColor" strokeWidth={sw} />
    case 'square':
      return <rect x="1" y="1" width="18" height="18" fill={fill} stroke="currentColor" strokeWidth={sw} />
    case 'triangle':
      return <polygon points="10,1 19,18 1,18" fill={fill} stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" />
    case 'diamond':
      return <polygon points="10,1 19,10 10,19 1,10" fill={fill} stroke="currentColor" strokeWidth={sw} />
    case 'hexagon':
      return <polygon points="19,10 14.5,2.2 5.5,2.2 1,10 5.5,17.8 14.5,17.8" fill={fill} stroke="currentColor" strokeWidth={sw} />
    default:
      return null
  }
}

function FloatingShapes() {
  return (
    <div className="floating-shapes-bg" aria-hidden="true">
      {SHAPES.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          width={s.size}
          height={s.size}
          style={{
            left: `${s.left}%`,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
            color: '#ffffff',
          }}
        >
          {shapeContent(s.type, s.filled)}
        </svg>
      ))}
    </div>
  )
}

function FloatingCode() {
  return (
    <div className="floating-code-bg" aria-hidden="true">
      {CODE_ITEMS.map((item, i) => (
        <span
          key={i}
          style={{
            left: `${item.left}%`,
            fontSize: item.size,
            animationDuration: `${item.dur}s`,
            animationDelay: `${item.delay}s`,
            color: item.color,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  )
}

const LINKS = [
  { label: 'GITHUB',    href: 'https://github.com/',                        color: '#6e40c9', Icon: FaGithub    },
  { label: 'LINKEDIN',  href: 'https://linkedin.com/in/',                   color: '#0A66C2', Icon: FaLinkedin  },
  { label: 'Twitter(X)',         href: 'https://x.com/',                             color: '#1d9bf0', Icon: FaXTwitter  },
  { label: 'YOUTUBE',   href: 'https://www.youtube.com/@SirFranciso',       color: '#FF0000', Icon: FaYoutube   },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/stfrancisth/',     color: '#E1306C', Icon: FaInstagram },
  { label: 'EMAIL (Gmail)',     href: 'mailto:sirfrancisco2003@gmail.com',          color: '#06B6D4', Icon: FaEnvelope  },
  { label: 'PORTFOLIO', href: 'https://sirfranciscofrank-page.vercel.app/', color: '#8B5CF6', Icon: FaGlobe     },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.35,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function LinkButton({ label, href, color, Icon }) {
  const isEmail = href.startsWith('mailto')
  return (
    <motion.a
      href={href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      variants={itemVariants}
      whileHover={{
        backgroundColor: color,
        color: '#ffffff',
        borderColor: color,
        transition: { duration: 0.07, ease: 'linear' },
      }}
      className="flex items-center justify-between w-full border-2 sm:border-[3px] bg-black px-3 sm:px-5 py-2.5 sm:py-4 no-underline"
      style={{ borderColor: color, color: color, borderRadius: 0 }}
    >
      <span className="flex items-center gap-2 sm:gap-3 font-jetbrains font-bold tracking-[0.15em] sm:tracking-[0.18em] text-sm sm:text-lg leading-none select-none">
        <Icon size={16} aria-hidden="true" className="sm:hidden" />
        <Icon size={20} aria-hidden="true" className="hidden sm:block" />
        {label}
      </span>
      <span className="font-jetbrains font-bold text-base sm:text-xl leading-none" aria-hidden="true">
        &#8594;
      </span>
    </motion.a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col relative">
<FloatingShapes />
<FloatingCode />
      <main className="flex-1 flex flex-col items-start justify-center px-4 sm:px-6 py-6 sm:py-16 max-w-2xl mx-auto w-full relative z-10">

        <motion.p
          custom={0}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="font-ubuntu text-[0.6rem] font-bold tracking-[0.35em] uppercase text-white mb-2 sm:mb-5"
        >
          — STAY CONNECTED —
        </motion.p>

        <motion.h1
          custom={1}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="font-jetbrains font-extrabold uppercase leading-[0.92] tracking-tight text-white mb-2 sm:mb-4"
          style={{ fontSize: 'clamp(1.9rem, 8vw, 5.5rem)' }}
        >
          WANNA GET<br />IN TOUCH?
        </motion.h1>

        <motion.p
          custom={2}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="font-jetbrains font-bold text-xs sm:text-sm tracking-[0.22em] uppercase text-white mb-4 sm:mb-12 border-l-4 sm:border-l-[6px] border-white pl-3 sm:pl-4"
        >
          HERE ARE ALL MY LINKS.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 sm:gap-3 w-full"
        >
          {LINKS.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </motion.div>
      </main>
    </div>
  )
}
