import Link from "next/link"

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        My name is Adrian Sengondo. I am a Senior Software engineer at Oceanware
        Ltd.
      </p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  )
}
