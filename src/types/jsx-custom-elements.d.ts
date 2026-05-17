// Custom element type augmentation for the Anubis widgets so React
// 19 + TS strict mode stops barking about unknown HTML tags.
import 'react'

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'anubis-reviews': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & {
                    'supabase-url'?: string
                    'supabase-key'?: string
                    lang?: string
                    limit?: string
                },
                HTMLElement
            >
            'anubis-download': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & { repo?: string; lang?: string },
                HTMLElement
            >
            'anubis-auth':     React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & Record<string, unknown>, HTMLElement>
            'anubis-cabinet':  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & Record<string, unknown>, HTMLElement>
            'anubis-payments': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & Record<string, unknown>, HTMLElement>
        }
    }
}
