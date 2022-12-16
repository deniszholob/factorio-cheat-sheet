# GitHub Action References

- https://github.com/marketplace/actions/checkout
- https://github.com/marketplace/actions/setup-node-js-environment
- https://github.com/marketplace/actions/upload-a-build-artifact
- https://github.com/marketplace/actions/download-a-build-artifact
- https://github.com/marketplace/actions/deploy-to-github-pages
- https://github.com/marketplace/actions/cache
- https://github.com/marketplace/actions/code-coverage-report

# Docs

- [create clean gh-pages branch](https://jiafulow.github.io/blog/2020/07/09/create-gh-pages-branch-in-existing-repo/)

```sh
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
git checkout master
```

- [workflow token permissions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)
- [passing-data-between-jobs-in-a-workflowh](ttps://docs.github.com/en/actions/advanced-guides/storing-workflow-data-as-artifacts#passing-data-between-jobs-in-a-workflow)
- [dependant jobs](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)
- [Supported OS](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)
- [Cache](https://github.com/actions/cache#Skipping-steps-based-on-cache-hit)
