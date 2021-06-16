export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c9e27d61508bc9442f65af',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-courses-studio',
                  apiId: '1ed728b9-b27b-4f2a-8735-2623a31b609c'
                },
                {
                  buildHookId: '60c9e27d61508bc9442f65b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-courses',
                  apiId: '9ecc1bb0-b42f-4eb4-9cf3-6748edc98806'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/sanity-nextjs-courses',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-courses.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
