/* @flow */
import { Transform } from 'stream';
import createHtml from './createHtml';

const createScript = () => `<script src="/static/main.js"></script>`;

const createMarkupStream = (helmetContext: *) => new Transform({
    transform(chunk, encoding, callback) {
      const { helmet } = helmetContext;
      this.push(createHtml({
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        link: helmet.link.toString(),
        content: chunk.toString(),
        script: createScript()
      }));
      callback();
    }
});

export default createMarkupStream;
