import Image from "next/image";
import Link from "next/link";
import AuthButton from "./components/AuthButton";
import EventList from "./components/EventList";
import EventSearch from "./components/EventSearch";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing Events
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find and join the most exciting events in your area. From conferences to workshops, 
              we've got something for everyone.
            </p>
            <div className="max-w-xl mx-auto">
              <EventSearch />
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-900">
                Featured Events
              </h3>
              <Link 
                href="/events" 
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
              >
                View All 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <EventList featured={true} limit={3} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Events Hosted</div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">50k+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Cities Covered</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
