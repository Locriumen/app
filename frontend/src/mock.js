// Mock data for the homepage
export const mockServices = [
  {
    id: 1,
    name: 'Website Development',
    description: 'Custom, responsive websites that drive results and engage your audience',
    icon: 'Monitor',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    pricing: {
      basic: '$2,999',
      premium: '$5,999',
      enterprise: '$12,999'
    },
    portfolioItems: [
      {
        title: 'E-commerce Platform',
        description: 'Modern online store with advanced features',
        image: '/api/placeholder/400/300',
        tags: ['React', 'Node.js', 'MongoDB']
      },
      {
        title: 'Corporate Website',
        description: 'Professional business website with CMS',
        image: '/api/placeholder/400/300',
        tags: ['WordPress', 'PHP', 'MySQL']
      }
    ]
  },
  {
    id: 2,
    name: 'Video Editing',
    description: 'Professional video editing that tells your story and captivates viewers',
    icon: 'Video',
    features: ['4K Quality', 'Motion Graphics', 'Color Grading'],
    pricing: {
      basic: '$499/video',
      premium: '$999/video',
      enterprise: '$2,999/project'
    },
    portfolioItems: [
      {
        title: 'Brand Commercial',
        description: '60-second promotional video for tech startup',
        image: '/api/placeholder/400/300',
        tags: ['After Effects', 'Premiere Pro', 'Cinema 4D']
      },
      {
        title: 'Product Demo',
        description: 'Engaging product demonstration video',
        image: '/api/placeholder/400/300',
        tags: ['Motion Graphics', 'Animation', '3D Rendering']
      }
    ]
  },
  {
    id: 3,
    name: 'Graphic Design',
    description: 'Eye-catching visuals that represent your brand and leave lasting impressions',
    icon: 'Palette',
    features: ['Brand Identity', 'Print Design', 'Digital Assets'],
    pricing: {
      basic: '$299/design',
      premium: '$599/package',
      enterprise: '$1,999/complete brand'
    },
    portfolioItems: [
      {
        title: 'Brand Identity Package',
        description: 'Complete brand identity with logo, colors, and guidelines',
        image: '/api/placeholder/400/300',
        tags: ['Logo Design', 'Brand Guidelines', 'Stationery']
      },
      {
        title: 'Marketing Materials',
        description: 'Brochures, flyers, and digital marketing assets',
        image: '/api/placeholder/400/300',
        tags: ['Print Design', 'Digital Marketing', 'Infographics']
      }
    ]
  },
  {
    id: 4,
    name: 'Social Media Marketing',
    description: 'Strategic campaigns that grow your audience and boost engagement',
    icon: 'Share2',
    features: ['Content Strategy', 'Community Management', 'Analytics'],
    pricing: {
      basic: '$999/month',
      premium: '$1,999/month',
      enterprise: '$4,999/month'
    },
    portfolioItems: [
      {
        title: 'Instagram Growth Campaign',
        description: 'Increased followers by 400% in 3 months',
        image: '/api/placeholder/400/300',
        tags: ['Instagram', 'Content Creation', 'Influencer Marketing']
      },
      {
        title: 'Multi-Platform Strategy',
        description: 'Comprehensive social media management across all platforms',
        image: '/api/placeholder/400/300',
        tags: ['Facebook', 'Twitter', 'LinkedIn', 'TikTok']
      }
    ]
  }
];

export const mockTestimonials = [
  {
    id: 1,
    client: {
      name: 'Sarah Johnson',
      company: 'Tech Startup Inc.',
      position: 'CEO',
      avatar: '/api/placeholder/64/64'
    },
    content: 'Amazing work on our website! The team delivered exactly what we needed and exceeded our expectations. The site is fast, beautiful, and our conversion rates have increased by 150%.',
    rating: 5,
    service: 'Website Development',
    date: '2024-11-15'
  },
  {
    id: 2,
    client: {
      name: 'Mike Chen',
      company: 'Local Restaurant',
      position: 'Owner',
      avatar: '/api/placeholder/64/64'
    },
    content: 'Their video editing skills are top-notch. The promotional video they created for our restaurant has been viewed over 100k times and brought in so many new customers.',
    rating: 5,
    service: 'Video Editing',
    date: '2024-10-22'
  },
  {
    id: 3,
    client: {
      name: 'Emily Davis',
      company: 'Fashion E-commerce',
      position: 'Marketing Director',
      avatar: '/api/placeholder/64/64'
    },
    content: 'The social media strategy they created boosted our engagement by 300% and our sales by 200%. Their team really understands how to connect with audiences.',
    rating: 5,
    service: 'Social Media Marketing',
    date: '2024-12-01'
  },
  {
    id: 4,
    client: {
      name: 'David Rodriguez',
      company: 'Professional Services Firm',
      position: 'Partner',
      avatar: '/api/placeholder/64/64'
    },
    content: 'The brand identity they created perfectly captures our company values. The logo and design materials have received countless compliments from clients.',
    rating: 5,
    service: 'Graphic Design',
    date: '2024-09-18'
  }
];

