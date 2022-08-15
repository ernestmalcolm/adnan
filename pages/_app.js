import "../styles/global.css"
import { Global, MantineProvider } from "@mantine/core"
import Layout from "../components/layout"

function MyGlobalStyles() {
  return (
    <Global
      styles={() => ({
        "*": {
          boxSizing: "border-box",
        },

        body: {
          padding: 0,
          margin: 0,
          fontFamily: "Poppins",
          lineHeight: 1.6,
          fontSize: "18px",
        },

        a: {
          color: "#F4ABC4",
          textDecoration: "none",

          "&:hover": {
            color: "#00ACEE",
            textDecoration: "none",
          },
        },

        img: {
          maxWidth: "100%",
          display: "block",
        },
      })}
    />
  )
}

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider>
      <MyGlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}
