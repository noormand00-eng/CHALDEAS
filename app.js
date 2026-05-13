
// ════════════════════════════════════════════════
// STARFIELD
// ════════════════════════════════════════════════
(function(){
  const sf = document.getElementById('starfield');
  for(let i = 0; i < 160; i++){
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() < 0.85 ? Math.random()*1.4+0.3 : Math.random()*2+1.2;
    const minO = (Math.random()*0.15).toFixed(2);
    const maxO = (Math.random()*0.5+0.2).toFixed(2);
    const dur  = (Math.random()*4+2).toFixed(1)+'s';
    Object.assign(s.style, {
      width: size+'px', height: size+'px',
      left: Math.random()*100+'%', top: Math.random()*100+'%',
      '--d': dur, '--min-o': minO, '--max-o': maxO,
      animationDelay: (Math.random()*5).toFixed(1)+'s'
    });
    sf.appendChild(s);
  }
})();

// ════════════════════════════════════════════════
// ── NUMEROLOGY DATA ──
// ════════════════════════════════════════════════
const NUM_DATA = {
  1:  { name:'The Leader',          keyword:'Inisiatif · Kemandirian · Ambisi',          lp_traits:['Pemimpin alami dengan visi yang kuat','Mandiri dan tidak suka bergantung','Inovatif dan berani memulai hal baru','Determinasi tinggi dalam mencapai tujuan'],                          dest_traits:['Ditakdirkan untuk memimpin dan membuka jalan','Membawa ide-ide orisinal ke dunia','Menjadi pelopor di bidangnya','Menginspirasi orang lain dengan keberanian'],              attrs:{elemen:'Api',planet:'Matahari',warna:'Merah & Emas',batu:'Rubi',chakra:'Mahkota',polaritas:'Maskulin'} },
  2:  { name:'The Diplomat',        keyword:'Harmoni · Kolaborasi · Intuisi',             lp_traits:['Sensitif terhadap kebutuhan orang lain','Mediator alami dalam konflik','Kemampuan mendengar yang luar biasa','Bekerja terbaik dalam kemitraan'],                                   dest_traits:['Ditakdirkan untuk menyatukan dan menjembatani','Membawa kedamaian ke lingkungannya','Kekuatan melalui kolaborasi','Intuisi yang tajam sebagai panduan'],               attrs:{elemen:'Air',planet:'Bulan',warna:'Putih & Silver',batu:'Mutiara',chakra:'Sakral',polaritas:'Feminin'} },
  3:  { name:'The Creator',         keyword:'Ekspresi · Kreativitas · Komunikasi',        lp_traits:['Jiwa kreatif yang ekspresif dan enerjik','Kemampuan komunikasi yang luar biasa','Optimis dan menyebarkan kegembiraan','Bakat seni dan sastra yang menonjol'],                       dest_traits:['Ditakdirkan untuk mengekspresikan dan menginspirasi','Membawa seni dan kreativitas ke dunia','Menjadi suara kegembiraan dan harapan','Mengubah ide menjadi karya nyata'],attrs:{elemen:'Api',planet:'Jupiter',warna:'Kuning & Oranye',batu:'Topaz',chakra:'Pleksus Solar',polaritas:'Maskulin'} },
  4:  { name:'The Builder',         keyword:'Stabilitas · Disiplin · Fondasi',            lp_traits:['Pekerja keras dengan etos kerja tinggi','Sistematis dan sangat terorganisir','Membangun fondasi yang kuat dan tahan lama','Dapat diandalkan dan konsisten'],                        dest_traits:['Ditakdirkan untuk membangun struktur nyata','Membawa keteraturan ke dalam kekacauan','Menjadi pilar kepercayaan komunitas','Mewariskan sesuatu yang bertahan lama'],      attrs:{elemen:'Tanah',planet:'Uranus',warna:'Hijau & Cokelat',batu:'Zamrud',chakra:'Akar',polaritas:'Feminin'} },
  5:  { name:'The Freedom Seeker',  keyword:'Kebebasan · Petualangan · Perubahan',        lp_traits:['Jiwa bebas yang mencintai pengalaman baru','Adaptif dan fleksibel dalam segala situasi','Rasa ingin tahu yang tak pernah padam','Magnetis dan penuh energi sosial'],              dest_traits:['Ditakdirkan untuk menjelajahi dan berkembang','Membawa perubahan transformatif','Menjadi agen kebebasan dan kemajuan','Menghubungkan dunia melalui pengalaman'],          attrs:{elemen:'Udara',planet:'Merkurius',warna:'Biru Langit & Turquoise',batu:'Aquamarine',chakra:'Tenggorokan',polaritas:'Maskulin'} },
  6:  { name:'The Nurturer',        keyword:'Kasih · Tanggung Jawab · Pelayanan',         lp_traits:['Penuh kasih dan perhatian kepada orang lain','Rasa tanggung jawab yang sangat kuat','Harmonisator dalam keluarga dan komunitas','Bakat alami dalam merawat dan menyembuhkan'],   dest_traits:['Ditakdirkan untuk memberi dan merawat','Membawa keharmonisan ke rumah dan komunitas','Menjadi penyembuh emosi bagi sekitarnya','Cinta sebagai kekuatan terbesar'],       attrs:{elemen:'Tanah',planet:'Venus',warna:'Pink & Biru Muda',batu:'Rose Quartz',chakra:'Jantung',polaritas:'Feminin'} },
  7:  { name:'The Seeker',          keyword:'Kebijaksanaan · Analisis · Spiritualitas',   lp_traits:['Pemikir mendalam dan analis yang tajam','Mencari kebenaran di balik permukaan','Introvert yang kaya dunia batin','Koneksi kuat dengan intuisi dan spiritualitas'],               dest_traits:['Ditakdirkan untuk menemukan dan berbagi kebijaksanaan','Membawa pencerahan melalui pengetahuan','Menjadi guru dan peneliti kebenaran','Menghubungkan dunia fisik dan metafisik'],attrs:{elemen:'Air',planet:'Neptunus',warna:'Ungu & Indigo',batu:'Ametis',chakra:'Mata Ketiga',polaritas:'Feminin'} },
  8:  { name:'The Executive',       keyword:'Kekuasaan · Kelimpahan · Pencapaian',        lp_traits:['Ambisi besar dengan kemampuan eksekusi nyata','Pemahaman mendalam tentang materi dan kekuasaan','Kepemimpinan yang kuat dan berwibawa','Kemampuan mengubah visi menjadi kenyataan'],dest_traits:['Ditakdirkan untuk meraih dan mendistribusikan kelimpahan','Membawa kemakmuran ke lingkungannya','Menjadi pemimpin bisnis dan komunitas','Menggunakan kekuasaan untuk kebaikan'],attrs:{elemen:'Tanah',planet:'Saturnus',warna:'Hitam & Emas',batu:'Onyx',chakra:'Akar & Mahkota',polaritas:'Maskulin'} },
  9:  { name:'The Humanitarian',    keyword:'Kemanusiaan · Belas Kasih · Wisdom',         lp_traits:['Belas kasih yang luas melampaui batas pribadi','Idealis dengan visi dunia yang lebih baik','Kemampuan melepaskan dan bertransformasi','Kebijaksanaan dari pengalaman hidup yang kaya'],dest_traits:['Ditakdirkan untuk melayani kemanusiaan','Membawa kesembuhan dan transformasi kolektif','Menjadi simbol pengampunan dan penerimaan','Menutup siklus dan membuka era baru'],attrs:{elemen:'Api',planet:'Mars',warna:'Emas & Merah Tua',batu:'Garnet',chakra:'Semua Chakra',polaritas:'Maskulin'} },
  11: { name:'The Illuminator',     keyword:'Inspirasi · Intuisi Tinggi · Cahaya',        lp_traits:['Master Number — intuisi dan kepekaan sangat tinggi','Visi yang melampaui logika biasa','Kemampuan menginspirasi orang secara masif','Sensitif terhadap energi dan atmosfer'],    dest_traits:['Ditakdirkan sebagai pembawa cahaya dan inspirasi','Kanal antara dunia spiritual dan fisik','Mengangkat kesadaran kolektif','Misi besar yang membutuhkan keberanian'],        attrs:{elemen:'Udara/Cahaya',planet:'Bulan & Uranus',warna:'Putih & Silver',batu:'Moonstone',chakra:'Mahkota & Mata Ketiga',polaritas:'Master'} },
  22: { name:'The Master Builder',  keyword:'Manifestasi · Visi Global · Warisan',         lp_traits:['Master Number — kemampuan mewujudkan yang luar biasa','Visi besar dengan kemampuan praktis','Membangun sistem yang berdampak global','Kombinasi idealisme dan pragmatisme'],       dest_traits:['Ditakdirkan untuk meninggalkan warisan abadi','Membangun fondasi bagi peradaban','Misi yang melampaui kepentingan pribadi','Potensi manifestasi tertinggi dalam numerologi'],attrs:{elemen:'Tanah/Semua',planet:'Saturnus & Uranus',warna:'Emas & Hitam',batu:'Obsidian Emas',chakra:'Semua',polaritas:'Master'} },
  33: { name:'The Master Teacher',  keyword:'Pengajaran · Cinta Universal · Pengabdian',  lp_traits:['Master Number — cinta dan kasih tak bersyarat','Guru spiritual dan emosional tertinggi','Pengabdian total kepada pertumbuhan orang lain','Mewujudkan cinta sebagai kekuatan kosmik'],dest_traits:['Ditakdirkan untuk mengajar melalui kehidupan','Mewujudkan kasih tanpa syarat','Menjadi teladan bagi transformasi manusia','Misi paling murni dan paling menantang'],attrs:{elemen:'Semua Elemen',planet:'Venus & Jupiter',warna:'Semua Warna',batu:'Clear Quartz',chakra:'Jantung & Mahkota',polaritas:'Master'} },
};
const LETTER_VALUES = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};

