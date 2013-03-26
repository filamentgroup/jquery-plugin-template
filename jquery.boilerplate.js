/*
 * Plugin Name
 * https://github.com/filamentgroup/PLUGIN-URL
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

;(function ($, window, document, undefined) {
    
    // Defaults
    var pluginName = "defaultPluginName";
    // overrideable defaults
    var defaults = {
        propertyName: "value"
    };

    // plugin constructor
    function Plugin(element, options) {
        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin

        // Allow data-attr option setting?
        // string and number type defaults can be overridden by data attributes of the same name (with dashes in place of camelCase), if a data-config attribute is present on the widget element.
        // options set via data attributes will be overridden by options passed directly as arguments
        if( this.element.is( "[data-config]" ) ){
            var dataOptions = {};
            for( var i in defaults ){
                if( defaults.hasOwnProperty( i ) && ( typeof( defaults[ i ] === "string" ) ) || typeof( defaults[ i ] === "number" ) ){
                    var dataOption = elem.attr( i.replace( /[A-Z]/g, function( c ) {
                            return "-" + c.toLowerCase();
                        }));

                    if( typeof( dataOption ) === "string" || typeof( dataOption ) === "number" ){
                        dataOptions[ i ] = dataOption;
                    }
                }
            }
        }


        this.options = $.extend( {}, defaults, dataOptions, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).
        },
        // sample method
        yourOtherFunction: function () {
            
        },
        // sample private method (not actually private, but more for notation purposes)
        _yourOtherPrivateFunction: function() {

        }
    };

    // lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function (options) {
        return this.each(function () {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };
    
    // Simple auto-init by selector that runs when the dom is ready. Use if desirable.
    $(function(){
        $( "." + pluginName )[ pluginName ]();
    });

})(jQuery, window, document);
