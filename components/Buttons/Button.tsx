import { tv } from 'tailwind-variants'
import { Button, ButtonProps } from '@nextui-org/button'

export const button = tv({
    base: 'font-medium',
    variants: {
        color: {
            primary:
                'bg-gradient-to-b to-theme from-theme_secondary to-60% text-white hover:shadow-lg hover:shadow-theme_secondary',
            danger: 'bg-gradient-to-b to-error from-red-400 to-60% text-white hover:shadow-lg hover:shadow-danger-300',
            success:
                'bg-gradient-to-b to-success from-green-400 to-60% text-white hover:shadow-lg hover:shadow-green-300',
            warning:
                'bg-gradient-to-b to-amber-400 from-amber-300 to-60% text-white hover:shadow-lg hover:shadow-amber-200',
            info: 'bg-gradient-to-b to-info from-sky-300 to-60% text-white hover:shadow-lg hover:shadow-sky-300',
            muted: 'bg-gradient-to-b to-muted from-gray-200 to-60% text-white hover:shadow-lg hover:shadow-gray-300'
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
