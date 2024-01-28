import React from 'react'
import ReviewsRow from './ReviewsRow'
import ReviewsRow2 from './ReviewsRow2'

function Section() {
  return (
    <section>
            <div className="w-layout-blockcontainer heygen_container w-container">
                <div className="flex-vertical-center">
                    <div className="div-block-324">
                        <div className="div-block-322">
                            <h2 className="heygen_section_heading is-center is-black">A <span
                                    className="purple-span">beloved</span> industry leader</h2>
                            <p className="heygen_para">Over 15,000 5-star reviews from across the internet</p>
                        </div>
                        <div className="div-block-323"><img
                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a0394c8c9dbd18f2835_users-love-us%204.svg"
                                loading="lazy" id="w-node-_58b9d21f-be59-888d-b5fe-0bbec8dcf005-c8dceff8" alt=""
                                className="full-width-img" /><img
                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a0398f36d836d5cad57_NaturalLanguageProcessing(NLP)_BestUsability_Total.svg"
                                loading="lazy" id="w-node-_58b9d21f-be59-888d-b5fe-0bbec8dcf006-c8dceff8" alt=""
                                className="full-width-img" /><img
                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03716ff72e09e1b1de_NaturalLanguageProcessing(NLP)_EasiestToUse_EaseOfUse.svg"
                                loading="lazy" id="w-node-_58b9d21f-be59-888d-b5fe-0bbec8dcf007-c8dceff8" alt=""
                                className="full-width-img" /><img
                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03abe8100901131b16_TexttoSpeech_BestMeetsRequirements_MeetsRequirements.svg"
                                loading="lazy" id="w-node-_58b9d21f-be59-888d-b5fe-0bbec8dcf008-c8dceff8" alt=""
                                className="full-width-img" /><img
                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03f1c2220b60bbbdf8_NaturalLanguageProcessing(NLP)_Leader_Leader.svg"
                                loading="lazy" id="w-node-_58b9d21f-be59-888d-b5fe-0bbec8dcf009-c8dceff8" alt=""
                                className="full-width-img" /><img
                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a04984ffc68fed12227_TexttoSpeech_HighPerformer_Enterprise_HighPerformer.svg"
                                loading="lazy" id="w-node-_58b9d21f-be59-888d-b5fe-0bbec8dcf00a-c8dceff8" alt=""
                                className="full-width-img" /><img
                                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65329a03bf6c7d2cf9ff627f_TexttoSpeech_HighPerformer_Mid-Market_HighPerformer.svg"
                                loading="lazy" id="w-node-_58b9d21f-be59-888d-b5fe-0bbec8dcf00b-c8dceff8" alt=""
                                className="full-width-img" /></div>
                    </div>
                </div>
            </div>
            <div className="reviews_wrapper">
                <div className="reviews_row1_wrap">
                    <ReviewsRow/>
                    <ReviewsRow/>
                    <ReviewsRow/>
                    <ReviewsRow/>
                </div>
                <div className="reviews_row2_wrap">
                    <ReviewsRow2/>
                    <ReviewsRow2/>
                    <ReviewsRow2/>
                    <ReviewsRow2/>
                </div>
                <div className="w-embed">
                    <style>
                        {`
                        .reviews_row_1 {
                            will-change: transform;
                            animation: reviews-left-horizontal 250s linear infinite;
                        }

                        .reviews_row_2 {
                            will-change: transform;
                            animation: reviews-right-horizontal 250s linear infinite;
                        }

                        @keyframes reviews-left-horizontal {
                            from {
                            transform: translateX(0);
                            }

                            to {
                            transform: translateX(-100%);
                            }
                        }

                        @keyframes reviews-right-horizontal {
                            from {
                            transform: translateX(-100%);
                            }

                            to {
                            transform: translateX(0);
                            }
                        }
                        `}
                    </style>
                </div>
            </div>
        </section>
 
  )
}

export default Section