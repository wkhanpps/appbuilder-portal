import * as React from 'react';
import { Menu } from 'semantic-ui-react';

import { attributesFor } from '@data';
import { OrganizationAttributes } from '@data/models/organization';

export interface IProps {
  organization: JSONAPI<OrganizationAttributes>;
  onClick: (e: any) => void;
  isActive: boolean;
}

class Row extends React.Component<IProps> {
  render() {
    const { isActive, organization, onClick } = this.props;
    const attributes = attributesFor(organization);
    const { name } = attributes;

    const className = `
          flex-row align-items-center
          ${isActive ? 'active' : ''}`;

    return (
      <Menu.Item
        data-test-org-select-item
        className={className}
        name={name}
        onClick={onClick}>

        <span className='list-thumbnail m-r-md'>
          &nbsp;
        </span>

        <span>{name}</span>
      </Menu.Item>

    );
  }
}

export default Row;