// ════════════════════════════════════════════════
// ── ZODIAK DATA ──
// ════════════════════════════════════════════════
const ZODIAK_DATA = [
  { name:'Aries',       symbol:'♈', range:'21 Mar – 19 Apr', elemen:'Api',  mode:'Kardinal', planet:'Mars',    polarity:'Maskulin', batu:'Berlian',     keyword:'Berani · Pelopor · Energik',      traits:['Jiwa pemberani dan penuh inisiatif','Antusias dalam memulai hal-hal baru','Kompetitif dengan semangat yang menggebu','Langsung dan jujur dalam mengungkapkan diri'] },
  { name:'Taurus',      symbol:'♉', range:'20 Apr – 20 Mei', elemen:'Tanah',mode:'Tetap',    planet:'Venus',   polarity:'Feminin',  batu:'Zamrud',      keyword:'Stabil · Setia · Sensual',        traits:['Stabil, sabar, dan penuh keteguhan','Menikmati keindahan dan kenyamanan hidup','Loyal dan dapat diandalkan dalam hubungan','Keras kepala tapi berkemauan kuat'] },
  { name:'Gemini',      symbol:'♊', range:'21 Mei – 20 Jun', elemen:'Udara',mode:'Mutable',  planet:'Merkurius',polarity:'Maskulin', batu:'Alexandrite', keyword:'Cerdas · Adaptif · Komunikatif',  traits:['Pikiran cepat dan penuh rasa ingin tahu','Adaptif dalam berbagai situasi sosial','Kemampuan komunikasi dan ekspresi tinggi','Dual nature yang menghadirkan perspektif unik'] },
  { name:'Cancer',      symbol:'♋', range:'21 Jun – 22 Jul', elemen:'Air',  mode:'Kardinal', planet:'Bulan',   polarity:'Feminin',  batu:'Mutiara',     keyword:'Intuitif · Protektif · Penuh Rasa', traits:['Sangat intuitif dan emosional','Pelindung yang kuat bagi orang-orang tersayang','Empati mendalam terhadap perasaan orang lain','Terhubung kuat dengan keluarga dan akar'] },
  { name:'Leo',         symbol:'♌', range:'23 Jul – 22 Agu', elemen:'Api',  mode:'Tetap',    planet:'Matahari',polarity:'Maskulin', batu:'Rubi',        keyword:'Karismatik · Murah Hati · Percaya Diri', traits:['Karisma alami yang menarik perhatian','Murah hati dan hangat hati','Memimpin dengan percaya diri dan wibawa','Kreatif dan dramatis dalam ekspresi diri'] },
  { name:'Virgo',       symbol:'♍', range:'23 Agu – 22 Sep', elemen:'Tanah',mode:'Mutable',  planet:'Merkurius',polarity:'Feminin',  batu:'Safir',       keyword:'Analitis · Terperinci · Pengabdian', traits:['Analitis dan berorientasi pada detail','Praktis dan efisien dalam pendekatan','Kemampuan pemecahan masalah yang tajam','Dedikasi tinggi dalam melayani orang lain'] },
  { name:'Libra',       symbol:'♎', range:'23 Sep – 22 Okt', elemen:'Udara',mode:'Kardinal', planet:'Venus',   polarity:'Maskulin', batu:'Opal',        keyword:'Harmoni · Keadilan · Diplomasi',   traits:['Mendambakan keseimbangan dan keharmonisan','Diplomat alami yang membenci konflik','Estetika tinggi dan cinta keindahan','Kemampuan melihat berbagai perspektif'] },
  { name:'Scorpio',     symbol:'♏', range:'23 Okt – 21 Nov', elemen:'Air',  mode:'Tetap',    planet:'Pluto',   polarity:'Feminin',  batu:'Topaz',       keyword:'Intens · Transformatif · Misterius', traits:['Intensitas emosional yang dalam','Kemampuan transformasi dan regenerasi diri','Intuisi tajam membaca situasi tersembunyi','Loyal secara mendalam kepada yang dipercaya'] },
  { name:'Sagittarius', symbol:'♐', range:'22 Nov – 21 Des', elemen:'Api',  mode:'Mutable',  planet:'Jupiter', polarity:'Maskulin', batu:'Turquoise',   keyword:'Petualang · Filosofis · Optimis',  traits:['Jiwa petualang yang mencintai kebebasan','Pemikir filosofis dengan wawasan luas','Optimisme yang menular dan inspiratif','Jujur dan blak-blakan dalam komunikasi'] },
  { name:'Capricorn',   symbol:'♑', range:'22 Des – 19 Jan', elemen:'Tanah',mode:'Kardinal', planet:'Saturnus',polarity:'Feminin',  batu:'Garnet',      keyword:'Ambisius · Disiplin · Bertekad',   traits:['Ambisius dengan tujuan jangka panjang','Disiplin dan ketekunan yang luar biasa','Praktis dan realistis dalam pendekatan','Pemimpin bertanggung jawab yang terpercaya'] },
  { name:'Aquarius',    symbol:'♒', range:'20 Jan – 18 Feb', elemen:'Udara',mode:'Tetap',    planet:'Uranus',  polarity:'Maskulin', batu:'Ametis',      keyword:'Inovatif · Humanis · Visioner',   traits:['Visioner dengan pemikiran maju ke depan','Humanis sejati yang peduli kesejahteraan bersama','Orisinal dan tidak konvensional','Independen dan tidak mudah dikekang'] },
  { name:'Pisces',      symbol:'♓', range:'19 Feb – 20 Mar', elemen:'Air',  mode:'Mutable',  planet:'Neptunus',polarity:'Feminin',  batu:'Aquamarine',  keyword:'Empatik · Spiritual · Imajinatif', traits:['Empati dan kepekaan yang mendalam','Intuisi mistis dan koneksi spiritual','Imajinasi kreatif yang kaya','Penuh kasih dan mudah memaafkan'] },
];

function getZodiakIndex(month, day) {
  const dates = [[3,21],[4,20],[5,21],[6,21],[7,23],[8,23],[9,23],[10,23],[11,22],[12,22],[1,20],[2,19]];
  for(let i = 0; i < 12; i++){
    const [m, d] = dates[i];
    if(month === m && day >= d) return i;
    if(i > 0 && month === dates[i-1][0] && day < dates[i-1][1]) return i;
  }
  // fallback: check last sign
  if(month === 2 && day < 19) return 11;
  return 0;
}

function getSunSign(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const idx = getZodiakIndexByMonth(m, d);
  return ZODIAK_DATA[idx];
}

function getZodiakIndexByMonth(m, d) {
  if((m===3&&d>=21)||(m===4&&d<=19)) return 0;   // Aries
  if((m===4&&d>=20)||(m===5&&d<=20)) return 1;   // Taurus
  if((m===5&&d>=21)||(m===6&&d<=20)) return 2;   // Gemini
  if((m===6&&d>=21)||(m===7&&d<=22)) return 3;   // Cancer
  if((m===7&&d>=23)||(m===8&&d<=22)) return 4;   // Leo
  if((m===8&&d>=23)||(m===9&&d<=22)) return 5;   // Virgo
  if((m===9&&d>=23)||(m===10&&d<=22)) return 6;  // Libra
  if((m===10&&d>=23)||(m===11&&d<=21)) return 7; // Scorpio
  if((m===11&&d>=22)||(m===12&&d<=21)) return 8; // Sagittarius
  if((m===12&&d>=22)||(m===1&&d<=19)) return 9;  // Capricorn
  if((m===1&&d>=20)||(m===2&&d<=18)) return 10;  // Aquarius
  return 11; // Pisces
}

