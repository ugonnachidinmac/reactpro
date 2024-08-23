import React from 'react'
import '../CardsTemplate/Card1.scss'

const Card1 = () => {
  return (
    <>
        <div className="cardContainer bottomMargin">
        <h1>History</h1>
            <div className='firstDiv'>
                <div className='secondDiv'>
                    <div className='divFlex'>
                    <div className='dateAndTime'>
                    <p>07/09/23</p>
                    <p>12:00:18</p>
                    </div>
                        <p>2,000</p>
                    </div>
                    <hr />
                    <p>Purchase of Phone Pouch</p>
                </div>
            </div>
        </div>

        {/* Second Card */}

        <div className="cardContainer2 bottomMargin">
    
            <div className='firstDiv'>
                <div className='secondDiv'>
                    <div className='divFlex'>
                    <div className='dateAndTime'>
                    <p>06/09/23</p>
                    <p>17:45:39</p>
                    </div>
                        <p>20,000</p>
                    </div>
                    <hr />
                    <p>Profit from Doughnut Contract</p>
                </div>
            </div>
        </div>

        {/* Third Card */}
        <div className="cardContainer3 bottomMargin">
    
            <div className='firstDiv'>
                <div className='secondDiv'>
                    <div className='divFlex'>
                    <div className='dateAndTime'>
                    <p>04/09/23</p>
                    <p> 09:10:01</p>
                    </div>
                        <p>50,000</p>
                    </div>
                    <hr />
                    <p>Design Profit from InnovateHer</p>
                </div>
            </div>
        </div>

         {/* Forth Card */}
         <div className="cardContainer4 bottomMargin">
    
    <div className='firstDiv'>
        <div className='secondDiv'>
            <div className='divFlex'>
            <div className='dateAndTime'>
            <p>03/09/23</p>
            <p>14:22:18</p>
            </div>
                <p>40,000</p>
            </div>
            <hr />
            <p>Food Stuff</p>
        </div>
    </div>
</div>
    </>
  )
}

export default Card1