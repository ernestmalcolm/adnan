import Head from "next/head"
import utilStyle from "../styles/utils.module.css"
import Layout, { siteTitle } from "../components/layout"

export default function Home() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>
          Hi, I'm Adrian Sengondo Mvungi. I am using reliable tools to design
          software solutions and tools for public consumption, commercial use,
          opensource, learning and fun 😄 ⚓
        </p>
        <p>
          This is my Github link - you can check various project I have worked
          on <a href="https://github.com/adryxTZ">my Github Profile</a>.
        </p>
      </section>
      </div>
  )
}
