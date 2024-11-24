import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const RecsContainer = () => {
  return (
    <div className="w-full flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%] md:w-[25%] lg:w-[20%] h-full bg-[#121519] border-r-[0.3px] border-gray-700">
        <div className="w-full h-[5rem] bg-[#e85262] p-3">
          <div className="w-full flex justify-between items-center h-full ">
            <div className="flex items-center gap-2">
            <div className="flex bg-black rounded-full w-[2.2rem] h-[2.2rem] items-center">

            </div>
            <h6 className="text-white font-bold text-m">Akshay</h6>
            </div>
          </div>

        </div>
        <div className="h-full w-full p-3">
        <Tabs defaultValue="account" style={{background:"none"}} className="w-full bg-none">
  <TabsList style={{background:"none"}} className="w-full bg-none">
    <TabsTrigger style={{background:"none",color:"white"}} value="account" className="text-white">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="text-white">Make changes to your account here.</TabsContent>
  <TabsContent value="password" className="text-white">Change your password here.</TabsContent>
</Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[80%] md:w-[75%] lg:w-[80%] h-full bg-black"></div>
    </div>
  );
};

export default RecsContainer;
