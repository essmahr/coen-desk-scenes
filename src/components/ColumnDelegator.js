import React from 'react';
import { Subscribe } from 'unstated';
import { css } from 'emotion';
import { sidebarState } from '../stores';

const ColumnDelegator = function(props) {
  const { main, sidebar, sidebarOpen } = props;

  return (
    <div
      className={css`
        position: relative;
      `}
    >
      {sidebarOpen && <div>{sidebar}</div>}
      <div style={sidebarOpen ? { marginLeft: '200px' } : {}}>{main}</div>
    </div>
  );
};

export default props => (
  <Subscribe to={[sidebarState]}>
    {({ state }) => (
      <ColumnDelegator sidebarOpen={state.sidebarOpen} {...props} />
    )}
  </Subscribe>
);
