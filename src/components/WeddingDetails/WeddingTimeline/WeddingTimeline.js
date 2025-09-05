import React, {useState, useEffect} from 'react'
  
import WtDesktop from './WDesktop'
import WtMobile from './WMobile'

const WeddingTimeline = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
  <div>
      {isMobile ? <WtMobile /> : <WtDesktop />}
    </div>
  )
}

export default WeddingTimeline