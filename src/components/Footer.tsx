import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={schoolLogo} alt="Ober Boys High School" className="h-12 w-12" />
              <div>
                <div className="text-xl font-bold">Ober Boys High School</div>
                <div className="text-sm opacity-90">Determined to Excellence</div>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6 max-w-md">
              Empowering Young Men Through Academic Excellence, Character Development, and Leadership Training. 
              Premier boys' high school in Kenya since 1994.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 opacity-75 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  P.O. Box 123<br />
                  Homa Bay - 40300<br />
                  Kenya
                </span>
              </div>
              <a href="tel:+254201234567" className="flex items-center space-x-3 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4 opacity-75" />
                <span className="text-sm opacity-90">+254 20 123 4567</span>
              </a>
              <a href="mailto:info@oberboyshigh.ac.ke" className="flex items-center space-x-3 hover:opacity-100 transition-opacity">
                <Mail className="h-4 w-4 opacity-75" />
                <span className="text-sm opacity-90 break-all">info@oberboyshigh.ac.ke</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75 mb-4 md:mb-0">
            © {currentYear} Ober Boys High School. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm opacity-75">
            <a href="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="/admissions-policy" className="hover:opacity-100 transition-opacity">Admissions Policy</a>
            <a href="/contact" className="hover:opacity-100 transition-opacity">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;