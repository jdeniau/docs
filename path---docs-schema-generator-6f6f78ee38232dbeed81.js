webpackJsonp([0x66dfecf0b81e],{423:function(e,t){e.exports={data:{post:{html:'<h1 id="the-schema-generator"><a href="#the-schema-generator" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The schema generator</h1>\n<p><code>schema</code> is a command line tool part of <a href="https://api-platform.com" target="_blank" rel="nofollow noopener noreferrer">the API Platform framework</a> that instantly generates\na PHP data model from the <a href="http://schema.org" target="_blank" rel="nofollow noopener noreferrer">Schema.org</a> vocabulary.\nBrowse Schema.org, choose the types and properties you need, run our code generator and you\'re done! You get\na fully featured PHP data model including:</p>\n<ul>\n<li>A set of PHP entities with properties, constants (enum values), getters, setters, adders and removers. The class\nhierarchy provided by Schema.org will be translated to a PHP class hierarchy with parents as <code>abstract</code> classes. The generated\ncode complies with <a href="http://www.php-fig.org/" target="_blank" rel="nofollow noopener noreferrer">PSR</a> coding standards.</li>\n<li>Full high-quality PHPDoc for classes, properties, constants and methods extracted from Schema.org.</li>\n<li>Doctrine ORM annotation mapping including database columns with type guessing, relations with cardinality guessing, class\ninheritance (through the <code>@AbstractSuperclass</code> annotation).</li>\n<li>Data validation through <a href="http://symfony.com/doc/current/book/validation.html" target="_blank" rel="nofollow noopener noreferrer">Symfony Validator</a> annotations including\ndata type validation, enum support (choices) and check for required properties.</li>\n<li>Interfaces and <a href="http://doctrine-orm.readthedocs.org/en/latest/cookbook/resolve-target-entity-listener.html" target="_blank" rel="nofollow noopener noreferrer">Doctrine <code>ResolveTargetEntityListener</code></a>\nsupport.</li>\n<li>Custom PHP namespace support.</li>\n<li>List of values provided by Schema.org with <a href="https://github.com/myclabs/php-enum" target="_blank" rel="nofollow noopener noreferrer">PHP Enum</a> classes.</li>\n</ul>\n<p>Bonus:</p>\n<ul>\n<li>The code generator is fully configurable and extensible: all features can be deactivated (e.g.: the Doctrine mapping generator)\nand custom generator can be added (e.g.: a Doctrine ODM mapping generator).</li>\n<li>The generated code can be used as is in a <a href="http://symfony.com" target="_blank" rel="nofollow noopener noreferrer">Symfony</a> app (but it will work too in a raw PHP project\nor any other framework including <a href="http://laravel.com" target="_blank" rel="nofollow noopener noreferrer">Laravel</a> and <a href="http://framework.zend.com/" target="_blank" rel="nofollow noopener noreferrer">Zend Framework</a>).</li>\n</ul>\n<h2 id="what-is-schemaorg"><a href="#what-is-schemaorg" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is Schema.org?</h2>\n<p>Schema.org is a vocabulary representing common data structures and their relations. Schema.org can be exposed as <a href="http://en.wikipedia.org/wiki/JSON-LD" target="_blank" rel="nofollow noopener noreferrer">JSON-LD</a>,\n<a href="https://en.wikipedia.org/wiki/Microdata_(HTML)" target="_blank" rel="nofollow noopener noreferrer">microdata</a> and <a href="http://en.wikipedia.org/wiki/RDFa" target="_blank" rel="nofollow noopener noreferrer">RDFa</a>.\nExtracting semantical data exposed in the Schema.org vocabulary is supported by a growing number of companies including\nGoogle (Search, Gmail), Yahoo!, Bing and Yandex.</p>\n<h2 id="why-use-schemaorg-data-to-generate-a-php-model"><a href="#why-use-schemaorg-data-to-generate-a-php-model" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why use Schema.org data to generate a PHP model?</h2>\n<h3 id="dont-reinvent-the-wheel"><a href="#dont-reinvent-the-wheel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Don\'t Reinvent The Wheel</h3>\n<p>Data models provided by Schema.org are popular and were proven efficient. They cover a broad spectrum of topics including\ncreative works, e-commerce, events, medicine, social networking, people, postal addresses, organization data, places or reviews.\nSchema.org has its root in <a href="http://schema.rdfs.org/mappings.html" target="_blank" rel="nofollow noopener noreferrer">a ton of preexisting well designed vocabularies</a> and is\nsuccessfully used by more and more websites and applications.</p>\n<p>Pick schemas applicable to your application, generate your PHP model, then customize and specialize it to fit your needs.</p>\n<h3 id="improve-seo-and-user-experience"><a href="#improve-seo-and-user-experience" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Improve SEO and user experience</h3>\n<p>Adding Schema.org markup to websites and apps increase their ranking in search engines results and enable awesome features\nsuch as <a href="https://support.google.com/webmasters/answer/99170?hl=en" target="_blank" rel="nofollow noopener noreferrer">Google Rich Snippets</a> and <a href="https://developers.google.com/gmail/markup/overview" target="_blank" rel="nofollow noopener noreferrer">Gmail markup</a>.</p>\n<p>Mapping your app data model to Schema.org structures can be tedious. When using the generator, your data model will be\nderived from Schema.org. Adding microdata markup to your templates or serializing your data as JSON-LD will not require\nspecific mapping nor adaptation. It\'s a matter of minutes.</p>\n<h3 id="be-ready-for-the-future"><a href="#be-ready-for-the-future" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Be ready for the future</h3>\n<p>Schema.org improves the interoperability of your applications. Used with hypermedia technologies such as <a href="http://www.hydra-cg.com/" target="_blank" rel="nofollow noopener noreferrer">Hydra</a>\nit\'s a big step towards the semantic and machine readable web.\nIt opens the way to generic web API clients able to extract and process data from any website or app using such technologies.</p>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<ul>\n<li><a href="/docs/schema-generator/getting-started">Getting Started</a></li>\n<li><a href="/docs/schema-generator/configuration">Configuration</a></li>\n</ul>\n<p>Previous chapter: <a href="/docs/core/serialization">API: The serialization process</a></p>\n<p>Next chapter: <a href="/docs/schema-generator/getting-started">Getting Started</a></p>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"embedding-relations",title:"Using Different Serialization Groups per Operation"},{id:"embedding-relations",title:"Embedding Relations"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"name-conversion",title:"Name Conversion"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"writable-entity-identifier",title:"Writable Entity Identifier"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"}]},{id:"events",title:"The Event System",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"creating-a-custom-data-provider",title:"Custom Collection Data Provider"},{id:"returning-a-paged-collection",title:"Custom Item Data Provider"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"jwt",title:"JWT Authentification",anchors:[{id:"installing-lexikjwtauthenticationnundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swagger-open-api",title:"Documenting the Authentication Mechanism with Swagger/Open API"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"security",title:"Security",anchors:null},{id:"swagger",title:"Swagger Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:'Accept "application/x-www-form-urlencoded" Form Data',anchors:null},{id:"external-vocabularies",title:"Using External Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending the JSON-LD context",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null},{id:"docker",title:"Using API Platform with Docker",anchors:[{id:"services",title:"Services"},{id:"installation",title:"Installation"}]}]}},{node:{title:"Extra",path:"extra",items:[{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/schema-generator",current:{path:"docs/schema-generator/index",title:"The Schema Generator Component - Introduction"},prev:{path:"docs/core/angularjs-integration",title:"The API Component - AngularJS Integration"},next:{path:"docs/schema-generator/getting-started",title:"Getting Started",rootPath:"The Schema Generator Component"}}}}});
//# sourceMappingURL=path---docs-schema-generator-6f6f78ee38232dbeed81.js.map