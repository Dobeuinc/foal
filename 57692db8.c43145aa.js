(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(256)),i=a(260),l=a(261),c={title:"TypeORM",sidebar_label:"SQL Databases"},b={unversionedId:"databases/typeorm",id:"databases/typeorm",isDocsHomePage:!1,title:"TypeORM",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/databases/typeorm.md",slug:"/databases/typeorm",permalink:"/docs/databases/typeorm",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/databases/typeorm.md",version:"current",sidebar_label:"SQL Databases",sidebar:"someSidebar",previous:{title:"Generate Tokens",permalink:"/docs/common/generate-tokens"},next:{title:"Create Models & Queries",permalink:"/docs/databases/create-models-and-queries"}},s=[{value:"The ORM",id:"the-orm",children:[]},{value:"Supported Databases",id:"supported-databases",children:[]},{value:"Use with FoalTS",id:"use-with-foalts",children:[{value:"Initial Configuration",id:"initial-configuration",children:[]},{value:"Packages",id:"packages",children:[]}]},{value:"Database Configuration Examples",id:"database-configuration-examples",children:[{value:"MySQL / MariaDB",id:"mysql--mariadb",children:[]},{value:"PostgreSQL",id:"postgresql",children:[]}]},{value:"Configuration and Testing",id:"configuration-and-testing",children:[]}],p={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"A simple model:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n}\n")),Object(o.b)("h2",{id:"the-orm"},"The ORM"),Object(o.b)("p",null,"FoalTS uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://typeorm.io/"}),"TypeORM")," as default ",Object(o.b)("em",{parentName:"p"},"Object-Relational Mapping"),". This allows you to create classes to interact with your database tables (or collections). TypeORM is written in TypeScript and supports both ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Active_record_pattern"}),"Active Record")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Data_mapper_pattern"}),"Data Mapper")," patterns."),Object(o.b)("p",null,"Here is a non-exhaustive list of its features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"migrations and automatic migrations generation"),Object(o.b)("li",{parentName:"ul"},"uni-directional, bi-directional and self-referenced relations"),Object(o.b)("li",{parentName:"ul"},"eager and lazy relations"),Object(o.b)("li",{parentName:"ul"},"TypeScript support"),Object(o.b)("li",{parentName:"ul"},"connection configuration in json / xml / yml / env formats"),Object(o.b)("li",{parentName:"ul"},"transactions"),Object(o.b)("li",{parentName:"ul"},"etc")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Although this documentation presents the basic features of TypeORM, you may be interested in reading the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://typeorm.io/"}),"official documentation")," to learn more advanced features.")),Object(o.b)("h2",{id:"supported-databases"},"Supported Databases"),Object(o.b)("p",null,"FoalTS supports officially the following databases:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Database"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Versions"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Driver"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PostgreSQL"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.6+ (",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.postgresql.org/support/versioning/"}),"Version Policy"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"pg@8")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MySQL"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5.7+ (",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/MySQL#Release_history"}),"Version Policy"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"mysql@2")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MariaDB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10.2+ (",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/MariaDB#Versioning"}),"Version Policy"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"mysql@2")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SQLite"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"sqlite3@5")," and ",Object(o.b)("inlineCode",{parentName:"td"},"better-sqlite3@7")," (since v2.1)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MongoDB"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.0+ (",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.mongodb.com/support-policy"}),"Version Policy"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"mongodb@3")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(o.b)("h2",{id:"use-with-foalts"},"Use with FoalTS"),Object(o.b)("p",null,"TypeORM is integrated by default in each new FoalTS project. This allows you to quickly create models, run migrations and use the authentication system without wasting time on configuration. However, if you do not wish to use it, you can refer to the page ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/databases/using-another-orm"}),"Using another ORM"),"."),Object(o.b)("h3",{id:"initial-configuration"},"Initial Configuration"),Object(o.b)("p",null,"When creating a new project, an ",Object(o.b)("inlineCode",{parentName:"p"},"SQLite")," database is used by default as it does not require any additional installation (the data is saved in a file). The connection configuration is stored in ",Object(o.b)("inlineCode",{parentName:"p"},"ormconfig.js")," and ",Object(o.b)("inlineCode",{parentName:"p"},"default.json")," located respectively at the root of your project and in the ",Object(o.b)("inlineCode",{parentName:"p"},"config/")," directory."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ormconfig.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'better-sqlite3',\n  database: Config.get('database.database', 'string'),\n  dropSchema: Config.get('database.dropSchema', 'boolean', false),\n  entities: ['build/app/**/*.entity.js'],\n  migrations: ['build/migrations/*.js'],\n  cli: {\n    migrationsDir: 'src/migrations'\n  },\n  synchronize: Config.get('database.synchronize', 'boolean', false)\n}\n")),Object(o.b)(i.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"database:\n  database: ./db.sqlite3\n"))),Object(o.b)(l.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "database": {\n    "database": "./db.sqlite3"\n  }\n}\n'))),Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  database: {\n    database: "./db.sqlite3",\n  }\n}\n')))),Object(o.b)("h3",{id:"packages"},"Packages"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install typeorm @foal/typeorm\n")),Object(o.b)("p",null,"Two packages are required to use TypeORM with FoalTS:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The package ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/typeorm"}),"typeorm")," which is the official one of the ORM. It includes everything you need to create models and make database requests."),Object(o.b)("li",{parentName:"ul"},"The package ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@foal/typeorm"}),"@foal/typeorm")," (maintained by FoalTS) which contains additional components. These are particularly useful when using FoalTS ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/authentication-and-access-control/quick-start"}),"authentication and authorization system"),".")),Object(o.b)("h2",{id:"database-configuration-examples"},"Database Configuration Examples"),Object(o.b)("p",null,"This section shows how to configure ",Object(o.b)("strong",{parentName:"p"},"MySQL")," or ",Object(o.b)("strong",{parentName:"p"},"PostgreSQL")," with Foal."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ormconfig.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { Config } = require('@foal/core');\n\nmodule.exports = {\n  type: 'mysql', // or 'postgres'\n\n  host: Config.get('database.host', 'string'),\n  port: Config.get('database.port', 'number'),\n  username: Config.get('database.username', 'string'),\n  password: Config.get('database.password', 'string'),\n  database: Config.get('database.database', 'string'),\n\n  dropSchema: Config.get('database.dropSchema', 'boolean', false),\n  synchronize: Config.get('database.synchronize', 'boolean', false),\n  \n  entities: [\"build/app/**/*.entity.js\"],\n  migrations: [\"build/migrations/*.js\"],\n  cli: {\n    migrationsDir: \"src/migrations\"\n  },\n}\n")),Object(o.b)("p",null,"With this configuration, database credentials can be provided in a YAML, a JSON or a ",Object(o.b)("inlineCode",{parentName:"p"},".env "),"configuration file or in environment variables."),Object(o.b)(i.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\n\ndatabase:\n  host: localhost\n  port: 3306\n  username: root\n  password: password\n  database: my-db\n"))),Object(o.b)(l.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "database": {\n    "host": "localhost",\n    "port": 3306,\n    "username": "root",\n    "password": "password",\n    "database": "my-db"\n  }\n}\n'))),Object(o.b)(l.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  // ...\n  database: {\n    host: "localhost",\n    port: 3306,\n    username: "root",\n    password: "password",\n    database: "my-db"\n  }\n}\n')))),Object(o.b)("h3",{id:"mysql--mariadb"},"MySQL / MariaDB"),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"mysql")," or ",Object(o.b)("inlineCode",{parentName:"p"},"mysql3")," drivers."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install mysql --save # mysql2 is also supported\n")),Object(o.b)("h3",{id:"postgresql"},"PostgreSQL"),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"pg")," driver."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install pg --save\n")),Object(o.b)("h2",{id:"configuration-and-testing"},"Configuration and Testing"),Object(o.b)("p",null,"When running the command ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test")," with the above configuration, FoalTS will try to retrieve the database configuration in this order:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Environment variables."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},".env")," file."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"config/test.yml")," and ",Object(o.b)("inlineCode",{parentName:"li"},"config/test.json"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"config/default.yml")," and ",Object(o.b)("inlineCode",{parentName:"li"},"config/default.json"),".")),Object(o.b)("p",null,"For example, if the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"DATABASE_PASSWORD")," is defined, Foal will use its value. Otherwise, it will look at the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file to see if it is defined here. If it is not, it will go through the YAML and JSON ",Object(o.b)("inlineCode",{parentName:"p"},"config/")," files."),Object(o.b)("p",null,"In this way, you can define a default configuration in the ",Object(o.b)("inlineCode",{parentName:"p"},"config/default.{yml|json}")," file to use both during development and testing and override some settings in ",Object(o.b)("inlineCode",{parentName:"p"},"config/test.{yml|json}")," during testing."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You learn more on how configuration works in Foal ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/deployment-and-environments/configuration"}),"here"))),Object(o.b)("p",null,"In the example below, we add two new options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dropSchema")," clears the database each time we call ",Object(o.b)("inlineCode",{parentName:"li"},"createConnection")),Object(o.b)("li",{parentName:"ul"},"and ",Object(o.b)("inlineCode",{parentName:"li"},"synchronize")," synchronizes the database tables with your entities so your do not have to generate and run migrations during testing.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"config/test.yml")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# ...\n\ndatabase:\n  username: 'test'\n  password: 'test'\n  database: 'test'\n  dropSchema: true\n  sychronize: true\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example of a test")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { createConnection, Connection } from 'typeorm';\n\ndescribe('xxx', () => {\n\n  let connection: Connection;\n\n  beforeEach(() => connection = await createConnection())\n\n  afterEach(async () => {\n    if (connection) {\n      await connection.close()\n    }\n  });\n\n  it('yyy', () => {\n    // ...\n  });\n\n});\n")))}u.isMDXComponent=!0},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,l(l({ref:t},b),{},{components:a})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},257:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},258:function(e,t,a){"use strict";var n=a(0),r=a(259);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},259:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},260:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(258),i=a(257),l=a(56),c=a.n(l),b=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),j=m.tabGroupChoices,O=m.setTabGroupChoices,g=Object(n.useState)(l),f=g[0],h=g[1],y=n.Children.toArray(e.children);if(null!=u){var N=j[u];null!=N&&N!==f&&p.some((function(e){return e.value===N}))&&h(N)}var v=function(e){h(e),null!=u&&O(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case s:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},261:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);