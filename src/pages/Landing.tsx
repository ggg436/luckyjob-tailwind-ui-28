import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { Footer3D } from '@/components/Footer3D';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#FFFCF7] flex flex-col">
      <Navbar />
      
      {/* Hero Section with Dynamic Background */}
      <div className="relative overflow-hidden bg-[#F2FCE2] py-24">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full">
            {/* Animated circles */}
            <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-[#FEC6A1]/20 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute top-40 right-[15%] w-40 h-40 rounded-full bg-[#E5DEFF]/20 animate-[pulse_5s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute bottom-20 left-[20%] w-24 h-24 rounded-full bg-[#D3E4FD]/20 animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
            
            {/* Floating nuts animation */}
            <div className="absolute top-10 right-[30%] w-16 h-16">
              <img 
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Floating nut"
                className="w-full h-full object-cover rounded-full animate-[bounce_6s_ease-in-out_infinite]"
              />
            </div>
            <div className="absolute bottom-32 right-[10%] w-20 h-20">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Floating nut"
                className="w-full h-full object-cover rounded-full animate-[bounce_7s_ease-in-out_infinite_0.5s]"
              />
            </div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2FCE2]/95 via-[#F2FCE2]/80 to-[#F2FCE2]/70"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-[#3A5A40] animate-fade-in">
              IT'S YOUR FIRST TIME?
            </h1>
            <p className="text-lg md:text-xl text-[#588157] mb-8 max-w-2xl animate-fade-in">
              Discover our collection of premium natural foods, nuts, and healthy snacks.
            </p>
            <Link to="/find-job">
              <Button size="lg" className="bg-[#A3B18A] hover:bg-[#588157] rounded-full px-8 group animate-fade-in">
                Explore categories! 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3A5A40]">
          Our Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Dried Fruits', color: 'bg-[#FFDEE2]', image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Supplements', color: 'bg-[#E5DEFF]', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Drinks', color: 'bg-[#FEC6A1]', image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Natural Nuts', color: 'bg-[#FDE1D3]', image: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Bars and Snacks', color: 'bg-[#D3E4FD]', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
          ].map((category, index) => (
            <Card key={index} className={`${category.color} rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-none h-64`}>
              <div className="relative h-full">
                <div className="absolute inset-0 opacity-20" 
                     style={{
                       backgroundImage: `url(${category.image})`,
                       backgroundSize: "cover",
                       backgroundPosition: "center"
                     }}></div>
                <CardContent className="flex items-center justify-center h-full">
                  <h3 className="text-xl font-bold text-[#3A5A40]">{category.name}</h3>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Best Quality Section with Enhanced Background */}
      <div className="py-16 bg-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            {/* Animated floating elements */}
            <div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-[#FEC6A1]/10 animate-[pulse_4s_ease-in-out_infinite]"></div>
            <div className="absolute bottom-40 right-[15%] w-32 h-32 rounded-full bg-[#E5DEFF]/10 animate-[pulse_5s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute top-1/2 left-[80%] w-20 h-20 rounded-full bg-[#D3E4FD]/10 animate-[pulse_3s_ease-in-out_infinite_1s]"></div>
          </div>
        </div>

        {/* Best Quality Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-wider text-black">
            BEST QUALITY BASED ON FOODIES FEEDBACK
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#F2FCE2] rounded-2xl overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9 relative cursor-pointer group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#3A5A40] border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Happy customer with product"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="px-6 py-8 bg-white rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-[#3A5A40] mb-6">Our Performance</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">New Reviews</span>
                    <span className="text-sm font-bold text-green-600">+24%</span>
                  </div>
                  <Progress value={76} className="h-2 bg-gray-100" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">New Users</span>
                    <span className="text-sm font-bold text-green-600">+18%</span>
                  </div>
                  <Progress value={64} className="h-2 bg-gray-100" />
                </div>
                
                <Separator className="my-4" />
                
                <div className="text-center pt-4">
                  <Link to="/find-job">
                    <Button variant="outline" className="rounded-full border-[#3A5A40] text-[#3A5A40] hover:bg-[#3A5A40] hover:text-white">
                      Browse Products
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
      
      {/* 3D Footer - explicitly adding it at the bottom of the page */}
      <div className="mt-auto">
        <Footer3D />
      </div>
    </div>
  );
};

export default Landing;
