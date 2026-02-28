'use client'

import { useRef, useEffect } from 'react'

export function AmbientParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: { x: number; y: number; s: number; alpha: number; dx: number; dy: number }[] = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        const initParticles = () => {
            particles = []
            // Very subtle particle count
            const numberOfParticles = Math.floor(window.innerWidth / 30)
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    s: Math.random() * 1.5 + 0.5, // Size
                    alpha: Math.random() * 0.4 + 0.1, // Very subtle opacity
                    dx: (Math.random() - 0.5) * 0.2, // Slow horizontal drift
                    dy: (Math.random() - 0.5) * 0.2 - 0.1, // Slow upward drift
                })
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Warm dust particles
            ctx.fillStyle = 'rgba(212, 185, 142, 0.6)' // Soft gold/warm tone

            particles.forEach((p) => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2)
                ctx.globalAlpha = p.alpha
                ctx.fill()

                p.x += p.dx
                p.y += p.dy

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0
            })

            ctx.globalAlpha = 1
            animationFrameId = requestAnimationFrame(draw)
        }

        window.addEventListener('resize', resize)
        resize()
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
            style={{ mixBlendMode: 'screen' }}
            aria-hidden="true"
        />
    )
}
