import React from "react";
import ReactMarkdown from "react-markdown";
import emoji from 'emoji-dictionary'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from 'remark-gfm';


function Blogs() {
 
  const markdown = `
  A paragraph with *emphasis* and **strong importance**.
 
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
 
* Lists
* [ ] todo
* [x] done
  
A table:

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

JavaScript code:
\`\`\` js
console.log('It works!')
\`\`\`

link: https://reactjs.com

`;
const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={coldarkCold}>
      {value}
    </SyntaxHighlighter>
  )
};

const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

  return (
    <div className="blog-page">
      <div id="blog">
        <h1 className=" blog_title">My Blogs</h1>
                <div className="blog-container" >
                  <div className="blog-wrap">
                    <h1 className="blog_title">blog title</h1>
                    <p>created mar 24</p>
                    <ReactMarkdown plugins={[[gfm, {singleTilde: false}]]} children={markdown} renderers={{text: emojiSupport, code: CodeBlock }}  className="blog_article">
                   # Hello, I'm Kateryna Lisabeth,

Highly motivated, young web developer and passionate about programming and enjoy solving challenges, based in Belgium.

## languages i know 🔣:

-  HTML5
-  CSS3
-  Sass
-  Bootstrap
-  JavaScript (including ES6+)
-  ReactJS
-  Node.js
-  Express
-  MongoDB
-  SQLite
-  Git
-  Postman

##  About Me 👱‍♀️

-  🏡 &nbsp; I'm from Ukraine.
-  🎓 &nbsp; I graduated as a web developer at [Hack Your Future Belgium](https://github.com/HackYourFutureBelgium).
-  💼 &nbsp; Looking for job or internship opportunities.

   
                    </ReactMarkdown>
                  </div>
                </div>
          </div>
          
                <div className="blog-container" >
                  <div className="blog-wrap">
                    <h1 className="blog_title">blog title</h1>
                    <p>created mar 23</p>
                    <ReactMarkdown plugins={[[gfm, {singleTilde: false}]]} children={markdown} renderers={{text: emojiSupport, code: CodeBlock }}  className="blog_article">
                    # Hello, I'm Kateryna Lisabeth,

Highly motivated, young web developer and passionate about programming and enjoy solving challenges, based in Belgium.

## languages i know 🔣:

-  HTML5
-  CSS3
-  Sass
-  Bootstrap
-  JavaScript (including ES6+)
-  ReactJS
-  Node.js
-  Express
-  MongoDB
-  SQLite
-  Git
-  Postman

##  About Me 👱‍♀️

-  🏡 &nbsp; I'm from Ukraine.
-  🎓 &nbsp; I graduated as a web developer at [Hack Your Future Belgium](https://github.com/HackYourFutureBelgium).
-  💼 &nbsp; Looking for job or internship opportunities.

                    </ReactMarkdown>
                  </div>
          </div>
         
                <div className="blog-container" >
                  <div className="blog-wrap">
                    <h1 className="blog_title">blog title</h1>
                    <p>created mar 23</p>
                    <ReactMarkdown plugins={[[gfm, {singleTilde: false}]]} children={markdown} renderers={{text: emojiSupport, code: CodeBlock }}  className="blog_article">
                    # Hello, I'm Kateryna Lisabeth,

Highly motivated, young web developer and passionate about programming and enjoy solving challenges, based in Belgium.

## languages i know 🔣:

-  HTML5
-  CSS3
-  Sass
-  Bootstrap
-  JavaScript (including ES6+)
-  ReactJS
-  Node.js
-  Express
-  MongoDB
-  SQLite
-  Git
-  Postman

##  About Me 👱‍♀️

-  🏡 &nbsp; I'm from Ukraine.
-  🎓 &nbsp; I graduated as a web developer at [Hack Your Future Belgium](https://github.com/HackYourFutureBelgium).
-  💼 &nbsp; Looking for job or internship opportunities.

                    </ReactMarkdown>
                  </div>
                
          </div>
    </div>
  );
}

export default Blogs;
