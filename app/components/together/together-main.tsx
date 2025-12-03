import React from 'react'
import TogetherLeft from './together-left'
import TogetherRight from './together-right'
import MarqueeTabs from './marquee-strip'

const TogetherMain = () => {
    return (
        <div className="together-wrapper w-full flex items-center  section-gap">
            <div className="w-full">
                <div className="container mx-auto mb-30">
                    <div className="grid grid-cols-12 items-center pt-10 pb-8">
                        <div className="col-span-7 ">
                            <TogetherLeft />
                        </div>
                        <div className="col-span-5 flex items-center">
                            <TogetherRight />
                        </div>
                    </div>

                </div>
                <MarqueeTabs />

            </div>

        </div >
    )
}

export default TogetherMain
