import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IBurgerMenuContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    onBackdropClick?: () => void;
    closeOnBackdropClick?: boolean
}