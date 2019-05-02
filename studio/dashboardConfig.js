export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5ccaec184871d2f4abac0bb4',
                  name: 'Content Studio',
                  siteId: 'd248cf66-ab40-42dd-bb8b-b5eb86085d75'
                },
                {
                  buildHookId: '5ccaec56464bf545411c0523',
                  name: 'Portfolio Website',
                  siteId: 'bf003531-c54a-4f59-b104-4da805dbaaee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-5q5ruze5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
