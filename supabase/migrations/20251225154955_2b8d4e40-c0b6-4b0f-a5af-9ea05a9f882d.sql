-- Create enum for request types
CREATE TYPE public.data_request_type AS ENUM ('export', 'deletion');

-- Create enum for request status
CREATE TYPE public.data_request_status AS ENUM ('pending', 'processing', 'completed', 'failed');

-- Create table to track GDPR data requests
CREATE TABLE public.data_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  request_type data_request_type NOT NULL,
  status data_request_status NOT NULL DEFAULT 'pending',
  reason TEXT,
  processed_at TIMESTAMP WITH TIME ZONE,
  download_url TEXT,
  download_expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for efficient lookups
CREATE INDEX idx_data_requests_email ON public.data_requests (email, created_at DESC);
CREATE INDEX idx_data_requests_status ON public.data_requests (status, created_at);

-- Enable RLS
ALTER TABLE public.data_requests ENABLE ROW LEVEL SECURITY;

-- Users can view their own requests
CREATE POLICY "Users can view own data requests"
ON public.data_requests
FOR SELECT
USING (
  auth.uid() = user_id OR 
  email = ((current_setting('request.jwt.claims'::text, true))::json ->> 'email'::text)
);

-- Users can create their own requests
CREATE POLICY "Users can create data requests"
ON public.data_requests
FOR INSERT
WITH CHECK (
  auth.uid() = user_id OR
  auth.uid() IS NOT NULL
);

-- Only admins can update requests (for processing)
CREATE POLICY "Admins can update data requests"
ON public.data_requests
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Service role can manage all requests (for edge functions)
CREATE POLICY "Service role can manage data requests"
ON public.data_requests
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create trigger for updated_at
CREATE TRIGGER update_data_requests_updated_at
BEFORE UPDATE ON public.data_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();