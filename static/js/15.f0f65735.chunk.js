(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{207:function(s){s.exports={"km_rpbt_cache_related_posts-504":{html:'<hr /><section class="description"><h2>Description</h2><p>The opt-in cache feature needs to be activated (with a filter) to cache posts.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$post_id</dt><dd><p class="desc"><span class="type">(<span class="int">int</span>)</span><span class="required">(Required)</span><span class="description">The post id to cache related posts for.</span></p></dd><dt>$taxonomies</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>|<span class="string">string</span>)</span><span class="required">(Optional)</span><span class="description">Taxonomies for the related posts query.</span></p><p class="default">Default value: \'\'</p></dd><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>|<span class="string">string</span>)</span><span class="required">(Optional)</span><span class="description">arguments. See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_query_related_posts/">km_rpbt_query_related_posts()</a> for more information on accepted arguments.</span></p><p class="default">Default value: array()</p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array|false)</span> Array with cached related posts objects or false if no posts where cached.</p></section>',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"},{source:"includes/functions.php",url:"/functions/km_rpbt_is_cache_loaded",text:"km_rpbt_is_cache_loaded()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"}],used_by:[]},changelog:[{description:'<span class="since-description">Use empty string as default value for $taxonomies parameter.</span>',version:"2.5.0"},{description:"Introduced.",version:"2.1"}],signature:'km_rpbt_cache_related_posts( <span class="arg-type">int</span>&nbsp;<span class="arg-name">$post_id</span>,  <span class="arg-type">array|string</span>&nbsp;<span class="arg-name">$taxonomies</span>&nbsp;=&nbsp;<span class="arg-default">\'\'</span>,  <span class="arg-type">array|string</span>&nbsp;<span class="arg-name">$args</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>&nbsp;)',notice:""},"km_rpbt_flush_cache-526":{html:'<hr /><section class="description"><h2>Description</h2><p>Call this function on the wp_load hook or later.</p></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(int|bool)</span> Returns number of deleted rows or false on failure.</p></section>',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_is_cache_loaded",text:"km_rpbt_is_cache_loaded()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"}],used_by:[]},changelog:[{description:"Introduced.",version:"2.1"}],signature:"km_rpbt_flush_cache()",notice:""},"km_rpbt_get_comma_separated_values-469":{html:'<hr /><section class="description"><h2>Description</h2><p>Removes duplicates and empty values.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$value</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>|<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Comma seperated string or array with values.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with unique array values</p></section>',methods:[],related:{uses:[],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_post_types",text:"km_rpbt_get_post_types()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_taxonomies",text:"km_rpbt_get_taxonomies()"}]},changelog:[{description:"Introduced.",version:"2.2"}],signature:'km_rpbt_get_comma_separated_values( <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$value</span>, &nbsp;<span class="arg-name">$filter</span>&nbsp;=&nbsp;<span class="arg-default">\'string\'</span>&nbsp;)',notice:""},"km_rpbt_get_feature_html-264":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$feature</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">Type of feature.</span></p></dd><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Optional)</span><span class="description">See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_related_posts_by_taxonomy_shortcode/">km_rpbt_related_posts_by_taxonomy_shortcode()</a> for for more information on accepted arguments.</span></p><p class="default">Default value: array()</p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> feature html or empty string.</p></section>',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_is_valid_settings_type",text:"km_rpbt_is_valid_settings_type()"},{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/settings.php",url:"/functions/km_rpbt_get_template_fields",text:"km_rpbt_get_template_fields()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_lazy_loading_html",text:"km_rpbt_get_lazy_loading_html()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts_html",text:"km_rpbt_get_related_posts_html()"},{source:"includes/functions.php",url:"/hooks/related_posts_by_taxonomy_after_display",text:"related_posts_by_taxonomy_after_display"}],used_by:[{source:"includes/shortcode.php",url:"/functions/km_rpbt_related_posts_by_taxonomy_shortcode",text:"km_rpbt_related_posts_by_taxonomy_shortcode()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget",text:"Related_Posts_By_Taxonomy::widget()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'km_rpbt_get_feature_html( <span class="arg-type">string</span>&nbsp;<span class="arg-name">$feature</span>,  <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>&nbsp;)',notice:""},"km_rpbt_get_lazy_loading_html-380":{html:'<hr /><section class="description"><h2>Description</h2><p>Returns a HTML div with the (widget or shortcode ) arguments added to the <code>data-rpbt_args</code> HTML attribute.</p><p>The data attribute is used by Javascript to query related posts with Ajax after the page is loaded.</p><p>The HTML can be filtered with the <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/hooks/related_posts_by_taxonomy_lazy_loading_html/">&#8216;related_posts_by_taxonomy_lazy_loading_html&#8217;</a> filter.</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_related_posts_by_taxonomy_shortcode/">km_rpbt_related_posts_by_taxonomy_shortcode()</a> arguments.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Related posts HTML div with data arguments.</p></section>',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_settings_type",text:"km_rpbt_get_settings_type()"},{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"},{source:"includes/functions.php",url:"/hooks/related_posts_by_taxonomy_lazy_loading_html",text:"related_posts_by_taxonomy_lazy_loading_html"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_feature_html",text:"km_rpbt_get_feature_html()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'km_rpbt_get_lazy_loading_html( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;)',notice:""},"km_rpbt_get_post_types-418":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$post_types</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>|<span class="array">array</span>)</span><span class="required">(Optional)</span><span class="description">Comma separated list or array with post type names.</span></p><p class="default">Default value: \'\'</p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with validated post types.</p></section>',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_comma_separated_values",text:"km_rpbt_get_comma_separated_values()"}],used_by:[{source:"includes/settings.php",url:"/functions/km_rpbt_sanitize_args",text:"km_rpbt_sanitize_args()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/validate_args",text:"Related_Posts_By_Taxonomy_Rest_API::validate_args()"}]},changelog:[{description:"Introduced.",version:"2.2"}],signature:'km_rpbt_get_post_types( <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$post_types</span>&nbsp;=&nbsp;<span class="arg-default">\'\'</span>&nbsp;)',notice:""},"km_rpbt_get_public_taxonomies-455":{html:"<hr /><section class=\"return\"><h3>Return</h3><p><span class='return-type'>(array)</span> Array with all public taxonomies.</p></section>",methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_taxonomies",text:"km_rpbt_get_taxonomies()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/prepare_item_for_response",text:"Related_Posts_By_Taxonomy_Rest_API::prepare_item_for_response()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:"km_rpbt_get_public_taxonomies()",notice:""},"km_rpbt_get_related_posts-127":{html:"<hr /><section class=\"description\"><h2>Description</h2><p>Used by the widget, shortcode and rest api.</p><p>If the cache is activated it tries to get the related posts from the cache first. If not found in the cache they will be cached before returning related posts</p><p>If taxonomies are not set in the arguments it queries for related posts in all public taxonomies.</p></section><hr /><section class=\"parameters\"><h3>Parameters</h3><dl><dt>$post_id</dt><dd><p class=\"desc\"><span class=\"type\">(<span class=\"array\">array</span>)</span><span class=\"required\">(Required)</span><span class=\"description\">The post id to get related posts for.</span></p></dd><dt>$args</dt><dd><p class=\"desc\"><span class=\"type\">(<span class=\"string\">string</span>|<span class=\"array\">array</span>)</span><span class=\"required\">(Optional)</span><span class=\"description\">Arguments to get related posts. <ul class=\"param-hash\"><li><b>'taxonomies'</b><br /><i><span class='type'>(string|array)</span></i> Taxonomies to use for related posts query. Array or comma separated list of taxonomy names. Default empty (all taxonomies).</li><li><b>'post_types'</b><br /><i><span class='type'>(string|array)</span></i> Post types to use for related posts query. Array or comma separated list of post type names. Default 'post'.</li><li><b>'posts_per_page'</b><br /><i><span class='type'>(int)</span></i> Number of related posts. Default 5.</li><li><b>'order'</b><br /><i><span class='type'>(string)</span></i> Order of related posts. Accepts 'DESC', 'ASC' and 'RAND'. Default 'DESC'.</li><li><b>'orderby'</b><br /><i><span class='type'>(string)</span></i> Order by post date or by date modified. Accepts 'post_date'and 'post_modified'. Default 'post_date'.</li><li><b>'fields'</b><br /><i><span class='type'>(string)</span></i> Return full post objects, IDs, post titles or post slugs. Accepts 'all', 'ids', 'names' or 'slugs'. Default is 'all'.</li><li><b>'terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to use for the related posts query. Array or comma separated list of term ids. The terms don't need to be assigned to the post to get related posts for. </li><li><b>'include_terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to include for the related posts query. Array or comma separated list of term ids. Only includes terms also assigned to the post to get related posts for. </li><li><b>'exclude_terms'</b><br /><i><span class='type'>(array|string)</span></i> Terms to exlude for the related posts query. Array or comma separated list of term ids. Default empty</li><li><b>'related'</b><br /><i><span class='type'>(boolean)</span></i> If false the <code>$include_terms</code> argument also includes terms not assigned to the post to get related posts for. Default true.</li><li><b>'exclude_post'</b><br /><i><span class='type'>(array|string)</span></i> Exclude posts for the related posts query. Array or comma separated list of post ids. </li><li><b>'limit_posts'</b><br /><i><span class='type'>(int)</span></i> Limit the posts to search related posts in. Default -1 (search in all posts).</li><li><b>'limit_month'</b><br /><i><span class='type'>(int)</span></i> Limit the posts to the past months to search related posts in.</li><li><b>'post_thumbnail'</b><br /><i><span class='type'>(boolean)</span></i> Whether to query for related posts with a featured image only. Default false.</li><li><b>'public_only'</b><br /><i><span class='type'>(boolean)</span></i> Whether to exclude private posts in the related posts display, even if the current user has the capability to see those posts. Default false (include private posts)</li><li><b>'include_self'</b><br /><i><span class='type'>(string|boolean)</span></i> Whether to include the current post in the related posts results. The included post is ordered at the top. Use 'regular_order' to include the current post ordered by terms in common. Default false (exclude current post).</li><li><b>'post_class'</b><br /><i><span class='type'>(string)</span></i> Class for the related post items. </li><li><b>'meta_key'</b><br /><i><span class='type'>(string)</span></i> Meta key.</li><li><b>'meta_value'</b><br /><i><span class='type'>(string)</span></i> Meta value.</li><li><b>'meta_compare'</b><br /><i><span class='type'>(string)</span></i> MySQL operator used for comparing the $meta_value. Accepts '=', '!=', '&gt;', '&gt;=', '&lt;', '&lt;=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN', 'BETWEEN', 'NOT BETWEEN', 'REGEXP', 'NOT REGEXP', 'RLIKE', 'EXISTS' or 'NOT EXISTS'. Default is 'IN' when <code>$meta_value</code> is an array, '=' otherwise.</li><li><b>'meta_type'</b><br /><i><span class='type'>(string)</span></i> MySQL data type that the meta_value column will be CAST to for comparisons. Accepts 'NUMERIC', 'BINARY', 'CHAR', 'DATE', 'DATETIME', 'DECIMAL', 'SIGNED', 'TIME', or 'UNSIGNED'. Default is 'CHAR'.</li></li></ul></span></p><p class=\"default\">Default value: array()</p></dd></dl></section><hr /><section class=\"return\"><h3>Return</h3><p><span class='return-type'>(array)</span> Array with related post objects.</p></section>",methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_sanitize_args",text:"km_rpbt_sanitize_args()"},{source:"includes/query.php",url:"/functions/km_rpbt_query_related_posts",text:"km_rpbt_query_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_public_taxonomies",text:"km_rpbt_get_public_taxonomies()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"},{source:"includes/functions.php",url:"/functions/km_rpbt_is_cache_loaded",text:"km_rpbt_is_cache_loaded()"},{source:"includes/functions.php",url:"/hooks/related_posts_by_taxonomy_pre_related_posts",text:"related_posts_by_taxonomy_pre_related_posts"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_feature_html",text:"km_rpbt_get_feature_html()"},{source:"includes/functions.php",url:"/functions/km_rpbt_cache_related_posts",text:"km_rpbt_cache_related_posts()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_related_posts",text:"Related_Posts_By_Taxonomy_Rest_API::get_related_posts()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/get_related_posts",text:"Related_Posts_By_Taxonomy::get_related_posts()"},{source:"includes/class-lazy-loading.php",url:"/classes/related_posts_by_taxonomy_lazy_loading/lazy_loading_query",text:"Related_Posts_By_Taxonomy_Lazy_Loading::lazy_loading_query()"},{source:"includes/back-compat/deprecated.php",url:"/functions/km_rpbt_shortcode_get_related_posts",text:"km_rpbt_shortcode_get_related_posts()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'km_rpbt_get_related_posts( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$post_id</span>,  <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>&nbsp;)',notice:""},"km_rpbt_get_related_posts_html-314":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$related_posts</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Array with related post objects.</span></p></dd><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_related_posts_by_taxonomy_shortcode/">km_rpbt_related_posts_by_taxonomy_shortcode()</a> for for more information on accepted arguments.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(string)</span> Related posts HTML</p></section>',methods:[],related:{uses:[{source:"includes/template-loader.php",url:"/functions/km_rpbt_get_template",text:"km_rpbt_get_template()"},{source:"includes/settings.php",url:"/functions/km_rpbt_get_settings_type",text:"km_rpbt_get_settings_type()"},{source:"includes/settings.php",url:"/functions/km_rpbt_get_default_settings",text:"km_rpbt_get_default_settings()"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_feature_html",text:"km_rpbt_get_feature_html()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/prepare_item_for_response",text:"Related_Posts_By_Taxonomy_Rest_API::prepare_item_for_response()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/widget_output",text:"Related_Posts_By_Taxonomy::widget_output()"},{source:"includes/class-lazy-loading.php",url:"/classes/related_posts_by_taxonomy_lazy_loading/lazy_loading_query",text:"Related_Posts_By_Taxonomy_Lazy_Loading::lazy_loading_query()"},{source:"includes/back-compat/deprecated.php",url:"/functions/km_rpbt_shortcode_output",text:"km_rpbt_shortcode_output()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'km_rpbt_get_related_posts_html( <span class="arg-type">array</span>&nbsp;<span class="arg-name">$related_posts</span>, &nbsp;<span class="arg-name">$rpbt_args</span>&nbsp;)',notice:""},"km_rpbt_get_taxonomies-436":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$taxonomies</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>|<span class="array">array</span>)</span><span class="required">(Required)</span><span class="description">Taxonomies.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with taxonomy names.</p></section>',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_comma_separated_values",text:"km_rpbt_get_comma_separated_values()"},{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"}],used_by:[{source:"includes/query.php",url:"/functions/km_rpbt_query_related_posts",text:"km_rpbt_query_related_posts()"},{source:"includes/settings.php",url:"/functions/km_rpbt_sanitize_args",text:"km_rpbt_sanitize_args()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_public_taxonomies",text:"km_rpbt_get_public_taxonomies()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/validate_args",text:"Related_Posts_By_Taxonomy_Rest_API::validate_args()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/check_cache",text:"Related_Posts_By_Taxonomy_Debug::check_cache()"},{source:"includes/class-cache.php",url:"/classes/related_posts_by_taxonomy_cache/get_cache",text:"Related_Posts_By_Taxonomy_Cache::get_cache()"}]},changelog:[{description:"Introduced.",version:"2.2"}],signature:'km_rpbt_get_taxonomies( <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$taxonomies</span>&nbsp;)',notice:""},"km_rpbt_get_terms-202":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$post_id</dt><dd><p class="desc"><span class="type">(<span class="int">int</span>)</span><span class="required">(Required)</span><span class="description">The post id to get terms for.</span></p></dd><dt>$taxonomies</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>|<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">The taxonomies to retrieve terms from.</span></p></dd><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>|<span class="array">array</span>)</span><span class="required">(Optional)</span><span class="description">Arguments to get terms. <ul class="param-hash"><li><b>\'terms\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Terms to use for the related posts query. Array or comma separated list of term ids. The terms don\'t need to be assigned to the post set by the <code>$post_id</code> argument. </li><li><b>\'include_terms\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Terms to include for the related posts query. Array or comma separated list of term ids. Only includes terms also assigned to the post set by the <code>$post_id</code> argument. </li><li><b>\'exclude_terms\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Terms to exlude for the related posts query. Array or comma separated list of term ids. Default empty</li><li><b>\'related\'</b><br /><i><span class=\'type\'>(boolean)</span></i> If false the <code>$include_terms</code> argument also includes terms not assigned to the post set by the <code>$post_id</code> argument. Default true.</li></li></ul></span></p><p class="default">Default value: array()</p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with term ids.</p></section>',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_sanitize_args",text:"km_rpbt_sanitize_args()"}],used_by:[{source:"includes/query.php",url:"/functions/km_rpbt_query_related_posts",text:"km_rpbt_query_related_posts()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'km_rpbt_get_terms( <span class="arg-type">int</span>&nbsp;<span class="arg-name">$post_id</span>,  <span class="arg-type">array|string</span>&nbsp;<span class="arg-name">$taxonomies</span>,  <span class="arg-type">string|array</span>&nbsp;<span class="arg-name">$args</span>&nbsp;=&nbsp;<span class="arg-default">array()</span>&nbsp;)',notice:""},"km_rpbt_is_cache_loaded-485":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$plugin</dt><dd><p class="desc"><span class="type">(<span class="object">object</span>)</span><span class="required">(Required)</span><span class="description"><a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/classes/related_posts_by_taxonomy_cache/">Related_Posts_By_Taxonomy_Cache</a> object. Default null.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(bool)</span> True if the cache class is loaded.</p></section>',methods:[],related:{uses:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin",text:"km_rpbt_plugin()"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_cache_related_posts",text:"km_rpbt_cache_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_flush_cache",text:"km_rpbt_flush_cache()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/debug_setup",text:"Related_Posts_By_Taxonomy_Debug::debug_setup()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:"km_rpbt_is_cache_loaded()",notice:""},"km_rpbt_plugin-14":{html:'<hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(Object|false)</span> <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/classes/related_posts_by_taxonomy_defaults/">Related_Posts_By_Taxonomy_Defaults</a> instance or false.</p></section>',methods:[],related:{uses:[{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/get_instance",text:"Related_Posts_By_Taxonomy_Defaults::get_instance()"}],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_taxonomies",text:"km_rpbt_get_taxonomies()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_public_taxonomies",text:"km_rpbt_get_public_taxonomies()"},{source:"includes/functions.php",url:"/functions/km_rpbt_is_cache_loaded",text:"km_rpbt_is_cache_loaded()"},{source:"includes/functions.php",url:"/functions/km_rpbt_flush_cache",text:"km_rpbt_flush_cache()"},{source:"includes/class-widget.php",url:"/classes/related_posts_by_taxonomy/__construct",text:"Related_Posts_By_Taxonomy::__construct()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/debug_setup",text:"Related_Posts_By_Taxonomy_Debug::debug_setup()"},{source:"includes/back-compat/deprecated.php",url:"/functions/km_rpbt_get_shortcode_atts",text:"km_rpbt_get_shortcode_atts()"}]},changelog:[{description:"Introduced.",version:"2.1"}],signature:"km_rpbt_plugin()",notice:""},"km_rpbt_plugin_supports-33":{html:'<hr /><section class="description"><h2>Description</h2><p>See the <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/hooks/related_posts_by_taxonomy_supports/">&#8216;related_posts_by_taxonomy_supports&#8217;</a> filter which features are supported by default and which are opt-in</p></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$type</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="required">(Required)</span><span class="description">Type of feature.</span></p></dd></dl></section><hr /><section class="return"><h3>Return</h3><p><span class=\'return-type\'>(bool)</span> True if the feature is supported.</p></section>',methods:[],related:{uses:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_plugin_supports",text:"km_rpbt_get_plugin_supports()"},{source:"includes/functions.php",url:"/hooks/related_posts_by_taxonomy_feature",text:"related_posts_by_taxonomy_{$feature}"}],used_by:[{source:"includes/settings.php",url:"/functions/km_rpbt_get_template_fields",text:"km_rpbt_get_template_fields()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/functions.php",url:"/functions/km_rpbt_get_feature_html",text:"km_rpbt_get_feature_html()"},{source:"includes/functions.php",url:"/functions/km_rpbt_cache_related_posts",text:"km_rpbt_cache_related_posts()"},{source:"includes/class-rest-api.php",url:"/classes/related_posts_by_taxonomy_rest_api/get_items_permissions_check",text:"Related_Posts_By_Taxonomy_Rest_API::get_items_permissions_check()"},{source:"includes/class-defaults.php",url:"/classes/related_posts_by_taxonomy_defaults/plugin_supports",text:"Related_Posts_By_Taxonomy_Defaults::plugin_supports()"},{source:"includes/class-lazy-loading.php",url:"/classes/related_posts_by_taxonomy_lazy_loading/lazy_loading_query",text:"Related_Posts_By_Taxonomy_Lazy_Loading::lazy_loading_query()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/cache_init",text:"Related_Posts_By_Taxonomy_Plugin::cache_init()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/debug_init",text:"Related_Posts_By_Taxonomy_Plugin::debug_init()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/widget_init",text:"Related_Posts_By_Taxonomy_Plugin::widget_init()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/rest_api_init",text:"Related_Posts_By_Taxonomy_Plugin::rest_api_init()"},{source:"includes/class-plugin.php",url:"/classes/related_posts_by_taxonomy_plugin/lazy_loading_init",text:"Related_Posts_By_Taxonomy_Plugin::lazy_loading_init()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/debug_setup",text:"Related_Posts_By_Taxonomy_Debug::debug_setup()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/debug_link",text:"Related_Posts_By_Taxonomy_Debug::debug_link()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/get_supports",text:"Related_Posts_By_Taxonomy_Debug::get_supports()"},{source:"includes/class-debug.php",url:"/classes/related_posts_by_taxonomy_debug/wp_footer",text:"Related_Posts_By_Taxonomy_Debug::wp_footer()"},{source:"includes/class-cache.php",url:"/classes/related_posts_by_taxonomy_cache/get_cache_settings",text:"Related_Posts_By_Taxonomy_Cache::get_cache_settings()"},{source:"includes/class-cache.php",url:"/classes/related_posts_by_taxonomy_cache/display_cache_log",text:"Related_Posts_By_Taxonomy_Cache::display_cache_log()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'km_rpbt_plugin_supports(&nbsp;<span class="arg-name">$feature</span>&nbsp;)',notice:""},"related_posts_by_taxonomy_feature-61":{html:'<hr /><section class="description"><h2>Description</h2><p>The dynamic portion of the hook name, <code>$feature</code>, refers to the type of support.</p><ul><li>widget</li><li>widget_hide_empty</li><li>shortcode</li><li>shortcode_hide_empty</li><li>cache</li><li>display_cache_log</li><li>wp_rest_api</li><li>id_query</li><li>lazy_loading</li><li>debug</li></ul></section><hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$bool</dt><dd><p class="desc"><span class="type">(<span class="bool">bool</span>)</span><span class="description">Add support if true. Default false</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_plugin_supports",text:"km_rpbt_plugin_supports()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'<span class="hook-func">apply_filters</span>( "related_posts_by_taxonomy_{$feature}",  <nobr><span class="arg-type">bool</span> <span class="arg-name">$bool</span></nobr> )',notice:""},"related_posts_by_taxonomy_after_display-299":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="description">Display type, widget or shortcode.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_feature_html",text:"km_rpbt_get_feature_html()"},{source:"includes/class-lazy-loading.php",url:"/classes/related_posts_by_taxonomy_lazy_loading/lazy_loading_query",text:"Related_Posts_By_Taxonomy_Lazy_Loading::lazy_loading_query()"}]},changelog:[{description:"Introduced.",version:"1.0.0"}],signature:'<span class="hook-func">do_action</span>( \'related_posts_by_taxonomy_after_display\',  <nobr><span class="arg-type">string</span> <span class="arg-name"></span></nobr> )',notice:""},"related_posts_by_taxonomy_lazy_loading_html-393":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$content</dt><dd><p class="desc"><span class="type">(<span class="string">string</span>)</span><span class="description">HTML that will be displayed while loading posts. Default empty string.</span></p></dd><dt>$args</dt><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">See <a href="https://keesiemeijer.github.io/related-posts-by-taxonomy/functions/km_rpbt_related_posts_by_taxonomy_shortcode/">km_rpbt_related_posts_by_taxonomy_shortcode()</a> arguments.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_lazy_loading_html",text:"km_rpbt_get_lazy_loading_html()"}]},changelog:[{description:"Introduced.",version:"2.6.0"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_lazy_loading_html\',  <nobr><span class="arg-type">string</span> <span class="arg-name">$content</span></nobr>,  <nobr><span class="arg-type">array</span> <span class="arg-name">$args</span></nobr> )',notice:""},"related_posts_by_taxonomy_pre_related_posts-157":{html:'<hr /><section class="parameters"><h3>Parameters</h3><dl><dt>$related_posts</dt><dd><p class="desc"><span class="type">(<span class="boolean">boolean</span>|<span class="array">array</span>)</span><span class="description">Return an array with (related) post objects to use your own related post. This prevents the query for related posts by this plugin. Default false (Let this plugin query for related posts).</span></p></dd><dd><p class="desc"><span class="type">(<span class="array">array</span>)</span><span class="description">Array with widget or shortcode arguments.</span></p></dd></dl></section>',methods:[],related:{uses:[],used_by:[{source:"includes/functions.php",url:"/functions/km_rpbt_get_related_posts",text:"km_rpbt_get_related_posts()"},{source:"includes/class-cache.php",url:"/classes/related_posts_by_taxonomy_cache/set_cache",text:"Related_Posts_By_Taxonomy_Cache::set_cache()"},{source:"includes/class-cache.php",url:"/classes/related_posts_by_taxonomy_cache/get_cache",text:"Related_Posts_By_Taxonomy_Cache::get_cache()"}]},changelog:[{description:"Introduced.",version:"2.5.0"}],signature:'<span class="hook-func">apply_filters</span>( \'related_posts_by_taxonomy_pre_related_posts\',  <nobr><span class="arg-type">boolean|array</span> <span class="arg-name">$related_posts</span></nobr>,  <nobr><span class="arg-type">array</span> <span class="arg-name"></span></nobr> )',notice:""}}}}]);
//# sourceMappingURL=15.f0f65735.chunk.js.map