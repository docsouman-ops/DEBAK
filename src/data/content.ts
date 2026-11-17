import {
  SolutionItem,
  CapabilityItem,
  ProjectItem,
  WorkShowcaseItem,
  TestimonialItem,
  BlogPostItem,
} from '../types/index.ts';

import brandIdentityImg from '../assets/images/solution_brand_identity_1793955286470.jpg';
import exhibitionBoothImg from '../assets/images/solution_exhibition_booth_1793955286893.jpg';
import immersiveDigitalImg from '../assets/images/solution_immersive_digital_1793955287766.jpg';
import aiTechnologyImg from '../assets/images/solution_ai_technology_1793955288865.jpg';
import growthMarketingImg from '../assets/images/solution_growth_marketing_1793955318295.jpg';
import architectureModernImg from '../assets/images/project_architecture_modern_1793955318843.jpg';
import headphonesProductImg from '../assets/images/project_headphones_product_1793955289952.jpg';
import eventConcertStageImg from '../assets/images/project_event_concert_stage_1793955318540.jpg';
import networkGlobeImg from '../assets/images/contact_golden_network_globe_1793955289523.jpg';
import showcasePavilionImg from '../assets/images/hero_brand_experience_1793955286495.jpg';
import showcaseAutomotiveImg from '../assets/images/showcase_automotive_3d_cgi_1794825539225.jpg';
import blogSpatialAiImg from '../assets/images/blog_spatial_ai_workflow_1794825539082.jpg';
import blogExperientialImg from '../assets/images/blog_experiential_pavilion_1794825539245.jpg';
import blogBrandCraftImg from '../assets/images/blog_brand_craft_print_1794825538825.jpg';

