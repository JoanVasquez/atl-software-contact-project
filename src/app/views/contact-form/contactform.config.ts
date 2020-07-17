import { Contact } from '../../models/Contact';
import { Validators } from '@angular/forms';

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
    firstName: [
      data.firstName,
      [Validators.required, Validators.pattern('^[a-zA-z ]*$')],
    ],
    lastName: [
      data.lastName,
      [Validators.required, Validators.pattern('^[a-zA-z ]*$')],
    ],
    email: [
      data.email,
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        Validators.email,
      ],
    ],
    phoneNumber: [data.phoneNumber, [Validators.required]],
    address: [data.address, [Validators.required]],
    occupation: [
      data.occupation,
      [Validators.required, Validators.pattern('^[a-zA-z ]*$')],
    ],
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
      type: 'tel',
      label: 'Phone Number',
      placeholder: 'Insert Your Phone Number',
      inputType: 'telephone',
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
