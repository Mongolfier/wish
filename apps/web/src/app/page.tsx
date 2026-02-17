'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@wish/ui-kit'
import './page.css'

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <Image src="/next.svg" className="logo" alt="Next.js logo" width={96} height={96} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <Image src="/react.svg" className="logo logoReact" alt="React logo" width={96} height={96} />
        </a>
      </div>
      <h1>Next.js + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/app/page.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="readTheDocs">
        Click on the Next.js and React logos to learn more
      </p>
    </>
  )
}
