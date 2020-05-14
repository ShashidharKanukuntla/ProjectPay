import React from 'react';
import {NextPage} from 'next';

import {RetailDealers} from '../../../src/routes/Admin/RetailDealers';
import {AdminLayout} from '../../../src/common/layouts/admin';

const DashBoardNextPage: NextPage = () => {
  return( 
        <AdminLayout>
          <RetailDealers />
        </AdminLayout>
  );
};

export default DashBoardNextPage;
