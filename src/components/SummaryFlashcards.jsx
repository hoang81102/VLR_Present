import { shortSummary, eightImportantDates } from '../data/historyData';
import { Zap, AlertCircle } from 'lucide-react';

export default function SummaryFlashcards() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-24 px-4 md:px-8 bg-white border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Tóm tắt siêu ngắn */}
        <div className="bg-slate-50 border border-indigo-100 p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden group hover:border-indigo-300 transition-colors h-full">
          <Zap className="absolute -right-10 -top-10 text-indigo-100 group-hover:text-indigo-200 transition-colors duration-500" size={240} />
          
          <h3 className="text-4xl font-black text-slate-900 mb-12 flex items-center gap-5 relative z-10">
            <div className="p-5 bg-indigo-100 rounded-3xl text-indigo-600 shadow-sm border border-indigo-200">
              <Zap size={36} />
            </div>
            Tóm Tắt Khóa
          </h3>
          
          <ul className="space-y-5 relative z-10">
            {shortSummary.map((item, idx) => (
               <li key={idx} className="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all font-bold text-2xl text-slate-700 leading-snug">
                 <div className="w-12 h-12 rounded-[1rem] bg-indigo-50 text-indigo-600 flex items-center justify-center font-black shrink-0 text-2xl border border-indigo-100 shadow-sm">
                   {idx + 1}
                 </div>
                 <span className="leading-tight">{item}</span>
               </li>
            ))}
          </ul>
        </div>

        {/* 8 Mốc Cần Nhớ */}
        <div className="bg-slate-50 border border-orange-100 p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden group hover:border-orange-300 transition-colors h-full">
          <AlertCircle className="absolute -right-10 -top-10 text-orange-100 group-hover:text-orange-200 transition-colors duration-500" size={240} />
          
          <h3 className="text接-4xl font-black text-slate-900 mb-12 flex items-center gap-5 relative z-10">
            <div className="p-5 bg-orange-100 rounded-3xl text-orange-600 shadow-sm border border-orange-200">
              <AlertCircle size={36} />
            </div>
            8 Mốc Bắt Buộc Nhớ
          </h3>
          
          <ul className="space-y-5 relative z-10">
            {eightImportantDates.map((item, idx) => {
              const [year, ...rest] = item.split(' – ');
              return (
               <li key={idx} className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 rounded-[2rem] bg-white border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all text-2xl font-bold text-slate-700">
                 <span className="px-5 py-3 bg-orange-50 text-orange-600 font-black rounded-2xl text-2xl min-w-[120px] text-center shrink-0 border border-orange-200 shadow-sm">
                   {year}
                 </span>
                 <span className="leading-tight">{rest.join(' – ')}</span>
               </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  )
}
