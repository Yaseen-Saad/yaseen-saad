export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-black dark:text-white">
          Let's Connect
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Whether you want to discuss physics, collaborate on a project, or just say hi - I'd love to hear from you!
        </p>
        
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Get In Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              📧 Email: yaseen@yasoo.me<br/>
              🐙 GitHub: @Yaseen-Saad<br/>
              🔗 LinkedIn: Coming Soon<br/>
              📍 Location: Giza, Egypt
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Response time: Usually within 24 hours (unless I'm debugging something particularly stubborn)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
