import { congress13Data } from '../data/historyData';
import { Target, Sparkles, Flag, Heart } from 'lucide-react';

export default function Section5() {
  return (
    <section id="dai-hoi-13" className="min-h-screen w-full flex flex-col justify-center items-center py-24 px-4 md:px-8 bg-white border-t border-slate-200">
      <div className="w-full max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-red-50 via-white to-yellow-50 border border-red-100 rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Abstract Backgrounds */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-200/50 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-200/50 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center mb-24 animate-fade-in">
             <span className="inline-block py-2.5 px-8 rounded-full bg-red-100 text-red-700 font-black border border-red-200 mb-8 tracking-[0.2em] uppercase text-sm shadow-sm">
               Đại Hội XIII
             </span>
             <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 mb-8 pb-2">
               Khát Vọng 2045
             </h2>
             <p className="text-2xl md:text-3xl text-slate-700 max-w-4xl mx-auto font-bold leading-relaxed">
               Hướng tới kỷ nguyên vươn mình của dân tộc, xây dựng đất nước phồn vinh, hạnh phúc.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {/* Mục tiêu */}
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-24 h-24 rounded-[2rem] bg-yellow-100 flex items-center justify-center mb-10 mx-auto md:mx-0 shadow-sm border border-yellow-200">
                <Target className="text-yellow-600" size={48} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 text-center md:text-left">Mục Tiêu</h3>
              <ul className="space-y-6">
                {congress13Data.goals.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-700 text-2xl font-bold">
                    <Sparkles className="text-yellow-500 mt-1.5 shrink-0" size={28} />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Đại đoàn kết */}
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-24 h-24 rounded-[2rem] bg-red-100 flex items-center justify-center mb-10 mx-auto md:mx-0 shadow-sm border border-red-200">
                <Flag className="text-red-600" size={48} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 text-center md:text-left">Đại Đoàn Kết</h3>
              <ul className="space-y-6">
                {congress13Data.solidarity.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 text-slate-700 text-2xl font-bold">
                    <div className="w-4 h-4 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Văn hóa */}
            <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-24 h-24 rounded-[2rem] bg-pink-100 flex items-center justify-center mb-10 mx-auto md:mx-0 shadow-sm border border-pink-200">
                <Heart className="text-pink-600" size={48} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 text-center md:text-left">Văn Hóa</h3>
              <ul className="space-y-6">
                {congress13Data.culture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 text-slate-700 text-2xl font-bold">
                    <div className="w-4 h-4 rounded-full bg-pink-500 mt-2 shrink-0" />
                    <span className="leading-tight">{item}</span>
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
