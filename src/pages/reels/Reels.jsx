import { Camera } from 'lucide-react'
import React from 'react'
import hello from '@shared/hello.png'

const ReelsPage = () => {
  return (
    <>
      <div className='reels__container'>
          <div className='reels__title'>
            <h1 style={{backgroundColor: '#8000ff00'}}>Reels</h1>
            <Camera size={34} style={{backgroundColor: '#8000ff00'}} />
          </div> 

          <div className='reels__box'>
            <div className='reels__box__left'>
                <div className='title__reels__box'>
                  <img className='img__reels' src={hello} alt="" />
                  <h3 style={{backgroundColor: '#8000ff00'}}>Carma__dark</h3>
                  <span className='reels__follow'>Following</span>
                </div>
                <div style={{backgroundColor: 'transparent'}}>
                  <p style={{backgroundColor: 'transparent'}}>The best of feture in the world. We can see all in my eyes</p>
                </div>
                <div style={{backgroundColor: 'transparent'}}>
                <p style={{backgroundColor: 'transparent'}}>🎵 аудио memory-reboot - Ориг</p>
                </div>
            </div>

            <div className='reels__box__right'>
                <div className='like__icon'>
                  <svg style={{backgroundColor: 'transparent'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart cursor-pointer"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                  <p style={{backgroundColor: 'transparent'}}>490k</p>
                </div>
                <div className='like__icon'>
                <svg style={{backgroundColor: 'transparent'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle ml-[10px]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                  <p style={{backgroundColor: 'transparent'}}>600k</p>
                </div>
                <div className='like__icon'>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{backgroundColor: 'transparent', transform: 'rotate(-20deg)' }}
                >
                  <path
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <div className='like__icon'>
                  <svg style={{backgroundColor: 'transparent'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </div>
            </div>
          </div>
      </div>

      <div className='reels__container one'>
          <div className='reels__title'>
            <h1 style={{backgroundColor: '#8000ff00'}}>Reels</h1>
            <Camera size={34} style={{backgroundColor: '#8000ff00'}} />
          </div> 

          <div className='reels__box'>
            <div className='reels__box__left'>
                <div className='title__reels__box'>
                  <img className='img__reels' src={hello} alt="" />
                  <h3 style={{backgroundColor: '#8000ff00'}}>Killua__official</h3>
                  <span className='reels__follow'>Following</span>
                </div>
                <div style={{backgroundColor: 'transparent'}}>
                  <p style={{backgroundColor: 'transparent'}}>The best of feture in the world. We can see all in my eyes</p>
                </div>
                <div style={{backgroundColor: 'transparent'}}>
                <p style={{backgroundColor: 'transparent'}}>🎵 аудио killua - Ориг</p>
                </div>
            </div>

            <div className='reels__box__right'>
                <div className='like__icon'>
                  <svg style={{backgroundColor: 'transparent'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart cursor-pointer"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                  <p style={{backgroundColor: 'transparent'}}>300k</p>
                </div>
                <div className='like__icon'>
                <svg style={{backgroundColor: 'transparent'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle ml-[10px]"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                  <p style={{backgroundColor: 'transparent'}}>400k</p>
                </div>
                <div className='like__icon'>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{backgroundColor: 'transparent', transform: 'rotate(-20deg)' }}
                >
                  <path
                    d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                    fill="currentColor"
                  />
                </svg>
                </div>
                <div className='like__icon'>
                  <svg style={{backgroundColor: 'transparent'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default ReelsPage