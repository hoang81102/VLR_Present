import { overviewData } from '../data/historyData';
import { Target, Globe, Home } from 'lucide-react';

export default function Section1() {
  return (
    <section id="tong-quan" className="min-h-screen w-full flex flex-col justify-center items-center py-24 px-4 md:px-8 bg-white relative overflow-hidden text-slate-900">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-lg font-black text-red-600 uppercase tracking-widest mb-4">Giai đoạn 1996 - Nay</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tight">Tổng Quan Bối Cảnh</h3>
          <div className="w-32 h-2 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Đặc điểm chung */}
          <div className="bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
            <div className="w-20 h-20 bg-red-100/50 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-red-200">
              <Target className="text-red-600" size={40} />
            </div>
            <h4 className="text-3xl font-black mb-8">Đặc điểm chung</h4>
            <ul className="space-y-5">
              {overviewData.generalCharacteristics.map((item, idx) => (
                <li key={idx} className="flex gap-4 text-slate-700 items-start">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-2.5 shrink-0" />
                  <span className="leading-relaxed text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bối cảnh quốc tế */}
          <div className="bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
             <div className="w-20 h-20 bg-blue-100/50 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-blue-200">
              <Globe className="text-blue-600" size={40} />
            </div>
            <h4 className="text-3xl font-black mb-8">Bối cảnh quốc tế</h4>
            <ul className="space-y-5">
              {overviewData.internationalContext.map((item, idx) => (
                <li key={idx} className="flex gap-4 text-slate-700 items-start">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                  <span className="leading-relaxed text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bối cảnh trong nước */}
          <div className="bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
             <div className="w-20 h-20 bg-amber-100/50 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-amber-200">
              <Home className="text-amber-600" size={40} />
            </div>
            <h4 className="text-3xl font-black mb-8">Bối cảnh trong nước</h4>
            <ul className="space-y-5">
              {overviewData.domesticContext.map((item, idx) => (
                <li key={idx} className="flex gap-4 text-slate-700 items-start">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                  <span className="leading-relaxed text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
