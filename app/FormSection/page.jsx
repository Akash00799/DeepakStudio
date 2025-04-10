export default function FormSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 text-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Get In Touch With Us
        </h2>
        <form
          className="max-w-2xl mx-auto space-y-6 bg-background text-white p-6 rounded-xl shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              required
              placeholder="Enter your message....."
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/60 cursor-pointer transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
