-- Clean up redundant policies

-- 1. Remove duplicate waitlist SELECT policy (keep the original, remove the new one)
DROP POLICY IF EXISTS "Non-admins cannot view waitlist" ON public.waitlist;

-- 2. Fix nurture_sequences_sent conflicting policies - use PERMISSIVE instead
DROP POLICY IF EXISTS "Authenticated users cannot view nurture sequences" ON public.nurture_sequences_sent;

-- Create admin access as permissive policy
CREATE POLICY "Admins can view nurture sequences"
ON public.nurture_sequences_sent
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));