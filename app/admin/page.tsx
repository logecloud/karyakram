import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/auth"

async function AdminPage() {
  const session = await getServerSession(authOptions)

  if (!session) return null

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Admin content */}
    </div>
  )
}

export default AdminPage 