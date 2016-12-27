// @flow

import React from 'react';
import { List } from 'immutable';

import Columns from './_Columns';
import EventColumnContainer from '../../containers/EventColumnContainer';
import CreateColumnUtils from '../utils/CreateColumnUtils';
import { radius } from '../../styles/variables';
import type { ActionCreators, Column as ColumnType } from '../../utils/types';

export default class extends React.PureComponent {
  addColumnFn = () => {
    CreateColumnUtils.showColumnTypeSelectAlert(this.props.actions);
  };

  props: {
    actions: ActionCreators,
    columns: Array<ColumnType>,
  };

  renderRow = (column) => {
    if (!column) return null;

    const columnId = column.get('id');
    if (!columnId) return null;

    return (
      <EventColumnContainer
        key={`event-column-${columnId}`}
        columnId={columnId}
        radius={radius}
      />
    );
  };

  render() {
    const { columns = List(), ...props } = this.props;

    return (
      <Columns
        key="event-columns"
        addColumnFn={this.addColumnFn}
        columns={columns}
        renderRow={this.renderRow}
        {...props}
      />
    );
  }
}