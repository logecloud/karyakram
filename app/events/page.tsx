'use client'
import { Suspense } from 'react'
import EventList from '@/app/components/EventList'
import EventSearch from '@/app/components/EventSearch'

// Create a separate component that uses useSearchParams
function EventsContent() {
  // ... rest of your component logic
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Browse Events
          </h1>
          <div className="max-w-xl">
            <EventSearch />
          </div>
        </div>
      </div>

      {/* Events Grid Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date Range
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Events List */}
          <div className="lg:col-span-3">
            <EventList />
          </div>
        </div>
      </div>
    </div>
  )
}

// Main page component
export default function EventsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventsContent />
    </Suspense>
  )
} 