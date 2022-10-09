import Link from 'next/link'

export default function CTA() {
  return (
    <div className="bg-blue-700">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">See what&#39;s next.</span>
          <span className="block">Join the private beta.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-200">
          The <code>at://</code> protocol will launch soon. Join the waitlist to
          stay updated and try the beta before it&#39;s publicly available.
        </p>
        <Link href="/waitlist">
          <a className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 sm:w-auto">
            Join the waitlist
          </a>
        </Link>
      </div>
    </div>
  )
}
