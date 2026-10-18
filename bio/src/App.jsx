import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  MapPin, 
  Users, 
  Radio, 
  MessageCircle, 
  Youtube, 
  Heart, 
  QrCode, 
  Download, 
  Copy, 
  Calendar, 
  Clock, 
  Home, 
  ChevronRight, 
  ChevronLeft, 
  ExternalLink, 
  ArrowUpRight, 
  Check, 
  X, 
  UserCheck,
  Play
} from 'lucide-react';

const GAZEBO_CONFIG = {
  siteName: "Gazebo Mengaji",
  siteTagline: "Berawal dari Tongkrongan, Tumbuh Menjadi Kebaikan",
  siteDescription: "Ruang terbuka untuk belajar ilmu syar'i bersama.",
  websiteUrl: "https://gazebomengaji.com",
  locationUrl: "https://maps.google.com/?q=Gazebo+Mengaji",
  waGroupIkhwanUrl: "https://chat.whatsapp.com/sample-group-ikhwan",
  waGroupAkhwatUrl: "https://chat.whatsapp.com/sample-group-akhwat",
  waChannelUrl: "https://whatsapp.com/channel/sample-channel",
  whatsappUrl: "https://wa.me/6281234567890",
  youtubeUrl: "https://youtube.com/@gazebomengaji",
  instagramUrl: "https://instagram.com/gazebomengaji",
  tiktokUrl: "https://tiktok.com/@gazebomengaji",
  facebookUrl: "https://facebook.com/gazebomengaji",
  bcaRekening: "888 0525 897",
  bcaAtasNama: "Moch Abid Muhajirin",
  qrisNmid: "ID1026507040883",
  qrisOwner: "GAZEBO MENGAJI",

  // Masukkan ID Google Spreadsheet Anda di sini
  spreadsheetId: "ID_SPREADSHEET_ANDA", 

  // Daftar Poster default (6 Poster Visual)
  jadwalKajianDefault: [
    {
      id: 1,
      status: "KAJIAN MENDATANG",
      posterImage: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
      speaker: "Muhammad Ihsan, S.Ud, M.H.I.",
      title: "Kajian Kitab Al Kabair: Mendatangi Dukun & Tukang Sihir",
      link: "https://www.youtube.com/live/CIIGcWgnCs4?si=XxFx7oJ3uYH2xJSe"
    },
    {
      id: 2,
      status: "29 September 2026",
      posterImage: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800",
      speaker: "Ahmad Anshori, Lc., M.Pd.",
      title: "Fiqih Muamalah Praktis: Hukum Jual Beli Online",
      link: "https://www.youtube.com/live/VFJ_LVpCKos?si=F7yTQgZLIcYMB19v"
    },
    {
      id: 3,
      status: "30 September 2026",
      posterImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      speaker: "Muhammad Ihsan, S.Ud, M.H.I.",
      title: "Pembersihan Jiwa (Tazkiyatun Nufus)",
      link: "https://www.youtube.com/live/wKHXkRvKvSY?si=0TS192zD5-"
    },
    {
      id: 4,
      status: "23 September 2026",
      posterImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      speaker: "Ahmad Anshori, Lc., M.Pd.",
      title: "Mengenal Hakikat Rezeki & Keberkahan Usaha",
      link: "https://youtube.com/live/YZfqNnZDWsc?feature=share"
    },
    {
      id: 5,
      status: "16 September 2026",
      posterImage: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
      speaker: "Muhammad Ihsan, S.Ud, M.H.I.",
      title: "Adab Bergaul dalam Komunitas Pemuda Muslim",
      link: "https://www.youtube.com/watch?v=cRbCSC7Y4NY"
    },
    {
      id: 6,
      status: "2 September 2026",
      posterImage: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=800",
      speaker: "Muhammad Ihsan, S.Ud, M.H.I.",
      title: "Menjaga Istiqomah di Tengah Fitnah Zaman",
      link: "https://www.youtube.com/watch?v=I4vbdHoQiQA"
    }
  ],

  allActivities: [
    {
      id: "act-1",
      title: "Program Kajian Rutin Rabu Malam",
      category: "Kajian Rutin",
      schedule: "Rabu Malam (Ba'da Isya)",
      desc: "Pembahasan Kitab Al-Kabair & Fiqih Muamalah praktis khusus pemuda dan umum.",
      location: "Gazebo Sport Center (GSC)",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "act-2",
      title: "Taman Baca Al-Qur'an Anak (TPA)",
      category: "Program Anak",
      schedule: "Senin - Jumat (Ba'da Ashar)",
      desc: "Bimbingan tajwid dasar dan hafalan surah pendek untuk anak-anak secara gratis.",
      location: "Gazebo Utama",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "act-3",
      title: "Camping Ceria & Tadabbur Alam",
      category: "Komunitas",
      schedule: "Program Bulanan",
      desc: "Kemah pemuda di perbukitan, diisi sholat malam, tausiyah, dan keakraban.",
      location: "Perbukitan Area Jogja",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "act-4",
      title: "Jumat Berkah & Berbagi Sedekah",
      category: "Sosial",
      schedule: "Setiap Jumat Pagi",
      desc: "Penyaluran paket makanan untuk pejuang jalanan dan dhuafa di seputaran Jogja.",
      location: "Seputaran Yogyakarta",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600"
    }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [visitorName, setVisitorName] = useState('');
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isWaGroupModalOpen, setIsWaGroupModalOpen] = useState(false);
  const [tempInputName, setTempInputName] = useState('');
  const [saveToStorage, setSaveToStorage] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);
  const [posterPreview, setPosterPreview] = useState(null);
  
  // State Dynamic dari Google Spreadsheet
  const [jadwalKajian, setJadwalKajian] = useState(GAZEBO_CONFIG.jadwalKajianDefault);

  // Pop Up Form Donatur Tetap
  const [isDonaturModalOpen, setIsDonaturModalOpen] = useState(false);
  const [donaturForm, setDonaturForm] = useState({
    name: '',
    phone: '',
    address: '',
    isAgreed: false
  });

  // Integrasi Otomatis Google Spreadsheet via OpenSheet
  useEffect(() => {
    if (!GAZEBO_CONFIG.spreadsheetId || GAZEBO_CONFIG.spreadsheetId === "ID_SPREADSHEET_ANDA") {
      return;
    }

    const apiUrl = `https://opensheet.elk.sh/${GAZEBO_CONFIG.spreadsheetId}/Sheet1`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((row, idx) => ({
            id: idx + 1,
            status: row.status || row.A || (idx === 0 ? "KAJIAN MENDATANG" : "JADWAL KAJIAN"),
            posterImage: row.posterImage || row.B || GAZEBO_CONFIG.jadwalKajianDefault[0].posterImage,
            speaker: row.speaker || row.C || "Pemateri",
            title: row.title || row.E || "Kajian Rutin",
            link: row.link || row.D || GAZEBO_CONFIG.youtubeUrl
          }));
          setJadwalKajian(formatted);
        }
      })
      .catch((err) => {
        console.error("Gagal memuat data Google Spreadsheet:", err);
      });
  }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlName = params.get('nama');
      if (urlName) {
        const sanitized = urlName.replace(/[^a-zA-Z0-9\s]/g, '').trim().slice(0, 20);
        if (sanitized) {
          setVisitorName(sanitized);
          return;
        }
      }
      const saved = localStorage.getItem('gazebo_visitor_name');
      if (saved) {
        setVisitorName(saved);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (activeTab !== 'kajian') return;

    const listLength = (jadwalKajian && jadwalKajian.length) || 1;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % listLength);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTab, jadwalKajian]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    const sanitized = tempInputName.replace(/[^a-zA-Z0-9\s]/g, '').trim().slice(0, 20);
    
    if (sanitized) {
      setVisitorName(sanitized);
      if (saveToStorage) {
        try {
          localStorage.setItem('gazebo_visitor_name', sanitized);
        } catch (e) {}
      }
      triggerToast(`Salam kenal, ${sanitized}!`);
    } else {
      handleClearName();
    }
    setIsNameModalOpen(false);
  };

  const handleClearName = () => {
    setVisitorName('');
    setTempInputName('');
    try {
      localStorage.removeItem('gazebo_visitor_name');
    } catch (e) {}
    triggerToast("Nama tersimpan telah dihapus");
  };

  const handleDonaturSubmit = (e) => {
    e.preventDefault();
    if (!donaturForm.name.trim() || !donaturForm.phone.trim()) {
      triggerToast("Mohon isi Nama dan Nomor WhatsApp");
      return;
    }
    if (!donaturForm.isAgreed) {
      triggerToast("Mohon centang persetujuan donatur tetap");
      return;
    }

    const message = `Bismillah, pendaftaran Donatur Tetap Gazebo Mengaji:\n\n` +
      `• Nama: ${donaturForm.name.trim()}\n` +
      `• No. WA: ${donaturForm.phone.trim()}\n` +
      `• Alamat Domisili: ${donaturForm.address.trim() || '-'}\n\n` +
      `Saya menyetujui untuk menjadi Donatur Tetap Gazebo Mengaji. Syukron.`;

    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setIsDonaturModalOpen(false);
    setDonaturForm({ name: '', phone: '', address: '', isAgreed: false });
    triggerToast("Membuka WhatsApp Pendaftaran...");
  };

  const handleCopyRekening = () => {
    navigator.clipboard.writeText(GAZEBO_CONFIG.bcaRekening.replace(/\s+/g, ''));
    triggerToast("Nomor Rekening BCA disalin!");
  };

  const handleDownloadQRIS = () => {
    const link = document.createElement('a');
    link.href = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=00020101021126580014ID.GO.QRIS.WWW01189360091400000000000215ID10265070408830303UMI51440014ID.LINKAJA.WWW01189360091400000000000215ID10265070408830303UMI5204581253033605802ID5914GAZEBO%20MENGAJI6010YOGYAKARTA61055511162070703A016304C0A2`;
    link.download = 'QRIS-Gazebo-Mengaji.png';
    link.target = '_blank';
    link.click();
    triggerToast("Mengunduh gambar QRIS...");
  };

  const handleDownloadPoster = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.target = '_blank';
    link.download = 'Poster-Kajian-Gazebo-Mengaji.jpg';
    link.click();
    triggerToast("Membuka poster...");
  };

  const slideList = (jadwalKajian && jadwalKajian.length > 0) ? jadwalKajian : GAZEBO_CONFIG.jadwalKajianDefault;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideList.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideList.length) % slideList.length);
  };

  // Kajian Mendatang (Null Safe)
  const kajianMendatang = slideList[0] || GAZEBO_CONFIG.jadwalKajianDefault[0];

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-0 sm:p-4 font-sans text-black antialiased selection:bg-[#C5FF28] selection:text-black">
      
      {/* Soft Gray Focus Style Rule & Keyframes */}
      <style>{`
        @keyframes storyProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-story-fill {
          animation: storyProgress 4000ms linear forwards;
        }
        button, a, input, [role="button"] {
          outline: none !important;
        }
        button:focus-visible, a:focus-visible, input:focus {
          outline: none !important;
          box-shadow: 0 0 0 2px rgba(212, 212, 212, 0.6) !important;
        }
      `}</style>

      {/* Mobile Canvas Container */}
      <div className="w-full max-w-[420px] h-[100vh] sm:h-[840px] bg-[#F6F6F4] sm:rounded-[44px] shadow-2xl overflow-hidden flex flex-col relative border border-white/10">
        
        {/* HEADER SECTION (Home Tab) */}
        {activeTab === 'home' && (
          <header className="px-5 pt-5 pb-3 bg-[#F6F6F4] flex items-center justify-between shrink-0 z-10">
            <div className="flex items-center gap-2.5">
              
              {/* GM Circle Avatar */}
              <div 
                onClick={() => {
                  setTempInputName(visitorName);
                  setIsNameModalOpen(true);
                }}
                className="w-10 h-10 rounded-full bg-[#C5FF28] text-black font-black text-sm flex items-center justify-center shadow-xs shrink-0 cursor-pointer hover:scale-105 transition-transform"
                title="Atur Nama Pengunjung"
              >
                GM
              </div>

              {/* Date Info Header */}
              <div className="text-left">
                {visitorName && (
                  <div className="text-[11px] text-neutral-500 font-medium tracking-tight truncate max-w-[120px]">
                    {visitorName}
                  </div>
                )}
                <h1 className="text-xs font-black text-black leading-tight mt-0.5 tracking-tight">
                  8 Jumadilawal 1448 H
                </h1>
                <p className="text-[10px] text-neutral-500 font-medium leading-tight">
                  Senin, 19 Oktober 2026 M
                </p>
              </div>
            </div>

            {/* Social Media Circular Icon Buttons */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-neutral-200/80 shadow-xs">
              <a 
                href={GAZEBO_CONFIG.youtubeUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-[#C5FF28] text-black flex items-center justify-center transition-colors" 
                aria-label="YouTube"
              >
                <Youtube className="w-3 h-3"/>
              </a>
              <a 
                href={GAZEBO_CONFIG.instagramUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-[#C5FF28] text-black flex items-center justify-center transition-colors" 
                aria-label="Instagram"
              >
                <span className="text-[9px] font-black">IG</span>
              </a>
              <a 
                href={GAZEBO_CONFIG.tiktokUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-[#C5FF28] text-black flex items-center justify-center transition-colors" 
                aria-label="TikTok"
              >
                <span className="text-[9px] font-black">TK</span>
              </a>
              <a 
                href={GAZEBO_CONFIG.whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-[#C5FF28] text-black flex items-center justify-center transition-colors" 
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3 h-3"/>
              </a>
            </div>
          </header>
        )}

        {/* MAIN BODY CONTAINER */}
        <div className={`flex-1 overflow-y-auto ${activeTab === 'kajian' ? 'p-3 pb-20 overflow-hidden' : 'p-4 pb-20'} flex flex-col justify-between`}>
          
          {/* TAB 1: HOME */}
          {activeTab === 'home' && (
            <div className="space-y-3 animate-in fade-in duration-300">
              
              {/* Dark Hero Banner Card */}
              <div className="relative rounded-[28px] bg-black p-4 text-white overflow-hidden shadow-lg border border-neutral-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block text-[9px] font-black tracking-wider uppercase text-black bg-[#C5FF28] px-2.5 py-0.5 rounded-full">
                    DONASI MENDESAK
                  </span>
                </div>

                <h2 className="text-sm sm:text-base font-black leading-snug tracking-tight text-white mt-1">
                  Patungan Pengadaan Alat Media Dakwah
                </h2>
                
                <p className="text-[10px] sm:text-[11px] text-neutral-400 mt-1 leading-relaxed font-normal">
                  Dukung kualitas live streaming, rekaman kajian, dan dokumentasi dakwah Gazebo Mengaji agar faedah ilmu dapat menjangkau lebih banyak orang.
                </p>

                <button
                  onClick={() => setActiveTab('donasi')}
                  className="w-full mt-3 py-2 bg-[#C5FF28] hover:bg-[#b5f018] text-black font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-transform active:scale-95 shadow-sm cursor-pointer"
                >
                  <span>Donasi Sekarang</span>
                  <ArrowUpRight className="w-3.5 h-3.5"/>
                </button>
              </div>

              {/* Kajian Mendatang Card */}
              <div className="bg-white rounded-[24px] p-3 border border-neutral-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5FF28] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5FF28]"></span>
                    </span>
                    <span className="text-[10px] font-black text-black tracking-wider uppercase">
                      KAJIAN MENDATANG
                    </span>
                  </div>

                  <button 
                    onClick={() => setActiveTab('kajian')}
                    className="text-[10px] font-bold text-black hover:underline flex items-center gap-0.5 bg-[#C5FF28] px-2.5 py-0.5 rounded-full cursor-pointer"
                  >
                    <span>Buka Poster</span>
                    <ChevronRight className="w-3 h-3"/>
                  </button>
                </div>

                <div 
                  onClick={() => setActiveTab('kajian')}
                  className="p-3 rounded-2xl bg-black text-white cursor-pointer hover:bg-neutral-900 transition-colors border border-neutral-800"
                >
                  <h4 className="font-black text-xs text-white leading-snug">
                    {kajianMendatang.title}
                  </h4>
                  <p className="text-[10px] text-[#C5FF28] font-medium mt-1">
                    Bersama Ustadz {kajianMendatang.speaker}
                  </p>
                </div>
              </div>

              {/* Action Links List */}
              <div className="space-y-2 pt-0.5">
                
                {/* 1. Website Resmi */}
                <a
                  href={GAZEBO_CONFIG.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white border border-neutral-200/80 hover:border-black text-black rounded-2xl p-3 flex items-center justify-between shadow-xs transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-neutral-100 text-black flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4"/>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black text-black leading-tight">Website Resmi</div>
                      <div className="text-[10px] text-neutral-400 font-medium">gazebomengaji.com</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-400 shrink-0"/>
                </a>

                {/* 2. Youtube Live */}
                <a
                  href={GAZEBO_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white border border-neutral-200/80 hover:border-black text-black rounded-2xl p-3 flex items-center justify-between shadow-xs transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#C5FF28] text-black flex items-center justify-center shrink-0">
                      <Youtube className="w-4 h-4"/>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black text-black leading-tight">Youtube Live</div>
                      <div className="text-[10px] text-neutral-400 font-medium">Streaming & Rekaman Kajian</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-400 shrink-0"/>
                </a>

                {/* 3. Channel WhatsApp */}
                <a
                  href={GAZEBO_CONFIG.waChannelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white border border-neutral-200/80 hover:border-black text-black rounded-2xl p-3 flex items-center justify-between shadow-xs transition-all active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-neutral-100 text-black flex items-center justify-center shrink-0">
                      <Radio className="w-4 h-4"/>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black text-black leading-tight">Channel WhatsApp</div>
                      <div className="text-[10px] text-neutral-400 font-medium">Faedah singkat & update postingan</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 shrink-0"/>
                </a>

                {/* 4. Gabung Grup WA Kajian */}
                <button
                  type="button"
                  onClick={() => setIsWaGroupModalOpen(true)}
                  className="w-full bg-black hover:bg-neutral-900 text-white rounded-2xl p-3 flex items-center justify-between shadow-md transition-all active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#C5FF28] text-black flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4"/>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black text-white leading-tight">Gabung Grup WA Kajian</div>
                      <div className="text-[10px] text-neutral-400 font-medium">Pilih grup Ikhwan atau Akhwat</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#C5FF28] shrink-0"/>
                </button>

                {/* 5. Lokasi Majelis & Tanya Admin (Grid 2 Kolom) */}
                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <a
                    href={GAZEBO_CONFIG.locationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white rounded-2xl p-2.5 flex items-center justify-between border border-neutral-200/80 shadow-xs hover:border-black transition-all active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-7 h-7 rounded-lg bg-neutral-100 text-black flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5"/>
                      </div>
                      <span className="text-[11px] font-extrabold text-black truncate">Lokasi Majelis</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0"/>
                  </a>

                  <a
                    href={GAZEBO_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white rounded-2xl p-2.5 flex items-center justify-between border border-neutral-200/80 shadow-xs hover:border-black transition-all active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-7 h-7 rounded-lg bg-neutral-100 text-black flex items-center justify-center shrink-0">
                        <MessageCircle className="w-3.5 h-3.5"/>
                      </div>
                      <span className="text-[11px] font-extrabold text-black truncate">Tanya Admin</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0"/>
                  </a>
                </div>

              </div>

            </div>
          )}

          {}
          {activeTab === 'kajian' && (
            <div className="h-full flex flex-col justify-between items-center animate-in fade-in duration-300">
              
              {/* Main Full-Height 9:16 Instagram Story Card */}
              <div className="w-full flex-1 flex flex-col justify-between relative">
                {slideList.map((kj, index) => {
                  if (index !== activeSlide) return null;
                  
                  return (
                    <div 
                      key={kj.id || index}
                      className="w-full flex-1 h-full bg-black text-white rounded-[32px] p-4 border border-neutral-800 shadow-2xl flex flex-col justify-between relative overflow-hidden animate-in zoom-in-95 duration-200"
                    >
                      {/* Background Poster Image */}
                      <img 
                        src={kj.posterImage} 
                        alt={kj.status}
                        onClick={() => setPosterPreview(kj.posterImage)}
                        className="absolute inset-0 w-full h-full object-cover filter brightness-95 cursor-pointer hover:scale-105 transition-transform duration-300"
                        title="Ketuk untuk melihat/mengunduh poster"
                      />
                      
                      {/* Soft Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />

                      {/* TOP SECTION: Animated Instagram Progress Bar & Status Badge Header */}
                      <div className="relative z-10 shrink-0">
                        
                        {/* Instagram Progress Bars */}
                        <div className="flex gap-1.5 mb-2.5">
                          {slideList.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveSlide(i)}
                              className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden relative cursor-pointer"
                              aria-label={`Slide ${i + 1}`}
                            >
                              <div
                                className={`h-full rounded-full bg-[#C5FF28] transition-all ${
                                  i < activeSlide 
                                    ? "w-full" 
                                    : i > activeSlide 
                                    ? "w-0" 
                                    : "w-full animate-story-fill"
                                }`}
                              />
                            </button>
                          ))}
                        </div>

                        {/* Top Badge */}
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-black text-[#C5FF28] uppercase tracking-wider border border-white/10 shadow-xs">
                            {kj.status === "KAJIAN MENDATANG" && (
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5FF28] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5FF28]"></span>
                              </span>
                            )}
                            {kj.status}
                          </span>
                        </div>
                      </div>

                      {/* SIDE NAVIGATION ARROWS (MIDDLE LEFT & RIGHT) */}
                      <button
                        onClick={prevSlide}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 active:scale-95 transition-all shadow-lg cursor-pointer"
                        aria-label="Previous Slide"
                      >
                        <ChevronLeft className="w-5 h-5 text-white"/>
                      </button>

                      <button
                        onClick={nextSlide}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 active:scale-95 transition-all shadow-lg cursor-pointer"
                        aria-label="Next Slide"
                      >
                        <ChevronRight className="w-5 h-5 text-white"/>
                      </button>

                      {/* BOTTOM SECTION: Dynamic Action Link Button */}
                      <div className="relative z-10 mt-auto pt-3">
                        {kj.status === "KAJIAN MENDATANG" ? (
                          <a
                            href={kj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-3 bg-[#C5FF28] hover:bg-[#b5f018] text-black font-black text-xs rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                          >
                            <span>Lihat Detail Kajian Lengkap</span>
                            <ArrowUpRight className="w-3.5 h-3.5"/>
                          </a>
                        ) : (
                          <a
                            href={kj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-3 bg-[#C5FF28] hover:bg-[#b5f018] text-black font-black text-xs rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current"/>
                            <span>Tonton Rekaman</span>
                          </a>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Bullet Dots Slide Indicators */}
              <div className="flex items-center justify-center gap-2 pt-2.5 pb-1 shrink-0 z-10">
                {slideList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      i === activeSlide 
                        ? "w-6 h-2 bg-[#C5FF28] shadow-xs" 
                        : "w-2 h-2 bg-neutral-400 hover:bg-neutral-600"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {}
          {activeTab === 'donasi' && (
            <div className="space-y-3.5 animate-in fade-in duration-300">
              
              <div className="text-center py-1">
                <div className="w-10 h-10 rounded-full bg-[#C5FF28] text-black flex items-center justify-center mx-auto mb-1.5 shadow-xs">
                  <Heart className="w-5 h-5 fill-current"/>
                </div>
                <h3 className="text-sm font-black text-black tracking-tight">
                  Infaq Operasional Dakwah
                </h3>
                <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed max-w-xs mx-auto">
                  Mendukung operasional kajian, fasilitas santri, serta penyebaran media dakwah digital.
                </p>
              </div>

              {/* Card QRIS Donasi */}
              <div className="bg-white rounded-[28px] p-4 border border-neutral-200/80 shadow-xs text-center space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <div className="flex items-center gap-1.5">
                    <QrCode className="w-4 h-4 text-black"/>
                    <span className="text-xs font-black text-black">Infaq via QRIS</span>
                  </div>
                  <span className="text-[9px] font-black text-black bg-[#C5FF28] px-2.5 py-0.5 rounded-full">
                    ALL BANK & E-WALLET
                  </span>
                </div>

                {/* QR Code Graphic Container */}
                <div className="flex flex-col items-center">
                  <div className="bg-black p-3.5 rounded-2xl text-white w-full max-w-[210px] shadow-md">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020101021126580014ID.GO.QRIS.WWW01189360091400000000000215ID10265070408830303UMI51440014ID.LINKAJA.WWW01189360091400000000000215ID10265070408830303UMI5204581253033605802ID5914GAZEBO%20MENGAJI6010YOGYAKARTA61055511162070703A016304C0A2`}
                      alt="QRIS Gazebo Mengaji"
                      className="w-full h-auto rounded-xl bg-white p-2"
                    />
                    <span className="text-[9px] text-neutral-400 font-mono block mt-1.5">NMID: {GAZEBO_CONFIG.qrisNmid}</span>
                    <span className="text-[10px] font-black text-[#C5FF28] block">{GAZEBO_CONFIG.qrisOwner}</span>
                  </div>

                  <button
                    onClick={handleDownloadQRIS}
                    className="w-full max-w-[210px] mt-2.5 py-2 bg-black hover:bg-neutral-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs active:scale-95 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C5FF28]"/>
                    <span>Unduh Gambar QRIS</span>
                  </button>
                </div>

                <p className="text-[10px] text-neutral-500 leading-snug pt-1">
                  Scan QRIS menggunakan Mobile Banking (BCA, Mandiri, BRI, BSI) atau E-Wallet (Gopay, OVO, Dana, ShopeePay).
                </p>
              </div>

              {/* Card Transfer Manual BCA */}
              <div className="bg-white rounded-2xl p-3.5 border border-neutral-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider">Transfer Bank Manual</span>
                  <div className="text-xs font-black text-black font-mono mt-0.5">{GAZEBO_CONFIG.bcaRekening}</div>
                  <div className="text-[10px] text-neutral-500">{GAZEBO_CONFIG.bcaAtasNama}</div>
                </div>

                <button
                  onClick={handleCopyRekening}
                  className="px-3 py-1.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl flex items-center gap-1 shadow-xs transition-all active:scale-95 shrink-0 cursor-pointer"
                >
                  <Copy className="w-3 h-3 text-[#C5FF28]"/>
                  <span>Salin</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <a
                  href={GAZEBO_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4"/>
                  <span>Konfirmasi Infaq via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setDonaturForm(prev => ({ ...prev, name: visitorName || '' }));
                    setIsDonaturModalOpen(true);
                  }}
                  className="w-full py-3 bg-black hover:bg-neutral-900 text-white font-extrabold text-xs rounded-2xl flex items-center justify-center gap-2 border border-neutral-800 shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 text-[#C5FF28]"/>
                  <span>Daftar Jadi Donatur Tetap</span>
                </button>
              </div>

            </div>
          )}

          {}
          {activeTab === 'kegiatan' && (
            <div className="space-y-3.5 animate-in fade-in duration-300">
              
              <div className="flex items-center justify-between pt-2 pb-1 mb-1">
                <div>
                  <h3 className="text-sm font-black text-black uppercase tracking-wider">
                    Program & Rutinitas
                  </h3>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Agenda mengaji dan sosial komunitas Gazebo.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#C5FF28] text-black flex items-center justify-center font-bold shrink-0">
                  <Calendar className="w-4 h-4"/>
                </div>
              </div>

              <div className="space-y-3">
                {GAZEBO_CONFIG.allActivities.map((act) => (
                  <div key={act.id} className="bg-white rounded-[28px] p-3.5 border border-neutral-200/80 shadow-xs overflow-hidden">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3">
                      <img 
                        src={act.image} 
                        alt={act.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-black text-black bg-[#C5FF28] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                        {act.category}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-black"/>
                        {act.schedule}
                      </span>
                    </div>

                    <h4 className="font-black text-xs text-black">{act.title}</h4>
                    <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{act.desc}</p>

                    <div className="mt-2.5 pt-2 border-t border-neutral-100 flex justify-between items-center text-[10px]">
                      <span className="text-neutral-400 font-medium">{act.location}</span>
                      <a
                        href={GAZEBO_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-extrabold text-black hover:underline flex items-center gap-0.5"
                      >
                        <span>Tanya Kegiatan</span>
                        <ChevronRight className="w-3 h-3"/>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

        {/* BOTTOM NAVIGATION BAR */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#F6F6F4] via-[#F6F6F4]/95 to-transparent z-20">
          <div className="bg-black border border-neutral-800 rounded-full p-1.5 shadow-xl flex items-center justify-around text-white">
            
            <button
              onClick={() => setActiveTab('home')}
              className={`flex-1 py-1 rounded-full flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                activeTab === 'home'
                  ? "text-[#C5FF28] font-bold"
                  : "text-neutral-400 hover:text-white font-medium"
              }`}
            >
              <div className={`p-1 rounded-full ${activeTab === 'home' ? 'bg-[#C5FF28] text-black' : ''}`}>
                <Home className="w-3.5 h-3.5"/>
              </div>
              <span className="text-[9px]">Home</span>
            </button>

            <button
              onClick={() => setActiveTab('kajian')}
              className={`flex-1 py-1 rounded-full flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                activeTab === 'kajian'
                  ? "text-[#C5FF28] font-bold"
                  : "text-neutral-400 hover:text-white font-medium"
              }`}
            >
              <div className={`p-1 rounded-full ${activeTab === 'kajian' ? 'bg-[#C5FF28] text-black' : ''}`}>
                <BookOpen className="w-3.5 h-3.5"/>
              </div>
              <span className="text-[9px]">Kajian</span>
            </button>

            <button
              onClick={() => setActiveTab('donasi')}
              className={`flex-1 py-1 rounded-full flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                activeTab === 'donasi'
                  ? "text-[#C5FF28] font-bold"
                  : "text-neutral-400 hover:text-white font-medium"
              }`}
            >
              <div className={`p-1 rounded-full ${activeTab === 'donasi' ? 'bg-[#C5FF28] text-black' : ''}`}>
                <Heart className="w-3.5 h-3.5"/>
              </div>
              <span className="text-[9px]">Donasi</span>
            </button>

            <button
              onClick={() => setActiveTab('kegiatan')}
              className={`flex-1 py-1 rounded-full flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                activeTab === 'kegiatan'
                  ? "text-[#C5FF28] font-bold"
                  : "text-neutral-400 hover:text-white font-medium"
              }`}
            >
              <div className={`p-1 rounded-full ${activeTab === 'kegiatan' ? 'bg-[#C5FF28] text-black' : ''}`}>
                <Calendar className="w-3.5 h-3.5"/>
              </div>
              <span className="text-[9px]">Kegiatan</span>
            </button>

          </div>
        </div>

        {}
        {/* POP UP MODAL GABUNG GRUP WA (IKHWAN & AKHWAT) */}
        {isWaGroupModalOpen && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xs w-full p-5 shadow-2xl relative border border-neutral-100 text-center">
              <button
                onClick={() => setIsWaGroupModalOpen(false)}
                className="absolute top-3.5 right-3.5 text-neutral-400 hover:text-black p-1 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4"/>
              </button>

              <div className="w-10 h-10 rounded-full bg-[#C5FF28] text-black flex items-center justify-center mx-auto mb-2 shadow-xs">
                <Users className="w-5 h-5"/>
              </div>

              <h3 className="text-sm font-black text-black">Pilih Grup WA Kajian</h3>
              <p className="text-[11px] text-neutral-500 mt-0.5 mb-4 leading-snug">
                Silakan pilih grup WhatsApp kajian sesuai dengan kategori Anda.
              </p>

              <div className="space-y-2.5">
                <a
                  href={GAZEBO_CONFIG.waGroupIkhwanUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsWaGroupModalOpen(false)}
                  className="w-full p-3 bg-black hover:bg-neutral-900 text-white rounded-2xl flex items-center justify-between transition-all active:scale-95 shadow-sm border border-neutral-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-14 0v1a1 1 0 0 0 2 0v-1a5 5 0 0 1 10 0v1a1 1 0 0 0 2 0z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black text-white">Grup WA Ikhwan</div>
                      <div className="text-[10px] text-neutral-400 font-medium">Khusus Laki-laki</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#C5FF28] shrink-0"/>
                </a>

                <a
                  href={GAZEBO_CONFIG.waGroupAkhwatUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsWaGroupModalOpen(false)}
                  className="w-full p-3 bg-black hover:bg-neutral-900 text-white rounded-2xl flex items-center justify-between transition-all active:scale-95 shadow-sm border border-neutral-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-14 0v1a1 1 0 0 0 2 0v-1a5 5 0 0 1 10 0v1a1 1 0 0 0 2 0z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black text-white">Grup WA Akhwat</div>
                      <div className="text-[10px] text-neutral-400 font-medium">Khusus Perempuan</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#C5FF28] shrink-0"/>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* MODAL SET NAMA PENGUNJUNG */}
        {isNameModalOpen && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xs w-full p-5 shadow-2xl relative">
              <button
                onClick={() => setIsNameModalOpen(false)}
                className="absolute top-3.5 right-3.5 text-neutral-400 hover:text-black p-1 cursor-pointer"
              >
                <X className="w-4 h-4"/>
              </button>

              <div className="flex items-center gap-2 text-black font-black text-sm mb-1">
                <span>Siapa Nama Kamu?</span>
              </div>

              <p className="text-[11px] text-neutral-500 mb-3 leading-snug">
                Sebutkan namamu agar kami bisa menyapa secara ramah setiap kali berkunjung.
              </p>

              <form onSubmit={handleSaveName}>
                <input
                  type="text"
                  maxLength={20}
                  value={tempInputName}
                  onChange={(e) => setTempInputName(e.target.value)}
                  placeholder="Contoh: Abid"
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 focus:outline-none text-xs mb-3 font-medium text-black"
                  autoFocus
                />

                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="savePerm"
                    checked={saveToStorage}
                    onChange={(e) => setSaveToStorage(e.target.checked)}
                    className="w-3.5 h-3.5 text-black rounded accent-black"
                  />
                  <label htmlFor="savePerm" className="text-[11px] text-neutral-600 cursor-pointer select-none">
                    Simpan nama di browser ini
                  </label>
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white font-bold text-xs py-2.5 rounded-xl shadow-xs hover:bg-neutral-800 cursor-pointer"
                  >
                    Simpan
                  </button>
                  {visitorName && (
                    <button
                      type="button"
                      onClick={handleClearName}
                      className="px-3 bg-red-50 text-red-600 font-bold text-xs rounded-xl cursor-pointer"
                    >
                      Hapus
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL PREVIEW & DOWNLOAD POSTER / STORY */}
        {posterPreview && (
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 z-50 animate-in fade-in duration-200">
            <div className="w-full flex items-center justify-between text-white pb-2">
              <span className="text-xs font-black text-[#C5FF28]">Preview Poster Kajian</span>
              <button
                onClick={() => setPosterPreview(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup Preview"
              >
                <X className="w-4 h-4"/>
              </button>
            </div>

            <div className="w-full max-w-xs aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 my-auto bg-neutral-900 flex items-center justify-center">
              <img 
                src={posterPreview} 
                alt="Poster Kajian" 
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={() => handleDownloadPoster(posterPreview)}
              className="w-full max-w-xs py-3 bg-[#C5FF28] hover:bg-[#b5f018] text-black font-black text-xs rounded-full flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all mt-3 cursor-pointer"
            >
              <Download className="w-4 h-4"/>
              <span>Unduh Poster / Story</span>
            </button>
          </div>
        )}

        {/* TOAST NOTIFICATION */}
        {showToast && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black text-white text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-neutral-700 animate-in fade-in duration-200">
            <Check className="w-3.5 h-3.5 text-[#C5FF28]"/>
            <span className="font-medium">{toastMessage}</span>
          </div>
        )}

        {/* POP UP MODAL FORM DONATUR TETAP */}
        {isDonaturModalOpen && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xs w-full p-5 shadow-2xl relative border border-neutral-100">
              <button
                onClick={() => setIsDonaturModalOpen(false)}
                className="absolute top-3.5 right-3.5 text-neutral-400 hover:text-black p-1 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4"/>
              </button>

              <div className="flex items-center gap-2 text-black font-black text-sm mb-1">
                <Heart className="w-4 h-4 text-black fill-current"/>
                <span>Form Donatur Tetap</span>
              </div>

              <p className="text-[11px] text-neutral-500 mb-3.5 leading-snug">
                Isi data diri Anda di bawah ini untuk mendaftar sebagai komitmen donatur rutin Gazebo Mengaji.
              </p>

              <form onSubmit={handleDonaturSubmit} className="space-y-2.5">
                <div>
                  <label className="text-[10px] font-extrabold text-neutral-700 uppercase block mb-1">
                    Nama Donatur <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={donaturForm.name}
                    onChange={(e) => setDonaturForm({ ...donaturForm, name: e.target.value })}
                    placeholder="Contoh: Abid Muhajirin"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs font-medium text-black"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-neutral-700 uppercase block mb-1">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={donaturForm.phone}
                    onChange={(e) => setDonaturForm({ ...donaturForm, phone: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs font-medium text-black"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-neutral-700 uppercase block mb-1">
                    Alamat Domisili
                  </label>
                  <input
                    type="text"
                    value={donaturForm.address}
                    onChange={(e) => setDonaturForm({ ...donaturForm, address: e.target.value })}
                    placeholder="Contoh: Sleman, Yogyakarta"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs font-medium text-black"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="agreeDonatur"
                    checked={donaturForm.isAgreed}
                    onChange={(e) => setDonaturForm({ ...donaturForm, isAgreed: e.target.checked })}
                    className="w-4 h-4 mt-0.5 text-black rounded accent-black cursor-pointer shrink-0"
                  />
                  <label htmlFor="agreeDonatur" className="text-[10px] text-neutral-600 leading-tight cursor-pointer select-none">
                    Saya menyetujui untuk menjadi donatur tetap Gazebo Mengaji.
                  </label>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsDonaturModalOpen(false)}
                    className="px-3.5 bg-neutral-100 text-neutral-600 font-bold text-xs py-2.5 rounded-xl hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-black text-white font-bold text-xs py-2.5 rounded-xl shadow-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Kirim via WA</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5FF28]"/>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