// ════════════════════════════════════════════════
// ── WETON DATA ──
// ════════════════════════════════════════════════
// Hari Jawa (7-hari) + Neptu
const HARI_JAWA = [
  {name:'Minggu',  neptu:5,  desc:'Hari Matahari — Terang, wibawa, dan kepemimpinan'},
  {name:'Senin',   neptu:4,  desc:'Hari Bulan — Intuisi, kelembutan, dan perasaan'},
  {name:'Selasa',  neptu:3,  desc:'Hari Mars — Keberanian, tekad, dan kekuatan'},
  {name:'Rabu',    neptu:7,  desc:'Hari Merkurius — Kecerdasan, komunikasi, dan adaptasi'},
  {name:'Kamis',   neptu:8,  desc:'Hari Jupiter — Kebijaksanaan, berkah, dan ekspansi'},
  {name:'Jumat',   neptu:6,  desc:'Hari Venus — Keindahan, cinta, dan keharmonisan'},
  {name:'Sabtu',   neptu:9,  desc:'Hari Saturnus — Disiplin, keteguhan, dan kemampuan'},
];

// Pasaran (5-hari Jawa) + Neptu
const PASARAN = [
  {name:'Kliwon',  neptu:8, desc:'Bersifat sakral, peka secara spiritual, dan karismatik'},
  {name:'Legi',    neptu:5, desc:'Menarik, dermawan, dan disukai banyak orang'},
  {name:'Pahing',  neptu:9, desc:'Kuat, teguh, dan berjiwa petarung'},
  {name:'Pon',     neptu:7, desc:'Bijaksana, kuat, dan berwibawa'},
  {name:'Wage',    neptu:4, desc:'Tekun, sabar, dan setia pada pendirian'},
];

// Reference: 1 Januari 2000 = Sabtu Legi
// Epoch Sabtu = index 6 dalam HARI_JAWA, Legi = index 1 dalam PASARAN
const EPOCH_DATE = new Date(2000, 0, 1); // Jan 1, 2000
const EPOCH_HARI = 6;    // Sabtu
const EPOCH_PASARAN = 1; // Legi

function getWeton(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const target = new Date(y, m-1, d);
  const diff = Math.round((target - EPOCH_DATE) / (1000*60*60*24));
  let hariIdx = ((EPOCH_HARI + diff) % 7 + 7) % 7;
  let pasaranIdx = ((EPOCH_PASARAN + diff) % 5 + 5) % 5;
  const hari = HARI_JAWA[hariIdx];
  const pasaran = PASARAN[pasaranIdx];
  const totalNeptu = hari.neptu + pasaran.neptu;
  return { hari, pasaran, totalNeptu };
}

function getPrimbonData(neptu, hariNeptu, pasaranNeptu) {
  // Watak berdasarkan total neptu
  const watakMap = {
    7: { label:'Penjaga', watak:'Bertanggung jawab, setia, dan protektif. Jiwa yang stabil dan bisa diandalkan.' },
    8: { label:'Pemikir', watak:'Analitis dan bijaksana. Suka merenung sebelum bertindak, penuh pertimbangan.' },
    9: { label:'Pejuang', watak:'Penuh semangat dan keteguhan. Tidak mudah menyerah, berjiwa pejuang sejati.' },
    10:{ label:'Visioner',watak:'Memiliki pandangan jauh ke depan. Inovatif dan penuh ide-ide besar.' },
    11:{ label:'Diplomat',watak:'Mudah bergaul dan dicintai banyak orang. Pandai menjaga hubungan.' },
    12:{ label:'Pemimpin',watak:'Berwibawa dan karismatik. Lahir untuk memimpin dan memberi pengaruh.' },
    13:{ label:'Penjelajah',watak:'Penuh rasa ingin tahu dan petualangan. Selalu ingin menemukan hal baru.' },
    14:{ label:'Pelayan',watak:'Penuh kasih dan dedikasi. Bahagia dalam melayani dan membantu sesama.' },
    15:{ label:'Mistikus',watak:'Peka secara spiritual dan intuitif. Memiliki kemampuan merasakan yang tajam.' },
    16:{ label:'Transformator',watak:'Agen perubahan yang kuat. Mampu mengatasi tantangan dan bangkit dari keterpurukan.' },
    17:{ label:'Iluminator',watak:'Membawa cahaya dan inspirasi bagi orang lain. Jiwa yang menerangi sekitar.' },
    18:{ label:'Maestro',watak:'Menguasai banyak hal dengan kedalaman. Bakat besar dalam seni dan pengetahuan.' },
  };
  const neptuCapped = Math.min(Math.max(neptu, 7), 18);
  const watak = watakMap[neptuCapped] || watakMap[12];

  // Rejeki dan nasib berdasarkan neptu
  const rejekinasib = [
    { min:7, max:9,   rejeki:'Cukup dengan kerja keras. Rezeki datang dari usaha dan ketekunan.',               nasib:'Nasib bertumpu pada pilihan dan perjuangan pribadi.' },
    { min:10, max:12, rejeki:'Aliran rezeki yang baik. Cenderung mendapat bantuan dan peluang dari orang lain.', nasib:'Nasib baik, terutama dalam karir dan sosial.' },
    { min:13, max:15, rejeki:'Rezeki berlimpah dari banyak sumber. Pintu terbuka dengan luas.',                  nasib:'Dikelilingi keberkahan dan dukungan semesta.' },
    { min:16, max:18, rejeki:'Rezeki besar dari transformasi dan keberanian. Butuh keberanian untuk meraihnya.',  nasib:'Nasib luar biasa bagi yang berani melampaui batas.' },
  ];
  let rn = rejekinasib[0];
  for(const r of rejekinasib) { if(neptu >= r.min && neptu <= r.max) { rn = r; break; } }

  // Kecocokan jodoh berdasarkan pasaran
  const jodohMap = {
    'Kliwon':  'Paling cocok dengan Kliwon, Legi, dan Pon. Kurang cocok dengan Wage.',
    'Legi':    'Paling cocok dengan Legi, Kliwon, dan Pahing. Harmonis dalam banyak pasangan.',
    'Pahing':  'Paling cocok dengan Pahing dan Pon. Penuh dinamika yang membangun.',
    'Pon':     'Paling cocok dengan Pon, Kliwon, dan Pahing. Pasangan yang stabil dan kuat.',
    'Wage':    'Paling cocok dengan Wage dan Legi. Hubungan yang sabar dan setia.',
  };

  // Hari baik
  const hariBaikMap = {
    'Minggu': 'Rabu dan Kamis paling menguntungkan untuk memulai usaha besar.',
    'Senin':  'Jumat dan Rabu baik untuk kegiatan sosial dan kerjasama.',
    'Selasa': 'Kamis dan Minggu mendukung keberanian dan pengambilan keputusan.',
    'Rabu':   'Senin dan Jumat ideal untuk komunikasi dan negosiasi.',
    'Kamis':  'Minggu dan Selasa memperkuat kebijaksanaan dan ekspansi.',
    'Jumat':  'Senin dan Kamis membawa harmoni dan keberuntungan.',
    'Sabtu':  'Rabu dan Selasa mendukung ketekunan dan pencapaian.',
  };

  return {
    watak,
    rejeki: rn.rejeki,
    nasib: rn.nasib,
    jodoh: jodohMap[pasaranNeptu.name] || '—',
    hariBaik: hariBaikMap[hariNeptu.name] || '—',
  };
}

