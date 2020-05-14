import React from 'react';
import {NextPage} from 'next';

import {Reports} from '../../../src/routes/Admin/Reports';
import {AdminLayout} from '../../../src/common/layouts/admin';

const DashBoardNextPage: NextPage = () => {
  return( 
        <AdminLayout>
          <Reports />
        </AdminLayout>
  );
};

export default DashBoardNextPage;
