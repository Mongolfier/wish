'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { Button } from '@wish/ui-kit'

export function AuthForm() {
  const router = useRouter()
  const t = useTranslations('auth')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: implement actual auth logic
    console.log('Login attempt:', { email, password })
    router.push('/')
  }

  return (
    <div className="authPage">
      <form className="authForm" onSubmit={handleSubmit}>
        <h1>{t('title')}</h1>

        <label className="authField">
          <span>{t('email')}</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="authField">
          <span>{t('password')}</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </label>

        <Button type="submit">{t('submit')}</Button>
      </form>
    </div>
  )
}
