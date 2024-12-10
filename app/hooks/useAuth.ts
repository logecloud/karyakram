import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export function useAuth(allowedRoles?: Role[]) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return

    if (!session) {
      router.push('/auth/signin')
    } else if (allowedRoles && !allowedRoles.includes(session.user.role)) {
      router.push('/')
    }
  }, [session, status, router, allowedRoles])

  return { session, status }
} 