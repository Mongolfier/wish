'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@wish/ui-kit'

export default function IndexPage() {
  const [count, setCount] = useState(0)
  const t = useTranslations('home')

  return (
    <main>
      <h1>{t('title')}</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          {t('count', { count })}
        </Button>
      </div>
    </main>
  )
}