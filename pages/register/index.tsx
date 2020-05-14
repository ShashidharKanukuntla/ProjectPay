import React from 'react';
import {NextPage} from 'next';

import {RegisterPage} from '../../src/routes/Register';
import {HomeLayout} from '../../src/common/layouts/home';

const RegisterNextPage: NextPage = () => {
  return(
        <HomeLayout>
          <RegisterPage />
        </HomeLayout>);
};

export default RegisterNextPage;