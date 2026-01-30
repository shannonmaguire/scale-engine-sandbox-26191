-- Create blog_posts table for the mini CMS
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Shannon Maguire',
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  read_time TEXT,
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public read policy: Anyone can read published posts
CREATE POLICY "Anyone can read published posts"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Admin read policy: Admins can read all posts (including drafts)
CREATE POLICY "Admins can read all posts"
ON public.blog_posts
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Admin insert policy
CREATE POLICY "Admins can create posts"
ON public.blog_posts
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Admin update policy
CREATE POLICY "Admins can update posts"
ON public.blog_posts
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Admin delete policy
CREATE POLICY "Admins can delete posts"
ON public.blog_posts
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger for automatic updated_at timestamps
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();