
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
        <div className="flex items-center gap-4">
          {/* Search with dropdown */}
          <div className="relative flex items-center w-[200px]">
            <Search className="absolute left-3 text-gray-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Design"
              className="w-full bg-gray-900 border-none rounded-lg py-2 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none w-[160px] h-9 text-sm text-white",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location} className="text-sm">
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Experience Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none w-[140px] h-9 text-sm text-white",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              {experiences.map((exp) => (
                <SelectItem key={exp} value={exp} className="text-sm">{exp}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Period Dropdown */}
          <Select>
            <SelectTrigger 
              className={cn(
                "bg-gray-900 border-none w-[120px] h-9 text-sm text-white",
                "data-[placeholder]:text-gray-500"
              )}
            >
              <SelectValue placeholder="Per month" />
            </SelectTrigger>
            <SelectContent>
              {periods.map((period) => (
                <SelectItem key={period} value={period} className="text-sm">{period}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Salary Range */}
          <div className="flex items-center gap-3 min-w-[300px]">
            <span className="text-sm whitespace-nowrap">Salary: ${salaryRange[0]}-${salaryRange[1]}</span>
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
