import { cnhHdhData } from '../data/historyData';
import { Settings, Target, Zap, Rocket, CheckCircle2 } from 'lucide-react';

export default function Section2() {
  return (
    <section id="cnh-hdh" className="min-h-screen w-full flex flex-col justify-center items-center py-24 px-4 md:px-8 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-lg font-black text-sky-600 uppercase tracking-widest mb-4">Trọng tâm phát triển</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tight">Công Nghiệp Hóa - Hiện Đại Hóa</h3>
          <div className="w-32 h-2 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Quan điểm */}
            <div className="bg-white p-10 border border-slate-200 rounded-[2.5rem] hover:border-sky-300 transition-colors shadow-xl h-full">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-sky-100 text-sky-600 rounded-3xl border border-sky-200">
                  <Settings size={40} />
                </div>
                <h4 className="text-4xl font-black text-slate-900">Quan điểm & Chỉ đạo</h4>
              </div>
              
              <ul className="space-y-6 mb-10">
                {cnhHdhData.viewpoint.map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-slate-700 items-start">
                    <CheckCircle2 className="text-sky-500 shrink-0 mt-1" size={28} />
                    <span className="text-2xl font-bold leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <h5 className="text-xl font-bold text-slate-500 mb-6 uppercase tracking-wider">6 Quan điểm cốt lõi</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cnhHdhData.sixPerspectives.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl hover:bg-sky-50 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-200 text-sky-700 font-black shrink-0">{idx + 1}</span>
                    <span className="text-slate-800 font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 h-full flex flex-col">
            {/* Mục tiêu */}
            <div className="bg-gradient-to-br from-sky-600 to-blue-700 p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl flex-2">
              <Target className="absolute -right-10 -bottom-10 text-white/10" size={240} />
              <h4 className="text-3xl font-black text-white mb-8 relative z-10 flex items-center gap-4">
                <Rocket className="text-yellow-300" size={36} />
                Mục tiêu chiến lược
              </h4>
              <div className="space-y-6 relative z-10">
                {cnhHdhData.goals.map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                    <span className="text-yellow-300 font-black text-2xl mb-3 block">{item.congress}</span>
                    <div className="text-white font-bold text-xl leading-relaxed space-y-3">
                      <p className="flex items-center gap-3"><span className="w-2.5 h-2.5 bg-yellow-300 rounded-full" /> {item.target}</p>
                      {item.target2 && <p className="flex items-center gap-3"><span className="w-2.5 h-2.5 bg-yellow-300 rounded-full" /> {item.target2}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Giai đoạn mới & Nội dung */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-yellow-100 border border-yellow-200 rounded-2xl">
                    <Zap className="text-yellow-600" size={28} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Giai đoạn mới</h4>
                </div>
                <ul className="space-y-4">
                  {cnhHdhData.newPhase.map((item, idx) => (
                    <li key={idx} className="text-slate-700 font-bold flex items-center gap-3 text-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl">
                 <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-100 border border-emerald-200 rounded-2xl">
                    <Target className="text-emerald-600" size={28} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Nội dung cốt lõi</h4>
                </div>
                <ul className="space-y-4">
                  {cnhHdhData.keyContents.map((item, idx) => (
                    <li key={idx} className="text-slate-700 font-bold flex items-center gap-3 text-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
