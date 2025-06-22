import ghpages from 'gh-pages';

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/JisunHan/jisunhan.github.io.git',
    dotfiles: true,
    verbose: true,
    message: 'Deploy via gh-pages',
  },
  function (err) {
    if (err) {
      console.error('🚨 Deployment failed:', err);
    } else {
      console.log('✅ Deployed successfully!');
    }
  },
);
