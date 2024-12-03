import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {session.user?.name} ({session.user?.role})
        </span>
        <button
          onClick={() => signOut()}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => signIn()}
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
    >
      Sign In
    </button>
  )
} 