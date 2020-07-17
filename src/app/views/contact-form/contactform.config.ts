import { Contact } from '../../models/Contact';

export const defaultValues = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  occupation: '',
};

export const setData = (data: Contact) => {
  return {
    id: [data.id],
    firstName: [data.firstName],
    lastName: [data.lastName],
    email: [data.email],
    phoneNumber: [data.phoneNumber],
    address: [data.address],
    occupation: [data.occupation],
  };
};

export const props = {
  ngCols: [
    'col-md-6 col-sm-12',
    'col-md-6 col-sm-12',
    'col-md-6 col-sm-12',
    'col-md-6 col-sm-12',
    'col-md-6 col-sm-12',
    'col-md-6 col-sm-12',
  ],

  properties: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      placeholder: 'Insert Your First Name',
      inputType: 'field',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      placeholder: 'Insert Your Last Name',
      inputType: 'field',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Insert Your Email',
      inputType: 'field',
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Phone Number',
      placeholder: 'Insert Your Phone Number',
      inputType: 'field',
    },
    {
      name: 'address',
      label: 'Address',
      placeholder: 'Insert Your Address',
      inputType: 'textarea',
    },
    {
      name: 'occupation',
      type: 'text',
      label: 'Occupation',
      placeholder: 'Insert Your Occupation',
      inputType: 'field',
    },
  ],
};
