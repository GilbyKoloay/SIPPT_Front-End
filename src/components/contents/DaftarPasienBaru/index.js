// styles
import '../styles.css';

// atoms
import {
  Title,
  TextInput,
  Select,
  DateInput,
  ButtonClear,
  TextAreaInput,
  RadioButton,
} from '../../atoms';

export default function DaftarPasienBaru({ props }) {
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
  const {
    SUNP_personalData, SUNP_personalData_onChange, SUNP_personalData_clear,
    SUNP_BPJSKISData,
    SUNP_BPJSKISData_changeCardNumber,
    SUNP_BPJSKISData_changeName,
    SUNP_BPJSKISData_changeBirthDateDate,
    SUNP_BPJSKISData_changeBirthDateMonth,
    SUNP_BPJSKISData_changeBirthDateYear,
    SUNP_BPJSKISData_changeHealthFacilityLevel,
    SUNP_BPJSKISData_changeNursingClass,
    SUNP_BPJSKISData_changeNIK,
    SUNP_BPJSKISData_changeAddress,
    SUNP_BPJSKISData_clear,
    SUNP_paymentMethod,
    SUNP_paymentMethod_changePaymentMethod,
    SUNP_paymentMethod_changeJKN,
    SUNP_paymentMethod_changeOtherInsurance,
    SUNP_paymentMethod_changeNumber,
    SUNP_paymentMethod_clear,
    SUNP_submitForm,
  } = props;

  return(
    <main>
      <div className='contentFull'>
        <Title props={{title: "Data Diri Pasien"}} />
        <form>
          <div className='form'>
            <TextInput props={{
              label: 'No. Rekam Medis', 
              value: SUNP_personalData.medicalRecordNumber, 
              change: 'medicalRecordNumber', 
              onChange: SUNP_personalData_onChange,
            }} />
            <TextInput props={{
              label: 'Nama', 
              value: SUNP_personalData.name, 
              change: 'name', 
              onChange: SUNP_personalData_onChange,
            }} />
            <RadioButton props={{
              label: "Jenis Kelamin", 
              options: ['LAKI-LAKI', 'PEREMPUAN'], 
              value: SUNP_personalData.sex, 
              change: 'sex', 
              onChange: SUNP_personalData_onChange, 
            }} />
            <div className='textLabel' style={{marginBottom: 15}}>Alamat: </div>
            <Select props={{
              label: 'Kab. / Kota', 
              options: ['(KABUPATEN / KOTA)', ...addressList.map(dc => dc.districtCity)], 
              value: SUNP_personalData.address.districtCity, 
              // change: ['address', 'districtCity'], 
              // onChange: SUNP_personalData_onChange, 
              tab: true, 
            }} />
            <Select props={{
              label: 'Kec.', 
              options: SUNP_personalData.address.districtCity === '' ? ['(KECAMATAN)'] : addressList.map(dc => (dc.districtCity === SUNP_personalData.address.districtCity) && ['(KECAMATAN)', ...dc.subDistricts.map(sd => sd.subDistrict)]).filter(v => v)[0], 
              value: SUNP_personalData.address.subDistrict, 
              // change: , 
              // onChange: SUNP_personalData_onChange, 
              tab: true, 
            }} />
            <Select props={{
              label: 'Kel. / Desa', 
              options: SUNP_personalData.address.subDistrict === '' ? ['(KELURAHAN / DESA)'] : addressList.map(dc => (dc.districtCity === SUNP_personalData.address.districtCity) && dc.subDistricts.map(sd => (sd.subDistrict === SUNP_personalData.address.subDistrict) && ['(KELURAHAN / DESA)', ...sd.wardsVillages.map(wv => wv)]).filter(v => v)[0]).filter(v => v)[0], 
              value: SUNP_personalData.address.wardVillage, 
              // change: , 
              // onChange: SUNP_personalData_onChange, 
              tab: true, 
            }} />
            <TextInput props={{
              label: 'No. Telepon', 
              value: SUNP_personalData.phoneNumber, 
              change: 'phoneNumber', 
              onChange: SUNP_personalData_onChange,
            }} />
          </div>
          <div className='form'>
            <TextInput props={{
              label: 'Tempat Lahir', 
              value: SUNP_personalData.birthPlace, 
              change: 'birthPlace', 
              onChange: SUNP_personalData_onChange,
            }} />
            <DateInput props={{
              label: 'Tanggal Lahir', 
              value: SUNP_personalData.birthDate, 
              onChange: {
                // date: SUNP_personalData_changeBirthDateDate, 
                // month: SUNP_personalData_changeBirthDateMonth, 
                // year: SUNP_personalData_changeBirthDateYear, 
            }}} />
            <TextInput props={{
              label: 'Umur', 
              value: SUNP_personalData.age, 
              change: 'age', 
              onChange: () => console.log(`function not yet made`), 
              disabled: true, 
            }} />
            <TextInput props={{
              label: 'Nama KK', 
              value: SUNP_personalData.familyCardNumber, 
              change: 'familyCardName', 
              onChange: SUNP_personalData_onChange,
            }} />
            <Select props={{
              label: 'Agama', 
              options: ['(AGAMA)', 'ISLAM', 'KATOLIK', 'PROTESTAN', 'BUDHA', 'HINDU', 'LAINNYA'], 
              value: SUNP_personalData.religion, 
              change: 'religion', 
              onChange: SUNP_personalData_onChange, 
            }} />
            <Select props={{
              label: 'Status', 
              options: ['(STATUS)', 'KAWIN', 'TIDAK KAWIN', 'JANDA/DUDA'], 
              value: SUNP_personalData.maritalStatus, 
              change: 'maritalStatus', 
              onChange: SUNP_personalData_onChange, 
            }} />
            <Select props={{
              label: 'Pekerjaan', 
              options: ['(PEKERJAAN)', 'ASN', 'TNI/POLRI', 'SWASTA', 'PETANI', 'WIRASWASTA', 'PELAJAR/MAHASISWA', 'LAINNYA'], 
              value: SUNP_personalData.job, 
              change: 'job', 
              onChange: SUNP_personalData_onChange, 
            }} />
          </div>
        </form>
        <ButtonClear props={{onClick: SUNP_personalData_clear}} />
      </div>

      <div className='contentFull'>
        <Title props={{title: "Data BPJS/KIS Pasien"}} />
        <form>
          <div className='form'>
            <TextInput props={{
              label: "No. Kartu", 
              value: SUNP_BPJSKISData.cardNumber, 
              onChange: SUNP_BPJSKISData_changeCardNumber, 
            }} />
            <TextInput props={{
              label: "Nama", 
              value: SUNP_BPJSKISData.name,
              onChange: SUNP_BPJSKISData_changeName, 
            }} />
            <DateInput props={{
              label: 'Tanggal Lahir', 
              value: SUNP_BPJSKISData.birthDate, 
              onChange: {
                date: SUNP_BPJSKISData_changeBirthDateDate, 
                month: SUNP_BPJSKISData_changeBirthDateMonth, 
                year: SUNP_BPJSKISData_changeBirthDateYear, 
            }}} />
            <TextInput props={{
              label: 'Faskes Tingkat I', 
              value: SUNP_BPJSKISData.healthFacilityLevel, 
              onChange: SUNP_BPJSKISData_changeHealthFacilityLevel, 
            }} />
            <TextInput props={{
              label: 'Kelas Rawat', 
              value: SUNP_BPJSKISData.nursingClass, 
              onChange: SUNP_BPJSKISData_changeNursingClass, 
            }} />
          </div>
          <div className='form'>
            <TextInput props={{
              label: 'NIK', 
              value: SUNP_BPJSKISData.NIK, 
              onChange: SUNP_BPJSKISData_changeNIK, 
            }} />
            <TextAreaInput props={{
              label: 'Alamat', 
              value: SUNP_BPJSKISData.address, 
              onChange: SUNP_BPJSKISData_changeAddress, 
            }} />
          </div>
        </form>
        <ButtonClear props={{onClick: SUNP_BPJSKISData_clear}} />
      </div>

      <div className='contentFull'>
        <Title props={{title: "Cara Pembayaran"}} />
        <form>
          <div className='form'>
            <RadioButton props={{
              label: 'Cara Pembayaran', 
              options: ['BIAYA SENDIRI', 'UMUM'], 
              value: SUNP_paymentMethod.paymentMethod, 
              onChange: SUNP_paymentMethod_changePaymentMethod, 
            }} />
            <RadioButton props={{
              label: 'JKN', 
              options: ['KM', 'KAB', 'A', 'S', 'M'], 
              value: SUNP_paymentMethod.JKN, 
              onChange: SUNP_paymentMethod_changeJKN, 
            }} />
          </div>
          <div className='form'>
            <TextInput props={{
              label: 'Asuransi Lainnya', 
              value: SUNP_paymentMethod.otherInsurance, 
              onChange: SUNP_paymentMethod_changeOtherInsurance, 
            }} />
            <TextInput props={{
              label: 'Nomor', 
              value: SUNP_paymentMethod.number, 
              onChange: SUNP_paymentMethod_changeNumber, 
            }} />
          </div>
        </form>
        <ButtonClear props={{onClick: SUNP_paymentMethod_clear}} />
      </div>
      <button className='submitForm textInput' onClick={() => SUNP_submitForm()}>Daftar Pasien Baru</button>
      {/* <button className='submitForm'>Tidak dapat mendaftar pasien baru karena data tidak valid</button> */}
    </main>
  );
}
