import { useEffect, useMemo, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ValueProposition } from './components/ValueProposition';
import { BrandPartners } from './components/BrandPartners';
import { CollaborationSection } from './components/CollaborationSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from './components/ui/alert-dialog';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Tooltip, TooltipContent, TooltipTrigger } from './components/ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './components/ui/dropdown-menu';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './components/ui/drawer';
import { Switch } from './components/ui/switch';
import { useForm } from 'react-hook-form';
import { AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, Filter, Info, MoreHorizontal } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_OWNER = import.meta.env.VITE_EMAILJS_TEMPLATE_OWNER;
const EMAILJS_TEMPLATE_CONFIRMATION = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRMATION;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [contactIntent, setContactIntent] = useState<'collaboration' | 'media-kit' | 'general'>('collaboration');

  useEffect(() => {
    if (!EMAILJS_PUBLIC_KEY) return;
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY, blockHeadless: true });
  }, []);

  const openContact = (intent: 'collaboration' | 'media-kit' | 'general') => {
    setContactIntent(intent);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#101010] overflow-x-hidden">
      <Navigation />
      <HeroSection onCollaborateClick={() => openContact('collaboration')} />
      <AboutSection />
      <PortfolioSection onViewPortfolio={() => setPortfolioOpen(true)} />
      <ValueProposition />
      <BrandPartners />
      <CollaborationSection onStartCollaboration={() => openContact('collaboration')} />
      <Footer onRequestMediaKit={() => openContact('media-kit')} />
      <ContactDialog
        open={contactOpen}
        intent={contactIntent}
        onOpenChange={setContactOpen}
      />
      <PortfolioDialog
        open={portfolioOpen}
        onOpenChange={setPortfolioOpen}
        onRequestCollaboration={() => openContact('collaboration')}
      />
    </div>
  );
}

type ContactDialogProps = {
  open: boolean;
  intent: 'collaboration' | 'media-kit' | 'general';
  onOpenChange: (open: boolean) => void;
};

type ContactFormValues = {
  name: string;
  email: string;
  brand: string;
  budget: string;
  timeline: string;
  message: string;
};

