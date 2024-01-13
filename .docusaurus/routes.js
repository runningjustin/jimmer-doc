import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jimmer-doc/zh/blog',
    component: ComponentCreator('/jimmer-doc/zh/blog', '9f2'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/archive',
    component: ComponentCreator('/jimmer-doc/zh/blog/archive', 'ecf'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/first-blog-post',
    component: ComponentCreator('/jimmer-doc/zh/blog/first-blog-post', '82d'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/long-blog-post',
    component: ComponentCreator('/jimmer-doc/zh/blog/long-blog-post', '64a'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/mdx-blog-post',
    component: ComponentCreator('/jimmer-doc/zh/blog/mdx-blog-post', 'bae'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/tags',
    component: ComponentCreator('/jimmer-doc/zh/blog/tags', 'bab'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/tags/docusaurus',
    component: ComponentCreator('/jimmer-doc/zh/blog/tags/docusaurus', '8df'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/tags/facebook',
    component: ComponentCreator('/jimmer-doc/zh/blog/tags/facebook', '9db'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/tags/hello',
    component: ComponentCreator('/jimmer-doc/zh/blog/tags/hello', '316'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/tags/hola',
    component: ComponentCreator('/jimmer-doc/zh/blog/tags/hola', '3b8'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/blog/welcome',
    component: ComponentCreator('/jimmer-doc/zh/blog/welcome', '1c7'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/markdown-page',
    component: ComponentCreator('/jimmer-doc/zh/markdown-page', '03f'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/search',
    component: ComponentCreator('/jimmer-doc/zh/search', '180'),
    exact: true
  },
  {
    path: '/jimmer-doc/zh/docs',
    component: ComponentCreator('/jimmer-doc/zh/docs', 'bee'),
    routes: [
      {
        path: '/jimmer-doc/zh/docs/cache/',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/', '047'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/cache-type/',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/cache-type/', '682'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/cache-type/association',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/cache-type/association', 'e6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/cache-type/calculation',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/cache-type/calculation', '7eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/cache-type/object',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/cache-type/object', '915'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/consistency',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/consistency', '9d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/enable-cache',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/enable-cache', 'd69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/multiview-cache/',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/multiview-cache/', 'd32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/multiview-cache/abandoned-callback',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/multiview-cache/abandoned-callback', '1d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/multiview-cache/advanced',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/multiview-cache/advanced', '160'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/multiview-cache/concept',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/multiview-cache/concept', '538'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/cache/multiview-cache/user-filter',
        component: ComponentCreator('/jimmer-doc/zh/docs/cache/multiview-cache/user-filter', 'c8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/client/',
        component: ComponentCreator('/jimmer-doc/zh/docs/client/', '42c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/client/api',
        component: ComponentCreator('/jimmer-doc/zh/docs/client/api', 'a58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/client/error',
        component: ComponentCreator('/jimmer-doc/zh/docs/client/error', '3e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/', 'cde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/batch-size',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/batch-size', '075'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/cache-abandoned',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/cache-abandoned', '08b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/connection-manager',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/connection-manager', 'dd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/database-validation',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/database-validation', 'd0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/default-database-stragegy',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/default-database-stragegy', '56e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/default-enum-strategy',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/default-enum-strategy', '921'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/dialect',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/dialect', '6bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/dissociate-action-checking',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/dissociate-action-checking', 'ee3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/id-only-target-checking-level',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/id-only-target-checking-level', '149'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/micro-service',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/micro-service', '4b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/save-command-pessimistic-lock',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/save-command-pessimistic-lock', 'abf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/scala-providder',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/scala-providder', 'e27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/sql-log',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/sql-log', '03e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/configuration/trigger-type',
        component: ComponentCreator('/jimmer-doc/zh/docs/configuration/trigger-type', '851'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/graphql/',
        component: ComponentCreator('/jimmer-doc/zh/docs/graphql/', 'af5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/graphql/concept',
        component: ComponentCreator('/jimmer-doc/zh/docs/graphql/concept', 'cee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/graphql/mutation',
        component: ComponentCreator('/jimmer-doc/zh/docs/graphql/mutation', 'b23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/graphql/query',
        component: ComponentCreator('/jimmer-doc/zh/docs/graphql/query', '7ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/', 'b2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/', 'da5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/calculated/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/calculated/', 'f31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/calculated/formula',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/calculated/formula', 'a5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/calculated/transient',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/calculated/transient', '57d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/embedded',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/embedded', 'e59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/enum',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/enum', '847'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/join-sql',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/join-sql', 'd4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/json',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/json', '18f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/key',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/key', '79d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/logical-deleted',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/logical-deleted', '99f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/mapped-super-class',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/mapped-super-class', '923'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/on-dissociate',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/on-dissociate', '9eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/remote',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/remote', '875'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/view/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/view/', '79a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/view/id-view',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/view/id-view', 'e0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/advanced/view/many-to-many-view',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/advanced/view/many-to-many-view', '41c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/', '0f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/association/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/association/', '6e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/association/many-to-many',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/association/many-to-many', '0c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/association/many-to-one',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/association/many-to-one', '055'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/association/one-to-many',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/association/one-to-many', '27d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/association/one-to-one',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/association/one-to-one', '9c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/basic',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/basic', 'f6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/foreignkey',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/foreignkey', 'e88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/naming-strategy',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/naming-strategy', '557'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mapping/base/nullity',
        component: ComponentCreator('/jimmer-doc/zh/docs/mapping/base/nullity', '3e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/', '2b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/associations',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/associations', '381'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/delete-command',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/delete-command', 'df4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/delete-statement',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/delete-statement', '0c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/draft-interceptor',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/draft-interceptor', '036'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/', '5ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/association',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/association', 'bbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/dissociation',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/dissociation', 'b60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/id-checking',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/id-checking', 'ca2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/incomplete',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/incomplete', 'a10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/input-dto/',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/input-dto/', '317'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/input-dto/dto-lang',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/input-dto/dto-lang', '26d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/input-dto/lonely',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/input-dto/lonely', 'fad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/input-dto/mapstruct',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/input-dto/mapstruct', '4af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/input-dto/problem',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/input-dto/problem', '25b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/lock',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/lock', '928'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/other',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/other', '78a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/save-mode',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/save-mode', '97d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/save-command/usage',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/save-command/usage', 'e6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/trigger',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/trigger', 'f0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/mutation/update-statement',
        component: ComponentCreator('/jimmer-doc/zh/docs/mutation/update-statement', '7f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/', 'f68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/draft',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/draft', '0e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/dynamic',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/dynamic', 'f46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/immutable/',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/immutable/', '83d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/immutable/current-situation',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/immutable/current-situation', '06d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/immutable/reason',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/immutable/reason', '980'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/immutable/solution',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/immutable/solution', '9dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/jackson',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/jackson', '37b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/tool',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/tool', '3c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/view/',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/view/', '4b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/view/dto-language',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/view/dto-language', 'a62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/view/mapstruct',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/view/mapstruct', '50a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/object/visibility',
        component: ComponentCreator('/jimmer-doc/zh/docs/object/visibility', 'fbe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/', 'f3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/benchmark',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/benchmark', '8b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/entity',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/entity', '7cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/get-started/',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/get-started/', 'aa1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/get-started/create-database',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/get-started/create-database', '516'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/get-started/create-project',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/get-started/create-project', '0f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/get-started/define-entity',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/get-started/define-entity', '629'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/get-started/generate-code',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/get-started/generate-code', '859'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/get-started/usage',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/get-started/usage', '883'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/introduction',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/introduction', 'caa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/overview/standard-demo',
        component: ComponentCreator('/jimmer-doc/zh/docs/overview/standard-demo', 'ba0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/', '3e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/associations',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/associations', 'caa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-join/',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-join/', 'cb2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-join/chain-style',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-join/chain-style', 'c2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-join/kotlin-join',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-join/kotlin-join', '18b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-join/merge',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-join/merge', '006'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-join/optimization',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-join/optimization', '329'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-join/problem',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-join/problem', '2f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-join/table-ex',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-join/table-ex', '694'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-join/weak-join',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-join/weak-join', '3da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-order',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-order', 'f15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/dynamic-where',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/dynamic-where', 'f33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/expression',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/expression', '993'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/global-filter/',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/global-filter/', 'c0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/global-filter/logical-deleted',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/global-filter/logical-deleted', 'b1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/global-filter/user-filter',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/global-filter/user-filter', 'aaa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/group',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/group', '0f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/implicit-subquery',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/implicit-subquery', '376'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/native-sql',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/native-sql', '3c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/object-fetcher/',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/object-fetcher/', '685'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/object-fetcher/association',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/object-fetcher/association', '2fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/object-fetcher/dto',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/object-fetcher/dto', '53a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/object-fetcher/props',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/object-fetcher/props', 'd4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/object-fetcher/recursive',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/object-fetcher/recursive', 'e0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/object-fetcher/spring-data',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/object-fetcher/spring-data', '52d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/object-fetcher/usage',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/object-fetcher/usage', '742'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/object-fetcher/view',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/object-fetcher/view', '4ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/paging/',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/paging/', 'f61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/paging/deep-optimization',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/paging/deep-optimization', '2ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/paging/reverse-sorting',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/paging/reverse-sorting', '10f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/paging/unncessary-join',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/paging/unncessary-join', '972'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/paging/usage',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/paging/usage', 'c95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/sub-query',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/sub-query', '617'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/super_qbe',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/super_qbe', '2a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/query/usage',
        component: ComponentCreator('/jimmer-doc/zh/docs/query/usage', '581'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/', '0e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/dsl/',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/dsl/', '9e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/dsl/feature',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/dsl/feature', '7ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/dsl/super_qbe',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/dsl/super_qbe', '3aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/fetch/',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/fetch/', 'b8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/fetch/export/',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/fetch/export/', '61d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/fetch/export/comparison',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/fetch/export/comparison', '72d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/fetch/export/dto',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/fetch/export/dto', '7c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/fetch/export/entity',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/fetch/export/entity', 'caf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/fetch/feature',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/fetch/feature', 'da4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/precondition',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/precondition', '595'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/save/',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/save/', '16d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/save/export/',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/save/export/', '63e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/save/export/long',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/save/export/long', '5c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/save/export/root',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/save/export/root', 'cba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/save/export/short',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/save/export/short', '0c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/quick-view/save/feature',
        component: ComponentCreator('/jimmer-doc/zh/docs/quick-view/save/feature', 'c0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/resource/',
        component: ComponentCreator('/jimmer-doc/zh/docs/resource/', '08f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/resource/discuss',
        component: ComponentCreator('/jimmer-doc/zh/docs/resource/discuss', '98b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/resource/ecosystem',
        component: ComponentCreator('/jimmer-doc/zh/docs/resource/ecosystem', 'b9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/resource/vedio',
        component: ComponentCreator('/jimmer-doc/zh/docs/resource/vedio', '786'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/resource/vice-of-sccuessed',
        component: ComponentCreator('/jimmer-doc/zh/docs/resource/vice-of-sccuessed', 'b60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/', 'e76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/appendix',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/appendix', '9de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/repository/',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/repository/', '461'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/repository/abstract',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/repository/abstract', '947'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/repository/concept',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/repository/concept', 'c86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/repository/default',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/repository/default', '8c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/repository/dto',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/repository/dto', '6ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/spring-cloud',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/spring-cloud', '0c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jimmer-doc/zh/docs/spring/transaction',
        component: ComponentCreator('/jimmer-doc/zh/docs/spring/transaction', '977'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/jimmer-doc/zh/',
    component: ComponentCreator('/jimmer-doc/zh/', '531'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
