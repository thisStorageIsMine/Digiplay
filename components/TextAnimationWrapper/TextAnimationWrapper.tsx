'use client'
import { useRef, useEffect, ReactNode, cloneElement, isValidElement } from "react"
import { ITextAnimationWrapperProps } from "./TextAnimationWrapper.props"
import { motion, useInView, useAnimation } from "framer-motion"

const spanVariants = {
    initial: {
        y: '160%',
    },
    animate: (index: number) => ({
        y: '0%',

    })
}



// Получает массив слов. Оборачивает каждое слово в <div><span></span></div>. Каж
function wordsToSpan(words: string[], config: { delay: number, offset: number }) {
    const wrapperRef = useRef(null),
        isInView = useInView(wrapperRef, { once: true })

    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('animate')
        }
    }, [isInView])


    return (
        <>
            {words.map(word => {
                console.log(`Слово: ${word}, delay: ${config.delay * 0.05}`)
                return (<div
                    className="overflow-hidden p-[60px] -m-[60px]"
                    style={{ padding: config.offset + 'px', margin: -1 * config.offset + 'px' }}
                    ref={wrapperRef}
                >
                    <motion.span
                        className="block"
                        variants={spanVariants}
                        initial='initial'
                        animate={controls}
                        transition={{
                            duration: 0.85,
                            delay: config.delay++ * 0.1,
                            ease: [0.26, 0.48, 0.11, 0.97]
                        }}
                    >
                        {word}
                    </motion.span>
                </div>)
            }
            )}
        </>
    )
}

// Принимает компонент. Возвращает этот же компонент, но слова внутри будут обёрнуты в <div><span></span></div>
function getIsolatedWords(node: ReactNode, config = { delay: 0, offset: 40, }): ReactNode {


    if (isValidElement(node)) {
        const newChildren: ReactNode[] = []
        const children = node.props.children;

        if (children instanceof Array) {
            newChildren.push(children.map((child) => getIsolatedWords(child, config)))
        }

        if (typeof children === 'string' || typeof children === 'number') {
            const words = children.toString().trim().replace(/ +/g, ' ').split(' ');
            newChildren.push(wordsToSpan(words, config))
        }

        if (isValidElement(children)) {
            newChildren.push(getIsolatedWords(children, config));
        }

        return cloneElement(node, {}, newChildren.length > 0 ? newChildren : null)
    }

    if (typeof node === 'string' || typeof node === 'number') {
        const words = node.toString().trim().replace(/ +/g, ' ').split(' ');
        return wordsToSpan(words, config)
    }
}

const TextAnimationWrapper = ({ children, offset }: ITextAnimationWrapperProps): JSX.Element => {
    const wrappedChildren = getIsolatedWords(children, { delay: 0.05, offset: offset })

    return (
        <>
            {wrappedChildren}
        </>
    )
}

export { TextAnimationWrapper }