// ════════════════════════════════════════════════
// ── MANZIL DATA ──
// ════════════════════════════════════════════════
const MANZIL = [
  { no:1, roman:'I', arabic:'الشرطين', latin:'Al-Sharaṭayn', star:'Beta Arietis (Sheratan)', elemen:'Api',sifat_alam:'Panas & Kering',nature:'Tidak Menguntungkan', sifat:['Keberanian tanpa pamrih','Semangat perintis','Ketegasan & kecepatan','Kehendak kuat'], desc:'Manzil pertama, dua tanda Aries. Sheratan membawa energi perintis yang kuat.' },
  { no:2, roman:'II', arabic:'البطين', latin:'Al-Buṭayn', star:'Epsilon Arietis (Botein)', elemen:'Tanah',sifat_alam:'Dingin & Kering',nature:'Menguntungkan', sifat:['Ketekunan & kesabaran','Kestabilan emosi','Kemakmuran bertahap','Daya tahan besar'], desc:'Manzil kedua, perut Aries. Botein membawa kemampuan bertahan dan membangun.' },
  { no:3, roman:'III', arabic:'الثريا', latin:'Al-Thurayya', star:'Eta Tauri (Alcyone/Pleiades)', elemen:'Tanah',sifat_alam:'Dingin & Kering',nature:'Menguntungkan', sifat:['Keindahan & kesenian','Kecerdasan sosial','Kelimpahan','Daya tarik tinggi'], desc:'Manzil ketiga, Pleiades. Gugusan bintang ini memancarkan karunia keindahan.' },
  { no:4, roman:'IV', arabic:'الدبران', latin:'Al-Dabarān', star:'Alpha Tauri (Aldebaran)', elemen:'Api',sifat_alam:'Panas & Kering',nature:'Tidak Menguntungkan', sifat:['Keberanian ekstrem','Konfrontasi langsung','Kekuatan tempur','Keteguhan prinsip'], desc:'Manzil keempat, Aldebaran, mata banteng. Bintang royal yang memancarkan kekuatan.' },
  { no:5, roman:'V', arabic:'الهقعة', latin:'Al-Haqʿah', star:'Lambda Orionis (Meissa)', elemen:'Udara',sifat_alam:'Panas & Lembap',nature:'Menguntungkan', sifat:['Kebebasan & petualangan','Daya jelajah tinggi','Fleksibilitas & adaptasi','Rasa ingin tahu besar'], desc:'Manzil kelima, kepala Orion. Meissa membawa jiwa petualang.' },
  { no:6, roman:'VI', arabic:'الهنعة', latin:'Al-Hanʿah', star:'Gamma Geminorum (Alhena)', elemen:'Udara',sifat_alam:'Panas & Lembap',nature:'Menguntungkan', sifat:['Diplomasi & kebijaksanaan','Kemampuan negosiasi','Kelenturan berpikir','Kemampuan mediasi'], desc:'Manzil keenam, Gemini. Alhena membawa karunia diplomasi.' },
  { no:7, roman:'VII', arabic:'الذراع', latin:'Al-Dhirāʿ', star:'Alpha Geminorum (Castor)', elemen:'Udara',sifat_alam:'Panas & Lembap',nature:'Sangat Menguntungkan', sifat:['Kemurahan hati','Kasih sayang & empati','Keberuntungan & rezeki','Hubungan harmonis'], desc:'Manzil ketujuh, lengan Gemini. Castor dan Pollux membawa keberuntungan ganda.' },
  { no:8, roman:'VIII', arabic:'النثرة', latin:'Al-Nathrah', star:'M44 Praesepe (Beehive)', elemen:'Air',sifat_alam:'Dingin & Lembap',nature:'Campuran', sifat:['Kedalaman emosi','Naluri & intuisi kuat','Kepekaan tinggi','Ikatan keluarga'], desc:'Manzil kedelapan, sarang lebah Cancer.' },
  { no:9, roman:'IX', arabic:'الطرف', latin:'Al-Ṭarf', star:'Lambda Leonis (Alterf)', elemen:'Air',sifat_alam:'Dingin & Lembap',nature:'Tidak Menguntungkan', sifat:['Introspeksi mendalam','Kepekaan terhadap bahaya','Kehati-hatian & waspada','Persepsi halus'], desc:'Manzil kesembilan, pandangan singa. Alterf membawa ketajaman persepsi batin.' },
  { no:10, roman:'X', arabic:'الجبهة', latin:'Al-Jabhah', star:'Alpha Leonis (Regulus)', elemen:'Api',sifat_alam:'Panas & Kering',nature:'Campuran', sifat:['Kebanggaan & harga diri','Otoritas & wibawa','Kemuliaan & prestasi','Jiwa raja'], desc:'Manzil kesepuluh, dahi singa. Regulus, bintang kerajaan.' },
  { no:11, roman:'XI', arabic:'الزبرة', latin:'Al-Zubrah', star:'Delta Leonis (Zosma)', elemen:'Api',sifat_alam:'Panas & Kering',nature:'Menguntungkan', sifat:['Kemampuan analitis','Ketelitian & presisi','Dedikasi & loyalitas','Pelayanan tulus'], desc:'Manzil kesebelas, punuk singa. Zosma membawa karunia kecermatan.' },
  { no:12, roman:'XII', arabic:'الصرفة', latin:'Al-Ṣarfah', star:'Beta Leonis (Denebola)', elemen:'Tanah',sifat_alam:'Dingin & Kering',nature:'Tidak Menguntungkan', sifat:['Perubahan & transformasi','Kemampuan beradaptasi','Pengelolaan detail','Analisis mendalam'], desc:'Manzil kedua belas, ekor singa. Denebola menandai transisi.' },
  { no:13, roman:'XIII', arabic:'العوا', latin:'Al-ʿAwwā', star:'Beta Virginis (Zavijava)', elemen:'Tanah',sifat_alam:'Dingin & Kering',nature:'Menguntungkan', sifat:['Keseimbangan & harmoni','Rasa keadilan tinggi','Kemampuan diplomasi','Estetika & keindahan'], desc:'Manzil ketiga belas, lolongan. Zavijava membawa jiwa keadilan.' },
  { no:14, roman:'XIV', arabic:'السماك', latin:'Al-Simāk', star:'Alpha Virginis (Spica)', elemen:'Udara',sifat_alam:'Panas & Lembap',nature:'Sangat Menguntungkan', sifat:['Kecemerlangan & kejeniusan','Kemakmuran & kelimpahan','Daya tarik universal','Karisma luar biasa'], desc:'Manzil keempat belas. Spica memancarkan kemakmuran tertinggi.' },
  { no:15, roman:'XV', arabic:'الغفر', latin:'Al-Ghafr', star:'Iota Virginis (Syrma)', elemen:'Udara',sifat_alam:'Panas & Lembap',nature:'Menguntungkan', sifat:['Pengampunan & kemurahan','Perlindungan & keamanan','Niat murni','Spiritualitas tinggi'], desc:'Manzil kelima belas, pelindung. Syrma membawa perlindungan.' },
  { no:16, roman:'XVI', arabic:'الزبانا', latin:'Al-Zubānā', star:'Alpha Librae (Zubenelgenubi)', elemen:'Udara',sifat_alam:'Panas & Kering',nature:'Tidak Menguntungkan', sifat:['Transformasi & regenerasi','Kekuatan tersembunyi','Daya magis & mistis','Kedalaman jiwa'], desc:'Manzil keenam belas, capit kalajengking.' },
  { no:17, roman:'XVII', arabic:'الإكليل', latin:'Al-Iklīl', star:'Pi Scorpii (Vrischika)', elemen:'Air',sifat_alam:'Dingin & Lembap',nature:'Menguntungkan', sifat:['Mahkota & kehormatan','Kemampuan penyembuhan','Kharisma spiritual','Kebijaksanaan okultisme'], desc:'Manzil ketujuh belas, mahkota kalajengking.' },
  { no:18, roman:'XVIII', arabic:'القلب', latin:'Al-Qalb', star:'Alpha Scorpii (Antares)', elemen:'Api',sifat_alam:'Panas & Kering',nature:'Campuran', sifat:['Jantung & keberanian','Hasrat & gairah besar','Filsafat & pencarian makna','Keteguhan prinsip'], desc:'Manzil kedelapan belas, jantung kalajengking. Antares memancarkan keberanian tanpa batas.' },
  { no:19, roman:'XIX', arabic:'الشولة', latin:'Al-Shawlah', star:'Lambda Scorpii (Shaula)', elemen:'Api',sifat_alam:'Panas & Kering',nature:'Tidak Menguntungkan', sifat:['Tajam & menusuk','Pertahanan diri kuat','Kritis & analitis','Kemandirian tinggi'], desc:'Manzil kesembilan belas, sengat kalajengking.' },
  { no:20, roman:'XX', arabic:'النعائم', latin:'Al-Naʿāʾim', star:'Gamma Sagittarii (Alnasl)', elemen:'Tanah',sifat_alam:'Dingin & Kering',nature:'Menguntungkan', sifat:['Ambisi terstruktur','Ketekunan & disiplin','Kesabaran jangka panjang','Keberhasilan bertahap'], desc:'Manzil kedua puluh, burung unta. Alnasl membawa ketekunan.' },
  { no:21, roman:'XXI', arabic:'البلدة', latin:'Al-Baldah', star:'Pi Sagittarii (Albaldah)', elemen:'Tanah',sifat_alam:'Dingin & Kering',nature:'Tidak Menguntungkan', sifat:['Kesendirian & refleksi','Kebijaksanaan dari pengalaman','Perencanaan matang','Kedewasaan spiritual'], desc:'Manzil kedua puluh satu, kota kosong. Albaldah membawa keheningan.' },
  { no:22, roman:'XXII', arabic:'سعد الذابح', latin:'Saʿd al-Dhābiḥ', star:'Alpha Capricorni (Algedi)', elemen:'Tanah',sifat_alam:'Panas & Kering',nature:'Campuran', sifat:['Keberuntungan sang penyembelih','Ketegasan & keputusan','Kemampuan melepas','Transformasi nasib'], desc:'Manzil kedua puluh dua.' },
  { no:23, roman:'XXIII', arabic:'سعد بلع', latin:'Saʿd Bulaʿ', star:'Beta Aquarii (Sadalsuud)', elemen:'Udara',sifat_alam:'Panas & Lembap',nature:'Menguntungkan', sifat:['Keberuntungan sang penelan','Perubahan revolusioner','Ide-ide orisinal','Kemanusiaan & altruisme'], desc:'Manzil kedua puluh tiga. Sadalsuud membawa bintang keberuntungan.' },
  { no:24, roman:'XXIV', arabic:'سعد السعود', latin:'Saʿd al-Suʿūd', star:'Alpha Aquarii (Sadalsuud prime)', elemen:'Udara',sifat_alam:'Panas & Lembap',nature:'Sangat Menguntungkan', sifat:['Keberuntungan tertinggi','Visi & inovasi','Kebebasan & kemerdekaan','Keunikan & orisinalitas'], desc:'Manzil kedua puluh empat, keberuntungan segala keberuntungan.' },
  { no:25, roman:'XXV', arabic:'سعد الأخبية', latin:'Saʿd al-Akhbiyah', star:'Gamma Aquarii (Sadachbia)', elemen:'Air',sifat_alam:'Dingin & Lembap',nature:'Campuran', sifat:['Mystisisme & spiritualitas','Impian & visi','Kepekaan jiwa','Keberuntungan tenda bintang'], desc:'Manzil kedua puluh lima. Sadachbia membawa alam mimpi.' },
  { no:26, roman:'XXVI', arabic:'الفرغ المقدم', latin:'Al-Fargh al-Muqaddam', star:'Alpha Pegasi (Markab)', elemen:'Air',sifat_alam:'Dingin & Lembap',nature:'Menguntungkan', sifat:['Tuangan pertama','Kelimpahan spiritual','Kasih sayang universal','Kreativitas mengalir'], desc:'Manzil kedua puluh enam. Markab membawa kelimpahan dan aliran.' },
  { no:27, roman:'XXVII', arabic:'الفرغ المؤخر', latin:'Al-Fargh al-Muʾakhkhar', star:'Gamma Pegasi (Algenib)', elemen:'Air',sifat_alam:'Dingin & Lembap',nature:'Menguntungkan', sifat:['Tuangan terakhir','Penyempurnaan siklus','Pewarisan & legasi','Kebijaksanaan akhir'], desc:'Manzil kedua puluh tujuh. Algenib membawa penyempurnaan.' },
  { no:28, roman:'XXVIII', arabic:'الرشاء', latin:'Al-Rishāʾ', star:'Beta Andromedae (Mirach)', elemen:'Air',sifat_alam:'Dingin & Lembap',nature:'Campuran', sifat:['Tali & jangkar jiwa','Koneksi spiritual','Ikatan takdir','Penyatuan siklus kosmik'], desc:'Manzil kedua puluh delapan. Mirach menutup siklus kosmik bulan.' },
];
const ZODIAK_LON = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

