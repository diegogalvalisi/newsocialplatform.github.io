export const fetchApi = async (url: string, options: RequestInit = {}) => {
    const response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const postApi = async (url: string, data: any) => {
    return fetchApi(url, {
        method: 'POST',
        body: JSON.stringify(data),
    });
};