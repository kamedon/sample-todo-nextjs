import Layout from '../components/Layout'
import TodoPage from "../src/components/page/TodoPage";
import {NextPage} from "next";

const IndexPage: NextPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <TodoPage/>
    </Layout>
)

export default IndexPage