// ════════════════════════════════════════════════
// ── NUMEROLOGY CALCULATIONS ──
// ════════════════════════════════════════════════
function reduceNum(n, keepMaster=true) {
  if(keepMaster && (n===11||n===22||n===33)) return n;
  if(n < 10) return n;
  const sum = String(n).split('').reduce((a,d)=>a+parseInt(d),0);
  return reduceNum(sum, keepMaster);
}
function calcLifePath(dateStr) {
  const [y,m,d] = dateStr.split('-').map(Number);
  const dayR = reduceNum(d);
  const monR = reduceNum(m);
  const yrDig = String(y).split('').reduce((a,c)=>a+parseInt(c),0);
  const yrR = reduceNum(yrDig);
  const total = dayR + monR + yrR;
  const final = reduceNum(total);
  const steps = `${d}→${dayR} + ${m}→${monR} + ${y}→${yrDig}→${yrR} = ${total}→${final}`;
  return { number: final, steps };
}
function calcDestiny(name) {
  const clean = name.toUpperCase().replace(/[^A-Z]/g,'');
  let total = 0;
  const mapped = clean.split('').map(c => { const v=LETTER_VALUES[c]||0; total+=v; return `${c}=${v}`; });
  const final = reduceNum(total);
  const steps = `(${mapped.slice(0,7).join(' ')})${mapped.length>7?'…':''} = ${total}→${final}`;
  return { number: final, steps };
}

// ════════════════════════════════════════════════
// ── ASTRONOMY (MANZIL) ──
// ════════════════════════════════════════════════
function julianDay(year,month,day,hour,min) {
  if(month<=2){year--;month+=12;}
  const A=Math.floor(year/100);
  const B=2-A+Math.floor(A/4);
  return Math.floor(365.25*(year+4716))+Math.floor(30.6001*(month+1))+day+B-1524.5+(hour+min/60)/24;
}
function moonLongitude(jd) {
  const T=(jd-2451545.0)/36525;
  let L0=218.3164477+481267.88123421*T-0.0015786*T*T+T*T*T/538841-T*T*T*T/65194000;
  let M=134.9633964+477198.8675055*T+0.0087414*T*T+T*T*T/69699-T*T*T*T/14712000;
  let D=297.8501921+445267.1114034*T-0.0018819*T*T+T*T*T/545868-T*T*T*T/113065000;
  let Ms=357.5291092+35999.0502909*T-0.0001536*T*T+T*T*T/24490000;
  let F=93.2720950+483202.0175233*T-0.0036539*T*T-T*T*T/3526000+T*T*T*T/863310000;
  const r=Math.PI/180;
  M*=r; D*=r; Ms*=r; F*=r;
  let corr=6.288774*Math.sin(M)+1.274027*Math.sin(2*D-M)+0.658314*Math.sin(2*D)
    +0.213618*Math.sin(2*M)-0.185116*Math.sin(Ms)-0.114332*Math.sin(2*F)
    +0.058793*Math.sin(2*D-2*M)+0.057066*Math.sin(2*D-Ms-M)+0.053322*Math.sin(2*D+M)
    +0.045758*Math.sin(2*D-Ms)-0.040923*Math.sin(Ms-M)-0.034720*Math.sin(D)
    -0.030383*Math.sin(Ms+M)+0.015327*Math.sin(2*D-2*F)-0.012528*Math.sin(M+2*F)
    -0.010980*Math.sin(M-2*F);
  let lon=(L0+corr)%360;
  if(lon<0)lon+=360;
  return lon;
}
function sunLongitude(jd) {
  const T=(jd-2451545.0)/36525;
  let L0=280.46646+36000.76983*T+0.0003032*T*T;
  let M=357.52911+35999.05029*T-0.0001537*T*T;
  const r=Math.PI/180; M*=r;
  let C=(1.914602-0.004817*T-0.000014*T*T)*Math.sin(M)+(0.019993-0.000101*T)*Math.sin(2*M)+0.000289*Math.sin(3*M);
  let lon=(L0+C)%360;
  if(lon<0)lon+=360;
  return lon;
}
function getManzilData(moonLon) {
  const span=360/28;
  const idx=Math.min(Math.floor(moonLon/span),27);
  return MANZIL[idx];
}
function getMoonPhase(moonLon,sunLon) {
  const diff=(moonLon-sunLon+360)%360;
  if(diff<45)  return 'Bulan Baru 🌑';
  if(diff<90)  return 'Sabit Awal 🌒';
  if(diff<135) return 'Seperempat Awal 🌓';
  if(diff<180) return 'Cembung Awal 🌔';
  if(diff<225) return 'Purnama 🌕';
  if(diff<270) return 'Cembung Akhir 🌖';
  if(diff<315) return 'Seperempat Akhir 🌗';
  return 'Sabit Akhir 🌘';
}
function getZodiakFromLon(lon) {
  const idx=Math.floor(lon/30);
  const deg=(lon%30).toFixed(1);
  return { sign: ZODIAK_LON[idx], deg };
}

// ════════════════════════════════════════════════
// ── GEOCODING ──
// ════════════════════════════════════════════════
let selectedCity = null;
let debounceTimer = null;

document.getElementById('inputKota').addEventListener('input', function(){
  clearTimeout(debounceTimer);
  const val=this.value.trim();
  document.getElementById('cityInfo').textContent='';
  document.getElementById('cityError').textContent='';
  selectedCity=null;
  if(val.length<3){document.getElementById('citySuggestions').style.display='none';return;}
  debounceTimer=setTimeout(()=>searchCity(val),400);
});