// Local images generated & provided
export const IMAGES = {
  // Public static assets
  debakPortrait: '/assets/aistudio/ChatGPT_Image_Oct_6__2026__08_05_28_PM_4f518e15.png',
  logoEmbossed: '/assets/aistudio/DEBAKS__One_Vision__Endless_Possibilities_94804844.png',
  logoTopExact: '/assets/aistudio/Luxurious_Metallic_Gold_DK_Monogram_trimmed.png',
  goldMonogram: '/assets/aistudio/Luxurious_Metallic_Gold_DK_Monogram_trimmed.png',
  logoOutline: '/assets/aistudio/my_logo_38e6e290.png',
  heroExperience: '/assets/aistudio/Futuristic_Trade_Show_Pavilion_8d67af65.png',
  heroNeuralOrb: '/assets/aistudio/Golden_AI_Neural_Orb_Network_84709d9b.png',
  heroFilmStudio: '/assets/aistudio/Futuristic_Golden_Film_Editing_Studio_8d4c83f3.png',
  heroGrowthEcosystem: '/assets/aistudio/Luxury_Data_Growth_Ecosystem_45be0909.png',
  // Vite-bundled assets
  brandIdentity: brandIdentityImg,
  exhibitionBooth: exhibitionBoothImg,
  immersiveDigital: immersiveDigitalImg,
  aiTechnology: aiTechnologyImg,
  growthMarketing: growthMarketingImg,
  architectureModern: architectureModernImg,
  headphonesProduct: headphonesProductImg,
  eventConcertStage: eventConcertStageImg,
  networkGlobe: networkGlobeImg,
  contactGlobeBg: networkGlobeImg,
  showcasePavilion: showcasePavilionImg,
  showcaseAutomotive: showcaseAutomotiveImg,
  blogSpatialAi: blogSpatialAiImg,
  blogExperiential: blogExperientialImg,
  blogBrandCraft: blogBrandCraftImg,
};

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'build-a-brand',
    title: 'BUILD A BRAND',
    image: IMAGES.brandIdentity,
    iconName: 'Sparkles',
    items: ['Strategy', 'Identity', 'Creative', 'Content'],
    summary: 'Crafting indelible corporate identities, luxury visual languages, and brand positioning systems that resonate globally.'
  },
  {
    id: 'create-an-experience',
    title: 'CREATE AN EXPERIENCE',
    image: IMAGES.exhibitionBooth,
    iconName: 'Compass',
    items: ['Exhibitions', 'Events', 'Immersive', '3D Environments'],
    summary: 'Designing world-class physical pavilions, corporate booths, and multisensory spatial environments for premier global expos.'
  },
  {
    id: 'go-digital',
    title: 'GO DIGITAL',
    image: IMAGES.immersiveDigital,
    iconName: 'Globe',
    items: ['Websites', 'Apps', 'Interactive', 'Automation'],
    summary: 'Developing bespoke web applications, interactive portals, and software platforms powered by modern design engineering.'
  },
  {
    id: 'use-technology',
    title: 'USE TECHNOLOGY',
    image: IMAGES.aiTechnology,
    iconName: 'Cpu',
    items: ['AI Solutions', 'AR / VR', 'Interactive Displays', 'Emerging Tech'],
    summary: 'Deploying agentic AI pipelines, spatial computing, computer vision, and real-time generative media to redefine customer journeys.'
  },
  {
    id: 'grow-and-communicate',
    title: 'GROW & COMMUNICATE',
    image: IMAGES.growthMarketing,
    iconName: 'TrendingUp',
    items: ['Digital Marketing', 'Social Media', 'Campaigns', 'SEO'],
    summary: 'Architecting high-converting digital campaigns, organic acquisition strategies, and omni-channel storytelling.'
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'strategy',
    title: 'Strategy & Consulting',
    iconName: 'Target',
    description: 'Transforming complex brand objectives into executable technical roadmaps and distinct market positioning.',
    deliverables: ['Brand Roadmap', 'Go-To-Market Strategy', 'Tech Feasibility Audits', 'Creative Direction']
  },
  {
    id: 'design',
    title: 'Creative Design',
    iconName: 'PenTool',
    description: 'Bespoke art direction, typography systems, editorial guidelines, and high-craft brand collateral.',
    deliverables: ['Visual Systems', 'Design Systems', 'Packaging & Print', 'Motion Graphics']
  },
  {
    id: '3d-viz',
    title: '3D & Visualization',
    iconName: 'Box',
    description: 'Ultra-photorealistic CGI rendering, architectural visualization, and dynamic product showcases.',
    deliverables: ['Architectural Renders', 'Product CGI', 'Spatial Animation', 'Material Shading']
  },
  {
    id: 'ai-innovation',
    title: 'AI & Innovation',
    iconName: 'Brain',
    description: 'Integrating generative AI workflows, intelligent agents, and interactive machine learning models.',
    deliverables: ['Generative Pipelines', 'Autonomous Agents', 'Custom AI Tooling', 'Predictive Analysis']
  },
  {
    id: 'digital',
    title: 'Digital Solutions',
    iconName: 'Monitor',
    description: 'End-to-end full stack web platforms, mobile responsive applications, and cloud architecture.',
    deliverables: ['Website', 'Web App', 'Performance Optimization', 'Enterprise Portals']
  },
  {
    id: 'immersive',
    title: 'Immersive Experiences',
    iconName: 'Glasses',
    description: 'Spatial computing, mixed reality installations, interactive projection mapping, and WebXR.',
    deliverables: ['Projection Mapping', 'VR/AR Environments', 'Interactive Touchwalls', 'Gesture Controls']
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions & Events',
    iconName: 'Landmark',
    description: 'Turnkey exhibition stands, museum showcases, keynote stages, and experiential brand pavilions.',
    deliverables: ['Booth Architecture', 'Fabrication', 'LED Stage Design', 'On-Site Supervision']
  },
  {
    id: 'marketing',
    title: 'Marketing & Communication',
    iconName: 'BarChart3',
    description: 'Integrated growth marketing, data-driven narrative crafting, and performance media strategy.',
    deliverables: ['Omni-channel Campaigns', 'Social Engagement', 'Conversion Rate Optimization', 'Audience Segmentation']
  },
  {
    id: 'motion-video',
    title: 'Motion Graphics & Video Editing',
    iconName: 'Film',
    description: 'Dynamic motion design, broadcast-grade video editing, title sequences, and visual storytelling.',
    deliverables: ['2D / 3D Motion Design', 'Commercial Video Editing', 'Color Grading & Finishing', 'Kinetic Typography']
  },
  {
    id: 'project-mgmt',
    title: 'Project Management',
    iconName: 'Users',
    description: 'Rigorous end-to-end project execution, agile sprint delivery, stakeholder alignment, and QC.',
    deliverables: ['Timeline Management', 'Vendor Coordination', 'Quality Assurance', 'Budget Governance']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'arch-viz',
    title: 'Architectural Visualization',
    category: '3D / Architecture',
    image: IMAGES.architectureModern,
    gallery: [
      IMAGES.architectureModern,
      '/assets/aistudio/WhatsApp_Image_2026-05-27_at_7.17.59_PM__1__1d677677.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-05-27_at_7.17.55_PM_ec64afb0.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-05-27_at_7.18.00_PM_d7f785a3.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-05-27_at_7.17.54_PM_082e8e39.jpeg',
      '/assets/aistudio/cafe_3cc_b2e1c296.png',
    ],
    client: 'Aurora Residences',
    year: '2025 - 2026',
    description: 'Photorealistic architectural visualization rendering and interactive 3D virtual tour for a premier residential and boutique development.',
    challenge: 'Pre-selling high-value residential units prior to physical ground-breaking required cinematic imagery that conveyed natural dusk lighting and luxury materials.',
    solution: 'Engineered physically based lighting models, photorealistic foliage, and interactive camera viewpoints rendered at 8K resolution.',
    impact: 'Achieved 82% pre-sale commitment within 45 days of campaign launch, outperforming regional development benchmarks.',
    tags: ['3D Modeling', 'Unreal Engine', 'Architectural CGI', 'Lighting Design']
  },
  {
    id: 'exhibition-stand',
    title: 'Exhibition Stand',
    category: 'Experience / Event',
    image: IMAGES.exhibitionBooth,
    gallery: [IMAGES.exhibitionBooth],
    client: 'Saimo Global Tech',
    year: '2025',
    description: 'Turnkey architectural exhibition stand with illuminated organic wooden canopy, interactive touch podiums, and VIP lounge.',
    challenge: 'Standing out in a crowded 50,000 sq ft international expo hall while accommodating both high-traffic product demos and private VIP negotiations.',
    solution: 'Created an open-flow biometric pavilion with overhead LED ribbon lighting and acoustic sound baffles for private conversation zones.',
    impact: 'Awarded Best In Show at International Industry Expo; generated over 1,400 qualified executive leads.',
    tags: ['Spatial Design', 'Exhibition Stand', 'Lighting', 'Event Tech']
  },
  {
    id: 'immersive-digital',
    title: 'Immersive Digital Experience',
    category: 'Digital / Interactive / 3D',
    image: IMAGES.immersiveDigital,
    gallery: [IMAGES.immersiveDigital],
    client: 'Synapse Future Labs',
    year: '2026',
    description: '360-degree interactive digital sensory tunnel responding to visitor footsteps and body gestures with flowing bioluminescent algorithms.',
    challenge: 'Creating zero-latency real-time generative particle fluid simulations across 24 high-resolution curved LED screens.',
    solution: 'Custom GPU shader pipeline coupled with ultra-wide LiDAR sensor arrays tracking simultaneous pedestrian movements.',
    impact: 'Over 25,000 interactive walkthroughs during a 3-week exhibition with an average dwell time of 6.4 minutes.',
    tags: ['Generative Art', 'LiDAR Tracking', 'WebGL / Shaders', 'Touchless UI']
  },
  {
    id: 'product-viz',
    title: 'Product Visualization',
    category: '3D / Product / AI',
    image: IMAGES.headphonesProduct,
    gallery: [IMAGES.headphonesProduct],
    client: 'Audio Veritas Labs',
    year: '2025',
    description: 'Studio product CGI and interactive 3D configurator for flagship high-fidelity audiophile headphones with bespoke leather and brass finishes.',
    challenge: 'Capturing tactile textural fidelity of hand-stitched leather, brushed metallic brass, and acoustic mesh without physical prototypes.',
    solution: 'Micro-displacement surface shaders, studio rim lighting, and real-time WebGL asset export for web customization.',
    impact: 'Boosted online conversion by 46% compared to previous static 2D product catalogs.',
    tags: ['Product CGI', 'Substance Painter', 'Commercial Rendering', 'E-Commerce 3D']
  },
  {
    id: 'event-tech',
    title: 'Event & Technology',
    category: 'Event / Experience',
    image: IMAGES.eventConcertStage,
    gallery: [IMAGES.eventConcertStage],
    client: 'Global Nexus Keynote',
    year: '2026',
    description: 'Stage architecture, kinetic lighting programming, and synchronized dual LED backdrops for an arena-scale 12,000 attendee keynote.',
    challenge: 'Seamlessly orchestrating multi-camera broadcast feeds, live interactive polling, and theatrical laser cues across a 3-day conference.',
    solution: 'Centralized show control system linking SMPTE timecode with live stage visuals, kinetic winches, and spatial audio.',
    impact: 'Broadcast live to 180,000 concurrent global streamers with 99.99% technical uptime across 18 sessions.',
    tags: ['Stage Production', 'Kinetic Lighting', 'Live Broadcast', 'Keynote Direction']
  }
];

