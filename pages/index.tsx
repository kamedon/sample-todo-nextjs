import Layout from '../src/components/template/Layout';
import TodosPage from '../src/components/page/todos/TodosPage';
import {NextPage} from 'next';

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <TodosPage />
  </Layout>
);

export default IndexPage;
