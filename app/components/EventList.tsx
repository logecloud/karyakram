import { prisma } from '@/app/lib/prisma'
import Link from 'next/link'

interface Event {
  id: string
  title: string
  description: string
  date: Date
  organizer: {
    name: string | null
  }
}

interface EventListProps {
  featured?: boolean
  limit?: number
}

async function getEvents(featured: boolean = false, limit?: number) {
  try {
    const events = await prisma.event.findMany({
      where: {
        isFeatured: featured,
      },
      take: limit,
      orderBy: {
        date: 'asc',
      },
      include: {
        organizer: {
          select: {
            name: true,
          },
        },
      },
    })
    return events
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function EventList({ featured = false, limit }: EventListProps) {
  const events = await getEvents(featured, limit)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event: Event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {event.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {new Date(event.date).toLocaleDateString()}
              </span>
              <Link 
                href={`/events/${event.id}`}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 