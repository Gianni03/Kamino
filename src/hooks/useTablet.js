import { useEffect, useState } from 'react';

/**
 * Detecta el tipo de tablet basado en resolución.
 * Retorna: 'none', 'standard', 'wideTablet', 'horizontalCut', o 'needsMarginFix'
 */
const useTablet = () => {
  const [tabletType, setTabletType] = useState('none');

  useEffect(() => {
    const detectTablet = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width >= 768 && width <= 1024 && height >= 1000) {
        setTabletType('standard');
      } else if (width >= 800 && width <= 850 && height >= 1200) {
        setTabletType('horizontalCut');
      } else if (width >= 1114 && height <= 800) {
        setTabletType('needsMarginFix');
      } else if (width >= 834 && width <= 1200) {
        setTabletType('wideTablet');
      } else {
        setTabletType('none');
      }
    };

    if (typeof window !== 'undefined') {
      detectTablet();
      window.addEventListener('resize', detectTablet);
      return () => window.removeEventListener('resize', detectTablet);
    }
  }, []);

  return tabletType;
};

export default useTablet;
