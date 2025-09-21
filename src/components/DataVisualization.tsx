import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { TrendingUp, Users, BookOpen, Award, ArrowUp, ArrowDown, Minus } from "lucide-react";

interface DataPoint {
  label: string;
  value: number;
  color: string;
  icon: React.ComponentType<any>;
}

const DataVisualization = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const performanceData: DataPoint[] = [
    { label: "KCSE Pass Rate", value: 98, color: "hsl(150, 65%, 32%)", icon: TrendingUp },
    { label: "University Placement", value: 95, color: "hsl(150, 45%, 55%)", icon: BookOpen },
    { label: "STEM Students", value: 78, color: "hsl(200, 70%, 50%)", icon: Users },
    { label: "A Grade Students", value: 25, color: "hsl(45, 80%, 50%)", icon: Award }
  ];

  const achievementsData = [
    { year: "2024", value: 98, label: "KCSE Pass Rate" },
    { year: "2023", value: 95, label: "KCSE Pass Rate" },
    { year: "2022", value: 92, label: "KCSE Pass Rate" },
    { year: "2021", value: 89, label: "KCSE Pass Rate" }
  ];

  return (
    <div className="py-12">
      <motion.div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Performance Metrics */}
        <Card className="shadow-modern">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">Academic Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {performanceData.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="text-2xl font-bold" style={{ color: item.color }}>
                      <CountUp 
                        end={item.value} 
                        duration={2} 
                        suffix={item.label.includes("Rate") || item.label.includes("Students") ? "%" : ""}
                      />
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.value}%` } : { width: 0 }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Trend Chart */}
        <Card className="shadow-modern">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">Performance Trend (2021-2024)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievementsData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">{item.year}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-sm text-muted-foreground">Academic Year {item.year}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      <CountUp end={item.value} duration={2} suffix="%" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {index > 0 && item.value > achievementsData[index - 1].value ? (
                        <div className="flex items-center space-x-1 text-green-600">
                          <ArrowUp className="h-3 w-3" />
                          <span>+{item.value - achievementsData[index - 1].value}%</span>
                        </div>
                      ) : index > 0 ? (
                        <div className="flex items-center space-x-1 text-red-600">
                          <ArrowDown className="h-3 w-3" />
                          <span>{item.value - achievementsData[index - 1].value}%</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Minus className="h-3 w-3" />
                          <span>Baseline</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DataVisualization;
