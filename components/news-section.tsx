import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const news = [
  {
    date: "17.12.2025",
    title: "В Год благоустройства энергетики делают освещение в населенных пунктах Могилевщины ещё комфортнее",
    description:
      "На 2025 год в РУП «Могилевэнерго» было запланирована замена 15037 единиц светильников уличного освещения на светодиодные светильники...",
    image: "/street-lighting-installation.jpg",
  },
  {
    date: "12.12.2025",
    title: "Мониторинг системы питания турбогенератора на Могилёвской ТЭЦ-2",
    description:
      "В филиале «МогилёвскаяТЭЦ-2» проведён комплексный мониторинг работы системы питания ротора турбогенератора ТГ-3...",
    image: "/industrial-turbine-generator.jpg",
  },
  {
    date: "10.12.2025",
    title: "Ни для кого не секрет, что работа энергетиков требует высокой ответственности!",
    description:
      "Здесь важно всё: технические знания, чёткие действия и культура безопасности. Именно поэтому в Учебном центре РУП «Могилевэнерго» создаётся учебная среда...",
    image: "/electrical-workers-training.jpg",
  },
  {
    date: "08.12.2025",
    title: "Оперативно-информационный комплекс СК-11 — современный помощник диспетчера",
    description:
      "В РУП «Могилевэнерго» внедряется современный оперативно-информационный комплекс СК-11, который станет надёжным инструментом для работы диспетчерских служб.",
    image: "/dispatch-control-room.jpg",
  },
]

export function NewsSection() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-[#003d7a]">Новости предприятия</h2>
      <div className="space-y-6">
        {news.map((item, idx) => (
          <Card key={idx} className="overflow-hidden">
            <div className="grid md:grid-cols-[300px_1fr]">
              <div className="relative h-48 md:h-auto">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div>
                <CardHeader>
                  <div className="mb-2 text-sm text-muted-foreground">{item.date}</div>
                  <h3 className="text-balance text-lg font-semibold leading-tight text-[#003d7a]">
                    <Link href="#" className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-pretty text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}

        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="ghost" size="sm">
            2
          </Button>
          <Button variant="ghost" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm">
            4
          </Button>
          <span className="px-2">...</span>
          <Button variant="ghost" size="sm">
            88
          </Button>
          <Button variant="ghost" size="sm">
            След.
          </Button>
        </div>
      </div>
    </div>
  )
}
