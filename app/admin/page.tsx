'use client'

import { useAuth } from "@/app/hooks/useAuth"

export default function AdminPage() {
  const { session } = useAuth(['ADMIN', 'SUPER_ADMIN'])

  if (!session) return null

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Admin content */}
    </div>
  )
} 