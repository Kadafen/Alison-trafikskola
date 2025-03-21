import { useState, useEffect } from 'react';

interface NetworkQuality {
  isSlowConnection: boolean;
  imageQuality: number;
  connection: 'slow' | 'fast' | 'unknown';
}

const useNetworkQuality = (): NetworkQuality => {
  const [networkQuality, setNetworkQuality] = useState<NetworkQuality>({
    isSlowConnection: false,
    imageQuality: 75,
    connection: 'unknown'
  });

  useEffect(() => {
    // Check if navigator.connection is available (supported in Chrome, Edge, Opera)
    const connection = (navigator as any).connection || 
                       (navigator as any).mozConnection || 
                       (navigator as any).webkitConnection;
    
    if (connection) {
      // Define slow connections
      const isSlowConnection = ['slow-2g', '2g', '3g'].includes(connection.effectiveType) || 
                               (connection.downlink < 1.5);
      
      // Set quality based on connection
      const quality = isSlowConnection ? 60 : 75;
      
      setNetworkQuality({
        isSlowConnection,
        imageQuality: quality,
        connection: isSlowConnection ? 'slow' : 'fast'
      });

      // Set up a listener for connection changes
      const updateConnectionQuality = () => {
        const isSlowConn = ['slow-2g', '2g', '3g'].includes(connection.effectiveType) || 
                           (connection.downlink < 1.5);
        
        setNetworkQuality({
          isSlowConnection: isSlowConn,
          imageQuality: isSlowConn ? 60 : 75,
          connection: isSlowConn ? 'slow' : 'fast'
        });
      };

      connection.addEventListener('change', updateConnectionQuality);
      
      // Clean up
      return () => {
        connection.removeEventListener('change', updateConnectionQuality);
      };
    }
  }, []);

  return networkQuality;
};

export default useNetworkQuality; 