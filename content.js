// ===== EDIT YOUR SITE HERE (no coding needed) =====
// Add / remove / change any block, keep the commas and quotes.
window.SITE = {
  brand: "ADVOME",
  tagline: "Independent creative thinking. Clear execution.",
  headline: "Make Your Brand Impossible To Ignore.",
  intro: "ADVOME is a digital marketing and creative agency building stronger brand presence through strategy, social content, video, paid advertising, photography and videography.",
  email: "suhailaerom2003@gmail.com",
  phone: "+91 8547614354",
  whatsapp: "918547614354",

  // Brands -> click opens their Instagram
  brands: [
    { name: "Buildie Designs", note: "Design & build", instagram: "https://www.instagram.com/buildie_designs" },
    { name: "Shaahees Pickles", note: "Food brand", instagram: "https://www.instagram.com/shaahees_pickles" }
  ],

  // Demo videos. preview = short muted clip (plays on hover / when visible), put files in /videos
  // video = full video: YouTube link, .mp4 file, or Instagram reel link
  // poster = thumbnail image in /images (optional; YouTube links get one automatically)
  videos: [
    
    { title: "Buildie Designs", tag: "Interior showcase", preview: "videos/demo2-preview.mp4", poster: "images/demo2.jpg", video: "videos/demo2.mp4" },
    { title: "Buildie Designs", tag: "Interior reel", preview: "videos/demo3-preview.mp4", poster: "images/demo3.jpg", video: "videos/demo3.mp4" },
    { title: "Buildie Designs", tag: "Brand intro", preview: "videos/demo4-preview.mp4", poster: "images/demo4.jpg", video: "videos/demo4.mp4" },
    { title: "REAL Builders", tag: "Property walkthrough", preview: "videos/demo1-preview.mp4", poster: "images/demo1.jpg", video: "videos/demo1.mp4" },
    { title: "Buildie Designs", tag: "Home design", preview: "videos/demo5-preview.mp4", poster: "images/demo5.jpg", video: "videos/demo5.mp4" },
    { title: "Buildie Designs", tag: "Plot visualisation", preview: "videos/demo6-preview.mp4", poster: "images/demo6.jpg", video: "videos/demo6.mp4" },
    { title: "Buildie Designs", tag: "Client story", preview: "videos/demo7-preview.mp4", poster: "images/demo7.jpg", video: "videos/demo7.mp4" },
    { title: "SHAAHEES PICKLES", tag: "Kitchen Videos", preview: "videos/demo8-preview.mp4", poster: "images/demo8.jpg", video: "videos/demo8.mp4" },
    { title: "REAL Builders", tag: "Client story", preview: "videos/demo9-preview.mp4", poster: "images/demo9.jpg", video: "videos/demo9.mp4" },
    { title: "Buildie Designs", tag: "Studio Project", preview: "videos/demo10-preview.mp4", poster: "images/demo10.jpg", video: "videos/demo10.mp4" },
    { title: "Buildie Designs", tag: "House 3D", preview: "videos/demo11-preview.mp4", poster: "images/demo11.jpg", video: "videos/demo11.mp4" },
    { title: "Buildie Designs", tag: "Enquiry story", preview: "videos/demo12-preview.mp4", poster: "images/demo12.jpg", video: "videos/demo12.mp4" }
    
  ],

  services: [
    ["Social Media Management", "Thoughtful planning, publishing and day-to-day care for your social presence."],
    ["Video Editing", "Purposeful edits that turn footage into engaging short-form content."],
    ["Paid Advertising", "Campaign planning and management aligned with your brand and goals."],
    ["Photography & Videography", "Original visuals that give your brand a consistent, recognizable presence."]
  ],

  // Plans: add / delete / edit freely. popular:true shows the "Most popular" badge.
  // features = what you deliver | includes = covered in the price | extras = charged separately
  // Tip: write amounts inside extras, e.g. "Transport - ₹500". Clicking a plan opens WhatsApp with these details.
  plans: [
    { name: "Single Video", price: "₹1099", per: "per video", popular: false, features: ["1 video"], includes: ["Video editing", "Uploading", "Social media handling"], extras: ["Transport and Video shooting (limit 100 km)"], criteria: [ "Transport within 100 km only"] },
    { name: "Starter", price: "₹4,999", per: "/month", popular: false, features: ["8 reels (2 Reels per week)"], includes: ["Video editing", "Uploading", "Social media handling"], extras: ["Transport and Video shooting"], criteria: ["Covers editing, uploading and social media handling only", "Transport  and video shooting are charged extra as per distance", "Billed monthly"] },
    { name: "Growth",  price: "₹9,499", per: "/month", popular: true,  features: ["16 reels (4 Reels per week)"], includes: ["Video editing", "Uploading", "Social media handling"], extras: ["Transport and Video shooting"], criteria: ["Covers editing, uploading and social media handling only", "Transport  and video shooting are charged extra as per distance", "Billed monthly"] },
    { name: "Pro",     price: "₹13,999", per: "/month", popular: false, features: ["24 reels (6 Reels per week)"], includes: ["Video editing", "Uploading", "Social media handling"], extras: ["Transport and Video shooting"], criteria: ["Covers editing, uploading and social media handling only", "Transport and video shooting are charged extra as per distance", "Billed monthly"] }
  ],

  process: [
    ["Discover", "We learn your brand, audience and goals."],
    ["Create", "Planning, shooting and editing your content."],
    ["Publish", "Scheduling and posting across your channels."],
    ["Improve", "Review results and refine every month."]
  ],

            about: "ADVOME is a digital marketing and creative agency combining strategy, content, editing and campaign execution to help brands communicate clearly and consistently."
};
