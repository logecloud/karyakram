'use client';

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export default function EventSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleSearch = (query: string) => {
    router.push(`/events?${createQueryString('q', query)}`)
  }

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Search events..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('q') ?? ''}
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        aria-label="Search"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  )
} 