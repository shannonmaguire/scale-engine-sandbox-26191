-- Add user_id column to assessments table to link assessments to authenticated users
ALTER TABLE public.assessments 
ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Create index for efficient user assessment queries
CREATE INDEX idx_assessments_user_id ON public.assessments(user_id);

-- Update RLS policy to allow users to view their own assessments by user_id
CREATE POLICY "Users can view their own assessments by user_id"
ON public.assessments
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Allow authenticated users to insert assessments with their user_id
DROP POLICY IF EXISTS "Anyone can submit assessments" ON public.assessments;

CREATE POLICY "Authenticated users can submit assessments"
ON public.assessments
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Allow anonymous users to submit assessments without user_id
CREATE POLICY "Anonymous users can submit assessments"
ON public.assessments
FOR INSERT
TO anon
WITH CHECK (user_id IS NULL);