import { timelineEvents } from '../data/historyData';
import { Star } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="timeline" className="min-h-screen w-full py-24 px-4 md:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 animate-fade-in relative z-10">
          <h2 className="text-lg font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Lịch Sử Đảng 1986 - 2045</h2>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Các Mốc Thời Gian Trọng Điểm</h3>
          <div className="w-48 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 mx-auto mt-8 rounded-full shadow-[0_5px_15px_rgba(99,102,241,0.3)]" />
        </div>

        <div className="relative wrap overflow-visible p-4 md:p-10 h-full">
          {/* Central Vertical Line (Desktop) */}
          <div className="absolute border-opacity-30 border-slate-300 h-full border-2 left-1/2 -mx-px rounded-full hidden md:block z-0 bg-slate-200" />

          <div className="space-y-16 md:space-y-24 relative z-10">
            {timelineEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`mb-12 flex justify-between items-center w-full ${isEven ? 'md:flex-row-reverse' : ''} flex-col md:flex-row group`}>
                  
                  {/* Empty Space for layout */}
                  <div className="order-1 md:w-5/12 hidden md:block" />
                  
                  {/* Center Node */}
                  <div className={`z-20 flex items-center justify-center order-1 w-20 h-20 rounded-full border-[6px] border-white shadow-xl ${event.highlight ? 'bg-gradient-to-br from-blue-600 to-indigo-600' : 'bg-slate-400'} group-hover:scale-110 transition-transform duration-300 md:-mx-10 shrink-0`}>
                    <h1 className="font-black text-white text-lg tracking-wider">{event.year}</h1>
                  </div>
                  
                  {/* Content Box */}
                  <div className={`order-1 bg-white rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] w-full md:w-[45%] p-10 border hover:-translate-y-2 transition-transform duration-300 ${event.highlight ? 'border-blue-200 hover:border-blue-400' : 'border-slate-200 hover:border-slate-300'} mt-8 md:mt-0 relative`}>
                     
                     {/* Mobile Year Badge */}
                     <div className="md:hidden absolute -top-6 left-8 px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-xl text-xl border-4 border-white shadow-lg">
                       {event.year}
                     </div>
                    
                    <div className="flex items-center justify-between mb-4 mt-6 md:mt-0">
                      <h3 className={`font-black text-3xl ${event.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-slate-800'}`}>
                        {event.title}
                      </h3>
                      {event.highlight && (
                        <div className="p-3 bg-yellow-50 rounded-2xl border border-yellow-200">
                          <Star size={32} className="text-yellow-500 fill-yellow-500" />
                        </div>
                      )}
                    </div>
                    
                    <span className="inline-block px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold uppercase tracking-widest mb-6 border border-slate-200 shadow-sm">
                      {event.type}
                    </span>
                    
                    <p className="text-xl leading-relaxed text-slate-600 font-medium">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
