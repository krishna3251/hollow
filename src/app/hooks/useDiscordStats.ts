import { useState, useEffect } from 'react';

export interface DiscordMember {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
    game?: { name: string };
}

export interface DiscordChannel {
    id: string;
    name: string;
    position: number;
}

export interface DiscordStats {
    online: number | null;
    name: string | null;
    channels: DiscordChannel[];
    members: DiscordMember[];
}

export function useDiscordStats() {
    const [stats, setStats] = useState<DiscordStats>({ online: null, name: null, channels: [], members: [] });

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://discord.com/api/guilds/1273151341241307187/widget.json');
                const text = await res.text().catch(() => '');
                if (!text || text.trimStart()[0] !== '{') return;
                const data = JSON.parse(text);
                setStats({
                    online: data.presence_count,
                    name: data.name,
                    channels: data.channels || [],
                    members: data.members || []
                });
            } catch {
                // widget disabled or unavailable
            }
        })();
    }, []);

    return stats;
}
