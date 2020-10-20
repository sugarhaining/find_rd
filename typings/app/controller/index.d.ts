// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportComment from '../../../app/controller/comment';
import ExportHome from '../../../app/controller/home';
import ExportRecommend from '../../../app/controller/recommend';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    comment: ExportComment;
    home: ExportHome;
    recommend: ExportRecommend;
    user: ExportUser;
  }
}
