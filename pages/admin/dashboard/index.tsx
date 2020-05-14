import React from 'react';
import {NextPage} from 'next';

import {DashBoard} from '../../../src/routes/Admin/DashBoard';
import {AdminLayout} from '../../../src/common/layouts/admin';

const DashBoardNextPage: NextPage = () => {
  return( 
        <AdminLayout>
          <DashBoard />
        </AdminLayout>
  );
};

export default DashBoardNextPage;
