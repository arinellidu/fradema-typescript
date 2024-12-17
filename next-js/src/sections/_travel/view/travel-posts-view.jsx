'use client';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _tags, _mock, _filiaisPosts } from 'src/_mock';

import { filiaisPosts } from '../posts/filiais-posts';
import { Advertisement } from '../../advertisement';
import { PostSidebar } from '../../blog/post-sidebar';
import { filiaisNewsletter } from '../filiais-newsletter';
import { PostSearchMobile } from '../../blog/post-search-mobile';
import { filiaisFeaturedPosts } from '../posts/filiais-featured-posts';
import { filiaisTrendingTopics } from '../posts/filiais-trending-topics';

// ----------------------------------------------------------------------

const posts = _filiaisPosts.slice(0, 8);
const recentPosts = _filiaisPosts.slice(-4);
const featuredPosts = _filiaisPosts.slice(-5);

// ----------------------------------------------------------------------

export function filiaisPostsView() {
  return (
    <>
      <PostSearchMobile />

      <filiaisFeaturedPosts largePost={featuredPosts[0]} smallPosts={featuredPosts.slice(1, 5)} />

      <filiaisTrendingTopics />

      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
        <Grid disableEqualOverflow container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <filiaisPosts posts={posts} />
          </Grid>

          <Grid xs={12} md={4}>
            <PostSidebar
              tags={_tags}
              categories={[
                { label: 'Marketing', path: '' },
                { label: 'Community', path: '' },
                { label: 'Tutorials', path: '' },
                { label: 'Business', path: '' },
                { label: 'Management', path: '' },
              ]}
              recentPosts={recentPosts}
              slots={{
                bottomNode: (
                  <Advertisement
                    title="Advertisement"
                    description="Duis leo. Donec orci lectus, aliquam ut, faucibus non"
                    imageUrl={_mock.image.filiais(9)}
                    action={
                      <Button variant="contained" color="primary">
                        Go now
                      </Button>
                    }
                  />
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <filiaisNewsletter />
    </>
  );
}
