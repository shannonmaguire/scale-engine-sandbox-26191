-- Create table to track sent nurture sequences (prevents duplicates and abuse)
CREATE TABLE public.nurture_sequences_sent (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  resource_id TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Create index for efficient duplicate lookups
CREATE INDEX idx_nurture_sequences_email_resource ON public.nurture_sequences_sent (email, resource_id, sent_at DESC);

-- Enable RLS
ALTER TABLE public.nurture_sequences_sent ENABLE ROW LEVEL SECURITY;

-- Only allow inserts from service role (edge functions)
-- No SELECT/UPDATE/DELETE for regular users - this is internal tracking only
CREATE POLICY "Service role can insert nurture sequences"
ON public.nurture_sequences_sent
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can select nurture sequences"
ON public.nurture_sequences_sent
FOR SELECT
TO service_role
USING (true);