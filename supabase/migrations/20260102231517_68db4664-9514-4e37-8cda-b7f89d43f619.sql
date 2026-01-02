-- Drop existing SELECT policies on assessments table
DROP POLICY IF EXISTS "Users can view their own assessments" ON public.assessments;
DROP POLICY IF EXISTS "Users can view their own assessments by user_id" ON public.assessments;

-- Create a single permissive SELECT policy that requires authentication
-- and restricts users to viewing only their own assessments
CREATE POLICY "Authenticated users can view own assessments"
ON public.assessments
FOR SELECT
TO authenticated
USING (
  (auth.uid() = user_id) 
  OR 
  (email = (current_setting('request.jwt.claims', true)::json->>'email'))
  OR
  has_role(auth.uid(), 'admin')
);

-- Note: By specifying TO authenticated and not having any policy for anon,
-- anonymous users are completely blocked from SELECT operations