-- Create assessments table for storing self-assessment submissions
CREATE TABLE public.assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  checklist_id TEXT NOT NULL,
  checklist_title TEXT NOT NULL,
  overall_score INTEGER NOT NULL,
  answer_counts JSONB NOT NULL,
  checklist_state JSONB NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_agent TEXT,
  referrer TEXT
);

-- Create index for faster email lookups
CREATE INDEX idx_assessments_email ON public.assessments(email);
CREATE INDEX idx_assessments_completed_at ON public.assessments(completed_at DESC);

-- Enable RLS
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert assessments (public self-assessment)
CREATE POLICY "Anyone can submit assessments"
ON public.assessments
FOR INSERT
TO anon
WITH CHECK (true);

-- Only allow reading own assessments by email (for future features)
CREATE POLICY "Users can view their own assessments"
ON public.assessments
FOR SELECT
TO anon
USING (email = current_setting('request.jwt.claims', true)::json->>'email');