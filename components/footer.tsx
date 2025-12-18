import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-[#f5f5f5] py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold text-[#003d7a]">Контакты</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Адрес:</strong> 212030, г. Могилев, ул. Бонч-Бруевича, 3
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>E-mail:</strong> energo@mogilev.energo.by
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#003d7a]">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#003d7a]">
                  О предприятии
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#003d7a]">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#003d7a]">
                  Закупки товаров
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#003d7a]">
                  Политика защиты персональных данных
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#003d7a]">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#003d7a]">
                  Личный кабинет
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#003d7a]">
                  Электронные обращения
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#003d7a]">
                  Технологическое присоединение
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#003d7a]">
                  Карта сайта
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">© РУП «Могилевэнерго» 2025</div>
      </div>
    </footer>
  )
}
