import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export const App = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen flex flex-col max-w-[600px] m-auto items-center justify-center gap-4">
      <Button>React Table</Button>
      <Input placeholder="Search..." className="ml-4" />
    </div>
  );
};
