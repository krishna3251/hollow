import { motion } from "motion/react";

export const BleachIcons = {
    SubstituteBadge: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2L4 7v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5zm0 18c-3.14-1.26-6-4.98-6-9.1V8.3l6-3.7 6 3.7v2.6c0 4.12-2.86 7.84-6 9.1z" />
            <path d="M12 6.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
    ),
    GoteiSymbol: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 17.5L4.5 12 12 4.5 19.5 12 12 19.5z" />
            <rect x="11" y="7" width="2" height="10" />
            <rect x="7" y="11" width="10" height="2" />
        </svg>
    ),
    HollowMask: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm-2-9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            <path d="M12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z" />
        </svg>
    ),
    QuincyCross: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2z" />
            <path d="M7 7l10 10M17 7L7 17" stroke="currentColor" strokeWidth="0.5" />
        </svg>
    ),
};
