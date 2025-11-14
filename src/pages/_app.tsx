import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Disable right-click globally
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable common keyboard shortcuts for devtools
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault()
        return false
      }
    }

    // Disable text selection on certain elements
    document.body.style.userSelect = 'none'
    document.body.style.webkitUserSelect = 'none'

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* SEO Meta Tags */}
        <title>Kage Protocol - Private Execution & Verification for Modern Finance</title>
        <meta name="description" content="Kage is the execution and verification layer for modern finance. Privacy protects your strategy. Proofs enforce your integrity. Built for trustworthy crypto markets at scale." />
        <meta name="keywords" content="kage protocol, privacy, blockchain, crypto, encrypted execution, zero knowledge, dark pool, DeFi, private trading, verifiable computation" />
        <meta name="author" content="90kb Labs" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kage.sh" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kage.sh" />
        <meta property="og:title" content="Kage Protocol - Private Execution & Verification for Modern Finance" />
        <meta property="og:description" content="Kage is the execution and verification layer for modern finance. Privacy protects your strategy. Proofs enforce your integrity." />
        <meta property="og:image" content="https://kage.sh/kage.png" />
        <meta property="og:site_name" content="Kage Protocol" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kage.sh" />
        <meta name="twitter:title" content="Kage Protocol - Private Execution & Verification for Modern Finance" />
        <meta name="twitter:description" content="Kage is the execution and verification layer for modern finance. Privacy protects your strategy. Proofs enforce your integrity." />
        <meta name="twitter:image" content="https://kage.sh/kage.png" />
        <meta name="twitter:site" content="@kageprotocol" />
        <meta name="twitter:creator" content="@kageprotocol" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/kage.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
