

import Image from "next/image";



export default function Features() {
  return (
    <>
    
    <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
       // data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3">
          <div className="h-[370px] relative">
        
{
  /*
  
      <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
  
  */
}
        
        <Image
            alt=""
            className="object-cover"
            src="/images/pexels-vince-2265876.jpg"
            fill
          />

          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
            <h3 className="text-2xl font-site">Our Vision</h3>
            <p className="my-6 text-sm">
            To become the leading provider of personalized and memorable travel experiences, offering tailor-made packages that exceed customer expectations and inspire a love for exploration across South Africa and beyond.
            </p>
            <a
              href="/about"
              className="text-purple-site py-6 font-site"
             // data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Read More
            </a>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
          
            {
              /*
                 <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
               */
            }
           <Image
            alt=""
            className="object-cover"
            src="/images/pexels-vitor-milanez-939243811-20057005.jpg"
            fill
          />

          </div>
          <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
            <h3 className="text-2xl font-site">Our Mission</h3>
            <p className="my-6 text-sm">
            Our mission is to transform your travel dreams into reality, ensuring every detail is meticulously planned for a seamless and unforgettable journey.
            </p>
            <a href="/about" className="text-purple-site py-6 font-site">
              Read More
            </a>
          </div>
        </div>
      </div>
    
    </>
  )


}