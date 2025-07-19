'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

export function FirebaseAnalyticsWatcher() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Safely get the search params string.
        const search = searchParams?.toString();
        
        // Construct the full URL, adding a '?' only if there are search params.
        const url = pathname + (search ? `?${search}` : '');

        analytics.then(fbAnalytics => {
            if (fbAnalytics) {
                logEvent(fbAnalytics, 'page_view', {
                    page_location: url,
                });
            }
        });
    }, [pathname, searchParams]);

    return null;
}