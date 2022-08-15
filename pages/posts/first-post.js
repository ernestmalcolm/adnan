import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Ernest's Blog</title>
        </Head>
        <h1>First post</h1>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </Layout>
    </div>
  )
}
