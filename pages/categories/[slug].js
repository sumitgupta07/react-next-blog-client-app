import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/Layout';
import {singleCategory} from 'actions/category';
import {API, DOMAIN, APP_NAME, FB_APP_ID} from 'config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from 'components/blog/Card';

const Category = ({category, blogs, query}) => {
  const head = () => (
    <Head>
      <title>
        {category.name} | {process.env.NEXT_PUBLIC_APP_NAME}
      </title>
      <meta name="description" content={`Best programming tutorials on ${category.name}`} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${category.name}| ${process.env.NEXT_PUBLIC_APP_NAME}`} />
      <meta property="og:description" content={`Best programming tutorials on ${category.name}`} />
      <meta property="og:type" content="webiste" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/categories/${query.slug}`}
      />
      <meta property="og:site_name" content={`${process.env.NEXT_PUBLIC_APP_NAME}`} />

      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${process.env.NEXT_PUBLIC_FB_APP_ID}`} />
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid text-center">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold">{category.name}</h1>
                {blogs.map((b, i) => (
                  <div key={i}>
                    <Card blog={b} />
                    <hr />
                  </div>
                ))}
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Category.getInitialProps = ({query}) => {
  return singleCategory(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {category: data.category, blogs: data.blogs, query};
    }
  });
};

export default Category;
