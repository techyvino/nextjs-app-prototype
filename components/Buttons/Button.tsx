import { tv } from 'tailwind-variants'
import { Button, ButtonProps } from '@nextui-org/button'

export const button = tv({
    base: 'font-medium',
    variants: {
        color: {
            primary: 'bg-gradient-to-b to-theme from-theme_secondary to-60% text-white',
            danger: 'bg-error text-white hover:shadow-lg hover:shadow-danger-200'
        },
        size: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'px-4 py-3 text-lg'
        }
    },
    compoundVariants: [
        {
            size: ['sm', 'md'],
            class: 'px-3 py-1'
        }
    ],
    defaultVariants: {
        size: 'md'
    }
})

export const NextButton = ({ children, ...rest }: ButtonProps) => (
    <Button {...rest}>{children}</Button>
)
