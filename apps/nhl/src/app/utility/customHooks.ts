import { useState } from 'react';

function useError() {
    const [error, setError] = useState<any>(undefined);

    if (error) {
        throw error;
    }

    return [error, setError];
}

export {
    useError
}