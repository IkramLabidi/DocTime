import { Header } from "../components/blog/header"

export function Blog() {
    const serachBlog= async (title: string)=>{
        const blogs= await fetch(`https://newsapi.org//v2/top-headlines?q=${title}&from=2026-03-27&sortBy=popularity&apiKey=00b997b36236440797e4a174a4587444`);
        const data = await blogs.json();

        if (data.error){
            throw new Error(data.error.message);
        }
        return data;
    }
    return (
        <div>
        <Header />
        </div>
    );
}