import Headline from "components/ui/headline";
import { FaPlaneDeparture, FaThumbsUp, FaUserCheck } from "react-icons/fa";



const OurAchievements = () => {
  return (
    <section className="py-16 ">
      {/* Content Container */}
      <div className="max-w-screen-xl mx-auto px-6 text-center ">
        {/* Section Title */}
        
        <Headline
        title="Our Achievements"
        subtitle="We take pride in delivering exceptional travel experiences. Here’s what makes us stand out."
        classes={{
          container: "max-w-4xl mx-auto ",
          title: "text-5xl ",
          subtitle: "text-2xl ",
        }}
      />



        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Happy Customers */}
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-20 shadow-xl rounded-lg">
            <FaUserCheck className="text-6xl text-primary-600 mb-4" />
            <h3 className="text-3xl font-extrabold">5000+</h3>
            <p className="text-lg font-medium">Happy Travelers</p>
          </div>

          {/* Trips Taken */}
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-20 shadow-xl rounded-lg">
            <FaPlaneDeparture className="text-6xl text-primary-600 mb-4" />
            <h3 className="text-3xl font-extrabold">1500+</h3>
            <p className="text-lg font-medium">Trips Taken</p>
          </div>

          {/* Positive Reviews */}
          <div className="flex flex-col items-center justify-center p-6 bg-white bg-opacity-20 shadow-xl rounded-lg">
            <FaThumbsUp className="text-6xl text-primary-600 mb-4" />
            <h3 className="text-3xl font-extrabold">2000+</h3>
            <p className="text-lg font-medium">5-Star Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default  OurAchievements