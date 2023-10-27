const App = () => {
 return (
  <>
   <h1 className="mb-4 text-2xl font-bold">Work Service</h1>
   <div className="grid w-full grid-cols-3 gap-4">
    <div className="flex items-center justify-center p-12 bg-slate-900">
     <h1 className="text-4xl font-bold text-slate-50">Admin</h1>
    </div>
    <div className="flex items-center justify-center p-12 bg-gray-900">
     <h1 className="text-4xl font-bold text-gray-50">Clients</h1>
    </div>
    <div className="flex items-center justify-center p-12 bg-zinc-900">
     <h1 className="text-4xl font-bold text-zinc-50">Experts</h1>
    </div>
   </div>
  </>
 )
}

export default App
