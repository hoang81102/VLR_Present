import { useState, useMemo, useEffect } from 'react';
import { historicalQuiz } from '../data/quizData';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, RefreshCcw } from 'lucide-react';

export default function Quiz() {
  const [answers, setAnswers] = useState({});

  const handleSelect = (qId, oIdx) => {
    // Ngăn chọn lại đáp án khác nếu đã chọn
    if (answers[qId] !== undefined) return;
    setAnswers(prev => ({...prev, [qId]: oIdx}));
  };

  const score = useMemo(() => {
    let s = 0;
    historicalQuiz.forEach(q => {
      if (answers[q.id] === q.answer) s++;
    });
    return s;
  }, [answers]);

  const progress = Math.round((Object.keys(answers).length / historicalQuiz.length) * 100);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-32">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-4 px-4 md:px-8 flex items-center justify-between">
         <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-colors">
           <ArrowLeft size={24} />
           <span className="hidden md:inline">Trang Chủ</span>
         </Link>
         
         <div className="flex-1 max-w-xl mx-auto px-4 md:px-10">
            <div className="flex justify-between text-sm font-bold text-slate-600 mb-1">
              <span>Tiến độ làm bài</span>
              <span>{Math.round(progress)}% ({Object.keys(answers).length} / {historicalQuiz.length})</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex items-stretch">
               <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all duration-300" style={{width: `${progress}%`}} />
            </div>
         </div>

         <div className="font-black text-indigo-600 hidden md:block">
           ÔN TẬP VLR
         </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-12">
         <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Trắc Nghiệm Lịch Sử Đảng</h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">Bộ {historicalQuiz.length} câu hỏi tổng ôn kiến thức giai đoạn 1986 - 2045. Nhấp chọn đáp án để xem đúng sai ngay lập tức.</p>
         </div>

         <div className="space-y-12">
            {historicalQuiz.map((q, idx) => {
              const hasAnswered = answers[q.id] !== undefined;
              const isCorrect = answers[q.id] === q.answer;
              
              return (
                <div key={q.id} className={`bg-white p-6 md:p-10 rounded-[2rem] border ${hasAnswered ? (isCorrect ? 'border-emerald-300 shadow-[0_10px_40px_-15px_rgba(16,185,129,0.2)]' : 'border-red-300 shadow-[0_10px_40px_-15px_rgba(239,68,68,0.2)]') : 'border-slate-200 hover:border-indigo-200'} shadow-xl transition-all`}>
                  <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl font-bold border border-indigo-200 shadow-sm">
                      {idx + 1}
                    </span>
                    <span className="mt-2 leading-relaxed">{q.question}</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = answers[q.id] === oIdx;
                      const isActualAnswer = q.answer === oIdx;
                      
                      let btnClass = "text-left p-5 rounded-2xl border-[3px] font-bold text-lg transition-all focus:outline-none focus:ring-4 focus:ring-indigo-100 ";
                      
                      if (!hasAnswered) {
                        btnClass += "border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-600";
                      } else {
                        if (isActualAnswer) {
                          btnClass += "border-emerald-500 bg-emerald-50 text-emerald-800 scale-[1.02] shadow-sm";
                        } else if (isSelected && !isActualAnswer) {
                          btnClass += "border-red-500 bg-red-50 text-red-800 opacity-80 scale-[1.02]";
                        } else {
                          btnClass += "border-slate-200 text-slate-400 opacity-50 cursor-not-allowed";
                        }
                      }

                      return (
                        <button 
                          key={oIdx}
                          onClick={() => handleSelect(q.id, oIdx)}
                          className={btnClass}
                          disabled={hasAnswered}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full border-[3px] flex items-center justify-center shrink-0 ${!hasAnswered ? 'border-slate-300 bg-white' : (isActualAnswer ? 'border-emerald-500 bg-emerald-500' : (isSelected ? 'border-red-500 bg-red-500' : 'border-slate-300 bg-white'))}`}>
                              {hasAnswered && isActualAnswer && <CheckCircle2 size={18} className="text-white" />}
                              {hasAnswered && isSelected && !isActualAnswer && <XCircle size={18} className="text-white" />}
                            </div>
                            <span className="leading-tight">{opt}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {hasAnswered && (
                    <div className={`mt-8 p-6 lg:p-8 rounded-2xl border ${isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'} flex flex-col md:flex-row items-start gap-4 md:gap-6 animate-fade-in`}>
                      {isCorrect ? <CheckCircle2 size={40} className="text-emerald-600 shrink-0 mt-1" /> : <AlertCircle size={40} className="text-red-500 shrink-0 mt-1" />}
                      <div>
                         <p className={`font-black text-2xl md:text-3xl mb-3 ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}>
                           {isCorrect ? 'Tuyệt vời! Đáp án chuẩn xác.' : 'Rất tiếc! Câu này sai rồi.'}
                         </p>
                         <p className="text-slate-700 font-medium text-lg leading-relaxed">
                           <span className="text-slate-900 font-bold uppercase tracking-wider text-sm bg-black/10 px-3 py-1 rounded-full mr-2">Giải thích chi tiết</span>
                           {q.explanation}
                         </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
         </div>

         {/* Score summary at bottom */}
         <div className="mt-20 text-center">
             <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-slate-200 shadow-2xl inline-block w-full text-center relative overflow-hidden animate-fade-in">
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-100/50 rounded-full blur-[100px] -z-10" />
               <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-100/50 rounded-full blur-[100px] -z-10" />
               
               <h2 className="text-4xl md:text-5xl font-black text-slate-600 mb-6 uppercase tracking-widest relative z-10">Điểm Số Của Bạn</h2>
               <div className="text-[6rem] md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-emerald-500 mb-8 pb-4 leading-none relative z-10">
                 {score} <span className="text-6xl text-slate-300">/ {historicalQuiz.length}</span>
               </div>
               
               <div className="w-full h-4 bg-slate-100 rounded-full mb-10 overflow-hidden relative z-10 border border-slate-200">
                 <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500" style={{ width: `${(score/historicalQuiz.length)*100}%` }} />
               </div>

               {Object.keys(answers).length === historicalQuiz.length ? (
                 <p className="text-2xl md:text-3xl font-bold text-slate-600 mb-12 relative z-10">
                   {score === historicalQuiz.length ? 'Xuất sắc! Bạn đúng trọn vẹn 100% rùi.' : score >= historicalQuiz.length * 0.8 ? 'Rất giỏi! Bạn nắm được phần lớn kiến thức khóa luận rùi đó.' : score >= historicalQuiz.length * 0.5 ? 'Tốt! Bạn đã qua mức trung bình, cố thêm xíu nữa nha!' : 'Không sao cả, hãy làm lại và ghi chú thêm để nhớ dai hơn nhé!'}
                 </p>
               ) : (
                  <p className="text-xl md:text-2xl font-bold text-slate-500 mb-12 relative z-10">
                   Bạn đã hoàn thành {Object.keys(answers).length} / {historicalQuiz.length} câu. Kéo lên trên để trả lời các phần còn sót nhé!
                 </p>
               )}
               
               <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                 <button 
                   onClick={() => {
                     setAnswers({});
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                   }}
                   className="flex items-center justify-center gap-3 px-8 py-5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-2xl font-black text-xl transition-colors border-2 border-indigo-200"
                 >
                   <RefreshCcw size={28} />
                   Làm Lại Từ Đầu
                 </button>
                 <Link to="/" className="flex items-center justify-center gap-3 px-8 py-5 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl font-black text-xl transition-colors border-2 border-slate-200">
                   <ArrowLeft size={28} />
                   Về Lại Bài Giảng
                 </Link>
               </div>
             </div>
         </div>
      </main>
    </div>
  )
}
