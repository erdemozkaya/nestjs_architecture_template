import { Request, Response, NextFunction } from 'express';
import { ErrorResult } from '../utilities/results/ErrorResult';

export function logger(req: Request, res: Response, next: NextFunction) {
  next(new ErrorResult("PermissionFilterNotAuthorized","You are not authorized for this page"))
};