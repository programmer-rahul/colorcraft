import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import {cn} from '../../utils/tailwindUtils.tsx';

const buttonVariants = cva(
    'flex gap-2 justify-center items-center rounded-md',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-text hover:bg-primary/50',
                secondary: 'bg-secondary text-text hover:bg-secondary/50',
                destructive: 'bg-destructive'
            },
            modifier: {
                outline: 'bg-transparent border border-current shadow-[0_0_0_1px_currentColor]',
                plain: 'bg-transparent text-text',
            },
            size: {
                sm: 'h-8 px-[20px]',
                md: 'h-10 px-[25px]',
                lg: 'h-12 px-[30px]',
                xl: 'h-14 px-[35px]',
                xxl: 'h-16 px-[40px]'
            },
            btnType: {
                btn: '',
                icon: 'p-0 rounded-md'
            },
            disabled: {
                true: 'bg-surfaceDisabled text-textDisabled',
            },
            fullWidth: {
                true: 'w-full',
            },
            active: {
                true: "",
            }
        },
        compoundVariants: [
            {btnType: 'icon', size:"sm", className:"py-4 px-4 "},
            {btnType: 'icon', size:"md", className:"py-4 px-4 "},
            {btnType: 'icon', size:"lg", className:"py-4 px-4 "},
            {btnType: 'icon', size:"xl", className:"py-4 px-4 "},
            {
                modifier: 'outline',
                variant: 'primary',
                className: 'text-primary'
            },
            {
                modifier: 'outline',
                variant: 'secondary',
                className: 'text-secondary'
            },
            {
                modifier: 'plain',
                variant: 'primary',
                className: 'text-primary'
            },
            {
                active: true,
                variant: 'primary',
                className: 'bg-priPressed text-gray-200'
            }
        ],
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            btnType: 'btn'
        }
    }
);

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
        className,
        children,
        variant,
        modifier,
        size,
        btnType,
        disabled,
        fullWidth,
        active,
        ...props
    },
      ref
  ) => {
      return (
          <button
              className={cn(buttonVariants({
                  btnType,
                  disabled,
                  fullWidth,
                  variant,
                  modifier,
                  size,
                  active,
                  className
              }))}
              ref={ref}
              {...props}
          >
              {children}
          </button>
      );
  }
);

export { Button, buttonVariants };
