"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Телефон аварийной диспетчерской службы",
    number: "144",
    icon: Phone,
  },
  {
    title: "Могилевский сервисно-расчётный центр",
    subtitle: "РУП Могилевэнерго",
    phone: "(8-0222) 72-52-52",
    address: "г. Могилев, ул. Гагарина, 2",
  },
  {
    title: "Бобруйский сервисно-расчётный центр",
    subtitle: "РУП Могилевэнерго",
    phone: "(8-0225) 78-82-50, 78-82-51",
    address: "г. Бобруйск, ул. Минская, 96",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % slides.length)
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)

  return (
    <div className="relative bg-gradient-to-r from-[#003d7a] to-[#005a9e] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="min-h-[200px]">
            {slides[current].number ? (
              <div>
                <h2 className="mb-4 text-balance text-2xl font-bold">{slides[current].title}</h2>
                <div className="text-6xl font-bold">{slides[current].number}</div>
              </div>
            ) : (
              <div>
                <h2 className="mb-2 text-balance text-2xl font-bold">{slides[current].title}</h2>
                <p className="mb-4 text-lg font-semibold">{slides[current].subtitle}</p>
                <p className="mb-2 text-xl font-bold">{slides[current].phone}</p>
                <p className="text-sm">{slides[current].address}</p>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" onClick={prev} className="text-white hover:bg-white/20">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${idx === current ? "w-8 bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
            <Button variant="ghost" size="icon" onClick={next} className="text-white hover:bg-white/20">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
