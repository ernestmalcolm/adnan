import style from "./layout.module.css"
import Head from "next/head"
import utilStyle from "../styles/utils.module.css"
import Link from "next/link"
import Image from "next/image"
import adrian from "../public/images/adrian.jpg"

const name = "Adrian Mvungi"
export const siteTitle = "Adrian's Portfolio"

export default function Layout({ children, home }) {
  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Adrian Mvungi's portfolio" />
      </Head>
      <header className={style.header}>
        <>
          <Image
            priority
            src={adrian}
            className={utilStyle.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyle.heading2X1}>{name}</h1>
        </>
      </header>
      <main>{children}</main>
    </div>
  )
}
