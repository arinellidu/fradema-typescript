'use client';

import React from 'react';
import { _offices } from 'src/_mock';

import { filiaisNewsletter } from '../filiais-newsletter';
import { filiaisContactForm } from '../contact/filiais-contact-form';
import { filiaisContactInfo } from '../contact/filiais-contact-info';

// ----------------------------------------------------------------------

export function filiaisContactView() {
  return (
    <>
      <filiaisContactInfo locations={_offices} />

      <filiaisContactForm />

      <filiaisNewsletter />
    </>
  );
}
