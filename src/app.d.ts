// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	interface NavItem {
		id: string;
		label: string;
		href: string;
	}

	interface FAQItem {
		question: string;
		answer: string;
		expanded: boolean;
	}
}

export {};
