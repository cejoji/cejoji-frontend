import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cejoji | Your Journey, Your Way</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900">
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-blue-50">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Next Adventure Starts Here</h1>
          <p className="mb-6 text-lg max-w-xl">Book flights, hotels, and experiences all in one place — easy, trusted, global.</p>
          <a href="/book" className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">Book Now</a>
        </section>

        <section className="py-20 px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 p-6 rounded shadow">Paris</div>
            <div className="bg-gray-100 p-6 rounded shadow">Dubai</div>
            <div className="bg-gray-100 p-6 rounded shadow">New York</div>
          </div>
        </section>

        <section className="py-20 px-4 bg-blue-50">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Book with Cejoji?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <h3 className="font-bold text-xl mb-2">Best Prices</h3>
              <p>Competitive deals with trusted partners.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Secure Payments</h3>
              <p>Global payment options you can trust.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p>We're here anytime you need us.</p>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Cejoji. All rights reserved.
        </footer>
      </main>
    </>
  );
}