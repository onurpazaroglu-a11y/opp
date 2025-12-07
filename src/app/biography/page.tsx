import { MadeWithDyad } from "@/components/made-with-dyad";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Award } from "lucide-react";

// Deneyim verileri (Yeni metne uygun olarak güncellendi)
const experience = [
  {
    title: "Serbest Çalışan / Görselleştirme ve Tasarım Uzmanı",
    company: "Freelance & Çeşitli Firmalar",
    duration: "2004 - Günümüz",
    description: "20 yılı aşkın süredir ürün tasarımı ve iç mimarlık alanlarında konut, ticari projeler, tanıtım ve fuar projeleri, yat projeleri, ürün patent çizimleri, ürün görselleştirmeleri, cephe ve araç giydirme işleri gibi çeşitli alanlarda hizmet verdim.",
    icon: Briefcase,
  },
  {
    title: "Ürün Tasarımcısı ve İç Mimar", // Başlık güncellendi
    company: "Çeşitli Firmalar",
    duration: "2006 - Günümüz", // Güncellendi
    description: "Rölöve, konsept tasarımı, ön çalışma / eskiz, imalat ve uygulama çizimleri, maliyet, şantiye kontrol, danışmanlık konularda istenirse herhangi birinde istenirse anahtar teslim olarak baştan sona proje hizmeti vermekteyim.", // Güncellendi
    icon: Briefcase,
  },
];

// Eğitim verileri (Yeni metne uygun olarak güncellendi)
const education = [
  {
    institution: "Mimar Sinan Güzel Sanatlar Üniversitesi",
    degree: "Endüstri Ürünleri Tasarımı Lisansı",
    duration: "Mezuniyet: 2012",
    icon: GraduationCap,
  },
];

export default function BiographyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extralight tracking-tight text-center mb-4 text-primary">
          Biografi
        </h1>
        <p className="text-center text-xl text-muted-foreground mb-12">
          Onur Pazaroğlu'nun kariyer yolculuğu, deneyimleri ve yetenekleri.
        </p>

        {/* Giriş ve Kişisel Bilgiler (Hakkımda) */}
        <section className="mb-12 p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 flex items-center text-foreground">
            <Award className="h-6 w-6 mr-3 text-primary" />
            Hakkımda
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              2012 Mimar Sinan Üniversitesi, Endüstri Ürünleri Tasarımı bölümü mezunuyum. 2004 yılından itibaren freelance, ve full time olarak çeşitli alanlarda hizmet veren firmalarda çalıştım. Ürün tasarımı ve iç Mimarlık alanlarında 20 yılı aşkın süredir çalışmalarım oldu.
            </p>
            <p>
              Bu çalışmalar arasında konut, ticari projeler, tanıtım ve fuar projeleri, yat projeleri, ürün patent çizimleri, ürün görselleştirmeleri, cephe ve araç giydirme işleri gibi alanlar yer aldı.
            </p>
            <p>
              Projelerinize istekleriniz doğrultusunda görselleştirme hizmeti sağlamaktayım. Proje başlangıcından önce süre, gereklilikler (ürün, detay bilgileri), ön görülen opsiyonlar gibi konuları göz önüne alarak bir proje takvimi hazırlayarak bu takvim üzerinden hareket etmekteyim. İstenilirse projeye bağlı imalat – üretim çizimleri de hazırlamaktayım.
            </p>
          </p>
        </section>

        <Separator className="my-12" />

        {/* Deneyim */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 flex items-center text-foreground">
            <Briefcase className="h-6 w-6 mr-3 text-primary" />
            İş Deneyimi
          </h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 relative">
                <div className="absolute -left-3 top-0 h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-md font-medium text-muted-foreground">{item.company} | {item.duration}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Eğitim */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 flex items-center text-foreground">
            <GraduationCap className="h-6 w-6 mr-3 text-primary" />
            Eğitim
          </h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="border-l-4 border-accent pl-6 relative">
                <div className="absolute -left-3 top-0 h-6 w-6 bg-accent rounded-full flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.institution}</h3>
                <p className="text-md font-medium text-muted-foreground">{item.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.duration}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <div className="mt-12">
        <MadeWithDyad />
      </div>
    </div>
  );
}