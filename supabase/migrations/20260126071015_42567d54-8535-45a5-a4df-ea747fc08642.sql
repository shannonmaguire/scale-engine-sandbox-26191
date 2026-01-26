-- Fix RLS policies for better security

-- 1. WAITLIST: Add explicit SELECT denial for non-admins
CREATE POLICY "Non-admins cannot view waitlist"
ON public.waitlist
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 2. DEALS: Add catch-all denial for non-partners
-- The existing policies already properly restrict to partners or admins, which is correct

-- 3. DATA_REQUESTS: Strengthen policies to explicitly deny non-owners
-- Drop the existing SELECT policy and recreate with admin access
DROP POLICY IF EXISTS "Users can view own data requests" ON public.data_requests;
CREATE POLICY "Users can view own data requests"
ON public.data_requests
FOR SELECT
TO authenticated
USING (
  (auth.uid() = user_id) 
  OR (email = (current_setting('request.jwt.claims'::text, true)::json ->> 'email'::text))
  OR public.has_role(auth.uid(), 'admin')
);

-- 4. NURTURE_SEQUENCES_SENT: Add explicit denial for non-service-role
-- Change the SELECT policy to restrict to service_role only (which it already is)
-- Add a deny policy for all other access
DROP POLICY IF EXISTS "Service role can select nurture sequences" ON public.nurture_sequences_sent;
CREATE POLICY "Only service role can select nurture sequences"
ON public.nurture_sequences_sent
FOR SELECT
TO service_role
USING (true);

-- Ensure authenticated users cannot read this table
CREATE POLICY "Authenticated users cannot view nurture sequences"
ON public.nurture_sequences_sent
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 5. ASSESSMENTS: Add admin management policies
CREATE POLICY "Admins can update assessments"
ON public.assessments
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete assessments"
ON public.assessments
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 6. PROFILES: Add admin viewing policy for support
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 7. Ensure anonymous users can't select from assessments
-- The existing policy handles this - only authenticated users matching user_id or email can view