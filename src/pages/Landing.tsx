
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, GraduationCap, Briefcase, Building, School } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#FFFCF7] flex flex-col">
      <Navbar />
      
      {/* Hero Section with Dynamic Background */}
      <div className="relative overflow-hidden bg-[#F1F0FB] py-24">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full">
            {/* Animated circles */}
            <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-[#9b87f5]/20 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute top-40 right-[15%] w-40 h-40 rounded-full bg-[#E5DEFF]/20 animate-[pulse_5s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute bottom-20 left-[20%] w-24 h-24 rounded-full bg-[#D3E4FD]/20 animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
            
            {/* Floating elements animation */}
            <div className="absolute top-10 right-[30%] w-16 h-16">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Person working"
                className="w-full h-full object-cover rounded-full animate-[bounce_6s_ease-in-out_infinite]"
              />
            </div>
            <div className="absolute bottom-32 right-[10%] w-20 h-20">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Coding workspace"
                className="w-full h-full object-cover rounded-full animate-[bounce_7s_ease-in-out_infinite_0.5s]"
              />
            </div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F1F0FB]/95 via-[#F1F0FB]/80 to-[#F1F0FB]/70"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-[#1A1F2C] animate-fade-in">
              FIND YOUR DREAM JOB
            </h1>
            <p className="text-lg md:text-xl text-[#7E69AB] mb-8 max-w-2xl animate-fade-in">
              Discover thousands of job opportunities and educational resources to boost your career.
            </p>
            <Link to="/find-job">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] rounded-full px-8 group animate-fade-in">
                Explore Jobs 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
          Our Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Tech Jobs', color: 'bg-[#E5DEFF]', icon: <Briefcase className="h-8 w-8 mb-4 text-[#7E69AB]" /> },
            { name: 'Education', color: 'bg-[#F1F0FB]', icon: <GraduationCap className="h-8 w-8 mb-4 text-[#7E69AB]" /> },
            { name: 'Business', color: 'bg-[#D3E4FD]', icon: <Building className="h-8 w-8 mb-4 text-[#7E69AB]" /> },
            { name: 'Training', color: 'bg-[#F1F0FB]', icon: <School className="h-8 w-8 mb-4 text-[#7E69AB]" /> },
          ].map((category, index) => (
            <Card key={index} className={`${category.color} rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-none h-64`}>
              <CardContent className="flex flex-col items-center justify-center h-full p-6">
                {category.icon}
                <h3 className="text-xl font-bold text-[#1A1F2C]">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Performance Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            <div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-[#9b87f5]/10 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-40 right-[15%] w-32 h-32 rounded-full bg-[#E5DEFF]/10 animate-[pulse_5s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute top-1/2 left-[80%] w-20 h-20 rounded-full bg-[#D3E4FD]/10 animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-wider text-[#1A1F2C]">
            WHY CHOOSE LUCKYJOB
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#F1F0FB] rounded-2xl overflow-hidden shadow-md">
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
      </div>
      
      {/* Space before footer */}
      <div className="py-8"></div>
    </div>
  );
};

export default Landing;

