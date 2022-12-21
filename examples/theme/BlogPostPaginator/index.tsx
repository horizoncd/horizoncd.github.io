import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import type BlogPostPaginatorType from '@theme/BlogPostPaginator';
import type {WrapperProps} from '@docusaurus/types';
import CommentsBox from '@site/src/components/CommentsBox';

type Props = WrapperProps<typeof BlogPostPaginatorType>;

export default function BlogPostPaginatorWrapper(props: Props): JSX.Element {
  return (
    <>
      <BlogPostPaginator {...props} />
      <div style={{marginTop: "10px"}} />
      <CommentsBox />
    </>
  );
}
