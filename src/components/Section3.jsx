import { marketEconomyData } from '../data/historyData';
import { BarChart3, TrendingUp, Globe2, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function Section3() {
  const iconMap = {
    "Kinh tế": <BarChart3 className="text-emerald-600" size={36} />,
    "Xã hội": <HeartHandshake className="text-pink-600" size={36} />,
    "Đối ngoại": <Globe2 className="text-blue-600" size={36} />,
    "Quốc phòng – An ninh": <ShieldCheck className="text-purple-600" size={36} />,
    "Bài học": <TrendingUp className="text-orange-600" size={36} />
  };

  const bgMap = {
    "Kinh tế": "bg-emerald-50 border-emerald-200",
    "Xã hội": "bg-pink-50 border-pink-200",
    "Đối ngoại": "bg-blue-50 border-blue-200",
    "Quốc phòng – An ninh": "bg-purple-50 border-purple-200",
    "Bài học": "bg-orange-50 border-orange-200"
  }

  return (
    <section id="kinh-te" className="min-h-screen w-full flex flex-col justify-center items-center py-24 px-4 md:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-lg font-black text-emerald-600 uppercase tracking-widest mb-4">Đổi Mới & Hội Nhập</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tight">Kinh Tế Thị Trường Định Hướng XHCN</h3>
          <div className="w-32 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Hình thành */}
          <div className="lg:col-span-12 xl:col-span-5 h-full">
            <div className="bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem] h-full shadow-xl">
              <h4 className="text-4xl font-black text-slate-900 mb-10 flex items-center gap-4">
                <div className="p-4 bg-emerald-100 rounded-2xl border border-emerald-200"><TrendingUp className="text-emerald-600" size={36} /></div>
                Quá trình hình thành
              </h4>
              
              <div className="space-y-8">
                {marketEconomyData.formation.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-emerald-300 transition-colors shadow-sm">
                    <span className="inline-block px-5 py-2 bg-emerald-100 text-emerald-700 font-black rounded-xl mb-6 text-xl border border-emerald-200">{item.period}</span>
                    <ul className="space-y-4">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-slate-700 text-xl font-medium flex items-start gap-4">
                            <CheckCircle2 size={24} className="text-emerald-500 mt-1 shrink-0" />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-8 bg-teal-50 rounded-[2rem] border border-teal-200">
                <h5 className="text-teal-900 font-black text-2xl mb-6 flex items-center gap-3">Đặc trưng cốt lõi</h5>
                <div className="flex flex-wrap gap-4">
                  {marketEconomyData.characteristics.map((char, cIdx) => (
                    <span key={cIdx} className="px-5 py-3 bg-white text-teal-800 text-lg font-bold rounded-xl border border-teal-100 shadow-sm cursor-default">
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Thành tựu */}
          <div className="lg:col-span-12 xl:col-span-7 h-full">
             <div className="bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem] h-full shadow-xl">
                <h4 className="text-4xl font-black text-slate-900 mb-10 flex items-center gap-4">
                  <div className="p-4 bg-blue-100 rounded-2xl border border-blue-200"><Globe2 className="text-blue-600" size={36} /></div>
                  Thành tựu & Bài học
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {marketEconomyData.achievements.map((ach, idx) => (
                    <div key={idx} className={`p-8 rounded-[2rem] border ${bgMap[ach.category]} shadow-sm hover:shadow-md transition-shadow ${idx === marketEconomyData.achievements.length - 1 ? 'md:col-span-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                          {iconMap[ach.category]}
                        </div>
                        <h5 className="text-2xl font-black text-slate-900">{ach.category}</h5>
                      </div>
                      <ul className="space-y-4">
                        {ach.items.map((item, i) => (
                          <li key={i} className="text-slate-700 text-xl font-medium flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
