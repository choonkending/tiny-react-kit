/* @flow */
import renderToStream from './renderToStream';

const applicationMiddleware = (req: *, res: *) => {
  renderToStream().pipe(res);
};

export default applicationMiddleware;
