
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, GraduationCap, Briefcase, Building, School, Search, Play } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          <div className="flex flex-col justify-center z-10">
            <h2 className="text-5xl font-extrabold text-[#1A1F2C] mb-4">
              FIND YOUR DREAM JOB
            </h2>
            <p className="text-xl text-[#7E69AB] mb-8">
              Discover thousands of job opportunities and educational resources to boost your career journey.
            </p>
            <Link to="/find-job">
              <Button size="lg" className="w-fit bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg font-semibold rounded-full">
                Explore Jobs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="relative h-full min-h-[400px]">
            {/* Background gradient and image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F1F0FB] to-transparent">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Professional workspace"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Explore Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Tech Jobs",
              icon: <Briefcase className="h-8 w-8 mb-4 text-[#7E69AB]" />,
              image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
              color: "bg-[#E5DEFF]"
            },
            {
              title: "Education",
              icon: <GraduationCap className="h-8 w-8 mb-4 text-[#7E69AB]" />,
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
              color: "bg-[#F1F0FB]"
            },
            {
              title: "Business",
              icon: <Building className="h-8 w-8 mb-4 text-[#7E69AB]" />,
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
              color: "bg-[#D3E4FD]"
            }
          ].map((category, index) => (
            <Card 
              key={index} 
              className={`${category.color} relative overflow-hidden rounded-2xl cursor-pointer h-[300px] border-none`}
            >
              <CardContent className="flex flex-col items-center justify-center h-full p-6 relative z-10">
                {category.icon}
                <h3 className="text-xl font-bold text-[#1A1F2C]">{category.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1A1F2C]">
            WHY CHOOSE LUCKYJOB
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#F1F0FB] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Team collaboration"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="px-6 py-8 bg-white rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-6">Our Performance</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Job Success Rate</span>
                    <span className="text-sm font-bold text-[#7E69AB]">+84%</span>
                  </div>
                  <Progress value={84} className="h-2 bg-gray-100" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Career Growth</span>
                    <span className="text-sm font-bold text-[#7E69AB]">+92%</span>
                  </div>
                  <Progress value={92} className="h-2 bg-gray-100" />
                </div>
                
                <Separator className="my-4" />
                
                <div className="text-center pt-4">
                  <Link to="/find-job">
                    <Button variant="outline" className="rounded-full border-[#7E69AB] text-[#7E69AB] hover:bg-[#7E69AB] hover:text-white">
                      Find Your Next Job
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#F1F0FB] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">JOIN OUR PROFESSIONAL COMMUNITY</h2>
          <p className="text-[#7E69AB] max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for exclusive job opportunities, career tips, and first access to new features.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border-none focus:outline-none"
            />
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6 py-3 rounded-r-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
