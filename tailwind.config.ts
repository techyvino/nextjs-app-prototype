import type { Config } from 'tailwindcss'
import { withTV } from 'tailwind-variants/transformer'
import { nextui } from '@nextui-org/theme'

const config: Config = withTV({
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                theme: '#ff6702',
                primary: '#ff6702',
                theme_secondary: '#F7BD97',
                muted: '#d4d4d8',
                success: '#22c55e',
                error: '#dc3545',
                warning: '#ffc107',
                info: '#38bdf8',
                light: '#f8f9fa',
                dark: '#2d2d2d'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: [nextui()]
})
export default config
