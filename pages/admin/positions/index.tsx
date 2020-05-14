import React from 'react';
import {NextPage} from 'next';

import {Positions} from '../../../src/routes/Admin/Positions';
import {AdminLayout} from '../../../src/common/layouts/admin';

const DashBoardNextPage: NextPage = () => {
  return( 
        <AdminLayout>
          <Positions />
        </AdminLayout>
  );
};

export default DashBoardNextPage;
