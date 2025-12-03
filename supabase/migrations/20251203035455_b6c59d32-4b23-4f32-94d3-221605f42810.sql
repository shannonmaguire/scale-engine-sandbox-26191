-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  company TEXT,
  service_interest TEXT,
  timeline TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'waiting',
  queue_position INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  contacted_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Public can submit to waitlist (anonymous signups)
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Only admins can view waitlist entries
CREATE POLICY "Admins can view waitlist"
ON public.waitlist
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

-- Only admins can update waitlist entries
CREATE POLICY "Admins can update waitlist"
ON public.waitlist
FOR UPDATE
USING (has_role(auth.uid(), 'admin'));

-- Only admins can delete waitlist entries
CREATE POLICY "Admins can delete waitlist"
ON public.waitlist
FOR DELETE
USING (has_role(auth.uid(), 'admin'));

-- Function to auto-assign queue position on insert
CREATE OR REPLACE FUNCTION public.assign_queue_position()
RETURNS TRIGGER AS $$
BEGIN
  NEW.queue_position := COALESCE(
    (SELECT MAX(queue_position) FROM public.waitlist WHERE status = 'waiting') + 1,
    1
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to assign queue position
CREATE TRIGGER set_queue_position
BEFORE INSERT ON public.waitlist
FOR EACH ROW
EXECUTE FUNCTION public.assign_queue_position();