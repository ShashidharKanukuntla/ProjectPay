import * as React from 'react';
import {Button} from '@material-ui/core';
import {render, fireEvent} from '@testing-library/react';

import {DynamicModal} from './DynamicModal';

describe('DynamicModal', () => {
  const buttonName = 'Click to Open';

  it('clicking the button should show the displaycomponent content', () => {
    const {getByText} = render(
      <DynamicModal
        displayComponent={() => <div>Test</div>}
        actionComponent={(openModal) => (
          <Button color="primary" variant="contained" onClick={openModal}>
            {buttonName}
          </Button>
        )}
      />
    );

    const popupButton = getByText(buttonName);
    fireEvent.click(popupButton);
    expect(getByText('Test')).toBeTruthy();
  });
});
