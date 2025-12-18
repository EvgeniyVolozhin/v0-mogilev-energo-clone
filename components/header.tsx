import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="bg-[#003d7a] text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <Link href="/accessibility" className="hover:underline">
              Версия для слабовидящих
            </Link>
            <Link href="/map" className="hover:underline">
              Карта отделений
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:opacity-80">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-[#003d7a]" />
            <div>
              <h1 className="text-2xl font-bold text-[#003d7a]">РУП</h1>
              <p className="text-xl font-semibold text-[#003d7a]">Могилевэнерго</p>
              <p className="text-sm text-muted-foreground">Вам - наша энергия!</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-[#d32f2f]">Телефоны</p>
              <p className="text-sm font-semibold text-[#d32f2f]">аварийных служб</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-[#003d7a]">Телефоны сервисно-</p>
              <p className="text-sm font-semibold text-[#003d7a]">расчетных центров</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="border-t bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center gap-6 py-3 text-sm">
            <li>
              <Link href="/" className="font-medium text-[#003d7a] hover:text-[#005a9e]">
                Главная страница
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-foreground hover:text-[#003d7a]">
                О предприятии
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-foreground hover:text-[#003d7a]">
                Одно окно
              </Link>
            </li>
            <li>
              <Link href="/info" className="text-foreground hover:text-[#003d7a]">
                Информация потребителю
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-foreground hover:text-[#003d7a]">
                Новости предприятия
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-foreground hover:text-[#003d7a]">
                Электронные услуги
              </Link>
            </li>
            <li>
              <Link href="/social" className="text-foreground hover:text-[#003d7a]">
                Социальная реклама
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="text-foreground hover:text-[#003d7a]">
                Контакты
              </Link>
            </li>
            <li>
              <Button variant="default" className="bg-[#d32f2f] hover:bg-[#b71c1c]">
                Личный кабинет
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
