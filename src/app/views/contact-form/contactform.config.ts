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
    email: [data.email, [Validators.required, Validators.email]],
    phoneNumber: [data.phoneNumber, [Validators.required]],
    address: [data.address, [Validators.required]],
    occupation: [
      data.occupation,
      [Validators.required, Validators.pattern('^[a-zA-z ]*$')],
    ],
  };
};

export const phoneCode = [
  'AF'.toLocaleLowerCase(),
  'AX'.toLocaleLowerCase(),
  'AL'.toLocaleLowerCase(),
  'DZ'.toLocaleLowerCase(),
  'AS'.toLocaleLowerCase(),
  'AD'.toLocaleLowerCase(),
  'AO'.toLocaleLowerCase(),
  'AI'.toLocaleLowerCase(),
  'AQ'.toLocaleLowerCase(),
  'AG'.toLocaleLowerCase(),
  'AR'.toLocaleLowerCase(),
  'AM'.toLocaleLowerCase(),
  'AW'.toLocaleLowerCase(),
  'AU'.toLocaleLowerCase(),
  'AT'.toLocaleLowerCase(),
  'AZ'.toLocaleLowerCase(),
  'BS'.toLocaleLowerCase(),
  'BH'.toLocaleLowerCase(),
  'BD'.toLocaleLowerCase(),
  'BB'.toLocaleLowerCase(),
  'BY'.toLocaleLowerCase(),
  'BE'.toLocaleLowerCase(),
  'BZ'.toLocaleLowerCase(),
  'BJ'.toLocaleLowerCase(),
  'BM'.toLocaleLowerCase(),
  'BT'.toLocaleLowerCase(),
  'BO'.toLocaleLowerCase(),
  'BA'.toLocaleLowerCase(),
  'BW'.toLocaleLowerCase(),
  'BV'.toLocaleLowerCase(),
  'BR'.toLocaleLowerCase(),
  'IO'.toLocaleLowerCase(),
  'BN'.toLocaleLowerCase(),
  'BG'.toLocaleLowerCase(),
  'BF'.toLocaleLowerCase(),
  'BI'.toLocaleLowerCase(),
  'KH'.toLocaleLowerCase(),
  'CM'.toLocaleLowerCase(),
  'CA'.toLocaleLowerCase(),
  'CV'.toLocaleLowerCase(),
  'KY'.toLocaleLowerCase(),
  'CF'.toLocaleLowerCase(),
  'TD'.toLocaleLowerCase(),
  'CL'.toLocaleLowerCase(),
  'CN'.toLocaleLowerCase(),
  'CX'.toLocaleLowerCase(),
  'CC'.toLocaleLowerCase(),
  'CO'.toLocaleLowerCase(),
  'KM'.toLocaleLowerCase(),
  'CG'.toLocaleLowerCase(),
  'CD'.toLocaleLowerCase(),
  'CK'.toLocaleLowerCase(),
  'CR'.toLocaleLowerCase(),
  'CI'.toLocaleLowerCase(),
  'HR'.toLocaleLowerCase(),
  'CU'.toLocaleLowerCase(),
  'CY'.toLocaleLowerCase(),
  'CZ'.toLocaleLowerCase(),
  'DK'.toLocaleLowerCase(),
  'DJ'.toLocaleLowerCase(),
  'DM'.toLocaleLowerCase(),
  'DO'.toLocaleLowerCase(),
  'EC'.toLocaleLowerCase(),
  'EG'.toLocaleLowerCase(),
  'SV'.toLocaleLowerCase(),
  'GQ'.toLocaleLowerCase(),
  'ER'.toLocaleLowerCase(),
  'EE'.toLocaleLowerCase(),
  'ET'.toLocaleLowerCase(),
  'FK'.toLocaleLowerCase(),
  'FO'.toLocaleLowerCase(),
  'FJ'.toLocaleLowerCase(),
  'FI'.toLocaleLowerCase(),
  'FR'.toLocaleLowerCase(),
  'GF'.toLocaleLowerCase(),
  'PF'.toLocaleLowerCase(),
  'TF'.toLocaleLowerCase(),
  'GA'.toLocaleLowerCase(),
  'GM'.toLocaleLowerCase(),
  'GE'.toLocaleLowerCase(),
  'DE'.toLocaleLowerCase(),
  'GH'.toLocaleLowerCase(),
  'GI'.toLocaleLowerCase(),
  'GR'.toLocaleLowerCase(),
  'GL'.toLocaleLowerCase(),
  'GD'.toLocaleLowerCase(),
  'GP'.toLocaleLowerCase(),
  'GU'.toLocaleLowerCase(),
  'GT'.toLocaleLowerCase(),
  'GG'.toLocaleLowerCase(),
  'GN'.toLocaleLowerCase(),
  'GW'.toLocaleLowerCase(),
  'GY'.toLocaleLowerCase(),
  'HT'.toLocaleLowerCase(),
  'HM'.toLocaleLowerCase(),
  'VA'.toLocaleLowerCase(),
  'HN'.toLocaleLowerCase(),
  'HK'.toLocaleLowerCase(),
  'HU'.toLocaleLowerCase(),
  'IS'.toLocaleLowerCase(),
  'IN'.toLocaleLowerCase(),
  'ID'.toLocaleLowerCase(),
  'IR'.toLocaleLowerCase(),
  'IQ'.toLocaleLowerCase(),
  'IE'.toLocaleLowerCase(),
  'IM'.toLocaleLowerCase(),
  'IL'.toLocaleLowerCase(),
  'IT'.toLocaleLowerCase(),
  'JM'.toLocaleLowerCase(),
  'JP'.toLocaleLowerCase(),
  'JE'.toLocaleLowerCase(),
  'JO'.toLocaleLowerCase(),
  'KZ'.toLocaleLowerCase(),
  'KE'.toLocaleLowerCase(),
  'KI'.toLocaleLowerCase(),
  'KR'.toLocaleLowerCase(),
  'KW'.toLocaleLowerCase(),
  'KG'.toLocaleLowerCase(),
  'LA'.toLocaleLowerCase(),
  'LV'.toLocaleLowerCase(),
  'LB'.toLocaleLowerCase(),
  'LS'.toLocaleLowerCase(),
  'LR'.toLocaleLowerCase(),
  'LY'.toLocaleLowerCase(),
  'LI'.toLocaleLowerCase(),
  'LT'.toLocaleLowerCase(),
  'LU'.toLocaleLowerCase(),
  'MO'.toLocaleLowerCase(),
  'MK'.toLocaleLowerCase(),
  'MG'.toLocaleLowerCase(),
  'MW'.toLocaleLowerCase(),
  'MY'.toLocaleLowerCase(),
  'MV'.toLocaleLowerCase(),
  'ML'.toLocaleLowerCase(),
  'MT'.toLocaleLowerCase(),
  'MH'.toLocaleLowerCase(),
  'MQ'.toLocaleLowerCase(),
  'MR'.toLocaleLowerCase(),
  'MU'.toLocaleLowerCase(),
  'YT'.toLocaleLowerCase(),
  'MX'.toLocaleLowerCase(),
  'FM'.toLocaleLowerCase(),
  'MD'.toLocaleLowerCase(),
  'MC'.toLocaleLowerCase(),
  'MN'.toLocaleLowerCase(),
  'ME'.toLocaleLowerCase(),
  'MS'.toLocaleLowerCase(),
  'MA'.toLocaleLowerCase(),
  'MZ'.toLocaleLowerCase(),
  'MM'.toLocaleLowerCase(),
  'NA'.toLocaleLowerCase(),
  'NR'.toLocaleLowerCase(),
  'NP'.toLocaleLowerCase(),
  'NL'.toLocaleLowerCase(),
  'AN'.toLocaleLowerCase(),
  'NC'.toLocaleLowerCase(),
  'NZ'.toLocaleLowerCase(),
  'NI'.toLocaleLowerCase(),
  'NE'.toLocaleLowerCase(),
  'NG'.toLocaleLowerCase(),
  'NU'.toLocaleLowerCase(),
  'NF'.toLocaleLowerCase(),
  'MP'.toLocaleLowerCase(),
  'NO'.toLocaleLowerCase(),
  'OM'.toLocaleLowerCase(),
  'PK'.toLocaleLowerCase(),
  'PW'.toLocaleLowerCase(),
  'PS'.toLocaleLowerCase(),
  'PA'.toLocaleLowerCase(),
  'PG'.toLocaleLowerCase(),
  'PY'.toLocaleLowerCase(),
  'PE'.toLocaleLowerCase(),
  'PH'.toLocaleLowerCase(),
  'PN'.toLocaleLowerCase(),
  'PL'.toLocaleLowerCase(),
  'PT'.toLocaleLowerCase(),
  'PR'.toLocaleLowerCase(),
  'QA'.toLocaleLowerCase(),
  'RE'.toLocaleLowerCase(),
  'RO'.toLocaleLowerCase(),
  'RU'.toLocaleLowerCase(),
  'RW'.toLocaleLowerCase(),
  'BL'.toLocaleLowerCase(),
  'SH'.toLocaleLowerCase(),
  'KN'.toLocaleLowerCase(),
  'LC'.toLocaleLowerCase(),
  'MF'.toLocaleLowerCase(),
  'PM'.toLocaleLowerCase(),
  'VC'.toLocaleLowerCase(),
  'WS'.toLocaleLowerCase(),
  'SM'.toLocaleLowerCase(),
  'ST'.toLocaleLowerCase(),
  'SA'.toLocaleLowerCase(),
  'SN'.toLocaleLowerCase(),
  'RS'.toLocaleLowerCase(),
  'SC'.toLocaleLowerCase(),
  'SL'.toLocaleLowerCase(),
  'SG'.toLocaleLowerCase(),
  'SK'.toLocaleLowerCase(),
  'SI'.toLocaleLowerCase(),
  'SB'.toLocaleLowerCase(),
  'SO'.toLocaleLowerCase(),
  'ZA'.toLocaleLowerCase(),
  'GS'.toLocaleLowerCase(),
  'ES'.toLocaleLowerCase(),
  'LK'.toLocaleLowerCase(),
  'SD'.toLocaleLowerCase(),
  'SR'.toLocaleLowerCase(),
  'SJ'.toLocaleLowerCase(),
  'SZ'.toLocaleLowerCase(),
  'SE'.toLocaleLowerCase(),
  'CH'.toLocaleLowerCase(),
  'SY'.toLocaleLowerCase(),
  'TW'.toLocaleLowerCase(),
  'TJ'.toLocaleLowerCase(),
  'TZ'.toLocaleLowerCase(),
  'TH'.toLocaleLowerCase(),
  'TL'.toLocaleLowerCase(),
  'TG'.toLocaleLowerCase(),
  'TK'.toLocaleLowerCase(),
  'TO'.toLocaleLowerCase(),
  'TT'.toLocaleLowerCase(),
  'TN'.toLocaleLowerCase(),
  'TR'.toLocaleLowerCase(),
  'TM'.toLocaleLowerCase(),
  'TC'.toLocaleLowerCase(),
  'TV'.toLocaleLowerCase(),
  'UG'.toLocaleLowerCase(),
  'UA'.toLocaleLowerCase(),
  'AE'.toLocaleLowerCase(),
  'GB'.toLocaleLowerCase(),
  'US'.toLocaleLowerCase(),
  'UM'.toLocaleLowerCase(),
  'UY'.toLocaleLowerCase(),
  'UZ'.toLocaleLowerCase(),
  'VU'.toLocaleLowerCase(),
  'VE'.toLocaleLowerCase(),
  'VN'.toLocaleLowerCase(),
  'VG'.toLocaleLowerCase(),
  'VI'.toLocaleLowerCase(),
  'WF'.toLocaleLowerCase(),
  'EH'.toLocaleLowerCase(),
  'YE'.toLocaleLowerCase(),
  'ZM'.toLocaleLowerCase(),
  'ZW'.toLocaleLowerCase(),
];
