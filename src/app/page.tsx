"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Flame, ChefHat, Utensils, Award, MessageCircle, MapPin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Chopsticks"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "cuts" },
            { name: "Specialties", id: "experience" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Order Now",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Authentic Asian Flavors in Every Bite"
          description="Tibetan, Chinese, and Japanese cuisine crafted with passion. Experience the perfect harmony of tradition and taste at Chopsticks."
          tag="Authentic Asian Cuisine"
          tagIcon={Flame}
          background={{ variant: "plain" }}
          buttons={[
            { text: "View Menu", href: "#cuts" },
            { text: "Order Now", href: "https://wa.me/" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-asian-food-plate-with-chopsticks_23-2148382833.jpg", imageAlt: "Freshly prepared steaming momos" },
            { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-eating-noodles_23-2149706713.jpg", imageAlt: "Hand-pulled Szechwan noodles" },
            { imageSrc: "http://img.b2bpic.net/free-photo/man-ignoring-woman-while-talking-phone_107420-65720.jpg", imageAlt: "Cozy restaurant dining atmosphere" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Story"
          tagIcon={ChefHat}
          title="Taste of Heritage"
          description="Chopsticks was born from a love for authentic Asian street food and refined dining. From hand-folded momos to traditional Japanese delicacies, we focus on fresh, locally sourced ingredients to bring you the true essence of Asia in every plate."
          metrics={[
            { value: "50+", title: "Dishes" },
            { value: "100%", title: "Fresh Ingredients" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/young-woman-white-shirt-pointing-up_1150-27592.jpg"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="cuts" data-section="cuts">
        <ProductCardTwo
          title="Our Menu"
          description="Explore our curated selection of Tibetan, Chinese, and Japanese favorites."
          tag="Discover"
          tagIcon={Utensils}
          products={[
            { id: "1", brand: "Tibetan", name: "Signature Momos", price: "$12", rating: 5, reviewCount: "150", imageSrc: "http://img.b2bpic.net/free-photo/caucasian-delicious-food-khinkali-khingal-finely-cooked-served-with-fresh-parsley-red-basilica-leaves_114579-1817.jpg" },
            { id: "2", brand: "Chinese", name: "Szechwan Noodles", price: "$15", rating: 4, reviewCount: "98", imageSrc: "http://img.b2bpic.net/free-photo/tasty-appetizing-asian-noodle-soup-with-vegetables-served-bowl-closeup_1220-7055.jpg" },
            { id: "3", brand: "Japanese", name: "Fresh Seafood Roll", price: "$18", rating: 5, reviewCount: "85", imageSrc: "http://img.b2bpic.net/free-photo/sake-maki-rolls-grey-background-with-chopsticks_114579-34484.jpg" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardNineteen
          title="Special Dishes"
          description="Taste the highlights of our culinary expertise"
          tag="Featured"
          features={[
            { tag: "Tibetan", title: "Steaming Thukpa", subtitle: "Comfort in a Bowl", description: "Handmade noodles in a savory, aromatic broth.", imageSrc: "http://img.b2bpic.net/free-photo/vertical-high-angle-shot-bowl-noodles-meat-some-chopsticks-table_181624-23825.jpg" },
            { tag: "Chinese", title: "Fried Rice", subtitle: "Wok-Seared Perfection", description: "Fragrant rice tossed with garden-fresh vegetables.", imageSrc: "http://img.b2bpic.net/free-photo/american-fried-rice_1339-4010.jpg" }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Our Kitchen Team"
          description="Masters behind your favorite meals"
          tag="The Chefs"
          members={[
            { id: "1", name: "Tenzin Gyatso", role: "Head Chef", description: "Specializing in Tibetan culinary arts for over 15 years.", imageSrc: "http://img.b2bpic.net/free-photo/woman-chef-white-uniform-standing-with-crossed-arms-looking-confident_176474-43386.jpg" },
            { id: "2", name: "Mei Ling", role: "Executive Chef", description: "Expertise in Szechwan and Japanese fusion techniques.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-professional-chef-working_23-2151232177.jpg" }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Join the hundreds of happy diners at Chopsticks."
          tag="Testimonials"
          testimonials={[
            { id: "1", name: "Alex R.", handle: "@alex_foodie", testimonial: "The momos here are the best I've ever had. Truly authentic!", imageSrc: "http://img.b2bpic.net/free-photo/photo-overjoyed-dark-skinned-girl-has-bushy-hair-laughs-looks-aside-uses-cell-phone-online-communication-messaging-with-friends-drinks-smoothie-cozy-cafeteria_273609-29417.jpg" },
            { id: "2", name: "Sarah J.", handle: "@sarah_eats", testimonial: "Cozy vibe, great service, and incredible Szechwan noodles.", imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-talking-while-choosing-order-form-menu-cafe_637285-8950.jpg" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="We're here to help you have the best experience."
          tag="Support"
          faqs={[
            { id: "1", title: "Do you offer delivery?", content: "Yes, we offer direct delivery and WhatsApp ordering." },
            { id: "2", title: "Are there vegetarian options?", content: "Absolutely, over half our menu is vegetarian-friendly." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/person-cafe-enjoying-book_23-2150064702.jpg"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Visit Us"
          title="Find Us at Chopsticks"
          description="123 Flavor Street, Culinary District. Open Daily: 11 AM - 10 PM. Order via WhatsApp or call us."
          tagIcon={MapPin}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Chopsticks"
          columns={[
            { title: "Navigation", items: [{ label: "Home", href: "#" }, { label: "Menu", href: "#cuts" }] },
            { title: "Contact", items: [{ label: "WhatsApp", href: "https://wa.me/" }, { label: "Email: info@chopsticks.com", href: "#" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
