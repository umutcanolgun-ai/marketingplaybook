export interface Section {
  id: string; num: string; title: string; subtitle: string;
  subsections: { id: string; title: string; content: string }[];
}

export const sections: Section[] = [
  {
    id: "giris",
    num: "1",
    title: `GİRİŞ`,
    subtitle: `Playbook'un amacı, kullanımı ve Zeela'da marketing'in rolü`,
    subsections: [
      {
        id: "1-1",
        title: `1.1 Marketing Playbook Nedir?`,
        content: `TANIM & GENEL BAKIŞ

Marketing Playbook, pazarlamanın ne olduğunu anlatan teorik bir doküman değil; nasıl yapılacağını sistematik olarak tanımlayan operasyonel bir rehberdir. Çoğu şirkette marketing hâlâ parçalı ve reaktif işler: bugün reklam açılır, yarın içerik paylaşılır, öbür gün kampanya planlanır. Bu aktivitelerin arasında sistematik bir bağ yoksa ortaya çıkan şey marketing değil, dağınık eforlardır.

Dağınık eforu dağınık sonuç takip eder: tutarsız marka algısı, ölçülemeyen performans, tekrar edilemeyen başarılar. Bu playbook tam bu problemi çözmek için vardır. Pazarlama faaliyetlerini belirli prensiplere ve süreçlere bağlı, tekrar edilebilir bir sisteme dönüştürür.

→ B2B                                                                                                                                              → B2C

B2B'de playbook; uzun satış döngülerini, birden fazla karar vericiyi ve ilişki odaklı büyümeyi yönetir. Her adımın sistematik olması zorunludur.   B2C'de playbook; hızlı karar veren kitlelerle çalışmanın kaosunu yönetir. Hız ve ölçek ancak sistemle kontrol altına alınabilir.

++
| Zeela için neden kritik?                                                                                                                                        |
|                                                                                                                                                                 |
| Sürekli ürün üreten bir yapıda sistem yoksa hız, avantaj değil dezavantaja dönüşür. Bu playbook hız ile kontrol arasındaki dengeyi kurmak için oluşturulmuştur. |
++

Sorumlu Rol             Zaman Çerçevesi             Başarı Kriteri

Marketing Lead          Sürekli — yaşayan doküman   Her lansmanda açılıyor, ekip referans alıyor`,
      },
      {
        id: "1-2",
        title: `1.2 Bu Playbook'un Amacı`,
        content: `TANIM & GENEL BAKIŞ

Bu playbook'un amacı pazarlamayı kişiye bağlı kararlardan çıkarıp, standartları ve ölçüm mekanizmaları olan bir sisteme taşımaktır. Çoğu şirkette bir kampanyanın başarısı o kampanyayı yürüten kişinin sezgisine bağlıdır. Bu kısa vadede çalışabilir, uzun vadede çalışmaz.

Zeela'nın hedefi tekil başarılar değil, tekrar edilebilir başarılar üretmektir.

Bu playbook sayesinde: her yeni ürün için sıfırdan strateji üretilmez, önceki öğrenmeler kaldıraç olarak kullanılır, hangi aksiyonun neden alındığı bilinir, performans ölçümü standart hale gelir ve hatalar tekrar edilmez.

Öncesi               Deneme-yanılma, kişiye bağlı kararlar, ölçümsüz kampanyalar

Sonrası              Standart süreçler, ölçülebilir sonuçlar, biriken kurumsal bilgi

Sorumlu Rol             Zaman Çerçevesi         Başarı Kriteri

CEO + Marketing Lead    İlk 30 gün              Her ekip playbook'u referans alıyor`,
      },
      {
        id: "1-3",
        title: `1.3 Bu Dokümanı Kimler Kullanmalı?`,
        content: `TANIM & GENEL BAKIŞ

Marketing Playbook yalnızca marketing ekibinin değil, büyümeyi doğrudan veya dolaylı etkileyen herkesin belgesidir. Zeela modelinde pazarlama; ürünle paralel ilerler, satışı doğrudan etkiler, müşteri deneyimini şekillendirir.

Ekip / Rol              Neden Okumalı?                        Öncelikli Bölümler

Marketing Ekipleri      Strateji, kanal, kampanya kararları   Tüm bölümler

Growth Ekipleri         Deney, funnel, ölçekleme              Bölüm 8, 10, 13

Ürün Ekipleri           Positioning, GTM, retention           Bölüm 3, 5, 6

Sales Ekipleri          ICP, mesajlaşma, lead kalitesi        Bölüm 3, 4, 6

Kurucular & CEO         Strateji, kaynak, büyüme modeli       Bölüm 1, 5, 6, 13

COO & Operasyon         Süreç, standart, ölçüm                Bölüm 11, 14

++
| Onboarding notu                                                                                |
|                                                                                                |
| Yeni katılan her ekip üyesi departmanından bağımsız olarak ilk hafta bu playbook'u okumalıdır. |
++

Sorumlu Rol             Zaman Çerçevesi                       Başarı Kriteri

Tüm Ekip Liderleri      Onboarding'de — yeni üye geldiğinde   Onboarding checklist'inde zorunlu madde`,
      },
      {
        id: "1-4",
        title: `1.4 Bu Playbook Nasıl Kullanılmalı?`,
        content: `TANIM & GENEL BAKIŞ

Bu doküman okunup rafa kaldırılmaz. Aktif bir karar rehberidir. Playbook'un değeri içindeki bilgiden değil, bu bilgilerin günlük kararlara ne kadar yansıdığından gelir. Ölçütü basittir: herhangi bir marketing kararı alınırken 'playbook ne diyor?' diye soruluyor mu?

Bu doküman şu durumlarda açılmalı: yeni bir ürün pazara sunulurken, yeni bir kanal test edilirken, kampanya planlanırken, performans değerlendirilirken ve bir kriz yaşandığında.

→ B2B                                                                                                                                     → B2C

B2B ekiplerde playbook özellikle lansman, yeni pazar girişi ve satış-marketing süreçlerinin kesiştiği noktalarda aktif kullanılmalıdır.   B2C ekiplerde playbook kampanya planlaması ve büyüme deneyleri sırasında günlük referans olmalıdır. Hızlı iterasyon ortamlarında karar süresini kısaltır.

Sorumlu Rol             Zaman Çerçevesi                                     Başarı Kriteri

Marketing Lead          Her lansman öncesi açılır — çeyreklik güncellenir   Her lansman briefi playbook'a referans içeriyor`,
      },
      {
        id: "1-5",
        title: `1.5 Organizasyon İçinde Marketing'in Rolü`,
        content: `TANIM & GENEL BAKIŞ

Pazarlama birçok şirkette yanlış konumlandırılır: reklam açan, sosyal medya paylaşan, broşür hazırlayan bir destek birimi olarak görülür. Bu tanım pazarlamanın gerçek gücünü gizler ve büyüme kapasitesini doğrudan kısıtlar.

Zeela'da marketing bir destek fonksiyonu değil, büyümenin kendisidir.

Marketing talep oluşturur, kullanıcı kazanır, ürünün pazardaki konumunu belirler ve büyümeyi ölçekler. Ürün ne kadar iyi olursa olsun, doğru pazarlama olmadan büyümez. Bu nedenle Zeela'da marketing, ürün kadar stratejik bir rol üstlenir.

→ B2B                                                                                                                                                                                   → B2C

B2B'de marketing'in birincil rolü talep üretimi ve sales pipeline beslemesidir. Marketing, satış ekibinin karşısına çıktığı müşteriyi önceden eğitir ve satın alma kararına hazırlar.   B2C'de marketing'in rolü doğrudan kullanıcı edinimi, aktivasyon ve retentiondur. Marketing, ürünle kullanıcı arasındaki tüm temas noktalarını yönetir.

Neden Önemli?

-   Marketing doğru konumlanmadığında kaynaklarını tam kullanamaz — büyüme yarım kalır

-   Stratejik planlama toplantılarında marketing olmadan alınan kararlar uygulama aşamasında dirençle karşılaşır

-   Marketing bütçesi kriz anında kesilen şirketler büyüme motorlarını durdurur — toparlanması aylar alır

Nasıl Uygulanır?

Marketing'in rolünü kurumsal olarak netleştirmek için şu adımlar izlenmelidir: marketing OKR'larını şirket hedefleriyle hizala, marketing lead'i stratejik planlama toplantılarına dahil et, marketing başarısını yalnızca görünürlük değil büyümeye katkıyla ölç.

Kaçınılması Gereken Hatalar

✗ Marketing'i 'iletişim departmanı' olarak konumlandırmak — büyüme potansiyelini yarıya indirir

✗ Marketing'i stratejik planlama süreçlerinin dışında bırakmak — karar sonradan duyurulunca iş geç kalır

✗ Kriz anında marketing bütçesini ilk kesmek — büyüme motorunu durdurmaktır

📌 B2B Örnek                                                                                                                                                                                                                                                    📌 B2C Örnek

Zeela'nın bir ürün ekibi GTM kararlarını marketing olmadan aldı. Lansman sonrası mesajlaşma tutarsızlığı yaşandı, ilk 30 günde beklenen MQL hedefinin %40'ına ulaşıldı. Marketing lansmandan 6 hafta önce sürece dahil edilmeseydi daha iyi sonuç alınacaktı.   D2C bir marka kriz döneminde reklam bütçesini tamamen kesti. Organik içerik de durdu. 3 ay sonra rakipler boşluğu doldurmuş, marka bilinirliği %18 düşmüştü. Bütçeyi azaltmak yerine kanalı değiştirmek çok daha iyi sonuç verirdi.

Sorumlu Rol             Zaman Çerçevesi               Başarı Kriteri

CEO + Marketing Lead    Kuruluş — revizyon: yılda 1   Marketing şirket OKR'larına doğrudan bağlı`,
      },
      {
        id: "1-6",
        title: `1.6 Marketing Karar Prensipleri`,
        content: `TANIM & GENEL BAKIŞ

Zeela'da marketing kararları kişisel görüşe veya sezgiye değil, belirli prensiplere dayanır. Bu prensipler belirsizlik içinde bile tutarlı kararlar alınmasını sağlar ve organizasyon genelinde ortak bir düşünme biçimi oluşturur.

Neden Önemli?

-   Prensipsiz kararlar kişiden kişiye değişir — aynı durumda farklı ekipler farklı sonuçlara ulaşır

-   Prensipleri paylaşan ekipler daha hızlı hizalanır, tartışmalar kısalır

-   Kararların prensiplere dayanması hesap verebilirliği artırır ve kurumsal öğrenmeyi güçlendirir

Dört Temel Prensip

→ Data before opinion

Pazarlama kararları veriye göre alınır. Veri olmadan alınan her karar yüksek maliyetli bir tahmindir. Sezgi değerlidir ama hipotez olarak — strateji olarak değil.

→ Customer problem first

Müşteriler ürün satın almaz, problemlerine çözüm satın alır. Her kampanya, içerik ve mesaj şu soruyla başlamalıdır: 'Bu müşterimin hangi problemine hitap ediyor?'

→ Test before scale

Her strateji önce küçük ölçekli testlerle doğrulanır. Çalıştığı kanıtlanan yaklaşımlar kontrollü şekilde ölçeklenir. Büyük bütçeyle başlamak hataları büyütür.

→ Speed over perfection

Pazarlamada önemli olan kusursuzluk değil hız ve öğrenme kapasitesidir. 'İyi ama yayında' olan, 'mükemmel ama tasarım aşamasında' olandan her zaman değerlidir.

→ B2B                                                                                                                                                                                           → B2C

B2B'de 'data before opinion' uzun satış döngülerinde ve yüksek bilet değerli kararlarda kritik önem taşır. Bir enterprise anlaşmayı kazanmak ya da kaybetmek arasındaki farkı belirleyebilir.   B2C'de 'speed over perfection' hızlı iterasyon gerektiren kampanya ortamlarında hayat kurtarır. Rakipten bir gün önce yayına girmek ciddi avantaj sağlar.

Action Steps

1.  Prensipleri ekiple birlikte oku ve her birinin somut anlamını tartış

2.  Her büyük karar için kısa bir prensip kontrolü yap

3.  Prensip ihlallerini belgele — ileride öğrenme kaynağı olur

4.  Yeni üyelerin onboarding'ine bu prensipleri dahil et

Checklist

✔ Tüm ekip bu prensipleri biliyor ve uyguluyor mu?

✔ Son üç büyük karar bu prensiplere dayandırıldı mı?

✔ Yeni üyeler onboarding'de prensipleri öğrendi mi?

Kaçınılması Gereken Hatalar

✗ Prensipleri duvara asmak ama kararlarda kullanmamak — dekorasyon olmaktan çıkarılmalı

✗ 'Veri yok ama şimdi karar vermek zorundayız' tuzağına düşmek — minimum veri toplanabilecek kadar bekle

✗ Speed over perfection'ı kalitesizlik için bahane kullanmak — hız ile kalite aynı anda yönetilebilir

📌 B2B Örnek                                                                                                                                                                                                                 📌 B2C Örnek

Yeni segmente giriş kararı: 'Data before opinion' gereği 10 görüşme yapıldı. 'Test before scale' gereği 3 küçük outreach kampanyası test edildi. %12 dönüşüm görülünce tam ölçekleme kararı alındı — bütçe israfı önlendi.   Yeni influencer stratejisi: 'Speed over perfection' gereği mükemmel brief beklemeden 5 mikro-influencer ile pilot başlatıldı. 2 hafta sonra veriye bakıldı, en iyi 2'siyle devam edildi, 3'ü kesildi. Toplam maliyet %40 düştü.

Sorumlu Rol             Zaman Çerçevesi                 Başarı Kriteri

Tüm Marketing Ekibi     Sürekli — her karar sürecinde   Kararların büyük çoğunluğu prensiplere dayandırılıyor

2. PAZAR ANALİZİ (MARKET INTELLIGENCE)

Pazar analizi, marketing stratejisinin üzerine inşa edildiği temeldir. Bu temeli sağlam kurarsanız üzerine inşa ettiğiniz her şey güçlü olur. Pazar analizi olmadan yapılan marketing sezgiye ve şansa dayanır — pazar analiziyle yapılan ise öngörülebilir ve tekrar edilebilir sonuçlar üretir.

2.1 Pazar Genel Görünümü (Market Overview)

TANIM & GENEL BAKIŞ

Market overview, ürünün içinde konumlanacağı pazarın yapısını, sınırlarını ve işleyiş mantığını anlamaya yönelik en temel analizdir. Çoğu ekip üründen başlayıp pazarı sonradan anlamaya çalışır — bu büyük hatadır. Pazarı anlamadan yapılan positioning ya çok geniş ya da çok dar olur, her ikisi de büyümeyi engeller.

→ B2B                                                                                                                                                                                           → B2C

B2B'de pazar tanımı 'hangi sektöre, hangi büyüklükteki şirkete, hangi role satıyoruz?' sorularını yanıtlamalıdır. Vertikal odak çoğu zaman geniş pazara kıyasla çok daha hızlı büyüme sağlar.   B2C'de pazar tanımı tüketici davranışı ve demografik değişimlerle şekillenir. Davranışsal segmentler ve satın alma tetikleyicileri market overview'ın merkezinde olmalıdır.

Neden & Nasıl Yapılır?

Market overview üç katmanda analiz edilir: endüstri tanımı (ürün hangi kategoride, sınırlar nerede?), endüstri yapısı (rekabet nasıl, güç kimlerde?) ve pazar dinamikleri (pazar büyüyor mu, nereye gidiyor?). Porter'ın Beş Gücü — mevcut rakipler, yeni girenler, ikame ürünler, alıcı gücü, tedarikçi gücü — bu analizde güçlü bir çerçeve sunar.

Action Steps

5.  Pazar kategorisini spesifik tanımla — 'yazılım' değil, 'B2B proje yönetim yazılımı'

6.  Alt segmentleri çıkar ve her birinin büyüklüğünü tahmin et

7.  Pazarın son 3 yıllık büyüme hızını araştır

8.  Porter'ın Beş Gücü ile pazarın çekiciliğini değerlendir

9.  Bulguları tek bir 'Pazar Özeti' belgesine dönüştür

Checklist

✔ Pazar kategorisi net ve spesifik tanımlandı mı?

✔ Alt segmentler haritalandı mı?

✔ Büyüme trendi belirlendi mi?

✔ Rekabet yoğunluğu değerlendirildi mi?

Tool & Kaynaklar

Statista             Pazar büyüklüğü ve büyüme oranları için temel kaynak

IBISWorld            Sektör yapısı ve rekabet ortamı için kapsamlı raporlar

Crunchbase           Yatırım akışı — pazarın nereye gittiğinin en güçlü sinyali

Google Trends        Kategorilere olan talebin zaman içindeki değişimi

Reddit & Forumlar    Gerçek kullanıcıların pazarı nasıl gördüğü

Kaçınılması Gereken Hatalar

✗ Pazarı çok geniş tanımlamak — 'yazılım pazarındayız' strateji değil, belirsizliktir

✗ Yalnızca masa başı araştırma yapmak — gerçek insanlarla konuşmak zorunludur

✗ Analizi bir kez yapıp güncellememek — pazar değişir, analiz de değişmelidir

📌 B2B Örnek                                                                                                                                                                   📌 B2C Örnek

HR yazılım pazarına girecek şirket alt segment analizinde 'uzak çalışan ekipler için saat takibi' boşluğunu buldu. Genel HRM yerine bu nişe odaklandı — 18 ayda 400 müşteri.   Fitness uygulaması geniş 'sağlık pazarı' yerine davranışsal analiz yaptı: '35–50 yaş, 15–20 dk antrenman arayan ebeveynler' segmentini buldu. Niş odaklanmayla 3 ayda 25.000 kullanıcı.

Sorumlu Rol                   Zaman Çerçevesi                           Başarı Kriteri

Marketing Lead + Ürün Ekibi   Her lansman öncesi — revizyon: 6 ayda 1   Pazar tanımı ve 3 alt segment dokümante edilmiş

2.2 Pazar Büyüklüğü (TAM, SAM, SOM)

TANIM & GENEL BAKIŞ

Market size analizi işin gerçekte ne kadar büyüyebileceğini gösterir. OKR'lar ve kaynak planlaması TAM'a değil SOM'a göre yapılmalıdır — 'pazarın %1'ini alırız' mantığı gerçekçi değildir.

TAM                  Teorik maksimum pazar — heyecan verici ama yanıltıcı, hiçbir şirket tamamını alamaz

SAM                  Ürünün gerçekçi hitap ettiği dilim — marketing ve satışın hedef aldığı yer

SOM                  Kısa-orta vadede kazanılabilecek pay — OKR ve bütçe buraya göre kurulur

Bottom-up hesaplama her zaman top-down'dan güvenilirdir. Örnek: UK'deki 10–50 çalışanlı SaaS şirketleri = 8.000 şirket × 3.600$ yıllık ödeme = 28,8M$ SAM. İlk 2 yılda %5 pay = 1,44M$ SOM. Bu rakam üzerinden ekip ve bütçe planlanır.

→ B2B                                                                                                                                        → B2C

B2B'de SAM hesabı çok keskin yapılabilir. LinkedIn gibi araçlarla hedef segmentin şirket ve karar verici sayısını doğrudan sayabilirsiniz.   B2C'de SAM demografik ve psikografik verilerle tahmin edilir. Benzer ürünlerin penetrasyon oranları SOM için iyi kıyaslama noktası sunar.

Action Steps

10. Hedef müşteri segmentini net tanımla — sektör, büyüklük, coğrafya, rol

11. Bottom-up hesaplama yap: segment büyüklüğü × ortalama gelir = SAM

12. Gerçekçi SOM hesapla — rakip penetrasyon oranlarına bak

13. Tüm varsayımları belgelenir hale getir

14. SOM'u OKR ve bütçe planlamasıyla ilişkilendir

Checklist

✔ TAM/SAM/SOM ayrımı yapıldı mı?

✔ Bottom-up hesaplama kullanıldı mı?

✔ Varsayımlar belgelendi mi?

✔ SOM büyüme hedefleriyle ilişkilendirildi mi?

Tool & Kaynaklar

Statista & IBISWorld       TAM için sektörel büyüklük verileri — birden fazla kaynak kullan

LinkedIn Sales Navigator   B2B SAM için hedef segmentin şirket ve karar verici sayısını say

Google Ads Planner         B2C'de belirli arama terimlerinin aylık hacmi — demand proxy

SimilarWeb                 Rakip trafik hacmi — pazar talebinin dolaylı göstergesi

Kaçınılması Gereken Hatalar

✗ TAM'a göre hedef koymak — OKR'larını SOM'a göre yap

✗ Varsayımları gizlemek — 'SAM 50M$' yetmez, nasıl hesaplandığı da belgelenmeli

✗ Güncellememek — pazar değişir, rakamlar da değişmelidir

📌 B2B Örnek                                                                                                                                             📌 B2C Örnek

B2B HR yazılımı: TAM 30M$ global. SAM: TR+UK, 50–500 çalışan = 72M$. SOM: 2 yılda %3 pay = 2,16M$. Bu üzerinden 3 satış temsilcisi ve bütçe planlandı.   B2C abonelik kutu: SAM: 25–40 yaş şehirli = 4M kişi. SOM: 1. yılda %1 = 40.000 abone. Bu hedef üzerine reklam bütçesi ve lojistik kapasitesi planlandı.

Sorumlu Rol             Zaman Çerçevesi                      Başarı Kriteri

Marketing Lead + CFO    Lansman öncesi — revizyon: yılda 1   TAM/SAM/SOM dokümanı hazır, SOM hedeflere bağlanmış

2.3 Pazar Trendleri ve Dinamikleri

TANIM & GENEL BAKIŞ

Trend analizi pazarın nereye gittiğini anlamaya yarar. Trendleri erken okuyan şirketler rakipten önce konumlanır — bu hem maliyet hem pazar payı avantajı demektir. Ancak hype ile gerçek trendi ayırt etmek kritiktir: gerçek trendi belirleyen para akışı, kullanıcı adoptasyonu ve kalıcı davranış değişimidir.

→ B2B                                                                                                                                                                                    → B2C

B2B'de teknoloji trendleri ve iş yapış biçimindeki değişimler öne çıkar. AI entegrasyonu, uzaktan çalışma, otomasyon. 'Müşterilerimin iş dünyası nasıl değişiyor?' sorusu merkezdedir.   B2C'de tüketici davranışı ve platform trendleri öne çıkar. Kısa form video, sosyal ticaret, sürdürülebilirlik. 'Hedef kitlem nasıl değişiyor ve nasıl satın alıyor?' sorusu merkezdedir.

Neden & Nasıl Yapılır?

Trend analizi dört katmanda yapılır: teknoloji trendleri (Product Hunt, TechCrunch), kullanıcı davranışı (Reddit, anketler), platform ve kanal değişimleri (platform resmi blogları) ve makro/sosyal değişimler (McKinsey, Dünya Bankası). Bu dört kaynağı birlikte değerlendirmek tek bir perspektifin kaçırdığı sinyalleri yakalar.

Action Steps

15. Sektörünüzle ilgili son 3 yılın önemli trendlerini listele

16. Her trend için 'hype mı, gerçek mi?' değerlendirmesi yap

17. Önümüzdeki 2 yılda etkili olacak 3 trendi belirle

18. Bu trendlerin ürün ve marketing stratejisine etkisini değerlendir

19. Aylık 'trend radar' toplantısı kur — herkes 1–2 sinyal getirsin

Checklist

✔ Son 3 yılın trendleri analiz edildi mi?

✔ Hype ile gerçek trend ayrıştırıldı mı?

✔ Trendlerin stratejiye etkisi değerlendirildi mi?

✔ Trend izleme rutini oluşturuldu mu?

Tool & Kaynaklar

Google Trends             Talep değişimini görmek için — hem trendi hem mevsimselliği anlar

CB Insights / PitchBook   Yatırım akışı — akıllı paranın gittiği yer büyüyen pazar sinyalidir

Product Hunt              Hangi kategorilerde yeni ürünler çıkıyor — pazarın yönünü gösterir

Reddit                    Gerçek kullanıcıların konuyu nasıl tartıştığını görmek için

Kaçınılması Gereken Hatalar

✗ Hype'ı trend sanmak — gerçek trendi belirleyen para akışı ve kalıcı davranış değişimidir

✗ Tek kaynağa dayanmak — birden fazla sinyal çapraz doğrulayın

✗ Trendleri izleyip aksiyona dönüştürmemek — stratejiye yansımıyorsa zaman israfıdır

📌 B2B Örnek                                                                                                                                                                                                           📌 B2C Örnek

B2B yazılım şirketi 2021'de AI destekli doküman işleme trendini verilerle doğruladı. ChatGPT patlaması öncesinde ürüne AI özellik ekledi. 2023'te rakipleri yakalamaya çalışırken o zaten 'AI-native' konumlanmıştı.   B2C güzellik markası 'clean beauty' trendini Google Trends + Reddit verisiyle doğruladı. 18 ayda formülasyonu değiştirdi. Trend ana akıma geçtiğinde kategoride otorite sahibiydi.

Sorumlu Rol             Zaman Çerçevesi          Başarı Kriteri

Marketing Lead          Çeyreklik trend raporu   Trend özeti ekiple paylaşılıyor, önemli trendler roadmap'e yansıyor

2.4 Rekabet Analizi

TANIM & GENEL BAKIŞ

Rekabet analizi rakipleri anlamaktan çok pazardaki boşlukları bulmak için yapılır. Rakipleri kopyalamak sizi takipçi yapar. Asıl değer rakibin neyi yapmadığını, neyi yanlış yaptığını görmektedir. Müşteri yorumlarından çıkarılan içgörüler — özellikle şikayetler — en değerli hammaddedir.

→ B2B                                                                                                                                                  → B2C

B2B'de G2, Capterra yorumları çok değerlidir. Rakiple karşılaştırıldığında nasıl kazandığınızı ve kaybettiğinizi bilmek satış verimliliğini artırır.   B2C'de tüketici algısı ve marka asosiyasyonları öne çıkar. Social listening araçları ve rakip ürün yorumları ana veri kaynağıdır.

Neden & Nasıl Yapılır?

Üç rakip tipini ele alın: doğrudan rakipler (aynı sorunu aynı yöntemle çözenler), dolaylı rakipler (farklı yöntemle aynı ihtiyacı karşılayanlar) ve substitute çözümler (müşterinin alternatif olarak kullandığı her şey). Her biri için fiyat, mesaj, kanal stratejisi ve müşteri şikayetlerini analiz edin.

Action Steps

20. 5–10 rakip belirle: direct + indirect + substitute

21. Her rakip için fiyat, hedef segment, ana mesaj, güçlü/zayıf yönler topla

22. Trustpilot, G2, Reddit'teki müşteri yorumlarını tara — tekrar eden şikayetleri listele

23. Meta Ads Library ile rakip reklam stratejisini analiz et

24. Rekabet matrisi oluştur ve 'rakip nerede boşluk bırakıyor?' sorusunu yanıtla

Checklist

✔ Direct, indirect ve substitute rakipler belirlendi mi?

✔ Müşteri yorumları incelendi mi?

✔ Rekabet matrisi oluşturuldu mu?

✔ Farklılaşma fırsatları belirlendi mi?

Tool & Kaynaklar

SimilarWeb           Rakip trafik hacmi ve kanal dağılımı

SEMrush / Ahrefs     Rakibin SEO stratejisi ve hedef anahtar kelimeleri

Meta Ads Library     Rakibin reklamları — ücretsiz, çok değerli

G2 / Trustpilot      Rakip ürün yorumları — şikayetler = fırsatlar

Kaçınılması Gereken Hatalar

✗ Rakipleri kopyalamak — analiz 'nerede boşluk var?' sorusu için yapılır

✗ Substitute rakipleri göz ardı etmek — 'neden hiçbir şey almıyor?' büyük fırsat sorusudur

✗ Rekabet obsesyonu — rakip analizi bilgilendirme içindir, yön belirleme için değil

📌 B2B Örnek                                                                                                                                                                                          📌 B2C Örnek

B2B CRM şirketi G2 yorumlarını taradı: en çok tekrar eden şikayet 'raporlama karmaşık'. Basit dashboard özelliğini öne çıkardı. Rakipten geçiş yapan müşterilerin %60'ı bunu karar nedeni gösterdi.   B2C spor giyim markası rakibin yorumlarında tekrar eden bulgu: 'artı beden yok'. Kapsayıcı beden aralığıyla konumlandı — ilk koleksiyonda %40 daha fazla beden seçeneği sundu.

Sorumlu Rol                   Zaman Çerçevesi         Başarı Kriteri

Marketing Lead + Ürün Ekibi   6 ayda 1 güncelleme     Güncel rekabet matrisi ekiple paylaşılmış

2.5 SWOT Analizi

TANIM & GENEL BAKIŞ

SWOT analizi tüm market research sürecinin stratejik özetidir. Doğru kullanıldığında aksiyon aldırır, yanlış kullanıldığında dekorasyona dönüşür. SWOT'un en büyük düşmanı genellik ve veriden kopukluktur: 'güçlü ekibimiz var' değil, 'NPS'imiz 72, sektör ortalaması 45' — işte bu bir SWOT maddesidir.

SWOT bir çerçeve değil, aksiyona dönüşen stratejik bir özettir.

Neden & Nasıl Yapılır?

Her boyut için en önemli 3–5 maddeyi seçin — uzun listeler odak yaratmaz. Her madde için veri veya kanıt bulun. Ardından SO/ST/WO/WT stratejileri oluşturun: güçlü yön + fırsat = büyüme stratejisi; zayıflık + tehdit = risk yönetimi stratejisi. SWOT çıktılarını OKR'lara bağlayın, aksi takdirde sadece tablo doldurmak olur.

Action Steps

25. Her boyut için en önemli 3–5 maddeyi seç ve veriyle destekle

26. SO/ST/WO/WT stratejileri oluştur

27. SWOT çıktılarını OKR'lara veya strateji planına bağla

28. Ekiple birlikte yap — tek kişinin görüşü değil

Checklist

✔ Her SWOT maddesi veriyle desteklendi mi?

✔ Generic ifadelerden kaçınıldı mı?

✔ Aksiyona bağlandı mı?

✔ Ekiple birlikte yapıldı mı?

Kaçınılması Gereken Hatalar

✗ Generic yazmak — 'güçlü ekip, inovatif ürün' hiçbir anlam taşımaz

✗ Veri kullanmamak — kanıtlanamayan SWOT maddesi hipotezdir, gerçek değil

✗ SWOT'u doldurup rafa kaldırmak — aksiyona bağlanmayan analiz zaman israfıdır

📌 B2B Örnek                                                                                                                                                                                                           📌 B2C Örnek

B2B otomasyon yazılımı: Güç = kurulum 2 gün (rakip 3 hafta). Zayıflık = düşük organik trafik. Fırsat = KOBİ segmentinde boşluk. Tehdit = no-code araçlar. SO stratejisi: hızlı kurulum özelliğini KOBİ'ye öne çıkar.   B2C organik gıda: Güç = sertifikalı ürün, NPS 78. Zayıflık = yalnızca online satış. Fırsat = clean beauty büyümesi. Tehdit = büyük markaların 'doğal' etiketi taklit etmesi. WO stratejisi: marketplace entegrasyonu.

Sorumlu Rol             Zaman Çerçevesi                    Başarı Kriteri

Marketing Lead + CEO    Yılda 1 — strateji planlamasında   SWOT aksiyonları OKR'lara yansımış

2.6 Pazar Fırsatları ve Boşluklar

TANIM & GENEL BAKIŞ

Bu bölüm tüm market research'ün en kritik çıktısıdır. Önceki beş bölümde toplanan bilgi tek bir soruya yanıt vermek için birleştirilir: 'Kazanabileceğimiz alan neresi?' Gerçek fırsatlar üç koşulu karşılar: gerçek bir problem var, yeterince iyi çözülmüyor ve siz bu sorunu çözebilecek kapasitedesiniz.

→ B2B                                                                                                                                                                                                      → B2C

B2B'de boşluklar genellikle şu formlarda çıkar: belirli sektöre özel çözüm eksikliği (vertical SaaS), entegrasyon boşlukları, enterprise araçların KOBİ için çok pahalı olması, onboarding karmaşıklığı.   B2C'de boşluklar şu formlarda çıkar: demografik segment ihmali, format boşluğu (video, mobil, abonelik), fiyat-erişim boşluğu veya kültürel-lokal uyumsuzluk.

Neden & Nasıl Yapılır?

Üç lens kullanın: müşteri şikayeti lensi (Trustpilot, G2, Reddit — tekrar eden şikayetler boşluk sinyalidir), rakip boşluğu lensi (rakiplerin kasıtlı veya kasıtsız hizmet vermediği segmentler) ve underserved segment lensi (mevcut çözümlerin tam hitap etmediği gruplar). Bulduğun boşluğu üç süzgeçten geçir: gerçek mi? çözülmemiş mi? sizin için mi?

Action Steps

29. Rakiplerin en çok şikayet aldığı 5 konuyu listele

30. Rakiplerin hizmet vermediği segmenti bul ve büyüklüğünü tahmin et

31. Fırsatları üç süzgeçten geçir

32. En güçlü 1–3 fırsatı ürün roadmap ve marketing stratejisine besle

33. Doğrulama testi planla — büyük yatırım öncesi önce kanıtla

Checklist

✔ Müşteri şikayeti analizi yapıldı mı?

✔ Fırsatlar üç süzgeçten geçirildi mi?

✔ Doğrulama testi planlandı mı?

Tool & Kaynaklar

Reddit                   Gerçek kullanıcı problemleri — 'keşke şöyle olsaydı' ifadeleri boşluk sinyalidir

Trustpilot / G2          Rakip şikayetleri — fırsat haritası çıkarmak için en verimli kaynak

AnswerThePublic          İnsanların sormakta olduğu sorular — yanıtlanmamış sorular = karşılanmamış ihtiyaç

Anket (Tally/Typeform)   Hedef segmentten doğrudan veri topla, varsayımı doğrula

Kaçınılması Gereken Hatalar

✗ Trendi fırsat sanmak — büyüyen pazar değil, o pazarda kazanılabilecek alan fırsattır

✗ Varsayıma dayalı boşluk tanımlamak — veri ve gerçek konuşmalar zorunludur

✗ Her boşluğu doldurmaya çalışmak — en güçlü 1–2 fırsata odaklan

📌 B2B Örnek                                                                                                                                                                   📌 B2C Örnek

B2B hukuk teknolojisi G2'de bulgu: 'Büyük firmalar için harika ama KOBİ için çok karmaşık.' 10 görüşmeyle doğrulandı. 3 aylık beta, ardından lansman — 1. yılda 200 müşteri.   B2C eğitim uygulaması Reddit'te bulgu: 'Çocuklar için İngilizce app hem çok oyun hem çok akademik — orta yol yok.' 200 kişilik anketle %67 onay. 'Eğlenceli ama ölçülebilir' konumlanmasıyla 1. ayda 8.000 indirme.

Sorumlu Rol                   Zaman Çerçevesi               Başarı Kriteri

Marketing Lead + Ürün Ekibi   Her yeni ürün ideası öncesi   Her ürün için boşluk dokümanı mevcut, doğrulama testi tamamlanmış`,
      },
    ],
  },
  {
    id: "pazar-analizi",
    num: "2",
    title: `PAZAR ANALİZİ`,
    subtitle: `Market Intelligence — TAM/SAM/SOM, trendler, rekabet, SWOT`,
    subsections: [
      {
        id: "2-1",
        title: `2.1 Pazar Genel Görünümü (Market Overview)`,
        content: `TANIM & GENEL BAKIŞ

Market overview, ürünün içinde konumlanacağı pazarın yapısını, sınırlarını ve işleyiş mantığını anlamaya yönelik en temel analizdir. Çoğu ekip üründen başlayıp pazarı sonradan anlamaya çalışır — bu büyük hatadır. Pazarı anlamadan yapılan positioning ya çok geniş ya da çok dar olur, her ikisi de büyümeyi engeller.

→ B2B                                                                                                                                                                                           → B2C

B2B'de pazar tanımı 'hangi sektöre, hangi büyüklükteki şirkete, hangi role satıyoruz?' sorularını yanıtlamalıdır. Vertikal odak çoğu zaman geniş pazara kıyasla çok daha hızlı büyüme sağlar.   B2C'de pazar tanımı tüketici davranışı ve demografik değişimlerle şekillenir. Davranışsal segmentler ve satın alma tetikleyicileri market overview'ın merkezinde olmalıdır.

Neden & Nasıl Yapılır?

Market overview üç katmanda analiz edilir: endüstri tanımı (ürün hangi kategoride, sınırlar nerede?), endüstri yapısı (rekabet nasıl, güç kimlerde?) ve pazar dinamikleri (pazar büyüyor mu, nereye gidiyor?). Porter'ın Beş Gücü — mevcut rakipler, yeni girenler, ikame ürünler, alıcı gücü, tedarikçi gücü — bu analizde güçlü bir çerçeve sunar.

Action Steps

5.  Pazar kategorisini spesifik tanımla — 'yazılım' değil, 'B2B proje yönetim yazılımı'

6.  Alt segmentleri çıkar ve her birinin büyüklüğünü tahmin et

7.  Pazarın son 3 yıllık büyüme hızını araştır

8.  Porter'ın Beş Gücü ile pazarın çekiciliğini değerlendir

9.  Bulguları tek bir 'Pazar Özeti' belgesine dönüştür

Checklist

✔ Pazar kategorisi net ve spesifik tanımlandı mı?

✔ Alt segmentler haritalandı mı?

✔ Büyüme trendi belirlendi mi?

✔ Rekabet yoğunluğu değerlendirildi mi?

Tool & Kaynaklar

Statista             Pazar büyüklüğü ve büyüme oranları için temel kaynak

IBISWorld            Sektör yapısı ve rekabet ortamı için kapsamlı raporlar

Crunchbase           Yatırım akışı — pazarın nereye gittiğinin en güçlü sinyali

Google Trends        Kategorilere olan talebin zaman içindeki değişimi

Reddit & Forumlar    Gerçek kullanıcıların pazarı nasıl gördüğü

Kaçınılması Gereken Hatalar

✗ Pazarı çok geniş tanımlamak — 'yazılım pazarındayız' strateji değil, belirsizliktir

✗ Yalnızca masa başı araştırma yapmak — gerçek insanlarla konuşmak zorunludur

✗ Analizi bir kez yapıp güncellememek — pazar değişir, analiz de değişmelidir

📌 B2B Örnek                                                                                                                                                                   📌 B2C Örnek

HR yazılım pazarına girecek şirket alt segment analizinde 'uzak çalışan ekipler için saat takibi' boşluğunu buldu. Genel HRM yerine bu nişe odaklandı — 18 ayda 400 müşteri.   Fitness uygulaması geniş 'sağlık pazarı' yerine davranışsal analiz yaptı: '35–50 yaş, 15–20 dk antrenman arayan ebeveynler' segmentini buldu. Niş odaklanmayla 3 ayda 25.000 kullanıcı.

Sorumlu Rol                   Zaman Çerçevesi                           Başarı Kriteri

Marketing Lead + Ürün Ekibi   Her lansman öncesi — revizyon: 6 ayda 1   Pazar tanımı ve 3 alt segment dokümante edilmiş`,
      },
      {
        id: "2-2",
        title: `2.2 Pazar Büyüklüğü (TAM, SAM, SOM)`,
        content: `TANIM & GENEL BAKIŞ

Market size analizi işin gerçekte ne kadar büyüyebileceğini gösterir. OKR'lar ve kaynak planlaması TAM'a değil SOM'a göre yapılmalıdır — 'pazarın %1'ini alırız' mantığı gerçekçi değildir.

TAM                  Teorik maksimum pazar — heyecan verici ama yanıltıcı, hiçbir şirket tamamını alamaz

SAM                  Ürünün gerçekçi hitap ettiği dilim — marketing ve satışın hedef aldığı yer

SOM                  Kısa-orta vadede kazanılabilecek pay — OKR ve bütçe buraya göre kurulur

Bottom-up hesaplama her zaman top-down'dan güvenilirdir. Örnek: UK'deki 10–50 çalışanlı SaaS şirketleri = 8.000 şirket × 3.600$ yıllık ödeme = 28,8M$ SAM. İlk 2 yılda %5 pay = 1,44M$ SOM. Bu rakam üzerinden ekip ve bütçe planlanır.

→ B2B                                                                                                                                        → B2C

B2B'de SAM hesabı çok keskin yapılabilir. LinkedIn gibi araçlarla hedef segmentin şirket ve karar verici sayısını doğrudan sayabilirsiniz.   B2C'de SAM demografik ve psikografik verilerle tahmin edilir. Benzer ürünlerin penetrasyon oranları SOM için iyi kıyaslama noktası sunar.

Action Steps

10. Hedef müşteri segmentini net tanımla — sektör, büyüklük, coğrafya, rol

11. Bottom-up hesaplama yap: segment büyüklüğü × ortalama gelir = SAM

12. Gerçekçi SOM hesapla — rakip penetrasyon oranlarına bak

13. Tüm varsayımları belgelenir hale getir

14. SOM'u OKR ve bütçe planlamasıyla ilişkilendir

Checklist

✔ TAM/SAM/SOM ayrımı yapıldı mı?

✔ Bottom-up hesaplama kullanıldı mı?

✔ Varsayımlar belgelendi mi?

✔ SOM büyüme hedefleriyle ilişkilendirildi mi?

Tool & Kaynaklar

Statista & IBISWorld       TAM için sektörel büyüklük verileri — birden fazla kaynak kullan

LinkedIn Sales Navigator   B2B SAM için hedef segmentin şirket ve karar verici sayısını say

Google Ads Planner         B2C'de belirli arama terimlerinin aylık hacmi — demand proxy

SimilarWeb                 Rakip trafik hacmi — pazar talebinin dolaylı göstergesi

Kaçınılması Gereken Hatalar

✗ TAM'a göre hedef koymak — OKR'larını SOM'a göre yap

✗ Varsayımları gizlemek — 'SAM 50M$' yetmez, nasıl hesaplandığı da belgelenmeli

✗ Güncellememek — pazar değişir, rakamlar da değişmelidir

📌 B2B Örnek                                                                                                                                             📌 B2C Örnek

B2B HR yazılımı: TAM 30M$ global. SAM: TR+UK, 50–500 çalışan = 72M$. SOM: 2 yılda %3 pay = 2,16M$. Bu üzerinden 3 satış temsilcisi ve bütçe planlandı.   B2C abonelik kutu: SAM: 25–40 yaş şehirli = 4M kişi. SOM: 1. yılda %1 = 40.000 abone. Bu hedef üzerine reklam bütçesi ve lojistik kapasitesi planlandı.

Sorumlu Rol             Zaman Çerçevesi                      Başarı Kriteri

Marketing Lead + CFO    Lansman öncesi — revizyon: yılda 1   TAM/SAM/SOM dokümanı hazır, SOM hedeflere bağlanmış`,
      },
      {
        id: "2-3",
        title: `2.3 Pazar Trendleri ve Dinamikleri`,
        content: `TANIM & GENEL BAKIŞ

Trend analizi pazarın nereye gittiğini anlamaya yarar. Trendleri erken okuyan şirketler rakipten önce konumlanır — bu hem maliyet hem pazar payı avantajı demektir. Ancak hype ile gerçek trendi ayırt etmek kritiktir: gerçek trendi belirleyen para akışı, kullanıcı adoptasyonu ve kalıcı davranış değişimidir.

→ B2B                                                                                                                                                                                    → B2C

B2B'de teknoloji trendleri ve iş yapış biçimindeki değişimler öne çıkar. AI entegrasyonu, uzaktan çalışma, otomasyon. 'Müşterilerimin iş dünyası nasıl değişiyor?' sorusu merkezdedir.   B2C'de tüketici davranışı ve platform trendleri öne çıkar. Kısa form video, sosyal ticaret, sürdürülebilirlik. 'Hedef kitlem nasıl değişiyor ve nasıl satın alıyor?' sorusu merkezdedir.

Neden & Nasıl Yapılır?

Trend analizi dört katmanda yapılır: teknoloji trendleri (Product Hunt, TechCrunch), kullanıcı davranışı (Reddit, anketler), platform ve kanal değişimleri (platform resmi blogları) ve makro/sosyal değişimler (McKinsey, Dünya Bankası). Bu dört kaynağı birlikte değerlendirmek tek bir perspektifin kaçırdığı sinyalleri yakalar.

Action Steps

15. Sektörünüzle ilgili son 3 yılın önemli trendlerini listele

16. Her trend için 'hype mı, gerçek mi?' değerlendirmesi yap

17. Önümüzdeki 2 yılda etkili olacak 3 trendi belirle

18. Bu trendlerin ürün ve marketing stratejisine etkisini değerlendir

19. Aylık 'trend radar' toplantısı kur — herkes 1–2 sinyal getirsin

Checklist

✔ Son 3 yılın trendleri analiz edildi mi?

✔ Hype ile gerçek trend ayrıştırıldı mı?

✔ Trendlerin stratejiye etkisi değerlendirildi mi?

✔ Trend izleme rutini oluşturuldu mu?

Tool & Kaynaklar

Google Trends             Talep değişimini görmek için — hem trendi hem mevsimselliği anlar

CB Insights / PitchBook   Yatırım akışı — akıllı paranın gittiği yer büyüyen pazar sinyalidir

Product Hunt              Hangi kategorilerde yeni ürünler çıkıyor — pazarın yönünü gösterir

Reddit                    Gerçek kullanıcıların konuyu nasıl tartıştığını görmek için

Kaçınılması Gereken Hatalar

✗ Hype'ı trend sanmak — gerçek trendi belirleyen para akışı ve kalıcı davranış değişimidir

✗ Tek kaynağa dayanmak — birden fazla sinyal çapraz doğrulayın

✗ Trendleri izleyip aksiyona dönüştürmemek — stratejiye yansımıyorsa zaman israfıdır

📌 B2B Örnek                                                                                                                                                                                                           📌 B2C Örnek

B2B yazılım şirketi 2021'de AI destekli doküman işleme trendini verilerle doğruladı. ChatGPT patlaması öncesinde ürüne AI özellik ekledi. 2023'te rakipleri yakalamaya çalışırken o zaten 'AI-native' konumlanmıştı.   B2C güzellik markası 'clean beauty' trendini Google Trends + Reddit verisiyle doğruladı. 18 ayda formülasyonu değiştirdi. Trend ana akıma geçtiğinde kategoride otorite sahibiydi.

Sorumlu Rol             Zaman Çerçevesi          Başarı Kriteri

Marketing Lead          Çeyreklik trend raporu   Trend özeti ekiple paylaşılıyor, önemli trendler roadmap'e yansıyor`,
      },
      {
        id: "2-4",
        title: `2.4 Rekabet Analizi`,
        content: `TANIM & GENEL BAKIŞ

Rekabet analizi rakipleri anlamaktan çok pazardaki boşlukları bulmak için yapılır. Rakipleri kopyalamak sizi takipçi yapar. Asıl değer rakibin neyi yapmadığını, neyi yanlış yaptığını görmektedir. Müşteri yorumlarından çıkarılan içgörüler — özellikle şikayetler — en değerli hammaddedir.

→ B2B                                                                                                                                                  → B2C

B2B'de G2, Capterra yorumları çok değerlidir. Rakiple karşılaştırıldığında nasıl kazandığınızı ve kaybettiğinizi bilmek satış verimliliğini artırır.   B2C'de tüketici algısı ve marka asosiyasyonları öne çıkar. Social listening araçları ve rakip ürün yorumları ana veri kaynağıdır.

Neden & Nasıl Yapılır?

Üç rakip tipini ele alın: doğrudan rakipler (aynı sorunu aynı yöntemle çözenler), dolaylı rakipler (farklı yöntemle aynı ihtiyacı karşılayanlar) ve substitute çözümler (müşterinin alternatif olarak kullandığı her şey). Her biri için fiyat, mesaj, kanal stratejisi ve müşteri şikayetlerini analiz edin.

Action Steps

20. 5–10 rakip belirle: direct + indirect + substitute

21. Her rakip için fiyat, hedef segment, ana mesaj, güçlü/zayıf yönler topla

22. Trustpilot, G2, Reddit'teki müşteri yorumlarını tara — tekrar eden şikayetleri listele

23. Meta Ads Library ile rakip reklam stratejisini analiz et

24. Rekabet matrisi oluştur ve 'rakip nerede boşluk bırakıyor?' sorusunu yanıtla

Checklist

✔ Direct, indirect ve substitute rakipler belirlendi mi?

✔ Müşteri yorumları incelendi mi?

✔ Rekabet matrisi oluşturuldu mu?

✔ Farklılaşma fırsatları belirlendi mi?

Tool & Kaynaklar

SimilarWeb           Rakip trafik hacmi ve kanal dağılımı

SEMrush / Ahrefs     Rakibin SEO stratejisi ve hedef anahtar kelimeleri

Meta Ads Library     Rakibin reklamları — ücretsiz, çok değerli

G2 / Trustpilot      Rakip ürün yorumları — şikayetler = fırsatlar

Kaçınılması Gereken Hatalar

✗ Rakipleri kopyalamak — analiz 'nerede boşluk var?' sorusu için yapılır

✗ Substitute rakipleri göz ardı etmek — 'neden hiçbir şey almıyor?' büyük fırsat sorusudur

✗ Rekabet obsesyonu — rakip analizi bilgilendirme içindir, yön belirleme için değil

📌 B2B Örnek                                                                                                                                                                                          📌 B2C Örnek

B2B CRM şirketi G2 yorumlarını taradı: en çok tekrar eden şikayet 'raporlama karmaşık'. Basit dashboard özelliğini öne çıkardı. Rakipten geçiş yapan müşterilerin %60'ı bunu karar nedeni gösterdi.   B2C spor giyim markası rakibin yorumlarında tekrar eden bulgu: 'artı beden yok'. Kapsayıcı beden aralığıyla konumlandı — ilk koleksiyonda %40 daha fazla beden seçeneği sundu.

Sorumlu Rol                   Zaman Çerçevesi         Başarı Kriteri

Marketing Lead + Ürün Ekibi   6 ayda 1 güncelleme     Güncel rekabet matrisi ekiple paylaşılmış`,
      },
      {
        id: "2-5",
        title: `2.5 SWOT Analizi`,
        content: `TANIM & GENEL BAKIŞ

SWOT analizi tüm market research sürecinin stratejik özetidir. Doğru kullanıldığında aksiyon aldırır, yanlış kullanıldığında dekorasyona dönüşür. SWOT'un en büyük düşmanı genellik ve veriden kopukluktur: 'güçlü ekibimiz var' değil, 'NPS'imiz 72, sektör ortalaması 45' — işte bu bir SWOT maddesidir.

SWOT bir çerçeve değil, aksiyona dönüşen stratejik bir özettir.

Neden & Nasıl Yapılır?

Her boyut için en önemli 3–5 maddeyi seçin — uzun listeler odak yaratmaz. Her madde için veri veya kanıt bulun. Ardından SO/ST/WO/WT stratejileri oluşturun: güçlü yön + fırsat = büyüme stratejisi; zayıflık + tehdit = risk yönetimi stratejisi. SWOT çıktılarını OKR'lara bağlayın, aksi takdirde sadece tablo doldurmak olur.

Action Steps

25. Her boyut için en önemli 3–5 maddeyi seç ve veriyle destekle

26. SO/ST/WO/WT stratejileri oluştur

27. SWOT çıktılarını OKR'lara veya strateji planına bağla

28. Ekiple birlikte yap — tek kişinin görüşü değil

Checklist

✔ Her SWOT maddesi veriyle desteklendi mi?

✔ Generic ifadelerden kaçınıldı mı?

✔ Aksiyona bağlandı mı?

✔ Ekiple birlikte yapıldı mı?

Kaçınılması Gereken Hatalar

✗ Generic yazmak — 'güçlü ekip, inovatif ürün' hiçbir anlam taşımaz

✗ Veri kullanmamak — kanıtlanamayan SWOT maddesi hipotezdir, gerçek değil

✗ SWOT'u doldurup rafa kaldırmak — aksiyona bağlanmayan analiz zaman israfıdır

📌 B2B Örnek                                                                                                                                                                                                           📌 B2C Örnek

B2B otomasyon yazılımı: Güç = kurulum 2 gün (rakip 3 hafta). Zayıflık = düşük organik trafik. Fırsat = KOBİ segmentinde boşluk. Tehdit = no-code araçlar. SO stratejisi: hızlı kurulum özelliğini KOBİ'ye öne çıkar.   B2C organik gıda: Güç = sertifikalı ürün, NPS 78. Zayıflık = yalnızca online satış. Fırsat = clean beauty büyümesi. Tehdit = büyük markaların 'doğal' etiketi taklit etmesi. WO stratejisi: marketplace entegrasyonu.

Sorumlu Rol             Zaman Çerçevesi                    Başarı Kriteri

Marketing Lead + CEO    Yılda 1 — strateji planlamasında   SWOT aksiyonları OKR'lara yansımış`,
      },
      {
        id: "2-6",
        title: `2.6 Pazar Fırsatları ve Boşluklar`,
        content: `TANIM & GENEL BAKIŞ

Bu bölüm tüm market research'ün en kritik çıktısıdır. Önceki beş bölümde toplanan bilgi tek bir soruya yanıt vermek için birleştirilir: 'Kazanabileceğimiz alan neresi?' Gerçek fırsatlar üç koşulu karşılar: gerçek bir problem var, yeterince iyi çözülmüyor ve siz bu sorunu çözebilecek kapasitedesiniz.

→ B2B                                                                                                                                                                                                      → B2C

B2B'de boşluklar genellikle şu formlarda çıkar: belirli sektöre özel çözüm eksikliği (vertical SaaS), entegrasyon boşlukları, enterprise araçların KOBİ için çok pahalı olması, onboarding karmaşıklığı.   B2C'de boşluklar şu formlarda çıkar: demografik segment ihmali, format boşluğu (video, mobil, abonelik), fiyat-erişim boşluğu veya kültürel-lokal uyumsuzluk.

Neden & Nasıl Yapılır?

Üç lens kullanın: müşteri şikayeti lensi (Trustpilot, G2, Reddit — tekrar eden şikayetler boşluk sinyalidir), rakip boşluğu lensi (rakiplerin kasıtlı veya kasıtsız hizmet vermediği segmentler) ve underserved segment lensi (mevcut çözümlerin tam hitap etmediği gruplar). Bulduğun boşluğu üç süzgeçten geçir: gerçek mi? çözülmemiş mi? sizin için mi?

Action Steps

29. Rakiplerin en çok şikayet aldığı 5 konuyu listele

30. Rakiplerin hizmet vermediği segmenti bul ve büyüklüğünü tahmin et

31. Fırsatları üç süzgeçten geçir

32. En güçlü 1–3 fırsatı ürün roadmap ve marketing stratejisine besle

33. Doğrulama testi planla — büyük yatırım öncesi önce kanıtla

Checklist

✔ Müşteri şikayeti analizi yapıldı mı?

✔ Fırsatlar üç süzgeçten geçirildi mi?

✔ Doğrulama testi planlandı mı?

Tool & Kaynaklar

Reddit                   Gerçek kullanıcı problemleri — 'keşke şöyle olsaydı' ifadeleri boşluk sinyalidir

Trustpilot / G2          Rakip şikayetleri — fırsat haritası çıkarmak için en verimli kaynak

AnswerThePublic          İnsanların sormakta olduğu sorular — yanıtlanmamış sorular = karşılanmamış ihtiyaç

Anket (Tally/Typeform)   Hedef segmentten doğrudan veri topla, varsayımı doğrula

Kaçınılması Gereken Hatalar

✗ Trendi fırsat sanmak — büyüyen pazar değil, o pazarda kazanılabilecek alan fırsattır

✗ Varsayıma dayalı boşluk tanımlamak — veri ve gerçek konuşmalar zorunludur

✗ Her boşluğu doldurmaya çalışmak — en güçlü 1–2 fırsata odaklan

📌 B2B Örnek                                                                                                                                                                   📌 B2C Örnek

B2B hukuk teknolojisi G2'de bulgu: 'Büyük firmalar için harika ama KOBİ için çok karmaşık.' 10 görüşmeyle doğrulandı. 3 aylık beta, ardından lansman — 1. yılda 200 müşteri.   B2C eğitim uygulaması Reddit'te bulgu: 'Çocuklar için İngilizce app hem çok oyun hem çok akademik — orta yol yok.' 200 kişilik anketle %67 onay. 'Eğlenceli ama ölçülebilir' konumlanmasıyla 1. ayda 8.000 indirme.

Sorumlu Rol                   Zaman Çerçevesi               Başarı Kriteri

Marketing Lead + Ürün Ekibi   Her yeni ürün ideası öncesi   Her ürün için boşluk dokümanı mevcut, doğrulama testi tamamlanmış`,
      },
    ],
  },
  {
    id: "musteri-analizi",
    num: "3",
    title: `MÜŞTERİ ANALİZİ`,
    subtitle: `Customer Intelligence — ICP, persona, satın alma davranışı`,
    subsections: [
      {
        id: "3-1",
        title: `3.1 Hedef Kitle Segmentasyonu`,
        content: `TANIM & GENEL BAKIŞ

Pazarı tek bir kitle olarak görmek marketing'in en klasik ve en pahalı hatasıdır. Herkese hitap etmek aslında kimseye net değer sunamamaktır. Segmentasyon bir analiz değil, stratejik bir karar mekanizmasıdır: hangi müşteriye odaklanacaksın, hangisini bilinçli olarak dışarıda bırakacaksın?

En iyi odaklanan kazanır. Gerçek rekabet ürünler arasında değil, odaklanma seviyeleri arasında yaşanır.

→ B2B                                                                                                                                                                                                    → B2C

B2B'de segmentasyon: sektör, şirket büyüklüğü, karar verici rolü ve teknoloji olgunluğu eksenlerinde yapılır. En kritik katman needs-based segmentasyon — satın alma kararı problem üzerinden verilir.   B2C'de segmentasyon: demografik, davranışsal ve psikografik eksenlerinde yapılır. Yaşam tarzı ve satın alma tetikleyicileri demografiden çok daha belirleyicidir.

Neden & Nasıl Yapılır?

Segmentasyon dört katmanda yapılır: demografik (kim oldukları), davranışsal (nasıl davrandıkları), psikografik (neye inandıkları) ve needs-based (hangi problemi çözdükleri). Mevcut müşteri datasından başlayın, benzer davranışlara göre gruplayın, her grubun ana problemini belirleyin ve en yüksek potansiyelli segmenti önceliklendirin.

Action Steps

1.  Mevcut müşteri datasını çıkar, davranış örüntülerine göre gruplandır

2.  Her segmentin ana problemini tek cümleyle tanımla

3.  Segmentleri büyüklük ve elde edilebilirlik açısından puanla

4.  Birincil ve ikincil segmenti seç — tümünü hedefleme

5.  Seçimi ekiple paylaş ve tüm kanalları buna göre hizala

Checklist

✔ Segmentler net ayrıldı mı, her birinin problemi farklı mı?

✔ Önceliklendirme yapıldı mı?

✔ Tüm ekip aynı segmenti hedefliyor mu?

Tool & Kaynaklar

Google Analytics      Davranış analizi — kim nasıl geziyor, nerede çıkıyor

CRM datası            Mevcut müşteri profili ve satın alma örüntüleri

Meta / LinkedIn Ads   Hedef kitle büyüklük tahmini için audience breakdown

Hotjar                Kullanıcı davranışı haritası — gerçek tıklama ve scroll verileri

Kaçınılması Gereken Hatalar

✗ Herkesi hedeflemek — 'geniş net at, çok balık tut' stratejisi B2B'de işlemez

✗ Sadece demografiye bakmak — yaş ve lokasyon satın alma kararını belirlemez, problem belirler

✗ Segmentleri yüzeysel ayırmak — 'KOBİ' segment değil, başlangıç noktasıdır

📌 B2B Örnek                                                                                                                                                                                         📌 B2C Örnek

CRM datası analizi yapıldı, en hızlı kapanan müşterilerin 10–50 çalışanlı SaaS şirketleri olduğu görüldü. Bu segment birincil ICP olarak seçildi, tüm kanal ve mesajlaşma buna göre revize edildi.   Anket verisi analizi yapıldı, en yüksek LTV'nin 28–35 yaş, şehirde yaşayan, çocuk sahibi annelerde olduğu görüldü. Tüm sosyal medya içeriği ve reklam hedefleme bu segmente döndü.

Sorumlu Rol             Zaman Çerçevesi                       Başarı Kriteri

Marketing Lead          Lansman öncesi — revizyon: 6 ayda 1   3–5 segment tanımlı, her birinin problemi yazılı`,
      },
      {
        id: "3-2",
        title: `3.2 İdeal Müşteri Profili (ICP)`,
        content: `TANIM & GENEL BAKIŞ

ICP 'müşteri kim olabilir?' sorusunun değil, 'en doğru müşteri kimdir?' sorusunun cevabıdır. Her müşteri eşit değildir — bazıları daha hızlı satın alır, daha az maliyet yaratır, daha uzun kalır. ICP bu yüksek kaliteli müşterilerin ortak noktasını tanımlar ve şirketin odağını buraya çeker.

ICP yoksa growth kaotiktir: marketing pahalılaşır, satış zorlaşır, ürün yanlış yönde gelişir.

→ B2B                                                                                                                                                                                  → B2C

B2B ICP: firmographic (sektör, çalışan sayısı, gelir, coğrafya) + karar verici profili (rol, sorumluluk, hedef, engel) + satın alma mekanizması (döngü süresi, bütçe, onay zinciri).   B2C ICP: demografik + psikografik + davranışsal. Özellikle 'tetikleyici olay' kritiktir — bu kullanıcıyı ürüne yönlendiren hayat olayı veya duygu durumu nedir?

Neden & Nasıl Yapılır?

ICP oluşturmak için en iyi müşterileri inceleyin: en yüksek ödeme yapan, en uzun kalan, en az problem çıkaran, en hızlı karar veren müşterilerin ortak özelliklerini çıkarın. Bu analiz tahmine değil, gerçek veriye dayanmalıdır. ICP'yi masa başında değil, veriden çıkarın.

Action Steps

6.  CRM'den en iyi müşteri listesini çıkar — LTV, churn, NPS kriterlerine göre

7.  Bu müşterilerin ortak firmographic ve behavioral özelliklerini listele

8.  Karar verici rolünü ve satın alma sürecini tanımla

9.  ICP dokümanını yaz ve satış ekibiyle birlikte gözden geçir

10. ICP'ye uymayan leade 'neden hayır' diyebilmek için kırmızı bayrakları belirle

Checklist

✔ ICP veriye dayalı mı — hayali değil mi?

✔ Satış ekibi aynı ICP tanımını kullanıyor mu?

✔ Kırmızı bayraklar belirlendi mi?

Tool & Kaynaklar

CRM (HubSpot/Pipedrive)   Müşteri datası — kim ödüyor, kim kalıyor, kim problem çıkarıyor

Stripe / ödeme verisi     LTV ve ödeme davranışı analizi

LinkedIn                  B2B'de şirket ve karar verici bilgisi doğrulama

Müşteri görüşmeleri       Sayısal verinin açıklayamadığı 'neden' sorusunu yanıtlar

Kaçınılması Gereken Hatalar

✗ Hayali ICP yazmak — 'inovatif tech şirketleri' gibi ifadeler operasyonel değildir

✗ Herkesi ICP saymak — odak olmadan edinim maliyeti katlanır

✗ ICP'yi güncellemek — şirket büyüdükçe ideal müşteri profili değişir

📌 B2B Örnek                                                                                                                                                        📌 B2C Örnek

En iyi 50 müşteri analizi yapıldı: %80'i UK merkezli, 10–30 çalışanlı, founder led SaaS şirketiydi. ICP dokümanı buna göre yazıldı. Sonraki 3 ayda CAC %28 düştü.   Abonelik dönüşüm analizi yapıldı: en yüksek LTV segment 'yeni ev alan, 30–40 yaş çift' olarak belirlendi. Tüm Facebook reklam hedeflemesi bu tetikleyici olaya döndü.

Sorumlu Rol                   Zaman Çerçevesi                    Başarı Kriteri

Marketing Lead + Sales Lead   İlk 60 gün — revizyon: çeyreklik   ICP yazılı, satış ve marketing aynı tanımı kullanıyor`,
      },
      {
        id: "3-3",
        title: `3.3 Müşteri Persona'ları`,
        content: `TANIM & GENEL BAKIŞ

ICP kime satacağını söyler, persona nasıl satacağını öğretir. Persona müşterinin zihnine girmektir. İnsanlar mantıkla değil çoğunlukla duygu ve algıyla karar verir — güven, korku, zaman baskısı, sosyal kanıt. Persona bu görünmez karar mekanizmalarını görünür kılar ve marketing mesajını keskinleştirir.

→ B2B                                                                                                                                                                                                         → B2C

B2B'de çoklu persona kritiktir: aynı şirkette karar verici (bütçe sahibi), influencer (teknik değerlendirici) ve kullanıcı (günlük kullanan) farklı motivasyonlara sahiptir. Her birine ayrı mesaj gerekir.   B2C'de persona duygusal tetikleyiciler ve yaşam tarzı etrafında şekillenir. 'Bu ürün benim için mi?' sorusunu saniyeler içinde yanıtlatmak gerekir.

Neden & Nasıl Yapılır?

Her persona şu bileşenleri içermelidir: hedefler (ne elde etmek istiyor?), problemler (ne engelliyor?), motivasyonlar (ne harekete geçiriyor?), korkular (ne durduruyor?) ve itirazlar (neden hayır diyebilir?). Persona gerçek veriye — görüşme, anket, CRM — dayanmalıdır. Hayali persona hazırlamak zaman israfıdır.

Action Steps

11. En iyi müşterilerden 5–8 kişiyle 30 dakikalık derinlemesine görüşme yap

12. Görüşmelerden tekrar eden ifadeleri ve duyguları listele

13. 3–4 persona oluştur — her biri farklı motivasyon ve problemi temsil etsin

14. Her persona için 'bu kişiye nasıl konuşuruz?' mesaj yönünü belirle

15. İçerik ve kanal stratejisini persona'lara bağla

Checklist

✔ Her persona gerçek veriye dayalı mı?

✔ Her persona için ayrı mesaj yönü var mı?

✔ İçerik üretimi persona'ya göre yapılıyor mu?

Tool & Kaynaklar

Müşteri görüşmeleri       En zengin kaynak — doğrudan ağızdan duyulan dil ve motivasyonlar

Reddit / forum taraması   Hedef kitlenin gerçek diliyle konuştuğu ortam

Hotjar / FullStory        Davranışsal veri — söyledikleri değil, yaptıkları

Survey (Tally/Typeform)   Büyük örneklemde hipotez doğrulama

Kaçınılması Gereken Hatalar

✗ Hayali persona oluşturmak — 'Meşgul Ahmet, 35, startup kurucu' gerçek değilse değersizdir

✗ Persona oluşturup kullanmamak — içerik üretilirken 'bu hangi persona için?' sorusu sorulmalı

✗ Çok fazla persona — 3–4 derinlemesine iyi, 10 yüzeysel kötüdür

📌 B2B Örnek                                                                                                                                                                                                                      📌 B2C Örnek

Satış görüşmelerinden çıkan tekrar eden itiraz: 'Şu an zamanım yok, sonra bakarım.' Bu CFO persona'sının korkusuydu. Mesajlaşmaya 'kurulum 2 günde tamamlanır, ekibinizin zamanını almaz' eklendi — demo kabul oranı %40 arttı.   Görüşmelerden çıkan bulgu: kullanıcıların %65'i ürünü 'rakibime karşı geride kalmamak için' satın aldı. Tüm reklam kreatiflerine FOMO öğesi eklendi — conversion %22 arttı.

Sorumlu Rol             Zaman Çerçevesi                  Başarı Kriteri

Marketing Lead          İlk 60 gün — revizyon: yılda 1   3–4 persona dokümante edilmiş, içerik üretiminde aktif kullanılıyor`,
      },
      {
        id: "3-4",
        title: `3.4 Müşteri İhtiyaçları ve Pain Point'ler`,
        content: `TANIM & GENEL BAKIŞ

Marketing'in özü ürün anlatmak değil, problem anlatmaktır. Müşteri ürün satın almaz — probleminin çözümünü satın alır. Çoğu şirket burada hata yapar: feature anlatır, teknik detay verir ama müşterinin yaşadığı problemi yeterince net ortaya koyamaz. Sonuç: doğru ürün yanlış mesajla ulaşır ve satmaz.

İyi marketing müşterinin problemini müşteriden daha iyi anlatabilen marketing'dir.

→ B2B                                                                                                                                                                                                                                                                     → B2C

B2B'de pain point'ler genellikle operasyonel (süreç verimsizlikleri), finansal (maliyet veya gelir kaybı) veya stratejik (rekabette geride kalma) kategorilerde olur. Karar vericinin pain point'i ile kullanıcının pain point'i farklıdır — ikisini de bilmek gerekir.   B2C'de pain point'ler çoğunlukla duygusal veya kimlik odaklıdır. 'Bu ürün benim değerlerimi yansıtıyor mu?', 'Bu benim hayatımı kolaylaştırıyor mu?' soruları merkezde olur.

Neden & Nasıl Yapılır?

Pain point'leri bulmak için iki kaynak kritiktir: müşterinin kendi sözleri (görüşme, yorum, şikayet) ve davranışsal veri (nerede çıkıyor, nerede takılıyor, ne soruyor). Bu iki kaynağı birleştirince hem sorunun ne olduğunu hem de ne kadar acı verdiğini anlarsınız. Pain point önceliklendirilmeli: hangi sorun en sık tekrarlıyor ve en büyük acıyı veriyor?

Action Steps

16. Destek ticket'larını, müşteri e-postalarını ve yorumlarını tara — tekrar eden ifadeleri listele

17. Rakip ürünlerin 1 yıldızlı yorumlarını oku — rakibin çözemediği problem senin fırsatın

18. En az 10 müşteriyle 'şu an nasıl çözüyorsun?' sorusuyla görüşme yap

19. Problemleri kategorize et ve sıklık × şiddet matrisine yerleştir

20. Top 3 pain point'i mesajlaşma stratejisine ve value proposition'a besle

Checklist

✔ Pain point'ler gerçek veriye dayalı mı — varsayım değil?

✔ Önceliklendirildi mi?

✔ Mesajlaşmaya yansıdı mı?

Tool & Kaynaklar

Trustpilot / G2 / App Store   Rakip ve kendi ürün şikayetleri — en dürüst veri kaynağı

Destek ticket sistemi         Tekrar eden sorular = en büyük pain point haritası

Hotjar session recording      Kullanıcının nerede takıldığını görmek — söylenen değil, yaşanan

SparkToro                     Hedef kitlenin hangi içerikleri okuduğu — ilgi alanı ve endişeleri

Kaçınılması Gereken Hatalar

✗ Varsayıma dayalı pain point tanımlamak — 'sanırım kullanıcılar şunu istiyor' strateji değildir

✗ Semptomu problem sanmak — 'yazılım yavaş' semptomdur, 'ekip verimsiz' gerçek problemdir

✗ Tek pain point mesajı — farklı segmentlerin farklı problemleri olabilir

📌 B2B Örnek                                                                                                                                                                                          📌 B2C Örnek

Destek ticketları tarandı: en sık sorulan 3 sorunun hepsi onboarding süreciyle ilgiliydi. Landing page'e '48 saatte kurulum, dedicated onboarding desteği' eklendi — trial-to-paid oranı %35 arttı.   App Store yorumları tarandı: 'Güzel uygulama ama her seferinde şifre girmek zorunda kalıyorum' şikayeti 47 kez tekrarlanıyordu. Biometrik giriş eklendi, rating`,
      },
      {
        id: "3-2",
        title: `3.2'den 4.6'ya çıktı.`,
        content: `Sorumlu Rol                   Zaman Çerçevesi                  Başarı Kriteri

Marketing Lead + Ürün Ekibi   Sürekli — çeyreklik güncelleme   Top 5 pain point listesi güncel ve mesajlaşmaya yansımış`,
      },
      {
        id: "3-5",
        title: `3.5 Müşteri Davranışı ve Karar Faktörleri`,
        content: `TANIM & GENEL BAKIŞ

Müşteriler söylediklerine göre değil, yaptıklarına göre analiz edilmelidir. İnsanlar kararlarını çoğunlukla mantıkla değil, psikolojik tetikleyicilerle verir. Fiyat belirleyici gibi görünür ama çoğu zaman değildir — güven, risk algısı, sosyal kanıt ve kolaylık çok daha güçlü rol oynar. Bu faktörleri anlamayan marketing sistemi, doğru ürünü yanlış şekilde sunar.

→ B2B                                                                                                                                                                                                  → B2C

B2B'de karar faktörleri: risk azaltma (yanlış karar verme korkusu), ROI kanıtı, referans müşteri, vendor güvenilirliği ve geçiş kolaylığı. Satın alma kararı genellikle birden fazla kişiyle alınır.   B2C'de karar faktörleri: sosyal kanıt (başkaları ne düşünüyor?), kimlik uyumu (bu marka beni temsil ediyor mu?), anlık tatmin ve güven. Karar tek kişi tarafından ve çoğu zaman saniyeler içinde alınır.

Neden & Nasıl Yapılır?

Satın alma sürecini adım adım haritalayın: müşteri sizi nasıl buluyor, ne değerlendiriyor, nerede duraksaması, ne onu harekete geçiriyor? Her adımdaki psikolojik tetikleyicileri ve engelleri belirleyin. Sonra bu tetikleyicileri marketing materyallerine ve satış sürecine entegre edin.

Action Steps

21. Kaybedilen fırsatları analiz et — 'neden hayır dediler?' sorusunu sat ekipten topla

22. En hızlı kapanan anlaşmaların ortak özelliğini bul

23. Satın alma sürecindeki her temas noktasını ve ortalama geçen süreyi haritalandır

24. Her engel noktası için bir tetikleyici veya kolaylaştırıcı tasarla

25. A/B testleriyle hangi tetikleyicinin en etkili olduğunu ölç

Checklist

✔ Satın alma süreci haritalandı mı?

✔ Engel ve tetikleyiciler belirlendi mi?

✔ Psikolojik faktörler mesajlaşmaya yansıdı mı?

Tool & Kaynaklar

CRM pipeline analizi           Hangi aşamada fırsat kaybediliyor, ne kadar sürüyor

Hotjar / FullStory             Kullanıcının sitede nasıl hareket ettiği — karar anı analizi

A/B testing (Optimizely/VWO)   Hangi mesaj ve sunum daha iyi dönüşüm sağlıyor

Win/loss interview             Satılan ve kaybedilen fırsatlardan doğrudan öğrenme

Kaçınılması Gereken Hatalar

✗ Sadece demografiye bakmak — kim olduğu değil, nasıl karar verdiği belirleyicidir

✗ Fiyatı tek engel saymak — çoğu zaman güven eksikliği veya risk algısı daha büyük engel

✗ Karar sürecini tahmin etmek — gerçek veri olmadan yapılan haritalama yanıltır

📌 B2B Örnek                                                                                                                                                                       📌 B2C Örnek

Win/loss analizi yapıldı: kaybedilen dealların %60'ında müşteri 'referans göremedik' dedi. Müşteri logoları ve G2 rozetleri hero section'a taşındı — demo talep oranı %30 arttı.   Checkout analizi: kullanıcıların %45'i ödeme adımında çıkıyordu. Isı haritası incelendi, 'güvenlik rozetleri görünmüyor' bulundu. SSL ve ödeme güvencesi ikonları eklendi — checkout tamamlama %28 arttı.

Sorumlu Rol                   Zaman Çerçevesi         Başarı Kriteri

Marketing Lead + Sales Lead   Çeyreklik güncelleme    Karar faktörleri satış materyallerine yansımış`,
      },
      {
        id: "3-6",
        title: `3.6 Müşteri Yolculuğu (Customer Journey Mapping)`,
        content: `TANIM & GENEL BAKIŞ

Customer journey, müşterinin markayla ilk temasından satın alma ve sonrasına kadar geçen tüm süreci ifade eder. Çoğu şirket sadece acquisition'a odaklanır — oysa gerçek büyüme tüm journey'i optimize eden şirketlerden gelir. Her sürtünme noktası conversion kaybıdır. Her memnuniyet noktası ise referral ve retention fırsatıdır.

→ B2B                                                                                                                                                                                 → B2C

B2B journey genellikle uzun ve çok aşamalıdır: farkındalık → araştırma → değerlendirme → karar → onboarding → expansion → savunuculuk. Her aşama haftalarca veya aylarca sürebilir.   B2C journey genellikle kısa ama hassastır: keşfet → merak et → güven → satın al → kullan → tekrar al → öner. İlk 30 saniye ve ilk kullanım deneyimi kritiktir.

Neden & Nasıl Yapılır?

Journey mapping için tüm temas noktalarını listeleyin, her aşamada müşterinin ne hissettiğini ve ne aradığını yazın, drop-off noktalarını tespit edin ve her noktada marketing'in görevi nedir belirleyin. Önemli: journey retention ve referral aşamalarını da kapsamalıdır — sadece acquisition değil.

Aşama                   Müşterinin Durumu                   Marketing'in Görevi

Farkındalık             Problemi fark ediyor                Görünür ol, ilgi çek

Değerlendirme           Çözüm arıyor, karşılaştırıyor       Güven kur, değer göster

Karar                   Satın almaya hazır                  Engelleri kaldır, kolaylaştır

Retention               Kullanıyor, kalmaya karar veriyor   Değer üret, bağla

Savunuculuk             Memnun, öneriyor                    Yayılımı tetikle, ödüllendir

Action Steps

26. Tüm temas noktalarını listele — reklam görme, web sitesi, deneme, satış görüşmesi, onboarding vb.

27. Her aşama için mevcut dönüşüm oranını ölç

28. En büyük drop-off'un yaşandığı 2–3 noktayı belirle

29. Bu noktalarda müşterinin ne hissettiğini anlamak için veri topla

30. Her düşüş noktası için aksiyon planı oluştur ve test et

Checklist

✔ Tüm journey haritalandı mı — retention ve referral dahil?

✔ Her aşama için dönüşüm oranı ölçülüyor mu?

✔ Drop-off noktaları belirlendi mi?

✔ Her aşama için marketing aksiyonu tanımlı mı?

Tool & Kaynaklar

Google Analytics / GA4   Funnel analizi ve drop-off noktaları

Hotjar                   Kullanıcı davranış haritası — nerede takılıyor, nerede çıkıyor

Mixpanel                 Event bazlı analiz — her temas noktasındaki davranış

CRM lifecycle raporu     Müşteri yaşam döngüsü ve aşama geçiş süreleri

Kaçınılması Gereken Hatalar

✗ Sadece acquisition'a odaklanmak — mevcut müşteriyi korumak yeni müşteri kazanmaktan 5–7x ucuzdur

✗ Journey'i statik görmek — pazar değişince müşteri davranışı da değişir, haritalama güncellenmeli

✗ Drop-off'u fiyatla açıklamak — genellikle güven eksikliği veya sürtünme noktası asıl nedendir

📌 B2B Örnek                                                                                                                                                                            📌 B2C Örnek

Journey analizi yapıldı: trial başlatan kullanıcıların %60'ı ilk 3 günde çıkıyordu. Onboarding checklist ve kişiselleştirilmiş email sekansı eklendi — trial-to-paid oranı %45 arttı.   Mobil app analizi: kullanıcıların %55'i 2. oturumda uygulama açmıyordu. Push notification stratejisi ve '1. günde 1 başarı' akışı eklendi — 7. gün retention %38 arttı.

Sorumlu Rol                Zaman Çerçevesi                    Başarı Kriteri

Marketing Lead + CX Lead   İlk 90 gün — revizyon: çeyreklik   Journey map dokümante edilmiş, drop-off noktaları sayısal takip ediliyor`,
      },
    ],
  },
  {
    id: "marka",
    num: "4",
    title: `MARKA VE KONUMLANDIRMA`,
    subtitle: `Branding & Positioning — Marka stratejisi, değer önerisi`,
    subsections: [
      {
        id: "4-1",
        title: `4.1 Marka Stratejisi`,
        content: `TANIM & GENEL BAKIŞ

Marka bir logo değildir. Marka, insanların sizi düşünmeden düşündüklerinde akıllarına gelen şeydir. Bu yüzden marka stratejisi görsel kararlardan önce gelen düşünsel kararlardır: neden varız, neye inanıyoruz, kime ne söz veriyoruz? Marka stratejisi olmayan şirket her kampanyada kendini yeniden icat eder.

Güçlü marka fiyat rekabetinden çıkarır. Zayıf marka fiyat rekabetine iter.

→ B2B                                                                                                                                                                                                                             → B2C

B2B'de marka güven ve uzmanlık sinyali verir. Müşteri satın alma kararını verirken 'bu şirket güvenilir mi, sektörü biliyor mu?' sorusunu sorar. Thought leadership ve referans müşteriler marka stratejisinin çekirdeğindedir.   B2C'de marka kimlik ve duygu sinyali verir. Müşteri 'bu marka beni temsil ediyor mu, bu topluluğun parçası olmak istiyorum?' sorusunu sorar. Marka kişiliği ve kültürel uyum kritiktir.

Neden & Nasıl Yapılır?

Marka stratejisi beş katmanda kurulur. Bu katmanlar sırayla inşa edilmelidir — temel olmadan üst katmanlar havada kalır.

Katman                  Soru                                     Çıktı

Amaç (Why)              Neden varız? Dünyaya katkımız ne?        Brand purpose — 1 cümle

Değerler                Neye inanıyoruz? Neyi reddediyoruz?      3–5 core value, somutlaştırılmış

Vizyon & Misyon         5–10 yılda nerede? Bugün ne yapıyoruz?   Vizyon + misyon cümlesi

Marka Vaadi             Müşteriye ne söz veriyoruz?              Brand promise — ölçülebilir

Ses Tonu (ToV)          Bir insan olsaydı nasıl konuşurdu?       Ton kılavuzu + örnekler

Action Steps

1.  Ekiple brand purpose workshop'u yap — 'neden varız?' sorusunu birlikte yanıtla

2.  Core value'ları tanımla; her birini somut davranışa bağla — 'dürüstlük' değil, 'müşteriye kötü haberi geciktirmeyiz'

3.  Vizyon ve misyon cümlelerini yaz, test et — ekip okuduğunda ilham veriyor mu?

4.  Marka vaadini tek cümleye indir ve ölçülebilir hale getir

5.  Ses tonu kılavuzu oluştur: nasıl konuşuruz, nasıl konuşmayız, 3 örnek

Checklist

✔ Brand purpose net ve içten mi — şirket içi rezonans yaratıyor mu?

✔ Core value'lar somut davranışa bağlandı mı?

✔ Ses tonu tüm kanallarda tutarlı uygulanıyor mu?

✔ Marka vaadi ölçülebilir mi?

Tool & Kaynaklar

Simon Sinek — Golden Circle   Why/How/What çerçevesi — brand purpose için güçlü başlangıç noktası

Brand Sprint (GV)             Google Ventures'ın 3 saatlik marka workshop metodolojisi — ücretsiz erişilebilir

Notion / Confluence           Marka kararlarını dokümante etmek ve tüm ekiple paylaşmak için

Kaçınılması Gereken Hatalar

✗ Generik değerler yazmak — 'dürüstlük, inovasyon, müşteri odaklılık' her şirkette var, sizi tanımlamıyor

✗ Markayı görsel kimlikle sınırlamak — logo değişince marka değişmez, temel değişince değişir

✗ Marka stratejisini tek kişi yazmak — ekip katkısı olmayan strateji hayatta kalmaz

📌 B2B Örnek                                                                                                                                                                                                                                   📌 B2C Örnek

B2B yazılım şirketi brand purpose'unu 'KOBİ'lerin kurumsal araçlara erişimini demokratikleştirmek' olarak belirledi. Bu cümle tüm mesajlaşmaya, fiyatlandırmaya ve ürün kararlarına yön verdi. 2 yılda güçlü bir kategori liderliği kuruldu.   B2C kozmetik markası değerlerini 'radikal şeffaflık' üzerine kurdu. İçerik listesini, tedarikçilerini ve kar marjını açıkça paylaştı. Güven ve community bağlılığıyla rakiplere karşı fiyat rekabeti yapmadan büyüdü.

Sorumlu Rol             Zaman Çerçevesi               Başarı Kriteri

CEO + Marketing Lead    Kuruluş — revizyon: yılda 1   Marka stratejisi dokümante edilmiş, tüm ekip okumuş`,
      },
      {
        id: "4-2",
        title: `4.2 Marka Konumlandırma (Positioning)`,
        content: `TANIM & GENEL BAKIŞ

Positioning, müşterinin zihninde işgal etmek istediğiniz yerdir. Ürününüzün ne olduğunu değil, rakiplere kıyasla nerede durduğunu tanımlar. Positioning olmadan ürün 'de var' haline gelir. Doğru positioning'le ise müşteri belirli bir problemi çözmek için ilk sizi aklına getirir.

Positioning bir reklam kopyası değil, stratejik bir karardır. Her şey olmaya çalışan, hiçbir şey olamaz.

→ B2B                                                                                                                                                                                                   → B2C

B2B positioning'de kategori yaratmak veya mevcut kategoride net bir farklılaşma noktası bulmak kritiktir. 'Category design' — kendi oyun alanını tanımlamak — en güçlü B2B positioning stratejisidir.   B2C positioning'de duygusal farklılaşma çoğu zaman işlevsel farklılaşmadan daha güçlüdür. 'En iyi kalite' değil, 'sizi anlayan tek marka' — hissettirdiğiniz şey ne?

Neden & Nasıl Yapılır?

Positioning Statement formatı: '[Hedef kitle] için, [ürün adı], [kategoride] [rakiplerden farklı olarak] [temel fark] sunar. Çünkü [kanıt].' Bu cümleyi tüm ekip ezbere bilmeli ve tüm iletişim bu cümleyle hizalı olmalıdır.

Action Steps

6.  Hedef kitleyi en spesifik haliyle tanımla — 'KOBİ' değil, '10–50 çalışanlı UK SaaS şirketlerinin teknik kurucuları'

7.  Rakiplere kıyasla gerçek farklılaşma noktanı bul — kanıtlanabilir olmalı

8.  Positioning statement yaz ve tüm ekiple test et — herkes aynı şeyi anlıyor mu?

9.  Tüm website, reklam ve satış materyallerini bu statement'a göre hizala

10. 6 ayda bir 'positioning hâlâ geçerli mi?' sorusunu sor

Checklist

✔ Positioning tek cümleyle ifade ediliyor mu?

✔ Rakipten net ayrışıyor ve kanıtlanabilir mi?

✔ Tüm kanalda tutarlı uygulanıyor mu?

Kaçınılması Gereken Hatalar

✗ Her şey olmaya çalışmak — 'hızlı, güvenilir, ucuz ve kullanımı kolay' positioning değil özellik listesidir

✗ Positioning'i sık değiştirmek — marka bilinirliği sabır ister, sürekli pivot güven kırar

✗ Kanıtlanamayan iddialar — 'en iyi müşteri desteği' herkese göre farklıdır, somut veri gerekir

📌 B2B Örnek                                                                                                                                                                                                                                                               📌 B2C Örnek

B2B proje yönetim aracı: 'Uzak ekipler için toplantısız koordinasyonu mümkün kılan tek araç.' Rakipler 'toplantıları azaltır' derken bu marka 'ortadan kaldırır' dedi. Net ve kanıtlanabilir fark — 'Fortune 500 ekipleri %60 daha az toplantı.' Açık pazar lideri oldu.   B2C kahve markası: 'Ofis için değil, gerçek kahve severler için.' Büyük markaların kitlesel pazarına girmek yerine kahve entüziyastlarını hedefledi. Premium fiyatla küçük ama sadık kitle kurdu. Marka güçlendikçe kitlesel pazara sızdı.

Sorumlu Rol             Zaman Çerçevesi                      Başarı Kriteri

CEO + Marketing Lead    Lansman öncesi — revizyon: yılda 1   Positioning statement yazılı, tüm materyallerde tutarlı`,
      },
      {
        id: "4-3",
        title: `4.3 Değer Önerisi (Value Proposition)`,
        content: `TANIM & GENEL BAKIŞ

Value proposition müşterinin 'bu benim için mi?' sorusuna verilen en net cevaptır. Özellik listesi değil, somut sonuç anlatımıdır. İyi bir value proposition; kimin için olduğunu, hangi problemi çözdüğünü ve neden tercih edilmesi gerektiğini tek bakışta anlatır. Müşteri bunu görmezden gelememelidir.

'Ne yapıyor' değil, 'hayatıma ne katıyor' — işte value proposition.

→ B2B                                                                                                                                                                                                          → B2C

B2B value proposition ROI odaklıdır: zaman tasarrufu, maliyet azaltımı, gelir artışı veya risk azaltımı. Sayıyla desteklenmiş iddialar ('ortalama %40 daha hızlı onboarding') hissiyattan çok daha güçlüdür.   B2C value proposition duygu ve kimlik odaklıdır: 'daha iyi hissettir', 'topluluğa ait hissettir', 'hayatını kolaylaştır.' Duygusal fayda işlevsel faydadan önce gelir.

Neden & Nasıl Yapılır?

Value proposition beş soruyu yanıtlamalıdır: Kim için? (hedef kitle) Hangi problemi çözüyor? Nasıl çözüyor? Rakipten farkı ne? Bunu kanıtlayan ne var? Bu beş soruyu yanıtladıktan sonra bir hero cümlesi yazın. Bu cümle website hero section'ında, satış deckinde ve tüm reklamlarda kullanılır.

Action Steps

11. Hedef müşterinin en kritik pain point'ini belirle

12. Ürününün sunduğu somut sonucu rakamla ifade et

13. Hero cümlesini yaz — 1 cümle, özellik değil sonuç

14. 3 farklı versiyonu A/B testi ile test et — hangisi daha iyi dönüşüm sağlıyor?

15. Kazanan versiyonu tüm kanallara uygula

Checklist

✔ Özellik değil somut sonuç anlatılıyor mu?

✔ Rakipten ayrışıyor ve kanıtlanabilir mi?

✔ A/B testi yapıldı mı?

Kaçınılması Gereken Hatalar

✗ Feature listesi yazmak — 'hızlı, güvenilir, kullanımı kolay' value prop değildir

✗ Jargon kullanmak — müşterinin diliyle konuşun, ürün ekibinin diliyle değil

✗ Test etmemek — en iyi value prop masada değil, veride bulunur

📌 B2B Örnek                                                                                                                                          📌 B2C Örnek

'İlk 30 günde ortalama %40 daha az toplantı — garantili.' Özellik yok, sonuç var, garanti var. Website dönüşümü önceki versiyona kıyasla %55 arttı.   '5 dakikada sağlıklı akşam yemeği. Her gece. Çocuklar da sever.' Fonksiyon + duygusal fayda + spesifik kullanıcı. Rakiplerin genel mesajlarına karşı %3x daha iyi dönüşüm aldı.

Sorumlu Rol             Zaman Çerçevesi                               Başarı Kriteri

Marketing Lead          Lansman öncesi — A/B testi sonrası güncelle   Hero section A/B testi tamamlanmış, kazanan versiyon aktif`,
      },
      {
        id: "4-4",
        title: `4.4 Mesajlaşma Stratejisi (Messaging Framework)`,
        content: `TANIM & GENEL BAKIŞ

Mesajlaşma stratejisi aynı ürünü farklı kitlelere nasıl farklı anlatacağınızı tanımlar. CFO'ya ROI anlatırsınız, teknik ekibe entegrasyon kolaylığı, son kullanıcıya zaman tasarrufu. Mesaj doğru ama kişi yanlışsa satış olmaz. Aynı şekilde kişi doğru ama mesaj yanlışsa da olmaz.

Herkese aynı mesajı vermek, kimseye konuşmamaktır.

→ B2B                                                                                                                                                                                                      → B2C

B2B'de mesajlaşma hiyerarşisi kritiktir: ekonomik karar verici (ROI, risk), teknik karar verici (entegrasyon, güvenlik), kullanıcı (kolaylık, verimlilik). Her katman farklı içerik ve kanal gerektirir.   B2C'de mesajlaşma funnel aşamasına göre değişir: farkındalık aşamasında ilgi çekici, değerlendirmede güven verici, dönüşümde aksiyona teşvik edici olmalıdır.

Neden & Nasıl Yapılır?

Messaging framework oluşturmak için önce tüm hedef kitleleri listeleyin, sonra her biri için 'ne bilmek istiyorlar?', 'ne korkuyorlar?', 'ne ikna eder onları?' sorularını yanıtlayın. Ana mesaj tüm kitleler için ortak olmalı — onu destekleyen alt mesajlar kişiye göre değişmeli.

Kitle                   Ana Kaygı                 Mesaj Odağı

C-Suite / CEO           ROI ve stratejik risk     İş sonuçları, rekabet avantajı, güven

Teknik Ekip / IT        Entegrasyon ve güvenlik   API, uyumluluk, implementation kolaylığı

Son Kullanıcı           Günlük hayat kolaylığı    Zaman tasarrufu, kullanım kolaylığı

B2C Tüketici            Değer ve kimlik uyumu     Duygusal fayda, sosyal kanıt, erişilebilirlik

Action Steps

16. Tüm hedef kitleleri ve karar süreçteki rollerini listele

17. Her kitle için ana kaygıyı ve mesaj odağını belirle

18. Kanal bazında ton uyarlaması yap — LinkedIn formal, Reddit samimi

19. Sales ve marketing'in aynı dili konuştuğunu doğrula

20. Çeyreklik mesaj güncellemesi yap — pazar değişince mesaj da değişmeli

Checklist

✔ Her kitle için ayrı mesaj var mı?

✔ Ana mesaj tüm kanalda tutarlı mı?

✔ Sales ekibi aynı mesajlaşmayı kullanıyor mu?

Kaçınılması Gereken Hatalar

✗ Herkese aynı mesajı göndermek — CFO'ya 'kullanımı çok kolay' demek işe yaramaz

✗ Kanaldan kanala tutarsız mesaj — müşteri farklı yerde farklı şey duyunca güven kaybı yaşanır

✗ Mesajı ürün dilinde yazmak — 'gelişmiş AI algoritması' değil, 'ekibiniz haftada 5 saat kazanır'

📌 B2B Örnek                                                                                                                                                                   📌 B2C Örnek

SaaS şirketi CFO'ya 'güvenli ve SOC2 uyumlu', CTO'ya 'REST API ve Zapier entegrasyonu', son kullanıcıya 'tek tıkla rapor' mesajı verdi. Her segmentte demo talebi %25 arttı.   Fitness app: farkındalık reklamlarında 'Günde 15 dakika', değerlendirme içeriklerinde '10.000 kullanıcı başardı', conversion sayfasında '7 gün ücretsiz' mesajı. Funnel boyunca tutarlı ama aşamaya göre farklı — conversion %30 arttı.

Sorumlu Rol                   Zaman Çerçevesi                    Başarı Kriteri

Marketing Lead + Sales Lead   İlk 60 gün — revizyon: çeyreklik   Messaging dokümanı sales deck ile uyumlu`,
      },
      {
        id: "4-5",
        title: `4.5 Marka Kişiliği ve Arketipi`,
        content: `TANIM & GENEL BAKIŞ

Marka kişiliği, markanın bir insan olsaydı nasıl davranacağını tanımlar. Yazı dili, görsel seçimler, iletişim tonu, hatta müşteri şikayetine verilen yanıt — bunların hepsi marka kişiliğinin yansımasıdır. Kişiliği olmayan marka her kanalda farklı biri gibi görünür. Güven kurulmaz, tanınırlık birikmez.

→ B2B                                                                                                                                                    → B2C

B2B'de 'Bilge' veya 'Kahraman' arketipleri güçlüdür: sektörü bilen, güvenilir, sonuç odaklı. Thought leadership içerikleri bu arketiple beslenmelidir.   B2C'de arketip seçimi kategoriyle örtüşmeli: wellness için 'Bakıcı', teknoloji için 'Yaratıcı', spor için 'Kahraman', doğa/çevre için 'Kaşif' güçlü tercihlerdir.

Neden & Nasıl Yapılır?

12 Jung arketipinden marka değerlerinizle en çok örtüşeni seçin. Ardından bu arketipin somut dil ve davranış karşılıklarını belirleyin: nasıl konuşur, hangi kelimeleri kullanır, hangilerinden kaçınır, bir şikayet karşısında nasıl tepki verir?

Arketip                 Özellikler                          Örnek Markalar

Kahraman                Cesur, ilham verici, sonuç odaklı   Nike, Salesforce

Bilge                   Uzman, güvenilir, eğitici           McKinsey, HubSpot, LinkedIn

Yaratıcı                Yenilikçi, cesur, farklı            Apple, Figma, Notion

Kaşif                   Özgür, meraklı, öncü                Patagonia, Arc'teryx

Bakıcı                  Yardımsever, sıcak, güvenli         Dove, Johnson & Johnson

Action Steps

21. Marka değerlerinizle en çok örtüşen arketipi seç

22. 3–5 kişilik sıfatı belirle ve her birini somut örnekle destekle

23. 'Nasıl konuşuruz / nasıl konuşmayız' listesi oluştur

24. Tüm içerik üreticilerine kişilik kılavuzunu dağıt

Checklist

✔ Arketip seçildi ve ekiple paylaşıldı mı?

✔ Kişilik sıfatları somutlaştırıldı mı?

✔ Tüm kanalda tutarlı uygulanıyor mu?

Kaçınılması Gereken Hatalar

✗ Birden fazla çelişkili arketip seçmek — 'hem çok profesyonel hem de çok eğlenceli' kafası karışık bir marka yaratır

✗ Kişiliği tanımlayıp uygulamamak — sadece kılavuzda kalan kişilik değersizdir

✗ Kriz anında kişilikten çıkmak — en zor anda tutarlı olmak, en güçlü marka sinyalidir

📌 B2B Örnek                                                                                                                                                                                                                                                  📌 B2C Örnek

B2B fintech şirketi 'Bilge' arketipini seçti: her içerik eğitici, her yanıt veriye dayalı, ton hiç eğlenceli olmayan ama her zaman net. Sektörde 'güvenilir uzman' olarak konumlandı — enterprise müşterilerin %70'i markayı 'güven' kelimesiyle tanımladı.   B2C outdoor markası 'Kaşif' arketipini seçti: tüm içerikler doğa, keşif, sürdürülebilirlik etrafında. Ürün fotoğraflarında stüdyo yok, gerçek lokasyonlar var. Community 'ben de bu topluluğun parçasıyım' hissini sattı. NPS 78.

Sorumlu Rol             Zaman Çerçevesi                                 Başarı Kriteri

Marketing Lead          Marka rehberiyle birlikte — revizyon: yılda 1   Arketip ve kişilik kılavuzu tüm içerik üreticilerine dağıtılmış`,
      },
      {
        id: "4-6",
        title: `4.6 Görsel Kimlik ve Marka Rehberi`,
        content: `TANIM & GENEL BAKIŞ

Görsel kimlik marka kişiliğinin gözle görülür halidir. Logo, renk paleti, tipografi ve görsel dil — bunlar birlikte markanın ilk saniyede nasıl algılandığını belirler. Tutarsız görsel kimlik 'henüz oturmamış' izlenimi verir ve satın alma kararını geciktirir. Marka rehberi ise tüm bu kararların yaşayan kaynağıdır.

→ B2B                                                                                                                                                               → B2C

B2B'de görsel kimlik güven ve profesyonellik sinyali vermelidir. Sadelik ve tutarlılık ön plandadır. Her doküman, her sunum, her email aynı standartta olmalıdır.   B2C'de görsel kimlik duygusal bağ kurmalıdır. Renkler, tipografi ve fotoğraf stili markanın 'hissini' taşır. Görsel kimlik hedef kitlenin estetik tercihlerine yakın olmalıdır.

Neden & Nasıl Yapılır?

Görsel kimlik sistemi şu bileşenleri kapsamalıdır: logo sistemi (primary, secondary, icon versiyonları), renk paleti (hex, RGB ve CMYK kodları), tipografi hiyerarşisi (heading, body, accent — max 2–3 font), görsel dil (fotoğraf tarzı, illüstrasyon stili) ve boşluk/grid sistemi. Tüm bu kararlar marka rehberinde dokümante edilmeli ve merkezi bir erişim noktasında tutulmalıdır.

Action Steps

25. Logo sistemini tüm versiyonlarıyla hazırla — beyaz, siyah, renkli, icon

26. Renk paletini hex, RGB ve CMYK kodlarıyla sabitle

27. Tipografi hiyerarşisini belirle ve font lisanslarını düzenle

28. Marka rehberini Notion veya özel bir platformda yayınla

29. Yeni üye onboarding'ine marka rehberi okumayı ekle

Checklist

✔ Logo tüm formatlarda hazır mı?

✔ Renk ve tipografi kodları belgelenmiş mi?

✔ Marka rehberi erişilebilir ve güncel mi?

✔ Ortaklar ve ajanslar rehberi aldı mı?

Kaçınılması Gereken Hatalar

✗ Çok fazla renk ve font kullanmak — az seçim, güçlü kimlik

✗ Marka rehberini PDF yapıp göndermek — yaşayan, güncellenebilir bir formatta olmalı

✗ Görsel kimliği yalnızca tasarım ekibinin işi saymak — tüm içerik üreten kişiler kılavuzu bilmeli

📌 B2B Örnek                                                                                                                                                                                                                  📌 B2C Örnek

B2B SaaS şirketi marka rehberini Notion'da yayınladı: logo dosyaları, renk kodları, tipografi ve ton kılavuzu hepsi bir arada. Ajanslar ve freelancer'lar buraya erişti. Tüm materyallerde %100 görsel tutarlılık sağlandı.   B2C DTC markası görsel kimlik sistemini 3 renge ve 2 fonta indirdi. Instagram, website ve ambalaj arasında tam tutarlılık sağlandı. Marka tanınırlığı 6 ayda %40 arttı — ürünler görülmeden önce marka rengi tanınır hale geldi.

Sorumlu Rol                    Zaman Çerçevesi                  Başarı Kriteri

Design Lead + Marketing Lead   İlk 90 gün — revizyon: yılda 1   Marka rehberi yayınlanmış, tüm ekip ve ortaklar erişebiliyor`,
      },
      {
        id: "4-7",
        title: `4.7 Marka Tutarlılığı ve Koruması`,
        content: `TANIM & GENEL BAKIŞ

Marka tutarlılığı tanınırlığı, tanınırlık güveni, güven satışı inşa eder. Bu zincir kırıldığında yeniden kurmak aylar alır. Tutarlılık sadece görsel değil — ses tonu, değerler, müşteri deneyimi ve her temas noktasındaki davranış da dahildir. Marka koruması ise bu tutarlılığın üçüncü taraflarca da sürdürülmesini güvence altına alır.

→ B2B                                                                                                                                                                                                                               → B2C

B2B'de marka tutarlılığı özellikle sales ve marketing arasındaki kopuklukta bozulur. Satış temsilcisi farklı değer önerisi sunduğunda, müşteri kafa karışıklığı yaşar. Düzenli sales-marketing alignment toplantıları zorunludur.   B2C'de marka tutarlılığı özellikle çoklu kanal yönetiminde bozulur. Instagram'daki ton ile email'deki ton farklı olduğunda marka kişiliği parçalanır. Merkezi içerik takvimi ve onay süreci kritiktir.

Action Steps

30. Marka kullanım kılavuzunu tüm ortaklar ve ajanslarla paylaş

31. Üçüncü taraf marka kullanımını onay sürecine bağla

32. Sosyal medyada marka mention takibi kur

33. Çeyreklik 'marka sağlığı değerlendirmesi' yap — müşteri algısı değişiyor mu?

34. Kriz iletişim planını önceden hazırla — kriz anında plan yapmak için zaman olmaz

Checklist

✔ Ortaklar marka kılavuzunu aldı ve onayladı mı?

✔ Mention takip sistemi kuruldu mu?

✔ Kriz iletişim planı hazır mı?

Kaçınılması Gereken Hatalar

✗ Marka tutarlılığını yalnızca tasarımla ölçmek — ses tonu ve değer tutarlılığı da aynı önemde

✗ Kriz planını kriz anında yapmak — 'şimdi ne söyleyelim?' sorusuyla başlayan her kriz yönetimi başarısız olur

✗ Mention takibi yapmamak — müşteri ne diyor, rakip ne söylüyor, siz habersiz kalırsınız

📌 B2B Örnek                                                                                                                                                                                                📌 B2C Örnek

B2B şirketi tüm satış temsilcilerine mesajlaşma playbook'u verdi ve aylık 'mesaj kalibrasyon' toplantısı kurdu. Müşteri görüşmelerinde algı tutarlılığı %90 üzerine çıktı, satış döngüsü 2 hafta kısaldı.   B2C marka, 50K takipçili influencer ile çalışmadan önce marka kılavuzunu verdi ve içerik onayı istedi. Bir influencer kılavuza uymayan içerik yayınladı — marka hızlıca müdahale etti. Kriz 24 saatte kapandı.

Sorumlu Rol             Zaman Çerçevesi                            Başarı Kriteri

Marketing Lead + CEO    Sürekli izleme — çeyreklik değerlendirme   Marka sağlık skoru ölçülüyor, mention takibi aktif`,
      },
    ],
  },
  {
    id: "urun-teklif",
    num: "5",
    title: `ÜRÜN VE TEKLİF STRATEJİSİ`,
    subtitle: `PMF, fiyatlandırma, paketleme, farklılaşma`,
    subsections: [
      {
        id: "5-1",
        title: `5.1 Ürün-Pazar Uyumu (Product-Market Fit)`,
        content: `TANIM & GENEL BAKIŞ

Product-Market Fit, doğru ürünün doğru pazar için üretildiği noktadır. PMF olmadan yapılan her marketing yatırımı delik bir kovaya su doldurmaktır — ne kadar hızlı doldurursan doldur, kova boşalır. Marketing PMF'yi yaratmaz; PMF varsa ölçekler.

'Bu ürün yarın kaybolsa ne kadar üzülürdünüz?' sorusuna %40+ 'çok üzülürdüm' yanıtı, PMF'nin en güçlü sinyalidir. — Sean Ellis

→ B2B                                                                                                                                                                                                               → B2C

B2B'de PMF sinyalleri: organik referral ve söylentinin yayılması, satış döngüsünün kısalması, müşterilerin ürünü iş süreçlerine gömmesi ve churn'ün düşmesi. Enterprise'da tek büyük müşteri PMF kanıtı değildir.   B2C'de PMF sinyalleri: organik büyüme, yüksek retention, kullanıcıların ürünü başkalarına aktif önermesi ve 'benim için yapılmış' yorumlarının artması. D1/D7/D30 retention metrikleri PMF'nin en net göstergesidir.

Neden & Nasıl Yapılır?

PMF'yi ölçmek için dört metriği birlikte değerlendirin: Sean Ellis testi (kullanıcı anketi, %40+ 'very disappointed' hedefi), cohort retention (kullanıcılar geri geliyor mu?), churn oranı (SMB için aylık %3–5, Enterprise için <%1 hedef) ve NPS (kategori ortalamasının üstünde mi?). Bu dört sinyal birlikte yeşile döndüğünde PMF var demektir.

Action Steps

1.  Sean Ellis testini en az 40 aktif kullanıcıyla uygula

2.  Cohort analizi yap — ilk ay kazanılan kullanıcılar 3. ayda ne kadarı aktif?

3.  Aylık churn oranını ölç ve trend takibi yap

4.  Hangi segmentte PMF daha güçlü olduğunu tespit et

5.  PMF olan segmente marketing yatırımını yoğunlaştır, diğerlerini dondur

Checklist

✔ Sean Ellis testi uygulandı mı?

✔ Retention ve churn metrikleri ölçülüyor mu?

✔ PMF olan segment belirlendi mi?

✔ Marketing bütçesi PMF segmentine odaklandı mı?

Tool & Kaynaklar

Typeform / Tally           Sean Ellis anketi için — kısa, mobil uyumlu, ücretsiz

Mixpanel / Amplitude       Cohort retention analizi için — hangi kullanıcı grubu kalıyor?

ChartMogul / Baremetrics   B2B'de churn ve MRR takibi için en iyi araçlar

Kaçınılması Gereken Hatalar

✗ PMF olmadan büyük marketing bütçesi harcamak — önce ürünü doğrula, sonra ölçekle

✗ Tek bir büyük müşteriyi PMF kanıtı saymak — B2B'de en az 10 farklı müşteri gerekir

✗ PMF'yi bir kez ölçüp unutmak — pazar değişir, PMF kaybolabilir

📌 B2B Örnek                                                                                                                                                                             📌 B2C Örnek

SaaS şirketi Sean Ellis testi uyguladı: genel kitlede %28, 'uzak ekipler' segmentinde %54 very disappointed. Tüm marketing bütçesini uzak ekip segmentine döktü. 6 ayda ARR 3x büyüdü.   Mobil uygulama D30 retention'ının %8'de olduğunu gördü — PMF yok. Marketing duraklatıldı, onboarding ve core loop yeniden tasarlandı. D30 retention %22'ye çıkınca büyüme kampanyaları başlatıldı.

Sorumlu Rol                   Zaman Çerçevesi                 Başarı Kriteri

CEO + Ürün + Marketing Lead   Her yeni ürün lansmanı öncesi   PMF skoru ölçülmüş, %40+ hedefi doğrulanmış`,
      },
      {
        id: "5-2",
        title: `5.2 Teklif (Offer) Tasarımı`,
        content: `TANIM & GENEL BAKIŞ

Teklif, müşteriye sunulan şeyin tamamıdır — sadece ürün değil; fiyat, garanti, bonus, koşullar ve risk giderici unsurların bütünü. İki benzer ürün arasında seçim yapan müşteri çoğunlukla daha iyi teklifi seçer. Bu yüzden ürünü değiştirmeden teklifi optimize ederek conversion artırılabilir.

Teklif değişmeden ürün değişirse bazen yetmez. Ürün değişmeden teklif değişirse bazen yeter.

→ B2B                                                                                                                                                                                                      → B2C

B2B'de teklif tasarımı risk giderme üzerine kuruludur: pilot dönem, para iade garantisi, dedicated onboarding, SLA taahhüdü. Karar vericinin 'yanlış karar verme' korkusunu azaltmak satışı hızlandırır.   B2C'de teklif tasarımı değer algısı ve aciliyet üzerine kuruludur: ücretsiz deneme, bundle, sınırlı süre kampanyası, ilk sipariş indirimi. 'Kaçırırsam ne olur?' sorusunu tetiklemek dönüşümü artırır.

Neden & Nasıl Yapılır?

İyi bir teklif beş bileşeni içerir: core offer (ne sunuyorsunuz?), değer yükseltici (beklentinin üstünde ne ekliyorsunuz?), risk giderici (müşteri kaybederse ne olur?), kolaylaştırıcı (başlamayı ne kolaylaştırıyor?) ve aciliyet/kıtlık (neden şimdi?). Bu beş soruyu yanıtlayan teklif, müşteriyi 'hayır diyemem' noktasına taşır.

Action Steps

6.  Mevcut teklifinizi beş bileşen açısından değerlendirin

7.  En zayıf bileşeni belirleyin — genellikle risk giderici eksiktir

8.  Risk giderici unsur ekleyin: ücretsiz deneme, pilot, garanti

9.  Değer yükselticiyi tanımlayın — beklentinin üstünde ne sunuluyor?

10. A/B testiyle teklif versiyonlarını karşılaştırın

Checklist

✔ Risk giderici unsur var mı?

✔ Değer yükseltici tanımlı mı?

✔ Teklif A/B testi yapıldı mı?

✔ Teklif ICP'ye göre kişiselleştiriliyor mu?

Kaçınılması Gereken Hatalar

✗ Yalnızca ürünü sunmak — teklif tasarımı ayrı bir disiplindir

✗ Risk algısını görmezden gelmek — B2B'de risk korkusu fiyattan büyük engel olabilir

✗ Herkese aynı teklifi vermek — büyük şirkete ve küçük şirkete aynı teklif her ikisini de kaybettirebilir

📌 B2B Örnek                                                                                                                                                                        📌 B2C Örnek

B2B yazılım şirketi standart demo talep formuna '30 günlük para iade garantisi' ve 'ilk ay dedicated onboarding' ekledi. Demo talep oranı aynı kaldı ama trial-to-paid %31 arttı.   E-ticaret markası ürün sayfasına '30 gün koşulsuz iade' ve 'ücretsiz kargo her iki yönde' ekledi. Fiyat değişmedi, ürün değişmedi — sadece risk giderildi. Conversion %24 arttı.

Sorumlu Rol                   Zaman Çerçevesi                       Başarı Kriteri

Marketing Lead + Sales Lead   Lansman öncesi — çeyreklik revizyon   Teklif A/B testi tamamlanmış, kazanan versiyon aktif`,
      },
      {
        id: "5-3",
        title: `5.3 Fiyatlandırma Stratejisi`,
        content: `TANIM & GENEL BAKIŞ

Fiyat, ürünün algılanan değerinin sayıya dönüşmüş halidir. Maliyet üzerine marj koymak fiyatlandırma değil, muhasebedir. Fiyat aynı zamanda güçlü bir positioning aracıdır: çok düşük fiyat 'neden bu kadar ucuz?' sorusunu doğurur; doğru fiyat değeri işaret eder.

Fiyat bir gelir kararı değil, bir strateji kararıdır.

→ B2B                                                                                                                                                                                                                     → B2C

B2B'de value-based pricing altın standarttır: müşterinin ürünle kazandığı değerin (zaman, para, risk) bir yüzdesi olarak fiyatlamak. Yıllık ödeme modeli hem şirkete nakit akışı hem müşteriye indirim avantajı sağlar.   B2C'de psikolojik fiyatlandırma kritiktir: 99 vs 100, anchor fiyat gösterimi, bundle mantığı. Freemium modeli kullanıcı tabanı oluştururken premium dönüşümü besler.

Neden & Nasıl Yapılır?

Fiyatlandırma stratejisi belirlerken dört soruyu yanıtlayın: Müşteri bu ürünle ne kadar değer yaratıyor? (value-based için zemin) Rakipler ne fiyatlıyor? (referans çerçevesi) Müşterinin ödeme kapasitesi ne? (segment uyumu) Hangi model en yüksek LTV'yi üretiyor? (seat, usage, flat-rate, freemium). Bu sorulara veriyle yanıt verdikten sonra fiyat belirleyin ve test edin.

Nasıl Yapılır?

Model                   Tanım                              En İyi Olduğu Yer

Value-based             Müşterinin kazandığı değere göre   Yüksek ROI yaratan B2B ürünler

Usage-based             Kullanım miktarına göre            API, platform, altyapı ürünleri

Seat-based              Kullanıcı sayısına göre            SaaS, collaboration araçları

Freemium                Temel ücretsiz, gelişmiş ücretli   Geniş kullanıcı tabanı hedefi

Flat-rate               Sabit aylık/yıllık ücret           Basit, tahmin edilebilir ürünler

Action Steps

11. Müşterinin ürünle yarattığı değeri ROI olarak hesapla

12. Rakip fiyat matrisini çıkar

13. Fiyat elastikiyetini test et — küçük A/B testi ile

14. Yıllık ödeme için cazip indirim modeli belirle

15. Fiyatı en az yılda bir gözden geçir

Checklist

✔ Fiyat değere dayalı mı, sadece maliyete değil?

✔ Yıllık plan teşvik ediliyor mu?

✔ Fiyat test edildi mi?

✔ Segment bazlı fiyatlandırma değerlendirildi mi?

Kaçınılması Gereken Hatalar

✗ Maliyet + marj = fiyat mantığı — masada para bırakır

✗ Rakibin fiyatını körce takip etmek — onlar da yanlış fiyatlamış olabilir

✗ Fiyatı hiç değiştirmemek — ürün olgunlaştıkça, değer arttıkça fiyat da artmalıdır

📌 B2B Örnek                                                                                                                                                                  📌 B2C Örnek

B2B otomasyon aracı müşterinin haftada 8 saat kazandığını hesapladı — yılda 50.000$ değer. Fiyatı 2.400$/yıl'dan 4.800$/yıl'a çıkardı. Churn artmadı, gelir ikiye katlandı.   B2C mobil uygulama freemium'dan premium dönüşümü artırmak istedi. Yıllık plan için %40 indirim sundu. Aylık abone sayısı %5 azaldı ama yıllık plan tercihi %3x arttı — toplam gelir %60 büyüdü.

Sorumlu Rol                  Zaman Çerçevesi                      Başarı Kriteri

CEO + Marketing Lead + CFO   Lansman öncesi — revizyon: yılda 1   Fiyat modeli dokümante edilmiş, elastikiyet testi yapılmış`,
      },
      {
        id: "5-4",
        title: `5.4 Paketleme ve Bundle Stratejisi`,
        content: `TANIM & GENEL BAKIŞ

Paketleme, aynı ürünü farklı segmentlere farklı şekillerde sunma sanatıdır. İyi tasarlanmış paket yapısı upsell'i kolaylaştırır, müşterinin karar sürecini basitleştirir ve ortalama geliri artırır. Seçim felci gerçektir: çok fazla paket seçimi azaltır, çok az seçenek büyüme tavanını düşürür.

++
| Üç paket kuralı                                                                                                                                                                                 |
|                                                                                                                                                                                                 |
| Araştırmalar gösteriyor ki müşterilerin çoğunluğu üç paket sunulduğunda ortadaki paketi seçer. Bunu bilerek tasarlamak — anchor olarak pahalı paketi solda göstermek — ortalama geliri artırır. |
++

→ B2B                                                                                                                                                                                                                                                                                 → B2C

B2B'de paketler genellikle üç katmanda kurulur: SMB/Starter (düşük taahhüt, hızlı karar), Growth/Pro (anchor paket, en yüksek değer/fiyat dengesi), Enterprise (özel fiyat, white-glove hizmet). Enterprise için standart fiyat sayfası yerine 'İletişime geç' akışı daha uygundur.   B2C'de paketler kullanım yoğunluğuna veya özellik ihtiyacına göre kurulur. Bundle stratejisi özellikle güçlüdür: birlikte satın alınan ürünleri paketleyerek hem değer algısını artırmak hem de sepet büyüklüğünü büyütmek mümkündür.

Action Steps

16. Müşteri segmentlerini ve ödeme kapasitelerini haritalandır

17. Her segment için ideal özellik setini ve fiyat noktasını belirle

18. Anchor paket olarak Growth/Pro'yu merkeze al

19. Enterprise için ayrı satış ve onboarding süreci oluştur

20. Paket yapısını A/B testi ile optimize et

Checklist

✔ 3 paket var mı — çok fazla seçenek sunulmuyor mu?

✔ Anchor paket net mi?

✔ Enterprise için ayrı süreç tanımlı mı?

✔ Yıllık vs aylık fark net mi?

Kaçınılması Gereken Hatalar

✗ 5+ paket sunmak — karar felci yaratır, conversion düşer

✗ Paketler arası farkı belirsiz bırakmak — müşteri neden üst pakete geçsin?

✗ Enterprise'ı görmezden gelmek — en yüksek LTV buradan gelir

📌 B2B Örnek                                                                                                                                                                    📌 B2C Örnek

B2B SaaS şirketi 5 paketten 3'e indi. Starter ($49), Growth ($149), Enterprise (özel). Ortalama contract değeri %35 arttı çünkü müşteriler artık 'ortayı' daha net görüyordu.   B2C güzellik markası tek ürün satışından bundle'a geçti: 'Sabah Rutini Seti' (3 ürün, %20 indirimli). Tekil ürün satışı %10 düştü ama ortalama sipariş değeri %45 arttı.

Sorumlu Rol                   Zaman Çerçevesi                      Başarı Kriteri

Marketing Lead + Sales Lead   Lansman öncesi — revizyon: yılda 1   Paket yapısı fiyat sayfasında net, Enterprise pipeline aktif`,
      },
      {
        id: "5-5",
        title: `5.5 Farklılaşma Stratejisi`,
        content: `TANIM & GENEL BAKIŞ

Farklılaşma olmadan rekabet fiyat üzerinden olur — ve fiyat savaşında her zaman daha büyük veya daha sabırlı oyuncu kazanır. Gerçek farklılaşma üç koşulu karşılar: müşteri için önemli olmalı, rakip tarafından kolayca kopyalanamamalı ve kanıtlanabilir olmalıdır. Bu üç koşulu karşılamayan 'farklılaşma' gerçek değildir.

Fark yoksa fiyat rekabeti kaçınılmazdır. Güçlü fark, fiyat tartışmasını bitirir.

→ B2B                                                                                                                                                                                                                  → B2C

B2B'de en güçlü farklılaşma boyutları: uzmanlık derinliği (belirli sektöre veya kullanım senaryosuna özel), entegrasyon ekosistemi (rakibin bağlanamadığı araçlarla bağlanmak), onboarding hızı ve müşteri başarısı.   B2C'de en güçlü farklılaşma boyutları: marka kişiliği (kimseyle aynı görünmemek), community (ürünün etrafında oluşan topluluk), üretim hikayesi (nasıl yapıldığı) ve erişilebilirlik (herkesin ulaşamadığı ürün veya fiyat).

Neden & Nasıl Yapılır?

Farklılaşma noktanızı bulmak için iki soruyu yanıtlayın: Müşteri 'başka bir şey değil de neden sizi seçti?' diyor? Ve bu cevap rakip tarafından 1 yıl içinde kopyalanabilir mi? Kopyalanamıyorsa gerçek farklılaşma bulunmuştur. Kopyalanabiliyorsa daha derin bir fark arayın.

Action Steps

21. En iyi müşterilere 'neden bizi seçtiniz?' sorusunu sor — cevapları listele

22. Bu cevapları 'rakip kolayca kopyalar mı?' filtresiyle değerlendir

23. Korunaklı farklılaşma noktasını seç

24. Bu farkı mesajlaşmanın merkezine koy

25. Farkın korunabilir kalması için yatırım planı yap

Checklist

✔ Farklılaşma müşteri için önemli mi?

✔ Kanıtlanabilir mi — somut veri veya özellik var mı?

✔ Rakip 1 yılda kopyalayabilir mi?

✔ Tüm mesajlaşmada tutarlı anlatılıyor mu?

Kaçınılması Gereken Hatalar

✗ 'En iyi müşteri desteği' iddiası — herkes iddia eder, kimse kanıtlayamaz

✗ Rakibin güçlü olduğu alanda farklılaşmaya çalışmak — güçsüz olduğu alanı bul

✗ Farklılaşmayı gizlemek — öne çıkar, pazarlama mesajının merkezine koy

📌 B2B Örnek                                                                                                                                                                                                                                     📌 B2C Örnek

B2B muhasebe yazılımı rakiplerinden farklı olarak 'yalnızca muhasebe ekipleri için' konumlandı. Genel araçlara karşı onboarding süresini 3 günden 1 güne indirdi. 'Muhasebeciler için yapılmış tek araç' mesajı ile kategoride liderlik kurdu.   B2C çay markası 'Türkiye'nin dört bölgesinden, küçük üreticilerden direkt temin' farklılaşmasıyla büyüdü. Rakip kopyalayamadı çünkü bu üreticilerle 5 yıllık münhasır anlaşmalar vardı. Premium fiyata rağmen bekleme listesi oluştu.

Sorumlu Rol                        Zaman Çerçevesi                                Başarı Kriteri

CEO + Marketing Lead + Ürün Lead   Positioning ile birlikte — revizyon: yılda 1   Farklılaşma noktası tüm satış materyallerinde tutarlı`,
      },
      {
        id: "5-6",
        title: `5.6 Rekabet Avantajı (Moat)`,
        content: `TANIM & GENEL BAKIŞ

Rekabet avantajı (moat), rakiplerin sahip olmadığı ve kolayca kopyalayamayacağı yapısal üstünlüktür. Farklılaşma taktiksel, moat stratejiktir. Farklılaşma 'bugün neden tercih ediliyorsunuz' sorusunu yanıtlar; moat '5 yıl sonra neden hâlâ tercih edileceksiniz' sorusunu yanıtlar.

Moat olmayan şirket, rakip güçlendikçe savunmasız kalır.

→ B2B                                                                                                                                                                                                                                      → B2C

B2B'de en güçlü moat'lar: veri avantajı (müşteri verisinden daha iyi ürün/öngörü), entegrasyon derinliği (rakibe geçiş maliyeti yüksek), network etkisi (daha fazla kullanıcı = daha değerli ürün), ve sertifikasyon/uyumluluk avantajı.   B2C'de en güçlü moat'lar: marka gücü (güven ve duygusal bağ), topluluk (rakibin bir günde kopyalayamayacağı insan ağı), tedarik zinciri avantajı (münhasır kaynak veya üretim), ve ölçek ekonomisi.

Neden & Nasıl Yapılır?

Moat inşa etmek zaman alır ve bilinçli yatırım gerektirir. Bugün sahip olduğunuz avantajları listeleyin, hangisinin zamanla güçleneceğini belirleyin ve bu avantajı büyütecek ürün ve marketing kararlarını planlayın. En iyi moat büyüdükçe güçlenen moat'tır.

Moat Türü               Nasıl Güçlenir                             Örnek

Ağ Etkisi               Daha fazla kullanıcı → daha değerli        LinkedIn, Slack, marketplacelar

Geçiş Maliyeti          Derin entegrasyon → rakibe geçmek pahalı   Salesforce, SAP, ERP sistemleri

Veri Avantajı           Daha fazla veri → daha iyi ürün            Spotify önerisi, Netflix içeriği

Marka Gücü              Tutarlı deneyim → güven ve tercih          Apple, Patagonia, HubSpot

Ölçek Ekonomisi         Büyüdükçe maliyet düşer                    Amazon, büyük e-ticaret

Action Steps

26. Mevcut avantajlarını listele ve hangisinin gerçekten korunaklı olduğunu analiz et

27. 'Bu avantaj 3 yılda güçlenir mi, zayıflar mı?' sorusunu yanıtla

28. Moat'ı büyütecek ürün kararlarını roadmap'e ekle

29. Marketing'i bu avantajı görünür kılacak şekilde konumlandır

Checklist

✔ Gerçek bir rekabet avantajı belirlendi mi?

✔ Bu avantaj büyüdükçe güçleniyor mu?

✔ Moat stratejisi ürün roadmap'ine yansıdı mı?

Kaçınılması Gereken Hatalar

✗ Geçici avantajı kalıcı moat saymak — özellik kopyalanır, network etkisi kopyalanamaz

✗ Moat'ı korumaya yatırım yapmamak — rekabet avantajları bakımsız kaldığında erir

✗ Sadece bir moat türüne güvenmek — birden fazla avantaj katmanlamak çok daha güçlü savunma sağlar

📌 B2B Örnek                                                                                                                                                                                                               📌 B2C Örnek

B2B HR yazılımı veri avantajını fark etti: 500+ şirketten 3 yılık benchmark verisi. 'Sektör benchmarkı' özelliği ekledi — rakipler bu veriyi hiçbir zaman kopyalayamaz. Bu özellik en büyük satış argümanı haline geldi.   B2C fitness uygulaması topluluk moat'ı kurdu: 200.000 kişilik aktif Discord topluluğu. Rakipler ürünü kopyaladı ama topluluğu kopyalayamadı. Kullanıcılar rakibe geçmedi çünkü topluluktan ayrılmak istemediler.

Sorumlu Rol             Zaman Çerçevesi                              Başarı Kriteri

CEO + Ürün Lead         Strateji planlamasında — revizyon: yılda 1   Moat stratejisi ürün roadmap'ine yansımış, güçlenme metrikleri takip ediliyor`,
      },
    ],
  },
  {
    id: "gtm",
    num: "6",
    title: `GO-TO-MARKET STRATEJİSİ`,
    subtitle: `Pazar seçimi, giriş stratejisi, kanal, lansman`,
    subsections: [
      {
        id: "6-1",
        title: `6.1 Hedef Pazar Seçimi`,
        content: `TANIM & GENEL BAKIŞ

Hedef pazar seçimi tüm GTM stratejisinin temelidir. Yanlış pazara girilen en iyi ürün başarısız olur; doğru pazara girilen iyi ürün ise şans yaratır. Çoğu şirket mevcut kapasitelerini ve gerçek pazar erişimlerini abartarak çok fazla pazara aynı anda girmeye çalışır — kaynaklar dağılır, hiçbirinde lider olunamaz.

Her pazar eşit fırsat sunmaz. Doğru seçim geri kalan her şeyi kolaylaştırır.

→ B2B                                                                                                                                                                                                                                 → B2C

B2B'de pazar seçimi sektör + şirket büyüklüğü + coğrafya ekseninde yapılır. Ödeme kapasitesi ve satın alma döngüsü kritik filtrelerdir. Küçük ama ödeme yapabilen bir pazar, büyük ama bütçesiz pazardan her zaman daha değerlidir.   B2C'de pazar seçimi demografik + davranışsal + coğrafik ekseninde yapılır. Erişim maliyeti ve dönüşüm potansiyeli birlikte değerlendirilmelidir. Dijital kanallarla erişilebilen ve satın alma sıklığı yüksek segmentler önceliklendirilmelidir.

Neden & Nasıl Yapılır?

Pazar seçim kararını altı kritere göre değerlendirin ve her birine 1–5 puan verin: pazar büyüklüğü (yeterince büyük mü?), erişilebilirlik (ulaşabilir miyiz?), ödeme kapasitesi (hedef müşteri ödeyebilir mi?), rekabet yoğunluğu (kazanılabilir mi?), büyüme hızı (pazar büyüyor mu?) ve uyum (güçlü yönlerimizle örtüşüyor mu?). En yüksek toplam puanı alan pazar birincil hedef olarak seçilir.

Action Steps

1.  3–5 potansiyel pazarı listele ve altı kritere göre puan ver

2.  En yüksek puanı alan pazarı birincil hedef seç

3.  İkincil pazarı hazırlık aşamasında tut — ölçekleme sonra

4.  Birincil pazarda başarıyı kanıtla, ancak sonra genişle

5.  Pazar seçim kararını veriyle belgele ve ekiple paylaş

Checklist

✔ Pazar seçim kriterleri belirlendi ve puanlandı mı?

✔ Ödeme kapasitesi doğrulandı mı?

✔ Erişim maliyeti hesaplandı mı?

✔ Sadece bir birincil pazar seçildi mi?

Tool & Kaynaklar

Statista / IBISWorld       Pazar büyüklüğü ve büyüme verisi

LinkedIn Sales Navigator   B2B'de hedef pazardaki şirket ve karar verici sayısı

Google Ads Planner         B2C'de hedef segmentte arama talebi tahmini

SimilarWeb                 Rakiplerin hangi pazarlarda ne kadar trafik aldığı

Kaçınılması Gereken Hatalar

✗ Aynı anda birden fazla pazara girmek — odak dağılır, hiçbirinde güçlü olunamaz

✗ Büyüklüğü ödeme kapasitesiyle karıştırmak — büyük pazar her zaman karlı pazar değildir

✗ Erişim maliyetini hesaplamamak — ulaşmak kolay görünen pazar, reklam maliyetiyle karlılığı bitirebilir

📌 B2B Örnek                                                                                                                                                                                                                                  📌 B2C Örnek

SaaS şirketi TR, UK, DE, US'ye aynı anda girmeyi planladı. Analiz yapılınca UK seçildi: küçük ama ödeme kapasitesi yüksek, İngilizce içerik mevcut, erişim maliyeti düşük. İlk 6 ayda 80 müşteri — diğer pazarlara dağılsaydı 10–15 olurdu.   B2C sağlıklı atıştırmalık markası büyük şehirlerin tamamına girmek yerine İstanbul Kadıköy ve Beşiktaş'ı pilot seçti. Yoğun odak ile 3 ayda güçlü community ve organic büyüme sağlandı. Sonra diğer ilçelere yayıldı.

Sorumlu Rol             Zaman Çerçevesi                Başarı Kriteri

CEO + Marketing Lead    Her yeni pazar girişi öncesi   Pazar seçim dokümanı hazır ve onaylı`,
      },
      {
        id: "6-2",
        title: `6.2 Pazara Giriş Stratejisi`,
        content: `TANIM & GENEL BAKIŞ

Pazara giriş stratejisi, hedef pazarda nasıl görünür olacağını ve ilk müşterileri nasıl kazanacağını tanımlar. B2B'de en etkili giriş yöntemi çoğu zaman reklam değildir — doğrudan ilişki, referans ve içerik çok daha güçlü çalışır. B2C'de ise viral mekanizmaları ve community'yi erkenden kurmak organik büyümeyi mümkün kılar.

İlk 10 müşteri sonraki 1.000'inin habercisidir. Onları elle, bire bir kazan.

→ B2B                                                                                                                                                                                             → B2C

B2B'de giriş: outbound (doğrudan ulaşım), referral (güven transferi) ve içerik (uzmanlık kanıtı) en güçlü üç giriş kanalıdır. İlk müşteriler satın alındıkça değil, ilişki kurularak kazanılır.   B2C'de giriş: içerik ve organik sosyal (community inşası), influencer (güven transferi) ve paid (hızlı erişim) üçlüsü birlikte çalışır. İlk müşterilerden sosyal kanıt üretmek kritiktir.

Pazara Giriş Modelleri

Product-Led Growth (PLG)   Ürün kendini satar — freemium, trial, self-serve. Düşük sürtünmeli giriş.

Sales-Led Growth (SLG)     Satış ekibi önce, ürün sonra. Enterprise ve yüksek bilet değerli ürünler için.

Marketing-Led Growth       İçerik, SEO, community ile organik büyüme. Uzun vadeli ama sürdürülebilir.

Partner-Led Growth         Ekosistem ve channel partner ile büyüme. Güven devralınır.

Community-Led Growth       Topluluk büyüdükçe ürün daha değerli olur. Network etkisi yaratır.

Action Steps

6.  ICP'ye en uygun giriş modelini seç — birden fazla kombinasyon mümkün

7.  İlk 10 müşteriyi elle, bire bir kazan — otomasyona erken geçme

8.  Bu müşterilerden öğren ve mesajı güncelle

9.  İlk başarıları case study ve referans olarak kullan

10. Kazanan kanalı belirle ve oraya yatırım yap

Checklist

✔ Giriş modeli ICP'ye uygun mu?

✔ İlk 10 müşteri için plan var mı?

✔ Referans ve case study stratejisi belirlendi mi?

✔ Kazanan kanalı ölçmek için tracking kuruldu mu?

Kaçınılması Gereken Hatalar

✗ Doğrudan ölçeklemeye geçmek — ilk önce elle kazan, öğren, sonra otomatize et

✗ Tek modele kilitlenmek — PLG, SLG ve marketing-led birbirini tamamlar

✗ İlk müşterilerden öğrenmemek — her erken müşteri ürün ve mesaj için değerli veridir

📌 B2B Örnek                                                                                                                                                                                                        📌 B2C Örnek

B2B HR aracı ilk 3 ayda reklam açmadı. ICP'deki 50 şirkete founder bizzat LinkedIn'den ulaştı. 8'i demo aldı, 4'ü müşteri oldu. Bu 4 müşterinin case study'siyle lansman yapıldı — ilk ay 40 inbound talep geldi.   B2C sürdürülebilir moda markası lansman öncesi 200 kişilik bekleme listesi oluşturdu. Her kayda özel teşekkür ve ürün hikayesi gönderildi. Lansman gününde %62'si satın aldı — reklam bütçesi sıfırdı.

Sorumlu Rol                         Zaman Çerçevesi         Başarı Kriteri

CEO + Sales Lead + Marketing Lead   Lansman öncesi 60 gün   İlk 10 müşteri hedefi ve outreach planı dokümante edilmiş`,
      },
      {
        id: "6-3",
        title: `6.3 Kanal Stratejisi`,
        content: `TANIM & GENEL BAKIŞ

Kanal stratejisi, müşteriye hangi yollardan ulaşılacağını belirler. Her kanal eşit değildir — B2B'de yanlış kanalda doğru mesaj hiçbir işe yaramaz. Kanal seçimi ICP'nin nerede zaman geçirdiğine, mesajın ne olduğuna ve bütçeye göre yapılır. Erken aşamada çok kanala dağılmak kaynak israfıdır; önce 1–2 kanalı derin kazan.

Doğru kanal olmadan doğru mesaj ulaşamaz.

→ B2B                                                                                                                                                                                                                                    → B2C

B2B'de birincil kanallar: LinkedIn (thought leadership ve outreach), outbound email (doğrudan ulaşım), SEO/içerik (uzun vadeli organik) ve referral (en kaliteli lead kaynağı). Bu dört kanalın kombinasyonu çoğu B2B için yeterlidir.   B2C'de birincil kanallar: Instagram/TikTok (görsel ve video içerik), Google/Meta Ads (ölçeklenebilir erişim), SEO (organik trafik) ve email/SMS (lifecycle yönetimi). Kanal seçiminde hedef kitlenin hangi platformda zaman geçirdiği belirleyicidir.

Neden & Nasıl Yapılır?

Kanal seçiminde dört soruyu yanıtlayın: ICP bu kanalda mı? Mesajımız bu kanalda çalışır mı? Bu kanalı işletecek kapasite var mı? ROI pozitif olabilir mi? Bu dört soruya 'evet' varsa kanal birincil listeye girer. Birincil kanalları sabitleyin, diğerlerini test bütçesiyle deneyin.

B2B Kanal Öncelikleri

Kanal                   Güçlü Yönü                           Ne Zaman Öncelikli

LinkedIn Organik        Thought leadership, güven inşası     Her aşamada — düşük maliyet

Outbound Email          Doğrudan, kişiselleştirilebilir      Erken aşama müşteri edinimi

SEO & İçerik            Uzun vadeli organik trafik           Ürün olgunlaşınca

Referral & Partner      Yüksek kalite lead, güven devralma   İlk müşterilerden sonra

LinkedIn Paid           Hızlı erişim, rol hedefleme          Hızlı büyüme gerektiğinde

B2C Kanal Öncelikleri

Kanal                   Güçlü Yönü                        Ne Zaman Öncelikli

Instagram / TikTok      Görsel hikaye, community inşası   Marka farkındalığı ve engagement

Meta Ads                Geniş hedefleme, ölçeklenebilir   Hızlı kullanıcı edinimi

Google Ads              Intent bazlı, yüksek dönüşüm      Aktif arayanları yakalamak için

Email / SMS             Lifecycle, retention, upsell      Mevcut kullanıcı yönetimi

Influencer              Güven transferi, yeni kitle       Marka bilinirliği ve sosyal kanıt

Action Steps

11. ICP'nin hangi kanalda zaman geçirdiğini araştır ve doğrula

12. 1–2 birincil kanal seç ve derinleş — rakip kanalları test bütçesiyle dene

13. Her kanal için ayrı KPI ve başarı kriteri tanımla

14. Kanal performansını haftalık takip et

15. Kazanan kanalı tespit et ve bütçeyi oraya yoğunlaştır

Checklist

✔ ICP'nin kanalı doğrulandı mı?

✔ Birincil kanal seçildi mi?

✔ Her kanal için ayrı KPI var mı?

✔ Bütçe dağılımı kanal önceliğiyle uyumlu mu?

Kaçınılması Gereken Hatalar

✗ Çok kanala aynı anda yatırım yapmak — her kanalda ortalama sonuç, hiçbirinde mükemmel

✗ ICP'nin olmadığı kanala para harcamak — önce ICP'nin nerede olduğunu doğrula

✗ Kanalı test etmeden ölçeklendirmek — küçük testle kanıtla, sonra büyüt

📌 B2B Örnek                                                                                                                                                                                                           📌 B2C Örnek

B2B yazılım şirketi başlangıçta 6 kanala bütçe dağıttı. 3 ay sonra analiz yapıldı: MQL'lerin %78'i LinkedIn organik ve outbound'dan geliyordu. Diğer 4 kanal durduruldu, bu ikiye bütçe 3x artırıldı. CAC %42 düştü.   B2C kozmetik markası 4 platform yerine yalnızca TikTok'a odaklandı. İlk 3 ayda 50 içerik üretildi, format ve hook'lar test edildi. Kazanan formatlar belirlendi. 4. ayda paid TikTok başlatıldı — ROAS 4.2x çıktı.

Sorumlu Rol             Zaman Çerçevesi                    Başarı Kriteri

Marketing Lead          İlk 30 gün — revizyon: çeyreklik   Kanal öncelik sıralaması dokümante edilmiş, bütçe buna göre dağıtılmış`,
      },
      {
        id: "6-4",
        title: `6.4 Lansman Planlaması`,
        content: `TANIM & GENEL BAKIŞ

Lansman, ürünü duyurma anıdır — ama sadece o an değildir. İyi bir lansman planı öncesini, anını ve sonrasını kapsar. Hazırlıksız lansman fırsatı boşa harcar. B2B lansmanında hedef büyük gürültü değil, doğru kişilerde doğru etki yaratmaktır. B2C lansmanında ise momentum yaratmak ve organik yayılımı tetiklemek önceliklidir.

Lansman anlık değil, momentum'un başlangıcıdır.

→ B2B                                                                                                                                                                                               → B2C

B2B lansmanında: sales ve marketing hizalaması kritiktir. Sales ekibi lansmandan önce briefing almalı, pitch deck hazır olmalı, en az 2–3 referans müşteri veya beta kullanıcısı hazır olmalıdır.   B2C lansmanında: sosyal kanıt ve FOMO kritiktir. Bekleme listesi, pre-launch içerik, influencer aktivasyonu ve launch day kampanyası birlikte çalışmalıdır.

Lansman Takvimi

Dönem                   Süre                    Ana Aksiyonlar

Pre-Launch              8–12 hafta önce         ICP, messaging, içerik üretimi, beta listesi, sales briefing

Soft Launch             3–4 hafta önce          Beta müşteriler, ilk referanslar, case study, geri bildirim

Hard Launch             Lansman haftası         Tam kanal aktivasyonu, PR, email, sosyal medya, paid

Post-Launch             İlk 90 gün              Optimizasyon, öğrenme, momentum koruma, pipeline besleme

Lansman Kontrol Listesi

✔ ICP ve mesajlaşma tamamlandı ve onaylandı mı?

✔ Landing page ve demo/deneme akışı hazır mı?

✔ En az 2 referans müşteri veya case study hazır mı?

✔ Email listesi ve lansman sekansı hazır mı?

✔ Sales ekibi briefing aldı mı?

✔ CRM pipeline yapısı kuruldu mu?

✔ Analytics ve tracking kuruldu mu?

✔ Raporlama dashboard'u hazır mı?

Action Steps

16. Lansman tarihini sabitle ve geriye doğru planla

17. Her aşama için sorumlu kişi ata

18. Soft launch ile gerçek geri bildirim al ve mesajı güncelle

19. Hard launch için tüm kanalları aynı anda aktive et

20. Post-launch ilk 30 günü yoğun öğrenme dönemi olarak kullan

Kaçınılması Gereken Hatalar

✗ Hazırlıksız hard launch yapmak — mesajlaşma ve materyal eksikliği ilk izlenimi mahveder

✗ Sadece lansman gününe odaklanmak — momentum sonraki 90 günde kurulur

✗ Post-launch dönemini planlamayı unutmak — lansman bitince ekip dağılır, momentum kaybolur

📌 B2B Örnek                                                                                                                                                                                                                📌 B2C Örnek

B2B fintech aracı 10 haftalık hazırlık yaptı: soft launch'ta 15 beta kullanıcıdan geri bildirim alındı, 3 case study çıkarıldı. Hard launch'ta 8 kanalda aynı anda mesaj verildi. İlk haftada 120 MQL, ilk ayda 18 satış.   B2C sağlıklı içecek markası launch öncesi 6 hafta boyunca 'neden' içeriği paylaştı. Launch günü 500 kişilik bekleme listesi vardı. İlk 48 saatte stok tükendi. Post-launch 'sold out' story'leri yeni talep yarattı.

Sorumlu Rol                         Zaman Çerçevesi                  Başarı Kriteri

Marketing Lead + Sales Lead + CEO   8–12 hafta öncesinden planlama   Lansman checklist'i %100 tamamlanmış, tüm ekip briefed`,
      },
      {
        id: "6-5",
        title: `6.5 Satış ve Marketing Uyumu (Smarketing)`,
        content: `TANIM & GENEL BAKIŞ

Sales ve marketing uyumsuzluğu, B2B şirketlerinin en sık yaşadığı ve en pahalıya ödediği problemdir. Marketing lead üretir, satış 'kalitesiz' der. Satış 'ürün pahalı' der, marketing 'değeri anlatamıyorlar' der. Bu kısır döngü hem geliri hem morali zedeler. Çözüm basittir: ortak tanımlar, ortak metrikler ve düzenli iletişim.

Sales + Marketing = Smarketing. Bir ekip, bir hedef.

→ B2B                                                                                                                                                              → B2C

B2B'de sales-marketing uyumu revenue'yu doğrudan etkiler. MQL tanımı, handoff süreci ve feedback döngüsü her ikisinin de imzaladığı bir SLA ile sabitlenmelidir.   B2C'de 'sales' kavramı farklıdır — ama marketing ile e-ticaret/ürün ekibinin uyumu aynı derecede kritiktir. Kampanya, stok ve ürün hazırlığı koordinasyonsuz yapılırsa hem para hem müşteri kaybedilir.

Temel Tanımlar

MQL                  Marketing Qualified Lead — marketing'in nitelikli saydığı, satışa iletilen lead

SQL                  Sales Qualified Lead — satışın onayladığı, aktif satış süreci başlayan fırsat

MQL Kriterleri       İkisi birlikte belirlenmeli: firmographic + behavioral sinyal kombinasyonu

SLA                  Marketing x MQL/ay üretir, Sales y saat içinde geri döner — yazılı anlaşma

Closed-loop          Her lead'in akıbeti CRM'de takip edilir, marketing düzenli olarak bilgilendirilir

Action Steps

21. MQL ve SQL tanımlarını sales ile ortak otur ve yaz

22. SLA imzala — karşılıklı taahhüt olmadan sistem çalışmaz

23. Haftalık pipeline toplantısı kur — 30 dakika, her iki taraf

24. Marketing'e kaybedilen fırsatlardan düzenli geri bildirim ver

25. Ortak dashboard oluştur — aynı dataya bakın

Checklist

✔ MQL tanımı yazılı ve her iki tarafça onaylı mı?

✔ SLA belirlendi mi?

✔ Haftalık cadans kuruldu mu?

✔ Ortak raporlama var mı?

✔ Closed-loop feedback çalışıyor mu?

Kaçınılması Gereken Hatalar

✗ MQL'ü sadece marketing'in tanımlaması — satışın kabul etmediği tanım işe yaramaz

✗ Lead handoff'u manuel ve belirsiz bırakmak — CRM'de net kural olmadan lead kaybolur

✗ Sales feedback'ini marketing stratejisine yansıtmamak — saha bilgisi en değerli strateji girdisidir

📌 B2B Örnek                                                                                                                                                                                                                  📌 B2C Örnek

B2B SaaS şirketi MQL kriterlerini satışla birlikte yazdı: '10+ çalışan, demo sayfasını 2+ kez ziyaret, pricing sayfasını görmüş.' SLA: 4 saat içinde arama. 3 ay sonra SQL dönüşümü %38 arttı, satış döngüsü 6 gün kısaldı.   B2C D2C markası pazarlama ve operasyon ekiplerini her kampanya öncesi bir araya getirdi. Kampanya takvimi, stok durumu ve teslimat kapasitesiyle hizalandı. Önceki kampanyada yaşanan 'stok bitti, müşteri kızgın' krizi bir daha yaşanmadı.

Sorumlu Rol                         Zaman Çerçevesi                    Başarı Kriteri

COO + Marketing Lead + Sales Lead   İlk 30 gün — revizyon: çeyreklik   MQL tanımı yazılı, SLA imzalı, haftalık cadans aktif`,
      },
    ],
  },
  {
    id: "marketing-sistemi",
    num: "7",
    title: `MARKETİNG SİSTEMİ`,
    subtitle: `Altyapı, içerik, SEO, e-posta, paid, sosyal, partner`,
    subsections: [
      {
        id: "7-1",
        title: `7.1 Dijital Marketing Altyapısı`,
        content: `TANIM & GENEL BAKIŞ

Marketing altyapısı, tüm kararların dayandığı veri sisteminin fiziksel temelidir. Altyapı yanlış kurulduğunda ne kadar iyi strateji yazarsanız yazın, gerçekte neyin çalışıp neyin çalışmadığını göremezsiniz. Hangi kampanyanın satış ürettiğini bilmeden bütçe kararı almanız gerekir. Hangi içeriğin lead'e dönüştüğünü bilmeden içerik planı yaparsınız.

Altyapının en kritik özelliği tek kaynak olmasıdır. CRM, e-posta aracı, analytics ve reklam platformları birbirine bağlı değilse veri adaları oluşur. Satış ekibi CRM'de bir şey görür, marketing analytics'te başka bir şey görür, ikisi aynı gerçekliği tanımlamaz. Bu kopukluk hem stratejik hem de operasyonel kararları bozar.

→ B2B                                                                                                                                                                                                                                                                                                                                     → B2C

B2B altyapısının kalbi CRM'dir. HubSpot veya Pipedrive, lead'in ilk temastan kapanmış anlaşmaya kadar tüm yolculuğunu izler. Marketing otomasyonu CRM'e entegre çalışır: hangi lead hangi içeriği tüketmiş, hangi sayfaları ziyaret etmiş, hangi e-postayı açmış — bunları bilen bir satış temsilcisi çok daha güçlü bir konuşma yapar.   B2C altyapısının kalbi customer data platformu veya en az GA4 + e-posta aracı entegrasyonudur. Bir kullanıcının reklamdan siteye, siteden sepete, sepetten satın almaya ve tekrar satın almaya kadar izlenebilmesi her optimizasyon kararının temelidir. Meta Pixel olmadan Facebook reklamları kör çalışır.

Neden & Nasıl Yapılır?

Altyapıyı dört katmanda kurun. Bu sırayı bozmayın — her katman bir sonrakinin üzerine inşa edilir.

Katman                  Ne Yapılır                                                             Araç

1. Ölçüm                GA4 kur, conversion event'lerini tanımla, Meta/LinkedIn pixel'i ekle   GA4, Meta Pixel, LinkedIn Insight Tag

2. Standartlaştırma     UTM naming convention belirle, tüm ekip aynı formatı kullandı          Spreadsheet şablonu, URL builder

3. Entegrasyon          CRM + e-posta + analytics + reklam platformlarını birbirine bağla      HubSpot, Zapier, native entegrasyonlar

4. Görselleştirme       Tüm veriyi tek dashboard'da topla, otomatik haftalık rapor kur         Looker Studio, HubSpot dashboard

++
| UTM Naming Convention — Standart Format                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                          |
| utm_source: linkedin / google / email / instagram utm_medium: paid / organic / cpc / email / social utm_campaign: q1-awareness / product-launch / retargeting-demo utm_content: video-a / text-b / carousel Kural: Küçük harf, tire ile ayırma, tutarlı olma. 'LinkedIn' ve 'linkedin' sistem için iki farklı kaynaktır. |
++

Action Steps

1.  GA4 kur — demo talebi, kayıt, satın alma gibi tüm conversion event'lerini tanımla ve test et

2.  UTM convention dokümana yaz, ekiple paylaş, kampanya başlatmadan önce URL kontrolü zorunlu hale getir

3.  CRM seç ve marketing araçlarıyla entegre et — website form, e-posta, LinkedIn Ads, Google Ads

4.  Looker Studio'da temel dashboard kur: haftalık trafik, MQL, CAC, kanal bazlı dönüşüm

5.  Araç stack'ini yılda bir gözden geçir — kullanılmayan araç veri kirliliği ve gereksiz maliyet demektir

Checklist

✔ Tüm conversion event'ler GA4'te tanımlı ve test edildi mi?

✔ UTM convention belgelenmiş, tüm ekip uyuyor mu?

✔ CRM tüm marketing kanallarıyla entegre mi?

✔ Dashboard otomatik güncelleniyor mu?

✔ Araç stack'i tek bir spreadsheet'te dokümante mi?

Tool & Kaynaklar

GA4 + Looker Studio                Ücretsiz, güçlü kombinasyon. GA4 veri toplar, Looker Studio görselleştirir.

HubSpot (Ücretsiz tier)            B2B için CRM başlangıcı. Ücretsiz plan 1.000.000 contact'a kadar işe yarar.

Segment                            Customer Data Platform — tüm müşteri verisini tek yerde toplamak için. Büyük ölçekte kritik.

UTM.io veya Campaign URL Builder   UTM link oluşturma ve standartlaştırma için ücretsiz araçlar.

Kaçınılması Gereken Hatalar

✗ Conversion tracking kurmadan reklam açmak — hangi kampanyanın satış getirdiğini hiçbir zaman bilemezsiniz, bütçe optimizasyonu imkânsız hale gelir

✗ UTM'leri tutarsız kullanmak — 'LinkedIn' ve 'linkedin' ayrı kaynak olarak görünür, attribution verileri anlamsız hale gelir

✗ 7+ araç kullanıp hiçbirini entegre etmemek — veri adaları kararları bozar, doğru entegre 3 araç, kopuk 10 araçtan çok daha değerlidir

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                                📌 B2C Örnek

B2B SaaS şirketi CRM olmadan çalışıyordu, tüm lead'ler Excel'deydi. HubSpot kuruldu: website form, LinkedIn Ads ve e-posta entegre edildi. 3 ayda net görüldü: LinkedIn organic lead'lerin %42'si kapanıyordu, paid lead'lerin sadece %11'i. Paid bütçesi kesildi, organik içerik yatırımı artırıldı. Aynı toplam bütçeyle %38 daha fazla kapalı anlaşma.   B2C e-ticaret markası her kampanya için farklı UTM formatı kullanıyordu: kimi büyük harf, kimi küçük, kimi boşluk, kimi tire. Analytics'te 23 farklı 'linkedin' kaynağı görünüyordu. Standart UTM convention oluşturuldu, tüm ekip 1 saatlik eğitim aldı. 1 ay içinde hangi reklam setinin gerçekten satış getirdiği ilk kez görüldü — bütçenin %30'u verimsiz kampanyalardan kesildi.

Sorumlu Rol                    Zaman Çerçevesi                     Başarı Kriteri

Marketing Lead + Teknik Ekip   İlk 30 gün — yılda 1 stack review   Conversion tracking aktif, UTM %100 uyumlu, haftalık dashboard otomatik`,
      },
      {
        id: "7-2",
        title: `7.2 İçerik Stratejisi: Pillar-Cluster Modeli ve Repurposing Sistemi`,
        content: `TANIM & GENEL BAKIŞ

İçerik pazarlama, düzgün yapıldığında en yüksek bileşik ROI'ye sahip marketing kanalıdır. Ama 'düzgün yapılmak' kısmı kritiktir. Amaçsız üretilen içerik ne kadar çok olursa olsun birikmez — her içerik izole çaba olur ve kurumsal etki yaratmaz. Buna karşın iyi sistemleştirilmiş bir içerik stratejisi, zamanla rakip için neredeyse kopyalanamaz bir otorite biriktirir.

İçerik stratejisinin iki temel mekanizması vardır. Birincisi Pillar-Cluster modeli: birkaç ana konu etrafında derinlemesine içerik ağı kurulur, bu ağ arama motorunda otorite sinyali verir. İkincisi Repurposing: bir kez üretilen içerik birden fazla formata dönüştürülerek maksimum kanalda yaşar. Bu iki mekanizma birleştiğinde aynı kaynakla 5–10 kat daha fazla etki üretilir.

→ B2B                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   → B2C

B2B'de içerik bir güven oyunudur ve bu oyun uzun solukludur. Forrester araştırması gösteriyor ki B2B alıcıları satın alma kararından önce ortalama 3–13 içerik tüketiyor (FocusVision ve Gartner araştırmaları). Bu içeriklerin tamamı sizden gelmez ama funnel'ın her aşamasında sizin içeriklerinize erişebilmeleri gerekir. TOFU thought leadership kimin olduğunuzu anlatır; MOFU rehberler ve webinarlar güven inşa eder; BOFU case study'ler satın alma kararını kolaylaştırır.   B2C'de içerik ivme ve süreklilik oyunudur. Algoritmalar tutarlılığı ödüllendirir: her gün orta kalitede içerik, haftada bir mükemmel içerikten genellikle daha iyi organik erişim sağlar. Kısa form video (TikTok, Reels) keşif için, e-posta retention için, UGC (kullanıcı üretimi içerik) sosyal kanıt için güçlüdür. B2C'de içerik aynı zamanda community inşasının temelidir.

Neden & Nasıl Yapılır?

Pillar-Cluster modeli şöyle çalışır: Bir pillar sayfası seçin — örneğin 'B2B Lead Generation'. Bu sayfa o konunun kapsamlı, yetkili ve uzun (2.500+ kelime) kaynağıdır. Etrafında 8–12 cluster sayfası üretilir: 'LinkedIn'den lead nasıl toplanır', 'Cold email conversion oranı nasıl artırılır', 'Lead scoring modeli nasıl kurulur' gibi. Her cluster sayfası pillar'a bağlanır, pillar da tüm cluster'lara bağlanır. Google bu bağlantı ağını görür ve sizi o konunun otoritesi olarak tanımlar.

++
| Repurposing Zinciri — 1 İçerikten 10+ Format                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1 uzun blog yazısı (2.000 kelime, 1 araştırma, 1 hipotez): → 5 LinkedIn postu (her bölüm ayrı, konuşma dili) → 1 e-posta (özet + merak uyandıran hook + link) → 3 kısa video scripti (her birinde 1 somut insight, 60–90 saniye) → 1 infografik (veri ve adımlar görselleştirilir) → 1 podcast bölümü sorusu (röportajda o konuyu konuş) → 1 webinar slaytı (genişletilmiş versiyon) Toplam: Aynı araştırma, 12 farklı kanalda yaşar. |
++

İçerik Takvimi Yapısı

Funnel Katmanı          Aylık Hedef             Format ve Kanal

TOFU (Farkındalık)      8–12 içerik             LinkedIn post, TikTok/Reels, blog, podcast konuk bölümü

MOFU (Değerlendirme)    2–4 içerik              Derinlemesine rehber, webinar, karşılaştırma sayfası, e-posta serisi

BOFU (Karar)            1–2 içerik              Case study (sayısal), ROI hesap makinesi, demo videosu, referans listesi

Action Steps

6.  3–5 content pillar belirle — ICP'nin Google'da hangi soruları aradığını Ahrefs/SEMrush ile araştır

7.  Her pillar için 1 ana sayfa + 8–10 cluster sayfası planla, anahtar kelime ata

8.  Her yeni içerik için repurposing zincirini üretmeden önce belirle — hangi formatlara dönüşecek?

9.  İçerik takvimini Notion'a veya Linear'a gir, en az 2 hafta önceden doldur

10. Her ayın son haftası o ayın içerik performansını analiz et: hangi format en fazla lead getirdi?

Checklist

✔ Content pillar'lar ve cluster yapısı SEMrush/Ahrefs verisiyle belirlendi mi?

✔ Her funnel aşaması için içerik planlandı mı?

✔ Her içerik için repurposing zinciri önceden belirlendi mi?

✔ Takvim 2 hafta önceden dolu mu?

✔ Aylık performans analizi rutini kuruldu mu?

Kaçınılması Gereken Hatalar

✗ Yalnızca TOFU içerik üretmek — organik trafik gelir ama dönüşüm olmaz; funnel'ın altı boştur ve trafik boşa akar

✗ Pillar-cluster bağlantısı kurmadan içerik üretmek — her içerik izole çaba olur, SEO değeri birikmez, domain otoritesi artmaz

✗ İçerik üretip dağıtımı ihmal etmek — içerik ekibinin zamanının %50'si üretim, %50'si dağıtım için kullanılmalıdır; bu denge kurulmadan yatırım geri dönmez

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                                                               📌 B2C Örnek

B2B CRM şirketi 'Sales Pipeline Yönetimi' pillar sayfası oluşturdu, etrafında 11 cluster içerik yazdı. 9 ayda bu pillar kümesi için hedeflenen 15 anahtar kelimenin 12'sinde ilk sayfaya girdi. Aylık 2.800 organik ziyaretçi, bunların %7'si form doldurdu — 196 MQL, sıfır paid harcama. Aynı dönemde paid LinkedIn kampanyası aylık 180 MQL getiriyordu ama maliyeti 10 kat fazlaydı.   B2C yoga giyim markası haftada 5 TikTok içeriği yayınlamaya karar verdi ama repurposing yoktu — her video sıfırdan üretiliyordu. 3 ayda ekip tükendi, içerik kalitesi düştü, yayın sıklığı haftada 1'e indi. Sistem değiştirildi: haftada 1 uzun YouTube videosu → 5 TikTok clip + 3 Reels + 2 LinkedIn post. Aynı çabayla 10 içerik üretilir hale geldi, yayın sıklığı arttı.

Sorumlu Rol                     Zaman Çerçevesi                                   Başarı Kriteri

Marketing Lead + İçerik Ekibi   İlk 30 gün strateji + takvim — aylık güncelleme   Pillar-cluster yapısı kurulu, aylık takvim 2 hafta önceden dolu, aylık analiz yapılıyor`,
      },
      {
        id: "7-3",
        title: `7.3 SEO: Teknik Temel, Niyet Odaklı Kelimeler ve Otorite İnşası`,
        content: `TANIM & GENEL BAKIŞ

SEO, bileşik büyümenin en güçlü kanalıdır. Bugün yapılan doğru bir SEO yatırımı 6–12 ay sonra meyve verir ve bu meyve yıllarca devam eder. Paid reklam durduğunda trafik durur; ama SEO ile kazanılan bir #1 sıralama, siz aktif olmadan da trafik üretmeye devam eder. Bu asimetri SEO'yu uzun vadede en yüksek ROI'li kanal yapan şeydir.

SEO'nun en kritik yanlış anlaması şudur: hacim odaklı kelimeler hedeflemek. 'CRM yazılımı' kelimesi 40.000 aylık arama hacmine sahip olabilir ama domain otoritesi yüksek büyük oyuncularla dolu bir rekabet ortamında yeni bir markanın bu kelimede sıralanması yıllar alır. Oysa 'küçük işletmeler için CRM yazılımı ücretsiz deneme' gibi uzun kuyruk bir kelime 200 aylık arama hacmiyle çok daha düşük rekabete ve çok daha yüksek satın alma niyetine sahiptir. Tüm strateji bu denge üzerine kurulmalıdır.

→ B2B                                                                                                                                                                                                                                                                                                                                                                                                                    → B2C

B2B SEO'sunda niyet hiyerarşisi şöyledir: en değerli kelimeler BOFU niyeti taşır — '[rakip adı] alternatifi', '[kategori] yazılımı fiyat', '[kategori] karşılaştırması'. Bu aramalar yapan kişi aktif olarak satın alma değerlendirmesi yapıyordur. İkinci öncelik MOFU rehber kelimeleri, üçüncü öncelik TOFU farkındalık kelimeleridir. Çoğu şirket bu sırayı tersine çevirir ve yıllarca beklediği trafiği göremez.   B2C SEO'sunda ürün ve kategori sayfaları önce gelir. Her kategori için 'en iyi', 'ucuz', 'kaliteli', 'doğal' gibi modifier'larla uzun kuyruk kelimeler hedeflenir. Blog içerikleri bu sayfaları destekler ve SEO değeri aktarır. Programatik SEO — büyük ölçekte şablonla oluşturulan sayfalar — e-ticaret markası için güçlü bir büyüme taktiğidir.

Neden & Nasıl Yapılır?

SEO'yu dört katmanda yönetin ve bu sırayı bozmayın. Teknik sorunlar varken içerik üretmek boşa gider çünkü Google hatalı sayfaları crawl etmez veya yavaş sayfaları cezalandırır.

SEO Katmanı             Ne Yapılır                                                                                                                   Öncelik

Teknik SEO              Core Web Vitals (LCP < 2.5s, CLS < 0.1), mobile uyum, sitemap, robots.txt, kırık link temizliği                              İlk — temel sağlam olmalı

On-Page SEO             Her sayfa tek anahtar kelimeye odaklanır, H1'de kelime geçer, meta title 50–60 karakter, meta description 150–160 karakter   İkinci — her içerikte uygulanır

İçerik SEO              Pillar-cluster yapısı (`,
      },
      {
        id: "7-2",
        title: `7.2), uzun form içerik (1.500+ kelime), iç linkleme sistemi                                           Üçüncü — sürekli üretim`,
        content: `Link Building           PR ile earned backlink, ortak araştırma, sektör dizinleri, broken link building                                              Dördüncü — uzun vadeli otorite

Anahtar Kelime Önceliklendirme Mantığı

Kelime seçiminde iki boyut değerlendirilir: arama niyeti (ne kadar satın almaya yakın?) ve rekabet zorluğu (bu kelimede kazanabilir miyiz?). İdeal kelime: yüksek satın alma niyeti + düşük rekabet. Bu genellikle uzun kuyruk ve spesifik kelimelerdir.

Niyet Türü                   Arama Örnekleri                                                 Strateji

Transactional (Satın alma)   'fiyat', 'satın al', 'ücretsiz deneme', '[rakip] alternatifi'   Landing page ve ürün sayfası — doğrudan dönüşüm hedefi

Commercial (Değerlendirme)   'en iyi', 'karşılaştırma', 'inceleme', '[kategori] için'        Rehber ve karşılaştırma sayfası — güven inşası

Informational (Bilgi)        'nasıl yapılır', 'nedir', 'neden', 'ne zaman'                   Blog ve pillar içerik — otorite ve trafik

Action Steps

11. Screaming Frog ile teknik SEO denetimi yap — tüm hataları listele ve kritikleri önce düzelt

12. Ahrefs veya SEMrush ile rakiplerin hangi kelimelerden trafik aldığını analiz et

13. Transactional ve commercial niyetli 20 BOFU kelimesi belirle ve önceliklendir

14. Her hedef kelime için içerik türü belirle: landing page mi, blog mu, karşılaştırma mı?

15. İç linkleme kuralı koy: her yeni içerik en az 3 eski içeriğe link vermeli, en az 3 eski içerik yeni içeriğe

16. Google Search Console'u haftalık kontrol et — hangi kelimede impression var ama tıklama yok? O sayfa optimize edilmeli.

Checklist

✔ Core Web Vitals tüm sayfalarda yeşil mi?

✔ Her sayfanın hedef anahtar kelimesi var mı, H1'de geçiyor mu?

✔ BOFU kelimeler için içerik üretildi mi?

✔ İç linkleme sistematik mi?

✔ Google Search Console haftalık izleniyor mu?

Tool & Kaynaklar

Ahrefs / SEMrush            Anahtar kelime araştırması, rakip analizi, backlink profili. Aylık ~$99 — vazgeçilmez.

Google Search Console       Gerçek arama verileri, indexing sorunları, Core Web Vitals. Ücretsiz ve zorunlu.

Screaming Frog SEO Spider   Teknik SEO denetimi — kırık linkler, duplicate content, yavaş sayfalar. 500 URL'ye kadar ücretsiz.

PageSpeed Insights          Core Web Vitals analizi ve iyileştirme önerileri. Google'ın resmi aracı, ücretsiz.

Kaçınılması Gereken Hatalar

✗ Yüksek hacimli genel kelimeleri hedeflemek — domain otoritesi düşükken 'proje yönetim yazılımı' gibi kelimelerde yıllarca beklersiniz; uzun kuyruk BOFU kelimeler çok daha hızlı sonuç verir

✗ İçerik üretip iç linkleme kurmamak — her içerik izole kalır, site otoritesi birikmez, Google konular arasındaki bağlantıyı göremez

✗ SEO'yu tek seferlik yapmak — algoritma güncellenir, rakipler içerik üretir, Google Search Console'u izlemeden fırsatlar ve tehditler görünmez kalır

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                                                          📌 B2C Örnek

B2B muhasebe yazılımı önce 'muhasebe yazılımı' kelimesini hedefledi. 18 ay boyunca 4. sayfadan öteye gidemedi. Strateji değişti: 'serbest muhasebeci yazılımı ücretsiz', 'Parasut alternatifi', 'e-fatura entegrasyonu muhasebe' gibi 18 spesifik BOFU kelimesi hedeflendi. 6 ayda 13 kelimede ilk sayfaya girdi. Organik trafik 240'dan 3.100'e çıktı, aylık 85 organik MQL geldi.   B2C bebek ürünleri markası genel 'bebek bezi' kelimesi yerine 'hassas ciltli bebekler için bezi', 'organik pamuklu bebek bezi', 'kuru tutma özelliği bebek bezi' gibi uzun kuyruk kelimeleri hedefledi. Her birisi için 800–1200 kelimelik içerik yazıldı ve ürün sayfasına iç link verildi. 5 ayda 9 kelimede ilk üçe girdi. Organik gelir %67 arttı.

Sorumlu Rol                   Zaman Çerçevesi                                    Başarı Kriteri

Marketing Lead + SEO Uzmanı   İlk 60 gün teknik + BOFU içerik — sürekli üretim   BOFU kelime sıralamaları ve aylık organik MQL sayısı takip ediliyor`,
      },
      {
        id: "7-4",
        title: `7.4 E-posta Pazarlaması: Segmentasyon, Lead Scoring ve Lifecycle Sekansları`,
        content: `TANIM & GENEL BAKIŞ

E-posta, ROI açısından tutarlı biçimde tüm dijital kanallar arasında ilk sıraya girer. Litmus'un 2023 araştırmasına göre e-posta pazarlamasının ortalama ROI'si harcanan her dolar için 36 dolardır. Ama bu ortalama yalnızca doğru yapılan e-posta pazarlaması için geçerlidir. Yanlış yapılan e-posta — segmentasyon olmadan herkese aynı mesajı göndermek, çok sık yazmak, yalnızca promosyon içeriği paylaşmak — listeyi yakar, domain itibarını düşürür ve marka algısını zedeler.

E-posta pazarlamasını etkili yapan üç prensip vardır. Birincisi doğru kişiye doğru mesaj: segmentasyon ve kişiselleştirme olmadan gönderilen her e-posta potansiyel değil, gürültüdür. İkincisi doğru zamanda: davranış tetikleyicileri zamanlamayı otomasyona bırakır — kullanıcı bir eylemi gerçekleştirdiğinde, o eyleme özel mesaj anında gider. Üçüncüsü değer önce, satış sonra: e-posta listesine yazdığınız her mesaj 'bu kişinin hayatına ne katıyor?' sorusunu yanıtlamalıdır.

→ B2B                                                                                                                                                                                                                                                                                                                                                                                                     → B2C

B2B e-postasının özü lead nurturing'dir. Bir B2B alıcısı araştırma sürecine girdiğinde satın almaya hazır değildir — ortalama 3–6 ay boyunca bilgi toplar, karşılaştırır ve güven inşa eder. Bu süreçte düzenli, değerli e-posta içerikleri 'akıllarda kalmayı' sağlar. Lead scoring ise bu süreçte satışa en hazır leadleri tespit eder: demografik fit × davranışsal engagement = lead öncelik skoru.   B2C e-postasının özü davranışsal tetikleyicilerdir. Sepeti terk etme, ilk satın alma sonrası teşekkür, 30 gün inaktiflik, doğum günü — her davranış veya olay özelleştirilmiş bir mesajı tetikler. Bu sekanslar kurulduktan sonra otomatik çalışır ve sürekli gelir üretir. B2C'de e-posta listesi büyüklüğü kadar kalitesi de kritiktir: düşük engagement oranı olan büyük liste, yüksek engagement oranı olan küçük listeden daha az değer üretir.

Neden & Nasıl Yapılır?

Lead scoring modelinde iki boyutu birleştirin. Demografik fit skoru: şirket büyüklüğü, sektör, karar verici rolü — ICP'ye ne kadar uyuyor? (0–50 puan). Davranışsal engagement skoru: website ziyaret sıklığı, içerik indirme, e-posta açma/tıklama, fiyat sayfası ziyareti, demo sayfası ziyareti — satın alma niyetini gösteriyor mu? (0–50 puan). Toplam 100 üzerinden değerlendirme: 70+ puan = satış için hazır, 40–70 = nurture et, 40 altı = soğuk.

Temel Sekans Yapısı ve Mantıkları

Sekans                                 Tetikleyici ve Süre                 Her E-postanın Mantığı

Hoş Geldin (5 e-posta / 10 gün)        İlk kayıt veya deneme başlangıcı    1: Beklentiyi yönet, ne alacaklarını söyle. 2: En büyük pain point'i ele al. 3: Ürünün nasıl çözdüğünü göster. 4: Sosyal kanıt (müşteri hikayesi). 5: İlk adımı at (demo, onboarding).

Nurture (8 e-posta / 4 hafta)          İçerik indirme veya webinar kaydı   Değer → değer → değer → yumuşak CTA döngüsü. Her e-posta bir soruyu yanıtlar veya bir insight sunar.

Satış Hazırlık (3 e-posta / 1 hafta)   Lead scoring 70+ eşiğini geçince    1: Case study + ROI hesabı. 2: Sık sorulan sorular + itiraz yönetimi. 3: Doğrudan demo daveti + calendar link.

Win-back (4 e-posta / 2 hafta)         30+ gün inaktif lead veya müşteri   1: 'Seni özledik' + yeni içerik. 2: Değer hatırlatma. 3: Özel teklif. 4: 'Son şans' — sonra listten çıkar.

Sağlıklı E-posta Metrikleri

Açılma Oranı          B2B hedef: >%35 / B2C hedef: >%22. Düşükse konu satırı veya gönderme zamanı sorunu. Sabah 9–10 veya öğle 12 genellikle en iyi zamanlardır.

Tıklama Oranı (CTR)   B2B hedef: >%4 / B2C hedef: >%2.5. Düşükse içerik alaka düzeyi veya CTA görünürlüğü sorunu.

Unsubscribe Oranı     Sağlıklı: <%0.5. Üzerindeyse çok sık gönderiyorsunuz ya da konu dışı içerik var. Liste temizliği gerekiyor.

Spam Şikayeti         Zorunlu: <%0.1. Üzerindeyse domain itibarı düşer, gelecekteki e-postalar spam klasörüne gider. Kritik.

Action Steps

17. CRM'de lead scoring modelini kur: demografik fit (0–50) + behavioral engagement (0–50) = toplam puan

18. MQL eşiğini sales ile birlikte belirle: kaç puan sales'e aktarılmaya hazır?

19. Hoş geldin ve nurture sekanslarını yaz — her e-posta için subject line A/B testi planla

20. Segmentasyon kurallarını belirle: sektör bazlı, büyüklük bazlı, davranış bazlı ayrı listeler

21. Haftalık e-posta metrik review: açılma oranı, tıklama, unsubscribe — anomali tespit et, düzelt

Checklist

✔ Lead scoring modeli kuruldu mu (demografik + behavioral)?

✔ MQL eşiği sales ile birlikte belirlendi mi?

✔ Temel sekanslar (hoş geldin, nurture, win-back) aktif mi?

✔ Segmentasyon çalışıyor mu?

✔ Metrikler sağlıklı referans değerlerde mi?

✔ GDPR / KVKK uyumu sağlandı mı?

Kaçınılması Gereken Hatalar

✗ Tüm listeye aynı e-postayı göndermek — 'herkese her şey' yaklaşımı açılma oranını düşürür, marka değerini zedeler ve dönüşümü minimuma indirir

✗ Haftada 3+ e-posta göndermek — sıklık eşiği aşıldığında unsubscribe patlar; daha az ama daha değerli e-posta her zaman kazanır

✗ E-postayı yalnızca promosyon için kullanmak — değer:satış oranı en az 3:1 olmalı, aksi halde liste güveni kaybeder ve açılma oranları sürekli düşer

📌 B2B Örnek                                                                                                                                                                                                                                                                                             📌 B2C Örnek

B2B SaaS şirketi tüm listeye aylık tek bir bülten gönderiyordu. Segmentasyon kuruldu: startup, KOBİ ve enterprise için ayrı içerik. Her segmente farklı case study ve pain point. Açılma oranı %19'dan %44'e, tıklama %1.3'ten %6.2'ye çıktı. Aynı liste büyüklüğüyle 3x daha fazla demo talebi geldi.   B2C abonelik kutu servisi win-back sekansı kurdu: 45 gün sipariş vermeyenlere 4 e-posta gönderildi. 1. e-posta: 'Seni özledik + yeni ürünler' (açılma %41). 2. e-posta: müşteri hikayesi + '%15 hoş geldin' kuponu (tıklama %18). 3. e-posta: 'Bu ay en çok satan ürünler' (dönüşüm %9). 4. e-posta: 'Son 48 saat' (aciliyet). Segmentin %22'si bu sekansla geri döndü.

Sorumlu Rol                   Zaman Çerçevesi                     Başarı Kriteri

Marketing Lead + CRM Uzmanı   İlk 45 gün — sürekli optimizasyon   Açılma >%35 (B2B) / >%22 (B2C), lead scoring aktif, sekanslar çalışıyor`,
      },
      {
        id: "7-5",
        title: `7.5 Performans Pazarlaması: Kampanya Mimarisi ve Kreatif Yönetimi`,
        content: `TANIM & GENEL BAKIŞ

Paid media iki rolü aynı anda üstlenir: hız ve test. Organik büyüme zamanla gelir; paid reklam ise bugün belirli bir kitleye belirli bir mesajı ulaştırabilir ve geri dönüşünü ölçebilir. Bu özellik onu strateji testinin en hızlı aracı yapar. Bir mesaj paid'da %3 CTR alıyorsa o mesajı web sitenizin hero section'ına, soğuk e-postanıza ve satış deck'inize taşıyın. Paid'ın öğrettiklerini organic'e beslemek en güçlü kullanım şeklidir.

Paid media başarısızlığının üç klasik nedeni vardır. Birincisi yanlış kitleye doğru mesaj: soğuk bir kitleye 'hemen satın al' mesajı vermenin satışa dönüşme olasılığı %0'a yakındır. İkincisi doğru kitleye yanlış landing page: iyi reklam kötü sayfaya gönderilirse bütçe yanar. Üçüncüsü kreatif yorgunluğu: aynı görsel ve metin haftalarca yayında kalırsa CTR düşer, CPC artar ve ROI bozulur. Bu üç nedeni engellemek kampanya mimarisinin özüdür.

→ B2B                                                                                                                                                                                                                                                                                                                                                                                                                               → B2C

B2B paid media'da LinkedIn Ads birincil kanaldır çünkü role, şirkete, sektöre ve hatta spesifik şirket isimlerine (Account-Based Marketing) göre hedefleme imkânı sunar. CPM $15–60 arasında yüksektir ama kitle kalitesi yüksektir. Google Search ise aktif arayanları yakalamak için kritiktir: biri 'proje yönetim yazılımı ücretsiz deneme' diye arıyorsa satın alma niyeti taşıyordur. Bu iki kanal birlikte yürütülmelidir.   B2C paid media'da Meta Ads (Facebook + Instagram) ve TikTok Ads geniş erişim ve gelişmiş hedefleme imkânıyla güçlüdür. Lookalike audience — mevcut müşterilere benzer kitleler — B2C'de çok etkilidir. Ancak B2C'de kreatif her şeydir: format, müzik seçimi, ilk 3 saniye hook'u. Aynı mesaj farklı kreatifte 5x farklı performans gösterebilir. Bu yüzden haftalık yeni kreatif üretimi ve rotasyonu zorunludur.

Neden & Nasıl Yapılır?

Kampanya mimarisi funnel katmanına göre yapılandırılır. Her katmanın farklı hedef kitlesi, farklı mesajı ve farklı başarı metriği vardır. Awareness kampanyasını dönüşüm oranıyla değerlendirmek yanlış optimizasyon kararlarına yol açar. Funnel katmanlarını ayrı kampanyalarda tutun ve her birini kendi metriğiyle ölçün.

Kampanya Mimarisi

Katman                  Hedef Kitle ve Mesaj                                                                                                               Başarı Metriği

Awareness (Soğuk)       ICP profilindeki, sizi tanımayan kişiler. Mesaj: problem tanımı, sektör içgörüsü, thought leadership.                              CPM, video completion rate, reach. CTR beklentisi düşük — amaç bilinirlik.

Consideration (Ilık)    Sitenizi ziyaret etmiş, içerik tüketmiş veya video izlemiş. Mesaj: çözüm, case study, webinar daveti.                              CTR, lead başına maliyet (CPL). Dönüşüm başlamaya başlar.

Conversion (Sıcak)      Fiyat sayfasını görmüş, demo formunu yarım bırakmış, belirli içerikleri tüketmiş. Mesaj: doğrudan teklif, garanti, sosyal kanıt.   CPA (müşteri başına maliyet), ROAS. Dönüşüm odaklı.

Retargeting             7–30 gün içinde siteye gelmiş ama dönüşmemiş. Mesaj: kişiselleştirilmiş hatırlatma, özel teklif.                                   Retargeting dönüşüm oranı, CPA. Sıcak kitle en düşük CPA'yı verir.

Kreatif Yönetimi ve Yorgunluk Döngüsü

Kreatif yorgunluğu, aynı görselin ve metnin sürekli gösterilmesiyle hedef kitlenin o reklama duyarsızlaşmasıdır. Belirtileri: CTR düşer, CPC artar, frequency artar. B2C'de 3–5 günde, B2B'de 10–14 günde kreatif yorgunluğu başlayabilir. Çözüm: sürekli yeni kreatif üretimi ve A/B test döngüsü.

++
| Kreatif Test Framework                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                  |
| Her kampanya başlatıldığında en az 3 varyant hazırla: - Varyant A: Rational (sayı, veri, ROI odaklı) - Varyant B: Emotional (problem hikayesi, empati) - Varyant C: Social proof (müşteri sözü, rating, logo) 3–5 günde kazananı belirle, kaybedenleri kapat, yeni varyantlar ekle. Bu döngü sürekli devam eder. |
++

Action Steps

22. Conversion tracking'i kur ve doğrula — her kampanyayı başlatmadan önce bu adım tamamlanmış olmalı

23. ICP bazlı audience segmentleri oluştur: soğuk (ICP profil), ılık (website ziyaretçisi), sıcak (fiyat sayfası ziyaretçisi)

24. Her kampanya için ayrı landing page oluştur — ana sayfaya yönlendirme yapma, relevance score düşer

25. Her kampanyada 3 kreatif varyant başlat (rational / emotional / social proof)

26. Haftalık optimizasyon rutini: CTR < %0.5 ise kreatifi değiştir; frequency > 4 ise kitleyi yenile; CPA hedefin 2 katını geçmişse duraklat

Checklist

✔ Conversion tracking kurulu ve doğrulanmış mı?

✔ Kampanya mimarisi funnel katmanlarına göre ayrıldı mı?

✔ Her kampanya için ayrı landing page var mı?

✔ 3 kreatif varyant aktif mi?

✔ Haftalık optimizasyon rutini tanımlı mı?

Kaçınılması Gereken Hatalar

✗ Soğuk kitleye doğrudan dönüşüm mesajı vermek — 'sizi hiç duymamış birine şimdi satın al demek düğünde tanıştığın birine evlilik teklif etmek gibidir'; önce güven, sonra satış

✗ Landing page'i optimize etmeden bütçeyi artırmak — dönüşüm oranı %0.8 olan bir sayfaya 10x bütçe vermek 10x daha fazla kayıptır; önce sayfayı optimize et

✗ Aynı kreatifte aylarca devam etmek — frequency 6+ olduğunda hedef kitle reklamı görmezden gelir, bütçe boşa harcanır

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                                                            📌 B2C Örnek

B2B SaaS şirketi soğuk LinkedIn kampanyasında 'Hemen Demo Al' CTA'sı kullanıyordu. CPL $280, düşmüyordu. Mimari değişti: soğuk kitleye 'ücretsiz sektör benchmark raporu' ile lead magnet kampanyası açıldı. Isınan kitleye (raporu indirenlere) retargeting'de demo teklifi yapıldı. CPL $74'e düştü, gelen demo'ların kalitesi arttı çünkü raporla zaten ilgilenmiş olan kişilerdi.   B2C fitness uygulaması Meta Ads'de tek kreatifte 3 ay devam etti. İlk ay ROAS 4.1, ikinci ay 2.3, üçüncü ay 1.6 — kreatif yorgunluğu. Haftalık kreatif rotasyonu sistemine geçildi: her Pazartesi 3 yeni kreatif eklenir, Cuma'da en düşük CTR'lı 3 kreatif kapatılır. ROAS 3.8'e döndü ve istikrar kazandı.

Sorumlu Rol                          Zaman Çerçevesi                                Başarı Kriteri

Marketing Lead + Performance Ekibi   Lansman ile birlikte — haftalık optimizasyon   Her kampanya için ROAS ve CPA hedefleri belirlendi, haftalık raporlanıyor`,
      },
      {
        id: "7-6",
        title: `7.6 Sosyal Medya: Algoritma Mantığı, İçerik Karması ve Community`,
        content: `TANIM & GENEL BAKIŞ

Sosyal medyada büyümenin tek yolu algoritmayı anlamak değil, algoritmayı memnun eden içerikleri tutarlı biçimde üretmektir. Her platform farklı bir algoritmik mantıkla çalışır: LinkedIn organik erişimi yorumları ödüllendirir (özellikle ilk saatte gelen yorumlar), TikTok tamamlanma oranını ödüllendirir, Instagram Reels paylaşımları ödüllendirir. Bu farkları bilmeden tüm platformlara aynı içeriği atmak, her platformda mediocre olmak demektir.

Community ise sosyal medyanın bir üst katmanıdır. Sosyal medyada kitleyle yayın üzerinden iletişim kurarsınız; community'de ise üyeler birbirleriyle ve sizinle doğrudan etkileşir. Bu etkileşim güven, bağlılık ve advocacy üretir. Güçlü community olan şirketlerin ürünlerine müşteri eşsiz bir bağlılık hisseder — rakip ürün çıksa bile geçmek istemezler çünkü community'den ayrılmak ürünü bırakmaktan daha zordur.

→ B2B                                                                                                                                                                                                                                                                                                                                                                                                                                        → B2C

B2B'de LinkedIn thought leadership en güçlü sosyal medya stratejisidir. Ama kritik bir bulgu: şirket hesabı değil kurucu ve ekip üyelerinin kişisel hesapları 5x daha fazla engagement, 3x daha fazla impression sağlar. LinkedIn algoritması kişisel hesapları ağırlıklı olarak destekler çünkü 'insan sesi' şirket sayfasından daha güvenilir algılanır. Bu yüzden B2B'de personal branding stratejisi corporate stratejiden önce gelir.   B2C'de platform seçimi hedef kitlenin yaş ve dijital davranışına göre yapılır: Gen Z için TikTok, Millennial-Gen X için Instagram ve Pinterest, 35–55 yaş için Facebook ve e-posta daha etkilidir. Ama hangi platform seçilirse seçilsin, içerik o platforma özel formatlanmalıdır — TikTok'ta YouTube thumbnail tarzı kapak görseli kullanmak, orada büyümek isteyen bir marka için yanlış sinyaldir.

Neden & Nasıl Yapılır?

LinkedIn için kanıtlanmış içerik karması (çeşitli analizlere göre): %40 thought leadership (kişisel görüş, sektör içgörüsü, karşıt bakış açısı), %30 eğitici içerik (adım adım rehber, framework, checklist, 'öğrendiklerim' paylaşımları), %20 sosyal kanıt (case study özeti, müşteri alıntısı, milestone kutlama), %10 kültür ve ekip (şirketin insani yüzü). Bu karma hem güven hem de erişim için optimize edilmiştir.

LinkedIn Algoritması — Nasıl Çalışır

Sinyal                        Etkisi                                               Strateji

İlk 1 saatteki yorum sayısı   Çok yüksek — post dağılımını belirler                İlk 1 saatte kendi yorumunuzu yapın, bağlantılarınızı yoruma davet edin

Yorum kalitesi (uzunluk)      Yüksek — 'Harika!' tek kelime yorum değer taşımaz    Düşünce uyandıran sorular sor, uzun yorum gelsin

Dwell time (okuma süresi)     Orta-yüksek — 'daha fazla gör' için tıklanma bekle   Hook güçlü olsun, ilk 2 satır merak uyandırsın

Paylaşım sayısı               Yüksek — viral potansiyel burada başlar              İnsanların paylaşmak isteyeceği içerik: liste, içgörü, veri

Community Büyüme Aşamaları

Aşama                   Üye Sayısı              Strateji ve Aksiyonlar

Kuruluş                 0 → 100                 Elle, bire bir davet. Her üyeyle tanış. Değer normlarını belirle. Hiçbir duyuru yokken bile değer üret.

Büyüme                  100 → 1.000             Champion programı kur — en aktif 10 üyeyi özel statüyle ödüllendir. Haftalık etkinlik ve soru-cevap başlat.

Ölçekleme               1.000+                  Moderasyon sistemi kur, alt gruplar oluştur (sektör, konu), yıllık fiziksel buluşma planla.

Action Steps

27. ICP'nin en aktif olduğu platformu veriyle tespit et — 5 müşteriyle kısa görüşme, hangi platformda vakit geçiriyorlar?

28. LinkedIn için haftalık 4–5 post takvimi oluştur: 2 thought leadership, 1 eğitici, 1 sosyal kanıt, 1 kültür

29. 'Golden hour' rutini kur: her post yayınlandıktan sonra ilk 1 saat aktif kal, tüm yorumlara yanıt ver

30. Community için Slack, Discord veya WhatsApp seç — ilk 50 üyeyi kişisel olarak davet et, neden olduklarını söyle

31. Community haftalık değer rutini belirle: Pazartesi kaynak, Çarşamba soru-cevap, Cuma üye başarısı

Checklist

✔ Birincil platform veriyle seçildi mi?

✔ Haftalık içerik takvimi ve format karması belirlendi mi?

✔ Golden hour rutini kuruldu mu?

✔ Community'de haftalık değer üretiliyor mu?

✔ Community büyüme metrikleri takip ediliyor mu?

Kaçınılması Gereken Hatalar

✗ Şirket sayfasına odaklanıp kurucu hesabını ihmal etmek — B2B'de kişisel hesap şirket sayfasından 5–10x daha fazla organik erişim sağlar; kurucu sesi güven transferi yapar

✗ Tutarsız yayınlamak — LinkedIn algoritması düzenli içerik üreten hesapları ödüllendirir; haftada 5 post sonra 2 hafta sessizlik, algoritmanın sizi unutmasına yol açar

✗ Community'i duyuru kanalına dönüştürmek — üyeler değer almak için katılır, sadece ürün haberleri görmek için değil; içeriğin en az %70'i bağımsız değer sunmalı

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                                     📌 B2C Örnek

B2B yazılım kurucusu LinkedIn'de sistematik şekilde paylaşmaya başladı: haftada 4 içerik, konular sektör içgörüsü ve şirkette öğrendikler üzerine. Her postun ilk yorumunu kendi yapıyor, ilk 1 saatte aktif kalıyor. 6 ayda hesap 0'dan 11.000 takipçiye çıktı. Aylık gelen inbound demo taleplerinin %42'si 'LinkedIn'den gördüm' oldu — sıfır paid harcama.   B2C sağlıklı beslenme markası 400 kişilik WhatsApp community kurdu. Haftalık program: Pazartesi tarif, Çarşamba beslenme ipucu, Cuma üye başarı hikayesi. Community üyelerinin 6 aylık repeat purchase oranı %76'yken, genel kullanıcı tabanının oranı %29'du. Community üyeleri ortalama 2.3x daha fazla sipariş verdi.

Sorumlu Rol                          Zaman Çerçevesi                   Başarı Kriteri

Marketing Lead + Community Manager   İlk 30 gün — haftalık operasyon   Haftalık LinkedIn erişimi, community aktif üye sayısı ve engagement oranı takip ediliyor`,
      },
      {
        id: "7-7",
        title: `7.7 Partner ve Affiliate Marketing: Güven Transferi ve Ölçeklenebilir Büyüme`,
        content: `TANIM & GENEL BAKIŞ

Partner ve affiliate marketing, büyümenin en az tartışılan ama en yüksek ROI potansiyeline sahip kanallarından biridir. Bunun arkasındaki mekanizma güven transferidir. ICP'niz bir kişiyi tanıyor, o kişi sizi öneriyor — güven otomatik olarak size aktarılıyor. Bu durumda satış sürecinin en büyük engeli olan 'bu şirkete güvenebilir miyim?' sorusu daha karşınıza çıkmadan yanıtlanmış oluyor.

Partner kanalını doğru yönetmenin iki kritik prensibi vardır. Birincisi: nicelik değil kalite. 200 pasif partner, aktif 5 partnerden değersizdir. İkincisi: karşılıklı değer. Siz kazanıyorsunuz diye partner kazanmıyor değildir — her iyi ortaklık her iki tarafa da net değer sağlar. Bu denge kurulmadan partner motivasyonu düşer ve program ölür.

→ B2B                                                                                                                                                                                                                                                                                                                                                                                                                             → B2C

B2B'de en güçlü partner türleri şunlardır: teknoloji ortakları (entegre ürünler birlikte daha değerli olur, müşteri her ikisini kullanır — bu geçiş maliyeti yaratır ve moat'ı güçlendirir), bağımsız danışmanlar ve ajanslar (müşterilerine yazılım önerirler, zaten güven ilişkisi kurulmuştur), ve sektör düşünce liderleri (blog, podcast, newsletter sahibi uzmanlar, niş kitlelerine çok güçlü güven transferi yaparlar).   B2C'de mikro-influencer (1K–50K takipçi) ve nano-influencer (1K–10K) mega-influencer'dan çoğu zaman daha yüksek ROI sağlar. Bunun nedeni: niş kitle yüksek güven demektir. 100K takipçisi olan genel bir influencer %0.5 dönüşüm oranı üretebilirken, 8K takipçisi olan ama 'yeni anneler' alanında uzman bir kişi %4.5 dönüşüm üretebilir. Bu farkı anlamak partner seçiminin özüdür.

Neden & Nasıl Yapılır?

Partner programı üç aşamada kurulur. Birinci aşama ideal partner profilini belirlemek: 'Hedef müşterimiz bu kişiye güveniyor mu? Bu kişi müşterilerimizle zaten ilişki içinde mi?' sorularını yanıtlayın. İkinci aşama teşvik yapısını tasarlamak: partner yeterince kazanmalı (çok düşük komisyon motivasyon öldürür), getirilen müşteri de özel değer almalı (indirim, öncelikli onboarding). Üçüncü aşama ölçüm sistemi kurmak: her partner için benzersiz link veya kod, hangi partner ne kadar getirdi görünür olmalı.

Partner Türleri, Özellikleri ve Değerlendirmesi

Partner Türü            Nasıl Çalışır                                                            En Güçlü Olduğu Yer

Referral Partner        Müşteri gönderir, sabit ücret veya % komisyon alır. En basit model.      Her ikisi — başlangıç için en kolay ve hızlı kurulur

Teknoloji Ortağı        Entegrasyon — birlikte daha değerli ürün. Çift taraflı kayıt programı.   B2B — geçiş maliyeti yaratır, LTV artırır, moat güçlendirir

Danışman / Ajans        Müşterisine uygular ve önerir. Güven zaten kuruludur.                    B2B — en kaliteli lead kaynağı, close rate yüksektir

Influencer / Creator    İçerik üretir, affiliate link veya kod kullanır.                         B2C — nano/mikro influencer mega'dan çok daha iyi ROI

Action Steps

32. İdeal partner profilini belirle: ICP'nin güvendiği kim? Hangi araçları, podcastleri, blogları takip ediyor?

33. İlk 10 potansiyel partneri listele ve kişisel olarak ulaş — soğuk form göndermek değil, gerçek ilişki kur

34. Teşvik yapısını tasarla: her iki taraf için net değer, basit mekanizma, anında görünür ödül

35. Tracking sistemini kur: her partner için benzersiz link, aylık performans raporu

36. İlk 3 ayda her hafta partner ile 15 dakikalık check-in yap — ne çalışıyor, ne yardıma ihtiyaç var?

Checklist

✔ Partner profili ICP verisiyle belirlendi mi?

✔ Teşvik yapısı her iki taraf için cazip mi?

✔ Tracking ve ödeme sistemi kuruldu mu?

✔ Partner materyalleri (brief, link, içerik önerileri) hazır mı?

✔ İlk 10 partner aktif mi ve düzenli iletişim kurluyor mu?

Kaçınılması Gereken Hatalar

✗ Çok sayıda pasif partner kurmak — 200 partner kaydı, aktif 5 partnerden değersizdir; odak kaliteye, derinliğe ve gerçek ilişkiye verilmeli

✗ Teşviki çok düşük tutmak veya karmaşık yapmak — partner motivasyonu düşer, program adım adım ölür; basit ve anında ödenen komisyon en iyi sonucu verir

✗ Partner'a bırakıp gitmek — materyaller yoksa, sorulara cevap verilmiyorsa, performans paylaşılmıyorsa partner kısa sürede ilgisini kaybeder

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                                                       📌 B2C Örnek

B2B HR yazılımı ICP analizinde müşterilerin %40'ının İK danışmanı önerisiyle geldiğini fark etti. 8 bağımsız İK danışmanıyla resmi partner programı kuruldu: her yönlendirdiği müşteri için %20 ilk yıl komisyon + danışmanın kendi müşterileri için %30 özel fiyat. 6 ayda yeni müşterilerin %34'ü bu 8 danışmandan geldi — en düşük CAC ve en yüksek close rate'li kanal oldu.   B2C bebek ürünleri markası 1 mega influencer kampanyası yaptı: 850K takipçi, 2.5 ay süre, 8.000$ ödeme. Sonuç: 412 satış, CAC $19.4. Ardından 30 nano influencer ile deneme yaptı: her birine ürün + %15 affiliate komisyon + içerik brief. Ortalama 3.200 takipçi, 90 günde 1.840 satış, CAC $2.1. Nano influencer programı 9x daha iyi CAC üretti.

Sorumlu Rol                   Zaman Çerçevesi                    Başarı Kriteri

Marketing Lead + Sales Lead   İlk 90 gün — aylık büyüme takibi   Aktif partner sayısı, partner kaynaklı gelir ve partner CAC aylık raporlanıyor`,
      },
    ],
  },
  {
    id: "buyume-motoru",
    num: "8",
    title: `BÜYÜME MOTORU`,
    subtitle: `AARRR, lead gen, CRO, retention, referral`,
    subsections: [
      {
        id: "8-1",
        title: `8.1 Marketing Funnel: Gerçek Ölçüm ve Optimizasyon`,
        content: `TANIM & GENEL BAKIŞ

Funnel, bir yabancının müşteriye dönüşme sürecinin haritasıdır. Ama çoğu şirket funnel'ı yanlış kullanır: sadece en üstteki metriği (trafik, impression) veya en alttaki metriği (gelir) izler. Aradaki adımlar kör kalır. Oysa büyümenin en hızlı yolu funnel'ın en zayıf halkasını bulmak ve o halkayı güçlendirmektir. En üste su doldurmak her zaman çözüm değildir — kova delik ise önce deliği kapatmak gerekir.

İkinci kritik yanlış anlama: funnel'ı tek boyutlu görmek. Gerçek bir marketing funnel'ı yalnızca acquisition (edinim) değil, activation (aktifleştirme), retention (tutma), revenue (gelir büyütme) ve referral (yönlendirme) aşamalarını da kapsar. Dave McClure'ün AARRR framework'ü bu beş boyutu bir arada ölçer ve her birini ayrı optimize etmeyi sağlar.

→ B2B                                                                                                                                                                                                                                                                                                                        → B2C

B2B funnel'ı uzun ve çok aşamalıdır: Awareness → MQL → SQL → Demo → Proposal → Negotiation → Closed Won/Lost. Her aşamanın dönüşüm oranı ve ortalama geçiş süresi izlenmelidir. Örneğin SQL → Demo aşamasında %60 dönüşüm varsa problem orada değildir; Demo → Proposal'da %20 ise satış sürecinde bir sorun var demektir.   B2C funnel'ı daha kısadır ama her adımdaki kayıp çok daha büyük hacimde gerçekleşir. Impression → Click: %2–5 CTR; Click → Add to Cart: %3–8; Cart → Purchase: %1.5–4. D1/D7/D30 retention metrikleri ürünün uzun vadeli sağlığını gösterir. D30 retention %10'un altındaysa PMF sorunu var demektir.

Neden & Nasıl Yapılır?

AARRR metodolojisi (Pirate Metrics) her aşamayı ayrı değerlendirir ve optimizasyon önceliğini netleştirir. Tüm aşamaları aynı anda optimize etmeye çalışmak dağınıklık yaratır. Doğru yaklaşım: en büyük drop-off'u bul, oraya odaklan, iyileştir, sonra bir sonraki zayıf halkaya geç.

AARRR Framework — Her Aşama

Aşama                        Temel Metrikler                                                  Optimizasyon Odağı

Acquisition (Edinim)         Trafik kaynakları, CAC, CPL, kanal bazlı dönüşüm                 Kanal seçimi, hedefleme, mesaj-kitle uyumu

Activation (Aktifleştirme)   İlk değere ulaşma süresi (Time to Value), onboarding tamamlama   Onboarding akışı, ilk deneyim kalitesi, AHA moment

Retention (Tutma)            D1/D7/D30 retention, churn oranı, NRR (Net Revenue Retention)    Habit loop, değer hatırlatma, müşteri başarısı

Revenue (Gelir)              MRR/ARR büyümesi, upsell oranı, ARPU, LTV                        Upsell/cross-sell zamanlaması, fiyat optimizasyonu

Referral (Yönlendirme)       Referral oranı, viral coefficient, NPS                           Referral program tasarımı, memnun müşteri tespiti

++
| Kova Testi                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                  |
| Funnel'ınızda nerede en fazla kayıp var? Şu soruyu sorun: 100 ziyaretçiden kaçı MQL oldu? Kaçı demo talep etti? Kaçı satın aldı? Kaçı 30 günde hâlâ aktif? En büyük düşüşün yaşandığı aşama, öncelikli optimizasyon alanınızdır. |
++

Action Steps

1.  Her funnel aşaması için mevcut dönüşüm oranını ölç ve baseline belirle

2.  En büyük drop-off aşamasını tespit et — tüm aşamaları aynı anda optimize etme

3.  O aşama için 3 iyileştirme hipotezi oluştur, en düşük maliyetlisini önce test et

4.  İyileştirme sonrası bir sonraki zayıf halkaya geç

5.  Funnel metriklerini aylık ekiple paylaş — herkes aynı sayılara bakmalı

Sağlıklı Funnel Benchmark'ları

B2B: MQL → SQL                Sağlıklı: %30–50. Düşükse MQL tanımı çok geniş ya da lead kalitesi düşük.

B2B: SQL → Closed Won         Sağlıklı: %20–35. Düşükse satış süreci veya teklif sorunu.

B2C: Add to Cart → Purchase   Sağlıklı: %25–40. Düşükse checkout süreci veya güven sorunu.

B2C: D30 Retention            Sağlıklı: Kategoriye göre değişir. Genel mobil app için >%15 iyi, >%25 çok iyi.

NPS (Her ikisi)               B2B SaaS ortalaması: ~40. B2C tüketici: ~30–45. Sektör ortalamasının üzeri hedef.

Checklist

✔ AARRR aşamalarının tamamı için metrik tanımlandı mı?

✔ Her aşamanın mevcut dönüşüm oranı ölçüldü mü?

✔ En büyük drop-off aşaması belirlendi mi?

✔ Funnel dashboard canlı mı?

✔ Aylık ekip review yapılıyor mu?

Kaçınılması Gereken Hatalar

✗ Yalnızca acquisition metriklerine bakmak — retention görmezden gelinirse ne kadar hızlı doldurursan doldur kova boşalır

✗ Tüm aşamaları aynı anda optimize etmeye çalışmak — odak dağılır, hiçbir aşamada anlamlı ilerleme olmaz

✗ Funnel metriklerini sales ile paylaşmamak — ortak görünürlük ortak sorumluluk yaratır; ayrı raporlar ayrı gerçeklikler yaratır

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                  📌 B2C Örnek

B2B SaaS şirketi funnel analizi yaptı: en büyük drop-off Demo → Closed Won aşamasındaydı (%14 close rate). Sales call kayıtları dinlendi, müşterilerin %70'i 'rakiple karşılaştırmak istiyorum' diyordu. Detaylı karşılaştırma sayfası ve battle card hazırlandı. 2 ayda close rate %14'ten %31'e çıktı — hiçbir reklam harcaması yapmadan.   B2C fitness app D30 retention %12'deydi. AARRR analizi: D3'te %55 kullanıcı çıkıyordu. Onboarding akışı incelendi: kullanıcıların %60'ı hedef belirleme adımını atlıyordu. O adım zorunlu hale getirildi + 3. gün kişiselleştirilmiş push notification eklendi. D30 retention %12'den %26'ya çıktı.

Sorumlu Rol             Zaman Çerçevesi                                   Başarı Kriteri

Marketing Lead          İlk 30 gün kurulum — aylık optimizasyon döngüsü   AARRR dashboard canlı, her aşama için metrik takip ediliyor`,
      },
      {
        id: "8-2",
        title: `8.2 Lead Generation: Inbound ve Outbound Dengesi`,
        content: `TANIM & GENEL BAKIŞ

Lead generation iki farklı filozofik yaklaşıma dayanır: inbound (sizi bulurlar) ve outbound (siz bulursunuz). Her ikisinin de güçlü ve zayıf yönleri vardır. Inbound yüksek kaliteli lead üretir ama zaman alır; outbound hızlıdır ama kaynak yoğundur ve dönüşüm oranı genellikle düşüktür. En güçlü sistemler her ikisini dengeler ve birbirini beslemesini sağlar: outbound'dan öğrendikleriniz inbound mesajınızı güçlendirir, inbound'dan gelen içerikler outbound sekanslarınızı zenginleştirir.

Lead generation'ın en önemli ama en az tartışılan boyutu kalitedir. Bin niteliksiz lead, on nitelikli leadden her ölçüde daha değersizdir. Niteliksiz lead satış zamanını çalar, close rate'i düşürür ve CAC'ı artırır. Bu yüzden lead generation sistemi 'ne kadar çok?' değil 'ne kadar doğru?' sorusunu yanıtlamalıdır.

→ B2B                                                                                                                                                                                                                                                                                                                                                                                                                                             → B2C

B2B'de inbound'un temeli SEO ve içeriktir; outbound'un temeli ise kişiselleştirilmiş doğrudan erişimdir. B2B outbound'un en yaygın hatası kişiselleştirme eksikliğidir: 'şirketiniz için harika bir çözümümüz var' tarzı jenerik e-postalar açılmaz, silinir. Kişiselleştirilmiş outbound — şirketin son duyurusu, kurucu'nun son LinkedIn postu, şirketin büyüme hedefleri referanslanarak yazılan mesaj — çok daha yüksek yanıt oranı üretir.   B2C'de lead generation genellikle e-posta listesi ve uygulama indirme sayısı olarak tanımlanır. İyi tasarlanmış bir lead magnet — kişiselleştirilmiş quiz, ücretsiz rehber, ilk sipariş indirimi — liste büyütmenin en etkili yoludur. Landing page optimizasyonu ve form tasarımı burada kritiktir: her ek form alanı dönüşümü %5–10 düşürür.

Neden & Nasıl Yapılır?

Outbound için en etkili framework SPICED'dir: Situation (durumlarını anla), Pain (asıl sorunu tanımla), Impact (bu sorunun maliyeti ne?), Critical Event (neden şimdi?), Decision (karar süreci nasıl?). Bu çerçeveye göre yazılan outbound mesajlar 'ben değil sen' odaklıdır — alıcının dünyasından başlar, ürünle bitmez.

Inbound vs Outbound Karşılaştırması

Boyut                   Inbound                                          Outbound

Hız                     Yavaş (6–12 ay), ama bileşik büyür               Hızlı (ilk haftada sonuç alınabilir)

Maliyet                 Düşük CAC (zamanla), yüksek başlangıç yatırımı   Yüksek CAC, kaynak yoğun, ölçeklenince düşer

Lead Kalitesi           Yüksek — zaten ilgilenen birisi                  Değişken — nitelik kontrol edilmeli

Kontrol                 Düşük — algoritma ve arama davranışına bağlı     Yüksek — kim, ne zaman, nasıl yazılacağını belirlersiniz

Ölçekleme               İçerik üretimini artırarak ölçeklenir            Araç ve template sistemiyle ölçeklenir

B2B Outbound Kişiselleştirme Seviyeleri

Seviye                     Açıklama                                                                     Yanıt Oranı

Seviye 1 — Jenerik         'Şirketiniz için harika bir çözüm var.' Hiç kişiselleştirme yok.             %0.5–1 (çöp kutusu)

Seviye 2 — Temel           İsim, şirket adı, sektör referansı. Şablon.                                  %2–4

Seviye 3 — Araştırmalı     Son duyuru, büyüme hedefi veya LinkedIn postu referansı. Gerçek araştırma.   %8–15

Seviye 4 — Hiperpersonel   Ortak bağlantı referansı, spesifik içgörü, özel soru. Elle yazılmış.         %20–35

Action Steps

6.  ICP için en değerli lead magnet'i belirle ve oluştur — quiz, hesap makinesi, ücretsiz rehber

7.  Landing page'i optimize et: form alanını minimuma indir (isim + e-posta yeterli başlangıçta)

8.  Outbound hedef listeyi oluştur: Apollo, Sales Navigator veya manuel araştırma

9.  Outbound mesajları Seviye 3–4 kişiselleştirmeyle yaz — araştırma yapılmadan mesaj atılmamalı

10. Lead scoring modelini kur ve MQL eşiğini sales ile birlikte belirle

Checklist

✔ Lead magnet ICP için gerçekten değerli mi?

✔ Landing page form alanları minimuma indirildi mi?

✔ Outbound mesajlar Seviye 3+ kişiselleştirme içeriyor mu?

✔ Lead scoring modeli aktif mi?

✔ MQL tanımı sales ile uyumlu mu?

Kaçınılması Gereken Hatalar

✗ Jenerik outbound mesajı göndermek — 'harika çözümümüz var' tarzı mesajlar açılmaz, spam klasörüne gider ve marka itibarını zedeler

✗ Tüm trafiği aynı landing page'e göndermek — farklı kitleler farklı mesaj almalı, generic sayfa dönüşümü düşürür

✗ Lead hacmine odaklanmak — 500 niteliksiz lead sales'in zamanını çalar; 50 nitelikli lead çok daha değerlidir

📌 B2B Örnek                                                                                                                                                                                                                                                                                         📌 B2C Örnek

B2B yazılım şirketi outbound e-postasında Seviye 4 kişiselleştirmeye geçti: Apollo ile hedef şirket listesi oluşturuldu, her şirket için son 2 haber ve kurucu'nun son LinkedIn postu okundu. Mesaj bu araştırmayla başladı. Yanıt oranı %1.8'den %14'e çıktı, demo oranı %0.4'ten %6'ya yükseldi.   B2C skincare markası 'Cilt Tipi Analizi' quiz'i oluşturdu. E-posta adresine karşılık 3 soruluk quiz + kişiselleştirilmiş ürün önerisi sunuldu. Genel 'indirim kodu al' lead magnet'e kıyasla quiz %3.2 daha yüksek dönüşüm oranı üretti. Quiz tamamlayanların 30 günlük satın alma oranı %34 oldu.

Sorumlu Rol             Zaman Çerçevesi                   Başarı Kriteri

Marketing Lead          İlk 60 gün — aylık optimizasyon   Aylık MQL hedefi belirlenmiş, inbound/outbound oranı takip ediliyor`,
      },
      {
        id: "8-3",
        title: `8.3 Dönüşüm Optimizasyonu (CRO): Veri, Hipotez ve Test`,
        content: `TANIM & GENEL BAKIŞ

CRO, mevcut trafiğin daha fazlasını müşteriye dönüştürme bilimidir. Daha fazla trafik çekmek yerine var olan trafiği daha iyi kullanmaktır. Bu asimetri önemlidir: conversion rate ikiye katlandığında aynı reklam bütçesiyle iki kat gelir elde edilir; aynı sonuç için reklam bütçesini ikiye katlamak gerekmez. Bu yüzden CRO çoğu zaman acquisition harcamasından çok daha iyi ROI üretir.

CRO'nun en sık yapılan hatası sezgiyle test etmektir: 'bence bu renk daha iyi görünüyor', 'buton yerini değiştirsek daha fazla tıklanır'. Gerçek CRO bir bilimsel süreçtir: veri toplanır, problem tanımlanır, hipotez kurulur, test tasarlanır, istatistiksel anlamlılık beklenir ve karar veriye dayanır. 'Bence' ile başlayan hiçbir CRO kararı doğru metodoloji değildir.

→ B2B                                                                                                                                                                                                                                                                                                                                                 → B2C

B2B CRO'nun en kritik noktaları sırasıyla: hero section mesajı (ilk 5 saniyede ne anlaşılıyor?), demo formu (her ek alan dönüşümü düşürür), sosyal kanıt kalitesi (logo wall, G2 rozetleri, müşteri alıntısı), fiyat sayfası netliği ve sayfa yükleme hızı. B2B'de ortalama sayfa ziyareti 2.5 dakikadır — bu sürede değer anlaşılmazsa kaybedilir.   B2C CRO'nun en kritik noktaları sırasıyla: ürün görseli kalitesi ve sayısı, yorum sayısı ve ortalama puanı, checkout adımı sayısı (her ek adım %10–20 kayıp), ödeme seçenekleri çeşitliliği ve mobil deneyim kalitesi. Baymard Institute araştırmasına göre checkout sürecindeki sorunlar cart abandonment'ın %17–26'sından sorumludur.

Neden & Nasıl Yapılır?

CRO süreci beş adımdan oluşur. Birinci adım veri toplama: heatmap, session recording, kullanıcı anketleri ve analytics verileri problem noktaları hakkında nesnel veri üretir. İkinci adım problem tanımı: 'sayfa X'te dönüşüm düşük' yeterli değil; 'kullanıcıların %73'ü hero section'da ayrılıyor, form aşamasına gelmiyor' somut problem tanımıdır. Üçüncü adım hipotez: 'Eğer X yaparsak, Y kitlesi Z davranışı gösterir çünkü A'. Dördüncü adım test tasarımı: A/B testi, yeterli örneklem ve istatistiksel anlamlılık (%95 güven aralığı). Beşinci adım karar ve uygulama: kazanan devreye alınır, öğrenme belgelenir.

CRO Test Önceliği — PIE Skoru

++
| PIE Framework                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                 |
| Her test adayını 3 kriter üzerinden 1–10 arası puanla: P = Potential (ne kadar büyük etki yaratabilir?) I = Importance (bu sayfa ne kadar önemli, trafik yüksek mi?) E = Ease (test ne kadar kolay uygulanır?) PIE = (P + I + E) / 3 → En yüksek PIE skoru olan testi önce yap. |
++

En Yüksek Etkili CRO Alanları

Sayfa / Öğe             Test Edilecek                               Beklenen Etki

Hero Section            Başlık, alt başlık, CTA metni, görsel       Yüksek — ilk izlenim burada

CTA Butonu              Renk, metin, konum, boyut                   Orta-Yüksek — her sayfa için geçerli

Form Alanları           Alan sayısı, sıralama, zorunluluk           Yüksek — her ek alan dönüşümü düşürür

Sosyal Kanıt            Logo tipi, alıntı içeriği, rozet konumu     Orta — güven inşasında kritik

Fiyat Sayfası           Paket sayısı, anchor fiyat, CTA             Çok Yüksek — karar noktası

Checkout                Adım sayısı, form basitliği, güven rozeti   Yüksek — son engel

Action Steps

11. Hotjar veya Microsoft Clarity ile heatmap ve session recording kur — ücretsiz

12. Mevcut conversion oranlarını tüm önemli sayfalarda ölç ve baseline belirle

13. En büyük drop-off sayfasını tespit et ve PIE skoru hesapla

14. İlk testi tasarla: tek değişken, yeterli trafik bekle (minimum %95 güven için n hesapla)

15. Her test sonucunu belgeye kaydet — kazansın veya kaybetsin, her test öğreti

Checklist

✔ Heatmap ve session recording kuruldu mu?

✔ Conversion oranları baseline olarak belirlendi mi?

✔ PIE framework ile test öncelikleri belirlendi mi?

✔ Testler tek değişkenle mi yapılıyor?

✔ Sonuçlar belgeleniyor mu?

Kaçınılması Gereken Hatalar

✗ Yeterli trafik olmadan test başlatmak — düşük trafikli sayfada A/B testi anlamsız sonuç üretir; istatistiksel anlamlılığa ulaşmak için yeterli örneklem şart

✗ Aynı anda birden fazla değişken test etmek — hangi değişkenin etkiyi yarattığını anlayamazsınız; her test tek bir hipotezi test etmeli

✗ 'Bence' ile karar vermek — tasarımcı veya CEO'nun tercihi test sonucunun önüne geçmemeli; veri her zaman sezginin üstündedir

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                 📌 B2C Örnek

B2B şirketi demo formu analizini yaptı. Session recording gösterdi: kullanıcıların %68'i 'Telefon Numarası' alanında formu terk ediyordu. Hipotez: telefon numarası talep etmek güvensizlik yaratıyor. Test: telefon numarası alanı kaldırıldı. Sonuç: form doldurma oranı %67 arttı. Sales kalitesi etkilenmedi — iletişim sonra kuruldu.   B2C e-ticaret markası checkout'ta 'güvenli ödeme' rozetinin konumunu test etti. Üst kısım vs. ödeme butonu yanı. PIE skoru yüksekti: Potential 8, Importance 9, Ease 9. Rozeti butona yaklaştırınca checkout tamamlama %14 arttı — 3 günlük test, 0 kod değişikliği.

Sorumlu Rol                    Zaman Çerçevesi                   Başarı Kriteri

Marketing Lead + Teknik Ekip   Sürekli — haftalık test döngüsü   Aylık A/B test planı var, conversion oranları sürekli ölçülüyor`,
      },
      {
        id: "8-4",
        title: `8.4 Retention ve Lifecycle Marketing: Churn'ü Önlemek`,
        content: `TANIM & GENEL BAKIŞ

Retention, büyümenin en az görünen ama en güçlü motorudur. Bain & Company araştırmasına göre müşteri tutma oranını %5 artırmak, kârlılığı %25–95 arasında artırabilir. Ama çoğu şirket bütçesinin %80'ini acquisition'a harcar, %20'sini retention'a. Oysa churn arttıkça acquisition'ı ne kadar artırırsanız artırın büyüme sınırlanır — akan bir kovaya su doldurmaktır.

Churn'ün iki türü vardır: gönüllü churn (müşteri bilinçli olarak ayrılıyor) ve zorunlu churn (ödeme başarısız, kredi kartı süresi geçmiş). Gönüllü churn genellikle üç nedenle gerçekleşir: değer algısının düşmesi (ürün kullanılmıyor, fayda görülmüyor), alternatif bulma (rakip daha iyi görünüyor) veya durum değişikliği (bütçe kesintisi, şirket kapatma). Bu nedenleri anlamadan churn'ü önlemeye çalışmak yanlış müdahaleler üretir.

→ B2B                                                                                                                                                                                                                                                                                                                                                                                           → B2C

B2B'de retention müşteri başarısı (Customer Success) disipliniyle yönetilir. Onboarding kalitesi, QBR (Quarterly Business Review — çeyreklik iş incelemesi) ve proaktif müdahale en kritik araçlardır. En güçlü retention sinyali ürünün müşterinin iş süreçlerine gömülmesidir: şirkette birden fazla kullanıcı, entegrasyon ve günlük kullanım alışkanlığı olan müşteriler nadiren ayrılır.   B2C'de retention habit loop'a dayanır. B.J. Fogg'un davranış modeline göre alışkanlık üç bileşenden oluşur: tetikleyici (trigger), eylem (action) ve ödül (reward). Ürün bu döngüyü destekliyorsa retention artar. Push notification, e-posta hatırlatma ve streak mekanizmaları bu döngüyü güçlendirir. D1/D7/D30 retention metrikleri ürünün habit-forming olup olmadığını gösterir.

Neden & Nasıl Yapılır?

Retention'ı yönetmek için müşteri sağlık skoru (Customer Health Score) kurmak gerekir. Bu skor her müşterinin 'ne kadar risk altında' olduğunu gerçek zamanlı olarak gösterir. Tipik bir sağlık skoru şu boyutlardan oluşur: kullanım sıklığı (son 30 gün ne sıklıkla giriş yaptı?), feature adoption (kaç özelliği kullanıyor?), destek talebi sıklığı (çok fazla destek = sorun sinyali), ödeme düzeni (gecikme var mı?) ve NPS skoru. Bu boyutlar ağırlıklandırılarak 0–100 arası bir sağlık skoru üretilir.

Müşteri Sağlık Skoru Bileşenleri

Boyut                   Sağlıklı Sinyal                           Riskli Sinyal

Kullanım Sıklığı        Haftalık aktif, core feature kullanıyor   14+ gün giriş yok

Feature Adoption        3+ özellik aktif kullanımda               Yalnızca 1 özellik kullanıyor

Destek Talebi           Nadiren, genel sorular                    Sık sık, şikayet içerikli

Ödeme                   Otomatik, zamanında                       Gecikme var veya ödeme başarısız

NPS                     9–10 Promoter                             0–6 Detractor

Lifecycle Aşamaları ve Aksiyonlar

Aşama                    Hedef                                                   Aksiyon

Onboarding (0–30 gün)    İlk değere hızlı ulaş, alışkanlık kur                   Welcome sekansı, in-app tour, ilk 7 gün check-in

Activation (30–90 gün)   Core feature'ları kullandır, başarı milestonu oluştur   Milestone kutlama, 'nasıl gidiyor' e-postası, webinar daveti

Retention (90+ gün)      Uzun vadeli bağlılık kur                                QBR (B2B), kişiselleştirilmiş öneriler, NPS anketi

Expansion                Upsell ve cross-sell                                    Kullanım limitine yaklaşınca upgrade teklifi, yeni özellik tanıtımı

At-Risk                  Churn'ü önle                                            Sağlık skoru düşünce proaktif müdahale, özel destek teklifi

Action Steps

16. Churn nedenlerini analiz et: son 10 ayrılan müşteriyi ara ve neden ayrıldığını sor

17. Müşteri sağlık skoru modelini tasarla ve CRM'de aktive et

18. At-risk eşiğini belirle: sağlık skoru X'in altına düşünce CS ekibi otomatik uyarı alır

19. Onboarding akışını haritalandır: ilk değere ulaşma süresi (Time to Value) ne kadar? Kısalt.

20. NPS'i çeyreklik ölç, Detractor'lara 48 saat içinde ulaş

Checklist

✔ Churn oranı ve nedenleri ölçülüyor mu?

✔ Müşteri sağlık skoru kuruldu mu?

✔ At-risk uyarı sistemi aktif mi?

✔ Onboarding Time to Value ölçülüyor mu?

✔ NPS çeyreklik toplanıyor ve takip ediliyor mu?

Kaçınılması Gereken Hatalar

✗ Müşteri kazanıldıktan sonra ilgiyi kesmek — Bain araştırması gösteriyor ki churn'ün büyük çoğunluğu ilk 90 günde gerçekleşir; onboarding döneminde aktif ilgi şart

✗ Churn'ü yalnızca fiyat sorunu saymak — müşteri 'pahalı' diyerek ayrılıyorsa gerçek neden genellikle algılanan değerin düşüklüğüdür, fiyat bir bahane

✗ At-risk müşteriyi ancak iptal ettiğinde fark etmek — sağlık skoru bu tespiti haftalarca önceden yapabilir; proaktif müdahale reaktif müdahaleden çok daha etkili

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                          📌 B2C Örnek

B2B SaaS şirketi churn analizinde kritik bulgu yaptı: ayrılan müşterilerin %72'si onboarding'i tamamlamamıştı. Dedicated CS temsilcisi atandı, ilk 30 gün için 5 adımlık onboarding checklist oluşturuldu. Müşteri tamamladıkça CS ilerleyi izledi, takılma noktalarına proaktif müdahale etti. 6 ay içinde 90 gün churn oranı %28'den %11'e düştü.   B2C mobil uygulama D7 retention %22'ydi. Kullanım verisi analizi: D3'te %55 kullanıcı giriş yapmıyordu. Habit loop güçlendirildi: D2 sabahı kişiselleştirilmiş 'dünkü ilerlemenin' push notification'ı, D3 akşamı 'streak kırılmasın' hatırlatma eklendi. D7 retention %22'den %34'e çıktı.

Sorumlu Rol                Zaman Çerçevesi                   Başarı Kriteri

Marketing Lead + CS Lead   İlk 60 gün — aylık optimizasyon   Sağlık skoru aktif, churn oranı düşüş trendinde, NPS çeyreklik ölçülüyor`,
      },
      {
        id: "8-5",
        title: `8.5 Referral ve Growth Loop: Bileşik Büyüme Sistemi`,
        content: `TANIM & GENEL BAKIŞ

Growth loop, bir kullanıcının sisteme girişinin yeni kullanıcı getirdiği kendi kendini besleyen döngüdür. Funnel lineerdir — her müşteri için ayrı acquisition eforu gerekir. Loop ise bileşiktir — büyüdükçe daha hızlı büyür. Lineer büyüme arithmetic progression'dır; loop growth exponential'a yaklaşır. Bu fark zamanla devasa bir rekabet avantajı yaratır.

Referral marketing'in temel gücü güven transferidir. Nielsen araştırmasına göre tüketicilerin %92'si tanıdıklarının önerilerine diğer tüm reklam formlarından daha fazla güveniyor. B2B'de referral dönüşüm oranı genellikle diğer kanalların 2–4 katıdır çünkü güven önceden kurulmuştur. Bu oran yüksekliği sadece dönüşümde değil, satış döngüsünün kısalmasında ve onboarding kolaylığında da kendini gösterir.

→ B2B                                                                                                                                                                                                                                                                                                                                              → B2C

B2B'de en güçlü referral zamanı ilk başarı milestonu'ndan hemen sonradır — müşteri en memnun olduğu andadır. Bu an genellikle ilk anlamlı sonucu elde ettiği 30–90. gün arasıdır. Referral sormak için doğru soru: 'Bu sonuçtan memnun musunuz? Benzer sorunları olan bir meslektaşınız var mı ki sizi tanıştıralım?' — zorlamaz, kolaylaştırır.   B2C'de viral mekanizma ürüne gömülü olabilir. Dropbox'ın 'arkadaşını davet et, ikisi de 500 MB kazansın' programı, ürünün doğal kullanım akışına entegre edilmiş bir growth loop'tur. Ürünü paylaşmak değer üretir — sadece ödül için değil, gerçekten faydalı olduğu için paylaşılır. Bu tür ürün odaklı viral mekanizmalar en sürdürülebilir büyüme kaynağıdır.

Neden & Nasıl Yapılır?

Viral coefficient (K-factor) bir kullanıcının kaç yeni kullanıcı getirdiğini ölçer. K = (Referral gönderilen kişi sayısı) × (Referral'ın dönüşüm oranı). K > 1 ise viral büyüme var demektir — her kullanıcı ortalama 1'den fazla yeni kullanıcı getiriyor. K = 0.5 ise her 2 kullanıcı 1 yeni kullanıcı getiriyor — viral değil ama anlamlı. K < 0.1 ise referral kanalı henüz anlamlı değil.

Growth Loop Türleri

Loop Türü               Mekanizma                                                                            Gerçek Örnek

Referral Loop           Kullanıcı davet eder → yeni kullanıcı gelir → yeni kullanıcı da davet eder           Dropbox: depolama alanı ödülü. Viral coefficient 1.3'e ulaştı.

Content Loop            Kullanıcı içerik üretir → trafik çeker → yeni kullanıcı gelir → yeni içerik üretir   Reddit, Medium, Substack: içerik hem değer hem dağıtım kanalı.

Product Loop            Kullanıcı ürünü kullanır → çıktısını paylaşır → başkaları görür → giriş yapar        Figma: tasarım paylaşımı ürünün kendisini tanıtır.

Community Loop          Üye değer alır → arkadaş davet eder → topluluk büyür → değer artar                   Slack: daha fazla kişi = daha değerli ağ. Ağ etkisi.

Referral Programı Tasarım İlkeleri

İyi referral programı tasarımında beş kural vardır. Birinci kural her iki taraf kazanır: yalnızca referral veren ödüllendirilirse sistem çalışmaz, gelen kişi de değer almalıdır. İkinci kural ödül ürünle ilgili olmalı: nakit ödül çalışır ama ürün içi değer (ekstra özellik, uzatılmış deneme, kredi) çok daha düşük maliyetle çok daha yüksek bağlılık üretir. Üçüncü kural mekanizma basit olmalı: karmaşık kural setleri katılımı düşürür. Dördüncü kural referral doğal akışa entegre edilmeli: aktivasyon milestonu sonrası, ilk başarı kutlaması sırasında. Beşinci kural tracking şeffaf olmalı: kullanıcı kaç kişiyi davet ettiğini, ne kadar kazandığını görmeli.

Action Steps

21. Viral coefficient'i hesapla: mevcut kullanıcıların kaçı referral yaptı? Her referral kaçı dönüştürdü?

22. NPS 9–10 veren Promoter'ları belirle — referral istemek için en doğru segment bunlar

23. Referral program yapısını tasarla: her iki taraf için net, basit, ürünle ilgili ödül

24. Referral'ı doğal akışa entegre et: ilk milestone sonrası, NPS survey sonrası, upsell sonrası

25. Ürüne hangi growth loop gömülebilir? Bir workshop düzenle, 3 hipotez üret, test et

Checklist

✔ Viral coefficient ölçüldü mü?

✔ Referral programı her iki taraf için değer üretiyor mu?

✔ Referral mekanizması doğal akışa entegre mi?

✔ Tracking sistemi kuruldu mu?

✔ Growth loop hipotezleri ürün roadmap'ine girdi mi?

Kaçınılması Gereken Hatalar

✗ Memnun olmayan müşteriden referral istemek — NPS 7 altından referral istemek olumsuz ağızdan ağıza iletişim riskini artırır; önce müşteriyi memnun et

✗ Referral programını ürünün dışına koymak — ayrı bir sayfa veya form, katılımı düşürür; onboarding ve başarı milestonu akışına gömülü referral çok daha yüksek katılım sağlar

✗ K-factor'ü hiç ölçmemek — referral kanalının ne kadar çalıştığı bilinmeden optimizasyon körleşir

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                                      📌 B2C Örnek

B2B HR yazılımı NPS anketini milestone'a bağladı: müşteri ilk maaş bordrosunu işlediğinde (ortalama gün 22) anket gönderildi. 9–10 verenler otomatik olarak referral sekansına girdi: 'Bu sonuçtan memnun musunuz? Bir meslektaşınızı tanıştırın, ikisi de 1 ay ücretsiz alsın.' Referral oranı %3'ten %19'a çıktı, referral CAC $0'a yaklaştı.   B2C tasarım aracı her export edilen görsele küçük bir 'Made with [Marka]' watermark ekledi (kaldırılabilir, premium'da yok). Her paylaşılan görsel ürünü tanıttı. K-factor 0.08'den 0.41'e çıktı. Organik büyüme hızı %340 arttı — sıfır reklam harcaması.

Sorumlu Rol                           Zaman Çerçevesi                                 Başarı Kriteri

Marketing Lead + Growth Lead + Ürün   İlk 90 gün referral — sürekli loop geliştirme   K-factor ölçülüyor, referral oranı aylık raporlanıyor, growth loop testi roadmap'te`,
      },
    ],
  },
  {
    id: "icerik-iletisim",
    num: "9",
    title: `İÇERİK VE İLETİŞİM`,
    subtitle: `Marka hikayesi, dağıtım, PR ve kriz iletişimi`,
    subsections: [
      {
        id: "9-1",
        title: `9.1 Marka Hikayesi ve Storytelling`,
        content: `TANIM & GENEL BAKIŞ

İnsanlar veriyi değil hikayeyi hatırlar. Stanford Business School araştırmasına göre istatistikler tek başına sunulduğunda %5–10 hatırlanır; bir hikayeye gömüldüklerinde ise hatırlanma oranı %65–70'e çıkar. Bu fark, marka iletişiminin neden her zaman veri + hikaye kombinasyonuna ihtiyaç duyduğunu açıklar.

En kritik storytelling hatası şirketi kahraman yapmaktır. Müşteri kahramandır — hayatında bir sorunu var, bir engeli var. Şirket ise rehberdir: doğru araçları, planı ve desteği sunar. Bu rol tersine döndüğünde — 'biz ne kadar harikayız' anlatısı — müşteri kendini hikayenin dışında hisseder ve bağlantı kuramaz. Donald Miller'ın StoryBrand çerçevesi bu ayrımı pratiğe döker.

→ B2B                                                                                                                                                                                                                                                                                                       → B2C

B2B storytelling'de müşteri başarı hikayesi (case study) en güçlü formattır. Yapı: 'Müşteri X problemi vardı → çözüm uygulandı → Y sayısal sonuç alındı.' Sayılarla desteklenen hikayeler satış sürecini hızlandırır çünkü karar vericinin zihnindeki 'bu benim için de işe yarar mı?' sorusunu yanıtlar.   B2C storytelling'de kurucu hikayesi ve üretim süreci çok güçlüdür. 'Neden bu ürünü yaptım, hangi sorunu çözmek istedim, nasıl yaptım' soruları tüketicinin duygusal bağ kurmasını sağlar. Sosyal medyada 'behind the scenes' içerikleri genellikle en yüksek organik erişimi sağlar çünkü özgünlük güven üretir.

Neden & Nasıl Yapılır?

StoryBrand yedi bileşenden oluşur: Kahraman (müşteri kim?), Problem (ne engelliyor? — dış, iç ve felsefi boyutlar), Rehber (biz kimiz? empati + otorite), Plan (ne yapmalı?), Aksiyon çağrısı (doğrudan + geçişli), Başarısızlık kaçınımı (ne kaybedebilir?), Başarı (hayatı nasıl değişir?). Bu yedi bileşen bir BrandScript olarak belgelenir ve tüm iletişimin referans noktası olur.

StoryBrand BrandScript Çerçevesi

Bileşen                 Soru                          Örnek

Kahraman                Müşterimiz kim, ne istiyor?   Büyümek isteyen ama marketing sisteminden yoksun kurucu

Problem (Dış)           Somut, görünür problem ne?    Her ay farklı strateji, ölçülemeyen sonuçlar

Problem (İç)            Nasıl hissettiriyor?          Kontrol kaybı hissi, ekibin yorulması

Rehber                  Biz neden güveniliri iz?      100+ şirkete marketing sistemi kurduk

Plan                    Adımlar ne?                   Analiz → Sistem → Ölçüm → Büyüme

Başarı                  Hayatı nasıl değişir?         Tekrar edilebilir büyüme, sistematik marketing

Action Steps

1.  BrandScript'i ekiple birlikte doldur — tek kişinin değil, birlikte üretilmiş olması önemli

2.  İlk 3 müşteri case study'sini yaz — problem, çözüm, sayısal sonuç formatında

3.  Kurucu hikayesini kısa (60 saniye) ve uzun (3 dakika) formatta hazırla

4.  Her yeni içeriğin BrandScript ile hizalı olup olmadığını kontrol et

5.  Case study'leri web sitesine, sales deck'e ve outbound sekanslarına entegre et

Checklist

✔ BrandScript tamamlandı mı?

✔ Müşteri hikayenin kahramanı mı?

✔ En az 3 sayısal case study yayında mı?

✔ Kurucu hikayesi hazır mı?

✔ Tüm kanalda aynı hikaye anlatılıyor mu?

Kaçınılması Gereken Hatalar

✗ Şirketi kahraman yapmak — 'biz en iyiyiz, biz harikayız' anlatısı müşteriyle bağlantı kurmaz; müşteri kendini hikayede görmeli

✗ Case study'yi özellik listesine dönüştürmek — rakamlar ve sonuçlar olmadan case study ikna etmez

✗ Her kanalda farklı hikaye anlatmak — web, LinkedIn, pitch deck, e-posta tutarsızsa marka parçalanır

📌 B2B Örnek                                                                                                                                                                                                                                                                         📌 B2C Örnek

B2B SaaS şirketi case study formatını değiştirdi: özellik anlatımından 'Müşteri Dönüşüm Hikayesi'ne geçti. Format: 3 paragraf problem, 2 paragraf uygulama, 1 sayı tablosu (öncesi/sonrası). Demo talep edenlerden 'case study'yi okuyunca karar verdim' geri bildirimi %45 arttı.   B2C sürdürülebilir moda markası kurucunun hikayesini TikTok'ta paylaştı: 'Fast fashion endüstrisinde çalışırken vicdanım rahat etmedi.' Video 2.4 milyon görüntüleme aldı. O hafta site trafiği 8x arttı, satışlar 3 günde aylık hedefe ulaştı.

Sorumlu Rol             Zaman Çerçevesi                  Başarı Kriteri

CEO + Marketing Lead    İlk 60 gün — revizyon: yılda 1   BrandScript yazılmış, 3 case study yayında, tüm kanalda tutarlı hikaye var`,
      },
      {
        id: "9-2",
        title: `9.2 İçerik Dağıtım Mimarisi`,
        content: `TANIM & GENEL BAKIŞ

İçerik dağıtımı, üretim kadar önemlidir. Ama çoğu ekip zamanının %90'ını üretime, %10'unu dağıtıma harcar. Bu oran tersine çevrilmelidir: bir içerik üretildikten sonra ona hak ettiği erişimi kazandırmak için aktif ve sistematik dağıtım şarttır. Gary Vaynerchuk'un tabiriyle: 'Dağıtım, içeriğin kendisi kadar değerlidir.'

Dağıtım mimarisinin temeli üç katmanlı medya modelidir: owned (kendi sahip olduğunuz kanallar — blog, e-posta, sosyal medya), earned (başkalarının sizi paylaşması — PR, backlink, repost) ve paid (ücretli erişim — boost, reklam). Her içerik bu üç katmanda da yaşamalıdır. Yalnızca owned'da kalmak erişimi sınırlar; yalnızca paid'a güvenmek sürdürülebilir değildir.

→ B2B                                                                                                                                                                                                                                                   → B2C

B2B dağıtım öncelikleri: LinkedIn organic + e-posta listesi (owned), sektör yayınlarında misafir yazı + PR (earned), LinkedIn Ads boost (paid). Her içerik aynı zamanda sales deck'e ve outbound sekanslarına beslenmeli — içerik sales'in silahıdır.   B2C dağıtım öncelikleri: sosyal medya (owned), influencer repost + UGC (earned), Meta Ads boost (paid). Performanslı organik içerik paid ile ölçeklendirilmeli — organik'te iyi çalışan içerik reklamda da çalışır.

Neden & Nasıl Yapılır?

Her yeni içerik için dağıtım checklist'i önceden belirlenmeli — içerik yayınlanmadan önce, üretim aşamasında. 'Bu içerik hangi kanallarda nasıl yayınlanacak?' sorusu üretimden önce yanıtlanırsa içerik formatı buna göre şekillendirilebilir. Örneğin LinkedIn'de carousel formatının blog'dan çok daha iyi performans gösterdiği biliniyorsa, blog içeriği üretilirken aynı içerikten carousel de planlanır.

Dağıtım Checklist — Her İçerik İçin

Katman                  Kanal                   Aksiyon

Owned                   Blog / Web              SEO optimize edilmiş sayfa yayınla

Owned                   E-posta listesi         Özet + hook + link ile bülten gönder

Owned                   LinkedIn / Sosyal       Platform diline uygun format — carousel, metin, kısa video

Earned                  Sektör grupları         Reddit, Slack grupları, LinkedIn gruplarına paylaş

Earned                  Ortak paylaşım          İçerikte bahsedilen kişi/markayı etiketle

Paid                    Boost                   İlk 48 saatte iyi performans gösterirse $50–200 boost

Action Steps

6.  Her içerik için dağıtım checklist'i oluştur ve üretimden önce doldur

7.  Sales ekibine 'bu haftanın içeriği' düzenli olarak gönder — outreach'te kullansınlar

8.  Sektör Slack grupları, LinkedIn grupları ve Reddit topluluklarına içerik gönder

9.  İlk 48 saatte iyi performans gösteren organik içerikleri paid ile ölçeklendir

10. Aylık 'en iyi performanslı içerik' analizi yap: hangi format, hangi konu, hangi kanal?

Checklist

✔ Her içerik için dağıtım planı üretimden önce yapıldı mı?

✔ Owned kanalların tamamı kullanıldı mı?

✔ Sales ekibi içerikten haberdar mı?

✔ Sektör toplulukları hedeflendi mi?

✔ Boost bütçesi ayrıldı mı?

Kaçınılması Gereken Hatalar

✗ İçeriği yayınlayıp beklemek — 'iyi içerik kendiliğinden yayılır' miti yanlış; aktif dağıtım olmadan en iyi içerik bile sessizliğe gömülür

✗ Her platforma copy-paste içerik atmak — LinkedIn'deki metin Twitter'da işe yaramaz, TikTok'taki video LinkedIn'de anlamsız; her platform kendi dilini konuşur

✗ Dağıtım bütçesini sıfır bırakmak — performanslı organik içeriği $100 boost ile ölçeklendirmek, yeni içerik üretmekten çok daha iyi ROI verebilir

📌 B2B Örnek                                                                                                                                                                                                                                                                        📌 B2C Örnek

B2B şirketi her blog için 12 adımlık dağıtım checklist oluşturdu. Blog yayınlanır yayınlanmaz: 5 LinkedIn postu (her bölüm ayrı), e-posta özeti, 3 sektör Slack grubuna paylaşım, sales'e 'bu haftanın içeriği' e-postası. Aynı içeriğin organik trafiği 3 hafta içinde 4x arttı.   B2C marka her organik TikTok videosunun ilk 24 saat performansını izledi. 50.000+ görüntüleme alanlar otomatik olarak $150 Meta Ads boost aldı. Bu sistem sayesinde organik kazananlar paid ile ölçeklendi, denenmemiş içeriklere para harcanmadı. ROAS %180 arttı.

Sorumlu Rol             Zaman Çerçevesi                                   Başarı Kriteri

Marketing Lead          Her içerik yayınında — aylık performans analizi   Her içerik için dağıtım checklist %100 tamamlanmış olarak yayınlanıyor`,
      },
      {
        id: "9-3",
        title: `9.3 PR ve Medya İlişkileri`,
        content: `TANIM & GENEL BAKIŞ

PR, üçüncü taraf doğrulamasının en güçlü formudur. Kendi söyledikleriniz reklam sayılır; başkasının söyledikleri güven sayılır. Edelman'ın Trust Barometer araştırmasına göre tüketicilerin %63'ü gazeteci ve analistlerin görüşlerine marka iletişiminden çok daha fazla güveniyor. Bu asimetri PR yatırımının mantığını açıklar: bir sektör yayınında yer alan bir makale, aynı konuda yazılmış onlarca reklama kıyasla çok daha fazla güven ve dönüşüm üretebilir.

Modern PR iki farklı yaklaşımdan oluşur. Geleneksel PR: basın bülteni, medya daveti, röportaj talebi — büyük duyurular için uygun. Dijital PR: backlink kazanmak için araştırma raporları yayınlamak, uzman yorum vermek, podcast'lere konuşmacı olmak — SEO ve otorite için daha sürdürülebilir. Her ikisini birleştiren şirketler hem marka bilinirliği hem de organik trafik avantajı kazanır.

→ B2B                                                                                                                                                                                                                                                                                        → B2C

B2B PR'da thought leadership ön plandadır. Kurucu ve liderler sektörde uzman olarak görünmelidir: Forbes, TechCrunch, sektöre özel yayınlar, podcast'ler. Her medya görünümü satış sürecinde sosyal kanıt olarak kullanılır — 'X'te görüldüğü gibi' rozetleri web sitesinde güven artırır.   B2C PR'da tüketici medyası ve ürün incelemeleri öne çıkar. 'Best of' listelerine girmek, büyük yayınlarda ürün incelemesi almak ve sosyal kanıt üretimi PR stratejisinin merkezindedir. Influencer ile yapılan iş birlikleri de bir PR kanalı olarak değerlendirilebilir.

Neden & Nasıl Yapılır?

Gazeteci ilişkisi kurmak için doğru yaklaşım soğuk basın bülteni değil organik ilişkidir. Hedef gazetecileri LinkedIn'de takip edin, makalelerini okuyun, yorumlarda gerçek değer ekleyin. Birkaç hafta sonra bir veri veya içgörü teklif edin — 'bir araştırma yaptık, sektörle ilgili bulguları sizinle paylaşmak istedik' yaklaşımı soğuk basın büleninden çok daha iyi karşılanır.

PR Taktikleri — Etki ve Uygulama Kolaylığı

Taktik                          Etki                                Uygulama

Araştırma Raporu Yayınlama      Çok Yüksek — backlink ve otorite    Orta — 4–8 hafta üretim

Podcast Konuşmacısı             Yüksek — niş otorite, güven         Kolay — pitch + 1 saat kayıt

Sektör Konferansı Konuşmacısı   Yüksek — sahne otoritesi            Orta — başvuru süreci

Misafir Makale (Guest Post)     Yüksek — SEO + otorite              Kolay — 1 makale = çok fayda

Basın Bülteni                   Düşük-Orta — büyük duyurular için   Kolay — şablon ile hızlı

Uzman Yorum (HARO/Qwoted)       Orta — backlink ve görünürlük       Çok Kolay — günlük 15 dakika

Action Steps

11. Hedef medya listesi oluştur — 10–15 sektör yayını, gazeteci isimleri, konuları

12. Basın kiti hazırla: logo, kurucu bio, şirket özeti, temel istatistikler

13. HARO (Help a Reporter Out) veya Qwoted'a kayıt ol — günlük 15 dakika uzman yorum fırsatları

14. Kurucu için yılda 5–10 podcast başvurusu yap — niş ve orta büyüklükteki podcast'ler büyük olanlardan daha iyi dönüşüm üretebilir

15. Sektöre özgü küçük bir araştırma raporu yayınla — 'Sektörümüzde X trendi raporu' formatı gazetecilerin ilgisini çeker

Checklist

✔ Hedef medya listesi ve gazeteci isimleri belirlendi mi?

✔ Basın kiti hazır mı?

✔ HARO/Qwoted rutini başladı mı?

✔ Thought leadership içerik takvimi aktif mi?

✔ Kriz iletişim planı hazır mı?

Kaçınılması Gereken Hatalar

✗ Soğuk basın bülteni göndermek — gazetecilerin %90'ı tanımadıkları birinden gelen basın bültenini açmaz; önce ilişki, sonra haber

✗ PR'ı yalnızca büyük duyurular için kullanmak — sürekli thought leadership, tek seferlik büyük duyurudan çok daha güçlü otorite biriktirir

✗ PR başarısını yalnızca yayın sayısıyla ölçmek — backlink kalitesi, referral trafik ve satış sürecindeki etki çok daha anlamlı metriklerdir

📌 B2B Örnek                                                                                                                                                                                                                                                       📌 B2C Örnek

B2B fintech şirketi 'KOBİ'lerin Nakit Akışı Raporu' başlıklı küçük bir araştırma yayınladı: 200 şirketle anket, 10 sayfa veri. 4 sektör yayını haberi aldı, 12 backlink kazandı. Bu backlink'ler domain otoritesini artırdı ve organik trafik 3 ayda %45 büyüdü.   B2C wellness markası kurucusu 8 niş podcast'e konuşmacı oldu. Her podcast ortalama 3.000 dinleyici — toplam 24.000 kişi. Podcast dönüşüm oranı sosyal medya reklamından 3x yüksek çıktı çünkü dinleyici zaten güven kurmuş birinden duymak üzereydi.

Sorumlu Rol             Zaman Çerçevesi                           Başarı Kriteri

CEO + Marketing Lead    İlk 60 gün hazırlık — sürekli operasyon   Ayda en az 1 medya görünümü veya backlink hedefleniyor`,
      },
      {
        id: "9-4",
        title: `9.4 Kriz İletişimi`,
        content: `TANIM & GENEL BAKIŞ

Her marka eninde sonunda bir krizle karşılaşır. Fark, krizin büyüklüğünde değil nasıl yönetildiğindedir. Kriz yönetiminin altın kuralı şudur: kriz anında plan yapmak için zaman yoktur. Plan önceden yapılır, kriz anında uygulanır. Hazırlıksız kriz yönetimi her zaman daha fazla hasar verir — hem marka itibarına hem de müşteri güvenine.

Kriz iletişiminde en kritik karar ilk 24 saatte verilir. Sessiz kalmak 'bilmiyoruz veya umursamıyoruz' mesajı verir. Aceleci açıklama yapmak ise doğrulanmamış bilgiyle daha büyük sorunlara yol açar. Doğru yaklaşım: hızlı kabul ('bu durumun farkındayız, inceliyoruz'), güncelleme taahhüdü ('X saatte daha fazla bilgi paylaşacağız') ve empati ('etkilenenlerin deneyimi bizim için önemlidir').

→ B2B                                                                                                                                                                                                                                                                      → B2C

B2B'de kriz genellikle ürün hatası, veri ihlali veya SLA ihlali şeklinde gelir. Müşteri güveni doğrudan etkilenir. Hızlı ve şeffaf iletişim — ne oldu, ne yapıyoruz, bir daha olmayacak — müşteri kaybını minimize eder. Sessizlik ise her zaman daha fazla zarar verir.   B2C'de kriz genellikle sosyal medyada viral olan olumsuz içerik, ürün kalite sorunu veya marka değerleriyle çelişen bir durum olarak ortaya çıkar. İlk 24 saat kritiktir — sosyal medya yangınları bu sürede kontrol altına alınmazsa yayılma katlanarak artar.

Neden & Nasıl Yapılır?

Kriz iletişim planı üç bileşenden oluşur. Birincisi kriz ekibi ve roller: kriz anında kim ne karar verir, kim iletişim yapar, hukuki onay gerekir mi? Bu roller önceden belirlenmeli ve herkes bilmeli. İkincisi kriz kategorileri ve yanıt şablonları: ürün hatası, veri ihlali, sosyal medya krizi, çalışan krizi gibi kategoriler için önceden hazırlanmış taslak mesajlar. Üçüncüsü eskalasyon protokolü: sorunun büyüklüğüne göre hangi seviyede kim devreye girer?

Kriz Yönetimi Adımları

Adım                    Süre                     Aksiyon

1. Değerlendirme        İlk 30 dakika            Gerçek kriz mi yoksa gürültü mü? Kriz ekibini topla.

2. İlk Yanıt            İlk 2–4 saat             Durumu kabul et, empati kur, güncelleme taahhüdü ver. Savunmacı olma.

3. Detaylı Açıklama     24 saat içinde           Ne oldu, neden oldu, ne yapılıyor, bir daha olmayacak.

4. İzleme               Kriz boyunca             Tüm kanalları izle, yayılımı takip et, yorum ve DM'lere yanıt ver.

5. Retrospektif         Kriz kapandıktan sonra   Ne öğrendik? Plan güncellenmeli mi? Belgele.

Kriz İletişim Prensipleri

-   Hız — sessizlik her zaman daha fazla zarar verir; 'inceliyoruz' bile bir yanıttır

-   Şeffaflık — yarım gerçek tam yalandan daha tehlikelidir

-   Empati — savunmacı değil anlayışlı; müşterinin deneyimini kabul et

-   Aksiyon — sadece özür değil, somut çözüm ve önlem sun

-   Tutarlılık — tüm kanallarda aynı mesaj; farklı açıklamalar güveni tamamen kırar

Action Steps

16. Kriz ekibini ve rolleri belirle: karar veren, iletişim yapan, hukuki onaylayan

17. Olası kriz kategorilerini listele: ürün hatası, veri ihlali, sosyal medya krizi, çalışan sorunu

18. Her kategori için taslak yanıt mesajı hazırla

19. Sosyal medya mention takibi kur — kriz erken tespit edilmeli

20. Yılda bir kriz simülasyonu yap — 'yarın büyük bir kriz çıksa ne yapardık?'

Checklist

✔ Kriz ekibi ve rolleri tanımlı mı?

✔ Kriz kategorileri ve yanıt şablonları hazır mı?

✔ Mention takip sistemi aktif mi?

✔ Ekip planı biliyor mu?

Kaçınılması Gereken Hatalar

✗ İlk 24 saat sessiz kalmak — boşluğu başkaları dolduruyor; dedikodu ve spekülasyon gerçeğin önüne geçiyor

✗ Savunmacı ve inkarcı iletişim kurmak — 'bizim hatamız değil' tutumu güveni kalıcı olarak kırabilir

✗ Kriz planını kriz anında yazmaya çalışmak — panik ortamında yazılan iletişim tutarsız ve duygusal olur

📌 B2B Örnek                                                                                                                                                                                                                                                                                    📌 B2C Örnek

B2B yazılım şirketi veri ihlali yaşadı. 3 saat içinde tüm müşterilere e-posta gönderildi: 'Bu an itibariyle neler biliyoruz, aldığımız önlemler, önümüzdeki 24 saatteki güncelleme.' 48 saatte teknik rapor paylaşıldı. Müşteri kaybı beklenenin %65 altında kaldı — şeffaflık güveni korudu.   B2C gıda markası sosyal medyada viral olan olumsuz içerikle karşılaştı. 6 saat bekledi — bu sürede içerik 80.000 paylaşıma ulaştı. Kriz planı olsaydı 2 saat içinde empati odaklı video yanıtı hazır olurdu. Sonraki kriz planı güncellendi: 'ilk 2 saatte mutlaka bir ses çıkar' kuralı eklendi.

Sorumlu Rol                  Zaman Çerçevesi                                    Başarı Kriteri

CEO + COO + Marketing Lead   Kriz öncesi hazırlık — her kriz sonrası güncelle   Kriz planı hazır, ekip briefed, mention takibi aktif`,
      },
    ],
  },
  {
    id: "veri-analitik",
    num: "10",
    title: `VERİ, ANALİTİK VE KARAR ALMA`,
    subtitle: `KPI sistemi, attribution, A/B testi, raporlama`,
    subsections: [
      {
        id: "10-1",
        title: `10.1 Marketing Metrikleri ve KPI Sistemi`,
        content: `TANIM & GENEL BAKIŞ

Her marketing aktivitesinin ölçülmesi gerekir ama her şeyi ölçmek odağı dağıtır. İyi bir KPI sistemi az sayıda kritik metriği derinlemesine izler. Rockefeller Habits ve OKR metodolojilerinin ortak öğretisi şudur: bir organizasyonun aynı anda odaklanabileceği kritik metrik sayısı 3–5'tir. Bunun üzerindeki her yeni metrik dikkat ve kaynak tüketen gürültüye dönüşür.

→ B2B                                                                                                                                                                                                            → B2C

B2B'nin kuzey yıldızı metrikleri: ARR/MRR büyüme hızı, CAC, LTV:CAC oranı, NRR (Net Revenue Retention) ve satış döngüsü uzunluğu. Bu beş metrik birlikte iş modelinin sağlığını ve büyüme kalitesini gösterir.   B2C'nin kuzey yıldızı metrikleri: DAU/MAU oranı (engagement yoğunluğu), CAC, LTV, D30 retention ve NPS. Bu beş metrik birlikte kullanıcı bağlılığını ve iş sürdürülebilirliğini gösterir.

Neden & Nasıl Yapılır?

North Star Metric (NSM) konsepti: şirketin büyümesini en iyi öngören tek metriktir. Airbnb için 'geceleme sayısı', Spotify için 'aylık dinleme saati', Slack için 'mesajlaşan organizasyon sayısı'. NSM ürün kararları ile marketing kararlarını aynı hedefe hizalar. NSM'yi belirledikten sonra onu etkileyen öncü metrikleri (input metrics) tanımlayın: NSM'yi artırmak için hangi davranışları artırmalıyız?

Metrik Hiyerarşisi

Seviye                     Metrik Türü                            Örnekler

L1 — North Star            Şirket büyümesini öngören tek metrik   ARR, DAU, GMV, geceleme sayısı

L2 — Öncü Metrikler        NSM'yi besleyen input metrikleri       MQL sayısı, trial başlatma, onboarding tamamlama

L3 — Kanal Metrikleri      Her kanalın kendi performansı          CAC/kanal, CTR, ROAS, email açılma

L4 — Aktivite Metrikleri   Günlük operasyonel takip               Yayınlanan içerik, gönderilen e-posta, yapılan demo

Action Steps

1.  Şirket için North Star Metric'i belirle — ekiple birlikte, CEO'nun onayıyla

2.  NSM'yi etkileyen 3–5 öncü metriği tanımla

3.  Her metrik için sahip (owner), hedef ve ölçüm frekansını belirle

4.  Haftalık metrik review rutini kur — 30 dakika, tüm ekip

5.  Anomali tespit sistemi kur: bir metrik hedefin %20 altına düşerse otomatik uyarı

Checklist

✔ North Star Metric belirlendi mi?

✔ Her KPI için sahip ve hedef var mı?

✔ Haftalık review toplantısı aktif mi?

✔ Dashboard tüm ekibe açık mı?

Kaçınılması Gereken Hatalar

✗ Vanity metric'lere odaklanmak — 'follower sayısı', 'impression', 'sayfa görüntüleme' güzel görünür ama iş büyümesiyle ilişkisi zayıftır; gelir ve retention odaklı metrikler seçin

✗ Çok fazla KPI takip etmek — 20 KPI takip eden ekip aslında hiçbirini gerçekten yönetemiyor; 3–5 kritik metriğe odaklan

✗ Metrikleri ölçüp aksiyon almamak — 'data for the sake of data' kaynak israfıdır; her metrik izlemenin arkasında bir karar veya aksiyon olmalı

📌 B2B Örnek                                                                                                                                                                                                                                                    📌 B2C Örnek

B2B SaaS şirketi 23 farklı metrik izliyordu, haftalık toplantılar 2 saate çıkmıştı ama karar alınamıyordu. Metrik sayısı 5'e indirildi: MRR büyüme, CAC, NRR, demo-to-close, D90 churn. Haftalık toplantı 30 dakikaya indi, her toplantıda net aksiyon çıktı.   B2C app follower sayısına odaklanıyordu. 50.000 follower'a ulaştığında gelir durgundu. NSM değiştirildi: 'haftada 3+ oturum yapan kullanıcı sayısı.' Bu metrik optimize edilince D30 retention arttı, LTV büyüdü, gelir takip etti.

Sorumlu Rol             Zaman Çerçevesi                   Başarı Kriteri

CEO + Marketing Lead    İlk 30 gün — çeyreklik revizyon   NSM belirlendi, KPI dashboard canlı, haftalık review aktif`,
      },
      {
        id: "10-2",
        title: `10.2 Attribution ve Kanal Analizi`,
        content: `TANIM & GENEL BAKIŞ

Attribution, bir satışın hangi marketing temas noktasının 'kredisini' aldığını belirler. Bu sorunun yanıtı bütçe kararlarını doğrudan etkiler: yanlış attribution yanlış kanallara yatırım yapmaya, doğru kanalları küçümsemeye ve büyüme fırsatlarını kaçırmaya yol açar. Ama attribution zordur çünkü müşteri yolculuğu nadiren tek bir kanaldan geçer.

→ B2B                                                                                                                                                                                                                                                                                    → B2C

B2B'de müşteri yolculuğu genellikle 5–15 temas noktası içerir: LinkedIn postu → blog → webinar → e-posta → demo → satış görüşmesi. Bu temas noktalarından hangisi 'satışı yaptı'? Tek attribution modeli yanıltıcı olur. Multi-touch attribution veya W-shaped model daha gerçekçidir.   B2C'de yolculuk daha kısa ama çapraz cihaz ve platform karmaşıklığı daha yüksektir. iOS 14+ sonrası cookie kısıtlamaları attribution'ı zorlaştırdı. Modeled conversion ve first-party data giderek daha önemli hale geliyor.

Attribution Modelleri

Model                   Nasıl Çalışır                                        Ne Zaman Kullanılır

Last Touch              Satış öncesi son temas tüm krediyi alır              Basit başlangıç — yanıltıcı ama yaygın

First Touch             İlk temas tüm krediyi alır                           Brand awareness ölçümü için

Linear                  Tüm temas noktaları eşit kredi alır                  Uzun B2B döngüleri için makul

Time Decay              Satışa yakın temas noktaları daha fazla kredi alır   Kısa satış döngüleri için

W-Shaped                İlk temas, MQL dönüşümü ve kapanış eşit kredi alır   B2B için en dengeli model

Data-Driven             Makine öğrenmesiyle gerçek etki hesaplanır           Yüksek veri hacmi olan büyük şirketler

Action Steps

6.  UTM yapısının %100 uyumlu kullanıldığını doğrula — attribution'ın temeli

7.  GA4'te attribution modelini incele ve iş modeline uygun modeli seç

8.  Her kanalın CAC'ını ayrı ayrı hesapla: kanal harcaması / o kanaldan gelen müşteri

9.  Kanal bazlı LTV analizi yap — en düşük CAC her zaman en iyi kanal değildir, LTV:CAC oranına bak

10. Çeyreklik attribution review yap — hangi kanal gerçekten büyümeyi sürüklüyor?

Checklist

✔ UTM yapısı tutarlı mı?

✔ Attribution modeli seçildi mi?

✔ Kanal bazlı CAC hesaplanıyor mu?

✔ LTV:CAC kanal bazında izleniyor mu?

Kaçınılması Gereken Hatalar

✗ Yalnızca last-touch attribution kullanmak — son temas noktası krediyi alır ama üst funnel kanallarının katkısı görünmez olur; organik ve içerik yatırımı haksız şekilde küçümsenir

✗ Kanal kararını yalnızca CAC'a dayandırmak — en düşük CAC'lı kanal en düşük LTV'li müşteriyi de getirebilir; her zaman LTV:CAC oranına bak

✗ Attribution analizi yapmadan bütçe kesmek — 'bu kanal çalışmıyor' kararı sağlam attribution olmadan yanlış kanalı kapatabilir

📌 B2B Örnek                                                                                                                                                                                                                                                                                  📌 B2C Örnek

B2B şirketi last-touch attribution kullanıyordu. Bütün kredi demo talep formuna gidiyordu, LinkedIn organic görünmez olmuştu. W-shaped model uygulandı: LinkedIn organik'in müşterilerin %67'sinin yolculuğunda yer aldığı görüldü. LinkedIn yatırımı %40 artırıldı, MQL kalitesi yükseldi.   B2C marka TikTok'un CAC'ı yüksek görünerek bütçesini kesmişti. LTV analizi yapılınca TikTok'tan gelen müşterilerin 12 aylık LTV'si diğer kanallardan %35 daha yüksek çıktı. TikTok bütçesi geri yüklendi.

Sorumlu Rol             Zaman Çerçevesi                Başarı Kriteri

Marketing Lead          Çeyreklik attribution review   Kanal bazlı CAC ve LTV:CAC oranları aylık raporlanıyor`,
      },
      {
        id: "10-3",
        title: `10.3 A/B Testi Kültürü ve Deney Yönetimi`,
        content: `TANIM & GENEL BAKIŞ

Büyüyen şirketler, büyümeyi şansa bırakmayan şirketlerdir. Sistematik deney kültürü bu inancın operasyonel karşılığıdır. Amazon, Booking.com, Airbnb gibi büyük platformlar günde yüzlerce A/B testi yürütür. Ölçeklerine ulaşmalarının sırrı kısmen budur: daha hızlı öğrenir, daha hızlı optimize ederler. Küçük şirketler bunu daha az testle yapabilir ama aynı kültürü benimsemeli.

→ B2B                                                                                                                                                                                                                                                                    → B2C

B2B'de test edilecek en değerli alanlar: landing page mesajı (hero başlık ve CTA), demo form alanları, fiyat sayfası yapısı ve e-posta konu satırları. Trafik hacmi düşük olduğu için testler daha uzun sürer — sabırsızlık istatistiksel anlamsız sonuçlara yol açar.   B2C'de test edilecek alanlar daha geniştir: ürün sayfası görselleri, checkout akışı, push notification metinleri, reklam kreatifleri, e-posta konu satırları. Yüksek trafik hızlı istatistiksel güç sağlar — testler bazen 48 saatte sonuçlanabilir.

Neden & Nasıl Yapılır?

Deney kültürü kurmak için üç şart vardır. Birincisi psikolojik güven: 'test kaybettik' sonucu başarısızlık değil, öğrenmedir. İkincisi metodoloji standartı: her test hipotez, kontrol/varyant, başarı metriği ve minimum örneklem büyüklüğü ile tanımlanır. Üçüncüsü belgeleme: her testin sonucu belgelenir ve erişilebilir tutulur — aynı testi iki kez yapmak kaynak israfıdır.

++
| İstatistiksel Anlamlılık Neden Önemli?                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                   |
| Bir A/B testinde kazanan varyantı ilan etmek için en az %95 güven aralığı gerekir. Bu; rastgele dalgalanma ihtimalinin %5'in altında olduğu anlamına gelir. Daha az trafikle erken karar vermek, gerçekte fark yaratmayan değişiklikleri 'kazanan' ilan etmenize yol açar. Kural: testi başlatmadan önce minimum örneklem büyüklüğünü hesaplayın. |
++

Action Steps

11. Aylık test takvimine bağla — 'bu ay ne test edeceğiz?' sorusunu önceden yanıtla

12. Her test için şablon doldur: hipotez, kontrol, varyant, başarı metriği, min. örneklem

13. Minimum örneklem hesaplamak için online calculator kullan (Evan Miller veya AB Testguide)

14. Tüm test sonuçlarını Notion veya benzeri araçta belge — kazanlar ve kayıplar

15. Aylık 'test öğrenimleri' paylaşımı yap — tüm ekip öğrensin

Checklist

✔ Her test için hipotez yazıldı mı?

✔ Minimum örneklem hesaplandı mı?

✔ Testler tek değişkenle mi yürütülüyor?

✔ Sonuçlar belgeleniyor mu?

Kaçınılması Gereken Hatalar

✗ Erken durdurmak — 'varyant şu an %15 öndeyse kazandı' düşüncesi yanlış; istatistiksel güce ulaşmadan durdurulan test yanıltıcı sonuç verir

✗ Kaybeden testi belgelememek — 'ne işe yaramadığını' bilmek 'ne işe yaradığını' bilmek kadar değerlidir

✗ Birden fazla değişken test etmek — iki değişken aynı anda test edilirse hangi değişkenin etkiyi yarattığı bilinemez

📌 B2B Örnek                                                                                                                                                                                                                                       📌 B2C Örnek

B2B şirketi landing page hero başlığını değiştirdi. İstatistiksel güce ulaşmadan 3 günde 'kazandı' dedi ve uyguladı. 2 hafta sonra dönüşüm düştü — erken durdurma yanıltmıştı. Sonraki testlerde minimum örneklem kuralı zorunlu hale getirildi.   B2C app push notification metnini test etti: 'Bugün de seninleyiz' vs 'Dün %40 daha iyi performans gösterdin.' Kişiselleştirilmiş versiyon %34 daha yüksek açılma oranı aldı. Bu öğrenme tüm notification kategorilerine uygulandı.

Sorumlu Rol             Zaman Çerçevesi                        Başarı Kriteri

Marketing Lead          Aylık test takvimi — sürekli öğrenme   Aylık en az 2 aktif test, sonuçlar belgelenmiş ve paylaşılmış`,
      },
      {
        id: "10-4",
        title: `10.4 Raporlama ve Karar Çerçevesi`,
        content: `TANIM & GENEL BAKIŞ

Raporlama çoğu şirkette geriye bakıştır: ne oldu? Ama iyi bir raporlama sistemi aynı zamanda ileriye bakar: ne olmak üzere? Bu ayrım önemlidir. Gecikmeli metrikler (lagging indicators) sonuçları ölçer ama değiştiremezsiniz — geçmişte kalmıştır. Öncü metrikler (leading indicators) gelecek sonuçları öngörür ve üzerinde aksiyon alınabilir.

→ B2B                                                                                                                                                                                                               → B2C

B2B'de en kritik leading indicator'lar: yeni MQL sayısı, pipeline coverage (mevcut pipeline hedefin kaç katı?), demo-to-close oranı trendi, ve churn riski altındaki müşteri sayısı. Bu dördü haftalık izlenmeli.   B2C'de en kritik leading indicator'lar: yeni kullanıcı edinimi, D1 ve D7 retention trendi, CAC trendi ve cart abandonment oranı. Bu dördü haftalık izlenmeli.

Raporlama Kadansı

Frekans                 İçerik                                                     Katılımcılar

Günlük (5 dk)           Önceki günün kritik metrikleri — anomali var mı?           Marketing Lead

Haftalık (30 dk)        Kanal performansı, aktif test sonuçları, pipeline durumu   Marketing + Sales

Aylık (60 dk)           Funnel analizi, kanal attribution, OKR ilerlemesi          Marketing + CEO + CFO

Çeyreklik (2 saat)      Strateji gözden geçirme, attribution, bütçe planı          Liderlik ekibi

Action Steps

16. Günlük anomali alertleri kur — kritik metrik %20 sapma gösterirse e-posta uyarısı

17. Haftalık raporun formatını standartlaştır: bu hafta ne oldu, neden, önümüzdeki hafta ne yapıyoruz

18. Aylık raporlara karar önermesi ekle — 'veri bunu gösteriyor, önerim şu'

19. OKR'larla raporlama arasında köprü kur: her metrik bir OKR'a bağlı olmalı

20. Çeyreklik 'marketing iş incelemesi' toplantısı kur — CEO ve CFO dahil

Checklist

✔ Günlük anomali uyarıları kuruldu mu?

✔ Haftalık rapor formatı standartlaştırıldı mı?

✔ Raporlar kararlara dönüşüyor mu?

✔ OKR ve metrik bağlantısı kuruldu mu?

Kaçınılması Gereken Hatalar

✗ Raporlamayı sadece 'ne oldu' olarak kullanmak — iyi raporlama 'ne oldu' ile başlar ama 'ne yapmalıyız' ile biter; her rapor bir karar önerisiyle sonuçlanmalı

✗ Çok uzun ve karmaşık raporlar hazırlamak — raporu kimse okumuyorsa hiçbir değeri yoktur; 1 sayfa executive summary + detay eki formatı çok daha etkili

✗ Metrikleri OKR'lardan bağımsız izlemek — her ölçüm bir hedefe bağlı olmalı; aksi takdirde 'iyi mi kötü mü?' sorusu yanıtsız kalır

📌 B2B Örnek                                                                                                                                                                                                                                                         📌 B2C Örnek

B2B şirketi haftalık marketing raporunu 12 sayfadan 1 sayfaya indirdi. Format: 5 kritik metrik (yeşil/sarı/kırmızı), 3 önemli öğrenme, 3 önümüzdeki hafta aksiyonu. CEO 'artık okuyorum ve karar veriyorum' dedi. Haftalık toplantı 90 dakikadan 30 dakikaya indi.   B2C marka aylık raporu Google Slides'dan Looker Studio'ya taşıdı. Otomatik güncellenen dashboard, her ay 4 saat raporlama zamanını kurtardı. Marketing ekibi analize değil analizin ürettiği aksiyonlara odaklandı.

Sorumlu Rol             Zaman Çerçevesi                                  Başarı Kriteri

Marketing Lead          İlk 30 gün sistem kurulumu — sürekli operasyon   Haftalık rapor standart formatta, aylık CEO ile paylaşılıyor`,
      },
    ],
  },
  {
    id: "marketing-ops",
    num: "11",
    title: `MARKETİNG OPERASYONLARI`,
    subtitle: `Bütçe, ekip yapısı ve süreç tasarımı`,
    subsections: [
      {
        id: "11-1",
        title: `11.1 Marketing Bütçesi Planlaması ve Yönetimi`,
        content: `TANIM & GENEL BAKIŞ

Marketing bütçesi bir harcama listesi değil, büyüme için yapılan bir yatırım planıdır. Bu bakış açısı kritiktir: harcama listesi kesilir, yatırım planı ROI'siyle değerlendirilir. Bütçe kararlarının veriyle desteklenmesi hem kaynakların doğru kullanılmasını hem de CFO'ya savunulabilir bir plan sunulmasını sağlar.

→ B2B                                                                                                                                                                                                                                     → B2C

B2B'de bütçe dağılımı genellikle: %40–50 demand generation (paid, events, outbound), %25–30 içerik ve SEO, %15–20 brand ve PR, %10–15 araçlar ve teknoloji. Erken aşamada demand generation ağırlıklı, büyüdükçe organik yatırım artar.   B2C'de bütçe dağılımı: %50–60 paid acquisition (Meta, TikTok, Google), %20–25 içerik ve influencer, %10–15 CRM ve retention, %5–10 araçlar. CAC düşüncesiyle optimize edilir.

Neden & Nasıl Yapılır?

Bütçe planlaması üç yaklaşımdan biriyle yapılır. Gelir yüzdesi: toplam gelirin belirli bir yüzdesini marketing'e ayırmak (erken aşama B2B için %15–25, olgun B2C için %10–20). Hedef bazlı: 'Bu yıl X MQL üretmek istiyoruz, ortalama MQL maliyetimiz Y, dolayısıyla Z bütçe gerekiyor.' CAC geri dönüşü: 'CAC'ı 3 ay içinde geri kazanabiliyorsak X dolar harcamaya hazırız.' En sağlam yaklaşım hedef bazlıdır çünkü neyi satın aldığınızı netleştirir.

Action Steps

1.  Yıllık MQL ve müşteri hedefini belirle, ortalama CAC ve dönüşüm oranlarıyla gereken bütçeyi hesapla

2.  Bütçeyi kanal ve kategori bazında parçala — her harcamanın hangi hedefe hizmet ettiği görünmeli

3.  Aylık bütçe vs gerçekleşen karşılaştırması yap

4.  Her çeyrekte bütçe performansını gözden geçir — düşük ROI'li kalemleri kes, yüksek ROI'lileri artır

5.  CFO ile çeyreklik 'marketing ROI incelemesi' toplantısı kur

Checklist

✔ Bütçe hedef bazlı mı planlandı?

✔ Her harcama kalemi bir hedefe bağlı mı?

✔ Aylık bütçe takibi yapılıyor mu?

✔ CFO ile düzenli görüşme var mı?

Kaçınılması Gereken Hatalar

✗ Bütçeyi geçen yılın kopyası olarak hazırlamak — pazar değişir, kanal performansları değişir; her yıl sıfırdan ROI bazlı değerlendirme yapılmalı

✗ Bütçeyi kriz anında ilk kesmek — kriz döneminde rakipler sessizleştiğinde görünür olmak rekabet avantajı yaratır; kesim yapmak yerine verimsiz kalemleri kesip verimli kanallara kaydırın

✗ Araç maliyetlerini küçümsemek — SaaS araç faturaları sessizce büyür; yılda bir araç audit yapın

📌 B2B Örnek                                                                                                                                                                                                                                      📌 B2C Örnek

B2B şirketi kriz döneminde genel bütçeyi %30 kesti ama paid reklamı kesmeyip SEO ve content'e kaydırdı. 6 ay sonra rakiplerin organik trafik kaybettiği dönemde %45 organik büyüme yaşadı — kriz rakipten önce pozisyon almak için fırsat oldu.   B2C marka yıllık araç auditinde 14 aktif SaaS aboneliği buldu, 6'sının son 3 ayda kullanılmadığı tespit edildi. Yılda $18.000 tasarruf edildi, bu bütçe paid acquisition'a yönlendirildi.

Sorumlu Rol             Zaman Çerçevesi             Başarı Kriteri

Marketing Lead + CFO    Yıllık plan — aylık takip   Bütçe vs gerçekleşen aylık raporlanıyor, CFO ile çeyreklik review yapılıyor`,
      },
      {
        id: "11-2",
        title: `11.2 Ekip Yapısı ve Yetkinlik Planlaması`,
        content: `TANIM & GENEL BAKIŞ

Marketing ekibi, şirketin büyüme aşamasına ve iş modeline göre farklı yapılarda kurulur. Erken aşamada tek kişi veya küçük bir ekip her şeyi yapar — generalist yaklaşım. Büyüme aşamasında ise uzmanlık kritik hale gelir: SEO uzmanı, paid specialist, içerik ekibi, CRM uzmanı. Yanlış yapı hem verimliliği düşürür hem de doğru insanları çekmeyi zorlaştırır.

→ B2B                                                                                                                                                                                                                                 → B2C

B2B marketing ekibinin öncelikli rolleri: Demand Generation (paid + outbound), Content & SEO, Product Marketing (positioning, enablement), ve Marketing Ops (CRM, analytics). İlk işe alım genellikle demand gen veya content olur.   B2C marketing ekibinin öncelikli rolleri: Performance (paid acquisition), Content & Social, CRM & Email, ve Analytics. İlk işe alım genellikle performance veya content olur.

Büyüme Aşamasına Göre Ekip Yapısı

Aşama                   Ekip Büyüklüğü          Temel Roller

Seed / Erken            1–2 kişi                Marketing generalist + kurucu (CEO marketing yapıyor)

Seri A                  3–5 kişi                Demand gen, content/SEO, marketing ops/analytics

Seri B+                 6–15 kişi               Her kanalda uzman, dedicated performance, CS alignment

Scale                   15+ kişi                Fonksiyonel takımlar, VP/CMO, cross-functional koordinasyon

Action Steps

6.  Mevcut ekip boşluklarını belirle: hangi yetkinlik eksik, hangi iş sahipsiz kalıyor?

7.  Bir sonraki 6 ay için işe alım önceliğini belirle — en yüksek ROI'li role önce işe al

8.  Her rol için net job description ve başarı kriterleri yaz

9.  İçeride büyütme vs dışarıdan işe alım kararını her rol için değerlendir

10. Freelancer/ajans vs tam zamanlı çalışan dengesini optimize et

Checklist

✔ Ekip boşlukları belirlendi mi?

✔ İşe alım önceliği var mı?

✔ Her rol için başarı kriterleri tanımlı mı?

✔ Freelancer/ajans kullanımı optimize mi?

Kaçınılması Gereken Hatalar

✗ Çok erken uzmanlaşmak — 10 kişilik ekiple 5 farklı uzman rolü doldurmak çalışmaz; önce generalist, büyüyünce uzmanlaş

✗ Ajansa her şeyi bırakmak — strateji içeride olmalı; ajans execution için güçlü, strateji için zayıftır

✗ Marketing Ops rolünü ihmal etmek — ekip büyüdükçe süreç ve araç yönetimi tam zamanlı bir rol gerektirir

📌 B2B Örnek                                                                                                                                                                                                                                                                              📌 B2C Örnek

B2B şirketi ilk marketing işe alımında uzman paid specialist yerine marketing generalist aldı. Bu kişi hem SEO'ya hem içeriğe hem e-postaya hem de paid'a baktı. 12 ayda organik trafik 4x büyüdü, paid da %60 daha verimli hale geldi — tek doğru profil çok daha fazla değer yarattı.   B2C marka tüm sosyal medyayı ajansa verdi. 3 ay sonra içerik marka sesini yitirdi, community tepkiler azaldı. İçerik stratejisi içeriye alındı, ajansa yalnızca production bırakıldı. Engagement 2 ayda 3x büyüdü.

Sorumlu Rol             Zaman Çerçevesi                                    Başarı Kriteri

CEO + Marketing Lead    Her büyüme aşamasında — çeyreklik gözden geçirme   Ekip yapısı büyüme planıyla hizalı, boşluklar tanımlı`,
      },
      {
        id: "11-3",
        title: `11.3 Süreç Tasarımı ve Operasyonel Verimlilik`,
        content: `TANIM & GENEL BAKIŞ

Marketing operasyonlarının kalitesi, tekrar eden görevlerin ne kadar iyi sistemleştirildiğiyle ölçülür. Her kampanya sıfırdan planlanıyorsa, her brief yeniden yazılıyorsa, her onay süreci yeniden icat ediliyorsa ekip zamanını üretmekten çok koordinasyona harcıyor demektir. Süreç tasarımı bu israfı ortadan kaldırır.

→ B2B                                                                                                                                                                                                         → B2C

B2B'de en kritik süreçler: campaign brief şablonu, lansman checklist, MQL → sales handoff protokolü ve içerik onay süreci. Bu dört süreç standartlaştırıldığında ekip koordinasyon yerine üretim yapabilir.   B2C'de en kritik süreçler: içerik takvimi yönetimi, reklam onay akışı, influencer brief ve kampanya post-mortem. Bu dört süreç tutarlı büyük zaman ve kalite kayıplarını önler.

Neden & Nasıl Yapılır?

Süreç tasarımı için üç adım: (1) Mevcut süreci haritalandır — nasıl yapılıyor? Kaç adım, kaç kişi, ne kadar süre? (2) Darboğazları ve tekrarları tespit et — nerede vakit geçiyor, ne defalarca yapılıyor? (3) Standartlaştır ve otomasyona bağla — şablon, checklist ve otomasyon ile süreci kolaylaştır. Süreç tasarımı mükemmelliği değil, tutarlılığı hedefler.

Action Steps

11. Her tekrar eden marketing aktivitesi için şablon veya checklist oluştur

12. Onay akışlarını netleştir: kim neyi onaylıyor, kaç iş günü içinde?

13. Proje yönetim aracını (Notion, Linear, Asana) tam olarak kullan

14. Haftalık team sync: 15 dakika, engeller ve önümüzdeki haftanın planı

15. Aylık operasyon review: hangi süreç sürtünme yaratıyor?

Checklist

✔ Temel süreçler için şablon ve checklist var mı?

✔ Onay akışları tanımlı mı?

✔ Proje yönetim aracı aktif kullanılıyor mu?

✔ Haftalık sync ve aylık review yapılıyor mu?

Kaçınılması Gereken Hatalar

✗ Her kampanyayı sıfırdan planlamak — şablon olmayan süreç her seferinde farklı sonuçlar üretir ve zaman kaybettirir

✗ Onay sürecini belirsiz bırakmak — 'kimse onaylamadı' veya 'herkes onayladı sandım' hataları net süreç olmamasından kaynaklanır

✗ Araçları kullanmak ama süreçleri tanımlamak — araç yoksa süreç işlemez; süreç yoksa araç boşa döner

📌 B2B Örnek                                                                                                                                                                                                                                                 📌 B2C Örnek

B2B şirketi campaign brief şablonu oluşturdu: hedef kitle, mesaj, kanal, bütçe, başarı metriği, onay tarihleri. Brief tamamlanmadan hiçbir kampanya başlamadı. Kampanya geri dönüş toplantılarında 'brief'te net değildi' şikayeti tamamen ortadan kalktı.   B2C marka içerik onay akışını netleştirdi: içerik Pazartesi teslim, yönetici Salı onaylar, Çarşamba yayınlanır. Bu kural sayesinde içerik takviminde boşluk kalmadı, son dakika panikle yayın yapılmaz oldu.

Sorumlu Rol             Zaman Çerçevesi                    Başarı Kriteri

COO + Marketing Lead    İlk 60 gün — sürekli iyileştirme   Temel süreçler dokümante edilmiş, ekip şablonları kullanıyor`,
      },
    ],
  },
  {
    id: "is-ortakliklari",
    num: "12",
    title: `İŞ ORTAKLIKLARI VE EKOSİSTEM`,
    subtitle: `Partner stratejisi ve community`,
    subsections: [
      {
        id: "12-1",
        title: `12.1 Ortaklık Stratejisi ve Partner Ekosistemi`,
        content: `TANIM & GENEL BAKIŞ

Ortaklık stratejisi tek bir soruyu yanıtlar: 'Kimin ağından, kimin güveninden yararlanarak büyüyebiliriz?' Cevap genellikle ICP'nin zaten güvendiği ve kullandığı şirketlerde yatar. Tamamlayıcı ürünler, danışmanlar, sektör dernekleri ve eğitim kurumları güçlü ortaklık adaylarıdır. Her iyi ortaklık karşılıklı değer üretir — tek taraflı değer katılımı sürdürmez.

→ B2B                                                                                                                                                                                                                                           → B2C

B2B'de en güçlü ortaklıklar teknoloji entegrasyonları ve kanal ortaklıklarıdır. Müşterinin zaten kullandığı araçlarla entegre olmak — CRM, muhasebe, proje yönetimi — hem değer yaratır hem de geçiş maliyeti oluşturarak moat'ı güçlendirir.   B2C'de en güçlü ortaklıklar co-marketing, ürün bundling ve influencer ekosistemidir. Aynı hedef kitleye hitap eden tamamlayıcı markalarla yapılan ortak kampanyalar her iki markanın erişimini ve güvenini artırır.

Neden & Nasıl Yapılır?

Ortaklık öncesinde üç soruyu yanıtlayın: Bu ortaklık müşteri için değer yaratıyor mu? Her iki taraf ne kazanıyor — müşteri erişimi, gelir payı, ürün entegrasyonu? Ölçmek ve yönetmek için kapasitemiz var mı? Bu üç soruya 'evet' yanıtı yoksa ortaklık başlatılmamalıdır.

Ortaklık Türleri

Tür                     Tanım                                                      B2B / B2C

Teknoloji Ortaklığı     Ürün entegrasyonu, API bağlantısı, marketplace listesi     B2B öncelikli

Kanal Ortaklığı         Reseller, VAR, ajans. Kendi satış gücü olmadan erişim.     B2B öncelikli

Co-Marketing            Ortak kampanya, webinar, araştırma. Kitleler paylaşılır.   Her ikisi

Ürün Bundling           Birlikte satış, özel teklif, paket fiyatlandırma           B2C öncelikli

Referral                Karşılıklı müşteri yönlendirme, komisyon paylaşımı         Her ikisi

Action Steps

1.  ICP'nin kullandığı 20 araç ve hizmeti listele — potansiyel ortaklar burada

2.  Her potansiyel ortakla 'karşılıklı değer' testini yap: her iki taraf ne kazanıyor?

3.  İlk 3 ortakla pilot başlat, 90 gün test et

4.  Ortaklık sözleşmesi ve tracking sistemi kur

5.  Aylık partner performans değerlendirmesi yap

Checklist

✔ Potansiyel ortak listesi oluşturuldu mu?

✔ Karşılıklı değer testi yapıldı mı?

✔ Pilot ortaklıklar başlatıldı mı?

✔ Tracking ve ölçüm sistemi kuruldu mu?

Kaçınılması Gereken Hatalar

✗ Her teklif gelen ortaklığı kabul etmek — her ortaklık zaman ve enerji ister; yalnızca müşteri için net değer yaratanları kabul et

✗ Ortaklığı başlatıp yönetmemek — aktif ilişki yönetimi olmadan en iyi ortaklık bile pasivleşir

✗ Tek taraflı değer kurmak — siz kazanıyorsunuz ama ortak kazanmıyorsa program sürdürülemez

📌 B2B Örnek                                                                                                                                                                                                                      📌 B2C Örnek

B2B proje yönetim aracı en çok kullanılan 5 CRM ile entegrasyon geliştirdi. Her entegrasyon marketplace sayfası oluşturuldu. Marketplace'ten gelen lead'ler toplam MQL'in %22'sini oluşturmaya başladı — sıfır paid harcamayla.   B2C organik cilt bakımı markası, yoga ve wellness markasıyla ortak kampanya yürüttü: her iki markanın e-posta listesine karşılıklı tanıtım gönderildi, sosyal medyada birbirini etiketledi. Her marka 3.200 yeni takipçi ve 180 yeni müşteri kazandı — toplam harcama: $0.

Sorumlu Rol             Zaman Çerçevesi             Başarı Kriteri

CEO + Marketing Lead    İlk 90 gün — aylık büyüme   Aktif partner sayısı ve partner kaynaklı gelir aylık raporlanıyor`,
      },
      {
        id: "12-2",
        title: `12.2 Ekosistem ve Community Stratejisi`,
        content: `TANIM & GENEL BAKIŞ

Ekosistem stratejisi, ürünün etrafında bir değer ağı oluşturmaktır. Bu ağ ne kadar büyük ve güçlü olursa, rakibin kopyalaması o kadar zorlaşır. Slack'in etrafındaki 2.500+ uygulama ekosistemi, Salesforce'un AppExchange'i, HubSpot'un partner ağı — bunlar ürün özelliklerinden çok daha korunaklı rekabet avantajlarıdır.

→ B2B                                                                                                                                                                                                                    → B2C

B2B'de ekosistem geliştirici topluluğu (API erişimi, sandbox, dokümantasyon) ve çözüm ortakları ağından oluşur. Bu ekosistem müşterinin ürüne olan bağımlılığını artırır çünkü ürün etrafında bir iş altyapısı oluşur.   B2C'de ekosistem kullanıcı topluluğu, UGC (kullanıcı üretimi içerik) ve marka advocacy'den oluşur. Güçlü community hem retention'ı artırır hem de organik büyümenin kaynağıdır.

Action Steps

6.  Ürün etrafında hangi ekosistem bileşenleri oluşturulabilir? (entegrasyon, API, community)

7.  Mevcut en aktif 100 müşteriyi tespit et ve onları 'kurucu üye' olarak community'e davet et

8.  Community için net değer önerisi belirle: üyeler neden katılmalı?

9.  Ekosistem büyümesini ölçecek metrikler belirle: entegrasyon sayısı, aktif community üyesi, UGC hacmi

Checklist

✔ Ekosistem stratejisi tanımlandı mı?

✔ Community için değer önerisi belirli mi?

✔ Ekosistem metrikleri takip ediliyor mu?

Kaçınılması Gereken Hatalar

✗ Community'i duyuru kanalı olarak kullanmak — üyeler değer almak için katılır; yalnızca ürün haberleri paylaşmak community'i öldürür

✗ Ekosistemi erken kurmaya çalışmak — 100 aktif müşteri yoksa ekosistem boş kalır; önce PMF, sonra ekosistem

📌 B2B Örnek                                                                                                                                                                                                                                         📌 B2C Örnek

B2B analytics şirketi API'sini açık hale getirdi ve geliştirici dokümantasyonu yayınladı. 6 ayda 45 bağımsız entegrasyon geliştirildi. Bu entegrasyonlar enterprise satışlarda en çok sorulan özellik haline geldi — rakipler hızlı kopyalayamadı.   B2C fitness markası 'kurucu üyeler' programı başlattı: ilk 500 kullanıcıya özel Discord erişimi + aylık kurucu AMA seansı. Bu 500 kişi ürünün en güçlü savunucusu oldu, ağızdan ağıza büyümenin %40'ını sağladı.

Sorumlu Rol                   Zaman Çerçevesi                     Başarı Kriteri

CEO + Ürün + Marketing Lead   İlk 90 gün — uzun vadeli strateji   Community aktif üye sayısı ve ekosistem büyüme metrikleri aylık takip ediliyor`,
      },
    ],
  },
  {
    id: "olcekleme",
    num: "13",
    title: `ÖLÇEKLEME VE OPTİMİZASYON`,
    subtitle: `Ne zaman ve nasıl ölçeklendirilir`,
    subsections: [
      {
        id: "13-1",
        title: `13.1 Ne Zaman Ölçeklendirirsiniz?`,
        content: `TANIM & GENEL BAKIŞ

Ölçekleme kararının en yaygın hatası erken verilmesidir. PMF kanıtlanmadan, kanal verimliliği doğrulanmadan veya unit economics sağlıklı olmadan yapılan ölçekleme parayı yakar ve zamanı tüketir. Ölçekleme kararı üç yeşil ışığı aynı anda görmesi gerektirir: PMF var mı? Unit economics sağlıklı mı (LTV > 3x CAC)? Talep kanıtlandı mı (yeterli ve tekrarlanabilir müşteri)?

→ B2B                                                                                                                                                                                                                                      → B2C

B2B'de ölçekleme sinyalleri: pipeline predictability (her ay benzer sayıda lead gelip dönüşüyor mu?), sales döngüsü stabilitesi (tahmin edilebilir mi?), ve NRR > 100% (mevcut müşteriler büyüyor mu?). Bu üçü yeşilse ölçekleme zamanı.   B2C'de ölçekleme sinyalleri: D30 retention sektör ortalamasının üzerinde mi? CAC/LTV oranı sağlıklı mı? Paid kanalda ROAS tutarlı mı (en az 3 ay)? Bu üçü yeşilse ölçekleme zamanı.

Neden & Nasıl Yapılır?

Ölçekleme kararı verildiğinde önce en kanıtlanmış kanalı ölçeklendirin. Birden fazla kanalı aynı anda ölçeklendirmek odağı dağıtır ve hangi kanalın büyümeyi sürüklediğini anlamayı zorlaştırır. Tek kanalı ölçeklendirin, stabilitesini doğrulayın, sonra ikinci kanala geçin. Her ölçekleme adımında unit economics'i yakından izleyin — ölçekleme bazen CAC'ı artırır (kitle tükenmesi) veya LTV'yi düşürür (kalite düşüşü).

Ölçekleme Öncesi Kontrol Listesi

Kriter                  Ölçüm                       Yeşil Işık

PMF                     Sean Ellis testi skoru      %40+ çok üzülürdüm

Unit Economics          LTV:CAC oranı               >3:1

Talep Kanıtı            Aylık yeni müşteri trendi   3 ay üst üste artış

Kanal Verimliliği       CAC trendi ölçekle          Bütçe 2x büyüdüğünde CAC stabil

Ekip Hazırlığı          CS ve ops kapasitesi        Yeni müşteriyi karşılayabilir mi?

Action Steps

1.  Ölçekleme kararı öncesi beş kriteri değerlendir

2.  En yüksek performanslı tek kanalı seç ve bütçeyi kademeli artır: 1x → 2x → 4x

3.  Her kademede CAC ve dönüşüm oranı trendini izle

4.  CS ve operasyon kapasitesini artışa hazırla

5.  Ölçekleme döneminde haftalık unit economics takibi yap

Checklist

✔ 5 ölçekleme kriteri değerlendirildi mi?

✔ Kanal seçimi yapıldı mı?

✔ CS kapasitesi hazır mı?

✔ Unit economics haftalık izleniyor mu?

Kaçınılması Gereken Hatalar

✗ PMF kanıtlanmadan bütçeyi artırmak — problem çözülmemiş ürünü daha fazla insana ulaştırmak başarısızlığı hızlandırır

✗ Birden fazla kanalı aynı anda ölçeklendirmek — hangisinin işe yaradığı görülmez, CAC neden arttığı anlaşılmaz

✗ CAC'ı artıran ölçeklemeyi sürdürmek — kitle tükenmesi normaldir; CAC artıyorsa ölçeklemeyi durdurun, hedefi değiştirin

📌 B2B Örnek                                                                                                                                                                                                                                   📌 B2C Örnek

B2B SaaS şirketi LinkedIn organik'in CAC'ının paid LinkedIn'den %70 düşük olduğunu gördü. Founder içerik üretimini haftada 3'ten 7'ye çıkardı. CAC stabil kaldı, MQL sayısı 3 ayda 2x büyüdü. Paid bütçe artırmak yerine organik ölçeklendi.   B2C e-ticaret markası paid bütçeyi $10K'dan $50K'ya artırdı. İlk ay ROAS 3.8, ikinci ay 2.1, üçüncü ay 1.4. Kitle tükendi. Geri döndü, yeni kreatif ve yeni segment test etti, ROAS 3.2'ye döndü, sonra $30K'da stabilize oldu.

Sorumlu Rol                  Zaman Çerçevesi               Başarı Kriteri

CEO + Marketing Lead + CFO   Ölçekleme kararı noktasında   5 kriter yeşil, unit economics ölçekleme boyunca haftalık izleniyor`,
      },
      {
        id: "13-2",
        title: `13.2 Uluslararası Büyüme ve Yeni Pazar Girişi`,
        content: `TANIM & GENEL BAKIŞ

Yeni bir pazara girmek sıfırdan GTM yazmak demektir. Bir ülkede çalışan strateji başka ülkede çalışmayabilir: kültürel farklılıklar, dil, yerel rekabet, ödeme alışkanlıkları ve düzenleyici gereksinimler her yeni pazarı benzersiz kılar. En yaygın hata aynı stratejiyi kopyalayıp yapıştırmaktır.

→ B2B                                                                                                                                                                                                                                         → B2C

B2B uluslararası büyümede önce en yakın pazara girin — İngilizce, benzer iş kültürü, bilinen regülasyon. UK, Kanada, Avustralya genellikle ABD'den büyüyen SaaS'lar için ilk tercih olur. Ardından dile ve kültüre özgü adaptasyon gerekir.   B2C uluslararası büyümede lokalizasyon kritiktir: dil, ödeme yöntemleri, kültürel referanslar ve lokal sosyal medya dinamikleri. Türkiye'de çalışan influencer stratejisi Almanya'da hiç çalışmayabilir.

Yeni Pazar Değerlendirme Kriterleri

Kriter                  Soru                                    Veri Kaynağı

Pazar büyüklüğü         SAM yeterince büyük mü?                 Statista, sektör raporu

Erişilebilirlik         Oraya nasıl ulaşırsınız?                Mevcut kanal performansı, yerel araştırma

Rekabet                 Kazanılabilir bir boşluk var mı?        SimilarWeb, G2, yerel araştırma

Ödeme kapasitesi        Hedef müşteri ödeyebilir mi?            GDP per capita, benchmark fiyatlar

Regülasyon              GDPR gibi uyum gereksinimleri var mı?   Hukuk danışmanı

Action Steps

6.  Potansiyel yeni pazarları yukarıdaki 5 kriter üzerinden puanla

7.  En yüksek puanlı pazarda küçük ölçekli pilot başlat — tam commit öncesinde test et

8.  Lokalizasyon gereksinimlerini belirle: dil, ödeme, içerik

9.  Yerel bir ortakla veya danışmanla başla — yerel bilgi hız kazandırır

10. Pilot başarılıysa tam commitment: lokalize landing page, yerel ekip veya ajans

Checklist

✔ 5 kriter üzerinden pazar değerlendirmesi yapıldı mı?

✔ Pilot önce mi yoksa tam commitment mi?

✔ Lokalizasyon gereksinimleri belirlendi mi?

✔ Yerel partner veya danışman var mı?

Kaçınılması Gereken Hatalar

✗ Yerel adaptasyon yapmadan girmek — 'global product, global message' nadiren çalışır; lokal farklılıklar küçümsenir, büyük fırsatlar kaçırılır

✗ Çok fazla pazara aynı anda girmek — odak dağılır, hiçbirinde güçlü konum kurulamaz

📌 B2B Örnek                                                                                                                                                                                                                                                                                                                              📌 B2C Örnek

B2B SaaS şirketi UK'den Almanya'ya geçerken yalnızca website'yi çevirdi. Dönüşüm beklenenin çok altında kaldı. Araştırma gösterdi: Alman alıcılar fiyat sayfasında 'Preis auf Anfrage' (fiyat sorun) yerine açık fiyat istiyor, veri güvenliği konusunda çok daha hassas. Bu iki adaptasyon sonrası Almanya trafiği UK'yi 3 ayda geçti.   B2C moda markası İngiltere'den Türkiye'ye girerken yerel influencer ağı kurdu, Türk Lirası fiyatlandırması ekledi ve yerel ödeme yöntemi (ÖDEAL, kapıda ödeme) entegre etti. İlk ay 800 sipariş — direkt kopyala-yapıştır stratejiyle bu sayıya ulaşmak mümkün olmazdı.

Sorumlu Rol             Zaman Çerçevesi         Başarı Kriteri

CEO + Marketing Lead    Yeni pazar kararında    Pilot başarı kriterleri tanımlı, 90 gün sonunda full commit kararı`,
      },
    ],
  },
  {
    id: "yonetisim",
    num: "14",
    title: `YÖNETİŞİM VE BEST PRACTICES`,
    subtitle: `OKR sistemi, review döngüsü ve etik marketing`,
    subsections: [
      {
        id: "14-1",
        title: `14.1 Marketing OKR'ları ve Hedef Sistemi`,
        content: `TANIM & GENEL BAKIŞ

OKR (Objectives and Key Results), Google'ın 1999'dan beri kullandığı ve bugün dünyanın önde gelen şirketlerinin benimsediği hedef belirleme çerçevesidir. Bir Objective nereye gitmek istediğinizi tanımlar (ilham verici, kaliteli); Key Results ise oraya ulaşıp ulaşmadığınızı nasıl anlayacağınızı gösterir (ölçülebilir, tarihli). OKR'ların en büyük değeri hizalamadır: tüm ekip aynı hedeflere bakarak çalışır, öncelik çatışmaları azalır.

→ B2B                                                                                                                                                                                                                                   → B2C

B2B marketing OKR örnekleri: 'Q3 sonunda pipeline'da $2M qualified fırsat oluştur' (O: güçlü pipeline), 'Aylık MQL sayısını 150'ye çıkar' (KR1), 'Demo-to-closed-won oranını %25'e yükselt' (KR2), 'CAC'ı $800'ın altında tut' (KR3).   B2C marketing OKR örnekleri: 'Q3'te kullanıcı büyümesini hızlandır' (O), 'Aylık yeni kullanıcı edinimini 10.000'e çıkar' (KR1), 'D30 retention'ı %28'e yükselt' (KR2), 'NPS'i 45'in üzerinde tut' (KR3).

OKR Tasarım Prensipleri

-   Objective ilham verici ve kaliteli olmalı — 'daha fazla lead üret' zayıf, 'kategoride düşünce liderliği kur' güçlü

-   Key Results ölçülebilir ve tarihli olmalı — belirsiz KR değerlendirme yaratmaz

-   OKR sayısı az tutulmalı — çeyreklik 3–5 OKR maksimum; fazlası odağı dağıtır

-   Şirket OKR'larıyla hizalı olmalı — her marketing OKR bir şirket OKR'ına katkı sağlamalı

-   Germe hedefi olmalı — %100 başarı OKR'ın çok kolay yazıldığını gösterir; %70 başarı ideal

Action Steps

1.  Şirket çeyreklik OKR'larını incele ve marketing OKR'larını buna hizala

2.  Marketing OKR'larını ekiple birlikte yaz — sahiplik duygusu motivasyonu artırır

3.  Her KR için veri kaynağı ve ölçüm yöntemini belirle

4.  OKR'ları haftalık check-in ve aylık review'da güncel tut

5.  Çeyrek sonunda OKR retrospektifi yap: ne öğrendik?

Checklist

✔ Marketing OKR'ları şirket hedefleriyle hizalı mı?

✔ Her KR ölçülebilir ve tarihli mi?

✔ Haftalık check-in rutini aktif mi?

✔ Çeyreklik retrospektif planlandı mı?

Kaçınılması Gereken Hatalar

✗ OKR'ları 'yapılacaklar listesi' gibi yazmak — 'landing page yenile', 'e-posta şablonunu güncelle' KR değil, task'tır; KR sonuç odaklı olmalı

✗ OKR'ları yazmak ama haftalık takip yapmamak — OKR'lar sadece çeyrek başında doldurulan formlar değil; haftalık check-in olmadan anlamsızlaşır

✗ Marketing OKR'larını şirket hedeflerinden bağımsız yazmak — marketing büyüme için vardır; her OKR şirketin büyüme hedefine katkısını net göstermeli

📌 B2B Örnek                                                                                                                                                                                                                                                                                                             📌 B2C Örnek

B2B şirketi marketing OKR'larını CEO ile birlikte yazdı. Şirket hedefi: ARR'yi $1M'dan $3M'a çıkar. Marketing OKR: Q3'te 450 MQL üret (KR1), CAC'ı $900'ın altında tut (KR2), inbound pipeline'ın %60'ını oluştur (KR3). Her KR şirket hedefine direkt bağlıydı. Çeyrek sonunda %82 başarı — agresif ama ulaşılabilir.   B2C app çeyreklik OKR'larını 4 kişilik ekiple 2 saatlik workshopla yazdı. KR'lar şeffaf ve herkese açık. Haftalık 10 dakikalık check-in: her KR'nin son durumu güncellendi. Ekip motivasyonu ve odağı belirgin şekilde arttı — 'ne için çalışıyoruz' sorusu her hafta yanıtlandı.

Sorumlu Rol             Zaman Çerçevesi                 Başarı Kriteri

Marketing Lead + CEO    Çeyreklik — haftalık check-in   OKR'lar şirket hedefleriyle hizalı, haftalık takip aktif`,
      },
      {
        id: "14-2",
        title: `14.2 Marketing Review Döngüsü`,
        content: `TANIM & GENEL BAKIŞ

Marketing review döngüsü, öğrenmenin sistematik hale getirilmesidir. Tek seferlik başarılar ve başarısızlıklar değil, kurumsal hafıza oluşturur. Neyin işe yaradığını, neyin yaramadığını ve neden öyle olduğunu döngüsel olarak belgelemek, ekibin her çeyrekte bir öncekinden daha akıllı çalışmasını sağlar.

Review Döngüsü Yapısı

Dönem                   Süre                    İçerik ve Katılımcılar

Haftalık                30 dk                   Kanal performansı, aktif testler, engeller. Marketing ekibi.

Aylık                   60 dk                   Funnel analizi, OKR ilerlemesi, bütçe durumu. Marketing + CEO.

Çeyreklik               2–3 saat                OKR retrospektifi, strateji gözden geçirme, bütçe planı. Liderlik ekibi.

Yıllık                  Yarım gün               Tüm playbook gözden geçirme, pazar değişimi, büyük strateji kararları. CEO + liderlik.

Çeyreklik Retrospektif Soruları

-   Neyi iyi yaptık? — tekrarlanabilir başarıları belgele

-   Neyi kötü yaptık? — dürüst analiz, suçlama değil öğrenme

-   Pazar nasıl değişti? — rakipler, kanallar, müşteri davranışı

-   Gelecek çeyrek için en kritik 3 öğrenmemiz ne?

-   OKR'larımız gerçekten doğru şeyleri ölçüyor muydu?

Action Steps

6.  Haftalık, aylık ve çeyreklik review takvimini şimdiden ayarla

7.  Her review için standart template oluştur: geçen dönem, öğrenmeler, önümüzdeki dönem

8.  Çeyreklik retrospektifi belgeleyerek kurumsal hafızaya ekle

9.  Playbook'u yılda bir güncelle: pazar değiştikçe strateji de değişmeli

Checklist

✔ Haftalık ve aylık review aktif mi?

✔ Çeyreklik retrospektif planlandı mı?

✔ Öğrenmeler belgeleniyor mu?

✔ Playbook yıllık güncelleme takvimde var mı?

Sorumlu Rol             Zaman Çerçevesi                  Başarı Kriteri

Marketing Lead + CEO    Sürekli — her review döneminde   Review döngüsü aktif, öğrenmeler belgeleniyor, playbook yıllık güncelleniyor`,
      },
      {
        id: "14-3",
        title: `14.3 Marketing Etiği ve Sürdürülebilir Büyüme`,
        content: `TANIM & GENEL BAKIŞ

Sürdürülebilir büyüme, yalnızca bugünü değil yarını da düşünen bir marketing anlayışıdır. Kısa vadeli büyüme taktikleri — yanıltıcı reklam, agresif dark patterns, gizlilik ihlalleri — uzun vadede marka güvenini yıkar ve geri dönüşü zor hasarlara yol açar. Bunun ötesinde: düzenleyici riskler, müşteri güveni kaybı ve ekip moralinin bozulması sürdürülemez büyümenin maliyetleridir.

→ B2B                                                                                                                                                                                                           → B2C

B2B'de etik marketing: yanlış iddialar yapmamak, SLA taahhütlerini yerine getirmek, müşteri verisini korumak. İtibar hasar B2B'de çok daha hızlı yayılır — LinkedIn ve sektör toplulukları küçük dünyalardır.   B2C'de etik marketing: KVKK/GDPR uyumu, dark pattern kullanmamak, reklamlarda gerçekçi beklenti yönetimi. Sosyal medya çağında müşteri şikayetleri viral olabilir — güven kırılgandır.

Etik Marketing Prensipleri

-   Dürüstlük: Ürün vaatleriniz gerçeği yansıtmalı — 'en iyi', 'en hızlı' gibi kanıtlanamayan iddialardan kaçın

-   Şeffaflık: Fiyatlandırma, veri kullanımı ve sponsorlu içerik açıkça belirtilmeli

-   Gizlilik: Müşteri verisini yalnızca izin verilen amaçlarla kullan, KVKK/GDPR uyumunu sağla

-   Erişilebilirlik: İçerik ve kampanyalar ayrımcılık içermemeli, kapsayıcı olmalı

-   Uzun vadeli düşünce: Kısa vadeli kazanç için uzun vadeli güveni feda etme

Action Steps

10. Tüm reklam ve içeriklerin iddialarını doğrulayan bir süreç kur

11. KVKK/GDPR uyumunu hukuk danışmanıyla değerlendir

12. Dark pattern içerip içermediğini ürün ve checkout akışında kontrol et

13. Çalışanlar için 'etik soru işareti' kültürü oluştur: rahatsız edici bir taktik görürlerse ses çıkarabilsinler

Checklist

✔ Reklam iddiaları doğrulanabiliyor mu?

✔ KVKK/GDPR uyumu sağlandı mı?

✔ Dark pattern var mı kontrolü yapıldı mı?

✔ Ekip etik standartları biliyor mu?

Kaçınılması Gereken Hatalar

✗ Manipülatif dark pattern kullanmak — subscription iptali zorlaştırmak, fiyatı gizlemek, yanıltıcı 'son 1 ürün kaldı' göstermek kısa vadede dönüşüm artırır, uzun vadede güveni yıkar

✗ KVKK/GDPR'yi 'küçük print' sorunu saymak — veri ihlalleri ciddi finansal ve itibar cezaları doğurur

✗ Kanıtlanamayan üstünlük iddiası yazmak — 'dünyanın en iyi müşteri desteği' gibi iddialar hem yasal risk hem de güven kaybı yaratır

📌 B2B Örnek                                                                                                                                                                                                        📌 B2C Örnek

B2B şirketi web sitesindeki 'İptali kolaylaştır' dark pattern kaldırdı: tek tıkla iptal ekledi. Kısa vadede churn %4 arttı ama NPS 12 puan yükseldi ve word-of-mouth büyümesi %30 arttı. Uzun vadede net pozitif.   B2C abonelik servisi GDPR bildirimleri için karanlık tasarımdan vazgeçti: açık onay kutuları, net dil, kolay iptal. Önce %8 opt-out artışı gördü. 6 ay sonra aktif kullanıcıların kalitesi arttı, churn %15 düştü — gerçekten isteyen kişiler kaldı.

Sorumlu Rol                    Zaman Çerçevesi                  Başarı Kriteri

CEO + Marketing Lead + Hukuk   Sürekli — yıllık uyum denetimi   KVKK/GDPR uyumlu, etik standartlar belgelenmiş ve ekiple paylaşılmış`,
      },
      {
        id: "14-4",
        title: `14.4 Playbook'un Yaşatılması`,
        content: `TANIM & GENEL BAKIŞ

Bu playbook, bugün yazıldığı haliyle bile mükemmel değildir. Pazar değişecek, kanallar değişecek, ürün değişecek. Playbook'un değeri içeriğinden çok güncellenme ve kullanılma sıklığından gelir. Rafa kalkan bir playbook, yazılmamış bir playbook'tan daha tehlikelidir — çünkü insanlara eski haritayla yol göstermiş olursunuz.

Playbook Güncellem Takvimi

Yıllık (Ocak)        Tüm playbook gözden geçir. Pazar değişimlerini, yeni kanal dinamiklerini ve strateji güncellemelerini yansıt.

Çeyreklik            OKR retrospektifinde öğrenilen büyük dersler ilgili bölümlere eklenir.

Olay bazlı           Büyük piyasa değişimi, yeni rakip girişi veya önemli strateji kararı olduğunda ilgili bölüm güncellenir.

Sürekli              Araç ve metrik bilgileri güncel tutulur — eski araç isimleri veya kapanmış platformlar kaldırılır.

Playbook Kullanım Kültürü

Playbook'un gerçek değeri, her marketing kararı alınırken referans noktası olarak kullanılmasıdır. Yeni bir kanal test edilmeden önce Bölüm 7'ye bakılır. Lansman planlanırken Bölüm 6 açılır. Bütçe planlanırken Bölüm 11 incelenir. Bu kültürün oluşması için iki şart vardır: playbook'un erişilebilir olması (Notion veya benzeri araçta, aranabilir) ve liderliğin rolünü benimsemesi (CEO 'bu kararda playbook ne diyor?' sorusunu sorduğunda ekip de sormaya başlar).

Action Steps

14. Playbook'u Notion veya Google Docs'ta erişilebilir hale getir — herkesin bookmarkladığı URL

15. Yeni üye onboarding checklist'ine 'playbook'u oku' adımını ekle

16. Yıllık güncelleme takvimini şimdiden takvime al

17. Her lansman ve büyük karar öncesinde ilgili bölümün okunmasını şart haline getir

18. 6 ayda bir 'bu playbook hâlâ doğru mu?' sorusunu ekiple birlikte sor

Checklist

✔ Playbook erişilebilir ve aranabilir mi?

✔ Onboarding'e eklendi mi?

✔ Yıllık güncelleme takvimde var mı?

✔ Liderlik playbook'u aktif olarak referans alıyor mu?

++
| Son Not                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                  |
| Bu playbook Zeela'nın büyüme sistemidir. Ama sistem araçtır, insan değildir. Doğru kararları alan, öğrenen ve uyum sağlayan insanlar olmadan hiçbir strateji veya sistem işe yaramaz. Playbook'u kullanın, güncelleyin, geliştirin — ama her zaman insan muhakemesiyle besleyin. |
++`,
      },
    ],
  },
];