import React, {useEffect} from 'react';
import {log} from "util";


function Index() {



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/products');
                const jsonData = await res.json();
                console.log(jsonData)
            } catch (error) {
                console.error('Error fetching data:');
            }
        };

        fetchData();
    }, []);

    return (
        <div>foo</div>
    );
}

export default Index;