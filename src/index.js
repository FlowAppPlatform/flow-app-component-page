import React from 'react';

import AppComponent from 'flow-app-component';

class PageComponent extends AppComponent {
  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic page settings',
          properties: [
            {
              id: 'name',
              name: 'Name',
              type: 'text',
              options: {},
              data: null,
            },
            {
              id: 'title',
              name: 'Page Title',
              type: 'text',
              options: {},
              data: null,
            },
            {
              id: 'description',
              name: 'Page Description',
              type: 'description',
              options: {},
              data: null,
            },
            {
              id: 'is-homepage',
              name: 'Home Page',
              type: 'boolean',
              options: {},
              data: null,
            },
          ],
        },
        {
          categoryName: 'Access Control',
          categoryDescription: 'Control access to the directory',
          properties: [
            {
              id: 'allowed-roles',
              name: 'Allowed Roles',
              type: 'roles',
              description: 'Select roles that have access to this page',
              value: 'all',
              options: {
                multi: true,
              },
            },
          ],
        },
      ],
      iconUrl: '/assets/images/text-component.svg',
      name: 'Page',
      componentType: 'page',
      category: 'Views',
      parent: null,
      showOnComponentsPanel: false,
      isValuable: true,
      allowsChildren: true,
      allowedChildTypes: ['checkbox', 'container', 'link', 'image', 'input', 'form', 'search', 'text', 'loader', 'radio', 'map', 'nav', 'video', 'dropdown'],
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return <div style={{ width: '100%' }}>{this.renderChildren()}</div>;
  }
}

export default PageComponent;
