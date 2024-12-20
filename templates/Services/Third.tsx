import { HeadingKurut, P, TextAnimationWrapper, RevealAnimation } from "../../components"
import Image from "next/image"


export const Third = () => {

    return (
        <section className="grid grid-cols-1 gap-2 relative min-h-screen bg-service-scretch px-[130px] py-[70px] bg-no-repeat bg-center bg-cover w-full h-full">
            <div className="justify-self-start flex flex-col gap-11">
                <TextAnimationWrapper offset={40}>
                    <HeadingKurut h="2" className="text-[130px]/[100%]">Тамлинк</HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.04} staggerMultiplier={0.06}>
                    <P w="300" text="md" className="text-center max-w-[908px]">
                        МОБИЛЬНАЯ ВЕРСИЯ ОНЛАЙН-ВИЗИТКИ, <br />
                        ПРАЙСА, ПОРТФОЛИО, ИНТЕРНЕТ-МАГАЗИНА <br />
                        С ПРОСТЫМ ФУНКЦИОНАЛОМ.
                    </P>
                </TextAnimationWrapper>
            </div>
            <div className="justify-self-end flex flex-col gap-11">
                <TextAnimationWrapper offset={40}>
                    <HeadingKurut h="2" className="text-[130px]/[100%]">Презентация</HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.04} staggerMultiplier={0.09}>
                    <P w="300" text="md" className="max-w-[908px] text-center">
                        КРАСИВО И ГРАМОТНО СДЕЛАННАЯ ПРЕЗЕНТАЦИЯ <br />
                        В ЕДИННОЙ СТИЛИСТИКЕ, ВИЗУАЛЬНЫЙ <br />
                        ПОМОЩНИК, КОТОРЫЙ ПОДАЕТ ИНФОРМАЦИЮ <br />
                        БОЛЕЕ ДОХОДЧИВО И ПОВЫШАЕТ ЛОЯЛЬНОСТЬ.
                    </P>
                </TextAnimationWrapper>
            </div>
            <div className="justify-self-start flex flex-col gap-11">
                <TextAnimationWrapper offset={40}>
                    <HeadingKurut h="2" className="text-[130px]/[100%] ml-20">СММ</HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.04} staggerMultiplier={0.03}>
                    <P w="300" text="md" className="max-w-[908px] text-center">
                        СОЗДАДИМ ИДЕАЛЬНЫЙ ВИЗУАЛ ВАШИХ СОЦИАЛЬНЫХ СЕТЕЙ, <br />
                        ДОПОЛНИМ ПРОДАЮЩИМИ ТЕКСТАМИ И ПРИВЛЕЧЕМ НОВЫЙ <br />
                        ПОТОК АУДИТОРИИ И ПОТЕНЦИАЛЬНЫХ КЛИЕНТОВ.
                    </P>
                </TextAnimationWrapper>
            </div>

            <div className="absolute -top-16 left-0 w-1/2 h-[248px]">
                <Image src="/services_third_lip.png" alt="" role="presentation" fill={true} />
            </div>

            <Image className="absolute -bottom-3 -right-16" src="/services_third_marker.png" alt="" role="presentation" width={531} height={271} />
        </section >
    )
}