import React from 'react';
import {NextPage} from 'next';

import {HomeLayout} from '../../src/common/layouts/home';

const HomeNextPage: NextPage = () => {
  return( 
        <HomeLayout>
           <h1>Coming Soon........</h1>
           <h2>Application under development</h2>
        </HomeLayout>
       
  );
};

export default HomeNextPage;
