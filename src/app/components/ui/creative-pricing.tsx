import { Button } from "./button";
import { Check, Pencil, Star, Sparkles } from "lucide-react";
import { cn } from "./utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    tag = "Membership",
    title = "Join the Ranks",
    description = "Ascend through the hierarchy of Hollows.",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-24 relative z-10">
            <div className="text-center space-y-6 mb-16">
                <div className="font-handwritten text-xl text-white rotate-[-1deg] tracking-widest uppercase">
                    {tag}
                </div>
                <div className="relative">
                    <h2 className="text-4xl md:text-5xl font-bold font-handwritten text-white rotate-[-1deg] uppercase tracking-tighter">
                        {title}
                        <div className="absolute -right-12 top-0 text-white rotate-12 opacity-50">
                            ✦
                        </div>
                        <div className="absolute -left-8 bottom-0 text-white -rotate-12 opacity-50">
                            ✧
                        </div>
                    </h2>
                    <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-1 bg-white/20 
                        rotate-[-1deg] rounded-full blur-[2px]"
                    />
                </div>
                <p className="font-handwritten text-xl text-zinc-400 rotate-[-1deg]">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-2deg]"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-black",
                                "border-2 border-white",
                                "rounded-lg shadow-[4px_4px_0px_0px] shadow-white",
                                "transition-all duration-300",
                                "group-hover:shadow-[8px_8px_0px_0px]",
                                "group-hover:translate-x-[-4px]",
                                "group-hover:translate-y-[-4px]"
                            )}
                        />

                        <div className="relative p-6">
                            {tier.popular && (
                                <div
                                    className="absolute -top-2 -right-2 bg-white text-black 
                                    font-handwritten px-3 py-1 rounded-full rotate-12 text-sm border-2 border-black font-bold uppercase tracking-wider"
                                >
                                    Popular!
                                </div>
                            )}

                            <div className="mb-6">
                                <div
                                    className={cn(
                                        "w-12 h-12 rounded-full mb-4",
                                        "flex items-center justify-center",
                                        "border-2 border-white text-white"
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="font-handwritten text-2xl text-white uppercase tracking-wider font-bold">
                                    {tier.name}
                                </h3>
                                <p className="font-handwritten text-zinc-400">
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6 font-handwritten">
                                <span className="text-4xl font-bold text-white">
                                    ${tier.price}
                                </span>
                                <span className="text-zinc-400">
                                    /mo
                                </span>
                            </div>

                            <div className="space-y-3 mb-6">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center"
                                        >
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="font-handwritten text-lg text-white">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-12 font-handwritten text-lg relative uppercase tracking-widest font-bold",
                                    "border-2 border-white",
                                    "transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px] shadow-white",
                                    "hover:shadow-[6px_6px_0px_0px]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? [
                                            "bg-white text-black",
                                            "hover:bg-zinc-200",
                                            "active:bg-white",
                                        ]
                                        : [
                                            "bg-black",
                                            "text-white",
                                            "hover:bg-zinc-900",
                                            "active:bg-black",
                                        ]
                                )}
                            >
                                Join Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-20 text-6xl rotate-12 opacity-10 blur-sm text-white">
                    ☠️
                </div>
                <div className="absolute bottom-40 right-20 text-6xl -rotate-12 opacity-10 blur-sm text-white">
                    ⚔️
                </div>
            </div>
        </div>
    );
}

const sampleTiers: PricingTier[] = [
    {
        name: "Hollow",
        icon: <Pencil className="w-6 h-6" />,
        price: 0,
        description: "Begin your journey in Hueco Mundo",
        color: "white",
        features: [
            "Access to General Chat",
            "Basic Role Assignment",
            "Community Events",
            "Public VC Access",
        ],
    },
    {
        name: "Arrancar",
        icon: <Star className="w-6 h-6" />,
        price: 5,
        description: "Evolve and gain new powers",
        color: "white",
        features: [
            "Priority Support",
            "Exclusive Arrancar Role",
            "Image Posting Rights",
            "Stream Access",
        ],
        popular: true,
    },
    {
        name: "Espada",
        icon: <Sparkles className="w-6 h-6" />,
        price: 15,
        description: "Join the elite 10",
        color: "white",
        features: [
            "Private Espada Channel",
            "Custom Color Role",
            "Moderation Privileges",
            "Direct Access to Aizen",
        ],
    },
];

function CreativePricingDemo() {
    return <CreativePricing tiers={sampleTiers} />
}

export { CreativePricingDemo, CreativePricing, type PricingTier }
