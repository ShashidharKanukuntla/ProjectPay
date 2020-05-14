import React from 'react';
import {NextPage} from 'next';

import {Companies} from '../../../src/routes/Admin/Companies';
import {AdminLayout} from '../../../src/common/layouts/admin';

const DashBoardNextPage: NextPage = () => {
  return( 
        <AdminLayout>
          <Companies />
        </AdminLayout>
  );
};

export default DashBoardNextPage;
