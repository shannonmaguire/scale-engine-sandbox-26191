
-- Drop the vulnerable SELECT policy that allows email-based access
DROP POLICY IF EXISTS "Authenticated users can view own assessments" ON public.assessments;

-- Recreate with strict user_id matching only (no email-based access)
CREATE POLICY "Authenticated users can view own assessments"
ON public.assessments
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id
  OR has_role(auth.uid(), 'admin'::app_role)
);
