import { PortableText as PortableTextReact, type PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
    block: {
        normal: ({ children }) => <p className="mb-4 text-slate-700 leading-relaxed text-lg">{children}</p>,
        h1: ({ children }) => <h1 className="text-4xl font-heading font-bold mb-6 text-[var(--color-neutral-dark)]">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-heading font-bold mb-5 mt-8 text-[var(--color-neutral-dark)]">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-heading font-bold mb-4 mt-6 text-[var(--color-neutral-dark)]">{children}</h3>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[var(--color-fresh-leaf)] pl-4 italic text-slate-600 my-6 bg-slate-50 p-4 rounded-r-lg">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-slate-700 font-medium">{children}</ol>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-[var(--color-neutral-dark)]">{children}</strong>,
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="text-[var(--color-primary-green)] underline underline-offset-4 hover:text-[var(--color-fresh-leaf)]"
                >
                    {children}
                </a>
            )
        },
    },
}

export function PortableText({ value }: { value: any }) {
    return <PortableTextReact value={value} components={components} />
}
