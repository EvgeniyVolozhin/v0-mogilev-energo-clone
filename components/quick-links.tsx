import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function QuickLinks() {
  return (
    <aside className="space-y-6">
      <Card className="bg-[#d32f2f] text-white">
        <CardHeader>
          <CardTitle className="text-lg">График отключений электроэнергии</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-white text-[#d32f2f] hover:bg-gray-100">Посмотреть график</Button>
        </CardContent>
      </Card>

      <Card className="bg-[#ff9800] text-white">
        <CardHeader>
          <CardTitle className="text-lg">График отключений теплоснабжения</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-white text-[#ff9800] hover:bg-gray-100">Посмотреть график</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-[#003d7a]">Тарифы для населения</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full bg-transparent">
            Узнать тарифы
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-[#003d7a]">Тарифы для юридических лиц</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full bg-transparent">
            Узнать тарифы
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#4caf50] text-white">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">2025</CardTitle>
          <p className="text-center text-sm">Год благоустройства</p>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-[#003d7a]">Полезные ссылки</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link href="#" className="block text-sm text-muted-foreground hover:text-[#003d7a]">
            Президент Республики Беларусь
          </Link>
          <Link href="#" className="block text-sm text-muted-foreground hover:text-[#003d7a]">
            Правительство Республики Беларусь
          </Link>
          <Link href="#" className="block text-sm text-muted-foreground hover:text-[#003d7a]">
            Национальный правовой портал
          </Link>
          <Link href="#" className="block text-sm text-muted-foreground hover:text-[#003d7a]">
            Белорусская энергосистема
          </Link>
          <Link href="#" className="block text-sm text-muted-foreground hover:text-[#003d7a]">
            Министерство энергетики
          </Link>
        </CardContent>
      </Card>
    </aside>
  )
}
