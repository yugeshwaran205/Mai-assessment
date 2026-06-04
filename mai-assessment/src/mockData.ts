import { ProjectJob, StoneOffcut, BlogArticle, Testimonial } from './types';

export const POPULAR_SERVICES = [
  'Worktop Fitters',
  'Stone Repairs',
  'Worktop Fabricator',
  'Local Wall Tilers',
  'Stone Offcuts',
  'Trusted Stonemason',
  'Kitchen Installers',
  'Bathroom Designers',
  'Firehearth Fitters',
  'Remnant Slabs',
  'Wall Claddings',
  'Bathroom Tiling'
];

export const MOCK_PROJECTS: ProjectJob[] = [
  {
    id: 'proj-1',
    title: 'Large format tiles - 110 m2',
    budget: '£3,200',
    postcode: 'SW1A',
    category: 'Local Wall Tilers',
    description: 'Require a qualified tiling professional to lay 110 square meters of high-end, large-format porcelain tiles across a ground floor kitchen and lounge open area. Underfloor heating is already installed. Levelling system required.',
    datePosted: '2 hours ago',
    bidsCount: 6,
    material: 'Porcelain (1200x600mm)',
    status: 'Bidding Open'
  },
  {
    id: 'proj-2',
    title: 'Carrara Marble Kitchen Worktop Restoration',
    budget: '£450',
    postcode: 'M4',
    category: 'Stone Repairs',
    description: 'Our beautiful Carrara marble kitchen slab has developed minor acid etching and a fine scratch near the sink. Looking for a specialized stone mason or restoration expert to polish, reseal and buff back to original beauty.',
    datePosted: '5 hours ago',
    bidsCount: 3,
    material: 'Carrara Marble',
    status: 'Matched'
  },
  {
    id: 'proj-3',
    title: 'Quartz L-Shape Worktop Installation',
    budget: '£1,850',
    postcode: 'B1',
    category: 'Worktop Fabricator',
    description: 'Need templates, fabrication, and clean installation of pre-selected Calacatta gold vein quartz slabs for an L-shaped counter and matching kitchen island. Splashback option also included.',
    datePosted: '1 day ago',
    bidsCount: 8,
    material: 'Calacatta Gold Quartz',
    status: 'Completed'
  },
  {
    id: 'proj-4',
    title: 'Bespoke Slate Fireplace Hearth Fitting',
    budget: '£650',
    postcode: 'EH1',
    category: 'Firehearth Fitters',
    description: 'Fitting of a custom, pre-cut dark slate fireplace hearth slab onto dry bed sand cement layout. Stone surface must be sealed with professional impregnating sealer to resist soot stains.',
    datePosted: '3 hours ago',
    bidsCount: 2,
    material: 'Natural Welsh Slate',
    status: 'Bidding Open'
  },
  {
    id: 'proj-5',
    title: 'Luxury Walk-in Shower Enclosure Tiling',
    budget: '£1,200',
    postcode: 'LS1',
    category: 'Bathroom Tiling',
    description: 'Expert tiler needed for laying textured ceramic wall cladding tiles in a new wetroom bathroom. Tanking and waterproofing membranes have been installed. Precision cutting around pipe fittings is essential.',
    datePosted: '1 day ago',
    bidsCount: 5,
    material: 'Textured Ceramic',
    status: 'Bidding Open'
  },
  {
    id: 'proj-6',
    title: 'Granite Tabletop Edge Recutting and Polishing',
    budget: '£300',
    postcode: 'G1',
    category: 'Trusted Stonemason',
    description: 'A 2m circular granite surface requires its edge profiled from a square edge to a clean half-bullnose shape. Can be done on-site or picked up and delivered back to the client.',
    datePosted: '3 days ago',
    bidsCount: 4,
    status: 'Completed',
    material: 'Absolute Black Granite'
  }
];

