"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

// 1. Schema Tanımı
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Adınız en az 2 karakter olmalıdır.",
  }),
  email: z.string().email({
    message: "Geçerli bir e-posta adresi giriniz.",
  }),
  projectType: z.enum(["Exterior", "Interior", "Animation", "Other"], {
    required_error: "Lütfen bir proje tipi seçiniz.",
  }),
  projectArea: z.string().min(5, {
    message: "Proje alanı (örn: 100m², 5 katlı bina) belirtiniz.",
  }),
  projectTimeline: z.string().min(5, {
    message: "Proje teslim süresi beklentinizi belirtiniz.",
  }),
  notes: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof formSchema>;

// Proje Tipi Seçenekleri
const projectTypeOptions = [
  { value: "Exterior", label: "Dış Mekan Görselleştirme" },
  { value: "Interior", label: "İç Mekan Görselleştirme" },
  { value: "Animation", label: "Mimari Animasyon" },
  { value: "Other", label: "Diğer / Özel Proje" },
];

export function RequestQuoteForm() {
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: undefined,
      projectArea: "",
      projectTimeline: "",
      notes: "",
    },
  });

  // 2. Form Gönderim İşlevi (Mailto Oluşturma)
  function onSubmit(values: QuoteFormValues) {
    const subject = encodeURIComponent(`Yeni Teklif İsteği: ${values.projectType}`);
    
    const body = encodeURIComponent(
      `Merhaba Onur Bey/Hanım,\n\n` +
      `Aşağıdaki detaylarla ilgili teklif almak istiyorum:\n\n` +
      `Ad Soyad: ${values.name}\n` +
      `E-posta: ${values.email}\n` +
      `Proje Tipi: ${projectTypeOptions.find(opt => opt.value === values.projectType)?.label || values.projectType}\n` +
      `Proje Alanı/Kapsamı: ${values.projectArea}\n` +
      `Proje Teslim Süresi Beklentisi: ${values.projectTimeline}\n\n` +
      `Ek Notlar:\n${values.notes || 'Belirtilmedi.'}\n\n` +
      `İyi çalışmalar.`
    );

    // Mailto linki oluşturma
    const mailtoLink = `mailto:onur@example.com?subject=${subject}&body=${body}`;

    // Yeni pencerede mailto linkini aç
    window.open(mailtoLink, '_blank');

    toast.success("Teklif isteğiniz e-posta programınızda hazırlandı!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Ad Soyad */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adınız Soyadınız</FormLabel>
              <FormControl>
                <Input placeholder="Adınız" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* E-posta */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-posta Adresiniz</FormLabel>
              <FormControl>
                <Input placeholder="ornek@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Proje Tipi */}
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proje Tipi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Lütfen bir proje tipi seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypeOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Görselleştirme veya animasyon projenizin ana kategorisi.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Proje Alanı/Kapsamı */}
        <FormField
          control={form.control}
          name="projectArea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proje Alanı / Kapsamı</FormLabel>
              <FormControl>
                <Input placeholder="Örn: 150m² daire, 3 katlı villa, 5000m² ofis binası" {...field} />
              </FormControl>
              <FormDescription>
                Projenizin büyüklüğünü veya kapsamını belirtiniz.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Proje Teslim Süresi Beklentisi */}
        <FormField
          control={form.control}
          name="projectTimeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proje Teslim Süresi Beklentisi</FormLabel>
              <FormControl>
                <Input placeholder="Örn: 1 hafta, 1 ay, Acil" {...field} />
              </FormControl>
              <FormDescription>
                Görselleştirme veya animasyonun ne zaman teslim edilmesini bekliyorsunuz?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Notlar */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ek Notlar</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Projenizle ilgili ek detayları, referansları veya özel istekleri buraya yazabilirsiniz."
                  className="resize-y min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full">
          Teklif İste (E-posta Hazırla)
        </Button>
      </form>
    </Form>
  );
}