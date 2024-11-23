import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const footerLinks = {
  product: [
    { name: "Sites We Remove From", href: "#" },
    { name: "How It Works", href: "https://notrace.ai/#how-it-works" },
    { name: "Features", href: "https://notrace.ai/#features" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Help Center", href: "/help" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">NoTrace</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Protecting your digital privacy with advanced data removal and monitoring services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NoTrace. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-gray-500">
              <Link href="https://x.com/NoTrace_ai" className="hover:text-gray-600" target="_blank" aria-label="X (Twitter)">
                <FaXTwitter className="h-6 w-6" />
              </Link>
              <Link href="https://github.com/NoTrace-ai" className="hover:text-gray-600" target="_blank" aria-label="GitHub">
                <FaGithub className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
