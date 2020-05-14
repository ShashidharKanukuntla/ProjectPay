import React from 'react';
import { CompanyForm } from './Company/CompanyForm';
import { RetailerForm } from './Retailer/RetailerForm';

interface RegisterFormProps {
    category: string;
}

export const RegisterForm:React.FC<RegisterFormProps> = (props) => {

    const {category} = props;

    if(category=="company"){
        return <CompanyForm />
    }

    else {
        return <RetailerForm />
    }

}