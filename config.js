// =================================================================================================
// PAGE CONFIGURATION OBJECT
// This file defines all the dynamic content for the case study page.
// The `renderer.js` file reads this object to build the HTML.
// To change text, images, or other content, edit the values in this file.
// =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_
const config = {
  "globals": {
    "companyName": "SalesGenius",
    "mainCTAButtonText": "Book A Discovery Call",
    "mainCTAButtonURL": "#contact",
    "primaryColor": "#e3c379",
    "accentColor": "#d9c6a2",
    "agents": [
      {
        "name": "Arslan Ahmed",
        "imageSrc": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757711141211-Headshot Arslan Andrew.jpg",
        "contactDetails": [
          {
            "type": "email",
            "value": "arslan@salesgenius.co"
          },
          {
            "type": "phone",
            "value": "4166554850"
          }
        ]
      }
    ]
  },
  "header": {
    "tag": "CASE STUDY",
    "title": "How We Sold This 2-Bedroom Toronto Condo for $4.8 Million Above Asking in Just 12 Days with 52 Competing Offers",
    "subheadline": "Purchased in a <strong>High-Demand Area</strong> With Strong Terms—Now <a href=\"#\">Generating Top-Dollar Rent</a> in a Tight Market"
  },
  "mainBox": {
    "summary": {
      "title": "How We Sold This 2-Bedroom Toronto Condo for $4.8 Million Above Asking in Just 12 Days with 52 Competing Offers",
      "heroImage": {
        "src": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80"
      },
      "subTitle": "Summary",
      "paragraphs": [
        "The sellers of 10 Morrison St were ready to make their next move, but like many condo owners in Toronto's competitive market, they weren't sure how to stand out in a sea of similar listings. They needed a strategy that would turn their 1,500-square-foot, 2-bedroom plus den unit into the most sought-after property in the building.",
        "Through professional service and market expertise, we delivered exceptional results for our client. <strong>SOLD FOR $4,795,454 ABOVE THE LISTED PRICE</strong> – achieving a final sale price of $5,545,454 Generated 51 showings in under two weeks, creating massive buyer interest <strong>SECURED 52 COMPETITIVE OFFERS</strong> – turning the sale into a true bidding frenzy <strong>SOLD IN JUST 12 DAYS</strong> – dramatically faster than the average 30-45 days for similar condos in the area Key Stats: <strong>639% OVER ASKING</strong> <strong>52 COMPETING OFFERS</strong> <strong>12 DAYS ON MARKET</strong>"
      ]
    },
    "sidebar": {
      "title": "About {{companyName}}",
      "image": {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757711141211-Headshot Arslan Andrew.jpg"
      },
      "paragraphs": [
        "At {{companyName}} we provide professional real estate services with integrity, expertise, and dedication to our clients' success. Our experienced team combines market knowledge with personalized service to help you achieve your real estate goals. Whether you're buying, selling, or investing, we're here to guide you through every step of the process with transparency and results-driven strategies."
      ]
    }
  },
  "sections": [
    {
      "type": "standard",
      "title": "The Challenge",
      "paragraphs": [
        "Uncertain about how to price their condo in a market where similar units were sitting unsold for weeks",
        "Worried their property would blend in with dozens of other 2-bedroom condos in the area",
        "Concerned about the time and disruption of showing after showing with no guarantee of results",
        "Feared leaving money on the table or pricing themselves out of serious buyers"
      ]
    },
    {
      "type": "standard",
      "title": "The Strategy",
      "paragraphs": [
        "Implemented a strategic pricing model designed specifically to trigger a bidding war, analyzing comparable sales data and current market psychology",
        "Created a multi-channel marketing campaign that positioned the unit as a rare opportunity rather than just another listing",
        "Orchestrated a showing schedule that built momentum and created scarcity, making buyers feel they were competing for something special",
        "Leveraged targeted outreach to attract serious buyers and investor networks who were actively searching for premium units",
        "Staged and photographed the space to highlight the den as flexible space and maximize the perceived value of every square foot"
      ],
      "testimonial": {
        "quote": "\"\"We honestly couldn't believe what was happening. When Arslan told us his strategy, we trusted him, but we never imagined we'd have 52 offers. The whole process was so much smoother than we expected, and the final price completely changed our plans for what we could do next. This wasn't just a sale – it gave us financial freedom we didn't think was possible.\"\"<br><span>— Satisfied Client</span>"
      }
    },
    {
      "type": "standard",
      "title": "The Solution",
      "paragraphs": [
        "After researching agents and seeing lackluster results from other listings in their building, they chose to work with us because of our track record with condo sales in downtown Toronto. They were drawn to our data-driven approach and our ability to create competition rather than just wait for the right buyer to come along."
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80"
      }
    },
    {
      "type": "standard",
      "title": "The Results",
      "paragraphs": [
        "<strong>SOLD FOR $4,795,454 ABOVE THE LISTED PRICE</strong> – achieving a final sale price of $5,545,454",
        "Generated 51 showings in under two weeks, creating massive buyer interest",
        "<strong>SECURED 52 COMPETITIVE OFFERS</strong> – turning the sale into a true bidding frenzy",
        "<strong>SOLD IN JUST 12 DAYS</strong> – dramatically faster than the average 30-45 days for similar condos in the area",
        "Key Stats:",
        "<strong>639% OVER ASKING</strong>",
        "<strong>52 COMPETING OFFERS</strong>",
        "<strong>12 DAYS ON MARKET</strong>"
      ]
    },
    {
      "type": "standard",
      "title": "Conclusion",
      "paragraphs": [
        "The right pricing strategy doesn't mean pricing low – it means pricing strategically to create competition and urgency among motivated buyers",
        "Marketing matters more than ever: even in a hot market, standing out from other similar listings is what drives multiple offers and premium prices",
        "Speed and momentum are your allies: a well-executed plan that generates immediate interest will always outperform a listing that lingers, even if you eventually find a buyer"
      ]
    },
    {
      "type": "ctaBanner",
      "ctaBannerContent": {
        "subhead": "Trusted By Hundreds Of Home Buyers & Sellers",
        "headline": "Get Your Free Condo Pricing Strategy Session – Discover exactly what your property could sell for in today's market and the specific steps we'd take to generate competing offers for your home.",
        "smallText": "Book A Discovery Call Now ➡️"
      }
    }
  ],
  "footer": {
    "logo": {
      "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757711141211-Headshot Arslan Andrew.jpg"
    },
    "brokerageLabel": "Brokerage:",
    "brokerageName": "Real Broker Ontario Ltd.",
    "brokerageAddress": "130 KING ST W UNIT 1900B",
    "secondaryLogo": {
      "src": "https://cdn.chime.me/image/fs/cmsbuild/2023817/13/w1200_original_13dc3970-c036-43e0-8228-e0a6fb4270fa.png"
    },
    "disclaimerText": "All testimonials on this page are from real clients. Their experiences do not guarantee similar results.<br>Individual results may vary based on location, market conditions, motivation, as well as other unforeseen factors. Your results may vary.",
    "privacyPolicy": {
      "text": "Privacy Policy",
      "href": "https://docs.google.com/document/d/13ERdZ2TanyfTmhqzC2oWZIdyT7E1kZdlz0b10wYMrNg/edit?tab=t.0"
    }
  }
};

// Export for Node.js environment (if applicable) or set for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else if (typeof window !== 'undefined') {
  window.config = config;
}