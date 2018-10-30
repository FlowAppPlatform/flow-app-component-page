import React from 'react';

import AppComponent from 'flow-app-component';

class PageComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/text-component.svg',
    name: 'Page',
    componentType: 'page',
    category: 'Views',
    parent: null,
    showOnComponentsPanel: false,
    isValuable: true
  };

  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic Settings about thei page.',
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
      ],

      ...PageComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return <div style={{ width: '100%' }}>{this.renderChildren()}</div>;
  }
}

export default PageComponent;