export const mockStats = [
  { label: 'Happy Clients', value: '500+', icon: 'Users' },
  { label: 'Projects Completed', value: '1,000+', icon: 'Award' },
  { label: 'Years Experience', value: '8+', icon: 'Calendar' },
  { label: 'Average Rating', value: '5.0', icon: 'Star' }
];

export const mockTeam = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'Creative Director',
    bio: 'With over 10 years in digital design, Alex leads our creative vision and ensures every project exceeds expectations.',
    avatar: '/api/placeholder/300/300',
    skills: ['Creative Direction', 'Brand Strategy', 'UI/UX Design'],
    social: {
      linkedin: '#',
      twitter: '#',
      behance: '#'
    }
  },
  {
    id: 2,
    name: 'Maria Garcia',
    position: 'Lead Developer',
    bio: 'Full-stack developer with expertise in modern web technologies. Maria brings ideas to life with clean, efficient code.',
    avatar: '/api/placeholder/300/300',
    skills: ['React', 'Node.js', 'Python'],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'James Wilson',
    position: 'Video Production Specialist',
    bio: 'Award-winning video editor and motion graphics artist with a passion for storytelling through visual media.',
    avatar: '/api/placeholder/300/300',
    skills: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
    social: {
      linkedin: '#',
      youtube: '#',
      vimeo: '#'
    }
  },
  {
    id: 4,
    name: 'Lisa Thompson',
    position: 'Social Media Strategist',
    bio: 'Social media expert who creates engaging campaigns that build communities and drive meaningful interactions.',
    avatar: '/api/placeholder/300/300',
    skills: ['Content Strategy', 'Community Management', 'Analytics'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

export const mockProjects = [
  {
    id: 1,
    title: 'E-commerce Revolution',
    client: 'Fashion Forward Inc.',
    category: 'Website Development',
    description: 'Complete e-commerce solution with custom features, inventory management, and seamless checkout experience.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    results: {
      metric1: { label: 'Sales Increase', value: '250%' },
      metric2: { label: 'Page Speed', value: '95/100' },
      metric3: { label: 'Conversion Rate', value: '8.5%' }
    },
    duration: '3 months',
    testimonial: 'The new website transformed our business completely. Sales have tripled since launch!'
  },
  {
    id: 2,
    title: 'Brand Storytelling Campaign',
    client: 'Sustainable Solutions Co.',
    category: 'Video Editing',
    description: 'Series of promotional videos showcasing the company\'s environmental impact and mission.',
    image: '/api/placeholder/600/400',
    tags: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
    results: {
      metric1: { label: 'Video Views', value: '2.5M+' },
      metric2: { label: 'Engagement Rate', value: '12.8%' },
      metric3: { label: 'Lead Generation', value: '+180%' }
    },
    duration: '6 weeks',
    testimonial: 'The videos perfectly captured our mission and values. Amazing storytelling!'
  }
];

export const mockContactForm = {
  fields: [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'company', label: 'Company Name', type: 'text', required: false },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
    { 
      name: 'service', 
      label: 'Service Interested In', 
      type: 'select', 
      required: true,
      options: [
        { value: '', label: 'Select a service...' },
        { value: 'website-development', label: 'Website Development' },
        { value: 'video-editing', label: 'Video Editing' },
        { value: 'graphic-design', label: 'Graphic Design' },
        { value: 'social-media-marketing', label: 'Social Media Marketing' },
        { value: 'multiple', label: 'Multiple Services' }
      ]
    },
    { 
      name: 'budget', 
      label: 'Project Budget', 
      type: 'select', 
      required: false,
      options: [
        { value: '', label: 'Select budget range...' },
        { value: 'under-5k', label: 'Under $5,000' },
        { value: '5k-10k', label: '$5,000 - $10,000' },
        { value: '10k-25k', label: '$10,000 - $25,000' },
        { value: '25k-50k', label: '$25,000 - $50,000' },
        { value: 'over-50k', label: 'Over $50,000' }
      ]
    },
    { name: 'message', label: 'Project Details', type: 'textarea', required: true, rows: 5 }
  ]
};

// Simulate API responses
export const mockApiResponses = {
  submitContactForm: (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
          ticketId: `TIK-${Date.now()}`
        });
      }, 1500);
    });
  },
  
  subscribeNewsletter: (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Successfully subscribed to our newsletter!'
        });
      }, 1000);
    });
  }
};