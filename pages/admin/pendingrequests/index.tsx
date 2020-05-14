import React from 'react';
import {NextPage} from 'next';

import {PendingRequests} from '../../../src/routes/Admin/PendingRequests';
import {AdminLayout} from '../../../src/common/layouts/admin';

const DashBoardNextPage: NextPage = () => {
  return( 
        <AdminLayout>
          <PendingRequests />
        </AdminLayout>
  );
};

export default DashBoardNextPage;