async function searchCity(q){
  const errEl=document.getElementById('cityError');
  const box=document.getElementById('citySuggestions');
  errEl.textContent='';
  box.innerHTML='<div class="city-suggestion-item" style="color:var(--text-muted);font-style:italic;">Mencari...</div>';
  box.style.display='block';
  try{
    const prompt=`Kamu adalah geocoding API. User mengetik: "${q}"

Kembalikan HANYA JSON array (tanpa markdown, tanpa teks lain) berisi maksimal 5 kota yang paling relevan dengan format:
[{"name":"Nama Kota, Provinsi/State, Negara","lat":0.0000,"lon":0.0000,"timezone":"Region/City"}]

Contoh untuk "jakarta":
[{"name":"Jakarta, DKI Jakarta, Indonesia","lat":-6.2088,"lon":106.8456,"timezone":"Asia/Jakarta"},{"name":"Jakarta Selatan, DKI Jakarta, Indonesia","lat":-6.2615,"lon":106.8106,"timezone":"Asia/Jakarta"}]

Rules:
- lat/lon akurat sampai 4 desimal
- timezone pakai format IANA (Asia/Jakarta, Asia/Makassar, Asia/Jayapura, America/New_York, Europe/London, dst)
- Prioritaskan kota-kota besar yang paling dikenal
- Kalau query dalam bahasa Indonesia, prioritaskan Indonesia
- Kalau tidak ada kota relevan, kembalikan array kosong []
- HANYA JSON, tidak ada kata-kata lain sama sekali`;

    const res = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 400,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    const raw = data.content?.map(c=>c.text||'').join('').trim();
    // Strip any accidental markdown fences
    const cleaned = raw.replace(/```json|```/gi,'').trim();
    const results = JSON.parse(cleaned);
    showCitySuggestions(Array.isArray(results) ? results : []);
  }catch(e){
    box.style.display='none';
    errEl.textContent='Gagal mencari kota. Coba ketik lebih spesifik.';
  }
}

function showCitySuggestions(results){
  const box=document.getElementById('citySuggestions');
  if(!results||results.length===0){
    box.style.display='none';
    document.getElementById('cityError').textContent='Kota tidak ditemukan.';
    return;
  }
  box.innerHTML='';
  results.forEach(r=>{
    const item=document.createElement('div');
    item.className='city-suggestion-item';
    item.textContent=r.name;
    item.onclick=()=>{
      selectedCity={
        name: r.name,
        lat: parseFloat(r.lat),
        lon: parseFloat(r.lon),
        timezone: r.timezone || null
      };
      document.getElementById('inputKota').value=r.name;
      document.getElementById('cityInfo').textContent=`📍 ${r.lat}°, ${r.lon}°`;
      document.getElementById('cityError').textContent='';
      box.style.display='none';
      livePreview();
    };
    box.appendChild(item);
  });
  box.style.display='block';
}

document.addEventListener('click',e=>{
  if(!e.target.closest('.city-wrapper')) document.getElementById('citySuggestions').style.display='none';
});

async function getTimezoneOffset(){
  // Use the timezone string that came from Open-Meteo (e.g. "Asia/Jakarta")
  // falling back to browser timezone, then WIB
  try{
    const tzName = (selectedCity && selectedCity.timezone)
      ? selectedCity.timezone
      : Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now=new Date();
    const utcDate=new Date(now.toLocaleString('en-US',{timeZone:'UTC'}));
    const tzDate=new Date(now.toLocaleString('en-US',{timeZone:tzName}));
    return{offset:(tzDate-utcDate)/3600000, name:tzName};
  }catch(e){return{offset:7,name:'WIB (UTC+7)'};}
}

// ════════════════════════════════════════════════
// ── LIVE PREVIEW ──
// ════════════════════════════════════════════════
function livePreview() {
  const nama = document.getElementById('inputNama').value.trim();
  const tgl  = document.getElementById('inputTanggal').value;
  const row  = document.getElementById('previewRow');

  let hasAny = false;
  if(tgl) {
    const lp = calcLifePath(tgl);
    const dest = calcDestiny(nama);
    const zod = getSunSign(tgl);
    const weton = getWeton(tgl);
    document.getElementById('pvLP').textContent = lp.number;
    document.getElementById('pvDest').textContent = dest.number;
    document.getElementById('pvZodiak').textContent = zod.symbol;
    document.getElementById('pvWeton').textContent = weton.hari.name + ' ' + weton.pasaran.name;
    hasAny = true;
  }
  row.style.display = hasAny ? 'flex' : 'none';
}

// ════════════════════════════════════════════════
// ── COMPATIBILITY ──
// ════════════════════════════════════════════════
function compatAnalysis(lp, dest) {
  const diff = Math.abs(lp - dest);
  if(lp === dest) return `<strong>Life Path & Destiny Identik (${lp})</strong> — Keselarasan langka. Perjalanan hidupmu dan tujuan takdirmu menunjuk ke arah yang sama. Fokus luar biasa, namun butuh pengembangan aktif agar tidak stagnan.`;
  if(diff === 1 || diff === 8) return `<strong>Kompatibilitas Tinggi</strong> — Life Path ${lp} dan Destiny ${dest} saling melengkapi. Cara kamu menjalani hidup dan tujuan terdalammu bekerja secara harmonis.`;
  if(diff <= 3) return `<strong>Kompatibilitas Sedang</strong> — Ada tensi produktif antara Life Path ${lp} dan Destiny ${dest}. Perbedaan ini bisa menjadi sumber pertumbuhan yang kuat.`;
  return `<strong>Tensi Transformatif</strong> — Life Path ${lp} dan Destiny ${dest} menciptakan polaritas kuat. Bukan hambatan, tapi undangan untuk mengintegrasikan dua kekuatan menjadi sesuatu yang unik.`;
}

// ════════════════════════════════════════════════
// ── RENDER FUNCTIONS ──
// ════════════════════════════════════════════════
function renderNumerology(data) {
  const { lp, dest } = data;
  const lpD  = NUM_DATA[lp.number]  || NUM_DATA[reduceNum(lp.number, false)];
  const destD = NUM_DATA[dest.number] || NUM_DATA[reduceNum(dest.number, false)];
  const isMLP = [11,22,33].includes(lp.number);
  const isMDest = [11,22,33].includes(dest.number);

  // Glance
  document.getElementById('glLP').textContent    = lp.number;
  document.getElementById('glLPName').textContent = lpD?.name || '';
  document.getElementById('glDest').textContent   = dest.number;
  document.getElementById('glDestName').textContent = destD?.name || '';

  // Cards
  document.getElementById('resLPNum').textContent   = lp.number;
  document.getElementById('resLPName').textContent  = lpD?.name || '';
  document.getElementById('resLPKw').textContent    = lpD?.keyword || '';
  document.getElementById('resLPForm').textContent  = lp.steps;
  document.getElementById('resLPMaster').innerHTML  = isMLP ? `<div class="master-badge" style="color:var(--indigo)">✦ Master Number</div>` : '';

  document.getElementById('resDestNum').textContent  = dest.number;
  document.getElementById('resDestName').textContent = destD?.name || '';
  document.getElementById('resDestKw').textContent   = destD?.keyword || '';
  document.getElementById('resDestForm').textContent = dest.steps;
  document.getElementById('resDestMaster').innerHTML = isMDest ? `<div class="master-badge" style="color:var(--teal)">✦ Master Number</div>` : '';

  // Traits
  document.getElementById('resLPTraits').innerHTML = `
    <div class="traits-title lp">Life Path ${lp.number} — Karakteristik</div>
    ${lpD?.lp_traits.map(t=>`<div class="trait-item"><div class="trait-dot lp"></div><div>${t}</div></div>`).join('')}
  `;
  document.getElementById('resDestTraits').innerHTML = `
    <div class="traits-title dest">Destiny ${dest.number} — Potensi</div>
    ${destD?.dest_traits.map(t=>`<div class="trait-item"><div class="trait-dot dest"></div><div>${t}</div></div>`).join('')}
  `;

  // Compat
  document.getElementById('resCompat').innerHTML = compatAnalysis(lp.number, dest.number);
}

