import { useEffect, useState } from 'react';

function useFetch(url) {
    const [cList, setCList] = useState(null);

    const [error, setError] = useState(null);

    useEffect(() => {
        // const controller = new AbortController();
        // const signal = controller.signal;
        fetch(url/*, { signal }*/)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(bate => setCList(bate))
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            })
        // return () => {
        //     console.log("Aborting fetch for url", url);
        //     controller.abort();
        // }
    }, []);

    return [cList, setCList, error];
}

export default useFetch;

