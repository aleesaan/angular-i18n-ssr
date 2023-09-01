import { parse } from 'accept-language-parser';
import { Request } from 'express';
import { Language, LANGUAGE_COOKIE } from 'src/app/services/language.service';

export function getLanguageFromReq(req: Request): Language {
  const language =
    req.cookies[LANGUAGE_COOKIE] || parse(req.get('accept-language'))[0]?.code;

  return ['en', 'fr'].includes(language)
    ? language
    : 'en';
}
