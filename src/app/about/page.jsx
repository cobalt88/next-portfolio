import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Vincent Teune (two-knee). I live in Winter Garden Florida, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Vince. I believe in the impossible.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              From a young age, the thrill of creation has been the driving force in my life.
              My journey began with an insatiable curiosity and a love for making things.
              It didn&apos;t matter if the material was wood, metal, plastic, or the digital realm of silicon – each medium was a new canvas for my imagination.
              Transforming ideas into tangible, unique creations has always been a source of exhilaration for me.
            </p>
            <p>
              Growing up, I was equally fascinated by the inner workings of things.
              As a child surrounded by a family of skilled tradesmen and tinkerers, I quickly developed a deep appreciation for engineering and innovation, and imagination.
              Whether it was dismantling old furnaces for scrap, working on cars with my dad, or constructing rockets in the backyard, I found my greatest joy in the process of building and understanding.
            </p>
            <p>
              This early passion laid the foundation for an eclectic and fulfilling career.
              I&apos;ve had the privilege of weaving my love for innovation through various industries, from mining to manufacturing, and from food and beverage to hospitality.
              My professional journey has taken me through roles as diverse as IT specialist, software engineer, Postmaster, and CEO.
              Each experience has broadened my perspective and reinforced a fundamental belief: Everything was once impossible, until someone did it.
            </p>
            <p>
              Today, I stand proud as the founder of Kiwi Dragon Creations, where we specialize in small batch local manufacturing and custom fabrication.
              Parallel to this, I continue to explore the digital world as a full-time software engineer in the logistics sector. And for a touch of personal flair, I daily drive my racecar – when it decides to cooperate!
            </p>
            <p>
              Through every endeavor, my mission remains the same: to bring innovative ideas to life and to keep pushing the boundaries of what&apos;s possible.
              Join me in this journey of continuous creation and discovery.
            </p>

          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/vincent.teune/?img_index=1" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/cobalt88" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/vincent-teune/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              vincent@vtportfolio.net
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
