import { prisma } from '@/lib/prisma';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  imageUrl?: string | null;
  price?: number | null;
}

interface EventListProps {
  featured?: boolean;
  limit?: number;
}

async function getEvents(featured: boolean = false, limit?: number) {
  return await prisma.event.findMany({
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
  });
}

export default async function EventList({ featured = false, limit }: EventListProps) {
  const events = await getEvents(featured, limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          {event.imageUrl && (
            <div className="aspect-video relative">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="p-6">
            <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
            <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {new Date(event.date).toLocaleDateString()}
              </span>
              {event.price ? (
                <span className="font-semibold">${event.price}</span>
              ) : (
                <span className="text-green-600 font-semibold">Free</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 