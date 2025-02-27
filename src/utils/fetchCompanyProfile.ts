async function fetchCompanyProfile() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    try {
        const res = await fetch(`${baseUrl}/api/text-content/save-company-profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error('Failed to fetch company profile:', res.statusText);
            return null;
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching company profile:', error);
        return null;
    }
}

export default fetchCompanyProfile;
