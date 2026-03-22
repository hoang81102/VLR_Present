import { BookOpen, Target, CalendarDays, Key, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 relative bg-slate-50 overflow-hidden py-24">
      {/* Background Soft Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-200 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto space-y-10 animate-fade-in">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-sm font-bold uppercase tracking-widest shadow-sm">
          <BookOpen size={20} />
          <span>Tài liệu tự ôn tập - Lịch sử Đảng</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-black tracking-tighter leading-[1.1] text-slate-900 drop-shadow-sm">
          Đảng Lãnh Đạo Đất Nước <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
            Quá Độ Lên CNXH & Đổi Mới
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
          Giai đoạn <strong className="text-slate-900 font-bold">1975 - Nay</strong>. Trọng tâm cốt lõi: <strong className="text-slate-900 font-bold">1996 - Nay</strong>. 
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
          <a href="#tong-quan" className="flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-xl transition-all shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:-translate-y-1">
            <Target size={24} />
            Bắt đầu slide ôn tập
          </a>
          <a href="#timeline" className="flex items-center gap-3 px-10 py-5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 rounded-2xl font-bold text-xl transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <CalendarDays size={24} />
            Đến Mốc Thời Gian
          </a>
        </div>
      </div>
      
      {/* Slide Navigation Hints */}
      <div className="mt-16 lg:mt-24 relative z-10 flex justify-center animate-bounce text-slate-500 w-full">
         <span className="uppercase text-xs font-bold tracking-widest bg-white/80 px-6 py-3 rounded-full border border-slate-200 shadow-md backdrop-blur-sm">
           Cuộn xuống để xem tiếp
         </span>
      </div>
    </section>
  )
}
