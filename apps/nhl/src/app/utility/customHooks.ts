import { useState, useEffect, useContext } from 'react';

function useError() {
    const [error, setError] = useState<any>(undefined);

    if (error) {
        throw error;
    }

    return [error, setError];
}

function useContextHelper<T>(context: React.Context<T>) {
    return useContext(context);
  }

function useFetch<T>(url: string): [T, boolean] {
    const [error, setError] = useError();
    const [data, setTeams] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(url).then(function resolved(result) {
            return result.json();
        })
        .then(function data(data: any) {
            setTeams(data);
        })
        .catch(function rejected(error: any) {
            console.log(error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })

        setLoading(true);
    }, [url, setError]);

    return [data, loading]
}

export {
    useError,
    useFetch,
    useContextHelper
}

