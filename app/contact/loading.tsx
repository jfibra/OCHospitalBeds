/* A route-level suspense fallback for /contact */
export default function ContactLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      <p className="text-lg font-medium text-blue-700">Preparing contact page&hellip;</p>
    </div>
  )
}
