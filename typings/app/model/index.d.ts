// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportComment from '../../../app/model/comment';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Comment: ReturnType<typeof ExportComment>;
    User: ReturnType<typeof ExportUser>;
  }
}