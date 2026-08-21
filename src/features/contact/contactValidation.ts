import type { ContactFormData, ContactFormErrors } from '@/types';
import { validateEmail } from '@/lib/utils';

type TranslationKeys = {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  subjectRequired: string;
  messageRequired: string;
  messageMinLength: string;
};

export function validateContactForm(
  data: ContactFormData,
  t: TranslationKeys
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = t.nameRequired;
  }

  if (!data.email.trim()) {
    errors.email = t.emailRequired;
  } else if (!validateEmail(data.email)) {
    errors.email = t.emailInvalid;
  }

  if (!data.subject.trim()) {
    errors.subject = t.subjectRequired;
  }

  if (!data.message.trim()) {
    errors.message = t.messageRequired;
  } else if (data.message.trim().length < 20) {
    errors.message = t.messageMinLength;
  }

  return errors;
}
