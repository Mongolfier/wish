'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@wish/ui-kit'
import './page.css'

export default function AuthPage() {
  const router = useRouter()
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
        <h1>Авторизация</h1>

        <label className="authField">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="authField">
          <span>Пароль</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </label>

        <Button type="submit">Войти</Button>
      </form>
    </div>
  )
}