export const FEATURED_VIDEOS: ProjectItem[] = [
  {
    id: 'video-arch-walkthrough',
    title: 'Architectural Walkthrough',
    category: '3D / Architecture',
    image: IMAGES.architectureModern,
    video: '/assets/aistudio/Cove_0afa6276.mp4',
    client: '',
    year: '2026',
    description: '',
    challenge: '',
    solution: '',
    impact: '',
    tags: []
  },
  {
    id: 'video-3d-turntable',
    title: '3D Industrial Asset Turntable',
    category: '3D / Product',
    image: IMAGES.showcaseAutomotive,
    video: '/assets/aistudio/WhatsApp_Video_2026-05-27_at_7.17.23_PM_80317184.mp4',
    client: '',
    year: '2026',
    description: '',
    challenge: '',
    solution: '',
    impact: '',
    tags: []
  },
  {
    id: 'video-event-reel',
    title: 'Commercial Motion & Video Edit',
    category: 'Experience / Event',
    image: '',
    video: '/assets/aistudio/28-10-B9V18_6713facc.mp4',
    client: '',
    year: '2026',
    description: '',
    challenge: '',
    solution: '',
    impact: '',
    tags: []
  }
];

export const EXTRA_GALLERY_IMAGES: ProjectItem[] = [
  {
    id: 'extra-arch-aerial',
    title: 'Architectural Visualization',
    category: '3D / Architecture',
    image: '/assets/aistudio/WhatsApp_Image_2026-05-27_at_7.17.59_PM__1__1d677677.jpeg',
    client: '',
    year: '2026',
    description: '',
    challenge: '',
    solution: '',
    impact: '',
    tags: []
  },
  {
    id: 'extra-arch-exterior',
    title: 'Architectural Visualization',
    category: '3D / Architecture',
    image: '/assets/aistudio/WhatsApp_Image_2026-05-27_at_7.17.55_PM_ec64afb0.jpeg',
    client: '',
    year: '2026',
    description: '',
    challenge: '',
    solution: '',
    impact: '',
    tags: []
  },
  {
    id: 'extra-arch-rooftop',
    title: 'Architectural Visualization',
    category: '3D / Architecture',
    image: '/assets/aistudio/WhatsApp_Image_2026-05-27_at_7.18.00_PM_d7f785a3.jpeg',
    client: '',
    year: '2026',
    description: '',
    challenge: '',
    solution: '',
    impact: '',
    tags: []
  },
  {
    id: 'extra-arch-siteplan',
    title: 'Architectural Visualization',
    category: '3D / Architecture',
    image: '/assets/aistudio/WhatsApp_Image_2026-05-27_at_7.17.54_PM_082e8e39.jpeg',
    client: '',
    year: '2026',
    description: '',
    challenge: '',
    solution: '',
    impact: '',
    tags: []
  },
  {
    id: 'extra-arch-cafe',
    title: 'Architectural Visualization',
    category: '3D / Interior',
    image: '/assets/aistudio/cafe_3cc_b2e1c296.png',
    client: '',
    year: '2026',
    description: '',
    challenge: '',
    solution: '',
    impact: '',
    tags: []
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: 'CREATIVE THINKER',
    iconName: 'Lightbulb',
    description: 'Synthesizing conceptual originality with structured design systems to craft memorable brand narratives.'
  },
  {
    title: 'TECHNOLOGY ENTHUSIAST',
    iconName: 'Cpu',
    description: 'Relentlessly exploring emerging technologies, real-time 3D, and AI to discover fresh creative frontiers.'
  },
  {
    title: 'PROBLEM SOLVER',
    iconName: 'Puzzle',
    description: 'Transforming ambiguous technical and design constraints into elegant, high-impact functional solutions.'
  },
  {
    title: 'PEOPLE CONNECTOR',
    iconName: 'Users',
    description: 'Fostering seamless collaboration between cross-functional teams, clients, and multidisciplinary craftsmen.'
  },
  {
    title: 'RESULTS DRIVEN',
    iconName: 'Award',
    description: 'Keeping real-world business outcomes, execution quality, and client return on investment front and center.'
  }
];

