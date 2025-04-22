
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const locations = ["New York, NY", "San Francisco, CA", "Los Angeles, CA", "Chicago, IL", "Miami, FL"];
const experiences = ["Entry Level", "Mid Level", "Senior Level", "Lead", "Manager"];
const periods = ["Per month", "Per year", "Per hour", "Per project"];

export const FilterBar = () => {
  const [salaryRange, setSalaryRange] = useState([1200, 14684]);
  
  return (
    <div className="w-full bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 xl:px-12">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Search with dropdown */}
          <div className="relative flex items-center min-w-[200px] flex-1">
            <Search className="absolute left-3 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Design"
              className="w-full bg-gray-900 border-none rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none min-w-[180px] text-white",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <SelectValue placeholder="Work location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Experience Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none min-w-[180px] text-white",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              {experiences.map((exp) => (
                <SelectItem key={exp} value={exp}>{exp}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Period Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none min-w-[180px] text-white",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <SelectValue placeholder="Per month" />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period} value={period}>{period}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Salary Range */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between mb-2">
              <span className="text-sm">Salary range</span>
              <span className="text-sm">${salaryRange[0]}-${salaryRange[1]}</span>
            </div>
            <Slider
              defaultValue={salaryRange}
              min={1200}
              max={50000}
              step={100}
              onValueChange={setSalaryRange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
