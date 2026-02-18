'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@wish/ui-kit'
import './page.css'

export function HomeContent() {
  const [count, setCount] = useState(0)
  const t = useTranslations('home')

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
      <h1>{t('title')}</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          {t('count', { count })}
        </Button>
        <p>
          {t('editHint', { file: 'src/app/page.tsx' })}
        </p>
      </div>
      <p className="readTheDocs">
        {t('readDocs')}
      </p>
    </>
  )
}
