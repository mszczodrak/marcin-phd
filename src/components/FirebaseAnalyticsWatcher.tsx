'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

export function FirebaseAnalyticsWatcher() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + searchParams.toString();

        // Corrected line: removed the '()' after analytics
        analytics.then(fbAnalytics => {
            if (fbAnalytics) {
                logEvent(fbAnalytics, 'page_view', {
                    page_location: url,
                    page_path: pathname,
                });
            }
        });
    }, [pathname, searchParams]);

    return null;
}