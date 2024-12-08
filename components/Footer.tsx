// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-gray-300">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; 2024&nbsp;
          <span className="text-white font-bold">
            ImmersiLearn
          </span>. All Rights Reserved.
        </p>
        <p>
          Developed by{' '}
          <a
            href="https://arhanansari.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            Arhan Ansari
          </a>
        </p>
        <div className="mt-4">
          <ul className="flex justify-center space-x-6 text-sm">
            <li>
              <a
                href="#privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#support"
                className="hover:text-white transition-colors duration-300"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
