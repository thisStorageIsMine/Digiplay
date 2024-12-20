import { HeadingKurut, P, TextAnimationWrapper } from "../../components"
import Image from 'next/image'

export const Fourth = () => {
    return (
        <section className="min-h-screen flex flex-col gap-[225px] uppercase py-48 relative">
            <div className="grid grid-cols-1 gap-32 pl-[62px] pr-2">
                <div className="flex flex-col gap-[90px] justify-self-end pr-[200px]">
                    <TextAnimationWrapper offset={40}>
                        <HeadingKurut className="text-[130px]/[100%]" h="2">СЪЕМКА И МОНТАЖ</HeadingKurut>
                    </TextAnimationWrapper>

                    <TextAnimationWrapper staggerDelay={0.03} staggerMultiplier={0.05} >
                        <P text="md" w="400" className="text-center max-w-[870px]">
                            СОЗДАНИЕ КОНТЕНТА С ВАШЕГО МЕРОПРИЯТИЯ,
                            ЭКСПЕРТНЫЕ РИЛСЫ, СЪЕМКА ДЛЯ ЛИЧНОГО ИСПОЛЬЗОВАНИЯ.
                        </P>
                    </TextAnimationWrapper>

                </div>

                <div className="flex flex-col gap-16 justify-self-start pl-[100px]">
                    <TextAnimationWrapper offset={40}>
                        <HeadingKurut className="text-[130px]/[100%]" h="2">3D-ДИЗАЙН</HeadingKurut>
                    </TextAnimationWrapper>

                    <TextAnimationWrapper staggerDelay={0.03} staggerMultiplier={0.1} >
                        <P text="md" w="400" className="text-center max-w-[1533px]">
                            Создание и анимирование трёхмерных персонажей для мультфильмов и игр, создание объёмных рисунков предметов, которые существуют только в виде эскизов и документации, создание трёхмерных моделей, основанных на реальных или выдуманных объектах.
                        </P>
                    </TextAnimationWrapper>
                </div>

                <div className="flex flex-col gap-[90px] justify-self-end">
                    <TextAnimationWrapper offset={40}>
                        <HeadingKurut className="text-[130px]/[100%]" h="2">МОУШН-ДИЗАЙН</HeadingKurut>
                    </TextAnimationWrapper>
                    <TextAnimationWrapper staggerDelay={0.04} staggerMultiplier={0.04} >
                        <P text="md" w="400" className="text-center max-w-[1400px]">
                            направление дизайна, которое сочетает в себе элементы анимации, монтаж видео и другие методы для создания визуально захватывающих решений. Этот тип дизайна добавляет проектам динамичности и эмоциональной насыщенности, которых невозможно достичь с помощью статичных изображений или обычного текста.
                        </P>
                    </TextAnimationWrapper>
                </div>

            </div>

            <div className="border-t-[1px] border-b-[1px] border-white py-5 flex justify-center items-center ">
                <P w="300" text="md" className="max-w-[1300px] text-center">
                    СОЗДАНИЕ ДИЗАЙН МАКЕТА БАННЕРОВ, СЕРТИФИКАТОВ, ОФОРМЛЕНИЕ CОЦИАЛЬНЫХ СЕТЕЙ, КРЕАТИВОВ, чат-ботов И ДРУГОЕ - ПО ЗАПРОСУ.
                </P>
            </div>

            <Image className="absolute bottom-0 right-0" src="/services_fourth_marker.png" width={600} height={382} role="presentation" alt="" />
            <Image src="/services_fourth_scratch_first.png" alt="" role="presentation" width={946} height={437} />
        </ section>
    )
}