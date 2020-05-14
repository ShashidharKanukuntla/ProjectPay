import React from 'react';
import {NextPage} from 'next';

import {Employees} from '../../../src/routes/Admin/Employees';
import {AdminLayout} from '../../../src/common/layouts/admin';

const DashBoardNextPage: NextPage = () => {
  return( 
        <AdminLayout>
          <Employees />
        </AdminLayout>
  );
};

export default DashBoardNextPage;
