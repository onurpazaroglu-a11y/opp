import { MadeWithDyad } from "@/components/made-with-dyad";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Award, Zap } from "lucide-react";

// Deneyim verileri
const experience = [
  {
    title: "Kıdemli Mimari Görselleştirme Uzmanı",
    company: "XYZ Studio",
    duration: "2018 - Günümüz",
    description: "Büyük ölçekli konut ve ticari projeler için fotogerçekçi 3D görseller ve animasyonlar ürettim. Ekip liderliği ve proje yönetimi görevlerini üstlendim.",
    icon: Briefcase,
  },
  {
    title: "Serbest Çalışan 3D Sanatçısı",
    company: "Freelance",
    duration: "2016 - 2018",
    description: "Çeşitli mimarlık ofisleri ve inşaat firmaları için bağımsız görselleştirme hizmetleri sundum.",
    icon: Briefcase,
  },
];

// Eğitim verileri
const education = [
  {
    institution: "İstanbul Teknik Üniversitesi",
    degree: "Mimarlık Yüksek Lisansı",
    duration: "2014 - 2016",
    icon: GraduationCap,
  },
  {
    institution: "Mimar Sinan Güzel Sanatlar Üniversitesi",
    degree: "Mimarlık Lisansı",
    duration: "2010 - 2014",
    icon: GraduationCap,
  },
];

// Yetenekler
const skills = [
  "3ds Max & V-Ray/Corona Render",
  "Unreal Engine (Gerçek Zamanlı Görselleştirme)",
  "Adobe Photoshop & After Effects",
  "Revit & AutoCAD",
  "Proje Yönetimi",
  "Konsept Geliştirme",
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

        {/* Giriş ve Kişisel Bilgiler */}
        <section className="mb-12 p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 flex items-center text-foreground">
            <Award className="h-6 w-6 mr-3 text-primary" />
            Hakkımda
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mimari görselleştirme alanında 8 yılı aşkın deneyime sahip bir profesyonelim. Estetik anlayışımı teknik mükemmeliyetle birleştirerek, projelerinizi en etkileyici şekilde hayata geçiriyorum. Amacım, müşterilerimin vizyonunu aşan, duygusal bağ kuran ve satış başarısını artıran görseller üretmektir.
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

        <Separator className="my-12" />

        {/* Yetenekler */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 flex items-center text-foreground">
            <Zap className="h-6 w-6 mr-3 text-primary" />
            Temel Yetenekler
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-sm">
                {skill}
              </span>
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