function renderManzil(data) {
  const { manzil, moonLon, zodiak, phase, degInManzil, city, tzData } = data;

  document.getElementById('glManzil').textContent    = manzil.no;
  document.getElementById('glManzilName').textContent = manzil.latin.split(' ')[0];

  document.getElementById('resManzilNum').textContent    = manzil.no;
  document.getElementById('resManzilRoman').textContent  = manzil.roman;
  document.getElementById('resManzilArabic').textContent = manzil.arabic;
  document.getElementById('resManzilLatin').textContent  = manzil.latin;
  document.getElementById('resManzilStar').textContent   = '✦ ' + manzil.star + ' ✦';

  document.getElementById('resTags').innerHTML = `
    <span class="tag elem">${manzil.elemen}</span>
    <span class="tag nature">${manzil.sifat_alam}</span>
    <span class="tag">${manzil.nature}</span>
  `;

  document.getElementById('resDegree').innerHTML  = `${degInManzil}°<small>dalam Manzil</small>`;
  document.getElementById('resZodiak').innerHTML  = `${zodiak.sign}<small>${zodiak.deg}°</small>`;
  document.getElementById('resFase').textContent  = phase;
  document.getElementById('resLong').innerHTML    = `${moonLon.toFixed(4)}°<small>ekliptika</small>`;
  document.getElementById('resKoord').innerHTML   = `${city.lat.toFixed(2)}°, ${city.lon.toFixed(2)}°`;
  document.getElementById('resTZ').innerHTML      = `<small>${tzData.name}</small>`;

  document.getElementById('resSifat').innerHTML = manzil.sifat.map(s=>`
    <div class="sifat-item">
      <div class="sifat-bullet">✦</div>
      <div class="sifat-text">${s}</div>
    </div>
  `).join('');
}

function renderZodiak(data) {
  const zod = data.zodiak;
  document.getElementById('glZodiak').textContent   = zod.symbol;
  document.getElementById('glZodiakEl').textContent = zod.elemen;

  document.getElementById('resZodSymbol').textContent = zod.symbol;
  document.getElementById('resZodName').textContent   = zod.name;
  document.getElementById('resZodRange').textContent  = zod.range;

  document.getElementById('resZodAttr').innerHTML = [
    {l:'Elemen',  v:zod.elemen},
    {l:'Mode',    v:zod.mode},
    {l:'Planet',  v:zod.planet},
    {l:'Batu',    v:zod.batu},
    {l:'Polaritas',v:zod.polarity},
    {l:'Keyword', v:zod.keyword.split(' · ')[0]},
  ].map(a=>`<div class="z-attr"><div class="z-attr-label">${a.l}</div><div class="z-attr-value">${a.v}</div></div>`).join('');

  document.getElementById('resZodTraits').innerHTML = zod.traits.map(t=>`
    <div class="zodiak-trait"><div class="z-dot"></div><div>${t}</div></div>
  `).join('');
}

function renderWeton(data) {
  const { weton, primbon } = data;
  document.getElementById('glWeton').textContent = weton.hari.name.slice(0,3) + ' ' + weton.pasaran.name.slice(0,3);
  document.getElementById('glNeptu').textContent = 'Neptu ' + weton.totalNeptu;

  document.getElementById('resWetonFull').textContent  = weton.hari.name + ' ' + weton.pasaran.name;
  document.getElementById('resWetonDesc').textContent  = weton.hari.desc;
  document.getElementById('resNeptu').textContent      = weton.totalNeptu;
  document.getElementById('resNeptuBreak').textContent = `${weton.hari.name} (${weton.hari.neptu}) + ${weton.pasaran.name} (${weton.pasaran.neptu})`;

  document.getElementById('resWetonAttr').innerHTML = [
    {l:'Hari Jawa',  v:weton.hari.name},
    {l:'Pasaran',    v:weton.pasaran.name},
    {l:'Neptu Hari', v:weton.hari.neptu},
    {l:'Neptu Pasaran', v:weton.pasaran.neptu},
  ].map(a=>`<div class="w-attr"><div class="w-attr-label">${a.l}</div><div class="w-attr-value">${a.v}</div></div>`).join('');

  document.getElementById('resPrimbon').innerHTML = [
    {l:'Watak / Karakter', v:`<strong>${primbon.watak.label}:</strong> ${primbon.watak.watak}`},
    {l:'Sifat Pasaran',    v:weton.pasaran.desc},
    {l:'Rejeki & Nasib',   v:primbon.rejeki},
    {l:'Pandangan Nasib',  v:primbon.nasib},
    {l:'Kecocokan Jodoh',  v:primbon.jodoh},
    {l:'Hari Terbaik',     v:primbon.hariBaik},
  ].map(a=>`
    <div class="primbon-item">
      <div class="primbon-label">${a.l}</div>
      <div class="primbon-value">${a.v}</div>
    </div>
  `).join('');
}

function buildSynthTags(d) {
  const { lp, dest, manzil, zodiak, weton } = d;
  const lpD = NUM_DATA[lp.number];
  const destD = NUM_DATA[dest.number];
  return `
    <span class="synth-tag lp">LP ${lp.number} · ${lpD?.name||''}</span>
    <span class="synth-tag dest">Destiny ${dest.number} · ${destD?.name||''}</span>
    <span class="synth-tag manzil">Manzil ${manzil.no} · ${manzil.latin}</span>
    <span class="synth-tag zodiak">${zodiak.symbol} ${zodiak.name}</span>
    <span class="synth-tag weton">${weton.hari.name} ${weton.pasaran.name} · Neptu ${weton.totalNeptu}</span>
  `;
}

