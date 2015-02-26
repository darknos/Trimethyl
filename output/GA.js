Ext.data.JsonP.GA({"tagname":"class","name":"GA","autodetected":{},"files":[{"filename":"ga.js","href":"ga.html#GA"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"config","tagname":"property","owner":"GA","id":"property-config","meta":{}},{"name":"event","tagname":"method","owner":"GA","id":"method-event","meta":{}},{"name":"screen","tagname":"method","owner":"GA","id":"method-screen","meta":{}},{"name":"setTrackerUA","tagname":"method","owner":"GA","id":"method-setTrackerUA","meta":{}},{"name":"social","tagname":"method","owner":"GA","id":"method-social","meta":{}},{"name":"time","tagname":"method","owner":"GA","id":"method-time","meta":{}},{"name":"trackEvent","tagname":"method","owner":"GA","id":"method-trackEvent","meta":{}},{"name":"trackScreen","tagname":"method","owner":"GA","id":"method-trackScreen","meta":{}},{"name":"trackSocial","tagname":"method","owner":"GA","id":"method-trackSocial","meta":{}},{"name":"trackTiming","tagname":"method","owner":"GA","id":"method-trackTiming","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-GA","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ga.html#GA' target='_blank'>ga.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-config' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<ul><li><span class='pre'>ua</span> : String<div class='sub-desc'><p>UA of Google Analitycs</p>\n</div></li><li><span class='pre'>log</span> : Boolean (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-event' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-event' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-event' class='name expandable'>event</a>( <span class='pre'>cat, act, [lbl], [val]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for trackEvent ...</div><div class='long'><p>Alias for <a href=\"#!/api/GA-method-trackEvent\" rel=\"GA-method-trackEvent\" class=\"docClass\">trackEvent</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cat</span> : String<div class='sub-desc'><p>Category <strong>or object passed to native proxy</strong></p>\n\n</div></li><li><span class='pre'>act</span> : String<div class='sub-desc'><p>The action</p>\n\n</div></li><li><span class='pre'>lbl</span> : String (optional)<div class='sub-desc'><p>Label</p>\n\n</div></li><li><span class='pre'>val</span> : String (optional)<div class='sub-desc'><p>Value</p>\n\n</div></li></ul></div></div></div><div id='method-screen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-screen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-screen' class='name expandable'>screen</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for trackScreen ...</div><div class='long'><p>Alias for <a href=\"#!/api/GA-method-trackScreen\" rel=\"GA-method-trackScreen\" class=\"docClass\">trackScreen</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The screen name</p>\n\n</div></li></ul></div></div></div><div id='method-setTrackerUA' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-setTrackerUA' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-setTrackerUA' class='name expandable'>setTrackerUA</a>( <span class='pre'>ua</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the tracker UA. ...</div><div class='long'><p>Set the tracker UA.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ua</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-social' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-social' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-social' class='name expandable'>social</a>( <span class='pre'>net, [act], [tar]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for trackSocial ...</div><div class='long'><p>Alias for <a href=\"#!/api/GA-method-trackSocial\" rel=\"GA-method-trackSocial\" class=\"docClass\">trackSocial</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>net</span> : String<div class='sub-desc'><p>The social network name <strong>or object passed to native proxy</strong></p>\n\n</div></li><li><span class='pre'>act</span> : String (optional)<div class='sub-desc'><p>The action (Default <code>share</code>)</p>\n\n</div></li><li><span class='pre'>tar</span> : String (optional)<div class='sub-desc'><p>Target</p>\n\n</div></li></ul></div></div></div><div id='method-time' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-time' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-time' class='name expandable'>time</a>( <span class='pre'>cat, time, [name], [lbl]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for trackTiming ...</div><div class='long'><p>Alias for <a href=\"#!/api/GA-method-trackTiming\" rel=\"GA-method-trackTiming\" class=\"docClass\">trackTiming</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cat</span> : String<div class='sub-desc'><p>Category <strong>or object passed to native proxy</strong></p>\n\n</div></li><li><span class='pre'>time</span> : String<div class='sub-desc'><p>Time expressed in ms</p>\n\n</div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>Name</p>\n\n</div></li><li><span class='pre'>lbl</span> : String (optional)<div class='sub-desc'><p>Label</p>\n\n</div></li></ul></div></div></div><div id='method-trackEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-trackEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-trackEvent' class='name expandable'>trackEvent</a>( <span class='pre'>cat, act, [lbl], [val]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Track an event ...</div><div class='long'><p>Track an event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cat</span> : String<div class='sub-desc'><p>Category <strong>or object passed to native proxy</strong></p>\n\n</div></li><li><span class='pre'>act</span> : String<div class='sub-desc'><p>The action</p>\n\n</div></li><li><span class='pre'>lbl</span> : String (optional)<div class='sub-desc'><p>Label</p>\n\n</div></li><li><span class='pre'>val</span> : String (optional)<div class='sub-desc'><p>Value</p>\n\n</div></li></ul></div></div></div><div id='method-trackScreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-trackScreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-trackScreen' class='name expandable'>trackScreen</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Track a screen ...</div><div class='long'><p>Track a screen</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The screen name</p>\n\n</div></li></ul></div></div></div><div id='method-trackSocial' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-trackSocial' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-trackSocial' class='name expandable'>trackSocial</a>( <span class='pre'>net, [act], [tar]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Track a social action ...</div><div class='long'><p>Track a social action</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>net</span> : String<div class='sub-desc'><p>The social network name <strong>or object passed to native proxy</strong></p>\n\n</div></li><li><span class='pre'>act</span> : String (optional)<div class='sub-desc'><p>The action (Default <code>share</code>)</p>\n\n</div></li><li><span class='pre'>tar</span> : String (optional)<div class='sub-desc'><p>Target</p>\n\n</div></li></ul></div></div></div><div id='method-trackTiming' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GA'>GA</span><br/><a href='source/ga.html#GA-method-trackTiming' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GA-method-trackTiming' class='name expandable'>trackTiming</a>( <span class='pre'>cat, time, [name], [lbl]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Track timing ...</div><div class='long'><p>Track timing</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cat</span> : String<div class='sub-desc'><p>Category <strong>or object passed to native proxy</strong></p>\n\n</div></li><li><span class='pre'>time</span> : String<div class='sub-desc'><p>Time expressed in ms</p>\n\n</div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>Name</p>\n\n</div></li><li><span class='pre'>lbl</span> : String (optional)<div class='sub-desc'><p>Label</p>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});