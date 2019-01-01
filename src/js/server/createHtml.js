/* @flow */

type Props = {
  title: *,
  meta: *,
  link: *,
  content: *,
  script: *
};

const createHtml = ({ title, meta, link, content, script }: Props) => {
  return `
    <html>
      <head>
        ${ title }
        ${ meta }
        ${ link }
      </head>
      <body>
        <div id="root">${ content }</div>
        ${script}
      </body>
    </html>
  `;
};


export default createHtml;
