import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();

  // Redirect to self-assessment
  useEffect(() => {
    navigate('/self-assessment', { replace: true });
  }, [navigate]);

  return null;
};

export default Assessment;
