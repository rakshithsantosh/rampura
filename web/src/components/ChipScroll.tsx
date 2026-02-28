"use client"

import React, { useEffect, useRef, useState } from "react"
import { useScroll, motion, useTransform, useSpring } from "framer-motion"
import Link from "next/link"

const FRAME_COUNT = 210

export function ChipScroll() {
    const [images, setImages] = useState<HTMLImageElement[]>([])
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT)
            let loadedCount = 0

            const promises = []
            for (let i = 1; i <= FRAME_COUNT; i++) {
                promises.push(new Promise((resolve) => {
                    const img = new window.Image()
                    const frameNumber = i.toString().padStart(3, "0")
                    img.src = `/sequence/jaggery/ezgif-frame-${frameNumber}.jpg`

                    img.onload = () => {
                        loadedCount++
                        setProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
                        loadedImages[i - 1] = img
                        resolve(null)
                    }
                    img.onerror = () => {
                        loadedCount++
                        setProgress(Math.round((loadedCount / FRAME_COUNT) * 100))
                        loadedImages[i - 1] = img
                        resolve(null)
                    }
                }))
            }

            await Promise.all(promises)
            setImages(loadedImages)
            setLoading(false)
        }

        loadImages()
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">
                <div className="w-12 h-12 border-2 border-white/20 border-t-white/90 rounded-full animate-spin mb-8" />
                <h2 className="font-sans tracking-widest uppercase text-xs text-white/60 mb-2">Loading Sequence</h2>
                <p className="font-mono text-white/40 text-sm">{progress}%</p>
            </div>
        )
    }

    return <ScrollCanvas images={images} />
}

function ScrollCanvas({ images }: { images: HTMLImageElement[] }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    // Smooth out the scroll progress slightly to prevent jarring jumps between frames
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 90,
        mass: 0.1
    })

    useEffect(() => {
        if (images.length === 0 || !canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number

        const render = () => {
            const currentProgress = smoothProgress.get()
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.floor(currentProgress * FRAME_COUNT))
            )

            if (images[frameIndex]) {
                // Handle DPI scaling for sharp canvases on Retina displays
                const dpr = window.devicePixelRatio || 1
                canvas.width = window.innerWidth * dpr
                canvas.height = window.innerHeight * dpr

                // CSS display size
                canvas.style.width = `${window.innerWidth}px`
                canvas.style.height = `${window.innerHeight}px`

                ctx.scale(dpr, dpr)

                const img = images[frameIndex]

                // Calculate dimensions to 'cover' the screen like background-size: cover
                const hRatio = window.innerWidth / img.width
                const vRatio = window.innerHeight / img.height
                const ratio = Math.max(hRatio, vRatio)

                const centerShiftX = (window.innerWidth - img.width * ratio) / 2
                const centerShiftY = (window.innerHeight - img.height * ratio) / 2

                // Match the background color (pure dark mode #000)
                ctx.fillStyle = "#000000"
                ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

                ctx.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
                )
            }
        }

        const unsubscribe = smoothProgress.on("change", () => {
            animationFrameId = requestAnimationFrame(render)
        })

        // Initial render
        render()

        const handleResize = () => {
            render()
        }
        window.addEventListener("resize", handleResize)

        return () => {
            unsubscribe()
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [images, smoothProgress])

    // Text Opacities and Transforms
    const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 1, 0])
    const text1Y = useTransform(scrollYProgress, [0, 0.2], [0, -40])

    const text2Opacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0])
    const text2Y = useTransform(scrollYProgress, [0.25, 0.35], [40, 0])

    const text3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0])
    const text3Y = useTransform(scrollYProgress, [0.55, 0.65], [40, 0])

    const text4Opacity = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1])
    const text4Y = useTransform(scrollYProgress, [0.85, 0.95], [40, 0])

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-black" />

                {/* Subtle vignette/gradient over canvas to match image borders if not perfect black */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_60%,#000000_100%)] pointer-events-none z-10" />

                {/* Dynamic Text Layers */}
                <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto font-sans">

                    {/* 0% Scroll: Centered Title */}
                    <motion.div
                        style={{ opacity: text1Opacity, y: text1Y }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white/90 font-heading">
                            Routed in Rampura
                        </h1>
                    </motion.div>

                    {/* 30% Scroll: Left aligned */}
                    <motion.div
                        style={{ opacity: text2Opacity, y: text2Y }}
                        className="absolute inset-y-0 left-6 md:left-24 lg:left-32 flex flex-col justify-center max-w-lg"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white/90 mb-6 font-heading">
                            Built on Trust
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                            Before a single crystal of jaggery is formed, we ensure the earth is honored and the soil enriched naturally, season after season.
                        </p>
                    </motion.div>

                    {/* 60% Scroll: Right aligned */}
                    <motion.div
                        style={{ opacity: text3Opacity, y: text3Y }}
                        className="absolute inset-y-0 right-6 md:right-24 lg:right-32 flex flex-col justify-center max-w-lg md:text-right md:items-end items-start"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white/90 mb-6 font-heading">
                            Generational farming near the Cauvery.
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                            Cultivated on the sacred banks, our sugarcane absorbs the natural vitality of the river, processed slowly with traditional methods for unadulterated sweetness.
                        </p>
                    </motion.div>

                    {/* 90% Scroll: Centered CTA */}
                    <motion.div
                        style={{ opacity: text4Opacity, y: text4Y }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center pb-20 pointer-events-auto"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white/90 mb-12 font-heading">
                            Taste the Purest Form
                        </h2>
                        <Link
                            href="https://rampura-organics-india-pvt-ltd.myshopify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 bg-white text-black text-sm tracking-[0.15em] uppercase font-medium hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] rounded-sm"
                        >
                            Shop Organic Now
                        </Link>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
