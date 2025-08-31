import React from 'react'
import {ReactComponent as WeddingRingsSvg} from '../../assets/rings-heart.svg'
import {ReactComponent as PartySvg} from '../../assets/party.svg'
import {ReactComponent as CameraSvg} from '../../assets/camera.svg'
import {ReactComponent as CocktailSvg} from '../../assets/cocktail.svg'
import {ReactComponent as DinnerSvg} from '../../assets/dinner.svg'
import {ReactComponent as DancingSvg} from '../../assets/dancing.svg'   

const WeddingTimeline = () => {
  return (
    <div className='wedding-timeline'>
        
        <h2 className='wedding-timeline-heading'>Wedding Timeline</h2>
        <div className='wt-timeline-grid'>
          {/* <div></div> */}
            <div className='wt-icon-box'>
              <WeddingRingsSvg className='wt-icon'/>
            </div>
            <div className='wt-icon-box'>
              <CameraSvg className='wt-icon'/>
              </div> 
            <div className='wt-icon-box'>
              <CocktailSvg className='wt-icon'/>
            </div>
            <div className='wt-icon-box'>
              <DinnerSvg className='wt-icon'/>
            </div>
            
            <div className='wt-icon-box'>
              <PartySvg className='wt-icon' />
            </div>
            <div className='wt-icon-box'>
              <DancingSvg className='wt-icon' />
            </div>
           
          <div class="track-line-container">
  <div className='circle'></div>

  <div className='circle'></div>
</div>
          <div className='wt-label-box'>
            Ceremony
          </div>
          <div className='wt-label-box'>
          Photos
          </div>
           <div className='wt-label-box'>
            Cocktail Hour
           </div>
          <div className='wt-label-box'>
            Dinner
          </div>
           <div className='wt-label-box'>Festivities</div>
          <div className='wt-label-box'>
            Party
          </div>

        </div>

        </div>
  )
}

export default WeddingTimeline