
-- Drop existing permissive policies on deals table
DROP POLICY IF EXISTS "Partners can view their own deals" ON public.deals;
DROP POLICY IF EXISTS "Partners can create deals" ON public.deals;
DROP POLICY IF EXISTS "Partners can update their own deals" ON public.deals;

-- Recreate as RESTRICTIVE policies with proper role checks on all operations

-- SELECT: Require partner role + ownership, OR admin role
CREATE POLICY "Partners can view their own deals"
ON public.deals
FOR SELECT
TO authenticated
USING (
  (auth.uid() = partner_id AND has_role(auth.uid(), 'partner'::app_role))
  OR has_role(auth.uid(), 'admin'::app_role)
);

-- INSERT: Require partner role + ownership
CREATE POLICY "Partners can create deals"
ON public.deals
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = partner_id
  AND has_role(auth.uid(), 'partner'::app_role)
);

-- UPDATE: Require partner role + ownership, OR admin role
CREATE POLICY "Partners can update their own deals"
ON public.deals
FOR UPDATE
TO authenticated
USING (
  (auth.uid() = partner_id AND has_role(auth.uid(), 'partner'::app_role))
  OR has_role(auth.uid(), 'admin'::app_role)
)
WITH CHECK (
  (auth.uid() = partner_id AND has_role(auth.uid(), 'partner'::app_role))
  OR has_role(auth.uid(), 'admin'::app_role)
);
