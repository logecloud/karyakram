import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a test user
  const user = await prisma.user.create({
    data: {
      name: 'Test User',
      email: 'test@example.com',
    },
  })

  // Create some events
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: 'Tech Conference 2024',
        description: 'Join us for the biggest tech conference of the year!',
        date: new Date('2024-06-15'),
        location: 'San Francisco, CA',
        price: 299.99,
        capacity: 1000,
        isFeatured: true,
        organizerId: user.id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Web Development Workshop',
        description: 'Learn the latest web development technologies and best practices.',
        date: new Date('2024-07-20'),
        location: 'Online',
        price: 49.99,
        capacity: 100,
        isFeatured: true,
        organizerId: user.id,
      },
    }),
  ])

  console.log({ user, events })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 