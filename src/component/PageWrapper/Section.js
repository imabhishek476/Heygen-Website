/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import Typed from 'typed.js'; // Make sure to import the Typed library
import axios from 'axios'; // Make sure to install axios using npm or yarn




function Section() {
    useEffect(() => {
        if (window.top !== window) {
          setTimeout(() => {
              document.body.innerHTML = ''
              console.log("working Innerhtml")
          }, 1000);
      }
        // Initialize Typed.js
        const typedOptions = {
          strings: [
            'Hey there! Welcome to HeyGen - where you can easily create fun, high-quality videos using our AI avatars and voices. In just a few clicks, you can generate custom videos for social media, presentations, education, and more.',
          ],
          typeSpeed: 40,
          showCursor: false,
          loop: true,
        };
    
        const typedOptions2 = {
          strings: [
            'Hey there! Welcome to HeyGen! This is what we sound like in another language.',
          ],
          typeSpeed: 30,
          showCursor: false,
          loop: true,
        };
    
        new Typed('#hero-script', typedOptions);
        new Typed('#ai_voices_script', typedOptions2);
    
        // Other initialization code can go here
    
        // Track PAGE_VIEW event
        logEvent('PAGE_VIEW');
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    const logEvent = (eventName, data) => {
        // Log event to Movio
        const params = {
          origin: window.location.origin,
          page_view: window.location.pathname,
          event_name: eventName,
          sid: window.getSid && window.getSid(),
          zid: window.getZid && window.getZid(),
          device: getDeviceType(),
          width: document.body.clientWidth,
          referrer: document.referrer,
          params: JSON.stringify(data || {}),
        };
    
        axios.post('https://api2.heygen.com/v1/movio.track', params);
      };
    
      const getDeviceType = () => {
        return document.body.clientWidth > 600 ? 'desktop' : 'mobile';
      };
  return (
    <section>
        <div className="hero_padding" >
                <div className="w-layout-blockcontainer heygen_container w-container">
                    <div className="vertical-center-div">
                        <div className="max-w-740">
                            <div className="ver-center_gap-mid">
                                <h1 className="heygrn_hero_heading"><span className="primary_color_span">AI-powered video</span>
                                    creations at scale</h1>
                                <p className="heygen_hero_para">Effortlessly produce studio quality videos with AI-generated
                                    avatars and voices.</p>
                                <div><a href="#" target="_blank"
                                        className="button_primary is-head-pc w-inline-block">
                                        <div>Get started for free</div>
                                        <div className="btn_right_arrow_icon w-embed"><svg viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clip-rule="evenodd"
                                                    d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                                                    fill="white" />
                                                <path fillRule="evenodd" clip-rule="evenodd"
                                                    d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                                                    fill="white" />
                                            </svg></div>
                                    </a><a href="/" target="_blank"
                                        className="button_primary demo_head w-inline-block">
                                        <div>Try Demo</div>
                                        <div className="btn_right_arrow_icon w-embed"><svg viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clip-rule="evenodd"
                                                    d="M2.66667 8.00033C2.66667 7.63214 2.96515 7.33366 3.33334 7.33366H12.6667C13.0349 7.33366 13.3333 7.63214 13.3333 8.00033C13.3333 8.36852 13.0349 8.66699 12.6667 8.66699H3.33334C2.96515 8.66699 2.66667 8.36852 2.66667 8.00033Z"
                                                    fill="white" />
                                                <path fillRule="evenodd" clip-rule="evenodd"
                                                    d="M7.5286 2.86225C7.78895 2.6019 8.21106 2.6019 8.47141 2.86225L13.1381 7.52892C13.3984 7.78927 13.3984 8.21138 13.1381 8.47173L8.47141 13.1384C8.21106 13.3987 7.78895 13.3987 7.5286 13.1384C7.26825 12.878 7.26825 12.4559 7.5286 12.1956L11.7239 8.00033L7.5286 3.80506C7.26825 3.54471 7.26825 3.1226 7.5286 2.86225Z"
                                                    fill="white" />
                                            </svg></div>
                                    </a>
                                    <div className="button_subtitle">No credit card needed</div>
                                </div>
                            </div>
                            <div className="logos_padding">
                            <div className="w-embed">
                                <style>
                                    {`
                                    .logos_row {
                                        will-change: transform;
                                        animation: brand-horizontal 150s linear infinite;
                                    }

                                    @keyframes brand-horizontal {
                                        from {
                                        transform: translateX(0);
                                        }

                                        to {
                                        transform: translateX(calc(-100% - 46px));
                                        }
                                    }

                                    @media screen and (min-width: 1440px) {
                                        @keyframes brand-horizontal {
                                        from {
                                            transform: translateX(0);
                                        }

                                        to {
                                            transform: translateX(calc(-100% - 72px));
                                        }
                                        }
                                    }
                                    `}
                                </style>
                            </div>
                                <div className="logos">
                                    <div className="logos_row"><a id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c03-8c4e74c2"
                                            href="https://www.accenture.com/us-en" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c05-8c4e74c2"
                                            href="https://www.amazon.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c07-8c4e74c2"
                                            href="https://www.aljazeera.com/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a href="https://kpmg.com"
                                            target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c0b-8c4e74c2"
                                            href="https://kw.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c0d-8c4e74c2"
                                            href="https://www.nvidia.com/en-us/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c11-8c4e74c2"
                                            href="https://pattern.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c13-8c4e74c2"
                                            href="https://www.salesforce.com/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c17-8c4e74c2"
                                            href="https://www.volvo.com/en/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
                                                loading="lazy" alt="" className="logos_img" /></a></div>
                                    <div className="logos_row"><a id="w-node-_069f9897-76a0-0b51-0358-ff116630c3fe-8c4e74c2"
                                            href="https://www.accenture.com/us-en" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_069f9897-76a0-0b51-0358-ff116630c400-8c4e74c2"
                                            href="https://www.amazon.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_069f9897-76a0-0b51-0358-ff116630c402-8c4e74c2"
                                            href="https://www.aljazeera.com/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a href="https://kpmg.com"
                                            target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_069f9897-76a0-0b51-0358-ff116630c406-8c4e74c2"
                                            href="https://kw.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_069f9897-76a0-0b51-0358-ff116630c408-8c4e74c2"
                                            href="https://www.nvidia.com/en-us/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_069f9897-76a0-0b51-0358-ff116630c40c-8c4e74c2"
                                            href="https://pattern.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_069f9897-76a0-0b51-0358-ff116630c40e-8c4e74c2"
                                            href="https://www.salesforce.com/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_069f9897-76a0-0b51-0358-ff116630c410-8c4e74c2"
                                            href="https://www.volvo.com/en/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
                                                loading="lazy" alt="" className="logos_img" /></a></div>
                                    <div className="logos_row"><a id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbb-8c4e74c2"
                                            href="https://www.accenture.com/us-en" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbd-8c4e74c2"
                                            href="https://www.amazon.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbf-8c4e74c2"
                                            href="https://www.aljazeera.com/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a href="https://kpmg.com"
                                            target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc3-8c4e74c2"
                                            href="https://kw.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc5-8c4e74c2"
                                            href="https://www.nvidia.com/en-us/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc9-8c4e74c2"
                                            href="https://pattern.com/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dcb-8c4e74c2"
                                            href="https://www.salesforce.com/" target="_blank"
                                            className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
                                                loading="lazy" alt="" className="logos_img" /></a><a
                                            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dcd-8c4e74c2"
                                            href="https://www.volvo.com/en/" target="_blank" className="w-inline-block"><img
                                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
                                                loading="lazy" alt="" className="logos_img" /></a></div>
                                </div>
                                <div className="logos-shadows right"></div>
                                <div className="logos-shadows"></div>
                            </div>
                        </div>
                        <div className="hero_video_wrap">
                            <div className="video_script_wrap">
                                <div className="script_tabs">
                                    <aside id="script_tab1"
                                        className="script_tab is-active w-node-_19293a8a-3f7c-c6bd-00d9-749ad883517d-8c4e74c2">
                                        <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf826fcbe9010b22000e_hero_avatar_1.webp"
                                            loading="lazy" alt="" className="script_tab_img" /></aside>
                                    <div id="script_tab2"
                                        className="script_tab w-node-_0163b902-b715-43ac-6bf1-581d47c877bd-8c4e74c2"><img
                                            src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf82026f22092b01126f_hero_avatar_2.webp"
                                            loading="lazy" alt="" className="script_tab_img" /></div>
                                    <div id="script_tab3"
                                        className="script_tab w-node-_45435275-c362-08f3-14a8-d6d6518a8c29-8c4e74c2"><img
                                            src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6566cf837db334699b6f542b_hero_avatar_3.webp"
                                            loading="lazy" alt="" className="script_tab_img" /></div>
                                </div>
                                <div id="w-node-acbe90e9-4c8f-0138-a534-db5ffd0856f4-8c4e74c2">
                                    <div className="script_heading">Script</div>
                                    <div id="hero-script" className="script_para"></div>
                                </div>
                            </div>
                            <div id="hero-video-1" className="hero_video_tabcontent">
                            <div className="w-embed">
                                <style>
                                    {`
                                    .hero-video::-webkit-media-controls,
                                    .ai_voice_video::-webkit-media-controls,
                                    .muted-video::-webkit-media-controls,
                                    .muted-video::-webkit-media-controls {
                                        display: none !important;
                                    }

                                    .hero-video::-moz-media-controls,
                                    .ai_voice_video::-moz-media-controls,
                                    .muted-video::-moz-media-controls,
                                    .muted-video::-moz-media-controls {
                                        display: none !important;
                                    }

                                    .hero-video::-ms-media-controls,
                                    .ai_voice_video::-ms-media-controls,
                                    .translator_video::-ms-media-controls,
                                    .muted-video::-ms-media-controls {
                                        display: none !important;
                                    }

                                    .video-preview {
                                        aspect-ratio: 16/9;
                                        height: auto;
                                        width: 100%;
                                        margin-right: auto;
                                        margin-left: auto;
                                        object-fit: cover;
                                        position: relative;
                                        z-index: 2;
                                    }

                                    .hero-video {
                                        aspect-ratio: 16/9;
                                        transform: scale(1.01);
                                        height: auto;
                                        width: 100%;
                                        margin-right: auto;
                                        margin-left: auto;
                                        object-fit: cover;
                                        display: flex;
                                        position: relative;
                                    }

                                    .hero_video_tabcontent {
                                        aspect-ratio: 16/9;
                                    }

                                    .muted-video {
                                        aspect-ratio: 16/9;
                                        transform: scale(1.01);
                                        height: auto;
                                        width: 100%;
                                        margin-right: auto;
                                        margin-left: auto;
                                        object-fit: cover;
                                        display: flex;
                                        position: relative;
                                    }

                                    @media screen and (max-width: 478px) {
                                        .hero-video,
                                        .muted-video,
                                        .ai_voice_video,
                                        .translator_video,
                                        .footer_cta_video {
                                        display: none;
                                        }

                                        .video-preview {
                                        height: 100%;
                                        display: block;
                                        }
                                    }
                                    `}
                                </style>

                                <video
                                    className="hero-video"
                                    src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4"
                                    type="video/mp4"
                                    muted
                                    autoPlay
                                    loop
                                ></video>
                            </div><img
                                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1.webp"
                                    loading="lazy" sizes="(max-width: 479px) 87vw, 100vw"
                                    srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1.webp 1440w"
                                    alt="" className="video-preview" />
                                <div className="video_purple_blur"></div>
                                <div className="video_btn_wrap is-hero">
                                    <div className="video_btn">
                                        <div className="btn_play_icon w-embed"><svg width="18" height="18"
                                                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clip-rule="evenodd"
                                                    d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                                                    fill="white" />
                                            </svg></div>
                                        <div>Demo</div>
                                    </div>
                                </div>
                            </div>
                            <div id="hero-video-2" className="hero_video_tabcontent is-hidden">
                                <div className="w-embed"><video className="hero-video"
                                        src="https://resource.heygencdn.com/homepage/header_video_studio_avatar2.mp4"
                                        type="video/mp4" muted autoplay loop>
                                    </video></div><img
                                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2.webp"
                                    loading="lazy" sizes="100vw"
                                    srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9760dabb71952ad0eb23_hero-video-2.webp 1440w"
                                    alt="" className="video-preview" />
                                <div className="video_purple_blur"></div>
                                <div className="video_btn_wrap is-hero">
                                    <div className="video_btn">
                                        <div className="btn_play_icon w-embed"><svg width="18" height="18"
                                                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clip-rule="evenodd"
                                                    d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                                                    fill="white" />
                                            </svg></div>
                                        <div>Demo</div>
                                    </div>
                                </div>
                            </div>
                            <div id="hero-video-3" className="hero_video_tabcontent is-hidden">
                                <div className="w-embed"><video className="hero-video"
                                        src="https://resource.heygencdn.com/homepage/header_video_instant_avatar2.mp4"
                                        type="video/mp4" muted autoplay loop>
                                    </video></div><img
                                    src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3.webp"
                                    loading="lazy" sizes="100vw"
                                    srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3.webp 1440w"
                                    alt="" className="video-preview" />
                                <div className="video_purple_blur"></div>
                                <div className="video_btn_wrap is-hero">
                                    <div className="video_btn">
                                        <div className="btn_play_icon w-embed"><svg width="18" height="18"
                                                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clip-rule="evenodd"
                                                    d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                                                    fill="white" />
                                            </svg></div>
                                        <div>Demo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Section