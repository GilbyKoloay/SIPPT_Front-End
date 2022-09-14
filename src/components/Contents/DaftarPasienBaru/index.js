import { useState } from 'react';

// styles
import '../styles.css';

// input checking
const inputCheck = (type, val) => {
  if(val.trim().length === 0) {
    return ' tidak boleh kosong';
  }
  else if(type === 'letter') {
    return /^[A-Za-z\s]*$/.test(val) ? null : ' hanya boleh mengandung huruf saja';
  }
  else if(type === 'number') {
    return /^\d+$/.test(val) ? null : ' hanya boleh mengandung angka saja';
  }
};

export default function DaftarPasienBaru() {
  const addressList = [
    { districtCity: 'BOLAANG MONGONDOW', subDistricts: [
      { subDistrict: 'BILALANG', wardsVillages: ['APADO', 'BILALANG III', 'BILALANG III UTARA', 'BILALANG IV', 'BILALANG BARU', 'KOLINGANGAAN', 'TUDUAOG', 'TUDUAOG BARU'], },
      { subDistrict: 'BOLAANG', wardsVillages: ['BANGOMOLUNOW', 'INOBONTO SATU', 'INOBONTO DUA', 'KOMANGAAN', 'LANGAGON', 'LANGAGON SATU', 'LANGAGON DUA', 'SOLIMANDUNGAN BARU', 'SOLIMANDUNGAN SATU', 'SOLIMANDUNGAN DUA', 'INOBONTO'], },
      { subDistrict: 'BOLAANG TIMUR', wardsVillages: ['AMBANG I', 'AMBANG II', 'BANTIK', 'BOLAANG', 'BOLAANG SATU', 'LOLAN', 'LOLAN DUA', 'TADOY', 'TADOY I'], },
      { subDistrict: 'DUMOGA', wardsVillages: ['BUMBUNGON', 'DUMOGA SATU', 'KANAAN', 'MOTOTABIAN', 'PONOMPIAAN', 'PUSIAN', 'PUSIAN BARAT', 'PUSIAN SELATAN', 'SERASI', 'SINIYUNG', 'SINIYUNG SATU', 'TORUAKAT'], },
      { subDistrict: 'DUMOGA BARAT', wardsVillages: ['DOLODUO', 'DOLODUO SATU', 'DOLODUO DUA', 'DOLODUO TIGA', 'IKHWAN', 'MATAYANGAN', 'MEKARUO', 'TOTAUT', 'TORAUT TENGAH', 'TORAUT UTARA', 'UUAN', 'WANGGA BARU'], },
      { subDistrict: 'DUMOGA TENGAH', wardsVillages: ['IBOLIAN', 'IBOLIAN SATU', 'KINOMALINGAN', 'KOSIO', 'KOSIO TIMUR', 'KOSIO BARAT', 'WERDHI AGUNG', 'WERDHI AGUNG SELATAN', 'WERDHI AGUNG TIMUR', 'WERDHI AGUNG UTARA'], },
      { subDistrict: 'DUMOGA TENGGARA', wardsVillages: ['BONAWANG', 'DUMARA', 'IKUNA', 'KONAROM', 'KONAROM BARAT', 'KONAROM UTARA', 'OSION', 'TAPADAKA SATU', 'TAPADAKA TIMUR', 'TAPADAKA UTARA'], },
      { subDistrict: 'DUMOGA TIMUR', wardsVillages: ['AMERTHA BUANA', 'AMERTHA SARI', 'DUMOGA', 'DUMOGA II', 'DUMOGA EMPAT', 'DUMOGA TIGA', 'KEMBANG MERTHA', 'KEMBANG SARI', 'MODOMANG', 'MOGOYUNGGUNG', 'MOGOYUNGGUNG DUA', 'MOGOYUNGGUNG SATU', 'PINONOBATUAN', 'PINONOBATUAN BARAT', 'TONOM', 'IMANDI'], },
      { subDistrict: 'DUMOGA UTARA', wardsVillages: ['DONDOMON', 'DONDOMON UTARA', 'DONDOMON SELATAN', 'MOPUGAD SELATAN', 'MOPUGAD SELATAN SATU', 'MOPUGAD UTARA', 'MOPUGAD UTARA SATU', 'MOPUGAD UTARA DUA', 'MOPUYA SELATAN', 'MOPUYA SELATAN SATU', 'MOPUYA SELATAN DUA', 'MOPUYA UTARA', 'MOOPUYA UTARA SATU', 'MOPUYA UTARA DUA', 'TUMOKANG BARU', 'TUMOKANG TIMUR'], },
      { subDistrict: 'LOLAK', wardsVillages: ['BATURAPA I', 'BATURAPA INDUK', 'BUMBUNG', 'BUNTALO INDUK', 'BUNTALO SELATAN', 'BUNTALO TIMUR', 'DIAT', 'DULANGAN', 'LABUHAN UKI', 'LALOW', 'LOLAK II', 'LOLAK INDUK', 'LOLAK TOMBOLANGO', 'MONGKOINIT', 'MONGKOINIT BARAT', 'MOTABANG', 'PADANG LALOW', 'PINDOL', 'PINDOLILI', 'PINOGALUMAN', 'PINOGALUM TIMUR', 'SAUK', 'SOLOG', 'TANDU', 'TOTABUAN', 'TUYAT'], },
      { subDistrict: 'LOLAYAN', wardsVillages: ['ABAK', 'BAKAN', 'BOMBANON', 'KOPANDAKAN II', 'LOLAYAN', 'MATALI BARU', 'MENGKANG', 'MOPAIT', 'MOPUSI', 'TANOYAN SELATAN', 'TANOYAN UTARA', 'TAPA AOG', 'TUNGOI I', 'TUNGOI II'], },
      { subDistrict: 'PASSI BARAT', wardsVillages: ['BINTAU', 'BULUD', 'INUAI', 'LOBONG', 'MUNTOI INDUK', 'MUNTOI TIMUR', 'OTAM', 'OTAM BARAT', 'PASSI 1', 'PASSI 2', 'POYUYANAN', 'WANGGA', 'WANGGA SATU'], },
      { subDistrict: 'PASSI TIMUR', wardsVillages: ['INSIL', 'INSIL BARU', 'MANEMBO', 'MOBUYA', 'PANGIAN', 'PANGIAN BARAT', 'PANGIAN TENGAH', 'POOPO', 'POOPO BARAT', 'POOPO SELATAN', 'SINSINGON', 'SINSINGON BARAT', 'SINSINGON TIMUR'], },
      { subDistrict: 'POIGAR', wardsVillages: ['GOGALUMAN', 'MARIRI BARU', 'MARIRI I', 'MARIRI II', 'MARIRI LAMA', 'MONDATONG', 'MONDATONG BARU', 'NANASI', 'NANASI TIMUR', 'NONAPAN', 'NONAPAN BARU', 'NONAPAN I', 'NONAPAN II', 'POIGAR', 'POIGAR II', 'POIGAR III', 'POMOMAN', 'TANJUNG MARIRI', 'TIBERIAS', 'WINERU'], },
      { subDistrict: 'SANGTOMBOLANG', wardsVillages: ['AYONG', 'BABO', 'BATUMERA', 'BOLANGAT', 'BOLANGAT TIMUR', 'CEMPAKA', 'DOMISIL MOONOW', 'LOLANAN', 'MAELANG', 'PANGI', 'PANGI TIMUR', 'PASIR PUTIH'], },
    ]},
    { districtCity: 'BOLAANG MONGONDOW SELATAN', subDistricts: [
      { subDistrict: 'BOLAANG UKI', wardsVillages: ['DUDEPO', 'DUDEPO BARAT', 'MOLIBAGU', 'PINOLANTUNGAN', 'PINTADIA', 'POPODU', 'SALONGO', 'SALONGO BARAT', 'SALONGO TIMUR', 'SOGUO', 'SONDANA', 'TABILAA', 'TANGAGAH', 'TOLONDADU', 'TOLONDADU I', 'TOLONDADU II', 'TOLUAYA'], },
      { subDistrict: 'PINOLOSIAN', wardsVillages: ['ILOMATA', 'KOMBOT', 'KOMBOT TIMUR', 'LINAWAN', 'LINAWAN I', 'LUNGKAP', 'NUNUK', 'PINOLOSIAN', 'PINOLOSIAN SELATAN', 'TOLOTOYON'], },
      { subDistrict: 'PINOLOSIAN TENGAH', wardsVillages: ['ADOW', 'ADOW SELATAN', 'DEAGA', 'MATAINDO', 'MATAINDO UTARA', 'TOBAYAGAN', 'TOBAYAGAN SELATAN', 'TOROSIK'], },
      { subDistrict: 'PINOLOSIAN TIMUR', wardsVillages: ['DAYOW', 'DUMAGIN A', 'DUMAGIN B', 'ILIGON', 'MATANDOI', 'MATANDOI SELATAN', 'MODISI', 'ONGGUNOI', 'ONGGUNOI SELATAN', 'PERJUANGAN', 'PIDUNG', 'POSILAGON'], },
      { subDistrict: 'POSIGADAN', wardsVillages: ['BATULIODU', 'INOSOTA', 'LION', 'LUWOO', 'MANGGADAA', 'MEYAMBANGA', 'MILANGODAA', 'MILANGODAA BARAT', 'MOMALIA I', 'MOMALIA II', 'PILOLAHUNGA', 'SAIBUAH', 'SAKTI', 'SINOMBAYUGA', 'TOLUTU', 'TONALA'], },
      { subDistrict: 'HELUMO', wardsVillages: ['BAKIDA', 'BINIHA', 'BINIHA SELATAN', 'BINIHA TIMUR', 'DUMINANGA', 'HALABOLU', 'MOTOLOHU', 'PANGIA', 'SINANDAKA', 'SOPUTA', 'TRANS PATOA'], },
      { subDistrict: 'TOMINI', wardsVillages: ['BOTULIODU', 'MILANGODAA', 'MILANGODAA BARAT', 'MILANGODAA UTARA', 'NUNUKA RAYA', 'PAKUKU JAYA', 'TOLUTU'], },
    ]},
    { districtCity: 'BOLAANG MONGONDOW TIMUR', subDistricts: [
      { subDistrict: 'KOTABUNAN', wardsVillages: ['BUKAKA', 'BULAWAN', 'BULAWAN DUA', 'BULAWAN SATU', 'BUYAT', 'BUYAT I', 'BUYAT II', 'BUYAT BARAT', 'BUYAT SELATAN', 'BUYAT TENGAH', 'KOTABUNAN', 'KOTABUNAN BARAT', 'KOTABUNAN SELATAN', 'PARET', 'PARET TIMUR'], },
      { subDistrict: 'MODAYAG', wardsVillages: ['BADARO', 'BUYANDI', 'CANDI REJO', 'LANUT', 'LIBERIA', 'LIBERIA TIMUR', 'MODAYAG', 'MODAYAG II', 'MODAYAG III', 'PURWOREJO', 'PURWOREJO TIMUR', 'SUMBER REJO', 'TOBONGON'], },
      { subDistrict: 'MODAYAG BARAT', wardsVillages: ['BANGUNAN WUWUK', 'BANGUNAN WUWUK TIMUR', 'BONGKUDAI', 'BONGKUDAI BARAT', 'MOYONGKOTA', 'MOYONGKOTA BARU', 'MOONOW', 'INATON', 'PINONOBATUAN', 'TANGATON'], },
      { subDistrict: 'MOOAT', wardsVillages: ['BONGKUDAI BARU', 'BONGKUDAI SELATAN', 'BONGKUDAI TIMUR', 'BONGKUDAI UTARA', 'GUAAN', 'KOKAPOI', 'KOKAPOI TIMUR', 'MOKITOMPIA', 'MOOAT', 'MOTOTOMPIAN'], },
      { subDistrict: 'MOTONGKAD', wardsVillages: ['ATOGA', 'ATOGA TIMUR', 'JIKO', 'JIKO UTARA', 'MOLOBOG', 'MOLOBOG BARAT', 'MOLOBOG TIMUR', 'MOTONGKAD', 'MOTONGKAD SELATAN', 'MOTONGKAD TENGAH', 'MOTONGKAD UTARA'], },
      { subDistrict: 'NUANGAN', wardsVillages: ['BAI', 'IDUMUN', 'IYOK', 'JIKO BELANGA', 'LOYOW', 'MATABULU', 'MATABULU TIMUR', 'NUANGAN', 'NUANGAN I', 'NUANGAN BARAT', 'NUANGAN SELATAN'], },
      { subDistrict: 'TUTUYAN', wardsVillages: ['DODAP', 'DODOP PANTAI', 'DODOP MIKASA', 'KAYUMOYONDI', 'TOGID', 'TOMBOLIKAT', 'TOMBOLIKAT TIMUR', 'TUTUYAN', 'TUTUYAN II', 'TUTUYAN III'], },
    ]},
    { districtCity: 'BOLAANG MONGONDOW UTARA', subDistricts: [
      { subDistrict: 'BINTAUNA', wardsVillages: ['BATULINTIK', 'BINTAUNA PANTAI', 'BUNIA', 'BUNONG', 'HUNTUUK', 'KOPI', 'KUHANGA', 'MINANGA', 'MOME', 'PADANG', 'PADANG BARAT', 'PIMPI', 'TALAGA VOA A', 'VAHUTA', 'BINTAUNA'], },
      { subDistrict: 'BOLANGITANG BARAT', wardsVillages: ['BOLANGITANG', 'BOLANGITANG I', 'BOLANGITANG II', 'JAMBUSARANG', 'TALAGA TOMOAGU', 'IYOK', 'KEIMANGA', 'LANGI', 'OLLOT', 'OLLOT I', 'OLLOT II', 'PAKU', 'PAKU SELATAN', 'SONUO', 'TALAGA', 'TANJUNG BUAYA', 'TOTE', 'WAKAT'], },
      { subDistrict: 'BOLANGITANG TIMUR', wardsVillages: ['BINJEITA', 'BINJEITA I', 'BINJEITA II', 'BINUANGA', 'BINUNI', 'BIONTONG', 'BIONTONG I', 'BIONTONG II', 'BOHABAK I', 'BOHABAK II', 'BOHABAK III', 'BOHABAK IV', 'LIPU BOGU', 'MOKODITEK', 'MOKODITEK I', 'NAGARA', 'NUNUKA', 'SALEO', 'SALEO SATU', 'TANJUNG LABOU'], },
      { subDistrict: 'KAIDIPANG', wardsVillages: ['BIGO', 'BIGO SELATAN', 'BOROKO', 'BOROKO TIMUR', 'BOROKO UTARA', 'GIHANG', 'INOMUNGA', 'UNOMUNGA UTARA', 'KOMUS II', 'KOMUS DUA TIMUR', 'KUALAH', 'KUALA UTARA', 'PONTAK', 'SOLIGIR', 'SOLO'], },
      { subDistrict: 'PINOGALUMAN', wardsVillages: ['BATU BATAYO', 'BATUTAJAM', 'BUKO', 'BUKO SELATAN', 'BUKO UTARA', 'BUSATO', 'DALAPULI', 'DALAPULI BARAT', 'DALAPULI TIMUR', 'DENGI', 'DUINI', 'KAYUOGU', 'KOMUS SSATU', 'PADANGO', 'TANJUNG SIDUPA', 'TAMBULANG PANTAI', 'TAMBULANG TIMUR', 'TOMBULANG', 'TONTULOW', 'TUNTUNG', 'TUNTUNG TIMUR', 'TUNTULOW UTARA'], },
      { subDistrict: 'SANGKUB', wardsVillages: ['AMPENG SEMBEKA', 'BUSISINGO', 'BUSISINGO UTARA', 'MOKUSATO', 'MONOMPIA', 'PANGKUSA', 'SAMPIRO', 'SANGKUB I', 'SANGKUB II', 'SANGKUB III', 'SANGKUB IV', 'SANGKUB TIMUR', 'SANGTOMBOLANG', 'SIDODADI', 'SUKA MAKMUR', 'TOMBOLANGO'], },
    ]},
    { districtCity: 'KEPULAUAN SANGIHE', subDistricts: [
      { subDistrict: 'KENDAHE', wardsVillages: ['KAWALUSO', 'KENDAHE DUA', 'KENDAHE SATU', 'LIPANG', 'MOHONGSAWANG', 'PEMPALARAENG', 'TALAWID', 'TARIANGLAMA'], },
      { subDistrict: 'KEPULAUAN MARORE', wardsVillages: ['KAWIO', 'MARORE', 'MATUTUANG'], },
      { subDistrict: 'MANGANITU', wardsVillages: ['BAKALAENG', 'BARANGKA', 'BARANGKALANG', 'BELENGANG', 'BENGKA', 'HIUNG', 'KARATUNG I', 'KARAUNT GII', 'KAUHIS', 'LEBO', 'MALA', 'MANUMPITAENG', 'NAHEPESE', 'PINEBENTENGAN', 'SESIWUNG', 'TALOARANE', 'TALOARANE I', 'TAWOALI'], },
      { subDistrict: 'MANGANITU SELATAN', wardsVillages: ['BATUNDERANG', 'BEBALANG', 'KALUWATU', 'LAINE', 'LAPANGO', 'LAPANGO I', 'LAPEPAHE', 'LEHIMI TARIANG', 'MAWIRA', 'NGALIPAENG I', 'NGALIPAENG II', 'PINDANG', 'SOWAENG'], },
      { subDistrict: 'NUSA TABUKAN', wardsVillages: ['BUKIDE', 'BUKDIE TIMUR', 'NANEDAKELE', 'NANUSA', 'NUSA'], },
      { subDistrict: 'TABUKAN SELATAN TENGAH', wardsVillages: ['AHA PATUNG', 'BEENG', 'BEENG LAUT', 'BOWONE', 'HANGKE', 'LEHUPU', 'SALURANG', 'TAMBUNG', 'TENDA'], },
      { subDistrict: 'TABUKAN SELATAN TENGGARA', wardsVillages: ['BASAUH', 'DALOKAWENG', 'MALISADE', 'PINTARENG', 'SAMPAKANG', 'TUMALEDE'], },
      { subDistrict: 'TABUKAN SELATAN', wardsVillages: ['BATUWINGKUNG', 'BENTUNG', 'BINEBAS', 'BIRAHI', 'BUKIDE', 'BULO', 'KALAGHENG', 'LAOTONGAN', 'LESABE', 'LESABE I', 'MALAMENGGU', 'MANDOI', 'PALARENG', 'SIMUENG'], },
      { subDistrict: 'TABUKAN TENGAH', wardsVillages: ['BIRA', 'BIRU', 'BOWONGKALI', 'BUNGALAWANG', 'GUNUNG', 'KULUR I', 'KULUR II', 'KUMA', 'KUMA I', 'MALUEN', 'MIULU', 'PALAHANAENG', 'PELELANGEN', 'RENDINGAN', 'SENSONG', 'TALENGEN', 'TARIANGBARU', 'TIMBELANG'], },
      { subDistrict: 'TABUKAN UTARA', wardsVillages: ['BAHU', 'BEHA', 'BENGKETANG', 'BOWONGKULU', 'BOWONGKULU I', 'KALASUGE', 'KALEKUBE', 'KALEKUBE I', 'KALLURAE', 'LENGANENG', 'LIKUANG', 'MALA', 'MOADE', 'NAHASAHABE', 'NAHA I', 'PETTA', 'PETTA BARAT', 'PETTA SELATAN', 'PETTA TIMUR', 'PUSUNGE', 'RAKU', 'TAROLANG', 'TOLA', 'UTAURANO'], },
      { subDistrict: 'TAHUNA', wardsVillages: ['APENG SEMBEKA', 'BUNGALAWANG', 'MAHENA', 'MANENTE', 'SANTIAGO', 'SAWANG BENDAR', 'SOATALOARA I', 'SOATALOARA II'], },
      { subDistrict: 'TAHUNA BARAT', wardsVillages: ['AKEMBAWI', 'ANGGES', 'KOLONGAN BEHA', 'KOLONGAN BEHA BARU', 'KOLONGAN MITUNG', 'PANANEKENG'], },
      { subDistrict: 'TAHUNA TIMUR', wardsVillages: ['BATULEWEHE', 'DUMUHUNG', 'ENENGPAHEMBANG', 'LESA', 'TAPUANG', 'TIDORE', 'TONA I', 'TONA II'], },
      { subDistrict: 'TAMAKO', wardsVillages: ['BALANE', 'BEBU', 'BINALA', 'DAGHO', 'HESANG', 'KALAMA DARAT', 'KALIDNA', 'KALINDA I', 'LELIPANG', 'MAHUMU', 'MAHUMU I', 'MAHHUMU II', 'MAKALAKUHE', 'MENGGAWA', 'MENGGAWA II', 'NAGHA I', 'NAGHA II', 'PANANARU', 'POKOL', 'ULUNGPELIANG'], },
      { subDistrict: 'TATOARENG', wardsVillages: ['DALAKO BEMBANAHE', 'KAHAKITANG', 'KALAMA', 'MAHENGGETANG', 'PARA', 'PARA I', 'TALEKO BATUSAIKI'], },
    ]},
    { districtCity: 'KEPULAUAN SIAU TAGULANDANG BIARO', subDistricts: [
      { subDistrict: 'BIARO', wardsVillages: ['BUANG', 'DALINSAHENG', 'KARUNGO', 'LAMANGGO', 'TOPE'], },
      { subDistrict: 'SIAU BARAT', wardsVillages: ['BUMBIHA', 'KANAWONG', 'LEHI', 'MAKALEHI', 'MAKALEHI TIMUR', 'MAKALEHI UTARA', 'PEHE', 'PELING', 'PELINGSAWANG', 'ONDONG', 'PANIKI', 'PASENG'], },
      { subDistrict: 'SIAU BARAT SELATAN', wardsVillages: ['BATUSENGGO', 'KAPETA', 'LAGHAENG', 'MAHUNENI', 'MAKOA', 'TALAWID', 'TANAKI'], },
      { subDistrict: 'SIAU BARAT UTARA', wardsVillages: ['BATUBULAN', 'HIUNG', 'KAWAHANG', 'IAWANG', 'KINALI', 'MINI', 'NAMENG', 'WINANGUN'], },
      { subDistrict: 'SIAU TENGAH', wardsVillages: ['BEONG', 'DOMPASE', 'LAI', 'SALILI'], },
      { subDistrict: 'SIAU TIMUR', wardsVillages: ['APELAWO', 'BUISE', 'BUKIDE', 'DAME', 'DAME I', 'DEAHE', 'KANANG', 'KARALUNG', 'KARALUNG SATU', 'LIA', 'LIA SATU', 'AKESIMBEKA', 'BAHU', 'BEBALI', 'TARORANE', 'TATAHADENG'], },
      { subDistrict: 'SIAU TIMUR SELATAN', wardsVillages: ['BALIRANGEN', 'BANDIL', 'BIAU', 'BIAU SEHA', 'BINALU', 'BUHIAS', 'KALIHIANG', 'LAHOPANG', 'MALA', 'MATOLE', 'PAHEPA', 'PANGIROLONG', 'SAWANG', 'TAPILE'], },
      { subDistrict: 'TAGULANDANG', wardsVillages: ['APENGSALA', 'BARANGKA PEHE', 'BOTO', 'HAASI', 'LAINGPATEHI', 'LESAH', 'LESAH RENDE', 'MAHANGIANG', 'MOHONSAWANG', 'MULENGN', 'PAHIAMA', 'PUMPENTE', 'TULUSANG', 'BAHOI', 'BALEHUMARA'], },
      { subDistrict: 'TAGULANDANG SELATAN', wardsVillages: ['BATUMAWIRA', 'BIRA KIMIA', 'BIRARIKEI', 'BUHA', 'HUMBIA', 'KISIHANG'], },
      { subDistrict: 'TAGULANDANG UTARA', wardsVillages: ['BAWO', 'BAWOLEU', 'BULANGAN', 'LUMBO', 'MINANGA', 'WO'], },
    ]},
    { districtCity: 'KEPULAUAN TALAUD', subDistricts: [
      { subDistrict: 'BEO', wardsVillages: ['BANTIK LAMA', 'BENGEL', 'BANTIK', 'BEO', 'BEO BARAT', 'BEO TIMUR'], },
      { subDistrict: 'BEO SELATAN', wardsVillages: ['MATAHIT', 'NIAMPAK', 'NIAMPAK UTARA', 'PAMPALU', 'RUSOH', 'TAROHAN', 'TAROHAN SELATAN'], },
      { subDistrict: 'BEO UTARA', wardsVillages: ['AWIT', 'AWIT SELATAN', 'LOBBO', 'LOBBO I', 'RAE', 'RAE SELATAN', 'MAKATARA', 'MAKATARA TIMUR'], },
      { subDistrict: 'DAMAU', wardsVillages: ['AKAS', 'AKAS BALANE', 'BIRANG', 'DAMAU', 'DAMAU BOWONE', 'IGHIK', 'PERET', 'TADUWALE'], },
      { subDistrict: 'GEMEH', wardsVillages: ['APAN', 'ARANGKAA', 'BAMBUNG', 'BAMBUNG TIMUR', 'BANNADA', 'GEMEH', 'GEMEH RAAMATA', 'GEMEH WANTANE', 'LAHU', 'MALAT', 'MALAT UTARA', 'MAMAHAN', 'MAMAHAN BARAT', 'TARUAN', 'TATURAN'], },
      { subDistrict: 'ESSANG', wardsVillages: ['BULUDE', 'BULUDE SELATAN', 'ESSANG', 'ESSANG SELATAN', 'LALUE', 'LALUE TENGAH', 'LALUE UARA', 'MARIRIK'], },
      { subDistrict: 'ESSANG SELATAN', wardsVillages: ['AMBIA', 'AMBIA UTARA', 'BATUMBALANGO', 'ENSEM', 'ENSEM TIMUR', 'KUMA', 'KUMA SELATAN', 'SAMBUARA', 'SAMBUARA SATU'], },
      { subDistrict: 'KABARUAN', wardsVillages: ['BULUDE', 'BULUDE SELATAN', 'KABARUAN', 'KABARUAN TIMUR', 'KORDAKEL', 'MANGARAN', 'PANGERAN', 'PANNULAN', 'PANTUGE', 'PANTUGE TIMUR', 'RARANGE TADUNA'], },
      { subDistrict: 'KALONGAN', wardsVillages: ['ALUDE', 'KALONGAN', 'KALONGANS ELATAN', 'KALONGAN UTARA', 'MUSI I'], },
      { subDistrict: 'LIRUNG', wardsVillages: ['MUSI', 'SEREH', 'SEREH I', 'TALOLANG', 'LIRUNG', 'LIRUNG I', 'LIRUNG MATANE'], },
      { subDistrict: 'MELONGUANE', wardsVillages: ['AMBELA', 'KIAMA', 'KIAMA BARAT', 'KIAMA MAREDAREN', 'MALA', 'MALA TIMUR', 'MAREDAREN UTARA', 'SAWANG', 'SAWANG UTARA', 'TARUN', 'TARUN SELATAN'], },
      { subDistrict: 'MELONGUANE TIMUR', wardsVillages: ['BOWOMBARU', 'BOWOMBARU TENGAH', 'BOWOMBARU UTARA', 'TULE', 'TUEL TENGAH', 'TULE UTARA'], },
      { subDistrict: 'MIANGAS', wardsVillages: ['MIANGAS'], },
      { subDistrict: 'MORONGE', wardsVillages: ['MORONGE', 'MORONGE I', 'MORONGE II', 'MORONGE SELATAN', 'MORONGE SELATAN I', 'MORONGE SELATAN II'], },
      { subDistrict: 'NANUSA', wardsVillages: ['DAMPULIS', 'DAMPULIS SELATAN', 'KAKOROTAN', 'KARATUNG', 'KARATUNG SELATAN', 'KARATUNG TENGAH', 'LALUHE', 'MARAMPIT', 'MARAMPIT TIMUR'], },
      { subDistrict: 'PULUTAN', wardsVillages: ['DARAN', 'DARAN UTARA', 'PULUTAN', 'PULUTAN SELATAN', 'PULUTAN UTARA'], },
      { subDistrict: 'RAINIS', wardsVillages: ['ALO', 'ALO UTARA', 'BANTANE', 'BANTANE UTARA', 'NUNU', 'NUNU UTARA', 'PARANGEN', 'RAINIS', 'RAINIS BARU PENGA', 'TABANG', 'TABANG BARAT'], },
      { subDistrict: 'SALIBABU', wardsVillages: ['BALANG', 'BITUNURIS', 'BITUNURIS SELATAN', 'DALUM', 'SALIBABU', 'SALIBABU UTARA'], },
      { subDistrict: 'TAMPAN AMMA', wardsVillages: ['AMMAT', 'AMMAT SELATAN', 'BINALANG', 'BINALANG TIMUR', 'DAPALAN', 'DAPIHE', 'GANALO', 'RIUNG', 'RIUNG UTARA', 'TUABATU', 'TUABATU BARAT'], },
    ]},
    { districtCity: 'MINAHASA', subDistricts: [
      { subDistrict: 'ERIS', wardsVillages: ['ERIS', 'MAUMBI', 'RANOMERUT', 'TANDENGAN', 'TANDENGAN SATU', 'TELAP', 'TOLIANG OKI', 'WATUMEA'], },
      { subDistrict: 'KAKAS', wardsVillages: ['KAWNG', 'KAYUWATEU', 'MAHEMBANG', 'MAKALELON', 'PAHALETEN', 'PASLATEN', 'RINONDOR', 'SENDANGAN', 'TALIKURAN', 'TOULIMEMBET', 'TOUNELET', 'TUMPAAN', 'WINERU'], },
      { subDistrict: 'KAKAS BARAT', wardsVillages: ['BUKITTINGGI', 'KALAWIRAN', 'PANASEN', 'PASSO', 'SIMBEL', 'TOTOLAN', 'TOULIANG', 'TOUNTIMOMOR', 'WAILANG', 'WASIAN'], },
      { subDistrict: 'KAWANGKOAN', wardsVillages: ['KANONANG TIGA', 'TONDEGESAN', 'TONDEGESAN SATU', 'TONDEGESAN DUA', 'KINALI', 'KINALI SATU', 'SENDANGAN', 'SENDANGAN SELATAN', 'SENDANGAN UTARA', 'UNDER SATU'], },
      { subDistrict: 'KAWANGKOAN BARAT', wardsVillages: ['KANONANG SATU', 'KANONANG DUA', 'KANONANG EMPAT', 'KANONANG LIMA', 'KAYUUWI', 'KAYUUWI SATU', 'RANOLAMBOT', 'TOMBASIAN ATAS', 'TOMBASIAN ATAS SATU', 'TOMBASIAN BAWAH'], },
      { subDistrict: 'KAWANGKOAN UTARA', wardsVillages: ['KIAWA DUA', 'KIAWA DUA BARAT', 'KIAWA DUA TIMUR', 'KIAWA SATU', 'KIAWA SATU BARAT', 'KIAWA SATU UTARA'], },
      { subDistrict: 'KOMBI', wardsVillages: ['KALAWIRAN', 'KAYU BESI', 'KINALEOSAN', 'KOLONGAN', 'KOLONGAN SATU', 'KOMBI', 'LALUMPE', 'MAKALISUNG', 'RANOWANGKO DUA', 'RERER', 'RERER SATU', 'SAWANGAN TULAP'], },
      { subDistrict: 'LANGOWAN BARAT', wardsVillages: ['AMPRENG', 'KOPIWANGKER', 'KOYAWAS', 'LOWIAN', 'NOONGAN', 'NOONGAN DUAVNOONGAN TIGA', 'PASLATEN', 'RARINGIS', 'RARANON', 'RARANON SELATAN', 'RARNON UTARA', 'TOUNELET', 'TUMARATAS', 'TUMARATAS DUA', 'WALEWANGKO'], },
      { subDistrict: 'LANGOWAN SELATAN', wardsVillages: ['ATEP', 'ATEP SATU', 'KAAYURAN ATAS', 'KAAYURAN BAWAH', 'KAWATAK', 'MANEMBO', 'PALAMBA', 'RUMBIA', 'TEMBOAN', 'WINEBETAN'], },
      { subDistrict: 'LANGOWAN TIMUR', wardsVillages: ['AMONGENA I', 'AMONGENA II', 'AMONGENA III', 'KARONDORAN', 'SUMARAYAR', 'TEEP', 'WALEURE', 'WOLAANG'], },
      { subDistrict: 'LANGOWAN UTARA', wardsVillages: ['KARUMENGA', 'TARITAK', 'TARAITAK SATU', 'TEMPANG I', 'TEMPANG II', 'TEMPANG III', 'TORAGET', 'WALANTAKAN'], },
      { subDistrict: 'LEMBEAN TIMUR', wardsVillages: ['ATEP OKI', 'KALEOSAN', 'KAPATARAN', 'KAPATARAN I', 'KAROR', 'KAYUROYA', 'PARENTEK', 'SERETAN', 'SERETAN TIMU', 'WATULANEY', 'WATULANEY AMIAN'], },
      { subDistrict: 'MANDOLANG', wardsVillages: ['AGOTEY', 'KALASEY DUA', 'KALASEY SATU', 'KOHA', 'KOHA BARAT', 'KOHA SELATAN', 'KOHA TIMUR', 'TATELI', 'TATELI I', 'TATELI II', 'TATELI III', 'TATELI WERU'], },
      { subDistrict: 'PINELENG', wardsVillages: ['KALI', 'KALI SELATAN', 'LOTTA', 'PINELENG DUA', 'PINELENG DUA INDAH', 'PINELENG SATU', 'PINELENG SATU TIMUR', 'SEA', 'SEA I', 'SEA II', 'SEA MITRA', 'SEA TUMPENGAN', 'WAREMBUNGAN', 'WINANGUN ATAS'], },
      { subDistrict: 'REMBOKEN', wardsVillages: ['KAIMA', 'KASURATAN', 'LELEKO', 'PAREPEI', 'PASLATEN', 'PULUTAN', 'SENDANGAN', 'SINUIAN', 'TALIKURAN', 'TAMPUSU', 'TIMU'], },
      { subDistrict: 'SONDER', wardsVillages: ['KAUNERAN', 'KAUNERAN I', 'KOLONGAN ATAS', 'KOLONGAN ATAS I', 'KOLONGAN ATAS II', 'LEILEM', 'LEILEM I', 'LEILEM II', 'RAMBUNAN', 'RAMBUNAN AMIAN', 'SAWANGAN', 'SENDANGAN', 'SENDANGAN I', 'TALIKURAN', 'TALIKURAN I', 'TIMBUKAR', 'TINCEP', 'TOUNELET', 'TOUNELET I'], },
      { subDistrict: 'TOMBARIRI', wardsVillages: ['BORGO', 'KUMU', 'MOKUPA', 'PINASUNGKULAN', 'POOPOH', 'RANOWANGKO', 'SARANI MATANI', 'SENDUK', 'TAMBALA', 'TELING'], },
      { subDistrict: 'TOMBARIRI TIMUR', wardsVillages: ['LEMOH', 'LEMOH BARAT', 'LEMOH TIMUR', 'LEMOH UNER', 'LOLAH', 'LOLAH DUA', 'LOLAH SATU', 'LOLAH TIGA', 'RANOTONGKOR', 'RANOTONGKOR TIMUR'], },
      { subDistrict: 'TOMBULU', wardsVillages: ['KAMANGTA', 'KEMBES DUA', 'KEMBES SATU', 'KOKA', 'RUMENGKOR', 'RUMENGKOR I', 'RUMENGKOR II', 'SAWANGAN', 'SULUAN', 'TIKELA', 'TOMBULUAN'], },
      { subDistrict: 'TOMPASO', wardsVillages: ['KAMANGA', 'KAMANGA SATU', 'LIBA', 'SENDANGAN II', 'TALIKURAN', 'TEMBER', 'TEMPOK', 'TEMPOK SELATAN', 'TOLOK', 'TOLOK SATU'], },
      { subDistrict: 'TOMPASO BARAT', wardsVillages: ['PINABETENGAN', 'PINABETENGAN SELATAN', 'PINABETENGAN UTARA', 'PINAESAAN', 'TOMPASO DUA', 'TOMPASO DUA UTARA', 'TONSEWER', 'TONSEWER SELATAN', 'TOUURE', 'TOUURE DUA'], },
      { subDistrict: 'TONDANO BARAT', wardsVillages: ['MASARANG', 'REREWOKAN', 'RINEGETAN', 'ROONG', 'TOUNKURAMBER', 'TUUTU', 'WATULAMBOT', 'WAWALINTOUAN', 'WEWELEN'], },
      { subDistrict: 'TONDANO SELATAN', wardsVillages: ['KOYA', 'MAESA UNIMA', 'PELELOAN', 'TATAARAN I', 'TATAARAN II', 'TATAARAN PATAR', 'TOUNSARU', 'URONGO'], },
      { subDistrict: 'TONDANO TIMUR', wardsVillages: ['KATINGGOLAN', 'KENDIS', 'KINIAR', 'LININGAAN', 'LUAAN', 'MAKALANSOUW', 'PAPAKELAN', 'RANOWANGKO', 'TALER', 'TOULOUR', 'WENGKOL'], },
      { subDistrict: 'TONDANO UTARA', wardsVillages: ['KEMBUAN', 'KEMBUAN SATU', 'TONSEA LAMA', 'KAMPUNG JAWA', 'MARAWAAS', 'SASARAN', 'SUMALANGKA', 'WULAUAN'], },
    ]},
    { districtCity: 'MINAHASA SELATAN', subDistricts: [
      { subDistrict: 'AMURANG', wardsVillages: ['RANOKETANG TUA', 'KILOMETER 3', 'BITUNG', 'BUYUNGON', 'LEWET', 'RANOYAPO', 'UWURAN I', 'UWURAN II'], },
      { subDistrict: 'AMURANG BARAT', wardsVillages: ['ELUSAN', 'KAPITU', 'PONDOS', 'RUMONG BARAT', 'TEEP', 'TEEP TRANS', 'TEWASEN', 'WAKAN', 'KAWANGKOAN BAWAH', 'RUMOONG BAWAH'], },
      { subDistrict: 'AMURANG TIMUR', wardsVillages: ['KOTA MENARA', 'LOPANA', 'LOPANA I', 'MALENOS BARU', 'MALIKU', 'MALIKU I', 'PINALING', 'RITEY', 'PONDANG', 'RANOMEA'], },
      { subDistrict: 'KUMELEMBUAI', wardsVillages: ['KUMELEMBUAI', 'KUMELEMBUAI ATAS', 'KUMELEMBUAI DUA', 'KUMELEMBUAI SATU', 'LOLOMBULAN MAKASILI', 'MAKASILI', 'MALOLA', 'MALOLA SATU'], },
      { subDistrict: 'MAESAAN', wardsVillages: ['BOJONEGORO', 'KINAMANG', 'KINAMANG I', 'KINAWERUAN', 'LININGAAN', 'LOWIAN', 'LOWIAN I', 'TAMBELANG', 'TEMBOAN', 'TUMANI', 'TUMANI SELATAN', 'TUMANI UTARA'], },
      { subDistrict: 'MODOINDING', wardsVillages: ['KAKENTURAN', 'KAKENTURAN BARAT', 'LINELEAN', 'MAKAARUYEN', 'MOKOBANG', 'PALELON', 'PINASUNGKULAN', 'PINASUNGKULAN UTARA', 'SINISIR', 'WULURMAATUS'], },
      { subDistrict: 'MOTOLING', wardsVillages: ['LALUMPE', 'PICUAN BARU', 'RANAAN LAMA', 'MOTOLING', 'MOTOLING DUA', 'MOTOLING MAWALE', 'MOTOLING SATU'], },
      { subDistrict: 'MOTOLING BARAT', wardsVillages: ['KEROIT', 'RAANAN BARU', 'RAANAN BARU DUA', 'RAANAN BARU SATU', 'TONDEY', 'TONDEY DUA', 'TONDEY SATU', 'TOYOPON'], },
      { subDistrict: 'MOTOLING TIMUR', wardsVillages: ['KARIMBOW', 'KARIMBOW TALIKURAN', 'PICUAN', 'PICUAN SATU', 'TOKIN', 'TOKIN BARU', 'WANGAN', 'WANGA AMONGENA'], },
      { subDistrict: 'RANOYAPO', wardsVillages: ['BERINGIN', 'LOMPAD', 'LOMPAD BARU', 'MOPOLO', 'MOPOLO ESA', 'PONTAK', 'PONTAK SATU', 'POOPO', 'POOPO BARAT', 'POOPO UTARA', 'POWALUTAN', 'RANOYAPO'], },
      { subDistrict: 'SINONSAYANG', wardsVillages: ['AERGALE', 'BLONGKO', 'BOYONG PANTE', 'BOYONG PANTE DUA', 'DURIAN', 'ONGKAW DUA', 'ONGKAW SATU', 'ONGKAW TIGA', 'POIGAR DUA', 'POIGAR SATU', 'TANAMON', 'TANAMON UTARA', 'TINIWANGKOA'], },
      { subDistrict: 'SULUUN TARERAN', wardsVillages: ['KAPOYA', 'KAPOYA I', 'PINAPALANGKOW', 'SULUUN DUA', 'SULUUN EMPAT', 'SULUUN SATU', 'SULUUN TIGA', 'TALAITAD', 'TALAITAD UTARA'], },
      { subDistrict: 'TARERAN', wardsVillages: ['KANEYAN', 'KORENG', 'LANSOT', 'LANSOT TIMUR', 'PINAMORONGAN', 'RUMOONG ATAS', 'RUMOONG ATAS DUA', 'TUMALUNTUNG', 'TUMALUNTUNG I', 'WIAU LAPI', 'WIAU LAPI BARAT', 'WUWUK', 'WUWUK BARAT'], },
      { subDistrict: 'TATAPAAN', wardsVillages: ['ARAKAN', 'BAJO', 'PASLATEN', 'PASLATEN SATU', 'POPARENG', 'PUNGKOL', 'RAP-RAP', 'SONDAKEN', 'SULU', 'WAWONA', 'WAWONTULAP'], },
      { subDistrict: 'TENGA', wardsVillages: ['BOYONG ATAS', 'MLINOW', 'PAKUURE', 'PAKUURE DUA', 'PAKUURE KINAMANG', 'PAKUURE SATU', 'PAKUURE TIGA', 'PAKUURE TINANIAN', 'PAKUWERU', 'PAKUWERU UTARA', 'RADEY', 'SAPA', 'SAPA BARAT', 'SAPA TIMUR', 'TAWAANG', 'TAWAANG BARAT', 'TAWAANG TIMUR', 'TENGA'], },
      { subDistrict: 'TOMPASO BARU', wardsVillages: ['TOMPASO BARU', 'KINALAWIRAN', 'LIANDOK', 'LINDANGAN', 'PINAESAAN', 'RARAATEAN', 'SION', 'TOMPASO BARU DUA', 'TOMPASO BARU SATU', 'TOROUT'], },
      { subDistrict: 'TUMPAAN', wardsVillages: ['LELEMA', 'MATANI', 'MATANI SATU', 'MUNTE', 'POPONTOLEN', 'TANGKUNEY', 'TUMPAAN', 'TUMPAAN BARU', 'TUMPAAN DUA', 'TUMPAAN SATU'], },
    ]},
    { districtCity: 'MINAHASA TENGGARA', subDistricts: [
      { subDistrict: 'BELANG', wardsVillages: ['BELANG', 'BERINGIN', 'BORGO', 'BORGO SATU', 'BUKU', 'BUKU TENGAH', 'BUKU TENGGARA', 'BUKU SELATAN', 'BUKU UTARA', 'PONOSAKAN BELANG', 'PONOSAKAN INDAH', 'MANGKIT', 'MOLOMPAR', 'MOLOMPAR TIMUR', 'MOLOMPAR UTARA', 'TABABO', 'TABABO SELATAN', 'WATULINEY', 'WATULINEY INDAH', 'WATULINEY TENGAH'], },
      { subDistrict: 'PASAN', wardsVillages: ['LIWUTUNG', 'LIWUTUNG DUA', 'LIWUTUNG SATU', 'MAULIT', 'PONIKI', 'TOLOMBUKAN', 'TOLOMBUKAN BARAT', 'TOLOMBUKAN SATU', 'TOWUNTU', 'TOWUNTU BARAT', 'TOWUNTU TIMUR'], },
      { subDistrict: 'PUSOMAEN', wardsVillages: ['BENTENAN', 'BENTENAN INDAH', 'BENTENAN SATU', 'MAKALU', 'MAKALU SELATAN', 'MINANGA', 'MINANGA DUA', 'MINANGA SATU', 'INANGA TIGA', 'MINANGA TIMUR', 'TATENGESAN', 'TATENGESAN SATU', 'TUMBAK', 'TUMBAK MADANI', 'WIAU'], },
      { subDistrict: 'RATAHAN', wardsVillages: ['LOWU DUA', 'LOWU SATU', 'LOWU UTARA', 'NATAAN', 'TOSURAYA', 'TOSURAYA BARAT', 'TOSURAYA SELATAN', 'WAWALI', 'WAWALI PASAN', 'RASI', 'RASI SATU'], },
      { subDistrict: 'RATAHAN TIMUR', wardsVillages: ['PANGU', 'PANGU DUA', 'PANGU SATU', 'WIOI', 'WIOI DUA', 'WIOI SATU', 'WIOI TIGA', 'WIOI TIMUR', 'WONGKAI', 'WONGKAI SATU'], },
      { subDistrict: 'RATATOTOK', wardsVillages: ['BASAAN', 'BASAAN SATU', 'BASAAN DUA', 'MOREAH', 'MOREAH SATU', 'SOYOWAN', 'RATATOTOK', 'RATATOTOK DUA', 'RATATOTOK MUARA', 'RATATOTOK SATU', 'RATATOTOK SELATAN', 'RATATOTOK TENGAH', 'RATATOTOK TENGGARA', 'RATATOTOK TIMUR', 'RATATOTOK UTARA'], },
      { subDistrict: 'SILIAN RAYA', wardsVillages: ['SILIAN', 'SILIAN BARAT', 'SILIAN DUA', 'SILIAN KOTA', 'SILIAN SATU', 'SILIAN SELATAN', 'SILIAN TENGAH', 'SILIAN TIGA', 'SILIAN TIMUR', 'SILIAN UTARA'], },
      { subDistrict: 'TOMBATU', wardsVillages: ['BETELEN', 'BETELEN SATU', 'KALI', 'KALI OKI', 'PISA', 'TOMBATU', 'TOMBATU SATU', 'TOMBATU TIGA SELATAN', 'TOMBATU TIGA TIMUR', 'TONSAWANG', 'TONSAWANG SATU'], },
      { subDistrict: 'TOMBATU TIMUR', wardsVillages: ['ESANDOM', 'ESANDOM DUA', 'ESANDOM SATU', 'MOLOMPAR', 'MOLOMPAR ATAS', 'MOLOMPAR DUA', 'MOLOMPAR DUA SELATAN', 'MOLOMPAR DUA UTARA', 'MOLOMPAR SATU', 'MUNDUNG', 'MUNDUNG SATU'], },
      { subDistrict: 'TOMBATU UTARA', wardsVillages: ['KUYANGA', 'KUYANGA SATU', 'TOMBATU DUA', 'TOMBATU DUA BARAT', 'TOMBATU DUA TENGAH', 'TOMBATU DUA UTARA', 'TOMATU TIGA', 'TOMBATU TIGA TENGAH', 'WINORANGIAN', 'WINORANGIAN ATAS'], },
      { subDistrict: 'TOULUAAN', wardsVillages: ['LOBU', 'LOBU ATAS', 'LOBU DUA', 'LOBU KOTA', 'LOBU SATU', 'RANOKETANG ATAS', 'RANOKETANG ATAS SATU', 'TOUNDANOU', 'TOUNDANOU ATAS', 'TOUNDANOU SATU'], },
      { subDistrict: 'TOULUAAN SELATAN', wardsVillages: ['BANGA', 'BUNAG', 'KALAIT', 'KALAIT DUA', 'KALAIT SATU', 'KALAIT TIGA', 'LOWANTAG', 'RANOAKO', 'SUHUYON', 'TAMBELAN'], },
    ]},
    { districtCity: 'MINAHASA UTARA', subDistricts: [
      { subDistrict: 'TALAWAAN', wardsVillages: ['KOLONGAN', 'MAPANGET', 'PANIKI ATAS', 'PANIKI BARU', 'PATOKAAN', 'TALAWAAN', 'TEEP WARISA', 'TUMBOHON', 'WARISA', 'WARISA KAMPUNG BARU', 'WINETIN', 'WUSA'], },
      { subDistrict: 'AIRMADIDI', wardsVillages: ['SAMPIRI', 'SAWANGAN', 'TANGGARI', 'AIRMADIDI ATAS', 'AIRMADIDI BAWAH', 'RAP-RAP', 'SARONGSONG SATU', 'SARONGSONG DUA', 'SUKUR'], },
      { subDistrict: 'DIMEMBE', wardsVillages: ['DIMEMBE', 'KLABAT', 'LAIKIT', 'LUMPIAS', 'MATUNGKAS', 'PINILIH', 'TATELU RONDOR', 'TATELU SATU', 'TETEY', 'WARUKAPAS', 'WASIAN'], },
      { subDistrict: 'KALAWAT', wardsVillages: ['KALAWAT', 'KALEOSAN', 'KAWANGKOAN', 'KAWANGKOAN BARU', 'KOLONGAN', 'KOLONGAN TETEMPANGAN', 'KUWIL', 'MAUMBI', 'SUWAAN', 'WATUTUMOU I', 'WATUTUMOU II', 'WATUTUMOU III'], },
      { subDistrict: 'KAUDITAN', wardsVillages: ['KAASAR', 'KAIMA', 'KAREGESAN', 'KAUDITAN DUA', 'KAUDIATAN SATU', 'KAWILEY', 'LEMBEAN', 'PASLATEN', 'TREMAN', 'TUMALUNTUNG', 'WATUDAMBO', 'WATUDAMBO DUA'], },
      { subDistrict: 'KEMA', wardsVillages: ['KEMA SATU', 'KEMA DUA', 'KEMA TIGA', 'LANSOT', 'LILANG', 'MAKALISUNG', 'TONTAALETE', 'TONTAALETE ROK-ROK', 'WALEO', 'WALEO DUA'], },
      { subDistrict: 'LIKUPANG BARAT', wardsVillages: ['AIRBANUA', 'BAHOI', 'BULUTUI', 'GANGGA SATU', 'GANGGA DUA', 'JAYAKARSA', 'KINABUHUTAN', 'MALIAMBAO', 'MUBUNE', 'MUNTE', 'PALAES', 'PAPUTUNGAN', 'SEREY', 'SONSILO', 'TALISE', 'TAMBUN', 'TANAH PUTIH', 'TARABITAN', 'TERMAAL', 'WAWUNIAN'], },
      { subDistrict: 'LIKUPANG SELATAN', wardsVillages: ['BATU', 'KAWERUAN', 'KOKOLEH SATU', 'KOKOLEH DUA', 'PASLATEN', 'WANGURER', 'WEROT'], },
      { subDistrict: 'LIKUPANG TIMUR', wardsVillages: ['EHE', 'KAHUKU', 'KALINAUN', 'KINUNANG', 'LIBAS', 'LIKUPANG', 'LIKUPANG SATU', 'LIKUPANG DUA', 'LIKUPANG KAMPUNG AMBONG', 'MAEN', 'MARINSOW', 'PINENEK', 'PULISAN', 'RESETLEMEN', 'RINONDORAN', 'SARAWET', 'WINERU', 'WINURI'], },
      { subDistrict: 'WORI', wardsVillages: ['BUDO', 'BULO', 'DARUNU', 'KIMA BAJO', 'KULU', 'LANSA', 'LANTUNG', 'MANTEHAGE BANGO', 'MANTEHAGE BUHIAS', 'MANTEHAGE TANGKAS', 'MANTEHAGE TINONGKO', 'MINAESA', 'NAIN', 'NAIN I', 'PONTO', 'TALAWAAN ATAS', 'TALAWAAN BANTIK', 'TATAMPI', 'TIWOHO', 'WORI'], },
    ]},
    { districtCity: 'BITUNG', subDistricts: [
      { subDistrict: 'AERTEMBAGA', wardsVillages: ['AERTEMBAGA I', 'AERTEMBAGA II', 'KASAWARI', 'MAKAWIDEY', 'PATETEN I', 'PATETEN II', 'PINANGUNIAN', 'TANDURUSA', 'WINENET I', 'WINENET II'], },
      { subDistrict: 'GIRIAN', wardsVillages: ['GIRIAN ATAS', 'GIRIAN BAWAH', 'GIRIAN INDAH', 'GIRIAN PERMAI', 'GIRIAN WERU I', 'GIRIAN WERU II', 'WANGURER'], },
      { subDistrict: 'LEMBEH SELATAN', wardsVillages: ['BATULUBANG', 'DORBOLAANG', 'KELAPA DUA', 'PANCURAN', 'PAPUSUNGAN', 'PASIR PANJANG', 'PAUDEAN'], },
      { subDistrict: 'LEMBEH UTARA', wardsVillages: ['BATUKOTA', 'BINUANG', 'GUNUNG WOKA', 'KAREKO', 'LIRANG', 'MAWALI', 'MOTTO', 'NUSU', 'PINTUKOTA', 'POSOKAN'], },
      { subDistrict: 'MADIDIR', wardsVillages: ['KADOODAN', 'MADIDIR UNET', 'MADIDIR URE', 'MADIDIR WERU', 'PACEDA', 'WANGURER BARAT', 'WANGURER TIMUR', 'WANGURER UTARA'], },
      { subDistrict: 'MAESA', wardsVillages: ['BITUNG BARAT I', 'BITUNG BARAT II', 'BITUNG TENGAH', 'BITUNG TIMUR', 'KAKENTURAN I', 'KAKENTURAN II', 'PAKADOODAN', 'PATETEN III'], },
      { subDistrict: 'MATUARI', wardsVillages: ['MANEMBO-NEMBO', 'MANEMBO-NEMBO ATAS', 'MANEMBO-NEMBO TENGAH', 'SAGERAT', 'SAGERAT WERU I', 'SAGERAT WERU II', 'TANJUNG MERAH', 'TENDEKI'], },
      { subDistrict: 'RANOWULU', wardsVillages: ['APELA I', 'APELA II', 'BATUPUTIH ATAS', 'BATUPUTIH BAWAH', 'DANOWUDU', 'DUASADARA', 'KARONDORAN', 'KUMERESOT', 'PINASUNGKULAN', 'PINOKALAN', 'TEWAAN'], },
    ]},
    { districtCity: 'KOTAMOBAGU', subDistricts: [
      { subDistrict: 'KOTAMOBAGU BARAT', wardsVillages: ['GOGAGOMAN', 'KOTAMOBAGU', 'MOLINOW', 'MOGOLAING', 'MONGKONAI', 'MONGKONAI BARAT'], },
      { subDistrict: 'KOTAMOBAGU SELATAN', wardsVillages: ['BUNGKO', 'KOPANDAKAN I', 'POYOWA BESAR I', 'POYOWA BESAR II', 'POYOWA KECIL', 'TABANG', 'MONGONDOW', 'MOTOBOI KECIL', 'POBUNDAYAN'], },
      { subDistrict: 'KOTAMOBAGU TIMUR', wardsVillages: ['KOBO KECIL', 'MOYANG', 'MOYAG TAMPOAN', 'MOYAG TODULAN', 'KOBO BESAR', 'KOTABANGUN', 'MATALI', 'MOTOBI BESAR', 'SININDIA', 'TUMBUI'], },
      { subDistrict: 'KOTAMOBAGU UTARA', wardsVillages: ['BILALANG I', 'BILALANG II', 'PONTODON', 'PONTODON TIMUR', 'SIA', 'BIGA', 'GENGGULANG', 'UPAI'], },
    ]},
    { districtCity: 'MANADO', subDistricts: [
      { subDistrict: 'BUNAKEN', wardsVillages: ['BAILANG', 'MERAS', 'MOLAS', 'PANDU', 'TONGKAINA'], },
      { subDistrict: 'BUNAKEN KEPULAUAN', wardsVillages: ['ALUNG BANUA', 'BUNAKEN', 'MANADO TUA I', 'MANADO TUA II'], },
      { subDistrict: 'MALALAYANG', wardsVillages: ['BAHU', 'BATU KOTA', 'KLEAK', 'MALALAYANG I', 'MALALAYANG I BARAT', 'MALALAYANG I TIMUR', 'MALALAYANG II', 'WINANGUN I', 'WINANGUNG II'], },
      { subDistrict: 'MAPANGET', wardsVillages: ['BENGKOL', 'BUHA', 'KAIRAGI I', 'KAIRAGI II', 'KIMA ATAS', 'LAPANGAN', 'MAPANGET BARAT', 'PANIKI BAWAH', 'PANIKI I', 'PANIKI II'], },
      { subDistrict: 'PAAL DUA', wardsVillages: ['DENDENGAN DALAM', 'DENDENGAN LUAR', 'KAIRAGI WERU', 'MALENDENG', 'PAAL II', 'PERKAMIL', 'RANOMUUT'], },
      { subDistrict: 'SARIO', wardsVillages: ['RANOTANA', 'SARIO', 'SARIO KOTABARU', 'SARIO TUMPAAN', 'SARIO UTARA', 'TITIWUNGAN SELATAN', 'TITIWUNGAN UTARA'], },
      { subDistrict: 'SINGKIL', wardsVillages: ['KARAME', 'KETANG BARU', 'KOMBOS BARAT', 'KOMBOS TIMUR', 'SINGKIL I', 'SINGKIL II', 'TERNATE BARU', 'TERNATU TANJUNG', 'WAWONASA'], },
      { subDistrict: 'TIKALA', wardsVillages: ['BANJER', 'PAAL IV', 'TAAS', 'TIKALA ARES', 'TIKALA BARU'], },
      { subDistrict: 'TUMINTING', wardsVillages: ['BITUNG KARANGRIA', 'ISLAM', 'MAASING', 'MAHAWU', 'SINDULANG I', 'SINDULANG II', 'SUMOMPO', 'TUMINTING', 'TUMUMPA I', 'TUMUMPA II'], },
      { subDistrict: 'WANEA', wardsVillages: ['BUMI NYIUR', 'KAROMBASAN SELATAN', 'KAROMBASAN UTARA', 'PAKOWA', 'RANOTANA WERU', 'TANJUNG BATU', 'TELING ATAS', 'TINGKULU', 'WANEA'], },
      { subDistrict: 'WENANG', wardsVillages: ['BUMI BERINGIN', 'CALACA', 'ISTIQLAL', 'KOMO LUARVLAWANGIRUNG', 'MAHAKERET BARAT', 'MAHAKERET TIMUR', 'PINAESAAN', 'TELING BAWAH', 'TIKALA KUMARAKA', 'WENANG SELATAN', 'WENANG UTARA'], },
    ]},
    { districtCity: 'TOMOHON', subDistricts: [
      { subDistrict: 'TOMOHON BARAT', wardsVillages: ['TARATARA', 'TARATARA I', 'TARATARA II', 'TARATARA III', 'WOLOAN I', 'WOLOAN I UTARA', 'WOLOAN II', 'WOLOAN III'], },
      { subDistrict: 'TOMOHON SELATAN', wardsVillages: ['KAMPUNG JAWA', 'LAHENDONG', 'LANSOT', 'PANGOLOMBIAN', 'PINARAS', 'TUMATANGTANG', 'TUMATANGTANG I', 'TONDANGOW', 'ULUINDANO', 'WALIAN', 'WALIAN I', 'WALIAN II'], },
      { subDistrict: 'TOMOHON TENGAH', wardsVillages: ['KAMASI', 'KAMASI I', 'KOLONGAN', 'KOLONGAN I', 'MATANI I', 'MATANI II', 'MATANI III', 'TALETE I', 'TALETE II'], },
      { subDistrict: 'TOMOHON TIMUR', wardsVillages: ['KUMELEMBUAY', 'PASLATEN I', 'PASLATEN II', 'RURUKAN', 'RURUKAN I'], },
      { subDistrict: 'TOMOHON UTARA', wardsVillages: ['KAKASKASEN', 'KAKASKASEN I', 'KAKASKASEN II', 'KAKASKASEN III', 'KAYAWU', 'KINILOW', 'KINILOW I', 'TINOOR I', 'TINOOR II', 'WAILAN'], },
    ]},
  ];
  const monthList = ['JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI', 'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'];
  const religionList = ['ISLAM', 'KATOLIK', 'PROTESTAN', 'BUDHA', 'HINDU', 'LAINNYA'];
  const maritalStatusList = ['KAWIN', 'TIDAK KAWIN', 'JANDA/DUDA'];
  const jobList = ['ASN', 'TNI/POLRI', 'SWASTA', 'PETANI', 'WIRASWASTA', 'PELAJAR', 'PELAJAR/MAHASISWA', 'LAINNYA'];

  // Patient's Personal Data
  const [PPD, setPPD] = useState({
    medicalRecordNumber: '',
    name: '',
    sex: '',
    address: {
      districtCity: 'MINAHASA UTARA',
      subDistrict: 'TALAWAAN',
      wardVillage: '',
    },
    phoneNumber: '',
    birthPlace: '',
    birthDate: {
      date: '',
      month: '',
      year: '',
    },
    age: '',
    familyCardName: '',
    religion: '',
    maritalStatus: '',
    job: '',
  });
  const [PPDErr, setPPDErr] = useState({
    medicalRecordNumber: null,
    name: null,
    sex: null,
    address: {
      districtCity: null,
      subDistrict: null,
      wardVillage: null,
    },
    phoneNumber: null,
    birthPlace: null,
    birthDate: {
      date: null,
      month: null,
      year: null,
    },
    familyCardName: null,
    religion: null,
    maritalStatus: null,
    job: null,
  });

  // Patient's BPJS/KIS Data
  const [PBKD, setPBKD] = useState({
    cardNumber: '',
    name: '',
    birthDate: {
      date: '',
      month: '',
      year: '',
    },
    healthFacilityLevel: '',
    nursingClass: '',
    NIK: '',
    address: '',
  });
  const [PBKDErr, setPBKDErr] = useState({
    cardNumber: false,
    name: false,
    birthDate: {
      date: false,
      month: false,
      year: false,
    },
    healthFacilityLevel: false,
    nursingClass: false,
    NIK: false,
    address: false,
  });

  // Payment Method
  const [PM, setPM] = useState({
    paymentMethod: '',
    JKN: '',
    otherInsurance: '',
    number: '',
  });
  const [PMerr, setPMerr] = useState({
    paymentMethod: false,
    JKN: false,
    otherInsurance: false,
    number: false,
  });

  const PPDmedicalRecordNumberOnChange = (val) => {
    setPPD({ ...PPD, medicalRecordNumber: val });
    setPPDErr({ ...PPDErr, medicalRecordNumber: inputCheck('number', val) });
  };
  
  const PPDnameOnChange = (val) => {
    setPPD({ ...PPD, name: val });;
    setPPDErr({ ...PPDErr, name: inputCheck('letter', val) });
  };

  const PPDsexOnClick = (val) => {
    setPPD({ ...PPD, sex: val });
    setPPDErr({ ...PPDErr, sex: null });
  };

  const PPDaddressDistrictCityOnChange = (val) => {
    setPPD({ ...PPD, address: {
      districtCity: val,
      subDistrict: '',
      wardVillage: '',
    }});
    setPPDErr({ ...PPDErr, address: {
      districtCity: null,
      subDistrict: ' tidak boleh kosong',
      wardVillage: ' tidak boleh kosong',
    }});
  };

  const PPDaddressSubDistrictOnChange = (val) => {
    setPPD({ ...PPD, address: {
      districtCity: PPD.address.districtCity,
      subDistrict: val,
      wardVillage: '',
    }});
    setPPDErr({ ...PPDErr, address: {
      districtCity: null,
      subDistrict: null,
      wardVillage: ' tidak boleh kosong',
    }});
  };

  const PPDaddressWardVillageOnChange = (val) => {
    setPPD({ ...PPD, address: {
      districtCity: PPD.address.districtCity,
      subDistrict: PPD.address.subDistrict,
      wardVillage: val,
    }});
    setPPDErr({ ...PPDErr, address: {
      districtCity: null,
      subDistrict: null,
      wardVillage: null,
    }});
  };

  const PPDphoneNumberOnChange = (val) => {
    setPPD({ ...PPD, phoneNumber: val });
    setPPDErr({ ...PPDErr, phoneNumber: inputCheck('number', val) });
  };

  const PPDbirthPlaceOnChange = (val) => {
    setPPD({ ...PPD, birthPlace: val });
    setPPDErr({ ...PPDErr, birthPlace: inputCheck('letter', val) })
  }

  const PPDbirthDateDateOnChange = (val) => {
    setPPD({ ...PPD, birthDate: {
      date: val,
      month: PPD.birthDate.month,
      year: PPD.birthDate.year,
    }});
    setPPDErr({ ...PPDErr, birthDate: {
      date: inputCheck('number', val),
      month: PPDErr.birthDate.month,
      year: PPDErr.birthDate.year,
    }});
  };

  const PPDbirthDateMonthOnChange = (val) => {
    setPPD({ ...PPD, birthDate: {
      date: PPD.birthDate.date,
      month: val,
      year: PPD.birthDate.year
    }});
    setPPDErr({ ...PPDErr, birthDate: {
      date: PPDErr.birthDate.date,
      month: inputCheck('number', val),
      year: PPDErr.birthDate.year,
    }});
  };

  const PPDbirthDateYearOnChange = (val) => {
    setPPD({ ...PPD, birthDate: {
      date: PPD.birthDate.date,
      month: PPD.birthDate.month,
      year: val,
    }});
    setPPDErr({ ...PPDErr, birthDate: {
      date: PPDErr.birthDate.date,
      month: PPDErr.birthDate.month,
      year: inputCheck('number', val),
    }});
  };

  const PPDfamilyCardNameOnChange = (val) => {
    setPPD({ ...PPD, familyCardName: val });
    setPPDErr({ ...PPDErr, familyCardName: inputCheck('letter', val) });
  };

  const PPDreligionOnChange = (val) => {
    setPPD({ ...PPD, religion: val });
    setPPDErr({ ...PPDErr, religion: false });
    // setPPDErr({ ...PPDErr, religion: inputCheck('letter', val) });
  };

  const PPDmaritalStatusOnChange = (val) => {
    setPPD({ ...PPD, maritalStatus: val });
    setPPDErr({ ...PPDErr, maritalStatus: false });
    // setPPDErr({ ...PPDErr, maritalStatus: inputCheck('letter', val) });
  };
  
  const PPDjobOnChange = (val) => {
    setPPD({ ...PPD, job: val });
    setPPDErr({ ...PPDErr, job: false });
    // setPPDErr({ ...PPDErr, job: inputCheck('letter', val) });
  };

  const clearPPDOnClick = () => {
    setPPD({
      medicalRecordNumber: '',
      name: '',
      sex: '',
      address: {
        districtCity: 'MINAHASA UTARA',
        subDistrict: 'TALAWAAN',
        wardVillage: '',
      },
      phoneNumber: '',
      birthPlace: '',
      birthDate: {
        date: '',
        month: '',
        year: '',
      },
      age: '',
      familyCardName: '',
      religion: '',
      maritalStatus: '',
      job: '',
    });
    setPPDErr({
      medicalRecordNumber: false,
      name: false,
      sex: false,
      address: {
        districtCity: false,
        subDistrict: false,
        wardVillage: false,
      },
      phoneNumber: false,
      birthPlace: false,
      birthDate: {
        date: false,
        month: false,
        year: false,
      },
      familyCardName: false,
      religion: false,
      maritalStatus: false,
      job: false,
    });
  };

  const PBKDcardNumberOnChange = (val) => {
    setPBKD({ ...PBKD, cardNumber: val });
  };

  const PBKDnameOnChange = (val) => {
    setPBKD({ ...PBKD, name: val });
  };

  const PBKDbirthDateDateOnChange = (val) => {
    setPBKD({ ...PBKD, birthDate: {
      date: val,
      month: PBKD.birthDate.month,
      year: PBKD.birthDate.year,
    }});
  };

  const PBKDbirthDateMonthOnChange = (val) => {
    setPBKD({ ...PBKD, birthDate: {
      date: PBKD.birthDate.date,
      month: val,
      year: PBKD.birthDate.year,
    }});
  };

  const PBKDbirthDateYearOnChange = (val) => {
    setPBKD({ ...PBKD, birthDate: {
      date: PBKD.birthDate.date,
      month: PBKD.birthDate.month,
      year: val,
    }});
  };

  const PBKDhealthFacilityLevelOnChange = (val) => {
    setPBKD({ ...PBKD, healthFacilityLevel: val });
  };

  const PBKDnursingClassOnChange = (val) => {
    setPBKD({ ...PBKD, nursingClass: val });
  };

  const PBKDNIKOnChange = (val) => {
    setPBKD({ ...PBKD, NIK: val });
  };

  const PBKDaddressOnChange = (val) => {
    setPBKD({ ...PBKD, address: val });
  };

  const clearPBKDOnClick = () => {
    setPBKD({
      cardNumber: '',
      name: '',
      birthDate: {
        date: '',
        month: '',
        year: '',
      },
      healthFacilityLevel: '',
      nursingClass: '',
      NIK: '',
      address: '',
    });

    setPBKDErr({
      cardNumber: false,
      name: false,
      birthDate: {
        date: false,
        month: false,
        year: false,
      },
      healthFacilityLevel: false,
      nursingClass: false,
      NIK: false,
      address: false,
    });
  };

  const PMpaymentMethodOnChange = (val) => {
    setPM({ ...PM, paymentMethod: val });
  };

  const PMJKNOnChange = (val) => {
    setPM({ ...PM, JKN: val });
  };

  const PMotherInsuranceOnChange = (val) => {
    setPM({ ...PM, otherInsurance: val });
  };

  const PMnumberOnChange = (val) => {
    setPM({ ...PM, number: val });
  };

  const clearPMOnClick = () => {
    setPM({
      paymentMethod: '',
      JKN: '',
      otherInsurance: '',
      number: '',
    });

    setPMerr({
      paymentMethod: false,
      JKN: false,
      otherInsurance: false,
      number: false,
    });
  };

  const submitButtonOnClick = () => {
    console.log(`clicked`);
  };

  return(
    <main className='daftarPasienBaru'>
      {/* Data Diri Pasien */}
      <div className='con'>
        <div className='title'>
          <h1>Data Diri Pasien</h1>
        </div>
        <button onClick={() => console.log(PPD)}>show personal data</button>

        <form>
          <div className='form-left'>
            <div className={PPDErr.medicalRecordNumber ? 'input-err' : 'input'}>
              <h2>No. Rekam Medis</h2>
              <div>
                <input type='text' value={PPD.medicalRecordNumber} onChange={e => PPDmedicalRecordNumberOnChange(e.target.value)}></input>
                {PPDErr.medicalRecordNumber && <h4>No. Rekam Medis {PPDErr.medicalRecordNumber}</h4>}
              </div>
            </div>
            <div className={PPDErr.name ? 'input-err' : 'input'}>
              <h2>Nama</h2>
              <div>
                <input type='text' value={PPD.name} onChange={e => PPDnameOnChange(e.target.value)}></input>
                {PPDErr.name && <h4>Nama {PPDErr.name}</h4>}
              </div>
            </div>
            <div className={PPDErr.sex ? 'input-err' : 'input'}>
              <h2>Jenis Kelamin</h2>
              <div>
                <div className='input-radiobutton'>
                  <div className='item' onClick={() => PPDsexOnClick('LAKI-LAKI')}>
                    <div className={PPD.sex === 'LAKI-LAKI' ? 'item-dot-selected' : 'item-dot'} />
                    <h3>Laki-laki</h3>
                  </div>
                  <div className='item' onClick={() => PPDsexOnClick('PEREMPUAN')}>
                    <div className={PPD.sex === 'PEREMPUAN' ? 'item-dot-selected' : 'item-dot'} />
                    <h3>Perempuan</h3>
                  </div>
                </div>
                {PPDErr.sex && <h4>Jenis Kelamin tidak boleh kosong</h4>}
              </div>
            </div>
            <div className='input'>
              <h2>Alamat:</h2>
            </div>
            <div className='input'>
              <h2>Kab. / Kota</h2>
              <select value={PPD.address.districtCity} onChange={e => PPDaddressDistrictCityOnChange(e.target.value)}>
                {addressList.map((dc, index) => <option key={index} value={dc.districtCity}>{dc.districtCity}</option>)}
              </select>
            </div>
            <div className={PPDErr.address.subDistrict ? 'input-err' : 'input'}>
              <h2>Kec.</h2>
              <div>
                <select value={PPD.address.subDistrict} onChange={e => PPDaddressSubDistrictOnChange(e.target.value)}>
                <option value='' disabled>{`(PILIH KECAMATAN)`}</option>
                  {addressList.map(dc => dc.districtCity === PPD.address.districtCity && dc.subDistricts.map((sd, index) => <option key={index} value={sd.subDistrict}>{sd.subDistrict}</option>))}
                </select>
                {PPDErr.address.subDistrict && <h4>Kec. {PPDErr.address.subDistrict}</h4>}
              </div>
            </div>
            <div className={PPDErr.address.wardVillage ? 'input-err' : 'input'}>
              <h2>Kel. / Desa</h2>
              <div>
                <select value={PPD.address.wardVillage} onChange={e => PPDaddressWardVillageOnChange(e.target.value)}>
                  <option value='' disabled>{`(PILIH KELURAHAN / DESA)`}</option>
                  {addressList.map(dc => dc.districtCity === PPD.address.districtCity && dc.subDistricts.map(sd => sd.subDistrict === PPD.address.subDistrict && sd.wardsVillages.map((wv, index) => <option key={index} value={wv}>{wv}</option>)))}
                </select>
                {PPDErr.address.wardVillage && <h4>Kel. / Desa {PPDErr.address.wardVillage}</h4>}
              </div>
            </div>
            <div className={PPDErr.phoneNumber ? 'input-err' : 'input'}>
              <h2>No. Telepon</h2>
              <div>
                <input type='text' value={PPD.phoneNumber} onChange={e => PPDphoneNumberOnChange(e.target.value)}></input>
                {PPDErr.phoneNumber && <h4>No. Telepon {PPDErr.phoneNumber}</h4>}
              </div>
            </div>
          </div>
          <div className='form-right'>
            <div className={PPDErr.birthPlace ? 'input-err' : 'input'}>
              <h2>Tempat Lahir</h2>
              <div>
                <input type='text' value={PPD.birthPlace} onChange={e => PPDbirthPlaceOnChange(e.target.value)}></input>
                {PPDErr.birthPlace && <h4>Tempat Lahir {PPDErr.birthPlace}</h4>}
              </div>
            </div>
            <div className={(PPDErr.birthDate.date || PPDErr.birthDate.month || PPDErr.birthDate.year) ? 'input-err' : 'input'}>
              <h2>Tanggal Lahir</h2>
              <div>
                <div className='input-date'>
                  <div className={PPDErr.birthDate.date ? 'date-err' : 'date'}>
                    <input type='text' placeholder='TGL' value={PPD.birthDate.date} onChange={e => PPDbirthDateDateOnChange(e.target.value)}></input>
                  </div>
                  <div className={PPDErr.birthDate.month ? 'month-err' : 'month'}>
                    <select value={PPD.birthDate.month} onChange={e => PPDbirthDateMonthOnChange(e.target.value)}>
                      <option value='' disabled>{`(BULAN)`}</option>
                      {monthList.map((m, index) => <option key={index} value={index+1}>{index+1} / {m}</option>)}
                    </select>
                  </div>
                  <div className={PPDErr.birthDate.year ? 'year-err' : 'year'}>
                    <input type='text' placeholder='TAHUN' value={PPD.birthDate.year} onChange={e => PPDbirthDateYearOnChange(e.target.value)}></input>
                  </div>
                </div>
                <div>
                  {PPDErr.birthDate.date && <h4>Tanggal dari Tanggal Lahir {PPDErr.birthDate.date}</h4>}
                  {PPDErr.birthDate.month && <h4>Bulan dari Tanggal Lahir {PPDErr.birthDate.month}</h4>}
                  {PPDErr.birthDate.year && <h4>Tahun dari Tanggal Lahir {PPDErr.birthDate.year}</h4>}
                </div>
              </div>
            </div>
            <div className='input'>
              <h2>Umur</h2>
              <input type='text' disabled value={PPD.age} style={{backgroundColor: '#D3D3D3'}}></input>
            </div>
            <div className={PPDErr.familyCardName ? 'input-err' : 'input'}>
              <h2>Nama KK</h2>
              <div>
                <input type='text' value={PPD.familyCardName} onChange={e => PPDfamilyCardNameOnChange(e.target.value)}></input>
                {PPDErr.familyCardName && <h4>Nama Kartu Keluarga {PPDErr.familyCardName}</h4>}
              </div>
            </div>
            <div className={PPDErr.religion ? 'input-err' : 'input'}>
              <h2>Agama</h2>
              <div>
                <select value={PPD.religion} onChange={e => PPDreligionOnChange(e.target.value)}>
                  <option value='' disabled>{`(PILIH AGAMA)`}</option>
                  {religionList.map((r, index) => <option key={index} value={r}>{r}</option>)}
                </select>
                {PPDErr.religion && <h4>Agama {PPDErr.religion}</h4>}
              </div>
            </div>
            <div className={PPDErr.maritalStatus ? 'input-err' : 'input'}>
              <h2>Status</h2>
              <div>
                <select value={PPD.maritalStatus} onChange={e => PPDmaritalStatusOnChange(e.target.value)}>
                  <option value='' disabled>{`(PILIH STATUS KAWIN)`}</option>
                  {maritalStatusList.map((m, index) => <option key={index} value={m}>{m}</option>)}
                </select>
                {PPDErr.maritalStatus && <h4>Status {PPDErr.maritalStatus}</h4>}
              </div>
            </div>
            <div className={PPDErr.job ? 'input-err' : 'input'}>
              <h2>Pekerjaan</h2>
              <div>
                <select value={PPD.job} onChange={e => PPDjobOnChange(e.target.value)}>
                  <option value='' disabled>{`(PILIH PEKERJAAN)`}</option>
                  {jobList.map((j, index) => <option key={index} value={j}>{j}</option>)}
                </select>
                {PPDErr.job && <h4>Pekerjaan {PPDErr.job}</h4>}
              </div>
            </div>
          </div>
        </form>
        <div className='button-clear'><button onClick={() => clearPPDOnClick()}>Bersihkan</button></div>
        
      </div>

      {/* Data BPJS/KIS Pasien */}
      <div className='con'>
        <div className='title'>
          <h1>Data BPJS/KIS Pasien</h1>
        </div>
        <button onClick={() => console.log(PBKD)}>show bpjs/kis</button>

        <form>
          <div className='form-left'>
            <div className='input'>
              <h2>No. Kartu</h2>
              <input type='text' value={PBKD.cardNumber} onChange={e => PBKDcardNumberOnChange(e.target.value)}></input>
            </div>
            <div className='input'>
              <h2>Nama</h2>
              <input type='text' value={PBKD.name} onChange={e => PBKDnameOnChange(e.target.value)}></input>
            </div>
            <div className='input'>
              <h2>Tanggal Lahir</h2>
              <div className='input-date'>
                <div className='date'>
                  <input type='text' placeholder='TGL' value={PBKD.birthDate.date} onChange={e => PBKDbirthDateDateOnChange(e.target.value)}></input>
                </div>
                <div className='month'>
                  <select value={PBKD.birthDate.month} onChange={e => PBKDbirthDateMonthOnChange(e.target.value)}>
                    <option value='' disabled>{`(BULAN)`}</option>
                    {monthList.map((m, index) => <option key={index} value={index+1}>{index+1} / {m}</option>)}
                  </select>
                </div>
                <div className='year'>
                  <input type='text' placeholder='TAHUN' value={PBKD.birthDate.year} onChange={e => PBKDbirthDateYearOnChange(e.target.value)}></input>
                </div>
              </div>
            </div>
            <div className='input'>
              <h2>Faskes Tingkat I</h2>
              <input type='text' value={PBKD.healthFacilityLevel} onChange={e => PBKDhealthFacilityLevelOnChange(e.target.value)}></input>
            </div>
            <div className='input'>
              <h2>Kelas Rawat</h2>
              <input type='text' value={PBKD.nursingClass} onChange={e => PBKDnursingClassOnChange(e.target.value)}></input>
            </div>
          </div>
          <div className='form-right'>
            <div className='input'>
              <h2>NIK</h2>
              <input type='text' value={PBKD.NIK} onChange={e => PBKDNIKOnChange(e.target.value)}></input>
            </div>
            <div className='input-textarea'>
              <h2>Alamat</h2>
              <textarea value={PBKD.address} onChange={e => PBKDaddressOnChange(e.target.value)}></textarea>
            </div>
          </div>
        </form>
        <div className='button-clear'><button onClick={() => clearPBKDOnClick()}>Bersihkan</button></div>
      </div>

      {/* Cara Pembayaran */}
      <div className='con'>
        <div className='title'>
          <h1>Cara Pembayaran</h1>
        </div>
        <button onClick={() => console.log(PM)}>show payment method</button>

        <form>
          <div className='form-left'>
            <div className='input'>
              <h2>Cara Pembayaran</h2>
              <div className='input-radiobutton'>
                <div className='item' onClick={() => PMpaymentMethodOnChange('BIAYA SENDIRI')}>
                  <div className={PM.paymentMethod === 'BIAYA SENDIRI' ? 'item-dot-selected' : 'item-dot'} />
                  <h3>Biaya Sendiri</h3>
                </div>
                <div className='item' onClick={() => PMpaymentMethodOnChange('UMUM')}>
                  <div className={PM.paymentMethod === 'UMUM' ? 'item-dot-selected' : 'item-dot'} />
                  <h3>Umum</h3>
                </div>
              </div>
            </div>
            <div className='input'>
              <h2>JKN</h2>
              <div className='input-radiobutton'>
                <div className='item' onClick={() => PMJKNOnChange('KM')}>
                  <div className={PM.JKN === 'KM' ? 'item-dot-selected' : 'item-dot'} />
                  <h3>KM</h3>
                </div>
                <div className='item' onClick={() => PMJKNOnChange('KAB')}>
                  <div className={PM.JKN === 'KAB' ? 'item-dot-selected' : 'item-dot'} />
                  <h3>KAB</h3>
                </div>
                <div className='item' onClick={() => PMJKNOnChange('A')}>
                  <div className={PM.JKN === 'A' ? 'item-dot-selected' : 'item-dot'} />
                  <h3>A</h3>
                </div>
                <div className='item' onClick={() => PMJKNOnChange('S')}>
                  <div className={PM.JKN === 'S' ? 'item-dot-selected' : 'item-dot'} />
                  <h3>S</h3>
                </div>
                <div className='item' onClick={() => PMJKNOnChange('M')}>
                  <div className={PM.JKN === 'M' ? 'item-dot-selected' : 'item-dot'} />
                  <h3>M</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='form-right'>
            <div className='input'>
              <h2>Asuransi Lainnya</h2>
              <input type='text' value={PM.otherInsurance} onChange={e => PMotherInsuranceOnChange(e.target.value)}></input>
            </div>
            <div className='input'>
              <h2>Nomor</h2>
              <input type='text' value={PM.number} onChange={e => PMnumberOnChange(e.target.value)}></input>
            </div>
          </div>
        </form>
        <div className='button-clear'><button onClick={() => clearPMOnClick()}>Bersihkan</button></div>
      </div>
      <div className='button-submit'><button onClick={() => submitButtonOnClick()}>Submit</button></div>
    </main>
  );
}
