// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-lg font-bold">About Us</h4>
            <p>
              We are dedicated to providing the best health advice and tools to help you manage your health and well-being.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <p>Email: support@healthwebsite.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82V14.708h-3.356V11.28h3.356V8.413c0-3.345 2.015-5.167 4.964-5.167 1.41 0 2.617.105 2.969.152v3.44l-2.037.001c-1.594 0-1.903.759-1.903 1.87v2.448h3.81l-.497 3.428h-3.313V24h6.491C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.829 9.829 0 0 1-2.828.775 4.939 4.939 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.195 4.926 4.926 0 0 0-8.388 4.482 13.978 13.978 0 0 1-10.16-5.152 4.923 4.923 0 0 0 1.523 6.573 4.906 4.906 0 0 1-2.229-.616v.062a4.927 4.927 0 0 0 3.946 4.827 4.936 4.936 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.417 9.869 9.869 0 0 1-6.104 2.104c-.396 0-.787-.023-1.17-.067a13.936 13.936 0 0 0 7.548 2.212c9.055 0 14.008-7.496 14.008-13.986 0-.213-.005-.426-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.058 2.128.268 2.641.512a5.012 5.012 0 0 1 1.823 1.168 5.008 5.008 0 0 1 1.168 1.823c.244.513.454 1.382.512 2.641.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.259-.268 2.128-.512 2.641a5.012 5.012 0 0 1-1.168 1.823 5.008 5.008 0 0 1-1.823 1.168c-.513.244-1.382.454-2.641.512-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.128-.268-2.641-.512a5.012 5.012 0 0 1-1.823-1.168 5.008 5.008 0 0 1-1.168-1.823c-.244-.513-.454-1.382-.512-2.641-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.058-1.259.268-2.128.512-2.641a5.012 5.012 0 0 1 1.168-1.823 5.008 5.008 0 0 1 1.823-1.168c.513-.244 1.382-.454 2.641-.512 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.322.012 7.05.072 5.775.132 4.672.34 3.82.663c-.859.334-1.596.782-2.333 1.519-.737.737-1.185 1.474-1.519 2.333-.323.852-.531 1.955-.591 3.23C0 8.322 0 8.756 0 12s.012 3.678.072 4.95c.06 1.275.268 2.378.591 3.23.334.859.782 1.596 1.519 2.333.737.737 1.474 1.185 2.333 1.519.852.323 1.955.531 3.23.591 1.272.06 1.706.072 4.95.072s3.678-.012 4.95-.072c1.275-.06 2.378-.268 3.23-.591.859-.334 1.596-.782 2.333-1.519.737-.737 1.185-1.474 1.519-2.333.323-.852.531-1.955.591-3.23.06-1.272.072-1.706.072-4.95s-.012-3.678-.072-4.95c-.06-1.275-.268-2.378-.591-3.23-.334-.859-.782-1.596-1.519-2.333-.737-.737-1.474-1.185-2.333-1.519-.852-.323-1.955-.531-3.23-.591C15.678 0 15.244 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Health Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