function ContactDialog({ open, intent, onOpenChange }: ContactDialogProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [tab, setTab] = useState<'collaboration' | 'media-kit' | 'general'>(intent);
  const [successOpen, setSuccessOpen] = useState(false);
  const { register, handleSubmit, reset, setValue, formState: { errors, isValid } } = useForm<ContactFormValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      brand: '',
      budget: '',
      timeline: '',
      message: '',
    },
  });

  useEffect(() => {
    if (open) {
      setTab(intent);
      setStatus('idle');
      setSuccessOpen(false);
    } else {
      reset();
      setStatus('idle');
    }
  }, [intent, open, reset]);

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('submitting');
    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_OWNER || !EMAILJS_TEMPLATE_CONFIRMATION || !EMAILJS_PUBLIC_KEY) {
        setStatus('error');
        return;
      }

      const submittedAt = new Date().toISOString();
      const commonParams = {
        name: values.name,
        email: values.email,
        brand: values.brand,
        budget: values.budget,
        timeline: values.timeline,
        message: values.message,
        intent: tab,
        submitted_at: submittedAt,
        from_name: values.name,
        from_email: values.email,
        reply_to: values.email,
        user_name: values.name,
        user_email: values.email,
        to_name: values.name,
        to_email: values.email,
      };

      await Promise.all([
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_OWNER, commonParams, { publicKey: EMAILJS_PUBLIC_KEY }),
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONFIRMATION, commonParams, { publicKey: EMAILJS_PUBLIC_KEY }),
      ]);

      setStatus('success');
      setSuccessOpen(true);
      onOpenChange(false);
    } catch {
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="bg-[#0f0f0f] border border-[#D4AF37]/30 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-bold">
              {tab === 'media-kit' ? 'Request the Media Kit' : 'Start a Collaboration'}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {tab === 'media-kit'
                ? 'Receive the latest media kit with analytics, rates, and recent case studies.'
                : 'Share a few details so we can respond with a tailored collaboration plan.'}
            </DialogDescription>
          </DialogHeader>

          <Tabs value={tab} onValueChange={(value) => setTab(value as typeof tab)} className="mt-2">
            <TabsList className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-full w-full sm:w-auto">
              <TabsTrigger value="collaboration" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#101010] rounded-full px-4">
                Collaboration
              </TabsTrigger>
              <TabsTrigger value="media-kit" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#101010] rounded-full px-4">
                Media Kit
              </TabsTrigger>
              <TabsTrigger value="general" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#101010] rounded-full px-4">
                General
              </TabsTrigger>
            </TabsList>

            <TabsContent value={tab} className="mt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {status === 'error' && (
                  <div className="flex items-center gap-3 rounded-2xl border border-red-500/40 bg-[#1a1a1a] px-4 py-3 text-sm text-red-200">
                    <AlertTriangle className="h-5 w-5" />
                    Submission failed. Please double-check the email address and try again.
                  </div>
                )}

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Full name</label>
                  <Input
                    {...register('name', { required: 'Full name is required' })}
                    className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white focus-visible:ring-[#D4AF37]/40"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-red-300">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Work email</label>
                  <Input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email' },
                    })}
                    className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white focus-visible:ring-[#D4AF37]/40"
                    placeholder="name@brand.com"
                  />
                  {errors.email && <p className="text-xs text-red-300">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Brand or agency</label>
                  <Input
                    {...register('brand', { required: 'Brand or agency is required' })}
                    className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white focus-visible:ring-[#D4AF37]/40"
                    placeholder="Brand name"
                  />
                  {errors.brand && <p className="text-xs text-red-300">{errors.brand.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Budget range</label>
                  <Select onValueChange={(value) => setValue('budget', value, { shouldValidate: true })}>
                    <SelectTrigger className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white">
                      <SelectItem value="under-5k">Under $5k</SelectItem>
                      <SelectItem value="5k-15k">$5k - $15k</SelectItem>
                      <SelectItem value="15k-30k">$15k - $30k</SelectItem>
                      <SelectItem value="30k-plus">$30k+</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" {...register('budget', { required: 'Budget is required' })} />
                  {errors.budget && <p className="text-xs text-red-300">{errors.budget.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Timeline</label>
                  <Select onValueChange={(value) => setValue('timeline', value, { shouldValidate: true })}>
                    <SelectTrigger className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white">
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                      <SelectItem value="1-2-months">1-2 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" {...register('timeline', { required: 'Timeline is required' })} />
                  {errors.timeline && <p className="text-xs text-red-300">{errors.timeline.message}</p>}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    Response time
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#D4AF37]/40 text-[#D4AF37]">
                          <Info className="w-3 h-3" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#1a1a1a] border border-[#D4AF37]/30 text-white">
                        Average response time is within 24 hours.
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="rounded-xl border border-[#D4AF37]/20 bg-[#1a1a1a] px-4 py-3 text-sm text-gray-400">
                    Priority is given to fully scoped briefs with timelines.
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-300">Project details</label>
                <Textarea
                  {...register('message', { required: 'Tell us about the project', minLength: { value: 10, message: 'Add more detail (10+ characters)' } })}
                  className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white focus-visible:ring-[#D4AF37]/40 min-h-[120px]"
                  placeholder="Goals, deliverables, platforms, and anything else that helps."
                />
                {errors.message && <p className="text-xs text-red-300">{errors.message.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className="inline-flex items-center gap-2 text-sm text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-2 rounded-full hover:bg-[#D4AF37] hover:text-[#101010] transition-colors">
                      More actions
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#1a1a1a] border border-[#D4AF37]/20 text-white">
                    <DropdownMenuItem onClick={() => window.open('https://instagram.com/rachna.panday', '_blank')}>
                      View Instagram
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => window.location.href = 'mailto:kanchu15aug@gmail.com'}>
                      Email directly
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#D4AF37]/20" />
                    <DropdownMenuItem onClick={() => window.open('https://drive.google.com', '_blank')}>
                      View case studies
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#101010] font-semibold rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit request'}
                </button>
              </div>
              </form>
            </TabsContent>
          </Tabs>

        <div className="mt-8 border-t border-[#D4AF37]/20 pt-6">
          <Accordion type="single" collapsible className="text-sm text-gray-300">
            <AccordionItem value="item-1" className="border-[#D4AF37]/20">
              <AccordionTrigger className="text-white">What deliverables are included?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Deliverables include platform-ready UGC assets, captions, and usage guidelines tailored to your brief.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-[#D4AF37]/20">
              <AccordionTrigger className="text-white">How soon can we start?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Most collaborations begin within 2 weeks after approvals and alignment on creative direction.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-[#D4AF37]/20">
              <AccordionTrigger className="text-white">Do you provide usage rights?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Usage rights are available for paid and organic placements based on campaign scope.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={successOpen} onOpenChange={setSuccessOpen}>
        <AlertDialogContent className="bg-[#0f0f0f] border border-[#D4AF37]/30 text-white">
          <AlertDialogHeader className="space-y-3">
            <AlertDialogTitle className="text-2xl font-bold flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-[#D4AF37]" />
              Request sent
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Thanks! Your request has been submitted successfully. A confirmation email has been sent to your inbox.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="pt-2 flex justify-end">
            <AlertDialogAction className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#101010] font-semibold rounded-full">
              Done
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

type PortfolioDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestCollaboration: () => void;
};

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  type: string;
  engagement: number;
  result: string;
  featured: boolean;
};

function PortfolioDialog({ open, onOpenChange, onRequestCollaboration }: PortfolioDialogProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('engagement');
  const [tab, setTab] = useState('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pageSize = 6;

  const items: PortfolioItem[] = useMemo(() => ([
    { id: '1', title: 'Glow Serum Launch', category: 'Wellness & Beauty', type: 'Video', engagement: 4.9, result: '32% lift in CTR', featured: true },
    { id: '2', title: 'Smart Home Bundle', category: 'Tech & Gadgets', type: 'Video', engagement: 4.6, result: '18% ROAS boost', featured: false },
    { id: '3', title: 'Luxury Skincare Edit', category: 'Wellness & Beauty', type: 'Photo', engagement: 4.4, result: '40k saves', featured: true },
    { id: '4', title: 'Lifestyle Kitchen Series', category: 'Lifestyle & Home', type: 'Video', engagement: 4.3, result: '27% conversion', featured: false },
    { id: '5', title: 'Weekend Coffee Ritual', category: 'Food & Beverage', type: 'Photo', engagement: 4.2, result: '15k shares', featured: false },
    { id: '6', title: 'Family Essentials Ad', category: 'Family & Kids', type: 'Ads', engagement: 4.7, result: '21% CPA drop', featured: true },
    { id: '7', title: 'Outdoor Adventure Drop', category: 'Fashion & Outdoors', type: 'Video', engagement: 4.1, result: '12% retention', featured: false },
    { id: '8', title: 'Meal Prep Stories', category: 'Food & Beverage', type: 'Video', engagement: 4.5, result: '28% engagement', featured: true },
    { id: '9', title: 'Beauty Kit Carousel', category: 'Wellness & Beauty', type: 'Photo', engagement: 4.0, result: '9k comments', featured: false },
    { id: '10', title: 'Tech Unboxing', category: 'Tech & Gadgets', type: 'Video', engagement: 4.8, result: '45% view-through', featured: true },
    { id: '11', title: 'Home Refresh', category: 'Lifestyle & Home', type: 'Photo', engagement: 3.9, result: '20k saves', featured: false },
    { id: '12', title: 'Wellness Routine', category: 'Wellness & Beauty', type: 'Ads', engagement: 4.6, result: '19% CTR', featured: true },
  ]), []);

  useEffect(() => {
    if (!open) {
      setSearch('');
      setCategory('all');
      setSortBy('engagement');
      setTab('all');
      setFeaturedOnly(false);
      setPage(1);
      setError(null);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = window.setTimeout(() => {
      if (search.toLowerCase().includes('error')) {
        setError('Unable to load results. Please adjust your search.');
      } else {
        setError(null);
      }
      setIsLoading(false);
    }, 700);
    return () => window.clearTimeout(timer);
  }, [open, search, category, sortBy, tab, featuredOnly]);

  const filtered = useMemo(() => {
    let result = items;
    if (category !== 'all') {
      result = result.filter((item) => item.category === category);
    }
    if (tab !== 'all') {
      result = result.filter((item) => item.type.toLowerCase() === tab);
    }
    if (featuredOnly) {
      result = result.filter((item) => item.featured);
    }
    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter((item) => item.title.toLowerCase().includes(query));
    }
    if (sortBy === 'engagement') {
      result = [...result].sort((a, b) => b.engagement - a.engagement);
    }
    if (sortBy === 'title') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }
    return result;
  }, [items, category, tab, featuredOnly, search, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  }, [page, currentPage]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0f0f0f] border border-[#D4AF37]/30 text-white max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold">Full Portfolio</DialogTitle>
          <DialogDescription className="text-gray-400">
            Explore real campaign highlights with filters, sorting, and quick actions.
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white focus-visible:ring-[#D4AF37]/40"
                placeholder="Search campaigns..."
              />
              <div className="flex items-center gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white">
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="title">Campaign name</SelectItem>
                  </SelectContent>
                </Select>
                <Drawer>
                  <DrawerTrigger asChild>
                    <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#101010] transition-colors">
                      <Filter className="w-4 h-4" />
                      Filters
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="bg-[#0f0f0f] border border-[#D4AF37]/30 text-white">
                    <DrawerHeader>
                      <DrawerTitle>Filters</DrawerTitle>
                    </DrawerHeader>
                    <div className="px-4 pb-6 space-y-4">
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white">
                          <SelectItem value="all">All categories</SelectItem>
                          <SelectItem value="Tech & Gadgets">Tech & Gadgets</SelectItem>
                          <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                          <SelectItem value="Lifestyle & Home">Lifestyle & Home</SelectItem>
                          <SelectItem value="Wellness & Beauty">Wellness & Beauty</SelectItem>
                          <SelectItem value="Family & Kids">Family & Kids</SelectItem>
                          <SelectItem value="Fashion & Outdoors">Fashion & Outdoors</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="flex items-center justify-between rounded-xl border border-[#D4AF37]/20 bg-[#1a1a1a] px-4 py-3">
                        <span className="text-sm text-gray-300">Featured only</span>
                        <Switch checked={featuredOnly} onCheckedChange={setFeaturedOnly} className="data-[state=checked]:bg-[#D4AF37]" />
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-full w-full sm:w-auto">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#101010] rounded-full px-4">
                  All
                </TabsTrigger>
                <TabsTrigger value="video" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#101010] rounded-full px-4">
                  Video
                </TabsTrigger>
                <TabsTrigger value="photo" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#101010] rounded-full px-4">
                  Photo
                </TabsTrigger>
                <TabsTrigger value="ads" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#101010] rounded-full px-4">
                  Ads
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center justify-between gap-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white w-full sm:w-[220px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-[#D4AF37]/20 text-white">
                  <SelectItem value="all">All categories</SelectItem>
                  <SelectItem value="Tech & Gadgets">Tech & Gadgets</SelectItem>
                  <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
                  <SelectItem value="Lifestyle & Home">Lifestyle & Home</SelectItem>
                  <SelectItem value="Wellness & Beauty">Wellness & Beauty</SelectItem>
                  <SelectItem value="Family & Kids">Family & Kids</SelectItem>
                  <SelectItem value="Fashion & Outdoors">Fashion & Outdoors</SelectItem>
                </SelectContent>
              </Select>
              <div className="hidden sm:flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#1a1a1a] px-4 py-2 text-sm text-gray-300">
                <span>Featured only</span>
                <Switch checked={featuredOnly} onCheckedChange={setFeaturedOnly} className="data-[state=checked]:bg-[#D4AF37]" />
              </div>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#101010] p-5">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  Avg engagement
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#D4AF37]/40 text-[#D4AF37]">
                        <Info className="w-3 h-3" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1a1a1a] border border-[#D4AF37]/30 text-white">
                      Calculated from campaign performance benchmarks.
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="text-[#F3E5AB] font-semibold">4.5%</span>
              </div>

              {error && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-500/40 bg-[#1a1a1a] px-4 py-3 text-sm text-red-200">
                  <AlertTriangle className="h-5 w-5" />
                  {error}
                </div>
              )}

              {isLoading && !error && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#D4AF37]/20 bg-[#1a1a1a] px-4 py-3 text-sm text-gray-300">
                  Loading campaigns...
                </div>
              )}

              {!isLoading && !error && pageItems.length === 0 && (
                <div className="mt-6 rounded-xl border border-[#D4AF37]/20 bg-[#1a1a1a] px-4 py-8 text-center text-sm text-gray-300">
                  No campaigns match these filters. Try adjusting the search or category.
                </div>
              )}

              {!isLoading && !error && pageItems.length > 0 && (
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  {pageItems.map((item) => (
                    <div key={item.id} className="rounded-xl border border-[#D4AF37]/20 bg-[#1a1a1a] p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">{item.title}</p>
                          <p className="text-xs text-gray-400">{item.category}</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="p-2 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#101010] transition-colors">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-[#1a1a1a] border border-[#D4AF37]/20 text-white">
                            <DropdownMenuItem onClick={() => navigator.clipboard?.writeText(`${item.title} • ${item.result}`)}>
                              Copy summary
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={onRequestCollaboration}>
                              Start similar campaign
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-300">
                        <span>{item.type}</span>
                        <span className="text-[#F3E5AB]">{item.engagement}% engagement</span>
                      </div>
                      <div className="rounded-lg border border-[#D4AF37]/20 bg-[#101010] px-3 py-2 text-xs text-gray-300">
                        {item.result}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <span className="text-sm text-gray-400">Page {currentPage} of {totalPages}</span>
              <button
                type="button"
                onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#1a1a1a] p-6 space-y-4">
              <p className="text-sm text-gray-400 uppercase tracking-widest">Quick stats</p>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Total campaigns</span>
                  <span className="text-[#F3E5AB] font-semibold">{items.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Featured work</span>
                  <span className="text-[#F3E5AB] font-semibold">{items.filter((item) => item.featured).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg engagement</span>
                  <span className="text-[#F3E5AB] font-semibold">4.5%</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#1a1a1a] p-6 space-y-4">
              <p className="text-sm text-gray-400 uppercase tracking-widest">Request focus</p>
              <div className="grid gap-3">
                {['UGC Ads', 'Brand Storytelling', 'Product Launch', 'Lifestyle Content'].map((focus) => (
                  <button
                    key={focus}
                    type="button"
                    onClick={onRequestCollaboration}
                    className="w-full text-left px-4 py-3 rounded-xl border border-[#D4AF37]/20 bg-[#101010] text-sm text-gray-300 hover:border-[#D4AF37]/60 hover:text-white transition-colors"
                  >
                    {focus}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
