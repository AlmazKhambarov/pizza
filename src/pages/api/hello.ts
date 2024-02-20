import {Product} from "@/interfaces";
import axios from "axios";
import {GetServerSideProps} from "next";

export const getServerSideProps = (async () => {
    // Fetch data from external API
    const data: Product[] = (await axios.get('http://localhost:3000/products')).data
    // Pass data to the page via props
    return { props: { data } }
}) satisfies GetServerSideProps<{ data: Product[] }>