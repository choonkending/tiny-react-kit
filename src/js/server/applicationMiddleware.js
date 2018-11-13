/* @flow */
import renderToStream from './renderToStream';

const applicationMiddleware = (req: *, res: *) => {
  renderToStream(req).pipe(res);
};

export default applicationMiddleware;