export const CONTACT_INFO = {
  name: 'DEBAKS',
  title: 'Creative & Technology Consultant',
  email: 'debthestar@gmail.com',
  phone: '+91 9830444188',
  location: 'Kolkata, India',
  whatsappUrl: 'https://wa.me/919830444188',
  linkedinUrl: 'https://linkedin.com/in/debaks',
  experienceYears: '10+',
  projectsCount: '50+',
  clientsScale: 'GLOBAL'
};

export const WORK_SHOWCASE: WorkShowcaseItem[] = [
  {
    id: 'showcase-arch-walkthrough',
    index: '01',
    title: 'Architectural Walkthrough',
    discipline: 'Architectural CGI / Walkthrough',
    filterKey: '3d',
    client: 'Redifice Private Residences',
    year: '2026',
    image: IMAGES.architectureModern,
    video: '/assets/aistudio/Cove_0afa6276.mp4',
    headline: 'Cinematic Exterior & Interior Spatial Storytelling',
    summary: 'Full photorealistic 3D architectural walkthrough capturing twilight facade reflections, landscaped rooftop decks, double-height lobby craft, and bespoke residence interiors prior to handover.',
    deliverables: ['3D Architectural Walkthrough', 'Interior Lighting Studies', 'Amenity Flythroughs', 'Sales Gallery Film'],
    metricValue: '82%',
    metricLabel: 'Pre-Sale Commitment in 45 Days'
  },
  {
    id: 'showcase-3d-turntable',
    index: '02',
    title: '3D Industrial Asset Turntable',
    discipline: '3D Visualization / Look-Dev',
    filterKey: '3d',
    client: 'Industrial Engineering Studio',
    year: '2026',
    image: IMAGES.showcaseAutomotive,
    video: '/assets/aistudio/WhatsApp_Video_2026-05-27_at_7.17.23_PM_80317184.mp4',
    headline: 'Precision Hard-Surface Modeling & PBR Material Fidelity',
    summary: 'Real-time 360-degree turntable showcase for complex heavy-machinery assemblies featuring brushed steel, copper manifold detailing, and physically based studio shading.',
    deliverables: ['Hard-Surface 3D Modeling', 'PBR Texture Shading', '360 Turntable Render', 'Interactive Web Asset'],
    metricValue: '360°',
    metricLabel: 'Real-Time Inspection Ready'
  },
  {
    id: 'showcase-motion-edit',
    index: '03',
    title: 'Commercial Motion & Video Edit',
    discipline: 'Motion Graphics / Video Editing',
    filterKey: 'brand',
    client: 'Flipkart Play',
    year: '2026',
    image: '',
    video: '/assets/aistudio/28-10-B9V18_6713facc.mp4',
    isVerticalVideo: true,
    headline: 'High-Retention Social Narrative & Kinetic Typography',
    summary: 'Fast-paced commercial fashion edit blending rhythmic camera transitions, clean kinetic title cards, color grading, and crisp sound design tailored for vertical mobile campaigns.',
    deliverables: ['Commercial Video Edit', 'Kinetic Typography', 'Color Grading & Finishing', 'Social Aspect Mastering'],
    metricValue: '+46%',
    metricLabel: 'Viewer Retention Lift'
  },
  {
    id: 'showcase-nexus-pavilion',
    index: '04',
    title: 'Nexus Flagship Experience Pavilion',
    discipline: 'Spatial Design / Exhibition',
    filterKey: 'spatial',
    client: 'Nexus Luxury Automotive',
    year: '2026',
    image: IMAGES.showcasePavilion,
    headline: 'Two-Tier Brand Architecture Built for Sensory Immersion',
    summary: 'Designed an expansive multi-level exhibition environment combining monolithic perimeter LED storytelling, elevated VIP mezzanine lounges, and synchronized architectural light frames.',
    deliverables: ['Spatial Architecture', 'LED Content Direction', 'VIP Lounge Experience', 'Turnkey Production'],
    metricValue: '42,000',
    metricLabel: 'Expo Visitor Engagements'
  },
  {
    id: 'showcase-synapse-tunnel',
    index: '05',
    title: 'Synapse Biometric Sensory Tunnel',
    discipline: 'Interactive Digital / Shaders',
    filterKey: 'spatial',
    client: 'Synapse Future Labs',
    year: '2026',
    image: IMAGES.immersiveDigital,
    headline: 'Zero-Latency Fluid Art Responding to Human Motion',
    summary: 'Curved 360-degree LED corridor driven by real-time GPU particle shaders and overhead LiDAR sensors that ripple with every step visitors take through the installation.',
    deliverables: ['Custom GLSL Shaders', 'LiDAR Motion Tracking', 'Spatial Soundscape', 'Show Control Engine'],
    metricValue: '6.4 Min',
    metricLabel: 'Average Visitor Dwell Time'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-aurora',
    quote: 'Before partnering with Debak, our off-plan buyers struggled to picture the warmth and material depth of our timber-and-glass facade. His twilight 3D suite changed the conversation overnight — we closed 82% of our inventory within 45 days of launch.',
    author: 'Raghavendra Mehta',
    role: 'Director of Developments',
    company: 'Aurora Urban Living',
    projectType: 'Architectural Visualization',
    outcome: '82% Pre-Sale Commitment in 45 Days'
  },
  {
    id: 't-saimo',
    quote: 'We needed an exhibition pavilion that could handle heavy trade floor traffic while still feeling calm and executive inside. Debak bridged architectural design, lighting engineering, and vendor execution without a single bottleneck, earning us Best in Show.',
    author: 'Elena Lindqvist',
    role: 'VP of Global Brand Experience',
    company: 'Saimo Global Tech',
    projectType: 'Exhibition Stand & Strategy',
    outcome: '1,400+ Qualified Executive Leads'
  },
  {
    id: 't-veritas',
    quote: 'Traditional studio photography kept delaying our product drops whenever hardware tolerances shifted. Debak built a digital-twin CGI workflow that matched physical brass and leather down to the stitch, lifting our direct-to-consumer conversion by 46%.',
    author: 'Marcus Vance',
    role: 'Head of Product & Industrial Design',
    company: 'Audio Veritas Labs',
    projectType: 'Product CGI & Configurator',
    outcome: '+46% E-Commerce Conversion Lift'
  },
  {
    id: 't-synapse',
    quote: 'Rarely do you find one consultant who speaks fluently with shader engineers and brand storytellers alike. Debak took full ownership of our 360-degree interactive tunnel from concept sketch to on-site LiDAR calibration across 25,000 walkthroughs.',
    author: 'Priya Nair',
    role: 'Chief Innovation Officer',
    company: 'Synapse Future Labs',
    projectType: 'Immersive Digital Experience',
    outcome: '25,000+ Interactive Walkthroughs'
  }
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'bridging-3d-and-ai-pipelines',
    title: 'Bridging Real-Time 3D & Generative AI Without Losing Creative Control',
    category: 'AI Workflows',
    date: 'October 2026',
    readTime: '6 min read',
    author: 'DEBAKS',
    image: IMAGES.blogSpatialAi,
    excerpt: 'Why deterministic 3D geometry paired with node-based AI look-development outperforms pure prompt generation for commercial brand assets.',
    content: [
      'Most generative AI experiments fail in commercial production for one simple reason: clients need repeatability. When a creative director approves an angle, material spec, or brand silhouette, changing the lighting cannot alter the geometry of the product itself.',
      'Over the past two years, our studio workflow has shifted toward hybrid deterministic pipelines. We anchor every scene in clean CAD or Unreal Engine geometry—locking camera lenses, proportions, and physical proportions—before passing depth, normal, and lighting passes into controlled AI look-development nodes.',
      'This approach cuts early-stage concept exploration time by more than half while preserving complete art-direction authority. Instead of gambling on unpredictable outputs, teams iterate rapidly on mood, atmosphere, and material storytelling while staying 100% faithful to engineering specs.'
    ],
    keyTakeaways: [
      'Lock product geometry and camera optics in 3D before applying generative look-dev.',
      'Use depth, clay, and normal passes as strict structural guardrails.',
      'Treat AI as an accelerator for lighting studies and material exploration—not a replacement for craft.'
    ]
  },
  {
    id: 'architecture-of-attention-expos',
    title: 'The Architecture of Attention: Designing Trade Show Pavilions People Remember',
    category: 'Experiential',
    date: 'September 2026',
    readTime: '5 min read',
    author: 'DEBAKS',
    image: IMAGES.blogExperiential,
    excerpt: 'How sightlines, warm architectural contrast, and acoustic zoning transform crowded expo booths into high-converting brand sanctuaries.',
    content: [
      'Walk any major international trade show and you notice an immediate pattern: almost every booth shouts at the exact same brightness and frequency. When every wall is an over-saturated screen, visitors experience sensory fatigue within ten minutes.',
      'The most memorable brand pavilions use restraint as their primary magnet. By pairing deep matte architectural surfaces with deliberate warm grazing light and wide, unobstructed sightlines, a space feels calm and authoritative—inviting visitors to step inside out of curiosity rather than obligation.',
      'Inside the footprint, spatial zoning does the heavy lifting. High-energy interactive displays belong along the perimeter to capture passing traffic, while acoustically buffered lounges sit deeper within the structure so leadership teams can hold substantive commercial conversations.'
    ],
    keyTakeaways: [
      'Contrast and warm architectural lighting outperform max-brightness LED clutter.',
      'Design clear perimeter hooks alongside private acoustic zones for executive meetings.',
      'Plan visitor circulation paths around natural dwell points rather than dead-end corners.'
    ]
  },
  {
    id: 'tactile-brand-systems-digital-age',
    title: 'Why Tactile Craft Still Defines Luxury Brand Systems in a Screen-First World',
    category: 'Brand Strategy',
    date: 'August 2026',
    readTime: '4 min read',
    author: 'DEBAKS',
    image: IMAGES.blogBrandCraft,
    excerpt: 'Translating the discipline of foil stamping, typography proportion, and physical material palettes into modern digital interfaces.',
    content: [
      'A great brand identity should feel just as intentional embossed on heavy cotton stock as it does rendered on an OLED screen. Too often, digital-first identities feel weightless because they lack material discipline.',
      'When we build a brand system at DEBAKS, we start with proportion, negative space, and surface hierarchy. How does a monogram behave at 28 pixels in a navigation header versus three meters tall on a dark titanium monolith?',
      'By thinking across both physical materials—brushed brass, smoked glass, matte slate—and digital motion timing, a brand gains unmistakable coherence. Every touchpoint reinforces the same quiet confidence.'
    ],
    keyTakeaways: [
      'Test brand marks across micro-digital sizes and architectural scales simultaneously.',
      'Use disciplined surface contrast and typography spacing instead of decorative clutter.',
      'Bridge physical material sensibilities with responsive digital micro-interactions.'
    ]
  }
];
