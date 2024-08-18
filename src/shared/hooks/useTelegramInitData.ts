import { useEffect, useState } from "react";
import { TelegramWebApps } from "telegram-webapps-types-new";
import { mockTelegramEnv, parseInitData } from "@telegram-apps/sdk-react";


const useTelegramInitData = () => {
    const [data, setData] = useState<TelegramWebApps.WebAppInitData>();

    useEffect(() => {
        const firstLayerInitData = Object.fromEntries(
            window.Telegram.WebApp.initData
            ? new URLSearchParams(window.Telegram.WebApp.initData)
            : new URLSearchParams([  // mock
                ['user', JSON.stringify({
                  id: 99281932,
                  first_name: 'Andrew',
                  last_name: 'Rogue',
                  username: 'rogue',
                  language_code: 'en',
                  is_premium: true,
                  allows_write_to_pm: true,
                })],
                ['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
                ['auth_date', '1716922846'],
                ['start_param', 'debug'],
                ['chat_type', 'sender'],
                ['chat_instance', '8428209589180549439'],
            ])
        );

        const initData: Record<string, string> = {};

        for (const key in firstLayerInitData) {
            try {
                initData[key] = JSON.parse(firstLayerInitData[key]);
            } catch {
                initData[key] = firstLayerInitData[key];
            }
        }

        setData(initData);
    }, []);

    return data;
};

export default useTelegramInitData;