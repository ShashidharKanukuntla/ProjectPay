import React from 'react';
import {NextPage} from 'next';

import {Notifications} from '../../../src/routes/Admin/Notifications';
import {AdminLayout} from '../../../src/common/layouts/admin';

const DashBoardNextPage: NextPage = () => {
  return( 
        <AdminLayout>
          <Notifications />
        </AdminLayout>
  );
};

export default DashBoardNextPage;
