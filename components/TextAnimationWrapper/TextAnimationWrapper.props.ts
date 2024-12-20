import { ReactNode } from "react";

export interface ITextAnimationWrapperProps {
    children: ReactNode;
    offset?: number;
    staggerDelay?: number;
    staggerMultiplier?: number;
    delay?: number;
}