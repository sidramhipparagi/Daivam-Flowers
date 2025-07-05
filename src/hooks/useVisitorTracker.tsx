
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackVisitor } from '../lib/visitorTracker';

export const useVisitorTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track visitor when component mounts or route changes
    trackVisitor(location.pathname);
  }, [location.pathname]);
};

export default useVisitorTracker;
