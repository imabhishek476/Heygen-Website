import React from 'react'
import Section from './Section'
import SectionPurple from '../SectionPurple/SectionPurple'
import SectionDark from '../SectionDark/SectionDark'
import SectionVoices from '../SectionVoices/SectionVoices'
import SectionPurpleFeature from '../SectionPurple/SectionPurpleFeature'
 
function PageWrapper() {
  return (
    <>
        <div className="page_wrapper">
            <div className="fullscreen-video-container">
                <div id="close-video" className="full-screen-close-btn w-embed">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="w-embed">
                    <style>
                    {`
                        .fullscreen_video_wrapper {
                        aspect-ratio: 16/9;
                        }
                    `}
                    </style>
                </div>
                <div className="fullscreen_video_wrapper">
                    <div className="w-embed">
                    <video
                        id="fullscreen-video"
                        style={{ width: '100%', height: 'auto', maxHeight: '90vh', aspectRatio: '16/9', objectFit: 'cover' }}
                        controls
                    ></video>
                    </div>
                </div>
            </div>
            <Section/>
        </div>
        <div className="background_section"><img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c4edf1c49ad5ab27cd37b_blur-purple.svg"
                loading="eager" alt="" style={{width:'100%'}} className="blur_bg_purple" />
      </div>
      <SectionPurple/>
      <SectionDark/>
      <SectionVoices/>
      <SectionPurpleFeature/>
    </>
  )
}

export default PageWrapper