export const MOCK_OFFCUTS: StoneOffcut[] = [
  {
    id: 'slab-1',
    material: 'Quartz',
    color: 'Calacatta White & Gold Veined',
    length: 1850,
    width: 650,
    thickness: 20,
    price: 180,
    location: 'London (E1)',
    supplierName: 'Capital Stone Fabricators Ltd',
    supplierRating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80',
    availability: 'Available'
  },
  {
    id: 'slab-2',
    material: 'Granite',
    color: 'Absolute Black Polish',
    length: 1400,
    width: 900,
    thickness: 30,
    price: 210,
    location: 'Manchester (M12)',
    supplierName: 'Northern Slab & Quartz Co.',
    supplierRating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    availability: 'Available'
  },
  {
    id: 'slab-3',
    material: 'Marble',
    color: 'Bianco Carrara Premium',
    length: 1200,
    width: 750,
    thickness: 20,
    price: 250,
    location: 'Birmingham (B4)',
    supplierName: 'Midlands Masonry & Supplies',
    supplierRating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
    availability: 'Reserved'
  },
  {
    id: 'slab-4',
    material: 'Ceramic / Dekton',
    color: 'Industrial Grey Oxide Concrete',
    length: 1600,
    width: 500,
    thickness: 12,
    price: 140,
    location: 'Bristol (BS2)',
    supplierName: 'West Country Surface Solutions',
    supplierRating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
    availability: 'Available'
  }
];

export const MOCK_BLOGS: BlogArticle[] = [
  {
    id: 'blog-1',
    title: 'Window Sill Replacement: Costs, Mistakes & Best Options in the UK',
    category: 'Guides & Costs',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80',
    date: 'May 28, 2026',
    summary: 'A complete breakdown of UK stone sill replacement costs, how to avoid major waterproofing installer failures, and choosing between Slate, Granite, and Sandstone.'
  },
  {
    id: 'blog-2',
    title: 'Stone Sill Care to Keep Window Sills Strong and Stylish',
    category: 'Maintenance',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=500&q=80',
    date: 'May 25, 2026',
    summary: 'Stones exposed to the weather eventually degrade without sealing. Discover the key chemical agents, sealers, and simple routines that keep UK masonry intact.'
  },
  {
    id: 'blog-3',
    title: 'How to Detect and Fix Window Sill Installation Errors?',
    category: 'Homeowner Advice',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=500&q=80',
    date: 'May 18, 2026',
    summary: 'Water pooling on your stone windowsills? Damp leaking into internal drywall? Here is how to diagnose incorrect drip grooves and apply masonry fixes before mildew spreads.'
  },
  {
    id: 'blog-4',
    title: 'Simple & Best Window Sill Decor Ideas for You',
    category: 'Design & Inspiration',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=500&q=80',
    date: 'May 10, 2026',
    summary: 'Maximize the natural aesthetic of quartz or custom slab offcuts. Transform narrow sills into plant alcoves, sleek reading desks, or minimalist luxury focal points.'
  },
  {
    id: 'blog-5',
    title: 'How to Become a Plumber in the UK? Latest Guide',
    category: 'Career Advice',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80',
    date: 'May 02, 2026',
    summary: 'Explore full trade pathways including NVQs, City & Guilds qualifications, plumbing apprenticeships, and average starting wages across London vs regional UK cities.'
  },
  {
    id: 'blog-6',
    title: 'Why Do Some Pay a Lower Dishwasher Installation Cost Than Others?',
    category: 'Tendering & Quotes',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=500&q=80',
    date: 'Apr 25, 2026',
    summary: 'Understanding the differences between integrated and freestanding appliances, existing pipework ready-checks, and how to source verified local tradesmen.'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    rating: 5,
    content: 'We needed a custom quartz countertop but couldn\'t afford full slab pricing. MAI matched us with a local fabricator who had a premium offcut that fit our measurements. Saved over £800 and it looks perfect!',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    location: 'Surrey, UK',
    verified: true
  },
  {
    id: 'test-2',
    name: 'David Thornton',
    role: 'Trader',
    company: 'Thornton Masons & Sculpting',
    rating: 5,
    content: 'This platform changed my business. Instead of spending thousands on lead-gen ads, MAI sends local jobs straight to my screen. The milestone payment system protects both my client and my team.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    location: 'Leeds, UK',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Marcus Vance',
    role: 'Trader',
    company: 'Vance Stone Restoration',
    rating: 5,
    content: 'Outstanding app. The AI tool details and stone specifications are precise, making quoting highly accurate. Milestone secure locks have made client negotiations completely seamless.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    location: 'London, UK',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Eleanor Carter',
    role: 'Homeowner',
    rating: 5,
    content: 'Posted an urgent request for granite repair after standard kitchen fitters cracked our stove cutout. Got 3 bids within an hour from vetted masons. Absolute lifesaver!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    location: 'Birmingham, UK',
    verified: true
  }
];
