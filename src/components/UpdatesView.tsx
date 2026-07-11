import React, { useState, useEffect } from 'react';
import { NEWS } from '../data';
import { 
  Newspaper, Plus, Search, Calendar, User, Tag, 
  X, Check, FileText, Image, ArrowRight, Filter, 
  ChevronRight, Sparkles, BookOpen, Lock, Unlock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  image: string;
  author?: string;
}

// Preset Unsplash images that match the student-maker theme perfectly
const IMAGE_PRESETS = [
  {
    name: 'Electronics & Soldering',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Robot Testing',
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Science Outreach',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Coding & Satellite Hardware',
    url: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Collaborative Workshop',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600'
  }
];

export default function UpdatesView() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Admin State Gating
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('fsm_isAdmin') === 'true';
  });
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');
  
  // Modal state for reading an article
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);
  
  // Editor panel toggle & form state
  const [isPublishingOpen, setIsPublishingOpen] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('General');
  const [formAuthor, setFormAuthor] = useState('Siddharth Mehta');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formContent, setFormContent] = useState('');
  const [selectedPresetImage, setSelectedPresetImage] = useState(IMAGE_PRESETS[0].url);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [showCustomImage, setShowCustomImage] = useState(false);
  
  // Notification banner
  const [notification, setNotification] = useState<string | null>(null);

  // Initialize and load articles from localStorage (synced with the home page)
  useEffect(() => {
    const saved = localStorage.getItem('fsm_news_articles');
    if (saved) {
      setArticles(JSON.parse(saved));
    } else {
      // Seed with default articles from data.ts and append rich detailed contents
      const seeded: NewsArticle[] = NEWS.map(article => {
        let content = '';
        if (article.id === 'n1') {
          content = `We are absolutely thrilled to announce that Fremont Student Makers has been selected as a recipient of the 2026 East Bay Municipal Technology Grant! This $5,000 award represents a massive step forward for our student-led engineering programs.

The grant funds will go directly into procuring advanced, high-efficiency solar cells, rechargeable LiFePO4 battery management boards, and high-performance ESP32-S3 microcontrollers for our upcoming environmental sensor rovers.

### How the Funds Will Be Distributed:
1. **Solar Array Components**: Procuring weather-sealed, lightweight solar assemblies for continuous outdoor telemetry.
2. **Microcontroller Kits**: Purchasing 15 additional development boards, enabling students from underfunded local high schools to program real hardware.
3. **High-Accuracy Sensors**: Integrating premium CO2 and volatile organic compound (VOC) sensor blocks onto our active rover frames.

"We believe that students shouldn't have to wait until college to design and deploy complex hardware," said Siddharth Mehta, Executive Director of FSM. "This grant validates our efforts to bring real-world, safety-first fabrication tools directly to high schoolers."

Our team will begin assembly on our second-generation IoT Environmental Rover next month. We owe a huge thank you to the Fremont Community Foundation for believing in student-led technological innovation!`;
        } else if (article.id === 'n2') {
          content = `Our FTC competition team, Take 3 Robotics, achieved an outstanding victory at the East Bay League Qualifier match this past weekend! 

Competing against 18 teams from across Northern California, our robot successfully performed multiple fully autonomous navigation loops, utilizing on-board computer vision to recognize obstacle markers and track paths.

### Technical Highlights of the Win:
- **Computer Vision Pipeline**: Developed a custom OpenCV tracking algorithm running on an integrated coprocessor, reducing lag to under 8ms.
- **Autonomous Navigation**: Programmed a robust odometry system using three independent dead-wheel encoders to calculate precise coordinates on the field.
- **Advanced Suspension**: Implemented a custom 3D-printed independent double-wishbone suspension mechanism to absorb landing impacts.

The victory guarantees Take 3 Robotics a slot at the regional championship tournament in Sacramento. We want to congratulate our drive team and software designers for spending countless hours in the workshop calibrating sensor parameters. The hard work has officially paid off!`;
        } else if (article.id === 'n3') {
          content = `Building a community of makers starts by inspiring the next generation. This past Saturday, Fremont Student Makers hosted its first annual hands-on Arduino & Soldering Day at Centerville Middle School.

Over 120 students and their parents joined us to demystify electronics and program their very first hardware logic.

### Activities At the Fair:
- **Soldering Stations**: FSM high school mentors provided 1-on-1 supervision, teaching basic safety, soldering iron handling, and wire connection.
- **Arduino Playground**: Kids configured simple photoresistors to trigger RGB LED alert sequences, completing their first feedback loop in C++.
- **Rover Trial Runs**: Younger students took control of our environmental sensing rovers, learning how telemetry is sent over local sub-GHz radios.

"It was incredible to see how quickly middle school students could transition from never seeing a circuit board to editing their first coding loops," noted Nisha Patil, Outreach Director. "Our goal is to build an active maker chapter in every Fremont school."

We would like to extend our sincere appreciation to the teachers and administrators at Centerville Middle School for partnering with us to make this event fully accessible and free for all attendees.`;
        } else {
          content = article.excerpt;
        }

        return {
          ...article,
          author: article.id === 'n1' ? 'Siddharth Mehta' : article.id === 'n2' ? 'Chloe Zhang' : 'Nisha Patil',
          content
        };
      });
      setArticles(seeded);
      localStorage.setItem('fsm_news_articles', JSON.stringify(seeded));
    }
  }, []);

  // Handle Admin Passcode Login
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'fsm2026' || passcode.trim().toLowerCase() === 'admin') {
      setIsAdmin(true);
      localStorage.setItem('fsm_isAdmin', 'true');
      setShowAdminModal(false);
      setPasscode('');
      setPasscodeError('');
      setNotification('Logged in as administrator');
      setTimeout(() => setNotification(null), 3000);
    } else {
      setPasscodeError('Invalid credentials. (Hint: use fsm2026)');
    }
  };

  // Handle Admin Logout
  const handleAdminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('fsm_isAdmin');
    setIsPublishingOpen(false);
    setNotification('Logged out of admin mode');
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter unique categories
  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

  // Handle publishing a new update
  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formExcerpt.trim() || !formContent.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    const finalImage = showCustomImage ? (customImageUrl.trim() || IMAGE_PRESETS[0].url) : selectedPresetImage;

    const newArticle: NewsArticle = {
      id: 'n_' + Date.now(),
      title: formTitle,
      category: formCategory,
      author: formAuthor,
      excerpt: formExcerpt,
      content: formContent,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      image: finalImage
    };

    const updated = [newArticle, ...articles];
    setArticles(updated);
    localStorage.setItem('fsm_news_articles', JSON.stringify(updated));

    // Reset Form
    setFormTitle('');
    setFormExcerpt('');
    setFormContent('');
    setIsPublishingOpen(false);

    // Trigger toast
    setNotification('Your program update has been published successfully!');
    setTimeout(() => setNotification(null), 4000);
  };

  // Handle deleting an article (Admin functionality)
  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // prevent opening detailed modal
    if (confirm('Are you sure you want to remove this update?')) {
      const updated = articles.filter(a => a.id !== id);
      setArticles(updated);
      localStorage.setItem('fsm_news_articles', JSON.stringify(updated));
      setNotification('Article removed.');
      setTimeout(() => setNotification(null), 3000);
    }
  };

  // Filter & Search articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.content || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.author || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full py-12 md:py-20 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Floating Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 text-xs sm:text-sm font-bold border border-emerald-500"
            >
              <Check className="w-5 h-5 shrink-0" />
              <span>{notification}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              News & Media Feed
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 mt-6 tracking-tight">
              FSM Program Updates
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Read real-time journals, technical development updates, grant announcements, and outreach stories written directly by our student makers.
            </p>
          </div>

          {/* Trigger to publish new update - Gated by isAdmin */}
          {isAdmin ? (
            <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
                <Unlock className="w-3.5 h-3.5" /> Staff Active
              </span>
              <button
                onClick={() => setIsPublishingOpen(!isPublishingOpen)}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-md shadow-blue-500/10 font-bold text-xs sm:text-sm transition-all cursor-pointer group shrink-0"
              >
                <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                Post Program Update
              </button>
              <button
                onClick={handleAdminLogout}
                className="px-3.5 py-2.5 text-xs text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-xl font-bold transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAdminModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl border border-slate-200 font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0 self-start md:self-end"
            >
              <Lock className="w-3.5 h-3.5" />
              Staff Portal
            </button>
          )}
        </div>

        {/* Publishing Panel (Collapsible Drawer Form) */}
        <AnimatePresence>
          {isPublishingOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-md"
            >
              <form onSubmit={handlePublish} className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    Write a Real Program Update
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsPublishingOpen(false)}
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Article Title</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. FSM Launches Microclimate Mesh Grid 1"
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Category</label>
                        <select
                          value={formCategory}
                          onChange={(e) => setFormCategory(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                        >
                          <option value="General">General</option>
                          <option value="Grant">Grant</option>
                          <option value="Robotics">Robotics</option>
                          <option value="Outreach">Outreach</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Satellite">Satellite</option>
                          <option value="Sponsorship">Sponsorship</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Author</label>
                        <select
                          value={formAuthor}
                          onChange={(e) => setFormAuthor(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                        >
                          <option value="Siddharth Mehta">Siddharth Mehta</option>
                          <option value="Chloe Zhang">Chloe Zhang</option>
                          <option value="Marcus Vance">Marcus Vance</option>
                          <option value="Nisha Patil">Nisha Patil</option>
                          <option value="Guest Writer">Guest Advisor / Partner</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Short Excerpt (1-2 sentences)</label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Provide a quick summary of this update for the card listing..."
                        value={formExcerpt}
                        onChange={(e) => setFormExcerpt(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* Right Column Image Selector */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cover Image Selection</label>
                      <button
                        type="button"
                        onClick={() => setShowCustomImage(!showCustomImage)}
                        className="text-xs text-blue-600 hover:text-blue-700 font-bold"
                      >
                        {showCustomImage ? 'Choose Preset Image' : 'Provide Custom URL'}
                      </button>
                    </div>

                    {!showCustomImage ? (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 max-h-[145px] overflow-y-auto pr-1">
                          {IMAGE_PRESETS.map((preset, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedPresetImage(preset.url)}
                              className={`p-2 rounded-lg border text-left flex items-center gap-2 transition-all ${
                                selectedPresetImage === preset.url
                                  ? 'border-blue-500 bg-blue-50/50 text-blue-900 font-semibold'
                                  : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50'
                              }`}
                            >
                              <div className="w-10 h-10 rounded overflow-hidden shrink-0">
                                <img src={preset.url} alt="" className="w-full h-full object-cover" />
                              </div>
                              <span className="text-[10px] leading-tight line-clamp-2">{preset.name}</span>
                            </button>
                          ))}
                        </div>
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                          <div className="w-12 h-12 rounded overflow-hidden shrink-0 border border-slate-200">
                            <img src={selectedPresetImage} alt="Selected preview" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Preset Image Active</span>
                            <span className="text-xs text-slate-600 font-semibold">Ready to display on post</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <input
                          type="url"
                          placeholder="Paste Unsplash or external image URL..."
                          value={customImageUrl}
                          onChange={(e) => setCustomImageUrl(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
                        />
                        <p className="text-[10px] text-slate-400">Ensure the URL is a direct link (HTTPS) to an image asset.</p>
                        {customImageUrl && (
                          <div className="w-full h-24 rounded-lg overflow-hidden border border-slate-200">
                            <img src={customImageUrl} alt="Custom URL preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = IMAGE_PRESETS[0].url }} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Full Article Content body */}
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Detailed Article Content (Markdown & Paragraphs supported)
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Describe the technical details, community impacts, test processes, and student efforts. Tell the full story..."
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 font-sans"
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsPublishingOpen(false)}
                    className="px-4.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel Draft
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg shadow-md shadow-blue-500/10 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Publish Update
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter Tab Row & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-10 pb-5 border-b border-slate-200">
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto max-w-full py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full lg:max-w-sm shrink-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search updates, authors, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Articles Feed list */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setReadingArticle(article)}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col h-full cursor-pointer relative"
              >
                {/* Admin Delete button */}
                {isAdmin && (
                  <button
                    onClick={(e) => handleDelete(article.id, e)}
                    title="Remove this post"
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white/95 hover:bg-red-600 hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold bg-white/95 backdrop-blur-sm text-blue-600 border border-blue-100 rounded-full shadow-sm uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2 text-[10px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-sans">
                        <User className="w-3.5 h-3.5" />
                        {article.author || 'Siddharth Mehta'}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-1.5 leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400">READ IN FULL</span>
                    <div className="text-xs font-bold text-blue-600 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      Open Article
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-white border border-slate-200 rounded-2xl max-w-xl mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400 border border-slate-200">
              <Newspaper className="w-6 h-6" />
            </div>
            <h4 className="text-slate-800 font-bold text-base sm:text-lg">No matching articles found</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any updates that matched your search terms or category filter. Try clearing the search query or choosing another category tab.
            </p>
          </div>
        )}

        {/* Detailed Article Reader Modal */}
        <AnimatePresence>
          {readingArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={() => setReadingArticle(null)}
              ></div>

              {/* Reader Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                className="bg-white border border-slate-200 rounded-2xl shadow-xl relative w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
              >
                {/* Close button */}
                <button
                  onClick={() => setReadingArticle(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors z-20 cursor-pointer shadow-sm"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Article Header Photo */}
                <div className="relative h-60 sm:h-72 overflow-hidden">
                  <img
                    src={readingArticle.image}
                    alt={readingArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20"></div>
                  
                  {/* Category overlay */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-full shadow-sm uppercase tracking-wider">
                      {readingArticle.category}
                    </span>
                  </div>
                </div>

                {/* Article Body Content */}
                <div className="p-6 sm:p-10 space-y-6">
                  {/* Meta info block */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-4 font-sans">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <User className="w-4 h-4 text-slate-400" />
                      <span>{readingArticle.author || 'Siddharth Mehta'}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{readingArticle.date}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-slate-400" />
                      <span>Fremont, CA</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight leading-snug">
                    {readingArticle.title}
                  </h2>

                  {/* Excerpt panel */}
                  <div className="p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                    <strong>In brief:</strong> {readingArticle.excerpt}
                  </div>

                  {/* Markdown or formatted paragraphs */}
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans space-y-4 whitespace-pre-wrap pt-2">
                    {readingArticle.content || readingArticle.excerpt}
                  </div>

                  {/* Helpful disclaimer & social share panel */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 font-mono font-bold uppercase">
                      <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                      FSM Verified Outreach Journal
                    </span>
                    <button
                      onClick={() => setReadingArticle(null)}
                      className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg font-bold text-slate-700 cursor-pointer"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Admin Passcode Gate Modal */}
        <AnimatePresence>
          {showAdminModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                onClick={() => {
                  setShowAdminModal(false);
                  setPasscodeError('');
                  setPasscode('');
                }}
              ></div>

              {/* Password prompt box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 relative w-full max-w-md z-10 text-slate-800"
              >
                <button
                  type="button"
                  onClick={() => {
                    setShowAdminModal(false);
                    setPasscodeError('');
                    setPasscode('');
                  }}
                  className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 border border-blue-100">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900">Staff Portal Authentication</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Authorized student officers and advisors can log in to post or remove official news updates.
                  </p>
                </div>

                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Enter Passcode</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 text-center tracking-widest font-mono"
                    />
                  </div>

                  {passcodeError && (
                    <p className="text-xs text-red-500 font-semibold text-center bg-red-50 border border-red-100 p-2 rounded-lg">
                      {passcodeError}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-blue-500/10 transition-colors cursor-pointer"
                    >
                      Authenticate Access
                    </button>
                  </div>
                </form>

                <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400">
                    For testing purposes, use the passcode <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-600 font-bold">fsm2026</code>.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Subtle Staff Footer Link */}
        <div className="mt-16 pt-8 border-t border-slate-200/85 text-center flex flex-col items-center justify-center gap-2">
          <p className="text-xs text-slate-400">© 2026 Fremont Student Makers. All rights reserved.</p>
          {!isAdmin && (
            <button
              onClick={() => setShowAdminModal(true)}
              className="text-[11px] text-slate-400 hover:text-blue-600 font-semibold flex items-center gap-1 transition-all cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              Staff Login & Content Portal
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
