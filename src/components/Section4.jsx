import { partyBuildingData } from '../data/historyData';
import { ShieldAlert, Users2, ShieldCheck, Scale, Gavel } from 'lucide-react';

export default function Section4() {
  const yearsColor = {
    "1999": "from-stone-500 to-stone-400 text-white shadow-stone-500/30",
    "2006": "from-rose-500 to-rose-400 text-white shadow-rose-500/30",
    "2012": "from-orange-500 to-orange-400 text-white shadow-orange-500/30",
    "2016": "from-red-600 to-red-500 text-white shadow-red-600/30",
    "2021": "from-purple-600 to-purple-500 text-white shadow-purple-600/30",
  };

  const getYear = (name) => {
    const match = name.match(/\((\d{4})\)/);
    return match ? match[1] : "2021";
  };

  return (
    <section id="xay-dung-dang" className="min-h-screen w-full flex flex-col justify-center items-center py-24 px-4 md:px-8 bg-slate-100 border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-lg font-black text-rose-600 uppercase tracking-widest mb-4">Tổ Chức & Hệ Thống Chính Trị</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">Xây Dựng Chỉnh Đốn Đảng</h3>
          <div className="w-32 h-2 bg-gradient-to-r from-rose-500 to-red-600 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Các Nghị Quyết */}
          <div className="space-y-8">
            <h4 className="text-4xl font-black text-slate-900 mb-10 flex items-center gap-4">
              <div className="p-4 bg-rose-100 border border-rose-200 rounded-3xl"><ShieldAlert className="text-rose-600" size={36} /></div>
              Nghị Quyết Trọng Tâm
            </h4>
            <div className="space-y-6">
              {partyBuildingData.resolutions.map((res, idx) => {
                const year = getYear(res.name);
                const colorClass = yearsColor[year] || "from-slate-500 to-slate-400 text-white";
                return (
                  <div key={idx} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-rose-300 transition-all duration-300 shadow-xl hover:-translate-y-1 group">
                    <div className={`px-6 py-4 rounded-2xl bg-gradient-to-br transition-transform group-hover:scale-105 ${colorClass} font-black text-2xl min-w-[140px] text-center shadow-lg border border-white/20`}>
                      {year}
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <span className="text-slate-500 font-bold block mb-2 text-lg">{res.name.split(' (')[0]}</span>
                      <span className="text-slate-900 font-extrabold text-2xl leading-tight uppercase block">{res.content}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nội dung và Giải pháp */}
          <div className="space-y-10 flex flex-col h-full">
            {/* Nội dung chính */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl flex-1">
               <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-purple-100 border border-purple-200 rounded-3xl">
                    <Scale className="text-purple-600" size={36} />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900">Nội dung cốt lõi</h4>
              </div>
              <div className="flex flex-wrap gap-4">
                {partyBuildingData.mainContents.map((item, idx) => (
                  <span key={idx} className="px-6 py-4 bg-slate-50 text-slate-800 font-bold text-lg rounded-2xl border border-slate-200 flex items-center gap-3 shadow-sm">
                    <ShieldCheck size={24} className="text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Giải pháp */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl flex-1">
               <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-orange-100 border border-orange-200 rounded-3xl">
                    <Gavel className="text-orange-600" size={36} />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900">Giải pháp thực hiện</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {partyBuildingData.solutions.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-5 text-slate-700 text-xl font-bold bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm hover:bg-orange-50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                      <Users2 size={24} className="text-orange-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
