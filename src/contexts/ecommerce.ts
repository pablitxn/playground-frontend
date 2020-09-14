import { createContext } from "react";

export const CartContext = createContext({
	totalPrice: 0
});

export interface Breakpoints {
	xl: number;
	sm: number;
	md: number;
	lg: number;
	xs: number;
}

const breakpoints: Breakpoints = {
	xl: 0,
	sm: 0,
	md: 0,
	lg: 0,
	xs: 0
};

export const SkeletonListContext = createContext(breakpoints);

const multipleBreakpoints: Breakpoints[] = [
	{
		xl: 0,
		sm: 0,
		md: 0,
		lg: 0,
		xs: 0
	},
	{
		xl: 0,
		sm: 0,
		md: 0,
		lg: 0,
		xs: 0
	}
];
export const SingleProductContext = createContext(multipleBreakpoints);
