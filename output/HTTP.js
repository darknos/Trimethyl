Ext.data.JsonP.HTTP({"tagname":"class","name":"HTTP","autodetected":{},"files":[{"filename":"http.js","href":"http.html#HTTP"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"config","tagname":"property","owner":"HTTP","id":"property-config","meta":{}},{"name":"addHeader","tagname":"method","owner":"HTTP","id":"method-addHeader","meta":{}},{"name":"addToQueue","tagname":"method","owner":"HTTP","id":"method-addToQueue","meta":{}},{"name":"download","tagname":"method","owner":"HTTP","id":"method-download","meta":{}},{"name":"event","tagname":"method","owner":"HTTP","id":"method-event","meta":{}},{"name":"get","tagname":"method","owner":"HTTP","id":"method-get","meta":{}},{"name":"getHeaders","tagname":"method","owner":"HTTP","id":"method-getHeaders","meta":{}},{"name":"getJSON","tagname":"method","owner":"HTTP","id":"method-getJSON","meta":{}},{"name":"getQueue","tagname":"method","owner":"HTTP","id":"method-getQueue","meta":{}},{"name":"isQueueEmpty","tagname":"method","owner":"HTTP","id":"method-isQueueEmpty","meta":{}},{"name":"post","tagname":"method","owner":"HTTP","id":"method-post","meta":{}},{"name":"postJSON","tagname":"method","owner":"HTTP","id":"method-postJSON","meta":{}},{"name":"removeFromQueue","tagname":"method","owner":"HTTP","id":"method-removeFromQueue","meta":{}},{"name":"removeHeader","tagname":"method","owner":"HTTP","id":"method-removeHeader","meta":{}},{"name":"resetCookies","tagname":"method","owner":"HTTP","id":"method-resetCookies","meta":{}},{"name":"resetHeaders","tagname":"method","owner":"HTTP","id":"method-resetHeaders","meta":{}},{"name":"send","tagname":"method","owner":"HTTP","id":"method-send","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-HTTP","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/http.html#HTTP' target='_blank'>http.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-config' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<ul><li><span class='pre'>base</span> : String<div class='sub-desc'><p>The base URL of the API</p>\n</div></li><li><span class='pre'>timeout</span> : Number (optional)<div class='sub-desc'><p>Global timeout for the reques. after this value (express in milliseconds) the requests throw an error.</p>\n<p>Defaults to: <code>10000</code></p></div></li><li><span class='pre'>headers</span> : Object (optional)<div class='sub-desc'><p>Global headers for all requests.</p>\n<p>Defaults to: <code>{}</code></p></div></li><li><span class='pre'>useCache</span> : Object (optional)<div class='sub-desc'><p>Global cache flag.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>errorAlert</span> : Boolean (optional)<div class='sub-desc'><p>Global error alert handling.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>log</span> : Boolean (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>logResponse</span> : Boolean (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>bypassExpireWhenOffline</span> : Boolean (optional)<div class='sub-desc'><p>Bypass the check of expiration cache when Internet is offline.</p>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addHeader' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-addHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-addHeader' class='name expandable'>addHeader</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a global header for all requests ...</div><div class='long'><p>Add a global header for all requests</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The header key</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The header value</p>\n</div></li></ul></div></div></div><div id='method-addToQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-addToQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-addToQueue' class='name expandable'>addToQueue</a>( <span class='pre'>request</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a request to queue ...</div><div class='long'><p>Add a request to queue</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-download' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-download' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-download' class='name expandable'>download</a>( <span class='pre'>url, filename, success, error, ondatastream</span> ) : <a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The url</p>\n</div></li><li><span class='pre'>filename</span> : Object<div class='sub-desc'><p>File name or <code>Ti.File</code></p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li><li><span class='pre'>ondatastream</span> : Function<div class='sub-desc'><p>Progress callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-event' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-event' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-event' class='name expandable'>event</a>( <span class='pre'>name, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-get' class='name expandable'>get</a>( <span class='pre'>url, success, error</span> ) : <a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Make a GET request to that URL ...</div><div class='long'><p>Make a GET request to that URL</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The endpoint url</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-getHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-getHeaders' class='name expandable'>getHeaders</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getJSON' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-getJSON' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-getJSON' class='name expandable'>getJSON</a>( <span class='pre'>url, data, success, error</span> ) : <a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Make a GET request to that url with that data and setting the format forced to JSON ...</div><div class='long'><p>Make a GET request to that url with that data and setting the format forced to JSON</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The endpoint url</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-getQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-getQueue' class='name expandable'>getQueue</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current requests queue ...</div><div class='long'><p>Get the current requests queue</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isQueueEmpty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-isQueueEmpty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-isQueueEmpty' class='name expandable'>isQueueEmpty</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if the requests queue is empty ...</div><div class='long'><p>Check if the requests queue is empty</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-post' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-post' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-post' class='name expandable'>post</a>( <span class='pre'>url, data, success, error</span> ) : <a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Make a POST request to that URL ...</div><div class='long'><p>Make a POST request to that URL</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The endpoint url</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-postJSON' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-postJSON' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-postJSON' class='name expandable'>postJSON</a>( <span class='pre'>url, data, success, error</span> ) : <a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Make a POST request to that url with that data and setting the format forced to JSON ...</div><div class='long'><p>Make a POST request to that url with that data and setting the format forced to JSON</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The endpoint url</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeFromQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-removeFromQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-removeFromQueue' class='name expandable'>removeFromQueue</a>( <span class='pre'>request</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove a request from queue ...</div><div class='long'><p>Remove a request from queue</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-removeHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-removeHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-removeHeader' class='name expandable'>removeHeader</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove a global header ...</div><div class='long'><p>Remove a global header</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The header key</p>\n</div></li></ul></div></div></div><div id='method-resetCookies' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-resetCookies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-resetCookies' class='name expandable'>resetCookies</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reset the cookies for all requests ...</div><div class='long'><p>Reset the cookies for all requests</p>\n</div></div></div><div id='method-resetHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-resetHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-resetHeaders' class='name expandable'>resetHeaders</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reset all globals headers ...</div><div class='long'><p>Reset all globals headers</p>\n</div></div></div><div id='method-send' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HTTP'>HTTP</span><br/><a href='source/http.html#HTTP-method-send' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HTTP-method-send' class='name expandable'>send</a>( <span class='pre'>opt</span> ) : <a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The main function of the module. ...</div><div class='long'><p>The main function of the module.</p>\n\n<p>Create an <a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a> and resolve it</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opt</span> : Object<div class='sub-desc'><p>The request dictionary\n* * <strong>url</strong>: The endpoint URL\n* <strong>method</strong>: The HTTP method to use (GET|POST|PUT|PATCH|..)\n* <strong>headers</strong>: An Object key-value of additional headers\n* <strong>timeout</strong>: Timeout after stopping the request and triggering an error\n* <strong>cache</strong>: Set to false to disable the cache\n* <strong>success</strong>: The success callback\n* <strong>error</strong>: The error callback\n* <strong>format</strong>: Override the format for that request (like <code>json</code>)\n* <strong>ttl</strong>: Override the TTL seconds for the cache</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/HTTP.Request\" rel=\"HTTP.Request\" class=\"docClass\">HTTP.Request</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});