// ════════════════════════════════════════════════
// ── AI INTERPRETATIONS ──
// ════════════════════════════════════════════════
function loadingHTML() {
  return `<div class="interp-loading"><div class="i-dot"></div><div class="i-dot"></div><div class="i-dot"></div><span>Generating...</span></div>`;
}
function setInterp(elId, text) {
  const el = document.getElementById(elId);
  const formatted = text.trim()
    .replace(/\n\n+/g, '</p><p>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  el.innerHTML = `<div class="interp-text"><p>${formatted}</p></div>`;
}
function setInterpSynth(text) {
  const formatted = text.trim()
    .replace(/\n\n+/g, '</p><p>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  document.getElementById('interpSynth').innerHTML = `<div class="synth-interp-text"><p>${formatted}</p></div>`;
}
function setInterpError(elId, msg) {
  document.getElementById(elId).innerHTML = `<div class="interp-text" style="color:var(--text-muted);font-style:italic;">${msg}</div>`;
}

async function callClaude(prompt) {
  const res = await fetch('/api/claude', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  const data = await res.json();
  return data.content?.map(c=>c.text||'').join('') || '';
}

async function generateAllInterpretations(d) {
  const { nama, tanggal, lp, dest, manzil, zodiak, moonZodiak, phase, weton, primbon } = d;
  const lpD  = NUM_DATA[lp.number];
  const destD = NUM_DATA[dest.number];

  // 1. Numerology
  const promptNum = `Kamu adalah psikolog numerologi modern yang menggabungkan pendekatan Jungian dan psikologi positif. Gaya: tajam, langsung, berbasis psikologi — bukan mistis.

Data:
- Nama: ${nama}
- Life Path: ${lp.number} (${lpD?.name}) ${[11,22,33].includes(lp.number)?'— Master Number':''}
- Destiny: ${dest.number} (${destD?.name}) ${[11,22,33].includes(dest.number)?'— Master Number':''}
- Elemen: ${lpD?.attrs?.elemen}, Planet: ${lpD?.attrs?.planet}

Tulis analisis psikologis personal untuk ${nama} dalam Bahasa Indonesia. Sertakan: pola inti kepribadian LP ${lp.number}, misi Destiny ${dest.number}, dinamika interaksi keduanya, dan 2 insight konkret. Gaya narasi mengalir tanpa heading. Maksimal 320 kata.`;

  // 2. Manzil
  const promptManzil = `Kamu adalah astrolog Arab klasik yang ahli Manzil (منازل القمر).

Data:
- Nama: ${nama}
- Manzil ke-${manzil.no}: ${manzil.arabic} (${manzil.latin})
- Bintang: ${manzil.star}
- Elemen: ${manzil.elemen}, Sifat: ${manzil.sifat_alam}
- Fase Bulan: ${phase}
- Zodiak Bulan: ${zodiak.sign}
- Nature: ${manzil.nature}

Tulis interpretasi personal yang puitis dan mendalam untuk ${nama} dalam Bahasa Indonesia. Sertakan: makna Manzil bagi kepribadian, kekuatan & potensi terbesar, tantangan pertumbuhan spiritual, panduan singkat. Narasi mengalir tanpa heading. Maksimal 300 kata.`;

  // 3. Zodiak
  const promptZodiak = `Kamu adalah astrolog Barat modern yang memahami psikologi Sun Sign secara mendalam.

Data:
- Nama: ${nama}
- Sun Sign: ${zodiak.name} (${zodiak.symbol})
- Elemen: ${zodiak.elemen}, Mode: ${zodiak.mode}
- Planet: ${zodiak.planet}
- Range: ${zodiak.range}

Tulis interpretasi Sun Sign yang personal, psychologically grounded, dan insightful untuk ${nama} dalam Bahasa Indonesia. Sertakan: ekspresi inti energi ${zodiak.name}, kekuatan unik, area pertumbuhan, cara ekspresi diri terbaik. Narasi mengalir tanpa heading. Maksimal 280 kata.`;

  // 4. Weton
  const promptWeton = `Kamu adalah pakar Primbon Jawa yang memahami Weton secara mendalam dan mampu menginterpretasinya dengan cara yang modern dan relevan.

Data:
- Nama: ${nama}
- Weton: ${weton.hari.name} ${weton.pasaran.name}
- Total Neptu: ${weton.totalNeptu} (${weton.hari.name} ${weton.hari.neptu} + ${weton.pasaran.name} ${weton.pasaran.neptu})
- Watak Primbon: ${primbon.watak.label}
- Sifat Hari: ${weton.hari.desc}
- Sifat Pasaran: ${weton.pasaran.desc}

Tulis interpretasi Weton yang mendalam, bernuansa kearifan lokal namun relevan dengan kehidupan modern untuk ${nama} dalam Bahasa Indonesia. Sertakan: makna Weton bagi karakter ${nama}, implikasi Neptu ${weton.totalNeptu}, kekuatan & area kehati-hatian, panduan hidup dari tradisi Jawa. Narasi mengalir tanpa heading. Maksimal 300 kata.`;

  // 5. Synthesis
  const promptSynth = `Kamu adalah pemandu jiwa yang menguasai empat sistem pemetaan: Numerologi Barat, Manzil Arab, Zodiak Barat, dan Weton Jawa. Tugasmu adalah mensintesis keempatnya menjadi satu peta jiwa yang kohesif, bukan sekadar rangkuman.

Data lengkap ${nama}:
- Life Path ${lp.number} (${lpD?.name}), Destiny ${dest.number} (${destD?.name})
- Manzil ke-${manzil.no}: ${manzil.latin} — ${manzil.elemen}, ${manzil.nature}
- Sun Sign: ${zodiak.name} (${zodiak.elemen}, ${zodiak.mode})
- Weton: ${weton.hari.name} ${weton.pasaran.name} — Neptu ${weton.totalNeptu}
- Fase Bulan Lahir: ${phase}

Tulis Synthesis yang BUKAN sekadar penjumlahan sistem. Temukan: (1) tema jiwa yang BERULANG lintas sistem, (2) paradoks atau tensi yang justru menciptakan keunikan ${nama}, (3) misi hidup yang tersembunyi di balik pola kosmik ini, (4) satu kalimat kunci — sebuah mantra atau compass — yang merangkum seluruh energi ini.

Gaya: seperti surat dari alam semesta kepada ${nama} — puitis namun substansif, intim namun universal. Dalam Bahasa Indonesia. Maksimal 450 kata.`;

  // Fire first 4 in parallel
  const results = await Promise.allSettled([
    callClaude(promptNum),
    callClaude(promptManzil),
    callClaude(promptZodiak),
    callClaude(promptWeton),
  ]);

  if(results[0].status === 'fulfilled' && results[0].value) setInterp('interpNum', results[0].value);
  else setInterpError('interpNum', 'Interpretasi tidak tersedia. Periksa koneksi.');

  if(results[1].status === 'fulfilled' && results[1].value) setInterp('interpManzil', results[1].value);
  else setInterpError('interpManzil', 'Interpretasi tidak tersedia. Periksa koneksi.');

  if(results[2].status === 'fulfilled' && results[2].value) setInterp('interpZodiak', results[2].value);
  else setInterpError('interpZodiak', 'Interpretasi tidak tersedia. Periksa koneksi.');

  if(results[3].status === 'fulfilled' && results[3].value) setInterp('interpWeton', results[3].value);
  else setInterpError('interpWeton', 'Interpretasi tidak tersedia. Periksa koneksi.');

  // Synthesis runs after the 4 others — avoids rate limit on a 5-call simultaneous burst
  try {
    const synthText = await callClaude(promptSynth);
    if(synthText) setInterpSynth(synthText);
    else setInterpError('interpSynth', 'Synthesis kosong. Coba lagi.');
  } catch(e) {
    setInterpError('interpSynth', 'Synthesis tidak tersedia. Periksa koneksi.');
  }
}

// ════════════════════════════════════════════════
// ── LOADING STEPS ──
// ════════════════════════════════════════════════
function setStep(n) {
  for(let i=1;i<=5;i++){
    const el=document.getElementById(`lstep${i}`);
    el.classList.remove('active','done');
    if(i<n) el.classList.add('done');
    else if(i===n) el.classList.add('active');
  }
  document.getElementById('loadingText').textContent = [
    '','Menghitung matriks numerologi...','Mendeteksi posisi bulan...','Menganalisis Sun Sign...','Menelusuri Weton & Primbon...','Menyusun peta jiwa...'
  ][n] || '';
}

// ════════════════════════════════════════════════
// ── MAIN CALCULATION ──
// ════════════════════════════════════════════════
let currentData = null;

async function startMapping() {
  const nama    = document.getElementById('inputNama').value.trim();
  const tanggal = document.getElementById('inputTanggal').value;
  const jam     = document.getElementById('inputJam').value;
  const errEl   = document.getElementById('formError');

  if(!nama)   { errEl.textContent='⚠ Masukkan nama lengkap.'; return; }
  if(!tanggal){ errEl.textContent='⚠ Masukkan tanggal lahir.'; return; }
  if(!jam)    { errEl.textContent='⚠ Masukkan jam lahir.'; return; }
  if(!selectedCity){ errEl.textContent='⚠ Pilih kota lahir dari daftar.'; return; }
  errEl.textContent='';

  document.getElementById('formSection').style.display='none';
  document.getElementById('loading').style.display='block';
  document.getElementById('result').style.display='none';

  // ── 1. Numerology ──
  setStep(1);
  const lp   = calcLifePath(tanggal);
  const dest = calcDestiny(nama);
  await delay(300);

  // ── 2. Manzil ──
  setStep(2);
  const [year,month,day] = tanggal.split('-').map(Number);
  const [hour,min] = jam.split(':').map(Number);
  const tzData = await getTimezoneOffset();
  const hourUTC = hour - tzData.offset;
  const jd = julianDay(year,month,day,hourUTC,min);
  const moonLon = moonLongitude(jd);
  const sunLon  = sunLongitude(jd);
  const manzil  = getManzilData(moonLon);
  const zodMoon = getZodiakFromLon(moonLon);
  const phase   = getMoonPhase(moonLon, sunLon);
  const degInManzil = (moonLon%(360/28)).toFixed(2);
  await delay(300);

  // ── 3. Zodiak ──
  setStep(3);
  const zodiak = getSunSign(tanggal);
  await delay(200);

  // ── 4. Weton ──
  setStep(4);
  const weton = getWeton(tanggal);
  const primbon = getPrimbonData(weton.totalNeptu, weton.hari, weton.pasaran);
  await delay(200);

  // ── 5. Compile ──
  setStep(5);
  await delay(400);

  // Build combined data
  currentData = {
    nama, tanggal, jam,
    city: selectedCity,
    lp, dest,
    manzil, moonLon, zodMoon, phase, degInManzil, jd, tzData,
    zodiak,
    weton, primbon,
  };

  // Render all sections
  const tglObj = new Date(tanggal+'T12:00:00');
  const tglStr = tglObj.toLocaleDateString('id-ID',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  document.getElementById('resNama').textContent = nama;
  document.getElementById('resBirthdate').textContent = tglStr + ' · ' + jam + ' · ' + selectedCity.name.split(',')[0];

  renderNumerology(currentData);
  renderManzil({ ...currentData, zodiak: zodMoon });
  renderZodiak(currentData);
  renderWeton(currentData);

  // Synthesis subtitle
  document.getElementById('synthSubtitle').textContent = `${nama} — LP${lp.number} · Destiny${dest.number} · Manzil${manzil.no} · ${zodiak.name} · Weton Neptu ${weton.totalNeptu}`;
  document.getElementById('synthTags').innerHTML = buildSynthTags({ lp, dest, manzil, zodiak, weton });

  document.getElementById('loading').style.display='none';
  document.getElementById('result').style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});

  // Fire all AI interpretations — zodiak is sun sign data, moonZodiak separate
  generateAllInterpretations({
    nama, tanggal, lp, dest, manzil,
    zodiak,      // sun sign: { name, symbol, elemen, mode, planet, range, traits }
    moonZodiak: zodMoon,  // moon sign: { sign, deg }
    phase, weton, primbon
  });
}

function delay(ms){ return new Promise(r=>setTimeout(r,ms)); }

function resetForm(){
  document.getElementById('result').style.display='none';
  document.getElementById('formSection').style.display='block';
  ['inputNama','inputTanggal','inputJam','inputKota'].forEach(id=>{
    document.getElementById(id).value='';
  });
  document.getElementById('cityInfo').textContent='';
  document.getElementById('previewRow').style.display='none';
  selectedCity=null;
  window.scrollTo({top:0,behavior:'smooth'});
}
