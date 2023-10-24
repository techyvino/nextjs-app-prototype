import { clsx } from 'clsx'
import { NextButton, button } from '@/components/Buttons/Button'
import Loading from './loading'
import PasswordIcon from '../assets/Icons/password.svg'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex gap-10">
                <NextButton className={clsx(button({ color: 'primary' }))}>
                    Primary Button
                </NextButton>
                <NextButton className={clsx(button({ color: 'danger' }))}>Delete Button</NextButton>
                <NextButton className={clsx(button({ color: 'success' }))}>
                    Success Button
                </NextButton>
                <NextButton className={clsx(button({ color: 'warning' }))}>
                    Warning Button
                </NextButton>
                <NextButton className={clsx(button({ color: 'info' }))}>Warning Button</NextButton>
                <NextButton className={clsx(button({ color: 'muted' }))}>Warning Button</NextButton>
            </div>

            <div className="input_container my-10">
                <input className="input_field" type="text" />
                <div className="icon">
                    <Image priority={true} src={PasswordIcon} alt="password" />
                </div>
            </div>

            <Loading />
        </main>
    )
}
