/**
 * Footer component.
 *
 * Contains a call‑to‑action encouraging visitors to get in touch for
 * more information or to start a project. Also displays
 * a copyright notice at the bottom. Anchored with an id so navigation
 * links can scroll the page to this section.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-white py-14 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6 max-w-xl">
          Interested in learning more about this homepage template or need help customizing it for your project? Contact us today.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-primary-dark transition mb-4 sm:mb-0"
          >
            Email Us
          </a>
        </div>
        <p className="mt-8 text-gray-400 text-sm">© {year} Homepage. All rights reserved.</p>
      </div>
    </footer>
  );
}