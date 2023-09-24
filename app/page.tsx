import { NextButton, button } from '@/components/Buttons/Button'
import { clsx } from 'clsx'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NextButton className={clsx(button({ color: 'primary' }))} color="primary">
                Shadow Button
            </NextButton>
        </main>
    )
}
